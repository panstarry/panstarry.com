webpackJsonp([2],{

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_groupbuy_product_vue__ = __webpack_require__(701);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1fe74ed6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_groupbuy_product_vue__ = __webpack_require__(865);
function injectStyle (ssrContext) {
  __webpack_require__(863)
}
var normalizeComponent = __webpack_require__(44)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fe74ed6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_groupbuy_product_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1fe74ed6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_groupbuy_product_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_groupbuy_product_sale_vue__ = __webpack_require__(702);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d49110_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_groupbuy_product_sale_vue__ = __webpack_require__(868);
function injectStyle (ssrContext) {
  __webpack_require__(866)
}
var normalizeComponent = __webpack_require__(44)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21d49110"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_groupbuy_product_sale_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d49110_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_groupbuy_product_sale_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.get = get;
exports.isEmpty = isEmpty;
exports.isServer = exports.inBrowser = exports.addUnit = exports.createNamespace = void 0;

var _vue = _interopRequireDefault(__webpack_require__(13));

var _create = __webpack_require__(621);

exports.createNamespace = _create.createNamespace;

var _unit = __webpack_require__(615);

exports.addUnit = _unit.addUnit;
var inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = _vue.default.prototype.$isServer; // eslint-disable-next-line @typescript-eslint/no-empty-function

exports.isServer = isServer;

function noop() {}

function isDef(val) {
  return val !== undefined && val !== null;
}

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;

    result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : '';
  });
  return result;
}
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @function isEmpty
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */


function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value !== 'object') {
    return true;
  }

  return Object.keys(value).length === 0;
}

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.supportsPassive = void 0;

var _ = __webpack_require__(595);

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}

function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.inherit = inherit;
exports.emit = emit;
exports.mount = mount;

var _extends2 = _interopRequireDefault(__webpack_require__(598));

var _vue = _interopRequireDefault(__webpack_require__(13));

var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};
    (0, _extends2.default)(result.on, context.data.on);
  }

  return result;
} // emit event


function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component


function mount(Component, data) {
  var instance = new _vue.default({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, (0, _extends2.default)({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TouchMixin = void 0;

var _event = __webpack_require__(597);

function getDirection(x, y) {
  if (x > y) {
    return 'horizontal';
  }

  if (y > x) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0]; // safari back will set clientX to negative number

      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY); // lock direction when distance is greater than a certain value

      var LOCK_DIRECTION_DISTANCE = 10;

      if (!this.direction || this.offsetX < LOCK_DIRECTION_DISTANCE && this.offsetY < LOCK_DIRECTION_DISTANCE) {
        this.direction = getDirection(this.offsetX, this.offsetY);
      }
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/vant-ui/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var onTouchStart = this.onTouchStart,
          onTouchMove = this.onTouchMove,
          onTouchEnd = this.onTouchEnd;
      (0, _event.on)(el, 'touchstart', onTouchStart);
      (0, _event.on)(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        (0, _event.on)(el, 'touchend', onTouchEnd);
        (0, _event.on)(el, 'touchcancel', onTouchEnd);
      }
    }
  }
};
exports.TouchMixin = TouchMixin;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BindEventMixin = BindEventMixin;

var _event = __webpack_require__(597);

/**
 * Bind event when mounted or activated
 */
var uid = 0;

function BindEventMixin(handler) {
  var key = "binded_" + uid++;

  function bind() {
    if (!this[key]) {
      handler.call(this, _event.on, true);
      this[key] = true;
    }
  }

  function unbind() {
    if (this[key]) {
      handler.call(this, _event.off, false);
      this[key] = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.range = range;
exports.formatNumber = formatNumber;
exports.addNumber = addNumber;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  var prefix = '';

  if (index === -1) {
    return value;
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }

  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }

  if (allowMinus === void 0) {
    allowMinus = true;
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
} // add num and avoid float number


function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(598));

var _vue = _interopRequireDefault(__webpack_require__(13));

var _ImagePreview = _interopRequireDefault(__webpack_require__(620));

var _utils = __webpack_require__(595);

var instance;
var defaultConfig = {
  loop: true,
  value: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onClose: null,
  onChange: null,
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  asyncClose: false,
  transition: 'van-fade',
  getContainer: 'body',
  overlayStyle: null,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
};

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
  instance.$on('scale', function (data) {
    if (instance.onScale) {
      instance.onScale(data);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2.default)(instance, defaultConfig, options);
  instance.$once('input', function (show) {
    instance.value = show;
  });
  instance.$once('closed', function () {
    instance.images = [];
  });

  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.Component = _ImagePreview.default;

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bem = exports.createComponent = void 0;

var _utils = __webpack_require__(595);

var _createNamespace = (0, _utils.createNamespace)('image-preview'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

exports.bem = bem;
exports.createComponent = createComponent;

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(13));

var _deepAssign = __webpack_require__(624);

var _zhCN = _interopRequireDefault(__webpack_require__(625));

var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
  }
};
exports.default = _default;

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.camelize = camelize;
exports.padZero = padZero;
var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find: function find(vm) {
    return this.stack.filter(function (item) {
      return item.vm === vm;
    })[0];
  },
  remove: function remove(vm) {
    var item = this.find(vm);
    if (!item) return;
    item.vm = null;
    item.overlay = null;
    var index = this.stack.indexOf(item);
    this.stack.splice(index, 1);
  }
};
exports.context = context;

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeNode = removeNode;

function removeNode(el) {
  var parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
}

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(4));

var _utils = __webpack_require__(595);

var _functional = __webpack_require__(599);

var _info = _interopRequireDefault(__webpack_require__(635));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var _props$badge;

  var name = correctName(props.name);
  var imageIcon = isImage(name);

  if (false) {
    console.warn('[Vant] Icon: "info" prop is deprecated, use "badge" prop instead.');
  }

  return h(props.tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: (0, _utils.addUnit)(props.size)
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": bem('image'),
    "attrs": {
      "src": name
    }
  }), h(_info.default, {
    "attrs": {
      "dot": props.dot,
      "info": (_props$badge = props.badge) != null ? _props$badge : props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

var _default = createComponent(Icon);

exports.default = _default;

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ChildrenMixin = ChildrenMixin;
exports.ParentMixin = ParentMixin;

var _vnodes = __webpack_require__(639);

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return {
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();

      if (this.parent) {
        return this.parent.children.indexOf(this);
      }

      return null;
    }, _computed),
    watch: {
      disableBindRelation: function disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      }
    },
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        (0, _vnodes.sortChildren)(children, this.parent);
        this.parent.children = children;
      }
    }
  };
}

function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(240);
__webpack_require__(617);
__webpack_require__(614);
__webpack_require__(618);
__webpack_require__(646);
__webpack_require__(619);
__webpack_require__(241);
__webpack_require__(649);
__webpack_require__(651);
__webpack_require__(653);

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(644);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("44146242", content, true, {});

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addUnit = addUnit;
exports.unitToPx = unitToPx;

var _ = __webpack_require__(595);

var _number = __webpack_require__(628);

function addUnit(value) {
  if (!(0, _.isDef)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _number.isNumeric)(value) ? value + "px" : value;
} // cache


var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (_.inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(4));

var _utils = __webpack_require__(595);

var _functional = __webpack_require__(599);

