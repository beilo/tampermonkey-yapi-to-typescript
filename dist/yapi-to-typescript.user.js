// ==UserScript==
// @name         YApi to TypeScript via Cursor
// @namespace    https://github.com/beilo/tampermonkey-yapi-to-typescript
// @version      0.2.1
// @author       YApi Helper
// @description  将 YApi 接口转换为 TypeScript 代码（通过 Cursor Agent）
// @license      MIT
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @supportURL   https://github.com/beilo/tampermonkey-yapi-to-typescript/issues
// @match        *://interface.codemao.cn/*
// @require      https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require      https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @require      https://cdn.jsdelivr.net/gh/beilo/tampermonkey-yapi-to-typescript/src/utils/bundle.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_setValue
// ==/UserScript==

(o=>{if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const e=document.createElement("style");e.textContent=o,document.head.append(e)})(" .yapi-helper-btn{position:fixed;top:20px;right:20px;z-index:9999;padding:10px 20px;background-color:#4285f4;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;box-shadow:0 2px 5px #0003;transition:all .3s ease}.yapi-helper-btn:hover{background-color:#3367d6;box-shadow:0 3px 8px #0000004d}.local-ts-btn{position:fixed;top:20px;right:200px;z-index:9999;padding:10px 20px;background-color:#00a86b;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;box-shadow:0 2px 5px #0003;transition:all .3s ease}.local-ts-btn:hover{background-color:#008f5d;box-shadow:0 3px 8px #0000004d}.json-to-ts-btn{position:fixed;top:20px;right:200px;z-index:9999;padding:10px 20px;background-color:#f44336;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;box-shadow:0 2px 5px #0003;transition:all .3s ease}.json-to-ts-btn:hover{background-color:#d32f2f;box-shadow:0 3px 8px #0000004d}.yapi-helper-modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 20px #00000026;max-width:800px;width:90%;max-height:80vh;overflow:auto;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.yapi-helper-notification{position:fixed;top:70px;right:20px;background-color:#4caf50;color:#fff;padding:10px 20px;border-radius:4px;z-index:10001;opacity:0;transition:opacity .3s ease;box-shadow:0 3px 10px #0003}.yapi-helper-notification.show{opacity:1}.yapi-helper-button-container{margin-top:15px;display:flex;justify-content:space-between;gap:10px}.yapi-helper-button{padding:8px 16px;border:none;border-radius:4px;cursor:pointer;transition:all .2s ease}.yapi-helper-button.primary{background-color:#4285f4;color:#fff}.yapi-helper-button.secondary{background-color:#f0f0f0}.yapi-helper-button:hover{filter:brightness(.95)}.yapi-helper-tabs{display:flex;margin-bottom:15px;border-bottom:1px solid #e0e0e0}.yapi-helper-tab{padding:8px 16px;cursor:pointer;border-bottom:2px solid transparent}.yapi-helper-tab.active{border-bottom:2px solid #4285f4;color:#4285f4}.yapi-helper-section{margin-bottom:15px}.yapi-helper-section-title{font-weight:700;margin-bottom:5px}.yapi-helper-checkbox-group{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:15px}.yapi-helper-checkbox-item{display:flex;align-items:center;gap:5px}.yapi-helper-instruction-content{max-height:400px;overflow-y:auto}.yapi-helper-types-container{display:flex;flex-direction:column;gap:20px;margin-bottom:20px}.yapi-helper-type-section{border:1px solid #e0e0e0;border-radius:4px;overflow:hidden}.yapi-helper-type-header{display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background-color:#f6f8fa;border-bottom:1px solid #e0e0e0}.yapi-helper-type-header h4{margin:0;font-size:16px;font-weight:500}.yapi-helper-button.small-btn{padding:4px 12px;font-size:13px}@media (min-width: 768px){.yapi-helper-types-container{max-height:70vh;overflow-y:auto}.yapi-helper-instruction-content pre{max-height:250px!important}} ");

