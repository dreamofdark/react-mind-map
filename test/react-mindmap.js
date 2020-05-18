(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MindMap"] = factory(require("react"));
	else
		root["MindMap"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_58__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(66);

Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_create).default;
  }
});

var _creator = __webpack_require__(8);

Object.defineProperty(exports, "creator", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_creator).default;
  }
});

var _local = __webpack_require__(96);

Object.defineProperty(exports, "local", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_local).default;
  }
});

var _matcher = __webpack_require__(33);

Object.defineProperty(exports, "matcher", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_matcher).default;
  }
});

var _mouse = __webpack_require__(97);

Object.defineProperty(exports, "mouse", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mouse).default;
  }
});

var _namespace = __webpack_require__(15);

Object.defineProperty(exports, "namespace", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespace).default;
  }
});

var _namespaces = __webpack_require__(16);

Object.defineProperty(exports, "namespaces", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespaces).default;
  }
});

var _point = __webpack_require__(9);

Object.defineProperty(exports, "clientPoint", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _select = __webpack_require__(31);

Object.defineProperty(exports, "select", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_select).default;
  }
});

var _selectAll = __webpack_require__(98);

Object.defineProperty(exports, "selectAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectAll).default;
  }
});

var _index = __webpack_require__(2);

Object.defineProperty(exports, "selection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _selector = __webpack_require__(17);

Object.defineProperty(exports, "selector", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selector).default;
  }
});

var _selectorAll = __webpack_require__(32);

Object.defineProperty(exports, "selectorAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectorAll).default;
  }
});

var _style = __webpack_require__(36);

Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function get() {
    return _style.styleValue;
  }
});

var _touch = __webpack_require__(99);

Object.defineProperty(exports, "touch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touch).default;
  }
});

var _touches = __webpack_require__(100);

Object.defineProperty(exports, "touches", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touches).default;
  }
});

var _window = __webpack_require__(18);

Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_window).default;
  }
});

var _on = __webpack_require__(19);

Object.defineProperty(exports, "event", {
  enumerable: true,
  get: function get() {
    return _on.event;
  }
});
Object.defineProperty(exports, "customEvent", {
  enumerable: true,
  get: function get() {
    return _on.customEvent;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = undefined;

exports.default = function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

exports.init = init;
exports.set = set;
exports.get = get;

var _d3Dispatch = __webpack_require__(10);

var _d3Timer = __webpack_require__(23);

var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = exports.CREATED = 0;
var SCHEDULED = exports.SCHEDULED = 1;
var STARTING = exports.STARTING = 2;
var STARTED = exports.STARTED = 3;
var RUNNING = exports.RUNNING = 4;
var ENDING = exports.ENDING = 5;
var ENDED = exports.ENDED = 6;

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0, _d3Timer.timeout)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0, _d3Timer.timeout)(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = undefined;
exports.Selection = Selection;

var _select = __webpack_require__(67);

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(68);

var _selectAll2 = _interopRequireDefault(_selectAll);

var _filter = __webpack_require__(69);

var _filter2 = _interopRequireDefault(_filter);

var _data = __webpack_require__(70);

var _data2 = _interopRequireDefault(_data);

var _enter = __webpack_require__(34);

var _enter2 = _interopRequireDefault(_enter);

var _exit = __webpack_require__(72);

var _exit2 = _interopRequireDefault(_exit);

var _join = __webpack_require__(73);

var _join2 = _interopRequireDefault(_join);

var _merge = __webpack_require__(74);

var _merge2 = _interopRequireDefault(_merge);

var _order = __webpack_require__(75);

var _order2 = _interopRequireDefault(_order);

var _sort = __webpack_require__(76);

var _sort2 = _interopRequireDefault(_sort);

var _call = __webpack_require__(77);

var _call2 = _interopRequireDefault(_call);

var _nodes = __webpack_require__(78);

var _nodes2 = _interopRequireDefault(_nodes);

var _node = __webpack_require__(79);

var _node2 = _interopRequireDefault(_node);

var _size = __webpack_require__(80);

var _size2 = _interopRequireDefault(_size);

var _empty = __webpack_require__(81);

var _empty2 = _interopRequireDefault(_empty);

var _each = __webpack_require__(82);

var _each2 = _interopRequireDefault(_each);

var _attr = __webpack_require__(83);

var _attr2 = _interopRequireDefault(_attr);

var _style = __webpack_require__(36);

var _style2 = _interopRequireDefault(_style);

var _property = __webpack_require__(84);

var _property2 = _interopRequireDefault(_property);

var _classed = __webpack_require__(85);

var _classed2 = _interopRequireDefault(_classed);

var _text = __webpack_require__(86);

var _text2 = _interopRequireDefault(_text);

var _html = __webpack_require__(87);

var _html2 = _interopRequireDefault(_html);

var _raise = __webpack_require__(88);

var _raise2 = _interopRequireDefault(_raise);

var _lower = __webpack_require__(89);

var _lower2 = _interopRequireDefault(_lower);

var _append = __webpack_require__(90);

var _append2 = _interopRequireDefault(_append);

var _insert = __webpack_require__(91);

var _insert2 = _interopRequireDefault(_insert);

var _remove = __webpack_require__(92);

var _remove2 = _interopRequireDefault(_remove);

var _clone = __webpack_require__(93);

var _clone2 = _interopRequireDefault(_clone);

var _datum = __webpack_require__(94);

var _datum2 = _interopRequireDefault(_datum);

var _on = __webpack_require__(19);

var _on2 = _interopRequireDefault(_on);

var _dispatch = __webpack_require__(95);

var _dispatch2 = _interopRequireDefault(_dispatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = exports.root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  data: _data2.default,
  enter: _enter2.default,
  exit: _exit2.default,
  join: _join2.default,
  merge: _merge2.default,
  order: _order2.default,
  sort: _sort2.default,
  call: _call2.default,
  nodes: _nodes2.default,
  node: _node2.default,
  size: _size2.default,
  empty: _empty2.default,
  each: _each2.default,
  attr: _attr2.default,
  style: _style2.default,
  property: _property2.default,
  classed: _classed2.default,
  text: _text2.default,
  html: _html2.default,
  raise: _raise2.default,
  lower: _lower2.default,
  append: _append2.default,
  insert: _insert2.default,
  remove: _remove2.default,
  clone: _clone2.default,
  datum: _datum2.default,
  on: _on2.default,
  dispatch: _dispatch2.default
};

exports.default = selection;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = Transition;
exports.default = transition;
exports.newId = newId;

var _d3Selection = __webpack_require__(0);

var _attr = __webpack_require__(145);

var _attr2 = _interopRequireDefault(_attr);

var _attrTween = __webpack_require__(146);

var _attrTween2 = _interopRequireDefault(_attrTween);

var _delay = __webpack_require__(147);

var _delay2 = _interopRequireDefault(_delay);

var _duration = __webpack_require__(148);

var _duration2 = _interopRequireDefault(_duration);

var _ease = __webpack_require__(149);

var _ease2 = _interopRequireDefault(_ease);

var _filter = __webpack_require__(150);

var _filter2 = _interopRequireDefault(_filter);

var _merge = __webpack_require__(151);

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(152);

var _on2 = _interopRequireDefault(_on);

var _remove = __webpack_require__(153);

var _remove2 = _interopRequireDefault(_remove);

var _select = __webpack_require__(154);

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(155);

var _selectAll2 = _interopRequireDefault(_selectAll);

var _selection = __webpack_require__(156);

var _selection2 = _interopRequireDefault(_selection);

var _style = __webpack_require__(157);

var _style2 = _interopRequireDefault(_style);

var _styleTween = __webpack_require__(158);

var _styleTween2 = _interopRequireDefault(_styleTween);

var _text = __webpack_require__(159);

var _text2 = _interopRequireDefault(_text);

var _textTween = __webpack_require__(160);

var _textTween2 = _interopRequireDefault(_textTween);

var _transition = __webpack_require__(161);

var _transition2 = _interopRequireDefault(_transition);

var _tween = __webpack_require__(13);

var _tween2 = _interopRequireDefault(_tween);

var _end = __webpack_require__(162);

var _end2 = _interopRequireDefault(_end);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0, _d3Selection.selection)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = _d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  merge: _merge2.default,
  selection: _selection2.default,
  transition: _transition2.default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on2.default,
  attr: _attr2.default,
  attrTween: _attrTween2.default,
  style: _style2.default,
  styleTween: _styleTween2.default,
  text: _text2.default,
  textTween: _textTween2.default,
  remove: _remove2.default,
  tween: _tween2.default,
  delay: _delay2.default,
  duration: _duration2.default,
  ease: _ease2.default,
  end: _end2.default
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(26);

Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});
Object.defineProperty(exports, "rgb", {
  enumerable: true,
  get: function get() {
    return _color.rgb;
  }
});
Object.defineProperty(exports, "hsl", {
  enumerable: true,
  get: function get() {
    return _color.hsl;
  }
});

