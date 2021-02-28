export {};
const assert = require('assert');
const supertest = require('supertest');
const app = require('../src/app');

describe('Restful demo application test', () => {
	describe('GET', () => {
		it('get should response 404 correctly', async () => {
			await supertest(app.callback())
				.get('/user/6038b53061b2036754b59a43')
				.expect(404);
		});

		it('get should response 400 correctly', async () => {
			await supertest(app.callback()).get('/user/60').expect(400);
		});

		it('get shoud response 201 correctly', async () => {
			const user = {
				name: 'Jackson Robot',
				age: 21,
			};
			let res = await supertest(app.callback())
				.post('/user')
				.send(user)
				.expect(201);
			const { _id } = res.body;
			res = await supertest(app.callback()).get(`/user/${_id}`).expect(200);
			assert(user.name === res.body.name);
			assert(user.age === res.body.age);
		});
	});
});
