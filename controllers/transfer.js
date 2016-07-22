
exports.index = function(req,res,next){
    res.status(200);
    res.render('./message/parent',{'title':'通信','transfer':'This is transfer example'});
};

exports.iframe1 = function(req,res,next){
    res.status(200);
    res.render('message/iframe1',{'title':'通信','transfer':'This is transfer example'});
};

exports.iframe2 = function(req,res,next){
    res.status(200);
    res.render('message/iframe2',{'title':'通信','transfer':'This is transfer example'});
};

exports.child = function(req,res,next){
    res.status(200);
    res.render('message/child',{'title':'通信','transfer':'This is transfer example'});
};

