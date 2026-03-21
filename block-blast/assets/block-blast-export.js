var hc = { exports: {} }, _u = {};
var Dd;
function b1() {
  if (Dd) return _u;
  Dd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(o, b, _) {
    var R = null;
    if (_ !== void 0 && (R = "" + _), b.key !== void 0 && (R = "" + b.key), "key" in b) {
      _ = {};
      for (var Q in b)
        Q !== "key" && (_[Q] = b[Q]);
    } else _ = b;
    return b = _.ref, {
      $$typeof: f,
      type: o,
      key: R,
      ref: b !== void 0 ? b : null,
      props: _
    };
  }
  return _u.Fragment = m, _u.jsx = h, _u.jsxs = h, _u;
}
var Ud;
function p1() {
  return Ud || (Ud = 1, hc.exports = b1()), hc.exports;
}
var L = p1(), mc = { exports: {} }, Mu = {}, vc = { exports: {} }, gc = {};
var Rd;
function z1() {
  return Rd || (Rd = 1, (function(f) {
    function m(z, H) {
      var w = z.length;
      z.push(H);
      l: for (; 0 < w; ) {
        var fl = w - 1 >>> 1, sl = z[fl];
        if (0 < b(sl, H))
          z[fl] = H, z[w] = sl, w = fl;
        else break l;
      }
    }
    function h(z) {
      return z.length === 0 ? null : z[0];
    }
    function o(z) {
      if (z.length === 0) return null;
      var H = z[0], w = z.pop();
      if (w !== H) {
        z[0] = w;
        l: for (var fl = 0, sl = z.length, r = sl >>> 1; fl < r; ) {
          var O = 2 * (fl + 1) - 1, C = z[O], Y = O + 1, J = z[Y];
          if (0 > b(C, w))
            Y < sl && 0 > b(J, C) ? (z[fl] = J, z[Y] = w, fl = Y) : (z[fl] = C, z[O] = w, fl = O);
          else if (Y < sl && 0 > b(J, w))
            z[fl] = J, z[Y] = w, fl = Y;
          else break l;
        }
      }
      return H;
    }
    function b(z, H) {
      var w = z.sortIndex - H.sortIndex;
      return w !== 0 ? w : z.id - H.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      f.unstable_now = function() {
        return _.now();
      };
    } else {
      var R = Date, Q = R.now();
      f.unstable_now = function() {
        return R.now() - Q;
      };
    }
    var D = [], E = [], j = 1, x = null, al = 3, _l = !1, Ml = !1, Bl = !1, Ut = !1, X = typeof setTimeout == "function" ? setTimeout : null, ut = typeof clearTimeout == "function" ? clearTimeout : null, Yl = typeof setImmediate < "u" ? setImmediate : null;
    function Fl(z) {
      for (var H = h(E); H !== null; ) {
        if (H.callback === null) o(E);
        else if (H.startTime <= z)
          o(E), H.sortIndex = H.expirationTime, m(D, H);
        else break;
        H = h(E);
      }
    }
    function vt(z) {
      if (Bl = !1, Fl(z), !Ml)
        if (h(D) !== null)
          Ml = !0, Ll || (Ll = !0, U());
        else {
          var H = h(E);
          H !== null && gl(vt, H.startTime - z);
        }
    }
    var Ll = !1, F = -1, wl = 5, gt = -1;
    function St() {
      return Ut ? !0 : !(f.unstable_now() - gt < wl);
    }
    function Z() {
      if (Ut = !1, Ll) {
        var z = f.unstable_now();
        gt = z;
        var H = !0;
        try {
          l: {
            Ml = !1, Bl && (Bl = !1, ut(F), F = -1), _l = !0;
            var w = al;
            try {
              t: {
                for (Fl(z), x = h(D); x !== null && !(x.expirationTime > z && St()); ) {
                  var fl = x.callback;
                  if (typeof fl == "function") {
                    x.callback = null, al = x.priorityLevel;
                    var sl = fl(
                      x.expirationTime <= z
                    );
                    if (z = f.unstable_now(), typeof sl == "function") {
                      x.callback = sl, Fl(z), H = !0;
                      break t;
                    }
                    x === h(D) && o(D), Fl(z);
                  } else o(D);
                  x = h(D);
                }
                if (x !== null) H = !0;
                else {
                  var r = h(E);
                  r !== null && gl(
                    vt,
                    r.startTime - z
                  ), H = !1;
                }
              }
              break l;
            } finally {
              x = null, al = w, _l = !1;
            }
            H = void 0;
          }
        } finally {
          H ? U() : Ll = !1;
        }
      }
    }
    var U;
    if (typeof Yl == "function")
      U = function() {
        Yl(Z);
      };
    else if (typeof MessageChannel < "u") {
      var B = new MessageChannel(), ul = B.port2;
      B.port1.onmessage = Z, U = function() {
        ul.postMessage(null);
      };
    } else
      U = function() {
        X(Z, 0);
      };
    function gl(z, H) {
      F = X(function() {
        z(f.unstable_now());
      }, H);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, f.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : wl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return al;
    }, f.unstable_next = function(z) {
      switch (al) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = al;
      }
      var w = al;
      al = H;
      try {
        return z();
      } finally {
        al = w;
      }
    }, f.unstable_requestPaint = function() {
      Ut = !0;
    }, f.unstable_runWithPriority = function(z, H) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var w = al;
      al = z;
      try {
        return H();
      } finally {
        al = w;
      }
    }, f.unstable_scheduleCallback = function(z, H, w) {
      var fl = f.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? fl + w : fl) : w = fl, z) {
        case 1:
          var sl = -1;
          break;
        case 2:
          sl = 250;
          break;
        case 5:
          sl = 1073741823;
          break;
        case 4:
          sl = 1e4;
          break;
        default:
          sl = 5e3;
      }
      return sl = w + sl, z = {
        id: j++,
        callback: H,
        priorityLevel: z,
        startTime: w,
        expirationTime: sl,
        sortIndex: -1
      }, w > fl ? (z.sortIndex = w, m(E, z), h(D) === null && z === h(E) && (Bl ? (ut(F), F = -1) : Bl = !0, gl(vt, w - fl))) : (z.sortIndex = sl, m(D, z), Ml || _l || (Ml = !0, Ll || (Ll = !0, U()))), z;
    }, f.unstable_shouldYield = St, f.unstable_wrapCallback = function(z) {
      var H = al;
      return function() {
        var w = al;
        al = H;
        try {
          return z.apply(this, arguments);
        } finally {
          al = w;
        }
      };
    };
  })(gc)), gc;
}
var Hd;
function T1() {
  return Hd || (Hd = 1, vc.exports = z1()), vc.exports;
}
var Sc = { exports: {} }, K = {};
var Cd;
function E1() {
  if (Cd) return K;
  Cd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), al = Symbol.iterator;
  function _l(r) {
    return r === null || typeof r != "object" ? null : (r = al && r[al] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Ml = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, Ut = {};
  function X(r, O, C) {
    this.props = r, this.context = O, this.refs = Ut, this.updater = C || Ml;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(r, O) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, O, "setState");
  }, X.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = X.prototype;
  function Yl(r, O, C) {
    this.props = r, this.context = O, this.refs = Ut, this.updater = C || Ml;
  }
  var Fl = Yl.prototype = new ut();
  Fl.constructor = Yl, Bl(Fl, X.prototype), Fl.isPureReactComponent = !0;
  var vt = Array.isArray;
  function Ll() {
  }
  var F = { H: null, A: null, T: null, S: null }, wl = Object.prototype.hasOwnProperty;
  function gt(r, O, C) {
    var Y = C.ref;
    return {
      $$typeof: f,
      type: r,
      key: O,
      ref: Y !== void 0 ? Y : null,
      props: C
    };
  }
  function St(r, O) {
    return gt(r.type, O, r.props);
  }
  function Z(r) {
    return typeof r == "object" && r !== null && r.$$typeof === f;
  }
  function U(r) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(C) {
      return O[C];
    });
  }
  var B = /\/+/g;
  function ul(r, O) {
    return typeof r == "object" && r !== null && r.key != null ? U("" + r.key) : O.toString(36);
  }
  function gl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(Ll, Ll) : (r.status = "pending", r.then(
          function(O) {
            r.status === "pending" && (r.status = "fulfilled", r.value = O);
          },
          function(O) {
            r.status === "pending" && (r.status = "rejected", r.reason = O);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function z(r, O, C, Y, J) {
    var k = typeof r;
    (k === "undefined" || k === "boolean") && (r = null);
    var ol = !1;
    if (r === null) ol = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          ol = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case f:
            case m:
              ol = !0;
              break;
            case j:
              return ol = r._init, z(
                ol(r._payload),
                O,
                C,
                Y,
                J
              );
          }
      }
    if (ol)
      return J = J(r), ol = Y === "" ? "." + ul(r, 0) : Y, vt(J) ? (C = "", ol != null && (C = ol.replace(B, "$&/") + "/"), z(J, O, C, "", function(Ca) {
        return Ca;
      })) : J != null && (Z(J) && (J = St(
        J,
        C + (J.key == null || r && r.key === J.key ? "" : ("" + J.key).replace(
          B,
          "$&/"
        ) + "/") + ol
      )), O.push(J)), 1;
    ol = 0;
    var Jl = Y === "" ? "." : Y + ":";
    if (vt(r))
      for (var Ol = 0; Ol < r.length; Ol++)
        Y = r[Ol], k = Jl + ul(Y, Ol), ol += z(
          Y,
          O,
          C,
          k,
          J
        );
    else if (Ol = _l(r), typeof Ol == "function")
      for (r = Ol.call(r), Ol = 0; !(Y = r.next()).done; )
        Y = Y.value, k = Jl + ul(Y, Ol++), ol += z(
          Y,
          O,
          C,
          k,
          J
        );
    else if (k === "object") {
      if (typeof r.then == "function")
        return z(
          gl(r),
          O,
          C,
          Y,
          J
        );
      throw O = String(r), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ol;
  }
  function H(r, O, C) {
    if (r == null) return r;
    var Y = [], J = 0;
    return z(r, Y, "", "", function(k) {
      return O.call(C, k, J++);
    }), Y;
  }
  function w(r) {
    if (r._status === -1) {
      var O = r._result;
      O = O(), O.then(
        function(C) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = C);
        },
        function(C) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = C);
        }
      ), r._status === -1 && (r._status = 0, r._result = O);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var fl = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, sl = {
    map: H,
    forEach: function(r, O, C) {
      H(
        r,
        function() {
          O.apply(this, arguments);
        },
        C
      );
    },
    count: function(r) {
      var O = 0;
      return H(r, function() {
        O++;
      }), O;
    },
    toArray: function(r) {
      return H(r, function(O) {
        return O;
      }) || [];
    },
    only: function(r) {
      if (!Z(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return K.Activity = x, K.Children = sl, K.Component = X, K.Fragment = h, K.Profiler = b, K.PureComponent = Yl, K.StrictMode = o, K.Suspense = D, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return F.H.useMemoCache(r);
    }
  }, K.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(r, O, C) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var Y = Bl({}, r.props), J = r.key;
    if (O != null)
      for (k in O.key !== void 0 && (J = "" + O.key), O)
        !wl.call(O, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && O.ref === void 0 || (Y[k] = O[k]);
    var k = arguments.length - 2;
    if (k === 1) Y.children = C;
    else if (1 < k) {
      for (var ol = Array(k), Jl = 0; Jl < k; Jl++)
        ol[Jl] = arguments[Jl + 2];
      Y.children = ol;
    }
    return gt(r.type, J, Y);
  }, K.createContext = function(r) {
    return r = {
      $$typeof: R,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: _,
      _context: r
    }, r;
  }, K.createElement = function(r, O, C) {
    var Y, J = {}, k = null;
    if (O != null)
      for (Y in O.key !== void 0 && (k = "" + O.key), O)
        wl.call(O, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (J[Y] = O[Y]);
    var ol = arguments.length - 2;
    if (ol === 1) J.children = C;
    else if (1 < ol) {
      for (var Jl = Array(ol), Ol = 0; Ol < ol; Ol++)
        Jl[Ol] = arguments[Ol + 2];
      J.children = Jl;
    }
    if (r && r.defaultProps)
      for (Y in ol = r.defaultProps, ol)
        J[Y] === void 0 && (J[Y] = ol[Y]);
    return gt(r, k, J);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(r) {
    return { $$typeof: Q, render: r };
  }, K.isValidElement = Z, K.lazy = function(r) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: r },
      _init: w
    };
  }, K.memo = function(r, O) {
    return {
      $$typeof: E,
      type: r,
      compare: O === void 0 ? null : O
    };
  }, K.startTransition = function(r) {
    var O = F.T, C = {};
    F.T = C;
    try {
      var Y = r(), J = F.S;
      J !== null && J(C, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Ll, fl);
    } catch (k) {
      fl(k);
    } finally {
      O !== null && C.types !== null && (O.types = C.types), F.T = O;
    }
  }, K.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, K.use = function(r) {
    return F.H.use(r);
  }, K.useActionState = function(r, O, C) {
    return F.H.useActionState(r, O, C);
  }, K.useCallback = function(r, O) {
    return F.H.useCallback(r, O);
  }, K.useContext = function(r) {
    return F.H.useContext(r);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(r, O) {
    return F.H.useDeferredValue(r, O);
  }, K.useEffect = function(r, O) {
    return F.H.useEffect(r, O);
  }, K.useEffectEvent = function(r) {
    return F.H.useEffectEvent(r);
  }, K.useId = function() {
    return F.H.useId();
  }, K.useImperativeHandle = function(r, O, C) {
    return F.H.useImperativeHandle(r, O, C);
  }, K.useInsertionEffect = function(r, O) {
    return F.H.useInsertionEffect(r, O);
  }, K.useLayoutEffect = function(r, O) {
    return F.H.useLayoutEffect(r, O);
  }, K.useMemo = function(r, O) {
    return F.H.useMemo(r, O);
  }, K.useOptimistic = function(r, O) {
    return F.H.useOptimistic(r, O);
  }, K.useReducer = function(r, O, C) {
    return F.H.useReducer(r, O, C);
  }, K.useRef = function(r) {
    return F.H.useRef(r);
  }, K.useState = function(r) {
    return F.H.useState(r);
  }, K.useSyncExternalStore = function(r, O, C) {
    return F.H.useSyncExternalStore(
      r,
      O,
      C
    );
  }, K.useTransition = function() {
    return F.H.useTransition();
  }, K.version = "19.2.4", K;
}
var xd;
function Ac() {
  return xd || (xd = 1, Sc.exports = E1()), Sc.exports;
}
var bc = { exports: {} }, Kl = {};
var Nd;
function A1() {
  if (Nd) return Kl;
  Nd = 1;
  var f = Ac();
  function m(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        E += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + D + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var o = {
    d: {
      f: h,
      r: function() {
        throw Error(m(522));
      },
      D: h,
      C: h,
      L: h,
      m: h,
      X: h,
      S: h,
      M: h
    },
    p: 0,
    findDOMNode: null
  }, b = /* @__PURE__ */ Symbol.for("react.portal");
  function _(D, E, j) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: x == null ? null : "" + x,
      children: D,
      containerInfo: E,
      implementation: j
    };
  }
  var R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(D, E) {
    if (D === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Kl.createPortal = function(D, E) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(m(299));
    return _(D, E, null, j);
  }, Kl.flushSync = function(D) {
    var E = R.T, j = o.p;
    try {
      if (R.T = null, o.p = 2, D) return D();
    } finally {
      R.T = E, o.p = j, o.d.f();
    }
  }, Kl.preconnect = function(D, E) {
    typeof D == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(D, E));
  }, Kl.prefetchDNS = function(D) {
    typeof D == "string" && o.d.D(D);
  }, Kl.preinit = function(D, E) {
    if (typeof D == "string" && E && typeof E.as == "string") {
      var j = E.as, x = Q(j, E.crossOrigin), al = typeof E.integrity == "string" ? E.integrity : void 0, _l = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      j === "style" ? o.d.S(
        D,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: x,
          integrity: al,
          fetchPriority: _l
        }
      ) : j === "script" && o.d.X(D, {
        crossOrigin: x,
        integrity: al,
        fetchPriority: _l,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(D, E) {
    if (typeof D == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var j = Q(
            E.as,
            E.crossOrigin
          );
          o.d.M(D, {
            crossOrigin: j,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(D);
  }, Kl.preload = function(D, E) {
    if (typeof D == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var j = E.as, x = Q(j, E.crossOrigin);
      o.d.L(D, j, {
        crossOrigin: x,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Kl.preloadModule = function(D, E) {
    if (typeof D == "string")
      if (E) {
        var j = Q(E.as, E.crossOrigin);
        o.d.m(D, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: j,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(D);
  }, Kl.requestFormReset = function(D) {
    o.d.r(D);
  }, Kl.unstable_batchedUpdates = function(D, E) {
    return D(E);
  }, Kl.useFormState = function(D, E, j) {
    return R.H.useFormState(D, E, j);
  }, Kl.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, Kl.version = "19.2.4", Kl;
}
var Bd;
function _1() {
  if (Bd) return bc.exports;
  Bd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (m) {
        console.error(m);
      }
  }
  return f(), bc.exports = A1(), bc.exports;
}
var Yd;
function M1() {
  if (Yd) return Mu;
  Yd = 1;
  var f = T1(), m = Ac(), h = _1();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function _(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function R(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (_(l) !== l)
      throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = _(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return D(u), l;
          if (n === a) return D(u), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t;
  }
  function j(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = j(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Object.assign, al = /* @__PURE__ */ Symbol.for("react.element"), _l = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ml = /* @__PURE__ */ Symbol.for("react.portal"), Bl = /* @__PURE__ */ Symbol.for("react.fragment"), Ut = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.consumer"), Yl = /* @__PURE__ */ Symbol.for("react.context"), Fl = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), Ll = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), wl = /* @__PURE__ */ Symbol.for("react.lazy"), gt = /* @__PURE__ */ Symbol.for("react.activity"), St = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Z = Symbol.iterator;
  function U(l) {
    return l === null || typeof l != "object" ? null : (l = Z && l[Z] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var B = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ul(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === B ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case X:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case vt:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case Yl:
          return l.displayName || "Context";
        case ut:
          return (l._context.displayName || "Context") + ".Consumer";
        case Fl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case F:
          return t = l.displayName || null, t !== null ? t : ul(l.type) || "Memo";
        case wl:
          t = l._payload, l = l._init;
          try {
            return ul(l(t));
          } catch {
          }
      }
    return null;
  }
  var gl = Array.isArray, z = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fl = [], sl = -1;
  function r(l) {
    return { current: l };
  }
  function O(l) {
    0 > sl || (l.current = fl[sl], fl[sl] = null, sl--);
  }
  function C(l, t) {
    sl++, fl[sl] = l.current, l.current = t;
  }
  var Y = r(null), J = r(null), k = r(null), ol = r(null);
  function Jl(l, t) {
    switch (C(k, t), C(J, l), C(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? k0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = k0(t), l = I0(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    O(Y), C(Y, l);
  }
  function Ol() {
    O(Y), O(J), O(k);
  }
  function Ca(l) {
    l.memoizedState !== null && C(ol, l);
    var t = Y.current, e = I0(t, l.type);
    t !== e && (C(J, l), C(Y, e));
  }
  function Ou(l) {
    J.current === l && (O(Y), O(J)), ol.current === l && (O(ol), zu._currentValue = w);
  }
  var $n, Mc;
  function De(l) {
    if ($n === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        $n = t && t[1] || "", Mc = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $n + l + Mc;
  }
  var Fn = !1;
  function kn(l, t) {
    if (!l || Fn) return "";
    Fn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (p) {
                  var S = p;
                }
                Reflect.construct(l, [], M);
              } else {
                try {
                  M.call();
                } catch (p) {
                  S = p;
                }
                l.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                S = p;
              }
              (M = l()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (p) {
            if (p && S && typeof p.stack == "string")
              return [p.stack, S.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var s = i.split(`
`), g = c.split(`
`);
        for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < g.length && !g[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === s.length || u === g.length)
          for (a = s.length - 1, u = g.length - 1; 1 <= a && 0 <= u && s[a] !== g[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || s[a] !== g[u]) {
                  var T = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Fn = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? De(e) : "";
  }
  function Fd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return De(l.type);
      case 16:
        return De("Lazy");
      case 13:
        return l.child !== t && t !== null ? De("Suspense Fallback") : De("Suspense");
      case 19:
        return De("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return De("Activity");
      default:
        return "";
    }
  }
  function Oc(l) {
    try {
      var t = "", e = null;
      do
        t += Fd(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var In = Object.prototype.hasOwnProperty, Pn = f.unstable_scheduleCallback, li = f.unstable_cancelCallback, kd = f.unstable_shouldYield, Id = f.unstable_requestPaint, nt = f.unstable_now, Pd = f.unstable_getCurrentPriorityLevel, Dc = f.unstable_ImmediatePriority, Uc = f.unstable_UserBlockingPriority, Du = f.unstable_NormalPriority, lr = f.unstable_LowPriority, Rc = f.unstable_IdlePriority, tr = f.log, er = f.unstable_setDisableYieldValue, xa = null, it = null;
  function ae(l) {
    if (typeof tr == "function" && er(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(xa, l);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : nr, ar = Math.log, ur = Math.LN2;
  function nr(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (ar(l) / ur | 0) | 0;
  }
  var Uu = 256, Ru = 262144, Hu = 4194304;
  function Ue(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Cu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = Ue(a) : (i &= c, i !== 0 ? u = Ue(i) : e || (e = c & ~l, e !== 0 && (u = Ue(e))))) : (c = a & ~n, c !== 0 ? u = Ue(c) : i !== 0 ? u = Ue(i) : e || (e = a & ~l, e !== 0 && (u = Ue(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Na(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function ir(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hc() {
    var l = Hu;
    return Hu <<= 1, (Hu & 62914560) === 0 && (Hu = 4194304), l;
  }
  function ti(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ba(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function fr(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - ft(e), M = 1 << T;
      c[T] = 0, s[T] = -1;
      var S = g[T];
      if (S !== null)
        for (g[T] = null, T = 0; T < S.length; T++) {
          var p = S[T];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~M;
    }
    a !== 0 && Cc(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Cc(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ft(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function xc(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - ft(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Nc(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ei(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function ei(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ai(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Bc() {
    var l = H.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zd(l.type));
  }
  function Yc(l, t) {
    var e = H.p;
    try {
      return H.p = l, t();
    } finally {
      H.p = e;
    }
  }
  var ue = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + ue, kl = "__reactProps$" + ue, Je = "__reactContainer$" + ue, ui = "__reactEvents$" + ue, cr = "__reactListeners$" + ue, or = "__reactHandles$" + ue, qc = "__reactResources$" + ue, Ya = "__reactMarker$" + ue;
  function ni(l) {
    delete l[Xl], delete l[kl], delete l[ui], delete l[cr], delete l[or];
  }
  function We(l) {
    var t = l[Xl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Je] || e[Xl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = nd(l); l !== null; ) {
            if (e = l[Xl]) return e;
            l = nd(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function $e(l) {
    if (l = l[Xl] || l[Je]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function qa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Fe(l) {
    var t = l[qc];
    return t || (t = l[qc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ql(l) {
    l[Ya] = !0;
  }
  var jc = /* @__PURE__ */ new Set(), Xc = {};
  function Re(l, t) {
    ke(l, t), ke(l + "Capture", t);
  }
  function ke(l, t) {
    for (Xc[l] = t, l = 0; l < t.length; l++)
      jc.add(t[l]);
  }
  var sr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gc = {}, Qc = {};
  function dr(l) {
    return In.call(Qc, l) ? !0 : In.call(Gc, l) ? !1 : sr.test(l) ? Qc[l] = !0 : (Gc[l] = !0, !1);
  }
  function xu(l, t, e) {
    if (dr(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Nu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function jt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function bt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Zc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function rr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function ii(l) {
    if (!l._valueTracker) {
      var t = Zc(l) ? "checked" : "value";
      l._valueTracker = rr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Vc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Zc(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Bu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var yr = /[\n"\\]/g;
  function pt(l) {
    return l.replace(
      yr,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function fi(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + bt(t)) : l.value !== "" + bt(t) && (l.value = "" + bt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ci(l, i, bt(t)) : e != null ? ci(l, i, bt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + bt(c) : l.removeAttribute("name");
  }
  function Lc(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ii(l);
        return;
      }
      e = e != null ? "" + bt(e) : "", t = t != null ? "" + bt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l);
  }
  function ci(l, t, e) {
    t === "number" && Bu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function Ie(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++)
        t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + bt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wc(l, t, e) {
    if (t != null && (t = "" + bt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + bt(e) : "";
  }
  function Kc(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (gl(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = bt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l);
  }
  function Pe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var hr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jc(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || hr.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Wc(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && Jc(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Jc(l, n, t[n]);
  }
  function oi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), vr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yu(l) {
    return vr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Xt() {
  }
  var si = null;
  function di(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ta = null;
  function $c(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (fi(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + pt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[kl] || null;
                if (!u) throw Error(o(90));
                fi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && Vc(a);
          }
          break l;
        case "textarea":
          wc(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Ie(l, !!e.multiple, t, !1);
      }
    }
  }
  var ri = !1;
  function Fc(l, t, e) {
    if (ri) return l(t, e);
    ri = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ri = !1, (la !== null || ta !== null) && (An(), la && (t = la, l = ta, ta = la = null, $c(t), l)))
        for (t = 0; t < l.length; t++) $c(l[t]);
    }
  }
  function ja(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[kl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        o(231, t, typeof e)
      );
    return e;
  }
  var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yi = !1;
  if (Gt)
    try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      yi = !1;
    }
  var ne = null, hi = null, qu = null;
  function kc() {
    if (qu) return qu;
    var l, t = hi, e = t.length, a, u = "value" in ne ? ne.value : ne.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++) ;
    return qu = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function ju(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Xu() {
    return !0;
  }
  function Ic() {
    return !1;
  }
  function Il(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Xu : Ic, this.isPropagationStopped = Ic, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Xu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Xu);
      },
      persist: function() {
      },
      isPersistent: Xu
    }), t;
  }
  var He = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gu = Il(He), Ga = x({}, He, { view: 0, detail: 0 }), gr = Il(Ga), mi, vi, Qa, Qu = x({}, Ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Si,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Qa && (Qa && l.type === "mousemove" ? (mi = l.screenX - Qa.screenX, vi = l.screenY - Qa.screenY) : vi = mi = 0, Qa = l), mi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : vi;
    }
  }), Pc = Il(Qu), Sr = x({}, Qu, { dataTransfer: 0 }), br = Il(Sr), pr = x({}, Ga, { relatedTarget: 0 }), gi = Il(pr), zr = x({}, He, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Tr = Il(zr), Er = x({}, He, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Ar = Il(Er), _r = x({}, He, { data: 0 }), lo = Il(_r), Mr = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Or = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Dr = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ur(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Dr[l]) ? !!t[l] : !1;
  }
  function Si() {
    return Ur;
  }
  var Rr = x({}, Ga, {
    key: function(l) {
      if (l.key) {
        var t = Mr[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = ju(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Or[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Si,
    charCode: function(l) {
      return l.type === "keypress" ? ju(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ju(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Hr = Il(Rr), Cr = x({}, Qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), to = Il(Cr), xr = x({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si
  }), Nr = Il(xr), Br = x({}, He, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yr = Il(Br), qr = x({}, Qu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jr = Il(qr), Xr = x({}, He, {
    newState: 0,
    oldState: 0
  }), Gr = Il(Xr), Qr = [9, 13, 27, 32], bi = Gt && "CompositionEvent" in window, Za = null;
  Gt && "documentMode" in document && (Za = document.documentMode);
  var Zr = Gt && "TextEvent" in window && !Za, eo = Gt && (!bi || Za && 8 < Za && 11 >= Za), ao = " ", uo = !1;
  function no(l, t) {
    switch (l) {
      case "keyup":
        return Qr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function io(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ea = !1;
  function Vr(l, t) {
    switch (l) {
      case "compositionend":
        return io(t);
      case "keypress":
        return t.which !== 32 ? null : (uo = !0, ao);
      case "textInput":
        return l = t.data, l === ao && uo ? null : l;
      default:
        return null;
    }
  }
  function Lr(l, t) {
    if (ea)
      return l === "compositionend" || !bi && no(l, t) ? (l = kc(), qu = hi = ne = null, ea = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return eo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var wr = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function fo(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!wr[l.type] : t === "textarea";
  }
  function co(l, t, e, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = Hn(t, "onChange"), 0 < t.length && (e = new Gu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Va = null, La = null;
  function Kr(l) {
    w0(l, 0);
  }
  function Zu(l) {
    var t = qa(l);
    if (Vc(t)) return l;
  }
  function oo(l, t) {
    if (l === "change") return t;
  }
  var so = !1;
  if (Gt) {
    var pi;
    if (Gt) {
      var zi = "oninput" in document;
      if (!zi) {
        var ro = document.createElement("div");
        ro.setAttribute("oninput", "return;"), zi = typeof ro.oninput == "function";
      }
      pi = zi;
    } else pi = !1;
    so = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function yo() {
    Va && (Va.detachEvent("onpropertychange", ho), La = Va = null);
  }
  function ho(l) {
    if (l.propertyName === "value" && Zu(La)) {
      var t = [];
      co(
        t,
        La,
        l,
        di(l)
      ), Fc(Kr, t);
    }
  }
  function Jr(l, t, e) {
    l === "focusin" ? (yo(), Va = t, La = e, Va.attachEvent("onpropertychange", ho)) : l === "focusout" && yo();
  }
  function Wr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Zu(La);
  }
  function $r(l, t) {
    if (l === "click") return Zu(t);
  }
  function Fr(l, t) {
    if (l === "input" || l === "change")
      return Zu(t);
  }
  function kr(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : kr;
  function wa(l, t) {
    if (ct(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!In.call(t, u) || !ct(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function mo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function vo(l, t) {
    var e = mo(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = mo(e);
    }
  }
  function go(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? go(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function So(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Bu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Bu(l.document);
    }
    return t;
  }
  function Ti(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Ir = Gt && "documentMode" in document && 11 >= document.documentMode, aa = null, Ei = null, Ka = null, Ai = !1;
  function bo(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ai || aa == null || aa !== Bu(a) || (a = aa, "selectionStart" in a && Ti(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ka && wa(Ka, a) || (Ka = a, a = Hn(Ei, "onSelect"), 0 < a.length && (t = new Gu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = aa)));
  }
  function Ce(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ua = {
    animationend: Ce("Animation", "AnimationEnd"),
    animationiteration: Ce("Animation", "AnimationIteration"),
    animationstart: Ce("Animation", "AnimationStart"),
    transitionrun: Ce("Transition", "TransitionRun"),
    transitionstart: Ce("Transition", "TransitionStart"),
    transitioncancel: Ce("Transition", "TransitionCancel"),
    transitionend: Ce("Transition", "TransitionEnd")
  }, _i = {}, po = {};
  Gt && (po = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function xe(l) {
    if (_i[l]) return _i[l];
    if (!ua[l]) return l;
    var t = ua[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in po)
        return _i[l] = t[e];
    return l;
  }
  var zo = xe("animationend"), To = xe("animationiteration"), Eo = xe("animationstart"), Pr = xe("transitionrun"), ly = xe("transitionstart"), ty = xe("transitioncancel"), Ao = xe("transitionend"), _o = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function Rt(l, t) {
    _o.set(l, t), Re(t, [l]);
  }
  var Vu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, zt = [], na = 0, Oi = 0;
  function Lu() {
    for (var l = na, t = Oi = na = 0; t < l; ) {
      var e = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var u = zt[t];
      zt[t++] = null;
      var n = zt[t];
      if (zt[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && Mo(e, u, n);
    }
  }
  function wu(l, t, e, a) {
    zt[na++] = l, zt[na++] = t, zt[na++] = e, zt[na++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Di(l, t, e, a) {
    return wu(l, t, e, a), Ku(l);
  }
  function Ne(l, t) {
    return wu(l, null, null, t), Ku(l);
  }
  function Mo(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ft(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Ku(l) {
    if (50 < hu)
      throw hu = 0, jf = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function ey(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(l, t, e, a) {
    return new ey(l, t, e, a);
  }
  function Ui(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ot(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Oo(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ju(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Ui(l) && (i = 1);
    else if (typeof l == "string")
      i = f1(
        l,
        e,
        Y.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case gt:
          return l = ot(31, e, t, u), l.elementType = gt, l.lanes = n, l;
        case Bl:
          return Be(e.children, u, n, t);
        case Ut:
          i = 8, u |= 24;
          break;
        case X:
          return l = ot(12, e, t, u | 2), l.elementType = X, l.lanes = n, l;
        case vt:
          return l = ot(13, e, t, u), l.elementType = vt, l.lanes = n, l;
        case Ll:
          return l = ot(19, e, t, u), l.elementType = Ll, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Yl:
                i = 10;
                break l;
              case ut:
                i = 9;
                break l;
              case Fl:
                i = 11;
                break l;
              case F:
                i = 14;
                break l;
              case wl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ot(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Be(l, t, e, a) {
    return l = ot(7, l, a, t), l.lanes = e, l;
  }
  function Ri(l, t, e) {
    return l = ot(6, l, null, t), l.lanes = e, l;
  }
  function Do(l) {
    var t = ot(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hi(l, t, e) {
    return t = ot(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Uo = /* @__PURE__ */ new WeakMap();
  function Tt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Uo.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Oc(t)
      }, Uo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Oc(t)
    };
  }
  var fa = [], ca = 0, Wu = null, Ja = 0, Et = [], At = 0, ie = null, xt = 1, Nt = "";
  function Zt(l, t) {
    fa[ca++] = Ja, fa[ca++] = Wu, Wu = l, Ja = t;
  }
  function Ro(l, t, e) {
    Et[At++] = xt, Et[At++] = Nt, Et[At++] = ie, ie = l;
    var a = xt;
    l = Nt;
    var u = 32 - ft(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - ft(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, xt = 1 << 32 - ft(t) + u | e << u | a, Nt = n + l;
    } else
      xt = 1 << n | e << u | a, Nt = l;
  }
  function Ci(l) {
    l.return !== null && (Zt(l, 1), Ro(l, 1, 0));
  }
  function xi(l) {
    for (; l === Wu; )
      Wu = fa[--ca], fa[ca] = null, Ja = fa[--ca], fa[ca] = null;
    for (; l === ie; )
      ie = Et[--At], Et[At] = null, Nt = Et[--At], Et[At] = null, xt = Et[--At], Et[At] = null;
  }
  function Ho(l, t) {
    Et[At++] = xt, Et[At++] = Nt, Et[At++] = ie, xt = t.id, Nt = t.overflow, ie = l;
  }
  var Gl = null, Sl = null, el = !1, fe = null, _t = !1, Ni = Error(o(519));
  function ce(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(Tt(t, l)), Ni;
  }
  function Co(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Xl] = l, t[kl] = a, e) {
      case "dialog":
        P("cancel", t), P("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < vu.length; e++)
          P(vu[e], t);
        break;
      case "source":
        P("error", t);
        break;
      case "img":
      case "image":
      case "link":
        P("error", t), P("load", t);
        break;
      case "details":
        P("toggle", t);
        break;
      case "input":
        P("invalid", t), Lc(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        P("invalid", t);
        break;
      case "textarea":
        P("invalid", t), Kc(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || $0(t.textContent, e) ? (a.popover != null && (P("beforetoggle", t), P("toggle", t)), a.onScroll != null && P("scroll", t), a.onScrollEnd != null && P("scrollend", t), a.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || ce(l, !0);
  }
  function xo(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function oa(l) {
    if (l !== Gl) return !1;
    if (!el) return xo(l), el = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Pf(l.type, l.memoizedProps)), e = !e), e && Sl && ce(l), xo(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = ud(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = ud(l);
    } else
      t === 27 ? (t = Sl, Te(l.type) ? (l = uc, uc = null, Sl = l) : Sl = t) : Sl = Gl ? Ot(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ye() {
    Sl = Gl = null, el = !1;
  }
  function Bi() {
    var l = fe;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), fe = null), l;
  }
  function Wa(l) {
    fe === null ? fe = [l] : fe.push(l);
  }
  var Yi = r(null), qe = null, Vt = null;
  function oe(l, t, e) {
    C(Yi, t._currentValue), t._currentValue = e;
  }
  function Lt(l) {
    l._currentValue = Yi.current, O(Yi);
  }
  function qi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function ji(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), qi(
                n.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(o(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), qi(i, e, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function sa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          ct(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === ol.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : l = [zu]);
      }
      u = u.return;
    }
    l !== null && ji(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function $u(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ct(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function je(l) {
    qe = l, Vt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ql(l) {
    return No(qe, l);
  }
  function Fu(l, t) {
    return qe === null && je(l), No(l, t);
  }
  function No(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Vt === null) {
      if (l === null) throw Error(o(308));
      Vt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Vt = Vt.next = t;
    return e;
  }
  var ay = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, uy = f.unstable_scheduleCallback, ny = f.unstable_NormalPriority, Rl = {
    $$typeof: Yl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xi() {
    return {
      controller: new ay(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $a(l) {
    l.refCount--, l.refCount === 0 && uy(ny, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Gi = 0, da = 0, ra = null;
  function iy(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      Gi = 0, da = Lf(), ra = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Gi++, t.then(Bo, Bo), t;
  }
  function Bo() {
    if (--Gi === 0 && Fa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var l = Fa;
      Fa = null, da = 0, ra = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function fy(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var u = 0; u < e.length; u++) (0, e[u])(t);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var Yo = z.S;
  z.S = function(l, t) {
    b0 = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && iy(l, t), Yo !== null && Yo(l, t);
  };
  var Xe = r(null);
  function Qi() {
    var l = Xe.current;
    return l !== null ? l : vl.pooledCache;
  }
  function ku(l, t) {
    t === null ? C(Xe, Xe.current) : C(Xe, t.pool);
  }
  function qo() {
    var l = Qi();
    return l === null ? null : { parent: Rl._currentValue, pool: l };
  }
  var ya = Error(o(460)), Zi = Error(o(474)), Iu = Error(o(542)), Pu = { then: function() {
  } };
  function jo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Xo(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Xt, Xt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Qo(l), l;
      default:
        if (typeof t.status == "string") t.then(Xt, Xt);
        else {
          if (l = vl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Qo(l), l;
        }
        throw Qe = t, ya;
    }
  }
  function Ge(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Qe = e, ya) : e;
    }
  }
  var Qe = null;
  function Go() {
    if (Qe === null) throw Error(o(459));
    var l = Qe;
    return Qe = null, l;
  }
  function Qo(l) {
    if (l === ya || l === Iu)
      throw Error(o(483));
  }
  var ha = null, ka = 0;
  function ln(l) {
    var t = ka;
    return ka += 1, ha === null && (ha = []), Xo(ha, l, t);
  }
  function Ia(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === al ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Zo(l) {
    function t(y, d) {
      if (l) {
        var v = y.deletions;
        v === null ? (y.deletions = [d], y.flags |= 16) : v.push(d);
      }
    }
    function e(y, d) {
      if (!l) return null;
      for (; d !== null; )
        t(y, d), d = d.sibling;
      return null;
    }
    function a(y) {
      for (var d = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? d.set(y.key, y) : d.set(y.index, y), y = y.sibling;
      return d;
    }
    function u(y, d) {
      return y = Qt(y, d), y.index = 0, y.sibling = null, y;
    }
    function n(y, d, v) {
      return y.index = v, l ? (v = y.alternate, v !== null ? (v = v.index, v < d ? (y.flags |= 67108866, d) : v) : (y.flags |= 67108866, d)) : (y.flags |= 1048576, d);
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, d, v, A) {
      return d === null || d.tag !== 6 ? (d = Ri(v, y.mode, A), d.return = y, d) : (d = u(d, v), d.return = y, d);
    }
    function s(y, d, v, A) {
      var G = v.type;
      return G === Bl ? T(
        y,
        d,
        v.props.children,
        A,
        v.key
      ) : d !== null && (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === wl && Ge(G) === d.type) ? (d = u(d, v.props), Ia(d, v), d.return = y, d) : (d = Ju(
        v.type,
        v.key,
        v.props,
        null,
        y.mode,
        A
      ), Ia(d, v), d.return = y, d);
    }
    function g(y, d, v, A) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Hi(v, y.mode, A), d.return = y, d) : (d = u(d, v.children || []), d.return = y, d);
    }
    function T(y, d, v, A, G) {
      return d === null || d.tag !== 7 ? (d = Be(
        v,
        y.mode,
        A,
        G
      ), d.return = y, d) : (d = u(d, v), d.return = y, d);
    }
    function M(y, d, v) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Ri(
          "" + d,
          y.mode,
          v
        ), d.return = y, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case _l:
            return v = Ju(
              d.type,
              d.key,
              d.props,
              null,
              y.mode,
              v
            ), Ia(v, d), v.return = y, v;
          case Ml:
            return d = Hi(
              d,
              y.mode,
              v
            ), d.return = y, d;
          case wl:
            return d = Ge(d), M(y, d, v);
        }
        if (gl(d) || U(d))
          return d = Be(
            d,
            y.mode,
            v,
            null
          ), d.return = y, d;
        if (typeof d.then == "function")
          return M(y, ln(d), v);
        if (d.$$typeof === Yl)
          return M(
            y,
            Fu(y, d),
            v
          );
        tn(y, d);
      }
      return null;
    }
    function S(y, d, v, A) {
      var G = d !== null ? d.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return G !== null ? null : c(y, d, "" + v, A);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case _l:
            return v.key === G ? s(y, d, v, A) : null;
          case Ml:
            return v.key === G ? g(y, d, v, A) : null;
          case wl:
            return v = Ge(v), S(y, d, v, A);
        }
        if (gl(v) || U(v))
          return G !== null ? null : T(y, d, v, A, null);
        if (typeof v.then == "function")
          return S(
            y,
            d,
            ln(v),
            A
          );
        if (v.$$typeof === Yl)
          return S(
            y,
            d,
            Fu(y, v),
            A
          );
        tn(y, v);
      }
      return null;
    }
    function p(y, d, v, A, G) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return y = y.get(v) || null, c(d, y, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case _l:
            return y = y.get(
              A.key === null ? v : A.key
            ) || null, s(d, y, A, G);
          case Ml:
            return y = y.get(
              A.key === null ? v : A.key
            ) || null, g(d, y, A, G);
          case wl:
            return A = Ge(A), p(
              y,
              d,
              v,
              A,
              G
            );
        }
        if (gl(A) || U(A))
          return y = y.get(v) || null, T(d, y, A, G, null);
        if (typeof A.then == "function")
          return p(
            y,
            d,
            v,
            ln(A),
            G
          );
        if (A.$$typeof === Yl)
          return p(
            y,
            d,
            v,
            Fu(d, A),
            G
          );
        tn(d, A);
      }
      return null;
    }
    function N(y, d, v, A) {
      for (var G = null, nl = null, q = d, $ = d = 0, tl = null; q !== null && $ < v.length; $++) {
        q.index > $ ? (tl = q, q = null) : tl = q.sibling;
        var il = S(
          y,
          q,
          v[$],
          A
        );
        if (il === null) {
          q === null && (q = tl);
          break;
        }
        l && q && il.alternate === null && t(y, q), d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il, q = tl;
      }
      if ($ === v.length)
        return e(y, q), el && Zt(y, $), G;
      if (q === null) {
        for (; $ < v.length; $++)
          q = M(y, v[$], A), q !== null && (d = n(
            q,
            d,
            $
          ), nl === null ? G = q : nl.sibling = q, nl = q);
        return el && Zt(y, $), G;
      }
      for (q = a(q); $ < v.length; $++)
        tl = p(
          q,
          y,
          $,
          v[$],
          A
        ), tl !== null && (l && tl.alternate !== null && q.delete(
          tl.key === null ? $ : tl.key
        ), d = n(
          tl,
          d,
          $
        ), nl === null ? G = tl : nl.sibling = tl, nl = tl);
      return l && q.forEach(function(Oe) {
        return t(y, Oe);
      }), el && Zt(y, $), G;
    }
    function V(y, d, v, A) {
      if (v == null) throw Error(o(151));
      for (var G = null, nl = null, q = d, $ = d = 0, tl = null, il = v.next(); q !== null && !il.done; $++, il = v.next()) {
        q.index > $ ? (tl = q, q = null) : tl = q.sibling;
        var Oe = S(y, q, il.value, A);
        if (Oe === null) {
          q === null && (q = tl);
          break;
        }
        l && q && Oe.alternate === null && t(y, q), d = n(Oe, d, $), nl === null ? G = Oe : nl.sibling = Oe, nl = Oe, q = tl;
      }
      if (il.done)
        return e(y, q), el && Zt(y, $), G;
      if (q === null) {
        for (; !il.done; $++, il = v.next())
          il = M(y, il.value, A), il !== null && (d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il);
        return el && Zt(y, $), G;
      }
      for (q = a(q); !il.done; $++, il = v.next())
        il = p(q, y, $, il.value, A), il !== null && (l && il.alternate !== null && q.delete(il.key === null ? $ : il.key), d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il);
      return l && q.forEach(function(S1) {
        return t(y, S1);
      }), el && Zt(y, $), G;
    }
    function ml(y, d, v, A) {
      if (typeof v == "object" && v !== null && v.type === Bl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case _l:
            l: {
              for (var G = v.key; d !== null; ) {
                if (d.key === G) {
                  if (G = v.type, G === Bl) {
                    if (d.tag === 7) {
                      e(
                        y,
                        d.sibling
                      ), A = u(
                        d,
                        v.props.children
                      ), A.return = y, y = A;
                      break l;
                    }
                  } else if (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === wl && Ge(G) === d.type) {
                    e(
                      y,
                      d.sibling
                    ), A = u(d, v.props), Ia(A, v), A.return = y, y = A;
                    break l;
                  }
                  e(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              v.type === Bl ? (A = Be(
                v.props.children,
                y.mode,
                A,
                v.key
              ), A.return = y, y = A) : (A = Ju(
                v.type,
                v.key,
                v.props,
                null,
                y.mode,
                A
              ), Ia(A, v), A.return = y, y = A);
            }
            return i(y);
          case Ml:
            l: {
              for (G = v.key; d !== null; ) {
                if (d.key === G)
                  if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                    e(
                      y,
                      d.sibling
                    ), A = u(d, v.children || []), A.return = y, y = A;
                    break l;
                  } else {
                    e(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              A = Hi(v, y.mode, A), A.return = y, y = A;
            }
            return i(y);
          case wl:
            return v = Ge(v), ml(
              y,
              d,
              v,
              A
            );
        }
        if (gl(v))
          return N(
            y,
            d,
            v,
            A
          );
        if (U(v)) {
          if (G = U(v), typeof G != "function") throw Error(o(150));
          return v = G.call(v), V(
            y,
            d,
            v,
            A
          );
        }
        if (typeof v.then == "function")
          return ml(
            y,
            d,
            ln(v),
            A
          );
        if (v.$$typeof === Yl)
          return ml(
            y,
            d,
            Fu(y, v),
            A
          );
        tn(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, d !== null && d.tag === 6 ? (e(y, d.sibling), A = u(d, v), A.return = y, y = A) : (e(y, d), A = Ri(v, y.mode, A), A.return = y, y = A), i(y)) : e(y, d);
    }
    return function(y, d, v, A) {
      try {
        ka = 0;
        var G = ml(
          y,
          d,
          v,
          A
        );
        return ha = null, G;
      } catch (q) {
        if (q === ya || q === Iu) throw q;
        var nl = ot(29, q, null, y.mode);
        return nl.lanes = A, nl.return = y, nl;
      }
    };
  }
  var Ze = Zo(!0), Vo = Zo(!1), se = !1;
  function Vi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Li(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function de(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function re(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (cl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ku(l), Mo(l, null, e), t;
    }
    return wu(l, a, t, e), Ku(l);
  }
  function Pa(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, xc(l, e);
    }
  }
  function wi(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var Ki = !1;
  function lu() {
    if (Ki) {
      var l = ra;
      if (l !== null) throw l;
    }
  }
  function tu(l, t, e, a) {
    Ki = !1;
    var u = l.updateQueue;
    se = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, g = s.next;
      s.next = null, i === null ? n = g : i.next = g, i = s;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, c = T.lastBaseUpdate, c !== i && (c === null ? T.firstBaseUpdate = g : c.next = g, T.lastBaseUpdate = s));
    }
    if (n !== null) {
      var M = u.baseState;
      i = 0, T = g = s = null, c = n;
      do {
        var S = c.lane & -536870913, p = S !== c.lane;
        if (p ? (ll & S) === S : (a & S) === S) {
          S !== 0 && S === da && (Ki = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var N = l, V = c;
            S = t;
            var ml = e;
            switch (V.tag) {
              case 1:
                if (N = V.payload, typeof N == "function") {
                  M = N.call(ml, M, S);
                  break l;
                }
                M = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = V.payload, S = typeof N == "function" ? N.call(ml, M, S) : N, S == null) break l;
                M = x({}, M, S);
                break l;
              case 2:
                se = !0;
            }
          }
          S = c.callback, S !== null && (l.flags |= 64, p && (l.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [S] : p.push(S));
        } else
          p = {
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, T === null ? (g = T = p, s = M) : T = T.next = p, i |= S;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
        }
      } while (!0);
      T === null && (s = M), u.baseState = s, u.firstBaseUpdate = g, u.lastBaseUpdate = T, n === null && (u.shared.lanes = 0), ge |= i, l.lanes = i, l.memoizedState = M;
    }
  }
  function Lo(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function wo(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Lo(e[l], t);
  }
  var ma = r(null), en = r(0);
  function Ko(l, t) {
    l = Pt, C(en, l), C(ma, t), Pt = l | t.baseLanes;
  }
  function Ji() {
    C(en, Pt), C(ma, ma.current);
  }
  function Wi() {
    Pt = en.current, O(ma), O(en);
  }
  var st = r(null), Mt = null;
  function ye(l) {
    var t = l.alternate;
    C(Dl, Dl.current & 1), C(st, l), Mt === null && (t === null || ma.current !== null || t.memoizedState !== null) && (Mt = l);
  }
  function $i(l) {
    C(Dl, Dl.current), C(st, l), Mt === null && (Mt = l);
  }
  function Jo(l) {
    l.tag === 22 ? (C(Dl, Dl.current), C(st, l), Mt === null && (Mt = l)) : he();
  }
  function he() {
    C(Dl, Dl.current), C(st, st.current);
  }
  function dt(l) {
    O(st), Mt === l && (Mt = null), O(Dl);
  }
  var Dl = r(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || ec(e) || ac(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var wt = 0, W = null, yl = null, Hl = null, un = !1, va = !1, Ve = !1, nn = 0, eu = 0, ga = null, cy = 0;
  function El() {
    throw Error(o(321));
  }
  function Fi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ct(l[e], t[e])) return !1;
    return !0;
  }
  function ki(l, t, e, a, u, n) {
    return wt = n, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? Rs : yf, Ve = !1, n = e(a, u), Ve = !1, va && (n = $o(
      t,
      e,
      a,
      u
    )), Wo(l), n;
  }
  function Wo(l) {
    z.H = nu;
    var t = yl !== null && yl.next !== null;
    if (wt = 0, Hl = yl = W = null, un = !1, eu = 0, ga = null, t) throw Error(o(300));
    l === null || Cl || (l = l.dependencies, l !== null && $u(l) && (Cl = !0));
  }
  function $o(l, t, e, a) {
    W = l;
    var u = 0;
    do {
      if (va && (ga = null), eu = 0, va = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Hl = yl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Hs, n = t(e, a);
    } while (va);
    return n;
  }
  function oy() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? au(t) : t, l = l.useState()[0], (yl !== null ? yl.memoizedState : null) !== l && (W.flags |= 1024), t;
  }
  function Ii() {
    var l = nn !== 0;
    return nn = 0, l;
  }
  function Pi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function lf(l) {
    if (un) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      un = !1;
    }
    wt = 0, Hl = yl = W = null, va = !1, eu = nn = 0, ga = null;
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Hl === null ? W.memoizedState = Hl = l : Hl = Hl.next = l, Hl;
  }
  function Ul() {
    if (yl === null) {
      var l = W.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = yl.next;
    var t = Hl === null ? W.memoizedState : Hl.next;
    if (t !== null)
      Hl = t, yl = l;
    else {
      if (l === null)
        throw W.alternate === null ? Error(o(467)) : Error(o(310));
      yl = l, l = {
        memoizedState: yl.memoizedState,
        baseState: yl.baseState,
        baseQueue: yl.baseQueue,
        queue: yl.queue,
        next: null
      }, Hl === null ? W.memoizedState = Hl = l : Hl = Hl.next = l;
    }
    return Hl;
  }
  function fn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function au(l) {
    var t = eu;
    return eu += 1, ga === null && (ga = []), l = Xo(ga, l, t), t = W, (Hl === null ? t.memoizedState : Hl.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Rs : yf), l;
  }
  function cn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return au(l);
      if (l.$$typeof === Yl) return Ql(l);
    }
    throw Error(o(438, String(l)));
  }
  function tf(l) {
    var t = null, e = W.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = W.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = fn(), W.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = St;
    return t.index++, e;
  }
  function Kt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function on(l) {
    var t = Ul();
    return ef(t, yl, l);
  }
  function ef(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, s = null, g = t, T = !1;
      do {
        var M = g.lane & -536870913;
        if (M !== g.lane ? (ll & M) === M : (wt & M) === M) {
          var S = g.revertLane;
          if (S === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), M === da && (T = !0);
          else if ((wt & S) === S) {
            g = g.next, S === da && (T = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, s === null ? (c = s = M, i = n) : s = s.next = M, W.lanes |= S, ge |= S;
          M = g.action, Ve && e(n, M), n = g.hasEagerState ? g.eagerState : e(n, M);
        } else
          S = {
            lane: M,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, s === null ? (c = s = S, i = n) : s = s.next = S, W.lanes |= M, ge |= M;
        g = g.next;
      } while (g !== null && g !== t);
      if (s === null ? i = n : s.next = c, !ct(n, l.memoizedState) && (Cl = !0, T && (e = ra, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function af(l) {
    var t = Ul(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ct(n, t.memoizedState) || (Cl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Fo(l, t, e) {
    var a = W, u = Ul(), n = el;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !ct(
      (yl || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Cl = !0), u = u.queue, ff(Po.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Hl !== null && Hl.memoizedState.tag & 1) {
      if (a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        Io.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), vl === null) throw Error(o(349));
      n || (wt & 127) !== 0 || ko(a, t, e);
    }
    return e;
  }
  function ko(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = W.updateQueue, t === null ? (t = fn(), W.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Io(l, t, e, a) {
    t.value = e, t.getSnapshot = a, ls(t) && ts(l);
  }
  function Po(l, t, e) {
    return e(function() {
      ls(t) && ts(l);
    });
  }
  function ls(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ct(l, e);
    } catch {
      return !0;
    }
  }
  function ts(l) {
    var t = Ne(l, 2);
    t !== null && at(t, l, 2);
  }
  function uf(l) {
    var t = Wl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Ve) {
        ae(!0);
        try {
          e();
        } finally {
          ae(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: l
    }, t;
  }
  function es(l, t, e, a) {
    return l.baseState = e, ef(
      l,
      yl,
      typeof a == "function" ? a : Kt
    );
  }
  function sy(l, t, e, a, u) {
    if (rn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      z.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, as(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function as(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = z.T, i = {};
      z.T = i;
      try {
        var c = e(u, a), s = z.S;
        s !== null && s(i, c), us(l, t, c);
      } catch (g) {
        nf(l, t, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), z.T = n;
      }
    } else
      try {
        n = e(u, a), us(l, t, n);
      } catch (g) {
        nf(l, t, g);
      }
  }
  function us(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        ns(l, t, a);
      },
      function(a) {
        return nf(l, t, a);
      }
    ) : ns(l, t, e);
  }
  function ns(l, t, e) {
    t.status = "fulfilled", t.value = e, is(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, as(l, e)));
  }
  function nf(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, is(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function is(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function fs(l, t) {
    return t;
  }
  function cs(l, t) {
    if (el) {
      var e = vl.formState;
      if (e !== null) {
        l: {
          var a = W;
          if (el) {
            if (Sl) {
              t: {
                for (var u = Sl, n = _t; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Ot(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                Sl = Ot(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            ce(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = Wl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fs,
      lastRenderedState: t
    }, e.queue = a, e = Os.bind(
      null,
      W,
      a
    ), a.dispatch = e, a = uf(!1), n = rf.bind(
      null,
      W,
      !1,
      a.queue
    ), a = Wl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = sy.bind(
      null,
      W,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function os(l) {
    var t = Ul();
    return ss(t, yl, l);
  }
  function ss(l, t, e) {
    if (t = ef(
      l,
      t,
      fs
    )[0], l = on(Kt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = au(t);
      } catch (i) {
        throw i === ya ? Iu : i;
      }
    else a = t;
    t = Ul();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (W.flags |= 2048, Sa(
      9,
      { destroy: void 0 },
      dy.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function dy(l, t) {
    l.action = t;
  }
  function ds(l) {
    var t = Ul(), e = yl;
    if (e !== null)
      return ss(t, e, l);
    Ul(), t = t.memoizedState, e = Ul();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function Sa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = W.updateQueue, t === null && (t = fn(), W.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function rs() {
    return Ul().memoizedState;
  }
  function sn(l, t, e, a) {
    var u = Wl();
    W.flags |= l, u.memoizedState = Sa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function dn(l, t, e, a) {
    var u = Ul();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    yl !== null && a !== null && Fi(a, yl.memoizedState.deps) ? u.memoizedState = Sa(t, n, e, a) : (W.flags |= l, u.memoizedState = Sa(
      1 | t,
      n,
      e,
      a
    ));
  }
  function ys(l, t) {
    sn(8390656, 8, l, t);
  }
  function ff(l, t) {
    dn(2048, 8, l, t);
  }
  function ry(l) {
    W.flags |= 4;
    var t = W.updateQueue;
    if (t === null)
      t = fn(), W.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function hs(l) {
    var t = Ul().memoizedState;
    return ry({ ref: t, nextImpl: l }), function() {
      if ((cl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ms(l, t) {
    return dn(4, 2, l, t);
  }
  function vs(l, t) {
    return dn(4, 4, l, t);
  }
  function gs(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ss(l, t, e) {
    e = e != null ? e.concat([l]) : null, dn(4, 4, gs.bind(null, t, l), e);
  }
  function cf() {
  }
  function bs(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Fi(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function ps(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Fi(t, a[1]))
      return a[0];
    if (a = l(), Ve) {
      ae(!0);
      try {
        l();
      } finally {
        ae(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function of(l, t, e) {
    return e === void 0 || (wt & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = z0(), W.lanes |= l, ge |= l, e);
  }
  function zs(l, t, e, a) {
    return ct(e, t) ? e : ma.current !== null ? (l = of(l, e, a), ct(l, t) || (Cl = !0), l) : (wt & 42) === 0 || (wt & 1073741824) !== 0 && (ll & 261930) === 0 ? (Cl = !0, l.memoizedState = e) : (l = z0(), W.lanes |= l, ge |= l, t);
  }
  function Ts(l, t, e, a, u) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var i = z.T, c = {};
    z.T = c, rf(l, !1, t, e);
    try {
      var s = u(), g = z.S;
      if (g !== null && g(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var T = fy(
          s,
          a
        );
        uu(
          l,
          t,
          T,
          ht(l)
        );
      } else
        uu(
          l,
          t,
          a,
          ht(l)
        );
    } catch (M) {
      uu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: M },
        ht()
      );
    } finally {
      H.p = n, i !== null && c.types !== null && (i.types = c.types), z.T = i;
    }
  }
  function yy() {
  }
  function sf(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = Es(l).queue;
    Ts(
      l,
      u,
      t,
      w,
      e === null ? yy : function() {
        return As(l), e(a);
      }
    );
  }
  function Es(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: w
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function As(l) {
    var t = Es(l);
    t.next === null && (t = l.alternate.memoizedState), uu(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function df() {
    return Ql(zu);
  }
  function _s() {
    return Ul().memoizedState;
  }
  function Ms() {
    return Ul().memoizedState;
  }
  function hy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ht();
          l = de(e);
          var a = re(t, l, e);
          a !== null && (at(a, t, e), Pa(a, t, e)), t = { cache: Xi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function my(l, t, e) {
    var a = ht();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, rn(l) ? Ds(t, e) : (e = Di(l, t, e, a), e !== null && (at(e, l, a), Us(e, t, a)));
  }
  function Os(l, t, e) {
    var a = ht();
    uu(l, t, e, a);
  }
  function uu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (rn(l)) Ds(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, ct(c, i))
            return wu(l, t, u, 0), vl === null && Lu(), !1;
        } catch {
        }
      if (e = Di(l, t, u, a), e !== null)
        return at(e, l, a), Us(e, t, a), !0;
    }
    return !1;
  }
  function rf(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Lf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, rn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Di(
        l,
        e,
        a,
        2
      ), t !== null && at(t, l, 2);
  }
  function rn(l) {
    var t = l.alternate;
    return l === W || t !== null && t === W;
  }
  function Ds(l, t) {
    va = un = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Us(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, xc(l, e);
    }
  }
  var nu = {
    readContext: Ql,
    use: cn,
    useCallback: El,
    useContext: El,
    useEffect: El,
    useImperativeHandle: El,
    useLayoutEffect: El,
    useInsertionEffect: El,
    useMemo: El,
    useReducer: El,
    useRef: El,
    useState: El,
    useDebugValue: El,
    useDeferredValue: El,
    useTransition: El,
    useSyncExternalStore: El,
    useId: El,
    useHostTransitionStatus: El,
    useFormState: El,
    useActionState: El,
    useOptimistic: El,
    useMemoCache: El,
    useCacheRefresh: El
  };
  nu.useEffectEvent = El;
  var Rs = {
    readContext: Ql,
    use: cn,
    useCallback: function(l, t) {
      return Wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ql,
    useEffect: ys,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, sn(
        4194308,
        4,
        gs.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return sn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      sn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = Wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ve) {
        ae(!0);
        try {
          l();
        } finally {
          ae(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = Wl();
      if (e !== void 0) {
        var u = e(t);
        if (Ve) {
          ae(!0);
          try {
            e(t);
          } finally {
            ae(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = my.bind(
        null,
        W,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = uf(l);
      var t = l.queue, e = Os.bind(null, W, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = Wl();
      return of(e, l, t);
    },
    useTransition: function() {
      var l = uf(!1);
      return l = Ts.bind(
        null,
        W,
        l.queue,
        !0,
        !1
      ), Wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = W, u = Wl();
      if (el) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), vl === null)
          throw Error(o(349));
        (ll & 127) !== 0 || ko(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, ys(Po.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        Io.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = Wl(), t = vl.identifierPrefix;
      if (el) {
        var e = Nt, a = xt;
        e = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = nn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = cy++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: df,
    useFormState: cs,
    useActionState: cs,
    useOptimistic: function(l) {
      var t = Wl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = rf.bind(
        null,
        W,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: tf,
    useCacheRefresh: function() {
      return Wl().memoizedState = hy.bind(
        null,
        W
      );
    },
    useEffectEvent: function(l) {
      var t = Wl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((cl & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, yf = {
    readContext: Ql,
    use: cn,
    useCallback: bs,
    useContext: Ql,
    useEffect: ff,
    useImperativeHandle: Ss,
    useInsertionEffect: ms,
    useLayoutEffect: vs,
    useMemo: ps,
    useReducer: on,
    useRef: rs,
    useState: function() {
      return on(Kt);
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = Ul();
      return zs(
        e,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = on(Kt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : au(l),
        t
      ];
    },
    useSyncExternalStore: Fo,
    useId: _s,
    useHostTransitionStatus: df,
    useFormState: os,
    useActionState: os,
    useOptimistic: function(l, t) {
      var e = Ul();
      return es(e, yl, l, t);
    },
    useMemoCache: tf,
    useCacheRefresh: Ms
  };
  yf.useEffectEvent = hs;
  var Hs = {
    readContext: Ql,
    use: cn,
    useCallback: bs,
    useContext: Ql,
    useEffect: ff,
    useImperativeHandle: Ss,
    useInsertionEffect: ms,
    useLayoutEffect: vs,
    useMemo: ps,
    useReducer: af,
    useRef: rs,
    useState: function() {
      return af(Kt);
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = Ul();
      return yl === null ? of(e, l, t) : zs(
        e,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = af(Kt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : au(l),
        t
      ];
    },
    useSyncExternalStore: Fo,
    useId: _s,
    useHostTransitionStatus: df,
    useFormState: ds,
    useActionState: ds,
    useOptimistic: function(l, t) {
      var e = Ul();
      return yl !== null ? es(e, yl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: tf,
    useCacheRefresh: Ms
  };
  Hs.useEffectEvent = hs;
  function hf(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : x({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var mf = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ht(), u = de(a);
      u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), Pa(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ht(), u = de(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), Pa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ht(), a = de(e);
      a.tag = 2, t != null && (a.callback = t), t = re(l, a, e), t !== null && (at(t, l, e), Pa(t, l, e));
    }
  };
  function Cs(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !wa(e, a) || !wa(u, n) : !0;
  }
  function xs(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && mf.enqueueReplaceState(t, t.state, null);
  }
  function Le(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = x({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Ns(l) {
    Vu(l);
  }
  function Bs(l) {
    console.error(l);
  }
  function Ys(l) {
    Vu(l);
  }
  function yn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function qs(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function vf(l, t, e) {
    return e = de(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      yn(l, t);
    }, e;
  }
  function js(l) {
    return l = de(l), l.tag = 3, l;
  }
  function Xs(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        qs(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      qs(t, e, a), typeof u != "function" && (Se === null ? Se = /* @__PURE__ */ new Set([this]) : Se.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function vy(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && sa(
        t,
        e,
        u,
        !0
      ), e = st.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Mt === null ? _n() : e.alternate === null && Al === 0 && (Al = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qf(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Qf(l, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Qf(l, a, u), _n(), !1;
    }
    if (el)
      return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ni && (l = Error(o(422), { cause: a }), Wa(Tt(l, e)))) : (a !== Ni && (t = Error(o(423), {
        cause: a
      }), Wa(
        Tt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = Tt(a, e), u = vf(
        l.stateNode,
        a,
        u
      ), wi(l, u), Al !== 4 && (Al = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = Tt(n, e), yu === null ? yu = [n] : yu.push(n), Al !== 4 && (Al = 2), t === null) return !0;
    a = Tt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = vf(e.stateNode, a, l), wi(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Se === null || !Se.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = js(u), Xs(
              u,
              l,
              e,
              a
            ), wi(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var gf = Error(o(461)), Cl = !1;
  function Zl(l, t, e, a) {
    t.child = l === null ? Vo(t, null, e, a) : Ze(
      t,
      l.child,
      e,
      a
    );
  }
  function Gs(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return je(t), a = ki(
      l,
      t,
      e,
      i,
      n,
      u
    ), c = Ii(), l !== null && !Cl ? (Pi(l, t, u), Jt(l, t, u)) : (el && c && Ci(t), t.flags |= 1, Zl(l, t, a, u), t.child);
  }
  function Qs(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Ui(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Zs(
        l,
        t,
        n,
        a,
        u
      )) : (l = Ju(
        e.type,
        null,
        a,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !_f(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : wa, e(i, a) && l.ref === t.ref)
        return Jt(l, t, u);
    }
    return t.flags |= 1, l = Qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Zs(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (wa(n, a) && l.ref === t.ref)
        if (Cl = !1, t.pendingProps = a = n, _f(l, u))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else
          return t.lanes = l.lanes, Jt(l, t, u);
    }
    return Sf(
      l,
      t,
      e,
      a,
      u
    );
  }
  function Vs(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return Ls(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ku(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ko(t, n) : Ji(), Jo(t);
      else
        return a = t.lanes = 536870912, Ls(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (ku(t, n.cachePool), Ko(t, n), he(), t.memoizedState = null) : (l !== null && ku(t, null), Ji(), he());
    return Zl(l, t, u, e), t.child;
  }
  function iu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ls(l, t, e, a, u) {
    var n = Qi();
    return n = n === null ? null : { parent: Rl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && ku(t, null), Ji(), Jo(t), l !== null && sa(l, t, a, !0), t.childLanes = u, null;
  }
  function hn(l, t) {
    return t = vn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function ws(l, t, e) {
    return Ze(t, l.child, null, e), l = hn(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function gy(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (el) {
        if (a.mode === "hidden")
          return l = hn(t, a), t.lanes = 536870912, iu(null, l);
        if ($i(t), (l = Sl) ? (l = ad(
          l,
          _t
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: xt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Do(l), e.return = t, t.child = e, Gl = t, Sl = null)) : l = null, l === null) throw ce(t);
        return t.lanes = 536870912, null;
      }
      return hn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ($i(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = ws(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Cl || sa(l, t, e, !1), u = (e & l.childLanes) !== 0, Cl || u) {
        if (a = vl, a !== null && (i = Nc(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ne(l, i), at(a, l, i), gf;
        _n(), t = ws(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, Sl = Ot(i.nextSibling), Gl = t, el = !0, fe = null, _t = !1, l !== null && Ho(t, l), t = hn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function mn(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Sf(l, t, e, a, u) {
    return je(t), e = ki(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = Ii(), l !== null && !Cl ? (Pi(l, t, u), Jt(l, t, u)) : (el && a && Ci(t), t.flags |= 1, Zl(l, t, e, u), t.child);
  }
  function Ks(l, t, e, a, u, n) {
    return je(t), t.updateQueue = null, e = $o(
      t,
      a,
      e,
      u
    ), Wo(l), a = Ii(), l !== null && !Cl ? (Pi(l, t, n), Jt(l, t, n)) : (el && a && Ci(t), t.flags |= 1, Zl(l, t, e, n), t.child);
  }
  function Js(l, t, e, a, u) {
    if (je(t), t.stateNode === null) {
      var n = ia, i = e.contextType;
      typeof i == "object" && i !== null && (n = Ql(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = mf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Ql(i) : ia, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (hf(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && mf.enqueueReplaceState(n, n.state, null), tu(t, a, n, u), lu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, s = Le(e, c);
      n.props = s;
      var g = n.context, T = e.contextType;
      i = ia, typeof T == "object" && T !== null && (i = Ql(T));
      var M = e.getDerivedStateFromProps;
      T = typeof M == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && xs(
        t,
        n,
        a,
        i
      ), se = !1;
      var S = t.memoizedState;
      n.state = S, tu(t, a, n, u), lu(), g = t.memoizedState, c || S !== g || se ? (typeof M == "function" && (hf(
        t,
        e,
        M,
        a
      ), g = t.memoizedState), (s = se || Cs(
        t,
        e,
        s,
        a,
        S,
        g,
        i
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Li(l, t), i = t.memoizedProps, T = Le(e, i), n.props = T, M = t.pendingProps, S = n.context, g = e.contextType, s = ia, typeof g == "object" && g !== null && (s = Ql(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== M || S !== s) && xs(
        t,
        n,
        a,
        s
      ), se = !1, S = t.memoizedState, n.state = S, tu(t, a, n, u), lu();
      var p = t.memoizedState;
      i !== M || S !== p || se || l !== null && l.dependencies !== null && $u(l.dependencies) ? (typeof c == "function" && (hf(
        t,
        e,
        c,
        a
      ), p = t.memoizedState), (T = se || Cs(
        t,
        e,
        T,
        a,
        S,
        p,
        s
      ) || l !== null && l.dependencies !== null && $u(l.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        p,
        s
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), n.props = a, n.state = p, n.context = s, a = T) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, mn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ze(
      t,
      l.child,
      null,
      u
    ), t.child = Ze(
      t,
      null,
      e,
      u
    )) : Zl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Jt(
      l,
      t,
      u
    ), l;
  }
  function Ws(l, t, e, a) {
    return Ye(), t.flags |= 256, Zl(l, t, e, a), t.child;
  }
  var bf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function pf(l) {
    return { baseLanes: l, cachePool: qo() };
  }
  function zf(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= yt), l;
  }
  function $s(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (el) {
        if (u ? ye(t) : he(), (l = Sl) ? (l = ad(
          l,
          _t
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: xt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Do(l), e.return = t, t.child = e, Gl = t, Sl = null)) : l = null, l === null) throw ce(t);
        return ac(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (he(), u = t.mode, c = vn(
        { mode: "hidden", children: c },
        u
      ), a = Be(
        a,
        u,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = pf(e), a.childLanes = zf(
        l,
        i,
        e
      ), t.memoizedState = bf, iu(null, a)) : (ye(t), Tf(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (ye(t), t.flags &= -257, t = Ef(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (he(), t.child = l.child, t.flags |= 128, t = null) : (he(), c = a.fallback, u = t.mode, a = vn(
          { mode: "visible", children: a.children },
          u
        ), c = Be(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Ze(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = pf(e), a.childLanes = zf(
          l,
          i,
          e
        ), t.memoizedState = bf, t = iu(null, a));
      else if (ye(t), ac(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(o(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), t = Ef(
          l,
          t,
          e
        );
      } else if (Cl || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Cl || i) {
        if (i = vl, i !== null && (a = Nc(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Ne(l, a), at(i, l, a), gf;
        ec(c) || _n(), t = Ef(
          l,
          t,
          e
        );
      } else
        ec(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, Sl = Ot(
          c.nextSibling
        ), Gl = t, el = !0, fe = null, _t = !1, l !== null && Ho(t, l), t = Tf(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (he(), c = a.fallback, u = t.mode, s = l.child, g = s.sibling, a = Qt(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, g !== null ? c = Qt(
      g,
      c
    ) : (c = Be(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, iu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = pf(e) : (u = c.cachePool, u !== null ? (s = Rl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = qo(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = zf(
      l,
      i,
      e
    ), t.memoizedState = bf, iu(l.child, a)) : (ye(t), e = l.child, l = e.sibling, e = Qt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Tf(l, t) {
    return t = vn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function vn(l, t) {
    return l = ot(22, l, null, t), l.lanes = 0, l;
  }
  function Ef(l, t, e) {
    return Ze(t, l.child, null, e), l = Tf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Fs(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qi(l.return, t, e);
  }
  function Af(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function ks(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Dl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, C(Dl, i), Zl(l, t, a, e), a = el ? Ja : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Fs(l, e, t);
        else if (l.tag === 19)
          Fs(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          l = e.alternate, l !== null && an(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Af(
          t,
          !1,
          u,
          e,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && an(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        Af(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Af(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), ge |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (sa(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, e = Qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Qt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function _f(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && $u(l)));
  }
  function Sy(l, t, e) {
    switch (t.tag) {
      case 3:
        Jl(t, t.stateNode.containerInfo), oe(t, Rl, l.memoizedState.cache), Ye();
        break;
      case 27:
      case 5:
        Ca(t);
        break;
      case 4:
        Jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        oe(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, $i(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ye(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? $s(l, t, e) : (ye(t), l = Jt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        ye(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (sa(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), u) {
          if (a)
            return ks(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), C(Dl, Dl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Vs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        oe(t, Rl, l.memoizedState.cache);
    }
    return Jt(l, t, e);
  }
  function Is(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Cl = !0;
      else {
        if (!_f(l, e) && (t.flags & 128) === 0)
          return Cl = !1, Sy(
            l,
            t,
            e
          );
        Cl = (l.flags & 131072) !== 0;
      }
    else
      Cl = !1, el && (t.flags & 1048576) !== 0 && Ro(t, Ja, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ge(t.elementType), t.type = l, typeof l == "function")
            Ui(l) ? (a = Le(l, a), t.tag = 1, t = Js(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = Sf(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Fl) {
                t.tag = 11, t = Gs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === F) {
                t.tag = 14, t = Qs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = ul(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Sf(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = Le(
          a,
          t.pendingProps
        ), Js(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Jl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Li(l, t), tu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, oe(t, Rl, a), a !== n.cache && ji(
            t,
            [Rl],
            e,
            !0
          ), lu(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Ws(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = Tt(
                Error(o(424)),
                t
              ), Wa(u), t = Ws(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = Ot(l.firstChild), Gl = t, el = !0, fe = null, _t = !0, e = Vo(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ye(), a === u) {
              t = Jt(
                l,
                t,
                e
              );
              break l;
            }
            Zl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return mn(l, t), l === null ? (e = od(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : el || (e = t.type, l = t.pendingProps, a = Cn(
          k.current
        ).createElement(e), a[Xl] = t, a[kl] = l, Vl(a, e, l), ql(a), t.stateNode = a) : t.memoizedState = od(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ca(t), l === null && el && (a = t.stateNode = id(
          t.type,
          t.pendingProps,
          k.current
        ), Gl = t, _t = !0, u = Sl, Te(t.type) ? (uc = u, Sl = Ot(a.firstChild)) : Sl = u), Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), mn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && el && ((u = a = Sl) && (a = Wy(
          a,
          t.type,
          t.pendingProps,
          _t
        ), a !== null ? (t.stateNode = a, Gl = t, Sl = Ot(a.firstChild), _t = !1, u = !0) : u = !1), u || ce(t)), Ca(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, Pf(u, n) ? a = null : i !== null && Pf(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = ki(
          l,
          t,
          oy,
          null,
          null,
          e
        ), zu._currentValue = u), mn(l, t), Zl(l, t, a, e), t.child;
      case 6:
        return l === null && el && ((l = e = Sl) && (e = $y(
          e,
          t.pendingProps,
          _t
        ), e !== null ? (t.stateNode = e, Gl = t, Sl = null, l = !0) : l = !1), l || ce(t)), null;
      case 13:
        return $s(l, t, e);
      case 4:
        return Jl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ze(
          t,
          null,
          a,
          e
        ) : Zl(l, t, a, e), t.child;
      case 11:
        return Gs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Zl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, oe(t, t.type, a.value), Zl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, je(t), u = Ql(u), a = a(u), t.flags |= 1, Zl(l, t, a, e), t.child;
      case 14:
        return Qs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Zs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return ks(l, t, e);
      case 31:
        return gy(l, t, e);
      case 22:
        return Vs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return je(t), a = Ql(Rl), l === null ? (u = Qi(), u === null && (u = vl, n = Xi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Vi(t), oe(t, Rl, u)) : ((l.lanes & e) !== 0 && (Li(l, t), tu(t, null, null, e), lu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), oe(t, Rl, a)) : (a = n.cache, oe(t, Rl, a), a !== u.cache && ji(
          t,
          [Rl],
          e,
          !0
        ))), Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Wt(l) {
    l.flags |= 4;
  }
  function Mf(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (_0()) l.flags |= 8192;
        else
          throw Qe = Pu, Zi;
    } else l.flags &= -16777217;
  }
  function Ps(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !hd(t))
      if (_0()) l.flags |= 8192;
      else
        throw Qe = Pu, Zi;
  }
  function gn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Hc() : 536870912, l.lanes |= t, Ta |= t);
  }
  function fu(l, t) {
    if (!el)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function by(l, t, e) {
    var a = t.pendingProps;
    switch (xi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Lt(Rl), Ol(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (oa(t) ? Wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bi())), bl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Wt(t), n !== null ? (bl(t), Ps(t, n)) : (bl(t), Mf(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Wt(t), bl(t), Ps(t, n)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Wt(t), bl(t), Mf(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Ou(t), e = k.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), null;
          }
          l = Y.current, oa(t) ? Co(t) : (l = id(u, a, e), t.stateNode = l, Wt(t));
        }
        return bl(t), null;
      case 5:
        if (Ou(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), null;
          }
          if (n = Y.current, oa(t))
            Co(t);
          else {
            var i = Cn(
              k.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[Xl] = t, n[kl] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Vl(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Wt(t);
          }
        }
        return bl(t), Mf(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = k.current, oa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Gl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Xl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || $0(l.nodeValue, e)), l || ce(t, !0);
          } else
            l = Cn(l).createTextNode(
              a
            ), l[Xl] = t, t.stateNode = l;
        }
        return bl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = oa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Xl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), l = !1;
          } else
            e = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return bl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = oa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Xl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), u = !1;
          } else
            u = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), gn(t, t.updateQueue), bl(t), null);
      case 4:
        return Ol(), l === null && Wf(t.stateNode.containerInfo), bl(t), null;
      case 10:
        return Lt(t.type), bl(t), null;
      case 19:
        if (O(Dl), a = t.memoizedState, a === null) return bl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) fu(a, !1);
          else {
            if (Al !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, fu(a, !1), l = n.updateQueue, t.updateQueue = l, gn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Oo(e, l), e = e.sibling;
                  return C(
                    Dl,
                    Dl.current & 1 | 2
                  ), el && Zt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && nt() > Tn && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, gn(t, l), fu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !el)
                return bl(t), null;
            } else
              2 * nt() - a.renderingStartTime > Tn && e !== 536870912 && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = nt(), l.sibling = null, e = Dl.current, C(
          Dl,
          u ? e & 1 | 2 : e & 1
        ), el && Zt(t, a.treeForkCount), l) : (bl(t), null);
      case 22:
      case 23:
        return dt(t), Wi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), e = t.updateQueue, e !== null && gn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && O(Xe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Lt(Rl), bl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function py(l, t) {
    switch (xi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Lt(Rl), Ol(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ou(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return O(Dl), null;
      case 4:
        return Ol(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return dt(t), Wi(), l !== null && O(Xe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Lt(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function l0(l, t) {
    switch (xi(t), t.tag) {
      case 3:
        Lt(Rl), Ol();
        break;
      case 26:
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Ol();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        O(Dl);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        dt(t), Wi(), l !== null && O(Xe);
        break;
      case 24:
        Lt(Rl);
    }
  }
  function cu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      rl(t, t.return, c);
    }
  }
  function me(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var s = e, g = c;
              try {
                g();
              } catch (T) {
                rl(
                  u,
                  s,
                  T
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (T) {
      rl(t, t.return, T);
    }
  }
  function t0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        wo(t, e);
      } catch (a) {
        rl(l, l.return, a);
      }
    }
  }
  function e0(l, t, e) {
    e.props = Le(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      rl(l, t, a);
    }
  }
  function ou(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      rl(l, t, u);
    }
  }
  function Bt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          rl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          rl(l, t, u);
        }
      else e.current = null;
  }
  function a0(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      rl(l, l.return, u);
    }
  }
  function Of(l, t, e) {
    try {
      var a = l.stateNode;
      Zy(a, l.type, e, t), a[kl] = t;
    } catch (u) {
      rl(l, l.return, u);
    }
  }
  function u0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Te(l.type) || l.tag === 4;
  }
  function Df(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || u0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Te(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Uf(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Xt));
    else if (a !== 4 && (a === 27 && Te(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Uf(l, t, e), l = l.sibling; l !== null; )
        Uf(l, t, e), l = l.sibling;
  }
  function Sn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Te(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (Sn(l, t, e), l = l.sibling; l !== null; )
        Sn(l, t, e), l = l.sibling;
  }
  function n0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Vl(t, a, e), t[Xl] = l, t[kl] = e;
    } catch (n) {
      rl(l, l.return, n);
    }
  }
  var $t = !1, xl = !1, Rf = !1, i0 = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function zy(l, t) {
    if (l = l.containerInfo, kf = Xn, l = So(l), Ti(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, s = -1, g = 0, T = 0, M = l, S = null;
            t: for (; ; ) {
              for (var p; M !== e || u !== 0 && M.nodeType !== 3 || (c = i + u), M !== n || a !== 0 && M.nodeType !== 3 || (s = i + a), M.nodeType === 3 && (i += M.nodeValue.length), (p = M.firstChild) !== null; )
                S = M, M = p;
              for (; ; ) {
                if (M === l) break t;
                if (S === e && ++g === u && (c = i), S === n && ++T === a && (s = i), (p = M.nextSibling) !== null) break;
                M = S, S = M.parentNode;
              }
              M = p;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (If = { focusedElem: l, selectionRange: e }, Xn = !1, jl = t; jl !== null; )
      if (t = jl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, jl = l;
      else
        for (; jl !== null; ) {
          switch (t = jl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  u = l[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var N = Le(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    N,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (V) {
                  rl(
                    e,
                    e.return,
                    V
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  tc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, jl = l;
            break;
          }
          jl = t.return;
        }
  }
  function f0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kt(l, e), a & 4 && cu(5, e);
        break;
      case 1:
        if (kt(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              rl(e, e.return, i);
            }
          else {
            var u = Le(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              rl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && t0(e), a & 512 && ou(e, e.return);
        break;
      case 3:
        if (kt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            wo(l, t);
          } catch (i) {
            rl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && n0(e);
      case 26:
      case 5:
        kt(l, e), t === null && a & 4 && a0(e), a & 512 && ou(e, e.return);
        break;
      case 12:
        kt(l, e);
        break;
      case 31:
        kt(l, e), a & 4 && s0(l, e);
        break;
      case 13:
        kt(l, e), a & 4 && d0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Ry.bind(
          null,
          e
        ), Fy(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || $t, !a) {
          t = t !== null && t.memoizedState !== null || xl, u = $t;
          var n = xl;
          $t = a, (xl = t) && !n ? It(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : kt(l, e), $t = u, xl = n;
        }
        break;
      case 30:
        break;
      default:
        kt(l, e);
    }
  }
  function c0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, c0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ni(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var pl = null, Pl = !1;
  function Ft(l, t, e) {
    for (e = e.child; e !== null; )
      o0(l, t, e), e = e.sibling;
  }
  function o0(l, t, e) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(xa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        xl || Bt(e, t), Ft(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        xl || Bt(e, t);
        var a = pl, u = Pl;
        Te(e.type) && (pl = e.stateNode, Pl = !1), Ft(
          l,
          t,
          e
        ), Su(e.stateNode), pl = a, Pl = u;
        break;
      case 5:
        xl || Bt(e, t);
      case 6:
        if (a = pl, u = Pl, pl = null, Ft(
          l,
          t,
          e
        ), pl = a, Pl = u, pl !== null)
          if (Pl)
            try {
              (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(e.stateNode);
            } catch (n) {
              rl(
                e,
                t,
                n
              );
            }
          else
            try {
              pl.removeChild(e.stateNode);
            } catch (n) {
              rl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        pl !== null && (Pl ? (l = pl, td(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ra(l)) : td(pl, e.stateNode));
        break;
      case 4:
        a = pl, u = Pl, pl = e.stateNode.containerInfo, Pl = !0, Ft(
          l,
          t,
          e
        ), pl = a, Pl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        me(2, e, t), xl || me(4, e, t), Ft(
          l,
          t,
          e
        );
        break;
      case 1:
        xl || (Bt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && e0(
          e,
          t,
          a
        )), Ft(
          l,
          t,
          e
        );
        break;
      case 21:
        Ft(
          l,
          t,
          e
        );
        break;
      case 22:
        xl = (a = xl) || e.memoizedState !== null, Ft(
          l,
          t,
          e
        ), xl = a;
        break;
      default:
        Ft(
          l,
          t,
          e
        );
    }
  }
  function s0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ra(l);
      } catch (e) {
        rl(t, t.return, e);
      }
    }
  }
  function d0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ra(l);
      } catch (e) {
        rl(t, t.return, e);
      }
  }
  function Ty(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new i0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new i0()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function bn(l, t) {
    var e = Ty(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Hy.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function lt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Te(c.type)) {
                pl = c.stateNode, Pl = !1;
                break l;
              }
              break;
            case 5:
              pl = c.stateNode, Pl = !1;
              break l;
            case 3:
            case 4:
              pl = c.stateNode.containerInfo, Pl = !0;
              break l;
          }
          c = c.return;
        }
        if (pl === null) throw Error(o(160));
        o0(n, i, u), pl = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        r0(t, l), t = t.sibling;
  }
  var Ht = null;
  function r0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l), tt(l), a & 4 && (me(3, l, l.return), cu(3, l), me(5, l, l.return));
        break;
      case 1:
        lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), a & 64 && $t && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ht;
        if (lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ya] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Vl(n, a, e), n[Xl] = l, ql(n), a = n;
                      break l;
                    case "link":
                      var i = rd(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Vl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = rd(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Vl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[Xl] = l, ql(n), a = n;
                }
                l.stateNode = a;
              } else
                yd(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = dd(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? yd(
              u,
              l.type,
              l.stateNode
            ) : dd(
              u,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Of(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), e !== null && a & 4 && Of(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Pe(u, "");
          } catch (N) {
            rl(l, l.return, N);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Of(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Rf = !0);
        break;
      case 6:
        if (lt(t, l), tt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (N) {
            rl(l, l.return, N);
          }
        }
        break;
      case 3:
        if (Bn = null, u = Ht, Ht = xn(t.containerInfo), lt(t, l), Ht = u, tt(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ra(t.containerInfo);
          } catch (N) {
            rl(l, l.return, N);
          }
        Rf && (Rf = !1, y0(l));
        break;
      case 4:
        a = Ht, Ht = xn(
          l.stateNode.containerInfo
        ), lt(t, l), tt(l), Ht = a;
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 31:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
        break;
      case 13:
        lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (zn = nt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, g = $t, T = xl;
        if ($t = g || u, xl = T || s, lt(t, l), xl = T, $t = g, tt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || $t || xl || we(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var M = s.memoizedProps.style, S = M != null && M.hasOwnProperty("display") ? M.display : null;
                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (N) {
                  rl(s, s.return, N);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (N) {
                  rl(s, s.return, N);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  u ? ed(p, !0) : ed(s.stateNode, !1);
                } catch (N) {
                  rl(s, s.return, N);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, bn(l, e))));
        break;
      case 19:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, bn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (u0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Df(l);
            Sn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), e.flags &= -33);
            var c = Df(l);
            Sn(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, g = Df(l);
            Uf(
              l,
              g,
              s
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (T) {
        rl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function y0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        y0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        f0(l, t.alternate, t), t = t.sibling;
  }
  function we(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, t, t.return), we(t);
          break;
        case 1:
          Bt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && e0(
            t,
            t.return,
            e
          ), we(t);
          break;
        case 27:
          Su(t.stateNode);
        case 26:
        case 5:
          Bt(t, t.return), we(t);
          break;
        case 22:
          t.memoizedState === null && we(t);
          break;
        case 30:
          we(t);
          break;
        default:
          we(t);
      }
      l = l.sibling;
    }
  }
  function It(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(
            u,
            n,
            e
          ), cu(4, n);
          break;
        case 1:
          if (It(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              rl(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Lo(s[u], c);
            } catch (g) {
              rl(a, a.return, g);
            }
          }
          e && i & 64 && t0(n), ou(n, n.return);
          break;
        case 27:
          n0(n);
        case 26:
        case 5:
          It(
            u,
            n,
            e
          ), e && a === null && i & 4 && a0(n), ou(n, n.return);
          break;
        case 12:
          It(
            u,
            n,
            e
          );
          break;
        case 31:
          It(
            u,
            n,
            e
          ), e && i & 4 && s0(u, n);
          break;
        case 13:
          It(
            u,
            n,
            e
          ), e && i & 4 && d0(u, n);
          break;
        case 22:
          n.memoizedState === null && It(
            u,
            n,
            e
          ), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          It(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Hf(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && $a(e));
  }
  function Cf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l));
  }
  function Ct(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        h0(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function h0(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ct(
          l,
          t,
          e,
          a
        ), u & 2048 && cu(9, t);
        break;
      case 1:
        Ct(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Ct(
          l,
          t,
          e,
          a
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)));
        break;
      case 12:
        if (u & 2048) {
          Ct(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (s) {
            rl(t, t.return, s);
          }
        } else
          Ct(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Ct(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Ct(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ct(
          l,
          t,
          e,
          a
        ) : su(l, t) : n._visibility & 2 ? Ct(
          l,
          t,
          e,
          a
        ) : (n._visibility |= 2, ba(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Hf(i, t);
        break;
      case 24:
        Ct(
          l,
          t,
          e,
          a
        ), u & 2048 && Cf(t.alternate, t);
        break;
      default:
        Ct(
          l,
          t,
          e,
          a
        );
    }
  }
  function ba(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = e, s = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            n,
            i,
            c,
            s,
            u
          ), cu(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? ba(
            n,
            i,
            c,
            s,
            u
          ) : su(
            n,
            i
          ) : (T._visibility |= 2, ba(
            n,
            i,
            c,
            s,
            u
          )), u && g & 2048 && Hf(
            i.alternate,
            i
          );
          break;
        case 24:
          ba(
            n,
            i,
            c,
            s,
            u
          ), u && g & 2048 && Cf(i.alternate, i);
          break;
        default:
          ba(
            n,
            i,
            c,
            s,
            u
          );
      }
      t = t.sibling;
    }
  }
  function su(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            su(e, a), u & 2048 && Hf(
              a.alternate,
              a
            );
            break;
          case 24:
            su(e, a), u & 2048 && Cf(a.alternate, a);
            break;
          default:
            su(e, a);
        }
        t = t.sibling;
      }
  }
  var du = 8192;
  function pa(l, t, e) {
    if (l.subtreeFlags & du)
      for (l = l.child; l !== null; )
        m0(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function m0(l, t, e) {
    switch (l.tag) {
      case 26:
        pa(
          l,
          t,
          e
        ), l.flags & du && l.memoizedState !== null && c1(
          e,
          Ht,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        pa(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Ht;
        Ht = xn(l.stateNode.containerInfo), pa(
          l,
          t,
          e
        ), Ht = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = du, du = 16777216, pa(
          l,
          t,
          e
        ), du = a) : pa(
          l,
          t,
          e
        ));
        break;
      default:
        pa(
          l,
          t,
          e
        );
    }
  }
  function v0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ru(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, S0(
            a,
            l
          );
        }
      v0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        g0(l), l = l.sibling;
  }
  function g0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ru(l), l.flags & 2048 && me(9, l, l.return);
        break;
      case 3:
        ru(l);
        break;
      case 12:
        ru(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, pn(l)) : ru(l);
        break;
      default:
        ru(l);
    }
  }
  function pn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, S0(
            a,
            l
          );
        }
      v0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          me(8, t, t.return), pn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, pn(t));
          break;
        default:
          pn(t);
      }
      l = l.sibling;
    }
  }
  function S0(l, t) {
    for (; jl !== null; ) {
      var e = jl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          me(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, jl = a;
      else
        l: for (e = l; jl !== null; ) {
          a = jl;
          var u = a.sibling, n = a.return;
          if (c0(a), a === e) {
            jl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, jl = u;
            break l;
          }
          jl = n;
        }
    }
  }
  var Ey = {
    getCacheForType: function(l) {
      var t = Ql(Rl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Ql(Rl).controller.signal;
    }
  }, Ay = typeof WeakMap == "function" ? WeakMap : Map, cl = 0, vl = null, I = null, ll = 0, dl = 0, rt = null, ve = !1, za = !1, xf = !1, Pt = 0, Al = 0, ge = 0, Ke = 0, Nf = 0, yt = 0, Ta = 0, yu = null, et = null, Bf = !1, zn = 0, b0 = 0, Tn = 1 / 0, En = null, Se = null, Nl = 0, be = null, Ea = null, le = 0, Yf = 0, qf = null, p0 = null, hu = 0, jf = null;
  function ht() {
    return (cl & 2) !== 0 && ll !== 0 ? ll & -ll : z.T !== null ? Lf() : Bc();
  }
  function z0() {
    if (yt === 0)
      if ((ll & 536870912) === 0 || el) {
        var l = Ru;
        Ru <<= 1, (Ru & 3932160) === 0 && (Ru = 262144), yt = l;
      } else yt = 536870912;
    return l = st.current, l !== null && (l.flags |= 32), yt;
  }
  function at(l, t, e) {
    (l === vl && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null) && (Aa(l, 0), pe(
      l,
      ll,
      yt,
      !1
    )), Ba(l, e), ((cl & 2) === 0 || l !== vl) && (l === vl && ((cl & 2) === 0 && (Ke |= e), Al === 4 && pe(
      l,
      ll,
      yt,
      !1
    )), Yt(l));
  }
  function T0(l, t, e) {
    if ((cl & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Na(l, t), u = a ? Oy(l, t) : Gf(l, t, !0), n = a;
    do {
      if (u === 0) {
        za && !a && pe(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !_y(e)) {
          u = Gf(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = yu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Aa(c, i).flags |= 256), i = Gf(
                c,
                i,
                !1
              ), i !== 2) {
                if (xf && !s) {
                  c.errorRecoveryDisabledLanes |= n, Ke |= n, u = 4;
                  break l;
                }
                n = et, et = u, n !== null && (et === null ? et = n : et.push.apply(
                  et,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Aa(l, 0), pe(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              pe(
                a,
                t,
                yt,
                !ve
              );
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = zn + 300 - nt(), 10 < u)) {
            if (pe(
              a,
              t,
              yt,
              !ve
            ), Cu(a, 0, !0) !== 0) break l;
            le = t, a.timeoutHandle = P0(
              E0.bind(
                null,
                a,
                e,
                et,
                En,
                Bf,
                t,
                yt,
                Ke,
                Ta,
                ve,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          E0(
            a,
            e,
            et,
            En,
            Bf,
            t,
            yt,
            Ke,
            Ta,
            ve,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yt(l);
  }
  function E0(l, t, e, a, u, n, i, c, s, g, T, M, S, p) {
    if (l.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xt
      }, m0(
        t,
        n,
        M
      );
      var N = (n & 62914560) === n ? zn - nt() : (n & 4194048) === n ? b0 - nt() : 0;
      if (N = o1(
        M,
        N
      ), N !== null) {
        le = n, l.cancelPendingCommit = N(
          H0.bind(
            null,
            l,
            t,
            n,
            e,
            a,
            u,
            i,
            c,
            s,
            T,
            M,
            null,
            S,
            p
          )
        ), pe(l, n, i, !g);
        return;
      }
    }
    H0(
      l,
      t,
      n,
      e,
      a,
      u,
      i,
      c,
      s
    );
  }
  function _y(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ct(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function pe(l, t, e, a) {
    t &= ~Nf, t &= ~Ke, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ft(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Cc(l, e, t);
  }
  function An() {
    return (cl & 6) === 0 ? (mu(0), !1) : !0;
  }
  function Xf() {
    if (I !== null) {
      if (dl === 0)
        var l = I.return;
      else
        l = I, Vt = qe = null, lf(l), ha = null, ka = 0, l = I;
      for (; l !== null; )
        l0(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function Aa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, wy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), le = 0, Xf(), vl = l, I = e = Qt(l.current, null), ll = t, dl = 0, rt = null, ve = !1, za = Na(l, t), xf = !1, Ta = yt = Nf = Ke = ge = Al = 0, et = yu = null, Bf = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ft(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return Pt = t, Lu(), e;
  }
  function A0(l, t) {
    W = null, z.H = nu, t === ya || t === Iu ? (t = Go(), dl = 3) : t === Zi ? (t = Go(), dl = 4) : dl = t === gf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rt = t, I === null && (Al = 1, yn(
      l,
      Tt(t, l.current)
    ));
  }
  function _0() {
    var l = st.current;
    return l === null ? !0 : (ll & 4194048) === ll ? Mt === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === Mt : !1;
  }
  function M0() {
    var l = z.H;
    return z.H = nu, l === null ? nu : l;
  }
  function O0() {
    var l = z.A;
    return z.A = Ey, l;
  }
  function _n() {
    Al = 4, ve || (ll & 4194048) !== ll && st.current !== null || (za = !0), (ge & 134217727) === 0 && (Ke & 134217727) === 0 || vl === null || pe(
      vl,
      ll,
      yt,
      !1
    );
  }
  function Gf(l, t, e) {
    var a = cl;
    cl |= 2;
    var u = M0(), n = O0();
    (vl !== l || ll !== t) && (En = null, Aa(l, t)), t = !1;
    var i = Al;
    l: do
      try {
        if (dl !== 0 && I !== null) {
          var c = I, s = rt;
          switch (dl) {
            case 8:
              Xf(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var g = dl;
              if (dl = 0, rt = null, _a(l, c, s, g), e && za) {
                i = 0;
                break l;
              }
              break;
            default:
              g = dl, dl = 0, rt = null, _a(l, c, s, g);
          }
        }
        My(), i = Al;
        break;
      } catch (T) {
        A0(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Vt = qe = null, cl = a, z.H = u, z.A = n, I === null && (vl = null, ll = 0, Lu()), i;
  }
  function My() {
    for (; I !== null; ) D0(I);
  }
  function Oy(l, t) {
    var e = cl;
    cl |= 2;
    var a = M0(), u = O0();
    vl !== l || ll !== t ? (En = null, Tn = nt() + 500, Aa(l, t)) : za = Na(
      l,
      t
    );
    l: do
      try {
        if (dl !== 0 && I !== null) {
          t = I;
          var n = rt;
          t: switch (dl) {
            case 1:
              dl = 0, rt = null, _a(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (jo(n)) {
                dl = 0, rt = null, U0(t);
                break;
              }
              t = function() {
                dl !== 2 && dl !== 9 || vl !== l || (dl = 7), Yt(l);
              }, n.then(t, t);
              break l;
            case 3:
              dl = 7;
              break l;
            case 4:
              dl = 5;
              break l;
            case 7:
              jo(n) ? (dl = 0, rt = null, U0(t)) : (dl = 0, rt = null, _a(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var c = I;
                  if (i ? hd(i) : c.stateNode.complete) {
                    dl = 0, rt = null;
                    var s = c.sibling;
                    if (s !== null) I = s;
                    else {
                      var g = c.return;
                      g !== null ? (I = g, Mn(g)) : I = null;
                    }
                    break t;
                  }
              }
              dl = 0, rt = null, _a(l, t, n, 5);
              break;
            case 6:
              dl = 0, rt = null, _a(l, t, n, 6);
              break;
            case 8:
              Xf(), Al = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Dy();
        break;
      } catch (T) {
        A0(l, T);
      }
    while (!0);
    return Vt = qe = null, z.H = a, z.A = u, cl = e, I !== null ? 0 : (vl = null, ll = 0, Lu(), Al);
  }
  function Dy() {
    for (; I !== null && !kd(); )
      D0(I);
  }
  function D0(l) {
    var t = Is(l.alternate, l, Pt);
    l.memoizedProps = l.pendingProps, t === null ? Mn(l) : I = t;
  }
  function U0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ks(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ll
        );
        break;
      case 11:
        t = Ks(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ll
        );
        break;
      case 5:
        lf(t);
      default:
        l0(e, t), t = I = Oo(t, Pt), t = Is(e, t, Pt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Mn(l) : I = t;
  }
  function _a(l, t, e, a) {
    Vt = qe = null, lf(t), ha = null, ka = 0;
    var u = t.return;
    try {
      if (vy(
        l,
        u,
        t,
        e,
        ll
      )) {
        Al = 1, yn(
          l,
          Tt(e, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw I = u, n;
      Al = 1, yn(
        l,
        Tt(e, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (el || a === 1 ? l = !0 : za || (ll & 536870912) !== 0 ? l = !1 : (ve = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = st.current, a !== null && a.tag === 13 && (a.flags |= 16384))), R0(t, l)) : Mn(t);
  }
  function Mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        R0(
          t,
          ve
        );
        return;
      }
      l = t.return;
      var e = by(
        t.alternate,
        t,
        Pt
      );
      if (e !== null) {
        I = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        I = t;
        return;
      }
      I = t = l;
    } while (t !== null);
    Al === 0 && (Al = 5);
  }
  function R0(l, t) {
    do {
      var e = py(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, I = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        I = l;
        return;
      }
      I = l = e;
    } while (l !== null);
    Al = 6, I = null;
  }
  function H0(l, t, e, a, u, n, i, c, s) {
    l.cancelPendingCommit = null;
    do
      On();
    while (Nl !== 0);
    if ((cl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Oi, fr(
        l,
        e,
        n,
        i,
        c,
        s
      ), l === vl && (I = vl = null, ll = 0), Ea = t, be = l, le = e, Yf = n, qf = u, p0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Cy(Du, function() {
        return Y0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, u = H.p, H.p = 2, i = cl, cl |= 4;
        try {
          zy(l, t, e);
        } finally {
          cl = i, H.p = u, z.T = a;
        }
      }
      Nl = 1, C0(), x0(), N0();
    }
  }
  function C0() {
    if (Nl === 1) {
      Nl = 0;
      var l = be, t = Ea, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = H.p;
        H.p = 2;
        var u = cl;
        cl |= 4;
        try {
          r0(t, l);
          var n = If, i = So(l.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && go(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && Ti(c)) {
              var g = s.start, T = s.end;
              if (T === void 0 && (T = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  T,
                  c.value.length
                );
              else {
                var M = c.ownerDocument || document, S = M && M.defaultView || window;
                if (S.getSelection) {
                  var p = S.getSelection(), N = c.textContent.length, V = Math.min(s.start, N), ml = s.end === void 0 ? V : Math.min(s.end, N);
                  !p.extend && V > ml && (i = ml, ml = V, V = i);
                  var y = vo(
                    c,
                    V
                  ), d = vo(
                    c,
                    ml
                  );
                  if (y && d && (p.rangeCount !== 1 || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== d.node || p.focusOffset !== d.offset)) {
                    var v = M.createRange();
                    v.setStart(y.node, y.offset), p.removeAllRanges(), V > ml ? (p.addRange(v), p.extend(d.node, d.offset)) : (v.setEnd(d.node, d.offset), p.addRange(v));
                  }
                }
              }
            }
            for (M = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && M.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < M.length; c++) {
              var A = M[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Xn = !!kf, If = kf = null;
        } finally {
          cl = u, H.p = a, z.T = e;
        }
      }
      l.current = t, Nl = 2;
    }
  }
  function x0() {
    if (Nl === 2) {
      Nl = 0;
      var l = be, t = Ea, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = H.p;
        H.p = 2;
        var u = cl;
        cl |= 4;
        try {
          f0(l, t.alternate, t);
        } finally {
          cl = u, H.p = a, z.T = e;
        }
      }
      Nl = 3;
    }
  }
  function N0() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, Id();
      var l = be, t = Ea, e = le, a = p0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, Ea = be = null, B0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Se = null), ai(e), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = z.T, u = H.p, H.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = t, H.p = u;
        }
      }
      (le & 3) !== 0 && On(), Yt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === jf ? hu++ : (hu = 0, jf = l) : hu = 0, mu(0);
    }
  }
  function B0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $a(t)));
  }
  function On() {
    return C0(), x0(), N0(), Y0();
  }
  function Y0() {
    if (Nl !== 5) return !1;
    var l = be, t = Yf;
    Yf = 0;
    var e = ai(le), a = z.T, u = H.p;
    try {
      H.p = 32 > e ? 32 : e, z.T = null, e = qf, qf = null;
      var n = be, i = le;
      if (Nl = 0, Ea = be = null, le = 0, (cl & 6) !== 0) throw Error(o(331));
      var c = cl;
      if (cl |= 4, g0(n.current), h0(
        n,
        n.current,
        i,
        e
      ), cl = c, mu(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(xa, n);
        } catch {
        }
      return !0;
    } finally {
      H.p = u, z.T = a, B0(l, t);
    }
  }
  function q0(l, t, e) {
    t = Tt(e, t), t = vf(l.stateNode, t, 2), l = re(l, t, 2), l !== null && (Ba(l, 2), Yt(l));
  }
  function rl(l, t, e) {
    if (l.tag === 3)
      q0(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          q0(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Se === null || !Se.has(a))) {
            l = Tt(e, l), e = js(2), a = re(t, e, 2), a !== null && (Xs(
              e,
              a,
              t,
              l
            ), Ba(a, 2), Yt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ay();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (xf = !0, u.add(e), l = Uy.bind(null, l, t, e), t.then(l, l));
  }
  function Uy(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, vl === l && (ll & e) === e && (Al === 4 || Al === 3 && (ll & 62914560) === ll && 300 > nt() - zn ? (cl & 2) === 0 && Aa(l, 0) : Nf |= e, Ta === ll && (Ta = 0)), Yt(l);
  }
  function j0(l, t) {
    t === 0 && (t = Hc()), l = Ne(l, t), l !== null && (Ba(l, t), Yt(l));
  }
  function Ry(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), j0(l, e);
  }
  function Hy(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), j0(l, e);
  }
  function Cy(l, t) {
    return Pn(l, t);
  }
  var Dn = null, Ma = null, Zf = !1, Un = !1, Vf = !1, ze = 0;
  function Yt(l) {
    l !== Ma && l.next === null && (Ma === null ? Dn = Ma = l : Ma = Ma.next = l), Un = !0, Zf || (Zf = !0, Ny());
  }
  function mu(l, t) {
    if (!Vf && Un) {
      Vf = !0;
      do
        for (var e = !1, a = Dn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ft(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Z0(a, n));
          } else
            n = ll, n = Cu(
              a,
              a === vl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Na(a, n) || (e = !0, Z0(a, n));
          a = a.next;
        }
      while (e);
      Vf = !1;
    }
  }
  function xy() {
    X0();
  }
  function X0() {
    Un = Zf = !1;
    var l = 0;
    ze !== 0 && Ly() && (l = ze);
    for (var t = nt(), e = null, a = Dn; a !== null; ) {
      var u = a.next, n = G0(a, t);
      n === 0 ? (a.next = null, e === null ? Dn = u : e.next = u, u === null && (Ma = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Un = !0)), a = u;
    }
    Nl !== 0 && Nl !== 5 || mu(l), ze !== 0 && (ze = 0);
  }
  function G0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ft(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = ir(c, t)) : s <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = vl, e = ll, e = Cu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Na(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && li(a), ai(e)) {
        case 2:
        case 8:
          e = Uc;
          break;
        case 32:
          e = Du;
          break;
        case 268435456:
          e = Rc;
          break;
        default:
          e = Du;
      }
      return a = Q0.bind(null, l), e = Pn(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Q0(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (On() && l.callbackNode !== e)
      return null;
    var a = ll;
    return a = Cu(
      l,
      l === vl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (T0(l, a, t), G0(l, nt()), l.callbackNode != null && l.callbackNode === e ? Q0.bind(null, l) : null);
  }
  function Z0(l, t) {
    if (On()) return null;
    T0(l, t, !0);
  }
  function Ny() {
    Ky(function() {
      (cl & 6) !== 0 ? Pn(
        Dc,
        xy
      ) : X0();
    });
  }
  function Lf() {
    if (ze === 0) {
      var l = da;
      l === 0 && (l = Uu, Uu <<= 1, (Uu & 261888) === 0 && (Uu = 256)), ze = l;
    }
    return ze;
  }
  function V0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yu("" + l);
  }
  function L0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function By(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = V0(
        (u[kl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[kl] || null) ? V0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Gu(
        "action",
        "action",
        null,
        a,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ze !== 0) {
                  var s = i ? L0(u, i) : new FormData(u);
                  sf(
                    e,
                    {
                      pending: !0,
                      data: s,
                      method: u.method,
                      action: n
                    },
                    null,
                    s
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), s = i ? L0(u, i) : new FormData(u), sf(
                  e,
                  {
                    pending: !0,
                    data: s,
                    method: u.method,
                    action: n
                  },
                  n,
                  s
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var wf = 0; wf < Mi.length; wf++) {
    var Kf = Mi[wf], Yy = Kf.toLowerCase(), qy = Kf[0].toUpperCase() + Kf.slice(1);
    Rt(
      Yy,
      "on" + qy
    );
  }
  Rt(zo, "onAnimationEnd"), Rt(To, "onAnimationIteration"), Rt(Eo, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(Pr, "onTransitionRun"), Rt(ly, "onTransitionStart"), Rt(ty, "onTransitionCancel"), Rt(Ao, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), Re(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Re(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Re("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Re(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Re(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Re(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), jy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu)
  );
  function w0(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], s = c.instance, g = c.currentTarget;
            if (c = c.listener, s !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              Vu(T);
            }
            u.currentTarget = null, n = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], s = c.instance, g = c.currentTarget, c = c.listener, s !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              Vu(T);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function P(l, t) {
    var e = t[ui];
    e === void 0 && (e = t[ui] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (K0(t, l, 2, !1), e.add(a));
  }
  function Jf(l, t, e) {
    var a = 0;
    t && (a |= 4), K0(
      e,
      l,
      a,
      t
    );
  }
  var Rn = "_reactListening" + Math.random().toString(36).slice(2);
  function Wf(l) {
    if (!l[Rn]) {
      l[Rn] = !0, jc.forEach(function(e) {
        e !== "selectionchange" && (jy.has(e) || Jf(e, !1, l), Jf(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Rn] || (t[Rn] = !0, Jf("selectionchange", !1, t));
    }
  }
  function K0(l, t, e, a) {
    switch (zd(t)) {
      case 2:
        var u = r1;
        break;
      case 8:
        u = y1;
        break;
      default:
        u = oc;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function $f(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = We(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Fc(function() {
      var g = n, T = di(e), M = [];
      l: {
        var S = _o.get(l);
        if (S !== void 0) {
          var p = Gu, N = l;
          switch (l) {
            case "keypress":
              if (ju(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Hr;
              break;
            case "focusin":
              N = "focus", p = gi;
              break;
            case "focusout":
              N = "blur", p = gi;
              break;
            case "beforeblur":
            case "afterblur":
              p = gi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Pc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = br;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Nr;
              break;
            case zo:
            case To:
            case Eo:
              p = Tr;
              break;
            case Ao:
              p = Yr;
              break;
            case "scroll":
            case "scrollend":
              p = gr;
              break;
            case "wheel":
              p = jr;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Ar;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = to;
              break;
            case "toggle":
            case "beforetoggle":
              p = Gr;
          }
          var V = (t & 4) !== 0, ml = !V && (l === "scroll" || l === "scrollend"), y = V ? S !== null ? S + "Capture" : null : S;
          V = [];
          for (var d = g, v; d !== null; ) {
            var A = d;
            if (v = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || v === null || y === null || (A = ja(d, y), A != null && V.push(
              gu(d, A, v)
            )), ml) break;
            d = d.return;
          }
          0 < V.length && (S = new p(
            S,
            N,
            null,
            e,
            T
          ), M.push({ event: S, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", S && e !== si && (N = e.relatedTarget || e.fromElement) && (We(N) || N[Je]))
            break l;
          if ((p || S) && (S = T.window === T ? T : (S = T.ownerDocument) ? S.defaultView || S.parentWindow : window, p ? (N = e.relatedTarget || e.toElement, p = g, N = N ? We(N) : null, N !== null && (ml = _(N), V = N.tag, N !== ml || V !== 5 && V !== 27 && V !== 6) && (N = null)) : (p = null, N = g), p !== N)) {
            if (V = Pc, A = "onMouseLeave", y = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (V = to, A = "onPointerLeave", y = "onPointerEnter", d = "pointer"), ml = p == null ? S : qa(p), v = N == null ? S : qa(N), S = new V(
              A,
              d + "leave",
              p,
              e,
              T
            ), S.target = ml, S.relatedTarget = v, A = null, We(T) === g && (V = new V(
              y,
              d + "enter",
              N,
              e,
              T
            ), V.target = v, V.relatedTarget = ml, A = V), ml = A, p && N)
              t: {
                for (V = Xy, y = p, d = N, v = 0, A = y; A; A = V(A))
                  v++;
                A = 0;
                for (var G = d; G; G = V(G))
                  A++;
                for (; 0 < v - A; )
                  y = V(y), v--;
                for (; 0 < A - v; )
                  d = V(d), A--;
                for (; v--; ) {
                  if (y === d || d !== null && y === d.alternate) {
                    V = y;
                    break t;
                  }
                  y = V(y), d = V(d);
                }
                V = null;
              }
            else V = null;
            p !== null && J0(
              M,
              S,
              p,
              V,
              !1
            ), N !== null && ml !== null && J0(
              M,
              ml,
              N,
              V,
              !0
            );
          }
        }
        l: {
          if (S = g ? qa(g) : window, p = S.nodeName && S.nodeName.toLowerCase(), p === "select" || p === "input" && S.type === "file")
            var nl = oo;
          else if (fo(S))
            if (so)
              nl = Fr;
            else {
              nl = Wr;
              var q = Jr;
            }
          else
            p = S.nodeName, !p || p.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? g && oi(g.elementType) && (nl = oo) : nl = $r;
          if (nl && (nl = nl(l, g))) {
            co(
              M,
              nl,
              e,
              T
            );
            break l;
          }
          q && q(l, S, g), l === "focusout" && g && S.type === "number" && g.memoizedProps.value != null && ci(S, "number", S.value);
        }
        switch (q = g ? qa(g) : window, l) {
          case "focusin":
            (fo(q) || q.contentEditable === "true") && (aa = q, Ei = g, Ka = null);
            break;
          case "focusout":
            Ka = Ei = aa = null;
            break;
          case "mousedown":
            Ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ai = !1, bo(M, e, T);
            break;
          case "selectionchange":
            if (Ir) break;
          case "keydown":
          case "keyup":
            bo(M, e, T);
        }
        var $;
        if (bi)
          l: {
            switch (l) {
              case "compositionstart":
                var tl = "onCompositionStart";
                break l;
              case "compositionend":
                tl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                tl = "onCompositionUpdate";
                break l;
            }
            tl = void 0;
          }
        else
          ea ? no(l, e) && (tl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (tl = "onCompositionStart");
        tl && (eo && e.locale !== "ko" && (ea || tl !== "onCompositionStart" ? tl === "onCompositionEnd" && ea && ($ = kc()) : (ne = T, hi = "value" in ne ? ne.value : ne.textContent, ea = !0)), q = Hn(g, tl), 0 < q.length && (tl = new lo(
          tl,
          l,
          null,
          e,
          T
        ), M.push({ event: tl, listeners: q }), $ ? tl.data = $ : ($ = io(e), $ !== null && (tl.data = $)))), ($ = Zr ? Vr(l, e) : Lr(l, e)) && (tl = Hn(g, "onBeforeInput"), 0 < tl.length && (q = new lo(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), M.push({
          event: q,
          listeners: tl
        }), q.data = $)), By(
          M,
          l,
          g,
          e,
          T
        );
      }
      w0(M, t);
    });
  }
  function gu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Hn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = ja(l, e), u != null && a.unshift(
        gu(l, u, n)
      ), u = ja(l, t), u != null && a.push(
        gu(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Xy(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function J0(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, g = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (s = g, u ? (g = ja(e, n), g != null && i.unshift(
        gu(e, g, s)
      )) : u || (g = ja(e, n), g != null && i.push(
        gu(e, g, s)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Gy = /\r\n?/g, Qy = /\u0000|\uFFFD/g;
  function W0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Gy, `
`).replace(Qy, "");
  }
  function $0(l, t) {
    return t = W0(t), W0(l) === t;
  }
  function hl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
        break;
      case "className":
        Nu(l, "class", a);
        break;
      case "tabIndex":
        Nu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Nu(l, e, a);
        break;
      case "style":
        Wc(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Nu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Yu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (t !== "input" && hl(l, t, "name", u.name, u, null), hl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), hl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), hl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (hl(l, t, "encType", u.encType, u, null), hl(l, t, "method", u.method, u, null), hl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Yu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Xt);
        break;
      case "onScroll":
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Yu("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        P("beforetoggle", l), P("toggle", l), xu(l, "popover", a);
        break;
      case "xlinkActuate":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        jt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        jt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        jt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        jt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        xu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = mr.get(e) || e, xu(l, e, a));
    }
  }
  function Ff(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Wc(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && Pe(l, "" + a);
        break;
      case "onScroll":
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Xt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xc.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[kl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : xu(l, e, a);
          }
    }
  }
  function Vl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        P("error", l), P("load", l);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  hl(l, t, n, i, e, null);
              }
          }
        u && hl(l, t, "srcSet", e.srcSet, e, null), a && hl(l, t, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", l);
        var c = n = i = u = null, s = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  u = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  s = T;
                  break;
                case "defaultChecked":
                  g = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  c = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(o(137, t));
                  break;
                default:
                  hl(l, t, a, T, e, null);
              }
          }
        Lc(
          l,
          n,
          c,
          s,
          g,
          i,
          u,
          !1
        );
        return;
      case "select":
        P("invalid", l), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                hl(l, t, u, c, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
        return;
      case "textarea":
        P("invalid", l), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                hl(l, t, i, c, e, null);
            }
        Kc(l, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : hl(l, t, s, a, e, null));
        return;
      case "dialog":
        P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          P(vu[a], l);
        break;
      case "image":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", l), P("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                hl(l, t, g, a, e, null);
            }
        return;
      default:
        if (oi(t)) {
          for (T in e)
            e.hasOwnProperty(T) && (a = e[T], a !== void 0 && Ff(
              l,
              t,
              T,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && hl(l, t, c, a, e, null));
  }
  function Zy(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, s = null, g = null, T = null;
        for (p in e) {
          var M = e[p];
          if (e.hasOwnProperty(p) && M != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = M;
              default:
                a.hasOwnProperty(p) || hl(l, t, p, null, a, M);
            }
        }
        for (var S in a) {
          var p = a[S];
          if (M = e[S], a.hasOwnProperty(S) && (p != null || M != null))
            switch (S) {
              case "type":
                n = p;
                break;
              case "name":
                u = p;
                break;
              case "checked":
                g = p;
                break;
              case "defaultChecked":
                T = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(o(137, t));
                break;
              default:
                p !== M && hl(
                  l,
                  t,
                  S,
                  p,
                  a,
                  M
                );
            }
        }
        fi(
          l,
          i,
          c,
          s,
          g,
          T,
          n,
          u
        );
        return;
      case "select":
        p = i = c = S = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(n) || hl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  s
                );
            }
        for (u in a)
          if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null))
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== s && hl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  s
                );
            }
        t = c, e = i, a = p, S != null ? Ie(l, !!e, S, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = S = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                hl(l, t, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                p = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== n && hl(l, t, i, u, a, n);
            }
        wc(l, S, p);
        return;
      case "option":
        for (var N in e)
          S = e[N], e.hasOwnProperty(N) && S != null && !a.hasOwnProperty(N) && (N === "selected" ? l.selected = !1 : hl(
            l,
            t,
            N,
            null,
            a,
            S
          ));
        for (s in a)
          S = a[s], p = e[s], a.hasOwnProperty(s) && S !== p && (S != null || p != null) && (s === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : hl(
            l,
            t,
            s,
            S,
            a,
            p
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in e)
          S = e[V], e.hasOwnProperty(V) && S != null && !a.hasOwnProperty(V) && hl(l, t, V, null, a, S);
        for (g in a)
          if (S = a[g], p = e[g], a.hasOwnProperty(g) && S !== p && (S != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                hl(
                  l,
                  t,
                  g,
                  S,
                  a,
                  p
                );
            }
        return;
      default:
        if (oi(t)) {
          for (var ml in e)
            S = e[ml], e.hasOwnProperty(ml) && S !== void 0 && !a.hasOwnProperty(ml) && Ff(
              l,
              t,
              ml,
              void 0,
              a,
              S
            );
          for (T in a)
            S = a[T], p = e[T], !a.hasOwnProperty(T) || S === p || S === void 0 && p === void 0 || Ff(
              l,
              t,
              T,
              S,
              a,
              p
            );
          return;
        }
    }
    for (var y in e)
      S = e[y], e.hasOwnProperty(y) && S != null && !a.hasOwnProperty(y) && hl(l, t, y, null, a, S);
    for (M in a)
      S = a[M], p = e[M], !a.hasOwnProperty(M) || S === p || S == null && p == null || hl(l, t, M, S, a, p);
  }
  function F0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Vy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && F0(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], g = s.startTime;
            if (g > c) break;
            var T = s.transferSize, M = s.initiatorType;
            T && F0(M) && (s = s.responseEnd, i += T * (s < c ? 1 : (c - g) / (s - g)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var kf = null, If = null;
  function Cn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function k0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function I0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Pf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var lc = null;
  function Ly() {
    var l = window.event;
    return l && l.type === "popstate" ? l === lc ? !1 : (lc = l, !0) : (lc = null, !1);
  }
  var P0 = typeof setTimeout == "function" ? setTimeout : void 0, wy = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, Ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(l) {
    return ld.resolve(null).then(l).catch(Jy);
  } : P0;
  function Jy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Te(l) {
    return l === "head";
  }
  function td(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Ra(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Su(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, Su(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ya] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Su(l.ownerDocument.body);
      e = u;
    } while (e);
    Ra(t);
  }
  function ed(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function tc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          tc(e), ni(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Wy(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ya])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Ot(l.nextSibling), l === null) break;
    }
    return null;
  }
  function $y(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function ad(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function ec(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ac(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Fy(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Ot(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var uc = null;
  function ud(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return Ot(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function nd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function id(l, t, e) {
    switch (t = Cn(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function Su(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ni(l);
  }
  var Dt = /* @__PURE__ */ new Map(), fd = /* @__PURE__ */ new Set();
  function xn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var te = H.d;
  H.d = {
    f: ky,
    r: Iy,
    D: Py,
    C: l1,
    L: t1,
    m: e1,
    X: u1,
    S: a1,
    M: n1
  };
  function ky() {
    var l = te.f(), t = An();
    return l || t;
  }
  function Iy(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? As(t) : te.r(l);
  }
  var Oa = typeof document > "u" ? null : document;
  function cd(l, t, e) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var u = pt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), fd.has(u) || (fd.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Vl(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function Py(l) {
    te.D(l), cd("dns-prefetch", l, null);
  }
  function l1(l, t) {
    te.C(l, t), cd("preconnect", l, t);
  }
  function t1(l, t, e) {
    te.L(l, t, e);
    var a = Oa;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + pt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + pt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + pt(
        e.imageSizes
      ) + '"]')) : u += '[href="' + pt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Da(l);
          break;
        case "script":
          n = Ua(l);
      }
      Dt.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Dt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(bu(n)) || t === "script" && a.querySelector(pu(n)) || (t = a.createElement("link"), Vl(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function e1(l, t) {
    te.m(l, t);
    var e = Oa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(l);
      }
      if (!Dt.has(n) && (l = x({ rel: "modulepreload", href: l }, t), Dt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(pu(n)))
              return;
        }
        a = e.createElement("link"), Vl(a, "link", l), ql(a), e.head.appendChild(a);
      }
    }
  }
  function a1(l, t, e) {
    te.S(l, t, e);
    var a = Oa;
    if (a && l) {
      var u = Fe(a).hoistableStyles, n = Da(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          bu(n)
        ))
          c.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Dt.get(n)) && nc(l, e);
          var s = i = a.createElement("link");
          ql(s), Vl(s, "link", l), s._p = new Promise(function(g, T) {
            s.onload = g, s.onerror = T;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Nn(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function u1(l, t) {
    te.X(l, t);
    var e = Oa;
    if (e && l) {
      var a = Fe(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = x({ src: l, async: !0 }, t), (t = Dt.get(u)) && ic(l, t), n = e.createElement("script"), ql(n), Vl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function n1(l, t) {
    te.M(l, t);
    var e = Oa;
    if (e && l) {
      var a = Fe(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = Dt.get(u)) && ic(l, t), n = e.createElement("script"), ql(n), Vl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function od(l, t, e, a) {
    var u = (u = k.current) ? xn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Da(e.href), e = Fe(
          u
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Da(e.href);
          var n = Fe(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            bu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Dt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Dt.set(l, e), n || i1(
            u,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ua(e), e = Fe(
          u
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Da(l) {
    return 'href="' + pt(l) + '"';
  }
  function bu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function sd(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function i1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vl(t, "link", e), ql(t), l.head.appendChild(t));
  }
  function Ua(l) {
    return '[src="' + pt(l) + '"]';
  }
  function pu(l) {
    return "script[async]" + l;
  }
  function dd(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + pt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, ql(a), a;
          var u = x({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), ql(a), Vl(a, "style", u), Nn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Da(e.href);
          var n = l.querySelector(
            bu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, ql(n), n;
          a = sd(e), (u = Dt.get(u)) && nc(a, u), n = (l.ownerDocument || l).createElement("link"), ql(n);
          var i = n;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), Vl(n, "link", a), t.state.loading |= 4, Nn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ua(e.src), (u = l.querySelector(
            pu(n)
          )) ? (t.instance = u, ql(u), u) : (a = e, (u = Dt.get(n)) && (a = x({}, e), ic(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), ql(u), Vl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Nn(a, e.precedence, l));
    return t.instance;
  }
  function Nn(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function nc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Bn = null;
  function rd(l, t, e) {
    if (Bn === null) {
      var a = /* @__PURE__ */ new Map(), u = Bn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Bn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ya] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function yd(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function f1(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function hd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function c1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Da(a.href), n = t.querySelector(
          bu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Yn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, ql(n);
          return;
        }
        n = t.ownerDocument || t, a = sd(a), (u = Dt.get(u)) && nc(a, u), n = n.createElement("link"), ql(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Vl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Yn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var fc = 0;
  function o1(l, t) {
    return l.stylesheets && l.count === 0 && jn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && jn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && fc === 0 && (fc = 62500 * Vy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > fc ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Yn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var qn = null;
  function jn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, qn = /* @__PURE__ */ new Map(), t.forEach(s1, l), qn = null, Yn.call(l));
  }
  function s1(l, t) {
    if (!(t.state.loading & 4)) {
      var e = qn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), qn.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Yn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var zu = {
    $$typeof: Yl,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function d1(l, t, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function md(l, t, e, a, u, n, i, c, s, g, T, M) {
    return l = new d1(
      l,
      t,
      e,
      i,
      s,
      g,
      T,
      M,
      c
    ), t = 1, n === !0 && (t |= 24), n = ot(3, null, null, t), l.current = n, n.stateNode = l, t = Xi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Vi(n), l;
  }
  function vd(l) {
    return l ? (l = ia, l) : ia;
  }
  function gd(l, t, e, a, u, n) {
    u = vd(u), a.context === null ? a.context = u : a.pendingContext = u, a = de(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = re(l, a, t), e !== null && (at(e, l, t), Pa(e, l, t));
  }
  function Sd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function cc(l, t) {
    Sd(l, t), (l = l.alternate) && Sd(l, t);
  }
  function bd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ne(l, 67108864);
      t !== null && at(t, l, 67108864), cc(l, 67108864);
    }
  }
  function pd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = ei(t);
      var e = Ne(l, t);
      e !== null && at(e, l, t), cc(l, t);
    }
  }
  var Xn = !0;
  function r1(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = H.p;
    try {
      H.p = 2, oc(l, t, e, a);
    } finally {
      H.p = n, z.T = u;
    }
  }
  function y1(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = H.p;
    try {
      H.p = 8, oc(l, t, e, a);
    } finally {
      H.p = n, z.T = u;
    }
  }
  function oc(l, t, e, a) {
    if (Xn) {
      var u = sc(a);
      if (u === null)
        $f(
          l,
          t,
          a,
          Gn,
          e
        ), Td(l, a);
      else if (m1(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (Td(l, a), t & 4 && -1 < h1.indexOf(l)) {
        for (; u !== null; ) {
          var n = $e(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Ue(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - ft(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Yt(n), (cl & 6) === 0 && (Tn = nt() + 500, mu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ne(n, 2), c !== null && at(c, n, 2), An(), cc(n, 2);
            }
          if (n = sc(a), n === null && $f(
            l,
            t,
            a,
            Gn,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        $f(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function sc(l) {
    return l = di(l), dc(l);
  }
  var Gn = null;
  function dc(l) {
    if (Gn = null, l = We(l), l !== null) {
      var t = _(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = R(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = Q(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Gn = l, null;
  }
  function zd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pd()) {
          case Dc:
            return 2;
          case Uc:
            return 8;
          case Du:
          case lr:
            return 32;
          case Rc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rc = !1, Ee = null, Ae = null, _e = null, Tu = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), Me = [], h1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Td(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ee = null;
        break;
      case "dragenter":
      case "dragleave":
        Ae = null;
        break;
      case "mouseover":
      case "mouseout":
        _e = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eu.delete(t.pointerId);
    }
  }
  function Au(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = $e(t), t !== null && bd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function m1(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Ee = Au(
          Ee,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Ae = Au(
          Ae,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return _e = Au(
          _e,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(
          n,
          Au(
            Tu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Eu.set(
          n,
          Au(
            Eu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Ed(l) {
    var t = We(l.target);
    if (t !== null) {
      var e = _(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = R(e), t !== null) {
            l.blockedOn = t, Yc(l.priority, function() {
              pd(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Q(e), t !== null) {
            l.blockedOn = t, Yc(l.priority, function() {
              pd(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = sc(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        si = a, e.target.dispatchEvent(a), si = null;
      } else
        return t = $e(e), t !== null && bd(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Ad(l, t, e) {
    Qn(l) && e.delete(t);
  }
  function v1() {
    rc = !1, Ee !== null && Qn(Ee) && (Ee = null), Ae !== null && Qn(Ae) && (Ae = null), _e !== null && Qn(_e) && (_e = null), Tu.forEach(Ad), Eu.forEach(Ad);
  }
  function Zn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, rc || (rc = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      v1
    )));
  }
  var Vn = null;
  function _d(l) {
    Vn !== l && (Vn = l, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Vn === l && (Vn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (dc(a || e) === null)
              continue;
            break;
          }
          var n = $e(e);
          n !== null && (l.splice(t, 3), t -= 3, sf(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Ra(l) {
    function t(s) {
      return Zn(s, l);
    }
    Ee !== null && Zn(Ee, l), Ae !== null && Zn(Ae, l), _e !== null && Zn(_e, l), Tu.forEach(t), Eu.forEach(t);
    for (var e = 0; e < Me.length; e++) {
      var a = Me[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Me.length && (e = Me[0], e.blockedOn === null); )
      Ed(e), e.blockedOn === null && Me.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[kl] || null;
        if (typeof n == "function")
          i || _d(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[kl] || null)
              c = i.formAction;
            else if (dc(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), _d(e);
        }
      }
  }
  function Md() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function yc(l) {
    this._internalRoot = l;
  }
  Ln.prototype.render = yc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = ht();
    gd(e, a, l, t, null, null);
  }, Ln.prototype.unmount = yc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      gd(l.current, 2, null, l, null, null), An(), t[Je] = null;
    }
  };
  function Ln(l) {
    this._internalRoot = l;
  }
  Ln.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Bc();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Me.length && t !== 0 && t < Me[e].priority; e++) ;
      Me.splice(e, 0, l), e === 0 && Ed(l);
    }
  };
  var Od = m.version;
  if (Od !== "19.2.4")
    throw Error(
      o(
        527,
        Od,
        "19.2.4"
      )
    );
  H.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var g1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wn.isDisabled && wn.supportsFiber)
      try {
        xa = wn.inject(
          g1
        ), it = wn;
      } catch {
      }
  }
  return Mu.createRoot = function(l, t) {
    if (!b(l)) throw Error(o(299));
    var e = !1, a = "", u = Ns, n = Bs, i = Ys;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = md(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      i,
      Md
    ), l[Je] = t.current, Wf(l), new yc(t);
  }, Mu.hydrateRoot = function(l, t, e) {
    if (!b(l)) throw Error(o(299));
    var a = !1, u = "", n = Ns, i = Bs, c = Ys, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = md(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      u,
      s,
      n,
      i,
      c,
      Md
    ), t.context = vd(null), e = t.current, a = ht(), a = ei(a), u = de(a), u.callback = null, re(e, u, a), e = a, t.current.lanes = e, Ba(t, e), Yt(t), l[Je] = t.current, Wf(l), new Ln(t);
  }, Mu.version = "19.2.4", Mu;
}
var qd;
function O1() {
  if (qd) return mc.exports;
  qd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (m) {
        console.error(m);
      }
  }
  return f(), mc.exports = M1(), mc.exports;
}
var D1 = O1(), qt = Ac();
const zl = 8, Tl = 960, mt = 1240, wd = "clawd_ui_block_blast_best", pc = [
  { fill: "#ff845c", shade: "#a53a1f", glow: "rgba(255,132,92,0.36)", stroke: "#fff4ea" },
  { fill: "#63d0ff", shade: "#1e7191", glow: "rgba(99,208,255,0.34)", stroke: "#effcff" },
  { fill: "#ffd56d", shade: "#a47d1d", glow: "rgba(255,213,109,0.32)", stroke: "#fff8df" },
  { fill: "#7fe48d", shade: "#2f7f44", glow: "rgba(127,228,141,0.32)", stroke: "#effff2" },
  { fill: "#c591ff", shade: "#7142a8", glow: "rgba(197,145,255,0.3)", stroke: "#faf4ff" },
  { fill: "#ff95bb", shade: "#9a4561", glow: "rgba(255,149,187,0.3)", stroke: "#fff4f7" }
], Kn = [
  { id: "single", label: "Single", weight: 8, cells: [{ x: 0, y: 0 }] },
  { id: "domino-h", label: "Domino H", weight: 7, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }] },
  { id: "domino-v", label: "Domino V", weight: 5, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }] },
  { id: "tri-line-h", label: "Line 3 H", weight: 9, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }] },
  { id: "tri-line-v", label: "Line 3 V", weight: 8, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }] },
  { id: "tri-corner-r", label: "Mini L", weight: 7, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }] },
  { id: "tri-corner-l", label: "Mini J", weight: 7, cells: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }] },
  { id: "square2", label: "Square 2", weight: 7, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }] },
  { id: "line4h", label: "I 4 H", weight: 7, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }] },
  { id: "line4v", label: "I 4 V", weight: 6, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }] },
  { id: "t4", label: "T 4", weight: 5, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }] },
  { id: "s4", label: "S 4", weight: 4, cells: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }] },
  { id: "z4", label: "Z 4", weight: 4, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }] },
  { id: "l4", label: "L 4", weight: 5, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }] },
  { id: "j4", label: "J 4", weight: 5, cells: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }] },
  { id: "line5h", label: "I 5 H", weight: 4, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }] },
  { id: "line5v", label: "I 5 V", weight: 3, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }] },
  {
    id: "rect2x3",
    label: "Rect 2x3",
    weight: 3,
    cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
  },
  { id: "t5", label: "T 5", weight: 2, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }] }
];
let jd = null;
function Xd(f, m, h) {
  return Math.max(m, Math.min(h, f));
}
function ee(f, m) {
  return f * zl + m;
}
function Wn(f) {
  const m = f * 1664525 + 1013904223 >>> 0;
  return m === 0 ? 1 : m;
}
function Kd(f) {
  const m = Wn(f);
  return [m, m / 4294967295];
}
function U1() {
  if (typeof globalThis.crypto < "u" && typeof globalThis.crypto.getRandomValues == "function") {
    const o = new Uint32Array(1);
    return globalThis.crypto.getRandomValues(o), Wn(o[0] || 1);
  }
  const f = typeof Date < "u" ? Date.now() >>> 0 : 0, m = typeof performance < "u" ? Math.floor(performance.now() * 1e3) >>> 0 : 0, h = Math.floor(Math.random() * 4294967295) >>> 0;
  return Wn(f ^ m ^ h || 1);
}
function R1() {
  if (typeof window > "u") return 0;
  const f = window.localStorage.getItem(wd), m = f == null ? 0 : Number.parseInt(f, 10);
  return Number.isFinite(m) ? Math.max(0, m) : 0;
}
function H1(f) {
  typeof window < "u" && window.localStorage.setItem(wd, String(f));
}
function C1(f) {
  const m = [];
  for (let h = 0; h < zl; h += 1) {
    let o = "";
    for (let b = 0; b < zl; b += 1)
      o += f[ee(h, b)] ? "#" : ".";
    m.push(o);
  }
  return m;
}
function x1() {
  return Array.from({ length: zl * zl }, () => null);
}
function Ha(f, m = !1) {
  const h = m && !f, o = f ? 620 : h ? 476 : 560, b = o / zl, _ = (Tl - o) / 2, R = f ? 150 : h ? 92 : 188, Q = f ? 820 : h ? 636 : 860, D = f ? 254 : h ? 208 : 240, E = f ? 184 : h ? 148 : 214, j = h ? 12 : 20, x = (Tl - D * 3 - j * 2) / 2;
  return {
    boardX: _,
    boardY: R,
    boardSize: o,
    cell: b,
    trayY: Q,
    slots: [
      { x, y: Q, w: D, h: E },
      { x: x + D + j, y: Q, w: D, h: E },
      { x: x + (D + j) * 2, y: Q, w: D, h: E }
    ]
  };
}
function N1(f) {
  return {
    width: Math.max(...f.map((m) => m.x)) + 1,
    height: Math.max(...f.map((m) => m.y)) + 1
  };
}
function B1(f, m, h) {
  const o = N1(f.cells);
  return {
    id: `${f.id}::${h}`,
    templateId: f.id,
    label: f.label,
    cells: f.cells.map((b) => ({ ...b })),
    width: o.width,
    height: o.height,
    points: f.cells.length * 10,
    color: m
  };
}
function Y1(f) {
  const m = Kn.reduce((_, R) => _ + R.weight, 0), [h, o] = Kd(f);
  let b = o * m;
  for (const _ of Kn)
    if (b -= _.weight, b <= 0)
      return [h, _];
  return [h, Kn[Kn.length - 1]];
}
function q1(f) {
  const [m, h] = Kd(f), o = Math.min(pc.length - 1, Math.floor(h * pc.length));
  return [m, pc[o]];
}
function j1(f) {
  let m = f, h, o;
  return [m, h] = Y1(m), [m, o] = q1(m), [B1(h, o, m.toString(16)), m];
}
function X1(f, m) {
  let h = f;
  for (let _ = 0; _ < 6; _ += 1) {
    const [R, Q] = Ec([], h), D = R.map((E) => E.templateId).join(",");
    if (D !== m || _ === 5)
      return [R, Q, D];
    h = Wn(Q ^ (_ + 1) * 2654435769 >>> 0 || 1);
  }
  const [o, b] = Ec([], h);
  return [o, b, o.map((_) => _.templateId).join(",")];
}
function _c(f, m, h, o) {
  for (const b of m.cells) {
    const _ = h + b.y, R = o + b.x;
    if (_ < 0 || _ >= zl || R < 0 || R >= zl || f[ee(_, R)])
      return !1;
  }
  return !0;
}
function G1(f, m) {
  for (let h = 0; h <= zl - m.height; h += 1)
    for (let o = 0; o <= zl - m.width; o += 1)
      if (_c(f, m, h, o))
        return !0;
  return !1;
}
function Jd(f, m) {
  return m.reduce((h, o) => h + (G1(f, o) ? 1 : 0), 0);
}
function Wd(f) {
  const m = [], h = [];
  for (let o = 0; o < zl; o += 1) {
    let b = !0;
    for (let _ = 0; _ < zl; _ += 1)
      if (!f[ee(o, _)]) {
        b = !1;
        break;
      }
    b && m.push(o);
  }
  for (let o = 0; o < zl; o += 1) {
    let b = !0;
    for (let _ = 0; _ < zl; _ += 1)
      if (!f[ee(_, o)]) {
        b = !1;
        break;
      }
    b && h.push(o);
  }
  return { rows: m, cols: h };
}
function Q1(f, m, h, o) {
  const b = f.cells.map((D) => ({ row: m + D.y, col: h + D.x }));
  if (!_c(o, f, m, h))
    return null;
  const R = [...o];
  for (const D of f.cells)
    R[ee(m + D.y, h + D.x)] = f.color;
  const Q = Wd(R);
  return { pieceId: f.id, row: m, col: h, cells: b, canPlace: !0, rows: Q.rows, cols: Q.cols };
}
function zc(f, m, h, o, b) {
  const _ = f.cell * 1.2;
  if (!(h >= f.boardX - _ && h <= f.boardX + f.boardSize + _ && o >= f.boardY - _ && o <= f.boardY + f.boardSize + _))
    return null;
  const Q = Xd(Math.round((h - f.boardX) / f.cell - m.width / 2), 0, zl - m.width), D = Xd(Math.round((o - f.boardY) / f.cell - m.height / 2), 0, zl - m.height);
  return Q1(m, D, Q, b);
}
function Ec(f, m) {
  if (f.length > 0)
    return [f, m];
  const h = [];
  let o = m;
  for (; h.length < 3; ) {
    let b;
    [b, o] = j1(o), !(h.filter((R) => R.templateId === b.templateId).length >= 2) && h.push(b);
  }
  return [h, o];
}
function $l(f, m, h, o, b, _) {
  const R = Math.min(_, o / 2, b / 2);
  f.beginPath(), f.moveTo(m + R, h), f.arcTo(m + o, h, m + o, h + b, R), f.arcTo(m + o, h + b, m, h + b, R), f.arcTo(m, h + b, m, h, R), f.arcTo(m, h, m + o, h, R), f.closePath();
}
function Jn(f, m, h, o, b, _) {
  const R = _?.alpha ?? 1, Q = Math.max(3, o * 0.08);
  _?.glow && (f.save(), f.globalAlpha = R * 0.7, f.shadowColor = b.glow, f.shadowBlur = 22, $l(f, m, h, o, o, o * 0.24), f.fillStyle = b.fill, f.fill(), f.restore()), f.save(), f.globalAlpha = R, $l(f, m, h, o, o, o * 0.24);
  const D = f.createLinearGradient(m, h, m, h + o);
  D.addColorStop(0, "#ffffff"), D.addColorStop(0.08, b.stroke), D.addColorStop(0.18, b.fill), D.addColorStop(0.72, b.fill), D.addColorStop(1, b.shade), f.fillStyle = D, f.fill(), $l(f, m + Q, h + Q, o - Q * 2, o * 0.34, o * 0.16);
  const E = f.createLinearGradient(m, h, m, h + o * 0.4);
  E.addColorStop(0, "rgba(255,255,255,0.8)"), E.addColorStop(1, "rgba(255,255,255,0)"), f.fillStyle = E, f.fill(), f.lineWidth = Math.max(2, o * 0.06), f.strokeStyle = _?.outline ?? "rgba(255,255,255,0.55)", $l(f, m + 1, h + 1, o - 2, o - 2, o * 0.22), f.stroke(), f.restore();
}
function Z1(f, m) {
  const h = f.createLinearGradient(0, 0, 0, mt);
  h.addColorStop(0, "#14285c"), h.addColorStop(0.44, "#223e81"), h.addColorStop(1, "#0f1838"), f.fillStyle = h, f.fillRect(0, 0, Tl, mt);
  const o = f.createRadialGradient(Tl * 0.18, mt * 0.12, 0, Tl * 0.18, mt * 0.12, 260);
  o.addColorStop(0, "rgba(144,217,255,0.34)"), o.addColorStop(1, "rgba(144,217,255,0)"), f.fillStyle = o, f.fillRect(0, 0, Tl, mt);
  const b = f.createRadialGradient(Tl * 0.82, mt * 0.18, 0, Tl * 0.82, mt * 0.18, 280);
  b.addColorStop(0, "rgba(255,202,96,0.2)"), b.addColorStop(1, "rgba(255,202,96,0)"), f.fillStyle = b, f.fillRect(0, 0, Tl, mt), f.save(), f.globalAlpha = m ? 0.22 : 0.14;
  for (let _ = 0; _ < 16; _ += 1)
    for (let R = 0; R < 12; R += 1) {
      const Q = R * 88 + _ % 2 * 14, D = _ * 82;
      f.fillStyle = _ % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", $l(f, Q, D, 52, 52, 14), f.fill();
    }
  f.restore();
}
function V1(f, m) {
  const h = Ha(f.fullscreen, f.compact);
  for (const o of m) {
    const b = h.boardX + o.col * h.cell + h.cell / 2, _ = h.boardY + o.row * h.cell + h.cell / 2;
    for (let R = 0; R < 3; R += 1) {
      const Q = (R + 1) / 3 * Math.PI * 2 + f.time * 3e-3;
      f.particles.push({
        x: b,
        y: _,
        vx: Math.cos(Q) * (1.2 + R * 0.5),
        vy: Math.sin(Q) * (1.1 + R * 0.45) - 1.2,
        life: 420 + R * 60,
        maxLife: 420 + R * 60,
        color: o.color.fill,
        size: 8 + R * 2
      });
    }
  }
}
function Gd(f, m) {
  f.time += m, f.flash > 0 && (f.flash = Math.max(0, f.flash - m / 220), f.flash === 0 && (f.flashRows = [], f.flashCols = []));
  const h = [];
  for (const o of f.particles)
    o.life -= m, !(o.life <= 0) && (o.x += o.vx * (m / 16), o.y += o.vy * (m / 16), o.vy += 0.03 * (m / 16), h.push(o));
  f.particles = h;
}
function Qd(f, m, h) {
  const [o, b, _] = X1(U1(), jd);
  jd = _;
  const R = x1();
  return {
    mode: f,
    board: R,
    tray: o,
    selectedPieceId: null,
    preview: null,
    drag: null,
    particles: [],
    score: 0,
    bestScore: R1(),
    combo: 0,
    clears: 0,
    placements: 0,
    message: f === "title" ? "Tap Start Run for a fresh piece lineup each time." : "Fill whole rows and columns to blast them.",
    rng: b,
    time: 0,
    flash: 0,
    flashRows: [],
    flashCols: [],
    fullscreen: m,
    compact: h,
    movesAvailable: Jd(R, o)
  };
}
function Zd(f) {
  const m = f.selectedPieceId ? f.tray.find((h) => h.id === f.selectedPieceId) ?? null : null;
  return {
    mode: f.mode,
    score: f.score,
    bestScore: f.bestScore,
    combo: f.combo,
    clears: f.clears,
    placements: f.placements,
    selectedPiece: m ? m.label : null,
    movesAvailable: f.movesAvailable,
    fullscreen: f.fullscreen,
    message: f.message
  };
}
function L1(f) {
  const m = f.selectedPieceId ? f.tray.find((o) => o.id === f.selectedPieceId) ?? null : null, h = f.preview ? `${f.preview.row},${f.preview.col} ${f.preview.canPlace ? "ok" : "blocked"}` : "none";
  return [
    `mode=${f.mode}`,
    `score=${f.score}`,
    `best=${f.bestScore}`,
    `combo=${f.combo}`,
    `clears=${f.clears}`,
    `placements=${f.placements}`,
    `moves=${f.movesAvailable}`,
    `selected=${m ? m.templateId : "none"}`,
    `fullscreen=${f.fullscreen}`,
    `tray=${f.tray.map((o) => o.templateId).join(",") || "empty"}`,
    `preview=${h}`,
    `message=${f.message}`,
    "board:",
    ...C1(f.board)
  ].join(`
`);
}
function Vd(f, m) {
  const h = f.tray.findIndex((j) => j.id === m.pieceId);
  if (h === -1)
    return;
  const o = f.tray[h];
  if (!_c(f.board, o, m.row, m.col)) {
    f.message = "That spot is blocked.", f.preview = null, f.drag = null;
    return;
  }
  for (const j of o.cells)
    f.board[ee(m.row + j.y, m.col + j.x)] = o.color;
  const b = Wd(f.board), _ = [], R = /* @__PURE__ */ new Set();
  for (const j of b.rows)
    for (let x = 0; x < zl; x += 1)
      R.add(ee(j, x));
  for (const j of b.cols)
    for (let x = 0; x < zl; x += 1)
      R.add(ee(x, j));
  for (const j of R) {
    const x = Math.floor(j / zl), al = j % zl, _l = f.board[j];
    _l && _.push({ row: x, col: al, color: _l }), f.board[j] = null;
  }
  let Q = o.points;
  if (b.rows.length + b.cols.length > 0) {
    f.combo += 1;
    const j = b.rows.length + b.cols.length, x = f.combo > 1 ? (f.combo - 1) * 30 : 0;
    Q += j * 120 + x, f.clears += j, f.flash = 1, f.flashRows = b.rows, f.flashCols = b.cols, V1(f, _), f.message = f.combo > 1 ? `Combo x${f.combo}` : `Cleared ${j} line${j === 1 ? "" : "s"}`;
  } else
    f.combo = 0, f.flash = 0, f.flashRows = [], f.flashCols = [], f.message = o.cells.length >= 5 ? "Strong placement." : "Keep building.";
  f.score += Q, f.score > f.bestScore && (f.bestScore = f.score, H1(f.bestScore)), f.tray.splice(h, 1), f.placements += 1, f.selectedPieceId = null, f.preview = null, f.drag = null;
  let D = f.tray, E = f.rng;
  [D, E] = Ec(D, E), f.tray = D, f.rng = E, f.movesAvailable = Jd(f.board, f.tray), f.movesAvailable === 0 && (f.mode = "gameover", f.message = "No moves left. Start a new run.");
}
function Ld(f, m) {
  const h = Ha(m.fullscreen, m.compact);
  f.clearRect(0, 0, Tl, mt), Z1(f, m.fullscreen), f.save(), f.fillStyle = "rgba(255,255,255,0.96)", f.font = m.fullscreen ? '700 42px "Trebuchet MS", sans-serif' : '700 38px "Trebuchet MS", sans-serif', f.textAlign = "left", f.fillText("Block Blast", 58, 70), f.font = '600 20px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(230,241,255,0.86)", f.fillText(m.fullscreen ? "Classic mode" : "Classic endless mode", 58, 100), f.restore(), f.save(), $l(f, h.boardX - 24, h.boardY - 24, h.boardSize + 48, h.boardSize + 48, 34), f.fillStyle = "rgba(8,20,56,0.5)", f.shadowColor = "rgba(0,0,0,0.24)", f.shadowBlur = 24, f.fill(), f.restore(), $l(f, h.boardX - 8, h.boardY - 8, h.boardSize + 16, h.boardSize + 16, 30);
  const o = f.createLinearGradient(h.boardX, h.boardY, h.boardX, h.boardY + h.boardSize);
  if (o.addColorStop(0, "rgba(18,35,78,0.98)"), o.addColorStop(1, "rgba(10,22,56,0.98)"), f.fillStyle = o, f.fill(), m.flash > 0) {
    f.save(), f.globalAlpha = m.flash * 0.42, f.fillStyle = "rgba(255,243,179,0.8)";
    for (const b of m.flashRows)
      $l(f, h.boardX, h.boardY + b * h.cell, h.boardSize, h.cell, 12), f.fill();
    for (const b of m.flashCols)
      $l(f, h.boardX + b * h.cell, h.boardY, h.cell, h.boardSize, 12), f.fill();
    f.restore();
  }
  for (let b = 0; b < zl; b += 1)
    for (let _ = 0; _ < zl; _ += 1) {
      const R = h.boardX + _ * h.cell + 3, Q = h.boardY + b * h.cell + 3;
      $l(f, R, Q, h.cell - 6, h.cell - 6, 16), f.fillStyle = (b + _) % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)", f.fill();
    }
  if (m.preview) {
    const b = m.tray.find((_) => _.id === m.preview?.pieceId) ?? null;
    if (b)
      for (const _ of m.preview.cells) {
        const R = h.boardX + _.col * h.cell + 5, Q = h.boardY + _.row * h.cell + 5;
        Jn(f, R, Q, h.cell - 10, b.color, {
          alpha: m.preview.canPlace ? 0.6 : 0.22,
          outline: m.preview.canPlace ? "rgba(255,255,255,0.85)" : "rgba(255,116,116,0.9)",
          glow: m.preview.canPlace
        });
      }
  }
  for (let b = 0; b < zl; b += 1)
    for (let _ = 0; _ < zl; _ += 1) {
      const R = m.board[ee(b, _)];
      R && Jn(f, h.boardX + _ * h.cell + 5, h.boardY + b * h.cell + 5, h.cell - 10, R, {
        glow: !1
      });
    }
  for (let b = 0; b < 3; b += 1) {
    const _ = h.slots[b], R = m.tray[b], Q = R && m.selectedPieceId === R.id;
    $l(f, _.x, _.y, _.w, _.h, 26);
    const D = f.createLinearGradient(_.x, _.y, _.x, _.y + _.h);
    if (D.addColorStop(0, Q ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.14)"), D.addColorStop(1, Q ? "rgba(54,135,255,0.3)" : "rgba(17,34,78,0.74)"), f.fillStyle = D, f.fill(), f.lineWidth = Q ? 4 : 2, f.strokeStyle = Q ? "rgba(178,220,255,0.95)" : "rgba(255,255,255,0.18)", f.stroke(), !R) {
      f.save(), f.globalAlpha = 0.26, $l(f, _.x + _.w / 2 - 36, _.y + _.h / 2 - 36, 72, 72, 18), f.fillStyle = "rgba(255,255,255,0.1)", f.fill(), f.restore();
      continue;
    }
    const E = Math.min(44, (_.w - 42) / Math.max(R.width + 0.25, 2), (_.h - 44) / Math.max(R.height + 0.25, 2)), j = R.width * E, x = R.height * E, al = _.x + (_.w - j) / 2, _l = _.y + (_.h - x) / 2;
    for (const Ml of R.cells)
      Jn(f, al + Ml.x * E, _l + Ml.y * E, E - 3, R.color, {
        glow: Q
      });
  }
  if (m.drag) {
    const b = m.tray.find((_) => _.id === m.drag?.pieceId) ?? null;
    if (b) {
      const _ = Math.min(46, h.cell * 0.88), R = m.drag.x - b.width * _ / 2, Q = m.drag.y - b.height * _ / 2;
      for (const D of b.cells)
        Jn(f, R + D.x * _, Q + D.y * _, _ - 4, b.color, {
          alpha: 0.88,
          glow: !0
        });
    }
  }
  f.save(), f.textAlign = "center", f.fillStyle = "rgba(231,243,255,0.92)", f.font = '700 26px "Trebuchet MS", sans-serif', f.fillText(`${m.movesAvailable} playable`, Tl / 2, h.trayY - 22), f.restore();
  for (const b of m.particles)
    f.save(), f.globalAlpha = b.life / b.maxLife, f.fillStyle = b.color, $l(f, b.x - b.size / 2, b.y - b.size / 2, b.size, b.size, b.size / 3), f.fill(), f.restore();
  m.mode === "title" && (f.save(), $l(f, 116, 392, Tl - 232, 232, 34), f.fillStyle = "rgba(6,14,38,0.76)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 52px "Trebuchet MS", sans-serif', f.fillText("Stack. Blast. Repeat.", Tl / 2, 470), f.font = '600 24px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(223,238,255,0.92)", f.fillText("Drag from the tray or tap a piece, then tap the board.", Tl / 2, 520), f.fillText("The piece lineup mirrors the mobile app more closely now.", Tl / 2, 560), f.restore()), m.mode === "gameover" && (f.save(), $l(f, 146, 368, Tl - 292, 260, 38), f.fillStyle = "rgba(7,12,32,0.82)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 54px "Trebuchet MS", sans-serif', f.fillText("No Moves Left", Tl / 2, 460), f.font = '700 28px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(231,243,255,0.9)", f.fillText(`Final score ${m.score}`, Tl / 2, 510), f.font = '600 22px "Trebuchet MS", sans-serif', f.fillText("Start a new run to reload the tray.", Tl / 2, 554), f.restore());
}
function Tc(f) {
  return {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.2,
    cursor: "pointer",
    color: f ? "#10214d" : "#eff6ff",
    background: f ? "linear-gradient(180deg, #ffe69a 0%, #ffba49 100%)" : "rgba(255,255,255,0.12)",
    boxShadow: f ? "0 10px 20px rgba(255, 182, 76, 0.25)" : "inset 0 0 0 1px rgba(255,255,255,0.14)"
  };
}
function w1() {
  const f = qt.useRef(null);
  f.current || (f.current = Qd("title", !1, typeof window < "u" ? window.innerWidth <= 560 : !1));
  const m = qt.useRef(null), h = qt.useRef(null), o = qt.useRef(f.current), [b, _] = qt.useState(() => Zd(f.current)), [R, Q] = qt.useState(() => ({
    width: typeof window > "u" ? 1280 : window.innerWidth,
    height: typeof window > "u" ? 900 : window.innerHeight
  }));
  function D() {
    _(Zd(o.current));
  }
  function E() {
    typeof window > "u" || o.current.fullscreen || window.innerWidth > 560 || window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const Z = h.current;
        if (!Z) return;
        const U = Z.getBoundingClientRect(), B = Math.max(12, Math.round(window.innerHeight * 0.07)), ul = Math.max(0, U.top + window.scrollY - B), gl = document.scrollingElement ?? document.documentElement;
        gl.scrollTop = ul, window.scrollTo({ top: ul, behavior: "auto" });
      });
    });
  }
  function j(Z) {
    const U = Qd(Z, o.current.fullscreen, o.current.compact);
    U.bestScore = o.current.bestScore, o.current = U, D();
  }
  function x() {
    j("playing"), E();
  }
  function al(Z) {
    const U = o.current;
    if (U.mode !== "playing") return;
    const B = U.tray[Z] ?? null;
    U.selectedPieceId = B ? B.id : null, U.preview = null, U.message = B ? `Selected ${B.label}` : "No piece in that slot.", D();
  }
  async function _l() {
    if (typeof document > "u") return;
    const Z = m.current;
    if (Z)
      try {
        document.fullscreenElement === Z ? await document.exitFullscreen() : await Z.requestFullscreen();
      } catch {
        o.current.message = "Fullscreen is unavailable in this browser.", D();
      }
  }
  function Ml(Z) {
    const U = h.current;
    if (!U) return null;
    const B = U.getBoundingClientRect();
    return !B.width || !B.height ? null : {
      x: (Z.clientX - B.left) / B.width * Tl,
      y: (Z.clientY - B.top) / B.height * mt
    };
  }
  function Bl(Z, U) {
    const B = o.current, ul = Ha(B.fullscreen, B.compact);
    for (let gl = 0; gl < ul.slots.length; gl += 1) {
      const z = ul.slots[gl];
      if (Z >= z.x && Z <= z.x + z.w && U >= z.y && U <= z.y + z.h)
        return B.tray[gl] ?? null;
    }
    return null;
  }
  qt.useEffect(() => {
    const Z = h.current, U = Z?.getContext("2d");
    if (!Z || !U)
      return;
    let B = 0, ul = performance.now();
    const gl = (z) => {
      const H = Math.min(34, z - ul);
      ul = z, Gd(o.current, H), Ld(U, o.current), B = window.requestAnimationFrame(gl);
    };
    return Ld(U, o.current), B = window.requestAnimationFrame(gl), () => window.cancelAnimationFrame(B);
  }, []), qt.useEffect(() => {
    const Z = window;
    return Z.render_game_to_text = () => L1(o.current), Z.advanceTime = (U) => {
      let B = U;
      for (; B > 0; ) {
        const ul = Math.min(B, 16);
        Gd(o.current, ul), B -= ul;
      }
      D();
    }, Z.__drainVirtualTimePending = () => 0, () => {
      delete Z.render_game_to_text, delete Z.advanceTime, delete Z.__drainVirtualTimePending;
    };
  }, []), qt.useEffect(() => {
    const Z = () => {
      const B = !document.fullscreenElement && window.innerWidth <= 560;
      o.current.compact !== B && (o.current.compact = B, o.current.preview = null, o.current.drag = null, D()), Q({ width: window.innerWidth, height: window.innerHeight });
    }, U = () => {
      const B = o.current.fullscreen;
      o.current.fullscreen = document.fullscreenElement === m.current, o.current.compact = !o.current.fullscreen && window.innerWidth <= 560, o.current.preview = null, o.current.drag = null, D(), B && !o.current.fullscreen && E();
    };
    return window.addEventListener("resize", Z), document.addEventListener("fullscreenchange", U), () => {
      window.removeEventListener("resize", Z), document.removeEventListener("fullscreenchange", U);
    };
  }, []), qt.useEffect(() => {
    const Z = (U) => {
      if (U.code === "KeyF") {
        U.preventDefault(), _l();
        return;
      }
      if (U.code === "KeyN" || U.code === "Enter" && o.current.mode !== "playing") {
        U.preventDefault(), x();
        return;
      }
      if (U.code === "Digit1") {
        U.preventDefault(), al(0);
        return;
      }
      if (U.code === "Digit2") {
        U.preventDefault(), al(1);
        return;
      }
      if (U.code === "Digit3") {
        U.preventDefault(), al(2);
        return;
      }
      U.code === "Escape" && o.current.selectedPieceId && (U.preventDefault(), o.current.selectedPieceId = null, o.current.preview = null, o.current.message = "Selection cleared.", D());
    };
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, []);
  const Ut = Tl / mt, X = !b.fullscreen && R.width <= 560, ut = X && b.mode === "playing", Yl = !X || !ut, Fl = Math.max(X ? 280 : 320, R.width - (b.fullscreen ? 48 : X ? 8 : 40)), vt = b.fullscreen ? Math.max(420, R.height - 270) : X ? Math.max(360, R.height - 168) : 980, Ll = Math.min(b.fullscreen ? 920 : X ? 404 : 760, Fl, vt * Ut), F = b.fullscreen ? "Drag from the tray or tap 1, 2, 3 to select a piece. Fill rows and columns to blast them away." : X ? "Tap a tray piece, then tap the board. Clear rows and columns to keep the run alive." : "Classic endless board-clearing mode with a closer Block Blast piece set and a fullscreen-friendly stage.", wl = b.mode === "gameover" ? "Run over. Start a new one from the top bar." : X ? "Tap a tray piece, then tap the board. Use Fullscreen for more room." : "Tip: tap 1, 2, or 3 to grab a tray slot instantly.", gt = {
    width: "100%",
    maxWidth: b.fullscreen ? "100vw" : 1040,
    minHeight: b.fullscreen ? "100vh" : void 0,
    boxSizing: "border-box",
    borderRadius: b.fullscreen ? 0 : X ? 24 : 32,
    padding: b.fullscreen ? "16px 18px 18px" : X ? "12px 10px 14px" : 20,
    background: "radial-gradient(circle at top left, rgba(139, 224, 255, 0.2), transparent 32%), linear-gradient(180deg, #17306d 0%, #0c173d 100%)",
    boxShadow: b.fullscreen ? "none" : X ? "0 16px 36px rgba(4, 14, 39, 0.28)" : "0 24px 60px rgba(4, 14, 39, 0.35)",
    display: "flex",
    flexDirection: "column",
    gap: X ? 8 : 14,
    color: "#eff6ff",
    overflow: "hidden"
  }, St = {
    minWidth: X ? 0 : 108,
    padding: X ? "8px 10px" : "12px 14px",
    borderRadius: X ? 16 : 20,
    background: "rgba(255,255,255,0.11)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"
  };
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      style: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        padding: b.fullscreen ? 0 : X ? "8px 4px 20px" : "24px 12px 48px",
        background: b.fullscreen ? "#08132d" : "transparent"
      },
      children: /* @__PURE__ */ L.jsxs("section", { ref: m, style: gt, children: [
        /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: b.fullscreen || X ? "flex-start" : "center",
              gap: X ? 8 : 16,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ L.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: b.fullscreen ? 28 : X ? 24 : 30, fontWeight: 800, letterSpacing: 0.3 }, children: "Block Blast" }),
                Yl ? /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 12 : 14, lineHeight: 1.42, color: "rgba(235,244,255,0.82)", maxWidth: X ? 420 : 560 }, children: F }) : null
              ] }),
              /* @__PURE__ */ L.jsxs("div", { style: { display: "flex", gap: X ? 8 : 10, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ L.jsx("button", { onClick: x, style: { ...Tc(!0), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: b.mode === "playing" ? "New Run" : "Start Run" }),
                ut ? null : /* @__PURE__ */ L.jsx("button", { onClick: () => j("title"), style: { ...Tc(!1), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: "Title" }),
                /* @__PURE__ */ L.jsx("button", { onClick: () => {
                  _l();
                }, style: { ...Tc(!1), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: b.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ L.jsxs("div", { style: X ? { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 } : { display: "flex", flexWrap: "wrap", gap: 12 }, children: [
          /* @__PURE__ */ L.jsxs("div", { style: St, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Score" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.score })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { style: St, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Best" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.bestScore })
          ] }),
          ut ? null : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
            /* @__PURE__ */ L.jsxs("div", { style: St, children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Combo" }),
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.combo })
            ] }),
            /* @__PURE__ */ L.jsxs("div", { style: St, children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Playable" }),
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.movesAvailable })
            ] })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { style: { ...St, flex: 1, minWidth: X ? 0 : 220, gridColumn: X ? "1 / -1" : void 0 }, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 14 : 16, fontWeight: 700, minHeight: X ? 22 : 28 }, children: b.selectedPiece ? `${b.selectedPiece} selected.` : b.message })
          ] })
        ] }),
        /* @__PURE__ */ L.jsx("div", { style: { width: Ll, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Tl} / ${mt}` }, children: /* @__PURE__ */ L.jsx(
          "canvas",
          {
            ref: h,
            width: Tl,
            height: mt,
            style: {
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: b.fullscreen ? 26 : X ? 22 : 28,
              touchAction: "none",
              boxShadow: "0 22px 40px rgba(3, 10, 28, 0.42)",
              cursor: o.current.drag ? "grabbing" : "pointer"
            },
            onPointerDown: (Z) => {
              const U = o.current;
              if (U.mode !== "playing") return;
              const B = Ml(Z);
              if (!B) return;
              const ul = Bl(B.x, B.y);
              ul && (U.selectedPieceId = ul.id, U.drag = { pieceId: ul.id, startX: B.x, startY: B.y, x: B.x, y: B.y }, U.preview = null, h.current?.setPointerCapture?.(Z.pointerId), D());
            },
            onPointerMove: (Z) => {
              const U = o.current;
              if (!U.drag) return;
              const B = Ml(Z);
              if (!B) return;
              U.drag.x = B.x, U.drag.y = B.y;
              const ul = U.tray.find((gl) => gl.id === U.drag?.pieceId) ?? null;
              U.preview = ul ? zc(Ha(U.fullscreen, U.compact), ul, B.x, B.y, U.board) : null;
            },
            onPointerUp: (Z) => {
              const U = o.current, B = Ml(Z);
              if (!B) return;
              if (U.drag) {
                const H = U.tray.find((sl) => sl.id === U.drag?.pieceId) ?? null, w = Math.hypot(B.x - U.drag.startX, B.y - U.drag.startY) > 14, fl = H ? zc(Ha(U.fullscreen, U.compact), H, B.x, B.y, U.board) : null;
                fl?.canPlace ? Vd(U, fl) : (U.drag = null, U.preview = null, !w && H ? (U.selectedPieceId = H.id, U.message = `Selected ${H.label}`) : U.message = "Drop a piece onto the board."), h.current?.releasePointerCapture?.(Z.pointerId), D();
                return;
              }
              if (U.mode !== "playing") return;
              const ul = Bl(B.x, B.y);
              if (ul) {
                U.selectedPieceId = ul.id, U.preview = null, U.message = `Selected ${ul.label}`, D();
                return;
              }
              const gl = U.selectedPieceId ? U.tray.find((H) => H.id === U.selectedPieceId) ?? null : null;
              if (!gl) return;
              const z = zc(Ha(U.fullscreen, U.compact), gl, B.x, B.y, U.board);
              z?.canPlace ? Vd(U, z) : (U.message = "That placement does not fit.", U.preview = z), D();
            },
            onPointerCancel: () => {
              const Z = o.current;
              Z.drag = null, Z.preview = null, D();
            }
          }
        ) }),
        /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              gap: X ? 6 : 12,
              alignItems: X ? "flex-start" : "center",
              flexWrap: "wrap",
              color: "rgba(239,246,255,0.86)",
              fontSize: X ? 12 : 14
            },
            children: [
              /* @__PURE__ */ L.jsx("div", { children: ut ? "Fullscreen gives the tray more room if you want it." : wl }),
              /* @__PURE__ */ L.jsx("div", { children: `Placements ${b.placements} � Clears ${b.clears}` })
            ]
          }
        ),
        b.fullscreen ? null : X && b.mode !== "playing" ? /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              borderRadius: 18,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
            },
            children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Mobile Tips" }),
              /* @__PURE__ */ L.jsxs("div", { style: { fontSize: 13, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                "Tap a tray piece, then tap the board to place it. Use ",
                /* @__PURE__ */ L.jsx("code", { children: "Fullscreen" }),
                " for a larger board, and press ",
                /* @__PURE__ */ L.jsx("code", { children: "N" }),
                " to restart quickly."
              ] })
            ]
          }
        ) : /* @__PURE__ */ L.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Closer Piece Set" }),
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Singles, short bars, the mini corners, classic tetromino-style shapes, long five-bars, the 2x3 rectangle, and the tall T are all in the pool now." })
              ]
            }
          ),
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Fullscreen Cleanup" }),
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The stage header, score chips, and controls all live inside the fullscreen element now, so the page keeps its shape instead of leaving controls stranded outside." })
              ]
            }
          ),
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
                /* @__PURE__ */ L.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                  "Drag pieces from the tray, or tap a tray piece and then the board. Press ",
                  /* @__PURE__ */ L.jsx("code", { children: "F" }),
                  " for fullscreen and ",
                  /* @__PURE__ */ L.jsx("code", { children: "N" }),
                  " to restart quickly."
                ] })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const $d = document.getElementById("block-blast-root");
if (!$d)
  throw new Error("Block Blast export root element was not found.");
document.title = "Block Blast | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("block-blast-export-body");
D1.createRoot($d).render(/* @__PURE__ */ L.jsx(w1, {}));
