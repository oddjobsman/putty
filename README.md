putty
=====

General-purpose re-usable functional utilities.

Strongly recommended to be used along with [lodash](https://github.com/lodash/lodash)

## Usage

First install the `putty` as a dependency:

```shell
npm install --save putty
```

You can now use `putty` in one of the following ways:

### Use directly

```js
var putty = require('putty');

var foo = 10;

if (putty.existy(foo))
	console.log('foo exists');
```

### Use putty-lodash mix
```js
var _ = require('putty')._;

// Now call putty/lodash functions via _
if (_.existy(foo))
	console.log('foo exists');
```

### Custom mixin with lodash
```js
var _ = require('lodash').mixin(require('putty'));

// Now call putty/lodash functions via _
if (.existy(foo))
	console.log('foo exists');
```

---
## API

### arrgs([args])
Returns an array containing the specified arguments

##### args
- Type: Any
- Optional

The arguments that need to be returned in the array

#### Example
``` js
function sum() {
	var nums = putty.arrgs(arguments);
    return nums.reduce(function (result, num) {
    	return result + num;
    }, 0);
}
```
- - -

