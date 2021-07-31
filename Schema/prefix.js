const mongoose = require('mongoose')

const setprefix = new mongoose.Schema({
server_id: Number,
prefix: String
})

module.exports = mongoose.model("prefix", setprefix)