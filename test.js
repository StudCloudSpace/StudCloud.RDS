'use strict';
let Q = require('q');


let RDS = require('./index');
let config = require('./config');

RDS.configure(config);

let Subject = RDS.getSubjectModel();
let University = RDS.getUniversityModel();
let WorkType = RDS.getWorkTypeModel();

Q.async(function*(){
	try{
		let res = yield WorkType.isExist("57b19117a91def6018ea3c6b");
		//res = yield WorkType.getAll("");
		//res.addFaculty("ABC", 'AD');
		//res = yield* res.saveUniversity();//University.getUniversities(true);
		console.log(res)
	}catch(err){
		throw err;
	}

})().done();
