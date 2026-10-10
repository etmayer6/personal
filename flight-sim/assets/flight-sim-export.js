var kf = { exports: {} }, lu = {};
var Zd;
function jh() {
  if (Zd) return lu;
  Zd = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, d, v) {
    var T = null;
    if (v !== void 0 && (T = "" + v), d.key !== void 0 && (T = "" + d.key), "key" in d) {
      v = {};
      for (var M in d)
        M !== "key" && (v[M] = d[M]);
    } else v = d;
    return d = v.ref, {
      $$typeof: u,
      type: r,
      key: T,
      ref: d !== void 0 ? d : null,
      props: v
    };
  }
  return lu.Fragment = c, lu.jsx = s, lu.jsxs = s, lu;
}
var Kd;
function Dh() {
  return Kd || (Kd = 1, kf.exports = jh()), kf.exports;
}
var p = Dh(), Ff = { exports: {} }, au = {}, Wf = { exports: {} }, $f = {};
var Jd;
function Uh() {
  return Jd || (Jd = 1, (function(u) {
    function c(C, K) {
      var ut = C.length;
      C.push(K);
      t: for (; 0 < ut; ) {
        var _t = ut - 1 >>> 1, jt = C[_t];
        if (0 < d(jt, K))
          C[_t] = K, C[ut] = jt, ut = _t;
        else break t;
      }
    }
    function s(C) {
      return C.length === 0 ? null : C[0];
    }
    function r(C) {
      if (C.length === 0) return null;
      var K = C[0], ut = C.pop();
      if (ut !== K) {
        C[0] = ut;
        t: for (var _t = 0, jt = C.length, g = jt >>> 1; _t < g; ) {
          var R = 2 * (_t + 1) - 1, Y = C[R], G = R + 1, k = C[G];
          if (0 > d(Y, ut))
            G < jt && 0 > d(k, Y) ? (C[_t] = k, C[G] = ut, _t = G) : (C[_t] = Y, C[R] = ut, _t = R);
          else if (G < jt && 0 > d(k, ut))
            C[_t] = k, C[G] = ut, _t = G;
          else break t;
        }
      }
      return K;
    }
    function d(C, K) {
      var ut = C.sortIndex - K.sortIndex;
      return ut !== 0 ? ut : C.id - K.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      u.unstable_now = function() {
        return v.now();
      };
    } else {
      var T = Date, M = T.now();
      u.unstable_now = function() {
        return T.now() - M;
      };
    }
    var h = [], b = [], U = 1, E = null, N = 3, w = !1, L = !1, Q = !1, P = !1, rt = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    function J(C) {
      for (var K = s(b); K !== null; ) {
        if (K.callback === null) r(b);
        else if (K.startTime <= C)
          r(b), K.sortIndex = K.expirationTime, c(h, K);
        else break;
        K = s(b);
      }
    }
    function at(C) {
      if (Q = !1, J(C), !L)
        if (s(h) !== null)
          L = !0, et || (et = !0, X());
        else {
          var K = s(b);
          K !== null && It(at, K.startTime - C);
        }
    }
    var et = !1, V = -1, pt = 5, $ = -1;
    function Vt() {
      return P ? !0 : !(u.unstable_now() - $ < pt);
    }
    function Lt() {
      if (P = !1, et) {
        var C = u.unstable_now();
        $ = C;
        var K = !0;
        try {
          t: {
            L = !1, Q && (Q = !1, gt(V), V = -1), w = !0;
            var ut = N;
            try {
              e: {
                for (J(C), E = s(h); E !== null && !(E.expirationTime > C && Vt()); ) {
                  var _t = E.callback;
                  if (typeof _t == "function") {
                    E.callback = null, N = E.priorityLevel;
                    var jt = _t(
                      E.expirationTime <= C
                    );
                    if (C = u.unstable_now(), typeof jt == "function") {
                      E.callback = jt, J(C), K = !0;
                      break e;
                    }
                    E === s(h) && r(h), J(C);
                  } else r(h);
                  E = s(h);
                }
                if (E !== null) K = !0;
                else {
                  var g = s(b);
                  g !== null && It(
                    at,
                    g.startTime - C
                  ), K = !1;
                }
              }
              break t;
            } finally {
              E = null, N = ut, w = !1;
            }
            K = void 0;
          }
        } finally {
          K ? X() : et = !1;
        }
      }
    }
    var X;
    if (typeof W == "function")
      X = function() {
        W(Lt);
      };
    else if (typeof MessageChannel < "u") {
      var dt = new MessageChannel(), Gt = dt.port2;
      dt.port1.onmessage = Lt, X = function() {
        Gt.postMessage(null);
      };
    } else
      X = function() {
        rt(Lt, 0);
      };
    function It(C, K) {
      V = rt(function() {
        C(u.unstable_now());
      }, K);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, u.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : pt = 0 < C ? Math.floor(1e3 / C) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, u.unstable_next = function(C) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = N;
      }
      var ut = N;
      N = K;
      try {
        return C();
      } finally {
        N = ut;
      }
    }, u.unstable_requestPaint = function() {
      P = !0;
    }, u.unstable_runWithPriority = function(C, K) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var ut = N;
      N = C;
      try {
        return K();
      } finally {
        N = ut;
      }
    }, u.unstable_scheduleCallback = function(C, K, ut) {
      var _t = u.unstable_now();
      switch (typeof ut == "object" && ut !== null ? (ut = ut.delay, ut = typeof ut == "number" && 0 < ut ? _t + ut : _t) : ut = _t, C) {
        case 1:
          var jt = -1;
          break;
        case 2:
          jt = 250;
          break;
        case 5:
          jt = 1073741823;
          break;
        case 4:
          jt = 1e4;
          break;
        default:
          jt = 5e3;
      }
      return jt = ut + jt, C = {
        id: U++,
        callback: K,
        priorityLevel: C,
        startTime: ut,
        expirationTime: jt,
        sortIndex: -1
      }, ut > _t ? (C.sortIndex = ut, c(b, C), s(h) === null && C === s(b) && (Q ? (gt(V), V = -1) : Q = !0, It(at, ut - _t))) : (C.sortIndex = jt, c(h, C), L || w || (L = !0, et || (et = !0, X()))), C;
    }, u.unstable_shouldYield = Vt, u.unstable_wrapCallback = function(C) {
      var K = N;
      return function() {
        var ut = N;
        N = K;
        try {
          return C.apply(this, arguments);
        } finally {
          N = ut;
        }
      };
    };
  })($f)), $f;
}
var kd;
function Oh() {
  return kd || (kd = 1, Wf.exports = Uh()), Wf.exports;
}
var If = { exports: {} }, ht = {};
var Fd;
function Ch() {
  if (Fd) return ht;
  Fd = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), N = Symbol.iterator;
  function w(g) {
    return g === null || typeof g != "object" ? null : (g = N && g[N] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, P = {};
  function rt(g, R, Y) {
    this.props = g, this.context = R, this.refs = P, this.updater = Y || L;
  }
  rt.prototype.isReactComponent = {}, rt.prototype.setState = function(g, R) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, R, "setState");
  }, rt.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function gt() {
  }
  gt.prototype = rt.prototype;
  function W(g, R, Y) {
    this.props = g, this.context = R, this.refs = P, this.updater = Y || L;
  }
  var J = W.prototype = new gt();
  J.constructor = W, Q(J, rt.prototype), J.isPureReactComponent = !0;
  var at = Array.isArray;
  function et() {
  }
  var V = { H: null, A: null, T: null, S: null }, pt = Object.prototype.hasOwnProperty;
  function $(g, R, Y) {
    var G = Y.ref;
    return {
      $$typeof: u,
      type: g,
      key: R,
      ref: G !== void 0 ? G : null,
      props: Y
    };
  }
  function Vt(g, R) {
    return $(g.type, R, g.props);
  }
  function Lt(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function X(g) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Y) {
      return R[Y];
    });
  }
  var dt = /\/+/g;
  function Gt(g, R) {
    return typeof g == "object" && g !== null && g.key != null ? X("" + g.key) : R.toString(36);
  }
  function It(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(et, et) : (g.status = "pending", g.then(
          function(R) {
            g.status === "pending" && (g.status = "fulfilled", g.value = R);
          },
          function(R) {
            g.status === "pending" && (g.status = "rejected", g.reason = R);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function C(g, R, Y, G, k) {
    var ct = typeof g;
    (ct === "undefined" || ct === "boolean") && (g = null);
    var st = !1;
    if (g === null) st = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case c:
              st = !0;
              break;
            case U:
              return st = g._init, C(
                st(g._payload),
                R,
                Y,
                G,
                k
              );
          }
      }
    if (st)
      return k = k(g), st = G === "" ? "." + Gt(g, 0) : G, at(k) ? (Y = "", st != null && (Y = st.replace(dt, "$&/") + "/"), C(k, R, Y, "", function(Ee) {
        return Ee;
      })) : k != null && (Lt(k) && (k = Vt(
        k,
        Y + (k.key == null || g && g.key === k.key ? "" : ("" + k.key).replace(
          dt,
          "$&/"
        ) + "/") + st
      )), R.push(k)), 1;
    st = 0;
    var At = G === "" ? "." : G + ":";
    if (at(g))
      for (var St = 0; St < g.length; St++)
        G = g[St], ct = At + Gt(G, St), st += C(
          G,
          R,
          Y,
          ct,
          k
        );
    else if (St = w(g), typeof St == "function")
      for (g = St.call(g), St = 0; !(G = g.next()).done; )
        G = G.value, ct = At + Gt(G, St++), st += C(
          G,
          R,
          Y,
          ct,
          k
        );
    else if (ct === "object") {
      if (typeof g.then == "function")
        return C(
          It(g),
          R,
          Y,
          G,
          k
        );
      throw R = String(g), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return st;
  }
  function K(g, R, Y) {
    if (g == null) return g;
    var G = [], k = 0;
    return C(g, G, "", "", function(ct) {
      return R.call(Y, ct, k++);
    }), G;
  }
  function ut(g) {
    if (g._status === -1) {
      var R = g._result;
      R = R(), R.then(
        function(Y) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Y);
        },
        function(Y) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Y);
        }
      ), g._status === -1 && (g._status = 0, g._result = R);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var _t = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  }, jt = {
    map: K,
    forEach: function(g, R, Y) {
      K(
        g,
        function() {
          R.apply(this, arguments);
        },
        Y
      );
    },
    count: function(g) {
      var R = 0;
      return K(g, function() {
        R++;
      }), R;
    },
    toArray: function(g) {
      return K(g, function(R) {
        return R;
      }) || [];
    },
    only: function(g) {
      if (!Lt(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  };
  return ht.Activity = E, ht.Children = jt, ht.Component = rt, ht.Fragment = s, ht.Profiler = d, ht.PureComponent = W, ht.StrictMode = r, ht.Suspense = h, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return V.H.useMemoCache(g);
    }
  }, ht.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(g, R, Y) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var G = Q({}, g.props), k = g.key;
    if (R != null)
      for (ct in R.key !== void 0 && (k = "" + R.key), R)
        !pt.call(R, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && R.ref === void 0 || (G[ct] = R[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) G.children = Y;
    else if (1 < ct) {
      for (var st = Array(ct), At = 0; At < ct; At++)
        st[At] = arguments[At + 2];
      G.children = st;
    }
    return $(g.type, k, G);
  }, ht.createContext = function(g) {
    return g = {
      $$typeof: T,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: v,
      _context: g
    }, g;
  }, ht.createElement = function(g, R, Y) {
    var G, k = {}, ct = null;
    if (R != null)
      for (G in R.key !== void 0 && (ct = "" + R.key), R)
        pt.call(R, G) && G !== "key" && G !== "__self" && G !== "__source" && (k[G] = R[G]);
    var st = arguments.length - 2;
    if (st === 1) k.children = Y;
    else if (1 < st) {
      for (var At = Array(st), St = 0; St < st; St++)
        At[St] = arguments[St + 2];
      k.children = At;
    }
    if (g && g.defaultProps)
      for (G in st = g.defaultProps, st)
        k[G] === void 0 && (k[G] = st[G]);
    return $(g, ct, k);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(g) {
    return { $$typeof: M, render: g };
  }, ht.isValidElement = Lt, ht.lazy = function(g) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: g },
      _init: ut
    };
  }, ht.memo = function(g, R) {
    return {
      $$typeof: b,
      type: g,
      compare: R === void 0 ? null : R
    };
  }, ht.startTransition = function(g) {
    var R = V.T, Y = {};
    V.T = Y;
    try {
      var G = g(), k = V.S;
      k !== null && k(Y, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(et, _t);
    } catch (ct) {
      _t(ct);
    } finally {
      R !== null && Y.types !== null && (R.types = Y.types), V.T = R;
    }
  }, ht.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, ht.use = function(g) {
    return V.H.use(g);
  }, ht.useActionState = function(g, R, Y) {
    return V.H.useActionState(g, R, Y);
  }, ht.useCallback = function(g, R) {
    return V.H.useCallback(g, R);
  }, ht.useContext = function(g) {
    return V.H.useContext(g);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(g, R) {
    return V.H.useDeferredValue(g, R);
  }, ht.useEffect = function(g, R) {
    return V.H.useEffect(g, R);
  }, ht.useEffectEvent = function(g) {
    return V.H.useEffectEvent(g);
  }, ht.useId = function() {
    return V.H.useId();
  }, ht.useImperativeHandle = function(g, R, Y) {
    return V.H.useImperativeHandle(g, R, Y);
  }, ht.useInsertionEffect = function(g, R) {
    return V.H.useInsertionEffect(g, R);
  }, ht.useLayoutEffect = function(g, R) {
    return V.H.useLayoutEffect(g, R);
  }, ht.useMemo = function(g, R) {
    return V.H.useMemo(g, R);
  }, ht.useOptimistic = function(g, R) {
    return V.H.useOptimistic(g, R);
  }, ht.useReducer = function(g, R, Y) {
    return V.H.useReducer(g, R, Y);
  }, ht.useRef = function(g) {
    return V.H.useRef(g);
  }, ht.useState = function(g) {
    return V.H.useState(g);
  }, ht.useSyncExternalStore = function(g, R, Y) {
    return V.H.useSyncExternalStore(
      g,
      R,
      Y
    );
  }, ht.useTransition = function() {
    return V.H.useTransition();
  }, ht.version = "19.2.4", ht;
}
var Wd;
function ss() {
  return Wd || (Wd = 1, If.exports = Ch()), If.exports;
}
var Pf = { exports: {} }, je = {};
var $d;
function Nh() {
  if ($d) return je;
  $d = 1;
  var u = ss();
  function c(h) {
    var b = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        b += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + h + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal");
  function v(h, b, U) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: E == null ? null : "" + E,
      children: h,
      containerInfo: b,
      implementation: U
    };
  }
  var T = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(h, b) {
    if (h === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, je.createPortal = function(h, b) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(c(299));
    return v(h, b, null, U);
  }, je.flushSync = function(h) {
    var b = T.T, U = r.p;
    try {
      if (T.T = null, r.p = 2, h) return h();
    } finally {
      T.T = b, r.p = U, r.d.f();
    }
  }, je.preconnect = function(h, b) {
    typeof h == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, r.d.C(h, b));
  }, je.prefetchDNS = function(h) {
    typeof h == "string" && r.d.D(h);
  }, je.preinit = function(h, b) {
    if (typeof h == "string" && b && typeof b.as == "string") {
      var U = b.as, E = M(U, b.crossOrigin), N = typeof b.integrity == "string" ? b.integrity : void 0, w = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      U === "style" ? r.d.S(
        h,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: E,
          integrity: N,
          fetchPriority: w
        }
      ) : U === "script" && r.d.X(h, {
        crossOrigin: E,
        integrity: N,
        fetchPriority: w,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, je.preinitModule = function(h, b) {
    if (typeof h == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var U = M(
            b.as,
            b.crossOrigin
          );
          r.d.M(h, {
            crossOrigin: U,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && r.d.M(h);
  }, je.preload = function(h, b) {
    if (typeof h == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var U = b.as, E = M(U, b.crossOrigin);
      r.d.L(h, U, {
        crossOrigin: E,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, je.preloadModule = function(h, b) {
    if (typeof h == "string")
      if (b) {
        var U = M(b.as, b.crossOrigin);
        r.d.m(h, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: U,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else r.d.m(h);
  }, je.requestFormReset = function(h) {
    r.d.r(h);
  }, je.unstable_batchedUpdates = function(h, b) {
    return h(b);
  }, je.useFormState = function(h, b, U) {
    return T.H.useFormState(h, b, U);
  }, je.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, je.version = "19.2.4", je;
}
var Id;
function Bh() {
  if (Id) return Pf.exports;
  Id = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Pf.exports = Nh(), Pf.exports;
}
var Pd;
function Hh() {
  if (Pd) return au;
  Pd = 1;
  var u = Oh(), c = ss(), s = Bh();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function v(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function T(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function M(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (v(t) !== t)
      throw Error(r(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = v(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return h(n), t;
          if (i === a) return h(n), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var o = !1, m = n.child; m; ) {
          if (m === l) {
            o = !0, l = n, a = i;
            break;
          }
          if (m === a) {
            o = !0, a = n, l = i;
            break;
          }
          m = m.sibling;
        }
        if (!o) {
          for (m = i.child; m; ) {
            if (m === l) {
              o = !0, l = i, a = n;
              break;
            }
            if (m === a) {
              o = !0, a = i, l = n;
              break;
            }
            m = m.sibling;
          }
          if (!o) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function U(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = U(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), P = /* @__PURE__ */ Symbol.for("react.strict_mode"), rt = /* @__PURE__ */ Symbol.for("react.profiler"), gt = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), at = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), pt = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.activity"), Vt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Lt = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = Lt && t[Lt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var dt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Gt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Q:
        return "Fragment";
      case rt:
        return "Profiler";
      case P:
        return "StrictMode";
      case at:
        return "Suspense";
      case et:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case L:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case gt:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case V:
          return e = t.displayName || null, e !== null ? e : Gt(t.type) || "Memo";
        case pt:
          e = t._payload, t = t._init;
          try {
            return Gt(t(e));
          } catch {
          }
      }
    return null;
  }
  var It = Array.isArray, C = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ut = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _t = [], jt = -1;
  function g(t) {
    return { current: t };
  }
  function R(t) {
    0 > jt || (t.current = _t[jt], _t[jt] = null, jt--);
  }
  function Y(t, e) {
    jt++, _t[jt] = t.current, t.current = e;
  }
  var G = g(null), k = g(null), ct = g(null), st = g(null);
  function At(t, e) {
    switch (Y(ct, e), Y(k, t), Y(G, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? md(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = md(e), t = gd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    R(G), Y(G, t);
  }
  function St() {
    R(G), R(k), R(ct);
  }
  function Ee(t) {
    t.memoizedState !== null && Y(st, t);
    var e = G.current, l = gd(e, t.type);
    e !== l && (Y(k, t), Y(G, l));
  }
  function Ie(t) {
    k.current === t && (R(G), R(k)), st.current === t && (R(st), Ii._currentValue = ut);
  }
  var sl, Ge;
  function ye(t) {
    if (sl === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        sl = e && e[1] || "", Ge = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + sl + t + Ge;
  }
  var Pe = !1;
  function Sl(t, e) {
    if (!t || Pe) return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (O) {
                  var D = O;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (O) {
                  D = O;
                }
                t.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                D = O;
              }
              (q = t()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (O) {
            if (O && D && typeof O.stack == "string")
              return [O.stack, D.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), o = i[0], m = i[1];
      if (o && m) {
        var S = o.split(`
`), j = m.split(`
`);
        for (n = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < j.length && !j[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === S.length || n === j.length)
          for (a = S.length - 1, n = j.length - 1; 1 <= a && 0 <= n && S[a] !== j[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (S[a] !== j[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || S[a] !== j[n]) {
                  var B = `
` + S[a].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? ye(l) : "";
  }
  function rl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ye(t.type);
      case 16:
        return ye("Lazy");
      case 13:
        return t.child !== e && e !== null ? ye("Suspense Fallback") : ye("Suspense");
      case 19:
        return ye("SuspenseList");
      case 0:
      case 15:
        return Sl(t.type, !1);
      case 11:
        return Sl(t.type.render, !1);
      case 1:
        return Sl(t.type, !0);
      case 31:
        return ye("Activity");
      default:
        return "";
    }
  }
  function aa(t) {
    try {
      var e = "", l = null;
      do
        e += rl(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var xl = Object.prototype.hasOwnProperty, Ul = u.unstable_scheduleCallback, Al = u.unstable_cancelCallback, wa = u.unstable_shouldYield, wc = u.unstable_requestPaint, De = u.unstable_now, dn = u.unstable_getCurrentPriorityLevel, Ya = u.unstable_ImmediatePriority, hn = u.unstable_UserBlockingPriority, La = u.unstable_NormalPriority, fu = u.unstable_LowPriority, ve = u.unstable_IdlePriority, mn = u.log, gn = u.unstable_setDisableYieldValue, na = null, ce = null;
  function Ue(t) {
    if (typeof mn == "function" && gn(t), ce && typeof ce.setStrictMode == "function")
      try {
        ce.setStrictMode(na, t);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : pn, su = Math.log, ru = Math.LN2;
  function pn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (su(t) / ru | 0) | 0;
  }
  var Ga = 256, Xa = 262144, Ol = 4194304;
  function tl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Cl(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, o = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~i, a !== 0 ? n = tl(a) : (o &= m, o !== 0 ? n = tl(o) : l || (l = m & ~t, l !== 0 && (n = tl(l))))) : (m = a & ~i, m !== 0 ? n = tl(m) : o !== 0 ? n = tl(o) : l || (l = a & ~t, l !== 0 && (n = tl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function xe(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Z(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function xt() {
    var t = Ol;
    return Ol <<= 1, (Ol & 62914560) === 0 && (Ol = 4194304), t;
  }
  function Pt(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function vt(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function du(t, e, l, a, n, i) {
    var o = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var m = t.entanglements, S = t.expirationTimes, j = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var B = 31 - Re(l), q = 1 << B;
      m[B] = 0, S[B] = -1;
      var D = j[B];
      if (D !== null)
        for (j[B] = null, B = 0; B < D.length; B++) {
          var O = D[B];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~q;
    }
    a !== 0 && oi(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e));
  }
  function oi(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Re(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function yn(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - Re(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function fi(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : ft(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function ft(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function x(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ot() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wd(t.type));
  }
  function Xt(t, e) {
    var l = K.p;
    try {
      return K.p = t, e();
    } finally {
      K.p = l;
    }
  }
  var Xe = Math.random().toString(36).slice(2), te = "__reactFiber$" + Xe, me = "__reactProps$" + Xe, Ml = "__reactContainer$" + Xe, ia = "__reactEvents$" + Xe, Tl = "__reactListeners$" + Xe, Yc = "__reactHandles$" + Xe, vn = "__reactResources$" + Xe, Qa = "__reactMarker$" + Xe;
  function si(t) {
    delete t[te], delete t[me], delete t[ia], delete t[Tl], delete t[Yc];
  }
  function Nl(t) {
    var e = t[te];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Ml] || l[te]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Ad(t); t !== null; ) {
            if (l = t[te]) return l;
            t = Ad(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Bl(t) {
    if (t = t[te] || t[Ml]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Va(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ua(t) {
    var e = t[vn];
    return e || (e = t[vn] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function oe(t) {
    t[Qa] = !0;
  }
  var hu = /* @__PURE__ */ new Set(), bn = {};
  function dl(t, e) {
    ca(t, e), ca(t + "Capture", e);
  }
  function ca(t, e) {
    for (bn[t] = e, t = 0; t < e.length; t++)
      hu.add(e[t]);
  }
  var Lc = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Hl = {}, Sn = {};
  function oa(t) {
    return xl.call(Sn, t) ? !0 : xl.call(Hl, t) ? !1 : Lc.test(t) ? Sn[t] = !0 : (Hl[t] = !0, !1);
  }
  function fa(t, e, l) {
    if (oa(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function xn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function hl(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Ne(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function mu(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ri(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(o) {
          l = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(o) {
          l = "" + o;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function An(t) {
    if (!t._valueTracker) {
      var e = mu(t) ? "checked" : "value";
      t._valueTracker = ri(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function di(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = mu(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Mn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var gu = /[\n"\\]/g;
  function _e(t) {
    return t.replace(
      gu,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function hi(t, e, l, a, n, i, o, m) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? mi(t, o, Ne(e)) : l != null ? mi(t, o, Ne(l)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + Ne(m) : t.removeAttribute("name");
  }
  function pu(t, e, l, a, n, i, o, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        An(t);
        return;
      }
      l = l != null ? "" + Ne(l) : "", e = e != null ? "" + Ne(e) : l, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), An(t);
  }
  function mi(t, e, l) {
    e === "number" && Mn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function ql(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Ne(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function yu(t, e, l) {
    if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ne(l) : "";
  }
  function vu(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (It(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Ne(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), An(t);
  }
  function sa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Gc = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ra(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Gc.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Xc(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && ra(t, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && ra(t, i, e[i]);
  }
  function Tn(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var ml = /* @__PURE__ */ new Map([
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
  ]), Qc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zn(t) {
    return Qc.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function gl() {
  }
  var En = null;
  function Vc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Rn = null, _n = null;
  function hs(t) {
    var e = Bl(t);
    if (e && (t = e.stateNode)) {
      var l = t[me] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (hi(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + _e(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[me] || null;
                if (!n) throw Error(r(90));
                hi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && di(a);
          }
          break t;
        case "textarea":
          yu(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ql(t, !!l.multiple, e, !1);
      }
    }
  }
  var Zc = !1;
  function ms(t, e, l) {
    if (Zc) return t(e, l);
    Zc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Zc = !1, (Rn !== null || _n !== null) && (ic(), Rn && (e = Rn, t = _n, _n = Rn = null, hs(e), t)))
        for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function gi(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[me] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, e, typeof l)
      );
    return l;
  }
  var wl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kc = !1;
  if (wl)
    try {
      var pi = {};
      Object.defineProperty(pi, "passive", {
        get: function() {
          Kc = !0;
        }
      }), window.addEventListener("test", pi, pi), window.removeEventListener("test", pi, pi);
    } catch {
      Kc = !1;
    }
  var da = null, Jc = null, bu = null;
  function gs() {
    if (bu) return bu;
    var t, e = Jc, l = e.length, a, n = "value" in da ? da.value : da.textContent, i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var o = l - t;
    for (a = 1; a <= o && e[l - a] === n[i - a]; a++) ;
    return bu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Su(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function xu() {
    return !0;
  }
  function ps() {
    return !1;
  }
  function Be(t) {
    function e(l, a, n, i, o) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (l = t[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? xu : ps, this.isPropagationStopped = ps, this;
    }
    return E(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = xu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = xu);
      },
      persist: function() {
      },
      isPersistent: xu
    }), e;
  }
  var Za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Au = Be(Za), yi = E({}, Za, { view: 0, detail: 0 }), R1 = Be(yi), kc, Fc, vi, Mu = E({}, yi, {
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
    getModifierState: $c,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== vi && (vi && t.type === "mousemove" ? (kc = t.screenX - vi.screenX, Fc = t.screenY - vi.screenY) : Fc = kc = 0, vi = t), kc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Fc;
    }
  }), ys = Be(Mu), _1 = E({}, Mu, { dataTransfer: 0 }), j1 = Be(_1), D1 = E({}, yi, { relatedTarget: 0 }), Wc = Be(D1), U1 = E({}, Za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), O1 = Be(U1), C1 = E({}, Za, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), N1 = Be(C1), B1 = E({}, Za, { data: 0 }), vs = Be(B1), H1 = {
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
  }, q1 = {
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
  }, w1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Y1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = w1[t]) ? !!e[t] : !1;
  }
  function $c() {
    return Y1;
  }
  var L1 = E({}, yi, {
    key: function(t) {
      if (t.key) {
        var e = H1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Su(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? q1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $c,
    charCode: function(t) {
      return t.type === "keypress" ? Su(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Su(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), G1 = Be(L1), X1 = E({}, Mu, {
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
  }), bs = Be(X1), Q1 = E({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $c
  }), V1 = Be(Q1), Z1 = E({}, Za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), K1 = Be(Z1), J1 = E({}, Mu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), k1 = Be(J1), F1 = E({}, Za, {
    newState: 0,
    oldState: 0
  }), W1 = Be(F1), $1 = [9, 13, 27, 32], Ic = wl && "CompositionEvent" in window, bi = null;
  wl && "documentMode" in document && (bi = document.documentMode);
  var I1 = wl && "TextEvent" in window && !bi, Ss = wl && (!Ic || bi && 8 < bi && 11 >= bi), xs = " ", As = !1;
  function Ms(t, e) {
    switch (t) {
      case "keyup":
        return $1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ts(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var jn = !1;
  function P1(t, e) {
    switch (t) {
      case "compositionend":
        return Ts(e);
      case "keypress":
        return e.which !== 32 ? null : (As = !0, xs);
      case "textInput":
        return t = e.data, t === xs && As ? null : t;
      default:
        return null;
    }
  }
  function t2(t, e) {
    if (jn)
      return t === "compositionend" || !Ic && Ms(t, e) ? (t = gs(), bu = Jc = da = null, jn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ss && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var e2 = {
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
  function zs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!e2[t.type] : e === "textarea";
  }
  function Es(t, e, l, a) {
    Rn ? _n ? _n.push(a) : _n = [a] : Rn = a, e = dc(e, "onChange"), 0 < e.length && (l = new Au(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var Si = null, xi = null;
  function l2(t) {
    od(t, 0);
  }
  function Tu(t) {
    var e = Va(t);
    if (di(e)) return t;
  }
  function Rs(t, e) {
    if (t === "change") return e;
  }
  var _s = !1;
  if (wl) {
    var Pc;
    if (wl) {
      var to = "oninput" in document;
      if (!to) {
        var js = document.createElement("div");
        js.setAttribute("oninput", "return;"), to = typeof js.oninput == "function";
      }
      Pc = to;
    } else Pc = !1;
    _s = Pc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ds() {
    Si && (Si.detachEvent("onpropertychange", Us), xi = Si = null);
  }
  function Us(t) {
    if (t.propertyName === "value" && Tu(xi)) {
      var e = [];
      Es(
        e,
        xi,
        t,
        Vc(t)
      ), ms(l2, e);
    }
  }
  function a2(t, e, l) {
    t === "focusin" ? (Ds(), Si = e, xi = l, Si.attachEvent("onpropertychange", Us)) : t === "focusout" && Ds();
  }
  function n2(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Tu(xi);
  }
  function i2(t, e) {
    if (t === "click") return Tu(e);
  }
  function u2(t, e) {
    if (t === "input" || t === "change")
      return Tu(e);
  }
  function c2(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : c2;
  function Ai(t, e) {
    if (Qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!xl.call(e, n) || !Qe(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Os(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Cs(t, e) {
    var l = Os(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Os(l);
    }
  }
  function Ns(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ns(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Bs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Mn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Mn(t.document);
    }
    return e;
  }
  function eo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var o2 = wl && "documentMode" in document && 11 >= document.documentMode, Dn = null, lo = null, Mi = null, ao = !1;
  function Hs(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ao || Dn == null || Dn !== Mn(a) || (a = Dn, "selectionStart" in a && eo(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Mi && Ai(Mi, a) || (Mi = a, a = dc(lo, "onSelect"), 0 < a.length && (e = new Au(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = Dn)));
  }
  function Ka(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Un = {
    animationend: Ka("Animation", "AnimationEnd"),
    animationiteration: Ka("Animation", "AnimationIteration"),
    animationstart: Ka("Animation", "AnimationStart"),
    transitionrun: Ka("Transition", "TransitionRun"),
    transitionstart: Ka("Transition", "TransitionStart"),
    transitioncancel: Ka("Transition", "TransitionCancel"),
    transitionend: Ka("Transition", "TransitionEnd")
  }, no = {}, qs = {};
  wl && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
  function Ja(t) {
    if (no[t]) return no[t];
    if (!Un[t]) return t;
    var e = Un[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in qs)
        return no[t] = e[l];
    return t;
  }
  var ws = Ja("animationend"), Ys = Ja("animationiteration"), Ls = Ja("animationstart"), f2 = Ja("transitionrun"), s2 = Ja("transitionstart"), r2 = Ja("transitioncancel"), Gs = Ja("transitionend"), Xs = /* @__PURE__ */ new Map(), io = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  io.push("scrollEnd");
  function pl(t, e) {
    Xs.set(t, e), dl(e, [t]);
  }
  var zu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, el = [], On = 0, uo = 0;
  function Eu() {
    for (var t = On, e = uo = On = 0; e < t; ) {
      var l = el[e];
      el[e++] = null;
      var a = el[e];
      el[e++] = null;
      var n = el[e];
      el[e++] = null;
      var i = el[e];
      if (el[e++] = null, a !== null && n !== null) {
        var o = a.pending;
        o === null ? n.next = n : (n.next = o.next, o.next = n), a.pending = n;
      }
      i !== 0 && Qs(l, n, i);
    }
  }
  function Ru(t, e, l, a) {
    el[On++] = t, el[On++] = e, el[On++] = l, el[On++] = a, uo |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function co(t, e, l, a) {
    return Ru(t, e, l, a), _u(t);
  }
  function ka(t, e) {
    return Ru(t, null, null, e), _u(t);
  }
  function Qs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - Re(l), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function _u(t) {
    if (50 < Zi)
      throw Zi = 0, vf = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Cn = {};
  function d2(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ve(t, e, l, a) {
    return new d2(t, e, l, a);
  }
  function oo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Yl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ve(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Vs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ju(t, e, l, a, n, i) {
    var o = 0;
    if (a = t, typeof t == "function") oo(t) && (o = 1);
    else if (typeof t == "string")
      o = yh(
        t,
        l,
        G.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case $:
          return t = Ve(31, l, e, n), t.elementType = $, t.lanes = i, t;
        case Q:
          return Fa(l.children, n, i, e);
        case P:
          o = 8, n |= 24;
          break;
        case rt:
          return t = Ve(12, l, e, n | 2), t.elementType = rt, t.lanes = i, t;
        case at:
          return t = Ve(13, l, e, n), t.elementType = at, t.lanes = i, t;
        case et:
          return t = Ve(19, l, e, n), t.elementType = et, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case W:
                o = 10;
                break t;
              case gt:
                o = 9;
                break t;
              case J:
                o = 11;
                break t;
              case V:
                o = 14;
                break t;
              case pt:
                o = 16, a = null;
                break t;
            }
          o = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ve(o, l, e, n), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function Fa(t, e, l, a) {
    return t = Ve(7, t, a, e), t.lanes = l, t;
  }
  function fo(t, e, l) {
    return t = Ve(6, t, null, e), t.lanes = l, t;
  }
  function Zs(t) {
    var e = Ve(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function so(t, e, l) {
    return e = Ve(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ks = /* @__PURE__ */ new WeakMap();
  function ll(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ks.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: aa(e)
      }, Ks.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: aa(e)
    };
  }
  var Nn = [], Bn = 0, Du = null, Ti = 0, al = [], nl = 0, ha = null, zl = 1, El = "";
  function Ll(t, e) {
    Nn[Bn++] = Ti, Nn[Bn++] = Du, Du = t, Ti = e;
  }
  function Js(t, e, l) {
    al[nl++] = zl, al[nl++] = El, al[nl++] = ha, ha = t;
    var a = zl;
    t = El;
    var n = 32 - Re(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - Re(e) + n;
    if (30 < i) {
      var o = n - n % 5;
      i = (a & (1 << o) - 1).toString(32), a >>= o, n -= o, zl = 1 << 32 - Re(e) + n | l << n | a, El = i + t;
    } else
      zl = 1 << i | l << n | a, El = t;
  }
  function ro(t) {
    t.return !== null && (Ll(t, 1), Js(t, 1, 0));
  }
  function ho(t) {
    for (; t === Du; )
      Du = Nn[--Bn], Nn[Bn] = null, Ti = Nn[--Bn], Nn[Bn] = null;
    for (; t === ha; )
      ha = al[--nl], al[nl] = null, El = al[--nl], al[nl] = null, zl = al[--nl], al[nl] = null;
  }
  function ks(t, e) {
    al[nl++] = zl, al[nl++] = El, al[nl++] = ha, zl = e.id, El = e.overflow, ha = t;
  }
  var Ae = null, Jt = null, Rt = !1, ma = null, il = !1, mo = Error(r(519));
  function ga(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw zi(ll(e, t)), mo;
  }
  function Fs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[te] = t, e[me] = a, l) {
      case "dialog":
        Tt("cancel", e), Tt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ji.length; l++)
          Tt(Ji[l], e);
        break;
      case "source":
        Tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", e), Tt("load", e);
        break;
      case "details":
        Tt("toggle", e);
        break;
      case "input":
        Tt("invalid", e), pu(
          e,
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
        Tt("invalid", e);
        break;
      case "textarea":
        Tt("invalid", e), vu(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || dd(e.textContent, l) ? (a.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)), a.onScroll != null && Tt("scroll", e), a.onScrollEnd != null && Tt("scrollend", e), a.onClick != null && (e.onclick = gl), e = !0) : e = !1, e || ga(t, !0);
  }
  function Ws(t) {
    for (Ae = t.return; Ae; )
      switch (Ae.tag) {
        case 5:
        case 31:
        case 13:
          il = !1;
          return;
        case 27:
        case 3:
          il = !0;
          return;
        default:
          Ae = Ae.return;
      }
  }
  function Hn(t) {
    if (t !== Ae) return !1;
    if (!Rt) return Ws(t), Rt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Cf(t.type, t.memoizedProps)), l = !l), l && Jt && ga(t), Ws(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Jt = xd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Jt = xd(t);
    } else
      e === 27 ? (e = Jt, ja(t.type) ? (t = wf, wf = null, Jt = t) : Jt = e) : Jt = Ae ? cl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    Jt = Ae = null, Rt = !1;
  }
  function go() {
    var t = ma;
    return t !== null && (Ye === null ? Ye = t : Ye.push.apply(
      Ye,
      t
    ), ma = null), t;
  }
  function zi(t) {
    ma === null ? ma = [t] : ma.push(t);
  }
  var po = g(null), $a = null, Gl = null;
  function pa(t, e, l) {
    Y(po, e._currentValue), e._currentValue = l;
  }
  function Xl(t) {
    t._currentValue = po.current, R(po);
  }
  function yo(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function vo(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var o = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var m = i;
          i = n;
          for (var S = 0; S < e.length; S++)
            if (m.context === e[S]) {
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), yo(
                i.return,
                l,
                t
              ), a || (o = null);
              break t;
            }
          i = m.next;
        }
      } else if (n.tag === 18) {
        if (o = n.return, o === null) throw Error(r(341));
        o.lanes |= l, i = o.alternate, i !== null && (i.lanes |= l), yo(o, l, t), o = null;
      } else o = n.child;
      if (o !== null) o.return = n;
      else
        for (o = n; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (n = o.sibling, n !== null) {
            n.return = o.return, o = n;
            break;
          }
          o = o.return;
        }
      n = o;
    }
  }
  function qn(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var o = n.alternate;
        if (o === null) throw Error(r(387));
        if (o = o.memoizedProps, o !== null) {
          var m = n.type;
          Qe(n.pendingProps.value, o.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (n === st.current) {
        if (o = n.alternate, o === null) throw Error(r(387));
        o.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Ii) : t = [Ii]);
      }
      n = n.return;
    }
    t !== null && vo(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function Uu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Qe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ia(t) {
    $a = t, Gl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Me(t) {
    return $s($a, t);
  }
  function Ou(t, e) {
    return $a === null && Ia(t), $s(t, e);
  }
  function $s(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Gl === null) {
      if (t === null) throw Error(r(308));
      Gl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Gl = Gl.next = e;
    return l;
  }
  var h2 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, m2 = u.unstable_scheduleCallback, g2 = u.unstable_NormalPriority, fe = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bo() {
    return {
      controller: new h2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ei(t) {
    t.refCount--, t.refCount === 0 && m2(g2, function() {
      t.controller.abort();
    });
  }
  var Ri = null, So = 0, wn = 0, Yn = null;
  function p2(t, e) {
    if (Ri === null) {
      var l = Ri = [];
      So = 0, wn = Tf(), Yn = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return So++, e.then(Is, Is), e;
  }
  function Is() {
    if (--So === 0 && Ri !== null) {
      Yn !== null && (Yn.status = "fulfilled");
      var t = Ri;
      Ri = null, wn = 0, Yn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function y2(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Ps = C.S;
  C.S = function(t, e) {
    Hr = De(), typeof e == "object" && e !== null && typeof e.then == "function" && p2(t, e), Ps !== null && Ps(t, e);
  };
  var Pa = g(null);
  function xo() {
    var t = Pa.current;
    return t !== null ? t : Qt.pooledCache;
  }
  function Cu(t, e) {
    e === null ? Y(Pa, Pa.current) : Y(Pa, e.pool);
  }
  function t0() {
    var t = xo();
    return t === null ? null : { parent: fe._currentValue, pool: t };
  }
  var Ln = Error(r(460)), Ao = Error(r(474)), Nu = Error(r(542)), Bu = { then: function() {
  } };
  function e0(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function l0(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(gl, gl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, n0(t), t;
      default:
        if (typeof e.status == "string") e.then(gl, gl);
        else {
          if (t = Qt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, n0(t), t;
        }
        throw en = e, Ln;
    }
  }
  function tn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (en = l, Ln) : l;
    }
  }
  var en = null;
  function a0() {
    if (en === null) throw Error(r(459));
    var t = en;
    return en = null, t;
  }
  function n0(t) {
    if (t === Ln || t === Nu)
      throw Error(r(483));
  }
  var Gn = null, _i = 0;
  function Hu(t) {
    var e = _i;
    return _i += 1, Gn === null && (Gn = []), l0(Gn, t, e);
  }
  function ji(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function qu(t, e) {
    throw e.$$typeof === N ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function i0(t) {
    function e(z, A) {
      if (t) {
        var _ = z.deletions;
        _ === null ? (z.deletions = [A], z.flags |= 16) : _.push(A);
      }
    }
    function l(z, A) {
      if (!t) return null;
      for (; A !== null; )
        e(z, A), A = A.sibling;
      return null;
    }
    function a(z) {
      for (var A = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? A.set(z.key, z) : A.set(z.index, z), z = z.sibling;
      return A;
    }
    function n(z, A) {
      return z = Yl(z, A), z.index = 0, z.sibling = null, z;
    }
    function i(z, A, _) {
      return z.index = _, t ? (_ = z.alternate, _ !== null ? (_ = _.index, _ < A ? (z.flags |= 67108866, A) : _) : (z.flags |= 67108866, A)) : (z.flags |= 1048576, A);
    }
    function o(z) {
      return t && z.alternate === null && (z.flags |= 67108866), z;
    }
    function m(z, A, _, H) {
      return A === null || A.tag !== 6 ? (A = fo(_, z.mode, H), A.return = z, A) : (A = n(A, _), A.return = z, A);
    }
    function S(z, A, _, H) {
      var nt = _.type;
      return nt === Q ? B(
        z,
        A,
        _.props.children,
        H,
        _.key
      ) : A !== null && (A.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === pt && tn(nt) === A.type) ? (A = n(A, _.props), ji(A, _), A.return = z, A) : (A = ju(
        _.type,
        _.key,
        _.props,
        null,
        z.mode,
        H
      ), ji(A, _), A.return = z, A);
    }
    function j(z, A, _, H) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation ? (A = so(_, z.mode, H), A.return = z, A) : (A = n(A, _.children || []), A.return = z, A);
    }
    function B(z, A, _, H, nt) {
      return A === null || A.tag !== 7 ? (A = Fa(
        _,
        z.mode,
        H,
        nt
      ), A.return = z, A) : (A = n(A, _), A.return = z, A);
    }
    function q(z, A, _) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = fo(
          "" + A,
          z.mode,
          _
        ), A.return = z, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return _ = ju(
              A.type,
              A.key,
              A.props,
              null,
              z.mode,
              _
            ), ji(_, A), _.return = z, _;
          case L:
            return A = so(
              A,
              z.mode,
              _
            ), A.return = z, A;
          case pt:
            return A = tn(A), q(z, A, _);
        }
        if (It(A) || X(A))
          return A = Fa(
            A,
            z.mode,
            _,
            null
          ), A.return = z, A;
        if (typeof A.then == "function")
          return q(z, Hu(A), _);
        if (A.$$typeof === W)
          return q(
            z,
            Ou(z, A),
            _
          );
        qu(z, A);
      }
      return null;
    }
    function D(z, A, _, H) {
      var nt = A !== null ? A.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return nt !== null ? null : m(z, A, "" + _, H);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            return _.key === nt ? S(z, A, _, H) : null;
          case L:
            return _.key === nt ? j(z, A, _, H) : null;
          case pt:
            return _ = tn(_), D(z, A, _, H);
        }
        if (It(_) || X(_))
          return nt !== null ? null : B(z, A, _, H, null);
        if (typeof _.then == "function")
          return D(
            z,
            A,
            Hu(_),
            H
          );
        if (_.$$typeof === W)
          return D(
            z,
            A,
            Ou(z, _),
            H
          );
        qu(z, _);
      }
      return null;
    }
    function O(z, A, _, H, nt) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return z = z.get(_) || null, m(A, z, "" + H, nt);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case w:
            return z = z.get(
              H.key === null ? _ : H.key
            ) || null, S(A, z, H, nt);
          case L:
            return z = z.get(
              H.key === null ? _ : H.key
            ) || null, j(A, z, H, nt);
          case pt:
            return H = tn(H), O(
              z,
              A,
              _,
              H,
              nt
            );
        }
        if (It(H) || X(H))
          return z = z.get(_) || null, B(A, z, H, nt, null);
        if (typeof H.then == "function")
          return O(
            z,
            A,
            _,
            Hu(H),
            nt
          );
        if (H.$$typeof === W)
          return O(
            z,
            A,
            _,
            Ou(A, H),
            nt
          );
        qu(A, H);
      }
      return null;
    }
    function I(z, A, _, H) {
      for (var nt = null, Dt = null, tt = A, bt = A = 0, Et = null; tt !== null && bt < _.length; bt++) {
        tt.index > bt ? (Et = tt, tt = null) : Et = tt.sibling;
        var Ut = D(
          z,
          tt,
          _[bt],
          H
        );
        if (Ut === null) {
          tt === null && (tt = Et);
          break;
        }
        t && tt && Ut.alternate === null && e(z, tt), A = i(Ut, A, bt), Dt === null ? nt = Ut : Dt.sibling = Ut, Dt = Ut, tt = Et;
      }
      if (bt === _.length)
        return l(z, tt), Rt && Ll(z, bt), nt;
      if (tt === null) {
        for (; bt < _.length; bt++)
          tt = q(z, _[bt], H), tt !== null && (A = i(
            tt,
            A,
            bt
          ), Dt === null ? nt = tt : Dt.sibling = tt, Dt = tt);
        return Rt && Ll(z, bt), nt;
      }
      for (tt = a(tt); bt < _.length; bt++)
        Et = O(
          tt,
          z,
          bt,
          _[bt],
          H
        ), Et !== null && (t && Et.alternate !== null && tt.delete(
          Et.key === null ? bt : Et.key
        ), A = i(
          Et,
          A,
          bt
        ), Dt === null ? nt = Et : Dt.sibling = Et, Dt = Et);
      return t && tt.forEach(function(Na) {
        return e(z, Na);
      }), Rt && Ll(z, bt), nt;
    }
    function ot(z, A, _, H) {
      if (_ == null) throw Error(r(151));
      for (var nt = null, Dt = null, tt = A, bt = A = 0, Et = null, Ut = _.next(); tt !== null && !Ut.done; bt++, Ut = _.next()) {
        tt.index > bt ? (Et = tt, tt = null) : Et = tt.sibling;
        var Na = D(z, tt, Ut.value, H);
        if (Na === null) {
          tt === null && (tt = Et);
          break;
        }
        t && tt && Na.alternate === null && e(z, tt), A = i(Na, A, bt), Dt === null ? nt = Na : Dt.sibling = Na, Dt = Na, tt = Et;
      }
      if (Ut.done)
        return l(z, tt), Rt && Ll(z, bt), nt;
      if (tt === null) {
        for (; !Ut.done; bt++, Ut = _.next())
          Ut = q(z, Ut.value, H), Ut !== null && (A = i(Ut, A, bt), Dt === null ? nt = Ut : Dt.sibling = Ut, Dt = Ut);
        return Rt && Ll(z, bt), nt;
      }
      for (tt = a(tt); !Ut.done; bt++, Ut = _.next())
        Ut = O(tt, z, bt, Ut.value, H), Ut !== null && (t && Ut.alternate !== null && tt.delete(Ut.key === null ? bt : Ut.key), A = i(Ut, A, bt), Dt === null ? nt = Ut : Dt.sibling = Ut, Dt = Ut);
      return t && tt.forEach(function(_h) {
        return e(z, _h);
      }), Rt && Ll(z, bt), nt;
    }
    function Yt(z, A, _, H) {
      if (typeof _ == "object" && _ !== null && _.type === Q && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            t: {
              for (var nt = _.key; A !== null; ) {
                if (A.key === nt) {
                  if (nt = _.type, nt === Q) {
                    if (A.tag === 7) {
                      l(
                        z,
                        A.sibling
                      ), H = n(
                        A,
                        _.props.children
                      ), H.return = z, z = H;
                      break t;
                    }
                  } else if (A.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === pt && tn(nt) === A.type) {
                    l(
                      z,
                      A.sibling
                    ), H = n(A, _.props), ji(H, _), H.return = z, z = H;
                    break t;
                  }
                  l(z, A);
                  break;
                } else e(z, A);
                A = A.sibling;
              }
              _.type === Q ? (H = Fa(
                _.props.children,
                z.mode,
                H,
                _.key
              ), H.return = z, z = H) : (H = ju(
                _.type,
                _.key,
                _.props,
                null,
                z.mode,
                H
              ), ji(H, _), H.return = z, z = H);
            }
            return o(z);
          case L:
            t: {
              for (nt = _.key; A !== null; ) {
                if (A.key === nt)
                  if (A.tag === 4 && A.stateNode.containerInfo === _.containerInfo && A.stateNode.implementation === _.implementation) {
                    l(
                      z,
                      A.sibling
                    ), H = n(A, _.children || []), H.return = z, z = H;
                    break t;
                  } else {
                    l(z, A);
                    break;
                  }
                else e(z, A);
                A = A.sibling;
              }
              H = so(_, z.mode, H), H.return = z, z = H;
            }
            return o(z);
          case pt:
            return _ = tn(_), Yt(
              z,
              A,
              _,
              H
            );
        }
        if (It(_))
          return I(
            z,
            A,
            _,
            H
          );
        if (X(_)) {
          if (nt = X(_), typeof nt != "function") throw Error(r(150));
          return _ = nt.call(_), ot(
            z,
            A,
            _,
            H
          );
        }
        if (typeof _.then == "function")
          return Yt(
            z,
            A,
            Hu(_),
            H
          );
        if (_.$$typeof === W)
          return Yt(
            z,
            A,
            Ou(z, _),
            H
          );
        qu(z, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, A !== null && A.tag === 6 ? (l(z, A.sibling), H = n(A, _), H.return = z, z = H) : (l(z, A), H = fo(_, z.mode, H), H.return = z, z = H), o(z)) : l(z, A);
    }
    return function(z, A, _, H) {
      try {
        _i = 0;
        var nt = Yt(
          z,
          A,
          _,
          H
        );
        return Gn = null, nt;
      } catch (tt) {
        if (tt === Ln || tt === Nu) throw tt;
        var Dt = Ve(29, tt, null, z.mode);
        return Dt.lanes = H, Dt.return = z, Dt;
      }
    };
  }
  var ln = i0(!0), u0 = i0(!1), ya = !1;
  function Mo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function To(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function va(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ba(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ct & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = _u(t), Qs(t, null, l), e;
    }
    return Ru(t, a, e, l), _u(t);
  }
  function Di(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, yn(t, l);
    }
  }
  function zo(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = o : i = i.next = o, l = l.next;
        } while (l !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Eo = !1;
  function Ui() {
    if (Eo) {
      var t = Yn;
      if (t !== null) throw t;
    }
  }
  function Oi(t, e, l, a) {
    Eo = !1;
    var n = t.updateQueue;
    ya = !1;
    var i = n.firstBaseUpdate, o = n.lastBaseUpdate, m = n.shared.pending;
    if (m !== null) {
      n.shared.pending = null;
      var S = m, j = S.next;
      S.next = null, o === null ? i = j : o.next = j, o = S;
      var B = t.alternate;
      B !== null && (B = B.updateQueue, m = B.lastBaseUpdate, m !== o && (m === null ? B.firstBaseUpdate = j : m.next = j, B.lastBaseUpdate = S));
    }
    if (i !== null) {
      var q = n.baseState;
      o = 0, B = j = S = null, m = i;
      do {
        var D = m.lane & -536870913, O = D !== m.lane;
        if (O ? (zt & D) === D : (a & D) === D) {
          D !== 0 && D === wn && (Eo = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var I = t, ot = m;
            D = e;
            var Yt = l;
            switch (ot.tag) {
              case 1:
                if (I = ot.payload, typeof I == "function") {
                  q = I.call(Yt, q, D);
                  break t;
                }
                q = I;
                break t;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = ot.payload, D = typeof I == "function" ? I.call(Yt, q, D) : I, D == null) break t;
                q = E({}, q, D);
                break t;
              case 2:
                ya = !0;
            }
          }
          D = m.callback, D !== null && (t.flags |= 64, O && (t.flags |= 8192), O = n.callbacks, O === null ? n.callbacks = [D] : O.push(D));
        } else
          O = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, B === null ? (j = B = O, S = q) : B = B.next = O, o |= D;
        if (m = m.next, m === null) {
          if (m = n.shared.pending, m === null)
            break;
          O = m, m = O.next, O.next = null, n.lastBaseUpdate = O, n.shared.pending = null;
        }
      } while (!0);
      B === null && (S = q), n.baseState = S, n.firstBaseUpdate = j, n.lastBaseUpdate = B, i === null && (n.shared.lanes = 0), Ta |= o, t.lanes = o, t.memoizedState = q;
    }
  }
  function c0(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function o0(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        c0(l[t], e);
  }
  var Xn = g(null), wu = g(0);
  function f0(t, e) {
    t = $l, Y(wu, t), Y(Xn, e), $l = t | e.baseLanes;
  }
  function Ro() {
    Y(wu, $l), Y(Xn, Xn.current);
  }
  function _o() {
    $l = wu.current, R(Xn), R(wu);
  }
  var Ze = g(null), ul = null;
  function Sa(t) {
    var e = t.alternate;
    Y(ne, ne.current & 1), Y(Ze, t), ul === null && (e === null || Xn.current !== null || e.memoizedState !== null) && (ul = t);
  }
  function jo(t) {
    Y(ne, ne.current), Y(Ze, t), ul === null && (ul = t);
  }
  function s0(t) {
    t.tag === 22 ? (Y(ne, ne.current), Y(Ze, t), ul === null && (ul = t)) : xa();
  }
  function xa() {
    Y(ne, ne.current), Y(Ze, Ze.current);
  }
  function Ke(t) {
    R(Ze), ul === t && (ul = null), R(ne);
  }
  var ne = g(0);
  function Yu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Hf(l) || qf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ql = 0, yt = null, qt = null, se = null, Lu = !1, Qn = !1, an = !1, Gu = 0, Ci = 0, Vn = null, v2 = 0;
  function ee() {
    throw Error(r(321));
  }
  function Do(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Qe(t[l], e[l])) return !1;
    return !0;
  }
  function Uo(t, e, l, a, n, i) {
    return Ql = i, yt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? J0 : Ko, an = !1, i = l(a, n), an = !1, Qn && (i = d0(
      e,
      l,
      a,
      n
    )), r0(t), i;
  }
  function r0(t) {
    C.H = Hi;
    var e = qt !== null && qt.next !== null;
    if (Ql = 0, se = qt = yt = null, Lu = !1, Ci = 0, Vn = null, e) throw Error(r(300));
    t === null || re || (t = t.dependencies, t !== null && Uu(t) && (re = !0));
  }
  function d0(t, e, l, a) {
    yt = t;
    var n = 0;
    do {
      if (Qn && (Vn = null), Ci = 0, Qn = !1, 25 <= n) throw Error(r(301));
      if (n += 1, se = qt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      C.H = k0, i = e(l, a);
    } while (Qn);
    return i;
  }
  function b2() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ni(e) : e, t = t.useState()[0], (qt !== null ? qt.memoizedState : null) !== t && (yt.flags |= 1024), e;
  }
  function Oo() {
    var t = Gu !== 0;
    return Gu = 0, t;
  }
  function Co(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function No(t) {
    if (Lu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Lu = !1;
    }
    Ql = 0, se = qt = yt = null, Qn = !1, Ci = Gu = 0, Vn = null;
  }
  function Oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return se === null ? yt.memoizedState = se = t : se = se.next = t, se;
  }
  function ie() {
    if (qt === null) {
      var t = yt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = qt.next;
    var e = se === null ? yt.memoizedState : se.next;
    if (e !== null)
      se = e, qt = t;
    else {
      if (t === null)
        throw yt.alternate === null ? Error(r(467)) : Error(r(310));
      qt = t, t = {
        memoizedState: qt.memoizedState,
        baseState: qt.baseState,
        baseQueue: qt.baseQueue,
        queue: qt.queue,
        next: null
      }, se === null ? yt.memoizedState = se = t : se = se.next = t;
    }
    return se;
  }
  function Xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ni(t) {
    var e = Ci;
    return Ci += 1, Vn === null && (Vn = []), t = l0(Vn, t, e), e = yt, (se === null ? e.memoizedState : se.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? J0 : Ko), t;
  }
  function Qu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ni(t);
      if (t.$$typeof === W) return Me(t);
    }
    throw Error(r(438, String(t)));
  }
  function Bo(t) {
    var e = null, l = yt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = yt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Xu(), yt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Vt;
    return e.index++, l;
  }
  function Vl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Vu(t) {
    var e = ie();
    return Ho(e, qt, t);
  }
  function Ho(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var o = n.next;
        n.next = i.next, i.next = o;
      }
      e.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var m = o = null, S = null, j = e, B = !1;
      do {
        var q = j.lane & -536870913;
        if (q !== j.lane ? (zt & q) === q : (Ql & q) === q) {
          var D = j.revertLane;
          if (D === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), q === wn && (B = !0);
          else if ((Ql & D) === D) {
            j = j.next, D === wn && (B = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, S === null ? (m = S = q, o = i) : S = S.next = q, yt.lanes |= D, Ta |= D;
          q = j.action, an && l(i, q), i = j.hasEagerState ? j.eagerState : l(i, q);
        } else
          D = {
            lane: q,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, S === null ? (m = S = D, o = i) : S = S.next = D, yt.lanes |= q, Ta |= q;
        j = j.next;
      } while (j !== null && j !== e);
      if (S === null ? o = i : S.next = m, !Qe(i, t.memoizedState) && (re = !0, B && (l = Yn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = o, t.baseQueue = S, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function qo(t) {
    var e = ie(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var o = n = n.next;
      do
        i = t(i, o.action), o = o.next;
      while (o !== n);
      Qe(i, e.memoizedState) || (re = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function h0(t, e, l) {
    var a = yt, n = ie(), i = Rt;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var o = !Qe(
      (qt || n).memoizedState,
      l
    );
    if (o && (n.memoizedState = l, re = !0), n = n.queue, Lo(p0.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || o || se !== null && se.memoizedState.tag & 1) {
      if (a.flags |= 2048, Zn(
        9,
        { destroy: void 0 },
        g0.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Qt === null) throw Error(r(349));
      i || (Ql & 127) !== 0 || m0(a, e, l);
    }
    return l;
  }
  function m0(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = yt.updateQueue, e === null ? (e = Xu(), yt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function g0(t, e, l, a) {
    e.value = l, e.getSnapshot = a, y0(e) && v0(t);
  }
  function p0(t, e, l) {
    return l(function() {
      y0(e) && v0(t);
    });
  }
  function y0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Qe(t, l);
    } catch {
      return !0;
    }
  }
  function v0(t) {
    var e = ka(t, 2);
    e !== null && Le(e, t, 2);
  }
  function wo(t) {
    var e = Oe();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), an) {
        Ue(!0);
        try {
          l();
        } finally {
          Ue(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vl,
      lastRenderedState: t
    }, e;
  }
  function b0(t, e, l, a) {
    return t.baseState = l, Ho(
      t,
      qt,
      typeof a == "function" ? a : Vl
    );
  }
  function S2(t, e, l, a, n) {
    if (Ju(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          i.listeners.push(o);
        }
      };
      C.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, S0(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function S0(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var i = C.T, o = {};
      C.T = o;
      try {
        var m = l(n, a), S = C.S;
        S !== null && S(o, m), x0(t, e, m);
      } catch (j) {
        Yo(t, e, j);
      } finally {
        i !== null && o.types !== null && (i.types = o.types), C.T = i;
      }
    } else
      try {
        i = l(n, a), x0(t, e, i);
      } catch (j) {
        Yo(t, e, j);
      }
  }
  function x0(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        A0(t, e, a);
      },
      function(a) {
        return Yo(t, e, a);
      }
    ) : A0(t, e, l);
  }
  function A0(t, e, l) {
    e.status = "fulfilled", e.value = l, M0(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, S0(t, l)));
  }
  function Yo(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, M0(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function M0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function T0(t, e) {
    return e;
  }
  function z0(t, e) {
    if (Rt) {
      var l = Qt.formState;
      if (l !== null) {
        t: {
          var a = yt;
          if (Rt) {
            if (Jt) {
              e: {
                for (var n = Jt, i = il; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = cl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Jt = cl(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            ga(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = Oe(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: T0,
      lastRenderedState: e
    }, l.queue = a, l = V0.bind(
      null,
      yt,
      a
    ), a.dispatch = l, a = wo(!1), i = Zo.bind(
      null,
      yt,
      !1,
      a.queue
    ), a = Oe(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = S2.bind(
      null,
      yt,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function E0(t) {
    var e = ie();
    return R0(e, qt, t);
  }
  function R0(t, e, l) {
    if (e = Ho(
      t,
      e,
      T0
    )[0], t = Vu(Vl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Ni(e);
      } catch (o) {
        throw o === Ln ? Nu : o;
      }
    else a = e;
    e = ie();
    var n = e.queue, i = n.dispatch;
    return l !== e.memoizedState && (yt.flags |= 2048, Zn(
      9,
      { destroy: void 0 },
      x2.bind(null, n, l),
      null
    )), [a, i, t];
  }
  function x2(t, e) {
    t.action = e;
  }
  function _0(t) {
    var e = ie(), l = qt;
    if (l !== null)
      return R0(e, l, t);
    ie(), e = e.memoizedState, l = ie();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Zn(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = yt.updateQueue, e === null && (e = Xu(), yt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function j0() {
    return ie().memoizedState;
  }
  function Zu(t, e, l, a) {
    var n = Oe();
    yt.flags |= t, n.memoizedState = Zn(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ku(t, e, l, a) {
    var n = ie();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    qt !== null && a !== null && Do(a, qt.memoizedState.deps) ? n.memoizedState = Zn(e, i, l, a) : (yt.flags |= t, n.memoizedState = Zn(
      1 | e,
      i,
      l,
      a
    ));
  }
  function D0(t, e) {
    Zu(8390656, 8, t, e);
  }
  function Lo(t, e) {
    Ku(2048, 8, t, e);
  }
  function A2(t) {
    yt.flags |= 4;
    var e = yt.updateQueue;
    if (e === null)
      e = Xu(), yt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function U0(t) {
    var e = ie().memoizedState;
    return A2({ ref: e, nextImpl: t }), function() {
      if ((Ct & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function O0(t, e) {
    return Ku(4, 2, t, e);
  }
  function C0(t, e) {
    return Ku(4, 4, t, e);
  }
  function N0(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function B0(t, e, l) {
    l = l != null ? l.concat([t]) : null, Ku(4, 4, N0.bind(null, e, t), l);
  }
  function Go() {
  }
  function H0(t, e) {
    var l = ie();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Do(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function q0(t, e) {
    var l = ie();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Do(e, a[1]))
      return a[0];
    if (a = t(), an) {
      Ue(!0);
      try {
        t();
      } finally {
        Ue(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Xo(t, e, l) {
    return l === void 0 || (Ql & 1073741824) !== 0 && (zt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = wr(), yt.lanes |= t, Ta |= t, l);
  }
  function w0(t, e, l, a) {
    return Qe(l, e) ? l : Xn.current !== null ? (t = Xo(t, l, a), Qe(t, e) || (re = !0), t) : (Ql & 42) === 0 || (Ql & 1073741824) !== 0 && (zt & 261930) === 0 ? (re = !0, t.memoizedState = l) : (t = wr(), yt.lanes |= t, Ta |= t, e);
  }
  function Y0(t, e, l, a, n) {
    var i = K.p;
    K.p = i !== 0 && 8 > i ? i : 8;
    var o = C.T, m = {};
    C.T = m, Zo(t, !1, e, l);
    try {
      var S = n(), j = C.S;
      if (j !== null && j(m, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var B = y2(
          S,
          a
        );
        Bi(
          t,
          e,
          B,
          Fe(t)
        );
      } else
        Bi(
          t,
          e,
          a,
          Fe(t)
        );
    } catch (q) {
      Bi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: q },
        Fe()
      );
    } finally {
      K.p = i, o !== null && m.types !== null && (o.types = m.types), C.T = o;
    }
  }
  function M2() {
  }
  function Qo(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476));
    var n = L0(t).queue;
    Y0(
      t,
      n,
      e,
      ut,
      l === null ? M2 : function() {
        return G0(t), l(a);
      }
    );
  }
  function L0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ut,
      baseState: ut,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vl,
        lastRenderedState: ut
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function G0(t) {
    var e = L0(t);
    e.next === null && (e = t.alternate.memoizedState), Bi(
      t,
      e.next.queue,
      {},
      Fe()
    );
  }
  function Vo() {
    return Me(Ii);
  }
  function X0() {
    return ie().memoizedState;
  }
  function Q0() {
    return ie().memoizedState;
  }
  function T2(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Fe();
          t = va(l);
          var a = ba(e, t, l);
          a !== null && (Le(a, e, l), Di(a, e, l)), e = { cache: bo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function z2(t, e, l) {
    var a = Fe();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ju(t) ? Z0(e, l) : (l = co(t, e, l, a), l !== null && (Le(l, t, a), K0(l, e, a)));
  }
  function V0(t, e, l) {
    var a = Fe();
    Bi(t, e, l, a);
  }
  function Bi(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ju(t)) Z0(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var o = e.lastRenderedState, m = i(o, l);
          if (n.hasEagerState = !0, n.eagerState = m, Qe(m, o))
            return Ru(t, e, n, 0), Qt === null && Eu(), !1;
        } catch {
        }
      if (l = co(t, e, n, a), l !== null)
        return Le(l, t, a), K0(l, e, a), !0;
    }
    return !1;
  }
  function Zo(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Tf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ju(t)) {
      if (e) throw Error(r(479));
    } else
      e = co(
        t,
        l,
        a,
        2
      ), e !== null && Le(e, t, 2);
  }
  function Ju(t) {
    var e = t.alternate;
    return t === yt || e !== null && e === yt;
  }
  function Z0(t, e) {
    Qn = Lu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function K0(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, yn(t, l);
    }
  }
  var Hi = {
    readContext: Me,
    use: Qu,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useLayoutEffect: ee,
    useInsertionEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useSyncExternalStore: ee,
    useId: ee,
    useHostTransitionStatus: ee,
    useFormState: ee,
    useActionState: ee,
    useOptimistic: ee,
    useMemoCache: ee,
    useCacheRefresh: ee
  };
  Hi.useEffectEvent = ee;
  var J0 = {
    readContext: Me,
    use: Qu,
    useCallback: function(t, e) {
      return Oe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Me,
    useEffect: D0,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Zu(
        4194308,
        4,
        N0.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Zu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Zu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Oe();
      e = e === void 0 ? null : e;
      var a = t();
      if (an) {
        Ue(!0);
        try {
          t();
        } finally {
          Ue(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = Oe();
      if (l !== void 0) {
        var n = l(e);
        if (an) {
          Ue(!0);
          try {
            l(e);
          } finally {
            Ue(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = z2.bind(
        null,
        yt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Oe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = wo(t);
      var e = t.queue, l = V0.bind(null, yt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Go,
    useDeferredValue: function(t, e) {
      var l = Oe();
      return Xo(l, t, e);
    },
    useTransition: function() {
      var t = wo(!1);
      return t = Y0.bind(
        null,
        yt,
        t.queue,
        !0,
        !1
      ), Oe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = yt, n = Oe();
      if (Rt) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Qt === null)
          throw Error(r(349));
        (zt & 127) !== 0 || m0(a, e, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return n.queue = i, D0(p0.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Zn(
        9,
        { destroy: void 0 },
        g0.bind(
          null,
          a,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Oe(), e = Qt.identifierPrefix;
      if (Rt) {
        var l = El, a = zl;
        l = (a & ~(1 << 32 - Re(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Gu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = v2++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Vo,
    useFormState: z0,
    useActionState: z0,
    useOptimistic: function(t) {
      var e = Oe();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Zo.bind(
        null,
        yt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Bo,
    useCacheRefresh: function() {
      return Oe().memoizedState = T2.bind(
        null,
        yt
      );
    },
    useEffectEvent: function(t) {
      var e = Oe(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Ct & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ko = {
    readContext: Me,
    use: Qu,
    useCallback: H0,
    useContext: Me,
    useEffect: Lo,
    useImperativeHandle: B0,
    useInsertionEffect: O0,
    useLayoutEffect: C0,
    useMemo: q0,
    useReducer: Vu,
    useRef: j0,
    useState: function() {
      return Vu(Vl);
    },
    useDebugValue: Go,
    useDeferredValue: function(t, e) {
      var l = ie();
      return w0(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Vu(Vl)[0], e = ie().memoizedState;
      return [
        typeof t == "boolean" ? t : Ni(t),
        e
      ];
    },
    useSyncExternalStore: h0,
    useId: X0,
    useHostTransitionStatus: Vo,
    useFormState: E0,
    useActionState: E0,
    useOptimistic: function(t, e) {
      var l = ie();
      return b0(l, qt, t, e);
    },
    useMemoCache: Bo,
    useCacheRefresh: Q0
  };
  Ko.useEffectEvent = U0;
  var k0 = {
    readContext: Me,
    use: Qu,
    useCallback: H0,
    useContext: Me,
    useEffect: Lo,
    useImperativeHandle: B0,
    useInsertionEffect: O0,
    useLayoutEffect: C0,
    useMemo: q0,
    useReducer: qo,
    useRef: j0,
    useState: function() {
      return qo(Vl);
    },
    useDebugValue: Go,
    useDeferredValue: function(t, e) {
      var l = ie();
      return qt === null ? Xo(l, t, e) : w0(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = qo(Vl)[0], e = ie().memoizedState;
      return [
        typeof t == "boolean" ? t : Ni(t),
        e
      ];
    },
    useSyncExternalStore: h0,
    useId: X0,
    useHostTransitionStatus: Vo,
    useFormState: _0,
    useActionState: _0,
    useOptimistic: function(t, e) {
      var l = ie();
      return qt !== null ? b0(l, qt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Bo,
    useCacheRefresh: Q0
  };
  k0.useEffectEvent = U0;
  function Jo(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var ko = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = Fe(), n = va(a);
      n.payload = e, l != null && (n.callback = l), e = ba(t, n, a), e !== null && (Le(e, t, a), Di(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = Fe(), n = va(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = ba(t, n, a), e !== null && (Le(e, t, a), Di(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Fe(), a = va(l);
      a.tag = 2, e != null && (a.callback = e), e = ba(t, a, l), e !== null && (Le(e, t, l), Di(e, t, l));
    }
  };
  function F0(t, e, l, a, n, i, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Ai(l, a) || !Ai(n, i) : !0;
  }
  function W0(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && ko.enqueueReplaceState(e, e.state, null);
  }
  function nn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = E({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function $0(t) {
    zu(t);
  }
  function I0(t) {
    console.error(t);
  }
  function P0(t) {
    zu(t);
  }
  function ku(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function tr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Fo(t, e, l) {
    return l = va(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ku(t, e);
    }, l;
  }
  function er(t) {
    return t = va(t), t.tag = 3, t;
  }
  function lr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        tr(e, l, a);
      };
    }
    var o = l.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      tr(e, l, a), typeof n != "function" && (za === null ? za = /* @__PURE__ */ new Set([this]) : za.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function E2(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && qn(
        e,
        l,
        n,
        !0
      ), l = Ze.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return ul === null ? uc() : l.alternate === null && le === 0 && (le = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), xf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), xf(t, a, n)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return xf(t, a, n), uc(), !1;
    }
    if (Rt)
      return e = Ze.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== mo && (t = Error(r(422), { cause: a }), zi(ll(t, l)))) : (a !== mo && (e = Error(r(423), {
        cause: a
      }), zi(
        ll(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = ll(a, l), n = Fo(
        t.stateNode,
        a,
        n
      ), zo(t, n), le !== 4 && (le = 2)), !1;
    var i = Error(r(520), { cause: a });
    if (i = ll(i, l), Vi === null ? Vi = [i] : Vi.push(i), le !== 4 && (le = 2), e === null) return !0;
    a = ll(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Fo(l.stateNode, a, t), zo(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (za === null || !za.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = er(n), lr(
              n,
              t,
              l,
              a
            ), zo(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Wo = Error(r(461)), re = !1;
  function Te(t, e, l, a) {
    e.child = t === null ? u0(e, null, l, a) : ln(
      e,
      t.child,
      l,
      a
    );
  }
  function ar(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var o = {};
      for (var m in a)
        m !== "ref" && (o[m] = a[m]);
    } else o = a;
    return Ia(e), a = Uo(
      t,
      e,
      l,
      o,
      i,
      n
    ), m = Oo(), t !== null && !re ? (Co(t, e, n), Zl(t, e, n)) : (Rt && m && ro(e), e.flags |= 1, Te(t, e, a, n), e.child);
  }
  function nr(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !oo(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, ir(
        t,
        e,
        i,
        a,
        n
      )) : (t = ju(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !nf(t, n)) {
      var o = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ai, l(o, a) && t.ref === e.ref)
        return Zl(t, e, n);
    }
    return e.flags |= 1, t = Yl(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ir(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Ai(i, a) && t.ref === e.ref)
        if (re = !1, e.pendingProps = a = i, nf(t, n))
          (t.flags & 131072) !== 0 && (re = !0);
        else
          return e.lanes = t.lanes, Zl(t, e, n);
    }
    return $o(
      t,
      e,
      l,
      a,
      n
    );
  }
  function ur(t, e, l, a) {
    var n = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, e.child = null;
        return cr(
          t,
          e,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Cu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? f0(e, i) : Ro(), s0(e);
      else
        return a = e.lanes = 536870912, cr(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (Cu(e, i.cachePool), f0(e, i), xa(), e.memoizedState = null) : (t !== null && Cu(e, null), Ro(), xa());
    return Te(t, e, n, l), e.child;
  }
  function qi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function cr(t, e, l, a, n) {
    var i = xo();
    return i = i === null ? null : { parent: fe._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && Cu(e, null), Ro(), s0(e), t !== null && qn(t, e, a, !0), e.childLanes = n, null;
  }
  function Fu(t, e) {
    return e = $u(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function or(t, e, l) {
    return ln(e, t.child, null, l), t = Fu(e, e.pendingProps), t.flags |= 2, Ke(e), e.memoizedState = null, t;
  }
  function R2(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Rt) {
        if (a.mode === "hidden")
          return t = Fu(e, a), e.lanes = 536870912, qi(null, t);
        if (jo(e), (t = Jt) ? (t = Sd(
          t,
          il
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ha !== null ? { id: zl, overflow: El } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zs(t), l.return = e, e.child = l, Ae = e, Jt = null)) : t = null, t === null) throw ga(e);
        return e.lanes = 536870912, null;
      }
      return Fu(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var o = i.dehydrated;
      if (jo(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = or(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (re || qn(t, e, l, !1), n = (l & t.childLanes) !== 0, re || n) {
        if (a = Qt, a !== null && (o = fi(a, l), o !== 0 && o !== i.retryLane))
          throw i.retryLane = o, ka(t, o), Le(a, t, o), Wo;
        uc(), e = or(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Jt = cl(o.nextSibling), Ae = e, Rt = !0, ma = null, il = !1, t !== null && ks(e, t), e = Fu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Yl(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Wu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function $o(t, e, l, a, n) {
    return Ia(e), l = Uo(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = Oo(), t !== null && !re ? (Co(t, e, n), Zl(t, e, n)) : (Rt && a && ro(e), e.flags |= 1, Te(t, e, l, n), e.child);
  }
  function fr(t, e, l, a, n, i) {
    return Ia(e), e.updateQueue = null, l = d0(
      e,
      a,
      l,
      n
    ), r0(t), a = Oo(), t !== null && !re ? (Co(t, e, i), Zl(t, e, i)) : (Rt && a && ro(e), e.flags |= 1, Te(t, e, l, i), e.child);
  }
  function sr(t, e, l, a, n) {
    if (Ia(e), e.stateNode === null) {
      var i = Cn, o = l.contextType;
      typeof o == "object" && o !== null && (i = Me(o)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ko, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, Mo(e), o = l.contextType, i.context = typeof o == "object" && o !== null ? Me(o) : Cn, i.state = e.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (Jo(
        e,
        l,
        o,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && ko.enqueueReplaceState(i, i.state, null), Oi(e, a, i, n), Ui(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var m = e.memoizedProps, S = nn(l, m);
      i.props = S;
      var j = i.context, B = l.contextType;
      o = Cn, typeof B == "object" && B !== null && (o = Me(B));
      var q = l.getDerivedStateFromProps;
      B = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || j !== o) && W0(
        e,
        i,
        a,
        o
      ), ya = !1;
      var D = e.memoizedState;
      i.state = D, Oi(e, a, i, n), Ui(), j = e.memoizedState, m || D !== j || ya ? (typeof q == "function" && (Jo(
        e,
        l,
        q,
        a
      ), j = e.memoizedState), (S = ya || F0(
        e,
        l,
        S,
        a,
        D,
        j,
        o
      )) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = j), i.props = a, i.state = j, i.context = o, a = S) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, To(t, e), o = e.memoizedProps, B = nn(l, o), i.props = B, q = e.pendingProps, D = i.context, j = l.contextType, S = Cn, typeof j == "object" && j !== null && (S = Me(j)), m = l.getDerivedStateFromProps, (j = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== q || D !== S) && W0(
        e,
        i,
        a,
        S
      ), ya = !1, D = e.memoizedState, i.state = D, Oi(e, a, i, n), Ui();
      var O = e.memoizedState;
      o !== q || D !== O || ya || t !== null && t.dependencies !== null && Uu(t.dependencies) ? (typeof m == "function" && (Jo(
        e,
        l,
        m,
        a
      ), O = e.memoizedState), (B = ya || F0(
        e,
        l,
        B,
        a,
        D,
        O,
        S
      ) || t !== null && t.dependencies !== null && Uu(t.dependencies)) ? (j || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, O, S), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        O,
        S
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = O), i.props = a, i.state = O, i.context = S, a = B) : (typeof i.componentDidUpdate != "function" || o === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, Wu(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = ln(
      e,
      t.child,
      null,
      n
    ), e.child = ln(
      e,
      null,
      l,
      n
    )) : Te(t, e, l, n), e.memoizedState = i.state, t = e.child) : t = Zl(
      t,
      e,
      n
    ), t;
  }
  function rr(t, e, l, a) {
    return Wa(), e.flags |= 256, Te(t, e, l, a), e.child;
  }
  var Io = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Po(t) {
    return { baseLanes: t, cachePool: t0() };
  }
  function tf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= ke), t;
  }
  function dr(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, o;
    if ((o = i) || (o = t !== null && t.memoizedState === null ? !1 : (ne.current & 2) !== 0), o && (n = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Rt) {
        if (n ? Sa(e) : xa(), (t = Jt) ? (t = Sd(
          t,
          il
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ha !== null ? { id: zl, overflow: El } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zs(t), l.return = e, e.child = l, Ae = e, Jt = null)) : t = null, t === null) throw ga(e);
        return qf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, n ? (xa(), n = e.mode, m = $u(
        { mode: "hidden", children: m },
        n
      ), a = Fa(
        a,
        n,
        l,
        null
      ), m.return = e, a.return = e, m.sibling = a, e.child = m, a = e.child, a.memoizedState = Po(l), a.childLanes = tf(
        t,
        o,
        l
      ), e.memoizedState = Io, qi(null, a)) : (Sa(e), ef(e, m));
    }
    var S = t.memoizedState;
    if (S !== null && (m = S.dehydrated, m !== null)) {
      if (i)
        e.flags & 256 ? (Sa(e), e.flags &= -257, e = lf(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (xa(), e.child = t.child, e.flags |= 128, e = null) : (xa(), m = a.fallback, n = e.mode, a = $u(
          { mode: "visible", children: a.children },
          n
        ), m = Fa(
          m,
          n,
          l,
          null
        ), m.flags |= 2, a.return = e, m.return = e, a.sibling = m, e.child = a, ln(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Po(l), a.childLanes = tf(
          t,
          o,
          l
        ), e.memoizedState = Io, e = qi(null, a));
      else if (Sa(e), qf(m)) {
        if (o = m.nextSibling && m.nextSibling.dataset, o) var j = o.dgst;
        o = j, a = Error(r(419)), a.stack = "", a.digest = o, zi({ value: a, source: null, stack: null }), e = lf(
          t,
          e,
          l
        );
      } else if (re || qn(t, e, l, !1), o = (l & t.childLanes) !== 0, re || o) {
        if (o = Qt, o !== null && (a = fi(o, l), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, ka(t, a), Le(o, t, a), Wo;
        Hf(m) || uc(), e = lf(
          t,
          e,
          l
        );
      } else
        Hf(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Jt = cl(
          m.nextSibling
        ), Ae = e, Rt = !0, ma = null, il = !1, t !== null && ks(e, t), e = ef(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (xa(), m = a.fallback, n = e.mode, S = t.child, j = S.sibling, a = Yl(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, j !== null ? m = Yl(
      j,
      m
    ) : (m = Fa(
      m,
      n,
      l,
      null
    ), m.flags |= 2), m.return = e, a.return = e, a.sibling = m, e.child = a, qi(null, a), a = e.child, m = t.child.memoizedState, m === null ? m = Po(l) : (n = m.cachePool, n !== null ? (S = fe._currentValue, n = n.parent !== S ? { parent: S, pool: S } : n) : n = t0(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: n
    }), a.memoizedState = m, a.childLanes = tf(
      t,
      o,
      l
    ), e.memoizedState = Io, qi(t.child, a)) : (Sa(e), l = t.child, t = l.sibling, l = Yl(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function ef(t, e) {
    return e = $u(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $u(t, e) {
    return t = Ve(22, t, null, e), t.lanes = 0, t;
  }
  function lf(t, e, l) {
    return ln(e, t.child, null, l), t = ef(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function hr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), yo(t.return, e, l);
  }
  function af(t, e, l, a, n, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = l, o.tailMode = n, o.treeForkCount = i);
  }
  function mr(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var o = ne.current, m = (o & 2) !== 0;
    if (m ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, Y(ne, o), Te(t, e, a, l), a = Rt ? Ti : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && hr(t, l, e);
        else if (t.tag === 19)
          hr(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && Yu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), af(
          e,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Yu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        af(
          e,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        af(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Zl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Ta |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (qn(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = Yl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Yl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function nf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Uu(t)));
  }
  function _2(t, e, l) {
    switch (e.tag) {
      case 3:
        At(e, e.stateNode.containerInfo), pa(e, fe, t.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        Ee(e);
        break;
      case 4:
        At(e, e.stateNode.containerInfo);
        break;
      case 10:
        pa(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, jo(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Sa(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? dr(t, e, l) : (Sa(e), t = Zl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Sa(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (qn(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return mr(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(ne, ne.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, ur(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        pa(e, fe, t.memoizedState.cache);
    }
    return Zl(t, e, l);
  }
  function gr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        re = !0;
      else {
        if (!nf(t, l) && (e.flags & 128) === 0)
          return re = !1, _2(
            t,
            e,
            l
          );
        re = (t.flags & 131072) !== 0;
      }
    else
      re = !1, Rt && (e.flags & 1048576) !== 0 && Js(e, Ti, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = tn(e.elementType), e.type = t, typeof t == "function")
            oo(t) ? (a = nn(t, a), e.tag = 1, e = sr(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = $o(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === J) {
                e.tag = 11, e = ar(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === V) {
                e.tag = 14, e = nr(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = Gt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return $o(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = nn(
          a,
          e.pendingProps
        ), sr(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (At(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, To(t, e), Oi(e, a, null, l);
          var o = e.memoizedState;
          if (a = o.cache, pa(e, fe, a), a !== i.cache && vo(
            e,
            [fe],
            l,
            !0
          ), Ui(), a = o.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: o.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = rr(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = ll(
                Error(r(424)),
                e
              ), zi(n), e = rr(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Jt = cl(t.firstChild), Ae = e, Rt = !0, ma = null, il = !0, l = u0(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Wa(), a === n) {
              e = Zl(
                t,
                e,
                l
              );
              break t;
            }
            Te(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Wu(t, e), t === null ? (l = Ed(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : Rt || (l = e.type, t = e.pendingProps, a = hc(
          ct.current
        ).createElement(l), a[te] = e, a[me] = t, ze(a, l, t), oe(a), e.stateNode = a) : e.memoizedState = Ed(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ee(e), t === null && Rt && (a = e.stateNode = Md(
          e.type,
          e.pendingProps,
          ct.current
        ), Ae = e, il = !0, n = Jt, ja(e.type) ? (wf = n, Jt = cl(a.firstChild)) : Jt = n), Te(
          t,
          e,
          e.pendingProps.children,
          l
        ), Wu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Rt && ((n = a = Jt) && (a = nh(
          a,
          e.type,
          e.pendingProps,
          il
        ), a !== null ? (e.stateNode = a, Ae = e, Jt = cl(a.firstChild), il = !1, n = !0) : n = !1), n || ga(e)), Ee(e), n = e.type, i = e.pendingProps, o = t !== null ? t.memoizedProps : null, a = i.children, Cf(n, i) ? a = null : o !== null && Cf(n, o) && (e.flags |= 32), e.memoizedState !== null && (n = Uo(
          t,
          e,
          b2,
          null,
          null,
          l
        ), Ii._currentValue = n), Wu(t, e), Te(t, e, a, l), e.child;
      case 6:
        return t === null && Rt && ((t = l = Jt) && (l = ih(
          l,
          e.pendingProps,
          il
        ), l !== null ? (e.stateNode = l, Ae = e, Jt = null, t = !0) : t = !1), t || ga(e)), null;
      case 13:
        return dr(t, e, l);
      case 4:
        return At(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = ln(
          e,
          null,
          a,
          l
        ) : Te(t, e, a, l), e.child;
      case 11:
        return ar(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Te(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, pa(e, e.type, a.value), Te(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Ia(e), n = Me(n), a = a(n), e.flags |= 1, Te(t, e, a, l), e.child;
      case 14:
        return nr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return ir(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return mr(t, e, l);
      case 31:
        return R2(t, e, l);
      case 22:
        return ur(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Ia(e), a = Me(fe), t === null ? (n = xo(), n === null && (n = Qt, i = bo(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), e.memoizedState = { parent: a, cache: n }, Mo(e), pa(e, fe, n)) : ((t.lanes & l) !== 0 && (To(t, e), Oi(e, null, null, l), Ui()), n = t.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), pa(e, fe, a)) : (a = i.cache, pa(e, fe, a), a !== n.cache && vo(
          e,
          [fe],
          l,
          !0
        ))), Te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Kl(t) {
    t.flags |= 4;
  }
  function uf(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Xr()) t.flags |= 8192;
        else
          throw en = Bu, Ao;
    } else t.flags &= -16777217;
  }
  function pr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ud(e))
      if (Xr()) t.flags |= 8192;
      else
        throw en = Bu, Ao;
  }
  function Iu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? xt() : 536870912, t.lanes |= e, Fn |= e);
  }
  function wi(t, e) {
    if (!Rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function j2(t, e, l) {
    var a = e.pendingProps;
    switch (ho(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(e), null;
      case 1:
        return kt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xl(fe), St(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Hn(e) ? Kl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, go())), kt(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (Kl(e), i !== null ? (kt(e), pr(e, i)) : (kt(e), uf(
          e,
          n,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (Kl(e), kt(e), pr(e, i)) : (kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Kl(e), kt(e), uf(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (Ie(e), l = ct.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Kl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return kt(e), null;
          }
          t = G.current, Hn(e) ? Fs(e) : (t = Md(n, a, l), e.stateNode = t, Kl(e));
        }
        return kt(e), null;
      case 5:
        if (Ie(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Kl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return kt(e), null;
          }
          if (i = G.current, Hn(e))
            Fs(e);
          else {
            var o = hc(
              ct.current
            );
            switch (i) {
              case 1:
                i = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? o.createElement("select", {
                      is: a.is
                    }) : o.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? o.createElement(n, { is: a.is }) : o.createElement(n);
                }
            }
            i[te] = e, i[me] = a;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                i.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e)
                  break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = i;
            t: switch (ze(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Kl(e);
          }
        }
        return kt(e), uf(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Kl(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = ct.current, Hn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ae, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || dd(t.nodeValue, l)), t || ga(e, !0);
          } else
            t = hc(t).createTextNode(
              a
            ), t[te] = e, e.stateNode = t;
        }
        return kt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Hn(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[te] = e;
            } else
              Wa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), t = !1;
          } else
            l = go(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return kt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Hn(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[te] = e;
            } else
              Wa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            kt(e), n = !1;
          } else
            n = go(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
        }
        return Ke(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Iu(e, e.updateQueue), kt(e), null);
      case 4:
        return St(), t === null && _f(e.stateNode.containerInfo), kt(e), null;
      case 10:
        return Xl(e.type), kt(e), null;
      case 19:
        if (R(ne), a = e.memoizedState, a === null) return kt(e), null;
        if (n = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) wi(a, !1);
          else {
            if (le !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Yu(t), i !== null) {
                  for (e.flags |= 128, wi(a, !1), t = i.updateQueue, e.updateQueue = t, Iu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Vs(l, t), l = l.sibling;
                  return Y(
                    ne,
                    ne.current & 1 | 2
                  ), Rt && Ll(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && De() > ac && (e.flags |= 128, n = !0, wi(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = Yu(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Iu(e, t), wi(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Rt)
                return kt(e), null;
            } else
              2 * De() - a.renderingStartTime > ac && l !== 536870912 && (e.flags |= 128, n = !0, wi(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = De(), t.sibling = null, l = ne.current, Y(
          ne,
          n ? l & 1 | 2 : l & 1
        ), Rt && Ll(e, a.treeForkCount), t) : (kt(e), null);
      case 22:
      case 23:
        return Ke(e), _o(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), l = e.updateQueue, l !== null && Iu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && R(Pa), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Xl(fe), kt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function D2(t, e) {
    switch (ho(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Xl(fe), St(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ie(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ke(e), e.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return R(ne), null;
      case 4:
        return St(), null;
      case 10:
        return Xl(e.type), null;
      case 22:
      case 23:
        return Ke(e), _o(), t !== null && R(Pa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Xl(fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yr(t, e) {
    switch (ho(e), e.tag) {
      case 3:
        Xl(fe), St();
        break;
      case 26:
      case 27:
      case 5:
        Ie(e);
        break;
      case 4:
        St();
        break;
      case 31:
        e.memoizedState !== null && Ke(e);
        break;
      case 13:
        Ke(e);
        break;
      case 19:
        R(ne);
        break;
      case 10:
        Xl(e.type);
        break;
      case 22:
      case 23:
        Ke(e), _o(), t !== null && R(Pa);
        break;
      case 24:
        Xl(fe);
    }
  }
  function Yi(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create, o = l.inst;
            a = i(), o.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (m) {
      Ht(e, e.return, m);
    }
  }
  function Aa(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var o = a.inst, m = o.destroy;
            if (m !== void 0) {
              o.destroy = void 0, n = e;
              var S = l, j = m;
              try {
                j();
              } catch (B) {
                Ht(
                  n,
                  S,
                  B
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (B) {
      Ht(e, e.return, B);
    }
  }
  function vr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        o0(e, l);
      } catch (a) {
        Ht(t, t.return, a);
      }
    }
  }
  function br(t, e, l) {
    l.props = nn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ht(t, e, a);
    }
  }
  function Li(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Ht(t, e, n);
    }
  }
  function Rl(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ht(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ht(t, e, n);
        }
      else l.current = null;
  }
  function Sr(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ht(t, t.return, n);
    }
  }
  function cf(t, e, l) {
    try {
      var a = t.stateNode;
      I2(a, t.type, l, e), a[me] = e;
    } catch (n) {
      Ht(t, t.return, n);
    }
  }
  function xr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ja(t.type) || t.tag === 4;
  }
  function of(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xr(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ja(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ff(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = gl));
    else if (a !== 4 && (a === 27 && ja(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (ff(t, e, l), t = t.sibling; t !== null; )
        ff(t, e, l), t = t.sibling;
  }
  function Pu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && ja(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Pu(t, e, l), t = t.sibling; t !== null; )
        Pu(t, e, l), t = t.sibling;
  }
  function Ar(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      ze(e, a, l), e[te] = t, e[me] = l;
    } catch (i) {
      Ht(t, t.return, i);
    }
  }
  var Jl = !1, de = !1, sf = !1, Mr = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function U2(t, e) {
    if (t = t.containerInfo, Uf = Sc, t = Bs(t), eo(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var o = 0, m = -1, S = -1, j = 0, B = 0, q = t, D = null;
            e: for (; ; ) {
              for (var O; q !== l || n !== 0 && q.nodeType !== 3 || (m = o + n), q !== i || a !== 0 && q.nodeType !== 3 || (S = o + a), q.nodeType === 3 && (o += q.nodeValue.length), (O = q.firstChild) !== null; )
                D = q, q = O;
              for (; ; ) {
                if (q === t) break e;
                if (D === l && ++j === n && (m = o), D === i && ++B === a && (S = o), (O = q.nextSibling) !== null) break;
                q = D, D = q.parentNode;
              }
              q = O;
            }
            l = m === -1 || S === -1 ? null : { start: m, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Of = { focusedElem: t, selectionRange: l }, Sc = !1, be = e; be !== null; )
      if (e = be, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, be = t;
      else
        for (; be !== null; ) {
          switch (e = be, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var I = nn(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    I,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ot) {
                  Ht(
                    l,
                    l.return,
                    ot
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Bf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bf(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, be = t;
            break;
          }
          be = e.return;
        }
  }
  function Tr(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t, l), a & 4 && Yi(5, l);
        break;
      case 1:
        if (Fl(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (o) {
              Ht(l, l.return, o);
            }
          else {
            var n = nn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (o) {
              Ht(
                l,
                l.return,
                o
              );
            }
          }
        a & 64 && vr(l), a & 512 && Li(l, l.return);
        break;
      case 3:
        if (Fl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            o0(t, e);
          } catch (o) {
            Ht(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ar(l);
      case 26:
      case 5:
        Fl(t, l), e === null && a & 4 && Sr(l), a & 512 && Li(l, l.return);
        break;
      case 12:
        Fl(t, l);
        break;
      case 31:
        Fl(t, l), a & 4 && Rr(t, l);
        break;
      case 13:
        Fl(t, l), a & 4 && _r(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = L2.bind(
          null,
          l
        ), uh(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Jl, !a) {
          e = e !== null && e.memoizedState !== null || de, n = Jl;
          var i = de;
          Jl = a, (de = e) && !i ? Wl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Fl(t, l), Jl = n, de = i;
        }
        break;
      case 30:
        break;
      default:
        Fl(t, l);
    }
  }
  function zr(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, zr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && si(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var $t = null, He = !1;
  function kl(t, e, l) {
    for (l = l.child; l !== null; )
      Er(t, e, l), l = l.sibling;
  }
  function Er(t, e, l) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount(na, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        de || Rl(l, e), kl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        de || Rl(l, e);
        var a = $t, n = He;
        ja(l.type) && ($t = l.stateNode, He = !1), kl(
          t,
          e,
          l
        ), Fi(l.stateNode), $t = a, He = n;
        break;
      case 5:
        de || Rl(l, e);
      case 6:
        if (a = $t, n = He, $t = null, kl(
          t,
          e,
          l
        ), $t = a, He = n, $t !== null)
          if (He)
            try {
              ($t.nodeType === 9 ? $t.body : $t.nodeName === "HTML" ? $t.ownerDocument.body : $t).removeChild(l.stateNode);
            } catch (i) {
              Ht(
                l,
                e,
                i
              );
            }
          else
            try {
              $t.removeChild(l.stateNode);
            } catch (i) {
              Ht(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        $t !== null && (He ? (t = $t, vd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), ai(t)) : vd($t, l.stateNode));
        break;
      case 4:
        a = $t, n = He, $t = l.stateNode.containerInfo, He = !0, kl(
          t,
          e,
          l
        ), $t = a, He = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Aa(2, l, e), de || Aa(4, l, e), kl(
          t,
          e,
          l
        );
        break;
      case 1:
        de || (Rl(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && br(
          l,
          e,
          a
        )), kl(
          t,
          e,
          l
        );
        break;
      case 21:
        kl(
          t,
          e,
          l
        );
        break;
      case 22:
        de = (a = de) || l.memoizedState !== null, kl(
          t,
          e,
          l
        ), de = a;
        break;
      default:
        kl(
          t,
          e,
          l
        );
    }
  }
  function Rr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ai(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
    }
  }
  function _r(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ai(t);
      } catch (l) {
        Ht(e, e.return, l);
      }
  }
  function O2(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Mr()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Mr()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function tc(t, e) {
    var l = O2(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = G2.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function qe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = t, o = e, m = o;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (ja(m.type)) {
                $t = m.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              $t = m.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              $t = m.stateNode.containerInfo, He = !0;
              break t;
          }
          m = m.return;
        }
        if ($t === null) throw Error(r(160));
        Er(i, o, n), $t = null, He = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        jr(e, t), e = e.sibling;
  }
  var yl = null;
  function jr(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qe(e, t), we(t), a & 4 && (Aa(3, t, t.return), Yi(3, t), Aa(5, t, t.return));
        break;
      case 1:
        qe(e, t), we(t), a & 512 && (de || l === null || Rl(l, l.return)), a & 64 && Jl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = yl;
        if (qe(e, t), we(t), a & 512 && (de || l === null || Rl(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Qa] || i[te] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), ze(i, a, l), i[te] = t, oe(i), a = i;
                      break t;
                    case "link":
                      var o = jd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (o) {
                        for (var m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            o.splice(m, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ze(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (o = jd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            o.splice(m, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ze(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  i[te] = t, oe(i), a = i;
                }
                t.stateNode = a;
              } else
                Dd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = _d(
                n,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Dd(
              n,
              t.type,
              t.stateNode
            ) : _d(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && cf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        qe(e, t), we(t), a & 512 && (de || l === null || Rl(l, l.return)), l !== null && a & 4 && cf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (qe(e, t), we(t), a & 512 && (de || l === null || Rl(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            sa(n, "");
          } catch (I) {
            Ht(t, t.return, I);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, cf(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (sf = !0);
        break;
      case 6:
        if (qe(e, t), we(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (I) {
            Ht(t, t.return, I);
          }
        }
        break;
      case 3:
        if (pc = null, n = yl, yl = mc(e.containerInfo), qe(e, t), yl = n, we(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ai(e.containerInfo);
          } catch (I) {
            Ht(t, t.return, I);
          }
        sf && (sf = !1, Dr(t));
        break;
      case 4:
        a = yl, yl = mc(
          t.stateNode.containerInfo
        ), qe(e, t), we(t), yl = a;
        break;
      case 12:
        qe(e, t), we(t);
        break;
      case 31:
        qe(e, t), we(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, tc(t, a)));
        break;
      case 13:
        qe(e, t), we(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (lc = De()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, tc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null, j = Jl, B = de;
        if (Jl = j || n, de = B || S, qe(e, t), de = B, Jl = j, we(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || S || Jl || de || un(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                S = l = e;
                try {
                  if (i = S.stateNode, n)
                    o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    m = S.stateNode;
                    var q = S.memoizedProps.style, D = q != null && q.hasOwnProperty("display") ? q.display : null;
                    m.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (I) {
                  Ht(S, S.return, I);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = n ? "" : S.memoizedProps;
                } catch (I) {
                  Ht(S, S.return, I);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                S = e;
                try {
                  var O = S.stateNode;
                  n ? bd(O, !0) : bd(S.stateNode, !1);
                } catch (I) {
                  Ht(S, S.return, I);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, tc(t, l))));
        break;
      case 19:
        qe(e, t), we(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, tc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qe(e, t), we(t);
    }
  }
  function we(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (xr(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = of(t);
            Pu(t, i, n);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (sa(o, ""), l.flags &= -33);
            var m = of(t);
            Pu(t, m, o);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo, j = of(t);
            ff(
              t,
              j,
              S
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (B) {
        Ht(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Dr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Dr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Tr(t, e.alternate, e), e = e.sibling;
  }
  function un(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Aa(4, e, e.return), un(e);
          break;
        case 1:
          Rl(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && br(
            e,
            e.return,
            l
          ), un(e);
          break;
        case 27:
          Fi(e.stateNode);
        case 26:
        case 5:
          Rl(e, e.return), un(e);
          break;
        case 22:
          e.memoizedState === null && un(e);
          break;
        case 30:
          un(e);
          break;
        default:
          un(e);
      }
      t = t.sibling;
    }
  }
  function Wl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, i = e, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Wl(
            n,
            i,
            l
          ), Yi(4, i);
          break;
        case 1:
          if (Wl(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (j) {
              Ht(a, a.return, j);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var m = a.stateNode;
            try {
              var S = n.shared.hiddenCallbacks;
              if (S !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < S.length; n++)
                  c0(S[n], m);
            } catch (j) {
              Ht(a, a.return, j);
            }
          }
          l && o & 64 && vr(i), Li(i, i.return);
          break;
        case 27:
          Ar(i);
        case 26:
        case 5:
          Wl(
            n,
            i,
            l
          ), l && a === null && o & 4 && Sr(i), Li(i, i.return);
          break;
        case 12:
          Wl(
            n,
            i,
            l
          );
          break;
        case 31:
          Wl(
            n,
            i,
            l
          ), l && o & 4 && Rr(n, i);
          break;
        case 13:
          Wl(
            n,
            i,
            l
          ), l && o & 4 && _r(n, i);
          break;
        case 22:
          i.memoizedState === null && Wl(
            n,
            i,
            l
          ), Li(i, i.return);
          break;
        case 30:
          break;
        default:
          Wl(
            n,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function rf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ei(l));
  }
  function df(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ei(t));
  }
  function vl(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ur(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Ur(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vl(
          t,
          e,
          l,
          a
        ), n & 2048 && Yi(9, e);
        break;
      case 1:
        vl(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        vl(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ei(t)));
        break;
      case 12:
        if (n & 2048) {
          vl(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, o = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              o,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Ht(e, e.return, S);
          }
        } else
          vl(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        vl(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        vl(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, o = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? vl(
          t,
          e,
          l,
          a
        ) : Gi(t, e) : i._visibility & 2 ? vl(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Kn(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && rf(o, e);
        break;
      case 24:
        vl(
          t,
          e,
          l,
          a
        ), n & 2048 && df(e.alternate, e);
        break;
      default:
        vl(
          t,
          e,
          l,
          a
        );
    }
  }
  function Kn(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, o = e, m = l, S = a, j = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            i,
            o,
            m,
            S,
            n
          ), Yi(8, o);
          break;
        case 23:
          break;
        case 22:
          var B = o.stateNode;
          o.memoizedState !== null ? B._visibility & 2 ? Kn(
            i,
            o,
            m,
            S,
            n
          ) : Gi(
            i,
            o
          ) : (B._visibility |= 2, Kn(
            i,
            o,
            m,
            S,
            n
          )), n && j & 2048 && rf(
            o.alternate,
            o
          );
          break;
        case 24:
          Kn(
            i,
            o,
            m,
            S,
            n
          ), n && j & 2048 && df(o.alternate, o);
          break;
        default:
          Kn(
            i,
            o,
            m,
            S,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Gi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Gi(l, a), n & 2048 && rf(
              a.alternate,
              a
            );
            break;
          case 24:
            Gi(l, a), n & 2048 && df(a.alternate, a);
            break;
          default:
            Gi(l, a);
        }
        e = e.sibling;
      }
  }
  var Xi = 8192;
  function Jn(t, e, l) {
    if (t.subtreeFlags & Xi)
      for (t = t.child; t !== null; )
        Or(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Or(t, e, l) {
    switch (t.tag) {
      case 26:
        Jn(
          t,
          e,
          l
        ), t.flags & Xi && t.memoizedState !== null && vh(
          l,
          yl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Jn(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = yl;
        yl = mc(t.stateNode.containerInfo), Jn(
          t,
          e,
          l
        ), yl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Xi, Xi = 16777216, Jn(
          t,
          e,
          l
        ), Xi = a) : Jn(
          t,
          e,
          l
        ));
        break;
      default:
        Jn(
          t,
          e,
          l
        );
    }
  }
  function Cr(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Qi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          be = a, Br(
            a,
            t
          );
        }
      Cr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Nr(t), t = t.sibling;
  }
  function Nr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qi(t), t.flags & 2048 && Aa(9, t, t.return);
        break;
      case 3:
        Qi(t);
        break;
      case 12:
        Qi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ec(t)) : Qi(t);
        break;
      default:
        Qi(t);
    }
  }
  function ec(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          be = a, Br(
            a,
            t
          );
        }
      Cr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, e, e.return), ec(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, ec(e));
          break;
        default:
          ec(e);
      }
      t = t.sibling;
    }
  }
  function Br(t, e) {
    for (; be !== null; ) {
      var l = be;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ei(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, be = a;
      else
        t: for (l = t; be !== null; ) {
          a = be;
          var n = a.sibling, i = a.return;
          if (zr(a), a === l) {
            be = null;
            break t;
          }
          if (n !== null) {
            n.return = i, be = n;
            break t;
          }
          be = i;
        }
    }
  }
  var C2 = {
    getCacheForType: function(t) {
      var e = Me(fe), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Me(fe).controller.signal;
    }
  }, N2 = typeof WeakMap == "function" ? WeakMap : Map, Ct = 0, Qt = null, Mt = null, zt = 0, Bt = 0, Je = null, Ma = !1, kn = !1, hf = !1, $l = 0, le = 0, Ta = 0, cn = 0, mf = 0, ke = 0, Fn = 0, Vi = null, Ye = null, gf = !1, lc = 0, Hr = 0, ac = 1 / 0, nc = null, za = null, ge = 0, Ea = null, Wn = null, Il = 0, pf = 0, yf = null, qr = null, Zi = 0, vf = null;
  function Fe() {
    return (Ct & 2) !== 0 && zt !== 0 ? zt & -zt : C.T !== null ? Tf() : Ot();
  }
  function wr() {
    if (ke === 0)
      if ((zt & 536870912) === 0 || Rt) {
        var t = Xa;
        Xa <<= 1, (Xa & 3932160) === 0 && (Xa = 262144), ke = t;
      } else ke = 536870912;
    return t = Ze.current, t !== null && (t.flags |= 32), ke;
  }
  function Le(t, e, l) {
    (t === Qt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && ($n(t, 0), Ra(
      t,
      zt,
      ke,
      !1
    )), vt(t, l), ((Ct & 2) === 0 || t !== Qt) && (t === Qt && ((Ct & 2) === 0 && (cn |= l), le === 4 && Ra(
      t,
      zt,
      ke,
      !1
    )), _l(t));
  }
  function Yr(t, e, l) {
    if ((Ct & 6) !== 0) throw Error(r(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || xe(t, e), n = a ? q2(t, e) : Sf(t, e, !0), i = a;
    do {
      if (n === 0) {
        kn && !a && Ra(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !B2(l)) {
          n = Sf(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var o = 0;
          else
            o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var m = t;
              n = Vi;
              var S = m.current.memoizedState.isDehydrated;
              if (S && ($n(m, o).flags |= 256), o = Sf(
                m,
                o,
                !1
              ), o !== 2) {
                if (hf && !S) {
                  m.errorRecoveryDisabledLanes |= i, cn |= i, n = 4;
                  break t;
                }
                i = Ye, Ye = n, i !== null && (Ye === null ? Ye = i : Ye.push.apply(
                  Ye,
                  i
                ));
              }
              n = o;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          $n(t, 0), Ra(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ra(
                a,
                e,
                ke,
                !Ma
              );
              break t;
            case 2:
              Ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (n = lc + 300 - De(), 10 < n)) {
            if (Ra(
              a,
              e,
              ke,
              !Ma
            ), Cl(a, 0, !0) !== 0) break t;
            Il = e, a.timeoutHandle = pd(
              Lr.bind(
                null,
                a,
                l,
                Ye,
                nc,
                gf,
                e,
                ke,
                cn,
                Fn,
                Ma,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Lr(
            a,
            l,
            Ye,
            nc,
            gf,
            e,
            ke,
            cn,
            Fn,
            Ma,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    _l(t);
  }
  function Lr(t, e, l, a, n, i, o, m, S, j, B, q, D, O) {
    if (t.timeoutHandle = -1, q = e.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: gl
      }, Or(
        e,
        i,
        q
      );
      var I = (i & 62914560) === i ? lc - De() : (i & 4194048) === i ? Hr - De() : 0;
      if (I = bh(
        q,
        I
      ), I !== null) {
        Il = i, t.cancelPendingCommit = I(
          kr.bind(
            null,
            t,
            e,
            i,
            l,
            a,
            n,
            o,
            m,
            S,
            B,
            q,
            null,
            D,
            O
          )
        ), Ra(t, i, o, !j);
        return;
      }
    }
    kr(
      t,
      e,
      i,
      l,
      a,
      n,
      o,
      m,
      S
    );
  }
  function B2(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!Qe(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ra(t, e, l, a) {
    e &= ~mf, e &= ~cn, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - Re(n), o = 1 << i;
      a[i] = -1, n &= ~o;
    }
    l !== 0 && oi(t, l, e);
  }
  function ic() {
    return (Ct & 6) === 0 ? (Ki(0), !1) : !0;
  }
  function bf() {
    if (Mt !== null) {
      if (Bt === 0)
        var t = Mt.return;
      else
        t = Mt, Gl = $a = null, No(t), Gn = null, _i = 0, t = Mt;
      for (; t !== null; )
        yr(t.alternate, t), t = t.return;
      Mt = null;
    }
  }
  function $n(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, eh(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Il = 0, bf(), Qt = t, Mt = l = Yl(t.current, null), zt = e, Bt = 0, Je = null, Ma = !1, kn = xe(t, e), hf = !1, Fn = ke = mf = cn = Ta = le = 0, Ye = Vi = null, gf = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - Re(a), i = 1 << n;
        e |= t[n], a &= ~i;
      }
    return $l = e, Eu(), l;
  }
  function Gr(t, e) {
    yt = null, C.H = Hi, e === Ln || e === Nu ? (e = a0(), Bt = 3) : e === Ao ? (e = a0(), Bt = 4) : Bt = e === Wo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Je = e, Mt === null && (le = 1, ku(
      t,
      ll(e, t.current)
    ));
  }
  function Xr() {
    var t = Ze.current;
    return t === null ? !0 : (zt & 4194048) === zt ? ul === null : (zt & 62914560) === zt || (zt & 536870912) !== 0 ? t === ul : !1;
  }
  function Qr() {
    var t = C.H;
    return C.H = Hi, t === null ? Hi : t;
  }
  function Vr() {
    var t = C.A;
    return C.A = C2, t;
  }
  function uc() {
    le = 4, Ma || (zt & 4194048) !== zt && Ze.current !== null || (kn = !0), (Ta & 134217727) === 0 && (cn & 134217727) === 0 || Qt === null || Ra(
      Qt,
      zt,
      ke,
      !1
    );
  }
  function Sf(t, e, l) {
    var a = Ct;
    Ct |= 2;
    var n = Qr(), i = Vr();
    (Qt !== t || zt !== e) && (nc = null, $n(t, e)), e = !1;
    var o = le;
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          var m = Mt, S = Je;
          switch (Bt) {
            case 8:
              bf(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ze.current === null && (e = !0);
              var j = Bt;
              if (Bt = 0, Je = null, In(t, m, S, j), l && kn) {
                o = 0;
                break t;
              }
              break;
            default:
              j = Bt, Bt = 0, Je = null, In(t, m, S, j);
          }
        }
        H2(), o = le;
        break;
      } catch (B) {
        Gr(t, B);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Gl = $a = null, Ct = a, C.H = n, C.A = i, Mt === null && (Qt = null, zt = 0, Eu()), o;
  }
  function H2() {
    for (; Mt !== null; ) Zr(Mt);
  }
  function q2(t, e) {
    var l = Ct;
    Ct |= 2;
    var a = Qr(), n = Vr();
    Qt !== t || zt !== e ? (nc = null, ac = De() + 500, $n(t, e)) : kn = xe(
      t,
      e
    );
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          e = Mt;
          var i = Je;
          e: switch (Bt) {
            case 1:
              Bt = 0, Je = null, In(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (e0(i)) {
                Bt = 0, Je = null, Kr(e);
                break;
              }
              e = function() {
                Bt !== 2 && Bt !== 9 || Qt !== t || (Bt = 7), _l(t);
              }, i.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              e0(i) ? (Bt = 0, Je = null, Kr(e)) : (Bt = 0, Je = null, In(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (Mt.tag) {
                case 26:
                  o = Mt.memoizedState;
                case 5:
                case 27:
                  var m = Mt;
                  if (o ? Ud(o) : m.stateNode.complete) {
                    Bt = 0, Je = null;
                    var S = m.sibling;
                    if (S !== null) Mt = S;
                    else {
                      var j = m.return;
                      j !== null ? (Mt = j, cc(j)) : Mt = null;
                    }
                    break e;
                  }
              }
              Bt = 0, Je = null, In(t, e, i, 5);
              break;
            case 6:
              Bt = 0, Je = null, In(t, e, i, 6);
              break;
            case 8:
              bf(), le = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        w2();
        break;
      } catch (B) {
        Gr(t, B);
      }
    while (!0);
    return Gl = $a = null, C.H = a, C.A = n, Ct = l, Mt !== null ? 0 : (Qt = null, zt = 0, Eu(), le);
  }
  function w2() {
    for (; Mt !== null && !wa(); )
      Zr(Mt);
  }
  function Zr(t) {
    var e = gr(t.alternate, t, $l);
    t.memoizedProps = t.pendingProps, e === null ? cc(t) : Mt = e;
  }
  function Kr(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = fr(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          zt
        );
        break;
      case 11:
        e = fr(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          zt
        );
        break;
      case 5:
        No(e);
      default:
        yr(l, e), e = Mt = Vs(e, $l), e = gr(l, e, $l);
    }
    t.memoizedProps = t.pendingProps, e === null ? cc(t) : Mt = e;
  }
  function In(t, e, l, a) {
    Gl = $a = null, No(e), Gn = null, _i = 0;
    var n = e.return;
    try {
      if (E2(
        t,
        n,
        e,
        l,
        zt
      )) {
        le = 1, ku(
          t,
          ll(l, t.current)
        ), Mt = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw Mt = n, i;
      le = 1, ku(
        t,
        ll(l, t.current)
      ), Mt = null;
      return;
    }
    e.flags & 32768 ? (Rt || a === 1 ? t = !0 : kn || (zt & 536870912) !== 0 ? t = !1 : (Ma = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ze.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jr(e, t)) : cc(e);
  }
  function cc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Jr(
          e,
          Ma
        );
        return;
      }
      t = e.return;
      var l = j2(
        e.alternate,
        e,
        $l
      );
      if (l !== null) {
        Mt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    le === 0 && (le = 5);
  }
  function Jr(t, e) {
    do {
      var l = D2(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, Mt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        Mt = t;
        return;
      }
      Mt = t = l;
    } while (t !== null);
    le = 6, Mt = null;
  }
  function kr(t, e, l, a, n, i, o, m, S) {
    t.cancelPendingCommit = null;
    do
      oc();
    while (ge !== 0);
    if ((Ct & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= uo, du(
        t,
        l,
        i,
        o,
        m,
        S
      ), t === Qt && (Mt = Qt = null, zt = 0), Wn = e, Ea = t, Il = l, pf = i, yf = n, qr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, X2(La, function() {
        return Pr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null, n = K.p, K.p = 2, o = Ct, Ct |= 4;
        try {
          U2(t, e, l);
        } finally {
          Ct = o, K.p = n, C.T = a;
        }
      }
      ge = 1, Fr(), Wr(), $r();
    }
  }
  function Fr() {
    if (ge === 1) {
      ge = 0;
      var t = Ea, e = Wn, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null;
        var a = K.p;
        K.p = 2;
        var n = Ct;
        Ct |= 4;
        try {
          jr(e, t);
          var i = Of, o = Bs(t.containerInfo), m = i.focusedElem, S = i.selectionRange;
          if (o !== m && m && m.ownerDocument && Ns(
            m.ownerDocument.documentElement,
            m
          )) {
            if (S !== null && eo(m)) {
              var j = S.start, B = S.end;
              if (B === void 0 && (B = j), "selectionStart" in m)
                m.selectionStart = j, m.selectionEnd = Math.min(
                  B,
                  m.value.length
                );
              else {
                var q = m.ownerDocument || document, D = q && q.defaultView || window;
                if (D.getSelection) {
                  var O = D.getSelection(), I = m.textContent.length, ot = Math.min(S.start, I), Yt = S.end === void 0 ? ot : Math.min(S.end, I);
                  !O.extend && ot > Yt && (o = Yt, Yt = ot, ot = o);
                  var z = Cs(
                    m,
                    ot
                  ), A = Cs(
                    m,
                    Yt
                  );
                  if (z && A && (O.rangeCount !== 1 || O.anchorNode !== z.node || O.anchorOffset !== z.offset || O.focusNode !== A.node || O.focusOffset !== A.offset)) {
                    var _ = q.createRange();
                    _.setStart(z.node, z.offset), O.removeAllRanges(), ot > Yt ? (O.addRange(_), O.extend(A.node, A.offset)) : (_.setEnd(A.node, A.offset), O.addRange(_));
                  }
                }
              }
            }
            for (q = [], O = m; O = O.parentNode; )
              O.nodeType === 1 && q.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < q.length; m++) {
              var H = q[m];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Sc = !!Uf, Of = Uf = null;
        } finally {
          Ct = n, K.p = a, C.T = l;
        }
      }
      t.current = e, ge = 2;
    }
  }
  function Wr() {
    if (ge === 2) {
      ge = 0;
      var t = Ea, e = Wn, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = C.T, C.T = null;
        var a = K.p;
        K.p = 2;
        var n = Ct;
        Ct |= 4;
        try {
          Tr(t, e.alternate, e);
        } finally {
          Ct = n, K.p = a, C.T = l;
        }
      }
      ge = 3;
    }
  }
  function $r() {
    if (ge === 4 || ge === 3) {
      ge = 0, wc();
      var t = Ea, e = Wn, l = Il, a = qr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ge = 5 : (ge = 0, Wn = Ea = null, Ir(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (za = null), x(l), e = e.stateNode, ce && typeof ce.onCommitFiberRoot == "function")
        try {
          ce.onCommitFiberRoot(
            na,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = C.T, n = K.p, K.p = 2, C.T = null;
        try {
          for (var i = t.onRecoverableError, o = 0; o < a.length; o++) {
            var m = a[o];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          C.T = e, K.p = n;
        }
      }
      (Il & 3) !== 0 && oc(), _l(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === vf ? Zi++ : (Zi = 0, vf = t) : Zi = 0, Ki(0);
    }
  }
  function Ir(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ei(e)));
  }
  function oc() {
    return Fr(), Wr(), $r(), Pr();
  }
  function Pr() {
    if (ge !== 5) return !1;
    var t = Ea, e = pf;
    pf = 0;
    var l = x(Il), a = C.T, n = K.p;
    try {
      K.p = 32 > l ? 32 : l, C.T = null, l = yf, yf = null;
      var i = Ea, o = Il;
      if (ge = 0, Wn = Ea = null, Il = 0, (Ct & 6) !== 0) throw Error(r(331));
      var m = Ct;
      if (Ct |= 4, Nr(i.current), Ur(
        i,
        i.current,
        o,
        l
      ), Ct = m, Ki(0, !1), ce && typeof ce.onPostCommitFiberRoot == "function")
        try {
          ce.onPostCommitFiberRoot(na, i);
        } catch {
        }
      return !0;
    } finally {
      K.p = n, C.T = a, Ir(t, e);
    }
  }
  function td(t, e, l) {
    e = ll(l, e), e = Fo(t.stateNode, e, 2), t = ba(t, e, 2), t !== null && (vt(t, 2), _l(t));
  }
  function Ht(t, e, l) {
    if (t.tag === 3)
      td(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          td(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (za === null || !za.has(a))) {
            t = ll(l, t), l = er(2), a = ba(e, l, 2), a !== null && (lr(
              l,
              a,
              e,
              t
            ), vt(a, 2), _l(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function xf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new N2();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (hf = !0, n.add(l), t = Y2.bind(null, t, e, l), e.then(t, t));
  }
  function Y2(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Qt === t && (zt & l) === l && (le === 4 || le === 3 && (zt & 62914560) === zt && 300 > De() - lc ? (Ct & 2) === 0 && $n(t, 0) : mf |= l, Fn === zt && (Fn = 0)), _l(t);
  }
  function ed(t, e) {
    e === 0 && (e = xt()), t = ka(t, e), t !== null && (vt(t, e), _l(t));
  }
  function L2(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ed(t, l);
  }
  function G2(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), ed(t, l);
  }
  function X2(t, e) {
    return Ul(t, e);
  }
  var fc = null, Pn = null, Af = !1, sc = !1, Mf = !1, _a = 0;
  function _l(t) {
    t !== Pn && t.next === null && (Pn === null ? fc = Pn = t : Pn = Pn.next = t), sc = !0, Af || (Af = !0, V2());
  }
  function Ki(t, e) {
    if (!Mf && sc) {
      Mf = !0;
      do
        for (var l = !1, a = fc; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var o = a.suspendedLanes, m = a.pingedLanes;
              i = (1 << 31 - Re(42 | t) + 1) - 1, i &= n & ~(o & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, id(a, i));
          } else
            i = zt, i = Cl(
              a,
              a === Qt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || xe(a, i) || (l = !0, id(a, i));
          a = a.next;
        }
      while (l);
      Mf = !1;
    }
  }
  function Q2() {
    ld();
  }
  function ld() {
    sc = Af = !1;
    var t = 0;
    _a !== 0 && th() && (t = _a);
    for (var e = De(), l = null, a = fc; a !== null; ) {
      var n = a.next, i = ad(a, e);
      i === 0 ? (a.next = null, l === null ? fc = n : l.next = n, n === null && (Pn = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (sc = !0)), a = n;
    }
    ge !== 0 && ge !== 5 || Ki(t), _a !== 0 && (_a = 0);
  }
  function ad(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - Re(i), m = 1 << o, S = n[o];
      S === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[o] = Z(m, e)) : S <= e && (t.expiredLanes |= m), i &= ~m;
    }
    if (e = Qt, l = zt, l = Cl(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Al(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || xe(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Al(a), x(l)) {
        case 2:
        case 8:
          l = hn;
          break;
        case 32:
          l = La;
          break;
        case 268435456:
          l = ve;
          break;
        default:
          l = La;
      }
      return a = nd.bind(null, t), l = Ul(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Al(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function nd(t, e) {
    if (ge !== 0 && ge !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (oc() && t.callbackNode !== l)
      return null;
    var a = zt;
    return a = Cl(
      t,
      t === Qt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Yr(t, a, e), ad(t, De()), t.callbackNode != null && t.callbackNode === l ? nd.bind(null, t) : null);
  }
  function id(t, e) {
    if (oc()) return null;
    Yr(t, e, !0);
  }
  function V2() {
    lh(function() {
      (Ct & 6) !== 0 ? Ul(
        Ya,
        Q2
      ) : ld();
    });
  }
  function Tf() {
    if (_a === 0) {
      var t = wn;
      t === 0 && (t = Ga, Ga <<= 1, (Ga & 261888) === 0 && (Ga = 256)), _a = t;
    }
    return _a;
  }
  function ud(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zn("" + t);
  }
  function cd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Z2(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = ud(
        (n[me] || null).action
      ), o = a.submitter;
      o && (e = (e = o[me] || null) ? ud(e.formAction) : o.getAttribute("formAction"), e !== null && (i = e, o = null));
      var m = new Au(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (_a !== 0) {
                  var S = o ? cd(n, o) : new FormData(n);
                  Qo(
                    l,
                    {
                      pending: !0,
                      data: S,
                      method: n.method,
                      action: i
                    },
                    null,
                    S
                  );
                }
              } else
                typeof i == "function" && (m.preventDefault(), S = o ? cd(n, o) : new FormData(n), Qo(
                  l,
                  {
                    pending: !0,
                    data: S,
                    method: n.method,
                    action: i
                  },
                  i,
                  S
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var zf = 0; zf < io.length; zf++) {
    var Ef = io[zf], K2 = Ef.toLowerCase(), J2 = Ef[0].toUpperCase() + Ef.slice(1);
    pl(
      K2,
      "on" + J2
    );
  }
  pl(ws, "onAnimationEnd"), pl(Ys, "onAnimationIteration"), pl(Ls, "onAnimationStart"), pl("dblclick", "onDoubleClick"), pl("focusin", "onFocus"), pl("focusout", "onBlur"), pl(f2, "onTransitionRun"), pl(s2, "onTransitionStart"), pl(r2, "onTransitionCancel"), pl(Gs, "onTransitionEnd"), ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]), dl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), k2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ji)
  );
  function od(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = a.length - 1; 0 <= o; o--) {
            var m = a[o], S = m.instance, j = m.currentTarget;
            if (m = m.listener, S !== i && n.isPropagationStopped())
              break t;
            i = m, n.currentTarget = j;
            try {
              i(n);
            } catch (B) {
              zu(B);
            }
            n.currentTarget = null, i = S;
          }
        else
          for (o = 0; o < a.length; o++) {
            if (m = a[o], S = m.instance, j = m.currentTarget, m = m.listener, S !== i && n.isPropagationStopped())
              break t;
            i = m, n.currentTarget = j;
            try {
              i(n);
            } catch (B) {
              zu(B);
            }
            n.currentTarget = null, i = S;
          }
      }
    }
  }
  function Tt(t, e) {
    var l = e[ia];
    l === void 0 && (l = e[ia] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (fd(e, t, 2, !1), l.add(a));
  }
  function Rf(t, e, l) {
    var a = 0;
    e && (a |= 4), fd(
      l,
      t,
      a,
      e
    );
  }
  var rc = "_reactListening" + Math.random().toString(36).slice(2);
  function _f(t) {
    if (!t[rc]) {
      t[rc] = !0, hu.forEach(function(l) {
        l !== "selectionchange" && (k2.has(l) || Rf(l, !1, t), Rf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[rc] || (e[rc] = !0, Rf("selectionchange", !1, e));
    }
  }
  function fd(t, e, l, a) {
    switch (wd(e)) {
      case 2:
        var n = Ah;
        break;
      case 8:
        n = Mh;
        break;
      default:
        n = Qf;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Kc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function jf(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var o = a.tag;
        if (o === 3 || o === 4) {
          var m = a.stateNode.containerInfo;
          if (m === n) break;
          if (o === 4)
            for (o = a.return; o !== null; ) {
              var S = o.tag;
              if ((S === 3 || S === 4) && o.stateNode.containerInfo === n)
                return;
              o = o.return;
            }
          for (; m !== null; ) {
            if (o = Nl(m), o === null) return;
            if (S = o.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = i = o;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    ms(function() {
      var j = i, B = Vc(l), q = [];
      t: {
        var D = Xs.get(t);
        if (D !== void 0) {
          var O = Au, I = t;
          switch (t) {
            case "keypress":
              if (Su(l) === 0) break t;
            case "keydown":
            case "keyup":
              O = G1;
              break;
            case "focusin":
              I = "focus", O = Wc;
              break;
            case "focusout":
              I = "blur", O = Wc;
              break;
            case "beforeblur":
            case "afterblur":
              O = Wc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = j1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = V1;
              break;
            case ws:
            case Ys:
            case Ls:
              O = O1;
              break;
            case Gs:
              O = K1;
              break;
            case "scroll":
            case "scrollend":
              O = R1;
              break;
            case "wheel":
              O = k1;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = N1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = bs;
              break;
            case "toggle":
            case "beforetoggle":
              O = W1;
          }
          var ot = (e & 4) !== 0, Yt = !ot && (t === "scroll" || t === "scrollend"), z = ot ? D !== null ? D + "Capture" : null : D;
          ot = [];
          for (var A = j, _; A !== null; ) {
            var H = A;
            if (_ = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || _ === null || z === null || (H = gi(A, z), H != null && ot.push(
              ki(A, H, _)
            )), Yt) break;
            A = A.return;
          }
          0 < ot.length && (D = new O(
            D,
            I,
            null,
            l,
            B
          ), q.push({ event: D, listeners: ot }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", O = t === "mouseout" || t === "pointerout", D && l !== En && (I = l.relatedTarget || l.fromElement) && (Nl(I) || I[Ml]))
            break t;
          if ((O || D) && (D = B.window === B ? B : (D = B.ownerDocument) ? D.defaultView || D.parentWindow : window, O ? (I = l.relatedTarget || l.toElement, O = j, I = I ? Nl(I) : null, I !== null && (Yt = v(I), ot = I.tag, I !== Yt || ot !== 5 && ot !== 27 && ot !== 6) && (I = null)) : (O = null, I = j), O !== I)) {
            if (ot = ys, H = "onMouseLeave", z = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (ot = bs, H = "onPointerLeave", z = "onPointerEnter", A = "pointer"), Yt = O == null ? D : Va(O), _ = I == null ? D : Va(I), D = new ot(
              H,
              A + "leave",
              O,
              l,
              B
            ), D.target = Yt, D.relatedTarget = _, H = null, Nl(B) === j && (ot = new ot(
              z,
              A + "enter",
              I,
              l,
              B
            ), ot.target = _, ot.relatedTarget = Yt, H = ot), Yt = H, O && I)
              e: {
                for (ot = F2, z = O, A = I, _ = 0, H = z; H; H = ot(H))
                  _++;
                H = 0;
                for (var nt = A; nt; nt = ot(nt))
                  H++;
                for (; 0 < _ - H; )
                  z = ot(z), _--;
                for (; 0 < H - _; )
                  A = ot(A), H--;
                for (; _--; ) {
                  if (z === A || A !== null && z === A.alternate) {
                    ot = z;
                    break e;
                  }
                  z = ot(z), A = ot(A);
                }
                ot = null;
              }
            else ot = null;
            O !== null && sd(
              q,
              D,
              O,
              ot,
              !1
            ), I !== null && Yt !== null && sd(
              q,
              Yt,
              I,
              ot,
              !0
            );
          }
        }
        t: {
          if (D = j ? Va(j) : window, O = D.nodeName && D.nodeName.toLowerCase(), O === "select" || O === "input" && D.type === "file")
            var Dt = Rs;
          else if (zs(D))
            if (_s)
              Dt = u2;
            else {
              Dt = n2;
              var tt = a2;
            }
          else
            O = D.nodeName, !O || O.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? j && Tn(j.elementType) && (Dt = Rs) : Dt = i2;
          if (Dt && (Dt = Dt(t, j))) {
            Es(
              q,
              Dt,
              l,
              B
            );
            break t;
          }
          tt && tt(t, D, j), t === "focusout" && j && D.type === "number" && j.memoizedProps.value != null && mi(D, "number", D.value);
        }
        switch (tt = j ? Va(j) : window, t) {
          case "focusin":
            (zs(tt) || tt.contentEditable === "true") && (Dn = tt, lo = j, Mi = null);
            break;
          case "focusout":
            Mi = lo = Dn = null;
            break;
          case "mousedown":
            ao = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ao = !1, Hs(q, l, B);
            break;
          case "selectionchange":
            if (o2) break;
          case "keydown":
          case "keyup":
            Hs(q, l, B);
        }
        var bt;
        if (Ic)
          t: {
            switch (t) {
              case "compositionstart":
                var Et = "onCompositionStart";
                break t;
              case "compositionend":
                Et = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Et = "onCompositionUpdate";
                break t;
            }
            Et = void 0;
          }
        else
          jn ? Ms(t, l) && (Et = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (Et = "onCompositionStart");
        Et && (Ss && l.locale !== "ko" && (jn || Et !== "onCompositionStart" ? Et === "onCompositionEnd" && jn && (bt = gs()) : (da = B, Jc = "value" in da ? da.value : da.textContent, jn = !0)), tt = dc(j, Et), 0 < tt.length && (Et = new vs(
          Et,
          t,
          null,
          l,
          B
        ), q.push({ event: Et, listeners: tt }), bt ? Et.data = bt : (bt = Ts(l), bt !== null && (Et.data = bt)))), (bt = I1 ? P1(t, l) : t2(t, l)) && (Et = dc(j, "onBeforeInput"), 0 < Et.length && (tt = new vs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          B
        ), q.push({
          event: tt,
          listeners: Et
        }), tt.data = bt)), Z2(
          q,
          t,
          j,
          l,
          B
        );
      }
      od(q, e);
    });
  }
  function ki(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function dc(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = gi(t, l), n != null && a.unshift(
        ki(t, n, i)
      ), n = gi(t, e), n != null && a.push(
        ki(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function F2(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sd(t, e, l, a, n) {
    for (var i = e._reactName, o = []; l !== null && l !== a; ) {
      var m = l, S = m.alternate, j = m.stateNode;
      if (m = m.tag, S !== null && S === a) break;
      m !== 5 && m !== 26 && m !== 27 || j === null || (S = j, n ? (j = gi(l, i), j != null && o.unshift(
        ki(l, j, S)
      )) : n || (j = gi(l, i), j != null && o.push(
        ki(l, j, S)
      ))), l = l.return;
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var W2 = /\r\n?/g, $2 = /\u0000|\uFFFD/g;
  function rd(t) {
    return (typeof t == "string" ? t : "" + t).replace(W2, `
`).replace($2, "");
  }
  function dd(t, e) {
    return e = rd(e), rd(t) === e;
  }
  function wt(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || sa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && sa(t, "" + a);
        break;
      case "className":
        xn(t, "class", a);
        break;
      case "tabIndex":
        xn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xn(t, l, a);
        break;
      case "style":
        Xc(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          xn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = zn("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && wt(t, e, "name", n.name, n, null), wt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), wt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), wt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (wt(t, e, "encType", n.encType, n, null), wt(t, e, "method", n.method, n, null), wt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = zn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = gl);
        break;
      case "onScroll":
        a != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        l = zn("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        Tt("beforetoggle", t), Tt("toggle", t), fa(t, "popover", a);
        break;
      case "xlinkActuate":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        hl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        hl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        fa(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ml.get(l) || l, fa(t, l, a));
    }
  }
  function Df(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        Xc(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? sa(t, a) : (typeof a == "number" || typeof a == "bigint") && sa(t, "" + a);
        break;
      case "onScroll":
        a != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = gl);
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
        if (!bn.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), i = t[me] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : fa(t, l, a);
          }
    }
  }
  function ze(t, e, l) {
    switch (e) {
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
        Tt("error", t), Tt("load", t);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  wt(t, e, i, o, l, null);
              }
          }
        n && wt(t, e, "srcSet", l.srcSet, l, null), a && wt(t, e, "src", l.src, l, null);
        return;
      case "input":
        Tt("invalid", t);
        var m = i = o = n = null, S = null, j = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var B = l[a];
            if (B != null)
              switch (a) {
                case "name":
                  n = B;
                  break;
                case "type":
                  o = B;
                  break;
                case "checked":
                  S = B;
                  break;
                case "defaultChecked":
                  j = B;
                  break;
                case "value":
                  i = B;
                  break;
                case "defaultValue":
                  m = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(r(137, e));
                  break;
                default:
                  wt(t, e, a, B, l, null);
              }
          }
        pu(
          t,
          i,
          m,
          S,
          j,
          o,
          n,
          !1
        );
        return;
      case "select":
        Tt("invalid", t), a = o = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (m = l[n], m != null))
            switch (n) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                o = m;
                break;
              case "multiple":
                a = m;
              default:
                wt(t, e, n, m, l, null);
            }
        e = i, l = o, t.multiple = !!a, e != null ? ql(t, !!a, e, !1) : l != null && ql(t, !!a, l, !0);
        return;
      case "textarea":
        Tt("invalid", t), i = n = a = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (m = l[o], m != null))
            switch (o) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                n = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(91));
                break;
              default:
                wt(t, e, o, m, l, null);
            }
        vu(t, a, n, i);
        return;
      case "option":
        for (S in l)
          l.hasOwnProperty(S) && (a = l[S], a != null) && (S === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : wt(t, e, S, a, l, null));
        return;
      case "dialog":
        Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ji.length; a++)
          Tt(Ji[a], t);
        break;
      case "image":
        Tt("error", t), Tt("load", t);
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Tt("error", t), Tt("load", t);
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
        for (j in l)
          if (l.hasOwnProperty(j) && (a = l[j], a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                wt(t, e, j, a, l, null);
            }
        return;
      default:
        if (Tn(e)) {
          for (B in l)
            l.hasOwnProperty(B) && (a = l[B], a !== void 0 && Df(
              t,
              e,
              B,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && (a = l[m], a != null && wt(t, e, m, a, l, null));
  }
  function I2(t, e, l, a) {
    switch (e) {
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
        var n = null, i = null, o = null, m = null, S = null, j = null, B = null;
        for (O in l) {
          var q = l[O];
          if (l.hasOwnProperty(O) && q != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                a.hasOwnProperty(O) || wt(t, e, O, null, a, q);
            }
        }
        for (var D in a) {
          var O = a[D];
          if (q = l[D], a.hasOwnProperty(D) && (O != null || q != null))
            switch (D) {
              case "type":
                i = O;
                break;
              case "name":
                n = O;
                break;
              case "checked":
                j = O;
                break;
              case "defaultChecked":
                B = O;
                break;
              case "value":
                o = O;
                break;
              case "defaultValue":
                m = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, e));
                break;
              default:
                O !== q && wt(
                  t,
                  e,
                  D,
                  O,
                  a,
                  q
                );
            }
        }
        hi(
          t,
          o,
          m,
          S,
          j,
          B,
          i,
          n
        );
        return;
      case "select":
        O = o = m = D = null;
        for (i in l)
          if (S = l[i], l.hasOwnProperty(i) && S != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                a.hasOwnProperty(i) || wt(
                  t,
                  e,
                  i,
                  null,
                  a,
                  S
                );
            }
        for (n in a)
          if (i = a[n], S = l[n], a.hasOwnProperty(n) && (i != null || S != null))
            switch (n) {
              case "value":
                D = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== S && wt(
                  t,
                  e,
                  n,
                  i,
                  a,
                  S
                );
            }
        e = m, l = o, a = O, D != null ? ql(t, !!l, D, !1) : !!a != !!l && (e != null ? ql(t, !!l, e, !0) : ql(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = D = null;
        for (m in l)
          if (n = l[m], l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                wt(t, e, m, null, a, n);
            }
        for (o in a)
          if (n = a[o], i = l[o], a.hasOwnProperty(o) && (n != null || i != null))
            switch (o) {
              case "value":
                D = n;
                break;
              case "defaultValue":
                O = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && wt(t, e, o, n, a, i);
            }
        yu(t, D, O);
        return;
      case "option":
        for (var I in l)
          D = l[I], l.hasOwnProperty(I) && D != null && !a.hasOwnProperty(I) && (I === "selected" ? t.selected = !1 : wt(
            t,
            e,
            I,
            null,
            a,
            D
          ));
        for (S in a)
          D = a[S], O = l[S], a.hasOwnProperty(S) && D !== O && (D != null || O != null) && (S === "selected" ? t.selected = D && typeof D != "function" && typeof D != "symbol" : wt(
            t,
            e,
            S,
            D,
            a,
            O
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
        for (var ot in l)
          D = l[ot], l.hasOwnProperty(ot) && D != null && !a.hasOwnProperty(ot) && wt(t, e, ot, null, a, D);
        for (j in a)
          if (D = a[j], O = l[j], a.hasOwnProperty(j) && D !== O && (D != null || O != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(r(137, e));
                break;
              default:
                wt(
                  t,
                  e,
                  j,
                  D,
                  a,
                  O
                );
            }
        return;
      default:
        if (Tn(e)) {
          for (var Yt in l)
            D = l[Yt], l.hasOwnProperty(Yt) && D !== void 0 && !a.hasOwnProperty(Yt) && Df(
              t,
              e,
              Yt,
              void 0,
              a,
              D
            );
          for (B in a)
            D = a[B], O = l[B], !a.hasOwnProperty(B) || D === O || D === void 0 && O === void 0 || Df(
              t,
              e,
              B,
              D,
              a,
              O
            );
          return;
        }
    }
    for (var z in l)
      D = l[z], l.hasOwnProperty(z) && D != null && !a.hasOwnProperty(z) && wt(t, e, z, null, a, D);
    for (q in a)
      D = a[q], O = l[q], !a.hasOwnProperty(q) || D === O || D == null && O == null || wt(t, e, q, D, a, O);
  }
  function hd(t) {
    switch (t) {
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
  function P2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, o = n.initiatorType, m = n.duration;
        if (i && m && hd(o)) {
          for (o = 0, m = n.responseEnd, a += 1; a < l.length; a++) {
            var S = l[a], j = S.startTime;
            if (j > m) break;
            var B = S.transferSize, q = S.initiatorType;
            B && hd(q) && (S = S.responseEnd, o += B * (S < m ? 1 : (m - j) / (S - j)));
          }
          if (--a, e += 8 * (i + o) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Uf = null, Of = null;
  function hc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function md(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Cf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function th() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Nf ? !1 : (Nf = t, !0) : (Nf = null, !1);
  }
  var pd = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, lh = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(t) {
    return yd.resolve(null).then(t).catch(ah);
  } : pd;
  function ah(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ja(t) {
    return t === "head";
  }
  function vd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), ai(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Fi(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Fi(l);
          for (var i = l.firstChild; i; ) {
            var o = i.nextSibling, m = i.nodeName;
            i[Qa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = o;
          }
        } else
          l === "body" && Fi(t.ownerDocument.body);
      l = n;
    } while (l);
    ai(e);
  }
  function bd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function Bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bf(l), si(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function nh(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Qa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = cl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function ih(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Sd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Hf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function qf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function uh(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function cl(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var wf = null;
  function xd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return cl(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ad(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Md(t, e, l) {
    switch (e = hc(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Fi(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    si(t);
  }
  var ol = /* @__PURE__ */ new Map(), Td = /* @__PURE__ */ new Set();
  function mc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pl = K.d;
  K.d = {
    f: ch,
    r: oh,
    D: fh,
    C: sh,
    L: rh,
    m: dh,
    X: mh,
    S: hh,
    M: gh
  };
  function ch() {
    var t = Pl.f(), e = ic();
    return t || e;
  }
  function oh(t) {
    var e = Bl(t);
    e !== null && e.tag === 5 && e.type === "form" ? G0(e) : Pl.r(t);
  }
  var ti = typeof document > "u" ? null : document;
  function zd(t, e, l) {
    var a = ti;
    if (a && typeof e == "string" && e) {
      var n = _e(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Td.has(n) || (Td.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), ze(e, "link", t), oe(e), a.head.appendChild(e)));
    }
  }
  function fh(t) {
    Pl.D(t), zd("dns-prefetch", t, null);
  }
  function sh(t, e) {
    Pl.C(t, e), zd("preconnect", t, e);
  }
  function rh(t, e, l) {
    Pl.L(t, e, l);
    var a = ti;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + _e(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + _e(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + _e(
        l.imageSizes
      ) + '"]')) : n += '[href="' + _e(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = ei(t);
          break;
        case "script":
          i = li(t);
      }
      ol.has(i) || (t = E(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), ol.set(i, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Wi(i)) || e === "script" && a.querySelector($i(i)) || (e = a.createElement("link"), ze(e, "link", t), oe(e), a.head.appendChild(e)));
    }
  }
  function dh(t, e) {
    Pl.m(t, e);
    var l = ti;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + _e(a) + '"][href="' + _e(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = li(t);
      }
      if (!ol.has(i) && (t = E({ rel: "modulepreload", href: t }, e), ol.set(i, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector($i(i)))
              return;
        }
        a = l.createElement("link"), ze(a, "link", t), oe(a), l.head.appendChild(a);
      }
    }
  }
  function hh(t, e, l) {
    Pl.S(t, e, l);
    var a = ti;
    if (a && t) {
      var n = ua(a).hoistableStyles, i = ei(t);
      e = e || "default";
      var o = n.get(i);
      if (!o) {
        var m = { loading: 0, preload: null };
        if (o = a.querySelector(
          Wi(i)
        ))
          m.loading = 5;
        else {
          t = E(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = ol.get(i)) && Yf(t, l);
          var S = o = a.createElement("link");
          oe(S), ze(S, "link", t), S._p = new Promise(function(j, B) {
            S.onload = j, S.onerror = B;
          }), S.addEventListener("load", function() {
            m.loading |= 1;
          }), S.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, gc(o, e, a);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: m
        }, n.set(i, o);
      }
    }
  }
  function mh(t, e) {
    Pl.X(t, e);
    var l = ti;
    if (l && t) {
      var a = ua(l).hoistableScripts, n = li(t), i = a.get(n);
      i || (i = l.querySelector($i(n)), i || (t = E({ src: t, async: !0 }, e), (e = ol.get(n)) && Lf(t, e), i = l.createElement("script"), oe(i), ze(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function gh(t, e) {
    Pl.M(t, e);
    var l = ti;
    if (l && t) {
      var a = ua(l).hoistableScripts, n = li(t), i = a.get(n);
      i || (i = l.querySelector($i(n)), i || (t = E({ src: t, async: !0, type: "module" }, e), (e = ol.get(n)) && Lf(t, e), i = l.createElement("script"), oe(i), ze(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Ed(t, e, l, a) {
    var n = (n = ct.current) ? mc(n) : null;
    if (!n) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = ei(l.href), l = ua(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = ei(l.href);
          var i = ua(
            n
          ).hoistableStyles, o = i.get(t);
          if (o || (n = n.ownerDocument || n, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, o), (i = n.querySelector(
            Wi(t)
          )) && !i._p && (o.instance = i, o.state.loading = 5), ol.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ol.set(t, l), i || ph(
            n,
            t,
            l,
            o.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return o;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = li(l), l = ua(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function ei(t) {
    return 'href="' + _e(t) + '"';
  }
  function Wi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Rd(t) {
    return E({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ph(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ze(e, "link", l), oe(e), t.head.appendChild(e));
  }
  function li(t) {
    return '[src="' + _e(t) + '"]';
  }
  function $i(t) {
    return "script[async]" + t;
  }
  function _d(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + _e(l.href) + '"]'
          );
          if (a)
            return e.instance = a, oe(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), oe(a), ze(a, "style", n), gc(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = ei(l.href);
          var i = t.querySelector(
            Wi(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, oe(i), i;
          a = Rd(l), (n = ol.get(n)) && Yf(a, n), i = (t.ownerDocument || t).createElement("link"), oe(i);
          var o = i;
          return o._p = new Promise(function(m, S) {
            o.onload = m, o.onerror = S;
          }), ze(i, "link", a), e.state.loading |= 4, gc(i, l.precedence, t), e.instance = i;
        case "script":
          return i = li(l.src), (n = t.querySelector(
            $i(i)
          )) ? (e.instance = n, oe(n), n) : (a = l, (n = ol.get(i)) && (a = E({}, l), Lf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), oe(n), ze(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, gc(a, l.precedence, t));
    return e.instance;
  }
  function gc(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, o = 0; o < a.length; o++) {
      var m = a[o];
      if (m.dataset.precedence === e) i = m;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Yf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Lf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var pc = null;
  function jd(t, e, l) {
    if (pc === null) {
      var a = /* @__PURE__ */ new Map(), n = pc = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = pc, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Qa] || i[te] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = i.getAttribute(e) || "";
        o = t + o;
        var m = a.get(o);
        m ? m.push(i) : a.set(o, [i]);
      }
    }
    return a;
  }
  function Dd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function yh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Ud(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function vh(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = ei(a.href), i = e.querySelector(
          Wi(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = yc.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, oe(i);
          return;
        }
        i = e.ownerDocument || e, a = Rd(a), (n = ol.get(n)) && Yf(a, n), i = i.createElement("link"), oe(i);
        var o = i;
        o._p = new Promise(function(m, S) {
          o.onload = m, o.onerror = S;
        }), ze(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = yc.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Gf = 0;
  function bh(t, e) {
    return t.stylesheets && t.count === 0 && bc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && bc(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Gf === 0 && (Gf = 62500 * P2());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && bc(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > Gf ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function yc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) bc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vc = null;
  function bc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vc = /* @__PURE__ */ new Map(), e.forEach(Sh, t), vc = null, yc.call(t));
  }
  function Sh(t, e) {
    if (!(e.state.loading & 4)) {
      var l = vc.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), vc.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var o = n[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), a = o);
        }
        a && l.set(null, a);
      }
      n = e.instance, o = n.getAttribute("data-precedence"), i = l.get(o) || a, i === a && l.set(null, n), l.set(o, n), this.count++, a = yc.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ii = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ut,
    _currentValue2: ut,
    _threadCount: 0
  };
  function xh(t, e, l, a, n, i, o, m, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pt(0), this.hiddenUpdates = Pt(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Od(t, e, l, a, n, i, o, m, S, j, B, q) {
    return t = new xh(
      t,
      e,
      l,
      o,
      S,
      j,
      B,
      q,
      m
    ), e = 1, i === !0 && (e |= 24), i = Ve(3, null, null, e), t.current = i, i.stateNode = t, e = bo(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Mo(i), t;
  }
  function Cd(t) {
    return t ? (t = Cn, t) : Cn;
  }
  function Nd(t, e, l, a, n, i) {
    n = Cd(n), a.context === null ? a.context = n : a.pendingContext = n, a = va(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = ba(t, a, e), l !== null && (Le(l, t, e), Di(l, t, e));
  }
  function Bd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Xf(t, e) {
    Bd(t, e), (t = t.alternate) && Bd(t, e);
  }
  function Hd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ka(t, 67108864);
      e !== null && Le(e, t, 67108864), Xf(t, 67108864);
    }
  }
  function qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fe();
      e = ft(e);
      var l = ka(t, e);
      l !== null && Le(l, t, e), Xf(t, e);
    }
  }
  var Sc = !0;
  function Ah(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var i = K.p;
    try {
      K.p = 2, Qf(t, e, l, a);
    } finally {
      K.p = i, C.T = n;
    }
  }
  function Mh(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var i = K.p;
    try {
      K.p = 8, Qf(t, e, l, a);
    } finally {
      K.p = i, C.T = n;
    }
  }
  function Qf(t, e, l, a) {
    if (Sc) {
      var n = Vf(a);
      if (n === null)
        jf(
          t,
          e,
          a,
          xc,
          l
        ), Yd(t, a);
      else if (zh(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Yd(t, a), e & 4 && -1 < Th.indexOf(t)) {
        for (; n !== null; ) {
          var i = Bl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var o = tl(i.pendingLanes);
                  if (o !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; o; ) {
                      var S = 1 << 31 - Re(o);
                      m.entanglements[1] |= S, o &= ~S;
                    }
                    _l(i), (Ct & 6) === 0 && (ac = De() + 500, Ki(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = ka(i, 2), m !== null && Le(m, i, 2), ic(), Xf(i, 2);
            }
          if (i = Vf(a), i === null && jf(
            t,
            e,
            a,
            xc,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        jf(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function Vf(t) {
    return t = Vc(t), Zf(t);
  }
  var xc = null;
  function Zf(t) {
    if (xc = null, t = Nl(t), t !== null) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = T(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = M(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return xc = t, null;
  }
  function wd(t) {
    switch (t) {
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
        switch (dn()) {
          case Ya:
            return 2;
          case hn:
            return 8;
          case La:
          case fu:
            return 32;
          case ve:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kf = !1, Da = null, Ua = null, Oa = null, Pi = /* @__PURE__ */ new Map(), tu = /* @__PURE__ */ new Map(), Ca = [], Th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Yd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Da = null;
        break;
      case "dragenter":
      case "dragleave":
        Ua = null;
        break;
      case "mouseover":
      case "mouseout":
        Oa = null;
        break;
      case "pointerover":
      case "pointerout":
        Pi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tu.delete(e.pointerId);
    }
  }
  function eu(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = Bl(e), e !== null && Hd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function zh(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Da = eu(
          Da,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Ua = eu(
          Ua,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Oa = eu(
          Oa,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Pi.set(
          i,
          eu(
            Pi.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, tu.set(
          i,
          eu(
            tu.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Ld(t) {
    var e = Nl(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = T(l), e !== null) {
            t.blockedOn = e, Xt(t.priority, function() {
              qd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = M(l), e !== null) {
            t.blockedOn = e, Xt(t.priority, function() {
              qd(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ac(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Vf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        En = a, l.target.dispatchEvent(a), En = null;
      } else
        return e = Bl(l), e !== null && Hd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Gd(t, e, l) {
    Ac(t) && l.delete(e);
  }
  function Eh() {
    Kf = !1, Da !== null && Ac(Da) && (Da = null), Ua !== null && Ac(Ua) && (Ua = null), Oa !== null && Ac(Oa) && (Oa = null), Pi.forEach(Gd), tu.forEach(Gd);
  }
  function Mc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Kf || (Kf = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Eh
    )));
  }
  var Tc = null;
  function Xd(t) {
    Tc !== t && (Tc = t, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Tc === t && (Tc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Zf(a || l) === null)
              continue;
            break;
          }
          var i = Bl(l);
          i !== null && (t.splice(e, 3), e -= 3, Qo(
            i,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function ai(t) {
    function e(S) {
      return Mc(S, t);
    }
    Da !== null && Mc(Da, t), Ua !== null && Mc(Ua, t), Oa !== null && Mc(Oa, t), Pi.forEach(e), tu.forEach(e);
    for (var l = 0; l < Ca.length; l++) {
      var a = Ca[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ca.length && (l = Ca[0], l.blockedOn === null); )
      Ld(l), l.blockedOn === null && Ca.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], o = n[me] || null;
        if (typeof i == "function")
          o || Xd(l);
        else if (o) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, o = i[me] || null)
              m = o.formAction;
            else if (Zf(n) !== null) continue;
          } else m = o.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), Xd(l);
        }
      }
  }
  function Qd() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(o) {
            return n = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Jf(t) {
    this._internalRoot = t;
  }
  zc.prototype.render = Jf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, a = Fe();
    Nd(l, a, t, e, null, null);
  }, zc.prototype.unmount = Jf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Nd(t.current, 2, null, t, null, null), ic(), e[Ml] = null;
    }
  };
  function zc(t) {
    this._internalRoot = t;
  }
  zc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Ot();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ca.length && e !== 0 && e < Ca[l].priority; l++) ;
      Ca.splice(l, 0, t), l === 0 && Ld(t);
    }
  };
  var Vd = c.version;
  if (Vd !== "19.2.4")
    throw Error(
      r(
        527,
        Vd,
        "19.2.4"
      )
    );
  K.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = b(e), t = t !== null ? U(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Rh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ec.isDisabled && Ec.supportsFiber)
      try {
        na = Ec.inject(
          Rh
        ), ce = Ec;
      } catch {
      }
  }
  return au.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, a = "", n = $0, i = I0, o = P0;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = Od(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      o,
      Qd
    ), t[Ml] = e.current, _f(t), new Jf(e);
  }, au.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var a = !1, n = "", i = $0, o = I0, m = P0, S = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (S = l.formState)), e = Od(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      S,
      i,
      o,
      m,
      Qd
    ), e.context = Cd(null), l = e.current, a = Fe(), a = ft(a), n = va(a), n.callback = null, ba(l, n, a), l = a, e.current.lanes = l, vt(e, l), _l(e), t[Ml] = e.current, _f(t), new zc(e);
  }, au.version = "19.2.4", au;
}
var t1;
function qh() {
  if (t1) return Ff.exports;
  t1 = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Ff.exports = Hh(), Ff.exports;
}
var wh = qh(), pe = ss();
const uu = 11;
function f(u, c, s) {
  return { x: u, y: c, z: s };
}
function F(u, c, s) {
  return Math.max(c, Math.min(s, u));
}
function it(u, c) {
  return { x: u.x + c.x, y: u.y + c.y, z: u.z + c.z };
}
function us(u, c) {
  return { x: u.x - c.x, y: u.y - c.y, z: u.z - c.z };
}
function Nt(u, c) {
  return { x: u.x * c, y: u.y * c, z: u.z * c };
}
function Nc(u, c) {
  return u.x * c.x + u.y * c.y + u.z * c.z;
}
function $e(u, c) {
  return {
    x: u.y * c.z - u.z * c.y,
    y: u.z * c.x - u.x * c.z,
    z: u.x * c.y - u.y * c.x
  };
}
function Yh(u) {
  return Math.hypot(u.x, u.y, u.z);
}
function Kt(u) {
  const c = Yh(u) || 1;
  return Nt(u, 1 / c);
}
function Wt(u, c, s) {
  return u + (c - u) * s;
}
function jl(u, c, s) {
  return {
    x: Wt(u.x, c.x, s),
    y: Wt(u.y, c.y, s),
    z: Wt(u.z, c.z, s)
  };
}
function y(u) {
  const c = u.replace("#", ""), s = c.length === 3 ? c.split("").map((d) => `${d}${d}`).join("") : c, r = Number.parseInt(s, 16);
  return {
    r: (r >> 16 & 255) / 255,
    g: (r >> 8 & 255) / 255,
    b: (r & 255) / 255
  };
}
function mt(u, c, s) {
  return {
    r: Wt(u.r, c.r, s),
    g: Wt(u.g, c.g, s),
    b: Wt(u.b, c.b, s)
  };
}
function d1(u, c) {
  return Kt({
    x: Math.sin(u) * Math.cos(c),
    y: Math.sin(c),
    z: -Math.cos(u) * Math.cos(c)
  });
}
function h1() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function Lh(u) {
  const c = h1();
  return c[12] = u.x, c[13] = u.y, c[14] = u.z, c;
}
function Gh(u) {
  return new Float32Array([u, 0, 0, 0, 0, u, 0, 0, 0, 0, u, 0, 0, 0, 0, 1]);
}
function Xh(u) {
  const c = Math.cos(u), s = Math.sin(u);
  return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
}
function Qh(u) {
  const c = Math.cos(u), s = Math.sin(u);
  return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
}
function Vh(u) {
  const c = Math.cos(u), s = Math.sin(u);
  return new Float32Array([c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function cu(u, c) {
  const s = new Float32Array(16), r = u[0], d = u[1], v = u[2], T = u[3], M = u[4], h = u[5], b = u[6], U = u[7], E = u[8], N = u[9], w = u[10], L = u[11], Q = u[12], P = u[13], rt = u[14], gt = u[15];
  let W = c[0], J = c[1], at = c[2], et = c[3];
  return s[0] = W * r + J * M + at * E + et * Q, s[1] = W * d + J * h + at * N + et * P, s[2] = W * v + J * b + at * w + et * rt, s[3] = W * T + J * U + at * L + et * gt, W = c[4], J = c[5], at = c[6], et = c[7], s[4] = W * r + J * M + at * E + et * Q, s[5] = W * d + J * h + at * N + et * P, s[6] = W * v + J * b + at * w + et * rt, s[7] = W * T + J * U + at * L + et * gt, W = c[8], J = c[9], at = c[10], et = c[11], s[8] = W * r + J * M + at * E + et * Q, s[9] = W * d + J * h + at * N + et * P, s[10] = W * v + J * b + at * w + et * rt, s[11] = W * T + J * U + at * L + et * gt, W = c[12], J = c[13], at = c[14], et = c[15], s[12] = W * r + J * M + at * E + et * Q, s[13] = W * d + J * h + at * N + et * P, s[14] = W * v + J * b + at * w + et * rt, s[15] = W * T + J * U + at * L + et * gt, s;
}
function e1(u, c, s, r, d = 1) {
  const v = cu(
    Qh(c),
    cu(Xh(s), cu(Vh(r), Gh(d)))
  );
  return cu(Lh(u), v);
}
function ts(u, c, s, r, d = 1) {
  return new Float32Array([
    c.x * d,
    c.y * d,
    c.z * d,
    0,
    s.x * d,
    s.y * d,
    s.z * d,
    0,
    -r.x * d,
    -r.y * d,
    -r.z * d,
    0,
    u.x,
    u.y,
    u.z,
    1
  ]);
}
function Zh(u, c, s, r) {
  const d = 1 / Math.tan(u / 2), v = 1 / (s - r);
  return new Float32Array([
    d / c,
    0,
    0,
    0,
    0,
    d,
    0,
    0,
    0,
    0,
    (r + s) * v,
    -1,
    0,
    0,
    2 * r * s * v,
    0
  ]);
}
function Kh(u, c, s) {
  const r = Kt(us(u, c)), d = Kt($e(s, r)), v = $e(r, d);
  return new Float32Array([
    d.x,
    v.x,
    r.x,
    0,
    d.y,
    v.y,
    r.y,
    0,
    d.z,
    v.z,
    r.z,
    0,
    -Nc(d, u),
    -Nc(v, u),
    -Nc(r, u),
    1
  ]);
}
class Jh {
  data = [];
  pushVertex(c, s, r, d = 0, v = 0) {
    this.data.push(c.x, c.y, c.z, s.x, s.y, s.z, r.r, r.g, r.b, d, v);
  }
  triangle(c, s, r, d) {
    const v = Kt($e(us(s, c), us(r, c)));
    this.pushVertex(c, v, d), this.pushVertex(s, v, d), this.pushVertex(r, v, d);
  }
  quad(c, s, r, d, v) {
    this.triangle(c, s, r, v), this.triangle(c, r, d, v);
  }
  box(c, s, r) {
    const d = s.x * 0.5, v = s.y * 0.5, T = s.z * 0.5, M = {
      lbf: f(c.x - d, c.y - v, c.z + T),
      rbf: f(c.x + d, c.y - v, c.z + T),
      lbb: f(c.x - d, c.y - v, c.z - T),
      rbb: f(c.x + d, c.y - v, c.z - T),
      ltf: f(c.x - d, c.y + v, c.z + T),
      rtf: f(c.x + d, c.y + v, c.z + T),
      ltb: f(c.x - d, c.y + v, c.z - T),
      rtb: f(c.x + d, c.y + v, c.z - T)
    };
    this.quad(M.ltf, M.rtf, M.rtb, M.ltb, r.top), this.quad(M.lbf, M.rbf, M.rtf, M.ltf, r.sideA), this.quad(M.rbf, M.rbb, M.rtb, M.rtf, r.sideB), this.quad(M.rbb, M.lbb, M.ltb, M.rtb, r.sideA), this.quad(M.lbb, M.lbf, M.ltf, M.ltb, r.sideB);
  }
  ring(c, s, r, d, v, T) {
    for (let M = 0; M < d; M += 1) {
      const h = M / d * Math.PI * 2, b = (M + 1) / d * Math.PI * 2;
      for (let U = 0; U < v; U += 1) {
        const E = U / v * Math.PI * 2, N = (U + 1) / v * Math.PI * 2, w = Rc(c, s, r, h, E), L = Rc(c, s, r, b, E), Q = Rc(c, s, r, b, N), P = Rc(c, s, r, h, N);
        this.quad(w, L, Q, P, T);
      }
    }
  }
  toMesh() {
    return {
      vertices: new Float32Array(this.data),
      vertexCount: this.data.length / uu
    };
  }
}
function Rc(u, c, s, r, d) {
  const v = Math.cos(r), T = Math.sin(r), M = Math.cos(d), h = Math.sin(d), b = c + s * M;
  return f(u.x + v * b, u.y + T * b, u.z + s * h);
}
function ci() {
  return new Jh();
}
function l1(u, c, s) {
  const r = u.createShader(c);
  if (!r) throw new Error("Unable to create shader.");
  if (u.shaderSource(r, s), u.compileShader(r), !u.getShaderParameter(r, u.COMPILE_STATUS)) {
    const d = u.getShaderInfoLog(r) ?? "unknown shader error";
    throw u.deleteShader(r), new Error(d);
  }
  return r;
}
function kh(u, c, s) {
  const r = u.createProgram();
  if (!r) throw new Error("Unable to create program.");
  const d = l1(u, u.VERTEX_SHADER, c), v = l1(u, u.FRAGMENT_SHADER, s);
  if (u.attachShader(r, d), u.attachShader(r, v), u.linkProgram(r), u.deleteShader(d), u.deleteShader(v), !u.getProgramParameter(r, u.LINK_STATUS)) {
    const T = u.getProgramInfoLog(r) ?? "unknown link error";
    throw u.deleteProgram(r), new Error(T);
  }
  return r;
}
function Fh(u) {
  const c = F(window.devicePixelRatio || 1, 1, 2), s = Math.max(1, Math.round(u.clientWidth * c)), r = Math.max(1, Math.round(u.clientHeight * c));
  (u.width !== s || u.height !== r) && (u.width = s, u.height = r);
}
function Wh(u) {
  const c = u.getContext("webgl", {
    alpha: !1,
    antialias: !0,
    depth: !0,
    preserveDrawingBuffer: !0
  });
  if (!c)
    throw new Error("WebGL is not available in this browser.");
  const s = c, v = kh(s, `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec3 aColor;
    attribute vec2 aUv;
    uniform mat4 uViewProj;
    uniform mat4 uModel;
    uniform vec3 uCameraPos;
    varying vec3 vColor;
    varying vec2 vUv;
    varying float vLight;
    varying float vFog;

    void main() {
      vec4 world = uModel * vec4(aPosition, 1.0);
      vec3 normal = normalize((uModel * vec4(aNormal, 0.0)).xyz);
      vec3 sun = normalize(vec3(-0.45, 0.85, 0.18));
      float diffuse = max(dot(normal, sun), 0.0);
      float hemi = normal.y * 0.5 + 0.5;
      vLight = 0.22 + diffuse * 0.62 + hemi * 0.26;
      vFog = clamp((distance(world.xyz, uCameraPos) - 240.0) / 3600.0, 0.0, 1.0);
      vColor = aColor;
      vUv = aUv;
      gl_Position = uViewProj * world;
    }
  `, `
    precision mediump float;
    varying vec3 vColor;
    varying vec2 vUv;
    varying float vLight;
    varying float vFog;
    uniform sampler2D uTexture;
    uniform float uUseTexture;
    uniform float uAlphaCutout;
    uniform vec3 uTint;
    uniform vec3 uFogColor;

    void main() {
      vec4 texel = texture2D(uTexture, vUv);
      if (uUseTexture > 0.5 && uAlphaCutout > 0.5 && texel.a < 0.18) {
        discard;
      }
      vec3 baseColor = mix(vColor, vColor * texel.rgb, uUseTexture);
      vec3 lit = baseColor * uTint * vLight;
      vec3 shaded = mix(lit, uFogColor, vFog);
      float alpha = mix(1.0, texel.a, uUseTexture);
      gl_FragColor = vec4(shaded, alpha);
    }
  `), T = s.getAttribLocation(v, "aPosition"), M = s.getAttribLocation(v, "aNormal"), h = s.getAttribLocation(v, "aColor"), b = s.getAttribLocation(v, "aUv"), U = s.getUniformLocation(v, "uViewProj"), E = s.getUniformLocation(v, "uModel"), N = s.getUniformLocation(v, "uCameraPos"), w = s.getUniformLocation(v, "uTexture"), L = s.getUniformLocation(v, "uUseTexture"), Q = s.getUniformLocation(v, "uAlphaCutout"), P = s.getUniformLocation(v, "uTint"), rt = s.getUniformLocation(v, "uFogColor"), gt = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), J = h1();
  s.enable(s.DEPTH_TEST);
  function at(X) {
    const dt = s.createTexture();
    if (!dt) throw new Error("Unable to create texture.");
    return W.add(dt), s.bindTexture(s.TEXTURE_2D, dt), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 1), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, X), s.bindTexture(s.TEXTURE_2D, null), dt;
  }
  const et = at(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
  function V(X, dt = !1) {
    const Gt = s.createBuffer();
    if (!Gt) throw new Error("Unable to create vertex buffer.");
    gt.add(Gt), s.bindBuffer(s.ARRAY_BUFFER, Gt), s.bufferData(s.ARRAY_BUFFER, X.vertices, dt ? s.DYNAMIC_DRAW : s.STATIC_DRAW);
    const It = X.texture ? at(X.texture.image) : null;
    return {
      buffer: Gt,
      vertexCount: X.vertexCount,
      dynamic: dt,
      texture: It,
      hasTexture: !!It,
      alphaMode: X.texture?.alphaMode ?? "opaque"
    };
  }
  function pt(X, dt) {
    s.bindBuffer(s.ARRAY_BUFFER, X.buffer), s.bufferData(s.ARRAY_BUFFER, dt.vertices, X.dynamic ? s.DYNAMIC_DRAW : s.STATIC_DRAW), X.vertexCount = dt.vertexCount, X.texture && (W.delete(X.texture), s.deleteTexture(X.texture), X.texture = null), dt.texture ? (X.texture = at(dt.texture.image), X.hasTexture = !0, X.alphaMode = dt.texture.alphaMode ?? "opaque") : (X.hasTexture = !1, X.alphaMode = "opaque");
  }
  function $(X) {
    s.bindBuffer(s.ARRAY_BUFFER, X.buffer), s.enableVertexAttribArray(T), s.enableVertexAttribArray(M), s.enableVertexAttribArray(h), s.enableVertexAttribArray(b), s.vertexAttribPointer(T, 3, s.FLOAT, !1, uu * 4, 0), s.vertexAttribPointer(M, 3, s.FLOAT, !1, uu * 4, 12), s.vertexAttribPointer(h, 3, s.FLOAT, !1, uu * 4, 24), s.vertexAttribPointer(b, 2, s.FLOAT, !1, uu * 4, 36);
  }
  function Vt(X, dt) {
    Fh(u), s.viewport(0, 0, u.width, u.height), s.clearColor(0.46, 0.64, 0.75, 1), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.useProgram(v);
    const Gt = u.width / Math.max(1, u.height), It = cu(
      Zh(X.fov * Math.PI / 180, Gt, X.near, X.far),
      Kh(X.position, X.target, X.up)
    );
    s.uniformMatrix4fv(U, !1, It), s.uniform3f(N, X.position.x, X.position.y, X.position.z), s.uniform3f(rt, 0.78, 0.87, 0.92), s.activeTexture(s.TEXTURE0), s.uniform1i(w, 0);
    for (const C of dt) {
      $(C.mesh), s.uniformMatrix4fv(E, !1, C.model ?? J);
      const K = C.tint ?? { r: 1, g: 1, b: 1 };
      s.uniform3f(P, K.r, K.g, K.b), s.uniform1f(L, C.mesh.hasTexture ? 1 : 0), s.uniform1f(Q, C.mesh.alphaMode === "mask" || C.mesh.alphaMode === "blend" ? 1 : 0), C.mesh.alphaMode === "blend" ? (s.enable(s.BLEND), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.bindTexture(s.TEXTURE_2D, C.mesh.texture ?? et), s.drawArrays(s.TRIANGLES, 0, C.mesh.vertexCount);
    }
  }
  function Lt() {
    for (const X of gt)
      s.deleteBuffer(X);
    for (const X of W)
      s.deleteTexture(X);
    s.deleteProgram(v);
  }
  return { createMesh: V, updateMesh: pt, render: Vt, dispose: Lt };
}
function ni() {
  if (typeof window > "u") return { width: 1440, height: 960 };
  const u = window.visualViewport;
  return {
    width: Math.round(u?.width ?? window.innerWidth),
    height: Math.round(u?.height ?? window.innerHeight)
  };
}
function a1(u) {
  const c = u;
  return u.fullscreenElement ?? c.webkitFullscreenElement ?? null;
}
function $h(u) {
  if (!u) return !1;
  const c = u;
  return typeof c.requestFullscreen == "function" || typeof c.webkitRequestFullscreen == "function";
}
async function Ih(u) {
  const c = u;
  return typeof c.requestFullscreen == "function" ? (await c.requestFullscreen(), !0) : typeof c.webkitRequestFullscreen == "function" ? (await c.webkitRequestFullscreen(), !0) : !1;
}
async function Ph(u) {
  const c = u;
  return typeof u.exitFullscreen == "function" ? (await u.exitFullscreen(), !0) : typeof c.webkitExitFullscreen == "function" ? (await c.webkitExitFullscreen(), !0) : !1;
}
const bl = 72, Se = 5, ou = 160, _c = Se + 0.12, jc = Se + 0.24, fl = Se + 0.34, Ft = 150, Ce = -1440, tm = -80, em = 3 * Math.PI / 180, m1 = -4200, g1 = 4200, Ha = -6200, sn = 5200, n1 = { minX: -2400, maxX: 2600, minZ: -3600, maxZ: 3400 }, i1 = { minX: -520, maxX: 3200, minZ: -2800, maxZ: 3200 }, es = { minX: -980, maxX: 1260, minZ: -2200, maxZ: 2200 }, ii = f(-28, 126, 2480), p1 = 48, ls = 0.72, lm = y("#4d7749"), am = y("#42653f"), nm = y("#355936"), im = y("#fff3d6"), um = y("#ff6b63"), cm = [-20, -15, -10, -5, 5, 10, 15, 20], he = [
  { center: f(-28, 108, 1820), radius: 64, label: "Gate Alpha", bonus: 140 },
  { center: f(16, 76, 1160), radius: 58, label: "Gate Bravo", bonus: 160 },
  { center: f(0, 44, 620), radius: 52, label: "Gate Charlie", bonus: 180 }
], om = 1.225, Dc = 1100, u1 = 16.2, Uc = 9.81, fm = 680, sm = 8600, rm = 0.04, dm = 3.5, c1 = 0.27, o1 = 1.24, hm = 0.42, mm = 0.036, gm = 0.082, pm = 0.34, ym = 0.1, vm = 0.02;
function nu(u) {
  return `${u * 10} deg`;
}
function ta(u) {
  return u * 1.94384;
}
function as(u) {
  return u * 196.8504;
}
function bm(u, c) {
  const s = F((u.y - Se) / 180, 0.2, 1), r = 0.8 + Math.sin(c * 0.38 + u.z * 15e-4) * 0.9 + Math.cos(c * 0.82 + u.x * 34e-4) * 0.45, d = 4.6 + Math.cos(c * 0.22 + u.z * 9e-4) * 1.1 + Math.sin(c * 0.54 + u.x * 17e-4) * 0.55, v = Math.sin(c * 0.94 + u.x * 22e-4) * 0.55 + Math.cos(c * 1.18 + u.z * 11e-4) * 0.22;
  return f(r * s, v * s, d * s);
}
function f1(u, c, s) {
  let r = c - u;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  for (; r < -Math.PI; ) r += Math.PI * 2;
  return u + r * s;
}
function y1(u) {
  let c = u;
  for (; c > Math.PI; ) c -= Math.PI * 2;
  for (; c < -Math.PI; ) c += Math.PI * 2;
  return c;
}
function s1(u, c) {
  return y1(u - c);
}
function ue(u, c, s) {
  if (u === c) return s < u ? 0 : 1;
  const r = F((s - u) / (c - u), 0, 1);
  return r * r * (3 - 2 * r);
}
function Zt(u, c, s) {
  return 1 - ue(c, s, Math.abs(u));
}
function Dl(u, c, s) {
  return 1 - ue(c, s, u);
}
function Sm(u) {
  return u - Math.floor(u);
}
function We(u, c) {
  return Sm(Math.sin(u * 12.9898 + c * 78.233) * 43758.5453123);
}
function la(u) {
  return 1520 + Math.sin(u * 82e-5 + 0.8) * 340 + Math.cos(u * 17e-4 - 0.4) * 120;
}
function rs(u, c) {
  const s = (u - 1900) / 720, r = (c - 1860) / 580;
  return Dl(Math.hypot(s, r), 0.28, 1);
}
function xm(u, c) {
  const s = (u - 260) / 760, r = (c + 240) / 980;
  return Dl(Math.hypot(s, r), 0.22, 1);
}
function Am(u, c) {
  return Math.abs(u) <= ou && c <= Ft + 180 && c >= Ce - 40;
}
function cs(u) {
  return -1180 + Math.sin(u * 108e-5 + 1.4) * 170 + Math.cos(u * 21e-4 - 0.2) * 64;
}
function v1(u, c) {
  const s = Zt(u + Math.sin(c * 72e-5) * 160, 320, 2080), r = Zt(c - 320, 1700, 4200);
  return s * r;
}
function b1(u, c) {
  const s = (u + 780) / 760, r = (c - 1180) / 940;
  return Dl(Math.hypot(s, r), 0.18, 1);
}
function S1(u, c) {
  const s = u / 1180, r = (c + 260) / 2120;
  return Dl(Math.hypot(s, r), 0.2, 1);
}
function Mm(u, c) {
  const s = (Ft + Ce) * 0.5;
  return Zt(u, 520, 1260) * Zt(c - s, 2180, 3280);
}
function x1(u, c) {
  const s = Zt(u - la(c), 260, 1120), r = Zt(c - 260, 2400, 5600);
  return s * r;
}
function Bc(u, c) {
  const s = Dl(Math.hypot((u + 1080) / 220, (c - 260) / 170), 0.2, 1), r = Dl(Math.hypot((u - 1320) / 250, (c - 360) / 190), 0.22, 1);
  return Math.max(s, r);
}
function A1(u, c) {
  const s = u / 980, r = (c - 260) / 980;
  return Dl(Math.hypot(s, r), 0.22, 1);
}
function M1(u, c) {
  const s = (u - 1880) / 860, r = (c - 1860) / 700, d = Math.hypot(s, r);
  return F(Dl(d, 0.34, 1) - Dl(d, 0.12, 0.58), 0, 1);
}
function Tm(u, c) {
  const s = Math.sin(c * 44e-4 + 0.6) * 42 + Math.cos(c * 21e-4 - 1.1) * 26, r = la(c) + s, d = F((Math.sin(c * 48e-4 + 0.4) + Math.cos(c * 21e-4 - 1.2)) * 0.25 + 0.5, 0, 1);
  return Zt(u - r, 34, 128) * ue(0.28, 0.82, d);
}
function T1(u, c) {
  const s = ue(760, 1720, -u) * (1 - ue(2060, 3320, -u)), r = ue(820, 1780, u) * (1 - ue(2140, 3380, u)), d = Zt(c + 180, 5200, 10400);
  return F((s + r) * d, 0, 1);
}
function qa(u, c) {
  const s = Zt(u - la(c), 96, 240), r = Bc(u, c);
  return c < sn - 220 && c > Ha + 220 && s > 0.44 ? 2.8 + Math.sin(c * 35e-5) * 1.4 : r > 0.5 ? 4.2 + Math.sin((u + c) * 24e-4) * 0.08 : rs(u, c) > 0.42 ? 3.6 : null;
}
function rn(u, c) {
  const s = 22 + Math.sin(u * 28e-4) * 16 + Math.cos(c * 25e-4) * 13 + Math.sin((u + c) * 115e-5) * 20 + Math.cos((u - c) * 14e-4) * 12, r = Math.sin(c * 54e-4 + u * 8e-4) * 6 + Math.cos(u * 48e-4 - c * 6e-4) * 4, d = ue(900, 2600, Math.abs(u)) * (18 + Math.sin(c * 11e-4) * 14 + Math.cos((u + c) * 7e-4) * 8), v = ue(1900, 4100, -u) * (92 + Math.sin(c * 7e-4) * 28 + Math.cos(c * 16e-4) * 18), T = ue(1700, 3900, u) * (74 + Math.sin(c * 8e-4 + 1.6) * 26 + Math.cos(c * 14e-4) * 14), M = ue(2200, 5e3, -c) * (56 + Math.cos(u * 11e-4) * 18 + Math.sin((u - c) * 7e-4) * 16), h = ue(1800, 4200, c) * (24 + Math.sin(u * 15e-4) * 10), b = Dl(Math.hypot((u - 2280) / 1120, (c + 2520) / 1420), 0.18, 1) * (18 + Math.sin(u * 38e-4 + c * 17e-4) * 9 + Math.cos(c * 29e-4 - u * 16e-4) * 7), U = v1(u, c) * (Math.sin(u * 96e-4 + c * 18e-4) * 3.4 + Math.cos(u * 48e-4 - c * 62e-4) * 2.6), E = b1(u, c) * 6.5, N = x1(u, c) * (7.5 + Math.sin(c * 36e-4 + u * 8e-4) * 2.8 + Math.cos(u * 32e-4 - c * 12e-4) * 2.2), w = Zt(u - la(c), 150, 430) * ue(-1800, 3600, c) * (6.5 + Math.sin(c * 21e-4 + u * 16e-4) * 1.9), L = Mm(u, c) * (5.2 + Math.sin(c * 41e-4 + u * 14e-4) * 1.7 + Math.cos(u * 36e-4 - c * 18e-4) * 1.2), Q = A1(u, c) * (3.8 + Math.sin(u * 31e-4 - c * 17e-4) * 1.3), P = M1(u, c) * (4.8 + Math.sin(u * 48e-4 + c * 16e-4) * 1.6), rt = T1(u, c) * (18 + Math.sin(c * 25e-4 + u * 13e-4) * 6.2 + Math.cos(u * 42e-4 - c * 11e-4) * 4.8), gt = Zt(Math.abs(u) - 168, 28, 220) * Zt(c + 640, 1180, 2460) * 6.4, W = Zt(Math.abs(u) - 282, 18, 128) * Zt(c + 640, 1280, 2580) * 5.4, J = Zt(Math.abs(u) - 430, 28, 180) * Zt(c - 260, 340, 1380) * 4.4, at = Bc(u, c) * (10.8 + Math.sin(u * 42e-4 + c * 16e-4) * 1.9), et = Bc(u, c) * (4.6 + Math.cos(u * 34e-4 - c * 28e-4) * 1.4), V = Zt(u - la(c), 110, 520) * (34 + Math.sin(c * 18e-4) * 7), pt = rs(u, c) * 30, $ = Zt(u + 1800 + Math.sin(c * 9e-4) * 180, 180, 620) * ue(-800, 2600, c) * 14, Vt = Zt(u - cs(c), 78, 250) * ue(-1200, 2600, c) * (10 + Math.sin(c * 23e-4) * 2.5), Lt = ue(1500, 4e3, -u) * ue(-2400, 1400, c) * (Math.sin(u * 64e-4 + c * 22e-4) * 4.2 + Math.cos(u * 32e-4 - c * 46e-4) * 3.4);
  let X = s + r + d + v + T + M + h + b + U + E + N + w + L + Q + P + rt + gt + et + Lt - V - pt - $ - Vt - W - J - at;
  const dt = (Ft + Ce) * 0.5, Gt = Zt(u, 180, 420), It = Zt(c - dt, 1620, 2550);
  return X = Wt(X, Se, Gt * It), X = Wt(X, Se + 1.8, xm(u, c) * 0.42), X = Wt(X, Se + 1.4, S1(u, c) * 0.16), X;
}
function zm(u, c, s) {
  const r = F(Math.hypot(rn(u + 36, c) - s, rn(u, c + 36) - s) / 24, 0, 1), d = Zt(u - la(c), 120, 960), v = rs(u, c), T = Math.max(d * 0.34, v * 0.5), M = v1(u, c) * (1 - r), h = b1(u, c) * (1 - r * 0.68), b = S1(u, c) * (1 - r * 0.74), U = x1(u, c) * (1 - r * 0.52), E = Bc(u, c) * (1 - r * 0.68), N = A1(u, c) * (1 - r * 0.6), w = M1(u, c) * (1 - r * 0.7), L = Tm(u, c) * (1 - r * 0.78), Q = T1(u, c) * (1 - r * 0.48), P = Math.max(d * (1 - ue(12, 40, s)), v * (1 - ue(14, 34, s))), rt = We(u * 4e-3, c * 4e-3), gt = We(u * 0.018 + 17, c * 0.018 - 23), W = 0.5 + 0.5 * Math.sin(u * 0.018 + c * 6e-3 + gt * Math.PI * 2), J = 0.5 + 0.5 * Math.sin(c * 0.052 + u * 4e-3 + gt * Math.PI), at = Zt(Math.abs(u) - 282, 18, 62) * Zt(c + 640, 1260, 2520), et = Zt(Math.abs(u) - 430, 18, 70) * Zt(c - 260, 360, 1320);
  if (qa(u, c) !== null && s < 10) {
    const X = F((Math.sin(c * 32e-4) + Math.cos(u * 18e-4)) * 0.18 + 0.48, 0.2, 0.86);
    let dt = mt(y("#2d566c"), y("#669ab6"), X);
    return dt = mt(dt, y("#8cc4d8"), P * 0.24), mt(dt, y("#d8d0a3"), P * 0.08);
  }
  const V = mt(y("#6f8c4e"), y("#a3b36a"), W), pt = mt(y("#5f7744"), y("#889b59"), 0.35 + W * 0.65);
  let $ = s > 230 ? y("#91979b") : s > 180 ? y("#758171") : s > 125 ? y("#607a52") : rt > 0.68 ? am : rt > 0.34 ? lm : nm;
  if ($ = mt($, y("#6d8754"), T), M > 0.08 && ($ = mt($, gt > 0.54 ? V : pt, F(M * 0.76, 0, 0.76))), h > 0.08) {
    const X = mt(y("#456b3c"), y("#5a7c41"), W);
    $ = mt($, X, F(h * 0.82, 0, 0.82));
  }
  if (U > 0.06) {
    const X = mt(y("#8c9b6d"), y("#b1ab82"), 0.32 + W * 0.68);
    $ = mt($, X, F(U * 0.34, 0, 0.34));
  }
  if (w > 0.06) {
    const X = mt(y("#9ba279"), y("#c2bb91"), 0.22 + W * 0.78);
    $ = mt($, X, F(w * 0.4, 0, 0.4));
  }
  if (L > 0.06) {
    const X = mt(y("#b9ad7e"), y("#d5c89a"), J);
    $ = mt($, X, F(L * 0.28, 0, 0.28));
  }
  if (E > 0.06) {
    const X = mt(y("#97a27a"), y("#b8b085"), 0.28 + J * 0.72);
    $ = mt($, X, F(E * 0.42, 0, 0.42));
  }
  if (Q > 0.06) {
    const X = mt(y("#74855d"), y("#98a176"), 0.3 + W * 0.7);
    $ = mt($, X, F(Q * 0.46, 0, 0.46));
  }
  if (b > 0.06) {
    const X = mt(y("#7d9158"), y("#98aa6e"), J);
    $ = mt($, X, F(b * 0.46, 0, 0.46));
  }
  if (N > 0.08) {
    const X = mt(y("#95a36a"), y("#b7af7e"), W);
    $ = mt($, X, F(N * 0.24, 0, 0.24));
  }
  at > 0.05 && ($ = mt($, y("#b8ae82"), at * 0.55)), et > 0.05 && ($ = mt($, y("#beaf84"), et * 0.5)), P > 0.05 && ($ = mt($, y("#b9b187"), P * 0.58));
  const Vt = F(r * 0.92 + ue(145, 260, s) * 0.34, 0, 1);
  $ = mt($, s > 170 ? y("#86867f") : y("#7a776f"), Vt * 0.62);
  const Lt = F(ue(235, 320, s) * (0.42 + r * 0.58), 0, 1);
  return mt($, y("#edf4f7"), Lt * 0.92);
}
function lt(u, c) {
  if (Math.abs(u) <= 120 && c <= Ft + 200 && c >= Ce - 160)
    return Se;
  const s = rn(u, c), r = qa(u, c);
  return r === null ? s : Math.max(s, r);
}
function os(u) {
  const c = Math.max(0, u - tm);
  return Se + 2 + Math.tan(em) * c;
}
function ui(u) {
  const c = u.x, s = F(c / 18, -3.2, 3.2), r = os(u.z), d = u.y - r, v = F(d / 6, -3.2, 3.2), T = d, M = T > 18 ? 4 : T > 8 ? 3 : T > -8 ? 2 : T > -18 ? 1 : 0;
  return { desiredAltitude: r, glideslopeDeviation: d, glideslopeDots: v, localizerDots: s, localizerMeters: c, papiWhites: M, papiLabel: M === 4 ? "well high" : M === 3 ? "slightly high" : M === 2 ? "on slope" : M === 1 ? "slightly low" : "well low" };
}
function Em(u, c) {
  return u < c.papiWhites ? im : um;
}
function iu(u) {
  const c = u * 180 / Math.PI % 360;
  return c < 0 ? c + 360 : c;
}
function Rm(u) {
  return u % 90 !== 0 ? `${u}` : u === 0 || u === 360 ? "N" : u === 90 ? "E" : u === 180 ? "S" : "W";
}
function r1(u) {
  return Math.abs(u.x) <= bl && u.z <= Ft && u.z >= Ce;
}
function _m(u, c) {
  return Math.hypot(u.x - c.center.x, u.y - c.center.y, u.z - c.center.z);
}
function fs(u) {
  return Math.atan2(u.verticalVelocity, Math.max(22, u.speed));
}
function Hc(u, c, s) {
  const r = Kt(c), d = Math.cos(s), v = Math.sin(s);
  return Kt(
    it(
      it(Nt(u, d), Nt($e(r, u), v)),
      Nt(r, Nc(r, u) * (1 - d))
    )
  );
}
function z1(u) {
  const c = fs(u), s = Kt(d1(u.heading, c)), r = $e(s, f(0, 1, 0)), d = Math.hypot(r.x, r.y, r.z) > 1e-4 ? Kt(r) : f(Math.cos(u.heading), 0, Math.sin(u.heading)), v = Kt($e(d, s)), T = Hc(d, s, u.roll), M = Hc(s, T, u.angleOfAttack), h = Kt($e(T, M)), b = Kt($e(M, h)), U = Kt(
    jl(s, M, F(0.46 + Math.abs(u.angleOfAttack) * 0.85 + Math.abs(u.verticalVelocity) * 0.012, 0.46, 0.78))
  ), E = Kt(jl(v, h, u.cameraMode === "cockpit" ? 0.94 : 0.34));
  return { trackForward: s, trackRight: d, trackUp: v, bodyForward: M, bodyRight: b, bodyUp: h, chaseForward: U, chaseUp: E, pathPitch: c };
}
function jm(u) {
  const { trackUp: c, bodyForward: s, bodyRight: r, bodyUp: d, chaseForward: v, chaseUp: T, pathPitch: M } = z1(u), h = u.cameraMode === "cockpit", b = f(0, 1, 0), U = Kt(h ? jl(b, d, 0.98) : jl(b, T, 0.42)), E = h ? Kt(jl(s, it(s, Nt(r, 0.02)), 0.5)) : v, N = Kt($e(E, U)), w = Kt($e(N, E)), L = F((u.groundSpeed - 52) / 56, 0, 1), Q = h ? F(184 + u.speed * 0.42, 210, 268) : F(264 + u.speed * 0.84, 282, 414), P = it(it(u.position, Nt(E, Q)), Nt(c, 10 + F(u.verticalVelocity * 1.4, -10, 14))), rt = lt(P.x, P.z), gt = F(112 + u.speed * 0.34, 128, 162), W = F(30 + u.speed * 0.09, 36, 48), J = F(u.slip * 6 + u.yawRate * 2.8, -4.5, 4.5), at = it(it(it(u.position, Nt(v, -gt)), Nt(w, W)), Nt(N, J)), et = lt(at.x, at.z), V = F(u.slip * 1.25 + u.yawRate * 0.18, -0.7, 0.7), pt = it(it(it(u.position, Nt(s, 49)), Nt(d, 2.7)), Nt(r, -1.02 + V)), $ = it(
    it(it(pt, Nt(s, 320)), Nt(d, 4 + F(u.verticalVelocity * 0.16, -2.2, 2.6))),
    Nt(r, 3.4 - V * 0.28)
  ), Vt = h ? pt : f(at.x, Math.max(at.y, et + 10), at.z), Lt = h ? $ : f(
    P.x,
    F(P.y + M * 44, rt + 10, u.position.y + 90),
    P.z
  ), X = Kt(h ? jl(w, d, 0.62) : jl(b, w, 0.38)), dt = h ? 0.28 : 0.16;
  return {
    position: jl(u.camera.position, Vt, dt),
    target: jl(u.camera.target, Lt, dt + 0.03),
    up: Kt(jl(u.camera.up, X, dt + 0.02)),
    fov: Wt(u.camera.fov, h ? Wt(68, 74, L * 0.42) : Wt(84, 93, L), h ? 0.14 : 0.1),
    near: h ? 0.12 : 0.4,
    far: 12e3
  };
}
function Dm(u, c) {
  return u < c.nextRing ? y("#5de08a") : u > c.nextRing ? y("#8bc4ff") : mt(y("#ffdc6e"), y("#ff9c43"), (Math.sin(c.time * 3.4) + 1) * 0.5);
}
function ns() {
  return {
    mode: "title",
    cameraMode: "chase",
    position: { ...ii },
    speed: 84,
    groundSpeed: 84,
    engineRpm: 2140,
    throttle: 0.64,
    trim: 0,
    flightDirector: !1,
    autopilot: !1,
    lateralMode: "wlv",
    verticalMode: "alt",
    selectedHeading: 0,
    selectedAltitude: ii.y,
    commandRoll: 0,
    commandPitch: 0,
    brakes: 0,
    flaps: 0,
    terrainRunTime: 0,
    heading: 0,
    pitch: -0.03,
    roll: 0,
    pitchRate: 0,
    rollRate: 0,
    yawRate: 0,
    slip: 0,
    angleOfAttack: 0.03,
    gLoad: 1,
    verticalVelocity: -2.8,
    fuel: 100,
    time: 0,
    score: 0,
    nextRing: 0,
    message: "X-Plane C172-inspired 3D pass: high-wing trainer proportions, strut-braced wings, and a more believable fixed-gear silhouette.",
    stall: !1,
    wind: f(0, 0, 0),
    camera: {
      position: f(ii.x, ii.y + 14, ii.z + 124),
      target: it(ii, f(0, -10, -330)),
      up: f(0, 1, 0),
      fov: 82,
      near: 0.4,
      far: 12e3
    }
  };
}
function Um(u) {
  const c = Math.abs(u.verticalVelocity), s = Math.abs(u.position.x), r = u.speed;
  return c < 2.2 && s < 7 && r < 68 ? {
    label: "Butter landing",
    bonus: 720,
    message: u.nextRing >= he.length ? "All gates cleared and the touchdown was clean." : "You skipped some gates, but the touchdown itself was beautiful."
  } : c < 3.8 && s < 16 && r < 76 ? {
    label: "Strong runway arrival",
    bonus: 560,
    message: u.nextRing >= he.length ? "Approach was solid all the way through." : "Not the full gate run, but still a competent landing."
  } : {
    label: "Survivable landing",
    bonus: 420,
    message: u.nextRing >= he.length ? "Ugly but valid. The runway is still yours." : "You made it down, even without the full approach line."
  };
}
function Om(u, c, s) {
  return c >= u.minX && c <= u.maxX && s >= u.minZ && s <= u.maxZ;
}
function Oc(u, c, s, r) {
  const d = r ? Array.isArray(r) ? r : [r] : [];
  for (let v = c.maxZ; v > c.minZ; v -= s) {
    const T = Math.max(c.minZ, v - s), M = (v + T) * 0.5;
    for (let h = c.minX; h < c.maxX; h += s) {
      const b = Math.min(c.maxX, h + s), U = (h + b) * 0.5;
      if (d.some((P) => Om(P, U, M)) || Am(U, M))
        continue;
      const E = f(h, rn(h, v), v), N = f(b, rn(b, v), v), w = f(b, rn(b, T), T), L = f(h, rn(h, T), T), Q = zm(U, M, (E.y + N.y + w.y + L.y) * 0.25);
      u.quad(E, N, w, L, Q);
    }
  }
}
function Cm() {
  const u = ci();
  Oc(u, { minX: m1, maxX: g1, minZ: Ha, maxZ: sn }, 180, n1), Oc(u, n1, 100, [es, i1]), Oc(u, i1, 72, es), Oc(u, es, 56), Hm(u), wm(u), Lm(u), qm(u), Ym(u), Xm(u), Qm(u), Vm(u), Jm(u), Zm(u), Km(u), km(u), u.quad(
    f(-ou, _c, Ft + 180),
    f(ou, _c, Ft + 180),
    f(ou, _c, Ce - 40),
    f(-ou, _c, Ce - 40),
    y("#6a707d")
  ), u.quad(
    f(-bl, jc, Ft),
    f(bl, jc, Ft),
    f(bl, jc, Ce),
    f(-bl, jc, Ce),
    y("#303745")
  );
  for (let c = Ft - 28; c > Ce + 110; c -= 132)
    u.quad(f(-5, fl, c), f(5, fl, c), f(5, fl, c - 72), f(-5, fl, c - 72), y("#f6f7fa"));
  for (const c of [-1, 1]) {
    u.quad(
      f(c * 46, fl, Ft - 280),
      f(c * 24, fl, Ft - 280),
      f(c * 24, fl, Ft - 420),
      f(c * 46, fl, Ft - 420),
      y("#f6f7fa")
    );
    for (let s = Ft - 120; s > Ft - 360; s -= 90)
      u.quad(
        f(c * 58, fl, s),
        f(c * 46, fl, s),
        f(c * 46, fl, s - 40),
        f(c * 58, fl, s - 40),
        y("#f6f7fa")
      );
  }
  for (let c = Ft + 24; c > Ce + 20; c -= 112)
    u.box(f(-bl - 16, Se + 5, c), f(4, 10, 4), { top: y("#ffe7a4"), sideA: y("#8d7b46"), sideB: y("#706037") }), u.box(f(bl + 16, Se + 5, c), f(4, 10, 4), { top: y("#ffe7a4"), sideA: y("#8d7b46"), sideB: y("#706037") });
  for (let c = Ft + 120; c < Ft + 520; c += 90)
    u.box(f(0, Se + 3, c), f(6, 6, 6), { top: y("#dde4ee"), sideA: y("#677387"), sideB: y("#566273") }), u.box(f(-24, Se + 2.5, c), f(4, 5, 4), { top: y("#dde4ee"), sideA: y("#677387"), sideB: y("#566273") }), u.box(f(24, Se + 2.5, c), f(4, 5, 4), { top: y("#dde4ee"), sideA: y("#677387"), sideB: y("#566273") });
  for (let c = 0; c < 4; c += 1) {
    const s = -bl - 58 - c * 12, r = Ft - 34;
    u.box(f(s, Se + 2.4, r), f(2.4, 4.8, 2.4), { top: y("#6f6a57"), sideA: y("#5b5647"), sideB: y("#4d493d") }), u.box(f(s, Se + 5.6, r), f(8, 3.2, 6), { top: y("#d6d9df"), sideA: y("#6a7078"), sideB: y("#555b64") });
  }
  return Cc(u, -260, -120, 130, 76, 102, y("#8d96aa"), y("#697587"), y("#5a6677")), Cc(u, 280, -280, 112, 72, 94, y("#949dae"), y("#727d8c"), y("#606a79")), Cc(u, -340, -620, 118, 68, 90, y("#8693a7"), y("#667182"), y("#56606f")), Cc(u, 340, -860, 138, 92, 110, y("#8b97a8"), y("#697482"), y("#596372")), Bm(u, 430, -80), is(u, 650, -360, 108, 58, 86, y("#8d9bae"), y("#6b7b8d"), y("#5b6979")), is(u, 760, -620, 122, 54, 108, y("#929eae"), y("#708090"), y("#5e6e7d")), is(u, 540, -720, 84, 42, 72, y("#8594a5"), y("#647382"), y("#566371")), ae(
    u,
    [f(150, 0, 200), f(-120, 0, 340), f(-620, 0, 620), f(-1220, 0, 1080), f(-1560, 0, 1640)],
    28,
    y("#69707b")
  ), ae(
    u,
    [f(220, 0, -60), f(760, 0, 120), f(1180, 0, 680), f(1600, 0, 1400), f(1880, 0, 1880)],
    24,
    y("#68717b")
  ), ae(
    u,
    [f(-920, 0, 3100), f(-980, 0, 2300), f(-1020, 0, 1380), f(-1120, 0, 280), f(-1220, 0, -1120), f(-1360, 0, -2800), f(-1520, 0, -4700)],
    22,
    y("#5f6873")
  ), on(u, -1490, 1550, 4, 4, 96), on(u, -1020, 930, 3, 3, 92), on(u, 1850, 1830, 4, 3, 88), on(u, 1420, -2220, 3, 4, 100), on(u, 2980, 1520, 3, 3, 86), on(u, 2260, -1320, 3, 3, 92), on(u, -2280, 2920, 2, 3, 98), Ba(u, -1950, 2460, 32, 620, 740, 44, 72), Ba(u, -2380, -1500, 26, 760, 1180, 46, 78), Ba(u, 2240, 840, 26, 760, 820, 44, 72), Ba(u, 2760, -2780, 34, 960, 1160, 50, 86), Ba(u, -720, -4180, 24, 900, 820, 48, 78), Ba(u, 2920, 1600, 20, 420, 700, 40, 66), Ba(u, 2460, -480, 18, 520, 860, 42, 70), Ba(u, 780, 2920, 18, 820, 420, 36, 58), Fm(u), Wm(u), $m(u), fn(u, Ha - 1120, 250, 430, 760, y("#8b9eae"), -0.55), fn(u, Ha - 420, 210, 390, 540, y("#788f9f"), 0.45), fn(u, Ha - 60, 185, 350, 420, y("#6c8495"), 1.2), fn(u, Ha + 420, 150, 300, 360, y("#60798b"), 1.9), fn(u, sn + 220, 150, 280, 460, y("#8196a5"), -0.25), fn(u, sn + 520, 135, 240, 340, y("#748a99"), 0.7), fn(u, sn + 1080, 185, 360, 620, y("#879dab"), 1.35), Pm(u), u.toMesh();
}
function qc(u, c, s) {
  u.box(it(c, f(0, 8, 0)), f(6, 16, 6), { top: y("#8e6d42"), sideA: y("#765630"), sideB: y("#66481f") });
  const r = it(c, f(0, 18, 0)), d = s * 0.28, v = it(r, f(0, s, 0)), T = it(r, f(-d, 0, -d)), M = it(r, f(d, 0, -d)), h = it(r, f(d, 0, d)), b = it(r, f(-d, 0, d)), U = y("#355d36");
  u.triangle(T, M, v, U), u.triangle(M, h, v, U), u.triangle(h, b, v, U), u.triangle(b, T, v, U);
}
function Nm(u, c, s, r, d, v, T, M, h) {
  const b = lt(c, s);
  u.box(f(c, b + d * 0.5, s), f(r, d, v), { top: T, sideA: M, sideB: h });
}
function ds(u, c, s, r, d, v, T, M, h, b, U = 2.2) {
  u.box(f(c, s, r + T * 0.5 + U), f(d, v, 4), { top: M, sideA: h, sideB: b });
}
function Cc(u, c, s, r, d, v, T, M, h) {
  const b = lt(c, s), U = mt(T, y("#dbe3ec"), 0.24), E = mt(M, y("#8d98a5"), 0.22), N = mt(h, y("#7f8a96"), 0.22), w = mt(T, y("#cfd7df"), 0.16), L = mt(M, y("#6e7883"), 0.1), Q = mt(h, y("#606872"), 0.1), P = mt(T, y("#9da7b4"), 0.18), rt = mt(M, y("#75808c"), 0.12), gt = mt(h, y("#68717c"), 0.12), W = y("#aac8de"), J = y("#7898b4"), at = y("#6585a0");
  u.box(f(c, b + d * 0.5, s), f(r, d, v), { top: T, sideA: M, sideB: h }), u.box(f(c, b + d + 7, s - 4), f(r + 18, 14, v - 10), { top: U, sideA: E, sideB: N });
  const et = s + v * 0.5 + 2.2, V = r * 0.72, pt = 4, $ = (V - pt * 3) / 4, Vt = c - V * 0.5 + $ * 0.5;
  for (let Gt = 0; Gt < 4; Gt += 1)
    u.box(f(Vt + Gt * ($ + pt), b + d * 0.39, et), f($, d * 0.64, 4), {
      top: w,
      sideA: L,
      sideB: Q
    });
  u.box(f(c, b + d * 0.74, et + 0.4), f(V + 12, d * 0.08, 4.6), { top: U, sideA: E, sideB: N });
  const Lt = r * 0.24, X = v * 0.34, dt = d * 0.34;
  u.box(f(c - r * 0.33, b + dt * 0.5, s - v * 0.12), f(Lt, dt, X), {
    top: P,
    sideA: rt,
    sideB: gt
  }), ds(u, c - r * 0.33, b + dt * 0.62, s - v * 0.12, Lt * 0.64, dt * 0.22, X, W, J, at), u.box(f(c + r * 0.22, b + d + 11, s - 8), f(18, 6, 18), { top: U, sideA: E, sideB: N }), u.box(f(c - r * 0.08, b + d + 11, s + 6), f(14, 5, 14), { top: U, sideA: E, sideB: N });
}
function is(u, c, s, r, d, v, T, M, h) {
  const b = lt(c, s), U = mt(T, y("#d6dee7"), 0.24), E = mt(M, y("#8b97a4"), 0.2), N = mt(h, y("#7a8591"), 0.2), w = y("#aac9df"), L = y("#7697b4"), Q = y("#64829b");
  u.box(f(c, b + d * 0.5, s), f(r, d, v), { top: T, sideA: M, sideB: h }), u.box(f(c, b + d + 5, s - 2), f(r + 10, 10, v - 10), { top: U, sideA: E, sideB: N }), ds(u, c, b + d * 0.62, s, r * 0.74, d * 0.18, v, w, L, Q);
  const P = v * 0.26, rt = d * 0.38;
  u.box(f(c, b + rt * 0.5, s + v * 0.5 + P * 0.46), f(r * 0.46, rt, P), {
    top: w,
    sideA: L,
    sideB: Q
  }), u.box(f(c - r * 0.26, b + d + 8, s - v * 0.12), f(14, 6, 14), { top: U, sideA: E, sideB: N }), u.box(f(c + r * 0.18, b + d + 8, s + v * 0.08), f(18, 6, 18), { top: U, sideA: E, sideB: N });
}
function Bm(u, c, s) {
  const r = lt(c, s), d = y("#90a2b3"), v = y("#6d7e8f"), T = y("#5b6c7c"), M = y("#7d8ea0"), h = y("#627283"), b = y("#536271"), U = y("#b5d3ef"), E = y("#8196ab"), N = y("#6f8193"), w = y("#d4dee8"), L = y("#8a96a1"), Q = y("#77838e");
  u.box(f(c - 18, r + 20, s), f(116, 40, 96), { top: d, sideA: v, sideB: T }), u.box(f(c + 8, r + 92, s - 6), f(44, 104, 44), { top: M, sideA: h, sideB: b }), u.box(f(c + 8, r + 178, s), f(108, 34, 108), { top: U, sideA: E, sideB: N }), u.box(f(c + 8, r + 202, s), f(88, 10, 88), { top: w, sideA: L, sideB: Q }), u.box(f(c + 8, r + 219, s), f(8, 24, 8), { top: w, sideA: L, sideB: Q }), u.box(f(c - 54, r + 16, s + 12), f(50, 32, 44), { top: d, sideA: v, sideB: T }), u.box(f(c + 8, r + 178, s + 56), f(88, 18, 4), { top: U, sideA: E, sideB: N }), u.box(f(c + 8, r + 178, s - 56), f(88, 18, 4), { top: U, sideA: E, sideB: N }), u.box(f(c + 62, r + 178, s), f(4, 18, 88), { top: U, sideA: E, sideB: N }), u.box(f(c - 46, r + 178, s), f(4, 18, 88), { top: U, sideA: E, sideB: N }), ds(u, c - 54, r + 18, s + 12, 28, 10, 44, U, E, N);
}
function Hm(u) {
  const c = y("#5d8aa3"), s = y("#7eafc7"), r = y("#b3aa83");
  for (let d = sn - 60; d > Ha + 120; d -= 120) {
    const v = d - 120, T = la(d), M = la(v), h = 110 + Math.sin(d * 12e-4) * 18, b = 118 + Math.sin(v * 12e-4) * 18, U = h * 0.58, E = b * 0.58, N = 26 + Math.sin(d * 17e-4 + 1.4) * 6, w = 26 + Math.sin(v * 17e-4 + 1.4) * 6, L = qa(T, d) ?? 2.6, Q = qa(M, v) ?? 2.6;
    u.quad(
      f(T - h - N, lt(T - h - N, d) + 0.16, d),
      f(T - h, lt(T - h, d) + 0.12, d),
      f(M - b, lt(M - b, v) + 0.12, v),
      f(M - b - w, lt(M - b - w, v) + 0.16, v),
      r
    ), u.quad(
      f(T + h, lt(T + h, d) + 0.12, d),
      f(T + h + N, lt(T + h + N, d) + 0.16, d),
      f(M + b + w, lt(M + b + w, v) + 0.16, v),
      f(M + b, lt(M + b, v) + 0.12, v),
      r
    ), u.quad(
      f(T - h, L, d),
      f(T + h, L, d),
      f(M + b, Q, v),
      f(M - b, Q, v),
      c
    ), u.quad(
      f(T - U, L + 0.04, d),
      f(T + U, L + 0.04, d),
      f(M + E, Q + 0.04, v),
      f(M - E, Q + 0.04, v),
      s
    );
  }
}
function qm(u) {
  const c = y("#6b9ab5");
  u.quad(f(1260, 3.8, 2310), f(2460, 3.8, 2210), f(2520, 3.8, 1320), f(1180, 3.8, 1450), c), u.quad(f(1380, 3.7, 2440), f(2140, 3.8, 2400), f(2460, 3.8, 1780), f(1420, 3.8, 1630), y("#7db1c9"));
}
function wm(u) {
  const c = y("#c8ba8c"), s = y("#dbce9c"), r = [
    { z: 3080, offset: 58, halfWidth: 46, halfLength: 140 },
    { z: 2280, offset: -42, halfWidth: 38, halfLength: 122 },
    { z: 1460, offset: 64, halfWidth: 42, halfLength: 132 },
    { z: 520, offset: -34, halfWidth: 34, halfLength: 118 },
    { z: -760, offset: 52, halfWidth: 36, halfLength: 136 },
    { z: -1960, offset: -48, halfWidth: 44, halfLength: 152 }
  ];
  for (const d of r) {
    const v = la(d.z) + d.offset, T = (qa(v, d.z) ?? 2.9) + 0.02, M = d.z + d.halfLength, h = d.z - d.halfLength;
    u.quad(
      f(v - d.halfWidth, T, M),
      f(v + d.halfWidth * 0.76, T, M - 14),
      f(v + d.halfWidth, T, h),
      f(v - d.halfWidth * 0.68, T, h + 18),
      c
    ), u.quad(
      f(v - d.halfWidth * 0.46, T + 0.03, M - 26),
      f(v + d.halfWidth * 0.34, T + 0.03, M - 40),
      f(v + d.halfWidth * 0.44, T + 0.03, h + 26),
      f(v - d.halfWidth * 0.3, T + 0.03, h + 40),
      s
    );
  }
}
function Ym(u) {
  const c = y("#bdb085"), s = y("#88b5c5"), r = y("#a3d0dc");
  u.quad(f(1120, lt(1120, 2490) + 0.1, 2490), f(2490, lt(2490, 2360) + 0.1, 2360), f(2450, 4.02, 2230), f(1260, 4.02, 2310), c), u.quad(f(1040, lt(1040, 1400) + 0.1, 1400), f(1180, 4.02, 1450), f(1260, 4.02, 2310), f(1120, lt(1120, 2490) + 0.1, 2490), c), u.quad(f(2490, lt(2490, 2360) + 0.1, 2360), f(2580, lt(2580, 1230) + 0.1, 1230), f(2520, 4.02, 1320), f(2450, 4.02, 2230), c), u.quad(f(1040, lt(1040, 1400) + 0.1, 1400), f(2580, lt(2580, 1230) + 0.1, 1230), f(2520, 4.02, 1320), f(1180, 4.02, 1450), c), u.quad(f(1320, 3.86, 2340), f(2200, 3.86, 2270), f(2300, 3.84, 1870), f(1420, 3.84, 1930), s), u.quad(f(1440, 3.84, 1930), f(2340, 3.84, 1850), f(2400, 3.84, 1500), f(1360, 3.84, 1600), s), u.quad(f(1500, 3.88, 2220), f(2120, 3.88, 2170), f(2200, 3.88, 1900), f(1540, 3.88, 1940), r);
}
function Lm(u) {
  const c = y("#77abc2"), s = y("#9fd1de"), r = y("#b8b08c");
  for (let d = 3200; d > -2200; d -= 96) {
    const v = d - 96, T = cs(d), M = cs(v), h = 30 + Math.sin(d * 22e-4) * 5, b = 30 + Math.sin(v * 22e-4) * 5, U = h * 0.45, E = b * 0.45, N = 12 + Math.cos(d * 26e-4 + 0.5) * 3, w = 12 + Math.cos(v * 26e-4 + 0.5) * 3, L = (qa(T, d) ?? 2.8) + 0.22, Q = (qa(M, v) ?? 2.8) + 0.22;
    u.quad(
      f(T - h - N, lt(T - h - N, d) + 0.12, d),
      f(T - h, lt(T - h, d) + 0.08, d),
      f(M - b, lt(M - b, v) + 0.08, v),
      f(M - b - w, lt(M - b - w, v) + 0.12, v),
      r
    ), u.quad(
      f(T + h, lt(T + h, d) + 0.08, d),
      f(T + h + N, lt(T + h + N, d) + 0.12, d),
      f(M + b + w, lt(M + b + w, v) + 0.12, v),
      f(M + b, lt(M + b, v) + 0.08, v),
      r
    ), u.quad(
      f(T - h, L, d),
      f(T + h, L, d),
      f(M + b, Q, v),
      f(M - b, Q, v),
      c
    ), u.quad(
      f(T - U, L + 0.03, d),
      f(T + U, L + 0.03, d),
      f(M + E, Q + 0.03, v),
      f(M - E, Q + 0.03, v),
      s
    );
  }
}
function Gm(u, c, s, r, d, v, T) {
  const M = r * 0.5, h = d * 0.5, b = Math.min(10, Math.max(6, Math.min(r, d) * 0.06)), U = c - M, E = c + M, N = s + h, w = s - h, L = (Q, P, rt, gt, W, J, at, et, V, pt) => {
    u.quad(
      f(Q, lt(Q, P) + pt, P),
      f(rt, lt(rt, gt) + pt, gt),
      f(W, lt(W, J) + pt, J),
      f(at, lt(at, et) + pt, et),
      V
    );
  };
  L(U, N, E, N, E, w, U, w, v, 0.09), L(U, N, U + b, N, U + b, w, U, w, T, 0.14), L(E - b, N, E, N, E, w, E - b, w, T, 0.14), L(U, N, E, N, E, N - b, U, N - b, T, 0.14), L(U, w + b, E, w + b, E, w, U, w, T, 0.14);
}
function Xm(u) {
  const c = [
    { x: -1660, z: 2160, w: 520, d: 320, fill: y("#8ea064"), border: y("#5e7448") },
    { x: -1120, z: 1980, w: 420, d: 280, fill: y("#7f9558"), border: y("#597042") },
    { x: -620, z: 1820, w: 440, d: 260, fill: y("#9aab6c"), border: y("#63784a") },
    { x: 40, z: 1760, w: 520, d: 320, fill: y("#8ea667"), border: y("#5e7649") },
    { x: 760, z: 1820, w: 580, d: 320, fill: y("#98a75f"), border: y("#607245") },
    { x: 1480, z: 2020, w: 640, d: 360, fill: y("#8b9859"), border: y("#596c40") },
    { x: -1540, z: 860, w: 460, d: 260, fill: y("#79884f"), border: y("#55673d") },
    { x: -940, z: 960, w: 420, d: 260, fill: y("#a2ae73"), border: y("#66794b") },
    { x: -280, z: 980, w: 380, d: 240, fill: y("#b2a56c"), border: y("#786a43") },
    { x: 520, z: 1080, w: 460, d: 260, fill: y("#8da15f"), border: y("#607648") },
    { x: 1260, z: 980, w: 520, d: 280, fill: y("#9cab66"), border: y("#697f4f") },
    { x: -1380, z: -180, w: 420, d: 240, fill: y("#7f8f56"), border: y("#586b40") },
    { x: 1120, z: -260, w: 440, d: 260, fill: y("#b2a36d"), border: y("#766740") }
  ];
  for (const s of c)
    Gm(u, s.x, s.z, s.w, s.d, s.fill, s.border);
}
function Qm(u) {
  const c = y("#aa9e74");
  ae(u, [f(-1840, 0, 2100), f(-860, 0, 1980), f(120, 0, 1880), f(1080, 0, 1820), f(1960, 0, 1960)], 12, c), ae(u, [f(-1740, 0, 1160), f(-720, 0, 1080), f(240, 0, 1100), f(1180, 0, 1030)], 10, c), ae(u, [f(-1520, 0, 240), f(-840, 0, 120), f(-180, 0, 40), f(620, 0, -40), f(1360, 0, -120)], 10, c);
}
function Vm(u) {
  const c = y("#b6a780");
  ae(u, [f(-1460, 0, 340), f(-980, 0, 300), f(-560, 0, 236), f(-280, 0, 188)], 10, c), ae(u, [f(340, 0, 220), f(760, 0, 258), f(1180, 0, 320), f(1540, 0, 462)], 10, c), ae(u, [f(-880, 0, 680), f(-760, 0, 420), f(-720, 0, 180)], 8, c), ae(u, [f(980, 0, 780), f(980, 0, 540), f(980, 0, 260)], 8, c);
}
function Zm(u) {
  const c = y("#b2a47c"), s = y("#9f9270");
  ae(u, [f(1760, 0, 1880), f(2100, 0, 2220), f(2460, 0, 2460), f(2860, 0, 2380)], 10, c), ae(u, [f(2860, 0, 2380), f(2960, 0, 1920), f(2940, 0, 1420), f(2840, 0, 940), f(2700, 0, 520)], 10, s), ae(u, [f(2680, 0, 520), f(2440, 0, 180), f(2180, 0, -220), f(1920, 0, -740), f(1740, 0, -1360)], 10, s), ae(u, [f(1180, 0, 1460), f(1e3, 0, 1760), f(980, 0, 2140), f(1160, 0, 2460)], 8, c);
}
function Km(u) {
  const c = y("#ab9d75");
  ae(u, [f(1740, 0, -1360), f(2060, 0, -1660), f(2460, 0, -2080), f(2900, 0, -2620)], 8, c), ae(u, [f(-1540, 0, 1640), f(-1820, 0, 2140), f(-2080, 0, 2560), f(-2360, 0, 2940)], 8, c), ae(u, [f(2860, 0, 1080), f(3120, 0, 1220), f(3300, 0, 1500)], 8, c);
}
function Jm(u) {
  const c = y("#b8b089"), s = y("#6f9fba"), r = y("#9ccddc"), d = (v, T, M, h, b, U) => {
    const E = qa(v, T) ?? 4.2;
    u.quad(
      f(v - M - 28, lt(v - M - 28, T + h + 22) + 0.1, T + h + 22),
      f(v + M + 14, lt(v + M + 14, T + h - 12) + 0.1, T + h - 12),
      f(v + M + 30, lt(v + M + 30, T - h - 18) + 0.1, T - h - 18),
      f(v - M - 10, lt(v - M - 10, T - h + 10) + 0.1, T - h + 10),
      c
    ), u.quad(
      f(v - M + b, E, T + h),
      f(v + M, E, T + h - U),
      f(v + M - 18, E, T - h),
      f(v - M - b * 0.4, E, T - h + U * 0.4),
      s
    ), u.quad(
      f(v - M * 0.54, E + 0.03, T + h * 0.42),
      f(v + M * 0.42, E + 0.03, T + h * 0.24),
      f(v + M * 0.34, E + 0.03, T - h * 0.46),
      f(v - M * 0.46, E + 0.03, T - h * 0.32),
      r
    );
  };
  d(-1080, 260, 118, 82, 14, 12), d(1320, 360, 138, 96, -18, 14);
}
function km(u) {
  const c = y("#6b727d"), s = y("#565d67"), r = y("#a59a73"), d = (v, T, M, h, b, U, E, N, w, L = 0.16) => {
    u.quad(
      f(v, lt(v, T) + L, T),
      f(M, lt(M, h) + L, h),
      f(b, lt(b, U) + L, U),
      f(E, lt(E, N) + L, N),
      w
    );
  };
  d(144, 92, 372, 92, 372, -232, 144, -232, c), d(214, -232, 522, -232, 522, -540, 214, -540, c), d(-486, -454, -172, -454, -172, -762, -486, -762, c), d(218, -660, 498, -660, 498, -944, 218, -944, c), ae(u, [f(56, 0, -300), f(150, 0, -300), f(286, 0, -278), f(392, 0, -168)], 22, s), ae(u, [f(54, 0, -820), f(188, 0, -820), f(328, 0, -788)], 22, s), ae(u, [f(-54, 0, -620), f(-186, 0, -620), f(-318, 0, -610)], 22, s), ae(u, [f(-120, 0, 168), f(180, 0, 232), f(476, 0, 182), f(748, 0, 94)], 12, r), ae(u, [f(478, 0, 104), f(598, 0, -160), f(690, 0, -440), f(722, 0, -742)], 12, r);
}
function ae(u, c, s, r) {
  for (let d = 0; d < c.length - 1; d += 1) {
    const v = c[d], T = c[d + 1], M = T.x - v.x, h = T.z - v.z, b = Math.hypot(M, h);
    if (b < 1e-3) continue;
    const U = -h / b, E = M / b, N = s * 0.5, w = v.x + U * N, L = v.z + E * N, Q = v.x - U * N, P = v.z - E * N, rt = T.x - U * N, gt = T.z - E * N, W = T.x + U * N, J = T.z + E * N;
    u.quad(
      f(w, lt(w, L) + 0.18, L),
      f(W, lt(W, J) + 0.18, J),
      f(rt, lt(rt, gt) + 0.18, gt),
      f(Q, lt(Q, P) + 0.18, P),
      r
    );
  }
}
function on(u, c, s, r, d, v) {
  const T = [
    [y("#b7c1ce"), y("#8e9cab"), y("#7c8896")],
    [y("#d0c4b4"), y("#a79888"), y("#8e7d6f")],
    [y("#c4d1c7"), y("#90a692"), y("#78907a")]
  ];
  for (let M = 0; M < r; M += 1)
    for (let h = 0; h < d; h += 1) {
      const b = c + (h - (d - 1) * 0.5) * v, U = s + (M - (r - 1) * 0.5) * v, E = (We(b, U + 33) - 0.5) * 34, N = (We(U, b - 18) - 0.5) * 34, w = b + E, L = U + N, Q = 26 + We(w + 14, L + 41) * 18, P = 22 + We(L - 35, w + 71) * 16, rt = 20 + We(w - 11, L + 7) * 36, gt = T[(M + h) % T.length];
      Nm(u, w, L, Q, rt, P, gt[0], gt[1], gt[2]);
    }
}
function Ba(u, c, s, r, d, v, T, M) {
  for (let h = 0; h < r; h += 1) {
    const b = (We(c * 0.3 + h * 17, s * 0.1 - h * 29) * 2 - 1) * d, U = (We(s * 0.3 - h * 11, c * 0.15 + h * 23) * 2 - 1) * v, E = c + b, N = s + U;
    if (Math.abs(E) < 280 && N < Ft + 260 && N > Ce - 180) continue;
    const w = Wt(T, M, We(E + h * 3, N - h * 5));
    qc(u, f(E, lt(E, N), N), w);
  }
}
function Fm(u) {
  for (let c = 3400; c > -5200; c -= 240)
    qc(u, f(-760, lt(-760, c), c), 54 + (c % 520 === 0 ? 12 : 0)), qc(u, f(860, lt(860, c - 70), c - 70), 50 + (c % 480 === 0 ? 10 : 0));
}
function ea(u, c, s, r, d, v, T, M) {
  for (let h = 0; h < v; h += 1) {
    const b = v <= 1 ? 0.5 : h / (v - 1), U = Wt(c, r, b), E = Wt(s, d, b), N = (We(U + h * 17, E - 26) - 0.5) * 26, w = (We(E - h * 19, U + 31) - 0.5) * 26, L = U + N, Q = E + w;
    if (Math.abs(L) < 280 && Q < Ft + 260 && Q > Ce - 180) continue;
    const P = Wt(T, M, We(L + 33, Q - 27));
    qc(u, f(L, lt(L, Q), Q), P);
  }
}
function Wm(u) {
  ea(u, -1880, 2160, 1900, 2060, 22, 30, 50), ea(u, -1680, 1320, 1460, 1200, 20, 28, 48), ea(u, -1560, 500, 1280, 640, 18, 28, 46), ea(u, -1240, 2520, -1280, -420, 16, 30, 52), ea(u, 760, 2220, 740, -360, 15, 30, 50);
}
function $m(u) {
  ea(u, 1280, 2540, 2820, 2400, 12, 24, 42), ea(u, 2860, 2180, 2720, 760, 12, 24, 44), ea(u, 1700, -1100, 2920, -2700, 14, 28, 48), ea(u, -1860, 2140, -2460, 3140, 10, 26, 44);
}
function fn(u, c, s, r, d, v, T) {
  const M = mt(v, y("#213445"), 0.38), h = mt(v, y("#7d92a2"), 0.18), b = mt(h, y("#f7fbff"), 0.9);
  for (let U = -10; U <= 10; U += 1) {
    const E = U * d, N = 24 + Math.sin(U * 0.82 + T) * 10, w = s + Math.sin(U * 0.86 + T) * 72 + r * (0.82 + (U + 12) % 3 * 0.12), L = s + Math.cos(U * 1.18 + T * 1.4) * 48 + r * (0.46 + (U + 9) % 4 * 0.08);
    if (u.triangle(f(E - 360, N, c + 120), f(E - 30, w, c - 190), f(E + 300, N + 14, c + 60), M), u.triangle(f(E - 190, N + 10, c + 36), f(E + 74, L, c - 84), f(E + 286, N + 22, c + 12), h), u.triangle(f(E + 44, N + 6, c + 92), f(E + 278, s + r * 0.58 + Math.sin(U * 0.74 + T) * 38, c - 70), f(E + 468, N + 18, c + 84), M), w > s + r * 0.82) {
      const Q = w - r * 0.22;
      u.triangle(f(E - 88, Q, c - 92), f(E - 28, w, c - 190), f(E + 26, Q + 8, c - 116), b), u.triangle(f(E - 18, Q + 4, c - 124), f(E - 28, w, c - 190), f(E + 62, Q - 6, c - 98), b);
    }
    if (L > s + r * 0.68) {
      const Q = L - r * 0.18;
      u.triangle(f(E + 12, Q, c - 54), f(E + 74, L, c - 84), f(E + 124, Q + 6, c - 30), b);
    }
  }
}
function Im(u, c, s) {
  const r = y("#f4f8fb"), d = y("#c6d4dd"), v = y("#aebfca"), T = (M, h) => {
    const E = Array.from({ length: 7 }, (N, w) => {
      const L = -Math.PI / 2 + w / 6 * Math.PI, Q = Math.cos(L), P = Math.sin(L);
      return Array.from({ length: 12 }, (rt, gt) => {
        const W = gt / 12 * Math.PI * 2;
        return it(M, f(Math.cos(W) * h.x * Q, P * h.y, Math.sin(W) * h.z * Q));
      });
    });
    for (let N = 0; N < 6; N += 1)
      for (let w = 0; w < 12; w += 1) {
        const L = (w + 1) % 12, Q = (E[N][w].y + E[N + 1][L].y) * 0.5 - M.y, P = Q > h.y * 0.3 ? r : Q < -h.y * 0.25 ? v : d;
        u.quad(E[N][w], E[N][L], E[N + 1][L], E[N + 1][w], P);
      }
  };
  T(c, f(88 * s, 30 * s, 36 * s)), T(it(c, f(-58 * s, 8 * s, -15 * s)), f(54 * s, 24 * s, 30 * s)), T(it(c, f(62 * s, 5 * s, 13 * s)), f(64 * s, 26 * s, 34 * s));
}
function Pm(u) {
  const c = [
    f(-1800, 520, 2100),
    f(1400, 560, 1600),
    f(2600, 610, -260),
    f(-2600, 620, -1320),
    f(800, 680, -2500),
    f(-600, 590, -3880),
    f(2200, 640, -4200)
  ];
  for (let s = 0; s < c.length; s += 1)
    Im(u, c[s], 1 + s % 3 * 0.28);
}
function tg() {
  const u = ci(), c = y("#edf3fb"), s = y("#d6e1ee"), r = y("#b8c6d7"), d = y("#94a6b9"), v = y("#e2ebf7"), T = y("#9dacbe"), M = y("#123b5c"), h = y("#0b263e"), b = y("#39a7bd"), U = y("#17394f"), E = y("#0a2234"), N = y("#313845"), w = y("#495463"), L = y("#39424f"), Q = y("#141a24"), P = y("#eef4fb"), rt = (g) => [
    f(-g.topWidth, g.topY, g.z),
    f(g.topWidth, g.topY, g.z),
    f(g.shoulderWidth, g.shoulderY, g.z),
    f(g.bottomWidth, g.bottomY, g.z),
    f(-g.bottomWidth, g.bottomY, g.z),
    f(-g.shoulderWidth, g.shoulderY, g.z)
  ], gt = (g, R, Y) => {
    for (let G = 0; G < g.length; G += 1) {
      const k = (G + 1) % g.length;
      u.quad(g[G], g[k], R[k], R[G], Y[G]);
    }
  }, W = (g, R, Y) => {
    const G = f(0, g.reduce((k, ct) => k + ct.y, 0) / g.length, R);
    for (let k = 0; k < g.length; k += 1) {
      const ct = (k + 1) % g.length;
      u.triangle(g[k], g[ct], G, Y);
    }
  }, J = (g, R, Y, G, k) => [
    f(-R, Y, g),
    f(R, Y, g),
    f(G, k, g),
    f(-G, k, g)
  ], at = (g, R) => {
    u.quad(g[0], g[1], R[1], R[0], U), u.quad(g[1], g[2], R[2], R[1], E), u.quad(g[2], g[3], R[3], R[2], E), u.quad(g[3], g[0], R[0], R[3], E);
  }, et = (g, R) => {
    const Y = f(0, (g[0].y + g[2].y) * 0.5, R);
    for (let G = 0; G < g.length; G += 1) {
      const k = (G + 1) % g.length;
      u.triangle(g[G], g[k], Y, G === 0 ? U : E);
    }
  }, V = (g, R, Y, G, k, ct, st) => {
    const At = Kt(it(R, Nt(g, -1))), St = Math.abs(At.y) > 0.92 ? f(1, 0, 0) : f(0, 1, 0), Ee = $e(St, At), Ie = Math.hypot(Ee.x, Ee.y, Ee.z) > 1e-4 ? Kt(Ee) : f(1, 0, 0), sl = Kt($e(At, Ie)), Ge = Nt(Ie, Y), ye = Nt(sl, G), Pe = it(it(g, Ge), ye), Sl = it(it(g, Nt(Ge, -1)), ye), rl = it(it(g, Nt(Ge, -1)), Nt(ye, -1)), aa = it(it(g, Ge), Nt(ye, -1)), xl = it(it(R, Ge), ye), Ul = it(it(R, Nt(Ge, -1)), ye), Al = it(it(R, Nt(Ge, -1)), Nt(ye, -1)), wa = it(it(R, Ge), Nt(ye, -1));
    u.quad(Pe, Sl, Ul, xl, k), u.quad(Sl, rl, Al, Ul, ct), u.quad(rl, aa, wa, Al, st), u.quad(aa, Pe, xl, wa, ct), u.triangle(Pe, Sl, rl, st), u.triangle(Pe, rl, aa, st), u.triangle(xl, wa, Al, st), u.triangle(xl, Al, Ul, st);
  }, pt = [
    { z: -88, topY: 0.84, topWidth: 0.06, shoulderY: 0.34, shoulderWidth: 0.82, bottomY: -0.48, bottomWidth: 0.44 },
    { z: -80, topY: 1.9, topWidth: 0.52, shoulderY: 0.62, shoulderWidth: 1.95, bottomY: -1.28, bottomWidth: 1.12 },
    { z: -64, topY: 3, topWidth: 1.72, shoulderY: 1.05, shoulderWidth: 3.05, bottomY: -2.08, bottomWidth: 2.08 },
    { z: -40, topY: 3.72, topWidth: 2.74, shoulderY: 1.3, shoulderWidth: 4.18, bottomY: -2.58, bottomWidth: 2.92 },
    { z: -12, topY: 3.92, topWidth: 3.18, shoulderY: 1.38, shoulderWidth: 4.42, bottomY: -2.76, bottomWidth: 3.16 },
    { z: 22, topY: 3.86, topWidth: 3.12, shoulderY: 1.34, shoulderWidth: 4.38, bottomY: -2.72, bottomWidth: 3.12 },
    { z: 52, topY: 3.32, topWidth: 2.48, shoulderY: 1.1, shoulderWidth: 3.62, bottomY: -2.34, bottomWidth: 2.56 },
    { z: 72, topY: 2.34, topWidth: 1.42, shoulderY: 0.72, shoulderWidth: 2.28, bottomY: -1.48, bottomWidth: 1.42 },
    { z: 86, topY: 0.92, topWidth: 0.06, shoulderY: 0.28, shoulderWidth: 0.58, bottomY: -0.24, bottomWidth: 0.12 }
  ], $ = pt.map(rt), Vt = [
    c,
    P,
    s,
    d,
    r,
    P
  ];
  for (let g = 0; g < $.length - 1; g += 1)
    gt($[g], $[g + 1], Vt);
  W($[0], pt[0].z, c), W($[$.length - 1], pt[pt.length - 1].z, h);
  const Lt = f(0, 0.42, -96.5), X = $[0];
  for (let g = 0; g < X.length; g += 1) {
    const R = (g + 1) % X.length;
    u.triangle(X[g], X[R], Lt, g <= 1 || g === 5 ? c : s);
  }
  const dt = J(-76, 0.12, 2.18, 1.92, 1.48), Gt = J(-68, 0.52, 2.92, 2.34, 1.82), It = J(-62, 0.96, 3.14, 2.52, 1.92);
  at(dt, Gt), at(Gt, It), et(dt, -76), et(It, -62), u.box(f(0, 2.85, -68), f(0.18, 0.52, 13), { top: s, sideA: r, sideB: s });
  for (const g of [-1, 1]) {
    for (let R = -48; R <= 54; R += 8.5) {
      if (R > -38 && R < -25 || R > 34 && R < 45) continue;
      const Y = F(1 - Math.abs(R - 3) / 98, 0.58, 1), G = g * (3.55 * Y + 0.1);
      u.box(f(G, 1.55, R), f(0.22, 1.16, 1.75), { top: U, sideA: E, sideB: E });
    }
    for (const R of [-32, 40])
      u.box(f(g * 4.17, 0.05, R), f(0.16, 3.12, 9.6), { top: r, sideA: h, sideB: s }), u.box(f(g * 4.25, 1.3, R - 1.8), f(0.12, 0.78, 1.25), { top: U, sideA: E, sideB: E });
  }
  const C = (g) => {
    const R = f(g * 5.2, 6.58, -16.6), Y = f(g * 53.6, 8.12, -8.2), G = f(g * 50.8, 8.46, 17.4), k = f(g * 16.8, 6.84, 13.9), ct = it(R, f(0, -0.82, 0.28)), st = it(Y, f(0, -0.86, 0.18)), At = it(G, f(0, -0.82, -0.18)), St = it(k, f(0, -0.72, -0.08));
    u.quad(R, Y, G, k, v), u.quad(ct, St, At, st, T), u.quad(R, k, St, ct, r), u.quad(Y, st, At, G, h), u.quad(
      f(g * 18.6, 6.88, 8.6),
      f(g * 37.8, 7.54, 12.2),
      f(g * 36.4, 7.48, 16.7),
      f(g * 17.2, 6.86, 13.8),
      h
    ), u.quad(
      f(g * 39.4, 7.62, -0.6),
      f(g * 50, 7.98, 2.4),
      f(g * 49.2, 7.96, 9.8),
      f(g * 38.2, 7.66, 6.7),
      h
    ), u.quad(
      f(g * 5, 5.92, -10.8),
      f(g * 12.6, 6.22, -10.4),
      f(g * 11.6, 6.48, -2.6),
      f(g * 4.6, 6.06, -3.4),
      s
    );
  }, K = (g) => {
    V(f(g * 21.6, 7.26, 1.8), f(g * 9, -1.48, 5.8), 0.34, 0.26, N, w, L);
  }, ut = (g) => {
    const R = f(g * 1.7, 3.66, 38.8), Y = f(g * 12.6, 3.92, 42), G = f(g * 10.2, 4.02, 51), k = f(g * 1.46, 3.76, 48.2), ct = it(R, f(0, -0.34, 0.08)), st = it(Y, f(0, -0.38, 0.08)), At = it(G, f(0, -0.36, -0.12)), St = it(k, f(0, -0.3, -0.04));
    u.quad(R, Y, G, k, v), u.quad(ct, St, At, st, T), u.quad(
      f(g * 3.9, 3.78, 44.5),
      f(g * 8.9, 3.88, 46),
      f(g * 8, 3.86, 49.4),
      f(g * 3.5, 3.8, 47.9),
      h
    );
  }, _t = (g) => {
    u.box(f(g * 5, 1.05, -7), f(0.16, 1, 28.5), { top: b, sideA: h, sideB: h }), u.box(f(g * 4.65, 1.2, -20), f(0.16, 0.8, 8.4), { top: M, sideA: h, sideB: h }), u.box(f(g * 3.8, 1, 24.5), f(0.16, 0.54, 10.2), { top: M, sideA: h, sideB: h });
  }, jt = (g) => {
    const R = g * 20.4, Y = 2.1, G = [
      { z: -12, radius: 3.35 },
      { z: -9, radius: 4.05 },
      { z: 3, radius: 4 },
      { z: 12, radius: 3.45 },
      { z: 16, radius: 2.75 }
    ], k = 16, ct = [h, r, s, r], st = G.map(
      ({ z: At, radius: St }) => Array.from({ length: k }, (Ee, Ie) => {
        const sl = Ie / k * Math.PI * 2;
        return f(R + Math.cos(sl) * St, Y + Math.sin(sl) * St, At);
      })
    );
    for (let At = 0; At < st.length - 1; At += 1)
      for (let St = 0; St < k; St += 1) {
        const Ee = (St + 1) % k;
        u.quad(st[At][St], st[At][Ee], st[At + 1][Ee], st[At + 1][St], ct[At]);
      }
    u.ring(f(R, Y, -11.8), 3.6, 0.34, 18, 6, P), u.box(f(R, 5.1, -1), f(2.1, 2.5, 11), { top: s, sideA: r, sideB: h });
  };
  C(-1), C(1), K(-1), K(1), ut(-1), ut(1), _t(-1), _t(1), jt(-1), jt(1), u.quad(f(-0.92, 12.2, 42), f(0.92, 12.2, 42), f(1.25, 3.76, 54.8), f(-1.25, 3.76, 54.8), h), u.quad(f(-1.02, 10.7, 48), f(1.02, 10.7, 48), f(0.76, 3.74, 55.9), f(-0.76, 3.74, 55.9), b), u.quad(f(-1.48, 8.78, 34.4), f(1.48, 8.78, 34.4), f(2.08, 3.86, 43.2), f(-2.08, 3.86, 43.2), h), u.quad(f(-1.72, 7.04, 30.2), f(1.72, 7.04, 30.2), f(2.38, 3.88, 36.5), f(-2.38, 3.88, 36.5), s), u.box(f(0, 8.28, 38.8), f(0.48, 4.7, 5.4), { top: h, sideA: h, sideB: h }), u.box(f(0, 10.35, 45), f(0.36, 3.6, 4.2), { top: b, sideA: h, sideB: h });
  for (const g of [-1, 1])
    u.box(f(g * 4.45, 1.92, -5.8), f(0.2, 1.48, 16.6), { top: s, sideA: s, sideB: r }), u.box(f(g * 2.65, 1.18, 28.8), f(0.16, 0.82, 11.2), { top: s, sideA: s, sideB: r });
  u.box(f(0, -1.45, 7.1), f(4.6, 0.28, 10.2), { top: h, sideA: h, sideB: h }), u.box(f(0, -1.95, -19.5), f(2.6, 0.26, 9.8), { top: d, sideA: s, sideB: r }), V(f(0, -1, -29.4), f(0, -6.85, -32.2), 0.34, 0.28, N, w, L), u.box(f(0, -5.9, -31), f(1.05, 0.5, 1.6), { top: N, sideA: w, sideB: L }), u.box(f(0, -8.55, -33.1), f(3.05, 2, 3.05), { top: Q, sideA: y("#1a2230"), sideB: y("#0f1520") });
  for (const g of [-1, 1])
    V(f(g * 6.2, -1.18, 7.4), f(g * 15, -5.92, 7), 0.34, 0.28, N, w, L), u.box(f(g * 15.4, -5.9, 7), f(0.98, 0.44, 1.7), { top: N, sideA: w, sideB: L }), u.box(f(g * 16.1, -7.8, 7), f(3.38, 2.08, 3.38), { top: Q, sideA: y("#1a2230"), sideB: y("#0f1520") }), u.box(f(g * 53.8, 8.22, 4.8), f(1.06, 1.06, 1.06), {
      top: g < 0 ? y("#d94152") : y("#5ad6a4"),
      sideA: g < 0 ? y("#c32d41") : y("#38b785"),
      sideB: g < 0 ? y("#aa2134") : y("#249e6e")
    });
  return u.box(f(0, 12.58, 46.2), f(0.92, 0.92, 0.92), { top: y("#d94152"), sideA: y("#c32d41"), sideB: y("#aa2134") }), u.toMesh();
}
function eg() {
  const u = ci(), c = y("#111b27"), s = y("#8294a8"), r = y("#c7d6e6"), d = 3.25, v = 24, T = f(0, 0, 0.04);
  for (let M = 0; M < v; M += 1) {
    const h = M / v * Math.PI * 2, b = (M + 1) / v * Math.PI * 2;
    u.triangle(T, f(Math.cos(h) * d, Math.sin(h) * d, 0.04), f(Math.cos(b) * d, Math.sin(b) * d, 0.04), c);
  }
  for (let M = 0; M < 9; M += 1) {
    const h = M / 9 * Math.PI * 2, b = h - 0.24, U = h + 0.19, E = f(Math.cos(b) * 0.72, Math.sin(b) * 0.72, 0.13), N = f(Math.cos(h + 0.38) * 2.85, Math.sin(h + 0.38) * 2.85, 0.1), w = f(Math.cos(U) * 1.12, Math.sin(U) * 1.12, 0.13);
    u.triangle(E, N, w, s);
  }
  return u.ring(f(0, 0, 0.18), 0.62, 0.2, 16, 5, r), u.toMesh();
}
function lg() {
  const u = ci();
  return u.box(f(0, 0, 0), f(8, 3.2, 6), { top: y("#fff2d2"), sideA: y("#c7cbd3"), sideB: y("#9aa2af") }), u.toMesh();
}
function ag() {
  const u = ci();
  return u.ring(f(0, 0, 0), p1, 5.4, 32, 12, y("#9cc7ff")), u.toMesh();
}
function ng() {
  const u = ci();
  return u.quad(f(-16, 0, -24), f(16, 0, -24), f(12, 0, 16), f(-12, 0, 16), y("#17202c")), u.toMesh();
}
const ig = Cm(), ug = tg(), cg = eg(), og = lg(), fg = ag(), sg = ng();
function rg(u, c) {
  const s = [{ mesh: c.staticWorld }], r = z1(u), d = ui(u.position);
  for (let T = 0; T < he.length; T += 1) {
    const M = he[T];
    s.push({
      mesh: c.ring,
      model: e1(M.center, 0, 0, u.time * 0.3, M.radius / p1),
      tint: Dm(T, u)
    });
  }
  const v = u.position.y - lt(u.position.x, u.position.z);
  if (v < 80) {
    const T = F(1 + v / 180, 1, 1.45), M = Kt(f(r.trackForward.x, 0, r.trackForward.z)), h = Math.hypot(M.x, M.y, M.z) > 1e-4 ? Kt($e(M, f(0, 1, 0))) : f(1, 0, 0);
    s.push({
      mesh: c.shadow,
      model: ts(
        f(u.position.x, lt(u.position.x, u.position.z) + 0.8, u.position.z),
        h,
        f(0, 1, 0),
        M,
        T
      ),
      tint: y("#111821")
    });
  }
  if (!(u.cameraMode === "cockpit" && u.mode === "flying")) {
    const T = ts(u.position, r.bodyRight, r.bodyUp, r.bodyForward, 1);
    T[8] *= ls, T[9] *= ls, T[10] *= ls;
    const M = u.mode === "crashed" ? y("#ffb183") : y("#ffffff");
    s.push({ mesh: c.plane, model: T, tint: M });
    const h = u.time * (6 + u.throttle * 18 + u.speed * 0.045);
    for (const b of [-1, 1]) {
      const U = it(
        it(it(u.position, Nt(r.bodyRight, b * 20.4)), Nt(r.bodyUp, 2.1)),
        Nt(r.bodyForward, 8.5)
      ), E = Hc(r.bodyRight, r.bodyForward, h), N = Hc(r.bodyUp, r.bodyForward, h);
      s.push({
        mesh: c.engineFan,
        model: ts(U, E, N, r.bodyForward, 1),
        tint: y("#ffffff")
      });
    }
  }
  for (let T = 0; T < 4; T += 1) {
    const M = -bl - 58 - T * 12, h = Ft - 34;
    s.push({
      mesh: c.papiLight,
      model: e1(f(M, Se + 5.6, h), 0, 0, 0, 1),
      tint: Em(T, d)
    });
  }
  return s;
}
function dg() {
  const u = pe.useRef(null), c = pe.useRef(null), s = pe.useRef(null), r = pe.useRef({}), d = pe.useRef(ns()), v = pe.useRef(null), T = pe.useRef("off"), M = pe.useRef(null), [h, b] = pe.useState(ns()), [U, E] = pe.useState(null), [N, w] = pe.useState("off"), [L, Q] = pe.useState(() => ni()), [P, rt] = pe.useState(!1), [gt, W] = pe.useState(!1), J = N !== "off", at = N === "immersive", et = J && L.width <= 900, V = et && L.width <= 640, pt = Math.max(0, h.position.y - lt(h.position.x, h.position.z)), $ = ui(h.position), Vt = iu(h.heading), Lt = iu(h.selectedHeading), X = F(s1(h.selectedHeading, h.heading) * 57.3 * 0.6, -84, 84), dt = h.pitch * 57.3, Gt = fs(h) * 57.3, It = F((dt - Gt) * 5.2, -70, 70), C = F(h.slip * 78, -60, 60), K = F((dt - h.commandPitch * 57.3) * 5.2, -72, 72), ut = F($.localizerDots * 18, -62, 62), _t = F($.glideslopeDots * 18, -62, 62), jt = Math.abs($.localizerMeters) < 2 ? "LOC centered" : `LOC ${Math.abs($.localizerDots).toFixed(1)} ${$.localizerMeters > 0 ? "R" : "L"}`, g = Math.abs($.glideslopeDeviation) < 2 ? "GS on path" : `GS ${Math.abs($.glideslopeDeviation).toFixed(0)}m ${$.glideslopeDeviation > 0 ? "high" : "low"}`, R = Array.from({ length: 9 }, (Z, xt) => {
    const Pt = (xt - 4) * 10, vt = (Math.round(Vt / 10) * 10 + Pt + 360) % 360;
    return {
      offset: Pt * 6,
      label: Rm(vt),
      major: vt % 30 === 0
    };
  }), Y = pe.useMemo(
    () => [
      { label: `mode ${h.mode}`, tone: "pill" },
      { label: `camera ${h.cameraMode}`, tone: "pill ok" },
      { label: h.autopilot ? `ap ${h.lateralMode}/${h.verticalMode}` : h.flightDirector ? `fd ${h.lateralMode}/${h.verticalMode}` : "hand flying", tone: h.autopilot || h.flightDirector ? "pill ok" : "pill" },
      { label: `score ${h.score}`, tone: "pill ok" },
      { label: `ring ${Math.min(h.nextRing + 1, he.length)}/${he.length}`, tone: h.nextRing >= he.length ? "pill ok" : "pill" },
      { label: `flaps ${nu(h.flaps)}`, tone: h.flaps > 0 ? "pill ok" : "pill" },
      ...h.terrainRunTime > 0.3 ? [{ label: "terrain run hot", tone: "pill ok" }] : [],
      { label: `fuel ${Math.round(h.fuel)}%`, tone: h.fuel > 25 ? "pill ok" : "pill bad" },
      { label: h.stall ? "stall risk" : "stable air", tone: h.stall ? "pill bad" : "pill ok" }
    ],
    [h]
  ), G = pe.useMemo(
    () => [
      { label: `${Math.round(ta(h.speed))} kt`, tone: "pill ok" },
      { label: `${Math.round(pt)} m AGL`, tone: "pill ok" },
      { label: h.nextRing < he.length ? `gate ${h.nextRing + 1}/${he.length}` : "final runway", tone: "pill" },
      { label: h.stall ? "slow down the angle" : "stable flight", tone: h.stall ? "pill bad" : "pill ok" }
    ],
    [pt, h]
  ), k = J ? V ? 1.06 : 1.22 : 1, ct = V ? 178 : J ? 278 : 238, st = V ? 170 : J ? 248 : 214, At = V ? 12 : J ? 14 : 13, St = 240 * k, Ee = 180 * k, Ie = V ? 178 : J ? 232 : 182, sl = V ? 56 : J ? 74 : 62, Ge = h.nextRing / he.length * 100, ye = h.nextRing < he.length ? he[h.nextRing]?.label ?? "Runway touchdown" : "Runway touchdown", Pe = h.terrainRunTime > 0.25, Sl = h.cameraMode === "cockpit" && (h.mode === "flying" || h.mode === "rollout"), rl = ui(h.position), aa = gt || P, xl = J ? `calc(env(safe-area-inset-top, 0px) + ${et ? 8 : 12}px) calc(env(safe-area-inset-right, 0px) + ${et ? 8 : 12}px) calc(env(safe-area-inset-bottom, 0px) + ${et ? 12 : 14}px) calc(env(safe-area-inset-left, 0px) + ${et ? 8 : 12}px)` : "0px", Ul = h.mode === "landed" ? "rgba(71, 156, 111, 0.92)" : h.mode === "crashed" ? "rgba(178, 78, 58, 0.92)" : "rgba(12, 20, 33, 0.88)", Al = J ? {
    ...at ? { position: "fixed", inset: 0, zIndex: 9999 } : {},
    height: at ? "100dvh" : "100%",
    minHeight: "100dvh",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    background: "#07111d",
    border: "none",
    borderRadius: 0,
    padding: xl,
    boxSizing: "border-box"
  } : void 0, wa = J ? {
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr auto auto auto",
    alignContent: "stretch",
    padding: V ? 8 : 12
  } : { display: "grid", gap: 14 }, wc = J ? {
    background: "linear-gradient(180deg, rgba(83,122,194,0.2), rgba(8,13,22,0.44))",
    borderRadius: V ? 16 : 20,
    padding: V ? 8 : 10,
    border: "1px solid rgba(255,255,255,0.1)",
    minHeight: V ? "calc(100dvh - 228px)" : "calc(100dvh - 220px)"
  } : {
    background: "linear-gradient(180deg, rgba(83,122,194,0.16), rgba(13,18,31,0.34))",
    borderRadius: 20,
    padding: 16,
    border: "1px solid rgba(255,255,255,0.08)"
  }, De = J ? {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: V ? "calc(100dvh - 246px)" : "calc(100dvh - 244px)",
    overflow: "hidden",
    borderRadius: V ? 16 : 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0d1523"
  } : {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0d1523"
  };
  function dn(Z) {
    T.current = Z, w(Z);
  }
  function Ya(Z) {
    if (typeof document > "u") return;
    const xt = document.documentElement, Pt = document.body;
    if (Z) {
      M.current || (M.current = {
        htmlOverflow: xt.style.overflow,
        bodyOverflow: Pt.style.overflow,
        htmlOverscroll: xt.style.overscrollBehavior,
        bodyOverscroll: Pt.style.overscrollBehavior
      }), xt.style.overflow = "hidden", Pt.style.overflow = "hidden", xt.style.overscrollBehavior = "none", Pt.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const vt = M.current;
    vt && (xt.style.overflow = vt.htmlOverflow, Pt.style.overflow = vt.bodyOverflow, xt.style.overscrollBehavior = vt.htmlOverscroll, Pt.style.overscrollBehavior = vt.bodyOverscroll, M.current = null);
  }
  function hn() {
    return typeof window > "u" || typeof navigator > "u" ? !1 : ni().width < 900 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent));
  }
  function La(Z) {
    T.current === "immersive" && (Ya(!1), dn("off"), d.current.message = Z, ve(), Q(ni()));
  }
  function fu() {
    Ya(!0), dn("immersive"), W(!0), rt(!1), d.current.message = "Mobile fullscreen enabled. On-screen controls are ready.", ve(), Q(ni());
  }
  function ve() {
    b({
      ...d.current,
      position: { ...d.current.position },
      wind: { ...d.current.wind },
      camera: {
        ...d.current.camera,
        position: { ...d.current.camera.position },
        target: { ...d.current.camera.target },
        up: { ...d.current.camera.up }
      }
    });
  }
  function mn(Z = "flying") {
    const xt = ns();
    xt.mode = Z, xt.message = Z === "title" ? "Real 3D pass: WebGL scene, chase/cockpit cameras, and now a sim-style flight director plus autopilot layer." : "Fly the gates, keep your energy under control, and land on the centerline.", d.current = xt, ve();
  }
  function gn() {
    mn("flying");
  }
  async function na() {
    if (typeof document > "u") return;
    const Z = c.current;
    if (Z) {
      if (T.current === "immersive") {
        La("Exited mobile fullscreen.");
        return;
      }
      try {
        if (a1(document) === Z) {
          await Ph(document);
          return;
        }
        if ($h(Z) && await Ih(Z))
          return;
        if (hn()) {
          fu();
          return;
        }
      } catch {
        if (hn()) {
          fu();
          return;
        }
      }
      d.current.message = "Fullscreen is unavailable in this browser.", ve();
    }
  }
  function ce() {
    d.current.cameraMode = d.current.cameraMode === "chase" ? "cockpit" : "chase", d.current.message = d.current.cameraMode === "cockpit" ? "Pilot-seat view engaged. Look through the windshield and fly the nose." : "Chase camera engaged. Use the whole scene to judge the flare.", ve();
  }
  function Ue(Z) {
    d.current.flaps = F(d.current.flaps + Z, 0, 2), d.current.message = `Flaps ${nu(d.current.flaps)} set.`, ve();
  }
  function Re(Z) {
    d.current.trim = F(d.current.trim + Z, -0.18, 0.18), d.current.message = `Pitch trim ${d.current.trim >= 0 ? "+" : ""}${d.current.trim.toFixed(2)} set.`, ve();
  }
  function su() {
    d.current.flightDirector = !d.current.flightDirector, d.current.flightDirector ? d.current.message = `Flight director on. ${d.current.lateralMode.toUpperCase()} / ${d.current.verticalMode.toUpperCase()} guidance armed.` : (d.current.autopilot = !1, d.current.commandRoll = 0, d.current.commandPitch = 0, d.current.message = "Flight director off. Hand fly the airplane."), ve();
  }
  function ru() {
    d.current.autopilot = !d.current.autopilot, d.current.autopilot ? (d.current.flightDirector = !0, d.current.message = `Autopilot engaged. ${d.current.lateralMode.toUpperCase()} / ${d.current.verticalMode.toUpperCase()} active.`) : d.current.message = d.current.flightDirector ? "Autopilot disconnected. Flight director remains on." : "Autopilot disconnected.", ve();
  }
  function pn(Z) {
    d.current.flightDirector = !0, d.current.lateralMode = Z, d.current.message = `Lateral mode ${Z.toUpperCase()} selected.`, ve();
  }
  function Ga(Z) {
    d.current.flightDirector = !0, d.current.verticalMode = Z, d.current.selectedAltitude = d.current.position.y, d.current.message = `Altitude hold armed at ${Math.round(d.current.selectedAltitude)} m.`, ve();
  }
  function Xa() {
    d.current.flightDirector = !0, d.current.lateralMode = "apr", d.current.verticalMode = "apr", d.current.message = "Approach mode armed. Capture the localizer and glideslope.", ve();
  }
  function Ol(Z) {
    d.current.selectedHeading = y1(d.current.selectedHeading + Z * Math.PI / 180), d.current.message = `Heading bug ${Math.round(iu(d.current.selectedHeading)).toString().padStart(3, "0")}.`, ve();
  }
  function tl(Z) {
    d.current.selectedAltitude = F(d.current.selectedAltitude + Z, Se + 20, 1800), d.current.message = `Selected altitude ${Math.round(d.current.selectedAltitude)} m.`, ve();
  }
  function Cl(Z, xt) {
    r.current[Z] = xt;
  }
  function xe(Z) {
    return {
      onPointerDown: (xt) => {
        xt.preventDefault(), xt.currentTarget.setPointerCapture?.(xt.pointerId), Cl(Z, !0);
      },
      onPointerUp: (xt) => {
        xt.currentTarget.releasePointerCapture?.(xt.pointerId), Cl(Z, !1);
      },
      onPointerCancel: () => Cl(Z, !1),
      onPointerLeave: () => Cl(Z, !1)
    };
  }
  return pe.useEffect(() => {
    const Z = () => {
      const Pt = a1(document) === c.current, vt = T.current;
      Pt ? (Ya(!1), dn("native"), hn() && (W(!0), rt(!1))) : vt === "native" && dn("off"), Q(ni());
    }, xt = () => {
      Q(ni());
    };
    return document.addEventListener("fullscreenchange", Z), window.addEventListener("resize", xt), window.visualViewport?.addEventListener("resize", xt), Z(), () => {
      document.removeEventListener("fullscreenchange", Z), window.removeEventListener("resize", xt), window.visualViewport?.removeEventListener("resize", xt), Ya(!1);
    };
  }, []), pe.useEffect(() => {
    const Z = u.current, xt = window, Pt = "__vt_pending" in xt;
    if (!Z) return;
    try {
      const ft = Wh(Z), x = {
        renderer: ft,
        staticWorld: ft.createMesh(ig),
        plane: ft.createMesh(ug),
        engineFan: ft.createMesh(cg),
        ring: ft.createMesh(fg),
        shadow: ft.createMesh(sg),
        papiLight: ft.createMesh(og)
      };
      v.current = x, E(null);
    } catch (ft) {
      const x = ft instanceof Error ? ft.message : "Unable to initialize WebGL renderer.";
      E(x);
      return;
    }
    const vt = (ft, x, Ot = 0) => {
      const Xt = d.current;
      Xt.mode = ft, Xt.speed = Math.max(0, Xt.speed * 0.18), Xt.groundSpeed = Math.max(0, Xt.groundSpeed * 0.12), Xt.pitchRate = 0, Xt.rollRate = 0, Xt.yawRate = 0, Xt.slip = 0, Xt.gLoad = 1, Xt.verticalVelocity = 0, Xt.throttle = 0, Xt.engineRpm = 760, Xt.terrainRunTime = 0, Xt.autopilot = !1, Xt.commandRoll = 0, Xt.commandPitch = 0, Xt.score += Ot, Xt.message = x;
    }, du = (ft, x = 0) => {
      const Ot = d.current;
      Ot.mode = "rollout", Ot.score += x, Ot.pitchRate = 0, Ot.rollRate = 0, Ot.yawRate = 0, Ot.roll = 0, Ot.slip = 0, Ot.verticalVelocity = 0, Ot.position.y = lt(Ot.position.x, Ot.position.z) + 4, Ot.throttle = Math.min(Ot.throttle, 0.18), Ot.engineRpm = Math.min(Ot.engineRpm, 1350), Ot.brakes = 0, Ot.autopilot = !1, Ot.message = ft;
    }, oi = (ft) => {
      const x = d.current;
      if (x.mode === "flying") {
        const Ot = (r.current.arrowup || r.current.w ? 1 : 0) - (r.current.arrowdown || r.current.s ? 1 : 0), Xt = (r.current.arrowright || r.current.d ? 1 : 0) - (r.current.arrowleft || r.current.a ? 1 : 0), Xe = (r.current.e ? 1 : 0) - (r.current.q ? 1 : 0), te = (r.current.pageup || r.current["throttle-up"] ? 1 : 0) - (r.current.pagedown || r.current["throttle-down"] ? 1 : 0), me = (r.current.r || r.current["trim-up"] ? 1 : 0) - (r.current.g || r.current["trim-down"] ? 1 : 0), Ml = F(x.speed / 64, 0.42, 1.18), ia = bm(x.position, x.time), Tl = x.flaps * 0.5, Yc = vm + x.trim * 0.34, vn = ui(x.position), Qa = s1(x.selectedHeading, x.heading), si = x.selectedAltitude - x.position.y, Nl = x.lateralMode === "wlv" ? 0 : x.lateralMode === "hdg" ? F(Qa * 1.85, -0.42, 0.42) : F(-vn.localizerDots * 0.12 - x.slip * 0.05 - x.position.x * 8e-4, -0.4, 0.4), Bl = x.verticalMode === "alt" ? F(si * 65e-4 - x.verticalVelocity * 0.03 + 0.01, -0.14, 0.18) : F((vn.desiredAltitude - x.position.y) * 85e-4 - x.verticalVelocity * 0.032 + 0.02, -0.16, 0.18);
        x.commandRoll = x.flightDirector ? Nl : 0, x.commandPitch = x.flightDirector ? Bl : 0, x.autopilot && Math.abs(Ot) + Math.abs(Xt) + Math.abs(Xe) > 1.2 && (x.autopilot = !1, x.message = "Autopilot disconnected. You have the airplane.");
        const Va = x.autopilot ? F((Nl - x.roll) * 2.8 - x.rollRate * 0.45, -1, 1) : 0, ua = x.autopilot ? F((Bl - x.pitch) * 3.1 - x.pitchRate * 0.4, -1, 1) : 0, oe = x.autopilot && x.lateralMode === "apr" ? F(-x.slip * 1.4 - vn.localizerDots * 0.08, -0.35, 0.35) : 0, hu = F(Ot + ua, -1, 1), bn = F(Xt + Va, -1, 1), dl = F(Xe + oe, -1, 1), ca = (Math.sin(x.time * 1.42 + x.position.x * 14e-4) + Math.cos(x.time * 0.96 + x.position.z * 18e-4)) * 8e-3, Lc = (Math.cos(x.time * 1.14 + x.position.z * 12e-4) + Math.sin(x.time * 0.88 + x.position.x * 11e-4)) * 0.012;
        x.wind = ia, x.rollRate += (bn * 1.82 * Ml - x.rollRate * 2.12 - x.roll * 0.28 + x.slip * 0.18 - dl * 0.06 + Lc) * ft, x.pitchRate += (hu * 0.98 * Ml - x.pitchRate * 1.78 - (x.pitch - Yc) * 0.18 + ca) * ft, x.yawRate += (dl * 0.88 * Ml - x.yawRate * 1.78 - x.slip * 0.78 - bn * 0.14 + Math.sin(x.roll) * 0.2) * ft, x.roll += x.rollRate * ft, x.roll = F(x.roll, -1.02, 1.02), x.pitch += x.pitchRate * ft, x.pitch = F(x.pitch, -0.24, 0.34), x.throttle = F(x.throttle + te * 0.4 * ft, 0, 1), x.trim = F(x.trim + me * 0.085 * ft, -0.18, 0.18), x.engineRpm = Wt(x.engineRpm, 900 + x.throttle * 2200 + x.speed * 12.5, 0.08), x.brakes = 0, x.fuel = F(x.fuel - x.throttle * ft * 1.55, 0, 100);
        const Hl = x.position.y - lt(x.position.x, x.position.z);
        x.slip = F(
          x.slip + (Math.sin(x.roll) * 0.34 - x.yawRate * 0.48 - dl * 0.2 - x.slip * 2.1 + bn * 0.02) * ft,
          -0.5,
          0.5
        );
        const Sn = Math.atan2(x.verticalVelocity - ia.y, Math.max(22, x.speed)), oa = F(x.pitch - Sn, -0.24, 0.44), fa = F((Math.abs(oa) - c1) / 0.12, 0, 1), xn = Tl * 0.22, hl = Tl * 0.08 + Tl * Tl * 0.03, Ne = F(rm + dm * oa + xn, -0.7, o1 + Tl * 0.2), mu = Math.sign(oa || 1) * Wt(o1 + Tl * 0.16, hm + Tl * 0.08, fa), ri = Wt(Ne, mu, fa), An = Math.abs(x.position.x) <= bl + 20 && x.position.z <= Ft + 160 && x.position.z >= Ce - 60 && Hl < 32 ? F((32 - Hl) / 32, 0, 1) : 0, di = 0.5 * om * x.speed * x.speed, Mn = mm + gm * ri * ri + hl + fa * pm + Math.abs(x.slip) * ym, gu = Wt(fm, sm, x.throttle), _e = di * u1 * ri * (1 + An * 0.08), hi = di * u1 * Math.max(0.02, Mn - An * 0.03), pu = (gu * Math.cos(oa) - hi) / Dc - Uc * Math.sin(Sn), mi = (_e * Math.cos(x.roll) + gu * Math.sin(x.pitch)) / Dc - Uc - x.verticalVelocity * 0.035 + ia.y * 0.02, ql = Math.max(24, x.speed * Math.cos(Sn)), yu = _e * Math.sin(x.roll) / Dc - x.slip * 3.2, vu = Uc * Math.tan(x.roll) / Math.max(34, ql), sa = Wt(yu / ql, vu, 0.68) + x.yawRate * 0.12;
        if (x.speed = F(x.speed + pu * ft, 38, 112), x.verticalVelocity = F(x.verticalVelocity + mi * ft, -24, 18), x.heading = f1(x.heading, x.heading + sa * ft, 1), x.angleOfAttack = oa, x.gLoad = F(_e * Math.cos(x.roll) / (Dc * Uc), 0, 3.4), x.stall = Math.abs(oa) > c1, Math.abs(x.position.x) <= bl + 16 && x.position.z <= Ft + 40 && x.position.z >= Ce - 40 && Hl < 20 && x.pitch > 0) {
          const ml = F((20 - Hl) / 20, 0, 1) * (0.22 + Tl * 0.04);
          x.verticalVelocity = Wt(x.verticalVelocity, -1.6 + x.pitch * 3.8, ml);
        }
        const Gc = Nt(d1(x.heading, fs(x)), x.speed), ra = it(Gc, ia);
        if (x.position.x += ra.x * ft, x.position.z += ra.z * ft, x.position.y += ra.y * ft, x.groundSpeed = Math.hypot(ra.x, ra.z), x.time += ft, x.nextRing < he.length) {
          const ml = he[x.nextRing];
          _m(x.position, ml) <= ml.radius * 0.78 && (x.nextRing += 1, x.score += ml.bonus, x.message = `${ml.label} cleared. Keep the approach energy under control.`);
        }
        Hl > 10 && Hl < 38 && x.groundSpeed > 60 && Math.abs(x.roll) > 0.22 && Math.abs(x.slip) < 0.18 && x.mode === "flying" ? (x.terrainRunTime += ft, x.terrainRunTime >= 1.35 && (x.terrainRunTime -= 1.35, x.score += 55, x.message = "Terrain run bonus. Keep it fast, low, and coordinated.")) : x.terrainRunTime = Math.max(0, x.terrainRunTime - ft * 1.8), x.stall && Math.floor(x.time * 2) % 2 === 0 && (x.message = "Stall warning. Lower the nose or add power.");
        const Tn = lt(x.position.x, x.position.z) + 4;
        if (x.position.y <= Tn) {
          x.position.y = Tn;
          const ml = r1(x.position), Qc = Math.abs(x.verticalVelocity) <= 4.5, zn = Math.abs(x.roll) <= 0.18 && x.pitch >= -0.08 && x.pitch <= 0.2 && Math.abs(x.slip) <= 0.1, gl = x.speed >= 44 && x.speed <= 90;
          if (ml && zn && gl)
            if (Qc) {
              const En = Um(x);
              du(`${En.label}. Roll it out, hold centerline, and brake to a stop.`, En.bonus);
            } else
              du("Rough landing. You smacked it down, but it is still salvageable if you keep it straight.", 320);
          else
            vt(
              "crashed",
              ml ? "You hit the runway too hard. Bleed speed and flare earlier." : "You reached the ground off-runway. Line up sooner and hold centerline."
            );
        } else (x.position.x < m1 + 120 || x.position.x > g1 - 120 || x.position.z < Ha + 180 || x.position.z > sn - 180 || x.position.y > 1800) && vt("crashed", "You left the modeled flight region. Turn back toward the valley and the runway.");
      } else if (x.mode === "rollout") {
        const Ot = (r.current.e ? 1 : 0) - (r.current.q ? 1 : 0) + ((r.current.arrowright || r.current.d ? 1 : 0) - (r.current.arrowleft || r.current.a ? 1 : 0)) * 0.5, Xt = r.current.b || r.current.brake ? 1 : 0, Xe = (r.current.pageup || r.current["throttle-up"] ? 1 : 0) - (r.current.pagedown || r.current["throttle-down"] ? 1 : 0);
        x.brakes = Xt, x.throttle = F(x.throttle + Xe * 0.25 * ft, 0, 0.3), x.engineRpm = Wt(x.engineRpm, 760 + x.throttle * 1150, 0.08);
        const te = Ot * 0.42;
        x.heading = f1(x.heading, x.heading + te * ft * F(x.groundSpeed / 22, 0.35, 1.2), 1);
        const me = 3.8 + x.brakes * 10.5 + Math.abs(te) * 1.6;
        x.speed = Math.max(0, x.speed - me * ft), x.groundSpeed = Math.max(0, x.groundSpeed - (me + 1.2) * ft), x.position.x += Math.sin(x.heading) * x.groundSpeed * ft, x.position.z += -Math.cos(x.heading) * x.groundSpeed * ft, x.position.y = lt(x.position.x, x.position.z) + 4, x.pitch = Wt(x.pitch, -0.04, 0.08), x.roll = Wt(x.roll, 0, 0.18), x.verticalVelocity = 0, x.time += ft, !r1(x.position) && x.groundSpeed > 12 ? vt("crashed", "You departed the runway during rollout. Hold the centerline and brake earlier.") : x.groundSpeed <= 6 ? vt("landed", "Full stop. Taxi speed reached and the rollout is complete.") : x.brakes > 0.2 && (x.message = "Braking rollout. Keep the nose straight and let the airplane decelerate.");
      }
      x.camera = jm(x);
    }, yn = () => {
      const ft = v.current;
      ft && ft.renderer.render(d.current.camera, rg(d.current, ft)), ve();
    };
    xt.render_game_to_text = () => JSON.stringify({
      coordinateSystem: { x: "right", y: "up", z: "toward runway when decreasing" },
      mode: d.current.mode,
      cameraMode: d.current.cameraMode,
      plane: {
        x: Number(d.current.position.x.toFixed(1)),
        y: Number(d.current.position.y.toFixed(1)),
        z: Number(d.current.position.z.toFixed(1)),
        speedMps: Number(d.current.speed.toFixed(1)),
        speedKts: Number(ta(d.current.speed).toFixed(1)),
        groundSpeedKts: Number(ta(d.current.groundSpeed).toFixed(1)),
        engineRpm: Number(d.current.engineRpm.toFixed(0)),
        throttle: Number((d.current.throttle * 100).toFixed(0)),
        trim: Number(d.current.trim.toFixed(2)),
        brakes: Number(d.current.brakes.toFixed(2)),
        flaps: nu(d.current.flaps),
        heading: Number(iu(d.current.heading).toFixed(1)),
        pitch: Number((d.current.pitch * 57.3).toFixed(1)),
        roll: Number((d.current.roll * 57.3).toFixed(1)),
        pitchRate: Number((d.current.pitchRate * 57.3).toFixed(1)),
        rollRate: Number((d.current.rollRate * 57.3).toFixed(1)),
        yawRate: Number((d.current.yawRate * 57.3).toFixed(1)),
        verticalVelocityMps: Number(d.current.verticalVelocity.toFixed(1)),
        verticalVelocityFpm: Number(as(d.current.verticalVelocity).toFixed(0)),
        altitudeAgl: Number((d.current.position.y - lt(d.current.position.x, d.current.position.z)).toFixed(1)),
        angleOfAttackDeg: Number((d.current.angleOfAttack * 57.3).toFixed(1)),
        slip: Number(d.current.slip.toFixed(2)),
        gLoad: Number(d.current.gLoad.toFixed(2)),
        stall: d.current.stall
      },
      camera: {
        x: Number(d.current.camera.position.x.toFixed(1)),
        y: Number(d.current.camera.position.y.toFixed(1)),
        z: Number(d.current.camera.position.z.toFixed(1)),
        targetX: Number(d.current.camera.target.x.toFixed(1)),
        targetY: Number(d.current.camera.target.y.toFixed(1)),
        targetZ: Number(d.current.camera.target.z.toFixed(1)),
        upX: Number(d.current.camera.up.x.toFixed(2)),
        upY: Number(d.current.camera.up.y.toFixed(2)),
        upZ: Number(d.current.camera.up.z.toFixed(2))
      },
      wind: {
        x: Number(d.current.wind.x.toFixed(2)),
        y: Number(d.current.wind.y.toFixed(2)),
        z: Number(d.current.wind.z.toFixed(2)),
        speedKts: Number(ta(Math.hypot(d.current.wind.x, d.current.wind.z)).toFixed(1))
      },
      approach: {
        desiredAltitude: Number(os(d.current.position.z).toFixed(1)),
        localizerMeters: Number(d.current.position.x.toFixed(1)),
        localizerDots: Number((d.current.position.x / 18).toFixed(2)),
        glideslopeDeviation: Number((d.current.position.y - os(d.current.position.z)).toFixed(1)),
        papi: ui(d.current.position).papiLabel,
        papiWhites: ui(d.current.position).papiWhites
      },
      autopilot: {
        flightDirector: d.current.flightDirector,
        engaged: d.current.autopilot,
        lateralMode: d.current.lateralMode,
        verticalMode: d.current.verticalMode,
        selectedHeading: Number(iu(d.current.selectedHeading).toFixed(0)),
        selectedAltitude: Number(d.current.selectedAltitude.toFixed(0)),
        commandRollDeg: Number((d.current.commandRoll * 57.3).toFixed(1)),
        commandPitchDeg: Number((d.current.commandPitch * 57.3).toFixed(1))
      },
      ui: {
        fullscreen: document.fullscreenElement === c.current,
        terrainRunTime: Number(d.current.terrainRunTime.toFixed(2))
      },
      nextObjective: d.current.nextRing < he.length ? he[d.current.nextRing]?.label ?? "runway" : "runway touchdown",
      score: d.current.score,
      message: d.current.message
    }), xt.advanceTime = (ft) => {
      const x = Math.max(1, Math.round(ft / 16.666666666666668));
      for (let Ot = 0; Ot < x; Ot += 1) oi(1 / 60);
      yn();
    };
    const fi = () => {
      oi(1 / 60), yn(), s.current = window.requestAnimationFrame(fi);
    };
    return yn(), Pt || (s.current = window.requestAnimationFrame(fi)), () => {
      s.current != null && window.cancelAnimationFrame(s.current), v.current?.renderer.dispose(), v.current = null, delete xt.render_game_to_text, delete xt.advanceTime;
    };
  }, []), pe.useEffect(() => {
    const Z = (Pt) => {
      const vt = Pt.key.toLowerCase();
      if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d", "q", "e", "pageup", "pagedown", " ", "enter", "c", "f", "z", "x", "r", "g", "b", "v", "p", "n", "h", "l", "m", "j", "k", "u", "o"].includes(vt) && Pt.preventDefault(), vt === "f") return void na();
      if (vt === "escape" && T.current === "immersive") return void La("Exited mobile fullscreen.");
      if (vt === "c") return void ce();
      if (vt === "z") return void Ue(1);
      if (vt === "x") return void Ue(-1);
      if (vt === "v") return void su();
      if (vt === "p") return void ru();
      if (vt === "n") return void pn("wlv");
      if (vt === "h") return void pn("hdg");
      if (vt === "l") return void Ga("alt");
      if (vt === "m") return void Xa();
      if (vt === "j") return void Ol(-10);
      if (vt === "k") return void Ol(10);
      if (vt === "u") return void tl(-25);
      if (vt === "o") return void tl(25);
      if ((vt === " " || vt === "enter") && ["title", "landed", "crashed"].includes(d.current.mode)) return void gn();
      r.current[vt] = !0;
    }, xt = (Pt) => {
      r.current[Pt.key.toLowerCase()] = !1;
    };
    return document.addEventListener("keydown", Z), document.addEventListener("keyup", xt), () => {
      document.removeEventListener("keydown", Z), document.removeEventListener("keyup", xt);
    };
  }, []), /* @__PURE__ */ p.jsxs("div", { className: "workHub", style: { marginTop: 12 }, children: [
    /* @__PURE__ */ p.jsxs("div", { className: "workHubHeader", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { className: "workHubTitle", children: "Flight Sim" }),
        /* @__PURE__ */ p.jsx("div", { className: "workHubSubtitle", children: "A modern twinjet flight study. Fly the approach, clear the gates, and bring it home smoothly." })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ p.jsx("button", { id: "flight-start", onClick: gn, children: h.mode === "flying" ? "Restart Flight" : "Start Flight" }),
        /* @__PURE__ */ p.jsx("button", { onClick: ce, children: "Switch Camera" }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => rt((Z) => !Z), children: P ? "Hide Advanced Flight Deck" : "Show Advanced Flight Deck" }),
        /* @__PURE__ */ p.jsx("button", { onClick: () => mn("title"), children: "Back To Title" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "workHubGrid", style: { marginTop: 12, alignItems: "start" }, children: [
      /* @__PURE__ */ p.jsxs("section", { ref: c, className: "panel", style: Al, children: [
        /* @__PURE__ */ p.jsxs("div", { className: "panelHeader", children: [
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("div", { className: "panelTitle", children: "A220-inspired flight deck" }),
            /* @__PURE__ */ p.jsx("div", { style: { fontSize: 12, opacity: 0.78 }, children: "External view or a live cockpit with primary flight and navigation displays." })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ p.jsx("button", { onClick: ce, children: h.cameraMode === "cockpit" ? "Chase Camera" : "Cockpit Camera" }),
            /* @__PURE__ */ p.jsx("button", { onClick: () => W((Z) => !Z), children: gt ? "Hide Controls" : "Show Controls" }),
            /* @__PURE__ */ p.jsx("button", { onClick: () => rt((Z) => !Z), children: P ? "Hide Instruments" : "Show Instruments" }),
            /* @__PURE__ */ p.jsx("button", { onClick: gn, children: h.mode === "flying" ? "Restart" : "Start" }),
            /* @__PURE__ */ p.jsx("button", { onClick: () => {
              na();
            }, children: J ? "Exit Fullscreen" : "Fullscreen" })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "panelBody", style: wa, children: [
          /* @__PURE__ */ p.jsx("div", { style: wc, children: /* @__PURE__ */ p.jsxs("div", { style: De, children: [
            /* @__PURE__ */ p.jsx("canvas", { ref: u, style: { width: "100%", height: "100%", display: "block", background: "#0d1523" } }),
            U ? /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,15,24,0.82)", textAlign: "center", padding: 24 }, children: /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 22, fontWeight: 700 }, children: "Renderer unavailable" }),
              /* @__PURE__ */ p.jsx("div", { style: { marginTop: 10, opacity: 0.82 }, children: U })
            ] }) }) : /* @__PURE__ */ p.jsxs("div", { className: Sl ? "flightSimOverlay flightSimOverlay--cockpit" : "flightSimOverlay", style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: [
              Sl ? /* @__PURE__ */ p.jsxs("div", { className: "flightSimCockpit", "aria-label": "Cockpit instruments", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flightSimCockpitGlass", "aria-hidden": "true", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitGlare" }),
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitPillar flightSimCockpitPillar--left" }),
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitPillar flightSimCockpitPillar--center" }),
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitPillar flightSimCockpitPillar--right" }),
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitBrow" }),
                  /* @__PURE__ */ p.jsx("div", { className: "flightSimCockpitSill" })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { className: "flightSimCockpitPanel", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplay flightSimDisplay--pfd", "data-flight-display": "pfd", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplayHeader", children: [
                      /* @__PURE__ */ p.jsx("span", { children: "PRIMARY FLIGHT" }),
                      /* @__PURE__ */ p.jsx("b", { children: "PFD" })
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimAttitude", style: { "--bank": `${h.roll * 57.3}deg`, "--pitch": `${h.pitch * 57.3}px` }, children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flightSimAttitudeWorld", children: [
                        /* @__PURE__ */ p.jsx("div", { className: "flightSimAttitudeSky" }),
                        /* @__PURE__ */ p.jsx("div", { className: "flightSimAttitudeGround" }),
                        /* @__PURE__ */ p.jsx("div", { className: "flightSimAttitudeHorizon" })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { className: "flightSimAircraftCue", children: [
                        /* @__PURE__ */ p.jsx("i", {}),
                        /* @__PURE__ */ p.jsx("i", {}),
                        /* @__PURE__ */ p.jsx("i", {})
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { className: "flightSimAttitudeReadout", children: [
                        h.roll >= 0 ? "+" : "",
                        Math.round(h.roll * 57.3),
                        "°"
                      ] })
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplayValues", children: [
                      /* @__PURE__ */ p.jsxs("div", { children: [
                        /* @__PURE__ */ p.jsx("span", { children: "IAS" }),
                        /* @__PURE__ */ p.jsx("strong", { children: Math.round(ta(h.speed)) }),
                        /* @__PURE__ */ p.jsx("small", { children: "KT" })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { children: [
                        /* @__PURE__ */ p.jsx("span", { children: "ALT" }),
                        /* @__PURE__ */ p.jsx("strong", { children: Math.round(pt).toLocaleString() }),
                        /* @__PURE__ */ p.jsx("small", { children: "M" })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { children: [
                        /* @__PURE__ */ p.jsx("span", { children: "V/S" }),
                        /* @__PURE__ */ p.jsx("strong", { children: Math.round(as(h.verticalVelocity)) }),
                        /* @__PURE__ */ p.jsx("small", { children: "FPM" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplay flightSimDisplay--nd", "data-flight-display": "nd", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplayHeader", children: [
                      /* @__PURE__ */ p.jsx("span", { children: "NAVIGATION" }),
                      /* @__PURE__ */ p.jsx("b", { children: "ND" })
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimCompass", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flightSimCompassTape", children: [
                        /* @__PURE__ */ p.jsx("span", { children: "W" }),
                        /* @__PURE__ */ p.jsx("span", { children: Math.round(Vt - 45 + 360) % 360 }),
                        /* @__PURE__ */ p.jsxs("strong", { children: [
                          Math.round(Vt).toString().padStart(3, "0"),
                          "°"
                        ] }),
                        /* @__PURE__ */ p.jsx("span", { children: Math.round(Vt + 45) % 360 }),
                        /* @__PURE__ */ p.jsx("span", { children: "E" })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { className: "flightSimCompassRose", children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "flightSimCompassTrack", style: { transform: `rotate(${-Vt}deg)` }, children: [
                          /* @__PURE__ */ p.jsx("span", { children: "N" }),
                          /* @__PURE__ */ p.jsx("i", {}),
                          /* @__PURE__ */ p.jsx("b", {})
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "flightSimCompassPointer" })
                      ] })
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimNavValues", children: [
                      /* @__PURE__ */ p.jsxs("div", { children: [
                        /* @__PURE__ */ p.jsx("span", { children: "LOC" }),
                        /* @__PURE__ */ p.jsxs("strong", { children: [
                          rl.localizerDots >= 0 ? "+" : "",
                          rl.localizerDots.toFixed(1),
                          " DOT"
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { children: [
                        /* @__PURE__ */ p.jsx("span", { children: "G/S" }),
                        /* @__PURE__ */ p.jsxs("strong", { children: [
                          rl.glideslopeDots >= 0 ? "+" : "",
                          rl.glideslopeDots.toFixed(1),
                          " DOT"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { className: "flightSimDisplayFooter", children: [
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        "FLAPS ",
                        nu(h.flaps)
                      ] }),
                      /* @__PURE__ */ p.jsx("span", { children: h.autopilot ? "AP ENGAGED" : h.flightDirector ? "FD ACTIVE" : "MANUAL" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { className: "flightSimCockpitStatus", children: [
                  /* @__PURE__ */ p.jsx("span", { children: "ETHAN AIR 220" }),
                  /* @__PURE__ */ p.jsx("span", { children: h.message }),
                  /* @__PURE__ */ p.jsxs("span", { children: [
                    Math.round(Vt).toString().padStart(3, "0"),
                    " HDG"
                  ] })
                ] })
              ] }) : null,
              /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", top: V ? 10 : 18, left: "50%", transform: "translateX(-50%)", width: V ? "min(calc(100% - 16px), 332px)" : void 0, minWidth: V ? 0 : J ? 360 : 300, maxWidth: V ? "calc(100% - 16px)" : "min(64vw, 520px)", padding: V ? "10px 12px" : J ? "12px 16px" : "10px 14px", borderRadius: 16, background: "rgba(6,11,18,0.68)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", textAlign: "center" }, children: [
                /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", opacity: 0.72 }, children: "Objective" }),
                /* @__PURE__ */ p.jsx("div", { style: { marginTop: 6, fontSize: V ? 14 : J ? 16 : 14, fontWeight: 700 }, children: ye }),
                /* @__PURE__ */ p.jsx("div", { style: { marginTop: 10, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden" }, children: /* @__PURE__ */ p.jsx("div", { style: { width: `${Ge}%`, height: "100%", background: "linear-gradient(90deg, #67f0b6, #67a5ff)" } }) }),
                /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 8, display: "flex", justifyContent: "center", gap: V ? 10 : 16, flexWrap: "wrap", fontSize: V ? 11 : 12, opacity: 0.8 }, children: [
                  /* @__PURE__ */ p.jsxs("span", { children: [
                    h.nextRing,
                    "/",
                    he.length,
                    " gates"
                  ] }),
                  /* @__PURE__ */ p.jsx("span", { children: Pe ? "terrain run live" : "stable approach" })
                ] })
              ] }),
              P ? null : /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: V ? 12 : 18, right: V ? 12 : void 0, bottom: V ? 64 : 72, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: V ? "center" : "flex-start", maxWidth: V ? "none" : "min(56vw, 420px)" }, children: G.map((Z) => /* @__PURE__ */ p.jsx("span", { className: Z.tone, children: Z.label }, Z.label)) }),
              P ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", top: V ? 94 : J ? 108 : 102, left: "50%", transform: "translateX(-50%)", width: V ? "min(calc(100% - 24px), 320px)" : "min(62vw, 380px)", padding: V ? "8px 10px" : "8px 12px", borderRadius: 14, background: "rgba(6,11,18,0.6)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }, children: /* @__PURE__ */ p.jsxs("div", { style: { position: "relative", height: 30, overflow: "hidden" }, children: [
                  R.map((Z) => /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", left: `calc(50% + ${Z.offset}px)`, top: 0, transform: "translateX(-50%)", textAlign: "center", opacity: Z.major ? 0.92 : 0.56 }, children: [
                    /* @__PURE__ */ p.jsx("div", { style: { fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" }, children: Z.label }),
                    /* @__PURE__ */ p.jsx("div", { style: { margin: "4px auto 0", width: 2, height: Z.major ? 12 : 7, background: "rgba(255,255,255,0.36)" } })
                  ] }, `${Z.offset}-${Z.label}`)),
                  h.flightDirector || h.autopilot ? /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: `calc(50% + ${X}px)`,
                        top: 1,
                        width: 18,
                        height: 12,
                        transform: "translateX(-50%)",
                        clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                        background: "rgba(255,113,215,0.92)",
                        boxShadow: "0 0 0 1px rgba(39,8,45,0.8)"
                      }
                    }
                  ) : null,
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, marginLeft: -1, background: "rgba(255,213,107,0.9)" } }),
                  /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", padding: "2px 8px", borderRadius: 999, background: "rgba(255,213,107,0.16)", fontSize: 11, fontWeight: 700 }, children: [
                    "HDG ",
                    Math.round(Vt).toString().padStart(3, "0")
                  ] }),
                  h.flightDirector || h.autopilot ? /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", right: 4, bottom: 0, padding: "2px 7px", borderRadius: 999, background: "rgba(255,113,215,0.18)", color: "rgba(255,205,250,0.96)", fontSize: 10, fontWeight: 700 }, children: [
                    "BUG ",
                    Math.round(Lt).toString().padStart(3, "0")
                  ] }) : null
                ] }) }),
                V ? null : /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", top: 18, left: 18, minWidth: ct, padding: J ? "14px 16px" : "12px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { fontSize: 12, opacity: 0.7, letterSpacing: 1.2, textTransform: "uppercase" }, children: "Flight Data" }),
                  /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 8, display: "grid", gap: 6, fontSize: At }, children: [
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      Math.round(ta(h.speed)),
                      " kt"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      Math.round(ta(h.groundSpeed)),
                      " kt GS"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      Math.round(pt),
                      " m AGL"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Throttle ",
                      Math.round(h.throttle * 100),
                      "%"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      Math.round(h.engineRpm),
                      " RPM"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Trim ",
                      h.trim >= 0 ? "+" : "",
                      h.trim.toFixed(2)
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Brakes ",
                      h.brakes > 0.1 ? `${Math.round(h.brakes * 100)}%` : "released"
                    ] }),
                    /* @__PURE__ */ p.jsx("div", { children: h.autopilot ? "AP engaged" : h.flightDirector ? "FD armed" : "AP off" }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Sink ",
                      Math.round(as(h.verticalVelocity)),
                      " fpm"
                    ] })
                  ] })
                ] }),
                V ? null : /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", top: 18, right: 18, minWidth: st, padding: J ? "14px 16px" : "12px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { fontSize: 12, opacity: 0.7, letterSpacing: 1.2, textTransform: "uppercase" }, children: "Approach State" }),
                  /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 8, display: "grid", gap: 6, fontSize: At }, children: [
                    /* @__PURE__ */ p.jsx("div", { children: h.nextRing < he.length ? he[h.nextRing]?.label : "Runway touchdown" }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Camera ",
                      h.cameraMode
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Flaps ",
                      nu(h.flaps)
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "LAT ",
                      h.lateralMode.toUpperCase(),
                      " / VERT ",
                      h.verticalMode.toUpperCase()
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "HDG bug ",
                      Math.round(Lt).toString().padStart(3, "0")
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "ALT sel ",
                      Math.round(h.selectedAltitude),
                      " m"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Wind ",
                      Math.round(ta(Math.hypot(h.wind.x, h.wind.z))),
                      " kt"
                    ] }),
                    /* @__PURE__ */ p.jsx("div", { children: jt }),
                    /* @__PURE__ */ p.jsx("div", { children: g }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "PAPI ",
                      $.papiWhites,
                      "W / ",
                      4 - $.papiWhites,
                      "R"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "Target Alt ",
                      Math.round($.desiredAltitude),
                      " m"
                    ] }),
                    /* @__PURE__ */ p.jsxs("div", { children: [
                      "AOA ",
                      (h.angleOfAttack * 57.3).toFixed(1),
                      " deg"
                    ] }),
                    /* @__PURE__ */ p.jsx("div", { children: h.stall ? "Stall warning active" : `${h.gLoad.toFixed(1)} G stable` })
                  ] })
                ] }),
                V ? null : /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", width: sl, height: Ie, borderRadius: 18, background: "rgba(5,9,15,0.56)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", overflow: "hidden" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(103,165,255,0.24), rgba(7,10,16,0.1))" } }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", top: 12, left: 0, right: 0, textAlign: "center", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.72 }, children: "IAS" }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 11, opacity: 0.74 }, children: "kt" }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: 38, bottom: 34, width: 10, marginLeft: -5, borderRadius: 999, background: "rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: `${F((h.speed - 36) / 68, 0, 1) * 100}%`, borderRadius: 999, background: "linear-gradient(180deg, #67a5ff, #68ffd8)" } }) }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: 0, right: 0, top: "50%", marginTop: -18, textAlign: "center", fontSize: J ? 20 : 17, fontWeight: 700 }, children: Math.round(ta(h.speed)) })
                ] }),
                V ? null : /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", width: sl, height: Ie, borderRadius: 18, background: "rgba(5,9,15,0.56)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", overflow: "hidden" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(103,240,182,0.24), rgba(7,10,16,0.1))" } }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", top: 12, left: 0, right: 0, textAlign: "center", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.72 }, children: "ALT" }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 11, opacity: 0.74 }, children: "m" }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: 38, bottom: 34, width: 10, marginLeft: -5, borderRadius: 999, background: "rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: `${F(pt / 180, 0, 1) * 100}%`, borderRadius: 999, background: "linear-gradient(180deg, #67f0b6, #ffd56b)" } }) }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: 0, right: 0, top: "50%", marginTop: -18, textAlign: "center", fontSize: J ? 20 : 17, fontWeight: 700 }, children: Math.round(pt) })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: St, height: Ee, transform: "translate(-50%, -50%)", overflow: "hidden" }, children: [
                  /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        inset: -120,
                        transform: `rotate(${-h.roll * 57.3}deg) translateY(${dt * 5.2}px)`,
                        transformOrigin: "50% 50%"
                      },
                      children: [
                        cm.map((Z) => /* @__PURE__ */ p.jsxs(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              left: "50%",
                              top: `calc(50% - ${Z * 5.2}px)`,
                              width: Z > 0 ? 96 : 76,
                              marginLeft: Z > 0 ? -48 : -38,
                              borderTop: "2px solid rgba(255,255,255,0.34)",
                              opacity: 0.78
                            },
                            children: [
                              /* @__PURE__ */ p.jsx("span", { style: { position: "absolute", left: -24, top: -9, fontSize: 11, color: "rgba(255,255,255,0.78)" }, children: Math.abs(Z) }),
                              /* @__PURE__ */ p.jsx("span", { style: { position: "absolute", right: -24, top: -9, fontSize: 11, color: "rgba(255,255,255,0.78)" }, children: Math.abs(Z) })
                            ]
                          },
                          Z
                        )),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: 420,
                              marginLeft: -210,
                              borderTop: "2px solid rgba(101,177,255,0.38)"
                            }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: `calc(50% + ${C}px - 12px)`,
                        top: `calc(50% + ${It}px - 12px)`,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        border: "2px solid rgba(104,255,203,0.85)",
                        boxShadow: "0 0 0 1px rgba(0,0,0,0.2)"
                      }
                    }
                  ),
                  h.flightDirector || h.autopilot ? /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        inset: -120,
                        transform: `rotate(${-h.commandRoll * 57.3}deg) translateY(${K}px)`,
                        transformOrigin: "50% 50%"
                      },
                      children: [
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: 108,
                              marginLeft: -54,
                              marginTop: -2,
                              borderTop: "4px solid rgba(255,113,215,0.94)",
                              boxShadow: "0 0 0 1px rgba(63,10,64,0.55)"
                            }
                          }
                        ),
                        /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "calc(50% - 54px)", top: "50%", width: 18, height: 4, marginTop: -2, background: "rgba(255,113,215,0.94)" } }),
                        /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "calc(50% + 36px)", top: "50%", width: 18, height: 4, marginTop: -2, background: "rgba(255,113,215,0.94)" } })
                      ]
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: "50% auto auto 50%", transform: "translate(-50%, -50%)", width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.24)", boxShadow: "0 0 0 1px rgba(0,0,0,0.2)" } }),
                /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "calc(50% - 28px)", top: "50%", width: 22, height: 2, marginTop: -1, background: "rgba(255,255,255,0.26)" } }),
                /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: "calc(50% - 28px)", width: 2, height: 22, marginLeft: -1, background: "rgba(255,255,255,0.26)" } }),
                /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: 208, height: 42, transform: "translate(-50%, 84px)" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: "50% 18px auto 18px", height: 2, marginTop: -1, background: "rgba(255,255,255,0.2)" } }),
                  [-48, -24, 0, 24, 48].map((Z) => /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: `calc(50% + ${Z}px)`, top: "50%", width: 2, height: Z === 0 ? 18 : 10, marginLeft: -1, marginTop: Z === 0 ? -9 : -5, background: "rgba(255,255,255,0.22)" } }, `loc-${Z}`)),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: `calc(50% + ${ut}px - 8px)`, top: "50%", width: 16, height: 16, marginTop: -8, transform: "rotate(45deg)", border: "2px solid rgba(255,113,215,0.92)", boxSizing: "border-box", background: "rgba(255,113,215,0.14)" } }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", bottom: 24, transform: "translateX(-50%)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.68 }, children: "LOC" })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: 42, height: 208, transform: "translate(112px, -50%)" }, children: [
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: "18px auto 18px 50%", width: 2, marginLeft: -1, background: "rgba(255,255,255,0.2)" } }),
                  [-48, -24, 0, 24, 48].map((Z) => /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: `calc(50% + ${Z}px)`, width: Z === 0 ? 18 : 10, height: 2, marginLeft: Z === 0 ? -9 : -5, marginTop: -1, background: "rgba(255,255,255,0.22)" } }, `gs-${Z}`)),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: `calc(50% + ${_t}px - 8px)`, width: 16, height: 16, marginLeft: -8, transform: "rotate(45deg)", border: "2px solid rgba(255,113,215,0.92)", boxSizing: "border-box", background: "rgba(255,113,215,0.14)" } }),
                  /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.68 }, children: "GS" })
                ] }),
                /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: "calc(50% + 48px)",
                      bottom: 68,
                      width: 76,
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      overflow: "hidden"
                    },
                    children: /* @__PURE__ */ p.jsx("div", { style: { width: `${h.slip * 50 + 50}%`, height: "100%", background: "linear-gradient(90deg, rgba(255,113,113,0.85), rgba(104,255,203,0.9), rgba(255,113,113,0.85))" } })
                  }
                ),
                /* @__PURE__ */ p.jsxs("div", { style: { position: "absolute", left: 18, bottom: 72, display: "flex", gap: 8, flexWrap: "wrap", maxWidth: "min(54vw, 420px)" }, children: [
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: Pe ? "rgba(69,167,121,0.88)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                    "Terrain Run ",
                    Pe ? `${h.terrainRunTime.toFixed(1)}s` : "standby"
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                    "Fuel ",
                    Math.round(h.fuel),
                    "%"
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                    "Trim ",
                    h.trim >= 0 ? "+" : "",
                    h.trim.toFixed(2)
                  ] }),
                  /* @__PURE__ */ p.jsx("div", { style: { padding: "9px 12px", borderRadius: 999, background: h.autopilot ? "rgba(255,113,215,0.22)" : h.flightDirector ? "rgba(255,113,215,0.12)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: h.autopilot ? `AP ${h.lateralMode.toUpperCase()} / ${h.verticalMode.toUpperCase()}` : h.flightDirector ? `FD ${h.lateralMode.toUpperCase()} / ${h.verticalMode.toUpperCase()}` : "Autopilot off" }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: h.brakes > 0.1 ? "rgba(152,104,255,0.2)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                    "Brakes ",
                    h.brakes > 0.1 ? "applied" : "ready"
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                    "Score ",
                    h.score
                  ] })
                ] })
              ] }) : null,
              ["title", "landed", "crashed"].includes(h.mode) ? /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(4,7,12,0.38)" }, children: /* @__PURE__ */ p.jsxs("div", { style: { width: "min(92%, 460px)", padding: J ? "26px 28px" : "22px 24px", borderRadius: 24, background: Ul, border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 70px rgba(0,0,0,0.32)", textAlign: "center" }, children: [
                /* @__PURE__ */ p.jsx("div", { style: { fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", opacity: 0.76 }, children: h.mode === "title" ? "Flight Deck Ready" : h.mode === "landed" ? "Runway Complete" : "Flight Lost" }),
                /* @__PURE__ */ p.jsx("div", { style: { marginTop: 10, fontSize: J ? 34 : 30, fontWeight: 800 }, children: h.mode === "title" ? "Gremlin Approach" : h.mode === "landed" ? "Touchdown Logged" : "Reset The Pattern" }),
                /* @__PURE__ */ p.jsx("div", { style: { marginTop: 12, fontSize: J ? 15 : 14, lineHeight: 1.6, opacity: 0.9 }, children: h.message }),
                /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, textAlign: "left" }, children: [
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Mission" }),
                    /* @__PURE__ */ p.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "Three gates, one runway" })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Playstyle" }),
                    /* @__PURE__ */ p.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "Low passes + controlled flare" })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Shortcuts" }),
                    /* @__PURE__ */ p.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "F fullscreen, C camera, Z/X flaps" })
                  ] })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 18, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", pointerEvents: "auto" }, children: [
                  /* @__PURE__ */ p.jsx("button", { id: "flight-overlay-start", onClick: gn, children: h.mode === "title" ? "Launch Sortie" : "Fly Again" }),
                  /* @__PURE__ */ p.jsx("button", { onClick: ce, children: h.cameraMode === "cockpit" ? "Use Chase Cam" : "Use Cockpit Cam" })
                ] })
              ] }) }) : null,
              /* @__PURE__ */ p.jsx("div", { style: { position: "absolute", left: 18, right: 18, bottom: 18, padding: J ? "12px 16px" : "10px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", fontSize: At }, children: h.message })
            ] })
          ] }) }),
          aa ? /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: et ? "1fr" : J ? "1.1fr 1fr 1fr" : "repeat(3, minmax(0, 1fr))", gap: 10 }, children: [
            /* @__PURE__ */ p.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Flight Controls" }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ p.jsx("button", { id: "flight-pitch-up", ...xe("arrowup"), children: "Nose Up" }),
                /* @__PURE__ */ p.jsx("button", { id: "flight-pitch-down", ...xe("arrowdown"), children: "Nose Down" }),
                /* @__PURE__ */ p.jsx("button", { id: "flight-bank-left", ...xe("arrowleft"), children: "Bank Left" }),
                /* @__PURE__ */ p.jsx("button", { id: "flight-bank-right", ...xe("arrowright"), children: "Bank Right" })
              ] })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Power + Trim" }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ p.jsx("button", { ...xe("q"), children: "Rudder Left" }),
                /* @__PURE__ */ p.jsx("button", { ...xe("e"), children: "Rudder Right" }),
                /* @__PURE__ */ p.jsx("button", { id: "flight-throttle-down", ...xe("throttle-down"), children: "Throttle Down" }),
                /* @__PURE__ */ p.jsx("button", { id: "flight-throttle-up", ...xe("throttle-up"), children: "Throttle Up" }),
                /* @__PURE__ */ p.jsx("button", { ...xe("trim-down"), onClick: () => Re(-0.01), children: "Trim Down" }),
                /* @__PURE__ */ p.jsx("button", { ...xe("trim-up"), onClick: () => Re(0.01), children: "Trim Up" }),
                /* @__PURE__ */ p.jsx("button", { ...xe("brake"), children: "Brakes" })
              ] })
            ] }),
            P ? /* @__PURE__ */ p.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Systems + Autopilot" }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: et ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ p.jsx("button", { onClick: () => Ue(-1), children: "Flaps Up" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => Ue(1), children: "Flaps Down" }),
                /* @__PURE__ */ p.jsx("button", { onClick: ce, children: "Camera" }),
                /* @__PURE__ */ p.jsx("button", { onClick: su, children: h.flightDirector ? "FD On" : "FD Off" }),
                /* @__PURE__ */ p.jsx("button", { onClick: ru, children: h.autopilot ? "AP Off" : "AP On" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => pn("wlv"), children: "WLV" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => pn("hdg"), children: "HDG" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => Ga("alt"), children: "ALT" }),
                /* @__PURE__ */ p.jsx("button", { onClick: Xa, children: "APR" })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gap: 8 }, children: [
                /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 8, alignItems: "center" }, children: [
                  /* @__PURE__ */ p.jsx("button", { onClick: () => Ol(-10), children: "HDG -" }),
                  /* @__PURE__ */ p.jsx("div", { style: { textAlign: "center", padding: "8px 10px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 700 }, children: Math.round(Lt).toString().padStart(3, "0") }),
                  /* @__PURE__ */ p.jsx("button", { onClick: () => Ol(10), children: "HDG +" })
                ] }),
                /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 8, alignItems: "center" }, children: [
                  /* @__PURE__ */ p.jsx("button", { onClick: () => tl(-25), children: "ALT -" }),
                  /* @__PURE__ */ p.jsxs("div", { style: { textAlign: "center", padding: "8px 10px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 700 }, children: [
                    Math.round(h.selectedAltitude),
                    " m"
                  ] }),
                  /* @__PURE__ */ p.jsx("button", { onClick: () => tl(25), children: "ALT +" })
                ] }),
                J ? /* @__PURE__ */ p.jsx("button", { onClick: () => mn("title"), children: "Title" }) : null
              ] })
            ] }) : /* @__PURE__ */ p.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Quick Actions" }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ p.jsx("button", { onClick: () => Ue(-1), children: "Flaps Up" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => Ue(1), children: "Flaps Down" }),
                /* @__PURE__ */ p.jsx("button", { onClick: ce, children: "Switch Camera" }),
                /* @__PURE__ */ p.jsx("button", { onClick: () => mn("title"), children: "Reset Run" })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { style: { fontSize: 12, lineHeight: 1.55, opacity: 0.78 }, children: [
                "Keyboard works too: arrows or WASD to steer, Page Up/Page Down for speed, and ",
                /* @__PURE__ */ p.jsx("code", { children: "Z" }),
                "/",
                /* @__PURE__ */ p.jsx("code", { children: "X" }),
                " for flaps."
              ] })
            ] })
          ] }) : /* @__PURE__ */ p.jsxs("div", { style: { padding: "12px 14px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ p.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Quick Controls" }),
              /* @__PURE__ */ p.jsxs("div", { style: { fontSize: 13, lineHeight: 1.55, opacity: 0.82 }, children: [
                "Use arrows or WASD to steer, Page Up/Page Down for speed, and ",
                /* @__PURE__ */ p.jsx("code", { children: "C" }),
                " or ",
                /* @__PURE__ */ p.jsx("code", { children: "F" }),
                " for camera and fullscreen."
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("button", { onClick: () => W(!0), children: "Show On-Screen Controls" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("section", { className: "panel", children: [
        /* @__PURE__ */ p.jsx("div", { className: "panelHeader", children: /* @__PURE__ */ p.jsx("div", { className: "panelTitle", children: "Flight Notes" }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "panelBody", style: { display: "grid", gap: 12 }, children: [
          /* @__PURE__ */ p.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ p.jsx("div", { style: { fontWeight: 700 }, children: "Controls" }),
            /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: [
              /* @__PURE__ */ p.jsx("code", { children: "Up/W" }),
              " and ",
              /* @__PURE__ */ p.jsx("code", { children: "Down/S" }),
              " pitch, ",
              /* @__PURE__ */ p.jsx("code", { children: "Left/Right" }),
              " or ",
              /* @__PURE__ */ p.jsx("code", { children: "A/D" }),
              " roll, ",
              /* @__PURE__ */ p.jsx("code", { children: "Page Up/Page Down" }),
              " changes throttle, ",
              /* @__PURE__ */ p.jsx("code", { children: "Z/X" }),
              " adjusts flaps, ",
              /* @__PURE__ */ p.jsx("code", { children: "C" }),
              " switches camera, and ",
              /* @__PURE__ */ p.jsx("code", { children: "F" }),
              " toggles fullscreen. The on-screen control pad stays tucked away until you press ",
              /* @__PURE__ */ p.jsx("code", { children: "Show Controls" }),
              ", and the advanced flight deck stays optional."
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ p.jsx("div", { style: { fontWeight: 700 }, children: "Mission" }),
            /* @__PURE__ */ p.jsx("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: "This is now a real 3D scene instead of a fake runway illusion. Fly the full gate sequence, stabilize the descent, land on the runway centerline, then roll it out to a full stop." })
          ] }),
          P ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontWeight: 700 }, children: "Engine Upgrade" }),
              /* @__PURE__ */ p.jsx("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: "WebGL now handles the perspective camera, lighting, fog, depth test, and triangle meshes. This pass adds wind, light turbulence, flap lift/drag behavior, spinning prop visuals, runway PAPI lights, heading tape cues, localizer / glideslope guidance, a flight-director command bar, selectable heading/altitude bugs, and a simple X-Plane-style autopilot layer." })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
              /* @__PURE__ */ p.jsx("div", { style: { fontWeight: 700 }, children: "Test Hooks" }),
              /* @__PURE__ */ p.jsxs("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: [
                "The page still exposes ",
                /* @__PURE__ */ p.jsx("code", { children: "window.render_game_to_text()" }),
                " and ",
                /* @__PURE__ */ p.jsx("code", { children: "window.advanceTime(ms)" }),
                " for deterministic testing."
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: Y.map((Z) => /* @__PURE__ */ p.jsx("span", { className: Z.tone, children: Z.label }, Z.label)) }),
            /* @__PURE__ */ p.jsx("pre", { style: { margin: 0, whiteSpace: "pre-wrap", fontSize: 12, lineHeight: 1.5, opacity: 0.88 }, children: window.render_game_to_text?.() ?? "Game runtime not ready yet." })
          ] }) : null
        ] })
      ] })
    ] })
  ] });
}
const E1 = document.getElementById("flight-sim-root");
if (!E1)
  throw new Error("Flight Sim export root element was not found.");
document.title = "Flight Sim | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("flight-sim-export-body");
wh.createRoot(E1).render(/* @__PURE__ */ p.jsx(dg, {}));
