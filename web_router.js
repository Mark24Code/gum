/*!
 * web_route.js
 * Copyright(c) 2016 Mark24Code <mark.zhangyoung@qq.com>
 * MIT Licensed
 */

var express = require('express');

var site = require('./controllers/site');
var sortable = require('./controllers/sortable');
var transfer = require('./controllers/transfer');

var router = express.Router();

/* 路由列表 */

//首页
router.get('/',site.index);

//拖拽
router.get('/sortable',sortable.index);
//通信
router.get('/transfer',transfer.index);


module.exports = router;