var _lab = __webpack_require__(129);

Object.defineProperty(exports, "lab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});
Object.defineProperty(exports, "hcl", {
  enumerable: true,
  get: function get() {
    return _lab.hcl;
  }
});
Object.defineProperty(exports, "lch", {
  enumerable: true,
  get: function get() {
    return _lab.lch;
  }
});
Object.defineProperty(exports, "gray", {
  enumerable: true,
  get: function get() {
    return _lab.gray;
  }
});

var _cubehelix = __webpack_require__(130);

Object.defineProperty(exports, "cubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hue = hue;
exports.gamma = gamma;
exports.default = nogamma;

var _constant = __webpack_require__(46);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : (0, _constant2.default)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var fullname = (0, _namespace2.default)(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

var _namespace = __webpack_require__(15);

var _namespace2 = _interopRequireDefault(_namespace);

var _namespaces = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces.xhtml && document.documentElement.namespaceURI === _namespaces.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatch = __webpack_require__(119);

Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dispatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _value = __webpack_require__(25);

Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_value).default;
  }
});

var _array = __webpack_require__(47);

Object.defineProperty(exports, "interpolateArray", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_array).default;
  }
});

var _basis = __webpack_require__(28);

Object.defineProperty(exports, "interpolateBasis", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basis).default;
  }
});

var _basisClosed = __webpack_require__(45);

Object.defineProperty(exports, "interpolateBasisClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basisClosed).default;
  }
});

var _date = __webpack_require__(48);

Object.defineProperty(exports, "interpolateDate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_date).default;
  }
});

var _discrete = __webpack_require__(131);

Object.defineProperty(exports, "interpolateDiscrete", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_discrete).default;
  }
});

var _hue = __webpack_require__(132);

Object.defineProperty(exports, "interpolateHue", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hue).default;
  }
});

var _number = __webpack_require__(12);

Object.defineProperty(exports, "interpolateNumber", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_number).default;
  }
});

var _numberArray = __webpack_require__(29);

Object.defineProperty(exports, "interpolateNumberArray", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_numberArray).default;
  }
});

var _object = __webpack_require__(49);

Object.defineProperty(exports, "interpolateObject", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_object).default;
  }
});

var _round = __webpack_require__(133);

Object.defineProperty(exports, "interpolateRound", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_round).default;
  }
});

var _string = __webpack_require__(50);

Object.defineProperty(exports, "interpolateString", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _index = __webpack_require__(134);

Object.defineProperty(exports, "interpolateTransformCss", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformCss;
  }
});
Object.defineProperty(exports, "interpolateTransformSvg", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformSvg;
  }
});

var _zoom = __webpack_require__(137);

Object.defineProperty(exports, "interpolateZoom", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zoom).default;
  }
});

var _rgb = __webpack_require__(44);

Object.defineProperty(exports, "interpolateRgb", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rgb).default;
  }
});
Object.defineProperty(exports, "interpolateRgbBasis", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasis;
  }
});
Object.defineProperty(exports, "interpolateRgbBasisClosed", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasisClosed;
  }
});

var _hsl = __webpack_require__(138);

Object.defineProperty(exports, "interpolateHsl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hsl).default;
  }
});
Object.defineProperty(exports, "interpolateHslLong", {
  enumerable: true,
  get: function get() {
    return _hsl.hslLong;
  }
});

var _lab = __webpack_require__(139);

Object.defineProperty(exports, "interpolateLab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});

var _hcl = __webpack_require__(140);

Object.defineProperty(exports, "interpolateHcl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hcl).default;
  }
});
Object.defineProperty(exports, "interpolateHclLong", {
  enumerable: true,
  get: function get() {
    return _hcl.hclLong;
  }
});

var _cubehelix = __webpack_require__(141);

Object.defineProperty(exports, "interpolateCubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});
Object.defineProperty(exports, "interpolateCubehelixLong", {
  enumerable: true,
  get: function get() {
    return _cubehelix.cubehelixLong;
  }
});

var _piecewise = __webpack_require__(142);

Object.defineProperty(exports, "piecewise", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_piecewise).default;
  }
});

var _quantize = __webpack_require__(143);

Object.defineProperty(exports, "quantize", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantize).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0, _schedule.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

exports.tweenValue = tweenValue;

var _schedule = __webpack_require__(1);

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function () {
    var schedule = (0, _schedule.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function (node) {
    return (0, _schedule.get)(node, id).value[name];
  };
}

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces2.default.hasOwnProperty(prefix) ? { space: _namespaces2.default[prefix], local: name } : name;
};

var _namespaces = __webpack_require__(16);

var _namespaces2 = _interopRequireDefault(_namespaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xhtml = exports.xhtml = "http://www.w3.org/1999/xhtml";

exports.default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
};

function none() {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node // node is a Window
    || node.defaultView; // node is a Document
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (typename, value, capture) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, capture));
  }return this;
};

exports.customEvent = customEvent;
var filterEvents = {};

var event = exports.event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function (event) {
    var related = event.relatedTarget;
    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function (event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    exports.event = event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name: name };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function (d, i, group) {
    var on = this.__on,
        o,
        listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  exports.event = event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event = event0;
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var current = _on.event,
      source;
  while (source = current.sourceEvent) {
    current = source;
  }return current;
};

var _on = __webpack_require__(19);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (Math.random() - 0.5) * 1e-6;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(24);

Object.defineProperty(exports, "now", {
  enumerable: true,
  get: function get() {
    return _timer.now;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function get() {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "timerFlush", {
  enumerable: true,
  get: function get() {
    return _timer.timerFlush;
  }
});

var _timeout = __webpack_require__(120);

Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeout).default;
  }
});

var _interval = __webpack_require__(121);

Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interval).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.now = now;
exports.Timer = Timer;
exports.timer = timer;
exports.timerFlush = timerFlush;
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
      e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
    var t = typeof b === "undefined" ? "undefined" : _typeof(b),
        c;
    return b == null || t === "boolean" ? (0, _constant2.default)(b) : (t === "number" ? _number2.default : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgb2.default) : _string2.default : b instanceof _d3Color.color ? _rgb2.default : b instanceof Date ? _date2.default : (0, _numberArray.isNumberArray)(b) ? _numberArray2.default : Array.isArray(b) ? _array.genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object2.default : _number2.default)(a, b);
};

var _d3Color = __webpack_require__(4);

var _rgb = __webpack_require__(44);

var _rgb2 = _interopRequireDefault(_rgb);

var _array = __webpack_require__(47);

var _date = __webpack_require__(48);

var _date2 = _interopRequireDefault(_date);

var _number = __webpack_require__(12);

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(49);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(50);

var _string2 = _interopRequireDefault(_string);

var _constant = __webpack_require__(46);

var _constant2 = _interopRequireDefault(_constant);

var _numberArray = __webpack_require__(29);

var _numberArray2 = _interopRequireDefault(_numberArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brighter = exports.darker = undefined;
exports.Color = Color;
exports.default = color;
exports.rgbConvert = rgbConvert;
exports.rgb = rgb;
exports.Rgb = Rgb;
exports.hslConvert = hslConvert;
exports.hsl = hsl;

var _define = __webpack_require__(27);

var _define2 = _interopRequireDefault(_define);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Color() {}

var _darker = 0.7;
exports.darker = _darker;
var _brighter = 1 / _darker;

exports.brighter = _brighter;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0, _define2.default)(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Rgb, rgb, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hsl, hsl, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

exports.extend = extend;
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) {
    prototype[key] = definition[key];
  }return prototype;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basis = basis;

exports.default = function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function (t) {
    for (i = 0; i < n; ++i) {
      c[i] = a[i] * (1 - t) + b[i] * t;
    }return c;
  };
};

exports.isNumberArray = isNumberArray;
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(60);
} else {
  module.exports = __webpack_require__(61);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([[document.querySelector(selector)]], [document.documentElement]) : new _index.Selection([[selector]], _index.root);
};

var _index = __webpack_require__(2);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
};

function empty() {
  return [];
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return function () {
    return this.matches(selector);
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._enter || this._groups.map(_sparse2.default), this._parents);
};

exports.EnterNode = EnterNode;

var _sparse = __webpack_require__(35);

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (update) {
  return new Array(update.length);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};

exports.styleValue = styleValue;

