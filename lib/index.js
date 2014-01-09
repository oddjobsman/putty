'use strict';

var _ = require('lodash');

/**
 * Checks if x exists or not.
 */
function existy(x) {
  return x != null;
}

/**
 * Checks if x is absent or not.
 */
function absenty(x) {
  return !existy(x);
}

/**
 * Checks if x can be used as a synonym for true-ness
 */
function truthy(x) {
  return (x !== false) && existy(x);
}

/**
 * Checks if x can be used as a synonym for false-ness
 */
function falsy(x) {
  return !truthy(x);
}

/**
 * Does work when cond is true
 */
function doWhen(cond, work) {
  if (truthy(cond)) return _.isFunction(work) ? work() : work;
  return undefined;
}

/**
 * Returns true if any one of the specified arguments are truthy
 */
function or() {
  return _.reduce(arrgs(arguments), function (result, exp) {
    return result || truthy(_.isFunction(exp) ? exp() : exp);
  }, false);
}

/**
 * Returns true if all the specified arguments are truthy
 */
function and() {
  return _.reduce(arrgs(arguments), function (result, exp) {
    return result && truthy(_.isFunction(exp) ? exp() : exp);
  }, true);
}

/**
 * Converts specified arguments object to array
 */
function arrgs(args) {
  if (!args || !(arguments.length <= 1 && _.isObject(args)) || _.isEmpty(args))
    return [];
  
  if (args.length > 1) return _.toArray(args);

  if (_.isArray(args[0])) return args[0];
  
  if (_.isString(args[0]) || _.isObject(args[0]))
    return [args[0]];
}

/**
 * Extracts or Embeds values from or to deep within the specified object 
 * at the specified path.
 */
function exem(o, path, value) {
  if (absenty(o)) return;

  var props = path.split('.');
  var currentValue = o[props[0]];

  if (value && props.length === 1) {
    o[props[0]] = value;
    return;
  }
  
  if (!value && props.length === 1) return currentValue;
  return exem(currentValue, props.slice(1).join('.'), value);
}

/**
 * Returns an immutable object with the specified keys
 */
function enumFor() {
  var result = {};

  if (_.isEmpty(arguments)) return result;
  if (arguments.length > 1) return enumFor(arrgs(arguments));

  var source = arguments[0];

  if (_.isArray(source)) {
    _(source).each(function (constant, idx) {
      Object.defineProperty(result, constant, {
        value: idx + 1,
        writable: false,
        configurable: false,
        enumerable: true
      });
    });
  }

  if (_.isObject(source)) {
    _(source).each(function (value, constant) {
      Object.defineProperty(result, constant, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: true
      });
    });
  }

  return result;
}

module.exports = {
  absenty: absenty,
  and: and,
  arrgs: arrgs,
  doWhen: doWhen,
  enumFor: enumFor,
  exem: exem,
  existy: existy,
  falsy: falsy,
  or: or,
  truthy: truthy,
};