/**
 * @module RDS
 */
'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Util = require('util'),
	Q = require('q'),
	logger = require('../../libs/logger');

const perPage = 10;

const ValidationError = require("@anzuev/studcloud.errors").ValidationError,
	DbError = require("@anzuev/studcloud.errors").DbError;


/**
 * @class WorkType
 * @property {string} title - название
 * @property {date} created - дата создания
 * @property {date} updated - дата обновления
 * @property {boolean} enabled - Активен ли предмет?
 * @property {string[]} tags - Тэги
 */
var WorkType = new Schema({
	title: {
		type: String,
		unique: true
	},
	created: {
		type: Date,
		default: Date.now()
	},
	updated: {
		type: Date,
		default: Date.now()
	},
	enabled: {
		type: Boolean,
		default: false
	},
	tags:[String]
});


/**
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * Добавление типа работы,
 * @param title - название работы
 * @param tags - тэги
 * @throws {DbError}, 400 - нарушена уникальность названия
 * @throws {DbError}, 500 - ошибка бд
 * @returns {WorkType} объект типа WorkType
 */

function* createNew(title, tags){
	let WorkType = this;
	let promise = WorkType.find({title: title}).exec();

	try{
		let workTypes = yield promise;
		if(workTypes.length > 0){
			throw new DbError(null, 400, Util.format('WorkTypes with title "%s" already exists', title));
		}else {
			let workType = new WorkType({
				title: title,
				tags: tags
			});
			workType = yield* workType.saveType();
			return workType;
		}
	}catch(err){
		logger.error(err);
		if(err instanceof DbError){
			throw err;
		}else{
			throw new DbError(err, 500);
		}
	}

}
WorkType.statics.createNew = createNew;

/**
 * Изменение title у типа работы
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param id - идентификатор типа работы
 * @param newTitle - новое название
 * @return {promise}
 * @fulfil {WorkType}, объект типа WorkType
 * @reject {DbError}, 400 - нарушена уникальность названия
 * @reject {DbError}, 404 - нет типа с таким названием
 * @reject {DbError}, 500 - ошибка бд

 */

