const mongoose = require('mongoose');
const Schema = {
	name: String,
	age: Number,
};

export default mongoose.model('User', Schema);
