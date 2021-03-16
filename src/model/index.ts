const mongoose = require('mongoose');
import UserModel from './User';

const mongodbServerHost = process.env.MONGO_HOST || '127.0.0.1'

mongoose.connect(`mongodb://localhost:${mongodbServerHost}:27018/jr-12`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default UserModel;
