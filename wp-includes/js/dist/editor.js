this["wp"] = this["wp"] || {}; this["wp"]["editor"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "PLxR");
/******/ })
/************************************************************************/
/******/ ({

/***/ "16Al":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("WbBG");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "17x9":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("16Al")();
}


/***/ }),

/***/ "1OyB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "25BE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "51Zz":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "6aBm":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "7fqt":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["wordcount"]; }());

/***/ }),

/***/ "BsWD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3WO");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "CNgt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__("cDcd");
var PropTypes = __webpack_require__("17x9");
var autosize = __webpack_require__("GemG");
var _getLineHeight = __webpack_require__("Rk8H");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = null;
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea && autosize(_this.textarea); });
        }
        else {
            this.textarea && autosize(this.textarea);
        }
        if (this.textarea) {
            this.textarea.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea) {
            this.textarea.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: function (element) {
                _this.textarea = element;
                if (typeof _this.props.innerRef === 'function') {
                    _this.props.innerRef(element);
                }
                else if (_this.props.innerRef) {
                    _this.props.innerRef.current = element;
                }
            } }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea && autosize.update(this.textarea);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.any,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ "Civd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var layout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (layout);


/***/ }),

/***/ "DSFK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "Ff2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectWithoutProperties; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "FqII":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "GemG":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "HaE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "JREk":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "JX7q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Ji7U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s4An");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "KQm4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("a3WO");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__("25BE");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("BsWD");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "O6Fj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__("CNgt");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ "ODXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__("DSFK");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("BsWD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__("PYwp");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ "PLxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "storeConfig", function() { return /* reexport */ storeConfig; });
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });
__webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return /* reexport */ autocompleters_user; });
__webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return /* reexport */ autosave_monitor; });
__webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return /* reexport */ document_outline; });
__webpack_require__.d(__webpack_exports__, "DocumentOutlineCheck", function() { return /* reexport */ check; });
__webpack_require__.d(__webpack_exports__, "VisualEditorGlobalKeyboardShortcuts", function() { return /* reexport */ visual_editor_shortcuts; });
__webpack_require__.d(__webpack_exports__, "EditorGlobalKeyboardShortcuts", function() { return /* reexport */ EditorGlobalKeyboardShortcuts; });
__webpack_require__.d(__webpack_exports__, "TextEditorGlobalKeyboardShortcuts", function() { return /* reexport */ TextEditorGlobalKeyboardShortcuts; });
__webpack_require__.d(__webpack_exports__, "EditorKeyboardShortcutsRegister", function() { return /* reexport */ register_shortcuts; });
__webpack_require__.d(__webpack_exports__, "EditorHistoryRedo", function() { return /* reexport */ editor_history_redo; });
__webpack_require__.d(__webpack_exports__, "EditorHistoryUndo", function() { return /* reexport */ editor_history_undo; });
__webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return /* reexport */ editor_notices; });
__webpack_require__.d(__webpack_exports__, "EntitiesSavedStates", function() { return /* reexport */ entities_saved_states; });
__webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return /* reexport */ error_boundary; });
__webpack_require__.d(__webpack_exports__, "LocalAutosaveMonitor", function() { return /* reexport */ local_autosave_monitor; });
__webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return /* reexport */ page_attributes_check; });
__webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return /* reexport */ page_attributes_order; });
__webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return /* reexport */ page_attributes_parent; });
__webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return /* reexport */ page_attributes_template; });
__webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return /* reexport */ post_author; });
__webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return /* reexport */ post_author_check; });
__webpack_require__.d(__webpack_exports__, "PostComments", function() { return /* reexport */ post_comments; });
__webpack_require__.d(__webpack_exports__, "PostExcerpt", function() { return /* reexport */ post_excerpt; });
__webpack_require__.d(__webpack_exports__, "PostExcerptCheck", function() { return /* reexport */ post_excerpt_check; });
__webpack_require__.d(__webpack_exports__, "PostFeaturedImage", function() { return /* reexport */ post_featured_image; });
__webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return /* reexport */ post_featured_image_check; });
__webpack_require__.d(__webpack_exports__, "PostFormat", function() { return /* reexport */ PostFormat; });
__webpack_require__.d(__webpack_exports__, "PostFormatCheck", function() { return /* reexport */ post_format_check; });
__webpack_require__.d(__webpack_exports__, "PostLastRevision", function() { return /* reexport */ post_last_revision; });
__webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return /* reexport */ post_last_revision_check; });
__webpack_require__.d(__webpack_exports__, "PostLockedModal", function() { return /* reexport */ PostLockedModal; });
__webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return /* reexport */ post_pending_status; });
__webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return /* reexport */ post_pending_status_check; });
__webpack_require__.d(__webpack_exports__, "PostPingbacks", function() { return /* reexport */ post_pingbacks; });
__webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return /* reexport */ post_preview_button; });
__webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return /* reexport */ post_publish_button; });
__webpack_require__.d(__webpack_exports__, "PostPublishButtonLabel", function() { return /* reexport */ post_publish_button_label; });
__webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return /* reexport */ post_publish_panel; });
__webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return /* reexport */ PostSavedState; });
__webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return /* reexport */ post_schedule; });
__webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return /* reexport */ post_schedule_check; });
__webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return /* reexport */ post_schedule_label; });
__webpack_require__.d(__webpack_exports__, "PostSlug", function() { return /* reexport */ post_slug; });
__webpack_require__.d(__webpack_exports__, "PostSlugCheck", function() { return /* reexport */ PostSlugCheck; });
__webpack_require__.d(__webpack_exports__, "PostSticky", function() { return /* reexport */ post_sticky; });
__webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return /* reexport */ post_sticky_check; });
__webpack_require__.d(__webpack_exports__, "PostSwitchToDraftButton", function() { return /* reexport */ post_switch_to_draft_button; });
__webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return /* reexport */ post_taxonomies; });
__webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return /* reexport */ post_taxonomies_check; });
__webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return /* reexport */ PostTextEditor; });
__webpack_require__.d(__webpack_exports__, "PostTitle", function() { return /* reexport */ PostTitle; });
__webpack_require__.d(__webpack_exports__, "PostTrash", function() { return /* reexport */ post_trash; });
__webpack_require__.d(__webpack_exports__, "PostTrashCheck", function() { return /* reexport */ post_trash_check; });
__webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return /* reexport */ post_type_support_check; });
__webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return /* reexport */ post_visibility; });
__webpack_require__.d(__webpack_exports__, "PostVisibilityLabel", function() { return /* reexport */ post_visibility_label; });
__webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return /* reexport */ post_visibility_check; });
__webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return /* reexport */ table_of_contents; });
__webpack_require__.d(__webpack_exports__, "UnsavedChangesWarning", function() { return /* reexport */ UnsavedChangesWarning; });
__webpack_require__.d(__webpack_exports__, "WordCount", function() { return /* reexport */ WordCount; });
__webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return /* reexport */ provider; });
__webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return /* reexport */ external_wp_serverSideRender_default.a; });
__webpack_require__.d(__webpack_exports__, "RichText", function() { return /* reexport */ RichText; });
__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return /* reexport */ Autocomplete; });
__webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return /* reexport */ AlignmentToolbar; });
__webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return /* reexport */ BlockAlignmentToolbar; });
__webpack_require__.d(__webpack_exports__, "BlockControls", function() { return /* reexport */ BlockControls; });
__webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return /* reexport */ deprecated_BlockEdit; });
__webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return /* reexport */ BlockEditorKeyboardShortcuts; });
__webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return /* reexport */ BlockFormatControls; });
__webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return /* reexport */ BlockIcon; });
__webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return /* reexport */ BlockInspector; });
__webpack_require__.d(__webpack_exports__, "BlockList", function() { return /* reexport */ BlockList; });
__webpack_require__.d(__webpack_exports__, "BlockMover", function() { return /* reexport */ BlockMover; });
__webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return /* reexport */ BlockNavigationDropdown; });
__webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return /* reexport */ BlockSelectionClearer; });
__webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return /* reexport */ BlockSettingsMenu; });
__webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return /* reexport */ BlockTitle; });
__webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return /* reexport */ BlockToolbar; });
__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return /* reexport */ ColorPalette; });
__webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return /* reexport */ ContrastChecker; });
__webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return /* reexport */ CopyHandler; });
__webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return /* reexport */ DefaultBlockAppender; });
__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return /* reexport */ FontSizePicker; });
__webpack_require__.d(__webpack_exports__, "Inserter", function() { return /* reexport */ Inserter; });
__webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return /* reexport */ InnerBlocks; });
__webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return /* reexport */ InspectorAdvancedControls; });
__webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return /* reexport */ InspectorControls; });
__webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return /* reexport */ PanelColorSettings; });
__webpack_require__.d(__webpack_exports__, "PlainText", function() { return /* reexport */ PlainText; });
__webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return /* reexport */ RichTextShortcut; });
__webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return /* reexport */ RichTextToolbarButton; });
__webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return /* reexport */ __unstableRichTextInputEvent; });
__webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return /* reexport */ MediaPlaceholder; });
__webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return /* reexport */ MediaUpload; });
__webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return /* reexport */ MediaUploadCheck; });
__webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return /* reexport */ MultiSelectScrollIntoView; });
__webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return /* reexport */ NavigableToolbar; });
__webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return /* reexport */ ObserveTyping; });
__webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return /* reexport */ PreserveScrollInReorder; });
__webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return /* reexport */ SkipToSelectedBlock; });
__webpack_require__.d(__webpack_exports__, "URLInput", function() { return /* reexport */ URLInput; });
__webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return /* reexport */ URLInputButton; });
__webpack_require__.d(__webpack_exports__, "URLPopover", function() { return /* reexport */ URLPopover; });
__webpack_require__.d(__webpack_exports__, "Warning", function() { return /* reexport */ Warning; });
__webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return /* reexport */ WritingFlow; });
__webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return /* reexport */ createCustomColorsHOC; });
__webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return /* reexport */ getColorClassName; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return /* reexport */ getColorObjectByAttributeValues; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return /* reexport */ getColorObjectByColorValue; });
__webpack_require__.d(__webpack_exports__, "getFontSize", function() { return /* reexport */ getFontSize; });
__webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return /* reexport */ getFontSizeClass; });
__webpack_require__.d(__webpack_exports__, "withColorContext", function() { return /* reexport */ withColorContext; });
__webpack_require__.d(__webpack_exports__, "withColors", function() { return /* reexport */ withColors; });
__webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return /* reexport */ withFontSizes; });
__webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return /* reexport */ mediaUpload; });
__webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return /* reexport */ cleanForSlug; });
__webpack_require__.d(__webpack_exports__, "transformStyles", function() { return /* reexport */ external_wp_blockEditor_["transformStyles"]; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "hasEditorUndo", function() { return hasEditorUndo; });
__webpack_require__.d(selectors_namespaceObject, "hasEditorRedo", function() { return hasEditorRedo; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostNew", function() { return selectors_isEditedPostNew; });
__webpack_require__.d(selectors_namespaceObject, "hasChangedContent", function() { return hasChangedContent; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDirty", function() { return selectors_isEditedPostDirty; });
__webpack_require__.d(selectors_namespaceObject, "hasNonPostEntityChanges", function() { return selectors_hasNonPostEntityChanges; });
__webpack_require__.d(selectors_namespaceObject, "isCleanNewPost", function() { return selectors_isCleanNewPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPost", function() { return selectors_getCurrentPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostType", function() { return selectors_getCurrentPostType; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostId", function() { return selectors_getCurrentPostId; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostRevisionsCount", function() { return getCurrentPostRevisionsCount; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostLastRevisionId", function() { return getCurrentPostLastRevisionId; });
__webpack_require__.d(selectors_namespaceObject, "getPostEdits", function() { return selectors_getPostEdits; });
__webpack_require__.d(selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostAttribute", function() { return selectors_getCurrentPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostAttribute", function() { return selectors_getEditedPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getAutosaveAttribute", function() { return getAutosaveAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostVisibility", function() { return selectors_getEditedPostVisibility; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPending", function() { return isCurrentPostPending; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPublished", function() { return selectors_isCurrentPostPublished; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostScheduled", function() { return selectors_isCurrentPostScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostPublishable", function() { return selectors_isEditedPostPublishable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostSaveable", function() { return selectors_isEditedPostSaveable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostEmpty", function() { return isEditedPostEmpty; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostAutosaveable", function() { return selectors_isEditedPostAutosaveable; });
__webpack_require__.d(selectors_namespaceObject, "getAutosave", function() { return getAutosave; });
__webpack_require__.d(selectors_namespaceObject, "hasAutosave", function() { return hasAutosave; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostBeingScheduled", function() { return selectors_isEditedPostBeingScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDateFloating", function() { return isEditedPostDateFloating; });
__webpack_require__.d(selectors_namespaceObject, "isSavingPost", function() { return selectors_isSavingPost; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestSucceed", function() { return didPostSaveRequestSucceed; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestFail", function() { return didPostSaveRequestFail; });
__webpack_require__.d(selectors_namespaceObject, "isAutosavingPost", function() { return selectors_isAutosavingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPreviewingPost", function() { return isPreviewingPost; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostPreviewLink", function() { return selectors_getEditedPostPreviewLink; });
__webpack_require__.d(selectors_namespaceObject, "getSuggestedPostFormat", function() { return selectors_getSuggestedPostFormat; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksForSerialization", function() { return getBlocksForSerialization; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostContent", function() { return getEditedPostContent; });
__webpack_require__.d(selectors_namespaceObject, "isPublishingPost", function() { return selectors_isPublishingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPermalinkEditable", function() { return isPermalinkEditable; });
__webpack_require__.d(selectors_namespaceObject, "getPermalink", function() { return getPermalink; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostSlug", function() { return getEditedPostSlug; });
__webpack_require__.d(selectors_namespaceObject, "getPermalinkParts", function() { return getPermalinkParts; });
__webpack_require__.d(selectors_namespaceObject, "isPostLocked", function() { return isPostLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostSavingLocked", function() { return selectors_isPostSavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostAutosavingLocked", function() { return isPostAutosavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostLockTakeover", function() { return isPostLockTakeover; });
__webpack_require__.d(selectors_namespaceObject, "getPostLockUser", function() { return getPostLockUser; });
__webpack_require__.d(selectors_namespaceObject, "getActivePostLock", function() { return getActivePostLock; });
__webpack_require__.d(selectors_namespaceObject, "canUserUseUnfilteredHTML", function() { return selectors_canUserUseUnfilteredHTML; });
__webpack_require__.d(selectors_namespaceObject, "isPublishSidebarEnabled", function() { return selectors_isPublishSidebarEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getEditorBlocks", function() { return getEditorBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionStart", function() { return selectors_getEditorSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionEnd", function() { return selectors_getEditorSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsEditorReady", function() { return selectors_unstableIsEditorReady; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSettings", function() { return selectors_getEditorSettings; });
__webpack_require__.d(selectors_namespaceObject, "getStateBeforeOptimisticTransaction", function() { return getStateBeforeOptimisticTransaction; });
__webpack_require__.d(selectors_namespaceObject, "inSomeHistory", function() { return inSomeHistory; });
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return getBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return selectors_getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "__unstableGetBlockWithoutInnerBlocks", function() { return __unstableGetBlockWithoutInnerBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return getBlockListSettings; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateTypes", function() { return __experimentalGetDefaultTemplateTypes; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateType", function() { return __experimentalGetDefaultTemplateType; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetTemplateInfo", function() { return __experimentalGetTemplateInfo; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setupEditor", function() { return actions_setupEditor; });
__webpack_require__.d(actions_namespaceObject, "__experimentalTearDownEditor", function() { return actions_experimentalTearDownEditor; });
__webpack_require__.d(actions_namespaceObject, "resetPost", function() { return resetPost; });
__webpack_require__.d(actions_namespaceObject, "resetAutosave", function() { return resetAutosave; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateStart", function() { return __experimentalRequestPostUpdateStart; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateFinish", function() { return __experimentalRequestPostUpdateFinish; });
__webpack_require__.d(actions_namespaceObject, "updatePost", function() { return updatePost; });
__webpack_require__.d(actions_namespaceObject, "setupEditorState", function() { return setupEditorState; });
__webpack_require__.d(actions_namespaceObject, "editPost", function() { return actions_editPost; });
__webpack_require__.d(actions_namespaceObject, "savePost", function() { return actions_savePost; });
__webpack_require__.d(actions_namespaceObject, "refreshPost", function() { return refreshPost; });
__webpack_require__.d(actions_namespaceObject, "trashPost", function() { return trashPost; });
__webpack_require__.d(actions_namespaceObject, "autosave", function() { return actions_autosave; });
__webpack_require__.d(actions_namespaceObject, "redo", function() { return actions_redo; });
__webpack_require__.d(actions_namespaceObject, "undo", function() { return actions_undo; });
__webpack_require__.d(actions_namespaceObject, "createUndoLevel", function() { return createUndoLevel; });
__webpack_require__.d(actions_namespaceObject, "updatePostLock", function() { return actions_updatePostLock; });
__webpack_require__.d(actions_namespaceObject, "enablePublishSidebar", function() { return enablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "disablePublishSidebar", function() { return disablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "lockPostSaving", function() { return lockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostSaving", function() { return unlockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "lockPostAutosaving", function() { return lockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostAutosaving", function() { return unlockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "resetEditorBlocks", function() { return actions_resetEditorBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateEditorSettings", function() { return actions_updateEditorSettings; });
__webpack_require__.d(actions_namespaceObject, "resetBlocks", function() { return resetBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveBlocks", function() { return receiveBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateBlock", function() { return updateBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockAttributes", function() { return updateBlockAttributes; });
__webpack_require__.d(actions_namespaceObject, "selectBlock", function() { return actions_selectBlock; });
__webpack_require__.d(actions_namespaceObject, "startMultiSelect", function() { return startMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "stopMultiSelect", function() { return stopMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "multiSelect", function() { return multiSelect; });
__webpack_require__.d(actions_namespaceObject, "clearSelectedBlock", function() { return actions_clearSelectedBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleSelection", function() { return toggleSelection; });
__webpack_require__.d(actions_namespaceObject, "replaceBlocks", function() { return replaceBlocks; });
__webpack_require__.d(actions_namespaceObject, "replaceBlock", function() { return replaceBlock; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksDown", function() { return moveBlocksDown; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksUp", function() { return moveBlocksUp; });
__webpack_require__.d(actions_namespaceObject, "moveBlockToPosition", function() { return moveBlockToPosition; });
__webpack_require__.d(actions_namespaceObject, "insertBlock", function() { return insertBlock; });
__webpack_require__.d(actions_namespaceObject, "insertBlocks", function() { return actions_insertBlocks; });
__webpack_require__.d(actions_namespaceObject, "showInsertionPoint", function() { return showInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "hideInsertionPoint", function() { return hideInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "setTemplateValidity", function() { return setTemplateValidity; });
__webpack_require__.d(actions_namespaceObject, "synchronizeTemplate", function() { return synchronizeTemplate; });
__webpack_require__.d(actions_namespaceObject, "mergeBlocks", function() { return mergeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlocks", function() { return removeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlock", function() { return removeBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockMode", function() { return toggleBlockMode; });
__webpack_require__.d(actions_namespaceObject, "startTyping", function() { return startTyping; });
__webpack_require__.d(actions_namespaceObject, "stopTyping", function() { return stopTyping; });
__webpack_require__.d(actions_namespaceObject, "enterFormattedText", function() { return enterFormattedText; });
__webpack_require__.d(actions_namespaceObject, "exitFormattedText", function() { return exitFormattedText; });
__webpack_require__.d(actions_namespaceObject, "insertDefaultBlock", function() { return actions_insertDefaultBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockListSettings", function() { return updateBlockListSettings; });

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// EXTERNAL MODULE: external ["wp","richText"]
var external_wp_richText_ = __webpack_require__("qRz9");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */

/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

var custom_sources_backwards_compatibility_createWithMetaAttributeSource = function createWithMetaAttributeSource(metaAttributes) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
    return function (_ref) {
      var attributes = _ref.attributes,
          _setAttributes = _ref.setAttributes,
          props = Object(objectWithoutProperties["a" /* default */])(_ref, ["attributes", "setAttributes"]);

      var postType = Object(external_wp_data_["useSelect"])(function (select) {
        return select('core/editor').getCurrentPostType();
      }, []);

      var _useEntityProp = Object(external_wp_coreData_["useEntityProp"])('postType', postType, 'meta'),
          _useEntityProp2 = Object(slicedToArray["a" /* default */])(_useEntityProp, 2),
          meta = _useEntityProp2[0],
          setMeta = _useEntityProp2[1];

      var mergedAttributes = Object(external_wp_element_["useMemo"])(function () {
        return _objectSpread(_objectSpread({}, attributes), Object(external_lodash_["mapValues"])(metaAttributes, function (metaKey) {
          return meta[metaKey];
        }));
      }, [attributes, meta]);
      return Object(external_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({
        attributes: mergedAttributes,
        setAttributes: function setAttributes(nextAttributes) {
          var nextMeta = Object(external_lodash_["mapKeys"])( // Filter to intersection of keys between the updated
          // attributes and those with an associated meta key.
          Object(external_lodash_["pickBy"])(nextAttributes, function (value, key) {
            return metaAttributes[key];
          }), // Rename the keys to the expected meta key name.
          function (value, attributeKey) {
            return metaAttributes[attributeKey];
          });

          if (!Object(external_lodash_["isEmpty"])(nextMeta)) {
            setMeta(nextMeta);
          }

          _setAttributes(nextAttributes);
        }
      }, props));
    };
  }, 'withMetaAttributeSource');
};
/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */


function shimAttributeSource(settings) {
  /** @type {WPMetaAttributeMapping} */
  var metaAttributes = Object(external_lodash_["mapValues"])(Object(external_lodash_["pickBy"])(settings.attributes, {
    source: 'meta'
  }), 'meta');

  if (!Object(external_lodash_["isEmpty"])(metaAttributes)) {
    settings.edit = custom_sources_backwards_compatibility_createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }

  return settings;
}

Object(external_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource); // The above filter will only capture blocks registered after the filter was
// added. There may already be blocks registered by this point, and those must
// be updated to apply the shim.
//
// The following implementation achieves this, albeit with a couple caveats:
// - Only blocks registered on the global store will be modified.
// - The block settings are directly mutated, since there is currently no
//   mechanism to update an existing block registration. This is the reason for
//   `getBlockType` separate from `getBlockTypes`, since the latter returns a
//   _copy_ of the block registration (i.e. the mutation would not affect the
//   actual registered block settings).
//
// `getBlockTypes` or `getBlockType` implementation could change in the future
// in regards to creating settings clones, but the corresponding end-to-end
// tests for meta blocks should cover against any potential regressions.
//
// In the future, we could support updating block settings, at which point this
// implementation could use that mechanism instead.

Object(external_wp_data_["select"])(external_wp_blocks_["store"]).getBlockTypes().map(function (_ref2) {
  var name = _ref2.name;
  return Object(external_wp_data_["select"])(external_wp_blocks_["store"]).getBlockType(name);
}).forEach(shimAttributeSource);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js


/**
 * WordPress dependencies
 */

/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */

/* harmony default export */ var autocompleters_user = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',
  options: function options(search) {
    var payload = '';

    if (search) {
      payload = '?search=' + encodeURIComponent(search);
    }

    return external_wp_apiFetch_default()({
      path: '/wp/v2/users' + payload
    });
  },
  isDebounced: true,
  getOptionKeywords: function getOptionKeywords(user) {
    return [user.slug, user.name];
  },
  getOptionLabel: function getOptionLabel(user) {
    var avatar = user.avatar_urls && user.avatar_urls[24] ? Object(external_wp_element_["createElement"])("img", {
      key: "avatar",
      className: "editor-autocompleters__user-avatar",
      alt: "",
      src: user.avatar_urls[24]
    }) : Object(external_wp_element_["createElement"])("span", {
      className: "editor-autocompleters__no-avatar"
    });
    return [avatar, Object(external_wp_element_["createElement"])("span", {
      key: "name",
      className: "editor-autocompleters__user-name"
    }, user.name), Object(external_wp_element_["createElement"])("span", {
      key: "slug",
      className: "editor-autocompleters__user-slug"
    }, user.slug)];
  },
  getOptionCompletion: function getOptionCompletion(user) {
    return "@".concat(user.slug);
  }
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function setDefaultCompleters() {
  var completers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // Provide copies so filters may directly modify them.
  completers.push(Object(external_lodash_["clone"])(autocompleters_user));
  return completers;
}

Object(external_wp_hooks_["addFilter"])('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__("51Zz");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/defaults.js


function defaults_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function defaults_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { defaults_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { defaults_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

var PREFERENCES_DEFAULTS = {
  insertUsage: {},
  // Should be kept for backward compatibility, see: https://github.com/WordPress/gutenberg/issues/14580.
  isPublishSidebarEnabled: true
};
/**
 * The default post editor settings
 *
 *  allowedBlockTypes  boolean|Array Allowed block types
 *  richEditingEnabled boolean       Whether rich editing is enabled or not
 *  codeEditingEnabled boolean       Whether code editing is enabled or not
 *  enableCustomFields boolean       Whether the WordPress custom fields are enabled or not
 *  autosaveInterval   number        Autosave Interval
 *  availableTemplates array?        The available post templates
 *  disablePostFormats boolean       Whether or not the post formats are disabled
 *  allowedMimeTypes   array?        List of allowed mime types and file extensions
 *  maxUploadFileSize  number        Maximum upload file size
 */

var EDITOR_SETTINGS_DEFAULTS = defaults_objectSpread(defaults_objectSpread({}, external_wp_blockEditor_["SETTINGS_DEFAULTS"]), {}, {
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: false
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/reducer.js



function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === Object(esm_typeof["a" /* default */])(value) && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return Object(external_lodash_["isEqual"])(Object(external_lodash_["keys"])(a), Object(external_lodash_["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function reducer_postId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.id;
  }

  return state;
}
function reducer_postType() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_template() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isValid: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isValid: action.isValid
      });
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                 Current state.
 * @param {Object}  action                Dispatched action.
 *
 * @return {string} Updated state.
 */

function preferences() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PREFERENCES_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ENABLE_PUBLISH_SIDEBAR':
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isPublishSidebarEnabled: true
      });

    case 'DISABLE_PUBLISH_SIDEBAR':
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isPublishSidebarEnabled: false
      });
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function saving() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean} isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLocked: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.lockName, true));

    case 'UNLOCK_POST_SAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.lockName, true));

    case 'UNLOCK_POST_AUTOSAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object} action
 *
 * @return {boolean} Updated state.
 */

function reducer_isReady() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_editorSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EDITOR_SETTINGS_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return reducer_objectSpread(reducer_objectSpread({}, state), action.settings);
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  postId: reducer_postId,
  postType: reducer_postType,
  preferences: preferences,
  saving: saving,
  postLock: postLock,
  template: reducer_template,
  postSavingLock: postSavingLock,
  isReady: reducer_isReady,
  editorSettings: reducer_editorSettings,
  postAutosavingLock: postAutosavingLock
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__("FqII");

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/constants.js
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
var EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

var STORE_NAME = 'core/editor';
var SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
var TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
var PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
var ONE_MINUTE_IN_MS = 60 * 1000;
var AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/url.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Returns the URL of a WPAdmin Page.
 *
 * TODO: This should be moved to a module less specific to the editor.
 *
 * @param {string} page  Page to navigate to.
 * @param {Object} query Query Args.
 *
 * @return {string} WPAdmin URL.
 */

function getWPAdminURL(page, query) {
  return Object(external_wp_url_["addQueryArgs"])(page, query);
}
/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin
 * letters. Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens. Converts remaining string to lowercase. It does not account
 * for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  if (!string) {
    return '';
  }

  return Object(external_lodash_["trim"])(Object(external_lodash_["deburr"])(string).replace(/[\s\./]+/g, '-').replace(/[^\w-]+/g, '').toLowerCase(), '-');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/selectors.js



function selectors_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function selectors_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { selectors_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { selectors_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

var hasEditorUndo = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasUndo();
  };
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

var hasEditorRedo = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasRedo();
  };
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function selectors_isEditedPostNew(state) {
  return selectors_getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  var edits = selectors_getPostEdits(state);
  return 'blocks' in edits || // `edits` is intended to contain only values which are different from
  // the saved post, so the mere presence of a property is an indicator
  // that the value is different than what is known to be saved. While
  // content in Visual mode is represented by the blocks state, in Text
  // mode it is tracked by `edits.content`.
  'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

var selectors_isEditedPostDirty = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    // Edits should contain only fields which differ from the saved post (reset
    // at initial load and save complete). Thus, a non-empty edits state can be
    // inferred to contain unsaved values.
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);

    if (select('core').hasEditsForEntityRecord('postType', postType, postId)) {
      return true;
    }

    return false;
  };
});
/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */

var selectors_hasNonPostEntityChanges = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var dirtyEntityRecords = select('core').__experimentalGetDirtyEntityRecords();

    var _getCurrentPost = selectors_getCurrentPost(state),
        type = _getCurrentPost.type,
        id = _getCurrentPost.id;

    return Object(external_lodash_["some"])(dirtyEntityRecords, function (entityRecord) {
      return entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id;
    });
  };
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function selectors_isCleanNewPost(state) {
  return !selectors_isEditedPostDirty(state) && selectors_isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

var selectors_getCurrentPost = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = selectors_getCurrentPostId(state);
    var postType = selectors_getCurrentPostType(state);
    var post = select('core').getRawEntityRecord('postType', postType, postId);

    if (post) {
      return post;
    } // This exists for compatibility with the previous selector behavior
    // which would guarantee an object return based on the editor reducer's
    // default empty object state.


    return EMPTY_OBJECT;
  };
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function selectors_getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function selectors_getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  return Object(external_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'version-history', 0, 'count'], 0);
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  return Object(external_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'predecessor-version', 0, 'id'], null);
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

var selectors_getPostEdits = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return select('core').getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
  };
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @deprecated since Gutenberg 6.5.0.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

var getReferenceByDistinctEdits = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function ()
  /* state */
  {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getReferenceByDistinctEdits`", {
      alternative: "`wp.data.select( 'core' ).getReferenceByDistinctEdits`"
    });
    return select('core').getReferenceByDistinctEdits();
  };
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function selectors_getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return selectors_getCurrentPostType(state);

    case 'id':
      return selectors_getCurrentPostId(state);

    default:
      var post = selectors_getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return getPostRawValue(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

var getNestedEditedPostProperty = function getNestedEditedPostProperty(state, attributeName) {
  var edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  }

  return selectors_objectSpread(selectors_objectSpread({}, selectors_getCurrentPostAttribute(state, attributeName)), edits[attributeName]);
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function selectors_getEditedPostAttribute(state, attributeName) {
  // Special cases
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  var edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

var getAutosaveAttribute = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state, attributeName) {
    if (!Object(external_lodash_["includes"])(AUTOSAVE_PROPERTIES, attributeName) && attributeName !== 'preview_link') {
      return;
    }

    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);

    if (autosave) {
      return getPostRawValue(autosave[attributeName]);
    }
  };
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function selectors_getEditedPostVisibility(state) {
  var status = selectors_getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  var password = selectors_getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return selectors_getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isCurrentPostPublished(state, currentPost) {
  var post = currentPost || selectors_getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !Object(external_wp_date_["isInTheFuture"])(new Date(Number(Object(external_wp_date_["getDate"])(post.date)) - ONE_MINUTE_IN_MS));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function selectors_isCurrentPostScheduled(state) {
  return selectors_getCurrentPost(state).status === 'future' && !selectors_isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function selectors_isEditedPostPublishable(state) {
  var post = selectors_getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`)

  return selectors_isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function selectors_isEditedPostSaveable(state) {
  if (selectors_isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184


  return !!selectors_getEditedPostAttribute(state, 'title') || !!selectors_getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state) || external_wp_element_["Platform"].OS === 'native';
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  var blocks = getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    var blockName = blocks[0].name;

    if (blockName !== Object(external_wp_blocks_["getDefaultBlockName"])() && blockName !== Object(external_wp_blocks_["getFreeformContentHandlerName"])()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

var selectors_isEditedPostAutosaveable = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
    if (!selectors_isEditedPostSaveable(state)) {
      return false;
    } // A post is not autosavable when there is a post autosave lock.


    if (isPostAutosavingLocked(state)) {
      return false;
    }

    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var hasFetchedAutosave = select('core').hasFetchedAutosaves(postType, postId);
    var currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']); // Disable reason - this line causes the side-effect of fetching the autosave
    // via a resolver, moving below the return would result in the autosave never
    // being fetched.
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return

    var autosave = select('core').getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
    // unable to determine if the post is autosaveable, so return false.

    if (!hasFetchedAutosave) {
      return false;
    } // If we don't already have an autosave, the post is autosaveable.


    if (!autosave) {
      return true;
    } // To avoid an expensive content serialization, use the content dirtiness
    // flag in place of content field comparison against the known autosave.
    // This is not strictly accurate, and relies on a tolerance toward autosave
    // request failures for unnecessary saves.


    if (hasChangedContent(state)) {
      return true;
    } // If the title or excerpt has changed, the post is autosaveable.


    return ['title', 'excerpt'].some(function (field) {
      return getPostRawValue(autosave[field]) !== selectors_getEditedPostAttribute(state, field);
    });
  };
});
/**
 * Returns the current autosave, or null if one is not set (i.e. if the post
 * has yet to be autosaved, or has been saved or published since the last
 * autosave).
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} state Editor state.
 *
 * @return {?Object} Current autosave, if exists.
 */

var getAutosave = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getAutosave()`", {
      alternative: "`wp.data.select( 'core' ).getAutosave( postType, postId, userId )`",
      plugin: 'Gutenberg'
    });
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);
    return Object(external_lodash_["mapValues"])(Object(external_lodash_["pick"])(autosave, AUTOSAVE_PROPERTIES), getPostRawValue);
  };
});
/**
 * Returns the true if there is an existing autosave, otherwise false.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 *             from the '@wordpress/core-data' package and check for a truthy value.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there is an existing autosave.
 */

var hasAutosave = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).hasAutosave()`", {
      alternative: "`!! wp.data.select( 'core' ).getAutosave( postType, postId, userId )`",
      plugin: 'Gutenberg'
    });
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    return !!select('core').getAutosave(postType, postId, currentUserId);
  };
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isEditedPostBeingScheduled(state) {
  var date = selectors_getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency)

  var checkedDate = new Date(Number(Object(external_wp_date_["getDate"])(date)) - ONE_MINUTE_IN_MS);
  return Object(external_wp_date_["isInTheFuture"])(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  var date = selectors_getEditedPostAttribute(state, 'date');
  var modified = selectors_getEditedPostAttribute(state, 'modified'); // This should be the status of the persisted post
  // It shouldn't use the "edited" status otherwise it breaks the
  // infered post data floating status
  // See https://github.com/WordPress/gutenberg/issues/28083

  var status = selectors_getCurrentPost(state).status;

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified || date === null;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

var selectors_isSavingPost = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return select('core').isSavingEntityRecord('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

var didPostSaveRequestSucceed = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return !select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

var didPostSaveRequestFail = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return !!select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function selectors_isAutosavingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!Object(external_lodash_["get"])(state.saving, ['options', 'isAutosave']);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!state.saving.options.isPreview;
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Preview Link.
 */

function selectors_getEditedPostPreviewLink(state) {
  if (state.saving.pending || selectors_isSavingPost(state)) {
    return;
  }

  var previewLink = getAutosaveAttribute(state, 'preview_link');

  if (!previewLink) {
    previewLink = selectors_getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = Object(external_wp_url_["addQueryArgs"])(previewLink, {
        preview: true
      });
    }
  }

  var featuredImageId = selectors_getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return Object(external_wp_url_["addQueryArgs"])(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function selectors_getSuggestedPostFormat(state) {
  var blocks = getEditorBlocks(state);
  if (blocks.length > 2) return null;
  var name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name; // check for core/embed `video` and `audio` eligible suggestions

    if (name === 'core/embed') {
      var _blocks$0$attributes;

      var provider = (_blocks$0$attributes = blocks[0].attributes) === null || _blocks$0$attributes === void 0 ? void 0 : _blocks$0$attributes.providerNameSlug;

      if (['youtube', 'vimeo'].includes(provider)) {
        name = 'core/video';
      } else if (['spotify', 'soundcloud'].includes(provider)) {
        name = 'core/audio';
      }
    }
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2 && blocks[1].name === 'core/paragraph') {
    name = blocks[0].name;
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
      return 'video';

    case 'core/audio':
      return 'audio';

    default:
      return null;
  }
}
/**
 * Returns a set of blocks which are to be used in consideration of the post's
 * generated save content.
 *
 * @deprecated since Gutenberg 6.2.0.
 *
 * @param {Object} state Editor state.
 *
 * @return {WPBlock[]} Filtered set of blocks for save.
 */

function getBlocksForSerialization(state) {
  external_wp_deprecated_default()('`core/editor` getBlocksForSerialization selector', {
    plugin: 'Gutenberg',
    alternative: 'getEditorBlocks',
    hint: 'Blocks serialization pre-processing occurs at save time'
  });
  var blocks = state.editor.present.blocks.value; // WARNING: Any changes to the logic of this function should be verified
  // against the implementation of isEditedPostEmpty, which bypasses this
  // function for performance' sake, in an assumption of this current logic
  // being irrelevant to the optimized condition of emptiness.
  // A single unmodified default block is assumed to be equivalent to an
  // empty post.

  var isSingleUnmodifiedDefaultBlock = blocks.length === 1 && Object(external_wp_blocks_["isUnmodifiedDefaultBlock"])(blocks[0]);

  if (isSingleUnmodifiedDefaultBlock) {
    return [];
  }

  return blocks;
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

var getEditedPostContent = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = selectors_getCurrentPostId(state);
    var postType = selectors_getCurrentPostType(state);
    var record = select('core').getEditedEntityRecord('postType', postType, postId);

    if (record) {
      if (typeof record.content === 'function') {
        return record.content(record);
      } else if (record.blocks) {
        return Object(external_wp_blocks_["__unstableSerializeAndClean"])(record.blocks);
      } else if (record.content) {
        return record.content;
      }
    }

    return '';
  };
});
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function selectors_isPublishingPost(state) {
  return selectors_isSavingPost(state) && !selectors_isCurrentPostPublished(state) && selectors_getEditedPostAttribute(state, 'status') === 'publish';
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function isPermalinkEditable(state) {
  var permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');
  return PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  var permalinkParts = getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  var prefix = permalinkParts.prefix,
      postName = permalinkParts.postName,
      suffix = permalinkParts.suffix;

  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the slug for the post being edited, preferring a manually edited
 * value if one exists, then a sanitized version of the current post title, and
 * finally the post ID.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} The current slug to be displayed in the editor
 */

function getEditedPostSlug(state) {
  return selectors_getEditedPostAttribute(state, 'slug') || cleanForSlug(selectors_getEditedPostAttribute(state, 'title')) || selectors_getCurrentPostId(state);
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function getPermalinkParts(state) {
  var permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  var postName = selectors_getEditedPostAttribute(state, 'slug') || selectors_getEditedPostAttribute(state, 'generated_slug');

  var _permalinkTemplate$sp = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX),
      _permalinkTemplate$sp2 = Object(slicedToArray["a" /* default */])(_permalinkTemplate$sp, 2),
      prefix = _permalinkTemplate$sp2[0],
      suffix = _permalinkTemplate$sp2[1];

  return {
    prefix: prefix,
    postName: postName,
    suffix: suffix
  };
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function selectors_canUserUseUnfilteredHTML(state) {
  return Object(external_lodash_["has"])(selectors_getCurrentPost(state), ['_links', 'wp:action-unfiltered-html']);
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

function selectors_isPublishSidebarEnabled(state) {
  if (state.preferences.hasOwnProperty('isPublishSidebarEnabled')) {
    return state.preferences.isPublishSidebarEnabled;
  }

  return PREFERENCES_DEFAULTS.isPublishSidebarEnabled;
}
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function getEditorBlocks(state) {
  return selectors_getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 */

function selectors_getEditorSelectionStart(state) {
  return selectors_getEditedPostAttribute(state, 'selectionStart');
}
/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */

function selectors_getEditorSelectionEnd(state) {
  return selectors_getEditedPostAttribute(state, 'selectionEnd');
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function selectors_unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function selectors_getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function getStateBeforeOptimisticTransaction() {
  external_wp_deprecated_default()("select('core/editor').getStateBeforeOptimisticTransaction", {
    hint: 'No state history is kept on this store anymore'
  });
  return null;
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function inSomeHistory() {
  external_wp_deprecated_default()("select('core/editor').inSomeHistory", {
    hint: 'No state history is kept on this store anymore'
  });
  return false;
}

function getBlockEditorSelector(name) {
  return Object(external_wp_data_["createRegistrySelector"])(function (select) {
    return function (state) {
      var _select;

      external_wp_deprecated_default()("`wp.data.select( 'core/editor' )." + name + '`', {
        alternative: "`wp.data.select( 'core/block-editor' )." + name + '`'
      });

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_select = select('core/block-editor'))[name].apply(_select, args);
    };
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


var getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

var isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

var getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

var getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

var selectors_getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see __unstableGetBlockWithoutInnerBlocks in core/block-editor store.
 */

var __unstableGetBlockWithoutInnerBlocks = getBlockEditorSelector('__unstableGetBlockWithoutInnerBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

var getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

var getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

var getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

var getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

var getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

var getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

var getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

var getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

var hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

var getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

var getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

var getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

var getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

var getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

var getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

var getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

var getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

var getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

var getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

var getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

var getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

var isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

var isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

var isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

var getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

var getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

var getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

var getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

var isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

var hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

var isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

var hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

var isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

var isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

var getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

var isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

var isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

var getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

var isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

var isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

var getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

var getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

var canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

var getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

var hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

var getBlockListSettings = getBlockEditorSelector('getBlockListSettings');
/**
 * Returns the default template types.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The template types.
 */

function __experimentalGetDefaultTemplateTypes(state) {
  var _getEditorSettings;

  return (_getEditorSettings = selectors_getEditorSettings(state)) === null || _getEditorSettings === void 0 ? void 0 : _getEditorSettings.defaultTemplateTypes;
}
/**
 * Returns a default template type searched by slug.
 *
 * @param {Object} state Global application state.
 * @param {string} slug The template type slug.
 *
 * @return {Object} The template type.
 */

var __experimentalGetDefaultTemplateType = Object(rememo["a" /* default */])(function (state, slug) {
  return Object(external_lodash_["find"])(__experimentalGetDefaultTemplateTypes(state), {
    slug: slug
  }) || {};
}, function (state, slug) {
  return [__experimentalGetDefaultTemplateTypes(state), slug];
});
/**
 * Given a template entity, return information about it which is ready to be
 * rendered, such as the title and description.
 *
 * @param {Object} state Global application state.
 * @param {Object} template The template for which we need information.
 * @return {Object} Information about the template, including title and description.
 */

function __experimentalGetTemplateInfo(state, template) {
  if (!template) {
    return {};
  }

  var excerpt = template.excerpt,
      slug = template.slug,
      title = template.title;

  var _experimentalGetDefa = __experimentalGetDefaultTemplateType(state, slug),
      defaultTitle = _experimentalGetDefa.title,
      defaultDescription = _experimentalGetDefa.description;

  var templateTitle = Object(external_lodash_["isString"])(title) ? title : title === null || title === void 0 ? void 0 : title.rendered;
  var templateDescription = Object(external_lodash_["isString"])(excerpt) ? excerpt : excerpt === null || excerpt === void 0 ? void 0 : excerpt.raw;
  return {
    title: templateTitle && templateTitle !== slug ? templateTitle : defaultTitle || slug,
    description: templateDescription || defaultDescription
  };
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__("dvlR");
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__("onLe");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  var previousPost = data.previousPost,
      post = data.post,
      postType = data.postType; // Autosaves are neither shown a notice nor redirected.

  if (Object(external_lodash_["get"])(data.options, ['isAutosave'])) {
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = Object(external_lodash_["includes"])(publishStatus, previousPost.status);
  var willPublish = Object(external_lodash_["includes"])(publishStatus, post.status);
  var noticeMessage;
  var shouldShowLink = Object(external_lodash_["get"])(postType, ['viewable'], false);

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = null;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice
    noticeMessage = postType.labels.item_updated;
  }

  if (noticeMessage) {
    var actions = [];

    if (shouldShowLink) {
      actions.push({
        label: postType.labels.view_item,
        url: post.link
      });
    }

    return [noticeMessage, {
      id: SAVE_POST_NOTICE_ID,
      type: 'snackbar',
      actions: actions
    }];
  }

  return [];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  var post = data.post,
      edits = data.edits,
      error = data.error;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message

  var messages = {
    publish: Object(external_wp_i18n_["__"])('Publishing failed.'),
    private: Object(external_wp_i18n_["__"])('Publishing failed.'),
    future: Object(external_wp_i18n_["__"])('Scheduling failed.')
  };
  var noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : Object(external_wp_i18n_["__"])('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }

  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : Object(external_wp_i18n_["__"])('Trashing failed'), {
    id: TRASH_POST_NOTICE_ID
  }];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/actions.js





function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_setupEditor),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resetAutosave),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_editPost),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_savePost),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(refreshPost),
    _marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(trashPost),
    _marked7 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_autosave),
    _marked8 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_redo),
    _marked9 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_undo),
    _marked10 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_resetEditorBlocks);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post      Post object.
 * @param {Object} edits     Initial edited attributes object.
 * @param {Array?} template  Block Template.
 */

function actions_setupEditor(post, edits, template) {
  var content, blocks, isNewPost;
  return external_regeneratorRuntime_default.a.wrap(function setupEditor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // In order to ensure maximum of a single parse during setup, edits are
          // included as part of editor setup action. Assume edited content as
          // canonical if provided, falling back to post.
          if (Object(external_lodash_["has"])(edits, ['content'])) {
            content = edits.content;
          } else {
            content = post.content.raw;
          }

          blocks = Object(external_wp_blocks_["parse"])(content); // Apply a template for new posts only, if exists.

          isNewPost = post.status === 'auto-draft';

          if (isNewPost && template) {
            blocks = Object(external_wp_blocks_["synchronizeBlocksWithTemplate"])(blocks, template);
          }

          _context.next = 6;
          return resetPost(post);

        case 6:
          _context.next = 8;
          return {
            type: 'SETUP_EDITOR',
            post: post,
            edits: edits,
            template: template
          };

        case 8:
          _context.next = 10;
          return actions_resetEditorBlocks(blocks, {
            __unstableShouldCreateUndoLevel: false
          });

        case 10:
          _context.next = 12;
          return setupEditorState(post);

        case 12:
          if (!(edits && Object.keys(edits).some(function (key) {
            return edits[key] !== (Object(external_lodash_["has"])(post, [key, 'raw']) ? post[key].raw : post[key]);
          }))) {
            _context.next = 15;
            break;
          }

          _context.next = 15;
          return actions_editPost(edits);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function actions_experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function resetPost(post) {
  return {
    type: 'RESET_POST',
    post: post
  };
}
/**
 * Returns an action object used in signalling that the latest autosave of the
 * post has been received, by initialization or autosave.
 *
 * @deprecated since 5.6. Callers should use the `receiveAutosaves( postId, autosave )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} newAutosave Autosave post object.
 *
 * @return {Object} Action object.
 */

function resetAutosave(newAutosave) {
  var postId;
  return external_regeneratorRuntime_default.a.wrap(function resetAutosave$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          external_wp_deprecated_default()('resetAutosave action (`core/editor` store)', {
            alternative: 'receiveAutosaves action (`core` store)',
            plugin: 'Gutenberg'
          });
          _context2.next = 3;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostId');

        case 3:
          postId = _context2.sent;
          _context2.next = 6;
          return external_wp_data_["controls"].dispatch('core', 'receiveAutosaves', postId, newAutosave);

        case 6:
          return _context2.abrupt("return", {
            type: '__INERT__'
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action for dispatching that a post update request has started.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateStart() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_START',
    options: options
  };
}
/**
 * Action for dispatching that a post update request has finished.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateFinish() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_FINISH',
    options: options
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @return {Object} Action object.
 * @deprecated since Gutenberg 9.7.0.
 */

function updatePost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).updatePost", {
    alternative: 'User the core entitires store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post   Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post: post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 *
 * @yield {Object} Action object or control.
 */

function actions_editPost(edits, options) {
  var _yield$controls$selec, id, type;

  return external_regeneratorRuntime_default.a.wrap(function editPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 2:
          _yield$controls$selec = _context3.sent;
          id = _yield$controls$selec.id;
          type = _yield$controls$selec.type;
          _context3.next = 7;
          return external_wp_data_["controls"].dispatch('core', 'editEntityRecord', 'postType', type, id, edits, options);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Action generator for saving the current post in the editor.
 *
 * @param {Object} options
 */

function actions_savePost() {
  var options,
      edits,
      previousRecord,
      error,
      args,
      updatedRecord,
      _args4,
      _args5 = arguments;

  return external_regeneratorRuntime_default.a.wrap(function savePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
          _context4.next = 3;
          return external_wp_data_["controls"].select(STORE_NAME, 'isEditedPostSaveable');

        case 3:
          if (_context4.sent) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return");

        case 5:
          _context4.next = 7;
          return external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostContent');

        case 7:
          _context4.t0 = _context4.sent;
          edits = {
            content: _context4.t0
          };

          if (options.isAutosave) {
            _context4.next = 12;
            break;
          }

          _context4.next = 12;
          return external_wp_data_["controls"].dispatch(STORE_NAME, 'editPost', edits, {
            undoIgnore: true
          });

        case 12:
          _context4.next = 14;
          return __experimentalRequestPostUpdateStart(options);

        case 14:
          _context4.next = 16;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 16:
          previousRecord = _context4.sent;
          _context4.t1 = actions_objectSpread;
          _context4.t2 = actions_objectSpread;
          _context4.t3 = {
            id: previousRecord.id
          };
          _context4.next = 22;
          return external_wp_data_["controls"].select('core', 'getEntityRecordNonTransientEdits', 'postType', previousRecord.type, previousRecord.id);

        case 22:
          _context4.t4 = _context4.sent;
          _context4.t5 = (0, _context4.t2)(_context4.t3, _context4.t4);
          _context4.t6 = edits;
          edits = (0, _context4.t1)(_context4.t5, _context4.t6);
          _context4.next = 28;
          return external_wp_data_["controls"].dispatch('core', 'saveEntityRecord', 'postType', previousRecord.type, edits, options);

        case 28:
          _context4.next = 30;
          return __experimentalRequestPostUpdateFinish(options);

        case 30:
          _context4.next = 32;
          return external_wp_data_["controls"].select('core', 'getLastEntitySaveError', 'postType', previousRecord.type, previousRecord.id);

        case 32:
          error = _context4.sent;

          if (!error) {
            _context4.next = 40;
            break;
          }

          args = getNotificationArgumentsForSaveFail({
            post: previousRecord,
            edits: edits,
            error: error
          });

          if (!args.length) {
            _context4.next = 38;
            break;
          }

          _context4.next = 38;
          return external_wp_data_["controls"].dispatch.apply(external_wp_data_["controls"], [external_wp_notices_["store"], 'createErrorNotice'].concat(Object(toConsumableArray["a" /* default */])(args)));

        case 38:
          _context4.next = 58;
          break;

        case 40:
          _context4.next = 42;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 42:
          updatedRecord = _context4.sent;
          _context4.t7 = getNotificationArgumentsForSaveSuccess;
          _context4.t8 = previousRecord;
          _context4.t9 = updatedRecord;
          _context4.next = 48;
          return external_wp_data_["controls"].resolveSelect('core', 'getPostType', updatedRecord.type);

        case 48:
          _context4.t10 = _context4.sent;
          _context4.t11 = options;
          _context4.t12 = {
            previousPost: _context4.t8,
            post: _context4.t9,
            postType: _context4.t10,
            options: _context4.t11
          };
          _args4 = (0, _context4.t7)(_context4.t12);

          if (!_args4.length) {
            _context4.next = 55;
            break;
          }

          _context4.next = 55;
          return external_wp_data_["controls"].dispatch.apply(external_wp_data_["controls"], [external_wp_notices_["store"], 'createSuccessNotice'].concat(Object(toConsumableArray["a" /* default */])(_args4)));

        case 55:
          if (options.isAutosave) {
            _context4.next = 58;
            break;
          }

          _context4.next = 58;
          return external_wp_data_["controls"].dispatch('core/block-editor', '__unstableMarkLastChangeAsPersistent');

        case 58:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Action generator for handling refreshing the current post.
 */

function refreshPost() {
  var post, postTypeSlug, postType, newPost;
  return external_regeneratorRuntime_default.a.wrap(function refreshPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 2:
          post = _context5.sent;
          _context5.next = 5;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostType');

        case 5:
          postTypeSlug = _context5.sent;
          _context5.next = 8;
          return external_wp_data_["controls"].resolveSelect('core', 'getPostType', postTypeSlug);

        case 8:
          postType = _context5.sent;
          _context5.next = 11;
          return Object(external_wp_dataControls_["apiFetch"])({
            // Timestamp arg allows caller to bypass browser caching, which is
            // expected for this specific function.
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id) + "?context=edit&_timestamp=".concat(Date.now())
          });

        case 11:
          newPost = _context5.sent;
          _context5.next = 14;
          return external_wp_data_["controls"].dispatch(STORE_NAME, 'resetPost', newPost);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Action generator for trashing the current post in the editor.
 */

function trashPost() {
  var postTypeSlug, postType, post;
  return external_regeneratorRuntime_default.a.wrap(function trashPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostType');

        case 2:
          postTypeSlug = _context6.sent;
          _context6.next = 5;
          return external_wp_data_["controls"].resolveSelect('core', 'getPostType', postTypeSlug);

        case 5:
          postType = _context6.sent;
          _context6.next = 8;
          return external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'removeNotice', TRASH_POST_NOTICE_ID);

        case 8:
          _context6.prev = 8;
          _context6.next = 11;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 11:
          post = _context6.sent;
          _context6.next = 14;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id),
            method: 'DELETE'
          });

        case 14:
          _context6.next = 16;
          return external_wp_data_["controls"].dispatch(STORE_NAME, 'savePost');

        case 16:
          _context6.next = 22;
          break;

        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](8);
          _context6.next = 22;
          return external_wp_data_["controls"].dispatch.apply(external_wp_data_["controls"], [external_wp_notices_["store"], 'createErrorNotice'].concat(Object(toConsumableArray["a" /* default */])(getNotificationArgumentsForTrashFail({
            error: _context6.t0
          }))));

        case 22:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[8, 18]]);
}
/**
 * Action generator used in signalling that the post should autosave.  This
 * includes server-side autosaving (default) and client-side (a.k.a. local)
 * autosaving (e.g. on the Web, the post might be committed to Session
 * Storage).
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

function actions_autosave() {
  var _ref,
      _ref$local,
      local,
      options,
      post,
      isPostNew,
      title,
      content,
      excerpt,
      _args8 = arguments;

  return external_regeneratorRuntime_default.a.wrap(function autosave$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _ref = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {}, _ref$local = _ref.local, local = _ref$local === void 0 ? false : _ref$local, options = Object(objectWithoutProperties["a" /* default */])(_ref, ["local"]);

          if (!local) {
            _context7.next = 21;
            break;
          }

          _context7.next = 4;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 4:
          post = _context7.sent;
          _context7.next = 7;
          return external_wp_data_["controls"].select(STORE_NAME, 'isEditedPostNew');

        case 7:
          isPostNew = _context7.sent;
          _context7.next = 10;
          return external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'title');

        case 10:
          title = _context7.sent;
          _context7.next = 13;
          return external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'content');

        case 13:
          content = _context7.sent;
          _context7.next = 16;
          return external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'excerpt');

        case 16:
          excerpt = _context7.sent;
          _context7.next = 19;
          return {
            type: 'LOCAL_AUTOSAVE_SET',
            postId: post.id,
            isPostNew: isPostNew,
            title: title,
            content: content,
            excerpt: excerpt
          };

        case 19:
          _context7.next = 23;
          break;

        case 21:
          _context7.next = 23;
          return external_wp_data_["controls"].dispatch(STORE_NAME, 'savePost', actions_objectSpread({
            isAutosave: true
          }, options));

        case 23:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Returns an action object used in signalling that undo history should
 * restore last popped state.
 *
 * @yield {Object} Action object.
 */

function actions_redo() {
  return external_regeneratorRuntime_default.a.wrap(function redo$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return external_wp_data_["controls"].dispatch('core', 'redo');

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
/**
 * Returns an action object used in signalling that undo history should pop.
 *
 * @yield {Object} Action object.
 */

function actions_undo() {
  return external_regeneratorRuntime_default.a.wrap(function undo$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return external_wp_data_["controls"].dispatch('core', 'undo');

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
/**
 * Returns an action object used in signalling that undo history record should
 * be created.
 *
 * @return {Object} Action object.
 */

function createUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Returns an action object used to lock the editor.
 *
 * @param {Object}  lock Details about the post lock status, user, and nonce.
 *
 * @return {Object} Action object.
 */

function actions_updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock: lock
  };
}
/**
 * Returns an action object used in signalling that the user has enabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function enablePublishSidebar() {
  return {
    type: 'ENABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user has disabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function disablePublishSidebar() {
  return {
    type: 'DISABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to signal that post saving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post saving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 *
 * @yield {Object} Action object
 */

function actions_resetEditorBlocks(blocks) {
  var options,
      __unstableShouldCreateUndoLevel,
      selectionStart,
      selectionEnd,
      edits,
      _yield$controls$selec2,
      id,
      type,
      noChange,
      _args11 = arguments;

  return external_regeneratorRuntime_default.a.wrap(function resetEditorBlocks$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
          __unstableShouldCreateUndoLevel = options.__unstableShouldCreateUndoLevel, selectionStart = options.selectionStart, selectionEnd = options.selectionEnd;
          edits = {
            blocks: blocks,
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
          };

          if (!(__unstableShouldCreateUndoLevel !== false)) {
            _context10.next = 19;
            break;
          }

          _context10.next = 6;
          return external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');

        case 6:
          _yield$controls$selec2 = _context10.sent;
          id = _yield$controls$selec2.id;
          type = _yield$controls$selec2.type;
          _context10.next = 11;
          return external_wp_data_["controls"].select('core', 'getEditedEntityRecord', 'postType', type, id);

        case 11:
          _context10.t0 = _context10.sent.blocks;
          _context10.t1 = edits.blocks;
          noChange = _context10.t0 === _context10.t1;

          if (!noChange) {
            _context10.next = 18;
            break;
          }

          _context10.next = 17;
          return external_wp_data_["controls"].dispatch('core', '__unstableCreateUndoLevel', 'postType', type, id);

        case 17:
          return _context10.abrupt("return", _context10.sent);

        case 18:
          // We create a new function here on every persistent edit
          // to make sure the edit makes the post dirty and creates
          // a new undo level.
          edits.content = function (_ref2) {
            var _ref2$blocks = _ref2.blocks,
                blocksForSerialization = _ref2$blocks === void 0 ? [] : _ref2$blocks;
            return Object(external_wp_blocks_["__unstableSerializeAndClean"])(blocksForSerialization);
          };

        case 19:
          return _context10.delegateYield(actions_editPost(edits), "t2", 20);

        case 20:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function actions_updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings: settings
  };
}
/**
 * Backward compatibility
 */

var actions_getBlockEditorAction = function getBlockEditorAction(name) {
  return /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
    var _len,
        args,
        _key,
        _args12 = arguments;

    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            external_wp_deprecated_default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
              alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`'
            });

            for (_len = _args12.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args12[_key];
            }

            _context11.next = 4;
            return external_wp_data_["controls"].dispatch.apply(external_wp_data_["controls"], ['core/block-editor', name].concat(args));

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee);
  });
};
/**
 * @see resetBlocks in core/block-editor store.
 */


var resetBlocks = actions_getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

var receiveBlocks = actions_getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

var updateBlock = actions_getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

var updateBlockAttributes = actions_getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

var actions_selectBlock = actions_getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

var startMultiSelect = actions_getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

var stopMultiSelect = actions_getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

var multiSelect = actions_getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

var actions_clearSelectedBlock = actions_getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

var toggleSelection = actions_getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

var replaceBlocks = actions_getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

var replaceBlock = actions_getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

var moveBlocksDown = actions_getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

var moveBlocksUp = actions_getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

var moveBlockToPosition = actions_getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

var insertBlock = actions_getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

var actions_insertBlocks = actions_getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

var showInsertionPoint = actions_getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

var hideInsertionPoint = actions_getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

var setTemplateValidity = actions_getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

var synchronizeTemplate = actions_getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

var mergeBlocks = actions_getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

var removeBlocks = actions_getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

var removeBlock = actions_getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

var toggleBlockMode = actions_getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

var startTyping = actions_getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

var stopTyping = actions_getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

var enterFormattedText = actions_getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

var exitFormattedText = actions_getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

var actions_insertDefaultBlock = actions_getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

var updateBlockListSettings = actions_getBlockEditorAction('updateBlockListSettings');

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/controls.js
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string}  postId     Post ID.
 * @param {boolean} isPostNew  Whether post new.
 * @return {string}            sessionStorage key
 */
function postKey(postId, isPostNew) {
  return "wp-autosave-block-editor-post-".concat(isPostNew ? 'auto-draft' : postId);
}

function localAutosaveGet(postId, isPostNew) {
  return window.sessionStorage.getItem(postKey(postId, isPostNew));
}
function localAutosaveSet(postId, isPostNew, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId, isPostNew), JSON.stringify({
    post_title: title,
    content: content,
    excerpt: excerpt
  }));
}
function localAutosaveClear(postId, isPostNew) {
  window.sessionStorage.removeItem(postKey(postId, isPostNew));
}
var controls = {
  LOCAL_AUTOSAVE_SET: function LOCAL_AUTOSAVE_SET(_ref) {
    var postId = _ref.postId,
        isPostNew = _ref.isPostNew,
        title = _ref.title,
        content = _ref.content,
        excerpt = _ref.excerpt;
    localAutosaveSet(postId, isPostNew, title, content, excerpt);
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/index.js


function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: store_objectSpread(store_objectSpread({}, external_wp_dataControls_["controls"]), store_controls)
};
/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

var store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, store_objectSpread(store_objectSpread({}, storeConfig), {}, {
  persist: ['preferences']
})); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, store_objectSpread(store_objectSpread({}, storeConfig), {}, {
  persist: ['preferences']
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("md7G");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



/**
 * AutosaveMonitor invokes `props.autosave()` within at most `interval` seconds after an unsaved change is detected.
 *
 * The logic is straightforward: a check is performed every `props.interval` seconds. If any changes are detected, `props.autosave()` is called.
 * The time between the change and the autosave varies but is no larger than `props.interval` seconds. Refer to the code below for more details, such as
 * the specific way of detecting changes.
 *
 * There are two caveats:
 * * If `props.isAutosaveable` happens to be false at a time of checking for changes, the check is retried every second.
 * * The timer may be disabled by setting `props.disableIntervalChecks` to `true`. In that mode, any change will immediately trigger `props.autosave()`.
 */

var autosave_monitor_AutosaveMonitor = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(AutosaveMonitor, _Component);

  var _super = _createSuper(AutosaveMonitor);

  function AutosaveMonitor(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AutosaveMonitor);

    _this = _super.call(this, props);
    _this.needsAutosave = !!(props.isDirty && props.isAutosaveable);
    return _this;
  }

  Object(createClass["a" /* default */])(AutosaveMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.disableIntervalChecks) {
        this.setAutosaveTimer();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.disableIntervalChecks) {
        if (this.props.editsReference !== prevProps.editsReference) {
          this.props.autosave();
        }

        return;
      }

      if (!this.props.isDirty) {
        this.needsAutosave = false;
        return;
      }

      if (this.props.isAutosaving && !prevProps.isAutosaving) {
        this.needsAutosave = false;
        return;
      }

      if (this.props.editsReference !== prevProps.editsReference) {
        this.needsAutosave = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timerId);
    }
  }, {
    key: "setAutosaveTimer",
    value: function setAutosaveTimer() {
      var _this2 = this;

      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.interval * 1000;
      this.timerId = setTimeout(function () {
        _this2.autosaveTimerHandler();
      }, timeout);
    }
  }, {
    key: "autosaveTimerHandler",
    value: function autosaveTimerHandler() {
      if (!this.props.isAutosaveable) {
        this.setAutosaveTimer(1000);
        return;
      }

      if (this.needsAutosave) {
        this.needsAutosave = false;
        this.props.autosave();
      }

      this.setAutosaveTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AutosaveMonitor;
}(external_wp_element_["Component"]);
/* harmony default export */ var autosave_monitor = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getReferenceByDistinctEdits = _select.getReferenceByDistinctEdits;

  var _select2 = select('core/editor'),
      isEditedPostDirty = _select2.isEditedPostDirty,
      isEditedPostAutosaveable = _select2.isEditedPostAutosaveable,
      isAutosavingPost = _select2.isAutosavingPost,
      getEditorSettings = _select2.getEditorSettings;

  var _ownProps$interval = ownProps.interval,
      interval = _ownProps$interval === void 0 ? getEditorSettings().autosaveInterval : _ownProps$interval;
  return {
    editsReference: getReferenceByDistinctEdits(),
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    isAutosaving: isAutosavingPost(),
    interval: interval
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  return {
    autosave: function autosave() {
      var _ownProps$autosave = ownProps.autosave,
          autosave = _ownProps$autosave === void 0 ? dispatch('core/editor').autosave : _ownProps$autosave;
      autosave();
    }
  };
})])(autosave_monitor_AutosaveMonitor));

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js


/**
 * External dependencies
 */


var item_TableOfContentsItem = function TableOfContentsItem(_ref) {
  var children = _ref.children,
      isValid = _ref.isValid,
      level = _ref.level,
      href = _ref.href,
      onSelect = _ref.onSelect;
  return Object(external_wp_element_["createElement"])("li", {
    className: classnames_default()('document-outline__item', "is-".concat(level.toLowerCase()), {
      'is-invalid': !isValid
    })
  }, Object(external_wp_element_["createElement"])("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect
  }, Object(external_wp_element_["createElement"])("span", {
    className: "document-outline__emdash",
    "aria-hidden": "true"
  }), Object(external_wp_element_["createElement"])("strong", {
    className: "document-outline__level"
  }, level), Object(external_wp_element_["createElement"])("span", {
    className: "document-outline__item-content"
  }, children)));
};

/* harmony default export */ var document_outline_item = (item_TableOfContentsItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js



function document_outline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function document_outline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { document_outline_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { document_outline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module constants
 */

var emptyHeadingContent = Object(external_wp_element_["createElement"])("em", null, Object(external_wp_i18n_["__"])('(Empty heading)'));
var incorrectLevelContent = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message"
}, Object(external_wp_i18n_["__"])('(Incorrect heading level)'))];
var singleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-h1"
}, Object(external_wp_i18n_["__"])('(Your theme may already use a H1 for the post title)'))];
var multipleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-multiple-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-multiple-h1"
}, Object(external_wp_i18n_["__"])('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

var document_outline_computeOutlineHeadings = function computeOutlineHeadings() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Object(external_lodash_["flatMap"])(blocks, function () {
    var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (block.name === 'core/heading') {
      return document_outline_objectSpread(document_outline_objectSpread({}, block), {}, {
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      });
    }

    return computeOutlineHeadings(block.innerBlocks);
  });
};

var isEmptyHeading = function isEmptyHeading(heading) {
  return !heading.attributes.content || heading.attributes.content.length === 0;
};

var document_outline_DocumentOutline = function DocumentOutline(_ref) {
  var _ref$blocks = _ref.blocks,
      blocks = _ref$blocks === void 0 ? [] : _ref$blocks,
      title = _ref.title,
      onSelect = _ref.onSelect,
      isTitleSupported = _ref.isTitleSupported,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  var headings = document_outline_computeOutlineHeadings(blocks);

  if (headings.length < 1) {
    return null;
  }

  var prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  var titleNode = document.querySelector('.editor-post-title__input');
  var hasTitle = isTitleSupported && title && titleNode;
  var countByLevel = Object(external_lodash_["countBy"])(headings, 'level');
  var hasMultipleH1 = countByLevel[1] > 1;
  return Object(external_wp_element_["createElement"])("div", {
    className: "document-outline"
  }, Object(external_wp_element_["createElement"])("ul", null, hasTitle && Object(external_wp_element_["createElement"])(document_outline_item, {
    level: Object(external_wp_i18n_["__"])('Title'),
    isValid: true,
    onSelect: onSelect,
    href: "#".concat(titleNode.id),
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map(function (item, index) {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    var isIncorrectLevel = item.level > prevHeadingLevel + 1;
    var isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return Object(external_wp_element_["createElement"])(document_outline_item, {
      key: index,
      level: "H".concat(item.level),
      isValid: isValid,
      isDisabled: hasOutlineItemsDisabled,
      href: "#block-".concat(item.clientId),
      onSelect: onSelect
    }, item.isEmpty ? emptyHeadingContent : Object(external_wp_richText_["getTextContent"])(Object(external_wp_richText_["create"])({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ var document_outline = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getBlocks = _select.getBlocks;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: Object(external_lodash_["get"])(postType, ['supports', 'title'], false)
  };
}))(document_outline_DocumentOutline));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function DocumentOutlineCheck(_ref) {
  var blocks = _ref.blocks,
      children = _ref.children;
  var headings = Object(external_lodash_["filter"])(blocks, function (block) {
    return block.name === 'core/heading';
  });

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ var check = (Object(external_wp_data_["withSelect"])(function (select) {
  return {
    blocks: select('core/block-editor').getBlocks()
  };
})(DocumentOutlineCheck));

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__("hF7m");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js
/**
 * WordPress dependencies
 */




function SaveShortcut(_ref) {
  var resetBlocksOnSave = _ref.resetBlocksOnSave;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      resetEditorBlocks = _useDispatch.resetEditorBlocks,
      savePost = _useDispatch.savePost;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        _isEditedPostDirty = _select.isEditedPostDirty,
        _getPostEdits = _select.getPostEdits;

    return {
      isEditedPostDirty: _isEditedPostDirty,
      getPostEdits: _getPostEdits
    };
  }, []),
      isEditedPostDirty = _useSelect.isEditedPostDirty,
      getPostEdits = _useSelect.getPostEdits;

  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/save', function (event) {
    event.preventDefault(); // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`

    if (!isEditedPostDirty()) {
      return;
    } // The text editor requires that editor blocks are updated for a
    // save to work correctly. Usually this happens when the textarea
    // for the code editors blurs, but the shortcut can be used without
    // blurring the textarea.


    if (resetBlocksOnSave) {
      var postEdits = getPostEdits();

      if (postEdits.content && typeof postEdits.content === 'string') {
        var blocks = Object(external_wp_blocks_["parse"])(postEdits.content);
        resetEditorBlocks(blocks);
      }
    }

    savePost();
  }, {
    bindGlobal: true
  });
  return null;
}

/* harmony default export */ var save_shortcut = (SaveShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function VisualEditorGlobalKeyboardShortcuts() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      redo = _useDispatch.redo,
      undo = _useDispatch.undo;

  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/undo', function (event) {
    undo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/redo', function (event) {
    redo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"], null), Object(external_wp_element_["createElement"])(save_shortcut, null));
}

/* harmony default export */ var visual_editor_shortcuts = (VisualEditorGlobalKeyboardShortcuts);
function EditorGlobalKeyboardShortcuts() {
  external_wp_deprecated_default()('EditorGlobalKeyboardShortcuts', {
    alternative: 'VisualEditorGlobalKeyboardShortcuts',
    plugin: 'Gutenberg'
  });
  return Object(external_wp_element_["createElement"])(VisualEditorGlobalKeyboardShortcuts, null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return Object(external_wp_element_["createElement"])(save_shortcut, {
    resetBlocksOnSave: true
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js


/**
 * WordPress dependencies
 */






function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts
  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]),
      registerShortcut = _useDispatch.registerShortcut;

  Object(external_wp_element_["useEffect"])(function () {
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
  }, [registerShortcut]);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null);
}

/* harmony default export */ var register_shortcuts = (EditorKeyboardShortcutsRegister);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js


/**
 * WordPress dependencies
 */

var redo_redo = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ var library_redo = (redo_redo);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js



/**
 * WordPress dependencies
 */







function EditorHistoryRedo(props, ref) {
  var hasRedo = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core/editor').hasEditorRedo();
  }, []);

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      redo = _useDispatch.redo;

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    icon: library_redo
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Redo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  }));
}

/* harmony default export */ var editor_history_redo = (Object(external_wp_element_["forwardRef"])(EditorHistoryRedo));

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js


/**
 * WordPress dependencies
 */

var undo_undo = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ var library_undo = (undo_undo);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js



/**
 * WordPress dependencies
 */







function EditorHistoryUndo(props, ref) {
  var hasUndo = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core/editor').hasEditorUndo();
  }, []);

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      undo = _useDispatch.undo;

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    icon: library_undo
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Undo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  }));
}

/* harmony default export */ var editor_history_undo = (Object(external_wp_element_["forwardRef"])(EditorHistoryUndo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js



/**
 * WordPress dependencies
 */





function TemplateValidationNotice(_ref) {
  var isValid = _ref.isValid,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isValid"]);

  if (isValid) {
    return null;
  }

  var confirmSynchronization = function confirmSynchronization() {
    if ( // eslint-disable-next-line no-alert
    window.confirm(Object(external_wp_i18n_["__"])('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Notice"], {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning",
    actions: [{
      label: Object(external_wp_i18n_["__"])('Keep it as is'),
      onClick: props.resetTemplateValidity
    }, {
      label: Object(external_wp_i18n_["__"])('Reset the template'),
      onClick: confirmSynchronization,
      isPrimary: true
    }]
  }, Object(external_wp_i18n_["__"])('The content of your post doesn’t match the template assigned to your post type.'));
}

/* harmony default export */ var template_validation_notice = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isValid: select('core/block-editor').isValidTemplate()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      setTemplateValidity = _dispatch.setTemplateValidity,
      synchronizeTemplate = _dispatch.synchronizeTemplate;

  return {
    resetTemplateValidity: function resetTemplateValidity() {
      return setTemplateValidity(true);
    },
    synchronizeTemplate: synchronizeTemplate
  };
})])(TemplateValidationNotice));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function EditorNotices(_ref) {
  var notices = _ref.notices,
      onRemove = _ref.onRemove;
  var dismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: true,
    type: 'default'
  });
  var nonDismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: false,
    type: 'default'
  });
  var snackbarNotices = Object(external_lodash_["filter"])(notices, {
    type: 'snackbar'
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, Object(external_wp_element_["createElement"])(template_validation_notice, null)), Object(external_wp_element_["createElement"])(external_wp_components_["SnackbarList"], {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: onRemove
  }));
}
/* harmony default export */ var editor_notices = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    notices: select(external_wp_notices_["store"]).getNotices()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onRemove: dispatch(external_wp_notices_["store"]).removeNotice
  };
})])(EditorNotices));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("w95h");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/layout.js
var layout = __webpack_require__("Civd");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page.js


/**
 * WordPress dependencies
 */

var page_page = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ var library_page = (page_page);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js


/**
 * WordPress dependencies
 */




function EntityRecordItem(_ref) {
  var record = _ref.record,
      checked = _ref.checked,
      onChange = _ref.onChange,
      closePanel = _ref.closePanel;
  var name = record.name,
      kind = record.kind,
      title = record.title,
      key = record.key;
  var parentBlockId = Object(external_wp_data_["useSelect"])(function (select) {
    var _blocks$;

    // Get entity's blocks.
    var _select$getEditedEnti = select('core').getEditedEntityRecord(kind, name, key),
        _select$getEditedEnti2 = _select$getEditedEnti.blocks,
        blocks = _select$getEditedEnti2 === void 0 ? [] : _select$getEditedEnti2; // Get parents of the entity's first block.


    var parents = select('core/block-editor').getBlockParents((_blocks$ = blocks[0]) === null || _blocks$ === void 0 ? void 0 : _blocks$.clientId); // Return closest parent block's clientId.

    return parents[parents.length - 1];
  }, []); // Handle templates that might use default descriptive titles

  var entityRecordTitle = Object(external_wp_data_["useSelect"])(function (select) {
    if ('postType' !== kind || 'wp_template' !== name) {
      return title;
    }

    var template = select('core').getEditedEntityRecord(kind, name, key);
    return select('core/editor').__experimentalGetTemplateInfo(template).title;
  }, [name, kind, title, key]);
  var isSelected = Object(external_wp_data_["useSelect"])(function (select) {
    var selectedBlockId = select('core/block-editor').getSelectedBlockClientId();
    return selectedBlockId === parentBlockId;
  }, [parentBlockId]);
  var isSelectedText = isSelected ? Object(external_wp_i18n_["__"])('Selected') : Object(external_wp_i18n_["__"])('Select');

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/block-editor'),
      selectBlock = _useDispatch.selectBlock;

  var selectParentBlock = Object(external_wp_element_["useCallback"])(function () {
    return selectBlock(parentBlockId);
  }, [parentBlockId]);
  var selectAndDismiss = Object(external_wp_element_["useCallback"])(function () {
    selectBlock(parentBlockId);
    closePanel();
  }, [parentBlockId]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_element_["createElement"])("strong", null, entityRecordTitle || Object(external_wp_i18n_["__"])('Untitled')),
    checked: checked,
    onChange: onChange
  }), parentBlockId ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectParentBlock,
    className: "entities-saved-states__find-entity",
    disabled: isSelected
  }, isSelectedText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectAndDismiss,
    className: "entities-saved-states__find-entity-small",
    disabled: isSelected
  }, isSelectedText)) : null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var ENTITY_NAME_ICONS = {
  site: layout["a" /* default */],
  page: library_page
};
function EntityTypeList(_ref) {
  var list = _ref.list,
      unselectedEntities = _ref.unselectedEntities,
      setUnselectedEntities = _ref.setUnselectedEntities,
      closePanel = _ref.closePanel;
  var firstRecord = list[0];
  var entity = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core').getEntity(firstRecord.kind, firstRecord.name);
  }, [firstRecord.kind, firstRecord.name]); // Set icon based on type of entity.

  var name = firstRecord.name;
  var icon = ENTITY_NAME_ICONS[name];
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: entity.label,
    initialOpen: true,
    icon: icon
  }, list.map(function (record) {
    return Object(external_wp_element_["createElement"])(EntityRecordItem, {
      key: record.key || 'site',
      record: record,
      checked: !Object(external_lodash_["some"])(unselectedEntities, function (elt) {
        return elt.kind === record.kind && elt.name === record.name && elt.key === record.key;
      }),
      onChange: function onChange(value) {
        return setUnselectedEntities(record, value);
      },
      closePanel: closePanel
    });
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


var ENTITY_NAMES = {
  wp_template_part: function wp_template_part(number) {
    return Object(external_wp_i18n_["_n"])('template part', 'template parts', number);
  },
  wp_template: function wp_template(number) {
    return Object(external_wp_i18n_["_n"])('template', 'templates', number);
  },
  post: function post(number) {
    return Object(external_wp_i18n_["_n"])('post', 'posts', number);
  },
  page: function page(number) {
    return Object(external_wp_i18n_["_n"])('page', 'pages', number);
  },
  site: function site(number) {
    return Object(external_wp_i18n_["_n"])('site', 'sites', number);
  }
};
var PLACEHOLDER_PHRASES = {
  // 0 is a back up, but should never be observed.
  0: Object(external_wp_i18n_["__"])('There are no changes.'),

  /* translators: placeholders represent pre-translated singular/plural entity names (page, post, template, site, etc.) */
  1: Object(external_wp_i18n_["__"])('The following changes have been made to your %s.'),

  /* translators: placeholders represent pre-translated singular/plural entity names (page, post, template, site, etc.) */
  2: Object(external_wp_i18n_["__"])('The following changes have been made to your %1$s and %2$s.'),

  /* translators: placeholders represent pre-translated singular/plural entity names (page, post, template, site, etc.) */
  3: Object(external_wp_i18n_["__"])('The following changes have been made to your %1$s, %2$s, and %3$s.'),

  /* translators: placeholders represent pre-translated singular/plural entity names (page, post, template, site, etc.) */
  4: Object(external_wp_i18n_["__"])('The following changes have been made to your %1$s, %2$s, %3$s, and %4$s.'),

  /* translators: placeholders represent pre-translated singular/plural entity names (page, post, template, site, etc.) */
  5: Object(external_wp_i18n_["__"])('The following changes have been made to your %1$s, %2$s, %3$s, %4$s, and %5$s.')
};

function EntitiesSavedStates(_ref) {
  var isOpen = _ref.isOpen,
      close = _ref.close;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      dirtyEntityRecords: select('core').__experimentalGetDirtyEntityRecords()
    };
  }, []),
      dirtyEntityRecords = _useSelect.dirtyEntityRecords;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core'),
      saveEditedEntityRecord = _useDispatch.saveEditedEntityRecord; // To group entities by type.


  var partitionedSavables = Object.values(Object(external_lodash_["groupBy"])(dirtyEntityRecords, 'name')); // Get labels for text-prompt phrase.

  var entityNamesForPrompt = [];
  partitionedSavables.forEach(function (list) {
    if (ENTITY_NAMES[list[0].name]) {
      entityNamesForPrompt.push(ENTITY_NAMES[list[0].name](list.length));
    }
  }); // Get text-prompt phrase based on number of entity types changed.

  var placeholderPhrase = PLACEHOLDER_PHRASES[entityNamesForPrompt.length] || // Fallback for edge case that should not be observed (more than 5 entity types edited).
  Object(external_wp_i18n_["__"])('The following changes have been made to multiple entities.'); // eslint-disable-next-line @wordpress/valid-sprintf


  var promptPhrase = external_wp_i18n_["sprintf"].apply(void 0, [placeholderPhrase].concat(entityNamesForPrompt)); // Unchecked entities to be ignored by save function.

  var _useState = Object(external_wp_element_["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      unselectedEntities = _useState2[0],
      _setUnselectedEntities = _useState2[1];

  var setUnselectedEntities = function setUnselectedEntities(_ref2, checked) {
    var kind = _ref2.kind,
        name = _ref2.name,
        key = _ref2.key;

    if (checked) {
      _setUnselectedEntities(unselectedEntities.filter(function (elt) {
        return elt.kind !== kind || elt.name !== name || elt.key !== key;
      }));
    } else {
      _setUnselectedEntities([].concat(Object(toConsumableArray["a" /* default */])(unselectedEntities), [{
        kind: kind,
        name: name,
        key: key
      }]));
    }
  };

  var saveCheckedEntities = function saveCheckedEntities() {
    var entitiesToSave = dirtyEntityRecords.filter(function (_ref3) {
      var kind = _ref3.kind,
          name = _ref3.name,
          key = _ref3.key;
      return !Object(external_lodash_["some"])(unselectedEntities, function (elt) {
        return elt.kind === kind && elt.name === name && elt.key === key;
      });
    });
    close(entitiesToSave);
    entitiesToSave.forEach(function (_ref4) {
      var kind = _ref4.kind,
          name = _ref4.name,
          key = _ref4.key;
      saveEditedEntityRecord(kind, name, key);
    });
  }; // Explicitly define this with no argument passed.  Using `close` on
  // its own will use the event object in place of the expected saved entities.


  var dismissPanel = Object(external_wp_element_["useCallback"])(function () {
    return close();
  }, [close]);
  return isOpen ? Object(external_wp_element_["createElement"])("div", {
    className: "entities-saved-states__panel"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "entities-saved-states__panel-header"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    disabled: dirtyEntityRecords.length - unselectedEntities.length === 0,
    onClick: saveCheckedEntities,
    className: "editor-entities-saved-states__save-button"
  }, Object(external_wp_i18n_["__"])('Save')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: dismissPanel,
    icon: library_close["a" /* default */],
    label: Object(external_wp_i18n_["__"])('Close panel')
  })), Object(external_wp_element_["createElement"])("div", {
    className: "entities-saved-states__text-prompt"
  }, Object(external_wp_element_["createElement"])("strong", null, Object(external_wp_i18n_["__"])('Are you ready to save?')), Object(external_wp_element_["createElement"])("p", null, promptPhrase)), partitionedSavables.map(function (list) {
    return Object(external_wp_element_["createElement"])(EntityTypeList, {
      key: list[0].name,
      list: list,
      closePanel: dismissPanel,
      unselectedEntities: unselectedEntities,
      setUnselectedEntities: setUnselectedEntities
    });
  })) : null;
}

/* harmony default export */ var entities_saved_states = (Object(external_wp_components_["withFocusReturn"])(EntitiesSavedStates));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js








function error_boundary_createSuper(Derived) { var hasNativeReflectConstruct = error_boundary_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function error_boundary_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






var error_boundary_ErrorBoundary = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ErrorBoundary, _Component);

  var _super = error_boundary_createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ErrorBoundary);

    _this = _super.apply(this, arguments);
    _this.reboot = _this.reboot.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getContent = _this.getContent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      error: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "reboot",
    value: function reboot() {
      this.props.onError();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      try {
        // While `select` in a component is generally discouraged, it is
        // used here because it (a) reduces the chance of data loss in the
        // case of additional errors by performing a direct retrieval and
        // (b) avoids the performance cost associated with unnecessary
        // content serialization throughout the lifetime of a non-erroring
        // application.
        return Object(external_wp_data_["select"])('core/editor').getEditedPostContent();
      } catch (error) {}
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (!error) {
        return this.props.children;
      }

      return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
        className: "editor-error-boundary",
        actions: [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: "recovery",
          onClick: this.reboot,
          isSecondary: true
        }, Object(external_wp_i18n_["__"])('Attempt Recovery')), Object(external_wp_element_["createElement"])(external_wp_components_["ClipboardButton"], {
          key: "copy-post",
          text: this.getContent,
          isSecondary: true
        }, Object(external_wp_i18n_["__"])('Copy Post Text')), Object(external_wp_element_["createElement"])(external_wp_components_["ClipboardButton"], {
          key: "copy-error",
          text: error.stack,
          isSecondary: true
        }, Object(external_wp_i18n_["__"])('Copy Error'))]
      }, Object(external_wp_i18n_["__"])('The editor has encountered an unexpected error.'));
    }
  }]);

  return ErrorBoundary;
}(external_wp_element_["Component"]);

