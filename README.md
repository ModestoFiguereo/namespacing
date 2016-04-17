# namespacing

Is small tool to make easy implement the namespacing pattern.

## Installation

- download distribution repo as zip:
[namespacing](https://github.com/ModestoFiguereo/namespacing-dist/tree/v1.0.0)
- bower:
```sh
bower install --save namespacing
```
-npm:
```sh
npm install --save namespacing
```

## Use

You can declare a `namespace` like this:
```js
namespace('app.ajax.http.engine');
```

And you import it like this:
```js
var engine = namespace.import('app.ajax.http.engine');
```