var _window = __webpack_require__(18);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name) || (0, _window2.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _quadtree = __webpack_require__(104);

Object.defineProperty(exports, "quadtree", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quadtree).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.x = x;
exports.y = y;

var _d3Dispatch = __webpack_require__(10);

var _d3Timer = __webpack_require__(23);

function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

function _default(_nodes) {
  var simulation,
      _alpha = 1,
      _alphaMin = 0.001,
      _alphaDecay = 1 - Math.pow(_alphaMin, 1 / 300),
      _alphaTarget = 0,
      _velocityDecay = 0.6,
      forces = new Map(),
      stepper = (0, _d3Timer.timer)(step),
      event = (0, _d3Dispatch.dispatch)("tick", "end");

  if (_nodes == null) _nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (_alpha < _alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i,
        n = _nodes.length,
        node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      _alpha += (_alphaTarget - _alpha) * _alphaDecay;

      forces.forEach(function (force) {
        force(_alpha);
      });

      for (i = 0; i < n; ++i) {
        node = _nodes[i];
        if (node.fx == null) node.x += node.vx *= _velocityDecay;else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= _velocityDecay;else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = _nodes.length, node; i < n; ++i) {
      node = _nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i),
            angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(_nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function restart() {
      return stepper.restart(step), simulation;
    },

    stop: function stop() {
      return stepper.stop(), simulation;
    },

    nodes: function nodes(_) {
      return arguments.length ? (_nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : _nodes;
    },

    alpha: function alpha(_) {
      return arguments.length ? (_alpha = +_, simulation) : _alpha;
    },

    alphaMin: function alphaMin(_) {
      return arguments.length ? (_alphaMin = +_, simulation) : _alphaMin;
    },

    alphaDecay: function alphaDecay(_) {
      return arguments.length ? (_alphaDecay = +_, simulation) : +_alphaDecay;
    },

    alphaTarget: function alphaTarget(_) {
      return arguments.length ? (_alphaTarget = +_, simulation) : _alphaTarget;
    },

    velocityDecay: function velocityDecay(_) {
      return arguments.length ? (_velocityDecay = 1 - _, simulation) : 1 - _velocityDecay;
    },

    force: function force(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },

    find: function find(x, y, radius) {
      var i = 0,
          n = _nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = _nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function on(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}
exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoom = __webpack_require__(125);

Object.defineProperty(exports, "zoom", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zoom).default;
  }
});

var _transform = __webpack_require__(53);

Object.defineProperty(exports, "zoomTransform", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_transform).default;
  }
});
Object.defineProperty(exports, "zoomIdentity", {
  enumerable: true,
  get: function get() {
    return _transform.identity;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drag = __webpack_require__(126);

Object.defineProperty(exports, "drag", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drag).default;
  }
});

var _nodrag = __webpack_require__(41);

Object.defineProperty(exports, "dragDisable", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nodrag).default;
  }
});
Object.defineProperty(exports, "dragEnable", {
  enumerable: true,
  get: function get() {
    return _nodrag.yesdrag;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (view) {
  var root = view.document.documentElement,
      selection = (0, _d3Selection.select)(view).on("dragstart.drag", _noevent2.default, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent2.default, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
};

exports.yesdrag = yesdrag;

var _d3Selection = __webpack_require__(0);

var _noevent = __webpack_require__(42);

var _noevent2 = _interopRequireDefault(_noevent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0, _d3Selection.select)(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent2.default, true);
    setTimeout(function () {
      selection.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nopropagation = nopropagation;

exports.default = function () {
  _d3Selection.event.preventDefault();
  _d3Selection.event.stopImmediatePropagation();
};

var _d3Selection = __webpack_require__(0);

function nopropagation() {
  _d3Selection.event.stopImmediatePropagation();
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deg2rad = exports.deg2rad = Math.PI / 180;
var rad2deg = exports.rad2deg = 180 / Math.PI;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbBasisClosed = exports.rgbBasis = undefined;

var _d3Color = __webpack_require__(4);

var _basis = __webpack_require__(28);

var _basis2 = _interopRequireDefault(_basis);

var _basisClosed = __webpack_require__(45);

var _basisClosed2 = _interopRequireDefault(_basisClosed);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function rgbGamma(y) {
  var color = (0, _color.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
}(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;
    for (i = 0; i < n; ++i) {
      color = (0, _d3Color.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = exports.rgbBasis = rgbSpline(_basis2.default);
var rgbBasisClosed = exports.rgbBasisClosed = rgbSpline(_basisClosed2.default);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0, _basis.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
};

var _basis = __webpack_require__(28);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return ((0, _numberArray.isNumberArray)(b) ? _numberArray2.default : genericArray)(a, b);
};

exports.genericArray = genericArray;

var _value = __webpack_require__(25);

var _value2 = _interopRequireDefault(_value);

var _numberArray = __webpack_require__(29);

var _numberArray2 = _interopRequireDefault(_numberArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = (0, _value2.default)(a[i], b[i]);
  }for (; i < nb; ++i) {
    c[i] = b[i];
  }return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }return c;
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
  if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0, _value2.default)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }return c;
  };
};

var _value = __webpack_require__(25);

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: (0, _number2.default)(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }return s.join("");
  });
};

var _number = __webpack_require__(12);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

var _d3Color = __webpack_require__(4);

var _d3Interpolate = __webpack_require__(11);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;continue;
    }
    active = schedule.state > _schedule.STARTING && schedule.state < _schedule.ENDING;
    schedule.state = _schedule.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
};