// Utils
var _createNamespace = (0, _utils.createNamespace)('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var _props$textColor;

    var style = {
      fontSize: (0, _utils.addUnit)(props.textSize),
      color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = (0, _utils.addUnit)(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  textColor: String,
  type: {
    type: String,
    default: 'circular'
  }
};

var _default = createComponent(Loading);

exports.default = _default;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(643);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("ce1ac69c", content, true, {});

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("96658f66", content, true, {});

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("26deafce", content, true, {});

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _shared = __webpack_require__(605);

var _popup = __webpack_require__(629);

var _touch = __webpack_require__(600);

var _bindEvent = __webpack_require__(601);

var _icon = _interopRequireDefault(__webpack_require__(610));

var _swipe = _interopRequireDefault(__webpack_require__(636));

var _ImagePreviewItem = _interopRequireDefault(__webpack_require__(640));

// Utils
// Mixins
// Components
var _default2 = (0, _shared.createComponent)({
  mixins: [_touch.TouchMixin, (0, _popup.PopupMixin)({
    skipToggleEvent: true
  }), (0, _bindEvent.BindEventMixin)(function (bind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
  })],
  props: {
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    overlayStyle: Object,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    transition: {
      type: String,
      default: 'van-fade'
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 300
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    overlayClass: {
      type: String,
      default: (0, _shared.bem)('overlay')
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null
    };
  },
  mounted: function mounted() {
    this.resize();
  },
  watch: {
    startPosition: 'setActive',
    value: function value(val) {
      var _this = this;

      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(function () {
          _this.resize();

          _this.$refs.swipe.swipeTo(+_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    }
  },
  methods: {
    resize: function resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        var rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },
    emitClose: function emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },
    emitScale: function emitScale(args) {
      this.$emit('scale', args);
    },
    setActive: function setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": (0, _shared.bem)('index')
        }, [this.slots('index', {
          index: this.active
        }) || this.active + 1 + " / " + this.images.length]);
      }
    },
    genCover: function genCover() {
      var h = this.$createElement;
      var cover = this.slots('cover');

      if (cover) {
        return h("div", {
          "class": (0, _shared.bem)('cover')
        }, [cover]);
      }
    },
    genImages: function genImages() {
      var _this2 = this;

      var h = this.$createElement;
      return h(_swipe.default, {
        "ref": "swipe",
        "attrs": {
          "lazyRender": true,
          "loop": this.loop,
          "duration": this.swipeDuration,
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators,
          "indicatorColor": "white"
        },
        "class": (0, _shared.bem)('swipe'),
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image) {
        return h(_ImagePreviewItem.default, {
          "attrs": {
            "src": image,
            "show": _this2.value,
            "active": _this2.active,
            "maxZoom": _this2.maxZoom,
            "minZoom": _this2.minZoom,
            "rootWidth": _this2.rootWidth,
            "rootHeight": _this2.rootHeight
          },
          "on": {
            "scale": _this2.emitScale,
            "close": _this2.emitClose
          }
        });
      })]);
    },
    genClose: function genClose() {
      var h = this.$createElement;

      if (this.closeable) {
        return h(_icon.default, {
          "attrs": {
            "role": "button",
            "name": this.closeIcon
          },
          "class": (0, _shared.bem)('close-icon', this.closeIconPosition),
          "on": {
            "click": this.emitClose
          }
        });
      }
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterLeave": this.onClosed
      }
    }, [this.shouldRender ? h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [(0, _shared.bem)(), this.className]
    }, [this.genClose(), this.genImages(), this.genIndex(), this.genCover()]) : null]);
  }
});

exports.default = _default2;

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = __webpack_require__(622);

var _component = __webpack_require__(623);

var _i18n = __webpack_require__(627);

function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createBEM = createBEM;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function gen(name, mods) {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return " " + name + "--" + mods;
  }

  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }

  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? name + "__" + el : name;
    return "" + el + gen(el, mods);
  };
}

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.createComponent = createComponent;

__webpack_require__(606);

var _ = __webpack_require__(595);

var _string = __webpack_require__(607);

var _slots = __webpack_require__(626);

var _vue = _interopRequireDefault(__webpack_require__(13));

/**
 * Create a basic component with common options
 */
function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _string.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3


function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if ((0, _.isFunction)(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.deepAssign = deepAssign;

var _ = __webpack_require__(595);

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SlotsMixin = void 0;

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};
exports.SlotsMixin = SlotsMixin;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.createI18N = createI18N;

var _ = __webpack_require__(595);

var _string = __webpack_require__(607);

var _locale = _interopRequireDefault(__webpack_require__(606));

function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var messages = _locale.default.messages();

    var message = (0, _.get)(messages, prefix + path) || (0, _.get)(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _.isFunction)(message) ? message.apply(void 0, args) : message;
  };
}

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNumeric = isNumeric;
exports.isNaN = isNaN;

function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PopupMixin = PopupMixin;
exports.popupMixinProps = void 0;

var _context = __webpack_require__(608);

var _overlay = __webpack_require__(630);

var _event = __webpack_require__(597);

var _node = __webpack_require__(609);

var _scroll = __webpack_require__(632);

var _touch = __webpack_require__(600);

var _portal = __webpack_require__(633);

var _closeOnPopstate = __webpack_require__(634);

// Context
// Utils
// Mixins
var popupMixinProps = {
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  }
};
exports.popupMixinProps = popupMixinProps;

function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    mixins: [_touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin, (0, _portal.PortalMixin)({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          (0, _overlay.updateOverlay)();
        }
      }
    })],
    provide: function provide() {
      return {
        vanPopup: this
      };
    },
    props: popupMixinProps,
    data: function data() {
      this.onReopenCallback = [];
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      (0, _overlay.removeOverlay)(this);

      if (this.opened) {
        this.removeLock();
      }

      if (this.getContainer) {
        (0, _node.removeNode)(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex


        if (this.zIndex !== undefined) {
          _context.context.zIndex = this.zIndex;
        }

        this.opened = true;
        this.renderOverlay();
        this.addLock();
        this.onReopenCallback.forEach(function (callback) {
          callback();
        });
      },
      addLock: function addLock() {
        if (this.lockScroll) {
          (0, _event.on)(document, 'touchstart', this.touchStart);
          (0, _event.on)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }

          _context.context.lockCount++;
        }
      },
      removeLock: function removeLock() {
        if (this.lockScroll && _context.context.lockCount) {
          _context.context.lockCount--;
          (0, _event.off)(document, 'touchstart', this.touchStart);
          (0, _event.off)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }

        (0, _overlay.closeOverlay)(this);
        this.opened = false;
        this.removeLock();
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = (0, _scroll.getScroller)(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */


        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          (0, _event.preventDefault)(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;

        if (this.$isServer || !this.value) {
          return;
        }

        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);

          if (_this.overlay) {
            (0, _overlay.openOverlay)(_this, {
              zIndex: _context.context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            (0, _overlay.closeOverlay)(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }

        this.$el.style.zIndex = ++_context.context.zIndex + value;
      },
      onReopen: function onReopen(callback) {
        this.onReopenCallback.push(callback);
      }
    }
  };
}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;
exports.removeOverlay = removeOverlay;

var _extends2 = _interopRequireDefault(__webpack_require__(598));

var _overlay = _interopRequireDefault(__webpack_require__(631));

var _context = __webpack_require__(608);

var _functional = __webpack_require__(599);

var _node = __webpack_require__(609);

var defaultConfig = {
  className: '',
  customStyle: {}
};

function mountOverlay(vm) {
  return (0, _functional.mount)(_overlay.default, {
    on: {
      // close popup when overlay clicked & closeOnClickOverlay is true
      click: function click() {
        vm.$emit('click-overlay');

        if (vm.closeOnClickOverlay) {
          if (vm.onClickOverlay) {
            vm.onClickOverlay();
          } else {
            vm.close();
          }
        }
      }
    }
  });
}

function updateOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    var el = vm.$el;
    var config = item.config,
        overlay = item.overlay;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    }

    (0, _extends2.default)(overlay, defaultConfig, config, {
      show: true
    });
  }
}

function openOverlay(vm, config) {
  var item = _context.context.find(vm);

  if (item) {
    item.config = config;
  } else {
    var overlay = mountOverlay(vm);

    _context.context.stack.push({
      vm: vm,
      config: config,
      overlay: overlay
    });
  }

  updateOverlay(vm);
}

function closeOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    item.overlay.show = false;
  }
}

function removeOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    (0, _node.removeNode)(item.overlay.$el);

    _context.context.remove(vm);
  }
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(4));

var _extends2 = _interopRequireDefault(__webpack_require__(598));

var _utils = __webpack_require__(595);

var _functional = __webpack_require__(599);

var _event = __webpack_require__(597);

// Utils
var _createNamespace = (0, _utils.createNamespace)('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2.default)({
    zIndex: props.zIndex
  }, props.customStyle);

  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": props.lockScroll ? preventTouchMove : _utils.noop
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default == null ? void 0 : slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  zIndex: [Number, String],
  duration: [Number, String],
  className: null,
  customStyle: Object,
  lockScroll: {
    type: Boolean,
    default: true
  }
};

var _default = createComponent(Overlay);

exports.default = _default;

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getScroller = getScroller;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;
exports.getVisibleTop = getVisibleTop;

function isWindow(val) {
  return val === window;
} // get nearest scroll element
// https://github.com/vant-ui/vant/issues/3823


var overflowScrollReg = /scroll|auto|overlay/i;

function getScroller(el, root) {
  if (root === void 0) {
    root = window;
  }

  var node = el;

  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
}

function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top


function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }

  return el.getBoundingClientRect().height;
}

function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PortalMixin = PortalMixin;

function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      ref = _ref.ref,
      afterPortal = _ref.afterPortal;

  return {
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  };
}

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CloseOnPopstateMixin = void 0;

var _event = __webpack_require__(597);

var _bindEvent = __webpack_require__(601);

var CloseOnPopstateMixin = {
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    onPopstate: function onPopstate() {
      this.close();
      this.shouldReopen = false;
    },
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.onPopstate);
      }
    }
  }
};
exports.CloseOnPopstateMixin = CloseOnPopstateMixin;

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(4));

var _utils = __webpack_require__(595);

var _functional = __webpack_require__(599);

// Utils
var _createNamespace = (0, _utils.createNamespace)('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = (0, _utils.isDef)(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      dot: dot
    })
  }, (0, _functional.inherit)(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};

var _default = createComponent(Info);

exports.default = _default;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__(595);

var _style = __webpack_require__(637);

var _event = __webpack_require__(597);

