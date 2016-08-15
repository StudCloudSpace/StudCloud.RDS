'use strict';

let log4js = require('log4js');
let isConfigured;

exports.configure = function(config){
	log4js.configure({
		appenders: [
			{ type: 'file', filename: config.get("logs:RDS:path") || './logs/RDS.log', category: config.get("logs:RDS:label") ||'RDS' },
			{ type: 'console' }
		]
	});
	isConfigured = true;
};

exports.getLogger = function(){
	if(!isConfigured){
		throw new Error('RDS logger has not been configured');
	}else{
		return log4js.getLogger('RDS');
	}
};