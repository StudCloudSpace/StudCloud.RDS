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
		let res = yield University.getFacultiesByTitle("", "57b70b3f00c19c30592d44d8", true);
		console.log(res);
	}catch(err){
		throw err;
	}

})().done();
