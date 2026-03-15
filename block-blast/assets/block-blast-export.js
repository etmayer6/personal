var hc = { exports: {} }, Mu = {};
var Od;
function S1() {
  if (Od) return Mu;
  Od = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(o, b, O) {
    var R = null;
    if (O !== void 0 && (R = "" + O), b.key !== void 0 && (R = "" + b.key), "key" in b) {
      O = {};
      for (var Z in b)
        Z !== "key" && (O[Z] = b[Z]);
    } else O = b;
    return b = O.ref, {
      $$typeof: f,
      type: o,
      key: R,
      ref: b !== void 0 ? b : null,
      props: O
    };
  }
  return Mu.Fragment = v, Mu.jsx = h, Mu.jsxs = h, Mu;
}
var Dd;
function b1() {
  return Dd || (Dd = 1, hc.exports = S1()), hc.exports;
}
var K = b1(), vc = { exports: {} }, Ou = {}, mc = { exports: {} }, gc = {};
var Ud;
function z1() {
  return Ud || (Ud = 1, (function(f) {
    function v(T, C) {
      var V = T.length;
      T.push(C);
      l: for (; 0 < V; ) {
        var ol = V - 1 >>> 1, yl = T[ol];
        if (0 < b(yl, C))
          T[ol] = C, T[V] = yl, V = ol;
        else break l;
      }
    }
    function h(T) {
      return T.length === 0 ? null : T[0];
    }
    function o(T) {
      if (T.length === 0) return null;
      var C = T[0], V = T.pop();
      if (V !== C) {
        T[0] = V;
        l: for (var ol = 0, yl = T.length, r = yl >>> 1; ol < r; ) {
          var M = 2 * (ol + 1) - 1, N = T[M], Y = M + 1, w = T[Y];
          if (0 > b(N, V))
            Y < yl && 0 > b(w, N) ? (T[ol] = w, T[Y] = V, ol = Y) : (T[ol] = N, T[M] = V, ol = M);
          else if (Y < yl && 0 > b(w, V))
            T[ol] = w, T[Y] = V, ol = Y;
          else break l;
        }
      }
      return C;
    }
    function b(T, C) {
      var V = T.sortIndex - C.sortIndex;
      return V !== 0 ? V : T.id - C.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      f.unstable_now = function() {
        return O.now();
      };
    } else {
      var R = Date, Z = R.now();
      f.unstable_now = function() {
        return R.now() - Z;
      };
    }
    var D = [], E = [], X = 1, B = null, ul = 3, pl = !1, Ol = !1, Xl = !1, _t = !1, Jl = typeof setTimeout == "function" ? setTimeout : null, Ht = typeof clearTimeout == "function" ? clearTimeout : null, xl = typeof setImmediate < "u" ? setImmediate : null;
    function Yl(T) {
      for (var C = h(E); C !== null; ) {
        if (C.callback === null) o(E);
        else if (C.startTime <= T)
          o(E), C.sortIndex = C.expirationTime, v(D, C);
        else break;
        C = h(E);
      }
    }
    function G(T) {
      if (Xl = !1, Yl(T), !Ol)
        if (h(D) !== null)
          Ol = !0, U || (U = !0, Kl());
        else {
          var C = h(E);
          C !== null && Ot(G, C.startTime - T);
        }
    }
    var U = !1, H = -1, tl = 5, bl = -1;
    function Dl() {
      return _t ? !0 : !(f.unstable_now() - bl < tl);
    }
    function Ul() {
      if (_t = !1, U) {
        var T = f.unstable_now();
        bl = T;
        var C = !0;
        try {
          l: {
            Ol = !1, Xl && (Xl = !1, Ht(H), H = -1), pl = !0;
            var V = ul;
            try {
              t: {
                for (Yl(T), B = h(D); B !== null && !(B.expirationTime > T && Dl()); ) {
                  var ol = B.callback;
                  if (typeof ol == "function") {
                    B.callback = null, ul = B.priorityLevel;
                    var yl = ol(
                      B.expirationTime <= T
                    );
                    if (T = f.unstable_now(), typeof yl == "function") {
                      B.callback = yl, Yl(T), C = !0;
                      break t;
                    }
                    B === h(D) && o(D), Yl(T);
                  } else o(D);
                  B = h(D);
                }
                if (B !== null) C = !0;
                else {
                  var r = h(E);
                  r !== null && Ot(
                    G,
                    r.startTime - T
                  ), C = !1;
                }
              }
              break l;
            } finally {
              B = null, ul = V, pl = !1;
            }
            C = void 0;
          }
        } finally {
          C ? Kl() : U = !1;
        }
      }
    }
    var Kl;
    if (typeof xl == "function")
      Kl = function() {
        xl(Ul);
      };
    else if (typeof MessageChannel < "u") {
      var Ct = new MessageChannel(), Mt = Ct.port2;
      Ct.port1.onmessage = Ul, Kl = function() {
        Mt.postMessage(null);
      };
    } else
      Kl = function() {
        Jl(Ul, 0);
      };
    function Ot(T, C) {
      H = Jl(function() {
        T(f.unstable_now());
      }, C);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, f.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : tl = 0 < T ? Math.floor(1e3 / T) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return ul;
    }, f.unstable_next = function(T) {
      switch (ul) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = ul;
      }
      var V = ul;
      ul = C;
      try {
        return T();
      } finally {
        ul = V;
      }
    }, f.unstable_requestPaint = function() {
      _t = !0;
    }, f.unstable_runWithPriority = function(T, C) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var V = ul;
      ul = T;
      try {
        return C();
      } finally {
        ul = V;
      }
    }, f.unstable_scheduleCallback = function(T, C, V) {
      var ol = f.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? ol + V : ol) : V = ol, T) {
        case 1:
          var yl = -1;
          break;
        case 2:
          yl = 250;
          break;
        case 5:
          yl = 1073741823;
          break;
        case 4:
          yl = 1e4;
          break;
        default:
          yl = 5e3;
      }
      return yl = V + yl, T = {
        id: X++,
        callback: C,
        priorityLevel: T,
        startTime: V,
        expirationTime: yl,
        sortIndex: -1
      }, V > ol ? (T.sortIndex = V, v(E, T), h(D) === null && T === h(E) && (Xl ? (Ht(H), H = -1) : Xl = !0, Ot(G, V - ol))) : (T.sortIndex = yl, v(D, T), Ol || pl || (Ol = !0, U || (U = !0, Kl()))), T;
    }, f.unstable_shouldYield = Dl, f.unstable_wrapCallback = function(T) {
      var C = ul;
      return function() {
        var V = ul;
        ul = C;
        try {
          return T.apply(this, arguments);
        } finally {
          ul = V;
        }
      };
    };
  })(gc)), gc;
}
var Rd;
function p1() {
  return Rd || (Rd = 1, mc.exports = z1()), mc.exports;
}
var Sc = { exports: {} }, L = {};
var Hd;
function T1() {
  if (Hd) return L;
  Hd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), Z = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), ul = Symbol.iterator;
  function pl(r) {
    return r === null || typeof r != "object" ? null : (r = ul && r[ul] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Ol = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Xl = Object.assign, _t = {};
  function Jl(r, M, N) {
    this.props = r, this.context = M, this.refs = _t, this.updater = N || Ol;
  }
  Jl.prototype.isReactComponent = {}, Jl.prototype.setState = function(r, M) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, M, "setState");
  }, Jl.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Ht() {
  }
  Ht.prototype = Jl.prototype;
  function xl(r, M, N) {
    this.props = r, this.context = M, this.refs = _t, this.updater = N || Ol;
  }
  var Yl = xl.prototype = new Ht();
  Yl.constructor = xl, Xl(Yl, Jl.prototype), Yl.isPureReactComponent = !0;
  var G = Array.isArray;
  function U() {
  }
  var H = { H: null, A: null, T: null, S: null }, tl = Object.prototype.hasOwnProperty;
  function bl(r, M, N) {
    var Y = N.ref;
    return {
      $$typeof: f,
      type: r,
      key: M,
      ref: Y !== void 0 ? Y : null,
      props: N
    };
  }
  function Dl(r, M) {
    return bl(r.type, M, r.props);
  }
  function Ul(r) {
    return typeof r == "object" && r !== null && r.$$typeof === f;
  }
  function Kl(r) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(N) {
      return M[N];
    });
  }
  var Ct = /\/+/g;
  function Mt(r, M) {
    return typeof r == "object" && r !== null && r.key != null ? Kl("" + r.key) : M.toString(36);
  }
  function Ot(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(U, U) : (r.status = "pending", r.then(
          function(M) {
            r.status === "pending" && (r.status = "fulfilled", r.value = M);
          },
          function(M) {
            r.status === "pending" && (r.status = "rejected", r.reason = M);
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
  function T(r, M, N, Y, w) {
    var $ = typeof r;
    ($ === "undefined" || $ === "boolean") && (r = null);
    var il = !1;
    if (r === null) il = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case f:
            case v:
              il = !0;
              break;
            case X:
              return il = r._init, T(
                il(r._payload),
                M,
                N,
                Y,
                w
              );
          }
      }
    if (il)
      return w = w(r), il = Y === "" ? "." + Mt(r, 0) : Y, G(w) ? (N = "", il != null && (N = il.replace(Ct, "$&/") + "/"), T(w, M, N, "", function(Na) {
        return Na;
      })) : w != null && (Ul(w) && (w = Dl(
        w,
        N + (w.key == null || r && r.key === w.key ? "" : ("" + w.key).replace(
          Ct,
          "$&/"
        ) + "/") + il
      )), M.push(w)), 1;
    il = 0;
    var Wl = Y === "" ? "." : Y + ":";
    if (G(r))
      for (var Al = 0; Al < r.length; Al++)
        Y = r[Al], $ = Wl + Mt(Y, Al), il += T(
          Y,
          M,
          N,
          $,
          w
        );
    else if (Al = pl(r), typeof Al == "function")
      for (r = Al.call(r), Al = 0; !(Y = r.next()).done; )
        Y = Y.value, $ = Wl + Mt(Y, Al++), il += T(
          Y,
          M,
          N,
          $,
          w
        );
    else if ($ === "object") {
      if (typeof r.then == "function")
        return T(
          Ot(r),
          M,
          N,
          Y,
          w
        );
      throw M = String(r), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function C(r, M, N) {
    if (r == null) return r;
    var Y = [], w = 0;
    return T(r, Y, "", "", function($) {
      return M.call(N, $, w++);
    }), Y;
  }
  function V(r) {
    if (r._status === -1) {
      var M = r._result;
      M = M(), M.then(
        function(N) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = N);
        },
        function(N) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = N);
        }
      ), r._status === -1 && (r._status = 0, r._result = M);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var ol = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, yl = {
    map: C,
    forEach: function(r, M, N) {
      C(
        r,
        function() {
          M.apply(this, arguments);
        },
        N
      );
    },
    count: function(r) {
      var M = 0;
      return C(r, function() {
        M++;
      }), M;
    },
    toArray: function(r) {
      return C(r, function(M) {
        return M;
      }) || [];
    },
    only: function(r) {
      if (!Ul(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return L.Activity = B, L.Children = yl, L.Component = Jl, L.Fragment = h, L.Profiler = b, L.PureComponent = xl, L.StrictMode = o, L.Suspense = D, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, L.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return H.H.useMemoCache(r);
    }
  }, L.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(r, M, N) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var Y = Xl({}, r.props), w = r.key;
    if (M != null)
      for ($ in M.key !== void 0 && (w = "" + M.key), M)
        !tl.call(M, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && M.ref === void 0 || (Y[$] = M[$]);
    var $ = arguments.length - 2;
    if ($ === 1) Y.children = N;
    else if (1 < $) {
      for (var il = Array($), Wl = 0; Wl < $; Wl++)
        il[Wl] = arguments[Wl + 2];
      Y.children = il;
    }
    return bl(r.type, w, Y);
  }, L.createContext = function(r) {
    return r = {
      $$typeof: R,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: O,
      _context: r
    }, r;
  }, L.createElement = function(r, M, N) {
    var Y, w = {}, $ = null;
    if (M != null)
      for (Y in M.key !== void 0 && ($ = "" + M.key), M)
        tl.call(M, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (w[Y] = M[Y]);
    var il = arguments.length - 2;
    if (il === 1) w.children = N;
    else if (1 < il) {
      for (var Wl = Array(il), Al = 0; Al < il; Al++)
        Wl[Al] = arguments[Al + 2];
      w.children = Wl;
    }
    if (r && r.defaultProps)
      for (Y in il = r.defaultProps, il)
        w[Y] === void 0 && (w[Y] = il[Y]);
    return bl(r, $, w);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(r) {
    return { $$typeof: Z, render: r };
  }, L.isValidElement = Ul, L.lazy = function(r) {
    return {
      $$typeof: X,
      _payload: { _status: -1, _result: r },
      _init: V
    };
  }, L.memo = function(r, M) {
    return {
      $$typeof: E,
      type: r,
      compare: M === void 0 ? null : M
    };
  }, L.startTransition = function(r) {
    var M = H.T, N = {};
    H.T = N;
    try {
      var Y = r(), w = H.S;
      w !== null && w(N, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(U, ol);
    } catch ($) {
      ol($);
    } finally {
      M !== null && N.types !== null && (M.types = N.types), H.T = M;
    }
  }, L.unstable_useCacheRefresh = function() {
    return H.H.useCacheRefresh();
  }, L.use = function(r) {
    return H.H.use(r);
  }, L.useActionState = function(r, M, N) {
    return H.H.useActionState(r, M, N);
  }, L.useCallback = function(r, M) {
    return H.H.useCallback(r, M);
  }, L.useContext = function(r) {
    return H.H.useContext(r);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(r, M) {
    return H.H.useDeferredValue(r, M);
  }, L.useEffect = function(r, M) {
    return H.H.useEffect(r, M);
  }, L.useEffectEvent = function(r) {
    return H.H.useEffectEvent(r);
  }, L.useId = function() {
    return H.H.useId();
  }, L.useImperativeHandle = function(r, M, N) {
    return H.H.useImperativeHandle(r, M, N);
  }, L.useInsertionEffect = function(r, M) {
    return H.H.useInsertionEffect(r, M);
  }, L.useLayoutEffect = function(r, M) {
    return H.H.useLayoutEffect(r, M);
  }, L.useMemo = function(r, M) {
    return H.H.useMemo(r, M);
  }, L.useOptimistic = function(r, M) {
    return H.H.useOptimistic(r, M);
  }, L.useReducer = function(r, M, N) {
    return H.H.useReducer(r, M, N);
  }, L.useRef = function(r) {
    return H.H.useRef(r);
  }, L.useState = function(r) {
    return H.H.useState(r);
  }, L.useSyncExternalStore = function(r, M, N) {
    return H.H.useSyncExternalStore(
      r,
      M,
      N
    );
  }, L.useTransition = function() {
    return H.H.useTransition();
  }, L.version = "19.2.4", L;
}
var Cd;
function Ec() {
  return Cd || (Cd = 1, Sc.exports = T1()), Sc.exports;
}
var bc = { exports: {} }, wl = {};
var Nd;
function E1() {
  if (Nd) return wl;
  Nd = 1;
  var f = Ec();
  function v(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++)
        E += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return "Minified React error #" + D + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var o = {
    d: {
      f: h,
      r: function() {
        throw Error(v(522));
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
  function O(D, E, X) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: B == null ? null : "" + B,
      children: D,
      containerInfo: E,
      implementation: X
    };
  }
  var R = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Z(D, E) {
    if (D === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wl.createPortal = function(D, E) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(v(299));
    return O(D, E, null, X);
  }, wl.flushSync = function(D) {
    var E = R.T, X = o.p;
    try {
      if (R.T = null, o.p = 2, D) return D();
    } finally {
      R.T = E, o.p = X, o.d.f();
    }
  }, wl.preconnect = function(D, E) {
    typeof D == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(D, E));
  }, wl.prefetchDNS = function(D) {
    typeof D == "string" && o.d.D(D);
  }, wl.preinit = function(D, E) {
    if (typeof D == "string" && E && typeof E.as == "string") {
      var X = E.as, B = Z(X, E.crossOrigin), ul = typeof E.integrity == "string" ? E.integrity : void 0, pl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      X === "style" ? o.d.S(
        D,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: B,
          integrity: ul,
          fetchPriority: pl
        }
      ) : X === "script" && o.d.X(D, {
        crossOrigin: B,
        integrity: ul,
        fetchPriority: pl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, wl.preinitModule = function(D, E) {
    if (typeof D == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var X = Z(
            E.as,
            E.crossOrigin
          );
          o.d.M(D, {
            crossOrigin: X,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(D);
  }, wl.preload = function(D, E) {
    if (typeof D == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var X = E.as, B = Z(X, E.crossOrigin);
      o.d.L(D, X, {
        crossOrigin: B,
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
  }, wl.preloadModule = function(D, E) {
    if (typeof D == "string")
      if (E) {
        var X = Z(E.as, E.crossOrigin);
        o.d.m(D, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: X,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(D);
  }, wl.requestFormReset = function(D) {
    o.d.r(D);
  }, wl.unstable_batchedUpdates = function(D, E) {
    return D(E);
  }, wl.useFormState = function(D, E, X) {
    return R.H.useFormState(D, E, X);
  }, wl.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, wl.version = "19.2.4", wl;
}
var Bd;
function A1() {
  if (Bd) return bc.exports;
  Bd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return f(), bc.exports = E1(), bc.exports;
}
var xd;
function _1() {
  if (xd) return Ou;
  xd = 1;
  var f = p1(), v = Ec(), h = A1();
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
  function O(l) {
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
  function Z(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (O(l) !== l)
      throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = O(l), t === null) throw Error(o(188));
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
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = X(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, ul = /* @__PURE__ */ Symbol.for("react.element"), pl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ol = /* @__PURE__ */ Symbol.for("react.portal"), Xl = /* @__PURE__ */ Symbol.for("react.fragment"), _t = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), Ht = /* @__PURE__ */ Symbol.for("react.consumer"), xl = /* @__PURE__ */ Symbol.for("react.context"), Yl = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), U = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), tl = /* @__PURE__ */ Symbol.for("react.lazy"), bl = /* @__PURE__ */ Symbol.for("react.activity"), Dl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ul = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = Ul && l[Ul] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ct = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ct ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Xl:
        return "Fragment";
      case Jl:
        return "Profiler";
      case _t:
        return "StrictMode";
      case G:
        return "Suspense";
      case U:
        return "SuspenseList";
      case bl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ol:
          return "Portal";
        case xl:
          return l.displayName || "Context";
        case Ht:
          return (l._context.displayName || "Context") + ".Consumer";
        case Yl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case H:
          return t = l.displayName || null, t !== null ? t : Mt(l.type) || "Memo";
        case tl:
          t = l._payload, l = l._init;
          try {
            return Mt(l(t));
          } catch {
          }
      }
    return null;
  }
  var Ot = Array.isArray, T = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ol = [], yl = -1;
  function r(l) {
    return { current: l };
  }
  function M(l) {
    0 > yl || (l.current = ol[yl], ol[yl] = null, yl--);
  }
  function N(l, t) {
    yl++, ol[yl] = l.current, l.current = t;
  }
  var Y = r(null), w = r(null), $ = r(null), il = r(null);
  function Wl(l, t) {
    switch (N($, t), N(w, l), N(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? k0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = k0(t), l = F0(t, l);
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
    M(Y), N(Y, l);
  }
  function Al() {
    M(Y), M(w), M($);
  }
  function Na(l) {
    l.memoizedState !== null && N(il, l);
    var t = Y.current, e = F0(t, l.type);
    t !== e && (N(w, l), N(Y, e));
  }
  function Uu(l) {
    w.current === l && (M(Y), M(w)), il.current === l && (M(il), Tu._currentValue = V);
  }
  var $n, _c;
  function De(l) {
    if ($n === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        $n = t && t[1] || "", _c = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $n + l + _c;
  }
  var kn = !1;
  function Fn(l, t) {
    if (!l || kn) return "";
    kn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (z) {
                  var S = z;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (z) {
                  S = z;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                S = z;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (z) {
            if (z && S && typeof z.stack == "string")
              return [z.stack, S.stack];
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
                  var p = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      kn = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? De(e) : "";
  }
  function $d(l, t) {
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
        return Fn(l.type, !1);
      case 11:
        return Fn(l.type.render, !1);
      case 1:
        return Fn(l.type, !0);
      case 31:
        return De("Activity");
      default:
        return "";
    }
  }
  function Mc(l) {
    try {
      var t = "", e = null;
      do
        t += $d(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var In = Object.prototype.hasOwnProperty, Pn = f.unstable_scheduleCallback, li = f.unstable_cancelCallback, kd = f.unstable_shouldYield, Fd = f.unstable_requestPaint, ut = f.unstable_now, Id = f.unstable_getCurrentPriorityLevel, Oc = f.unstable_ImmediatePriority, Dc = f.unstable_UserBlockingPriority, Ru = f.unstable_NormalPriority, Pd = f.unstable_LowPriority, Uc = f.unstable_IdlePriority, lr = f.log, tr = f.unstable_setDisableYieldValue, Ba = null, nt = null;
  function ae(l) {
    if (typeof lr == "function" && tr(l), nt && typeof nt.setStrictMode == "function")
      try {
        nt.setStrictMode(Ba, l);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : ur, er = Math.log, ar = Math.LN2;
  function ur(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (er(l) / ar | 0) | 0;
  }
  var Hu = 256, Cu = 262144, Nu = 4194304;
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
  function Bu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = Ue(a) : (i &= c, i !== 0 ? u = Ue(i) : e || (e = c & ~l, e !== 0 && (u = Ue(e))))) : (c = a & ~n, c !== 0 ? u = Ue(c) : i !== 0 ? u = Ue(i) : e || (e = a & ~l, e !== 0 && (u = Ue(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function xa(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function nr(l, t) {
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
  function Rc() {
    var l = Nu;
    return Nu <<= 1, (Nu & 62914560) === 0 && (Nu = 4194304), l;
  }
  function ti(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ya(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function ir(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var p = 31 - it(e), _ = 1 << p;
      c[p] = 0, s[p] = -1;
      var S = g[p];
      if (S !== null)
        for (g[p] = null, p = 0; p < S.length; p++) {
          var z = S[p];
          z !== null && (z.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Hc(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Hc(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - it(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Cc(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - it(e), u = 1 << a;
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
    var l = C.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zd(l.type));
  }
  function xc(l, t) {
    var e = C.p;
    try {
      return C.p = l, t();
    } finally {
      C.p = e;
    }
  }
  var ue = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + ue, Fl = "__reactProps$" + ue, Je = "__reactContainer$" + ue, ui = "__reactEvents$" + ue, fr = "__reactListeners$" + ue, cr = "__reactHandles$" + ue, Yc = "__reactResources$" + ue, qa = "__reactMarker$" + ue;
  function ni(l) {
    delete l[Gl], delete l[Fl], delete l[ui], delete l[fr], delete l[cr];
  }
  function We(l) {
    var t = l[Gl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Je] || e[Gl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ud(l); l !== null; ) {
            if (e = l[Gl]) return e;
            l = ud(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function $e(l) {
    if (l = l[Gl] || l[Je]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function ja(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function ke(l) {
    var t = l[Yc];
    return t || (t = l[Yc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ql(l) {
    l[qa] = !0;
  }
  var qc = /* @__PURE__ */ new Set(), jc = {};
  function Re(l, t) {
    Fe(l, t), Fe(l + "Capture", t);
  }
  function Fe(l, t) {
    for (jc[l] = t, l = 0; l < t.length; l++)
      qc.add(t[l]);
  }
  var or = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xc = {}, Gc = {};
  function sr(l) {
    return In.call(Gc, l) ? !0 : In.call(Xc, l) ? !1 : or.test(l) ? Gc[l] = !0 : (Xc[l] = !0, !1);
  }
  function xu(l, t, e) {
    if (sr(t))
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
  function Yu(l, t, e) {
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
  function vt(l) {
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
  function Qc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function dr(l, t, e) {
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
      var t = Qc(l) ? "checked" : "value";
      l._valueTracker = dr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Zc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Qc(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function qu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var rr = /[\n"\\]/g;
  function mt(l) {
    return l.replace(
      rr,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function fi(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + vt(t)) : l.value !== "" + vt(t) && (l.value = "" + vt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ci(l, i, vt(t)) : e != null ? ci(l, i, vt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + vt(c) : l.removeAttribute("name");
  }
  function Vc(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ii(l);
        return;
      }
      e = e != null ? "" + vt(e) : "", t = t != null ? "" + vt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l);
  }
  function ci(l, t, e) {
    t === "number" && qu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function Ie(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++)
        t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + vt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lc(l, t, e) {
    if (t != null && (t = "" + vt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + vt(e) : "";
  }
  function Kc(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (Ot(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = vt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l);
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
  var yr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wc(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || yr.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Jc(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && wc(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && wc(l, n, t[n]);
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
  var hr = /* @__PURE__ */ new Map([
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
  function ju(l) {
    return vr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Xt() {
  }
  var si = null;
  function di(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ta = null;
  function Wc(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[Fl] || null;
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
              'input[name="' + mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Fl] || null;
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
              a = e[t], a.form === l.form && Zc(a);
          }
          break l;
        case "textarea":
          Lc(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Ie(l, !!e.multiple, t, !1);
      }
    }
  }
  var ri = !1;
  function $c(l, t, e) {
    if (ri) return l(t, e);
    ri = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ri = !1, (la !== null || ta !== null) && (Mn(), la && (t = la, l = ta, ta = la = null, Wc(t), l)))
        for (t = 0; t < l.length; t++) Wc(l[t]);
    }
  }
  function Xa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Fl] || null;
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
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          yi = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      yi = !1;
    }
  var ne = null, hi = null, Xu = null;
  function kc() {
    if (Xu) return Xu;
    var l, t = hi, e = t.length, a, u = "value" in ne ? ne.value : ne.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++) ;
    return Xu = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Gu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Qu() {
    return !0;
  }
  function Fc() {
    return !1;
  }
  function Il(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Qu : Fc, this.isPropagationStopped = Fc, this;
    }
    return B(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Qu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Qu);
      },
      persist: function() {
      },
      isPersistent: Qu
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
  }, Zu = Il(He), Qa = B({}, He, { view: 0, detail: 0 }), mr = Il(Qa), vi, mi, Za, Vu = B({}, Qa, {
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
      return "movementX" in l ? l.movementX : (l !== Za && (Za && l.type === "mousemove" ? (vi = l.screenX - Za.screenX, mi = l.screenY - Za.screenY) : mi = vi = 0, Za = l), vi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : mi;
    }
  }), Ic = Il(Vu), gr = B({}, Vu, { dataTransfer: 0 }), Sr = Il(gr), br = B({}, Qa, { relatedTarget: 0 }), gi = Il(br), zr = B({}, He, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), pr = Il(zr), Tr = B({}, He, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Er = Il(Tr), Ar = B({}, He, { data: 0 }), Pc = Il(Ar), _r = {
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
  }, Mr = {
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
  }, Or = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Dr(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Or[l]) ? !!t[l] : !1;
  }
  function Si() {
    return Dr;
  }
  var Ur = B({}, Qa, {
    key: function(l) {
      if (l.key) {
        var t = _r[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Gu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Mr[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? Gu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Gu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Rr = Il(Ur), Hr = B({}, Vu, {
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
  }), lo = Il(Hr), Cr = B({}, Qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si
  }), Nr = Il(Cr), Br = B({}, He, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xr = Il(Br), Yr = B({}, Vu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qr = Il(Yr), jr = B({}, He, {
    newState: 0,
    oldState: 0
  }), Xr = Il(jr), Gr = [9, 13, 27, 32], bi = Gt && "CompositionEvent" in window, Va = null;
  Gt && "documentMode" in document && (Va = document.documentMode);
  var Qr = Gt && "TextEvent" in window && !Va, to = Gt && (!bi || Va && 8 < Va && 11 >= Va), eo = " ", ao = !1;
  function uo(l, t) {
    switch (l) {
      case "keyup":
        return Gr.indexOf(t.keyCode) !== -1;
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
  function no(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ea = !1;
  function Zr(l, t) {
    switch (l) {
      case "compositionend":
        return no(t);
      case "keypress":
        return t.which !== 32 ? null : (ao = !0, eo);
      case "textInput":
        return l = t.data, l === eo && ao ? null : l;
      default:
        return null;
    }
  }
  function Vr(l, t) {
    if (ea)
      return l === "compositionend" || !bi && uo(l, t) ? (l = kc(), Xu = hi = ne = null, ea = !1, l) : null;
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
        return to && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Lr = {
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
  function io(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Lr[l.type] : t === "textarea";
  }
  function fo(l, t, e, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = Nn(t, "onChange"), 0 < t.length && (e = new Zu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var La = null, Ka = null;
  function Kr(l) {
    L0(l, 0);
  }
  function Lu(l) {
    var t = ja(l);
    if (Zc(t)) return l;
  }
  function co(l, t) {
    if (l === "change") return t;
  }
  var oo = !1;
  if (Gt) {
    var zi;
    if (Gt) {
      var pi = "oninput" in document;
      if (!pi) {
        var so = document.createElement("div");
        so.setAttribute("oninput", "return;"), pi = typeof so.oninput == "function";
      }
      zi = pi;
    } else zi = !1;
    oo = zi && (!document.documentMode || 9 < document.documentMode);
  }
  function ro() {
    La && (La.detachEvent("onpropertychange", yo), Ka = La = null);
  }
  function yo(l) {
    if (l.propertyName === "value" && Lu(Ka)) {
      var t = [];
      fo(
        t,
        Ka,
        l,
        di(l)
      ), $c(Kr, t);
    }
  }
  function wr(l, t, e) {
    l === "focusin" ? (ro(), La = t, Ka = e, La.attachEvent("onpropertychange", yo)) : l === "focusout" && ro();
  }
  function Jr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Lu(Ka);
  }
  function Wr(l, t) {
    if (l === "click") return Lu(t);
  }
  function $r(l, t) {
    if (l === "input" || l === "change")
      return Lu(t);
  }
  function kr(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : kr;
  function wa(l, t) {
    if (ft(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!In.call(t, u) || !ft(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ho(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function vo(l, t) {
    var e = ho(l);
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
      e = ho(e);
    }
  }
  function mo(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mo(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function go(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = qu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = qu(l.document);
    }
    return t;
  }
  function Ti(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Fr = Gt && "documentMode" in document && 11 >= document.documentMode, aa = null, Ei = null, Ja = null, Ai = !1;
  function So(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ai || aa == null || aa !== qu(a) || (a = aa, "selectionStart" in a && Ti(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && wa(Ja, a) || (Ja = a, a = Nn(Ei, "onSelect"), 0 < a.length && (t = new Zu(
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
  }, _i = {}, bo = {};
  Gt && (bo = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function Ne(l) {
    if (_i[l]) return _i[l];
    if (!ua[l]) return l;
    var t = ua[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in bo)
        return _i[l] = t[e];
    return l;
  }
  var zo = Ne("animationend"), po = Ne("animationiteration"), To = Ne("animationstart"), Ir = Ne("transitionrun"), Pr = Ne("transitionstart"), ly = Ne("transitioncancel"), Eo = Ne("transitionend"), Ao = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function Dt(l, t) {
    Ao.set(l, t), Re(t, [l]);
  }
  var Ku = typeof reportError == "function" ? reportError : function(l) {
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
  }, gt = [], na = 0, Oi = 0;
  function wu() {
    for (var l = na, t = Oi = na = 0; t < l; ) {
      var e = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var u = gt[t];
      gt[t++] = null;
      var n = gt[t];
      if (gt[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && _o(e, u, n);
    }
  }
  function Ju(l, t, e, a) {
    gt[na++] = l, gt[na++] = t, gt[na++] = e, gt[na++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Di(l, t, e, a) {
    return Ju(l, t, e, a), Wu(l);
  }
  function Be(l, t) {
    return Ju(l, null, null, t), Wu(l);
  }
  function _o(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - it(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Wu(l) {
    if (50 < vu)
      throw vu = 0, jf = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function ty(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(l, t, e, a) {
    return new ty(l, t, e, a);
  }
  function Ui(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ct(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Mo(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function $u(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Ui(l) && (i = 1);
    else if (typeof l == "string")
      i = i1(
        l,
        e,
        Y.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case bl:
          return l = ct(31, e, t, u), l.elementType = bl, l.lanes = n, l;
        case Xl:
          return xe(e.children, u, n, t);
        case _t:
          i = 8, u |= 24;
          break;
        case Jl:
          return l = ct(12, e, t, u | 2), l.elementType = Jl, l.lanes = n, l;
        case G:
          return l = ct(13, e, t, u), l.elementType = G, l.lanes = n, l;
        case U:
          return l = ct(19, e, t, u), l.elementType = U, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xl:
                i = 10;
                break l;
              case Ht:
                i = 9;
                break l;
              case Yl:
                i = 11;
                break l;
              case H:
                i = 14;
                break l;
              case tl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ct(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function xe(l, t, e, a) {
    return l = ct(7, l, a, t), l.lanes = e, l;
  }
  function Ri(l, t, e) {
    return l = ct(6, l, null, t), l.lanes = e, l;
  }
  function Oo(l) {
    var t = ct(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hi(l, t, e) {
    return t = ct(
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
  var Do = /* @__PURE__ */ new WeakMap();
  function St(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Do.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Mc(t)
      }, Do.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Mc(t)
    };
  }
  var fa = [], ca = 0, ku = null, Wa = 0, bt = [], zt = 0, ie = null, Nt = 1, Bt = "";
  function Zt(l, t) {
    fa[ca++] = Wa, fa[ca++] = ku, ku = l, Wa = t;
  }
  function Uo(l, t, e) {
    bt[zt++] = Nt, bt[zt++] = Bt, bt[zt++] = ie, ie = l;
    var a = Nt;
    l = Bt;
    var u = 32 - it(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - it(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Nt = 1 << 32 - it(t) + u | e << u | a, Bt = n + l;
    } else
      Nt = 1 << n | e << u | a, Bt = l;
  }
  function Ci(l) {
    l.return !== null && (Zt(l, 1), Uo(l, 1, 0));
  }
  function Ni(l) {
    for (; l === ku; )
      ku = fa[--ca], fa[ca] = null, Wa = fa[--ca], fa[ca] = null;
    for (; l === ie; )
      ie = bt[--zt], bt[zt] = null, Bt = bt[--zt], bt[zt] = null, Nt = bt[--zt], bt[zt] = null;
  }
  function Ro(l, t) {
    bt[zt++] = Nt, bt[zt++] = Bt, bt[zt++] = ie, Nt = t.id, Bt = t.overflow, ie = l;
  }
  var Ql = null, vl = null, ll = !1, fe = null, pt = !1, Bi = Error(o(519));
  function ce(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $a(St(t, l)), Bi;
  }
  function Ho(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Gl] = l, t[Fl] = a, e) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < gu.length; e++)
          F(gu[e], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), Vc(
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
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), Kc(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || W0(t.textContent, e) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || ce(l, !0);
  }
  function Co(l) {
    for (Ql = l.return; Ql; )
      switch (Ql.tag) {
        case 5:
        case 31:
        case 13:
          pt = !1;
          return;
        case 27:
        case 3:
          pt = !0;
          return;
        default:
          Ql = Ql.return;
      }
  }
  function oa(l) {
    if (l !== Ql) return !1;
    if (!ll) return Co(l), ll = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Pf(l.type, l.memoizedProps)), e = !e), e && vl && ce(l), Co(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      vl = ad(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      vl = ad(l);
    } else
      t === 27 ? (t = vl, Te(l.type) ? (l = uc, uc = null, vl = l) : vl = t) : vl = Ql ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ye() {
    vl = Ql = null, ll = !1;
  }
  function xi() {
    var l = fe;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), fe = null), l;
  }
  function $a(l) {
    fe === null ? fe = [l] : fe.push(l);
  }
  var Yi = r(null), qe = null, Vt = null;
  function oe(l, t, e) {
    N(Yi, t._currentValue), t._currentValue = e;
  }
  function Lt(l) {
    l._currentValue = Yi.current, M(Yi);
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
          ft(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === il.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Tu) : l = [Tu]);
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
  function Fu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(
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
  function Zl(l) {
    return No(qe, l);
  }
  function Iu(l, t) {
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
  var ey = typeof AbortController < "u" ? AbortController : function() {
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
  }, ay = f.unstable_scheduleCallback, uy = f.unstable_NormalPriority, Rl = {
    $$typeof: xl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xi() {
    return {
      controller: new ey(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ka(l) {
    l.refCount--, l.refCount === 0 && ay(uy, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Gi = 0, da = 0, ra = null;
  function ny(l, t) {
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
  function iy(l, t) {
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
  var xo = T.S;
  T.S = function(l, t) {
    S0 = ut(), typeof t == "object" && t !== null && typeof t.then == "function" && ny(l, t), xo !== null && xo(l, t);
  };
  var Xe = r(null);
  function Qi() {
    var l = Xe.current;
    return l !== null ? l : hl.pooledCache;
  }
  function Pu(l, t) {
    t === null ? N(Xe, Xe.current) : N(Xe, t.pool);
  }
  function Yo() {
    var l = Qi();
    return l === null ? null : { parent: Rl._currentValue, pool: l };
  }
  var ya = Error(o(460)), Zi = Error(o(474)), ln = Error(o(542)), tn = { then: function() {
  } };
  function qo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function jo(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Xt, Xt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Go(l), l;
      default:
        if (typeof t.status == "string") t.then(Xt, Xt);
        else {
          if (l = hl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, Go(l), l;
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
  function Xo() {
    if (Qe === null) throw Error(o(459));
    var l = Qe;
    return Qe = null, l;
  }
  function Go(l) {
    if (l === ya || l === ln)
      throw Error(o(483));
  }
  var ha = null, Ia = 0;
  function en(l) {
    var t = Ia;
    return Ia += 1, ha === null && (ha = []), jo(ha, l, t);
  }
  function Pa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function an(l, t) {
    throw t.$$typeof === ul ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Qo(l) {
    function t(y, d) {
      if (l) {
        var m = y.deletions;
        m === null ? (y.deletions = [d], y.flags |= 16) : m.push(d);
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
    function n(y, d, m) {
      return y.index = m, l ? (m = y.alternate, m !== null ? (m = m.index, m < d ? (y.flags |= 67108866, d) : m) : (y.flags |= 67108866, d)) : (y.flags |= 1048576, d);
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, d, m, A) {
      return d === null || d.tag !== 6 ? (d = Ri(m, y.mode, A), d.return = y, d) : (d = u(d, m), d.return = y, d);
    }
    function s(y, d, m, A) {
      var j = m.type;
      return j === Xl ? p(
        y,
        d,
        m.props.children,
        A,
        m.key
      ) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === tl && Ge(j) === d.type) ? (d = u(d, m.props), Pa(d, m), d.return = y, d) : (d = $u(
        m.type,
        m.key,
        m.props,
        null,
        y.mode,
        A
      ), Pa(d, m), d.return = y, d);
    }
    function g(y, d, m, A) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Hi(m, y.mode, A), d.return = y, d) : (d = u(d, m.children || []), d.return = y, d);
    }
    function p(y, d, m, A, j) {
      return d === null || d.tag !== 7 ? (d = xe(
        m,
        y.mode,
        A,
        j
      ), d.return = y, d) : (d = u(d, m), d.return = y, d);
    }
    function _(y, d, m) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Ri(
          "" + d,
          y.mode,
          m
        ), d.return = y, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case pl:
            return m = $u(
              d.type,
              d.key,
              d.props,
              null,
              y.mode,
              m
            ), Pa(m, d), m.return = y, m;
          case Ol:
            return d = Hi(
              d,
              y.mode,
              m
            ), d.return = y, d;
          case tl:
            return d = Ge(d), _(y, d, m);
        }
        if (Ot(d) || Kl(d))
          return d = xe(
            d,
            y.mode,
            m,
            null
          ), d.return = y, d;
        if (typeof d.then == "function")
          return _(y, en(d), m);
        if (d.$$typeof === xl)
          return _(
            y,
            Iu(y, d),
            m
          );
        an(y, d);
      }
      return null;
    }
    function S(y, d, m, A) {
      var j = d !== null ? d.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return j !== null ? null : c(y, d, "" + m, A);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pl:
            return m.key === j ? s(y, d, m, A) : null;
          case Ol:
            return m.key === j ? g(y, d, m, A) : null;
          case tl:
            return m = Ge(m), S(y, d, m, A);
        }
        if (Ot(m) || Kl(m))
          return j !== null ? null : p(y, d, m, A, null);
        if (typeof m.then == "function")
          return S(
            y,
            d,
            en(m),
            A
          );
        if (m.$$typeof === xl)
          return S(
            y,
            d,
            Iu(y, m),
            A
          );
        an(y, m);
      }
      return null;
    }
    function z(y, d, m, A, j) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return y = y.get(m) || null, c(d, y, "" + A, j);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case pl:
            return y = y.get(
              A.key === null ? m : A.key
            ) || null, s(d, y, A, j);
          case Ol:
            return y = y.get(
              A.key === null ? m : A.key
            ) || null, g(d, y, A, j);
          case tl:
            return A = Ge(A), z(
              y,
              d,
              m,
              A,
              j
            );
        }
        if (Ot(A) || Kl(A))
          return y = y.get(m) || null, p(d, y, A, j, null);
        if (typeof A.then == "function")
          return z(
            y,
            d,
            m,
            en(A),
            j
          );
        if (A.$$typeof === xl)
          return z(
            y,
            d,
            m,
            Iu(d, A),
            j
          );
        an(d, A);
      }
      return null;
    }
    function x(y, d, m, A) {
      for (var j = null, el = null, q = d, W = d = 0, P = null; q !== null && W < m.length; W++) {
        q.index > W ? (P = q, q = null) : P = q.sibling;
        var al = S(
          y,
          q,
          m[W],
          A
        );
        if (al === null) {
          q === null && (q = P);
          break;
        }
        l && q && al.alternate === null && t(y, q), d = n(al, d, W), el === null ? j = al : el.sibling = al, el = al, q = P;
      }
      if (W === m.length)
        return e(y, q), ll && Zt(y, W), j;
      if (q === null) {
        for (; W < m.length; W++)
          q = _(y, m[W], A), q !== null && (d = n(
            q,
            d,
            W
          ), el === null ? j = q : el.sibling = q, el = q);
        return ll && Zt(y, W), j;
      }
      for (q = a(q); W < m.length; W++)
        P = z(
          q,
          y,
          W,
          m[W],
          A
        ), P !== null && (l && P.alternate !== null && q.delete(
          P.key === null ? W : P.key
        ), d = n(
          P,
          d,
          W
        ), el === null ? j = P : el.sibling = P, el = P);
      return l && q.forEach(function(Oe) {
        return t(y, Oe);
      }), ll && Zt(y, W), j;
    }
    function Q(y, d, m, A) {
      if (m == null) throw Error(o(151));
      for (var j = null, el = null, q = d, W = d = 0, P = null, al = m.next(); q !== null && !al.done; W++, al = m.next()) {
        q.index > W ? (P = q, q = null) : P = q.sibling;
        var Oe = S(y, q, al.value, A);
        if (Oe === null) {
          q === null && (q = P);
          break;
        }
        l && q && Oe.alternate === null && t(y, q), d = n(Oe, d, W), el === null ? j = Oe : el.sibling = Oe, el = Oe, q = P;
      }
      if (al.done)
        return e(y, q), ll && Zt(y, W), j;
      if (q === null) {
        for (; !al.done; W++, al = m.next())
          al = _(y, al.value, A), al !== null && (d = n(al, d, W), el === null ? j = al : el.sibling = al, el = al);
        return ll && Zt(y, W), j;
      }
      for (q = a(q); !al.done; W++, al = m.next())
        al = z(q, y, W, al.value, A), al !== null && (l && al.alternate !== null && q.delete(al.key === null ? W : al.key), d = n(al, d, W), el === null ? j = al : el.sibling = al, el = al);
      return l && q.forEach(function(g1) {
        return t(y, g1);
      }), ll && Zt(y, W), j;
    }
    function rl(y, d, m, A) {
      if (typeof m == "object" && m !== null && m.type === Xl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pl:
            l: {
              for (var j = m.key; d !== null; ) {
                if (d.key === j) {
                  if (j = m.type, j === Xl) {
                    if (d.tag === 7) {
                      e(
                        y,
                        d.sibling
                      ), A = u(
                        d,
                        m.props.children
                      ), A.return = y, y = A;
                      break l;
                    }
                  } else if (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === tl && Ge(j) === d.type) {
                    e(
                      y,
                      d.sibling
                    ), A = u(d, m.props), Pa(A, m), A.return = y, y = A;
                    break l;
                  }
                  e(y, d);
                  break;
                } else t(y, d);
                d = d.sibling;
              }
              m.type === Xl ? (A = xe(
                m.props.children,
                y.mode,
                A,
                m.key
              ), A.return = y, y = A) : (A = $u(
                m.type,
                m.key,
                m.props,
                null,
                y.mode,
                A
              ), Pa(A, m), A.return = y, y = A);
            }
            return i(y);
          case Ol:
            l: {
              for (j = m.key; d !== null; ) {
                if (d.key === j)
                  if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                    e(
                      y,
                      d.sibling
                    ), A = u(d, m.children || []), A.return = y, y = A;
                    break l;
                  } else {
                    e(y, d);
                    break;
                  }
                else t(y, d);
                d = d.sibling;
              }
              A = Hi(m, y.mode, A), A.return = y, y = A;
            }
            return i(y);
          case tl:
            return m = Ge(m), rl(
              y,
              d,
              m,
              A
            );
        }
        if (Ot(m))
          return x(
            y,
            d,
            m,
            A
          );
        if (Kl(m)) {
          if (j = Kl(m), typeof j != "function") throw Error(o(150));
          return m = j.call(m), Q(
            y,
            d,
            m,
            A
          );
        }
        if (typeof m.then == "function")
          return rl(
            y,
            d,
            en(m),
            A
          );
        if (m.$$typeof === xl)
          return rl(
            y,
            d,
            Iu(y, m),
            A
          );
        an(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, d !== null && d.tag === 6 ? (e(y, d.sibling), A = u(d, m), A.return = y, y = A) : (e(y, d), A = Ri(m, y.mode, A), A.return = y, y = A), i(y)) : e(y, d);
    }
    return function(y, d, m, A) {
      try {
        Ia = 0;
        var j = rl(
          y,
          d,
          m,
          A
        );
        return ha = null, j;
      } catch (q) {
        if (q === ya || q === ln) throw q;
        var el = ct(29, q, null, y.mode);
        return el.lanes = A, el.return = y, el;
      }
    };
  }
  var Ze = Qo(!0), Zo = Qo(!1), se = !1;
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
    if (a = a.shared, (nl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Wu(l), _o(l, null, e), t;
    }
    return Ju(l, a, t, e), Wu(l);
  }
  function lu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Cc(l, e);
    }
  }
  function Ki(l, t) {
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
  var wi = !1;
  function tu() {
    if (wi) {
      var l = ra;
      if (l !== null) throw l;
    }
  }
  function eu(l, t, e, a) {
    wi = !1;
    var u = l.updateQueue;
    se = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, g = s.next;
      s.next = null, i === null ? n = g : i.next = g, i = s;
      var p = l.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = g : c.next = g, p.lastBaseUpdate = s));
    }
    if (n !== null) {
      var _ = u.baseState;
      i = 0, p = g = s = null, c = n;
      do {
        var S = c.lane & -536870913, z = S !== c.lane;
        if (z ? (I & S) === S : (a & S) === S) {
          S !== 0 && S === da && (wi = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var x = l, Q = c;
            S = t;
            var rl = e;
            switch (Q.tag) {
              case 1:
                if (x = Q.payload, typeof x == "function") {
                  _ = x.call(rl, _, S);
                  break l;
                }
                _ = x;
                break l;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = Q.payload, S = typeof x == "function" ? x.call(rl, _, S) : x, S == null) break l;
                _ = B({}, _, S);
                break l;
              case 2:
                se = !0;
            }
          }
          S = c.callback, S !== null && (l.flags |= 64, z && (l.flags |= 8192), z = u.callbacks, z === null ? u.callbacks = [S] : z.push(S));
        } else
          z = {
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, p === null ? (g = p = z, s = _) : p = p.next = z, i |= S;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          z = c, c = z.next, z.next = null, u.lastBaseUpdate = z, u.shared.pending = null;
        }
      } while (!0);
      p === null && (s = _), u.baseState = s, u.firstBaseUpdate = g, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ge |= i, l.lanes = i, l.memoizedState = _;
    }
  }
  function Vo(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function Lo(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Vo(e[l], t);
  }
  var va = r(null), un = r(0);
  function Ko(l, t) {
    l = Pt, N(un, l), N(va, t), Pt = l | t.baseLanes;
  }
  function Ji() {
    N(un, Pt), N(va, va.current);
  }
  function Wi() {
    Pt = un.current, M(va), M(un);
  }
  var ot = r(null), Tt = null;
  function ye(l) {
    var t = l.alternate;
    N(_l, _l.current & 1), N(ot, l), Tt === null && (t === null || va.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function $i(l) {
    N(_l, _l.current), N(ot, l), Tt === null && (Tt = l);
  }
  function wo(l) {
    l.tag === 22 ? (N(_l, _l.current), N(ot, l), Tt === null && (Tt = l)) : he();
  }
  function he() {
    N(_l, _l.current), N(ot, ot.current);
  }
  function st(l) {
    M(ot), Tt === l && (Tt = null), M(_l);
  }
  var _l = r(0);
  function nn(l) {
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
  var Kt = 0, J = null, sl = null, Hl = null, fn = !1, ma = !1, Ve = !1, cn = 0, au = 0, ga = null, fy = 0;
  function Tl() {
    throw Error(o(321));
  }
  function ki(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ft(l[e], t[e])) return !1;
    return !0;
  }
  function Fi(l, t, e, a, u, n) {
    return Kt = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = l === null || l.memoizedState === null ? Us : yf, Ve = !1, n = e(a, u), Ve = !1, ma && (n = Wo(
      t,
      e,
      a,
      u
    )), Jo(l), n;
  }
  function Jo(l) {
    T.H = iu;
    var t = sl !== null && sl.next !== null;
    if (Kt = 0, Hl = sl = J = null, fn = !1, au = 0, ga = null, t) throw Error(o(300));
    l === null || Cl || (l = l.dependencies, l !== null && Fu(l) && (Cl = !0));
  }
  function Wo(l, t, e, a) {
    J = l;
    var u = 0;
    do {
      if (ma && (ga = null), au = 0, ma = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Hl = sl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      T.H = Rs, n = t(e, a);
    } while (ma);
    return n;
  }
  function cy() {
    var l = T.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? uu(t) : t, l = l.useState()[0], (sl !== null ? sl.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function Ii() {
    var l = cn !== 0;
    return cn = 0, l;
  }
  function Pi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function lf(l) {
    if (fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      fn = !1;
    }
    Kt = 0, Hl = sl = J = null, ma = !1, au = cn = 0, ga = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Hl === null ? J.memoizedState = Hl = l : Hl = Hl.next = l, Hl;
  }
  function Ml() {
    if (sl === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = sl.next;
    var t = Hl === null ? J.memoizedState : Hl.next;
    if (t !== null)
      Hl = t, sl = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(o(467)) : Error(o(310));
      sl = l, l = {
        memoizedState: sl.memoizedState,
        baseState: sl.baseState,
        baseQueue: sl.baseQueue,
        queue: sl.queue,
        next: null
      }, Hl === null ? J.memoizedState = Hl = l : Hl = Hl.next = l;
    }
    return Hl;
  }
  function on() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(l) {
    var t = au;
    return au += 1, ga === null && (ga = []), l = jo(ga, l, t), t = J, (Hl === null ? t.memoizedState : Hl.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? Us : yf), l;
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return uu(l);
      if (l.$$typeof === xl) return Zl(l);
    }
    throw Error(o(438, String(l)));
  }
  function tf(l) {
    var t = null, e = J.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = J.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = on(), J.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = Dl;
    return t.index++, e;
  }
  function wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function dn(l) {
    var t = Ml();
    return ef(t, sl, l);
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
      var c = i = null, s = null, g = t, p = !1;
      do {
        var _ = g.lane & -536870913;
        if (_ !== g.lane ? (I & _) === _ : (Kt & _) === _) {
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
            }), _ === da && (p = !0);
          else if ((Kt & S) === S) {
            g = g.next, S === da && (p = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, s === null ? (c = s = _, i = n) : s = s.next = _, J.lanes |= S, ge |= S;
          _ = g.action, Ve && e(n, _), n = g.hasEagerState ? g.eagerState : e(n, _);
        } else
          S = {
            lane: _,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, s === null ? (c = s = S, i = n) : s = s.next = S, J.lanes |= _, ge |= _;
        g = g.next;
      } while (g !== null && g !== t);
      if (s === null ? i = n : s.next = c, !ft(n, l.memoizedState) && (Cl = !0, p && (e = ra, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function af(l) {
    var t = Ml(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ft(n, t.memoizedState) || (Cl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function $o(l, t, e) {
    var a = J, u = Ml(), n = ll;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !ft(
      (sl || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Cl = !0), u = u.queue, ff(Io.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Hl !== null && Hl.memoizedState.tag & 1) {
      if (a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        Fo.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), hl === null) throw Error(o(349));
      n || (Kt & 127) !== 0 || ko(a, t, e);
    }
    return e;
  }
  function ko(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = J.updateQueue, t === null ? (t = on(), J.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Fo(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Po(t) && ls(l);
  }
  function Io(l, t, e) {
    return e(function() {
      Po(t) && ls(l);
    });
  }
  function Po(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ft(l, e);
    } catch {
      return !0;
    }
  }
  function ls(l) {
    var t = Be(l, 2);
    t !== null && at(t, l, 2);
  }
  function uf(l) {
    var t = $l();
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
      lastRenderedReducer: wt,
      lastRenderedState: l
    }, t;
  }
  function ts(l, t, e, a) {
    return l.baseState = e, ef(
      l,
      sl,
      typeof a == "function" ? a : wt
    );
  }
  function oy(l, t, e, a, u) {
    if (hn(l)) throw Error(o(485));
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
      T.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, es(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function es(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = T.T, i = {};
      T.T = i;
      try {
        var c = e(u, a), s = T.S;
        s !== null && s(i, c), as(l, t, c);
      } catch (g) {
        nf(l, t, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), T.T = n;
      }
    } else
      try {
        n = e(u, a), as(l, t, n);
      } catch (g) {
        nf(l, t, g);
      }
  }
  function as(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        us(l, t, a);
      },
      function(a) {
        return nf(l, t, a);
      }
    ) : us(l, t, e);
  }
  function us(l, t, e) {
    t.status = "fulfilled", t.value = e, ns(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, es(l, e)));
  }
  function nf(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, ns(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function ns(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function is(l, t) {
    return t;
  }
  function fs(l, t) {
    if (ll) {
      var e = hl.formState;
      if (e !== null) {
        l: {
          var a = J;
          if (ll) {
            if (vl) {
              t: {
                for (var u = vl, n = pt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Et(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                vl = Et(
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
    return e = $l(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: is,
      lastRenderedState: t
    }, e.queue = a, e = Ms.bind(
      null,
      J,
      a
    ), a.dispatch = e, a = uf(!1), n = rf.bind(
      null,
      J,
      !1,
      a.queue
    ), a = $l(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = oy.bind(
      null,
      J,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function cs(l) {
    var t = Ml();
    return os(t, sl, l);
  }
  function os(l, t, e) {
    if (t = ef(
      l,
      t,
      is
    )[0], l = dn(wt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = uu(t);
      } catch (i) {
        throw i === ya ? ln : i;
      }
    else a = t;
    t = Ml();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (J.flags |= 2048, Sa(
      9,
      { destroy: void 0 },
      sy.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function sy(l, t) {
    l.action = t;
  }
  function ss(l) {
    var t = Ml(), e = sl;
    if (e !== null)
      return os(t, e, l);
    Ml(), t = t.memoizedState, e = Ml();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function Sa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = J.updateQueue, t === null && (t = on(), J.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ds() {
    return Ml().memoizedState;
  }
  function rn(l, t, e, a) {
    var u = $l();
    J.flags |= l, u.memoizedState = Sa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function yn(l, t, e, a) {
    var u = Ml();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    sl !== null && a !== null && ki(a, sl.memoizedState.deps) ? u.memoizedState = Sa(t, n, e, a) : (J.flags |= l, u.memoizedState = Sa(
      1 | t,
      n,
      e,
      a
    ));
  }
  function rs(l, t) {
    rn(8390656, 8, l, t);
  }
  function ff(l, t) {
    yn(2048, 8, l, t);
  }
  function dy(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null)
      t = on(), J.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function ys(l) {
    var t = Ml().memoizedState;
    return dy({ ref: t, nextImpl: l }), function() {
      if ((nl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function hs(l, t) {
    return yn(4, 2, l, t);
  }
  function vs(l, t) {
    return yn(4, 4, l, t);
  }
  function ms(l, t) {
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
  function gs(l, t, e) {
    e = e != null ? e.concat([l]) : null, yn(4, 4, ms.bind(null, t, l), e);
  }
  function cf() {
  }
  function Ss(l, t) {
    var e = Ml();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function bs(l, t) {
    var e = Ml();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ki(t, a[1]))
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
    return e === void 0 || (Kt & 1073741824) !== 0 && (I & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = z0(), J.lanes |= l, ge |= l, e);
  }
  function zs(l, t, e, a) {
    return ft(e, t) ? e : va.current !== null ? (l = of(l, e, a), ft(l, t) || (Cl = !0), l) : (Kt & 42) === 0 || (Kt & 1073741824) !== 0 && (I & 261930) === 0 ? (Cl = !0, l.memoizedState = e) : (l = z0(), J.lanes |= l, ge |= l, t);
  }
  function ps(l, t, e, a, u) {
    var n = C.p;
    C.p = n !== 0 && 8 > n ? n : 8;
    var i = T.T, c = {};
    T.T = c, rf(l, !1, t, e);
    try {
      var s = u(), g = T.S;
      if (g !== null && g(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var p = iy(
          s,
          a
        );
        nu(
          l,
          t,
          p,
          yt(l)
        );
      } else
        nu(
          l,
          t,
          a,
          yt(l)
        );
    } catch (_) {
      nu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        yt()
      );
    } finally {
      C.p = n, i !== null && c.types !== null && (i.types = c.types), T.T = i;
    }
  }
  function ry() {
  }
  function sf(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = Ts(l).queue;
    ps(
      l,
      u,
      t,
      V,
      e === null ? ry : function() {
        return Es(l), e(a);
      }
    );
  }
  function Ts(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wt,
        lastRenderedState: V
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
        lastRenderedReducer: wt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Es(l) {
    var t = Ts(l);
    t.next === null && (t = l.alternate.memoizedState), nu(
      l,
      t.next.queue,
      {},
      yt()
    );
  }
  function df() {
    return Zl(Tu);
  }
  function As() {
    return Ml().memoizedState;
  }
  function _s() {
    return Ml().memoizedState;
  }
  function yy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = yt();
          l = de(e);
          var a = re(t, l, e);
          a !== null && (at(a, t, e), lu(a, t, e)), t = { cache: Xi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hy(l, t, e) {
    var a = yt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hn(l) ? Os(t, e) : (e = Di(l, t, e, a), e !== null && (at(e, l, a), Ds(e, t, a)));
  }
  function Ms(l, t, e) {
    var a = yt();
    nu(l, t, e, a);
  }
  function nu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hn(l)) Os(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, ft(c, i))
            return Ju(l, t, u, 0), hl === null && wu(), !1;
        } catch {
        }
      if (e = Di(l, t, u, a), e !== null)
        return at(e, l, a), Ds(e, t, a), !0;
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
    }, hn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Di(
        l,
        e,
        a,
        2
      ), t !== null && at(t, l, 2);
  }
  function hn(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function Os(l, t) {
    ma = fn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Ds(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Cc(l, e);
    }
  }
  var iu = {
    readContext: Zl,
    use: sn,
    useCallback: Tl,
    useContext: Tl,
    useEffect: Tl,
    useImperativeHandle: Tl,
    useLayoutEffect: Tl,
    useInsertionEffect: Tl,
    useMemo: Tl,
    useReducer: Tl,
    useRef: Tl,
    useState: Tl,
    useDebugValue: Tl,
    useDeferredValue: Tl,
    useTransition: Tl,
    useSyncExternalStore: Tl,
    useId: Tl,
    useHostTransitionStatus: Tl,
    useFormState: Tl,
    useActionState: Tl,
    useOptimistic: Tl,
    useMemoCache: Tl,
    useCacheRefresh: Tl
  };
  iu.useEffectEvent = Tl;
  var Us = {
    readContext: Zl,
    use: sn,
    useCallback: function(l, t) {
      return $l().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Zl,
    useEffect: rs,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, rn(
        4194308,
        4,
        ms.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return rn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      rn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = $l();
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
      var a = $l();
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
      }, a.queue = l, l = l.dispatch = hy.bind(
        null,
        J,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = $l();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = uf(l);
      var t = l.queue, e = Ms.bind(null, J, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = $l();
      return of(e, l, t);
    },
    useTransition: function() {
      var l = uf(!1);
      return l = ps.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = J, u = $l();
      if (ll) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), hl === null)
          throw Error(o(349));
        (I & 127) !== 0 || ko(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, rs(Io.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        Fo.bind(
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
      var l = $l(), t = hl.identifierPrefix;
      if (ll) {
        var e = Bt, a = Nt;
        e = (a & ~(1 << 32 - it(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = cn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = fy++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: df,
    useFormState: fs,
    useActionState: fs,
    useOptimistic: function(l) {
      var t = $l();
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
        J,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: tf,
    useCacheRefresh: function() {
      return $l().memoizedState = yy.bind(
        null,
        J
      );
    },
    useEffectEvent: function(l) {
      var t = $l(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((nl & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, yf = {
    readContext: Zl,
    use: sn,
    useCallback: Ss,
    useContext: Zl,
    useEffect: ff,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: vs,
    useMemo: bs,
    useReducer: dn,
    useRef: ds,
    useState: function() {
      return dn(wt);
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = Ml();
      return zs(
        e,
        sl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = dn(wt)[0], t = Ml().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: $o,
    useId: As,
    useHostTransitionStatus: df,
    useFormState: cs,
    useActionState: cs,
    useOptimistic: function(l, t) {
      var e = Ml();
      return ts(e, sl, l, t);
    },
    useMemoCache: tf,
    useCacheRefresh: _s
  };
  yf.useEffectEvent = ys;
  var Rs = {
    readContext: Zl,
    use: sn,
    useCallback: Ss,
    useContext: Zl,
    useEffect: ff,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: vs,
    useMemo: bs,
    useReducer: af,
    useRef: ds,
    useState: function() {
      return af(wt);
    },
    useDebugValue: cf,
    useDeferredValue: function(l, t) {
      var e = Ml();
      return sl === null ? of(e, l, t) : zs(
        e,
        sl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = af(wt)[0], t = Ml().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: $o,
    useId: As,
    useHostTransitionStatus: df,
    useFormState: ss,
    useActionState: ss,
    useOptimistic: function(l, t) {
      var e = Ml();
      return sl !== null ? ts(e, sl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: tf,
    useCacheRefresh: _s
  };
  Rs.useEffectEvent = ys;
  function hf(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : B({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var vf = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = yt(), u = de(a);
      u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), lu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = yt(), u = de(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), lu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = yt(), a = de(e);
      a.tag = 2, t != null && (a.callback = t), t = re(l, a, e), t !== null && (at(t, l, e), lu(t, l, e));
    }
  };
  function Hs(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !wa(e, a) || !wa(u, n) : !0;
  }
  function Cs(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && vf.enqueueReplaceState(t, t.state, null);
  }
  function Le(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = B({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Ns(l) {
    Ku(l);
  }
  function Bs(l) {
    console.error(l);
  }
  function xs(l) {
    Ku(l);
  }
  function vn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ys(l, t, e) {
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
  function mf(l, t, e) {
    return e = de(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      vn(l, t);
    }, e;
  }
  function qs(l) {
    return l = de(l), l.tag = 3, l;
  }
  function js(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Ys(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Ys(t, e, a), typeof u != "function" && (Se === null ? Se = /* @__PURE__ */ new Set([this]) : Se.add(this));
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
      ), e = ot.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Tt === null ? On() : e.alternate === null && El === 0 && (El = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qf(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Qf(l, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Qf(l, a, u), On(), !1;
    }
    if (ll)
      return t = ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Bi && (l = Error(o(422), { cause: a }), $a(St(l, e)))) : (a !== Bi && (t = Error(o(423), {
        cause: a
      }), $a(
        St(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = St(a, e), u = mf(
        l.stateNode,
        a,
        u
      ), Ki(l, u), El !== 4 && (El = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = St(n, e), hu === null ? hu = [n] : hu.push(n), El !== 4 && (El = 2), t === null) return !0;
    a = St(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = mf(e.stateNode, a, l), Ki(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Se === null || !Se.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = qs(u), js(
              u,
              l,
              e,
              a
            ), Ki(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var gf = Error(o(461)), Cl = !1;
  function Vl(l, t, e, a) {
    t.child = l === null ? Zo(t, null, e, a) : Ze(
      t,
      l.child,
      e,
      a
    );
  }
  function Xs(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return je(t), a = Fi(
      l,
      t,
      e,
      i,
      n,
      u
    ), c = Ii(), l !== null && !Cl ? (Pi(l, t, u), Jt(l, t, u)) : (ll && c && Ci(t), t.flags |= 1, Vl(l, t, a, u), t.child);
  }
  function Gs(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Ui(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Qs(
        l,
        t,
        n,
        a,
        u
      )) : (l = $u(
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
  function Qs(l, t, e, a, u) {
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
  function Zs(l, t, e, a) {
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
        return Vs(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pu(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ko(t, n) : Ji(), wo(t);
      else
        return a = t.lanes = 536870912, Vs(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (Pu(t, n.cachePool), Ko(t, n), he(), t.memoizedState = null) : (l !== null && Pu(t, null), Ji(), he());
    return Vl(l, t, u, e), t.child;
  }
  function fu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Vs(l, t, e, a, u) {
    var n = Qi();
    return n = n === null ? null : { parent: Rl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && Pu(t, null), Ji(), wo(t), l !== null && sa(l, t, a, !0), t.childLanes = u, null;
  }
  function mn(l, t) {
    return t = Sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ls(l, t, e) {
    return Ze(t, l.child, null, e), l = mn(t, t.pendingProps), l.flags |= 2, st(t), t.memoizedState = null, l;
  }
  function my(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ll) {
        if (a.mode === "hidden")
          return l = mn(t, a), t.lanes = 536870912, fu(null, l);
        if ($i(t), (l = vl) ? (l = ed(
          l,
          pt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Oo(l), e.return = t, t.child = e, Ql = t, vl = null)) : l = null, l === null) throw ce(t);
        return t.lanes = 536870912, null;
      }
      return mn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ($i(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ls(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Cl || sa(l, t, e, !1), u = (e & l.childLanes) !== 0, Cl || u) {
        if (a = hl, a !== null && (i = Nc(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Be(l, i), at(a, l, i), gf;
        On(), t = Ls(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, vl = Et(i.nextSibling), Ql = t, ll = !0, fe = null, pt = !1, l !== null && Ro(t, l), t = mn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function gn(l, t) {
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
    return je(t), e = Fi(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = Ii(), l !== null && !Cl ? (Pi(l, t, u), Jt(l, t, u)) : (ll && a && Ci(t), t.flags |= 1, Vl(l, t, e, u), t.child);
  }
  function Ks(l, t, e, a, u, n) {
    return je(t), t.updateQueue = null, e = Wo(
      t,
      a,
      e,
      u
    ), Jo(l), a = Ii(), l !== null && !Cl ? (Pi(l, t, n), Jt(l, t, n)) : (ll && a && Ci(t), t.flags |= 1, Vl(l, t, e, n), t.child);
  }
  function ws(l, t, e, a, u) {
    if (je(t), t.stateNode === null) {
      var n = ia, i = e.contextType;
      typeof i == "object" && i !== null && (n = Zl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Zl(i) : ia, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (hf(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && vf.enqueueReplaceState(n, n.state, null), eu(t, a, n, u), tu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, s = Le(e, c);
      n.props = s;
      var g = n.context, p = e.contextType;
      i = ia, typeof p == "object" && p !== null && (i = Zl(p));
      var _ = e.getDerivedStateFromProps;
      p = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && Cs(
        t,
        n,
        a,
        i
      ), se = !1;
      var S = t.memoizedState;
      n.state = S, eu(t, a, n, u), tu(), g = t.memoizedState, c || S !== g || se ? (typeof _ == "function" && (hf(
        t,
        e,
        _,
        a
      ), g = t.memoizedState), (s = se || Hs(
        t,
        e,
        s,
        a,
        S,
        g,
        i
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Li(l, t), i = t.memoizedProps, p = Le(e, i), n.props = p, _ = t.pendingProps, S = n.context, g = e.contextType, s = ia, typeof g == "object" && g !== null && (s = Zl(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== _ || S !== s) && Cs(
        t,
        n,
        a,
        s
      ), se = !1, S = t.memoizedState, n.state = S, eu(t, a, n, u), tu();
      var z = t.memoizedState;
      i !== _ || S !== z || se || l !== null && l.dependencies !== null && Fu(l.dependencies) ? (typeof c == "function" && (hf(
        t,
        e,
        c,
        a
      ), z = t.memoizedState), (p = se || Hs(
        t,
        e,
        p,
        a,
        S,
        z,
        s
      ) || l !== null && l.dependencies !== null && Fu(l.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, z, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        z,
        s
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), n.props = a, n.state = z, n.context = s, a = p) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, gn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ze(
      t,
      l.child,
      null,
      u
    ), t.child = Ze(
      t,
      null,
      e,
      u
    )) : Vl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Jt(
      l,
      t,
      u
    ), l;
  }
  function Js(l, t, e, a) {
    return Ye(), t.flags |= 256, Vl(l, t, e, a), t.child;
  }
  var bf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function zf(l) {
    return { baseLanes: l, cachePool: Yo() };
  }
  function pf(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= rt), l;
  }
  function Ws(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (_l.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (u ? ye(t) : he(), (l = vl) ? (l = ed(
          l,
          pt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Oo(l), e.return = t, t.child = e, Ql = t, vl = null)) : l = null, l === null) throw ce(t);
        return ac(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (he(), u = t.mode, c = Sn(
        { mode: "hidden", children: c },
        u
      ), a = xe(
        a,
        u,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = zf(e), a.childLanes = pf(
        l,
        i,
        e
      ), t.memoizedState = bf, fu(null, a)) : (ye(t), Tf(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (ye(t), t.flags &= -257, t = Ef(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (he(), t.child = l.child, t.flags |= 128, t = null) : (he(), c = a.fallback, u = t.mode, a = Sn(
          { mode: "visible", children: a.children },
          u
        ), c = xe(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Ze(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = zf(e), a.childLanes = pf(
          l,
          i,
          e
        ), t.memoizedState = bf, t = fu(null, a));
      else if (ye(t), ac(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(o(419)), a.stack = "", a.digest = i, $a({ value: a, source: null, stack: null }), t = Ef(
          l,
          t,
          e
        );
      } else if (Cl || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Cl || i) {
        if (i = hl, i !== null && (a = Nc(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Be(l, a), at(i, l, a), gf;
        ec(c) || On(), t = Ef(
          l,
          t,
          e
        );
      } else
        ec(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, vl = Et(
          c.nextSibling
        ), Ql = t, ll = !0, fe = null, pt = !1, l !== null && Ro(t, l), t = Tf(
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
    ) : (c = xe(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, fu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = zf(e) : (u = c.cachePool, u !== null ? (s = Rl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Yo(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = pf(
      l,
      i,
      e
    ), t.memoizedState = bf, fu(l.child, a)) : (ye(t), e = l.child, l = e.sibling, e = Qt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Tf(l, t) {
    return t = Sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Sn(l, t) {
    return l = ct(22, l, null, t), l.lanes = 0, l;
  }
  function Ef(l, t, e) {
    return Ze(t, l.child, null, e), l = Tf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function $s(l, t, e) {
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
    var i = _l.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, N(_l, i), Vl(l, t, a, e), a = ll ? Wa : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && $s(l, e, t);
        else if (l.tag === 19)
          $s(l, e, t);
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
          l = e.alternate, l !== null && nn(l) === null && (u = e), e = e.sibling;
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
          if (l = u.alternate, l !== null && nn(l) === null) {
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
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Fu(l)));
  }
  function gy(l, t, e) {
    switch (t.tag) {
      case 3:
        Wl(t, t.stateNode.containerInfo), oe(t, Rl, l.memoizedState.cache), Ye();
        break;
      case 27:
      case 5:
        Na(t);
        break;
      case 4:
        Wl(t, t.stateNode.containerInfo);
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
          return a.dehydrated !== null ? (ye(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Ws(l, t, e) : (ye(t), l = Jt(
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
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(_l, _l.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Zs(
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
  function Fs(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Cl = !0;
      else {
        if (!_f(l, e) && (t.flags & 128) === 0)
          return Cl = !1, gy(
            l,
            t,
            e
          );
        Cl = (l.flags & 131072) !== 0;
      }
    else
      Cl = !1, ll && (t.flags & 1048576) !== 0 && Uo(t, Wa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ge(t.elementType), t.type = l, typeof l == "function")
            Ui(l) ? (a = Le(l, a), t.tag = 1, t = ws(
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
              if (u === Yl) {
                t.tag = 11, t = Xs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === H) {
                t.tag = 14, t = Gs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Mt(l) || l, Error(o(306, t, ""));
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
        ), ws(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Wl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Li(l, t), eu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, oe(t, Rl, a), a !== n.cache && ji(
            t,
            [Rl],
            e,
            !0
          ), tu(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Js(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = St(
                Error(o(424)),
                t
              ), $a(u), t = Js(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = Et(l.firstChild), Ql = t, ll = !0, fe = null, pt = !0, e = Zo(
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
            Vl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return gn(l, t), l === null ? (e = cd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : ll || (e = t.type, l = t.pendingProps, a = Bn(
          $.current
        ).createElement(e), a[Gl] = t, a[Fl] = l, Ll(a, e, l), ql(a), t.stateNode = a) : t.memoizedState = cd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Na(t), l === null && ll && (a = t.stateNode = nd(
          t.type,
          t.pendingProps,
          $.current
        ), Ql = t, pt = !0, u = vl, Te(t.type) ? (uc = u, vl = Et(a.firstChild)) : vl = u), Vl(
          l,
          t,
          t.pendingProps.children,
          e
        ), gn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((u = a = vl) && (a = Jy(
          a,
          t.type,
          t.pendingProps,
          pt
        ), a !== null ? (t.stateNode = a, Ql = t, vl = Et(a.firstChild), pt = !1, u = !0) : u = !1), u || ce(t)), Na(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, Pf(u, n) ? a = null : i !== null && Pf(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Fi(
          l,
          t,
          cy,
          null,
          null,
          e
        ), Tu._currentValue = u), gn(l, t), Vl(l, t, a, e), t.child;
      case 6:
        return l === null && ll && ((l = e = vl) && (e = Wy(
          e,
          t.pendingProps,
          pt
        ), e !== null ? (t.stateNode = e, Ql = t, vl = null, l = !0) : l = !1), l || ce(t)), null;
      case 13:
        return Ws(l, t, e);
      case 4:
        return Wl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ze(
          t,
          null,
          a,
          e
        ) : Vl(l, t, a, e), t.child;
      case 11:
        return Xs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Vl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Vl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Vl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, oe(t, t.type, a.value), Vl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, je(t), u = Zl(u), a = a(u), t.flags |= 1, Vl(l, t, a, e), t.child;
      case 14:
        return Gs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Qs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return ks(l, t, e);
      case 31:
        return my(l, t, e);
      case 22:
        return Zs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return je(t), a = Zl(Rl), l === null ? (u = Qi(), u === null && (u = hl, n = Xi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Vi(t), oe(t, Rl, u)) : ((l.lanes & e) !== 0 && (Li(l, t), eu(t, null, null, e), tu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), oe(t, Rl, a)) : (a = n.cache, oe(t, Rl, a), a !== u.cache && ji(
          t,
          [Rl],
          e,
          !0
        ))), Vl(
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
        else if (A0()) l.flags |= 8192;
        else
          throw Qe = tn, Zi;
    } else l.flags &= -16777217;
  }
  function Is(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !yd(t))
      if (A0()) l.flags |= 8192;
      else
        throw Qe = tn, Zi;
  }
  function bn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Rc() : 536870912, l.lanes |= t, Ta |= t);
  }
  function cu(l, t) {
    if (!ll)
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
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function Sy(l, t, e) {
    var a = t.pendingProps;
    switch (Ni(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Lt(Rl), Al(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (oa(t) ? Wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, xi())), ml(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Wt(t), n !== null ? (ml(t), Is(t, n)) : (ml(t), Mf(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Wt(t), ml(t), Is(t, n)) : (ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Wt(t), ml(t), Mf(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Uu(t), e = $.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ml(t), null;
          }
          l = Y.current, oa(t) ? Ho(t) : (l = nd(u, a, e), t.stateNode = l, Wt(t));
        }
        return ml(t), null;
      case 5:
        if (Uu(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ml(t), null;
          }
          if (n = Y.current, oa(t))
            Ho(t);
          else {
            var i = Bn(
              $.current
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
            n[Gl] = t, n[Fl] = a;
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
            l: switch (Ll(n, u, a), u) {
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
        return ml(t), Mf(
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
          if (l = $.current, oa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Ql, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Gl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || W0(l.nodeValue, e)), l || ce(t, !0);
          } else
            l = Bn(l).createTextNode(
              a
            ), l[Gl] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = oa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Gl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), l = !1;
          } else
            e = xi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (st(t), t) : (st(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = oa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Gl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), u = !1;
          } else
            u = xi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (st(t), t) : (st(t), null);
        }
        return st(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bn(t, t.updateQueue), ml(t), null);
      case 4:
        return Al(), l === null && Wf(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return Lt(t.type), ml(t), null;
      case 19:
        if (M(_l), a = t.memoizedState, a === null) return ml(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) cu(a, !1);
          else {
            if (El !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = nn(l), n !== null) {
                  for (t.flags |= 128, cu(a, !1), l = n.updateQueue, t.updateQueue = l, bn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Mo(e, l), e = e.sibling;
                  return N(
                    _l,
                    _l.current & 1 | 2
                  ), ll && Zt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ut() > An && (t.flags |= 128, u = !0, cu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = nn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, bn(t, l), cu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ll)
                return ml(t), null;
            } else
              2 * ut() - a.renderingStartTime > An && e !== 536870912 && (t.flags |= 128, u = !0, cu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ut(), l.sibling = null, e = _l.current, N(
          _l,
          u ? e & 1 | 2 : e & 1
        ), ll && Zt(t, a.treeForkCount), l) : (ml(t), null);
      case 22:
      case 23:
        return st(t), Wi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), e = t.updateQueue, e !== null && bn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && M(Xe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Lt(Rl), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function by(l, t) {
    switch (Ni(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Lt(Rl), Al(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Uu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (st(t), t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (st(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(_l), null;
      case 4:
        return Al(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return st(t), Wi(), l !== null && M(Xe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Lt(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ps(l, t) {
    switch (Ni(t), t.tag) {
      case 3:
        Lt(Rl), Al();
        break;
      case 26:
      case 27:
      case 5:
        Uu(t);
        break;
      case 4:
        Al();
        break;
      case 31:
        t.memoizedState !== null && st(t);
        break;
      case 13:
        st(t);
        break;
      case 19:
        M(_l);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        st(t), Wi(), l !== null && M(Xe);
        break;
      case 24:
        Lt(Rl);
    }
  }
  function ou(l, t) {
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
      cl(t, t.return, c);
    }
  }
  function ve(l, t, e) {
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
              } catch (p) {
                cl(
                  u,
                  s,
                  p
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (p) {
      cl(t, t.return, p);
    }
  }
  function l0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Lo(t, e);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function t0(l, t, e) {
    e.props = Le(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      cl(l, t, a);
    }
  }
  function su(l, t) {
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
      cl(l, t, u);
    }
  }
  function xt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          cl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          cl(l, t, u);
        }
      else e.current = null;
  }
  function e0(l) {
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
      cl(l, l.return, u);
    }
  }
  function Of(l, t, e) {
    try {
      var a = l.stateNode;
      Qy(a, l.type, e, t), a[Fl] = t;
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function a0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Te(l.type) || l.tag === 4;
  }
  function Df(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || a0(l.return)) return null;
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
  function zn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Te(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (zn(l, t, e), l = l.sibling; l !== null; )
        zn(l, t, e), l = l.sibling;
  }
  function u0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ll(t, a, e), t[Gl] = l, t[Fl] = e;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var $t = !1, Nl = !1, Rf = !1, n0 = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function zy(l, t) {
    if (l = l.containerInfo, Ff = Qn, l = go(l), Ti(l)) {
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
            var i = 0, c = -1, s = -1, g = 0, p = 0, _ = l, S = null;
            t: for (; ; ) {
              for (var z; _ !== e || u !== 0 && _.nodeType !== 3 || (c = i + u), _ !== n || a !== 0 && _.nodeType !== 3 || (s = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (z = _.firstChild) !== null; )
                S = _, _ = z;
              for (; ; ) {
                if (_ === l) break t;
                if (S === e && ++g === u && (c = i), S === n && ++p === a && (s = i), (z = _.nextSibling) !== null) break;
                _ = S, S = _.parentNode;
              }
              _ = z;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (If = { focusedElem: l, selectionRange: e }, Qn = !1, jl = t; jl !== null; )
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
                  var x = Le(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    x,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Q) {
                  cl(
                    e,
                    e.return,
                    Q
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
  function i0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ft(l, e), a & 4 && ou(5, e);
        break;
      case 1:
        if (Ft(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              cl(e, e.return, i);
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
              cl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && l0(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if (Ft(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
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
            Lo(l, t);
          } catch (i) {
            cl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && u0(e);
      case 26:
      case 5:
        Ft(l, e), t === null && a & 4 && e0(e), a & 512 && su(e, e.return);
        break;
      case 12:
        Ft(l, e);
        break;
      case 31:
        Ft(l, e), a & 4 && o0(l, e);
        break;
      case 13:
        Ft(l, e), a & 4 && s0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Uy.bind(
          null,
          e
        ), $y(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || $t, !a) {
          t = t !== null && t.memoizedState !== null || Nl, u = $t;
          var n = Nl;
          $t = a, (Nl = t) && !n ? It(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Ft(l, e), $t = u, Nl = n;
        }
        break;
      case 30:
        break;
      default:
        Ft(l, e);
    }
  }
  function f0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, f0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ni(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, Pl = !1;
  function kt(l, t, e) {
    for (e = e.child; e !== null; )
      c0(l, t, e), e = e.sibling;
  }
  function c0(l, t, e) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
      try {
        nt.onCommitFiberUnmount(Ba, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Nl || xt(e, t), kt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Nl || xt(e, t);
        var a = gl, u = Pl;
        Te(e.type) && (gl = e.stateNode, Pl = !1), kt(
          l,
          t,
          e
        ), bu(e.stateNode), gl = a, Pl = u;
        break;
      case 5:
        Nl || xt(e, t);
      case 6:
        if (a = gl, u = Pl, gl = null, kt(
          l,
          t,
          e
        ), gl = a, Pl = u, gl !== null)
          if (Pl)
            try {
              (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(e.stateNode);
            } catch (n) {
              cl(
                e,
                t,
                n
              );
            }
          else
            try {
              gl.removeChild(e.stateNode);
            } catch (n) {
              cl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        gl !== null && (Pl ? (l = gl, ld(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ra(l)) : ld(gl, e.stateNode));
        break;
      case 4:
        a = gl, u = Pl, gl = e.stateNode.containerInfo, Pl = !0, kt(
          l,
          t,
          e
        ), gl = a, Pl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ve(2, e, t), Nl || ve(4, e, t), kt(
          l,
          t,
          e
        );
        break;
      case 1:
        Nl || (xt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && t0(
          e,
          t,
          a
        )), kt(
          l,
          t,
          e
        );
        break;
      case 21:
        kt(
          l,
          t,
          e
        );
        break;
      case 22:
        Nl = (a = Nl) || e.memoizedState !== null, kt(
          l,
          t,
          e
        ), Nl = a;
        break;
      default:
        kt(
          l,
          t,
          e
        );
    }
  }
  function o0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ra(l);
      } catch (e) {
        cl(t, t.return, e);
      }
    }
  }
  function s0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ra(l);
      } catch (e) {
        cl(t, t.return, e);
      }
  }
  function py(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new n0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new n0()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function pn(l, t) {
    var e = py(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Ry.bind(null, l, a);
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
                gl = c.stateNode, Pl = !1;
                break l;
              }
              break;
            case 5:
              gl = c.stateNode, Pl = !1;
              break l;
            case 3:
            case 4:
              gl = c.stateNode.containerInfo, Pl = !0;
              break l;
          }
          c = c.return;
        }
        if (gl === null) throw Error(o(160));
        c0(n, i, u), gl = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        d0(t, l), t = t.sibling;
  }
  var Ut = null;
  function d0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l), tt(l), a & 4 && (ve(3, l, l.return), ou(3, l), ve(5, l, l.return));
        break;
      case 1:
        lt(t, l), tt(l), a & 512 && (Nl || e === null || xt(e, e.return)), a & 64 && $t && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ut;
        if (lt(t, l), tt(l), a & 512 && (Nl || e === null || xt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[qa] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Ll(n, a, e), n[Gl] = l, ql(n), a = n;
                      break l;
                    case "link":
                      var i = dd(
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
                      n = u.createElement(a), Ll(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = dd(
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
                      n = u.createElement(a), Ll(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[Gl] = l, ql(n), a = n;
                }
                l.stateNode = a;
              } else
                rd(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = sd(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? rd(
              u,
              l.type,
              l.stateNode
            ) : sd(
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
        lt(t, l), tt(l), a & 512 && (Nl || e === null || xt(e, e.return)), e !== null && a & 4 && Of(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (lt(t, l), tt(l), a & 512 && (Nl || e === null || xt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Pe(u, "");
          } catch (x) {
            cl(l, l.return, x);
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
          } catch (x) {
            cl(l, l.return, x);
          }
        }
        break;
      case 3:
        if (qn = null, u = Ut, Ut = xn(t.containerInfo), lt(t, l), Ut = u, tt(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ra(t.containerInfo);
          } catch (x) {
            cl(l, l.return, x);
          }
        Rf && (Rf = !1, r0(l));
        break;
      case 4:
        a = Ut, Ut = xn(
          l.stateNode.containerInfo
        ), lt(t, l), tt(l), Ut = a;
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 31:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
        break;
      case 13:
        lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (En = ut()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, g = $t, p = Nl;
        if ($t = g || u, Nl = p || s, lt(t, l), Nl = p, $t = g, tt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || $t || Nl || Ke(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var _ = s.memoizedProps.style, S = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (x) {
                  cl(s, s.return, x);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (x) {
                  cl(s, s.return, x);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var z = s.stateNode;
                  u ? td(z, !0) : td(s.stateNode, !1);
                } catch (x) {
                  cl(s, s.return, x);
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
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, pn(l, e))));
        break;
      case 19:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, pn(l, a)));
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
          if (a0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Df(l);
            zn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), e.flags &= -33);
            var c = Df(l);
            zn(l, c, i);
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
      } catch (p) {
        cl(l, l.return, p);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function r0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        r0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Ft(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        i0(l, t.alternate, t), t = t.sibling;
  }
  function Ke(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ve(4, t, t.return), Ke(t);
          break;
        case 1:
          xt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && t0(
            t,
            t.return,
            e
          ), Ke(t);
          break;
        case 27:
          bu(t.stateNode);
        case 26:
        case 5:
          xt(t, t.return), Ke(t);
          break;
        case 22:
          t.memoizedState === null && Ke(t);
          break;
        case 30:
          Ke(t);
          break;
        default:
          Ke(t);
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
          ), ou(4, n);
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
              cl(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Vo(s[u], c);
            } catch (g) {
              cl(a, a.return, g);
            }
          }
          e && i & 64 && l0(n), su(n, n.return);
          break;
        case 27:
          u0(n);
        case 26:
        case 5:
          It(
            u,
            n,
            e
          ), e && a === null && i & 4 && e0(n), su(n, n.return);
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
          ), e && i & 4 && o0(u, n);
          break;
        case 13:
          It(
            u,
            n,
            e
          ), e && i & 4 && s0(u, n);
          break;
        case 22:
          n.memoizedState === null && It(
            u,
            n,
            e
          ), su(n, n.return);
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
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && ka(e));
  }
  function Cf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ka(l));
  }
  function Rt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        y0(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function y0(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rt(
          l,
          t,
          e,
          a
        ), u & 2048 && ou(9, t);
        break;
      case 1:
        Rt(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Rt(
          l,
          t,
          e,
          a
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ka(l)));
        break;
      case 12:
        if (u & 2048) {
          Rt(
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
            cl(t, t.return, s);
          }
        } else
          Rt(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Rt(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Rt(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Rt(
          l,
          t,
          e,
          a
        ) : du(l, t) : n._visibility & 2 ? Rt(
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
        Rt(
          l,
          t,
          e,
          a
        ), u & 2048 && Cf(t.alternate, t);
        break;
      default:
        Rt(
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
          ), ou(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? ba(
            n,
            i,
            c,
            s,
            u
          ) : du(
            n,
            i
          ) : (p._visibility |= 2, ba(
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
  function du(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            du(e, a), u & 2048 && Hf(
              a.alternate,
              a
            );
            break;
          case 24:
            du(e, a), u & 2048 && Cf(a.alternate, a);
            break;
          default:
            du(e, a);
        }
        t = t.sibling;
      }
  }
  var ru = 8192;
  function za(l, t, e) {
    if (l.subtreeFlags & ru)
      for (l = l.child; l !== null; )
        h0(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function h0(l, t, e) {
    switch (l.tag) {
      case 26:
        za(
          l,
          t,
          e
        ), l.flags & ru && l.memoizedState !== null && f1(
          e,
          Ut,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        za(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Ut;
        Ut = xn(l.stateNode.containerInfo), za(
          l,
          t,
          e
        ), Ut = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ru, ru = 16777216, za(
          l,
          t,
          e
        ), ru = a) : za(
          l,
          t,
          e
        ));
        break;
      default:
        za(
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
  function yu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, g0(
            a,
            l
          );
        }
      v0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        m0(l), l = l.sibling;
  }
  function m0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yu(l), l.flags & 2048 && ve(9, l, l.return);
        break;
      case 3:
        yu(l);
        break;
      case 12:
        yu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Tn(l)) : yu(l);
        break;
      default:
        yu(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          jl = a, g0(
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
          ve(8, t, t.return), Tn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function g0(l, t) {
    for (; jl !== null; ) {
      var e = jl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ve(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ka(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, jl = a;
      else
        l: for (e = l; jl !== null; ) {
          a = jl;
          var u = a.sibling, n = a.return;
          if (f0(a), a === e) {
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
  var Ty = {
    getCacheForType: function(l) {
      var t = Zl(Rl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Zl(Rl).controller.signal;
    }
  }, Ey = typeof WeakMap == "function" ? WeakMap : Map, nl = 0, hl = null, k = null, I = 0, fl = 0, dt = null, me = !1, pa = !1, Nf = !1, Pt = 0, El = 0, ge = 0, we = 0, Bf = 0, rt = 0, Ta = 0, hu = null, et = null, xf = !1, En = 0, S0 = 0, An = 1 / 0, _n = null, Se = null, Bl = 0, be = null, Ea = null, le = 0, Yf = 0, qf = null, b0 = null, vu = 0, jf = null;
  function yt() {
    return (nl & 2) !== 0 && I !== 0 ? I & -I : T.T !== null ? Lf() : Bc();
  }
  function z0() {
    if (rt === 0)
      if ((I & 536870912) === 0 || ll) {
        var l = Cu;
        Cu <<= 1, (Cu & 3932160) === 0 && (Cu = 262144), rt = l;
      } else rt = 536870912;
    return l = ot.current, l !== null && (l.flags |= 32), rt;
  }
  function at(l, t, e) {
    (l === hl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (Aa(l, 0), ze(
      l,
      I,
      rt,
      !1
    )), Ya(l, e), ((nl & 2) === 0 || l !== hl) && (l === hl && ((nl & 2) === 0 && (we |= e), El === 4 && ze(
      l,
      I,
      rt,
      !1
    )), Yt(l));
  }
  function p0(l, t, e) {
    if ((nl & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || xa(l, t), u = a ? My(l, t) : Gf(l, t, !0), n = a;
    do {
      if (u === 0) {
        pa && !a && ze(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !Ay(e)) {
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
              u = hu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Aa(c, i).flags |= 256), i = Gf(
                c,
                i,
                !1
              ), i !== 2) {
                if (Nf && !s) {
                  c.errorRecoveryDisabledLanes |= n, we |= n, u = 4;
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
          Aa(l, 0), ze(l, t, 0, !0);
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
              ze(
                a,
                t,
                rt,
                !me
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
          if ((t & 62914560) === t && (u = En + 300 - ut(), 10 < u)) {
            if (ze(
              a,
              t,
              rt,
              !me
            ), Bu(a, 0, !0) !== 0) break l;
            le = t, a.timeoutHandle = I0(
              T0.bind(
                null,
                a,
                e,
                et,
                _n,
                xf,
                t,
                rt,
                we,
                Ta,
                me,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          T0(
            a,
            e,
            et,
            _n,
            xf,
            t,
            rt,
            we,
            Ta,
            me,
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
  function T0(l, t, e, a, u, n, i, c, s, g, p, _, S, z) {
    if (l.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xt
      }, h0(
        t,
        n,
        _
      );
      var x = (n & 62914560) === n ? En - ut() : (n & 4194048) === n ? S0 - ut() : 0;
      if (x = c1(
        _,
        x
      ), x !== null) {
        le = n, l.cancelPendingCommit = x(
          R0.bind(
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
            p,
            _,
            null,
            S,
            z
          )
        ), ze(l, n, i, !g);
        return;
      }
    }
    R0(
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
  function Ay(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ft(n(), u)) return !1;
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
  function ze(l, t, e, a) {
    t &= ~Bf, t &= ~we, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - it(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Hc(l, e, t);
  }
  function Mn() {
    return (nl & 6) === 0 ? (mu(0), !1) : !0;
  }
  function Xf() {
    if (k !== null) {
      if (fl === 0)
        var l = k.return;
      else
        l = k, Vt = qe = null, lf(l), ha = null, Ia = 0, l = k;
      for (; l !== null; )
        Ps(l.alternate, l), l = l.return;
      k = null;
    }
  }
  function Aa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Ly(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), le = 0, Xf(), hl = l, k = e = Qt(l.current, null), I = t, fl = 0, dt = null, me = !1, pa = xa(l, t), Nf = !1, Ta = rt = Bf = we = ge = El = 0, et = hu = null, xf = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - it(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return Pt = t, wu(), e;
  }
  function E0(l, t) {
    J = null, T.H = iu, t === ya || t === ln ? (t = Xo(), fl = 3) : t === Zi ? (t = Xo(), fl = 4) : fl = t === gf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, dt = t, k === null && (El = 1, vn(
      l,
      St(t, l.current)
    ));
  }
  function A0() {
    var l = ot.current;
    return l === null ? !0 : (I & 4194048) === I ? Tt === null : (I & 62914560) === I || (I & 536870912) !== 0 ? l === Tt : !1;
  }
  function _0() {
    var l = T.H;
    return T.H = iu, l === null ? iu : l;
  }
  function M0() {
    var l = T.A;
    return T.A = Ty, l;
  }
  function On() {
    El = 4, me || (I & 4194048) !== I && ot.current !== null || (pa = !0), (ge & 134217727) === 0 && (we & 134217727) === 0 || hl === null || ze(
      hl,
      I,
      rt,
      !1
    );
  }
  function Gf(l, t, e) {
    var a = nl;
    nl |= 2;
    var u = _0(), n = M0();
    (hl !== l || I !== t) && (_n = null, Aa(l, t)), t = !1;
    var i = El;
    l: do
      try {
        if (fl !== 0 && k !== null) {
          var c = k, s = dt;
          switch (fl) {
            case 8:
              Xf(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ot.current === null && (t = !0);
              var g = fl;
              if (fl = 0, dt = null, _a(l, c, s, g), e && pa) {
                i = 0;
                break l;
              }
              break;
            default:
              g = fl, fl = 0, dt = null, _a(l, c, s, g);
          }
        }
        _y(), i = El;
        break;
      } catch (p) {
        E0(l, p);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Vt = qe = null, nl = a, T.H = u, T.A = n, k === null && (hl = null, I = 0, wu()), i;
  }
  function _y() {
    for (; k !== null; ) O0(k);
  }
  function My(l, t) {
    var e = nl;
    nl |= 2;
    var a = _0(), u = M0();
    hl !== l || I !== t ? (_n = null, An = ut() + 500, Aa(l, t)) : pa = xa(
      l,
      t
    );
    l: do
      try {
        if (fl !== 0 && k !== null) {
          t = k;
          var n = dt;
          t: switch (fl) {
            case 1:
              fl = 0, dt = null, _a(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (qo(n)) {
                fl = 0, dt = null, D0(t);
                break;
              }
              t = function() {
                fl !== 2 && fl !== 9 || hl !== l || (fl = 7), Yt(l);
              }, n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              qo(n) ? (fl = 0, dt = null, D0(t)) : (fl = 0, dt = null, _a(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? yd(i) : c.stateNode.complete) {
                    fl = 0, dt = null;
                    var s = c.sibling;
                    if (s !== null) k = s;
                    else {
                      var g = c.return;
                      g !== null ? (k = g, Dn(g)) : k = null;
                    }
                    break t;
                  }
              }
              fl = 0, dt = null, _a(l, t, n, 5);
              break;
            case 6:
              fl = 0, dt = null, _a(l, t, n, 6);
              break;
            case 8:
              Xf(), El = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Oy();
        break;
      } catch (p) {
        E0(l, p);
      }
    while (!0);
    return Vt = qe = null, T.H = a, T.A = u, nl = e, k !== null ? 0 : (hl = null, I = 0, wu(), El);
  }
  function Oy() {
    for (; k !== null && !kd(); )
      O0(k);
  }
  function O0(l) {
    var t = Fs(l.alternate, l, Pt);
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : k = t;
  }
  function D0(l) {
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
          I
        );
        break;
      case 11:
        t = Ks(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          I
        );
        break;
      case 5:
        lf(t);
      default:
        Ps(e, t), t = k = Mo(t, Pt), t = Fs(e, t, Pt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : k = t;
  }
  function _a(l, t, e, a) {
    Vt = qe = null, lf(t), ha = null, Ia = 0;
    var u = t.return;
    try {
      if (vy(
        l,
        u,
        t,
        e,
        I
      )) {
        El = 1, vn(
          l,
          St(e, l.current)
        ), k = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw k = u, n;
      El = 1, vn(
        l,
        St(e, l.current)
      ), k = null;
      return;
    }
    t.flags & 32768 ? (ll || a === 1 ? l = !0 : pa || (I & 536870912) !== 0 ? l = !1 : (me = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ot.current, a !== null && a.tag === 13 && (a.flags |= 16384))), U0(t, l)) : Dn(t);
  }
  function Dn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        U0(
          t,
          me
        );
        return;
      }
      l = t.return;
      var e = Sy(
        t.alternate,
        t,
        Pt
      );
      if (e !== null) {
        k = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        k = t;
        return;
      }
      k = t = l;
    } while (t !== null);
    El === 0 && (El = 5);
  }
  function U0(l, t) {
    do {
      var e = by(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, k = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        k = l;
        return;
      }
      k = l = e;
    } while (l !== null);
    El = 6, k = null;
  }
  function R0(l, t, e, a, u, n, i, c, s) {
    l.cancelPendingCommit = null;
    do
      Un();
    while (Bl !== 0);
    if ((nl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Oi, ir(
        l,
        e,
        n,
        i,
        c,
        s
      ), l === hl && (k = hl = null, I = 0), Ea = t, be = l, le = e, Yf = n, qf = u, b0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Hy(Ru, function() {
        return x0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null, u = C.p, C.p = 2, i = nl, nl |= 4;
        try {
          zy(l, t, e);
        } finally {
          nl = i, C.p = u, T.T = a;
        }
      }
      Bl = 1, H0(), C0(), N0();
    }
  }
  function H0() {
    if (Bl === 1) {
      Bl = 0;
      var l = be, t = Ea, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = T.T, T.T = null;
        var a = C.p;
        C.p = 2;
        var u = nl;
        nl |= 4;
        try {
          d0(t, l);
          var n = If, i = go(l.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && mo(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && Ti(c)) {
              var g = s.start, p = s.end;
              if (p === void 0 && (p = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  p,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, S = _ && _.defaultView || window;
                if (S.getSelection) {
                  var z = S.getSelection(), x = c.textContent.length, Q = Math.min(s.start, x), rl = s.end === void 0 ? Q : Math.min(s.end, x);
                  !z.extend && Q > rl && (i = rl, rl = Q, Q = i);
                  var y = vo(
                    c,
                    Q
                  ), d = vo(
                    c,
                    rl
                  );
                  if (y && d && (z.rangeCount !== 1 || z.anchorNode !== y.node || z.anchorOffset !== y.offset || z.focusNode !== d.node || z.focusOffset !== d.offset)) {
                    var m = _.createRange();
                    m.setStart(y.node, y.offset), z.removeAllRanges(), Q > rl ? (z.addRange(m), z.extend(d.node, d.offset)) : (m.setEnd(d.node, d.offset), z.addRange(m));
                  }
                }
              }
            }
            for (_ = [], z = c; z = z.parentNode; )
              z.nodeType === 1 && _.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var A = _[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Qn = !!Ff, If = Ff = null;
        } finally {
          nl = u, C.p = a, T.T = e;
        }
      }
      l.current = t, Bl = 2;
    }
  }
  function C0() {
    if (Bl === 2) {
      Bl = 0;
      var l = be, t = Ea, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = T.T, T.T = null;
        var a = C.p;
        C.p = 2;
        var u = nl;
        nl |= 4;
        try {
          i0(l, t.alternate, t);
        } finally {
          nl = u, C.p = a, T.T = e;
        }
      }
      Bl = 3;
    }
  }
  function N0() {
    if (Bl === 4 || Bl === 3) {
      Bl = 0, Fd();
      var l = be, t = Ea, e = le, a = b0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Bl = 5 : (Bl = 0, Ea = be = null, B0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Se = null), ai(e), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function")
        try {
          nt.onCommitFiberRoot(
            Ba,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = T.T, u = C.p, C.p = 2, T.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          T.T = t, C.p = u;
        }
      }
      (le & 3) !== 0 && Un(), Yt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === jf ? vu++ : (vu = 0, jf = l) : vu = 0, mu(0);
    }
  }
  function B0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ka(t)));
  }
  function Un() {
    return H0(), C0(), N0(), x0();
  }
  function x0() {
    if (Bl !== 5) return !1;
    var l = be, t = Yf;
    Yf = 0;
    var e = ai(le), a = T.T, u = C.p;
    try {
      C.p = 32 > e ? 32 : e, T.T = null, e = qf, qf = null;
      var n = be, i = le;
      if (Bl = 0, Ea = be = null, le = 0, (nl & 6) !== 0) throw Error(o(331));
      var c = nl;
      if (nl |= 4, m0(n.current), y0(
        n,
        n.current,
        i,
        e
      ), nl = c, mu(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function")
        try {
          nt.onPostCommitFiberRoot(Ba, n);
        } catch {
        }
      return !0;
    } finally {
      C.p = u, T.T = a, B0(l, t);
    }
  }
  function Y0(l, t, e) {
    t = St(e, t), t = mf(l.stateNode, t, 2), l = re(l, t, 2), l !== null && (Ya(l, 2), Yt(l));
  }
  function cl(l, t, e) {
    if (l.tag === 3)
      Y0(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Y0(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Se === null || !Se.has(a))) {
            l = St(e, l), e = qs(2), a = re(t, e, 2), a !== null && (js(
              e,
              a,
              t,
              l
            ), Ya(a, 2), Yt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ey();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Nf = !0, u.add(e), l = Dy.bind(null, l, t, e), t.then(l, l));
  }
  function Dy(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (I & e) === e && (El === 4 || El === 3 && (I & 62914560) === I && 300 > ut() - En ? (nl & 2) === 0 && Aa(l, 0) : Bf |= e, Ta === I && (Ta = 0)), Yt(l);
  }
  function q0(l, t) {
    t === 0 && (t = Rc()), l = Be(l, t), l !== null && (Ya(l, t), Yt(l));
  }
  function Uy(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), q0(l, e);
  }
  function Ry(l, t) {
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
    a !== null && a.delete(t), q0(l, e);
  }
  function Hy(l, t) {
    return Pn(l, t);
  }
  var Rn = null, Ma = null, Zf = !1, Hn = !1, Vf = !1, pe = 0;
  function Yt(l) {
    l !== Ma && l.next === null && (Ma === null ? Rn = Ma = l : Ma = Ma.next = l), Hn = !0, Zf || (Zf = !0, Ny());
  }
  function mu(l, t) {
    if (!Vf && Hn) {
      Vf = !0;
      do
        for (var e = !1, a = Rn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - it(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Q0(a, n));
          } else
            n = I, n = Bu(
              a,
              a === hl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || xa(a, n) || (e = !0, Q0(a, n));
          a = a.next;
        }
      while (e);
      Vf = !1;
    }
  }
  function Cy() {
    j0();
  }
  function j0() {
    Hn = Zf = !1;
    var l = 0;
    pe !== 0 && Vy() && (l = pe);
    for (var t = ut(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = X0(a, t);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (Ma = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Hn = !0)), a = u;
    }
    Bl !== 0 && Bl !== 5 || mu(l), pe !== 0 && (pe = 0);
  }
  function X0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - it(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = nr(c, t)) : s <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = hl, e = I, e = Bu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || xa(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && li(a), ai(e)) {
        case 2:
        case 8:
          e = Dc;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = Uc;
          break;
        default:
          e = Ru;
      }
      return a = G0.bind(null, l), e = Pn(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function G0(l, t) {
    if (Bl !== 0 && Bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Un() && l.callbackNode !== e)
      return null;
    var a = I;
    return a = Bu(
      l,
      l === hl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (p0(l, a, t), X0(l, ut()), l.callbackNode != null && l.callbackNode === e ? G0.bind(null, l) : null);
  }
  function Q0(l, t) {
    if (Un()) return null;
    p0(l, t, !0);
  }
  function Ny() {
    Ky(function() {
      (nl & 6) !== 0 ? Pn(
        Oc,
        Cy
      ) : j0();
    });
  }
  function Lf() {
    if (pe === 0) {
      var l = da;
      l === 0 && (l = Hu, Hu <<= 1, (Hu & 261888) === 0 && (Hu = 256)), pe = l;
    }
    return pe;
  }
  function Z0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ju("" + l);
  }
  function V0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function By(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Z0(
        (u[Fl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[Fl] || null) ? Z0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Zu(
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
                if (pe !== 0) {
                  var s = i ? V0(u, i) : new FormData(u);
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
                typeof n == "function" && (c.preventDefault(), s = i ? V0(u, i) : new FormData(u), sf(
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
  for (var Kf = 0; Kf < Mi.length; Kf++) {
    var wf = Mi[Kf], xy = wf.toLowerCase(), Yy = wf[0].toUpperCase() + wf.slice(1);
    Dt(
      xy,
      "on" + Yy
    );
  }
  Dt(zo, "onAnimationEnd"), Dt(po, "onAnimationIteration"), Dt(To, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Ir, "onTransitionRun"), Dt(Pr, "onTransitionStart"), Dt(ly, "onTransitionCancel"), Dt(Eo, "onTransitionEnd"), Fe("onMouseEnter", ["mouseout", "mouseover"]), Fe("onMouseLeave", ["mouseout", "mouseover"]), Fe("onPointerEnter", ["pointerout", "pointerover"]), Fe("onPointerLeave", ["pointerout", "pointerover"]), Re(
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
  var gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu)
  );
  function L0(l, t) {
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
            } catch (p) {
              Ku(p);
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
            } catch (p) {
              Ku(p);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function F(l, t) {
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
  var Cn = "_reactListening" + Math.random().toString(36).slice(2);
  function Wf(l) {
    if (!l[Cn]) {
      l[Cn] = !0, qc.forEach(function(e) {
        e !== "selectionchange" && (qy.has(e) || Jf(e, !1, l), Jf(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Cn] || (t[Cn] = !0, Jf("selectionchange", !1, t));
    }
  }
  function K0(l, t, e, a) {
    switch (zd(t)) {
      case 2:
        var u = d1;
        break;
      case 8:
        u = r1;
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
    $c(function() {
      var g = n, p = di(e), _ = [];
      l: {
        var S = Ao.get(l);
        if (S !== void 0) {
          var z = Zu, x = l;
          switch (l) {
            case "keypress":
              if (Gu(e) === 0) break l;
            case "keydown":
            case "keyup":
              z = Rr;
              break;
            case "focusin":
              x = "focus", z = gi;
              break;
            case "focusout":
              x = "blur", z = gi;
              break;
            case "beforeblur":
            case "afterblur":
              z = gi;
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
              z = Ic;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Sr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Nr;
              break;
            case zo:
            case po:
            case To:
              z = pr;
              break;
            case Eo:
              z = xr;
              break;
            case "scroll":
            case "scrollend":
              z = mr;
              break;
            case "wheel":
              z = qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Er;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = lo;
              break;
            case "toggle":
            case "beforetoggle":
              z = Xr;
          }
          var Q = (t & 4) !== 0, rl = !Q && (l === "scroll" || l === "scrollend"), y = Q ? S !== null ? S + "Capture" : null : S;
          Q = [];
          for (var d = g, m; d !== null; ) {
            var A = d;
            if (m = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || m === null || y === null || (A = Xa(d, y), A != null && Q.push(
              Su(d, A, m)
            )), rl) break;
            d = d.return;
          }
          0 < Q.length && (S = new z(
            S,
            x,
            null,
            e,
            p
          ), _.push({ event: S, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", z = l === "mouseout" || l === "pointerout", S && e !== si && (x = e.relatedTarget || e.fromElement) && (We(x) || x[Je]))
            break l;
          if ((z || S) && (S = p.window === p ? p : (S = p.ownerDocument) ? S.defaultView || S.parentWindow : window, z ? (x = e.relatedTarget || e.toElement, z = g, x = x ? We(x) : null, x !== null && (rl = O(x), Q = x.tag, x !== rl || Q !== 5 && Q !== 27 && Q !== 6) && (x = null)) : (z = null, x = g), z !== x)) {
            if (Q = Ic, A = "onMouseLeave", y = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (Q = lo, A = "onPointerLeave", y = "onPointerEnter", d = "pointer"), rl = z == null ? S : ja(z), m = x == null ? S : ja(x), S = new Q(
              A,
              d + "leave",
              z,
              e,
              p
            ), S.target = rl, S.relatedTarget = m, A = null, We(p) === g && (Q = new Q(
              y,
              d + "enter",
              x,
              e,
              p
            ), Q.target = m, Q.relatedTarget = rl, A = Q), rl = A, z && x)
              t: {
                for (Q = jy, y = z, d = x, m = 0, A = y; A; A = Q(A))
                  m++;
                A = 0;
                for (var j = d; j; j = Q(j))
                  A++;
                for (; 0 < m - A; )
                  y = Q(y), m--;
                for (; 0 < A - m; )
                  d = Q(d), A--;
                for (; m--; ) {
                  if (y === d || d !== null && y === d.alternate) {
                    Q = y;
                    break t;
                  }
                  y = Q(y), d = Q(d);
                }
                Q = null;
              }
            else Q = null;
            z !== null && w0(
              _,
              S,
              z,
              Q,
              !1
            ), x !== null && rl !== null && w0(
              _,
              rl,
              x,
              Q,
              !0
            );
          }
        }
        l: {
          if (S = g ? ja(g) : window, z = S.nodeName && S.nodeName.toLowerCase(), z === "select" || z === "input" && S.type === "file")
            var el = co;
          else if (io(S))
            if (oo)
              el = $r;
            else {
              el = Jr;
              var q = wr;
            }
          else
            z = S.nodeName, !z || z.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? g && oi(g.elementType) && (el = co) : el = Wr;
          if (el && (el = el(l, g))) {
            fo(
              _,
              el,
              e,
              p
            );
            break l;
          }
          q && q(l, S, g), l === "focusout" && g && S.type === "number" && g.memoizedProps.value != null && ci(S, "number", S.value);
        }
        switch (q = g ? ja(g) : window, l) {
          case "focusin":
            (io(q) || q.contentEditable === "true") && (aa = q, Ei = g, Ja = null);
            break;
          case "focusout":
            Ja = Ei = aa = null;
            break;
          case "mousedown":
            Ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ai = !1, So(_, e, p);
            break;
          case "selectionchange":
            if (Fr) break;
          case "keydown":
          case "keyup":
            So(_, e, p);
        }
        var W;
        if (bi)
          l: {
            switch (l) {
              case "compositionstart":
                var P = "onCompositionStart";
                break l;
              case "compositionend":
                P = "onCompositionEnd";
                break l;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break l;
            }
            P = void 0;
          }
        else
          ea ? uo(l, e) && (P = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
        P && (to && e.locale !== "ko" && (ea || P !== "onCompositionStart" ? P === "onCompositionEnd" && ea && (W = kc()) : (ne = p, hi = "value" in ne ? ne.value : ne.textContent, ea = !0)), q = Nn(g, P), 0 < q.length && (P = new Pc(
          P,
          l,
          null,
          e,
          p
        ), _.push({ event: P, listeners: q }), W ? P.data = W : (W = no(e), W !== null && (P.data = W)))), (W = Qr ? Zr(l, e) : Vr(l, e)) && (P = Nn(g, "onBeforeInput"), 0 < P.length && (q = new Pc(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          p
        ), _.push({
          event: q,
          listeners: P
        }), q.data = W)), By(
          _,
          l,
          g,
          e,
          p
        );
      }
      L0(_, t);
    });
  }
  function Su(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Nn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Xa(l, e), u != null && a.unshift(
        Su(l, u, n)
      ), u = Xa(l, t), u != null && a.push(
        Su(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function jy(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function w0(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, g = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (s = g, u ? (g = Xa(e, n), g != null && i.unshift(
        Su(e, g, s)
      )) : u || (g = Xa(e, n), g != null && i.push(
        Su(e, g, s)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Xy = /\r\n?/g, Gy = /\u0000|\uFFFD/g;
  function J0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Xy, `
`).replace(Gy, "");
  }
  function W0(l, t) {
    return t = J0(t), J0(l) === t;
  }
  function dl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
        break;
      case "className":
        Yu(l, "class", a);
        break;
      case "tabIndex":
        Yu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(l, e, a);
        break;
      case "style":
        Jc(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Yu(l, "data", a);
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
        a = ju("" + a), l.setAttribute(e, a);
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
          typeof n == "function" && (e === "formAction" ? (t !== "input" && dl(l, t, "name", u.name, u, null), dl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), dl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), dl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (dl(l, t, "encType", u.encType, u, null), dl(l, t, "method", u.method, u, null), dl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = ju("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Xt);
        break;
      case "onScroll":
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
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
        e = ju("" + a), l.setAttributeNS(
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
        F("beforetoggle", l), F("toggle", l), xu(l, "popover", a);
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
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = hr.get(e) || e, xu(l, e, a));
    }
  }
  function kf(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Jc(l, a, n);
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
        a != null && F("scroll", l);
        break;
      case "onScrollEnd":
        a != null && F("scrollend", l);
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
        if (!jc.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Fl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : xu(l, e, a);
          }
    }
  }
  function Ll(l, t, e) {
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
        F("error", l), F("load", l);
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
                  dl(l, t, n, i, e, null);
              }
          }
        u && dl(l, t, "srcSet", e.srcSet, e, null), a && dl(l, t, "src", e.src, e, null);
        return;
      case "input":
        F("invalid", l);
        var c = n = i = u = null, s = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var p = e[a];
            if (p != null)
              switch (a) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  s = p;
                  break;
                case "defaultChecked":
                  g = p;
                  break;
                case "value":
                  n = p;
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
                  dl(l, t, a, p, e, null);
              }
          }
        Vc(
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
        F("invalid", l), a = i = n = null;
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
                dl(l, t, u, c, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
        return;
      case "textarea":
        F("invalid", l), n = u = a = null;
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
                dl(l, t, i, c, e, null);
            }
        Kc(l, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : dl(l, t, s, a, e, null));
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gu.length; a++)
          F(gu[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
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
                dl(l, t, g, a, e, null);
            }
        return;
      default:
        if (oi(t)) {
          for (p in e)
            e.hasOwnProperty(p) && (a = e[p], a !== void 0 && kf(
              l,
              t,
              p,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && dl(l, t, c, a, e, null));
  }
  function Qy(l, t, e, a) {
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
        var u = null, n = null, i = null, c = null, s = null, g = null, p = null;
        for (z in e) {
          var _ = e[z];
          if (e.hasOwnProperty(z) && _ != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(z) || dl(l, t, z, null, a, _);
            }
        }
        for (var S in a) {
          var z = a[S];
          if (_ = e[S], a.hasOwnProperty(S) && (z != null || _ != null))
            switch (S) {
              case "type":
                n = z;
                break;
              case "name":
                u = z;
                break;
              case "checked":
                g = z;
                break;
              case "defaultChecked":
                p = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                c = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                z !== _ && dl(
                  l,
                  t,
                  S,
                  z,
                  a,
                  _
                );
            }
        }
        fi(
          l,
          i,
          c,
          s,
          g,
          p,
          n,
          u
        );
        return;
      case "select":
        z = i = c = S = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                z = s;
              default:
                a.hasOwnProperty(n) || dl(
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
                n !== s && dl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  s
                );
            }
        t = c, e = i, a = z, S != null ? Ie(l, !!e, S, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        z = S = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                dl(l, t, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                z = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== n && dl(l, t, i, u, a, n);
            }
        Lc(l, S, z);
        return;
      case "option":
        for (var x in e)
          S = e[x], e.hasOwnProperty(x) && S != null && !a.hasOwnProperty(x) && (x === "selected" ? l.selected = !1 : dl(
            l,
            t,
            x,
            null,
            a,
            S
          ));
        for (s in a)
          S = a[s], z = e[s], a.hasOwnProperty(s) && S !== z && (S != null || z != null) && (s === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : dl(
            l,
            t,
            s,
            S,
            a,
            z
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
        for (var Q in e)
          S = e[Q], e.hasOwnProperty(Q) && S != null && !a.hasOwnProperty(Q) && dl(l, t, Q, null, a, S);
        for (g in a)
          if (S = a[g], z = e[g], a.hasOwnProperty(g) && S !== z && (S != null || z != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                dl(
                  l,
                  t,
                  g,
                  S,
                  a,
                  z
                );
            }
        return;
      default:
        if (oi(t)) {
          for (var rl in e)
            S = e[rl], e.hasOwnProperty(rl) && S !== void 0 && !a.hasOwnProperty(rl) && kf(
              l,
              t,
              rl,
              void 0,
              a,
              S
            );
          for (p in a)
            S = a[p], z = e[p], !a.hasOwnProperty(p) || S === z || S === void 0 && z === void 0 || kf(
              l,
              t,
              p,
              S,
              a,
              z
            );
          return;
        }
    }
    for (var y in e)
      S = e[y], e.hasOwnProperty(y) && S != null && !a.hasOwnProperty(y) && dl(l, t, y, null, a, S);
    for (_ in a)
      S = a[_], z = e[_], !a.hasOwnProperty(_) || S === z || S == null && z == null || dl(l, t, _, S, a, z);
  }
  function $0(l) {
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
  function Zy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && $0(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], g = s.startTime;
            if (g > c) break;
            var p = s.transferSize, _ = s.initiatorType;
            p && $0(_) && (s = s.responseEnd, i += p * (s < c ? 1 : (c - g) / (s - g)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ff = null, If = null;
  function Bn(l) {
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
  function F0(l, t) {
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
  function Vy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === lc ? !1 : (lc = l, !0) : (lc = null, !1);
  }
  var I0 = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, P0 = typeof Promise == "function" ? Promise : void 0, Ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(l) {
    return P0.resolve(null).then(l).catch(wy);
  } : I0;
  function wy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Te(l) {
    return l === "head";
  }
  function ld(l, t) {
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
          bu(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, bu(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[qa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && bu(l.ownerDocument.body);
      e = u;
    } while (e);
    Ra(t);
  }
  function td(l, t) {
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
  function Jy(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[qa])
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
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wy(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function ed(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function ec(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ac(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function $y(l, t) {
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
  function Et(l) {
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
  function ad(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return Et(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ud(l) {
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
  function nd(l, t, e) {
    switch (t = Bn(e), l) {
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
  function bu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ni(l);
  }
  var At = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Set();
  function xn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var te = C.d;
  C.d = {
    f: ky,
    r: Fy,
    D: Iy,
    C: Py,
    L: l1,
    m: t1,
    X: a1,
    S: e1,
    M: u1
  };
  function ky() {
    var l = te.f(), t = Mn();
    return l || t;
  }
  function Fy(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? Es(t) : te.r(l);
  }
  var Oa = typeof document > "u" ? null : document;
  function fd(l, t, e) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var u = mt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), id.has(u) || (id.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Ll(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function Iy(l) {
    te.D(l), fd("dns-prefetch", l, null);
  }
  function Py(l, t) {
    te.C(l, t), fd("preconnect", l, t);
  }
  function l1(l, t, e) {
    te.L(l, t, e);
    var a = Oa;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + mt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + mt(
        e.imageSizes
      ) + '"]')) : u += '[href="' + mt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Da(l);
          break;
        case "script":
          n = Ua(l);
      }
      At.has(n) || (l = B(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), At.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(zu(n)) || t === "script" && a.querySelector(pu(n)) || (t = a.createElement("link"), Ll(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function t1(l, t) {
    te.m(l, t);
    var e = Oa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(l);
      }
      if (!At.has(n) && (l = B({ rel: "modulepreload", href: l }, t), At.set(n, l), e.querySelector(u) === null)) {
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
        a = e.createElement("link"), Ll(a, "link", l), ql(a), e.head.appendChild(a);
      }
    }
  }
  function e1(l, t, e) {
    te.S(l, t, e);
    var a = Oa;
    if (a && l) {
      var u = ke(a).hoistableStyles, n = Da(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          zu(n)
        ))
          c.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = At.get(n)) && nc(l, e);
          var s = i = a.createElement("link");
          ql(s), Ll(s, "link", l), s._p = new Promise(function(g, p) {
            s.onload = g, s.onerror = p;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Yn(i, t, a);
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
  function a1(l, t) {
    te.X(l, t);
    var e = Oa;
    if (e && l) {
      var a = ke(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = B({ src: l, async: !0 }, t), (t = At.get(u)) && ic(l, t), n = e.createElement("script"), ql(n), Ll(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function u1(l, t) {
    te.M(l, t);
    var e = Oa;
    if (e && l) {
      var a = ke(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = B({ src: l, async: !0, type: "module" }, t), (t = At.get(u)) && ic(l, t), n = e.createElement("script"), ql(n), Ll(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function cd(l, t, e, a) {
    var u = (u = $.current) ? xn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Da(e.href), e = ke(
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
          var n = ke(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            zu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), At.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, At.set(l, e), n || n1(
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
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ua(e), e = ke(
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
    return 'href="' + mt(l) + '"';
  }
  function zu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function od(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function n1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ll(t, "link", e), ql(t), l.head.appendChild(t));
  }
  function Ua(l) {
    return '[src="' + mt(l) + '"]';
  }
  function pu(l) {
    return "script[async]" + l;
  }
  function sd(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + mt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, ql(a), a;
          var u = B({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), ql(a), Ll(a, "style", u), Yn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Da(e.href);
          var n = l.querySelector(
            zu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, ql(n), n;
          a = od(e), (u = At.get(u)) && nc(a, u), n = (l.ownerDocument || l).createElement("link"), ql(n);
          var i = n;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), Ll(n, "link", a), t.state.loading |= 4, Yn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ua(e.src), (u = l.querySelector(
            pu(n)
          )) ? (t.instance = u, ql(u), u) : (a = e, (u = At.get(n)) && (a = B({}, e), ic(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), ql(u), Ll(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Yn(a, e.precedence, l));
    return t.instance;
  }
  function Yn(l, t, e) {
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
  var qn = null;
  function dd(l, t, e) {
    if (qn === null) {
      var a = /* @__PURE__ */ new Map(), u = qn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = qn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[qa] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function rd(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function i1(l, t, e) {
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
  function yd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function f1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Da(a.href), n = t.querySelector(
          zu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = jn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, ql(n);
          return;
        }
        n = t.ownerDocument || t, a = od(a), (u = At.get(u)) && nc(a, u), n = n.createElement("link"), ql(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Ll(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = jn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var fc = 0;
  function c1(l, t) {
    return l.stylesheets && l.count === 0 && Gn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && fc === 0 && (fc = 62500 * Zy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend)) {
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
  function jn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Gn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Xn = null;
  function Gn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Xn = /* @__PURE__ */ new Map(), t.forEach(o1, l), Xn = null, jn.call(l));
  }
  function o1(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Xn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Xn.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = jn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Tu = {
    $$typeof: xl,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function s1(l, t, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hd(l, t, e, a, u, n, i, c, s, g, p, _) {
    return l = new s1(
      l,
      t,
      e,
      i,
      s,
      g,
      p,
      _,
      c
    ), t = 1, n === !0 && (t |= 24), n = ct(3, null, null, t), l.current = n, n.stateNode = l, t = Xi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Vi(n), l;
  }
  function vd(l) {
    return l ? (l = ia, l) : ia;
  }
  function md(l, t, e, a, u, n) {
    u = vd(u), a.context === null ? a.context = u : a.pendingContext = u, a = de(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = re(l, a, t), e !== null && (at(e, l, t), lu(e, l, t));
  }
  function gd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function cc(l, t) {
    gd(l, t), (l = l.alternate) && gd(l, t);
  }
  function Sd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Be(l, 67108864);
      t !== null && at(t, l, 67108864), cc(l, 67108864);
    }
  }
  function bd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = yt();
      t = ei(t);
      var e = Be(l, t);
      e !== null && at(e, l, t), cc(l, t);
    }
  }
  var Qn = !0;
  function d1(l, t, e, a) {
    var u = T.T;
    T.T = null;
    var n = C.p;
    try {
      C.p = 2, oc(l, t, e, a);
    } finally {
      C.p = n, T.T = u;
    }
  }
  function r1(l, t, e, a) {
    var u = T.T;
    T.T = null;
    var n = C.p;
    try {
      C.p = 8, oc(l, t, e, a);
    } finally {
      C.p = n, T.T = u;
    }
  }
  function oc(l, t, e, a) {
    if (Qn) {
      var u = sc(a);
      if (u === null)
        $f(
          l,
          t,
          a,
          Zn,
          e
        ), pd(l, a);
      else if (h1(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (pd(l, a), t & 4 && -1 < y1.indexOf(l)) {
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
                      var s = 1 << 31 - it(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Yt(n), (nl & 6) === 0 && (An = ut() + 500, mu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Be(n, 2), c !== null && at(c, n, 2), Mn(), cc(n, 2);
            }
          if (n = sc(a), n === null && $f(
            l,
            t,
            a,
            Zn,
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
  var Zn = null;
  function dc(l) {
    if (Zn = null, l = We(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = R(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = Z(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Zn = l, null;
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
        switch (Id()) {
          case Oc:
            return 2;
          case Dc:
            return 8;
          case Ru:
          case Pd:
            return 32;
          case Uc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rc = !1, Ee = null, Ae = null, _e = null, Eu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), Me = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function pd(l, t) {
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
        Eu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Au.delete(t.pointerId);
    }
  }
  function _u(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = $e(t), t !== null && Sd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function h1(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Ee = _u(
          Ee,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Ae = _u(
          Ae,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return _e = _u(
          _e,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Eu.set(
          n,
          _u(
            Eu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Au.set(
          n,
          _u(
            Au.get(n) || null,
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
  function Td(l) {
    var t = We(l.target);
    if (t !== null) {
      var e = O(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = R(e), t !== null) {
            l.blockedOn = t, xc(l.priority, function() {
              bd(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Z(e), t !== null) {
            l.blockedOn = t, xc(l.priority, function() {
              bd(e);
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
  function Vn(l) {
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
        return t = $e(e), t !== null && Sd(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Ed(l, t, e) {
    Vn(l) && e.delete(t);
  }
  function v1() {
    rc = !1, Ee !== null && Vn(Ee) && (Ee = null), Ae !== null && Vn(Ae) && (Ae = null), _e !== null && Vn(_e) && (_e = null), Eu.forEach(Ed), Au.forEach(Ed);
  }
  function Ln(l, t) {
    l.blockedOn === t && (l.blockedOn = null, rc || (rc = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      v1
    )));
  }
  var Kn = null;
  function Ad(l) {
    Kn !== l && (Kn = l, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Kn === l && (Kn = null);
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
      return Ln(s, l);
    }
    Ee !== null && Ln(Ee, l), Ae !== null && Ln(Ae, l), _e !== null && Ln(_e, l), Eu.forEach(t), Au.forEach(t);
    for (var e = 0; e < Me.length; e++) {
      var a = Me[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Me.length && (e = Me[0], e.blockedOn === null); )
      Td(e), e.blockedOn === null && Me.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[Fl] || null;
        if (typeof n == "function")
          i || Ad(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Fl] || null)
              c = i.formAction;
            else if (dc(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Ad(e);
        }
      }
  }
  function _d() {
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
  wn.prototype.render = yc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = yt();
    md(e, a, l, t, null, null);
  }, wn.prototype.unmount = yc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      md(l.current, 2, null, l, null, null), Mn(), t[Je] = null;
    }
  };
  function wn(l) {
    this._internalRoot = l;
  }
  wn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Bc();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Me.length && t !== 0 && t < Me[e].priority; e++) ;
      Me.splice(e, 0, l), e === 0 && Td(l);
    }
  };
  var Md = v.version;
  if (Md !== "19.2.4")
    throw Error(
      o(
        527,
        Md,
        "19.2.4"
      )
    );
  C.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? X(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var m1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        Ba = Jn.inject(
          m1
        ), nt = Jn;
      } catch {
      }
  }
  return Ou.createRoot = function(l, t) {
    if (!b(l)) throw Error(o(299));
    var e = !1, a = "", u = Ns, n = Bs, i = xs;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = hd(
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
      _d
    ), l[Je] = t.current, Wf(l), new yc(t);
  }, Ou.hydrateRoot = function(l, t, e) {
    if (!b(l)) throw Error(o(299));
    var a = !1, u = "", n = Ns, i = Bs, c = xs, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = hd(
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
      _d
    ), t.context = vd(null), e = t.current, a = yt(), a = ei(a), u = de(a), u.callback = null, re(e, u, a), e = a, t.current.lanes = e, Ya(t, e), Yt(t), l[Je] = t.current, Wf(l), new wn(t);
  }, Ou.version = "19.2.4", Ou;
}
var Yd;
function M1() {
  if (Yd) return vc.exports;
  Yd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return f(), vc.exports = _1(), vc.exports;
}
var O1 = M1(), qt = Ec();
const Sl = 8, zl = 960, ht = 1240, Vd = "clawd_ui_block_blast_best", Ca = [
  { fill: "#ff845c", shade: "#a53a1f", glow: "rgba(255,132,92,0.36)", stroke: "#fff4ea" },
  { fill: "#63d0ff", shade: "#1e7191", glow: "rgba(99,208,255,0.34)", stroke: "#effcff" },
  { fill: "#ffd56d", shade: "#a47d1d", glow: "rgba(255,213,109,0.32)", stroke: "#fff8df" },
  { fill: "#7fe48d", shade: "#2f7f44", glow: "rgba(127,228,141,0.32)", stroke: "#effff2" },
  { fill: "#c591ff", shade: "#7142a8", glow: "rgba(197,145,255,0.3)", stroke: "#faf4ff" },
  { fill: "#ff95bb", shade: "#9a4561", glow: "rgba(255,149,187,0.3)", stroke: "#fff4f7" }
], Du = [
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
], D1 = new Map(Du.map((f) => [f.id, f]));
function qd(f, v, h) {
  return Math.max(v, Math.min(h, f));
}
function ee(f, v) {
  return f * Sl + v;
}
function U1(f) {
  const v = f * 1664525 + 1013904223 >>> 0;
  return v === 0 ? 1 : v;
}
function Ld(f) {
  const v = U1(f);
  return [v, v / 4294967295];
}
function R1() {
  if (typeof window > "u") return 0;
  const f = window.localStorage.getItem(Vd), v = f == null ? 0 : Number.parseInt(f, 10);
  return Number.isFinite(v) ? Math.max(0, v) : 0;
}
function H1(f) {
  typeof window < "u" && window.localStorage.setItem(Vd, String(f));
}
function C1(f) {
  const v = [];
  for (let h = 0; h < Sl; h += 1) {
    let o = "";
    for (let b = 0; b < Sl; b += 1)
      o += f[ee(h, b)] ? "#" : ".";
    v.push(o);
  }
  return v;
}
function N1() {
  return Array.from({ length: Sl * Sl }, () => null);
}
function Ha(f) {
  const v = f ? 620 : 560, h = v / Sl, o = (zl - v) / 2, b = f ? 150 : 188, O = f ? 820 : 860, R = f ? 254 : 240, Z = f ? 184 : 214, D = 20, E = (zl - R * 3 - D * 2) / 2;
  return {
    boardX: o,
    boardY: b,
    boardSize: v,
    cell: h,
    trayY: O,
    slots: [
      { x: E, y: O, w: R, h: Z },
      { x: E + R + D, y: O, w: R, h: Z },
      { x: E + (R + D) * 2, y: O, w: R, h: Z }
    ]
  };
}
function B1(f) {
  return {
    width: Math.max(...f.map((v) => v.x)) + 1,
    height: Math.max(...f.map((v) => v.y)) + 1
  };
}
function Kd(f, v, h) {
  const o = B1(f.cells);
  return {
    id: `${f.id}::${h}`,
    templateId: f.id,
    label: f.label,
    cells: f.cells.map((b) => ({ ...b })),
    width: o.width,
    height: o.height,
    points: f.cells.length * 10,
    color: v
  };
}
function zc(f, v, h) {
  const o = D1.get(f);
  if (!o)
    throw new Error(`Unknown piece template: ${f}`);
  return Kd(o, v, h);
}
function x1(f) {
  const v = Du.reduce((O, R) => O + R.weight, 0), [h, o] = Ld(f);
  let b = o * v;
  for (const O of Du)
    if (b -= O.weight, b <= 0)
      return [h, O];
  return [h, Du[Du.length - 1]];
}
function Y1(f) {
  const [v, h] = Ld(f), o = Math.min(Ca.length - 1, Math.floor(h * Ca.length));
  return [v, Ca[o]];
}
function q1(f) {
  let v = f, h, o;
  return [v, h] = x1(v), [v, o] = Y1(v), [Kd(h, o, v.toString(16)), v];
}
function j1() {
  return [
    zc("line5h", Ca[0], "opening-a"),
    zc("domino-h", Ca[1], "opening-b"),
    zc("single", Ca[2], "opening-c")
  ];
}
function Ac(f, v, h, o) {
  for (const b of v.cells) {
    const O = h + b.y, R = o + b.x;
    if (O < 0 || O >= Sl || R < 0 || R >= Sl || f[ee(O, R)])
      return !1;
  }
  return !0;
}
function X1(f, v) {
  for (let h = 0; h <= Sl - v.height; h += 1)
    for (let o = 0; o <= Sl - v.width; o += 1)
      if (Ac(f, v, h, o))
        return !0;
  return !1;
}
function wd(f, v) {
  return v.reduce((h, o) => h + (X1(f, o) ? 1 : 0), 0);
}
function Jd(f) {
  const v = [], h = [];
  for (let o = 0; o < Sl; o += 1) {
    let b = !0;
    for (let O = 0; O < Sl; O += 1)
      if (!f[ee(o, O)]) {
        b = !1;
        break;
      }
    b && v.push(o);
  }
  for (let o = 0; o < Sl; o += 1) {
    let b = !0;
    for (let O = 0; O < Sl; O += 1)
      if (!f[ee(O, o)]) {
        b = !1;
        break;
      }
    b && h.push(o);
  }
  return { rows: v, cols: h };
}
function G1(f, v, h, o) {
  const b = f.cells.map((D) => ({ row: v + D.y, col: h + D.x }));
  if (!Ac(o, f, v, h))
    return { pieceId: f.id, row: v, col: h, cells: b, canPlace: !1, rows: [], cols: [] };
  const R = [...o];
  for (const D of f.cells)
    R[ee(v + D.y, h + D.x)] = f.color;
  const Z = Jd(R);
  return { pieceId: f.id, row: v, col: h, cells: b, canPlace: !0, rows: Z.rows, cols: Z.cols };
}
function pc(f, v, h, o, b) {
  const O = f.cell * 1.2;
  if (!(h >= f.boardX - O && h <= f.boardX + f.boardSize + O && o >= f.boardY - O && o <= f.boardY + f.boardSize + O))
    return null;
  const Z = qd(Math.round((h - f.boardX) / f.cell - v.width / 2), 0, Sl - v.width), D = qd(Math.round((o - f.boardY) / f.cell - v.height / 2), 0, Sl - v.height);
  return G1(v, D, Z, b);
}
function Q1(f, v) {
  if (f.length > 0)
    return [f, v];
  const h = [];
  let o = v;
  for (; h.length < 3; ) {
    let b;
    [b, o] = q1(o), !(h.filter((R) => R.templateId === b.templateId).length >= 2) && h.push(b);
  }
  return [h, o];
}
function kl(f, v, h, o, b, O) {
  const R = Math.min(O, o / 2, b / 2);
  f.beginPath(), f.moveTo(v + R, h), f.arcTo(v + o, h, v + o, h + b, R), f.arcTo(v + o, h + b, v, h + b, R), f.arcTo(v, h + b, v, h, R), f.arcTo(v, h, v + o, h, R), f.closePath();
}
function Wn(f, v, h, o, b, O) {
  const R = O?.alpha ?? 1, Z = Math.max(3, o * 0.08);
  O?.glow && (f.save(), f.globalAlpha = R * 0.7, f.shadowColor = b.glow, f.shadowBlur = 22, kl(f, v, h, o, o, o * 0.24), f.fillStyle = b.fill, f.fill(), f.restore()), f.save(), f.globalAlpha = R, kl(f, v, h, o, o, o * 0.24);
  const D = f.createLinearGradient(v, h, v, h + o);
  D.addColorStop(0, "#ffffff"), D.addColorStop(0.08, b.stroke), D.addColorStop(0.18, b.fill), D.addColorStop(0.72, b.fill), D.addColorStop(1, b.shade), f.fillStyle = D, f.fill(), kl(f, v + Z, h + Z, o - Z * 2, o * 0.34, o * 0.16);
  const E = f.createLinearGradient(v, h, v, h + o * 0.4);
  E.addColorStop(0, "rgba(255,255,255,0.8)"), E.addColorStop(1, "rgba(255,255,255,0)"), f.fillStyle = E, f.fill(), f.lineWidth = Math.max(2, o * 0.06), f.strokeStyle = O?.outline ?? "rgba(255,255,255,0.55)", kl(f, v + 1, h + 1, o - 2, o - 2, o * 0.22), f.stroke(), f.restore();
}
function Z1(f, v) {
  const h = f.createLinearGradient(0, 0, 0, ht);
  h.addColorStop(0, "#14285c"), h.addColorStop(0.44, "#223e81"), h.addColorStop(1, "#0f1838"), f.fillStyle = h, f.fillRect(0, 0, zl, ht);
  const o = f.createRadialGradient(zl * 0.18, ht * 0.12, 0, zl * 0.18, ht * 0.12, 260);
  o.addColorStop(0, "rgba(144,217,255,0.34)"), o.addColorStop(1, "rgba(144,217,255,0)"), f.fillStyle = o, f.fillRect(0, 0, zl, ht);
  const b = f.createRadialGradient(zl * 0.82, ht * 0.18, 0, zl * 0.82, ht * 0.18, 280);
  b.addColorStop(0, "rgba(255,202,96,0.2)"), b.addColorStop(1, "rgba(255,202,96,0)"), f.fillStyle = b, f.fillRect(0, 0, zl, ht), f.save(), f.globalAlpha = v ? 0.22 : 0.14;
  for (let O = 0; O < 16; O += 1)
    for (let R = 0; R < 12; R += 1) {
      const Z = R * 88 + O % 2 * 14, D = O * 82;
      f.fillStyle = O % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", kl(f, Z, D, 52, 52, 14), f.fill();
    }
  f.restore();
}
function V1(f, v) {
  const h = Ha(f.fullscreen);
  for (const o of v) {
    const b = h.boardX + o.col * h.cell + h.cell / 2, O = h.boardY + o.row * h.cell + h.cell / 2;
    for (let R = 0; R < 3; R += 1) {
      const Z = (R + 1) / 3 * Math.PI * 2 + f.time * 3e-3;
      f.particles.push({
        x: b,
        y: O,
        vx: Math.cos(Z) * (1.2 + R * 0.5),
        vy: Math.sin(Z) * (1.1 + R * 0.45) - 1.2,
        life: 420 + R * 60,
        maxLife: 420 + R * 60,
        color: o.color.fill,
        size: 8 + R * 2
      });
    }
  }
}
function jd(f, v) {
  f.time += v, f.flash > 0 && (f.flash = Math.max(0, f.flash - v / 220), f.flash === 0 && (f.flashRows = [], f.flashCols = []));
  const h = [];
  for (const o of f.particles)
    o.life -= v, !(o.life <= 0) && (o.x += o.vx * (v / 16), o.y += o.vy * (v / 16), o.vy += 0.03 * (v / 16), h.push(o));
  f.particles = h;
}
function Xd(f, v) {
  const h = j1(), o = N1();
  return {
    mode: f,
    board: o,
    tray: h,
    selectedPieceId: null,
    preview: null,
    drag: null,
    particles: [],
    score: 0,
    bestScore: R1(),
    combo: 0,
    clears: 0,
    placements: 0,
    message: f === "title" ? "Tap Start Run and fill whole rows or columns." : "Fill whole rows and columns to blast them.",
    rng: 1327217885,
    time: 0,
    flash: 0,
    flashRows: [],
    flashCols: [],
    fullscreen: v,
    movesAvailable: wd(o, h)
  };
}
function Gd(f) {
  const v = f.selectedPieceId ? f.tray.find((h) => h.id === f.selectedPieceId) ?? null : null;
  return {
    mode: f.mode,
    score: f.score,
    bestScore: f.bestScore,
    combo: f.combo,
    clears: f.clears,
    placements: f.placements,
    selectedPiece: v ? v.label : null,
    movesAvailable: f.movesAvailable,
    fullscreen: f.fullscreen,
    message: f.message
  };
}
function L1(f) {
  const v = f.selectedPieceId ? f.tray.find((o) => o.id === f.selectedPieceId) ?? null : null, h = f.preview ? `${f.preview.row},${f.preview.col} ${f.preview.canPlace ? "ok" : "blocked"}` : "none";
  return [
    `mode=${f.mode}`,
    `score=${f.score}`,
    `best=${f.bestScore}`,
    `combo=${f.combo}`,
    `clears=${f.clears}`,
    `placements=${f.placements}`,
    `moves=${f.movesAvailable}`,
    `selected=${v ? v.templateId : "none"}`,
    `fullscreen=${f.fullscreen}`,
    `tray=${f.tray.map((o) => o.templateId).join(",") || "empty"}`,
    `preview=${h}`,
    `message=${f.message}`,
    "board:",
    ...C1(f.board)
  ].join(`
`);
}
function Qd(f, v) {
  const h = f.tray.findIndex((X) => X.id === v.pieceId);
  if (h === -1)
    return;
  const o = f.tray[h];
  if (!Ac(f.board, o, v.row, v.col)) {
    f.message = "That spot is blocked.", f.preview = null, f.drag = null;
    return;
  }
  for (const X of o.cells)
    f.board[ee(v.row + X.y, v.col + X.x)] = o.color;
  const b = Jd(f.board), O = [], R = /* @__PURE__ */ new Set();
  for (const X of b.rows)
    for (let B = 0; B < Sl; B += 1)
      R.add(ee(X, B));
  for (const X of b.cols)
    for (let B = 0; B < Sl; B += 1)
      R.add(ee(B, X));
  for (const X of R) {
    const B = Math.floor(X / Sl), ul = X % Sl, pl = f.board[X];
    pl && O.push({ row: B, col: ul, color: pl }), f.board[X] = null;
  }
  let Z = o.points;
  if (b.rows.length + b.cols.length > 0) {
    f.combo += 1;
    const X = b.rows.length + b.cols.length, B = f.combo > 1 ? (f.combo - 1) * 30 : 0;
    Z += X * 120 + B, f.clears += X, f.flash = 1, f.flashRows = b.rows, f.flashCols = b.cols, V1(f, O), f.message = f.combo > 1 ? `Combo x${f.combo}` : `Cleared ${X} line${X === 1 ? "" : "s"}`;
  } else
    f.combo = 0, f.flash = 0, f.flashRows = [], f.flashCols = [], f.message = o.cells.length >= 5 ? "Strong placement." : "Keep building.";
  f.score += Z, f.score > f.bestScore && (f.bestScore = f.score, H1(f.bestScore)), f.tray.splice(h, 1), f.placements += 1, f.selectedPieceId = null, f.preview = null, f.drag = null;
  let D = f.tray, E = f.rng;
  [D, E] = Q1(D, E), f.tray = D, f.rng = E, f.movesAvailable = wd(f.board, f.tray), f.movesAvailable === 0 && (f.mode = "gameover", f.message = "No moves left. Start a new run.");
}
function Zd(f, v) {
  const h = Ha(v.fullscreen);
  f.clearRect(0, 0, zl, ht), Z1(f, v.fullscreen), f.save(), f.fillStyle = "rgba(255,255,255,0.96)", f.font = v.fullscreen ? '700 42px "Trebuchet MS", sans-serif' : '700 38px "Trebuchet MS", sans-serif', f.textAlign = "left", f.fillText("Block Blast", 58, 70), f.font = '600 20px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(230,241,255,0.86)", f.fillText(v.fullscreen ? "Classic mode" : "Classic endless mode", 58, 100), f.restore(), f.save(), kl(f, h.boardX - 24, h.boardY - 24, h.boardSize + 48, h.boardSize + 48, 34), f.fillStyle = "rgba(8,20,56,0.5)", f.shadowColor = "rgba(0,0,0,0.24)", f.shadowBlur = 24, f.fill(), f.restore(), kl(f, h.boardX - 8, h.boardY - 8, h.boardSize + 16, h.boardSize + 16, 30);
  const o = f.createLinearGradient(h.boardX, h.boardY, h.boardX, h.boardY + h.boardSize);
  if (o.addColorStop(0, "rgba(18,35,78,0.98)"), o.addColorStop(1, "rgba(10,22,56,0.98)"), f.fillStyle = o, f.fill(), v.flash > 0) {
    f.save(), f.globalAlpha = v.flash * 0.42, f.fillStyle = "rgba(255,243,179,0.8)";
    for (const b of v.flashRows)
      kl(f, h.boardX, h.boardY + b * h.cell, h.boardSize, h.cell, 12), f.fill();
    for (const b of v.flashCols)
      kl(f, h.boardX + b * h.cell, h.boardY, h.cell, h.boardSize, 12), f.fill();
    f.restore();
  }
  for (let b = 0; b < Sl; b += 1)
    for (let O = 0; O < Sl; O += 1) {
      const R = h.boardX + O * h.cell + 3, Z = h.boardY + b * h.cell + 3;
      kl(f, R, Z, h.cell - 6, h.cell - 6, 16), f.fillStyle = (b + O) % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)", f.fill();
    }
  if (v.preview) {
    const b = v.tray.find((O) => O.id === v.preview?.pieceId) ?? null;
    if (b)
      for (const O of v.preview.cells) {
        const R = h.boardX + O.col * h.cell + 5, Z = h.boardY + O.row * h.cell + 5;
        Wn(f, R, Z, h.cell - 10, b.color, {
          alpha: v.preview.canPlace ? 0.6 : 0.22,
          outline: v.preview.canPlace ? "rgba(255,255,255,0.85)" : "rgba(255,116,116,0.9)",
          glow: v.preview.canPlace
        });
      }
  }
  for (let b = 0; b < Sl; b += 1)
    for (let O = 0; O < Sl; O += 1) {
      const R = v.board[ee(b, O)];
      R && Wn(f, h.boardX + O * h.cell + 5, h.boardY + b * h.cell + 5, h.cell - 10, R, {
        glow: !1
      });
    }
  for (let b = 0; b < 3; b += 1) {
    const O = h.slots[b], R = v.tray[b], Z = R && v.selectedPieceId === R.id;
    kl(f, O.x, O.y, O.w, O.h, 26);
    const D = f.createLinearGradient(O.x, O.y, O.x, O.y + O.h);
    if (D.addColorStop(0, Z ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.14)"), D.addColorStop(1, Z ? "rgba(54,135,255,0.3)" : "rgba(17,34,78,0.74)"), f.fillStyle = D, f.fill(), f.lineWidth = Z ? 4 : 2, f.strokeStyle = Z ? "rgba(178,220,255,0.95)" : "rgba(255,255,255,0.18)", f.stroke(), !R) {
      f.save(), f.globalAlpha = 0.26, kl(f, O.x + O.w / 2 - 36, O.y + O.h / 2 - 36, 72, 72, 18), f.fillStyle = "rgba(255,255,255,0.1)", f.fill(), f.restore();
      continue;
    }
    const E = Math.min(44, (O.w - 42) / Math.max(R.width + 0.25, 2), (O.h - 44) / Math.max(R.height + 0.25, 2)), X = R.width * E, B = R.height * E, ul = O.x + (O.w - X) / 2, pl = O.y + (O.h - B) / 2;
    for (const Ol of R.cells)
      Wn(f, ul + Ol.x * E, pl + Ol.y * E, E - 3, R.color, {
        glow: Z
      });
  }
  if (v.drag) {
    const b = v.tray.find((O) => O.id === v.drag?.pieceId) ?? null;
    if (b) {
      const O = Math.min(46, h.cell * 0.88), R = v.drag.x - b.width * O / 2, Z = v.drag.y - b.height * O / 2;
      for (const D of b.cells)
        Wn(f, R + D.x * O, Z + D.y * O, O - 4, b.color, {
          alpha: 0.88,
          glow: !0
        });
    }
  }
  f.save(), f.textAlign = "center", f.fillStyle = "rgba(231,243,255,0.92)", f.font = '700 26px "Trebuchet MS", sans-serif', f.fillText(`${v.movesAvailable} playable`, zl / 2, h.trayY - 22), f.restore();
  for (const b of v.particles)
    f.save(), f.globalAlpha = b.life / b.maxLife, f.fillStyle = b.color, kl(f, b.x - b.size / 2, b.y - b.size / 2, b.size, b.size, b.size / 3), f.fill(), f.restore();
  v.mode === "title" && (f.save(), kl(f, 116, 392, zl - 232, 232, 34), f.fillStyle = "rgba(6,14,38,0.76)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 52px "Trebuchet MS", sans-serif', f.fillText("Stack. Blast. Repeat.", zl / 2, 470), f.font = '600 24px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(223,238,255,0.92)", f.fillText("Drag from the tray or tap a piece, then tap the board.", zl / 2, 520), f.fillText("The piece lineup mirrors the mobile app more closely now.", zl / 2, 560), f.restore()), v.mode === "gameover" && (f.save(), kl(f, 146, 368, zl - 292, 260, 38), f.fillStyle = "rgba(7,12,32,0.82)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 54px "Trebuchet MS", sans-serif', f.fillText("No Moves Left", zl / 2, 460), f.font = '700 28px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(231,243,255,0.9)", f.fillText(`Final score ${v.score}`, zl / 2, 510), f.font = '600 22px "Trebuchet MS", sans-serif', f.fillText("Start a new run to reload the tray.", zl / 2, 554), f.restore());
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
function K1() {
  const f = qt.useRef(null);
  f.current || (f.current = Xd("title", !1));
  const v = qt.useRef(null), h = qt.useRef(null), o = qt.useRef(f.current), [b, O] = qt.useState(() => Gd(f.current)), [R, Z] = qt.useState(() => ({
    width: typeof window > "u" ? 1280 : window.innerWidth,
    height: typeof window > "u" ? 900 : window.innerHeight
  }));
  function D() {
    O(Gd(o.current));
  }
  function E(G) {
    const U = Xd(G, o.current.fullscreen);
    U.bestScore = o.current.bestScore, o.current = U, D();
  }
  function X() {
    E("playing");
  }
  function B(G) {
    const U = o.current;
    if (U.mode !== "playing") return;
    const H = U.tray[G] ?? null;
    U.selectedPieceId = H ? H.id : null, U.preview = null, U.message = H ? `Selected ${H.label}` : "No piece in that slot.", D();
  }
  async function ul() {
    if (typeof document > "u") return;
    const G = v.current;
    if (G)
      try {
        document.fullscreenElement === G ? await document.exitFullscreen() : await G.requestFullscreen();
      } catch {
        o.current.message = "Fullscreen is unavailable in this browser.", D();
      }
  }
  function pl(G) {
    const U = h.current;
    if (!U) return null;
    const H = U.getBoundingClientRect();
    return !H.width || !H.height ? null : {
      x: (G.clientX - H.left) / H.width * zl,
      y: (G.clientY - H.top) / H.height * ht
    };
  }
  function Ol(G, U) {
    const H = o.current, tl = Ha(H.fullscreen);
    for (let bl = 0; bl < tl.slots.length; bl += 1) {
      const Dl = tl.slots[bl];
      if (G >= Dl.x && G <= Dl.x + Dl.w && U >= Dl.y && U <= Dl.y + Dl.h)
        return H.tray[bl] ?? null;
    }
    return null;
  }
  qt.useEffect(() => {
    const G = h.current, U = G?.getContext("2d");
    if (!G || !U)
      return;
    let H = 0, tl = performance.now();
    const bl = (Dl) => {
      const Ul = Math.min(34, Dl - tl);
      tl = Dl, jd(o.current, Ul), Zd(U, o.current), H = window.requestAnimationFrame(bl);
    };
    return Zd(U, o.current), H = window.requestAnimationFrame(bl), () => window.cancelAnimationFrame(H);
  }, []), qt.useEffect(() => {
    const G = window;
    return G.render_game_to_text = () => L1(o.current), G.advanceTime = (U) => {
      let H = U;
      for (; H > 0; ) {
        const tl = Math.min(H, 16);
        jd(o.current, tl), H -= tl;
      }
      D();
    }, G.__drainVirtualTimePending = () => 0, () => {
      delete G.render_game_to_text, delete G.advanceTime, delete G.__drainVirtualTimePending;
    };
  }, []), qt.useEffect(() => {
    const G = () => {
      Z({ width: window.innerWidth, height: window.innerHeight });
    }, U = () => {
      o.current.fullscreen = document.fullscreenElement === v.current, o.current.preview = null, o.current.drag = null, D();
    };
    return window.addEventListener("resize", G), document.addEventListener("fullscreenchange", U), () => {
      window.removeEventListener("resize", G), document.removeEventListener("fullscreenchange", U);
    };
  }, []), qt.useEffect(() => {
    const G = (U) => {
      if (U.code === "KeyF") {
        U.preventDefault(), ul();
        return;
      }
      if (U.code === "KeyN" || U.code === "Enter" && o.current.mode !== "playing") {
        U.preventDefault(), X();
        return;
      }
      if (U.code === "Digit1") {
        U.preventDefault(), B(0);
        return;
      }
      if (U.code === "Digit2") {
        U.preventDefault(), B(1);
        return;
      }
      if (U.code === "Digit3") {
        U.preventDefault(), B(2);
        return;
      }
      U.code === "Escape" && o.current.selectedPieceId && (U.preventDefault(), o.current.selectedPieceId = null, o.current.preview = null, o.current.message = "Selection cleared.", D());
    };
    return window.addEventListener("keydown", G), () => window.removeEventListener("keydown", G);
  }, []);
  const Xl = zl / ht, _t = Math.max(320, R.width - (b.fullscreen ? 48 : 40)), Jl = b.fullscreen ? Math.max(420, R.height - 270) : 980, Ht = Math.min(b.fullscreen ? 920 : 760, _t, Jl * Xl), xl = {
    width: "100%",
    maxWidth: b.fullscreen ? "100vw" : 1040,
    minHeight: b.fullscreen ? "100vh" : void 0,
    boxSizing: "border-box",
    borderRadius: b.fullscreen ? 0 : 32,
    padding: b.fullscreen ? "16px 18px 18px" : 20,
    background: "radial-gradient(circle at top left, rgba(139, 224, 255, 0.2), transparent 32%), linear-gradient(180deg, #17306d 0%, #0c173d 100%)",
    boxShadow: b.fullscreen ? "none" : "0 24px 60px rgba(4, 14, 39, 0.35)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    color: "#eff6ff",
    overflow: "hidden"
  }, Yl = {
    minWidth: 108,
    padding: "12px 14px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.11)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"
  };
  return /* @__PURE__ */ K.jsx(
    "div",
    {
      style: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        padding: b.fullscreen ? 0 : "24px 12px 48px",
        background: b.fullscreen ? "#08132d" : "transparent"
      },
      children: /* @__PURE__ */ K.jsxs("section", { ref: v, style: xl, children: [
        /* @__PURE__ */ K.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: b.fullscreen ? "flex-start" : "center",
              gap: 16,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ K.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
                /* @__PURE__ */ K.jsx("div", { style: { fontSize: b.fullscreen ? 28 : 30, fontWeight: 800, letterSpacing: 0.3 }, children: "Block Blast" }),
                /* @__PURE__ */ K.jsx("div", { style: { fontSize: 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: 560 }, children: b.fullscreen ? "Drag from the tray or tap 1, 2, 3 to select a piece. Fill rows and columns to blast them away." : "Classic endless board-clearing mode with a closer Block Blast piece set and a fullscreen-friendly stage." })
              ] }),
              /* @__PURE__ */ K.jsxs("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ K.jsx("button", { onClick: X, style: Tc(!0), children: b.mode === "playing" ? "New Run" : "Start Run" }),
                /* @__PURE__ */ K.jsx("button", { onClick: () => E("title"), style: Tc(!1), children: "Title" }),
                /* @__PURE__ */ K.jsx("button", { onClick: () => {
                  ul();
                }, style: Tc(!1), children: b.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ K.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 12 }, children: [
          /* @__PURE__ */ K.jsxs("div", { style: Yl, children: [
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Score" }),
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 26, fontWeight: 800 }, children: b.score })
          ] }),
          /* @__PURE__ */ K.jsxs("div", { style: Yl, children: [
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Best" }),
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 26, fontWeight: 800 }, children: b.bestScore })
          ] }),
          /* @__PURE__ */ K.jsxs("div", { style: Yl, children: [
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Combo" }),
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 26, fontWeight: 800 }, children: b.combo })
          ] }),
          /* @__PURE__ */ K.jsxs("div", { style: Yl, children: [
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Playable" }),
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 26, fontWeight: 800 }, children: b.movesAvailable })
          ] }),
          /* @__PURE__ */ K.jsxs("div", { style: { ...Yl, flex: 1, minWidth: 220 }, children: [
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
            /* @__PURE__ */ K.jsx("div", { style: { fontSize: 16, fontWeight: 700, minHeight: 28 }, children: b.selectedPiece ? `${b.selectedPiece} selected.` : b.message })
          ] })
        ] }),
        /* @__PURE__ */ K.jsx("div", { style: { width: Ht, maxWidth: "100%", alignSelf: "center", aspectRatio: `${zl} / ${ht}` }, children: /* @__PURE__ */ K.jsx(
          "canvas",
          {
            ref: h,
            width: zl,
            height: ht,
            style: {
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: b.fullscreen ? 26 : 28,
              touchAction: "none",
              boxShadow: "0 22px 40px rgba(3, 10, 28, 0.42)",
              cursor: o.current.drag ? "grabbing" : "pointer"
            },
            onPointerDown: (G) => {
              const U = o.current;
              if (U.mode !== "playing") return;
              const H = pl(G);
              if (!H) return;
              const tl = Ol(H.x, H.y);
              tl && (U.selectedPieceId = tl.id, U.drag = { pieceId: tl.id, startX: H.x, startY: H.y, x: H.x, y: H.y }, U.preview = null, h.current?.setPointerCapture?.(G.pointerId), D());
            },
            onPointerMove: (G) => {
              const U = o.current;
              if (!U.drag) return;
              const H = pl(G);
              if (!H) return;
              U.drag.x = H.x, U.drag.y = H.y;
              const tl = U.tray.find((bl) => bl.id === U.drag?.pieceId) ?? null;
              U.preview = tl ? pc(Ha(U.fullscreen), tl, H.x, H.y, U.board) : null;
            },
            onPointerUp: (G) => {
              const U = o.current, H = pl(G);
              if (!H) return;
              if (U.drag) {
                const Ul = U.tray.find((Mt) => Mt.id === U.drag?.pieceId) ?? null, Kl = Math.hypot(H.x - U.drag.startX, H.y - U.drag.startY) > 14, Ct = Ul ? pc(Ha(U.fullscreen), Ul, H.x, H.y, U.board) : null;
                Ct?.canPlace ? Qd(U, Ct) : (U.drag = null, U.preview = null, !Kl && Ul ? (U.selectedPieceId = Ul.id, U.message = `Selected ${Ul.label}`) : U.message = "Drop a piece onto the board."), h.current?.releasePointerCapture?.(G.pointerId), D();
                return;
              }
              if (U.mode !== "playing") return;
              const tl = Ol(H.x, H.y);
              if (tl) {
                U.selectedPieceId = tl.id, U.preview = null, U.message = `Selected ${tl.label}`, D();
                return;
              }
              const bl = U.selectedPieceId ? U.tray.find((Ul) => Ul.id === U.selectedPieceId) ?? null : null;
              if (!bl) return;
              const Dl = pc(Ha(U.fullscreen), bl, H.x, H.y, U.board);
              Dl?.canPlace ? Qd(U, Dl) : (U.message = "That placement does not fit.", U.preview = Dl), D();
            },
            onPointerCancel: () => {
              const G = o.current;
              G.drag = null, G.preview = null, D();
            }
          }
        ) }),
        /* @__PURE__ */ K.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
              color: "rgba(239,246,255,0.86)",
              fontSize: 14
            },
            children: [
              /* @__PURE__ */ K.jsx("div", { children: b.mode === "gameover" ? "Run over. Start a new one from the top bar." : "Tip: tap 1, 2, or 3 to grab a tray slot instantly." }),
              /* @__PURE__ */ K.jsx("div", { children: `Placements ${b.placements} � Clears ${b.clears}` })
            ]
          }
        ),
        b.fullscreen ? null : /* @__PURE__ */ K.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
          /* @__PURE__ */ K.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ K.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Closer Piece Set" }),
                /* @__PURE__ */ K.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Singles, short bars, the mini corners, classic tetromino-style shapes, long five-bars, the 2x3 rectangle, and the tall T are all in the pool now." })
              ]
            }
          ),
          /* @__PURE__ */ K.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ K.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Fullscreen Cleanup" }),
                /* @__PURE__ */ K.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The stage header, score chips, and controls all live inside the fullscreen element now, so the page keeps its shape instead of leaving controls stranded outside." })
              ]
            }
          ),
          /* @__PURE__ */ K.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ K.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
                /* @__PURE__ */ K.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                  "Drag pieces from the tray, or tap a tray piece and then the board. Press ",
                  /* @__PURE__ */ K.jsx("code", { children: "F" }),
                  " for fullscreen and ",
                  /* @__PURE__ */ K.jsx("code", { children: "N" }),
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
const Wd = document.getElementById("block-blast-root");
if (!Wd)
  throw new Error("Block Blast export root element was not found.");
document.title = "Block Blast | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("block-blast-export-body");
O1.createRoot(Wd).render(/* @__PURE__ */ K.jsx(K1, {}));
