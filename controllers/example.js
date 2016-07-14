
exports.index = function(req,res,next){
    res.status(200);
    res.render('example',{'example':'This is example'});
};