var _schedule = __webpack_require__(1);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transform = Transform;
exports.default = transform;
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function scale(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function translate(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function apply(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function applyX(x) {
    return x * this.k + this.x;
  },
  applyY: function applyY(y) {
    return y * this.k + this.y;
  },
  invert: function invert(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function invertX(x) {
    return (x - this.x) / this.k;
  },
  invertY: function invertY(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function rescaleX(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function rescaleY(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function toString() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = exports.identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) {
    if (!(node = node.parentNode)) return identity;
  }return node.__zoom;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Return the dimensions (width & height) that some HTML
 * with a given style would take in the page.
 */
var getDimensions = exports.getDimensions = function getDimensions(html, style, classname) {
  var el = document.createElement('span');
  var dimensions = {};

  // Set display: inline-block so that the size of el
  // will depend on the size of its children.
  el.style.display = 'inline-block';

  // Hide the element (it will be added to the page for a short time).
  el.style.visibility = 'hidden';

  el.className = classname;
  el.innerHTML = html;

  // Apply CSS rules.
  Object.keys(style).forEach(function (rule) {
    el.style[rule] = style[rule];
  });
  document.body.append(el);

  dimensions.width = el.offsetWidth;
  dimensions.height = el.offsetHeight;

  el.remove();
  return dimensions;
};

/*
 * Return the dimensions of an SVG viewport calculated from
 * some given nodes.
 */
var getViewBox = exports.getViewBox = function getViewBox(nodes) {
  var Xs = [];
  var Ys = [];

  nodes.forEach(function (node) {
    var x = node.x || node.fx;
    var y = node.y || node.fy;

    if (x) {
      Xs.push(x);
    }

    if (y) {
      Ys.push(y);
    }
  });

  if (Xs.length === 0 || Ys.length === 0) {
    return '0 0 0 0';
  }

  // Find the smallest coordinates...
  var min = [Math.min.apply(Math, Xs) - 150, Math.min.apply(Math, Ys) - 150];

  // ...and the biggest ones.
  var max = [Math.max.apply(Math, Xs) - min[0] + 150, Math.max.apply(Math, Ys) - min[1] + 150];

  return min.join(' ') + ' ' + max.join(' ');
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Regex that matches all emojis in a string.
var matchEmojis = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;

// Emoji to category table.
var conversionTable = {
  '🗺': 'mindmap',
  '🌐': 'wiki',
  '🗂': 'stack exchange',
  '📝': 'course',
  '📖': 'free book',
  '📕': 'non-free book',
  '📄': 'paper',
  '👀': 'video',
  '🖋': 'article',
  '🗃': 'blog',
  '🐙': 'github',
  '👾': 'interactive',
  '🖌': 'image',
  '🎙': 'podcast',
  '📮': 'newsletter',
  '💬': 'chat',
  '🎥': 'youtube',
  '🤖': 'reddit',
  '🔎': 'quora',
  '🔗': undefined
};

// Category to emoji table, based on the table above.
var revConversionTable = {};

Object.keys(conversionTable).forEach(function (key) {
  revConversionTable[conversionTable[key]] = key;
});

/*
 * Return an emoji as a GitHub image.
 */
var emojiTemplate = function emojiTemplate(unicode, category) {
  return '<img class="mindmap-emoji" title="' + category + '" src="https://assets-cdn.github.com/images/icons/emoji/unicode/' + unicode + '.png">';
};

var customEmojiTemplate = function customEmojiTemplate(emoji, category) {
  return '<img class="mindmap-emoji" title="' + category + '" src="https://assets-cdn.github.com/images/icons/emoji/' + emoji + '.png">';
};

/*
 * Return the category represented by the given emoji.
 */
var emojiToCategory = function emojiToCategory(emoji) {
  return conversionTable[emoji] || '';
};

/*
 * Convert all emojis to an IMG tag.
 * The bitwise magic is explained at http://crocodillon.com/blog/parsing-emoji-unicode-in-javascript
 */
var emojiToIMG = function emojiToIMG(html) {
  return (
    /* eslint-disable no-bitwise */
    html.replace(matchEmojis, function (match) {
      switch (match) {
        case '🤖':
          return '<img class="mindmap-emoji reddit-emoji" title="reddit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpOQVZdTCyVamjJPl92KjaDHigNWVM8mOLHPRU4DHoVNJWxCg">';

        case '🗂':
          return '<img class="mindmap-emoji" title="stackexchange" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/se/se-icon.png?v=93426798a1d4">';

        case '🐙':
          return customEmojiTemplate('octocat', 'github');

        case '🔎':
          return '<img class="mindmap-emoji" title="quora" src="https://www.shareicon.net/data/2016/11/03/849470_social_512x512.png">';

        // Regular unicode Emojis.
        default:
          {
            // Keep the first 10 bits.
            var lead = match.charCodeAt(0) & 0x3FF;
            var trail = match.charCodeAt(1) & 0x3FF;

            // 0x[lead][trail]
            var unicode = ((lead << 10) + trail).toString(16);

            return emojiTemplate('1' + unicode, emojiToCategory(match));
          }
      }
    })
    /* eslint-enable no-bitwise */

  );
};

/*
 * Inverse of emojiToCategory, but instead of returning an emoji
 * returns an IMG tag corresponding to that emoji.
 */
var categoryToIMG = function categoryToIMG(category) {
  return emojiToIMG(revConversionTable[category] || '');
};

module.exports = {
  matchEmojis: matchEmojis,
  emojiToIMG: emojiToIMG,
  emojiTemplate: emojiTemplate,
  emojiToCategory: emojiToCategory,
  categoryToIMG: categoryToIMG
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MindMap = __webpack_require__(57);

var _MindMap2 = _interopRequireDefault(_MindMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MindMap2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(59);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Selection = __webpack_require__(0);

var _d3Force = __webpack_require__(101);

var _d3Zoom = __webpack_require__(39);

var _d = __webpack_require__(181);

var _dimensions = __webpack_require__(54);

var _subnodesToHTML = __webpack_require__(182);

var _subnodesToHTML2 = _interopRequireDefault(_subnodesToHTML);

var _nodeToHTML = __webpack_require__(183);

var _nodeToHTML2 = _interopRequireDefault(_nodeToHTML);

__webpack_require__(184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindMap = function (_Component) {
  _inherits(MindMap, _Component);

  function MindMap(props) {
    _classCallCheck(this, MindMap);

    // Create force simulation to position nodes that have no coordinates,
    // and add it to the state.
    var _this = _possibleConstructorReturn(this, (MindMap.__proto__ || Object.getPrototypeOf(MindMap)).call(this, props));

    var simulation = (0, _d3Force.forceSimulation)().force('link', (0, _d3Force.forceLink)().id(function (node) {
      return node.text;
    })).force('charge', (0, _d3Force.forceManyBody)()).force('collide', (0, _d3Force.forceCollide)().radius(100));

    _this.state = { simulation: simulation };
    return _this;
  }

  /* eslint-disable no-param-reassign */
  /*
   * Generates HTML and dimensions for nodes and subnodes.
   */


  _createClass(MindMap, [{
    key: 'prepareNodes',
    value: function prepareNodes() {
      var render = function render(node) {
        node.html = (0, _nodeToHTML2.default)(node);
        node.nodesHTML = (0, _subnodesToHTML2.default)(node.nodes);

        var dimensions = (0, _dimensions.getDimensions)(node.html, {}, 'mindmap-node');
        node.width = dimensions.width;
        node.height = dimensions.height;

        var nodesDimensions = (0, _dimensions.getDimensions)(node.nodesHTML, {}, 'mindmap-subnode-text');
        node.nodesWidth = nodesDimensions.width;
        node.nodesHeight = nodesDimensions.height;
      };

      this.props.nodes.forEach(function (node) {
        return render(node);
      });
    }

    /*
     * Add new class to nodes, attach drag behavior, and start simulation.
     */

  }, {
    key: 'prepareEditor',
    value: function prepareEditor(svg, conns, nodes, subnodes) {
      var _this2 = this;

      nodes.attr('class', 'mindmap-node mindmap-node--editable').on('dblclick', function (node) {
        node.fx = null;
        node.fy = null;
      });

      nodes.call((0, _d.d3Drag)(this.state.simulation, svg, nodes));

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d.onTick)(conns, nodes, subnodes);

      setTimeout(function () {
        _this2.state.simulation.alphaTarget(0.5).on('tick', function () {
          return (0, _d.onTick)(conns, nodes, subnodes);
        });
      }, 200);
    }
    /* eslint-enable no-param-reassign */

    /*
     * Render mind map using D3.
     */

  }, {
    key: 'renderMap',
    value: function renderMap() {
      var svg = (0, _d3Selection.select)(this.mountPoint);

      // Clear the SVG in case there's stuff already there.
      svg.selectAll('*').remove();

      // Add subnode group
      svg.append('g').attr('id', 'mindmap-subnodes');
      this.prepareNodes();

      // Bind data to SVG elements and set all the properties to render them.
      var connections = (0, _d.d3Connections)(svg, this.props.connections);

      var _d3Nodes = (0, _d.d3Nodes)(svg, this.props.nodes),
          nodes = _d3Nodes.nodes,
          subnodes = _d3Nodes.subnodes;

      nodes.append('title').text(function (node) {
        return node.note;
      });

      // Bind nodes and connections to the simulation.
      this.state.simulation.nodes(this.props.nodes).force('link').links(this.props.connections);

      if (this.props.editable) {
        this.prepareEditor(svg, connections, nodes, subnodes);
      }

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d.onTick)(connections, nodes, subnodes);

      // Add pan and zoom behavior and remove double click to zoom.
      svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data())).call((0, _d.d3PanZoom)(svg)).on('dblclick.zoom', null);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _d3Zoom.zoom)().transform((0, _d3Selection.select)(this.refs.mountPoint), _d3Zoom.zoomIdentity);
      this.renderMap();
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('svg', { className: 'mindmap-svg', ref: function ref(input) {
            _this3.mountPoint = input;
          } })
      );
    }
  }]);

  return MindMap;
}(_react.Component);

exports.default = MindMap;


MindMap.defaultProps = {
  nodes: [],
  connections: [],
  editable: false
};

MindMap.propTypes = {
  nodes: _propTypes2.default.array,
  connections: _propTypes2.default.array,
  editable: _propTypes2.default.bool
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(30);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(62)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(65)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) {
    var u = a.$$typeof;switch (u) {case c:
        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
            return a;default:
            switch (a = a && a.$$typeof, a) {case k:case n:case t:case r:case h:
                return a;default:
                return u;}}case d:
        return u;}
  }
}function A(a) {
  return z(a) === m;
}exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;exports.Fragment = e;exports.Lazy = t;exports.Memo = r;exports.Portal = d;
exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};exports.isConcurrentMode = A;exports.isContextConsumer = function (a) {
  return z(a) === k;
};exports.isContextProvider = function (a) {
  return z(a) === h;
};exports.isElement = function (a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return z(a) === n;
};exports.isFragment = function (a) {
  return z(a) === e;
};exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};exports.isPortal = function (a) {
  return z(a) === d;
};exports.isProfiler = function (a) {
  return z(a) === g;
};exports.isStrictMode = function (a) {
  return z(a) === f;
};exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};exports.typeOf = z;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(30);
var assign = __webpack_require__(63);

var ReactPropTypesSecret = __webpack_require__(14);
var checkPropTypes = __webpack_require__(64);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(14);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(14);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return (0, _select2.default)((0, _creator2.default)(name).call(document.documentElement));
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

var _select = __webpack_require__(31);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selector2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(2);

var _selector = __webpack_require__(17);

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selectorAll2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, parents);
};

var _index = __webpack_require__(2);

var _selectorAll = __webpack_require__(32);

var _selectorAll2 = _interopRequireDefault(_selectorAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _matcher2.default)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(2);

var _matcher = __webpack_require__(33);

var _matcher2 = _interopRequireDefault(_matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function (d) {
      data[++j] = d;
    });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0, _constant2.default)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
        previous._next = next || null;
      }
    }
  }

  update = new _index.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var _index = __webpack_require__(2);

var _enter = __webpack_require__(34);

var _constant = __webpack_require__(71);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._exit || this._groups.map(_sparse2.default), this._parents);
};

var _sparse = __webpack_require__(35);

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Selection(merges, this._parents);
};

var _index = __webpack_require__(2);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index.Selection(sortgroups, this._parents).order();
};

