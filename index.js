/**
 * Created by anton on 06/07/16.
 */
'use strict';

const logger = require('./libs/logger'),
	connection = require("./libs/connections").rds,
	Mongoose = require("mongoose");


const //UniversityModel = require('./library/university'),
	WorkTypeModel = require('./library/workTypes').WorkTypes,
	Subject = require('./library/subjects');


const ValidationError = require("@anzuev/studcloud.errors").ValidationError,
	DbError = require("@anzuev/studcloud.errors").DbError;


/**
 * RDS модуль, основная задача - работа со статическими данными(университеты, факультеты, типы работ)
 * @constructor
 *
 */

function RDS(){
	let _University,
		_Subject,
		_WorkType;

	init();
	/**
	 * Инициализация модуля
	 *
	 * @throws {Error}, не смог подключиться к базе данных.
	 */
	function init(){
		if(!connection){
			let err = new Error("No connection specified for 'university', 'faculty' and 'workType' collections");
			logger.error(err);
			throw err;
		}else{
			//_University = connection.model("University", UniversityModel);
			_WorkType = connection.model('WorkType', WorkTypeModel);
			_Subject = connection.model('Subject', Subject);
		}
	}


	this.getWorkTypeModel = function(){
		if(!_WorkType){
			let err = new DbError(null, 500, 'Модуль не был инициализирован.');
			logger.error(err);
			throw err;
		}
		return _WorkType;
	}
	this.getSubjectModel = function(){
		if(!_WorkType){
			let err = new DbError(null, 500, 'Модуль не был инициализирован.');
			logger.error(err);
			throw err;
		}
		return _Subject;
	}

}

module.exports = new RDS();







