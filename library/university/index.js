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
 * @class Faculty
 * @property {string} title - полное название
 * @property {string} shortTitle - сокращенное название
 * @property {date} created - дата создания
 * @property {date} updated - дата обновления
 * @property {mongoose.Types.ObjectId} id - идентификатор
 */
var Faculty = new Schema({
	title: {
		type: String
	},
	shortTitle:{
		type: String
	},
	created: {
		type: Date,
		default: Date.now()
	},
	updated: {
		type: Date,
		default: Date.now()
	},
	_id: 0,
	id: {
		type:Schema.Types.ObjectId,
		unique: true
	}
});

/**
 * @class University
 * @property {string} title - полное название
 * @property {string} shortTitle - сокращенное название
 * @property {Faculty[]} faculties - массив факультетов
 * @property {string} location.city - Город
 * @property {string} location.street - улица
 * @property {string} location.building - Номер дома
 * @rating {number} rating - рейтинг университета
 * @property {date} created - дата создания
 * @property {date} updated - дата обновления
 * @property {boolean} enabled - Активен ли предмет?
 * @property {mongoose.Types.ObjectId} id - идентификатор
 */
var University = new Schema({
	title: {
		type: String,
		unique: true
	},
	shortTitle:{
		type: String,
		unique: true
	},
	faculties:[Faculty],
	location:{
		city: String,
		street: String,
		building:String
	},
	rating: Number,
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
		default: true
	},
	_id: 0,
	id: {
		type:Schema.Types.ObjectId,
		unique: true
	}
});


/**
 * @function getTitle
 * @memberof module:RDS~University.prototype
 * @this {University}
 * Получение названия университета
 * @returns {string} - название
 */
function getTitle(){
	return this.title;
}
University.methods.getTitle = getTitle;

/**
 * @function getTitle
 * @memberof module:RDS~Faculty.prototype
 * @this {Faculty}
 * Получение названия университета
 * @returns {string} - название
 */
Faculty.methods.getTitle = getTitle;



/**
 * @function getShortTitle
 * @memberof module:RDS~University.prototype
 * @this {University}
 * Получение краткого названия университета
 * @returns {string} - краткое название
 */
function getShortTitle(){
	return this.shortTitle;
}
University.methods.getShortTitle = getShortTitle;

/**
 * @function getShortTitle
 * @memberof module:RDS~Faculty.prototype
 * @this {Faculty}
 * Получение краткого названия университета
 * @returns {string} - краткое название
 */
Faculty.methods.getShortTitle = getShortTitle;


/**
 * @memberof module:RDS~University
 * @this {University}
 * Получение университета по id
 * @param id - идентификатор типа
 * @returns {promise}
 * @fulfill {University} - все прошло хорошо
 * @reject {DbError}, 404 - не найден тип по id
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function getById(id){
	let University = this;
	let deffer = Q.defer();
	let promise = University.findById(id).exec();

	promise.then(function(type){
		if(!type){
			throw new DbError(null, 404, Util.format('University with id "%s" does not exist', id));
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
University.statics.getById = getById;



function formatForSearch(format){
	if(format){
		return {
			title: this.shortTitle,
			id: this.id
		}

	}else {
		return {
			title: this.shortTitle,
			id: this.id
		}
	}
}
/**
 * @function formatForSearch
 * @memberof module:RDS~Faculty.prototype
 * @this {Faculty}
 * Метод для форматирования факультетов или университетов для выдачи
 * @param {boolean} format true - длинное(title), false - краткое(shortTitle)
 * @returns {object} formatted faculty
 */
Faculty.methods.formatForSearch = formatForSearch;
/**
 * @function formatForSearch
 * @memberof module:RDS~University.prototype
 * @this {University}
 * Метод для форматирования факультетов или университетов для выдачи
 * @param {boolean} format true - длинное(title), false - краткое(shortTitle)
 * @returns {object} formatted University
 */
University.methods.formatForSearch = formatForSearch;




/**
 * @this {University}
 * @memberof module:RDS~University
 * Метод для получения списка факультетов в рамках одного универа по id
 * @param {string} university - id университета
 * @param {boolean} format, true - длинное(title), false - краткое(shortTitle)
 * @return {promise}
 * @fulfill - Массив для выдачи
 * @reject{DbError}, 204 - не найдено факультетов
 * @reject {DbError}, 500 - ошибка базы данных.
 *
 */
