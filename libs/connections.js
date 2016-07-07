'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;


var config = require('../config');
let rdsCon;
const logger = require('../libs/logger');

if(config.get("mongoose:RDSUri")){
	rdsCon = mongoose.createConnection(config.get('mongoose:RDSUri'), config.get('mongoose:RDSOptions'));
}else{
	let error = new Error("Can't connect to RDS collection. No mongoose:RDSUri property specified");
	logger.error(error);
	throw error;
}
module.exports.rds = rdsCon;