function setName(id, newTitle){
	let WorkType = this;
	let deffer = Q.defer();
	let promise = WorkType.findOne({_id: id}).exec();

	promise.then(function(type){
		if(!type){
			throw new DbError(null, 404, Util.format('WorkType with id "%s" does not exist', id));
		}else{
			type.title = newTitle;
			type.updated = new Date();
			return type.save();
		}
	}).then(function(workType){
		return deffer.fulfill(workType);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else if(err.code == 11000 || err.code == 11001) {
			return deffer.reject(new DbError(null, 400, Util.format('WorkType with title "%s" already exists', newTitle)));
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.setName = setName;



/**
 * Активация работы по id
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param id - идентификатор работы
 * @returns {promise}
 * @fulfill {WorkType} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function enable(id){
	let WorkType = this;
	let deffer = Q.defer();
	let promise = WorkType.findById(id).exec();

	promise.then(function(type){
		if(!type){
			throw new DbError(null, 404, Util.format('WorkType with id "%s" does not exist', id));
		}else{
			type.enabled = true;
			type.updated = new Date();
			return type.save();
		}
	}).then(function(workType){
		return deffer.fulfill(workType);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.enable = enable;


/**
 * Дизактивация работы по id
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param id - идентификатор работы
 * @returns {promise}
 * @fulfill {WorkType} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function disable(id){
	let WorkType = this;
	let deffer = Q.defer();
	let promise = WorkType.findById(id).exec();

	promise.then(function(type){
		if(!type){
			throw new DbError(null, 404, Util.format('WorkType with id "%s" does not exist', id));
		}else{
			type.enabled = false;
			type.updated = new Date();
			return type.save();
		}
	}).then(function(workType){
		return deffer.fulfill(workType);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.disable = disable;


/**
 * Получение типа по id
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param id - идентификатор типа
 * @returns {promise}
 * @fulfill {WorkType} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function getById(id){
	let WorkType = this;
	let deffer = Q.defer();
	let promise = WorkType.findById(id).exec();

	promise.then(function(type){
		if(!type){
			throw new DbError(null, 404, Util.format('WorkType with id "%s" does not exist', id));
		}else{
			deffer.fulfill(type);
		}
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.getById = getById;




/**
 * Поиск/получение неактивированных типов
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {workType}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getEnabled(query, skip){
	let WorkType = this;
	let deffer = Q.defer();
	let promise;
	if(query){
		promise = WorkType.find(
			{
				title: {$regex: query},
				enabled: true
			}).skip(skip * perPage).exec();
	}else{
		promise = WorkType.find(
			{
				enabled: true
			}).limit(10).skip(skip * perPage)
			.exec();
	}
	promise.then(function(types){
		if(types.length == 0){
			throw new DbError(null, 204, Util.format('No workTypes found by query "%s"', query));
		}else{
			deffer.fulfill(types);
		}
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.getEnabled = getEnabled;


/**
 * Поиск/получение по всем типам работ
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {workType}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getAll(query, skip){
	let WorkType = this;
	let deffer = Q.defer();
	let promise;
	if(query && query.length != 0){
		promise = WorkType.find(
			{
				title: {$regex: query}
			}).skip(skip * perPage).exec();
	}else{
		promise = WorkType.find(
			{}).skip(skip * perPage).limit(10)
			.exec();
	}
	promise.then(function(types){
		if(types.length == 0){
			throw new DbError(null, 204, Util.format('No workTypes found by query "%s"', query));
		}else{
			deffer.fulfill(types);
		}
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.getAll = getAll;

/**
 * Поиск/получение неактивированных типов
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {workType}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getDisabled(query, skip){
	let WorkType = this;
	let deffer = Q.defer();
	let promise;
	if(query){
		promise = WorkType.find(
			{
				title: {$regex: query},
				enabled: false
			}).skip(skip * perPage).exec();
	}else{
		promise = WorkType.find(
			{
				enabled: false
			}).skip(skip * perPage).limit(10)
			.exec();
	}
	promise.then(function(types){
		if(types.length == 0){
			throw new DbError(null, 204, Util.format('No workTypes found by query "%s"', query));
		}else{
			deffer.fulfill(types);
		}
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
WorkType.statics.getDisabled = getDisabled;


/**
 * Проверка существуюет ли такой тип
 * @this {WorkType}
 * @memberof module:RDS~WorkType
 * @param id - идентификатор типа
 * @returns {promise}
 * @fulfill {boolean}, true - тип существует, false - типа нет.
 * @reject {DbError}, 500 - ошибка бд
 */
function isExist(id){
	let WorkType = this;
	let deffer = Q.defer();
	let promise = WorkType.findById(id).exec();

	promise.then(function(type){
		if(!type){
			deffer.fulfill(false);
		}else{
			deffer.fulfill(true);
		}
	}).catch(function(err){
		return deffer.reject(new DbError(err, 500));
	});
	return deffer.promise;
};
WorkType.statics.isExist = isExist;


/**
 * Безопасное сохранение типа
 * @this {WorkType}
 * @memberof module:RDS~WorkType.prototype
 * @returns {WorkType}
 * @throws {DbError}, 500 - ошибка базы данных
 */
function* saveType (){
	let errCounter = 5;
	let user;
	while(errCounter > 0){
		try{
			user = yield this.save();
			break;
		}catch(err){
			errCounter--;
			logger.error(new DbError(err, 500, 'Ошибка при сохранении пользователя, колличество ошибок - %d', 5 - errCounter));
			if(errCounter == 0) throw err;
		}
	}
	return user;
}
WorkType.methods.saveType = saveType;


/*
	Methods
 */


/**
 * @this {WorkType}
 * @memberof module:RDS~WorkType.prototype
 * Получение имени типа предмета
 * @returns {string}
 */
function getTitle(){
	return this.title;
}
WorkType.methods.getTitle = getTitle;


exports.WorkTypes = WorkType;
