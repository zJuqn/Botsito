const mongoose = require('mongoose')

const setSugerencias = new mongoose.Schema({
    server_id: Number,
    canal_id: Number
})

module.exports = mongoose.model('Sugerencias', setSugerencias)