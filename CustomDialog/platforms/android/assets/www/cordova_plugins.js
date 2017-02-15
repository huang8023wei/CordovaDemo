cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.myproj.test.ExtendInfo",
        "file": "plugins/com.myproj.test/www/ExtendInfo.js",
        "pluginId": "com.myproj.test",
        "clobbers": [
            "ExtendInfo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "com.myproj.test": "0.0.1"
};
// BOTTOM OF METADATA
});