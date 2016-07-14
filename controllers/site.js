
exports.index = function(req,res,next){
    res.status(200);
    res.render('index',{'index':'前端测试传参'});
};