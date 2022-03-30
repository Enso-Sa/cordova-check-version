var exec = require('cordova/exec');

exports.showUpdate = function (successCallback, errorCallback, withConfirmation) {
  (successCallback, errorCallback, 'CheckVersion', 'showUpdate', [withConfirmation]);
};