module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.keywordlist = exports.struct = exports.nil = exports.time = exports.regex = exports.binary = exports.float = exports.charlist = exports.integer = exports.tuple = exports.list = exports.map = exports.atom = exports.unwrap = exports.wrapAs = exports.wrap = undefined;
	
	var _map = __webpack_require__(1);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _ = __webpack_require__(22);
	
	var _2 = _interopRequireDefault(_);
	
	var _merge = __webpack_require__(23);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _toPairs = __webpack_require__(26);
	
	var _toPairs2 = _interopRequireDefault(_toPairs);
	
	var _pipe = __webpack_require__(27);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _curry = __webpack_require__(34);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _types = __webpack_require__(35);
	
	Object.defineProperty(exports, 'wrap', {
	  enumerable: true,
	  get: function get() {
	    return _types.wrap;
	  }
	});
	Object.defineProperty(exports, 'wrapAs', {
	  enumerable: true,
	  get: function get() {
	    return _types.wrapAs;
	  }
	});
	Object.defineProperty(exports, 'unwrap', {
	  enumerable: true,
	  get: function get() {
	    return _types.unwrap;
	  }
	});
	
	var _initializer = __webpack_require__(44);
	
	var _initializer2 = _interopRequireDefault(_initializer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var atom = exports.atom = (0, _types.wrapAs)('atom');
	var map = exports.map = (0, _types.wrapAs)('map');
	var list = exports.list = (0, _types.wrapAs)('list');
	var tuple = exports.tuple = (0, _types.wrapAs)('tuple');
	var integer = exports.integer = (0, _types.wrapAs)('integer');
	var charlist = exports.charlist = (0, _types.wrapAs)('charlist');
	var float = exports.float = (0, _types.wrapAs)('float');
	var binary = exports.binary = (0, _types.wrapAs)('binary');
	var regex = exports.regex = (0, _types.wrapAs)('regex');
	var time = exports.time = (0, _types.wrapAs)('time');
	var nil = exports.nil = (0, _types.wrapAs)('nil');
	
	var struct = exports.struct = (0, _curry2.default)(function (type, value) {
	  return (0, _pipe2.default)((0, _merge2.default)(_2.default, { __struct__: atom('Elixir.' + type) }), _toPairs2.default, (0, _map2.default)(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        k = _ref2[0],
	        v = _ref2[1];
	
	    return [atom(k), v];
	  }), map)(value);
	});
	
	var keywordlist = exports.keywordlist = (0, _pipe2.default)(_toPairs2.default, (0, _map2.default)(function (_ref3) {
	  var _ref4 = _slicedToArray(_ref3, 2),
	      k = _ref4[0],
	      v = _ref4[1];
	
	  return tuple([atom(k), v]);
	}), list);
	
	(0, _initializer2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	var _dispatchable = __webpack_require__(5);
	var _map = __webpack_require__(8);
	var _reduce = __webpack_require__(9);
	var _xmap = __webpack_require__(15);
	var curryN = __webpack_require__(17);
	var keys = __webpack_require__(19);
	
	
	/**
	 * Takes a function and
	 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	 * applies the function to each of the functor's values, and returns
	 * a functor of the same shape.
	 *
	 * Ramda provides suitable `map` implementations for `Array` and `Object`,
	 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	 *
	 * Dispatches to the `map` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * Also treats functions as functors and will compose them together.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => (a -> b) -> f a -> f b
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {Array} list The list to be iterated over.
	 * @return {Array} The new list.
	 * @see R.transduce, R.addIndex
	 * @example
	 *
	 *      var double = x => x * 2;
	 *
	 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	 *
	 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	 * @symb R.map(f, [a, b]) = [f(a), f(b)]
	 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
	 * @symb R.map(f, functor_o) = functor_o.map(f)
	 */
	module.exports = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
	  switch (Object.prototype.toString.call(functor)) {
	    case '[object Function]':
	      return curryN(functor.length, function() {
	        return fn.call(this, functor.apply(this, arguments));
	      });
	    case '[object Object]':
	      return _reduce(function(acc, key) {
	        acc[key] = fn(functor[key]);
	        return acc;
	      }, {}, keys(functor));
	    default:
	      return _map(fn, functor);
	  }
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _isPlaceholder = __webpack_require__(4);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2
	             : _curry1(function(_b) { return fn(a, _b); });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
	             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
	             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
	             : fn(a, b);
	    }
	  };
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _isPlaceholder = __webpack_require__(4);
	
	
	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function _isPlaceholder(a) {
	  return a != null &&
	         typeof a === 'object' &&
	         a['@@functional/placeholder'] === true;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var _isArray = __webpack_require__(6);
	var _isTransformer = __webpack_require__(7);
	
	
	/**
	 * Returns a function that dispatches with different strategies based on the
	 * object in list position (last argument). If it is an array, executes [fn].
	 * Otherwise, if it has a function with one of the given method names, it will
	 * execute that function (functor case). Otherwise, if it is a transformer,
	 * uses transducer [xf] to return a new transformer (transducer case).
	 * Otherwise, it will default to executing [fn].
	 *
	 * @private
	 * @param {Array} methodNames properties to check for a custom implementation
	 * @param {Function} xf transducer to initialize if object is transformer
	 * @param {Function} fn default ramda implementation
	 * @return {Function} A function that dispatches on object in list position
	 */
	module.exports = function _dispatchable(methodNames, xf, fn) {
	  return function() {
	    if (arguments.length === 0) {
	      return fn();
	    }
	    var args = Array.prototype.slice.call(arguments, 0);
	    var obj = args.pop();
	    if (!_isArray(obj)) {
	      var idx = 0;
	      while (idx < methodNames.length) {
	        if (typeof obj[methodNames[idx]] === 'function') {
	          return obj[methodNames[idx]].apply(obj, args);
	        }
	        idx += 1;
	      }
	      if (_isTransformer(obj)) {
	        var transducer = xf.apply(null, args);
	        return transducer(obj);
	      }
	    }
	    return fn.apply(this, arguments);
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Tests whether or not an object is an array.
	 *
	 * @private
	 * @param {*} val The object to test.
	 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	 * @example
	 *
	 *      _isArray([]); //=> true
	 *      _isArray(null); //=> false
	 *      _isArray({}); //=> false
	 */
	module.exports = Array.isArray || function _isArray(val) {
	  return (val != null &&
	          val.length >= 0 &&
	          Object.prototype.toString.call(val) === '[object Array]');
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function _isTransformer(obj) {
	  return typeof obj['@@transducer/step'] === 'function';
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function _map(fn, functor) {
	  var idx = 0;
	  var len = functor.length;
	  var result = Array(len);
	  while (idx < len) {
	    result[idx] = fn(functor[idx]);
	    idx += 1;
	  }
	  return result;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var _isArrayLike = __webpack_require__(10);
	var _xwrap = __webpack_require__(12);
	var bind = __webpack_require__(13);
	
	
	module.exports = (function() {
	  function _arrayReduce(xf, acc, list) {
	    var idx = 0;
	    var len = list.length;
	    while (idx < len) {
	      acc = xf['@@transducer/step'](acc, list[idx]);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      idx += 1;
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _iterableReduce(xf, acc, iter) {
	    var step = iter.next();
	    while (!step.done) {
	      acc = xf['@@transducer/step'](acc, step.value);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      step = iter.next();
	    }
	    return xf['@@transducer/result'](acc);
	  }
	
	  function _methodReduce(xf, acc, obj, methodName) {
	    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
	  }
	
	  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
	  return function _reduce(fn, acc, list) {
	    if (typeof fn === 'function') {
	      fn = _xwrap(fn);
	    }
	    if (_isArrayLike(list)) {
	      return _arrayReduce(fn, acc, list);
	    }
	    if (typeof list['fantasy-land/reduce'] === 'function') {
	      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
	    }
	    if (list[symIterator] != null) {
	      return _iterableReduce(fn, acc, list[symIterator]());
	    }
	    if (typeof list.next === 'function') {
	      return _iterableReduce(fn, acc, list);
	    }
	    if (typeof list.reduce === 'function') {
	      return _methodReduce(fn, acc, list, 'reduce');
	    }
	
	    throw new TypeError('reduce: list must be array or iterable');
	  };
	}());


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _isArray = __webpack_require__(6);
	var _isString = __webpack_require__(11);
	
	
	/**
	 * Tests whether or not an object is similar to an array.
	 *
	 * @private
	 * @category Type
	 * @category List
	 * @sig * -> Boolean
	 * @param {*} x The object to test.
	 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	 * @example
	 *
	 *      _isArrayLike([]); //=> true
	 *      _isArrayLike(true); //=> false
	 *      _isArrayLike({}); //=> false
	 *      _isArrayLike({length: 10}); //=> false
	 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	 */
	module.exports = _curry1(function isArrayLike(x) {
	  if (_isArray(x)) { return true; }
	  if (!x) { return false; }
	  if (typeof x !== 'object') { return false; }
	  if (_isString(x)) { return false; }
	  if (x.nodeType === 1) { return !!x.length; }
	  if (x.length === 0) { return true; }
	  if (x.length > 0) {
	    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	  }
	  return false;
	});


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function _isString(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = (function() {
	  function XWrap(fn) {
	    this.f = fn;
	  }
	  XWrap.prototype['@@transducer/init'] = function() {
	    throw new Error('init not implemented on XWrap');
	  };
	  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
	  XWrap.prototype['@@transducer/step'] = function(acc, x) {
	    return this.f(acc, x);
	  };
	
	  return function _xwrap(fn) { return new XWrap(fn); };
	}());


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(14);
	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * Creates a function that is bound to a context.
	 * Note: `R.bind` does not provide the additional argument-binding capabilities of
	 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @category Object
	 * @sig (* -> *) -> {*} -> (* -> *)
	 * @param {Function} fn The function to bind to context
	 * @param {Object} thisObj The context to bind `fn` to
	 * @return {Function} A function that will execute in the context of `thisObj`.
	 * @see R.partial
	 * @example
	 *
	 *      var log = R.bind(console.log, console);
	 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
	 *      // logs {a: 2}
	 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
	 */
	module.exports = _curry2(function bind(fn, thisObj) {
	  return _arity(fn.length, function() {
	    return fn.apply(thisObj, arguments);
	  });
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0: return function() { return fn.apply(this, arguments); };
	    case 1: return function(a0) { return fn.apply(this, arguments); };
	    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
	    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
	    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
	    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
	    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
	    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	var _xfBase = __webpack_require__(16);
	
	
	module.exports = (function() {
	  function XMap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XMap.prototype['@@transducer/init'] = _xfBase.init;
	  XMap.prototype['@@transducer/result'] = _xfBase.result;
	  XMap.prototype['@@transducer/step'] = function(result, input) {
	    return this.xf['@@transducer/step'](result, this.f(input));
	  };
	
	  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
	}());


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  init: function() {
	    return this.xf['@@transducer/init']();
	  },
	  result: function(result) {
	    return this.xf['@@transducer/result'](result);
	  }
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(14);
	var _curry1 = __webpack_require__(3);
	var _curry2 = __webpack_require__(2);
	var _curryN = __webpack_require__(18);
	
	
	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(14);
	var _isPlaceholder = __webpack_require__(4);
	
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function() {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length &&
	          (!_isPlaceholder(received[combinedIdx]) ||
	           argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined)
	                     : _arity(left, _curryN(length, combined, fn));
	  };
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _has = __webpack_require__(20);
	var _isArguments = __webpack_require__(21);
	
	
	/**
	 * Returns a list containing the names of all the enumerable own properties of
	 * the supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own properties.
	 * @see R.keysIn, R.values
	 * @example
	 *
	 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	 */
	module.exports = (function() {
	  // cover IE < 9 keys issues
	  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
	                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	  // Safari bug
	  var hasArgsEnumBug = (function() {
	    'use strict';
	    return arguments.propertyIsEnumerable('length');
	  }());
	
	  var contains = function contains(list, item) {
	    var idx = 0;
	    while (idx < list.length) {
	      if (list[idx] === item) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  };
	
	  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
	    _curry1(function keys(obj) {
	      return Object(obj) !== obj ? [] : Object.keys(obj);
	    }) :
	    _curry1(function keys(obj) {
	      if (Object(obj) !== obj) {
	        return [];
	      }
	      var prop, nIdx;
	      var ks = [];
	      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	      for (prop in obj) {
	        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	          ks[ks.length] = prop;
	        }
	      }
	      if (hasEnumBug) {
	        nIdx = nonEnumerableProps.length - 1;
	        while (nIdx >= 0) {
	          prop = nonEnumerableProps[nIdx];
	          if (_has(prop, obj) && !contains(ks, prop)) {
	            ks[ks.length] = prop;
	          }
	          nIdx -= 1;
	        }
	      }
	      return ks;
	    });
	}());


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function _has(prop, obj) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _has = __webpack_require__(20);
	
	
	module.exports = (function() {
	  var toString = Object.prototype.toString;
	  return toString.call(arguments) === '[object Arguments]' ?
	    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
	    function _isArguments(x) { return _has('callee', x); };
	}());


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments, regardless of
	 * their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are
	 * equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	module.exports = {'@@functional/placeholder': true};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _assign = __webpack_require__(24);
	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * Create a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects,
	 * the value from the second object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> {k: v} -> {k: v}
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
	 * @example
	 *
	 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	 *      //=> { 'name': 'fred', 'age': 40 }
	 *
	 *      var resetToDefault = R.merge(R.__, {x: 0});
	 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
	 */
	module.exports = _curry2(function merge(l, r) {
	  return _assign({}, l, r);
	});


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _objectAssign = __webpack_require__(25);
	
	module.exports =
	  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var _has = __webpack_require__(20);
	
	// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	module.exports = function _objectAssign(target) {
	  if (target == null) {
	    throw new TypeError('Cannot convert undefined or null to object');
	  }
	
	  var output = Object(target);
	  var idx = 1;
	  var length = arguments.length;
	  while (idx < length) {
	    var source = arguments[idx];
	    if (source != null) {
	      for (var nextKey in source) {
	        if (_has(nextKey, source)) {
	          output[nextKey] = source[nextKey];
	        }
	      }
	    }
	    idx += 1;
	  }
	  return output;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _has = __webpack_require__(20);
	
	
	/**
	 * Converts an object into an array of key, value arrays. Only the object's
	 * own properties are used.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own properties.
	 * @see R.fromPairs
	 * @example
	 *
	 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	 */
	module.exports = _curry1(function toPairs(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    if (_has(prop, obj)) {
	      pairs[pairs.length] = [prop, obj[prop]];
	    }
	  }
	  return pairs;
	});


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(14);
	var _pipe = __webpack_require__(28);
	var reduce = __webpack_require__(29);
	var tail = __webpack_require__(31);
	
	
	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * In some libraries this function is named `sequence`.
	 *
	 * **Note:** The result of pipe is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.compose
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
	 */
	module.exports = function pipe() {
	  if (arguments.length === 0) {
	    throw new Error('pipe requires at least one argument');
	  }
	  return _arity(arguments[0].length,
	                reduce(_pipe, arguments[0], tail(arguments)));
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function _pipe(f, g) {
	  return function() {
	    return g.call(this, f.apply(this, arguments));
	  };
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(30);
	var _reduce = __webpack_require__(9);
	
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It may use
	 * [`R.reduced`](#reduced) to shortcut the iteration.
	 *
	 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
	 * is *(value, acc)*.
	 *
	 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	 *
	 * Dispatches to the `reduce` method of the third argument, if present. When
	 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
	 * shortcuting, as this is not implemented by `reduce`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduced, R.addIndex, R.reduceRight
	 * @example
	 *
	 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
	 *                -               -10
	 *               / \              / \
	 *              -   4           -6   4
	 *             / \              / \
	 *            -   3   ==>     -3   3
	 *           / \              / \
	 *          -   2           -1   2
	 *         / \              / \
	 *        0   1            0   1
	 *
	 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
	 */
	module.exports = _curry3(_reduce);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _curry2 = __webpack_require__(2);
	var _isPlaceholder = __webpack_require__(4);
	
	
	/**
	 * Optimized internal three-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry3(fn) {
	  return function f3(a, b, c) {
	    switch (arguments.length) {
	      case 0:
	        return f3;
	      case 1:
	        return _isPlaceholder(a) ? f3
	             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
	      case 2:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
	             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
	             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
	             : _curry1(function(_c) { return fn(a, b, _c); });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
	             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
	             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
	             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
	             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
	             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
	             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
	             : fn(a, b, c);
	    }
	  };
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _checkForMethod = __webpack_require__(32);
	var _curry1 = __webpack_require__(3);
	var slice = __webpack_require__(33);
	
	
	/**
	 * Returns all but the first element of the given list or string (or object
	 * with a `tail` method).
	 *
	 * Dispatches to the `slice` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.head, R.init, R.last
	 * @example
	 *
	 *      R.tail([1, 2, 3]);  //=> [2, 3]
	 *      R.tail([1, 2]);     //=> [2]
	 *      R.tail([1]);        //=> []
	 *      R.tail([]);         //=> []
	 *
	 *      R.tail('abc');  //=> 'bc'
	 *      R.tail('ab');   //=> 'b'
	 *      R.tail('a');    //=> ''
	 *      R.tail('');     //=> ''
	 */
	module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _isArray = __webpack_require__(6);
	
	
	/**
	 * This checks whether a function has a [methodname] function. If it isn't an
	 * array it will execute that function otherwise it will default to the ramda
	 * implementation.
	 *
	 * @private
	 * @param {Function} fn ramda implemtation
	 * @param {String} methodname property to check for a custom implementation
	 * @return {Object} Whatever the return value of the method is.
	 */
	module.exports = function _checkForMethod(methodname, fn) {
	  return function() {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
	      fn.apply(this, arguments) :
	      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
	  };
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var _checkForMethod = __webpack_require__(32);
	var _curry3 = __webpack_require__(30);
	
	
	/**
	 * Returns the elements of the given list or string (or object with a `slice`
	 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	 *
	 * Dispatches to the `slice` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @sig Number -> Number -> String -> String
	 * @param {Number} fromIndex The start index (inclusive).
	 * @param {Number} toIndex The end index (exclusive).
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	 */
	module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	  return Array.prototype.slice.call(list, fromIndex, toIndex);
	}));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var curryN = __webpack_require__(17);
	
	
	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrapAs = exports.typeEq = undefined;
	
	var _isNil = __webpack_require__(36);
	
	var _isNil2 = _interopRequireDefault(_isNil);
	
	var _T = __webpack_require__(37);
	
	var _T2 = _interopRequireDefault(_T);
	
	var _always = __webpack_require__(38);
	
	var _always2 = _interopRequireDefault(_always);
	
	var _is = __webpack_require__(39);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _cond = __webpack_require__(40);
	
	var _cond2 = _interopRequireDefault(_cond);
	
	var _type = __webpack_require__(42);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _curry = __webpack_require__(34);
	
	var _curry2 = _interopRequireDefault(_curry);
	
	exports.wrap = wrap;
	exports.unwrap = unwrap;
	
	var _registry = __webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Typed() {}
	
	var typeEq = exports.typeEq = (0, _curry2.default)(function (name, x) {
	  return (0, _type2.default)(x) === name;
	});
	
	var typeNameFor = (0, _cond2.default)([[(0, _is2.default)(Buffer), (0, _always2.default)('binary')], [(0, _is2.default)(Uint8Array), (0, _always2.default)('binary')], [typeEq('String'), (0, _always2.default)('binary')], [typeEq('Array'), (0, _always2.default)('list')], [typeEq('Number'), (0, _always2.default)('integer')], [typeEq('Object'), (0, _always2.default)('map')], [typeEq('RegExp'), (0, _always2.default)('regex')], [typeEq('Date'), (0, _always2.default)('time')], [typeEq('Null'), (0, _always2.default)('nil')], [_T2.default, (0, _always2.default)(null)]]);
	
	var wrapAs = exports.wrapAs = (0, _curry2.default)(function (name, valueOrTyped) {
	  var value = valueOrTyped;
	
	  if ((0, _is2.default)(Typed, valueOrTyped)) {
	    if (valueOrTyped.type.name === name) {
	      return valueOrTyped;
	    }
	
	    value = value.value;
	  }
	
	  var valueType = _registry.types[name];
	
	  if ((0, _isNil2.default)(valueType)) {
	    throw new Error('type does not exist');
	  }
	
	  if (!valueType.validate(value)) {
	    throw new Error('type validation for ' + name + ' failed');
	  }
	
	  return Object.create(Typed.prototype, {
	    value: {
	      configurable: false,
	      writable: false,
	      enumerable: true,
	      value: valueType.transform(value)
	    },
	    type: {
	      configurable: false,
	      writable: false,
	      enumerable: true,
	      value: valueType
	    }
	  });
	});
	
	function wrap(value) {
	  if ((0, _is2.default)(Typed, value)) {
	    return value;
	  }
	
	  var valueType = typeNameFor(value);
	
	  if (valueType == null) {
	    throw new Error('invalid value');
	  }
	
	  return wrapAs(valueType, value);
	}
	
	function unwrap(value) {
	  if (!(0, _is2.default)(Typed, value)) {
	    return value;
	  }
	
	  return value.type.unwrap(value.value);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	
	
	/**
	 * Checks if the input value is `null` or `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Type
	 * @sig * -> Boolean
	 * @param {*} x The value to test.
	 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	 * @example
	 *
	 *      R.isNil(null); //=> true
	 *      R.isNil(undefined); //=> true
	 *      R.isNil(0); //=> false
	 *      R.isNil([]); //=> false
	 */
	module.exports = _curry1(function isNil(x) { return x == null; });


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var always = __webpack_require__(38);
	
	
	/**
	 * A function that always returns `true`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.F
	 * @example
	 *
	 *      R.T(); //=> true
	 */
	module.exports = always(true);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	
	
	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> (* -> a)
	 * @param {*} val The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 * @example
	 *
	 *      var t = R.always('Tee');
	 *      t(); //=> 'Tee'
	 */
	module.exports = _curry1(function always(val) {
	  return function() {
	    return val;
	  };
	});


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * See if an object (`val`) is an instance of the supplied constructor. This
	 * function will check up the inheritance chain, if any.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Type
	 * @sig (* -> {*}) -> a -> Boolean
	 * @param {Object} ctor A constructor
	 * @param {*} val The value to test
	 * @return {Boolean}
	 * @example
	 *
	 *      R.is(Object, {}); //=> true
	 *      R.is(Number, 1); //=> true
	 *      R.is(Object, 1); //=> false
	 *      R.is(String, 's'); //=> true
	 *      R.is(String, new String('')); //=> true
	 *      R.is(Object, new String('')); //=> true
	 *      R.is(Object, 's'); //=> false
	 *      R.is(Number, {}); //=> false
	 */
	module.exports = _curry2(function is(Ctor, val) {
	  return val != null && val.constructor === Ctor || val instanceof Ctor;
	});


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(14);
	var _curry1 = __webpack_require__(3);
	var map = __webpack_require__(1);
	var max = __webpack_require__(41);
	var reduce = __webpack_require__(29);
	
	
	/**
	 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
	 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
	 * to `fn` are applied to each of the predicates in turn until one returns a
	 * "truthy" value, at which point `fn` returns the result of applying its
	 * arguments to the corresponding transformer. If none of the predicates
	 * matches, `fn` returns undefined.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Logic
	 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	 * @param {Array} pairs A list of [predicate, transformer]
	 * @return {Function}
	 * @example
	 *
	 *      var fn = R.cond([
	 *        [R.equals(0),   R.always('water freezes at 0°C')],
	 *        [R.equals(100), R.always('water boils at 100°C')],
	 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	 *      ]);
	 *      fn(0); //=> 'water freezes at 0°C'
	 *      fn(50); //=> 'nothing special happens at 50°C'
	 *      fn(100); //=> 'water boils at 100°C'
	 */
	module.exports = _curry1(function cond(pairs) {
	  var arity = reduce(max,
	                     0,
	                     map(function(pair) { return pair[0].length; }, pairs));
	  return _arity(arity, function() {
	    var idx = 0;
	    while (idx < pairs.length) {
	      if (pairs[idx][0].apply(this, arguments)) {
	        return pairs[idx][1].apply(this, arguments);
	      }
	      idx += 1;
	    }
	  });
	});


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * Returns the larger of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.maxBy, R.min
	 * @example
	 *
	 *      R.max(789, 123); //=> 789
	 *      R.max('a', 'b'); //=> 'b'
	 */
	module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	
	
	/**
	 * Gives a single-word string description of the (native) type of a value,
	 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	 * attempt to distinguish user Object types any further, reporting them all as
	 * 'Object'.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Type
	 * @sig (* -> {*}) -> String
	 * @param {*} val The value to test
	 * @return {String}
	 * @example
	 *
	 *      R.type({}); //=> "Object"
	 *      R.type(1); //=> "Number"
	 *      R.type(false); //=> "Boolean"
	 *      R.type('s'); //=> "String"
	 *      R.type(null); //=> "Null"
	 *      R.type([]); //=> "Array"
	 *      R.type(/[A-z]/); //=> "RegExp"
	 *      R.type(() => {}); //=> "Function"
	 */
	module.exports = _curry1(function type(val) {
	  return val === null      ? 'Null'      :
	         val === undefined ? 'Undefined' :
	         Object.prototype.toString.call(val).slice(8, -1);
	});


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registerType = registerType;
	var types = exports.types = {};
	
	function registerType(type) {
	  types[type.name] = type;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _forEach = __webpack_require__(45);
	
	var _forEach2 = _interopRequireDefault(_forEach);
	
	exports.default = init;
	
	var _registry = __webpack_require__(43);
	
	var _map = __webpack_require__(46);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _list = __webpack_require__(59);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _tuple = __webpack_require__(60);
	
	var _tuple2 = _interopRequireDefault(_tuple);
	
	var _atom = __webpack_require__(61);
	
	var _atom2 = _interopRequireDefault(_atom);
	
	var _integer = __webpack_require__(62);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _float = __webpack_require__(63);
	
	var _float2 = _interopRequireDefault(_float);
	
	var _binary = __webpack_require__(64);
	
	var _binary2 = _interopRequireDefault(_binary);
	
	var _regex = __webpack_require__(65);
	
	var _regex2 = _interopRequireDefault(_regex);
	
	var _charlist = __webpack_require__(66);
	
	var _charlist2 = _interopRequireDefault(_charlist);
	
	var _time = __webpack_require__(67);
	
	var _time2 = _interopRequireDefault(_time);
	
	var _nil = __webpack_require__(68);
	
	var _nil2 = _interopRequireDefault(_nil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init() {
	  var types = [_map2.default, _list2.default, _tuple2.default, _atom2.default, _integer2.default, _float2.default, _binary2.default, _charlist2.default, _regex2.default, _time2.default, _nil2.default];
	
	  (0, _forEach2.default)(_registry.registerType, types);
	}
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var _checkForMethod = __webpack_require__(32);
	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * Iterate over an input `list`, calling a provided function `fn` for each
	 * element in the list.
	 *
	 * `fn` receives one argument: *(value)*.
	 *
	 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.forEach` method. For more
	 * details on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	 *
	 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	 * the original array. In some libraries this function is named `each`.
	 *
	 * Dispatches to the `forEach` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> *) -> [a] -> [a]
	 * @param {Function} fn The function to invoke. Receives one argument, `value`.
	 * @param {Array} list The list to iterate over.
	 * @return {Array} The original list.
	 * @see R.addIndex
	 * @example
	 *
	 *      var printXPlusFive = x => console.log(x + 5);
	 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	 *      // logs 6
	 *      // logs 7
	 *      // logs 8
	 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
	 */
	module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
	  var len = list.length;
	  var idx = 0;
	  while (idx < len) {
	    fn(list[idx]);
	    idx += 1;
	  }
	  return list;
	}));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unwrapMap = exports.transform = undefined;
	
	var _either = __webpack_require__(47);
	
	var _either2 = _interopRequireDefault(_either);
	
	var _fromPairs = __webpack_require__(54);
	
	var _fromPairs2 = _interopRequireDefault(_fromPairs);
	
	var _map = __webpack_require__(1);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _toPairs = __webpack_require__(26);
	
	var _toPairs2 = _interopRequireDefault(_toPairs);
	
	var _when = __webpack_require__(55);
	
	var _when2 = _interopRequireDefault(_when);
	
	var _pipe = __webpack_require__(27);
	
	var _pipe2 = _interopRequireDefault(_pipe);
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = exports.transform = (0, _pipe2.default)((0, _when2.default)((0, _types.typeEq)('Object'), _toPairs2.default), (0, _map2.default)(function (_ref) {
	  var _ref2 = _slicedToArray(_ref, 2),
	      k = _ref2[0],
	      v = _ref2[1];
	
	  return [(0, _types.wrap)(k), (0, _types.wrap)(v)];
	}));
	
	var unwrapMap = exports.unwrapMap = (0, _pipe2.default)((0, _map2.default)(function (_ref3) {
	  var _ref4 = _slicedToArray(_ref3, 2),
	      k = _ref4[0],
	      v = _ref4[1];
	
	  return [(0, _types.unwrap)(k), (0, _types.unwrap)(v)];
	}), _fromPairs2.default);
	
	var map = (0, _type2.default)({
	  name: 'map',
	  validate: (0, _either2.default)((0, _types.typeEq)('Object'), (0, _types.typeEq)('Array')),
	  transform: transform,
	  unwrap: unwrapMap
	});
	
	exports.default = map;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	var _isFunction = __webpack_require__(48);
	var lift = __webpack_require__(49);
	var or = __webpack_require__(53);
	
	
	/**
	 * A function wrapping calls to the two functions in an `||` operation,
	 * returning the result of the first function if it is truth-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * truth-y value.
	 *
	 * In addition to functions, `R.either` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f a predicate
	 * @param {Function} g another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	 * @see R.or
	 * @example
	 *
	 *      var gt10 = x => x > 10;
	 *      var even = x => x % 2 === 0;
	 *      var f = R.either(gt10, even);
	 *      f(101); //=> true
	 *      f(8); //=> true
	 */
	module.exports = _curry2(function either(f, g) {
	  return _isFunction(f) ?
	    function _either() {
	      return f.apply(this, arguments) || g.apply(this, arguments);
	    } :
	    lift(or)(f, g);
	});


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function _isFunction(x) {
	  return Object.prototype.toString.call(x) === '[object Function]';
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var liftN = __webpack_require__(50);
	
	
	/**
	 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.liftN
	 * @example
	 *
	 *      var madd3 = R.lift((a, b, c) => a + b + c);
	 *
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 *
	 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
	 *
	 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	 */
	module.exports = _curry1(function lift(fn) {
	  return liftN(fn.length, fn);
	});


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	var _reduce = __webpack_require__(9);
	var ap = __webpack_require__(51);
	var curryN = __webpack_require__(17);
	var map = __webpack_require__(1);
	
	
	/**
	 * "lifts" a function to be the specified arity, so that it may "map over" that
	 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig Number -> (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.lift, R.ap
	 * @example
	 *
	 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 */
	module.exports = _curry2(function liftN(arity, fn) {
	  var lifted = curryN(arity, fn);
	  return curryN(arity, function() {
	    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
	  });
	});


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _concat = __webpack_require__(52);
	var _curry2 = __webpack_require__(2);
	var _reduce = __webpack_require__(9);
	var map = __webpack_require__(1);
	
	
	/**
	 * ap applies a list of functions to a list of values.
	 *
	 * Dispatches to the `ap` method of the second argument, if present. Also
	 * treats curried functions as applicatives.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig [a -> b] -> [a] -> [b]
	 * @sig Apply f => f (a -> b) -> f a -> f b
	 * @param {*} applyF
	 * @param {*} applyX
	 * @return {*}
	 * @example
	 *
	 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
	 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
	 */
	module.exports = _curry2(function ap(applyF, applyX) {
	  return (
	    typeof applyX['fantasy-land/ap'] === 'function' ?
	      applyX['fantasy-land/ap'](applyF) :
	    typeof applyF.ap === 'function' ?
	      applyF.ap(applyX) :
	    typeof applyF === 'function' ?
	      function(x) { return applyF(x)(applyX(x)); } :
	    // else
	      _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
	  );
	});


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Private `concat` function to merge two array-like objects.
	 *
	 * @private
	 * @param {Array|Arguments} [set1=[]] An array-like object.
	 * @param {Array|Arguments} [set2=[]] An array-like object.
	 * @return {Array} A new, merged array.
	 * @example
	 *
	 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 */
	module.exports = function _concat(set1, set2) {
	  set1 = set1 || [];
	  set2 = set2 || [];
	  var idx;
	  var len1 = set1.length;
	  var len2 = set2.length;
	  var result = [];
	
	  idx = 0;
	  while (idx < len1) {
	    result[result.length] = set1[idx];
	    idx += 1;
	  }
	  idx = 0;
	  while (idx < len2) {
	    result[result.length] = set2[idx];
	    idx += 1;
	  }
	  return result;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _curry2 = __webpack_require__(2);
	
	
	/**
	 * Returns `true` if one or both of its arguments are `true`. Returns `false`
	 * if both arguments are `false`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {Any} a
	 * @param {Any} b
	 * @return {Any} the first argument if truthy, otherwise the second argument.
	 * @see R.either
	 * @example
	 *
	 *      R.or(true, true); //=> true
	 *      R.or(true, false); //=> true
	 *      R.or(false, true); //=> true
	 *      R.or(false, false); //=> false
	 */
	module.exports = _curry2(function or(a, b) {
	  return a || b;
	});


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	
	
	/**
	 * Creates a new object from a list key-value pairs. If a key appears in
	 * multiple pairs, the rightmost pair is included in the object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [[k,v]] -> {k: v}
	 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	 * @return {Object} The object made by pairing up `keys` and `values`.
	 * @see R.toPairs, R.pair
	 * @example
	 *
	 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry1(function fromPairs(pairs) {
	  var result = {};
	  var idx = 0;
	  while (idx < pairs.length) {
	    result[pairs[idx][0]] = pairs[idx][1];
	    idx += 1;
	  }
	  return result;
	});


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var _curry3 = __webpack_require__(30);
	
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is satisfied, the function will return the result of calling
	 * the `whenTrueFn` function with the same argument. If the predicate is not
	 * satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred       A predicate function
	 * @param {Function} whenTrueFn A function to invoke when the `condition`
	 *                              evaluates to a truthy value.
	 * @param {*}        x          An object to test with the `pred` function and
	 *                              pass to `whenTrueFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	 * @see R.ifElse, R.unless
	 * @example
	 *
	 *      // truncate :: String -> String
	 *      var truncate = R.when(
	 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	 *        R.pipe(R.take(10), R.append('…'), R.join(''))
	 *      );
	 *      truncate('12345');         //=> '12345'
	 *      truncate('0123456789ABC'); //=> '0123456789…'
	 */
	module.exports = _curry3(function when(pred, whenTrueFn, x) {
	  return pred(x) ? whenTrueFn(x) : x;
	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _identity = __webpack_require__(57);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _always = __webpack_require__(38);
	
	var _always2 = _interopRequireDefault(_always);
	
	exports.default = type;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function type(_ref) {
	  var name = _ref.name,
	      validate = _ref.validate,
	      transform = _ref.transform,
	      unwrap = _ref.unwrap;
	
	  return {
	    name: name,
	    validate: validate || (0, _always2.default)(true),
	    transform: transform || _identity2.default,
	    unwrap: unwrap || _identity2.default
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(3);
	var _identity = __webpack_require__(58);
	
	
	/**
	 * A function that does nothing but return the parameter supplied to it. Good
	 * as a default or placeholder function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x The value to return.
	 * @return {*} The input value, `x`.
	 * @example
	 *
	 *      R.identity(1); //=> 1
	 *
	 *      var obj = {};
	 *      R.identity(obj) === obj; //=> true
	 * @symb R.identity(a) = a
	 */
	module.exports = _curry1(_identity);


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function _identity(x) { return x; };


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map = __webpack_require__(1);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var list = (0, _type2.default)({
	  name: 'list',
	  validate: (0, _types.typeEq)('Array'),
	  transform: (0, _map2.default)(_types.wrap),
	  unwrap: (0, _map2.default)(_types.unwrap)
	});
	
	exports.default = list;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map = __webpack_require__(1);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tuple = (0, _type2.default)({
	  name: 'tuple',
	  validate: (0, _types.typeEq)('Array'),
	  transform: (0, _map2.default)(_types.wrap),
	  unwrap: (0, _map2.default)(_types.unwrap)
	});
	
	exports.default = tuple;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var atom = (0, _type2.default)({
	  name: 'atom',
	  validate: (0, _types.typeEq)('String')
	});
	
	exports.default = atom;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var integer = (0, _type2.default)({
	  name: 'integer',
	  validate: (0, _types.typeEq)('Number')
	});
	
	exports.default = integer;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var float = (0, _type2.default)({
	  name: 'float',
	  validate: (0, _types.typeEq)('Number')
	});
	
	exports.default = float;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _is = __webpack_require__(39);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _either = __webpack_require__(47);
	
	var _either2 = _interopRequireDefault(_either);
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isBinary = (0, _either2.default)((0, _types.typeEq)('String'), (0, _is2.default)(Buffer));
	
	var binary = (0, _type2.default)({
	  name: 'binary',
	  validate: isBinary
	});
	
	exports.default = binary;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var regex = (0, _type2.default)({
	  name: 'regex',
	  validate: (0, _types.typeEq)('RegExp')
	});
	
	exports.default = regex;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _is = __webpack_require__(39);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _either = __webpack_require__(47);
	
	var _either2 = _interopRequireDefault(_either);
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCharlist = (0, _either2.default)((0, _types.typeEq)('String'), (0, _is2.default)(Buffer));
	
	var charlist = (0, _type2.default)({
	  name: 'charlist',
	  validate: isCharlist
	});
	
	exports.default = charlist;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var time = (0, _type2.default)({
	  name: 'time',
	  validate: (0, _types.typeEq)('Date')
	});
	
	exports.default = time;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(56);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _types = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nil = (0, _type2.default)({
	  name: 'nil',
	  validate: (0, _types.typeEq)('Null')
	});
	
	exports.default = nil;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=yarpex.js.map