
exports.index = function(req,res,next){
    res.status(200);
    res.render('transfer',{'title':'This is transfer example'});
};