var _index = __webpack_require__(2);

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nodes = new Array(this.size()),
      i = -1;
  this.each(function () {
    nodes[++i] = this;
  });
  return nodes;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var size = 0;
  this.each(function () {
    ++size;
  });
  return size;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return !this.node();
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _namespace2.default)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

var _namespace = __webpack_require__(15);

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;
    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(raise);
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(lower);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, before) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0, _selector2.default)(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

var _selector = __webpack_require__(17);

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constantNull() {
  return null;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(remove);
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

var _window = __webpack_require__(18);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(node, type, params) {
  var window = (0, _window2.default)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = local;
var nextId = 0;

function local() {
  return new Local();
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function get(node) {
    var id = this._;
    while (!(id in node)) {
      if (!(node = node.parentNode)) return;
    }return node[id];
  },
  set: function set(node, value) {
    return node[this._] = value;
  },
  remove: function remove(node) {
    return this._ in node && delete node[this._];
  },
  toString: function toString() {
    return this._;
  }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  var event = (0, _sourceEvent2.default)();
  if (event.changedTouches) event = event.changedTouches[0];
  return (0, _point2.default)(node, event);
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([document.querySelectorAll(selector)], [document.documentElement]) : new _index.Selection([selector == null ? [] : selector], _index.root);
};

var _index = __webpack_require__(2);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = (0, _sourceEvent2.default)().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return (0, _point2.default)(node, touch);
    }
  }

  return null;
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches) {
  if (touches == null) touches = (0, _sourceEvent2.default)().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = (0, _point2.default)(node, touches[i]);
  }

  return points;
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _center = __webpack_require__(102);

Object.defineProperty(exports, "forceCenter", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_center).default;
  }
});

var _collide = __webpack_require__(103);

Object.defineProperty(exports, "forceCollide", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_collide).default;
  }
});

var _link = __webpack_require__(117);

Object.defineProperty(exports, "forceLink", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_link).default;
  }
});

var _manyBody = __webpack_require__(118);

Object.defineProperty(exports, "forceManyBody", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_manyBody).default;
  }
});

var _radial = __webpack_require__(122);

Object.defineProperty(exports, "forceRadial", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_radial).default;
  }
});

var _simulation = __webpack_require__(38);

Object.defineProperty(exports, "forceSimulation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_simulation).default;
  }
});

var _x = __webpack_require__(123);

Object.defineProperty(exports, "forceX", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_x).default;
  }
});

var _y = __webpack_require__(124);

Object.defineProperty(exports, "forceY", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_y).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function (_) {
    nodes = _;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = (0, _constant2.default)(radius == null ? 1 : +radius);

  function force() {
    var i,
        n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = (0, _d3Quadtree.quadtree)(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data,
          rj = quad.r,
          r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
            if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) {
      node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : radius;
  };

  return force;
};

var _d3Quadtree = __webpack_require__(37);

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

var _jiggle = __webpack_require__(22);

var _jiggle2 = _interopRequireDefault(_jiggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quadtree;

var _add = __webpack_require__(105);

var _add2 = _interopRequireDefault(_add);

var _cover = __webpack_require__(106);

var _cover2 = _interopRequireDefault(_cover);

var _data = __webpack_require__(107);

var _data2 = _interopRequireDefault(_data);

var _extent = __webpack_require__(108);

var _extent2 = _interopRequireDefault(_extent);

var _find = __webpack_require__(109);

var _find2 = _interopRequireDefault(_find);

var _remove = __webpack_require__(110);

var _remove2 = _interopRequireDefault(_remove);

var _root = __webpack_require__(111);

var _root2 = _interopRequireDefault(_root);

var _size = __webpack_require__(112);

var _size2 = _interopRequireDefault(_size);

var _visit = __webpack_require__(113);

var _visit2 = _interopRequireDefault(_visit);

var _visitAfter = __webpack_require__(114);

var _visitAfter2 = _interopRequireDefault(_visitAfter);

var _x = __webpack_require__(115);

var _x2 = _interopRequireDefault(_x);

var _y = __webpack_require__(116);

var _y2 = _interopRequireDefault(_y);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x.defaultX : x, y == null ? _y.defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = { data: leaf.data },
      next = copy;
  while (leaf = leaf.next) {
    next = next.next = { data: leaf.data };
  }return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function () {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{ source: node, target: copy._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add2.default;
treeProto.addAll = _add.addAll;
treeProto.cover = _cover2.default;
treeProto.data = _data2.default;
treeProto.extent = _extent2.default;
treeProto.find = _find2.default;
treeProto.remove = _remove2.default;
treeProto.removeAll = _remove.removeAll;
treeProto.root = _root2.default;
treeProto.size = _size2.default;
treeProto.visit = _visit2.default;
treeProto.visitAfter = _visitAfter2.default;
treeProto.x = _x2.default;
treeProto.y = _y2.default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
};

exports.addAll = addAll;


function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = { data: d },
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d,
      i,
      n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
      var z = x1 - x0,
          node = this._root,
          parent,
          i;

      while (x0 > x || x >= x1 || y0 > y || y >= y1) {
        i = (y < y0) << 1 | x < x0;
        parent = new Array(4), parent[i] = node, node = parent, z *= 2;
        switch (i) {
          case 0:
            x1 = x0 + z, y1 = y0 + z;break;
          case 1:
            x0 = x1 - z, y1 = y0 + z;break;
          case 2:
            x1 = x0 + z, y0 = y1 - z;break;
          case 3:
            x0 = x1 - z, y0 = y1 - z;break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var data = [];
  this.visit(function (node) {
    if (!node.length) do {
      data.push(node.data);
    } while (node = node.next);
  });
  return data;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new _quad2.default(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(new _quad2.default(node[3], xm, ym, x2, y2), new _quad2.default(node[2], x1, ym, xm, y2), new _quad2.default(node[1], xm, y1, x2, ym), new _quad2.default(node[0], x1, y1, xm, ym));

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | x >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d;
          x3 = x + d, y3 = y + d;
          data = node.data;
        }
      }
  }

  return data;
};

var _quad = __webpack_require__(21);

var _quad2 = _interopRequireDefault(_quad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) {
    if (!(previous = node, node = node.next)) return this;
  }if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return next ? previous.next = next : delete previous.next, this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;else this._root = node;
  }

  return this;
};

