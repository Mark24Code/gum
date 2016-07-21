
exports.index = function(req,res,next){
    res.status(200);
    res.render('sortable',{'example':'This is example'});
};

