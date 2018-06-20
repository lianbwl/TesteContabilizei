var express = require('express');
var router = express.Router();

var Jobs = require('../models/jobs');

Jobs.methods(['get', 'put', 'post', 'delete']);
Jobs.register(router, '/jobs');

module.exports = router;