function getFaculties(university, format) {
	let deffer = Q.defer();

	let query = [
		{
			$match: {
				_id: mongoose.Types.ObjectId(university)
			}
		},
		{
			$limit: 10
		},
		{
			$sort: {}
		},
		{
			$project: {
				faculties: "$faculties"
			}
		}];

	if (format) {
		query[2]['$sort'].shortTitle = 1;
	} else {
		query[2]['$sort'].title = 1;
	}

	let promise = this.aggregate(query).exec();

	promise.then(function (faculties) {
			if (faculties.length == 0) {
				deffer.reject(new DbError(null, 204, Util.format('No faculties found in university %s', university)));
			} else {
				for (let i = 0; i < faculties.length; i++) {
					faculties[i] = faculties[i].formatForSearch(format);
				}
				deffer.fulfill(faculties);
			}
		})
		.catch(function (err) {
			deffer.reject(new DbError(err))
		});
	return deffer.promise;
}
University.statics.getFaculties = getFaculties;



/**
 * @this {University}
 * @memberof module:RDS~University
 * Метод для получения списка универов
 * @param {boolean} format - true - длинное(title), false - краткое(shortTitle)
 * @return {promise}
 * @fulfill - Массив для выдачи
 * @reject {DbError}, 204 - не найдено университетов
 * @reject {DbError}, 500 - ошибка базы данных.
 * */

function getUniversities(format){
	let deffer = Q.defer();

	let promise = this.aggregate([
		{
			$limit: 20
		},
		{
			$sort: {rating:1}
		}
	]).exec();


	promise.then(function(universities){
			if(universities.length == 0){
				deffer.reject(new DbError(null, 204, Util.format('No universities found in university %s', university)));
			}else{
				for (let i = 0; i < universities.length; i++) {
					universities[i] = universities[i].formatForSearch(format);
				}
				deffer.fulfill(universities);
			}
		})
		.catch(function(err){
			deffer.reject(new DbError(err))
		});
	return deffer.promise;
};
University.statics.getUniversities = getUniversities;

/**
 * @this {University}
 * @memberof module:RDS~University
 * @summary Получение университетов по названию
 * @param title - регулярное выражение для поиска
 * @param {boolean} format - true - длинное(title), false - краткое(shortTitle)
 * @returns {promise}
 * @fulfill - Массив для выдачи
 * @reject {DbError}, 204 - не найдено университетов
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function getUniversitiesByTitle(title, format){

	let deffer = Q.defer();

	let promise = this.aggregate([
		{
			$limit: 20
		},
		{
			$sort: {rating:1}
		},
		{
			$match: {
				$or:[
					{
						title: {$regex: title}
					},
					{
						shortTitle: {$regex: title}
					}
				]

			}
		}
	]).exec();


	promise.then(function(universities){
			if(universities.length == 0){
				deffer.reject(new DbError(null, 204, Util.format('No universities found in university %s', university)));
			}else{
				for (let i = 0; i < universities.length; i++) {
					universities[i] = universities[i].formatForSearch(format);
				}
				deffer.fulfill(universities);
			}
		})
		.catch(function(err){
			deffer.reject(new DbError(err))
		});
	return deffer.promise;
};
University.statics.getUniversitiesByTitle = getUniversitiesByTitle;



/**
 * @this {University}
 * @memberof module:RDS~University
 * @summary Получение университетов по названию
 * @param title - регулярное выражение для поиска
 * @param university - идентификатор университета
 * @param {boolean} format - true - длинное(title), false - краткое(shortTitle)
 * @returns {promise}
 * @fulfill - Массив для выдачи
 * @reject {DbError}, 204 - не найдено университетов
 * @reject {DbError}, 500 - ошибка базы данных.
 */
function getFacultiesByTitle(title, university, format){
	let deffer = Q.defer();

	let query = [
		{
			$match: {
				_id: mongoose.Types.ObjectId(university),
				"faculties.title": {$regex: title}
			}
		},
		{
			$limit: 10
		},
		{
			$sort: {}
		},
		{
			$project: {
				faculties: "$faculties"
			}
		}];

	if (format) {
		query[2]['$sort'].shortTitle = 1;
	} else {
		query[2]['$sort'].title = 1;
	}

	let promise = this.aggregate(query).exec();

	promise.then(function (faculties) {
			if (faculties.length == 0) {
				deffer.reject(new DbError(null, 204, Util.format('No faculties found in university %s', university)));
			} else {
				for (let i = 0; i < faculties.length; i++) {
					faculties[i] = faculties[i].formatForSearch(format);
				}
				deffer.fulfill(faculties);
			}
		})
		.catch(function (err) {
			deffer.reject(new DbError(err))
		});
	return deffer.promise;
};
University.statics.getFacultiesByTitle = getFacultiesByTitle;


