/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const nest_utils_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(103);
const config_1 = tslib_1.__importDefault(__webpack_require__(108));
const core_2 = __webpack_require__(114);
const node_1 = __webpack_require__(52);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalFilters(new nest_utils_1.ApiErrorFilter());
    (0, nest_utils_1.initDocs)(app, 'Match Mate API', 'API for Match Mate App');
    (0, nest_utils_1.initValidation)(app);
    await runMigrationsIfNeeded(app);
    const port = config_1.default.port;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/docs`);
}
async function runMigrationsIfNeeded(app) {
    try {
        console.log('DEBUG INFO | start running migrations');
        const orm = app.get(core_2.MikroORM);
        const migrator = orm.getMigrator();
        const migrations = await migrator.getPendingMigrations();
        await migrator.up();
        console.log(`DEBUG INFO | successfully ran ${migrations.length} migrations`);
    }
    catch (e) {
        (0, node_1.captureException)(e);
        console.error('Failed to migrate db', e);
    }
}
bootstrap();


/***/ }),
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiErrorFilter = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_utils_1 = __webpack_require__(6);
let ApiErrorFilter = class ApiErrorFilter {
    catch(error, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(error.code).json({
            statusCode: error.code,
            message: error.message,
            reason: error.reason,
            payload: error.payload,
        });
    }
};
exports.ApiErrorFilter = ApiErrorFilter;
exports.ApiErrorFilter = ApiErrorFilter = tslib_1.__decorate([
    (0, common_1.Catch)(core_utils_1.ApiError)
], ApiErrorFilter);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processConfig = void 0;
const appsettings_loader_1 = __webpack_require__(8);
const mergeNestedObjects = (obj1, obj2) => Object.assign({}, obj1, ...Object.keys(obj2).map((key) => ({
    [key]: obj2[key] && typeof obj2[key] === 'object'
        ? mergeNestedObjects(obj1[key], obj2[key])
        : obj2[key],
})));
const processConfig = (srcConfig, localConfigFetcher) => {
    let localConfig;
    if (['local', 'test'].includes(process.env.NODE_ENV)) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            localConfig = localConfigFetcher();
        }
        catch (error) {
            console.error('No local config found');
        }
    }
    let config = (0, appsettings_loader_1.applyEnvConfig)(srcConfig);
    if (process.env.NODE_ENV !== 'production' && localConfig) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        config = mergeNestedObjects((0, appsettings_loader_1.applyEnvConfig)(config), (0, appsettings_loader_1.applyEnvConfig)(localConfig));
    }
    return config;
};
exports.processConfig = processConfig;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyEnvConfig = void 0;
var applyEnvConfig_1 = __webpack_require__(9);
Object.defineProperty(exports, "applyEnvConfig", ({ enumerable: true, get: function () { return applyEnvConfig_1.applyEnvConfig; } }));


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyEnvConfig = void 0;
var flattenObject = function (obj, prefix) {
    if (prefix === void 0) { prefix = ""; }
    return Object.keys(obj).reduce(function (acc, k) {
        var pre = prefix.length ? prefix + "." : "";
        if (typeof obj[k] === "object")
            Object.assign(acc, flattenObject(obj[k], pre + k));
        else
            acc[pre + k] = obj[k];
        return acc;
    }, {});
};
var unflatten = function (data) {
    var result = {};
    for (var i in data) {
        var keys = i.split(".");
        keys.reduce(function (res, key, j) {
            return res[key] ||
                (res[key] = isNaN(Number(keys[j + 1]))
                    ? keys.length - 1 === j
                        ? data[i]
                        : {}
                    : []);
        }, result);
    }
    return result;
};
/**
 * Function to apply the environment variables onto your config object.
 * Matches the keys of the envVars with the config case insensitive, omits underscores `_` and matches nested objects in the config with dot separated keys in the envVars.
 * When dot notation in env is not available this can be done by a double underscore `__`.
 *
 * @param appSettings Imported json settings. A typed object with default or placeholder values
 * @param envVars Optional param to provide a custom list of environment variables. `process.env` by default.
 * @returns An object of the same type as the appSettings param where the values are replaced with the matching values of envVars.
 */
var applyEnvConfig = function (appSettings, envVars) {
    if (envVars === void 0) { envVars = process.env; }
    var flattenedSettings = flattenObject(appSettings);
    var env = Object.keys(envVars).reduce(function (res, itemKey) {
        res[itemKey
            .toLowerCase()
            .replace(new RegExp("__", "g"), ".")
            .replace(new RegExp("_", "g"), "")
            .trim()] = envVars[itemKey];
        return res;
    }, {});
    Object.keys(flattenedSettings).forEach(function (key) {
        var oldValue = flattenedSettings[key];
        var oldCtor = oldValue.constructor;
        var envKey = key
            .toLowerCase()
            .replace(new RegExp("__", "g"), ".")
            .replace(new RegExp("_", "g"), "")
            .trim();
        var newValue = envKey in env ? env[envKey] : oldValue;
        flattenedSettings[key] =
            typeof oldValue === "boolean"
                ? oldCtor(newValue) &&
                    newValue.toString().toLowerCase() === true.toString()
                : oldCtor(newValue);
    });
    var newSettings = unflatten(flattenedSettings);
    return newSettings;
};
exports.applyEnvConfig = applyEnvConfig;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiError = void 0;
/**
 * Base for API Error
 */
class ApiError extends Error {
    constructor(code, reason, message, payload) {
        super(message);
        this.code = code;
        this.reason = reason || this.constructor.name;
        this.payload = payload;
    }
}
exports.ApiError = ApiError;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(13), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashString = void 0;
const hashString = (str) => {
    let hash = 0, i, chr;
    if (str.length === 0)
        return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};
exports.hashString = hashString;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importClasses = void 0;
const tslib_1 = __webpack_require__(1);
/* eslint-disable @typescript-eslint/no-explicit-any */
const glob_1 = __webpack_require__(15);
const path_1 = tslib_1.__importDefault(__webpack_require__(19));
/**
 * Import all classes within a list of directories (js files)
 * @param directories directories glob to scan for classes
 * @returns Array of class types
 *
 * @category Helpers
 */
const importClasses = (directories) => {
    const allFiles = directories.reduce((allDirs, dir) => {
        return allDirs.concat(glob_1.glob.sync(path_1.default.normalize(dir)));
    }, []);
    const dirs = allFiles
        .filter((file) => file.endsWith('.ts'))
        .map((file) => __webpack_require__(35)(path_1.default.resolve(file)));
    return loadFileClasses(dirs, []);
};
exports.importClasses = importClasses;
// eslint-disable-next-line @typescript-eslint/ban-types
const loadFileClasses = (exported, allLoaded) => {
    if (typeof exported === 'function') {
        allLoaded.push(exported);
    }
    else if (Array.isArray(exported)) {
        exported.forEach((i) => loadFileClasses(i, allLoaded));
    }
    else if (typeof exported === 'object' && exported !== null) {
        Object.keys(exported).forEach((key) => loadFileClasses(exported[key], allLoaded));
    }
    return allLoaded;
};


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var rp = __webpack_require__(16)
var minimatch = __webpack_require__(20)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(24)
var EE = (__webpack_require__(27).EventEmitter)
var path = __webpack_require__(19)
var assert = __webpack_require__(28)
var isAbsolute = __webpack_require__(29)
var globSync = __webpack_require__(30)
var common = __webpack_require__(31)
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(32)
var util = __webpack_require__(25)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(34)

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

function extend (origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin
  }

  var keys = Object.keys(add)
  var i = keys.length
  while (i--) {
    origin[keys[i]] = add[keys[i]]
  }
  return origin
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set

  if (!pattern)
    return false

  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  this._processing = 0

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  var sync = true
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }
  sync = false

  function done () {
    --self._processing
    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish()
        })
      } else {
        self._finish()
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) ||
      isAbsolute(pattern.map(function (p) {
        return typeof p === 'string' ? p : '[*]'
      }).join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (isIgnored(this, e))
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute)
    e = abs

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    self.fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er && er.code === 'ENOENT')
      return cb()

    var isSym = lstat && lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  self.fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        this.emit('error', error)
        this.abort()
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) {
        this.emit('error', er)
        // If the error is handled, then we abort
        // if not, we threw out of here
        this.abort()
      }
      if (!this.silent)
        console.error('glob error', er)
      break
  }

  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    self.fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return self.fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
    return cb(null, false, stat)

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return cb()

  return cb(null, c, stat)
}


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(17)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(18)

function newError (er) {
  return er && er.syscall === 'realpath' && (
    er.code === 'ELOOP' ||
    er.code === 'ENOMEM' ||
    er.code === 'ENAMETOOLONG'
  )
}

function realpath (p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb)
  }

  if (typeof cache === 'function') {
    cb = cache
    cache = null
  }
  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb)
    } else {
      cb(er, result)
    }
  })
}

function realpathSync (p, cache) {
  if (ok) {
    return origRealpathSync(p, cache)
  }

  try {
    return origRealpathSync(p, cache)
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache)
    } else {
      throw er
    }
  }
}

function monkeypatch () {
  fs.realpath = realpath
  fs.realpathSync = realpathSync
}

function unmonkeypatch () {
  fs.realpath = origRealpath
  fs.realpathSync = origRealpathSync
}


/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var pathModule = __webpack_require__(19);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(17);

// JavaScript implementation of realpath, ported from node pre-v6

var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;
  if (DEBUG) {
    var backtrace = new Error;
    callback = debugCallback;
  } else
    callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.
  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      continue;
    }

    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      }

      // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      // track this, if given a cache.
      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    }

    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;

  return p;
};


exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  }

  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function(err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    }

    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err);

    // if not a symlink, skip to the next path part
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    }

    // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.
    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs.stat(base, function(err) {
      if (err) return cb(err);

      fs.readlink(base, function(err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);

    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};


/***/ }),
/* 19 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = (function () { try { return __webpack_require__(19) } catch (e) {}}()) || {
  sep: '/'
}
minimatch.sep = path.sep

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(21)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  b = b || {}
  var t = {}
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
    return minimatch
  }

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }
  m.Minimatch.defaults = function defaults (options) {
    return orig.defaults(ext(def, options)).Minimatch
  }

  m.filter = function filter (pattern, options) {
    return orig.filter(pattern, ext(def, options))
  }

  m.defaults = function defaults (options) {
    return orig.defaults(ext(def, options))
  }

  m.makeRe = function makeRe (pattern, options) {
    return orig.makeRe(pattern, ext(def, options))
  }

  m.braceExpand = function braceExpand (pattern, options) {
    return orig.braceExpand(pattern, ext(def, options))
  }

  m.match = function (list, pattern, options) {
    return orig.match(list, pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  assertValidPattern(pattern)

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  assertValidPattern(pattern)

  if (!options) options = {}

  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (!options.allowWindowsEscape && path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false
  this.partial = !!options.partial

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = function debug() { console.error.apply(console, arguments) }

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  assertValidPattern(pattern)

  // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

var MAX_PATTERN_LENGTH = 1024 * 64
var assertValidPattern = function (pattern) {
  if (typeof pattern !== 'string') {
    throw new TypeError('invalid pattern')
  }

  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError('pattern is too long')
  }
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  assertValidPattern(pattern)

  var options = this.options

  // shortcuts
  if (pattern === '**') {
    if (!options.noglobstar)
      return GLOBSTAR
    else
      pattern = '*'
  }
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      /* istanbul ignore next */
      case '/': {
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false
      }

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        // split where the last [ was, make sure we don't have
        // an invalid re. if so, re-walk the contents of the
        // would-be class to re-translate any characters that
        // were passed through as-is
        // TODO: It would probably be faster to determine this
        // without a try/catch and a new RegExp, but it's tricky
        // to do safely.  For now, this is safe and works.
        var cs = pattern.substring(classStart + 1, i)
        try {
          RegExp('[' + cs + ']')
        } catch (er) {
          // not a valid class!
          var sp = this.parse(cs, SUBPARSE)
          re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
          hasMagic = hasMagic || sp[1]
          inClass = false
          continue
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '[': case '.': case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) /* istanbul ignore next - should be impossible */ {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) /* istanbul ignore next - should be impossible */ {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = function match (f, partial) {
  if (typeof partial === 'undefined') partial = this.partial
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    /* istanbul ignore if */
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      /* istanbul ignore if */
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      hit = f === p
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else /* istanbul ignore else */ if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    return (fi === fl - 1) && (file[fi] === '')
  }

  // should be unreachable.
  /* istanbul ignore next */
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var concatMap = __webpack_require__(22);
var balanced = __webpack_require__(23);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 23 */
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

try {
  var util = __webpack_require__(25);
  /* istanbul ignore next */
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = __webpack_require__(26);
}


/***/ }),
/* 25 */
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),
/* 26 */
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 27 */
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),
/* 28 */
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),
/* 29 */
/***/ ((module) => {

"use strict";


function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = globSync
globSync.GlobSync = GlobSync

var rp = __webpack_require__(16)
var minimatch = __webpack_require__(20)
var Minimatch = minimatch.Minimatch
var Glob = (__webpack_require__(15).Glob)
var util = __webpack_require__(25)
var path = __webpack_require__(19)
var assert = __webpack_require__(28)
var isAbsolute = __webpack_require__(29)
var common = __webpack_require__(31)
var setopts = common.setopts
var ownProp = common.ownProp
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

function globSync (pattern, options) {
  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  return new GlobSync(pattern, options).found
}

function GlobSync (pattern, options) {
  if (!pattern)
    throw new Error('must provide pattern')

  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  if (!(this instanceof GlobSync))
    return new GlobSync(pattern, options)

  setopts(this, pattern, options)

  if (this.noprocess)
    return this

  var n = this.minimatch.set.length
  this.matches = new Array(n)
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false)
  }
  this._finish()
}

GlobSync.prototype._finish = function () {
  assert.ok(this instanceof GlobSync)
  if (this.realpath) {
    var self = this
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null)
      for (var p in matchset) {
        try {
          p = self._makeAbs(p)
          var real = rp.realpathSync(p, self.realpathCache)
          set[real] = true
        } catch (er) {
          if (er.syscall === 'stat')
            set[self._makeAbs(p)] = true
          else
            throw er
        }
      }
    })
  }
  common.finish(this)
}


GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert.ok(this instanceof GlobSync)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // See if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) ||
      isAbsolute(pattern.map(function (p) {
        return typeof p === 'string' ? p : '[*]'
      }).join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip processing
  if (childrenIgnored(this, read))
    return

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
}


GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar)

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix.slice(-1) !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix)
      newPattern = [prefix, e]
    else
      newPattern = [e]
    this._process(newPattern.concat(remain), index, inGlobStar)
  }
}


GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e))
    return

  var abs = this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute) {
    e = abs
  }

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  if (this.stat)
    this._stat(e)
}


GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false)

  var entries
  var lstat
  var stat
  try {
    lstat = this.fs.lstatSync(abs)
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null
    }
  }

  var isSym = lstat && lstat.isSymbolicLink()
  this.symlinks[abs] = isSym

  // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.
  if (!isSym && lstat && !lstat.isDirectory())
    this.cache[abs] = 'FILE'
  else
    entries = this._readdir(abs, false)

  return entries
}

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries

  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return null

    if (Array.isArray(c))
      return c
  }

  try {
    return this._readdirEntries(abs, this.fs.readdirSync(abs))
  } catch (er) {
    this._readdirError(abs, er)
    return null
  }
}

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries

  // mark and cache dir-ness
  return entries
}

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        throw error
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict)
        throw er
      if (!this.silent)
        console.error('glob error', er)
      break
  }
}

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

  var entries = this._readdir(abs, inGlobStar)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false)

  var len = entries.length
  var isSym = this.symlinks[abs]

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true)
  }
}

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
}

// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return false

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return c

    if (needDir && c === 'FILE')
      return false

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (!stat) {
    var lstat
    try {
      lstat = this.fs.lstatSync(abs)
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false
        return false
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = this.fs.statSync(abs)
      } catch (er) {
        stat = lstat
      }
    } else {
      stat = lstat
    }
  }

  this.statCache[abs] = stat

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'

  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return false

  return c
}

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p)
}

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.setopts = setopts
exports.ownProp = ownProp
exports.makeAbs = makeAbs
exports.finish = finish
exports.mark = mark
exports.isIgnored = isIgnored
exports.childrenIgnored = childrenIgnored

function ownProp (obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field)
}

var fs = __webpack_require__(17)
var path = __webpack_require__(19)
var minimatch = __webpack_require__(20)
var isAbsolute = __webpack_require__(29)
var Minimatch = minimatch.Minimatch

function alphasort (a, b) {
  return a.localeCompare(b, 'en')
}

function setupIgnores (self, options) {
  self.ignore = options.ignore || []

  if (!Array.isArray(self.ignore))
    self.ignore = [self.ignore]

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap)
  }
}

// ignore patterns are always in dot:true mode.
function ignoreMap (pattern) {
  var gmatcher = null
  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
    gmatcher = new Minimatch(gpattern, { dot: true })
  }

  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher: gmatcher
  }
}

function setopts (self, pattern, options) {
  if (!options)
    options = {}

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  self.silent = !!options.silent
  self.pattern = pattern
  self.strict = options.strict !== false
  self.realpath = !!options.realpath
  self.realpathCache = options.realpathCache || Object.create(null)
  self.follow = !!options.follow
  self.dot = !!options.dot
  self.mark = !!options.mark
  self.nodir = !!options.nodir
  if (self.nodir)
    self.mark = true
  self.sync = !!options.sync
  self.nounique = !!options.nounique
  self.nonull = !!options.nonull
  self.nosort = !!options.nosort
  self.nocase = !!options.nocase
  self.stat = !!options.stat
  self.noprocess = !!options.noprocess
  self.absolute = !!options.absolute
  self.fs = options.fs || fs

  self.maxLength = options.maxLength || Infinity
  self.cache = options.cache || Object.create(null)
  self.statCache = options.statCache || Object.create(null)
  self.symlinks = options.symlinks || Object.create(null)

  setupIgnores(self, options)

  self.changedCwd = false
  var cwd = process.cwd()
  if (!ownProp(options, "cwd"))
    self.cwd = cwd
  else {
    self.cwd = path.resolve(options.cwd)
    self.changedCwd = self.cwd !== cwd
  }

  self.root = options.root || path.resolve(self.cwd, "/")
  self.root = path.resolve(self.root)
  if (process.platform === "win32")
    self.root = self.root.replace(/\\/g, "/")

  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
  if (process.platform === "win32")
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
  self.nomount = !!options.nomount

  // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.
  options.nonegate = true
  options.nocomment = true
  // always treat \ in patterns as escapes, not path separators
  options.allowWindowsEscape = false

  self.minimatch = new Minimatch(pattern, options)
  self.options = self.minimatch.options
}

function finish (self) {
  var nou = self.nounique
  var all = nou ? [] : Object.create(null)

  for (var i = 0, l = self.matches.length; i < l; i ++) {
    var matches = self.matches[i]
    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i]
        if (nou)
          all.push(literal)
        else
          all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou)
        all.push.apply(all, m)
      else
        m.forEach(function (m) {
          all[m] = true
        })
    }
  }

  if (!nou)
    all = Object.keys(all)

  if (!self.nosort)
    all = all.sort(alphasort)

  // at *some* point we statted all of these
  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i])
    }
    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !(/\/$/.test(e))
        var c = self.cache[e] || self.cache[makeAbs(self, e)]
        if (notDir && c)
          notDir = c !== 'DIR' && !Array.isArray(c)
        return notDir
      })
    }
  }

  if (self.ignore.length)
    all = all.filter(function(m) {
      return !isIgnored(self, m)
    })

  self.found = all
}

function mark (self, p) {
  var abs = makeAbs(self, p)
  var c = self.cache[abs]
  var m = p
  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      var mabs = makeAbs(self, m)
      self.statCache[mabs] = self.statCache[abs]
      self.cache[mabs] = self.cache[abs]
    }
  }

  return m
}

// lotta situps...
function makeAbs (self, f) {
  var abs = f
  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f)
  } else if (isAbsolute(f) || f === '') {
    abs = f
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f)
  } else {
    abs = path.resolve(f)
  }

  if (process.platform === 'win32')
    abs = abs.replace(/\\/g, '/')

  return abs
}


// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
  })
}

function childrenIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path))
  })
}


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(33)
var reqs = Object.create(null)
var once = __webpack_require__(34)

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres (key) {
  return once(function RES () {
    var cbs = reqs[key]
    var len = cbs.length
    var args = slice(arguments)

    // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.
    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args)
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len)
        process.nextTick(function () {
          RES.apply(null, args)
        })
      } else {
        delete reqs[key]
      }
    }
  })
}

function slice (args) {
  var length = args.length
  var array = []

  for (var i = 0; i < length; i++) array[i] = args[i]
  return array
}


/***/ }),
/* 33 */
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(33)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 35 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 35;
module.exports = webpackEmptyContext;

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importFilesByGlob = void 0;
/**
 * import command handlers dynamically
 * * IMPORTANT * For this to correctly work the handlers must be consistently named with xxx.handler.ts
 * */
const importFilesByGlob = (files) => {
    return files
        .keys()
        .map(files)
        .flatMap((x) => Object.values(x));
};
exports.importFilesByGlob = importFilesByGlob;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nested = void 0;
const class_transformer_1 = __webpack_require__(38);
const class_validator_1 = __webpack_require__(39);
/**
 * Nested objects with this decorator will also be validated.
 *
 * Transforms the nested objects to the defined type
 * @param type The type to validate and transform the nested property
 * @param isArray Whether the property is an object or an array of objects
 *
 * @category Decorator
 */
const Nested = (validationOptions, type) => {
    const nestedValidation = (0, class_validator_1.ValidateNested)({ ...validationOptions });
    const typeParser = type ? (0, class_transformer_1.Type)(() => type) : (0, class_transformer_1.Type)();
    return (object, propertyName) => {
        nestedValidation(object, propertyName);
        typeParser(object, propertyName);
    };
};
exports.Nested = Nested;


/***/ }),
/* 38 */
/***/ ((module) => {

"use strict";
module.exports = require("class-transformer");

/***/ }),
/* 39 */
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Command = void 0;
class Command {
}
exports.Command = Command;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const cqrs_1 = __webpack_require__(42);
let BaseController = class BaseController {
    constructor(bus) {
        this.bus = bus;
    }
    execute(command) {
        return this.bus.execute(command);
    }
};
exports.BaseController = BaseController;
exports.BaseController = BaseController = tslib_1.__decorate([
    tslib_1.__param(0, (0, common_1.Inject)(cqrs_1.CommandBus)),
    tslib_1.__metadata("design:paramtypes", [cqrs_1.CommandBus])
], BaseController);


/***/ }),
/* 42 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/cqrs");

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importFilesByGlob = void 0;
/**
 * import command handlers dynamically
 * * IMPORTANT * For this to correctly work the handlers must be consistently named with xxx.handler.ts
 * */
const importFilesByGlob = (files) => {
    return files
        .keys()
        .map(files)
        .flatMap((x) => Object.values(x));
};
exports.importFilesByGlob = importFilesByGlob;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initDocs = void 0;
const swagger_1 = __webpack_require__(45);
const initDocs = (app, name, description) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(name)
        .setDescription(description)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            tryItOutEnabled: true,
            docExpansion: 'list',
            displayRequestDuration: true,
            syntaxHighlight: { theme: 'arta' },
        },
    });
};
exports.initDocs = initDocs;


/***/ }),
/* 45 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = exports.initValidation = void 0;
const tslib_1 = __webpack_require__(1);
/* eslint-disable @typescript-eslint/no-explicit-any */
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
__webpack_require__(47);
const class_validator_1 = __webpack_require__(39);
const class_transformer_1 = __webpack_require__(38);
const validationTransformationOptions = {
    transform: true,
    transformOptions: {
        enableImplicitConversion: true,
        enableCircularCheck: true,
    },
    whitelist: true,
    forbidUnknownValues: false,
};
const initValidation = (app) => {
    app.useGlobalPipes(new common_1.ValidationPipe({
        ...validationTransformationOptions,
        exceptionFactory: (errors) => {
            const result = errors.reduce(mapErrors, {});
            return new common_1.BadRequestException({
                reason: 'ValidationError',
                errors: result,
                message: 'Some fields have errors',
            });
        },
    }));
    app.useGlobalInterceptors(new TransformInterceptor(app.get(core_1.Reflector)));
};
exports.initValidation = initValidation;
let TransformInterceptor = class TransformInterceptor extends common_1.ClassSerializerInterceptor {
    intercept(context, next) {
        const handlerFunc = context.getHandler();
        const responseMetadata = Reflect.getMetadata('swagger/apiResponse', // TODO: fix with additional plugin, swagger doesn't really match the needs here
        handlerFunc);
        const responseType = Object.values(responseMetadata)?.find((m) => m.type)?.type;
        const o = this.defaultOptions;
        o.type = responseType;
        Object.assign(o, validationTransformationOptions);
        return super.intercept(context, next);
    }
    async serialize(response, options) {
        const instance = options.type
            ? (0, class_transformer_1.plainToInstance)(options.type, response, options)
            : response;
        const responseErrors = instance && (await (0, class_validator_1.validate)(instance, validationTransformationOptions));
        responseErrors?.length &&
            console.error(JSON.stringify({ responseErrors }, null, 2));
        return super.serialize(instance, options);
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);
const reduceErrors = (errors) => {
    return errors.reduce(mapErrors, {});
};
const mapErrors = (m, error) => {
    m[error.property] = error.constraints
        ? Object.values(error.constraints)
        : reduceErrors(error.children);
    return m;
};


/***/ }),
/* 47 */
/***/ ((module) => {

"use strict";
module.exports = require("reflect-metadata");

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeListView = exports.ListView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const class_validator_1 = __webpack_require__(39);
const nested_decorator_1 = __webpack_require__(49);
const swagger_1 = __webpack_require__(45);
class ListView {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: false }, count: { required: false, type: () => Number } };
    }
}
exports.ListView = ListView;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], ListView.prototype, "count", void 0);
const makeListView = (childViewClass) => {
    class ListViewFactory extends ListView {
        static _OPENAPI_METADATA_FACTORY() {
            return { items: { required: false } };
        }
    }
    tslib_1.__decorate([
        (0, nested_decorator_1.Nested)({ each: true }, childViewClass),
        (0, swagger_1.ApiProperty)({ type: [childViewClass] }),
        tslib_1.__metadata("design:type", Array)
    ], ListViewFactory.prototype, "items", void 0);
    const name = `List${childViewClass.name}`;
    Object.defineProperty(ListViewFactory, 'name', {
        value: name,
    });
    return ListViewFactory;
};
exports.makeListView = makeListView;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nested = void 0;
const class_transformer_1 = __webpack_require__(38);
const class_validator_1 = __webpack_require__(39);
/**
 * Nested objects with this decorator will also be validated.
 *
 * Transforms the nested objects to the defined type
 * @param type The type to validate and transform the nested property
 * @param isArray Whether the property is an object or an array of objects
 *
 * @category Decorator
 */
const Nested = (validationOptions, type) => {
    const nestedValidation = (0, class_validator_1.ValidateNested)({ ...validationOptions });
    const typeParser = type ? (0, class_transformer_1.Type)(() => type) : (0, class_transformer_1.Type)();
    return (object, propertyName) => {
        nestedValidation(object, propertyName);
        typeParser(object, propertyName);
    };
};
exports.Nested = Nested;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initSentry = void 0;
const tslib_1 = __webpack_require__(1);
const Sentry = tslib_1.__importStar(__webpack_require__(52));
const core_1 = __webpack_require__(3);
const sentry_filter_1 = __webpack_require__(98);
const initSentry = (app, sentryConfig) => {
    if (sentryConfig.nodeEnv === 'local')
        return;
    Sentry.init({
        dsn: sentryConfig.dsn,
        environment: sentryConfig.nodeEnv,
        integrations: [
            new Sentry.Integrations.Http({ tracing: true }),
            new Sentry.Integrations.Express({ router: app.getHttpAdapter() }),
            new Sentry.Integrations.Postgres(),
            new Sentry.Integrations.Console(),
        ],
        tracesSampleRate: sentryConfig.tracesSampleRate,
        sampleRate: sentryConfig.sampleRate,
    });
    app.use(Sentry.Handlers.requestHandler({
        ip: true,
        request: true,
        user: ['id'],
    }));
    app.use(Sentry.Handlers.tracingHandler());
    app.use((req, _, next) => {
        Sentry.configureScope((scope) => {
            scope.addEventProcessor((e) => {
                e?.request?.headers && delete e?.request?.headers['authorization'];
                e.user && (e.user.id = req?.token?.id);
                return e;
            });
        });
        next();
    });
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new sentry_filter_1.SentryFilter(httpAdapter));
};
exports.initSentry = initSentry;


/***/ }),
/* 52 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_USER_INCLUDES: () => (/* reexport */ requestdata_DEFAULT_USER_INCLUDES),
  Handlers: () => (/* reexport */ handlers_namespaceObject),
  Hub: () => (/* reexport */ esm_hub.Hub),
  Integrations: () => (/* binding */ INTEGRATIONS),
  NodeClient: () => (/* reexport */ NodeClient),
  SDK_VERSION: () => (/* reexport */ SDK_VERSION),
  Scope: () => (/* reexport */ esm_scope.Scope),
  addBreadcrumb: () => (/* reexport */ addBreadcrumb),
  addGlobalEventProcessor: () => (/* reexport */ eventProcessors.addGlobalEventProcessor),
  addIntegration: () => (/* reexport */ addIntegration),
  addRequestDataToEvent: () => (/* reexport */ requestdata_addRequestDataToEvent),
  autoDiscoverNodePerformanceMonitoringIntegrations: () => (/* reexport */ autoDiscoverNodePerformanceMonitoringIntegrations),
  captureCheckIn: () => (/* reexport */ captureCheckIn),
  captureEvent: () => (/* reexport */ captureEvent),
  captureException: () => (/* reexport */ captureException),
  captureMessage: () => (/* reexport */ captureMessage),
  close: () => (/* reexport */ exports_close),
  configureScope: () => (/* reexport */ configureScope),
  continueTrace: () => (/* reexport */ continueTrace),
  createTransport: () => (/* reexport */ createTransport),
  deepReadDirSync: () => (/* reexport */ deepReadDirSync),
  defaultIntegrations: () => (/* reexport */ defaultIntegrations),
  defaultStackParser: () => (/* reexport */ defaultStackParser),
  enableAnrDetection: () => (/* reexport */ enableAnrDetection),
  extractRequestData: () => (/* reexport */ requestdata_extractRequestData),
  extractTraceparentData: () => (/* reexport */ tracing.extractTraceparentData),
  flush: () => (/* reexport */ flush),
  getActiveSpan: () => (/* reexport */ getActiveSpan),
  getActiveTransaction: () => (/* reexport */ getActiveTransaction),
  getCurrentHub: () => (/* reexport */ esm_hub.getCurrentHub),
  getHubFromCarrier: () => (/* reexport */ esm_hub.getHubFromCarrier),
  getModuleFromFilename: () => (/* reexport */ getModuleFromFilename),
  getSentryRelease: () => (/* reexport */ getSentryRelease),
  init: () => (/* reexport */ init),
  lastEventId: () => (/* reexport */ lastEventId),
  makeMain: () => (/* reexport */ esm_hub.makeMain),
  makeNodeTransport: () => (/* reexport */ makeNodeTransport),
  runWithAsyncContext: () => (/* reexport */ esm_hub.runWithAsyncContext),
  setContext: () => (/* reexport */ setContext),
  setExtra: () => (/* reexport */ setExtra),
  setExtras: () => (/* reexport */ setExtras),
  setMeasurement: () => (/* reexport */ setMeasurement),
  setTag: () => (/* reexport */ setTag),
  setTags: () => (/* reexport */ setTags),
  setUser: () => (/* reexport */ setUser),
  spanStatusfromHttpCode: () => (/* reexport */ spanStatusfromHttpCode),
  startActiveSpan: () => (/* reexport */ startActiveSpan),
  startInactiveSpan: () => (/* reexport */ startInactiveSpan),
  startSpan: () => (/* reexport */ startSpan),
  startSpanManual: () => (/* reexport */ startSpanManual),
  startTransaction: () => (/* reexport */ startTransaction),
  trace: () => (/* reexport */ trace),
  withMonitor: () => (/* reexport */ withMonitor),
  withScope: () => (/* reexport */ withScope)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/integrations/index.js
var integrations_namespaceObject = {};
__webpack_require__.r(integrations_namespaceObject);
__webpack_require__.d(integrations_namespaceObject, {
  FunctionToString: () => (FunctionToString),
  InboundFilters: () => (InboundFilters)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/handlers.js
var handlers_namespaceObject = {};
__webpack_require__.r(handlers_namespaceObject);
__webpack_require__.d(handlers_namespaceObject, {
  errorHandler: () => (errorHandler),
  extractRequestData: () => (requestDataDeprecated_extractRequestData),
  parseRequest: () => (parseRequest),
  requestHandler: () => (requestHandler),
  tracingHandler: () => (tracingHandler),
  trpcMiddleware: () => (trpcMiddleware)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/index.js
var esm_integrations_namespaceObject = {};
__webpack_require__.r(esm_integrations_namespaceObject);
__webpack_require__.d(esm_integrations_namespaceObject, {
  Console: () => (Console),
  Context: () => (Context),
  ContextLines: () => (ContextLines),
  Http: () => (Http),
  LinkedErrors: () => (LinkedErrors),
  LocalVariables: () => (LocalVariables),
  Modules: () => (Modules),
  OnUncaughtException: () => (OnUncaughtException),
  OnUnhandledRejection: () => (OnUnhandledRejection),
  RequestData: () => (RequestData),
  Undici: () => (undici.Undici)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/tracing/integrations.js
var tracing_integrations_namespaceObject = {};
__webpack_require__.r(tracing_integrations_namespaceObject);
__webpack_require__.d(tracing_integrations_namespaceObject, {
  Apollo: () => (Apollo),
  Express: () => (Express),
  GraphQL: () => (GraphQL),
  Mongo: () => (Mongo),
  Mysql: () => (Mysql),
  Postgres: () => (Postgres),
  Prisma: () => (Prisma)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/object.js + 1 modules
var object = __webpack_require__(62);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/integrations/functiontostring.js


let originalFunctionToString;

/** Patch toString calls to return proper name for wrapped functions */
class FunctionToString  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'FunctionToString';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = FunctionToString.id;
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    originalFunctionToString = Function.prototype.toString;

    // intrinsics (like Function.prototype) might be immutable in some environments
    // e.g. Node with --frozen-intrinsics, XS (an embedded JavaScript engine) or SES (a JavaScript proposal)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Function.prototype.toString = function ( ...args) {
        const context = (0,object.getOriginalFunction)(this) || this;
        return originalFunctionToString.apply(context, args);
      };
    } catch (e) {
      // ignore errors here, just don't patch this
    }
  }
} FunctionToString.__initStatic();



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(63);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/misc.js
var misc = __webpack_require__(59);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(60);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/integrations/inboundfilters.js


// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];

const DEFAULT_IGNORE_TRANSACTIONS = [
  /^.*\/healthcheck$/,
  /^.*\/healthy$/,
  /^.*\/live$/,
  /^.*\/ready$/,
  /^.*\/heartbeat$/,
  /^.*\/health$/,
  /^.*\/healthz$/,
];

/** Options for the InboundFilters integration */

/** Inbound filters configurable by the user */
class InboundFilters  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'InboundFilters';}

  /**
   * @inheritDoc
   */

   constructor(options = {}) {
    this.name = InboundFilters.id;
    this._options = options;
  }

  /**
   * @inheritDoc
   */
   setupOnce(_addGlobaleventProcessor, _getCurrentHub) {
    // noop
  }

  /** @inheritDoc */
   processEvent(event, _eventHint, client) {
    const clientOptions = client.getOptions();
    const options = _mergeOptions(this._options, clientOptions);
    return _shouldDropEvent(event, options) ? null : event;
  }
} InboundFilters.__initStatic();

/** JSDoc */
function _mergeOptions(
  internalOptions = {},
  clientOptions = {},
) {
  return {
    allowUrls: [...(internalOptions.allowUrls || []), ...(clientOptions.allowUrls || [])],
    denyUrls: [...(internalOptions.denyUrls || []), ...(clientOptions.denyUrls || [])],
    ignoreErrors: [
      ...(internalOptions.ignoreErrors || []),
      ...(clientOptions.ignoreErrors || []),
      ...(internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS),
    ],
    ignoreTransactions: [
      ...(internalOptions.ignoreTransactions || []),
      ...(clientOptions.ignoreTransactions || []),
      ...(internalOptions.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS),
    ],
    ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
  };
}

/** JSDoc */
function _shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,misc.getEventDescription)(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,misc.getEventDescription)(event)}`,
      );
    return true;
  }
  if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,misc.getEventDescription)(event)}`,
      );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(
        `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,misc.getEventDescription)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,misc.getEventDescription)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  return false;
}

function _isIgnoredError(event, ignoreErrors) {
  // If event.type, this is not an error
  if (event.type || !ignoreErrors || !ignoreErrors.length) {
    return false;
  }

  return _getPossibleEventMessages(event).some(message => (0,string.stringMatchesSomePattern)(message, ignoreErrors));
}

function _isIgnoredTransaction(event, ignoreTransactions) {
  if (event.type !== 'transaction' || !ignoreTransactions || !ignoreTransactions.length) {
    return false;
  }

  const name = event.transaction;
  return name ? (0,string.stringMatchesSomePattern)(name, ignoreTransactions) : false;
}

function _isDeniedUrl(event, denyUrls) {
  // TODO: Use Glob instead?
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : (0,string.stringMatchesSomePattern)(url, denyUrls);
}

function _isAllowedUrl(event, allowUrls) {
  // TODO: Use Glob instead?
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : (0,string.stringMatchesSomePattern)(url, allowUrls);
}

function _getPossibleEventMessages(event) {
  const possibleMessages = [];

  if (event.message) {
    possibleMessages.push(event.message);
  }

  let lastException;
  try {
    // @ts-expect-error Try catching to save bundle size
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    lastException = event.exception.values[event.exception.values.length - 1];
  } catch (e) {
    // try catching to save bundle size checking existence of variables
  }

  if (lastException) {
    if (lastException.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  }

  if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && possibleMessages.length === 0) {
    logger.logger.error(`Could not extract message for event ${(0,misc.getEventDescription)(event)}`);
  }

  return possibleMessages;
}

function _isSentryError(event) {
  try {
    // @ts-expect-error can't be a sentry error if undefined
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return event.exception.values[0].type === 'SentryError';
  } catch (e) {
    // ignore
  }
  return false;
}

function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];

    if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
      return frame.filename || null;
    }
  }

  return null;
}

function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      // @ts-expect-error we only care about frames if the whole thing here is defined
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
      // ignore
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error(`Cannot extract url for event ${(0,misc.getEventDescription)(event)}`);
    return null;
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/integrations/index.js



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/version.js
const SDK_VERSION = '7.76.0';



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/time.js
var time = __webpack_require__(56);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(61);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/hub.js
var esm_hub = __webpack_require__(53);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/exports.js



// Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
// where HUB_FUNCTION is some method on the Hub class.
//
// This is done to make sure the top level SDK methods stay in sync with the hub methods.
// Although every method here has an explicit return type, some of them (that map to void returns) do not
// contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.

/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @param captureContext Additional scope data to apply to exception event.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
  return (0,esm_hub.getCurrentHub)().captureException(exception, { captureContext });
}

/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(
  message,
  // eslint-disable-next-line deprecation/deprecation
  captureContext,
) {
  // This is necessary to provide explicit scopes upgrade, without changing the original
  // arity of the `captureMessage(message, level)` method.
  const level = typeof captureContext === 'string' ? captureContext : undefined;
  const context = typeof captureContext !== 'string' ? { captureContext } : undefined;
  return (0,esm_hub.getCurrentHub)().captureMessage(message, level, context);
}

/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event, hint) {
  return (0,esm_hub.getCurrentHub)().captureEvent(event, hint);
}

/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
  (0,esm_hub.getCurrentHub)().configureScope(callback);
}

/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
  (0,esm_hub.getCurrentHub)().addBreadcrumb(breadcrumb);
}

/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
  (0,esm_hub.getCurrentHub)().setContext(name, context);
}

/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  (0,esm_hub.getCurrentHub)().setExtras(extras);
}

/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
  (0,esm_hub.getCurrentHub)().setExtra(key, extra);
}

/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  (0,esm_hub.getCurrentHub)().setTags(tags);
}

/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
  (0,esm_hub.getCurrentHub)().setTag(key, value);
}

/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  (0,esm_hub.getCurrentHub)().setUser(user);
}

/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
  (0,esm_hub.getCurrentHub)().withScope(callback);
}

/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * NOTE: This function should only be used for *manual* instrumentation. Auto-instrumentation should call
 * `startTransaction` directly on the hub.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(
  context,
  customSamplingContext,
) {
  return (0,esm_hub.getCurrentHub)().startTransaction({ ...context }, customSamplingContext);
}

/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const hub = (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  const client = hub.getClient();
  if (!client) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Cannot capture check-in. No client defined.');
  } else if (!client.captureCheckIn) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Cannot capture check-in. Client does not support sending check-ins.');
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }

  return (0,misc.uuid4)();
}

/**
 * Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.
 *
 * @param monitorSlug The distinct slug of the monitor.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function withMonitor(
  monitorSlug,
  callback,
  upsertMonitorConfig,
) {
  const checkInId = captureCheckIn({ monitorSlug, status: 'in_progress' }, upsertMonitorConfig);
  const now = (0,time.timestampInSeconds)();

  function finishCheckIn(status) {
    captureCheckIn({ monitorSlug, status, checkInId, duration: (0,time.timestampInSeconds)() - now });
  }

  let maybePromiseResult;
  try {
    maybePromiseResult = callback();
  } catch (e) {
    finishCheckIn('error');
    throw e;
  }

  if ((0,is.isThenable)(maybePromiseResult)) {
    Promise.resolve(maybePromiseResult).then(
      () => {
        finishCheckIn('ok');
      },
      () => {
        finishCheckIn('error');
      },
    );
  } else {
    finishCheckIn('ok');
  }

  return maybePromiseResult;
}

/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function flush(timeout) {
  const client = (0,esm_hub.getCurrentHub)().getClient();
  if (client) {
    return client.flush(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Cannot flush events. No client defined.');
  return Promise.resolve(false);
}

/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function exports_close(timeout) {
  const client = (0,esm_hub.getCurrentHub)().getClient();
  if (client) {
    return client.close(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Cannot flush events and disable SDK. No client defined.');
  return Promise.resolve(false);
}

/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
  return (0,esm_hub.getCurrentHub)().lastEventId();
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/eventProcessors.js
var eventProcessors = __webpack_require__(64);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/integration.js




const installedIntegrations = [];

/** Map of integrations assigned to a client */

/**
 * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
 * preseve the order of integrations in the array.
 *
 * @private
 */
function filterDuplicates(integrations) {
  const integrationsByName = {};

  integrations.forEach(currentInstance => {
    const { name } = currentInstance;

    const existingInstance = integrationsByName[name];

    // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
    // default instance to overwrite an existing user instance
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }

    integrationsByName[name] = currentInstance;
  });

  return Object.keys(integrationsByName).map(k => integrationsByName[k]);
}

/** Gets integrations to install */
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;

  // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
  defaultIntegrations.forEach(integration => {
    integration.isDefaultInstance = true;
  });

  let integrations;

  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === 'function') {
    integrations = (0,misc.arrayify)(userIntegrations(defaultIntegrations));
  } else {
    integrations = defaultIntegrations;
  }

  const finalIntegrations = filterDuplicates(integrations);

  // The `Debug` integration prints copies of the `event` and `hint` which will be passed to `beforeSend` or
  // `beforeSendTransaction`. It therefore has to run after all other integrations, so that the changes of all event
  // processors will be reflected in the printed values. For lack of a more elegant way to guarantee that, we therefore
  // locate it and, assuming it exists, pop it out of its current spot and shove it onto the end of the array.
  const debugIndex = findIndex(finalIntegrations, integration => integration.name === 'Debug');
  if (debugIndex !== -1) {
    const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
    finalIntegrations.push(debugInstance);
  }

  return finalIntegrations;
}

/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(client, integrations) {
  const integrationIndex = {};

  integrations.forEach(integration => {
    // guard against empty provided integrations
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });

  return integrationIndex;
}

/** Setup a single integration.  */
function setupIntegration(client, integration, integrationIndex) {
  integrationIndex[integration.name] = integration;

  if (installedIntegrations.indexOf(integration.name) === -1) {
    integration.setupOnce(eventProcessors.addGlobalEventProcessor, esm_hub.getCurrentHub);
    installedIntegrations.push(integration.name);
  }

  if (client.on && typeof integration.preprocessEvent === 'function') {
    const callback = integration.preprocessEvent.bind(integration) ;
    client.on('preprocessEvent', (event, hint) => callback(event, hint, client));
  }

  if (client.addEventProcessor && typeof integration.processEvent === 'function') {
    const callback = integration.processEvent.bind(integration) ;

    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name,
    });

    client.addEventProcessor(processor);
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`Integration installed: ${integration.name}`);
}

/** Add an integration to the current hub's client. */
function addIntegration(integration) {
  const client = (0,esm_hub.getCurrentHub)().getClient();

  if (!client || !client.addIntegration) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn(`Cannot add integration "${integration.name}" because no SDK Client is available.`);
    return;
  }

  client.addIntegration(integration);
}

// Polyfill for Array.findIndex(), which is not supported in ES5
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return i;
    }
  }

  return -1;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/tracing.js
var tracing = __webpack_require__(67);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/utils/hasTracingEnabled.js


// Treeshakable guard to remove all code related to tracing

/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(
  maybeOptions,
) {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
    return false;
  }

  const client = (0,esm_hub.getCurrentHub)().getClient();
  const options = maybeOptions || (client && client.getOptions());
  return !!options && (options.enableTracing || 'tracesSampleRate' in options || 'tracesSampler' in options);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/trace.js




/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 *
 * Note that if you have not enabled tracing extensions via `addTracingExtensions`
 * or you didn't set `tracesSampleRate`, this function will not generate spans
 * and the `span` returned from the callback will be undefined.
 *
 * This function is meant to be used internally and may break at any time. Use at your own risk.
 *
 * @internal
 * @private
 */
function trace(
  context,
  callback,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onError = () => {},
) {
  const ctx = normalizeContext(context);

  const hub = (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  const parentSpan = scope.getSpan();

  const activeSpan = createChildSpanOrTransaction(hub, parentSpan, ctx);

  scope.setSpan(activeSpan);

  function finishAndSetSpan() {
    activeSpan && activeSpan.finish();
    hub.getScope().setSpan(parentSpan);
  }

  let maybePromiseResult;
  try {
    maybePromiseResult = callback(activeSpan);
  } catch (e) {
    activeSpan && activeSpan.setStatus('internal_error');
    onError(e);
    finishAndSetSpan();
    throw e;
  }

  if ((0,is.isThenable)(maybePromiseResult)) {
    Promise.resolve(maybePromiseResult).then(
      () => {
        finishAndSetSpan();
      },
      e => {
        activeSpan && activeSpan.setStatus('internal_error');
        onError(e);
        finishAndSetSpan();
      },
    );
  } else {
    finishAndSetSpan();
  }

  return maybePromiseResult;
}

/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getSpan()`, as long as the function is executed while the scope is active.
 *
 * If you want to create a span that is not set as active, use {@link startInactiveSpan}.
 *
 * Note that if you have not enabled tracing extensions via `addTracingExtensions`
 * or you didn't set `tracesSampleRate`, this function will not generate spans
 * and the `span` returned from the callback will be undefined.
 */
function startSpan(context, callback) {
  const ctx = normalizeContext(context);

  const hub = (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  const parentSpan = scope.getSpan();

  const activeSpan = createChildSpanOrTransaction(hub, parentSpan, ctx);
  scope.setSpan(activeSpan);

  function finishAndSetSpan() {
    activeSpan && activeSpan.finish();
    hub.getScope().setSpan(parentSpan);
  }

  let maybePromiseResult;
  try {
    maybePromiseResult = callback(activeSpan);
  } catch (e) {
    activeSpan && activeSpan.setStatus('internal_error');
    finishAndSetSpan();
    throw e;
  }

  if ((0,is.isThenable)(maybePromiseResult)) {
    Promise.resolve(maybePromiseResult).then(
      () => {
        finishAndSetSpan();
      },
      () => {
        activeSpan && activeSpan.setStatus('internal_error');
        finishAndSetSpan();
      },
    );
  } else {
    finishAndSetSpan();
  }

  return maybePromiseResult;
}

/**
 * @deprecated Use {@link startSpan} instead.
 */
const startActiveSpan = startSpan;

/**
 * Similar to `Sentry.startSpan`. Wraps a function with a transaction/span, but does not finish the span
 * after the function is done automatically.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * Note that if you have not enabled tracing extensions via `addTracingExtensions`
 * or you didn't set `tracesSampleRate`, this function will not generate spans
 * and the `span` returned from the callback will be undefined.
 */
function startSpanManual(
  context,
  callback,
) {
  const ctx = normalizeContext(context);

  const hub = (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  const parentSpan = scope.getSpan();

  const activeSpan = createChildSpanOrTransaction(hub, parentSpan, ctx);
  scope.setSpan(activeSpan);

  function finishAndSetSpan() {
    activeSpan && activeSpan.finish();
    hub.getScope().setSpan(parentSpan);
  }

  let maybePromiseResult;
  try {
    maybePromiseResult = callback(activeSpan, finishAndSetSpan);
  } catch (e) {
    activeSpan && activeSpan.setStatus('internal_error');
    throw e;
  }

  if ((0,is.isThenable)(maybePromiseResult)) {
    Promise.resolve(maybePromiseResult).then(undefined, () => {
      activeSpan && activeSpan.setStatus('internal_error');
    });
  }

  return maybePromiseResult;
}

/**
 * Creates a span. This span is not set as active, so will not get automatic instrumentation spans
 * as children or be able to be accessed via `Sentry.getSpan()`.
 *
 * If you want to create a span that is set as active, use {@link startSpan}.
 *
 * Note that if you have not enabled tracing extensions via `addTracingExtensions`
 * or you didn't set `tracesSampleRate` or `tracesSampler`, this function will not generate spans
 * and the `span` returned from the callback will be undefined.
 */
function startInactiveSpan(context) {
  if (!hasTracingEnabled()) {
    return undefined;
  }

  const ctx = { ...context };
  // If a name is set and a description is not, set the description to the name.
  if (ctx.name !== undefined && ctx.description === undefined) {
    ctx.description = ctx.name;
  }

  const hub = (0,esm_hub.getCurrentHub)();
  const parentSpan = getActiveSpan();
  return parentSpan ? parentSpan.startChild(ctx) : hub.startTransaction(ctx);
}

/**
 * Returns the currently active span.
 */
function getActiveSpan() {
  return (0,esm_hub.getCurrentHub)().getScope().getSpan();
}

/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers,
 * or in the browser from `<meta name="sentry-trace">` and `<meta name="baggage">` HTML tags.
 *
 * It also takes an optional `request` option, which if provided will also be added to the scope & transaction metadata.
 * The callback receives a transactionContext that may be used for `startTransaction` or `startSpan`.
 */
function continueTrace(
  {
    sentryTrace,
    baggage,
  }

,
  callback,
) {
  const hub = (0,esm_hub.getCurrentHub)();
  const currentScope = hub.getScope();

  const { traceparentData, dynamicSamplingContext, propagationContext } = (0,tracing.tracingContextFromHeaders)(
    sentryTrace,
    baggage,
  );

  currentScope.setPropagationContext(propagationContext);

  if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && traceparentData) {
    logger.logger.log(`[Tracing] Continuing trace ${traceparentData.traceId}.`);
  }

  const transactionContext = {
    ...traceparentData,
    metadata: (0,object.dropUndefinedKeys)({
      dynamicSamplingContext: traceparentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
    }),
  };

  return callback(transactionContext);
}

function createChildSpanOrTransaction(
  hub,
  parentSpan,
  ctx,
) {
  if (!hasTracingEnabled()) {
    return undefined;
  }
  return parentSpan ? parentSpan.startChild(ctx) : hub.startTransaction(ctx);
}

function normalizeContext(context) {
  const ctx = { ...context };
  // If a name is set and a description is not, set the description to the name.
  if (ctx.name !== undefined && ctx.description === undefined) {
    ctx.description = ctx.name;
  }

  return ctx;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/error.js
/** An error emitted by Sentry SDKs and related utilities. */
class SentryError extends Error {
  /** Display name of this error instance. */

   constructor( message, logLevel = 'warn') {
    super(message);this.message = message;
    this.name = new.target.prototype.constructor.name;
    // This sets the prototype to be `Error`, not `SentryError`. It's unclear why we do this, but commenting this line
    // out causes various (seemingly totally unrelated) playwright tests consistently time out. FYI, this makes
    // instances of `SentryError` fail `obj instanceof SentryError` checks.
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = logLevel;
  }
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/syncpromise.js
var syncpromise = __webpack_require__(65);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/promisebuffer.js



/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
  const buffer = [];

  function isReady() {
    return limit === undefined || buffer.length < limit;
  }

  /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0];
  }

  /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */
  function add(taskProducer) {
    if (!isReady()) {
      return (0,syncpromise.rejectedSyncPromise)(new SentryError('Not adding Promise because buffer limit was reached.'));
    }

    // start the task and add its promise to the queue
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task
      .then(() => remove(task))
      // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
      // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
      // have promises, so TS has to polyfill when down-compiling.)
      .then(null, () =>
        remove(task).then(null, () => {
          // We have to add another catch here because `remove()` starts a new promise chain.
        }),
      );
    return task;
  }

  /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */
  function drain(timeout) {
    return new syncpromise.SyncPromise((resolve, reject) => {
      let counter = buffer.length;

      if (!counter) {
        return resolve(true);
      }

      // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);

      // if all promises resolve in time, cancel the timer and resolve to `true`
      buffer.forEach(item => {
        void (0,syncpromise.resolvedSyncPromise)(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }

  return {
    $: buffer,
    add,
    drain,
  };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/dsn.js


/** Regular expression used to parse a Dsn. */
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function isValidProtocol(protocol) {
  return protocol === 'http' || protocol === 'https';
}

/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return (
    `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` +
    `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`
  );
}

/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
 */
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);

  if (!match) {
    // This should be logged to the console
    // eslint-disable-next-line no-console
    console.error(`Invalid Sentry Dsn: ${str}`);
    return undefined;
  }

  const [protocol, publicKey, pass = '', host, port = '', lastPath] = match.slice(1);
  let path = '';
  let projectId = lastPath;

  const split = projectId.split('/');
  if (split.length > 1) {
    path = split.slice(0, -1).join('/');
    projectId = split.pop() ;
  }

  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }

  return dsnFromComponents({ host, pass, path, projectId, port, protocol: protocol , publicKey });
}

function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || '',
    pass: components.pass || '',
    host: components.host,
    port: components.port || '',
    path: components.path || '',
    projectId: components.projectId,
  };
}

function validateDsn(dsn) {
  if (!(typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    return true;
  }

  const { port, projectId, protocol } = dsn;

  const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
  const hasMissingRequiredComponent = requiredComponents.find(component => {
    if (!dsn[component]) {
      logger.logger.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });

  if (hasMissingRequiredComponent) {
    return false;
  }

  if (!projectId.match(/^\d+$/)) {
    logger.logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }

  if (!isValidProtocol(protocol)) {
    logger.logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }

  if (port && isNaN(parseInt(port, 10))) {
    logger.logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }

  return true;
}

/**
 * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
 * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
 */
function makeDsn(from) {
  const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return undefined;
  }
  return components;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/memo.js
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper to decycle json objects
 */
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === 'function';
  const inner = hasWeakSet ? new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }

  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/node-stack-trace.js
/**
 * Does this filename look like it's part of the app code?
 */
function filenameIsInApp(filename, isNative = false) {
  const isInternal =
    isNative ||
    (filename &&
      // It's not internal if it's an absolute linux path
      !filename.startsWith('/') &&
      // It's not internal if it's an absolute windows path
      !filename.includes(':\\') &&
      // It's not internal if the path is starting with a dot
      !filename.startsWith('.') &&
      // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
      !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)); // Schema from: https://stackoverflow.com/a/3641782

  // in_app is all that's not an internal Node function or a module within node_modules
  // note that isNative appears to return true even for node core libraries
  // see https://github.com/getsentry/raven-node/issues/176

  return !isInternal && filename !== undefined && !filename.includes('node_modules/');
}

/** Node Stack line parser */
// eslint-disable-next-line complexity
function node(getModule) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;

  // eslint-disable-next-line complexity
  return (line) => {
    const lineMatch = line.match(FULL_MATCH);

    if (lineMatch) {
      let object;
      let method;
      let functionName;
      let typeName;
      let methodName;

      if (lineMatch[1]) {
        functionName = lineMatch[1];

        let methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart - 1] === '.') {
          methodStart--;
        }

        if (methodStart > 0) {
          object = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object = object.slice(0, objectEnd);
          }
        }
        typeName = undefined;
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === '<anonymous>') {
        methodName = undefined;
        functionName = undefined;
      }

      if (functionName === undefined) {
        methodName = methodName || '<anonymous>';
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }

      let filename = lineMatch[2] && lineMatch[2].startsWith('file://') ? lineMatch[2].slice(7) : lineMatch[2];
      const isNative = lineMatch[5] === 'native';

      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }

      return {
        filename,
        module: getModule ? getModule(filename) : undefined,
        function: functionName,
        lineno: parseInt(lineMatch[3], 10) || undefined,
        colno: parseInt(lineMatch[4], 10) || undefined,
        in_app: filenameIsInApp(filename, isNative),
      };
    }

    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line,
      };
    }

    return undefined;
  };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/stacktrace.js



const STACKTRACE_FRAME_LIMIT = 50;
// Used to sanitize webpack (error: *) wrapped stack errors
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;

/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);

  return (stack, skipFirst = 0) => {
    const frames = [];
    const lines = stack.split('\n');

    for (let i = skipFirst; i < lines.length; i++) {
      const line = lines[i];
      // Ignore lines over 1kb as they are unlikely to be stack frames.
      // Many of the regular expressions use backtracking which results in run time that increases exponentially with
      // input size. Huge strings can result in hangs/Denial of Service:
      // https://github.com/getsentry/sentry-javascript/issues/2286
      if (line.length > 1024) {
        continue;
      }

      // https://github.com/getsentry/sentry-javascript/issues/5459
      // Remove webpack (error: *) wrappers
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;

      // https://github.com/getsentry/sentry-javascript/issues/7813
      // Skip Error: lines
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }

      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);

        if (frame) {
          frames.push(frame);
          break;
        }
      }

      if (frames.length >= STACKTRACE_FRAME_LIMIT) {
        break;
      }
    }

    return stripSentryFramesAndReverse(frames);
  };
}

/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}

/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }

  const localStack = Array.from(stack);

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (/sentryWrapped/.test(localStack[localStack.length - 1].function || '')) {
    localStack.pop();
  }

  // Reversing in the middle of the procedure allows us to just pop the values off the stack
  localStack.reverse();

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || '')) {
    localStack.pop();

    // When using synthetic events, we will have a 2 levels deep stack, as `new Error('Sentry syntheticException')`
    // is produced within the hub itself, making it:
    //
    //   Sentry.captureException()
    //   getCurrentHub().captureException()
    //
    // instead of just the top `Sentry` call itself.
    // This forces us to possibly strip an additional frame in the exact same was as above.
    if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || '')) {
      localStack.pop();
    }
  }

  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
    ...frame,
    filename: frame.filename || localStack[localStack.length - 1].filename,
    function: frame.function || '?',
  }));
}

const defaultFunctionName = '<anonymous>';

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== 'function') {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return defaultFunctionName;
  }
}

/**
 * Node.js stack line parser
 *
 * This is in @sentry/utils so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */
function nodeStackLineParser(getModule) {
  return [90, node(getModule)];
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/normalize.js





/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = 100, maxProperties = +Infinity) {
  try {
    // since we're at the outermost level, we don't provide a key
    return visit('', input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}

/** JSDoc */
function normalizeToSize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object,
  // Default Node.js REPL depth
  depth = 3,
  // 100kB, as 200kB is max payload size, so half sounds reasonable
  maxSize = 100 * 1024,
) {
  const normalized = normalize(object, depth);

  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }

  return normalized ;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(
  key,
  value,
  depth = +Infinity,
  maxProperties = +Infinity,
  memo = memoBuilder(),
) {
  const [memoize, unmemoize] = memo;

  // Get the simple cases out of the way first
  if (
    value == null || // this matches null and undefined -> eqeq not eqeqeq
    (['number', 'boolean', 'string'].includes(typeof value) && !(0,is.isNaN)(value))
  ) {
    return value ;
  }

  const stringified = stringifyValue(key, value);

  // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
  // Everything else will have already been serialized, so if we don't see that pattern, we're done.
  if (!stringified.startsWith('[object ')) {
    return stringified;
  }

  // From here on, we can assert that `value` is either an object or an array.

  // Do not normalize objects that we know have already been normalized. As a general rule, the
  // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
  // have already been normalized.
  if ((value )['__sentry_skip_normalization__']) {
    return value ;
  }

  // We can set `__sentry_override_normalization_depth__` on an object to ensure that from there
  // We keep a certain amount of depth.
  // This should be used sparingly, e.g. we use it for the redux integration to ensure we get a certain amount of state.
  const remainingDepth =
    typeof (value )['__sentry_override_normalization_depth__'] === 'number'
      ? ((value )['__sentry_override_normalization_depth__'] )
      : depth;

  // We're also done if we've reached the max depth
  if (remainingDepth === 0) {
    // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace('object ', '');
  }

  // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
  if (memoize(value)) {
    return '[Circular ~]';
  }

  // If the value has a `toJSON` method, we call it to extract more information
  const valueWithToJSON = value ;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      // We need to normalize the return value of `.toJSON()` in case it has circular references
      return visit('', jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
      // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
  }

  // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
  // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
  // property/entry, and keep track of the number of items we add to it.
  const normalized = (Array.isArray(value) ? [] : {}) ;
  let numAdded = 0;

  // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
  // properties are non-enumerable and otherwise would get missed.
  const visitable = (0,object.convertToPlainObject)(value );

  for (const visitKey in visitable) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }

    if (numAdded >= maxProperties) {
      normalized[visitKey] = '[MaxProperties ~]';
      break;
    }

    // Recursively visit all the child nodes
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);

    numAdded++;
  }

  // Once we've visited all the branches, remove the parent from memo storage
  unmemoize(value);

  // Return accumulated values
  return normalized;
}

/* eslint-disable complexity */
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(
  key,
  // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
  // our internal use, it'll do
  value,
) {
  try {
    if (key === 'domain' && value && typeof value === 'object' && (value )._events) {
      return '[Domain]';
    }

    if (key === 'domainEmitter') {
      return '[DomainEmitter]';
    }

    // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.

    if (typeof global !== 'undefined' && value === global) {
      return '[Global]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
      return '[Window]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
      return '[Document]';
    }

    if ((0,is.isVueViewModel)(value)) {
      return '[VueViewModel]';
    }

    // React's SyntheticEvent thingy
    if ((0,is.isSyntheticEvent)(value)) {
      return '[SyntheticEvent]';
    }

    if (typeof value === 'number' && value !== value) {
      return '[NaN]';
    }

    if (typeof value === 'function') {
      return `[Function: ${getFunctionName(value)}]`;
    }

    if (typeof value === 'symbol') {
      return `[${String(value)}]`;
    }

    // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
    if (typeof value === 'bigint') {
      return `[BigInt: ${String(value)}]`;
    }

    // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
    // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
    // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
    // we can make sure that only plain objects come out that way.
    const objName = getConstructorName(value);

    // Handle HTML Elements
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }

    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
/* eslint-enable complexity */

function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);

  return prototype ? prototype.constructor.name : 'null prototype';
}

/** Calculates bytes size of input string */
function utf8Length(value) {
  // eslint-disable-next-line no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/envelope.js




/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function createEnvelope(headers, items = []) {
  return [headers, items] ;
}

/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]] ;
}

/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 *
 * If the callback returns true, the rest of the items will be skipped.
 */
function forEachEnvelopeItem(
  envelope,
  callback,
) {
  const envelopeItems = envelope[1];

  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);

    if (result) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true if the envelope contains any of the given envelope item types
 */
function envelopeContainsItemType(envelope, types) {
  return forEachEnvelopeItem(envelope, (_, type) => types.includes(type));
}

/**
 * Encode a string to UTF8.
 */
function encodeUTF8(input, textEncoder) {
  const utf8 = textEncoder || new TextEncoder();
  return utf8.encode(input);
}

/**
 * Serializes an envelope.
 */
function serializeEnvelope(envelope, textEncoder) {
  const [envHeaders, items] = envelope;

  // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
  let parts = JSON.stringify(envHeaders);

  function append(next) {
    if (typeof parts === 'string') {
      parts = typeof next === 'string' ? parts + next : [encodeUTF8(parts, textEncoder), next];
    } else {
      parts.push(typeof next === 'string' ? encodeUTF8(next, textEncoder) : next);
    }
  }

  for (const item of items) {
    const [itemHeaders, payload] = item;

    append(`\n${JSON.stringify(itemHeaders)}\n`);

    if (typeof payload === 'string' || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e) {
        // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.strinify()` still
        // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
        // performance impact but in this case a performance hit is better than throwing.
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }

  return typeof parts === 'string' ? parts : concatBuffers(parts);
}

function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);

  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }

  return merged;
}

/**
 * Parses an envelope
 */
function parseEnvelope(
  env,
  textEncoder,
  textDecoder,
) {
  let buffer = typeof env === 'string' ? textEncoder.encode(env) : env;

  function readBinary(length) {
    const bin = buffer.subarray(0, length);
    // Replace the buffer with the remaining data excluding trailing newline
    buffer = buffer.subarray(length + 1);
    return bin;
  }

  function readJson() {
    let i = buffer.indexOf(0xa);
    // If we couldn't find a newline, we must have found the end of the buffer
    if (i < 0) {
      i = buffer.length;
    }

    return JSON.parse(textDecoder.decode(readBinary(i))) ;
  }

  const envelopeHeader = readJson();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = [];

  while (buffer.length) {
    const itemHeader = readJson();
    const binaryLength = typeof itemHeader.length === 'number' ? itemHeader.length : undefined;

    items.push([itemHeader, binaryLength ? readBinary(binaryLength) : readJson()]);
  }

  return [envelopeHeader, items];
}

/**
 * Creates attachment envelope items
 */
function createAttachmentEnvelopeItem(
  attachment,
  textEncoder,
) {
  const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data, textEncoder) : attachment.data;

  return [
    (0,object.dropUndefinedKeys)({
      type: 'attachment',
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType,
    }),
    buffer,
  ];
}

const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor',
  // TODO: This is a temporary workaround until we have a proper data category for metrics
  statsd: 'unknown',
};

/**
 * Maps the type of an envelope item to a data category.
 */
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}

/** Extracts the minimal SDK info from from the metadata or an events */
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent || !metadataOrEvent.sdk) {
    return;
  }
  const { name, version } = metadataOrEvent.sdk;
  return { name, version };
}

/**
 * Creates event envelope headers, based on event, sdk info and tunnel
 * Note: This function was extracted from the core package to make it available in Replay
 */
function createEventEnvelopeHeaders(
  event,
  sdkInfo,
  tunnel,
  dsn,
) {
  const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: event.event_id ,
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && dsn && { dsn: dsnToString(dsn) }),
    ...(dynamicSamplingContext && {
      trace: (0,object.dropUndefinedKeys)({ ...dynamicSamplingContext }),
    }),
  };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/ratelimit.js
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend

const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds

/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1000;
  }

  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }

  return DEFAULT_RETRY_AFTER;
}

/**
 * Gets the time that the given category is disabled until for rate limiting.
 * In case no category-specific limit is set but a general rate limit across all categories is active,
 * that time is returned.
 *
 * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
 */
function disabledUntil(limits, category) {
  return limits[category] || limits.all || 0;
}

/**
 * Checks if a category is rate limited
 */
function isRateLimited(limits, category, now = Date.now()) {
  return disabledUntil(limits, category) > now;
}

/**
 * Update ratelimits from incoming headers.
 *
 * @return the updated RateLimits object.
 */
function updateRateLimits(
  limits,
  { statusCode, headers },
  now = Date.now(),
) {
  const updatedRateLimits = {
    ...limits,
  };

  // "The name is case-insensitive."
  // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
  const rateLimitHeader = headers && headers['x-sentry-rate-limits'];
  const retryAfterHeader = headers && headers['retry-after'];

  if (rateLimitHeader) {
    /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     */
    for (const limit of rateLimitHeader.trim().split(',')) {
      const [retryAfter, categories] = limit.split(':', 2);
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(';')) {
          updatedRateLimits[category] = now + delay;
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1000;
  }

  return updatedRateLimits;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/transports/base.js


const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;

/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */
function createTransport(
  options,
  makeRequest,
  buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE,
  ),
) {
  let rateLimits = {};
  const flush = (timeout) => buffer.drain(timeout);

  function send(envelope) {
    const filteredEnvelopeItems = [];

    // Drop rate limited items from envelope
    forEachEnvelopeItem(envelope, (item, type) => {
      const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent('ratelimit_backoff', envelopeItemDataCategory, event);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });

    // Skip sending if envelope is empty after filtering out rate limited events
    if (filteredEnvelopeItems.length === 0) {
      return (0,syncpromise.resolvedSyncPromise)();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems );

    // Creates client report for each item in an envelope
    const recordEnvelopeLoss = (reason) => {
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
      });
    };

    const requestTask = () =>
      makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        response => {
          // We don't want to throw on NOK responses, but we want to at least log them
          if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }

          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        error => {
          recordEnvelopeLoss('network_error');
          throw error;
        },
      );

    return buffer.add(requestTask).then(
      result => result,
      error => {
        if (error instanceof SentryError) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Skipped sending event because buffer is full.');
          recordEnvelopeLoss('queue_overflow');
          return (0,syncpromise.resolvedSyncPromise)();
        } else {
          throw error;
        }
      },
    );
  }

  // We use this to identifify if the transport is the base transport
  // TODO (v8): Remove this again as we'll no longer need it
  send.__sentry__baseTransport__ = true;

  return {
    send,
    flush,
  };
}

function getEventForEnvelopeItem(item, type) {
  if (type !== 'event' && type !== 'transaction') {
    return undefined;
  }

  return Array.isArray(item) ? (item )[1] : undefined;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/url.js
var url = __webpack_require__(69);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/utils.js



/** Grabs active transaction off scope, if any */
function getActiveTransaction(maybeHub) {
  const hub = maybeHub || (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  return scope.getTransaction() ;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/measurement.js


/**
 * Adds a measurement to the current active transaction.
 */
function setMeasurement(name, value, unit) {
  const transaction = getActiveTransaction();
  if (transaction) {
    transaction.setMeasurement(name, value, unit);
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/span.js


/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
class SpanRecorder {

   constructor(maxlen = 1000) {
    this._maxlen = maxlen;
    this.spans = [];
  }

  /**
   * This is just so that we don't run out of memory while recording a lot
   * of spans. At some point we just stop and flush out the start of the
   * trace tree (i.e.the first n spans with the smallest
   * start_timestamp).
   */
   add(span) {
    if (this.spans.length > this._maxlen) {
      span.spanRecorder = undefined;
    } else {
      this.spans.push(span);
    }
  }
}

/**
 * Span contains all data about a span
 */
class Span  {
  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * Internal keeper of the status
   */

  /**
   * @inheritDoc
   */

  /**
   * Timestamp in seconds when the span was created.
   */

  /**
   * Timestamp in seconds when the span ended.
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  /**
   * List of spans that were finalized
   */

  /**
   * @inheritDoc
   */

  /**
   * The instrumenter that created this span.
   */

  /**
   * The origin of the span, giving context about what created the span.
   */

  /**
   * You should never call the constructor manually, always use `Sentry.startTransaction()`
   * or call `startChild()` on an existing span.
   * @internal
   * @hideconstructor
   * @hidden
   */
   constructor(spanContext = {}) {
    this.traceId = spanContext.traceId || (0,misc.uuid4)();
    this.spanId = spanContext.spanId || (0,misc.uuid4)().substring(16);
    this.startTimestamp = spanContext.startTimestamp || (0,time.timestampInSeconds)();
    this.tags = spanContext.tags || {};
    this.data = spanContext.data || {};
    this.instrumenter = spanContext.instrumenter || 'sentry';
    this.origin = spanContext.origin || 'manual';

    if (spanContext.parentSpanId) {
      this.parentSpanId = spanContext.parentSpanId;
    }
    // We want to include booleans as well here
    if ('sampled' in spanContext) {
      this.sampled = spanContext.sampled;
    }
    if (spanContext.op) {
      this.op = spanContext.op;
    }
    if (spanContext.description) {
      this.description = spanContext.description;
    }
    if (spanContext.name) {
      this.description = spanContext.name;
    }
    if (spanContext.status) {
      this.status = spanContext.status;
    }
    if (spanContext.endTimestamp) {
      this.endTimestamp = spanContext.endTimestamp;
    }
  }

  /** An alias for `description` of the Span. */
   get name() {
    return this.description || '';
  }
  /** Update the name of the span. */
   set name(name) {
    this.setName(name);
  }

  /**
   * @inheritDoc
   */
   startChild(
    spanContext,
  ) {
    const childSpan = new Span({
      ...spanContext,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId,
    });

    childSpan.spanRecorder = this.spanRecorder;
    if (childSpan.spanRecorder) {
      childSpan.spanRecorder.add(childSpan);
    }

    childSpan.transaction = this.transaction;

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && childSpan.transaction) {
      const opStr = (spanContext && spanContext.op) || '< unknown op >';
      const nameStr = childSpan.transaction.name || '< unknown name >';
      const idStr = childSpan.transaction.spanId;

      const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
      childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
      logger.logger.log(logMessage);
    }

    return childSpan;
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this.tags = { ...this.tags, [key]: value };
    return this;
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   setData(key, value) {
    this.data = { ...this.data, [key]: value };
    return this;
  }

  /**
   * @inheritDoc
   */
   setStatus(value) {
    this.status = value;
    return this;
  }

  /**
   * @inheritDoc
   */
   setHttpStatus(httpStatus) {
    this.setTag('http.status_code', String(httpStatus));
    this.setData('http.response.status_code', httpStatus);
    const spanStatus = spanStatusfromHttpCode(httpStatus);
    if (spanStatus !== 'unknown_error') {
      this.setStatus(spanStatus);
    }
    return this;
  }

  /**
   * @inheritDoc
   */
   setName(name) {
    this.description = name;
  }

  /**
   * @inheritDoc
   */
   isSuccess() {
    return this.status === 'ok';
  }

  /**
   * @inheritDoc
   */
   finish(endTimestamp) {
    if (
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      // Don't call this for transactions
      this.transaction &&
      this.transaction.spanId !== this.spanId
    ) {
      const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
      if (logMessage) {
        logger.logger.log((logMessage ).replace('Starting', 'Finishing'));
      }
    }

    this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,time.timestampInSeconds)();
  }

  /**
   * @inheritDoc
   */
   toTraceparent() {
    return (0,tracing.generateSentryTraceHeader)(this.traceId, this.spanId, this.sampled);
  }

  /**
   * @inheritDoc
   */
   toContext() {
    return (0,object.dropUndefinedKeys)({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId,
    });
  }

  /**
   * @inheritDoc
   */
   updateWithContext(spanContext) {
    this.data = spanContext.data || {};
    this.description = spanContext.description;
    this.endTimestamp = spanContext.endTimestamp;
    this.op = spanContext.op;
    this.parentSpanId = spanContext.parentSpanId;
    this.sampled = spanContext.sampled;
    this.spanId = spanContext.spanId || this.spanId;
    this.startTimestamp = spanContext.startTimestamp || this.startTimestamp;
    this.status = spanContext.status;
    this.tags = spanContext.tags || {};
    this.traceId = spanContext.traceId || this.traceId;

    return this;
  }

  /**
   * @inheritDoc
   */
   getTraceContext() {
    return (0,object.dropUndefinedKeys)({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      trace_id: this.traceId,
    });
  }

  /**
   * @inheritDoc
   */
   toJSON()

 {
    return (0,object.dropUndefinedKeys)({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      timestamp: this.endTimestamp,
      trace_id: this.traceId,
      origin: this.origin,
    });
  }
}

/**
 * Converts a HTTP status code into a {@link SpanStatusType}.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */
function spanStatusfromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return 'ok';
  }

  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return 'unauthenticated';
      case 403:
        return 'permission_denied';
      case 404:
        return 'not_found';
      case 409:
        return 'already_exists';
      case 413:
        return 'failed_precondition';
      case 429:
        return 'resource_exhausted';
      default:
        return 'invalid_argument';
    }
  }

  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return 'unimplemented';
      case 503:
        return 'unavailable';
      case 504:
        return 'deadline_exceeded';
      default:
        return 'internal_error';
    }
  }

  return 'unknown_error';
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/scope.js
var esm_scope = __webpack_require__(54);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/lazy.js
var lazy = __webpack_require__(70);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/tracing/index.js



/**
 * Automatically detects and returns integrations that will work with your dependencies.
 */
function autoDiscoverNodePerformanceMonitoringIntegrations() {
  const loadedIntegrations = lazy.lazyLoadedNodePerformanceMonitoringIntegrations
    .map(tryLoad => {
      try {
        return tryLoad();
      } catch (_) {
        return undefined;
      }
    })
    .filter(integration => !!integration) ;

  if (loadedIntegrations.length === 0) {
    logger.logger.warn('Performance monitoring integrations could not be automatically loaded.');
  }

  // Only return integrations where their dependencies loaded successfully.
  return loadedIntegrations.filter(integration => !!integration.loadDependency());
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/eventbuilder.js





/**
 * Extracts stack frames from the error.stack string
 */
function parseStackFrames(stackParser, error) {
  return stackParser(error.stack || '', 1);
}

/**
 * Extracts stack frames from the error and builds a Sentry Exception
 */
function exceptionFromError(stackParser, error) {
  const exception = {
    type: error.name || error.constructor.name,
    value: error.message,
  };

  const frames = parseStackFrames(stackParser, error);
  if (frames.length) {
    exception.stacktrace = { frames };
  }

  return exception;
}

function getMessageForObject(exception) {
  if ('name' in exception && typeof exception.name === 'string') {
    let message = `'${exception.name}' captured as exception`;

    if ('message' in exception && typeof exception.message === 'string') {
      message += ` with message '${exception.message}'`;
    }

    return message;
  } else if ('message' in exception && typeof exception.message === 'string') {
    return exception.message;
  } else {
    // This will allow us to group events based on top-level keys
    // which is much better than creating new group when any key/value change
    return `Object captured as exception with keys: ${(0,object.extractExceptionKeysForMessage)(
      exception ,
    )}`;
  }
}

/**
 * Builds and Event from a Exception
 * @hidden
 */
function eventFromUnknownInput(
  getCurrentHub,
  stackParser,
  exception,
  hint,
) {
  let ex = exception;
  const providedMechanism =
    hint && hint.data && (hint.data ).mechanism;
  const mechanism = providedMechanism || {
    handled: true,
    type: 'generic',
  };

  if (!(0,is.isError)(exception)) {
    if ((0,is.isPlainObject)(exception)) {
      const hub = getCurrentHub();
      const client = hub.getClient();
      const normalizeDepth = client && client.getOptions().normalizeDepth;
      hub.configureScope(scope => {
        scope.setExtra('__serialized__', normalizeToSize(exception, normalizeDepth));
      });

      const message = getMessageForObject(exception);
      ex = (hint && hint.syntheticException) || new Error(message);
      (ex ).message = message;
    } else {
      // This handles when someone does: `throw "something awesome";`
      // We use synthesized Error here so we can extract a (rough) stack trace.
      ex = (hint && hint.syntheticException) || new Error(exception );
      (ex ).message = exception ;
    }
    mechanism.synthetic = true;
  }

  const event = {
    exception: {
      values: [exceptionFromError(stackParser, ex )],
    },
  };

  (0,misc.addExceptionTypeValue)(event, undefined, undefined);
  (0,misc.addExceptionMechanism)(event, mechanism);

  return {
    ...event,
    event_id: hint && hint.event_id,
  };
}

/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(
  stackParser,
  message,
  // eslint-disable-next-line deprecation/deprecation
  level = 'info',
  hint,
  attachStacktrace,
) {
  const event = {
    event_id: hint && hint.event_id,
    level,
    message,
  };

  if (attachStacktrace && hint && hint.syntheticException) {
    const frames = parseStackFrames(stackParser, hint.syntheticException);
    if (frames.length) {
      event.exception = {
        values: [
          {
            value: message,
            stacktrace: { frames },
          },
        ],
      };
    }
  }

  return event;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/api.js


const SENTRY_API_VERSION = '7';

/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
  const port = dsn.port ? `:${dsn.port}` : '';
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
}

/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}

/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
  return (0,object.urlEncode)({
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    sentry_key: dsn.publicKey,
    sentry_version: SENTRY_API_VERSION,
    ...(sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }),
  });
}

/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(
  dsn,
  // TODO (v8): Remove `tunnelOrOptions` in favor of `options`, and use the substitute code below
  // options: ClientOptions = {} as ClientOptions,
  tunnelOrOptions = {} ,
) {
  // TODO (v8): Use this code instead
  // const { tunnel, _metadata = {} } = options;
  // return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, _metadata.sdk)}`;

  const tunnel = typeof tunnelOrOptions === 'string' ? tunnelOrOptions : tunnelOrOptions.tunnel;
  const sdkInfo =
    typeof tunnelOrOptions === 'string' || !tunnelOrOptions._metadata ? undefined : tunnelOrOptions._metadata.sdk;

  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}

/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(
  dsnLike,
  dialogOptions

,
) {
  const dsn = makeDsn(dsnLike);
  if (!dsn) {
    return '';
  }

  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;

  let encodedOptions = `dsn=${dsnToString(dsn)}`;
  for (const key in dialogOptions) {
    if (key === 'dsn') {
      continue;
    }

    if (key === 'user') {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key] )}`;
    }
  }

  return `${endpoint}?${encodedOptions}`;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/envelope.js


/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...(event.sdk.integrations || []), ...(sdkInfo.integrations || [])];
  event.sdk.packages = [...(event.sdk.packages || []), ...(sdkInfo.packages || [])];
  return event;
}

/** Creates an envelope from a Session */
function createSessionEnvelope(
  session,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && dsn && { dsn: dsnToString(dsn) }),
  };

  const envelopeItem =
    'aggregates' in session ? [{ type: 'sessions' }, session] : [{ type: 'session' }, session.toJSON()];

  return createEnvelope(envelopeHeaders, [envelopeItem]);
}

/**
 * Create an Envelope from an event.
 */
function createEventEnvelope(
  event,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);

  /*
    Note: Due to TS, event.type may be `replay_event`, theoretically.
    In practice, we never call `createEventEnvelope` with `replay_event` type,
    and we'd have to adjut a looot of types to make this work properly.
    We want to avoid casting this around, as that could lead to bugs (e.g. when we add another type)
    So the safe choice is to really guard against the replay_event type here.
  */
  const eventType = event.type && event.type !== 'replay_event' ? event.type : 'event';

  enhanceEventWithSdkInfo(event, metadata && metadata.sdk);

  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);

  // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
  // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
  // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
  // of this `delete`, lest we miss putting it back in the next time the property is in use.)
  delete event.sdkProcessingMetadata;

  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/session.js
var esm_session = __webpack_require__(55);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
var tracing_dynamicSamplingContext = __webpack_require__(72);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(57);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/constants.js
var constants = __webpack_require__(66);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/utils/prepareEvent.js





/**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * Note: This also triggers callbacks for `addGlobalEventProcessor`, but not `beforeSend`.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */
function prepareEvent(
  options,
  event,
  hint,
  scope,
  client,
) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || (0,misc.uuid4)(),
    timestamp: event.timestamp || (0,time.dateTimestampInSeconds)(),
  };
  const integrations = hint.integrations || options.integrations.map(i => i.name);

  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);

  // Only put debug IDs onto frames for error events.
  if (event.type === undefined) {
    applyDebugIds(prepared, options.stackParser);
  }

  // If we have scope given to us, use it as the base for further modifications.
  // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
  let finalScope = scope;
  if (hint.captureContext) {
    finalScope = esm_scope.Scope.clone(finalScope).update(hint.captureContext);
  }

  // We prepare the result here with a resolved Event.
  let result = (0,syncpromise.resolvedSyncPromise)(prepared);

  const clientEventProcessors = client && client.getEventProcessors ? client.getEventProcessors() : [];

  // This should be the last thing called, since we want that
  // {@link Hub.addEventProcessor} gets the finished prepared event.
  //
  // We need to check for the existence of `finalScope.getAttachments`
  // because `getAttachments` can be undefined if users are using an older version
  // of `@sentry/core` that does not have the `getAttachments` method.
  // See: https://github.com/getsentry/sentry-javascript/issues/5229
  if (finalScope) {
    // Collect attachments from the hint and scope
    if (finalScope.getAttachments) {
      const attachments = [...(hint.attachments || []), ...finalScope.getAttachments()];

      if (attachments.length) {
        hint.attachments = attachments;
      }
    }

    // In case we have a hub we reassign it.
    result = finalScope.applyToEvent(prepared, hint, clientEventProcessors);
  } else {
    // Apply client & global event processors even if there is no scope
    // TODO (v8): Update the order to be Global > Client
    result = (0,eventProcessors.notifyEventProcessors)([...clientEventProcessors, ...(0,eventProcessors.getGlobalEventProcessors)()], prepared, hint);
  }

  return result.then(evt => {
    if (evt) {
      // We apply the debug_meta field only after all event processors have ran, so that if any event processors modified
      // file names (e.g.the RewriteFrames integration) the filename -> debug ID relationship isn't destroyed.
      // This should not cause any PII issues, since we're only moving data that is already on the event and not adding
      // any new data
      applyDebugMeta(evt);
    }

    if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}

/**
 *  Enhances event using the client configuration.
 *  It takes care of all "static" values like environment, release and `dist`,
 *  as well as truncating overly long values.
 * @param event event instance to be enhanced
 */
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;

  if (!('environment' in event)) {
    event.environment = 'environment' in options ? environment : constants.DEFAULT_ENVIRONMENT;
  }

  if (event.release === undefined && release !== undefined) {
    event.release = release;
  }

  if (event.dist === undefined && dist !== undefined) {
    event.dist = dist;
  }

  if (event.message) {
    event.message = (0,string.truncate)(event.message, maxValueLength);
  }

  const exception = event.exception && event.exception.values && event.exception.values[0];
  if (exception && exception.value) {
    exception.value = (0,string.truncate)(exception.value, maxValueLength);
  }

  const request = event.request;
  if (request && request.url) {
    request.url = (0,string.truncate)(request.url, maxValueLength);
  }
}

const debugIdStackParserCache = new WeakMap();

/**
 * Puts debug IDs into the stack frames of an error event.
 */
function applyDebugIds(event, stackParser) {
  const debugIdMap = worldwide.GLOBAL_OBJ._sentryDebugIds;

  if (!debugIdMap) {
    return;
  }

  let debugIdStackFramesCache;
  const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
  if (cachedDebugIdStackFrameCache) {
    debugIdStackFramesCache = cachedDebugIdStackFrameCache;
  } else {
    debugIdStackFramesCache = new Map();
    debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
  }

  // Build a map of filename -> debug_id
  const filenameDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
    let parsedStack;
    const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
    if (cachedParsedStack) {
      parsedStack = cachedParsedStack;
    } else {
      parsedStack = stackParser(debugIdStackTrace);
      debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
    }

    for (let i = parsedStack.length - 1; i >= 0; i--) {
      const stackFrame = parsedStack[i];
      if (stackFrame.filename) {
        acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
        break;
      }
    }
    return acc;
  }, {});

  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (frame.filename) {
          frame.debug_id = filenameDebugIdMap[frame.filename];
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}

/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */
function applyDebugMeta(event) {
  // Extract debug IDs and filenames from the stack frames on the event.
  const filenameDebugIdMap = {};
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (frame.debug_id) {
          if (frame.abs_path) {
            filenameDebugIdMap[frame.abs_path] = frame.debug_id;
          } else if (frame.filename) {
            filenameDebugIdMap[frame.filename] = frame.debug_id;
          }
          delete frame.debug_id;
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }

  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }

  // Fill debug_meta information
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.keys(filenameDebugIdMap).forEach(filename => {
    images.push({
      type: 'sourcemap',
      code_file: filename,
      debug_id: filenameDebugIdMap[filename],
    });
  });
}

/**
 * This function adds all used integrations to the SDK info in the event.
 * @param event The event that will be filled with all integrations.
 */
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
  }
}

/**
 * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
 * Normalized keys:
 * - `breadcrumbs.data`
 * - `user`
 * - `contexts`
 * - `extra`
 * @param event Event
 * @returns Normalized event
 */
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }

  const normalized = {
    ...event,
    ...(event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map(b => ({
        ...b,
        ...(b.data && {
          data: normalize(b.data, depth, maxBreadth),
        }),
      })),
    }),
    ...(event.user && {
      user: normalize(event.user, depth, maxBreadth),
    }),
    ...(event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth),
    }),
    ...(event.extra && {
      extra: normalize(event.extra, depth, maxBreadth),
    }),
  };

  // event.contexts.trace stores information about a Transaction. Similarly,
  // event.spans[] stores information about child Spans. Given that a
  // Transaction is conceptually a Span, normalization should apply to both
  // Transactions and Spans consistently.
  // For now the decision is to skip normalization of Transactions and Spans,
  // so this block overwrites the normalized event to add back the original
  // Transaction information prior to normalization.
  if (event.contexts && event.contexts.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;

    // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }

  // event.spans[].data may contain circular/dangerous data so we need to normalize it
  if (event.spans) {
    normalized.spans = event.spans.map(span => {
      // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
      if (span.data) {
        span.data = normalize(span.data, depth, maxBreadth);
      }
      return span;
    });
  }

  return normalized;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/baseclient.js








const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */
class BaseClient {
  /** Options passed to the SDK. */

  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */

  /** Array of set up integrations. */

  /** Indicates whether this client's integrations have been set up. */

  /** Number of calls being processed */

  /** Holds flushable  */

  // eslint-disable-next-line @typescript-eslint/ban-types

  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
   constructor(options) {
    this._options = options;
    this._integrations = {};
    this._integrationsInitialized = false;
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];

    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('No DSN provided, client will not send events.');
    }

    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
      this._transport = options.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url,
      });
    }
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   captureException(exception, hint, scope) {
    // ensure we haven't captured this very object before
    if ((0,misc.checkOrSetAlreadyCaught)(exception)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(ALREADY_SEEN_ERROR);
      return;
    }

    let eventId = hint && hint.event_id;

    this._process(
      this.eventFromException(exception, hint)
        .then(event => this._captureEvent(event, hint, scope))
        .then(result => {
          eventId = result;
        }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level,
    hint,
    scope,
  ) {
    let eventId = hint && hint.event_id;

    const promisedEvent = (0,is.isPrimitive)(message)
      ? this.eventFromMessage(String(message), level, hint)
      : this.eventFromException(message, hint);

    this._process(
      promisedEvent
        .then(event => this._captureEvent(event, hint, scope))
        .then(result => {
          eventId = result;
        }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint, scope) {
    // ensure we haven't captured this very object before
    if (hint && hint.originalException && (0,misc.checkOrSetAlreadyCaught)(hint.originalException)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(ALREADY_SEEN_ERROR);
      return;
    }

    let eventId = hint && hint.event_id;

    this._process(
      this._captureEvent(event, hint, scope).then(result => {
        eventId = result;
      }),
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureSession(session) {
    if (!(typeof session.release === 'string')) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Discarded session because of missing or non-string release');
    } else {
      this.sendSession(session);
      // After sending, we set init false to indicate it's not the first occurrence
      (0,esm_session.updateSession)(session, { init: false });
    }
  }

  /**
   * @inheritDoc
   */
   getDsn() {
    return this._dsn;
  }

  /**
   * @inheritDoc
   */
   getOptions() {
    return this._options;
  }

  /**
   * @see SdkMetadata in @sentry/types
   *
   * @return The metadata of the SDK
   */
   getSdkMetadata() {
    return this._options._metadata;
  }

  /**
   * @inheritDoc
   */
   getTransport() {
    return this._transport;
  }

  /**
   * @inheritDoc
   */
   flush(timeout) {
    const transport = this._transport;
    if (transport) {
      return this._isClientDoneProcessing(timeout).then(clientFinished => {
        return transport.flush(timeout).then(transportFlushed => clientFinished && transportFlushed);
      });
    } else {
      return (0,syncpromise.resolvedSyncPromise)(true);
    }
  }

  /**
   * @inheritDoc
   */
   close(timeout) {
    return this.flush(timeout).then(result => {
      this.getOptions().enabled = false;
      return result;
    });
  }

  /** Get all installed event processors. */
   getEventProcessors() {
    return this._eventProcessors;
  }

  /** @inheritDoc */
   addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }

  /**
   * Sets up the integrations
   */
   setupIntegrations(forceInitialize) {
    if ((forceInitialize && !this._integrationsInitialized) || (this._isEnabled() && !this._integrationsInitialized)) {
      this._integrations = setupIntegrations(this, this._options.integrations);
      this._integrationsInitialized = true;
    }
  }

  /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   */
   getIntegrationById(integrationId) {
    return this._integrations[integrationId];
  }

  /**
   * @inheritDoc
   */
   getIntegration(integration) {
    try {
      return (this._integrations[integration.id] ) || null;
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
      return null;
    }
  }

  /**
   * @inheritDoc
   */
   addIntegration(integration) {
    setupIntegration(this, integration, this._integrations);
  }

  /**
   * @inheritDoc
   */
   sendEvent(event, hint = {}) {
    this.emit('beforeSendEvent', event, hint);

    let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);

    for (const attachment of hint.attachments || []) {
      env = addItemToEnvelope(
        env,
        createAttachmentEnvelopeItem(
          attachment,
          this._options.transportOptions && this._options.transportOptions.textEncoder,
        ),
      );
    }

    const promise = this._sendEnvelope(env);
    if (promise) {
      promise.then(sendResponse => this.emit('afterSendEvent', event, sendResponse), null);
    }
  }

  /**
   * @inheritDoc
   */
   sendSession(session) {
    const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    void this._sendEnvelope(env);
  }

  /**
   * @inheritDoc
   */
   recordDroppedEvent(reason, category, _event) {
    // Note: we use `event` in replay, where we overwrite this hook.

    if (this._options.sendClientReports) {
      // We want to track each category (error, transaction, session, replay_event) separately
      // but still keep the distinction between different type of outcomes.
      // We could use nested maps, but it's much easier to read and type this way.
      // A correct type for map-based implementation if we want to go that route
      // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
      // With typescript 4.1 we could even use template literal types
      const key = `${reason}:${category}`;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`Adding outcome: "${key}"`);

      // The following works because undefined + 1 === NaN and NaN is falsy
      this._outcomes[key] = this._outcomes[key] + 1 || 1;
    }
  }

  // Keep on() & emit() signatures in sync with types' client.ts interface
  /* eslint-disable @typescript-eslint/unified-signatures */

  /** @inheritdoc */

  /** @inheritdoc */
   on(hook, callback) {
    if (!this._hooks[hook]) {
      this._hooks[hook] = [];
    }

    // @ts-expect-error We assue the types are correct
    this._hooks[hook].push(callback);
  }

  /** @inheritdoc */

  /** @inheritdoc */
   emit(hook, ...rest) {
    if (this._hooks[hook]) {
      this._hooks[hook].forEach(callback => callback(...rest));
    }
  }

  /* eslint-enable @typescript-eslint/unified-signatures */

  /** Updates existing session based on the provided event */
   _updateSessionFromEvent(session, event) {
    let crashed = false;
    let errored = false;
    const exceptions = event.exception && event.exception.values;

    if (exceptions) {
      errored = true;

      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism && mechanism.handled === false) {
          crashed = true;
          break;
        }
      }
    }

    // A session is updated and that session update is sent in only one of the two following scenarios:
    // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
    // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
    const sessionNonTerminal = session.status === 'ok';
    const shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);

    if (shouldUpdateAndSend) {
      (0,esm_session.updateSession)(session, {
        ...(crashed && { status: 'crashed' }),
        errors: session.errors || Number(errored || crashed),
      });
      this.captureSession(session);
    }
  }

  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
   _isClientDoneProcessing(timeout) {
    return new syncpromise.SyncPromise(resolve => {
      let ticked = 0;
      const tick = 1;

      const interval = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval);
          resolve(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval);
            resolve(false);
          }
        }
      }, tick);
    });
  }

  /** Determines whether this SDK is enabled and a transport is present. */
   _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }

  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */
   _prepareEvent(event, hint, scope) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations.length > 0) {
      hint.integrations = integrations;
    }

    this.emit('preprocessEvent', event, hint);

    return prepareEvent(options, event, hint, scope, this).then(evt => {
      if (evt === null) {
        return evt;
      }

      // If a trace context is not set on the event, we use the propagationContext set on the event to
      // generate a trace context. If the propagationContext does not have a dynamic sampling context, we
      // also generate one for it.
      const { propagationContext } = evt.sdkProcessingMetadata || {};
      const trace = evt.contexts && evt.contexts.trace;
      if (!trace && propagationContext) {
        const { traceId: trace_id, spanId, parentSpanId, dsc } = propagationContext ;
        evt.contexts = {
          trace: {
            trace_id,
            span_id: spanId,
            parent_span_id: parentSpanId,
          },
          ...evt.contexts,
        };

        const dynamicSamplingContext = dsc ? dsc : (0,tracing_dynamicSamplingContext.getDynamicSamplingContextFromClient)(trace_id, this, scope);

        evt.sdkProcessingMetadata = {
          dynamicSamplingContext,
          ...evt.sdkProcessingMetadata,
        };
      }
      return evt;
    });
  }

  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
   _captureEvent(event, hint = {}, scope) {
    return this._processEvent(event, hint, scope).then(
      finalEvent => {
        return finalEvent.event_id;
      },
      reason => {
        if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
          // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
          // control flow, log just the message (no stack) as a log-level log.
          const sentryError = reason ;
          if (sentryError.logLevel === 'log') {
            logger.logger.log(sentryError.message);
          } else {
            logger.logger.warn(sentryError);
          }
        }
        return undefined;
      },
    );
  }

  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
   _processEvent(event, hint, scope) {
    const options = this.getOptions();
    const { sampleRate } = options;

    const isTransaction = isTransactionEvent(event);
    const isError = isErrorEvent(event);
    const eventType = event.type || 'error';
    const beforeSendLabel = `before send for type \`${eventType}\``;

    // 1.0 === 100% events are sent
    // 0.0 === 0% events are sent
    // Sampling for transaction happens somewhere else
    if (isError && typeof sampleRate === 'number' && Math.random() > sampleRate) {
      this.recordDroppedEvent('sample_rate', 'error', event);
      return (0,syncpromise.rejectedSyncPromise)(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
          'log',
        ),
      );
    }

    const dataCategory = eventType === 'replay_event' ? 'replay' : eventType;

    return this._prepareEvent(event, hint, scope)
      .then(prepared => {
        if (prepared === null) {
          this.recordDroppedEvent('event_processor', dataCategory, event);
          throw new SentryError('An event processor returned `null`, will not send event.', 'log');
        }

        const isInternalException = hint.data && (hint.data ).__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }

        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      })
      .then(processedEvent => {
        if (processedEvent === null) {
          this.recordDroppedEvent('before_send', dataCategory, event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, 'log');
        }

        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }

        // None of the Sentry built event processor will update transaction name,
        // so if the transaction name has been changed by an event processor, we know
        // it has to come from custom event processor added by a user
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = 'custom';
          processedEvent.transaction_info = {
            ...transactionInfo,
            source,
          };
        }

        this.sendEvent(processedEvent, hint);
        return processedEvent;
      })
      .then(null, reason => {
        if (reason instanceof SentryError) {
          throw reason;
        }

        this.captureException(reason, {
          data: {
            __sentry__: true,
          },
          originalException: reason,
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`,
        );
      });
  }

  /**
   * Occupies the client with processing and event
   */
   _process(promise) {
    this._numProcessing++;
    void promise.then(
      value => {
        this._numProcessing--;
        return value;
      },
      reason => {
        this._numProcessing--;
        return reason;
      },
    );
  }

  /**
   * @inheritdoc
   */
   _sendEnvelope(envelope) {
    this.emit('beforeEnvelope', envelope);

    if (this._isEnabled() && this._transport) {
      return this._transport.send(envelope).then(null, reason => {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Error while sending event:', reason);
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Transport disabled');
    }
  }

  /**
   * Clears outcomes on this client and returns them.
   */
   _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.keys(outcomes).map(key => {
      const [reason, category] = key.split(':') ;
      return {
        reason,
        category,
        quantity: outcomes[key],
      };
    });
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types

}

/**
 * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
 */
function _validateBeforeSendResult(
  beforeSendResult,
  beforeSendLabel,
) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if ((0,is.isThenable)(beforeSendResult)) {
    return beforeSendResult.then(
      event => {
        if (!(0,is.isPlainObject)(event) && event !== null) {
          throw new SentryError(invalidValueError);
        }
        return event;
      },
      e => {
        throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
      },
    );
  } else if (!(0,is.isPlainObject)(beforeSendResult) && beforeSendResult !== null) {
    throw new SentryError(invalidValueError);
  }
  return beforeSendResult;
}

/**
 * Process the matching `beforeSendXXX` callback.
 */
function processBeforeSend(
  options,
  event,
  hint,
) {
  const { beforeSend, beforeSendTransaction } = options;

  if (isErrorEvent(event) && beforeSend) {
    return beforeSend(event, hint);
  }

  if (isTransactionEvent(event) && beforeSendTransaction) {
    return beforeSendTransaction(event, hint);
  }

  return event;
}

function isErrorEvent(event) {
  return event.type === undefined;
}

function isTransactionEvent(event) {
  return event.type === 'transaction';
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/checkin.js


/**
 * Create envelope from check in item.
 */
function createCheckInEnvelope(
  checkIn,
  dynamicSamplingContext,
  metadata,
  tunnel,
  dsn,
) {
  const headers = {
    sent_at: new Date().toISOString(),
  };

  if (metadata && metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version,
    };
  }

  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }

  if (dynamicSamplingContext) {
    headers.trace = (0,object.dropUndefinedKeys)(dynamicSamplingContext) ;
  }

  const item = createCheckInEnvelopeItem(checkIn);
  return createEnvelope(headers, [item]);
}

function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: 'check_in',
  };
  return [checkInHeaders, checkIn];
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/sessionflusher.js



/**
 * @inheritdoc
 */
class SessionFlusher  {

   constructor(client, attrs) {
    this._client = client;
    this.flushTimeout = 60;
    this._pendingAggregates = {};
    this._isEnabled = true;

    // Call to setInterval, so that flush is called every 60 seconds
    this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000);
    this._sessionAttrs = attrs;
  }

  /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSession` */
   flush() {
    const sessionAggregates = this.getSessionAggregates();
    if (sessionAggregates.aggregates.length === 0) {
      return;
    }
    this._pendingAggregates = {};
    this._client.sendSession(sessionAggregates);
  }

  /** Massages the entries in `pendingAggregates` and returns aggregated sessions */
   getSessionAggregates() {
    const aggregates = Object.keys(this._pendingAggregates).map((key) => {
      return this._pendingAggregates[parseInt(key)];
    });

    const sessionAggregates = {
      attrs: this._sessionAttrs,
      aggregates,
    };
    return (0,object.dropUndefinedKeys)(sessionAggregates);
  }

  /** JSDoc */
   close() {
    clearInterval(this._intervalId);
    this._isEnabled = false;
    this.flush();
  }

  /**
   * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
   * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
   * `_incrementSessionStatusCount` along with the start date
   */
   incrementSessionStatusCount() {
    if (!this._isEnabled) {
      return;
    }
    const scope = (0,esm_hub.getCurrentHub)().getScope();
    const requestSession = scope.getRequestSession();

    if (requestSession && requestSession.status) {
      this._incrementSessionStatusCount(requestSession.status, new Date());
      // This is not entirely necessarily but is added as a safe guard to indicate the bounds of a request and so in
      // case captureRequestSession is called more than once to prevent double count
      scope.setRequestSession(undefined);
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    }
  }

  /**
   * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
   * the session received
   */
   _incrementSessionStatusCount(status, date) {
    // Truncate minutes and seconds on Session Started attribute to have one minute bucket keys
    const sessionStartedTrunc = new Date(date).setSeconds(0, 0);
    this._pendingAggregates[sessionStartedTrunc] = this._pendingAggregates[sessionStartedTrunc] || {};

    // corresponds to aggregated sessions in one specific minute bucket
    // for example, {"started":"2021-03-16T08:00:00.000Z","exited":4, "errored": 1}
    const aggregationCounts = this._pendingAggregates[sessionStartedTrunc];
    if (!aggregationCounts.started) {
      aggregationCounts.started = new Date(sessionStartedTrunc).toISOString();
    }

    switch (status) {
      case 'errored':
        aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
        return aggregationCounts.errored;
      case 'ok':
        aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
        return aggregationCounts.exited;
      default:
        aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
        return aggregationCounts.crashed;
    }
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/supports.js



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,worldwide.getGlobalObject)();

/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
  try {
    new ErrorEvent('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
  try {
    // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
    // 1 argument required, but only 0 present.
    // @ts-expect-error It really needs 1 argument, not 0.
    new DOMError('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
  try {
    new DOMException('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
  if (!('fetch' in WINDOW)) {
    return false;
  }

  try {
    new Headers();
    new Request('http://www.example.com');
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
  return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}

/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }

  // Fast path to avoid DOM I/O
  // eslint-disable-next-line @typescript-eslint/unbound-method
  if (isNativeFetch(WINDOW.fetch)) {
    return true;
  }

  // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
  // so create a "pure" iframe to see if that has native fetch
  let result = false;
  const doc = WINDOW.document;
  // eslint-disable-next-line deprecation/deprecation
  if (doc && typeof (doc.createElement ) === 'function') {
    try {
      const sandbox = doc.createElement('iframe');
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        result = isNativeFetch(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.logger.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
    }
  }

  return result;
}

/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
  return 'ReportingObserver' in WINDOW;
}

/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
  // (see https://caniuse.com/#feat=referrer-policy),
  // it doesn't. And it throws an exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233

  if (!supportsFetch()) {
    return false;
  }

  try {
    new Request('_', {
      referrerPolicy: 'origin' ,
    });
    return true;
  } catch (e) {
    return false;
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/vendor/supportsHistory.js


// Based on https://github.com/angular/angular.js/pull/13945/files

// eslint-disable-next-line deprecation/deprecation
const supportsHistory_WINDOW = (0,worldwide.getGlobalObject)();

/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
  // NOTE: in Chrome App environment, touching history.pushState, *even inside
  //       a try/catch block*, will cause Chrome to output an error to console.error
  // borrowed from: https://github.com/angular/angular.js/pull/13945/files
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chrome = (supportsHistory_WINDOW ).chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  const hasHistoryApi = 'history' in supportsHistory_WINDOW && !!supportsHistory_WINDOW.history.pushState && !!supportsHistory_WINDOW.history.replaceState;

  return !isChromePackagedApp && hasHistoryApi;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/instrument.js








// eslint-disable-next-line deprecation/deprecation
const instrument_WINDOW = (0,worldwide.getGlobalObject)();

const SENTRY_XHR_DATA_KEY = '__sentry_xhr_v2__';

/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */

const handlers = {};
const instrumented = {};

/** Instruments given API */
function instrument(type) {
  if (instrumented[type]) {
    return;
  }

  instrumented[type] = true;

  switch (type) {
    case 'console':
      instrumentConsole();
      break;
    case 'dom':
      instrumentDOM();
      break;
    case 'xhr':
      instrumentXHR();
      break;
    case 'fetch':
      instrumentFetch();
      break;
    case 'history':
      instrumentHistory();
      break;
    case 'error':
      instrumentError();
      break;
    case 'unhandledrejection':
      instrumentUnhandledRejection();
      break;
    default:
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('unknown instrumentation type:', type);
      return;
  }
}

/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
  handlers[type] = handlers[type] || [];
  (handlers[type] ).push(callback);
  instrument(type);
}

/**
 * Reset all instrumentation handlers.
 * This can be used by tests to ensure we have a clean slate of instrumentation handlers.
 */
function resetInstrumentationHandlers() {
  Object.keys(handlers).forEach(key => {
    handlers[key ] = undefined;
  });
}

/** JSDoc */
function triggerHandlers(type, data) {
  if (!type || !handlers[type]) {
    return;
  }

  for (const handler of handlers[type] || []) {
    try {
      handler(data);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.logger.error(
          `Error while triggering instrumentation handler.\nType: ${type}\nName: ${getFunctionName(handler)}\nError:`,
          e,
        );
    }
  }
}

/** JSDoc */
function instrumentConsole() {
  if (!("console" in worldwide.GLOBAL_OBJ)) {
    return;
  }

  logger.CONSOLE_LEVELS.forEach(function (level) {
    if (!(level in worldwide.GLOBAL_OBJ.console)) {
      return;
    }

    (0,object.fill)(worldwide.GLOBAL_OBJ.console, level, function (originalConsoleMethod) {
      logger.originalConsoleMethods[level] = originalConsoleMethod;

      return function (...args) {
        triggerHandlers('console', { args, level });

        const log = logger.originalConsoleMethods[level];
        log && log.apply(worldwide.GLOBAL_OBJ.console, args);
      };
    });
  });
}

/** JSDoc */
function instrumentFetch() {
  if (!supportsNativeFetch()) {
    return;
  }

  (0,object.fill)(worldwide.GLOBAL_OBJ, 'fetch', function (originalFetch) {
    return function (...args) {
      const { method, url } = parseFetchArgs(args);

      const handlerData = {
        args,
        fetchData: {
          method,
          url,
        },
        startTimestamp: Date.now(),
      };

      triggerHandlers('fetch', {
        ...handlerData,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalFetch.apply(worldwide.GLOBAL_OBJ, args).then(
        (response) => {
          triggerHandlers('fetch', {
            ...handlerData,
            endTimestamp: Date.now(),
            response,
          });
          return response;
        },
        (error) => {
          triggerHandlers('fetch', {
            ...handlerData,
            endTimestamp: Date.now(),
            error,
          });
          // NOTE: If you are a Sentry user, and you are seeing this stack frame,
          //       it means the sentry.javascript SDK caught an error invoking your application code.
          //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
          throw error;
        },
      );
    };
  });
}

function hasProp(obj, prop) {
  return !!obj && typeof obj === 'object' && !!(obj )[prop];
}

function getUrlFromResource(resource) {
  if (typeof resource === 'string') {
    return resource;
  }

  if (!resource) {
    return '';
  }

  if (hasProp(resource, 'url')) {
    return resource.url;
  }

  if (resource.toString) {
    return resource.toString();
  }

  return '';
}

/**
 * Parses the fetch arguments to find the used Http method and the url of the request
 */
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: 'GET', url: '' };
  }

  if (fetchArgs.length === 2) {
    const [url, options] = fetchArgs ;

    return {
      url: getUrlFromResource(url),
      method: hasProp(options, 'method') ? String(options.method).toUpperCase() : 'GET',
    };
  }

  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg ),
    method: hasProp(arg, 'method') ? String(arg.method).toUpperCase() : 'GET',
  };
}

/** JSDoc */
function instrumentXHR() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!(instrument_WINDOW ).XMLHttpRequest) {
    return;
  }

  const xhrproto = XMLHttpRequest.prototype;

  (0,object.fill)(xhrproto, 'open', function (originalOpen) {
    return function ( ...args) {
      const startTimestamp = Date.now();

      const url = args[1];
      const xhrInfo = (this[SENTRY_XHR_DATA_KEY] = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        method: (0,is.isString)(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1],
        request_headers: {},
      });

      // if Sentry key appears in URL, don't capture it as a request
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if ((0,is.isString)(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
        this.__sentry_own_request__ = true;
      }

      const onreadystatechangeHandler = () => {
        // For whatever reason, this is not the same instance here as from the outer method
        const xhrInfo = this[SENTRY_XHR_DATA_KEY];

        if (!xhrInfo) {
          return;
        }

        if (this.readyState === 4) {
          try {
            // touching statusCode in some platforms throws
            // an exception
            xhrInfo.status_code = this.status;
          } catch (e) {
            /* do nothing */
          }

          triggerHandlers('xhr', {
            args: args ,
            endTimestamp: Date.now(),
            startTimestamp,
            xhr: this,
          } );
        }
      };

      if ('onreadystatechange' in this && typeof this.onreadystatechange === 'function') {
        (0,object.fill)(this, 'onreadystatechange', function (original) {
          return function ( ...readyStateArgs) {
            onreadystatechangeHandler();
            return original.apply(this, readyStateArgs);
          };
        });
      } else {
        this.addEventListener('readystatechange', onreadystatechangeHandler);
      }

      // Intercepting `setRequestHeader` to access the request headers of XHR instance.
      // This will only work for user/library defined headers, not for the default/browser-assigned headers.
      // Request cookies are also unavailable for XHR, as `Cookie` header can't be defined by `setRequestHeader`.
      (0,object.fill)(this, 'setRequestHeader', function (original) {
        return function ( ...setRequestHeaderArgs) {
          const [header, value] = setRequestHeaderArgs ;

          const xhrInfo = this[SENTRY_XHR_DATA_KEY];

          if (xhrInfo) {
            xhrInfo.request_headers[header.toLowerCase()] = value;
          }

          return original.apply(this, setRequestHeaderArgs);
        };
      });

      return originalOpen.apply(this, args);
    };
  });

  (0,object.fill)(xhrproto, 'send', function (originalSend) {
    return function ( ...args) {
      const sentryXhrData = this[SENTRY_XHR_DATA_KEY];
      if (sentryXhrData && args[0] !== undefined) {
        sentryXhrData.body = args[0];
      }

      triggerHandlers('xhr', {
        args,
        startTimestamp: Date.now(),
        xhr: this,
      });

      return originalSend.apply(this, args);
    };
  });
}

let lastHref;

/** JSDoc */
function instrumentHistory() {
  if (!supportsHistory()) {
    return;
  }

  const oldOnPopState = instrument_WINDOW.onpopstate;
  instrument_WINDOW.onpopstate = function ( ...args) {
    const to = instrument_WINDOW.location.href;
    // keep track of the current URL state, as we always receive only the updated state
    const from = lastHref;
    lastHref = to;
    triggerHandlers('history', {
      from,
      to,
    });
    if (oldOnPopState) {
      // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
      // https://github.com/getsentry/sentry-javascript/issues/3344
      // https://github.com/bugsnag/bugsnag-js/issues/469
      try {
        return oldOnPopState.apply(this, args);
      } catch (_oO) {
        // no-empty
      }
    }
  };

  /** @hidden */
  function historyReplacementFunction(originalHistoryFunction) {
    return function ( ...args) {
      const url = args.length > 2 ? args[2] : undefined;
      if (url) {
        // coerce to string (this is what pushState does)
        const from = lastHref;
        const to = String(url);
        // keep track of the current URL state, as we always receive only the updated state
        lastHref = to;
        triggerHandlers('history', {
          from,
          to,
        });
      }
      return originalHistoryFunction.apply(this, args);
    };
  }

  (0,object.fill)(instrument_WINDOW.history, 'pushState', historyReplacementFunction);
  (0,object.fill)(instrument_WINDOW.history, 'replaceState', historyReplacementFunction);
}

const DEBOUNCE_DURATION = 1000;
let debounceTimerID;
let lastCapturedEvent;

/**
 * Check whether two DOM events are similar to eachother. For example, two click events on the same button.
 */
function areSimilarDomEvents(a, b) {
  // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
  if (a.type !== b.type) {
    return false;
  }

  try {
    // If both events have the same type, it's still possible that actions were performed on different targets.
    // e.g. 2 clicks on different buttons.
    if (a.target !== b.target) {
      return false;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
  // to which an event listener was attached), we treat them as the same action, as we want to capture
  // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
  return true;
}

/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
  // We are only interested in filtering `keypress` events for now.
  if (event.type !== 'keypress') {
    return false;
  }

  try {
    const target = event.target ;

    if (!target || !target.tagName) {
      return true;
    }

    // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
    // e.g.tabbing through elements, hotkeys, etc.
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return false;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  return true;
}

/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    // It's possible this handler might trigger multiple times for the same
    // event (e.g. event propagation through node ancestors).
    // Ignore if we've already captured that event.
    if (!event || event['_sentryCaptured']) {
      return;
    }

    // We always want to skip _some_ events.
    if (shouldSkipDOMEvent(event)) {
      return;
    }

    // Mark event as "seen"
    (0,object.addNonEnumerableProperty)(event, '_sentryCaptured', true);

    const name = event.type === 'keypress' ? 'input' : event.type;

    // If there is no last captured event, it means that we can safely capture the new event and store it for future comparisons.
    // If there is a last captured event, see if the new event is different enough to treat it as a unique one.
    // If that's the case, emit the previous event and store locally the newly-captured DOM event.
    if (lastCapturedEvent === undefined || !areSimilarDomEvents(lastCapturedEvent, event)) {
      handler({
        event: event,
        name,
        global: globalListener,
      });
      lastCapturedEvent = event;
    }

    // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
    clearTimeout(debounceTimerID);
    debounceTimerID = instrument_WINDOW.setTimeout(() => {
      lastCapturedEvent = undefined;
    }, DEBOUNCE_DURATION);
  };
}

/** JSDoc */
function instrumentDOM() {
  if (!instrument_WINDOW.document) {
    return;
  }

  // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
  // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
  // we instrument `addEventListener` so that we don't end up attaching this handler twice.
  const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  instrument_WINDOW.document.addEventListener('click', globalDOMEventHandler, false);
  instrument_WINDOW.document.addEventListener('keypress', globalDOMEventHandler, false);

  // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
  // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
  // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
  // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
  // guaranteed to fire at least once.)
  ['EventTarget', 'Node'].forEach((target) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const proto = (instrument_WINDOW )[target] && (instrument_WINDOW )[target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }

    (0,object.fill)(proto, 'addEventListener', function (originalAddEventListener) {
      return function (

        type,
        listener,
        options,
      ) {
        if (type === 'click' || type == 'keypress') {
          try {
            const el = this ;
            const handlers = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
            const handlerForType = (handlers[type] = handlers[type] || { refCount: 0 });

            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }

            handlerForType.refCount++;
          } catch (e) {
            // Accessing dom properties is always fragile.
            // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
          }
        }

        return originalAddEventListener.call(this, type, listener, options);
      };
    });

    (0,object.fill)(
      proto,
      'removeEventListener',
      function (originalRemoveEventListener) {
        return function (

          type,
          listener,
          options,
        ) {
          if (type === 'click' || type == 'keypress') {
            try {
              const el = this ;
              const handlers = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers[type];

              if (handlerForType) {
                handlerForType.refCount--;
                // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                if (handlerForType.refCount <= 0) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                  handlerForType.handler = undefined;
                  delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                }

                // If there are no longer any custom handlers of any type on this element, cleanup everything.
                if (Object.keys(handlers).length === 0) {
                  delete el.__sentry_instrumentation_handlers__;
                }
              }
            } catch (e) {
              // Accessing dom properties is always fragile.
              // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
            }
          }

          return originalRemoveEventListener.call(this, type, listener, options);
        };
      },
    );
  });
}

let _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
  _oldOnErrorHandler = instrument_WINDOW.onerror;

  instrument_WINDOW.onerror = function (msg, url, line, column, error) {
    triggerHandlers('error', {
      column,
      error,
      line,
      msg,
      url,
    });

    if (_oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnErrorHandler.apply(this, arguments);
    }

    return false;
  };

  instrument_WINDOW.onerror.__SENTRY_INSTRUMENTED__ = true;
}

let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = instrument_WINDOW.onunhandledrejection;

  instrument_WINDOW.onunhandledrejection = function (e) {
    triggerHandlers('unhandledrejection', e);

    if (_oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }

    return true;
  };

  instrument_WINDOW.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/errors.js



let errorsInstrumented = false;

/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }

  errorsInstrumented = true;
  addInstrumentationHandler('error', errorCallback);
  addInstrumentationHandler('unhandledrejection', errorCallback);
}

/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
  const activeTransaction = getActiveTransaction();
  if (activeTransaction) {
    const status = 'internal_error';
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
    activeTransaction.setStatus(status);
  }
}

// The function name will be lost when bundling but we need to be able to identify this listener later to maintain the
// node.js default exit behaviour
errorCallback.tag = 'sentry_tracingErrorCallback';



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/transaction.js





/** JSDoc */
class Transaction extends Span  {

  /**
   * The reference to the current hub.
   */

  /**
   * This constructor should never be called manually. Those instrumenting tracing should use
   * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
   * @internal
   * @hideconstructor
   * @hidden
   */
   constructor(transactionContext, hub) {
    super(transactionContext);
    // We need to delete description since it's set by the Span class constructor
    // but not needed for transactions.
    delete this.description;

    this._measurements = {};
    this._contexts = {};

    this._hub = hub || (0,esm_hub.getCurrentHub)();

    this._name = transactionContext.name || '';

    this.metadata = {
      source: 'custom',
      ...transactionContext.metadata,
      spanMetadata: {},
    };

    this._trimEnd = transactionContext.trimEnd;

    // this is because transactions are also spans, and spans have a transaction pointer
    this.transaction = this;

    // If Dynamic Sampling Context is provided during the creation of the transaction, we freeze it as it usually means
    // there is incoming Dynamic Sampling Context. (Either through an incoming request, a baggage meta-tag, or other means)
    const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
    if (incomingDynamicSamplingContext) {
      // We shallow copy this in case anything writes to the original reference of the passed in `dynamicSamplingContext`
      this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
    }
  }

  /** Getter for `name` property */
   get name() {
    return this._name;
  }

  /** Setter for `name` property, which also sets `source` as custom */
   set name(newName) {
    this.setName(newName);
  }

  /**
   * JSDoc
   */
   setName(name, source = 'custom') {
    this._name = name;
    this.metadata.source = source;
  }

  /**
   * Attaches SpanRecorder to the span itself
   * @param maxlen maximum number of spans that can be recorded
   */
   initSpanRecorder(maxlen = 1000) {
    if (!this.spanRecorder) {
      this.spanRecorder = new SpanRecorder(maxlen);
    }
    this.spanRecorder.add(this);
  }

  /**
   * @inheritDoc
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
  }

  /**
   * @inheritDoc
   */
   setMeasurement(name, value, unit = '') {
    this._measurements[name] = { value, unit };
  }

  /**
   * @inheritDoc
   */
   setMetadata(newMetadata) {
    this.metadata = { ...this.metadata, ...newMetadata };
  }

  /**
   * @inheritDoc
   */
   finish(endTimestamp) {
    const transaction = this._finishTransaction(endTimestamp);
    if (!transaction) {
      return undefined;
    }
    return this._hub.captureEvent(transaction);
  }

  /**
   * @inheritDoc
   */
   toContext() {
    const spanContext = super.toContext();

    return (0,object.dropUndefinedKeys)({
      ...spanContext,
      name: this.name,
      trimEnd: this._trimEnd,
    });
  }

  /**
   * @inheritDoc
   */
   updateWithContext(transactionContext) {
    super.updateWithContext(transactionContext);

    this.name = transactionContext.name || '';

    this._trimEnd = transactionContext.trimEnd;

    return this;
  }

  /**
   * @inheritdoc
   *
   * @experimental
   */
   getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext) {
      return this._frozenDynamicSamplingContext;
    }

    const hub = this._hub || (0,esm_hub.getCurrentHub)();
    const client = hub.getClient();

    if (!client) return {};

    const scope = hub.getScope();
    const dsc = (0,tracing_dynamicSamplingContext.getDynamicSamplingContextFromClient)(this.traceId, client, scope);

    const maybeSampleRate = this.metadata.sampleRate;
    if (maybeSampleRate !== undefined) {
      dsc.sample_rate = `${maybeSampleRate}`;
    }

    // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
    const source = this.metadata.source;
    if (source && source !== 'url') {
      dsc.transaction = this.name;
    }

    if (this.sampled !== undefined) {
      dsc.sampled = String(this.sampled);
    }

    // Uncomment if we want to make DSC immutable
    // this._frozenDynamicSamplingContext = dsc;

    return dsc;
  }

  /**
   * Override the current hub with a new one.
   * Used if you want another hub to finish the transaction.
   *
   * @internal
   */
   setHub(hub) {
    this._hub = hub;
  }

  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
   _finishTransaction(endTimestamp) {
    // This transaction is already finished, so we should not flush it again.
    if (this.endTimestamp !== undefined) {
      return undefined;
    }

    if (!this.name) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
      this.name = '<unlabeled transaction>';
    }

    // just sets the end timestamp
    super.finish(endTimestamp);

    const client = this._hub.getClient();
    if (client && client.emit) {
      client.emit('finishTransaction', this);
    }

    if (this.sampled !== true) {
      // At this point if `sampled !== true` we want to discard the transaction.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');

      if (client) {
        client.recordDroppedEvent('sample_rate', 'transaction');
      }

      return undefined;
    }

    const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(s => s !== this && s.endTimestamp) : [];

    if (this._trimEnd && finishedSpans.length > 0) {
      this.endTimestamp = finishedSpans.reduce((prev, current) => {
        if (prev.endTimestamp && current.endTimestamp) {
          return prev.endTimestamp > current.endTimestamp ? prev : current;
        }
        return prev;
      }).endTimestamp;
    }

    const metadata = this.metadata;

    const transaction = {
      contexts: {
        ...this._contexts,
        // We don't want to override trace context
        trace: this.getTraceContext(),
      },
      spans: finishedSpans,
      start_timestamp: this.startTimestamp,
      tags: this.tags,
      timestamp: this.endTimestamp,
      transaction: this.name,
      type: 'transaction',
      sdkProcessingMetadata: {
        ...metadata,
        dynamicSamplingContext: this.getDynamicSamplingContext(),
      },
      ...(metadata.source && {
        transaction_info: {
          source: metadata.source,
        },
      }),
    };

    const hasMeasurements = Object.keys(this._measurements).length > 0;

    if (hasMeasurements) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.logger.log(
          '[Measurements] Adding measurements to transaction',
          JSON.stringify(this._measurements, undefined, 2),
        );
      transaction.measurements = this._measurements;
    }

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);

    return transaction;
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/idletransaction.js




const TRACING_DEFAULTS = {
  idleTimeout: 1000,
  finalTimeout: 30000,
  heartbeatInterval: 5000,
};

const FINISH_REASON_TAG = 'finishReason';

const IDLE_TRANSACTION_FINISH_REASONS = [
  'heartbeatFailed',
  'idleTimeout',
  'documentHidden',
  'finalTimeout',
  'externalFinish',
  'cancelled',
];

/**
 * @inheritDoc
 */
class IdleTransactionSpanRecorder extends SpanRecorder {
   constructor(
      _pushActivity,
      _popActivity,
     transactionSpanId,
    maxlen,
  ) {
    super(maxlen);this._pushActivity = _pushActivity;this._popActivity = _popActivity;this.transactionSpanId = transactionSpanId;  }

  /**
   * @inheritDoc
   */
   add(span) {
    // We should make sure we do not push and pop activities for
    // the transaction that this span recorder belongs to.
    if (span.spanId !== this.transactionSpanId) {
      // We patch span.finish() to pop an activity after setting an endTimestamp.
      span.finish = (endTimestamp) => {
        span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : (0,time.timestampInSeconds)();
        this._popActivity(span.spanId);
      };

      // We should only push new activities if the span does not have an end timestamp.
      if (span.endTimestamp === undefined) {
        this._pushActivity(span.spanId);
      }
    }

    super.add(span);
  }
}

/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
class IdleTransaction extends Transaction {
  // Activities store a list of active spans

  // Track state of activities in previous heartbeat

  // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.

  // We should not use heartbeat if we finished a transaction

  // Idle timeout was canceled and we should finish the transaction with the last span end.

  /**
   * Timer that tracks Transaction idleTimeout
   */

   constructor(
    transactionContext,
      _idleHub,
    /**
     * The time to wait in ms until the idle transaction will be finished. This timer is started each time
     * there are no active spans on this transaction.
     */
      _idleTimeout = TRACING_DEFAULTS.idleTimeout,
    /**
     * The final value in ms that a transaction cannot exceed
     */
      _finalTimeout = TRACING_DEFAULTS.finalTimeout,
      _heartbeatInterval = TRACING_DEFAULTS.heartbeatInterval,
    // Whether or not the transaction should put itself on the scope when it starts and pop itself off when it ends
      _onScope = false,
  ) {
    super(transactionContext, _idleHub);this._idleHub = _idleHub;this._idleTimeout = _idleTimeout;this._finalTimeout = _finalTimeout;this._heartbeatInterval = _heartbeatInterval;this._onScope = _onScope;
    this.activities = {};
    this._heartbeatCounter = 0;
    this._finished = false;
    this._idleTimeoutCanceledPermanently = false;
    this._beforeFinishCallbacks = [];
    this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[4];

    if (_onScope) {
      // We set the transaction here on the scope so error events pick up the trace
      // context and attach it to the error.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
      _idleHub.configureScope(scope => scope.setSpan(this));
    }

    this._restartIdleTimeout();
    setTimeout(() => {
      if (!this._finished) {
        this.setStatus('deadline_exceeded');
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[3];
        this.finish();
      }
    }, this._finalTimeout);
  }

  /** {@inheritDoc} */
   finish(endTimestamp = (0,time.timestampInSeconds)()) {
    this._finished = true;
    this.activities = {};

    if (this.op === 'ui.action.click') {
      this.setTag(FINISH_REASON_TAG, this._finishReason);
    }

    if (this.spanRecorder) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.logger.log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);

      for (const callback of this._beforeFinishCallbacks) {
        callback(this, endTimestamp);
      }

      this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
        // If we are dealing with the transaction itself, we just return it
        if (span.spanId === this.spanId) {
          return true;
        }

        // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
        if (!span.endTimestamp) {
          span.endTimestamp = endTimestamp;
          span.setStatus('cancelled');
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
            logger.logger.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
        }

        const spanStartedBeforeTransactionFinish = span.startTimestamp < endTimestamp;

        // Add a delta with idle timeout so that we prevent false positives
        const timeoutWithMarginOfError = (this._finalTimeout + this._idleTimeout) / 1000;
        const spanEndedBeforeFinalTimeout = span.endTimestamp - this.startTimestamp < timeoutWithMarginOfError;

        if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
          const stringifiedSpan = JSON.stringify(span, undefined, 2);
          if (!spanStartedBeforeTransactionFinish) {
            logger.logger.log('[Tracing] discarding Span since it happened after Transaction was finished', stringifiedSpan);
          } else if (!spanEndedBeforeFinalTimeout) {
            logger.logger.log('[Tracing] discarding Span since it finished after Transaction final timeout', stringifiedSpan);
          }
        }

        return spanStartedBeforeTransactionFinish && spanEndedBeforeFinalTimeout;
      });

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] flushing IdleTransaction');
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] No active IdleTransaction');
    }

    // if `this._onScope` is `true`, the transaction put itself on the scope when it started
    if (this._onScope) {
      const scope = this._idleHub.getScope();
      if (scope.getTransaction() === this) {
        scope.setSpan(undefined);
      }
    }

    return super.finish(endTimestamp);
  }

  /**
   * Register a callback function that gets excecuted before the transaction finishes.
   * Useful for cleanup or if you want to add any additional spans based on current context.
   *
   * This is exposed because users have no other way of running something before an idle transaction
   * finishes.
   */
   registerBeforeFinishCallback(callback) {
    this._beforeFinishCallbacks.push(callback);
  }

  /**
   * @inheritDoc
   */
   initSpanRecorder(maxlen) {
    if (!this.spanRecorder) {
      const pushActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._pushActivity(id);
      };
      const popActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._popActivity(id);
      };

      this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);

      // Start heartbeat so that transactions do not run forever.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Starting heartbeat');
      this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }

  /**
   * Cancels the existing idle timeout, if there is one.
   * @param restartOnChildSpanChange Default is `true`.
   *                                 If set to false the transaction will end
   *                                 with the last child span.
   */
   cancelIdleTimeout(
    endTimestamp,
    {
      restartOnChildSpanChange,
    }

 = {
      restartOnChildSpanChange: true,
    },
  ) {
    this._idleTimeoutCanceledPermanently = restartOnChildSpanChange === false;
    if (this._idleTimeoutID) {
      clearTimeout(this._idleTimeoutID);
      this._idleTimeoutID = undefined;

      if (Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      }
    }
  }

  /**
   * Temporary method used to externally set the transaction's `finishReason`
   *
   * ** WARNING**
   * This is for the purpose of experimentation only and will be removed in the near future, do not use!
   *
   * @internal
   *
   */
   setFinishReason(reason) {
    this._finishReason = reason;
  }

  /**
   * Restarts idle timeout, if there is no running idle timeout it will start one.
   */
   _restartIdleTimeout(endTimestamp) {
    this.cancelIdleTimeout();
    this._idleTimeoutID = setTimeout(() => {
      if (!this._finished && Object.keys(this.activities).length === 0) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[1];
        this.finish(endTimestamp);
      }
    }, this._idleTimeout);
  }

  /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */
   _pushActivity(spanId) {
    this.cancelIdleTimeout(undefined, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently });
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`[Tracing] pushActivity: ${spanId}`);
    this.activities[spanId] = true;
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
  }

  /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */
   _popActivity(spanId) {
    if (this.activities[spanId]) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`[Tracing] popActivity ${spanId}`);
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.activities[spanId];
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] new activities count', Object.keys(this.activities).length);
    }

    if (Object.keys(this.activities).length === 0) {
      const endTimestamp = (0,time.timestampInSeconds)();
      if (this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      } else {
        // We need to add the timeout here to have the real endtimestamp of the transaction
        // Remember timestampInSeconds is in seconds, timeout is in ms
        this._restartIdleTimeout(endTimestamp + this._idleTimeout / 1000);
      }
    }
  }

  /**
   * Checks when entries of this.activities are not changing for 3 beats.
   * If this occurs we finish the transaction.
   */
   _beat() {
    // We should not be running heartbeat if the idle transaction is finished.
    if (this._finished) {
      return;
    }

    const heartbeatString = Object.keys(this.activities).join('');

    if (heartbeatString === this._prevHeartbeatString) {
      this._heartbeatCounter++;
    } else {
      this._heartbeatCounter = 1;
    }

    this._prevHeartbeatString = heartbeatString;

    if (this._heartbeatCounter >= 3) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('[Tracing] Transaction finished because of no change for 3 heart beats');
      this.setStatus('deadline_exceeded');
      this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[0];
      this.finish();
    } else {
      this._pingHeartbeat();
    }
  }

  /**
   * Pings the heartbeat
   */
   _pingHeartbeat() {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
    setTimeout(() => {
      this._beat();
    }, this._heartbeatInterval);
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/sampling.js



/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * This method muttes the given `transaction` and will set the `sampled` value on it.
 * It returns the same transaction, for convenience.
 */
function sampleTransaction(
  transaction,
  options,
  samplingContext,
) {
  // nothing to do if tracing is not enabled
  if (!hasTracingEnabled(options)) {
    transaction.sampled = false;
    return transaction;
  }

  // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
  if (transaction.sampled !== undefined) {
    transaction.setMetadata({
      sampleRate: Number(transaction.sampled),
    });
    return transaction;
  }

  // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` nor `enableTracing` were defined, so one of these should
  // work; prefer the hook if so
  let sampleRate;
  if (typeof options.tracesSampler === 'function') {
    sampleRate = options.tracesSampler(samplingContext);
    transaction.setMetadata({
      sampleRate: Number(sampleRate),
    });
  } else if (samplingContext.parentSampled !== undefined) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== 'undefined') {
    sampleRate = options.tracesSampleRate;
    transaction.setMetadata({
      sampleRate: Number(sampleRate),
    });
  } else {
    // When `enableTracing === true`, we use a sample rate of 100%
    sampleRate = 1;
    transaction.setMetadata({
      sampleRate,
    });
  }

  // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
  // only valid values are booleans or numbers between 0 and 1.)
  if (!isValidSampleRate(sampleRate)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('[Tracing] Discarding transaction because of invalid sample rate.');
    transaction.sampled = false;
    return transaction;
  }

  // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
  if (!sampleRate) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.log(
        `[Tracing] Discarding transaction because ${
          typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
        }`,
      );
    transaction.sampled = false;
    return transaction;
  }

  // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
  // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
  transaction.sampled = Math.random() < (sampleRate );

  // if we're not going to keep it, we're done
  if (!transaction.sampled) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.log(
        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate,
        )})`,
      );
    return transaction;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
  return transaction;
}

/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
  // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((0,is.isNaN)(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate,
        )} of type ${JSON.stringify(typeof rate)}.`,
      );
    return false;
  }

  // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
  if (rate < 0 || rate > 1) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/tracing/hubextensions.js







/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
  const scope = this.getScope();
  const span = scope.getSpan();

  return span
    ? {
        'sentry-trace': span.toTraceparent(),
      }
    : {};
}

/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */
function _startTransaction(

  transactionContext,
  customSamplingContext,
) {
  const client = this.getClient();
  const options = (client && client.getOptions()) || {};

  const configInstrumenter = options.instrumenter || 'sentry';
  const transactionInstrumenter = transactionContext.instrumenter || 'sentry';

  if (configInstrumenter !== transactionInstrumenter) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      logger.logger.error(
        `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`,
      );

    transactionContext.sampled = false;
  }

  let transaction = new Transaction(transactionContext, this);
  transaction = sampleTransaction(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext,
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
  }
  if (client && client.emit) {
    client.emit('startTransaction', transaction);
  }
  return transaction;
}

/**
 * Create new idle transaction.
 */
function startIdleTransaction(
  hub,
  transactionContext,
  idleTimeout,
  finalTimeout,
  onScope,
  customSamplingContext,
  heartbeatInterval,
) {
  const client = hub.getClient();
  const options = (client && client.getOptions()) || {};

  let transaction = new IdleTransaction(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
  transaction = sampleTransaction(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext,
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && (options._experiments.maxSpans ));
  }
  if (client && client.emit) {
    client.emit('startTransaction', transaction);
  }
  return transaction;
}

/**
 * Adds tracing extensions to the global hub.
 */
function addTracingExtensions() {
  const carrier = (0,esm_hub.getMainCarrier)();
  if (!carrier.__SENTRY__) {
    return;
  }
  carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
  if (!carrier.__SENTRY__.extensions.startTransaction) {
    carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
  }
  if (!carrier.__SENTRY__.extensions.traceHeaders) {
    carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
  }

  registerErrorInstrumentation();
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/server-runtime-client.js









/**
 * The Sentry Server Runtime Client SDK.
 */
class ServerRuntimeClient

 extends BaseClient {

  /**
   * Creates a new Edge SDK instance.
   * @param options Configuration options for this SDK.
   */
   constructor(options) {
    // Server clients always support tracing
    addTracingExtensions();

    super(options);
  }

  /**
   * @inheritDoc
   */
   eventFromException(exception, hint) {
    return (0,syncpromise.resolvedSyncPromise)(eventFromUnknownInput(esm_hub.getCurrentHub, this._options.stackParser, exception, hint));
  }

  /**
   * @inheritDoc
   */
   eventFromMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level = 'info',
    hint,
  ) {
    return (0,syncpromise.resolvedSyncPromise)(
      eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace),
    );
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
   captureException(exception, hint, scope) {
    // Check if the flag `autoSessionTracking` is enabled, and if `_sessionFlusher` exists because it is initialised only
    // when the `requestHandler` middleware is used, and hence the expectation is to have SessionAggregates payload
    // sent to the Server only when the `requestHandler` middleware is used
    if (this._options.autoSessionTracking && this._sessionFlusher && scope) {
      const requestSession = scope.getRequestSession();

      // Necessary checks to ensure this is code block is executed only within a request
      // Should override the status only if `requestSession.status` is `Ok`, which is its initial stage
      if (requestSession && requestSession.status === 'ok') {
        requestSession.status = 'errored';
      }
    }

    return super.captureException(exception, hint, scope);
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint, scope) {
    // Check if the flag `autoSessionTracking` is enabled, and if `_sessionFlusher` exists because it is initialised only
    // when the `requestHandler` middleware is used, and hence the expectation is to have SessionAggregates payload
    // sent to the Server only when the `requestHandler` middleware is used
    if (this._options.autoSessionTracking && this._sessionFlusher && scope) {
      const eventType = event.type || 'exception';
      const isException =
        eventType === 'exception' && event.exception && event.exception.values && event.exception.values.length > 0;

      // If the event is of type Exception, then a request session should be captured
      if (isException) {
        const requestSession = scope.getRequestSession();

        // Ensure that this is happening within the bounds of a request, and make sure not to override
        // Session Status if Errored / Crashed
        if (requestSession && requestSession.status === 'ok') {
          requestSession.status = 'errored';
        }
      }
    }

    return super.captureEvent(event, hint, scope);
  }

  /**
   *
   * @inheritdoc
   */
   close(timeout) {
    if (this._sessionFlusher) {
      this._sessionFlusher.close();
    }
    return super.close(timeout);
  }

  /** Method that initialises an instance of SessionFlusher on Client */
   initSessionFlusher() {
    const { release, environment } = this._options;
    if (!release) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Cannot initialise an instance of SessionFlusher if no release is provided!');
    } else {
      this._sessionFlusher = new SessionFlusher(this, {
        release,
        environment,
      });
    }
  }

  /**
   * Create a cron monitor check in and send it to Sentry.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   */
   captureCheckIn(checkIn, monitorConfig, scope) {
    const id = checkIn.status !== 'in_progress' && checkIn.checkInId ? checkIn.checkInId : (0,misc.uuid4)();
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('SDK not enabled, will not capture checkin.');
      return id;
    }

    const options = this.getOptions();
    const { release, environment, tunnel } = options;

    const serializedCheckIn = {
      check_in_id: id,
      monitor_slug: checkIn.monitorSlug,
      status: checkIn.status,
      release,
      environment,
    };

    if (checkIn.status !== 'in_progress') {
      serializedCheckIn.duration = checkIn.duration;
    }

    if (monitorConfig) {
      serializedCheckIn.monitor_config = {
        schedule: monitorConfig.schedule,
        checkin_margin: monitorConfig.checkinMargin,
        max_runtime: monitorConfig.maxRuntime,
        timezone: monitorConfig.timezone,
      };
    }

    const [dynamicSamplingContext, traceContext] = this._getTraceInfoFromScope(scope);
    if (traceContext) {
      serializedCheckIn.contexts = {
        trace: traceContext,
      };
    }

    const envelope = createCheckInEnvelope(
      serializedCheckIn,
      dynamicSamplingContext,
      this.getSdkMetadata(),
      tunnel,
      this.getDsn(),
    );

    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.info('Sending checkin:', checkIn.monitorSlug, checkIn.status);
    void this._sendEnvelope(envelope);
    return id;
  }

  /**
   * Method responsible for capturing/ending a request session by calling `incrementSessionStatusCount` to increment
   * appropriate session aggregates bucket
   */
   _captureRequestSession() {
    if (!this._sessionFlusher) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('Discarded request mode session because autoSessionTracking option was disabled');
    } else {
      this._sessionFlusher.incrementSessionStatusCount();
    }
  }

  /**
   * @inheritDoc
   */
   _prepareEvent(event, hint, scope) {
    if (this._options.platform) {
      event.platform = event.platform || this._options.platform;
    }

    if (this._options.runtime) {
      event.contexts = {
        ...event.contexts,
        runtime: (event.contexts || {}).runtime || this._options.runtime,
      };
    }

    if (this._options.serverName) {
      event.server_name = event.server_name || this._options.serverName;
    }

    return super._prepareEvent(event, hint, scope);
  }

  /** Extract trace information from scope */
   _getTraceInfoFromScope(
    scope,
  ) {
    if (!scope) {
      return [undefined, undefined];
    }

    const span = scope.getSpan();
    if (span) {
      const samplingContext = span.transaction ? span.transaction.getDynamicSamplingContext() : undefined;
      return [samplingContext, span.getTraceContext()];
    }

    const { traceId, spanId, parentSpanId, dsc } = scope.getPropagationContext();
    const traceContext = {
      trace_id: traceId,
      span_id: spanId,
      parent_span_id: parentSpanId,
    };
    if (dsc) {
      return [dsc, traceContext];
    }

    return [(0,tracing_dynamicSamplingContext.getDynamicSamplingContextFromClient)(traceId, this, scope), traceContext];
  }
}



// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(71);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(25);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/client.js




/**
 * The Sentry Node SDK Client.
 *
 * @see NodeClientOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
class NodeClient extends ServerRuntimeClient {
  /**
   * Creates a new Node SDK instance.
   * @param options Configuration options for this SDK.
   */
   constructor(options) {
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
      name: 'sentry.javascript.node',
      packages: [
        {
          name: 'npm:@sentry/node',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    };

    // Until node supports global TextEncoder in all versions we support, we are forced to pass it from util
    options.transportOptions = {
      textEncoder: new external_util_.TextEncoder(),
      ...options.transportOptions,
    };

    const clientOptions = {
      ...options,
      platform: 'node',
      runtime: { name: 'node', version: global.process.version },
      serverName: options.serverName || global.process.env.SENTRY_NAME || external_os_.hostname(),
    };

    super(clientOptions);
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js
// https://github.com/alangpierce/sucrase/tree/265887868966917f3b924ce38dfad01fbab1329f
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2018 various contributors (see AUTHORS)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * Polyfill for the nullish coalescing operator (`??`).
 *
 * Note that the RHS is wrapped in a function so that if it's a computed value, that evaluation won't happen unless the
 * LHS evaluates to a nullish value, to mimic the operator's short-circuiting behavior.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param lhs The value of the expression to the left of the `??`
 * @param rhsFn A function returning the value of the expression to the right of the `??`
 * @returns The LHS value, unless it's `null` or `undefined`, in which case, the RHS value
 */
function _nullishCoalesce(lhs, rhsFn) {
  // by checking for loose equality to `null`, we catch both `null` and `undefined`
  return lhs != null ? lhs : rhsFn();
}

// Sucrase version:
// function _nullishCoalesce(lhs, rhsFn) {
//   if (lhs != null) {
//     return lhs;
//   } else {
//     return rhsFn();
//   }
// }



// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(73);
// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(74);
// EXTERNAL MODULE: ../../node_modules/.pnpm/https-proxy-agent@5.0.1/node_modules/https-proxy-agent/dist/index.js
var dist = __webpack_require__(75);
;// CONCATENATED MODULE: external "stream"
const external_stream_namespaceObject = require("stream");
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "zlib"
const external_zlib_namespaceObject = require("zlib");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/transports/http.js









// Estimated maximum size for reasonable standalone event
const GZIP_THRESHOLD = 1024 * 32;

/**
 * Gets a stream from a Uint8Array or string
 * Readable.from is ideal but was added in node.js v12.3.0 and v10.17.0
 */
function streamFromBody(body) {
  return new external_stream_namespaceObject.Readable({
    read() {
      this.push(body);
      this.push(null);
    },
  });
}

/**
 * Creates a Transport that uses native the native 'http' and 'https' modules to send events to Sentry.
 */
function makeNodeTransport(options) {
  let urlSegments;

  try {
    urlSegments = new external_url_.URL(options.url);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.',
    );
    return createTransport(options, () => Promise.resolve({}));
  }

  const isHttps = urlSegments.protocol === 'https:';

  // Proxy prioritization: http => `options.proxy` | `process.env.http_proxy`
  // Proxy prioritization: https => `options.proxy` | `process.env.https_proxy` | `process.env.http_proxy`
  const proxy = applyNoProxyOption(
    urlSegments,
    options.proxy || (isHttps ? process.env.https_proxy : undefined) || process.env.http_proxy,
  );

  const nativeHttpModule = isHttps ? external_https_ : external_http_;
  const keepAlive = options.keepAlive === undefined ? false : options.keepAlive;

  // TODO(v7): Evaluate if we can set keepAlive to true. This would involve testing for memory leaks in older node
  // versions(>= 8) as they had memory leaks when using it: #2555
  const agent = proxy
    ? (new dist.HttpsProxyAgent(proxy) )
    : new nativeHttpModule.Agent({ keepAlive, maxSockets: 30, timeout: 2000 });

  const requestExecutor = createRequestExecutor(options, _nullishCoalesce(options.httpModule, () => ( nativeHttpModule)), agent);
  return createTransport(options, requestExecutor);
}

/**
 * Honors the `no_proxy` env variable with the highest priority to allow for hosts exclusion.
 *
 * @param transportUrl The URL the transport intends to send events to.
 * @param proxy The client configured proxy.
 * @returns A proxy the transport should use.
 */
function applyNoProxyOption(transportUrlSegments, proxy) {
  const { no_proxy } = process.env;

  const urlIsExemptFromProxy =
    no_proxy &&
    no_proxy
      .split(',')
      .some(
        exemption => transportUrlSegments.host.endsWith(exemption) || transportUrlSegments.hostname.endsWith(exemption),
      );

  if (urlIsExemptFromProxy) {
    return undefined;
  } else {
    return proxy;
  }
}

/**
 * Creates a RequestExecutor to be used with `createTransport`.
 */
function createRequestExecutor(
  options,
  httpModule,
  agent,
) {
  const { hostname, pathname, port, protocol, search } = new external_url_.URL(options.url);
  return function makeRequest(request) {
    return new Promise((resolve, reject) => {
      let body = streamFromBody(request.body);

      const headers = { ...options.headers };

      if (request.body.length > GZIP_THRESHOLD) {
        headers['content-encoding'] = 'gzip';
        body = body.pipe((0,external_zlib_namespaceObject.createGzip)());
      }

      const req = httpModule.request(
        {
          method: 'POST',
          agent,
          headers,
          hostname,
          path: `${pathname}${search}`,
          port,
          protocol,
          ca: options.caCerts,
        },
        res => {
          res.on('data', () => {
            // Drain socket
          });

          res.on('end', () => {
            // Drain socket
          });

          res.setEncoding('utf8');

          // "Key-value pairs of header names and values. Header names are lower-cased."
          // https://nodejs.org/api/http.html#http_message_headers
          const retryAfterHeader = _nullishCoalesce(res.headers['retry-after'], () => ( null));
          const rateLimitsHeader = _nullishCoalesce(res.headers['x-sentry-rate-limits'], () => ( null));

          resolve({
            statusCode: res.statusCode,
            headers: {
              'retry-after': retryAfterHeader,
              'x-sentry-rate-limits': Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] : rateLimitsHeader,
            },
          });
        },
      );

      req.on('error', reject);
      body.pipe(req);
    });
  };
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js
var _optionalChain = __webpack_require__(91);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/sdk.js



/** A class object that can instantiate Client objects. */

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(
  clientClass,
  options,
) {
  if (options.debug === true) {
    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
      logger.logger.enable();
    } else {
      // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
      // eslint-disable-next-line no-console
      console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
    }
  }
  const hub = (0,esm_hub.getCurrentHub)();
  const scope = hub.getScope();
  scope.update(options.initialScope);

  const client = new clientClass(options);
  hub.bindClient(client);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/anr.js




/**
 * A node.js watchdog timer
 * @param pollInterval The interval that we expect to get polled at
 * @param anrThreshold The threshold for when we consider ANR
 * @param callback The callback to call for ANR
 * @returns An object with `poll` and `enabled` functions {@link WatchdogReturn}
 */
function watchdogTimer(
  createTimer,
  pollInterval,
  anrThreshold,
  callback,
) {
  const timer = createTimer();
  let triggered = false;
  let enabled = true;

  setInterval(() => {
    const diffMs = timer.getTimeMs();

    if (triggered === false && diffMs > pollInterval + anrThreshold) {
      triggered = true;
      if (enabled) {
        callback();
      }
    }

    if (diffMs < pollInterval + anrThreshold) {
      triggered = false;
    }
  }, 20);

  return {
    poll: () => {
      timer.reset();
    },
    enabled: (state) => {
      enabled = state;
    },
  };
}

// types copied from inspector.d.ts

/**
 * Converts Debugger.CallFrame to Sentry StackFrame
 */
function callFrameToStackFrame(
  frame,
  url,
  getModuleFromFilename,
) {
  const filename = url ? url.replace(/^file:\/\//, '') : undefined;

  // CallFrame row/col are 0 based, whereas StackFrame are 1 based
  const colno = frame.location.columnNumber ? frame.location.columnNumber + 1 : undefined;
  const lineno = frame.location.lineNumber ? frame.location.lineNumber + 1 : undefined;

  return (0,object.dropUndefinedKeys)({
    filename,
    module: getModuleFromFilename(filename),
    function: frame.functionName || '?',
    colno,
    lineno,
    in_app: filename ? filenameIsInApp(filename) : undefined,
  });
}

// The only messages we care about

/**
 * Creates a message handler from the v8 debugger protocol and passed stack frames to the callback when paused.
 */
function createDebugPauseMessageHandler(
  sendCommand,
  getModuleFromFilename,
  pausedStackFrames,
) {
  // Collect scriptId -> url map so we can look up the filenames later
  const scripts = new Map();

  return message => {
    if (message.method === 'Debugger.scriptParsed') {
      scripts.set(message.params.scriptId, message.params.url);
    } else if (message.method === 'Debugger.paused') {
      // copy the frames
      const callFrames = [...message.params.callFrames];
      // and resume immediately
      sendCommand('Debugger.resume');
      sendCommand('Debugger.disable');

      const stackFrames = stripSentryFramesAndReverse(
        callFrames.map(frame =>
          callFrameToStackFrame(frame, scripts.get(frame.location.scriptId), getModuleFromFilename),
        ),
      );

      pausedStackFrames(stackFrames);
    }
  };
}



;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(19);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/module.js


const isWindowsPlatform = external_path_.sep === '\\';

/** normalizes Windows paths */
function normalizeWindowsPath(path) {
  return path
    .replace(/^[A-Z]:/, '') // remove Windows-style prefix
    .replace(/\\/g, '/'); // replace all `\` instances with `/`
}

/** Gets the module from a filename */
function getModuleFromFilename(
  filename,
  normalizeWindowsPathSeparator = isWindowsPlatform,
) {
  if (!filename) {
    return;
  }

  const normalizedFilename = normalizeWindowsPathSeparator ? normalizeWindowsPath(filename) : filename;

  // eslint-disable-next-line prefer-const
  let { root, dir, base: basename, ext } = external_path_.posix.parse(normalizedFilename);

  const base = ( true && __webpack_require__.c[__webpack_require__.s] && __webpack_require__.c[__webpack_require__.s].filename && dir) || global.process.cwd();

  const normalizedBase = `${base}/`;

  // It's specifically a module
  let file = basename;

  if (ext === '.js' || ext === '.mjs' || ext === '.cjs') {
    file = file.slice(0, ext.length * -1);
  }

  if (!root && !dir) {
    // No dirname whatsoever
    dir = '.';
  }

  let n = dir.lastIndexOf('/node_modules/');
  if (n > -1) {
    // /node_modules/ is 14 chars
    return `${dir.slice(n + 14).replace(/\//g, '.')}:${file}`;
  }
  // Let's see if it's a part of the main module
  // To be a part of main module, it has to share the same base
  n = `${dir}/`.lastIndexOf(normalizedBase, 0);

  if (n === 0) {
    let moduleName = dir.slice(normalizedBase.length).replace(/\//g, '.');
    if (moduleName) {
      moduleName += ':';
    }
    moduleName += file;
    return moduleName;
  }
  return file;
}



// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(97);
// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(27);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/anr/websocket.js





/* eslint-disable no-bitwise */

const OPCODES = {
  CONTINUATION: 0,
  TEXT: 1,
  BINARY: 2,
  TERMINATE: 8,
  PING: 9,
  PONG: 10,
};

const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

function isCompleteFrame(frame) {
  return Buffer.byteLength(frame.payload) >= frame.payloadLength;
}

function unmaskPayload(payload, mask, offset) {
  if (mask === undefined) {
    return payload;
  }

  for (let i = 0; i < payload.length; i++) {
    payload[i] ^= mask[(offset + i) & 3];
  }

  return payload;
}

function buildFrame(opts) {
  const { opcode, fin, data } = opts;

  let offset = 6;
  let dataLength = data.length;

  if (dataLength >= 65536) {
    offset += 8;
    dataLength = 127;
  } else if (dataLength > 125) {
    offset += 2;
    dataLength = 126;
  }

  const head = Buffer.allocUnsafe(offset);

  head[0] = fin ? opcode | 128 : opcode;
  head[1] = dataLength;

  if (dataLength === 126) {
    head.writeUInt16BE(data.length, 2);
  } else if (dataLength === 127) {
    head.writeUInt32BE(0, 2);
    head.writeUInt32BE(data.length, 6);
  }

  const mask = external_crypto_.randomBytes(4);
  head[1] |= 128;
  head[offset - 4] = mask[0];
  head[offset - 3] = mask[1];
  head[offset - 2] = mask[2];
  head[offset - 1] = mask[3];

  const masked = Buffer.alloc(dataLength);
  for (let i = 0; i < dataLength; ++i) {
    masked[i] = data[i] ^ mask[i & 3];
  }

  return Buffer.concat([head, masked]);
}

function parseFrame(buffer) {
  const firstByte = buffer.readUInt8(0);
  const isFinalFrame = Boolean((firstByte >>> 7) & 1);
  const opcode = firstByte & 15;

  const secondByte = buffer.readUInt8(1);
  const isMasked = Boolean((secondByte >>> 7) & 1);

  // Keep track of our current position as we advance through the buffer
  let currentOffset = 2;
  let payloadLength = secondByte & 127;
  if (payloadLength > 125) {
    if (payloadLength === 126) {
      payloadLength = buffer.readUInt16BE(currentOffset);
      currentOffset += 2;
    } else if (payloadLength === 127) {
      const leftPart = buffer.readUInt32BE(currentOffset);
      currentOffset += 4;

      // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned

      // if payload length is greater than this number.
      if (leftPart >= Number.MAX_SAFE_INTEGER) {
        throw new Error('Unsupported WebSocket frame: payload length > 2^53 - 1');
      }

      const rightPart = buffer.readUInt32BE(currentOffset);
      currentOffset += 4;

      payloadLength = leftPart * Math.pow(2, 32) + rightPart;
    } else {
      throw new Error('Unknown payload length');
    }
  }

  // Get the masking key if one exists
  let mask;
  if (isMasked) {
    mask = buffer.slice(currentOffset, currentOffset + 4);
    currentOffset += 4;
  }

  const payload = unmaskPayload(buffer.slice(currentOffset), mask, 0);

  return {
    fin: isFinalFrame,
    opcode,
    mask,
    payload,
    payloadLength,
  };
}

function createKey(key) {
  return external_crypto_.createHash('sha1').update(`${key}${GUID}`).digest('base64');
}

class WebSocketInterface extends external_events_.EventEmitter {

   constructor(socket) {
    super();
    // When a frame is set here then any additional continuation frames payloads will be appended
    this._unfinishedFrame = undefined;

    // When a frame is set here, all additional chunks will be appended until we reach the correct payloadLength
    this._incompleteFrame = undefined;

    this._socket = socket;
    this._alive = true;

    socket.on('data', buff => {
      this._addBuffer(buff);
    });

    socket.on('error', (err) => {
      if (err.code === 'ECONNRESET') {
        this.emit('close');
      } else {
        this.emit('error');
      }
    });

    socket.on('close', () => {
      this.end();
    });
  }

   end() {
    if (!this._alive) {
      return;
    }

    this._alive = false;
    this.emit('close');
    this._socket.end();
  }

   send(buff) {
    this._sendFrame({
      opcode: OPCODES.TEXT,
      fin: true,
      data: Buffer.from(buff),
    });
  }

   _sendFrame(frameOpts) {
    this._socket.write(buildFrame(frameOpts));
  }

   _completeFrame(frame) {
    // If we have an unfinished frame then only allow continuations
    const { _unfinishedFrame: unfinishedFrame } = this;
    if (unfinishedFrame !== undefined) {
      if (frame.opcode === OPCODES.CONTINUATION) {
        unfinishedFrame.payload = Buffer.concat([
          unfinishedFrame.payload,
          unmaskPayload(frame.payload, unfinishedFrame.mask, unfinishedFrame.payload.length),
        ]);

        if (frame.fin) {
          this._unfinishedFrame = undefined;
          this._completeFrame(unfinishedFrame);
        }
        return;
      } else {
        // Silently ignore the previous frame...
        this._unfinishedFrame = undefined;
      }
    }

    if (frame.fin) {
      if (frame.opcode === OPCODES.PING) {
        this._sendFrame({
          opcode: OPCODES.PONG,
          fin: true,
          data: frame.payload,
        });
      } else {
        // Trim off any excess payload
        let excess;
        if (frame.payload.length > frame.payloadLength) {
          excess = frame.payload.slice(frame.payloadLength);
          frame.payload = frame.payload.slice(0, frame.payloadLength);
        }

        this.emit('message', frame.payload);

        if (excess !== undefined) {
          this._addBuffer(excess);
        }
      }
    } else {
      this._unfinishedFrame = frame;
    }
  }

   _addBufferToIncompleteFrame(incompleteFrame, buff) {
    incompleteFrame.payload = Buffer.concat([
      incompleteFrame.payload,
      unmaskPayload(buff, incompleteFrame.mask, incompleteFrame.payload.length),
    ]);

    if (isCompleteFrame(incompleteFrame)) {
      this._incompleteFrame = undefined;
      this._completeFrame(incompleteFrame);
    }
  }

   _addBuffer(buff) {
    // Check if we're still waiting for the rest of a payload
    const { _incompleteFrame: incompleteFrame } = this;
    if (incompleteFrame !== undefined) {
      this._addBufferToIncompleteFrame(incompleteFrame, buff);
      return;
    }

    // There needs to be atleast two values in the buffer for us to parse
    // a frame from it.
    // See: https://github.com/getsentry/sentry-javascript/issues/9307
    if (buff.length <= 1) {
      return;
    }

    const frame = parseFrame(buff);

    if (isCompleteFrame(frame)) {
      // Frame has been completed!
      this._completeFrame(frame);
    } else {
      this._incompleteFrame = frame;
    }
  }
}

/**
 * Creates a WebSocket client
 */
async function createWebSocketClient(rawUrl) {
  const parts = external_url_.parse(rawUrl);

  return new Promise((resolve, reject) => {
    const key = external_crypto_.randomBytes(16).toString('base64');
    const digest = createKey(key);

    const req = external_http_.request({
      hostname: parts.hostname,
      port: parts.port,
      path: parts.path,
      method: 'GET',
      headers: {
        Connection: 'Upgrade',
        Upgrade: 'websocket',
        'Sec-WebSocket-Key': key,
        'Sec-WebSocket-Version': '13',
      },
    });

    req.on('response', (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        process.stderr.write(`Unexpected HTTP code: ${res.statusCode}\n`);
        res.pipe(process.stderr);
      } else {
        res.pipe(process.stderr);
      }
    });

    req.on('upgrade', (res, socket) => {
      if (res.headers['sec-websocket-accept'] !== digest) {
        socket.end();
        reject(new Error(`Digest mismatch ${digest} !== ${res.headers['sec-websocket-accept']}`));
        return;
      }

      const client = new WebSocketInterface(socket);
      resolve(client);
    });

    req.on('error', err => {
      reject(err);
    });

    req.end();
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/anr/debugger.js




// The only messages we care about

/**
 * Wraps a websocket connection with the basic logic of the Node debugger protocol.
 * @param url The URL to connect to
 * @param onMessage A callback that will be called with each return message from the debugger
 * @returns A function that can be used to send commands to the debugger
 */
async function webSocketDebugger(
  url,
  onMessage,
) {
  let id = 0;
  const webSocket = await createWebSocketClient(url);

  webSocket.on('message', (data) => {
    const message = JSON.parse(data.toString()) ;
    onMessage(message);
  });

  return (method) => {
    webSocket.send(JSON.stringify({ id: id++, method }));
  };
}

/**
 * Captures stack traces from the Node debugger.
 * @param url The URL to connect to
 * @param callback A callback that will be called with the stack frames
 * @returns A function that triggers the debugger to pause and capture a stack trace
 */
async function captureStackTrace(url, callback) {
  const sendCommand = await webSocketDebugger(
    url,
    createDebugPauseMessageHandler(cmd => sendCommand(cmd), getModuleFromFilename, callback),
  );

  return () => {
    sendCommand('Debugger.enable');
    sendCommand('Debugger.pause');
  };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/anr/index.js






const DEFAULT_INTERVAL = 50;
const DEFAULT_HANG_THRESHOLD = 5000;

function createAnrEvent(blockedMs, frames) {
  return {
    level: 'error',
    exception: {
      values: [
        {
          type: 'ApplicationNotResponding',
          value: `Application Not Responding for at least ${blockedMs} ms`,
          stacktrace: { frames },
          mechanism: {
            // This ensures the UI doesn't say 'Crashed in' for the stack trace
            type: 'ANR',
          },
        },
      ],
    },
  };
}

/**
 * Starts the node debugger and returns the inspector url.
 *
 * When inspector.url() returns undefined, it means the port is already in use so we try the next port.
 */
function startInspector(startPort = 9229) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const inspector = __webpack_require__(96);
  let inspectorUrl = undefined;
  let port = startPort;

  while (inspectorUrl === undefined && port < startPort + 100) {
    inspector.open(port);
    inspectorUrl = inspector.url();
    port++;
  }

  return inspectorUrl;
}

function startChildProcess(options) {
  function log(message, ...args) {
    logger.logger.log(`[ANR] ${message}`, ...args);
  }

  const hub = (0,esm_hub.getCurrentHub)();

  try {
    const env = { ...process.env };
    env.SENTRY_ANR_CHILD_PROCESS = 'true';

    if (options.captureStackTrace) {
      env.SENTRY_INSPECT_URL = startInspector();
    }

    log(`Spawning child process with execPath:'${process.execPath}' and entryScript:'${options.entryScript}'`);

    const child = (0,external_child_process_namespaceObject.spawn)(process.execPath, [options.entryScript], {
      env,
      stdio: logger.logger.isEnabled() ? ['inherit', 'inherit', 'inherit', 'ipc'] : ['ignore', 'ignore', 'ignore', 'ipc'],
    });
    // The child process should not keep the main process alive
    child.unref();

    const timer = setInterval(() => {
      try {
        const currentSession = (0,_optionalChain._optionalChain)([hub, 'access', _2 => _2.getScope, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getSession, 'call', _5 => _5()]);
        // We need to copy the session object and remove the toJSON method so it can be sent to the child process
        // serialized without making it a SerializedSession
        const session = currentSession ? { ...currentSession, toJSON: undefined } : undefined;
        // message the child process to tell it the main event loop is still running
        child.send({ session });
      } catch (_) {
        //
      }
    }, options.pollInterval);

    child.on('message', (msg) => {
      if (msg === 'session-ended') {
        log('ANR event sent from child process. Clearing session in this process.');
        (0,_optionalChain._optionalChain)([hub, 'access', _6 => _6.getScope, 'call', _7 => _7(), 'optionalAccess', _8 => _8.setSession, 'call', _9 => _9(undefined)]);
      }
    });

    const end = (type) => {
      return (...args) => {
        clearInterval(timer);
        log(`Child process ${type}`, ...args);
      };
    };

    child.on('error', end('error'));
    child.on('disconnect', end('disconnect'));
    child.on('exit', end('exit'));
  } catch (e) {
    log('Failed to start child process', e);
  }
}

function createHrTimer() {
  let lastPoll = process.hrtime();

  return {
    getTimeMs: () => {
      const [seconds, nanoSeconds] = process.hrtime(lastPoll);
      return Math.floor(seconds * 1e3 + nanoSeconds / 1e6);
    },
    reset: () => {
      lastPoll = process.hrtime();
    },
  };
}

function handleChildProcess(options) {
  process.title = 'sentry-anr';

  function log(message) {
    logger.logger.log(`[ANR child process] ${message}`);
  }

  log('Started');
  let session;

  function sendAnrEvent(frames) {
    if (session) {
      log('Sending abnormal session');
      (0,esm_session.updateSession)(session, { status: 'abnormal', abnormal_mechanism: 'anr_foreground' });
      (0,_optionalChain._optionalChain)([esm_hub.getCurrentHub, 'call', _10 => _10(), 'access', _11 => _11.getClient, 'call', _12 => _12(), 'optionalAccess', _13 => _13.sendSession, 'call', _14 => _14(session)]);

      try {
        // Notify the main process that the session has ended so the session can be cleared from the scope
        (0,_optionalChain._optionalChain)([process, 'access', _15 => _15.send, 'optionalCall', _16 => _16('session-ended')]);
      } catch (_) {
        // ignore
      }
    }

    captureEvent(createAnrEvent(options.anrThreshold, frames));

    void flush(3000).then(() => {
      // We only capture one event to avoid spamming users with errors
      process.exit();
    });
  }

  (0,eventProcessors.addGlobalEventProcessor)(event => {
    // Strip sdkProcessingMetadata from all child process events to remove trace info
    delete event.sdkProcessingMetadata;
    event.tags = {
      ...event.tags,
      'process.name': 'ANR',
    };
    return event;
  });

  let debuggerPause;

  // if attachStackTrace is enabled, we'll have a debugger url to connect to
  if (process.env.SENTRY_INSPECT_URL) {
    log('Connecting to debugger');

    debuggerPause = captureStackTrace(process.env.SENTRY_INSPECT_URL, frames => {
      log('Capturing event with stack frames');
      sendAnrEvent(frames);
    });
  }

  async function watchdogTimeout() {
    log('Watchdog timeout');
    const pauseAndCapture = await debuggerPause;

    if (pauseAndCapture) {
      log('Pausing debugger to capture stack trace');
      pauseAndCapture();
    } else {
      log('Capturing event');
      sendAnrEvent();
    }
  }

  const { poll } = watchdogTimer(createHrTimer, options.pollInterval, options.anrThreshold, watchdogTimeout);

  process.on('message', (msg) => {
    if (msg.session) {
      session = (0,esm_session.makeSession)(msg.session);
    }
    poll();
  });
}

/**
 * Returns true if the current process is an ANR child process.
 */
function isAnrChildProcess() {
  return !!process.send && !!process.env.SENTRY_ANR_CHILD_PROCESS;
}

/**
 * **Note** This feature is still in beta so there may be breaking changes in future releases.
 *
 * Starts a child process that detects Application Not Responding (ANR) errors.
 *
 * It's important to await on the returned promise before your app code to ensure this code does not run in the ANR
 * child process.
 *
 * ```js
 * import { init, enableAnrDetection } from '@sentry/node';
 *
 * init({ dsn: "__DSN__" });
 *
 * // with ESM + Node 14+
 * await enableAnrDetection({ captureStackTrace: true });
 * runApp();
 *
 * // with CJS or Node 10+
 * enableAnrDetection({ captureStackTrace: true }).then(() => {
 *   runApp();
 * });
 * ```
 */
function enableAnrDetection(options) {
  // When pm2 runs the script in cluster mode, process.argv[1] is the pm2 script and process.env.pm_exec_path is the
  // path to the entry script
  const entryScript = options.entryScript || process.env.pm_exec_path || process.argv[1];

  const anrOptions = {
    entryScript,
    pollInterval: options.pollInterval || DEFAULT_INTERVAL,
    anrThreshold: options.anrThreshold || DEFAULT_HANG_THRESHOLD,
    captureStackTrace: !!options.captureStackTrace,
    // eslint-disable-next-line deprecation/deprecation
    debug: !!options.debug,
  };

  if (isAnrChildProcess()) {
    handleChildProcess(anrOptions);
    // In the child process, the promise never resolves which stops the app code from running
    return new Promise(() => {
      // Never resolve
    });
  } else {
    startChildProcess(anrOptions);
    // In the main process, the promise resolves immediately
    return Promise.resolve();
  }
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/nodeVersion.js
var nodeVersion = __webpack_require__(92);
;// CONCATENATED MODULE: external "domain"
const external_domain_namespaceObject = require("domain");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/async/domain.js




function getActiveDomain() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  return external_domain_namespaceObject.active ;
}

function getCurrentHub() {
  const activeDomain = getActiveDomain();

  // If there's no active domain, just return undefined and the global hub will be used
  if (!activeDomain) {
    return undefined;
  }

  (0,esm_hub.ensureHubOnCarrier)(activeDomain);

  return (0,esm_hub.getHubFromCarrier)(activeDomain);
}

function createNewHub(parent) {
  const carrier = {};
  (0,esm_hub.ensureHubOnCarrier)(carrier, parent);
  return (0,esm_hub.getHubFromCarrier)(carrier);
}

function runWithAsyncContext(callback, options) {
  const activeDomain = getActiveDomain();

  if (activeDomain && (0,_optionalChain._optionalChain)([options, 'optionalAccess', _ => _.reuseExisting])) {
    // We're already in a domain, so we don't need to create a new one, just call the callback with the current hub
    return callback();
  }

  const local = external_domain_namespaceObject.create() ;

  const parentHub = activeDomain ? (0,esm_hub.getHubFromCarrier)(activeDomain) : undefined;
  const newHub = createNewHub(parentHub);
  (0,esm_hub.setHubOnCarrier)(local, newHub);

  return local.bind(() => {
    return callback();
  })();
}

/**
 * Sets the async context strategy to use Node.js domains.
 */
function setDomainAsyncContextStrategy() {
  (0,esm_hub.setAsyncContextStrategy)({ getCurrentHub, runWithAsyncContext });
}



;// CONCATENATED MODULE: external "async_hooks"
const external_async_hooks_namespaceObject = require("async_hooks");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/async/hooks.js




let asyncStorage;

/**
 * Sets the async context strategy to use AsyncLocalStorage which requires Node v12.17.0 or v13.10.0.
 */
function setHooksAsyncContextStrategy() {
  if (!asyncStorage) {
    asyncStorage = new external_async_hooks_namespaceObject.AsyncLocalStorage();
  }

  function getCurrentHub() {
    return asyncStorage.getStore();
  }

  function createNewHub(parent) {
    const carrier = {};
    (0,esm_hub.ensureHubOnCarrier)(carrier, parent);
    return (0,esm_hub.getHubFromCarrier)(carrier);
  }

  function runWithAsyncContext(callback, options) {
    const existingHub = getCurrentHub();

    if (existingHub && (0,_optionalChain._optionalChain)([options, 'optionalAccess', _ => _.reuseExisting])) {
      // We're already in an async context, so we don't need to create a new one
      // just call the callback with the current hub
      return callback();
    }

    const newHub = createNewHub(existingHub);

    return asyncStorage.run(newHub, () => {
      return callback();
    });
  }

  (0,esm_hub.setAsyncContextStrategy)({ getCurrentHub, runWithAsyncContext });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/async/index.js




/**
 * Sets the correct async context strategy for Node.js
 *
 * Node.js >= 14 uses AsyncLocalStorage
 * Node.js < 14 uses domains
 */
function setNodeAsyncContextStrategy() {
  if (nodeVersion.NODE_VERSION.major && nodeVersion.NODE_VERSION.major >= 14) {
    setHooksAsyncContextStrategy();
  } else {
    setDomainAsyncContextStrategy();
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/severity.js
// Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
//
// a) moving `validSeverityLevels` to `@sentry/types`,
// b) moving the`SeverityLevel` type here, or
// c) importing `validSeverityLevels` from here into `@sentry/types`.
//
// Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
// create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
// type, reminding anyone who changes it to change this list also, will have to do.

const validSeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];

/**
 * Converts a string-based level into a member of the deprecated {@link Severity} enum.
 *
 * @deprecated `severityFromString` is deprecated. Please use `severityLevelFromString` instead.
 *
 * @param level String representation of Severity
 * @returns Severity
 */
function severityFromString(level) {
  return severityLevelFromString(level) ;
}

/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */
function severityLevelFromString(level) {
  return (level === 'warn' ? 'warning' : validSeverityLevels.includes(level) ? level : 'log') ;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/console.js




/** Console module integration */
class Console  {constructor() { Console.prototype.__init.call(this); }
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Console';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Console.id;}

  /**
   * @inheritDoc
   */
   setupOnce() {
    addInstrumentationHandler('console', ({ args, level }) => {
      const hub = (0,esm_hub.getCurrentHub)();

      if (!hub.getIntegration(Console)) {
        return;
      }

      hub.addBreadcrumb(
        {
          category: 'console',
          level: severityLevelFromString(level),
          message: external_util_.format.apply(undefined, args),
        },
        {
          input: [...args],
          level,
        },
      );
    });
  }
} Console.__initStatic();



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+core@7.76.0/node_modules/@sentry/core/esm/utils/isSentryRequestUrl.js
var isSentryRequestUrl = __webpack_require__(94);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/lru.js
var lru = __webpack_require__(93);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/baggage.js
var baggage = __webpack_require__(68);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/utils/http.js




/**
 * Assembles a URL that's passed to the users to filter on.
 * It can include raw (potentially PII containing) data, which we'll allow users to access to filter
 * but won't include in spans or breadcrumbs.
 *
 * @param requestOptions RequestOptions object containing the component parts for a URL
 * @returns Fully-formed URL
 */
// TODO (v8): This function should include auth, query and fragment (it's breaking, so we need to wait for v8)
function extractRawUrl(requestOptions) {
  const { protocol, hostname, port } = parseRequestOptions(requestOptions);
  const path = requestOptions.path ? requestOptions.path : '/';
  return `${protocol}//${hostname}${port}${path}`;
}

/**
 * Assemble a URL to be used for breadcrumbs and spans.
 *
 * @param requestOptions RequestOptions object containing the component parts for a URL
 * @returns Fully-formed URL
 */
function extractUrl(requestOptions) {
  const { protocol, hostname, port } = parseRequestOptions(requestOptions);

  const path = requestOptions.pathname || '/';

  // always filter authority, see https://develop.sentry.dev/sdk/data-handling/#structuring-data
  const authority = requestOptions.auth ? redactAuthority(requestOptions.auth) : '';

  return `${protocol}//${authority}${hostname}${port}${path}`;
}

function redactAuthority(auth) {
  const [user, password] = auth.split(':');
  return `${user ? '[Filtered]' : ''}:${password ? '[Filtered]' : ''}@`;
}

/**
 * Handle various edge cases in the span description (for spans representing http(s) requests).
 *
 * @param description current `description` property of the span representing the request
 * @param requestOptions Configuration data for the request
 * @param Request Request object
 *
 * @returns The cleaned description
 */
function cleanSpanDescription(
  description,
  requestOptions,
  request,
) {
  // nothing to clean
  if (!description) {
    return description;
  }

  // eslint-disable-next-line prefer-const
  let [method, requestUrl] = description.split(' ');

  // superagent sticks the protocol in a weird place (we check for host because if both host *and* protocol are missing,
  // we're likely dealing with an internal route and this doesn't apply)
  if (requestOptions.host && !requestOptions.protocol) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    requestOptions.protocol = (0,_optionalChain._optionalChain)([(request ), 'optionalAccess', _ => _.agent, 'optionalAccess', _2 => _2.protocol]); // worst comes to worst, this is undefined and nothing changes
    // This URL contains the filtered authority ([filtered]:[filtered]@example.com) but no fragment or query params
    requestUrl = extractUrl(requestOptions);
  }

  // internal routes can end up starting with a triple slash rather than a single one
  if ((0,_optionalChain._optionalChain)([requestUrl, 'optionalAccess', _3 => _3.startsWith, 'call', _4 => _4('///')])) {
    requestUrl = requestUrl.slice(2);
  }

  return `${method} ${requestUrl}`;
}

// the node types are missing a few properties which node's `urlToOptions` function spits out

/**
 * Convert a URL object into a RequestOptions object.
 *
 * Copied from Node's internals (where it's used in http(s).request() and http(s).get()), modified only to use the
 * RequestOptions type above.
 *
 * See https://github.com/nodejs/node/blob/master/lib/internal/url.js.
 */
function urlToOptions(url) {
  const options = {
    protocol: url.protocol,
    hostname:
      typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
    hash: url.hash,
    search: url.search,
    pathname: url.pathname,
    path: `${url.pathname || ''}${url.search || ''}`,
    href: url.href,
  };
  if (url.port !== '') {
    options.port = Number(url.port);
  }
  if (url.username || url.password) {
    options.auth = `${url.username}:${url.password}`;
  }
  return options;
}

/**
 * Normalize inputs to `http(s).request()` and `http(s).get()`.
 *
 * Legal inputs to `http(s).request()` and `http(s).get()` can take one of ten forms:
 *     [ RequestOptions | string | URL ],
 *     [ RequestOptions | string | URL, RequestCallback ],
 *     [ string | URL, RequestOptions ], and
 *     [ string | URL, RequestOptions, RequestCallback ].
 *
 * This standardizes to one of two forms: [ RequestOptions ] and [ RequestOptions, RequestCallback ]. A similar thing is
 * done as the first step of `http(s).request()` and `http(s).get()`; this just does it early so that we can interact
 * with the args in a standard way.
 *
 * @param requestArgs The inputs to `http(s).request()` or `http(s).get()`, as an array.
 *
 * @returns Equivalent args of the form [ RequestOptions ] or [ RequestOptions, RequestCallback ].
 */
function normalizeRequestArgs(
  httpModule,
  requestArgs,
) {
  let callback, requestOptions;

  // pop off the callback, if there is one
  if (typeof requestArgs[requestArgs.length - 1] === 'function') {
    callback = requestArgs.pop() ;
  }

  // create a RequestOptions object of whatever's at index 0
  if (typeof requestArgs[0] === 'string') {
    requestOptions = urlToOptions(new external_url_.URL(requestArgs[0]));
  } else if (requestArgs[0] instanceof external_url_.URL) {
    requestOptions = urlToOptions(requestArgs[0]);
  } else {
    requestOptions = requestArgs[0];

    try {
      const parsed = new external_url_.URL(
        requestOptions.path || '',
        `${requestOptions.protocol || 'http:'}//${requestOptions.hostname}`,
      );
      requestOptions = {
        pathname: parsed.pathname,
        search: parsed.search,
        hash: parsed.hash,
        ...requestOptions,
      };
    } catch (e) {
      // ignore
    }
  }

  // if the options were given separately from the URL, fold them in
  if (requestArgs.length === 2) {
    requestOptions = { ...requestOptions, ...requestArgs[1] };
  }

  // Figure out the protocol if it's currently missing
  if (requestOptions.protocol === undefined) {
    // Worst case we end up populating protocol with undefined, which it already is
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */

    // NOTE: Prior to Node 9, `https` used internals of `http` module, thus we don't patch it.
    // Because of that, we cannot rely on `httpModule` to provide us with valid protocol,
    // as it will always return `http`, even when using `https` module.
    //
    // See test/integrations/http.test.ts for more details on Node <=v8 protocol issue.
    if (nodeVersion.NODE_VERSION.major && nodeVersion.NODE_VERSION.major > 8) {
      requestOptions.protocol =
        (0,_optionalChain._optionalChain)([((0,_optionalChain._optionalChain)([httpModule, 'optionalAccess', _5 => _5.globalAgent]) ), 'optionalAccess', _6 => _6.protocol]) ||
        (0,_optionalChain._optionalChain)([(requestOptions.agent ), 'optionalAccess', _7 => _7.protocol]) ||
        (0,_optionalChain._optionalChain)([(requestOptions._defaultAgent ), 'optionalAccess', _8 => _8.protocol]);
    } else {
      requestOptions.protocol =
        (0,_optionalChain._optionalChain)([(requestOptions.agent ), 'optionalAccess', _9 => _9.protocol]) ||
        (0,_optionalChain._optionalChain)([(requestOptions._defaultAgent ), 'optionalAccess', _10 => _10.protocol]) ||
        (0,_optionalChain._optionalChain)([((0,_optionalChain._optionalChain)([httpModule, 'optionalAccess', _11 => _11.globalAgent]) ), 'optionalAccess', _12 => _12.protocol]);
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any */
  }

  // return args in standardized form
  if (callback) {
    return [requestOptions, callback];
  } else {
    return [requestOptions];
  }
}

function parseRequestOptions(requestOptions)

 {
  const protocol = requestOptions.protocol || '';
  const hostname = requestOptions.hostname || requestOptions.host || '';
  // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
  // Also don't add port if the hostname already includes a port
  const port =
    !requestOptions.port || requestOptions.port === 80 || requestOptions.port === 443 || /^(.*):(\d+)$/.test(hostname)
      ? ''
      : `:${requestOptions.port}`;

  return { protocol, hostname, port };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/http.js






/**
 * The http module integration instruments Node's internal http module. It creates breadcrumbs, transactions for outgoing
 * http requests and attaches trace data when tracing is enabled via its `tracing` option.
 */
class Http  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Http';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Http.id;}

  /**
   * @inheritDoc
   */
   constructor(options = {}) {Http.prototype.__init.call(this);
    this._breadcrumbs = typeof options.breadcrumbs === 'undefined' ? true : options.breadcrumbs;
    this._tracing = !options.tracing ? undefined : options.tracing === true ? {} : options.tracing;
  }

  /**
   * @inheritDoc
   */
   setupOnce(
    _addGlobalEventProcessor,
    setupOnceGetCurrentHub,
  ) {
    // No need to instrument if we don't want to track anything
    if (!this._breadcrumbs && !this._tracing) {
      return;
    }

    const clientOptions = (0,_optionalChain._optionalChain)([setupOnceGetCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);

    // Do not auto-instrument for other instrumenter
    if (clientOptions && clientOptions.instrumenter !== 'sentry') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('HTTP Integration is skipped because of instrumenter configuration.');
      return;
    }

    const shouldCreateSpanForRequest =
      // eslint-disable-next-line deprecation/deprecation
      (0,_optionalChain._optionalChain)([this, 'access', _6 => _6._tracing, 'optionalAccess', _7 => _7.shouldCreateSpanForRequest]) || (0,_optionalChain._optionalChain)([clientOptions, 'optionalAccess', _8 => _8.shouldCreateSpanForRequest]);
    // eslint-disable-next-line deprecation/deprecation
    const tracePropagationTargets = (0,_optionalChain._optionalChain)([clientOptions, 'optionalAccess', _9 => _9.tracePropagationTargets]) || (0,_optionalChain._optionalChain)([this, 'access', _10 => _10._tracing, 'optionalAccess', _11 => _11.tracePropagationTargets]);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const httpModule = __webpack_require__(73);
    const wrappedHttpHandlerMaker = _createWrappedRequestMethodFactory(
      httpModule,
      this._breadcrumbs,
      shouldCreateSpanForRequest,
      tracePropagationTargets,
    );
    (0,object.fill)(httpModule, 'get', wrappedHttpHandlerMaker);
    (0,object.fill)(httpModule, 'request', wrappedHttpHandlerMaker);

    // NOTE: Prior to Node 9, `https` used internals of `http` module, thus we don't patch it.
    // If we do, we'd get double breadcrumbs and double spans for `https` calls.
    // It has been changed in Node 9, so for all versions equal and above, we patch `https` separately.
    if (nodeVersion.NODE_VERSION.major && nodeVersion.NODE_VERSION.major > 8) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const httpsModule = __webpack_require__(74);
      const wrappedHttpsHandlerMaker = _createWrappedRequestMethodFactory(
        httpsModule,
        this._breadcrumbs,
        shouldCreateSpanForRequest,
        tracePropagationTargets,
      );
      (0,object.fill)(httpsModule, 'get', wrappedHttpsHandlerMaker);
      (0,object.fill)(httpsModule, 'request', wrappedHttpsHandlerMaker);
    }
  }
}Http.__initStatic();

// for ease of reading below

/**
 * Function which creates a function which creates wrapped versions of internal `request` and `get` calls within `http`
 * and `https` modules. (NB: Not a typo - this is a creator^2!)
 *
 * @param breadcrumbsEnabled Whether or not to record outgoing requests as breadcrumbs
 * @param tracingEnabled Whether or not to record outgoing requests as tracing spans
 *
 * @returns A function which accepts the exiting handler and returns a wrapped handler
 */
function _createWrappedRequestMethodFactory(
  httpModule,
  breadcrumbsEnabled,
  shouldCreateSpanForRequest,
  tracePropagationTargets,
) {
  // We're caching results so we don't have to recompute regexp every time we create a request.
  const createSpanUrlMap = new lru.LRUMap(100);
  const headersUrlMap = new lru.LRUMap(100);

  const shouldCreateSpan = (url) => {
    if (shouldCreateSpanForRequest === undefined) {
      return true;
    }

    const cachedDecision = createSpanUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = shouldCreateSpanForRequest(url);
    createSpanUrlMap.set(url, decision);
    return decision;
  };

  const shouldAttachTraceData = (url) => {
    if (tracePropagationTargets === undefined) {
      return true;
    }

    const cachedDecision = headersUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = (0,string.stringMatchesSomePattern)(url, tracePropagationTargets);
    headersUrlMap.set(url, decision);
    return decision;
  };

  /**
   * Captures Breadcrumb based on provided request/response pair
   */
  function addRequestBreadcrumb(
    event,
    requestSpanData,
    req,
    res,
  ) {
    if (!(0,esm_hub.getCurrentHub)().getIntegration(Http)) {
      return;
    }

    (0,esm_hub.getCurrentHub)().addBreadcrumb(
      {
        category: 'http',
        data: {
          status_code: res && res.statusCode,
          ...requestSpanData,
        },
        type: 'http',
      },
      {
        event,
        request: req,
        response: res,
      },
    );
  }

  return function wrappedRequestMethodFactory(originalRequestMethod) {
    return function wrappedMethod( ...args) {
      const requestArgs = normalizeRequestArgs(httpModule, args);
      const requestOptions = requestArgs[0];
      // eslint-disable-next-line deprecation/deprecation
      const rawRequestUrl = extractRawUrl(requestOptions);
      const requestUrl = extractUrl(requestOptions);

      // we don't want to record requests to Sentry as either breadcrumbs or spans, so just use the original method
      if ((0,isSentryRequestUrl.isSentryRequestUrl)(requestUrl, (0,esm_hub.getCurrentHub)())) {
        return originalRequestMethod.apply(httpModule, requestArgs);
      }

      const hub = (0,esm_hub.getCurrentHub)();
      const scope = hub.getScope();
      const parentSpan = scope.getSpan();

      const data = getRequestSpanData(requestUrl, requestOptions);

      const requestSpan = shouldCreateSpan(rawRequestUrl)
        ? (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _12 => _12.startChild, 'call', _13 => _13({
            op: 'http.client',
            origin: 'auto.http.node.http',
            description: `${data['http.method']} ${data.url}`,
            data,
          })])
        : undefined;

      if (shouldAttachTraceData(rawRequestUrl)) {
        if (requestSpan) {
          const sentryTraceHeader = requestSpan.toTraceparent();
          const dynamicSamplingContext = (0,_optionalChain._optionalChain)([requestSpan, 'optionalAccess', _14 => _14.transaction, 'optionalAccess', _15 => _15.getDynamicSamplingContext, 'call', _16 => _16()]);
          addHeadersToRequestOptions(requestOptions, requestUrl, sentryTraceHeader, dynamicSamplingContext);
        } else {
          const client = hub.getClient();
          const { traceId, sampled, dsc } = scope.getPropagationContext();
          const sentryTraceHeader = (0,tracing.generateSentryTraceHeader)(traceId, undefined, sampled);
          const dynamicSamplingContext =
            dsc || (client ? (0,tracing_dynamicSamplingContext.getDynamicSamplingContextFromClient)(traceId, client, scope) : undefined);
          addHeadersToRequestOptions(requestOptions, requestUrl, sentryTraceHeader, dynamicSamplingContext);
        }
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
          logger.logger.log(
            `[Tracing] Not adding sentry-trace header to outgoing request (${requestUrl}) due to mismatching tracePropagationTargets option.`,
          );
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalRequestMethod
        .apply(httpModule, requestArgs)
        .once('response', function ( res) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const req = this;
          if (breadcrumbsEnabled) {
            addRequestBreadcrumb('response', data, req, res);
          }
          if (requestSpan) {
            if (res.statusCode) {
              requestSpan.setHttpStatus(res.statusCode);
            }
            requestSpan.description = cleanSpanDescription(requestSpan.description, requestOptions, req);
            requestSpan.finish();
          }
        })
        .once('error', function () {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const req = this;

          if (breadcrumbsEnabled) {
            addRequestBreadcrumb('error', data, req);
          }
          if (requestSpan) {
            requestSpan.setHttpStatus(500);
            requestSpan.description = cleanSpanDescription(requestSpan.description, requestOptions, req);
            requestSpan.finish();
          }
        });
    };
  };
}

function addHeadersToRequestOptions(
  requestOptions,
  requestUrl,
  sentryTraceHeader,
  dynamicSamplingContext,
) {
  // Don't overwrite sentry-trace and baggage header if it's already set.
  const headers = requestOptions.headers || {};
  if (headers['sentry-trace']) {
    return;
  }

  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
    logger.logger.log(`[Tracing] Adding sentry-trace header ${sentryTraceHeader} to outgoing request to "${requestUrl}": `);
  const sentryBaggage = (0,baggage.dynamicSamplingContextToSentryBaggageHeader)(dynamicSamplingContext);
  const sentryBaggageHeader =
    sentryBaggage && sentryBaggage.length > 0 ? normalizeBaggageHeader(requestOptions, sentryBaggage) : undefined;

  requestOptions.headers = {
    ...requestOptions.headers,
    'sentry-trace': sentryTraceHeader,
    // Setting a header to `undefined` will crash in node so we only set the baggage header when it's defined
    ...(sentryBaggageHeader && { baggage: sentryBaggageHeader }),
  };
}

function getRequestSpanData(requestUrl, requestOptions) {
  const method = requestOptions.method || 'GET';
  const data = {
    url: requestUrl,
    'http.method': method,
  };
  if (requestOptions.hash) {
    // strip leading "#"
    data['http.fragment'] = requestOptions.hash.substring(1);
  }
  if (requestOptions.search) {
    // strip leading "?"
    data['http.query'] = requestOptions.search.substring(1);
  }
  return data;
}

function normalizeBaggageHeader(
  requestOptions,
  sentryBaggageHeader,
) {
  if (!requestOptions.headers || !requestOptions.headers.baggage) {
    return sentryBaggageHeader;
  } else if (!sentryBaggageHeader) {
    return requestOptions.headers.baggage ;
  } else if (Array.isArray(requestOptions.headers.baggage)) {
    return [...requestOptions.headers.baggage, sentryBaggageHeader];
  }
  // Type-cast explanation:
  // Technically this the following could be of type `(number | string)[]` but for the sake of simplicity
  // we say this is undefined behaviour, since it would not be baggage spec conform if the user did this.
  return [requestOptions.headers.baggage, sentryBaggageHeader] ;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/utils/errorhandling.js



const DEFAULT_SHUTDOWN_TIMEOUT = 2000;

/**
 * @hidden
 */
function logAndExitProcess(error) {
  // eslint-disable-next-line no-console
  console.error(error);

  const client = (0,esm_hub.getCurrentHub)().getClient();

  if (client === undefined) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('No NodeClient was defined, we are exiting the process now.');
    global.process.exit(1);
  }

  const options = client.getOptions();
  const timeout =
    (options && options.shutdownTimeout && options.shutdownTimeout > 0 && options.shutdownTimeout) ||
    DEFAULT_SHUTDOWN_TIMEOUT;
  client.close(timeout).then(
    (result) => {
      if (!result) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.warn('We reached the timeout for emptying the request buffer, still exiting now!');
      }
      global.process.exit(1);
    },
    error => {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error(error);
    },
  );
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/onuncaughtexception.js




/** Global Exception handler */
class OnUncaughtException  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'OnUncaughtException';}

  /**
   * @inheritDoc
   */
   __init() {this.name = OnUncaughtException.id;}

  /**
   * @inheritDoc
   */
    __init2() {this.handler = this._makeErrorHandler();}

  // CAREFUL: Please think twice before updating the way _options looks because the Next.js SDK depends on it in `index.server.ts`

  /**
   * @inheritDoc
   */
   constructor(options = {}) {OnUncaughtException.prototype.__init.call(this);OnUncaughtException.prototype.__init2.call(this);
    this._options = {
      exitEvenIfOtherHandlersAreRegistered: true,
      ...options,
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    global.process.on('uncaughtException', this.handler);
  }

  /**
   * @hidden
   */
   _makeErrorHandler() {
    const timeout = 2000;
    let caughtFirstError = false;
    let caughtSecondError = false;
    let calledFatalError = false;
    let firstError;

    return (error) => {
      let onFatalError = logAndExitProcess;
      const client = (0,esm_hub.getCurrentHub)().getClient();

      if (this._options.onFatalError) {
        onFatalError = this._options.onFatalError;
      } else if (client && client.getOptions().onFatalError) {
        onFatalError = client.getOptions().onFatalError ;
      }

      // Attaching a listener to `uncaughtException` will prevent the node process from exiting. We generally do not
      // want to alter this behaviour so we check for other listeners that users may have attached themselves and adjust
      // exit behaviour of the SDK accordingly:
      // - If other listeners are attached, do not exit.
      // - If the only listener attached is ours, exit.
      const userProvidedListenersCount = (
        global.process.listeners('uncaughtException')
      ).reduce((acc, listener) => {
        if (
          // There are 3 listeners we ignore:
          listener.name === 'domainUncaughtExceptionClear' || // as soon as we're using domains this listener is attached by node itself
          (listener.tag && listener.tag === 'sentry_tracingErrorCallback') || // the handler we register for tracing
          listener === this.handler // the handler we register in this integration
        ) {
          return acc;
        } else {
          return acc + 1;
        }
      }, 0);

      const processWouldExit = userProvidedListenersCount === 0;
      const shouldApplyFatalHandlingLogic = this._options.exitEvenIfOtherHandlersAreRegistered || processWouldExit;

      if (!caughtFirstError) {
        const hub = (0,esm_hub.getCurrentHub)();

        // this is the first uncaught error and the ultimate reason for shutting down
        // we want to do absolutely everything possible to ensure it gets captured
        // also we want to make sure we don't go recursion crazy if more errors happen after this one
        firstError = error;
        caughtFirstError = true;

        if (hub.getIntegration(OnUncaughtException)) {
          hub.withScope((scope) => {
            scope.setLevel('fatal');
            hub.captureException(error, {
              originalException: error,
              data: { mechanism: { handled: false, type: 'onuncaughtexception' } },
            });
            if (!calledFatalError && shouldApplyFatalHandlingLogic) {
              calledFatalError = true;
              onFatalError(error);
            }
          });
        } else {
          if (!calledFatalError && shouldApplyFatalHandlingLogic) {
            calledFatalError = true;
            onFatalError(error);
          }
        }
      } else {
        if (shouldApplyFatalHandlingLogic) {
          if (calledFatalError) {
            // we hit an error *after* calling onFatalError - pretty boned at this point, just shut it down
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
              logger.logger.warn(
                'uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown',
              );
            logAndExitProcess(error);
          } else if (!caughtSecondError) {
            // two cases for how we can hit this branch:
            //   - capturing of first error blew up and we just caught the exception from that
            //     - quit trying to capture, proceed with shutdown
            //   - a second independent error happened while waiting for first error to capture
            //     - want to avoid causing premature shutdown before first error capture finishes
            // it's hard to immediately tell case 1 from case 2 without doing some fancy/questionable domain stuff
            // so let's instead just delay a bit before we proceed with our action here
            // in case 1, we just wait a bit unnecessarily but ultimately do the same thing
            // in case 2, the delay hopefully made us wait long enough for the capture to finish
            // two potential nonideal outcomes:
            //   nonideal case 1: capturing fails fast, we sit around for a few seconds unnecessarily before proceeding correctly by calling onFatalError
            //   nonideal case 2: case 2 happens, 1st error is captured but slowly, timeout completes before capture and we treat second error as the sendErr of (nonexistent) failure from trying to capture first error
            // note that after hitting this branch, we might catch more errors where (caughtSecondError && !calledFatalError)
            //   we ignore them - they don't matter to us, we're just waiting for the second error timeout to finish
            caughtSecondError = true;
            setTimeout(() => {
              if (!calledFatalError) {
                // it was probably case 1, let's treat err as the sendErr and call onFatalError
                calledFatalError = true;
                onFatalError(firstError, error);
              }
            }, timeout); // capturing could take at least sendTimeout to fail, plus an arbitrary second for how long it takes to collect surrounding source etc
          }
        }
      }
    };
  }
} OnUncaughtException.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/onunhandledrejection.js




/** Global Promise Rejection handler */
class OnUnhandledRejection  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'OnUnhandledRejection';}

  /**
   * @inheritDoc
   */
   __init() {this.name = OnUnhandledRejection.id;}

  /**
   * @inheritDoc
   */
   constructor(
      _options

 = { mode: 'warn' },
  ) {this._options = _options;OnUnhandledRejection.prototype.__init.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce() {
    global.process.on('unhandledRejection', this.sendUnhandledPromise.bind(this));
  }

  /**
   * Send an exception with reason
   * @param reason string
   * @param promise promise
   */
   sendUnhandledPromise(reason, promise) {
    const hub = (0,esm_hub.getCurrentHub)();
    if (hub.getIntegration(OnUnhandledRejection)) {
      hub.withScope((scope) => {
        scope.setExtra('unhandledPromiseRejection', true);
        hub.captureException(reason, {
          originalException: promise,
          data: { mechanism: { handled: false, type: 'onunhandledrejection' } },
        });
      });
    }
    this._handleRejection(reason);
  }

  /**
   * Handler for `mode` option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   _handleRejection(reason) {
    // https://github.com/nodejs/node/blob/7cf6f9e964aa00772965391c23acda6d71972a9a/lib/internal/process/promises.js#L234-L240
    const rejectionWarning =
      'This error originated either by ' +
      'throwing inside of an async function without a catch block, ' +
      'or by rejecting a promise which was not handled with .catch().' +
      ' The promise rejected with the reason:';

    /* eslint-disable no-console */
    if (this._options.mode === 'warn') {
      (0,logger.consoleSandbox)(() => {
        console.warn(rejectionWarning);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.error(reason && reason.stack ? reason.stack : reason);
      });
    } else if (this._options.mode === 'strict') {
      (0,logger.consoleSandbox)(() => {
        console.warn(rejectionWarning);
      });
      logAndExitProcess(reason);
    }
    /* eslint-enable no-console */
  }
} OnUnhandledRejection.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/aggregate-errors.js



/**
 * Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
 */
function applyAggregateErrorsToEvent(
  exceptionFromErrorImplementation,
  parser,
  maxValueLimit = 250,
  key,
  limit,
  event,
  hint,
) {
  if (!event.exception || !event.exception.values || !hint || !(0,is.isInstanceOf)(hint.originalException, Error)) {
    return;
  }

  // Generally speaking the last item in `event.exception.values` is the exception originating from the original Error
  const originalException =
    event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : undefined;

  // We only create exception grouping if there is an exception in the event.
  if (originalException) {
    event.exception.values = truncateAggregateExceptions(
      aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        hint.originalException ,
        key,
        event.exception.values,
        originalException,
        0,
      ),
      maxValueLimit,
    );
  }
}

function aggregateExceptionsFromError(
  exceptionFromErrorImplementation,
  parser,
  limit,
  error,
  key,
  prevExceptions,
  exception,
  exceptionId,
) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }

  let newExceptions = [...prevExceptions];

  if ((0,is.isInstanceOf)(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId,
    );
  }

  // This will create exception grouping for AggregateErrors
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
  if (Array.isArray(error.errors)) {
    error.errors.forEach((childError, i) => {
      if ((0,is.isInstanceOf)(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId,
        );
      }
    });
  }

  return newExceptions;
}

function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    is_exception_group: true,
    exception_id: exceptionId,
  };
}

function applyExceptionGroupFieldsForChildException(
  exception,
  source,
  exceptionId,
  parentId,
) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    type: 'chained',
    source,
    exception_id: exceptionId,
    parent_id: parentId,
  };
}

/**
 * Truncate the message (exception.value) of all exceptions in the event.
 * Because this event processor is ran after `applyClientOptions`,
 * we need to truncate the message of the added exceptions here.
 */
function truncateAggregateExceptions(exceptions, maxValueLength) {
  return exceptions.map(exception => {
    if (exception.value) {
      exception.value = (0,string.truncate)(exception.value, maxValueLength);
    }
    return exception;
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/linkederrors.js


const DEFAULT_KEY = 'cause';
const DEFAULT_LIMIT = 5;

/** Adds SDK info to an event. */
class LinkedErrors  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'LinkedErrors';}

  /**
   * @inheritDoc
   */
    __init() {this.name = LinkedErrors.id;}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {LinkedErrors.prototype.__init.call(this);
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }

  /** @inheritdoc */
   setupOnce() {
    // noop
  }

  /**
   * @inheritDoc
   */
   preprocessEvent(event, hint, client) {
    const options = client.getOptions();

    applyAggregateErrorsToEvent(
      exceptionFromError,
      options.stackParser,
      options.maxValueLength,
      this._key,
      this._limit,
      event,
      hint,
    );
  }
} LinkedErrors.__initStatic();



// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(17);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/modules.js



let moduleCache;

/** Extract information about paths */
function getPaths() {
  try {
    return __webpack_require__.c ? Object.keys(__webpack_require__.c ) : [];
  } catch (e) {
    return [];
  }
}

/** Extract information about package.json modules */
function collectModules()

 {
  const mainPaths = (__webpack_require__.c[__webpack_require__.s] && __webpack_require__.c[__webpack_require__.s].paths) || [];
  const paths = getPaths();
  const infos

 = {};
  const seen

 = {};

  paths.forEach(path => {
    let dir = path;

    /** Traverse directories upward in the search of package.json file */
    const updir = () => {
      const orig = dir;
      dir = (0,external_path_.dirname)(orig);

      if (!dir || orig === dir || seen[orig]) {
        return undefined;
      }
      if (mainPaths.indexOf(dir) < 0) {
        return updir();
      }

      const pkgfile = (0,external_path_.join)(orig, 'package.json');
      seen[orig] = true;

      if (!(0,external_fs_.existsSync)(pkgfile)) {
        return updir();
      }

      try {
        const info = JSON.parse((0,external_fs_.readFileSync)(pkgfile, 'utf8'))

;
        infos[info.name] = info.version;
      } catch (_oO) {
        // no-empty
      }
    };

    updir();
  });

  return infos;
}

/** Add node modules / packages to the event */
class Modules  {constructor() { Modules.prototype.__init.call(this); }
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Modules';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Modules.id;}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    addGlobalEventProcessor(event => {
      if (!getCurrentHub().getIntegration(Modules)) {
        return event;
      }
      return {
        ...event,
        modules: {
          ...event.modules,
          ...this._getModules(),
        },
      };
    });
  }

  /** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */
   _getModules() {
    if (!moduleCache) {
      moduleCache = collectModules();
    }
    return moduleCache;
  }
} Modules.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/contextlines.js




const FILE_CONTENT_CACHE = new lru.LRUMap(100);
const DEFAULT_LINES_OF_CONTEXT = 7;

// TODO: Replace with promisify when minimum supported node >= v8
function readTextFileAsync(path) {
  return new Promise((resolve, reject) => {
    (0,external_fs_.readFile)(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

/** Add node modules / packages to the event */
class ContextLines  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'ContextLines';}

  /**
   * @inheritDoc
   */
   __init() {this.name = ContextLines.id;}

   constructor(  _options = {}) {this._options = _options;ContextLines.prototype.__init.call(this);}

  /** Get's the number of context lines to add */
   get _contextLines() {
    return this._options.frameContextLines !== undefined ? this._options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    addGlobalEventProcessor(event => {
      const self = getCurrentHub().getIntegration(ContextLines);
      if (!self) {
        return event;
      }
      return this.addSourceContext(event);
    });
  }

  /** Processes an event and adds context lines */
   async addSourceContext(event) {
    // keep a lookup map of which files we've already enqueued to read,
    // so we don't enqueue the same file multiple times which would cause multiple i/o reads
    const enqueuedReadSourceFileTasks = {};
    const readSourceFileTasks = [];

    if (this._contextLines > 0 && (0,_optionalChain._optionalChain)([event, 'access', _2 => _2.exception, 'optionalAccess', _3 => _3.values])) {
      for (const exception of event.exception.values) {
        if (!(0,_optionalChain._optionalChain)([exception, 'access', _4 => _4.stacktrace, 'optionalAccess', _5 => _5.frames])) {
          continue;
        }

        // We want to iterate in reverse order as calling cache.get will bump the file in our LRU cache.
        // This ends up prioritizes source context for frames at the top of the stack instead of the bottom.
        for (let i = exception.stacktrace.frames.length - 1; i >= 0; i--) {
          const frame = exception.stacktrace.frames[i];
          // Call cache.get to bump the file to the top of the cache and ensure we have not already
          // enqueued a read operation for this filename
          if (
            frame.filename &&
            !enqueuedReadSourceFileTasks[frame.filename] &&
            !FILE_CONTENT_CACHE.get(frame.filename)
          ) {
            readSourceFileTasks.push(_readSourceFile(frame.filename));
            enqueuedReadSourceFileTasks[frame.filename] = 1;
          }
        }
      }
    }

    // check if files to read > 0, if so, await all of them to be read before adding source contexts.
    // Normally, Promise.all here could be short circuited if one of the promises rejects, but we
    // are guarding from that by wrapping the i/o read operation in a try/catch.
    if (readSourceFileTasks.length > 0) {
      await Promise.all(readSourceFileTasks);
    }

    // Perform the same loop as above, but this time we can assume all files are in the cache
    // and attempt to add source context to frames.
    if (this._contextLines > 0 && (0,_optionalChain._optionalChain)([event, 'access', _6 => _6.exception, 'optionalAccess', _7 => _7.values])) {
      for (const exception of event.exception.values) {
        if (exception.stacktrace && exception.stacktrace.frames) {
          await this.addSourceContextToFrames(exception.stacktrace.frames);
        }
      }
    }

    return event;
  }

  /** Adds context lines to frames */
   addSourceContextToFrames(frames) {
    for (const frame of frames) {
      // Only add context if we have a filename and it hasn't already been added
      if (frame.filename && frame.context_line === undefined) {
        const sourceFileLines = FILE_CONTENT_CACHE.get(frame.filename);

        if (sourceFileLines) {
          try {
            (0,misc.addContextToFrame)(sourceFileLines, frame, this._contextLines);
          } catch (e) {
            // anomaly, being defensive in case
            // unlikely to ever happen in practice but can definitely happen in theory
          }
        }
      }
    }
  }
}ContextLines.__initStatic();

/**
 * Reads file contents and caches them in a global LRU cache.
 * If reading fails, mark the file as null in the cache so we don't try again.
 *
 * @param filename filepath to read content from.
 */
async function _readSourceFile(filename) {
  const cachedFile = FILE_CONTENT_CACHE.get(filename);

  // We have already attempted to read this file and failed, do not try again
  if (cachedFile === null) {
    return null;
  }

  // We have a cache hit, return it
  if (cachedFile !== undefined) {
    return cachedFile;
  }

  // Guard from throwing if readFile fails, this enables us to use Promise.all and
  // not have it short circuiting if one of the promises rejects + since context lines are added
  // on a best effort basis, we want to throw here anyways.

  // If we made it to here, it means that our file is not cache nor marked as failed, so attempt to read it
  let content = null;
  try {
    const rawFileContents = await readTextFileAsync(filename);
    content = rawFileContents.split('\n');
  } catch (_) {
    // if we fail, we will mark the file as null in the cache and short circuit next time we try to read it
  }

  FILE_CONTENT_CACHE.set(filename, content);
  return content;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/context.js







// TODO: Required until we drop support for Node v8
const readFileAsync = (0,external_util_.promisify)(external_fs_.readFile);
const readDirAsync = (0,external_util_.promisify)(external_fs_.readdir);

/** Add node modules / packages to the event */
class Context  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Context';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Context.id;}

  /**
   * Caches context so it's only evaluated once
   */

   constructor(
      _options = {
      app: true,
      os: true,
      device: true,
      culture: true,
      cloudResource: true,
    },
  ) {this._options = _options;Context.prototype.__init.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor) {
    addGlobalEventProcessor(event => this.addContext(event));
  }

  /** Processes an event and adds context */
   async addContext(event) {
    if (this._cachedContext === undefined) {
      this._cachedContext = this._getContexts();
    }

    const updatedContext = this._updateContext(await this._cachedContext);

    event.contexts = {
      ...event.contexts,
      app: { ...updatedContext.app, ...(0,_optionalChain._optionalChain)([event, 'access', _ => _.contexts, 'optionalAccess', _2 => _2.app]) },
      os: { ...updatedContext.os, ...(0,_optionalChain._optionalChain)([event, 'access', _3 => _3.contexts, 'optionalAccess', _4 => _4.os]) },
      device: { ...updatedContext.device, ...(0,_optionalChain._optionalChain)([event, 'access', _5 => _5.contexts, 'optionalAccess', _6 => _6.device]) },
      culture: { ...updatedContext.culture, ...(0,_optionalChain._optionalChain)([event, 'access', _7 => _7.contexts, 'optionalAccess', _8 => _8.culture]) },
      cloud_resource: { ...updatedContext.cloud_resource, ...(0,_optionalChain._optionalChain)([event, 'access', _9 => _9.contexts, 'optionalAccess', _10 => _10.cloud_resource]) },
    };

    return event;
  }

  /**
   * Updates the context with dynamic values that can change
   */
   _updateContext(contexts) {
    // Only update properties if they exist
    if ((0,_optionalChain._optionalChain)([contexts, 'optionalAccess', _11 => _11.app, 'optionalAccess', _12 => _12.app_memory])) {
      contexts.app.app_memory = process.memoryUsage().rss;
    }

    if ((0,_optionalChain._optionalChain)([contexts, 'optionalAccess', _13 => _13.device, 'optionalAccess', _14 => _14.free_memory])) {
      contexts.device.free_memory = external_os_.freemem();
    }

    return contexts;
  }

  /**
   * Gets the contexts for the current environment
   */
   async _getContexts() {
    const contexts = {};

    if (this._options.os) {
      contexts.os = await getOsContext();
    }

    if (this._options.app) {
      contexts.app = getAppContext();
    }

    if (this._options.device) {
      contexts.device = getDeviceContext(this._options.device);
    }

    if (this._options.culture) {
      const culture = getCultureContext();

      if (culture) {
        contexts.culture = culture;
      }
    }

    if (this._options.cloudResource) {
      contexts.cloud_resource = getCloudResourceContext();
    }

    return contexts;
  }
}Context.__initStatic();

/**
 * Returns the operating system context.
 *
 * Based on the current platform, this uses a different strategy to provide the
 * most accurate OS information. Since this might involve spawning subprocesses
 * or accessing the file system, this should only be executed lazily and cached.
 *
 *  - On macOS (Darwin), this will execute the `sw_vers` utility. The context
 *    has a `name`, `version`, `build` and `kernel_version` set.
 *  - On Linux, this will try to load a distribution release from `/etc` and set
 *    the `name`, `version` and `kernel_version` fields.
 *  - On all other platforms, only a `name` and `version` will be returned. Note
 *    that `version` might actually be the kernel version.
 */
async function getOsContext() {
  const platformId = external_os_.platform();
  switch (platformId) {
    case 'darwin':
      return getDarwinInfo();
    case 'linux':
      return getLinuxInfo();
    default:
      return {
        name: PLATFORM_NAMES[platformId] || platformId,
        version: external_os_.release(),
      };
  }
}

function getCultureContext() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    if (typeof (process.versions ).icu !== 'string') {
      // Node was built without ICU support
      return;
    }

    // Check that node was built with full Intl support. Its possible it was built without support for non-English
    // locales which will make resolvedOptions inaccurate
    //
    // https://nodejs.org/api/intl.html#detecting-internationalization-support
    const january = new Date(9e8);
    const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
    if (spanish.format(january) === 'enero') {
      const options = Intl.DateTimeFormat().resolvedOptions();

      return {
        locale: options.locale,
        timezone: options.timeZone,
      };
    }
  } catch (err) {
    //
  }

  return;
}

function getAppContext() {
  const app_memory = process.memoryUsage().rss;
  const app_start_time = new Date(Date.now() - process.uptime() * 1000).toISOString();

  return { app_start_time, app_memory };
}

/**
 * Gets device information from os
 */
function getDeviceContext(deviceOpt) {
  const device = {};

  // Sometimes os.uptime() throws due to lacking permissions: https://github.com/getsentry/sentry-javascript/issues/8202
  let uptime;
  try {
    uptime = external_os_.uptime && external_os_.uptime();
  } catch (e) {
    // noop
  }

  // os.uptime or its return value seem to be undefined in certain environments (e.g. Azure functions).
  // Hence, we only set boot time, if we get a valid uptime value.
  // @see https://github.com/getsentry/sentry-javascript/issues/5856
  if (typeof uptime === 'number') {
    device.boot_time = new Date(Date.now() - uptime * 1000).toISOString();
  }

  device.arch = external_os_.arch();

  if (deviceOpt === true || deviceOpt.memory) {
    device.memory_size = external_os_.totalmem();
    device.free_memory = external_os_.freemem();
  }

  if (deviceOpt === true || deviceOpt.cpu) {
    const cpuInfo = external_os_.cpus();
    if (cpuInfo && cpuInfo.length) {
      const firstCpu = cpuInfo[0];

      device.processor_count = cpuInfo.length;
      device.cpu_description = firstCpu.model;
      device.processor_frequency = firstCpu.speed;
    }
  }

  return device;
}

/** Mapping of Node's platform names to actual OS names. */
const PLATFORM_NAMES = {
  aix: 'IBM AIX',
  freebsd: 'FreeBSD',
  openbsd: 'OpenBSD',
  sunos: 'SunOS',
  win32: 'Windows',
};

/** Linux version file to check for a distribution. */

/** Mapping of linux release files located in /etc to distributions. */
const LINUX_DISTROS = [
  { name: 'fedora-release', distros: ['Fedora'] },
  { name: 'redhat-release', distros: ['Red Hat Linux', 'Centos'] },
  { name: 'redhat_version', distros: ['Red Hat Linux'] },
  { name: 'SuSE-release', distros: ['SUSE Linux'] },
  { name: 'lsb-release', distros: ['Ubuntu Linux', 'Arch Linux'] },
  { name: 'debian_version', distros: ['Debian'] },
  { name: 'debian_release', distros: ['Debian'] },
  { name: 'arch-release', distros: ['Arch Linux'] },
  { name: 'gentoo-release', distros: ['Gentoo Linux'] },
  { name: 'novell-release', distros: ['SUSE Linux'] },
  { name: 'alpine-release', distros: ['Alpine Linux'] },
];

/** Functions to extract the OS version from Linux release files. */
const LINUX_VERSIONS

 = {
  alpine: content => content,
  arch: content => matchFirst(/distrib_release=(.*)/, content),
  centos: content => matchFirst(/release ([^ ]+)/, content),
  debian: content => content,
  fedora: content => matchFirst(/release (..)/, content),
  mint: content => matchFirst(/distrib_release=(.*)/, content),
  red: content => matchFirst(/release ([^ ]+)/, content),
  suse: content => matchFirst(/VERSION = (.*)\n/, content),
  ubuntu: content => matchFirst(/distrib_release=(.*)/, content),
};

/**
 * Executes a regular expression with one capture group.
 *
 * @param regex A regular expression to execute.
 * @param text Content to execute the RegEx on.
 * @returns The captured string if matched; otherwise undefined.
 */
function matchFirst(regex, text) {
  const match = regex.exec(text);
  return match ? match[1] : undefined;
}

/** Loads the macOS operating system context. */
async function getDarwinInfo() {
  // Default values that will be used in case no operating system information
  // can be loaded. The default version is computed via heuristics from the
  // kernel version, but the build ID is missing.
  const darwinInfo = {
    kernel_version: external_os_.release(),
    name: 'Mac OS X',
    version: `10.${Number(external_os_.release().split('.')[0]) - 4}`,
  };

  try {
    // We try to load the actual macOS version by executing the `sw_vers` tool.
    // This tool should be available on every standard macOS installation. In
    // case this fails, we stick with the values computed above.

    const output = await new Promise((resolve, reject) => {
      (0,external_child_process_namespaceObject.execFile)('/usr/bin/sw_vers', (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });

    darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
    darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
    darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
  } catch (e) {
    // ignore
  }

  return darwinInfo;
}

/** Returns a distribution identifier to look up version callbacks. */
function getLinuxDistroId(name) {
  return name.split(' ')[0].toLowerCase();
}

/** Loads the Linux operating system context. */
async function getLinuxInfo() {
  // By default, we cannot assume anything about the distribution or Linux
  // version. `os.release()` returns the kernel version and we assume a generic
  // "Linux" name, which will be replaced down below.
  const linuxInfo = {
    kernel_version: external_os_.release(),
    name: 'Linux',
  };

  try {
    // We start guessing the distribution by listing files in the /etc
    // directory. This is were most Linux distributions (except Knoppix) store
    // release files with certain distribution-dependent meta data. We search
    // for exactly one known file defined in `LINUX_DISTROS` and exit if none
    // are found. In case there are more than one file, we just stick with the
    // first one.
    const etcFiles = await readDirAsync('/etc');
    const distroFile = LINUX_DISTROS.find(file => etcFiles.includes(file.name));
    if (!distroFile) {
      return linuxInfo;
    }

    // Once that file is known, load its contents. To make searching in those
    // files easier, we lowercase the file contents. Since these files are
    // usually quite small, this should not allocate too much memory and we only
    // hold on to it for a very short amount of time.
    const distroPath = (0,external_path_.join)('/etc', distroFile.name);
    const contents = ((await readFileAsync(distroPath, { encoding: 'utf-8' })) ).toLowerCase();

    // Some Linux distributions store their release information in the same file
    // (e.g. RHEL and Centos). In those cases, we scan the file for an
    // identifier, that basically consists of the first word of the linux
    // distribution name (e.g. "red" for Red Hat). In case there is no match, we
    // just assume the first distribution in our list.
    const { distros } = distroFile;
    linuxInfo.name = distros.find(d => contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];

    // Based on the found distribution, we can now compute the actual version
    // number. This is different for every distribution, so several strategies
    // are computed in `LINUX_VERSIONS`.
    const id = getLinuxDistroId(linuxInfo.name);
    linuxInfo.version = LINUX_VERSIONS[id](contents);
  } catch (e) {
    // ignore
  }

  return linuxInfo;
}

/**
 * Grabs some information about hosting provider based on best effort.
 */
function getCloudResourceContext() {
  if (process.env.VERCEL) {
    // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#system-environment-variables
    return {
      'cloud.provider': 'vercel',
      'cloud.region': process.env.VERCEL_REGION,
    };
  } else if (process.env.AWS_REGION) {
    // https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html
    return {
      'cloud.provider': 'aws',
      'cloud.region': process.env.AWS_REGION,
      'cloud.platform': process.env.AWS_EXECUTION_ENV,
    };
  } else if (process.env.GCP_PROJECT) {
    // https://cloud.google.com/composer/docs/how-to/managing/environment-variables#reserved_variables
    return {
      'cloud.provider': 'gcp',
    };
  } else if (process.env.ALIYUN_REGION_ID) {
    // TODO: find where I found these environment variables - at least gc.github.com returns something
    return {
      'cloud.provider': 'alibaba_cloud',
      'cloud.region': process.env.ALIYUN_REGION_ID,
    };
  } else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) {
    // https://learn.microsoft.com/en-us/azure/app-service/reference-app-settings?tabs=kudu%2Cdotnet#app-environment
    return {
      'cloud.provider': 'azure',
      'cloud.region': process.env.REGION_NAME,
    };
  } else if (process.env.IBM_CLOUD_REGION) {
    // TODO: find where I found these environment variables - at least gc.github.com returns something
    return {
      'cloud.provider': 'ibm_cloud',
      'cloud.region': process.env.IBM_CLOUD_REGION,
    };
  } else if (process.env.TENCENTCLOUD_REGION) {
    // https://www.tencentcloud.com/document/product/583/32748
    return {
      'cloud.provider': 'tencent_cloud',
      'cloud.region': process.env.TENCENTCLOUD_REGION,
      'cloud.account.id': process.env.TENCENTCLOUD_APPID,
      'cloud.availability_zone': process.env.TENCENTCLOUD_ZONE,
    };
  } else if (process.env.NETLIFY) {
    // https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
    return {
      'cloud.provider': 'netlify',
    };
  } else if (process.env.FLY_REGION) {
    // https://fly.io/docs/reference/runtime-environment/
    return {
      'cloud.provider': 'fly.io',
      'cloud.region': process.env.FLY_REGION,
    };
  } else if (process.env.DYNO) {
    // https://devcenter.heroku.com/articles/dynos#local-environment-variables
    return {
      'cloud.provider': 'heroku',
    };
  } else {
    return undefined;
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/requestdata.js




const DEFAULT_INCLUDES = {
  ip: false,
  request: true,
  transaction: true,
  user: true,
};
const DEFAULT_REQUEST_INCLUDES = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
const DEFAULT_USER_INCLUDES = ['id', 'username', 'email'];

/**
 * Sets parameterized route as transaction name e.g.: `GET /users/:id`
 * Also adds more context data on the transaction from the request
 */
function addRequestDataToTransaction(
  transaction,
  req,
  deps,
) {
  if (!transaction) return;
  if (!transaction.metadata.source || transaction.metadata.source === 'url') {
    // Attempt to grab a parameterized route off of the request
    transaction.setName(...extractPathForTransaction(req, { path: true, method: true }));
  }
  transaction.setData('url', req.originalUrl || req.url);
  if (req.baseUrl) {
    transaction.setData('baseUrl', req.baseUrl);
  }
  transaction.setData('query', extractQueryParams(req, deps));
}

/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */
function extractPathForTransaction(
  req,
  options = {},
) {
  const method = req.method && req.method.toUpperCase();

  let path = '';
  let source = 'url';

  // Check to see if there's a parameterized route we can use (as there is in Express)
  if (options.customRoute || req.route) {
    path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
    source = 'route';
  }

  // Otherwise, just take the original URL
  else if (req.originalUrl || req.url) {
    path = (0,url.stripUrlQueryAndFragment)(req.originalUrl || req.url || '');
  }

  let name = '';
  if (options.method && method) {
    name += method;
  }
  if (options.method && options.path) {
    name += ' ';
  }
  if (options.path && path) {
    name += path;
  }

  return [name, source];
}

/** JSDoc */
function extractTransaction(req, type) {
  switch (type) {
    case 'path': {
      return extractPathForTransaction(req, { path: true })[0];
    }
    case 'handler': {
      return (req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name) || '<anonymous>';
    }
    case 'methodPath':
    default: {
      return extractPathForTransaction(req, { path: true, method: true })[0];
    }
  }
}

/** JSDoc */
function extractUserData(
  user

,
  keys,
) {
  const extractedUser = {};
  const attributes = Array.isArray(keys) ? keys : DEFAULT_USER_INCLUDES;

  attributes.forEach(key => {
    if (user && key in user) {
      extractedUser[key] = user[key];
    }
  });

  return extractedUser;
}

/**
 * Normalize data from the request object, accounting for framework differences.
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 * @returns An object containing normalized request data
 */
function extractRequestData(
  req,
  options

,
) {
  const { include = DEFAULT_REQUEST_INCLUDES, deps } = options || {};
  const requestData = {};

  // headers:
  //   node, express, koa, nextjs: req.headers
  const headers = (req.headers || {})

;
  // method:
  //   node, express, koa, nextjs: req.method
  const method = req.method;
  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node, nextjs: req.headers.host
  const host = req.hostname || req.host || headers.host || '<no host>';
  // protocol:
  //   node, nextjs: <n/a>
  //   express, koa: req.protocol
  const protocol = req.protocol === 'https' || (req.socket && req.socket.encrypted) ? 'https' : 'http';
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  const originalUrl = req.originalUrl || req.url || '';
  // absolute url
  const absoluteUrl = `${protocol}://${host}${originalUrl}`;
  include.forEach(key => {
    switch (key) {
      case 'headers': {
        requestData.headers = headers;
        break;
      }
      case 'method': {
        requestData.method = method;
        break;
      }
      case 'url': {
        requestData.url = absoluteUrl;
        break;
      }
      case 'cookies': {
        // cookies:
        //   node, express, koa: req.headers.cookie
        //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.cookies =
          // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
          // come off in v8
          req.cookies || (headers.cookie && deps && deps.cookie && deps.cookie.parse(headers.cookie)) || {};
        break;
      }
      case 'query_string': {
        // query string:
        //   node: req.url (raw)
        //   express, koa, nextjs: req.query
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.query_string = extractQueryParams(req, deps);
        break;
      }
      case 'data': {
        if (method === 'GET' || method === 'HEAD') {
          break;
        }
        // body data:
        //   express, koa, nextjs: req.body
        //
        //   when using node by itself, you have to read the incoming stream(see
        //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
        //   where they're going to store the final result, so they'll have to capture this data themselves
        if (req.body !== undefined) {
          requestData.data = (0,is.isString)(req.body) ? req.body : JSON.stringify(normalize(req.body));
        }
        break;
      }
      default: {
        if ({}.hasOwnProperty.call(req, key)) {
          requestData[key] = (req )[key];
        }
      }
    }
  });

  return requestData;
}

/**
 * Options deciding what parts of the request to use when enhancing an event
 */

/**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 * @param options.deps Injected platform-specific dependencies
 * @hidden
 */
function addRequestDataToEvent(
  event,
  req,
  options,
) {
  const include = {
    ...DEFAULT_INCLUDES,
    ...(options && options.include),
  };

  if (include.request) {
    const extractedRequestData = Array.isArray(include.request)
      ? extractRequestData(req, { include: include.request, deps: options && options.deps })
      : extractRequestData(req, { deps: options && options.deps });

    event.request = {
      ...event.request,
      ...extractedRequestData,
    };
  }

  if (include.user) {
    const extractedUser = req.user && (0,is.isPlainObject)(req.user) ? extractUserData(req.user, include.user) : {};

    if (Object.keys(extractedUser).length) {
      event.user = {
        ...event.user,
        ...extractedUser,
      };
    }
  }

  // client ip:
  //   node, nextjs: req.socket.remoteAddress
  //   express, koa: req.ip
  if (include.ip) {
    const ip = req.ip || (req.socket && req.socket.remoteAddress);
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip,
      };
    }
  }

  if (include.transaction && !event.transaction) {
    // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = extractTransaction(req, include.transaction);
  }

  return event;
}

function extractQueryParams(
  req,
  deps,
) {
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  let originalUrl = req.originalUrl || req.url || '';

  if (!originalUrl) {
    return;
  }

  // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
  // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
  if (originalUrl.startsWith('/')) {
    originalUrl = `http://dogs.are.great${originalUrl}`;
  }

  return (
    req.query ||
    (typeof URL !== undefined && new URL(originalUrl).search.replace('?', '')) ||
    // In Node 8, `URL` isn't in the global scope, so we have to use the built-in module from Node
    (deps && deps.url && deps.url.parse(originalUrl).query) ||
    undefined
  );
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/cookie.js
/**
 * This code was originally copied from the 'cookie` module at v0.5.0 and was simplified for our use case.
 * https://github.com/jshttp/cookie/blob/a0c84147aab6266bdb3996cf4062e93907c0b0fc/index.js
 * It had the following license:
 *
 * (The MIT License)
 *
 * Copyright (c) 2012-2014 Roman Shtylman <shtylman@gmail.com>
 * Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Parses a cookie string
 */
function parseCookie(str) {
  const obj = {};
  let index = 0;

  while (index < str.length) {
    const eqIdx = str.indexOf('=', index);

    // no more cookie pairs
    if (eqIdx === -1) {
      break;
    }

    let endIdx = str.indexOf(';', index);

    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue;
    }

    const key = str.slice(index, eqIdx).trim();

    // only assign once
    if (undefined === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1);
      }

      try {
        obj[key] = val.indexOf('%') !== -1 ? decodeURIComponent(val) : val;
      } catch (e) {
        obj[key] = val;
      }
    }

    index = endIdx + 1;
  }

  return obj;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/requestdata.js





const requestdata_DEFAULT_INCLUDES = {
  ip: false,
  request: true,
  transaction: true,
  user: true,
};
const requestdata_DEFAULT_REQUEST_INCLUDES = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
const requestdata_DEFAULT_USER_INCLUDES = ['id', 'username', 'email'];

/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */
function requestdata_extractPathForTransaction(
  req,
  options = {},
) {
  const method = req.method && req.method.toUpperCase();

  let path = '';
  let source = 'url';

  // Check to see if there's a parameterized route we can use (as there is in Express)
  if (options.customRoute || req.route) {
    path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
    source = 'route';
  }

  // Otherwise, just take the original URL
  else if (req.originalUrl || req.url) {
    path = (0,url.stripUrlQueryAndFragment)(req.originalUrl || req.url || '');
  }

  let name = '';
  if (options.method && method) {
    name += method;
  }
  if (options.method && options.path) {
    name += ' ';
  }
  if (options.path && path) {
    name += path;
  }

  return [name, source];
}

/** JSDoc */
function requestdata_extractTransaction(req, type) {
  switch (type) {
    case 'path': {
      return requestdata_extractPathForTransaction(req, { path: true })[0];
    }
    case 'handler': {
      return (req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name) || '<anonymous>';
    }
    case 'methodPath':
    default: {
      // if exist _reconstructedRoute return that path instead of route.path
      const customRoute = req._reconstructedRoute ? req._reconstructedRoute : undefined;
      return requestdata_extractPathForTransaction(req, { path: true, method: true, customRoute })[0];
    }
  }
}

/** JSDoc */
function requestdata_extractUserData(
  user

,
  keys,
) {
  const extractedUser = {};
  const attributes = Array.isArray(keys) ? keys : requestdata_DEFAULT_USER_INCLUDES;

  attributes.forEach(key => {
    if (user && key in user) {
      extractedUser[key] = user[key];
    }
  });

  return extractedUser;
}

/**
 * Normalize data from the request object
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 *
 * @returns An object containing normalized request data
 */
function requestdata_extractRequestData(
  req,
  options

,
) {
  const { include = requestdata_DEFAULT_REQUEST_INCLUDES } = options || {};
  const requestData = {};

  // headers:
  //   node, express, koa, nextjs: req.headers
  const headers = (req.headers || {})

;
  // method:
  //   node, express, koa, nextjs: req.method
  const method = req.method;
  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node, nextjs: req.headers.host
  const host = req.hostname || req.host || headers.host || '<no host>';
  // protocol:
  //   node, nextjs: <n/a>
  //   express, koa: req.protocol
  const protocol = req.protocol === 'https' || (req.socket && req.socket.encrypted) ? 'https' : 'http';
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  const originalUrl = req.originalUrl || req.url || '';
  // absolute url
  const absoluteUrl = originalUrl.startsWith(protocol) ? originalUrl : `${protocol}://${host}${originalUrl}`;
  include.forEach(key => {
    switch (key) {
      case 'headers': {
        requestData.headers = headers;

        // Remove the Cookie header in case cookie data should not be included in the event
        if (!include.includes('cookies')) {
          delete (requestData.headers ).cookie;
        }

        break;
      }
      case 'method': {
        requestData.method = method;
        break;
      }
      case 'url': {
        requestData.url = absoluteUrl;
        break;
      }
      case 'cookies': {
        // cookies:
        //   node, express, koa: req.headers.cookie
        //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
        requestData.cookies =
          // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
          // come off in v8
          req.cookies || (headers.cookie && parseCookie(headers.cookie)) || {};
        break;
      }
      case 'query_string': {
        // query string:
        //   node: req.url (raw)
        //   express, koa, nextjs: req.query
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        requestData.query_string = requestdata_extractQueryParams(req);
        break;
      }
      case 'data': {
        if (method === 'GET' || method === 'HEAD') {
          break;
        }
        // body data:
        //   express, koa, nextjs: req.body
        //
        //   when using node by itself, you have to read the incoming stream(see
        //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
        //   where they're going to store the final result, so they'll have to capture this data themselves
        if (req.body !== undefined) {
          requestData.data = (0,is.isString)(req.body) ? req.body : JSON.stringify(normalize(req.body));
        }
        break;
      }
      default: {
        if ({}.hasOwnProperty.call(req, key)) {
          requestData[key] = (req )[key];
        }
      }
    }
  });

  return requestData;
}

/**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 *
 * @returns The mutated `Event` object
 */
function requestdata_addRequestDataToEvent(
  event,
  req,
  options,
) {
  const include = {
    ...requestdata_DEFAULT_INCLUDES,
    ...(0,_optionalChain._optionalChain)([options, 'optionalAccess', _ => _.include]),
  };

  if (include.request) {
    const extractedRequestData = Array.isArray(include.request)
      ? requestdata_extractRequestData(req, { include: include.request })
      : requestdata_extractRequestData(req);

    event.request = {
      ...event.request,
      ...extractedRequestData,
    };
  }

  if (include.user) {
    const extractedUser = req.user && (0,is.isPlainObject)(req.user) ? requestdata_extractUserData(req.user, include.user) : {};

    if (Object.keys(extractedUser).length) {
      event.user = {
        ...event.user,
        ...extractedUser,
      };
    }
  }

  // client ip:
  //   node, nextjs: req.socket.remoteAddress
  //   express, koa: req.ip
  if (include.ip) {
    const ip = req.ip || (req.socket && req.socket.remoteAddress);
    if (ip) {
      event.user = {
        ...event.user,
        ip_address: ip,
      };
    }
  }

  if (include.transaction && !event.transaction) {
    // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = requestdata_extractTransaction(req, include.transaction);
  }

  return event;
}

function requestdata_extractQueryParams(req) {
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  let originalUrl = req.originalUrl || req.url || '';

  if (!originalUrl) {
    return;
  }

  // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
  // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
  if (originalUrl.startsWith('/')) {
    originalUrl = `http://dogs.are.great${originalUrl}`;
  }

  return req.query || new external_url_.URL(originalUrl).search.replace('?', '') || undefined;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/requestdata.js



const DEFAULT_OPTIONS = {
  include: {
    cookies: true,
    data: true,
    headers: true,
    ip: false,
    query_string: true,
    url: true,
    user: {
      id: true,
      username: true,
      email: true,
    },
  },
  transactionNamingScheme: 'methodPath',
};

/** Add data about a request to an event. Primarily for use in Node-based SDKs, but included in `@sentry/integrations`
 * so it can be used in cross-platform SDKs like `@sentry/nextjs`. */
class RequestData  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'RequestData';}

  /**
   * @inheritDoc
   */
   __init() {this.name = RequestData.id;}

  /**
   * Function for adding request data to event. Defaults to `addRequestDataToEvent` from `@sentry/node` for now, but
   * left as a property so this integration can be moved to `@sentry/core` as a base class in case we decide to use
   * something similar in browser-based SDKs in the future.
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {RequestData.prototype.__init.call(this);
    this._addRequestData = requestdata_addRequestDataToEvent;
    this._options = {
      ...DEFAULT_OPTIONS,
      ...options,
      include: {
        // @ts-expect-error It's mad because `method` isn't a known `include` key. (It's only here and not set by default in
        // `addRequestDataToEvent` for legacy reasons. TODO (v8): Change that.)
        method: true,
        ...DEFAULT_OPTIONS.include,
        ...options.include,
        user:
          options.include && typeof options.include.user === 'boolean'
            ? options.include.user
            : {
                ...DEFAULT_OPTIONS.include.user,
                // Unclear why TS still thinks `options.include.user` could be a boolean at this point
                ...((options.include || {}).user ),
              },
      },
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    // Note: In the long run, most of the logic here should probably move into the request data utility functions. For
    // the moment it lives here, though, until https://github.com/getsentry/sentry-javascript/issues/5718 is addressed.
    // (TL;DR: Those functions touch many parts of the repo in many different ways, and need to be clened up. Once
    // that's happened, it will be easier to add this logic in without worrying about unexpected side effects.)
    const { transactionNamingScheme } = this._options;

    addGlobalEventProcessor(event => {
      const hub = getCurrentHub();
      const self = hub.getIntegration(RequestData);

      const { sdkProcessingMetadata = {} } = event;
      const req = sdkProcessingMetadata.request;

      // If the globally installed instance of this integration isn't associated with the current hub, `self` will be
      // undefined
      if (!self || !req) {
        return event;
      }

      // The Express request handler takes a similar `include` option to that which can be passed to this integration.
      // If passed there, we store it in `sdkProcessingMetadata`. TODO(v8): Force express and GCP people to use this
      // integration, so that all of this passing and conversion isn't necessary
      const addRequestDataOptions =
        sdkProcessingMetadata.requestDataOptionsFromExpressHandler ||
        sdkProcessingMetadata.requestDataOptionsFromGCPWrapper ||
        convertReqDataIntegrationOptsToAddReqDataOpts(this._options);

      const processedEvent = this._addRequestData(event, req, addRequestDataOptions);

      // Transaction events already have the right `transaction` value
      if (event.type === 'transaction' || transactionNamingScheme === 'handler') {
        return processedEvent;
      }

      // In all other cases, use the request's associated transaction (if any) to overwrite the event's `transaction`
      // value with a high-quality one
      const reqWithTransaction = req ;
      const transaction = reqWithTransaction._sentryTransaction;
      if (transaction) {
        // TODO (v8): Remove the nextjs check and just base it on `transactionNamingScheme` for all SDKs. (We have to
        // keep it the way it is for the moment, because changing the names of transactions in Sentry has the potential
        // to break things like alert rules.)
        const shouldIncludeMethodInTransactionName =
          getSDKName(hub) === 'sentry.javascript.nextjs'
            ? transaction.name.startsWith('/api')
            : transactionNamingScheme !== 'path';

        const [transactionValue] = extractPathForTransaction(req, {
          path: true,
          method: shouldIncludeMethodInTransactionName,
          customRoute: transaction.name,
        });

        processedEvent.transaction = transactionValue;
      }

      return processedEvent;
    });
  }
} RequestData.__initStatic();

/** Convert this integration's options to match what `addRequestDataToEvent` expects */
/** TODO: Can possibly be deleted once https://github.com/getsentry/sentry-javascript/issues/5718 is fixed */
function convertReqDataIntegrationOptsToAddReqDataOpts(
  integrationOptions,
) {
  const {
    transactionNamingScheme,
    include: { ip, user, ...requestOptions },
  } = integrationOptions;

  const requestIncludeKeys = [];
  for (const [key, value] of Object.entries(requestOptions)) {
    if (value) {
      requestIncludeKeys.push(key);
    }
  }

  let addReqDataUserOpt;
  if (user === undefined) {
    addReqDataUserOpt = true;
  } else if (typeof user === 'boolean') {
    addReqDataUserOpt = user;
  } else {
    const userIncludeKeys = [];
    for (const [key, value] of Object.entries(user)) {
      if (value) {
        userIncludeKeys.push(key);
      }
    }
    addReqDataUserOpt = userIncludeKeys;
  }

  return {
    include: {
      ip,
      user: addReqDataUserOpt,
      request: requestIncludeKeys.length !== 0 ? requestIncludeKeys : undefined,
      transaction: transactionNamingScheme,
    },
  };
}

function getSDKName(hub) {
  try {
    // For a long chain like this, it's fewer bytes to combine a try-catch with assuming everything is there than to
    // write out a long chain of `a && a.b && a.b.c && ...`
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return hub.getClient().getOptions()._metadata.sdk.name;
  } catch (err) {
    // In theory we should never get here
    return undefined;
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/localvariables.js




/**
 * Creates a rate limiter
 * @param maxPerSecond Maximum number of calls per second
 * @param enable Callback to enable capture
 * @param disable Callback to disable capture
 * @returns A function to call to increment the rate limiter count
 */
function createRateLimiter(
  maxPerSecond,
  enable,
  disable,
) {
  let count = 0;
  let retrySeconds = 5;
  let disabledTimeout = 0;

  setInterval(() => {
    if (disabledTimeout === 0) {
      if (count > maxPerSecond) {
        retrySeconds *= 2;
        disable(retrySeconds);

        // Cap at one day
        if (retrySeconds > 86400) {
          retrySeconds = 86400;
        }
        disabledTimeout = retrySeconds;
      }
    } else {
      disabledTimeout -= 1;

      if (disabledTimeout === 0) {
        enable();
      }
    }

    count = 0;
  }, 1000).unref();

  return () => {
    count += 1;
  };
}

/** Creates a container for callbacks to be called sequentially */
function createCallbackList(complete) {
  // A collection of callbacks to be executed last to first
  let callbacks = [];

  let completedCalled = false;
  function checkedComplete(result) {
    callbacks = [];
    if (completedCalled) {
      return;
    }
    completedCalled = true;
    complete(result);
  }

  // complete should be called last
  callbacks.push(checkedComplete);

  function add(fn) {
    callbacks.push(fn);
  }

  function next(result) {
    const popped = callbacks.pop() || checkedComplete;

    try {
      popped(result);
    } catch (_) {
      // If there is an error, we still want to call the complete callback
      checkedComplete(result);
    }
  }

  return { add, next };
}

/**
 * Promise API is available as `Experimental` and in Node 19 only.
 *
 * Callback-based API is `Stable` since v14 and `Experimental` since v8.
 * Because of that, we are creating our own `AsyncSession` class.
 *
 * https://nodejs.org/docs/latest-v19.x/api/inspector.html#promises-api
 * https://nodejs.org/docs/latest-v14.x/api/inspector.html
 */
class AsyncSession  {

  /** Throws if inspector API is not available */
   constructor() {
    /*
    TODO: We really should get rid of this require statement below for a couple of reasons:
    1. It makes the integration unusable in the SvelteKit SDK, as it's not possible to use `require`
       in SvelteKit server code (at least not by default).
    2. Throwing in a constructor is bad practice

    More context for a future attempt to fix this:
    We already tried replacing it with import but didn't get it to work because of async problems.
    We still called import in the constructor but assigned to a promise which we "awaited" in
    `configureAndConnect`. However, this broke the Node integration tests as no local variables
    were reported any more. We probably missed a place where we need to await the promise, too.
    */

    // Node can be built without inspector support so this can throw
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Session } = __webpack_require__(96);
    this._session = new Session();
  }

  /** @inheritdoc */
   configureAndConnect(onPause, captureAll) {
    this._session.connect();

    this._session.on('Debugger.paused', event => {
      onPause(event, () => {
        // After the pause work is complete, resume execution or the exception context memory is leaked
        this._session.post('Debugger.resume');
      });
    });

    this._session.post('Debugger.enable');
    this._session.post('Debugger.setPauseOnExceptions', { state: captureAll ? 'all' : 'uncaught' });
  }

   setPauseOnExceptions(captureAll) {
    this._session.post('Debugger.setPauseOnExceptions', { state: captureAll ? 'all' : 'uncaught' });
  }

  /** @inheritdoc */
   getLocalVariables(objectId, complete) {
    this._getProperties(objectId, props => {
      const { add, next } = createCallbackList(complete);

      for (const prop of props) {
        if ((0,_optionalChain._optionalChain)([prop, 'optionalAccess', _2 => _2.value, 'optionalAccess', _3 => _3.objectId]) && (0,_optionalChain._optionalChain)([prop, 'optionalAccess', _4 => _4.value, 'access', _5 => _5.className]) === 'Array') {
          const id = prop.value.objectId;
          add(vars => this._unrollArray(id, prop.name, vars, next));
        } else if ((0,_optionalChain._optionalChain)([prop, 'optionalAccess', _6 => _6.value, 'optionalAccess', _7 => _7.objectId]) && (0,_optionalChain._optionalChain)([prop, 'optionalAccess', _8 => _8.value, 'optionalAccess', _9 => _9.className]) === 'Object') {
          const id = prop.value.objectId;
          add(vars => this._unrollObject(id, prop.name, vars, next));
        } else if ((0,_optionalChain._optionalChain)([prop, 'optionalAccess', _10 => _10.value, 'optionalAccess', _11 => _11.value]) || (0,_optionalChain._optionalChain)([prop, 'optionalAccess', _12 => _12.value, 'optionalAccess', _13 => _13.description])) {
          add(vars => this._unrollOther(prop, vars, next));
        }
      }

      next({});
    });
  }

  /**
   * Gets all the PropertyDescriptors of an object
   */
   _getProperties(objectId, next) {
    this._session.post(
      'Runtime.getProperties',
      {
        objectId,
        ownProperties: true,
      },
      (err, params) => {
        if (err) {
          next([]);
        } else {
          next(params.result);
        }
      },
    );
  }

  /**
   * Unrolls an array property
   */
   _unrollArray(objectId, name, vars, next) {
    this._getProperties(objectId, props => {
      vars[name] = props
        .filter(v => v.name !== 'length' && !isNaN(parseInt(v.name, 10)))
        .sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10))
        .map(v => (0,_optionalChain._optionalChain)([v, 'optionalAccess', _14 => _14.value, 'optionalAccess', _15 => _15.value]));

      next(vars);
    });
  }

  /**
   * Unrolls an object property
   */
   _unrollObject(objectId, name, vars, next) {
    this._getProperties(objectId, props => {
      vars[name] = props
        .map(v => [v.name, (0,_optionalChain._optionalChain)([v, 'optionalAccess', _16 => _16.value, 'optionalAccess', _17 => _17.value])])
        .reduce((obj, [key, val]) => {
          obj[key] = val;
          return obj;
        }, {} );

      next(vars);
    });
  }

  /**
   * Unrolls other properties
   */
   _unrollOther(prop, vars, next) {
    if ((0,_optionalChain._optionalChain)([prop, 'optionalAccess', _18 => _18.value, 'optionalAccess', _19 => _19.value])) {
      vars[prop.name] = prop.value.value;
    } else if ((0,_optionalChain._optionalChain)([prop, 'optionalAccess', _20 => _20.value, 'optionalAccess', _21 => _21.description]) && (0,_optionalChain._optionalChain)([prop, 'optionalAccess', _22 => _22.value, 'optionalAccess', _23 => _23.type]) !== 'function') {
      vars[prop.name] = `<${prop.value.description}>`;
    }

    next(vars);
  }
}

/**
 * When using Vercel pkg, the inspector module is not available.
 * https://github.com/getsentry/sentry-javascript/issues/6769
 */
function tryNewAsyncSession() {
  try {
    return new AsyncSession();
  } catch (e) {
    return undefined;
  }
}

// Add types for the exception event data

/** Could this be an anonymous function? */
function isAnonymous(name) {
  return name !== undefined && ['', '?', '<anonymous>'].includes(name);
}

/** Do the function names appear to match? */
function functionNamesMatch(a, b) {
  return a === b || (isAnonymous(a) && isAnonymous(b));
}

/** Creates a unique hash from stack frames */
function hashFrames(frames) {
  if (frames === undefined) {
    return;
  }

  // Only hash the 10 most recent frames (ie. the last 10)
  return frames.slice(-10).reduce((acc, frame) => `${acc},${frame.function},${frame.lineno},${frame.colno}`, '');
}

/**
 * We use the stack parser to create a unique hash from the exception stack trace
 * This is used to lookup vars when the exception passes through the event processor
 */
function hashFromStack(stackParser, stack) {
  if (stack === undefined) {
    return undefined;
  }

  return hashFrames(stackParser(stack, 1));
}

/**
 * Adds local variables to exception frames
 *
 * Default: 50
 */
class LocalVariables  {
   static __initStatic() {this.id = 'LocalVariables';}

    __init() {this.name = LocalVariables.id;}

    __init2() {this._cachedFrames = new lru.LRUMap(20);}

   constructor(
      _options = {},
      _session = tryNewAsyncSession(),
  ) {this._options = _options;this._session = _session;LocalVariables.prototype.__init.call(this);LocalVariables.prototype.__init2.call(this);}

  /**
   * @inheritDoc
   */
   setupOnce(addGlobalEventProcessor, getCurrentHub) {
    this._setup(addGlobalEventProcessor, (0,_optionalChain._optionalChain)([getCurrentHub, 'call', _24 => _24(), 'access', _25 => _25.getClient, 'call', _26 => _26(), 'optionalAccess', _27 => _27.getOptions, 'call', _28 => _28()]));
  }

  /** Setup in a way that's easier to call from tests */
   _setup(
    addGlobalEventProcessor,
    clientOptions,
  ) {
    if (this._session && (0,_optionalChain._optionalChain)([clientOptions, 'optionalAccess', _29 => _29.includeLocalVariables])) {
      // Only setup this integration if the Node version is >= v18
      // https://github.com/getsentry/sentry-javascript/issues/7697
      const unsupportedNodeVersion = (nodeVersion.NODE_VERSION.major || 0) < 18;

      if (unsupportedNodeVersion) {
        logger.logger.log('The `LocalVariables` integration is only supported on Node >= v18.');
        return;
      }

      const captureAll = this._options.captureAllExceptions !== false;

      this._session.configureAndConnect(
        (ev, complete) =>
          this._handlePaused(clientOptions.stackParser, ev , complete),
        captureAll,
      );

      if (captureAll) {
        const max = this._options.maxExceptionsPerSecond || 50;

        this._rateLimiter = createRateLimiter(
          max,
          () => {
            logger.logger.log('Local variables rate-limit lifted.');
            (0,_optionalChain._optionalChain)([this, 'access', _30 => _30._session, 'optionalAccess', _31 => _31.setPauseOnExceptions, 'call', _32 => _32(true)]);
          },
          seconds => {
            logger.logger.log(
              `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${seconds} seconds.`,
            );
            (0,_optionalChain._optionalChain)([this, 'access', _33 => _33._session, 'optionalAccess', _34 => _34.setPauseOnExceptions, 'call', _35 => _35(false)]);
          },
        );
      }

      addGlobalEventProcessor(async event => this._addLocalVariables(event));
    }
  }

  /**
   * Handle the pause event
   */
   _handlePaused(
    stackParser,
    { params: { reason, data, callFrames } },
    complete,
  ) {
    if (reason !== 'exception' && reason !== 'promiseRejection') {
      complete();
      return;
    }

    (0,_optionalChain._optionalChain)([this, 'access', _36 => _36._rateLimiter, 'optionalCall', _37 => _37()]);

    // data.description contains the original error.stack
    const exceptionHash = hashFromStack(stackParser, (0,_optionalChain._optionalChain)([data, 'optionalAccess', _38 => _38.description]));

    if (exceptionHash == undefined) {
      complete();
      return;
    }

    const { add, next } = createCallbackList(frames => {
      this._cachedFrames.set(exceptionHash, frames);
      complete();
    });

    // Because we're queuing up and making all these calls synchronously, we can potentially overflow the stack
    // For this reason we only attempt to get local variables for the first 5 frames
    for (let i = 0; i < Math.min(callFrames.length, 5); i++) {
      const { scopeChain, functionName, this: obj } = callFrames[i];

      const localScope = scopeChain.find(scope => scope.type === 'local');

      // obj.className is undefined in ESM modules
      const fn = obj.className === 'global' || !obj.className ? functionName : `${obj.className}.${functionName}`;

      if ((0,_optionalChain._optionalChain)([localScope, 'optionalAccess', _39 => _39.object, 'access', _40 => _40.objectId]) === undefined) {
        add(frames => {
          frames[i] = { function: fn };
          next(frames);
        });
      } else {
        const id = localScope.object.objectId;
        add(frames =>
          (0,_optionalChain._optionalChain)([this, 'access', _41 => _41._session, 'optionalAccess', _42 => _42.getLocalVariables, 'call', _43 => _43(id, vars => {
            frames[i] = { function: fn, vars };
            next(frames);
          })]),
        );
      }
    }

    next([]);
  }

  /**
   * Adds local variables event stack frames.
   */
   _addLocalVariables(event) {
    for (const exception of (0,_optionalChain._optionalChain)([event, 'optionalAccess', _44 => _44.exception, 'optionalAccess', _45 => _45.values]) || []) {
      this._addLocalVariablesToException(exception);
    }

    return event;
  }

  /**
   * Adds local variables to the exception stack frames.
   */
   _addLocalVariablesToException(exception) {
    const hash = hashFrames((0,_optionalChain._optionalChain)([exception, 'optionalAccess', _46 => _46.stacktrace, 'optionalAccess', _47 => _47.frames]));

    if (hash === undefined) {
      return;
    }

    // Check if we have local variables for an exception that matches the hash
    // remove is identical to get but also removes the entry from the cache
    const cachedFrames = this._cachedFrames.remove(hash);

    if (cachedFrames === undefined) {
      return;
    }

    const frameCount = (0,_optionalChain._optionalChain)([exception, 'access', _48 => _48.stacktrace, 'optionalAccess', _49 => _49.frames, 'optionalAccess', _50 => _50.length]) || 0;

    for (let i = 0; i < frameCount; i++) {
      // Sentry frames are in reverse order
      const frameIndex = frameCount - i - 1;

      // Drop out if we run out of frames to match up
      if (!(0,_optionalChain._optionalChain)([exception, 'optionalAccess', _51 => _51.stacktrace, 'optionalAccess', _52 => _52.frames, 'optionalAccess', _53 => _53[frameIndex]]) || !cachedFrames[i]) {
        break;
      }

      if (
        // We need to have vars to add
        cachedFrames[i].vars === undefined ||
        // We're not interested in frames that are not in_app because the vars are not relevant
        exception.stacktrace.frames[frameIndex].in_app === false ||
        // The function names need to match
        !functionNamesMatch(exception.stacktrace.frames[frameIndex].function, cachedFrames[i].function)
      ) {
        continue;
      }

      exception.stacktrace.frames[frameIndex].vars = cachedFrames[i].vars;
    }
  }
}LocalVariables.__initStatic();



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/undici/index.js
var undici = __webpack_require__(95);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/sdk.js




















/* eslint-disable max-lines */

const defaultIntegrations = [
  // Common
  new InboundFilters(),
  new FunctionToString(),
  // Native Wrappers
  new Console(),
  new Http(),
  new undici.Undici(),
  // Global Handlers
  new OnUncaughtException(),
  new OnUnhandledRejection(),
  // Event Info
  new ContextLines(),
  new LocalVariables(),
  new Context(),
  new Modules(),
  new RequestData(),
  // Misc
  new LinkedErrors(),
];

/**
 * The Sentry Node SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible in the
 * main entry module. To set context information or send manual events, use the
 * provided methods.
 *
 * @example
 * ```
 *
 * const { init } = require('@sentry/node');
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * const { configureScope } = require('@sentry/node');
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * const { addBreadcrumb } = require('@sentry/node');
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * const Sentry = require('@sentry/node');
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link NodeOptions} for documentation on configuration options.
 */
// eslint-disable-next-line complexity
function init(options = {}) {
  if (isAnrChildProcess()) {
    options.autoSessionTracking = false;
    options.tracesSampleRate = 0;
  }

  const carrier = (0,esm_hub.getMainCarrier)();

  setNodeAsyncContextStrategy();

  const autoloadedIntegrations = (0,_optionalChain._optionalChain)([carrier, 'access', _ => _.__SENTRY__, 'optionalAccess', _2 => _2.integrations]) || [];

  options.defaultIntegrations =
    options.defaultIntegrations === false
      ? []
      : [
          ...(Array.isArray(options.defaultIntegrations) ? options.defaultIntegrations : defaultIntegrations),
          ...autoloadedIntegrations,
        ];

  if (options.dsn === undefined && process.env.SENTRY_DSN) {
    options.dsn = process.env.SENTRY_DSN;
  }

  const sentryTracesSampleRate = process.env.SENTRY_TRACES_SAMPLE_RATE;
  if (options.tracesSampleRate === undefined && sentryTracesSampleRate) {
    const tracesSampleRate = parseFloat(sentryTracesSampleRate);
    if (isFinite(tracesSampleRate)) {
      options.tracesSampleRate = tracesSampleRate;
    }
  }

  if (options.release === undefined) {
    const detectedRelease = getSentryRelease();
    if (detectedRelease !== undefined) {
      options.release = detectedRelease;
    } else {
      // If release is not provided, then we should disable autoSessionTracking
      options.autoSessionTracking = false;
    }
  }

  if (options.environment === undefined && process.env.SENTRY_ENVIRONMENT) {
    options.environment = process.env.SENTRY_ENVIRONMENT;
  }

  if (options.autoSessionTracking === undefined && options.dsn !== undefined) {
    options.autoSessionTracking = true;
  }

  if (options.instrumenter === undefined) {
    options.instrumenter = 'sentry';
  }

  // TODO(v7): Refactor this to reduce the logic above
  const clientOptions = {
    ...options,
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || makeNodeTransport,
  };

  initAndBind(options.clientClass || NodeClient, clientOptions);

  if (options.autoSessionTracking) {
    startSessionTracking();
  }

  updateScopeFromEnvVariables();
}

/**
 * Function that takes an instance of NodeClient and checks if autoSessionTracking option is enabled for that client
 */
function isAutoSessionTrackingEnabled(client) {
  if (client === undefined) {
    return false;
  }
  const clientOptions = client && client.getOptions();
  if (clientOptions && clientOptions.autoSessionTracking !== undefined) {
    return clientOptions.autoSessionTracking;
  }
  return false;
}

/**
 * Returns a release dynamically from environment variables.
 */
function getSentryRelease(fallback) {
  // Always read first as Sentry takes this as precedence
  if (process.env.SENTRY_RELEASE) {
    return process.env.SENTRY_RELEASE;
  }

  // This supports the variable that sentry-webpack-plugin injects
  if (worldwide.GLOBAL_OBJ.SENTRY_RELEASE && worldwide.GLOBAL_OBJ.SENTRY_RELEASE.id) {
    return worldwide.GLOBAL_OBJ.SENTRY_RELEASE.id;
  }

  return (
    // GitHub Actions - https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables
    process.env.GITHUB_SHA ||
    // Netlify - https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    process.env.COMMIT_REF ||
    // Vercel - https://vercel.com/docs/v2/build-step#system-environment-variables
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_GITHUB_COMMIT_SHA ||
    process.env.VERCEL_GITLAB_COMMIT_SHA ||
    process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
    // Zeit (now known as Vercel)
    process.env.ZEIT_GITHUB_COMMIT_SHA ||
    process.env.ZEIT_GITLAB_COMMIT_SHA ||
    process.env.ZEIT_BITBUCKET_COMMIT_SHA ||
    fallback
  );
}

/** Node.js stack parser */
const defaultStackParser = createStackParser(nodeStackLineParser(getModuleFromFilename));

/**
 * Enable automatic Session Tracking for the node process.
 */
function startSessionTracking() {
  const hub = (0,esm_hub.getCurrentHub)();
  hub.startSession();
  // Emitted in the case of healthy sessions, error of `mechanism.handled: true` and unhandledrejections because
  // The 'beforeExit' event is not emitted for conditions causing explicit termination,
  // such as calling process.exit() or uncaught exceptions.
  // Ref: https://nodejs.org/api/process.html#process_event_beforeexit
  process.on('beforeExit', () => {
    const session = hub.getScope().getSession();
    const terminalStates = ['exited', 'crashed'];
    // Only call endSession, if the Session exists on Scope and SessionStatus is not a
    // Terminal Status i.e. Exited or Crashed because
    // "When a session is moved away from ok it must not be updated anymore."
    // Ref: https://develop.sentry.dev/sdk/sessions/
    if (session && !terminalStates.includes(session.status)) hub.endSession();
  });
}

/**
 * Update scope and propagation context based on environmental variables.
 *
 * See https://github.com/getsentry/rfcs/blob/main/text/0071-continue-trace-over-process-boundaries.md
 * for more details.
 */
function updateScopeFromEnvVariables() {
  const sentryUseEnvironment = (process.env.SENTRY_USE_ENVIRONMENT || '').toLowerCase();
  if (!['false', 'n', 'no', 'off', '0'].includes(sentryUseEnvironment)) {
    const sentryTraceEnv = process.env.SENTRY_TRACE;
    const baggageEnv = process.env.SENTRY_BAGGAGE;
    const { propagationContext } = (0,tracing.tracingContextFromHeaders)(sentryTraceEnv, baggageEnv);
    (0,esm_hub.getCurrentHub)().getScope().setPropagationContext(propagationContext);
  }
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/utils.js



/**
 * Recursively read the contents of a directory.
 *
 * @param targetDir Absolute or relative path of the directory to scan. All returned paths will be relative to this
 * directory.
 * @returns Array holding all relative paths
 */
function deepReadDirSync(targetDir) {
  const targetDirAbsPath = external_path_.resolve(targetDir);

  if (!external_fs_.existsSync(targetDirAbsPath)) {
    throw new Error(`Cannot read contents of ${targetDirAbsPath}. Directory does not exist.`);
  }

  if (!external_fs_.statSync(targetDirAbsPath).isDirectory()) {
    throw new Error(`Cannot read contents of ${targetDirAbsPath}, because it is not a directory.`);
  }

  // This does the same thing as its containing function, `deepReadDirSync` (except that - purely for convenience - it
  // deals in absolute paths rather than relative ones). We need this to be separate from the outer function to preserve
  // the difference between `targetDirAbsPath` and `currentDirAbsPath`.
  const deepReadCurrentDir = (currentDirAbsPath) => {
    return external_fs_.readdirSync(currentDirAbsPath).reduce((absPaths, itemName) => {
      const itemAbsPath = external_path_.join(currentDirAbsPath, itemName);

      if (external_fs_.statSync(itemAbsPath).isDirectory()) {
        return absPaths.concat(deepReadCurrentDir(itemAbsPath));
      }

      absPaths.push(itemAbsPath);
      return absPaths;
    }, []);
  };

  return deepReadCurrentDir(targetDirAbsPath).map(absPath => external_path_.relative(targetDirAbsPath, absPath));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/requestDataDeprecated.js


/**
 * @deprecated `Handlers.ExpressRequest` is deprecated and will be removed in v8. Use `PolymorphicRequest` instead.
 */

/**
 * Normalizes data from the request object, accounting for framework differences.
 *
 * @deprecated `Handlers.extractRequestData` is deprecated and will be removed in v8. Use `extractRequestData` instead.
 *
 * @param req The request object from which to extract data
 * @param keys An optional array of keys to include in the normalized data.
 * @returns An object containing normalized request data
 */
function requestDataDeprecated_extractRequestData(req, keys) {
  return requestdata_extractRequestData(req, { include: keys });
}

/**
 * Options deciding what parts of the request to use when enhancing an event
 *
 * @deprecated `Handlers.ParseRequestOptions` is deprecated and will be removed in v8. Use
 * `AddRequestDataToEventOptions` in `@sentry/utils` instead.
 */

/**
 * Enriches passed event with request data.
 *
 * @deprecated `Handlers.parseRequest` is deprecated and will be removed in v8. Use `addRequestDataToEvent` instead.
 *
 * @param event Will be mutated and enriched with req data
 * @param req Request object
 * @param options object containing flags to enable functionality
 * @hidden
 */
function parseRequest(event, req, options = {}) {
  return requestdata_addRequestDataToEvent(event, req, { include: options });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/handlers.js







/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Express-compatible tracing handler.
 * @see Exposed as `Handlers.tracingHandler`
 */
function tracingHandler()

 {
  return function sentryTracingMiddleware(
    req,
    res,
    next,
  ) {
    const hub = (0,esm_hub.getCurrentHub)();
    const options = (0,_optionalChain._optionalChain)([hub, 'access', _ => _.getClient, 'call', _2 => _2(), 'optionalAccess', _3 => _3.getOptions, 'call', _4 => _4()]);

    if (
      !options ||
      options.instrumenter !== 'sentry' ||
      (0,_optionalChain._optionalChain)([req, 'access', _5 => _5.method, 'optionalAccess', _6 => _6.toUpperCase, 'call', _7 => _7()]) === 'OPTIONS' ||
      (0,_optionalChain._optionalChain)([req, 'access', _8 => _8.method, 'optionalAccess', _9 => _9.toUpperCase, 'call', _10 => _10()]) === 'HEAD'
    ) {
      return next();
    }

    const sentryTrace = req.headers && (0,is.isString)(req.headers['sentry-trace']) ? req.headers['sentry-trace'] : undefined;
    const baggage = (0,_optionalChain._optionalChain)([req, 'access', _11 => _11.headers, 'optionalAccess', _12 => _12.baggage]);
    const { traceparentData, dynamicSamplingContext, propagationContext } = (0,tracing.tracingContextFromHeaders)(
      sentryTrace,
      baggage,
    );
    hub.getScope().setPropagationContext(propagationContext);

    if (!hasTracingEnabled(options)) {
      return next();
    }

    const [name, source] = extractPathForTransaction(req, { path: true, method: true });
    const transaction = startTransaction(
      {
        name,
        op: 'http.server',
        origin: 'auto.http.node.tracingHandler',
        ...traceparentData,
        metadata: {
          dynamicSamplingContext: traceparentData && !dynamicSamplingContext ? {} : dynamicSamplingContext,
          // The request should already have been stored in `scope.sdkProcessingMetadata` (which will become
          // `event.sdkProcessingMetadata` the same way the metadata here will) by `sentryRequestMiddleware`, but on the
          // off chance someone is using `sentryTracingMiddleware` without `sentryRequestMiddleware`, it doesn't hurt to
          // be sure
          request: req,
          source,
        },
      },
      // extra context passed to the tracesSampler
      { request: requestdata_extractRequestData(req) },
    );

    // We put the transaction on the scope so users can attach children to it
    hub.configureScope(scope => {
      scope.setSpan(transaction);
    });

    // We also set __sentry_transaction on the response so people can grab the transaction there to add
    // spans to it later.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (res ).__sentry_transaction = transaction;

    res.once('finish', () => {
      // Push `transaction.finish` to the next event loop so open spans have a chance to finish before the transaction
      // closes
      setImmediate(() => {
        addRequestDataToTransaction(transaction, req);
        transaction.setHttpStatus(res.statusCode);
        transaction.finish();
      });
    });

    next();
  };
}

/**
 * Backwards compatibility shim which can be removed in v8. Forces the given options to follow the
 * `AddRequestDataToEventOptions` interface.
 *
 * TODO (v8): Get rid of this, and stop passing `requestDataOptionsFromExpressHandler` to `setSDKProcessingMetadata`.
 */
function convertReqHandlerOptsToAddReqDataOpts(
  reqHandlerOptions = {},
) {
  let addRequestDataOptions;

  if ('include' in reqHandlerOptions) {
    addRequestDataOptions = { include: reqHandlerOptions.include };
  } else {
    // eslint-disable-next-line deprecation/deprecation
    const { ip, request, transaction, user } = reqHandlerOptions ;

    if (ip || request || transaction || user) {
      addRequestDataOptions = { include: (0,object.dropUndefinedKeys)({ ip, request, transaction, user }) };
    }
  }

  return addRequestDataOptions;
}

/**
 * Express compatible request handler.
 * @see Exposed as `Handlers.requestHandler`
 */
function requestHandler(
  options,
) {
  // TODO (v8): Get rid of this
  const requestDataOptions = convertReqHandlerOptsToAddReqDataOpts(options);

  const currentHub = (0,esm_hub.getCurrentHub)();
  const client = currentHub.getClient();
  // Initialise an instance of SessionFlusher on the client when `autoSessionTracking` is enabled and the
  // `requestHandler` middleware is used indicating that we are running in SessionAggregates mode
  if (client && isAutoSessionTrackingEnabled(client)) {
    client.initSessionFlusher();

    // If Scope contains a Single mode Session, it is removed in favor of using Session Aggregates mode
    const scope = currentHub.getScope();
    if (scope.getSession()) {
      scope.setSession();
    }
  }

  return function sentryRequestMiddleware(
    req,
    res,
    next,
  ) {
    if (options && options.flushTimeout && options.flushTimeout > 0) {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      const _end = res.end;
      res.end = function (chunk, encoding, cb) {
        void flush(options.flushTimeout)
          .then(() => {
            _end.call(this, chunk, encoding, cb);
          })
          .then(null, e => {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error(e);
            _end.call(this, chunk, encoding, cb);
          });
      };
    }
    (0,esm_hub.runWithAsyncContext)(() => {
      const currentHub = (0,esm_hub.getCurrentHub)();
      currentHub.configureScope(scope => {
        scope.setSDKProcessingMetadata({
          request: req,
          // TODO (v8): Stop passing this
          requestDataOptionsFromExpressHandler: requestDataOptions,
        });

        const client = currentHub.getClient();
        if (isAutoSessionTrackingEnabled(client)) {
          const scope = currentHub.getScope();
          // Set `status` of `RequestSession` to Ok, at the beginning of the request
          scope.setRequestSession({ status: 'ok' });
        }
      });

      res.once('finish', () => {
        const client = currentHub.getClient();
        if (isAutoSessionTrackingEnabled(client)) {
          setImmediate(() => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (client && (client )._captureRequestSession) {
              // Calling _captureRequestSession to capture request session at the end of the request by incrementing
              // the correct SessionAggregates bucket i.e. crashed, errored or exited
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              (client )._captureRequestSession();
            }
          });
        }
      });
      next();
    });
  };
}

/** JSDoc */

/** JSDoc */
function getStatusCodeFromResponse(error) {
  const statusCode = error.status || error.statusCode || error.status_code || (error.output && error.output.statusCode);
  return statusCode ? parseInt(statusCode , 10) : 500;
}

/** Returns true if response code is internal server error */
function defaultShouldHandleError(error) {
  const status = getStatusCodeFromResponse(error);
  return status >= 500;
}

/**
 * Express compatible error handler.
 * @see Exposed as `Handlers.errorHandler`
 */
function errorHandler(options

)

 {
  return function sentryErrorMiddleware(
    error,
    _req,
    res,
    next,
  ) {
    const shouldHandleError = (options && options.shouldHandleError) || defaultShouldHandleError;

    if (shouldHandleError(error)) {
      withScope(_scope => {
        // The request should already have been stored in `scope.sdkProcessingMetadata` by `sentryRequestMiddleware`,
        // but on the off chance someone is using `sentryErrorMiddleware` without `sentryRequestMiddleware`, it doesn't
        // hurt to be sure
        _scope.setSDKProcessingMetadata({ request: _req });

        // For some reason we need to set the transaction on the scope again
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const transaction = (res ).__sentry_transaction ;
        if (transaction && _scope.getSpan() === undefined) {
          _scope.setSpan(transaction);
        }

        const client = (0,esm_hub.getCurrentHub)().getClient();
        if (client && isAutoSessionTrackingEnabled(client)) {
          // Check if the `SessionFlusher` is instantiated on the client to go into this branch that marks the
          // `requestSession.status` as `Crashed`, and this check is necessary because the `SessionFlusher` is only
          // instantiated when the the`requestHandler` middleware is initialised, which indicates that we should be
          // running in SessionAggregates mode
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const isSessionAggregatesMode = (client )._sessionFlusher !== undefined;
          if (isSessionAggregatesMode) {
            const requestSession = _scope.getRequestSession();
            // If an error bubbles to the `errorHandler`, then this is an unhandled error, and should be reported as a
            // Crashed session. The `_requestSession.status` is checked to ensure that this error is happening within
            // the bounds of a request, and if so the status is updated
            if (requestSession && requestSession.status !== undefined) {
              requestSession.status = 'crashed';
            }
          }
        }

        _scope.addEventProcessor(event => {
          (0,misc.addExceptionMechanism)(event, { type: 'middleware', handled: false });
          return event;
        });

        const eventId = captureException(error);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (res ).sentry = eventId;
        next(error);
      });

      return;
    }

    next(error);
  };
}

/**
 * Sentry tRPC middleware that names the handling transaction after the called procedure.
 *
 * Use the Sentry tRPC middleware in combination with the Sentry server integration,
 * e.g. Express Request Handlers or Next.js SDK.
 */
function trpcMiddleware(options = {}) {
  return function ({ path, type, next, rawInput }) {
    const hub = (0,esm_hub.getCurrentHub)();
    const clientOptions = (0,_optionalChain._optionalChain)([hub, 'access', _13 => _13.getClient, 'call', _14 => _14(), 'optionalAccess', _15 => _15.getOptions, 'call', _16 => _16()]);
    const sentryTransaction = hub.getScope().getTransaction();

    if (sentryTransaction) {
      sentryTransaction.setName(`trpc/${path}`, 'route');
      sentryTransaction.op = 'rpc.server';

      const trpcContext = {
        procedure_type: type,
      };

      if (options.attachRpcInput !== undefined ? options.attachRpcInput : (0,_optionalChain._optionalChain)([clientOptions, 'optionalAccess', _17 => _17.sendDefaultPii])) {
        trpcContext.input = normalize(rawInput);
      }

      sentryTransaction.setContext('trpc', trpcContext);
    }

    return next();
  };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/integrations/index.js












// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/node.js + 1 modules
var esm_node = __webpack_require__(58);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/utils/node-utils.js


/**
 * Check if Sentry auto-instrumentation should be disabled.
 *
 * @param getCurrentHub A method to fetch the current hub
 * @returns boolean
 */
function shouldDisableAutoInstrumentation(getCurrentHub) {
  const clientOptions = (0,_optionalChain._optionalChain)([getCurrentHub, 'call', _ => _(), 'access', _2 => _2.getClient, 'call', _3 => _3(), 'optionalAccess', _4 => _4.getOptions, 'call', _5 => _5()]);
  const instrumenter = (0,_optionalChain._optionalChain)([clientOptions, 'optionalAccess', _6 => _6.instrumenter]) || 'sentry';

  return instrumenter !== 'sentry';
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/apollo.js




/** Tracing integration for Apollo */
class Apollo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Apollo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(
    options = {
      useNestjs: false,
    },
  ) {
    this.name = Apollo.id;
    this._useNest = !!options.useNestjs;
  }

  /** @inheritdoc */
   loadDependency() {
    if (this._useNest) {
      this._module = this._module || (0,esm_node.loadModule)('@nestjs/graphql');
    } else {
      this._module = this._module || (0,esm_node.loadModule)('apollo-server-core');
    }

    return this._module;
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Apollo Integration is skipped because of instrumenter configuration.');
      return;
    }

    if (this._useNest) {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Apollo-NestJS Integration was unable to require @nestjs/graphql package.');
        return;
      }

      /**
       * Iterate over resolvers of NestJS ResolversExplorerService before schemas are constructed.
       */
      (0,object.fill)(
        pkg.GraphQLFactory.prototype,
        'mergeWithSchema',
        function (orig) {
          return function (

            ...args
          ) {
            (0,object.fill)(this.resolversExplorerService, 'explore', function (orig) {
              return function () {
                const resolvers = (0,misc.arrayify)(orig.call(this));

                const instrumentedResolvers = instrumentResolvers(resolvers, getCurrentHub);

                return instrumentedResolvers;
              };
            });

            return orig.call(this, ...args);
          };
        },
      );
    } else {
      const pkg = this.loadDependency();

      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Apollo Integration was unable to require apollo-server-core package.');
        return;
      }

      /**
       * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
       */
      (0,object.fill)(pkg.ApolloServerBase.prototype, 'constructSchema', function (orig) {
        return function (

) {
          if (!this.config.resolvers) {
            if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
              if (this.config.schema) {
                logger.logger.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.' +
                    'If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.',
                );
                logger.logger.warn();
              } else if (this.config.modules) {
                logger.logger.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.',
                );
              }

              logger.logger.error('Skipping tracing as no resolvers found on the `ApolloServer` instance.');
            }

            return orig.call(this);
          }

          const resolvers = (0,misc.arrayify)(this.config.resolvers);

          this.config.resolvers = instrumentResolvers(resolvers, getCurrentHub);

          return orig.call(this);
        };
      });
    }
  }
}Apollo.__initStatic();

function instrumentResolvers(resolvers, getCurrentHub) {
  return resolvers.map(model => {
    Object.keys(model).forEach(resolverGroupName => {
      Object.keys(model[resolverGroupName]).forEach(resolverName => {
        if (typeof model[resolverGroupName][resolverName] !== 'function') {
          return;
        }

        wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
      });
    });

    return model;
  });
}

/**
 * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
 */
function wrapResolver(
  model,
  resolverGroupName,
  resolverName,
  getCurrentHub,
) {
  (0,object.fill)(model[resolverGroupName], resolverName, function (orig) {
    return function ( ...args) {
      const scope = getCurrentHub().getScope();
      const parentSpan = scope.getSpan();
      const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
        description: `${resolverGroupName}.${resolverName}`,
        op: 'graphql.resolve',
        origin: 'auto.graphql.apollo',
      })]);

      const rv = orig.call(this, ...args);

      if ((0,is.isThenable)(rv)) {
        return rv.then((res) => {
          (0,_optionalChain._optionalChain)([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
          return res;
        });
      }

      (0,_optionalChain._optionalChain)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);

      return rv;
    };
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/express.js




/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
class Express  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Express';}

  /**
   * @inheritDoc
   */

  /**
   * Express App instance
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Express.id;
    this._router = options.router || options.app;
    this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (!this._router) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('ExpressIntegration is missing an Express instance');
      return;
    }

    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Express Integration is skipped because of instrumenter configuration.');
      return;
    }

    instrumentMiddlewares(this._router, this._methods);
    instrumentRouter(this._router );
  }
}Express.__initStatic();

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
  const arity = fn.length;

  switch (arity) {
    case 2: {
      return function ( req, res) {
        const transaction = res.__sentry_transaction;
        if (transaction) {
          const span = transaction.startChild({
            description: fn.name,
            op: `middleware.express.${method}`,
            origin: 'auto.middleware.express',
          });
          res.once('finish', () => {
            span.finish();
          });
        }
        return fn.call(this, req, res);
      };
    }
    case 3: {
      return function (

        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_optionalChain._optionalChain)([transaction, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
          description: fn.name,
          op: `middleware.express.${method}`,
          origin: 'auto.middleware.express',
        })]);
        fn.call(this, req, res, function ( ...args) {
          (0,_optionalChain._optionalChain)([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
          next.call(this, ...args);
        });
      };
    }
    case 4: {
      return function (

        err,
        req,
        res,
        next,
      ) {
        const transaction = res.__sentry_transaction;
        const span = (0,_optionalChain._optionalChain)([transaction, 'optionalAccess', _6 => _6.startChild, 'call', _7 => _7({
          description: fn.name,
          op: `middleware.express.${method}`,
          origin: 'auto.middleware.express',
        })]);
        fn.call(this, err, req, res, function ( ...args) {
          (0,_optionalChain._optionalChain)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
          next.call(this, ...args);
        });
      };
    }
    default: {
      throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
    }
  }
}

/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
  return args.map((arg) => {
    if (typeof arg === 'function') {
      return wrap(arg, method);
    }

    if (Array.isArray(arg)) {
      return arg.map((a) => {
        if (typeof a === 'function') {
          return wrap(a, method);
        }
        return a;
      });
    }

    return arg;
  });
}

/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
  const originalCallback = router[method];

  router[method] = function (...args) {
    return originalCallback.call(this, ...wrapMiddlewareArgs(args, method));
  };

  return router;
}

/**
 * Patches original router methods
 */
function instrumentMiddlewares(router, methods = []) {
  methods.forEach((method) => patchMiddleware(router, method));
}

/**
 * Patches the prototype of Express.Router to accumulate the resolved route
 * if a layer instance's `match` function was called and it returned a successful match.
 *
 * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
 *
 * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
 */
function instrumentRouter(appOrRouter) {
  // This is how we can distinguish between app and routers
  const isApp = 'settings' in appOrRouter;

  // In case the app's top-level router hasn't been initialized yet, we have to do it now
  if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) {
    appOrRouter.lazyrouter();
  }

  const router = isApp ? appOrRouter._router : appOrRouter;

  if (!router) {
    /*
    If we end up here, this means likely that this integration is used with Express 3 or Express 5.
    For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
    we'd need to make more changes to the routing instrumentation because the router is no longer part of
    the Express core package but maintained in its own package. The new router has different function
    signatures and works slightly differently, demanding more changes than just taking the router from
    `app.router` instead of `app._router`.
    @see https://github.com/pillarjs/router

    TODO: Proper Express 5 support
    */
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.debug('Cannot instrument router for URL Parameterization (did not find a valid router).');
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.debug('Routing instrumentation is currently only supported in Express 4.');
    return;
  }

  const routerProto = Object.getPrototypeOf(router) ;

  const originalProcessParams = routerProto.process_params;
  routerProto.process_params = function process_params(
    layer,
    called,
    req,
    res,
    done,
  ) {
    // Base case: We're in the first part of the URL (thus we start with the root '/')
    if (!req._reconstructedRoute) {
      req._reconstructedRoute = '';
    }

    // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
    const { layerRoutePath, isRegex, isArray, numExtraSegments } = getLayerRoutePathInfo(layer);

    if (layerRoutePath || isRegex || isArray) {
      req._hasParameters = true;
    }

    // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
    let partialRoute;

    if (layerRoutePath) {
      partialRoute = layerRoutePath;
    } else {
      /**
       * prevent duplicate segment in _reconstructedRoute param if router match multiple routes before final path
       * example:
       * original url: /api/v1/1234
       * prevent: /api/api/v1/:userId
       * router structure
       * /api -> middleware
       * /api/v1 -> middleware
       * /1234 -> endpoint with param :userId
       * final _reconstructedRoute is /api/v1/:userId
       */
      partialRoute = preventDuplicateSegments(req.originalUrl, req._reconstructedRoute, layer.path) || '';
    }

    // Normalize the partial route so that it doesn't contain leading or trailing slashes
    // and exclude empty or '*' wildcard routes.
    // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
    // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
    // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
    const finalPartialRoute = partialRoute
      .split('/')
      .filter(segment => segment.length > 0 && (isRegex || isArray || !segment.includes('*')))
      .join('/');

    // If we found a valid partial URL, we append it to the reconstructed route
    if (finalPartialRoute && finalPartialRoute.length > 0) {
      // If the partial route is from a regex route, we append a '/' to close the regex
      req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? '/' : ''}`;
    }

    // Now we check if we are in the "last" part of the route. We determine this by comparing the
    // number of URL segments from the original URL to that of our reconstructed parameterized URL.
    // If we've reached our final destination, we update the transaction name.
    const urlLength = (0,url.getNumberOfUrlSegments)((0,url.stripUrlQueryAndFragment)(req.originalUrl || '')) + numExtraSegments;
    const routeLength = (0,url.getNumberOfUrlSegments)(req._reconstructedRoute);

    if (urlLength === routeLength) {
      if (!req._hasParameters) {
        if (req._reconstructedRoute !== req.originalUrl) {
          req._reconstructedRoute = req.originalUrl ? (0,url.stripUrlQueryAndFragment)(req.originalUrl) : req.originalUrl;
        }
      }

      const transaction = res.__sentry_transaction;
      if (transaction && transaction.metadata.source !== 'custom') {
        // If the request URL is '/' or empty, the reconstructed route will be empty.
        // Therefore, we fall back to setting the final route to '/' in this case.
        const finalRoute = req._reconstructedRoute || '/';

        transaction.setName(...extractPathForTransaction(req, { path: true, method: true, customRoute: finalRoute }));
      }
    }

    return originalProcessParams.call(this, layer, called, req, res, done);
  };
}

/**
 * Recreate layer.route.path from layer.regexp and layer.keys.
 * Works until express.js used package path-to-regexp@0.1.7
 * or until layer.keys contain offset attribute
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns string in layer.route.path structure 'router/:pathParam' or undefined
 */
const extractOriginalRoute = (
  path,
  regexp,
  keys,
) => {
  if (!path || !regexp || !keys || Object.keys(keys).length === 0 || !(0,_optionalChain._optionalChain)([keys, 'access', _10 => _10[0], 'optionalAccess', _11 => _11.offset])) {
    return undefined;
  }

  const orderedKeys = keys.sort((a, b) => a.offset - b.offset);

  // add d flag for getting indices from regexp result
  const pathRegex = new RegExp(regexp, `${regexp.flags}d`);
  /**
   * use custom type cause of TS error with missing indices in RegExpExecArray
   */
  const execResult = pathRegex.exec(path) ;

  if (!execResult || !execResult.indices) {
    return undefined;
  }
  /**
   * remove first match from regex cause contain whole layer.path
   */
  const [, ...paramIndices] = execResult.indices;

  if (paramIndices.length !== orderedKeys.length) {
    return undefined;
  }
  let resultPath = path;
  let indexShift = 0;

  /**
   * iterate param matches from regexp.exec
   */
  paramIndices.forEach((item, index) => {
    /** check if offsets is define because in some cases regex d flag returns undefined */
    if (item) {
      const [startOffset, endOffset] = item;
      /**
       * isolate part before param
       */
      const substr1 = resultPath.substring(0, startOffset - indexShift);
      /**
       * define paramName as replacement in format :pathParam
       */
      const replacement = `:${orderedKeys[index].name}`;

      /**
       * isolate part after param
       */
      const substr2 = resultPath.substring(endOffset - indexShift);

      /**
       * recreate original path but with param replacement
       */
      resultPath = substr1 + replacement + substr2;

      /**
       * calculate new index shift after resultPath was modified
       */
      indexShift = indexShift + (endOffset - startOffset - replacement.length);
    }
  });

  return resultPath;
};

/**
 * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
 * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
 * returns extra information about the route, such as if the route is defined as regex or as an array.
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns an object containing the stringified route, a flag determining if the route was a regex
 *          and the number of extra segments to the matched path that are additionally in the route,
 *          if the route was an array (defaults to 0).
 */
function getLayerRoutePathInfo(layer) {
  let lrp = (0,_optionalChain._optionalChain)([layer, 'access', _12 => _12.route, 'optionalAccess', _13 => _13.path]);

  const isRegex = (0,is.isRegExp)(lrp);
  const isArray = Array.isArray(lrp);

  if (!lrp) {
    // parse node.js major version
    const [major] = process.versions.node.split('.').map(Number);

    // allow call extractOriginalRoute only if node version support Regex d flag, node 16+
    if (major >= 16) {
      /**
       * If lrp does not exist try to recreate original layer path from route regexp
       */
      lrp = extractOriginalRoute(layer.path, layer.regexp, layer.keys);
    }
  }

  if (!lrp) {
    return { isRegex, isArray, numExtraSegments: 0 };
  }

  const numExtraSegments = isArray
    ? Math.max(getNumberOfArrayUrlSegments(lrp ) - (0,url.getNumberOfUrlSegments)(layer.path || ''), 0)
    : 0;

  const layerRoutePath = getLayerRoutePathString(isArray, lrp);

  return { layerRoutePath, isRegex, isArray, numExtraSegments };
}

/**
 * Returns the number of URL segments in an array of routes
 *
 * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
 */
function getNumberOfArrayUrlSegments(routesArray) {
  return routesArray.reduce((accNumSegments, currentRoute) => {
    // array members can be a RegEx -> convert them toString
    return accNumSegments + (0,url.getNumberOfUrlSegments)(currentRoute.toString());
  }, 0);
}

/**
 * Extracts and returns the stringified version of the layers route path
 * Handles route arrays (by joining the paths together) as well as RegExp and normal
 * string values (in the latter case the toString conversion is technically unnecessary but
 * it doesn't hurt us either).
 */
function getLayerRoutePathString(isArray, lrp) {
  if (isArray) {
    return (lrp ).map(r => r.toString()).join(',');
  }
  return lrp && lrp.toString();
}

/**
 * remove duplicate segment contain in layerPath against reconstructedRoute,
 * and return only unique segment that can be added into reconstructedRoute
 */
function preventDuplicateSegments(
  originalUrl,
  reconstructedRoute,
  layerPath,
) {
  const originalUrlSplit = (0,_optionalChain._optionalChain)([originalUrl, 'optionalAccess', _14 => _14.split, 'call', _15 => _15('/'), 'access', _16 => _16.filter, 'call', _17 => _17(v => !!v)]);
  let tempCounter = 0;
  const currentOffset = (0,_optionalChain._optionalChain)([reconstructedRoute, 'optionalAccess', _18 => _18.split, 'call', _19 => _19('/'), 'access', _20 => _20.filter, 'call', _21 => _21(v => !!v), 'access', _22 => _22.length]) || 0;
  const result = (0,_optionalChain._optionalChain)([layerPath
, 'optionalAccess', _23 => _23.split, 'call', _24 => _24('/')
, 'access', _25 => _25.filter, 'call', _26 => _26(segment => {
      if ((0,_optionalChain._optionalChain)([originalUrlSplit, 'optionalAccess', _27 => _27[currentOffset + tempCounter]]) === segment) {
        tempCounter += 1;
        return true;
      }
      return false;
    })
, 'access', _28 => _28.join, 'call', _29 => _29('/')]);
  return result;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/graphql.js




/** Tracing integration for graphql package */
class GraphQL  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'GraphQL';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = GraphQL.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,esm_node.loadModule)('graphql/execution/execute.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('GraphQL Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('GraphQL Integration was unable to require graphql/execution package.');
      return;
    }

    (0,object.fill)(pkg, 'execute', function (orig) {
      return function ( ...args) {
        const scope = getCurrentHub().getScope();
        const parentSpan = scope.getSpan();

        const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
          description: 'execute',
          op: 'graphql.execute',
          origin: 'auto.graphql.graphql',
        })]);

        (0,_optionalChain._optionalChain)([scope, 'optionalAccess', _4 => _4.setSpan, 'call', _5 => _5(span)]);

        const rv = orig.call(this, ...args);

        if ((0,is.isThenable)(rv)) {
          return rv.then((res) => {
            (0,_optionalChain._optionalChain)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            (0,_optionalChain._optionalChain)([scope, 'optionalAccess', _8 => _8.setSpan, 'call', _9 => _9(parentSpan)]);

            return res;
          });
        }

        (0,_optionalChain._optionalChain)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
        (0,_optionalChain._optionalChain)([scope, 'optionalAccess', _12 => _12.setSpan, 'call', _13 => _13(parentSpan)]);
        return rv;
      };
    });
  }
}GraphQL.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/mongo.js




// This allows us to use the same array for both defaults options and the type itself.
// (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
// and not just a string[])

const OPERATIONS = [
  'aggregate', // aggregate(pipeline, options, callback)
  'bulkWrite', // bulkWrite(operations, options, callback)
  'countDocuments', // countDocuments(query, options, callback)
  'createIndex', // createIndex(fieldOrSpec, options, callback)
  'createIndexes', // createIndexes(indexSpecs, options, callback)
  'deleteMany', // deleteMany(filter, options, callback)
  'deleteOne', // deleteOne(filter, options, callback)
  'distinct', // distinct(key, query, options, callback)
  'drop', // drop(options, callback)
  'dropIndex', // dropIndex(indexName, options, callback)
  'dropIndexes', // dropIndexes(options, callback)
  'estimatedDocumentCount', // estimatedDocumentCount(options, callback)
  'find', // find(query, options, callback)
  'findOne', // findOne(query, options, callback)
  'findOneAndDelete', // findOneAndDelete(filter, options, callback)
  'findOneAndReplace', // findOneAndReplace(filter, replacement, options, callback)
  'findOneAndUpdate', // findOneAndUpdate(filter, update, options, callback)
  'indexes', // indexes(options, callback)
  'indexExists', // indexExists(indexes, options, callback)
  'indexInformation', // indexInformation(options, callback)
  'initializeOrderedBulkOp', // initializeOrderedBulkOp(options, callback)
  'insertMany', // insertMany(docs, options, callback)
  'insertOne', // insertOne(doc, options, callback)
  'isCapped', // isCapped(options, callback)
  'mapReduce', // mapReduce(map, reduce, options, callback)
  'options', // options(options, callback)
  'parallelCollectionScan', // parallelCollectionScan(options, callback)
  'rename', // rename(newName, options, callback)
  'replaceOne', // replaceOne(filter, doc, options, callback)
  'stats', // stats(options, callback)
  'updateMany', // updateMany(filter, update, options, callback)
  'updateOne', // updateOne(filter, update, options, callback)
] ;

// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
const OPERATION_SIGNATURES

 = {
  // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
  // see https://github.com/getsentry/sentry-javascript/pull/3102
  bulkWrite: ['operations'],
  countDocuments: ['query'],
  createIndex: ['fieldOrSpec'],
  createIndexes: ['indexSpecs'],
  deleteMany: ['filter'],
  deleteOne: ['filter'],
  distinct: ['key', 'query'],
  dropIndex: ['indexName'],
  find: ['query'],
  findOne: ['query'],
  findOneAndDelete: ['filter'],
  findOneAndReplace: ['filter', 'replacement'],
  findOneAndUpdate: ['filter', 'update'],
  indexExists: ['indexes'],
  insertMany: ['docs'],
  insertOne: ['doc'],
  mapReduce: ['map', 'reduce'],
  rename: ['newName'],
  replaceOne: ['filter', 'doc'],
  updateMany: ['filter', 'update'],
  updateOne: ['filter', 'update'],
};

function isCursor(maybeCursor) {
  return maybeCursor && typeof maybeCursor === 'object' && maybeCursor.once && typeof maybeCursor.once === 'function';
}

/** Tracing integration for mongo package */
class Mongo  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mongo';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Mongo.id;
    this._operations = Array.isArray(options.operations) ? options.operations : (OPERATIONS );
    this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
    this._useMongoose = !!options.useMongoose;
  }

  /** @inheritdoc */
   loadDependency() {
    const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
    return (this._module = this._module || (0,esm_node.loadModule)(moduleName));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Mongo Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
      return;
    }

    this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
  }

  /**
   * Patches original collection methods
   */
   _instrumentOperations(collection, operations, getCurrentHub) {
    operations.forEach((operation) => this._patchOperation(collection, operation, getCurrentHub));
  }

  /**
   * Patches original collection to utilize our tracing functionality
   */
   _patchOperation(collection, operation, getCurrentHub) {
    if (!(operation in collection.prototype)) return;

    const getSpanContext = this._getSpanContextFromOperationArguments.bind(this);

    (0,object.fill)(collection.prototype, operation, function (orig) {
      return function ( ...args) {
        const lastArg = args[args.length - 1];
        const scope = getCurrentHub().getScope();
        const parentSpan = scope.getSpan();

        // Check if the operation was passed a callback. (mapReduce requires a different check, as
        // its (non-callback) arguments can also be functions.)
        if (typeof lastArg !== 'function' || (operation === 'mapReduce' && args.length === 2)) {
          const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3(getSpanContext(this, operation, args))]);
          const maybePromiseOrCursor = orig.call(this, ...args);

          if ((0,is.isThenable)(maybePromiseOrCursor)) {
            return maybePromiseOrCursor.then((res) => {
              (0,_optionalChain._optionalChain)([span, 'optionalAccess', _4 => _4.finish, 'call', _5 => _5()]);
              return res;
            });
          }
          // If the operation returns a Cursor
          // we need to attach a listener to it to finish the span when the cursor is closed.
          else if (isCursor(maybePromiseOrCursor)) {
            const cursor = maybePromiseOrCursor ;

            try {
              cursor.once('close', () => {
                (0,_optionalChain._optionalChain)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
              });
            } catch (e) {
              // If the cursor is already closed, `once` will throw an error. In that case, we can
              // finish the span immediately.
              (0,_optionalChain._optionalChain)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            }

            return cursor;
          } else {
            (0,_optionalChain._optionalChain)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            return maybePromiseOrCursor;
          }
        }

        const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _12 => _12.startChild, 'call', _13 => _13(getSpanContext(this, operation, args.slice(0, -1)))]);

        return orig.call(this, ...args.slice(0, -1), function (err, result) {
          (0,_optionalChain._optionalChain)([span, 'optionalAccess', _14 => _14.finish, 'call', _15 => _15()]);
          lastArg(err, result);
        });
      };
    });
  }

  /**
   * Form a SpanContext based on the user input to a given operation.
   */
   _getSpanContextFromOperationArguments(
    collection,
    operation,
    args,
  ) {
    const data = {
      'db.system': 'mongodb',
      'db.name': collection.dbName,
      'db.operation': operation,
      'db.mongodb.collection': collection.collectionName,
    };
    const spanContext = {
      op: 'db',
      // TODO v8: Use `${collection.collectionName}.${operation}`
      origin: 'auto.db.mongo',
      description: operation,
      data,
    };

    // If the operation takes no arguments besides `options` and `callback`, or if argument
    // collection is disabled for this operation, just return early.
    const signature = OPERATION_SIGNATURES[operation];
    const shouldDescribe = Array.isArray(this._describeOperations)
      ? this._describeOperations.includes(operation)
      : this._describeOperations;

    if (!signature || !shouldDescribe) {
      return spanContext;
    }

    try {
      // Special case for `mapReduce`, as the only one accepting functions as arguments.
      if (operation === 'mapReduce') {
        const [map, reduce] = args ;
        data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
        data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
      } else {
        for (let i = 0; i < signature.length; i++) {
          data[`db.mongodb.${signature[i]}`] = JSON.stringify(args[i]);
        }
      }
    } catch (_oO) {
      // no-empty
    }

    return spanContext;
  }
}Mongo.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/mysql.js




/** Tracing integration for node-mysql package */
class Mysql  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Mysql';}

  /**
   * @inheritDoc
   */

   constructor() {
    this.name = Mysql.id;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,esm_node.loadModule)('mysql/lib/Connection.js'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Mysql Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Mysql Integration was unable to require `mysql` package.');
      return;
    }

    let mySqlConfig = undefined;

    try {
      pkg.prototype.connect = new Proxy(pkg.prototype.connect, {
        apply(wrappingTarget, thisArg, args) {
          if (!mySqlConfig) {
            mySqlConfig = thisArg.config;
          }
          return wrappingTarget.apply(thisArg, args);
        },
      });
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Mysql Integration was unable to instrument `mysql` config.');
    }

    function spanDataFromConfig() {
      if (!mySqlConfig) {
        return {};
      }
      return {
        'server.address': mySqlConfig.host,
        'server.port': mySqlConfig.port,
        'db.user': mySqlConfig.user,
      };
    }

    function finishSpan(span) {
      if (!span || span.endTimestamp) {
        return;
      }

      const data = spanDataFromConfig();
      Object.keys(data).forEach(key => {
        span.setData(key, data[key]);
      });

      span.finish();
    }

    // The original function will have one of these signatures:
    //    function (callback) => void
    //    function (options, callback) => void
    //    function (options, values, callback) => void
    (0,object.fill)(pkg, 'createQuery', function (orig) {
      return function ( options, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = scope.getSpan();

        const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _2 => _2.startChild, 'call', _3 => _3({
          description: typeof options === 'string' ? options : (options ).sql,
          op: 'db',
          origin: 'auto.db.mysql',
          data: {
            'db.system': 'mysql',
          },
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, options, values, function (err, result, fields) {
            finishSpan(span);
            callback(err, result, fields);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, options, function (err, result, fields) {
            finishSpan(span);
            values(err, result, fields);
          });
        }

        // streaming, no callback!
        const query = orig.call(this, options, values) ;

        query.on('end', () => {
          finishSpan(span);
        });

        return query;
      };
    });
  }
}Mysql.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/postgres.js




/** Tracing integration for node-postgres package */
class Postgres  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Postgres';}

  /**
   * @inheritDoc
   */

   constructor(options = {}) {
    this.name = Postgres.id;
    this._usePgNative = !!options.usePgNative;
    this._module = options.module;
  }

  /** @inheritdoc */
   loadDependency() {
    return (this._module = this._module || (0,esm_node.loadModule)('pg'));
  }

  /**
   * @inheritDoc
   */
   setupOnce(_, getCurrentHub) {
    if (shouldDisableAutoInstrumentation(getCurrentHub)) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log('Postgres Integration is skipped because of instrumenter configuration.');
      return;
    }

    const pkg = this.loadDependency();

    if (!pkg) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error('Postgres Integration was unable to require `pg` package.');
      return;
    }

    const Client = this._usePgNative ? (0,_optionalChain._optionalChain)([pkg, 'access', _2 => _2.native, 'optionalAccess', _3 => _3.Client]) : pkg.Client;

    if (!Client) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
      return;
    }

    /**
     * function (query, callback) => void
     * function (query, params, callback) => void
     * function (query) => Promise
     * function (query, params) => Promise
     * function (pg.Cursor) => pg.Cursor
     */
    (0,object.fill)(Client.prototype, 'query', function (orig) {
      return function ( config, values, callback) {
        const scope = getCurrentHub().getScope();
        const parentSpan = scope.getSpan();

        const data = {
          'db.system': 'postgresql',
        };

        try {
          if (this.database) {
            data['db.name'] = this.database;
          }
          if (this.host) {
            data['server.address'] = this.host;
          }
          if (this.port) {
            data['server.port'] = this.port;
          }
          if (this.user) {
            data['db.user'] = this.user;
          }
        } catch (e) {
          // ignore
        }

        const span = (0,_optionalChain._optionalChain)([parentSpan, 'optionalAccess', _4 => _4.startChild, 'call', _5 => _5({
          description: typeof config === 'string' ? config : (config ).text,
          op: 'db',
          origin: 'auto.db.postgres',
          data,
        })]);

        if (typeof callback === 'function') {
          return orig.call(this, config, values, function (err, result) {
            (0,_optionalChain._optionalChain)([span, 'optionalAccess', _6 => _6.finish, 'call', _7 => _7()]);
            callback(err, result);
          });
        }

        if (typeof values === 'function') {
          return orig.call(this, config, function (err, result) {
            (0,_optionalChain._optionalChain)([span, 'optionalAccess', _8 => _8.finish, 'call', _9 => _9()]);
            values(err, result);
          });
        }

        const rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);

        if ((0,is.isThenable)(rv)) {
          return rv.then((res) => {
            (0,_optionalChain._optionalChain)([span, 'optionalAccess', _10 => _10.finish, 'call', _11 => _11()]);
            return res;
          });
        }

        (0,_optionalChain._optionalChain)([span, 'optionalAccess', _12 => _12.finish, 'call', _13 => _13()]);
        return rv;
      };
    });
  }
}Postgres.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry-internal+tracing@7.76.0/node_modules/@sentry-internal/tracing/esm/node/integrations/prisma.js




function isValidPrismaClient(possibleClient) {
  return !!possibleClient && !!(possibleClient )['$use'];
}

/** Tracing integration for @prisma/client package */
class Prisma  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Prisma';}

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
   constructor(options = {}) {
    this.name = Prisma.id;

    // We instrument the PrismaClient inside the constructor and not inside `setupOnce` because in some cases of server-side
    // bundling (Next.js) multiple Prisma clients can be instantiated, even though users don't intend to. When instrumenting
    // in setupOnce we can only ever instrument one client.
    // https://github.com/getsentry/sentry-javascript/issues/7216#issuecomment-1602375012
    // In the future we might explore providing a dedicated PrismaClient middleware instead of this hack.
    if (isValidPrismaClient(options.client) && !options.client._sentryInstrumented) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (0,object.addNonEnumerableProperty)(options.client , '_sentryInstrumented', true);

      const clientData = {};
      try {
        const engineConfig = (options.client )._engineConfig;
        if (engineConfig) {
          const { activeProvider, clientVersion } = engineConfig;
          if (activeProvider) {
            clientData['db.system'] = activeProvider;
          }
          if (clientVersion) {
            clientData['db.prisma.version'] = clientVersion;
          }
        }
      } catch (e) {
        // ignore
      }

      options.client.$use((params, next) => {
        if (shouldDisableAutoInstrumentation(esm_hub.getCurrentHub)) {
          return next(params);
        }

        const action = params.action;
        const model = params.model;

        return trace(
          {
            name: model ? `${model} ${action}` : action,
            op: 'db.sql.prisma',
            origin: 'auto.db.prisma',
            data: { ...clientData, 'db.operation': action },
          },
          () => next(params),
        );
      });
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        logger.logger.warn('Unsupported Prisma client provided to PrismaIntegration. Provided client:', options.client);
    }
  }

  /**
   * @inheritDoc
   */
   setupOnce() {
    // Noop - here for backwards compatibility
  }
} Prisma.__initStatic();



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/tracing/integrations.js


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+node@7.76.0/node_modules/@sentry/node/esm/index.js















const INTEGRATIONS = {
  ...integrations_namespaceObject,
  ...esm_integrations_namespaceObject,
  ...tracing_integrations_namespaceObject,
};




/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_VERSION: () => (/* binding */ API_VERSION),
/* harmony export */   Hub: () => (/* binding */ Hub),
/* harmony export */   ensureHubOnCarrier: () => (/* binding */ ensureHubOnCarrier),
/* harmony export */   getCurrentHub: () => (/* binding */ getCurrentHub),
/* harmony export */   getHubFromCarrier: () => (/* binding */ getHubFromCarrier),
/* harmony export */   getMainCarrier: () => (/* binding */ getMainCarrier),
/* harmony export */   makeMain: () => (/* binding */ makeMain),
/* harmony export */   runWithAsyncContext: () => (/* binding */ runWithAsyncContext),
/* harmony export */   setAsyncContextStrategy: () => (/* binding */ setAsyncContextStrategy),
/* harmony export */   setHubOnCarrier: () => (/* binding */ setHubOnCarrier)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);





/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
const API_VERSION = 4;

/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
const DEFAULT_BREADCRUMBS = 100;

/**
 * @inheritDoc
 */
class Hub  {
  /** Is a {@link Layer}[] containing the client and scope */

  /** Contains the last event id of a captured event.  */

  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */
   constructor(client, scope = new _scope_js__WEBPACK_IMPORTED_MODULE_0__.Scope(),   _version = API_VERSION) {this._version = _version;
    this._stack = [{ scope }];
    if (client) {
      this.bindClient(client);
    }
  }

  /**
   * @inheritDoc
   */
   isOlderThan(version) {
    return this._version < version;
  }

  /**
   * @inheritDoc
   */
   bindClient(client) {
    const top = this.getStackTop();
    top.client = client;
    if (client && client.setupIntegrations) {
      client.setupIntegrations();
    }
  }

  /**
   * @inheritDoc
   */
   pushScope() {
    // We want to clone the content of prev scope
    const scope = _scope_js__WEBPACK_IMPORTED_MODULE_0__.Scope.clone(this.getScope());
    this.getStack().push({
      client: this.getClient(),
      scope,
    });
    return scope;
  }

  /**
   * @inheritDoc
   */
   popScope() {
    if (this.getStack().length <= 1) return false;
    return !!this.getStack().pop();
  }

  /**
   * @inheritDoc
   */
   withScope(callback) {
    const scope = this.pushScope();
    try {
      callback(scope);
    } finally {
      this.popScope();
    }
  }

  /**
   * @inheritDoc
   */
   getClient() {
    return this.getStackTop().client ;
  }

  /** Returns the scope of the top stack. */
   getScope() {
    return this.getStackTop().scope;
  }

  /** Returns the scope stack for domains or the process. */
   getStack() {
    return this._stack;
  }

  /** Returns the topmost scope layer in the order domain > local > process. */
   getStackTop() {
    return this._stack[this._stack.length - 1];
  }

  /**
   * @inheritDoc
   */
   captureException(exception, hint) {
    const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)());
    const syntheticException = new Error('Sentry syntheticException');
    this._withClient((client, scope) => {
      client.captureException(
        exception,
        {
          originalException: exception,
          syntheticException,
          ...hint,
          event_id: eventId,
        },
        scope,
      );
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureMessage(
    message,
    // eslint-disable-next-line deprecation/deprecation
    level,
    hint,
  ) {
    const eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)());
    const syntheticException = new Error(message);
    this._withClient((client, scope) => {
      client.captureMessage(
        message,
        level,
        {
          originalException: message,
          syntheticException,
          ...hint,
          event_id: eventId,
        },
        scope,
      );
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)();
    if (!event.type) {
      this._lastEventId = eventId;
    }

    this._withClient((client, scope) => {
      client.captureEvent(event, { ...hint, event_id: eventId }, scope);
    });
    return eventId;
  }

  /**
   * @inheritDoc
   */
   lastEventId() {
    return this._lastEventId;
  }

  /**
   * @inheritDoc
   */
   addBreadcrumb(breadcrumb, hint) {
    const { scope, client } = this.getStackTop();

    if (!client) return;

    const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } =
      (client.getOptions && client.getOptions()) || {};

    if (maxBreadcrumbs <= 0) return;

    const timestamp = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dateTimestampInSeconds)();
    const mergedBreadcrumb = { timestamp, ...breadcrumb };
    const finalBreadcrumb = beforeBreadcrumb
      ? ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.consoleSandbox)(() => beforeBreadcrumb(mergedBreadcrumb, hint)) )
      : mergedBreadcrumb;

    if (finalBreadcrumb === null) return;

    if (client.emit) {
      client.emit('beforeAddBreadcrumb', finalBreadcrumb, hint);
    }

    scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
  }

  /**
   * @inheritDoc
   */
   setUser(user) {
    this.getScope().setUser(user);
  }

  /**
   * @inheritDoc
   */
   setTags(tags) {
    this.getScope().setTags(tags);
  }

  /**
   * @inheritDoc
   */
   setExtras(extras) {
    this.getScope().setExtras(extras);
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this.getScope().setTag(key, value);
  }

  /**
   * @inheritDoc
   */
   setExtra(key, extra) {
    this.getScope().setExtra(key, extra);
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   setContext(name, context) {
    this.getScope().setContext(name, context);
  }

  /**
   * @inheritDoc
   */
   configureScope(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(scope);
    }
  }

  /**
   * @inheritDoc
   */
   run(callback) {
    const oldHub = makeMain(this);
    try {
      callback(this);
    } finally {
      makeMain(oldHub);
    }
  }

  /**
   * @inheritDoc
   */
   getIntegration(integration) {
    const client = this.getClient();
    if (!client) return null;
    try {
      return client.getIntegration(integration);
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
      return null;
    }
  }

  /**
   * @inheritDoc
   */
   startTransaction(context, customSamplingContext) {
    const result = this._callExtensionMethod('startTransaction', context, customSamplingContext);

    if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && !result) {
      const client = this.getClient();
      if (!client) {
        // eslint-disable-next-line no-console
        console.warn(
          "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'",
        );
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
      }
    }

    return result;
  }

  /**
   * @inheritDoc
   */
   traceHeaders() {
    return this._callExtensionMethod('traceHeaders');
  }

  /**
   * @inheritDoc
   */
   captureSession(endSession = false) {
    // both send the update and pull the session from the scope
    if (endSession) {
      return this.endSession();
    }

    // only send the update
    this._sendSessionUpdate();
  }

  /**
   * @inheritDoc
   */
   endSession() {
    const layer = this.getStackTop();
    const scope = layer.scope;
    const session = scope.getSession();
    if (session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_4__.closeSession)(session);
    }
    this._sendSessionUpdate();

    // the session is over; take it off of the scope
    scope.setSession();
  }

  /**
   * @inheritDoc
   */
   startSession(context) {
    const { scope, client } = this.getStackTop();
    const { release, environment = _constants_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENVIRONMENT } = (client && client.getOptions()) || {};

    // Will fetch userAgent if called from browser sdk
    const { userAgent } = _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_OBJ.navigator || {};

    const session = (0,_session_js__WEBPACK_IMPORTED_MODULE_4__.makeSession)({
      release,
      environment,
      user: scope.getUser(),
      ...(userAgent && { userAgent }),
      ...context,
    });

    // End existing session if there's one
    const currentSession = scope.getSession && scope.getSession();
    if (currentSession && currentSession.status === 'ok') {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_4__.updateSession)(currentSession, { status: 'exited' });
    }
    this.endSession();

    // Afterwards we set the new session on the scope
    scope.setSession(session);

    return session;
  }

  /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   */
   shouldSendDefaultPii() {
    const client = this.getClient();
    const options = client && client.getOptions();
    return Boolean(options && options.sendDefaultPii);
  }

  /**
   * Sends the current Session on the scope
   */
   _sendSessionUpdate() {
    const { scope, client } = this.getStackTop();

    const session = scope.getSession();
    if (session && client && client.captureSession) {
      client.captureSession(session);
    }
  }

  /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */
   _withClient(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(client, scope);
    }
  }

  /**
   * Calls global extension method and binding current instance to the function call
   */
  // @ts-expect-error Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
   _callExtensionMethod(method, ...args) {
    const carrier = getMainCarrier();
    const sentry = carrier.__SENTRY__;
    if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
      return sentry.extensions[method].apply(this, args);
    }
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
  }
}

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
  _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_OBJ.__SENTRY__ = _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_OBJ.__SENTRY__ || {
    extensions: {},
    hub: undefined,
  };
  return _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_OBJ;
}

/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
  const registry = getMainCarrier();
  const oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}

/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();

  if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
    const hub = registry.__SENTRY__.acs.getCurrentHub();

    if (hub) {
      return hub;
    }
  }

  // Return hub that lives on a global object
  return getGlobalHub(registry);
}

function getGlobalHub(registry = getMainCarrier()) {
  // If there's no hub, or its an old API, assign a new one
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  }

  // Return hub that lives on a global object
  return getHubFromCarrier(registry);
}

/**
 * @private Private API with no semver guarantees!
 *
 * If the carrier does not contain a hub, a new hub is created with the global hub client and scope.
 */
function ensureHubOnCarrier(carrier, parent = getGlobalHub()) {
  // If there's no hub on current domain, or it's an old API, assign a new one
  if (!hasHubOnCarrier(carrier) || getHubFromCarrier(carrier).isOlderThan(API_VERSION)) {
    const globalHubTopStack = parent.getStackTop();
    setHubOnCarrier(carrier, new Hub(globalHubTopStack.client, _scope_js__WEBPACK_IMPORTED_MODULE_0__.Scope.clone(globalHubTopStack.scope)));
  }
}

/**
 * @private Private API with no semver guarantees!
 *
 * Sets the global async context strategy
 */
function setAsyncContextStrategy(strategy) {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();
  registry.__SENTRY__ = registry.__SENTRY__ || {};
  registry.__SENTRY__.acs = strategy;
}

/**
 * Runs the supplied callback in its own async context. Async Context strategies are defined per SDK.
 *
 * @param callback The callback to run in its own async context
 * @param options Options to pass to the async context strategy
 * @returns The result of the callback
 */
function runWithAsyncContext(callback, options = {}) {
  const registry = getMainCarrier();

  if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
    return registry.__SENTRY__.acs.runWithAsyncContext(callback, options);
  }

  // if there was no strategy, fallback to just calling the callback
  return callback();
}

/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
  return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}

/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_6__.getGlobalSingleton)('hub', () => new Hub(), carrier);
}

/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
  if (!carrier) return false;
  const __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});
  __SENTRY__.hub = hub;
  return true;
}




/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scope: () => (/* binding */ Scope)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var _eventProcessors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);




/**
 * Default value for maximum number of breadcrumbs added to an event.
 */
const DEFAULT_MAX_BREADCRUMBS = 100;

/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
class Scope  {
  /** Flag if notifying is happening. */

  /** Callback for client to receive scope changes. */

  /** Callback list that will be called after {@link applyToEvent}. */

  /** Array of breadcrumbs. */

  /** User */

  /** Tags */

  /** Extra */

  /** Contexts */

  /** Attachments */

  /** Propagation Context for distributed tracing */

  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */

  /** Fingerprint */

  /** Severity */
  // eslint-disable-next-line deprecation/deprecation

  /** Transaction Name */

  /** Span */

  /** Session */

  /** Request Mode Session Status */

  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

   constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = generatePropagationContext();
  }

  /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */
   static clone(scope) {
    const newScope = new Scope();
    if (scope) {
      newScope._breadcrumbs = [...scope._breadcrumbs];
      newScope._tags = { ...scope._tags };
      newScope._extra = { ...scope._extra };
      newScope._contexts = { ...scope._contexts };
      newScope._user = scope._user;
      newScope._level = scope._level;
      newScope._span = scope._span;
      newScope._session = scope._session;
      newScope._transactionName = scope._transactionName;
      newScope._fingerprint = scope._fingerprint;
      newScope._eventProcessors = [...scope._eventProcessors];
      newScope._requestSession = scope._requestSession;
      newScope._attachments = [...scope._attachments];
      newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
      newScope._propagationContext = { ...scope._propagationContext };
    }
    return newScope;
  }

  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */
   addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }

  /**
   * @inheritDoc
   */
   addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }

  /**
   * @inheritDoc
   */
   setUser(user) {
    this._user = user || {};
    if (this._session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_0__.updateSession)(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getUser() {
    return this._user;
  }

  /**
   * @inheritDoc
   */
   getRequestSession() {
    return this._requestSession;
  }

  /**
   * @inheritDoc
   */
   setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }

  /**
   * @inheritDoc
   */
   setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setLevel(
    // eslint-disable-next-line deprecation/deprecation
    level,
  ) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setSpan(span) {
    this._span = span;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getSpan() {
    return this._span;
  }

  /**
   * @inheritDoc
   */
   getTransaction() {
    // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
    // have a pointer to the currently-active transaction.
    const span = this.getSpan();
    return span && span.transaction;
  }

  /**
   * @inheritDoc
   */
   setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getSession() {
    return this._session;
  }

  /**
   * @inheritDoc
   */
   update(captureContext) {
    if (!captureContext) {
      return this;
    }

    if (typeof captureContext === 'function') {
      const updatedScope = (captureContext )(this);
      return updatedScope instanceof Scope ? updatedScope : this;
    }

    if (captureContext instanceof Scope) {
      this._tags = { ...this._tags, ...captureContext._tags };
      this._extra = { ...this._extra, ...captureContext._extra };
      this._contexts = { ...this._contexts, ...captureContext._contexts };
      if (captureContext._user && Object.keys(captureContext._user).length) {
        this._user = captureContext._user;
      }
      if (captureContext._level) {
        this._level = captureContext._level;
      }
      if (captureContext._fingerprint) {
        this._fingerprint = captureContext._fingerprint;
      }
      if (captureContext._requestSession) {
        this._requestSession = captureContext._requestSession;
      }
      if (captureContext._propagationContext) {
        this._propagationContext = captureContext._propagationContext;
      }
    } else if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(captureContext)) {
      // eslint-disable-next-line no-param-reassign
      captureContext = captureContext ;
      this._tags = { ...this._tags, ...captureContext.tags };
      this._extra = { ...this._extra, ...captureContext.extra };
      this._contexts = { ...this._contexts, ...captureContext.contexts };
      if (captureContext.user) {
        this._user = captureContext.user;
      }
      if (captureContext.level) {
        this._level = captureContext.level;
      }
      if (captureContext.fingerprint) {
        this._fingerprint = captureContext.fingerprint;
      }
      if (captureContext.requestSession) {
        this._requestSession = captureContext.requestSession;
      }
      if (captureContext.propagationContext) {
        this._propagationContext = captureContext.propagationContext;
      }
    }

    return this;
  }

  /**
   * @inheritDoc
   */
   clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._requestSession = undefined;
    this._span = undefined;
    this._session = undefined;
    this._notifyScopeListeners();
    this._attachments = [];
    this._propagationContext = generatePropagationContext();
    return this;
  }

  /**
   * @inheritDoc
   */
   addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

    // No data has been changed, so don't notify scope listeners
    if (maxCrumbs <= 0) {
      return this;
    }

    const mergedBreadcrumb = {
      timestamp: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dateTimestampInSeconds)(),
      ...breadcrumb,
    };

    const breadcrumbs = this._breadcrumbs;
    breadcrumbs.push(mergedBreadcrumb);
    this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;

    this._notifyScopeListeners();

    return this;
  }

  /**
   * @inheritDoc
   */
   getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }

  /**
   * @inheritDoc
   */
   clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }

  /**
   * @inheritDoc
   */
   getAttachments() {
    return this._attachments;
  }

  /**
   * @inheritDoc
   */
   clearAttachments() {
    this._attachments = [];
    return this;
  }

  /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   */
   applyToEvent(
    event,
    hint = {},
    additionalEventProcessors,
  ) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = { ...this._extra, ...event.extra };
    }
    if (this._tags && Object.keys(this._tags).length) {
      event.tags = { ...this._tags, ...event.tags };
    }
    if (this._user && Object.keys(this._user).length) {
      event.user = { ...this._user, ...event.user };
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      event.contexts = { ...this._contexts, ...event.contexts };
    }
    if (this._level) {
      event.level = this._level;
    }
    if (this._transactionName) {
      event.transaction = this._transactionName;
    }

    // We want to set the trace context for normal events only if there isn't already
    // a trace context on the event. There is a product feature in place where we link
    // errors with transaction and it relies on that.
    if (this._span) {
      event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
      const transaction = this._span.transaction;
      if (transaction) {
        event.sdkProcessingMetadata = {
          dynamicSamplingContext: transaction.getDynamicSamplingContext(),
          ...event.sdkProcessingMetadata,
        };
        const transactionName = transaction.name;
        if (transactionName) {
          event.tags = { transaction: transactionName, ...event.tags };
        }
      }
    }

    this._applyFingerprint(event);

    const scopeBreadcrumbs = this._getBreadcrumbs();
    const breadcrumbs = [...(event.breadcrumbs || []), ...scopeBreadcrumbs];
    event.breadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : undefined;

    event.sdkProcessingMetadata = {
      ...event.sdkProcessingMetadata,
      ...this._sdkProcessingMetadata,
      propagationContext: this._propagationContext,
    };

    // TODO (v8): Update this order to be: Global > Client > Scope
    return (0,_eventProcessors_js__WEBPACK_IMPORTED_MODULE_3__.notifyEventProcessors)(
      [...(additionalEventProcessors || []), ...(0,_eventProcessors_js__WEBPACK_IMPORTED_MODULE_3__.getGlobalEventProcessors)(), ...this._eventProcessors],
      event,
      hint,
    );
  }

  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */
   setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };

    return this;
  }

  /**
   * @inheritDoc
   */
   setPropagationContext(context) {
    this._propagationContext = context;
    return this;
  }

  /**
   * @inheritDoc
   */
   getPropagationContext() {
    return this._propagationContext;
  }

  /**
   * Get the breadcrumbs for this scope.
   */
   _getBreadcrumbs() {
    return this._breadcrumbs;
  }

  /**
   * This will be called on every set call.
   */
   _notifyScopeListeners() {
    // We need this check for this._notifyingListeners to be able to work on scope during updates
    // If this check is not here we'll produce endless recursion when something is done with the scope
    // during the callback.
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(callback => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }

  /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */
   _applyFingerprint(event) {
    // Make sure it's an array first and we actually have something in place
    event.fingerprint = event.fingerprint ? (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.arrayify)(event.fingerprint) : [];

    // If we have something on the scope, then merge it with event
    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint);
    }

    // If we have no data at all, remove empty array default
    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint;
    }
  }
}

function generatePropagationContext() {
  return {
    traceId: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.uuid4)(),
    spanId: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_4__.uuid4)().substring(16),
  };
}




/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSession: () => (/* binding */ closeSession),
/* harmony export */   makeSession: () => (/* binding */ makeSession),
/* harmony export */   updateSession: () => (/* binding */ updateSession)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);


/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
function makeSession(context) {
  // Both timestamp and started are in seconds since the UNIX epoch.
  const startingTime = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.timestampInSeconds)();

  const session = {
    sid: (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: 'ok',
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session),
  };

  if (context) {
    updateSession(session, context);
  }

  return session;
}

/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
// eslint-disable-next-line complexity
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }

    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }

  session.timestamp = context.timestamp || (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.timestampInSeconds)();

  if (context.abnormal_mechanism) {
    session.abnormal_mechanism = context.abnormal_mechanism;
  }

  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_1__.uuid4)();
  }
  if (context.init !== undefined) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === 'number') {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = undefined;
  } else if (typeof context.duration === 'number') {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === 'number') {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}

/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === 'ok') {
    context = { status: 'exited' };
  }

  updateSession(session, context);
}

/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */
function sessionToJSON(session) {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dropUndefinedKeys)({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1000).toISOString(),
    timestamp: new Date(session.timestamp * 1000).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent,
    },
  });
}




/***/ }),
/* 56 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _browserPerformanceTimeOriginMode: () => (/* binding */ _browserPerformanceTimeOriginMode),
/* harmony export */   browserPerformanceTimeOrigin: () => (/* binding */ browserPerformanceTimeOrigin),
/* harmony export */   dateTimestampInSeconds: () => (/* binding */ dateTimestampInSeconds),
/* harmony export */   timestampInSeconds: () => (/* binding */ timestampInSeconds),
/* harmony export */   timestampWithMs: () => (/* binding */ timestampWithMs),
/* harmony export */   usingPerformanceAPI: () => (/* binding */ usingPerformanceAPI)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* module decorator */ module = __webpack_require__.hmd(module);



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();

/**
 * An object that can return the current timestamp in seconds since the UNIX epoch.
 */

/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
const dateTimestampSource = {
  nowSeconds: () => Date.now() / 1000,
};

/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */

/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
  const { performance } = WINDOW;
  if (!performance || !performance.now) {
    return undefined;
  }

  // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
  //
  // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
  // performance.now() gives a date arbitrarily in the past.
  //
  // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
  // undefined.
  //
  // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
  // interact with data coming out of performance entries.
  //
  // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
  // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
  // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
  // observed skews that can be as long as days, weeks or months.
  //
  // See https://github.com/getsentry/sentry-javascript/issues/2590.
  //
  // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
  // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
  // transactions of long-lived web pages.
  const timeOrigin = Date.now() - performance.now();

  return {
    now: () => performance.now(),
    timeOrigin,
  };
}

/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
  try {
    const perfHooks = (0,_node_js__WEBPACK_IMPORTED_MODULE_1__.dynamicRequire)(module, 'perf_hooks') ;
    return perfHooks.performance;
  } catch (_) {
    return undefined;
  }
}

/**
 * The Performance API implementation for the current platform, if available.
 */
const platformPerformance = (0,_node_js__WEBPACK_IMPORTED_MODULE_1__.isNodeEnv)() ? getNodePerformance() : getBrowserPerformance();

const timestampSource =
  platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1000,
      };

/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);

/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);

/**
 * Re-exported with an old name for backwards-compatibility.
 * TODO (v8): Remove this
 *
 * @deprecated Use `timestampInSeconds` instead.
 */
const timestampWithMs = timestampInSeconds;

/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
const usingPerformanceAPI = platformPerformance !== undefined;

/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
let _browserPerformanceTimeOriginMode;

/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
const browserPerformanceTimeOrigin = (() => {
  // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
  // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
  // data as reliable if they are within a reasonable threshold of the current time.

  const { performance } = WINDOW;
  if (!performance || !performance.now) {
    _browserPerformanceTimeOriginMode = 'none';
    return undefined;
  }

  const threshold = 3600 * 1000;
  const performanceNow = performance.now();
  const dateNow = Date.now();

  // if timeOrigin isn't available set delta to threshold so it isn't used
  const timeOriginDelta = performance.timeOrigin
    ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
    : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;

  // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
  // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
  // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
  // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
  // Date API.
  // eslint-disable-next-line deprecation/deprecation
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === 'number';
  // if navigationStart isn't available set delta to threshold so it isn't used
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;

  if (timeOriginIsReliable || navigationStartIsReliable) {
    // Use the more reliable time origin
    if (timeOriginDelta <= navigationStartDelta) {
      _browserPerformanceTimeOriginMode = 'timeOrigin';
      return performance.timeOrigin;
    } else {
      _browserPerformanceTimeOriginMode = 'navigationStart';
      return navigationStart;
    }
  }

  // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
  _browserPerformanceTimeOriginMode = 'dateNow';
  return dateNow;
})();




/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLOBAL_OBJ: () => (/* binding */ GLOBAL_OBJ),
/* harmony export */   getGlobalObject: () => (/* binding */ getGlobalObject),
/* harmony export */   getGlobalSingleton: () => (/* binding */ getGlobalSingleton)
/* harmony export */ });
/** Internal global with common properties and Sentry extensions  */

// The code below for 'isGlobalObj' and 'GLOBAL_OBJ' was copied from core-js before modification
// https://github.com/zloirock/core-js/blob/1b944df55282cdc99c90db5f49eb0b6eda2cc0a3/packages/core-js/internals/global.js
// core-js has the following licence:
//
// Copyright (c) 2014-2022 Denis Pushkarev
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/** Returns 'obj' if it's the global object, otherwise returns undefined */
function isGlobalObj(obj) {
  return obj && obj.Math == Math ? obj : undefined;
}

/** Get's the global object for the current JavaScript runtime */
const GLOBAL_OBJ =
  (typeof globalThis == 'object' && isGlobalObj(globalThis)) ||
  // eslint-disable-next-line no-restricted-globals
  (typeof window == 'object' && isGlobalObj(window)) ||
  (typeof self == 'object' && isGlobalObj(self)) ||
  (typeof global == 'object' && isGlobalObj(global)) ||
  (function () {
    return this;
  })() ||
  {};

/**
 * @deprecated Use GLOBAL_OBJ instead or WINDOW from @sentry/browser. This will be removed in v8
 */
function getGlobalObject() {
  return GLOBAL_OBJ ;
}

/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(name, creator, obj) {
  const gbl = (obj || GLOBAL_OBJ) ;
  const __SENTRY__ = (gbl.__SENTRY__ = gbl.__SENTRY__ || {});
  const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
  return singleton;
}




/***/ }),
/* 58 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dynamicRequire: () => (/* binding */ dynamicRequire),
  isNodeEnv: () => (/* binding */ isNodeEnv),
  loadModule: () => (/* binding */ loadModule)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/env.js
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These flags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */

/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}

/**
 * Get source of SDK.
 */
function getSDKSource() {
  // @ts-expect-error "npm" is injected by rollup during build process
  return "npm";
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/node.js
/* module decorator */ module = __webpack_require__.hmd(module);


/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
  // explicitly check for browser bundles as those can be optimized statically
  // by terser/rollup.
  return (
    !isBrowserBundle() &&
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
  );
}

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return mod.require(request);
}

/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
  let mod;

  try {
    mod = dynamicRequire(module, moduleName);
  } catch (e) {
    // no-empty
  }

  try {
    const { cwd } = dynamicRequire(module, 'process');
    mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`) ;
  } catch (e) {
    // no-empty
  }

  return mod;
}




/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContextToFrame: () => (/* binding */ addContextToFrame),
/* harmony export */   addExceptionMechanism: () => (/* binding */ addExceptionMechanism),
/* harmony export */   addExceptionTypeValue: () => (/* binding */ addExceptionTypeValue),
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   checkOrSetAlreadyCaught: () => (/* binding */ checkOrSetAlreadyCaught),
/* harmony export */   getEventDescription: () => (/* binding */ getEventDescription),
/* harmony export */   parseSemver: () => (/* binding */ parseSemver),
/* harmony export */   uuid4: () => (/* binding */ uuid4)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
  const gbl = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ ;
  const crypto = gbl.crypto || gbl.msCrypto;

  let getRandomByte = () => Math.random() * 16;
  try {
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID().replace(/-/g, '');
    }
    if (crypto && crypto.getRandomValues) {
      getRandomByte = () => crypto.getRandomValues(new Uint8Array(1))[0];
    }
  } catch (_) {
    // some runtimes can crash invoking crypto
    // https://github.com/getsentry/sentry-javascript/issues/8935
  }

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
  return (([1e7] ) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line no-bitwise
    ((c ) ^ ((getRandomByte() & 15) >> ((c ) / 4))).toString(16),
  );
}

function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}

/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }

  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || '<unknown>';
  }
  return eventId || '<unknown>';
}

/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
  const exception = (event.exception = event.exception || {});
  const values = (exception.values = exception.values || []);
  const firstException = (values[0] = values[0] || {});
  if (!firstException.value) {
    firstException.value = value || '';
  }
  if (!firstException.type) {
    firstException.type = type || 'Error';
  }
}

/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }

  const defaultMechanism = { type: 'generic', handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };

  if (newMechanism && 'data' in newMechanism) {
    const mergedData = { ...(currentMechanism && currentMechanism.data), ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * Represents Semantic Versioning object
 */

/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);
  const patch = parseInt(match[3], 10);
  return {
    buildmetadata: match[5],
    major: isNaN(major) ? undefined : major,
    minor: isNaN(minor) ? undefined : minor,
    patch: isNaN(patch) ? undefined : patch,
    prerelease: match[4],
  };
}

/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext = 5) {
  // When there is no line number in the frame, attaching context is nonsensical and will even break grouping
  if (frame.lineno === undefined) {
    return;
  }

  const maxLines = lines.length;
  const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);

  frame.pre_context = lines
    .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(line, 0));

  frame.context_line = (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);

  frame.post_context = lines
    .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(line, 0));
}

/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (exception && (exception ).__sentry_captured__) {
    return true;
  }

  try {
    // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
    // `ExtraErrorData` integration
    (0,_object_js__WEBPACK_IMPORTED_MODULE_2__.addNonEnumerableProperty)(exception , '__sentry_captured__', true);
  } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
  }

  return false;
}

/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 */
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}




/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMatchingPattern: () => (/* binding */ isMatchingPattern),
/* harmony export */   safeJoin: () => (/* binding */ safeJoin),
/* harmony export */   snipLine: () => (/* binding */ snipLine),
/* harmony export */   stringMatchesSomePattern: () => (/* binding */ stringMatchesSomePattern),
/* harmony export */   truncate: () => (/* binding */ truncate)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);


/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max = 0) {
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}

/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    // eslint-disable-next-line no-param-reassign
    colno = lineLength;
  }

  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }

  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }

  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += ' {snip}';
  }

  return newLine;
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }

  const output = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      // This is a hack to fix a Vue3-specific bug that causes an infinite loop of
      // console warnings. This happens when a Vue template is rendered with
      // an undeclared variable, which we try to stringify, ultimately causing
      // Vue to issue another warning which repeats indefinitely.
      // see: https://github.com/getsentry/sentry-javascript/pull/8981
      if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isVueViewModel)(value)) {
        output.push('[VueViewModel]');
      } else {
        output.push(String(value));
      }
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */
function isMatchingPattern(
  value,
  pattern,
  requireExactStringMatch = false,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return false;
  }

  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(pattern)) {
    return pattern.test(value);
  }
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }

  return false;
}

/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */
function stringMatchesSomePattern(
  testString,
  patterns = [],
  requireExactStringMatch = false,
) {
  return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
}




/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDOMError: () => (/* binding */ isDOMError),
/* harmony export */   isDOMException: () => (/* binding */ isDOMException),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isErrorEvent: () => (/* binding */ isErrorEvent),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),
/* harmony export */   isNaN: () => (/* binding */ isNaN),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSyntheticEvent: () => (/* binding */ isSyntheticEvent),
/* harmony export */   isThenable: () => (/* binding */ isThenable),
/* harmony export */   isVueViewModel: () => (/* binding */ isVueViewModel)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (objectToString.call(wat)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}

/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return isBuiltin(wat, 'ErrorEvent');
}

/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
  return isBuiltin(wat, 'DOMError');
}

/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
  return isBuiltin(wat, 'DOMException');
}

/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return isBuiltin(wat, 'String');
}

/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}

/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return isBuiltin(wat, 'Object');
}

/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
  return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}

/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
  return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}

/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return isBuiltin(wat, 'RegExp');
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === 'function');
}

/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}

/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
  return typeof wat === 'number' && wat !== wat;
}

/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}

/**
 * Checks whether given value's type is a Vue ViewModel.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isVueViewModel(wat) {
  // Not using Object.prototype.toString because in Vue 3 it would read the instance's Symbol(Symbol.toStringTag) property.
  return !!(typeof wat === 'object' && wat !== null && ((wat ).__isVue || (wat )._isVue));
}




/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  addNonEnumerableProperty: () => (/* binding */ addNonEnumerableProperty),
  convertToPlainObject: () => (/* binding */ convertToPlainObject),
  dropUndefinedKeys: () => (/* binding */ dropUndefinedKeys),
  extractExceptionKeysForMessage: () => (/* binding */ extractExceptionKeysForMessage),
  fill: () => (/* binding */ fill),
  getOriginalFunction: () => (/* binding */ getOriginalFunction),
  markFunctionWrapped: () => (/* binding */ markFunctionWrapped),
  objectify: () => (/* binding */ objectify),
  urlEncode: () => (/* binding */ urlEncode)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/is.js
var is = __webpack_require__(61);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/worldwide.js
var worldwide = __webpack_require__(57);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/browser.js



// eslint-disable-next-line deprecation/deprecation
const WINDOW = (0,worldwide.getGlobalObject)();

const DEFAULT_MAX_STRING_LENGTH = 80;

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(
  elem,
  options = {},
) {

  if (!elem) {
    return '<unknown>';
  }

  // try/catch both:
  // - accessing event.target (see getsentry/raven-js#838, #768)
  // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
  // - can throw an exception in some circumstances.
  try {
    let currentElem = elem ;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = ' > ';
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = (!Array.isArray(options) && options.maxStringLength) || DEFAULT_MAX_STRING_LENGTH;

    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds maxStringLength
      //   (ignore this limit if we are on the first iteration)
      if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength)) {
        break;
      }

      out.push(nextStr);

      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }

    return out.reverse().join(separator);
  } catch (_oO) {
    return '<unknown>';
  }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
  const elem = el

;

  const out = [];
  let className;
  let classes;
  let key;
  let attr;
  let i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());

  // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
  const keyAttrPairs =
    keyAttrs && keyAttrs.length
      ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)])
      : null;

  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach(keyAttrPair => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }

    // eslint-disable-next-line prefer-const
    className = elem.className;
    if (className && (0,is.isString)(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push(`.${classes[i]}`);
      }
    }
  }
  const allowedAttrs = ['aria-label', 'type', 'name', 'title', 'alt'];
  for (i = 0; i < allowedAttrs.length; i++) {
    key = allowedAttrs[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push(`[${key}="${attr}"]`);
    }
  }
  return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * Gets a DOM element by using document.querySelector.
 *
 * This wrapper will first check for the existance of the function before
 * actually calling it so that we don't have to take care of this check,
 * every time we want to access the DOM.
 *
 * Reason: DOM/querySelector is not available in all environments.
 *
 * We have to cast to any because utils can be consumed by a variety of environments,
 * and we don't want to break TS users. If you know what element will be selected by
 * `document.querySelector`, specify it as part of the generic call. For example,
 * `const element = getDomElement<Element>('selector');`
 *
 * @param selector the selector string passed on to document.querySelector
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDomElement(selector) {
  if (WINDOW.document && WINDOW.document.querySelector) {
    return WINDOW.document.querySelector(selector) ;
  }
  return null;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/logger.js
var logger = __webpack_require__(63);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/string.js
var string = __webpack_require__(60);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@sentry+utils@7.76.0/node_modules/@sentry/utils/esm/object.js





/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }

  const original = source[name] ;
  const wrapped = replacementFactory(original) ;

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  if (typeof wrapped === 'function') {
    markFunctionWrapped(wrapped, original);
  }

  source[name] = wrapped;
}

/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: value,
      writable: true,
      configurable: true,
    });
  } catch (o_O) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && logger.logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
  }
}

/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
  } catch (o_O) {} // eslint-disable-line no-empty
}

/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
function getOriginalFunction(func) {
  return func.__sentry_original__;
}

/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
  return Object.keys(object)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
    .join('&');
}

/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
 *  an Error.
 */
function convertToPlainObject(value)

 {
  if ((0,is.isError)(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value),
    };
  } else if ((0,is.isEvent)(value)) {
    const newObj

 = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value),
    };

    if (typeof CustomEvent !== 'undefined' && (0,is.isInstanceOf)(value, CustomEvent)) {
      newObj.detail = value.detail;
    }

    return newObj;
  } else {
    return value;
  }
}

/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
  try {
    return (0,is.isElement)(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return '<unknown>';
  }
}

/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = (obj )[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}

/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();

  if (!keys.length) {
    return '[object has no keys]';
  }

  if (keys[0].length >= maxLength) {
    return (0,string.truncate)(keys[0], maxLength);
  }

  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(', ');
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return (0,string.truncate)(serialized, maxLength);
  }

  return '';
}

/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */
function dropUndefinedKeys(inputValue) {
  // This map keeps track of what already visited nodes map to.
  // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
  // references as the input object.
  const memoizationMap = new Map();

  // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
  return _dropUndefinedKeys(inputValue, memoizationMap);
}

function _dropUndefinedKeys(inputValue, memoizationMap) {
  if ((0,is.isPlainObject)(inputValue)) {
    // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = {};
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    for (const key of Object.keys(inputValue)) {
      if (typeof inputValue[key] !== 'undefined') {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }

    return returnValue ;
  }

  if (Array.isArray(inputValue)) {
    // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = [];
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });

    return returnValue ;
  }

  return inputValue;
}

/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
  let objectified;
  switch (true) {
    case wat === undefined || wat === null:
      objectified = new String(wat);
      break;

    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case typeof wat === 'symbol' || typeof wat === 'bigint':
      objectified = Object(wat);
      break;

    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case (0,is.isPrimitive)(wat):
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      objectified = new (wat ).constructor(wat);
      break;

    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}




/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSOLE_LEVELS: () => (/* binding */ CONSOLE_LEVELS),
/* harmony export */   consoleSandbox: () => (/* binding */ consoleSandbox),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   originalConsoleMethods: () => (/* binding */ originalConsoleMethods)
/* harmony export */ });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);


/** Prefix for logging strings */
const PREFIX = 'Sentry Logger ';

const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'] ;

/** This may be mutated by the console instrumentation. */
const originalConsoleMethods

 = {};

/** JSDoc */

/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
  if (!("console" in _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ)) {
    return callback();
  }

  const console = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ.console ;
  const wrappedFuncs = {};

  const wrappedLevels = Object.keys(originalConsoleMethods) ;

  // Restore all wrapped console methods
  wrappedLevels.forEach(level => {
    const originalConsoleMethod = originalConsoleMethods[level] ;
    wrappedFuncs[level] = console[level] ;
    console[level] = originalConsoleMethod;
  });

  try {
    return callback();
  } finally {
    // Revert restoration to wrapped state
    wrappedLevels.forEach(level => {
      console[level] = wrappedFuncs[level] ;
    });
  }
}

function makeLogger() {
  let enabled = false;
  const logger = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    isEnabled: () => enabled,
  };

  if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    CONSOLE_LEVELS.forEach(name => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      logger[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = () => undefined;
    });
  }

  return logger ;
}

const logger = makeLogger();




/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGlobalEventProcessor: () => (/* binding */ addGlobalEventProcessor),
/* harmony export */   getGlobalEventProcessors: () => (/* binding */ getGlobalEventProcessors),
/* harmony export */   notifyEventProcessors: () => (/* binding */ notifyEventProcessors)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);


/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
  return (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobalSingleton)('globalEventProcessors', () => []);
}

/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}

/**
 * Process an array of event processors, returning the processed event (or `null` if the event was dropped).
 */
function notifyEventProcessors(
  processors,
  event,
  hint,
  index = 0,
) {
  return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.SyncPromise((resolve, reject) => {
    const processor = processors[index];
    if (event === null || typeof processor !== 'function') {
      resolve(event);
    } else {
      const result = processor({ ...event }, hint) ;

      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        processor.id &&
        result === null &&
        _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Event processor "${processor.id}" dropped event`);

      if ((0,_sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isThenable)(result)) {
        void result
          .then(final => notifyEventProcessors(processors, final, hint, index + 1).then(resolve))
          .then(null, reject);
      } else {
        void notifyEventProcessors(processors, result, hint, index + 1)
          .then(resolve)
          .then(null, reject);
      }
    }
  });
}




/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncPromise: () => (/* binding */ SyncPromise),
/* harmony export */   rejectedSyncPromise: () => (/* binding */ rejectedSyncPromise),
/* harmony export */   resolvedSyncPromise: () => (/* binding */ resolvedSyncPromise)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);


/* eslint-disable @typescript-eslint/explicit-function-return-type */

/** SyncPromise internal states */
var States; (function (States) {
  /** Pending */
  const PENDING = 0; States[States["PENDING"] = PENDING] = "PENDING";
  /** Resolved / OK */
  const RESOLVED = 1; States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
  /** Rejected / Error */
  const REJECTED = 2; States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
  return new SyncPromise(resolve => {
    resolve(value);
  });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
class SyncPromise {

   constructor(
    executor,
  ) {SyncPromise.prototype.__init.call(this);SyncPromise.prototype.__init2.call(this);SyncPromise.prototype.__init3.call(this);SyncPromise.prototype.__init4.call(this);
    this._state = States.PENDING;
    this._handlers = [];

    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  /** JSDoc */
   then(
    onfulfilled,
    onrejected,
  ) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        result => {
          if (!onfulfilled) {
            // TODO: ¯\_(ツ)_/¯
            // TODO: FIXME
            resolve(result );
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        reason => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        },
      ]);
      this._executeHandlers();
    });
  }

  /** JSDoc */
   catch(
    onrejected,
  ) {
    return this.then(val => val, onrejected);
  }

  /** JSDoc */
   finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;

      return this.then(
        value => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        reason => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        },
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }

        resolve(val );
      });
    });
  }

  /** JSDoc */
    __init() {this._resolve = (value) => {
    this._setResult(States.RESOLVED, value);
  };}

  /** JSDoc */
    __init2() {this._reject = (reason) => {
    this._setResult(States.REJECTED, reason);
  };}

  /** JSDoc */
    __init3() {this._setResult = (state, value) => {
    if (this._state !== States.PENDING) {
      return;
    }

    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isThenable)(value)) {
      void (value ).then(this._resolve, this._reject);
      return;
    }

    this._state = state;
    this._value = value;

    this._executeHandlers();
  };}

  /** JSDoc */
    __init4() {this._executeHandlers = () => {
    if (this._state === States.PENDING) {
      return;
    }

    const cachedHandlers = this._handlers.slice();
    this._handlers = [];

    cachedHandlers.forEach(handler => {
      if (handler[0]) {
        return;
      }

      if (this._state === States.RESOLVED) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handler[1](this._value );
      }

      if (this._state === States.REJECTED) {
        handler[2](this._value);
      }

      handler[0] = true;
    });
  };}
}




/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ENVIRONMENT: () => (/* binding */ DEFAULT_ENVIRONMENT)
/* harmony export */ });
const DEFAULT_ENVIRONMENT = 'production';




/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRACEPARENT_REGEXP: () => (/* binding */ TRACEPARENT_REGEXP),
/* harmony export */   extractTraceparentData: () => (/* binding */ extractTraceparentData),
/* harmony export */   generateSentryTraceHeader: () => (/* binding */ generateSentryTraceHeader),
/* harmony export */   tracingContextFromHeaders: () => (/* binding */ tracingContextFromHeaders)
/* harmony export */ });
/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);



const TRACEPARENT_REGEXP = new RegExp(
  '^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$', // whitespace
);

/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return undefined;
  }

  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return undefined;
  }

  let parentSampled;
  if (matches[3] === '1') {
    parentSampled = true;
  } else if (matches[3] === '0') {
    parentSampled = false;
  }

  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2],
  };
}

/**
 * Create tracing context from incoming headers.
 */
function tracingContextFromHeaders(
  sentryTrace,
  baggage,
)

 {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = (0,_baggage_js__WEBPACK_IMPORTED_MODULE_0__.baggageHeaderToDynamicSamplingContext)(baggage);

  const { traceId, parentSpanId, parentSampled } = traceparentData || {};

  const propagationContext = {
    traceId: traceId || (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)(),
    spanId: (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)().substring(16),
    sampled: parentSampled,
  };

  if (parentSpanId) {
    propagationContext.parentSpanId = parentSpanId;
  }

  if (dynamicSamplingContext) {
    propagationContext.dsc = dynamicSamplingContext ;
  }

  return {
    traceparentData,
    dynamicSamplingContext,
    propagationContext,
  };
}

/**
 * Create sentry-trace header from span context values.
 */
function generateSentryTraceHeader(
  traceId = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)(),
  spanId = (0,_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)().substring(16),
  sampled,
) {
  let sampledString = '';
  if (sampled !== undefined) {
    sampledString = sampled ? '-1' : '-0';
  }
  return `${traceId}-${spanId}${sampledString}`;
}




/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BAGGAGE_HEADER_NAME: () => (/* binding */ BAGGAGE_HEADER_NAME),
/* harmony export */   MAX_BAGGAGE_STRING_LENGTH: () => (/* binding */ MAX_BAGGAGE_STRING_LENGTH),
/* harmony export */   SENTRY_BAGGAGE_KEY_PREFIX: () => (/* binding */ SENTRY_BAGGAGE_KEY_PREFIX),
/* harmony export */   SENTRY_BAGGAGE_KEY_PREFIX_REGEX: () => (/* binding */ SENTRY_BAGGAGE_KEY_PREFIX_REGEX),
/* harmony export */   baggageHeaderToDynamicSamplingContext: () => (/* binding */ baggageHeaderToDynamicSamplingContext),
/* harmony export */   dynamicSamplingContextToSentryBaggageHeader: () => (/* binding */ dynamicSamplingContextToSentryBaggageHeader)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);



const BAGGAGE_HEADER_NAME = 'baggage';

const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';

const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
const MAX_BAGGAGE_STRING_LENGTH = 8192;

/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
function baggageHeaderToDynamicSamplingContext(
  // Very liberal definition of what any incoming header might look like
  baggageHeader,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(baggageHeader) && !Array.isArray(baggageHeader)) {
    return undefined;
  }

  // Intermediary object to store baggage key value pairs of incoming baggage headers on.
  // It is later used to read Sentry-DSC-values from.
  let baggageObject = {};

  if (Array.isArray(baggageHeader)) {
    // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
    baggageObject = baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      return {
        ...acc,
        ...currBaggageObject,
      };
    }, {});
  } else {
    // Return undefined if baggage header is an empty string (technically an empty baggage header is not spec conform but
    // this is how we choose to handle it)
    if (!baggageHeader) {
      return undefined;
    }

    baggageObject = baggageHeaderToObject(baggageHeader);
  }

  // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});

  // Only return a dynamic sampling context object if there are keys in it.
  // A keyless object means there were no sentry values on the header, which means that there is no DSC.
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext ;
  } else {
    return undefined;
  }
}

/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
function dynamicSamplingContextToSentryBaggageHeader(
  // this also takes undefined for convenience and bundle size in other places
  dynamicSamplingContext,
) {
  if (!dynamicSamplingContext) {
    return undefined;
  }

  // Prefix all DSC keys with "sentry-" and put them into a new object
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {},
  );

  return objectToBaggageHeader(sentryPrefixedDSC);
}

/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader
    .split(',')
    .map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim())))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}

/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    // An empty baggage header is not spec compliant: We return undefined.
    return undefined;
  }

  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
        _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`,
        );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, '');
}




/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNumberOfUrlSegments: () => (/* binding */ getNumberOfUrlSegments),
/* harmony export */   getSanitizedUrlString: () => (/* binding */ getSanitizedUrlString),
/* harmony export */   parseUrl: () => (/* binding */ parseUrl),
/* harmony export */   stripUrlQueryAndFragment: () => (/* binding */ stripUrlQueryAndFragment)
/* harmony export */ });
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
  if (!url) {
    return {};
  }

  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  if (!match) {
    return {};
  }

  // coerce to undefined values to empty string so we don't get 'undefined'
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment, // everything minus origin
  };
}

/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
  // eslint-disable-next-line no-useless-escape
  return urlPath.split(/[\?#]/, 1)[0];
}

/**
 * Returns number of URL segments of a passed string URL.
 */
function getNumberOfUrlSegments(url) {
  // split at '/' or at '\/' to split regex urls correctly
  return url.split(/\\?\//).filter(s => s.length > 0 && s !== ',').length;
}

/**
 * Takes a URL object and returns a sanitized string which is safe to use as span description
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */
function getSanitizedUrlString(url) {
  const { protocol, host, path } = url;

  const filteredHost =
    (host &&
      host
        // Always filter out authority
        .replace(/^.*@/, '[filtered]:[filtered]@')
        // Don't show standard :80 (http) and :443 (https) ports to reduce the noise
        .replace(':80', '')
        .replace(':443', '')) ||
    '';

  return `${protocol ? `${protocol}://` : ''}${filteredHost}${path}`;
}




/***/ }),
/* 70 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lazyLoadedNodePerformanceMonitoringIntegrations: () => (/* binding */ lazyLoadedNodePerformanceMonitoringIntegrations)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* module decorator */ module = __webpack_require__.hmd(module);


const lazyLoadedNodePerformanceMonitoringIntegrations = [
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './apollo')

;
    return new integration.Apollo();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './apollo')

;
    return new integration.Apollo({ useNestjs: true });
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './graphql')

;
    return new integration.GraphQL();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './mongo')

;
    return new integration.Mongo();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './mongo')

;
    return new integration.Mongo({ mongoose: true });
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './mysql')

;
    return new integration.Mysql();
  },
  () => {
    const integration = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dynamicRequire)(module, './postgres')

;
    return new integration.Postgres();
  },
];




/***/ }),
/* 71 */
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDynamicSamplingContextFromClient: () => (/* binding */ getDynamicSamplingContextFromClient)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);



/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatchs the `createDsc` lifecycle hook as a side effect.
 */
function getDynamicSamplingContextFromClient(
  trace_id,
  client,
  scope,
) {
  const options = client.getOptions();

  const { publicKey: public_key } = client.getDsn() || {};
  const { segment: user_segment } = (scope && scope.getUser()) || {};

  const dsc = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)({
    environment: options.environment || _constants_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ENVIRONMENT,
    release: options.release,
    user_segment,
    public_key,
    trace_id,
  }) ;

  client.emit && client.emit('createDsc', dsc);

  return dsc;
}




/***/ }),
/* 73 */
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),
/* 74 */
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),
/* 75 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const agent_1 = __importDefault(__webpack_require__(76));
function createHttpsProxyAgent(opts) {
    return new agent_1.default(opts);
}
(function (createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = agent_1.default;
    createHttpsProxyAgent.prototype = agent_1.default.prototype;
})(createHttpsProxyAgent || (createHttpsProxyAgent = {}));
module.exports = createHttpsProxyAgent;


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const net_1 = __importDefault(__webpack_require__(77));
const tls_1 = __importDefault(__webpack_require__(78));
const url_1 = __importDefault(__webpack_require__(79));
const assert_1 = __importDefault(__webpack_require__(28));
const debug_1 = __importDefault(__webpack_require__(80));
const agent_base_1 = __webpack_require__(88);
const parse_proxy_response_1 = __importDefault(__webpack_require__(90));
const debug = debug_1.default('https-proxy-agent:agent');
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */
class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(_opts) {
        let opts;
        if (typeof _opts === 'string') {
            opts = url_1.default.parse(_opts);
        }
        else {
            opts = _opts;
        }
        if (!opts) {
            throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        }
        debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') {
            proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
            proxy.port = this.secureProxy ? 443 : 80;
        }
        // ALPN is supported by Node.js >= v5.
        // attempt to negotiate http/1.1 for proxy servers that support http/2
        if (this.secureProxy && !('ALPNProtocols' in proxy)) {
            proxy.ALPNProtocols = ['http 1.1'];
        }
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { proxy, secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                debug('Creating `tls.Socket`: %o', proxy);
                socket = tls_1.default.connect(proxy);
            }
            else {
                debug('Creating `net.Socket`: %o', proxy);
                socket = net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) {
                headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            }
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host, port, secureEndpoint } = opts;
            if (!isDefaultPort(port, secureEndpoint)) {
                host += `:${port}`;
            }
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers)) {
                payload += `${name}: ${headers[name]}\r\n`;
            }
            const proxyResponsePromise = parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode, buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return tls_1.default.connect(Object.assign(Object.assign({}, omit(opts, 'host', 'hostname', 'path', 'port')), { socket,
                        servername }));
                }
                return socket;
            }
            // Some other status code that's not 200... need to re-play the HTTP
            // header "data" events onto the socket once the HTTP machinery is
            // attached so that the node core `http` can parse and handle the
            // error status code.
            // Close the original socket, and a new "fake" socket is returned
            // instead, so that the proxy doesn't get the HTTP request
            // written to it (which may contain `Authorization` headers or other
            // sensitive data).
            //
            // See: https://hackerone.com/reports/541502
            socket.destroy();
            const fakeSocket = new net_1.default.Socket({ writable: false });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s) => {
                debug('replaying proxy buffer for failed request');
                assert_1.default(s.listenerCount('data') > 0);
                // Replay the "buffered" Buffer onto the fake `socket`, since at
                // this point the HTTP module machinery has been hooked up for
                // the user.
                s.push(buffered);
                s.push(null);
            });
            return fakeSocket;
        });
    }
}
exports["default"] = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function isDefaultPort(port, secure) {
    return Boolean((!secure && port === 80) || (secure && port === 443));
}
function isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for (key in obj) {
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}


/***/ }),
/* 77 */
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),
/* 78 */
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),
/* 79 */
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),
/* 80 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(81);
} else {
	module.exports = __webpack_require__(84);
}


/***/ }),
/* 81 */
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(82)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(83);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 83 */
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 84 */
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(85);
const util = __webpack_require__(25);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(86);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(82)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),
/* 85 */
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(71);
const tty = __webpack_require__(85);
const hasFlag = __webpack_require__(87);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),
/* 87 */
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),
/* 88 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const events_1 = __webpack_require__(27);
const debug_1 = __importDefault(__webpack_require__(80));
const promisify_1 = __importDefault(__webpack_require__(89));
const debug = debug_1.default('agent-base');
function isAgent(v) {
    return Boolean(v) && typeof v.addRequest === 'function';
}
function isSecureEndpoint() {
    const { stack } = new Error();
    if (typeof stack !== 'string')
        return false;
    return stack.split('\n').some(l => l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
}
function createAgent(callback, opts) {
    return new createAgent.Agent(callback, opts);
}
(function (createAgent) {
    /**
     * Base `http.Agent` implementation.
     * No pooling/keep-alive is implemented by default.
     *
     * @param {Function} callback
     * @api public
     */
    class Agent extends events_1.EventEmitter {
        constructor(callback, _opts) {
            super();
            let opts = _opts;
            if (typeof callback === 'function') {
                this.callback = callback;
            }
            else if (callback) {
                opts = callback;
            }
            // Timeout for the socket to be returned from the callback
            this.timeout = null;
            if (opts && typeof opts.timeout === 'number') {
                this.timeout = opts.timeout;
            }
            // These aren't actually used by `agent-base`, but are required
            // for the TypeScript definition files in `@types/node` :/
            this.maxFreeSockets = 1;
            this.maxSockets = 1;
            this.maxTotalSockets = Infinity;
            this.sockets = {};
            this.freeSockets = {};
            this.requests = {};
            this.options = {};
        }
        get defaultPort() {
            if (typeof this.explicitDefaultPort === 'number') {
                return this.explicitDefaultPort;
            }
            return isSecureEndpoint() ? 443 : 80;
        }
        set defaultPort(v) {
            this.explicitDefaultPort = v;
        }
        get protocol() {
            if (typeof this.explicitProtocol === 'string') {
                return this.explicitProtocol;
            }
            return isSecureEndpoint() ? 'https:' : 'http:';
        }
        set protocol(v) {
            this.explicitProtocol = v;
        }
        callback(req, opts, fn) {
            throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
        }
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        addRequest(req, _opts) {
            const opts = Object.assign({}, _opts);
            if (typeof opts.secureEndpoint !== 'boolean') {
                opts.secureEndpoint = isSecureEndpoint();
            }
            if (opts.host == null) {
                opts.host = 'localhost';
            }
            if (opts.port == null) {
                opts.port = opts.secureEndpoint ? 443 : 80;
            }
            if (opts.protocol == null) {
                opts.protocol = opts.secureEndpoint ? 'https:' : 'http:';
            }
            if (opts.host && opts.path) {
                // If both a `host` and `path` are specified then it's most
                // likely the result of a `url.parse()` call... we need to
                // remove the `path` portion so that `net.connect()` doesn't
                // attempt to open that as a unix socket file.
                delete opts.path;
            }
            delete opts.agent;
            delete opts.hostname;
            delete opts._defaultAgent;
            delete opts.defaultPort;
            delete opts.createConnection;
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            req._last = true;
            req.shouldKeepAlive = false;
            let timedOut = false;
            let timeoutId = null;
            const timeoutMs = opts.timeout || this.timeout;
            const onerror = (err) => {
                if (req._hadError)
                    return;
                req.emit('error', err);
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req._hadError = true;
            };
            const ontimeout = () => {
                timeoutId = null;
                timedOut = true;
                const err = new Error(`A "socket" was not created for HTTP request before ${timeoutMs}ms`);
                err.code = 'ETIMEOUT';
                onerror(err);
            };
            const callbackError = (err) => {
                if (timedOut)
                    return;
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                onerror(err);
            };
            const onsocket = (socket) => {
                if (timedOut)
                    return;
                if (timeoutId != null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                if (isAgent(socket)) {
                    // `socket` is actually an `http.Agent` instance, so
                    // relinquish responsibility for this `req` to the Agent
                    // from here on
                    debug('Callback returned another Agent instance %o', socket.constructor.name);
                    socket.addRequest(req, opts);
                    return;
                }
                if (socket) {
                    socket.once('free', () => {
                        this.freeSocket(socket, opts);
                    });
                    req.onSocket(socket);
                    return;
                }
                const err = new Error(`no Duplex stream was returned to agent-base for \`${req.method} ${req.path}\``);
                onerror(err);
            };
            if (typeof this.callback !== 'function') {
                onerror(new Error('`callback` is not defined'));
                return;
            }
            if (!this.promisifiedCallback) {
                if (this.callback.length >= 3) {
                    debug('Converting legacy callback function to promise');
                    this.promisifiedCallback = promisify_1.default(this.callback);
                }
                else {
                    this.promisifiedCallback = this.callback;
                }
            }
            if (typeof timeoutMs === 'number' && timeoutMs > 0) {
                timeoutId = setTimeout(ontimeout, timeoutMs);
            }
            if ('port' in opts && typeof opts.port !== 'number') {
                opts.port = Number(opts.port);
            }
            try {
                debug('Resolving socket for %o request: %o', opts.protocol, `${req.method} ${req.path}`);
                Promise.resolve(this.promisifiedCallback(req, opts)).then(onsocket, callbackError);
            }
            catch (err) {
                Promise.reject(err).catch(callbackError);
            }
        }
        freeSocket(socket, opts) {
            debug('Freeing socket %o %o', socket.constructor.name, opts);
            socket.destroy();
        }
        destroy() {
            debug('Destroying agent %o', this.constructor.name);
        }
    }
    createAgent.Agent = Agent;
    // So that `instanceof` works correctly
    createAgent.prototype = createAgent.Agent.prototype;
})(createAgent || (createAgent = {}));
module.exports = createAgent;


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function promisify(fn) {
    return function (req, opts) {
        return new Promise((resolve, reject) => {
            fn.call(this, req, opts, (err, rtn) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rtn);
                }
            });
        });
    };
}
exports["default"] = promisify;


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__webpack_require__(80));
const debug = debug_1.default('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject) => {
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b)
                ondata(b);
            else
                socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('close', onclose);
            socket.removeListener('readable', read);
        }
        function onclose(err) {
            debug('onclose had error %o', err);
        }
        function onend() {
            debug('onend');
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const firstLine = buffered.toString('ascii', 0, buffered.indexOf('\r\n'));
            const statusCode = +firstLine.split(' ')[1];
            debug('got proxy server response: %o', firstLine);
            resolve({
                statusCode,
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('close', onclose);
        socket.on('end', onend);
        read();
    });
}
exports["default"] = parseProxyResponse;


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _optionalChain: () => (/* binding */ _optionalChain)
/* harmony export */ });
/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */
function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i] ;
    const fn = ops[i + 1] ;
    i += 2;
    // by checking for loose equality to `null`, we catch both `null` and `undefined`
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
      return;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => (value ).call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }
  return value;
}

// Sucrase version
// function _optionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     const op = ops[i];
//     const fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }




/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NODE_VERSION: () => (/* binding */ NODE_VERSION)
/* harmony export */ });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);


const NODE_VERSION = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_0__.parseSemver)(process.versions.node);




/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LRUMap: () => (/* binding */ LRUMap)
/* harmony export */ });
/** A simple Least Recently Used map */
class LRUMap {

   constructor(  _maxSize) {this._maxSize = _maxSize;
    this._cache = new Map();
  }

  /** Get the current size of the cache */
   get size() {
    return this._cache.size;
  }

  /** Get an entry or undefined if it was not in the cache. Re-inserts to update the recently used order */
   get(key) {
    const value = this._cache.get(key);
    if (value === undefined) {
      return undefined;
    }
    // Remove and re-insert to update the order
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }

  /** Insert an entry and evict an older entry if we've reached maxSize */
   set(key, value) {
    if (this._cache.size >= this._maxSize) {
      // keys() returns an iterator in insertion order so keys().next() gives us the oldest key
      this._cache.delete(this._cache.keys().next().value);
    }
    this._cache.set(key, value);
  }

  /** Remove an entry and return the entry if it was in the cache */
   remove(key) {
    const value = this._cache.get(key);
    if (value) {
      this._cache.delete(key);
    }
    return value;
  }

  /** Clear all entries */
   clear() {
    this._cache.clear();
  }

  /** Get all the keys */
   keys() {
    return Array.from(this._cache.keys());
  }

  /** Get all the values */
   values() {
    const values = [];
    this._cache.forEach(value => values.push(value));
    return values;
  }
}




/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSentryRequestUrl: () => (/* binding */ isSentryRequestUrl)
/* harmony export */ });
/**
 * Checks whether given url points to Sentry server
 * @param url url to verify
 */
function isSentryRequestUrl(url, hub) {
  const client = hub.getClient();
  const dsn = client && client.getDsn();
  const tunnel = client && client.getOptions().tunnel;

  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}

function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }

  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}

function checkDsn(url, dsn) {
  return dsn ? url.includes(dsn.host) : false;
}

function removeTrailingSlash(str) {
  return str[str.length - 1] === '/' ? str.slice(0, -1) : str;
}




/***/ }),
/* 95 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelName: () => (/* binding */ ChannelName),
/* harmony export */   Undici: () => (/* binding */ Undici)
/* harmony export */ });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69);
/* harmony import */ var _nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* module decorator */ module = __webpack_require__.hmd(module);





var ChannelName;(function (ChannelName) {
  // https://github.com/nodejs/undici/blob/e6fc80f809d1217814c044f52ed40ef13f21e43c/docs/api/DiagnosticsChannel.md#undicirequestcreate
  const RequestCreate = 'undici:request:create'; ChannelName["RequestCreate"] = RequestCreate;
  const RequestEnd = 'undici:request:headers'; ChannelName["RequestEnd"] = RequestEnd;
  const RequestError = 'undici:request:error'; ChannelName["RequestError"] = RequestError;
})(ChannelName || (ChannelName = {}));

// Please note that you cannot use `console.log` to debug the callbacks registered to the `diagnostics_channel` API.
// To debug, you can use `writeFileSync` to write to a file:
// https://nodejs.org/api/async_hooks.html#printing-in-asynchook-callbacks
//
// import { writeFileSync } from 'fs';
// import { format } from 'util';
//
// function debug(...args: any): void {
//   // Use a function like this one when debugging inside an AsyncHook callback
//   // @ts-expect-error any
//   writeFileSync('log.out', `${format(...args)}\n`, { flag: 'a' });
// }

/**
 * Instruments outgoing HTTP requests made with the `undici` package via
 * Node's `diagnostics_channel` API.
 *
 * Supports Undici 4.7.0 or higher.
 *
 * Requires Node 16.17.0 or higher.
 */
class Undici  {
  /**
   * @inheritDoc
   */
   static __initStatic() {this.id = 'Undici';}

  /**
   * @inheritDoc
   */
   __init() {this.name = Undici.id;}

    __init2() {this._createSpanUrlMap = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.LRUMap(100);}
    __init3() {this._headersUrlMap = new _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.LRUMap(100);}

   constructor(_options = {}) {Undici.prototype.__init.call(this);Undici.prototype.__init2.call(this);Undici.prototype.__init3.call(this);Undici.prototype.__init4.call(this);Undici.prototype.__init5.call(this);Undici.prototype.__init6.call(this);
    this._options = {
      breadcrumbs: _options.breadcrumbs === undefined ? true : _options.breadcrumbs,
      shouldCreateSpanForRequest: _options.shouldCreateSpanForRequest,
    };
  }

  /**
   * @inheritDoc
   */
   setupOnce(_addGlobalEventProcessor) {
    // Requires Node 16+ to use the diagnostics_channel API.
    if (_nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__.NODE_VERSION.major && _nodeVersion_js__WEBPACK_IMPORTED_MODULE_1__.NODE_VERSION.major < 16) {
      return;
    }

    let ds;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      ds = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dynamicRequire)(module, 'diagnostics_channel') ;
    } catch (e) {
      // no-op
    }

    if (!ds || !ds.subscribe) {
      return;
    }

    // https://github.com/nodejs/undici/blob/e6fc80f809d1217814c044f52ed40ef13f21e43c/docs/api/DiagnosticsChannel.md
    ds.subscribe(ChannelName.RequestCreate, this._onRequestCreate);
    ds.subscribe(ChannelName.RequestEnd, this._onRequestEnd);
    ds.subscribe(ChannelName.RequestError, this._onRequestError);
  }

  /** Helper that wraps shouldCreateSpanForRequest option */
   _shouldCreateSpan(url) {
    if (this._options.shouldCreateSpanForRequest === undefined) {
      return true;
    }

    const cachedDecision = this._createSpanUrlMap.get(url);
    if (cachedDecision !== undefined) {
      return cachedDecision;
    }

    const decision = this._options.shouldCreateSpanForRequest(url);
    this._createSpanUrlMap.set(url, decision);
    return decision;
  }

   __init4() {this._onRequestCreate = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__.getCurrentHub)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_sentry_core__WEBPACK_IMPORTED_MODULE_4__.isSentryRequestUrl)(stringUrl, hub) || request.__sentry_span__ !== undefined) {
      return;
    }

    const client = hub.getClient();
    if (!client) {
      return;
    }

    const clientOptions = client.getOptions();
    const scope = hub.getScope();

    const parentSpan = scope.getSpan();

    const span = this._shouldCreateSpan(stringUrl) ? createRequestSpan(parentSpan, request, stringUrl) : undefined;
    if (span) {
      request.__sentry_span__ = span;
    }

    const shouldAttachTraceData = (url) => {
      if (clientOptions.tracePropagationTargets === undefined) {
        return true;
      }

      const cachedDecision = this._headersUrlMap.get(url);
      if (cachedDecision !== undefined) {
        return cachedDecision;
      }

      const decision = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_5__.stringMatchesSomePattern)(url, clientOptions.tracePropagationTargets);
      this._headersUrlMap.set(url, decision);
      return decision;
    };

    if (shouldAttachTraceData(stringUrl)) {
      if (span) {
        const dynamicSamplingContext = (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__._optionalChain)([span, 'optionalAccess', _4 => _4.transaction, 'optionalAccess', _5 => _5.getDynamicSamplingContext, 'call', _6 => _6()]);
        const sentryBaggageHeader = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicSamplingContextToSentryBaggageHeader)(dynamicSamplingContext);

        setHeadersOnRequest(request, span.toTraceparent(), sentryBaggageHeader);
      } else {
        const { traceId, sampled, dsc } = scope.getPropagationContext();
        const sentryTrace = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_8__.generateSentryTraceHeader)(traceId, undefined, sampled);
        const dynamicSamplingContext = dsc || (0,_sentry_core__WEBPACK_IMPORTED_MODULE_9__.getDynamicSamplingContextFromClient)(traceId, client, scope);
        const sentryBaggageHeader = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_7__.dynamicSamplingContextToSentryBaggageHeader)(dynamicSamplingContext);
        setHeadersOnRequest(request, sentryTrace, sentryBaggageHeader);
      }
    }
  };}

   __init5() {this._onRequestEnd = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__.getCurrentHub)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request, response } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_sentry_core__WEBPACK_IMPORTED_MODULE_4__.isSentryRequestUrl)(stringUrl, hub)) {
      return;
    }

    const span = request.__sentry_span__;
    if (span) {
      span.setHttpStatus(response.statusCode);
      span.finish();
    }

    if (this._options.breadcrumbs) {
      hub.addBreadcrumb(
        {
          category: 'http',
          data: {
            method: request.method,
            status_code: response.statusCode,
            url: stringUrl,
          },
          type: 'http',
        },
        {
          event: 'response',
          request,
          response,
        },
      );
    }
  };}

   __init6() {this._onRequestError = (message) => {
    const hub = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__.getCurrentHub)();
    if (!hub.getIntegration(Undici)) {
      return;
    }

    const { request } = message ;

    const stringUrl = request.origin ? request.origin.toString() + request.path : request.path;

    if ((0,_sentry_core__WEBPACK_IMPORTED_MODULE_4__.isSentryRequestUrl)(stringUrl, hub)) {
      return;
    }

    const span = request.__sentry_span__;
    if (span) {
      span.setStatus('internal_error');
      span.finish();
    }

    if (this._options.breadcrumbs) {
      hub.addBreadcrumb(
        {
          category: 'http',
          data: {
            method: request.method,
            url: stringUrl,
          },
          level: 'error',
          type: 'http',
        },
        {
          event: 'error',
          request,
        },
      );
    }
  };}
}Undici.__initStatic();

function setHeadersOnRequest(
  request,
  sentryTrace,
  sentryBaggageHeader,
) {
  if (request.__sentry_has_headers__) {
    return;
  }

  request.addHeader('sentry-trace', sentryTrace);
  if (sentryBaggageHeader) {
    request.addHeader('baggage', sentryBaggageHeader);
  }

  request.__sentry_has_headers__ = true;
}

function createRequestSpan(
  activeSpan,
  request,
  stringUrl,
) {
  const url = (0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.parseUrl)(stringUrl);

  const method = request.method || 'GET';
  const data = {
    'http.method': method,
  };
  if (url.search) {
    data['http.query'] = url.search;
  }
  if (url.hash) {
    data['http.fragment'] = url.hash;
  }
  return (0,_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_6__._optionalChain)([activeSpan, 'optionalAccess', _7 => _7.startChild, 'call', _8 => _8({
    op: 'http.client',
    origin: 'auto.http.node.undici',
    description: `${method} ${(0,_sentry_utils__WEBPACK_IMPORTED_MODULE_10__.getSanitizedUrlString)(url)}`,
    data,
  })]);
}




/***/ }),
/* 96 */
/***/ ((module) => {

"use strict";
module.exports = require("inspector");

/***/ }),
/* 97 */
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentryFilter = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const Sentry = tslib_1.__importStar(__webpack_require__(52));
const base_exception_filter_1 = __webpack_require__(99);
let SentryFilter = class SentryFilter extends base_exception_filter_1.BaseExceptionFilter {
    handleUnknownError(exception, host, applicationRef) {
        Sentry.captureException(exception);
        super.handleUnknownError(exception, host, applicationRef);
    }
};
exports.SentryFilter = SentryFilter;
exports.SentryFilter = SentryFilter = tslib_1.__decorate([
    (0, common_1.Catch)()
], SentryFilter);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseExceptionFilter = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const shared_utils_1 = __webpack_require__(100);
const constants_1 = __webpack_require__(101);
const http_adapter_host_1 = __webpack_require__(102);
class BaseExceptionFilter {
    constructor(applicationRef) {
        this.applicationRef = applicationRef;
    }
    catch(exception, host) {
        const applicationRef = this.applicationRef ||
            (this.httpAdapterHost && this.httpAdapterHost.httpAdapter);
        if (!(exception instanceof common_1.HttpException)) {
            return this.handleUnknownError(exception, host, applicationRef);
        }
        const res = exception.getResponse();
        const message = (0, shared_utils_1.isObject)(res)
            ? res
            : {
                statusCode: exception.getStatus(),
                message: res,
            };
        const response = host.getArgByIndex(1);
        if (!applicationRef.isHeadersSent(response)) {
            applicationRef.reply(response, message, exception.getStatus());
        }
        else {
            applicationRef.end(response);
        }
    }
    handleUnknownError(exception, host, applicationRef) {
        const body = this.isHttpError(exception)
            ? {
                statusCode: exception.statusCode,
                message: exception.message,
            }
            : {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: constants_1.MESSAGES.UNKNOWN_EXCEPTION_MESSAGE,
            };
        const response = host.getArgByIndex(1);
        if (!applicationRef.isHeadersSent(response)) {
            applicationRef.reply(response, body, body.statusCode);
        }
        else {
            applicationRef.end(response);
        }
        if (this.isExceptionObject(exception)) {
            return BaseExceptionFilter.logger.error(exception.message, exception.stack);
        }
        return BaseExceptionFilter.logger.error(exception);
    }
    isExceptionObject(err) {
        return (0, shared_utils_1.isObject)(err) && !!err.message;
    }
    /**
     * Checks if the thrown error comes from the "http-errors" library.
     * @param err error object
     */
    isHttpError(err) {
        return err?.statusCode && err?.message;
    }
}
exports.BaseExceptionFilter = BaseExceptionFilter;
BaseExceptionFilter.logger = new common_1.Logger('ExceptionsHandler');
tslib_1.__decorate([
    (0, common_1.Optional)(),
    (0, common_1.Inject)(),
    tslib_1.__metadata("design:type", http_adapter_host_1.HttpAdapterHost)
], BaseExceptionFilter.prototype, "httpAdapterHost", void 0);


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSymbol = exports.isEmpty = exports.isNil = exports.isConstructor = exports.isNumber = exports.isString = exports.isFunction = exports.stripEndSlash = exports.normalizePath = exports.addLeadingSlash = exports.isPlainObject = exports.isObject = exports.isUndefined = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
const isUndefined = (obj) => typeof obj === 'undefined';
exports.isUndefined = isUndefined;
const isObject = (fn) => !(0, exports.isNil)(fn) && typeof fn === 'object';
exports.isObject = isObject;
const isPlainObject = (fn) => {
    if (!(0, exports.isObject)(fn)) {
        return false;
    }
    const proto = Object.getPrototypeOf(fn);
    if (proto === null) {
        return true;
    }
    const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
        proto.constructor;
    return (typeof ctor === 'function' &&
        ctor instanceof ctor &&
        Function.prototype.toString.call(ctor) ===
            Function.prototype.toString.call(Object));
};
exports.isPlainObject = isPlainObject;
const addLeadingSlash = (path) => path && typeof path === 'string'
    ? path.charAt(0) !== '/'
        ? '/' + path
        : path
    : '';
exports.addLeadingSlash = addLeadingSlash;
const normalizePath = (path) => path
    ? path.startsWith('/')
        ? ('/' + path.replace(/\/+$/, '')).replace(/\/+/g, '/')
        : '/' + path.replace(/\/+$/, '')
    : '/';
exports.normalizePath = normalizePath;
const stripEndSlash = (path) => path[path.length - 1] === '/' ? path.slice(0, path.length - 1) : path;
exports.stripEndSlash = stripEndSlash;
const isFunction = (val) => typeof val === 'function';
exports.isFunction = isFunction;
const isString = (val) => typeof val === 'string';
exports.isString = isString;
const isNumber = (val) => typeof val === 'number';
exports.isNumber = isNumber;
const isConstructor = (val) => val === 'constructor';
exports.isConstructor = isConstructor;
const isNil = (val) => (0, exports.isUndefined)(val) || val === null;
exports.isNil = isNil;
const isEmpty = (array) => !(array && array.length > 0);
exports.isEmpty = isEmpty;
const isSymbol = (val) => typeof val === 'symbol';
exports.isSymbol = isSymbol;


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENHANCER_TOKEN_TO_SUBTYPE_MAP = exports.APP_FILTER = exports.APP_GUARD = exports.APP_PIPE = exports.APP_INTERCEPTOR = exports.MESSAGES = void 0;
exports.MESSAGES = {
    APPLICATION_START: `Starting Nest application...`,
    APPLICATION_READY: `Nest application successfully started`,
    MICROSERVICE_READY: `Nest microservice successfully started`,
    UNKNOWN_EXCEPTION_MESSAGE: 'Internal server error',
    ERROR_DURING_SHUTDOWN: 'Error happened during shutdown',
    CALL_LISTEN_FIRST: 'app.listen() needs to be called before calling app.getUrl()',
};
exports.APP_INTERCEPTOR = 'APP_INTERCEPTOR';
exports.APP_PIPE = 'APP_PIPE';
exports.APP_GUARD = 'APP_GUARD';
exports.APP_FILTER = 'APP_FILTER';
exports.ENHANCER_TOKEN_TO_SUBTYPE_MAP = {
    [exports.APP_GUARD]: 'guard',
    [exports.APP_INTERCEPTOR]: 'interceptor',
    [exports.APP_PIPE]: 'pipe',
    [exports.APP_FILTER]: 'filter',
};


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpAdapterHost = void 0;
/**
 * Defines the `HttpAdapterHost` object.
 *
 * `HttpAdapterHost` wraps the underlying
 * platform-specific `HttpAdapter`.  The `HttpAdapter` is a wrapper around the underlying
 * native HTTP server library (e.g., Express).  The `HttpAdapterHost` object
 * provides methods to `get` and `set` the underlying HttpAdapter.
 *
 * @see [Http adapter](https://docs.nestjs.com/faq/http-adapter)
 *
 * @publicApi
 */
class HttpAdapterHost {
    /**
     * Accessor for the underlying `HttpAdapter`
     *
     * @param httpAdapter reference to the `HttpAdapter` to be set
     */
    set httpAdapter(httpAdapter) {
        this._httpAdapter = httpAdapter;
    }
    /**
     * Accessor for the underlying `HttpAdapter`
     *
     * @example
     * `const httpAdapter = adapterHost.httpAdapter;`
     */
    get httpAdapter() {
        return this._httpAdapter;
    }
}
exports.HttpAdapterHost = HttpAdapterHost;


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const nest_utils_1 = __webpack_require__(4);
const cqrs_1 = __webpack_require__(42);
const orm_config_1 = tslib_1.__importDefault(__webpack_require__(104));
const nestjs_1 = __webpack_require__(126);
const commandHandlers = (0, nest_utils_1.importFilesByGlob)(__webpack_require__(138));
console.log(`Loading ${commandHandlers.length} handlers: ${commandHandlers
    .map((h) => h.name)
    .join(', ')}`);
const controllers = (0, nest_utils_1.importFilesByGlob)(__webpack_require__(171));
console.log(`Loading ${controllers.length} controllers: ${controllers
    .map((h) => h.name)
    .join(', ')}`);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            nestjs_1.MikroOrmModule.forRoot({
                ...orm_config_1.default,
                tsNode: false,
            }),
        ],
        controllers: controllers,
        providers: commandHandlers,
    })
], AppModule);


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noEntityFoundError = void 0;
const tslib_1 = __webpack_require__(1);
const core_utils_1 = __webpack_require__(6);
const not_found_exception_1 = __webpack_require__(105);
const path_1 = tslib_1.__importDefault(__webpack_require__(19));
const config_1 = tslib_1.__importDefault(__webpack_require__(108));
const getEntities = () => {
    if (true) {
        const extracted = __webpack_require__(112);
        return (0, core_utils_1.importFilesByGlob)(extracted);
    }
    return (0, core_utils_1.importClasses)([`${__dirname}/../../../libs/core-db/**/*.entity.ts`]);
};
const noEntityFoundError = function (entityName) {
    throw new not_found_exception_1.NotFoundException(`entityNotFound`, `${entityName} NotFound`);
};
exports.noEntityFoundError = noEntityFoundError;
exports["default"] = {
    type: 'postgresql',
    tsNode: true,
    entities: getEntities(),
    discovery: { disableDynamicFileAccess: true },
    user: config_1.default.db.user,
    password: config_1.default.db.password,
    dbName: config_1.default.db.dbName,
    host: config_1.default.db.host,
    port: config_1.default.db.port,
    driverOptions: { connection: { ssl: config_1.default.db.ssl } },
    findOneOrFailHandler: exports.noEntityFoundError,
    migrations: {
        path: path_1.default.join(__dirname, 'migrations'),
        tableName: 'migrations',
        transactional: true,
        pattern: /^[\w-]+\d+\.(ts|js)$/,
        disableForeignKeys: false,
        emit: 'js',
    },
};


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotFoundException = void 0;
const http_status_enum_1 = __webpack_require__(106);
const http_exception_1 = __webpack_require__(107);
/**
 * Defines an HTTP exception for *Not Found* type errors.
 *
 * @see [Built-in HTTP exceptions](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)
 *
 * @publicApi
 */
class NotFoundException extends http_exception_1.HttpException {
    /**
     * Instantiate a `NotFoundException` Exception.
     *
     * @example
     * `throw new NotFoundException()`
     *
     * @usageNotes
     * The HTTP response status code will be 404.
     * - The `objectOrError` argument defines the JSON response body or the message string.
     * - The `descriptionOrOptions` argument contains either a short description of the HTTP error or an options object used to provide an underlying error cause.
     *
     * By default, the JSON response body contains two properties:
     * - `statusCode`: this will be the value 404.
     * - `message`: the string `'Not Found'` by default; override this by supplying
     * a string in the `objectOrError` parameter.
     *
     * If the parameter `objectOrError` is a string, the response body will contain an
     * additional property, `error`, with a short description of the HTTP error. To override the
     * entire JSON response body, pass an object instead. Nest will serialize the object
     * and return it as the JSON response body.
     *
     * @param objectOrError string or object describing the error condition.
     * @param descriptionOrOptions either a short description of the HTTP error or an options object used to provide an underlying error cause
     */
    constructor(objectOrError, descriptionOrOptions = 'Not Found') {
        const { description, httpExceptionOptions } = http_exception_1.HttpException.extractDescriptionAndOptionsFrom(descriptionOrOptions);
        super(http_exception_1.HttpException.createBody(objectOrError, description, http_status_enum_1.HttpStatus.NOT_FOUND), http_status_enum_1.HttpStatus.NOT_FOUND, httpExceptionOptions);
    }
}
exports.NotFoundException = NotFoundException;


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpStatus = void 0;
/**
 * @publicApi
 */
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["EARLYHINTS"] = 103] = "EARLYHINTS";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatus[HttpStatus["MISDIRECTED"] = 421] = "MISDIRECTED";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpException = void 0;
const shared_utils_1 = __webpack_require__(100);
/**
 * Defines the base Nest HTTP exception, which is handled by the default
 * Exceptions Handler.
 *
 * @see [Built-in HTTP exceptions](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)
 *
 * @publicApi
 */
class HttpException extends Error {
    /**
     * Instantiate a plain HTTP Exception.
     *
     * @example
     * throw new HttpException()
     * throw new HttpException('message', HttpStatus.BAD_REQUEST)
     * throw new HttpException('custom message', HttpStatus.BAD_REQUEST, {
     *  cause: new Error('Cause Error'),
     * })
     *
     *
     * @usageNotes
     * The constructor arguments define the response and the HTTP response status code.
     * - The `response` argument (required) defines the JSON response body. alternatively, it can also be
     *  an error object that is used to define an error [cause](https://nodejs.org/en/blog/release/v16.9.0/#error-cause).
     * - The `status` argument (required) defines the HTTP Status Code.
     * - The `options` argument (optional) defines additional error options. Currently, it supports the `cause` attribute,
     *  and can be used as an alternative way to specify the error cause: `const error = new HttpException('description', 400, { cause: new Error() });`
     *
     * By default, the JSON response body contains two properties:
     * - `statusCode`: the Http Status Code.
     * - `message`: a short description of the HTTP error by default; override this
     * by supplying a string in the `response` parameter.
     *
     * To override the entire JSON response body, pass an object to the `createBody`
     * method. Nest will serialize the object and return it as the JSON response body.
     *
     * The `status` argument is required, and should be a valid HTTP status code.
     * Best practice is to use the `HttpStatus` enum imported from `nestjs/common`.
     *
     * @param response string, object describing the error condition or the error cause.
     * @param status HTTP response status code.
     * @param options An object used to add an error cause.
     */
    constructor(response, status, options) {
        super();
        this.response = response;
        this.status = status;
        this.options = options;
        this.initMessage();
        this.initName();
        this.initCause();
    }
    /**
     * Configures error chaining support
     *
     * @see https://nodejs.org/en/blog/release/v16.9.0/#error-cause
     * @see https://github.com/microsoft/TypeScript/issues/45167
     */
    initCause() {
        if (this.options?.cause) {
            this.cause = this.options.cause;
            return;
        }
    }
    initMessage() {
        if ((0, shared_utils_1.isString)(this.response)) {
            this.message = this.response;
        }
        else if ((0, shared_utils_1.isObject)(this.response) &&
            (0, shared_utils_1.isString)(this.response.message)) {
            this.message = this.response.message;
        }
        else if (this.constructor) {
            this.message =
                this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g)?.join(' ') ??
                    'Error';
        }
    }
    initName() {
        this.name = this.constructor.name;
    }
    getResponse() {
        return this.response;
    }
    getStatus() {
        return this.status;
    }
    static createBody(arg0, arg1, statusCode) {
        if (!arg0) {
            return {
                message: arg1,
                statusCode: statusCode,
            };
        }
        if ((0, shared_utils_1.isString)(arg0) || Array.isArray(arg0)) {
            return {
                message: arg0,
                error: arg1,
                statusCode: statusCode,
            };
        }
        return arg0;
    }
    static getDescriptionFrom(descriptionOrOptions) {
        return (0, shared_utils_1.isString)(descriptionOrOptions)
            ? descriptionOrOptions
            : descriptionOrOptions?.description;
    }
    static getHttpExceptionOptionsFrom(descriptionOrOptions) {
        return (0, shared_utils_1.isString)(descriptionOrOptions) ? {} : descriptionOrOptions;
    }
    /**
     * Utility method used to extract the error description and httpExceptionOptions from the given argument.
     * This is used by inheriting classes to correctly parse both options.
     * @returns the error description and the httpExceptionOptions as an object.
     */
    static extractDescriptionAndOptionsFrom(descriptionOrOptions) {
        const description = (0, shared_utils_1.isString)(descriptionOrOptions)
            ? descriptionOrOptions
            : descriptionOrOptions?.description;
        const httpExceptionOptions = (0, shared_utils_1.isString)(descriptionOrOptions)
            ? {}
            : descriptionOrOptions;
        return {
            description,
            httpExceptionOptions,
        };
    }
}
exports.HttpException = HttpException;


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const tslib_1 = __webpack_require__(1);
const config_json_1 = tslib_1.__importDefault(__webpack_require__(109));
const core_utils_1 = __webpack_require__(6);
const config = (0, core_utils_1.processConfig)(config_json_1.default, () => __webpack_require__(110)(`./config.${process.env.NODE_ENV}.json`));
exports.config = config;
exports["default"] = config;


/***/ }),
/* 109 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"nodeEnv":"local","cors":{"origin":"*","credentials":true},"port":4006,"sentry":{"dsn":"_","tracesSampleRate":1,"sampleRate":1},"db":{"user":"root","password":"root","dbName":"MATCH_MATE","host":"localhost","port":5432,"ssl":false}}');

/***/ }),
/* 110 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./config.test.json": 111
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 110;

/***/ }),
/* 111 */
/***/ ((module) => {

"use strict";
module.exports = {"nodeEnv":"test"};

/***/ }),
/* 112 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./src/entities/game.entity.ts": 113,
	"./src/entities/player.entity.ts": 119,
	"./src/entities/score.entity.ts": 115,
	"./src/entities/tournament.entity.ts": 120,
	"./src/utils/base.entity.ts": 117
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 112;

/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_1 = __webpack_require__(114);
const score_entity_1 = __webpack_require__(115);
const utils_1 = __webpack_require__(116);
const types_1 = __webpack_require__(121);
const tournament_entity_1 = __webpack_require__(120);
let Game = class Game extends utils_1.Base {
    constructor() {
        super(...arguments);
        this.gameStatus = types_1.GameStatus.planned;
        this.scores = new core_1.Collection(this);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { gameStatus: { required: true, type: () => Object, default: types_1.GameStatus.planned, enum: (__webpack_require__(122).GameStatus) }, scores: { required: true, type: () => Object, default: new core_1.Collection(this) }, tournament: { required: true, type: () => (__webpack_require__(120).Tournament) } };
    }
};
exports.Game = Game;
tslib_1.__decorate([
    (0, core_1.Enum)({ items: () => types_1.GameStatus, default: types_1.GameStatus.planned }),
    tslib_1.__metadata("design:type", Object)
], Game.prototype, "gameStatus", void 0);
tslib_1.__decorate([
    (0, core_1.OneToMany)(() => score_entity_1.Score, (score) => score.game),
    tslib_1.__metadata("design:type", Object)
], Game.prototype, "scores", void 0);
tslib_1.__decorate([
    (0, core_1.ManyToOne)(() => tournament_entity_1.Tournament, { onDelete: 'cascade' }),
    tslib_1.__metadata("design:type", tournament_entity_1.Tournament)
], Game.prototype, "tournament", void 0);
exports.Game = Game = tslib_1.__decorate([
    (0, core_1.Entity)()
], Game);


/***/ }),
/* 114 */
/***/ ((module) => {

"use strict";
module.exports = require("@mikro-orm/core");

/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Score = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_1 = __webpack_require__(114);
const utils_1 = __webpack_require__(116);
const game_entity_1 = __webpack_require__(113);
const player_entity_1 = __webpack_require__(119);
let Score = class Score extends utils_1.Base {
    constructor() {
        super(...arguments);
        this.gamePoints = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { gamePoints: { required: true, type: () => Object, default: 0 }, rakingPoints: { required: false, type: () => Number }, player: { required: true, type: () => (__webpack_require__(119).Player) }, game: { required: true, type: () => (__webpack_require__(113).Game) } };
    }
};
exports.Score = Score;
tslib_1.__decorate([
    (0, core_1.Property)({ default: 0 }),
    tslib_1.__metadata("design:type", Object)
], Score.prototype, "gamePoints", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Score.prototype, "rakingPoints", void 0);
tslib_1.__decorate([
    (0, core_1.ManyToOne)(() => player_entity_1.Player, { onDelete: 'cascade' }),
    tslib_1.__metadata("design:type", player_entity_1.Player)
], Score.prototype, "player", void 0);
tslib_1.__decorate([
    (0, core_1.ManyToOne)(() => game_entity_1.Game, { onDelete: 'cascade' }),
    tslib_1.__metadata("design:type", game_entity_1.Game)
], Score.prototype, "game", void 0);
exports.Score = Score = tslib_1.__decorate([
    (0, core_1.Entity)()
], Score);


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_1 = __webpack_require__(114);
const class_transformer_1 = __webpack_require__(38);
const uuid_1 = __webpack_require__(118);
class Base extends core_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    assign(data, options) {
        return super.assign(data
            ? (0, class_transformer_1.instanceToPlain)(data, { exposeUnsetFields: false })
            : {}, {
            ...options,
            mergeObjects: true,
            updateByPrimaryKey: false,
        });
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, createdAt: { required: true, type: () => Date, default: new Date() }, updatedAt: { required: true, type: () => Date, default: new Date() } };
    }
}
exports.Base = Base;
tslib_1.__decorate([
    (0, core_1.PrimaryKey)({ columnType: 'uuid' }),
    tslib_1.__metadata("design:type", String)
], Base.prototype, "id", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ defaultRaw: `now()`, columnType: 'timestamptz(3)' }),
    tslib_1.__metadata("design:type", Date)
], Base.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({
        defaultRaw: `now()`,
        columnType: 'timestamptz(3)',
        onUpdate: () => new Date(),
    }),
    tslib_1.__metadata("design:type", Date)
], Base.prototype, "updatedAt", void 0);


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NIL: () => (/* reexport */ nil),
  parse: () => (/* reexport */ esm_node_parse),
  stringify: () => (/* reexport */ esm_node_stringify),
  v1: () => (/* reexport */ esm_node_v1),
  v3: () => (/* reexport */ esm_node_v3),
  v4: () => (/* reexport */ esm_node_v4),
  v5: () => (/* reexport */ esm_node_v5),
  validate: () => (/* reexport */ esm_node_validate),
  version: () => (/* reexport */ esm_node_version)
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(97);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || unsafeStringify(b);
}

/* harmony default export */ const esm_node_v1 = (v1);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/parse.js


function parse(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_node_parse = (parse);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_node_parse(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/md5.js


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const esm_node_md5 = (md5);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v3.js


const v3 = v35('v3', 0x30, esm_node_md5);
/* harmony default export */ const esm_node_v3 = (v3);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/native.js

/* harmony default export */ const esm_node_native = ({
  randomUUID: (external_crypto_default()).randomUUID
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v4.js




function v4(options, buf, offset) {
  if (esm_node_native.randomUUID && !buf && !options) {
    return esm_node_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/sha1.js


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const esm_node_sha1 = (sha1);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v5.js


const v5 = v35('v5', 0x50, esm_node_sha1);
/* harmony default export */ const esm_node_v5 = (v5);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/version.js


function version(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* harmony default export */ const esm_node_version = (version);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/index.js










/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_1 = __webpack_require__(114);
const utils_1 = __webpack_require__(116);
const score_entity_1 = __webpack_require__(115);
const tournament_entity_1 = __webpack_require__(120);
const player_repository_1 = __webpack_require__(124);
let Player = class Player extends utils_1.Base {
    constructor() {
        super(...arguments);
        this.scores = new core_1.Collection(this);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, tournament: { required: true, type: () => (__webpack_require__(120).Tournament) }, scores: { required: true, type: () => Object, default: new core_1.Collection(this) } };
    }
};
exports.Player = Player;
tslib_1.__decorate([
    (0, core_1.Property)(),
    tslib_1.__metadata("design:type", String)
], Player.prototype, "name", void 0);
tslib_1.__decorate([
    (0, core_1.ManyToOne)(() => tournament_entity_1.Tournament, { onDelete: 'cascade' }),
    tslib_1.__metadata("design:type", tournament_entity_1.Tournament)
], Player.prototype, "tournament", void 0);
tslib_1.__decorate([
    (0, core_1.OneToMany)(() => score_entity_1.Score, (score) => score.player),
    tslib_1.__metadata("design:type", Object)
], Player.prototype, "scores", void 0);
exports.Player = Player = tslib_1.__decorate([
    (0, core_1.Entity)({ customRepository: () => player_repository_1.PlayerRepository })
], Player);


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tournament = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_1 = __webpack_require__(114);
const utils_1 = __webpack_require__(116);
const player_entity_1 = __webpack_require__(119);
const types_1 = __webpack_require__(121);
const game_entity_1 = __webpack_require__(113);
let Tournament = class Tournament extends utils_1.Base {
    constructor() {
        super(...arguments);
        this.type = types_1.TournamentType.roundRobin;
        this.isHighScoreWin = true;
        this.players = new core_1.Collection(this);
        this.games = new core_1.Collection(this);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, type: { required: true, type: () => Object, default: types_1.TournamentType.roundRobin, enum: (__webpack_require__(123).TournamentType) }, publicCode: { required: false, type: () => String }, isHighScoreWin: { required: true, type: () => Object, default: true }, bestOf: { required: false, type: () => Number }, pointsOnWin: { required: false, type: () => Number }, pointsOnTie: { required: false, type: () => Number }, pointsOnLoss: { required: false, type: () => Number }, players: { required: true, type: () => Object, default: new core_1.Collection(this) }, games: { required: true, type: () => Object, default: new core_1.Collection(this) } };
    }
};
exports.Tournament = Tournament;
tslib_1.__decorate([
    (0, core_1.Property)(),
    tslib_1.__metadata("design:type", String)
], Tournament.prototype, "name", void 0);
tslib_1.__decorate([
    (0, core_1.Enum)({ items: () => types_1.TournamentType, default: types_1.TournamentType.roundRobin }),
    tslib_1.__metadata("design:type", Object)
], Tournament.prototype, "type", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Tournament.prototype, "publicCode", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ default: true }),
    tslib_1.__metadata("design:type", Object)
], Tournament.prototype, "isHighScoreWin", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Tournament.prototype, "bestOf", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Tournament.prototype, "pointsOnWin", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Tournament.prototype, "pointsOnTie", void 0);
tslib_1.__decorate([
    (0, core_1.Property)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Tournament.prototype, "pointsOnLoss", void 0);
tslib_1.__decorate([
    (0, core_1.OneToMany)(() => player_entity_1.Player, (player) => player.tournament),
    tslib_1.__metadata("design:type", Object)
], Tournament.prototype, "players", void 0);
tslib_1.__decorate([
    (0, core_1.OneToMany)(() => game_entity_1.Game, (game) => game.tournament),
    tslib_1.__metadata("design:type", Object)
], Tournament.prototype, "games", void 0);
exports.Tournament = Tournament = tslib_1.__decorate([
    (0, core_1.Entity)()
], Tournament);


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(122), exports);
tslib_1.__exportStar(__webpack_require__(123), exports);


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameStatus = void 0;
var GameStatus;
(function (GameStatus) {
    GameStatus["planned"] = "PLANNED";
    GameStatus["inProgress"] = "IN_PROGRESS";
    GameStatus["finished"] = "FINISHED";
    GameStatus["cancelled"] = "CANCELLED";
})(GameStatus || (exports.GameStatus = GameStatus = {}));


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TournamentType = void 0;
var TournamentType;
(function (TournamentType) {
    TournamentType["roundRobin"] = "ROUND_ROBIN";
    TournamentType["elimination"] = "ELIMINATION";
})(TournamentType || (exports.TournamentType = TournamentType = {}));


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerRepository = void 0;
const core_1 = __webpack_require__(114);
const entities_1 = __webpack_require__(125);
class PlayerRepository extends core_1.EntityRepository {
    constructor(_em, entityName) {
        super(_em, entityName);
        this.pem = this.getEntityManager();
    }
    async getPlayersRanking(tournamentId, limit, offset) {
        return this.pem
            .createQueryBuilder(entities_1.Player, 'p')
            .select('p.id')
            .addSelect('p.name')
            .addSelect('SUM(score.raking_points) points')
            .leftJoin('p.scores', 'score')
            .leftJoin('score.game', 'game', { tournament: tournamentId })
            .where({ tournament: tournamentId })
            .groupBy('p.id')
            .orderBy({ 'SUM(score.raking_points)': core_1.QueryOrder.DESC_NULLS_LAST })
            .offset(offset)
            .limit(limit)
            .execute();
    }
}
exports.PlayerRepository = PlayerRepository;


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(113), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);
tslib_1.__exportStar(__webpack_require__(115), exports);
tslib_1.__exportStar(__webpack_require__(120), exports);


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(127), exports);
__exportStar(__webpack_require__(129), exports);
__exportStar(__webpack_require__(132), exports);
__exportStar(__webpack_require__(136), exports);
__exportStar(__webpack_require__(137), exports);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MikroOrmModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MikroOrmModule = void 0;
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
const mikro_orm_providers_1 = __webpack_require__(128);
const mikro_orm_core_module_1 = __webpack_require__(131);
const mikro_orm_middleware_module_1 = __webpack_require__(135);
const mikro_orm_entities_storage_1 = __webpack_require__(130);
let MikroOrmModule = MikroOrmModule_1 = class MikroOrmModule {
    /**
     * Clears the entity storage. This is useful for testing purposes, when you want to isolate the tests.
     * Keep in mind that this should be called when using a test runner that keeps the context alive between tests (like Vitest with threads disabled).
     */
    static clearStorage(contextName) {
        mikro_orm_entities_storage_1.MikroOrmEntitiesStorage.clear(contextName);
    }
    static forRoot(options) {
        return {
            module: MikroOrmModule_1,
            imports: [mikro_orm_core_module_1.MikroOrmCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: MikroOrmModule_1,
            imports: [mikro_orm_core_module_1.MikroOrmCoreModule.forRootAsync(options)],
        };
    }
    static forFeature(options, contextName) {
        const entities = Array.isArray(options) ? options : (options.entities || []);
        const name = (Array.isArray(options) || contextName) ? contextName : options.contextName;
        const providers = (0, mikro_orm_providers_1.createMikroOrmRepositoryProviders)(entities, name);
        for (const e of entities) {
            if (!core_1.Utils.isString(e)) {
                mikro_orm_entities_storage_1.MikroOrmEntitiesStorage.addEntity(e, name);
            }
        }
        return {
            module: MikroOrmModule_1,
            providers: [...providers],
            exports: [...providers],
        };
    }
    static forMiddleware(options) {
        return {
            module: MikroOrmModule_1,
            imports: [mikro_orm_middleware_module_1.MikroOrmMiddlewareModule.forMiddleware(options)],
        };
    }
};
exports.MikroOrmModule = MikroOrmModule;
exports.MikroOrmModule = MikroOrmModule = MikroOrmModule_1 = __decorate([
    (0, common_1.Module)({})
], MikroOrmModule);


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMikroOrmRepositoryProviders = exports.createAsyncProviders = exports.createMikroOrmAsyncOptionsProvider = exports.createEntityManagerProvider = exports.createMikroOrmProvider = void 0;
const mikro_orm_common_1 = __webpack_require__(129);
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
const mikro_orm_entities_storage_1 = __webpack_require__(130);
function createMikroOrmProvider(contextName) {
    return {
        provide: contextName ? (0, mikro_orm_common_1.getMikroORMToken)(contextName) : core_1.MikroORM,
        useFactory: async (options) => {
            options = { ...options };
            if (options?.autoLoadEntities) {
                options.entities = [...(options.entities || []), ...mikro_orm_entities_storage_1.MikroOrmEntitiesStorage.getEntities(contextName)];
                options.entitiesTs = [...(options.entitiesTs || []), ...mikro_orm_entities_storage_1.MikroOrmEntitiesStorage.getEntities(contextName)];
                delete options.autoLoadEntities;
            }
            if (!options || Object.keys(options).length === 0) {
                const config = await core_1.ConfigurationLoader.getConfiguration();
                config.set('logger', mikro_orm_common_1.logger.log.bind(mikro_orm_common_1.logger));
                options = config;
            }
            return core_1.MikroORM.init(options);
        },
        inject: [mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS],
    };
}
exports.createMikroOrmProvider = createMikroOrmProvider;
function createEntityManagerProvider(scope = common_1.Scope.DEFAULT, entityManager = core_1.EntityManager, contextName) {
    if (!contextName && entityManager !== core_1.EntityManager) {
        return {
            provide: entityManager,
            scope,
            useFactory: (em) => em,
            inject: [core_1.EntityManager], // depend on the EM from core package
        };
    }
    return {
        provide: contextName ? (0, mikro_orm_common_1.getEntityManagerToken)(contextName) : entityManager,
        scope,
        useFactory: (orm) => scope === common_1.Scope.DEFAULT ? orm.em : orm.em.fork(),
        inject: [contextName ? (0, mikro_orm_common_1.getMikroORMToken)(contextName) : core_1.MikroORM],
    };
}
exports.createEntityManagerProvider = createEntityManagerProvider;
function createMikroOrmAsyncOptionsProvider(options) {
    if (options.useFactory) {
        return {
            provide: mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS,
            useFactory: (...args) => {
                const factoryOptions = options.useFactory(...args);
                return options.contextName
                    ? { contextName: options.contextName, ...factoryOptions }
                    : factoryOptions;
            },
            inject: options.inject || [],
        };
    }
    const inject = [];
    if (options.useClass || options.useExisting) {
        inject.push(options.useClass ?? options.useExisting);
    }
    return {
        provide: mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS,
        useFactory: async (optionsFactory) => await optionsFactory.createMikroOrmOptions(options.contextName),
        inject,
    };
}
exports.createMikroOrmAsyncOptionsProvider = createMikroOrmAsyncOptionsProvider;
function createAsyncProviders(options) {
    if (options.useExisting || options.useFactory) {
        return [createMikroOrmAsyncOptionsProvider(options)];
    }
    if (options.useClass) {
        return [
            createMikroOrmAsyncOptionsProvider(options),
            { provide: options.useClass, useClass: options.useClass },
        ];
    }
    throw new Error('Invalid MikroORM async options: one of `useClass`, `useExisting` or `useFactory` should be defined.');
}
exports.createAsyncProviders = createAsyncProviders;
function createMikroOrmRepositoryProviders(entities, contextName) {
    const metadata = Object.values(core_1.MetadataStorage.getMetadata());
    const providers = [];
    const inject = contextName ? (0, mikro_orm_common_1.getEntityManagerToken)(contextName) : core_1.EntityManager;
    (entities || []).forEach(entity => {
        const meta = metadata.find(meta => meta.class === entity);
        const repository = (meta?.repository ?? meta?.customRepository);
        if (repository) {
            providers.push({
                provide: repository(),
                useFactory: em => em.getRepository(entity),
                inject: [inject],
            });
        }
        providers.push({
            provide: (0, mikro_orm_common_1.getRepositoryToken)(entity, contextName),
            useFactory: em => em.getRepository(entity),
            inject: [inject],
        });
    });
    return providers;
}
exports.createMikroOrmRepositoryProviders = createMikroOrmRepositoryProviders;


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectRepository = exports.getRepositoryToken = exports.InjectEntityManager = exports.getEntityManagerToken = exports.InjectMikroORM = exports.getMikroORMToken = exports.logger = exports.CONTEXT_NAMES = exports.MIKRO_ORM_MODULE_OPTIONS = void 0;
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
exports.MIKRO_ORM_MODULE_OPTIONS = Symbol('mikro-orm-module-options');
exports.CONTEXT_NAMES = [];
exports.logger = new common_1.Logger(core_1.MikroORM.name);
const getMikroORMToken = (name) => `${name}_MikroORM`;
exports.getMikroORMToken = getMikroORMToken;
const InjectMikroORM = (name) => (0, common_1.Inject)((0, exports.getMikroORMToken)(name));
exports.InjectMikroORM = InjectMikroORM;
const getEntityManagerToken = (name) => `${name}_EntityManager`;
exports.getEntityManagerToken = getEntityManagerToken;
const InjectEntityManager = (name) => (0, common_1.Inject)((0, exports.getEntityManagerToken)(name));
exports.InjectEntityManager = InjectEntityManager;
const getRepositoryToken = (entity, name) => {
    const suffix = name ? `_${name}` : '';
    return `${core_1.Utils.className(entity)}Repository${suffix}`;
};
exports.getRepositoryToken = getRepositoryToken;
const InjectRepository = (entity, name) => (0, common_1.Inject)((0, exports.getRepositoryToken)(entity, name));
exports.InjectRepository = InjectRepository;


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MikroOrmEntitiesStorage = void 0;
class MikroOrmEntitiesStorage {
    static addEntity(entity, contextName = 'default') {
        let set = this.storage.get(contextName);
        if (!set) {
            set = new Set();
            this.storage.set(contextName, set);
        }
        set.add(entity);
    }
    static getEntities(contextName = 'default') {
        return this.storage.get(contextName)?.values() || [];
    }
    static clear(contextName = 'default') {
        this.storage.get(contextName)?.clear();
    }
}
exports.MikroOrmEntitiesStorage = MikroOrmEntitiesStorage;
MikroOrmEntitiesStorage.storage = new Map();


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MikroOrmCoreModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MikroOrmCoreModule = void 0;
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
const core_2 = __webpack_require__(3);
const mikro_orm_common_1 = __webpack_require__(129);
const mikro_orm_providers_1 = __webpack_require__(128);
const mikro_orm_middleware_1 = __webpack_require__(132);
const middleware_helper_1 = __webpack_require__(133);
const mikro_orm_entities_storage_1 = __webpack_require__(130);
async function tryRequire(name) {
    try {
        return await Promise.resolve(`${name}`).then(s => __importStar(__webpack_require__(134)(s)));
    }
    catch {
        return undefined; // ignore, optional dependency
    }
}
let MikroOrmCoreModule = MikroOrmCoreModule_1 = class MikroOrmCoreModule {
    constructor(options, moduleRef) {
        this.options = options;
        this.moduleRef = moduleRef;
    }
    static async forRoot(options) {
        const contextName = this.setContextName(options?.contextName);
        const knex = await tryRequire('@mikro-orm/knex');
        const mongo = await tryRequire('@mikro-orm/mongodb');
        const em = await this.createEntityManager(options);
        return {
            module: MikroOrmCoreModule_1,
            providers: [
                { provide: mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS, useValue: options || {} },
                (0, mikro_orm_providers_1.createMikroOrmProvider)(contextName),
                (0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, core_1.EntityManager, contextName),
                ...(em ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, em.constructor, contextName)] : []),
                ...(knex ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, knex.EntityManager, contextName)] : []),
                ...(mongo ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, mongo.EntityManager, contextName)] : []),
            ],
            exports: [
                contextName ? (0, mikro_orm_common_1.getMikroORMToken)(contextName) : core_1.MikroORM,
                contextName ? (0, mikro_orm_common_1.getEntityManagerToken)(contextName) : core_1.EntityManager,
                ...(em && !contextName ? [em.constructor] : []),
                ...(knex && !contextName ? [knex.EntityManager] : []),
                ...(mongo && !contextName ? [mongo.EntityManager] : []),
            ],
        };
    }
    static async forRootAsync(options) {
        const contextName = this.setContextName(options?.contextName);
        const knex = await tryRequire('@mikro-orm/knex');
        const mongo = await tryRequire('@mikro-orm/mongodb');
        const em = await this.createEntityManager(options);
        return {
            module: MikroOrmCoreModule_1,
            imports: options.imports || [],
            providers: [
                ...(options.providers || []),
                ...(0, mikro_orm_providers_1.createAsyncProviders)({ ...options, contextName: options.contextName }),
                (0, mikro_orm_providers_1.createMikroOrmProvider)(contextName),
                (0, mikro_orm_providers_1.createEntityManagerProvider)(options.scope, core_1.EntityManager, contextName),
                ...(em ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, em.constructor, contextName)] : []),
                ...(knex ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, knex.EntityManager, contextName)] : []),
                ...(mongo ? [(0, mikro_orm_providers_1.createEntityManagerProvider)(options?.scope, mongo.EntityManager, contextName)] : []),
            ],
            exports: [
                contextName ? (0, mikro_orm_common_1.getMikroORMToken)(contextName) : core_1.MikroORM,
                contextName ? (0, mikro_orm_common_1.getEntityManagerToken)(contextName) : core_1.EntityManager,
                ...(em && !contextName ? [em.constructor] : []),
                ...(knex && !contextName ? [knex.EntityManager] : []),
                ...(mongo && !contextName ? [mongo.EntityManager] : []),
            ],
        };
    }
    /**
     * Tries to create the driver instance to use the actual entity manager implementation for DI symbol.
     * This helps with dependency resolution issues when importing the EM from driver package (e.g. `SqlEntityManager`).
     */
    static async createEntityManager(options) {
        if (options?.contextName) {
            return undefined;
        }
        try {
            if (!options || Object.keys(options).length === 0) {
                const config = await core_1.ConfigurationLoader.getConfiguration(false);
                return config.getDriver().createEntityManager();
            }
            if ('useFactory' in options) {
                const config = new core_1.Configuration(await options.useFactory(), false);
                return config.getDriver().createEntityManager();
            }
        }
        catch {
            // ignore
        }
    }
    async onApplicationShutdown() {
        const token = this.options.contextName ? (0, mikro_orm_common_1.getMikroORMToken)(this.options.contextName) : core_1.MikroORM;
        const orm = this.moduleRef.get(token);
        if (orm) {
            await orm.close();
            mikro_orm_entities_storage_1.MikroOrmEntitiesStorage.clear(orm.config.get('contextName'));
        }
        mikro_orm_common_1.CONTEXT_NAMES.length = 0;
    }
    configure(consumer) {
        if (this.options.registerRequestContext === false) {
            return;
        }
        consumer
            .apply(mikro_orm_middleware_1.MikroOrmMiddleware) // register request context automatically
            .forRoutes({ path: (0, middleware_helper_1.forRoutesPath)(this.options, consumer), method: common_1.RequestMethod.ALL });
    }
    static setContextName(contextName) {
        if (!contextName) {
            return;
        }
        if (mikro_orm_common_1.CONTEXT_NAMES.includes(contextName)) {
            throw new Error(`ContextName '${contextName}' already registered`);
        }
        mikro_orm_common_1.CONTEXT_NAMES.push(contextName);
        return contextName;
    }
};
exports.MikroOrmCoreModule = MikroOrmCoreModule;
exports.MikroOrmCoreModule = MikroOrmCoreModule = MikroOrmCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, core_2.ModuleRef])
], MikroOrmCoreModule);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MikroOrmMiddleware = void 0;
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
let MikroOrmMiddleware = class MikroOrmMiddleware {
    constructor(orm) {
        this.orm = orm;
    }
    use(req, res, next) {
        core_1.RequestContext.create(this.orm.em, next);
    }
};
exports.MikroOrmMiddleware = MikroOrmMiddleware;
exports.MikroOrmMiddleware = MikroOrmMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.MikroORM])
], MikroOrmMiddleware);


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.forRoutesPath = void 0;
function forRoutesPath(options, consumer) {
    const isNestMiddleware = (consumer) => {
        return typeof consumer.httpAdapter === 'object';
    };
    const usingFastify = (consumer) => {
        return consumer.httpAdapter.constructor.name.toLowerCase().startsWith('fastify');
    };
    return options.forRoutesPath ??
        (isNestMiddleware(consumer) && usingFastify(consumer) ? '(.*)' : '*');
}
exports.forRoutesPath = forRoutesPath;


/***/ }),
/* 134 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 134;
module.exports = webpackEmptyContext;

/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MikroOrmMiddlewareModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MikroOrmMiddlewareModule = void 0;
const common_1 = __webpack_require__(2);
const mikro_orm_common_1 = __webpack_require__(129);
const multiple_mikro_orm_middleware_1 = __webpack_require__(136);
const middleware_helper_1 = __webpack_require__(133);
let MikroOrmMiddlewareModule = MikroOrmMiddlewareModule_1 = class MikroOrmMiddlewareModule {
    constructor(options) {
        this.options = options;
    }
    static forMiddleware(options) {
        // Work around due to nestjs not supporting the ability to register multiple types
        // https://github.com/nestjs/nest/issues/770
        // https://github.com/nestjs/nest/issues/4786#issuecomment-755032258 - workaround suggestion
        const inject = mikro_orm_common_1.CONTEXT_NAMES.map(name => (0, mikro_orm_common_1.getMikroORMToken)(name));
        return {
            module: MikroOrmMiddlewareModule_1,
            providers: [
                { provide: mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS, useValue: options || {} },
                {
                    provide: 'MikroORMs',
                    useFactory: (...args) => args,
                    inject,
                },
            ],
            exports: ['MikroORMs'],
        };
    }
    configure(consumer) {
        consumer
            .apply(multiple_mikro_orm_middleware_1.MultipleMikroOrmMiddleware)
            .forRoutes({ path: (0, middleware_helper_1.forRoutesPath)(this.options, consumer), method: common_1.RequestMethod.ALL });
    }
};
exports.MikroOrmMiddlewareModule = MikroOrmMiddlewareModule;
exports.MikroOrmMiddlewareModule = MikroOrmMiddlewareModule = MikroOrmMiddlewareModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(mikro_orm_common_1.MIKRO_ORM_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MikroOrmMiddlewareModule);


/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultipleMikroOrmMiddleware = void 0;
const core_1 = __webpack_require__(114);
const common_1 = __webpack_require__(2);
let MultipleMikroOrmMiddleware = class MultipleMikroOrmMiddleware {
    constructor(orm) {
        this.orm = orm;
    }
    use(req, res, next) {
        core_1.RequestContext.create(this.orm.map(orm => orm.em), next);
    }
};
exports.MultipleMikroOrmMiddleware = MultipleMikroOrmMiddleware;
exports.MultipleMikroOrmMiddleware = MultipleMikroOrmMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MikroORMs')),
    __metadata("design:paramtypes", [Array])
], MultipleMikroOrmMiddleware);


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 138 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./game/handlers/createGame.handler.ts": 139,
	"./game/handlers/editGame.handler.ts": 153,
	"./game/handlers/getGame.handler.ts": 154,
	"./game/handlers/getGames.handler.ts": 155,
	"./player/handlers/deletePlayers.handler.ts": 156,
	"./player/handlers/getPlayers.handler.ts": 157,
	"./tournament/handlers/createTournament.handler.ts": 158,
	"./tournament/handlers/editTournament.handler.ts": 167,
	"./tournament/handlers/getTournament.handler.ts": 168,
	"./tournament/handlers/getTournamentRanking.handler.ts": 169,
	"./tournament/handlers/getTournaments.handler.ts": 170
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 138;

/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGameHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(140);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let CreateGameHandler = class CreateGameHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const { pointsOnWin, pointsOnTie, pointsOnLoss } = await this.em.findOneOrFail(db_utils_1.Tournament, input.tournamentId);
        const entity = this.em.create(db_utils_1.Game, { tournament: input.tournamentId });
        const scores = input.scores.map((score) => score.gamePoints);
        input.scores.forEach((score) => {
            const newScore = this.em.create(db_utils_1.Score, {
                player: score.playerId,
                gamePoints: score.gamePoints,
                game: entity.id,
            });
            if (Math.max(...scores) === Math.min(...scores)) {
                newScore.rakingPoints = pointsOnTie;
            }
            else if (score.gamePoints === Math.max(...scores)) {
                newScore.rakingPoints = pointsOnWin;
            }
            else if (score.gamePoints === Math.min(...scores)) {
                newScore.rakingPoints = pointsOnLoss;
            }
            this.em.persist(newScore);
        });
        await this.em.persistAndFlush(entity);
        return entity.toJSON();
    }
};
exports.CreateGameHandler = CreateGameHandler;
exports.CreateGameHandler = CreateGameHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GameBody),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], CreateGameHandler);


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(141), exports);
tslib_1.__exportStar(__webpack_require__(142), exports);
tslib_1.__exportStar(__webpack_require__(143), exports);
tslib_1.__exportStar(__webpack_require__(150), exports);
tslib_1.__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditGameBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(45);
class ScoreBody {
    static _OPENAPI_METADATA_FACTORY() {
        return { gamePoints: { required: true, type: () => Number, minimum: 0, maximum: 2000000000 }, id: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2000000000),
    tslib_1.__metadata("design:type", Number)
], ScoreBody.prototype, "gamePoints", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ScoreBody.prototype, "id", void 0);
class EditGameBody extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return { scores: { required: true, type: () => [ScoreBody] } };
    }
}
exports.EditGameBody = EditGameBody;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], EditGameBody.prototype, "id", void 0);
tslib_1.__decorate([
    (0, nest_utils_1.Nested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], EditGameBody.prototype, "scores", void 0);


/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(45);
const core_utils_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(39);
class ScoreBody {
    static _OPENAPI_METADATA_FACTORY() {
        return { gamePoints: { required: true, type: () => Number, minimum: 0, maximum: 2000000000 }, playerId: { required: true, type: () => String } };
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2000000000),
    tslib_1.__metadata("design:type", Number)
], ScoreBody.prototype, "gamePoints", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ScoreBody.prototype, "playerId", void 0);
class GameBody extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return { scores: { required: true, type: () => [ScoreBody] } };
    }
}
exports.GameBody = GameBody;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], GameBody.prototype, "tournamentId", void 0);
tslib_1.__decorate([
    (0, core_utils_1.Nested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], GameBody.prototype, "scores", void 0);


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListGamesView = exports.GameView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_utils_1 = __webpack_require__(6);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const score_view_1 = __webpack_require__(144);
const class_transformer_1 = __webpack_require__(38);
let GameView = class GameView {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, scores: { required: true, type: () => [(__webpack_require__(144).ScoreView)] } };
    }
};
exports.GameView = GameView;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], GameView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, core_utils_1.Nested)({ each: true }, score_view_1.ScoreView),
    tslib_1.__metadata("design:type", Array)
], GameView.prototype, "scores", void 0);
exports.GameView = GameView = tslib_1.__decorate([
    (0, class_transformer_1.Exclude)()
], GameView);
exports.ListGamesView = (0, nest_utils_1.makeListView)(GameView);


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoreView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const core_utils_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(39);
const contracts_1 = __webpack_require__(145);
const class_transformer_1 = __webpack_require__(38);
let ScoreView = class ScoreView {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, gamePoints: { required: true, type: () => Number }, player: { required: true, type: () => (__webpack_require__(149).PlayerView) } };
    }
};
exports.ScoreView = ScoreView;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ScoreView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], ScoreView.prototype, "gamePoints", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, core_utils_1.Nested)(),
    tslib_1.__metadata("design:type", contracts_1.PlayerView)
], ScoreView.prototype, "player", void 0);
exports.ScoreView = ScoreView = tslib_1.__decorate([
    (0, class_transformer_1.Exclude)()
], ScoreView);


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(146), exports);
tslib_1.__exportStar(__webpack_require__(147), exports);
tslib_1.__exportStar(__webpack_require__(148), exports);
tslib_1.__exportStar(__webpack_require__(149), exports);


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeletePlayersBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(45);
class DeletePlayersBody extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return { playerIds: { required: true, type: () => [String] } };
    }
}
exports.DeletePlayersBody = DeletePlayersBody;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], DeletePlayersBody.prototype, "tournamentId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(null, { each: true }),
    tslib_1.__metadata("design:type", Array)
], DeletePlayersBody.prototype, "playerIds", void 0);


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPlayersQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(45);
class GetPlayersQuery extends nest_utils_1.Command {
    constructor() {
        super(...arguments);
        this.limit = 10;
        this.offset = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Object, default: 10, minimum: 1, maximum: 50 }, offset: { required: true, type: () => Object, default: 0 } };
    }
}
exports.GetPlayersQuery = GetPlayersQuery;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], GetPlayersQuery.prototype, "tournamentId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Object)
], GetPlayersQuery.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], GetPlayersQuery.prototype, "offset", void 0);


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const class_validator_1 = __webpack_require__(39);
class PlayerBody {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, name: { required: true, type: () => String, minLength: 1, maxLength: 255 } };
    }
}
exports.PlayerBody = PlayerBody;
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], PlayerBody.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    tslib_1.__metadata("design:type", String)
], PlayerBody.prototype, "name", void 0);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListPlayersView = exports.PlayerView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_transformer_1 = __webpack_require__(38);
const class_validator_1 = __webpack_require__(39);
let PlayerView = class PlayerView {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
};
exports.PlayerView = PlayerView;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], PlayerView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], PlayerView.prototype, "name", void 0);
exports.PlayerView = PlayerView = tslib_1.__decorate([
    (0, class_transformer_1.Exclude)()
], PlayerView);
exports.ListPlayersView = (0, nest_utils_1.makeListView)(PlayerView);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetGameQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(45);
class GetGameQuery extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.GetGameQuery = GetGameQuery;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], GetGameQuery.prototype, "id", void 0);


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetGamesQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class GetGamesQuery extends nest_utils_1.Command {
    constructor() {
        super(...arguments);
        this.limit = 10;
        this.offset = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { tournamentId: { required: false, type: () => String }, playerNameSearch: { required: false, type: () => String }, from: { required: false, type: () => Date }, to: { required: false, type: () => Date }, limit: { required: true, type: () => Object, default: 10, minimum: 1, maximum: 50 }, offset: { required: true, type: () => Object, default: 0 } };
    }
}
exports.GetGamesQuery = GetGamesQuery;
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], GetGamesQuery.prototype, "tournamentId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], GetGamesQuery.prototype, "playerNameSearch", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Date)
], GetGamesQuery.prototype, "from", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Date)
], GetGamesQuery.prototype, "to", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Object)
], GetGamesQuery.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], GetGamesQuery.prototype, "offset", void 0);


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(125), exports);
tslib_1.__exportStar(__webpack_require__(121), exports);
tslib_1.__exportStar(__webpack_require__(116), exports);


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditGameHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(140);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let EditGameHandler = class EditGameHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const entity = await this.em.findOneOrFail(db_utils_1.Game, input.id, {
            populate: ['scores.player'],
        });
        input.scores.forEach((score) => {
            const scoreEntity = entity.scores
                .getItems()
                .find((s) => s.id === score.id);
            if (scoreEntity) {
                scoreEntity.gamePoints = score.gamePoints;
            }
        });
        await this.em.flush();
        return entity.toJSON();
    }
};
exports.EditGameHandler = EditGameHandler;
exports.EditGameHandler = EditGameHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.EditGameBody),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], EditGameHandler);


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetGameHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(140);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetGameHandler = class GetGameHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const entity = await this.em.findOneOrFail(db_utils_1.Game, { id: input.id }, { populate: ['scores.player'] });
        return entity.toObject();
    }
};
exports.GetGameHandler = GetGameHandler;
exports.GetGameHandler = GetGameHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetGameQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetGameHandler);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetGamesHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(140);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetGamesHandler = class GetGamesHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const [items, count] = await this.em.findAndCount(db_utils_1.Game, {
            ...(input.tournamentId && { tournament: input.tournamentId }),
            ...(input.playerNameSearch && {
                scores: {
                    player: { name: { $like: `%${input.playerNameSearch}%` } },
                },
            }),
            // from,
            // to,
        }, {
            limit: input.limit,
            offset: input.offset,
            orderBy: { createdAt: 'asc' },
            populate: ['scores.player'],
        });
        return { count, items: items.map((i) => i.toJSON()) };
    }
};
exports.GetGamesHandler = GetGamesHandler;
exports.GetGamesHandler = GetGamesHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetGamesQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetGamesHandler);


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeletePlayersHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(145);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let DeletePlayersHandler = class DeletePlayersHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        await this.em.nativeDelete(db_utils_1.Player, {
            tournament: input.tournamentId,
            id: { $in: input.playerIds },
        });
    }
};
exports.DeletePlayersHandler = DeletePlayersHandler;
exports.DeletePlayersHandler = DeletePlayersHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.DeletePlayersBody),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], DeletePlayersHandler);


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPlayersHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(145);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetPlayersHandler = class GetPlayersHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const [items, count] = await this.em.findAndCount(db_utils_1.Player, { tournament: input.tournamentId }, { limit: input.limit, offset: input.offset, orderBy: { name: 'asc' } });
        return { count, items };
    }
};
exports.GetPlayersHandler = GetPlayersHandler;
exports.GetPlayersHandler = GetPlayersHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetPlayersQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetPlayersHandler);


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTournamentHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(159);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let CreateTournamentHandler = class CreateTournamentHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const entity = this.em.create(db_utils_1.Tournament, input);
        await this.em.persistAndFlush(entity);
        return entity;
    }
};
exports.CreateTournamentHandler = CreateTournamentHandler;
exports.CreateTournamentHandler = CreateTournamentHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.TournamentBody),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], CreateTournamentHandler);


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(160), exports);
tslib_1.__exportStar(__webpack_require__(161), exports);
tslib_1.__exportStar(__webpack_require__(162), exports);
tslib_1.__exportStar(__webpack_require__(163), exports);
tslib_1.__exportStar(__webpack_require__(164), exports);
tslib_1.__exportStar(__webpack_require__(165), exports);
tslib_1.__exportStar(__webpack_require__(166), exports);


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditTournamentBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const swagger_1 = __webpack_require__(45);
class EditTournamentBody extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, players: { required: false, type: () => [(__webpack_require__(148).PlayerBody)] } };
    }
}
exports.EditTournamentBody = EditTournamentBody;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], EditTournamentBody.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], EditTournamentBody.prototype, "name", void 0);
tslib_1.__decorate([
    (0, nest_utils_1.Nested)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], EditTournamentBody.prototype, "players", void 0);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(45);
class GetTournamentQuery extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.GetTournamentQuery = GetTournamentQuery;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], GetTournamentQuery.prototype, "id", void 0);


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentRankingQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(45);
const class_validator_1 = __webpack_require__(39);
class GetTournamentRankingQuery extends nest_utils_1.Command {
    constructor() {
        super(...arguments);
        this.limit = 10;
        this.offset = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Object, default: 10, minimum: 1, maximum: 50 }, offset: { required: true, type: () => Object, default: 0 } };
    }
}
exports.GetTournamentRankingQuery = GetTournamentRankingQuery;
tslib_1.__decorate([
    (0, swagger_1.ApiHideProperty)(),
    tslib_1.__metadata("design:type", String)
], GetTournamentRankingQuery.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Object)
], GetTournamentRankingQuery.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], GetTournamentRankingQuery.prototype, "offset", void 0);


/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentsQuery = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class GetTournamentsQuery extends nest_utils_1.Command {
    constructor() {
        super(...arguments);
        this.limit = 10;
        this.offset = 0;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Object, default: 10, minimum: 1, maximum: 50 }, offset: { required: true, type: () => Object, default: 0 } };
    }
}
exports.GetTournamentsQuery = GetTournamentsQuery;
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Object)
], GetTournamentsQuery.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Object)
], GetTournamentsQuery.prototype, "offset", void 0);


/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TournamentBody = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class TournamentBody extends nest_utils_1.Command {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 1, maxLength: 255 }, pointsOnWin: { required: false, type: () => Number, minimum: 0, maximum: 100 }, pointsOnTie: { required: false, type: () => Number, minimum: 0, maximum: 100 }, pointsOnLoss: { required: false, type: () => Number, minimum: 0, maximum: 100 } };
    }
}
exports.TournamentBody = TournamentBody;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    tslib_1.__metadata("design:type", String)
], TournamentBody.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    tslib_1.__metadata("design:type", Number)
], TournamentBody.prototype, "pointsOnWin", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    tslib_1.__metadata("design:type", Number)
], TournamentBody.prototype, "pointsOnTie", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    tslib_1.__metadata("design:type", Number)
], TournamentBody.prototype, "pointsOnLoss", void 0);


/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListTournamentsView = exports.TournamentView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_transformer_1 = __webpack_require__(38);
const class_validator_1 = __webpack_require__(39);
let TournamentView = class TournamentView {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, pointsOnWin: { required: false, type: () => Number }, pointsOnTie: { required: false, type: () => Number }, pointsOnLoss: { required: false, type: () => Number } };
    }
};
exports.TournamentView = TournamentView;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], TournamentView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TournamentView.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], TournamentView.prototype, "pointsOnWin", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], TournamentView.prototype, "pointsOnTie", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], TournamentView.prototype, "pointsOnLoss", void 0);
exports.TournamentView = TournamentView = tslib_1.__decorate([
    (0, class_transformer_1.Exclude)()
], TournamentView);
exports.ListTournamentsView = (0, nest_utils_1.makeListView)(TournamentView);


/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListTournamentRankingView = exports.TournamentRankingView = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class TournamentRankingView {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, points: { required: true, type: () => Number } };
    }
}
exports.TournamentRankingView = TournamentRankingView;
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], TournamentRankingView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], TournamentRankingView.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], TournamentRankingView.prototype, "points", void 0);
exports.ListTournamentRankingView = (0, nest_utils_1.makeListView)(TournamentRankingView);


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditTournamentHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(159);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let EditTournamentHandler = class EditTournamentHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const entity = await this.em.findOneOrFail(db_utils_1.Tournament, input.id, {
            populate: ['players'],
        });
        const { players, ...properties } = input;
        entity.assign(properties);
        players.forEach((player) => {
            const playerEntity = entity.players
                .getItems()
                .find((p) => p.id === player.id);
            if (playerEntity) {
                playerEntity.name = player.name;
            }
            else {
                this.em.create(db_utils_1.Player, { ...player, tournament: entity });
                this.em.persist(player);
            }
        });
        await this.em.flush();
        return entity;
    }
};
exports.EditTournamentHandler = EditTournamentHandler;
exports.EditTournamentHandler = EditTournamentHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.EditTournamentBody),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], EditTournamentHandler);


/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(159);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetTournamentHandler = class GetTournamentHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const entity = await this.em.findOneOrFail(db_utils_1.Tournament, { id: input.id });
        return entity;
    }
};
exports.GetTournamentHandler = GetTournamentHandler;
exports.GetTournamentHandler = GetTournamentHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetTournamentQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetTournamentHandler);


/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentRankingHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(159);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetTournamentRankingHandler = class GetTournamentRankingHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const count = await this.em.count(db_utils_1.Player, { tournament: input.id });
        const items = await this.em
            .getRepository(db_utils_1.Player)
            .getPlayersRanking(input.id, input.limit, input.offset);
        return {
            count,
            items: items.map((i) => ({ ...i, points: Number(i.points) })),
        };
    }
};
exports.GetTournamentRankingHandler = GetTournamentRankingHandler;
exports.GetTournamentRankingHandler = GetTournamentRankingHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetTournamentRankingQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetTournamentRankingHandler);


/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTournamentsHandler = void 0;
const tslib_1 = __webpack_require__(1);
const cqrs_1 = __webpack_require__(42);
const contracts_1 = __webpack_require__(159);
const core_1 = __webpack_require__(114);
const db_utils_1 = __webpack_require__(152);
let GetTournamentsHandler = class GetTournamentsHandler {
    constructor(em) {
        this.em = em;
    }
    async execute(input) {
        const [items, count] = await this.em.findAndCount(db_utils_1.Tournament, {}, { limit: input.limit, offset: input.offset, orderBy: { name: 'asc' } });
        return { count, items };
    }
};
exports.GetTournamentsHandler = GetTournamentsHandler;
exports.GetTournamentsHandler = GetTournamentsHandler = tslib_1.__decorate([
    (0, cqrs_1.CommandHandler)(contracts_1.GetTournamentsQuery),
    tslib_1.__metadata("design:paramtypes", [core_1.EntityManager])
], GetTournamentsHandler);


/***/ }),
/* 171 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./game/game.controller.ts": 172,
	"./player/player.controller.ts": 173,
	"./tournament/tournament.controller.ts": 174
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 171;

/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const contracts_1 = __webpack_require__(140);
let GameController = class GameController extends nest_utils_1.BaseController {
    getList(query) {
        return this.execute(query);
    }
    getOne(query, gameId) {
        query.id = gameId;
        return this.execute(query);
    }
    create(body, tournamentId) {
        body.tournamentId = tournamentId;
        return this.execute(body);
    }
    edit(body, gameId) {
        body.id = gameId;
        return this.execute(body);
    }
};
exports.GameController = GameController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: contracts_1.ListGamesView }),
    (0, swagger_1.ApiOperation)({ summary: 'Get all games' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetGamesQuery]),
    tslib_1.__metadata("design:returntype", void 0)
], GameController.prototype, "getList", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a game' }),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(143).GameView) }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetGameQuery, String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, common_1.Post)('/tournaments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a game in a tournament' }),
    openapi.ApiResponse({ status: 201, type: (__webpack_require__(143).GameView) }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GameBody, String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a game' }),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(143).GameView) }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.EditGameBody, String]),
    tslib_1.__metadata("design:returntype", void 0)
], GameController.prototype, "edit", null);
exports.GameController = GameController = tslib_1.__decorate([
    (0, common_1.Controller)('/games'),
    (0, common_1.Injectable)(),
    (0, swagger_1.ApiTags)('Game')
], GameController);


/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const contracts_1 = __webpack_require__(145);
let PlayerController = class PlayerController extends nest_utils_1.BaseController {
    getList(query, tournamentId) {
        query.tournamentId = tournamentId;
        return this.execute(query);
    }
    delete(body, tournamentId) {
        body.tournamentId = tournamentId;
        return this.execute(body);
    }
};
exports.PlayerController = PlayerController;
tslib_1.__decorate([
    (0, common_1.Get)('/tournaments/:id'),
    (0, swagger_1.ApiResponse)({ type: contracts_1.ListPlayersView }),
    (0, swagger_1.ApiOperation)({ summary: 'Get all players of a tournament' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetPlayersQuery, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerController.prototype, "getList", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/tournaments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete selected players of a tournament' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.DeletePlayersBody, String]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerController.prototype, "delete", null);
exports.PlayerController = PlayerController = tslib_1.__decorate([
    (0, common_1.Controller)('/players'),
    (0, common_1.Injectable)(),
    (0, swagger_1.ApiTags)('Player')
], PlayerController);


/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TournamentController = void 0;
const tslib_1 = __webpack_require__(1);
const openapi = __webpack_require__(45);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(45);
const nest_utils_1 = __webpack_require__(4);
const contracts_1 = __webpack_require__(159);
let TournamentController = class TournamentController extends nest_utils_1.BaseController {
    getList(query) {
        return this.execute(query);
    }
    getOne(query, tournamentId) {
        query.id = tournamentId;
        return this.execute(query);
    }
    getRanking(query, tournamentId) {
        query.id = tournamentId;
        return this.execute(query);
    }
    create(body) {
        return this.execute(body);
    }
    edit(body, tournamentId) {
        body.id = tournamentId;
        return this.execute(body);
    }
};
exports.TournamentController = TournamentController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ type: contracts_1.ListTournamentsView }),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tournaments' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetTournamentsQuery]),
    tslib_1.__metadata("design:returntype", void 0)
], TournamentController.prototype, "getList", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tournament' }),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(165).TournamentView) }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetTournamentQuery, String]),
    tslib_1.__metadata("design:returntype", void 0)
], TournamentController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:id/ranking'),
    (0, swagger_1.ApiResponse)({ type: contracts_1.ListTournamentRankingView }),
    (0, swagger_1.ApiOperation)({ summary: 'Get the ranking of a tournament' }),
    openapi.ApiResponse({ status: 200 }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.GetTournamentRankingQuery, String]),
    tslib_1.__metadata("design:returntype", void 0)
], TournamentController.prototype, "getRanking", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a tournament' }),
    openapi.ApiResponse({ status: 201, type: (__webpack_require__(165).TournamentView) }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.TournamentBody]),
    tslib_1.__metadata("design:returntype", void 0)
], TournamentController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tournament' }),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(165).TournamentView) }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [contracts_1.EditTournamentBody, String]),
    tslib_1.__metadata("design:returntype", void 0)
], TournamentController.prototype, "edit", null);
exports.TournamentController = TournamentController = tslib_1.__decorate([
    (0, common_1.Controller)('/tournaments'),
    (0, common_1.Injectable)(),
    (0, swagger_1.ApiTags)('Tournament')
], TournamentController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 0);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;