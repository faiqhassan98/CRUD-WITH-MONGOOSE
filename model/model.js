const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud-dynamic-data');

const cSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String
});

module.exports = mongoose.model('crud-mongo', cSchema);
