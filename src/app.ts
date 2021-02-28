import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

//
import router from './router/'; // index.ts/js in router folder
//

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

module.exports = app;

//in this way, the testing can only test the module without starting the server
