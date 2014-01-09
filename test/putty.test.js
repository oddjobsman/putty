'use strict';

var _ = require('lodash');
var putty = require('../lib');
var expect = require('expect.js');

describe('putty', function () {

  describe('#existy()', function () {

    it('should return true if the specified value exist', function () {
      var a = 10;
      expect(putty.existy(a)).to.be(true);
    });

    it('should return false if the specified value does not exist', function () {
      var a;
      expect(putty.existy(a)).to.be(false);
    });

    it('should return false if the specified value is null', function () {
      var a = null;
      expect(putty.existy(a)).to.be(false);
    });

  });

  describe('#absenty()', function () {

    it('should return false if the specified value exist', function () {
      var a = 10;
      expect(putty.absenty(a)).to.be(false);
    });

    it('should return true if the specified value does not exist', function () {
      var a;
      expect(putty.absenty(a)).to.be(true);
    });

    it('should return true if the specified value is null', function () {
      var a = null;
      expect(putty.absenty(a)).to.be(true);
    });

  });

  describe('#arrgs()', function () {

    function shell() {
      return putty.arrgs(arguments);
    }

    it('should return empty array if called with no arguments', function () {
      expect(shell()).to.be.eql([]);
    });

    it('should return array with single item if called with single arguments', function () {
      expect(shell('foo')).to.be.eql(['foo']);
    });

    it('should return array with all argument items passed to function', function () {
      expect(shell('foo', 'bar')).to.be.eql(['foo', 'bar']);
    });

    it('should return array with all items passed as array to function', function () {
      expect(shell(['foo', 'bar'])).to.be.eql(['foo', 'bar']);
    });

  });

  describe('#exem()', function () {
    it('should extract deeply nested attribute value', function () {
      var ob = {a: {b: {c: 'Foo'}}};

      expect(putty.exem(ob, 'a.b.c')).to.be('Foo');
    });

    it('should embed deeply nested attribute value', function () {
      var ob = {a: {b: {c: 'Foo'}}};

      putty.exem(ob, 'a.b.c', 'Bar');

      expect(putty.exem(ob, 'a.b.c')).to.be('Bar');
    });

    it('should extract value shallow attribute', function () {
      var ob = {a: 'Foo'};

      expect(putty.exem(ob, 'a')).to.be('Foo');
    });

    it('should embed value shallow attribute', function () {
      var ob = {a: 'Foo'};

      putty.exem(ob, 'a', 'Bar');

      expect(putty.exem(ob, 'a')).to.be('Bar');
    });

    it('should return undefined if path points to undefined attribute', function () {
      var ob = {};
      expect(putty.exem(ob, 'a')).to.be(undefined);
    });

    it('should set attribute value if attribute is not defined', function () {
      var ob = {};

      putty.exem(ob, 'a', 'Foo');

      expect(putty.exem(ob, 'a')).to.be('Foo');
    });

    it('should return undefined if targe object is null', function () {
      expect(putty.exem(null, 'a')).to.be(undefined);
    });

  });

  describe('#enumFor()', function () {
    it('should return empty object if no constants specified', function () {
      var testEnum = putty.enumFor();

      expect(_.isEmpty(testEnum)).to.be(true);
    });

    it('should return an object with the specified constants with values starting from 1', function () {
      var testEnum = putty.enumFor('a', 'b', 'c');

      expect(testEnum.a).to.be(1);
      expect(testEnum.b).to.be(2);
      expect(testEnum.c).to.be(3);

    });

    it('should return an object with the specified array constants with values starting from 1', function () {
      var testEnum = putty.enumFor(['a', 'b', 'c']);

      expect(testEnum.a).to.be(1);
      expect(testEnum.b).to.be(2);
      expect(testEnum.c).to.be(3);

    });

    it('should return an object with the specified constants with specified values', function () {
      var testEnum = putty.enumFor({
        'a': 3, 
        'b': 2, 
        'c': 1
      });

      expect(testEnum.a).to.be(3);
      expect(testEnum.b).to.be(2);
      expect(testEnum.c).to.be(1);

    });
  });
});