/* harmony default export */ var error_boundary = (error_boundary_ErrorBoundary);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



var requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

var hasSessionStorageSupport = Object(external_lodash_["once"])(function () {
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    return true;
  } catch (error) {
    return false;
  }
});
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */

function useAutosaveNotice() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      isEditedPostNew: select('core/editor').isEditedPostNew(),
      getEditedPostAttribute: select('core/editor').getEditedPostAttribute,
      hasRemoteAutosave: !!select('core/editor').getEditorSettings().autosave
    };
  }, []),
      postId = _useSelect.postId,
      isEditedPostNew = _useSelect.isEditedPostNew,
      getEditedPostAttribute = _useSelect.getEditedPostAttribute,
      hasRemoteAutosave = _useSelect.hasRemoteAutosave;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]),
      createWarningNotice = _useDispatch.createWarningNotice,
      removeNotice = _useDispatch.removeNotice;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch2.editPost,
      resetEditorBlocks = _useDispatch2.resetEditorBlocks;

  Object(external_wp_element_["useEffect"])(function () {
    var localAutosave = localAutosaveGet(postId, isEditedPostNew);

    if (!localAutosave) {
      return;
    }

    try {
      localAutosave = JSON.parse(localAutosave);
    } catch (error) {
      // Not usable if it can't be parsed.
      return;
    }

    var _localAutosave = localAutosave,
        title = _localAutosave.post_title,
        content = _localAutosave.content,
        excerpt = _localAutosave.excerpt;
    var edits = {
      title: title,
      content: content,
      excerpt: excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      var hasDifference = Object.keys(edits).some(function (key) {
        return edits[key] !== getEditedPostAttribute(key);
      });

      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        localAutosaveClear(postId, isEditedPostNew);
        return;
      }
    }

    if (hasRemoteAutosave) {
      return;
    }

    var noticeId = Object(external_lodash_["uniqueId"])('wpEditorAutosaveRestore');
    createWarningNotice(Object(external_wp_i18n_["__"])('The backup of this post in your browser is different from the version below.'), {
      id: noticeId,
      actions: [{
        label: Object(external_wp_i18n_["__"])('Restore the backup'),
        onClick: function onClick() {
          editPost(Object(external_lodash_["omit"])(edits, ['content']));
          resetEditorBlocks(Object(external_wp_blocks_["parse"])(edits.content));
          removeNotice(noticeId);
        }
      }]
    });
  }, [isEditedPostNew, postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  var _useSelect2 = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      isEditedPostNew: select('core/editor').isEditedPostNew(),
      isDirty: select('core/editor').isEditedPostDirty(),
      isAutosaving: select('core/editor').isAutosavingPost(),
      didError: select('core/editor').didPostSaveRequestFail()
    };
  }, []),
      postId = _useSelect2.postId,
      isEditedPostNew = _useSelect2.isEditedPostNew,
      isDirty = _useSelect2.isDirty,
      isAutosaving = _useSelect2.isAutosaving,
      didError = _useSelect2.didError;

  var lastIsDirty = Object(external_wp_element_["useRef"])(isDirty);
  var lastIsAutosaving = Object(external_wp_element_["useRef"])(isAutosaving);
  Object(external_wp_element_["useEffect"])(function () {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      localAutosaveClear(postId, isEditedPostNew);
    }

    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]); // Once the isEditedPostNew changes from true to false, let's clear the auto-draft autosave.

  var wasEditedPostNew = Object(external_wp_compose_["usePrevious"])(isEditedPostNew);
  var prevPostId = Object(external_wp_compose_["usePrevious"])(postId);
  Object(external_wp_element_["useEffect"])(function () {
    if (prevPostId === postId && wasEditedPostNew && !isEditedPostNew) {
      localAutosaveClear(postId, true);
    }
  }, [isEditedPostNew, postId]);
}

