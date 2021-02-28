//In relative large project, we set different files as user the stack is
import Router from 'koa-router';
import { userCtl } from '../controller/index';
import objectIdValidation from '../middleware/index';

module.exports = (router: Router) => {
	//single user
	router.get('/user/:id', objectIdValidation, userCtl.getUser);
	router.post('/user', userCtl.createUser);
	router.put('/user/:id', objectIdValidation, userCtl.updateUser);
	router.delete('/user/:id', objectIdValidation, userCtl.deleteUser);

	//batch user
	router.get('/batch/user/:ids', userCtl.batchGetUser);
	router.post('/batch/user/', userCtl.batchCreateUser);
	router.put('/batch/user/:ids', userCtl.batchUpdateUser);
	router.delete('/batch/user/:ids', userCtl.batchDeleteUser);

	//list
	router.get('/user', userCtl.listUser);
};
