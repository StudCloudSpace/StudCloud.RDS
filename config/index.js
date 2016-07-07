/**
 * Configuration
 * @type {exports|module.exports}
 */
var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file("RDSConfig", {file: path.join(__dirname, 'config.json')});

module.exports = nconf;
