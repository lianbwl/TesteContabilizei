var restful = require('node-restful');
var mongoose = restful.mongoose;

var jobsSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    cargo: String
});

module.exports = restful.model('Jobs', jobsSchema);