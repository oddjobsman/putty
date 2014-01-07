'use strict';

var _ = require('underscore');

/**
 * Checks if x exists or not.
 */
function existy(x) {
  return x != null;
}

/**
 * Checks if x can be used as a synonym for true-ness
 */
function truthy(x) {
  return (x !== false) && existy(x);
}

/**
 * Does work when cond is true
 */
function doWhen(cond, work) {
  if (truthy(cond))
    return _.isFunction(work) ? work() : work;
  return undefined;
}

/**
 * Converts specified arguments object to array
 */
function arrgs(args) {
  if (args && args.length == 1 && _.isArray(args[0]))
    return args[0];
  return _.toArray(args);
}

/**
 * Returns the value at the specified path within the specofied object
 */
function get(ob, path) {
  var props = path.split('.');
  var currentValue = ob[props[0]];

  if (props.length === 1)
    return currentValue;
  return get(currentValue, props.slice(1).join('.'));
}