(function (name, global, definition) {
  if (typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof require !== 'undefined' && typeof require.amd === 'object') {
    define(definition);
  } else {
    global[name] = definition();
  }
})('namespace', this, function () {
  function namespace(namespaceString) {
    var ns = window;
    var parts = namespaceString.split('.');

    parts.forEach(function (part) {
      if (typeof ns[part] === 'undefined') {
        ns[part] = {};
      }

      ns = ns[part];
    });

    return ns;
  }

  namespace.import = function (namespaceString) {
    var object = window;
    var parts = namespaceString.split('.');

    parts.forEach(function (part) {
      if (typeof object[part] === 'undefined') {
        throw new Error('namespace ' + part + ' doesn\'t exist!');
      }

      object = object[part];
    });

    return object;
  };

  return namespace;
});