/**
 * @this {University}
 * @memberof module:RDS~University
 * @summary Метод проверки валидности университета и факультета
 * @param university - идентификатор университета
 * @param faculty - идентификатор факульета
 * @returns {promise}
 * @fulfill {boolean}, true - данные валидны, false - данные не валидны
 * @reject {DbError}, 500 - ошибка базы данных
 */
function isExist(university, faculty){
	let deffer = Q.defer();
	let promise = this.findOne({
		_id: university,
		"faculties._id": faculty}).exec();
	promise.then(function(result){
			if(result){
				deffer.fulfill(true);
			}else{
				deffer.fulfill(false);
			}
		})
		.catch(function(err){
			err = new DbError(err);
			logger.error(err);
			deffer.reject(err);
		});
	return deffer.promise;
};
University.statics.isExist = isExist;


/**
 * @this {University}
 * @memberof module:RDS~University
 * @summary Метод, возвращающий названия факультета и университета
 * @param university - идентификатор университета
 * @param faculty - идентификатор факульета
 * @returns {promise}
 * @fulfill {object}, проперти university, faculty
 * @reject {DbError}, 500 - ошибка базы данных
 */
function getUniversityAndFacultyTitles(university, faculty){
	let deffer = Q.defer();
	let promise = this.findOne({
			_id: user.university,
			"faculties._id": user.faculty
		},
		{
			"faculties.$":1,
			title:1
		}).exec();

	promise.then(function(item){
			if(item){
				deffer.fulfill({
					university: item.getTitle(),
					faculty: item.faculties[0].getTitle()
				});
			}else{
				err = new DbError(null, 404, Util.format("University %s and faculty %s not found", university, faculty));
				logger.error(err);
				deffer.reject(err);
				deffer.fulfill(err);
			}
		})
		.catch(function(err){
			err = new DbError(err);
			logger.error(err);
			deffer.reject(err);
		});
	return deffer.promise;
};
University.statics.getUniversityAndFacultyTitles = getUniversityAndFacultyTitles;


/**
 * @this {University}
 * @memberof module:RDS~University
 * @summary Добавление нового университета
 * @param title - полное название
 * @param shortTitle - краткое название
 * @param street - улица/проспект
 * @param building - номер дома
 * @param city - город
 * @param rating - рейтинг
 * @returns {promise}
 */
function* createNew(title, shortTitle, street, building, city, rating){
	let University = this;
	let promise = University.find({title: title}).exec();

	try{
		let universities = yield promise;
		if(universities.length > 0){
			throw new DbError(null, 400, Util.format('University with title "%s" already exists', title));
		}else {
			let university = new University({
				title: title,
				shortTitle: shortTitle,
				location:{
					street: street,
					building: building,
					city: city
				},
				rating: rating
			});
			university = yield* university.saveUniversity();
			return university;
		}
	}catch(err){
		logger.error(err);
		if(err instanceof DbError){
			throw err;
		}else{
			throw new DbError(err, 500);
		}
	}
};
University.statics.createNew = createNew;


/**
 * @this {University}
 * @memberof module:RDS~University.prototype
 * @summary Добавление нового факультета в университет
 * @param title - полное название
 * @param shortTitle - краткое название
 * @throws {ValidationError}, 400 - Факультет уже присутствует в университете
 */
function addFaculty(title, shortTitle){
	this.faculties.forEach(function(item){
		if(item.title == title || item.shortTitle == shortTitle){
			let err = new ValidationError(400, Util.format("Faculty '%s' already exist in university %s(id = %s)", title, this.title, this._id));
			logger.error(err);
			throw err;
		}
	});
	let newFaculty = new Faculty({
		title: title,
		shortTitle: shortTitle
	});
	this.faculties.push(newFaculty);
};
University.methods.addFaculty = addFaculty;

/**
 * @this {University}
 * @memberof module:RDS~University.prototype
 * Безопасное сохранение университета
 * @returns {university}
 * @throws {DbError}, 500 - ошибка базы данных
 */
function* saveUniversity (){
	let errCounter = 5;
	let university;
	while(errCounter > 0){
		try{
			university = yield this.save();
			break;
		}catch(err){
			errCounter--;
			logger.error(new DbError(err, 500, 'Ошибка при сохранении университета, колличество ошибок - %d', 5 - errCounter));
			if(errCounter == 0) throw err;
		}
	}
	return university;
}
University.methods.saveUniversity = saveUniversity;



module.exports = University;
