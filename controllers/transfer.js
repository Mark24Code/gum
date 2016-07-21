
exports.index = function(req,res,next){
    res.status(200);
    res.render('transfer',{'title':'通信','transfer':'This is transfer example'});
};

