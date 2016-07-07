'use strict';
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');

gulp.task('workTypes', function () {
	return gulp.src(['../library/workTypes/index.js'])
		.on('data', function(file){
			console.log(file.path);
		})
		.pipe(concat('workType.md'))
		.pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
		.on('error', function (err) {
			gutil.log('jsdoc2md failed:', err.message)
		})
		.pipe(gulp.dest('api'))
});

gulp.task('subjects', function () {
	return gulp.src(['../library/subjects/index.js'])
		.on('data', function(file){
			console.log(file.path);
		})
		.pipe(concat('subjects.md'))
		.pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
		.on('error', function (err) {
			gutil.log('jsdoc2md failed:', err.message)
		})
		.pipe(gulp.dest('api'))
});

gulp.task('universities', function () {
	return gulp.src(['../library/university/index.js'])
		.on('data', function(file){
			console.log(file.path);
		})
		.pipe(concat('universities.md'))
		.pipe(gulpJsdoc2md({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
		.on('error', function (err) {
			gutil.log('jsdoc2md failed:', err.message)
		})
		.pipe(gulp.dest('api'))
});


gulp.task('all', function(){
	return gulp.src([ '../index.js', '../library/subjects/index.js', '../library/university/index.js', '../library/workTypes/index.js'])
		.on('data', function(file){
			console.log(file.path);
		})
		.pipe(concat('README.md'))
		.pipe(gulpJsdoc2md({ template: fs.readFileSync('./readmeTest.hbs', 'utf8') }))
		.on('error', function (err) {
			gutil.log('jsdoc2md failed:', err.message)
		})
		.pipe(gulp.dest('../'))
});
gulp.task('docs', ['workTypes', 'subjects', 'universities']);