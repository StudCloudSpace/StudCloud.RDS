/**
 * Created by anton on 06/07/16.
 */
'use strict';
/**
 * @module RDS
 */

const logger = require('./libs/logger'),
	connection = require("./libs/connections").rds,
	Mongoose = require("mongoose");


const UniversityModel = require('./library/university'),
	WorkTypeModel = require('./library/workTypes'),
	Subject = require('./library/subjects');


const ValidationError = require("@anzuev/studcloud.errors").ValidationError,
	DbError = require("@anzuev/studcloud.errors").DbError;


/**
 * @class RDS
 *
 */

function RDS(){}

/**
 *
 * @type {object| null}
 * @private
 */
RDS._University = null;
/**
 *
 * @type {object| null}
 * @private
 */
RDS._Subject = null;
/**
 *
 * @type {object| null}
 * @private
 */
RDS._WorkType = null;

/**
 * Получение класса University для работы с типами работ
 * @throws {DbError}, 500 - модуль не был инициализирован
 * @returns {Mongoose.model}
 */
RDS.getUniversityModel = function(){
	if(!RDS._University){
		let err = new DbError(null, 500, 'Модуль не был инициализирован.');
		logger.error(err);
		throw err;
	}
	return RDS._University;
};

/**
 * Получение класса WorkType для работы с типами работ
 * @throws {DbError}, 500 - модуль не был инициализирован
 * @returns {Mongoose.model}
 */
RDS.getWorkTypeModel = function(){
	if(!RDS._WorkType){
		let err = new DbError(null, 500, 'Модуль не был инициализирован.');
		logger.error(err);
		throw err;
	}
	return RDS._WorkType;
};

/**
 * Получение класса Subject для работы с типами работ
 * @throws {DbError}, 500 - модуль не был инициализирован
 * @returns {Mongoose.model}
 */
RDS.getSubjectModel = function(){
	if(!RDS._Subject){
		let err = new DbError(null, 500, 'Модуль не был инициализирован.');
		logger.error(err);
		throw err;
	}
	return RDS._Subject;
};

/**
 * Инициализация модуля
 * @throws {Error}, не смог подключиться к базе данных.
 * @private
 */
RDS.init = function(){
	if(!connection){
		let err = new Error("No connection specified for 'university', 'faculty' and 'workType' collections");
		logger.error(err);
		throw err;
	}else{
		RDS._University = connection.model("University", UniversityModel);
		RDS._WorkType = connection.model('WorkType', WorkTypeModel);
		RDS._Subject = connection.model('Subject', Subject);

	}
};

RDS.init();

module.exports = RDS;







