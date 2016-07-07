/**
 * Created by anton on 06/07/16.
 */
'use strict';

let log4js = require('log4js'),
	config = require('../config/index');


log4js.configure({
	appenders: [
		{ type: 'file', filename: config.get("logs:RDS:path") || '../logs/output.log', category: config.get("logger:RDS:label") ||'RDS' },
		{ type: 'console' }
	]
});


module.exports = log4js.getLogger('RDS');