exports.removeAll = removeAll;
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) {
    this.remove(data[i]);
  }return this;
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this._root;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var size = 0;
  this.visit(function (node) {
    if (!node.length) do {
      ++size;
    } while (node = node.next);
  });
  return size;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {
  var quads = [],
      q,
      node = this._root,
      child,
      x0,
      y0,
      x1,
      y1;
  if (node) quads.push(new _quad2.default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad2.default(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad2.default(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad2.default(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad2.default(child, x0, y0, xm, ym));
    }
  }
  return this;
};

var _quad = __webpack_require__(21);

var _quad2 = _interopRequireDefault(_quad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {
  var quads = [],
      next = [],
      q;
  if (this._root) quads.push(new _quad2.default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child,
          x0 = q.x0,
          y0 = q.y0,
          x1 = q.x1,
          y1 = q.y1,
          xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad2.default(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad2.default(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad2.default(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad2.default(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
};

var _quad = __webpack_require__(21);

var _quad2 = _interopRequireDefault(_quad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultX = defaultX;

exports.default = function (_) {
  return arguments.length ? (this._x = _, this) : this._x;
};

function defaultX(d) {
  return d[0];
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultY = defaultY;

exports.default = function (_) {
  return arguments.length ? (this._y = _, this) : this._y;
};

function defaultY(d) {
  return d[1];
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = (0, _constant2.default)(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || (0, _jiggle2.default)();
        y = target.y + target.vy - source.y - source.vy || (0, _jiggle2.default)();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map(function (d, i) {
      return [id(d, i, nodes), d];
    })),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (_typeof(link.source) !== "object") link.source = find(nodeById, link.source);
      if (_typeof(link.target) !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.links = function (_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function (_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initializeStrength(), force) : strength;
  };

  force.distance = function (_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initializeDistance(), force) : distance;
  };

  return force;
};

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

var _jiggle = __webpack_require__(22);

var _jiggle2 = _interopRequireDefault(_jiggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nodes,
      node,
      alpha,
      strength = (0, _constant2.default)(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i,
        n = nodes.length,
        tree = (0, _d3Quadtree.quadtree)(nodes, _simulation.x, _simulation.y).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) {
      node = nodes[i], tree.visit(apply);
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) {
      node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
  }

  function accumulate(quad) {
    var strength = 0,
        q,
        c,
        weight = 0,
        x,
        y,
        i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;
        do {
          strength += strengths[q.data.index];
        } while (q = q.next);
      }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
        if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
      if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do {
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x * w;
        node.vy += y * w;
      }
    } while (quad = quad.next);
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
  };

  force.distanceMin = function (_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function (_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function (_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
};

var _d3Quadtree = __webpack_require__(37);

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

var _jiggle = __webpack_require__(22);

var _jiggle2 = _interopRequireDefault(_jiggle);

var _simulation = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = { value: function value() {} };

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: name };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      }return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;
    for (var t in _) {
      copy[t] = _[t].slice();
    }return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name: name, value: callback });
  return type;
}

exports.default = dispatch;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(24);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer(),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? (0, _timer.now)() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(24);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (radius, x, y) {
  var nodes,
      strength = (0, _constant2.default)(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = (0, _constant2.default)(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _, initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : radius;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
};

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  var strength = (0, _constant2.default)(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = (0, _constant2.default)(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
  };

  force.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : x;
  };

  return force;
};

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (y) {
  var strength = (0, _constant2.default)(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = (0, _constant2.default)(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
  };

  force.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : y;
  };

  return force;
};

var _constant = __webpack_require__(5);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = _d3Interpolate.interpolateZoom,
      listeners = (0, _d3Dispatch.dispatch)("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function (collection, transform, point) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point);
    } else {
      selection.interrupt().each(function () {
        gesture(this, arguments).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };

  zoom.scaleBy = function (selection, k, p) {
    zoom.scaleTo(selection, function () {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p);
  };

  zoom.scaleTo = function (selection, k, p) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p);
  };

  zoom.translateBy = function (selection, x, y) {
    zoom.transform(selection, function () {
      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function (selection, x, y, p) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform.identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
    }, p);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform.Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k,
        y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform.Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point) {
    transition.on("start.zoom", function () {
      gesture(this, arguments).start();
    }).on("interrupt.zoom end.zoom", function () {
      gesture(this, arguments).end();
    }).tween("zoom", function () {
      var that = this,
          args = arguments,
          g = gesture(that, args),
          e = extent.apply(that, args),
          p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
          a = that.__zoom,
          b = typeof transform === "function" ? transform.apply(that, args) : transform,
          i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function (t) {
        if (t === 1) t = b; // Avoid rounding error on end.
        else {
            var l = i(t),
                k = w / l[2];t = new _transform.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
        g.zoom(null, t);
      };
    });
  }

  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    start: function start() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function zoom(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function end() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function emit(type) {
      (0, _d3Selection.customEvent)(new _event2.default(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = (0, _d3Selection.mouse)(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

      // Otherwise, capture the mouse point and location at the start.
      else {
          g.mouse = [p, t.invert(p)];
          (0, _d3Transition.interrupt)(this);
          g.start();
        }

    (0, _noevent2.default)();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments, true),
        v = (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = (0, _d3Selection.mouse)(this),
        x0 = _d3Selection.event.clientX,
        y0 = _d3Selection.event.clientY;

    (0, _d3Drag.dragDisable)(_d3Selection.event.view);
    (0, _noevent.nopropagation)();
    g.mouse = [p, this.__zoom.invert(p)];
    (0, _d3Transition.interrupt)(this);
    g.start();

    function mousemoved() {
      (0, _noevent2.default)();
      if (!g.moved) {
        var dx = _d3Selection.event.clientX - x0,
            dy = _d3Selection.event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, _d3Selection.mouse)(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0, _d3Drag.dragEnable)(_d3Selection.event.view, g.moved);
      (0, _noevent2.default)();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = (0, _d3Selection.mouse)(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (_d3Selection.event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    (0, _noevent2.default)();
    if (duration > 0) (0, _d3Selection.select)(this).transition().duration(duration).call(schedule, t1, p0);else (0, _d3Selection.select)(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = _d3Selection.event.touches,
        n = touches.length,
        g = gesture(this, arguments, _d3Selection.event.changedTouches.length === n),
        started,
        i,
        t,
        p;

    (0, _noevent.nopropagation)();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0, _d3Selection.touch)(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchstarting = setTimeout(function () {
        touchstarting = null;
      }, touchDelay);
      (0, _d3Transition.interrupt)(this);
      g.start();
    }
  }

  function touchmoved() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = _d3Selection.event.changedTouches,
        n = touches.length,
        i,
        t,
        p,
        l;

    (0, _noevent2.default)();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    g.taps = 0;
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0, _d3Selection.touch)(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0],
          l0 = g.touch0[1],
          p1 = g.touch1[0],
          l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = _d3Selection.event.changedTouches,
        n = touches.length,
        i,
        t;

    (0, _noevent.nopropagation)();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        var p = (0, _d3Selection.select)(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
      }
    }
  }

  zoom.wheelDelta = function (_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, _constant2.default)(+_), zoom) : wheelDelta;
  };

  zoom.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), zoom) : filter;
  };

  zoom.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), zoom) : touchable;
  };

  zoom.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0, _constant2.default)([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function (_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function (_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function (_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function (_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function (_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
};

var _d3Dispatch = __webpack_require__(10);

var _d3Drag = __webpack_require__(40);

var _d3Interpolate = __webpack_require__(11);

var _d3Selection = __webpack_require__(0);

var _d3Transition = __webpack_require__(144);

var _constant = __webpack_require__(178);

var _constant2 = _interopRequireDefault(_constant);

var _event = __webpack_require__(179);

var _event2 = _interopRequireDefault(_event);

var _transform = __webpack_require__(53);

var _noevent = __webpack_require__(180);

var _noevent2 = _interopRequireDefault(_noevent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !_d3Selection.event.ctrlKey && !_d3Selection.event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform.identity;
}

function defaultWheelDelta() {
  return -_d3Selection.event.deltaY * (_d3Selection.event.deltaMode === 1 ? 0.05 : _d3Selection.event.deltaMode ? 1 : 0.002);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = (0, _d3Dispatch.dispatch)("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), _d3Selection.mouse, this, arguments);
    if (!gesture) return;
    (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    (0, _nodrag2.default)(_d3Selection.event.view);
    (0, _noevent.nopropagation)();
    mousemoving = false;
    mousedownx = _d3Selection.event.clientX;
    mousedowny = _d3Selection.event.clientY;
    gesture("start");
  }

  function mousemoved() {
    (0, _noevent2.default)();
    if (!mousemoving) {
      var dx = _d3Selection.event.clientX - mousedownx,
          dy = _d3Selection.event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.drag mouseup.drag", null);
    (0, _nodrag.yesdrag)(_d3Selection.event.view, mousemoving);
    (0, _noevent2.default)();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = _d3Selection.event.changedTouches,
        c = container.apply(this, arguments),
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, _d3Selection.touch, this, arguments)) {
        (0, _noevent.nopropagation)();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = _d3Selection.event.changedTouches,
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0, _noevent2.default)();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = _d3Selection.event.changedTouches,
        n = touches.length,
        i,
        gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0, _noevent.nopropagation)();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id),
        s,
        dx,
        dy,
        sublisteners = listeners.copy();

    if (!(0, _d3Selection.customEvent)(new _event2.default(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function () {
      if ((_d3Selection.event.subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p,
          n;
      switch (type) {
        case "start":
          gestures[id] = gesture, n = active++;break;
        case "end":
          delete gestures[id], --active; // nobreak
        case "drag":
          p = point(container, id), n = active;break;
      }
      (0, _d3Selection.customEvent)(new _event2.default(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), drag) : filter;
  };

  drag.container = function (_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : (0, _constant2.default)(_), drag) : container;
  };

  drag.subject = function (_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : (0, _constant2.default)(_), drag) : subject;
  };

  drag.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), drag) : touchable;
  };

  drag.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
};

var _d3Dispatch = __webpack_require__(10);

var _d3Selection = __webpack_require__(0);

var _nodrag = __webpack_require__(41);

var _nodrag2 = _interopRequireDefault(_nodrag);

var _noevent = __webpack_require__(42);

var _noevent2 = _interopRequireDefault(_noevent);

var _constant = __webpack_require__(127);

var _constant2 = _interopRequireDefault(_constant);

var _event = __webpack_require__(128);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !_d3Selection.event.ctrlKey && !_d3Selection.event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? { x: _d3Selection.event.x, y: _d3Selection.event.y } : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DragEvent;
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function () {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gray = gray;
exports.default = lab;
exports.Lab = Lab;
exports.lch = lch;
exports.hcl = hcl;
exports.Hcl = Hcl;

var _define = __webpack_require__(27);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(26);

var _math = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
      x,
      z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Lab, lab, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math.rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math.deg2rad;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

(0, _define2.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb() {
    return hcl2lab(this).rgb();
  }
}));

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cubehelix;
exports.Cubehelix = Cubehelix;

var _define = __webpack_require__(27);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(26);

var _math = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _color.darker : Math.pow(_color.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var i = (0, _color.hue)(+a, +b);
  return function (t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
};

var _color = __webpack_require__(6);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateTransformSvg = exports.interpolateTransformCss = undefined;

var _number = __webpack_require__(12);

var _number2 = _interopRequireDefault(_number);

var _parse = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function (t) {
      var i = -1,
          n = q.length,
          o;
      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }return s.join("");
    };
  };
}

var interpolateTransformCss = exports.interpolateTransformCss = interpolateTransform(_parse.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = exports.interpolateTransformSvg = interpolateTransform(_parse.parseSvg, ", ", ")", ")");

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCss = parseCss;
exports.parseSvg = parseSvg;

var _decompose = __webpack_require__(136);

var _decompose2 = _interopRequireDefault(_decompose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssNode, cssRoot, cssView, svgNode;

function parseCss(value) {
  if (value === "none") return _decompose.identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return (0, _decompose2.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose.identity;
  value = value.matrix;
  return (0, _decompose2.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var degrees = 180 / Math.PI;

var identity = exports.identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (p0, p1) {
  var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function i(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  }

  // General case.
  else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }

  i.duration = S * 1000;

  return i;
};

var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hsl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hsl)(start)).h, (end = (0, _d3Color.hsl)(end)).h),
        s = (0, _color2.default)(start.s, end.s),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hsl(_color.hue);
var hslLong = exports.hslLong = hsl(_color2.default);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lab;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lab(start, end) {
  var l = (0, _color2.default)((start = (0, _d3Color.lab)(start)).l, (end = (0, _d3Color.lab)(end)).l),
      a = (0, _color2.default)(start.a, end.a),
      b = (0, _color2.default)(start.b, end.b),
      opacity = (0, _color2.default)(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hclLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hcl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hcl)(start)).h, (end = (0, _d3Color.hcl)(end)).h),
        c = (0, _color2.default)(start.c, end.c),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hcl(_color.hue);
var hclLong = exports.hclLong = hcl(_color2.default);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubehelixLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h),
          s = (0, _color2.default)(start.s, end.s),
          l = (0, _color2.default)(start.l, end.l),
          opacity = (0, _color2.default)(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  }(1);
}

exports.default = cubehelix(_color.hue);
var cubehelixLong = exports.cubehelixLong = cubehelix(_color2.default);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = piecewise;
function piecewise(interpolate, values) {
  var i = 0,
      n = values.length - 1,
      v = values[0],
      I = new Array(n < 0 ? 0 : n);
  while (i < n) {
    I[i] = interpolate(v, v = values[++i]);
  }return function (t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) {
    samples[i] = interpolator(i / (n - 1));
  }return samples;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interrupt = exports.active = exports.transition = undefined;

var _index = __webpack_require__(3);

Object.defineProperty(exports, "transition", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _active = __webpack_require__(163);

Object.defineProperty(exports, "active", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_active).default;
  }
});

var _interrupt = __webpack_require__(52);

Object.defineProperty(exports, "interrupt", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interrupt).default;
  }
});

__webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _d3Selection.namespace)(name),
      i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolate2.default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tween.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

var _d3Interpolate = __webpack_require__(11);

var _d3Selection = __webpack_require__(0);

var _tween = __webpack_require__(13);

var _interpolate = __webpack_require__(51);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = (0, _d3Selection.namespace)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

var _d3Selection = __webpack_require__(0);

function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _schedule.get)(this.node(), id).delay;
};

var _schedule = __webpack_require__(1);

function delayFunction(id, value) {
  return function () {
    (0, _schedule.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.init)(this, id).delay = value;
  };
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _schedule.get)(this.node(), id).duration;
};

var _schedule = __webpack_require__(1);

function durationFunction(id, value) {
  return function () {
    (0, _schedule.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.set)(this, id).duration = value;
  };
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each(easeConstant(id, value)) : (0, _schedule.get)(this.node(), id).ease;
};

var _schedule = __webpack_require__(1);

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    (0, _schedule.set)(this, id).ease = value;
  };
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, this._name, this._id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Transition(merges, this._parents, this._name, this._id);
};

var _index = __webpack_require__(3);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, listener) {
  var id = this._id;

  return arguments.length < 2 ? (0, _schedule.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

var _schedule = __webpack_require__(1);

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? _schedule.init : _schedule.set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.on("end.remove", removeFunction(this._id));
};

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;
    for (var i in this.__transition) {
      if (+i !== id) return;
    }if (parent) parent.removeChild(this);
  };
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selector)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0, _schedule2.default)(subgroup[i], name, id, i, subgroup, (0, _schedule.get)(node, id));
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(1);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0, _schedule.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0, _schedule2.default)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(1);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Selection(this._groups, this._parents);
};

var _d3Selection = __webpack_require__(0);

var Selection = _d3Selection.selection.prototype.constructor;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolate2.default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tween.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

var _d3Interpolate = __webpack_require__(11);

var _d3Selection = __webpack_require__(0);

var _schedule = __webpack_require__(1);

var _tween = __webpack_require__(13);

var _interpolate = __webpack_require__(51);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name),
        string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return this.tween("text", typeof value === "function" ? textFunction((0, _tween.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

var _tween = __webpack_require__(13);

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
};

function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var name = this._name,
      id0 = this._id,
      id1 = (0, _index.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0, _schedule.get)(node, id0);
        (0, _schedule2.default)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id1);
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(1);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = { value: reject },
        end = { value: function value() {
        if (--size === 0) resolve();
      } };

    that.each(function () {
      var schedule = (0, _schedule.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
};

var _schedule = __webpack_require__(1);

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _schedule.SCHEDULED && schedule.name === name) {
        return new _index.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(1);

var root = [null];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Selection = __webpack_require__(0);

var _interrupt = __webpack_require__(165);

var _interrupt2 = _interopRequireDefault(_interrupt);

var _transition = __webpack_require__(166);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_d3Selection.selection.prototype.interrupt = _interrupt2.default;
_d3Selection.selection.prototype.transition = _transition2.default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return this.each(function () {
    (0, _interrupt2.default)(this, name);
  });
};

var _interrupt = __webpack_require__(52);

var _interrupt2 = _interopRequireDefault(_interrupt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var id, timing;

  if (name instanceof _index.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0, _index.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0, _schedule2.default)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id);
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(1);

var _schedule2 = _interopRequireDefault(_schedule);

var _d3Ease = __webpack_require__(167);

var _d3Timer = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: _d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = (0, _d3Timer.now)(), defaultTiming;
    }
  }
  return timing;
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linear = __webpack_require__(168);

Object.defineProperty(exports, "easeLinear", {
  enumerable: true,
  get: function get() {
    return _linear.linear;
  }
});

var _quad = __webpack_require__(169);

Object.defineProperty(exports, "easeQuad", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});
Object.defineProperty(exports, "easeQuadIn", {
  enumerable: true,
  get: function get() {
    return _quad.quadIn;
  }
});
Object.defineProperty(exports, "easeQuadOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadOut;
  }
});
Object.defineProperty(exports, "easeQuadInOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});

var _cubic = __webpack_require__(170);

Object.defineProperty(exports, "easeCubic", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});
Object.defineProperty(exports, "easeCubicIn", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicIn;
  }
});
Object.defineProperty(exports, "easeCubicOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicOut;
  }
});
Object.defineProperty(exports, "easeCubicInOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});

var _poly = __webpack_require__(171);

Object.defineProperty(exports, "easePoly", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});
Object.defineProperty(exports, "easePolyIn", {
  enumerable: true,
  get: function get() {
    return _poly.polyIn;
  }
});
Object.defineProperty(exports, "easePolyOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyOut;
  }
});
Object.defineProperty(exports, "easePolyInOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});

var _sin = __webpack_require__(172);

Object.defineProperty(exports, "easeSin", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});
Object.defineProperty(exports, "easeSinIn", {
  enumerable: true,
  get: function get() {
    return _sin.sinIn;
  }
});
Object.defineProperty(exports, "easeSinOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinOut;
  }
});
Object.defineProperty(exports, "easeSinInOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});

var _exp = __webpack_require__(173);

Object.defineProperty(exports, "easeExp", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});
Object.defineProperty(exports, "easeExpIn", {
  enumerable: true,
  get: function get() {
    return _exp.expIn;
  }
});
Object.defineProperty(exports, "easeExpOut", {
  enumerable: true,
  get: function get() {
    return _exp.expOut;
  }
});
Object.defineProperty(exports, "easeExpInOut", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});

var _circle = __webpack_require__(174);

Object.defineProperty(exports, "easeCircle", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});
Object.defineProperty(exports, "easeCircleIn", {
  enumerable: true,
  get: function get() {
    return _circle.circleIn;
  }
});
Object.defineProperty(exports, "easeCircleOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleOut;
  }
});
Object.defineProperty(exports, "easeCircleInOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});

var _bounce = __webpack_require__(175);

Object.defineProperty(exports, "easeBounce", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceIn", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceIn;
  }
});
Object.defineProperty(exports, "easeBounceOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceInOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceInOut;
  }
});

var _back = __webpack_require__(176);

