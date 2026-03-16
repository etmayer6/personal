var to = { exports: {} }, tu = {};
var m0;
function u1() {
  if (m0) return tu;
  m0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(r, f, E) {
    var R = null;
    if (E !== void 0 && (R = "" + E), f.key !== void 0 && (R = "" + f.key), "key" in f) {
      E = {};
      for (var q in f)
        q !== "key" && (E[q] = f[q]);
    } else E = f;
    return f = E.ref, {
      $$typeof: i,
      type: r,
      key: R,
      ref: f !== void 0 ? f : null,
      props: E
    };
  }
  return tu.Fragment = s, tu.jsx = d, tu.jsxs = d, tu;
}
var y0;
function i1() {
  return y0 || (y0 = 1, to.exports = u1()), to.exports;
}
var V = i1(), no = { exports: {} }, nu = {}, ao = { exports: {} }, uo = {};
var g0;
function c1() {
  return g0 || (g0 = 1, (function(i) {
    function s(_, x) {
      var P = _.length;
      _.push(x);
      e: for (; 0 < P; ) {
        var ge = P - 1 >>> 1, be = _[ge];
        if (0 < f(be, x))
          _[ge] = x, _[P] = be, P = ge;
        else break e;
      }
    }
    function d(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var x = _[0], P = _.pop();
      if (P !== x) {
        _[0] = P;
        e: for (var ge = 0, be = _.length, y = be >>> 1; ge < y; ) {
          var U = 2 * (ge + 1) - 1, G = _[U], L = U + 1, J = _[L];
          if (0 > f(G, P))
            L < be && 0 > f(J, G) ? (_[ge] = J, _[L] = P, ge = L) : (_[ge] = G, _[U] = P, ge = U);
          else if (L < be && 0 > f(J, P))
            _[ge] = J, _[L] = P, ge = L;
          else break e;
        }
      }
      return x;
    }
    function f(_, x) {
      var P = _.sortIndex - x.sortIndex;
      return P !== 0 ? P : _.id - x.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      i.unstable_now = function() {
        return E.now();
      };
    } else {
      var R = Date, q = R.now();
      i.unstable_now = function() {
        return R.now() - q;
      };
    }
    var v = [], T = [], z = 1, N = null, M = 3, te = !1, X = !1, $ = !1, Ve = !1, ye = typeof setTimeout == "function" ? setTimeout : null, xe = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    function De(_) {
      for (var x = d(T); x !== null; ) {
        if (x.callback === null) r(T);
        else if (x.startTime <= _)
          r(T), x.sortIndex = x.expirationTime, s(v, x);
        else break;
        x = d(T);
      }
    }
    function fl(_) {
      if ($ = !1, De(_), !X)
        if (d(v) !== null)
          X = !0, Ke || (Ke = !0, Ie());
        else {
          var x = d(T);
          x !== null && hl(fl, x.startTime - _);
        }
    }
    var Ke = !1, ce = -1, Re = 5, ol = -1;
    function Tl() {
      return Ve ? !0 : !(i.unstable_now() - ol < Re);
    }
    function rl() {
      if (Ve = !1, Ke) {
        var _ = i.unstable_now();
        ol = _;
        var x = !0;
        try {
          e: {
            X = !1, $ && ($ = !1, xe(ce), ce = -1), te = !0;
            var P = M;
            try {
              l: {
                for (De(_), N = d(v); N !== null && !(N.expirationTime > _ && Tl()); ) {
                  var ge = N.callback;
                  if (typeof ge == "function") {
                    N.callback = null, M = N.priorityLevel;
                    var be = ge(
                      N.expirationTime <= _
                    );
                    if (_ = i.unstable_now(), typeof be == "function") {
                      N.callback = be, De(_), x = !0;
                      break l;
                    }
                    N === d(v) && r(v), De(_);
                  } else r(v);
                  N = d(v);
                }
                if (N !== null) x = !0;
                else {
                  var y = d(T);
                  y !== null && hl(
                    fl,
                    y.startTime - _
                  ), x = !1;
                }
              }
              break e;
            } finally {
              N = null, M = P, te = !1;
            }
            x = void 0;
          }
        } finally {
          x ? Ie() : Ke = !1;
        }
      }
    }
    var Ie;
    if (typeof Ee == "function")
      Ie = function() {
        Ee(rl);
      };
    else if (typeof MessageChannel < "u") {
      var Kl = new MessageChannel(), Dl = Kl.port2;
      Kl.port1.onmessage = rl, Ie = function() {
        Dl.postMessage(null);
      };
    } else
      Ie = function() {
        ye(rl, 0);
      };
    function hl(_, x) {
      ce = ye(function() {
        _(i.unstable_now());
      }, x);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, i.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Re = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, i.unstable_next = function(_) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = M;
      }
      var P = M;
      M = x;
      try {
        return _();
      } finally {
        M = P;
      }
    }, i.unstable_requestPaint = function() {
      Ve = !0;
    }, i.unstable_runWithPriority = function(_, x) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = M;
      M = _;
      try {
        return x();
      } finally {
        M = P;
      }
    }, i.unstable_scheduleCallback = function(_, x, P) {
      var ge = i.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ge + P : ge) : P = ge, _) {
        case 1:
          var be = -1;
          break;
        case 2:
          be = 250;
          break;
        case 5:
          be = 1073741823;
          break;
        case 4:
          be = 1e4;
          break;
        default:
          be = 5e3;
      }
      return be = P + be, _ = {
        id: z++,
        callback: x,
        priorityLevel: _,
        startTime: P,
        expirationTime: be,
        sortIndex: -1
      }, P > ge ? (_.sortIndex = P, s(T, _), d(v) === null && _ === d(T) && ($ ? (xe(ce), ce = -1) : $ = !0, hl(fl, P - ge))) : (_.sortIndex = be, s(v, _), X || te || (X = !0, Ke || (Ke = !0, Ie()))), _;
    }, i.unstable_shouldYield = Tl, i.unstable_wrapCallback = function(_) {
      var x = M;
      return function() {
        var P = M;
        M = x;
        try {
          return _.apply(this, arguments);
        } finally {
          M = P;
        }
      };
    };
  })(uo)), uo;
}
var v0;
function f1() {
  return v0 || (v0 = 1, ao.exports = c1()), ao.exports;
}
var io = { exports: {} }, ne = {};
var S0;
function o1() {
  if (S0) return ne;
  S0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), M = Symbol.iterator;
  function te(y) {
    return y === null || typeof y != "object" ? null : (y = M && y[M] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var X = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $ = Object.assign, Ve = {};
  function ye(y, U, G) {
    this.props = y, this.context = U, this.refs = Ve, this.updater = G || X;
  }
  ye.prototype.isReactComponent = {}, ye.prototype.setState = function(y, U) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, U, "setState");
  }, ye.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function xe() {
  }
  xe.prototype = ye.prototype;
  function Ee(y, U, G) {
    this.props = y, this.context = U, this.refs = Ve, this.updater = G || X;
  }
  var De = Ee.prototype = new xe();
  De.constructor = Ee, $(De, ye.prototype), De.isPureReactComponent = !0;
  var fl = Array.isArray;
  function Ke() {
  }
  var ce = { H: null, A: null, T: null, S: null }, Re = Object.prototype.hasOwnProperty;
  function ol(y, U, G) {
    var L = G.ref;
    return {
      $$typeof: i,
      type: y,
      key: U,
      ref: L !== void 0 ? L : null,
      props: G
    };
  }
  function Tl(y, U) {
    return ol(y.type, U, y.props);
  }
  function rl(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function Ie(y) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(G) {
      return U[G];
    });
  }
  var Kl = /\/+/g;
  function Dl(y, U) {
    return typeof y == "object" && y !== null && y.key != null ? Ie("" + y.key) : U.toString(36);
  }
  function hl(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Ke, Ke) : (y.status = "pending", y.then(
          function(U) {
            y.status === "pending" && (y.status = "fulfilled", y.value = U);
          },
          function(U) {
            y.status === "pending" && (y.status = "rejected", y.reason = U);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function _(y, U, G, L, J) {
    var F = typeof y;
    (F === "undefined" || F === "boolean") && (y = null);
    var ie = !1;
    if (y === null) ie = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case s:
              ie = !0;
              break;
            case z:
              return ie = y._init, _(
                ie(y._payload),
                U,
                G,
                L,
                J
              );
          }
      }
    if (ie)
      return J = J(y), ie = L === "" ? "." + Dl(y, 0) : L, fl(J) ? (G = "", ie != null && (G = ie.replace(Kl, "$&/") + "/"), _(J, U, G, "", function(Jt) {
        return Jt;
      })) : J != null && (rl(J) && (J = Tl(
        J,
        G + (J.key == null || y && y.key === J.key ? "" : ("" + J.key).replace(
          Kl,
          "$&/"
        ) + "/") + ie
      )), U.push(J)), 1;
    ie = 0;
    var Z = L === "" ? "." : L + ":";
    if (fl(y))
      for (var Ne = 0; Ne < y.length; Ne++)
        L = y[Ne], F = Z + Dl(L, Ne), ie += _(
          L,
          U,
          G,
          F,
          J
        );
    else if (Ne = te(y), typeof Ne == "function")
      for (y = Ne.call(y), Ne = 0; !(L = y.next()).done; )
        L = L.value, F = Z + Dl(L, Ne++), ie += _(
          L,
          U,
          G,
          F,
          J
        );
    else if (F === "object") {
      if (typeof y.then == "function")
        return _(
          hl(y),
          U,
          G,
          L,
          J
        );
      throw U = String(y), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function x(y, U, G) {
    if (y == null) return y;
    var L = [], J = 0;
    return _(y, L, "", "", function(F) {
      return U.call(G, F, J++);
    }), L;
  }
  function P(y) {
    if (y._status === -1) {
      var U = y._result;
      U = U(), U.then(
        function(G) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = G);
        },
        function(G) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = G);
        }
      ), y._status === -1 && (y._status = 0, y._result = U);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, be = {
    map: x,
    forEach: function(y, U, G) {
      x(
        y,
        function() {
          U.apply(this, arguments);
        },
        G
      );
    },
    count: function(y) {
      var U = 0;
      return x(y, function() {
        U++;
      }), U;
    },
    toArray: function(y) {
      return x(y, function(U) {
        return U;
      }) || [];
    },
    only: function(y) {
      if (!rl(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return ne.Activity = N, ne.Children = be, ne.Component = ye, ne.Fragment = d, ne.Profiler = f, ne.PureComponent = Ee, ne.StrictMode = r, ne.Suspense = v, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ce.H.useMemoCache(y);
    }
  }, ne.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(y, U, G) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var L = $({}, y.props), J = y.key;
    if (U != null)
      for (F in U.key !== void 0 && (J = "" + U.key), U)
        !Re.call(U, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && U.ref === void 0 || (L[F] = U[F]);
    var F = arguments.length - 2;
    if (F === 1) L.children = G;
    else if (1 < F) {
      for (var ie = Array(F), Z = 0; Z < F; Z++)
        ie[Z] = arguments[Z + 2];
      L.children = ie;
    }
    return ol(y.type, J, L);
  }, ne.createContext = function(y) {
    return y = {
      $$typeof: R,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: E,
      _context: y
    }, y;
  }, ne.createElement = function(y, U, G) {
    var L, J = {}, F = null;
    if (U != null)
      for (L in U.key !== void 0 && (F = "" + U.key), U)
        Re.call(U, L) && L !== "key" && L !== "__self" && L !== "__source" && (J[L] = U[L]);
    var ie = arguments.length - 2;
    if (ie === 1) J.children = G;
    else if (1 < ie) {
      for (var Z = Array(ie), Ne = 0; Ne < ie; Ne++)
        Z[Ne] = arguments[Ne + 2];
      J.children = Z;
    }
    if (y && y.defaultProps)
      for (L in ie = y.defaultProps, ie)
        J[L] === void 0 && (J[L] = ie[L]);
    return ol(y, F, J);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(y) {
    return { $$typeof: q, render: y };
  }, ne.isValidElement = rl, ne.lazy = function(y) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: y },
      _init: P
    };
  }, ne.memo = function(y, U) {
    return {
      $$typeof: T,
      type: y,
      compare: U === void 0 ? null : U
    };
  }, ne.startTransition = function(y) {
    var U = ce.T, G = {};
    ce.T = G;
    try {
      var L = y(), J = ce.S;
      J !== null && J(G, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(Ke, ge);
    } catch (F) {
      ge(F);
    } finally {
      U !== null && G.types !== null && (U.types = G.types), ce.T = U;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return ce.H.useCacheRefresh();
  }, ne.use = function(y) {
    return ce.H.use(y);
  }, ne.useActionState = function(y, U, G) {
    return ce.H.useActionState(y, U, G);
  }, ne.useCallback = function(y, U) {
    return ce.H.useCallback(y, U);
  }, ne.useContext = function(y) {
    return ce.H.useContext(y);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(y, U) {
    return ce.H.useDeferredValue(y, U);
  }, ne.useEffect = function(y, U) {
    return ce.H.useEffect(y, U);
  }, ne.useEffectEvent = function(y) {
    return ce.H.useEffectEvent(y);
  }, ne.useId = function() {
    return ce.H.useId();
  }, ne.useImperativeHandle = function(y, U, G) {
    return ce.H.useImperativeHandle(y, U, G);
  }, ne.useInsertionEffect = function(y, U) {
    return ce.H.useInsertionEffect(y, U);
  }, ne.useLayoutEffect = function(y, U) {
    return ce.H.useLayoutEffect(y, U);
  }, ne.useMemo = function(y, U) {
    return ce.H.useMemo(y, U);
  }, ne.useOptimistic = function(y, U) {
    return ce.H.useOptimistic(y, U);
  }, ne.useReducer = function(y, U, G) {
    return ce.H.useReducer(y, U, G);
  }, ne.useRef = function(y) {
    return ce.H.useRef(y);
  }, ne.useState = function(y) {
    return ce.H.useState(y);
  }, ne.useSyncExternalStore = function(y, U, G) {
    return ce.H.useSyncExternalStore(
      y,
      U,
      G
    );
  }, ne.useTransition = function() {
    return ce.H.useTransition();
  }, ne.version = "19.2.4", ne;
}
var b0;
function ro() {
  return b0 || (b0 = 1, io.exports = o1()), io.exports;
}
var co = { exports: {} }, cl = {};
var p0;
function r1() {
  if (p0) return cl;
  p0 = 1;
  var i = ro();
  function s(v) {
    var T = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        T += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return "Minified React error #" + v + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var r = {
    d: {
      f: d,
      r: function() {
        throw Error(s(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, f = /* @__PURE__ */ Symbol.for("react.portal");
  function E(v, T, z) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: N == null ? null : "" + N,
      children: v,
      containerInfo: T,
      implementation: z
    };
  }
  var R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function q(v, T) {
    if (v === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, cl.createPortal = function(v, T) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(s(299));
    return E(v, T, null, z);
  }, cl.flushSync = function(v) {
    var T = R.T, z = r.p;
    try {
      if (R.T = null, r.p = 2, v) return v();
    } finally {
      R.T = T, r.p = z, r.d.f();
    }
  }, cl.preconnect = function(v, T) {
    typeof v == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, r.d.C(v, T));
  }, cl.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, cl.preinit = function(v, T) {
    if (typeof v == "string" && T && typeof T.as == "string") {
      var z = T.as, N = q(z, T.crossOrigin), M = typeof T.integrity == "string" ? T.integrity : void 0, te = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      z === "style" ? r.d.S(
        v,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: N,
          integrity: M,
          fetchPriority: te
        }
      ) : z === "script" && r.d.X(v, {
        crossOrigin: N,
        integrity: M,
        fetchPriority: te,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, cl.preinitModule = function(v, T) {
    if (typeof v == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var z = q(
            T.as,
            T.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: z,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && r.d.M(v);
  }, cl.preload = function(v, T) {
    if (typeof v == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var z = T.as, N = q(z, T.crossOrigin);
      r.d.L(v, z, {
        crossOrigin: N,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, cl.preloadModule = function(v, T) {
    if (typeof v == "string")
      if (T) {
        var z = q(T.as, T.crossOrigin);
        r.d.m(v, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: z,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else r.d.m(v);
  }, cl.requestFormReset = function(v) {
    r.d.r(v);
  }, cl.unstable_batchedUpdates = function(v, T) {
    return v(T);
  }, cl.useFormState = function(v, T, z) {
    return R.H.useFormState(v, T, z);
  }, cl.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, cl.version = "19.2.4", cl;
}
var T0;
function s1() {
  if (T0) return co.exports;
  T0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), co.exports = r1(), co.exports;
}
var E0;
function d1() {
  if (E0) return nu;
  E0 = 1;
  var i = f1(), s = ro(), d = s1();
  function r(e) {
    var l = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function E(e) {
    var l = e, t = e;
    if (e.alternate) for (; l.return; ) l = l.return;
    else {
      e = l;
      do
        l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
      while (e);
    }
    return l.tag === 3 ? t : null;
  }
  function R(e) {
    if (e.tag === 13) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function q(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (E(e) !== e)
      throw Error(r(188));
  }
  function T(e) {
    var l = e.alternate;
    if (!l) {
      if (l = E(e), l === null) throw Error(r(188));
      return l !== e ? null : e;
    }
    for (var t = e, n = l; ; ) {
      var a = t.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (n = a.return, n !== null) {
          t = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === t) return v(a), e;
          if (u === n) return v(a), l;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (t.return !== n.return) t = a, n = u;
      else {
        for (var c = !1, o = a.child; o; ) {
          if (o === t) {
            c = !0, t = a, n = u;
            break;
          }
          if (o === n) {
            c = !0, n = a, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = u.child; o; ) {
            if (o === t) {
              c = !0, t = u, n = a;
              break;
            }
            if (o === n) {
              c = !0, n = u, t = a;
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (t.alternate !== n) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? e : l;
  }
  function z(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = z(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, M = /* @__PURE__ */ Symbol.for("react.element"), te = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), Ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), ye = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.consumer"), Ee = /* @__PURE__ */ Symbol.for("react.context"), De = /* @__PURE__ */ Symbol.for("react.forward_ref"), fl = /* @__PURE__ */ Symbol.for("react.suspense"), Ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), ce = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), ol = /* @__PURE__ */ Symbol.for("react.activity"), Tl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rl = Symbol.iterator;
  function Ie(e) {
    return e === null || typeof e != "object" ? null : (e = rl && e[rl] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Kl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Dl(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Kl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case ye:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case fl:
        return "Suspense";
      case Ke:
        return "SuspenseList";
      case ol:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case X:
          return "Portal";
        case Ee:
          return e.displayName || "Context";
        case xe:
          return (e._context.displayName || "Context") + ".Consumer";
        case De:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ce:
          return l = e.displayName || null, l !== null ? l : Dl(e.type) || "Memo";
        case Re:
          l = e._payload, e = e._init;
          try {
            return Dl(e(l));
          } catch {
          }
      }
    return null;
  }
  var hl = Array.isArray, _ = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], be = -1;
  function y(e) {
    return { current: e };
  }
  function U(e) {
    0 > be || (e.current = ge[be], ge[be] = null, be--);
  }
  function G(e, l) {
    be++, ge[be] = e.current, e.current = l;
  }
  var L = y(null), J = y(null), F = y(null), ie = y(null);
  function Z(e, l) {
    switch (G(F, l), G(J, e), G(L, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? xd(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = xd(l), e = qd(l, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    U(L), G(L, e);
  }
  function Ne() {
    U(L), U(J), U(F);
  }
  function Jt(e) {
    e.memoizedState !== null && G(ie, e);
    var l = L.current, t = qd(l, e.type);
    l !== t && (G(J, e), G(L, t));
  }
  function gn(e) {
    J.current === e && (U(L), U(J)), ie.current === e && (U(ie), Ia._currentValue = P);
  }
  var ca, vn;
  function Pl(e) {
    if (ca === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        ca = l && l[1] || "", vn = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ca + e + vn;
  }
  var fa = !1;
  function Sn(e, l) {
    if (!e || fa) return "";
    fa = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var w = function() {
                throw Error();
              };
              if (Object.defineProperty(w.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(w, []);
                } catch (A) {
                  var p = A;
                }
                Reflect.construct(e, [], w);
              } else {
                try {
                  w.call();
                } catch (A) {
                  p = A;
                }
                e.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                p = A;
              }
              (w = e()) && typeof w.catch == "function" && w.catch(function() {
              });
            }
          } catch (A) {
            if (A && p && typeof A.stack == "string")
              return [A.stack, p.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), c = u[0], o = u[1];
      if (c && o) {
        var h = c.split(`
`), b = o.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < b.length && !b[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === b.length)
          for (n = h.length - 1, a = b.length - 1; 1 <= n && 0 <= a && h[n] !== b[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== b[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== b[a]) {
                  var C = `
` + h[n].replace(" at new ", " at ");
                  return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      fa = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Pl(t) : "";
  }
  function du(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pl(e.type);
      case 16:
        return Pl("Lazy");
      case 13:
        return e.child !== l && l !== null ? Pl("Suspense Fallback") : Pl("Suspense");
      case 19:
        return Pl("SuspenseList");
      case 0:
      case 15:
        return Sn(e.type, !1);
      case 11:
        return Sn(e.type.render, !1);
      case 1:
        return Sn(e.type, !0);
      case 31:
        return Pl("Activity");
      default:
        return "";
    }
  }
  function hu(e) {
    try {
      var l = "", t = null;
      do
        l += du(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var oa = Object.prototype.hasOwnProperty, ra = i.unstable_scheduleCallback, O = i.unstable_cancelCallback, B = i.unstable_shouldYield, D = i.unstable_requestPaint, Y = i.unstable_now, k = i.unstable_getCurrentPriorityLevel, j = i.unstable_ImmediatePriority, I = i.unstable_UserBlockingPriority, le = i.unstable_NormalPriority, _e = i.unstable_LowPriority, Jl = i.unstable_IdlePriority, Be = i.log, bn = i.unstable_setDisableYieldValue, Ll = null, ve = null;
  function il(e) {
    if (typeof Be == "function" && bn(e), ve && typeof ve.setStrictMode == "function")
      try {
        ve.setStrictMode(Ll, e);
      } catch {
      }
  }
  var qe = Math.clz32 ? Math.clz32 : V0, pn = Math.log, Z0 = Math.LN2;
  function V0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pn(e) / Z0 | 0) | 0;
  }
  var mu = 256, yu = 262144, gu = 4194304;
  function kt(e) {
    var l = e & 42;
    if (l !== 0) return l;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function vu(e, l, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = kt(n) : (c &= o, c !== 0 ? a = kt(c) : t || (t = o & ~e, t !== 0 && (a = kt(t))))) : (o = n & ~u, o !== 0 ? a = kt(o) : c !== 0 ? a = kt(c) : t || (t = n & ~e, t !== 0 && (a = kt(t)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, t = l & -l, u >= t || u === 32 && (t & 4194048) !== 0) ? l : a;
  }
  function sa(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function K0(e, l) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function So() {
    var e = gu;
    return gu <<= 1, (gu & 62914560) === 0 && (gu = 4194304), e;
  }
  function Qi(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function da(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function J0(e, l, t, n, a, u) {
    var c = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var o = e.entanglements, h = e.expirationTimes, b = e.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var C = 31 - qe(t), w = 1 << C;
      o[C] = 0, h[C] = -1;
      var p = b[C];
      if (p !== null)
        for (b[C] = null, C = 0; C < p.length; C++) {
          var A = p[C];
          A !== null && (A.lane &= -536870913);
        }
      t &= ~w;
    }
    n !== 0 && bo(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~l));
  }
  function bo(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var n = 31 - qe(l);
    e.entangledLanes |= l, e.entanglements[n] = e.entanglements[n] | 1073741824 | t & 261930;
  }
  function po(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var n = 31 - qe(t), a = 1 << n;
      a & l | e[n] & l && (e[n] |= l), t &= ~a;
    }
  }
  function To(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : Zi(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function Zi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Vi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Eo() {
    var e = x.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : c0(e.type));
  }
  function Ao(e, l) {
    var t = x.p;
    try {
      return x.p = e, l();
    } finally {
      x.p = t;
    }
  }
  var Tt = Math.random().toString(36).slice(2), ll = "__reactFiber$" + Tt, ml = "__reactProps$" + Tt, Tn = "__reactContainer$" + Tt, Ki = "__reactEvents$" + Tt, k0 = "__reactListeners$" + Tt, W0 = "__reactHandles$" + Tt, zo = "__reactResources$" + Tt, ha = "__reactMarker$" + Tt;
  function Ji(e) {
    delete e[ll], delete e[ml], delete e[Ki], delete e[k0], delete e[W0];
  }
  function En(e) {
    var l = e[ll];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[Tn] || t[ll]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = Vd(e); e !== null; ) {
            if (t = e[ll]) return t;
            e = Vd(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function An(e) {
    if (e = e[ll] || e[Tn]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function ma(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(r(33));
  }
  function zn(e) {
    var l = e[zo];
    return l || (l = e[zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Pe(e) {
    e[ha] = !0;
  }
  var Mo = /* @__PURE__ */ new Set(), Oo = {};
  function Wt(e, l) {
    Mn(e, l), Mn(e + "Capture", l);
  }
  function Mn(e, l) {
    for (Oo[e] = l, e = 0; e < l.length; e++)
      Mo.add(l[e]);
  }
  var $0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Co = {}, _o = {};
  function F0(e) {
    return oa.call(_o, e) ? !0 : oa.call(Co, e) ? !1 : $0.test(e) ? _o[e] = !0 : (Co[e] = !0, !1);
  }
  function Su(e, l, t) {
    if (F0(l))
      if (t === null) e.removeAttribute(l);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(l);
            return;
          case "boolean":
            var n = l.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(l);
              return;
            }
        }
        e.setAttribute(l, "" + t);
      }
  }
  function bu(e, l, t) {
    if (t === null) e.removeAttribute(l);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttribute(l, "" + t);
    }
  }
  function et(e, l, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(l, t, "" + n);
    }
  }
  function Hl(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Do(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function I0(e, l, t) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      l
    );
    if (!e.hasOwnProperty(l) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(c) {
          t = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, l, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c) {
          t = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[l];
        }
      };
    }
  }
  function ki(e) {
    if (!e._valueTracker) {
      var l = Do(e) ? "checked" : "value";
      e._valueTracker = I0(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function Ho(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), n = "";
    return e && (n = Do(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== t ? (l.setValue(e), !0) : !1;
  }
  function pu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var P0 = /[\n"\\]/g;
  function wl(e) {
    return e.replace(
      P0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wi(e, l, t, n, a, u, c, o) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + Hl(l)) : e.value !== "" + Hl(l) && (e.value = "" + Hl(l)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), l != null ? $i(e, c, Hl(l)) : t != null ? $i(e, c, Hl(t)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + Hl(o) : e.removeAttribute("name");
  }
  function wo(e, l, t, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), l != null || t != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        ki(e);
        return;
      }
      t = t != null ? "" + Hl(t) : "", l = l != null ? "" + Hl(l) : t, o || l === e.value || (e.value = l), e.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = o ? e.checked : !!n, e.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), ki(e);
  }
  function $i(e, l, t) {
    l === "number" && pu(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function On(e, l, t, n) {
    if (e = e.options, l) {
      l = {};
      for (var a = 0; a < t.length; a++)
        l["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++)
        a = l.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && n && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Hl(t), l = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        l !== null || e[a].disabled || (l = e[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Ro(e, l, t) {
    if (l != null && (l = "" + Hl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + Hl(t) : "";
  }
  function Uo(e, l, t, n) {
    if (l == null) {
      if (n != null) {
        if (t != null) throw Error(r(92));
        if (hl(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), l = t;
    }
    t = Hl(l), e.defaultValue = t, n = e.textContent, n === t && n !== "" && n !== null && (e.value = n), ki(e);
  }
  function Cn(e, l) {
    if (l) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    e.textContent = l;
  }
  var eh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function No(e, l, t) {
    var n = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : n ? e.setProperty(l, t) : typeof t != "number" || t === 0 || eh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function Bo(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (e = e.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && t[a] !== n && No(e, a, n);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && No(e, u, l[u]);
  }
  function Fi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var lh = /* @__PURE__ */ new Map([
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
  ]), th = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tu(e) {
    return th.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function lt() {
  }
  var Ii = null;
  function Pi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var _n = null, Dn = null;
  function jo(e) {
    var l = An(e);
    if (l && (e = l.stateNode)) {
      var t = e[ml] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (Wi(
            e,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), l = t.name, t.type === "radio" && l != null) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + wl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var n = t[l];
              if (n !== e && n.form === e.form) {
                var a = n[ml] || null;
                if (!a) throw Error(r(90));
                Wi(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (l = 0; l < t.length; l++)
              n = t[l], n.form === e.form && Ho(n);
          }
          break e;
        case "textarea":
          Ro(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && On(e, !!t.multiple, l, !1);
      }
    }
  }
  var ec = !1;
  function xo(e, l, t) {
    if (ec) return e(l, t);
    ec = !0;
    try {
      var n = e(l);
      return n;
    } finally {
      if (ec = !1, (_n !== null || Dn !== null) && (fi(), _n && (l = _n, e = Dn, Dn = _n = null, jo(l), e)))
        for (l = 0; l < e.length; l++) jo(e[l]);
    }
  }
  function ya(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var n = t[ml] || null;
    if (n === null) return null;
    t = n[l];
    e: switch (l) {
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function")
      throw Error(
        r(231, l, typeof t)
      );
    return t;
  }
  var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lc = !1;
  if (tt)
    try {
      var ga = {};
      Object.defineProperty(ga, "passive", {
        get: function() {
          lc = !0;
        }
      }), window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
    } catch {
      lc = !1;
    }
  var Et = null, tc = null, Eu = null;
  function qo() {
    if (Eu) return Eu;
    var e, l = tc, t = l.length, n, a = "value" in Et ? Et.value : Et.textContent, u = a.length;
    for (e = 0; e < t && l[e] === a[e]; e++) ;
    var c = t - e;
    for (n = 1; n <= c && l[t - n] === a[u - n]; n++) ;
    return Eu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Au(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zu() {
    return !0;
  }
  function Go() {
    return !1;
  }
  function yl(e) {
    function l(t, n, a, u, c) {
      this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zu : Go, this.isPropagationStopped = Go, this;
    }
    return N(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = zu);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = zu);
      },
      persist: function() {
      },
      isPersistent: zu
    }), l;
  }
  var $t = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mu = yl($t), va = N({}, $t, { view: 0, detail: 0 }), nh = yl(va), nc, ac, Sa, Ou = N({}, va, {
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
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Sa && (Sa && e.type === "mousemove" ? (nc = e.screenX - Sa.screenX, ac = e.screenY - Sa.screenY) : ac = nc = 0, Sa = e), nc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ac;
    }
  }), Lo = yl(Ou), ah = N({}, Ou, { dataTransfer: 0 }), uh = yl(ah), ih = N({}, va, { relatedTarget: 0 }), uc = yl(ih), ch = N({}, $t, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fh = yl(ch), oh = N({}, $t, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rh = yl(oh), sh = N({}, $t, { data: 0 }), Yo = yl(sh), dh = {
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
  }, hh = {
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
  }, mh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function yh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = mh[e]) ? !!l[e] : !1;
  }
  function ic() {
    return yh;
  }
  var gh = N({}, va, {
    key: function(e) {
      if (e.key) {
        var l = dh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Au(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function(e) {
      return e.type === "keypress" ? Au(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Au(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vh = yl(gh), Sh = N({}, Ou, {
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
  }), Xo = yl(Sh), bh = N({}, va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
  }), ph = yl(bh), Th = N({}, $t, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Eh = yl(Th), Ah = N({}, Ou, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zh = yl(Ah), Mh = N({}, $t, {
    newState: 0,
    oldState: 0
  }), Oh = yl(Mh), Ch = [9, 13, 27, 32], cc = tt && "CompositionEvent" in window, ba = null;
  tt && "documentMode" in document && (ba = document.documentMode);
  var _h = tt && "TextEvent" in window && !ba, Qo = tt && (!cc || ba && 8 < ba && 11 >= ba), Zo = " ", Vo = !1;
  function Ko(e, l) {
    switch (e) {
      case "keyup":
        return Ch.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hn = !1;
  function Dh(e, l) {
    switch (e) {
      case "compositionend":
        return Jo(l);
      case "keypress":
        return l.which !== 32 ? null : (Vo = !0, Zo);
      case "textInput":
        return e = l.data, e === Zo && Vo ? null : e;
      default:
        return null;
    }
  }
  function Hh(e, l) {
    if (Hn)
      return e === "compositionend" || !cc && Ko(e, l) ? (e = qo(), Eu = tc = Et = null, Hn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Qo && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var wh = {
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
  function ko(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!wh[e.type] : l === "textarea";
  }
  function Wo(e, l, t, n) {
    _n ? Dn ? Dn.push(n) : Dn = [n] : _n = n, l = yi(l, "onChange"), 0 < l.length && (t = new Mu(
      "onChange",
      "change",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }));
  }
  var pa = null, Ta = null;
  function Rh(e) {
    wd(e, 0);
  }
  function Cu(e) {
    var l = ma(e);
    if (Ho(l)) return e;
  }
  function $o(e, l) {
    if (e === "change") return l;
  }
  var Fo = !1;
  if (tt) {
    var fc;
    if (tt) {
      var oc = "oninput" in document;
      if (!oc) {
        var Io = document.createElement("div");
        Io.setAttribute("oninput", "return;"), oc = typeof Io.oninput == "function";
      }
      fc = oc;
    } else fc = !1;
    Fo = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Po() {
    pa && (pa.detachEvent("onpropertychange", er), Ta = pa = null);
  }
  function er(e) {
    if (e.propertyName === "value" && Cu(Ta)) {
      var l = [];
      Wo(
        l,
        Ta,
        e,
        Pi(e)
      ), xo(Rh, l);
    }
  }
  function Uh(e, l, t) {
    e === "focusin" ? (Po(), pa = l, Ta = t, pa.attachEvent("onpropertychange", er)) : e === "focusout" && Po();
  }
  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Cu(Ta);
  }
  function Bh(e, l) {
    if (e === "click") return Cu(l);
  }
  function jh(e, l) {
    if (e === "input" || e === "change")
      return Cu(l);
  }
  function xh(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var El = typeof Object.is == "function" ? Object.is : xh;
  function Ea(e, l) {
    if (El(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), n = Object.keys(l);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var a = t[n];
      if (!oa.call(l, a) || !El(e[a], l[a]))
        return !1;
    }
    return !0;
  }
  function lr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tr(e, l) {
    var t = lr(e);
    e = 0;
    for (var n; t; ) {
      if (t.nodeType === 3) {
        if (n = e + t.textContent.length, e <= l && n >= l)
          return { node: t, offset: l - e };
        e = n;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = lr(t);
    }
  }
  function nr(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? nr(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function ar(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var l = pu(e.document); l instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = l.contentWindow;
      else break;
      l = pu(e.document);
    }
    return l;
  }
  function rc(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var qh = tt && "documentMode" in document && 11 >= document.documentMode, wn = null, sc = null, Aa = null, dc = !1;
  function ur(e, l, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    dc || wn == null || wn !== pu(n) || (n = wn, "selectionStart" in n && rc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Aa && Ea(Aa, n) || (Aa = n, n = yi(sc, "onSelect"), 0 < n.length && (l = new Mu(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: n }), l.target = wn)));
  }
  function Ft(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var Rn = {
    animationend: Ft("Animation", "AnimationEnd"),
    animationiteration: Ft("Animation", "AnimationIteration"),
    animationstart: Ft("Animation", "AnimationStart"),
    transitionrun: Ft("Transition", "TransitionRun"),
    transitionstart: Ft("Transition", "TransitionStart"),
    transitioncancel: Ft("Transition", "TransitionCancel"),
    transitionend: Ft("Transition", "TransitionEnd")
  }, hc = {}, ir = {};
  tt && (ir = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
  function It(e) {
    if (hc[e]) return hc[e];
    if (!Rn[e]) return e;
    var l = Rn[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in ir)
        return hc[e] = l[t];
    return e;
  }
  var cr = It("animationend"), fr = It("animationiteration"), or = It("animationstart"), Gh = It("transitionrun"), Lh = It("transitionstart"), Yh = It("transitioncancel"), rr = It("transitionend"), sr = /* @__PURE__ */ new Map(), mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mc.push("scrollEnd");
  function Yl(e, l) {
    sr.set(e, l), Wt(l, [e]);
  }
  var _u = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Rl = [], Un = 0, yc = 0;
  function Du() {
    for (var e = Un, l = yc = Un = 0; l < e; ) {
      var t = Rl[l];
      Rl[l++] = null;
      var n = Rl[l];
      Rl[l++] = null;
      var a = Rl[l];
      Rl[l++] = null;
      var u = Rl[l];
      if (Rl[l++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && dr(t, a, u);
    }
  }
  function Hu(e, l, t, n) {
    Rl[Un++] = e, Rl[Un++] = l, Rl[Un++] = t, Rl[Un++] = n, yc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function gc(e, l, t, n) {
    return Hu(e, l, t, n), wu(e);
  }
  function Pt(e, l) {
    return Hu(e, null, null, l), wu(e);
  }
  function dr(e, l, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= t, n = u.alternate, n !== null && (n.childLanes |= t), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && l !== null && (a = 31 - qe(t), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [l] : n.push(l), l.lane = t | 536870912), u) : null;
  }
  function wu(e) {
    if (50 < Va)
      throw Va = 0, Of = null, Error(r(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Nn = {};
  function Xh(e, l, t, n) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Al(e, l, t, n) {
    return new Xh(e, l, t, n);
  }
  function vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function nt(e, l) {
    var t = e.alternate;
    return t === null ? (t = Al(
      e.tag,
      l,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function hr(e, l) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), e;
  }
  function Ru(e, l, t, n, a, u) {
    var c = 0;
    if (n = e, typeof e == "function") vc(e) && (c = 1);
    else if (typeof e == "string")
      c = Jm(
        e,
        t,
        L.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ol:
          return e = Al(31, t, l, a), e.elementType = ol, e.lanes = u, e;
        case $:
          return en(t.children, a, u, l);
        case Ve:
          c = 8, a |= 24;
          break;
        case ye:
          return e = Al(12, t, l, a | 2), e.elementType = ye, e.lanes = u, e;
        case fl:
          return e = Al(13, t, l, a), e.elementType = fl, e.lanes = u, e;
        case Ke:
          return e = Al(19, t, l, a), e.elementType = Ke, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ee:
                c = 10;
                break e;
              case xe:
                c = 9;
                break e;
              case De:
                c = 11;
                break e;
              case ce:
                c = 14;
                break e;
              case Re:
                c = 16, n = null;
                break e;
            }
          c = 29, t = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return l = Al(c, t, l, a), l.elementType = e, l.type = n, l.lanes = u, l;
  }
  function en(e, l, t, n) {
    return e = Al(7, e, n, l), e.lanes = t, e;
  }
  function Sc(e, l, t) {
    return e = Al(6, e, null, l), e.lanes = t, e;
  }
  function mr(e) {
    var l = Al(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function bc(e, l, t) {
    return l = Al(
      4,
      e.children !== null ? e.children : [],
      e.key,
      l
    ), l.lanes = t, l.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, l;
  }
  var yr = /* @__PURE__ */ new WeakMap();
  function Ul(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = yr.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: hu(l)
      }, yr.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: hu(l)
    };
  }
  var Bn = [], jn = 0, Uu = null, za = 0, Nl = [], Bl = 0, At = null, kl = 1, Wl = "";
  function at(e, l) {
    Bn[jn++] = za, Bn[jn++] = Uu, Uu = e, za = l;
  }
  function gr(e, l, t) {
    Nl[Bl++] = kl, Nl[Bl++] = Wl, Nl[Bl++] = At, At = e;
    var n = kl;
    e = Wl;
    var a = 32 - qe(n) - 1;
    n &= ~(1 << a), t += 1;
    var u = 32 - qe(l) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, kl = 1 << 32 - qe(l) + a | t << a | n, Wl = u + e;
    } else
      kl = 1 << u | t << a | n, Wl = e;
  }
  function pc(e) {
    e.return !== null && (at(e, 1), gr(e, 1, 0));
  }
  function Tc(e) {
    for (; e === Uu; )
      Uu = Bn[--jn], Bn[jn] = null, za = Bn[--jn], Bn[jn] = null;
    for (; e === At; )
      At = Nl[--Bl], Nl[Bl] = null, Wl = Nl[--Bl], Nl[Bl] = null, kl = Nl[--Bl], Nl[Bl] = null;
  }
  function vr(e, l) {
    Nl[Bl++] = kl, Nl[Bl++] = Wl, Nl[Bl++] = At, kl = l.id, Wl = l.overflow, At = e;
  }
  var tl = null, He = null, de = !1, zt = null, jl = !1, Ec = Error(r(519));
  function Mt(e) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ma(Ul(l, e)), Ec;
  }
  function Sr(e) {
    var l = e.stateNode, t = e.type, n = e.memoizedProps;
    switch (l[ll] = e, l[ml] = n, t) {
      case "dialog":
        oe("cancel", l), oe("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        oe("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Ja.length; t++)
          oe(Ja[t], l);
        break;
      case "source":
        oe("error", l);
        break;
      case "img":
      case "image":
      case "link":
        oe("error", l), oe("load", l);
        break;
      case "details":
        oe("toggle", l);
        break;
      case "input":
        oe("invalid", l), wo(
          l,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        oe("invalid", l);
        break;
      case "textarea":
        oe("invalid", l), Uo(l, n.value, n.defaultValue, n.children);
    }
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || n.suppressHydrationWarning === !0 || Bd(l.textContent, t) ? (n.popover != null && (oe("beforetoggle", l), oe("toggle", l)), n.onScroll != null && oe("scroll", l), n.onScrollEnd != null && oe("scrollend", l), n.onClick != null && (l.onclick = lt), l = !0) : l = !1, l || Mt(e, !0);
  }
  function br(e) {
    for (tl = e.return; tl; )
      switch (tl.tag) {
        case 5:
        case 31:
        case 13:
          jl = !1;
          return;
        case 27:
        case 3:
          jl = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function xn(e) {
    if (e !== tl) return !1;
    if (!de) return br(e), de = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Yf(e.type, e.memoizedProps)), t = !t), t && He && Mt(e), br(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      He = Zd(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      He = Zd(e);
    } else
      l === 27 ? (l = He, Gt(e.type) ? (e = Kf, Kf = null, He = e) : He = l) : He = tl ? ql(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ln() {
    He = tl = null, de = !1;
  }
  function Ac() {
    var e = zt;
    return e !== null && (bl === null ? bl = e : bl.push.apply(
      bl,
      e
    ), zt = null), e;
  }
  function Ma(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  var zc = y(null), tn = null, ut = null;
  function Ot(e, l, t) {
    G(zc, l._currentValue), l._currentValue = t;
  }
  function it(e) {
    e._currentValue = zc.current, U(zc);
  }
  function Mc(e, l, t) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function Oc(e, l, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var h = 0; h < l.length; h++)
            if (o.context === l[h]) {
              u.lanes |= t, o = u.alternate, o !== null && (o.lanes |= t), Mc(
                u.return,
                t,
                e
              ), n || (c = null);
              break e;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(r(341));
        c.lanes |= t, u = c.alternate, u !== null && (u.lanes |= t), Mc(c, t, e), c = null;
      } else c = a.child;
      if (c !== null) c.return = a;
      else
        for (c = a; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (a = c.sibling, a !== null) {
            a.return = c.return, c = a;
            break;
          }
          c = c.return;
        }
      a = c;
    }
  }
  function qn(e, l, t, n) {
    e = null;
    for (var a = l, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var o = a.type;
          El(a.pendingProps.value, c.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === ie.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ia) : e = [Ia]);
      }
      a = a.return;
    }
    e !== null && Oc(
      l,
      e,
      t,
      n
    ), l.flags |= 262144;
  }
  function Nu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!El(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function nn(e) {
    tn = e, ut = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nl(e) {
    return pr(tn, e);
  }
  function Bu(e, l) {
    return tn === null && nn(e), pr(e, l);
  }
  function pr(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, ut === null) {
      if (e === null) throw Error(r(308));
      ut = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else ut = ut.next = l;
    return t;
  }
  var Qh = typeof AbortController < "u" ? AbortController : function() {
    var e = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(t, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      l.aborted = !0, e.forEach(function(t) {
        return t();
      });
    };
  }, Zh = i.unstable_scheduleCallback, Vh = i.unstable_NormalPriority, Je = {
    $$typeof: Ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cc() {
    return {
      controller: new Qh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Oa(e) {
    e.refCount--, e.refCount === 0 && Zh(Vh, function() {
      e.controller.abort();
    });
  }
  var Ca = null, _c = 0, Gn = 0, Ln = null;
  function Kh(e, l) {
    if (Ca === null) {
      var t = Ca = [];
      _c = 0, Gn = Rf(), Ln = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return _c++, l.then(Tr, Tr), l;
  }
  function Tr() {
    if (--_c === 0 && Ca !== null) {
      Ln !== null && (Ln.status = "fulfilled");
      var e = Ca;
      Ca = null, Gn = 0, Ln = null;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
  }
  function Jh(e, l) {
    var t = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        t.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = l;
        for (var a = 0; a < t.length; a++) (0, t[a])(l);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < t.length; a++)
          (0, t[a])(void 0);
      }
    ), n;
  }
  var Er = _.S;
  _.S = function(e, l) {
    ud = Y(), typeof l == "object" && l !== null && typeof l.then == "function" && Kh(e, l), Er !== null && Er(e, l);
  };
  var an = y(null);
  function Dc() {
    var e = an.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function ju(e, l) {
    l === null ? G(an, an.current) : G(an, l.pool);
  }
  function Ar() {
    var e = Dc();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Yn = Error(r(460)), Hc = Error(r(474)), xu = Error(r(542)), qu = { then: function() {
  } };
  function zr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mr(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(lt, lt), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, Cr(e), e;
      default:
        if (typeof l.status == "string") l.then(lt, lt);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = l, e.status = "pending", e.then(
            function(n) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw e = l.reason, Cr(e), e;
        }
        throw cn = l, Yn;
    }
  }
  function un(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (cn = t, Yn) : t;
    }
  }
  var cn = null;
  function Or() {
    if (cn === null) throw Error(r(459));
    var e = cn;
    return cn = null, e;
  }
  function Cr(e) {
    if (e === Yn || e === xu)
      throw Error(r(483));
  }
  var Xn = null, _a = 0;
  function Gu(e) {
    var l = _a;
    return _a += 1, Xn === null && (Xn = []), Mr(Xn, e, l);
  }
  function Da(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function Lu(e, l) {
    throw l.$$typeof === M ? Error(r(525)) : (e = Object.prototype.toString.call(l), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function _r(e) {
    function l(g, m) {
      if (e) {
        var S = g.deletions;
        S === null ? (g.deletions = [m], g.flags |= 16) : S.push(m);
      }
    }
    function t(g, m) {
      if (!e) return null;
      for (; m !== null; )
        l(g, m), m = m.sibling;
      return null;
    }
    function n(g) {
      for (var m = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
      return m;
    }
    function a(g, m) {
      return g = nt(g, m), g.index = 0, g.sibling = null, g;
    }
    function u(g, m, S) {
      return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < m ? (g.flags |= 67108866, m) : S) : (g.flags |= 67108866, m)) : (g.flags |= 1048576, m);
    }
    function c(g) {
      return e && g.alternate === null && (g.flags |= 67108866), g;
    }
    function o(g, m, S, H) {
      return m === null || m.tag !== 6 ? (m = Sc(S, g.mode, H), m.return = g, m) : (m = a(m, S), m.return = g, m);
    }
    function h(g, m, S, H) {
      var W = S.type;
      return W === $ ? C(
        g,
        m,
        S.props.children,
        H,
        S.key
      ) : m !== null && (m.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Re && un(W) === m.type) ? (m = a(m, S.props), Da(m, S), m.return = g, m) : (m = Ru(
        S.type,
        S.key,
        S.props,
        null,
        g.mode,
        H
      ), Da(m, S), m.return = g, m);
    }
    function b(g, m, S, H) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== S.containerInfo || m.stateNode.implementation !== S.implementation ? (m = bc(S, g.mode, H), m.return = g, m) : (m = a(m, S.children || []), m.return = g, m);
    }
    function C(g, m, S, H, W) {
      return m === null || m.tag !== 7 ? (m = en(
        S,
        g.mode,
        H,
        W
      ), m.return = g, m) : (m = a(m, S), m.return = g, m);
    }
    function w(g, m, S) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Sc(
          "" + m,
          g.mode,
          S
        ), m.return = g, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case te:
            return S = Ru(
              m.type,
              m.key,
              m.props,
              null,
              g.mode,
              S
            ), Da(S, m), S.return = g, S;
          case X:
            return m = bc(
              m,
              g.mode,
              S
            ), m.return = g, m;
          case Re:
            return m = un(m), w(g, m, S);
        }
        if (hl(m) || Ie(m))
          return m = en(
            m,
            g.mode,
            S,
            null
          ), m.return = g, m;
        if (typeof m.then == "function")
          return w(g, Gu(m), S);
        if (m.$$typeof === Ee)
          return w(
            g,
            Bu(g, m),
            S
          );
        Lu(g, m);
      }
      return null;
    }
    function p(g, m, S, H) {
      var W = m !== null ? m.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return W !== null ? null : o(g, m, "" + S, H);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            return S.key === W ? h(g, m, S, H) : null;
          case X:
            return S.key === W ? b(g, m, S, H) : null;
          case Re:
            return S = un(S), p(g, m, S, H);
        }
        if (hl(S) || Ie(S))
          return W !== null ? null : C(g, m, S, H, null);
        if (typeof S.then == "function")
          return p(
            g,
            m,
            Gu(S),
            H
          );
        if (S.$$typeof === Ee)
          return p(
            g,
            m,
            Bu(g, S),
            H
          );
        Lu(g, S);
      }
      return null;
    }
    function A(g, m, S, H, W) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return g = g.get(S) || null, o(m, g, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case te:
            return g = g.get(
              H.key === null ? S : H.key
            ) || null, h(m, g, H, W);
          case X:
            return g = g.get(
              H.key === null ? S : H.key
            ) || null, b(m, g, H, W);
          case Re:
            return H = un(H), A(
              g,
              m,
              S,
              H,
              W
            );
        }
        if (hl(H) || Ie(H))
          return g = g.get(S) || null, C(m, g, H, W, null);
        if (typeof H.then == "function")
          return A(
            g,
            m,
            S,
            Gu(H),
            W
          );
        if (H.$$typeof === Ee)
          return A(
            g,
            m,
            S,
            Bu(m, H),
            W
          );
        Lu(m, H);
      }
      return null;
    }
    function Q(g, m, S, H) {
      for (var W = null, he = null, K = m, ue = m = 0, se = null; K !== null && ue < S.length; ue++) {
        K.index > ue ? (se = K, K = null) : se = K.sibling;
        var me = p(
          g,
          K,
          S[ue],
          H
        );
        if (me === null) {
          K === null && (K = se);
          break;
        }
        e && K && me.alternate === null && l(g, K), m = u(me, m, ue), he === null ? W = me : he.sibling = me, he = me, K = se;
      }
      if (ue === S.length)
        return t(g, K), de && at(g, ue), W;
      if (K === null) {
        for (; ue < S.length; ue++)
          K = w(g, S[ue], H), K !== null && (m = u(
            K,
            m,
            ue
          ), he === null ? W = K : he.sibling = K, he = K);
        return de && at(g, ue), W;
      }
      for (K = n(K); ue < S.length; ue++)
        se = A(
          K,
          g,
          ue,
          S[ue],
          H
        ), se !== null && (e && se.alternate !== null && K.delete(
          se.key === null ? ue : se.key
        ), m = u(
          se,
          m,
          ue
        ), he === null ? W = se : he.sibling = se, he = se);
      return e && K.forEach(function(Zt) {
        return l(g, Zt);
      }), de && at(g, ue), W;
    }
    function ee(g, m, S, H) {
      if (S == null) throw Error(r(151));
      for (var W = null, he = null, K = m, ue = m = 0, se = null, me = S.next(); K !== null && !me.done; ue++, me = S.next()) {
        K.index > ue ? (se = K, K = null) : se = K.sibling;
        var Zt = p(g, K, me.value, H);
        if (Zt === null) {
          K === null && (K = se);
          break;
        }
        e && K && Zt.alternate === null && l(g, K), m = u(Zt, m, ue), he === null ? W = Zt : he.sibling = Zt, he = Zt, K = se;
      }
      if (me.done)
        return t(g, K), de && at(g, ue), W;
      if (K === null) {
        for (; !me.done; ue++, me = S.next())
          me = w(g, me.value, H), me !== null && (m = u(me, m, ue), he === null ? W = me : he.sibling = me, he = me);
        return de && at(g, ue), W;
      }
      for (K = n(K); !me.done; ue++, me = S.next())
        me = A(K, g, ue, me.value, H), me !== null && (e && me.alternate !== null && K.delete(me.key === null ? ue : me.key), m = u(me, m, ue), he === null ? W = me : he.sibling = me, he = me);
      return e && K.forEach(function(a1) {
        return l(g, a1);
      }), de && at(g, ue), W;
    }
    function Me(g, m, S, H) {
      if (typeof S == "object" && S !== null && S.type === $ && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            e: {
              for (var W = S.key; m !== null; ) {
                if (m.key === W) {
                  if (W = S.type, W === $) {
                    if (m.tag === 7) {
                      t(
                        g,
                        m.sibling
                      ), H = a(
                        m,
                        S.props.children
                      ), H.return = g, g = H;
                      break e;
                    }
                  } else if (m.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Re && un(W) === m.type) {
                    t(
                      g,
                      m.sibling
                    ), H = a(m, S.props), Da(H, S), H.return = g, g = H;
                    break e;
                  }
                  t(g, m);
                  break;
                } else l(g, m);
                m = m.sibling;
              }
              S.type === $ ? (H = en(
                S.props.children,
                g.mode,
                H,
                S.key
              ), H.return = g, g = H) : (H = Ru(
                S.type,
                S.key,
                S.props,
                null,
                g.mode,
                H
              ), Da(H, S), H.return = g, g = H);
            }
            return c(g);
          case X:
            e: {
              for (W = S.key; m !== null; ) {
                if (m.key === W)
                  if (m.tag === 4 && m.stateNode.containerInfo === S.containerInfo && m.stateNode.implementation === S.implementation) {
                    t(
                      g,
                      m.sibling
                    ), H = a(m, S.children || []), H.return = g, g = H;
                    break e;
                  } else {
                    t(g, m);
                    break;
                  }
                else l(g, m);
                m = m.sibling;
              }
              H = bc(S, g.mode, H), H.return = g, g = H;
            }
            return c(g);
          case Re:
            return S = un(S), Me(
              g,
              m,
              S,
              H
            );
        }
        if (hl(S))
          return Q(
            g,
            m,
            S,
            H
          );
        if (Ie(S)) {
          if (W = Ie(S), typeof W != "function") throw Error(r(150));
          return S = W.call(S), ee(
            g,
            m,
            S,
            H
          );
        }
        if (typeof S.then == "function")
          return Me(
            g,
            m,
            Gu(S),
            H
          );
        if (S.$$typeof === Ee)
          return Me(
            g,
            m,
            Bu(g, S),
            H
          );
        Lu(g, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, m !== null && m.tag === 6 ? (t(g, m.sibling), H = a(m, S), H.return = g, g = H) : (t(g, m), H = Sc(S, g.mode, H), H.return = g, g = H), c(g)) : t(g, m);
    }
    return function(g, m, S, H) {
      try {
        _a = 0;
        var W = Me(
          g,
          m,
          S,
          H
        );
        return Xn = null, W;
      } catch (K) {
        if (K === Yn || K === xu) throw K;
        var he = Al(29, K, null, g.mode);
        return he.lanes = H, he.return = g, he;
      }
    };
  }
  var fn = _r(!0), Dr = _r(!1), Ct = !1;
  function wc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rc(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function _t(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Dt(e, l, t) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = wu(e), dr(e, null, t), l;
    }
    return Hu(e, n, l, t), wu(e);
  }
  function Ha(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, po(e, t);
    }
  }
  function Uc(e, l) {
    var t = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, t === n)) {
      var a = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var c = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = c : u = u.next = c, t = t.next;
        } while (t !== null);
        u === null ? a = u = l : u = u.next = l;
      } else a = u = l;
      t = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = l : e.next = l, t.lastBaseUpdate = l;
  }
  var Nc = !1;
  function wa() {
    if (Nc) {
      var e = Ln;
      if (e !== null) throw e;
    }
  }
  function Ra(e, l, t, n) {
    Nc = !1;
    var a = e.updateQueue;
    Ct = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, c === null ? u = b : c.next = b, c = h;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, o = C.lastBaseUpdate, o !== c && (o === null ? C.firstBaseUpdate = b : o.next = b, C.lastBaseUpdate = h));
    }
    if (u !== null) {
      var w = a.baseState;
      c = 0, C = b = h = null, o = u;
      do {
        var p = o.lane & -536870913, A = p !== o.lane;
        if (A ? (re & p) === p : (n & p) === p) {
          p !== 0 && p === Gn && (Nc = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, ee = o;
            p = l;
            var Me = t;
            switch (ee.tag) {
              case 1:
                if (Q = ee.payload, typeof Q == "function") {
                  w = Q.call(Me, w, p);
                  break e;
                }
                w = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = ee.payload, p = typeof Q == "function" ? Q.call(Me, w, p) : Q, p == null) break e;
                w = N({}, w, p);
                break e;
              case 2:
                Ct = !0;
            }
          }
          p = o.callback, p !== null && (e.flags |= 64, A && (e.flags |= 8192), A = a.callbacks, A === null ? a.callbacks = [p] : A.push(p));
        } else
          A = {
            lane: p,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, C === null ? (b = C = A, h = w) : C = C.next = A, c |= p;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          A = o, o = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      C === null && (h = w), a.baseState = h, a.firstBaseUpdate = b, a.lastBaseUpdate = C, u === null && (a.shared.lanes = 0), Nt |= c, e.lanes = c, e.memoizedState = w;
    }
  }
  function Hr(e, l) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(l);
  }
  function wr(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        Hr(t[e], l);
  }
  var Qn = y(null), Yu = y(0);
  function Rr(e, l) {
    e = yt, G(Yu, e), G(Qn, l), yt = e | l.baseLanes;
  }
  function Bc() {
    G(Yu, yt), G(Qn, Qn.current);
  }
  function jc() {
    yt = Yu.current, U(Qn), U(Yu);
  }
  var zl = y(null), xl = null;
  function Ht(e) {
    var l = e.alternate;
    G(Xe, Xe.current & 1), G(zl, e), xl === null && (l === null || Qn.current !== null || l.memoizedState !== null) && (xl = e);
  }
  function xc(e) {
    G(Xe, Xe.current), G(zl, e), xl === null && (xl = e);
  }
  function Ur(e) {
    e.tag === 22 ? (G(Xe, Xe.current), G(zl, e), xl === null && (xl = e)) : wt();
  }
  function wt() {
    G(Xe, Xe.current), G(zl, zl.current);
  }
  function Ml(e) {
    U(zl), xl === e && (xl = null), U(Xe);
  }
  var Xe = y(0);
  function Xu(e) {
    for (var l = e; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Zf(t) || Vf(t)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === e) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === e) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var ct = 0, ae = null, Ae = null, ke = null, Qu = !1, Zn = !1, on = !1, Zu = 0, Ua = 0, Vn = null, kh = 0;
  function Ge() {
    throw Error(r(321));
  }
  function qc(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!El(e[t], l[t])) return !1;
    return !0;
  }
  function Gc(e, l, t, n, a, u) {
    return ct = u, ae = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = e === null || e.memoizedState === null ? gs : ef, on = !1, u = t(n, a), on = !1, Zn && (u = Br(
      l,
      t,
      n,
      a
    )), Nr(e), u;
  }
  function Nr(e) {
    _.H = ja;
    var l = Ae !== null && Ae.next !== null;
    if (ct = 0, ke = Ae = ae = null, Qu = !1, Ua = 0, Vn = null, l) throw Error(r(300));
    e === null || We || (e = e.dependencies, e !== null && Nu(e) && (We = !0));
  }
  function Br(e, l, t, n) {
    ae = e;
    var a = 0;
    do {
      if (Zn && (Vn = null), Ua = 0, Zn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, ke = Ae = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      _.H = vs, u = l(t, n);
    } while (Zn);
    return u;
  }
  function Wh() {
    var e = _.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? Na(l) : l, e = e.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== e && (ae.flags |= 1024), l;
  }
  function Lc() {
    var e = Zu !== 0;
    return Zu = 0, e;
  }
  function Yc(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function Xc(e) {
    if (Qu) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      Qu = !1;
    }
    ct = 0, ke = Ae = ae = null, Zn = !1, Ua = Zu = 0, Vn = null;
  }
  function sl() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ke === null ? ae.memoizedState = ke = e : ke = ke.next = e, ke;
  }
  function Qe() {
    if (Ae === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var l = ke === null ? ae.memoizedState : ke.next;
    if (l !== null)
      ke = l, Ae = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(r(467)) : Error(r(310));
      Ae = e, e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      }, ke === null ? ae.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function Vu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Na(e) {
    var l = Ua;
    return Ua += 1, Vn === null && (Vn = []), e = Mr(Vn, e, l), l = ae, (ke === null ? l.memoizedState : ke.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? gs : ef), e;
  }
  function Ku(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Na(e);
      if (e.$$typeof === Ee) return nl(e);
    }
    throw Error(r(438, String(e)));
  }
  function Qc(e) {
    var l = null, t = ae.updateQueue;
    if (t !== null && (l = t.memoCache), l == null) {
      var n = ae.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = Vu(), ae.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), n = 0; n < e; n++)
        t[n] = Tl;
    return l.index++, t;
  }
  function ft(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function Ju(e) {
    var l = Qe();
    return Zc(l, Ae, e);
  }
  function Zc(e, l, t) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = u.next, u.next = c;
      }
      l.baseQueue = a = u, n.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      l = a.next;
      var o = c = null, h = null, b = l, C = !1;
      do {
        var w = b.lane & -536870913;
        if (w !== b.lane ? (re & w) === w : (ct & w) === w) {
          var p = b.revertLane;
          if (p === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), w === Gn && (C = !0);
          else if ((ct & p) === p) {
            b = b.next, p === Gn && (C = !0);
            continue;
          } else
            w = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, h === null ? (o = h = w, c = u) : h = h.next = w, ae.lanes |= p, Nt |= p;
          w = b.action, on && t(u, w), u = b.hasEagerState ? b.eagerState : t(u, w);
        } else
          p = {
            lane: w,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = p, c = u) : h = h.next = p, ae.lanes |= w, Nt |= w;
        b = b.next;
      } while (b !== null && b !== l);
      if (h === null ? c = u : h.next = o, !El(u, e.memoizedState) && (We = !0, C && (t = Ln, t !== null)))
        throw t;
      e.memoizedState = u, e.baseState = c, e.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Vc(e) {
    var l = Qe(), t = l.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = e;
    var n = t.dispatch, a = t.pending, u = l.memoizedState;
    if (a !== null) {
      t.pending = null;
      var c = a = a.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== a);
      El(u, l.memoizedState) || (We = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), t.lastRenderedState = u;
    }
    return [u, n];
  }
  function jr(e, l, t) {
    var n = ae, a = Qe(), u = de;
    if (u) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = l();
    var c = !El(
      (Ae || a).memoizedState,
      t
    );
    if (c && (a.memoizedState = t, We = !0), a = a.queue, kc(Gr.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== l || c || ke !== null && ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kn(
        9,
        { destroy: void 0 },
        qr.bind(
          null,
          n,
          a,
          t,
          l
        ),
        null
      ), Oe === null) throw Error(r(349));
      u || (ct & 127) !== 0 || xr(n, l, t);
    }
    return t;
  }
  function xr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = ae.updateQueue, l === null ? (l = Vu(), ae.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function qr(e, l, t, n) {
    l.value = t, l.getSnapshot = n, Lr(l) && Yr(e);
  }
  function Gr(e, l, t) {
    return t(function() {
      Lr(l) && Yr(e);
    });
  }
  function Lr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !El(e, t);
    } catch {
      return !0;
    }
  }
  function Yr(e) {
    var l = Pt(e, 2);
    l !== null && pl(l, e, 2);
  }
  function Kc(e) {
    var l = sl();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), on) {
        il(!0);
        try {
          t();
        } finally {
          il(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = e, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ft,
      lastRenderedState: e
    }, l;
  }
  function Xr(e, l, t, n) {
    return e.baseState = t, Zc(
      e,
      Ae,
      typeof n == "function" ? n : ft
    );
  }
  function $h(e, l, t, n, a) {
    if ($u(e)) throw Error(r(485));
    if (e = l.action, e !== null) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      _.T !== null ? t(!0) : u.isTransition = !1, n(u), t = l.pending, t === null ? (u.next = l.pending = u, Qr(l, u)) : (u.next = t.next, l.pending = t.next = u);
    }
  }
  function Qr(e, l) {
    var t = l.action, n = l.payload, a = e.state;
    if (l.isTransition) {
      var u = _.T, c = {};
      _.T = c;
      try {
        var o = t(a, n), h = _.S;
        h !== null && h(c, o), Zr(e, l, o);
      } catch (b) {
        Jc(e, l, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), _.T = u;
      }
    } else
      try {
        u = t(a, n), Zr(e, l, u);
      } catch (b) {
        Jc(e, l, b);
      }
  }
  function Zr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        Vr(e, l, n);
      },
      function(n) {
        return Jc(e, l, n);
      }
    ) : Vr(e, l, t);
  }
  function Vr(e, l, t) {
    l.status = "fulfilled", l.value = t, Kr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, Qr(e, t)));
  }
  function Jc(e, l, t) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = t, Kr(l), l = l.next;
      while (l !== n);
    }
    e.action = null;
  }
  function Kr(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function Jr(e, l) {
    return l;
  }
  function kr(e, l) {
    if (de) {
      var t = Oe.formState;
      if (t !== null) {
        e: {
          var n = ae;
          if (de) {
            if (He) {
              l: {
                for (var a = He, u = jl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = ql(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                He = ql(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Mt(n);
          }
          n = !1;
        }
        n && (l = t[0]);
      }
    }
    return t = sl(), t.memoizedState = t.baseState = l, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: l
    }, t.queue = n, t = hs.bind(
      null,
      ae,
      n
    ), n.dispatch = t, n = Kc(!1), u = Pc.bind(
      null,
      ae,
      !1,
      n.queue
    ), n = sl(), a = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, t = $h.bind(
      null,
      ae,
      a,
      u,
      t
    ), a.dispatch = t, n.memoizedState = e, [l, t, !1];
  }
  function Wr(e) {
    var l = Qe();
    return $r(l, Ae, e);
  }
  function $r(e, l, t) {
    if (l = Zc(
      e,
      l,
      Jr
    )[0], e = Ju(ft)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Na(l);
      } catch (c) {
        throw c === Yn ? xu : c;
      }
    else n = l;
    l = Qe();
    var a = l.queue, u = a.dispatch;
    return t !== l.memoizedState && (ae.flags |= 2048, Kn(
      9,
      { destroy: void 0 },
      Fh.bind(null, a, t),
      null
    )), [n, u, e];
  }
  function Fh(e, l) {
    e.action = l;
  }
  function Fr(e) {
    var l = Qe(), t = Ae;
    if (t !== null)
      return $r(l, t, e);
    Qe(), l = l.memoizedState, t = Qe();
    var n = t.queue.dispatch;
    return t.memoizedState = e, [l, n, !1];
  }
  function Kn(e, l, t, n) {
    return e = { tag: e, create: t, deps: n, inst: l, next: null }, l = ae.updateQueue, l === null && (l = Vu(), ae.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, l.lastEffect = e), e;
  }
  function Ir() {
    return Qe().memoizedState;
  }
  function ku(e, l, t, n) {
    var a = sl();
    ae.flags |= e, a.memoizedState = Kn(
      1 | l,
      { destroy: void 0 },
      t,
      n === void 0 ? null : n
    );
  }
  function Wu(e, l, t, n) {
    var a = Qe();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Ae !== null && n !== null && qc(n, Ae.memoizedState.deps) ? a.memoizedState = Kn(l, u, t, n) : (ae.flags |= e, a.memoizedState = Kn(
      1 | l,
      u,
      t,
      n
    ));
  }
  function Pr(e, l) {
    ku(8390656, 8, e, l);
  }
  function kc(e, l) {
    Wu(2048, 8, e, l);
  }
  function Ih(e) {
    ae.flags |= 4;
    var l = ae.updateQueue;
    if (l === null)
      l = Vu(), ae.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function es(e) {
    var l = Qe().memoizedState;
    return Ih({ ref: l, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ls(e, l) {
    return Wu(4, 2, e, l);
  }
  function ts(e, l) {
    return Wu(4, 4, e, l);
  }
  function ns(e, l) {
    if (typeof l == "function") {
      e = e();
      var t = l(e);
      return function() {
        typeof t == "function" ? t() : l(null);
      };
    }
    if (l != null)
      return e = e(), l.current = e, function() {
        l.current = null;
      };
  }
  function as(e, l, t) {
    t = t != null ? t.concat([e]) : null, Wu(4, 4, ns.bind(null, l, e), t);
  }
  function Wc() {
  }
  function us(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    return l !== null && qc(l, n[1]) ? n[0] : (t.memoizedState = [e, l], e);
  }
  function is(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    if (l !== null && qc(l, n[1]))
      return n[0];
    if (n = e(), on) {
      il(!0);
      try {
        e();
      } finally {
        il(!1);
      }
    }
    return t.memoizedState = [n, l], n;
  }
  function $c(e, l, t) {
    return t === void 0 || (ct & 1073741824) !== 0 && (re & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = cd(), ae.lanes |= e, Nt |= e, t);
  }
  function cs(e, l, t, n) {
    return El(t, l) ? t : Qn.current !== null ? (e = $c(e, t, n), El(e, l) || (We = !0), e) : (ct & 42) === 0 || (ct & 1073741824) !== 0 && (re & 261930) === 0 ? (We = !0, e.memoizedState = t) : (e = cd(), ae.lanes |= e, Nt |= e, l);
  }
  function fs(e, l, t, n, a) {
    var u = x.p;
    x.p = u !== 0 && 8 > u ? u : 8;
    var c = _.T, o = {};
    _.T = o, Pc(e, !1, l, t);
    try {
      var h = a(), b = _.S;
      if (b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var C = Jh(
          h,
          n
        );
        Ba(
          e,
          l,
          C,
          _l(e)
        );
      } else
        Ba(
          e,
          l,
          n,
          _l(e)
        );
    } catch (w) {
      Ba(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: w },
        _l()
      );
    } finally {
      x.p = u, c !== null && o.types !== null && (c.types = o.types), _.T = c;
    }
  }
  function Ph() {
  }
  function Fc(e, l, t, n) {
    if (e.tag !== 5) throw Error(r(476));
    var a = os(e).queue;
    fs(
      e,
      a,
      l,
      P,
      t === null ? Ph : function() {
        return rs(e), t(n);
      }
    );
  }
  function os(e) {
    var l = e.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ft,
        lastRenderedState: P
      },
      next: null
    };
    var t = {};
    return l.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ft,
        lastRenderedState: t
      },
      next: null
    }, e.memoizedState = l, e = e.alternate, e !== null && (e.memoizedState = l), l;
  }
  function rs(e) {
    var l = os(e);
    l.next === null && (l = e.alternate.memoizedState), Ba(
      e,
      l.next.queue,
      {},
      _l()
    );
  }
  function Ic() {
    return nl(Ia);
  }
  function ss() {
    return Qe().memoizedState;
  }
  function ds() {
    return Qe().memoizedState;
  }
  function em(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = _l();
          e = _t(t);
          var n = Dt(l, e, t);
          n !== null && (pl(n, l, t), Ha(n, l, t)), l = { cache: Cc() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function lm(e, l, t) {
    var n = _l();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e) ? ms(l, t) : (t = gc(e, l, t, n), t !== null && (pl(t, e, n), ys(t, l, n)));
  }
  function hs(e, l, t) {
    var n = _l();
    Ba(e, l, t, n);
  }
  function Ba(e, l, t, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($u(e)) ms(l, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var c = l.lastRenderedState, o = u(c, t);
          if (a.hasEagerState = !0, a.eagerState = o, El(o, c))
            return Hu(e, l, a, 0), Oe === null && Du(), !1;
        } catch {
        }
      if (t = gc(e, l, a, n), t !== null)
        return pl(t, e, n), ys(t, l, n), !0;
    }
    return !1;
  }
  function Pc(e, l, t, n) {
    if (n = {
      lane: 2,
      revertLane: Rf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e)) {
      if (l) throw Error(r(479));
    } else
      l = gc(
        e,
        t,
        n,
        2
      ), l !== null && pl(l, e, 2);
  }
  function $u(e) {
    var l = e.alternate;
    return e === ae || l !== null && l === ae;
  }
  function ms(e, l) {
    Zn = Qu = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function ys(e, l, t) {
    if ((t & 4194048) !== 0) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, po(e, t);
    }
  }
  var ja = {
    readContext: nl,
    use: Ku,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge
  };
  ja.useEffectEvent = Ge;
  var gs = {
    readContext: nl,
    use: Ku,
    useCallback: function(e, l) {
      return sl().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: nl,
    useEffect: Pr,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, ku(
        4194308,
        4,
        ns.bind(null, l, e),
        t
      );
    },
    useLayoutEffect: function(e, l) {
      return ku(4194308, 4, e, l);
    },
    useInsertionEffect: function(e, l) {
      ku(4, 2, e, l);
    },
    useMemo: function(e, l) {
      var t = sl();
      l = l === void 0 ? null : l;
      var n = e();
      if (on) {
        il(!0);
        try {
          e();
        } finally {
          il(!1);
        }
      }
      return t.memoizedState = [n, l], n;
    },
    useReducer: function(e, l, t) {
      var n = sl();
      if (t !== void 0) {
        var a = t(l);
        if (on) {
          il(!0);
          try {
            t(l);
          } finally {
            il(!1);
          }
        }
      } else a = l;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = lm.bind(
        null,
        ae,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var l = sl();
      return e = { current: e }, l.memoizedState = e;
    },
    useState: function(e) {
      e = Kc(e);
      var l = e.queue, t = hs.bind(null, ae, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: Wc,
    useDeferredValue: function(e, l) {
      var t = sl();
      return $c(t, e, l);
    },
    useTransition: function() {
      var e = Kc(!1);
      return e = fs.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), sl().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var n = ae, a = sl();
      if (de) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = l(), Oe === null)
          throw Error(r(349));
        (re & 127) !== 0 || xr(n, l, t);
      }
      a.memoizedState = t;
      var u = { value: t, getSnapshot: l };
      return a.queue = u, Pr(Gr.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Kn(
        9,
        { destroy: void 0 },
        qr.bind(
          null,
          n,
          u,
          t,
          l
        ),
        null
      ), t;
    },
    useId: function() {
      var e = sl(), l = Oe.identifierPrefix;
      if (de) {
        var t = Wl, n = kl;
        t = (n & ~(1 << 32 - qe(n) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = Zu++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = kh++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: Ic,
    useFormState: kr,
    useActionState: kr,
    useOptimistic: function(e) {
      var l = sl();
      l.memoizedState = l.baseState = e;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = t, l = Pc.bind(
        null,
        ae,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: Qc,
    useCacheRefresh: function() {
      return sl().memoizedState = em.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var l = sl(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((Se & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, ef = {
    readContext: nl,
    use: Ku,
    useCallback: us,
    useContext: nl,
    useEffect: kc,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: is,
    useReducer: Ju,
    useRef: Ir,
    useState: function() {
      return Ju(ft);
    },
    useDebugValue: Wc,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return cs(
        t,
        Ae.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Ju(ft)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Na(e),
        l
      ];
    },
    useSyncExternalStore: jr,
    useId: ss,
    useHostTransitionStatus: Ic,
    useFormState: Wr,
    useActionState: Wr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Xr(t, Ae, e, l);
    },
    useMemoCache: Qc,
    useCacheRefresh: ds
  };
  ef.useEffectEvent = es;
  var vs = {
    readContext: nl,
    use: Ku,
    useCallback: us,
    useContext: nl,
    useEffect: kc,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: is,
    useReducer: Vc,
    useRef: Ir,
    useState: function() {
      return Vc(ft);
    },
    useDebugValue: Wc,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return Ae === null ? $c(t, e, l) : cs(
        t,
        Ae.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Vc(ft)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Na(e),
        l
      ];
    },
    useSyncExternalStore: jr,
    useId: ss,
    useHostTransitionStatus: Ic,
    useFormState: Fr,
    useActionState: Fr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Ae !== null ? Xr(t, Ae, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: ds
  };
  vs.useEffectEvent = es;
  function lf(e, l, t, n) {
    l = e.memoizedState, t = t(n, l), t = t == null ? l : N({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var tf = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var n = _l(), a = _t(n);
      a.payload = l, t != null && (a.callback = t), l = Dt(e, a, n), l !== null && (pl(l, e, n), Ha(l, e, n));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var n = _l(), a = _t(n);
      a.tag = 1, a.payload = l, t != null && (a.callback = t), l = Dt(e, a, n), l !== null && (pl(l, e, n), Ha(l, e, n));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = _l(), n = _t(t);
      n.tag = 2, l != null && (n.callback = l), l = Dt(e, n, t), l !== null && (pl(l, e, t), Ha(l, e, t));
    }
  };
  function Ss(e, l, t, n, a, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, c) : l.prototype && l.prototype.isPureReactComponent ? !Ea(t, n) || !Ea(a, u) : !0;
  }
  function bs(e, l, t, n) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, n), l.state !== e && tf.enqueueReplaceState(l, l.state, null);
  }
  function rn(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var n in l)
        n !== "ref" && (t[n] = l[n]);
    }
    if (e = e.defaultProps) {
      t === l && (t = N({}, t));
      for (var a in e)
        t[a] === void 0 && (t[a] = e[a]);
    }
    return t;
  }
  function ps(e) {
    _u(e);
  }
  function Ts(e) {
    console.error(e);
  }
  function Es(e) {
    _u(e);
  }
  function Fu(e, l) {
    try {
      var t = e.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function As(e, l, t) {
    try {
      var n = e.onCaughtError;
      n(t.value, {
        componentStack: t.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function nf(e, l, t) {
    return t = _t(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      Fu(e, l);
    }, t;
  }
  function zs(e) {
    return e = _t(e), e.tag = 3, e;
  }
  function Ms(e, l, t, n) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        As(l, t, n);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      As(l, t, n), typeof a != "function" && (Bt === null ? Bt = /* @__PURE__ */ new Set([this]) : Bt.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function tm(e, l, t, n, a) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = t.alternate, l !== null && qn(
        l,
        t,
        a,
        !0
      ), t = zl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return xl === null ? oi() : t.alternate === null && Le === 0 && (Le = 3), t.flags &= -257, t.flags |= 65536, t.lanes = a, n === qu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), Df(e, n, a)), !1;
          case 22:
            return t.flags |= 65536, n === qu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), Df(e, n, a)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return Df(e, n, a), oi(), !1;
    }
    if (de)
      return l = zl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== Ec && (e = Error(r(422), { cause: n }), Ma(Ul(e, t)))) : (n !== Ec && (l = Error(r(423), {
        cause: n
      }), Ma(
        Ul(l, t)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Ul(n, t), a = nf(
        e.stateNode,
        n,
        a
      ), Uc(e, a), Le !== 4 && (Le = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Ul(u, t), Za === null ? Za = [u] : Za.push(u), Le !== 4 && (Le = 2), l === null) return !0;
    n = Ul(n, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = a & -a, t.lanes |= e, e = nf(t.stateNode, n, e), Uc(t, e), !1;
        case 1:
          if (l = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Bt === null || !Bt.has(u))))
            return t.flags |= 65536, a &= -a, t.lanes |= a, a = zs(a), Ms(
              a,
              e,
              t,
              n
            ), Uc(t, a), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var af = Error(r(461)), We = !1;
  function al(e, l, t, n) {
    l.child = e === null ? Dr(l, null, t, n) : fn(
      l,
      e.child,
      t,
      n
    );
  }
  function Os(e, l, t, n, a) {
    t = t.render;
    var u = l.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return nn(l), n = Gc(
      e,
      l,
      t,
      c,
      u,
      a
    ), o = Lc(), e !== null && !We ? (Yc(e, l, a), ot(e, l, a)) : (de && o && pc(l), l.flags |= 1, al(e, l, n, a), l.child);
  }
  function Cs(e, l, t, n, a) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !vc(u) && u.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = u, _s(
        e,
        l,
        u,
        n,
        a
      )) : (e = Ru(
        t.type,
        null,
        n,
        l,
        l.mode,
        a
      ), e.ref = l.ref, e.return = l, l.child = e);
    }
    if (u = e.child, !hf(e, a)) {
      var c = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ea, t(c, n) && e.ref === l.ref)
        return ot(e, l, a);
    }
    return l.flags |= 1, e = nt(u, n), e.ref = l.ref, e.return = l, l.child = e;
  }
  function _s(e, l, t, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ea(u, n) && e.ref === l.ref)
        if (We = !1, l.pendingProps = n = u, hf(e, a))
          (e.flags & 131072) !== 0 && (We = !0);
        else
          return l.lanes = e.lanes, ot(e, l, a);
    }
    return uf(
      e,
      l,
      t,
      n,
      a
    );
  }
  function Ds(e, l, t, n) {
    var a = n.children, u = e !== null ? e.memoizedState : null;
    if (e === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | t : t, e !== null) {
          for (n = l.child = e.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~u;
        } else n = 0, l.child = null;
        return Hs(
          e,
          l,
          u,
          t,
          n
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ju(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Rr(l, u) : Bc(), Ur(l);
      else
        return n = l.lanes = 536870912, Hs(
          e,
          l,
          u !== null ? u.baseLanes | t : t,
          t,
          n
        );
    } else
      u !== null ? (ju(l, u.cachePool), Rr(l, u), wt(), l.memoizedState = null) : (e !== null && ju(l, null), Bc(), wt());
    return al(e, l, a, t), l.child;
  }
  function xa(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Hs(e, l, t, n, a) {
    var u = Dc();
    return u = u === null ? null : { parent: Je._currentValue, pool: u }, l.memoizedState = {
      baseLanes: t,
      cachePool: u
    }, e !== null && ju(l, null), Bc(), Ur(l), e !== null && qn(e, l, n, !0), l.childLanes = a, null;
  }
  function Iu(e, l) {
    return l = ei(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function ws(e, l, t) {
    return fn(l, e.child, null, t), e = Iu(l, l.pendingProps), e.flags |= 2, Ml(l), l.memoizedState = null, e;
  }
  function nm(e, l, t) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (de) {
        if (n.mode === "hidden")
          return e = Iu(l, n), l.lanes = 536870912, xa(null, e);
        if (xc(l), (e = He) ? (e = Qd(
          e,
          jl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: At !== null ? { id: kl, overflow: Wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = mr(e), t.return = l, l.child = t, tl = l, He = null)) : e = null, e === null) throw Mt(l);
        return l.lanes = 536870912, null;
      }
      return Iu(l, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (xc(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = ws(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (We || qn(e, l, t, !1), a = (t & e.childLanes) !== 0, We || a) {
        if (n = Oe, n !== null && (c = To(n, t), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Pt(e, c), pl(n, e, c), af;
        oi(), l = ws(
          e,
          l,
          t
        );
      } else
        e = u.treeContext, He = ql(c.nextSibling), tl = l, de = !0, zt = null, jl = !1, e !== null && vr(l, e), l = Iu(l, n), l.flags |= 4096;
      return l;
    }
    return e = nt(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function Pu(e, l) {
    var t = l.ref;
    if (t === null)
      e !== null && e.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function uf(e, l, t, n, a) {
    return nn(l), t = Gc(
      e,
      l,
      t,
      n,
      void 0,
      a
    ), n = Lc(), e !== null && !We ? (Yc(e, l, a), ot(e, l, a)) : (de && n && pc(l), l.flags |= 1, al(e, l, t, a), l.child);
  }
  function Rs(e, l, t, n, a, u) {
    return nn(l), l.updateQueue = null, t = Br(
      l,
      n,
      t,
      a
    ), Nr(e), n = Lc(), e !== null && !We ? (Yc(e, l, u), ot(e, l, u)) : (de && n && pc(l), l.flags |= 1, al(e, l, t, u), l.child);
  }
  function Us(e, l, t, n, a) {
    if (nn(l), l.stateNode === null) {
      var u = Nn, c = t.contextType;
      typeof c == "object" && c !== null && (u = nl(c)), u = new t(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = tf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, wc(l), c = t.contextType, u.context = typeof c == "object" && c !== null ? nl(c) : Nn, u.state = l.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (lf(
        l,
        t,
        c,
        n
      ), u.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && tf.enqueueReplaceState(u, u.state, null), Ra(l, n, u, a), wa(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = l.stateNode;
      var o = l.memoizedProps, h = rn(t, o);
      u.props = h;
      var b = u.context, C = t.contextType;
      c = Nn, typeof C == "object" && C !== null && (c = nl(C));
      var w = t.getDerivedStateFromProps;
      C = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && bs(
        l,
        u,
        n,
        c
      ), Ct = !1;
      var p = l.memoizedState;
      u.state = p, Ra(l, n, u, a), wa(), b = l.memoizedState, o || p !== b || Ct ? (typeof w == "function" && (lf(
        l,
        t,
        w,
        n
      ), b = l.memoizedState), (h = Ct || Ss(
        l,
        t,
        h,
        n,
        p,
        b,
        c
      )) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = b), u.props = n, u.state = b, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, Rc(e, l), c = l.memoizedProps, C = rn(t, c), u.props = C, w = l.pendingProps, p = u.context, b = t.contextType, h = Nn, typeof b == "object" && b !== null && (h = nl(b)), o = t.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== w || p !== h) && bs(
        l,
        u,
        n,
        h
      ), Ct = !1, p = l.memoizedState, u.state = p, Ra(l, n, u, a), wa();
      var A = l.memoizedState;
      c !== w || p !== A || Ct || e !== null && e.dependencies !== null && Nu(e.dependencies) ? (typeof o == "function" && (lf(
        l,
        t,
        o,
        n
      ), A = l.memoizedState), (C = Ct || Ss(
        l,
        t,
        C,
        n,
        p,
        A,
        h
      ) || e !== null && e.dependencies !== null && Nu(e.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, A, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        A,
        h
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && p === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && p === e.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = A), u.props = n, u.state = A, u.context = h, n = C) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && p === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && p === e.memoizedState || (l.flags |= 1024), n = !1);
    }
    return u = n, Pu(e, l), n = (l.flags & 128) !== 0, u || n ? (u = l.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, e !== null && n ? (l.child = fn(
      l,
      e.child,
      null,
      a
    ), l.child = fn(
      l,
      null,
      t,
      a
    )) : al(e, l, t, a), l.memoizedState = u.state, e = l.child) : e = ot(
      e,
      l,
      a
    ), e;
  }
  function Ns(e, l, t, n) {
    return ln(), l.flags |= 256, al(e, l, t, n), l.child;
  }
  var cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ff(e) {
    return { baseLanes: e, cachePool: Ar() };
  }
  function of(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= Cl), e;
  }
  function Bs(e, l, t) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), c && (a = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (de) {
        if (a ? Ht(l) : wt(), (e = He) ? (e = Qd(
          e,
          jl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: At !== null ? { id: kl, overflow: Wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = mr(e), t.return = l, l.child = t, tl = l, He = null)) : e = null, e === null) throw Mt(l);
        return Vf(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (wt(), a = l.mode, o = ei(
        { mode: "hidden", children: o },
        a
      ), n = en(
        n,
        a,
        t,
        null
      ), o.return = l, n.return = l, o.sibling = n, l.child = o, n = l.child, n.memoizedState = ff(t), n.childLanes = of(
        e,
        c,
        t
      ), l.memoizedState = cf, xa(null, n)) : (Ht(l), rf(l, o));
    }
    var h = e.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        l.flags & 256 ? (Ht(l), l.flags &= -257, l = sf(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (wt(), l.child = e.child, l.flags |= 128, l = null) : (wt(), o = n.fallback, a = l.mode, n = ei(
          { mode: "visible", children: n.children },
          a
        ), o = en(
          o,
          a,
          t,
          null
        ), o.flags |= 2, n.return = l, o.return = l, n.sibling = o, l.child = n, fn(
          l,
          e.child,
          null,
          t
        ), n = l.child, n.memoizedState = ff(t), n.childLanes = of(
          e,
          c,
          t
        ), l.memoizedState = cf, l = xa(null, n));
      else if (Ht(l), Vf(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, Ma({ value: n, source: null, stack: null }), l = sf(
          e,
          l,
          t
        );
      } else if (We || qn(e, l, t, !1), c = (t & e.childLanes) !== 0, We || c) {
        if (c = Oe, c !== null && (n = To(c, t), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, Pt(e, n), pl(c, e, n), af;
        Zf(o) || oi(), l = sf(
          e,
          l,
          t
        );
      } else
        Zf(o) ? (l.flags |= 192, l.child = e.child, l = null) : (e = h.treeContext, He = ql(
          o.nextSibling
        ), tl = l, de = !0, zt = null, jl = !1, e !== null && vr(l, e), l = rf(
          l,
          n.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (wt(), o = n.fallback, a = l.mode, h = e.child, b = h.sibling, n = nt(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, b !== null ? o = nt(
      b,
      o
    ) : (o = en(
      o,
      a,
      t,
      null
    ), o.flags |= 2), o.return = l, n.return = l, n.sibling = o, l.child = n, xa(null, n), n = l.child, o = e.child.memoizedState, o === null ? o = ff(t) : (a = o.cachePool, a !== null ? (h = Je._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Ar(), o = {
      baseLanes: o.baseLanes | t,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = of(
      e,
      c,
      t
    ), l.memoizedState = cf, xa(e.child, n)) : (Ht(l), t = e.child, e = t.sibling, t = nt(t, {
      mode: "visible",
      children: n.children
    }), t.return = l, t.sibling = null, e !== null && (c = l.deletions, c === null ? (l.deletions = [e], l.flags |= 16) : c.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function rf(e, l) {
    return l = ei(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function ei(e, l) {
    return e = Al(22, e, null, l), e.lanes = 0, e;
  }
  function sf(e, l, t) {
    return fn(l, e.child, null, t), e = rf(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function js(e, l, t) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l), Mc(e.return, l, t);
  }
  function df(e, l, t, n, a, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: t,
      tailMode: a,
      treeForkCount: u
    } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = t, c.tailMode = a, c.treeForkCount = u);
  }
  function xs(e, l, t) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Xe.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, G(Xe, c), al(e, l, n, t), n = de ? za : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && js(e, t, l);
        else if (e.tag === 19)
          js(e, t, l);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === l) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (t = l.child, a = null; t !== null; )
          e = t.alternate, e !== null && Xu(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = l.child, l.child = null) : (a = t.sibling, t.sibling = null), df(
          l,
          !1,
          a,
          t,
          u,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, a = l.child, l.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Xu(e) === null) {
            l.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        df(
          l,
          !0,
          t,
          null,
          u,
          n
        );
        break;
      case "together":
        df(
          l,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function ot(e, l, t) {
    if (e !== null && (l.dependencies = e.dependencies), Nt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (qn(
          e,
          l,
          t,
          !1
        ), (t & l.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && l.child !== e.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (e = l.child, t = nt(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = nt(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function hf(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Nu(e)));
  }
  function am(e, l, t) {
    switch (l.tag) {
      case 3:
        Z(l, l.stateNode.containerInfo), Ot(l, Je, e.memoizedState.cache), ln();
        break;
      case 27:
      case 5:
        Jt(l);
        break;
      case 4:
        Z(l, l.stateNode.containerInfo);
        break;
      case 10:
        Ot(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, xc(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Ht(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? Bs(e, l, t) : (Ht(l), e = ot(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        Ht(l);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (t & l.childLanes) !== 0, n || (qn(
          e,
          l,
          t,
          !1
        ), n = (t & l.childLanes) !== 0), a) {
          if (n)
            return xs(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(Xe, Xe.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, Ds(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        Ot(l, Je, e.memoizedState.cache);
    }
    return ot(e, l, t);
  }
  function qs(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        We = !0;
      else {
        if (!hf(e, t) && (l.flags & 128) === 0)
          return We = !1, am(
            e,
            l,
            t
          );
        We = (e.flags & 131072) !== 0;
      }
    else
      We = !1, de && (l.flags & 1048576) !== 0 && gr(l, za, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var n = l.pendingProps;
          if (e = un(l.elementType), l.type = e, typeof e == "function")
            vc(e) ? (n = rn(e, n), l.tag = 1, l = Us(
              null,
              l,
              e,
              n,
              t
            )) : (l.tag = 0, l = uf(
              null,
              l,
              e,
              n,
              t
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === De) {
                l.tag = 11, l = Os(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              } else if (a === ce) {
                l.tag = 14, l = Cs(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              }
            }
            throw l = Dl(e) || e, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return uf(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return n = l.type, a = rn(
          n,
          l.pendingProps
        ), Us(
          e,
          l,
          n,
          a,
          t
        );
      case 3:
        e: {
          if (Z(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          n = l.pendingProps;
          var u = l.memoizedState;
          a = u.element, Rc(e, l), Ra(l, n, null, t);
          var c = l.memoizedState;
          if (n = c.cache, Ot(l, Je, n), n !== u.cache && Oc(
            l,
            [Je],
            t,
            !0
          ), wa(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Ns(
                e,
                l,
                n,
                t
              );
              break e;
            } else if (n !== a) {
              a = Ul(
                Error(r(424)),
                l
              ), Ma(a), l = Ns(
                e,
                l,
                n,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, He = ql(e.firstChild), tl = l, de = !0, zt = null, jl = !0, t = Dr(
                l,
                null,
                n,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (ln(), n === a) {
              l = ot(
                e,
                l,
                t
              );
              break e;
            }
            al(e, l, n, t);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Pu(e, l), e === null ? (t = Wd(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : de || (t = l.type, e = l.pendingProps, n = gi(
          F.current
        ).createElement(t), n[ll] = l, n[ml] = e, ul(n, t, e), Pe(n), l.stateNode = n) : l.memoizedState = Wd(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Jt(l), e === null && de && (n = l.stateNode = Kd(
          l.type,
          l.pendingProps,
          F.current
        ), tl = l, jl = !0, a = He, Gt(l.type) ? (Kf = a, He = ql(n.firstChild)) : He = a), al(
          e,
          l,
          l.pendingProps.children,
          t
        ), Pu(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && de && ((a = n = He) && (n = Nm(
          n,
          l.type,
          l.pendingProps,
          jl
        ), n !== null ? (l.stateNode = n, tl = l, He = ql(n.firstChild), jl = !1, a = !0) : a = !1), a || Mt(l)), Jt(l), a = l.type, u = l.pendingProps, c = e !== null ? e.memoizedProps : null, n = u.children, Yf(a, u) ? n = null : c !== null && Yf(a, c) && (l.flags |= 32), l.memoizedState !== null && (a = Gc(
          e,
          l,
          Wh,
          null,
          null,
          t
        ), Ia._currentValue = a), Pu(e, l), al(e, l, n, t), l.child;
      case 6:
        return e === null && de && ((e = t = He) && (t = Bm(
          t,
          l.pendingProps,
          jl
        ), t !== null ? (l.stateNode = t, tl = l, He = null, e = !0) : e = !1), e || Mt(l)), null;
      case 13:
        return Bs(e, l, t);
      case 4:
        return Z(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, e === null ? l.child = fn(
          l,
          null,
          n,
          t
        ) : al(e, l, n, t), l.child;
      case 11:
        return Os(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 7:
        return al(
          e,
          l,
          l.pendingProps,
          t
        ), l.child;
      case 8:
        return al(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 12:
        return al(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 10:
        return n = l.pendingProps, Ot(l, l.type, n.value), al(e, l, n.children, t), l.child;
      case 9:
        return a = l.type._context, n = l.pendingProps.children, nn(l), a = nl(a), n = n(a), l.flags |= 1, al(e, l, n, t), l.child;
      case 14:
        return Cs(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return _s(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return xs(e, l, t);
      case 31:
        return nm(e, l, t);
      case 22:
        return Ds(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return nn(l), n = nl(Je), e === null ? (a = Dc(), a === null && (a = Oe, u = Cc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= t), a = u), l.memoizedState = { parent: n, cache: a }, wc(l), Ot(l, Je, a)) : ((e.lanes & t) !== 0 && (Rc(e, l), Ra(l, null, null, t), wa()), a = e.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Ot(l, Je, n)) : (n = u.cache, Ot(l, Je, n), n !== a.cache && Oc(
          l,
          [Je],
          t,
          !0
        ))), al(
          e,
          l,
          l.pendingProps.children,
          t
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function rt(e) {
    e.flags |= 4;
  }
  function mf(e, l, t, n, a) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sd()) e.flags |= 8192;
        else
          throw cn = qu, Hc;
    } else e.flags &= -16777217;
  }
  function Gs(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !e0(l))
      if (sd()) e.flags |= 8192;
      else
        throw cn = qu, Hc;
  }
  function li(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? So() : 536870912, e.lanes |= l, $n |= l);
  }
  function qa(e, l) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          l = e.tail;
          for (var t = null; l !== null; )
            l.alternate !== null && (t = l), l = l.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? l || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function we(e) {
    var l = e.alternate !== null && e.alternate.child === e.child, t = 0, n = 0;
    if (l)
      for (var a = e.child; a !== null; )
        t |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        t |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = t, l;
  }
  function um(e, l, t) {
    var n = l.pendingProps;
    switch (Tc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(l), null;
      case 1:
        return we(l), null;
      case 3:
        return t = l.stateNode, n = null, e !== null && (n = e.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), it(Je), Ne(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (xn(l) ? rt(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ac())), we(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return e === null ? (rt(l), u !== null ? (we(l), Gs(l, u)) : (we(l), mf(
          l,
          a,
          null,
          n,
          t
        ))) : u ? u !== e.memoizedState ? (rt(l), we(l), Gs(l, u)) : (we(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== n && rt(l), we(l), mf(
          l,
          a,
          e,
          n,
          t
        )), null;
      case 27:
        if (gn(l), t = F.current, a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && rt(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return we(l), null;
          }
          e = L.current, xn(l) ? Sr(l) : (e = Kd(a, n, t), l.stateNode = e, rt(l));
        }
        return we(l), null;
      case 5:
        if (gn(l), a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && rt(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return we(l), null;
          }
          if (u = L.current, xn(l))
            Sr(l);
          else {
            var c = gi(
              F.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof n.is == "string" ? c.createElement("select", {
                      is: n.is
                    }) : c.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? c.createElement(a, { is: n.is }) : c.createElement(a);
                }
            }
            u[ll] = l, u[ml] = n;
            e: for (c = l.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === l) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === l)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            l.stateNode = u;
            e: switch (ul(u, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && rt(l);
          }
        }
        return we(l), mf(
          l,
          l.type,
          e === null ? null : e.memoizedProps,
          l.pendingProps,
          t
        ), null;
      case 6:
        if (e && l.stateNode != null)
          e.memoizedProps !== n && rt(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(r(166));
          if (e = F.current, xn(l)) {
            if (e = l.stateNode, t = l.memoizedProps, n = null, a = tl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[ll] = l, e = !!(e.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || Bd(e.nodeValue, t)), e || Mt(l, !0);
          } else
            e = gi(e).createTextNode(
              n
            ), e[ll] = l, l.stateNode = e;
        }
        return we(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (n = xn(l), t !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ll] = l;
            } else
              ln(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            we(l), e = !1;
          } else
            t = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (Ml(l), l) : (Ml(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return we(l), null;
      case 13:
        if (n = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = xn(l), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[ll] = l;
            } else
              ln(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            we(l), a = !1;
          } else
            a = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (Ml(l), l) : (Ml(l), null);
        }
        return Ml(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = n !== null, e = e !== null && e.memoizedState !== null, t && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), li(l, l.updateQueue), we(l), null);
      case 4:
        return Ne(), e === null && jf(l.stateNode.containerInfo), we(l), null;
      case 10:
        return it(l.type), we(l), null;
      case 19:
        if (U(Xe), n = l.memoizedState, n === null) return we(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) qa(n, !1);
          else {
            if (Le !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (u = Xu(e), u !== null) {
                  for (l.flags |= 128, qa(n, !1), e = u.updateQueue, l.updateQueue = e, li(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    hr(t, e), t = t.sibling;
                  return G(
                    Xe,
                    Xe.current & 1 | 2
                  ), de && at(l, n.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            n.tail !== null && Y() > ii && (l.flags |= 128, a = !0, qa(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Xu(u), e !== null) {
              if (l.flags |= 128, a = !0, e = e.updateQueue, l.updateQueue = e, li(l, e), qa(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !de)
                return we(l), null;
            } else
              2 * Y() - n.renderingStartTime > ii && t !== 536870912 && (l.flags |= 128, a = !0, qa(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (e = n.last, e !== null ? e.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Y(), e.sibling = null, t = Xe.current, G(
          Xe,
          a ? t & 1 | 2 : t & 1
        ), de && at(l, n.treeForkCount), e) : (we(l), null);
      case 22:
      case 23:
        return Ml(l), jc(), n = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (we(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : we(l), t = l.updateQueue, t !== null && li(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== t && (l.flags |= 2048), e !== null && U(an), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), it(Je), we(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function im(e, l) {
    switch (Tc(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return it(Je), Ne(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return gn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (Ml(l), l.alternate === null)
            throw Error(r(340));
          ln();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (Ml(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          ln();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return U(Xe), null;
      case 4:
        return Ne(), null;
      case 10:
        return it(l.type), null;
      case 22:
      case 23:
        return Ml(l), jc(), e !== null && U(an), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return it(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ls(e, l) {
    switch (Tc(l), l.tag) {
      case 3:
        it(Je), Ne();
        break;
      case 26:
      case 27:
      case 5:
        gn(l);
        break;
      case 4:
        Ne();
        break;
      case 31:
        l.memoizedState !== null && Ml(l);
        break;
      case 13:
        Ml(l);
        break;
      case 19:
        U(Xe);
        break;
      case 10:
        it(l.type);
        break;
      case 22:
      case 23:
        Ml(l), jc(), e !== null && U(an);
        break;
      case 24:
        it(Je);
    }
  }
  function Ga(e, l) {
    try {
      var t = l.updateQueue, n = t !== null ? t.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        t = a;
        do {
          if ((t.tag & e) === e) {
            n = void 0;
            var u = t.create, c = t.inst;
            n = u(), c.destroy = n;
          }
          t = t.next;
        } while (t !== a);
      }
    } catch (o) {
      Te(l, l.return, o);
    }
  }
  function Rt(e, l, t) {
    try {
      var n = l.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var c = n.inst, o = c.destroy;
            if (o !== void 0) {
              c.destroy = void 0, a = l;
              var h = t, b = o;
              try {
                b();
              } catch (C) {
                Te(
                  a,
                  h,
                  C
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (C) {
      Te(l, l.return, C);
    }
  }
  function Ys(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        wr(l, t);
      } catch (n) {
        Te(e, e.return, n);
      }
    }
  }
  function Xs(e, l, t) {
    t.props = rn(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (n) {
      Te(e, l, n);
    }
  }
  function La(e, l) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof t == "function" ? e.refCleanup = t(n) : t.current = n;
      }
    } catch (a) {
      Te(e, l, a);
    }
  }
  function $l(e, l) {
    var t = e.ref, n = e.refCleanup;
    if (t !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Te(e, l, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (a) {
          Te(e, l, a);
        }
      else t.current = null;
  }
  function Qs(e) {
    var l = e.type, t = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && n.focus();
          break e;
        case "img":
          t.src ? n.src = t.src : t.srcSet && (n.srcset = t.srcSet);
      }
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function yf(e, l, t) {
    try {
      var n = e.stateNode;
      _m(n, e.type, t, l), n[ml] = l;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gt(e.type) || e.tag === 4;
  }
  function gf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vf(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = lt));
    else if (n !== 4 && (n === 27 && Gt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (vf(e, l, t), e = e.sibling; e !== null; )
        vf(e, l, t), e = e.sibling;
  }
  function ti(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (n !== 4 && (n === 27 && Gt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (ti(e, l, t), e = e.sibling; e !== null; )
        ti(e, l, t), e = e.sibling;
  }
  function Vs(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var n = e.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      ul(l, n, t), l[ll] = e, l[ml] = t;
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var st = !1, $e = !1, Sf = !1, Ks = typeof WeakSet == "function" ? WeakSet : Set, el = null;
  function cm(e, l) {
    if (e = e.containerInfo, Gf = Ai, e = ar(e), rc(e)) {
      if ("selectionStart" in e)
        var t = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var n = t.getSelection && t.getSelection();
          if (n && n.rangeCount !== 0) {
            t = n.anchorNode;
            var a = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var c = 0, o = -1, h = -1, b = 0, C = 0, w = e, p = null;
            l: for (; ; ) {
              for (var A; w !== t || a !== 0 && w.nodeType !== 3 || (o = c + a), w !== u || n !== 0 && w.nodeType !== 3 || (h = c + n), w.nodeType === 3 && (c += w.nodeValue.length), (A = w.firstChild) !== null; )
                p = w, w = A;
              for (; ; ) {
                if (w === e) break l;
                if (p === t && ++b === a && (o = c), p === u && ++C === n && (h = c), (A = w.nextSibling) !== null) break;
                w = p, p = w.parentNode;
              }
              w = A;
            }
            t = o === -1 || h === -1 ? null : { start: o, end: h };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Lf = { focusedElem: e, selectionRange: t }, Ai = !1, el = l; el !== null; )
      if (l = el, e = l.child, (l.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = l, el = e;
      else
        for (; el !== null; ) {
          switch (l = el, u = l.alternate, e = l.flags, l.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (t = 0; t < e.length; t++)
                  a = e[t], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, t = l, a = u.memoizedProps, u = u.memoizedState, n = t.stateNode;
                try {
                  var Q = rn(
                    t.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Te(
                    t,
                    t.return,
                    ee
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9)
                  Qf(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = l.sibling, e !== null) {
            e.return = l.return, el = e;
            break;
          }
          el = l.return;
        }
  }
  function Js(e, l, t) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ht(e, t), n & 4 && Ga(5, t);
        break;
      case 1:
        if (ht(e, t), n & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Te(t, t.return, c);
            }
          else {
            var a = rn(
              t.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                l,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              Te(
                t,
                t.return,
                c
              );
            }
          }
        n & 64 && Ys(t), n & 512 && La(t, t.return);
        break;
      case 3:
        if (ht(e, t), n & 64 && (e = t.updateQueue, e !== null)) {
          if (l = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                l = t.child.stateNode;
                break;
              case 1:
                l = t.child.stateNode;
            }
          try {
            wr(e, l);
          } catch (c) {
            Te(t, t.return, c);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Vs(t);
      case 26:
      case 5:
        ht(e, t), l === null && n & 4 && Qs(t), n & 512 && La(t, t.return);
        break;
      case 12:
        ht(e, t);
        break;
      case 31:
        ht(e, t), n & 4 && $s(e, t);
        break;
      case 13:
        ht(e, t), n & 4 && Fs(e, t), n & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = gm.bind(
          null,
          t
        ), jm(e, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || st, !n) {
          l = l !== null && l.memoizedState !== null || $e, a = st;
          var u = $e;
          st = n, ($e = l) && !u ? mt(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : ht(e, t), st = a, $e = u;
        }
        break;
      case 30:
        break;
      default:
        ht(e, t);
    }
  }
  function ks(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, ks(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && Ji(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, gl = !1;
  function dt(e, l, t) {
    for (t = t.child; t !== null; )
      Ws(e, l, t), t = t.sibling;
  }
  function Ws(e, l, t) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(Ll, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        $e || $l(t, l), dt(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        $e || $l(t, l);
        var n = Ue, a = gl;
        Gt(t.type) && (Ue = t.stateNode, gl = !1), dt(
          e,
          l,
          t
        ), Wa(t.stateNode), Ue = n, gl = a;
        break;
      case 5:
        $e || $l(t, l);
      case 6:
        if (n = Ue, a = gl, Ue = null, dt(
          e,
          l,
          t
        ), Ue = n, gl = a, Ue !== null)
          if (gl)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(t.stateNode);
            } catch (u) {
              Te(
                t,
                l,
                u
              );
            }
          else
            try {
              Ue.removeChild(t.stateNode);
            } catch (u) {
              Te(
                t,
                l,
                u
              );
            }
        break;
      case 18:
        Ue !== null && (gl ? (e = Ue, Yd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), aa(e)) : Yd(Ue, t.stateNode));
        break;
      case 4:
        n = Ue, a = gl, Ue = t.stateNode.containerInfo, gl = !0, dt(
          e,
          l,
          t
        ), Ue = n, gl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(2, t, l), $e || Rt(4, t, l), dt(
          e,
          l,
          t
        );
        break;
      case 1:
        $e || ($l(t, l), n = t.stateNode, typeof n.componentWillUnmount == "function" && Xs(
          t,
          l,
          n
        )), dt(
          e,
          l,
          t
        );
        break;
      case 21:
        dt(
          e,
          l,
          t
        );
        break;
      case 22:
        $e = (n = $e) || t.memoizedState !== null, dt(
          e,
          l,
          t
        ), $e = n;
        break;
      default:
        dt(
          e,
          l,
          t
        );
    }
  }
  function $s(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        aa(e);
      } catch (t) {
        Te(l, l.return, t);
      }
    }
  }
  function Fs(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        aa(e);
      } catch (t) {
        Te(l, l.return, t);
      }
  }
  function fm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var l = e.stateNode;
        return l === null && (l = e.stateNode = new Ks()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new Ks()), l;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function ni(e, l) {
    var t = fm(e);
    l.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var a = vm.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function vl(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n], u = e, c = l, o = c;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Gt(o.type)) {
                Ue = o.stateNode, gl = !1;
                break e;
              }
              break;
            case 5:
              Ue = o.stateNode, gl = !1;
              break e;
            case 3:
            case 4:
              Ue = o.stateNode.containerInfo, gl = !0;
              break e;
          }
          o = o.return;
        }
        if (Ue === null) throw Error(r(160));
        Ws(u, c, a), Ue = null, gl = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Is(l, e), l = l.sibling;
  }
  var Xl = null;
  function Is(e, l) {
    var t = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vl(l, e), Sl(e), n & 4 && (Rt(3, e, e.return), Ga(3, e), Rt(5, e, e.return));
        break;
      case 1:
        vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), n & 64 && st && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
        break;
      case 26:
        var a = Xl;
        if (vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), n & 4) {
          var u = t !== null ? t.memoizedState : null;
          if (n = e.memoizedState, t === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, t = e.memoizedProps, a = a.ownerDocument || a;
                  l: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[ha] || u[ll] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ul(u, n, t), u[ll] = e, Pe(u), n = u;
                      break e;
                    case "link":
                      var c = Id(
                        "link",
                        "href",
                        a
                      ).get(n + (t.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (u = c[o], u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            c.splice(o, 1);
                            break l;
                          }
                      }
                      u = a.createElement(n), ul(u, n, t), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = Id(
                        "meta",
                        "content",
                        a
                      ).get(n + (t.content || ""))) {
                        for (o = 0; o < c.length; o++)
                          if (u = c[o], u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            c.splice(o, 1);
                            break l;
                          }
                      }
                      u = a.createElement(n), ul(u, n, t), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[ll] = e, Pe(u), n = u;
                }
                e.stateNode = n;
              } else
                Pd(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fd(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : u.count--, n === null ? Pd(
              a,
              e.type,
              e.stateNode
            ) : Fd(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && yf(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), t !== null && n & 4 && yf(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Cn(a, "");
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, yf(
          e,
          a,
          t !== null ? t.memoizedProps : a
        )), n & 1024 && (Sf = !0);
        break;
      case 6:
        if (vl(l, e), Sl(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          n = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = n;
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (bi = null, a = Xl, Xl = vi(l.containerInfo), vl(l, e), Xl = a, Sl(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            aa(l.containerInfo);
          } catch (Q) {
            Te(e, e.return, Q);
          }
        Sf && (Sf = !1, Ps(e));
        break;
      case 4:
        n = Xl, Xl = vi(
          e.stateNode.containerInfo
        ), vl(l, e), Sl(e), Xl = n;
        break;
      case 12:
        vl(l, e), Sl(e);
        break;
      case 31:
        vl(l, e), Sl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ni(e, n)));
        break;
      case 13:
        vl(l, e), Sl(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (ui = Y()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ni(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = t !== null && t.memoizedState !== null, b = st, C = $e;
        if (st = b || a, $e = C || h, vl(l, e), $e = C, st = b, Sl(e), n & 8192)
          e: for (l = e.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (t === null || h || st || $e || sn(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                h = t = l;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var w = h.memoizedProps.style, p = w != null && w.hasOwnProperty("display") ? w.display : null;
                    o.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (Q) {
                  Te(h, h.return, Q);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                h = l;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (Q) {
                  Te(h, h.return, Q);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                h = l;
                try {
                  var A = h.stateNode;
                  a ? Xd(A, !0) : Xd(h.stateNode, !1);
                } catch (Q) {
                  Te(h, h.return, Q);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === e) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === e) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === e) break e;
              t === l && (t = null), l = l.return;
            }
            t === l && (t = null), l.sibling.return = l.return, l = l.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, ni(e, t))));
        break;
      case 19:
        vl(l, e), Sl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ni(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        vl(l, e), Sl(e);
    }
  }
  function Sl(e) {
    var l = e.flags;
    if (l & 2) {
      try {
        for (var t, n = e.return; n !== null; ) {
          if (Zs(n)) {
            t = n;
            break;
          }
          n = n.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var a = t.stateNode, u = gf(e);
            ti(e, u, a);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Cn(c, ""), t.flags &= -33);
            var o = gf(e);
            ti(e, o, c);
            break;
          case 3:
          case 4:
            var h = t.stateNode.containerInfo, b = gf(e);
            vf(
              e,
              b,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        Te(e, e.return, C);
      }
      e.flags &= -3;
    }
    l & 4096 && (e.flags &= -4097);
  }
  function Ps(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        Ps(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function ht(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Js(e, l.alternate, l), l = l.sibling;
  }
  function sn(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rt(4, l, l.return), sn(l);
          break;
        case 1:
          $l(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && Xs(
            l,
            l.return,
            t
          ), sn(l);
          break;
        case 27:
          Wa(l.stateNode);
        case 26:
        case 5:
          $l(l, l.return), sn(l);
          break;
        case 22:
          l.memoizedState === null && sn(l);
          break;
        case 30:
          sn(l);
          break;
        default:
          sn(l);
      }
      e = e.sibling;
    }
  }
  function mt(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var n = l.alternate, a = e, u = l, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          mt(
            a,
            u,
            t
          ), Ga(4, u);
          break;
        case 1:
          if (mt(
            a,
            u,
            t
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              Te(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Hr(h[a], o);
            } catch (b) {
              Te(n, n.return, b);
            }
          }
          t && c & 64 && Ys(u), La(u, u.return);
          break;
        case 27:
          Vs(u);
        case 26:
        case 5:
          mt(
            a,
            u,
            t
          ), t && n === null && c & 4 && Qs(u), La(u, u.return);
          break;
        case 12:
          mt(
            a,
            u,
            t
          );
          break;
        case 31:
          mt(
            a,
            u,
            t
          ), t && c & 4 && $s(a, u);
          break;
        case 13:
          mt(
            a,
            u,
            t
          ), t && c & 4 && Fs(a, u);
          break;
        case 22:
          u.memoizedState === null && mt(
            a,
            u,
            t
          ), La(u, u.return);
          break;
        case 30:
          break;
        default:
          mt(
            a,
            u,
            t
          );
      }
      l = l.sibling;
    }
  }
  function bf(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Oa(t));
  }
  function pf(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Oa(e));
  }
  function Ql(e, l, t, n) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ed(
          e,
          l,
          t,
          n
        ), l = l.sibling;
  }
  function ed(e, l, t, n) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ql(
          e,
          l,
          t,
          n
        ), a & 2048 && Ga(9, l);
        break;
      case 1:
        Ql(
          e,
          l,
          t,
          n
        );
        break;
      case 3:
        Ql(
          e,
          l,
          t,
          n
        ), a & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Oa(e)));
        break;
      case 12:
        if (a & 2048) {
          Ql(
            e,
            l,
            t,
            n
          ), e = l.stateNode;
          try {
            var u = l.memoizedProps, c = u.id, o = u.onPostCommit;
            typeof o == "function" && o(
              c,
              l.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (h) {
            Te(l, l.return, h);
          }
        } else
          Ql(
            e,
            l,
            t,
            n
          );
        break;
      case 31:
        Ql(
          e,
          l,
          t,
          n
        );
        break;
      case 13:
        Ql(
          e,
          l,
          t,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, c = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Ql(
          e,
          l,
          t,
          n
        ) : Ya(e, l) : u._visibility & 2 ? Ql(
          e,
          l,
          t,
          n
        ) : (u._visibility |= 2, Jn(
          e,
          l,
          t,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && bf(c, l);
        break;
      case 24:
        Ql(
          e,
          l,
          t,
          n
        ), a & 2048 && pf(l.alternate, l);
        break;
      default:
        Ql(
          e,
          l,
          t,
          n
        );
    }
  }
  function Jn(e, l, t, n, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = e, c = l, o = t, h = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            u,
            c,
            o,
            h,
            a
          ), Ga(8, c);
          break;
        case 23:
          break;
        case 22:
          var C = c.stateNode;
          c.memoizedState !== null ? C._visibility & 2 ? Jn(
            u,
            c,
            o,
            h,
            a
          ) : Ya(
            u,
            c
          ) : (C._visibility |= 2, Jn(
            u,
            c,
            o,
            h,
            a
          )), a && b & 2048 && bf(
            c.alternate,
            c
          );
          break;
        case 24:
          Jn(
            u,
            c,
            o,
            h,
            a
          ), a && b & 2048 && pf(c.alternate, c);
          break;
        default:
          Jn(
            u,
            c,
            o,
            h,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Ya(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, n = l, a = n.flags;
        switch (n.tag) {
          case 22:
            Ya(t, n), a & 2048 && bf(
              n.alternate,
              n
            );
            break;
          case 24:
            Ya(t, n), a & 2048 && pf(n.alternate, n);
            break;
          default:
            Ya(t, n);
        }
        l = l.sibling;
      }
  }
  var Xa = 8192;
  function kn(e, l, t) {
    if (e.subtreeFlags & Xa)
      for (e = e.child; e !== null; )
        ld(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function ld(e, l, t) {
    switch (e.tag) {
      case 26:
        kn(
          e,
          l,
          t
        ), e.flags & Xa && e.memoizedState !== null && km(
          t,
          Xl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        kn(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var n = Xl;
        Xl = vi(e.stateNode.containerInfo), kn(
          e,
          l,
          t
        ), Xl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Xa, Xa = 16777216, kn(
          e,
          l,
          t
        ), Xa = n) : kn(
          e,
          l,
          t
        ));
        break;
      default:
        kn(
          e,
          l,
          t
        );
    }
  }
  function td(e) {
    var l = e.alternate;
    if (l !== null && (e = l.child, e !== null)) {
      l.child = null;
      do
        l = e.sibling, e.sibling = null, e = l;
      while (e !== null);
    }
  }
  function Qa(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          el = n, ad(
            n,
            e
          );
        }
      td(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        nd(e), e = e.sibling;
  }
  function nd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qa(e), e.flags & 2048 && Rt(9, e, e.return);
        break;
      case 3:
        Qa(e);
        break;
      case 12:
        Qa(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, ai(e)) : Qa(e);
        break;
      default:
        Qa(e);
    }
  }
  function ai(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          el = n, ad(
            n,
            e
          );
        }
      td(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          Rt(8, l, l.return), ai(l);
          break;
        case 22:
          t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, ai(l));
          break;
        default:
          ai(l);
      }
      e = e.sibling;
    }
  }
  function ad(e, l) {
    for (; el !== null; ) {
      var t = el;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Rt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var n = t.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Oa(t.memoizedState.cache);
      }
      if (n = t.child, n !== null) n.return = t, el = n;
      else
        e: for (t = e; el !== null; ) {
          n = el;
          var a = n.sibling, u = n.return;
          if (ks(n), n === t) {
            el = null;
            break e;
          }
          if (a !== null) {
            a.return = u, el = a;
            break e;
          }
          el = u;
        }
    }
  }
  var om = {
    getCacheForType: function(e) {
      var l = nl(Je), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return nl(Je).controller.signal;
    }
  }, rm = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Oe = null, fe = null, re = 0, pe = 0, Ol = null, Ut = !1, Wn = !1, Tf = !1, yt = 0, Le = 0, Nt = 0, dn = 0, Ef = 0, Cl = 0, $n = 0, Za = null, bl = null, Af = !1, ui = 0, ud = 0, ii = 1 / 0, ci = null, Bt = null, Fe = 0, jt = null, Fn = null, gt = 0, zf = 0, Mf = null, id = null, Va = 0, Of = null;
  function _l() {
    return (Se & 2) !== 0 && re !== 0 ? re & -re : _.T !== null ? Rf() : Eo();
  }
  function cd() {
    if (Cl === 0)
      if ((re & 536870912) === 0 || de) {
        var e = yu;
        yu <<= 1, (yu & 3932160) === 0 && (yu = 262144), Cl = e;
      } else Cl = 536870912;
    return e = zl.current, e !== null && (e.flags |= 32), Cl;
  }
  function pl(e, l, t) {
    (e === Oe && (pe === 2 || pe === 9) || e.cancelPendingCommit !== null) && (In(e, 0), xt(
      e,
      re,
      Cl,
      !1
    )), da(e, t), ((Se & 2) === 0 || e !== Oe) && (e === Oe && ((Se & 2) === 0 && (dn |= t), Le === 4 && xt(
      e,
      re,
      Cl,
      !1
    )), Fl(e));
  }
  function fd(e, l, t) {
    if ((Se & 6) !== 0) throw Error(r(327));
    var n = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || sa(e, l), a = n ? hm(e, l) : _f(e, l, !0), u = n;
    do {
      if (a === 0) {
        Wn && !n && xt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, u && !sm(t)) {
          a = _f(e, l, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = l, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            e: {
              var o = e;
              a = Za;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (In(o, c).flags |= 256), c = _f(
                o,
                c,
                !1
              ), c !== 2) {
                if (Tf && !h) {
                  o.errorRecoveryDisabledLanes |= u, dn |= u, a = 4;
                  break e;
                }
                u = bl, bl = a, u !== null && (bl === null ? bl = u : bl.push.apply(
                  bl,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          In(e, 0), xt(e, l, 0, !0);
          break;
        }
        e: {
          switch (n = e, u = a, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              xt(
                n,
                l,
                Cl,
                !Ut
              );
              break e;
            case 2:
              bl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (a = ui + 300 - Y(), 10 < a)) {
            if (xt(
              n,
              l,
              Cl,
              !Ut
            ), vu(n, 0, !0) !== 0) break e;
            gt = l, n.timeoutHandle = Gd(
              od.bind(
                null,
                n,
                t,
                bl,
                ci,
                Af,
                l,
                Cl,
                dn,
                $n,
                Ut,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          od(
            n,
            t,
            bl,
            ci,
            Af,
            l,
            Cl,
            dn,
            $n,
            Ut,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fl(e);
  }
  function od(e, l, t, n, a, u, c, o, h, b, C, w, p, A) {
    if (e.timeoutHandle = -1, w = l.subtreeFlags, w & 8192 || (w & 16785408) === 16785408) {
      w = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: lt
      }, ld(
        l,
        u,
        w
      );
      var Q = (u & 62914560) === u ? ui - Y() : (u & 4194048) === u ? ud - Y() : 0;
      if (Q = Wm(
        w,
        Q
      ), Q !== null) {
        gt = u, e.cancelPendingCommit = Q(
          vd.bind(
            null,
            e,
            l,
            u,
            t,
            n,
            a,
            c,
            o,
            h,
            C,
            w,
            null,
            p,
            A
          )
        ), xt(e, u, c, !b);
        return;
      }
    }
    vd(
      e,
      l,
      u,
      t,
      n,
      a,
      c,
      o,
      h
    );
  }
  function sm(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var n = 0; n < t.length; n++) {
          var a = t[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!El(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = l.child, l.subtreeFlags & 16384 && t !== null)
        t.return = l, l = t;
      else {
        if (l === e) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function xt(e, l, t, n) {
    l &= ~Ef, l &= ~dn, e.suspendedLanes |= l, e.pingedLanes &= ~l, n && (e.warmLanes |= l), n = e.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - qe(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    t !== 0 && bo(e, t, l);
  }
  function fi() {
    return (Se & 6) === 0 ? (Ka(0), !1) : !0;
  }
  function Cf() {
    if (fe !== null) {
      if (pe === 0)
        var e = fe.return;
      else
        e = fe, ut = tn = null, Xc(e), Xn = null, _a = 0, e = fe;
      for (; e !== null; )
        Ls(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function In(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, wm(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), gt = 0, Cf(), Oe = e, fe = t = nt(e.current, null), re = l, pe = 0, Ol = null, Ut = !1, Wn = sa(e, l), Tf = !1, $n = Cl = Ef = dn = Nt = Le = 0, bl = Za = null, Af = !1, (l & 8) !== 0 && (l |= l & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= l; 0 < n; ) {
        var a = 31 - qe(n), u = 1 << a;
        l |= e[a], n &= ~u;
      }
    return yt = l, Du(), t;
  }
  function rd(e, l) {
    ae = null, _.H = ja, l === Yn || l === xu ? (l = Or(), pe = 3) : l === Hc ? (l = Or(), pe = 4) : pe = l === af ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Ol = l, fe === null && (Le = 1, Fu(
      e,
      Ul(l, e.current)
    ));
  }
  function sd() {
    var e = zl.current;
    return e === null ? !0 : (re & 4194048) === re ? xl === null : (re & 62914560) === re || (re & 536870912) !== 0 ? e === xl : !1;
  }
  function dd() {
    var e = _.H;
    return _.H = ja, e === null ? ja : e;
  }
  function hd() {
    var e = _.A;
    return _.A = om, e;
  }
  function oi() {
    Le = 4, Ut || (re & 4194048) !== re && zl.current !== null || (Wn = !0), (Nt & 134217727) === 0 && (dn & 134217727) === 0 || Oe === null || xt(
      Oe,
      re,
      Cl,
      !1
    );
  }
  function _f(e, l, t) {
    var n = Se;
    Se |= 2;
    var a = dd(), u = hd();
    (Oe !== e || re !== l) && (ci = null, In(e, l)), l = !1;
    var c = Le;
    e: do
      try {
        if (pe !== 0 && fe !== null) {
          var o = fe, h = Ol;
          switch (pe) {
            case 8:
              Cf(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zl.current === null && (l = !0);
              var b = pe;
              if (pe = 0, Ol = null, Pn(e, o, h, b), t && Wn) {
                c = 0;
                break e;
              }
              break;
            default:
              b = pe, pe = 0, Ol = null, Pn(e, o, h, b);
          }
        }
        dm(), c = Le;
        break;
      } catch (C) {
        rd(e, C);
      }
    while (!0);
    return l && e.shellSuspendCounter++, ut = tn = null, Se = n, _.H = a, _.A = u, fe === null && (Oe = null, re = 0, Du()), c;
  }
  function dm() {
    for (; fe !== null; ) md(fe);
  }
  function hm(e, l) {
    var t = Se;
    Se |= 2;
    var n = dd(), a = hd();
    Oe !== e || re !== l ? (ci = null, ii = Y() + 500, In(e, l)) : Wn = sa(
      e,
      l
    );
    e: do
      try {
        if (pe !== 0 && fe !== null) {
          l = fe;
          var u = Ol;
          l: switch (pe) {
            case 1:
              pe = 0, Ol = null, Pn(e, l, u, 1);
              break;
            case 2:
            case 9:
              if (zr(u)) {
                pe = 0, Ol = null, yd(l);
                break;
              }
              l = function() {
                pe !== 2 && pe !== 9 || Oe !== e || (pe = 7), Fl(e);
              }, u.then(l, l);
              break e;
            case 3:
              pe = 7;
              break e;
            case 4:
              pe = 5;
              break e;
            case 7:
              zr(u) ? (pe = 0, Ol = null, yd(l)) : (pe = 0, Ol = null, Pn(e, l, u, 7));
              break;
            case 5:
              var c = null;
              switch (fe.tag) {
                case 26:
                  c = fe.memoizedState;
                case 5:
                case 27:
                  var o = fe;
                  if (c ? e0(c) : o.stateNode.complete) {
                    pe = 0, Ol = null;
                    var h = o.sibling;
                    if (h !== null) fe = h;
                    else {
                      var b = o.return;
                      b !== null ? (fe = b, ri(b)) : fe = null;
                    }
                    break l;
                  }
              }
              pe = 0, Ol = null, Pn(e, l, u, 5);
              break;
            case 6:
              pe = 0, Ol = null, Pn(e, l, u, 6);
              break;
            case 8:
              Cf(), Le = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        mm();
        break;
      } catch (C) {
        rd(e, C);
      }
    while (!0);
    return ut = tn = null, _.H = n, _.A = a, Se = t, fe !== null ? 0 : (Oe = null, re = 0, Du(), Le);
  }
  function mm() {
    for (; fe !== null && !B(); )
      md(fe);
  }
  function md(e) {
    var l = qs(e.alternate, e, yt);
    e.memoizedProps = e.pendingProps, l === null ? ri(e) : fe = l;
  }
  function yd(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Rs(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          re
        );
        break;
      case 11:
        l = Rs(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          re
        );
        break;
      case 5:
        Xc(l);
      default:
        Ls(t, l), l = fe = hr(l, yt), l = qs(t, l, yt);
    }
    e.memoizedProps = e.pendingProps, l === null ? ri(e) : fe = l;
  }
  function Pn(e, l, t, n) {
    ut = tn = null, Xc(l), Xn = null, _a = 0;
    var a = l.return;
    try {
      if (tm(
        e,
        a,
        l,
        t,
        re
      )) {
        Le = 1, Fu(
          e,
          Ul(t, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw fe = a, u;
      Le = 1, Fu(
        e,
        Ul(t, e.current)
      ), fe = null;
      return;
    }
    l.flags & 32768 ? (de || n === 1 ? e = !0 : Wn || (re & 536870912) !== 0 ? e = !1 : (Ut = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = zl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), gd(l, e)) : ri(l);
  }
  function ri(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        gd(
          l,
          Ut
        );
        return;
      }
      e = l.return;
      var t = um(
        l.alternate,
        l,
        yt
      );
      if (t !== null) {
        fe = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        fe = l;
        return;
      }
      fe = l = e;
    } while (l !== null);
    Le === 0 && (Le = 5);
  }
  function gd(e, l) {
    do {
      var t = im(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, fe = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = t;
    } while (e !== null);
    Le = 6, fe = null;
  }
  function vd(e, l, t, n, a, u, c, o, h) {
    e.cancelPendingCommit = null;
    do
      si();
    while (Fe !== 0);
    if ((Se & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === e.current) throw Error(r(177));
      if (u = l.lanes | l.childLanes, u |= yc, J0(
        e,
        t,
        u,
        c,
        o,
        h
      ), e === Oe && (fe = Oe = null, re = 0), Fn = l, jt = e, gt = t, zf = u, Mf = a, id = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sm(le, function() {
        return Ed(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
        n = _.T, _.T = null, a = x.p, x.p = 2, c = Se, Se |= 4;
        try {
          cm(e, l, t);
        } finally {
          Se = c, x.p = a, _.T = n;
        }
      }
      Fe = 1, Sd(), bd(), pd();
    }
  }
  function Sd() {
    if (Fe === 1) {
      Fe = 0;
      var e = jt, l = Fn, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = _.T, _.T = null;
        var n = x.p;
        x.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Is(l, e);
          var u = Lf, c = ar(e.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (c !== o && o && o.ownerDocument && nr(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && rc(o)) {
              var b = h.start, C = h.end;
              if (C === void 0 && (C = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  C,
                  o.value.length
                );
              else {
                var w = o.ownerDocument || document, p = w && w.defaultView || window;
                if (p.getSelection) {
                  var A = p.getSelection(), Q = o.textContent.length, ee = Math.min(h.start, Q), Me = h.end === void 0 ? ee : Math.min(h.end, Q);
                  !A.extend && ee > Me && (c = Me, Me = ee, ee = c);
                  var g = tr(
                    o,
                    ee
                  ), m = tr(
                    o,
                    Me
                  );
                  if (g && m && (A.rangeCount !== 1 || A.anchorNode !== g.node || A.anchorOffset !== g.offset || A.focusNode !== m.node || A.focusOffset !== m.offset)) {
                    var S = w.createRange();
                    S.setStart(g.node, g.offset), A.removeAllRanges(), ee > Me ? (A.addRange(S), A.extend(m.node, m.offset)) : (S.setEnd(m.node, m.offset), A.addRange(S));
                  }
                }
              }
            }
            for (w = [], A = o; A = A.parentNode; )
              A.nodeType === 1 && w.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < w.length; o++) {
              var H = w[o];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Ai = !!Gf, Lf = Gf = null;
        } finally {
          Se = a, x.p = n, _.T = t;
        }
      }
      e.current = l, Fe = 2;
    }
  }
  function bd() {
    if (Fe === 2) {
      Fe = 0;
      var e = jt, l = Fn, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = _.T, _.T = null;
        var n = x.p;
        x.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Js(e, l.alternate, l);
        } finally {
          Se = a, x.p = n, _.T = t;
        }
      }
      Fe = 3;
    }
  }
  function pd() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, D();
      var e = jt, l = Fn, t = gt, n = id;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, Fn = jt = null, Td(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Bt = null), Vi(t), l = l.stateNode, ve && typeof ve.onCommitFiberRoot == "function")
        try {
          ve.onCommitFiberRoot(
            Ll,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = _.T, a = x.p, x.p = 2, _.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          _.T = l, x.p = a;
        }
      }
      (gt & 3) !== 0 && si(), Fl(e), a = e.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? e === Of ? Va++ : (Va = 0, Of = e) : Va = 0, Ka(0);
    }
  }
  function Td(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Oa(l)));
  }
  function si() {
    return Sd(), bd(), pd(), Ed();
  }
  function Ed() {
    if (Fe !== 5) return !1;
    var e = jt, l = zf;
    zf = 0;
    var t = Vi(gt), n = _.T, a = x.p;
    try {
      x.p = 32 > t ? 32 : t, _.T = null, t = Mf, Mf = null;
      var u = jt, c = gt;
      if (Fe = 0, Fn = jt = null, gt = 0, (Se & 6) !== 0) throw Error(r(331));
      var o = Se;
      if (Se |= 4, nd(u.current), ed(
        u,
        u.current,
        c,
        t
      ), Se = o, Ka(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function")
        try {
          ve.onPostCommitFiberRoot(Ll, u);
        } catch {
        }
      return !0;
    } finally {
      x.p = a, _.T = n, Td(e, l);
    }
  }
  function Ad(e, l, t) {
    l = Ul(t, l), l = nf(e.stateNode, l, 2), e = Dt(e, l, 2), e !== null && (da(e, 2), Fl(e));
  }
  function Te(e, l, t) {
    if (e.tag === 3)
      Ad(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Ad(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Bt === null || !Bt.has(n))) {
            e = Ul(t, e), t = zs(2), n = Dt(l, t, 2), n !== null && (Ms(
              t,
              n,
              l,
              e
            ), da(n, 2), Fl(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function Df(e, l, t) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new rm();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(t) || (Tf = !0, a.add(t), e = ym.bind(null, e, l, t), l.then(e, e));
  }
  function ym(e, l, t) {
    var n = e.pingCache;
    n !== null && n.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, Oe === e && (re & t) === t && (Le === 4 || Le === 3 && (re & 62914560) === re && 300 > Y() - ui ? (Se & 2) === 0 && In(e, 0) : Ef |= t, $n === re && ($n = 0)), Fl(e);
  }
  function zd(e, l) {
    l === 0 && (l = So()), e = Pt(e, l), e !== null && (da(e, l), Fl(e));
  }
  function gm(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), zd(e, t);
  }
  function vm(e, l) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (t = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(l), zd(e, t);
  }
  function Sm(e, l) {
    return ra(e, l);
  }
  var di = null, ea = null, Hf = !1, hi = !1, wf = !1, qt = 0;
  function Fl(e) {
    e !== ea && e.next === null && (ea === null ? di = ea = e : ea = ea.next = e), hi = !0, Hf || (Hf = !0, pm());
  }
  function Ka(e, l) {
    if (!wf && hi) {
      wf = !0;
      do
        for (var t = !1, n = di; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - qe(42 | e) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (t = !0, _d(n, u));
          } else
            u = re, u = vu(
              n,
              n === Oe ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || sa(n, u) || (t = !0, _d(n, u));
          n = n.next;
        }
      while (t);
      wf = !1;
    }
  }
  function bm() {
    Md();
  }
  function Md() {
    hi = Hf = !1;
    var e = 0;
    qt !== 0 && Hm() && (e = qt);
    for (var l = Y(), t = null, n = di; n !== null; ) {
      var a = n.next, u = Od(n, l);
      u === 0 ? (n.next = null, t === null ? di = a : t.next = a, a === null && (ea = t)) : (t = n, (e !== 0 || (u & 3) !== 0) && (hi = !0)), n = a;
    }
    Fe !== 0 && Fe !== 5 || Ka(e), qt !== 0 && (qt = 0);
  }
  function Od(e, l) {
    for (var t = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - qe(u), o = 1 << c, h = a[c];
      h === -1 ? ((o & t) === 0 || (o & n) !== 0) && (a[c] = K0(o, l)) : h <= l && (e.expiredLanes |= o), u &= ~o;
    }
    if (l = Oe, t = re, t = vu(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, t === 0 || e === l && (pe === 2 || pe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && O(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || sa(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (n !== null && O(n), Vi(t)) {
        case 2:
        case 8:
          t = I;
          break;
        case 32:
          t = le;
          break;
        case 268435456:
          t = Jl;
          break;
        default:
          t = le;
      }
      return n = Cd.bind(null, e), t = ra(t, n), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return n !== null && n !== null && O(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Cd(e, l) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (si() && e.callbackNode !== t)
      return null;
    var n = re;
    return n = vu(
      e,
      e === Oe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (fd(e, n, l), Od(e, Y()), e.callbackNode != null && e.callbackNode === t ? Cd.bind(null, e) : null);
  }
  function _d(e, l) {
    if (si()) return null;
    fd(e, l, !0);
  }
  function pm() {
    Rm(function() {
      (Se & 6) !== 0 ? ra(
        j,
        bm
      ) : Md();
    });
  }
  function Rf() {
    if (qt === 0) {
      var e = Gn;
      e === 0 && (e = mu, mu <<= 1, (mu & 261888) === 0 && (mu = 256)), qt = e;
    }
    return qt;
  }
  function Dd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tu("" + e);
  }
  function Hd(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Tm(e, l, t, n, a) {
    if (l === "submit" && t && t.stateNode === a) {
      var u = Dd(
        (a[ml] || null).action
      ), c = n.submitter;
      c && (l = (l = c[ml] || null) ? Dd(l.formAction) : c.getAttribute("formAction"), l !== null && (u = l, c = null));
      var o = new Mu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (qt !== 0) {
                  var h = c ? Hd(a, c) : new FormData(a);
                  Fc(
                    t,
                    {
                      pending: !0,
                      data: h,
                      method: a.method,
                      action: u
                    },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" && (o.preventDefault(), h = c ? Hd(a, c) : new FormData(a), Fc(
                  t,
                  {
                    pending: !0,
                    data: h,
                    method: a.method,
                    action: u
                  },
                  u,
                  h
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Uf = 0; Uf < mc.length; Uf++) {
    var Nf = mc[Uf], Em = Nf.toLowerCase(), Am = Nf[0].toUpperCase() + Nf.slice(1);
    Yl(
      Em,
      "on" + Am
    );
  }
  Yl(cr, "onAnimationEnd"), Yl(fr, "onAnimationIteration"), Yl(or, "onAnimationStart"), Yl("dblclick", "onDoubleClick"), Yl("focusin", "onFocus"), Yl("focusout", "onBlur"), Yl(Gh, "onTransitionRun"), Yl(Lh, "onTransitionStart"), Yl(Yh, "onTransitionCancel"), Yl(rr, "onTransitionEnd"), Mn("onMouseEnter", ["mouseout", "mouseover"]), Mn("onMouseLeave", ["mouseout", "mouseover"]), Mn("onPointerEnter", ["pointerout", "pointerover"]), Mn("onPointerLeave", ["pointerout", "pointerover"]), Wt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ja = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), zm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja)
  );
  function wd(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var n = e[t], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (l)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], h = o.instance, b = o.currentTarget;
            if (o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (C) {
              _u(C);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], h = o.instance, b = o.currentTarget, o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (C) {
              _u(C);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function oe(e, l) {
    var t = l[Ki];
    t === void 0 && (t = l[Ki] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    t.has(n) || (Rd(l, e, 2, !1), t.add(n));
  }
  function Bf(e, l, t) {
    var n = 0;
    l && (n |= 4), Rd(
      t,
      e,
      n,
      l
    );
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function jf(e) {
    if (!e[mi]) {
      e[mi] = !0, Mo.forEach(function(t) {
        t !== "selectionchange" && (zm.has(t) || Bf(t, !1, e), Bf(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[mi] || (l[mi] = !0, Bf("selectionchange", !1, l));
    }
  }
  function Rd(e, l, t, n) {
    switch (c0(l)) {
      case 2:
        var a = Im;
        break;
      case 8:
        a = Pm;
        break;
      default:
        a = Ff;
    }
    t = a.bind(
      null,
      l,
      t,
      e
    ), a = void 0, !lc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: a
    }) : e.addEventListener(l, t, !0) : a !== void 0 ? e.addEventListener(l, t, {
      passive: a
    }) : e.addEventListener(l, t, !1);
  }
  function xf(e, l, t, n, a) {
    var u = n;
    if ((l & 1) === 0 && (l & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = En(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    xo(function() {
      var b = u, C = Pi(t), w = [];
      e: {
        var p = sr.get(e);
        if (p !== void 0) {
          var A = Mu, Q = e;
          switch (e) {
            case "keypress":
              if (Au(t) === 0) break e;
            case "keydown":
            case "keyup":
              A = vh;
              break;
            case "focusin":
              Q = "focus", A = uc;
              break;
            case "focusout":
              Q = "blur", A = uc;
              break;
            case "beforeblur":
            case "afterblur":
              A = uc;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = Lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = ph;
              break;
            case cr:
            case fr:
            case or:
              A = fh;
              break;
            case rr:
              A = Eh;
              break;
            case "scroll":
            case "scrollend":
              A = nh;
              break;
            case "wheel":
              A = zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Xo;
              break;
            case "toggle":
            case "beforetoggle":
              A = Oh;
          }
          var ee = (l & 4) !== 0, Me = !ee && (e === "scroll" || e === "scrollend"), g = ee ? p !== null ? p + "Capture" : null : p;
          ee = [];
          for (var m = b, S; m !== null; ) {
            var H = m;
            if (S = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || S === null || g === null || (H = ya(m, g), H != null && ee.push(
              ka(m, H, S)
            )), Me) break;
            m = m.return;
          }
          0 < ee.length && (p = new A(
            p,
            Q,
            null,
            t,
            C
          ), w.push({ event: p, listeners: ee }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", p && t !== Ii && (Q = t.relatedTarget || t.fromElement) && (En(Q) || Q[Tn]))
            break e;
          if ((A || p) && (p = C.window === C ? C : (p = C.ownerDocument) ? p.defaultView || p.parentWindow : window, A ? (Q = t.relatedTarget || t.toElement, A = b, Q = Q ? En(Q) : null, Q !== null && (Me = E(Q), ee = Q.tag, Q !== Me || ee !== 5 && ee !== 27 && ee !== 6) && (Q = null)) : (A = null, Q = b), A !== Q)) {
            if (ee = Lo, H = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Xo, H = "onPointerLeave", g = "onPointerEnter", m = "pointer"), Me = A == null ? p : ma(A), S = Q == null ? p : ma(Q), p = new ee(
              H,
              m + "leave",
              A,
              t,
              C
            ), p.target = Me, p.relatedTarget = S, H = null, En(C) === b && (ee = new ee(
              g,
              m + "enter",
              Q,
              t,
              C
            ), ee.target = S, ee.relatedTarget = Me, H = ee), Me = H, A && Q)
              l: {
                for (ee = Mm, g = A, m = Q, S = 0, H = g; H; H = ee(H))
                  S++;
                H = 0;
                for (var W = m; W; W = ee(W))
                  H++;
                for (; 0 < S - H; )
                  g = ee(g), S--;
                for (; 0 < H - S; )
                  m = ee(m), H--;
                for (; S--; ) {
                  if (g === m || m !== null && g === m.alternate) {
                    ee = g;
                    break l;
                  }
                  g = ee(g), m = ee(m);
                }
                ee = null;
              }
            else ee = null;
            A !== null && Ud(
              w,
              p,
              A,
              ee,
              !1
            ), Q !== null && Me !== null && Ud(
              w,
              Me,
              Q,
              ee,
              !0
            );
          }
        }
        e: {
          if (p = b ? ma(b) : window, A = p.nodeName && p.nodeName.toLowerCase(), A === "select" || A === "input" && p.type === "file")
            var he = $o;
          else if (ko(p))
            if (Fo)
              he = jh;
            else {
              he = Nh;
              var K = Uh;
            }
          else
            A = p.nodeName, !A || A.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? b && Fi(b.elementType) && (he = $o) : he = Bh;
          if (he && (he = he(e, b))) {
            Wo(
              w,
              he,
              t,
              C
            );
            break e;
          }
          K && K(e, p, b), e === "focusout" && b && p.type === "number" && b.memoizedProps.value != null && $i(p, "number", p.value);
        }
        switch (K = b ? ma(b) : window, e) {
          case "focusin":
            (ko(K) || K.contentEditable === "true") && (wn = K, sc = b, Aa = null);
            break;
          case "focusout":
            Aa = sc = wn = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, ur(w, t, C);
            break;
          case "selectionchange":
            if (qh) break;
          case "keydown":
          case "keyup":
            ur(w, t, C);
        }
        var ue;
        if (cc)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          Hn ? Ko(e, t) && (se = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (se = "onCompositionStart");
        se && (Qo && t.locale !== "ko" && (Hn || se !== "onCompositionStart" ? se === "onCompositionEnd" && Hn && (ue = qo()) : (Et = C, tc = "value" in Et ? Et.value : Et.textContent, Hn = !0)), K = yi(b, se), 0 < K.length && (se = new Yo(
          se,
          e,
          null,
          t,
          C
        ), w.push({ event: se, listeners: K }), ue ? se.data = ue : (ue = Jo(t), ue !== null && (se.data = ue)))), (ue = _h ? Dh(e, t) : Hh(e, t)) && (se = yi(b, "onBeforeInput"), 0 < se.length && (K = new Yo(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          C
        ), w.push({
          event: K,
          listeners: se
        }), K.data = ue)), Tm(
          w,
          e,
          b,
          t,
          C
        );
      }
      wd(w, l);
    });
  }
  function ka(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function yi(e, l) {
    for (var t = l + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ya(e, t), a != null && n.unshift(
        ka(e, a, u)
      ), a = ya(e, l), a != null && n.push(
        ka(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Mm(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ud(e, l, t, n, a) {
    for (var u = l._reactName, c = []; t !== null && t !== n; ) {
      var o = t, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, a ? (b = ya(t, u), b != null && c.unshift(
        ka(t, b, h)
      )) : a || (b = ya(t, u), b != null && c.push(
        ka(t, b, h)
      ))), t = t.return;
    }
    c.length !== 0 && e.push({ event: l, listeners: c });
  }
  var Om = /\r\n?/g, Cm = /\u0000|\uFFFD/g;
  function Nd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Om, `
`).replace(Cm, "");
  }
  function Bd(e, l) {
    return l = Nd(l), Nd(e) === l;
  }
  function ze(e, l, t, n, a, u) {
    switch (t) {
      case "children":
        typeof n == "string" ? l === "body" || l === "textarea" && n === "" || Cn(e, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && Cn(e, "" + n);
        break;
      case "className":
        bu(e, "class", n);
        break;
      case "tabIndex":
        bu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bu(e, t, n);
        break;
      case "style":
        Bo(e, n, u);
        break;
      case "data":
        if (l !== "object") {
          bu(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (l !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(t);
          break;
        }
        n = Tu("" + n), e.setAttribute(t, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (t === "formAction" ? (l !== "input" && ze(e, l, "name", a.name, a, null), ze(
            e,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), ze(
            e,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), ze(
            e,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (ze(e, l, "encType", a.encType, a, null), ze(e, l, "method", a.method, a, null), ze(e, l, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(t);
          break;
        }
        n = Tu("" + n), e.setAttribute(t, n);
        break;
      case "onClick":
        n != null && (e.onclick = lt);
        break;
      case "onScroll":
        n != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (t = n.__html, t != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        t = Tu("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
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
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, "" + n) : e.removeAttribute(t);
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
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(t, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(t, n) : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(t, n) : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        break;
      case "popover":
        oe("beforetoggle", e), oe("toggle", e), Su(e, "popover", n);
        break;
      case "xlinkActuate":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        et(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        et(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        et(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        et(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Su(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = lh.get(t) || t, Su(e, t, n));
    }
  }
  function qf(e, l, t, n, a, u) {
    switch (t) {
      case "style":
        Bo(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (t = n.__html, t != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Cn(e, n) : (typeof n == "number" || typeof n == "bigint") && Cn(e, "" + n);
        break;
      case "onScroll":
        n != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && oe("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = lt);
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
        if (!Oo.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (a = t.endsWith("Capture"), l = t.slice(2, a ? t.length - 7 : void 0), u = e[ml] || null, u = u != null ? u[t] : null, typeof u == "function" && e.removeEventListener(l, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, n, a);
              break e;
            }
            t in e ? e[t] = n : n === !0 ? e.setAttribute(t, "") : Su(e, t, n);
          }
    }
  }
  function ul(e, l, t) {
    switch (l) {
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
        oe("error", e), oe("load", e);
        var n = !1, a = !1, u;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var c = t[u];
            if (c != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  ze(e, l, u, c, t, null);
              }
          }
        a && ze(e, l, "srcSet", t.srcSet, t, null), n && ze(e, l, "src", t.src, t, null);
        return;
      case "input":
        oe("invalid", e);
        var o = u = c = a = null, h = null, b = null;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var C = t[n];
            if (C != null)
              switch (n) {
                case "name":
                  a = C;
                  break;
                case "type":
                  c = C;
                  break;
                case "checked":
                  h = C;
                  break;
                case "defaultChecked":
                  b = C;
                  break;
                case "value":
                  u = C;
                  break;
                case "defaultValue":
                  o = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(r(137, l));
                  break;
                default:
                  ze(e, l, n, C, t, null);
              }
          }
        wo(
          e,
          u,
          o,
          h,
          b,
          c,
          a,
          !1
        );
        return;
      case "select":
        oe("invalid", e), n = c = u = null;
        for (a in t)
          if (t.hasOwnProperty(a) && (o = t[a], o != null))
            switch (a) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                n = o;
              default:
                ze(e, l, a, o, t, null);
            }
        l = u, t = c, e.multiple = !!n, l != null ? On(e, !!n, l, !1) : t != null && On(e, !!n, t, !0);
        return;
      case "textarea":
        oe("invalid", e), u = a = n = null;
        for (c in t)
          if (t.hasOwnProperty(c) && (o = t[c], o != null))
            switch (c) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                u = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                ze(e, l, c, o, t, null);
            }
        Uo(e, n, a, u);
        return;
      case "option":
        for (h in t)
          t.hasOwnProperty(h) && (n = t[h], n != null) && (h === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : ze(e, l, h, n, t, null));
        return;
      case "dialog":
        oe("beforetoggle", e), oe("toggle", e), oe("cancel", e), oe("close", e);
        break;
      case "iframe":
      case "object":
        oe("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ja.length; n++)
          oe(Ja[n], e);
        break;
      case "image":
        oe("error", e), oe("load", e);
        break;
      case "details":
        oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        oe("error", e), oe("load", e);
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
        for (b in t)
          if (t.hasOwnProperty(b) && (n = t[b], n != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                ze(e, l, b, n, t, null);
            }
        return;
      default:
        if (Fi(l)) {
          for (C in t)
            t.hasOwnProperty(C) && (n = t[C], n !== void 0 && qf(
              e,
              l,
              C,
              n,
              t,
              void 0
            ));
          return;
        }
    }
    for (o in t)
      t.hasOwnProperty(o) && (n = t[o], n != null && ze(e, l, o, n, t, null));
  }
  function _m(e, l, t, n) {
    switch (l) {
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
        var a = null, u = null, c = null, o = null, h = null, b = null, C = null;
        for (A in t) {
          var w = t[A];
          if (t.hasOwnProperty(A) && w != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = w;
              default:
                n.hasOwnProperty(A) || ze(e, l, A, null, n, w);
            }
        }
        for (var p in n) {
          var A = n[p];
          if (w = t[p], n.hasOwnProperty(p) && (A != null || w != null))
            switch (p) {
              case "type":
                u = A;
                break;
              case "name":
                a = A;
                break;
              case "checked":
                b = A;
                break;
              case "defaultChecked":
                C = A;
                break;
              case "value":
                c = A;
                break;
              case "defaultValue":
                o = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, l));
                break;
              default:
                A !== w && ze(
                  e,
                  l,
                  p,
                  A,
                  n,
                  w
                );
            }
        }
        Wi(
          e,
          c,
          o,
          h,
          b,
          C,
          u,
          a
        );
        return;
      case "select":
        A = c = o = p = null;
        for (u in t)
          if (h = t[u], t.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                n.hasOwnProperty(u) || ze(
                  e,
                  l,
                  u,
                  null,
                  n,
                  h
                );
            }
        for (a in n)
          if (u = n[a], h = t[a], n.hasOwnProperty(a) && (u != null || h != null))
            switch (a) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                o = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && ze(
                  e,
                  l,
                  a,
                  u,
                  n,
                  h
                );
            }
        l = o, t = c, n = A, p != null ? On(e, !!t, p, !1) : !!n != !!t && (l != null ? On(e, !!t, l, !0) : On(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        A = p = null;
        for (o in t)
          if (a = t[o], t.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, l, o, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = t[c], n.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                p = a;
                break;
              case "defaultValue":
                A = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && ze(e, l, c, a, n, u);
            }
        Ro(e, p, A);
        return;
      case "option":
        for (var Q in t)
          p = t[Q], t.hasOwnProperty(Q) && p != null && !n.hasOwnProperty(Q) && (Q === "selected" ? e.selected = !1 : ze(
            e,
            l,
            Q,
            null,
            n,
            p
          ));
        for (h in n)
          p = n[h], A = t[h], n.hasOwnProperty(h) && p !== A && (p != null || A != null) && (h === "selected" ? e.selected = p && typeof p != "function" && typeof p != "symbol" : ze(
            e,
            l,
            h,
            p,
            n,
            A
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
        for (var ee in t)
          p = t[ee], t.hasOwnProperty(ee) && p != null && !n.hasOwnProperty(ee) && ze(e, l, ee, null, n, p);
        for (b in n)
          if (p = n[b], A = t[b], n.hasOwnProperty(b) && p !== A && (p != null || A != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(r(137, l));
                break;
              default:
                ze(
                  e,
                  l,
                  b,
                  p,
                  n,
                  A
                );
            }
        return;
      default:
        if (Fi(l)) {
          for (var Me in t)
            p = t[Me], t.hasOwnProperty(Me) && p !== void 0 && !n.hasOwnProperty(Me) && qf(
              e,
              l,
              Me,
              void 0,
              n,
              p
            );
          for (C in n)
            p = n[C], A = t[C], !n.hasOwnProperty(C) || p === A || p === void 0 && A === void 0 || qf(
              e,
              l,
              C,
              p,
              n,
              A
            );
          return;
        }
    }
    for (var g in t)
      p = t[g], t.hasOwnProperty(g) && p != null && !n.hasOwnProperty(g) && ze(e, l, g, null, n, p);
    for (w in n)
      p = n[w], A = t[w], !n.hasOwnProperty(w) || p === A || p == null && A == null || ze(e, l, w, p, n, A);
  }
  function jd(e) {
    switch (e) {
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
  function Dm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var a = t[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && jd(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < t.length; n++) {
            var h = t[n], b = h.startTime;
            if (b > o) break;
            var C = h.transferSize, w = h.initiatorType;
            C && jd(w) && (h = h.responseEnd, c += C * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--n, l += 8 * (u + c) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Gf = null, Lf = null;
  function gi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qd(e, l) {
    if (e === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && l === "foreignObject" ? 0 : e;
  }
  function Yf(e, l) {
    return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Xf = null;
  function Hm() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xf ? !1 : (Xf = e, !0) : (Xf = null, !1);
  }
  var Gd = typeof setTimeout == "function" ? setTimeout : void 0, wm = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Rm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(e) {
    return Ld.resolve(null).then(e).catch(Um);
  } : Gd;
  function Um(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gt(e) {
    return e === "head";
  }
  function Yd(e, l) {
    var t = l, n = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8)
        if (t = a.data, t === "/$" || t === "/&") {
          if (n === 0) {
            e.removeChild(a), aa(l);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          n++;
        else if (t === "html")
          Wa(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, Wa(t);
          for (var u = t.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[ha] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = c;
          }
        } else
          t === "body" && Wa(e.ownerDocument.body);
      t = a;
    } while (t);
    aa(l);
  }
  function Xd(e, l) {
    var t = e;
    e = 0;
    do {
      var n = t.nextSibling;
      if (t.nodeType === 1 ? l ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (l ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), n && n.nodeType === 8)
        if (t = n.data, t === "/$") {
          if (e === 0) break;
          e--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
      t = n;
    } while (t);
  }
  function Qf(e) {
    var l = e.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (l = l.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(t), Ji(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(t);
    }
  }
  function Nm(e, l, t, n) {
    for (; e.nodeType === 1; ) {
      var a = t;
      if (e.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[ha])
          switch (l) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (l === "input" && e.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = ql(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Bm(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ql(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qd(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = ql(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function jm(e, l) {
    var t = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = l;
    else if (e.data !== "$?" || t.readyState !== "loading")
      l();
    else {
      var n = function() {
        l(), t.removeEventListener("DOMContentLoaded", n);
      };
      t.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function ql(e) {
    for (; e != null; e = e.nextSibling) {
      var l = e.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = e.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return e;
  }
  var Kf = null;
  function Zd(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return ql(e.nextSibling);
          l--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Vd(e) {
    e = e.previousSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (l === 0) return e;
          l--;
        } else t !== "/$" && t !== "/&" || l++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Kd(e, l, t) {
    switch (l = gi(t), e) {
      case "html":
        if (e = l.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = l.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = l.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Wa(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    Ji(e);
  }
  var Gl = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function vi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vt = x.d;
  x.d = {
    f: xm,
    r: qm,
    D: Gm,
    C: Lm,
    L: Ym,
    m: Xm,
    X: Zm,
    S: Qm,
    M: Vm
  };
  function xm() {
    var e = vt.f(), l = fi();
    return e || l;
  }
  function qm(e) {
    var l = An(e);
    l !== null && l.tag === 5 && l.type === "form" ? rs(l) : vt.r(e);
  }
  var la = typeof document > "u" ? null : document;
  function kd(e, l, t) {
    var n = la;
    if (n && typeof l == "string" && l) {
      var a = wl(l);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof t == "string" && (a += '[crossorigin="' + t + '"]'), Jd.has(a) || (Jd.add(a), e = { rel: e, crossOrigin: t, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function Gm(e) {
    vt.D(e), kd("dns-prefetch", e, null);
  }
  function Lm(e, l) {
    vt.C(e, l), kd("preconnect", e, l);
  }
  function Ym(e, l, t) {
    vt.L(e, l, t);
    var n = la;
    if (n && e && l) {
      var a = 'link[rel="preload"][as="' + wl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (a += '[imagesrcset="' + wl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (a += '[imagesizes="' + wl(
        t.imageSizes
      ) + '"]')) : a += '[href="' + wl(e) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = ta(e);
          break;
        case "script":
          u = na(e);
      }
      Gl.has(u) || (e = N(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Gl.set(u, e), n.querySelector(a) !== null || l === "style" && n.querySelector($a(u)) || l === "script" && n.querySelector(Fa(u)) || (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function Xm(e, l) {
    vt.m(e, l);
    var t = la;
    if (t && e) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + wl(n) + '"][href="' + wl(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = na(e);
      }
      if (!Gl.has(u) && (e = N({ rel: "modulepreload", href: e }, l), Gl.set(u, e), t.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Fa(u)))
              return;
        }
        n = t.createElement("link"), ul(n, "link", e), Pe(n), t.head.appendChild(n);
      }
    }
  }
  function Qm(e, l, t) {
    vt.S(e, l, t);
    var n = la;
    if (n && e) {
      var a = zn(n).hoistableStyles, u = ta(e);
      l = l || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          $a(u)
        ))
          o.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Gl.get(u)) && Jf(e, t);
          var h = c = n.createElement("link");
          Pe(h), ul(h, "link", e), h._p = new Promise(function(b, C) {
            h.onload = b, h.onerror = C;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Si(c, l, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: o
        }, a.set(u, c);
      }
    }
  }
  function Zm(e, l) {
    vt.X(e, l);
    var t = la;
    if (t && e) {
      var n = zn(t).hoistableScripts, a = na(e), u = n.get(a);
      u || (u = t.querySelector(Fa(a)), u || (e = N({ src: e, async: !0 }, l), (l = Gl.get(a)) && kf(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Vm(e, l) {
    vt.M(e, l);
    var t = la;
    if (t && e) {
      var n = zn(t).hoistableScripts, a = na(e), u = n.get(a);
      u || (u = t.querySelector(Fa(a)), u || (e = N({ src: e, async: !0, type: "module" }, l), (l = Gl.get(a)) && kf(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Wd(e, l, t, n) {
    var a = (a = F.current) ? vi(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = ta(t.href), t = zn(
          a
        ).hoistableStyles, n = t.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = ta(t.href);
          var u = zn(
            a
          ).hoistableStyles, c = u.get(e);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = a.querySelector(
            $a(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Gl.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Gl.set(e, t), u || Km(
            a,
            e,
            t,
            c.state
          ))), l && n === null)
            throw Error(r(528, ""));
          return c;
        }
        if (l && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = na(t), t = zn(
          a
        ).hoistableScripts, n = t.get(l), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function ta(e) {
    return 'href="' + wl(e) + '"';
  }
  function $a(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $d(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Km(e, l, t, n) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = e.createElement("link"), n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    }), ul(l, "link", t), Pe(l), e.head.appendChild(l));
  }
  function na(e) {
    return '[src="' + wl(e) + '"]';
  }
  function Fa(e) {
    return "script[async]" + e;
  }
  function Fd(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + wl(t.href) + '"]'
          );
          if (n)
            return l.instance = n, Pe(n), n;
          var a = N({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Pe(n), ul(n, "style", a), Si(n, t.precedence, e), l.instance = n;
        case "stylesheet":
          a = ta(t.href);
          var u = e.querySelector(
            $a(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Pe(u), u;
          n = $d(t), (a = Gl.get(a)) && Jf(n, a), u = (e.ownerDocument || e).createElement("link"), Pe(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), ul(u, "link", n), l.state.loading |= 4, Si(u, t.precedence, e), l.instance = u;
        case "script":
          return u = na(t.src), (a = e.querySelector(
            Fa(u)
          )) ? (l.instance = a, Pe(a), a) : (n = t, (a = Gl.get(u)) && (n = N({}, t), kf(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Pe(a), ul(a, "link", n), e.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, Si(n, t.precedence, e));
    return l.instance;
  }
  function Si(e, l, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === l) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function Jf(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function kf(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var bi = null;
  function Id(e, l, t) {
    if (bi === null) {
      var n = /* @__PURE__ */ new Map(), a = bi = /* @__PURE__ */ new Map();
      a.set(t, n);
    } else
      a = bi, n = a.get(t), n || (n = /* @__PURE__ */ new Map(), a.set(t, n));
    if (n.has(e)) return n;
    for (n.set(e, null), t = t.getElementsByTagName(e), a = 0; a < t.length; a++) {
      var u = t[a];
      if (!(u[ha] || u[ll] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(l) || "";
        c = e + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Pd(e, l, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      l === "title" ? e.querySelector("head > title") : null
    );
  }
  function Jm(e, l, t) {
    if (t === 1 || l.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (e = l.disabled, typeof l.precedence == "string" && e == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function e0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function km(e, l, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = ta(n.href), u = l.querySelector(
          $a(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = pi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = u, Pe(u);
          return;
        }
        u = l.ownerDocument || l, n = $d(n), (a = Gl.get(a)) && Jf(n, a), u = u.createElement("link"), Pe(u);
        var c = u;
        c._p = new Promise(function(o, h) {
          c.onload = o, c.onerror = h;
        }), ul(u, "link", n), t.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = pi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var Wf = 0;
  function Wm(e, l) {
    return e.stylesheets && e.count === 0 && Ei(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ei(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < e.imgBytes && Wf === 0 && (Wf = 62500 * Dm());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ei(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Wf ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function pi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ei(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ti = null;
  function Ei(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ti = /* @__PURE__ */ new Map(), l.forEach($m, e), Ti = null, pi.call(e));
  }
  function $m(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Ti.get(e);
      if (t) var n = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Ti.set(e, t);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), n = c);
        }
        n && t.set(null, n);
      }
      a = l.instance, c = a.getAttribute("data-precedence"), u = t.get(c) || n, u === n && t.set(null, a), t.set(c, a), this.count++, n = pi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), l.state.loading |= 4;
    }
  }
  var Ia = {
    $$typeof: Ee,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Fm(e, l, t, n, a, u, c, o, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qi(0), this.hiddenUpdates = Qi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function l0(e, l, t, n, a, u, c, o, h, b, C, w) {
    return e = new Fm(
      e,
      l,
      t,
      c,
      h,
      b,
      C,
      w,
      o
    ), l = 1, u === !0 && (l |= 24), u = Al(3, null, null, l), e.current = u, u.stateNode = e, l = Cc(), l.refCount++, e.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: l
    }, wc(u), e;
  }
  function t0(e) {
    return e ? (e = Nn, e) : Nn;
  }
  function n0(e, l, t, n, a, u) {
    a = t0(a), n.context === null ? n.context = a : n.pendingContext = a, n = _t(l), n.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (n.callback = u), t = Dt(e, n, l), t !== null && (pl(t, e, l), Ha(t, e, l));
  }
  function a0(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function $f(e, l) {
    a0(e, l), (e = e.alternate) && a0(e, l);
  }
  function u0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Pt(e, 67108864);
      l !== null && pl(l, e, 67108864), $f(e, 67108864);
    }
  }
  function i0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = _l();
      l = Zi(l);
      var t = Pt(e, l);
      t !== null && pl(t, e, l), $f(e, l);
    }
  }
  var Ai = !0;
  function Im(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = x.p;
    try {
      x.p = 2, Ff(e, l, t, n);
    } finally {
      x.p = u, _.T = a;
    }
  }
  function Pm(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = x.p;
    try {
      x.p = 8, Ff(e, l, t, n);
    } finally {
      x.p = u, _.T = a;
    }
  }
  function Ff(e, l, t, n) {
    if (Ai) {
      var a = If(n);
      if (a === null)
        xf(
          e,
          l,
          n,
          zi,
          t
        ), f0(e, n);
      else if (l1(
        a,
        e,
        l,
        t,
        n
      ))
        n.stopPropagation();
      else if (f0(e, n), l & 4 && -1 < e1.indexOf(e)) {
        for (; a !== null; ) {
          var u = An(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = kt(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - qe(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    Fl(u), (Se & 6) === 0 && (ii = Y() + 500, Ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Pt(u, 2), o !== null && pl(o, u, 2), fi(), $f(u, 2);
            }
          if (u = If(n), u === null && xf(
            e,
            l,
            n,
            zi,
            t
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        xf(
          e,
          l,
          n,
          null,
          t
        );
    }
  }
  function If(e) {
    return e = Pi(e), Pf(e);
  }
  var zi = null;
  function Pf(e) {
    if (zi = null, e = En(e), e !== null) {
      var l = E(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = R(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = q(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return zi = e, null;
  }
  function c0(e) {
    switch (e) {
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
        switch (k()) {
          case j:
            return 2;
          case I:
            return 8;
          case le:
          case _e:
            return 32;
          case Jl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var eo = !1, Lt = null, Yt = null, Xt = null, Pa = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map(), Qt = [], e1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function f0(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
        break;
      case "pointerover":
      case "pointerout":
        Pa.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        eu.delete(l.pointerId);
    }
  }
  function lu(e, l, t, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, l !== null && (l = An(l), l !== null && u0(l)), e) : (e.eventSystemFlags |= n, l = e.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), e);
  }
  function l1(e, l, t, n, a) {
    switch (l) {
      case "focusin":
        return Lt = lu(
          Lt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "dragenter":
        return Yt = lu(
          Yt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "mouseover":
        return Xt = lu(
          Xt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Pa.set(
          u,
          lu(
            Pa.get(u) || null,
            e,
            l,
            t,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, eu.set(
          u,
          lu(
            eu.get(u) || null,
            e,
            l,
            t,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function o0(e) {
    var l = En(e.target);
    if (l !== null) {
      var t = E(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = R(t), l !== null) {
            e.blockedOn = l, Ao(e.priority, function() {
              i0(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = q(t), l !== null) {
            e.blockedOn = l, Ao(e.priority, function() {
              i0(t);
            });
            return;
          }
        } else if (l === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mi(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = If(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        Ii = n, t.target.dispatchEvent(n), Ii = null;
      } else
        return l = An(t), l !== null && u0(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function r0(e, l, t) {
    Mi(e) && t.delete(l);
  }
  function t1() {
    eo = !1, Lt !== null && Mi(Lt) && (Lt = null), Yt !== null && Mi(Yt) && (Yt = null), Xt !== null && Mi(Xt) && (Xt = null), Pa.forEach(r0), eu.forEach(r0);
  }
  function Oi(e, l) {
    e.blockedOn === l && (e.blockedOn = null, eo || (eo = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      t1
    )));
  }
  var Ci = null;
  function s0(e) {
    Ci !== e && (Ci = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Ci === e && (Ci = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], n = e[l + 1], a = e[l + 2];
          if (typeof n != "function") {
            if (Pf(n || t) === null)
              continue;
            break;
          }
          var u = An(t);
          u !== null && (e.splice(l, 3), l -= 3, Fc(
            u,
            {
              pending: !0,
              data: a,
              method: t.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function aa(e) {
    function l(h) {
      return Oi(h, e);
    }
    Lt !== null && Oi(Lt, e), Yt !== null && Oi(Yt, e), Xt !== null && Oi(Xt, e), Pa.forEach(l), eu.forEach(l);
    for (var t = 0; t < Qt.length; t++) {
      var n = Qt[t];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Qt.length && (t = Qt[0], t.blockedOn === null); )
      o0(t), t.blockedOn === null && Qt.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var a = t[n], u = t[n + 1], c = a[ml] || null;
        if (typeof u == "function")
          c || s0(t);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[ml] || null)
              o = c.formAction;
            else if (Pf(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? t[n + 1] = o : (t.splice(n, 3), n -= 3), s0(t);
        }
      }
  }
  function d0() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return a = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      a !== null && (a(), a = null), n || setTimeout(t, 20);
    }
    function t() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(t, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), a !== null && (a(), a = null);
      };
    }
  }
  function lo(e) {
    this._internalRoot = e;
  }
  _i.prototype.render = lo.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var t = l.current, n = _l();
    n0(t, n, e, l, null, null);
  }, _i.prototype.unmount = lo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      n0(e.current, 2, null, e, null, null), fi(), l[Tn] = null;
    }
  };
  function _i(e) {
    this._internalRoot = e;
  }
  _i.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = Eo();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Qt.length && l !== 0 && l < Qt[t].priority; t++) ;
      Qt.splice(t, 0, e), t === 0 && o0(e);
    }
  };
  var h0 = s.version;
  if (h0 !== "19.2.4")
    throw Error(
      r(
        527,
        h0,
        "19.2.4"
      )
    );
  x.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = T(l), e = e !== null ? z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var n1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Di.isDisabled && Di.supportsFiber)
      try {
        Ll = Di.inject(
          n1
        ), ve = Di;
      } catch {
      }
  }
  return nu.createRoot = function(e, l) {
    if (!f(e)) throw Error(r(299));
    var t = !1, n = "", a = ps, u = Ts, c = Es;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = l0(
      e,
      1,
      !1,
      null,
      null,
      t,
      n,
      null,
      a,
      u,
      c,
      d0
    ), e[Tn] = l.current, jf(e), new lo(l);
  }, nu.hydrateRoot = function(e, l, t) {
    if (!f(e)) throw Error(r(299));
    var n = !1, a = "", u = ps, c = Ts, o = Es, h = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.formState !== void 0 && (h = t.formState)), l = l0(
      e,
      1,
      !0,
      l,
      t ?? null,
      n,
      a,
      h,
      u,
      c,
      o,
      d0
    ), l.context = t0(null), t = l.current, n = _l(), n = Zi(n), a = _t(n), a.callback = null, Dt(t, a, n), t = n, l.current.lanes = t, da(l, t), Fl(l), e[Tn] = l.current, jf(e), new _i(l);
  }, nu.version = "19.2.4", nu;
}
var A0;
function h1() {
  if (A0) return no.exports;
  A0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), no.exports = d1(), no.exports;
}
var m1 = h1(), dl = ro();
const Ze = 960, bt = 1240, x0 = "clawd_ui_word_solitaire_best", Ni = 5, so = 132, q0 = 92, y1 = 30, g1 = 22, v1 = 10, S1 = 8, z0 = 116, b1 = 132, p1 = 30, ia = [
  {
    id: "weekend",
    name: "Association Deal",
    moveBudget: 72,
    tagline: "Use the clue cards, not the labels. Build each crown stack by association.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "tree", label: "Trees", color: "#f3cb7b", clueIcon: "🍁", clueTitle: "Maple", clueHint: "A tree clue card.", clueStyle: "iconWord", wordIcons: { Birch: "🌿", Cedar: "🌲", Willow: "🌱", Spruce: "🌲", Aspen: "🍃", Redwood: "🌲" }, iconOnlyWords: ["Cedar"], words: ["Birch", "Cedar", "Willow", "Spruce", "Aspen", "Redwood"] },
      { id: "jewelry", label: "Jewellery", color: "#f6d589", clueIcon: "💍", clueTitle: "Ring", clueHint: "A jewellery clue card.", clueStyle: "iconOnly", wordIcons: { Bracelet: "📿", Pendant: "💠", Necklace: "📿", Brooch: "🎀", Carat: "💎", Gemstone: "💎" }, iconOnlyWords: ["Necklace"], words: ["Bracelet", "Pendant", "Necklace", "Brooch", "Carat", "Gemstone"] },
      { id: "cowboy", label: "Western", color: "#f0b77b", clueIcon: "🤠", clueTitle: "Cowboy", clueHint: "A western clue card.", clueStyle: "wordOnly", wordIcons: { Lasso: "🪢", Saddle: "🐎", Spur: "⭐", Rodeo: "🐂", Sheriff: "🤠", Saloon: "🍺" }, words: ["Lasso", "Saddle", "Spur", "Rodeo", "Sheriff", "Saloon"] },
      { id: "storm", label: "Storm", color: "#ebd17a", clueIcon: "⛈️", clueTitle: "Storm", clueHint: "A weather clue card.", clueStyle: "iconWord", wordIcons: { Thunder: "🌩️", Squall: "💨", Monsoon: "🌧️", Lightning: "⚡", Tempest: "🌪️", Downpour: "🌧️" }, iconOnlyWords: ["Downpour"], words: ["Thunder", "Squall", "Monsoon", "Lightning", "Tempest", "Downpour"] },
      { id: "kitchen", label: "Kitchen", color: "#f4c67d", clueIcon: "🍳", clueTitle: "Skillet", clueHint: "A kitchen clue card.", clueStyle: "iconOnly", wordIcons: { Whisk: "🥄", Ladle: "🥣", Spatula: "🍳", Colander: "🫙", Apron: "🧤", Tongs: "🍴" }, iconOnlyWords: ["Spatula"], words: ["Whisk", "Ladle", "Spatula", "Colander", "Apron", "Tongs"] },
      { id: "driving", label: "Driving", color: "#f2cf83", clueIcon: "🚗", clueTitle: "Ignition", clueHint: "A driving clue card.", clueStyle: "iconWord", wordIcons: { Highway: "🛣️", Odometer: "📟", Turnsignal: "↪️", Headlight: "💡", Seatbelt: "🪢", Mirror: "🪞" }, iconOnlyWords: ["Headlight"], words: ["Highway", "Odometer", "Turnsignal", "Headlight", "Seatbelt", "Mirror"] }
    ]
  },
  {
    id: "studio",
    name: "Mixed Signals",
    moveBudget: 70,
    tagline: "Word piles cross over more here, so the clue card matters a lot more than first instinct.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "cinema", label: "Cinema", color: "#f0c27b", clueIcon: "🎬", clueTitle: "Clapper", clueHint: "A movie clue card.", clueStyle: "iconOnly", wordIcons: { Montage: "🎞️", Closeup: "🎥", Screenplay: "📜", Credits: "🎬", Foley: "🎧", Storyboard: "🖼️" }, iconOnlyWords: ["Foley"], words: ["Montage", "Closeup", "Screenplay", "Credits", "Foley", "Storyboard"] },
      { id: "painting", label: "Painting", color: "#f6cf76", clueIcon: "🎨", clueTitle: "Palette", clueHint: "A painting clue card.", clueStyle: "iconWord", wordIcons: { Gesso: "🧴", Impasto: "🖌️", Glaze: "✨", Easel: "🖼️", Varnish: "🫙", Wash: "💧" }, words: ["Gesso", "Impasto", "Glaze", "Easel", "Varnish", "Wash"] },
      { id: "harbor", label: "Harbor", color: "#e8cc81", clueIcon: "⚓", clueTitle: "Anchor", clueHint: "A harbor clue card.", clueStyle: "wordOnly", wordIcons: { Estuary: "🌊", Breaker: "🌊", Trawler: "🚢", Keel: "🛶", Brine: "🧂", Tidepool: "🪸" }, words: ["Estuary", "Breaker", "Trawler", "Keel", "Brine", "Tidepool"] },
      { id: "detective", label: "Detective", color: "#f0be7a", clueIcon: "🕵️", clueTitle: "Casefile", clueHint: "A detective clue card.", clueStyle: "iconWord", wordIcons: { Alibi: "📝", Motive: "🎯", Witness: "👁️", Lead: "🧭", Interrogate: "💬", Suspect: "🕴️" }, words: ["Alibi", "Motive", "Witness", "Lead", "Interrogate", "Suspect"] },
      { id: "music", label: "Music", color: "#f4d688", clueIcon: "🎷", clueTitle: "Encore", clueHint: "A music clue card.", clueStyle: "iconWord", wordIcons: { Chorus: "🎶", Tempo: "🥁", Ballad: "🎤", Overture: "🎻", Bridge: "🎼", Cadence: "🎵" }, iconOnlyWords: ["Chorus"], words: ["Chorus", "Tempo", "Ballad", "Overture", "Bridge", "Cadence"] },
      { id: "fashion", label: "Fashion", color: "#f0c986", clueIcon: "🧥", clueTitle: "Runway", clueHint: "A fashion clue card.", clueStyle: "iconOnly", wordIcons: { Velvet: "🧵", Hemline: "✂️", Lapel: "🧥", Satin: "✨", Tailor: "🪡", Brocade: "🧶" }, iconOnlyWords: ["Lapel"], words: ["Velvet", "Hemline", "Lapel", "Satin", "Tailor", "Brocade"] }
    ]
  },
  {
    id: "night",
    name: "Deep Associations",
    moveBudget: 68,
    tagline: "Harder anchor cards, tighter moves, and more technical vocabulary.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "orbit", label: "Space", color: "#eac779", clueIcon: "🪐", clueTitle: "Orbit", clueHint: "A space clue card.", clueStyle: "iconOnly", wordIcons: { Apogee: "🚀", Eclipse: "🌘", Comet: "☄️", Zenith: "⭐", Nebula: "🌌", Quasar: "✨" }, iconOnlyWords: ["Comet"], words: ["Apogee", "Eclipse", "Comet", "Zenith", "Nebula", "Quasar"] },
      { id: "archive", label: "Archive", color: "#f0c37d", clueIcon: "🗃️", clueTitle: "Archive", clueHint: "A records clue card.", clueStyle: "wordOnly", wordIcons: { Index: "🗂️", Catalog: "📚", Draft: "📄", Ledger: "📒", Microfilm: "🎞️", Folder: "📁" }, words: ["Index", "Catalog", "Draft", "Ledger", "Microfilm", "Folder"] },
      { id: "testing", label: "Testing", color: "#edd48c", clueIcon: "🧪", clueTitle: "Sandbox", clueHint: "A testing clue card.", clueStyle: "iconWord", wordIcons: { Fixture: "🧷", Harness: "🪢", Regression: "🔁", Fuzzing: "🌀", Snapshot: "📸", Mock: "🎭" }, words: ["Fixture", "Harness", "Regression", "Fuzzing", "Snapshot", "Mock"] },
      { id: "security", label: "Security", color: "#f2bf79", clueIcon: "🔐", clueTitle: "Cipher", clueHint: "A security clue card.", clueStyle: "iconOnly", wordIcons: { Nonce: "🎟️", Firewall: "🧱", Keyring: "🗝️", Hashing: "♯", Payload: "📦", Uplink: "📡" }, iconOnlyWords: ["Firewall"], words: ["Nonce", "Firewall", "Keyring", "Hashing", "Payload", "Uplink"] },
      { id: "aviation", label: "Aviation", color: "#f3ca82", clueIcon: "🛩️", clueTitle: "Hangar", clueHint: "An aviation clue card.", clueStyle: "iconWord", wordIcons: { Aileron: "🪽", Runway: "🛬", Taxiway: "🛣️", Altimeter: "📟", Fuselage: "✈️", Beacon: "🚨" }, iconOnlyWords: ["Runway"], words: ["Aileron", "Runway", "Taxiway", "Altimeter", "Fuselage", "Beacon"] },
      { id: "medical", label: "Medical", color: "#f1c784", clueIcon: "🩺", clueTitle: "Clinic", clueHint: "A medical clue card.", clueStyle: "iconWord", wordIcons: { Sutures: "🪡", Triage: "🚑", Scalpel: "🔪", Bandage: "🩹", Stethoscope: "🩺", Saline: "💧" }, iconOnlyWords: ["Bandage"], words: ["Sutures", "Triage", "Scalpel", "Bandage", "Stethoscope", "Saline"] }
    ]
  },
  {
    id: "market",
    name: "Crowded Board",
    moveBudget: 69,
    tagline: "Five live clue stacks and tighter overlaps, closer to the mobile boards.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "bakery", label: "Bakery", color: "#f1c77b", clueIcon: "🥐", clueTitle: "Bakery", clueHint: "A bakery clue card.", clueStyle: "iconOnly", wordIcons: { Sourdough: "🍞", Brioche: "🥖", Cruller: "🍩", Focaccia: "🍞", Pretzel: "🥨", Baguette: "🥖" }, iconOnlyWords: ["Pretzel"], words: ["Sourdough", "Brioche", "Cruller", "Focaccia", "Pretzel", "Baguette"] },
      { id: "garden", label: "Garden", color: "#e5d07e", clueIcon: "🪴", clueTitle: "Planter", clueHint: "A garden clue card.", clueStyle: "iconWord", wordIcons: { Tulip: "🌷", Trowel: "🪴", Compost: "🍂", Seedling: "🌱", Trellis: "🪵", Mulch: "🪵" }, words: ["Tulip", "Trowel", "Compost", "Seedling", "Trellis", "Mulch"] },
      { id: "mountain", label: "Mountain", color: "#f0bc77", clueIcon: "🏔️", clueTitle: "Summit", clueHint: "A mountain clue card.", clueStyle: "wordOnly", wordIcons: { Glacier: "🧊", Ridge: "⛰️", Switchback: "🛤️", Avalanche: "❄️", Crampon: "🥾", Granite: "🪨" }, words: ["Glacier", "Ridge", "Switchback", "Avalanche", "Crampon", "Granite"] },
      { id: "arcade", label: "Arcade", color: "#f4d88a", clueIcon: "🕹️", clueTitle: "Arcade", clueHint: "An arcade clue card.", clueStyle: "iconWord", wordIcons: { Joystick: "🕹️", Token: "🪙", Cabinet: "🧰", Bonus: "✨", Highscore: "🏆", Continue: "⏯️" }, iconOnlyWords: ["Joystick"], words: ["Joystick", "Token", "Cabinet", "Bonus", "Highscore", "Continue"] },
      { id: "mythic", label: "Mythic", color: "#efc881", clueIcon: "🐉", clueTitle: "Dragon", clueHint: "A mythic clue card.", clueStyle: "iconOnly", wordIcons: { Griffin: "🦅", Relic: "🏺", Oracle: "🔮", Chimera: "🐲", Phoenix: "🔥", Rune: "ᚱ" }, iconOnlyWords: ["Phoenix"], words: ["Griffin", "Relic", "Oracle", "Chimera", "Phoenix", "Rune"] },
      { id: "records", label: "Records", color: "#f3cf8d", clueIcon: "📀", clueTitle: "Vinyl", clueHint: "A records clue card.", clueStyle: "iconOnly", wordIcons: { Needle: "📍", Tracklist: "📜", Turntable: "🎚️", Bside: "🅱️", Groove: "〰️", Sleeve: "🧥" }, iconOnlyWords: ["Turntable"], words: ["Needle", "Tracklist", "Turntable", "Bside", "Groove", "Sleeve"] }
    ]
  }
], T1 = [
  { id: "camping", label: "Camping", color: "#efc77f", clueIcon: "🏕️", clueTitle: "Campfire", clueHint: "A camping clue card.", clueStyle: "iconWord", wordIcons: { Lantern: "🏮", Compass: "🧭", Canteen: "🥤", Trailmix: "🥜", Bonfire: "🔥", Tentpole: "⛺" }, iconOnlyWords: ["Compass"], words: ["Lantern", "Compass", "Canteen", "Trailmix", "Bonfire", "Tentpole"] },
  { id: "coffee", label: "Coffee", color: "#f1c185", clueIcon: "☕", clueTitle: "Roastery", clueHint: "A coffee clue card.", clueStyle: "iconOnly", wordIcons: { Espresso: "☕", Grinder: "⚙️", Barista: "🧑‍🍳", Steamwand: "💨", Mug: "☕", Dripper: "🫗" }, iconOnlyWords: ["Espresso"], words: ["Espresso", "Grinder", "Barista", "Steamwand", "Mug", "Dripper"] },
  { id: "pirates", label: "Pirates", color: "#f0bb74", clueIcon: "🏴‍☠️", clueTitle: "Cutlass", clueHint: "A pirate clue card.", clueStyle: "wordOnly", wordIcons: { Plunder: "💰", Galleon: "🚢", Parrot: "🦜", Buccaneer: "🏴‍☠️", Compass: "🧭", Rigging: "🪢" }, words: ["Plunder", "Galleon", "Parrot", "Buccaneer", "Compass", "Rigging"] },
  { id: "trains", label: "Rail", color: "#ebce83", clueIcon: "🚂", clueTitle: "Railway", clueHint: "A railway clue card.", clueStyle: "iconWord", wordIcons: { Caboose: "🚃", Junction: "🛤️", Whistle: "🎺", Conductor: "🧢", Sleeper: "🛏️", Turntable: "🔄" }, iconOnlyWords: ["Caboose"], words: ["Caboose", "Junction", "Whistle", "Conductor", "Sleeper", "Turntable"] },
  { id: "courtroom", label: "Courtroom", color: "#f4ca86", clueIcon: "⚖️", clueTitle: "Verdict", clueHint: "A courtroom clue card.", clueStyle: "iconOnly", wordIcons: { Gavel: "🔨", Bailiff: "🧑‍✈️", Appeal: "📝", Witnessstand: "🪑", Objection: "❗", Exhibit: "📁" }, iconOnlyWords: ["Gavel"], words: ["Gavel", "Bailiff", "Appeal", "Witnessstand", "Objection", "Exhibit"] },
  { id: "robotics", label: "Robotics", color: "#f1d184", clueIcon: "🤖", clueTitle: "Servo", clueHint: "A robotics clue card.", clueStyle: "iconWord", wordIcons: { Sensor: "📡", Actuator: "⚙️", Firmware: "💾", Chassis: "🛞", Circuit: "🔌", Prototype: "🧪" }, iconOnlyWords: ["Sensor"], words: ["Sensor", "Actuator", "Firmware", "Chassis", "Circuit", "Prototype"] },
  { id: "photography", label: "Photo", color: "#f1c97f", clueIcon: "📷", clueTitle: "Darkroom", clueHint: "A photography clue card.", clueStyle: "iconOnly", wordIcons: { Aperture: "⭕", Shutter: "📸", Lenshood: "📷", Exposure: "💡", Tripod: "📐", Negatives: "🎞️" }, iconOnlyWords: ["Shutter"], words: ["Aperture", "Shutter", "Lenshood", "Exposure", "Tripod", "Negatives"] },
  { id: "festival", label: "Festival", color: "#f0c67a", clueIcon: "🎪", clueTitle: "Mainstage", clueHint: "A festival clue card.", clueStyle: "iconWord", wordIcons: { Wristband: "🎟️", Headliner: "🎤", Foodtruck: "🚚", Fireworks: "🎆", Confetti: "🎊", Merchbooth: "🛍️" }, iconOnlyWords: ["Fireworks"], words: ["Wristband", "Headliner", "Foodtruck", "Fireworks", "Confetti", "Merchbooth"] },
  { id: "winter", label: "Winter", color: "#dfe0f0", clueIcon: "❄️", clueTitle: "Snowdrift", clueHint: "A winter clue card.", clueStyle: "iconWord", wordIcons: { Sledding: "🛷", Icicle: "🧊", Mittens: "🧤", Blizzard: "🌨️", Skates: "⛸️", Thermos: "🥤" }, iconOnlyWords: ["Skates"], words: ["Sledding", "Icicle", "Mittens", "Blizzard", "Skates", "Thermos"] },
  { id: "beach", label: "Beach", color: "#f0d48b", clueIcon: "🏖️", clueTitle: "Boardwalk", clueHint: "A beach clue card.", clueStyle: "iconOnly", wordIcons: { Seashell: "🐚", Lifeguard: "🛟", Sunscreen: "🧴", Tide: "🌊", Umbrella: "⛱️", Sandcastle: "🏰" }, iconOnlyWords: ["Seashell"], words: ["Seashell", "Lifeguard", "Sunscreen", "Tide", "Umbrella", "Sandcastle"] },
  { id: "classroom", label: "Classroom", color: "#edd18a", clueIcon: "📝", clueTitle: "Chalkboard", clueHint: "A classroom clue card.", clueStyle: "wordOnly", wordIcons: { Homework: "📚", Popquiz: "❓", Eraser: "🧽", Locker: "🗄️", Syllabus: "📄", Highlighter: "🖍️" }, words: ["Homework", "Popquiz", "Eraser", "Locker", "Syllabus", "Highlighter"] },
  { id: "construction", label: "Construction", color: "#efbe73", clueIcon: "🏗️", clueTitle: "Blueprint", clueHint: "A construction clue card.", clueStyle: "iconWord", wordIcons: { Scaffolding: "🪜", Cement: "🪨", Hardhat: "⛑️", Drillbit: "🪛", Foreman: "🧑‍🏭", Rebar: "🧱" }, iconOnlyWords: ["Hardhat"], words: ["Scaffolding", "Cement", "Hardhat", "Drillbit", "Foreman", "Rebar"] },
  { id: "grocery", label: "Grocery", color: "#e7d381", clueIcon: "🛒", clueTitle: "Checkout", clueHint: "A grocery clue card.", clueStyle: "iconOnly", wordIcons: { Produce: "🥬", Receipt: "🧾", Aisle: "🛒", Freezer: "🧊", Barcode: "🏷️", Basket: "🧺" }, iconOnlyWords: ["Produce"], words: ["Produce", "Receipt", "Aisle", "Freezer", "Barcode", "Basket"] },
  { id: "aquarium", label: "Aquarium", color: "#9cd7df", clueIcon: "🐠", clueTitle: "Coral", clueHint: "An aquarium clue card.", clueStyle: "iconWord", wordIcons: { Seahorse: "🪸", Jellyfish: "🎐", Kelp: "🌿", Bubblejet: "🫧", Stingray: "🪼", Pebbles: "🪨" }, iconOnlyWords: ["Jellyfish"], words: ["Seahorse", "Jellyfish", "Kelp", "Bubblejet", "Stingray", "Pebbles"] },
  { id: "hotel", label: "Hotel", color: "#f0c987", clueIcon: "🛎️", clueTitle: "Concierge", clueHint: "A hotel clue card.", clueStyle: "iconWord", wordIcons: { Keycard: "🪪", Lobby: "🏨", Suite: "🛏️", Bellhop: "🧳", Doorman: "🚪", Checkout: "🧾" }, iconOnlyWords: ["Keycard"], words: ["Keycard", "Lobby", "Suite", "Bellhop", "Doorman", "Checkout"] },
  { id: "sushi", label: "Sushi", color: "#f2c18d", clueIcon: "🍣", clueTitle: "Wasabi", clueHint: "A sushi clue card.", clueStyle: "iconOnly", wordIcons: { Nigiri: "🍣", Soydish: "🥣", Chopsticks: "🥢", Miso: "🍜", Sashimi: "🐟", Ginger: "🫚" }, iconOnlyWords: ["Nigiri"], words: ["Nigiri", "Soydish", "Chopsticks", "Miso", "Sashimi", "Ginger"] },
  { id: "museum", label: "Museum", color: "#e5c67f", clueIcon: "🖼️", clueTitle: "Gallery", clueHint: "A museum clue card.", clueStyle: "iconWord", wordIcons: { Curator: "🧑‍🎨", Exhibitcase: "🪟", Sculpture: "🗿", Plaque: "🏷️", Docent: "🗣️", Restoration: "🪄" }, iconOnlyWords: ["Sculpture"], words: ["Curator", "Exhibitcase", "Sculpture", "Plaque", "Docent", "Restoration"] },
  { id: "sports", label: "Sports", color: "#f2cc7d", clueIcon: "🏟️", clueTitle: "Playbook", clueHint: "A sports clue card.", clueStyle: "iconOnly", wordIcons: { Kickoff: "🏈", Timeout: "⏱️", Dugout: "⚾", Jersey: "👕", Mascot: "🐻", Halftime: "🥁" }, iconOnlyWords: ["Kickoff"], words: ["Kickoff", "Timeout", "Dugout", "Jersey", "Mascot", "Halftime"] },
  { id: "gardenparty", label: "Garden Party", color: "#e7d78f", clueIcon: "🫖", clueTitle: "Gazebo", clueHint: "A garden-party clue card.", clueStyle: "iconWord", wordIcons: { Teapot: "🫖", Linen: "🧵", Pastry: "🥐", Centerpiece: "💐", RSVP: "✉️", Stringlights: "💡" }, iconOnlyWords: ["Teapot"], words: ["Teapot", "Linen", "Pastry", "Centerpiece", "RSVP", "Stringlights"] }
], M0 = ["Neon", "Hidden", "Silver", "Golden", "Velvet", "Shadow", "Signal", "Lantern", "Cipher", "Winding", "Midnight", "Crimson"], O0 = ["Crossroads", "Archive", "Promenade", "Relay", "Mix", "Circuit", "Carnival", "Station", "Harbor", "Mosaic", "Vault", "Parade"], C0 = [
  "A generated deal from the wider category vault.",
  "Fresh clue mixes from the expanding category pool.",
  "New associations every round, with a denser reserve behind them.",
  "A remixed board pulled from the larger rotating category set."
], _0 = /* @__PURE__ */ new Map();
function E1(i) {
  return Array.from(new Map(i.map((s) => [s.id, s])).values());
}
const A1 = E1([...ia.flatMap((i) => i.categories), ...T1]);
function z1(i, s) {
  const d = [4, 4, 4, 4, 4], r = s === 8 ? 5 : 4, f = vo([0, 1, 2, 3, 4], 49734321 + i * 97);
  for (let E = 0; E < r; E += 1) d[f[E % f.length]] += 1;
  return d;
}
function M1(i, s) {
  const d = i * 7, r = d - s.reduce((f, E) => f + E, 0);
  return d + r + 8;
}
function O1(i) {
  const s = _0.get(i);
  if (s) return s;
  let d = 1831565813 + i * 977;
  const r = i % 3 === 0 ? 8 : 7, f = vo(A1, d).slice(0, r), E = z1(i, r), R = M1(r, E);
  let q;
  [d, q] = su(d);
  const v = M0[Math.floor(q * M0.length)];
  [d, q] = su(d);
  const T = O0[Math.floor(q * O0.length)];
  [d, q] = su(d);
  const z = C0[Math.floor(q * C0.length)], N = {
    id: `generated-${i + 1}`,
    name: `Deal ${i + 1}: ${v} ${T}`,
    moveBudget: R,
    categories: f,
    columnHeights: E,
    tagline: z
  };
  return _0.set(i, N), N;
}
function Vl(i) {
  return i < ia.length ? ia[i] : O1(i);
}
function C1(i) {
  const s = i * 1664525 + 1013904223 >>> 0;
  return s === 0 ? 1 : s;
}
function su(i) {
  const s = C1(i);
  return [s, s / 4294967295];
}
function _1() {
  if (typeof window > "u") return 0;
  const i = window.localStorage.getItem(x0), s = i == null ? 0 : Number.parseInt(i, 10);
  return Number.isFinite(s) ? Math.max(0, s) : 0;
}
function D1(i) {
  typeof window < "u" && window.localStorage.setItem(x0, String(i));
}
function ji(i) {
  return i.map((s) => s.map((d) => ({ ...d })));
}
function xi(i) {
  return Object.fromEntries(Object.entries(i).map(([s, d]) => [s, d.map((r) => ({ ...r }))]));
}
function D0(i) {
  return i.map((s) => ({ ...s, card: { ...s.card } }));
}
function H0(i) {
  return i.map((s) => ({ ...s }));
}
function w0(i) {
  return i.map((s) => ({ ...s }));
}
function qi(i) {
  return [...i];
}
function Gi(i) {
  return [...i];
}
function Il(i) {
  return i ? i.kind === "waste" ? "waste" : i.kind === "clue" ? "clue" : `column-${i.index}` : "none";
}
function je(i) {
  return i[i.length - 1] ?? null;
}
function H1(i) {
  return { ...i };
}
function Li(i) {
  return [...i];
}
function Kt(i, s) {
  return s ? i.categories.find((d) => d.id === s) ?? null : null;
}
function Bi(i, s) {
  return i.foundationOrder.findIndex((d) => d === s);
}
function G0(i, s) {
  return s.categories.filter((d) => i.foundations[d.id].length === d.words.length).length;
}
function L0(i, s) {
  const d = i.wordIcons?.[s], r = i.iconOnlyWords?.includes(s) ? "iconOnly" : d ? "iconWord" : "word";
  return { id: `${i.id}-${s}`, label: s, categoryId: i.id, color: i.color, role: "word", faceIcon: d, faceStyle: r };
}
function w1(i) {
  const s = i.clueStyle === "iconOnly" ? "iconOnly" : i.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${i.id}-clue`, label: i.clueTitle, categoryId: i.id, color: i.color, role: "clue", faceIcon: i.clueIcon, faceStyle: s };
}
function ho(i, s) {
  return Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, i.columns[s].length));
}
function Y0(i, s) {
  return i.columns[s].slice(ho(i, s));
}
function yn(i) {
  return i[0] ?? null;
}
function Vt(i, s) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const R = je(i.waste);
    return R ? [R] : [];
  }
  const d = Y0(i, s.index);
  if (!d.length) return [];
  const r = d[d.length - 1];
  if (r.role === "clue") return [r];
  const f = r.categoryId;
  let E = d.length - 1;
  for (; E - 1 >= 0 && d[E - 1].role === "word" && d[E - 1].categoryId === f; ) E -= 1;
  return E - 1 >= 0 && d[E - 1].role === "clue" && d[E - 1].categoryId === f && (E -= 1), d.slice(E);
}
function X0(i, s) {
  const d = i.columns[s];
  if (!d.length) {
    i.hiddenCounts[s] = 0;
    return;
  }
  i.hiddenCounts[s] = Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, d.length - 1));
}
function R1(i, s) {
  X0(i, s), i.columns[s].length && (i.hiddenCounts[s] ?? 0) >= i.columns[s].length && (i.hiddenCounts[s] = i.columns[s].length - 1);
}
function U1(i) {
  return {
    columns: ji(i.columns),
    hiddenCounts: Li(i.hiddenCounts),
    reserve: [...i.reserve],
    waste: [...i.waste],
    foundations: xi(i.foundations),
    foundationOrder: qi(i.foundationOrder),
    clueDeck: Gi(i.clueDeck),
    activeClueCategoryId: i.activeClueCategoryId,
    selectedSource: i.selectedSource ? { ...i.selectedSource } : null,
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    message: i.message,
    mode: i.mode,
    boosters: H1(i.boosters)
  };
}
function ua(i) {
  i.history = [U1(i), ...i.history].slice(0, 24);
}
function N1(i) {
  const s = i.history[0];
  return !s || i.boosters.undo <= 0 ? !1 : (i.columns = ji(s.columns), i.hiddenCounts = Li(s.hiddenCounts), i.reserve = [...s.reserve], i.waste = [...s.waste], i.foundations = xi(s.foundations), i.foundationOrder = qi(s.foundationOrder), i.clueDeck = Gi(s.clueDeck), i.activeClueCategoryId = s.activeClueCategoryId, i.selectedSource = s.selectedSource ? { ...s.selectedSource } : null, i.movesLeft = s.movesLeft, i.score = s.score, i.streak = s.streak, i.message = "Undo used.", i.mode = s.mode, i.boosters = { ...s.boosters, undo: Math.max(0, i.boosters.undo - 1) }, i.history = i.history.slice(1), !0);
}
function au(i, s, d = 0) {
  const r = Vl(i), f = [];
  for (const M of r.categories) {
    f.push(w1(M));
    for (const te of M.words) f.push(L0(M, te));
  }
  let E = 5370206 + i * 131;
  const R = [...f];
  for (let M = R.length - 1; M > 0; M -= 1) {
    let te;
    [E, te] = su(E);
    const X = Math.floor(te * (M + 1));
    [R[M], R[X]] = [R[X], R[M]];
  }
  const q = [];
  let v = 0;
  for (const M of r.columnHeights)
    q.push(R.slice(v, v + M)), v += M;
  const T = q.map((M) => Math.max(0, M.length - 1)), z = R.slice(v).reverse(), N = Object.fromEntries(r.categories.map((M) => [M.id, []]));
  return {
    mode: "title",
    levelIndex: i,
    columns: q,
    hiddenCounts: T,
    reserve: z,
    waste: [],
    foundations: N,
    foundationOrder: Array.from({ length: Ni }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: r.moveBudget,
    score: d,
    streak: 0,
    bestScore: _1(),
    message: "Uncover clue cards from the deal, claim crowns, and stack matching words by association.",
    fullscreen: s,
    particles: [],
    motionCards: [],
    feedbackTexts: [],
    foundationPulses: [],
    history: [],
    boosters: { undo: 1, joker: 0, shuffle: 1 }
  };
}
function mo(i) {
  const s = [];
  i.columns.forEach((E, R) => {
    const q = { kind: "column", index: R }, v = Vt(i, q), T = yn(v), z = je(v);
    T && z && s.push({ source: q, card: T, topCard: z, run: v });
  });
  const d = Vt(i, { kind: "waste" }), r = yn(d), f = je(d);
  return r && f && s.push({ source: { kind: "waste" }, card: r, topCard: f, run: d }), s;
}
function yo(i, s, d) {
  return d?.kind === "column" && s === void 0 ? !1 : s.length === 0 || je(s)?.categoryId === i.categoryId;
}
function go(i, s = Vl(i.levelIndex)) {
  const d = mo(i);
  let r = !1, f = !1, E = !1, R = !1, q = !1, v = !1, T = !1, z = "", N = "";
  for (const { source: M, card: te, topCard: X } of d) {
    const $ = Kt(s, te.categoryId);
    if (!$) continue;
    const Ve = i.foundations[te.categoryId].length < $.words.length;
    te.role === "clue" && Ve && i.foundationOrder.includes(null) && (r = !0, N || (N = `${te.label} can claim an empty crown.`));
    const ye = Bi(i, X.categoryId);
    X.role === "word" && ye >= 0 && Ve && (f = !0, z || (z = `${X.label} matches the ${$.clueTitle} clue.`));
    for (let xe = 0; xe < i.columns.length; xe += 1)
      if (!(M.kind === "column" && M.index === xe) && yo(te, i.columns[xe], M)) {
        E = !0, z || (z = `${te.label} can park on column ${xe + 1}.`);
        break;
      }
    X.role === "word" && i.boosters.joker > 0 && ye >= 0 && Ve && (q = !0, z || (z = `Use Joker on ${X.label} if you want to preserve the board.`));
  }
  return i.reserve.length > 0 && (R = !0, z || (z = "Draw from the reserve pile.")), i.boosters.shuffle > 0 && i.reserve.length + i.waste.length > 0 && (v = !0, z || (z = "Use Shuffle to recycle the reserve and waste piles.")), i.boosters.undo > 0 && i.history.length > 0 && (T = !0, z || (z = "Use Undo to back out of the dead end.")), r && N && (z = N), {
    cluePlacement: r,
    foundationSort: f,
    columnParking: E,
    reserveDraw: R,
    joker: q,
    shuffle: v,
    undo: T,
    any: r || f || E || R || q || v || T,
    hint: z || "No legal moves remain."
  };
}
function Hi(i) {
  const s = Vl(i.levelIndex);
  if (s.categories.every((f) => i.foundations[f.id].length === f.words.length)) {
    i.mode = "won", i.message = "All category stacks cleared. Clean round.", i.score > i.bestScore && (i.bestScore = i.score, D1(i.score));
    return;
  }
  if (i.movesLeft <= 0) {
    i.mode = "lost", i.message = "Out of moves. That deal is dead.";
    return;
  }
  go(i, s).any || (i.mode = "lost", i.message = "No legal moves remain. That deal is dead.");
}
function wi(i, s, d) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const f = i.waste.pop();
    return f ? [f] : [];
  }
  const r = i.columns[s.index].splice(Math.max(0, i.columns[s.index].length - d), d);
  return R1(i, s.index), r;
}
function fo(i, s, d, r) {
  for (let f = 0; f < 10; f += 1) {
    const E = f / 10 * Math.PI * 2;
    i.particles.push({ x: s, y: d, vx: Math.cos(E) * (1.2 + f * 0.12), vy: Math.sin(E) * (1.2 + f * 0.1) - 1.8, size: 8 + f % 3, life: 460, maxLife: 460, color: r });
  }
}
function St(i, s, d, r, f, E = 0.2) {
  i.feedbackTexts.push({ text: s, x: d, y: r, life: 720, maxLife: 720, color: f, scale: E });
}
function uu(i, s, d) {
  i.foundationPulses = i.foundationPulses.filter((r) => r.slotIndex !== s), i.foundationPulses.push({ slotIndex: s, color: d, life: 520, maxLife: 520 });
}
function iu(i, s, d, r, f) {
  i.motionCards.push({
    card: s,
    fromX: d.x,
    fromY: d.y,
    toX: r.x,
    toY: r.y,
    w: r.w,
    h: r.h,
    life: 420,
    maxLife: 420,
    arc: f ? 14 : 22,
    compact: f
  });
}
function B1(i) {
  return go(i).hint;
}
function vo(i, s) {
  const d = [...i];
  let r = s;
  for (let f = d.length - 1; f > 0; f -= 1) {
    let E;
    [r, E] = su(r);
    const R = Math.floor(E * (f + 1));
    [d[f], d[R]] = [d[R], d[f]];
  }
  return d;
}
function pt(i, s, d) {
  return i >= d.x && i <= d.x + d.w && s >= d.y && s <= d.y + d.h;
}
function Ye(i) {
  const r = Ze - 502 - 28, f = Math.max(72, Math.min(84, Math.floor((r - 8 * Math.max(0, Ni - 1)) / Ni))), E = i.columnHeights.length >= 6 ? 116 : 136, R = i.columnHeights.length >= 6 ? 18 : 20, q = i.columnHeights.length * E + Math.max(0, i.columnHeights.length - 1) * R, v = Math.round((Ze - q) / 2);
  return {
    reserve: { x: 92, y: 168, w: 102, h: 142 },
    waste: { x: 224, y: 168, w: 114, h: 150 },
    clue: { x: 360, y: 152, w: 124, h: 170 },
    foundations: Array.from({ length: Ni }, (T, z) => ({ x: 502 + z * (f + 8), y: 112, w: f, h: 214 })),
    columns: i.columnHeights.map((T, z) => ({ x: v + z * (E + R), y: 360, w: E, h: 638 }))
  };
}
function Ri(i, s, d) {
  const r = i.getBoundingClientRect();
  return !r.width || !r.height ? null : {
    x: (s - r.left) / r.width * Ze,
    y: (d - r.top) / r.height * bt
  };
}
function hn() {
  if (typeof window > "u") return { width: 1440, height: 960 };
  const i = window.visualViewport;
  return {
    width: Math.round(i?.width ?? window.innerWidth),
    height: Math.round(i?.height ?? window.innerHeight)
  };
}
function j1(i, s, d, r) {
  const f = Ye(i);
  if (je(s.waste) && pt(d, r, f.waste)) return { kind: "waste" };
  if (s.activeClueCategoryId && pt(d, r, f.clue)) return { kind: "clue" };
  for (let R = s.columns.length - 1; R >= 0; R -= 1) {
    if (!s.columns[R].length) continue;
    const v = q1(i, s, R);
    if (v && pt(d, r, v))
      return { kind: "column", index: R };
  }
  return null;
}
function R0(i, s, d, r, f, E) {
  const R = yn(r), q = je(r), v = Ye(i);
  for (let T = 0; T < v.foundations.length; T += 1) {
    if (!pt(f, E, v.foundations[T])) continue;
    if (R?.role === "clue") {
      if (s.foundationOrder[T] == null) return { kind: "foundation", index: T };
      continue;
    }
    const z = s.foundationOrder[T];
    if (z && q?.role === "word" && q.categoryId === z) return { kind: "foundation", index: T };
  }
  for (let T = 0; T < v.columns.length; T += 1)
    if (pt(f, E, v.columns[T])) {
      if (d.kind === "column" && d.index === T) return null;
      if (R && yo(R, s.columns[T], d)) return { kind: "column", index: T };
    }
  return null;
}
function Xi(i, s, d) {
  const r = Ye(i).columns[d], f = s.columns[d], { hiddenCount: E, hiddenStep: R, visibleStep: q } = x1(i, s, d), v = [];
  let T = r.y + 24;
  return f.forEach((z, N) => {
    const M = N < E, te = N === f.length - 1;
    v.push({ x: r.x + 10, y: T, w: r.w - 20, h: M ? q0 : so, hidden: M, top: te }), T += M ? R : q;
  }), v;
}
function x1(i, s, d) {
  const r = Ye(i).columns[d], f = s.columns[d], E = ho(s, d), R = Math.max(0, f.length - E), q = r.h - 48, v = R > 0 ? so : q0;
  let T = E > 0 ? g1 : 0, z = R > 1 ? y1 : 0;
  const N = () => E * T + Math.max(0, R - 1) * z + v;
  if (N() > q && E > 0) {
    const M = Math.max(0, q - v - Math.max(0, R - 1) * z);
    T = Math.max(S1, Math.floor(M / E));
  }
  if (N() > q && R > 1) {
    const M = Math.max(0, q - v - E * T);
    z = Math.max(v1, Math.floor(M / (R - 1)));
  }
  if (N() > q && E > 0) {
    const M = Math.max(0, q - v - Math.max(0, R - 1) * z);
    T = Math.max(4, Math.floor(M / E));
  }
  if (N() > q && R > 1) {
    const M = Math.max(0, q - v - E * T);
    z = Math.max(6, Math.floor(M / (R - 1)));
  }
  return { hiddenCount: E, visibleCount: R, hiddenStep: T, visibleStep: z };
}
function q1(i, s, d) {
  const r = Xi(i, s, d).filter((R) => !R.hidden);
  if (!r.length) return null;
  const f = r[0], E = r[r.length - 1];
  return {
    x: f.x,
    y: f.y,
    w: f.w,
    h: E.y + E.h - f.y
  };
}
function Ui(i, s, d, r) {
  return d.kind === "clue" ? [{ x: Ye(i).clue.x, y: Ye(i).clue.y, w: Ye(i).clue.w, h: Ye(i).clue.h }] : d.kind === "waste" ? [{ x: Ye(i).waste.x, y: Ye(i).waste.y, w: Ye(i).waste.w, h: Ye(i).waste.h }] : Xi(i, s, d.index).slice(-r);
}
function G1(i, s, d, r) {
  return Xi(i, s, d).slice(-r);
}
function ru(i, s, d) {
  const r = Ye(i).foundations[s], f = Math.min(Math.max(d, 0), 3), E = f > 0 ? f - 1 : 0;
  return {
    x: r.x + 14 + E * 3,
    y: r.y + 126,
    w: r.w - 28,
    h: 54
  };
}
function U0(i, s, d) {
  const r = s.foundationOrder[d], f = r ? s.foundations[r] : [];
  return ru(i, d, f.length);
}
function N0(i, s) {
  const d = Ye(i).foundations[s];
  return { x: d.x + 10, y: d.y + 10, w: d.w - 20, h: 104 };
}
function L1(i) {
  const s = Vl(i.levelIndex), d = go(i, s), r = mo(i).filter(({ card: f }) => f.role === "clue").map(({ source: f, card: E }) => ({ source: Il(f), label: E.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: i.mode,
    levelNumber: i.levelIndex + 1,
    dealType: i.levelIndex < ia.length ? "curated" : "generated",
    level: s.name,
    tagline: s.tagline,
    totalCategories: s.categories.length,
    crownSlots: i.foundationOrder.length,
    completedCategories: G0(i, s),
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    selectedSource: Il(i.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: r,
    reserveCount: i.reserve.length,
    wasteTop: je(i.waste)?.label ?? null,
    foundations: i.foundationOrder.map((f, E) => ({
      slot: E,
      clueIcon: Kt(s, f)?.clueIcon ?? null,
      clueTitle: Kt(s, f)?.clueTitle ?? null,
      count: f ? i.foundations[f].length : 0,
      words: f ? i.foundations[f].map((R) => R.label) : []
    })),
    columns: i.columns.map((f, E) => ({
      index: E,
      count: f.length,
      hidden: i.hiddenCounts[E] ?? 0,
      top: je(f)?.label ?? null,
      topRole: je(f)?.role ?? null,
      topDisplay: je(f)?.faceStyle === "iconOnly" ? je(f)?.faceIcon ?? je(f)?.label ?? null : je(f)?.label ?? null,
      revealed: Y0(i, E).map((R) => ({ label: R.label, role: R.role, display: R.faceStyle === "iconOnly" ? R.faceIcon ?? R.label : R.label, faceStyle: R.faceStyle ?? "word" }))
    })),
    boosters: i.boosters,
    actions: d,
    animations: { motionCards: i.motionCards.length, feedbackTexts: i.feedbackTexts.length, foundationPulses: i.foundationPulses.length },
    message: i.message,
    fullscreen: i.fullscreen
  });
}
function Ce(i, s, d, r, f, E) {
  i.beginPath(), i.moveTo(s + E, d), i.arcTo(s + r, d, s + r, d + f, E), i.arcTo(s + r, d + f, s, d + f, E), i.arcTo(s, d + f, s, d, E), i.arcTo(s, d, s + r, d, E), i.closePath();
}
function cu(i, s, d, r, f, E, R, q = "#10302a") {
  i.fillStyle = E, Ce(i, s, d, r, f, f / 2), i.fill(), i.fillStyle = q, i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(R, s + r / 2, d + f / 2 + 6);
}
function Y1(i, s, d, r, f, E, R) {
  for (let q = r; q >= f; q -= 1)
    if (i.font = `${E} ${q}px ${R}`, i.measureText(s).width <= d) return q;
  return f;
}
function oo(i, s, d, r, f, E, R, q, v) {
  const T = Y1(i, s, f, E, R, q, v);
  return i.font = `${q} ${T}px ${v}`, i.fillText(s, d, r), T;
}
function X1(i, s, d, r, f, E) {
  Yi(i, s, d, r, f, 18, 0.26);
  const R = i.createLinearGradient(s, d, s, d + f);
  R.addColorStop(0, "#fff2c8"), R.addColorStop(1, "#efbf58"), i.fillStyle = R, Ce(i, s, d, r, f, 18), i.fill(), i.strokeStyle = "rgba(138, 95, 16, 0.38)", i.lineWidth = 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Ce(i, s + 10, d + 10, r - 20, 22, 11), i.fill(), i.fillStyle = "#7b5310", i.font = "800 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("CROWN", s + r / 2, d + 26), i.fillStyle = "#7b5310", E.clueStyle !== "wordOnly" && (i.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(E.clueIcon, s + r / 2, E.clueStyle === "iconOnly" ? d + 76 : d + 64)), E.clueStyle !== "iconOnly" && oo(
    i,
    E.clueTitle,
    s + r / 2,
    E.clueStyle === "wordOnly" ? d + 76 : d + 98,
    r - 18,
    E.clueStyle === "wordOnly" ? 24 : 17,
    E.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function Yi(i, s, d, r, f, E = 18, R = 0.28) {
  i.save(), i.shadowColor = `rgba(4, 14, 22, ${R})`, i.shadowBlur = E, i.shadowOffsetY = 10, i.fillStyle = "rgba(0,0,0,0.01)", Ce(i, s, d, r, f, 20), i.fill(), i.restore();
}
function fu(i, s, d, r, f) {
  Yi(i, s, d, r, f, 16, 0.24);
  const E = i.createLinearGradient(s, d, s + r, d + f);
  E.addColorStop(0, "#4874b9"), E.addColorStop(1, "#254d83"), i.fillStyle = E, Ce(i, s, d, r, f, 18), i.fill(), i.strokeStyle = "rgba(255,255,255,0.3)", i.lineWidth = 2, i.stroke(), i.strokeStyle = "rgba(255,255,255,0.22)", i.lineWidth = 1.5, Ce(i, s + 8, d + 8, r - 16, f - 16, 14), i.stroke(), i.fillStyle = "rgba(255,255,255,0.18)";
  for (let R = 0; R < 3; R += 1)
    for (let q = 0; q < 2; q += 1) {
      const v = s + 26 + q * 34, T = d + 24 + R * 26;
      Ce(i, v, T, 18, 12, 6), i.fill();
    }
}
function ou(i, s, d, r, f, E, R, q = !1) {
  const v = q || f <= 86;
  if (E.role === "clue") {
    Yi(i, s, d, r, f, R ? 18 : 14, R ? 0.3 : 0.24);
    const N = i.createLinearGradient(s, d, s, d + f);
    N.addColorStop(0, "#fff2c8"), N.addColorStop(1, "#efbf58"), i.fillStyle = N, Ce(i, s, d, r, f, v ? 14 : 18), i.fill(), i.strokeStyle = R ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", i.lineWidth = R ? 3 : 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Ce(i, s + 8, d + 8, r - 16, v ? 14 : 18, 12), i.fill(), i.fillStyle = "#7b5310", i.textAlign = "center", i.font = v ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", i.fillText("CLUE", s + r / 2, d + (v ? 18 : 26)), E.faceStyle !== "word" && E.faceIcon && (i.font = v ? E.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(E.faceIcon, s + r / 2, d + (E.faceStyle === "iconOnly" ? v ? 40 : 50 : v ? 34 : 38))), E.faceStyle !== "iconOnly" && oo(
      i,
      E.label,
      s + r / 2,
      d + (E.faceStyle === "word" ? v ? 46 : 54 : v ? 52 : 62),
      r - (v ? 16 : 22),
      v ? 10 : 18,
      v ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), v || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(123,83,16,0.74)", i.fillText("CLAIM A CROWN", s + r / 2, d + f - 12));
    return;
  }
  Yi(i, s, d, r, f, R ? 18 : 14, R ? 0.28 : 0.22);
  const T = i.createLinearGradient(s, d, s, d + f);
  T.addColorStop(0, "#fffef8"), T.addColorStop(1, "#f4efe4"), i.fillStyle = T, Ce(i, s, d, r, f, v ? 14 : 18), i.fill(), i.strokeStyle = R ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", i.lineWidth = R ? 3 : 2, i.stroke();
  const z = i.createLinearGradient(s, d + 8, s + r, d + 8);
  z.addColorStop(0, "#f3d9a7"), z.addColorStop(1, "#e8c77f"), i.fillStyle = z, Ce(i, s + 8, d + 8, r - 16, v ? 14 : 18, 12), i.fill(), i.fillStyle = "#102422", i.textAlign = "center", E.faceStyle === "iconOnly" && E.faceIcon ? (i.font = v ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(E.faceIcon, s + r / 2, d + (v ? 42 : 50)), v || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.42)", i.fillText("IMAGE CARD", s + r / 2, d + 66))) : (E.faceStyle === "iconWord" && E.faceIcon && (i.font = v ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(E.faceIcon, s + r / 2, d + (v ? 27 : 28))), oo(
    i,
    E.label,
    s + r / 2,
    d + (v ? 46 : E.faceStyle === "iconWord" ? 52 : 44),
    r - (v ? 16 : 22),
    v ? 12 : 19,
    v ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), v || (i.font = "600 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.4)", i.fillText(E.faceStyle === "iconWord" ? "ICON CARD" : "WORD", s + r / 2, d + 64)));
}
function B0(i) {
  return 1 - (1 - i) ** 3;
}
function Q1(i, s, d) {
  const r = Vl(s.levelIndex), f = Ye(r);
  i.clearRect(0, 0, Ze, bt);
  const E = i.createLinearGradient(0, 0, 0, bt);
  E.addColorStop(0, "#246a61"), E.addColorStop(0.48, "#154642"), E.addColorStop(1, "#092225"), i.fillStyle = E, i.fillRect(0, 0, Ze, bt);
  const R = i.createLinearGradient(0, 0, Ze, bt);
  R.addColorStop(0, "rgba(255,255,255,0.025)"), R.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = R;
  for (let z = 0; z < 7; z += 1)
    for (let N = 0; N < 5; N += 1)
      Ce(i, 18 + N * 188, 18 + z * 168, 120, 72, 24), i.fill();
  i.save();
  const q = i.createRadialGradient(128, 112, 10, 128, 112, 420);
  q.addColorStop(0, "rgba(211, 255, 231, 0.24)"), q.addColorStop(1, "rgba(211, 255, 231, 0)"), i.fillStyle = q, i.fillRect(0, 0, Ze, bt);
  const v = i.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (v.addColorStop(0, "rgba(255, 226, 164, 0.2)"), v.addColorStop(1, "rgba(255, 226, 164, 0)"), i.fillStyle = v, i.fillRect(0, 0, Ze, bt), i.restore(), i.fillStyle = "#f7fff9", i.textAlign = "left", i.font = "800 28px Trebuchet MS, sans-serif", i.fillText(r.name, 76, 58), i.font = "600 15px Trebuchet MS, sans-serif", i.fillStyle = "rgba(247,255,249,0.76)", i.fillText(r.tagline, 76, 84), Ce(i, 78, 108, 286, 228, 32), i.fillStyle = "rgba(4,16,20,0.3)", i.fill(), cu(i, 102, 124, 110, 34, "rgba(255,255,255,0.12)", "Reserve", "#eff8f3"), cu(i, 240, 124, 92, 34, "rgba(255,255,255,0.12)", "Waste", "#eff8f3"), s.reserve.length ? (fu(i, f.reserve.x, f.reserve.y + 10, f.reserve.w, f.reserve.h), fu(i, f.reserve.x + 6, f.reserve.y + 4, f.reserve.w, f.reserve.h), fu(i, f.reserve.x + 12, f.reserve.y - 2, f.reserve.w, f.reserve.h), cu(i, f.reserve.x + 24, f.reserve.y + 92, 74, 34, "#ffe59f", String(s.reserve.length))) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Ce(i, f.reserve.x + 12, f.reserve.y, f.reserve.w, f.reserve.h, 20), i.stroke(), i.setLineDash([])), s.waste.length) {
    const z = je(s.waste);
    (s.waste.length > 1 || d?.source.kind === "waste" && d.moved) && fu(i, f.waste.x + 6, f.waste.y + 4, f.reserve.w, f.reserve.h), d?.source.kind === "waste" && d.moved || ou(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, z, s.selectedSource?.kind === "waste");
  } else
    i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Ce(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, 20), i.stroke(), i.setLineDash([]);
  if (s.foundationOrder.forEach((z, N) => {
    const M = f.foundations[N], te = Kt(r, z), X = te ? s.foundations[te.id] : [], $ = s.foundationPulses.find((ye) => ye.slotIndex === N), Ve = d?.dropTarget?.kind === "foundation" && d.dropTarget.index === N;
    if ($) {
      const ye = $.life / $.maxLife;
      i.save(), i.globalAlpha = 0.22 * ye, i.fillStyle = "#ffe59b", Ce(i, M.x - 8, M.y - 8, M.w + 16, M.h + 16, 30), i.fill(), i.restore();
    }
    if (i.fillStyle = Ve ? "rgba(255, 238, 182, 0.16)" : "rgba(255,255,255,0.08)", Ce(i, M.x, M.y, M.w, M.h, 24), i.fill(), Ve && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Ce(i, M.x, M.y, M.w, M.h, 24), i.stroke()), te ? X1(i, M.x + 10, M.y + 10, M.w - 20, 104, te) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([6, 8]), Ce(i, M.x + 12, M.y + 12, M.w - 24, 102, 18), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.7)", i.textAlign = "center", i.fillText("Empty Crown", M.x + M.w / 2, M.y + 56), i.fillText("Drop Clue", M.x + M.w / 2, M.y + 76)), te && X.length) {
      const ye = X.slice(-3);
      ye.forEach((xe, Ee) => {
        ou(i, M.x + 14 + Ee * 3, M.y + 126 + (ye.length - Ee - 1) * 5, M.w - 28, 54, xe, !1, !0);
      });
    } else
      i.strokeStyle = "rgba(255,255,255,0.18)", i.setLineDash([6, 8]), i.lineWidth = 2, Ce(i, M.x + 16, M.y + 126, M.w - 32, 70, 16), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.68)", i.textAlign = "center", i.fillText(te ? "Build Here" : "Need Clue", M.x + M.w / 2, M.y + 168);
    i.fillStyle = "#eff9f3", i.font = "600 14px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(te ? `${X.length}/${te.words.length}` : "0/6", M.x + M.w / 2, M.y + M.h - 26), i.fillStyle = "rgba(255,255,255,0.9)", i.fillRect(M.x + 16, M.y + M.h - 16, te ? (M.w - 32) * X.length / te.words.length : 0, 8), i.strokeStyle = "rgba(255,255,255,0.18)", i.strokeRect(M.x + 16, M.y + M.h - 16, M.w - 32, 8);
  }), s.columns.forEach((z, N) => {
    const M = f.columns[N], te = Xi(r, s, N), X = d?.dropTarget?.kind === "column" && d.dropTarget.index === N;
    i.fillStyle = X ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", Ce(i, M.x, M.y, M.w, M.h, 28), i.fill(), X && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Ce(i, M.x, M.y, M.w, M.h, 28), i.stroke()), z.length || (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Ce(i, M.x + 10, M.y + 24, M.w - 20, so, 20), i.stroke(), i.setLineDash([]), i.fillStyle = "rgba(239,249,243,0.74)", i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("Drop Here", M.x + M.w / 2, M.y + 98));
    const $ = ho(s, N), Ve = d?.moved && d.source.kind === "column" && d.source.index === N ? d.cards.length : 0, ye = Math.max($, z.length - Ve);
    z.forEach((xe, Ee) => {
      if (Ee >= ye) return;
      const De = te[Ee];
      if (!De) return;
      const fl = Ee < $, Ke = Ee === ye - 1;
      if (fl) {
        fu(i, De.x, De.y, De.w, De.h);
        return;
      }
      ou(
        i,
        De.x,
        De.y,
        De.w,
        De.h,
        xe,
        Ke && s.selectedSource?.kind === "column" && s.selectedSource.index === N && !d,
        !1
      );
    });
  }), d?.moved && (i.save(), i.globalAlpha = 0.96, d.cards.forEach((z, N) => {
    ou(
      i,
      d.x - z0 / 2,
      d.y - 52 + N * p1,
      z0,
      b1,
      z,
      !0,
      !1
    );
  }), i.restore()), s.motionCards.forEach((z) => {
    const N = B0(1 - z.life / z.maxLife), M = z.fromX + (z.toX - z.fromX) * N, te = z.fromY + (z.toY - z.fromY) * N - Math.sin(N * Math.PI) * z.arc;
    i.save(), i.globalAlpha = 0.92, ou(i, M, te, z.w, z.h, z.card, !1, z.compact), i.restore();
  }), s.feedbackTexts.forEach((z) => {
    const N = 1 - z.life / z.maxLife, M = 1 - N, te = z.y - N * 36, X = 0.92 + z.scale * B0(N);
    i.save(), i.globalAlpha = M, i.translate(z.x, te), i.scale(X, X), i.textAlign = "center", i.font = "800 28px Trebuchet MS, sans-serif", i.strokeStyle = "rgba(7,18,18,0.34)", i.lineWidth = 8, i.strokeText(z.text, 0, 0), i.fillStyle = z.color, i.fillText(z.text, 0, 0), i.restore();
  }), i.fillStyle = "rgba(5,16,18,0.58)", Ce(i, 70, 1030, Ze - 140, 136, 30), i.fill(), [
    { label: "Moves", value: String(s.movesLeft), color: "#fff5cc" },
    { label: "Streak", value: String(s.streak), color: "#d5fff1" },
    { label: "Score", value: String(s.score), color: "#d6ecff" },
    { label: "Undo", value: String(s.boosters.undo), color: "#ffe7c1" },
    { label: "Joker", value: String(s.boosters.joker), color: "#ffdcd5" },
    { label: "Shuffle", value: String(s.boosters.shuffle), color: "#e0d9ff" }
  ].forEach((z, N) => {
    const M = 96 + N * 142;
    Ce(i, M, 1048, 122, 60, 20), i.fillStyle = "rgba(255,255,255,0.08)", i.fill(), i.fillStyle = z.color, i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(z.label, M + 14, 1070), i.fillStyle = "#f4fff8", i.font = "800 22px Trebuchet MS, sans-serif", i.fillText(z.value, M + 14, 1094);
  }), i.fillStyle = "#eef9f4", i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(s.message, 96, 1140), s.particles.forEach((z) => {
    i.save(), i.globalAlpha = z.life / z.maxLife, i.fillStyle = z.color, Ce(i, z.x - z.size / 2, z.y - z.size / 2, z.size, z.size, 5), i.fill(), i.restore();
  }), s.mode !== "playing") {
    const z = s.mode === "lost" && s.movesLeft <= 0;
    i.fillStyle = "rgba(7,12,18,0.74)", Ce(i, 120, 384, Ze - 240, 292, 32), i.fill(), cu(i, Ze / 2 - 102, 426, 204, 38, "rgba(255,255,255,0.12)", s.mode === "title" ? "Fresh Shuffle" : s.mode === "won" ? "Perfect Sort" : z ? "Out of Moves" : "Dead End", "#f4fff8"), i.fillStyle = "#fff4c8", i.textAlign = "center", i.font = "800 44px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Word Sort Solitaire" : s.mode === "won" ? "Round Complete" : z ? "Out of Moves" : "No Legal Moves", Ze / 2, 510), i.fillStyle = "#eef9f4", i.font = "600 22px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Clue cards are buried in the deal. Uncover them, claim crowns, and sort the matching words." : s.message, Ze / 2, 566), i.font = "600 18px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,244,0.82)", i.fillText(s.mode === "won" ? "Tap to deal the next board." : "Tap anywhere on the board to play.", Ze / 2, 604), cu(i, Ze / 2 - 126, 620, 252, 56, "#ffd47b", s.mode === "won" ? "Tap For Next Deal" : "Tap To Start");
  }
}
function j0(i, s) {
  const d = [];
  for (const r of i.particles)
    r.life -= s, !(r.life <= 0) && (r.x += r.vx * (s / 16), r.y += r.vy * (s / 16), r.vy += 0.04 * (s / 16), d.push(r));
  i.particles = d, i.motionCards = i.motionCards.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.feedbackTexts = i.feedbackTexts.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.foundationPulses = i.foundationPulses.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : []));
}
function Zl(i) {
  return {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    color: i ? "#102522" : "#effaf4",
    background: i ? "linear-gradient(180deg, #ffe5a3 0%, #ffc45f 100%)" : "rgba(255,255,255,0.12)",
    boxShadow: i ? "0 10px 20px rgba(255, 188, 92, 0.25)" : "inset 0 0 0 1px rgba(255,255,255,0.14)",
    textAlign: "center",
    lineHeight: 1.2,
    minWidth: 0,
    whiteSpace: "normal",
    wordBreak: "break-word"
  };
}
function mn(i, s) {
  return i.length <= s ? i : `${i.slice(0, Math.max(1, s - 1))}…`;
}
function Z1() {
  const i = dl.useRef(null);
  i.current || (i.current = au(0, !1));
  const s = dl.useRef(null), d = dl.useRef(null), r = dl.useRef(null), f = dl.useRef(i.current), E = dl.useRef(null), R = dl.useRef("off"), q = dl.useRef(null), [v, T] = dl.useState(i.current), [z, N] = dl.useState(() => hn()), [M, te] = dl.useState("off"), X = () => T({ ...f.current, columns: ji(f.current.columns), hiddenCounts: Li(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: xi(f.current.foundations), foundationOrder: qi(f.current.foundationOrder), clueDeck: Gi(f.current.clueDeck), particles: [...f.current.particles], motionCards: D0(f.current.motionCards), feedbackTexts: H0(f.current.feedbackTexts), foundationPulses: w0(f.current.foundationPulses) }), $ = Vl(v.levelIndex), Ve = G0(v, $), ye = (O) => {
    R.current = O, te(O), f.current.fullscreen = O !== "off";
  }, xe = (O) => {
    if (typeof document > "u") return;
    const B = document.documentElement, D = document.body;
    if (O) {
      q.current || (q.current = {
        htmlOverflow: B.style.overflow,
        bodyOverflow: D.style.overflow,
        htmlOverscroll: B.style.overscrollBehavior,
        bodyOverscroll: D.style.overscrollBehavior
      }), B.style.overflow = "hidden", D.style.overflow = "hidden", B.style.overscrollBehavior = "none", D.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const Y = q.current;
    Y && (B.style.overflow = Y.htmlOverflow, D.style.overflow = Y.bodyOverflow, B.style.overscrollBehavior = Y.htmlOverscroll, D.style.overscrollBehavior = Y.bodyOverscroll, q.current = null);
  }, Ee = () => typeof window > "u" || typeof navigator > "u" ? !1 : hn().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent)), De = (O) => {
    R.current === "immersive" && (xe(!1), ye("off"), f.current.message = O, N(hn()), X());
  }, fl = () => {
    xe(!0), ye("immersive"), f.current.message = "Mobile fullscreen enabled.", N(hn()), X();
  }, Ke = (O, B = f.current.levelIndex) => {
    const D = au(B, f.current.fullscreen, 0);
    D.mode = "playing", f.current = D, X();
  }, ce = (O, B, D) => {
    if (f.current.mode !== "playing") return;
    const Y = D ?? Vt(f.current, B), k = yn(Y);
    if (!k || k.role !== "clue") {
      f.current.message = "Only clue cards can claim an empty crown.", X();
      return;
    }
    const j = Kt($, k.categoryId);
    if (!j) {
      f.current.message = "That clue card has no category data.", X();
      return;
    }
    if (f.current.foundations[j.id].length === j.words.length) {
      f.current.message = `${j.clueTitle} is already complete.`, X();
      return;
    }
    if (f.current.foundationOrder[O] != null) {
      f.current.message = "That crown already has a clue card.", X();
      return;
    }
    const I = Bi(f.current, j.id);
    if (I >= 0) {
      f.current.message = `${j.clueTitle} already owns crown ${I + 1}.`, X();
      return;
    }
    const le = Ui($, f.current, B, Y.length);
    ua(f.current);
    const _e = wi(f.current, B, Y.length);
    if (!_e.length) return;
    const [Jl, ...Be] = _e, bn = f.current.foundations[j.id].length;
    f.current.foundationOrder[O] = j.id, Be.length && f.current.foundations[j.id].push(...Be), f.current.selectedSource = null;
    const Ll = Be.reduce((ve, il, qe) => ve + 100 + qe * 25, 0);
    if (f.current.streak = Be.length, f.current.message = Be.length ? `${j.clueTitle} claimed crown ${O + 1} with ${Be.length} matching card${Be.length === 1 ? "" : "s"}.` : `${j.clueTitle} placed into crown ${O + 1}.`, f.current.score += 40 + Ll, iu(f.current, Jl, le[0] ?? N0($, O), N0($, O), !1), Be.forEach((ve, il) => {
      const qe = ru($, O, bn + il + 1);
      iu(f.current, ve, le[il + 1] ?? le[le.length - 1] ?? qe, qe, !0);
    }), uu(f.current, O, j.color), St(f.current, j.clueTitle, Ye($).foundations[O].x + Ye($).foundations[O].w / 2, Ye($).foundations[O].y + 34, "#fff4bf", 0.22), Be.length) {
      const ve = ru($, O, bn + Be.length);
      fo(f.current, ve.x + ve.w / 2, ve.y + 30, j.color), St(f.current, `+${40 + Ll}`, ve.x + ve.w / 2, ve.y + 24, "#fff4bf", 0.24), f.current.streak >= 2 && St(f.current, `Combo x${f.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3);
    }
    f.current.foundations[j.id].length === j.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${j.clueTitle} completed. Crown ${O + 1} opens again.`, St(f.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), uu(f.current, O, j.color)), ol(), X();
  }, Re = (O) => {
    if (f.current.mode !== "playing") return;
    const B = Vt(f.current, O), D = yn(B), Y = je(B);
    if (!(!D || !Y)) {
      if (Il(f.current.selectedSource) === Il(O)) {
        if (D.role === "clue") {
          const k = f.current.foundationOrder.map((j, I) => j == null ? I : -1).filter((j) => j >= 0);
          k.length === 1 ? Tl(k[0]) : (f.current.selectedSource = null, f.current.message = k.length ? `Select an empty crown for ${D.label}.` : "Every crown already has a clue card.", X());
        } else {
          const k = Bi(f.current, Y.categoryId);
          k >= 0 ? Tl(k) : (f.current.selectedSource = null, f.current.message = "Find and place the matching clue card first.", X());
        }
        Il(f.current.selectedSource) === Il(O) && (f.current.selectedSource = null, f.current.message = "Selection cleared.", X());
        return;
      }
      f.current.selectedSource = O, f.current.message = D.role === "clue" ? B.length > 1 ? `${D.label} stack selected. Move the full stack into an empty crown.` : `${D.label} clue selected. Drop it into an empty crown.` : B.length > 1 ? `${B.length} matching cards selected.` : `${Y.label} selected.`, X();
    }
  }, ol = () => {
    f.current.movesLeft = Math.max(0, f.current.movesLeft - 1), Hi(f.current);
  }, Tl = (O, B) => {
    const D = B ?? f.current.selectedSource;
    if (f.current.mode !== "playing" || !D) return;
    const Y = Vt(f.current, D), k = yn(Y), j = je(Y) ?? null;
    if (!k || !j) return;
    if (k.role === "clue") {
      ce(O, D, Y);
      return;
    }
    const I = f.current.foundationOrder[O], le = Kt($, I);
    if (!I || !le) {
      f.current.streak = 0, f.current.message = "That crown needs its clue card first.", X();
      return;
    }
    if (j.categoryId !== I) {
      f.current.streak = 0, f.current.message = `${j.label} does not fit the ${le?.clueTitle ?? "selected"} clue.`, X();
      return;
    }
    const _e = Ui($, f.current, D, Y.length), Jl = f.current.foundations[I].length;
    ua(f.current);
    const Be = wi(f.current, D, Y.length);
    if (!Be.length) return;
    f.current.foundations[I].push(...Be), f.current.selectedSource = null;
    const bn = f.current.streak, Ll = Be.reduce((il, qe, pn) => il + 100 + (bn + pn) * 25, 0);
    f.current.score += Ll, f.current.streak += Be.length, f.current.message = Be.length > 1 ? `${Be.length} matching cards sorted into the ${le?.clueTitle ?? "target"} crown.` : `${Be[0].label} matched the ${le?.clueTitle ?? "target"} clue.`, Be.forEach((il, qe) => {
      const pn = ru($, O, Jl + qe + 1);
      iu(
        f.current,
        il,
        _e[qe] ?? _e[_e.length - 1] ?? pn,
        pn,
        !0
      );
    });
    const ve = ru($, O, Jl + Be.length);
    fo(f.current, ve.x + ve.w / 2, ve.y + 86, Be[0].color), uu(f.current, O, le?.color ?? "#ffe59b"), St(f.current, `+${Ll}`, ve.x + ve.w / 2, ve.y + 44, "#fff4bf", 0.24), f.current.foundations[I].length === le.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${le.clueTitle} completed. Crown ${O + 1} opens again.`, St(f.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), uu(f.current, O, le.color)), f.current.streak >= 2 && St(f.current, `Combo x${f.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3), ol(), X();
  }, rl = (O, B) => {
    const D = B ?? f.current.selectedSource;
    if (!D || f.current.mode !== "playing") return;
    if (D.kind === "column" && D.index === O) {
      f.current.selectedSource = null, f.current.message = "Selection cleared.", X();
      return;
    }
    const Y = Vt(f.current, D), k = Y[0] ?? null;
    if (!k) return;
    if (!yo(k, f.current.columns[O], D)) {
      f.current.streak = 0, f.current.message = `${k.label} cannot stack on column ${O + 1}.`, X();
      return;
    }
    const j = Ui($, f.current, D, Y.length);
    ua(f.current);
    const I = wi(f.current, D, Y.length);
    if (!I.length) return;
    f.current.columns[O].push(...I), f.current.hiddenCounts[O] = Math.min(f.current.hiddenCounts[O] ?? 0, Math.max(0, f.current.columns[O].length - I.length)), X0(f.current, O);
    const le = G1($, f.current, O, I.length);
    I.forEach((_e, Jl) => iu(f.current, _e, j[Jl] ?? j[j.length - 1], le[Jl] ?? le[le.length - 1], !1)), f.current.selectedSource = null, f.current.score += 15 * I.length, f.current.streak = 0, f.current.message = I.length > 1 ? `${I.length} matching cards parked on column ${O + 1}.` : `${I[0].label} parked on column ${O + 1}.`, St(f.current, I.length > 1 ? `Stack x${I.length}` : "+15", Ye($).columns[O].x + Ye($).columns[O].w / 2, Ye($).columns[O].y + 18, "#dff7ff", I.length > 1 ? 0.28 : 0.18), ol(), X();
  }, Ie = () => {
    if (f.current.mode !== "playing") return;
    if (!je(f.current.reserve)) {
      f.current.message = "Reserve pile is empty.", X();
      return;
    }
    ua(f.current);
    const B = f.current.reserve.pop();
    B && (f.current.waste.push(B), f.current.selectedSource = { kind: "waste" }, f.current.message = `Drew ${B.label}.`, ol(), X());
  }, Kl = () => {
    f.current.message = B1(f.current), X();
  }, Dl = () => {
    N1(f.current) || (f.current.message = f.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), X();
  }, hl = () => {
    const O = f.current.selectedSource;
    if (!O || f.current.mode !== "playing") return;
    if (f.current.boosters.joker <= 0) {
      f.current.message = "Joker spent.", X();
      return;
    }
    const B = je(Vt(f.current, O)) ?? null;
    if (!B) return;
    if (B.role === "clue") {
      f.current.message = "Joker only sorts word cards.", X();
      return;
    }
    const D = Bi(f.current, B.categoryId);
    if (D < 0) {
      f.current.message = "Place the matching clue card first.", X();
      return;
    }
    const Y = Ui($, f.current, O, 1)[0] ?? U0($, f.current, D);
    ua(f.current);
    const k = wi(f.current, O, 1)[0];
    if (!k) return;
    f.current.foundations[k.categoryId].push(k), f.current.selectedSource = null, f.current.boosters.joker -= 1, f.current.score += 80, f.current.message = `Joker matched ${k.label} automatically.`;
    const j = U0($, f.current, D);
    iu(f.current, k, Y, j, !0), fo(f.current, j.x + j.w / 2, j.y + 86, k.color), uu(f.current, D, $.categories.find((I) => I.id === k.categoryId)?.color ?? "#ffe59b"), St(f.current, "Joker!", j.x + j.w / 2, j.y + 44, "#ffd7a8", 0.24), Hi(f.current), X();
  }, _ = () => {
    if (f.current.mode !== "playing") return;
    if (f.current.boosters.shuffle <= 0) {
      f.current.message = "Shuffle spent.", X();
      return;
    }
    const O = [...f.current.reserve, ...f.current.waste];
    if (!O.length) {
      f.current.message = "No reserve cards to reshuffle.", X();
      return;
    }
    ua(f.current), f.current.reserve = vo(O, 8564529 + f.current.movesLeft * 17 + f.current.score), f.current.waste = [], f.current.selectedSource = null, f.current.boosters.shuffle -= 1, f.current.message = "Reserve and waste reshuffled.", Hi(f.current), X();
  }, x = () => {
    const O = Math.max(0, f.current.score), B = f.current.levelIndex + 1;
    f.current = au(B, f.current.fullscreen, O), f.current.mode = "playing", f.current.message = B < ia.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", X();
  }, P = async () => {
    const O = s.current;
    if (!(!O || typeof document > "u"))
      try {
        if (R.current === "immersive") {
          De("Exited mobile fullscreen.");
          return;
        }
        if (document.fullscreenElement === O) {
          await document.exitFullscreen();
          return;
        }
        if (!Ee() && typeof O.requestFullscreen == "function") {
          await O.requestFullscreen();
          return;
        }
        fl();
      } catch {
        if (Ee()) {
          fl();
          return;
        }
        f.current.message = "Fullscreen is unavailable here.", X();
      }
  }, ge = (O, B) => {
    const D = d.current;
    if (!D) return;
    const Y = Ri(D, O, B);
    if (!Y) return;
    const { x: k, y: j } = Y, I = Vl(f.current.levelIndex), le = Ye(I);
    if (f.current.mode !== "playing") {
      f.current.mode === "won" ? x() : Ke();
      return;
    }
    if (pt(k, j, le.reserve)) {
      Ie();
      return;
    }
    if (pt(k, j, le.waste)) {
      Re({ kind: "waste" });
      return;
    }
    for (let _e = 0; _e < le.foundations.length; _e += 1)
      if (pt(k, j, le.foundations[_e])) {
        Tl(_e);
        return;
      }
    for (let _e = 0; _e < le.columns.length; _e += 1)
      if (pt(k, j, le.columns[_e])) {
        f.current.selectedSource ? rl(_e) : Re({ kind: "column", index: _e });
        return;
      }
  }, be = (O) => {
    const B = d.current;
    if (!B || f.current.mode !== "playing") return;
    const D = Ri(B, O.clientX, O.clientY);
    if (!D) return;
    const Y = Vl(f.current.levelIndex), k = j1(Y, f.current, D.x, D.y);
    if (!k) return;
    const j = Vt(f.current, k);
    j.length && (E.current = { source: k, cards: j, clueCategoryId: j[0]?.role === "clue" ? j[0].categoryId : null, x: D.x, y: D.y, startX: D.x, startY: D.y, moved: !1, dropTarget: null }, B.setPointerCapture(O.pointerId));
  }, y = (O) => {
    const B = d.current, D = E.current;
    if (!B || !D) return;
    const Y = Ri(B, O.clientX, O.clientY);
    if (!Y) return;
    D.x = Y.x, D.y = Y.y, D.moved = D.moved || Math.hypot(Y.x - D.startX, Y.y - D.startY) > 14;
    const k = Vl(f.current.levelIndex);
    D.dropTarget = D.moved ? R0(k, f.current, D.source, D.cards, Y.x, Y.y) : null;
  }, U = (O) => {
    const B = d.current, D = E.current;
    if (!B || !D) {
      ge(O.clientX, O.clientY);
      return;
    }
    const Y = Ri(B, O.clientX, O.clientY);
    B.hasPointerCapture(O.pointerId) && B.releasePointerCapture(O.pointerId);
    const k = Vl(f.current.levelIndex);
    if (Y && (D.x = Y.x, D.y = Y.y, D.moved = D.moved || Math.hypot(Y.x - D.startX, Y.y - D.startY) > 14, D.dropTarget = D.moved ? R0(k, f.current, D.source, D.cards, Y.x, Y.y) : null), E.current = null, !D.moved) {
      ge(O.clientX, O.clientY);
      return;
    }
    if (D.dropTarget?.kind === "foundation") {
      Tl(D.dropTarget.index, D.source);
      return;
    }
    if (D.dropTarget?.kind === "column") {
      rl(D.dropTarget.index, D.source);
      return;
    }
    f.current.selectedSource = D.source;
    const j = yn(D.cards), I = je(D.cards);
    !j || !I || (f.current.message = j.role === "clue" ? D.cards.length > 1 ? `${j.label} stack lifted. Drag the full stack into an empty crown.` : `${j.label} lifted. Drag it into an empty crown.` : D.cards.length > 1 ? `${D.cards.length} matching cards lifted. Drag them to a crown or column.` : `${I.label} lifted. Drag it to a crown or column.`, X());
  }, G = (O) => {
    const B = d.current;
    B && E.current && B.hasPointerCapture(O.pointerId) && B.releasePointerCapture(O.pointerId), E.current = null;
  };
  dl.useEffect(() => {
    const O = d.current, B = O?.getContext("2d");
    if (!O || !B) return;
    const D = window, Y = () => {
      Q1(B, f.current, E.current), T({ ...f.current, columns: ji(f.current.columns), hiddenCounts: Li(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: xi(f.current.foundations), foundationOrder: qi(f.current.foundationOrder), clueDeck: Gi(f.current.clueDeck), particles: [...f.current.particles], motionCards: D0(f.current.motionCards), feedbackTexts: H0(f.current.feedbackTexts), foundationPulses: w0(f.current.foundationPulses) });
    }, k = () => {
      j0(f.current, 16), Y(), r.current = window.requestAnimationFrame(k);
    };
    return D.render_game_to_text = () => {
      const j = JSON.parse(L1(f.current));
      return j.fullscreenMode = R.current, j.viewport = hn(), JSON.stringify(j);
    }, D.advanceTime = (j) => {
      let I = j;
      for (; I > 0; ) {
        const le = Math.min(I, 16);
        j0(f.current, le), I -= le;
      }
      Y();
    }, D.__drainVirtualTimePending = () => 0, D.__wordsort_debug_set_moves = (j) => {
      f.current.movesLeft = Math.max(0, Math.floor(j)), Hi(f.current), Y();
    }, D.__wordsort_debug_set_level = (j) => {
      const I = Math.max(0, Math.floor(j)), le = au(I, f.current.fullscreen, 0);
      le.mode = "playing", le.message = I < ia.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", f.current = le, Y();
    }, D.__wordsort_debug_prime_foundation_stack = () => {
      const I = Vl(f.current.levelIndex).categories[0];
      if (!I) return;
      const le = au(f.current.levelIndex, f.current.fullscreen, 0);
      le.mode = "playing", le.foundationOrder[0] = I.id, le.foundations[I.id] = [], le.columns[0] = I.words.slice(0, 3).map((_e) => L0(I, _e)), le.hiddenCounts[0] = 0, le.movesLeft = Math.max(le.movesLeft, 12), le.message = "Debug: foundation stack primed.", f.current = le, Y();
    }, Y(), r.current = window.requestAnimationFrame(k), () => {
      r.current != null && window.cancelAnimationFrame(r.current), delete D.render_game_to_text, delete D.advanceTime, delete D.__drainVirtualTimePending, delete D.__wordsort_debug_set_moves, delete D.__wordsort_debug_set_level, delete D.__wordsort_debug_prime_foundation_stack;
    };
  }, []), dl.useEffect(() => {
    const O = () => N(hn());
    return O(), window.addEventListener("resize", O), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O), () => {
      window.removeEventListener("resize", O), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
    };
  }, []), dl.useEffect(() => () => {
    xe(!1);
  }, []), dl.useEffect(() => {
    const O = ["j", "k", "l", "m", "p"], B = ["a", "s", "d", "g", "v"], D = () => {
      document.fullscreenElement === s.current ? ye("native") : R.current === "native" && ye("off"), N(hn()), X();
    }, Y = (k) => {
      const j = k.key.toLowerCase();
      j === "f" && (k.preventDefault(), P()), j === "escape" && R.current === "immersive" && (k.preventDefault(), De("Exited mobile fullscreen.")), j === "n" && (k.preventDefault(), Ie()), j === "h" && (k.preventDefault(), Kl()), j === "u" && (k.preventDefault(), Dl()), j === "x" && (k.preventDefault(), hl()), j === "z" && (k.preventDefault(), _()), j === "enter" && f.current.mode !== "playing" && (k.preventDefault(), Ke());
      const I = B.indexOf(j);
      if (I >= 0) {
        k.preventDefault();
        const _e = { kind: "column", index: I };
        f.current.selectedSource?.kind === "column" && f.current.selectedSource.index === I ? Re(_e) : f.current.selectedSource ? rl(I) : Re(_e);
      }
      j === "q" && (k.preventDefault(), f.current.selectedSource?.kind === "waste" ? Re({ kind: "waste" }) : Re({ kind: "waste" }));
      const le = O.indexOf(j);
      le >= 0 && (k.preventDefault(), Tl(le));
    };
    return document.addEventListener("fullscreenchange", D), window.addEventListener("keydown", Y), () => {
      document.removeEventListener("fullscreenchange", D), window.removeEventListener("keydown", Y);
    };
  }, []);
  const L = M === "immersive", J = !v.fullscreen && z.width < 560, F = v.fullscreen && z.width < 820, ie = v.fullscreen && (z.width < 1140 || z.height < 760), Z = v.fullscreen || J, Ne = v.fullscreen ? F ? "calc(env(safe-area-inset-top, 0px) + 8px) calc(env(safe-area-inset-right, 0px) + 8px) calc(env(safe-area-inset-bottom, 0px) + 12px) calc(env(safe-area-inset-left, 0px) + 8px)" : ie ? "10px 10px 14px" : "14px 14px 16px" : J ? "12px 10px 14px" : 20, Jt = v.fullscreen ? F ? Math.min(430, Math.max(300, z.width - 18)) : Math.min(ie ? 720 : 860, Math.max(320, z.width - (ie ? 28 : 48))) : J ? Math.min(420, Math.max(320, z.width - 28)) : 760, gn = Z ? F ? "Immersive mobile layout with safe-area spacing and touch-first controls." : "Buried clue cards, five live crowns, and a tighter layout." : "A clue-card word sorter where the crown cards are buried in the deal, just like the rest of the deck.", ca = v.fullscreen ? F ? 78 : ie ? 92 : 104 : J ? 72 : 108, vn = v.fullscreen ? F ? 96 : ie ? 120 : 136 : J ? 108 : 160, Pl = v.fullscreen ? "Exit Fullscreen" : F || Ee() ? "Go Fullscreen" : "Fullscreen", fa = (O, B) => {
    const D = Kt($, O);
    return D ? Z ? `${D.clueIcon} ${mn(D.clueTitle, J ? 8 : 10)}` : `${D.clueIcon} ${D.clueTitle}` : `Empty ${B + 1}`;
  }, Sn = /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${ca}px, 1fr))`, gap: v.fullscreen ? 10 : 12 }, children: [
    [["Level", $.name], ["Moves Left", String(v.movesLeft)], ["Score", String(v.score)], ["Best", String(v.bestScore)], ["Streak", String(v.streak)], ["Cleared", `${Ve}/${$.categories.length}`]].map(([O, B]) => {
      const D = O === "Level";
      return /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: Z && D ? ie || J ? "1 / -1" : "span 2" : void 0 }, children: [
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? D ? 17 : 18 : 24, fontWeight: 800, wordBreak: D ? "normal" : "break-word", whiteSpace: D ? "nowrap" : "normal", overflow: D ? "hidden" : "visible", textOverflow: D ? "ellipsis" : "clip" }, children: D && Z ? mn(B, J ? 20 : ie ? 24 : 30) : B })
      ] }, O);
    }),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Visible Clues" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 17 : 20, fontWeight: 800 }, children: mo(v).filter(({ card: O }) => O.role === "clue").length })
    ] }),
    [["Undo", String(v.boosters.undo)], ["Joker", String(v.boosters.joker)], ["Shuffle", String(v.boosters.shuffle)]].map(([O, B]) => /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 18 : 24, fontWeight: 800 }, children: B })
    ] }, O)),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: Z ? "1 / -1" : void 0 }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Crown Status" }),
      /* @__PURE__ */ V.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }, children: v.foundationOrder.map((O, B) => /* @__PURE__ */ V.jsx("div", { style: { padding: Z ? "5px 8px" : "6px 10px", borderRadius: 999, background: O ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: Z ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: fa(O, B) }, `crown-status-${B}`)) })
    ] }),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: "1 / -1" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 13 : 15, fontWeight: 700, minHeight: 24, wordBreak: "break-word" }, children: v.message })
    ] })
  ] }), du = /* @__PURE__ */ V.jsx("div", { style: { width: Jt, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Ze} / ${bt}` }, children: /* @__PURE__ */ V.jsx("canvas", { ref: d, width: Ze, height: bt, style: { width: "100%", height: "100%", display: "block", borderRadius: v.fullscreen ? 26 : 28, boxShadow: "0 22px 40px rgba(3,10,28,0.42)", background: "#102623", cursor: E.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: be, onPointerMove: y, onPointerUp: U, onPointerCancel: G }) }), hu = /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gap: 10 }, children: [
    /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: [
      v.columns.map((O, B) => /* @__PURE__ */ V.jsx("button", { id: `wordsort-source-col-${B + 1}`, onClick: () => v.selectedSource ? rl(B) : Re({ kind: "column", index: B }), style: { ...Zl(Il(v.selectedSource) === `column-${B}`), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: Il(v.selectedSource) === `column-${B}` ? `Selected: ${mn(je(O)?.label ?? "Empty", Z ? 12 : 18)}` : `${J ? "C" : "Column"} ${B + 1}: ${mn(je(O)?.label ?? "Empty", Z ? 12 : 18)}` }, B)),
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-source-waste", onClick: () => v.selectedSource ? Re({ kind: "waste" }) : Re({ kind: "waste" }), style: { ...Zl(Il(v.selectedSource) === "waste"), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: Il(v.selectedSource) === "waste" ? `Selected: ${mn(je(v.waste)?.label ?? "Empty", Z ? 12 : 18)}` : `${J ? "Waste" : "Waste:"} ${mn(je(v.waste)?.label ?? "Empty", Z ? 12 : 18)}` })
    ] }),
    /* @__PURE__ */ V.jsx("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: v.foundationOrder.map((O, B) => {
      const D = Kt($, O);
      return /* @__PURE__ */ V.jsx("button", { id: `wordsort-foundation-${B + 1}`, onClick: () => Tl(B), style: { ...Zl(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: D ? `${D.clueIcon} ${mn(D.clueTitle, Z ? 9 : 16)} ${v.foundations[D.id].length}/${D.words.length}` : Z ? `Empty ${B + 1}` : `Empty Crown ${B + 1}` }, B);
    }) }),
    /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: [
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-undo", onClick: Dl, style: { ...Zl(!1), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: `Undo (${v.boosters.undo})` }),
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-joker", onClick: hl, style: { ...Zl(!1), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: `Joker (${v.boosters.joker})` }),
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-shuffle", onClick: _, style: { ...Zl(!1), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: `Shuffle (${v.boosters.shuffle})` })
    ] })
  ] }), oa = !v.fullscreen && !J ? /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
    /* @__PURE__ */ V.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "How It Plays" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Clue cards are mixed into the same deal as every other card. You only get five live crowns, so finishing one set opens space for the next buried clue." })
    ] }),
    /* @__PURE__ */ V.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
      /* @__PURE__ */ V.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
        "Drag and drop on the canvas, tap for quick-sort, or use the helper buttons. Keyboard: ",
        /* @__PURE__ */ V.jsx("code", { children: "A/S/D/G/V" }),
        " columns, ",
        /* @__PURE__ */ V.jsx("code", { children: "Q" }),
        " waste, ",
        /* @__PURE__ */ V.jsx("code", { children: "J/K/L/M/P" }),
        " crown slots, ",
        /* @__PURE__ */ V.jsx("code", { children: "N" }),
        " draw, ",
        /* @__PURE__ */ V.jsx("code", { children: "U" }),
        " undo, ",
        /* @__PURE__ */ V.jsx("code", { children: "X" }),
        " joker, ",
        /* @__PURE__ */ V.jsx("code", { children: "Z" }),
        " shuffle, ",
        /* @__PURE__ */ V.jsx("code", { children: "H" }),
        " hint, ",
        /* @__PURE__ */ V.jsx("code", { children: "F" }),
        " fullscreen."
      ] })
    ] }),
    /* @__PURE__ */ V.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Reference Direction" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The board is now closer to the mobile loop: more clue categories than crown slots, with completed sets freeing crowns for later clues." })
    ] })
  ] }) : null, ra = J || F ? /* @__PURE__ */ V.jsxs("div", { style: { borderRadius: 18, padding: F ? "9px 10px" : "10px 12px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
    /* @__PURE__ */ V.jsx("div", { style: { fontWeight: 800, marginBottom: 4, fontSize: 13 }, children: F ? "Mobile Fullscreen" : "Mobile Notes" }),
    /* @__PURE__ */ V.jsx("div", { style: { fontSize: 12, lineHeight: 1.45, color: "rgba(235,244,255,0.82)" }, children: F ? "The game now uses an immersive fixed overlay on phones, so the board fills the screen, respects safe-area insets, and keeps the controls reachable while the browser UI stays out of the way." : "Tap a column or waste card to select it, then tap a crown or column to move it. Buried clue cards have to be uncovered before a crown can claim them." })
  ] }) : null;
  return /* @__PURE__ */ V.jsx("div", { style: { minHeight: L ? "100dvh" : "100%", display: "flex", justifyContent: "center", padding: v.fullscreen ? 0 : "24px 12px 48px", background: v.fullscreen ? "#091614" : "transparent", position: L ? "fixed" : "relative", inset: L ? 0 : void 0, zIndex: L ? 9999 : void 0, overflow: L ? "hidden" : "visible" }, children: /* @__PURE__ */ V.jsxs("section", { ref: s, style: { width: "100%", maxWidth: v.fullscreen ? "100vw" : 1040, minHeight: v.fullscreen ? L ? "100dvh" : "100vh" : void 0, height: L ? "100dvh" : void 0, boxSizing: "border-box", borderRadius: v.fullscreen ? 0 : 32, padding: Ne, background: "radial-gradient(circle at top left, rgba(179, 240, 209, 0.16), transparent 30%), linear-gradient(180deg, #163c37 0%, #0b1f1c 100%)", boxShadow: v.fullscreen ? "none" : "0 24px 60px rgba(4,14,39,0.35)", display: "flex", flexDirection: "column", gap: F ? 10 : v.fullscreen ? 12 : 14, color: "#eff9f4", overflowX: "hidden", overflowY: v.fullscreen ? "auto" : "hidden", WebkitOverflowScrolling: "touch", overscrollBehavior: v.fullscreen ? "contain" : "auto" }, children: [
    /* @__PURE__ */ V.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: Z ? "flex-start" : "center", gap: F ? 8 : ie ? 10 : J ? 8 : 16, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gap: 4, minWidth: 0, flex: "1 1 320px" }, children: [
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: v.fullscreen ? F ? 21 : ie ? 24 : 28 : J ? 22 : 30, fontWeight: 800 }, children: "Word Sort Solitaire" }),
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 13 : 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: Z ? 560 : 620 }, children: gn })
      ] }),
      /* @__PURE__ */ V.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", minWidth: 0, justifyContent: Z ? "flex-start" : "flex-end" }, children: [
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-start", onClick: () => Ke(), style: { ...Zl(!0), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: v.mode === "playing" ? "New Round" : "Start Round" }),
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-next", onClick: x, style: { ...Zl(!1), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: "Next Level" }),
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-hint", onClick: Kl, style: { ...Zl(!1), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: "Hint" }),
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-draw", onClick: Ie, style: { ...Zl(!1), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: "Draw" }),
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-fullscreen", onClick: () => {
          P();
        }, style: { ...Zl(!1), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: Pl })
      ] })
    ] }),
    F ? du : Sn,
    F ? Sn : du,
    hu,
    oa,
    ra
  ] }) });
}
const Q0 = document.getElementById("word-sort-root");
if (!Q0)
  throw new Error("Word Sort export root element was not found.");
document.title = "Word Sort Solitaire | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("word-sort-export-body");
m1.createRoot(Q0).render(/* @__PURE__ */ V.jsx(Z1, {}));
