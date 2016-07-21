
exports.index = function(req,res,next){
    res.status(200);
    res.render('inner',{'title':'Inner','transfer':'This is Inner Page'});
};

