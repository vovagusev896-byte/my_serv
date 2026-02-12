const Router = require('express');
const router = new Router()
const newLocal = require('./cartRoutes');

router.use('/',newLocal)


module.exports = router