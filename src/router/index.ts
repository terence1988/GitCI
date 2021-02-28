const Router = require('koa-router');
const router = new Router();

require('./user')(router);
export default router;

// router can be nested -- router exported from sub-routes then the routes added to the global route
