var exec = require('cordova/exec');

exports.toast = function(success, error) {
    exec(null, null, "ExtendInfo", "toast", []);
};