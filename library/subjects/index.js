/**
 * @module RDS
 */
'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Util = require('util'),
	Q = require('q'),
	logger = require('../../libs/logger').getLogger();

const perPage = 10;

const ValidationError = require("@anzuev/studcloud.errors").ValidationError,
	DbError = require("@anzuev/studcloud.errors").DbError;


/**
 * @class Subject
 * @property {string} title - название
 * @property {date} created - дата создания
 * @property {date} updated - дата обновления
 * @property {boolean} enabled - Активен ли предмет?
 */

var Subject = new Schema({
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
    }
},
	{
		collection: 'subjects'
	});



/**
 * @this {Subject}
 * @memberof module:RDS~Subject
 * Добавление предмета работы,
 * @param title - название предмета
 * @throws {DbError}, 400 - нарушена уникальность названия
 * @throws {DbError}, 500 - ошибка бд
 * @returns {Subject} объект типа Subject
 */


function* createNew(title){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.find({title: title}).exec();

	try{
		let subjects = yield promise;
		if(subjects.length > 0){
			throw new DbError(null, 400, Util.format('Subject with title "%s" already exists', title));
		}else {
			let subject = new Subject({
				title: title
			});
			subject = yield* subject.saveSubject();
			return subject;
		}
	}catch(err){
		if(err instanceof DbError){
			throw err;
		}else{
			throw new DbError(err, 500);
		}
	}

}
Subject.statics.createNew = createNew;


/**
 *
 * Проверка существуюет ли такой предмет
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param id - идентификатор предмета
 * @returns {promise}
 * @fulfill {boolean}, true - предмет существует, false - предмета нет.
 * @reject {DbError}, 500 - ошибка бд
 */
function isExist(id){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.findById(id).exec();
	
	promise.then(function(subject){
		if(!subject){
			deffer.fulfill(false);
		}else{
			deffer.fulfill(true);
		}
	}).catch(function(err){
		return deffer.reject(new DbError(err, 500));
	});
	return deffer.promise;
};
Subject.statics.isExist = isExist;


/**
 * Получение предмета по id
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param id - идентификатор предмета
 * @returns {promise}
 * @fulfill {Subject} - все прошло хорошо
 * @reject {DbError}, 404 - не найден предмет по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function getById(id){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.findById(id).exec();
	
	promise.then(function(subject){
		if(!subject){
			throw new DbError(null, 404, Util.format('Subject with id "%s" does not exist', id));
		}else{
			deffer.fulfill(subject);
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
Subject.statics.getById = getById;


/**
 * Поиск/получение неактивированных предметов
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {Subject}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getEnabled(query, skip){
	let Subject = this;
	let deffer = Q.defer();
	let promise;
	if(query){
		promise = Subject.find(
			{
				title: {$regex: query},
				enabled: true
			}).skip(skip * perPage).exec();
	}else{
		promise = Subject.find(
			{
				enabled: true
			}).limit(10).skip(skip * perPage)
			.exec();
	}
	promise.then(function(subjects){
		if(subjects.length == 0){
			throw new DbError(null, 204, Util.format('No subjects found by query "%s"', query));
		}else{
			deffer.fulfill(subjects);
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
Subject.statics.getEnabled = getEnabled;


/**
 * Поиск/получение по всем предметам
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {Subject}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getAll(query, skip){
	let Subject = this;
	let deffer = Q.defer();
	let promise;
	if(query && query.length != 0){
		promise = Subject.find(
			{
				title: {$regex: query}
			}).skip(skip * perPage).exec();
	}else{
		promise = Subject.find(
			{}).skip(skip * perPage).limit(10)
			.exec();
	}
	promise.then(function(subjects){
		if(subjects.length == 0){
			throw new DbError(null, 204, Util.format('No subjects found by query "%s"', query));
		}else{
			deffer.fulfill(subjects);
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
Subject.statics.getAll = getAll;

/**
 * Поиск/получение неактивированных предметов
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param query - опционально. Строка для поиска
 * @param {number} skip - сколько страниц пропускаем сначала?
 * @returns {promise}
 * @fulfill {Subject}
 * @reject {DbError}, 204 - ничего не найдено
 * @reject {DbError}, 500 - ошибка сервера бд
 */
function getDisabled(query, skip){
	let Subject = this;
	let deffer = Q.defer();
	let promise;
	if(query){
		promise = Subject.find(
			{
				title: {$regex: query},
				enabled: false
			}).skip(skip * perPage).exec();
	}else{
		promise = Subject.find(
			{
				enabled: false
			}).skip(skip * perPage).limit(10)
			.exec();
	}
	promise.then(function(subjects){
		if(subjects.length == 0){
			throw new DbError(null, 204, Util.format('No subjects found by query "%s"', query));
		}else{
			deffer.fulfill(subjects);
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
Subject.statics.getDisabled = getDisabled;


/**
 * Изменение title у предмета,
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param id - идентификатор
 * @param newTitle - новое название
 * @reject {DbError}, 400 - нарушена уникальность названия
 * @reject {DbError}, 500 - ошибка бд
 * @fulfill {Subject} объект типа Subject
 * @returns {promise}
 */

function setName(id, newTitle){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.findOne({_id: id}).exec();

	promise.then(function(subject){
		if(!subject){
			throw new DbError(null, 404, Util.format('Subject with id "%s" does not exist', id));
		}else{
			subject.title = newTitle;
			subject.updated = new Date();
			return subject.saveSubject();
		}
	}).then(function(subject){
		return deffer.fulfill(subject);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else if(err.code == 11000 || err.code == 11001) {
			return deffer.reject(new DbError(null, 400, Util.format('Subject with title "%s" already exists', newTitle)));
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
Subject.statics.setName = setName;



/**
 * Активация предмета по id,
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param id - идентификатор работы
 * @returns {promise}
 * @fulfill {WorkType} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function enable(id){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.findById(id).exec();

	promise.then(function(subject){
		if(!subject){
			throw new DbError(null, 404, Util.format('Subject with id "%s" does not exist', id));
		}else{
			subject.enabled = true;
			subject.updated = new Date();
			return subject.saveSubject();
		}
	}).then(function(subject){
		return deffer.fulfill(subject);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
Subject.statics.enable = enable;


/**
 * Дизактивация работы по id
 * @this {Subject}
 * @memberof module:RDS~Subject
 * @param id - идентификатор работы
 * @returns {promise}
 * @fulfill {WorkType} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function disable(id){
	let Subject = this;
	let deffer = Q.defer();
	let promise = Subject.findById(id).exec();

	promise.then(function(subject){
		if(!subject){
			throw new DbError(null, 404, Util.format('Subject with id "%s" does not exist', id));
		}else{
			subject.enabled = false;
			subject.updated = new Date();
			return subject.saveSubject();
		}
	}).then(function(subject){
		return deffer.fulfill(subject);
	}).catch(function(err){
		if(err instanceof DbError){
			return deffer.reject(err);
		}else{
			return deffer.reject(new DbError(err, 500));
		}
	});
	return deffer.promise;
};
Subject.statics.disable = disable;


/**
 * Безопасное сохранение предмета
 * @this {Subject}
 * @memberof module:RDS~Subject.prototype
 * @returns {Subject}
 * @throws {DbError}, 500 - ошибка базы данных
 */
function* saveSubject(){
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
Subject.methods.saveSubject = saveSubject;


/*
 Methods
 */


/**
 *
 * Получение имени предмета
 * @this {Subject}
 * @memberof module:RDS~Subject.prototype
 * @returns {string}
 */
function getTitle(){
	return this.title;
}
Subject.methods.getTitle = getTitle;



module.exports = Subject;



