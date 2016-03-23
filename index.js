
var appendCode = "if(module.hot) {\n  var deps = (function() {\n    var map = {};\n    var keys = require.keys();\n    for (var i=0; i<keys.length; i++) {\n      var id = require.resolve(keys[i]);\n      map[id] = keys[i];\n    }\n\n    var deps = [];\n    for (var i=0; i<module.parents.length; i++) {\n      var parentId = module.parents[i];\n      deps.push(map[parentId]);\n    }\n    return deps;\n  })();\n  module.hot.accept(deps);\n}\n";

module.exports = function (source) {
	return [source, appendCode].join("\n\n");
};
