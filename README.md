putty
=====

General-purpose re-usable functional utilities.

Strongly recommended to be used along with [lodash](https://github.com/lodash/lodash)

[![build status](https://secure.travis-ci.org/oddjobsman/putty.png)](http://travis-ci.org/oddjobsman/putty)
[![dependency status](https://david-dm.org/oddjobsman/putty.png)](https://david-dm.org/oddjobsman/putty)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/oddjobsman/putty/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![NPM](https://nodei.co/npm/putty.png?stars=true&downloads=true)](https://nodei.co/npm/putty/)

## Usage

First install the `putty` as a dependency:

```shell
npm install --save putty
```

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