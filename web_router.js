/*!
 * web_route.js
 * Copyright(c) 2016 Mark24Code <mark.zhangyoung@qq.com>
 * MIT Licensed
 */

var express = require('express');

var site = require('./controllers/site');
var example = require('./controllers/example');

var router = express.Router();

/* 路由列表 */

//首页
router.get('/',site.index);

//expamle
router.get('/example',example.index);


module.exports = router;