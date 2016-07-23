
exports.index = function(req,res,next){
    res.status(200);
    res.render('layout',{'title':'Inner','transfer':'This is Inner Page'});
};