function LocalAutosaveMonitor() {
  var _useDispatch3 = Object(external_wp_data_["useDispatch"])('core/editor'),
      autosave = _useDispatch3.autosave;

  var deferedAutosave = Object(external_wp_element_["useCallback"])(function () {
    requestIdleCallback(function () {
      return autosave({
        local: true
      });
    });
  }, []);
  useAutosaveNotice();
  useAutosavePurge();

  var _useSelect3 = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      localAutosaveInterval: select('core/editor').getEditorSettings().__experimentalLocalAutosaveInterval
    };
  }, []),
      localAutosaveInterval = _useSelect3.localAutosaveInterval;

  return Object(external_wp_element_["createElement"])(autosave_monitor, {
    interval: localAutosaveInterval,
    autosave: deferedAutosave
  });
}

/* harmony default export */ var local_autosave_monitor = (Object(external_wp_compose_["ifCondition"])(hasSessionStorageSupport)(LocalAutosaveMonitor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function PageAttributesCheck(_ref) {
  var availableTemplates = _ref.availableTemplates,
      postType = _ref.postType,
      children = _ref.children;
  var supportsPageAttributes = Object(external_lodash_["get"])(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes && Object(external_lodash_["isEmpty"])(availableTemplates)) {
    return null;
  }

  return children;
}
/* harmony default export */ var page_attributes_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    availableTemplates: availableTemplates
  };
})(PageAttributesCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}    props             Props.
 * @param {string}    [props.postType]  Current post type.
 * @param {WPElement} props.children    Children to be rendered if post
 *                                                                   type supports.
 * @param {(string|string[])}                      props.supportKeys String or string array of keys
 *                                                                   to test.
 *
 * @return {WPComponent} The component to be rendered.
 */

