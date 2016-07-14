define(function(require, exports, module){
    var Hello = require('/static/javascripts/hello');
    exports.other = function(){
        console.log("This is other");
        Hello.hello();
    };
});