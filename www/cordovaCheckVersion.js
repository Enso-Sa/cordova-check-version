var exec = require('cordova/exec');

exports.showUpdate = function (successCallback, errorCallback, withConfirmation) {
  exec(successCallback, errorCallback, 'CordovaCheckVersion', 'showUpdate', [withConfirmation]);
};