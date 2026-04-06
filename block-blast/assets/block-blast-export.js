var vc = { exports: {} }, Du = {};
var U0;
function zh() {
  if (U0) return Du;
  U0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(o, z, _) {
    var x = null;
    if (_ !== void 0 && (x = "" + _), z.key !== void 0 && (x = "" + z.key), "key" in z) {
      _ = {};
      for (var G in z)
        G !== "key" && (_[G] = z[G]);
    } else _ = z;
    return z = _.ref, {
      $$typeof: f,
      type: o,
      key: x,
      ref: z !== void 0 ? z : null,
      props: _
    };
  }
  return Du.Fragment = v, Du.jsx = h, Du.jsxs = h, Du;
}
var R0;
function Th() {
  return R0 || (R0 = 1, vc.exports = zh()), vc.exports;
}
var w = Th(), mc = { exports: {} }, Uu = {}, gc = { exports: {} }, Sc = {};
var x0;
function Eh() {
  return x0 || (x0 = 1, (function(f) {
    function v(M, N) {
      var V = M.length;
      M.push(N);
      l: for (; 0 < V; ) {
        var fl = V - 1 >>> 1, rl = M[fl];
        if (0 < z(rl, N))
          M[fl] = N, M[V] = rl, V = fl;
        else break l;
      }
    }
    function h(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var N = M[0], V = M.pop();
      if (V !== N) {
        M[0] = V;
        l: for (var fl = 0, rl = M.length, d = rl >>> 1; fl < d; ) {
          var D = 2 * (fl + 1) - 1, T = M[D], S = D + 1, R = M[S];
          if (0 > z(T, V))
            S < rl && 0 > z(R, T) ? (M[fl] = R, M[S] = V, fl = S) : (M[fl] = T, M[D] = V, fl = D);
          else if (S < rl && 0 > z(R, V))
            M[fl] = R, M[S] = V, fl = S;
          else break l;
        }
      }
      return N;
    }
    function z(M, N) {
      var V = M.sortIndex - N.sortIndex;
      return V !== 0 ? V : M.id - N.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      f.unstable_now = function() {
        return _.now();
      };
    } else {
      var x = Date, G = x.now();
      f.unstable_now = function() {
        return x.now() - G;
      };
    }
    var C = [], E = [], H = 1, q = null, W = 3, pl = !1, Tl = !1, Hl = !1, et = !1, wl = typeof setTimeout == "function" ? setTimeout : null, Ut = typeof clearTimeout == "function" ? clearTimeout : null, Ol = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(M) {
      for (var N = h(E); N !== null; ) {
        if (N.callback === null) o(E);
        else if (N.startTime <= M)
          o(E), N.sortIndex = N.expirationTime, v(C, N);
        else break;
        N = h(E);
      }
    }
    function at(M) {
      if (Hl = !1, Ll(M), !Tl)
        if (h(C) !== null)
          Tl = !0, ql || (ql = !0, K());
        else {
          var N = h(E);
          N !== null && nt(at, N.startTime - M);
        }
    }
    var ql = !1, k = -1, Yl = 5, gt = -1;
    function ut() {
      return et ? !0 : !(f.unstable_now() - gt < Yl);
    }
    function Q() {
      if (et = !1, ql) {
        var M = f.unstable_now();
        gt = M;
        var N = !0;
        try {
          l: {
            Tl = !1, Hl && (Hl = !1, Ut(k), k = -1), pl = !0;
            var V = W;
            try {
              t: {
                for (Ll(M), q = h(C); q !== null && !(q.expirationTime > M && ut()); ) {
                  var fl = q.callback;
                  if (typeof fl == "function") {
                    q.callback = null, W = q.priorityLevel;
                    var rl = fl(
                      q.expirationTime <= M
                    );
                    if (M = f.unstable_now(), typeof rl == "function") {
                      q.callback = rl, Ll(M), N = !0;
                      break t;
                    }
                    q === h(C) && o(C), Ll(M);
                  } else o(C);
                  q = h(C);
                }
                if (q !== null) N = !0;
                else {
                  var d = h(E);
                  d !== null && nt(
                    at,
                    d.startTime - M
                  ), N = !1;
                }
              }
              break l;
            } finally {
              q = null, W = V, pl = !1;
            }
            N = void 0;
          }
        } finally {
          N ? K() : ql = !1;
        }
      }
    }
    var K;
    if (typeof Ol == "function")
      K = function() {
        Ol(Q);
      };
    else if (typeof MessageChannel < "u") {
      var St = new MessageChannel(), Rt = St.port2;
      St.port1.onmessage = Q, K = function() {
        Rt.postMessage(null);
      };
    } else
      K = function() {
        wl(Q, 0);
      };
    function nt(M, N) {
      k = wl(function() {
        M(f.unstable_now());
      }, N);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, f.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Yl = 0 < M ? Math.floor(1e3 / M) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, f.unstable_next = function(M) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = W;
      }
      var V = W;
      W = N;
      try {
        return M();
      } finally {
        W = V;
      }
    }, f.unstable_requestPaint = function() {
      et = !0;
    }, f.unstable_runWithPriority = function(M, N) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var V = W;
      W = M;
      try {
        return N();
      } finally {
        W = V;
      }
    }, f.unstable_scheduleCallback = function(M, N, V) {
      var fl = f.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? fl + V : fl) : V = fl, M) {
        case 1:
          var rl = -1;
          break;
        case 2:
          rl = 250;
          break;
        case 5:
          rl = 1073741823;
          break;
        case 4:
          rl = 1e4;
          break;
        default:
          rl = 5e3;
      }
      return rl = V + rl, M = {
        id: H++,
        callback: N,
        priorityLevel: M,
        startTime: V,
        expirationTime: rl,
        sortIndex: -1
      }, V > fl ? (M.sortIndex = V, v(E, M), h(C) === null && M === h(E) && (Hl ? (Ut(k), k = -1) : Hl = !0, nt(at, V - fl))) : (M.sortIndex = rl, v(C, M), Tl || pl || (Tl = !0, ql || (ql = !0, K()))), M;
    }, f.unstable_shouldYield = ut, f.unstable_wrapCallback = function(M) {
      var N = W;
      return function() {
        var V = W;
        W = N;
        try {
          return M.apply(this, arguments);
        } finally {
          W = V;
        }
      };
    };
  })(Sc)), Sc;
}
var C0;
function Ah() {
  return C0 || (C0 = 1, gc.exports = Eh()), gc.exports;
}
var bc = { exports: {} }, J = {};
var H0;
function Mh() {
  if (H0) return J;
  H0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), W = Symbol.iterator;
  function pl(d) {
    return d === null || typeof d != "object" ? null : (d = W && d[W] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Tl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Hl = Object.assign, et = {};
  function wl(d, D, T) {
    this.props = d, this.context = D, this.refs = et, this.updater = T || Tl;
  }
  wl.prototype.isReactComponent = {}, wl.prototype.setState = function(d, D) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, D, "setState");
  }, wl.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Ut() {
  }
  Ut.prototype = wl.prototype;
  function Ol(d, D, T) {
    this.props = d, this.context = D, this.refs = et, this.updater = T || Tl;
  }
  var Ll = Ol.prototype = new Ut();
  Ll.constructor = Ol, Hl(Ll, wl.prototype), Ll.isPureReactComponent = !0;
  var at = Array.isArray;
  function ql() {
  }
  var k = { H: null, A: null, T: null, S: null }, Yl = Object.prototype.hasOwnProperty;
  function gt(d, D, T) {
    var S = T.ref;
    return {
      $$typeof: f,
      type: d,
      key: D,
      ref: S !== void 0 ? S : null,
      props: T
    };
  }
  function ut(d, D) {
    return gt(d.type, D, d.props);
  }
  function Q(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function K(d) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(T) {
      return D[T];
    });
  }
  var St = /\/+/g;
  function Rt(d, D) {
    return typeof d == "object" && d !== null && d.key != null ? K("" + d.key) : D.toString(36);
  }
  function nt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(ql, ql) : (d.status = "pending", d.then(
          function(D) {
            d.status === "pending" && (d.status = "fulfilled", d.value = D);
          },
          function(D) {
            d.status === "pending" && (d.status = "rejected", d.reason = D);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function M(d, D, T, S, R) {
    var B = typeof d;
    (B === "undefined" || B === "boolean") && (d = null);
    var L = !1;
    if (d === null) L = !0;
    else
      switch (B) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case v:
              L = !0;
              break;
            case H:
              return L = d._init, M(
                L(d._payload),
                D,
                T,
                S,
                R
              );
          }
      }
    if (L)
      return R = R(d), L = S === "" ? "." + Rt(d, 0) : S, at(R) ? (T = "", L != null && (T = L.replace(St, "$&/") + "/"), M(R, D, T, "", function(Ue) {
        return Ue;
      })) : R != null && (Q(R) && (R = ut(
        R,
        T + (R.key == null || d && d.key === R.key ? "" : ("" + R.key).replace(
          St,
          "$&/"
        ) + "/") + L
      )), D.push(R)), 1;
    L = 0;
    var cl = S === "" ? "." : S + ":";
    if (at(d))
      for (var nl = 0; nl < d.length; nl++)
        S = d[nl], B = cl + Rt(S, nl), L += M(
          S,
          D,
          T,
          B,
          R
        );
    else if (nl = pl(d), typeof nl == "function")
      for (d = nl.call(d), nl = 0; !(S = d.next()).done; )
        S = S.value, B = cl + Rt(S, nl++), L += M(
          S,
          D,
          T,
          B,
          R
        );
    else if (B === "object") {
      if (typeof d.then == "function")
        return M(
          nt(d),
          D,
          T,
          S,
          R
        );
      throw D = String(d), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return L;
  }
  function N(d, D, T) {
    if (d == null) return d;
    var S = [], R = 0;
    return M(d, S, "", "", function(B) {
      return D.call(T, B, R++);
    }), S;
  }
  function V(d) {
    if (d._status === -1) {
      var D = d._result;
      D = D(), D.then(
        function(T) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = T);
        },
        function(T) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = T);
        }
      ), d._status === -1 && (d._status = 0, d._result = D);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var fl = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, rl = {
    map: N,
    forEach: function(d, D, T) {
      N(
        d,
        function() {
          D.apply(this, arguments);
        },
        T
      );
    },
    count: function(d) {
      var D = 0;
      return N(d, function() {
        D++;
      }), D;
    },
    toArray: function(d) {
      return N(d, function(D) {
        return D;
      }) || [];
    },
    only: function(d) {
      if (!Q(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return J.Activity = q, J.Children = rl, J.Component = wl, J.Fragment = h, J.Profiler = z, J.PureComponent = Ol, J.StrictMode = o, J.Suspense = C, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return k.H.useMemoCache(d);
    }
  }, J.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(d, D, T) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var S = Hl({}, d.props), R = d.key;
    if (D != null)
      for (B in D.key !== void 0 && (R = "" + D.key), D)
        !Yl.call(D, B) || B === "key" || B === "__self" || B === "__source" || B === "ref" && D.ref === void 0 || (S[B] = D[B]);
    var B = arguments.length - 2;
    if (B === 1) S.children = T;
    else if (1 < B) {
      for (var L = Array(B), cl = 0; cl < B; cl++)
        L[cl] = arguments[cl + 2];
      S.children = L;
    }
    return gt(d.type, R, S);
  }, J.createContext = function(d) {
    return d = {
      $$typeof: x,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: _,
      _context: d
    }, d;
  }, J.createElement = function(d, D, T) {
    var S, R = {}, B = null;
    if (D != null)
      for (S in D.key !== void 0 && (B = "" + D.key), D)
        Yl.call(D, S) && S !== "key" && S !== "__self" && S !== "__source" && (R[S] = D[S]);
    var L = arguments.length - 2;
    if (L === 1) R.children = T;
    else if (1 < L) {
      for (var cl = Array(L), nl = 0; nl < L; nl++)
        cl[nl] = arguments[nl + 2];
      R.children = cl;
    }
    if (d && d.defaultProps)
      for (S in L = d.defaultProps, L)
        R[S] === void 0 && (R[S] = L[S]);
    return gt(d, B, R);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(d) {
    return { $$typeof: G, render: d };
  }, J.isValidElement = Q, J.lazy = function(d) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: d },
      _init: V
    };
  }, J.memo = function(d, D) {
    return {
      $$typeof: E,
      type: d,
      compare: D === void 0 ? null : D
    };
  }, J.startTransition = function(d) {
    var D = k.T, T = {};
    k.T = T;
    try {
      var S = d(), R = k.S;
      R !== null && R(T, S), typeof S == "object" && S !== null && typeof S.then == "function" && S.then(ql, fl);
    } catch (B) {
      fl(B);
    } finally {
      D !== null && T.types !== null && (D.types = T.types), k.T = D;
    }
  }, J.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, J.use = function(d) {
    return k.H.use(d);
  }, J.useActionState = function(d, D, T) {
    return k.H.useActionState(d, D, T);
  }, J.useCallback = function(d, D) {
    return k.H.useCallback(d, D);
  }, J.useContext = function(d) {
    return k.H.useContext(d);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(d, D) {
    return k.H.useDeferredValue(d, D);
  }, J.useEffect = function(d, D) {
    return k.H.useEffect(d, D);
  }, J.useEffectEvent = function(d) {
    return k.H.useEffectEvent(d);
  }, J.useId = function() {
    return k.H.useId();
  }, J.useImperativeHandle = function(d, D, T) {
    return k.H.useImperativeHandle(d, D, T);
  }, J.useInsertionEffect = function(d, D) {
    return k.H.useInsertionEffect(d, D);
  }, J.useLayoutEffect = function(d, D) {
    return k.H.useLayoutEffect(d, D);
  }, J.useMemo = function(d, D) {
    return k.H.useMemo(d, D);
  }, J.useOptimistic = function(d, D) {
    return k.H.useOptimistic(d, D);
  }, J.useReducer = function(d, D, T) {
    return k.H.useReducer(d, D, T);
  }, J.useRef = function(d) {
    return k.H.useRef(d);
  }, J.useState = function(d) {
    return k.H.useState(d);
  }, J.useSyncExternalStore = function(d, D, T) {
    return k.H.useSyncExternalStore(
      d,
      D,
      T
    );
  }, J.useTransition = function() {
    return k.H.useTransition();
  }, J.version = "19.2.4", J;
}
var N0;
function Mc() {
  return N0 || (N0 = 1, bc.exports = Mh()), bc.exports;
}
var pc = { exports: {} }, Vl = {};
var B0;
function _h() {
  if (B0) return Vl;
  B0 = 1;
  var f = Mc();
  function v(C) {
    var E = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        E += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + C + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, z = /* @__PURE__ */ Symbol.for("react.portal");
  function _(C, E, H) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: q == null ? null : "" + q,
      children: C,
      containerInfo: E,
      implementation: H
    };
  }
  var x = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(C, E) {
    if (C === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Vl.createPortal = function(C, E) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(v(299));
    return _(C, E, null, H);
  }, Vl.flushSync = function(C) {
    var E = x.T, H = o.p;
    try {
      if (x.T = null, o.p = 2, C) return C();
    } finally {
      x.T = E, o.p = H, o.d.f();
    }
  }, Vl.preconnect = function(C, E) {
    typeof C == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(C, E));
  }, Vl.prefetchDNS = function(C) {
    typeof C == "string" && o.d.D(C);
  }, Vl.preinit = function(C, E) {
    if (typeof C == "string" && E && typeof E.as == "string") {
      var H = E.as, q = G(H, E.crossOrigin), W = typeof E.integrity == "string" ? E.integrity : void 0, pl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      H === "style" ? o.d.S(
        C,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: q,
          integrity: W,
          fetchPriority: pl
        }
      ) : H === "script" && o.d.X(C, {
        crossOrigin: q,
        integrity: W,
        fetchPriority: pl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Vl.preinitModule = function(C, E) {
    if (typeof C == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var H = G(
            E.as,
            E.crossOrigin
          );
          o.d.M(C, {
            crossOrigin: H,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(C);
  }, Vl.preload = function(C, E) {
    if (typeof C == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var H = E.as, q = G(H, E.crossOrigin);
      o.d.L(C, H, {
        crossOrigin: q,
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
  }, Vl.preloadModule = function(C, E) {
    if (typeof C == "string")
      if (E) {
        var H = G(E.as, E.crossOrigin);
        o.d.m(C, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: H,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(C);
  }, Vl.requestFormReset = function(C) {
    o.d.r(C);
  }, Vl.unstable_batchedUpdates = function(C, E) {
    return C(E);
  }, Vl.useFormState = function(C, E, H) {
    return x.H.useFormState(C, E, H);
  }, Vl.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Vl.version = "19.2.4", Vl;
}
var q0;
function Oh() {
  if (q0) return pc.exports;
  q0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return f(), pc.exports = _h(), pc.exports;
}
var Y0;
function Dh() {
  if (Y0) return Uu;
  Y0 = 1;
  var f = Ah(), v = Mc(), h = Oh();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function z(l) {
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
  function x(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function G(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(l) {
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
          if (n === e) return C(u), l;
          if (n === a) return C(u), t;
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
  function H(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = H(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, W = /* @__PURE__ */ Symbol.for("react.element"), pl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tl = /* @__PURE__ */ Symbol.for("react.portal"), Hl = /* @__PURE__ */ Symbol.for("react.fragment"), et = /* @__PURE__ */ Symbol.for("react.strict_mode"), wl = /* @__PURE__ */ Symbol.for("react.profiler"), Ut = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), Ll = /* @__PURE__ */ Symbol.for("react.forward_ref"), at = /* @__PURE__ */ Symbol.for("react.suspense"), ql = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), Yl = /* @__PURE__ */ Symbol.for("react.lazy"), gt = /* @__PURE__ */ Symbol.for("react.activity"), ut = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function K(l) {
    return l === null || typeof l != "object" ? null : (l = Q && l[Q] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var St = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Rt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === St ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case wl:
        return "Profiler";
      case et:
        return "StrictMode";
      case at:
        return "Suspense";
      case ql:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tl:
          return "Portal";
        case Ol:
          return l.displayName || "Context";
        case Ut:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : Rt(l.type) || "Memo";
        case Yl:
          t = l._payload, l = l._init;
          try {
            return Rt(l(t));
          } catch {
          }
      }
    return null;
  }
  var nt = Array.isArray, M = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fl = [], rl = -1;
  function d(l) {
    return { current: l };
  }
  function D(l) {
    0 > rl || (l.current = fl[rl], fl[rl] = null, rl--);
  }
  function T(l, t) {
    rl++, fl[rl] = l.current, l.current = t;
  }
  var S = d(null), R = d(null), B = d(null), L = d(null);
  function cl(l, t) {
    switch (T(B, t), T(R, l), T(S, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ir(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ir(t), l = Pr(t, l);
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
    D(S), T(S, l);
  }
  function nl() {
    D(S), D(R), D(B);
  }
  function Ue(l) {
    l.memoizedState !== null && T(L, l);
    var t = S.current, e = Pr(t, l.type);
    t !== e && (T(R, l), T(S, e));
  }
  function Re(l) {
    R.current === l && (D(S), D(R)), L.current === l && (D(L), Au._currentValue = V);
  }
  var Ba, Oc;
  function xe(l) {
    if (Ba === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Ba = t && t[1] || "", Oc = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ba + l + Oc;
  }
  var kn = !1;
  function In(l, t) {
    if (!l || kn) return "";
    kn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (p) {
                  var b = p;
                }
                Reflect.construct(l, [], U);
              } else {
                try {
                  U.call();
                } catch (p) {
                  b = p;
                }
                l.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                b = p;
              }
              (U = l()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (p) {
            if (p && b && typeof p.stack == "string")
              return [p.stack, b.stack];
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
                  var A = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", l.displayName)), A;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      kn = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? xe(e) : "";
  }
  function I0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return xe(l.type);
      case 16:
        return xe("Lazy");
      case 13:
        return l.child !== t && t !== null ? xe("Suspense Fallback") : xe("Suspense");
      case 19:
        return xe("SuspenseList");
      case 0:
      case 15:
        return In(l.type, !1);
      case 11:
        return In(l.type.render, !1);
      case 1:
        return In(l.type, !0);
      case 31:
        return xe("Activity");
      default:
        return "";
    }
  }
  function Dc(l) {
    try {
      var t = "", e = null;
      do
        t += I0(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Pn = Object.prototype.hasOwnProperty, li = f.unstable_scheduleCallback, ti = f.unstable_cancelCallback, P0 = f.unstable_shouldYield, ld = f.unstable_requestPaint, it = f.unstable_now, td = f.unstable_getCurrentPriorityLevel, Uc = f.unstable_ImmediatePriority, Rc = f.unstable_UserBlockingPriority, Ru = f.unstable_NormalPriority, ed = f.unstable_LowPriority, xc = f.unstable_IdlePriority, ad = f.log, ud = f.unstable_setDisableYieldValue, qa = null, ft = null;
  function ue(l) {
    if (typeof ad == "function" && ud(l), ft && typeof ft.setStrictMode == "function")
      try {
        ft.setStrictMode(qa, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : fd, nd = Math.log, id = Math.LN2;
  function fd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (nd(l) / id | 0) | 0;
  }
  var xu = 256, Cu = 262144, Hu = 4194304;
  function Ce(l) {
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
  function Nu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = Ce(a) : (i &= c, i !== 0 ? u = Ce(i) : e || (e = c & ~l, e !== 0 && (u = Ce(e))))) : (c = a & ~n, c !== 0 ? u = Ce(c) : i !== 0 ? u = Ce(i) : e || (e = a & ~l, e !== 0 && (u = Ce(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ya(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function cd(l, t) {
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
  function Cc() {
    var l = Hu;
    return Hu <<= 1, (Hu & 62914560) === 0 && (Hu = 4194304), l;
  }
  function ei(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function ja(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function od(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var A = 31 - ct(e), U = 1 << A;
      c[A] = 0, s[A] = -1;
      var b = g[A];
      if (b !== null)
        for (g[A] = null, A = 0; A < b.length; A++) {
          var p = b[A];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~U;
    }
    a !== 0 && Hc(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Hc(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Nc(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - ct(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Bc(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ai(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function ai(l) {
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
  function ui(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function qc() {
    var l = N.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : T0(l.type));
  }
  function Yc(l, t) {
    var e = N.p;
    try {
      return N.p = l, t();
    } finally {
      N.p = e;
    }
  }
  var ne = Math.random().toString(36).slice(2), jl = "__reactFiber$" + ne, Wl = "__reactProps$" + ne, Fe = "__reactContainer$" + ne, ni = "__reactEvents$" + ne, sd = "__reactListeners$" + ne, rd = "__reactHandles$" + ne, jc = "__reactResources$" + ne, Xa = "__reactMarker$" + ne;
  function ii(l) {
    delete l[jl], delete l[Wl], delete l[ni], delete l[sd], delete l[rd];
  }
  function ke(l) {
    var t = l[jl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Fe] || e[jl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = i0(l); l !== null; ) {
            if (e = l[jl]) return e;
            l = i0(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function Ie(l) {
    if (l = l[jl] || l[Fe]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ga(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Pe(l) {
    var t = l[jc];
    return t || (t = l[jc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Nl(l) {
    l[Xa] = !0;
  }
  var Xc = /* @__PURE__ */ new Set(), Gc = {};
  function He(l, t) {
    la(l, t), la(l + "Capture", t);
  }
  function la(l, t) {
    for (Gc[l] = t, l = 0; l < t.length; l++)
      Xc.add(t[l]);
  }
  var dd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Qc = {}, Zc = {};
  function yd(l) {
    return Pn.call(Zc, l) ? !0 : Pn.call(Qc, l) ? !1 : dd.test(l) ? Zc[l] = !0 : (Qc[l] = !0, !1);
  }
  function Bu(l, t, e) {
    if (yd(t))
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
  function qu(l, t, e) {
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
  function Xt(l, t, e, a) {
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
  function wc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function hd(l, t, e) {
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
  function fi(l) {
    if (!l._valueTracker) {
      var t = wc(l) ? "checked" : "value";
      l._valueTracker = hd(
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
    return l && (a = wc(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Yu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var vd = /[\n"\\]/g;
  function pt(l) {
    return l.replace(
      vd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ci(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + bt(t)) : l.value !== "" + bt(t) && (l.value = "" + bt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? oi(l, i, bt(t)) : e != null ? oi(l, i, bt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + bt(c) : l.removeAttribute("name");
  }
  function Lc(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        fi(l);
        return;
      }
      e = e != null ? "" + bt(e) : "", t = t != null ? "" + bt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), fi(l);
  }
  function oi(l, t, e) {
    t === "number" && Yu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ta(l, t, e, a) {
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
  function Kc(l, t, e) {
    if (t != null && (t = "" + bt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + bt(e) : "";
  }
  function Jc(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (nt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = bt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), fi(l);
  }
  function ea(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var md = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wc(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || md.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function $c(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && Wc(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Wc(l, n, t[n]);
  }
  function si(l) {
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
  var gd = /* @__PURE__ */ new Map([
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
  ]), Sd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ju(l) {
    return Sd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Gt() {
  }
  var ri = null;
  function di(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var aa = null, ua = null;
  function Fc(l) {
    var t = Ie(l);
    if (t && (l = t.stateNode)) {
      var e = l[Wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ci(
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
                var u = a[Wl] || null;
                if (!u) throw Error(o(90));
                ci(
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
          Kc(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ta(l, !!e.multiple, t, !1);
      }
    }
  }
  var yi = !1;
  function kc(l, t, e) {
    if (yi) return l(t, e);
    yi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (yi = !1, (aa !== null || ua !== null) && (_n(), aa && (t = aa, l = ua, ua = aa = null, Fc(t), l)))
        for (t = 0; t < l.length; t++) Fc(l[t]);
    }
  }
  function Qa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Wl] || null;
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
  var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hi = !1;
  if (Qt)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", {
        get: function() {
          hi = !0;
        }
      }), window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
    } catch {
      hi = !1;
    }
  var ie = null, vi = null, Xu = null;
  function Ic() {
    if (Xu) return Xu;
    var l, t = vi, e = t.length, a, u = "value" in ie ? ie.value : ie.textContent, n = u.length;
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
  function Pc() {
    return !1;
  }
  function $l(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Qu : Pc, this.isPropagationStopped = Pc, this;
    }
    return q(t.prototype, {
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
  var Ne = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zu = $l(Ne), wa = q({}, Ne, { view: 0, detail: 0 }), bd = $l(wa), mi, gi, Va, wu = q({}, wa, {
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
    getModifierState: bi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Va && (Va && l.type === "mousemove" ? (mi = l.screenX - Va.screenX, gi = l.screenY - Va.screenY) : gi = mi = 0, Va = l), mi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : gi;
    }
  }), lo = $l(wu), pd = q({}, wu, { dataTransfer: 0 }), zd = $l(pd), Td = q({}, wa, { relatedTarget: 0 }), Si = $l(Td), Ed = q({}, Ne, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ad = $l(Ed), Md = q({}, Ne, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _d = $l(Md), Od = q({}, Ne, { data: 0 }), to = $l(Od), Dd = {
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
  }, Ud = {
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
  }, Rd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Rd[l]) ? !!t[l] : !1;
  }
  function bi() {
    return xd;
  }
  var Cd = q({}, wa, {
    key: function(l) {
      if (l.key) {
        var t = Dd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Gu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ud[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bi,
    charCode: function(l) {
      return l.type === "keypress" ? Gu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Gu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Hd = $l(Cd), Nd = q({}, wu, {
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
  }), eo = $l(Nd), Bd = q({}, wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bi
  }), qd = $l(Bd), Yd = q({}, Ne, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jd = $l(Yd), Xd = q({}, wu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gd = $l(Xd), Qd = q({}, Ne, {
    newState: 0,
    oldState: 0
  }), Zd = $l(Qd), wd = [9, 13, 27, 32], pi = Qt && "CompositionEvent" in window, La = null;
  Qt && "documentMode" in document && (La = document.documentMode);
  var Vd = Qt && "TextEvent" in window && !La, ao = Qt && (!pi || La && 8 < La && 11 >= La), uo = " ", no = !1;
  function io(l, t) {
    switch (l) {
      case "keyup":
        return wd.indexOf(t.keyCode) !== -1;
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
  function fo(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var na = !1;
  function Ld(l, t) {
    switch (l) {
      case "compositionend":
        return fo(t);
      case "keypress":
        return t.which !== 32 ? null : (no = !0, uo);
      case "textInput":
        return l = t.data, l === uo && no ? null : l;
      default:
        return null;
    }
  }
  function Kd(l, t) {
    if (na)
      return l === "compositionend" || !pi && io(l, t) ? (l = Ic(), Xu = vi = ie = null, na = !1, l) : null;
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
        return ao && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jd = {
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
  function co(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Jd[l.type] : t === "textarea";
  }
  function oo(l, t, e, a) {
    aa ? ua ? ua.push(a) : ua = [a] : aa = a, t = Hn(t, "onChange"), 0 < t.length && (e = new Zu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Ka = null, Ja = null;
  function Wd(l) {
    Kr(l, 0);
  }
  function Vu(l) {
    var t = Ga(l);
    if (Vc(t)) return l;
  }
  function so(l, t) {
    if (l === "change") return t;
  }
  var ro = !1;
  if (Qt) {
    var zi;
    if (Qt) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var yo = document.createElement("div");
        yo.setAttribute("oninput", "return;"), Ti = typeof yo.oninput == "function";
      }
      zi = Ti;
    } else zi = !1;
    ro = zi && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    Ka && (Ka.detachEvent("onpropertychange", vo), Ja = Ka = null);
  }
  function vo(l) {
    if (l.propertyName === "value" && Vu(Ja)) {
      var t = [];
      oo(
        t,
        Ja,
        l,
        di(l)
      ), kc(Wd, t);
    }
  }
  function $d(l, t, e) {
    l === "focusin" ? (ho(), Ka = t, Ja = e, Ka.attachEvent("onpropertychange", vo)) : l === "focusout" && ho();
  }
  function Fd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vu(Ja);
  }
  function kd(l, t) {
    if (l === "click") return Vu(t);
  }
  function Id(l, t) {
    if (l === "input" || l === "change")
      return Vu(t);
  }
  function Pd(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ot = typeof Object.is == "function" ? Object.is : Pd;
  function Wa(l, t) {
    if (ot(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Pn.call(t, u) || !ot(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function mo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function go(l, t) {
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
  function So(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? So(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Yu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Yu(l.document);
    }
    return t;
  }
  function Ei(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var ly = Qt && "documentMode" in document && 11 >= document.documentMode, ia = null, Ai = null, $a = null, Mi = !1;
  function po(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mi || ia == null || ia !== Yu(a) || (a = ia, "selectionStart" in a && Ei(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), $a && Wa($a, a) || ($a = a, a = Hn(Ai, "onSelect"), 0 < a.length && (t = new Zu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = ia)));
  }
  function Be(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var fa = {
    animationend: Be("Animation", "AnimationEnd"),
    animationiteration: Be("Animation", "AnimationIteration"),
    animationstart: Be("Animation", "AnimationStart"),
    transitionrun: Be("Transition", "TransitionRun"),
    transitionstart: Be("Transition", "TransitionStart"),
    transitioncancel: Be("Transition", "TransitionCancel"),
    transitionend: Be("Transition", "TransitionEnd")
  }, _i = {}, zo = {};
  Qt && (zo = document.createElement("div").style, "AnimationEvent" in window || (delete fa.animationend.animation, delete fa.animationiteration.animation, delete fa.animationstart.animation), "TransitionEvent" in window || delete fa.transitionend.transition);
  function qe(l) {
    if (_i[l]) return _i[l];
    if (!fa[l]) return l;
    var t = fa[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in zo)
        return _i[l] = t[e];
    return l;
  }
  var To = qe("animationend"), Eo = qe("animationiteration"), Ao = qe("animationstart"), ty = qe("transitionrun"), ey = qe("transitionstart"), ay = qe("transitioncancel"), Mo = qe("transitionend"), _o = /* @__PURE__ */ new Map(), Oi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Oi.push("scrollEnd");
  function xt(l, t) {
    _o.set(l, t), He(t, [l]);
  }
  var Lu = typeof reportError == "function" ? reportError : function(l) {
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
  }, zt = [], ca = 0, Di = 0;
  function Ku() {
    for (var l = ca, t = Di = ca = 0; t < l; ) {
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
      n !== 0 && Oo(e, u, n);
    }
  }
  function Ju(l, t, e, a) {
    zt[ca++] = l, zt[ca++] = t, zt[ca++] = e, zt[ca++] = a, Di |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ui(l, t, e, a) {
    return Ju(l, t, e, a), Wu(l);
  }
  function Ye(l, t) {
    return Ju(l, null, null, t), Wu(l);
  }
  function Oo(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ct(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Wu(l) {
    if (50 < gu)
      throw gu = 0, Xf = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var oa = {};
  function uy(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(l, t, e, a) {
    return new uy(l, t, e, a);
  }
  function Ri(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Zt(l, t) {
    var e = l.alternate;
    return e === null ? (e = st(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Do(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function $u(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Ri(l) && (i = 1);
    else if (typeof l == "string")
      i = oh(
        l,
        e,
        S.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case gt:
          return l = st(31, e, t, u), l.elementType = gt, l.lanes = n, l;
        case Hl:
          return je(e.children, u, n, t);
        case et:
          i = 8, u |= 24;
          break;
        case wl:
          return l = st(12, e, t, u | 2), l.elementType = wl, l.lanes = n, l;
        case at:
          return l = st(13, e, t, u), l.elementType = at, l.lanes = n, l;
        case ql:
          return l = st(19, e, t, u), l.elementType = ql, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ol:
                i = 10;
                break l;
              case Ut:
                i = 9;
                break l;
              case Ll:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case Yl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = st(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function je(l, t, e, a) {
    return l = st(7, l, a, t), l.lanes = e, l;
  }
  function xi(l, t, e) {
    return l = st(6, l, null, t), l.lanes = e, l;
  }
  function Uo(l) {
    var t = st(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ci(l, t, e) {
    return t = st(
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
  var Ro = /* @__PURE__ */ new WeakMap();
  function Tt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ro.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Dc(t)
      }, Ro.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Dc(t)
    };
  }
  var sa = [], ra = 0, Fu = null, Fa = 0, Et = [], At = 0, fe = null, Nt = 1, Bt = "";
  function wt(l, t) {
    sa[ra++] = Fa, sa[ra++] = Fu, Fu = l, Fa = t;
  }
  function xo(l, t, e) {
    Et[At++] = Nt, Et[At++] = Bt, Et[At++] = fe, fe = l;
    var a = Nt;
    l = Bt;
    var u = 32 - ct(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - ct(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Nt = 1 << 32 - ct(t) + u | e << u | a, Bt = n + l;
    } else
      Nt = 1 << n | e << u | a, Bt = l;
  }
  function Hi(l) {
    l.return !== null && (wt(l, 1), xo(l, 1, 0));
  }
  function Ni(l) {
    for (; l === Fu; )
      Fu = sa[--ra], sa[ra] = null, Fa = sa[--ra], sa[ra] = null;
    for (; l === fe; )
      fe = Et[--At], Et[At] = null, Bt = Et[--At], Et[At] = null, Nt = Et[--At], Et[At] = null;
  }
  function Co(l, t) {
    Et[At++] = Nt, Et[At++] = Bt, Et[At++] = fe, Nt = t.id, Bt = t.overflow, fe = l;
  }
  var Xl = null, ml = null, el = !1, ce = null, Mt = !1, Bi = Error(o(519));
  function oe(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ka(Tt(t, l)), Bi;
  }
  function Ho(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[jl] = l, t[Wl] = a, e) {
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
        for (e = 0; e < bu.length; e++)
          P(bu[e], t);
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
        P("invalid", t), Jc(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Fr(t.textContent, e) ? (a.popover != null && (P("beforetoggle", t), P("toggle", t)), a.onScroll != null && P("scroll", t), a.onScrollEnd != null && P("scrollend", t), a.onClick != null && (t.onclick = Gt), t = !0) : t = !1, t || oe(l, !0);
  }
  function No(l) {
    for (Xl = l.return; Xl; )
      switch (Xl.tag) {
        case 5:
        case 31:
        case 13:
          Mt = !1;
          return;
        case 27:
        case 3:
          Mt = !0;
          return;
        default:
          Xl = Xl.return;
      }
  }
  function da(l) {
    if (l !== Xl) return !1;
    if (!el) return No(l), el = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || lc(l.type, l.memoizedProps)), e = !e), e && ml && oe(l), No(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = n0(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = n0(l);
    } else
      t === 27 ? (t = ml, Ee(l.type) ? (l = nc, nc = null, ml = l) : ml = t) : ml = Xl ? Ot(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xe() {
    ml = Xl = null, el = !1;
  }
  function qi() {
    var l = ce;
    return l !== null && (Pl === null ? Pl = l : Pl.push.apply(
      Pl,
      l
    ), ce = null), l;
  }
  function ka(l) {
    ce === null ? ce = [l] : ce.push(l);
  }
  var Yi = d(null), Ge = null, Vt = null;
  function se(l, t, e) {
    T(Yi, t._currentValue), t._currentValue = e;
  }
  function Lt(l) {
    l._currentValue = Yi.current, D(Yi);
  }
  function ji(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Xi(l, t, e, a) {
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
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), ji(
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
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), ji(i, e, l), i = null;
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
  function ya(l, t, e, a) {
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
          ot(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === L.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Au) : l = [Au]);
      }
      u = u.return;
    }
    l !== null && Xi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function ku(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ot(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Qe(l) {
    Ge = l, Vt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return Bo(Ge, l);
  }
  function Iu(l, t) {
    return Ge === null && Qe(l), Bo(l, t);
  }
  function Bo(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Vt === null) {
      if (l === null) throw Error(o(308));
      Vt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Vt = Vt.next = t;
    return e;
  }
  var ny = typeof AbortController < "u" ? AbortController : function() {
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
  }, iy = f.unstable_scheduleCallback, fy = f.unstable_NormalPriority, Dl = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gi() {
    return {
      controller: new ny(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(l) {
    l.refCount--, l.refCount === 0 && iy(fy, function() {
      l.controller.abort();
    });
  }
  var Pa = null, Qi = 0, ha = 0, va = null;
  function cy(l, t) {
    if (Pa === null) {
      var e = Pa = [];
      Qi = 0, ha = Lf(), va = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Qi++, t.then(qo, qo), t;
  }
  function qo() {
    if (--Qi === 0 && Pa !== null) {
      va !== null && (va.status = "fulfilled");
      var l = Pa;
      Pa = null, ha = 0, va = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function oy(l, t) {
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
  var Yo = M.S;
  M.S = function(l, t) {
    pr = it(), typeof t == "object" && t !== null && typeof t.then == "function" && cy(l, t), Yo !== null && Yo(l, t);
  };
  var Ze = d(null);
  function Zi() {
    var l = Ze.current;
    return l !== null ? l : vl.pooledCache;
  }
  function Pu(l, t) {
    t === null ? T(Ze, Ze.current) : T(Ze, t.pool);
  }
  function jo() {
    var l = Zi();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var ma = Error(o(460)), wi = Error(o(474)), ln = Error(o(542)), tn = { then: function() {
  } };
  function Xo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Go(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Gt, Gt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Zo(l), l;
      default:
        if (typeof t.status == "string") t.then(Gt, Gt);
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
            throw l = t.reason, Zo(l), l;
        }
        throw Ve = t, ma;
    }
  }
  function we(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ve = e, ma) : e;
    }
  }
  var Ve = null;
  function Qo() {
    if (Ve === null) throw Error(o(459));
    var l = Ve;
    return Ve = null, l;
  }
  function Zo(l) {
    if (l === ma || l === ln)
      throw Error(o(483));
  }
  var ga = null, lu = 0;
  function en(l) {
    var t = lu;
    return lu += 1, ga === null && (ga = []), Go(ga, l, t);
  }
  function tu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function an(l, t) {
    throw t.$$typeof === W ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function wo(l) {
    function t(y, r) {
      if (l) {
        var m = y.deletions;
        m === null ? (y.deletions = [r], y.flags |= 16) : m.push(r);
      }
    }
    function e(y, r) {
      if (!l) return null;
      for (; r !== null; )
        t(y, r), r = r.sibling;
      return null;
    }
    function a(y) {
      for (var r = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? r.set(y.key, y) : r.set(y.index, y), y = y.sibling;
      return r;
    }
    function u(y, r) {
      return y = Zt(y, r), y.index = 0, y.sibling = null, y;
    }
    function n(y, r, m) {
      return y.index = m, l ? (m = y.alternate, m !== null ? (m = m.index, m < r ? (y.flags |= 67108866, r) : m) : (y.flags |= 67108866, r)) : (y.flags |= 1048576, r);
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, r, m, O) {
      return r === null || r.tag !== 6 ? (r = xi(m, y.mode, O), r.return = y, r) : (r = u(r, m), r.return = y, r);
    }
    function s(y, r, m, O) {
      var X = m.type;
      return X === Hl ? A(
        y,
        r,
        m.props.children,
        O,
        m.key
      ) : r !== null && (r.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Yl && we(X) === r.type) ? (r = u(r, m.props), tu(r, m), r.return = y, r) : (r = $u(
        m.type,
        m.key,
        m.props,
        null,
        y.mode,
        O
      ), tu(r, m), r.return = y, r);
    }
    function g(y, r, m, O) {
      return r === null || r.tag !== 4 || r.stateNode.containerInfo !== m.containerInfo || r.stateNode.implementation !== m.implementation ? (r = Ci(m, y.mode, O), r.return = y, r) : (r = u(r, m.children || []), r.return = y, r);
    }
    function A(y, r, m, O, X) {
      return r === null || r.tag !== 7 ? (r = je(
        m,
        y.mode,
        O,
        X
      ), r.return = y, r) : (r = u(r, m), r.return = y, r);
    }
    function U(y, r, m) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return r = xi(
          "" + r,
          y.mode,
          m
        ), r.return = y, r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case pl:
            return m = $u(
              r.type,
              r.key,
              r.props,
              null,
              y.mode,
              m
            ), tu(m, r), m.return = y, m;
          case Tl:
            return r = Ci(
              r,
              y.mode,
              m
            ), r.return = y, r;
          case Yl:
            return r = we(r), U(y, r, m);
        }
        if (nt(r) || K(r))
          return r = je(
            r,
            y.mode,
            m,
            null
          ), r.return = y, r;
        if (typeof r.then == "function")
          return U(y, en(r), m);
        if (r.$$typeof === Ol)
          return U(
            y,
            Iu(y, r),
            m
          );
        an(y, r);
      }
      return null;
    }
    function b(y, r, m, O) {
      var X = r !== null ? r.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return X !== null ? null : c(y, r, "" + m, O);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pl:
            return m.key === X ? s(y, r, m, O) : null;
          case Tl:
            return m.key === X ? g(y, r, m, O) : null;
          case Yl:
            return m = we(m), b(y, r, m, O);
        }
        if (nt(m) || K(m))
          return X !== null ? null : A(y, r, m, O, null);
        if (typeof m.then == "function")
          return b(
            y,
            r,
            en(m),
            O
          );
        if (m.$$typeof === Ol)
          return b(
            y,
            r,
            Iu(y, m),
            O
          );
        an(y, m);
      }
      return null;
    }
    function p(y, r, m, O, X) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return y = y.get(m) || null, c(r, y, "" + O, X);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case pl:
            return y = y.get(
              O.key === null ? m : O.key
            ) || null, s(r, y, O, X);
          case Tl:
            return y = y.get(
              O.key === null ? m : O.key
            ) || null, g(r, y, O, X);
          case Yl:
            return O = we(O), p(
              y,
              r,
              m,
              O,
              X
            );
        }
        if (nt(O) || K(O))
          return y = y.get(m) || null, A(r, y, O, X, null);
        if (typeof O.then == "function")
          return p(
            y,
            r,
            m,
            en(O),
            X
          );
        if (O.$$typeof === Ol)
          return p(
            y,
            r,
            m,
            Iu(r, O),
            X
          );
        an(r, O);
      }
      return null;
    }
    function Y(y, r, m, O) {
      for (var X = null, al = null, j = r, F = r = 0, tl = null; j !== null && F < m.length; F++) {
        j.index > F ? (tl = j, j = null) : tl = j.sibling;
        var ul = b(
          y,
          j,
          m[F],
          O
        );
        if (ul === null) {
          j === null && (j = tl);
          break;
        }
        l && j && ul.alternate === null && t(y, j), r = n(ul, r, F), al === null ? X = ul : al.sibling = ul, al = ul, j = tl;
      }
      if (F === m.length)
        return e(y, j), el && wt(y, F), X;
      if (j === null) {
        for (; F < m.length; F++)
          j = U(y, m[F], O), j !== null && (r = n(
            j,
            r,
            F
          ), al === null ? X = j : al.sibling = j, al = j);
        return el && wt(y, F), X;
      }
      for (j = a(j); F < m.length; F++)
        tl = p(
          j,
          y,
          F,
          m[F],
          O
        ), tl !== null && (l && tl.alternate !== null && j.delete(
          tl.key === null ? F : tl.key
        ), r = n(
          tl,
          r,
          F
        ), al === null ? X = tl : al.sibling = tl, al = tl);
      return l && j.forEach(function(De) {
        return t(y, De);
      }), el && wt(y, F), X;
    }
    function Z(y, r, m, O) {
      if (m == null) throw Error(o(151));
      for (var X = null, al = null, j = r, F = r = 0, tl = null, ul = m.next(); j !== null && !ul.done; F++, ul = m.next()) {
        j.index > F ? (tl = j, j = null) : tl = j.sibling;
        var De = b(y, j, ul.value, O);
        if (De === null) {
          j === null && (j = tl);
          break;
        }
        l && j && De.alternate === null && t(y, j), r = n(De, r, F), al === null ? X = De : al.sibling = De, al = De, j = tl;
      }
      if (ul.done)
        return e(y, j), el && wt(y, F), X;
      if (j === null) {
        for (; !ul.done; F++, ul = m.next())
          ul = U(y, ul.value, O), ul !== null && (r = n(ul, r, F), al === null ? X = ul : al.sibling = ul, al = ul);
        return el && wt(y, F), X;
      }
      for (j = a(j); !ul.done; F++, ul = m.next())
        ul = p(j, y, F, ul.value, O), ul !== null && (l && ul.alternate !== null && j.delete(ul.key === null ? F : ul.key), r = n(ul, r, F), al === null ? X = ul : al.sibling = ul, al = ul);
      return l && j.forEach(function(ph) {
        return t(y, ph);
      }), el && wt(y, F), X;
    }
    function hl(y, r, m, O) {
      if (typeof m == "object" && m !== null && m.type === Hl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pl:
            l: {
              for (var X = m.key; r !== null; ) {
                if (r.key === X) {
                  if (X = m.type, X === Hl) {
                    if (r.tag === 7) {
                      e(
                        y,
                        r.sibling
                      ), O = u(
                        r,
                        m.props.children
                      ), O.return = y, y = O;
                      break l;
                    }
                  } else if (r.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Yl && we(X) === r.type) {
                    e(
                      y,
                      r.sibling
                    ), O = u(r, m.props), tu(O, m), O.return = y, y = O;
                    break l;
                  }
                  e(y, r);
                  break;
                } else t(y, r);
                r = r.sibling;
              }
              m.type === Hl ? (O = je(
                m.props.children,
                y.mode,
                O,
                m.key
              ), O.return = y, y = O) : (O = $u(
                m.type,
                m.key,
                m.props,
                null,
                y.mode,
                O
              ), tu(O, m), O.return = y, y = O);
            }
            return i(y);
          case Tl:
            l: {
              for (X = m.key; r !== null; ) {
                if (r.key === X)
                  if (r.tag === 4 && r.stateNode.containerInfo === m.containerInfo && r.stateNode.implementation === m.implementation) {
                    e(
                      y,
                      r.sibling
                    ), O = u(r, m.children || []), O.return = y, y = O;
                    break l;
                  } else {
                    e(y, r);
                    break;
                  }
                else t(y, r);
                r = r.sibling;
              }
              O = Ci(m, y.mode, O), O.return = y, y = O;
            }
            return i(y);
          case Yl:
            return m = we(m), hl(
              y,
              r,
              m,
              O
            );
        }
        if (nt(m))
          return Y(
            y,
            r,
            m,
            O
          );
        if (K(m)) {
          if (X = K(m), typeof X != "function") throw Error(o(150));
          return m = X.call(m), Z(
            y,
            r,
            m,
            O
          );
        }
        if (typeof m.then == "function")
          return hl(
            y,
            r,
            en(m),
            O
          );
        if (m.$$typeof === Ol)
          return hl(
            y,
            r,
            Iu(y, m),
            O
          );
        an(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, r !== null && r.tag === 6 ? (e(y, r.sibling), O = u(r, m), O.return = y, y = O) : (e(y, r), O = xi(m, y.mode, O), O.return = y, y = O), i(y)) : e(y, r);
    }
    return function(y, r, m, O) {
      try {
        lu = 0;
        var X = hl(
          y,
          r,
          m,
          O
        );
        return ga = null, X;
      } catch (j) {
        if (j === ma || j === ln) throw j;
        var al = st(29, j, null, y.mode);
        return al.lanes = O, al.return = y, al;
      }
    };
  }
  var Le = wo(!0), Vo = wo(!1), re = !1;
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
  function ye(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (il & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Wu(l), Oo(l, null, e), t;
    }
    return Ju(l, a, t, e), Wu(l);
  }
  function eu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Nc(l, e);
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
  var Ji = !1;
  function au() {
    if (Ji) {
      var l = va;
      if (l !== null) throw l;
    }
  }
  function uu(l, t, e, a) {
    Ji = !1;
    var u = l.updateQueue;
    re = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, g = s.next;
      s.next = null, i === null ? n = g : i.next = g, i = s;
      var A = l.alternate;
      A !== null && (A = A.updateQueue, c = A.lastBaseUpdate, c !== i && (c === null ? A.firstBaseUpdate = g : c.next = g, A.lastBaseUpdate = s));
    }
    if (n !== null) {
      var U = u.baseState;
      i = 0, A = g = s = null, c = n;
      do {
        var b = c.lane & -536870913, p = b !== c.lane;
        if (p ? (ll & b) === b : (a & b) === b) {
          b !== 0 && b === ha && (Ji = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var Y = l, Z = c;
            b = t;
            var hl = e;
            switch (Z.tag) {
              case 1:
                if (Y = Z.payload, typeof Y == "function") {
                  U = Y.call(hl, U, b);
                  break l;
                }
                U = Y;
                break l;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = Z.payload, b = typeof Y == "function" ? Y.call(hl, U, b) : Y, b == null) break l;
                U = q({}, U, b);
                break l;
              case 2:
                re = !0;
            }
          }
          b = c.callback, b !== null && (l.flags |= 64, p && (l.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [b] : p.push(b));
        } else
          p = {
            lane: b,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, A === null ? (g = A = p, s = U) : A = A.next = p, i |= b;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          p = c, c = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
        }
      } while (!0);
      A === null && (s = U), u.baseState = s, u.firstBaseUpdate = g, u.lastBaseUpdate = A, n === null && (u.shared.lanes = 0), Se |= i, l.lanes = i, l.memoizedState = U;
    }
  }
  function Lo(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function Ko(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Lo(e[l], t);
  }
  var Sa = d(null), un = d(0);
  function Jo(l, t) {
    l = le, T(un, l), T(Sa, t), le = l | t.baseLanes;
  }
  function Wi() {
    T(un, le), T(Sa, Sa.current);
  }
  function $i() {
    le = un.current, D(Sa), D(un);
  }
  var rt = d(null), _t = null;
  function he(l) {
    var t = l.alternate;
    T(Ml, Ml.current & 1), T(rt, l), _t === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (_t = l);
  }
  function Fi(l) {
    T(Ml, Ml.current), T(rt, l), _t === null && (_t = l);
  }
  function Wo(l) {
    l.tag === 22 ? (T(Ml, Ml.current), T(rt, l), _t === null && (_t = l)) : ve();
  }
  function ve() {
    T(Ml, Ml.current), T(rt, rt.current);
  }
  function dt(l) {
    D(rt), _t === l && (_t = null), D(Ml);
  }
  var Ml = d(0);
  function nn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || ac(e) || uc(e)))
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
  var Kt = 0, $ = null, dl = null, Ul = null, fn = !1, ba = !1, Ke = !1, cn = 0, nu = 0, pa = null, sy = 0;
  function El() {
    throw Error(o(321));
  }
  function ki(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ot(l[e], t[e])) return !1;
    return !0;
  }
  function Ii(l, t, e, a, u, n) {
    return Kt = n, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = l === null || l.memoizedState === null ? xs : hf, Ke = !1, n = e(a, u), Ke = !1, ba && (n = Fo(
      t,
      e,
      a,
      u
    )), $o(l), n;
  }
  function $o(l) {
    M.H = cu;
    var t = dl !== null && dl.next !== null;
    if (Kt = 0, Ul = dl = $ = null, fn = !1, nu = 0, pa = null, t) throw Error(o(300));
    l === null || Rl || (l = l.dependencies, l !== null && ku(l) && (Rl = !0));
  }
  function Fo(l, t, e, a) {
    $ = l;
    var u = 0;
    do {
      if (ba && (pa = null), nu = 0, ba = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Ul = dl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      M.H = Cs, n = t(e, a);
    } while (ba);
    return n;
  }
  function ry() {
    var l = M.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? iu(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && ($.flags |= 1024), t;
  }
  function Pi() {
    var l = cn !== 0;
    return cn = 0, l;
  }
  function lf(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function tf(l) {
    if (fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      fn = !1;
    }
    Kt = 0, Ul = dl = $ = null, ba = !1, nu = cn = 0, pa = null;
  }
  function Kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ul === null ? $.memoizedState = Ul = l : Ul = Ul.next = l, Ul;
  }
  function _l() {
    if (dl === null) {
      var l = $.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Ul === null ? $.memoizedState : Ul.next;
    if (t !== null)
      Ul = t, dl = l;
    else {
      if (l === null)
        throw $.alternate === null ? Error(o(467)) : Error(o(310));
      dl = l, l = {
        memoizedState: dl.memoizedState,
        baseState: dl.baseState,
        baseQueue: dl.baseQueue,
        queue: dl.queue,
        next: null
      }, Ul === null ? $.memoizedState = Ul = l : Ul = Ul.next = l;
    }
    return Ul;
  }
  function on() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function iu(l) {
    var t = nu;
    return nu += 1, pa === null && (pa = []), l = Go(pa, l, t), t = $, (Ul === null ? t.memoizedState : Ul.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? xs : hf), l;
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return iu(l);
      if (l.$$typeof === Ol) return Gl(l);
    }
    throw Error(o(438, String(l)));
  }
  function ef(l) {
    var t = null, e = $.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = $.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = on(), $.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = ut;
    return t.index++, e;
  }
  function Jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function rn(l) {
    var t = _l();
    return af(t, dl, l);
  }
  function af(l, t, e) {
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
      var c = i = null, s = null, g = t, A = !1;
      do {
        var U = g.lane & -536870913;
        if (U !== g.lane ? (ll & U) === U : (Kt & U) === U) {
          var b = g.revertLane;
          if (b === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), U === ha && (A = !0);
          else if ((Kt & b) === b) {
            g = g.next, b === ha && (A = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, s === null ? (c = s = U, i = n) : s = s.next = U, $.lanes |= b, Se |= b;
          U = g.action, Ke && e(n, U), n = g.hasEagerState ? g.eagerState : e(n, U);
        } else
          b = {
            lane: U,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, s === null ? (c = s = b, i = n) : s = s.next = b, $.lanes |= U, Se |= U;
        g = g.next;
      } while (g !== null && g !== t);
      if (s === null ? i = n : s.next = c, !ot(n, l.memoizedState) && (Rl = !0, A && (e = va, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function uf(l) {
    var t = _l(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ot(n, t.memoizedState) || (Rl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function ko(l, t, e) {
    var a = $, u = _l(), n = el;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !ot(
      (dl || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Rl = !0), u = u.queue, cf(ls.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Ul !== null && Ul.memoizedState.tag & 1) {
      if (a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Po.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), vl === null) throw Error(o(349));
      n || (Kt & 127) !== 0 || Io(a, t, e);
    }
    return e;
  }
  function Io(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = $.updateQueue, t === null ? (t = on(), $.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Po(l, t, e, a) {
    t.value = e, t.getSnapshot = a, ts(t) && es(l);
  }
  function ls(l, t, e) {
    return e(function() {
      ts(t) && es(l);
    });
  }
  function ts(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ot(l, e);
    } catch {
      return !0;
    }
  }
  function es(l) {
    var t = Ye(l, 2);
    t !== null && lt(t, l, 2);
  }
  function nf(l) {
    var t = Kl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Ke) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jt,
      lastRenderedState: l
    }, t;
  }
  function as(l, t, e, a) {
    return l.baseState = e, af(
      l,
      dl,
      typeof a == "function" ? a : Jt
    );
  }
  function dy(l, t, e, a, u) {
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
      M.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, us(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function us(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = M.T, i = {};
      M.T = i;
      try {
        var c = e(u, a), s = M.S;
        s !== null && s(i, c), ns(l, t, c);
      } catch (g) {
        ff(l, t, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), M.T = n;
      }
    } else
      try {
        n = e(u, a), ns(l, t, n);
      } catch (g) {
        ff(l, t, g);
      }
  }
  function ns(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        is(l, t, a);
      },
      function(a) {
        return ff(l, t, a);
      }
    ) : is(l, t, e);
  }
  function is(l, t, e) {
    t.status = "fulfilled", t.value = e, fs(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, us(l, e)));
  }
  function ff(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, fs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function fs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function cs(l, t) {
    return t;
  }
  function os(l, t) {
    if (el) {
      var e = vl.formState;
      if (e !== null) {
        l: {
          var a = $;
          if (el) {
            if (ml) {
              t: {
                for (var u = ml, n = Mt; u.nodeType !== 8; ) {
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
                ml = Ot(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            oe(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = Kl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cs,
      lastRenderedState: t
    }, e.queue = a, e = Ds.bind(
      null,
      $,
      a
    ), a.dispatch = e, a = nf(!1), n = yf.bind(
      null,
      $,
      !1,
      a.queue
    ), a = Kl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = dy.bind(
      null,
      $,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function ss(l) {
    var t = _l();
    return rs(t, dl, l);
  }
  function rs(l, t, e) {
    if (t = af(
      l,
      t,
      cs
    )[0], l = rn(Jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = iu(t);
      } catch (i) {
        throw i === ma ? ln : i;
      }
    else a = t;
    t = _l();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && ($.flags |= 2048, za(
      9,
      { destroy: void 0 },
      yy.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function yy(l, t) {
    l.action = t;
  }
  function ds(l) {
    var t = _l(), e = dl;
    if (e !== null)
      return rs(t, e, l);
    _l(), t = t.memoizedState, e = _l();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function za(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = $.updateQueue, t === null && (t = on(), $.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ys() {
    return _l().memoizedState;
  }
  function dn(l, t, e, a) {
    var u = Kl();
    $.flags |= l, u.memoizedState = za(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function yn(l, t, e, a) {
    var u = _l();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    dl !== null && a !== null && ki(a, dl.memoizedState.deps) ? u.memoizedState = za(t, n, e, a) : ($.flags |= l, u.memoizedState = za(
      1 | t,
      n,
      e,
      a
    ));
  }
  function hs(l, t) {
    dn(8390656, 8, l, t);
  }
  function cf(l, t) {
    yn(2048, 8, l, t);
  }
  function hy(l) {
    $.flags |= 4;
    var t = $.updateQueue;
    if (t === null)
      t = on(), $.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function vs(l) {
    var t = _l().memoizedState;
    return hy({ ref: t, nextImpl: l }), function() {
      if ((il & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ms(l, t) {
    return yn(4, 2, l, t);
  }
  function gs(l, t) {
    return yn(4, 4, l, t);
  }
  function Ss(l, t) {
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
  function bs(l, t, e) {
    e = e != null ? e.concat([l]) : null, yn(4, 4, Ss.bind(null, t, l), e);
  }
  function of() {
  }
  function ps(l, t) {
    var e = _l();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function zs(l, t) {
    var e = _l();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ki(t, a[1]))
      return a[0];
    if (a = l(), Ke) {
      ue(!0);
      try {
        l();
      } finally {
        ue(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function sf(l, t, e) {
    return e === void 0 || (Kt & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = Tr(), $.lanes |= l, Se |= l, e);
  }
  function Ts(l, t, e, a) {
    return ot(e, t) ? e : Sa.current !== null ? (l = sf(l, e, a), ot(l, t) || (Rl = !0), l) : (Kt & 42) === 0 || (Kt & 1073741824) !== 0 && (ll & 261930) === 0 ? (Rl = !0, l.memoizedState = e) : (l = Tr(), $.lanes |= l, Se |= l, t);
  }
  function Es(l, t, e, a, u) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var i = M.T, c = {};
    M.T = c, yf(l, !1, t, e);
    try {
      var s = u(), g = M.S;
      if (g !== null && g(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var A = oy(
          s,
          a
        );
        fu(
          l,
          t,
          A,
          vt(l)
        );
      } else
        fu(
          l,
          t,
          a,
          vt(l)
        );
    } catch (U) {
      fu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        vt()
      );
    } finally {
      N.p = n, i !== null && c.types !== null && (i.types = c.types), M.T = i;
    }
  }
  function vy() {
  }
  function rf(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = As(l).queue;
    Es(
      l,
      u,
      t,
      V,
      e === null ? vy : function() {
        return Ms(l), e(a);
      }
    );
  }
  function As(l) {
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
        lastRenderedReducer: Jt,
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
        lastRenderedReducer: Jt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Ms(l) {
    var t = As(l);
    t.next === null && (t = l.alternate.memoizedState), fu(
      l,
      t.next.queue,
      {},
      vt()
    );
  }
  function df() {
    return Gl(Au);
  }
  function _s() {
    return _l().memoizedState;
  }
  function Os() {
    return _l().memoizedState;
  }
  function my(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = vt();
          l = de(e);
          var a = ye(t, l, e);
          a !== null && (lt(a, t, e), eu(a, t, e)), t = { cache: Gi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function gy(l, t, e) {
    var a = vt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hn(l) ? Us(t, e) : (e = Ui(l, t, e, a), e !== null && (lt(e, l, a), Rs(e, t, a)));
  }
  function Ds(l, t, e) {
    var a = vt();
    fu(l, t, e, a);
  }
  function fu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hn(l)) Us(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, ot(c, i))
            return Ju(l, t, u, 0), vl === null && Ku(), !1;
        } catch {
        }
      if (e = Ui(l, t, u, a), e !== null)
        return lt(e, l, a), Rs(e, t, a), !0;
    }
    return !1;
  }
  function yf(l, t, e, a) {
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
      t = Ui(
        l,
        e,
        a,
        2
      ), t !== null && lt(t, l, 2);
  }
  function hn(l) {
    var t = l.alternate;
    return l === $ || t !== null && t === $;
  }
  function Us(l, t) {
    ba = fn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Rs(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Nc(l, e);
    }
  }
  var cu = {
    readContext: Gl,
    use: sn,
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
  cu.useEffectEvent = El;
  var xs = {
    readContext: Gl,
    use: sn,
    useCallback: function(l, t) {
      return Kl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: hs,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, dn(
        4194308,
        4,
        Ss.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return dn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      dn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = Kl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ke) {
        ue(!0);
        try {
          l();
        } finally {
          ue(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = Kl();
      if (e !== void 0) {
        var u = e(t);
        if (Ke) {
          ue(!0);
          try {
            e(t);
          } finally {
            ue(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = gy.bind(
        null,
        $,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Kl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = nf(l);
      var t = l.queue, e = Ds.bind(null, $, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: of,
    useDeferredValue: function(l, t) {
      var e = Kl();
      return sf(e, l, t);
    },
    useTransition: function() {
      var l = nf(!1);
      return l = Es.bind(
        null,
        $,
        l.queue,
        !0,
        !1
      ), Kl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = $, u = Kl();
      if (el) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), vl === null)
          throw Error(o(349));
        (ll & 127) !== 0 || Io(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, hs(ls.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Po.bind(
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
      var l = Kl(), t = vl.identifierPrefix;
      if (el) {
        var e = Bt, a = Nt;
        e = (a & ~(1 << 32 - ct(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = cn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = sy++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: df,
    useFormState: os,
    useActionState: os,
    useOptimistic: function(l) {
      var t = Kl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = yf.bind(
        null,
        $,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: ef,
    useCacheRefresh: function() {
      return Kl().memoizedState = my.bind(
        null,
        $
      );
    },
    useEffectEvent: function(l) {
      var t = Kl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((il & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, hf = {
    readContext: Gl,
    use: sn,
    useCallback: ps,
    useContext: Gl,
    useEffect: cf,
    useImperativeHandle: bs,
    useInsertionEffect: ms,
    useLayoutEffect: gs,
    useMemo: zs,
    useReducer: rn,
    useRef: ys,
    useState: function() {
      return rn(Jt);
    },
    useDebugValue: of,
    useDeferredValue: function(l, t) {
      var e = _l();
      return Ts(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = rn(Jt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : iu(l),
        t
      ];
    },
    useSyncExternalStore: ko,
    useId: _s,
    useHostTransitionStatus: df,
    useFormState: ss,
    useActionState: ss,
    useOptimistic: function(l, t) {
      var e = _l();
      return as(e, dl, l, t);
    },
    useMemoCache: ef,
    useCacheRefresh: Os
  };
  hf.useEffectEvent = vs;
  var Cs = {
    readContext: Gl,
    use: sn,
    useCallback: ps,
    useContext: Gl,
    useEffect: cf,
    useImperativeHandle: bs,
    useInsertionEffect: ms,
    useLayoutEffect: gs,
    useMemo: zs,
    useReducer: uf,
    useRef: ys,
    useState: function() {
      return uf(Jt);
    },
    useDebugValue: of,
    useDeferredValue: function(l, t) {
      var e = _l();
      return dl === null ? sf(e, l, t) : Ts(
        e,
        dl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = uf(Jt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : iu(l),
        t
      ];
    },
    useSyncExternalStore: ko,
    useId: _s,
    useHostTransitionStatus: df,
    useFormState: ds,
    useActionState: ds,
    useOptimistic: function(l, t) {
      var e = _l();
      return dl !== null ? as(e, dl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: ef,
    useCacheRefresh: Os
  };
  Cs.useEffectEvent = vs;
  function vf(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : q({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var mf = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = vt(), u = de(a);
      u.payload = t, e != null && (u.callback = e), t = ye(l, u, a), t !== null && (lt(t, l, a), eu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = vt(), u = de(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ye(l, u, a), t !== null && (lt(t, l, a), eu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = vt(), a = de(e);
      a.tag = 2, t != null && (a.callback = t), t = ye(l, a, e), t !== null && (lt(t, l, e), eu(t, l, e));
    }
  };
  function Hs(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Wa(e, a) || !Wa(u, n) : !0;
  }
  function Ns(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && mf.enqueueReplaceState(t, t.state, null);
  }
  function Je(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = q({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Bs(l) {
    Lu(l);
  }
  function qs(l) {
    console.error(l);
  }
  function Ys(l) {
    Lu(l);
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
  function js(l, t, e) {
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
  function gf(l, t, e) {
    return e = de(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      vn(l, t);
    }, e;
  }
  function Xs(l) {
    return l = de(l), l.tag = 3, l;
  }
  function Gs(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        js(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      js(t, e, a), typeof u != "function" && (be === null ? be = /* @__PURE__ */ new Set([this]) : be.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Sy(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ya(
        t,
        e,
        u,
        !0
      ), e = rt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return _t === null ? On() : e.alternate === null && Al === 0 && (Al = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Zf(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Zf(l, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Zf(l, a, u), On(), !1;
    }
    if (el)
      return t = rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Bi && (l = Error(o(422), { cause: a }), ka(Tt(l, e)))) : (a !== Bi && (t = Error(o(423), {
        cause: a
      }), ka(
        Tt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = Tt(a, e), u = gf(
        l.stateNode,
        a,
        u
      ), Ki(l, u), Al !== 4 && (Al = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = Tt(n, e), mu === null ? mu = [n] : mu.push(n), Al !== 4 && (Al = 2), t === null) return !0;
    a = Tt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = gf(e.stateNode, a, l), Ki(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (be === null || !be.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Xs(u), Gs(
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
  var Sf = Error(o(461)), Rl = !1;
  function Ql(l, t, e, a) {
    t.child = l === null ? Vo(t, null, e, a) : Le(
      t,
      l.child,
      e,
      a
    );
  }
  function Qs(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Qe(t), a = Ii(
      l,
      t,
      e,
      i,
      n,
      u
    ), c = Pi(), l !== null && !Rl ? (lf(l, t, u), Wt(l, t, u)) : (el && c && Hi(t), t.flags |= 1, Ql(l, t, a, u), t.child);
  }
  function Zs(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Ri(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, ws(
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
      if (e = e.compare, e = e !== null ? e : Wa, e(i, a) && l.ref === t.ref)
        return Wt(l, t, u);
    }
    return t.flags |= 1, l = Zt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function ws(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Wa(n, a) && l.ref === t.ref)
        if (Rl = !1, t.pendingProps = a = n, _f(l, u))
          (l.flags & 131072) !== 0 && (Rl = !0);
        else
          return t.lanes = l.lanes, Wt(l, t, u);
    }
    return bf(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Pu(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Jo(t, n) : Wi(), Wo(t);
      else
        return a = t.lanes = 536870912, Ls(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (Pu(t, n.cachePool), Jo(t, n), ve(), t.memoizedState = null) : (l !== null && Pu(t, null), Wi(), ve());
    return Ql(l, t, u, e), t.child;
  }
  function ou(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ls(l, t, e, a, u) {
    var n = Zi();
    return n = n === null ? null : { parent: Dl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && Pu(t, null), Wi(), Wo(t), l !== null && ya(l, t, a, !0), t.childLanes = u, null;
  }
  function mn(l, t) {
    return t = Sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ks(l, t, e) {
    return Le(t, l.child, null, e), l = mn(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function by(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (el) {
        if (a.mode === "hidden")
          return l = mn(t, a), t.lanes = 536870912, ou(null, l);
        if (Fi(t), (l = ml) ? (l = u0(
          l,
          Mt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: fe !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Uo(l), e.return = t, t.child = e, Xl = t, ml = null)) : l = null, l === null) throw oe(t);
        return t.lanes = 536870912, null;
      }
      return mn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Fi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ks(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Rl || ya(l, t, e, !1), u = (e & l.childLanes) !== 0, Rl || u) {
        if (a = vl, a !== null && (i = Bc(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ye(l, i), lt(a, l, i), Sf;
        On(), t = Ks(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, ml = Ot(i.nextSibling), Xl = t, el = !0, ce = null, Mt = !1, l !== null && Co(t, l), t = mn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Zt(l.child, {
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
  function bf(l, t, e, a, u) {
    return Qe(t), e = Ii(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = Pi(), l !== null && !Rl ? (lf(l, t, u), Wt(l, t, u)) : (el && a && Hi(t), t.flags |= 1, Ql(l, t, e, u), t.child);
  }
  function Js(l, t, e, a, u, n) {
    return Qe(t), t.updateQueue = null, e = Fo(
      t,
      a,
      e,
      u
    ), $o(l), a = Pi(), l !== null && !Rl ? (lf(l, t, n), Wt(l, t, n)) : (el && a && Hi(t), t.flags |= 1, Ql(l, t, e, n), t.child);
  }
  function Ws(l, t, e, a, u) {
    if (Qe(t), t.stateNode === null) {
      var n = oa, i = e.contextType;
      typeof i == "object" && i !== null && (n = Gl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = mf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Gl(i) : oa, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (vf(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && mf.enqueueReplaceState(n, n.state, null), uu(t, a, n, u), au(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, s = Je(e, c);
      n.props = s;
      var g = n.context, A = e.contextType;
      i = oa, typeof A == "object" && A !== null && (i = Gl(A));
      var U = e.getDerivedStateFromProps;
      A = typeof U == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, A || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && Ns(
        t,
        n,
        a,
        i
      ), re = !1;
      var b = t.memoizedState;
      n.state = b, uu(t, a, n, u), au(), g = t.memoizedState, c || b !== g || re ? (typeof U == "function" && (vf(
        t,
        e,
        U,
        a
      ), g = t.memoizedState), (s = re || Hs(
        t,
        e,
        s,
        a,
        b,
        g,
        i
      )) ? (A || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Li(l, t), i = t.memoizedProps, A = Je(e, i), n.props = A, U = t.pendingProps, b = n.context, g = e.contextType, s = oa, typeof g == "object" && g !== null && (s = Gl(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== U || b !== s) && Ns(
        t,
        n,
        a,
        s
      ), re = !1, b = t.memoizedState, n.state = b, uu(t, a, n, u), au();
      var p = t.memoizedState;
      i !== U || b !== p || re || l !== null && l.dependencies !== null && ku(l.dependencies) ? (typeof c == "function" && (vf(
        t,
        e,
        c,
        a
      ), p = t.memoizedState), (A = re || Hs(
        t,
        e,
        A,
        a,
        b,
        p,
        s
      ) || l !== null && l.dependencies !== null && ku(l.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        p,
        s
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), n.props = a, n.state = p, n.context = s, a = A) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, gn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Le(
      t,
      l.child,
      null,
      u
    ), t.child = Le(
      t,
      null,
      e,
      u
    )) : Ql(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Wt(
      l,
      t,
      u
    ), l;
  }
  function $s(l, t, e, a) {
    return Xe(), t.flags |= 256, Ql(l, t, e, a), t.child;
  }
  var pf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function zf(l) {
    return { baseLanes: l, cachePool: jo() };
  }
  function Tf(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ht), l;
  }
  function Fs(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (el) {
        if (u ? he(t) : ve(), (l = ml) ? (l = u0(
          l,
          Mt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: fe !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Uo(l), e.return = t, t.child = e, Xl = t, ml = null)) : l = null, l === null) throw oe(t);
        return uc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (ve(), u = t.mode, c = Sn(
        { mode: "hidden", children: c },
        u
      ), a = je(
        a,
        u,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = zf(e), a.childLanes = Tf(
        l,
        i,
        e
      ), t.memoizedState = pf, ou(null, a)) : (he(t), Ef(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (he(t), t.flags &= -257, t = Af(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (ve(), t.child = l.child, t.flags |= 128, t = null) : (ve(), c = a.fallback, u = t.mode, a = Sn(
          { mode: "visible", children: a.children },
          u
        ), c = je(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Le(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = zf(e), a.childLanes = Tf(
          l,
          i,
          e
        ), t.memoizedState = pf, t = ou(null, a));
      else if (he(t), uc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(o(419)), a.stack = "", a.digest = i, ka({ value: a, source: null, stack: null }), t = Af(
          l,
          t,
          e
        );
      } else if (Rl || ya(l, t, e, !1), i = (e & l.childLanes) !== 0, Rl || i) {
        if (i = vl, i !== null && (a = Bc(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Ye(l, a), lt(i, l, a), Sf;
        ac(c) || On(), t = Af(
          l,
          t,
          e
        );
      } else
        ac(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, ml = Ot(
          c.nextSibling
        ), Xl = t, el = !0, ce = null, Mt = !1, l !== null && Co(t, l), t = Ef(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ve(), c = a.fallback, u = t.mode, s = l.child, g = s.sibling, a = Zt(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, g !== null ? c = Zt(
      g,
      c
    ) : (c = je(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, ou(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = zf(e) : (u = c.cachePool, u !== null ? (s = Dl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = jo(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = Tf(
      l,
      i,
      e
    ), t.memoizedState = pf, ou(l.child, a)) : (he(t), e = l.child, l = e.sibling, e = Zt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Ef(l, t) {
    return t = Sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Sn(l, t) {
    return l = st(22, l, null, t), l.lanes = 0, l;
  }
  function Af(l, t, e) {
    return Le(t, l.child, null, e), l = Ef(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function ks(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), ji(l.return, t, e);
  }
  function Mf(l, t, e, a, u, n) {
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
  function Is(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Ml.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, T(Ml, i), Ql(l, t, a, e), a = el ? Fa : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ks(l, e, t);
        else if (l.tag === 19)
          ks(l, e, t);
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
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Mf(
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
        Mf(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Mf(
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
  function Wt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), Se |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (ya(
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
      for (l = t.child, e = Zt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Zt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function _f(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ku(l)));
  }
  function py(l, t, e) {
    switch (t.tag) {
      case 3:
        cl(t, t.stateNode.containerInfo), se(t, Dl, l.memoizedState.cache), Xe();
        break;
      case 27:
      case 5:
        Ue(t);
        break;
      case 4:
        cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        se(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Fi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (he(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Fs(l, t, e) : (he(t), l = Wt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        he(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (ya(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), u) {
          if (a)
            return Is(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), T(Ml, Ml.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Vs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        se(t, Dl, l.memoizedState.cache);
    }
    return Wt(l, t, e);
  }
  function Ps(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Rl = !0;
      else {
        if (!_f(l, e) && (t.flags & 128) === 0)
          return Rl = !1, py(
            l,
            t,
            e
          );
        Rl = (l.flags & 131072) !== 0;
      }
    else
      Rl = !1, el && (t.flags & 1048576) !== 0 && xo(t, Fa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = we(t.elementType), t.type = l, typeof l == "function")
            Ri(l) ? (a = Je(l, a), t.tag = 1, t = Ws(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = bf(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Ll) {
                t.tag = 11, t = Qs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === k) {
                t.tag = 14, t = Zs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Rt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return bf(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = Je(
          a,
          t.pendingProps
        ), Ws(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (cl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Li(l, t), uu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, se(t, Dl, a), a !== n.cache && Xi(
            t,
            [Dl],
            e,
            !0
          ), au(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = $s(
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
              ), ka(u), t = $s(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, ml = Ot(l.firstChild), Xl = t, el = !0, ce = null, Mt = !0, e = Vo(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Xe(), a === u) {
              t = Wt(
                l,
                t,
                e
              );
              break l;
            }
            Ql(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return gn(l, t), l === null ? (e = s0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : el || (e = t.type, l = t.pendingProps, a = Nn(
          B.current
        ).createElement(e), a[jl] = t, a[Wl] = l, Zl(a, e, l), Nl(a), t.stateNode = a) : t.memoizedState = s0(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ue(t), l === null && el && (a = t.stateNode = f0(
          t.type,
          t.pendingProps,
          B.current
        ), Xl = t, Mt = !0, u = ml, Ee(t.type) ? (nc = u, ml = Ot(a.firstChild)) : ml = u), Ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), gn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && el && ((u = a = ml) && (a = Fy(
          a,
          t.type,
          t.pendingProps,
          Mt
        ), a !== null ? (t.stateNode = a, Xl = t, ml = Ot(a.firstChild), Mt = !1, u = !0) : u = !1), u || oe(t)), Ue(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, lc(u, n) ? a = null : i !== null && lc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Ii(
          l,
          t,
          ry,
          null,
          null,
          e
        ), Au._currentValue = u), gn(l, t), Ql(l, t, a, e), t.child;
      case 6:
        return l === null && el && ((l = e = ml) && (e = ky(
          e,
          t.pendingProps,
          Mt
        ), e !== null ? (t.stateNode = e, Xl = t, ml = null, l = !0) : l = !1), l || oe(t)), null;
      case 13:
        return Fs(l, t, e);
      case 4:
        return cl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Le(
          t,
          null,
          a,
          e
        ) : Ql(l, t, a, e), t.child;
      case 11:
        return Qs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Ql(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Ql(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, se(t, t.type, a.value), Ql(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, Qe(t), u = Gl(u), a = a(u), t.flags |= 1, Ql(l, t, a, e), t.child;
      case 14:
        return Zs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return ws(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return Is(l, t, e);
      case 31:
        return by(l, t, e);
      case 22:
        return Vs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return Qe(t), a = Gl(Dl), l === null ? (u = Zi(), u === null && (u = vl, n = Gi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Vi(t), se(t, Dl, u)) : ((l.lanes & e) !== 0 && (Li(l, t), uu(t, null, null, e), au()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), se(t, Dl, a)) : (a = n.cache, se(t, Dl, a), a !== u.cache && Xi(
          t,
          [Dl],
          e,
          !0
        ))), Ql(
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
  function $t(l) {
    l.flags |= 4;
  }
  function Of(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (_r()) l.flags |= 8192;
        else
          throw Ve = tn, wi;
    } else l.flags &= -16777217;
  }
  function lr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !v0(t))
      if (_r()) l.flags |= 8192;
      else
        throw Ve = tn, wi;
  }
  function bn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Cc() : 536870912, l.lanes |= t, Ma |= t);
  }
  function su(l, t) {
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
  function gl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function zy(l, t, e) {
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
        return gl(t), null;
      case 1:
        return gl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Lt(Dl), nl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (da(t) ? $t(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qi())), gl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? ($t(t), n !== null ? (gl(t), lr(t, n)) : (gl(t), Of(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? ($t(t), gl(t), lr(t, n)) : (gl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && $t(t), gl(t), Of(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Re(t), e = B.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && $t(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return gl(t), null;
          }
          l = S.current, da(t) ? Ho(t) : (l = f0(u, a, e), t.stateNode = l, $t(t));
        }
        return gl(t), null;
      case 5:
        if (Re(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && $t(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return gl(t), null;
          }
          if (n = S.current, da(t))
            Ho(t);
          else {
            var i = Nn(
              B.current
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
            n[jl] = t, n[Wl] = a;
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
            l: switch (Zl(n, u, a), u) {
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
            a && $t(t);
          }
        }
        return gl(t), Of(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && $t(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = B.current, da(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Xl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[jl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Fr(l.nodeValue, e)), l || oe(t, !0);
          } else
            l = Nn(l).createTextNode(
              a
            ), l[jl] = t, t.stateNode = l;
        }
        return gl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = da(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[jl] = t;
            } else
              Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            gl(t), l = !1;
          } else
            e = qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return gl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = da(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[jl] = t;
            } else
              Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            gl(t), u = !1;
          } else
            u = qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bn(t, t.updateQueue), gl(t), null);
      case 4:
        return nl(), l === null && $f(t.stateNode.containerInfo), gl(t), null;
      case 10:
        return Lt(t.type), gl(t), null;
      case 19:
        if (D(Ml), a = t.memoizedState, a === null) return gl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) su(a, !1);
          else {
            if (Al !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = nn(l), n !== null) {
                  for (t.flags |= 128, su(a, !1), l = n.updateQueue, t.updateQueue = l, bn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Do(e, l), e = e.sibling;
                  return T(
                    Ml,
                    Ml.current & 1 | 2
                  ), el && wt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && it() > An && (t.flags |= 128, u = !0, su(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = nn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, bn(t, l), su(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !el)
                return gl(t), null;
            } else
              2 * it() - a.renderingStartTime > An && e !== 536870912 && (t.flags |= 128, u = !0, su(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = it(), l.sibling = null, e = Ml.current, T(
          Ml,
          u ? e & 1 | 2 : e & 1
        ), el && wt(t, a.treeForkCount), l) : (gl(t), null);
      case 22:
      case 23:
        return dt(t), $i(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), e = t.updateQueue, e !== null && bn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && D(Ze), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Lt(Dl), gl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ty(l, t) {
    switch (Ni(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Lt(Dl), nl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Re(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(o(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return D(Ml), null;
      case 4:
        return nl(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return dt(t), $i(), l !== null && D(Ze), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Lt(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tr(l, t) {
    switch (Ni(t), t.tag) {
      case 3:
        Lt(Dl), nl();
        break;
      case 26:
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        nl();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        D(Ml);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        dt(t), $i(), l !== null && D(Ze);
        break;
      case 24:
        Lt(Dl);
    }
  }
  function ru(l, t) {
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
      sl(t, t.return, c);
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
              } catch (A) {
                sl(
                  u,
                  s,
                  A
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (A) {
      sl(t, t.return, A);
    }
  }
  function er(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Ko(t, e);
      } catch (a) {
        sl(l, l.return, a);
      }
    }
  }
  function ar(l, t, e) {
    e.props = Je(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      sl(l, t, a);
    }
  }
  function du(l, t) {
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
      sl(l, t, u);
    }
  }
  function qt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          sl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          sl(l, t, u);
        }
      else e.current = null;
  }
  function ur(l) {
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
      sl(l, l.return, u);
    }
  }
  function Df(l, t, e) {
    try {
      var a = l.stateNode;
      Vy(a, l.type, e, t), a[Wl] = t;
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function nr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ee(l.type) || l.tag === 4;
  }
  function Uf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || nr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ee(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Rf(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Gt));
    else if (a !== 4 && (a === 27 && Ee(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Rf(l, t, e), l = l.sibling; l !== null; )
        Rf(l, t, e), l = l.sibling;
  }
  function pn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Ee(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (pn(l, t, e), l = l.sibling; l !== null; )
        pn(l, t, e), l = l.sibling;
  }
  function ir(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Zl(t, a, e), t[jl] = l, t[Wl] = e;
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var Ft = !1, xl = !1, xf = !1, fr = typeof WeakSet == "function" ? WeakSet : Set, Bl = null;
  function Ey(l, t) {
    if (l = l.containerInfo, If = Qn, l = bo(l), Ei(l)) {
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
            var i = 0, c = -1, s = -1, g = 0, A = 0, U = l, b = null;
            t: for (; ; ) {
              for (var p; U !== e || u !== 0 && U.nodeType !== 3 || (c = i + u), U !== n || a !== 0 && U.nodeType !== 3 || (s = i + a), U.nodeType === 3 && (i += U.nodeValue.length), (p = U.firstChild) !== null; )
                b = U, U = p;
              for (; ; ) {
                if (U === l) break t;
                if (b === e && ++g === u && (c = i), b === n && ++A === a && (s = i), (p = U.nextSibling) !== null) break;
                U = b, b = U.parentNode;
              }
              U = p;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Pf = { focusedElem: l, selectionRange: e }, Qn = !1, Bl = t; Bl !== null; )
      if (t = Bl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Bl = l;
      else
        for (; Bl !== null; ) {
          switch (t = Bl, n = t.alternate, l = t.flags, t.tag) {
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
                  var Y = Je(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    Y,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Z) {
                  sl(
                    e,
                    e.return,
                    Z
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  ec(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ec(l);
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
            l.return = t.return, Bl = l;
            break;
          }
          Bl = t.return;
        }
  }
  function cr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        It(l, e), a & 4 && ru(5, e);
        break;
      case 1:
        if (It(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              sl(e, e.return, i);
            }
          else {
            var u = Je(
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
              sl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && er(e), a & 512 && du(e, e.return);
        break;
      case 3:
        if (It(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
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
            Ko(l, t);
          } catch (i) {
            sl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ir(e);
      case 26:
      case 5:
        It(l, e), t === null && a & 4 && ur(e), a & 512 && du(e, e.return);
        break;
      case 12:
        It(l, e);
        break;
      case 31:
        It(l, e), a & 4 && rr(l, e);
        break;
      case 13:
        It(l, e), a & 4 && dr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Cy.bind(
          null,
          e
        ), Iy(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Ft, !a) {
          t = t !== null && t.memoizedState !== null || xl, u = Ft;
          var n = xl;
          Ft = a, (xl = t) && !n ? Pt(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : It(l, e), Ft = u, xl = n;
        }
        break;
      case 30:
        break;
      default:
        It(l, e);
    }
  }
  function or(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, or(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ii(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Sl = null, Fl = !1;
  function kt(l, t, e) {
    for (e = e.child; e !== null; )
      sr(l, t, e), e = e.sibling;
  }
  function sr(l, t, e) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(qa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        xl || qt(e, t), kt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        xl || qt(e, t);
        var a = Sl, u = Fl;
        Ee(e.type) && (Sl = e.stateNode, Fl = !1), kt(
          l,
          t,
          e
        ), zu(e.stateNode), Sl = a, Fl = u;
        break;
      case 5:
        xl || qt(e, t);
      case 6:
        if (a = Sl, u = Fl, Sl = null, kt(
          l,
          t,
          e
        ), Sl = a, Fl = u, Sl !== null)
          if (Fl)
            try {
              (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode);
            } catch (n) {
              sl(
                e,
                t,
                n
              );
            }
          else
            try {
              Sl.removeChild(e.stateNode);
            } catch (n) {
              sl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        Sl !== null && (Fl ? (l = Sl, e0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ha(l)) : e0(Sl, e.stateNode));
        break;
      case 4:
        a = Sl, u = Fl, Sl = e.stateNode.containerInfo, Fl = !0, kt(
          l,
          t,
          e
        ), Sl = a, Fl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        me(2, e, t), xl || me(4, e, t), kt(
          l,
          t,
          e
        );
        break;
      case 1:
        xl || (qt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ar(
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
        xl = (a = xl) || e.memoizedState !== null, kt(
          l,
          t,
          e
        ), xl = a;
        break;
      default:
        kt(
          l,
          t,
          e
        );
    }
  }
  function rr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ha(l);
      } catch (e) {
        sl(t, t.return, e);
      }
    }
  }
  function dr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ha(l);
      } catch (e) {
        sl(t, t.return, e);
      }
  }
  function Ay(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new fr()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new fr()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function zn(l, t) {
    var e = Ay(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Hy.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ee(c.type)) {
                Sl = c.stateNode, Fl = !1;
                break l;
              }
              break;
            case 5:
              Sl = c.stateNode, Fl = !1;
              break l;
            case 3:
            case 4:
              Sl = c.stateNode.containerInfo, Fl = !0;
              break l;
          }
          c = c.return;
        }
        if (Sl === null) throw Error(o(160));
        sr(n, i, u), Sl = null, Fl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        yr(t, l), t = t.sibling;
  }
  var Ct = null;
  function yr(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(t, l), Il(l), a & 4 && (me(3, l, l.return), ru(3, l), me(5, l, l.return));
        break;
      case 1:
        kl(t, l), Il(l), a & 512 && (xl || e === null || qt(e, e.return)), a & 64 && Ft && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ct;
        if (kl(t, l), Il(l), a & 512 && (xl || e === null || qt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Xa] || n[jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Zl(n, a, e), n[jl] = l, Nl(n), a = n;
                      break l;
                    case "link":
                      var i = y0(
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
                      n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = y0(
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
                      n = u.createElement(a), Zl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[jl] = l, Nl(n), a = n;
                }
                l.stateNode = a;
              } else
                h0(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = d0(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? h0(
              u,
              l.type,
              l.stateNode
            ) : d0(
              u,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Df(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        kl(t, l), Il(l), a & 512 && (xl || e === null || qt(e, e.return)), e !== null && a & 4 && Df(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (kl(t, l), Il(l), a & 512 && (xl || e === null || qt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            ea(u, "");
          } catch (Y) {
            sl(l, l.return, Y);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Df(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (xf = !0);
        break;
      case 6:
        if (kl(t, l), Il(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (Y) {
            sl(l, l.return, Y);
          }
        }
        break;
      case 3:
        if (Yn = null, u = Ct, Ct = Bn(t.containerInfo), kl(t, l), Ct = u, Il(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ha(t.containerInfo);
          } catch (Y) {
            sl(l, l.return, Y);
          }
        xf && (xf = !1, hr(l));
        break;
      case 4:
        a = Ct, Ct = Bn(
          l.stateNode.containerInfo
        ), kl(t, l), Il(l), Ct = a;
        break;
      case 12:
        kl(t, l), Il(l);
        break;
      case 31:
        kl(t, l), Il(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
        break;
      case 13:
        kl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (En = it()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, g = Ft, A = xl;
        if (Ft = g || u, xl = A || s, kl(t, l), xl = A, Ft = g, Il(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || Ft || xl || We(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = s.stateNode;
                    var U = s.memoizedProps.style, b = U != null && U.hasOwnProperty("display") ? U.display : null;
                    c.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                  }
                } catch (Y) {
                  sl(s, s.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (Y) {
                  sl(s, s.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  u ? a0(p, !0) : a0(s.stateNode, !1);
                } catch (Y) {
                  sl(s, s.return, Y);
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
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, zn(l, e))));
        break;
      case 19:
        kl(t, l), Il(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(t, l), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (nr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Uf(l);
            pn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ea(i, ""), e.flags &= -33);
            var c = Uf(l);
            pn(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, g = Uf(l);
            Rf(
              l,
              g,
              s
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (A) {
        sl(l, l.return, A);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function hr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        hr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function It(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        cr(l, t.alternate, t), t = t.sibling;
  }
  function We(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, t, t.return), We(t);
          break;
        case 1:
          qt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && ar(
            t,
            t.return,
            e
          ), We(t);
          break;
        case 27:
          zu(t.stateNode);
        case 26:
        case 5:
          qt(t, t.return), We(t);
          break;
        case 22:
          t.memoizedState === null && We(t);
          break;
        case 30:
          We(t);
          break;
        default:
          We(t);
      }
      l = l.sibling;
    }
  }
  function Pt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pt(
            u,
            n,
            e
          ), ru(4, n);
          break;
        case 1:
          if (Pt(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              sl(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Lo(s[u], c);
            } catch (g) {
              sl(a, a.return, g);
            }
          }
          e && i & 64 && er(n), du(n, n.return);
          break;
        case 27:
          ir(n);
        case 26:
        case 5:
          Pt(
            u,
            n,
            e
          ), e && a === null && i & 4 && ur(n), du(n, n.return);
          break;
        case 12:
          Pt(
            u,
            n,
            e
          );
          break;
        case 31:
          Pt(
            u,
            n,
            e
          ), e && i & 4 && rr(u, n);
          break;
        case 13:
          Pt(
            u,
            n,
            e
          ), e && i & 4 && dr(u, n);
          break;
        case 22:
          n.memoizedState === null && Pt(
            u,
            n,
            e
          ), du(n, n.return);
          break;
        case 30:
          break;
        default:
          Pt(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Cf(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Ia(e));
  }
  function Hf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ia(l));
  }
  function Ht(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        vr(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function vr(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && ru(9, t);
        break;
      case 1:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ia(l)));
        break;
      case 12:
        if (u & 2048) {
          Ht(
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
            sl(t, t.return, s);
          }
        } else
          Ht(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : yu(l, t) : n._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : (n._visibility |= 2, Ta(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Cf(i, t);
        break;
      case 24:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && Hf(t.alternate, t);
        break;
      default:
        Ht(
          l,
          t,
          e,
          a
        );
    }
  }
  function Ta(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = e, s = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ta(
            n,
            i,
            c,
            s,
            u
          ), ru(8, i);
          break;
        case 23:
          break;
        case 22:
          var A = i.stateNode;
          i.memoizedState !== null ? A._visibility & 2 ? Ta(
            n,
            i,
            c,
            s,
            u
          ) : yu(
            n,
            i
          ) : (A._visibility |= 2, Ta(
            n,
            i,
            c,
            s,
            u
          )), u && g & 2048 && Cf(
            i.alternate,
            i
          );
          break;
        case 24:
          Ta(
            n,
            i,
            c,
            s,
            u
          ), u && g & 2048 && Hf(i.alternate, i);
          break;
        default:
          Ta(
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
  function yu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            yu(e, a), u & 2048 && Cf(
              a.alternate,
              a
            );
            break;
          case 24:
            yu(e, a), u & 2048 && Hf(a.alternate, a);
            break;
          default:
            yu(e, a);
        }
        t = t.sibling;
      }
  }
  var hu = 8192;
  function Ea(l, t, e) {
    if (l.subtreeFlags & hu)
      for (l = l.child; l !== null; )
        mr(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function mr(l, t, e) {
    switch (l.tag) {
      case 26:
        Ea(
          l,
          t,
          e
        ), l.flags & hu && l.memoizedState !== null && sh(
          e,
          Ct,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ea(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Ct;
        Ct = Bn(l.stateNode.containerInfo), Ea(
          l,
          t,
          e
        ), Ct = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = hu, hu = 16777216, Ea(
          l,
          t,
          e
        ), hu = a) : Ea(
          l,
          t,
          e
        ));
        break;
      default:
        Ea(
          l,
          t,
          e
        );
    }
  }
  function gr(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function vu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Bl = a, br(
            a,
            l
          );
        }
      gr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Sr(l), l = l.sibling;
  }
  function Sr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        vu(l), l.flags & 2048 && me(9, l, l.return);
        break;
      case 3:
        vu(l);
        break;
      case 12:
        vu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Tn(l)) : vu(l);
        break;
      default:
        vu(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Bl = a, br(
            a,
            l
          );
        }
      gr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          me(8, t, t.return), Tn(t);
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
  function br(l, t) {
    for (; Bl !== null; ) {
      var e = Bl;
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
          Ia(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Bl = a;
      else
        l: for (e = l; Bl !== null; ) {
          a = Bl;
          var u = a.sibling, n = a.return;
          if (or(a), a === e) {
            Bl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Bl = u;
            break l;
          }
          Bl = n;
        }
    }
  }
  var My = {
    getCacheForType: function(l) {
      var t = Gl(Dl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Gl(Dl).controller.signal;
    }
  }, _y = typeof WeakMap == "function" ? WeakMap : Map, il = 0, vl = null, I = null, ll = 0, ol = 0, yt = null, ge = !1, Aa = !1, Nf = !1, le = 0, Al = 0, Se = 0, $e = 0, Bf = 0, ht = 0, Ma = 0, mu = null, Pl = null, qf = !1, En = 0, pr = 0, An = 1 / 0, Mn = null, be = null, Cl = 0, pe = null, _a = null, te = 0, Yf = 0, jf = null, zr = null, gu = 0, Xf = null;
  function vt() {
    return (il & 2) !== 0 && ll !== 0 ? ll & -ll : M.T !== null ? Lf() : qc();
  }
  function Tr() {
    if (ht === 0)
      if ((ll & 536870912) === 0 || el) {
        var l = Cu;
        Cu <<= 1, (Cu & 3932160) === 0 && (Cu = 262144), ht = l;
      } else ht = 536870912;
    return l = rt.current, l !== null && (l.flags |= 32), ht;
  }
  function lt(l, t, e) {
    (l === vl && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null) && (Oa(l, 0), ze(
      l,
      ll,
      ht,
      !1
    )), ja(l, e), ((il & 2) === 0 || l !== vl) && (l === vl && ((il & 2) === 0 && ($e |= e), Al === 4 && ze(
      l,
      ll,
      ht,
      !1
    )), Yt(l));
  }
  function Er(l, t, e) {
    if ((il & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ya(l, t), u = a ? Uy(l, t) : Qf(l, t, !0), n = a;
    do {
      if (u === 0) {
        Aa && !a && ze(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !Oy(e)) {
          u = Qf(l, t, !1), n = !1;
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
              u = mu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Oa(c, i).flags |= 256), i = Qf(
                c,
                i,
                !1
              ), i !== 2) {
                if (Nf && !s) {
                  c.errorRecoveryDisabledLanes |= n, $e |= n, u = 4;
                  break l;
                }
                n = Pl, Pl = u, n !== null && (Pl === null ? Pl = n : Pl.push.apply(
                  Pl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Oa(l, 0), ze(l, t, 0, !0);
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
                ht,
                !ge
              );
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = En + 300 - it(), 10 < u)) {
            if (ze(
              a,
              t,
              ht,
              !ge
            ), Nu(a, 0, !0) !== 0) break l;
            te = t, a.timeoutHandle = l0(
              Ar.bind(
                null,
                a,
                e,
                Pl,
                Mn,
                qf,
                t,
                ht,
                $e,
                Ma,
                ge,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          Ar(
            a,
            e,
            Pl,
            Mn,
            qf,
            t,
            ht,
            $e,
            Ma,
            ge,
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
  function Ar(l, t, e, a, u, n, i, c, s, g, A, U, b, p) {
    if (l.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Gt
      }, mr(
        t,
        n,
        U
      );
      var Y = (n & 62914560) === n ? En - it() : (n & 4194048) === n ? pr - it() : 0;
      if (Y = rh(
        U,
        Y
      ), Y !== null) {
        te = n, l.cancelPendingCommit = Y(
          Cr.bind(
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
            A,
            U,
            null,
            b,
            p
          )
        ), ze(l, n, i, !g);
        return;
      }
    }
    Cr(
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
  function Oy(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ot(n(), u)) return !1;
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
    t &= ~Bf, t &= ~$e, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ct(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Hc(l, e, t);
  }
  function _n() {
    return (il & 6) === 0 ? (Su(0), !1) : !0;
  }
  function Gf() {
    if (I !== null) {
      if (ol === 0)
        var l = I.return;
      else
        l = I, Vt = Ge = null, tf(l), ga = null, lu = 0, l = I;
      for (; l !== null; )
        tr(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function Oa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Jy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), te = 0, Gf(), vl = l, I = e = Zt(l.current, null), ll = t, ol = 0, yt = null, ge = !1, Aa = Ya(l, t), Nf = !1, Ma = ht = Bf = $e = Se = Al = 0, Pl = mu = null, qf = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ct(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return le = t, Ku(), e;
  }
  function Mr(l, t) {
    $ = null, M.H = cu, t === ma || t === ln ? (t = Qo(), ol = 3) : t === wi ? (t = Qo(), ol = 4) : ol = t === Sf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, I === null && (Al = 1, vn(
      l,
      Tt(t, l.current)
    ));
  }
  function _r() {
    var l = rt.current;
    return l === null ? !0 : (ll & 4194048) === ll ? _t === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === _t : !1;
  }
  function Or() {
    var l = M.H;
    return M.H = cu, l === null ? cu : l;
  }
  function Dr() {
    var l = M.A;
    return M.A = My, l;
  }
  function On() {
    Al = 4, ge || (ll & 4194048) !== ll && rt.current !== null || (Aa = !0), (Se & 134217727) === 0 && ($e & 134217727) === 0 || vl === null || ze(
      vl,
      ll,
      ht,
      !1
    );
  }
  function Qf(l, t, e) {
    var a = il;
    il |= 2;
    var u = Or(), n = Dr();
    (vl !== l || ll !== t) && (Mn = null, Oa(l, t)), t = !1;
    var i = Al;
    l: do
      try {
        if (ol !== 0 && I !== null) {
          var c = I, s = yt;
          switch (ol) {
            case 8:
              Gf(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              rt.current === null && (t = !0);
              var g = ol;
              if (ol = 0, yt = null, Da(l, c, s, g), e && Aa) {
                i = 0;
                break l;
              }
              break;
            default:
              g = ol, ol = 0, yt = null, Da(l, c, s, g);
          }
        }
        Dy(), i = Al;
        break;
      } catch (A) {
        Mr(l, A);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Vt = Ge = null, il = a, M.H = u, M.A = n, I === null && (vl = null, ll = 0, Ku()), i;
  }
  function Dy() {
    for (; I !== null; ) Ur(I);
  }
  function Uy(l, t) {
    var e = il;
    il |= 2;
    var a = Or(), u = Dr();
    vl !== l || ll !== t ? (Mn = null, An = it() + 500, Oa(l, t)) : Aa = Ya(
      l,
      t
    );
    l: do
      try {
        if (ol !== 0 && I !== null) {
          t = I;
          var n = yt;
          t: switch (ol) {
            case 1:
              ol = 0, yt = null, Da(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Xo(n)) {
                ol = 0, yt = null, Rr(t);
                break;
              }
              t = function() {
                ol !== 2 && ol !== 9 || vl !== l || (ol = 7), Yt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ol = 7;
              break l;
            case 4:
              ol = 5;
              break l;
            case 7:
              Xo(n) ? (ol = 0, yt = null, Rr(t)) : (ol = 0, yt = null, Da(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var c = I;
                  if (i ? v0(i) : c.stateNode.complete) {
                    ol = 0, yt = null;
                    var s = c.sibling;
                    if (s !== null) I = s;
                    else {
                      var g = c.return;
                      g !== null ? (I = g, Dn(g)) : I = null;
                    }
                    break t;
                  }
              }
              ol = 0, yt = null, Da(l, t, n, 5);
              break;
            case 6:
              ol = 0, yt = null, Da(l, t, n, 6);
              break;
            case 8:
              Gf(), Al = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Ry();
        break;
      } catch (A) {
        Mr(l, A);
      }
    while (!0);
    return Vt = Ge = null, M.H = a, M.A = u, il = e, I !== null ? 0 : (vl = null, ll = 0, Ku(), Al);
  }
  function Ry() {
    for (; I !== null && !P0(); )
      Ur(I);
  }
  function Ur(l) {
    var t = Ps(l.alternate, l, le);
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : I = t;
  }
  function Rr(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Js(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ll
        );
        break;
      case 11:
        t = Js(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ll
        );
        break;
      case 5:
        tf(t);
      default:
        tr(e, t), t = I = Do(t, le), t = Ps(e, t, le);
    }
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : I = t;
  }
  function Da(l, t, e, a) {
    Vt = Ge = null, tf(t), ga = null, lu = 0;
    var u = t.return;
    try {
      if (Sy(
        l,
        u,
        t,
        e,
        ll
      )) {
        Al = 1, vn(
          l,
          Tt(e, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw I = u, n;
      Al = 1, vn(
        l,
        Tt(e, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (el || a === 1 ? l = !0 : Aa || (ll & 536870912) !== 0 ? l = !1 : (ge = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = rt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), xr(t, l)) : Dn(t);
  }
  function Dn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        xr(
          t,
          ge
        );
        return;
      }
      l = t.return;
      var e = zy(
        t.alternate,
        t,
        le
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
  function xr(l, t) {
    do {
      var e = Ty(l.alternate, l);
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
  function Cr(l, t, e, a, u, n, i, c, s) {
    l.cancelPendingCommit = null;
    do
      Un();
    while (Cl !== 0);
    if ((il & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Di, od(
        l,
        e,
        n,
        i,
        c,
        s
      ), l === vl && (I = vl = null, ll = 0), _a = t, pe = l, te = e, Yf = n, jf = u, zr = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ny(Ru, function() {
        return Yr(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null, u = N.p, N.p = 2, i = il, il |= 4;
        try {
          Ey(l, t, e);
        } finally {
          il = i, N.p = u, M.T = a;
        }
      }
      Cl = 1, Hr(), Nr(), Br();
    }
  }
  function Hr() {
    if (Cl === 1) {
      Cl = 0;
      var l = pe, t = _a, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = M.T, M.T = null;
        var a = N.p;
        N.p = 2;
        var u = il;
        il |= 4;
        try {
          yr(t, l);
          var n = Pf, i = bo(l.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && So(
            c.ownerDocument.documentElement,
            c
          )) {
            if (s !== null && Ei(c)) {
              var g = s.start, A = s.end;
              if (A === void 0 && (A = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  A,
                  c.value.length
                );
              else {
                var U = c.ownerDocument || document, b = U && U.defaultView || window;
                if (b.getSelection) {
                  var p = b.getSelection(), Y = c.textContent.length, Z = Math.min(s.start, Y), hl = s.end === void 0 ? Z : Math.min(s.end, Y);
                  !p.extend && Z > hl && (i = hl, hl = Z, Z = i);
                  var y = go(
                    c,
                    Z
                  ), r = go(
                    c,
                    hl
                  );
                  if (y && r && (p.rangeCount !== 1 || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== r.node || p.focusOffset !== r.offset)) {
                    var m = U.createRange();
                    m.setStart(y.node, y.offset), p.removeAllRanges(), Z > hl ? (p.addRange(m), p.extend(r.node, r.offset)) : (m.setEnd(r.node, r.offset), p.addRange(m));
                  }
                }
              }
            }
            for (U = [], p = c; p = p.parentNode; )
              p.nodeType === 1 && U.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < U.length; c++) {
              var O = U[c];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Qn = !!If, Pf = If = null;
        } finally {
          il = u, N.p = a, M.T = e;
        }
      }
      l.current = t, Cl = 2;
    }
  }
  function Nr() {
    if (Cl === 2) {
      Cl = 0;
      var l = pe, t = _a, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = M.T, M.T = null;
        var a = N.p;
        N.p = 2;
        var u = il;
        il |= 4;
        try {
          cr(l, t.alternate, t);
        } finally {
          il = u, N.p = a, M.T = e;
        }
      }
      Cl = 3;
    }
  }
  function Br() {
    if (Cl === 4 || Cl === 3) {
      Cl = 0, ld();
      var l = pe, t = _a, e = te, a = zr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Cl = 5 : (Cl = 0, _a = pe = null, qr(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (be = null), ui(e), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function")
        try {
          ft.onCommitFiberRoot(
            qa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = M.T, u = N.p, N.p = 2, M.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          M.T = t, N.p = u;
        }
      }
      (te & 3) !== 0 && Un(), Yt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Xf ? gu++ : (gu = 0, Xf = l) : gu = 0, Su(0);
    }
  }
  function qr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ia(t)));
  }
  function Un() {
    return Hr(), Nr(), Br(), Yr();
  }
  function Yr() {
    if (Cl !== 5) return !1;
    var l = pe, t = Yf;
    Yf = 0;
    var e = ui(te), a = M.T, u = N.p;
    try {
      N.p = 32 > e ? 32 : e, M.T = null, e = jf, jf = null;
      var n = pe, i = te;
      if (Cl = 0, _a = pe = null, te = 0, (il & 6) !== 0) throw Error(o(331));
      var c = il;
      if (il |= 4, Sr(n.current), vr(
        n,
        n.current,
        i,
        e
      ), il = c, Su(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function")
        try {
          ft.onPostCommitFiberRoot(qa, n);
        } catch {
        }
      return !0;
    } finally {
      N.p = u, M.T = a, qr(l, t);
    }
  }
  function jr(l, t, e) {
    t = Tt(e, t), t = gf(l.stateNode, t, 2), l = ye(l, t, 2), l !== null && (ja(l, 2), Yt(l));
  }
  function sl(l, t, e) {
    if (l.tag === 3)
      jr(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          jr(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (be === null || !be.has(a))) {
            l = Tt(e, l), e = Xs(2), a = ye(t, e, 2), a !== null && (Gs(
              e,
              a,
              t,
              l
            ), ja(a, 2), Yt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new _y();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Nf = !0, u.add(e), l = xy.bind(null, l, t, e), t.then(l, l));
  }
  function xy(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, vl === l && (ll & e) === e && (Al === 4 || Al === 3 && (ll & 62914560) === ll && 300 > it() - En ? (il & 2) === 0 && Oa(l, 0) : Bf |= e, Ma === ll && (Ma = 0)), Yt(l);
  }
  function Xr(l, t) {
    t === 0 && (t = Cc()), l = Ye(l, t), l !== null && (ja(l, t), Yt(l));
  }
  function Cy(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Xr(l, e);
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
    a !== null && a.delete(t), Xr(l, e);
  }
  function Ny(l, t) {
    return li(l, t);
  }
  var Rn = null, Ua = null, wf = !1, xn = !1, Vf = !1, Te = 0;
  function Yt(l) {
    l !== Ua && l.next === null && (Ua === null ? Rn = Ua = l : Ua = Ua.next = l), xn = !0, wf || (wf = !0, qy());
  }
  function Su(l, t) {
    if (!Vf && xn) {
      Vf = !0;
      do
        for (var e = !1, a = Rn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, wr(a, n));
          } else
            n = ll, n = Nu(
              a,
              a === vl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ya(a, n) || (e = !0, wr(a, n));
          a = a.next;
        }
      while (e);
      Vf = !1;
    }
  }
  function By() {
    Gr();
  }
  function Gr() {
    xn = wf = !1;
    var l = 0;
    Te !== 0 && Ky() && (l = Te);
    for (var t = it(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = Qr(a, t);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (Ua = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (xn = !0)), a = u;
    }
    Cl !== 0 && Cl !== 5 || Su(l), Te !== 0 && (Te = 0);
  }
  function Qr(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ct(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = cd(c, t)) : s <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = vl, e = ll, e = Nu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (ol === 2 || ol === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && ti(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ya(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ti(a), ui(e)) {
        case 2:
        case 8:
          e = Rc;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = xc;
          break;
        default:
          e = Ru;
      }
      return a = Zr.bind(null, l), e = li(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && ti(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Zr(l, t) {
    if (Cl !== 0 && Cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Un() && l.callbackNode !== e)
      return null;
    var a = ll;
    return a = Nu(
      l,
      l === vl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Er(l, a, t), Qr(l, it()), l.callbackNode != null && l.callbackNode === e ? Zr.bind(null, l) : null);
  }
  function wr(l, t) {
    if (Un()) return null;
    Er(l, t, !0);
  }
  function qy() {
    Wy(function() {
      (il & 6) !== 0 ? li(
        Uc,
        By
      ) : Gr();
    });
  }
  function Lf() {
    if (Te === 0) {
      var l = ha;
      l === 0 && (l = xu, xu <<= 1, (xu & 261888) === 0 && (xu = 256)), Te = l;
    }
    return Te;
  }
  function Vr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ju("" + l);
  }
  function Lr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Yy(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Vr(
        (u[Wl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[Wl] || null) ? Vr(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
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
                if (Te !== 0) {
                  var s = i ? Lr(u, i) : new FormData(u);
                  rf(
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
                typeof n == "function" && (c.preventDefault(), s = i ? Lr(u, i) : new FormData(u), rf(
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
  for (var Kf = 0; Kf < Oi.length; Kf++) {
    var Jf = Oi[Kf], jy = Jf.toLowerCase(), Xy = Jf[0].toUpperCase() + Jf.slice(1);
    xt(
      jy,
      "on" + Xy
    );
  }
  xt(To, "onAnimationEnd"), xt(Eo, "onAnimationIteration"), xt(Ao, "onAnimationStart"), xt("dblclick", "onDoubleClick"), xt("focusin", "onFocus"), xt("focusout", "onBlur"), xt(ty, "onTransitionRun"), xt(ey, "onTransitionStart"), xt(ay, "onTransitionCancel"), xt(Mo, "onTransitionEnd"), la("onMouseEnter", ["mouseout", "mouseover"]), la("onMouseLeave", ["mouseout", "mouseover"]), la("onPointerEnter", ["pointerout", "pointerover"]), la("onPointerLeave", ["pointerout", "pointerover"]), He(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), He(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), He("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), He(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Gy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bu)
  );
  function Kr(l, t) {
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
            } catch (A) {
              Lu(A);
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
            } catch (A) {
              Lu(A);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function P(l, t) {
    var e = t[ni];
    e === void 0 && (e = t[ni] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Jr(t, l, 2, !1), e.add(a));
  }
  function Wf(l, t, e) {
    var a = 0;
    t && (a |= 4), Jr(
      e,
      l,
      a,
      t
    );
  }
  var Cn = "_reactListening" + Math.random().toString(36).slice(2);
  function $f(l) {
    if (!l[Cn]) {
      l[Cn] = !0, Xc.forEach(function(e) {
        e !== "selectionchange" && (Gy.has(e) || Wf(e, !1, l), Wf(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Cn] || (t[Cn] = !0, Wf("selectionchange", !1, t));
    }
  }
  function Jr(l, t, e, a) {
    switch (T0(t)) {
      case 2:
        var u = hh;
        break;
      case 8:
        u = vh;
        break;
      default:
        u = sc;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function Ff(l, t, e, a, u) {
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
            if (i = ke(c), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    kc(function() {
      var g = n, A = di(e), U = [];
      l: {
        var b = _o.get(l);
        if (b !== void 0) {
          var p = Zu, Y = l;
          switch (l) {
            case "keypress":
              if (Gu(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Hd;
              break;
            case "focusin":
              Y = "focus", p = Si;
              break;
            case "focusout":
              Y = "blur", p = Si;
              break;
            case "beforeblur":
            case "afterblur":
              p = Si;
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
              p = lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = zd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = qd;
              break;
            case To:
            case Eo:
            case Ao:
              p = Ad;
              break;
            case Mo:
              p = jd;
              break;
            case "scroll":
            case "scrollend":
              p = bd;
              break;
            case "wheel":
              p = Gd;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = _d;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = eo;
              break;
            case "toggle":
            case "beforetoggle":
              p = Zd;
          }
          var Z = (t & 4) !== 0, hl = !Z && (l === "scroll" || l === "scrollend"), y = Z ? b !== null ? b + "Capture" : null : b;
          Z = [];
          for (var r = g, m; r !== null; ) {
            var O = r;
            if (m = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || m === null || y === null || (O = Qa(r, y), O != null && Z.push(
              pu(r, O, m)
            )), hl) break;
            r = r.return;
          }
          0 < Z.length && (b = new p(
            b,
            Y,
            null,
            e,
            A
          ), U.push({ event: b, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (b = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", b && e !== ri && (Y = e.relatedTarget || e.fromElement) && (ke(Y) || Y[Fe]))
            break l;
          if ((p || b) && (b = A.window === A ? A : (b = A.ownerDocument) ? b.defaultView || b.parentWindow : window, p ? (Y = e.relatedTarget || e.toElement, p = g, Y = Y ? ke(Y) : null, Y !== null && (hl = _(Y), Z = Y.tag, Y !== hl || Z !== 5 && Z !== 27 && Z !== 6) && (Y = null)) : (p = null, Y = g), p !== Y)) {
            if (Z = lo, O = "onMouseLeave", y = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (Z = eo, O = "onPointerLeave", y = "onPointerEnter", r = "pointer"), hl = p == null ? b : Ga(p), m = Y == null ? b : Ga(Y), b = new Z(
              O,
              r + "leave",
              p,
              e,
              A
            ), b.target = hl, b.relatedTarget = m, O = null, ke(A) === g && (Z = new Z(
              y,
              r + "enter",
              Y,
              e,
              A
            ), Z.target = m, Z.relatedTarget = hl, O = Z), hl = O, p && Y)
              t: {
                for (Z = Qy, y = p, r = Y, m = 0, O = y; O; O = Z(O))
                  m++;
                O = 0;
                for (var X = r; X; X = Z(X))
                  O++;
                for (; 0 < m - O; )
                  y = Z(y), m--;
                for (; 0 < O - m; )
                  r = Z(r), O--;
                for (; m--; ) {
                  if (y === r || r !== null && y === r.alternate) {
                    Z = y;
                    break t;
                  }
                  y = Z(y), r = Z(r);
                }
                Z = null;
              }
            else Z = null;
            p !== null && Wr(
              U,
              b,
              p,
              Z,
              !1
            ), Y !== null && hl !== null && Wr(
              U,
              hl,
              Y,
              Z,
              !0
            );
          }
        }
        l: {
          if (b = g ? Ga(g) : window, p = b.nodeName && b.nodeName.toLowerCase(), p === "select" || p === "input" && b.type === "file")
            var al = so;
          else if (co(b))
            if (ro)
              al = Id;
            else {
              al = Fd;
              var j = $d;
            }
          else
            p = b.nodeName, !p || p.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && si(g.elementType) && (al = so) : al = kd;
          if (al && (al = al(l, g))) {
            oo(
              U,
              al,
              e,
              A
            );
            break l;
          }
          j && j(l, b, g), l === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && oi(b, "number", b.value);
        }
        switch (j = g ? Ga(g) : window, l) {
          case "focusin":
            (co(j) || j.contentEditable === "true") && (ia = j, Ai = g, $a = null);
            break;
          case "focusout":
            $a = Ai = ia = null;
            break;
          case "mousedown":
            Mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mi = !1, po(U, e, A);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            po(U, e, A);
        }
        var F;
        if (pi)
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
          na ? io(l, e) && (tl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (tl = "onCompositionStart");
        tl && (ao && e.locale !== "ko" && (na || tl !== "onCompositionStart" ? tl === "onCompositionEnd" && na && (F = Ic()) : (ie = A, vi = "value" in ie ? ie.value : ie.textContent, na = !0)), j = Hn(g, tl), 0 < j.length && (tl = new to(
          tl,
          l,
          null,
          e,
          A
        ), U.push({ event: tl, listeners: j }), F ? tl.data = F : (F = fo(e), F !== null && (tl.data = F)))), (F = Vd ? Ld(l, e) : Kd(l, e)) && (tl = Hn(g, "onBeforeInput"), 0 < tl.length && (j = new to(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          A
        ), U.push({
          event: j,
          listeners: tl
        }), j.data = F)), Yy(
          U,
          l,
          g,
          e,
          A
        );
      }
      Kr(U, t);
    });
  }
  function pu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Hn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Qa(l, e), u != null && a.unshift(
        pu(l, u, n)
      ), u = Qa(l, t), u != null && a.push(
        pu(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Qy(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Wr(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, g = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (s = g, u ? (g = Qa(e, n), g != null && i.unshift(
        pu(e, g, s)
      )) : u || (g = Qa(e, n), g != null && i.push(
        pu(e, g, s)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Zy = /\r\n?/g, wy = /\u0000|\uFFFD/g;
  function $r(l) {
    return (typeof l == "string" ? l : "" + l).replace(Zy, `
`).replace(wy, "");
  }
  function Fr(l, t) {
    return t = $r(t), $r(l) === t;
  }
  function yl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ea(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ea(l, "" + a);
        break;
      case "className":
        qu(l, "class", a);
        break;
      case "tabIndex":
        qu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qu(l, e, a);
        break;
      case "style":
        $c(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          qu(l, "data", a);
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
          typeof n == "function" && (e === "formAction" ? (t !== "input" && yl(l, t, "name", u.name, u, null), yl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), yl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), yl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (yl(l, t, "encType", u.encType, u, null), yl(l, t, "method", u.method, u, null), yl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = ju("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Gt);
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
        P("beforetoggle", l), P("toggle", l), Bu(l, "popover", a);
        break;
      case "xlinkActuate":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Bu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = gd.get(e) || e, Bu(l, e, a));
    }
  }
  function kf(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        $c(l, a, n);
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
        typeof a == "string" ? ea(l, a) : (typeof a == "number" || typeof a == "bigint") && ea(l, "" + a);
        break;
      case "onScroll":
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Gt);
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
        if (!Gc.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Bu(l, e, a);
          }
    }
  }
  function Zl(l, t, e) {
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
                  yl(l, t, n, i, e, null);
              }
          }
        u && yl(l, t, "srcSet", e.srcSet, e, null), a && yl(l, t, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", l);
        var c = n = i = u = null, s = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var A = e[a];
            if (A != null)
              switch (a) {
                case "name":
                  u = A;
                  break;
                case "type":
                  i = A;
                  break;
                case "checked":
                  s = A;
                  break;
                case "defaultChecked":
                  g = A;
                  break;
                case "value":
                  n = A;
                  break;
                case "defaultValue":
                  c = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(o(137, t));
                  break;
                default:
                  yl(l, t, a, A, e, null);
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
                yl(l, t, u, c, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? ta(l, !!a, t, !1) : e != null && ta(l, !!a, e, !0);
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
                yl(l, t, i, c, e, null);
            }
        Jc(l, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : yl(l, t, s, a, e, null));
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
        for (a = 0; a < bu.length; a++)
          P(bu[a], l);
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
                yl(l, t, g, a, e, null);
            }
        return;
      default:
        if (si(t)) {
          for (A in e)
            e.hasOwnProperty(A) && (a = e[A], a !== void 0 && kf(
              l,
              t,
              A,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && yl(l, t, c, a, e, null));
  }
  function Vy(l, t, e, a) {
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
        var u = null, n = null, i = null, c = null, s = null, g = null, A = null;
        for (p in e) {
          var U = e[p];
          if (e.hasOwnProperty(p) && U != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = U;
              default:
                a.hasOwnProperty(p) || yl(l, t, p, null, a, U);
            }
        }
        for (var b in a) {
          var p = a[b];
          if (U = e[b], a.hasOwnProperty(b) && (p != null || U != null))
            switch (b) {
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
                A = p;
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
                p !== U && yl(
                  l,
                  t,
                  b,
                  p,
                  a,
                  U
                );
            }
        }
        ci(
          l,
          i,
          c,
          s,
          g,
          A,
          n,
          u
        );
        return;
      case "select":
        p = i = c = b = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(n) || yl(
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
                b = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== s && yl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  s
                );
            }
        t = c, e = i, a = p, b != null ? ta(l, !!e, b, !1) : !!a != !!e && (t != null ? ta(l, !!e, t, !0) : ta(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = b = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                yl(l, t, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                b = u;
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
                u !== n && yl(l, t, i, u, a, n);
            }
        Kc(l, b, p);
        return;
      case "option":
        for (var Y in e)
          b = e[Y], e.hasOwnProperty(Y) && b != null && !a.hasOwnProperty(Y) && (Y === "selected" ? l.selected = !1 : yl(
            l,
            t,
            Y,
            null,
            a,
            b
          ));
        for (s in a)
          b = a[s], p = e[s], a.hasOwnProperty(s) && b !== p && (b != null || p != null) && (s === "selected" ? l.selected = b && typeof b != "function" && typeof b != "symbol" : yl(
            l,
            t,
            s,
            b,
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
        for (var Z in e)
          b = e[Z], e.hasOwnProperty(Z) && b != null && !a.hasOwnProperty(Z) && yl(l, t, Z, null, a, b);
        for (g in a)
          if (b = a[g], p = e[g], a.hasOwnProperty(g) && b !== p && (b != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(o(137, t));
                break;
              default:
                yl(
                  l,
                  t,
                  g,
                  b,
                  a,
                  p
                );
            }
        return;
      default:
        if (si(t)) {
          for (var hl in e)
            b = e[hl], e.hasOwnProperty(hl) && b !== void 0 && !a.hasOwnProperty(hl) && kf(
              l,
              t,
              hl,
              void 0,
              a,
              b
            );
          for (A in a)
            b = a[A], p = e[A], !a.hasOwnProperty(A) || b === p || b === void 0 && p === void 0 || kf(
              l,
              t,
              A,
              b,
              a,
              p
            );
          return;
        }
    }
    for (var y in e)
      b = e[y], e.hasOwnProperty(y) && b != null && !a.hasOwnProperty(y) && yl(l, t, y, null, a, b);
    for (U in a)
      b = a[U], p = e[U], !a.hasOwnProperty(U) || b === p || b == null && p == null || yl(l, t, U, b, a, p);
  }
  function kr(l) {
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
  function Ly() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && kr(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], g = s.startTime;
            if (g > c) break;
            var A = s.transferSize, U = s.initiatorType;
            A && kr(U) && (s = s.responseEnd, i += A * (s < c ? 1 : (c - g) / (s - g)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var If = null, Pf = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ir(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pr(l, t) {
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
  function lc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var tc = null;
  function Ky() {
    var l = window.event;
    return l && l.type === "popstate" ? l === tc ? !1 : (tc = l, !0) : (tc = null, !1);
  }
  var l0 = typeof setTimeout == "function" ? setTimeout : void 0, Jy = typeof clearTimeout == "function" ? clearTimeout : void 0, t0 = typeof Promise == "function" ? Promise : void 0, Wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof t0 < "u" ? function(l) {
    return t0.resolve(null).then(l).catch($y);
  } : l0;
  function $y(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ee(l) {
    return l === "head";
  }
  function e0(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Ha(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          zu(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, zu(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Xa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && zu(l.ownerDocument.body);
      e = u;
    } while (e);
    Ha(t);
  }
  function a0(l, t) {
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
  function ec(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ec(e), ii(e);
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
  function Fy(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Xa])
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
  function ky(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function u0(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function ac(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function uc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Iy(l, t) {
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
  var nc = null;
  function n0(l) {
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
  function i0(l) {
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
  function f0(l, t, e) {
    switch (t = Nn(e), l) {
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
  function zu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ii(l);
  }
  var Dt = /* @__PURE__ */ new Map(), c0 = /* @__PURE__ */ new Set();
  function Bn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ee = N.d;
  N.d = {
    f: Py,
    r: lh,
    D: th,
    C: eh,
    L: ah,
    m: uh,
    X: ih,
    S: nh,
    M: fh
  };
  function Py() {
    var l = ee.f(), t = _n();
    return l || t;
  }
  function lh(l) {
    var t = Ie(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ms(t) : ee.r(l);
  }
  var Ra = typeof document > "u" ? null : document;
  function o0(l, t, e) {
    var a = Ra;
    if (a && typeof t == "string" && t) {
      var u = pt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), c0.has(u) || (c0.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Zl(t, "link", l), Nl(t), a.head.appendChild(t)));
    }
  }
  function th(l) {
    ee.D(l), o0("dns-prefetch", l, null);
  }
  function eh(l, t) {
    ee.C(l, t), o0("preconnect", l, t);
  }
  function ah(l, t, e) {
    ee.L(l, t, e);
    var a = Ra;
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
          n = xa(l);
          break;
        case "script":
          n = Ca(l);
      }
      Dt.has(n) || (l = q(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Dt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Tu(n)) || t === "script" && a.querySelector(Eu(n)) || (t = a.createElement("link"), Zl(t, "link", l), Nl(t), a.head.appendChild(t)));
    }
  }
  function uh(l, t) {
    ee.m(l, t);
    var e = Ra;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ca(l);
      }
      if (!Dt.has(n) && (l = q({ rel: "modulepreload", href: l }, t), Dt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Eu(n)))
              return;
        }
        a = e.createElement("link"), Zl(a, "link", l), Nl(a), e.head.appendChild(a);
      }
    }
  }
  function nh(l, t, e) {
    ee.S(l, t, e);
    var a = Ra;
    if (a && l) {
      var u = Pe(a).hoistableStyles, n = xa(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Tu(n)
        ))
          c.loading = 5;
        else {
          l = q(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Dt.get(n)) && ic(l, e);
          var s = i = a.createElement("link");
          Nl(s), Zl(s, "link", l), s._p = new Promise(function(g, A) {
            s.onload = g, s.onerror = A;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, qn(i, t, a);
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
  function ih(l, t) {
    ee.X(l, t);
    var e = Ra;
    if (e && l) {
      var a = Pe(e).hoistableScripts, u = Ca(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = q({ src: l, async: !0 }, t), (t = Dt.get(u)) && fc(l, t), n = e.createElement("script"), Nl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function fh(l, t) {
    ee.M(l, t);
    var e = Ra;
    if (e && l) {
      var a = Pe(e).hoistableScripts, u = Ca(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = q({ src: l, async: !0, type: "module" }, t), (t = Dt.get(u)) && fc(l, t), n = e.createElement("script"), Nl(n), Zl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function s0(l, t, e, a) {
    var u = (u = B.current) ? Bn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = xa(e.href), e = Pe(
          u
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = xa(e.href);
          var n = Pe(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            Tu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Dt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Dt.set(l, e), n || ch(
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
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ca(e), e = Pe(
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
  function xa(l) {
    return 'href="' + pt(l) + '"';
  }
  function Tu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function r0(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function ch(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zl(t, "link", e), Nl(t), l.head.appendChild(t));
  }
  function Ca(l) {
    return '[src="' + pt(l) + '"]';
  }
  function Eu(l) {
    return "script[async]" + l;
  }
  function d0(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + pt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Nl(a), a;
          var u = q({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Nl(a), Zl(a, "style", u), qn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = xa(e.href);
          var n = l.querySelector(
            Tu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Nl(n), n;
          a = r0(e), (u = Dt.get(u)) && ic(a, u), n = (l.ownerDocument || l).createElement("link"), Nl(n);
          var i = n;
          return i._p = new Promise(function(c, s) {
            i.onload = c, i.onerror = s;
          }), Zl(n, "link", a), t.state.loading |= 4, qn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ca(e.src), (u = l.querySelector(
            Eu(n)
          )) ? (t.instance = u, Nl(u), u) : (a = e, (u = Dt.get(n)) && (a = q({}, e), fc(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Nl(u), Zl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, qn(a, e.precedence, l));
    return t.instance;
  }
  function qn(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Yn = null;
  function y0(l, t, e) {
    if (Yn === null) {
      var a = /* @__PURE__ */ new Map(), u = Yn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Yn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Xa] || n[jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function h0(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function oh(l, t, e) {
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
  function v0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function sh(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = xa(a.href), n = t.querySelector(
          Tu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = jn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Nl(n);
          return;
        }
        n = t.ownerDocument || t, a = r0(a), (u = Dt.get(u)) && ic(a, u), n = n.createElement("link"), Nl(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Zl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = jn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var cc = 0;
  function rh(l, t) {
    return l.stylesheets && l.count === 0 && Gn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && cc === 0 && (cc = 62500 * Ly());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > cc ? 50 : 800) + t
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
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Xn = /* @__PURE__ */ new Map(), t.forEach(dh, l), Xn = null, jn.call(l));
  }
  function dh(l, t) {
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
  var Au = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function yh(l, t, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function m0(l, t, e, a, u, n, i, c, s, g, A, U) {
    return l = new yh(
      l,
      t,
      e,
      i,
      s,
      g,
      A,
      U,
      c
    ), t = 1, n === !0 && (t |= 24), n = st(3, null, null, t), l.current = n, n.stateNode = l, t = Gi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Vi(n), l;
  }
  function g0(l) {
    return l ? (l = oa, l) : oa;
  }
  function S0(l, t, e, a, u, n) {
    u = g0(u), a.context === null ? a.context = u : a.pendingContext = u, a = de(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ye(l, a, t), e !== null && (lt(e, l, t), eu(e, l, t));
  }
  function b0(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function oc(l, t) {
    b0(l, t), (l = l.alternate) && b0(l, t);
  }
  function p0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ye(l, 67108864);
      t !== null && lt(t, l, 67108864), oc(l, 67108864);
    }
  }
  function z0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = vt();
      t = ai(t);
      var e = Ye(l, t);
      e !== null && lt(e, l, t), oc(l, t);
    }
  }
  var Qn = !0;
  function hh(l, t, e, a) {
    var u = M.T;
    M.T = null;
    var n = N.p;
    try {
      N.p = 2, sc(l, t, e, a);
    } finally {
      N.p = n, M.T = u;
    }
  }
  function vh(l, t, e, a) {
    var u = M.T;
    M.T = null;
    var n = N.p;
    try {
      N.p = 8, sc(l, t, e, a);
    } finally {
      N.p = n, M.T = u;
    }
  }
  function sc(l, t, e, a) {
    if (Qn) {
      var u = rc(a);
      if (u === null)
        Ff(
          l,
          t,
          a,
          Zn,
          e
        ), E0(l, a);
      else if (gh(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (E0(l, a), t & 4 && -1 < mh.indexOf(l)) {
        for (; u !== null; ) {
          var n = Ie(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Ce(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - ct(i);
                      c.entanglements[1] |= s, i &= ~s;
                    }
                    Yt(n), (il & 6) === 0 && (An = it() + 500, Su(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ye(n, 2), c !== null && lt(c, n, 2), _n(), oc(n, 2);
            }
          if (n = rc(a), n === null && Ff(
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
        Ff(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function rc(l) {
    return l = di(l), dc(l);
  }
  var Zn = null;
  function dc(l) {
    if (Zn = null, l = ke(l), l !== null) {
      var t = _(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = x(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = G(t), l !== null) return l;
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
  function T0(l) {
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
        switch (td()) {
          case Uc:
            return 2;
          case Rc:
            return 8;
          case Ru:
          case ed:
            return 32;
          case xc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yc = !1, Ae = null, Me = null, _e = null, Mu = /* @__PURE__ */ new Map(), _u = /* @__PURE__ */ new Map(), Oe = [], mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function E0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ae = null;
        break;
      case "dragenter":
      case "dragleave":
        Me = null;
        break;
      case "mouseover":
      case "mouseout":
        _e = null;
        break;
      case "pointerover":
      case "pointerout":
        Mu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(t.pointerId);
    }
  }
  function Ou(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Ie(t), t !== null && p0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function gh(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Ae = Ou(
          Ae,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Me = Ou(
          Me,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return _e = Ou(
          _e,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Mu.set(
          n,
          Ou(
            Mu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, _u.set(
          n,
          Ou(
            _u.get(n) || null,
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
  function A0(l) {
    var t = ke(l.target);
    if (t !== null) {
      var e = _(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = x(e), t !== null) {
            l.blockedOn = t, Yc(l.priority, function() {
              z0(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = G(e), t !== null) {
            l.blockedOn = t, Yc(l.priority, function() {
              z0(e);
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
  function wn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = rc(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        ri = a, e.target.dispatchEvent(a), ri = null;
      } else
        return t = Ie(e), t !== null && p0(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function M0(l, t, e) {
    wn(l) && e.delete(t);
  }
  function Sh() {
    yc = !1, Ae !== null && wn(Ae) && (Ae = null), Me !== null && wn(Me) && (Me = null), _e !== null && wn(_e) && (_e = null), Mu.forEach(M0), _u.forEach(M0);
  }
  function Vn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, yc || (yc = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Sh
    )));
  }
  var Ln = null;
  function _0(l) {
    Ln !== l && (Ln = l, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Ln === l && (Ln = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (dc(a || e) === null)
              continue;
            break;
          }
          var n = Ie(e);
          n !== null && (l.splice(t, 3), t -= 3, rf(
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
  function Ha(l) {
    function t(s) {
      return Vn(s, l);
    }
    Ae !== null && Vn(Ae, l), Me !== null && Vn(Me, l), _e !== null && Vn(_e, l), Mu.forEach(t), _u.forEach(t);
    for (var e = 0; e < Oe.length; e++) {
      var a = Oe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Oe.length && (e = Oe[0], e.blockedOn === null); )
      A0(e), e.blockedOn === null && Oe.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[Wl] || null;
        if (typeof n == "function")
          i || _0(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Wl] || null)
              c = i.formAction;
            else if (dc(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), _0(e);
        }
      }
  }
  function O0() {
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
  function hc(l) {
    this._internalRoot = l;
  }
  Kn.prototype.render = hc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = vt();
    S0(e, a, l, t, null, null);
  }, Kn.prototype.unmount = hc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      S0(l.current, 2, null, l, null, null), _n(), t[Fe] = null;
    }
  };
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = qc();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Oe.length && t !== 0 && t < Oe[e].priority; e++) ;
      Oe.splice(e, 0, l), e === 0 && A0(l);
    }
  };
  var D0 = v.version;
  if (D0 !== "19.2.4")
    throw Error(
      o(
        527,
        D0,
        "19.2.4"
      )
    );
  N.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? H(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var bh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        qa = Jn.inject(
          bh
        ), ft = Jn;
      } catch {
      }
  }
  return Uu.createRoot = function(l, t) {
    if (!z(l)) throw Error(o(299));
    var e = !1, a = "", u = Bs, n = qs, i = Ys;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = m0(
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
      O0
    ), l[Fe] = t.current, $f(l), new hc(t);
  }, Uu.hydrateRoot = function(l, t, e) {
    if (!z(l)) throw Error(o(299));
    var a = !1, u = "", n = Bs, i = qs, c = Ys, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = m0(
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
      O0
    ), t.context = g0(null), e = t.current, a = vt(), a = ai(a), u = de(a), u.callback = null, ye(e, u, a), e = a, t.current.lanes = e, ja(t, e), Yt(t), l[Fe] = t.current, $f(l), new Kn(t);
  }, Uu.version = "19.2.4", Uu;
}
var j0;
function Uh() {
  if (j0) return mc.exports;
  j0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return f(), mc.exports = Dh(), mc.exports;
}
var Rh = Uh(), tt = Mc();
const bl = 8, zl = 960, mt = 1240, J0 = "clawd_ui_block_blast_best", zc = [
  { fill: "#ff845c", shade: "#a53a1f", glow: "rgba(255,132,92,0.36)", stroke: "#fff4ea" },
  { fill: "#63d0ff", shade: "#1e7191", glow: "rgba(99,208,255,0.34)", stroke: "#effcff" },
  { fill: "#ffd56d", shade: "#a47d1d", glow: "rgba(255,213,109,0.32)", stroke: "#fff8df" },
  { fill: "#7fe48d", shade: "#2f7f44", glow: "rgba(127,228,141,0.32)", stroke: "#effff2" },
  { fill: "#c591ff", shade: "#7142a8", glow: "rgba(197,145,255,0.3)", stroke: "#faf4ff" },
  { fill: "#ff95bb", shade: "#9a4561", glow: "rgba(255,149,187,0.3)", stroke: "#fff4f7" }
], Wn = [
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
let X0 = null;
function G0(f, v, h) {
  return Math.max(v, Math.min(h, f));
}
function ae(f, v) {
  return f * bl + v;
}
function Fn(f) {
  const v = f * 1664525 + 1013904223 >>> 0;
  return v === 0 ? 1 : v;
}
function jt() {
  if (typeof window > "u") return { width: 1280, height: 900 };
  const f = window.visualViewport;
  return {
    width: Math.round(f?.width ?? window.innerWidth),
    height: Math.round(f?.height ?? window.innerHeight)
  };
}
function Q0(f) {
  const v = f;
  return f.fullscreenElement ?? v.webkitFullscreenElement ?? null;
}
function xh(f) {
  if (!f) return !1;
  const v = f;
  return typeof v.requestFullscreen == "function" || typeof v.webkitRequestFullscreen == "function";
}
async function Ch(f) {
  const v = f;
  return typeof v.requestFullscreen == "function" ? (await v.requestFullscreen(), !0) : typeof v.webkitRequestFullscreen == "function" ? (await v.webkitRequestFullscreen(), !0) : !1;
}
async function Hh(f) {
  const v = f;
  return typeof f.exitFullscreen == "function" ? (await f.exitFullscreen(), !0) : typeof v.webkitExitFullscreen == "function" ? (await v.webkitExitFullscreen(), !0) : !1;
}
function W0(f) {
  const v = Fn(f);
  return [v, v / 4294967295];
}
function Nh() {
  if (typeof globalThis.crypto < "u" && typeof globalThis.crypto.getRandomValues == "function") {
    const o = new Uint32Array(1);
    return globalThis.crypto.getRandomValues(o), Fn(o[0] || 1);
  }
  const f = typeof Date < "u" ? Date.now() >>> 0 : 0, v = typeof performance < "u" ? Math.floor(performance.now() * 1e3) >>> 0 : 0, h = Math.floor(Math.random() * 4294967295) >>> 0;
  return Fn(f ^ v ^ h || 1);
}
function Bh() {
  if (typeof window > "u") return 0;
  const f = window.localStorage.getItem(J0), v = f == null ? 0 : Number.parseInt(f, 10);
  return Number.isFinite(v) ? Math.max(0, v) : 0;
}
function qh(f) {
  typeof window < "u" && window.localStorage.setItem(J0, String(f));
}
function Yh(f) {
  const v = [];
  for (let h = 0; h < bl; h += 1) {
    let o = "";
    for (let z = 0; z < bl; z += 1)
      o += f[ae(h, z)] ? "#" : ".";
    v.push(o);
  }
  return v;
}
function jh() {
  return Array.from({ length: bl * bl }, () => null);
}
function Na(f, v = !1) {
  const h = v && !f, o = f ? 620 : h ? 476 : 560, z = o / bl, _ = (zl - o) / 2, x = f ? 150 : h ? 92 : 188, G = f ? 820 : h ? 636 : 860, C = f ? 254 : h ? 208 : 240, E = f ? 184 : h ? 148 : 214, H = h ? 12 : 20, q = (zl - C * 3 - H * 2) / 2;
  return {
    boardX: _,
    boardY: x,
    boardSize: o,
    cell: z,
    trayY: G,
    slots: [
      { x: q, y: G, w: C, h: E },
      { x: q + C + H, y: G, w: C, h: E },
      { x: q + (C + H) * 2, y: G, w: C, h: E }
    ]
  };
}
function Xh(f) {
  return {
    width: Math.max(...f.map((v) => v.x)) + 1,
    height: Math.max(...f.map((v) => v.y)) + 1
  };
}
function Gh(f, v, h) {
  const o = Xh(f.cells);
  return {
    id: `${f.id}::${h}`,
    templateId: f.id,
    label: f.label,
    cells: f.cells.map((z) => ({ ...z })),
    width: o.width,
    height: o.height,
    points: f.cells.length * 10,
    color: v
  };
}
function Qh(f) {
  const v = Wn.reduce((_, x) => _ + x.weight, 0), [h, o] = W0(f);
  let z = o * v;
  for (const _ of Wn)
    if (z -= _.weight, z <= 0)
      return [h, _];
  return [h, Wn[Wn.length - 1]];
}
function Zh(f) {
  const [v, h] = W0(f), o = Math.min(zc.length - 1, Math.floor(h * zc.length));
  return [v, zc[o]];
}
function wh(f) {
  let v = f, h, o;
  return [v, h] = Qh(v), [v, o] = Zh(v), [Gh(h, o, v.toString(16)), v];
}
function Vh(f, v) {
  let h = f;
  for (let _ = 0; _ < 6; _ += 1) {
    const [x, G] = Ac([], h), C = x.map((E) => E.templateId).join(",");
    if (C !== v || _ === 5)
      return [x, G, C];
    h = Fn(G ^ (_ + 1) * 2654435769 >>> 0 || 1);
  }
  const [o, z] = Ac([], h);
  return [o, z, o.map((_) => _.templateId).join(",")];
}
function _c(f, v, h, o) {
  for (const z of v.cells) {
    const _ = h + z.y, x = o + z.x;
    if (_ < 0 || _ >= bl || x < 0 || x >= bl || f[ae(_, x)])
      return !1;
  }
  return !0;
}
function Lh(f, v) {
  for (let h = 0; h <= bl - v.height; h += 1)
    for (let o = 0; o <= bl - v.width; o += 1)
      if (_c(f, v, h, o))
        return !0;
  return !1;
}
function $0(f, v) {
  return v.reduce((h, o) => h + (Lh(f, o) ? 1 : 0), 0);
}
function F0(f) {
  const v = [], h = [];
  for (let o = 0; o < bl; o += 1) {
    let z = !0;
    for (let _ = 0; _ < bl; _ += 1)
      if (!f[ae(o, _)]) {
        z = !1;
        break;
      }
    z && v.push(o);
  }
  for (let o = 0; o < bl; o += 1) {
    let z = !0;
    for (let _ = 0; _ < bl; _ += 1)
      if (!f[ae(_, o)]) {
        z = !1;
        break;
      }
    z && h.push(o);
  }
  return { rows: v, cols: h };
}
function Kh(f, v, h, o) {
  const z = f.cells.map((C) => ({ row: v + C.y, col: h + C.x }));
  if (!_c(o, f, v, h))
    return null;
  const x = [...o];
  for (const C of f.cells)
    x[ae(v + C.y, h + C.x)] = f.color;
  const G = F0(x);
  return { pieceId: f.id, row: v, col: h, cells: z, canPlace: !0, rows: G.rows, cols: G.cols };
}
function Tc(f, v, h, o, z) {
  const _ = f.cell * 1.2;
  if (!(h >= f.boardX - _ && h <= f.boardX + f.boardSize + _ && o >= f.boardY - _ && o <= f.boardY + f.boardSize + _))
    return null;
  const G = G0(Math.round((h - f.boardX) / f.cell - v.width / 2), 0, bl - v.width), C = G0(Math.round((o - f.boardY) / f.cell - v.height / 2), 0, bl - v.height);
  return Kh(v, C, G, z);
}
function Ac(f, v) {
  if (f.length > 0)
    return [f, v];
  const h = [];
  let o = v;
  for (; h.length < 3; ) {
    let z;
    [z, o] = wh(o), !(h.filter((x) => x.templateId === z.templateId).length >= 2) && h.push(z);
  }
  return [h, o];
}
function Jl(f, v, h, o, z, _) {
  const x = Math.min(_, o / 2, z / 2);
  f.beginPath(), f.moveTo(v + x, h), f.arcTo(v + o, h, v + o, h + z, x), f.arcTo(v + o, h + z, v, h + z, x), f.arcTo(v, h + z, v, h, x), f.arcTo(v, h, v + o, h, x), f.closePath();
}
function $n(f, v, h, o, z, _) {
  const x = _?.alpha ?? 1, G = Math.max(3, o * 0.08);
  _?.glow && (f.save(), f.globalAlpha = x * 0.7, f.shadowColor = z.glow, f.shadowBlur = 22, Jl(f, v, h, o, o, o * 0.24), f.fillStyle = z.fill, f.fill(), f.restore()), f.save(), f.globalAlpha = x, Jl(f, v, h, o, o, o * 0.24);
  const C = f.createLinearGradient(v, h, v, h + o);
  C.addColorStop(0, "#ffffff"), C.addColorStop(0.08, z.stroke), C.addColorStop(0.18, z.fill), C.addColorStop(0.72, z.fill), C.addColorStop(1, z.shade), f.fillStyle = C, f.fill(), Jl(f, v + G, h + G, o - G * 2, o * 0.34, o * 0.16);
  const E = f.createLinearGradient(v, h, v, h + o * 0.4);
  E.addColorStop(0, "rgba(255,255,255,0.8)"), E.addColorStop(1, "rgba(255,255,255,0)"), f.fillStyle = E, f.fill(), f.lineWidth = Math.max(2, o * 0.06), f.strokeStyle = _?.outline ?? "rgba(255,255,255,0.55)", Jl(f, v + 1, h + 1, o - 2, o - 2, o * 0.22), f.stroke(), f.restore();
}
function Jh(f, v) {
  const h = f.createLinearGradient(0, 0, 0, mt);
  h.addColorStop(0, "#14285c"), h.addColorStop(0.44, "#223e81"), h.addColorStop(1, "#0f1838"), f.fillStyle = h, f.fillRect(0, 0, zl, mt);
  const o = f.createRadialGradient(zl * 0.18, mt * 0.12, 0, zl * 0.18, mt * 0.12, 260);
  o.addColorStop(0, "rgba(144,217,255,0.34)"), o.addColorStop(1, "rgba(144,217,255,0)"), f.fillStyle = o, f.fillRect(0, 0, zl, mt);
  const z = f.createRadialGradient(zl * 0.82, mt * 0.18, 0, zl * 0.82, mt * 0.18, 280);
  z.addColorStop(0, "rgba(255,202,96,0.2)"), z.addColorStop(1, "rgba(255,202,96,0)"), f.fillStyle = z, f.fillRect(0, 0, zl, mt), f.save(), f.globalAlpha = v ? 0.22 : 0.14;
  for (let _ = 0; _ < 16; _ += 1)
    for (let x = 0; x < 12; x += 1) {
      const G = x * 88 + _ % 2 * 14, C = _ * 82;
      f.fillStyle = _ % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", Jl(f, G, C, 52, 52, 14), f.fill();
    }
  f.restore();
}
function Wh(f, v) {
  const h = Na(f.fullscreen, f.compact);
  for (const o of v) {
    const z = h.boardX + o.col * h.cell + h.cell / 2, _ = h.boardY + o.row * h.cell + h.cell / 2;
    for (let x = 0; x < 3; x += 1) {
      const G = (x + 1) / 3 * Math.PI * 2 + f.time * 3e-3;
      f.particles.push({
        x: z,
        y: _,
        vx: Math.cos(G) * (1.2 + x * 0.5),
        vy: Math.sin(G) * (1.1 + x * 0.45) - 1.2,
        life: 420 + x * 60,
        maxLife: 420 + x * 60,
        color: o.color.fill,
        size: 8 + x * 2
      });
    }
  }
}
function Z0(f, v) {
  f.time += v, f.flash > 0 && (f.flash = Math.max(0, f.flash - v / 220), f.flash === 0 && (f.flashRows = [], f.flashCols = []));
  const h = [];
  for (const o of f.particles)
    o.life -= v, !(o.life <= 0) && (o.x += o.vx * (v / 16), o.y += o.vy * (v / 16), o.vy += 0.03 * (v / 16), h.push(o));
  f.particles = h;
}
function w0(f, v, h) {
  const [o, z, _] = Vh(Nh(), X0);
  X0 = _;
  const x = jh();
  return {
    mode: f,
    board: x,
    tray: o,
    selectedPieceId: null,
    preview: null,
    drag: null,
    particles: [],
    score: 0,
    bestScore: Bh(),
    combo: 0,
    clears: 0,
    placements: 0,
    message: f === "title" ? "Tap Start Run for a fresh piece lineup each time." : "Fill whole rows and columns to blast them.",
    rng: z,
    time: 0,
    flash: 0,
    flashRows: [],
    flashCols: [],
    fullscreen: v,
    compact: h,
    movesAvailable: $0(x, o)
  };
}
function V0(f) {
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
function $h(f) {
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
    ...Yh(f.board)
  ].join(`
`);
}
function L0(f, v) {
  const h = f.tray.findIndex((H) => H.id === v.pieceId);
  if (h === -1)
    return;
  const o = f.tray[h];
  if (!_c(f.board, o, v.row, v.col)) {
    f.message = "That spot is blocked.", f.preview = null, f.drag = null;
    return;
  }
  for (const H of o.cells)
    f.board[ae(v.row + H.y, v.col + H.x)] = o.color;
  const z = F0(f.board), _ = [], x = /* @__PURE__ */ new Set();
  for (const H of z.rows)
    for (let q = 0; q < bl; q += 1)
      x.add(ae(H, q));
  for (const H of z.cols)
    for (let q = 0; q < bl; q += 1)
      x.add(ae(q, H));
  for (const H of x) {
    const q = Math.floor(H / bl), W = H % bl, pl = f.board[H];
    pl && _.push({ row: q, col: W, color: pl }), f.board[H] = null;
  }
  let G = o.points;
  if (z.rows.length + z.cols.length > 0) {
    f.combo += 1;
    const H = z.rows.length + z.cols.length, q = f.combo > 1 ? (f.combo - 1) * 30 : 0;
    G += H * 120 + q, f.clears += H, f.flash = 1, f.flashRows = z.rows, f.flashCols = z.cols, Wh(f, _), f.message = f.combo > 1 ? `Combo x${f.combo}` : `Cleared ${H} line${H === 1 ? "" : "s"}`;
  } else
    f.combo = 0, f.flash = 0, f.flashRows = [], f.flashCols = [], f.message = o.cells.length >= 5 ? "Strong placement." : "Keep building.";
  f.score += G, f.score > f.bestScore && (f.bestScore = f.score, qh(f.bestScore)), f.tray.splice(h, 1), f.placements += 1, f.selectedPieceId = null, f.preview = null, f.drag = null;
  let C = f.tray, E = f.rng;
  [C, E] = Ac(C, E), f.tray = C, f.rng = E, f.movesAvailable = $0(f.board, f.tray), f.movesAvailable === 0 && (f.mode = "gameover", f.message = "No moves left. Start a new run.");
}
function K0(f, v) {
  const h = Na(v.fullscreen, v.compact);
  f.clearRect(0, 0, zl, mt), Jh(f, v.fullscreen), f.save(), f.fillStyle = "rgba(255,255,255,0.96)", f.font = v.fullscreen ? '700 42px "Trebuchet MS", sans-serif' : '700 38px "Trebuchet MS", sans-serif', f.textAlign = "left", f.fillText("Block Blast", 58, 70), f.font = '600 20px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(230,241,255,0.86)", f.fillText(v.fullscreen ? "Classic mode" : "Classic endless mode", 58, 100), f.restore(), f.save(), Jl(f, h.boardX - 24, h.boardY - 24, h.boardSize + 48, h.boardSize + 48, 34), f.fillStyle = "rgba(8,20,56,0.5)", f.shadowColor = "rgba(0,0,0,0.24)", f.shadowBlur = 24, f.fill(), f.restore(), Jl(f, h.boardX - 8, h.boardY - 8, h.boardSize + 16, h.boardSize + 16, 30);
  const o = f.createLinearGradient(h.boardX, h.boardY, h.boardX, h.boardY + h.boardSize);
  if (o.addColorStop(0, "rgba(18,35,78,0.98)"), o.addColorStop(1, "rgba(10,22,56,0.98)"), f.fillStyle = o, f.fill(), v.flash > 0) {
    f.save(), f.globalAlpha = v.flash * 0.42, f.fillStyle = "rgba(255,243,179,0.8)";
    for (const z of v.flashRows)
      Jl(f, h.boardX, h.boardY + z * h.cell, h.boardSize, h.cell, 12), f.fill();
    for (const z of v.flashCols)
      Jl(f, h.boardX + z * h.cell, h.boardY, h.cell, h.boardSize, 12), f.fill();
    f.restore();
  }
  for (let z = 0; z < bl; z += 1)
    for (let _ = 0; _ < bl; _ += 1) {
      const x = h.boardX + _ * h.cell + 3, G = h.boardY + z * h.cell + 3;
      Jl(f, x, G, h.cell - 6, h.cell - 6, 16), f.fillStyle = (z + _) % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)", f.fill();
    }
  if (v.preview) {
    const z = v.tray.find((_) => _.id === v.preview?.pieceId) ?? null;
    if (z)
      for (const _ of v.preview.cells) {
        const x = h.boardX + _.col * h.cell + 5, G = h.boardY + _.row * h.cell + 5;
        $n(f, x, G, h.cell - 10, z.color, {
          alpha: v.preview.canPlace ? 0.6 : 0.22,
          outline: v.preview.canPlace ? "rgba(255,255,255,0.85)" : "rgba(255,116,116,0.9)",
          glow: v.preview.canPlace
        });
      }
  }
  for (let z = 0; z < bl; z += 1)
    for (let _ = 0; _ < bl; _ += 1) {
      const x = v.board[ae(z, _)];
      x && $n(f, h.boardX + _ * h.cell + 5, h.boardY + z * h.cell + 5, h.cell - 10, x, {
        glow: !1
      });
    }
  for (let z = 0; z < 3; z += 1) {
    const _ = h.slots[z], x = v.tray[z], G = x && v.selectedPieceId === x.id;
    Jl(f, _.x, _.y, _.w, _.h, 26);
    const C = f.createLinearGradient(_.x, _.y, _.x, _.y + _.h);
    if (C.addColorStop(0, G ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.14)"), C.addColorStop(1, G ? "rgba(54,135,255,0.3)" : "rgba(17,34,78,0.74)"), f.fillStyle = C, f.fill(), f.lineWidth = G ? 4 : 2, f.strokeStyle = G ? "rgba(178,220,255,0.95)" : "rgba(255,255,255,0.18)", f.stroke(), !x) {
      f.save(), f.globalAlpha = 0.26, Jl(f, _.x + _.w / 2 - 36, _.y + _.h / 2 - 36, 72, 72, 18), f.fillStyle = "rgba(255,255,255,0.1)", f.fill(), f.restore();
      continue;
    }
    const E = Math.min(44, (_.w - 42) / Math.max(x.width + 0.25, 2), (_.h - 44) / Math.max(x.height + 0.25, 2)), H = x.width * E, q = x.height * E, W = _.x + (_.w - H) / 2, pl = _.y + (_.h - q) / 2;
    for (const Tl of x.cells)
      $n(f, W + Tl.x * E, pl + Tl.y * E, E - 3, x.color, {
        glow: G
      });
  }
  if (v.drag) {
    const z = v.tray.find((_) => _.id === v.drag?.pieceId) ?? null;
    if (z) {
      const _ = Math.min(46, h.cell * 0.88), x = v.drag.x - z.width * _ / 2, G = v.drag.y - z.height * _ / 2;
      for (const C of z.cells)
        $n(f, x + C.x * _, G + C.y * _, _ - 4, z.color, {
          alpha: 0.88,
          glow: !0
        });
    }
  }
  f.save(), f.textAlign = "center", f.fillStyle = "rgba(231,243,255,0.92)", f.font = '700 26px "Trebuchet MS", sans-serif', f.fillText(`${v.movesAvailable} playable`, zl / 2, h.trayY - 22), f.restore();
  for (const z of v.particles)
    f.save(), f.globalAlpha = z.life / z.maxLife, f.fillStyle = z.color, Jl(f, z.x - z.size / 2, z.y - z.size / 2, z.size, z.size, z.size / 3), f.fill(), f.restore();
  v.mode === "title" && (f.save(), Jl(f, 116, 392, zl - 232, 232, 34), f.fillStyle = "rgba(6,14,38,0.76)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 52px "Trebuchet MS", sans-serif', f.fillText("Stack. Blast. Repeat.", zl / 2, 470), f.font = '600 24px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(223,238,255,0.92)", f.fillText("Drag from the tray or tap a piece, then tap the board.", zl / 2, 520), f.fillText("The piece lineup mirrors the mobile app more closely now.", zl / 2, 560), f.restore()), v.mode === "gameover" && (f.save(), Jl(f, 146, 368, zl - 292, 260, 38), f.fillStyle = "rgba(7,12,32,0.82)", f.fill(), f.textAlign = "center", f.fillStyle = "rgba(255,255,255,0.98)", f.font = '700 54px "Trebuchet MS", sans-serif', f.fillText("No Moves Left", zl / 2, 460), f.font = '700 28px "Trebuchet MS", sans-serif', f.fillStyle = "rgba(231,243,255,0.9)", f.fillText(`Final score ${v.score}`, zl / 2, 510), f.font = '600 22px "Trebuchet MS", sans-serif', f.fillText("Start a new run to reload the tray.", zl / 2, 554), f.restore());
}
function Ec(f) {
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
function Fh() {
  const f = tt.useRef(null);
  f.current || (f.current = w0("title", !1, typeof window < "u" ? window.innerWidth <= 560 : !1));
  const v = tt.useRef(null), h = tt.useRef(null), o = tt.useRef(f.current), z = tt.useRef("off"), _ = tt.useRef(null), [x, G] = tt.useState(() => V0(f.current)), [C, E] = tt.useState(() => jt()), [H, q] = tt.useState("off");
  function W() {
    G(V0(o.current));
  }
  function pl(T) {
    z.current = T, q(T), o.current.fullscreen = T !== "off";
  }
  function Tl(T) {
    if (typeof document > "u") return;
    const S = document.documentElement, R = document.body;
    if (T) {
      _.current || (_.current = {
        htmlOverflow: S.style.overflow,
        bodyOverflow: R.style.overflow,
        htmlOverscroll: S.style.overscrollBehavior,
        bodyOverscroll: R.style.overscrollBehavior
      }), S.style.overflow = "hidden", R.style.overflow = "hidden", S.style.overscrollBehavior = "none", R.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const B = _.current;
    B && (S.style.overflow = B.htmlOverflow, R.style.overflow = B.bodyOverflow, S.style.overscrollBehavior = B.htmlOverscroll, R.style.overscrollBehavior = B.bodyOverscroll, _.current = null);
  }
  function Hl() {
    return typeof window > "u" || typeof navigator > "u" ? !1 : jt().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent));
  }
  function et() {
    typeof window > "u" || z.current !== "off" || window.innerWidth > 560 || window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const T = h.current;
        if (!T) return;
        const S = T.getBoundingClientRect(), R = Math.max(12, Math.round(window.innerHeight * 0.07)), B = Math.max(0, S.top + window.scrollY - R), L = document.scrollingElement ?? document.documentElement;
        L.scrollTop = B, window.scrollTo({ top: B, behavior: "auto" });
      });
    });
  }
  function wl(T) {
    const S = w0(T, o.current.fullscreen, o.current.compact);
    S.bestScore = o.current.bestScore, o.current = S, W();
  }
  function Ut() {
    wl("playing"), et();
  }
  function Ol(T) {
    const S = o.current;
    if (S.mode !== "playing") return;
    const R = S.tray[T] ?? null;
    S.selectedPieceId = R ? R.id : null, S.preview = null, S.message = R ? `Selected ${R.label}` : "No piece in that slot.", W();
  }
  function Ll(T) {
    z.current === "immersive" && (Tl(!1), pl("off"), o.current.compact = jt().width <= 560, o.current.drag = null, o.current.preview = null, o.current.message = T, E(jt()), W(), et());
  }
  function at() {
    Tl(!0), pl("immersive"), o.current.compact = !1, o.current.drag = null, o.current.preview = null, o.current.message = "Mobile fullscreen enabled.", E(jt()), W();
  }
  async function ql() {
    if (typeof document > "u") return;
    const T = v.current;
    if (T) {
      if (z.current === "immersive") {
        Ll("Exited mobile fullscreen.");
        return;
      }
      try {
        if (Q0(document) === T) {
          await Hh(document);
          return;
        }
        if (xh(T) && await Ch(T))
          return;
        if (Hl()) {
          at();
          return;
        }
      } catch {
        if (Hl()) {
          at();
          return;
        }
      }
      o.current.message = "Fullscreen is unavailable in this browser.", W();
    }
  }
  function k(T) {
    const S = h.current;
    if (!S) return null;
    const R = S.getBoundingClientRect();
    return !R.width || !R.height ? null : {
      x: (T.clientX - R.left) / R.width * zl,
      y: (T.clientY - R.top) / R.height * mt
    };
  }
  function Yl(T, S) {
    const R = o.current, B = Na(R.fullscreen, R.compact);
    for (let L = 0; L < B.slots.length; L += 1) {
      const cl = B.slots[L];
      if (T >= cl.x && T <= cl.x + cl.w && S >= cl.y && S <= cl.y + cl.h)
        return R.tray[L] ?? null;
    }
    return null;
  }
  tt.useEffect(() => {
    const T = h.current, S = T?.getContext("2d");
    if (!T || !S)
      return;
    let R = 0, B = performance.now();
    const L = (cl) => {
      const nl = Math.min(34, cl - B);
      B = cl, Z0(o.current, nl), K0(S, o.current), R = window.requestAnimationFrame(L);
    };
    return K0(S, o.current), R = window.requestAnimationFrame(L), () => window.cancelAnimationFrame(R);
  }, []), tt.useEffect(() => {
    const T = window;
    return T.render_game_to_text = () => $h(o.current), T.advanceTime = (S) => {
      let R = S;
      for (; R > 0; ) {
        const B = Math.min(R, 16);
        Z0(o.current, B), R -= B;
      }
      W();
    }, T.__drainVirtualTimePending = () => 0, () => {
      delete T.render_game_to_text, delete T.advanceTime, delete T.__drainVirtualTimePending;
    };
  }, []), tt.useEffect(() => {
    const T = () => {
      const B = z.current === "off" && jt().width <= 560;
      o.current.compact !== B && (o.current.compact = B, o.current.preview = null, o.current.drag = null, W()), E(jt());
    }, S = () => {
      const B = Q0(document) === v.current, L = z.current;
      B ? (Tl(!1), pl("native")) : L === "native" && pl("off"), o.current.compact = z.current === "off" && jt().width <= 560, o.current.preview = null, o.current.drag = null, E(jt()), W(), L === "native" && !B && et();
    }, R = () => {
      E(jt());
    };
    return window.addEventListener("resize", T), document.addEventListener("fullscreenchange", S), window.visualViewport?.addEventListener("resize", R), () => {
      window.removeEventListener("resize", T), document.removeEventListener("fullscreenchange", S), window.visualViewport?.removeEventListener("resize", R);
    };
  }, []), tt.useEffect(
    () => () => {
      Tl(!1);
    },
    []
  ), tt.useEffect(() => {
    const T = (S) => {
      if (S.code === "KeyF") {
        S.preventDefault(), ql();
        return;
      }
      if (S.code === "KeyN" || S.code === "Enter" && o.current.mode !== "playing") {
        S.preventDefault(), Ut();
        return;
      }
      if (S.code === "Digit1") {
        S.preventDefault(), Ol(0);
        return;
      }
      if (S.code === "Digit2") {
        S.preventDefault(), Ol(1);
        return;
      }
      if (S.code === "Digit3") {
        S.preventDefault(), Ol(2);
        return;
      }
      if (S.code === "Escape" && z.current === "immersive") {
        S.preventDefault(), Ll("Exited mobile fullscreen.");
        return;
      }
      S.code === "Escape" && o.current.selectedPieceId && (S.preventDefault(), o.current.selectedPieceId = null, o.current.preview = null, o.current.message = "Selection cleared.", W());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, []);
  const gt = zl / mt, ut = H === "immersive", Q = H === "off" && C.width <= 560, K = H !== "off" && C.width <= 820, St = Q && x.mode === "playing", Rt = !Q || !St, nt = Math.max(Q ? 280 : 320, C.width - (H === "off" ? Q ? 8 : 40 : K ? 12 : 48)), M = H !== "off" ? Math.max(420, C.height - (K ? 184 : 270)) : Q ? Math.max(360, C.height - 168) : 980, N = Math.min(H !== "off" ? 920 : Q ? 404 : 760, nt, M * gt), V = H !== "off" ? K ? "Tap or drag from the tray, then place pieces directly onto the board. Rows and columns still clear exactly the same." : "Drag from the tray or tap 1, 2, 3 to select a piece. Fill rows and columns to blast them away." : Q ? "Tap a tray piece, then tap the board. Clear rows and columns to keep the run alive." : "Classic endless board-clearing mode with a closer Block Blast piece set and a fullscreen-friendly stage.", fl = x.mode === "gameover" ? "Run over. Start a new one from the top bar." : Q ? "Tap a tray piece, then tap the board. Use Fullscreen for more room." : H !== "off" && K ? "Fullscreen now uses safe-area spacing and a mobile overlay fallback when the browser blocks native fullscreen." : "Tip: tap 1, 2, or 3 to grab a tray slot instantly.", d = {
    width: "100%",
    maxWidth: H !== "off" ? "100vw" : 1040,
    minHeight: H !== "off" ? "100dvh" : void 0,
    height: ut ? "100dvh" : void 0,
    boxSizing: "border-box",
    borderRadius: H !== "off" ? 0 : Q ? 24 : 32,
    padding: H !== "off" ? `calc(env(safe-area-inset-top, 0px) + ${K ? 8 : 12}px) calc(env(safe-area-inset-right, 0px) + ${K ? 8 : 18}px) calc(env(safe-area-inset-bottom, 0px) + ${K ? 12 : 18}px) calc(env(safe-area-inset-left, 0px) + ${K ? 8 : 18}px)` : Q ? "12px 10px 14px" : "20px",
    background: "radial-gradient(circle at top left, rgba(139, 224, 255, 0.2), transparent 32%), linear-gradient(180deg, #17306d 0%, #0c173d 100%)",
    boxShadow: H !== "off" ? "none" : Q ? "0 16px 36px rgba(4, 14, 39, 0.28)" : "0 24px 60px rgba(4, 14, 39, 0.35)",
    display: "flex",
    flexDirection: "column",
    gap: H !== "off" && K ? 10 : Q ? 8 : 14,
    color: "#eff6ff",
    overflowX: "hidden",
    overflowY: H !== "off" ? "auto" : "hidden",
    WebkitOverflowScrolling: "touch",
    overscrollBehavior: H !== "off" ? "contain" : "auto"
  }, D = {
    minWidth: Q || K ? 0 : 108,
    padding: Q || K ? "8px 10px" : "12px 14px",
    borderRadius: Q || K ? 16 : 20,
    background: "rgba(255,255,255,0.11)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"
  };
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      style: {
        minHeight: ut ? "100dvh" : "100%",
        display: "flex",
        justifyContent: "center",
        padding: H !== "off" ? 0 : Q ? "8px 4px 20px" : "24px 12px 48px",
        background: H !== "off" ? "#08132d" : "transparent",
        position: ut ? "fixed" : "relative",
        inset: ut ? 0 : void 0,
        zIndex: ut ? 9999 : void 0,
        overflow: ut ? "hidden" : "visible"
      },
      children: /* @__PURE__ */ w.jsxs("section", { ref: v, style: d, children: [
        /* @__PURE__ */ w.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: H !== "off" || Q ? "flex-start" : "center",
              gap: K ? 10 : Q ? 8 : 16,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ w.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
                /* @__PURE__ */ w.jsx("div", { style: { fontSize: H !== "off" ? K ? 24 : 28 : Q ? 24 : 30, fontWeight: 800, letterSpacing: 0.3 }, children: "Block Blast" }),
                Rt ? /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 12 : 14, lineHeight: 1.42, color: "rgba(235,244,255,0.82)", maxWidth: K ? 460 : Q ? 420 : 560 }, children: V }) : null
              ] }),
              /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", gap: K || Q ? 8 : 10, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ w.jsx("button", { onClick: Ut, style: { ...Ec(!0), padding: K || Q ? "10px 13px" : void 0, fontSize: K || Q ? 13 : void 0 }, children: x.mode === "playing" ? "New Run" : "Start Run" }),
                St ? null : /* @__PURE__ */ w.jsx("button", { onClick: () => wl("title"), style: { ...Ec(!1), padding: K || Q ? "10px 13px" : void 0, fontSize: K || Q ? 13 : void 0 }, children: "Title" }),
                /* @__PURE__ */ w.jsx("button", { onClick: () => {
                  ql();
                }, style: { ...Ec(!1), padding: K || Q ? "10px 13px" : void 0, fontSize: K || Q ? 13 : void 0 }, children: x.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ w.jsxs("div", { style: Q || K ? { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 } : { display: "flex", flexWrap: "wrap", gap: 12 }, children: [
          /* @__PURE__ */ w.jsxs("div", { style: D, children: [
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Score" }),
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 20 : 26, fontWeight: 800 }, children: x.score })
          ] }),
          /* @__PURE__ */ w.jsxs("div", { style: D, children: [
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Best" }),
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 20 : 26, fontWeight: 800 }, children: x.bestScore })
          ] }),
          St ? null : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
            /* @__PURE__ */ w.jsxs("div", { style: D, children: [
              /* @__PURE__ */ w.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Combo" }),
              /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 20 : 26, fontWeight: 800 }, children: x.combo })
            ] }),
            /* @__PURE__ */ w.jsxs("div", { style: D, children: [
              /* @__PURE__ */ w.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Playable" }),
              /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 20 : 26, fontWeight: 800 }, children: x.movesAvailable })
            ] })
          ] }),
          /* @__PURE__ */ w.jsxs("div", { style: { ...D, flex: 1, minWidth: Q || K ? 0 : 220, gridColumn: Q || K ? "1 / -1" : void 0 }, children: [
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
            /* @__PURE__ */ w.jsx("div", { style: { fontSize: K || Q ? 14 : 16, fontWeight: 700, minHeight: K || Q ? 22 : 28 }, children: x.selectedPiece ? `${x.selectedPiece} selected.` : x.message })
          ] })
        ] }),
        /* @__PURE__ */ w.jsx("div", { style: { width: N, maxWidth: "100%", alignSelf: "center", aspectRatio: `${zl} / ${mt}` }, children: /* @__PURE__ */ w.jsx(
          "canvas",
          {
            ref: h,
            width: zl,
            height: mt,
            style: {
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: x.fullscreen ? 26 : Q ? 22 : 28,
              touchAction: "none",
              boxShadow: "0 22px 40px rgba(3, 10, 28, 0.42)",
              cursor: o.current.drag ? "grabbing" : "pointer"
            },
            onPointerDown: (T) => {
              const S = o.current;
              if (S.mode !== "playing") return;
              const R = k(T);
              if (!R) return;
              const B = Yl(R.x, R.y);
              B && (S.selectedPieceId = B.id, S.drag = { pieceId: B.id, startX: R.x, startY: R.y, x: R.x, y: R.y }, S.preview = null, h.current?.setPointerCapture?.(T.pointerId), W());
            },
            onPointerMove: (T) => {
              const S = o.current;
              if (!S.drag) return;
              const R = k(T);
              if (!R) return;
              S.drag.x = R.x, S.drag.y = R.y;
              const B = S.tray.find((L) => L.id === S.drag?.pieceId) ?? null;
              S.preview = B ? Tc(Na(S.fullscreen, S.compact), B, R.x, R.y, S.board) : null;
            },
            onPointerUp: (T) => {
              const S = o.current, R = k(T);
              if (!R) return;
              if (S.drag) {
                const nl = S.tray.find((Ba) => Ba.id === S.drag?.pieceId) ?? null, Ue = Math.hypot(R.x - S.drag.startX, R.y - S.drag.startY) > 14, Re = nl ? Tc(Na(S.fullscreen, S.compact), nl, R.x, R.y, S.board) : null;
                Re?.canPlace ? L0(S, Re) : (S.drag = null, S.preview = null, !Ue && nl ? (S.selectedPieceId = nl.id, S.message = `Selected ${nl.label}`) : S.message = "Drop a piece onto the board."), h.current?.releasePointerCapture?.(T.pointerId), W();
                return;
              }
              if (S.mode !== "playing") return;
              const B = Yl(R.x, R.y);
              if (B) {
                S.selectedPieceId = B.id, S.preview = null, S.message = `Selected ${B.label}`, W();
                return;
              }
              const L = S.selectedPieceId ? S.tray.find((nl) => nl.id === S.selectedPieceId) ?? null : null;
              if (!L) return;
              const cl = Tc(Na(S.fullscreen, S.compact), L, R.x, R.y, S.board);
              cl?.canPlace ? L0(S, cl) : (S.message = "That placement does not fit.", S.preview = cl), W();
            },
            onPointerCancel: () => {
              const T = o.current;
              T.drag = null, T.preview = null, W();
            }
          }
        ) }),
        /* @__PURE__ */ w.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              gap: Q ? 6 : 12,
              alignItems: Q ? "flex-start" : "center",
              flexWrap: "wrap",
              color: "rgba(239,246,255,0.86)",
              fontSize: Q ? 12 : 14
            },
            children: [
              /* @__PURE__ */ w.jsx("div", { children: St ? "Fullscreen gives the tray more room if you want it." : fl }),
              /* @__PURE__ */ w.jsx("div", { children: `Placements ${x.placements} • Clears ${x.clears}` })
            ]
          }
        ),
        x.fullscreen ? null : Q && x.mode !== "playing" ? /* @__PURE__ */ w.jsxs(
          "div",
          {
            style: {
              borderRadius: 18,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
            },
            children: [
              /* @__PURE__ */ w.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Mobile Tips" }),
              /* @__PURE__ */ w.jsxs("div", { style: { fontSize: 13, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                "Tap a tray piece, then tap the board to place it. Use ",
                /* @__PURE__ */ w.jsx("code", { children: "Fullscreen" }),
                " for a larger board, and press ",
                /* @__PURE__ */ w.jsx("code", { children: "N" }),
                " to restart quickly."
              ] })
            ]
          }
        ) : /* @__PURE__ */ w.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
          /* @__PURE__ */ w.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ w.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Closer Piece Set" }),
                /* @__PURE__ */ w.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Singles, short bars, the mini corners, classic tetromino-style shapes, long five-bars, the 2x3 rectangle, and the tall T are all in the pool now." })
              ]
            }
          ),
          /* @__PURE__ */ w.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ w.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Fullscreen Cleanup" }),
                /* @__PURE__ */ w.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The stage header, score chips, and controls all live inside the fullscreen element now, so the page keeps its shape instead of leaving controls stranded outside." })
              ]
            }
          ),
          /* @__PURE__ */ w.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ w.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
                /* @__PURE__ */ w.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                  "Drag pieces from the tray, or tap a tray piece and then the board. Press ",
                  /* @__PURE__ */ w.jsx("code", { children: "F" }),
                  " for fullscreen and ",
                  /* @__PURE__ */ w.jsx("code", { children: "N" }),
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
const k0 = document.getElementById("block-blast-root");
if (!k0)
  throw new Error("Block Blast export root element was not found.");
document.title = "Block Blast | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("block-blast-export-body");
Rh.createRoot(k0).render(/* @__PURE__ */ w.jsx(Fh, {}));
