const mongoose = require('mongoose');
import UserModel from './User';

mongoose.connect('mongodb://localhost:27017/jr-12', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default UserModel;