function PostTypeSupportCheck(_ref) {
  var postType = _ref.postType,
      children = _ref.children,
      supportKeys = _ref.supportKeys;
  var isSupported = true;

  if (postType) {
    isSupported = Object(external_lodash_["some"])(Object(external_lodash_["castArray"])(supportKeys), function (key) {
      return !!postType.supports[key];
    });
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_type_support_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var PageAttributesOrder = Object(external_wp_compose_["withState"])({
  orderInput: null
})(function (_ref) {
  var onUpdateOrder = _ref.onUpdateOrder,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 0 : _ref$order,
      orderInput = _ref.orderInput,
      setState = _ref.setState;

  var setUpdatedOrder = function setUpdatedOrder(value) {
    setState({
      orderInput: value
    });
    var newOrder = Number(value);

    if (Number.isInteger(newOrder) && Object(external_lodash_["invoke"])(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  var value = orderInput === null ? order : orderInput;
  return Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
    className: "editor-page-attributes__order",
    type: "number",
    label: Object(external_wp_i18n_["__"])('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: function onBlur() {
      setState({
        orderInput: null
      });
    }
  });
});

function PageAttributesOrderWithChecks(props) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "page-attributes"
  }, Object(external_wp_element_["createElement"])(PageAttributesOrder, props));
}

/* harmony default export */ var page_attributes_order = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateOrder: function onUpdateOrder(order) {
      dispatch('core/editor').editPost({
        menu_order: order
      });
    }
  };
})])(PageAttributesOrderWithChecks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/terms.js


function terms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function terms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { terms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { terms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms  Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  var flatTermsWithParentAndChildren = flatTerms.map(function (term) {
    return terms_objectSpread({
      children: [],
      parent: null
    }, term);
  });
  var termsByParent = Object(external_lodash_["groupBy"])(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  var fillWithChildren = function fillWithChildren(terms) {
    return terms.map(function (term) {
      var children = termsByParent[term.id];
      return terms_objectSpread(terms_objectSpread({}, term), {}, {
        children: children && children.length ? fillWithChildren(children) : []
      });
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function getTitle(post) {
  var _post$title;

  return post !== null && post !== void 0 && (_post$title = post.title) !== null && _post$title !== void 0 && _post$title.rendered ? post.title.rendered : "#".concat(post.id, " (").concat(Object(external_wp_i18n_["__"])('no title'), ")");
}

function PageAttributesParent() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      fieldValue = _useState2[0],
      setFieldValue = _useState2[1];

  var isSearching = fieldValue;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core'),
        getPostType = _select.getPostType,
        getEntityRecords = _select.getEntityRecords,
        getEntityRecord = _select.getEntityRecord;

    var _select2 = select('core/editor'),
        getCurrentPostId = _select2.getCurrentPostId,
        getEditedPostAttribute = _select2.getEditedPostAttribute;

    var postTypeSlug = getEditedPostAttribute('type');
    var pageId = getEditedPostAttribute('parent');
    var pType = getPostType(postTypeSlug);
    var postId = getCurrentPostId();
    var isHierarchical = Object(external_lodash_["get"])(pType, ['hierarchical'], false);
    var query = {
      per_page: 100,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc',
      _fields: 'id,title,parent'
    }; // Perform a search when the field is changed.

    if (isSearching) {
      query.search = fieldValue;
    }

    return {
      parentPostId: pageId,
      parentPost: pageId ? getEntityRecord('postType', postTypeSlug, pageId) : null,
      items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
      postType: pType
    };
  }, [fieldValue]),
      parentPost = _useSelect.parentPost,
      parentPostId = _useSelect.parentPostId,
      items = _useSelect.items,
      postType = _useSelect.postType;

  var isHierarchical = Object(external_lodash_["get"])(postType, ['hierarchical'], false);
  var parentPageLabel = Object(external_lodash_["get"])(postType, ['labels', 'parent_item_colon']);
  var pageItems = items || [];

  var getOptionsFromTree = function getOptionsFromTree(tree) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Object(external_lodash_["flatMap"])(tree, function (treeNode) {
      return [{
        value: treeNode.id,
        label: Object(external_lodash_["repeat"])('— ', level) + Object(external_lodash_["unescape"])(treeNode.name)
      }].concat(Object(toConsumableArray["a" /* default */])(getOptionsFromTree(treeNode.children || [], level + 1)));
    });
  };

  var parentOptions = Object(external_wp_element_["useMemo"])(function () {
    var tree = pageItems.map(function (item) {
      return {
        id: item.id,
        parent: item.parent,
        name: getTitle(item)
      };
    }); // Only build a hierarchical tree when not searching.

    if (!isSearching) {
      tree = buildTermsTree(tree);
    }

    var opts = getOptionsFromTree(tree); // Ensure the current parent is in the options list.

    var optsHasParent = Object(external_lodash_["find"])(opts, function (item) {
      return item.value === parentPostId;
    });

    if (parentPost && !optsHasParent) {
      opts.unshift({
        value: parentPostId,
        label: getTitle(parentPost)
      });
    }

    return opts;
  }, [pageItems]);

  if (!isHierarchical || !parentPageLabel) {
    return null;
  }
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  var handleKeydown = function handleKeydown(inputValue) {
    setFieldValue(inputValue);
  };
  /**
   * Handle author selection.
   *
   * @param {Object} selectedPostId The selected Author.
   */


  var handleChange = function handleChange(selectedPostId) {
    editPost({
      parent: selectedPostId
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["ComboboxControl"], {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    value: parentPostId,
    options: parentOptions,
    onFilterValueChange: Object(external_lodash_["debounce"])(handleKeydown, 300),
    onChange: handleChange
  });
}
/* harmony default export */ var page_attributes_parent = (PageAttributesParent);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/template.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function PageTemplate(_ref) {
  var availableTemplates = _ref.availableTemplates,
      selectedTemplate = _ref.selectedTemplate,
      onUpdate = _ref.onUpdate;

  if (Object(external_lodash_["isEmpty"])(availableTemplates)) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    label: Object(external_wp_i18n_["__"])('Template:'),
    value: selectedTemplate,
    onChange: onUpdate,
    className: "editor-page-attributes__template",
    options: Object(external_lodash_["map"])(availableTemplates, function (templateName, templateSlug) {
      return {
        value: templateSlug,
        label: templateName
      };
    })
  });
}
/* harmony default export */ var page_attributes_template = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    selectedTemplate: getEditedPostAttribute('template'),
    availableTemplates: availableTemplates
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdate: function onUpdate(templateSlug) {
      dispatch('core/editor').editPost({
        template: templateSlug || ''
      });
    }
  };
}))(PageTemplate));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function PostAuthorCombobox() {
  var _useState = Object(external_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      fieldValue = _useState2[0],
      setFieldValue = _useState2[1];

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core'),
        __unstableGetAuthor = _select.__unstableGetAuthor,
        getAuthors = _select.getAuthors,
        isResolving = _select.isResolving;

    var _select2 = select('core/editor'),
        getEditedPostAttribute = _select2.getEditedPostAttribute;

    var author = __unstableGetAuthor(getEditedPostAttribute('author'));

    var query = !fieldValue || '' === fieldValue ? {} : {
      search: fieldValue
    };
    return {
      authorId: getEditedPostAttribute('author'),
      postAuthor: author,
      authors: getAuthors(query),
      isLoading: isResolving('core', 'getAuthors', [query])
    };
  }, [fieldValue]),
      authorId = _useSelect.authorId,
      isLoading = _useSelect.isLoading,
      authors = _useSelect.authors,
      postAuthor = _useSelect.postAuthor;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var authorOptions = Object(external_wp_element_["useMemo"])(function () {
    var fetchedAuthors = (authors !== null && authors !== void 0 ? authors : []).map(function (author) {
      return {
        value: author.id,
        label: author.name
      };
    }); // Ensure the current author is included in the dropdown list.

    var foundAuthor = fetchedAuthors.findIndex(function (_ref) {
      var value = _ref.value;
      return (postAuthor === null || postAuthor === void 0 ? void 0 : postAuthor.id) === value;
    });

    if (foundAuthor < 0 && postAuthor) {
      return [{
        value: postAuthor.id,
        label: postAuthor.name
      }].concat(Object(toConsumableArray["a" /* default */])(fetchedAuthors));
    }

    return fetchedAuthors;
  }, [authors, postAuthor]); // Initializes the post author properly
  // Also ensures external changes are reflected.

  Object(external_wp_element_["useEffect"])(function () {
    if (postAuthor) {
      setFieldValue(postAuthor.name);
    }
  }, [postAuthor]);
  /**
   * Handle author selection.
   *
   * @param {number} postAuthorId The selected Author.
   */

  var handleSelect = function handleSelect(postAuthorId) {
    if (!postAuthorId) {
      return;
    }

    editPost({
      author: postAuthorId
    });
  };
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  var handleKeydown = function handleKeydown(inputValue) {
    setFieldValue(inputValue);
  };

  if (!postAuthor) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["ComboboxControl"], {
    label: Object(external_wp_i18n_["__"])('Author'),
    options: authorOptions,
    value: authorId,
    onFilterValueChange: Object(external_lodash_["debounce"])(handleKeydown, 300),
    onChange: handleSelect,
    isLoading: isLoading,
    allowReset: false
  });
}

/* harmony default export */ var combobox = (PostAuthorCombobox);

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/select.js


/**
 * WordPress dependencies
 */





function PostAuthorSelect() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var authorsFromAPI = select('core').getAuthors();
    return {
      postAuthor: select('core/editor').getEditedPostAttribute('author'),
      authors: authorsFromAPI.map(function (author) {
        return {
          label: Object(external_wp_htmlEntities_["decodeEntities"])(author.name),
          value: author.id
        };
      })
    };
  }, []),
      postAuthor = _useSelect.postAuthor,
      authors = _useSelect.authors;

  var setAuthorId = function setAuthorId(value) {
    var author = Number(value);
    editPost({
      author: author
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    className: "post-author-selector",
    label: Object(external_wp_i18n_["__"])('Author'),
    options: authors,
    onChange: setAuthorId,
    value: postAuthor
  });
}

/* harmony default export */ var post_author_select = (PostAuthorSelect);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var minimumUsersForCombobox = 25;

function PostAuthor() {
  var showCombobox = Object(external_wp_data_["useSelect"])(function (select) {
    // Not using `getUsers()` because it requires `list_users` capability.
    var authors = select(external_wp_coreData_["store"]).getAuthors();
    return (authors === null || authors === void 0 ? void 0 : authors.length) >= minimumUsersForCombobox;
  }, []);

  if (showCombobox) {
    return Object(external_wp_element_["createElement"])(combobox, null);
  }

  return Object(external_wp_element_["createElement"])(post_author_select, null);
}

/* harmony default export */ var post_author = (PostAuthor);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/check.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostAuthorCheck(_ref) {
  var hasAssignAuthorAction = _ref.hasAssignAuthorAction,
      authors = _ref.authors,
      children = _ref.children;

  if (!hasAssignAuthorAction || !authors || 1 >= authors.length) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "author"
  }, children);
}
/* harmony default export */ var post_author_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: Object(external_lodash_["get"])(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), external_wp_compose_["withInstanceId"]])(PostAuthorCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js



/**
 * WordPress dependencies
 */





function PostComments(_ref) {
  var _ref$commentStatus = _ref.commentStatus,
      commentStatus = _ref$commentStatus === void 0 ? 'open' : _ref$commentStatus,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["commentStatus"]);

  var onToggleComments = function onToggleComments() {
    return props.editPost({
      comment_status: commentStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Allow comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ var post_comments = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostComments));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js


/**
 * WordPress dependencies
 */





function PostExcerpt(_ref) {
  var excerpt = _ref.excerpt,
      onUpdateExcerpt = _ref.onUpdateExcerpt;
  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-excerpt"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["TextareaControl"], {
    label: Object(external_wp_i18n_["__"])('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: function onChange(value) {
      return onUpdateExcerpt(value);
    },
    value: excerpt
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/excerpt/')
  }, Object(external_wp_i18n_["__"])('Learn more about manual excerpts')));
}

/* harmony default export */ var post_excerpt = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    excerpt: select('core/editor').getEditedPostAttribute('excerpt')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateExcerpt: function onUpdateExcerpt(excerpt) {
      dispatch('core/editor').editPost({
        excerpt: excerpt
      });
    }
  };
})])(PostExcerpt));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js



/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "excerpt"
  }));
}

/* harmony default export */ var post_excerpt_check = (PostExcerptCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function ThemeSupportCheck(_ref) {
  var themeSupports = _ref.themeSupports,
      children = _ref.children,
      postType = _ref.postType,
      supportKeys = _ref.supportKeys;
  var isSupported = Object(external_lodash_["some"])(Object(external_lodash_["castArray"])(supportKeys), function (key) {
    var supported = Object(external_lodash_["get"])(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && Object(external_lodash_["isArray"])(supported)) {
      return Object(external_lodash_["includes"])(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var theme_support_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getThemeSupports = _select.getThemeSupports;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js



/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return Object(external_wp_element_["createElement"])(theme_support_check, {
    supportKeys: "post-thumbnails"
  }, Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "thumbnail"
  })));
}

/* harmony default export */ var post_featured_image_check = (PostFeaturedImageCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

var DEFAULT_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Featured image');

var DEFAULT_SET_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Set featured image');

var DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Remove image');

function PostFeaturedImage(_ref) {
  var _media$media_details$, _media$media_details$2;

  var currentPostId = _ref.currentPostId,
      featuredImageId = _ref.featuredImageId,
      onUpdateImage = _ref.onUpdateImage,
      onDropImage = _ref.onDropImage,
      onRemoveImage = _ref.onRemoveImage,
      media = _ref.media,
      postType = _ref.postType,
      noticeUI = _ref.noticeUI;
  var postLabel = Object(external_lodash_["get"])(postType, ['labels'], {});
  var instructions = Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('To edit the featured image, you need permission to upload media.'));
  var mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    var mediaSize = Object(external_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if (Object(external_lodash_["has"])(media, ['media_details', 'sizes', mediaSize])) {
      // use mediaSize when available
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      // get fallbackMediaSize if mediaSize is not available
      var fallbackMediaSize = Object(external_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, currentPostId);

      if (Object(external_lodash_["has"])(media, ['media_details', 'sizes', fallbackMediaSize])) {
        // use fallbackMediaSize when mediaSize is not available
        mediaWidth = media.media_details.sizes[fallbackMediaSize].width;
        mediaHeight = media.media_details.sizes[fallbackMediaSize].height;
        mediaSourceUrl = media.media_details.sizes[fallbackMediaSize].source_url;
      } else {
        // use full image size when mediaFallbackSize and mediaSize are not available
        mediaWidth = media.media_details.width;
        mediaHeight = media.media_details.height;
        mediaSourceUrl = media.source_url;
      }
    }
  }

  return Object(external_wp_element_["createElement"])(post_featured_image_check, null, noticeUI, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-featured-image"
  }, media && Object(external_wp_element_["createElement"])("div", {
    id: "editor-post-featured-image-".concat(featuredImageId, "-describedby"),
    className: "hidden"
  }, media.alt_text && Object(external_wp_i18n_["sprintf"])( // Translators: %s: The selected image alt text.
  Object(external_wp_i18n_["__"])('Current image: %s'), media.alt_text), !media.alt_text && Object(external_wp_i18n_["sprintf"])( // Translators: %s: The selected image filename.
  Object(external_wp_i18n_["__"])('The current image has no alternative text. The file name is: %s'), ((_media$media_details$ = media.media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.full) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.file) || media.slug)), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], {
    fallback: instructions
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-featured-image__container"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !featuredImageId ? null : Object(external_wp_i18n_["__"])('Edit or update the image'),
        "aria-describedby": !featuredImageId ? null : "editor-post-featured-image-".concat(featuredImageId, "-describedby")
      }, !!featuredImageId && media && Object(external_wp_element_["createElement"])(external_wp_components_["ResponsiveWrapper"], {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight,
        isInline: true
      }, Object(external_wp_element_["createElement"])("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!featuredImageId && !media && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)), Object(external_wp_element_["createElement"])(external_wp_components_["DropZone"], {
        onFilesDrop: onDropImage
      }));
    },
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: open,
        isSecondary: true
      }, Object(external_wp_i18n_["__"])('Replace Image'));
    }
  })), !!featuredImageId && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

