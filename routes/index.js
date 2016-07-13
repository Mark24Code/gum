var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("-----22--");
    var arr = ['har','lor','tar'];
  res.render('index', { title: '标题',user:'A888',arr:arr });
});

module.exports = router;
