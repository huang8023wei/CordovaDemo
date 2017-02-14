cordova.define("com.myproj.test.ExtendInfo", function(require, exports, module) {
var exec = require('cordova/exec');
 exports.toast = function(content,type) {
     exec(null, null, "ExtendInfo", "toast", []);
  };

});