var applyWithSelect = Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getMedia = _select.getMedia,
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId: featuredImageId
  };
});
var applyWithDispatch = Object(external_wp_data_["withDispatch"])(function (dispatch, _ref4, _ref5) {
  var noticeOperations = _ref4.noticeOperations;
  var select = _ref5.select;

  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateImage: function onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },
    onDropImage: function onDropImage(filesList) {
      select('core/block-editor').getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList: filesList,
        onFileChange: function onFileChange(_ref6) {
          var _ref7 = Object(slicedToArray["a" /* default */])(_ref6, 1),
              image = _ref7[0];

          editPost({
            featured_media: image.id
          });
        },
        onError: function onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }
      });
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});
/* harmony default export */ var post_featured_image = (Object(external_wp_compose_["compose"])(external_wp_components_["withNotices"], applyWithSelect, applyWithDispatch, Object(external_wp_components_["withFilters"])('editor.PostFeaturedImage'))(PostFeaturedImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/check.js




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostFormatCheck(_ref) {
  var disablePostFormats = _ref.disablePostFormats,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["disablePostFormats"]);

  return !disablePostFormats && Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "post-formats"
  }));
}

/* harmony default export */ var post_format_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

 // All WP post formats, sorted alphabetically by translated name.

var POST_FORMATS = [{
  id: 'aside',
  caption: Object(external_wp_i18n_["__"])('Aside')
}, {
  id: 'audio',
  caption: Object(external_wp_i18n_["__"])('Audio')
}, {
  id: 'chat',
  caption: Object(external_wp_i18n_["__"])('Chat')
}, {
  id: 'gallery',
  caption: Object(external_wp_i18n_["__"])('Gallery')
}, {
  id: 'image',
  caption: Object(external_wp_i18n_["__"])('Image')
}, {
  id: 'link',
  caption: Object(external_wp_i18n_["__"])('Link')
}, {
  id: 'quote',
  caption: Object(external_wp_i18n_["__"])('Quote')
}, {
  id: 'standard',
  caption: Object(external_wp_i18n_["__"])('Standard')
}, {
  id: 'status',
  caption: Object(external_wp_i18n_["__"])('Status')
}, {
  id: 'video',
  caption: Object(external_wp_i18n_["__"])('Video')
}].sort(function (a, b) {
  var normalizedA = a.caption.toUpperCase();
  var normalizedB = b.caption.toUpperCase();

  if (normalizedA < normalizedB) {
    return -1;
  }

  if (normalizedA > normalizedB) {
    return 1;
  }

  return 0;
});
function PostFormat() {
  var instanceId = Object(external_wp_compose_["useInstanceId"])(PostFormat);
  var postFormatSelectorId = "post-format-selector-".concat(instanceId);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        getEditedPostAttribute = _select.getEditedPostAttribute,
        getSuggestedPostFormat = _select.getSuggestedPostFormat;

    var _postFormat = getEditedPostAttribute('format');

    var themeSupports = select('core').getThemeSupports();
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard',
      suggestedFormat: getSuggestedPostFormat(),
      // Ensure current format is always in the set.
      // The current format may not be a format supported by the theme.
      supportedFormats: Object(external_lodash_["union"])([_postFormat], Object(external_lodash_["get"])(themeSupports, ['formats'], []))
    };
  }, []),
      postFormat = _useSelect.postFormat,
      suggestedFormat = _useSelect.suggestedFormat,
      supportedFormats = _useSelect.supportedFormats;

  var formats = POST_FORMATS.filter(function (format) {
    return Object(external_lodash_["includes"])(supportedFormats, format.id);
  });
  var suggestion = Object(external_lodash_["find"])(formats, function (format) {
    return format.id === suggestedFormat;
  });

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var onUpdatePostFormat = function onUpdatePostFormat(format) {
    return editPost({
      format: format
    });
  };

  return Object(external_wp_element_["createElement"])(post_format_check, null, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format__content"
  }, Object(external_wp_element_["createElement"])("label", {
    htmlFor: postFormatSelectorId
  }, Object(external_wp_i18n_["__"])('Post Format')), Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    value: postFormat,
    onChange: function onChange(format) {
      return onUpdatePostFormat(format);
    },
    id: postFormatSelectorId,
    options: formats.map(function (format) {
      return {
        label: format.caption,
        value: format.id
      };
    })
  })), suggestion && suggestion.id !== postFormat && Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format__suggestion"
  }, Object(external_wp_i18n_["__"])('Suggestion:'), ' ', Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestion.id);
    }
  }, suggestion.caption))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/backup.js


/**
 * WordPress dependencies
 */

var backup = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ var library_backup = (backup);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function PostLastRevisionCheck(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount,
      children = _ref.children;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ var post_last_revision_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function LastRevision(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount;
  return Object(external_wp_element_["createElement"])(post_last_revision_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    href: getWPAdminURL('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: library_backup
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %d: number of revisions */
  Object(external_wp_i18n_["_n"])('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ var post_last_revision = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js








function post_preview_button_createSuper(Derived) { var hasNativeReflectConstruct = post_preview_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function post_preview_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








function writeInterstitialMessage(targetDocument) {
  var markup = Object(external_wp_element_["renderToString"])(Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Generating preview…'))));
  markup += "\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t\t@-webkit-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-moz-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-o-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg {\n\t\t\t\twidth: 192px;\n\t\t\t\theight: 192px;\n\t\t\t\tstroke: #555d66;\n\t\t\t\tstroke-width: 0.75;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg .outer,\n\t\t\t.editor-post-preview-button__interstitial-message svg .inner {\n\t\t\t\tstroke-dasharray: 280;\n\t\t\t\tstroke-dashoffset: 280;\n\t\t\t\t-webkit-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-moz-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-o-animation: paint 1.5s ease infinite alternate;\n\t\t\t\tanimation: paint 1.5s ease infinite alternate;\n\t\t\t}\n\t\t\tp {\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n\t\t\t}\n\t\t</style>\n\t";
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = Object(external_wp_hooks_["applyFilters"])('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = Object(external_wp_i18n_["__"])('Generating preview…');
  targetDocument.close();
}

var post_preview_button_PostPreviewButton = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostPreviewButton, _Component);

  var _super = post_preview_button_createSuper(PostPreviewButton);

  function PostPreviewButton() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPreviewButton);

    _this = _super.apply(this, arguments);
    _this.buttonRef = Object(external_wp_element_["createRef"])();
    _this.openPreviewWindow = _this.openPreviewWindow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostPreviewButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var previewLink = this.props.previewLink; // This relies on the window being responsible to unset itself when
      // navigation occurs or a new preview window is opened, to avoid
      // unintentional forceful redirects.

      if (previewLink && !prevProps.previewLink) {
        this.setPreviewWindowLink(previewLink);
      }
    }
    /**
     * Sets the preview window's location to the given URL, if a preview window
     * exists and is not closed.
     *
     * @param {string} url URL to assign as preview window location.
     */

  }, {
    key: "setPreviewWindowLink",
    value: function setPreviewWindowLink(url) {
      var previewWindow = this.previewWindow;

      if (previewWindow && !previewWindow.closed) {
        previewWindow.location = url;

        if (this.buttonRef.current) {
          this.buttonRef.current.focus();
        }
      }
    }
  }, {
    key: "getWindowTarget",
    value: function getWindowTarget() {
      var postId = this.props.postId;
      return "wp-preview-".concat(postId);
    }
  }, {
    key: "openPreviewWindow",
    value: function openPreviewWindow(event) {
      // Our Preview button has its 'href' and 'target' set correctly for a11y
      // purposes. Unfortunately, though, we can't rely on the default 'click'
      // handler since sometimes it incorrectly opens a new tab instead of reusing
      // the existing one.
      // https://github.com/WordPress/gutenberg/pull/8330
      event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

      if (!this.previewWindow || this.previewWindow.closed) {
        this.previewWindow = window.open('', this.getWindowTarget());
      } // Focus the Preview tab. This might not do anything, depending on the browser's
      // and user's preferences.
      // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


      this.previewWindow.focus(); // If we don't need to autosave the post before previewing, then we simply
      // load the Preview URL in the Preview tab.

      if (!this.props.isAutosaveable) {
        this.setPreviewWindowLink(event.target.href);
        return;
      } // Request an autosave. This happens asynchronously and causes the component
      // to update when finished.


      if (this.props.isDraft) {
        this.props.savePost({
          isPreview: true
        });
      } else {
        this.props.autosave({
          isPreview: true
        });
      } // Display a 'Generating preview' message in the Preview tab while we wait for the
      // autosave to finish.


      writeInterstitialMessage(this.previewWindow.document);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          previewLink = _this$props.previewLink,
          currentPostLink = _this$props.currentPostLink,
          isSaveable = _this$props.isSaveable,
          role = _this$props.role; // Link to the `?preview=true` URL if we have it, since this lets us see
      // changes that were autosaved since the post was last published. Otherwise,
      // just link to the post's URL.

      var href = previewLink || currentPostLink;
      var classNames = classnames_default()({
        'editor-post-preview': !this.props.className
      }, this.props.className);
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: !this.props.className,
        className: classNames,
        href: href,
        target: this.getWindowTarget(),
        disabled: !isSaveable,
        onClick: this.openPreviewWindow,
        ref: this.buttonRef,
        role: role
      }, this.props.textContent ? this.props.textContent : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["_x"])('Preview', 'imperative verb'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
        as: "span"
      },
      /* translators: accessibility text */
      Object(external_wp_i18n_["__"])('(opens in a new tab)'))));
    }
  }]);

  return PostPreviewButton;
}(external_wp_element_["Component"]);
/* harmony default export */ var post_preview_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var forcePreviewLink = _ref.forcePreviewLink,
      forceIsAutosaveable = _ref.forceIsAutosaveable;

  var _select = select('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostAttribute = _select.getCurrentPostAttribute,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostAutosaveable = _select.isEditedPostAutosaveable,
      getEditedPostPreviewLink = _select.getEditedPostPreviewLink;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var previewLink = getEditedPostPreviewLink();
  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    autosave: dispatch('core/editor').autosave,
    savePost: dispatch('core/editor').savePost
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref2) {
  var isViewable = _ref2.isViewable;
  return isViewable;
})])(post_preview_button_PostPreviewButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function PostLockedModal() {
  var instanceId = Object(external_wp_compose_["useInstanceId"])(PostLockedModal);
  var hookName = 'core/editor/post-locked-modal-' + instanceId;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      autosave = _useDispatch.autosave,
      updatePostLock = _useDispatch.updatePostLock;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        isPostLocked = _select.isPostLocked,
        isPostLockTakeover = _select.isPostLockTakeover,
        getPostLockUser = _select.getPostLockUser,
        getCurrentPostId = _select.getCurrentPostId,
        getActivePostLock = _select.getActivePostLock,
        getEditedPostAttribute = _select.getEditedPostAttribute,
        getEditorSettings = _select.getEditorSettings;

    var _select2 = select('core'),
        getPostType = _select2.getPostType;

    return {
      isLocked: isPostLocked(),
      isTakeover: isPostLockTakeover(),
      user: getPostLockUser(),
      postId: getCurrentPostId(),
      postLockUtils: getEditorSettings().postLockUtils,
      activePostLock: getActivePostLock(),
      postType: getPostType(getEditedPostAttribute('type'))
    };
  }),
      isLocked = _useSelect.isLocked,
      isTakeover = _useSelect.isTakeover,
      user = _useSelect.user,
      postId = _useSelect.postId,
      postLockUtils = _useSelect.postLockUtils,
      activePostLock = _useSelect.activePostLock,
      postType = _useSelect.postType;

  Object(external_wp_element_["useEffect"])(function () {
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */
    function sendPostLock(data) {
      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */


    function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      var received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            avatar: received.lock_error.avatar_src
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */


    function releasePostLock() {
      if (isLocked || !activePostLock) {
        return;
      }

      var data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        var xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    } // Details on these events on the Heartbeat API docs
    // https://developer.wordpress.org/plugins/javascript/heartbeat-api/


    Object(external_wp_hooks_["addAction"])('heartbeat.send', hookName, sendPostLock);
    Object(external_wp_hooks_["addAction"])('heartbeat.tick', hookName, receivePostLock);
    window.addEventListener('beforeunload', releasePostLock);
    return function () {
      Object(external_wp_hooks_["removeAction"])('heartbeat.send', hookName);
      Object(external_wp_hooks_["removeAction"])('heartbeat.tick', hookName);
      window.removeEventListener('beforeunload', releasePostLock);
    };
  }, []);

  if (!isLocked) {
    return null;
  }

  var userDisplayName = user.name;
  var userAvatar = user.avatar;
  var unlockUrl = Object(external_wp_url_["addQueryArgs"])('post.php', {
    'get-post-lock': '1',
    lockKey: true,
    post: postId,
    action: 'edit',
    _wpnonce: postLockUtils.nonce
  });
  var allPostsUrl = getWPAdminURL('edit.php', {
    post_type: Object(external_lodash_["get"])(postType, ['slug'])
  });

  var allPostsLabel = Object(external_wp_i18n_["__"])('Exit the Editor');

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: isTakeover ? Object(external_wp_i18n_["__"])('Someone else has taken over this post.') : Object(external_wp_i18n_["__"])('This post is already being edited.'),
    focusOnMount: true,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    className: "editor-post-locked-modal"
  }, !!userAvatar && Object(external_wp_element_["createElement"])("img", {
    src: userAvatar,
    alt: Object(external_wp_i18n_["__"])('Avatar'),
    className: "editor-post-locked-modal__avatar"
  }), !!isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  Object(external_wp_i18n_["__"])('%s now has editing control of this post. Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : Object(external_wp_i18n_["__"])('Another user now has editing control of this post. Don’t worry, your changes up to this moment have been saved.')), Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-locked-modal__buttons"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: allPostsUrl
  }, allPostsLabel))), !isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  Object(external_wp_i18n_["__"])('%s is currently working on this post, which means you cannot make changes, unless you take over.'), userDisplayName) : Object(external_wp_i18n_["__"])('Another user is currently working on this post, which means you cannot make changes, unless you take over.')), Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-locked-modal__buttons"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    href: allPostsUrl
  }, allPostsLabel), Object(external_wp_element_["createElement"])(post_preview_button, null), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: unlockUrl
  }, Object(external_wp_i18n_["__"])('Take Over')))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostPendingStatusCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isPublished = _ref.isPublished,
      children = _ref.children;

  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_pending_status_check = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPost = _select.getCurrentPost;

  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPendingStatus(_ref) {
  var status = _ref.status,
      onUpdateStatus = _ref.onUpdateStatus;

  var togglePendingStatus = function togglePendingStatus() {
    var updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return Object(external_wp_element_["createElement"])(post_pending_status_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Pending review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ var post_pending_status = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  return {
    status: select('core/editor').getEditedPostAttribute('status')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateStatus: function onUpdateStatus(status) {
      dispatch('core/editor').editPost({
        status: status
      });
    }
  };
}))(PostPendingStatus));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js



/**
 * WordPress dependencies
 */





function PostPingbacks(_ref) {
  var _ref$pingStatus = _ref.pingStatus,
      pingStatus = _ref$pingStatus === void 0 ? 'open' : _ref$pingStatus,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["pingStatus"]);

  var onTogglePingback = function onTogglePingback() {
    return props.editPost({
      ping_status: pingStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Allow pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ var post_pingbacks = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    pingStatus: select('core/editor').getEditedPostAttribute('ping_status')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostPingbacks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function PublishButtonLabel(_ref) {
  var isPublished = _ref.isPublished,
      isBeingScheduled = _ref.isBeingScheduled,
      isSaving = _ref.isSaving,
      isPublishing = _ref.isPublishing,
      hasPublishAction = _ref.hasPublishAction,
      isAutosaving = _ref.isAutosaving,
      hasNonPostEntityChanges = _ref.hasNonPostEntityChanges;

  if (isPublishing) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Scheduling…');
  }

  if (!hasPublishAction) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Submit for Review…') : Object(external_wp_i18n_["__"])('Submit for Review');
  } else if (isPublished) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Update…') : Object(external_wp_i18n_["__"])('Update');
  } else if (isBeingScheduled) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Schedule');
  }

  return Object(external_wp_i18n_["__"])('Publish');
}
/* harmony default export */ var post_publish_button_label = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, _ref2) {
  var forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      isSavingPost = _select.isSavingPost,
      isPublishingPost = _select.isPublishingPost,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      isAutosavingPost = _select.isAutosavingPost;

  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js









function post_publish_button_createSuper(Derived) { var hasNativeReflectConstruct = post_publish_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function post_publish_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


var post_publish_button_PostPublishButton = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostPublishButton, _Component);

  var _super = post_publish_button_createSuper(PostPublishButton);

  function PostPublishButton(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishButton);

    _this = _super.call(this, props);
    _this.buttonNode = Object(external_wp_element_["createRef"])();
    _this.createOnClick = _this.createOnClick.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.closeEntitiesSavedStates = _this.closeEntitiesSavedStates.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      entitiesSavedStatesCallback: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.buttonNode.current.focus();
      }
    }
  }, {
    key: "createOnClick",
    value: function createOnClick(callback) {
      var _this2 = this;

      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var hasNonPostEntityChanges = _this2.props.hasNonPostEntityChanges;

        if (hasNonPostEntityChanges) {
          // The modal for multiple entity saving will open,
          // hold the callback for saving/publishing the post
          // so that we can call it if the post entity is checked.
          _this2.setState({
            entitiesSavedStatesCallback: function entitiesSavedStatesCallback() {
              return callback.apply(void 0, args);
            }
          }); // Open the save panel by setting its callback.
          // To set a function on the useState hook, we must set it
          // with another function (() => myFunction). Passing the
          // function on its own will cause an error when called.


          _this2.props.setEntitiesSavedStatesCallback(function () {
            return _this2.closeEntitiesSavedStates;
          });

          return external_lodash_["noop"];
        }

        return callback.apply(void 0, args);
      };
    }
  }, {
    key: "closeEntitiesSavedStates",
    value: function closeEntitiesSavedStates(savedEntities) {
      var _this$props = this.props,
          postType = _this$props.postType,
          postId = _this$props.postId;
      var entitiesSavedStatesCallback = this.state.entitiesSavedStatesCallback;
      this.setState({
        entitiesSavedStatesCallback: false
      }, function () {
        if (savedEntities && Object(external_lodash_["some"])(savedEntities, function (elt) {
          return elt.kind === 'postType' && elt.name === postType && elt.key === postId;
        })) {
          // The post entity was checked, call the held callback from `createOnClick`.
          entitiesSavedStatesCallback();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          forceIsDirty = _this$props2.forceIsDirty,
          forceIsSaving = _this$props2.forceIsSaving,
          hasPublishAction = _this$props2.hasPublishAction,
          isBeingScheduled = _this$props2.isBeingScheduled,
          isOpen = _this$props2.isOpen,
          isPostSavingLocked = _this$props2.isPostSavingLocked,
          isPublishable = _this$props2.isPublishable,
          isPublished = _this$props2.isPublished,
          isSaveable = _this$props2.isSaveable,
          isSaving = _this$props2.isSaving,
          isAutoSaving = _this$props2.isAutoSaving,
          isToggle = _this$props2.isToggle,
          onSave = _this$props2.onSave,
          onStatusChange = _this$props2.onStatusChange,
          _this$props2$onSubmit = _this$props2.onSubmit,
          onSubmit = _this$props2$onSubmit === void 0 ? external_lodash_["noop"] : _this$props2$onSubmit,
          onToggle = _this$props2.onToggle,
          visibility = _this$props2.visibility,
          hasNonPostEntityChanges = _this$props2.hasNonPostEntityChanges;
      var isButtonDisabled = isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty;
      var isToggleDisabled = isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty;
      var publishStatus;

      if (!hasPublishAction) {
        publishStatus = 'pending';
      } else if (visibility === 'private') {
        publishStatus = 'private';
      } else if (isBeingScheduled) {
        publishStatus = 'future';
      } else {
        publishStatus = 'publish';
      }

      var onClickButton = function onClickButton() {
        if (isButtonDisabled) {
          return;
        }

        onSubmit();
        onStatusChange(publishStatus);
        onSave();
      };

      var onClickToggle = function onClickToggle() {
        if (isToggleDisabled) {
          return;
        }

        onToggle();
      };

      var buttonProps = {
        'aria-disabled': isButtonDisabled && !hasNonPostEntityChanges,
        className: 'editor-post-publish-button',
        isBusy: !isAutoSaving && isSaving && isPublished,
        isPrimary: true,
        onClick: this.createOnClick(onClickButton)
      };
      var toggleProps = {
        'aria-disabled': isToggleDisabled && !hasNonPostEntityChanges,
        'aria-expanded': isOpen,
        className: 'editor-post-publish-panel__toggle',
        isBusy: isSaving && isPublished,
        isPrimary: true,
        onClick: this.createOnClick(onClickToggle)
      };
      var toggleChildren = isBeingScheduled ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Publish');
      var buttonChildren = Object(external_wp_element_["createElement"])(post_publish_button_label, {
        forceIsSaving: forceIsSaving,
        hasNonPostEntityChanges: hasNonPostEntityChanges
      });
      var componentProps = isToggle ? toggleProps : buttonProps;
      var componentChildren = isToggle ? toggleChildren : buttonChildren;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({
        ref: this.buttonNode
      }, componentProps, {
        className: classnames_default()(componentProps.className, 'editor-post-publish-button__button', {
          'has-changes-dot': hasNonPostEntityChanges
        })
      }), componentChildren));
    }
  }]);

  return PostPublishButton;
}(external_wp_element_["Component"]);
/* harmony default export */ var post_publish_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isAutosavingPost = _select.isAutosavingPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      getEditedPostVisibility = _select.getEditedPostVisibility,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostPublishable = _select.isEditedPostPublishable,
      isPostSavingLocked = _select.isPostSavingLocked,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPostId = _select.getCurrentPostId,
      hasNonPostEntityChanges = _select.hasNonPostEntityChanges;

  var _isAutoSaving = isAutosavingPost();

  return {
    isSaving: isSavingPost() || _isAutoSaving,
    isAutoSaving: _isAutoSaving,
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    hasNonPostEntityChanges: hasNonPostEntityChanges()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onStatusChange: function onStatusChange(status) {
      return editPost({
        status: status
      }, {
        undoIgnore: true
      });
    },
    onSave: savePost
  };
})])(post_publish_button_PostPublishButton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js
/**
 * WordPress dependencies
 */

var visibilityOptions = [{
  value: 'public',
  label: Object(external_wp_i18n_["__"])('Public'),
  info: Object(external_wp_i18n_["__"])('Visible to everyone.')
}, {
  value: 'private',
  label: Object(external_wp_i18n_["__"])('Private'),
  info: Object(external_wp_i18n_["__"])('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: Object(external_wp_i18n_["__"])('Password Protected'),
  info: Object(external_wp_i18n_["__"])('Protected with a password you choose. Only those with the password can view this post.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js








function post_visibility_createSuper(Derived) { var hasNativeReflectConstruct = post_visibility_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function post_visibility_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var post_visibility_PostVisibility = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostVisibility, _Component);

  var _super = post_visibility_createSuper(PostVisibility);

  function PostVisibility(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostVisibility);

    _this = _super.apply(this, arguments);
    _this.setPublic = _this.setPublic.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setPrivate = _this.setPrivate.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setPasswordProtected = _this.setPasswordProtected.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.updatePassword = _this.updatePassword.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      hasPassword: !!props.password
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostVisibility, [{
    key: "setPublic",
    value: function setPublic() {
      var _this$props = this.props,
          visibility = _this$props.visibility,
          onUpdateVisibility = _this$props.onUpdateVisibility,
          status = _this$props.status;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status);
      this.setState({
        hasPassword: false
      });
    }
  }, {
    key: "setPrivate",
    value: function setPrivate() {
      if ( // eslint-disable-next-line no-alert
      !window.confirm(Object(external_wp_i18n_["__"])('Would you like to privately publish this post now?'))) {
        return;
      }

      var _this$props2 = this.props,
          onUpdateVisibility = _this$props2.onUpdateVisibility,
          onSave = _this$props2.onSave;
      onUpdateVisibility('private');
      this.setState({
        hasPassword: false
      });
      onSave();
    }
  }, {
    key: "setPasswordProtected",
    value: function setPasswordProtected() {
      var _this$props3 = this.props,
          visibility = _this$props3.visibility,
          onUpdateVisibility = _this$props3.onUpdateVisibility,
          status = _this$props3.status,
          password = _this$props3.password;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
      this.setState({
        hasPassword: true
      });
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(event) {
      var _this$props4 = this.props,
          status = _this$props4.status,
          onUpdateVisibility = _this$props4.onUpdateVisibility;
      onUpdateVisibility(status, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          visibility = _this$props5.visibility,
          password = _this$props5.password,
          instanceId = _this$props5.instanceId;
      var visibilityHandlers = {
        public: {
          onSelect: this.setPublic,
          checked: visibility === 'public' && !this.state.hasPassword
        },
        private: {
          onSelect: this.setPrivate,
          checked: visibility === 'private'
        },
        password: {
          onSelect: this.setPasswordProtected,
          checked: this.state.hasPassword
        }
      };
      return [Object(external_wp_element_["createElement"])("fieldset", {
        key: "visibility-selector",
        className: "editor-post-visibility__dialog-fieldset"
      }, Object(external_wp_element_["createElement"])("legend", {
        className: "editor-post-visibility__dialog-legend"
      }, Object(external_wp_i18n_["__"])('Post Visibility')), visibilityOptions.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label,
            info = _ref.info;
        return Object(external_wp_element_["createElement"])("div", {
          key: value,
          className: "editor-post-visibility__choice"
        }, Object(external_wp_element_["createElement"])("input", {
          type: "radio",
          name: "editor-post-visibility__setting-".concat(instanceId),
          value: value,
          onChange: visibilityHandlers[value].onSelect,
          checked: visibilityHandlers[value].checked,
          id: "editor-post-".concat(value, "-").concat(instanceId),
          "aria-describedby": "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-radio"
        }), Object(external_wp_element_["createElement"])("label", {
          htmlFor: "editor-post-".concat(value, "-").concat(instanceId),
          className: "editor-post-visibility__dialog-label"
        }, label), Object(external_wp_element_["createElement"])("p", {
          id: "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-info"
        }, info));
      })), this.state.hasPassword && Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-visibility__dialog-password",
        key: "password-selector"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
        as: "label",
        htmlFor: "editor-post-visibility__dialog-password-input-".concat(instanceId)
      }, Object(external_wp_i18n_["__"])('Create password')), Object(external_wp_element_["createElement"])("input", {
        className: "editor-post-visibility__dialog-password-input",
        id: "editor-post-visibility__dialog-password-input-".concat(instanceId),
        type: "text",
        onChange: this.updatePassword,
        value: password,
        placeholder: Object(external_wp_i18n_["__"])('Use a secure password')
      }))];
    }
  }]);

  return PostVisibility;
}(external_wp_element_["Component"]);
/* harmony default export */ var post_visibility = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditedPostVisibility = _select.getEditedPostVisibility;

  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      savePost = _dispatch.savePost,
      editPost = _dispatch.editPost;

  return {
    onSave: savePost,
    onUpdateVisibility: function onUpdateVisibility(status) {
      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      editPost({
        status: status,
        password: password
      });
    }
  };
}), external_wp_compose_["withInstanceId"]])(post_visibility_PostVisibility));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostVisibilityLabel(_ref) {
  var visibility = _ref.visibility;

  var getVisibilityLabel = function getVisibilityLabel() {
    return Object(external_lodash_["find"])(visibilityOptions, {
      value: visibility
    }).label;
  };

  return getVisibilityLabel(visibility);
}