Object.defineProperty(exports, "easeBack", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});
Object.defineProperty(exports, "easeBackIn", {
  enumerable: true,
  get: function get() {
    return _back.backIn;
  }
});
Object.defineProperty(exports, "easeBackOut", {
  enumerable: true,
  get: function get() {
    return _back.backOut;
  }
});
Object.defineProperty(exports, "easeBackInOut", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});

var _elastic = __webpack_require__(177);

Object.defineProperty(exports, "easeElastic", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticIn", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticIn;
  }
});
Object.defineProperty(exports, "easeElasticOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticInOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticInOut;
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;
function linear(t) {
  return +t;
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quadIn = quadIn;
exports.quadOut = quadOut;
exports.quadInOut = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicIn = cubicIn;
exports.cubicOut = cubicOut;
exports.cubicInOut = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var exponent = 3;

var polyIn = exports.polyIn = function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
}(exponent);

var polyOut = exports.polyOut = function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
}(exponent);

var polyInOut = exports.polyInOut = function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
}(exponent);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sinIn = sinIn;
exports.sinOut = sinOut;
exports.sinInOut = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expIn = expIn;
exports.expOut = expOut;
exports.expInOut = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleIn = circleIn;
exports.circleOut = circleOut;
exports.circleInOut = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounceIn = bounceIn;
exports.bounceOut = bounceOut;
exports.bounceInOut = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var overshoot = 1.70158;

var backIn = exports.backIn = function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
}(overshoot);

var backOut = exports.backOut = function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
}(overshoot);

var backInOut = exports.backInOut = function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
}(overshoot);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = exports.elasticIn = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticIn.period = function (p) {
    return custom(a, p);
  };

  return elasticIn;
}(amplitude, period);

var elasticOut = exports.elasticOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticOut.period = function (p) {
    return custom(a, p);
  };

  return elasticOut;
}(amplitude, period);

var elasticInOut = exports.elasticInOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticInOut.period = function (p) {
    return custom(a, p);
  };

  return elasticInOut;
}(amplitude, period);

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ZoomEvent;
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nopropagation = nopropagation;

exports.default = function () {
  _d3Selection.event.preventDefault();
  _d3Selection.event.stopImmediatePropagation();
};

var _d3Selection = __webpack_require__(0);

function nopropagation() {
  _d3Selection.event.stopImmediatePropagation();
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d3PanZoom = exports.d3Drag = exports.onTick = exports.d3Nodes = exports.d3Connections = undefined;

var _d3Selection = __webpack_require__(0);

var _d3Drag = __webpack_require__(40);

var _d3Zoom = __webpack_require__(39);

var _dimensions = __webpack_require__(54);

/*
 * Bind data to a <TAG> tag, inside a G element, inside the given root element.
 * Root is a D3 selection, data is an object or array, tag is a string.
 */
var bindData = function bindData(root, data, tag) {
  return root.append('g').selectAll(tag).data(data).enter().append(tag);
};

/*
 * Bind connections to PATH tags on the given SVG.
 */
var d3Connections = exports.d3Connections = function d3Connections(svg, connections) {
  return bindData(svg, connections, 'path').attr('class', 'mindmap-connection');
};

/* eslint-disable no-param-reassign */
/*
 * Bind nodes to FOREIGNOBJECT tags on the given SVG,
 * and set dimensions and html.
 */
var d3Nodes = exports.d3Nodes = function d3Nodes(svg, nodes) {
  var selection = svg.append('g').selectAll('foreignObject').data(nodes).enter();

  var d3nodes = selection.append('foreignObject').attr('class', 'mindmap-node').attr('width', function (node) {
    return node.width + 4;
  }).attr('height', function (node) {
    return node.height;
  }).html(function (node) {
    return node.html;
  });

  var d3subnodes = selection.append('foreignObject').attr('class', 'mindmap-subnodes').attr('width', function (node) {
    return node.nodesWidth + 4;
  }).attr('height', function (node) {
    return node.nodesHeight;
  }).html(function (subnode) {
    return subnode.nodesHTML;
  });

  return {
    nodes: d3nodes,
    subnodes: d3subnodes
  };
};

/*
 * Callback for forceSimulation tick event.
 */
var onTick = exports.onTick = function onTick(conns, nodes, subnodes) {
  var d = function d(conn) {
    return ['M', conn.source.x, conn.source.y, 'Q', conn.source.x + (conn.curve && conn.curve.x ? conn.curve.x : 0), conn.source.y + (conn.curve && conn.curve.y ? conn.curve.y : 0), ',', conn.target.x, conn.target.y].join(' ');
  };

  // Set the connections path.
  conns.attr('d', d);

  // Set nodes position.
  nodes.attr('x', function (node) {
    return node.x - node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.height / 2;
  });

  // Set subnodes groups color and position.
  subnodes.attr('x', function (node) {
    return node.x + node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.nodesHeight / 2;
  });
};

/*
 * Return drag behavior to use on d3.selection.call().
 */
var d3Drag = exports.d3Drag = function d3Drag(simulation, svg, nodes) {
  var dragStart = function dragStart(node) {
    if (!_d3Selection.event.active) {
      simulation.alphaTarget(0.2).restart();
    }

    node.fx = node.x;
    node.fy = node.y;
  };

  var dragged = function dragged(node) {
    node.fx = _d3Selection.event.x;
    node.fy = _d3Selection.event.y;
  };

  var dragEnd = function dragEnd() {
    if (!_d3Selection.event.active) {
      simulation.alphaTarget(0);
    }

    svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data()));
  };

  return (0, _d3Drag.drag)().on('start', dragStart).on('drag', dragged).on('end', dragEnd);
};
/* eslint-enable no-param-reassign */

/*
 * Return pan and zoom behavior to use on d3.selection.call().
 */
var d3PanZoom = exports.d3PanZoom = function d3PanZoom(el) {
  return (0, _d3Zoom.zoom)().scaleExtent([0.3, 5]).on('zoom', function () {
    return el.selectAll('svg > g').attr('transform', _d3Selection.event.transform);
  });
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emojis = __webpack_require__(55);

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
var subnodesToHTML = function subnodesToHTML() {
  var subnodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fcolor = arguments[1];

  var color = fcolor || '';

  if (!fcolor && subnodes.length > 0 && subnodes[0].color) {
    color = 'style="border-left-color: ' + subnodes[0].color + '"';
  }

  return subnodes.map(function (subnode) {
    var href = 'href="' + subnode.url + '"';
    var emoji = (0, _emojis.categoryToIMG)(subnode.category);

    if (!subnode.url) {
      href = '';
      emoji = '';
    }

    return '<div class="mindmap-subnode-group" ' + color + '>\n      <a ' + href + '>' + (subnode.text || '') + ' ' + emoji + '</a>\n      <div>' + subnodesToHTML(subnode.nodes, color) + '</div>\n    </div>';
  }).join('');
};

exports.default = subnodesToHTML;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emojis = __webpack_require__(55);

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
exports.default = function (node) {
  var href = 'href="' + node.url + '"';
  var emoji = (0, _emojis.categoryToIMG)(node.category);

  // If url is not specified remove the emoji and the href attribute,
  // so that the node isn't clickable, and the user can see that without
  // having to hover the node.
  if (!node.url) {
    href = '';
    emoji = '';
  }

  return '<a id="node-' + node.index + '" ' + href + '>' + (node.text || '') + ' ' + emoji + '</a>';
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(187)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(186)(false);
// imports


// module
exports.push([module.i, ".mindmap-svg {\n  height: 100vh;\n  width: 100%; }\n  .mindmap-svg:focus {\n    outline: none; }\n\n.mindmap-node > a {\n  background: #f5f5f5;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: #212121;\n  display: inline-block;\n  font-family: 'Raleway';\n  font-size: 22px;\n  margin: 0 auto;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color .2s, color .2s ease-out;\n  transition: background-color .2s, color .2s ease-out; }\n  .mindmap-node > a[href]:hover {\n    background-color: #f57c00;\n    color: #fff;\n    cursor: pointer; }\n\n.mindmap-node--editable {\n  cursor: all-scroll; }\n  .mindmap-node--editable > a {\n    pointer-events: none; }\n\n.mindmap-subnode-group {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 4px solid #9e9e9e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 15px;\n  padding: 5px; }\n  .mindmap-subnode-group a {\n    color: #212121;\n    font-family: 'Raleway';\n    font-size: 16px;\n    padding: 2px 5px; }\n\n.mindmap-connection {\n  fill: transparent;\n  stroke: #9e9e9e;\n  stroke-dasharray: 10px 4px;\n  stroke-width: 3px; }\n\n.mindmap-emoji {\n  height: 24px;\n  vertical-align: bottom;\n  width: 24px; }\n\n.reddit-emoji {\n  border-radius: 50%; }\n", ""]);

// exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(188);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});