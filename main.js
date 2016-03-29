require('./typescriptServices.js');

exports.translate = function(load) {
  var result = ts.transpile(load.source);
  load.source = result;
};

exports.buildType = "js";
exports.includeInBuild = true;