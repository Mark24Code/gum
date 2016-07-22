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
router.get('/transfer/parent',transfer.index);
router.get('/transfer/iframe1',transfer.iframe1);
router.get('/transfer/iframe2',transfer.iframe2);
router.get('/transfer/child',transfer.child);


module.exports = router;