var _raf = __webpack_require__(638);

var _number = __webpack_require__(603);

var _touch = __webpack_require__(600);

var _relation = __webpack_require__(611);

var _bindEvent = __webpack_require__(601);

// Utils
// Mixins
var _createNamespace = (0, _utils.createNamespace)('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_touch.TouchMixin, (0, _relation.ParentMixin)('vanSwipe'), (0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
    bind(window, 'visibilitychange', this.onVisibilityChange);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      rect: null,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swiping: false,
      computedWidth: 0,
      computedHeight: 0
    };
  },
  watch: {
    children: function children() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (_autoplay > 0) {
        this.autoPlay();
      } else {
        this.clear();
      }
    }
  },
  computed: {
    count: function count() {
      return this.children.length;
    },
    maxCount: function maxCount() {
      return Math.ceil(Math.abs(this.minOffset) / this.size);
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var style = {
        transitionDuration: (this.swiping ? 0 : this.duration) + "ms",
        transform: "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };

      if (this.size) {
        var mainAxis = this.vertical ? 'height' : 'width';
        var crossAxis = this.vertical ? 'width' : 'height';
        style[mainAxis] = this.trackSize + "px";
        style[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '';
      }

      return style;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = +this.initialSwipe;
      }

      if (!this.$el || (0, _style.isHidden)(this.$el)) {
        return;
      }

      clearTimeout(this.timer);
      var rect = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };
      this.rect = rect;
      this.swiping = true;
      this.active = active;
      this.computedWidth = +this.width || rect.width;
      this.computedHeight = +this.height || rect.height;
      this.offset = this.getTargetOffset(active);
      this.children.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onVisibilityChange: function onVisibilityChange() {
      if (document.hidden) {
        this.clear();
      } else {
        this.autoPlay();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.touchStartTime = Date.now();
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;
      var size = this.size,
          delta = this.delta;
      var duration = Date.now() - this.touchStartTime;
      var speed = delta / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;

      if (shouldSwipe && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        var pace = 0;

        if (this.loop) {
          pace = offset > 0 ? delta > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
        }

        this.move({
          pace: pace,
          emitChange: true
        });
      } else if (delta) {
        this.move({
          pace: 0
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count,
          maxCount = this.maxCount;

      if (pace) {
        if (this.loop) {
          return (0, _number.range)(active + pace, -1, count);
        }

        return (0, _number.range)(active + pace, 0, maxCount);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = offset - currentPosition;

      if (!this.loop) {
        targetOffset = (0, _number.range)(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref) {
      var _ref$pace = _ref.pace,
          pace = _ref$pace === void 0 ? 0 : _ref$pace,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          emitChange = _ref.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          children = this.children,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (children[0] && targetOffset !== minOffset) {
          var outRightBound = targetOffset < minOffset;
          children[0].offset = outRightBound ? trackSize : 0;
        }

        if (children[count - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    prev: function prev() {
      var _this = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this.swiping = false;

        _this.move({
          pace: -1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    next: function next() {
      var _this2 = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this2.swiping = false;

        _this2.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this3 = this;

      if (options === void 0) {
        options = {};
      }

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        var targetIndex;

        if (_this3.loop && index === _this3.count) {
          targetIndex = _this3.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this3.count;
        }

        if (options.immediate) {
          (0, _raf.doubleRaf)(function () {
            _this3.swiping = false;
          });
        } else {
          _this3.swiping = false;
        }

        _this3.move({
          pace: targetIndex - _this3.active,
          emitChange: true
        });
      });
    },
    correctPosition: function correctPosition() {
      this.swiping = true;

      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this4 = this;

      var autoplay = this.autoplay;

      if (autoplay > 0 && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this4.next();

          _this4.autoPlay();
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this5 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this5.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track', {
        vertical: this.vertical
      })
    }, [this.slots()]), this.genIndicator()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isHidden = isHidden;

function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;

var _ = __webpack_require__(595);

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation


function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sortChildren = sortChildren;

function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.componentInstance) {
        traverse(vnode.componentInstance.$children.map(function (item) {
          return item.$vnode;
        }));
      }

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
} // sort children instances by vnodes order


function sortChildren(children, parent) {
  var componentOptions = parent.$vnode.componentOptions;

  if (!componentOptions || !componentOptions.children) {
    return;
  }

  var vnodes = flattenVNodes(componentOptions.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _shared = __webpack_require__(605);

var _number = __webpack_require__(603);

var _event = __webpack_require__(597);

var _touch = __webpack_require__(600);

var _image = _interopRequireDefault(__webpack_require__(641));

var _loading = _interopRequireDefault(__webpack_require__(616));

var _swipeItem = _interopRequireDefault(__webpack_require__(642));

// Utils
// Mixins
// Component
function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

var _default = {
  mixins: [_touch.TouchMixin],
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    };
  },
  computed: {
    vertical: function vertical() {
      var rootWidth = this.rootWidth,
          rootHeight = this.rootHeight;
      var rootRatio = rootHeight / rootWidth;
      return this.imageRatio > rootRatio;
    },
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        var offsetX = this.moveX / scale;
        var offsetY = this.moveY / scale;
        style.transform = "scale(" + scale + ", " + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
      }

      return style;
    },
    maxMoveX: function maxMoveX() {
      if (this.imageRatio) {
        var displayWidth = this.vertical ? this.rootHeight / this.imageRatio : this.rootWidth;
        return Math.max(0, (this.scale * displayWidth - this.rootWidth) / 2);
      }

      return 0;
    },
    maxMoveY: function maxMoveY() {
      if (this.imageRatio) {
        var displayHeight = this.vertical ? this.rootHeight : this.rootWidth * this.imageRatio;
        return Math.max(0, (this.scale * displayHeight - this.rootHeight) / 2);
      }

      return 0;
    }
  },
  watch: {
    active: 'resetScale',
    show: function show(val) {
      if (!val) {
        this.resetScale();
      }
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    resetScale: function resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },
    setScale: function setScale(scale) {
      scale = (0, _number.range)(scale, +this.minZoom, +this.maxZoom);

      if (scale !== this.scale) {
        this.scale = scale;
        this.$emit('scale', {
          scale: this.scale,
          index: this.active
        });
      }
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;
      var _this$offsetX = this.offsetX,
          offsetX = _this$offsetX === void 0 ? 0 : _this$offsetX;
      this.touchStart(event);
      this.touchStartTime = new Date();
      this.fingerNum = touches.length;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.moving = this.fingerNum === 1 && this.scale !== 1;
      this.zooming = this.fingerNum === 2 && !offsetX;

      if (this.zooming) {
        this.startScale = this.scale;
        this.startDistance = getDistance(event.touches);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;
      this.touchMove(event);

      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }

      if (this.moving) {
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _number.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _number.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.setScale(scale);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (this.moving || this.zooming) {
        stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = (0, _number.range)(this.moveX, -this.maxMoveX, this.maxMoveX);
            this.moveY = (0, _number.range)(this.moveY, -this.maxMoveY, this.maxMoveY);
            this.zooming = false;
          }

          this.moving = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }
      } // eliminate tap delay on safari


      (0, _event.preventDefault)(event, stopPropagation);
      this.checkTap();
      this.resetTouchStatus();
    },
    checkTap: function checkTap() {
      var _this = this;

      if (this.fingerNum > 1) {
        return;
      }

      var _this$offsetX2 = this.offsetX,
          offsetX = _this$offsetX2 === void 0 ? 0 : _this$offsetX2,
          _this$offsetY = this.offsetY,
          offsetY = _this$offsetY === void 0 ? 0 : _this$offsetY;
      var deltaTime = new Date() - this.touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 5;

      if (offsetX < TAP_OFFSET && offsetY < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (this.doubleTapTimer) {
          clearTimeout(this.doubleTapTimer);
          this.doubleTapTimer = null;
          this.toggleScale();
        } else {
          this.doubleTapTimer = setTimeout(function () {
            _this.$emit('close');

            _this.doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },
    onLoad: function onLoad(event) {
      var _event$target = event.target,
          naturalWidth = _event$target.naturalWidth,
          naturalHeight = _event$target.naturalHeight;
      this.imageRatio = naturalHeight / naturalWidth;
    }
  },
  render: function render() {
    var h = arguments[0];
    var imageSlots = {
      loading: function loading() {
        return h(_loading.default, {
          "attrs": {
            "type": "spinner"
          }
        });
      }
    };
    return h(_swipeItem.default, {
      "class": (0, _shared.bem)('swipe-item')
    }, [h(_image.default, {
      "attrs": {
        "src": this.src,
        "fit": "contain"
      },
      "class": (0, _shared.bem)('image', {
        vertical: this.vertical
      }),
      "style": this.imageStyle,
      "scopedSlots": imageSlots,
      "on": {
        "load": this.onLoad
      }
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(4));

var _utils = __webpack_require__(595);

var _icon = _interopRequireDefault(__webpack_require__(610));

var _createNamespace = (0, _utils.createNamespace)('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    errorIcon: {
      type: String,
      default: 'photo-fail'
    },
    loadingIcon: {
      type: String,
      default: 'photo'
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if ((0, _utils.isDef)(this.width)) {
        style.width = (0, _utils.addUnit)(this.width);
      }

      if ((0, _utils.isDef)(this.height)) {
        style.height = (0, _utils.addUnit)(this.height);
      }

      if ((0, _utils.isDef)(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload && _utils.inBrowser) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    genPlaceholder: function genPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon.default, {
          "attrs": {
            "name": this.loadingIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('loading-icon')
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon.default, {
          "attrs": {
            "name": this.errorIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('error-icon')
        })]);
      }
    },
    genImage: function genImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genImage(), this.genPlaceholder(), this.slots()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(596);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(598));

var _utils = __webpack_require__(595);

var _relation = __webpack_require__(611);

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSwipe')],
  data: function data() {
    return {
      offset: 0,
      inited: false,
      mounted: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.mounted = true;
    });
  },
  computed: {
    style: function style() {
      var style = {};
      var _this$parent = this.parent,
          size = _this$parent.size,
          vertical = _this$parent.vertical;

      if (size) {
        style[vertical ? 'height' : 'width'] = size + "px";
      }

      if (this.offset) {
        style.transform = "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)";
      }

      return style;
    },
    shouldRender: function shouldRender() {
      var index = this.index,
          inited = this.inited,
          parent = this.parent,
          mounted = this.mounted;

      if (!parent.lazyRender || inited) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!mounted) {
        return false;
      }

      var active = parent.activeIndicator;
      var maxActive = parent.count - 1;
      var prevActive = active === 0 && parent.loop ? maxActive : active - 1;
      var nextActive = active === maxActive && parent.loop ? 0 : active + 1;
      var shouldRender = index === active || index === prevActive || index === nextActive;

      if (shouldRender) {
        this.inited = true;
      }

      return shouldRender;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style,
      "on": (0, _extends2.default)({}, this.$listeners)
    }, [this.shouldRender && this.slots()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-overlay{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.7)}", ""]);

// exports


/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-info{position:absolute;top:0;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:16px;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-info--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}", ""]);

// exports


/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-icon{position:relative;font:normal normal normal 14px/1 vant-icon;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon,.van-icon:before{display:inline-block}.van-icon-exchange:before{content:\"\\E6AF\"}.van-icon-eye:before{content:\"\\E6B0\"}.van-icon-enlarge:before{content:\"\\E6B1\"}.van-icon-expand-o:before{content:\"\\E6B2\"}.van-icon-eye-o:before{content:\"\\E6B3\"}.van-icon-expand:before{content:\"\\E6B4\"}.van-icon-filter-o:before{content:\"\\E6B5\"}.van-icon-fire:before{content:\"\\E6B6\"}.van-icon-fail:before{content:\"\\E6B7\"}.van-icon-failure:before{content:\"\\E6B8\"}.van-icon-fire-o:before{content:\"\\E6B9\"}.van-icon-flag-o:before{content:\"\\E6BA\"}.van-icon-font:before{content:\"\\E6BB\"}.van-icon-font-o:before{content:\"\\E6BC\"}.van-icon-gem-o:before{content:\"\\E6BD\"}.van-icon-flower-o:before{content:\"\\E6BE\"}.van-icon-gem:before{content:\"\\E6BF\"}.van-icon-gift-card:before{content:\"\\E6C0\"}.van-icon-friends:before{content:\"\\E6C1\"}.van-icon-friends-o:before{content:\"\\E6C2\"}.van-icon-gold-coin:before{content:\"\\E6C3\"}.van-icon-gold-coin-o:before{content:\"\\E6C4\"}.van-icon-good-job-o:before{content:\"\\E6C5\"}.van-icon-gift:before{content:\"\\E6C6\"}.van-icon-gift-o:before{content:\"\\E6C7\"}.van-icon-gift-card-o:before{content:\"\\E6C8\"}.van-icon-good-job:before{content:\"\\E6C9\"}.van-icon-home-o:before{content:\"\\E6CA\"}.van-icon-goods-collect:before{content:\"\\E6CB\"}.van-icon-graphic:before{content:\"\\E6CC\"}.van-icon-goods-collect-o:before{content:\"\\E6CD\"}.van-icon-hot-o:before{content:\"\\E6CE\"}.van-icon-info:before{content:\"\\E6CF\"}.van-icon-hotel-o:before{content:\"\\E6D0\"}.van-icon-info-o:before{content:\"\\E6D1\"}.van-icon-hot-sale-o:before{content:\"\\E6D2\"}.van-icon-hot:before{content:\"\\E6D3\"}.van-icon-like:before{content:\"\\E6D4\"}.van-icon-idcard:before{content:\"\\E6D5\"}.van-icon-invitation:before{content:\"\\E6D6\"}.van-icon-like-o:before{content:\"\\E6D7\"}.van-icon-hot-sale:before{content:\"\\E6D8\"}.van-icon-location-o:before{content:\"\\E6D9\"}.van-icon-location:before{content:\"\\E6DA\"}.van-icon-label:before{content:\"\\E6DB\"}.van-icon-lock:before{content:\"\\E6DC\"}.van-icon-label-o:before{content:\"\\E6DD\"}.van-icon-map-marked:before{content:\"\\E6DE\"}.van-icon-logistics:before{content:\"\\E6DF\"}.van-icon-manager:before{content:\"\\E6E0\"}.van-icon-more:before{content:\"\\E6E1\"}.van-icon-live:before{content:\"\\E6E2\"}.van-icon-manager-o:before{content:\"\\E6E3\"}.van-icon-medal:before{content:\"\\E6E4\"}.van-icon-more-o:before{content:\"\\E6E5\"}.van-icon-music-o:before{content:\"\\E6E6\"}.van-icon-music:before{content:\"\\E6E7\"}.van-icon-new-arrival-o:before{content:\"\\E6E8\"}.van-icon-medal-o:before{content:\"\\E6E9\"}.van-icon-new-o:before{content:\"\\E6EA\"}.van-icon-free-postage:before{content:\"\\E6EB\"}.van-icon-newspaper-o:before{content:\"\\E6EC\"}.van-icon-new-arrival:before{content:\"\\E6ED\"}.van-icon-minus:before{content:\"\\E6EE\"}.van-icon-orders-o:before{content:\"\\E6EF\"}.van-icon-new:before{content:\"\\E6F0\"}.van-icon-paid:before{content:\"\\E6F1\"}.van-icon-notes-o:before{content:\"\\E6F2\"}.van-icon-other-pay:before{content:\"\\E6F3\"}.van-icon-pause-circle:before{content:\"\\E6F4\"}.van-icon-pause:before{content:\"\\E6F5\"}.van-icon-pause-circle-o:before{content:\"\\E6F6\"}.van-icon-peer-pay:before{content:\"\\E6F7\"}.van-icon-pending-payment:before{content:\"\\E6F8\"}.van-icon-passed:before{content:\"\\E6F9\"}.van-icon-plus:before{content:\"\\E6FA\"}.van-icon-phone-circle-o:before{content:\"\\E6FB\"}.van-icon-phone-o:before{content:\"\\E6FC\"}.van-icon-printer:before{content:\"\\E6FD\"}.van-icon-photo-fail:before{content:\"\\E6FE\"}.van-icon-phone:before{content:\"\\E6FF\"}.van-icon-photo-o:before{content:\"\\E700\"}.van-icon-play-circle:before{content:\"\\E701\"}.van-icon-play:before{content:\"\\E702\"}.van-icon-phone-circle:before{content:\"\\E703\"}.van-icon-point-gift-o:before{content:\"\\E704\"}.van-icon-point-gift:before{content:\"\\E705\"}.van-icon-play-circle-o:before{content:\"\\E706\"}.van-icon-shrink:before{content:\"\\E707\"}.van-icon-photo:before{content:\"\\E708\"}.van-icon-qr:before{content:\"\\E709\"}.van-icon-qr-invalid:before{content:\"\\E70A\"}.van-icon-question-o:before{content:\"\\E70B\"}.van-icon-revoke:before{content:\"\\E70C\"}.van-icon-replay:before{content:\"\\E70D\"}.van-icon-service:before{content:\"\\E70E\"}.van-icon-question:before{content:\"\\E70F\"}.van-icon-search:before{content:\"\\E710\"}.van-icon-refund-o:before{content:\"\\E711\"}.van-icon-service-o:before{content:\"\\E712\"}.van-icon-scan:before{content:\"\\E713\"}.van-icon-share:before{content:\"\\E714\"}.van-icon-send-gift-o:before{content:\"\\E715\"}.van-icon-share-o:before{content:\"\\E716\"}.van-icon-setting:before{content:\"\\E717\"}.van-icon-points:before{content:\"\\E718\"}.van-icon-photograph:before{content:\"\\E719\"}.van-icon-shop:before{content:\"\\E71A\"}.van-icon-shop-o:before{content:\"\\E71B\"}.van-icon-shop-collect-o:before{content:\"\\E71C\"}.van-icon-shop-collect:before{content:\"\\E71D\"}.van-icon-smile:before{content:\"\\E71E\"}.van-icon-shopping-cart-o:before{content:\"\\E71F\"}.van-icon-sign:before{content:\"\\E720\"}.van-icon-sort:before{content:\"\\E721\"}.van-icon-star-o:before{content:\"\\E722\"}.van-icon-smile-comment-o:before{content:\"\\E723\"}.van-icon-stop:before{content:\"\\E724\"}.van-icon-stop-circle-o:before{content:\"\\E725\"}.van-icon-smile-o:before{content:\"\\E726\"}.van-icon-star:before{content:\"\\E727\"}.van-icon-success:before{content:\"\\E728\"}.van-icon-stop-circle:before{content:\"\\E729\"}.van-icon-records:before{content:\"\\E72A\"}.van-icon-shopping-cart:before{content:\"\\E72B\"}.van-icon-tosend:before{content:\"\\E72C\"}.van-icon-todo-list:before{content:\"\\E72D\"}.van-icon-thumb-circle-o:before{content:\"\\E72E\"}.van-icon-thumb-circle:before{content:\"\\E72F\"}.van-icon-umbrella-circle:before{content:\"\\E730\"}.van-icon-underway:before{content:\"\\E731\"}.van-icon-upgrade:before{content:\"\\E732\"}.van-icon-todo-list-o:before{content:\"\\E733\"}.van-icon-tv-o:before{content:\"\\E734\"}.van-icon-underway-o:before{content:\"\\E735\"}.van-icon-user-o:before{content:\"\\E736\"}.van-icon-vip-card-o:before{content:\"\\E737\"}.van-icon-vip-card:before{content:\"\\E738\"}.van-icon-send-gift:before{content:\"\\E739\"}.van-icon-wap-home:before{content:\"\\E73A\"}.van-icon-wap-nav:before{content:\"\\E73B\"}.van-icon-volume-o:before{content:\"\\E73C\"}.van-icon-video:before{content:\"\\E73D\"}.van-icon-wap-home-o:before{content:\"\\E73E\"}.van-icon-volume:before{content:\"\\E73F\"}.van-icon-warning:before{content:\"\\E740\"}.van-icon-weapp-nav:before{content:\"\\E741\"}.van-icon-wechat-pay:before{content:\"\\E742\"}.van-icon-warning-o:before{content:\"\\E743\"}.van-icon-wechat:before{content:\"\\E744\"}.van-icon-setting-o:before{content:\"\\E745\"}.van-icon-youzan-shield:before{content:\"\\E746\"}.van-icon-warn-o:before{content:\"\\E747\"}.van-icon-smile-comment:before{content:\"\\E748\"}.van-icon-user-circle-o:before{content:\"\\E749\"}.van-icon-video-o:before{content:\"\\E74A\"}.van-icon-add-square:before{content:\"\\E65C\"}.van-icon-add:before{content:\"\\E65D\"}.van-icon-arrow-down:before{content:\"\\E65E\"}.van-icon-arrow-up:before{content:\"\\E65F\"}.van-icon-arrow:before{content:\"\\E660\"}.van-icon-after-sale:before{content:\"\\E661\"}.van-icon-add-o:before{content:\"\\E662\"}.van-icon-alipay:before{content:\"\\E663\"}.van-icon-ascending:before{content:\"\\E664\"}.van-icon-apps-o:before{content:\"\\E665\"}.van-icon-aim:before{content:\"\\E666\"}.van-icon-award:before{content:\"\\E667\"}.van-icon-arrow-left:before{content:\"\\E668\"}.van-icon-award-o:before{content:\"\\E669\"}.van-icon-audio:before{content:\"\\E66A\"}.van-icon-bag-o:before{content:\"\\E66B\"}.van-icon-balance-list:before{content:\"\\E66C\"}.van-icon-back-top:before{content:\"\\E66D\"}.van-icon-bag:before{content:\"\\E66E\"}.van-icon-balance-pay:before{content:\"\\E66F\"}.van-icon-balance-o:before{content:\"\\E670\"}.van-icon-bar-chart-o:before{content:\"\\E671\"}.van-icon-bars:before{content:\"\\E672\"}.van-icon-balance-list-o:before{content:\"\\E673\"}.van-icon-birthday-cake-o:before{content:\"\\E674\"}.van-icon-bookmark:before{content:\"\\E675\"}.van-icon-bill:before{content:\"\\E676\"}.van-icon-bell:before{content:\"\\E677\"}.van-icon-browsing-history-o:before{content:\"\\E678\"}.van-icon-browsing-history:before{content:\"\\E679\"}.van-icon-bookmark-o:before{content:\"\\E67A\"}.van-icon-bulb-o:before{content:\"\\E67B\"}.van-icon-bullhorn-o:before{content:\"\\E67C\"}.van-icon-bill-o:before{content:\"\\E67D\"}.van-icon-calendar-o:before{content:\"\\E67E\"}.van-icon-brush-o:before{content:\"\\E67F\"}.van-icon-card:before{content:\"\\E680\"}.van-icon-cart-o:before{content:\"\\E681\"}.van-icon-cart-circle:before{content:\"\\E682\"}.van-icon-cart-circle-o:before{content:\"\\E683\"}.van-icon-cart:before{content:\"\\E684\"}.van-icon-cash-on-deliver:before{content:\"\\E685\"}.van-icon-cash-back-record:before{content:\"\\E686\"}.van-icon-cashier-o:before{content:\"\\E687\"}.van-icon-chart-trending-o:before{content:\"\\E688\"}.van-icon-certificate:before{content:\"\\E689\"}.van-icon-chat:before{content:\"\\E68A\"}.van-icon-clear:before{content:\"\\E68B\"}.van-icon-chat-o:before{content:\"\\E68C\"}.van-icon-checked:before{content:\"\\E68D\"}.van-icon-clock:before{content:\"\\E68E\"}.van-icon-clock-o:before{content:\"\\E68F\"}.van-icon-close:before{content:\"\\E690\"}.van-icon-closed-eye:before{content:\"\\E691\"}.van-icon-circle:before{content:\"\\E692\"}.van-icon-cluster-o:before{content:\"\\E693\"}.van-icon-column:before{content:\"\\E694\"}.van-icon-comment-circle-o:before{content:\"\\E695\"}.van-icon-cluster:before{content:\"\\E696\"}.van-icon-comment:before{content:\"\\E697\"}.van-icon-comment-o:before{content:\"\\E698\"}.van-icon-comment-circle:before{content:\"\\E699\"}.van-icon-completed:before{content:\"\\E69A\"}.van-icon-credit-pay:before{content:\"\\E69B\"}.van-icon-coupon:before{content:\"\\E69C\"}.van-icon-debit-pay:before{content:\"\\E69D\"}.van-icon-coupon-o:before{content:\"\\E69E\"}.van-icon-contact:before{content:\"\\E69F\"}.van-icon-descending:before{content:\"\\E6A0\"}.van-icon-desktop-o:before{content:\"\\E6A1\"}.van-icon-diamond-o:before{content:\"\\E6A2\"}.van-icon-description:before{content:\"\\E6A3\"}.van-icon-delete:before{content:\"\\E6A4\"}.van-icon-diamond:before{content:\"\\E6A5\"}.van-icon-delete-o:before{content:\"\\E6A6\"}.van-icon-cross:before{content:\"\\E6A7\"}.van-icon-edit:before{content:\"\\E6A8\"}.van-icon-ellipsis:before{content:\"\\E6A9\"}.van-icon-down:before{content:\"\\E6AA\"}.van-icon-discount:before{content:\"\\E6AB\"}.van-icon-ecard-pay:before{content:\"\\E6AC\"}.van-icon-envelop-o:before{content:\"\\E6AE\"}.van-icon-shield-o:before{content:\"\\E74B\"}.van-icon-guide-o:before{content:\"\\E74C\"}@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url(\"data:font/woff2;charset=utf-8;base64,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\") format(\"woff2\"),url(//at.alicdn.com/t/font_2553510_61agzg96wm8.woff?t=1631948257467) format(\"woff\"),url(//at.alicdn.com/t/font_2553510_61agzg96wm8.ttf?t=1631948257467) format(\"truetype\")}.van-icon__image{display:block;width:1em;height:1em;object-fit:contain}", ""]);

// exports


/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("22eb19bd", content, true, {});

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image--round img{border-radius:inherit}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f7f8fa}.van-image__error-icon,.van-image__loading-icon{color:#dcdee0;font-size:32px}", ""]);

// exports


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:16px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 16px 16px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:16px 0 0 16px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:16px 16px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 16px 16px 0}.van-popup--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-popup-slide-bottom-enter-active,.van-popup-slide-left-enter-active,.van-popup-slide-right-enter-active,.van-popup-slide-top-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popup-slide-bottom-leave-active,.van-popup-slide-left-leave-active,.van-popup-slide-right-leave-active,.van-popup-slide-top-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-popup__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-popup__close-icon:active{color:#969799}.van-popup__close-icon--top-left{top:16px;left:16px}.van-popup__close-icon--top-right{top:16px;right:16px}.van-popup__close-icon--bottom-left{bottom:16px;left:16px}.van-popup__close-icon--bottom-right{right:16px;bottom:16px}", ""]);

// exports


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("317e24dc", content, true, {});

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-swipe{position:relative;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);cursor:grab;-webkit-user-select:none;user-select:none}.van-swipe__track{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.van-swipe__track--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s,background-color .2s;transition:opacity .2s,background-color .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}", ""]);

// exports


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("797da69a", content, true, {});

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-swipe-item{position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%}", ""]);

// exports


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("865a5e10", content, true, {});

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image{width:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.van-image-preview__image--vertical{width:auto;height:100%}.van-image-preview__image img{-webkit-user-drag:none}.van-image-preview__image .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%);transform:translate(-50%)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-image-preview__close-icon:active{color:#969799}.van-image-preview__close-icon--top-left{top:16px;left:16px}.van-image-preview__close-icon--top-right{top:16px;right:16px}.van-image-preview__close-icon--bottom-left{bottom:16px;left:16px}.van-image-preview__close-icon--bottom-right{right:16px;bottom:16px}", ""]);

// exports


/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview_style__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vant_lib_image_preview_style__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { ImagePreview: __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default.a },

  data() {
    return {
      g: window.$,
      shopId: $.data.shop.shopId,
      gpId: this.$route.params.gpId,
      gtId: this.$route.query.gtId,
      product: {},
      groupbuyTeam: null,
      shop: {},
      shopImgs: [],
      createCustDlg: false,
      now: new Date(),
      leftHour: null,
      leftMin: null,
      leftSec: null,
      enableJoinTeam: true,
      groupbuyOrderList: null,
      ownerStaffId: 0,
      productMorePicList: []
    };
  },
  created() {
    if (this.$route.query.ownerStaffId) {
      this.ownerStaffId = parseInt(this.$route.query.ownerStaffId);
    }
    if (this.gpId) {
      this.queryGroupbuyProduct();
    }
    if (parseInt(this.gtId)) {
      this.queryGroupbuyTeam();
      this.queryGroupbuyOrders();
    }
  },

  methods: {
    queryGroupbuyProduct() {
      let args = { gpId: this.gpId };
      $.Req.service($.SvName.GROUPBUY_PRODUCT_QUERY, args, ret => {
        this.product = ret.groupbuyProduct;
        if (this.product) {
          this.queryShop();

          if (this.product.productMorePics) {
            let imgs = this.product.productMorePics.split(",");
            for (let img of imgs) {
              this.productMorePicList.push(img);
            }
          }
        }
      }, true);
    },

    queryGroupbuyOrders() {
      if (!this.gtId) return;

      let args = { gtId: this.gtId };
      $.Req.service($.SvName.GROUPBUY_ORDER_QUERY, args, ret => {
        this.groupbuyOrderList = ret.groupbuyOrderList;
      }, true);
    },

    queryGroupbuyTeam() {
      let args = { gtId: this.gtId };
      $.Req.service($.SvName.GROUPBUY_TEAM_QUERY, args, ret => {
        if (!ret.groupbuyTeam) {
          this.enableJoinTeam = false;
          $.Msg.error("不存在此拼团 ~");
          return;
        }
        this.groupbuyTeam = ret.groupbuyTeam;
        if (this.groupbuyTeam.status !== 0) {
          this.enableJoinTeam = false;
        } else {
          this.now = ret.now;
          let diffTimes = (Date.new(ret.groupbuyTeam.endTime).getTime() - Date.new(this.now).getTime()) / 1000;
          if (diffTimes <= 0) {
            this.enableJoinTeam = false;
            $.Msg.info($.Lang.GROUPBUY_OUT_DATETIME);
            return;
          }
          this.calcLeftTimes(diffTimes);

          let timer = setInterval(() => {
            if (parseInt(this.leftHour) + parseInt(this.leftMin) + parseInt(this.leftMin) === 0) {
              clearInterval(timer);
              this.enableJoinTeam = false;
              $.Msg.info($.Lang.GROUPBUY_OUT_DATETIME);
            } else {
              this.calcLeftTimes();
            }
          }, 1000);
        }
      });
    },

    calcLeftTimes(nowTime = null) {
      if (!nowTime) {
        nowTime = parseInt(this.leftHour) * 3600 + parseInt(this.leftMin) * 60 + parseInt(this.leftSec) - 1;
      }
      this.leftHour = parseInt(nowTime / 3600);
      this.leftMin = parseInt((nowTime - this.leftHour * 3600) / 60);
      this.leftSec = nowTime % 60;

      if (this.leftSec < 10) {
        this.leftSec = "0" + this.leftSec;
      }
      if (this.leftMin < 10) {
        this.leftMin = "0" + this.leftMin;
      }
    },

    queryShop() {
      let args = { shopId: this.shopId };
      $.Req.service($.SvName.SHOP_QUERY, args, ret => {
        this.shop = ret.shop;
        if (this.shop.logoPathname) {
          this.shopImgs.push(this.shop.logoPathname);
        }
        if (this.shop.shopPics) {
          let imgs = this.shop.shopPics.split(",");
          for (let img of imgs) {
            this.shopImgs.push(img);
          }
        }
        let addr = "";
        if (this.shop.addrProvinceName) addr += this.shop.addrProvinceName;
        if (this.shop.addrCityName) addr += this.shop.addrCityName;
        if (this.shop.addrDistrictName) addr += this.shop.addrDistrictName;
        if (this.shop.addrDetail) addr += this.shop.addrDetail;
        this.shop.addr = addr;

        this.setShareConf();
      });
    },

    setShareConf() {
      let imgUrl = $.Util.getImgUrl(this.product.sharePic ? this.product.sharePic : this.product.productPic);
      imgUrl = "http://tool.jzongguan.com/url-redirect.php?url=" + encodeURIComponent(imgUrl);
      let shareTitle = "{0}-{1}".format(this.product.shareTitle ? this.product.shareTitle : this.product.productTitle, this.shop.shopName);
      let shareDesc = this.product.shareDesc ? this.product.shareDesc : this.product.productDesc;
      let path = null;
      if (this.gtId) {
        path = "groupbuy-product/{0}?gtId={1}".format(this.gpId, this.gtId);
        if (this.ownerStaffId) {
          path += "&ownerStaffId=" + this.ownerStaffId;
        }
      } else {
        path = "groupbuy-product/{0}".format(this.gpId);
        if (this.ownerStaffId) {
          path += "?ownerStaffId=" + this.ownerStaffId;
        }
      }

      let shareLink = $.Util.getPageUrl(path);
      wx.ready(() => {
        wx.onMenuShareTimeline({
          title: shareTitle,
          link: shareLink,
          imgUrl: imgUrl,
          success: () => {},
          cancel: () => {
            //toddo
          }
        });

        wx.onMenuShareAppMessage({
          title: shareTitle,
          desc: shareDesc,
          link: shareLink,
          imgUrl: imgUrl,
          success: () => {},
          cancel: () => {
            // 用户取消分享后执行的回调函数
          }
        });
      });
    },

    joinGroupbuyTeam() {
      if ($.data.user.guestWxId) {
        let url = "/groupbuy-product-sale/" + this.gpId;
        if (this.gtId) url += "?gtId=" + this.gtId;
        this.$router.push(url);
      } else {
        let path = null;
        if (this.gtId) {
          path = "groupbuy-product-sale/{0}?gtId={1}".format(this.gpId, this.gtId);
        } else {
          path = "groupbuy-product-sale/{0}".format(this.gpId);
        }
        if (this.ownerStaffId) {
          path += "?ownerStaffId=" + this.ownerStaffId;
        }
        location.replace($.Util.getPageUrl(path));
      }
    },

    imagePreview(img) {
      __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default()([$.Util.getImgUrl(img)]);
    }
  }
});

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data() {
    return {
      g: $,
      shopId: $.data.shop.shopId,
      gpId: this.$route.params.gpId,
      gtId: this.$route.query.gtId,
      guestWxId: null,
      product: {},
      cust: {
        name: null,
        phoneNo: null,
        sex: true
      },
      ownerStaffId: null
    };
  },

  created() {
    if (this.$route.query.ownerStaffId) {
      this.ownerStaffId = parseInt(this.$route.query.ownerStaffId);
    }
    if ($.data.user.guestWxId && $.data.user.guestWxId !== 'undefined') {
      this.guestWxId = $.data.user.guestWxId;
    }
    let ckName = $.Util.cookie.get($.Conf.CookieKeys.CUST_NAME);
    if (ckName) this.cust.name = decodeURIComponent(ckName);
    this.cust.phoneNo = $.Util.cookie.get($.Conf.CookieKeys.CUST_PHONE);
    this.queryGroupbuyProduct();
  },

  methods: {
    queryGroupbuyProduct() {
      let args = { gpId: parseInt(this.gpId) };
      $.Req.service($.SvName.GROUPBUY_PRODUCT_QUERY, args, ret => {
        this.product = ret.groupbuyProduct;
      }, true);
    },

    selectSex() {
      this.cust.sex = !this.cust.sex;
    },

    createPayOrder() {
      // check member-info
      if (!this.cust.phoneNo) {
        $.Msg.error('请输入手机号');
        return;
      }
      if (!$.Util.validatePhoneNo(this.cust.phoneNo)) {
        $.Msg.error($.Lang.INVALID_PHONE_NO);
        return;
      }
      if (!this.cust.name) {
        $.Msg.error('请输入姓名');
        return;
      }

      let args = {
        gpId: this.gpId,
        custPhone: this.cust.phoneNo,
        custName: this.cust.name,
        custSex: this.cust.sex,
        custWxid: $.data.user.guestWxId,
        ownerStaffId: this.ownerStaffId
      };
      if (parseInt(this.gtId)) {
        args.gtId = this.gtId;
      }
      $.Util.cookie.set($.Conf.CookieKeys.CUST_NAME, encodeURIComponent(this.cust.name), 100);
      $.Util.cookie.set($.Conf.CookieKeys.CUST_PHONE, this.cust.phoneNo, 100);

      if (!$.data.user.guestWxId || $.data.user.guestWxId === 'undefined') {
        if ($.data.user.guestWxId) {
          $.data.user.guestWxId = null;
          $.Util.cookie.delete($.Conf.CookieKeys.GUEST_WXID);
        }
        $.Msg.error('请刷新后再试');
        return;
      }
      $.Req.service($.SvName.GROUPBUY_PRODUCT_ORDER_CREATE, args, ret => {
        if (ret && ret.paySign) {
          this.callWxPay(ret);
        } else {
          $.Dlg.error('支付调用失败，请稍后再试。');
        }
      }, true, err => {
        $.Dlg.error(err);
        if (err && err.indexOf('支付失败') >= 0) {
          $.Util.cookie.delete($.Conf.CookieKeys.GUEST_WXID);
          $.data.user.guestWxId = null;
          this.reloadPage();
        }
      });
    },

    callWxPay(ret) {
      let args = {
        "appId": ret.appId,
        "nonceStr": ret.nonceStr,
        "package": "prepay_id={0}".format(ret.prepayId),
        "signType": ret.signType,
        "timeStamp": ret.timeStamp,
        "paySign": ret.paySign
      };
      let tradeNo = ret.tradeNo;
      let ownerStaffId = this.ownerStaffId;
      WeixinJSBridge.invoke('getBrandWCPayRequest', args, res => {
        if (res.err_msg === "get_brand_wcpay_request:ok") {
          let args2 = { tradeNo: tradeNo };
          if (ownerStaffId) {
            args2.ownerStaffId = ownerStaffId;
          }
          $.Req.service($.SvName.GROUPBUY_ORDER_FINISH, args2, ret => {
            let gtId = ret.gtId ? ret.gtId : this.gtId;
            alert('支付成功，感谢您的参与。确定后请尽快将拼团页面分享给您的好友，邀请一起拼团~');
            //let productUrl = '/groupbuy-product/{0}?gtId={1}'.format(this.gpId, gtId);
            let productUrl = '/groupbuy-team';
            this.$router.push(productUrl);
          }, true);
        } else {
          $.Dlg.error('支付失败，请稍候重试。');
        }
      });
    },

    reloadPage() {
      let path = null;
      if (this.gtId) {
        path = 'groupbuy-product-sale/{0}?gtId={1}'.format(this.gpId, this.gtId);
      } else {
        path = 'groupbuy-product-sale/{0}'.format(this.gpId);
      }
      location.replace($.Util.getPageUrl(path));
    },

    toProductPage() {
      let path = null;
      if (this.gtId) {
        path = 'groupbuy-product/{0}?gtId={1}'.format(this.gpId, this.gtId);
      } else {
        path = 'groupbuy-product/{0}'.format(this.gpId);
      }
      location.href = $.Util.getPageUrl(path);
    }
  }
});

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(864);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("be50a84e", content, true, {});

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".banner[data-v-1fe74ed6]{width:100%;display:block}.group-prod-bg[data-v-1fe74ed6]{background:-webkit-gradient(from top to bottom,#f6d366,#faa881);background:-webkit-linear-gradient(#f6d366,#faa881);background:-o-linear-gradient(#f6d366,#faa881);background:-moz-linear-gradient(#f6d366,#faa881);background:linear-gradient(#f6d366,#faa881);padding-top:20px}[data-v-1fe74ed6] .mu-raised-button-label{font-size:14px;color:hsla(0,0%,100%,.85);letter-spacing:1px}[data-v-1fe74ed6] .mu-raised-button.mu-raised-button-inverse{background:rgba(255,30,36,.9)!important;color:#fff}.team-recorder[data-v-1fe74ed6]{padding:0 20px;max-height:295px;overflow-y:scroll;margin-bottom:-20px}.team-recorder .row[data-v-1fe74ed6]{align-items:center;margin-bottom:16px}.team-recorder .team-left[data-v-1fe74ed6]{width:40px;height:40px;border-radius:50%;line-height:40px;overflow:hidden;text-align:center}.team-recorder .team-left.header-img img[data-v-1fe74ed6]{display:inline-block;max-width:40px;max-height:40px}.team-recorder .team-center[data-v-1fe74ed6]{flex:1;padding:0 10px}.team-recorder .team-center .team-member[data-v-1fe74ed6]{font-size:14px}.team-recorder .team-center .date[data-v-1fe74ed6]{font-size:12px;color:#666}.team-recorder .team-right[data-v-1fe74ed6]{width:80px}.team-recorder .recorder-tip[data-v-1fe74ed6]{text-align:center;color:#999}.jzg-support[data-v-1fe74ed6]{margin-top:-80px;margin-bottom:10px;background:none;color:#e0e0e0;padding:15px 0 35px}", ""]);

// exports


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:(_vm.shop.shopName),expression:"shop.shopName"}],staticClass:"group-product  ",attrs:{"img-set":"/static/img/logo.ico"}},[_c('div',[(_vm.product && _vm.product.productPic)?_c('img',{staticClass:"banner",attrs:{"src":_vm.g.Util.getImgUrl(_vm.product.productPic)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"group-li"},[_c('div',{staticClass:"group-title"},[_vm._v(_vm._s(_vm.product.productTitle))]),_vm._v(" "),_c('div',{staticClass:"group-buy"},[_c('div',{staticClass:"group-price"},[_c('div',[_vm._v("￥"+_vm._s(_vm.product.price))]),_vm._v(" "),_c('div',[_vm._v("￥"+_vm._s(_vm.product.originalPrice))])]),_vm._v(" "),_c('div',{staticClass:"member-num"},[_vm._v(_vm._s(_vm.product.limitMembers)+"人团")])]),_vm._v(" "),_c('div',{staticClass:"group-tips"},[_c('div',[_vm._v("开团时间："+_vm._s(_vm.g.Util.formatDate(_vm.product.beginDate))+"~"+_vm._s(_vm.g.Util.formatDate(_vm.product.endDate)))]),_vm._v(" "),_c('div',[_vm._v("预付款"),_c('span',[_vm._v("￥"+_vm._s(_vm.product.imprest))])])])]),_vm._v(" "),_c('div',{staticClass:"group-prod-bg"},[_c('div',{staticClass:"group-detail"},[(_vm.product.productDesc)?_c('div',{staticClass:"group-item"},[_c('div',{staticClass:"tit"},[_vm._v("商品描述")]),_vm._v(" "),_c('div',{staticClass:"article"},[_c('pre',[_vm._v(_vm._s(_vm.product.productDesc))])])]):_vm._e(),_vm._v(" "),(_vm.product.remark)?_c('div',{staticClass:"group-item"},[_c('div',{staticClass:"tit"},[_vm._v("拼团规则")]),_vm._v(" "),_c('div',{staticClass:"article"},[_c('pre',[_vm._v(_vm._s(_vm.product.remark))])])]):_vm._e(),_vm._v(" "),(_vm.groupbuyOrderList && _vm.groupbuyOrderList.length)?_c('div',{staticClass:"group-item"},[(_vm.groupbuyTeam)?_c('div',{staticClass:"tips tit"},[_vm._v("已有 "),_c('b',[_vm._v(_vm._s(_vm.groupbuyTeam.teamMembers))]),_vm._v(" 人参团")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article black-none"}),_vm._v(" "),_c('div',{staticClass:"team-recorder"},[_vm._l((_vm.groupbuyOrderList),function(o){return _c('div',{staticClass:"row"},[_c('div',{staticClass:"header-img team-left"},[(o.headimgurl)?_c('img',{attrs:{"src":o.headimgurl}}):(o.custSex)?_c('img',{attrs:{"src":_vm.g.Conf.IMG_LIB_URL + '/avatar/m1.jpg'}}):_c('img',{attrs:{"src":_vm.g.Conf.IMG_LIB_URL + '/avatar/w1.png'}})]),_vm._v(" "),_c('div',{staticClass:"col team-center"},[_c('div',{staticClass:"team-member"},[_vm._v("\n                "+_vm._s(o.custName)+_vm._s(o.custSex ? '先生' : '女士')+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v(_vm._s(o.createTime))])]),_vm._v(" "),_c('div',{staticClass:"team-right"},[_vm._v(" "+_vm._s(o.encCustPhone))])])}),_vm._v(" "),(_vm.groupbuyTeam.teamMembers > 50)?_c('div',{staticClass:"recorder-tip"},[_vm._v("仅显示最近 50 条参团记录")]):_vm._e()],2)]):_vm._e(),_vm._v(" "),(_vm.product.productMorePics)?_c('div',{staticClass:"shop-imgs group-item"},[_c('div',{staticClass:"tit"},[_vm._v("商品图片")]),_vm._v(" "),_c('div',{staticClass:"article"},_vm._l((_vm.productMorePicList),function(img){return _c('img',{attrs:{"src":_vm.g.Util.getImgUrl(img)},on:{"click":function($event){return _vm.imagePreview(img)}}})}),0)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"shop-imgs group-item"},[_c('div',{staticClass:"tit"},[_vm._v("场馆风采")]),_vm._v(" "),_c('div',{staticClass:"article"},_vm._l((_vm.shopImgs),function(img){return _c('img',{attrs:{"src":_vm.g.Util.getImgUrl(img)},on:{"click":function($event){return _vm.imagePreview(img)}}})}),0)])]),_vm._v(" "),_c('div',{staticClass:"group-detail shop-detail "},[_c('div',{staticClass:"group-item"},[_c('div',{staticClass:"tit"},[_vm._v("场馆地址")]),_vm._v(" "),_c('div',{staticClass:"article"},[_c('ul',{staticClass:"group-buy-tips"},[_c('li',[_vm._v("\n              "+_vm._s(_vm.shop.addr)+"\n            ")]),_vm._v(" "),_c('li',[(_vm.shop.tel)?_c('p',[_vm._v("联系电话："),_c('a',{attrs:{"href":'tel:' + _vm.shop.tel}},[_vm._v(_vm._s(_vm.shop.tel))])]):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"group-item"},[_c('div',{staticClass:"tit"},[_vm._v("场馆介绍")]),_vm._v(" "),_c('div',{staticClass:"article"},[_c('pre',[_vm._v(_vm._s(_vm.shop.shopIntro || '暂无简介'))])])])]),_vm._v(" "),_c('div',{staticClass:"lotteryMore",staticStyle:{"margin-bottom":"35px"}},[_c('div',{staticClass:"activitys",on:{"click":function($event){return _vm.$router.push('/groupbuy-product-list')}}},[_vm._v("更多拼团商品\n      ")]),_vm._v(" "),_c('div',{staticClass:"logs",on:{"click":function($event){return _vm.$router.push('/shop-activity')}}},[_vm._v("门店其他活动\n      ")])]),_vm._v(" "),_c('div',{staticClass:"jzg-support"},[_vm._v("由『健总管』提供技术支持")])]),_vm._v(" "),_c('div',{staticClass:"bottom-opt"},[(!_vm.groupbuyTeam)?[_c('mu-raised-button',{staticStyle:{"line-height":"50px","height":"50px"},attrs:{"fullWidth":"","label":"我要开新团","labelClass":"big","backgroundColor":"orangered"},on:{"click":_vm.joinGroupbuyTeam}})]:[_c('div',{staticClass:"team-info"},[(_vm.enableJoinTeam)?[_vm._v("\n          距结束仅剩 : "),_c('span',{staticClass:"leftval"},[_c('u',[_vm._v(_vm._s(_vm.product.limitMembers - _vm.groupbuyTeam.teamMembers))]),_vm._v("人")]),_vm._v(" "),_c('span',{staticClass:"leftval"},[_c('u',[_vm._v(_vm._s(_vm.leftHour))]),_vm._v("时"),_c('u',[_vm._v(_vm._s(_vm.leftMin))]),_vm._v("分"),_c('u',[_vm._v(_vm._s(_vm.leftSec))]),_vm._v("秒")])]:[_vm._v("该拼团已结束")]],2),_vm._v(" "),(_vm.enableJoinTeam)?_c('mu-raised-button',{staticStyle:{"line-height":"50px","height":"50px"},attrs:{"fullWidth":"","label":"我要参团","labelClass":"big","backgroundColor":"orangered"},on:{"click":_vm.joinGroupbuyTeam}}):_vm._e()]],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(867);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(546)("53244625", content, true, {});

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(545)(false);
// imports


// module
exports.push([module.i, ".old-price[data-v-21d49110]{font-size:12px;margin-left:15px;color:#999;text-decoration:line-through}", ""]);

// exports


/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:(_vm.g.data.shop.shopName),expression:"g.data.shop.shopName"}],staticClass:"detail group-sale",attrs:{"img-set":"/static/img/logo.ico"}},[_c('nav',{staticClass:"nav-form"},[_c('span',{staticClass:"left-arrow",on:{"click":_vm.toProductPage}}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('ul',{staticClass:"card-ul"},[_vm._m(1),_vm._v(" "),_c('li',[_c('div',[_vm._v("门店名称：")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.g.data.shop.shopName))])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("拼团商品：")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.product.productTitle))])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("拼团时效：")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.product.limitHours)+" 小时")])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("成团人数：")]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.product.limitMembers)+"人")])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("拼团价格：")]),_vm._v(" "),_c('div',[_c('span',{staticClass:"price"},[_vm._v("￥"+_vm._s(_vm.product.price))]),_vm._v(" "),_c('span',{staticClass:"old-price"},[_vm._v("原价 ￥"+_vm._s(_vm.product.originalPrice))])])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("预付款：")]),_vm._v(" "),_c('div',[_c('span',{staticClass:"price"},[_vm._v("￥"+_vm._s(_vm.product.imprest))])])])]),_vm._v(" "),_c('ul',{staticClass:"card-ul card-user"},[_vm._m(2),_vm._v(" "),_c('li',[_c('div',[_vm._v("手机号：")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.cust.phoneNo),expression:"cust.phoneNo",modifiers:{"number":true}}],attrs:{"type":"tel","placeholder":"请输入您的手机号"},domProps:{"value":(_vm.cust.phoneNo)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.cust, "phoneNo", _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}})])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("姓名：")]),_vm._v(" "),_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.cust.name),expression:"cust.name",modifiers:{"trim":true}}],attrs:{"type":"text","placeholder":"请输入您的姓名"},domProps:{"value":(_vm.cust.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.cust, "name", $event.target.value.trim())},"blur":function($event){return _vm.$forceUpdate()}}})])]),_vm._v(" "),_c('li',[_c('div',[_vm._v("性别：")]),_vm._v(" "),_c('div',[_c('div',{staticClass:"form-sex",on:{"click":function($event){return _vm.selectSex()}}},[_c('label',[_c('div',{staticClass:"radio-icon",class:{selected:_vm.cust.sex}})]),_vm._v(" "),_c('span',[_vm._v("先生")]),_vm._v(" "),_c('label',[_c('div',{staticClass:"radio-icon",class:{selected:!_vm.cust.sex}})]),_vm._v(" "),_c('span',[_vm._v("女士")])])])])]),_vm._v(" "),_vm._m(3),_vm._v(" "),(_vm.guestWxId)?_c('div',{staticClass:"card-buy"},[(_vm.product.imprest)?_c('div',{staticClass:"btn",on:{"click":function($event){return _vm.createPayOrder()}}},[_vm._v("微信支付（￥"+_vm._s(_vm.product.imprest)+" ）")]):_vm._e()]):_c('div',{staticClass:"card-buy-fail"},[_c('div',{staticClass:"err"},[_vm._v("\n\t\t\t\t微信接口繁忙，暂不能支付，请刷新后再试\n\t\t\t")]),_vm._v(" "),_c('div',[_c('span',{staticClass:"refresh",on:{"click":_vm.reloadPage}},[_vm._v("刷新")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('i',{staticClass:"iconfont icon-payment"}),_vm._v(" 拼团结算")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"sec-Title"},[_vm._v("拼团信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('span',{staticClass:"sec-Title"},[_vm._v("填写个人信息")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-tip"},[_c('i',{staticClass:"iconfont icon-info"}),_vm._v(" 个人信息用于商家识别您的身份，请务必填写准确\n\t\t")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});