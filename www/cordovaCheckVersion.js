// Empty constructor
function CheckVersion() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
CheckVersion.prototype.showUpdate = function(withConfirmation, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'CordovaCheckVersion', 'showUpdate', [withConfirmation]);
}

// Installation constructor that binds ToastyPlugin to window
CheckVersion.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.checkVersion = new CheckVersion();
  return window.plugins.checkVersion;
};
cordova.addConstructor(CheckVersion.install);