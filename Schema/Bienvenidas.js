const mongoose = require('mongoose')

const setwelcome = new mongoose.Schema({
server_id: Number,
canal_id: Number,
mensaje: String
})

module.exports = mongoose.model("welcome", setwelcome)