/* harmony default export */ var post_visibility_label = (Object(external_wp_data_["withSelect"])(function (select) {
  return {
    visibility: select('core/editor').getEditedPostVisibility()
  };
})(PostVisibilityLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js


/**
 * WordPress dependencies
 */





function PostSchedule(_ref) {
  var date = _ref.date,
      onUpdateDate = _ref.onUpdateDate;
  var ref = Object(external_wp_element_["useRef"])();

  var settings = Object(external_wp_date_["__experimentalGetSettings"])(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );

  function onChange(newDate) {
    onUpdateDate(newDate);
    var ownerDocument = ref.current.ownerDocument;
    ownerDocument.activeElement.blur();
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["DateTimePicker"], {
    ref: ref,
    currentDate: date,
    onChange: onChange,
    is12Hour: is12HourTime
  });
}
/* harmony default export */ var post_schedule = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateDate: function onUpdateDate(date) {
      dispatch('core/editor').editPost({
        date: date
      });
    }
  };
})])(PostSchedule));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js
/**
 * WordPress dependencies
 */



function PostScheduleLabel(_ref) {
  var date = _ref.date,
      isFloating = _ref.isFloating;

  var settings = Object(external_wp_date_["__experimentalGetSettings"])();

  return date && !isFloating ? Object(external_wp_date_["format"])("".concat(settings.formats.date, " ").concat(settings.formats.time), date) : Object(external_wp_i18n_["__"])('Immediately');
}
/* harmony default export */ var post_schedule_label = (Object(external_wp_data_["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js









function flat_term_selector_createSuper(Derived) { var hasNativeReflectConstruct = flat_term_selector_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function flat_term_selector_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function flat_term_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function flat_term_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { flat_term_selector_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { flat_term_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Module constants
 */

var MAX_TERMS_SUGGESTIONS = 20;
var DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name'
}; // Lodash unescape function handles &#39; but not &#039; which may be return in some API requests.

var flat_term_selector_unescapeString = function unescapeString(arg) {
  return Object(external_lodash_["unescape"])(arg.replace('&#039;', "'"));
};

var isSameTermName = function isSameTermName(termA, termB) {
  return flat_term_selector_unescapeString(termA).toLowerCase() === flat_term_selector_unescapeString(termB).toLowerCase();
};
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */


var unescapeTerm = function unescapeTerm(term) {
  return flat_term_selector_objectSpread(flat_term_selector_objectSpread({}, term), {}, {
    name: flat_term_selector_unescapeString(term.name)
  });
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */


var flat_term_selector_unescapeTerms = function unescapeTerms(terms) {
  return Object(external_lodash_["map"])(terms, unescapeTerm);
};

var flat_term_selector_FlatTermSelector = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(FlatTermSelector, _Component);

  var _super = flat_term_selector_createSuper(FlatTermSelector);

  function FlatTermSelector() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FlatTermSelector);

    _this = _super.apply(this, arguments);
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.searchTerms = Object(external_lodash_["throttle"])(_this.searchTerms.bind(Object(assertThisInitialized["a" /* default */])(_this)), 500);
    _this.findOrCreateTerm = _this.findOrCreateTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      loading: !Object(external_lodash_["isEmpty"])(_this.props.terms),
      availableTerms: [],
      selectedTerms: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FlatTermSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(external_lodash_["isEmpty"])(this.props.terms)) {
        this.initRequest = this.fetchTerms({
          include: this.props.terms.join(','),
          per_page: -1
        });
        this.initRequest.then(function () {
          _this2.setState({
            loading: false
          });
        }, function (xhr) {
          if (xhr.statusText === 'abort') {
            return;
          }

          _this2.setState({
            loading: false
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_lodash_["invoke"])(this.initRequest, ['abort']);
      Object(external_lodash_["invoke"])(this.searchRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.terms !== this.props.terms) {
        this.updateSelectedTerms(this.props.terms);
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var taxonomy = this.props.taxonomy;

      var query = flat_term_selector_objectSpread(flat_term_selector_objectSpread({}, DEFAULT_QUERY), params);

      var request = external_wp_apiFetch_default()({
        path: Object(external_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), query)
      });
      request.then(flat_term_selector_unescapeTerms).then(function (terms) {
        _this3.setState(function (state) {
          return {
            availableTerms: state.availableTerms.concat(terms.filter(function (term) {
              return !Object(external_lodash_["find"])(state.availableTerms, function (availableTerm) {
                return availableTerm.id === term.id;
              });
            }))
          };
        });

        _this3.updateSelectedTerms(_this3.props.terms);
      });
      return request;
    }
  }, {
    key: "updateSelectedTerms",
    value: function updateSelectedTerms() {
      var _this4 = this;

      var terms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var selectedTerms = terms.reduce(function (accumulator, termId) {
        var termObject = Object(external_lodash_["find"])(_this4.state.availableTerms, function (term) {
          return term.id === termId;
        });

        if (termObject) {
          accumulator.push(termObject.name);
        }

        return accumulator;
      }, []);
      this.setState({
        selectedTerms: selectedTerms
      });
    }
  }, {
    key: "findOrCreateTerm",
    value: function findOrCreateTerm(termName) {
      var _this5 = this;

      var taxonomy = this.props.taxonomy;
      var termNameEscaped = Object(external_lodash_["escape"])(termName); // Tries to create a term or fetch it if it already exists.

      return external_wp_apiFetch_default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: termNameEscaped
        }
      }).catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // If the terms exist, fetch it instead of creating a new one.
          _this5.addRequest = external_wp_apiFetch_default()({
            path: Object(external_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), flat_term_selector_objectSpread(flat_term_selector_objectSpread({}, DEFAULT_QUERY), {}, {
              search: termNameEscaped
            }))
          }).then(flat_term_selector_unescapeTerms);
          return _this5.addRequest.then(function (searchResult) {
            return Object(external_lodash_["find"])(searchResult, function (result) {
              return isSameTermName(result.name, termName);
            });
          });
        }

        return Promise.reject(error);
      }).then(unescapeTerm);
    }
  }, {
    key: "onChange",
    value: function onChange(termNames) {
      var _this6 = this;

      var uniqueTerms = Object(external_lodash_["uniqBy"])(termNames, function (term) {
        return term.toLowerCase();
      });
      this.setState({
        selectedTerms: uniqueTerms
      });
      var newTermNames = uniqueTerms.filter(function (termName) {
        return !Object(external_lodash_["find"])(_this6.state.availableTerms, function (term) {
          return isSameTermName(term.name, termName);
        });
      });

      var termNamesToIds = function termNamesToIds(names, availableTerms) {
        return names.map(function (termName) {
          return Object(external_lodash_["find"])(availableTerms, function (term) {
            return isSameTermName(term.name, termName);
          }).id;
        });
      };

      if (newTermNames.length === 0) {
        return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, this.state.availableTerms), this.props.taxonomy.rest_base);
      }

      Promise.all(newTermNames.map(this.findOrCreateTerm)).then(function (newTerms) {
        var newAvailableTerms = _this6.state.availableTerms.concat(newTerms);

        _this6.setState({
          availableTerms: newAvailableTerms
        });

        return _this6.props.onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms), _this6.props.taxonomy.rest_base);
      });
    }
  }, {
    key: "searchTerms",
    value: function searchTerms() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      Object(external_lodash_["invoke"])(this.searchRequest, ['abort']);

      if (search.length >= 3) {
        this.searchRequest = this.fetchTerms({
          search: search
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slug = _this$props.slug,
          taxonomy = _this$props.taxonomy,
          hasAssignAction = _this$props.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state = this.state,
          loading = _this$state.loading,
          availableTerms = _this$state.availableTerms,
          selectedTerms = _this$state.selectedTerms;
      var termNames = availableTerms.map(function (term) {
        return term.name;
      });
      var newTermLabel = Object(external_lodash_["get"])(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? Object(external_wp_i18n_["__"])('Add new tag') : Object(external_wp_i18n_["__"])('Add new Term'));
      var singularName = Object(external_lodash_["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(external_wp_i18n_["__"])('Tag') : Object(external_wp_i18n_["__"])('Term'));
      var termAddedLabel = Object(external_wp_i18n_["sprintf"])(
      /* translators: %s: term name. */
      Object(external_wp_i18n_["_x"])('%s added', 'term'), singularName);
      var termRemovedLabel = Object(external_wp_i18n_["sprintf"])(
      /* translators: %s: term name. */
      Object(external_wp_i18n_["_x"])('%s removed', 'term'), singularName);
      var removeTermLabel = Object(external_wp_i18n_["sprintf"])(
      /* translators: %s: term name. */
      Object(external_wp_i18n_["_x"])('Remove %s', 'term'), singularName);
      return Object(external_wp_element_["createElement"])(external_wp_components_["FormTokenField"], {
        value: selectedTerms,
        suggestions: termNames,
        onChange: this.onChange,
        onInputChange: this.searchTerms,
        maxSuggestions: MAX_TERMS_SUGGESTIONS,
        disabled: loading,
        label: newTermLabel,
        messages: {
          added: termAddedLabel,
          removed: termRemovedLabel,
          remove: removeTermLabel
        }
      });
    }
  }]);

  return FlatTermSelector;
}(external_wp_element_["Component"]);

/* harmony default export */ var flat_term_selector = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(defineProperty["a" /* default */])({}, restBase, terms));
    }
  };
}), Object(external_wp_components_["withFilters"])('editor.PostTaxonomyType'))(flat_term_selector_FlatTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js







function maybe_tags_panel_createSuper(Derived) { var hasNativeReflectConstruct = maybe_tags_panel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function maybe_tags_panel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var maybe_tags_panel_TagsPanel = function TagsPanel() {
  var panelBodyTitle = [Object(external_wp_i18n_["__"])('Suggestion:'), Object(external_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_wp_i18n_["__"])('Add tags'))];
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), Object(external_wp_element_["createElement"])(flat_term_selector, {
    slug: 'post_tag'
  }));
};

var maybe_tags_panel_MaybeTagsPanel = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(MaybeTagsPanel, _Component);

  var _super = maybe_tags_panel_createSuper(MaybeTagsPanel);

  function MaybeTagsPanel(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MaybeTagsPanel);

    _this = _super.call(this, props);
    _this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
    return _this;
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  Object(createClass["a" /* default */])(MaybeTagsPanel, [{
    key: "render",
    value: function render() {
      if (!this.state.hadTagsWhenOpeningThePanel) {
        return Object(external_wp_element_["createElement"])(maybe_tags_panel_TagsPanel, null);
      }

      return null;
    }
  }]);

  return MaybeTagsPanel;
}(external_wp_element_["Component"]);

/* harmony default export */ var maybe_tags_panel = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  var tagsTaxonomy = select('core').getTaxonomy('post_tag');
  var tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && Object(external_lodash_["some"])(tagsTaxonomy.types, function (type) {
      return type === postType;
    }),
    hasTags: tags && tags.length
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref) {
  var areTagsFetched = _ref.areTagsFetched,
      isPostTypeSupported = _ref.isPostTypeSupported;
  return isPostTypeSupported && areTagsFetched;
}))(maybe_tags_panel_MaybeTagsPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var maybe_post_format_panel_getSuggestion = function getSuggestion(supportedFormats, suggestedPostFormat) {
  var formats = POST_FORMATS.filter(function (format) {
    return Object(external_lodash_["includes"])(supportedFormats, format.id);
  });
  return Object(external_lodash_["find"])(formats, function (format) {
    return format.id === suggestedPostFormat;
  });
};

var maybe_post_format_panel_PostFormatSuggestion = function PostFormatSuggestion(_ref) {
  var suggestedPostFormat = _ref.suggestedPostFormat,
      suggestionText = _ref.suggestionText,
      onUpdatePostFormat = _ref.onUpdatePostFormat;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestedPostFormat);
    }
  }, suggestionText);
};

function PostFormatPanel() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        getEditedPostAttribute = _select.getEditedPostAttribute,
        getSuggestedPostFormat = _select.getSuggestedPostFormat;

    var supportedFormats = Object(external_lodash_["get"])(select('core').getThemeSupports(), ['formats'], []);
    return {
      currentPostFormat: getEditedPostAttribute('format'),
      suggestion: maybe_post_format_panel_getSuggestion(supportedFormats, getSuggestedPostFormat())
    };
  }, []),
      currentPostFormat = _useSelect.currentPostFormat,
      suggestion = _useSelect.suggestion;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var onUpdatePostFormat = function onUpdatePostFormat(format) {
    return editPost({
      format: format
    });
  };

  var panelBodyTitle = [Object(external_wp_i18n_["__"])('Suggestion:'), Object(external_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_wp_i18n_["__"])('Use a post format'))];

  if (!suggestion || suggestion.id === currentPostFormat) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_element_["createElement"])(maybe_post_format_panel_PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: post format */
    Object(external_wp_i18n_["__"])('Apply the "%1$s" format.'), suggestion.caption)
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








function PostPublishPanelPrepublish(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      children = _ref.children;
  var prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to submit for review?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to schedule?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to publish?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Double-check your settings before publishing.');
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-publish-panel__prepublish"
  }, Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("strong", null, prePublishTitle)), Object(external_wp_element_["createElement"])("p", null, prePublishBodyText), hasPublishAction && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Visibility:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_visibility_label, null))]
  }, Object(external_wp_element_["createElement"])(post_visibility, null)), Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Publish:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_schedule_label, null))]
  }, Object(external_wp_element_["createElement"])(post_schedule, null))), Object(external_wp_element_["createElement"])(PostFormatPanel, null), Object(external_wp_element_["createElement"])(maybe_tags_panel, null), children);
}

/* harmony default export */ var prepublish = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled;

  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: isEditedPostBeingScheduled()
  };
})(PostPublishPanelPrepublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js








function postpublish_createSuper(Derived) { var hasNativeReflectConstruct = postpublish_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function postpublish_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var POSTNAME = '%postname%';
/**
 * Returns URL for a future post.
 *
 * @param {Object} post         Post object.
 *
 * @return {string} PostPublish URL.
 */

var getFuturePostUrl = function getFuturePostUrl(post) {
  var slug = post.slug;

  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }

  return post.permalink_template;
};

var postpublish_PostPublishPanelPostpublish = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostPublishPanelPostpublish, _Component);

  var _super = postpublish_createSuper(PostPublishPanelPostpublish);

  function PostPublishPanelPostpublish() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishPanelPostpublish);

    _this = _super.apply(this, arguments);
    _this.state = {
      showCopyConfirmation: false
    };
    _this.onCopy = _this.onCopy.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectInput = _this.onSelectInput.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.postLink = Object(external_wp_element_["createRef"])();
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishPanelPostpublish, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.postLink.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissCopyConfirmation);
    }
  }, {
    key: "onCopy",
    value: function onCopy() {
      var _this2 = this;

      this.setState({
        showCopyConfirmation: true
      });
      clearTimeout(this.dismissCopyConfirmation);
      this.dismissCopyConfirmation = setTimeout(function () {
        _this2.setState({
          showCopyConfirmation: false
        });
      }, 4000);
    }
  }, {
    key: "onSelectInput",
    value: function onSelectInput(event) {
      event.target.select();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isScheduled = _this$props.isScheduled,
          post = _this$props.post,
          postType = _this$props.postType;
      var postLabel = Object(external_lodash_["get"])(postType, ['labels', 'singular_name']);
      var viewPostLabel = Object(external_lodash_["get"])(postType, ['labels', 'view_item']);
      var link = post.status === 'future' ? getFuturePostUrl(post) : post.link;
      var postPublishNonLinkHeader = isScheduled ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('is now scheduled. It will go live on'), ' ', Object(external_wp_element_["createElement"])(post_schedule_label, null), ".") : Object(external_wp_i18n_["__"])('is now live.');
      return Object(external_wp_element_["createElement"])("div", {
        className: "post-publish-panel__postpublish"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
        className: "post-publish-panel__postpublish-header"
      }, Object(external_wp_element_["createElement"])("a", {
        ref: this.postLink,
        href: link
      }, Object(external_wp_htmlEntities_["decodeEntities"])(post.title) || Object(external_wp_i18n_["__"])('(no title)')), ' ', postPublishNonLinkHeader), Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], null, Object(external_wp_element_["createElement"])("p", {
        className: "post-publish-panel__postpublish-subheader"
      }, Object(external_wp_element_["createElement"])("strong", null, Object(external_wp_i18n_["__"])('What’s next?'))), Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
        className: "post-publish-panel__postpublish-post-address",
        readOnly: true,
        label: Object(external_wp_i18n_["sprintf"])(
        /* translators: %s: post type singular name */
        Object(external_wp_i18n_["__"])('%s address'), postLabel),
        value: Object(external_wp_url_["safeDecodeURIComponent"])(link),
        onFocus: this.onSelectInput
      }), Object(external_wp_element_["createElement"])("div", {
        className: "post-publish-panel__postpublish-buttons"
      }, !isScheduled && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        href: link
      }, viewPostLabel), Object(external_wp_element_["createElement"])(external_wp_components_["ClipboardButton"], {
        isSecondary: true,
        text: link,
        onCopy: this.onCopy
      }, this.state.showCopyConfirmation ? Object(external_wp_i18n_["__"])('Copied!') : Object(external_wp_i18n_["__"])('Copy Link')))), children);
    }
  }]);

  return PostPublishPanelPostpublish;
}(external_wp_element_["Component"]);

/* harmony default export */ var postpublish = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getCurrentPost = _select.getCurrentPost,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(postpublish_PostPublishPanelPostpublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js










function post_publish_panel_createSuper(Derived) { var hasNativeReflectConstruct = post_publish_panel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function post_publish_panel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




var post_publish_panel_PostPublishPanel = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostPublishPanel, _Component);

  var _super = post_publish_panel_createSuper(PostPublishPanel);

  function PostPublishPanel() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishPanel);

    _this = _super.apply(this, arguments);
    _this.onSubmit = _this.onSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishPanel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Automatically collapse the publish sidebar when a post
      // is published and the user makes an edit.
      if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
        this.props.onClose();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          hasPublishAction = _this$props.hasPublishAction,
          isPostTypeViewable = _this$props.isPostTypeViewable;

      if (!hasPublishAction || !isPostTypeViewable) {
        onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          forceIsDirty = _this$props2.forceIsDirty,
          forceIsSaving = _this$props2.forceIsSaving,
          isBeingScheduled = _this$props2.isBeingScheduled,
          isPublished = _this$props2.isPublished,
          isPublishSidebarEnabled = _this$props2.isPublishSidebarEnabled,
          isScheduled = _this$props2.isScheduled,
          isSaving = _this$props2.isSaving,
          onClose = _this$props2.onClose,
          onTogglePublishSidebar = _this$props2.onTogglePublishSidebar,
          PostPublishExtension = _this$props2.PostPublishExtension,
          PrePublishExtension = _this$props2.PrePublishExtension,
          additionalProps = Object(objectWithoutProperties["a" /* default */])(_this$props2, ["forceIsDirty", "forceIsSaving", "isBeingScheduled", "isPublished", "isPublishSidebarEnabled", "isScheduled", "isSaving", "onClose", "onTogglePublishSidebar", "PostPublishExtension", "PrePublishExtension"]);

      var propsForPanel = Object(external_lodash_["omit"])(additionalProps, ['hasPublishAction', 'isDirty', 'isPostTypeViewable']);
      var isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
      var isPrePublish = !isPublishedOrScheduled && !isSaving;
      var isPostPublish = isPublishedOrScheduled && !isSaving;
      return Object(external_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
        className: "editor-post-publish-panel"
      }, propsForPanel), Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header"
      }, isPostPublish ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: onClose,
        icon: close_small["a" /* default */],
        label: Object(external_wp_i18n_["__"])('Close panel')
      }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header-publish-button"
      }, Object(external_wp_element_["createElement"])(post_publish_button, {
        focusOnMount: true,
        onSubmit: this.onSubmit,
        forceIsDirty: forceIsDirty,
        forceIsSaving: forceIsSaving
      })), Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header-cancel-button"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: onClose,
        isSecondary: true
      }, Object(external_wp_i18n_["__"])('Cancel'))))), Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__content"
      }, isPrePublish && Object(external_wp_element_["createElement"])(prepublish, null, PrePublishExtension && Object(external_wp_element_["createElement"])(PrePublishExtension, null)), isPostPublish && Object(external_wp_element_["createElement"])(postpublish, {
        focusOnMount: true
      }, PostPublishExtension && Object(external_wp_element_["createElement"])(PostPublishExtension, null)), isSaving && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)), Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__footer"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        label: Object(external_wp_i18n_["__"])('Always show pre-publish checks.'),
        checked: isPublishSidebarEnabled,
        onChange: onTogglePublishSidebar
      })));
    }
  }]);

  return PostPublishPanel;
}(external_wp_element_["Component"]);
/* harmony default export */ var post_publish_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPost = _select2.getCurrentPost,
      getEditedPostAttribute = _select2.getEditedPostAttribute,
      isCurrentPostPublished = _select2.isCurrentPostPublished,
      isCurrentPostScheduled = _select2.isCurrentPostScheduled,
      isEditedPostBeingScheduled = _select2.isEditedPostBeingScheduled,
      isEditedPostDirty = _select2.isEditedPostDirty,
      isSavingPost = _select2.isSavingPost;

  var _select3 = select('core/editor'),
      isPublishSidebarEnabled = _select3.isPublishSidebarEnabled;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, _ref) {
  var isPublishSidebarEnabled = _ref.isPublishSidebarEnabled;

  var _dispatch = dispatch('core/editor'),
      disablePublishSidebar = _dispatch.disablePublishSidebar,
      enablePublishSidebar = _dispatch.enablePublishSidebar;

  return {
    onTogglePublishSidebar: function onTogglePublishSidebar() {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), external_wp_components_["withFocusReturn"], external_wp_components_["withConstrainedTabbing"]])(post_publish_panel_PostPublishPanel));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__("iClF");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud.js


/**
 * WordPress dependencies
 */

var cloud = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M14.9 9c1.8.2 3.1 1.7 3.1 3.5 0 1.9-1.6 3.5-3.5 3.5h-10C2.6 16 1 14.4 1 12.5 1 10.7 2.3 9.3 4.1 9 4 8.9 4 8.7 4 8.5 4 7.1 5.1 6 6.5 6c.3 0 .7.1.9.2C8.1 4.9 9.4 4 11 4c2.2 0 4 1.8 4 4 0 .4-.1.7-.1 1z"
}));
/* harmony default export */ var library_cloud = (cloud);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var library_check = __webpack_require__("RMJe");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js


/**
 * WordPress dependencies
 */

var cloudUpload = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16H8v-3H5l4.5-4.5L14 13h-3v3h3.5c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5z"
}));
/* harmony default export */ var cloud_upload = (cloudUpload);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js


/**
 * WordPress dependencies
 */





function PostSwitchToDraftButton(_ref) {
  var isSaving = _ref.isSaving,
      isPublished = _ref.isPublished,
      isScheduled = _ref.isScheduled,
      onClick = _ref.onClick;
  var isMobileViewport = Object(external_wp_compose_["useViewportMatch"])('small', '<');

  if (!isPublished && !isScheduled) {
    return null;
  }

  var onSwitch = function onSwitch() {
    var alertMessage;

    if (isPublished) {
      alertMessage = Object(external_wp_i18n_["__"])('Are you sure you want to unpublish this post?');
    } else if (isScheduled) {
      alertMessage = Object(external_wp_i18n_["__"])('Are you sure you want to unschedule this post?');
    } // eslint-disable-next-line no-alert


    if (window.confirm(alertMessage)) {
      onClick();
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-switch-to-draft",
    onClick: onSwitch,
    disabled: isSaving,
    isTertiary: true
  }, isMobileViewport ? Object(external_wp_i18n_["__"])('Draft') : Object(external_wp_i18n_["__"])('Switch to draft'));
}