(function (require$$0__default, require$$0$1, jstt) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const require$$0__default__namespace = /*#__PURE__*/_interopNamespaceDefault(require$$0__default);

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f2 = require$$0__default, k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
    function q2(c2, a2, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a2.key && (e2 = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
      return { $$typeof: k2, type: c2, key: e2, ref: h2, props: d2, _owner: n2.current };
    }
    reactJsxRuntime_production_min.Fragment = l2;
    reactJsxRuntime_production_min.jsx = q2;
    reactJsxRuntime_production_min.jsxs = q2;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m2 = require$$0$1;
    {
      client.createRoot = m2.createRoot;
      client.hydrateRoot = m2.hydrateRoot;
    }
    return client;
  }
  var clientExports = requireClient();
  const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
  function n$2(n2, t2) {
    n2.includes(t2) || n2.push(t2);
  }
  function t$1(n2, t2) {
    const r2 = n2.indexOf(t2);
    r2 >= 0 && n2.splice(r2, 1);
  }
  function r$2(n2) {
    return Array.from(new Set(n2));
  }
  function e$1(n2, t2) {
    let r2 = false;
    for (const e2 of n2) if (t2.includes(e2)) {
      r2 = true;
      break;
    }
    return r2;
  }
  function o$3(n2, t2) {
    let r2 = "";
    const e2 = n2.length;
    for (let o2 = 0; o2 < e2; o2++) {
      const e3 = n2[o2];
      if (t2.startsWith(e3)) {
        r2 = e3;
        break;
      }
    }
    return r2;
  }
  function i$2(n2, t2, r2) {
    if (!n2) return [];
    const e2 = n2(t2, r2);
    return Array.isArray(e2) ? e2 : [e2];
  }
  var u$3 = function() {
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof global) return global;
    if ("undefined" != typeof window) return window;
    if (void 0 !== this) return this;
    throw new Error("no globalThis");
  }();
  function f$2(...n2) {
  }
  var s$2 = f$2;
  function l$2(...n2) {
    return n2;
  }
  function a$3(...n2) {
    return [];
  }
  var b$1 = Object.prototype.toString;
  function y$1() {
    return !(!u$3.process || !u$3.global || u$3.document);
  }
  function d$2(n2) {
    return "[object Map]" === b$1.call(n2);
  }
  function h$1(n2) {
    return n2 === Number.MAX_SAFE_INTEGER;
  }
  function g$1() {
    return !("previewFrame" !== u$3.name && !u$3.BrowserFS);
  }
  function E$2(n2) {
    return n2 && "object" == typeof n2 && !Array.isArray(n2);
  }
  function v$1(n2) {
    return n2 && "object" == typeof n2;
  }
  function w$2(n2) {
    return "function" == typeof n2;
  }
  function j$1(n2) {
    return "symbol" == typeof n2;
  }
  function A$2(n2) {
    if (!n2) return false;
    const t2 = typeof n2;
    return ("object" === t2 || "function" === t2) && w$2(n2.then);
  }
  function O$2() {
    return "function" == typeof Proxy;
  }
  function S$2(n2, t2) {
    const { throwErr: r2 = false, prefixLabel: e2 = "", suffixLabel: o2 = ", see details in console.", logErr: i2 = true, alertErr: c2 } = t2 || {};
    let f2 = n2, s2 = false;
    n2 instanceof Error && (s2 = true, f2 = n2.message);
    if (("boolean" == typeof c2 ? c2 : g$1()) && u$3.alert && n2 && u$3.alert(`${e2}${f2}${o2}`), i2 && console.error(n2), r2) throw s2 ? n2 : new Error(String(n2));
  }
  function x$1(n2, t2 = 0) {
    0 === t2 ? (console.error(n2), g$1() && console.trace(n2)) : 1 === t2 ? console.error(n2) : console.warn(n2);
  }
  function $$2(n2) {
    return h$1(n2) ? 1 : n2 + 1;
  }
  var F$1 = !!Reflect, T$1 = Object.prototype.hasOwnProperty;
  function _$1(n2, t2) {
    return F$1 ? Reflect.has(n2, t2) : T$1.call(n2, t2);
  }
  function k$1(n2, t2, r2) {
    let e2 = n2[t2];
    return e2 || (e2 = n2[t2] = r2), e2;
  }
  function R$1(n2, t2, r2) {
    let e2 = n2.get(t2);
    return e2 || (n2.set(t2, r2), e2 = r2), e2;
  }
  function D$1(n2, t2) {
    let r2 = "";
    for (const e2 in n2) if (t2.startsWith(e2)) {
      r2 = e2;
      break;
    }
    return r2;
  }
  function L$1(n2, t2) {
    const r2 = n2.get(t2);
    if (void 0 !== r2) return r2;
    const e2 = n2.get(Number(t2) || t2);
    return void 0 !== e2 ? e2 : void 0;
  }
  function M$1(n2, t2) {
    let r2, e2 = n2;
    return t2.forEach((n3) => {
      r2 = d$2(e2) ? L$1(e2, n3) : e2[n3], e2 = r2;
    }), r2;
  }
  function P$1(n2, t2, r2) {
    let e2 = n2;
    const o2 = t2.length - 1;
    t2.forEach((n3, t3) => {
      const i2 = d$2(e2);
      if (t3 === o2) return void (i2 ? e2.set(n3, r2) : e2[n3] = r2);
      const u2 = i2 ? L$1(e2, n3) : e2[n3];
      e2 = u2;
    });
  }
  function V$1() {
    return x$1("changing shared state is invalid"), true;
  }
  function W$1(n2) {
    return n2;
  }
  function B$1(n2, t2) {
    return `${t2}/${n2}`;
  }
  function G$1(n2) {
    return n2 && O$2();
  }
  var t = Object.defineProperty, e = {};
  ((e2, n2) => {
    for (var r2 in n2) t(e2, r2, { get: n2[r2], enumerable: true });
  })(e, { useEffect: () => f$1, useForceUpdate: () => d$1, useIsStrict: () => l$1, useLayoutEffect: () => i$1, useObject: () => O$1, useObjectLogic: () => E$1, useStable: () => w$1 });
  var n$1 = /* @__PURE__ */ new Map(), r$1 = false;
  try {
    r$1 = false;
  } catch (t2) {
    console.log("ignored err:", t2);
  }
  function u$2() {
    if (!r$1) return "";
    let t2 = "";
    try {
      throw new Error("hook key");
    } catch (e2) {
      t2 = function(t3) {
        const e3 = t3.stack.split("\n");
        let n2 = "";
        for (const t4 of e3) {
          if (t4.includes("renderWithHooks")) break;
          n2 += t4;
        }
        return n2;
      }(e2), function(t3) {
        n$1.get(t3) ? n$1.set(t3, 2) : n$1.set(t3, 1);
      }(t2);
    }
    return t2;
  }
  globalThis.__LOG_HP__ && console.log("isDev", r$1);
  var o$2 = { count: 0 }, c$2 = /* @__PURE__ */ new Map();
  function s$1(t2, e2, n2, r2) {
    const u2 = () => {
      if (r2) return n2(e2), () => {
        c$2.delete(t2);
      };
      const u3 = n2();
      return () => {
        c$2.delete(t2), u3 && u3();
      };
    };
    if (!e2) return u2();
    !function(t3) {
      const e3 = c$2.get(t3);
      e3 ? e3.count += 1 : c$2.set(t3, { count: 1 });
    }(t2);
    const s2 = function(t3) {
      return c$2.get(t3) || o$2;
    }(t2);
    return s2.count > 1 ? u2() : void 0;
  }
  function a$2(t2, e2, o2) {
    const { useLayoutEffect: c2, useEffect: a2 } = t2.react, { isLayout: i2, deps: f2, passIsStrict: d2 } = o2, l2 = u$2();
    (i2 ? c2 : a2)(() => {
      const t3 = function(t4) {
        return !!r$1 && 2 === n$1.get(t4);
      }(l2);
      return s$1(l2, t3, e2, d2);
    }, f2);
  }
  function i$1(t2, e2, n2) {
    a$2(t2, e2, { isLayout: true, deps: n2 });
  }
  function f$1(t2, e2, n2) {
    a$2(t2, e2, { deps: n2 });
  }
  function d$1(t2) {
    const [, e2] = t2.react.useState({});
    return () => e2({});
  }
  function l$1(t2, e2) {
    a$2(t2, e2, { deps: [], isLayout: true, passIsStrict: true });
  }
  function m$1(t2) {
    const { data: e2 } = t2.current;
    w$2(e2) ? t2.current.wrap = (...e3) => t2.current.data(...e3) : E$2(e2) ? t2.current.wrap = function(t3, e3) {
      if (!O$2()) {
        const n3 = {};
        return Object.keys(t3).forEach((r2) => {
          const u2 = t3[r2];
          w$2(u2) ? n3[r2] = (...t4) => e3.current.data[r2](...t4) : Object.defineProperty(n3, r2, { get: () => e3.current.data[r2], set(t4) {
            e3.current.data[r2] = t4;
          } });
        }), n3;
      }
      const n2 = {};
      return new Proxy(t3, { get(t4, r2) {
        const u2 = t4[r2];
        return w$2(u2) ? k$1(n2, r2, (...t5) => e3.current.data[r2](...t5)) : u2;
      } });
    }(e2, t2) : t2.current.wrap = e2;
  }
  function w$1(t2, e2) {
    const { useRef: n2, useMemo: r2 } = t2.react, u2 = n2({ data: e2, wrap: {}, inited: false });
    return u2.current.data = r2(() => e2, [e2]), u2.current.inited || (m$1(u2), u2.current.inited = true), u2.current.wrap;
  }
  function E$1(t2, e2, n2, r2) {
    const { useState: u2, useRef: o2, useEffect: c2 } = t2.react, [s2] = u2(e2), a2 = d$1(t2), i2 = o2({ state: null, unmount: false, shouldCopy: true }), f2 = w$1(t2, { setState(t3) {
      const e3 = i2.current;
      if (e3.unmount) return;
      let u3;
      const { state: o3 } = e3;
      n2 ? (u3 = n2(t3, e3.state || s2), r2 && u3 ? (e3.state = u3, e3.shouldCopy = false) : e3.shouldCopy = true) : (u3 = (w$2(t3) ? t3(o3) : t3) || {}, e3.shouldCopy = true), Object.assign(s2, u3 || {}), a2();
    }, getLatestState() {
      const t3 = i2.current;
      return t3.shouldCopy && (t3.state = { ...s2 }, t3.shouldCopy = false), t3.state;
    } });
    return c2(() => {
      const t3 = i2.current;
      return t3.unmount = false, () => {
        t3.unmount = true;
      };
    }, [i2]), [s2, f2.setState, f2];
  }
  function O$1(t2, e2) {
    return E$1(t2, e2);
  }
  function S$1(t2) {
    const n2 = {}, r2 = { react: t2 }, u2 = e;
    return Object.keys(e).forEach((t3) => {
      n2[t3] = u2[t3].bind(null, r2);
    }), n2;
  }
  const VER$2 = "3.13.1";
  const META_KEY = Symbol("M");
  const META_VER = Symbol("V");
  const IMMUT_BASE = Symbol("IMMUT_BASE");
  const IS_RAW = Symbol("IS_RAW");
  const MAP$1 = "Map";
  const SET = "Set";
  const ARRAY = "Array";
  const OBJECT = "Object";
  const JS_SYM_KEYS = [Symbol.iterator, Symbol.toStringTag, IS_RAW];
  const CAREFUL_TYPES = { Map: MAP$1, Set: SET, Array: ARRAY };
  const OBJ_DESC = "[object Object]";
  const MAP_DESC = "[object Map]";
  const SET_DESC = "[object Set]";
  const ARR_DESC = "[object Array]";
  const FN_DESC = "[object Function]";
  const desc2dataType = {
    [MAP_DESC]: MAP$1,
    [SET_DESC]: SET,
    [ARR_DESC]: ARRAY,
    [OBJ_DESC]: OBJECT
  };
  const SHOULD_REASSIGN_ARR_METHODS = ["push", "pop", "shift", "splice", "unshift", "reverse", "copyWithin", "delete", "fill"];
  const SHOULD_REASSIGN_MAP_METHODS = ["set", "clear", "delete"];
  const SHOULD_REASSIGN_SET_METHODS = ["add", "clear", "delete"];
  const CHANGE_ARR_ORDER_METHODS = ["splice", "sort", "unshift", "shift"];
  const arrFnKeys = [
    "concat",
    "copyWithin",
    "entries",
    "every",
    "fill",
    "filter",
    "find",
    "findIndex",
    "flat",
    "flatMap",
    "forEach",
    "includes",
    "indexOf",
    "join",
    "keys",
    "lastIndexOf",
    "map",
    "pop",
    "push",
    "reduce",
    "reduceRight",
    "reverse",
    "shift",
    "unshift",
    "slice",
    "some",
    "sort",
    "splice",
    "values",
    "valueOf"
  ];
  const mapFnKeys = ["clear", "delete", "entries", "forEach", "get", "has", "keys", "set", "values"];
  const setFnKeys = ["add", "clear", "delete", "entries", "forEach", "has", "keys", "values"];
  const CAREFUL_FNKEYS = {
    [MAP$1]: mapFnKeys,
    [SET]: setFnKeys,
    [ARRAY]: arrFnKeys
  };
  const CHANGE_FNKEYS = {
    [MAP$1]: ["clear", "set", "delete"],
    [SET]: ["clear", "add", "delete"],
    [ARRAY]: ["pop", "push", "shift", "unshift", "splice", "sort", "copyWithin"]
  };
  const PROXYITEM_FNKEYS = {
    [MAP$1]: ["forEach", "get"],
    [SET]: ["forEach"],
    [ARRAY]: ["forEach", "map"]
  };
  const verWrap = { value: 0, usablePrefix: 1 };
  const conf = {
    autoFreeze: false,
    autoRevoke: true,
    fastModeRange: "array"
  };
  const toString = Object.prototype.toString;
  const canUseReflect = !!Reflect;
  const hasProp = Object.prototype.hasOwnProperty;
  function has(obj, key) {
    if (canUseReflect) {
      return Reflect.has(obj, key);
    }
    return hasProp.call(obj, key);
  }
  function deepDrill(obj, parentObj, key, subObjCb) {
    const list = [];
    const innerDeep = (obj2, parentObj2, key2) => {
      if (isPrimitive(obj2)) {
        return;
      }
      if (list.includes(obj2)) {
        return;
      }
      list.push(obj2);
      subObjCb(obj2, parentObj2, key2);
      if (Array.isArray(obj2)) {
        obj2.forEach((item, idx) => {
          innerDeep(item, obj2, idx);
        });
      }
      if (isMap(obj2)) {
        obj2.forEach((value, key3) => {
          innerDeep(value, obj2, key3);
        });
      }
      if (isObject(obj2)) {
        Object.keys(obj2).forEach((key3) => {
          innerDeep(obj2[key3], obj2, key3);
        });
      }
    };
    innerDeep(obj, parentObj, key);
  }
  function getValStrDesc(val) {
    return toString.call(val);
  }
  function noop(...args) {
    return args;
  }
  function isObject(val) {
    return getValStrDesc(val) === OBJ_DESC;
  }
  function isMap(val) {
    return getValStrDesc(val) === MAP_DESC;
  }
  function isSet(val) {
    return getValStrDesc(val) === SET_DESC;
  }
  function isFn(val) {
    return getValStrDesc(val) === FN_DESC;
  }
  function getDataType$1(dataNode) {
    var strDesc = getValStrDesc(dataNode);
    const dataType = desc2dataType[strDesc];
    return dataType;
  }
  function isPrimitive(val) {
    const desc = getValStrDesc(val);
    return ![OBJ_DESC, ARR_DESC, MAP_DESC, SET_DESC, FN_DESC].includes(desc);
  }
  function isPromiseFn(obj) {
    return obj.constructor.name === "AsyncFunction" || "function" === typeof obj.then;
  }
  function isPromiseResult(result) {
    return typeof Promise !== "undefined" && result instanceof Promise;
  }
  function canBeNum(val) {
    var valType = typeof val;
    if (valType === "number")
      return true;
    if (valType === "string")
      return /^[0-9]*$/.test(val);
    return false;
  }
  const descProto = {
    [ARR_DESC]: Array.prototype,
    [MAP_DESC]: Map.prototype,
    [SET_DESC]: Set.prototype,
    [FN_DESC]: Function.prototype
  };
  function injectMetaProto(rawObj) {
    const desc = getValStrDesc(rawObj);
    const rootProto = descProto[desc] || Object.prototype;
    const pureObj = /* @__PURE__ */ Object.create(null);
    Object.setPrototypeOf(pureObj, rootProto);
    Object.setPrototypeOf(rawObj, pureObj);
    return rawObj;
  }
  const ROOT_CTX = /* @__PURE__ */ new Map();
  function markModified(meta) {
    meta.rootMeta.modified = true;
    const doMark = (meta2) => {
      if (meta2 && !meta2.modified) {
        meta2.modified = true;
        doMark(meta2.parentMeta);
      }
    };
    doMark(meta);
  }
  function attachMeta(dataNode, meta, options) {
    if (options.apiCtx.debug) {
      const { fast } = options;
      if (fast) {
        dataNode[META_KEY] = meta;
      } else {
        injectMetaProto(dataNode);
        dataNode.__proto__[META_KEY] = meta;
      }
    }
    return dataNode;
  }
  function getKeyPath(draftNode, curKey, apiCtx) {
    const pathArr = [curKey];
    const meta = getSafeDraftMeta(draftNode, apiCtx);
    if (meta && meta.level > 0) {
      const { keyPath } = meta;
      return [...keyPath, curKey];
    }
    return pathArr;
  }
  function newMeta(key, baseData, options) {
    const { ver, parentMeta = null, immutBase, compareVer, apiCtx, hasOnOperate } = options;
    const dataType = getDataType$1(baseData);
    let keyPath = [];
    let level = 0;
    let copy = null;
    if (parentMeta) {
      copy = parentMeta.copy;
      level = getNextMetaLevel(copy, apiCtx);
      keyPath = getKeyPath(copy, key, apiCtx);
    }
    const meta = {
      // @ts-ignore add later
      rootMeta: null,
      parentMeta,
      parent: copy,
      selfType: dataType,
      self: baseData,
      // @ts-ignore add later
      copy: null,
      key,
      keyPath,
      level,
      // @ts-ignore add later
      /** @type any */
      proxyVal: null,
      proxyItems: null,
      modified: false,
      scopes: [],
      isImmutBase: immutBase,
      isDel: false,
      isFast: false,
      isArrOrderChanged: false,
      newNodeStats: {},
      newNodeMap: /* @__PURE__ */ new Map(),
      newNodes: [],
      ver,
      compareVer,
      revoke: noop,
      hasOnOperate,
      execOnOperate: noop
    };
    if (level === 0) {
      meta.rootMeta = meta;
    } else {
      meta.rootMeta = parentMeta.rootMeta;
    }
    return meta;
  }
  function isDraft$2(mayDraft) {
    const meta = getDraftProxyMeta(mayDraft);
    if (!meta) {
      return false;
    }
    return !meta.isImmutBase;
  }
  function genMetaVer() {
    if (verWrap.value >= Number.MAX_SAFE_INTEGER) {
      verWrap.value = 1;
      verWrap.usablePrefix += 1;
    } else {
      verWrap.value += 1;
    }
    const { value, usablePrefix } = verWrap;
    const metaVer = `${usablePrefix}_${value}`;
    return metaVer;
  }
  function getNextMetaLevel(mayContainMetaObj, apiCtx) {
    const meta = getDraftMeta(mayContainMetaObj, apiCtx);
    return meta ? meta.level + 1 : 1;
  }
  function getSafeDraftMeta(proxyDraft, apiCtx) {
    return apiCtx.metaMap.get(proxyDraft);
  }
  function getDraftMeta(proxyDraft, apiCtx) {
    let apiCtxVar = apiCtx || getApiCtx(proxyDraft);
    return (apiCtxVar === null || apiCtxVar === void 0 ? void 0 : apiCtxVar.metaMap.get(proxyDraft)) || null;
  }
  function getMetaVer(mayDraftProxy) {
    return mayDraftProxy ? mayDraftProxy[META_VER] || "" : "";
  }
  function getApiCtx(mayDraftProxy) {
    const ver = getMetaVer(mayDraftProxy);
    return ROOT_CTX.get(ver) || null;
  }
  function getDraftProxyMeta(mayDraftProxy) {
    const apiCtx = getApiCtx(mayDraftProxy);
    if (!apiCtx) {
      return null;
    }
    return apiCtx.metaMap.get(mayDraftProxy) || null;
  }
  function isDiff$2(val1, val2) {
    const meta1 = getDraftProxyMeta(val1);
    const meta2 = getDraftProxyMeta(val2);
    if (!meta1 && !meta2) {
      return !Object.is(val1, val2);
    }
    const { self: self1, modified: modified1, compareVer: cv1, ver: ver1, level: level1 } = meta1 || { self: val1, modified: false, compareVer: false, ver: "0", level: 0 };
    const { self: self2, modified: modified2, compareVer: cv2, ver: ver2, level: level2 } = meta2 || { self: val2, modified: false, compareVer: false, ver: "0", level: 0 };
    if (self1 !== self2) {
      return true;
    }
    if ((cv1 || cv2) && (level1 === 0 || level2 === 0) && ver1 !== ver2) {
      return true;
    }
    return modified1 || modified2;
  }
  function shallowCompare$2(prevObj, nextObj, compareLimuProxyRaw = true) {
    const diffFn = compareLimuProxyRaw ? isDiff$2 : Object.is;
    const isObjDiff = (a2, b2) => {
      for (let i2 in a2)
        if (!(i2 in b2))
          return true;
      for (let i2 in b2)
        if (diffFn(a2[i2], b2[i2]))
          return true;
      return false;
    };
    const isEqual = !isObjDiff(prevObj, nextObj);
    return isEqual;
  }
  function tryMakeCopy(val, options) {
    const { parentType, fastModeRange } = options;
    if (Array.isArray(val)) {
      return { copy: val.slice(), fast: false };
    }
    const fast = fastModeRange === "array" && parentType === ARRAY || fastModeRange === "all";
    let copy = val;
    if (val && isObject(val)) {
      copy = Object.assign({}, val);
    }
    if (isMap(val)) {
      copy = new Map(val);
    }
    if (isSet(val)) {
      copy = new Set(val);
    }
    return { copy, fast };
  }
  function makeCopyWithMeta(ori, meta, options) {
    const { apiCtx, immutBase } = options;
    if (immutBase) {
      return { copy: ori, fast: false };
    }
    const { copy, fast } = tryMakeCopy(ori, options);
    attachMeta(copy, meta, { apiCtx, fast });
    return { copy, fast };
  }
  function ressignArrayItem(listMeta, itemMeta, ctx2) {
    const { copy, isArrOrderChanged } = listMeta;
    const { targetNode, key } = ctx2;
    if (isArrOrderChanged) {
      const key2 = copy.findIndex((item) => item === itemMeta.copy);
      if (key2 >= 0) {
        copy[key2] = targetNode;
      }
      return;
    }
    copy[key] = targetNode;
  }
  function isInSameScope(mayDraftProxy, callerScopeVer) {
    if (!isObject(mayDraftProxy)) {
      return true;
    }
    return getMetaVer(mayDraftProxy) === callerScopeVer;
  }
  function clearScopes(rootMeta, apiCtx) {
    const { debug } = apiCtx;
    const drilledMap = /* @__PURE__ */ new Map();
    apiCtx.newNodeMap.forEach((v2) => {
      const { node, parent, key } = v2;
      const drilledNode = drilledMap.get(node);
      if (drilledNode) {
        parent[key] = drilledNode;
        return;
      }
      const item = v2;
      deepDrill(node, parent, key, (obj, parentObj, key2) => {
        const meta = getDraftMeta(obj, apiCtx);
        if (meta) {
          const { modified, copy, self } = meta;
          const targetNode = !modified ? self : copy;
          parentObj[key2] = targetNode;
        }
      });
      item.target = parent[key];
      drilledMap.set(node, item.target);
    });
    rootMeta.scopes.forEach((meta) => {
      const { modified, copy, parentMeta, key, self, revoke, proxyVal, isDel, isFast } = meta;
      if (!copy)
        return revoke();
      if (debug) {
        if (isFast) {
          delete copy[META_KEY];
        } else {
          delete copy.__proto__[META_KEY];
        }
      }
      if (!parentMeta)
        return revoke();
      const targetNode = !modified ? self : copy;
      const parentCopy = parentMeta.copy;
      const parentType = parentMeta.selfType;
      if (parentType === MAP$1) {
        parentCopy.set(key, targetNode);
        return revoke();
      }
      if (parentType === SET) {
        parentCopy.delete(proxyVal);
        parentCopy.add(targetNode);
        return revoke();
      }
      if (parentType === ARRAY) {
        ressignArrayItem(parentMeta, meta, { targetNode, key });
        return revoke();
      }
      if (isDel !== true) {
        parentCopy[key] = targetNode;
        return revoke();
      }
    });
    rootMeta.scopes.length = 0;
  }
  function extractFinalData(rootMeta, apiCtx) {
    const { self, copy, modified } = rootMeta;
    let final = self;
    if (copy && modified) {
      final = rootMeta.copy;
    }
    clearScopes(rootMeta, apiCtx);
    return final;
  }
  function recordVerScope(meta) {
    meta.rootMeta.scopes.push(meta);
  }
  function createScopedMeta(key, baseData, options) {
    const { traps, parentType, fastModeRange, immutBase, apiCtx, autoRevoke } = options;
    const meta = newMeta(key, baseData, options);
    const { copy, fast } = makeCopyWithMeta(baseData, meta, {
      immutBase,
      parentType,
      fastModeRange,
      apiCtx
    });
    meta.copy = copy;
    meta.isFast = fast;
    if (immutBase) {
      const ret = new Proxy(copy, traps);
      meta.proxyVal = ret;
      meta.revoke = noop;
    } else {
      const ret = Proxy.revocable(copy, traps);
      meta.proxyVal = ret.proxy;
      meta.revoke = autoRevoke ? ret.revoke : noop;
    }
    apiCtx.metaMap.set(copy, meta);
    apiCtx.metaMap.set(meta.proxyVal, meta);
    return meta;
  }
  function shouldGenerateProxyItems(parentType, key) {
    if (parentType === ARRAY)
      return true;
    const fnKeys = PROXYITEM_FNKEYS[parentType] || [];
    return fnKeys.includes(key);
  }
  function getMayProxiedVal(val, options) {
    const { key, parentMeta, parent, parentType, fastModeRange, readOnly, apiCtx } = options;
    let curVal = val;
    if (readOnly && parentMeta && !isFn(val)) {
      const { copy, self } = parentMeta;
      const latestVal = self[key];
      if (curVal !== latestVal) {
        const meta = apiCtx.metaMap.get(curVal);
        if (meta) {
          apiCtx.metaMap.delete(curVal);
          apiCtx.metaMap.delete(meta.proxyVal);
        }
        copy[key] = latestVal;
        curVal = latestVal;
      }
    }
    const mayCreateProxyVal = (val2, inputKey) => {
      const key2 = inputKey || "";
      if (isPrimitive(val2) || !val2) {
        return val2;
      }
      if (!parentMeta) {
        throw new Error("[[ createMeta ]]: meta should not be null");
      }
      if (!isFn(val2)) {
        if (
          // 是一个全新的节点，不必生成代理，以便提高性能
          parentMeta.newNodeStats[key2] || // 已被 markRaw 标记，不需转为代理
          val2[IS_RAW]
        ) {
          return val2;
        }
        let valMeta = getSafeDraftMeta(val2, apiCtx);
        if (!valMeta) {
          valMeta = createScopedMeta(key2, val2, options);
          recordVerScope(valMeta);
          if (parentMeta.selfType === MAP$1) {
            parent.set(key2, valMeta.copy);
          } else {
            parent[key2] = valMeta.copy;
          }
        }
        return valMeta.proxyVal;
      }
      if (!shouldGenerateProxyItems(parentType, key2)) {
        return val2;
      }
      if (parentMeta.proxyItems) {
        return val2;
      }
      let proxyItems = [];
      if (parentType === SET) {
        const tmp = /* @__PURE__ */ new Set();
        parent.forEach((val3) => tmp.add(mayCreateProxyVal(val3)));
        replaceSetOrMapMethods(tmp, parentMeta, {
          dataType: SET,
          apiCtx
        });
        proxyItems = attachMeta(tmp, parentMeta, { fast: fastModeRange, apiCtx });
        parentMeta.copy = proxyItems;
      } else if (parentType === MAP$1) {
        const tmp = /* @__PURE__ */ new Map();
        parent.forEach((val3, key3) => tmp.set(key3, mayCreateProxyVal(val3, key3)));
        replaceSetOrMapMethods(tmp, parentMeta, {
          dataType: MAP$1,
          apiCtx
        });
        proxyItems = attachMeta(tmp, parentMeta, { fast: fastModeRange, apiCtx });
        parentMeta.copy = proxyItems;
      } else if (parentType === ARRAY && key2 !== "sort") {
        parentMeta.copy = parentMeta.copy || parent.slice();
        proxyItems = parentMeta.proxyVal;
      }
      parentMeta.proxyItems = proxyItems;
      return val2;
    };
    return mayCreateProxyVal(curVal, key);
  }
  function getUnProxyValue(value, apiCtx) {
    if (!isObject(value)) {
      return value;
    }
    const valueMeta = getSafeDraftMeta(value, apiCtx);
    if (!valueMeta)
      return value;
    return valueMeta.copy;
  }
  function replaceSetOrMapMethods(mapOrSet, meta, options) {
    const { dataType, apiCtx } = options;
    const oriDel = mapOrSet.delete.bind(mapOrSet);
    const oriClear = mapOrSet.clear.bind(mapOrSet);
    mapOrSet.delete = function limuDelete(...args) {
      markModified(meta);
      return oriDel(...args);
    };
    mapOrSet.clear = function limuClear(...args) {
      markModified(meta);
      return oriClear(...args);
    };
    if (dataType === SET) {
      const oriAdd = mapOrSet.add.bind(mapOrSet);
      mapOrSet.add = function limuAdd(...args) {
        markModified(meta);
        return oriAdd(...args);
      };
    }
    if (dataType === MAP$1) {
      const oriSet = mapOrSet.set.bind(mapOrSet);
      const oriGet = mapOrSet.get.bind(mapOrSet);
      mapOrSet.set = function limuSet(...args) {
        markModified(meta);
        if (meta.hasOnOperate) {
          const value = args[1];
          meta.rootMeta.execOnOperate("set", args[0], { mayProxyVal: value, value, parentMeta: meta });
        }
        return oriSet(...args);
      };
      mapOrSet.get = function limuGet(...args) {
        const mayProxyVal = oriGet(...args);
        if (meta.hasOnOperate) {
          const draftMeta = getDraftMeta(mayProxyVal, apiCtx);
          const value = draftMeta ? draftMeta.copy || draftMeta.self : mayProxyVal;
          meta.rootMeta.execOnOperate("get", args[0], { mayProxyVal, value, parentMeta: meta, isChanged: false });
        }
        return mayProxyVal;
      };
    }
  }
  function mayMarkModified(options) {
    const { calledBy, parentMeta, op, parentType } = options;
    if (["deleteProperty", "set"].includes(calledBy) || calledBy === "get" && (parentType === SET && SHOULD_REASSIGN_SET_METHODS.includes(op) || // 针对 Set.add
    parentType === ARRAY && SHOULD_REASSIGN_ARR_METHODS.includes(op) || // 针对 Array 一系列的改变操作
    parentType === MAP$1 && SHOULD_REASSIGN_MAP_METHODS.includes(op))) {
      markModified(parentMeta);
    }
  }
  function getValPathKey(parentMeta, key) {
    const pathCopy = parentMeta.keyPath.slice();
    pathCopy.push(key);
    const valPathKey = pathCopy.join("|");
    return valPathKey;
  }
  function handleDataNode(parentDataNode, copyCtx) {
    const { op, key, value: mayProxyValue, calledBy, parentType, parentMeta, apiCtx, isValueDraft } = copyCtx;
    const value = getUnProxyValue(mayProxyValue, apiCtx);
    if (!parentMeta) {
      parentDataNode[key] = value;
      return;
    }
    const { self, copy: parentCopy } = parentMeta;
    mayMarkModified({ calledBy, parentMeta, op, parentType });
    const fnKeys = CAREFUL_FNKEYS[parentType] || [];
    if (isFn(mayProxyValue) && fnKeys.includes(op)) {
      if ("slice" === op) {
        return self.slice;
      }
      if (CHANGE_ARR_ORDER_METHODS.includes(op)) {
        parentMeta.isArrOrderChanged = true;
      }
      if (parentCopy) {
        if (parentType === SET || parentType === MAP$1) {
          return parentCopy[op].bind(parentCopy);
        }
        return parentCopy[op];
      }
      return self[op].bind(self);
    }
    if (!parentCopy) {
      return value;
    }
    const oldValue = parentCopy[key];
    const tryMarkDel = () => {
      const oldValueMeta = getDraftMeta(oldValue, apiCtx);
      oldValueMeta && (oldValueMeta.isDel = true);
    };
    const tryMarkUndel = () => {
      const valueMeta = getDraftMeta(mayProxyValue, apiCtx);
      if (valueMeta && valueMeta.isDel) {
        valueMeta.isDel = false;
        valueMeta.key = key;
        valueMeta.keyPath = parentMeta.keyPath.concat([key]);
        valueMeta.level = parentMeta.level + 1;
        valueMeta.parent = parentMeta.copy;
        valueMeta.parentMeta = parentMeta;
      }
    };
    if (calledBy === "deleteProperty") {
      const valueMeta = getDraftMeta(mayProxyValue, apiCtx);
      if (valueMeta) {
        valueMeta.isDel = true;
      } else {
        tryMarkDel();
      }
      const val = parentCopy[key];
      if (!isPrimitive(val)) {
        apiCtx.newNodeMap.delete(getValPathKey(parentMeta, key));
      }
      delete parentCopy[key];
      return;
    }
    if (!isValueDraft && !isPrimitive(value)) {
      parentMeta.newNodeStats[key] = true;
      apiCtx.newNodeMap.set(getValPathKey(parentMeta, key), { parent: parentCopy, node: value, key, target: null });
    }
    parentCopy[key] = value;
    tryMarkDel();
    tryMarkUndel();
  }
  function deepFreeze(obj) {
    if (isPrimitive(obj)) {
      return obj;
    }
    if (Array.isArray(obj) && obj.length > 0) {
      obj.forEach(deepFreeze);
      return Object.freeze(obj);
    }
    if (isSet(obj)) {
      const set = obj;
      set.add = () => set;
      set.delete = () => false;
      set.clear = noop;
      for (const item of set.values()) {
        Object.freeze(item);
      }
      return Object.freeze(obj);
    }
    if (isMap(obj)) {
      const map = obj;
      map.set = () => map;
      map.delete = () => false;
      map.clear = noop;
      for (const item of map.values()) {
        Object.freeze(item);
      }
      return Object.freeze(obj);
    }
    const propertyNames = Object.getOwnPropertyNames(obj);
    propertyNames.forEach((name) => {
      const value = obj[name];
      deepFreeze(value);
    });
    return Object.freeze(obj);
  }
  const PROPERTIES_BLACK_LIST = ["length", "constructor", "asymmetricMatch", "nodeType", "size"];
  const PBL_DICT = {};
  PROPERTIES_BLACK_LIST.forEach((item) => PBL_DICT[item] = 1);
  const TYPE_BLACK_DICT = { [ARRAY]: 1, [SET]: 1, [MAP$1]: 1 };
  const FINISH_HANDLER_MAP = /* @__PURE__ */ new Map();
  function buildLimuApis(options) {
    var _a, _b, _c, _d, _e, _f, _g;
    const opts = options || {};
    const onOperate = opts.onOperate;
    const hasOnOperate = !!onOperate;
    const customKeys = opts.customKeys || [];
    const fastModeRange = opts.fastModeRange || conf.fastModeRange;
    const immutBase = (_a = opts[IMMUT_BASE]) !== null && _a !== void 0 ? _a : false;
    const readOnly = (_b = opts.readOnly) !== null && _b !== void 0 ? _b : false;
    const disableWarn = opts.disableWarn;
    const compareVer = (_c = opts.compareVer) !== null && _c !== void 0 ? _c : false;
    const debug = (_d = opts.debug) !== null && _d !== void 0 ? _d : false;
    const autoFreeze = (_e = opts.autoFreeze) !== null && _e !== void 0 ? _e : conf.autoFreeze;
    const metaVer = genMetaVer();
    const apiCtx = { metaMap: /* @__PURE__ */ new Map(), newNodeMap: /* @__PURE__ */ new Map(), debug, metaVer };
    ROOT_CTX.set(metaVer, apiCtx);
    const autoRevoke = (_f = opts.autoRevoke) !== null && _f !== void 0 ? _f : conf.autoRevoke;
    const silenceSetTrapErr = (_g = opts.silenceSetTrapErr) !== null && _g !== void 0 ? _g : true;
    const logChangeFailed = (op, key) => {
      console.warn(`${op} ${key} failed, cuase draft root has been finised!`);
      return silenceSetTrapErr;
    };
    let isDraftFinished = false;
    const warnReadOnly = () => {
      if (!disableWarn) {
        console.warn("can not mutate state at readOnly mode!");
      }
      return true;
    };
    const execOnOperate = (op, key, options2) => {
      const { mayProxyVal, parentMeta: inputPMeta, value, isCustom = false } = options2;
      let isChanged = false;
      if (!onOperate)
        return { isChanged, mayProxyVal };
      const parentMeta = inputPMeta || {};
      const { selfType = "", keyPath = [], copy, self, modified, proxyVal: parentProxy } = parentMeta || {};
      let isBuiltInFnKey = false;
      if (options2.isChanged !== void 0) {
        isChanged = options2.isChanged;
      } else {
        const fnKeys = CAREFUL_FNKEYS[selfType] || [];
        if (fnKeys.includes(key)) {
          isBuiltInFnKey = true;
          const changeFnKeys = CHANGE_FNKEYS[selfType] || [];
          isChanged = changeFnKeys.includes(key);
        } else if (op !== "get") {
          const node = modified ? copy : self;
          isChanged = inputPMeta ? node[key] !== value : true;
        }
      }
      let replacedValue = null;
      let isReplaced = false;
      const replaceValue = (value2) => {
        isReplaced = true;
        replacedValue = value2;
      };
      const getReplaced = () => ({ isReplaced, replacedValue });
      onOperate({
        immutBase,
        parent: self,
        parentType: selfType,
        parentProxy,
        op,
        replaceValue,
        getReplaced,
        isBuiltInFnKey,
        isChanged,
        isCustom,
        key,
        keyPath,
        fullKeyPath: keyPath.concat(key),
        value,
        proxyValue: mayProxyVal
      });
      return {
        mayProxyVal: isReplaced ? replacedValue : mayProxyVal,
        isChanged
      };
    };
    const limuApis = /* @__PURE__ */ (() => {
      let canFreezeDraft = true;
      const limuTraps = {
        // parent指向的是代理之前的对象
        get: (parent, key) => {
          if (META_VER === key) {
            return metaVer;
          }
          const currentVal = parent[key];
          if (JS_SYM_KEYS.includes(key)) {
            if (isFn(currentVal)) {
              if (Symbol.iterator === key && Array.isArray(parent)) {
                let idx = 0;
                const iter = () => ({
                  next: () => {
                    const len = parent.length;
                    if (len === 0) {
                      return { done: true, value: void 0 };
                    }
                    const done = idx === len;
                    const value = done ? void 0 : limuTraps.get(parent, String(idx));
                    idx++;
                    return { done, value };
                  },
                  [Symbol.iterator]: () => {
                    return iter;
                  }
                });
                return iter;
              }
              return currentVal.bind(parent);
            }
            return currentVal;
          }
          if (key === "__proto__" || key === "toJSON" && !has(parent, key)) {
            return currentVal;
          }
          let mayProxyVal = currentVal;
          const parentMeta = getSafeDraftMeta(parent, apiCtx);
          if (customKeys.includes(key)) {
            const ret2 = execOnOperate("get", key, { parentMeta, mayProxyVal, value: currentVal, isChanged: false, isCustom: true });
            return ret2.mayProxyVal;
          }
          const parentType = parentMeta === null || parentMeta === void 0 ? void 0 : parentMeta.selfType;
          if (TYPE_BLACK_DICT[parentType] && PBL_DICT[key]) {
            if (key === "length" || key === "size") {
              execOnOperate("get", key, { parentMeta, mayProxyVal, value: currentVal });
            }
            return parentMeta.copy[key];
          }
          mayProxyVal = getMayProxiedVal(currentVal, {
            key,
            compareVer,
            parentMeta,
            parentType,
            ver: metaVer,
            traps: limuTraps,
            parent,
            fastModeRange,
            immutBase,
            readOnly,
            apiCtx,
            hasOnOperate,
            autoRevoke
          });
          if (parentType === ARRAY && canBeNum(key)) {
            const ret2 = execOnOperate("get", key, { parentMeta, mayProxyVal, value: currentVal });
            return ret2.mayProxyVal;
          }
          if (CAREFUL_TYPES[parentType]) {
            mayProxyVal = handleDataNode(parent, {
              op: key,
              key,
              value: currentVal,
              calledBy: "get",
              parentType,
              parentMeta,
              apiCtx
            });
            const ret2 = execOnOperate("get", key, { parentMeta, mayProxyVal, value: currentVal });
            return ret2.mayProxyVal;
          }
          const ret = execOnOperate("get", key, { parentMeta, mayProxyVal, value: currentVal });
          return ret.mayProxyVal;
        },
        // parent 指向的是代理之前的对象
        set: (parent, key, value) => {
          if (isDraftFinished) {
            return logChangeFailed("set", key);
          }
          const parentMeta = getSafeDraftMeta(parent, apiCtx);
          let isValueDraft = false;
          if (isDraft$2(value)) {
            isValueDraft = true;
            if (isInSameScope(value, metaVer)) {
              const rawValue = getUnProxyValue(value, apiCtx);
              if (rawValue === parent[key]) {
                return true;
              }
            } else {
              canFreezeDraft = false;
            }
          }
          if (readOnly) {
            execOnOperate("set", key, { parentMeta, isChanged: false, value });
            return warnReadOnly();
          }
          if (parentMeta && parentMeta.selfType === ARRAY) {
            if (parentMeta.copy && parentMeta.__callSet && canBeNum(key)) {
              execOnOperate("set", key, { parentMeta, value });
              parentMeta.copy[key] = value;
              return true;
            }
            parentMeta.__callSet = true;
          }
          let isChanged = false;
          if (!onOperate) {
            const node = parentMeta.modified ? parentMeta.copy : parentMeta.self;
            isChanged = node[key] !== value;
          } else {
            const ret = execOnOperate("set", key, { parentMeta, value });
            isChanged = ret.isChanged;
          }
          if (isChanged) {
            handleDataNode(parent, {
              parentMeta,
              key,
              value,
              calledBy: "set",
              apiCtx,
              isValueDraft
            });
          }
          return true;
        },
        // delete or Reflect.deleteProperty will trigger this trap
        deleteProperty: (parent, key) => {
          if (isDraftFinished) {
            return logChangeFailed("delete", key);
          }
          const parentMeta = getSafeDraftMeta(parent, apiCtx);
          const value = parent[key];
          if (readOnly) {
            execOnOperate("del", key, { parentMeta, isChanged: false, value });
            return warnReadOnly();
          }
          execOnOperate("del", key, { parentMeta, isChanged: true, value });
          handleDataNode(parent, {
            parentMeta,
            op: "del",
            key,
            value: "",
            calledBy: "deleteProperty",
            apiCtx
          });
          return true;
        },
        // trap function call
        apply: function(target, thisArg, args) {
          return target.apply(thisArg, args);
        }
      };
      return {
        createDraft: (mayDraft) => {
          if (isPrimitive(mayDraft)) {
            throw new Error("base state can not be primitive");
          }
          let oriBase = mayDraft;
          const draftMeta = getSafeDraftMeta(mayDraft, apiCtx);
          if (draftMeta) {
            if (immutBase && draftMeta.isImmutBase) {
              return draftMeta.proxyVal;
            }
            oriBase = draftMeta.self;
          }
          const meta = createScopedMeta("", oriBase, {
            ver: metaVer,
            traps: limuTraps,
            immutBase,
            compareVer,
            apiCtx,
            hasOnOperate,
            autoRevoke
          });
          recordVerScope(meta);
          meta.execOnOperate = execOnOperate;
          FINISH_HANDLER_MAP.set(meta.proxyVal, limuApis.finishDraft);
          return meta.proxyVal;
        },
        finishDraft: (proxyDraft) => {
          const rootMeta = getSafeDraftMeta(proxyDraft, apiCtx);
          if (!rootMeta) {
            throw new Error("rootMeta should not be null!");
          }
          if (rootMeta.level !== 0) {
            throw new Error("can not finish sub draft node!");
          }
          if (rootMeta.isImmutBase) {
            return proxyDraft;
          }
          let final = extractFinalData(rootMeta, apiCtx);
          if (autoFreeze && canFreezeDraft) {
            final = deepFreeze(final);
          }
          ROOT_CTX.delete(metaVer);
          isDraftFinished = true;
          return final;
        }
      };
    })();
    return limuApis;
  }
  function markRaw$1(rawVal) {
    if (!rawVal || isPrimitive(rawVal))
      return rawVal;
    rawVal[IS_RAW] = true;
    return rawVal;
  }
  const isDraft$1 = isDraft$2;
  const isDiff$1 = isDiff$2;
  const shallowCompare$1 = shallowCompare$2;
  const limuUtils = {
    isObject,
    isDraft: isDraft$1,
    isDiff: isDiff$1,
    shallowCompare: shallowCompare$1,
    getDataType: getDataType$1
  };
  const VER$1 = VER$2;
  function createDraft(base, options) {
    const apis = buildLimuApis(options);
    return apis.createDraft(base);
  }
  function finishDraft(draft) {
    const finishHandler = FINISH_HANDLER_MAP.get(draft);
    if (!finishHandler) {
      throw new Error(`Not a Limu root draft or draft has been finished!`);
    }
    FINISH_HANDLER_MAP.delete(draft);
    return finishHandler(draft);
  }
  function checkCbFn(cb) {
    if (!isFn(cb)) {
      throw new Error("produce callback is not a function");
    }
  }
  function checkCbPromise(cb, result) {
    if (isPromiseFn(cb) || isPromiseResult(result)) {
      throw new Error("produce callback can not be a promise function or result");
    }
  }
  function innerProduce(baseState, cb, options) {
    checkCbFn(cb);
    const draft = createDraft(baseState, options);
    const result = cb(draft);
    checkCbPromise(cb, result);
    return finishDraft(draft);
  }
  function produceFn(baseState, cb, options) {
    if (!cb || !isFn(cb)) {
      const mayCb = baseState;
      const mayOptions = cb;
      checkCbFn(baseState);
      return (state) => {
        return innerProduce(state, mayCb, mayOptions);
      };
    }
    return innerProduce(baseState, cb, options);
  }
  const produce = produceFn;
  function immut(base, options) {
    const limuApis = buildLimuApis(Object.assign(Object.assign({}, options || {}), { readOnly: true, [IMMUT_BASE]: true }));
    const immutData = limuApis.createDraft(base);
    return immutData;
  }
  const markRaw = markRaw$1;
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var api_exports = {};
  __export(api_exports, {
    $: () => $$1,
    action: () => action,
    addMiddleware: () => addMiddleware,
    addPlugin: () => addPlugin,
    assignThisHX: () => assignThisHX,
    atom: () => atom,
    atomx: () => atomx,
    bindAtom: () => bindAtom,
    block: () => block,
    createShared: () => createShared,
    cst: () => cst,
    currentDraftRoot: () => currentDraftRoot,
    defineDeriveFnItem: () => defineDeriveFnItem,
    defineDeriveTask: () => defineDeriveTask,
    defineMutateFnItem: () => defineMutateFnItem,
    defineStore: () => defineStore,
    derive: () => derive,
    deriveDict: () => deriveDict,
    dynamicBlock: () => dynamicBlock,
    emit: () => emit,
    flush: () => flush,
    getActionLoading: () => getActionLoading,
    getAtom: () => getAtom,
    getDeriveLoading: () => getDeriveLoading,
    getHX: () => getHX,
    getMutateLoading: () => getMutateLoading,
    getRawState: () => getRawState,
    getSnap: () => getSnap,
    init: () => init,
    isAtom: () => isAtom,
    isDerivedAtom: () => isDerivedAtom,
    isDerivedResult: () => isDerivedResult,
    isDiff: () => isDiff,
    isDraft: () => isDraft,
    isSharedState: () => isSharedState,
    makeWithAtomOptions: () => makeWithAtomOptions,
    markRaw: () => markRaw,
    mutate: () => mutate,
    mutateDict: () => mutateDict,
    on: () => on,
    produce: () => produce,
    reactiveDesc: () => reactiveDesc,
    runDerive: () => runDerive,
    runDeriveTask: () => runDeriveTask,
    runMutate: () => runMutate,
    runMutateTask: () => runMutateTask,
    shallowCompare: () => shallowCompare,
    share: () => share,
    sharex: () => sharex,
    signal: () => signal,
    storeSrv: () => storeSrv,
    sync: () => sync,
    syncer: () => syncer,
    useActionLoading: () => useActionLoading,
    useAtom: () => useAtom,
    useAtomX: () => useAtomX,
    useDerived: () => useDerived,
    useGlobalForceUpdate: () => useGlobalForceUpdate,
    useGlobalId: () => useGlobalId,
    useLocalForceUpdate: () => useLocalForceUpdate,
    useMutable: () => useMutable,
    useMutateLoading: () => useMutateLoading,
    useOnEvent: () => useOnEvent,
    useReactive: () => useReactive,
    useReactiveX: () => useReactiveX,
    useService: () => useService,
    useWatch: () => useWatch,
    useWatchEffect: () => useWatchEffect,
    watch: () => watch,
    watchEffect: () => watchEffect,
    withAtom: () => withAtom
  });
  var symbolSeed = 0;
  var NativeSym = Symbol;
  var HAS_SYMBOL = typeof NativeSym === "function";
  function createSymbol(str) {
    if (HAS_SYMBOL) {
      return NativeSym(str);
    }
    symbolSeed += 1;
    return `__HELUX_SYMBOL_${symbolSeed}__`;
  }
  var VER = "5.0.2";
  var LIMU_VER = VER$1;
  var EVENT_NAME = {
    ON_DATA_CHANGED: "ON_DATA_CHANGED",
    ON_SHARE_CREATED: "ON_SHARE_CREATED",
    ON_ERROR_OCCURED: "ON_ERROR_OCCURED"
  };
  var RECORD_LOADING = {
    NO: "no",
    PRIVATE: "private",
    GLOBAL: "global"
  };
  var PROTO_KEY = "__proto__";
  var HAS_PROXY = O$2();
  var RUN_AT_SERVER = y$1();
  var UNDEFINED = createSymbol("HeluxUndefined");
  var MUTATE_FN_ITEM = createSymbol("HeluxMutateFnItem");
  var FN_KEY = createSymbol("HeluxFnKey");
  var SHARED_KEY = createSymbol("HeluxSharedKey");
  var REACTIVE_META_KEY = createSymbol("HeluxReactiveMeta");
  var IS_BLOCK = createSymbol("HeluxIsBlock");
  var IS_ATOM = createSymbol("HeluxIsAtom");
  var IS_DERIVED_ATOM = createSymbol("HeluxIsDerivedAtom");
  var CLASS_ATOM = createSymbol("HeluxClassDefaultAtom");
  var CLASS_ERROR = createSymbol("HeluxClassError");
  var CLASS_ERROR_INFO = createSymbol("HeluxClassErrorInfo");
  var OP_KEYS = [SHARED_KEY, IS_ATOM, IS_DERIVED_ATOM, IS_BLOCK];
  var SINGLE_MUTATE = "SingleMutate";
  var HELUX_GLOBAL_LOADING = "HeluxGlobalLoading";
  var STOP_DEPTH = 6;
  var STOP_ARR_DEP = true;
  var EXPIRE_MS = 2e3;
  var SIZE_LIMIT = 20;
  var RENDER_START = "1";
  var RENDER_END = "2";
  var NOT_MOUNT = 1;
  var MOUNTED = 2;
  var UNMOUNT = 3;
  var KEY_SPLITER = "|";
  var ASYNC_TYPE = {
    TASK: "task",
    MAY_TRANSFER: "may_transfer"
  };
  var SCOPE_TYPE = {
    STATIC: "static",
    HOOK: "hook"
  };
  var STATE_TYPE = {
    USER_STATE: "user_state",
    GLOGAL_EMPTY: "global_empty",
    GLOGAL_LOADING: "global_loading",
    PRIVATE_LOADING: "private_loading"
  };
  var DERIVE = "derive";
  var WATCH = "watch";
  var DICT = "Object";
  var MAP = "Map";
  var ARR = "Array";
  var OTHER = "Other";
  var FROM = {
    /**
     * 来自 top setState(draft)、ins setState(draft) 的读写
     * ```ts
     * const [, setState] = atom({a:1});
     *
     * const [, setState] = useAtom();
     * ```
     */
    SET_STATE: "SetState",
    /**
     * 来自 mutate task setState(draft), mutate fn reactive draft 的读写
     * ```ts
     * mutate({
     *   fn: draft => draft.xx = 1,
     *   task: async({ setState }){ },
     * });
     * ```
     */
    MUTATE: "Mutate",
    /**
     * 来自 action setState(draft) 的读写
     * ```ts
     * action(({ setState })=>{
     *   setState();
     * })
     * ```
     */
    ACTION: "Action",
    /**
     * 来自 top reactive、ins reactive、mutate task reactive draft、action reactive draft 的读写
     * ```ts
     * mutate({
     *   task: async({ draft }){ },
     * });
     *
     * action(async ({ draft })=>{ });
     *
     * const [,,{ reactive }] = atom({a:1});
     *
     * const [ reactive ] = useReactive(someAtom);
     * ```
     */
    REACTIVE: "Reactive",
    /**
     * 来自伴生 loading 的读写
     */
    LOADING: "Loading",
    /**
     * 来自 sync 的读写
     * ```ts
     * import { sync } from 'helux';
     * sync(someState)(to=>to.a.b);
     *
     * const [,,{ sync }] = atom({a:1});
     * sync(to=>to.a.b);
     * ```
     */
    SYNC: "Sync"
  };
  function isAtom(mayAtom) {
    if (!mayAtom) {
      return false;
    }
    return mayAtom[IS_ATOM] ?? false;
  }
  function isSharedState(mayShared) {
    if (!mayShared) {
      return false;
    }
    return mayShared[IS_ATOM] !== void 0;
  }
  function isDerivedAtom(mayAtomDerived) {
    if (!mayAtomDerived) {
      return false;
    }
    return mayAtomDerived[IS_DERIVED_ATOM] || false;
  }
  function isDerivedResult(mayDerived) {
    if (!mayDerived) {
      return false;
    }
    return mayDerived[IS_DERIVED_ATOM] !== void 0;
  }
  function getAtom(mayAtom) {
    if (isAtom(mayAtom) || isDerivedAtom(mayAtom)) {
      return mayAtom.val;
    }
    return mayAtom;
  }
  function buildFnScope() {
    return {
      keySeed: {
        static: 0,
        hook: 0,
        Reactive: 0,
        Mutate: 0
      },
      runningFnKey: "",
      /**
       * 从 sharedKey 维度辅助 helpers/fnDep 丢弃一些异步逻辑中收集的依赖信息
       */
      runningSharedKey: 0,
      /**
       * 忽略依赖收集，辅助 helpers/fnDep mutateFn/callAsyncMutateFnLogic 里丢弃一些异步逻辑中收集的依赖信息
       * helux强制用户必须把依赖放置于同步逻辑中
       */
      isIgnore: false,
      /** 函数运行结束收集到的读依赖 depKeys */
      depKeys: [],
      /** 函数运行结束后，会做一次依赖精简逻辑，只保留最长路径依赖，若依赖在 fixedDepKeys 里则不会被精简掉 */
      fixedDepKeys: [],
      /**
       * del path array of array
       * 需要移除的 depKeys，解决 mutate 回调里 draft 里深层次读取修改的依赖收集不正确问题
       * ```
       * // 这里 get 收集到了 a，这个 a 需要移除，否则会造成死循环依赖误判
       * draft.a.val = state.someKey + 1;
       * ```
       */
      delPathAoa: [],
      /** globalId to Array<insKey> */
      GID_INSKEYS_MAP: /* @__PURE__ */ new Map(),
      FNKEY_STATIC_CTX_MAP: /* @__PURE__ */ new Map(),
      FNKEY_HOOK_CTX_MAP: /* @__PURE__ */ new Map(),
      DEPKEY_FNKEYS_MAP: /* @__PURE__ */ new Map(),
      /** sharedKeyStr to fnKeys */
      SKEY_FNKEYS_MAP: /* @__PURE__ */ new Map(),
      UNMOUNT_INFO_MAP: /* @__PURE__ */ new Map(),
      /** 记录第一次运行的各个函数，辅助推导出计算状态 */
      DEPKEY_COMPUTING_FNKEYS_MAP: /* @__PURE__ */ new Map()
    };
  }
  function buildBlockScope() {
    return {
      keySeed: 0,
      // for block key
      keyPrefix: 0,
      initCount: 0,
      mountedCount: 0,
      latest: {
        val: null,
        stateOrResult: null,
        sharedKey: 0,
        depKey: "",
        keyPath: [],
        isDerivedResult: false,
        isDerivedAtom: false
      },
      runningKey: "",
      isDynamic: false,
      /** blockKey to IBlockCtx */
      KEY_CTX_MAP: /* @__PURE__ */ new Map(),
      KEY_DYNAMIC_CTX_MAP: /* @__PURE__ */ new Map()
    };
  }
  function buildInsScope() {
    return {
      keySeed: 0,
      // for insKey
      UNMOUNT_INFO_MAP: /* @__PURE__ */ new Map()
    };
  }
  function buildSharedScope() {
    return {
      keySeed: 0,
      // for sharedKey
      SHARED_KEY_STATE_MAP: /* @__PURE__ */ new Map(),
      /** rawState to sharedKey */
      STATE_SHARED_KEY_MAP: /* @__PURE__ */ new Map(),
      /** sharedKey to internal */
      INTERMAL_MAP: /* @__PURE__ */ new Map(),
      /** cache value compare result */
      COMPARE_MAP: /* @__PURE__ */ new Map(),
      isStateChanged: false
    };
  }
  function buildEventBus() {
    const name2cbs = {};
    return {
      on: (name, cb) => {
        const cbs = k$1(name2cbs, name, []);
        cbs.push(cb);
      },
      emit: (name, ...args) => {
        const cbs = name2cbs[name] || [];
        cbs.slice().forEach((cb) => cb(...args));
      },
      off: (name, cb) => {
        const cbs = name2cbs[name] || [];
        const idx = cbs.findIndex((item) => item === cb);
        if (idx >= 0) cbs.splice(idx, 1);
      },
      /** for perf */
      canEmit: (name) => name2cbs[name]
    };
  }
  function createRoot() {
    const root = {
      VER,
      LIMU_VER: VER$1,
      rootState: {},
      setState: (moduleName, partialState) => {
        const modInternal = root.ctx.modMap.get(moduleName);
        if (!modInternal) {
          throw new Error(`moduleName ${moduleName} not found`);
        }
        modInternal.setState(partialState);
      },
      ctx: {
        bus: buildEventBus(),
        userBus: buildEventBus(),
        mod: {},
        // 与模块相关的辅助信息（4.7.0 之后使用 modMap 替代，后期会删除此属性）
        modMap: /* @__PURE__ */ new Map(),
        // 替代 mod
        middlewares: [],
        plugins: [],
        sharedScope: buildSharedScope(),
        fnScope: buildFnScope(),
        insScope: buildInsScope(),
        blockScope: buildBlockScope(),
        markAtomMap: /* @__PURE__ */ new Map(),
        // 不支持 symbol 的环境才会记录此map
        renderSN: 0,
        // 触发setState批次序列号的种子数
        globalLoading: W$1(null),
        // works for top api useLoading
        globalLoadingInternal: W$1(null),
        // works for top api useLoading
        globalEmpty: W$1(null),
        // works for top api useGlobalId
        globalEmptyInternal: W$1(null),
        // works for top api useGlobalId
        isRootRender: true
      },
      legacyRoot: {}
    };
    return root;
  }
  var ROOT = W$1({});
  var inited = false;
  var API = W$1(null);
  var optionsInited = false;
  function getRootCtx() {
    return ROOT.ctx || W$1({});
  }
  function getRoot() {
    return ROOT;
  }
  function setRootData(options) {
    ROOT = options.ROOT;
    API = options.api;
    inited = options.inited;
  }
  function getRootData() {
    return { ROOT, inited, API };
  }
  function init(options) {
    if (optionsInited) {
      return false;
    }
    optionsInited = true;
    const { isRootRender = true } = options;
    getRootCtx().isRootRender = isRootRender;
    return true;
  }
  var ctx = getRootCtx();
  function getCtxVal(key) {
    const safeCtx = getRootCtx();
    const val = safeCtx[key];
    ctx[key] = val;
    return val;
  }
  function getBlockScope() {
    return ctx.blockScope || getCtxVal("blockScope");
  }
  function getFnScope() {
    return ctx.fnScope || getCtxVal("fnScope");
  }
  function getSharedScope() {
    return ctx.sharedScope || getCtxVal("sharedScope");
  }
  function getInsScope() {
    return ctx.insScope || getCtxVal("insScope");
  }
  function getInternalMap() {
    const { INTERMAL_MAP } = getSharedScope();
    return INTERMAL_MAP;
  }
  function clearInternal(moduleName, loc) {
    if (!moduleName || !g$1() || !loc) return;
    const { INTERMAL_MAP, SHARED_KEY_STATE_MAP, STATE_SHARED_KEY_MAP } = getSharedScope();
    let matchedKeys = [];
    let cleared = false;
    INTERMAL_MAP.forEach((item) => {
      if (item.moduleName === moduleName && item.loc === loc && item.stateType === STATE_TYPE.USER_STATE) {
        matchedKeys.push(item.sharedKey);
      }
    });
    if (matchedKeys.length > 1) {
      const key = matchedKeys[0];
      const prev = INTERMAL_MAP.get(key);
      INTERMAL_MAP.delete(key);
      if (prev) {
        SHARED_KEY_STATE_MAP.delete(prev.sharedKey);
        STATE_SHARED_KEY_MAP.delete(prev.rawState);
      }
    }
    return cleared;
  }
  function getInternalByKey(sharedKey) {
    const internalMap = getInternalMap();
    return internalMap.get(sharedKey);
  }
  function getInternal(state) {
    const key = getSharedKey(state);
    return getInternalByKey(key);
  }
  function setInternal(state, internal) {
    const internalMap = getInternalMap();
    const key = getSharedKey(state);
    internalMap.set(key, internal);
  }
  function getRawState(state) {
    const internal = getInternal(state);
    return internal.rawState;
  }
  function getSnap(state, isPrev = true) {
    const internal = getInternal(state);
    return isPrev ? internal.prevSnap : internal.snap;
  }
  function getSharedKey(state) {
    if (!state) return 0;
    return state[SHARED_KEY] || getSharedScope().STATE_SHARED_KEY_MAP.get(state) || 0;
  }
  function getBoundStateInfo(extraState) {
    let boundInfo = { state: {}, stateRoot: {}, isAtom: false };
    if (!extraState) {
      return boundInfo;
    }
    const extraInternal = getInternal(extraState);
    if (extraInternal) {
      const { sharedState: state, sharedRoot: stateRoot } = extraInternal;
      boundInfo = { state, stateRoot, isAtom: extraInternal.forAtom };
    }
    return boundInfo;
  }
  function markSharedKey(state) {
    const scope = getSharedScope();
    const { STATE_SHARED_KEY_MAP } = scope;
    const keySeed = $$2(scope.keySeed);
    STATE_SHARED_KEY_MAP.set(state, keySeed);
    scope.keySeed = keySeed;
    return keySeed;
  }
  function mapSharedState(sharedKey, sharedRoot) {
    const { SHARED_KEY_STATE_MAP, STATE_SHARED_KEY_MAP } = getSharedScope();
    SHARED_KEY_STATE_MAP.set(sharedKey, sharedRoot);
    STATE_SHARED_KEY_MAP.set(sharedRoot, sharedKey);
  }
  function getSharedState(sharedKey) {
    return getSharedScope().SHARED_KEY_STATE_MAP.get(sharedKey);
  }
  function recordMod(sharedState, options) {
    if (RUN_AT_SERVER) {
      return;
    }
    const { rootState, ctx: ctx2 } = getRoot();
    const { moduleName, usefulName } = options;
    const existedShared = rootState[usefulName];
    const existedInternal = getInternal(existedShared);
    if (moduleName && existedInternal && existedInternal.loc !== options.loc) {
      if (!moduleName.endsWith("@Loading")) {
        const locInfo = `
loc1:${existedInternal.loc} 
loc2:${options.loc}`;
        x$1(
          `only-dev-mode tip: moduleName ${moduleName} duplicate! this does not effect helux but the duplicated module will be ignored by devtool` + locInfo
        );
      }
      return;
    }
    rootState[usefulName] = sharedState;
    ctx2.modMap.set(usefulName, getInternal(sharedState));
  }
  var fakeInternal = { innerSetState: f$2 };
  function buildInternal(parsedOptions, innerOptions) {
    const { rawState, forAtom, before } = parsedOptions;
    const insCtxMap = /* @__PURE__ */ new Map();
    const key2InsKeys = {};
    const id2InsKeys = {};
    const level1ArrKeys = [];
    const copy = { ...rawState };
    let rawStateVal = copy;
    if (forAtom) {
      rawStateVal = rawState.val;
    }
    const hasBeforeCommit = before !== f$2;
    return {
      ver: 0,
      sn: 0,
      insCount: 0,
      // reactive and reactiveRoot will be replaced in buildReactive process later
      reactive: rawState,
      reactiveRoot: rawState,
      // sync and syncer will be replaced after buildInternal
      sync: f$2,
      syncer: f$2,
      // snap and prevSnap will be replaced after changing state
      // 这里 copy 两份不同的，避免 commitState 阶段这段逻辑（需要判断 ver 是不是 0，是 0 时 做一次 prevSnap 的替换）
      // 否则 snap 和 prevSnap 是一样的，导致首次运行时的值比较是失败的
      snap: copy,
      prevSnap: copy,
      // TODO 接入 limu copy 函数，这个值目前内部用不到
      // 本意是给 reactive 模块生成 draft 时，代理 rawStateVal 之用，这样控制台展开代理后可看到最新的状态，
      // 且 chrome 浏览器没无 .val 封装的对象，避免作者误会拆封后的 reactive 对象为何还有一层 .val
      // 这个优化做和不做都对逻辑正确性无影响
      rawStateVal,
      ...parsedOptions,
      ...innerOptions,
      insCtxMap,
      key2InsKeys,
      id2InsKeys,
      lifecycle: {
        willMount: f$2,
        mounted: f$2,
        willUnmount: f$2,
        // 5.0 之后，将之前的 before 迁移到 lifecycle 里，同时用户透传的 lifecycle.beforeCommit 也会合并到此处
        beforeCommit: before,
        afterCommit: f$2,
        /** 严格模式下，在 effect 里判断 insCount=1 是失败的，需提前标记此变量，确保 mounted 触发 */
        shouldCallMounted: false,
        // 优化 beforeCommit 执行效率
        hasBeforeCommit
      },
      recordId(id, insKey) {
        if (!id) return;
        const insKeys = k$1(id2InsKeys, id, []);
        n$2(insKeys, insKey);
      },
      delId(id, insKey) {
        if (!id) return;
        t$1(id2InsKeys[id] || [], insKey);
      },
      recordDep(depKey, insKey) {
        const insKeys = k$1(key2InsKeys, depKey, []);
        n$2(insKeys, insKey);
      },
      delDep(depKey, insKey) {
        t$1(key2InsKeys[depKey] || [], insKey);
      },
      mapInsCtx(insCtx, insKey) {
        insCtxMap.set(insKey, insCtx);
      },
      delInsCtx(insKey) {
        insCtxMap.delete(insKey);
      },
      extra: {},
      // 记录一些需复用的中间生成的数据
      loadingInternal: fakeInternal,
      level1ArrKeys
    };
  }
  var fnKeyPrefix = {
    Mutate: "",
    Reactive: "r",
    [SCOPE_TYPE.STATIC]: "s",
    [SCOPE_TYPE.HOOK]: "h"
  };
  function genInsKey() {
    const insScope = getInsScope();
    const nextKey = $$2(insScope.keySeed);
    insScope.keySeed = nextKey;
    return nextKey;
  }
  function genBlockKey() {
    const blockScope = getBlockScope();
    const { keySeed, keyPrefix } = blockScope;
    const nextKey = $$2(keySeed);
    blockScope.keySeed = nextKey;
    let prefix = keyPrefix;
    if (h$1(keySeed)) {
      prefix = $$2(keyPrefix);
      blockScope.keyPrefix = prefix;
    }
    return `${prefix}_${nextKey}`;
  }
  function genRenderSN() {
    const ctx2 = getRootCtx();
    const renderSN = ctx2.renderSN;
    const nextNo = renderSN === Number.MAX_VALUE ? 1 : renderSN + 1;
    ctx2.renderSN = nextNo;
    return nextNo;
  }
  function genFnKey(keyType) {
    const prefix = fnKeyPrefix[keyType];
    const fnScope = getFnScope();
    const keyMap = fnScope.keySeed;
    const keySeed = $$2(keyMap[keyType]);
    keyMap[keyType] = keySeed;
    return `${prefix}${keySeed}`;
  }
  function getReactiveKey() {
    return genFnKey("Reactive");
  }
  var { MAY_TRANSFER } = ASYNC_TYPE;
  var { SET_STATE, REACTIVE } = FROM;
  var fakeGetReplaced = () => ({ isReplaced: false, replacedValue: null });
  var noopAny = () => {
  };
  var fnItem = newMutateFnItem({ isFake: true });
  function newReactiveMeta(draft, buildOptions, finish = f$2) {
    const { desc = "", onRead, from = REACTIVE, depKeys = [], isTop = false, expired = false, insKey = 0, payloadArgs } = buildOptions;
    return {
      draft,
      finish,
      modified: false,
      expired,
      sharedKey: 0,
      moduleName: "",
      hasFlushTask: false,
      nextTickFlush: f$2,
      data: [],
      isTop,
      key: "",
      fnKey: "",
      depKeys,
      writeKeys: [],
      desc,
      onRead,
      from,
      insKey,
      payloadArgs
    };
  }
  function newMutateCtx(options) {
    const {
      ids = [],
      globalIds = [],
      isReactive = false,
      from = SET_STATE,
      enableDep = false,
      handleCbReturn = true,
      sn = genRenderSN(),
      isFirstCall = false,
      desc = ""
    } = options;
    return {
      fnKey: "",
      depKeys: [],
      forcedDepKeys: [],
      triggerReasons: [],
      ids,
      globalIds,
      readKeys: {},
      writeKeys: {},
      arrKeyDict: {},
      // 记录读取过程中遇到的数组 key
      writeKeyPathInfo: {},
      handleCbReturn,
      draftVal: null,
      from,
      isReactive,
      enableDep,
      sn,
      isFirstCall,
      desc,
      payloadArgs: void 0
    };
  }
  function newOpParams(key, value, options) {
    const { isChanged = true, parentKeyPath = [], op = "set", parentType = "Object" } = options;
    const fullKeyPath = parentKeyPath.slice();
    fullKeyPath.push(key);
    return {
      isChanged,
      isCustom: false,
      op,
      immutBase: false,
      key,
      value,
      proxyValue: value,
      parentType,
      keyPath: parentKeyPath,
      fullKeyPath,
      isBuiltInFnKey: false,
      replaceValue: f$2,
      getReplaced: fakeGetReplaced
    };
  }
  function newMutateFnItem(partial) {
    const {
      desc = "",
      fn = f$2,
      task = noopAny,
      depKeys = [],
      writeKeys = [],
      deps = a$3,
      isFake = false,
      onlyDeps = false,
      ...rest
    } = partial || {};
    const base = {
      fn,
      task,
      deps,
      oriDesc: "",
      onlyDeps,
      desc,
      depKeys,
      writeKeys,
      checkDeadCycle: void 0,
      watchKey: "",
      isFake,
      enabled: true,
      extraBound: { state: {}, stateRoot: {}, isAtom: false },
      ...rest
    };
    return base;
  }
  function newFnCtx() {
    const base = {
      fnKey: "",
      // 在 fnDep.mapFn 阶段会生成
      fn: f$2,
      subFnInfo: fnItem,
      checkDeadCycle: true,
      isFirstLevel: true,
      isExpired: false,
      task: f$2,
      deps: a$3,
      status: { loading: false, err: null, ok: true },
      stateRoot: {},
      isStateAtom: false,
      forAtom: false,
      remainRunCount: 0,
      showLoading: false,
      nextLevelFnKeys: [],
      prevLevelFnKeys: [],
      mountStatus: NOT_MOUNT,
      depKeys: [],
      depSharedKeys: [],
      result: {},
      fnType: "watch",
      returnUpstreamResult: false,
      scopeType: "static",
      renderStatus: RENDER_START,
      proxyResult: {},
      updater: f$2,
      createTime: Date.now(),
      shouldReplaceResult: false,
      isAsync: false,
      isAsyncTransfer: false,
      forBlock: false,
      isRunning: false,
      dcErrorInfo: { err: null, tipFn: f$2 },
      asyncType: MAY_TRANSFER,
      subscribe: (cb) => {
        cb();
      },
      extra: {},
      setLoading: (loading, err = null) => {
        const ok = !loading && !err;
        base.status = { loading, err, ok };
      },
      renderInfo: {
        time: 0,
        insKey: 0,
        sn: 0,
        getDeps: () => base.depKeys.slice()
      }
    };
    return base;
  }
  var fakeDraftRootMeta = { draftRoot: { val: null }, isFake: true, isAtom: true };
  newMutateCtx({});
  var fakeReativeMeta = newReactiveMeta(true, { expired: true, from: "Reactive", desc: "" });
  newMutateFnItem();
  var fakeInternal2 = buildInternal({ rawState: {}, forAtom: false, usefulName: "" }, {});
  var fakeFnCtx = newFnCtx();
  function setProtoOf(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
  function mixinProperties(obj, proto) {
    for (var prop in proto) {
      if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
        obj[prop] = proto[prop];
      }
    }
    return obj;
  }
  var setProto = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
  function createHeluxObj(rawObj) {
    const obj = /* @__PURE__ */ Object.create(null);
    setProto(obj, { ...Object.prototype });
    return obj;
  }
  function injectHeluxProto(rawObj) {
    if (w$2(rawObj)) {
      return;
    }
    const pureObj = /* @__PURE__ */ Object.create(null);
    setProto(pureObj, Object.prototype);
    setProto(rawObj, pureObj);
    return rawObj;
  }
  function dset(target, key, val) {
    target[key] = val;
    return true;
  }
  function dget(target, key) {
    return target[key];
  }
  function createDpOb(rawObj, options) {
    const { set = dset, get: get2 = dget, obj = {} } = options || {};
    Object.keys(rawObj).forEach((key) => {
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: false,
        set: function(val) {
          return set(rawObj, key, val);
        },
        get: function() {
          return get2(rawObj, key);
        }
      });
    });
    return obj;
  }
  function createOb(rawObj, options) {
    const { set = dset, get: get2 = dget } = options || {};
    if (O$2()) {
      return new Proxy(rawObj, {
        set(target, key, val) {
          return set(target, key, val);
        },
        get(target, key) {
          return get2(target, key);
        }
      });
    }
    const downgradeObj = createHeluxObj();
    const oneLevelOb = createDpOb(downgradeObj, { obj: downgradeObj, set, get: get2 });
    return oneLevelOb;
  }
  var CURRENT_DRAFT_ROOT_META = fakeDraftRootMeta;
  var CURRENT_CB_REACTIVE_KEY = "";
  var CURRENT_INS_CTX = /* @__PURE__ */ new Map();
  var CURRENT_REACTIVE_DESC = /* @__PURE__ */ new Map();
  var CURRENT_REACTIVE_META = /* @__PURE__ */ new Map();
  var CURRENT_DEPS_CB = f$2;
  var CURRENT_FN_DEPS = [];
  var CURRENT_TRIGGERED_WATCH = "";
  function currentDraftRoot() {
    return CURRENT_DRAFT_ROOT_META;
  }
  var TRIGGERED_WATCH = {
    current: () => CURRENT_TRIGGERED_WATCH,
    set: (val) => CURRENT_TRIGGERED_WATCH = val,
    del: () => CURRENT_TRIGGERED_WATCH = ""
  };
  var DEPS_CB = {
    current: () => CURRENT_DEPS_CB,
    set: (cb) => CURRENT_DEPS_CB = cb,
    del: () => CURRENT_DEPS_CB = f$2
  };
  var REACTIVE_DESC = {
    current: (key) => CURRENT_REACTIVE_DESC.get(key) || "SetState",
    /** 用一次就清理, 无默认值返回 */
    currentOnce: (key) => {
      const desc = CURRENT_REACTIVE_DESC.get(key);
      CURRENT_REACTIVE_DESC.delete(key);
      return desc;
    },
    set: (key, desc) => CURRENT_REACTIVE_DESC.set(key, desc),
    del: (key) => CURRENT_REACTIVE_DESC.delete(key)
  };
  var FN_DEP_KEYS = {
    current: () => CURRENT_FN_DEPS,
    set: (val) => CURRENT_FN_DEPS = val,
    del: () => CURRENT_FN_DEPS = []
  };
  var REACTIVE_META = {
    delActive: () => CURRENT_CB_REACTIVE_KEY = "",
    current: () => CURRENT_REACTIVE_META.get(CURRENT_CB_REACTIVE_KEY) || fakeReativeMeta,
    markUsing: (key) => CURRENT_CB_REACTIVE_KEY = key,
    set: (key, obj) => CURRENT_REACTIVE_META.set(key, obj),
    del: (key) => CURRENT_REACTIVE_META.delete(key)
  };
  var INS_CTX = {
    current: (rootVal) => CURRENT_INS_CTX.get(rootVal),
    set: (rootVal, insCtx) => CURRENT_INS_CTX.set(rootVal, insCtx),
    del: (rootVal) => CURRENT_INS_CTX.delete(rootVal)
  };
  var DRAFT_ROOT = {
    /** may use ' get current(){}...' in the future */
    current: () => CURRENT_DRAFT_ROOT_META,
    set: (draftRoot, isAtom2) => {
      Object.assign(CURRENT_DRAFT_ROOT_META, { draftRoot, isAtom: isAtom2, isFake: false });
    },
    del: () => CURRENT_DRAFT_ROOT_META = fakeDraftRootMeta
  };
  function getCtxMap(scopeKeyOrFnKey) {
    const { FNKEY_STATIC_CTX_MAP, FNKEY_HOOK_CTX_MAP } = getFnScope();
    const map = scopeKeyOrFnKey[0] === "s" ? FNKEY_STATIC_CTX_MAP : FNKEY_HOOK_CTX_MAP;
    return map;
  }
  function putComputingFnKey(depKey, fnKey) {
    const { DEPKEY_COMPUTING_FNKEYS_MAP } = getFnScope();
    const fnKeys = R$1(DEPKEY_COMPUTING_FNKEYS_MAP, depKey, []);
    fnKeys.push(fnKey);
  }
  function delComputingFnKey(depKey, fnKey) {
    const { DEPKEY_COMPUTING_FNKEYS_MAP } = getFnScope();
    const fnKeys = DEPKEY_COMPUTING_FNKEYS_MAP.get(depKey);
    if (fnKeys) {
      t$1(fnKeys, fnKey);
    }
  }
  function delFnDepData(fnCtx) {
    const { DEPKEY_FNKEYS_MAP, SKEY_FNKEYS_MAP } = getFnScope();
    const { depKeys, fnKey, depSharedKeys } = fnCtx;
    const toDel = [];
    depKeys.forEach((key) => {
      const fnKeys = DEPKEY_FNKEYS_MAP.get(key) || [];
      t$1(fnKeys, fnKey);
      n$2(toDel, fnKey);
    });
    depSharedKeys.forEach((key) => {
      const fnKeysOfSkey = SKEY_FNKEYS_MAP.get(String(key)) || [];
      toDel.forEach((key2) => {
        t$1(fnKeysOfSkey, key2);
      });
    });
  }
  function opUpstreamFnKey(fnCtx, isAdd) {
    const { FNKEY_STATIC_CTX_MAP } = getFnScope();
    const { fnKey, prevLevelFnKeys } = fnCtx;
    prevLevelFnKeys.forEach((upFnKey) => {
      var _a;
      const next = (_a = FNKEY_STATIC_CTX_MAP.get(upFnKey)) == null ? void 0 : _a.nextLevelFnKeys;
      if (next) {
        isAdd ? n$2(next, fnKey) : t$1(next, fnKey);
      }
    });
  }
  function ensureHMRRunWell() {
    if (g$1()) {
      REACTIVE_META.delActive();
      const { FNKEY_HOOK_CTX_MAP } = getFnScope();
      FNKEY_HOOK_CTX_MAP.forEach((item) => {
        item.isExpired = true;
      });
    }
  }
  function markFnKey(fnOrObj, scopeType, fnKey) {
    const fnKeyStr = fnKey || genFnKey(scopeType);
    if (w$2(fnOrObj)) {
      fnOrObj[FN_KEY] = fnKeyStr;
    } else {
      injectHeluxProto(fnOrObj);
      fnOrObj.__proto__[FN_KEY] = fnKeyStr;
    }
    return fnKeyStr;
  }
  function getFnKey(fnOrObj) {
    if (w$2(fnOrObj)) {
      return fnOrObj[FN_KEY] || "";
    }
    if (E$2(fnOrObj)) {
      return fnOrObj.__proto__[FN_KEY] || "";
    }
    return "";
  }
  function getFnCtx(fnKey) {
    const map = getCtxMap(fnKey);
    return map.get(fnKey);
  }
  function getSafeFnCtx(fnKey) {
    return getCtxMap(fnKey).get(fnKey) || fakeFnCtx;
  }
  function getFnCtxByObj(obj) {
    const fnKey = getFnKey(obj);
    return getFnCtx(fnKey) || null;
  }
  function getRunningFn() {
    const { runningFnKey, depKeys, fixedDepKeys, runningSharedKey, isIgnore, delPathAoa } = getFnScope();
    const fnCtx = !runningFnKey ? null : getFnCtx(runningFnKey);
    return { fnCtx, depKeys, fixedDepKeys, delPathAoa, isIgnore, runningSharedKey };
  }
  function hasRunningFn() {
    return getFnScope().runningFnKey;
  }
  var { ON_DATA_CHANGED, ON_SHARE_CREATED, ON_ERROR_OCCURED } = EVENT_NAME;
  var loadingTypes = [STATE_TYPE.GLOGAL_LOADING, STATE_TYPE.PRIVATE_LOADING];
  function addPlugin(plugin) {
    const { plugins, bus } = getRootCtx();
    plugins.push(plugin);
    const pluginCtx = {
      on: (evName, cb) => bus.on(evName, cb),
      onStateChanged: (cb) => bus.on(ON_DATA_CHANGED, cb)
    };
    plugin.install(pluginCtx);
  }
  function emitDataChanged(internal, mutateCtx) {
    const { bus } = getRootCtx();
    if (bus.canEmit(ON_DATA_CHANGED)) {
      const { from, desc, payloadArgs } = mutateCtx;
      const { forAtom, sharedKey, moduleName, snap, usefulName, stateType } = internal;
      let type;
      if (loadingTypes.includes(stateType)) {
        type = `${usefulName}/setState`;
      } else {
        type = `${usefulName}@${from || "Api"}/${desc}`;
      }
      bus.emit(ON_DATA_CHANGED, { forAtom, snap, sharedKey, moduleName, usefulName, type, payloadArgs });
    }
  }
  function emitShareCreated(internal) {
    const { bus } = getRootCtx();
    if (bus.canEmit(ON_SHARE_CREATED)) {
      const { forAtom, snap, sharedKey, moduleName, usefulName } = internal;
      const type = `${usefulName}@FactoryApi/createShared`;
      bus.emit(ON_SHARE_CREATED, { forAtom, snap, sharedKey, moduleName, usefulName, type });
    }
  }
  function emitPluginEvent(internal, evName, data) {
    const { bus } = getRootCtx();
    if (!bus.canEmit(evName)) {
      return false;
    }
    const { sharedKey, moduleName } = internal;
    bus.emit(evName, { moduleName, sharedKey, data });
    return true;
  }
  function emitErr(internal, err) {
    if (!emitPluginEvent(internal, ON_ERROR_OCCURED, { err })) {
      console.warn("found uncaught error, sugguest add a plugin to handle this error");
      console.error(err);
    }
  }
  function fmtDepKeys(depKeys, prefixModuleName = true, spliter = KEY_SPLITER) {
    return depKeys.map((key) => {
      const [skey, restStr] = key.split("/");
      const keys = restStr.split(KEY_SPLITER);
      const prefix = prefixModuleName ? `${getInternalByKey(Number(skey)).usefulName}/` : "";
      return `${prefix}${keys.join(spliter)}`;
    });
  }
  var logMap = /* @__PURE__ */ new Map();
  var cbTypes = {
    WATCH: "1",
    MUTATE: "2"
  };
  var cbTips = {
    [cbTypes.WATCH]: "watch",
    [cbTypes.MUTATE]: "mutate fn or task"
  };
  function newLog(sn = 0) {
    return { sn, descs: [], errs: [], timer: null, cycle: [] };
  }
  function dcErr(usefulName, descs, runDesc) {
    const err = new Error(`DEAD_CYCLE: module(${usefulName}) found mutate fn(${runDesc}) in these dead cycle fns [${descs.join(",")}]`);
    err.cause = "DeadCycle";
    err.data = descs;
    return err;
  }
  function clearDcLog(usefulName) {
    logMap.delete(usefulName);
  }
  function depKeyDcError(internal, fnCtx, depKeys, cbType) {
    const tip = cbTips[cbType];
    const { desc, task, fn, isFake } = fnCtx.subFnInfo;
    const descStr = desc ? `(${desc})` : "";
    const dcInfo = `DEAD_CYCLE: found reactive object in ${tip}${descStr} cb is changing module(${internal.usefulName})'s some of these dep keys(${fmtDepKeys(depKeys, false, ".")}), it will cause a infinity loop call!`;
    const targetFn = isFake ? fnCtx.fn : task || fn;
    return {
      err: new Error(`[only-dev-mode alert] ${dcInfo}`),
      tipFn: () => console.error(` ${dcInfo} open the stack to find the below fn: 
`, targetFn)
    };
  }
  function probeFnDeadCycle(internal, sn, desc) {
    if (internal && desc) {
      const { usefulName } = internal;
      const log = R$1(logMap, usefulName, newLog(sn));
      if (log.sn !== sn) {
        log.descs = [];
        log.errs = [];
      }
      const { descs } = log;
      if (descs.length > 1 && descs[0] === desc) {
        const listCopy = descs.slice();
        log.cycle = listCopy;
        descs.length = 0;
        throw dcErr(usefulName, listCopy, desc);
      }
      n$2(descs, desc);
    }
  }
  function alertDepKeyDeadCycleErr(internal, dcErrorInfo) {
    dcErrorInfo.tipFn();
    S$2(dcErrorInfo.err, {
      logErr: false,
      throwErr: false,
      alertErr: internal.alertDeadCycleErr
    });
  }
  function probeDepKeyDeadCycle(internal, fnCtx, changedDepKeys) {
    const { depKeys, subFnInfo } = fnCtx;
    let shortArr = fnCtx.depKeys;
    let longArr = changedDepKeys;
    if (depKeys.length > changedDepKeys.length) {
      shortArr = changedDepKeys;
      longArr = depKeys;
    }
    let foundDc = false;
    if (e$1(shortArr, longArr)) {
      const cbType = subFnInfo.desc ? cbTypes.MUTATE : cbTypes.WATCH;
      const dcErrorInfo = depKeyDcError(internal, fnCtx, changedDepKeys, cbType);
      alertDepKeyDeadCycleErr(internal, dcErrorInfo);
      fnCtx.dcErrorInfo = dcErrorInfo;
      foundDc = true;
    }
    return foundDc;
  }
  function inDeadCycle(usefulName, desc) {
    const log = logMap.get(usefulName);
    if (!log || !log.cycle.includes(desc)) {
      return { isIn: false, cycle: [] };
    }
    return { isIn: true, cycle: log.cycle };
  }
  function analyzeErrLog(usefulName, err, alertErr = true) {
    const log = logMap.get(usefulName);
    if (!log) return;
    const { timer, errs } = log;
    errs.push(err);
    timer && clearTimeout(timer);
    log.timer = setTimeout(() => {
      let targetErr = null;
      for (const err2 of errs) {
        if (!targetErr) {
          targetErr = err2;
        } else if (err2.data.length > targetErr.data.length) {
          targetErr = err2;
        }
      }
      if (targetErr) {
        S$2(targetErr, { alertErr });
      }
      errs.length = 0;
    }, 0);
  }
  var { REACTIVE: REACTIVE2 } = FROM;
  var metas = /* @__PURE__ */ new Map();
  function canFlush(meta) {
    return !!(meta && !meta.expired && meta.modified);
  }
  function flushModified(meta, desc) {
    const { key, from } = meta;
    meta.expired = true;
    REACTIVE_META.del(key);
    return meta.finish(null, { from, desc: desc || meta.desc, payloadArgs: meta.payloadArgs });
  }
  function reactiveDesc(sharedState, desc) {
    const sharedKey = getSharedKey(sharedState);
    desc && REACTIVE_DESC.set(sharedKey, desc);
    return sharedKey;
  }
  function flush(sharedState, desc) {
    const sharedKey = getSharedKey(sharedState);
    innerFlush(sharedKey, desc);
  }
  function flushActive() {
    const meta = REACTIVE_META.current();
    if (meta.isTop) {
      innerFlush(meta.sharedKey, meta.desc);
    }
  }
  function innerFlush(sharedKey, desc) {
    const meta = metas.get(sharedKey);
    if (canFlush(meta)) {
      flushModified(meta, desc);
    }
  }
  function markExpired(sharedKey) {
    const meta = metas.get(sharedKey) || fakeReativeMeta;
    meta.expired = true;
  }
  function nextTickFlush(sharedKey) {
    const meta = metas.get(sharedKey) || fakeReativeMeta;
    meta.modified = true;
    meta.nextTickFlush();
  }
  function buildMeta(internal, options) {
    const { from = REACTIVE2 } = options;
    const { finish, draftRoot } = internal.setStateFactory({ isReactive: true, from, handleCbReturn: false, enableDep: true });
    const latestMeta = newReactiveMeta(draftRoot, options, finish);
    const { sharedKey } = internal;
    latestMeta.key = getReactiveKey();
    latestMeta.sharedKey = sharedKey;
    latestMeta.nextTickFlush = () => {
      const { hasFlushTask } = latestMeta;
      if (!hasFlushTask) {
        latestMeta.hasFlushTask = true;
        Promise.resolve().then(() => {
          const desc = REACTIVE_DESC.currentOnce(sharedKey);
          innerFlush(sharedKey, desc);
        });
      }
    };
    return latestMeta;
  }
  function getReactiveInfo(internal, options, forAtom) {
    const { sharedKey } = internal;
    const { insKey = 0, from, desc, payloadArgs } = options;
    let meta = metas.get(sharedKey) || fakeReativeMeta;
    if (meta.expired) {
      meta = buildMeta(internal, { isTop: true, from, desc, payloadArgs });
      metas.set(sharedKey, meta);
      REACTIVE_META.set(meta.key, meta);
      meta.fnKey = TRIGGERED_WATCH.current();
    } else {
      meta.from = from;
      meta.desc = desc;
      meta.payloadArgs = payloadArgs;
    }
    REACTIVE_META.markUsing(meta.key);
    meta.onRead = insKey ? options.onRead : void 0;
    meta.insKey = insKey;
    const { draft } = meta;
    return { val: forAtom ? draft.val : draft, meta };
  }
  function buildReactive(internal, options) {
    let draftRoot = {};
    let draft = {};
    const { rawState, deep, forAtom, isPrimitive: isPrimitive2, sharedKey } = internal;
    if (G$1(deep)) {
      const innerData = {
        [SHARED_KEY]: sharedKey,
        [IS_ATOM]: forAtom
      };
      const set = (forAtom2, key, value) => {
        const { val } = getReactiveInfo(internal, options, forAtom2);
        val[key] = value;
        return true;
      };
      const get2 = (forAtom2, key, innerData2) => {
        const innerVal = innerData2[key];
        if (innerVal !== void 0) {
          return innerVal;
        }
        const { val, meta } = getReactiveInfo(internal, options, forAtom2);
        if (REACTIVE_META_KEY === key) {
          return meta;
        }
        return val[key];
      };
      draftRoot = new Proxy(rawState, {
        set: (t2, key, value) => set(false, key, value),
        get: (t2, key) => get2(false, key, innerData)
      });
      draft = draftRoot;
      if (forAtom) {
        const subInnerData = { ...innerData, [IS_ATOM]: false };
        draft = isPrimitive2 ? rawState.val : new Proxy(rawState.val, {
          set: (t2, key, value) => set(true, key, value),
          get: (t2, key) => get2(true, key, subInnerData)
        });
      }
    } else {
      draftRoot = rawState;
      draft = rawState.val;
    }
    return { draftRoot, draft };
  }
  var { USER_STATE } = STATE_TYPE;
  function tryGetLoc(moduleName, endCutIdx = 8) {
    let loc = "";
    if (g$1() && moduleName) {
      try {
        throw new Error("loc");
      } catch (err) {
        const arr = err.stack.split("\n");
        const item1 = arr[1] || "";
        if (item1.includes("webpack-internal") || item1.includes("/node_modules/")) {
          loc = arr.slice(0, 16).join(" -> ");
        } else {
          const pureArr = arr.map((codeLoc) => {
            return codeLoc.substring(0, codeLoc.indexOf("(")).trim();
          });
          loc = pureArr.slice(4, endCutIdx).join(" -> ");
        }
      }
    }
    return loc;
  }
  function getDepKeyInfo(depKey) {
    const [sharedKey, rest] = depKey.split("/");
    const keyPath = rest.split(KEY_SPLITER);
    return { sharedKey: Number(sharedKey), keyPath, depKey };
  }
  function getRootValDepKeyInfo(internal) {
    const { sharedKey, forAtom } = internal;
    const suffix = forAtom ? "/val" : "";
    const keyPath = forAtom ? ["val"] : [];
    return { depKey: `${sharedKey}${suffix}`, keyPath, sharedKey };
  }
  function getDepKeyByPath(fullKeyPath, sharedKey) {
    try {
      return B$1(fullKeyPath.join(KEY_SPLITER), sharedKey);
    } catch (err) {
      console.warn("found Symbol key in your path :", fullKeyPath);
      return `${sharedKey}`;
    }
  }
  function isValChanged(internal, depKey) {
    const { snap, prevSnap, stateType } = internal;
    if (USER_STATE !== stateType) {
      return true;
    }
    const { keyPath } = getDepKeyInfo(depKey);
    try {
      const currVal = M$1(snap, keyPath);
      const prevVal = M$1(prevSnap, keyPath);
      return currVal !== prevVal;
    } catch (err) {
      return true;
    }
  }
  function createImmut(obj, onOperate) {
    if (O$2()) {
      return immut(obj, { onOperate, compareVer: true });
    }
    return createOb(obj, {
      get(target, key) {
        const val = target[key];
        const op = newOpParams(key, val, { isChanged: false, parentKeyPath: [] });
        onOperate(op);
        return val;
      }
    });
  }
  function wrapPartial(forAtom, val) {
    if (val === void 0) return;
    if (forAtom) return { val };
    if (E$2(val)) return val;
  }
  function runPartialCb(forAtom, mayCb, draft) {
    const val = !w$2(mayCb) ? mayCb : mayCb(draft);
    return wrapPartial(forAtom, val);
  }
  function callOnRead(opParams, onRead) {
    let { value } = opParams;
    if (onRead) {
      onRead(opParams);
      const { replacedValue, isReplaced } = opParams.getReplaced();
      if (isReplaced) {
        value = replacedValue;
      }
    }
    return value;
  }
  function isArrLike(parentType) {
    return [ARR, MAP].includes(parentType);
  }
  function isArrLikeVal(val) {
    return Array.isArray(val) || d$2(val);
  }
  var { isObject: isDict, getDataType } = limuUtils;
  function ensureBool(mayBool, defaultBool) {
    return typeof mayBool === "boolean" ? mayBool : defaultBool;
  }
  function diffVal(internal, depKey) {
    const scope = getSharedScope();
    const { COMPARE_MAP } = scope;
    let result = COMPARE_MAP.get(depKey);
    if (result !== void 0) {
      return result;
    }
    if (internal.sharedKeyStr === depKey) {
      return scope.isStateChanged;
    }
    result = isValChanged(internal, depKey);
    COMPARE_MAP.set(depKey, result);
    if (result) {
      scope.isStateChanged = true;
    }
    return result;
  }
  function hasChangedNode(internal, depKeys, depKey) {
    if (depKeys.includes(depKey) && diffVal(internal, depKey)) {
      return true;
    }
    let subValChanged = false;
    for (const storedDepKey of depKeys) {
      if (storedDepKey.startsWith(depKey) && diffVal(internal, storedDepKey)) {
        subValChanged = true;
      }
    }
    return subValChanged;
  }
  function clearDiff() {
    const scope = getSharedScope();
    scope.COMPARE_MAP.clear();
    scope.isStateChanged = false;
  }
  function markIgnore(isIgnore = true) {
    const fnScope = getFnScope();
    fnScope.isIgnore = isIgnore;
  }
  function recordFnDepKeys(inputDepKeys, options) {
    const { fnCtx: runningFnCtx, depKeys, fixedDepKeys, isIgnore } = getRunningFn();
    const fnCtx = options.specificCtx || runningFnCtx;
    if (!fnCtx) {
      DEPS_CB.current()(inputDepKeys);
      return;
    }
    const { fnKey, scopeType } = fnCtx;
    if (RUN_AT_SERVER && scopeType === "hook") {
      return;
    }
    const { DEPKEY_FNKEYS_MAP, SKEY_FNKEYS_MAP } = getFnScope();
    const { belongCtx, sharedKey, kv = {} } = options;
    if (sharedKey) {
      n$2(fnCtx.depSharedKeys, sharedKey);
    }
    if (runningFnCtx && belongCtx) {
      runningFnCtx.isFirstLevel = false;
      if (belongCtx.isAsync) {
        runningFnCtx.isAsync = true;
      }
      const fnKey2 = belongCtx.fnKey;
      n$2(fnCtx.prevLevelFnKeys, fnKey2);
      n$2(belongCtx.nextLevelFnKeys, runningFnCtx.fnKey);
    }
    inputDepKeys.forEach((depKey) => {
      if (PROTO_KEY === depKey || isIgnore) {
        return;
      }
      if (runningFnCtx) {
        n$2(depKeys, depKey);
        if (runningFnCtx.forBlock) {
          const val = kv[depKey];
          if (Array.isArray(val)) {
            n$2(fixedDepKeys, depKey);
          }
        }
      }
      const fnKeys = R$1(DEPKEY_FNKEYS_MAP, depKey, []);
      n$2(fnKeys, fnKey);
      const [sKey] = depKey.split("/");
      const fnKeysOfSkey = R$1(SKEY_FNKEYS_MAP, sKey, []);
      n$2(fnKeysOfSkey, fnKey);
    });
  }
  function ensureFnDepData(fnCtx) {
    if (fnCtx) {
      fnCtx.depKeys.forEach((depKey) => recordFnDepKeys([depKey], { specificCtx: fnCtx }));
    }
  }
  function recoverDep(fnCtx) {
    const { FNKEY_HOOK_CTX_MAP, UNMOUNT_INFO_MAP } = getFnScope();
    if (RUN_AT_SERVER) return;
    const { fnKey } = fnCtx;
    FNKEY_HOOK_CTX_MAP.set(fnKey, fnCtx);
    opUpstreamFnKey(fnCtx, true);
    let info = UNMOUNT_INFO_MAP.get(fnKey);
    if (info) {
      info.c = 2;
    } else {
      info = { c: 1, t: Date.now(), prev: 0 };
      UNMOUNT_INFO_MAP.set(fnKey, info);
    }
    const { c: mountCount } = info;
    if (mountCount === 2) {
      const fnCtx2 = getFnCtx(fnKey);
      ensureFnDepData(fnCtx2);
    }
  }
  function getDepSharedStateFeature(fn) {
    let feature = "";
    fn.depSharedKeys.forEach((key) => {
      var _a;
      const ver = ((_a = getInternalByKey(key)) == null ? void 0 : _a.ver) || 0;
      feature += `${ver}_`;
    });
    return feature;
  }
  function getDepFnStats(internal, depKey, runCountStats, isSharedKey = false) {
    const { DEPKEY_FNKEYS_MAP, SKEY_FNKEYS_MAP } = getFnScope();
    const map = isSharedKey ? SKEY_FNKEYS_MAP : DEPKEY_FNKEYS_MAP;
    const fnKeys = map.get(depKey) || [];
    const firstLevelFnKeys = [];
    const asyncFnKeys = [];
    fnKeys.forEach((fnKey) => {
      const fnCtx = getFnCtx(fnKey);
      if (!fnCtx) return;
      if (hasChangedNode(internal, fnCtx.depKeys, depKey)) {
        if (fnCtx.isFirstLevel) {
          firstLevelFnKeys.push(fnKey);
        }
        if (fnCtx.isAsync && fnCtx.fnType === DERIVE) {
          asyncFnKeys.push(fnKey);
        }
        const count = runCountStats[fnKey];
        if (count === void 0) {
          runCountStats[fnKey] = 1;
        } else if (!isSharedKey) {
          runCountStats[fnKey] = count + 1;
        }
      }
    });
    return { firstLevelFnKeys, asyncFnKeys };
  }
  function delFnDep(fnCtx) {
    delFnDepData(fnCtx);
    opUpstreamFnKey(fnCtx);
  }
  function delHistoryUnmoutFnCtx() {
    const { FNKEY_HOOK_CTX_MAP } = getFnScope();
    if (FNKEY_HOOK_CTX_MAP.size >= SIZE_LIMIT) {
      const now = Date.now();
      FNKEY_HOOK_CTX_MAP.forEach((fnCtx) => {
        const { mountStatus, createTime, fnKey } = fnCtx;
        if ([NOT_MOUNT, UNMOUNT].includes(mountStatus) && now - createTime > EXPIRE_MS) {
          delFnDep(fnCtx);
          FNKEY_HOOK_CTX_MAP.delete(fnKey);
        }
      });
    }
  }
  function buildFnCtx(specificProps) {
    const base = newFnCtx();
    return Object.assign(base, specificProps || {});
  }
  function markFnEnd() {
    const fnScope = getFnScope();
    const { runningFnKey } = fnScope;
    if (!runningFnKey) return [];
    const fnCtx = getFnCtx(runningFnKey);
    let targetKeys = [];
    if (fnCtx) {
      const { depKeys: afterRunDepKeys, fixedDepKeys, delPathAoa, runningSharedKey } = fnScope;
      const { depKeys } = fnCtx;
      const dict = {};
      afterRunDepKeys.forEach((k2) => dict[k2] = 1);
      afterRunDepKeys.forEach((depKey) => {
        const matched = D$1(dict, depKey);
        if (matched && matched !== depKey) {
          delete dict[matched];
        }
      });
      fixedDepKeys.forEach((k2) => dict[k2] = 1);
      const validDepKeys = Object.keys(dict);
      validDepKeys.forEach((depKey) => n$2(depKeys, depKey));
      delPathAoa.forEach((pathArr) => {
        const len = pathArr.length;
        for (let i2 = 1; i2 <= len; i2++) {
          const toDel = getDepKeyByPath(pathArr.slice(0, i2), runningSharedKey);
          t$1(depKeys, toDel);
        }
      });
      targetKeys = depKeys.slice();
    }
    fnScope.runningFnKey = "";
    fnScope.depKeys = [];
    fnScope.fixedDepKeys = [];
    fnScope.delPathAoa = [];
    fnScope.runningSharedKey = 0;
    return targetKeys;
  }
  function markFnStart(fnKey, sharedKey) {
    const fnScope = getFnScope();
    fnScope.runningFnKey = fnKey;
    fnScope.runningSharedKey = sharedKey;
    fnScope.isIgnore = false;
  }
  function registerFn(fn, options) {
    const { specificProps, fnCtxBase } = options;
    const { scopeType } = specificProps;
    const fnKey = markFnKey(fn, scopeType);
    const props = { fn, fnKey, ...specificProps };
    const fnCtx = fnCtxBase ? Object.assign(fnCtxBase, props) : buildFnCtx(props);
    if (scopeType === "static" || !RUN_AT_SERVER) {
      getCtxMap(scopeType).set(fnKey, fnCtx);
    }
    return fnCtx;
  }
  function delFnCtx(fnCtx) {
    var _a;
    const { FNKEY_HOOK_CTX_MAP, UNMOUNT_INFO_MAP } = getFnScope();
    const { fnKey } = fnCtx;
    delFnDep(fnCtx);
    fnCtx.extra.deferedWatch = null;
    FNKEY_HOOK_CTX_MAP.delete(fnKey);
    if (((_a = UNMOUNT_INFO_MAP.get(fnKey)) == null ? void 0 : _a.c) === 2) {
      UNMOUNT_INFO_MAP.delete(fnKey);
    }
    delHistoryUnmoutFnCtx();
  }
  function shouldShowComputing(fnCtx) {
    const { DEPKEY_COMPUTING_FNKEYS_MAP } = getFnScope();
    const { prevLevelFnKeys, depKeys } = fnCtx;
    let ret = false;
    for (const depKey of depKeys) {
      const fnKeys = DEPKEY_COMPUTING_FNKEYS_MAP.get(depKey) || [];
      if (e$1(fnKeys, prevLevelFnKeys)) {
        ret = true;
        break;
      }
    }
    return ret;
  }
  function markComputing(fnKey, runCount = 0) {
    const fnCtx = getFnCtx(fnKey);
    if (!fnCtx) return;
    if (fnCtx.showLoading) {
      fnCtx.setLoading(true);
      fnCtx.updater();
    }
    if (runCount) {
      fnCtx.remainRunCount += runCount;
    }
  }
  var { MAY_TRANSFER: MAY_TRANSFER2 } = ASYNC_TYPE;
  function runWatch(fnCtx, options) {
    const { isFirstCall = false, triggerReasons = [], sn = 0, from, internal = fakeInternal2, desc, fromFnKey } = options;
    if (fnCtx.dcErrorInfo.err) {
      alertDepKeyDeadCycleErr(internal, fnCtx.dcErrorInfo);
      return;
    }
    if (fnCtx.fnKey === fromFnKey) {
      probeDepKeyDeadCycle(internal, fnCtx, fnCtx.depKeys);
      return;
    }
    if (fnCtx.forBlock || !fnCtx.checkDeadCycle) {
      return fnCtx.fn({ isFirstCall, triggerReasons, sn });
    }
    if (FROM.MUTATE === from) {
      probeFnDeadCycle(internal, sn, desc);
    }
    if (fnCtx.isRunning && probeDepKeyDeadCycle(internal, fnCtx, options.depKeys || [])) {
      return;
    }
    const rmeta = REACTIVE_META.current();
    if (rmeta.fnKey === fnCtx.fnKey && probeDepKeyDeadCycle(internal, fnCtx, rmeta.writeKeys)) {
      return;
    }
    innerFlush(rmeta.sharedKey, rmeta.desc);
    const isReactiveInCb = fnCtx.isRunning === true && rmeta.isTop;
    if (isReactiveInCb && probeDepKeyDeadCycle(internal, fnCtx, rmeta.writeKeys)) {
      return;
    }
    fnCtx.isRunning = true;
    TRIGGERED_WATCH.set(fnCtx.fnKey);
    const ret = fnCtx.fn({ isFirstCall, triggerReasons, sn });
    TRIGGERED_WATCH.del();
    const afterRunRmeta = REACTIVE_META.current();
    if (afterRunRmeta.isTop && afterRunRmeta.fnKey === fnCtx.fnKey && probeDepKeyDeadCycle(internal, fnCtx, afterRunRmeta.writeKeys)) {
      return;
    }
    if (ret && ret.task) {
      if (afterRunRmeta.from === FROM.MUTATE && probeDepKeyDeadCycle(internal, fnCtx, fnCtx.subFnInfo.writeKeys)) {
        return;
      }
    }
    fnCtx.isRunning = false;
    return ret;
  }
  function runDeps(deps, stateRoot, forAtom) {
    let state = stateRoot.val;
    if (!forAtom) {
      state = stateRoot;
    }
    const input = i$2(deps, { state, stateRoot, isAtom: forAtom });
    return { input, state, stateRoot };
  }
  function runFn(fnKey, options = {}) {
    const {
      isFirstCall = false,
      forceFn = false,
      forceTask = false,
      throwErr = false,
      triggerReasons = [],
      watchFnKeys = [],
      skipWatch = false,
      sn = 0,
      err,
      unbox = false,
      internal = fakeInternal2
    } = options;
    const fnCtx = getFnCtx(fnKey);
    const resultTuple = (err2 = null) => {
      if (err2 && throwErr) throw err2;
      const ctx2 = fnCtx || fakeFnCtx;
      return unbox ? [ctx2.result.val, err2] : [ctx2.result, err2];
    };
    if (!fnCtx) {
      return resultTuple(new Error(`not a valid watch or derive cb for key ${fnKey}`));
    }
    if (fnCtx.fnType === WATCH) {
      if (skipWatch) {
        return n$2(watchFnKeys, fnCtx.fnKey);
      }
      return runWatch(fnCtx, options);
    }
    const { isAsync, fn, task, isAsyncTransfer, forAtom, result, depKeys } = fnCtx;
    if (fnCtx.remainRunCount > 0) {
      fnCtx.remainRunCount -= 1;
    }
    const assignResult = (data) => {
      const dataVar = forAtom ? { val: data } : data;
      if (!fnCtx.returnUpstreamResult && dataVar) {
        Object.assign(fnCtx.result, dataVar);
      }
      fnCtx.shouldReplaceResult = true;
    };
    const triggerUpdate = () => {
      fnCtx.renderInfo.sn = sn;
      fnCtx.updater();
    };
    const updateAndDrillDown = (options2) => {
      const { data, err: err2 = null } = options2;
      if (!err2) {
        assignResult(data);
        if (isFirstCall) {
          if (isAsync && fnCtx.status.loading && !shouldShowComputing(fnCtx)) {
            fnCtx.setLoading(false, err2);
          }
        } else if (fnCtx.remainRunCount === 0) {
          fnCtx.setLoading(false, err2);
        }
      } else {
        fnCtx.setLoading(false, err2);
      }
      triggerUpdate();
      const runOptions = { isFirstCall, sn, triggerReasons, err: err2, watchFnKeys, skipWatch };
      fnCtx.nextLevelFnKeys.forEach((key) => {
        runFn(key, runOptions);
      });
    };
    const prevResult = forAtom ? result : result.val;
    const { deps, isStateAtom } = fnCtx;
    const { input, state, stateRoot } = runDeps(deps, fnCtx.stateRoot, isStateAtom);
    const fnParams = { isAtom: fnCtx.isStateAtom, state, stateRoot, isFirstCall, prevResult, triggerReasons, input, sn };
    const shouldRunFn = !isAsync || forceFn || isAsync && !task;
    if (shouldRunFn) {
      const result2 = fn(fnParams);
      updateAndDrillDown({ data: result2 });
      return resultTuple();
    }
    if (isAsync && isFirstCall) {
      fnCtx.nextLevelFnKeys.forEach((key) => markComputing(key, 0));
    }
    if (isAsyncTransfer) {
      updateAndDrillDown({ err });
      return resultTuple();
    }
    if (fnCtx.asyncType === MAY_TRANSFER2) {
      const result2 = fn(fnParams);
      updateAndDrillDown({ data: result2 });
      return resultTuple();
    }
    if (task) {
      let del = s$2;
      if (isFirstCall) {
        depKeys.forEach((depKey) => putComputingFnKey(depKey, fnKey));
        del = () => depKeys.forEach((depKey) => delComputingFnKey(depKey, fnKey));
      } else if (forceTask) {
        fnCtx.nextLevelFnKeys.forEach((fnKey2) => markComputing(fnKey2));
      }
      return Promise.resolve(() => {
        const result2 = task(fnParams);
        if (!A$2(result2)) {
          S$2("ERR_NON_FN: derive task arg should be async function!", { throwErr });
          return null;
        }
        return result2;
      }).then((wrap) => wrap()).then((data) => {
        del();
        updateAndDrillDown({ data });
        return resultTuple();
      }).catch((err2) => {
        del();
        updateAndDrillDown({ err: err2 });
        if (throwErr) throw err2;
        emitErr(internal, err2);
        return resultTuple(err2);
      });
    }
    return resultTuple(err);
  }
  function rerunDeriveFn(result, options) {
    const fnCtx = getFnCtxByObj(result);
    if (!fnCtx) {
      throw new Error("[Helux]: not a derived result");
    }
    return runFn(fnCtx.fnKey, { ...options || {} });
  }
  function runDerive(result, throwErr) {
    return rerunDeriveFn(result, { forceFn: true, throwErr });
  }
  function runDeriveTask(result, throwErr) {
    return Promise.resolve(rerunDeriveFn(result, { forceTask: true, throwErr }));
  }
  function innerRunDerive(result, throwErr) {
    return rerunDeriveFn(result, { forceFn: true, throwErr, unbox: true });
  }
  function innerRunDeriveTask(result, throwErr) {
    return Promise.resolve(rerunDeriveFn(result, { forceTask: true, throwErr, unbox: true }));
  }
  function getDeriveLoading(result) {
    const fnCtx = getFnCtxByObj(result);
    if (fnCtx) {
      return fnCtx.status;
    }
    return { loading: false, err: null, ok: true };
  }
  function getArrIndexKey(confKey, fullKey) {
    if (confKey === fullKey) {
      return confKey;
    }
    const restStr = fullKey.substring(confKey.length + 1);
    const keys = restStr.split(KEY_SPLITER);
    return `${confKey}${KEY_SPLITER}${keys[0]}`;
  }
  function recordArrKey(arrKeys, depKey) {
    const parentDepKey = o$3(arrKeys, depKey);
    if (parentDepKey) return;
    n$2(arrKeys, depKey);
  }
  var cutCache = /* @__PURE__ */ new Map();
  function cutDepKeyByStop(depKeyInfo, options) {
    let isKeyRerord = false;
    const { depKey, keyPath, sharedKey } = depKeyInfo;
    const { stopDepInfo, level1ArrKeys, recordCb } = options;
    const cutKey = cutCache.get(depKey);
    if (cutKey) {
      recordCb(cutKey);
      return true;
    }
    const { keys: stopDepKeys, isArrDict, depth, arrKeyStopDcit, stopArrDep } = stopDepInfo;
    const mayArrKeyPrefix = o$3(level1ArrKeys, depKey);
    const isGtDepth = keyPath.length > depth;
    if (isGtDepth || mayArrKeyPrefix) {
      let newDepKey = "";
      let cutDepth = depth;
      if (mayArrKeyPrefix) {
        cutDepth = depth + 1;
        const notStopByRule = arrKeyStopDcit[mayArrKeyPrefix] === false;
        if (notStopByRule) ;
        else if (stopArrDep) {
          if (isGtDepth) {
            newDepKey = getDepKeyByPath(keyPath.slice(0, cutDepth), sharedKey);
          } else {
            newDepKey = getArrIndexKey(mayArrKeyPrefix, depKey);
          }
        }
      }
      if (!newDepKey) {
        newDepKey = getDepKeyByPath(keyPath.slice(0, cutDepth), sharedKey);
      }
      if (!mayArrKeyPrefix) {
        cutCache.set(depKey, newDepKey);
      }
      recordCb(newDepKey);
      return true;
    }
    const sharedKeyStr = String(sharedKey);
    for (const confKey of stopDepKeys) {
      if (!depKey.startsWith(confKey) || confKey === sharedKeyStr) {
        continue;
      }
      const isArr = isArrDict[confKey];
      const recordKey = isArr ? getArrIndexKey(confKey, depKey) : confKey;
      if (!isArr) {
        cutCache.set(depKey, recordKey);
      }
      recordCb(recordKey);
      isKeyRerord = true;
      break;
    }
    return isKeyRerord;
  }
  function recordBlockDepKey(depKeys, result) {
    const blockScope = getBlockScope();
    const { runningKey } = blockScope;
    if (runningKey) {
      const { KEY_DYNAMIC_CTX_MAP, KEY_CTX_MAP, isDynamic } = blockScope;
      const ctxMap = isDynamic ? KEY_DYNAMIC_CTX_MAP : KEY_CTX_MAP;
      const blockCtx = ctxMap.get(runningKey);
      if (blockCtx) {
        const { results, depKeys: blockDepKeys } = blockCtx;
        if (result) {
          n$2(results, result);
        } else {
          depKeys.forEach((depKey) => n$2(blockDepKeys, depKey));
        }
      }
    }
  }
  function recordLastest(sharedKey, val, sharedState, depKey, keyPath, isDerivedResult2 = false, isDerivedAtom2 = false) {
    const scope = getBlockScope();
    scope.latest = { sharedKey, val, stateOrResult: sharedState, depKey, keyPath, isDerivedResult: isDerivedResult2, isDerivedAtom: isDerivedAtom2 };
  }
  function getLastest() {
    const scope = getBlockScope();
    return scope.latest;
  }
  function getBlockCtxMap(isDynamic) {
    const { KEY_DYNAMIC_CTX_MAP, KEY_CTX_MAP } = getBlockScope();
    const map = isDynamic ? KEY_DYNAMIC_CTX_MAP : KEY_CTX_MAP;
    return map;
  }
  function cannotSet() {
    x$1("changing shared state is invalid");
    return true;
  }
  function handleHeluxKey(isRoot, forAtom, sharedKey, key, value) {
    if (key === IS_ATOM) {
      return isRoot ? forAtom : false;
    }
    if (key === SHARED_KEY) {
      return sharedKey;
    }
    return value;
  }
  function handleCustomKey(opParams, forAtom, sharedKey) {
    opParams.replaceValue(handleHeluxKey(opParams.keyPath.length === 0, forAtom, sharedKey, opParams.key, opParams.value));
  }
  function buildSharedState(options) {
    let sharedRoot = {};
    const { rawState, sharedKey, forAtom, onRead, isPrimitive: isPrimitive2, stopDepth } = options;
    const collectDep2 = (keyPath, val) => {
      const depKey = getDepKeyByPath(keyPath, sharedKey);
      recordFnDepKeys([depKey], { sharedKey, kv: { [depKey]: val } });
      recordBlockDepKey([depKey]);
      recordLastest(sharedKey, val, sharedRoot, depKey, keyPath);
    };
    if (HAS_PROXY) {
      sharedRoot = immut(rawState, {
        customKeys: OP_KEYS,
        onOperate: (params) => {
          const { isBuiltInFnKey, isCustom } = params;
          if (isCustom) {
            return handleCustomKey(params, forAtom, sharedKey);
          }
          if (!isBuiltInFnKey) {
            const { fullKeyPath } = params;
            const rawVal = callOnRead(params, onRead);
            collectDep2(fullKeyPath, rawVal);
          }
        },
        compareVer: true
      });
    } else {
      const toShallowProxy = (obj, keyLevel, parentKeyPath) => createDpOb(obj, {
        set: cannotSet,
        get: (target, key) => {
          const value = target[key];
          if (OP_KEYS.includes(key)) {
            return handleHeluxKey(keyLevel === 1, forAtom, sharedKey, key, value);
          }
          const opParams = newOpParams(key, value, { isChanged: false, parentKeyPath });
          if (keyLevel < stopDepth && isDict(value)) {
            return toShallowProxy(value, keyLevel + 1, opParams.fullKeyPath);
          }
          const rawVal = callOnRead(opParams, onRead);
          collectDep2(opParams.fullKeyPath, rawVal);
          return rawVal;
        }
      });
      sharedRoot = toShallowProxy(rawState, 1, []);
    }
    let sharedState = sharedRoot;
    if (forAtom) {
      if (isPrimitive2) {
        sharedState = rawState.val;
      } else {
        sharedState = createOb(rawState, {
          set: cannotSet,
          get: (t2, k2) => sharedRoot.val[k2]
        });
      }
    }
    mapSharedState(sharedKey, sharedRoot);
    return { sharedRoot, sharedState };
  }
  var GLOBAL_EMPTY = null;
  function getGlobalEmpty() {
    return GLOBAL_EMPTY;
  }
  function initGlobalEmpty(apiCtx, createFn) {
    const ctx2 = getRootCtx();
    let shared = ctx2.globalEmpty;
    if (!shared) {
      const { stateRoot } = createFn({ apiCtx, rawState: {}, forGlobal: true, stateType: STATE_TYPE.GLOGAL_EMPTY });
      const internal = getInternal(stateRoot);
      ctx2.globalEmpty = stateRoot;
      ctx2.globalEmptyInternal = internal;
    }
    GLOBAL_EMPTY = shared;
    return shared;
  }
  function getGlobalIdInsKeys(id) {
    const { GID_INSKEYS_MAP } = getFnScope();
    return R$1(GID_INSKEYS_MAP, id, []);
  }
  function getGlobalEmptyInternal() {
    return getRootCtx().globalEmptyInternal;
  }
  function mapGlobalId(id, insKey) {
    if (!id || RUN_AT_SERVER) return;
    const keys = getGlobalIdInsKeys(id);
    n$2(keys, insKey);
  }
  function delGlobalId(id, insKey) {
    if (!id) return;
    const keys = getGlobalIdInsKeys(id);
    t$1(keys, insKey);
  }
  function recoverDep2(insCtx) {
    const { UNMOUNT_INFO_MAP } = getInsScope();
    const { insKey, readMap, internal } = insCtx;
    internal.mapInsCtx(insCtx, insKey);
    let info = UNMOUNT_INFO_MAP.get(insKey);
    if (info) {
      info.c = 2;
      info.prev = insKey - 1;
    } else {
      info = { c: 1, t: Date.now(), prev: 0 };
      UNMOUNT_INFO_MAP.set(insKey, info);
    }
    const { c: mountCount } = info;
    if (mountCount === 2) {
      Object.keys(readMap).forEach((key) => {
        internal.recordDep(key, insKey);
      });
    }
  }
  function clearDep(insCtx) {
    const { readMap, insKey, internal } = insCtx;
    Object.keys(readMap).forEach((key) => internal.delDep(key, insKey));
    internal.delInsCtx(insKey);
  }
  function updateDep(insCtx) {
    const { canCollect, isFirstRender, currentDepKeys } = insCtx;
    if (!canCollect) {
      if (isFirstRender) {
        insCtx.depKeys = currentDepKeys.slice();
      }
      return;
    }
    insCtx.depKeys = currentDepKeys.slice();
  }
  function resetDepHelpData(insCtx) {
    const { canCollect } = insCtx;
    if (!canCollect) {
      return;
    }
    insCtx.readMap = {};
    insCtx.delReadMap = {};
    insCtx.depKeys = insCtx.currentDepKeys.slice();
    insCtx.currentDepKeys.length = 0;
  }
  function collectDep(insCtx, info, options) {
    const { parentType, rawVal } = options;
    const isValArrLike = isArrLikeVal(rawVal);
    if (isValArrLike) {
      recordArrKey(insCtx.internal.level1ArrKeys, info.depKey);
    }
    insCtx.recordDep(info, parentType, isValArrLike);
  }
  function getInsDeps(insCtx, isCurrent) {
    const { depKeys, currentDepKeys, fixedDepKeys } = insCtx;
    const dynamic = isCurrent ? currentDepKeys : depKeys;
    return dynamic.concat(fixedDepKeys);
  }
  function runInsUpdater(insCtx) {
    if (!insCtx) return;
    const { updater, mountStatus, createTime } = insCtx;
    if (mountStatus === NOT_MOUNT) {
      if (Date.now() - createTime > EXPIRE_MS) {
        clearDep(insCtx);
      } else {
        insCtx.needEFUpdate = true;
      }
      return;
    }
    updater();
  }
  function attachInsProxyState(insCtx) {
    const { internal, isReactive, insKey } = insCtx;
    const { rawState, isDeep, sharedKey, onRead, forAtom } = internal;
    if (isDeep) {
      const onOperate = (opParams) => {
        if (RUN_AT_SERVER) return;
        const { isBuiltInFnKey, key } = opParams;
        if (isBuiltInFnKey) return;
        if (j$1(key)) {
          return handleCustomKey(opParams, forAtom, sharedKey);
        }
        const { fullKeyPath, keyPath, parentType } = opParams;
        const rawVal = callOnRead(opParams, onRead);
        if (!insCtx.canCollect) return;
        const depKey = getDepKeyByPath(fullKeyPath, sharedKey);
        const depKeyInfo = { depKey, keyPath: fullKeyPath, parentKeyPath: keyPath, sharedKey };
        collectDep(insCtx, depKeyInfo, { parentType, rawVal });
      };
      if (isReactive) {
        const { draft, draftRoot } = buildReactive(internal, { onRead: onOperate, insKey, from: "Reactive", desc: "mutate" });
        insCtx.proxyState = draftRoot;
        insCtx.proxyStateVal = draft;
      } else {
        insCtx.proxyState = immut(rawState, { onOperate, compareVer: true });
      }
    } else {
      insCtx.proxyState = createOb(rawState, {
        set: () => {
          x$1("changing shared state is invalid");
          return true;
        },
        get: (target, key) => {
          if (RUN_AT_SERVER) return;
          const value = target[key];
          if (j$1(key)) {
            return handleHeluxKey(true, forAtom, sharedKey, key, value);
          }
          const rawVal = callOnRead(newOpParams(key, value, { isChanged: false, parentKeyPath: [] }), onRead);
          if (!insCtx.canCollect) return;
          const depKey = B$1(key, sharedKey);
          const parentType = isDict(target) ? DICT : OTHER;
          collectDep(insCtx, { depKey, keyPath: [key], sharedKey }, { parentType, rawVal });
          return rawVal;
        }
      });
    }
  }
  function buildInsCtx(options) {
    const {
      updater,
      sharedState,
      id = "",
      globalId = "",
      collectType = "every",
      deps,
      pure = true,
      arrDep = true,
      isReactive = false
    } = options;
    const arrIndexDep = !arrDep ? true : options.arrIndexDep ?? true;
    const internal = getInternal(sharedState);
    if (!internal) {
      throw new Error("ERR_OBJ_NOT_SHARED: input object is not a result returned by share api");
    }
    const insKey = genInsKey();
    const { rawState, isDeep, ver, ruleConf, level1ArrKeys, forAtom, sharedKey, sharedKeyStr, snap } = internal;
    const { stopDepInfo } = ruleConf;
    const insCtx = {
      readMap: {},
      delReadMap: {},
      pure,
      depKeys: [],
      fixedDepKeys: [],
      currentDepKeys: [],
      isDeep,
      isReactive,
      insKey,
      internal,
      rawState,
      sharedState,
      sharedKey,
      proxyState: {},
      proxyStateVal: {},
      updater,
      mountStatus: NOT_MOUNT,
      renderStatus: RENDER_START,
      needEFUpdate: false,
      createTime: Date.now(),
      rootVal: null,
      ver,
      id,
      globalId,
      collectType,
      // 设定了 no，才关闭依赖收集功能，此时依赖靠 deps 函数提供
      canCollect: collectType !== "no",
      isFirstRender: true,
      subscribe: (cb) => {
        cb();
      },
      /** 记录一些需复用的中间生成数据 */
      extra: {},
      getDeps: () => getInsDeps(insCtx, true),
      renderInfo: {
        isAtom: forAtom,
        setDraft: internal.insSetDraft,
        time: Date.now(),
        sn: 0,
        snap,
        insKey,
        getDeps: () => getInsDeps(insCtx, true),
        // depKeys 的后续更新流程在 helpers/insDep.resetReadMap 和 updateDep 函数里，做了双保险备份
        getPrevDeps: () => getInsDeps(insCtx, false)
      },
      recordDep: (depKeyInfo, parentType, isValArrLike) => {
        let depKey = depKeyInfo.depKey;
        cutDepKeyByStop(depKeyInfo, {
          stopDepInfo,
          level1ArrKeys,
          recordCb: (key) => {
            depKey = key;
          }
        });
        const { renderStatus, fixedDepKeys } = insCtx;
        if (renderStatus === RENDER_END) {
          return;
        }
        const { readMap, insKey: insKey2, currentDepKeys, delReadMap } = insCtx;
        recordFnDepKeys([depKey], {});
        if (hasRunningFn()) {
          t$1(currentDepKeys, depKey);
          n$2(insCtx.fixedDepKeys, depKey);
        }
        const doRecord = () => {
          readMap[depKey] = 1;
          internal.recordDep(depKey, insKey2);
          if (!fixedDepKeys.includes(depKey)) {
            n$2(currentDepKeys, depKey);
          }
        };
        if (!readMap[depKey] && !delReadMap[depKey]) {
          const { parentKeyPath } = depKeyInfo;
          if (pure && parentType === DICT && parentKeyPath) {
            const parentDepKey = parentKeyPath.length ? getDepKeyByPath(parentKeyPath, sharedKey) : sharedKeyStr;
            if (readMap[parentDepKey]) {
              delete readMap[parentDepKey];
              delReadMap[parentDepKey] = 1;
              t$1(currentDepKeys, parentDepKey);
            }
          }
          const isParentArrLike = isArrLike(parentType);
          if (isParentArrLike) {
            arrIndexDep && doRecord();
            return;
          }
          if (!isValArrLike || !isParentArrLike && arrDep) {
            doRecord();
          }
        }
      }
    };
    globalId && mapGlobalId(globalId, insKey);
    attachInsProxyState(insCtx);
    if (RUN_AT_SERVER) {
      return insCtx;
    }
    internal.mapInsCtx(insCtx, insKey);
    internal.recordId(id, insKey);
    internal.insCount += 1;
    if (internal.insCount === 1) {
      const { lifecycle } = internal;
      lifecycle.willMount();
      lifecycle.shouldCallMounted = true;
    }
    if (w$2(deps)) {
      const rootVal = forAtom ? insCtx.proxyState.val : insCtx.proxyState;
      const list = i$2(deps, rootVal);
      const fixedDepKeys = insCtx.getDeps().slice();
      if (list.includes(rootVal)) {
        fixedDepKeys.push(internal.rootValKey);
      }
      insCtx.fixedDepKeys = fixedDepKeys;
    }
    return insCtx;
  }
  function attachInsDerivedResult(fnCtx) {
    const { result, forAtom } = fnCtx;
    fnCtx.proxyResult = createOb(result, {
      set: () => {
        x$1("changing derived result is invalid");
        return false;
      },
      get: (target, resultKey) => {
        if (IS_DERIVED_ATOM === resultKey) {
          return forAtom;
        }
        if (RENDER_START === fnCtx.renderStatus && !RUN_AT_SERVER) {
          ensureFnDepData(fnCtx);
        }
        return result[resultKey];
      }
    });
  }
  function prepareTuple(insCtx) {
    const { proxyState, internal, renderInfo, canCollect, isReactive } = insCtx;
    const { sharedKey, sharedKeyStr, insSetState, forAtom } = internal;
    renderInfo.snap = internal.snap;
    renderInfo.time = Date.now();
    const rootVal = forAtom ? proxyState.val : proxyState;
    if (insCtx.isFirstRender) {
      insCtx.rootVal = rootVal;
      INS_CTX.set(insCtx.rootVal, insCtx);
    }
    if (!forAtom && canCollect) {
      insCtx.recordDep({ depKey: sharedKeyStr, keyPath: [], sharedKey }, DICT);
    }
    const finalRoot = isReactive ? proxyState : rootVal;
    return [finalRoot, insSetState, renderInfo];
  }
  function checkAtom(mayAtom, forAtom) {
    if (forAtom && !isAtom(mayAtom)) {
      throw new Error("useAtom only accept atom");
    }
  }
  function checkStateVer(insCtx) {
    const {
      ver,
      internal: { ver: dataVer }
    } = insCtx;
    if (ver === dataVer) {
      return;
    }
    insCtx.ver = dataVer;
    attachInsProxyState(insCtx);
  }
  function recoverInsCtx(insCtx) {
    insCtx.mountStatus = MOUNTED;
    const { id, globalId, insKey } = insCtx;
    insCtx.internal.recordId(id, insKey);
    mapGlobalId(globalId, insKey);
    recoverDep2(insCtx);
  }
  function delInsCtx(insCtx) {
    insCtx.mountStatus = UNMOUNT;
    const { id, globalId, insKey, internal } = insCtx;
    internal.delId(id, insKey);
    internal.insCount -= 1;
    if (internal.insCount === 0) {
      internal.lifecycle.willUnmount();
    }
    delGlobalId(globalId, insKey);
    clearDep(insCtx);
  }
  function isSharedKeyChanged(insCtx, sharedState) {
    const curSharedKey = getInternal(sharedState).sharedKey;
    return insCtx.internal.sharedKey !== curSharedKey;
  }
  function useSync(api, subscribe, getSnapshot, getServerSnapshot) {
    if (!getRootCtx().isRootRender) {
      return;
    }
    try {
      const getServerSnapshotFn = getServerSnapshot || getSnapshot;
      api.react.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshotFn);
    } catch (err) {
      console.error(err);
    }
  }
  var nullInsCtx = null;
  function useInsCtx(apiCtx, sharedState, options) {
    const { hookImpl, react } = apiCtx;
    const updater = hookImpl.useForceUpdate();
    const ctxRef = react.useRef({ ctx: nullInsCtx });
    let insCtx = ctxRef.current.ctx;
    if (!insCtx || isSharedKeyChanged(insCtx, sharedState)) {
      insCtx = buildInsCtx({ updater, sharedState, ...options });
      ctxRef.current.ctx = insCtx;
    }
    return insCtx;
  }
  function useClearEffect(apiCtx, insCtx) {
    apiCtx.react.useEffect(() => {
      const { lifecycle } = insCtx.internal;
      if (lifecycle.shouldCallMounted) {
        lifecycle.mounted();
        lifecycle.shouldCallMounted = false;
      }
      insCtx.isFirstRender = false;
      INS_CTX.del(insCtx.rootVal);
      if (insCtx.collectType === "first") {
        insCtx.canCollect = false;
      }
      if (insCtx.needEFUpdate) {
        insCtx.needEFUpdate = false;
        insCtx.updater();
      }
      recoverInsCtx(insCtx);
      return () => {
        delInsCtx(insCtx);
      };
    }, [insCtx]);
  }
  function useCollectDep(apiCtx, sharedState, insCtx) {
    insCtx.renderStatus = RENDER_START;
    resetDepHelpData(insCtx);
    useSync(apiCtx, insCtx.subscribe, () => getInternal(sharedState).snap);
    apiCtx.react.useEffect(() => {
      insCtx.renderStatus = RENDER_END;
      insCtx.isFirstRender = false;
      updateDep(insCtx);
    });
  }
  function useAtomSimpleLogic(apiCtx, sharedState, options = {}) {
    const insCtx = useInsCtx(apiCtx, sharedState, options);
    useSync(apiCtx, insCtx.subscribe, () => getInternal(sharedState).snap);
    useClearEffect(apiCtx, insCtx);
    return insCtx;
  }
  function useAtomLogic(apiCtx, sharedState, options = {}) {
    const { forAtom } = options;
    checkAtom(sharedState, forAtom);
    const insCtx = useInsCtx(apiCtx, sharedState, options);
    useCollectDep(apiCtx, sharedState, insCtx);
    useClearEffect(apiCtx, insCtx);
    checkStateVer(insCtx);
    const tuple = prepareTuple(insCtx);
    return { tuple, insCtx };
  }
  function useAtom(apiCtx, sharedState, options = {}) {
    const { tuple } = useAtomLogic(apiCtx, sharedState, options);
    return tuple;
  }
  function useAtomX(apiCtx, sharedState, options = {}) {
    const { tuple } = useAtomLogic(apiCtx, sharedState, options);
    const [state, setState, renderInfo] = tuple;
    return { ...renderInfo, state, setState };
  }
  var { TASK } = ASYNC_TYPE;
  var { STATIC, HOOK } = SCOPE_TYPE;
  function checkResult(fnCtx, result, forAtom) {
    if (!forAtom) {
      if (!E$2(result) || A$2(result)) {
        throw new Error("ERR_NON_OBJ: derive,deriveAsync expect result to be a plain object");
      }
    }
    const { isAsync, isAsyncTransfer } = fnCtx;
    if (isAsync && !isAsyncTransfer) {
      const fnKey = getFnKey(result);
      const sharedKey = getSharedKey(result);
      if (fnKey && fnCtx.fnKey !== fnKey || sharedKey) {
        throw new Error(
          "ERR_INVALID_CALL: derive,deriveAsync can not transfer another derived result or shared state, it will cause wrong result"
        );
      }
    }
  }
  function attachStaticProxyResult(fnCtx, forAtom) {
    const proxyResult = createOb(fnCtx.result, {
      set: () => {
        x$1("changing derived result is invalid");
        return false;
      },
      get: (target, key) => {
        if (key === IS_DERIVED_ATOM) {
          return forAtom;
        }
        const val = target[key];
        recordFnDepKeys(fnCtx.depKeys, { belongCtx: fnCtx });
        recordBlockDepKey(fnCtx.depKeys, proxyResult);
        recordLastest(0, val, proxyResult, "", [key], true, forAtom);
        return val;
      }
    });
    fnCtx.proxyResult = proxyResult;
    return proxyResult;
  }
  function transferDep(fnCtx, options) {
    const { result, isUpstream } = options;
    const upstreamFnCtx = getFnCtxByObj(result);
    if (upstreamFnCtx) {
      fnCtx.depKeys = r$2(fnCtx.depKeys.concat(upstreamFnCtx.depKeys));
      n$2(upstreamFnCtx.nextLevelFnKeys, fnCtx.fnKey);
      n$2(fnCtx.prevLevelFnKeys, upstreamFnCtx.fnKey);
      fnCtx.isFirstLevel = false;
      isUpstream == null ? void 0 : isUpstream();
    }
  }
  function initDeriveFn(options) {
    const {
      scopeType = STATIC,
      fnCtxBase,
      // 目前仅 hook 函数支持转移异步结果
      isAsyncTransfer = false,
      asyncType = TASK,
      returnUpstreamResult,
      runAsync = true,
      forAtom = false,
      immediate
    } = options;
    if (!w$2(options.fn)) {
      throw new Error("ERR_NON_FN: derive need fn arg!");
    }
    const { fn = f$2, deps = f$2, task, stateRoot = {} } = options;
    const isStateAtom = isAtom(stateRoot);
    const isAsync = options.isAsync ?? w$2(task);
    const showLoading = options.showLoading ?? isAsync;
    const fnCtx = registerFn(fn, {
      specificProps: {
        forAtom,
        scopeType,
        stateRoot,
        isStateAtom,
        fnType: DERIVE,
        task,
        deps,
        isAsync,
        asyncType,
        isAsyncTransfer,
        showLoading
      },
      fnCtxBase
    });
    markFnStart(fnCtx.fnKey, 0);
    const { input, state } = runDeps(deps, stateRoot, isStateAtom);
    input.forEach((result2) => transferDep(fnCtx, { result: result2 }));
    const fnParams = {
      isFirstCall: true,
      prevResult: null,
      triggerReasons: [],
      input,
      sn: 0,
      state,
      stateRoot,
      isAtom: isStateAtom
    };
    let result = fn(fnParams);
    markFnEnd();
    const upstreamFnCtx = getFnCtxByObj(result);
    if (forAtom && !upstreamFnCtx) {
      result = { val: result, z__is_atom_result__: true };
    }
    const curFnKey = fnCtx.fnKey;
    checkResult(fnCtx, result);
    transferDep(fnCtx, {
      result,
      isUpstream: () => {
        fnCtx.returnUpstreamResult = returnUpstreamResult ?? !isAsync;
      }
    });
    ensureFnDepData(fnCtx);
    if (!fnCtx.returnUpstreamResult) {
      markFnKey(result, scopeType, curFnKey);
    }
    const canRunTask = runAsync && asyncType === TASK && (immediate ?? !options.fn);
    if (task && canRunTask) {
      runFn(curFnKey, { isFirstCall: true, sn: fnCtx.renderInfo.sn + 1, throwErr: true }).then((data) => {
        checkResult(fnCtx, data[0], forAtom);
      }).catch((err) => S$2(err));
    }
    fnCtx.result = result;
    if (scopeType === HOOK && shouldShowComputing(fnCtx)) {
      fnCtx.setLoading(true);
    }
    if (fnCtx.returnUpstreamResult) {
      fnCtx.proxyResult = result;
    } else {
      attachStaticProxyResult(fnCtx, forAtom);
    }
    return fnCtx;
  }
  function createDeriveLogic(fn, options) {
    const fnItem2 = w$2(fn) ? { fn } : fn || {};
    const fnCtx = initDeriveFn({ ...options || {}, ...fnItem2 });
    return fnCtx;
  }
  function derive(deriveFn, stateRoot) {
    const fnCtx = createDeriveLogic(deriveFn, { forAtom: true, stateRoot });
    return fnCtx.proxyResult;
  }
  function deriveDict(deriveFn, stateRoot) {
    const fnCtx = createDeriveLogic(deriveFn, { stateRoot });
    return fnCtx.proxyResult;
  }
  function defineDeriveTask(deps) {
    return (options) => ({ ...options, deps });
  }
  function defineDeriveFnItem(fnItem2) {
    return fnItem2;
  }
  var InvalidInput = "ERR_NOT_DERIVED_RESULT: useDerived only accept derived result";
  var NotDerivedAtom = "ERR_NOT_ATOM_RESULT: useDerivedAtom only accept derived atom";
  function isInputChanged(fnCtx, storedInput, curInput) {
    if (fnCtx.isExpired) {
      fnCtx.isExpired = false;
      return true;
    }
    if (w$2(curInput)) {
      return false;
    }
    return curInput !== storedInput;
  }
  function ensureHotReload(fnCtx) {
    delFnCtx(fnCtx);
    fnCtx.depKeys.length = 0;
    fnCtx.prevLevelFnKeys.length = 0;
    fnCtx.renderInfo.sn += 1;
  }
  function genDerivedResult(deriveCtx, options) {
    const { result, forAtom, showLoading } = options;
    const { fnCtx, input, deriveFn } = deriveCtx;
    let isCtxChanged = false;
    if (deriveFn) {
      const isChanged = isInputChanged(fnCtx, input, result);
      if (!isChanged) {
        return;
      }
      isCtxChanged = true;
      ensureHotReload(fnCtx);
    }
    deriveCtx.input = result;
    const upstreamFnCtx = getFnCtxByObj(result);
    if (!upstreamFnCtx) {
      throw new Error(InvalidInput);
    }
    if (forAtom && !isDerivedAtom(result)) {
      throw new Error(NotDerivedAtom);
    }
    deriveCtx.deriveFn = () => upstreamFnCtx.result;
    createDeriveLogic(
      { fn: () => upstreamFnCtx.result, deps: () => [], task: async () => upstreamFnCtx.result },
      {
        isAsync: upstreamFnCtx.isAsync,
        scopeType: SCOPE_TYPE.HOOK,
        fnCtxBase: fnCtx,
        isAsyncTransfer: true,
        runAsync: false,
        returnUpstreamResult: true,
        forAtom,
        asyncType: ASYNC_TYPE.MAY_TRANSFER,
        showLoading
      }
    );
    attachInsDerivedResult(fnCtx);
    if (isCtxChanged) {
      fnCtx.updater();
    }
  }
  function useFnCtx(apiCtx, options) {
    const { result, forAtom } = options;
    const { hookImpl, react } = apiCtx;
    const updater = hookImpl.useForceUpdate();
    const { current: deriveCtx } = react.useRef({ input: result, deriveFn: null, fnCtx: null });
    if (!deriveCtx.fnCtx) {
      deriveCtx.fnCtx = buildFnCtx({ updater, scopeType: SCOPE_TYPE.HOOK, forAtom });
    }
    const fnCtx = deriveCtx.fnCtx;
    fnCtx.renderStatus = RENDER_START;
    genDerivedResult(deriveCtx, options);
    return fnCtx;
  }
  function useReplace(apiCtx, fnCtx) {
    if (fnCtx.shouldReplaceResult) {
      attachInsDerivedResult(fnCtx);
      fnCtx.shouldReplaceResult = false;
    }
    useSync(apiCtx, fnCtx.subscribe, () => getDepSharedStateFeature(fnCtx));
    apiCtx.react.useEffect(() => {
      fnCtx.renderStatus = RENDER_END;
    });
  }
  function useFnCtxEffect(apiCtx, fnCtx) {
    apiCtx.react.useEffect(() => {
      fnCtx.mountStatus = MOUNTED;
      recoverDep(fnCtx);
      return () => {
        delFnCtx(fnCtx);
      };
    }, [fnCtx]);
  }
  function useDerivedSimpleLogic(apiCtx, options) {
    const fnCtx = useFnCtx(apiCtx, options);
    useSync(apiCtx, fnCtx.subscribe, () => getDepSharedStateFeature(fnCtx));
    useFnCtxEffect(apiCtx, fnCtx);
    return fnCtx;
  }
  function useDerivedLogic(apiCtx, options) {
    const fnCtx = useFnCtx(apiCtx, options);
    useReplace(apiCtx, fnCtx);
    useFnCtxEffect(apiCtx, fnCtx);
    return fnCtx;
  }
  function useDerived(api, result, options) {
    const fnCtx = useDerivedLogic(api, { result, ...options || {} });
    const { proxyResult, status, renderInfo } = fnCtx;
    const resultForComp = isDerivedAtom(result) ? proxyResult.val : proxyResult;
    return [resultForComp, status, renderInfo];
  }
  function checkShared(sharedStateOrKey, options) {
    const { forAtom, label, strict = false } = options || {};
    let internal;
    if (typeof sharedStateOrKey === "number") {
      internal = getInternalByKey(sharedStateOrKey);
    } else {
      internal = getInternal(sharedStateOrKey);
    }
    if (!internal && sharedStateOrKey) {
      const rMeta = sharedStateOrKey[REACTIVE_META_KEY];
      internal = getInternalByKey(rMeta == null ? void 0 : rMeta.sharedKey);
    }
    let prefix = label ? `[[${label}]] err:` : "err:";
    if (!internal) {
      if (strict) {
        S$2(`${prefix} not a valid shared or atom`, { throwErr: true });
      } else {
        return null;
      }
    }
    if (forAtom !== void 0) {
      if (forAtom && !internal.forAtom) {
        S$2(`${prefix} expect a shared but recived a atom`, { throwErr: true });
      }
      if (!forAtom && internal.forAtom) {
        S$2(`${prefix} expect a atom but recived a shared`, { throwErr: true });
      }
    }
    return internal;
  }
  function checkSharedStrict(sharedStateOrKey, options) {
    return checkShared(sharedStateOrKey, { ...options || {}, strict: true });
  }
  function updateIns(insCtxMap, insKey, sn) {
    const insCtx = insCtxMap.get(insKey);
    if (insCtx) {
      insCtx.renderInfo.sn = sn;
      runInsUpdater(insCtx);
    }
  }
  function execDepFns(opts) {
    const { mutateCtx, internal } = opts;
    const { ids, globalIds, depKeys, triggerReasons, isFirstCall, from, sn, desc, fnKey: fromFnKey } = mutateCtx;
    const { key2InsKeys, id2InsKeys, insCtxMap, rootValKey } = internal;
    let dirtyInsKeys = [];
    let dirtyGlobalInsKeys = [];
    let dirtyFnKeys = [];
    let dirtyAsyncFnKeys = [];
    const runCountStats = {};
    if (isFirstCall) {
      const depKeys2 = markFnEnd();
      FN_DEP_KEYS.set(depKeys2);
    }
    const findDirtyFnKeys = (key, forSharedKey = false) => {
      const { firstLevelFnKeys, asyncFnKeys } = getDepFnStats(internal, key, runCountStats, forSharedKey);
      dirtyFnKeys = dirtyFnKeys.concat(firstLevelFnKeys);
      dirtyAsyncFnKeys = dirtyAsyncFnKeys.concat(asyncFnKeys);
    };
    const analyzeDepKey = (key) => {
      if (!diffVal(internal, key)) {
        return;
      }
      const insKeys = key2InsKeys[key] || [];
      const validInsKeys = [];
      for (const insKey of insKeys) {
        if (dirtyInsKeys.includes(insKey)) {
          continue;
        }
        const insCtx = insCtxMap.get(insKey);
        if (!insCtx) {
          continue;
        }
        const depKeys2 = insCtx.getDeps();
        if (depKeys2[0] === rootValKey) {
          if (diffVal(internal, rootValKey)) {
            validInsKeys.push(insKey);
          }
          continue;
        }
        if (hasChangedNode(internal, depKeys2, key)) {
          validInsKeys.push(insKey);
        }
      }
      dirtyInsKeys = dirtyInsKeys.concat(validInsKeys);
      findDirtyFnKeys(key);
    };
    depKeys.forEach((k2) => analyzeDepKey(k2));
    if (!depKeys.includes(rootValKey)) {
      analyzeDepKey(rootValKey);
    }
    findDirtyFnKeys(rootValKey, true);
    clearDiff();
    ids.forEach((id) => {
      dirtyInsKeys = dirtyInsKeys.concat(id2InsKeys[id] || []);
    });
    globalIds.forEach((id) => {
      getGlobalIdInsKeys(id).forEach((insKey) => n$2(dirtyGlobalInsKeys, insKey));
    });
    dirtyInsKeys = r$2(dirtyInsKeys);
    dirtyFnKeys = r$2(dirtyFnKeys);
    dirtyAsyncFnKeys = r$2(dirtyAsyncFnKeys);
    dirtyAsyncFnKeys.forEach((fnKey) => markComputing(fnKey, runCountStats[fnKey]));
    const watchFnKeys = [];
    const runOptions = { depKeys, sn, from, triggerReasons, watchFnKeys, skipWatch: true, internal, desc, isFirstCall, fromFnKey };
    dirtyFnKeys.forEach((fnKey) => runFn(fnKey, runOptions));
    const runOptionsOfWatch = { depKeys, sn, from, triggerReasons, internal, desc, isFirstCall, fromFnKey };
    watchFnKeys.forEach((fnKey) => runFn(fnKey, runOptionsOfWatch));
    dirtyInsKeys.forEach((insKey) => updateIns(insCtxMap, insKey, sn));
    if (dirtyGlobalInsKeys.length) {
      const globalInsCtxMap = getGlobalEmptyInternal().insCtxMap;
      dirtyGlobalInsKeys.forEach((insKey) => updateIns(globalInsCtxMap, insKey, sn));
    }
  }
  function getDepKeyDict(internal, deps, defaultDict) {
    if (deps === null) {
      return defaultDict;
    }
    if (!w$2(deps)) {
      return null;
    }
    const { sharedState, forAtom } = internal;
    const rootVal = forAtom ? sharedState.val : sharedState;
    const depKeyDict = {};
    DEPS_CB.set((keys) => depKeyDict[keys[0]] = 1);
    const depItems = i$2(deps, rootVal);
    DEPS_CB.del();
    if (depItems.includes(rootVal)) {
      return internal.key2InsKeys;
    }
    return depKeyDict;
  }
  function useGlobalForceUpdate(apiCtx, sharedState, presetDeps) {
    const internal = checkSharedStrict(sharedState);
    const [presetDepKeyDict] = apiCtx.react.useState(() => {
      return getDepKeyDict(internal, presetDeps, null);
    });
    return (overWriteDeps) => {
      const { insCtxMap, key2InsKeys } = internal;
      const depKeyDict = getDepKeyDict(internal, overWriteDeps, key2InsKeys) || presetDepKeyDict || key2InsKeys;
      const insKeyDict = {};
      Object.keys(depKeyDict).forEach((depKey) => {
        const insKeys2 = key2InsKeys[depKey] || [];
        insKeys2.forEach((insKey) => insKeyDict[insKey] = 1);
      });
      const insKeys = Object.keys(insKeyDict);
      if (insKeys.length) {
        internal.sn += 1;
        const nextSn = internal.sn;
        Object.keys(insKeyDict).forEach((insKey) => {
          updateIns(insCtxMap, Number(insKey), nextSn);
        });
      }
    };
  }
  function useGlobalId(apiCtx, globalId) {
    ensureGlobal(apiCtx);
    const globalEmpty = getGlobalEmpty();
    const insCtx = useAtomSimpleLogic(apiCtx, globalEmpty, { collectType: "no", globalId });
    return insCtx.renderInfo;
  }
  var { MUTATE, LOADING } = FROM;
  var { GLOGAL_LOADING, PRIVATE_LOADING } = STATE_TYPE;
  var { PRIVATE, GLOBAL } = RECORD_LOADING;
  var fakeExtra = {};
  var fakeLoading = {};
  var fakeRenderInfo = { time: 0, sn: 0, getDeps: a$3, getPrevDeps: a$3, insKey: 0, setDraft: f$2, isAtom: false };
  var fakeTuple = [createSafeLoading(fakeExtra, fakeLoading, MUTATE), f$2, fakeRenderInfo];
  function createLoading(createFn, options) {
    const { internal, apiCtx } = options;
    const { mutateFnDict, moduleName } = internal;
    const rawLoading = {};
    Object.keys(mutateFnDict).forEach((desc) => {
      rawLoading[desc] = { loading: false, err: null, ok: true };
    });
    const name = moduleName ? `${moduleName}@Loading` : "";
    const loadingCtx = createFn({ apiCtx, rawState: rawLoading, isLoading: true, stateType: PRIVATE_LOADING }, { moduleName: name });
    return loadingCtx.state;
  }
  var GLOBAL_LOADING = null;
  function getGlobalLoading() {
    return GLOBAL_LOADING;
  }
  function getGlobalLoadingInternal() {
    return getRootCtx().globalLoadingInternal;
  }
  function initGlobalLoading(apiCtx, createFn) {
    const ctx2 = getRootCtx();
    let shared = ctx2.globalLoading;
    if (!shared) {
      const { stateRoot } = createFn({ apiCtx, rawState: {}, stateType: GLOGAL_LOADING }, { moduleName: HELUX_GLOBAL_LOADING });
      const internal = getInternal(stateRoot);
      ctx2.globalLoadingInternal = internal;
      ctx2.globalLoading = stateRoot;
    }
    GLOBAL_LOADING = shared;
    return shared;
  }
  function getStatusKey(from, desc) {
    let descStr = desc;
    if (j$1(desc)) {
      descStr = desc.toString();
    }
    return `${from}>${descStr}`;
  }
  function setLoadStatus(internal, statusKey, status) {
    if (!statusKey) return;
    const { loadingInternal } = internal;
    loadingInternal.innerSetState(
      (draft) => {
        draft[statusKey] = status;
      },
      { from: LOADING }
    );
    if (status.err) {
      emitPluginEvent(internal, EVENT_NAME.ON_ERROR_OCCURED, { err: status.err });
      console.error(status.err);
    }
  }
  function createSafeLoading(extra, loadingObj, from) {
    let safeLoading = extra[from];
    if (!safeLoading) {
      safeLoading = createOb(loadingObj, {
        get(target, key) {
          const realKey = getStatusKey(from, key);
          return target[realKey] || { loading: false, ok: true, err: null };
        }
      });
      extra[from] = safeLoading;
    }
    return safeLoading;
  }
  function getLoadingInfo(createFn, options) {
    const { internal, from } = options;
    const { stateType, recordLoading } = internal;
    const isUserState = STATE_TYPE.USER_STATE === stateType;
    let loadingState = createSafeLoading(fakeExtra, {}, from);
    let loadingProxy = {};
    if (isUserState) {
      if (PRIVATE === recordLoading) {
        loadingProxy = internal.extra.loadingProxy;
        if (!loadingProxy) {
          loadingProxy = createLoading(createFn, options);
          internal.extra.loadingProxy = loadingProxy;
          internal.loadingInternal = getInternal(loadingProxy);
        }
        loadingState = createSafeLoading(internal.extra, loadingProxy, from);
      } else if (GLOBAL === recordLoading) {
        const globalLoadingInternal = getGlobalLoadingInternal();
        loadingProxy = getGlobalLoading();
        internal.loadingInternal = globalLoadingInternal;
        loadingState = createSafeLoading(globalLoadingInternal.extra, loadingProxy, from);
      } else {
        loadingProxy = getGlobalEmpty();
      }
    } else {
      loadingProxy = internal.sharedState;
      loadingState = createSafeLoading(internal.extra, loadingProxy, from);
    }
    return { loadingState, loadingProxy };
  }
  function getLoadingOpts(options, actionsOrMutate) {
    if (!isDict(actionsOrMutate)) {
      return options;
    }
    const keys = Object.keys(actionsOrMutate);
    if (!keys.length) {
      return options;
    }
    const oneItem = actionsOrMutate[keys[0]];
    if (!oneItem.__sharedKey) {
      return options;
    }
    return {
      ...options,
      internal: checkSharedStrict(oneItem.__sharedKey)
    };
  }
  function initLoadingCtx(createFn, options) {
    const { internal: leaderInternal, from, apiCtx } = options;
    const { stateType } = leaderInternal;
    const isUserState = STATE_TYPE.USER_STATE === stateType;
    getLoadingInfo(createFn, options);
    let useLoading = () => fakeTuple;
    if (isUserState) {
      useLoading = (actionsOrMutate) => {
        const targetOptions = getLoadingOpts(options, actionsOrMutate);
        const loadingProxy = getLoadingInfo(createFn, targetOptions).loadingProxy;
        const {
          insCtx: { proxyState, internal, extra, renderInfo }
        } = useAtomLogic(apiCtx, loadingProxy);
        return [createSafeLoading(extra, proxyState, from), internal.setState, renderInfo];
      };
    }
    return {
      useLoading,
      getLoading: (actionsOrMutate) => {
        const targetOptions = getLoadingOpts(options, actionsOrMutate);
        return getLoadingInfo(createFn, targetOptions).loadingState;
      }
    };
  }
  var { ACTION, MUTATE: MUTATE2 } = FROM;
  function getLoadingCtx(apiCtx, options) {
    ensureGlobal(apiCtx);
    const { target, from = "Mutate" } = options || {};
    let internal = getGlobalLoadingInternal();
    if (target) {
      internal = checkSharedStrict(target);
    }
    const { loadingProxy, loadingState } = getLoadingInfo(createSharedLogic, { apiCtx, internal, from });
    return { loadingProxy, loadingState, internal, from };
  }
  function useLoadingLogic(apiCtx, options) {
    const { loadingProxy, internal, from } = getLoadingCtx(apiCtx, options);
    const { proxyState, extra, renderInfo } = useAtomSimpleLogic(apiCtx, loadingProxy);
    return [createSafeLoading(extra, proxyState, from), internal.setState, renderInfo];
  }
  function getMutateLoading(apiCtx, target) {
    const { loadingProxy } = getLoadingCtx(apiCtx, { target, from: MUTATE2 });
    return loadingProxy;
  }
  function useMutateLoading(apiCtx, target) {
    return useLoadingLogic(apiCtx, { target, from: MUTATE2 });
  }
  function getActionLoading(apiCtx, target) {
    const { loadingProxy } = getLoadingCtx(apiCtx, { target, from: ACTION });
    return loadingProxy;
  }
  function useActionLoading(apiCtx, target) {
    return useLoadingLogic(apiCtx, { target, from: ACTION });
  }
  function useLocalForceUpdate(apiCtx) {
    const updater = apiCtx.hookImpl.useForceUpdate();
    return updater;
  }
  function useMutable(apiCtx, initialState) {
    const handleState = (partialStateOrCb, prevState) => {
      let final = null;
      if (w$2(partialStateOrCb)) {
        const draft = createDraft(prevState, { autoRevoke: false });
        const mayPartial = partialStateOrCb(draft);
        final = finishDraft(draft);
        if (E$2(mayPartial)) {
          Object.assign(final, mayPartial);
        }
      } else if (E$2(partialStateOrCb)) {
        final = { ...prevState, ...partialStateOrCb };
      }
      return final;
    };
    return apiCtx.hookImpl.useObjectLogic(initialState, handleState, true);
  }
  function getUserBus() {
    const { userBus } = getRootCtx();
    return userBus;
  }
  function emit(name, ...args) {
    const { userBus } = getRootCtx();
    userBus.emit(name, ...args);
  }
  function on(name, cb) {
    const { userBus } = getRootCtx();
    userBus.on(name, cb);
    return () => userBus.off(name, cb);
  }
  function useOnEvent(apiCtx, name, evCb, onBeforeMount) {
    const { useRef, useMemo, useEffect: useEffect2 } = apiCtx.react;
    const fnRef = useRef({ fn: evCb, wrap: null, onBeforeMount });
    fnRef.current.fn = useMemo(() => evCb, [evCb]);
    if (!fnRef.current.wrap) {
      fnRef.current.wrap = (...args) => {
        fnRef.current.fn(...args);
      };
      if (onBeforeMount) {
        getUserBus().on(name, fnRef.current.wrap);
      }
    }
    useEffect2(() => {
      const userBus = getUserBus();
      const { wrap, onBeforeMount: onBeforeMount2 } = fnRef.current;
      if (!onBeforeMount2) {
        userBus.on(name, wrap);
      }
      return () => userBus.off(name, wrap);
    }, [name, fnRef]);
  }
  function useReactive(apiCtx, sharedState, options = {}) {
    const forAtom = isAtom(sharedState);
    const { insCtx } = useAtomLogic(apiCtx, sharedState, { ...options, forAtom, isReactive: true });
    return [insCtx.proxyStateVal, insCtx.proxyState, insCtx.renderInfo];
  }
  function useReactiveX(apiCtx, sharedState, options = {}) {
    const [state, stateRoot, info] = useReactive(apiCtx, sharedState, options);
    return { ...info, state, stateRoot };
  }
  function useExposeService(apiCtx, srv, mayProps) {
    const props = E$2(mayProps) ? mayProps : {};
    apiCtx.react.useEffect(() => {
      const { srvRef } = props;
      w$2(srvRef) && srvRef(srv);
    }, []);
  }
  function useService(apiCtx, serviceImpl, props) {
    const srv = apiCtx.hookImpl.useStable(serviceImpl);
    useExposeService(apiCtx, srv, props);
    return srv;
  }
  function storeSrv(ref) {
    return (srv) => ref.current = srv;
  }
  function markSharedKeyOnState(rawState) {
    injectHeluxProto(rawState);
    const sharedKey = markSharedKey(rawState);
    return sharedKey;
  }
  function pureSetOptions(options) {
    if (!options) return {};
    const { desc, ids, globalIds } = options;
    return { desc, ids, globalIds };
  }
  function parseRawState(innerOptions) {
    const { forAtom = false } = innerOptions;
    let rawState = innerOptions.rawState;
    const isStateFn = w$2(rawState);
    let isPrimitive2 = false;
    if (forAtom) {
      rawState = isStateFn ? { val: rawState() } : { val: rawState };
      isPrimitive2 = !rawState.val || !v$1(rawState.val);
    } else {
      rawState = isStateFn ? rawState() : rawState;
      if (!E$2(rawState)) {
        throw new Error("ERR_NON_OBJ: pass an non-object to createShared!");
      }
      if (getSharedKey(rawState)) {
        throw new Error("ERR_ALREADY_SHARED: pass a shared object to createShared!");
      }
    }
    return { isPrimitive: isPrimitive2, rawState };
  }
  function parseMutateFn(fnItem2, inputDesc, checkDupDict) {
    let validItem = null;
    let desc = inputDesc || "";
    if (w$2(fnItem2) && fnItem2 !== f$2) {
      validItem = {
        [MUTATE_FN_ITEM]: 1,
        fn: fnItem2,
        deps: a$3,
        oriDesc: desc,
        onlyDeps: false,
        desc,
        depKeys: [],
        writeKeys: [],
        checkDeadCycle: void 0,
        watchKey: "",
        isFake: false,
        enabled: true,
        extraBound: { state: {}, stateRoot: {}, isAtom: false }
      };
    } else if (E$2(fnItem2)) {
      const { fn, desc: desc2, deps, task, immediate, checkDeadCycle, onlyDeps = false } = fnItem2;
      const descVar = inputDesc || desc2 || "";
      const fnVar = w$2(fn) ? fn : void 0;
      const taskVar = w$2(task) ? task : void 0;
      const depsVar = w$2(deps) ? deps : a$3;
      if (fn || task) {
        validItem = {
          [MUTATE_FN_ITEM]: 1,
          checkDeadCycle,
          fn: fnVar,
          watchKey: "",
          desc: descVar,
          oriDesc: descVar,
          deps: depsVar,
          task: taskVar,
          onlyDeps,
          immediate,
          depKeys: [],
          writeKeys: [],
          isFake: false,
          enabled: true,
          extraBound: { state: {}, stateRoot: {}, isAtom: false }
        };
      }
    }
    if (validItem && checkDupDict) {
      const { oriDesc } = validItem;
      if (!oriDesc || checkDupDict[oriDesc]) {
        validItem.desc = genFnKey(FROM.MUTATE);
      }
    }
    return validItem;
  }
  function parseMutate(mutate2, cachedDict, enabled = true) {
    const mutateFnDict = {};
    const checkDupDict = cachedDict || {};
    if (!mutate2) return mutateFnDict;
    const handleItem = (item, inputDesc) => {
      const stdFn = parseMutateFn(item, inputDesc, checkDupDict);
      if (stdFn) {
        stdFn.enabled = enabled;
        mutateFnDict[stdFn.desc] = stdFn;
        checkDupDict[stdFn.desc] = stdFn;
      }
    };
    if (Array.isArray(mutate2)) {
      if (mutate2.length === 1) {
        const singleFn = mutate2[0];
        const desc = (E$2(singleFn) ? singleFn.desc : "") || SINGLE_MUTATE;
        handleItem(mutate2[0], desc);
      } else {
        mutate2.forEach((item) => handleItem(item));
      }
    } else if (w$2(mutate2)) {
      handleItem(mutate2, SINGLE_MUTATE);
    } else if (E$2(mutate2)) {
      Object.keys(mutate2).forEach((key) => {
        handleItem(mutate2[key], key);
      });
    }
    return mutateFnDict;
  }
  function parseOptions(innerOptions, options = {}) {
    const { forAtom = false, forGlobal = false, stateType = STATE_TYPE.USER_STATE } = innerOptions;
    const { rawState, isPrimitive: isPrimitive2 } = parseRawState(innerOptions);
    const sharedKey = markSharedKeyOnState(rawState);
    const moduleName = options.moduleName || "";
    const alertDeadCycleErr = options.alertDeadCycleErr ?? g$1();
    const deep = options.deep ?? true;
    const checkDeadCycle = options.checkDeadCycle ?? true;
    const enableMutate = options.enableMutate ?? true;
    const recordLoading = options.recordLoading || RECORD_LOADING.PRIVATE;
    const rules = options.rules || [];
    const before = options.before || f$2;
    const mutate2 = options.mutate || f$2;
    const onRead = options.onRead || void 0;
    const stopArrDep = options.stopArrDep ?? true;
    const stopDepth = options.stopDepth || STOP_DEPTH;
    const sharedKeyStr = `${sharedKey}`;
    const rootValKey = forAtom ? `${sharedKey}/val` : sharedKeyStr;
    const usefulName = moduleName || sharedKeyStr;
    const loc = tryGetLoc(moduleName);
    const dict1 = parseMutate(mutate2, {}, enableMutate);
    const dict2 = parseMutate(options.mutateList || [], dict1, enableMutate);
    const mutateFnDict = Object.assign(dict1, dict2);
    return {
      /** TODO 未来可能支持 atom 对象销毁 */
      isDestroyed: false,
      alertDeadCycleErr,
      checkDeadCycle,
      rawState,
      sharedKey,
      sharedKeyStr,
      rootValKey,
      moduleName,
      usefulName,
      forAtom,
      forGlobal,
      loc,
      deep,
      rules,
      before,
      mutate: mutate2,
      mutateFnDict,
      onRead,
      enableMutate,
      stateType,
      recordLoading,
      stopArrDep,
      stopDepth,
      isPrimitive: isPrimitive2
    };
  }
  function parseRules(options) {
    const { rawState, sharedKey, rootValKey, deep, rules, stopDepth, stopArrDep, forAtom } = options;
    const idsDict = {};
    const globalIdsDict = {};
    const stopDepInfo = { keys: [], isArrDict: {}, arrKeyStopDcit: {}, depth: stopDepth, stopArrDep };
    const isArrDict = {};
    const isDeep = G$1(deep);
    rules.forEach((rule) => {
      const confKeys = [];
      const { when, ids = [], globalIds = [], stopDep } = rule;
      let state;
      if (isDeep) {
        let pervKey = "";
        state = immut(rawState, {
          onOperate: ({ fullKeyPath, value, isBuiltInFnKey }) => {
            if (isBuiltInFnKey) return;
            const confKey = getDepKeyByPath(fullKeyPath, sharedKey);
            if (pervKey && confKey.includes(pervKey)) {
              confKeys.pop();
            }
            confKeys.push(confKey);
            isArrDict[confKey] = Array.isArray(value);
            pervKey = confKey;
          }
        });
      } else {
        state = createOb(rawState, {
          set: V$1,
          get: (target, key) => {
            const confKey = getDepKeyByPath([key], sharedKey);
            confKeys.push(confKey);
            const value = target[key];
            isArrDict[confKey] = Array.isArray(value);
            return value;
          }
        });
      }
      const stateNode = forAtom ? state.val : state;
      const result = i$2(when, stateNode);
      const pushId = (idsDict2, ids2, confKey) => {
        const idList = k$1(idsDict2, confKey, []);
        ids2.forEach((id) => n$2(idList, id));
      };
      const setRuleConf = (confKey) => {
        pushId(idsDict, ids, confKey);
        pushId(globalIdsDict, globalIds, confKey);
        let stopKeyDep;
        if (isArrDict[confKey]) {
          stopKeyDep = stopDep ?? STOP_ARR_DEP;
          stopDepInfo.arrKeyStopDcit[confKey] = stopKeyDep;
          stopDepInfo.isArrDict[confKey] = isArrDict[confKey];
        } else {
          stopKeyDep = stopDep ?? false;
        }
        if (stopKeyDep) {
          n$2(stopDepInfo.keys, confKey);
        }
      };
      confKeys.forEach(setRuleConf);
      if (result.includes(stateNode)) {
        setRuleConf(rootValKey);
      }
    });
    const hasIds = Object.keys(idsDict).length > 0;
    const hasGlobalIds = Object.keys(globalIdsDict).length > 0;
    return { hasIds, idsDict, hasGlobalIds, globalIdsDict, stopDepInfo };
  }
  function parseCreateMutateOpt(descOrOptions) {
    const { desc = SINGLE_MUTATE, strict = false, throwErr = false, extraArgs } = {};
    const optType = typeof descOrOptions;
    if (optType === "string") {
      return { desc: descOrOptions, strict, throwErr, extraArgs };
    }
    const finalOpt = { desc, strict, throwErr, extraArgs };
    if (descOrOptions && optType === "object" && !Array.isArray(descOrOptions)) {
      return { ...finalOpt, ...descOrOptions };
    }
    return finalOpt;
  }
  function parseWatchOptions(forEffect, options) {
    let deps = f$2;
    let immediate = false;
    if (w$2(options)) {
      deps = options;
    } else if (E$2(options)) {
      deps = options.deps || f$2;
      immediate = options.immediate ?? false;
    }
    immediate = forEffect ? true : immediate;
    return { immediate, deps };
  }
  function parseBlockOptions(options) {
    if (!options) return {};
    if (typeof options === "boolean") {
      return { enableStatus: options };
    }
    if (E$2(options)) {
      return options;
    }
    return {};
  }
  function putSharedToDep(list) {
    if (Array.isArray(list)) {
      list.forEach((sharedState) => {
        const insCtx = INS_CTX.current(sharedState);
        const internal = getInternal(sharedState) || (insCtx == null ? void 0 : insCtx.internal);
        if (internal) {
          const { depKey, sharedKey } = getRootValDepKeyInfo(internal);
          recordFnDepKeys([depKey], { sharedKey });
        }
        if (insCtx) {
          insCtx.recordDep(getRootValDepKeyInfo(internal));
        }
      });
    }
  }
  function innerWatch(forEffect, watchFn, options) {
    const { deps, immediate } = parseWatchOptions(forEffect, options);
    const fnCtx = createWatchLogic(watchFn, { scopeType: SCOPE_TYPE.STATIC, deps, immediate });
    return {
      run: (throwErr) => runFn(fnCtx.fnKey, { throwErr }),
      unwatch: () => delFnDep(fnCtx)
    };
  }
  function createWatchLogic(watchFn, options) {
    const { scopeType, fnCtxBase, immediate, deps = f$2, label = "watch", sharedState, forBlock } = options;
    if (!w$2(watchFn)) {
      throw new Error(`ERR_NON_FN: pass an non-function to ${label}!`);
    }
    const fnCtx = registerFn(watchFn, { specificProps: { scopeType, fnType: WATCH, forBlock }, fnCtxBase });
    markFnStart(fnCtx.fnKey, getSharedKey(sharedState));
    const list = deps() || [];
    putSharedToDep(list);
    if (immediate) {
      watchFn({ isFirstCall: true });
    }
    markFnEnd();
    return fnCtx;
  }
  function watch(watchFn, options) {
    return innerWatch(false, watchFn, options);
  }
  function watchEffect(watchFn, options) {
    return innerWatch(true, watchFn, options);
  }
  var { HOOK: HOOK2 } = SCOPE_TYPE;
  function useFnCtxEffect2(useEffect2, fnCtx) {
    useEffect2(() => {
      var _a, _b;
      fnCtx.mountStatus = MOUNTED;
      recoverDep(fnCtx);
      (_b = (_a = fnCtx.extra).deferedWatch) == null ? void 0 : _b.call(_a);
      return () => {
        delFnCtx(fnCtx);
      };
    }, [fnCtx]);
  }
  function useWatchLogic(apiCtx, options) {
    const { useRef, useState: useState2, useMemo, useEffect: useEffect2 } = apiCtx.react;
    const { label, forEffect, watchFn, watchOptions } = options;
    const fnRef = useRef({ fn: watchFn, wrap: null, fnKey: "", isDeferMarked: false });
    const [fnCtx] = useState2(() => buildFnCtx());
    fnRef.current.fn = useMemo(() => watchFn, [watchFn]);
    if (!fnRef.current.wrap) {
      const { deps, immediate } = parseWatchOptions(forEffect, watchOptions);
      fnRef.current.wrap = (params) => {
        if (fnCtx.mountStatus === MOUNTED) {
          fnRef.current.fn(params);
          return;
        }
        fnCtx.extra.deferedWatch = () => {
          if (fnRef.current.isDeferMarked) {
            fnRef.current.fn(params);
            return;
          }
          fnRef.current.isDeferMarked = true;
          markFnStart(fnRef.current.fnKey, 0);
          fnRef.current.fn(params);
          markFnEnd();
        };
      };
      const { fnKey } = createWatchLogic(fnRef.current.wrap, { scopeType: HOOK2, fnCtxBase: fnCtx, deps, immediate, label });
      fnRef.current.fnKey = fnKey;
    }
    useFnCtxEffect2(useEffect2, fnCtx);
  }
  function useWatchSimpleLogic(apiCtx, watchFn, options) {
    const { useState: useState2, useEffect: useEffect2 } = apiCtx.react;
    const [fnCtx] = useState2(() => buildFnCtx());
    if (fnCtx.fn === f$2) {
      const { manualDepKeys = [] } = options;
      const deps = () => manualDepKeys.map((depKey) => {
        const { sharedKey, keyPath } = getDepKeyInfo(depKey);
        const state = getSharedState(sharedKey);
        return M$1(state, keyPath);
      });
      createWatchLogic(watchFn, { scopeType: HOOK2, fnCtxBase: fnCtx, deps, forBlock: true });
    }
    useFnCtxEffect2(useEffect2, fnCtx);
  }
  function useWatch(apiCtx, watchFn, watchOptions) {
    useWatchLogic(apiCtx, { label: "useWatch", forEffect: false, watchFn, watchOptions });
  }
  function useWatchEffect(apiCtx, watchFn, watchOptions) {
    useWatchLogic(apiCtx, { label: "useWatchEffect", forEffect: true, watchFn, watchOptions });
  }
  function addMiddleware(mid) {
    const { middlewares } = getRootCtx();
    middlewares.push(mid);
  }
  function runMiddlewares(internal, draftRoot, draft, sn) {
    const { middlewares } = getRootCtx();
    if (!middlewares.length) {
      return;
    }
    const data = {};
    const { sharedKey, moduleName, forAtom } = internal;
    const setData = (key, value) => data[key] = value;
    const midCtx = { forAtom, draftRoot, draft, sharedKey, moduleName, setData, data, idx: 0, sn };
    middlewares.forEach((fn, idx) => {
      fn({ ...midCtx, idx });
    });
  }
  function commitState(opts) {
    const { state, internal, mutateCtx } = opts;
    const { rawState, isDeep, ver, snap } = internal;
    if (isDeep) {
      internal.prevSnap = ver === 0 ? { ...snap } : snap;
      internal.snap = state;
      Object.assign(rawState, state);
    } else {
      internal.snap = { ...rawState };
    }
    internal.ver += 1;
    internal.sn = mutateCtx.sn;
    execDepFns(opts);
  }
  var { MUTATE: MUTATE3 } = FROM;
  function putId(keyIds, options) {
    const { writeKey, ids, internal, opParams } = options;
    const { snap } = internal;
    const { fullKeyPath, value } = opParams;
    Object.keys(keyIds).forEach((confKey) => {
      if (writeKey.startsWith(confKey) && M$1(snap, fullKeyPath) !== value) {
        keyIds[confKey].forEach((id) => n$2(ids, id));
      }
    });
  }
  function handleOperate(opParams, opts) {
    var _a;
    const { isChanged, fullKeyPath, keyPath, parentType, value } = opParams;
    const { internal, mutateCtx } = opts;
    const { arrKeyDict, isReactive, readKeys, from } = mutateCtx;
    const { sharedKey } = internal;
    const arrLike = isArrLike(parentType);
    const currReactive = REACTIVE_META.current();
    if (opParams.op === "get") {
      if (arrLike) {
        arrKeyDict[getDepKeyByPath(keyPath, sharedKey)] = 1;
      }
      const depKey = getDepKeyByPath(fullKeyPath, sharedKey);
      readKeys[depKey] = 1;
      if (mutateCtx.enableDep) {
        if (currReactive.onRead) {
          currReactive.onRead(opParams);
        } else {
          const runingFnCtx = getRunningFn().fnCtx;
          if (runingFnCtx) {
            recordFnDepKeys([depKey], { sharedKey });
          }
          if (isReactive) {
            recordBlockDepKey([depKey]);
            recordLastest(sharedKey, value, internal.sharedState, depKey, fullKeyPath);
          }
          (_a = internal.onRead) == null ? void 0 : _a.call(internal, opParams);
        }
      }
      return;
    }
    if (MUTATE3 === from) {
      const { delPathAoa, fnCtx } = getRunningFn();
      fnCtx && delPathAoa.push(keyPath);
    }
    if (!isChanged) {
      return;
    }
    const { moduleName, ruleConf, level1ArrKeys } = internal;
    const { writeKeyPathInfo, ids, globalIds, writeKeys } = mutateCtx;
    const writeKey = getDepKeyByPath(fullKeyPath, sharedKey);
    if (currReactive.key) {
      if (currReactive.isTop) {
        n$2(currReactive.writeKeys, writeKey);
      } else if (currReactive.from === MUTATE3) {
        n$2(getSafeFnCtx(currReactive.fnKey).subFnInfo.writeKeys || [], writeKey);
      }
    }
    if (arrLike) {
      const arrKey2 = getDepKeyByPath(keyPath, sharedKey);
      writeKeyPathInfo[arrKey2] = { sharedKey, moduleName, keyPath };
      writeKeys[arrKey2] = 1;
    }
    const { hasIds, hasGlobalIds, stopDepInfo } = ruleConf;
    writeKeyPathInfo[writeKey] = { sharedKey, moduleName, keyPath: fullKeyPath };
    const arrKey = D$1(arrKeyDict, writeKey);
    if (arrKey) {
      writeKeys[arrKey] = 1;
    }
    const depKeyInfo = { sharedKey, keyPath: fullKeyPath, depKey: writeKey };
    if (!cutDepKeyByStop(depKeyInfo, {
      stopDepInfo,
      level1ArrKeys,
      recordCb: (key) => {
        writeKeys[key] = 1;
      }
    })) {
      writeKeys[writeKey] = 1;
    }
    if (hasIds) {
      putId(ruleConf.idsDict, { ids, writeKey, internal, opParams });
    }
    if (hasGlobalIds) {
      putId(ruleConf.globalIdsDict, { ids: globalIds, writeKey, internal, opParams });
    }
    if (isReactive) {
      nextTickFlush(sharedKey);
    } else {
      markExpired(sharedKey);
    }
  }
  function handleDict(draftNode, dict) {
    Object.keys(dict).forEach((key) => {
      draftNode[key] = dict[key];
    });
  }
  function getStateNode(sharedState, forAtom) {
    if (!forAtom) {
      return sharedState;
    }
    markIgnore(true);
    const state = sharedState.val;
    markIgnore(false);
    return state;
  }
  function handlePartial(opts) {
    const { partial, forAtom, draftRoot, draftNode } = opts;
    if (!partial) {
      return;
    }
    if (!forAtom) {
      isDict(partial) && handleDict(draftNode, partial);
      return;
    }
    const val = partial.val;
    if (isDict(draftNode)) {
      if (isDict(val)) {
        handleDict(draftNode, val);
      } else {
        console.warn("dict atom deny to handle a non-dict returned value!");
      }
      return;
    }
    draftRoot.val = val;
  }
  function beforeCommit(opts, draftRoot, moduleName) {
    const { internal, mutateCtx } = opts;
    const draft = getStateNode(draftRoot, internal.forAtom);
    const { from, sn, desc } = mutateCtx;
    internal.lifecycle.beforeCommit({ from, draftRoot, draft, desc, sn, moduleName });
    runMiddlewares(internal, draftRoot, draft, sn);
  }
  function execFinish(commitOpts, draftRoot, draftNode, partial) {
    const { mutateCtx, internal } = commitOpts;
    const { writeKeys, writeKeyPathInfo, handleCbReturn, sn, desc, from } = mutateCtx;
    const { forAtom, moduleName, lifecycle } = internal;
    if (handleCbReturn) {
      handlePartial({ partial, forAtom, draftRoot, draftNode });
    }
    if (lifecycle.hasBeforeCommit) {
      beforeCommit(commitOpts, draftRoot, moduleName);
    }
    mutateCtx.depKeys = Object.keys(writeKeys);
    DRAFT_ROOT.del();
    const nextState = finishDraft(draftRoot);
    commitOpts.state = nextState;
    if (nextState === internal.rawState) {
      return;
    }
    mutateCtx.triggerReasons = Object.values(writeKeyPathInfo);
    commitState(commitOpts);
    emitDataChanged(internal, mutateCtx);
    internal.lifecycle.afterCommit({ state: nextState, moduleName, sn, desc, from });
  }
  function fillMutateCtx(mutateCtx, innerSetOptions) {
    const { ids, globalIds, from, desc, fnKey, payloadArgs } = innerSetOptions;
    if (ids) {
      ids.forEach((id) => n$2(mutateCtx.ids, id));
    }
    if (globalIds) {
      globalIds.forEach((id) => n$2(mutateCtx.globalIds, id));
    }
    from && (mutateCtx.from = from);
    desc && (mutateCtx.desc = desc);
    fnKey && (mutateCtx.fnKey = fnKey);
    if (payloadArgs !== void 0) {
      mutateCtx.payloadArgs = payloadArgs;
    }
  }
  function prepareDeepMutate(opts) {
    const { internal, setFactoryOpts } = opts;
    const { forAtom, rawState } = internal;
    const mutateCtx = newMutateCtx(setFactoryOpts);
    const draftRoot = createDraft(rawState, {
      // fix issue https://github.com/heluxjs/helux/issues/166
      autoRevoke: false,
      customKeys: OP_KEYS,
      onOperate: (opParams) => {
        if (opParams.isCustom) {
          return handleCustomKey(opParams, forAtom, internal.sharedKey);
        }
        handleOperate(opParams, { internal, mutateCtx });
      }
    });
    DRAFT_ROOT.set(draftRoot, forAtom);
    const draftNode = getStateNode(draftRoot, forAtom);
    if (forAtom) {
      mutateCtx.readKeys = {};
    }
    return {
      draftRoot,
      draftNode,
      finishMutate(partial, innerSetOptions = {}) {
        fillMutateCtx(mutateCtx, innerSetOptions);
        const commitOpts = { state: {}, mutateCtx, internal };
        execFinish(commitOpts, draftRoot, draftNode, partial);
      }
    };
  }
  var noopAny2 = () => {
  };
  var taskProm = /* @__PURE__ */ new Map();
  function getInput(internal, fnItem2) {
    const { forAtom, rawState } = internal;
    const { deps, extraBound: boundStateInfo } = fnItem2;
    if (forAtom) {
      return i$2(deps, rawState.val, boundStateInfo);
    }
    return i$2(deps, rawState, boundStateInfo);
  }
  function isTaskProm(task) {
    return taskProm.get(task) ?? false;
  }
  function callAsyncMutateFnLogic(targetState, options) {
    const { sn, getArgs = f$2, getPayloadArgs = f$2, from, throwErr, isFirstCall, fnItem: fnItem2, mergeReturn, extraArgs } = options;
    const { desc = "", depKeys, task = noopAny2, extraBound } = fnItem2;
    const internal = getInternal(targetState);
    const { sharedKey } = internal;
    const customOptions = { desc, sn, from };
    const statusKey = getStatusKey(from, desc);
    const payloadArgs = getPayloadArgs();
    const { draft, draftRoot } = buildReactive(internal, { desc, from, payloadArgs });
    const flush2 = (desc2) => {
      innerFlush(sharedKey, desc2);
    };
    const setState = (cb) => {
      flush2(desc);
      const { finish } = internal.setStateFactory(customOptions);
      return finish(cb);
    };
    const input = FROM.MUTATE === from ? getInput(internal, fnItem2) : [];
    const defaultParams = { isFirstCall, desc, setState, input, draft, draftRoot, flush: flush2, extraBound, extraArgs };
    const args = getArgs(defaultParams) || [defaultParams];
    const isProm = taskProm.get(task);
    const isUnconfirmedFn = isProm === void 0;
    const setStatus = (loading, err, ok) => {
      if (isUnconfirmedFn || isProm) {
        setLoadStatus(internal, statusKey, { loading, err, ok });
      }
    };
    setStatus(true, null, false);
    const handleErr = (err) => {
      FN_DEP_KEYS.del();
      setStatus(false, err, false);
      if (throwErr) {
        throw err;
      }
      return { snap: internal.snap, err, result: null };
    };
    const handlePartial2 = (partial) => {
      if (mergeReturn) {
        partial && setState(partial);
      }
      setStatus(false, null, true);
      flush2(desc);
      return { snap: internal.snap, err: null, result: partial };
    };
    try {
      const result = task(...args);
      const isProm2 = A$2(result);
      taskProm.set(task, isProm2);
      if (isProm2) {
        return Promise.resolve(result).then((result2) => {
          return handlePartial2(result2);
        }).catch(handleErr);
      }
      return handlePartial2(result);
    } catch (err) {
      return handleErr(err);
    }
  }
  function callMutateFnLogic(targetState, options) {
    const { sn, getArgs = f$2, getPayloadArgs = f$2, from, throwErr, isFirstCall = false, fnItem: fnItem2, extraArgs } = options;
    const { desc = "", watchKey, fn = noopAny2, extraBound } = fnItem2;
    const isMutate = FROM.MUTATE === from;
    isMutate && TRIGGERED_WATCH.set(watchKey);
    const internal = getInternal(targetState);
    const { setStateFactory, forAtom, sharedRoot } = internal;
    const enableDep = isMutate && isFirstCall;
    const setFactoryOpts = { desc, sn, from, isFirstCall, enableDep };
    const setState = (cb) => {
      const { finish: finish2 } = setStateFactory(setFactoryOpts);
      return finish2(cb, { from, desc, payloadArgs: getPayloadArgs() });
    };
    const state = getStateNode(sharedRoot, forAtom);
    const input = isMutate ? getInput(internal, fnItem2) : [];
    const { draftNode: draft, draftRoot, finish } = setStateFactory(setFactoryOpts);
    const args = getArgs({ draft, draftRoot, setState, desc, input, extraArgs }) || [
      draft,
      { input, state, draftRoot, isFirstCall, extraBound, extraArgs }
    ];
    try {
      const fnCtx = getSafeFnCtx(fnItem2.watchKey);
      if (fnCtx.dcErrorInfo.err) {
        alertDepKeyDeadCycleErr(internal, fnCtx.dcErrorInfo);
        return { snap: internal.snap, err: null, result: null };
      }
      const result = fn(...args);
      finish(result, { fnKey: fnCtx.fnKey });
      afterFnRun(internal, fnItem2, isFirstCall);
      return { snap: internal.snap, err: null, result: null };
    } catch (err) {
      afterFnRun(internal, fnItem2, isFirstCall);
      if (throwErr) {
        throw err;
      }
      return { snap: internal.snap, err, result: null };
    }
  }
  function afterFnRun(internal, fnItem2, isFirstCall) {
    if (isFirstCall && !fnItem2.onlyDeps) {
      const fnCtx = getRunningFn().fnCtx;
      if (fnCtx) {
        fnItem2.depKeys = markFnEnd();
      } else {
        fnItem2.depKeys = FN_DEP_KEYS.current();
      }
      FN_DEP_KEYS.del();
    }
    const rmeta = REACTIVE_META.current();
    if (rmeta.isTop && rmeta.fnKey === fnItem2.watchKey) {
      probeDepKeyDeadCycle(internal, getSafeFnCtx(fnItem2.watchKey), rmeta.writeKeys);
    }
    TRIGGERED_WATCH.del();
  }
  function initFnItem(internal, fnItem2) {
    flushActive();
    FN_DEP_KEYS.del();
    markIgnore(false);
    const fnCtx = getRunningFn().fnCtx;
    if (fnCtx) {
      fnCtx.subFnInfo = fnItem2;
      fnCtx.checkDeadCycle = fnItem2.checkDeadCycle ?? internal.checkDeadCycle;
      fnItem2.watchKey = fnCtx.fnKey;
    }
    if (fnItem2.onlyDeps) {
      fnItem2.depKeys = markFnEnd();
    }
  }
  function watchAndCallMutateDict(options) {
    const { target, dict } = options;
    const keys = Object.keys(dict);
    const watchFnCtxMap = {};
    if (!keys.length) return watchFnCtxMap;
    const internal = getInternal(target);
    const { mutateFnDict, usefulName, forAtom, sharedRoot } = internal;
    const emitErrToPlugin = (err) => emitErr(internal, err);
    keys.forEach((descKey) => {
      const item = mutateFnDict[descKey];
      watchFnCtxMap[descKey] = createWatchLogic(
        ({ sn, isFirstCall }) => {
          if (isFirstCall) {
            initFnItem(internal, item);
          }
          if (!internal.enableMutate) {
            return;
          }
          const { desc, fn, task, immediate } = item;
          const dc = inDeadCycle(usefulName, desc);
          try {
            if (dc.isIn) {
              throw dcErr(usefulName, dc.cycle, desc);
            }
            const baseOpts = { sn, throwErr: true, isFirstCall, fnItem: item, from: FROM.MUTATE };
            if (fn && (isFirstCall || !task)) {
              callMutateFnLogic(target, baseOpts);
            }
            if (task) {
              isFirstCall && (item.depKeys = markFnEnd());
              const canRunAtFirstCall = isFirstCall && (immediate ?? !fn);
              if (!isFirstCall || canRunAtFirstCall) {
                const ret = callAsyncMutateFnLogic(target, baseOpts);
                ret.catch(emitErrToPlugin);
              }
            }
            return item;
          } catch (err) {
            if (err.cause === "DeadCycle") {
              analyzeErrLog(usefulName, err, internal.alertDeadCycleErr);
            }
            emitErrToPlugin(err);
          }
        },
        {
          deps: () => {
            if (!item.deps) return [];
            return item.deps(getStateNode(sharedRoot, forAtom), item.extraBound) || [];
          },
          sharedState: target,
          scopeType: SCOPE_TYPE.STATIC,
          immediate: true
        }
      );
    });
    return watchFnCtxMap;
  }
  var { ACTION: ACTION2 } = FROM;
  function innerCreate(state, options) {
    const { label, throwErr, desc = "", task, mergeReturn = true, isMultiPayload = false } = options;
    const outThrowErr = ensureBool(throwErr, false);
    const internal = checkSharedStrict(state, { label });
    const { forAtom } = internal;
    const action2 = (...args) => {
      let payloadArg = args[0];
      let payloadArgs = [payloadArg];
      let throwFnErr = args[1];
      if (isMultiPayload) {
        payloadArg = args;
        payloadArgs = args;
        throwFnErr = void 0;
      }
      const throwErrVar = ensureBool(throwFnErr, outThrowErr);
      const fnItem2 = newMutateFnItem({ desc, task, depKeys: [] });
      const dispatch = (task2, payload) => {
        if (!task2.__action) {
          return task2(payload);
        }
        return task2.__action(payload);
      };
      return callAsyncMutateFnLogic(state, {
        fnItem: fnItem2,
        from: ACTION2,
        mergeReturn,
        throwErr: throwErrVar,
        // action task 默认不抛错误
        getArgs: ({ draft, draftRoot, setState, desc: desc2, flush: flush2 }) => {
          const merge = (partial) => {
            handlePartial({ partial, forAtom, draftRoot, draftNode: draft });
          };
          const payload = payloadArg;
          return [{ draft, draftRoot, setState, desc: desc2, payload, payloadArgs, flush: flush2, merge, dispatch }];
        },
        getPayloadArgs: () => payloadArgs
      });
    };
    setLoadStatus(internal, getStatusKey(ACTION2, desc), { loading: false, ok: true, err: null });
    action2.__sharedKey = internal.sharedKey;
    action2.__fnName = desc;
    action2.__task = task;
    task.__action = action2;
    return action2;
  }
  function action(sharedState) {
    return (mergeReturn) => (task, desc = "", throwErr, isMultiPayload) => innerCreate(sharedState, { task, desc, label: "action", mergeReturn, throwErr, isMultiPayload });
  }
  var toMutateRet = (ret) => [ret.snap, ret.err];
  function runMutateFnItem(options) {
    const { target, desc: inputDesc = "", forTask = false, throwErr, extraArgs } = options;
    const { mutateFnDict, snap } = getInternal(target);
    const desc = inputDesc || SINGLE_MUTATE;
    const item = mutateFnDict[desc];
    if (!item) return { snap, err: new Error(`mutate fn ${desc} not defined`), result: null };
    if (forTask && !item.task) return { snap, err: new Error(`mutate task ${desc} not defined`), result: null };
    const throwErrVar = ensureBool(throwErr, false);
    const baseOpts = { sn: 0, fnItem: item, from: FROM.MUTATE, throwErr: throwErrVar, extraArgs };
    if (forTask) {
      return callAsyncMutateFnLogic(target, baseOpts);
    }
    return callMutateFnLogic(target, baseOpts);
  }
  function makeWitness(target, options) {
    const { desc, oriDesc, internal, watchFnCtx } = options;
    return {
      run: (throwErr) => {
        const ret = runMutateFnItem({ target, desc, throwErr });
        return toMutateRet(ret);
      },
      // 呼叫异步函数的句柄
      runTask: (throwErr) => Promise.resolve(runMutateFnItem({ target, desc, forTask: true, throwErr })).then(toMutateRet),
      cancel: () => {
        delFnDep(watchFnCtx);
        delete internal.mutateFnDict[desc];
      },
      desc,
      oriDesc,
      getSnap: () => internal.snap,
      snap: internal.snap,
      /** for initLoadingCtx */
      __sharedKey: internal.sharedKey
    };
  }
  function configureMutateFn(options) {
    const { target, fnItem: fnItem2, label, extraTarget } = options;
    const internal = checkSharedStrict(target, { label });
    const stdFnItem = parseMutateFn(fnItem2, "", internal.mutateFnDict);
    if (!stdFnItem) {
      throw new Error("not a fn or fnItem { fn }");
    }
    if (extraTarget) {
      stdFnItem.extraBound = getBoundStateInfo(extraTarget);
    }
    const { desc, oriDesc } = stdFnItem;
    internal.mutateFnDict[desc] = stdFnItem;
    stdFnItem.enabled = internal.enableMutate;
    const dict = { [desc]: stdFnItem };
    let watchFnCtx;
    if (internal.enableMutate) {
      const retMap = watchAndCallMutateDict({ target, dict });
      watchFnCtx = retMap[desc];
    }
    return makeWitness(target, { desc, oriDesc, internal, watchFnCtx });
  }
  function configureMutateDict(options) {
    const { target, fnDict, label } = options;
    const internal = checkSharedStrict(target, { label });
    const dict = parseMutate(fnDict, internal.mutateFnDict, internal.enableMutate);
    if (options.extraTarget) {
      const extraBound = getBoundStateInfo(options.extraTarget);
      Object.keys(dict).forEach((key) => dict[key].extraBound = extraBound);
    }
    let watchFnCtxMap = {};
    if (internal.enableMutate) {
      watchFnCtxMap = watchAndCallMutateDict({ target, dict });
    }
    const witnessDict = {};
    Object.keys(dict).forEach((desc) => {
      witnessDict[desc] = makeWitness(target, { desc, oriDesc: desc, internal, watchFnCtx: watchFnCtxMap[desc] });
    });
    return witnessDict;
  }
  function prepareParms(target, options) {
    const { label, descOrOptions, forTask = false } = options;
    const { desc, strict, throwErr, extraArgs } = parseCreateMutateOpt(descOrOptions);
    if (!desc) {
      return { ok: false, desc, forTask, throwErr, err: new Error("miss desc") };
    }
    const internal = checkShared(target, { label, strict });
    if (!internal) {
      return { ok: false, desc, forTask, throwErr, extraArgs, err: new Error("not a valid atom or shared result") };
    }
    return { ok: true, desc, forTask, throwErr, extraArgs, err: null };
  }
  function runMutateLogic(target, options) {
    const { ok, desc, forTask, err, throwErr, extraArgs } = prepareParms(target, options);
    if (!ok) {
      if (throwErr) {
        throw err;
      }
      return forTask ? Promise.resolve([target, err]) : [target, err];
    }
    const result = runMutateFnItem({ target, desc, forTask, throwErr, extraArgs });
    return forTask ? Promise.resolve(result).then(toMutateRet) : toMutateRet(result);
  }
  function runMutate(target, descOrOptions) {
    return runMutateLogic(target, { descOrOptions, label: "runMutate" });
  }
  function runMutateTask(target, descOrOptions) {
    return runMutateLogic(target, { descOrOptions, label: "runMutateTask", forTask: true });
  }
  function mutate(target, extraTarget) {
    return (fnItem2) => configureMutateFn({ target, extraTarget, fnItem: fnItem2, label: "mutate" });
  }
  function mutateDict(target, extraTarget) {
    return (fnDict) => configureMutateDict({ target, extraTarget, fnDict, label: "mutateDict" });
  }
  function defineMutateFnItem(fnItem2) {
    return fnItem2;
  }
  function prepareDowngradeMutate(opts) {
    const { internal, setFactoryOpts } = opts;
    const { rawState, forAtom, stopDepth, sharedKey } = internal;
    const mutateCtx = newMutateCtx(setFactoryOpts);
    const copied = { ...rawState };
    const handleValueChange = (target, key, value, parentKeyPath) => {
      const opParams = newOpParams(key, value, { parentType: getDataType(target), parentKeyPath });
      handleOperate(opParams, { internal, mutateCtx });
      P$1(copied, opParams.fullKeyPath, value);
    };
    const toShallowProxy = (obj, keyLevel, parentKeyPath) => createDpOb(obj, {
      set: (target, key, value) => {
        handleValueChange(target, key, value, parentKeyPath);
        return true;
      },
      get: (target, key) => {
        const value = target[key];
        if (OP_KEYS.includes(key)) {
          return handleHeluxKey(keyLevel === 1, forAtom, sharedKey, key, value);
        }
        const opParams = newOpParams(key, value, { isChanged: false, parentKeyPath, op: "get", parentType: getDataType(target) });
        if (keyLevel < stopDepth && isDict(value)) {
          return toShallowProxy(value, keyLevel + 1, opParams.fullKeyPath);
        }
        return M$1(copied, opParams.fullKeyPath);
      }
    });
    const downgradeDraft = toShallowProxy(copied, 1, []);
    DRAFT_ROOT.set(downgradeDraft, forAtom);
    const draftNode = forAtom ? downgradeDraft.val : downgradeDraft;
    return {
      draftRoot: downgradeDraft,
      draftNode,
      finishMutate(partial, innerSetOptions = {}) {
        fillMutateCtx(mutateCtx, innerSetOptions);
        const commitOpts = { state: {}, mutateCtx, ...opts };
        execFinish(commitOpts, downgradeDraft, draftNode, partial);
      }
    };
  }
  function getEventVal(e2) {
    let val = e2;
    if (e2) {
      if (e2.persist) e2.persist();
      const { currentTarget } = e2;
      if (currentTarget && e2.type) {
        if (currentTarget.tagName === "INPUT" && currentTarget.type === "checkbox") {
          val = currentTarget.checked;
        } else {
          val = currentTarget.value;
        }
      } else if (e2.nativeEvent && e2.target) {
        val = e2.target.value;
      }
    }
    return val;
  }
  function createTargetWrap(rawState) {
    let latestPath = [];
    const target = createImmut(rawState, ({ fullKeyPath }) => {
      latestPath = fullKeyPath;
    });
    return { target, getPath: () => latestPath };
  }
  function createSyncFn(innerSetState, path, before) {
    const syncFn = (evOrVal) => {
      let val = getEventVal(evOrVal);
      innerSetState(
        (draft) => {
          const { isAtom: isAtom2, draftRoot } = DRAFT_ROOT.current();
          const params = { draft, draftRoot, path, isAtom: isAtom2, UNDEFINED };
          const newVal = before == null ? void 0 : before(val, params);
          P$1(draftRoot, path, newVal !== void 0 ? newVal : val);
        },
        { from: FROM.SYNC }
      );
    };
    return syncFn;
  }
  function syncerFn(keyPath, internal) {
    const { sharedKey, innerSetState } = internal;
    let cacheKey = getDepKeyByPath(keyPath, sharedKey);
    let dataSyncer = dataSyncerCahce.get(cacheKey);
    if (!dataSyncer) {
      dataSyncer = createSyncFn(innerSetState, keyPath);
      dataSyncerCahce.set(cacheKey, dataSyncer);
    }
    return dataSyncer;
  }
  var dataSyncerCahce = /* @__PURE__ */ new Map();
  function createSyncerBuilder(internal) {
    const { forAtom, rawState } = internal;
    if (forAtom) {
      if (!v$1(rawState.val)) {
        return syncerFn(["val"], internal);
      }
      return createDpOb(rawState.val, {
        get: (target, key) => syncerFn(["val", key], internal)
      });
    }
    return createDpOb(rawState, {
      get: (target, key) => syncerFn([key], internal)
    });
  }
  var syncFnCahce = /* @__PURE__ */ new Map();
  function createSyncFnBuilder(internal) {
    const { forAtom, sharedKey, innerSetState, rawState } = internal;
    const targetWrap = createTargetWrap(rawState);
    return (pathOrRecorder, before) => {
      let path = [];
      if (Array.isArray(pathOrRecorder)) {
        path = forAtom ? ["val", ...pathOrRecorder] : pathOrRecorder;
      } else {
        const { target, getPath } = targetWrap;
        pathOrRecorder(forAtom ? target.val : target);
        path = getPath();
      }
      let cacheKey = getDepKeyByPath(path, sharedKey);
      if (before) {
        cacheKey += `${before.toString()}`;
      }
      let syncFn = syncFnCahce.get(cacheKey);
      if (!syncFn) {
        syncFn = createSyncFn(innerSetState, path, before);
        syncFnCahce.set(cacheKey, syncFn);
      }
      return syncFn;
    };
  }
  function mapSharedToInternal(sharedRoot, sharedState, options) {
    const { deep, forAtom, sharedKey } = options;
    const ruleConf = parseRules(options);
    const isDeep = G$1(deep);
    const setStateImpl = (setFactoryOpts = {}) => {
      const mutateOptions = { internal, setFactoryOpts };
      const { finishMutate, draftRoot, draftNode } = isDeep ? prepareDeepMutate(mutateOptions) : prepareDowngradeMutate(mutateOptions);
      return {
        // 注意非 deep 模式的 finish(setState) 只支持一层依赖收集
        finish: (partialState, options2 = {}) => {
          const snap = internal.snap;
          if (partialState === snap) {
            return snap;
          }
          const partial = runPartialCb(forAtom, partialState, draftNode);
          finishMutate(partial, options2);
          return internal.snap;
        },
        draftRoot,
        draftNode
      };
    };
    const setStateFactory = (options2 = {}) => {
      return setStateImpl(options2);
    };
    const innerSetState = (partialState, options2 = {}) => {
      return setStateImpl().finish(partialState, options2);
    };
    const callSetState = (partialState, optArr) => {
      const [handleCbReturn, enableDep, setOptions] = optArr;
      flush(sharedRoot, REACTIVE_DESC.current(sharedKey));
      const ret = setStateImpl({ handleCbReturn, enableDep });
      return ret.finish(partialState, pureSetOptions(setOptions));
    };
    const setState = (partialState, options2) => callSetState(partialState, [true, true, options2]);
    const setDraft = (partialState, options2) => callSetState(partialState, [false, true, options2]);
    const insSetState = (partialState, options2) => callSetState(partialState, [true, false, options2]);
    const insSetDraft = (partialState, options2) => callSetState(partialState, [false, false, options2]);
    const internal = buildInternal(options, {
      sharedRoot,
      sharedState,
      setState,
      setDraft,
      insSetState,
      insSetDraft,
      setStateFactory,
      innerSetState,
      ruleConf,
      isDeep
    });
    internal.sync = createSyncFnBuilder(internal);
    internal.syncer = createSyncerBuilder(internal);
    setInternal(sharedRoot, internal);
    return internal;
  }
  function buildSharedObject(innerOptions, createOptions) {
    const parsedOptions = parseOptions(innerOptions, createOptions);
    const { sharedRoot, sharedState } = buildSharedState(parsedOptions);
    const internal = mapSharedToInternal(sharedRoot, sharedState, parsedOptions);
    recordMod(sharedRoot, parsedOptions);
    ensureHMRRunWell();
    watchAndCallMutateDict({ target: sharedRoot, dict: parsedOptions.mutateFnDict });
    const { draft, draftRoot } = buildReactive(internal, { from: "Reactive", desc: "" });
    internal.reactive = draft;
    internal.reactiveRoot = draftRoot;
    clearInternal(parsedOptions.moduleName, internal.loc);
    clearDcLog(internal.usefulName);
    emitShareCreated(internal);
    return { sharedRoot, sharedState, internal, parsedOptions };
  }
  var lifecycleFnNames = ["willMount", "mounted", "willUnmount", "beforeCommit", "afterCommit"];
  function defineLifecycle(lifecycleFns, internal) {
    if (!lifecycleFns) return;
    const validFns = {};
    lifecycleFnNames.forEach((name) => {
      const fn = lifecycleFns[name];
      if (!w$2(fn)) {
        return;
      }
      validFns[name] = fn;
      if (name === "beforeCommit") {
        internal.lifecycle.hasBeforeCommit = true;
      }
    });
    Object.assign(internal.lifecycle, validFns);
  }
  var { USER_STATE: USER_STATE2 } = STATE_TYPE;
  var { MUTATE: MUTATE4, ACTION: ACTION3 } = FROM;
  function ensureGlobal(apiCtx, inputStateType) {
    const stateType = inputStateType || USER_STATE2;
    if (USER_STATE2 === stateType && !getGlobalEmpty()) {
      initGlobalEmpty(apiCtx, createSharedLogic);
      initGlobalLoading(apiCtx, createSharedLogic);
    }
  }
  function defineActions(options, throwErr) {
    const { createFn, ldAction, actionDict, actionCreator, internal, apiCtx, forTp = false, isMultiPayload = false } = options;
    getLoadingInfo(createFn, { internal, from: ACTION3, apiCtx });
    const actions = {};
    const eActions = {};
    Object.keys(actionDict).forEach((key) => {
      const actionOrFnDef = actionDict[key];
      const actionTask = forTp ? actionOrFnDef.__task : actionOrFnDef;
      const eActionFn = actionCreator(false)(actionTask, key, throwErr, isMultiPayload);
      eActionFn.__fnName = key;
      eActions[key] = eActionFn;
      const actionFn = (...args) => {
        const ret = eActionFn(...args);
        if (isTaskProm(actionTask)) {
          return Promise.resolve(ret).then((data) => data.result);
        }
        return ret.result;
      };
      actionFn.__fnName = key;
      actions[key] = actionFn;
    });
    return {
      actions,
      eActions,
      getLoading: () => ldAction.getLoading(actions),
      useLoading: () => ldAction.useLoading(actions)[0],
      useLoadingInfo: () => ldAction.useLoading(actions)
    };
  }
  function ensureDict(common, dict, extra) {
    const { state, stateRoot, isAtom: isAtom2 } = common;
    const extraBound = getBoundStateInfo(extra);
    return w$2(dict) ? dict({ state, stateRoot, isAtom: isAtom2, extraBound }) : dict;
  }
  function defineMutate(options) {
    const { common, ldMutate, mutateFnDict, extra } = options;
    const dict = ensureDict(common, mutateFnDict, extra);
    const witnessDict = mutateDict(common.stateRoot, extra)(dict);
    return {
      witnessDict,
      getLoading: () => ldMutate.getLoading(witnessDict),
      useLoading: () => ldMutate.useLoading(witnessDict)[0],
      useLoadingInfo: () => ldMutate.useLoading(witnessDict)
    };
  }
  function defineMutateDerive(options) {
    const { common, ldMutate, inital, mutateFnDict, shareOptions } = options;
    const { stateRoot, useState: useState2, state, isAtom: isAtom2 } = sharex(common.apiCtx, inital, shareOptions);
    const initialCommon = { ...common, stateRoot, state, isAtom: isAtom2, internal: getInternal(stateRoot) };
    const result = defineMutate({ common: initialCommon, ldMutate, mutateFnDict, extra: common.stateRoot });
    return { derivedState: stateRoot, useDerivedState: useState2, ...result };
  }
  function defineFullDerive(options) {
    const { common, deriveFnDict, throwErr } = options;
    const dict = ensureDict(common, deriveFnDict);
    const { apiCtx, stateRoot } = common;
    const derivedResult = {};
    const helper = {};
    Object.keys(dict).forEach((key) => {
      const result2 = derive(dict[key], stateRoot);
      derivedResult[key] = result2;
      helper[key] = {
        runDerive: (te2) => innerRunDerive(result2, te2 ?? throwErr),
        runDeriveTask: (te2) => innerRunDeriveTask(result2, te2 ?? throwErr),
        useDerived: (options2) => useDerived(apiCtx, result2, options2)[0],
        useDerivedInfo: (options2) => useDerived(apiCtx, result2, options2)
      };
    });
    const result = new Proxy(derivedResult, {
      get: (t2, k2) => derivedResult[k2].val
    });
    return { result, helper };
  }
  function setEnableMutate(enabled, internal) {
    internal.enableMutate = enabled;
    if (enabled) {
      const { mutateFnDict } = internal;
      const teBeRunFns = {};
      Object.keys(mutateFnDict).forEach((key) => {
        const fnItem2 = mutateFnDict[key];
        if (!fnItem2.enabled) {
          fnItem2.enabled = true;
          teBeRunFns[key] = fnItem2;
        }
      });
      mutateDict(internal.sharedState)(teBeRunFns);
    }
  }
  function getOptions(internal) {
    const { moduleName, deep, recordLoading, stopDepth, stopArrDep, alertDeadCycleErr, checkDeadCycle, enableMutate } = internal;
    return { moduleName, deep, recordLoading, stopDepth, stopArrDep, alertDeadCycleErr, checkDeadCycle, enableMutate };
  }
  function createSharedLogic(innerOptions, createOptions) {
    const { stateType, apiCtx } = innerOptions;
    ensureGlobal(apiCtx, stateType);
    const { sharedRoot: stateRoot, sharedState: state, internal } = buildSharedObject(innerOptions, createOptions);
    const { syncer: syncer2, sync: sync2, forAtom, setState, setDraft, sharedKey, sharedKeyStr, rootValKey, reactive, reactiveRoot } = internal;
    const actionCreator = action(stateRoot);
    const actionTaskCreator = actionCreator();
    const opt = { internal, from: MUTATE4, apiCtx };
    const createFn = createSharedLogic;
    const ldAction = initLoadingCtx(createFn, { ...opt, from: ACTION3 });
    const ldMutate = initLoadingCtx(createFn, opt);
    const common = { createFn, internal, apiCtx, state, stateRoot, isAtom: forAtom };
    const acCommon = { ...common, ldAction, actionCreator };
    return {
      state,
      // atom 的 state 指向拆箱后的值，share 的 state 指向根值
      stateVal: state,
      stateRoot,
      // 指向 root
      setState,
      setDraft,
      setEnableMutate: (enabled) => setEnableMutate(enabled, internal),
      getOptions: () => getOptions(internal),
      defineActions: (throwErr, isMultiPayload) => (actionDict) => defineActions({ ...acCommon, actionDict, isMultiPayload }, throwErr),
      defineTpActions: (throwErr) => (actionDict) => defineActions({ ...acCommon, actionDict, forTp: true }, throwErr),
      defineMutateDerive: (inital, shareOptions) => (mutateFnDict) => defineMutateDerive({ common, ldMutate, inital, mutateFnDict, shareOptions }),
      defineMutateSelf: () => (mutateFnDict) => defineMutate({ common, ldMutate, mutateFnDict }),
      defineFullDerive: (throwErr) => (deriveFnDict) => defineFullDerive({ common, deriveFnDict, throwErr }),
      defineLifecycle: (lifecycle) => defineLifecycle(lifecycle, internal),
      mutate: mutate(stateRoot),
      runMutate: (descOrOptions) => runMutate(stateRoot, descOrOptions),
      runMutateTask: (descOrOptions) => runMutateTask(stateRoot, descOrOptions),
      action: actionCreator,
      call: (fn, payload, desc, throwErr) => actionTaskCreator(fn, desc, throwErr)(payload),
      useState: (options) => useAtom(apiCtx, stateRoot, options),
      useStateX: (options) => useAtomX(apiCtx, stateRoot, options),
      useForceUpdate: (presetDeps) => useGlobalForceUpdate(apiCtx, stateRoot, presetDeps),
      useLocalState: (initialState) => useMutable(apiCtx, initialState),
      useLocalForceUpdate: () => useLocalForceUpdate(apiCtx),
      getMutateLoading: ldMutate.getLoading,
      useMutateLoading: ldMutate.useLoading,
      getActionLoading: ldAction.getLoading,
      useActionLoading: ldAction.useLoading,
      getSnap: (isPrev) => getSnap(stateRoot, isPrev),
      sync: sync2,
      syncer: syncer2,
      sharedKey,
      sharedKeyStr,
      rootValKey,
      reactive,
      reactiveRoot,
      reactiveDesc: (desc) => reactiveDesc(stateRoot, desc),
      useReactive: (options) => useReactive(apiCtx, stateRoot, options),
      useReactiveX: (options) => useReactiveX(apiCtx, stateRoot, options),
      flush: (desc) => flush(stateRoot, desc),
      isAtom: forAtom
    };
  }
  function share(apiCtx, rawState, options) {
    const ctx2 = createSharedLogic({ apiCtx, rawState }, options);
    return [ctx2.stateRoot, ctx2.setState, ctx2];
  }
  function sharex(apiCtx, rawState, options) {
    return createSharedLogic({ apiCtx, rawState }, options);
  }
  function atom(apiCtx, rawState, options) {
    const ctx2 = createSharedLogic({ apiCtx, rawState, forAtom: true }, options);
    return [ctx2.stateRoot, ctx2.setState, ctx2];
  }
  function atomx(apiCtx, rawState, options) {
    return createSharedLogic({ apiCtx, rawState, forAtom: true }, options);
  }
  var dAtomCtx;
  function getDefaultAtom(apiCtx) {
    if (!dAtomCtx) {
      dAtomCtx = atomx(apiCtx, { tip: "default atom" }, { moduleName: "DefaultClassAtom" });
    }
    return dAtomCtx;
  }
  function getDefaultHX() {
    return { atom: {}, atoms: {}, deriveds: {} };
  }
  var RH = null;
  function getRH(apiCtx) {
    const { Component } = apiCtx.react;
    if (RH) {
      return RH;
    }
    RH = class RebuildHelper extends Component {
      constructor() {
        super(...arguments);
        __publicField(this, "state", {});
      }
      static getDerivedStateFromError() {
        return { hasError: true };
      }
      componentDidCatch(error, errorInfo) {
        this.props.onError(error, errorInfo);
      }
      render() {
        return this.state.hasError ? null : this.props.children;
      }
    };
    return RH;
  }
  function renderFallback(apiCtx, err, info) {
    if (info) {
      console.error(info);
    }
    return apiCtx.react.createElement("span", {}, `HeluxAtomComp render error: ${(err == null ? void 0 : err.message) || "error occurred"}`);
  }
  function ClassRenderer(props) {
    return props.renderUI();
  }
  function mergeAtoms(apiCtx, options) {
    const dAtomCtx2 = getDefaultAtom(apiCtx);
    const { atom: atom2 = dAtomCtx2.state, atomOptions, atoms = {}, atomsOptions = {} } = options || {};
    let atomKey = CLASS_ATOM;
    let singleAtom = atom2;
    Object.keys(atoms).forEach((key) => {
      if (atoms[key] === atom2) {
        atomKey = key;
        singleAtom = atoms[key];
      }
    });
    const targetAtoms = Object.assign({ [atomKey]: singleAtom, ...atoms });
    const targetAtomsOptions = Object.assign({ [atomKey]: atomOptions, ...atomsOptions });
    const atomKeys = Object.keys(atoms);
    if (!atomKeys.includes(atomKey)) {
      atomKeys.push(atomKey);
    }
    return { atoms: targetAtoms, atomsOptions: targetAtomsOptions, atomKeys, atomKey };
  }
  function makeAtomFnComp(apiCtx, UIComp, options) {
    const {
      atomKey,
      atomKeys,
      atoms = {},
      atomsOptions = {},
      deriveds = {},
      derivedsOptions = {},
      // 透传的 hx 可让类组件上的 props.hx 是一个稳定引用
      hx: outHX,
      rebuild,
      onError = f$2,
      fallback = (err, info) => renderFallback(apiCtx, err, info),
      forClass
    } = options;
    const { react, hookImpl } = apiCtx;
    const { createElement, useRef } = react;
    const { useForceUpdate, useIsStrict } = hookImpl;
    const cdata = { fc: false, rc: 0 };
    const mayClearErr = (cdata2, isStrict, data) => {
      if (!cdata2.fc) {
        return;
      }
      if (isStrict) {
        cdata2.rc += 1;
        if (cdata2.rc % 2 === 0) {
          data.err = null;
        }
      } else {
        data.err = null;
      }
    };
    return function AtomComp(props) {
      const dataRef = useRef({ hx: outHX || getDefaultHX(), err: null, key: Date.now(), isStrict: false });
      const forceUpdate = useForceUpdate();
      useIsStrict((isStrict2) => dataRef.current.isStrict = isStrict2);
      const { hx, key, err, isStrict } = dataRef.current;
      const handleError = (error, info) => {
        dataRef.current.key = Date.now();
        dataRef.current.err = { error, info };
        if (rebuild) {
          cdata.fc = true;
          forceUpdate();
        } else {
          onError(error, info);
        }
      };
      atomKeys.forEach((key2) => {
        const atom2 = atoms[key2];
        const atomCtx = useAtomX(apiCtx, atom2, atomsOptions[key2]);
        if (atomKey === key2) {
          Object.assign(hx.atom, atomCtx);
        }
        hx.atoms[key2] = atomCtx;
      });
      Object.keys(deriveds).forEach((key2) => {
        const result = deriveds[key2];
        const options2 = { ...derivedsOptions[key2] || {} };
        const resultTuple = useDerived(apiCtx, result, options2);
        hx.deriveds[key2] = resultTuple;
      });
      const passProps = forClass ? props : { ...props, hx };
      let ui = createElement(UIComp, passProps);
      if (rebuild) {
        const RebuildHeper = getRH(apiCtx);
        if (err) {
          ui = fallback(err.error, err.info);
        }
        mayClearErr(cdata, isStrict, dataRef.current);
        return createElement(RebuildHeper, { key, onError: handleError }, ui);
      }
      return ui;
    };
  }
  function assignThisHX(thisRef) {
    return thisRef.props.hx || {};
  }
  function getHX(props, context) {
    const hx = props.hx || context.hx || {};
    const { atom: atom2 = {}, atoms = {} } = hx;
    if (!atom2.state && atoms[CLASS_ATOM]) {
      hx.atom = atoms[CLASS_ATOM];
    }
    return hx;
  }
  function makeWithAtomOptions(options) {
    return options;
  }
  function bindAtom(apiCtx, ClassComp, options) {
    const { hx, memo, propsAreEqual, ...rest } = options || {};
    const { atoms, atomsOptions, atomKeys, atomKey } = mergeAtoms(apiCtx, options);
    const FnComp = makeAtomFnComp(apiCtx, ClassComp, { ...rest, atomKey, atomKeys, atoms, atomsOptions });
    return memo ? apiCtx.react.memo(FnComp, propsAreEqual) : FnComp;
  }
  function withAtom(apiCtx, ClassComp, options) {
    const { react } = apiCtx;
    const { createElement, PureComponent, Fragment } = react;
    const {
      deriveds = {},
      derivedsOptions,
      memo = true,
      propsAreEqual,
      isPropsProxy = false,
      fallback = (err, info) => renderFallback(apiCtx, err, info),
      rebuild
    } = options || {};
    const { atoms, atomsOptions, atomKeys, atomKey } = mergeAtoms(apiCtx, options);
    const ToBeExtendedClass = isPropsProxy === false ? ClassComp : PureComponent;
    class HeluxClass extends ToBeExtendedClass {
      constructor(props, context) {
        const hx = { atom: {}, atoms: {}, deriveds: {} };
        atomKeys.forEach((key) => {
          const atom2 = atoms[key];
          const internal = getInternal(atom2);
          if (!internal) {
            throw new Error("not an atom!");
          }
          hx.atoms[key] = {
            state: internal.sharedState,
            setState: internal.setState,
            time: Date.now(),
            isAtom: internal.forAtom,
            setDraft: internal.setDraft,
            insKey: 0,
            sn: 0,
            getDeps: () => [],
            getPrevDeps: () => []
          };
        });
        Object.keys(deriveds).forEach((key) => {
          const derived = deriveds[key];
          if (!isDerivedResult(derived)) {
            throw new Error("not a derived atom!");
          }
          const val = isDerivedAtom(derived) ? derived.val : derived;
          hx.deriveds[key] = [val, { loading: false, err: null, ok: true }, { time: 0, insKey: 0, sn: 0, getDeps: () => [] }];
        });
        super(props, { ...context, hx });
        __publicField(this, "AtomComp");
        /** hx is short for helux class component atom ctx */
        __publicField(this, "hx", { atom: {}, atoms: {}, deriveds: {} });
        __publicField(this, "state", { [CLASS_ERROR]: null, [CLASS_ERROR_INFO]: null });
        Object.assign(this.hx, hx);
        const AtomComp = makeAtomFnComp(apiCtx, ClassRenderer, {
          atomKey,
          atomKeys,
          atoms,
          atomsOptions,
          deriveds,
          derivedsOptions,
          hx: this.hx,
          rebuild,
          // 注意此处不能直接传递句柄，否则可能造成this丢失然后报错
          // Uncaught TypeError: this.setState is not a function
          onError: (err, info) => this.onError(err, info),
          fallback,
          forClass: true
        });
        this.AtomComp = AtomComp;
      }
      // 这一行不能注释掉，否则 isPropsProxy=true 且 rebuild=false 时，错误将不能被捕捉到
      static getDerivedStateFromError(err) {
        var _a;
        (_a = super.getDerivedStateFromError) == null ? void 0 : _a.call(this, err);
        return { [CLASS_ERROR]: err };
      }
      componentDidCatch(error, errorInfo) {
        var _a;
        (_a = super.componentDidCatch) == null ? void 0 : _a.call(this, error, errorInfo);
      }
      componentDidMount() {
        var _a;
        (_a = super.componentDidMount) == null ? void 0 : _a.call(this);
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        var _a;
        (_a = super.componentDidUpdate) == null ? void 0 : _a.call(this, prevProps, prevState, snapshot);
      }
      componentWillUnmount() {
        var _a;
        (_a = super.componentWillUnmount) == null ? void 0 : _a.call(this);
      }
      onError(error, info) {
        this.setState({ [CLASS_ERROR]: error, [CLASS_ERROR_INFO]: info });
        this.forceUpdate();
      }
      getError() {
        const { [CLASS_ERROR]: error, [CLASS_ERROR_INFO]: info } = this.state;
        return { error, info };
      }
      render() {
        const { error, info } = this.getError();
        if (error) {
          return fallback(error, info);
        }
        let renderUI;
        if (isPropsProxy === false) {
          renderUI = () => createElement(Fragment, {}, super.render());
        } else {
          renderUI = () => createElement(ClassComp, { ...this.props, hx: this.hx });
        }
        return createElement(this.AtomComp, { renderUI });
      }
    }
    HeluxClass.displayName = "HeluxClass";
    return memo ? react.memo(HeluxClass, propsAreEqual) : HeluxClass;
  }
  function defineStore(apiCtx) {
    return (options) => {
      const { stateOptions, derivedOptions, moduleName, lifecycle = {} } = options;
      const ctx2 = sharex(apiCtx, options.state, { moduleName, ...stateOptions || {} });
      const { state, reactive } = ctx2;
      ctx2.defineLifecycle(lifecycle);
      const derivedDef = options.derived || {};
      const mutateDeriveInput = {};
      const derivedStateInit = {};
      const getDerived = () => dm.derivedState;
      Object.keys(derivedDef).forEach((key) => {
        derivedStateInit[key] = void 0;
        mutateDeriveInput[key] = (draft) => {
          draft[key] = derivedDef[key]({ state, getDerived });
        };
      });
      const dm = ctx2.defineMutateDerive(derivedStateInit, derivedOptions)(mutateDeriveInput);
      const actionsDef = options.actions || {};
      const actionsInput = {};
      Object.keys(actionsDef).forEach((key) => {
        actionsInput[key] = ({ draft, payload }) => {
          return options.actions[key]({ state: draft, payload, derived: dm.derivedState });
        };
      });
      const { actions, useLoading, getLoading } = ctx2.defineActions()(actionsInput);
      return {
        useState: () => {
          const tuple = ctx2.useState();
          return tuple;
        },
        useDerived: () => {
          const [derived] = dm.useDerivedState();
          return derived;
        },
        useLoading,
        actions,
        state,
        reactive,
        derived: dm.derivedState,
        getLoading,
        // 提供给 class 组件绑定 store 之用
        withStore: (ClassComp, options2) => withAtom(ClassComp, { ...options2 || {}, atom: state, derivedAtom: dm.derivedState })
      };
    };
  }
  function innerCreate2(target, options) {
    const { label, isSyncer } = options;
    const internal = checkSharedStrict(target, { label });
    const fn = isSyncer ? createSyncerBuilder : createSyncFnBuilder;
    return fn(internal);
  }
  function sync(target) {
    return innerCreate2(target, { label: "sync" });
  }
  function syncer(target) {
    return innerCreate2(target, { label: "syncer", isSyncer: true });
  }
  var SIZE_LIMIT2 = 100;
  var EXPIRE_LIMIT = 5e3;
  function newBlockCtx(key, enableStatus) {
    return {
      key,
      results: [],
      depKeys: [],
      enableStatus,
      collected: false,
      mounted: false,
      renderAtomOnce: false,
      time: 0,
      status: { loading: false, err: null, ok: true }
    };
  }
  function initBlockCtx(isDynamic, enableStatus = false) {
    const blockScope = getBlockScope();
    if (isDynamic) {
      blockScope.initCount += 1;
    }
    const blockKey = genBlockKey();
    const blockCtx = newBlockCtx(blockKey, enableStatus);
    if (!RUN_AT_SERVER) {
      getBlockCtxMap(isDynamic).set(blockKey, blockCtx);
    }
    return blockCtx;
  }
  function markBlockMounted(blockCtx) {
    const blockScope = getBlockScope();
    blockCtx.mounted = true;
    blockCtx.time = Date.now();
    blockScope.mountedCount += 1;
  }
  function delBlockCtx(blockBey, isDynamic) {
    const blockScope = getBlockScope();
    const map = getBlockCtxMap(isDynamic);
    map.delete(blockBey);
    if (isDynamic && map.size === SIZE_LIMIT2 && blockScope.initCount - blockScope.mountedCount > 2) {
      blockScope.initCount = 0;
      blockScope.mountedCount = 0;
      const now = Date.now();
      map.forEach((item, key) => {
        if (!item.mounted && now - item.time > EXPIRE_LIMIT) {
          map.delete(key);
        }
      });
    }
  }
  function markBlockFnStart(blockCtx, isDynamic) {
    const blockScope = getBlockScope();
    blockScope.runningKey = blockCtx.key;
    blockScope.isDynamic = isDynamic;
  }
  function markBlockFnEnd(blockCtx) {
    const blockScope = getBlockScope();
    blockScope.runningKey = "";
    blockScope.isDynamic = false;
    blockCtx.collected = true;
  }
  function useStateDep(apiCtx, blockCtx, forceUpdate) {
    useWatchSimpleLogic(apiCtx, forceUpdate, { manualDepKeys: blockCtx.depKeys });
  }
  function useDep(apiCtx, blockCtx, forceUpdate) {
    let status = { loading: false, err: null, ok: true };
    useStateDep(apiCtx, blockCtx, forceUpdate);
    blockCtx.results.forEach((result) => {
      const fnCtx = useDerivedSimpleLogic(apiCtx, { result, forAtom: isDerivedAtom(result), showLoading: blockCtx.enableStatus });
      if (!fnCtx.status.ok) {
        status = fnCtx.status;
      }
    });
    return status;
  }
  function useDelBlockCtxEffect(apiCtx, blockCtx, isDynamic) {
    apiCtx.react.useEffect(() => {
      if (!blockCtx.mounted) {
        markBlockMounted(blockCtx);
      }
      return () => {
        delBlockCtx(blockCtx.key, isDynamic);
      };
    }, [blockCtx]);
  }
  var alwaysEqual = () => true;
  var noopVal = (val) => val;
  function getAllPath(keyPath) {
    const paths = [];
    for (let i2 = 1; i2 <= keyPath.length; i2++) {
      paths.push(keyPath.slice(0, i2));
    }
    return paths;
  }
  function wrapComp(apiCtx, Comp, displayName, needMemo, compare) {
    const CompVar = Comp;
    CompVar.displayName = displayName;
    return apiCtx.react.memo(CompVar, compare);
  }
  function wrapSignalComp(apiCtx, options) {
    const { sharedState, depKey, keyPath, compare, sharedKey, format = noopVal } = options;
    const Comp = function() {
      const insCtx = useAtomSimpleLogic(apiCtx, sharedState, { arrDep: true });
      if (insCtx.isFirstRender) {
        if (keyPath.length >= 2) {
          const paths = getAllPath(keyPath);
          paths.forEach((keyPath2) => {
            insCtx.recordDep(
              {
                sharedKey,
                depKey: getDepKeyByPath(keyPath2, sharedKey),
                keyPath: keyPath2,
                parentKeyPath: keyPath2.slice(0, keyPath2.length - 1)
              },
              DICT
            );
          });
        } else {
          insCtx.recordDep({ sharedKey, depKey, keyPath });
        }
      }
      const val = M$1(insCtx.internal.rawState, keyPath);
      return format(val);
    };
    return wrapComp(apiCtx, Comp, "HeluxSignal", true, compare);
  }
  function wrapDerivedAtomSignalComp(apiCtx, options) {
    const Comp = function() {
      const { result, format = noopVal } = options;
      const fnCtx = useDerivedSimpleLogic(apiCtx, { result, forAtom: true });
      return format(fnCtx.proxyResult.val);
    };
    return wrapComp(apiCtx, Comp, "HeluxDerivedAtomSignal", true, options.compare);
  }
  function wrapDerivedSignalComp(apiCtx, options) {
    const Comp = function() {
      const { result, keyPath, format = noopVal } = options;
      useDerivedSimpleLogic(apiCtx, { result, forAtom: false });
      return format(M$1(result, keyPath));
    };
    return wrapComp(apiCtx, Comp, "HeluxDerivedSignal", true, options.compare);
  }
  function markBlockAndRunCb(blockCtx, options) {
    const { isDynamic, cb, props, ref } = options;
    const { collected, status } = blockCtx;
    if (!collected) {
      markBlockFnStart(blockCtx, isDynamic);
    }
    const blockParams = { props, status, read: l$2, ref };
    const result = cb(props, blockParams) || "";
    if (!collected) {
      markBlockFnEnd(blockCtx);
    }
    return result;
  }
  function renderResult(apiCtx, blockCtx, result) {
    const isDerivedAtomResult = isDerivedAtom(result);
    if (blockCtx.renderAtomOnce && !isDerivedAtomResult) {
      throw new Error("block cb once returned derived atom but not keep to return it in new render period!");
    }
    if (isDerivedAtomResult) {
      blockCtx.renderAtomOnce = true;
      const Comp = wrapDerivedAtomSignalComp(apiCtx, { result });
      return apiCtx.react.createElement(Comp, { status: { loading: false, err: null, ok: true } });
    }
    return getAtom(result);
  }
  function makeBlockComp(apiCtx, blockCtx, factory, options) {
    const { memo = true, compare } = options || {};
    const { key } = blockCtx;
    const { react } = apiCtx;
    const forwardRef = react.forwardRef || f$2;
    const Comp = factory();
    let RefComp = forwardRef(Comp);
    if (g$1()) {
      Comp.displayName = "HeluxKeyedBlockForHMR";
      RefComp = forwardRef((props, ref) => {
        if (ref && _$1(ref, "current")) {
          blockCtx.ref = ref;
        }
        return react.createElement(Comp, { ...props, key });
      });
    }
    const Block = memo ? react.memo(RefComp, compare) : RefComp;
    Block.displayName = "HeluxBlock";
    Block[IS_BLOCK] = true;
    return Block;
  }
  function blockNormalLogic(innerOptions, options) {
    const { cb, isDynamic, apiCtx, blockCtx } = innerOptions;
    const { useForceUpdate } = apiCtx.hookImpl;
    const useDelCtxEffect = isDynamic ? useDelBlockCtxEffect : f$2;
    return makeBlockComp(
      apiCtx,
      blockCtx,
      () => {
        return (props, inputRef) => {
          const ref = blockCtx.ref || inputRef;
          const result = markBlockAndRunCb(blockCtx, { isDynamic, cb, props, ref });
          const forceUpdate = useForceUpdate();
          useDep(apiCtx, blockCtx, forceUpdate);
          useDelCtxEffect(apiCtx, blockCtx, isDynamic);
          return renderResult(apiCtx, blockCtx, result);
        };
      },
      options
    );
  }
  function blockStatusLogic(innerOptions, options) {
    const { cb, isDynamic, apiCtx, blockCtx } = innerOptions;
    const useDelCtxEffect = isDynamic ? useDelBlockCtxEffect : f$2;
    const { useForceUpdate } = apiCtx.hookImpl;
    const { useEffect: useEffect2 } = apiCtx.react;
    return makeBlockComp(
      apiCtx,
      blockCtx,
      () => {
        return (props, inputRef) => {
          const ref = blockCtx.ref || inputRef;
          const result = markBlockAndRunCb(blockCtx, { isDynamic, cb, props, ref });
          const forceUpdate = useForceUpdate();
          const status = useDep(apiCtx, blockCtx, forceUpdate);
          useDelCtxEffect(apiCtx, blockCtx, isDynamic);
          const prevLoading = blockCtx.status.loading;
          const currLoading = status.loading;
          useEffect2(() => {
            if (prevLoading !== currLoading) {
              forceUpdate();
            }
          }, [prevLoading, currLoading]);
          blockCtx.status = status;
          return renderResult(apiCtx, blockCtx, result);
        };
      },
      options
    );
  }
  function blockLogic(innerOptions, blockOptions) {
    const stdOptions = parseBlockOptions(blockOptions);
    const { enableStatus } = stdOptions;
    const logicOpts = { ...innerOptions, blockCtx: initBlockCtx(innerOptions.isDynamic, enableStatus) };
    if (!enableStatus) {
      return blockNormalLogic(logicOpts, stdOptions);
    }
    return blockStatusLogic(logicOpts, stdOptions);
  }
  function block(apiCtx, cb, options) {
    const Block = blockLogic({ apiCtx, isDynamic: false, cb }, options);
    return Block;
  }
  function dynamicBlock(apiCtx, cb, options) {
    const Block = blockLogic({ apiCtx, isDynamic: true, cb }, options);
    return Block;
  }
  function signal(apiCtx, input, format) {
    const { react } = apiCtx;
    if (input && input[IS_BLOCK]) {
      return react.createElement(input);
    }
    const compare = alwaysEqual;
    if (w$2(input)) {
      const Comp = dynamicBlock(apiCtx, input, { compare });
      return react.createElement(Comp);
    }
    if (isDerivedAtom(input)) {
      const Comp = wrapDerivedAtomSignalComp(apiCtx, { result: input, compare, format });
      return react.createElement(Comp);
    }
    if (isAtom(input)) {
      const sharedKey2 = getSharedKey(input);
      const depKey2 = B$1("val", sharedKey2);
      const options = { sharedKey: sharedKey2, sharedState: input, depKey: depKey2, keyPath: ["val"], compare, format };
      const Comp = wrapSignalComp(apiCtx, options);
      return react.createElement(Comp);
    }
    const readedInfo = getLastest();
    const { sharedKey, val, stateOrResult, depKey, keyPath, isDerivedResult: isDerivedResult2 } = readedInfo;
    if (input === val && stateOrResult) {
      if (readedInfo.isDerivedAtom) {
        const Comp2 = wrapDerivedAtomSignalComp(apiCtx, { result: stateOrResult, compare, format });
        return react.createElement(Comp2);
      }
      if (isDerivedResult2) {
        const Comp2 = wrapDerivedSignalComp(apiCtx, { result: stateOrResult, keyPath, compare, format });
        return react.createElement(Comp2);
      }
      const Comp = wrapSignalComp(apiCtx, { sharedKey, sharedState: stateOrResult, depKey, keyPath, compare, format });
      return react.createElement(Comp);
    }
    return input;
  }
  var { shallowCompare, isDiff, isDraft } = limuUtils;
  var createShared = share;
  var $$1 = signal;
  var cst = {
    EVENT_NAME,
    RECORD_LOADING,
    VER,
    LIMU_VER
  };
  function createModelLogic(baseApi, cb, extra) {
    return cb(baseApi, extra);
  }
  function model(baseApi, cb) {
    return createModelLogic(baseApi, cb);
  }
  function modelFactory(baseApi, factory) {
    return {
      build: (extra) => {
        return createModelLogic(baseApi, factory, extra);
      }
    };
  }
  var needApiCtxFns = [
    "atom",
    "atomx",
    "share",
    "sharex",
    "defineStore",
    "bindAtom",
    "withAtom",
    "getMutateLoading",
    "getActionLoading",
    "$",
    "signal",
    "block",
    "blockStatus",
    "dynamicBlock",
    "dynamicBlockStatus"
  ];
  function shouldInjectApiCtx(key) {
    return key.startsWith("use") || needApiCtxFns.includes(key);
  }
  function to18(react) {
    return Object.assign({ useSyncExternalStore: f$2 }, react);
  }
  function buildHeluxApi(react, act) {
    const hookImpl = S$1(react);
    const baseApi = { ...hookImpl };
    const apiCtx = { react: to18(react), hookImpl, act };
    if (act) {
      hookImpl.useForceUpdate = () => {
        const [, set] = react.useState({});
        return () => act(() => set({}));
      };
    }
    const apiVar = api_exports;
    Object.keys(apiVar).forEach((key) => {
      const val = apiVar[key];
      if (shouldInjectApiCtx(key)) {
        baseApi[key] = val.bind(null, apiCtx);
      } else {
        baseApi[key] = val;
      }
    });
    const allApi = {
      model: (cb) => model(baseApi, cb),
      modelFactory: (cb) => modelFactory(baseApi, cb)
    };
    return Object.assign(allApi, baseApi);
  }
  function initHeluxContext(options) {
    const { inited: inited2, API: API2 } = getRootData();
    if (inited2) return API2;
    const { heluxCtxKey, standalone, transfer, reactLib, act } = options;
    const existedRoot = u$3[heluxCtxKey];
    const done = (key, root) => {
      const ROOT2 = root || createRoot();
      if (!ROOT2.modMap) {
        ROOT2.modMap = /* @__PURE__ */ new Map();
      }
      const api = buildHeluxApi(reactLib, act);
      setRootData({ ROOT: ROOT2, inited: true, api });
      u$3[key] = ROOT2;
      return api;
    };
    if (!existedRoot) {
      return done(heluxCtxKey);
    }
    if (standalone) {
      return done(`${String(heluxCtxKey)}_${Date.now()}`);
    }
    if (transfer) {
      const ROOT2 = createRoot();
      setRootData({ ROOT: ROOT2, inited: true });
      transfer(existedRoot, ROOT2);
    }
    return done(heluxCtxKey, existedRoot);
  }
  var a$1 = initHeluxContext({ heluxCtxKey: "__HELUX__", reactLib: require$$0__default__namespace });
  a$1.share;
  var { atom: s, atomx: o$1, share: r, sharex: u$1, defineStore: c$1, derive: n, deriveDict: d, defineDeriveTask: m, defineDeriveFnItem: l, runDerive: f, runDeriveTask: v, watch: g, watchEffect: h, useAtom: D, useAtomX: A$1, useReactive: p, useReactiveX: L, useDerived: b, useWatch: S, useWatchEffect: k, useGlobalId: w, useService: M, useOnEvent: x, useMutable: y, useMutateLoading: E, useActionLoading: F, useEffect: R, useLayoutEffect: X, useStable: T, useObject: _, useLocalForceUpdate: H, useGlobalForceUpdate: I, bindAtom: O, withAtom: U, assignThisHX: W, getHX: C, makeWithAtomOptions: G, action: j, signal: B, block: K, dynamicBlock: P, $, mutate: q, mutateDict: z, runMutate: J, runMutateTask: N, defineMutateFnItem: Q, sync: V, syncer: Y, model: Z, modelFactory: ee, emit: te, on: ae, init: ie, reactiveDesc: se, flush: oe, isAtom: re, isSharedState: ue, isDerivedAtom: ce, isDerivedResult: ne, isDraft: de, storeSrv: me, shallowCompare: le, markRaw: fe, isDiff: ve, produce: ge, getMutateLoading: he, getActionLoading: De, getDeriveLoading: Ae, getRawState: pe, getSnap: Le, getAtom: be, addMiddleware: Se, addPlugin: ke, cst: we } = a$1;
  function i(e2, t2) {
    const { state: r2, getters: s2 = {}, actions: n2 = {}, lifecycle: i2 = {} } = t2;
    let c2 = r2;
    "function" != typeof r2 && (c2 = () => r2);
    const o2 = c2(), a2 = s2, u2 = n2, d2 = i2;
    {
      const e3 = (f2 = o2, Object.keys(f2)).concat(a2).concat(u2).concat(d2), t3 = Array.from(new Set(e3));
      if (e3.length > t3.length) throw new Error("[defineStore error]: found duplicate keys in state, getters, actions, lifecycle!");
      Object.keys(a2).forEach((e4) => {
        o2[e4] = void 0;
      });
    }
    var f2;
    return { stateFn: c2, firstVerState: o2, userGetters: a2, userActions: u2, lifecycle: i2 };
  }
  function c(e2, t2, r2) {
    const { userGetters: s2, derived: n2, userActions: i2, wrapActions: c2 } = t2;
    return new Proxy({}, { get(t3, o2) {
      if (r2 && "state" === o2) return e2;
      if (o2 in e2) return e2[o2];
      if (o2 in s2) return n2[o2];
      if (o2 in i2) {
        return c2[o2];
      }
      return t3[o2];
    }, set: (t3, r3, s3) => r3 in e2 ? (e2[r3] = s3, true) : (console.warn("can not set"), false) });
  }
  function o(e2, t2, r2) {
    const { userActions: s2, userGetters: n2, derived: i2 } = t2, o2 = {};
    let a2 = {};
    Object.keys(s2).forEach((e3) => {
      o2[e3] = ({ draft: t3, payload: o3 }) => {
        const u3 = c(t3, { userGetters: n2, derived: i2, userActions: s2, wrapActions: a2 }, r2);
        return s2[e3].bind(u3).apply(null, o3);
      };
    });
    const { actions: u2, getLoading: d2, useLoading: f2 } = e2.defineActions(false, true)(o2);
    return a2 = u2, { wrapActions: u2, getLoading: d2, useLoading: f2 };
  }
  function a(e2, t2, r2) {
    const { userGetters: s2, userActions: n2 } = t2, { state: i2 } = e2, a2 = {};
    return Object.keys(s2).forEach((e3) => {
      a2[e3] = (t3) => {
        const r3 = c(t3, { userGetters: s2, derived: t3, userActions: n2, wrapActions: {} }), i3 = s2[e3].bind(r3);
        t3[e3] = i3(t3);
      };
    }), e2.defineMutateSelf()(a2), { derivedState: i2, useDerivedState: () => {
    } };
  }
  function u(e2, t2, r2) {
    const { userGetters: s2, userActions: n2, wrapActions: i2, isLayered: o2, derived: a2 } = r2, { reactive: u2 } = e2, d2 = t2, f2 = {};
    Object.keys(t2).forEach((e3) => {
      f2[e3] = (t3) => {
        const r3 = c(u2, { userGetters: s2, derived: a2, userActions: n2, wrapActions: i2 }, o2);
        d2[e3].bind(r3)(t3);
      };
    }), e2.defineLifecycle(f2);
  }
  function A(e2, t2) {
    const { firstVerState: r2, lifecycle: s2, userGetters: n2, userActions: d2, stateFn: A2 } = i(false, t2), g2 = u$1(r2, { moduleName: e2 }), { state: S2 } = g2, { derivedState: l2 } = a(g2, { userGetters: n2, userActions: d2 }), { wrapActions: p2, getLoading: G2, useLoading: y2 } = o(g2, { userGetters: n2, derived: l2, userActions: d2 });
    return u(g2, s2, { userGetters: n2, userActions: d2, wrapActions: p2 }), { getStore: () => c(g2.reactive, { userGetters: n2, derived: g2.reactive, userActions: d2, wrapActions: p2 }), useStore: (e3) => {
      const [t3] = g2.useReactive(e3);
      return c(t3, { userGetters: n2, derived: t3, userActions: d2, wrapActions: p2 });
    }, getLoading: G2, useLoading: y2, reset: () => {
      g2.setState(A2());
    }, getSnap: (e3 = true) => Le(S2, !e3), getGettersSnap: (e3 = true) => Le(S2, !e3), state: S2, reactive: g2.reactive, getters: S2, actions: p2, reactiveDesc: g2.reactiveDesc };
  }
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_notification = /* @__PURE__ */ (() => typeof GM_notification != "undefined" ? GM_notification : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  function showNotification(message, duration = 3e3) {
    const existingNotification = document.querySelector(
      ".yapi-helper-notification"
    );
    if (existingNotification) {
      existingNotification.remove();
    }
    const notification = document.createElement("div");
    notification.className = "yapi-helper-notification";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }
  function sendSystemNotification(title, message) {
    try {
      if (typeof _GM_notification === "function") {
        _GM_notification({
          text: message,
          title,
          timeout: 5e3,
          onclick: function() {
            console.log("用户点击了通知");
          }
        });
      } else if ("Notification" in window && Notification.permission === "granted") {
        new Notification(title, {
          body: message
        });
      } else if ("Notification" in window && Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, {
              body: message
            });
          }
        });
      }
    } catch (e2) {
      console.warn("系统通知不可用:", e2);
    }
  }
  const compileOptions = {
    bannerComment: "",
    declareExternallyReferenced: true,
    enablevarEnums: true,
    unreachableDefinitions: false,
    strictIndexSignatures: false,
    format: false,
    unknownAny: false
  };
  function formatJson(objectJson) {
    const cloneObject = JSON.parse(objectJson);
    if (cloneObject.properties) {
      cloneObject.additionalProperties = false;
    }
    function processNestedProperties(obj) {
      var _a;
      for (const key in obj) {
        if ((_a = obj[key]) == null ? void 0 : _a.properties) {
          obj[key].additionalProperties = false;
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
          processNestedProperties(obj[key]);
        }
      }
    }
    processNestedProperties(cloneObject);
    return cloneObject;
  }
  function getTypeNameFromPath(path) {
    if (!path) {
      return "";
    }
    const words = path.split("/").filter(Boolean);
    if (words.length === 0) {
      return "";
    }
    let typeName = "I";
    for (const word of words) {
      typeName += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return typeName;
  }
  async function convertJsonToTypeScript(json, name) {
    try {
      const formattedJson = formatJson(json);
      const result = await jstt.compile(formattedJson, name, compileOptions);
      return result;
    } catch (error) {
      console.error("📢 convertJsonToTypeScript error:", error);
      return "";
    }
  }
  async function handleData(data) {
    var _a;
    try {
      const name = getTypeNameFromPath(((_a = data.query_path) == null ? void 0 : _a.path) || data.path);
      const query = data.req_query || [];
      const reqBodyOther = data.req_body_other || "{}";
      const params = JSON.parse(reqBodyOther);
      const resBody = JSON.parse(data.res_body || "{}");
      const response = resBody.properties && resBody.properties.data || resBody;
      const [queryType, paramsType, responseType] = await Promise.all([
        convertJsonToTypeScript(JSON.stringify(query), `${name}Query`),
        convertJsonToTypeScript(JSON.stringify(params), `${name}Params`),
        convertJsonToTypeScript(JSON.stringify(response), `${name}Response`)
      ]);
      return {
        queryType,
        paramsType,
        responseType
      };
    } catch (error) {
      console.error("📢 handleData error:", error);
      throw new Error(`生成TypeScript类型失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  const defaults = {
    typeStyle: "interface",
    // 类型定义风格: interface 或 type
    requestLib: "axios",
    // 请求库: axios, fetch 或 custom
    enableComments: true,
    // 是否添加注释
    includeExamples: true,
    // 是否包含示例代码
    useOptionalProps: true,
    // 是否对可选属性使用 ? 标记
    useEnums: true
    // 是否使用类型字面量+as const代替enum
  };
  function get(key) {
    try {
      return _GM_getValue(key, defaults[key]);
    } catch (e2) {
      const value = localStorage.getItem(`yapi_helper_${key}`);
      return value !== null ? JSON.parse(value) : defaults[key];
    }
  }
  function save(key, value) {
    try {
      _GM_setValue(key, value);
    } catch (e2) {
      localStorage.setItem(`yapi_helper_${key}`, JSON.stringify(value));
    }
    showNotification(`已保存偏好: ${key}`);
  }
  function getAll() {
    const prefs = {};
    for (const key in defaults) {
      prefs[key] = get(key);
    }
    return prefs;
  }
  function resetAll() {
    for (const key in defaults) {
      try {
        _GM_setValue(key, defaults[key]);
      } catch (e2) {
        localStorage.setItem(
          `yapi_helper_${key}`,
          JSON.stringify(defaults[key])
        );
      }
    }
    showNotification("已重置所有偏好为默认值");
  }
  const UserPreferences = {
    defaults,
    get,
    save,
    getAll,
    resetAll
  };
  const useUserPreferencesStore = A("UserPreferencesStore", {
    // 状态定义
    state: () => ({
      ...UserPreferences.defaults,
      ...UserPreferences.getAll()
    }),
    // 操作方法
    actions: {
      /**
       * 设置单个偏好设置
       */
      setPreference(key, value) {
        this[key] = value;
        UserPreferences.save(key, value);
      },
      /**
       * 获取所有偏好设置
       */
      getAllPreferences() {
        return { ...this.$state };
      },
      /**
       * 重置所有偏好为默认值
       */
      resetAllPreferences() {
        const defaults2 = UserPreferences.defaults;
        for (const key in defaults2) {
          const typedKey = key;
          this[typedKey] = defaults2[typedKey];
        }
        UserPreferences.resetAll();
        showNotification("已重置所有偏好为默认值");
      },
      /**
       * 从 UserPreferences 重新加载所有偏好
       */
      reloadPreferences() {
        const prefs = UserPreferences.getAll();
        for (const key in prefs) {
          const typedKey = key;
          this[typedKey] = prefs[typedKey];
        }
      }
    }
  });
  function generateAgentInstruction(data) {
    let prefs;
    try {
      const prefsStore = useUserPreferencesStore.useStore();
      prefs = prefsStore.getAllPreferences();
    } catch (e2) {
      prefs = UserPreferences.getAll();
    }
    const apiData = data.data;
    const method = apiData.method.toUpperCase();
    const path = apiData.query_path.path;
    const title = apiData.title;
    const domain = window.location.href;
    let reqBody = "无请求体";
    if (apiData.req_body_other) {
      try {
        const reqJson = JSON.parse(apiData.req_body_other);
        reqBody = JSON.stringify(reqJson, null, 2);
      } catch (e2) {
        reqBody = apiData.req_body_other;
      }
    }
    let resBody = "无响应数据";
    if (apiData.res_body) {
      try {
        const resJson = JSON.parse(apiData.res_body);
        resBody = JSON.stringify(resJson, null, 2);
      } catch (e2) {
        resBody = apiData.res_body;
      }
    }
    return generateInstructionText(
      title,
      path,
      method,
      domain,
      reqBody,
      resBody,
      prefs
    );
  }
  function generateInstructionText(title, path, method, domain, reqBody, resBody, prefs) {
    return `我需要你帮我将以下 YApi 接口转换为 TypeScript 代码：

## 接口基本信息
- 接口名称: ${title}
- 请求路径: ${path}
- 请求方法: ${method}
- 接口域名: ${domain}

## 请求数据
\`\`\`json
${reqBody}
\`\`\`

## 响应数据
\`\`\`json
${resBody}
\`\`\`

## 代码生成严格要求
1. 使用 ${prefs.typeStyle} 定义所有类型
2. 仅使用 export 导出顶层接口/类型（请求参数和响应数据的主要类型）
3. 所有嵌套/内部类型必须定义为内部类型，不要导出它们
4. 使用 ${prefs.requestLib} 作为请求库
5. ${prefs.enableComments ? "添加详细的注释" : "尽量减少注释"}
6. ${prefs.useOptionalProps ? "对可选属性使用 ? 标记" : "不使用 ? 标记可选属性"}
7. ${prefs.includeExamples ? "提供使用示例代码，并使用 try-catch 包裹示例代码以处理可能的异常，不要注释示例代码" : "不需要提供使用示例"}
${prefs.useEnums ? `8. 对于有固定值集合的字段（如状态码、类型标识等），不要使用enum，应该使用类型字面量+as const方案，例如：
\`\`\`typescript
// 类型字面量+as const方案
const METHOD = {
  ADD: 'add',
  /**
   * @deprecated 不再支持删除
   */  
  DELETE: 'delete', // 可以添加丰富的JSDoc注释
  UPDATE: 'update',
  QUERY: 'query'
} as const
type METHOD_TYPE = typeof METHOD[keyof typeof METHOD]
\`\`\`
这种方案支持添加JSDoc注释，代码可读性更好，并且值可以在运行时使用。` : ""}

请确保代码符合 TypeScript 最佳实践，保持类型安全和代码清晰度。`;
  }
  const useYapiStore = A("YapiStore", {
    // 状态定义
    state: () => ({
      apiData: null,
      apiId: null,
      instruction: "",
      typescriptResult: null,
      isModalVisible: false,
      activeTab: "instruction",
      isLoading: false,
      error: null
    }),
    // 计算属性
    getters: {
      // 是否有可用的API数据
      hasApiData() {
        return this.apiData !== null;
      },
      // 合并后的TypeScript类型
      mergedTypeScript() {
        if (!this.typescriptResult) return "";
        const { queryType, paramsType, responseType } = this.typescriptResult;
        return [
          "// 请求参数类型",
          [queryType, paramsType].join("\n"),
          "",
          "// 响应数据类型",
          responseType
        ].join("\n\n");
      }
    },
    // 操作方法
    actions: {
      /**
       * 从当前URL获取API ID
       */
      extractApiIdFromUrl() {
        this.apiId = window.location.pathname.split("/").pop() || null;
        return this.apiId;
      },
      /**
       * 重置状态
       */
      resetState() {
        this.apiData = null;
        this.instruction = "";
        this.typescriptResult = null;
        this.error = null;
      },
      /**
       * 设置当前激活的标签页
       */
      setActiveTab(tab) {
        this.activeTab = tab;
      },
      /**
       * 显示/隐藏模态框
       */
      setModalVisibility(isVisible) {
        this.isModalVisible = isVisible;
      },
      /**
       * 获取API数据
       */
      async fetchApiData() {
        try {
          this.isLoading = true;
          this.error = null;
          const apiId = this.apiId || this.extractApiIdFromUrl();
          if (!apiId) {
            throw new Error("无法获取接口ID");
          }
          const response = await fetch(`/api/interface/get?id=${apiId}`);
          const data = await response.json();
          this.apiData = data.data;
          return data;
        } catch (error) {
          this.error = error.message || "获取API数据失败";
          throw error;
        } finally {
          this.isLoading = false;
        }
      },
      /**
       * 生成Agent指令
       */
      async generateInstruction() {
        try {
          if (!this.apiData) {
            await this.fetchApiData();
          }
          if (this.apiData) {
            this.instruction = generateAgentInstruction({ data: this.apiData });
            this.setActiveTab("instruction");
            this.setModalVisibility(true);
          }
          return this.instruction;
        } catch (error) {
          this.error = error.message || "生成指令失败";
          throw error;
        }
      },
      /**
       * 生成TypeScript类型
       */
      async generateTypeScript() {
        try {
          if (!this.apiData) {
            await this.fetchApiData();
          }
          if (this.apiData) {
            this.typescriptResult = await handleData(this.apiData);
            this.setActiveTab("typescript");
          }
          return this.typescriptResult;
        } catch (error) {
          this.error = error.message || "生成TypeScript失败";
          throw error;
        }
      },
      /**
       * 复制内容到剪贴板
       */
      copyToClipboard(content, message = "内容已复制到剪贴板！") {
        try {
          navigator.clipboard.writeText(content);
          showNotification(message);
          sendSystemNotification("YApi to TypeScript", message);
          return true;
        } catch (error) {
          this.error = error.message || "复制失败";
          return false;
        }
      },
      /**
       * 复制指令到剪贴板
       */
      copyInstruction() {
        if (this.instruction) {
          const success = this.copyToClipboard(
            this.instruction,
            "指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。"
          );
          if (success) {
            this.setModalVisibility(false);
          }
        }
      },
      /**
       * 复制TypeScript类型到剪贴板
       */
      copyTypeScript() {
        if (this.typescriptResult) {
          this.copyToClipboard(
            this.mergedTypeScript,
            "TypeScript类型已复制到剪贴板！"
          );
        }
      }
    }
  });
  function useClipboard(defaultOptions = {}) {
    const [error, setError] = require$$0__default.useState(null);
    const [isCopied, setIsCopied] = require$$0__default.useState(false);
    const copyToClipboard = require$$0__default.useCallback(async (text, options = {}) => {
      const {
        successMessage = "内容已复制到剪贴板！",
        notificationTitle = "YApi to TypeScript",
        sendSystemNotify = true,
        onSuccess,
        onError
      } = { ...defaultOptions, ...options };
      try {
        await navigator.clipboard.writeText(text);
        showNotification(successMessage);
        if (sendSystemNotify) {
          sendSystemNotification(notificationTitle, successMessage);
        }
        setIsCopied(true);
        setError(null);
        onSuccess == null ? void 0 : onSuccess();
        setTimeout(() => setIsCopied(false), 2e3);
        return true;
      } catch (err) {
        const error2 = err instanceof Error ? err : new Error("复制失败");
        setError(error2);
        setIsCopied(false);
        onError == null ? void 0 : onError(error2);
        return false;
      }
    }, [defaultOptions]);
    return {
      copyToClipboard,
      isCopied,
      error,
      reset: () => {
        setIsCopied(false);
        setError(null);
      }
    };
  }
  const YapiModal = ({ onClose, onCopy }) => {
    const store = useYapiStore.useStore();
    const prefsStore = useUserPreferencesStore.useStore();
    const { copyToClipboard } = useClipboard();
    require$$0__default.useEffect(() => {
      if (store.activeTab === "typescript" && !store.typescriptResult) {
        handleGenerateTs();
      }
    }, [store.activeTab]);
    const handleGenerateTs = async () => {
      try {
        await store.generateTypeScript();
      } catch (error) {
        console.error("生成TypeScript失败:", error);
      }
    };
    const handleCopyTs = () => {
      if (store.mergedTypeScript) {
        copyToClipboard(store.mergedTypeScript, {
          successMessage: "TypeScript类型已复制到剪贴板！"
        });
      }
    };
    const RadioOption = ({
      name,
      value,
      label,
      checked
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-checkbox-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "radio",
            name,
            value,
            checked,
            id: `${name}-${value}`,
            onChange: () => {
              prefsStore.setPreference(name, value);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `${name}-${value}`, children: label })
      ] });
    };
    const CheckboxOption = ({
      name,
      label,
      checked
    }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-checkbox-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            name,
            checked,
            id: `checkbox-${name}`,
            onChange: (e2) => {
              prefsStore.setPreference(name, e2.target.checked);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `checkbox-${name}`, children: label })
      ] });
    };
    const handleReset = async () => {
      prefsStore.resetAllPreferences();
      if (store.apiData) {
        const freshInstruction = generateAgentInstruction({ data: store.apiData });
        store.instruction = freshInstruction;
        store.setActiveTab(store.activeTab);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-modal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-tabs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `yapi-helper-tab ${store.activeTab === "instruction" ? "active" : ""}`,
            onClick: () => store.setActiveTab("instruction"),
            children: "Cursor 指令"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `yapi-helper-tab ${store.activeTab === "typescript" ? "active" : ""}`,
            onClick: () => {
              handleGenerateTs();
              store.setActiveTab("typescript");
            },
            children: "TypeScript"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `yapi-helper-tab ${store.activeTab === "preferences" ? "active" : ""}`,
            onClick: () => store.setActiveTab("preferences"),
            children: "偏好设置"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        store.activeTab === "instruction" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yapi-helper-instruction-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "pre",
          {
            style: {
              whiteSpace: "pre-wrap",
              background: "#f6f8fa",
              padding: "16px",
              borderRadius: "4px",
              overflowX: "auto",
              fontSize: "14px",
              fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
              maxHeight: "400px",
              overflowY: "auto"
            },
            children: store.instruction
          }
        ) }),
        store.activeTab === "typescript" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yapi-helper-instruction-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "pre",
          {
            style: {
              whiteSpace: "pre-wrap",
              background: "#f6f8fa",
              padding: "16px",
              borderRadius: "4px",
              overflowX: "auto",
              fontSize: "14px",
              fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
              maxHeight: "400px",
              overflowY: "auto"
            },
            children: store.typescriptResult ? store.mergedTypeScript : "// 正在生成TypeScript接口..."
          }
        ) }),
        store.activeTab === "preferences" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yapi-helper-section-title", children: "类型定义风格" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-checkbox-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioOption,
                {
                  name: "typeStyle",
                  value: "interface",
                  label: "Interface",
                  checked: prefsStore.typeStyle === "interface"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioOption,
                {
                  name: "typeStyle",
                  value: "type",
                  label: "Type",
                  checked: prefsStore.typeStyle === "type"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yapi-helper-section-title", children: "请求库" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-checkbox-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioOption,
                {
                  name: "requestLib",
                  value: "axios",
                  label: "Axios",
                  checked: prefsStore.requestLib === "axios"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RadioOption,
                {
                  name: "requestLib",
                  value: "fetch",
                  label: "Fetch API",
                  checked: prefsStore.requestLib === "fetch"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "yapi-helper-section-title", children: "其他选项" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-checkbox-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CheckboxOption,
                {
                  name: "enableComments",
                  label: "添加详细注释",
                  checked: prefsStore.enableComments
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CheckboxOption,
                {
                  name: "includeExamples",
                  label: "包含使用示例",
                  checked: prefsStore.includeExamples
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CheckboxOption,
                {
                  name: "useOptionalProps",
                  label: "使用可选属性标记 (?)",
                  checked: prefsStore.useOptionalProps
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CheckboxOption,
                {
                  name: "useEnums",
                  label: "使用类型字面量+as const代替enum",
                  checked: prefsStore.useEnums
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "yapi-helper-button secondary", onClick: handleReset, children: "重置为默认值" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "yapi-helper-button-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "yapi-helper-button secondary", onClick: onClose, children: "关闭" }),
        store.activeTab === "instruction" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "yapi-helper-button primary", onClick: onCopy, children: "复制Cursor指令" }),
        store.activeTab === "typescript" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "yapi-helper-button primary", onClick: handleCopyTs, children: "复制TypeScript" })
      ] })
    ] });
  };
  const YapiButton = () => {
    const store = useYapiStore.useStore();
    const loading = useYapiStore.useLoading();
    const { copyToClipboard } = useClipboard();
    const handleClick = async () => {
      try {
        await store.generateInstruction();
      } catch (error) {
        console.error("YApi Helper: 生成指令失败:", error);
      }
    };
    const handleCopy = () => {
      copyToClipboard(store.instruction, {
        successMessage: "指令已复制到剪贴板！请切换到 Cursor 编辑器并粘贴。",
        notificationTitle: "YApi to TypeScript",
        onSuccess: () => store.setModalVisibility(false)
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "yapi-helper-btn",
          onClick: handleClick,
          "data-yapi-helper": "true",
          disabled: loading.fetchApiData.loading || loading.generateInstruction.loading,
          children: loading.fetchApiData.loading || loading.generateInstruction.loading ? "加载中..." : "生成 TypeScript 代码"
        }
      ),
      store.isModalVisible && store.apiData && /* @__PURE__ */ jsxRuntimeExports.jsx(
        YapiModal,
        {
          onClose: () => store.setModalVisibility(false),
          onCopy: handleCopy
        }
      )
    ] });
  };
  const JsonToTsButton = () => {
    const store = useYapiStore.useStore();
    const loading = useYapiStore.useLoading();
    const { copyToClipboard } = useClipboard();
    const handleClick = async () => {
      try {
        if (store.typescriptResult) {
          handleCopy();
          return;
        }
        await store.generateTypeScript();
        handleCopy();
      } catch (error) {
        console.error("JSON转TypeScript失败:", error);
      }
    };
    const handleCopy = () => {
      if (store.mergedTypeScript) {
        copyToClipboard(store.mergedTypeScript, {
          successMessage: "TypeScript类型已复制到剪贴板！",
          notificationTitle: "YApi to TypeScript"
        });
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "yapi-helper-btn json-to-ts-btn",
        onClick: handleClick,
        "data-yapi-helper": "true",
        disabled: loading.fetchApiData.loading || loading.generateTypeScript.loading,
        children: loading.fetchApiData.loading || loading.generateTypeScript.loading ? "转换中..." : "转换为TypeScript"
      }
    ) });
  };
  const App = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(YapiButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(JsonToTsButton, {})
    ] });
  };
  ReactDOM.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  ).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0__default.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );

})(React, ReactDOM, jstt);