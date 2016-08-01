/**
 * Created by anton on 06/07/16.
 */
'use strict';
/**
 * @module RDS
 */
let logger;




const ValidationError = require("@anzuev/studcloud.errors").ValidationError,
	DbError = require("@anzuev/studcloud.errors").DbError;


/**
 * @class RDS
 *
 */

function RDS(){}

/**
 * Настройка модуля
 * @throws {Error}, не смог подключиться к базе данных.
 * @this {RDS}
 */
RDS.configure = function(config){
	RDS._config = config;
	require('./libs/connections').configure(config);
	require('./libs/logger').configure(config);
	logger = require("./libs/logger").getLogger();
	let connection = require('./libs/connections').getConnections().rds;
	if(!connection){
		let err = new Error("No connection specified for 'university', 'faculty' and 'workType' collections");
		logger.error(err);
		throw err;
	}else{
		RDS._University = connection.model("University", require("./library/university"));
		RDS._WorkType = connection.model('WorkType',require("./library/workTypes"));
		RDS._Subject = connection.model('Subject',require("./library/subjects"));
	}
	logger.info("RDS has been successfully configured and started");
};

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




module.exports = RDS;