/* harmony default export */ var post_switch_to_draft_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onClick: function onClick() {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Component showing whether the post is saved or not and providing save
 * buttons.
 *
 * @param {Object} props               Component props.
 * @param {?boolean} props.forceIsDirty  Whether to force the post to be marked
 * as dirty.
 * @param {?boolean} props.forceIsSaving Whether to force the post to be marked
 * as being saved.
 * @param {?boolean} props.showIconLabels Whether interface buttons show labels instead of icons
 * @return {import('@wordpress/element').WPComponent} The component.
 */

function PostSavedState(_ref) {
  var forceIsDirty = _ref.forceIsDirty,
      forceIsSaving = _ref.forceIsSaving,
      _ref$showIconLabels = _ref.showIconLabels,
      showIconLabels = _ref$showIconLabels === void 0 ? false : _ref$showIconLabels;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      forceSavedMessage = _useState2[0],
      setForceSavedMessage = _useState2[1];

  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('small');

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _getCurrentPost$_link, _getCurrentPost, _getCurrentPost$_link2;

    var _select = select('core/editor'),
        isEditedPostNew = _select.isEditedPostNew,
        isCurrentPostPublished = _select.isCurrentPostPublished,
        isCurrentPostScheduled = _select.isCurrentPostScheduled,
        isEditedPostDirty = _select.isEditedPostDirty,
        isSavingPost = _select.isSavingPost,
        isEditedPostSaveable = _select.isEditedPostSaveable,
        getCurrentPost = _select.getCurrentPost,
        isAutosavingPost = _select.isAutosavingPost,
        getEditedPostAttribute = _select.getEditedPostAttribute;

    return {
      isAutosaving: isAutosavingPost(),
      isDirty: forceIsDirty || isEditedPostDirty(),
      isNew: isEditedPostNew(),
      isPending: 'pending' === getEditedPostAttribute('status'),
      isPublished: isCurrentPostPublished(),
      isSaving: forceIsSaving || isSavingPost(),
      isSaveable: isEditedPostSaveable(),
      isScheduled: isCurrentPostScheduled(),
      hasPublishAction: (_getCurrentPost$_link = (_getCurrentPost = getCurrentPost()) === null || _getCurrentPost === void 0 ? void 0 : (_getCurrentPost$_link2 = _getCurrentPost._links) === null || _getCurrentPost$_link2 === void 0 ? void 0 : _getCurrentPost$_link2['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false
    };
  }, [forceIsDirty, forceIsSaving]),
      isAutosaving = _useSelect.isAutosaving,
      isDirty = _useSelect.isDirty,
      isNew = _useSelect.isNew,
      isPending = _useSelect.isPending,
      isPublished = _useSelect.isPublished,
      isSaveable = _useSelect.isSaveable,
      isSaving = _useSelect.isSaving,
      isScheduled = _useSelect.isScheduled,
      hasPublishAction = _useSelect.hasPublishAction;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      savePost = _useDispatch.savePost;

  var wasSaving = Object(external_wp_compose_["usePrevious"])(isSaving);
  Object(external_wp_element_["useEffect"])(function () {
    var timeoutId;

    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(function () {
        setForceSavedMessage(false);
      }, 1000);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [isSaving]);

  if (isSaving) {
    // TODO: Classes generation should be common across all return
    // paths of this function, including proper naming convention for
    // the "Save Draft" button.
    var classes = classnames_default()('editor-post-saved-state', 'is-saving', Object(external_wp_components_["__unstableGetAnimateClassName"])({
      type: 'loading'
    }), {
      'is-autosaving': isAutosaving
    });
    return Object(external_wp_element_["createElement"])("span", {
      className: classes
    }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      icon: library_cloud
    }), isAutosaving ? Object(external_wp_i18n_["__"])('Autosaving') : Object(external_wp_i18n_["__"])('Saving'));
  }

  if (isPublished || isScheduled) {
    return Object(external_wp_element_["createElement"])(post_switch_to_draft_button, null);
  }

  if (!isSaveable) {
    return null;
  }

  if (forceSavedMessage || !isNew && !isDirty) {
    return Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-saved-state is-saved"
    }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      icon: library_check["a" /* default */]
    }), Object(external_wp_i18n_["__"])('Saved'));
  } // Once the post has been submitted for review this button
  // is not needed for the contributor role.


  if (!hasPublishAction && isPending) {
    return null;
  }
  /* translators: button label text should, if possible, be under 16 characters. */


  var label = isPending ? Object(external_wp_i18n_["__"])('Save as pending') : Object(external_wp_i18n_["__"])('Save draft');
  /* translators: button label text should, if possible, be under 16 characters. */

  var shortLabel = Object(external_wp_i18n_["__"])('Save');

  if (!isLargeViewport) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: "editor-post-save-draft",
      label: label,
      onClick: function onClick() {
        return savePost();
      },
      shortcut: external_wp_keycodes_["displayShortcut"].primary('s'),
      icon: cloud_upload
    }, showIconLabels && shortLabel);
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-save-draft",
    onClick: function onClick() {
      return savePost();
    },
    shortcut: external_wp_keycodes_["displayShortcut"].primary('s'),
    isTertiary: true
  }, label);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostScheduleCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      children = _ref.children;

  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_schedule_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/check.js


/**
 * Internal dependencies
 */

function PostSlugCheck(_ref) {
  var children = _ref.children;
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "slug"
  }, children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js








function post_slug_createSuper(Derived) { var hasNativeReflectConstruct = post_slug_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function post_slug_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var post_slug_PostSlug = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PostSlug, _Component);

  var _super = post_slug_createSuper(PostSlug);

  function PostSlug(_ref) {
    var _this;

    var postSlug = _ref.postSlug,
        postTitle = _ref.postTitle,
        postID = _ref.postID;

    Object(classCallCheck["a" /* default */])(this, PostSlug);

    _this = _super.apply(this, arguments);
    _this.state = {
      editedSlug: Object(external_wp_url_["safeDecodeURIComponent"])(postSlug) || cleanForSlug(postTitle) || postID
    };
    _this.setSlug = _this.setSlug.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostSlug, [{
    key: "setSlug",
    value: function setSlug(event) {
      var _this$props = this.props,
          postSlug = _this$props.postSlug,
          onUpdateSlug = _this$props.onUpdateSlug;
      var value = event.target.value;
      var editedSlug = cleanForSlug(value);

      if (editedSlug === postSlug) {
        return;
      }

      onUpdateSlug(editedSlug);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var instanceId = this.props.instanceId;
      var editedSlug = this.state.editedSlug;
      var inputId = 'editor-post-slug-' + instanceId;
      return Object(external_wp_element_["createElement"])(PostSlugCheck, null, Object(external_wp_element_["createElement"])("label", {
        htmlFor: inputId
      }, Object(external_wp_i18n_["__"])('Slug')), Object(external_wp_element_["createElement"])("input", {
        type: "text",
        id: inputId,
        value: editedSlug,
        onChange: function onChange(event) {
          return _this2.setState({
            editedSlug: event.target.value
          });
        },
        onBlur: this.setSlug,
        className: "editor-post-slug__input"
      }));
    }
  }]);

  return PostSlug;
}(external_wp_element_["Component"]);
/* harmony default export */ var post_slug = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _getCurrentPost = getCurrentPost(),
      id = _getCurrentPost.id;

  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateSlug: function onUpdateSlug(slug) {
      editPost({
        slug: slug
      });
    }
  };
}), external_wp_compose_["withInstanceId"]])(post_slug_PostSlug));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostStickyCheck(_ref) {
  var hasStickyAction = _ref.hasStickyAction,
      postType = _ref.postType,
      children = _ref.children;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_sticky_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasStickyAction: Object(external_lodash_["get"])(post, ['_links', 'wp:action-sticky'], false),
    postType: select('core/editor').getCurrentPostType()
  };
})])(PostStickyCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostSticky(_ref) {
  var onUpdateSticky = _ref.onUpdateSticky,
      _ref$postSticky = _ref.postSticky,
      postSticky = _ref$postSticky === void 0 ? false : _ref$postSticky;
  return Object(external_wp_element_["createElement"])(post_sticky_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Stick to the top of the blog'),
    checked: postSticky,
    onChange: function onChange() {
      return onUpdateSticky(!postSticky);
    }
  }));
}
/* harmony default export */ var post_sticky = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    postSticky: select('core/editor').getEditedPostAttribute('sticky')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateSticky: function onUpdateSticky(postSticky) {
      dispatch('core/editor').editPost({
        sticky: postSticky
      });
    }
  };
})])(PostSticky));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js










function hierarchical_term_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hierarchical_term_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hierarchical_term_selector_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hierarchical_term_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hierarchical_term_selector_createSuper(Derived) { var hasNativeReflectConstruct = hierarchical_term_selector_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function hierarchical_term_selector_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var hierarchical_term_selector_DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent'
};
var MIN_TERMS_COUNT_FOR_FILTER = 8;

var hierarchical_term_selector_HierarchicalTermSelector = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(HierarchicalTermSelector, _Component);

  var _super = hierarchical_term_selector_createSuper(HierarchicalTermSelector);

  function HierarchicalTermSelector() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HierarchicalTermSelector);

    _this = _super.apply(this, arguments);
    _this.findTerm = _this.findTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeFormName = _this.onChangeFormName.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeFormParent = _this.onChangeFormParent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onAddTerm = _this.onAddTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onToggleForm = _this.onToggleForm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setFilterValue = _this.setFilterValue.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.sortBySelected = _this.sortBySelected.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      loading: true,
      availableTermsTree: [],
      availableTerms: [],
      adding: false,
      formName: '',
      formParent: '',
      showForm: false,
      filterValue: '',
      filteredTermsTree: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(HierarchicalTermSelector, [{
    key: "onChange",
    value: function onChange(termId) {
      var _this$props = this.props,
          onUpdateTerms = _this$props.onUpdateTerms,
          _this$props$terms = _this$props.terms,
          terms = _this$props$terms === void 0 ? [] : _this$props$terms,
          taxonomy = _this$props.taxonomy;
      var hasTerm = terms.indexOf(termId) !== -1;
      var newTerms = hasTerm ? Object(external_lodash_["without"])(terms, termId) : [].concat(Object(toConsumableArray["a" /* default */])(terms), [termId]);
      onUpdateTerms(newTerms, taxonomy.rest_base);
    }
  }, {
    key: "onChangeFormName",
    value: function onChangeFormName(event) {
      var newValue = event.target.value.trim() === '' ? '' : event.target.value;
      this.setState({
        formName: newValue
      });
    }
  }, {
    key: "onChangeFormParent",
    value: function onChangeFormParent(newParent) {
      this.setState({
        formParent: newParent
      });
    }
  }, {
    key: "onToggleForm",
    value: function onToggleForm() {
      this.setState(function (state) {
        return {
          showForm: !state.showForm
        };
      });
    }
  }, {
    key: "findTerm",
    value: function findTerm(terms, parent, name) {
      return Object(external_lodash_["find"])(terms, function (term) {
        return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
      });
    }
  }, {
    key: "onAddTerm",
    value: function onAddTerm(event) {
      var _this2 = this;

      event.preventDefault();
      var _this$props2 = this.props,
          onUpdateTerms = _this$props2.onUpdateTerms,
          taxonomy = _this$props2.taxonomy,
          terms = _this$props2.terms,
          slug = _this$props2.slug;
      var _this$state = this.state,
          formName = _this$state.formName,
          formParent = _this$state.formParent,
          adding = _this$state.adding,
          availableTerms = _this$state.availableTerms;

      if (formName === '' || adding) {
        return;
      } // check if the term we are adding already exists


      var existingTerm = this.findTerm(availableTerms, formParent, formName);

      if (existingTerm) {
        // if the term we are adding exists but is not selected select it
        if (!Object(external_lodash_["some"])(terms, function (term) {
          return term === existingTerm.id;
        })) {
          onUpdateTerms([].concat(Object(toConsumableArray["a" /* default */])(terms), [existingTerm.id]), taxonomy.rest_base);
        }

        this.setState({
          formName: '',
          formParent: ''
        });
        return;
      }

      this.setState({
        adding: true
      });
      this.addRequest = external_wp_apiFetch_default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: formName,
          parent: formParent ? formParent : undefined
        }
      }); // Tries to create a term or fetch it if it already exists

      var findOrCreatePromise = this.addRequest.catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // search the new category created since last fetch
          _this2.addRequest = external_wp_apiFetch_default()({
            path: Object(external_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), hierarchical_term_selector_objectSpread(hierarchical_term_selector_objectSpread({}, hierarchical_term_selector_DEFAULT_QUERY), {}, {
              parent: formParent || 0,
              search: formName
            }))
          });
          return _this2.addRequest.then(function (searchResult) {
            return _this2.findTerm(searchResult, formParent, formName);
          });
        }

        return Promise.reject(error);
      });
      findOrCreatePromise.then(function (term) {
        var hasTerm = !!Object(external_lodash_["find"])(_this2.state.availableTerms, function (availableTerm) {
          return availableTerm.id === term.id;
        });
        var newAvailableTerms = hasTerm ? _this2.state.availableTerms : [term].concat(Object(toConsumableArray["a" /* default */])(_this2.state.availableTerms));
        var termAddedMessage = Object(external_wp_i18n_["sprintf"])(
        /* translators: %s: taxonomy name */
        Object(external_wp_i18n_["_x"])('%s added', 'term'), Object(external_lodash_["get"])(_this2.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(external_wp_i18n_["__"])('Category') : Object(external_wp_i18n_["__"])('Term')));

        _this2.props.speak(termAddedMessage, 'assertive');

        _this2.addRequest = null;

        _this2.setState({
          adding: false,
          formName: '',
          formParent: '',
          availableTerms: newAvailableTerms,
          availableTermsTree: _this2.sortBySelected(buildTermsTree(newAvailableTerms))
        });

        onUpdateTerms([].concat(Object(toConsumableArray["a" /* default */])(terms), [term.id]), taxonomy.rest_base);
      }, function (xhr) {
        if (xhr.statusText === 'abort') {
          return;
        }

        _this2.addRequest = null;

        _this2.setState({
          adding: false
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTerms();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_lodash_["invoke"])(this.fetchRequest, ['abort']);
      Object(external_lodash_["invoke"])(this.addRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.taxonomy !== prevProps.taxonomy) {
        this.fetchTerms();
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var taxonomy = this.props.taxonomy;

      if (!taxonomy) {
        return;
      }

      this.fetchRequest = external_wp_apiFetch_default()({
        path: Object(external_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), hierarchical_term_selector_DEFAULT_QUERY)
      });
      this.fetchRequest.then(function (terms) {
        // resolve
        var availableTermsTree = _this3.sortBySelected(buildTermsTree(terms));

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false,
          availableTermsTree: availableTermsTree,
          availableTerms: terms
        });
      }, function (xhr) {
        // reject
        if (xhr.statusText === 'abort') {
          return;
        }

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false
        });
      });
    }
  }, {
    key: "sortBySelected",
    value: function sortBySelected(termsTree) {
      var terms = this.props.terms;

      var treeHasSelection = function treeHasSelection(termTree) {
        if (terms.indexOf(termTree.id) !== -1) {
          return true;
        }

        if (undefined === termTree.children) {
          return false;
        }

        var anyChildIsSelected = termTree.children.map(treeHasSelection).filter(function (child) {
          return child;
        }).length > 0;

        if (anyChildIsSelected) {
          return true;
        }

        return false;
      };

      var termOrChildIsSelected = function termOrChildIsSelected(termA, termB) {
        var termASelected = treeHasSelection(termA);
        var termBSelected = treeHasSelection(termB);

        if (termASelected === termBSelected) {
          return 0;
        }

        if (termASelected && !termBSelected) {
          return -1;
        }

        if (!termASelected && termBSelected) {
          return 1;
        }

        return 0;
      };

      termsTree.sort(termOrChildIsSelected);
      return termsTree;
    }
  }, {
    key: "setFilterValue",
    value: function setFilterValue(event) {
      var availableTermsTree = this.state.availableTermsTree;
      var filterValue = event.target.value;
      var filteredTermsTree = availableTermsTree.map(this.getFilterMatcher(filterValue)).filter(function (term) {
        return term;
      });

      var getResultCount = function getResultCount(terms) {
        var count = 0;

        for (var i = 0; i < terms.length; i++) {
          count++;

          if (undefined !== terms[i].children) {
            count += getResultCount(terms[i].children);
          }
        }

        return count;
      };

      this.setState({
        filterValue: filterValue,
        filteredTermsTree: filteredTermsTree
      });
      var resultCount = getResultCount(filteredTermsTree);
      var resultsFoundMessage = Object(external_wp_i18n_["sprintf"])(
      /* translators: %d: number of results */
      Object(external_wp_i18n_["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
      this.props.debouncedSpeak(resultsFoundMessage, 'assertive');
    }
  }, {
    key: "getFilterMatcher",
    value: function getFilterMatcher(filterValue) {
      var matchTermsForFilter = function matchTermsForFilter(originalTerm) {
        if ('' === filterValue) {
          return originalTerm;
        } // Shallow clone, because we'll be filtering the term's children and
        // don't want to modify the original term.


        var term = hierarchical_term_selector_objectSpread({}, originalTerm); // Map and filter the children, recursive so we deal with grandchildren
        // and any deeper levels.


        if (term.children.length > 0) {
          term.children = term.children.map(matchTermsForFilter).filter(function (child) {
            return child;
          });
        } // If the term's name contains the filterValue, or it has children
        // (i.e. some child matched at some point in the tree) then return it.


        if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
          return term;
        } // Otherwise, return false. After mapping, the list of terms will need
        // to have false values filtered out.


        return false;
      };

      return matchTermsForFilter;
    }
  }, {
    key: "renderTerms",
    value: function renderTerms(renderedTerms) {
      var _this4 = this;

      var _this$props$terms2 = this.props.terms,
          terms = _this$props$terms2 === void 0 ? [] : _this$props$terms2;
      return renderedTerms.map(function (term) {
        return Object(external_wp_element_["createElement"])("div", {
          key: term.id,
          className: "editor-post-taxonomies__hierarchical-terms-choice"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
          checked: terms.indexOf(term.id) !== -1,
          onChange: function onChange() {
            var termId = parseInt(term.id, 10);

            _this4.onChange(termId);
          },
          label: Object(external_lodash_["unescape"])(term.name)
        }), !!term.children.length && Object(external_wp_element_["createElement"])("div", {
          className: "editor-post-taxonomies__hierarchical-terms-subchoices"
        }, _this4.renderTerms(term.children)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          slug = _this$props3.slug,
          taxonomy = _this$props3.taxonomy,
          instanceId = _this$props3.instanceId,
          hasCreateAction = _this$props3.hasCreateAction,
          hasAssignAction = _this$props3.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state2 = this.state,
          availableTermsTree = _this$state2.availableTermsTree,
          availableTerms = _this$state2.availableTerms,
          filteredTermsTree = _this$state2.filteredTermsTree,
          formName = _this$state2.formName,
          formParent = _this$state2.formParent,
          loading = _this$state2.loading,
          showForm = _this$state2.showForm,
          filterValue = _this$state2.filterValue;

      var labelWithFallback = function labelWithFallback(labelProperty, fallbackIsCategory, fallbackIsNotCategory) {
        return Object(external_lodash_["get"])(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);
      };

      var newTermButtonLabel = labelWithFallback('add_new_item', Object(external_wp_i18n_["__"])('Add new category'), Object(external_wp_i18n_["__"])('Add new term'));
      var newTermLabel = labelWithFallback('new_item_name', Object(external_wp_i18n_["__"])('Add new category'), Object(external_wp_i18n_["__"])('Add new term'));
      var parentSelectLabel = labelWithFallback('parent_item', Object(external_wp_i18n_["__"])('Parent Category'), Object(external_wp_i18n_["__"])('Parent Term'));
      var noParentOption = "\u2014 ".concat(parentSelectLabel, " \u2014");
      var newTermSubmitLabel = newTermButtonLabel;
      var inputId = "editor-post-taxonomies__hierarchical-terms-input-".concat(instanceId);
      var filterInputId = "editor-post-taxonomies__hierarchical-terms-filter-".concat(instanceId);
      var filterLabel = Object(external_lodash_["get"])(this.props.taxonomy, ['labels', 'search_items'], Object(external_wp_i18n_["__"])('Search Terms'));
      var groupLabel = Object(external_lodash_["get"])(this.props.taxonomy, ['name'], Object(external_wp_i18n_["__"])('Terms'));
      var showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
      return [showFilter && Object(external_wp_element_["createElement"])("label", {
        key: "filter-label",
        htmlFor: filterInputId
      }, filterLabel), showFilter && Object(external_wp_element_["createElement"])("input", {
        type: "search",
        id: filterInputId,
        value: filterValue,
        onChange: this.setFilterValue,
        className: "editor-post-taxonomies__hierarchical-terms-filter",
        key: "term-filter-input"
      }), Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-taxonomies__hierarchical-terms-list",
        key: "term-list",
        tabIndex: "0",
        role: "group",
        "aria-label": groupLabel
      }, this.renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "term-add-button",
        onClick: this.onToggleForm,
        className: "editor-post-taxonomies__hierarchical-terms-add",
        "aria-expanded": showForm,
        isLink: true
      }, newTermButtonLabel), showForm && Object(external_wp_element_["createElement"])("form", {
        onSubmit: this.onAddTerm,
        key: "hierarchical-terms-form"
      }, Object(external_wp_element_["createElement"])("label", {
        htmlFor: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-label"
      }, newTermLabel), Object(external_wp_element_["createElement"])("input", {
        type: "text",
        id: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-input",
        value: formName,
        onChange: this.onChangeFormName,
        required: true
      }), !!availableTerms.length && Object(external_wp_element_["createElement"])(external_wp_components_["TreeSelect"], {
        label: parentSelectLabel,
        noOptionLabel: noParentOption,
        onChange: this.onChangeFormParent,
        selectedId: formParent,
        tree: availableTermsTree
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        type: "submit",
        className: "editor-post-taxonomies__hierarchical-terms-submit"
      }, newTermSubmitLabel))];
    }
  }]);

  return HierarchicalTermSelector;
}(external_wp_element_["Component"]);

/* harmony default export */ var hierarchical_term_selector = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(defineProperty["a" /* default */])({}, restBase, terms));
    }
  };
}), external_wp_components_["withSpokenMessages"], external_wp_compose_["withInstanceId"], Object(external_wp_components_["withFilters"])('editor.PostTaxonomyType')])(hierarchical_term_selector_HierarchicalTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostTaxonomies(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      _ref$taxonomyWrapper = _ref.taxonomyWrapper,
      taxonomyWrapper = _ref$taxonomyWrapper === void 0 ? external_lodash_["identity"] : _ref$taxonomyWrapper;
  var availableTaxonomies = Object(external_lodash_["filter"])(taxonomies, function (taxonomy) {
    return Object(external_lodash_["includes"])(taxonomy.types, postType);
  });
  var visibleTaxonomies = Object(external_lodash_["filter"])(availableTaxonomies, function (taxonomy) {
    return taxonomy.visibility.show_ui;
  });
  return visibleTaxonomies.map(function (taxonomy) {
    var TaxonomyComponent = taxonomy.hierarchical ? hierarchical_term_selector : flat_term_selector;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
      key: "taxonomy-".concat(taxonomy.slug)
    }, taxonomyWrapper(Object(external_wp_element_["createElement"])(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
/* harmony default export */ var post_taxonomies = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostTaxonomiesCheck(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      children = _ref.children;
  var hasTaxonomies = Object(external_lodash_["some"])(taxonomies, function (taxonomy) {
    return Object(external_lodash_["includes"])(taxonomy.types, postType);
  });

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_taxonomies_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck));

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var lib = __webpack_require__("O6Fj");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function PostTextEditor() {
  var postContent = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core/editor').getEditedPostContent();
  }, []);

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost,
      resetEditorBlocks = _useDispatch.resetEditorBlocks;

  var _useState = Object(external_wp_element_["useState"])(postContent),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(external_wp_element_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      isDirty = _useState4[0],
      setIsDirty = _useState4[1];

  var instanceId = Object(external_wp_compose_["useInstanceId"])(PostTextEditor);

  if (!isDirty && value !== postContent) {
    setValue(postContent);
  }
  /**
   * Handles a textarea change event to notify the onChange prop callback and
   * reflect the new value in the component's own state. This marks the start
   * of the user's edits, if not already changed, preventing future props
   * changes to value from replacing the rendered value. This is expected to
   * be followed by a reset to dirty state via `stopEditing`.
   *
   * @see stopEditing
   *
   * @param {Event} event Change event.
   */


  var onChange = function onChange(event) {
    var newValue = event.target.value;
    editPost({
      content: newValue
    });
    setValue(newValue);
    setIsDirty(true);
  };
  /**
   * Function called when the user has completed their edits, responsible for
   * ensuring that changes, if made, are surfaced to the onPersist prop
   * callback and resetting dirty state.
   */


  var stopEditing = function stopEditing() {
    if (isDirty) {
      var blocks = Object(external_wp_blocks_["parse"])(value);
      resetEditorBlocks(blocks);
      setIsDirty(false);
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "label",
    htmlFor: "post-content-".concat(instanceId)
  }, Object(external_wp_i18n_["__"])('Type text or HTML')), Object(external_wp_element_["createElement"])(lib_default.a, {
    autoComplete: "off",
    dir: "auto",
    value: value,
    onChange: onChange,
    onBlur: stopEditing,
    className: "editor-post-text-editor",
    id: "post-content-".concat(instanceId),
    placeholder: Object(external_wp_i18n_["__"])('Start writing with text or HTML')
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


/**
 * Constants
 */

var REGEXP_NEWLINES = /[\r\n]+/g;
function PostTitle() {
  var instanceId = Object(external_wp_compose_["useInstanceId"])(PostTitle);
  var ref = Object(external_wp_element_["useRef"])();

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isSelected = _useState2[0],
      setIsSelected = _useState2[1];

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch.editPost;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])('core/block-editor'),
      insertDefaultBlock = _useDispatch2.insertDefaultBlock,
      clearSelectedBlock = _useDispatch2.clearSelectedBlock,
      insertBlocks = _useDispatch2.insertBlocks;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        getEditedPostAttribute = _select.getEditedPostAttribute,
        _isCleanNewPost = _select.isCleanNewPost;

    var _select2 = select('core/block-editor'),
        getSettings = _select2.getSettings;

    var _getSettings = getSettings(),
        titlePlaceholder = _getSettings.titlePlaceholder,
        focusMode = _getSettings.focusMode,
        _hasFixedToolbar = _getSettings.hasFixedToolbar;

    return {
      isCleanNewPost: _isCleanNewPost(),
      title: getEditedPostAttribute('title'),
      placeholder: titlePlaceholder,
      isFocusMode: focusMode,
      hasFixedToolbar: _hasFixedToolbar
    };
  }),
      isCleanNewPost = _useSelect.isCleanNewPost,
      title = _useSelect.title,
      placeholder = _useSelect.placeholder,
      isFocusMode = _useSelect.isFocusMode,
      hasFixedToolbar = _useSelect.hasFixedToolbar;

  Object(external_wp_element_["useEffect"])(function () {
    var ownerDocument = ref.current.ownerDocument;
    var activeElement = ownerDocument.activeElement,
        body = ownerDocument.body; // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.

    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);

  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }

  function onInsertBlockAfter(blocks) {
    insertBlocks(blocks, 0);
  }

  function onUpdate(newTitle) {
    editPost({
      title: newTitle
    });
  }

  function onSelect() {
    setIsSelected(true);
    clearSelectedBlock();
  }

  function onUnselect() {
    setIsSelected(false);
  }

  function onChange(event) {
    onUpdate(event.target.value.replace(REGEXP_NEWLINES, ' '));
  }

  function onKeyDown(event) {
    if (event.keyCode === external_wp_keycodes_["ENTER"]) {
      event.preventDefault();
      onEnterPress();
    }
  }

  function onPaste(event) {
    var clipboardData = event.clipboardData;
    var plainText = '';
    var html = ''; // IE11 only supports `Text` as an argument for `getData` and will
    // otherwise throw an invalid argument error, so we try the standard
    // arguments first, then fallback to `Text` if they fail.

    try {
      plainText = clipboardData.getData('text/plain');
      html = clipboardData.getData('text/html');
    } catch (error1) {
      try {
        html = clipboardData.getData('Text');
      } catch (error2) {
        // Some browsers like UC Browser paste plain text by default and
        // don't support clipboardData at all, so allow default
        // behaviour.
        return;
      }
    } // Allows us to ask for this information when we get a report.


    window.console.log('Received HTML:\n\n', html);
    window.console.log('Received plain text:\n\n', plainText);
    var content = Object(external_wp_blocks_["pasteHandler"])({
      HTML: html,
      plainText: plainText
    });

    if (typeof content !== 'string' && content.length) {
      event.preventDefault();

      var _content = Object(slicedToArray["a" /* default */])(content, 1),
          firstBlock = _content[0];

      if (!title && (firstBlock.name === 'core/heading' || firstBlock.name === 'core/paragraph')) {
        onUpdate(firstBlock.attributes.content);
        onInsertBlockAfter(content.slice(1));
      } else {
        onInsertBlockAfter(content);
      }
    }
  } // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.


  var className = classnames_default()('wp-block editor-post-title editor-post-title__block', {
    'is-selected': isSelected,
    'is-focus-mode': isFocusMode,
    'has-fixed-toolbar': hasFixedToolbar
  });
  var decodedPlaceholder = Object(external_wp_htmlEntities_["decodeEntities"])(placeholder);
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "title"
  }, Object(external_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "label",
    htmlFor: "post-title-".concat(instanceId)
  }, decodedPlaceholder || Object(external_wp_i18n_["__"])('Add title')), Object(external_wp_element_["createElement"])(lib_default.a, {
    ref: ref,
    id: "post-title-".concat(instanceId),
    className: "editor-post-title__input",
    value: title,
    onChange: onChange,
    placeholder: decodedPlaceholder || Object(external_wp_i18n_["__"])('Add title'),
    onFocus: onSelect,
    onBlur: onUnselect,
    onKeyDown: onKeyDown,
    onKeyPress: onUnselect,
    onPaste: onPaste
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/index.js



/**
 * WordPress dependencies
 */





function PostTrash(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      postType = _ref.postType,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isNew", "postId", "postType"]);

  if (isNew || !postId) {
    return null;
  }

  var onClick = function onClick() {
    return props.trashPost(postId, postType);
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-trash",
    isDestructive: true,
    isTertiary: true,
    onClick: onClick
  }, Object(external_wp_i18n_["__"])('Move to trash'));
}

/* harmony default export */ var post_trash = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId(),
    postType: getCurrentPostType()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    trashPost: dispatch('core/editor').trashPost
  };
})])(PostTrash));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js
/**
 * WordPress dependencies
 */


