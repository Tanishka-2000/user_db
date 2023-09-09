const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    address: { type: Schema.Types.ObjectId, ref: 'Address' }
});

module.exports = mongoose.model('User', userSchema);