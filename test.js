'use strict';

const Q = require('q'),
	RDS = require('./index');

Q.async(function*(){
	try{
		let WorkType = RDS.getWorkTypeModel();
		let Subject = RDS.getSubjectModel();
		let res = yield* WorkType.createNew("title1123", ['tag1', 'tag2']);
		//let res = yield WorkType.isExist('577ccbf1b4a5cb8550d19b98');
		//let res = yield* Subject.createNew('Предмет 112');
		console.log(res);
	}catch(err){
		throw err;
	}

})().done();