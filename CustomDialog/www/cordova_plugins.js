cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.myproj.test.ExtraInfo",
        "file": "plugins/com.myproj.test/www/ExtendInfo.js",
        "pluginId": "com.myproj.test",
        "clobbers": [
            "cordova.plugins.ExtendInfo"
        ]
    },
    {
        "id": "com.javenleung.cordova.ExtraInfo",
        "file": "plugins/com.javenleung.cordova/www/ExtraInfo.js",
        "pluginId": "com.javenleung.cordova",
        "clobbers": [
            "cordova.plugins.ExtraInfo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-CustomDialogPlugin": "1.0.0",
    "com.myproj.test": "0.0.1",
    "com.javenleung.cordova": "0.0.1"
};
// BOTTOM OF METADATA
});