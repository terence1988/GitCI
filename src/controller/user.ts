import { Context } from 'koa';
import UserModel from '../model/';

export const getUser = async (ctx: Context) => {
	const { objectId } = ctx;
	const { id } = ctx.params;
	const res = await UserModel.findOne({ _id: objectId });
	if (!res) {
		ctx.body = {
			message: `${id} has not been found!`,
		};
		ctx.status = 404;
	} else {
		ctx.body = res;
	}
};

export const createUser = async (ctx: Context) => {
	const { body } = ctx.request;
	const user = new UserModel(body);
	const res = await user.save();
	ctx.body = res;
	ctx.status = 201;
};

export const updateUser = async (ctx: Context) => {
	const { objectId } = ctx;
	const { id } = ctx.params;
	const { body } = ctx.request;
	const { n } = await UserModel.updateOne({ _id: objectId }, { $set: body });
	if (n === 0) {
		ctx.body = {
			message: `${id} not found!`,
		};
		ctx.status = 404;
	} else {
		ctx.body = {
			message: `${id} updated`,
		};
	}
};

export const deleteUser = async (ctx: Context) => {
	const { objectId } = ctx;
	const { id } = ctx.params;
	const { n } = await UserModel.deleteOne({ _id: objectId });
	if (n === 0) {
		ctx.body = {
			message: `${id} has not been found.`,
		};
		ctx.status = 404;
	} else {
		ctx.body = {
			message: `${id} deleted`,
		};
	}
};

export const batchGetUser = async (ctx: Context) => {
	const { id } = ctx.query;
	// 6038b51f61b2036754b59a2f
	// 6038b53061b2036754b59a30
	// 6038b53f61b2036754b59a31
	// 6038b54b61b2036754b59a32
};

export const batchCreateUser = async (ctx: Context) => {
	ctx.body = 'Hello World!';
};
export const batchUpdateUser = async (ctx: Context) => {
	ctx.body = 'Hello World!';
};
export const batchDeleteUser = async (ctx: Context) => {
	ctx.body = 'Hello World!';
};
export const listUser = async (ctx: Context) => {
	let {
		page,
		pageSize,
	}: {
		page?: string | number;
		pageSize?: string | number;
	} = ctx.query;
	page = Number(page);
	pageSize = Number(pageSize);
	const skip = pageSize * (page - 1);
	const res = await UserModel.find().skip(skip).limit(pageSize);
	const count = await UserModel.count();
	ctx.body = {
		results: res,
		count,
	};
};
