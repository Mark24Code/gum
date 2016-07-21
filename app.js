/*!
 * app.js
 */

/* Module dependencies.模块依赖 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var ejs = require('ejs');

/* Router.路由&接口导入 */
var webRouter = require('./web_router');
var apiRouterV1 = require('./api_router_v1');

/* App.应用实例 */
var app = express();

/* view engine setup.模板引擎 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.engine('html',ejs.renderFile);
app.engine('html',swig.renderFile);


/* Middleware 中间件 */
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));

/* Router.路由&接口 */
app.use('/api/v1',apiRouterV1);
app.use('/', webRouter);

/* catch 404 and forward to error handler 404错误处理 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* error handles 错误处理 */
// development error handler will print stacktrace  开发错误处理，将会打印堆栈
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/* production error handler 生产环境错误处理*/
// no stacktraces leaked to user 不会暴露错误栈给用户
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
