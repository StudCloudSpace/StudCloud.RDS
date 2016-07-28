'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;


let rdsCon;

module.exports.configure = function(config){

	if(config.get("mongoose:RDSUri")){
		rdsCon = mongoose.createConnection(config.get('mongoose:RDSUri'), config.get('mongoose:RDSOptions'));
	}else{
		throw new Error("Can't connect to RDS collection. No mongoose:RDSUri property specified");
	}
};

module.exports.getConnections = function(){
	if(!rdsCon) throw new Error('Connections have not been configured');
	return {
		rds: rdsCon
	}
};
