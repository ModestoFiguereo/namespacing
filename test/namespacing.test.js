var tape = require('tape');
var namespace = require('../namespacing');

var before = tape;
var after = tape;
var test = beforeEach(tape, function (assert) {
  // called before each thing

  // when done call
  assert.end();
});

test = afterEach(test, function (assert) {
  assert.end();
});

test('namespace(\'app.test.util.js\') create namespace', function (assert) {
  namespace('app.test.util.js');

  assert.true(global.hasOwnProperty('app'));
  assert.true(global.app.hasOwnProperty('test'));
  assert.true(global.app.test.hasOwnProperty('util'));
  assert.true(global.app.test.util.hasOwnProperty('js'));
  assert.end();
});

after('delete previous namespace', function (assert) {
  delete global.app;
  assert.end();
});

before('create namespace', function (assert) {
  namespace('app.ajax.http.engine');
  assert.end();
});

test('namespace#import() import namespace', function (assert) {
  var ns = namespace.import('app.ajax.http.engine');

  assert.true(ns === global.app.ajax.http.engine);
  assert.end();
});

function beforeEach(t, handler) {
  return function tapish(name, listener) {
    t(name, function (assert) {
      var _end = assert.end;
      assert.end = function () {
        assert.end = _end;
        listener(assert);
      };

      handler(assert);
    });
  };
}

function afterEach(t, handler) {
  return function tapish(name, listener) {
    t(name, function (assert) {
      var _end = assert.end;
      assert.end = function () {
        assert.end = _end;
        handler(assert);
      };

      listener(assert);
    });
  };
}
