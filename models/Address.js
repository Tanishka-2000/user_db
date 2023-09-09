const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    address: String,
});

module.exports = mongoose.model('Address', addressSchema);