function PostTrashCheck(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      canUserDelete = _ref.canUserDelete,
      children = _ref.children;

  if (isNew || !postId || !canUserDelete) {
    return null;
  }

  return children;
}

/* harmony default export */ var post_trash_check = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostType = _select.getCurrentPostType;

  var _select2 = select('core'),
      getPostType = _select2.getPostType,
      canUser = _select2.canUser;

  var postId = getCurrentPostId();
  var postType = getPostType(getCurrentPostType());
  var resource = (postType === null || postType === void 0 ? void 0 : postType.rest_base) || ''; // eslint-disable-line camelcase

  return {
    isNew: isEditedPostNew(),
    postId: postId,
    canUserDelete: postId && resource ? canUser('delete', resource, postId) : false
  };
})(PostTrashCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostVisibilityCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      render = _ref.render;
  var canEdit = hasPublishAction;
  return render({
    canEdit: canEdit
  });
}
/* harmony default export */ var post_visibility_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/info.js


/**
 * WordPress dependencies
 */

var info_info = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ var library_info = (info_info);

// EXTERNAL MODULE: external ["wp","wordcount"]
var external_wp_wordcount_ = __webpack_require__("7fqt");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/word-count/index.js


/**
 * WordPress dependencies
 */



function WordCount() {
  var content = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core/editor').getEditedPostAttribute('content');
  });
  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */

  var wordCountType = Object(external_wp_i18n_["_x"])('words', 'Word count type. Do not translate!');

  return Object(external_wp_element_["createElement"])("span", {
    className: "word-count"
  }, Object(external_wp_wordcount_["count"])(content, wordCountType));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/character-count/index.js
/**
 * WordPress dependencies
 */


function CharacterCount() {
  var content = Object(external_wp_data_["useSelect"])(function (select) {
    return select('core/editor').getEditedPostAttribute('content');
  });
  return Object(external_wp_wordcount_["count"])(content, 'characters_including_spaces');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function TableOfContentsPanel(_ref) {
  var hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled,
      onRequestClose = _ref.onRequestClose;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getGlobalBlockCount = _select.getGlobalBlockCount;

    return {
      headingCount: getGlobalBlockCount('core/heading'),
      paragraphCount: getGlobalBlockCount('core/paragraph'),
      numberOfBlocks: getGlobalBlockCount()
    };
  }, []),
      headingCount = _useSelect.headingCount,
      paragraphCount = _useSelect.paragraphCount,
      numberOfBlocks = _useSelect.numberOfBlocks;

  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": Object(external_wp_i18n_["__"])('Document Statistics'),
      tabIndex: "0"
    }, Object(external_wp_element_["createElement"])("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Characters'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, Object(external_wp_element_["createElement"])(CharacterCount, null))), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Words'), Object(external_wp_element_["createElement"])(WordCount, null)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Headings'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, headingCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Paragraphs'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Blocks'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("hr", null), Object(external_wp_element_["createElement"])("h2", {
      className: "table-of-contents__title"
    }, Object(external_wp_i18n_["__"])('Document Outline')), Object(external_wp_element_["createElement"])(document_outline, {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var panel = (TableOfContentsPanel);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js




/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function TableOfContents(_ref, ref) {
  var hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled,
      repositionDropdown = _ref.repositionDropdown,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["hasOutlineItemsDisabled", "repositionDropdown"]);

  var hasBlocks = Object(external_wp_data_["useSelect"])(function (select) {
    return !!select('core/block-editor').getBlockCount();
  }, []);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
    position: repositionDropdown ? 'middle right right' : 'bottom',
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
        ref: ref,
        onClick: hasBlocks ? onToggle : undefined,
        icon: library_info,
        "aria-expanded": isOpen,
        "aria-haspopup": "true"
        /* translators: button label text should, if possible, be under 16 characters. */
        ,
        label: Object(external_wp_i18n_["__"])('Details'),
        tooltipPosition: "bottom",
        "aria-disabled": !hasBlocks
      }));
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return Object(external_wp_element_["createElement"])(panel, {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

/* harmony default export */ var table_of_contents = (Object(external_wp_element_["forwardRef"])(TableOfContents));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js
/**
 * WordPress dependencies
 */



/**
 * Warns the user if there are unsaved changes before leaving the editor.
 * Compatible with Post Editor and Site Editor.
 *
 * @return {WPComponent} The component.
 */

function UnsavedChangesWarning() {
  var isDirty = Object(external_wp_data_["useSelect"])(function (select) {
    return function () {
      var _select = select('core'),
          __experimentalGetDirtyEntityRecords = _select.__experimentalGetDirtyEntityRecords;

      var dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

      return dirtyEntityRecords.length > 0;
    };
  }, []);
  /**
   * Warns the user if there are unsaved changes before leaving the editor.
   *
   * @param {Event} event `beforeunload` event.
   *
   * @return {?string} Warning prompt message, if unsaved changes exist.
   */

  var warnIfUnsavedChanges = function warnIfUnsavedChanges(event) {
    // We need to call the selector directly in the listener to avoid race
    // conditions with `BrowserURL` where `componentDidUpdate` gets the
    // new value of `isEditedPostDirty` before this component does,
    // causing this component to incorrectly think a trashed post is still dirty.
    if (isDirty()) {
      event.returnValue = Object(external_wp_i18n_["__"])('You have unsaved changes. If you proceed, they will be lost.');
      return event.returnValue;
    }
  };

  Object(external_wp_element_["useEffect"])(function () {
    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return function () {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, []);
  return null;
}

// EXTERNAL MODULE: external ["wp","reusableBlocks"]
var external_wp_reusableBlocks_ = __webpack_require__("diJD");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var withRegistryProvider = Object(external_wp_compose_["createHigherOrderComponent"])(function (WrappedComponent) {
  return Object(external_wp_data_["withRegistry"])(function (props) {
    var _props$useSubRegistry = props.useSubRegistry,
        useSubRegistry = _props$useSubRegistry === void 0 ? true : _props$useSubRegistry,
        registry = props.registry,
        additionalProps = Object(objectWithoutProperties["a" /* default */])(props, ["useSubRegistry", "registry"]);

    if (!useSubRegistry) {
      return Object(external_wp_element_["createElement"])(WrappedComponent, additionalProps);
    }

    var _useState = Object(external_wp_element_["useState"])(null),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        subRegistry = _useState2[0],
        setSubRegistry = _useState2[1];

    Object(external_wp_element_["useEffect"])(function () {
      var newRegistry = Object(external_wp_data_["createRegistry"])({
        'core/block-editor': external_wp_blockEditor_["storeConfig"]
      }, registry);
      newRegistry.registerStore('core/editor', storeConfig);
      setSubRegistry(newRegistry);
    }, [registry]);

    if (!subRegistry) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wp_data_["RegistryProvider"], {
      value: subRegistry
    }, Object(external_wp_element_["createElement"])(WrappedComponent, additionalProps));
  });
}, 'withRegistryProvider');
/* harmony default export */ var with_registry_provider = (withRegistryProvider);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_ = __webpack_require__("6aBm");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js


function media_upload_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_upload_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_upload_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_upload_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param   {Object}   $0                   Parameters object passed to the function.
 * @param   {?Object}  $0.additionalData    Additional data to include in the request.
 * @param   {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param   {Array}    $0.filesList         List of files.
 * @param   {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param   {Function} $0.onError           Function called when an error happens.
 * @param   {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */

function mediaUpload(_ref) {
  var _ref$additionalData = _ref.additionalData,
      additionalData = _ref$additionalData === void 0 ? {} : _ref$additionalData,
      allowedTypes = _ref.allowedTypes,
      filesList = _ref.filesList,
      maxUploadFileSize = _ref.maxUploadFileSize,
      _ref$onError = _ref.onError,
      _onError = _ref$onError === void 0 ? external_lodash_["noop"] : _ref$onError,
      onFileChange = _ref.onFileChange;

  var _select = Object(external_wp_data_["select"])('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getEditorSettings = _select.getEditorSettings;

  var wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  Object(external_wp_mediaUtils_["uploadMedia"])({
    allowedTypes: allowedTypes,
    filesList: filesList,
    onFileChange: onFileChange,
    additionalData: media_upload_objectSpread({
      post: getCurrentPostId()
    }, additionalData),
    maxUploadFileSize: maxUploadFileSize,
    onError: function onError(_ref2) {
      var message = _ref2.message;
      return _onError(message);
    },
    wpAllowedMimeTypes: wpAllowedMimeTypes
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js




function use_block_editor_settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_block_editor_settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_block_editor_settings_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_block_editor_settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



/**
 * Fetches link suggestions from the API. This function is an exact copy of a function found at:
 *
 * packages/edit-navigation/src/index.js
 *
 * It seems like there is no suitable package to import this from. Ideally it would be either part of core-data.
 * Until we refactor it, just copying the code is the simplest solution.
 *
 * @param {string} search
 * @param {Object} [searchArguments]
 * @param {number} [searchArguments.isInitialSuggestions]
 * @param {number} [searchArguments.type]
 * @param {number} [searchArguments.subtype]
 * @param {number} [searchArguments.page]
 * @param {Object} [editorSettings]
 * @param {boolean} [editorSettings.disablePostFormats=false]
 * @return {Promise<Object[]>} List of suggestions
 */

var fetchLinkSuggestions = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(search) {
    var _ref2,
        isInitialSuggestions,
        type,
        subtype,
        page,
        perPageArg,
        _ref3,
        _ref3$disablePostForm,
        disablePostFormats,
        perPage,
        queries,
        _args = arguments;

    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, isInitialSuggestions = _ref2.isInitialSuggestions, type = _ref2.type, subtype = _ref2.subtype, page = _ref2.page, perPageArg = _ref2.perPage;
            _ref3 = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref3$disablePostForm = _ref3.disablePostFormats, disablePostFormats = _ref3$disablePostForm === void 0 ? false : _ref3$disablePostForm;
            perPage = perPageArg || isInitialSuggestions ? 3 : 20;
            queries = [];

            if (!type || type === 'post') {
              queries.push(external_wp_apiFetch_default()({
                path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
                  search: search,
                  page: page,
                  per_page: perPage,
                  type: 'post',
                  subtype: subtype
                })
              }).catch(function () {
                return [];
              }) // fail by returning no results
              );
            }

            if (!type || type === 'term') {
              queries.push(external_wp_apiFetch_default()({
                path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
                  search: search,
                  page: page,
                  per_page: perPage,
                  type: 'term',
                  subtype: subtype
                })
              }).catch(function () {
                return [];
              }));
            }

            if (!disablePostFormats && (!type || type === 'post-format')) {
              queries.push(external_wp_apiFetch_default()({
                path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
                  search: search,
                  page: page,
                  per_page: perPage,
                  type: 'post-format',
                  subtype: subtype
                })
              }).catch(function () {
                return [];
              }));
            }

            return _context.abrupt("return", Promise.all(queries).then(function (results) {
              return Object(external_lodash_["map"])(Object(external_lodash_["flatten"])(results).filter(function (result) {
                return !!result.id;
              }).slice(0, perPage), function (result) {
                return {
                  id: result.id,
                  url: result.url,
                  title: Object(external_wp_htmlEntities_["decodeEntities"])(result.title) || Object(external_wp_i18n_["__"])('(no title)'),
                  type: result.subtype || result.type
                };
              });
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchLinkSuggestions(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * React hook used to compute the block editor settings to use for the post editor.
 *
 * @param {Object}  settings    EditorProvider settings prop.
 * @param {boolean} hasTemplate Whether template mode is enabled.
 *
 * @return {Object} Block Editor Settings.
 */


function useBlockEditorSettings(settings, hasTemplate) {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(store),
        canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML,
        isPostTitleSelected = _select.isPostTitleSelected;

    var _select2 = select(external_wp_coreData_["store"]),
        canUser = _select2.canUser;

    return {
      canUseUnfilteredHTML: canUserUseUnfilteredHTML(),
      reusableBlocks: select(external_wp_coreData_["store"]).getEntityRecords('postType', 'wp_block',
      /**
       * Unbounded queries are not supported on native so as a workaround we set per_page with the maximum value.
       * Related issue: https://github.com/wordpress-mobile/gutenberg-mobile/issues/2661
       */
      {
        per_page: external_wp_element_["Platform"].select({
          web: -1,
          native: 100
        })
      }),
      hasUploadPermissions: Object(external_lodash_["defaultTo"])(canUser('create', 'media'), true),
      // This selector is only defined on mobile.
      isTitleSelected: isPostTitleSelected && isPostTitleSelected()
    };
  }, []),
      reusableBlocks = _useSelect.reusableBlocks,
      hasUploadPermissions = _useSelect.hasUploadPermissions,
      canUseUnfilteredHTML = _useSelect.canUseUnfilteredHTML,
      isTitleSelected = _useSelect.isTitleSelected;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      undo = _useDispatch.undo;

  return Object(external_wp_element_["useMemo"])(function () {
    return use_block_editor_settings_objectSpread(use_block_editor_settings_objectSpread({}, Object(external_lodash_["pick"])(settings, ['__experimentalBlockDirectory', '__experimentalBlockPatternCategories', '__experimentalBlockPatterns', '__experimentalFeatures', '__experimentalGlobalStylesBaseStyles', '__experimentalGlobalStylesUserEntityId', '__experimentalPreferredStyleVariations', '__experimentalSetIsInserterOpened', 'alignWide', 'allowedBlockTypes', 'availableLegacyWidgets', 'bodyPlaceholder', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomGradients', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'focusMode', 'fontSizes', 'gradients', 'hasFixedToolbar', 'hasReducedUI', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'keepCaretInsideBlock', 'maxWidth', 'onUpdateDefaultBlockStyles', 'styles', 'template', 'templateLock', 'titlePlaceholder'])), {}, {
      mediaUpload: hasUploadPermissions ? mediaUpload : undefined,
      __experimentalReusableBlocks: reusableBlocks,
      __experimentalFetchLinkSuggestions: Object(external_lodash_["partialRight"])(fetchLinkSuggestions, settings),
      __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
      __experimentalUndo: undo,
      __experimentalShouldInsertAtTheTop: isTitleSelected,
      outlineMode: hasTemplate
    });
  }, [settings, hasUploadPermissions, reusableBlocks, canUseUnfilteredHTML, undo, isTitleSelected, hasTemplate]);
}

/* harmony default export */ var use_block_editor_settings = (useBlockEditorSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/index.js



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function EditorProvider(_ref) {
  var __unstableTemplate = _ref.__unstableTemplate,
      post = _ref.post,
      settings = _ref.settings,
      recovery = _ref.recovery,
      initialEdits = _ref.initialEdits,
      children = _ref.children;
  var defaultBlockContext = Object(external_wp_element_["useMemo"])(function () {
    if (post.type === 'wp_template') {
      return {};
    }

    return {
      postId: post.id,
      postType: post.type
    };
  }, [post.id, post.type]);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(store),
        getEditorSelectionStart = _select.getEditorSelectionStart,
        getEditorSelectionEnd = _select.getEditorSelectionEnd,
        __unstableIsEditorReady = _select.__unstableIsEditorReady;

    return {
      isReady: __unstableIsEditorReady(),
      selectionStart: getEditorSelectionStart(),
      selectionEnd: getEditorSelectionEnd()
    };
  }, []),
      selectionEnd = _useSelect.selectionEnd,
      selectionStart = _useSelect.selectionStart,
      isReady = _useSelect.isReady;

  var _ref2 = __unstableTemplate !== null && __unstableTemplate !== void 0 ? __unstableTemplate : post,
      id = _ref2.id,
      type = _ref2.type;

  var _useEntityBlockEditor = Object(external_wp_coreData_["useEntityBlockEditor"])('postType', type, {
    id: id
  }),
      _useEntityBlockEditor2 = Object(slicedToArray["a" /* default */])(_useEntityBlockEditor, 3),
      blocks = _useEntityBlockEditor2[0],
      onInput = _useEntityBlockEditor2[1],
      onChange = _useEntityBlockEditor2[2];

  var editorSettings = use_block_editor_settings(settings, !!__unstableTemplate);

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      updatePostLock = _useDispatch.updatePostLock,
      setupEditor = _useDispatch.setupEditor,
      updateEditorSettings = _useDispatch.updateEditorSettings,
      __experimentalTearDownEditor = _useDispatch.__experimentalTearDownEditor;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]),
      createWarningNotice = _useDispatch2.createWarningNotice; // Iniitialize and tear down the editor.
  // Ideally this should be synced on each change and not just something you do once.


  Object(external_wp_element_["useLayoutEffect"])(function () {
    // Assume that we don't need to initialize in the case of an error recovery.
    if (recovery) {
      return;
    }

    updatePostLock(settings.postLock);
    setupEditor(post, initialEdits, settings.template);

    if (settings.autosave) {
      createWarningNotice(Object(external_wp_i18n_["__"])('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: Object(external_wp_i18n_["__"])('View the autosave'),
          url: settings.autosave.editLink
        }]
      });
    }

    return function () {
      __experimentalTearDownEditor();
    };
  }, []); // Synchronize the editor settings as they change

  Object(external_wp_element_["useEffect"])(function () {
    updateEditorSettings(settings);
  }, [settings]);

  if (!isReady) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "root",
    type: "site"
  }, Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "postType",
    type: post.type,
    id: post.id
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockContextProvider"], {
    value: defaultBlockContext
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorProvider"], {
    value: blocks,
    onChange: onChange,
    onInput: onInput,
    selectionStart: selectionStart,
    selectionEnd: selectionEnd,
    settings: editorSettings,
    useSubRegistry: false
  }, children, Object(external_wp_element_["createElement"])(external_wp_reusableBlocks_["ReusableBlocksMenuItems"], null)))));
}

/* harmony default export */ var provider = (with_registry_provider(EditorProvider));

// EXTERNAL MODULE: external ["wp","serverSideRender"]
var external_wp_serverSideRender_ = __webpack_require__("JREk");
var external_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/deprecated.js


// Block Creation Components

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped) {
  var staticsToHoist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var Component = Object(external_wp_element_["forwardRef"])(function (props, ref) {
    external_wp_deprecated_default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return Object(external_wp_element_["createElement"])(Wrapped, Object(esm_extends["a" /* default */])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(function (staticName) {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return function () {
    external_wp_deprecated_default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return func.apply(void 0, arguments);
  };
}

var RichText = deprecateComponent('RichText', external_wp_blockEditor_["RichText"], ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', external_wp_blockEditor_["RichText"].isEmpty);

var Autocomplete = deprecateComponent('Autocomplete', external_wp_blockEditor_["Autocomplete"]);
var AlignmentToolbar = deprecateComponent('AlignmentToolbar', external_wp_blockEditor_["AlignmentToolbar"]);
var BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', external_wp_blockEditor_["BlockAlignmentToolbar"]);
var BlockControls = deprecateComponent('BlockControls', external_wp_blockEditor_["BlockControls"], ['Slot']);
var deprecated_BlockEdit = deprecateComponent('BlockEdit', external_wp_blockEditor_["BlockEdit"]);
var BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', external_wp_blockEditor_["BlockEditorKeyboardShortcuts"]);
var BlockFormatControls = deprecateComponent('BlockFormatControls', external_wp_blockEditor_["BlockFormatControls"], ['Slot']);
var BlockIcon = deprecateComponent('BlockIcon', external_wp_blockEditor_["BlockIcon"]);
var BlockInspector = deprecateComponent('BlockInspector', external_wp_blockEditor_["BlockInspector"]);
var BlockList = deprecateComponent('BlockList', external_wp_blockEditor_["BlockList"]);
var BlockMover = deprecateComponent('BlockMover', external_wp_blockEditor_["BlockMover"]);
var BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', external_wp_blockEditor_["BlockNavigationDropdown"]);
var BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', external_wp_blockEditor_["BlockSelectionClearer"]);
var BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', external_wp_blockEditor_["BlockSettingsMenu"]);
var BlockTitle = deprecateComponent('BlockTitle', external_wp_blockEditor_["BlockTitle"]);
var BlockToolbar = deprecateComponent('BlockToolbar', external_wp_blockEditor_["BlockToolbar"]);
var ColorPalette = deprecateComponent('ColorPalette', external_wp_blockEditor_["ColorPalette"]);
var ContrastChecker = deprecateComponent('ContrastChecker', external_wp_blockEditor_["ContrastChecker"]);
var CopyHandler = deprecateComponent('CopyHandler', external_wp_blockEditor_["CopyHandler"]);
var DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', external_wp_blockEditor_["DefaultBlockAppender"]);
var FontSizePicker = deprecateComponent('FontSizePicker', external_wp_blockEditor_["FontSizePicker"]);
var Inserter = deprecateComponent('Inserter', external_wp_blockEditor_["Inserter"]);
var InnerBlocks = deprecateComponent('InnerBlocks', external_wp_blockEditor_["InnerBlocks"], ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
var InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', external_wp_blockEditor_["InspectorAdvancedControls"], ['Slot']);
var InspectorControls = deprecateComponent('InspectorControls', external_wp_blockEditor_["InspectorControls"], ['Slot']);
var PanelColorSettings = deprecateComponent('PanelColorSettings', external_wp_blockEditor_["PanelColorSettings"]);
var PlainText = deprecateComponent('PlainText', external_wp_blockEditor_["PlainText"]);
var RichTextShortcut = deprecateComponent('RichTextShortcut', external_wp_blockEditor_["RichTextShortcut"]);
var RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', external_wp_blockEditor_["RichTextToolbarButton"]);
var __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', external_wp_blockEditor_["__unstableRichTextInputEvent"]);
var MediaPlaceholder = deprecateComponent('MediaPlaceholder', external_wp_blockEditor_["MediaPlaceholder"]);
var MediaUpload = deprecateComponent('MediaUpload', external_wp_blockEditor_["MediaUpload"]);
var MediaUploadCheck = deprecateComponent('MediaUploadCheck', external_wp_blockEditor_["MediaUploadCheck"]);
var MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', external_wp_blockEditor_["MultiSelectScrollIntoView"]);
var NavigableToolbar = deprecateComponent('NavigableToolbar', external_wp_blockEditor_["NavigableToolbar"]);
var ObserveTyping = deprecateComponent('ObserveTyping', external_wp_blockEditor_["ObserveTyping"]);
var PreserveScrollInReorder = deprecateComponent('PreserveScrollInReorder', external_wp_blockEditor_["PreserveScrollInReorder"]);
var SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', external_wp_blockEditor_["SkipToSelectedBlock"]);
var URLInput = deprecateComponent('URLInput', external_wp_blockEditor_["URLInput"]);
var URLInputButton = deprecateComponent('URLInputButton', external_wp_blockEditor_["URLInputButton"]);
var URLPopover = deprecateComponent('URLPopover', external_wp_blockEditor_["URLPopover"]);
var Warning = deprecateComponent('Warning', external_wp_blockEditor_["Warning"]);
var WritingFlow = deprecateComponent('WritingFlow', external_wp_blockEditor_["WritingFlow"]);
var createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', external_wp_blockEditor_["createCustomColorsHOC"]);
var getColorClassName = deprecateFunction('getColorClassName', external_wp_blockEditor_["getColorClassName"]);
var getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', external_wp_blockEditor_["getColorObjectByAttributeValues"]);
var getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', external_wp_blockEditor_["getColorObjectByColorValue"]);
var getFontSize = deprecateFunction('getFontSize', external_wp_blockEditor_["getFontSize"]);
var getFontSizeClass = deprecateFunction('getFontSizeClass', external_wp_blockEditor_["getFontSizeClass"]);
var withColorContext = deprecateFunction('withColorContext', external_wp_blockEditor_["withColorContext"]);
var withColors = deprecateFunction('withColors', external_wp_blockEditor_["withColors"]);
var withFontSizes = deprecateFunction('withFontSizes', external_wp_blockEditor_["withFontSizes"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/index.js
// Block Creation Components
 // Post Related Components

























































 // State Related Components




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/index.js
/**
 * Internal dependencies
 */




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





/*
 * Backward compatibility
 */




/***/ }),

/***/ "PYwp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "RMJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "Rk8H":
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__("jTPX");

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ "RxS6":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "U8pU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "WbBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "a3WO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "bWcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "diJD":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["reusableBlocks"]; }());

/***/ }),

/***/ "dvlR":
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "foSv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "hF7m":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keyboardShortcuts"]; }());

/***/ }),

/***/ "iClF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rePB");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ "jTPX":
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ "jZUy":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "md7G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JX7q");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "onLe":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ "pPDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ "qRz9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["richText"]; }());

/***/ }),

/***/ "rePB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "s4An":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "vuIU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "w95h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ "wx14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });