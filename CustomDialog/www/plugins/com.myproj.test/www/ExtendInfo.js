cordova.define("com.myproj.test.ExtraInfo", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getExtra = function(success, error) {
    exec(success, error, "ExtendInfo", "getExtra", []);
};
});
