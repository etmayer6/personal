var ao = { exports: {} }, nu = {};
var g0;
function cm() {
  if (g0) return nu;
  g0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(s, g, E) {
    var o = null;
    if (E !== void 0 && (o = "" + E), g.key !== void 0 && (o = "" + g.key), "key" in g) {
      E = {};
      for (var G in g)
        G !== "key" && (E[G] = g[G]);
    } else E = g;
    return g = E.ref, {
      $$typeof: c,
      type: s,
      key: o,
      ref: g !== void 0 ? g : null,
      props: E
    };
  }
  return nu.Fragment = r, nu.jsx = d, nu.jsxs = d, nu;
}
var v0;
function im() {
  return v0 || (v0 = 1, ao.exports = cm()), ao.exports;
}
var X = im(), uo = { exports: {} }, au = {}, co = { exports: {} }, io = {};
var S0;
function fm() {
  return S0 || (S0 = 1, (function(c) {
    function r(_, x) {
      var F = _.length;
      _.push(x);
      e: for (; 0 < F; ) {
        var ge = F - 1 >>> 1, be = _[ge];
        if (0 < g(be, x))
          _[ge] = x, _[F] = be, F = ge;
        else break e;
      }
    }
    function d(_) {
      return _.length === 0 ? null : _[0];
    }
    function s(_) {
      if (_.length === 0) return null;
      var x = _[0], F = _.pop();
      if (F !== x) {
        _[0] = F;
        e: for (var ge = 0, be = _.length, m = be >>> 1; ge < m; ) {
          var U = 2 * (ge + 1) - 1, L = _[U], Y = U + 1, te = _[Y];
          if (0 > g(L, F))
            Y < be && 0 > g(te, L) ? (_[ge] = te, _[Y] = F, ge = Y) : (_[ge] = L, _[U] = F, ge = U);
          else if (Y < be && 0 > g(te, F))
            _[ge] = te, _[Y] = F, ge = Y;
          else break e;
        }
      }
      return x;
    }
    function g(_, x) {
      var F = _.sortIndex - x.sortIndex;
      return F !== 0 ? F : _.id - x.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var o = Date, G = o.now();
      c.unstable_now = function() {
        return o.now() - G;
      };
    }
    var O = [], T = [], S = 1, B = null, C = 3, P = !1, oe = !1, ze = !1, W = !1, $ = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
    function De(_) {
      for (var x = d(T); x !== null; ) {
        if (x.callback === null) s(T);
        else if (x.startTime <= _)
          s(T), x.sortIndex = x.expirationTime, r(O, x);
        else break;
        x = d(T);
      }
    }
    function cl(_) {
      if (ze = !1, De(_), !oe)
        if (d(O) !== null)
          oe = !0, $e || ($e = !0, Ye());
        else {
          var x = d(T);
          x !== null && ml(cl, x.startTime - _);
        }
    }
    var $e = !1, ce = -1, Ie = 5, Ul = -1;
    function il() {
      return W ? !0 : !(c.unstable_now() - Ul < Ie);
    }
    function rl() {
      if (W = !1, $e) {
        var _ = c.unstable_now();
        Ul = _;
        var x = !0;
        try {
          e: {
            oe = !1, ze && (ze = !1, Ve(ce), ce = -1), P = !0;
            var F = C;
            try {
              l: {
                for (De(_), B = d(O); B !== null && !(B.expirationTime > _ && il()); ) {
                  var ge = B.callback;
                  if (typeof ge == "function") {
                    B.callback = null, C = B.priorityLevel;
                    var be = ge(
                      B.expirationTime <= _
                    );
                    if (_ = c.unstable_now(), typeof be == "function") {
                      B.callback = be, De(_), x = !0;
                      break l;
                    }
                    B === d(O) && s(O), De(_);
                  } else s(O);
                  B = d(O);
                }
                if (B !== null) x = !0;
                else {
                  var m = d(T);
                  m !== null && ml(
                    cl,
                    m.startTime - _
                  ), x = !1;
                }
              }
              break e;
            } finally {
              B = null, C = F, P = !1;
            }
            x = void 0;
          }
        } finally {
          x ? Ye() : $e = !1;
        }
      }
    }
    var Ye;
    if (typeof Te == "function")
      Ye = function() {
        Te(rl);
      };
    else if (typeof MessageChannel < "u") {
      var Bl = new MessageChannel(), El = Bl.port2;
      Bl.port1.onmessage = rl, Ye = function() {
        El.postMessage(null);
      };
    } else
      Ye = function() {
        $(rl, 0);
      };
    function ml(_, x) {
      ce = $(function() {
        _(c.unstable_now());
      }, x);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, c.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ie = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, c.unstable_next = function(_) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = C;
      }
      var F = C;
      C = x;
      try {
        return _();
      } finally {
        C = F;
      }
    }, c.unstable_requestPaint = function() {
      W = !0;
    }, c.unstable_runWithPriority = function(_, x) {
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
      var F = C;
      C = _;
      try {
        return x();
      } finally {
        C = F;
      }
    }, c.unstable_scheduleCallback = function(_, x, F) {
      var ge = c.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ge + F : ge) : F = ge, _) {
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
      return be = F + be, _ = {
        id: S++,
        callback: x,
        priorityLevel: _,
        startTime: F,
        expirationTime: be,
        sortIndex: -1
      }, F > ge ? (_.sortIndex = F, r(T, _), d(O) === null && _ === d(T) && (ze ? (Ve(ce), ce = -1) : ze = !0, ml(cl, F - ge))) : (_.sortIndex = be, r(O, _), oe || P || (oe = !0, $e || ($e = !0, Ye()))), _;
    }, c.unstable_shouldYield = il, c.unstable_wrapCallback = function(_) {
      var x = C;
      return function() {
        var F = C;
        C = x;
        try {
          return _.apply(this, arguments);
        } finally {
          C = F;
        }
      };
    };
  })(io)), io;
}
var b0;
function om() {
  return b0 || (b0 = 1, co.exports = fm()), co.exports;
}
var fo = { exports: {} }, ne = {};
var p0;
function rm() {
  if (p0) return ne;
  p0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), o = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), O = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function P(m) {
    return m === null || typeof m != "object" ? null : (m = C && m[C] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var oe = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ze = Object.assign, W = {};
  function $(m, U, L) {
    this.props = m, this.context = U, this.refs = W, this.updater = L || oe;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(m, U) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, U, "setState");
  }, $.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Ve() {
  }
  Ve.prototype = $.prototype;
  function Te(m, U, L) {
    this.props = m, this.context = U, this.refs = W, this.updater = L || oe;
  }
  var De = Te.prototype = new Ve();
  De.constructor = Te, ze(De, $.prototype), De.isPureReactComponent = !0;
  var cl = Array.isArray;
  function $e() {
  }
  var ce = { H: null, A: null, T: null, S: null }, Ie = Object.prototype.hasOwnProperty;
  function Ul(m, U, L) {
    var Y = L.ref;
    return {
      $$typeof: c,
      type: m,
      key: U,
      ref: Y !== void 0 ? Y : null,
      props: L
    };
  }
  function il(m, U) {
    return Ul(m.type, U, m.props);
  }
  function rl(m) {
    return typeof m == "object" && m !== null && m.$$typeof === c;
  }
  function Ye(m) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(L) {
      return U[L];
    });
  }
  var Bl = /\/+/g;
  function El(m, U) {
    return typeof m == "object" && m !== null && m.key != null ? Ye("" + m.key) : U.toString(36);
  }
  function ml(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then($e, $e) : (m.status = "pending", m.then(
          function(U) {
            m.status === "pending" && (m.status = "fulfilled", m.value = U);
          },
          function(U) {
            m.status === "pending" && (m.status = "rejected", m.reason = U);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function _(m, U, L, Y, te) {
    var le = typeof m;
    (le === "undefined" || le === "boolean") && (m = null);
    var ee = !1;
    if (m === null) ee = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case c:
            case r:
              ee = !0;
              break;
            case S:
              return ee = m._init, _(
                ee(m._payload),
                U,
                L,
                Y,
                te
              );
          }
      }
    if (ee)
      return te = te(m), ee = Y === "" ? "." + El(m, 0) : Y, cl(te) ? (L = "", ee != null && (L = ee.replace(Bl, "$&/") + "/"), _(te, U, L, "", function(de) {
        return de;
      })) : te != null && (rl(te) && (te = il(
        te,
        L + (te.key == null || m && m.key === te.key ? "" : ("" + te.key).replace(
          Bl,
          "$&/"
        ) + "/") + ee
      )), U.push(te)), 1;
    ee = 0;
    var pe = Y === "" ? "." : Y + ":";
    if (cl(m))
      for (var ve = 0; ve < m.length; ve++)
        Y = m[ve], le = pe + El(Y, ve), ee += _(
          Y,
          U,
          L,
          le,
          te
        );
    else if (ve = P(m), typeof ve == "function")
      for (m = ve.call(m), ve = 0; !(Y = m.next()).done; )
        Y = Y.value, le = pe + El(Y, ve++), ee += _(
          Y,
          U,
          L,
          le,
          te
        );
    else if (le === "object") {
      if (typeof m.then == "function")
        return _(
          ml(m),
          U,
          L,
          Y,
          te
        );
      throw U = String(m), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ee;
  }
  function x(m, U, L) {
    if (m == null) return m;
    var Y = [], te = 0;
    return _(m, Y, "", "", function(le) {
      return U.call(L, le, te++);
    }), Y;
  }
  function F(m) {
    if (m._status === -1) {
      var U = m._result;
      U = U(), U.then(
        function(L) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = L);
        },
        function(L) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = L);
        }
      ), m._status === -1 && (m._status = 0, m._result = U);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, be = {
    map: x,
    forEach: function(m, U, L) {
      x(
        m,
        function() {
          U.apply(this, arguments);
        },
        L
      );
    },
    count: function(m) {
      var U = 0;
      return x(m, function() {
        U++;
      }), U;
    },
    toArray: function(m) {
      return x(m, function(U) {
        return U;
      }) || [];
    },
    only: function(m) {
      if (!rl(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return ne.Activity = B, ne.Children = be, ne.Component = $, ne.Fragment = d, ne.Profiler = g, ne.PureComponent = Te, ne.StrictMode = s, ne.Suspense = O, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return ce.H.useMemoCache(m);
    }
  }, ne.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(m, U, L) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var Y = ze({}, m.props), te = m.key;
    if (U != null)
      for (le in U.key !== void 0 && (te = "" + U.key), U)
        !Ie.call(U, le) || le === "key" || le === "__self" || le === "__source" || le === "ref" && U.ref === void 0 || (Y[le] = U[le]);
    var le = arguments.length - 2;
    if (le === 1) Y.children = L;
    else if (1 < le) {
      for (var ee = Array(le), pe = 0; pe < le; pe++)
        ee[pe] = arguments[pe + 2];
      Y.children = ee;
    }
    return Ul(m.type, te, Y);
  }, ne.createContext = function(m) {
    return m = {
      $$typeof: o,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: E,
      _context: m
    }, m;
  }, ne.createElement = function(m, U, L) {
    var Y, te = {}, le = null;
    if (U != null)
      for (Y in U.key !== void 0 && (le = "" + U.key), U)
        Ie.call(U, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (te[Y] = U[Y]);
    var ee = arguments.length - 2;
    if (ee === 1) te.children = L;
    else if (1 < ee) {
      for (var pe = Array(ee), ve = 0; ve < ee; ve++)
        pe[ve] = arguments[ve + 2];
      te.children = pe;
    }
    if (m && m.defaultProps)
      for (Y in ee = m.defaultProps, ee)
        te[Y] === void 0 && (te[Y] = ee[Y]);
    return Ul(m, le, te);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(m) {
    return { $$typeof: G, render: m };
  }, ne.isValidElement = rl, ne.lazy = function(m) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: m },
      _init: F
    };
  }, ne.memo = function(m, U) {
    return {
      $$typeof: T,
      type: m,
      compare: U === void 0 ? null : U
    };
  }, ne.startTransition = function(m) {
    var U = ce.T, L = {};
    ce.T = L;
    try {
      var Y = m(), te = ce.S;
      te !== null && te(L, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then($e, ge);
    } catch (le) {
      ge(le);
    } finally {
      U !== null && L.types !== null && (U.types = L.types), ce.T = U;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return ce.H.useCacheRefresh();
  }, ne.use = function(m) {
    return ce.H.use(m);
  }, ne.useActionState = function(m, U, L) {
    return ce.H.useActionState(m, U, L);
  }, ne.useCallback = function(m, U) {
    return ce.H.useCallback(m, U);
  }, ne.useContext = function(m) {
    return ce.H.useContext(m);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(m, U) {
    return ce.H.useDeferredValue(m, U);
  }, ne.useEffect = function(m, U) {
    return ce.H.useEffect(m, U);
  }, ne.useEffectEvent = function(m) {
    return ce.H.useEffectEvent(m);
  }, ne.useId = function() {
    return ce.H.useId();
  }, ne.useImperativeHandle = function(m, U, L) {
    return ce.H.useImperativeHandle(m, U, L);
  }, ne.useInsertionEffect = function(m, U) {
    return ce.H.useInsertionEffect(m, U);
  }, ne.useLayoutEffect = function(m, U) {
    return ce.H.useLayoutEffect(m, U);
  }, ne.useMemo = function(m, U) {
    return ce.H.useMemo(m, U);
  }, ne.useOptimistic = function(m, U) {
    return ce.H.useOptimistic(m, U);
  }, ne.useReducer = function(m, U, L) {
    return ce.H.useReducer(m, U, L);
  }, ne.useRef = function(m) {
    return ce.H.useRef(m);
  }, ne.useState = function(m) {
    return ce.H.useState(m);
  }, ne.useSyncExternalStore = function(m, U, L) {
    return ce.H.useSyncExternalStore(
      m,
      U,
      L
    );
  }, ne.useTransition = function() {
    return ce.H.useTransition();
  }, ne.version = "19.2.4", ne;
}
var T0;
function ho() {
  return T0 || (T0 = 1, fo.exports = rm()), fo.exports;
}
var oo = { exports: {} }, ol = {};
var A0;
function sm() {
  if (A0) return ol;
  A0 = 1;
  var c = ho();
  function r(O) {
    var T = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        T += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + O + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var s = {
    d: {
      f: d,
      r: function() {
        throw Error(r(522));
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
  }, g = /* @__PURE__ */ Symbol.for("react.portal");
  function E(O, T, S) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: B == null ? null : "" + B,
      children: O,
      containerInfo: T,
      implementation: S
    };
  }
  var o = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(O, T) {
    if (O === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return ol.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ol.createPortal = function(O, T) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(r(299));
    return E(O, T, null, S);
  }, ol.flushSync = function(O) {
    var T = o.T, S = s.p;
    try {
      if (o.T = null, s.p = 2, O) return O();
    } finally {
      o.T = T, s.p = S, s.d.f();
    }
  }, ol.preconnect = function(O, T) {
    typeof O == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, s.d.C(O, T));
  }, ol.prefetchDNS = function(O) {
    typeof O == "string" && s.d.D(O);
  }, ol.preinit = function(O, T) {
    if (typeof O == "string" && T && typeof T.as == "string") {
      var S = T.as, B = G(S, T.crossOrigin), C = typeof T.integrity == "string" ? T.integrity : void 0, P = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      S === "style" ? s.d.S(
        O,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: B,
          integrity: C,
          fetchPriority: P
        }
      ) : S === "script" && s.d.X(O, {
        crossOrigin: B,
        integrity: C,
        fetchPriority: P,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, ol.preinitModule = function(O, T) {
    if (typeof O == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var S = G(
            T.as,
            T.crossOrigin
          );
          s.d.M(O, {
            crossOrigin: S,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && s.d.M(O);
  }, ol.preload = function(O, T) {
    if (typeof O == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var S = T.as, B = G(S, T.crossOrigin);
      s.d.L(O, S, {
        crossOrigin: B,
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
  }, ol.preloadModule = function(O, T) {
    if (typeof O == "string")
      if (T) {
        var S = G(T.as, T.crossOrigin);
        s.d.m(O, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: S,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else s.d.m(O);
  }, ol.requestFormReset = function(O) {
    s.d.r(O);
  }, ol.unstable_batchedUpdates = function(O, T) {
    return O(T);
  }, ol.useFormState = function(O, T, S) {
    return o.H.useFormState(O, T, S);
  }, ol.useFormStatus = function() {
    return o.H.useHostTransitionStatus();
  }, ol.version = "19.2.4", ol;
}
var E0;
function dm() {
  if (E0) return oo.exports;
  E0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), oo.exports = sm(), oo.exports;
}
var z0;
function hm() {
  if (z0) return au;
  z0 = 1;
  var c = om(), r = ho(), d = dm();
  function s(e) {
    var l = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(e) {
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
  function o(e) {
    if (e.tag === 13) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function G(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (E(e) !== e)
      throw Error(s(188));
  }
  function T(e) {
    var l = e.alternate;
    if (!l) {
      if (l = E(e), l === null) throw Error(s(188));
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
          if (u === t) return O(a), e;
          if (u === n) return O(a), l;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (t.return !== n.return) t = a, n = u;
      else {
        for (var i = !1, f = a.child; f; ) {
          if (f === t) {
            i = !0, t = a, n = u;
            break;
          }
          if (f === n) {
            i = !0, n = a, t = u;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === t) {
              i = !0, t = u, n = a;
              break;
            }
            if (f === n) {
              i = !0, n = u, t = a;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (t.alternate !== n) throw Error(s(190));
    }
    if (t.tag !== 3) throw Error(s(188));
    return t.stateNode.current === t ? e : l;
  }
  function S(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e;
    for (e = e.child; e !== null; ) {
      if (l = S(e), l !== null) return l;
      e = e.sibling;
    }
    return null;
  }
  var B = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), ze = /* @__PURE__ */ Symbol.for("react.fragment"), W = /* @__PURE__ */ Symbol.for("react.strict_mode"), $ = /* @__PURE__ */ Symbol.for("react.profiler"), Ve = /* @__PURE__ */ Symbol.for("react.consumer"), Te = /* @__PURE__ */ Symbol.for("react.context"), De = /* @__PURE__ */ Symbol.for("react.forward_ref"), cl = /* @__PURE__ */ Symbol.for("react.suspense"), $e = /* @__PURE__ */ Symbol.for("react.suspense_list"), ce = /* @__PURE__ */ Symbol.for("react.memo"), Ie = /* @__PURE__ */ Symbol.for("react.lazy"), Ul = /* @__PURE__ */ Symbol.for("react.activity"), il = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rl = Symbol.iterator;
  function Ye(e) {
    return e === null || typeof e != "object" ? null : (e = rl && e[rl] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Bl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function El(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Bl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case $:
        return "Profiler";
      case W:
        return "StrictMode";
      case cl:
        return "Suspense";
      case $e:
        return "SuspenseList";
      case Ul:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oe:
          return "Portal";
        case Te:
          return e.displayName || "Context";
        case Ve:
          return (e._context.displayName || "Context") + ".Consumer";
        case De:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ce:
          return l = e.displayName || null, l !== null ? l : El(e.type) || "Memo";
        case Ie:
          l = e._payload, e = e._init;
          try {
            return El(e(l));
          } catch {
          }
      }
    return null;
  }
  var ml = Array.isArray, _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], be = -1;
  function m(e) {
    return { current: e };
  }
  function U(e) {
    0 > be || (e.current = ge[be], ge[be] = null, be--);
  }
  function L(e, l) {
    be++, ge[be] = e.current, e.current = l;
  }
  var Y = m(null), te = m(null), le = m(null), ee = m(null);
  function pe(e, l) {
    switch (L(le, l), L(te, e), L(Y, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? Ld(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = Ld(l), e = qd(l, e);
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
    U(Y), L(Y, e);
  }
  function ve() {
    U(Y), U(te), U(le);
  }
  function de(e) {
    e.memoizedState !== null && L(ee, e);
    var l = Y.current, t = qd(l, e.type);
    l !== t && (L(te, e), L(Y, t));
  }
  function Tn(e) {
    te.current === e && (U(Y), U(te)), ee.current === e && (U(ee), Pa._currentValue = F);
  }
  var ra, hu;
  function nt(e) {
    if (ra === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        ra = l && l[1] || "", hu = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ra + e + hu;
  }
  var Pt = !1;
  function sl(e, l) {
    if (!e || Pt) return "";
    Pt = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (z) {
                  var A = z;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (z) {
                  A = z;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                A = z;
              }
              (R = e()) && typeof R.catch == "function" && R.catch(function() {
              });
            }
          } catch (z) {
            if (z && A && typeof z.stack == "string")
              return [z.stack, A.stack];
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
      var u = n.DetermineComponentFrameRoot(), i = u[0], f = u[1];
      if (i && f) {
        var h = i.split(`
`), p = f.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < p.length && !p[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === p.length)
          for (n = h.length - 1, a = p.length - 1; 1 <= n && 0 <= a && h[n] !== p[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== p[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== p[a]) {
                  var M = `
` + h[n].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Pt = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? nt(t) : "";
  }
  function zl(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return nt(e.type);
      case 16:
        return nt("Lazy");
      case 13:
        return e.child !== l && l !== null ? nt("Suspense Fallback") : nt("Suspense");
      case 19:
        return nt("SuspenseList");
      case 0:
      case 15:
        return sl(e.type, !1);
      case 11:
        return sl(e.type.render, !1);
      case 1:
        return sl(e.type, !0);
      case 31:
        return nt("Activity");
      default:
        return "";
    }
  }
  function yu(e) {
    try {
      var l = "", t = null;
      do
        l += zl(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var An = Object.prototype.hasOwnProperty, sa = c.unstable_scheduleCallback, da = c.unstable_cancelCallback, Qc = c.unstable_shouldYield, Zc = c.unstable_requestPaint, fl = c.unstable_now, mu = c.unstable_getCurrentPriorityLevel, gu = c.unstable_ImmediatePriority, vu = c.unstable_UserBlockingPriority, En = c.unstable_NormalPriority, w = c.unstable_LowPriority, j = c.unstable_IdlePriority, D = c.log, V = c.unstable_setDisableYieldValue, Q = null, N = null;
  function K(e) {
    if (typeof D == "function" && V(e), N && typeof N.setStrictMode == "function")
      try {
        N.setStrictMode(Q, e);
      } catch {
      }
  }
  var J = Math.clz32 ? Math.clz32 : Ne, He = Math.log, at = Math.LN2;
  function Ne(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (He(e) / at | 0) | 0;
  }
  var ut = 256, $l = 262144, Ge = 4194304;
  function dl(e) {
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
  function Cl(e, l, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var f = n & 134217727;
    return f !== 0 ? (n = f & ~u, n !== 0 ? a = dl(n) : (i &= f, i !== 0 ? a = dl(i) : t || (t = f & ~e, t !== 0 && (a = dl(t))))) : (f = n & ~u, f !== 0 ? a = dl(f) : i !== 0 ? a = dl(i) : t || (t = n & ~e, t !== 0 && (a = dl(t)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, t = l & -l, u >= t || u === 32 && (t & 4194048) !== 0) ? l : a;
  }
  function Fl(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function J0(e, l) {
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
  function po() {
    var e = Ge;
    return Ge <<= 1, (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function Vc(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function ha(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function k0(e, l, t, n, a, u) {
    var i = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var f = e.entanglements, h = e.expirationTimes, p = e.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var M = 31 - J(t), R = 1 << M;
      f[M] = 0, h[M] = -1;
      var A = p[M];
      if (A !== null)
        for (p[M] = null, M = 0; M < A.length; M++) {
          var z = A[M];
          z !== null && (z.lane &= -536870913);
        }
      t &= ~R;
    }
    n !== 0 && To(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~l));
  }
  function To(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var n = 31 - J(l);
    e.entangledLanes |= l, e.entanglements[n] = e.entanglements[n] | 1073741824 | t & 261930;
  }
  function Ao(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var n = 31 - J(t), a = 1 << n;
      a & l | e[n] & l && (e[n] |= l), t &= ~a;
    }
  }
  function Eo(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : Kc(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function Kc(e) {
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
  function Jc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zo() {
    var e = x.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : o0(e.type));
  }
  function Co(e, l) {
    var t = x.p;
    try {
      return x.p = e, l();
    } finally {
      x.p = t;
    }
  }
  var Mt = Math.random().toString(36).slice(2), ll = "__reactFiber$" + Mt, gl = "__reactProps$" + Mt, zn = "__reactContainer$" + Mt, kc = "__reactEvents$" + Mt, W0 = "__reactListeners$" + Mt, $0 = "__reactHandles$" + Mt, Oo = "__reactResources$" + Mt, ya = "__reactMarker$" + Mt;
  function Wc(e) {
    delete e[ll], delete e[gl], delete e[kc], delete e[W0], delete e[$0];
  }
  function Cn(e) {
    var l = e[ll];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[zn] || t[ll]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = Jd(e); e !== null; ) {
            if (t = e[ll]) return t;
            e = Jd(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function On(e) {
    if (e = e[ll] || e[zn]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function ma(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Mn(e) {
    var l = e[Oo];
    return l || (l = e[Oo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Pe(e) {
    e[ya] = !0;
  }
  var Mo = /* @__PURE__ */ new Set(), _o = {};
  function en(e, l) {
    _n(e, l), _n(e + "Capture", l);
  }
  function _n(e, l) {
    for (_o[e] = l, e = 0; e < l.length; e++)
      Mo.add(l[e]);
  }
  var F0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wo = {}, Do = {};
  function I0(e) {
    return An.call(Do, e) ? !0 : An.call(wo, e) ? !1 : F0.test(e) ? Do[e] = !0 : (wo[e] = !0, !1);
  }
  function Su(e, l, t) {
    if (I0(l))
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
  function ct(e, l, t, n) {
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
  function Nl(e) {
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
  function Ho(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function P0(e, l, t) {
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
        set: function(i) {
          t = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(e, l, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(i) {
          t = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[l];
        }
      };
    }
  }
  function $c(e) {
    if (!e._valueTracker) {
      var l = Ho(e) ? "checked" : "value";
      e._valueTracker = P0(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function Ro(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), n = "";
    return e && (n = Ho(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== t ? (l.setValue(e), !0) : !1;
  }
  function pu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var eh = /[\n"\\]/g;
  function jl(e) {
    return e.replace(
      eh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fc(e, l, t, n, a, u, i, f) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + Nl(l)) : e.value !== "" + Nl(l) && (e.value = "" + Nl(l)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), l != null ? Ic(e, i, Nl(l)) : t != null ? Ic(e, i, Nl(t)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Nl(f) : e.removeAttribute("name");
  }
  function Uo(e, l, t, n, a, u, i, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), l != null || t != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        $c(e);
        return;
      }
      t = t != null ? "" + Nl(t) : "", l = l != null ? "" + Nl(l) : t, f || l === e.value || (e.value = l), e.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = f ? e.checked : !!n, e.defaultChecked = !!n, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), $c(e);
  }
  function Ic(e, l, t) {
    l === "number" && pu(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function wn(e, l, t, n) {
    if (e = e.options, l) {
      l = {};
      for (var a = 0; a < t.length; a++)
        l["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++)
        a = l.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && n && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Nl(t), l = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        l !== null || e[a].disabled || (l = e[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Bo(e, l, t) {
    if (l != null && (l = "" + Nl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + Nl(t) : "";
  }
  function No(e, l, t, n) {
    if (l == null) {
      if (n != null) {
        if (t != null) throw Error(s(92));
        if (ml(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), l = t;
    }
    t = Nl(l), e.defaultValue = t, n = e.textContent, n === t && n !== "" && n !== null && (e.value = n), $c(e);
  }
  function Dn(e, l) {
    if (l) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    e.textContent = l;
  }
  var lh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jo(e, l, t) {
    var n = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : n ? e.setProperty(l, t) : typeof t != "number" || t === 0 || lh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function Go(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (e = e.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && t[a] !== n && jo(e, a, n);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && jo(e, u, l[u]);
  }
  function Pc(e) {
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
  var th = /* @__PURE__ */ new Map([
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
  ]), nh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tu(e) {
    return nh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function it() {
  }
  var ei = null;
  function li(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Hn = null, Rn = null;
  function xo(e) {
    var l = On(e);
    if (l && (e = l.stateNode)) {
      var t = e[gl] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (Fc(
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
              'input[name="' + jl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var n = t[l];
              if (n !== e && n.form === e.form) {
                var a = n[gl] || null;
                if (!a) throw Error(s(90));
                Fc(
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
              n = t[l], n.form === e.form && Ro(n);
          }
          break e;
        case "textarea":
          Bo(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && wn(e, !!t.multiple, l, !1);
      }
    }
  }
  var ti = !1;
  function Lo(e, l, t) {
    if (ti) return e(l, t);
    ti = !0;
    try {
      var n = e(l);
      return n;
    } finally {
      if (ti = !1, (Hn !== null || Rn !== null) && (fc(), Hn && (l = Hn, e = Rn, Rn = Hn = null, xo(l), e)))
        for (l = 0; l < e.length; l++) xo(e[l]);
    }
  }
  function ga(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var n = t[gl] || null;
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
        s(231, l, typeof t)
      );
    return t;
  }
  var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ni = !1;
  if (ft)
    try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function() {
          ni = !0;
        }
      }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      ni = !1;
    }
  var _t = null, ai = null, Au = null;
  function qo() {
    if (Au) return Au;
    var e, l = ai, t = l.length, n, a = "value" in _t ? _t.value : _t.textContent, u = a.length;
    for (e = 0; e < t && l[e] === a[e]; e++) ;
    var i = t - e;
    for (n = 1; n <= i && l[t - n] === a[u - n]; n++) ;
    return Au = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Eu(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zu() {
    return !0;
  }
  function Yo() {
    return !1;
  }
  function vl(e) {
    function l(t, n, a, u, i) {
      this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (t = e[f], this[f] = t ? t(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zu : Yo, this.isPropagationStopped = Yo, this;
    }
    return B(l.prototype, {
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
  var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cu = vl(ln), Sa = B({}, ln, { view: 0, detail: 0 }), ah = vl(Sa), ui, ci, ba, Ou = B({}, Sa, {
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
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ba && (ba && e.type === "mousemove" ? (ui = e.screenX - ba.screenX, ci = e.screenY - ba.screenY) : ci = ui = 0, ba = e), ui);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ci;
    }
  }), Xo = vl(Ou), uh = B({}, Ou, { dataTransfer: 0 }), ch = vl(uh), ih = B({}, Sa, { relatedTarget: 0 }), ii = vl(ih), fh = B({}, ln, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), oh = vl(fh), rh = B({}, ln, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sh = vl(rh), dh = B({}, ln, { data: 0 }), Qo = vl(dh), hh = {
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
  }, yh = {
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
  function gh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = mh[e]) ? !!l[e] : !1;
  }
  function fi() {
    return gh;
  }
  var vh = B({}, Sa, {
    key: function(e) {
      if (e.key) {
        var l = hh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Eu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function(e) {
      return e.type === "keypress" ? Eu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Sh = vl(vh), bh = B({}, Ou, {
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
  }), Zo = vl(bh), ph = B({}, Sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi
  }), Th = vl(ph), Ah = B({}, ln, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Eh = vl(Ah), zh = B({}, Ou, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ch = vl(zh), Oh = B({}, ln, {
    newState: 0,
    oldState: 0
  }), Mh = vl(Oh), _h = [9, 13, 27, 32], oi = ft && "CompositionEvent" in window, pa = null;
  ft && "documentMode" in document && (pa = document.documentMode);
  var wh = ft && "TextEvent" in window && !pa, Vo = ft && (!oi || pa && 8 < pa && 11 >= pa), Ko = " ", Jo = !1;
  function ko(e, l) {
    switch (e) {
      case "keyup":
        return _h.indexOf(l.keyCode) !== -1;
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
  function Wo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Un = !1;
  function Dh(e, l) {
    switch (e) {
      case "compositionend":
        return Wo(l);
      case "keypress":
        return l.which !== 32 ? null : (Jo = !0, Ko);
      case "textInput":
        return e = l.data, e === Ko && Jo ? null : e;
      default:
        return null;
    }
  }
  function Hh(e, l) {
    if (Un)
      return e === "compositionend" || !oi && ko(e, l) ? (e = qo(), Au = ai = _t = null, Un = !1, e) : null;
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
        return Vo && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Rh = {
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
  function $o(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!Rh[e.type] : l === "textarea";
  }
  function Fo(e, l, t, n) {
    Hn ? Rn ? Rn.push(n) : Rn = [n] : Hn = n, l = mc(l, "onChange"), 0 < l.length && (t = new Cu(
      "onChange",
      "change",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }));
  }
  var Ta = null, Aa = null;
  function Uh(e) {
    Ud(e, 0);
  }
  function Mu(e) {
    var l = ma(e);
    if (Ro(l)) return e;
  }
  function Io(e, l) {
    if (e === "change") return l;
  }
  var Po = !1;
  if (ft) {
    var ri;
    if (ft) {
      var si = "oninput" in document;
      if (!si) {
        var er = document.createElement("div");
        er.setAttribute("oninput", "return;"), si = typeof er.oninput == "function";
      }
      ri = si;
    } else ri = !1;
    Po = ri && (!document.documentMode || 9 < document.documentMode);
  }
  function lr() {
    Ta && (Ta.detachEvent("onpropertychange", tr), Aa = Ta = null);
  }
  function tr(e) {
    if (e.propertyName === "value" && Mu(Aa)) {
      var l = [];
      Fo(
        l,
        Aa,
        e,
        li(e)
      ), Lo(Uh, l);
    }
  }
  function Bh(e, l, t) {
    e === "focusin" ? (lr(), Ta = l, Aa = t, Ta.attachEvent("onpropertychange", tr)) : e === "focusout" && lr();
  }
  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mu(Aa);
  }
  function jh(e, l) {
    if (e === "click") return Mu(l);
  }
  function Gh(e, l) {
    if (e === "input" || e === "change")
      return Mu(l);
  }
  function xh(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var Ol = typeof Object.is == "function" ? Object.is : xh;
  function Ea(e, l) {
    if (Ol(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), n = Object.keys(l);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var a = t[n];
      if (!An.call(l, a) || !Ol(e[a], l[a]))
        return !1;
    }
    return !0;
  }
  function nr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ar(e, l) {
    var t = nr(e);
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
      t = nr(t);
    }
  }
  function ur(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? ur(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function cr(e) {
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
  function di(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var Lh = ft && "documentMode" in document && 11 >= document.documentMode, Bn = null, hi = null, za = null, yi = !1;
  function ir(e, l, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    yi || Bn == null || Bn !== pu(n) || (n = Bn, "selectionStart" in n && di(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), za && Ea(za, n) || (za = n, n = mc(hi, "onSelect"), 0 < n.length && (l = new Cu(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: n }), l.target = Bn)));
  }
  function tn(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var Nn = {
    animationend: tn("Animation", "AnimationEnd"),
    animationiteration: tn("Animation", "AnimationIteration"),
    animationstart: tn("Animation", "AnimationStart"),
    transitionrun: tn("Transition", "TransitionRun"),
    transitionstart: tn("Transition", "TransitionStart"),
    transitioncancel: tn("Transition", "TransitionCancel"),
    transitionend: tn("Transition", "TransitionEnd")
  }, mi = {}, fr = {};
  ft && (fr = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
  function nn(e) {
    if (mi[e]) return mi[e];
    if (!Nn[e]) return e;
    var l = Nn[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in fr)
        return mi[e] = l[t];
    return e;
  }
  var or = nn("animationend"), rr = nn("animationiteration"), sr = nn("animationstart"), qh = nn("transitionrun"), Yh = nn("transitionstart"), Xh = nn("transitioncancel"), dr = nn("transitionend"), hr = /* @__PURE__ */ new Map(), gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gi.push("scrollEnd");
  function Vl(e, l) {
    hr.set(e, l), en(l, [e]);
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
  }, Gl = [], jn = 0, vi = 0;
  function wu() {
    for (var e = jn, l = vi = jn = 0; l < e; ) {
      var t = Gl[l];
      Gl[l++] = null;
      var n = Gl[l];
      Gl[l++] = null;
      var a = Gl[l];
      Gl[l++] = null;
      var u = Gl[l];
      if (Gl[l++] = null, n !== null && a !== null) {
        var i = n.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), n.pending = a;
      }
      u !== 0 && yr(t, a, u);
    }
  }
  function Du(e, l, t, n) {
    Gl[jn++] = e, Gl[jn++] = l, Gl[jn++] = t, Gl[jn++] = n, vi |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Si(e, l, t, n) {
    return Du(e, l, t, n), Hu(e);
  }
  function an(e, l) {
    return Du(e, null, null, l), Hu(e);
  }
  function yr(e, l, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= t, n = u.alternate, n !== null && (n.childLanes |= t), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && l !== null && (a = 31 - J(t), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [l] : n.push(l), l.lane = t | 536870912), u) : null;
  }
  function Hu(e) {
    if (50 < Ka)
      throw Ka = 0, _f = null, Error(s(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Gn = {};
  function Qh(e, l, t, n) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ml(e, l, t, n) {
    return new Qh(e, l, t, n);
  }
  function bi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ot(e, l) {
    var t = e.alternate;
    return t === null ? (t = Ml(
      e.tag,
      l,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function mr(e, l) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), e;
  }
  function Ru(e, l, t, n, a, u) {
    var i = 0;
    if (n = e, typeof e == "function") bi(e) && (i = 1);
    else if (typeof e == "string")
      i = ky(
        e,
        t,
        Y.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Ul:
          return e = Ml(31, t, l, a), e.elementType = Ul, e.lanes = u, e;
        case ze:
          return un(t.children, a, u, l);
        case W:
          i = 8, a |= 24;
          break;
        case $:
          return e = Ml(12, t, l, a | 2), e.elementType = $, e.lanes = u, e;
        case cl:
          return e = Ml(13, t, l, a), e.elementType = cl, e.lanes = u, e;
        case $e:
          return e = Ml(19, t, l, a), e.elementType = $e, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Te:
                i = 10;
                break e;
              case Ve:
                i = 9;
                break e;
              case De:
                i = 11;
                break e;
              case ce:
                i = 14;
                break e;
              case Ie:
                i = 16, n = null;
                break e;
            }
          i = 29, t = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return l = Ml(i, t, l, a), l.elementType = e, l.type = n, l.lanes = u, l;
  }
  function un(e, l, t, n) {
    return e = Ml(7, e, n, l), e.lanes = t, e;
  }
  function pi(e, l, t) {
    return e = Ml(6, e, null, l), e.lanes = t, e;
  }
  function gr(e) {
    var l = Ml(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Ti(e, l, t) {
    return l = Ml(
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
  var vr = /* @__PURE__ */ new WeakMap();
  function xl(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = vr.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: yu(l)
      }, vr.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: yu(l)
    };
  }
  var xn = [], Ln = 0, Uu = null, Ca = 0, Ll = [], ql = 0, wt = null, Il = 1, Pl = "";
  function rt(e, l) {
    xn[Ln++] = Ca, xn[Ln++] = Uu, Uu = e, Ca = l;
  }
  function Sr(e, l, t) {
    Ll[ql++] = Il, Ll[ql++] = Pl, Ll[ql++] = wt, wt = e;
    var n = Il;
    e = Pl;
    var a = 32 - J(n) - 1;
    n &= ~(1 << a), t += 1;
    var u = 32 - J(l) + a;
    if (30 < u) {
      var i = a - a % 5;
      u = (n & (1 << i) - 1).toString(32), n >>= i, a -= i, Il = 1 << 32 - J(l) + a | t << a | n, Pl = u + e;
    } else
      Il = 1 << u | t << a | n, Pl = e;
  }
  function Ai(e) {
    e.return !== null && (rt(e, 1), Sr(e, 1, 0));
  }
  function Ei(e) {
    for (; e === Uu; )
      Uu = xn[--Ln], xn[Ln] = null, Ca = xn[--Ln], xn[Ln] = null;
    for (; e === wt; )
      wt = Ll[--ql], Ll[ql] = null, Pl = Ll[--ql], Ll[ql] = null, Il = Ll[--ql], Ll[ql] = null;
  }
  function br(e, l) {
    Ll[ql++] = Il, Ll[ql++] = Pl, Ll[ql++] = wt, Il = l.id, Pl = l.overflow, wt = e;
  }
  var tl = null, Re = null, he = !1, Dt = null, Yl = !1, zi = Error(s(519));
  function Ht(e) {
    var l = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Oa(xl(l, e)), zi;
  }
  function pr(e) {
    var l = e.stateNode, t = e.type, n = e.memoizedProps;
    switch (l[ll] = e, l[gl] = n, t) {
      case "dialog":
        fe("cancel", l), fe("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < ka.length; t++)
          fe(ka[t], l);
        break;
      case "source":
        fe("error", l);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", l), fe("load", l);
        break;
      case "details":
        fe("toggle", l);
        break;
      case "input":
        fe("invalid", l), Uo(
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
        fe("invalid", l);
        break;
      case "textarea":
        fe("invalid", l), No(l, n.value, n.defaultValue, n.children);
    }
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || n.suppressHydrationWarning === !0 || Gd(l.textContent, t) ? (n.popover != null && (fe("beforetoggle", l), fe("toggle", l)), n.onScroll != null && fe("scroll", l), n.onScrollEnd != null && fe("scrollend", l), n.onClick != null && (l.onclick = it), l = !0) : l = !1, l || Ht(e, !0);
  }
  function Tr(e) {
    for (tl = e.return; tl; )
      switch (tl.tag) {
        case 5:
        case 31:
        case 13:
          Yl = !1;
          return;
        case 27:
        case 3:
          Yl = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function qn(e) {
    if (e !== tl) return !1;
    if (!he) return Tr(e), he = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Qf(e.type, e.memoizedProps)), t = !t), t && Re && Ht(e), Tr(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Re = Kd(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Re = Kd(e);
    } else
      l === 27 ? (l = Re, Vt(e.type) ? (e = kf, kf = null, Re = e) : Re = l) : Re = tl ? Ql(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cn() {
    Re = tl = null, he = !1;
  }
  function Ci() {
    var e = Dt;
    return e !== null && (Tl === null ? Tl = e : Tl.push.apply(
      Tl,
      e
    ), Dt = null), e;
  }
  function Oa(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var Oi = m(null), fn = null, st = null;
  function Rt(e, l, t) {
    L(Oi, l._currentValue), l._currentValue = t;
  }
  function dt(e) {
    e._currentValue = Oi.current, U(Oi);
  }
  function Mi(e, l, t) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function _i(e, l, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = a;
          for (var h = 0; h < l.length; h++)
            if (f.context === l[h]) {
              u.lanes |= t, f = u.alternate, f !== null && (f.lanes |= t), Mi(
                u.return,
                t,
                e
              ), n || (i = null);
              break e;
            }
          u = f.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(s(341));
        i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Mi(i, t, e), i = null;
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (a = i.sibling, a !== null) {
            a.return = i.return, i = a;
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function Yn(e, l, t, n) {
    e = null;
    for (var a = l, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(s(387));
        if (i = i.memoizedProps, i !== null) {
          var f = a.type;
          Ol(a.pendingProps.value, i.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === ee.current) {
        if (i = a.alternate, i === null) throw Error(s(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Pa) : e = [Pa]);
      }
      a = a.return;
    }
    e !== null && _i(
      l,
      e,
      t,
      n
    ), l.flags |= 262144;
  }
  function Bu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ol(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function on(e) {
    fn = e, st = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nl(e) {
    return Ar(fn, e);
  }
  function Nu(e, l) {
    return fn === null && on(e), Ar(e, l);
  }
  function Ar(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, st === null) {
      if (e === null) throw Error(s(308));
      st = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else st = st.next = l;
    return t;
  }
  var Zh = typeof AbortController < "u" ? AbortController : function() {
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
  }, Vh = c.unstable_scheduleCallback, Kh = c.unstable_NormalPriority, Ke = {
    $$typeof: Te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wi() {
    return {
      controller: new Zh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ma(e) {
    e.refCount--, e.refCount === 0 && Vh(Kh, function() {
      e.controller.abort();
    });
  }
  var _a = null, Di = 0, Xn = 0, Qn = null;
  function Jh(e, l) {
    if (_a === null) {
      var t = _a = [];
      Di = 0, Xn = Bf(), Qn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return Di++, l.then(Er, Er), l;
  }
  function Er() {
    if (--Di === 0 && _a !== null) {
      Qn !== null && (Qn.status = "fulfilled");
      var e = _a;
      _a = null, Xn = 0, Qn = null;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
  }
  function kh(e, l) {
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
  var zr = _.S;
  _.S = function(e, l) {
    id = fl(), typeof l == "object" && l !== null && typeof l.then == "function" && Jh(e, l), zr !== null && zr(e, l);
  };
  var rn = m(null);
  function Hi() {
    var e = rn.current;
    return e !== null ? e : _e.pooledCache;
  }
  function ju(e, l) {
    l === null ? L(rn, rn.current) : L(rn, l.pool);
  }
  function Cr() {
    var e = Hi();
    return e === null ? null : { parent: Ke._currentValue, pool: e };
  }
  var Zn = Error(s(460)), Ri = Error(s(474)), Gu = Error(s(542)), xu = { then: function() {
  } };
  function Or(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mr(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(it, it), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, wr(e), e;
      default:
        if (typeof l.status == "string") l.then(it, it);
        else {
          if (e = _e, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = l.reason, wr(e), e;
        }
        throw dn = l, Zn;
    }
  }
  function sn(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (dn = t, Zn) : t;
    }
  }
  var dn = null;
  function _r() {
    if (dn === null) throw Error(s(459));
    var e = dn;
    return dn = null, e;
  }
  function wr(e) {
    if (e === Zn || e === Gu)
      throw Error(s(483));
  }
  var Vn = null, wa = 0;
  function Lu(e) {
    var l = wa;
    return wa += 1, Vn === null && (Vn = []), Mr(Vn, e, l);
  }
  function Da(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function qu(e, l) {
    throw l.$$typeof === C ? Error(s(525)) : (e = Object.prototype.toString.call(l), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function Dr(e) {
    function l(v, y) {
      if (e) {
        var b = v.deletions;
        b === null ? (v.deletions = [y], v.flags |= 16) : b.push(y);
      }
    }
    function t(v, y) {
      if (!e) return null;
      for (; y !== null; )
        l(v, y), y = y.sibling;
      return null;
    }
    function n(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function a(v, y) {
      return v = ot(v, y), v.index = 0, v.sibling = null, v;
    }
    function u(v, y, b) {
      return v.index = b, e ? (b = v.alternate, b !== null ? (b = b.index, b < y ? (v.flags |= 67108866, y) : b) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function i(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, y, b, H) {
      return y === null || y.tag !== 6 ? (y = pi(b, v.mode, H), y.return = v, y) : (y = a(y, b), y.return = v, y);
    }
    function h(v, y, b, H) {
      var k = b.type;
      return k === ze ? M(
        v,
        y,
        b.props.children,
        H,
        b.key
      ) : y !== null && (y.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ie && sn(k) === y.type) ? (y = a(y, b.props), Da(y, b), y.return = v, y) : (y = Ru(
        b.type,
        b.key,
        b.props,
        null,
        v.mode,
        H
      ), Da(y, b), y.return = v, y);
    }
    function p(v, y, b, H) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== b.containerInfo || y.stateNode.implementation !== b.implementation ? (y = Ti(b, v.mode, H), y.return = v, y) : (y = a(y, b.children || []), y.return = v, y);
    }
    function M(v, y, b, H, k) {
      return y === null || y.tag !== 7 ? (y = un(
        b,
        v.mode,
        H,
        k
      ), y.return = v, y) : (y = a(y, b), y.return = v, y);
    }
    function R(v, y, b) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = pi(
          "" + y,
          v.mode,
          b
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case P:
            return b = Ru(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              b
            ), Da(b, y), b.return = v, b;
          case oe:
            return y = Ti(
              y,
              v.mode,
              b
            ), y.return = v, y;
          case Ie:
            return y = sn(y), R(v, y, b);
        }
        if (ml(y) || Ye(y))
          return y = un(
            y,
            v.mode,
            b,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return R(v, Lu(y), b);
        if (y.$$typeof === Te)
          return R(
            v,
            Nu(v, y),
            b
          );
        qu(v, y);
      }
      return null;
    }
    function A(v, y, b, H) {
      var k = y !== null ? y.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return k !== null ? null : f(v, y, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case P:
            return b.key === k ? h(v, y, b, H) : null;
          case oe:
            return b.key === k ? p(v, y, b, H) : null;
          case Ie:
            return b = sn(b), A(v, y, b, H);
        }
        if (ml(b) || Ye(b))
          return k !== null ? null : M(v, y, b, H, null);
        if (typeof b.then == "function")
          return A(
            v,
            y,
            Lu(b),
            H
          );
        if (b.$$typeof === Te)
          return A(
            v,
            y,
            Nu(v, b),
            H
          );
        qu(v, b);
      }
      return null;
    }
    function z(v, y, b, H, k) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return v = v.get(b) || null, f(y, v, "" + H, k);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case P:
            return v = v.get(
              H.key === null ? b : H.key
            ) || null, h(y, v, H, k);
          case oe:
            return v = v.get(
              H.key === null ? b : H.key
            ) || null, p(y, v, H, k);
          case Ie:
            return H = sn(H), z(
              v,
              y,
              b,
              H,
              k
            );
        }
        if (ml(H) || Ye(H))
          return v = v.get(b) || null, M(y, v, H, k, null);
        if (typeof H.then == "function")
          return z(
            v,
            y,
            b,
            Lu(H),
            k
          );
        if (H.$$typeof === Te)
          return z(
            v,
            y,
            b,
            Nu(y, H),
            k
          );
        qu(y, H);
      }
      return null;
    }
    function q(v, y, b, H) {
      for (var k = null, ye = null, Z = y, ue = y = 0, se = null; Z !== null && ue < b.length; ue++) {
        Z.index > ue ? (se = Z, Z = null) : se = Z.sibling;
        var me = A(
          v,
          Z,
          b[ue],
          H
        );
        if (me === null) {
          Z === null && (Z = se);
          break;
        }
        e && Z && me.alternate === null && l(v, Z), y = u(me, y, ue), ye === null ? k = me : ye.sibling = me, ye = me, Z = se;
      }
      if (ue === b.length)
        return t(v, Z), he && rt(v, ue), k;
      if (Z === null) {
        for (; ue < b.length; ue++)
          Z = R(v, b[ue], H), Z !== null && (y = u(
            Z,
            y,
            ue
          ), ye === null ? k = Z : ye.sibling = Z, ye = Z);
        return he && rt(v, ue), k;
      }
      for (Z = n(Z); ue < b.length; ue++)
        se = z(
          Z,
          v,
          ue,
          b[ue],
          H
        ), se !== null && (e && se.alternate !== null && Z.delete(
          se.key === null ? ue : se.key
        ), y = u(
          se,
          y,
          ue
        ), ye === null ? k = se : ye.sibling = se, ye = se);
      return e && Z.forEach(function($t) {
        return l(v, $t);
      }), he && rt(v, ue), k;
    }
    function I(v, y, b, H) {
      if (b == null) throw Error(s(151));
      for (var k = null, ye = null, Z = y, ue = y = 0, se = null, me = b.next(); Z !== null && !me.done; ue++, me = b.next()) {
        Z.index > ue ? (se = Z, Z = null) : se = Z.sibling;
        var $t = A(v, Z, me.value, H);
        if ($t === null) {
          Z === null && (Z = se);
          break;
        }
        e && Z && $t.alternate === null && l(v, Z), y = u($t, y, ue), ye === null ? k = $t : ye.sibling = $t, ye = $t, Z = se;
      }
      if (me.done)
        return t(v, Z), he && rt(v, ue), k;
      if (Z === null) {
        for (; !me.done; ue++, me = b.next())
          me = R(v, me.value, H), me !== null && (y = u(me, y, ue), ye === null ? k = me : ye.sibling = me, ye = me);
        return he && rt(v, ue), k;
      }
      for (Z = n(Z); !me.done; ue++, me = b.next())
        me = z(Z, v, ue, me.value, H), me !== null && (e && me.alternate !== null && Z.delete(me.key === null ? ue : me.key), y = u(me, y, ue), ye === null ? k = me : ye.sibling = me, ye = me);
      return e && Z.forEach(function(um) {
        return l(v, um);
      }), he && rt(v, ue), k;
    }
    function Me(v, y, b, H) {
      if (typeof b == "object" && b !== null && b.type === ze && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case P:
            e: {
              for (var k = b.key; y !== null; ) {
                if (y.key === k) {
                  if (k = b.type, k === ze) {
                    if (y.tag === 7) {
                      t(
                        v,
                        y.sibling
                      ), H = a(
                        y,
                        b.props.children
                      ), H.return = v, v = H;
                      break e;
                    }
                  } else if (y.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ie && sn(k) === y.type) {
                    t(
                      v,
                      y.sibling
                    ), H = a(y, b.props), Da(H, b), H.return = v, v = H;
                    break e;
                  }
                  t(v, y);
                  break;
                } else l(v, y);
                y = y.sibling;
              }
              b.type === ze ? (H = un(
                b.props.children,
                v.mode,
                H,
                b.key
              ), H.return = v, v = H) : (H = Ru(
                b.type,
                b.key,
                b.props,
                null,
                v.mode,
                H
              ), Da(H, b), H.return = v, v = H);
            }
            return i(v);
          case oe:
            e: {
              for (k = b.key; y !== null; ) {
                if (y.key === k)
                  if (y.tag === 4 && y.stateNode.containerInfo === b.containerInfo && y.stateNode.implementation === b.implementation) {
                    t(
                      v,
                      y.sibling
                    ), H = a(y, b.children || []), H.return = v, v = H;
                    break e;
                  } else {
                    t(v, y);
                    break;
                  }
                else l(v, y);
                y = y.sibling;
              }
              H = Ti(b, v.mode, H), H.return = v, v = H;
            }
            return i(v);
          case Ie:
            return b = sn(b), Me(
              v,
              y,
              b,
              H
            );
        }
        if (ml(b))
          return q(
            v,
            y,
            b,
            H
          );
        if (Ye(b)) {
          if (k = Ye(b), typeof k != "function") throw Error(s(150));
          return b = k.call(b), I(
            v,
            y,
            b,
            H
          );
        }
        if (typeof b.then == "function")
          return Me(
            v,
            y,
            Lu(b),
            H
          );
        if (b.$$typeof === Te)
          return Me(
            v,
            y,
            Nu(v, b),
            H
          );
        qu(v, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, y !== null && y.tag === 6 ? (t(v, y.sibling), H = a(y, b), H.return = v, v = H) : (t(v, y), H = pi(b, v.mode, H), H.return = v, v = H), i(v)) : t(v, y);
    }
    return function(v, y, b, H) {
      try {
        wa = 0;
        var k = Me(
          v,
          y,
          b,
          H
        );
        return Vn = null, k;
      } catch (Z) {
        if (Z === Zn || Z === Gu) throw Z;
        var ye = Ml(29, Z, null, v.mode);
        return ye.lanes = H, ye.return = v, ye;
      }
    };
  }
  var hn = Dr(!0), Hr = Dr(!1), Ut = !1;
  function Ui(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bi(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Bt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Nt(e, l, t) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = Hu(e), yr(e, null, t), l;
    }
    return Du(e, n, l, t), Hu(e);
  }
  function Ha(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, Ao(e, t);
    }
  }
  function Ni(e, l) {
    var t = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, t === n)) {
      var a = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = i : u = u.next = i, t = t.next;
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
  var ji = !1;
  function Ra() {
    if (ji) {
      var e = Qn;
      if (e !== null) throw e;
    }
  }
  function Ua(e, l, t, n) {
    ji = !1;
    var a = e.updateQueue;
    Ut = !1;
    var u = a.firstBaseUpdate, i = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var h = f, p = h.next;
      h.next = null, i === null ? u = p : i.next = p, i = h;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, f = M.lastBaseUpdate, f !== i && (f === null ? M.firstBaseUpdate = p : f.next = p, M.lastBaseUpdate = h));
    }
    if (u !== null) {
      var R = a.baseState;
      i = 0, M = p = h = null, f = u;
      do {
        var A = f.lane & -536870913, z = A !== f.lane;
        if (z ? (re & A) === A : (n & A) === A) {
          A !== 0 && A === Xn && (ji = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var q = e, I = f;
            A = l;
            var Me = t;
            switch (I.tag) {
              case 1:
                if (q = I.payload, typeof q == "function") {
                  R = q.call(Me, R, A);
                  break e;
                }
                R = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = I.payload, A = typeof q == "function" ? q.call(Me, R, A) : q, A == null) break e;
                R = B({}, R, A);
                break e;
              case 2:
                Ut = !0;
            }
          }
          A = f.callback, A !== null && (e.flags |= 64, z && (e.flags |= 8192), z = a.callbacks, z === null ? a.callbacks = [A] : z.push(A));
        } else
          z = {
            lane: A,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, M === null ? (p = M = z, h = R) : M = M.next = z, i |= A;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          z = f, f = z.next, z.next = null, a.lastBaseUpdate = z, a.shared.pending = null;
        }
      } while (!0);
      M === null && (h = R), a.baseState = h, a.firstBaseUpdate = p, a.lastBaseUpdate = M, u === null && (a.shared.lanes = 0), qt |= i, e.lanes = i, e.memoizedState = R;
    }
  }
  function Rr(e, l) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(l);
  }
  function Ur(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        Rr(t[e], l);
  }
  var Kn = m(null), Yu = m(0);
  function Br(e, l) {
    e = Tt, L(Yu, e), L(Kn, l), Tt = e | l.baseLanes;
  }
  function Gi() {
    L(Yu, Tt), L(Kn, Kn.current);
  }
  function xi() {
    Tt = Yu.current, U(Kn), U(Yu);
  }
  var _l = m(null), Xl = null;
  function jt(e) {
    var l = e.alternate;
    L(Xe, Xe.current & 1), L(_l, e), Xl === null && (l === null || Kn.current !== null || l.memoizedState !== null) && (Xl = e);
  }
  function Li(e) {
    L(Xe, Xe.current), L(_l, e), Xl === null && (Xl = e);
  }
  function Nr(e) {
    e.tag === 22 ? (L(Xe, Xe.current), L(_l, e), Xl === null && (Xl = e)) : Gt();
  }
  function Gt() {
    L(Xe, Xe.current), L(_l, _l.current);
  }
  function wl(e) {
    U(_l), Xl === e && (Xl = null), U(Xe);
  }
  var Xe = m(0);
  function Xu(e) {
    for (var l = e; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Kf(t) || Jf(t)))
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
  var ht = 0, ae = null, Ce = null, Je = null, Qu = !1, Jn = !1, yn = !1, Zu = 0, Ba = 0, kn = null, Wh = 0;
  function xe() {
    throw Error(s(321));
  }
  function qi(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!Ol(e[t], l[t])) return !1;
    return !0;
  }
  function Yi(e, l, t, n, a, u) {
    return ht = u, ae = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = e === null || e.memoizedState === null ? Ss : tf, yn = !1, u = t(n, a), yn = !1, Jn && (u = Gr(
      l,
      t,
      n,
      a
    )), jr(e), u;
  }
  function jr(e) {
    _.H = Ga;
    var l = Ce !== null && Ce.next !== null;
    if (ht = 0, Je = Ce = ae = null, Qu = !1, Ba = 0, kn = null, l) throw Error(s(300));
    e === null || ke || (e = e.dependencies, e !== null && Bu(e) && (ke = !0));
  }
  function Gr(e, l, t, n) {
    ae = e;
    var a = 0;
    do {
      if (Jn && (kn = null), Ba = 0, Jn = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Je = Ce = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      _.H = bs, u = l(t, n);
    } while (Jn);
    return u;
  }
  function $h() {
    var e = _.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? Na(l) : l, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ae.flags |= 1024), l;
  }
  function Xi() {
    var e = Zu !== 0;
    return Zu = 0, e;
  }
  function Qi(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function Zi(e) {
    if (Qu) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      Qu = !1;
    }
    ht = 0, Je = Ce = ae = null, Jn = !1, Ba = Zu = 0, kn = null;
  }
  function hl() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? ae.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Qe() {
    if (Ce === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var l = Je === null ? ae.memoizedState : Je.next;
    if (l !== null)
      Je = l, Ce = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(s(467)) : Error(s(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Je === null ? ae.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function Vu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Na(e) {
    var l = Ba;
    return Ba += 1, kn === null && (kn = []), e = Mr(kn, e, l), l = ae, (Je === null ? l.memoizedState : Je.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? Ss : tf), e;
  }
  function Ku(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Na(e);
      if (e.$$typeof === Te) return nl(e);
    }
    throw Error(s(438, String(e)));
  }
  function Vi(e) {
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
        t[n] = il;
    return l.index++, t;
  }
  function yt(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function Ju(e) {
    var l = Qe();
    return Ki(l, Ce, e);
  }
  function Ki(e, l, t) {
    var n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var a = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = u.next, u.next = i;
      }
      l.baseQueue = a = u, n.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      l = a.next;
      var f = i = null, h = null, p = l, M = !1;
      do {
        var R = p.lane & -536870913;
        if (R !== p.lane ? (re & R) === R : (ht & R) === R) {
          var A = p.revertLane;
          if (A === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), R === Xn && (M = !0);
          else if ((ht & A) === A) {
            p = p.next, A === Xn && (M = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, h === null ? (f = h = R, i = u) : h = h.next = R, ae.lanes |= A, qt |= A;
          R = p.action, yn && t(u, R), u = p.hasEagerState ? p.eagerState : t(u, R);
        } else
          A = {
            lane: R,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, h === null ? (f = h = A, i = u) : h = h.next = A, ae.lanes |= R, qt |= R;
        p = p.next;
      } while (p !== null && p !== l);
      if (h === null ? i = u : h.next = f, !Ol(u, e.memoizedState) && (ke = !0, M && (t = Qn, t !== null)))
        throw t;
      e.memoizedState = u, e.baseState = i, e.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Ji(e) {
    var l = Qe(), t = l.queue;
    if (t === null) throw Error(s(311));
    t.lastRenderedReducer = e;
    var n = t.dispatch, a = t.pending, u = l.memoizedState;
    if (a !== null) {
      t.pending = null;
      var i = a = a.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== a);
      Ol(u, l.memoizedState) || (ke = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), t.lastRenderedState = u;
    }
    return [u, n];
  }
  function xr(e, l, t) {
    var n = ae, a = Qe(), u = he;
    if (u) {
      if (t === void 0) throw Error(s(407));
      t = t();
    } else t = l();
    var i = !Ol(
      (Ce || a).memoizedState,
      t
    );
    if (i && (a.memoizedState = t, ke = !0), a = a.queue, $i(Yr.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== l || i || Je !== null && Je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wn(
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
      ), _e === null) throw Error(s(349));
      u || (ht & 127) !== 0 || Lr(n, l, t);
    }
    return t;
  }
  function Lr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = ae.updateQueue, l === null ? (l = Vu(), ae.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function qr(e, l, t, n) {
    l.value = t, l.getSnapshot = n, Xr(l) && Qr(e);
  }
  function Yr(e, l, t) {
    return t(function() {
      Xr(l) && Qr(e);
    });
  }
  function Xr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !Ol(e, t);
    } catch {
      return !0;
    }
  }
  function Qr(e) {
    var l = an(e, 2);
    l !== null && Al(l, e, 2);
  }
  function ki(e) {
    var l = hl();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), yn) {
        K(!0);
        try {
          t();
        } finally {
          K(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = e, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yt,
      lastRenderedState: e
    }, l;
  }
  function Zr(e, l, t, n) {
    return e.baseState = t, Ki(
      e,
      Ce,
      typeof n == "function" ? n : yt
    );
  }
  function Fh(e, l, t, n, a) {
    if ($u(e)) throw Error(s(485));
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
        then: function(i) {
          u.listeners.push(i);
        }
      };
      _.T !== null ? t(!0) : u.isTransition = !1, n(u), t = l.pending, t === null ? (u.next = l.pending = u, Vr(l, u)) : (u.next = t.next, l.pending = t.next = u);
    }
  }
  function Vr(e, l) {
    var t = l.action, n = l.payload, a = e.state;
    if (l.isTransition) {
      var u = _.T, i = {};
      _.T = i;
      try {
        var f = t(a, n), h = _.S;
        h !== null && h(i, f), Kr(e, l, f);
      } catch (p) {
        Wi(e, l, p);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), _.T = u;
      }
    } else
      try {
        u = t(a, n), Kr(e, l, u);
      } catch (p) {
        Wi(e, l, p);
      }
  }
  function Kr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        Jr(e, l, n);
      },
      function(n) {
        return Wi(e, l, n);
      }
    ) : Jr(e, l, t);
  }
  function Jr(e, l, t) {
    l.status = "fulfilled", l.value = t, kr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, Vr(e, t)));
  }
  function Wi(e, l, t) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = t, kr(l), l = l.next;
      while (l !== n);
    }
    e.action = null;
  }
  function kr(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function Wr(e, l) {
    return l;
  }
  function $r(e, l) {
    if (he) {
      var t = _e.formState;
      if (t !== null) {
        e: {
          var n = ae;
          if (he) {
            if (Re) {
              l: {
                for (var a = Re, u = Yl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = Ql(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Re = Ql(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Ht(n);
          }
          n = !1;
        }
        n && (l = t[0]);
      }
    }
    return t = hl(), t.memoizedState = t.baseState = l, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: l
    }, t.queue = n, t = ms.bind(
      null,
      ae,
      n
    ), n.dispatch = t, n = ki(!1), u = lf.bind(
      null,
      ae,
      !1,
      n.queue
    ), n = hl(), a = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, t = Fh.bind(
      null,
      ae,
      a,
      u,
      t
    ), a.dispatch = t, n.memoizedState = e, [l, t, !1];
  }
  function Fr(e) {
    var l = Qe();
    return Ir(l, Ce, e);
  }
  function Ir(e, l, t) {
    if (l = Ki(
      e,
      l,
      Wr
    )[0], e = Ju(yt)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Na(l);
      } catch (i) {
        throw i === Zn ? Gu : i;
      }
    else n = l;
    l = Qe();
    var a = l.queue, u = a.dispatch;
    return t !== l.memoizedState && (ae.flags |= 2048, Wn(
      9,
      { destroy: void 0 },
      Ih.bind(null, a, t),
      null
    )), [n, u, e];
  }
  function Ih(e, l) {
    e.action = l;
  }
  function Pr(e) {
    var l = Qe(), t = Ce;
    if (t !== null)
      return Ir(l, t, e);
    Qe(), l = l.memoizedState, t = Qe();
    var n = t.queue.dispatch;
    return t.memoizedState = e, [l, n, !1];
  }
  function Wn(e, l, t, n) {
    return e = { tag: e, create: t, deps: n, inst: l, next: null }, l = ae.updateQueue, l === null && (l = Vu(), ae.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, l.lastEffect = e), e;
  }
  function es() {
    return Qe().memoizedState;
  }
  function ku(e, l, t, n) {
    var a = hl();
    ae.flags |= e, a.memoizedState = Wn(
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
    Ce !== null && n !== null && qi(n, Ce.memoizedState.deps) ? a.memoizedState = Wn(l, u, t, n) : (ae.flags |= e, a.memoizedState = Wn(
      1 | l,
      u,
      t,
      n
    ));
  }
  function ls(e, l) {
    ku(8390656, 8, e, l);
  }
  function $i(e, l) {
    Wu(2048, 8, e, l);
  }
  function Ph(e) {
    ae.flags |= 4;
    var l = ae.updateQueue;
    if (l === null)
      l = Vu(), ae.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function ts(e) {
    var l = Qe().memoizedState;
    return Ph({ ref: l, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(s(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ns(e, l) {
    return Wu(4, 2, e, l);
  }
  function as(e, l) {
    return Wu(4, 4, e, l);
  }
  function us(e, l) {
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
  function cs(e, l, t) {
    t = t != null ? t.concat([e]) : null, Wu(4, 4, us.bind(null, l, e), t);
  }
  function Fi() {
  }
  function is(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    return l !== null && qi(l, n[1]) ? n[0] : (t.memoizedState = [e, l], e);
  }
  function fs(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    if (l !== null && qi(l, n[1]))
      return n[0];
    if (n = e(), yn) {
      K(!0);
      try {
        e();
      } finally {
        K(!1);
      }
    }
    return t.memoizedState = [n, l], n;
  }
  function Ii(e, l, t) {
    return t === void 0 || (ht & 1073741824) !== 0 && (re & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = od(), ae.lanes |= e, qt |= e, t);
  }
  function os(e, l, t, n) {
    return Ol(t, l) ? t : Kn.current !== null ? (e = Ii(e, t, n), Ol(e, l) || (ke = !0), e) : (ht & 42) === 0 || (ht & 1073741824) !== 0 && (re & 261930) === 0 ? (ke = !0, e.memoizedState = t) : (e = od(), ae.lanes |= e, qt |= e, l);
  }
  function rs(e, l, t, n, a) {
    var u = x.p;
    x.p = u !== 0 && 8 > u ? u : 8;
    var i = _.T, f = {};
    _.T = f, lf(e, !1, l, t);
    try {
      var h = a(), p = _.S;
      if (p !== null && p(f, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var M = kh(
          h,
          n
        );
        ja(
          e,
          l,
          M,
          Rl(e)
        );
      } else
        ja(
          e,
          l,
          n,
          Rl(e)
        );
    } catch (R) {
      ja(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: R },
        Rl()
      );
    } finally {
      x.p = u, i !== null && f.types !== null && (i.types = f.types), _.T = i;
    }
  }
  function ey() {
  }
  function Pi(e, l, t, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = ss(e).queue;
    rs(
      e,
      a,
      l,
      F,
      t === null ? ey : function() {
        return ds(e), t(n);
      }
    );
  }
  function ss(e) {
    var l = e.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yt,
        lastRenderedState: F
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
        lastRenderedReducer: yt,
        lastRenderedState: t
      },
      next: null
    }, e.memoizedState = l, e = e.alternate, e !== null && (e.memoizedState = l), l;
  }
  function ds(e) {
    var l = ss(e);
    l.next === null && (l = e.alternate.memoizedState), ja(
      e,
      l.next.queue,
      {},
      Rl()
    );
  }
  function ef() {
    return nl(Pa);
  }
  function hs() {
    return Qe().memoizedState;
  }
  function ys() {
    return Qe().memoizedState;
  }
  function ly(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = Rl();
          e = Bt(t);
          var n = Nt(l, e, t);
          n !== null && (Al(n, l, t), Ha(n, l, t)), l = { cache: wi() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function ty(e, l, t) {
    var n = Rl();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e) ? gs(l, t) : (t = Si(e, l, t, n), t !== null && (Al(t, e, n), vs(t, l, n)));
  }
  function ms(e, l, t) {
    var n = Rl();
    ja(e, l, t, n);
  }
  function ja(e, l, t, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($u(e)) gs(l, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, f = u(i, t);
          if (a.hasEagerState = !0, a.eagerState = f, Ol(f, i))
            return Du(e, l, a, 0), _e === null && wu(), !1;
        } catch {
        }
      if (t = Si(e, l, a, n), t !== null)
        return Al(t, e, n), vs(t, l, n), !0;
    }
    return !1;
  }
  function lf(e, l, t, n) {
    if (n = {
      lane: 2,
      revertLane: Bf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e)) {
      if (l) throw Error(s(479));
    } else
      l = Si(
        e,
        t,
        n,
        2
      ), l !== null && Al(l, e, 2);
  }
  function $u(e) {
    var l = e.alternate;
    return e === ae || l !== null && l === ae;
  }
  function gs(e, l) {
    Jn = Qu = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function vs(e, l, t) {
    if ((t & 4194048) !== 0) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, Ao(e, t);
    }
  }
  var Ga = {
    readContext: nl,
    use: Ku,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useLayoutEffect: xe,
    useInsertionEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useSyncExternalStore: xe,
    useId: xe,
    useHostTransitionStatus: xe,
    useFormState: xe,
    useActionState: xe,
    useOptimistic: xe,
    useMemoCache: xe,
    useCacheRefresh: xe
  };
  Ga.useEffectEvent = xe;
  var Ss = {
    readContext: nl,
    use: Ku,
    useCallback: function(e, l) {
      return hl().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: nl,
    useEffect: ls,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, ku(
        4194308,
        4,
        us.bind(null, l, e),
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
      var t = hl();
      l = l === void 0 ? null : l;
      var n = e();
      if (yn) {
        K(!0);
        try {
          e();
        } finally {
          K(!1);
        }
      }
      return t.memoizedState = [n, l], n;
    },
    useReducer: function(e, l, t) {
      var n = hl();
      if (t !== void 0) {
        var a = t(l);
        if (yn) {
          K(!0);
          try {
            t(l);
          } finally {
            K(!1);
          }
        }
      } else a = l;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = ty.bind(
        null,
        ae,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var l = hl();
      return e = { current: e }, l.memoizedState = e;
    },
    useState: function(e) {
      e = ki(e);
      var l = e.queue, t = ms.bind(null, ae, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: Fi,
    useDeferredValue: function(e, l) {
      var t = hl();
      return Ii(t, e, l);
    },
    useTransition: function() {
      var e = ki(!1);
      return e = rs.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), hl().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var n = ae, a = hl();
      if (he) {
        if (t === void 0)
          throw Error(s(407));
        t = t();
      } else {
        if (t = l(), _e === null)
          throw Error(s(349));
        (re & 127) !== 0 || Lr(n, l, t);
      }
      a.memoizedState = t;
      var u = { value: t, getSnapshot: l };
      return a.queue = u, ls(Yr.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Wn(
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
      var e = hl(), l = _e.identifierPrefix;
      if (he) {
        var t = Pl, n = Il;
        t = (n & ~(1 << 32 - J(n) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = Zu++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = Wh++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: ef,
    useFormState: $r,
    useActionState: $r,
    useOptimistic: function(e) {
      var l = hl();
      l.memoizedState = l.baseState = e;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = t, l = lf.bind(
        null,
        ae,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: Vi,
    useCacheRefresh: function() {
      return hl().memoizedState = ly.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var l = hl(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((Se & 2) !== 0)
          throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, tf = {
    readContext: nl,
    use: Ku,
    useCallback: is,
    useContext: nl,
    useEffect: $i,
    useImperativeHandle: cs,
    useInsertionEffect: ns,
    useLayoutEffect: as,
    useMemo: fs,
    useReducer: Ju,
    useRef: es,
    useState: function() {
      return Ju(yt);
    },
    useDebugValue: Fi,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return os(
        t,
        Ce.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Ju(yt)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Na(e),
        l
      ];
    },
    useSyncExternalStore: xr,
    useId: hs,
    useHostTransitionStatus: ef,
    useFormState: Fr,
    useActionState: Fr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Zr(t, Ce, e, l);
    },
    useMemoCache: Vi,
    useCacheRefresh: ys
  };
  tf.useEffectEvent = ts;
  var bs = {
    readContext: nl,
    use: Ku,
    useCallback: is,
    useContext: nl,
    useEffect: $i,
    useImperativeHandle: cs,
    useInsertionEffect: ns,
    useLayoutEffect: as,
    useMemo: fs,
    useReducer: Ji,
    useRef: es,
    useState: function() {
      return Ji(yt);
    },
    useDebugValue: Fi,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return Ce === null ? Ii(t, e, l) : os(
        t,
        Ce.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Ji(yt)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Na(e),
        l
      ];
    },
    useSyncExternalStore: xr,
    useId: hs,
    useHostTransitionStatus: ef,
    useFormState: Pr,
    useActionState: Pr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Ce !== null ? Zr(t, Ce, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: Vi,
    useCacheRefresh: ys
  };
  bs.useEffectEvent = ts;
  function nf(e, l, t, n) {
    l = e.memoizedState, t = t(n, l), t = t == null ? l : B({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var af = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var n = Rl(), a = Bt(n);
      a.payload = l, t != null && (a.callback = t), l = Nt(e, a, n), l !== null && (Al(l, e, n), Ha(l, e, n));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var n = Rl(), a = Bt(n);
      a.tag = 1, a.payload = l, t != null && (a.callback = t), l = Nt(e, a, n), l !== null && (Al(l, e, n), Ha(l, e, n));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = Rl(), n = Bt(t);
      n.tag = 2, l != null && (n.callback = l), l = Nt(e, n, t), l !== null && (Al(l, e, t), Ha(l, e, t));
    }
  };
  function ps(e, l, t, n, a, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Ea(t, n) || !Ea(a, u) : !0;
  }
  function Ts(e, l, t, n) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, n), l.state !== e && af.enqueueReplaceState(l, l.state, null);
  }
  function mn(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var n in l)
        n !== "ref" && (t[n] = l[n]);
    }
    if (e = e.defaultProps) {
      t === l && (t = B({}, t));
      for (var a in e)
        t[a] === void 0 && (t[a] = e[a]);
    }
    return t;
  }
  function As(e) {
    _u(e);
  }
  function Es(e) {
    console.error(e);
  }
  function zs(e) {
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
  function Cs(e, l, t) {
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
  function uf(e, l, t) {
    return t = Bt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      Fu(e, l);
    }, t;
  }
  function Os(e) {
    return e = Bt(e), e.tag = 3, e;
  }
  function Ms(e, l, t, n) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Cs(l, t, n);
      };
    }
    var i = t.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      Cs(l, t, n), typeof a != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
      var f = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function ny(e, l, t, n, a) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = t.alternate, l !== null && Yn(
        l,
        t,
        a,
        !0
      ), t = _l.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Xl === null ? oc() : t.alternate === null && Le === 0 && (Le = 3), t.flags &= -257, t.flags |= 65536, t.lanes = a, n === xu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), Hf(e, n, a)), !1;
          case 22:
            return t.flags |= 65536, n === xu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), Hf(e, n, a)), !1;
        }
        throw Error(s(435, t.tag));
      }
      return Hf(e, n, a), oc(), !1;
    }
    if (he)
      return l = _l.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== zi && (e = Error(s(422), { cause: n }), Oa(xl(e, t)))) : (n !== zi && (l = Error(s(423), {
        cause: n
      }), Oa(
        xl(l, t)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = xl(n, t), a = uf(
        e.stateNode,
        n,
        a
      ), Ni(e, a), Le !== 4 && (Le = 2)), !1;
    var u = Error(s(520), { cause: n });
    if (u = xl(u, t), Va === null ? Va = [u] : Va.push(u), Le !== 4 && (Le = 2), l === null) return !0;
    n = xl(n, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = a & -a, t.lanes |= e, e = uf(t.stateNode, n, e), Ni(t, e), !1;
        case 1:
          if (l = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Yt === null || !Yt.has(u))))
            return t.flags |= 65536, a &= -a, t.lanes |= a, a = Os(a), Ms(
              a,
              e,
              t,
              n
            ), Ni(t, a), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var cf = Error(s(461)), ke = !1;
  function al(e, l, t, n) {
    l.child = e === null ? Hr(l, null, t, n) : hn(
      l,
      e.child,
      t,
      n
    );
  }
  function _s(e, l, t, n, a) {
    t = t.render;
    var u = l.ref;
    if ("ref" in n) {
      var i = {};
      for (var f in n)
        f !== "ref" && (i[f] = n[f]);
    } else i = n;
    return on(l), n = Yi(
      e,
      l,
      t,
      i,
      u,
      a
    ), f = Xi(), e !== null && !ke ? (Qi(e, l, a), mt(e, l, a)) : (he && f && Ai(l), l.flags |= 1, al(e, l, n, a), l.child);
  }
  function ws(e, l, t, n, a) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !bi(u) && u.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = u, Ds(
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
    if (u = e.child, !mf(e, a)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ea, t(i, n) && e.ref === l.ref)
        return mt(e, l, a);
    }
    return l.flags |= 1, e = ot(u, n), e.ref = l.ref, e.return = l, l.child = e;
  }
  function Ds(e, l, t, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ea(u, n) && e.ref === l.ref)
        if (ke = !1, l.pendingProps = n = u, mf(e, a))
          (e.flags & 131072) !== 0 && (ke = !0);
        else
          return l.lanes = e.lanes, mt(e, l, a);
    }
    return ff(
      e,
      l,
      t,
      n,
      a
    );
  }
  function Hs(e, l, t, n) {
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
        return Rs(
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
        ), u !== null ? Br(l, u) : Gi(), Nr(l);
      else
        return n = l.lanes = 536870912, Rs(
          e,
          l,
          u !== null ? u.baseLanes | t : t,
          t,
          n
        );
    } else
      u !== null ? (ju(l, u.cachePool), Br(l, u), Gt(), l.memoizedState = null) : (e !== null && ju(l, null), Gi(), Gt());
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
  function Rs(e, l, t, n, a) {
    var u = Hi();
    return u = u === null ? null : { parent: Ke._currentValue, pool: u }, l.memoizedState = {
      baseLanes: t,
      cachePool: u
    }, e !== null && ju(l, null), Gi(), Nr(l), e !== null && Yn(e, l, n, !0), l.childLanes = a, null;
  }
  function Iu(e, l) {
    return l = ec(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function Us(e, l, t) {
    return hn(l, e.child, null, t), e = Iu(l, l.pendingProps), e.flags |= 2, wl(l), l.memoizedState = null, e;
  }
  function ay(e, l, t) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (he) {
        if (n.mode === "hidden")
          return e = Iu(l, n), l.lanes = 536870912, xa(null, e);
        if (Li(l), (e = Re) ? (e = Vd(
          e,
          Yl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: wt !== null ? { id: Il, overflow: Pl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = gr(e), t.return = l, l.child = t, tl = l, Re = null)) : e = null, e === null) throw Ht(l);
        return l.lanes = 536870912, null;
      }
      return Iu(l, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Li(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = Us(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(s(558));
      else if (ke || Yn(e, l, t, !1), a = (t & e.childLanes) !== 0, ke || a) {
        if (n = _e, n !== null && (i = Eo(n, t), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, an(e, i), Al(n, e, i), cf;
        oc(), l = Us(
          e,
          l,
          t
        );
      } else
        e = u.treeContext, Re = Ql(i.nextSibling), tl = l, he = !0, Dt = null, Yl = !1, e !== null && br(l, e), l = Iu(l, n), l.flags |= 4096;
      return l;
    }
    return e = ot(e.child, {
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
        throw Error(s(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function ff(e, l, t, n, a) {
    return on(l), t = Yi(
      e,
      l,
      t,
      n,
      void 0,
      a
    ), n = Xi(), e !== null && !ke ? (Qi(e, l, a), mt(e, l, a)) : (he && n && Ai(l), l.flags |= 1, al(e, l, t, a), l.child);
  }
  function Bs(e, l, t, n, a, u) {
    return on(l), l.updateQueue = null, t = Gr(
      l,
      n,
      t,
      a
    ), jr(e), n = Xi(), e !== null && !ke ? (Qi(e, l, u), mt(e, l, u)) : (he && n && Ai(l), l.flags |= 1, al(e, l, t, u), l.child);
  }
  function Ns(e, l, t, n, a) {
    if (on(l), l.stateNode === null) {
      var u = Gn, i = t.contextType;
      typeof i == "object" && i !== null && (u = nl(i)), u = new t(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = af, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, Ui(l), i = t.contextType, u.context = typeof i == "object" && i !== null ? nl(i) : Gn, u.state = l.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (nf(
        l,
        t,
        i,
        n
      ), u.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && af.enqueueReplaceState(u, u.state, null), Ua(l, n, u, a), Ra(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = l.stateNode;
      var f = l.memoizedProps, h = mn(t, f);
      u.props = h;
      var p = u.context, M = t.contextType;
      i = Gn, typeof M == "object" && M !== null && (i = nl(M));
      var R = t.getDerivedStateFromProps;
      M = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, M || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || p !== i) && Ts(
        l,
        u,
        n,
        i
      ), Ut = !1;
      var A = l.memoizedState;
      u.state = A, Ua(l, n, u, a), Ra(), p = l.memoizedState, f || A !== p || Ut ? (typeof R == "function" && (nf(
        l,
        t,
        R,
        n
      ), p = l.memoizedState), (h = Ut || ps(
        l,
        t,
        h,
        n,
        A,
        p,
        i
      )) ? (M || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = p), u.props = n, u.state = p, u.context = i, n = h) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, Bi(e, l), i = l.memoizedProps, M = mn(t, i), u.props = M, R = l.pendingProps, A = u.context, p = t.contextType, h = Gn, typeof p == "object" && p !== null && (h = nl(p)), f = t.getDerivedStateFromProps, (p = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== R || A !== h) && Ts(
        l,
        u,
        n,
        h
      ), Ut = !1, A = l.memoizedState, u.state = A, Ua(l, n, u, a), Ra();
      var z = l.memoizedState;
      i !== R || A !== z || Ut || e !== null && e.dependencies !== null && Bu(e.dependencies) ? (typeof f == "function" && (nf(
        l,
        t,
        f,
        n
      ), z = l.memoizedState), (M = Ut || ps(
        l,
        t,
        M,
        n,
        A,
        z,
        h
      ) || e !== null && e.dependencies !== null && Bu(e.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, z, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        z,
        h
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = z), u.props = n, u.state = z, u.context = h, n = M) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (l.flags |= 1024), n = !1);
    }
    return u = n, Pu(e, l), n = (l.flags & 128) !== 0, u || n ? (u = l.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, e !== null && n ? (l.child = hn(
      l,
      e.child,
      null,
      a
    ), l.child = hn(
      l,
      null,
      t,
      a
    )) : al(e, l, t, a), l.memoizedState = u.state, e = l.child) : e = mt(
      e,
      l,
      a
    ), e;
  }
  function js(e, l, t, n) {
    return cn(), l.flags |= 256, al(e, l, t, n), l.child;
  }
  var of = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rf(e) {
    return { baseLanes: e, cachePool: Cr() };
  }
  function sf(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= Hl), e;
  }
  function Gs(e, l, t) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (he) {
        if (a ? jt(l) : Gt(), (e = Re) ? (e = Vd(
          e,
          Yl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: wt !== null ? { id: Il, overflow: Pl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = gr(e), t.return = l, l.child = t, tl = l, Re = null)) : e = null, e === null) throw Ht(l);
        return Jf(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var f = n.children;
      return n = n.fallback, a ? (Gt(), a = l.mode, f = ec(
        { mode: "hidden", children: f },
        a
      ), n = un(
        n,
        a,
        t,
        null
      ), f.return = l, n.return = l, f.sibling = n, l.child = f, n = l.child, n.memoizedState = rf(t), n.childLanes = sf(
        e,
        i,
        t
      ), l.memoizedState = of, xa(null, n)) : (jt(l), df(l, f));
    }
    var h = e.memoizedState;
    if (h !== null && (f = h.dehydrated, f !== null)) {
      if (u)
        l.flags & 256 ? (jt(l), l.flags &= -257, l = hf(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (Gt(), l.child = e.child, l.flags |= 128, l = null) : (Gt(), f = n.fallback, a = l.mode, n = ec(
          { mode: "visible", children: n.children },
          a
        ), f = un(
          f,
          a,
          t,
          null
        ), f.flags |= 2, n.return = l, f.return = l, n.sibling = f, l.child = n, hn(
          l,
          e.child,
          null,
          t
        ), n = l.child, n.memoizedState = rf(t), n.childLanes = sf(
          e,
          i,
          t
        ), l.memoizedState = of, l = xa(null, n));
      else if (jt(l), Jf(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var p = i.dgst;
        i = p, n = Error(s(419)), n.stack = "", n.digest = i, Oa({ value: n, source: null, stack: null }), l = hf(
          e,
          l,
          t
        );
      } else if (ke || Yn(e, l, t, !1), i = (t & e.childLanes) !== 0, ke || i) {
        if (i = _e, i !== null && (n = Eo(i, t), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, an(e, n), Al(i, e, n), cf;
        Kf(f) || oc(), l = hf(
          e,
          l,
          t
        );
      } else
        Kf(f) ? (l.flags |= 192, l.child = e.child, l = null) : (e = h.treeContext, Re = Ql(
          f.nextSibling
        ), tl = l, he = !0, Dt = null, Yl = !1, e !== null && br(l, e), l = df(
          l,
          n.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (Gt(), f = n.fallback, a = l.mode, h = e.child, p = h.sibling, n = ot(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, p !== null ? f = ot(
      p,
      f
    ) : (f = un(
      f,
      a,
      t,
      null
    ), f.flags |= 2), f.return = l, n.return = l, n.sibling = f, l.child = n, xa(null, n), n = l.child, f = e.child.memoizedState, f === null ? f = rf(t) : (a = f.cachePool, a !== null ? (h = Ke._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Cr(), f = {
      baseLanes: f.baseLanes | t,
      cachePool: a
    }), n.memoizedState = f, n.childLanes = sf(
      e,
      i,
      t
    ), l.memoizedState = of, xa(e.child, n)) : (jt(l), t = e.child, e = t.sibling, t = ot(t, {
      mode: "visible",
      children: n.children
    }), t.return = l, t.sibling = null, e !== null && (i = l.deletions, i === null ? (l.deletions = [e], l.flags |= 16) : i.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function df(e, l) {
    return l = ec(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function ec(e, l) {
    return e = Ml(22, e, null, l), e.lanes = 0, e;
  }
  function hf(e, l, t) {
    return hn(l, e.child, null, t), e = df(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function xs(e, l, t) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l), Mi(e.return, l, t);
  }
  function yf(e, l, t, n, a, u) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: t,
      tailMode: a,
      treeForkCount: u
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = t, i.tailMode = a, i.treeForkCount = u);
  }
  function Ls(e, l, t) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var i = Xe.current, f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, L(Xe, i), al(e, l, n, t), n = he ? Ca : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && xs(e, t, l);
        else if (e.tag === 19)
          xs(e, t, l);
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
        t = a, t === null ? (a = l.child, l.child = null) : (a = t.sibling, t.sibling = null), yf(
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
        yf(
          l,
          !0,
          t,
          null,
          u,
          n
        );
        break;
      case "together":
        yf(
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
  function mt(e, l, t) {
    if (e !== null && (l.dependencies = e.dependencies), qt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (Yn(
          e,
          l,
          t,
          !1
        ), (t & l.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && l.child !== e.child)
      throw Error(s(153));
    if (l.child !== null) {
      for (e = l.child, t = ot(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = ot(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function mf(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bu(e)));
  }
  function uy(e, l, t) {
    switch (l.tag) {
      case 3:
        pe(l, l.stateNode.containerInfo), Rt(l, Ke, e.memoizedState.cache), cn();
        break;
      case 27:
      case 5:
        de(l);
        break;
      case 4:
        pe(l, l.stateNode.containerInfo);
        break;
      case 10:
        Rt(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Li(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (jt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? Gs(e, l, t) : (jt(l), e = mt(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        jt(l);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (t & l.childLanes) !== 0, n || (Yn(
          e,
          l,
          t,
          !1
        ), n = (t & l.childLanes) !== 0), a) {
          if (n)
            return Ls(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), L(Xe, Xe.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, Hs(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        Rt(l, Ke, e.memoizedState.cache);
    }
    return mt(e, l, t);
  }
  function qs(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        ke = !0;
      else {
        if (!mf(e, t) && (l.flags & 128) === 0)
          return ke = !1, uy(
            e,
            l,
            t
          );
        ke = (e.flags & 131072) !== 0;
      }
    else
      ke = !1, he && (l.flags & 1048576) !== 0 && Sr(l, Ca, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var n = l.pendingProps;
          if (e = sn(l.elementType), l.type = e, typeof e == "function")
            bi(e) ? (n = mn(e, n), l.tag = 1, l = Ns(
              null,
              l,
              e,
              n,
              t
            )) : (l.tag = 0, l = ff(
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
                l.tag = 11, l = _s(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              } else if (a === ce) {
                l.tag = 14, l = ws(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              }
            }
            throw l = El(e) || e, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return ff(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return n = l.type, a = mn(
          n,
          l.pendingProps
        ), Ns(
          e,
          l,
          n,
          a,
          t
        );
      case 3:
        e: {
          if (pe(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          n = l.pendingProps;
          var u = l.memoizedState;
          a = u.element, Bi(e, l), Ua(l, n, null, t);
          var i = l.memoizedState;
          if (n = i.cache, Rt(l, Ke, n), n !== u.cache && _i(
            l,
            [Ke],
            t,
            !0
          ), Ra(), n = i.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = js(
                e,
                l,
                n,
                t
              );
              break e;
            } else if (n !== a) {
              a = xl(
                Error(s(424)),
                l
              ), Oa(a), l = js(
                e,
                l,
                n,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Re = Ql(e.firstChild), tl = l, he = !0, Dt = null, Yl = !0, t = Hr(
                l,
                null,
                n,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (cn(), n === a) {
              l = mt(
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
        return Pu(e, l), e === null ? (t = Fd(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : he || (t = l.type, e = l.pendingProps, n = gc(
          le.current
        ).createElement(t), n[ll] = l, n[gl] = e, ul(n, t, e), Pe(n), l.stateNode = n) : l.memoizedState = Fd(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return de(l), e === null && he && (n = l.stateNode = kd(
          l.type,
          l.pendingProps,
          le.current
        ), tl = l, Yl = !0, a = Re, Vt(l.type) ? (kf = a, Re = Ql(n.firstChild)) : Re = a), al(
          e,
          l,
          l.pendingProps.children,
          t
        ), Pu(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && he && ((a = n = Re) && (n = Ny(
          n,
          l.type,
          l.pendingProps,
          Yl
        ), n !== null ? (l.stateNode = n, tl = l, Re = Ql(n.firstChild), Yl = !1, a = !0) : a = !1), a || Ht(l)), de(l), a = l.type, u = l.pendingProps, i = e !== null ? e.memoizedProps : null, n = u.children, Qf(a, u) ? n = null : i !== null && Qf(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = Yi(
          e,
          l,
          $h,
          null,
          null,
          t
        ), Pa._currentValue = a), Pu(e, l), al(e, l, n, t), l.child;
      case 6:
        return e === null && he && ((e = t = Re) && (t = jy(
          t,
          l.pendingProps,
          Yl
        ), t !== null ? (l.stateNode = t, tl = l, Re = null, e = !0) : e = !1), e || Ht(l)), null;
      case 13:
        return Gs(e, l, t);
      case 4:
        return pe(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, e === null ? l.child = hn(
          l,
          null,
          n,
          t
        ) : al(e, l, n, t), l.child;
      case 11:
        return _s(
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
        return n = l.pendingProps, Rt(l, l.type, n.value), al(e, l, n.children, t), l.child;
      case 9:
        return a = l.type._context, n = l.pendingProps.children, on(l), a = nl(a), n = n(a), l.flags |= 1, al(e, l, n, t), l.child;
      case 14:
        return ws(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return Ds(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return Ls(e, l, t);
      case 31:
        return ay(e, l, t);
      case 22:
        return Hs(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return on(l), n = nl(Ke), e === null ? (a = Hi(), a === null && (a = _e, u = wi(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= t), a = u), l.memoizedState = { parent: n, cache: a }, Ui(l), Rt(l, Ke, a)) : ((e.lanes & t) !== 0 && (Bi(e, l), Ua(l, null, null, t), Ra()), a = e.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Rt(l, Ke, n)) : (n = u.cache, Rt(l, Ke, n), n !== a.cache && _i(
          l,
          [Ke],
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
    throw Error(s(156, l.tag));
  }
  function gt(e) {
    e.flags |= 4;
  }
  function gf(e, l, t, n, a) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hd()) e.flags |= 8192;
        else
          throw dn = xu, Ri;
    } else e.flags &= -16777217;
  }
  function Ys(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !t0(l))
      if (hd()) e.flags |= 8192;
      else
        throw dn = xu, Ri;
  }
  function lc(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? po() : 536870912, e.lanes |= l, Pn |= l);
  }
  function La(e, l) {
    if (!he)
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
  function Ue(e) {
    var l = e.alternate !== null && e.alternate.child === e.child, t = 0, n = 0;
    if (l)
      for (var a = e.child; a !== null; )
        t |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        t |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = t, l;
  }
  function cy(e, l, t) {
    var n = l.pendingProps;
    switch (Ei(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(l), null;
      case 1:
        return Ue(l), null;
      case 3:
        return t = l.stateNode, n = null, e !== null && (n = e.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), dt(Ke), ve(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (qn(l) ? gt(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ci())), Ue(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return e === null ? (gt(l), u !== null ? (Ue(l), Ys(l, u)) : (Ue(l), gf(
          l,
          a,
          null,
          n,
          t
        ))) : u ? u !== e.memoizedState ? (gt(l), Ue(l), Ys(l, u)) : (Ue(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== n && gt(l), Ue(l), gf(
          l,
          a,
          e,
          n,
          t
        )), null;
      case 27:
        if (Tn(l), t = le.current, a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && gt(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Ue(l), null;
          }
          e = Y.current, qn(l) ? pr(l) : (e = kd(a, n, t), l.stateNode = e, gt(l));
        }
        return Ue(l), null;
      case 5:
        if (Tn(l), a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && gt(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Ue(l), null;
          }
          if (u = Y.current, qn(l))
            pr(l);
          else {
            var i = gc(
              le.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof n.is == "string" ? i.createElement("select", {
                      is: n.is
                    }) : i.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? i.createElement(a, { is: n.is }) : i.createElement(a);
                }
            }
            u[ll] = l, u[gl] = n;
            e: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break e;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
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
            n && gt(l);
          }
        }
        return Ue(l), gf(
          l,
          l.type,
          e === null ? null : e.memoizedProps,
          l.pendingProps,
          t
        ), null;
      case 6:
        if (e && l.stateNode != null)
          e.memoizedProps !== n && gt(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(s(166));
          if (e = le.current, qn(l)) {
            if (e = l.stateNode, t = l.memoizedProps, n = null, a = tl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[ll] = l, e = !!(e.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || Gd(e.nodeValue, t)), e || Ht(l, !0);
          } else
            e = gc(e).createTextNode(
              n
            ), e[ll] = l, l.stateNode = e;
        }
        return Ue(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (n = qn(l), t !== null) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[ll] = l;
            } else
              cn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Ue(l), e = !1;
          } else
            t = Ci(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ue(l), null;
      case 13:
        if (n = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = qn(l), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[ll] = l;
            } else
              cn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Ue(l), a = !1;
          } else
            a = Ci(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
        }
        return wl(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = n !== null, e = e !== null && e.memoizedState !== null, t && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), lc(l, l.updateQueue), Ue(l), null);
      case 4:
        return ve(), e === null && xf(l.stateNode.containerInfo), Ue(l), null;
      case 10:
        return dt(l.type), Ue(l), null;
      case 19:
        if (U(Xe), n = l.memoizedState, n === null) return Ue(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) La(n, !1);
          else {
            if (Le !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (u = Xu(e), u !== null) {
                  for (l.flags |= 128, La(n, !1), e = u.updateQueue, l.updateQueue = e, lc(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    mr(t, e), t = t.sibling;
                  return L(
                    Xe,
                    Xe.current & 1 | 2
                  ), he && rt(l, n.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            n.tail !== null && fl() > cc && (l.flags |= 128, a = !0, La(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Xu(u), e !== null) {
              if (l.flags |= 128, a = !0, e = e.updateQueue, l.updateQueue = e, lc(l, e), La(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !he)
                return Ue(l), null;
            } else
              2 * fl() - n.renderingStartTime > cc && t !== 536870912 && (l.flags |= 128, a = !0, La(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (e = n.last, e !== null ? e.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = fl(), e.sibling = null, t = Xe.current, L(
          Xe,
          a ? t & 1 | 2 : t & 1
        ), he && rt(l, n.treeForkCount), e) : (Ue(l), null);
      case 22:
      case 23:
        return wl(l), xi(), n = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (Ue(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Ue(l), t = l.updateQueue, t !== null && lc(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== t && (l.flags |= 2048), e !== null && U(rn), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), dt(Ke), Ue(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function iy(e, l) {
    switch (Ei(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return dt(Ke), ve(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Tn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (wl(l), l.alternate === null)
            throw Error(s(340));
          cn();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (wl(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          cn();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return U(Xe), null;
      case 4:
        return ve(), null;
      case 10:
        return dt(l.type), null;
      case 22:
      case 23:
        return wl(l), xi(), e !== null && U(rn), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return dt(Ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xs(e, l) {
    switch (Ei(l), l.tag) {
      case 3:
        dt(Ke), ve();
        break;
      case 26:
      case 27:
      case 5:
        Tn(l);
        break;
      case 4:
        ve();
        break;
      case 31:
        l.memoizedState !== null && wl(l);
        break;
      case 13:
        wl(l);
        break;
      case 19:
        U(Xe);
        break;
      case 10:
        dt(l.type);
        break;
      case 22:
      case 23:
        wl(l), xi(), e !== null && U(rn);
        break;
      case 24:
        dt(Ke);
    }
  }
  function qa(e, l) {
    try {
      var t = l.updateQueue, n = t !== null ? t.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        t = a;
        do {
          if ((t.tag & e) === e) {
            n = void 0;
            var u = t.create, i = t.inst;
            n = u(), i.destroy = n;
          }
          t = t.next;
        } while (t !== a);
      }
    } catch (f) {
      Ee(l, l.return, f);
    }
  }
  function xt(e, l, t) {
    try {
      var n = l.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var i = n.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, a = l;
              var h = t, p = f;
              try {
                p();
              } catch (M) {
                Ee(
                  a,
                  h,
                  M
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (M) {
      Ee(l, l.return, M);
    }
  }
  function Qs(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        Ur(l, t);
      } catch (n) {
        Ee(e, e.return, n);
      }
    }
  }
  function Zs(e, l, t) {
    t.props = mn(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (n) {
      Ee(e, l, n);
    }
  }
  function Ya(e, l) {
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
      Ee(e, l, a);
    }
  }
  function et(e, l) {
    var t = e.ref, n = e.refCleanup;
    if (t !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ee(e, l, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (a) {
          Ee(e, l, a);
        }
      else t.current = null;
  }
  function Vs(e) {
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
      Ee(e, e.return, a);
    }
  }
  function vf(e, l, t) {
    try {
      var n = e.stateNode;
      wy(n, e.type, t, l), n[gl] = l;
    } catch (a) {
      Ee(e, e.return, a);
    }
  }
  function Ks(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vt(e.type) || e.tag === 4;
  }
  function Sf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ks(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Vt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bf(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = it));
    else if (n !== 4 && (n === 27 && Vt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (bf(e, l, t), e = e.sibling; e !== null; )
        bf(e, l, t), e = e.sibling;
  }
  function tc(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (n !== 4 && (n === 27 && Vt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (tc(e, l, t), e = e.sibling; e !== null; )
        tc(e, l, t), e = e.sibling;
  }
  function Js(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var n = e.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      ul(l, n, t), l[ll] = e, l[gl] = t;
    } catch (u) {
      Ee(e, e.return, u);
    }
  }
  var vt = !1, We = !1, pf = !1, ks = typeof WeakSet == "function" ? WeakSet : Set, el = null;
  function fy(e, l) {
    if (e = e.containerInfo, Yf = Ec, e = cr(e), di(e)) {
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
            var i = 0, f = -1, h = -1, p = 0, M = 0, R = e, A = null;
            l: for (; ; ) {
              for (var z; R !== t || a !== 0 && R.nodeType !== 3 || (f = i + a), R !== u || n !== 0 && R.nodeType !== 3 || (h = i + n), R.nodeType === 3 && (i += R.nodeValue.length), (z = R.firstChild) !== null; )
                A = R, R = z;
              for (; ; ) {
                if (R === e) break l;
                if (A === t && ++p === a && (f = i), A === u && ++M === n && (h = i), (z = R.nextSibling) !== null) break;
                R = A, A = R.parentNode;
              }
              R = z;
            }
            t = f === -1 || h === -1 ? null : { start: f, end: h };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Xf = { focusedElem: e, selectionRange: t }, Ec = !1, el = l; el !== null; )
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
                  var q = mn(
                    t.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    q,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (I) {
                  Ee(
                    t,
                    t.return,
                    I
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9)
                  Vf(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vf(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = l.sibling, e !== null) {
            e.return = l.return, el = e;
            break;
          }
          el = l.return;
        }
  }
  function Ws(e, l, t) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        bt(e, t), n & 4 && qa(5, t);
        break;
      case 1:
        if (bt(e, t), n & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (i) {
              Ee(t, t.return, i);
            }
          else {
            var a = mn(
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
            } catch (i) {
              Ee(
                t,
                t.return,
                i
              );
            }
          }
        n & 64 && Qs(t), n & 512 && Ya(t, t.return);
        break;
      case 3:
        if (bt(e, t), n & 64 && (e = t.updateQueue, e !== null)) {
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
            Ur(e, l);
          } catch (i) {
            Ee(t, t.return, i);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Js(t);
      case 26:
      case 5:
        bt(e, t), l === null && n & 4 && Vs(t), n & 512 && Ya(t, t.return);
        break;
      case 12:
        bt(e, t);
        break;
      case 31:
        bt(e, t), n & 4 && Is(e, t);
        break;
      case 13:
        bt(e, t), n & 4 && Ps(e, t), n & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = vy.bind(
          null,
          t
        ), Gy(e, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || vt, !n) {
          l = l !== null && l.memoizedState !== null || We, a = vt;
          var u = We;
          vt = n, (We = l) && !u ? pt(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : bt(e, t), vt = a, We = u;
        }
        break;
      case 30:
        break;
      default:
        bt(e, t);
    }
  }
  function $s(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, $s(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && Wc(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Be = null, Sl = !1;
  function St(e, l, t) {
    for (t = t.child; t !== null; )
      Fs(e, l, t), t = t.sibling;
  }
  function Fs(e, l, t) {
    if (N && typeof N.onCommitFiberUnmount == "function")
      try {
        N.onCommitFiberUnmount(Q, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        We || et(t, l), St(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        We || et(t, l);
        var n = Be, a = Sl;
        Vt(t.type) && (Be = t.stateNode, Sl = !1), St(
          e,
          l,
          t
        ), $a(t.stateNode), Be = n, Sl = a;
        break;
      case 5:
        We || et(t, l);
      case 6:
        if (n = Be, a = Sl, Be = null, St(
          e,
          l,
          t
        ), Be = n, Sl = a, Be !== null)
          if (Sl)
            try {
              (Be.nodeType === 9 ? Be.body : Be.nodeName === "HTML" ? Be.ownerDocument.body : Be).removeChild(t.stateNode);
            } catch (u) {
              Ee(
                t,
                l,
                u
              );
            }
          else
            try {
              Be.removeChild(t.stateNode);
            } catch (u) {
              Ee(
                t,
                l,
                u
              );
            }
        break;
      case 18:
        Be !== null && (Sl ? (e = Be, Qd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), ia(e)) : Qd(Be, t.stateNode));
        break;
      case 4:
        n = Be, a = Sl, Be = t.stateNode.containerInfo, Sl = !0, St(
          e,
          l,
          t
        ), Be = n, Sl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xt(2, t, l), We || xt(4, t, l), St(
          e,
          l,
          t
        );
        break;
      case 1:
        We || (et(t, l), n = t.stateNode, typeof n.componentWillUnmount == "function" && Zs(
          t,
          l,
          n
        )), St(
          e,
          l,
          t
        );
        break;
      case 21:
        St(
          e,
          l,
          t
        );
        break;
      case 22:
        We = (n = We) || t.memoizedState !== null, St(
          e,
          l,
          t
        ), We = n;
        break;
      default:
        St(
          e,
          l,
          t
        );
    }
  }
  function Is(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ia(e);
      } catch (t) {
        Ee(l, l.return, t);
      }
    }
  }
  function Ps(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ia(e);
      } catch (t) {
        Ee(l, l.return, t);
      }
  }
  function oy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var l = e.stateNode;
        return l === null && (l = e.stateNode = new ks()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new ks()), l;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nc(e, l) {
    var t = oy(e);
    l.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var a = Sy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function bl(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n], u = e, i = l, f = i;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Vt(f.type)) {
                Be = f.stateNode, Sl = !1;
                break e;
              }
              break;
            case 5:
              Be = f.stateNode, Sl = !1;
              break e;
            case 3:
            case 4:
              Be = f.stateNode.containerInfo, Sl = !0;
              break e;
          }
          f = f.return;
        }
        if (Be === null) throw Error(s(160));
        Fs(u, i, a), Be = null, Sl = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ed(l, e), l = l.sibling;
  }
  var Kl = null;
  function ed(e, l) {
    var t = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bl(l, e), pl(e), n & 4 && (xt(3, e, e.return), qa(3, e), xt(5, e, e.return));
        break;
      case 1:
        bl(l, e), pl(e), n & 512 && (We || t === null || et(t, t.return)), n & 64 && vt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
        break;
      case 26:
        var a = Kl;
        if (bl(l, e), pl(e), n & 512 && (We || t === null || et(t, t.return)), n & 4) {
          var u = t !== null ? t.memoizedState : null;
          if (n = e.memoizedState, t === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, t = e.memoizedProps, a = a.ownerDocument || a;
                  l: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[ya] || u[ll] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ul(u, n, t), u[ll] = e, Pe(u), n = u;
                      break e;
                    case "link":
                      var i = e0(
                        "link",
                        "href",
                        a
                      ).get(n + (t.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      u = a.createElement(n), ul(u, n, t), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = e0(
                        "meta",
                        "content",
                        a
                      ).get(n + (t.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      u = a.createElement(n), ul(u, n, t), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, n));
                  }
                  u[ll] = e, Pe(u), n = u;
                }
                e.stateNode = n;
              } else
                l0(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pd(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : u.count--, n === null ? l0(
              a,
              e.type,
              e.stateNode
            ) : Pd(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && vf(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        bl(l, e), pl(e), n & 512 && (We || t === null || et(t, t.return)), t !== null && n & 4 && vf(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (bl(l, e), pl(e), n & 512 && (We || t === null || et(t, t.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Dn(a, "");
          } catch (q) {
            Ee(e, e.return, q);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, vf(
          e,
          a,
          t !== null ? t.memoizedProps : a
        )), n & 1024 && (pf = !0);
        break;
      case 6:
        if (bl(l, e), pl(e), n & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          n = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = n;
          } catch (q) {
            Ee(e, e.return, q);
          }
        }
        break;
      case 3:
        if (bc = null, a = Kl, Kl = vc(l.containerInfo), bl(l, e), Kl = a, pl(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            ia(l.containerInfo);
          } catch (q) {
            Ee(e, e.return, q);
          }
        pf && (pf = !1, ld(e));
        break;
      case 4:
        n = Kl, Kl = vc(
          e.stateNode.containerInfo
        ), bl(l, e), pl(e), Kl = n;
        break;
      case 12:
        bl(l, e), pl(e);
        break;
      case 31:
        bl(l, e), pl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
        break;
      case 13:
        bl(l, e), pl(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (uc = fl()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = t !== null && t.memoizedState !== null, p = vt, M = We;
        if (vt = p || a, We = M || h, bl(l, e), We = M, vt = p, pl(e), n & 8192)
          e: for (l = e.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (t === null || h || vt || We || gn(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                h = t = l;
                try {
                  if (u = h.stateNode, a)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = h.stateNode;
                    var R = h.memoizedProps.style, A = R != null && R.hasOwnProperty("display") ? R.display : null;
                    f.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (q) {
                  Ee(h, h.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                h = l;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (q) {
                  Ee(h, h.return, q);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                h = l;
                try {
                  var z = h.stateNode;
                  a ? Zd(z, !0) : Zd(h.stateNode, !1);
                } catch (q) {
                  Ee(h, h.return, q);
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
        n & 4 && (n = e.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, nc(e, t))));
        break;
      case 19:
        bl(l, e), pl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bl(l, e), pl(e);
    }
  }
  function pl(e) {
    var l = e.flags;
    if (l & 2) {
      try {
        for (var t, n = e.return; n !== null; ) {
          if (Ks(n)) {
            t = n;
            break;
          }
          n = n.return;
        }
        if (t == null) throw Error(s(160));
        switch (t.tag) {
          case 27:
            var a = t.stateNode, u = Sf(e);
            tc(e, u, a);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Dn(i, ""), t.flags &= -33);
            var f = Sf(e);
            tc(e, f, i);
            break;
          case 3:
          case 4:
            var h = t.stateNode.containerInfo, p = Sf(e);
            bf(
              e,
              p,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (M) {
        Ee(e, e.return, M);
      }
      e.flags &= -3;
    }
    l & 4096 && (e.flags &= -4097);
  }
  function ld(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        ld(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function bt(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Ws(e, l.alternate, l), l = l.sibling;
  }
  function gn(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xt(4, l, l.return), gn(l);
          break;
        case 1:
          et(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && Zs(
            l,
            l.return,
            t
          ), gn(l);
          break;
        case 27:
          $a(l.stateNode);
        case 26:
        case 5:
          et(l, l.return), gn(l);
          break;
        case 22:
          l.memoizedState === null && gn(l);
          break;
        case 30:
          gn(l);
          break;
        default:
          gn(l);
      }
      e = e.sibling;
    }
  }
  function pt(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var n = l.alternate, a = e, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          pt(
            a,
            u,
            t
          ), qa(4, u);
          break;
        case 1:
          if (pt(
            a,
            u,
            t
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (p) {
              Ee(n, n.return, p);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var f = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Rr(h[a], f);
            } catch (p) {
              Ee(n, n.return, p);
            }
          }
          t && i & 64 && Qs(u), Ya(u, u.return);
          break;
        case 27:
          Js(u);
        case 26:
        case 5:
          pt(
            a,
            u,
            t
          ), t && n === null && i & 4 && Vs(u), Ya(u, u.return);
          break;
        case 12:
          pt(
            a,
            u,
            t
          );
          break;
        case 31:
          pt(
            a,
            u,
            t
          ), t && i & 4 && Is(a, u);
          break;
        case 13:
          pt(
            a,
            u,
            t
          ), t && i & 4 && Ps(a, u);
          break;
        case 22:
          u.memoizedState === null && pt(
            a,
            u,
            t
          ), Ya(u, u.return);
          break;
        case 30:
          break;
        default:
          pt(
            a,
            u,
            t
          );
      }
      l = l.sibling;
    }
  }
  function Tf(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Ma(t));
  }
  function Af(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ma(e));
  }
  function Jl(e, l, t, n) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        td(
          e,
          l,
          t,
          n
        ), l = l.sibling;
  }
  function td(e, l, t, n) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Jl(
          e,
          l,
          t,
          n
        ), a & 2048 && qa(9, l);
        break;
      case 1:
        Jl(
          e,
          l,
          t,
          n
        );
        break;
      case 3:
        Jl(
          e,
          l,
          t,
          n
        ), a & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ma(e)));
        break;
      case 12:
        if (a & 2048) {
          Jl(
            e,
            l,
            t,
            n
          ), e = l.stateNode;
          try {
            var u = l.memoizedProps, i = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              i,
              l.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (h) {
            Ee(l, l.return, h);
          }
        } else
          Jl(
            e,
            l,
            t,
            n
          );
        break;
      case 31:
        Jl(
          e,
          l,
          t,
          n
        );
        break;
      case 13:
        Jl(
          e,
          l,
          t,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Jl(
          e,
          l,
          t,
          n
        ) : Xa(e, l) : u._visibility & 2 ? Jl(
          e,
          l,
          t,
          n
        ) : (u._visibility |= 2, $n(
          e,
          l,
          t,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Tf(i, l);
        break;
      case 24:
        Jl(
          e,
          l,
          t,
          n
        ), a & 2048 && Af(l.alternate, l);
        break;
      default:
        Jl(
          e,
          l,
          t,
          n
        );
    }
  }
  function $n(e, l, t, n, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = e, i = l, f = t, h = n, p = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          $n(
            u,
            i,
            f,
            h,
            a
          ), qa(8, i);
          break;
        case 23:
          break;
        case 22:
          var M = i.stateNode;
          i.memoizedState !== null ? M._visibility & 2 ? $n(
            u,
            i,
            f,
            h,
            a
          ) : Xa(
            u,
            i
          ) : (M._visibility |= 2, $n(
            u,
            i,
            f,
            h,
            a
          )), a && p & 2048 && Tf(
            i.alternate,
            i
          );
          break;
        case 24:
          $n(
            u,
            i,
            f,
            h,
            a
          ), a && p & 2048 && Af(i.alternate, i);
          break;
        default:
          $n(
            u,
            i,
            f,
            h,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Xa(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, n = l, a = n.flags;
        switch (n.tag) {
          case 22:
            Xa(t, n), a & 2048 && Tf(
              n.alternate,
              n
            );
            break;
          case 24:
            Xa(t, n), a & 2048 && Af(n.alternate, n);
            break;
          default:
            Xa(t, n);
        }
        l = l.sibling;
      }
  }
  var Qa = 8192;
  function Fn(e, l, t) {
    if (e.subtreeFlags & Qa)
      for (e = e.child; e !== null; )
        nd(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function nd(e, l, t) {
    switch (e.tag) {
      case 26:
        Fn(
          e,
          l,
          t
        ), e.flags & Qa && e.memoizedState !== null && Wy(
          t,
          Kl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Fn(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var n = Kl;
        Kl = vc(e.stateNode.containerInfo), Fn(
          e,
          l,
          t
        ), Kl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Qa, Qa = 16777216, Fn(
          e,
          l,
          t
        ), Qa = n) : Fn(
          e,
          l,
          t
        ));
        break;
      default:
        Fn(
          e,
          l,
          t
        );
    }
  }
  function ad(e) {
    var l = e.alternate;
    if (l !== null && (e = l.child, e !== null)) {
      l.child = null;
      do
        l = e.sibling, e.sibling = null, e = l;
      while (e !== null);
    }
  }
  function Za(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          el = n, cd(
            n,
            e
          );
        }
      ad(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ud(e), e = e.sibling;
  }
  function ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Za(e), e.flags & 2048 && xt(9, e, e.return);
        break;
      case 3:
        Za(e);
        break;
      case 12:
        Za(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, ac(e)) : Za(e);
        break;
      default:
        Za(e);
    }
  }
  function ac(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          el = n, cd(
            n,
            e
          );
        }
      ad(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          xt(8, l, l.return), ac(l);
          break;
        case 22:
          t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, ac(l));
          break;
        default:
          ac(l);
      }
      e = e.sibling;
    }
  }
  function cd(e, l) {
    for (; el !== null; ) {
      var t = el;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var n = t.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ma(t.memoizedState.cache);
      }
      if (n = t.child, n !== null) n.return = t, el = n;
      else
        e: for (t = e; el !== null; ) {
          n = el;
          var a = n.sibling, u = n.return;
          if ($s(n), n === t) {
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
  var ry = {
    getCacheForType: function(e) {
      var l = nl(Ke), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return nl(Ke).controller.signal;
    }
  }, sy = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, _e = null, ie = null, re = 0, Ae = 0, Dl = null, Lt = !1, In = !1, Ef = !1, Tt = 0, Le = 0, qt = 0, vn = 0, zf = 0, Hl = 0, Pn = 0, Va = null, Tl = null, Cf = !1, uc = 0, id = 0, cc = 1 / 0, ic = null, Yt = null, Fe = 0, Xt = null, ea = null, At = 0, Of = 0, Mf = null, fd = null, Ka = 0, _f = null;
  function Rl() {
    return (Se & 2) !== 0 && re !== 0 ? re & -re : _.T !== null ? Bf() : zo();
  }
  function od() {
    if (Hl === 0)
      if ((re & 536870912) === 0 || he) {
        var e = $l;
        $l <<= 1, ($l & 3932160) === 0 && ($l = 262144), Hl = e;
      } else Hl = 536870912;
    return e = _l.current, e !== null && (e.flags |= 32), Hl;
  }
  function Al(e, l, t) {
    (e === _e && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (la(e, 0), Qt(
      e,
      re,
      Hl,
      !1
    )), ha(e, t), ((Se & 2) === 0 || e !== _e) && (e === _e && ((Se & 2) === 0 && (vn |= t), Le === 4 && Qt(
      e,
      re,
      Hl,
      !1
    )), lt(e));
  }
  function rd(e, l, t) {
    if ((Se & 6) !== 0) throw Error(s(327));
    var n = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || Fl(e, l), a = n ? yy(e, l) : Df(e, l, !0), u = n;
    do {
      if (a === 0) {
        In && !n && Qt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, u && !dy(t)) {
          a = Df(e, l, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = l, e.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            e: {
              var f = e;
              a = Va;
              var h = f.current.memoizedState.isDehydrated;
              if (h && (la(f, i).flags |= 256), i = Df(
                f,
                i,
                !1
              ), i !== 2) {
                if (Ef && !h) {
                  f.errorRecoveryDisabledLanes |= u, vn |= u, a = 4;
                  break e;
                }
                u = Tl, Tl = a, u !== null && (Tl === null ? Tl = u : Tl.push.apply(
                  Tl,
                  u
                ));
              }
              a = i;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          la(e, 0), Qt(e, l, 0, !0);
          break;
        }
        e: {
          switch (n = e, u = a, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Qt(
                n,
                l,
                Hl,
                !Lt
              );
              break e;
            case 2:
              Tl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (a = uc + 300 - fl(), 10 < a)) {
            if (Qt(
              n,
              l,
              Hl,
              !Lt
            ), Cl(n, 0, !0) !== 0) break e;
            At = l, n.timeoutHandle = Yd(
              sd.bind(
                null,
                n,
                t,
                Tl,
                ic,
                Cf,
                l,
                Hl,
                vn,
                Pn,
                Lt,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          sd(
            n,
            t,
            Tl,
            ic,
            Cf,
            l,
            Hl,
            vn,
            Pn,
            Lt,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    lt(e);
  }
  function sd(e, l, t, n, a, u, i, f, h, p, M, R, A, z) {
    if (e.timeoutHandle = -1, R = l.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
      R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: it
      }, nd(
        l,
        u,
        R
      );
      var q = (u & 62914560) === u ? uc - fl() : (u & 4194048) === u ? id - fl() : 0;
      if (q = $y(
        R,
        q
      ), q !== null) {
        At = u, e.cancelPendingCommit = q(
          bd.bind(
            null,
            e,
            l,
            u,
            t,
            n,
            a,
            i,
            f,
            h,
            M,
            R,
            null,
            A,
            z
          )
        ), Qt(e, u, i, !p);
        return;
      }
    }
    bd(
      e,
      l,
      u,
      t,
      n,
      a,
      i,
      f,
      h
    );
  }
  function dy(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var n = 0; n < t.length; n++) {
          var a = t[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ol(u(), a)) return !1;
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
  function Qt(e, l, t, n) {
    l &= ~zf, l &= ~vn, e.suspendedLanes |= l, e.pingedLanes &= ~l, n && (e.warmLanes |= l), n = e.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - J(a), i = 1 << u;
      n[u] = -1, a &= ~i;
    }
    t !== 0 && To(e, t, l);
  }
  function fc() {
    return (Se & 6) === 0 ? (Ja(0), !1) : !0;
  }
  function wf() {
    if (ie !== null) {
      if (Ae === 0)
        var e = ie.return;
      else
        e = ie, st = fn = null, Zi(e), Vn = null, wa = 0, e = ie;
      for (; e !== null; )
        Xs(e.alternate, e), e = e.return;
      ie = null;
    }
  }
  function la(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, Ry(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), At = 0, wf(), _e = e, ie = t = ot(e.current, null), re = l, Ae = 0, Dl = null, Lt = !1, In = Fl(e, l), Ef = !1, Pn = Hl = zf = vn = qt = Le = 0, Tl = Va = null, Cf = !1, (l & 8) !== 0 && (l |= l & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= l; 0 < n; ) {
        var a = 31 - J(n), u = 1 << a;
        l |= e[a], n &= ~u;
      }
    return Tt = l, wu(), t;
  }
  function dd(e, l) {
    ae = null, _.H = Ga, l === Zn || l === Gu ? (l = _r(), Ae = 3) : l === Ri ? (l = _r(), Ae = 4) : Ae = l === cf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Dl = l, ie === null && (Le = 1, Fu(
      e,
      xl(l, e.current)
    ));
  }
  function hd() {
    var e = _l.current;
    return e === null ? !0 : (re & 4194048) === re ? Xl === null : (re & 62914560) === re || (re & 536870912) !== 0 ? e === Xl : !1;
  }
  function yd() {
    var e = _.H;
    return _.H = Ga, e === null ? Ga : e;
  }
  function md() {
    var e = _.A;
    return _.A = ry, e;
  }
  function oc() {
    Le = 4, Lt || (re & 4194048) !== re && _l.current !== null || (In = !0), (qt & 134217727) === 0 && (vn & 134217727) === 0 || _e === null || Qt(
      _e,
      re,
      Hl,
      !1
    );
  }
  function Df(e, l, t) {
    var n = Se;
    Se |= 2;
    var a = yd(), u = md();
    (_e !== e || re !== l) && (ic = null, la(e, l)), l = !1;
    var i = Le;
    e: do
      try {
        if (Ae !== 0 && ie !== null) {
          var f = ie, h = Dl;
          switch (Ae) {
            case 8:
              wf(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _l.current === null && (l = !0);
              var p = Ae;
              if (Ae = 0, Dl = null, ta(e, f, h, p), t && In) {
                i = 0;
                break e;
              }
              break;
            default:
              p = Ae, Ae = 0, Dl = null, ta(e, f, h, p);
          }
        }
        hy(), i = Le;
        break;
      } catch (M) {
        dd(e, M);
      }
    while (!0);
    return l && e.shellSuspendCounter++, st = fn = null, Se = n, _.H = a, _.A = u, ie === null && (_e = null, re = 0, wu()), i;
  }
  function hy() {
    for (; ie !== null; ) gd(ie);
  }
  function yy(e, l) {
    var t = Se;
    Se |= 2;
    var n = yd(), a = md();
    _e !== e || re !== l ? (ic = null, cc = fl() + 500, la(e, l)) : In = Fl(
      e,
      l
    );
    e: do
      try {
        if (Ae !== 0 && ie !== null) {
          l = ie;
          var u = Dl;
          l: switch (Ae) {
            case 1:
              Ae = 0, Dl = null, ta(e, l, u, 1);
              break;
            case 2:
            case 9:
              if (Or(u)) {
                Ae = 0, Dl = null, vd(l);
                break;
              }
              l = function() {
                Ae !== 2 && Ae !== 9 || _e !== e || (Ae = 7), lt(e);
              }, u.then(l, l);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              Or(u) ? (Ae = 0, Dl = null, vd(l)) : (Ae = 0, Dl = null, ta(e, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (ie.tag) {
                case 26:
                  i = ie.memoizedState;
                case 5:
                case 27:
                  var f = ie;
                  if (i ? t0(i) : f.stateNode.complete) {
                    Ae = 0, Dl = null;
                    var h = f.sibling;
                    if (h !== null) ie = h;
                    else {
                      var p = f.return;
                      p !== null ? (ie = p, rc(p)) : ie = null;
                    }
                    break l;
                  }
              }
              Ae = 0, Dl = null, ta(e, l, u, 5);
              break;
            case 6:
              Ae = 0, Dl = null, ta(e, l, u, 6);
              break;
            case 8:
              wf(), Le = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        my();
        break;
      } catch (M) {
        dd(e, M);
      }
    while (!0);
    return st = fn = null, _.H = n, _.A = a, Se = t, ie !== null ? 0 : (_e = null, re = 0, wu(), Le);
  }
  function my() {
    for (; ie !== null && !Qc(); )
      gd(ie);
  }
  function gd(e) {
    var l = qs(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, l === null ? rc(e) : ie = l;
  }
  function vd(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Bs(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          re
        );
        break;
      case 11:
        l = Bs(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          re
        );
        break;
      case 5:
        Zi(l);
      default:
        Xs(t, l), l = ie = mr(l, Tt), l = qs(t, l, Tt);
    }
    e.memoizedProps = e.pendingProps, l === null ? rc(e) : ie = l;
  }
  function ta(e, l, t, n) {
    st = fn = null, Zi(l), Vn = null, wa = 0;
    var a = l.return;
    try {
      if (ny(
        e,
        a,
        l,
        t,
        re
      )) {
        Le = 1, Fu(
          e,
          xl(t, e.current)
        ), ie = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw ie = a, u;
      Le = 1, Fu(
        e,
        xl(t, e.current)
      ), ie = null;
      return;
    }
    l.flags & 32768 ? (he || n === 1 ? e = !0 : In || (re & 536870912) !== 0 ? e = !1 : (Lt = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = _l.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Sd(l, e)) : rc(l);
  }
  function rc(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        Sd(
          l,
          Lt
        );
        return;
      }
      e = l.return;
      var t = cy(
        l.alternate,
        l,
        Tt
      );
      if (t !== null) {
        ie = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        ie = l;
        return;
      }
      ie = l = e;
    } while (l !== null);
    Le === 0 && (Le = 5);
  }
  function Sd(e, l) {
    do {
      var t = iy(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, ie = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        ie = e;
        return;
      }
      ie = e = t;
    } while (e !== null);
    Le = 6, ie = null;
  }
  function bd(e, l, t, n, a, u, i, f, h) {
    e.cancelPendingCommit = null;
    do
      sc();
    while (Fe !== 0);
    if ((Se & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === e.current) throw Error(s(177));
      if (u = l.lanes | l.childLanes, u |= vi, k0(
        e,
        t,
        u,
        i,
        f,
        h
      ), e === _e && (ie = _e = null, re = 0), ea = l, Xt = e, At = t, Of = u, Mf = a, fd = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, by(En, function() {
        return zd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
        n = _.T, _.T = null, a = x.p, x.p = 2, i = Se, Se |= 4;
        try {
          fy(e, l, t);
        } finally {
          Se = i, x.p = a, _.T = n;
        }
      }
      Fe = 1, pd(), Td(), Ad();
    }
  }
  function pd() {
    if (Fe === 1) {
      Fe = 0;
      var e = Xt, l = ea, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = _.T, _.T = null;
        var n = x.p;
        x.p = 2;
        var a = Se;
        Se |= 4;
        try {
          ed(l, e);
          var u = Xf, i = cr(e.containerInfo), f = u.focusedElem, h = u.selectionRange;
          if (i !== f && f && f.ownerDocument && ur(
            f.ownerDocument.documentElement,
            f
          )) {
            if (h !== null && di(f)) {
              var p = h.start, M = h.end;
              if (M === void 0 && (M = p), "selectionStart" in f)
                f.selectionStart = p, f.selectionEnd = Math.min(
                  M,
                  f.value.length
                );
              else {
                var R = f.ownerDocument || document, A = R && R.defaultView || window;
                if (A.getSelection) {
                  var z = A.getSelection(), q = f.textContent.length, I = Math.min(h.start, q), Me = h.end === void 0 ? I : Math.min(h.end, q);
                  !z.extend && I > Me && (i = Me, Me = I, I = i);
                  var v = ar(
                    f,
                    I
                  ), y = ar(
                    f,
                    Me
                  );
                  if (v && y && (z.rangeCount !== 1 || z.anchorNode !== v.node || z.anchorOffset !== v.offset || z.focusNode !== y.node || z.focusOffset !== y.offset)) {
                    var b = R.createRange();
                    b.setStart(v.node, v.offset), z.removeAllRanges(), I > Me ? (z.addRange(b), z.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), z.addRange(b));
                  }
                }
              }
            }
            for (R = [], z = f; z = z.parentNode; )
              z.nodeType === 1 && R.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < R.length; f++) {
              var H = R[f];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Ec = !!Yf, Xf = Yf = null;
        } finally {
          Se = a, x.p = n, _.T = t;
        }
      }
      e.current = l, Fe = 2;
    }
  }
  function Td() {
    if (Fe === 2) {
      Fe = 0;
      var e = Xt, l = ea, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = _.T, _.T = null;
        var n = x.p;
        x.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Ws(e, l.alternate, l);
        } finally {
          Se = a, x.p = n, _.T = t;
        }
      }
      Fe = 3;
    }
  }
  function Ad() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, Zc();
      var e = Xt, l = ea, t = At, n = fd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, ea = Xt = null, Ed(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Yt = null), Jc(t), l = l.stateNode, N && typeof N.onCommitFiberRoot == "function")
        try {
          N.onCommitFiberRoot(
            Q,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = _.T, a = x.p, x.p = 2, _.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < n.length; i++) {
            var f = n[i];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          _.T = l, x.p = a;
        }
      }
      (At & 3) !== 0 && sc(), lt(e), a = e.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? e === _f ? Ka++ : (Ka = 0, _f = e) : Ka = 0, Ja(0);
    }
  }
  function Ed(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Ma(l)));
  }
  function sc() {
    return pd(), Td(), Ad(), zd();
  }
  function zd() {
    if (Fe !== 5) return !1;
    var e = Xt, l = Of;
    Of = 0;
    var t = Jc(At), n = _.T, a = x.p;
    try {
      x.p = 32 > t ? 32 : t, _.T = null, t = Mf, Mf = null;
      var u = Xt, i = At;
      if (Fe = 0, ea = Xt = null, At = 0, (Se & 6) !== 0) throw Error(s(331));
      var f = Se;
      if (Se |= 4, ud(u.current), td(
        u,
        u.current,
        i,
        t
      ), Se = f, Ja(0, !1), N && typeof N.onPostCommitFiberRoot == "function")
        try {
          N.onPostCommitFiberRoot(Q, u);
        } catch {
        }
      return !0;
    } finally {
      x.p = a, _.T = n, Ed(e, l);
    }
  }
  function Cd(e, l, t) {
    l = xl(t, l), l = uf(e.stateNode, l, 2), e = Nt(e, l, 2), e !== null && (ha(e, 2), lt(e));
  }
  function Ee(e, l, t) {
    if (e.tag === 3)
      Cd(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Cd(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Yt === null || !Yt.has(n))) {
            e = xl(t, e), t = Os(2), n = Nt(l, t, 2), n !== null && (Ms(
              t,
              n,
              l,
              e
            ), ha(n, 2), lt(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function Hf(e, l, t) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new sy();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(t) || (Ef = !0, a.add(t), e = gy.bind(null, e, l, t), l.then(e, e));
  }
  function gy(e, l, t) {
    var n = e.pingCache;
    n !== null && n.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, _e === e && (re & t) === t && (Le === 4 || Le === 3 && (re & 62914560) === re && 300 > fl() - uc ? (Se & 2) === 0 && la(e, 0) : zf |= t, Pn === re && (Pn = 0)), lt(e);
  }
  function Od(e, l) {
    l === 0 && (l = po()), e = an(e, l), e !== null && (ha(e, l), lt(e));
  }
  function vy(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), Od(e, t);
  }
  function Sy(e, l) {
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
        throw Error(s(314));
    }
    n !== null && n.delete(l), Od(e, t);
  }
  function by(e, l) {
    return sa(e, l);
  }
  var dc = null, na = null, Rf = !1, hc = !1, Uf = !1, Zt = 0;
  function lt(e) {
    e !== na && e.next === null && (na === null ? dc = na = e : na = na.next = e), hc = !0, Rf || (Rf = !0, Ty());
  }
  function Ja(e, l) {
    if (!Uf && hc) {
      Uf = !0;
      do
        for (var t = !1, n = dc; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = n.suspendedLanes, f = n.pingedLanes;
              u = (1 << 31 - J(42 | e) + 1) - 1, u &= a & ~(i & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (t = !0, Dd(n, u));
          } else
            u = re, u = Cl(
              n,
              n === _e ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || Fl(n, u) || (t = !0, Dd(n, u));
          n = n.next;
        }
      while (t);
      Uf = !1;
    }
  }
  function py() {
    Md();
  }
  function Md() {
    hc = Rf = !1;
    var e = 0;
    Zt !== 0 && Hy() && (e = Zt);
    for (var l = fl(), t = null, n = dc; n !== null; ) {
      var a = n.next, u = _d(n, l);
      u === 0 ? (n.next = null, t === null ? dc = a : t.next = a, a === null && (na = t)) : (t = n, (e !== 0 || (u & 3) !== 0) && (hc = !0)), n = a;
    }
    Fe !== 0 && Fe !== 5 || Ja(e), Zt !== 0 && (Zt = 0);
  }
  function _d(e, l) {
    for (var t = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - J(u), f = 1 << i, h = a[i];
      h === -1 ? ((f & t) === 0 || (f & n) !== 0) && (a[i] = J0(f, l)) : h <= l && (e.expiredLanes |= f), u &= ~f;
    }
    if (l = _e, t = re, t = Cl(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, t === 0 || e === l && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && da(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Fl(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (n !== null && da(n), Jc(t)) {
        case 2:
        case 8:
          t = vu;
          break;
        case 32:
          t = En;
          break;
        case 268435456:
          t = j;
          break;
        default:
          t = En;
      }
      return n = wd.bind(null, e), t = sa(t, n), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return n !== null && n !== null && da(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wd(e, l) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (sc() && e.callbackNode !== t)
      return null;
    var n = re;
    return n = Cl(
      e,
      e === _e ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (rd(e, n, l), _d(e, fl()), e.callbackNode != null && e.callbackNode === t ? wd.bind(null, e) : null);
  }
  function Dd(e, l) {
    if (sc()) return null;
    rd(e, l, !0);
  }
  function Ty() {
    Uy(function() {
      (Se & 6) !== 0 ? sa(
        gu,
        py
      ) : Md();
    });
  }
  function Bf() {
    if (Zt === 0) {
      var e = Xn;
      e === 0 && (e = ut, ut <<= 1, (ut & 261888) === 0 && (ut = 256)), Zt = e;
    }
    return Zt;
  }
  function Hd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tu("" + e);
  }
  function Rd(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Ay(e, l, t, n, a) {
    if (l === "submit" && t && t.stateNode === a) {
      var u = Hd(
        (a[gl] || null).action
      ), i = n.submitter;
      i && (l = (l = i[gl] || null) ? Hd(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var f = new Cu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Zt !== 0) {
                  var h = i ? Rd(a, i) : new FormData(a);
                  Pi(
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
                typeof u == "function" && (f.preventDefault(), h = i ? Rd(a, i) : new FormData(a), Pi(
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
  for (var Nf = 0; Nf < gi.length; Nf++) {
    var jf = gi[Nf], Ey = jf.toLowerCase(), zy = jf[0].toUpperCase() + jf.slice(1);
    Vl(
      Ey,
      "on" + zy
    );
  }
  Vl(or, "onAnimationEnd"), Vl(rr, "onAnimationIteration"), Vl(sr, "onAnimationStart"), Vl("dblclick", "onDoubleClick"), Vl("focusin", "onFocus"), Vl("focusout", "onBlur"), Vl(qh, "onTransitionRun"), Vl(Yh, "onTransitionStart"), Vl(Xh, "onTransitionCancel"), Vl(dr, "onTransitionEnd"), _n("onMouseEnter", ["mouseout", "mouseover"]), _n("onMouseLeave", ["mouseout", "mouseover"]), _n("onPointerEnter", ["pointerout", "pointerover"]), _n("onPointerLeave", ["pointerout", "pointerover"]), en(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), en(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), en("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), en(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), en(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), en(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ka = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Cy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka)
  );
  function Ud(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var n = e[t], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (l)
          for (var i = n.length - 1; 0 <= i; i--) {
            var f = n[i], h = f.instance, p = f.currentTarget;
            if (f = f.listener, h !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = p;
            try {
              u(a);
            } catch (M) {
              _u(M);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (i = 0; i < n.length; i++) {
            if (f = n[i], h = f.instance, p = f.currentTarget, f = f.listener, h !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = p;
            try {
              u(a);
            } catch (M) {
              _u(M);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function fe(e, l) {
    var t = l[kc];
    t === void 0 && (t = l[kc] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    t.has(n) || (Bd(l, e, 2, !1), t.add(n));
  }
  function Gf(e, l, t) {
    var n = 0;
    l && (n |= 4), Bd(
      t,
      e,
      n,
      l
    );
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(e) {
    if (!e[yc]) {
      e[yc] = !0, Mo.forEach(function(t) {
        t !== "selectionchange" && (Cy.has(t) || Gf(t, !1, e), Gf(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[yc] || (l[yc] = !0, Gf("selectionchange", !1, l));
    }
  }
  function Bd(e, l, t, n) {
    switch (o0(l)) {
      case 2:
        var a = Py;
        break;
      case 8:
        a = em;
        break;
      default:
        a = Pf;
    }
    t = a.bind(
      null,
      l,
      t,
      e
    ), a = void 0, !ni || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: a
    }) : e.addEventListener(l, t, !0) : a !== void 0 ? e.addEventListener(l, t, {
      passive: a
    }) : e.addEventListener(l, t, !1);
  }
  function Lf(e, l, t, n, a) {
    var u = n;
    if ((l & 1) === 0 && (l & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var f = n.stateNode.containerInfo;
          if (f === a) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = Cn(f), i === null) return;
            if (h = i.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = i;
              continue e;
            }
            f = f.parentNode;
          }
        }
        n = n.return;
      }
    Lo(function() {
      var p = u, M = li(t), R = [];
      e: {
        var A = hr.get(e);
        if (A !== void 0) {
          var z = Cu, q = e;
          switch (e) {
            case "keypress":
              if (Eu(t) === 0) break e;
            case "keydown":
            case "keyup":
              z = Sh;
              break;
            case "focusin":
              q = "focus", z = ii;
              break;
            case "focusout":
              q = "blur", z = ii;
              break;
            case "beforeblur":
            case "afterblur":
              z = ii;
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
              z = Xo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Th;
              break;
            case or:
            case rr:
            case sr:
              z = oh;
              break;
            case dr:
              z = Eh;
              break;
            case "scroll":
            case "scrollend":
              z = ah;
              break;
            case "wheel":
              z = Ch;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = sh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Zo;
              break;
            case "toggle":
            case "beforetoggle":
              z = Mh;
          }
          var I = (l & 4) !== 0, Me = !I && (e === "scroll" || e === "scrollend"), v = I ? A !== null ? A + "Capture" : null : A;
          I = [];
          for (var y = p, b; y !== null; ) {
            var H = y;
            if (b = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || b === null || v === null || (H = ga(y, v), H != null && I.push(
              Wa(y, H, b)
            )), Me) break;
            y = y.return;
          }
          0 < I.length && (A = new z(
            A,
            q,
            null,
            t,
            M
          ), R.push({ event: A, listeners: I }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", A && t !== ei && (q = t.relatedTarget || t.fromElement) && (Cn(q) || q[zn]))
            break e;
          if ((z || A) && (A = M.window === M ? M : (A = M.ownerDocument) ? A.defaultView || A.parentWindow : window, z ? (q = t.relatedTarget || t.toElement, z = p, q = q ? Cn(q) : null, q !== null && (Me = E(q), I = q.tag, q !== Me || I !== 5 && I !== 27 && I !== 6) && (q = null)) : (z = null, q = p), z !== q)) {
            if (I = Xo, H = "onMouseLeave", v = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (I = Zo, H = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Me = z == null ? A : ma(z), b = q == null ? A : ma(q), A = new I(
              H,
              y + "leave",
              z,
              t,
              M
            ), A.target = Me, A.relatedTarget = b, H = null, Cn(M) === p && (I = new I(
              v,
              y + "enter",
              q,
              t,
              M
            ), I.target = b, I.relatedTarget = Me, H = I), Me = H, z && q)
              l: {
                for (I = Oy, v = z, y = q, b = 0, H = v; H; H = I(H))
                  b++;
                H = 0;
                for (var k = y; k; k = I(k))
                  H++;
                for (; 0 < b - H; )
                  v = I(v), b--;
                for (; 0 < H - b; )
                  y = I(y), H--;
                for (; b--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    I = v;
                    break l;
                  }
                  v = I(v), y = I(y);
                }
                I = null;
              }
            else I = null;
            z !== null && Nd(
              R,
              A,
              z,
              I,
              !1
            ), q !== null && Me !== null && Nd(
              R,
              Me,
              q,
              I,
              !0
            );
          }
        }
        e: {
          if (A = p ? ma(p) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file")
            var ye = Io;
          else if ($o(A))
            if (Po)
              ye = Gh;
            else {
              ye = Nh;
              var Z = Bh;
            }
          else
            z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? p && Pc(p.elementType) && (ye = Io) : ye = jh;
          if (ye && (ye = ye(e, p))) {
            Fo(
              R,
              ye,
              t,
              M
            );
            break e;
          }
          Z && Z(e, A, p), e === "focusout" && p && A.type === "number" && p.memoizedProps.value != null && Ic(A, "number", A.value);
        }
        switch (Z = p ? ma(p) : window, e) {
          case "focusin":
            ($o(Z) || Z.contentEditable === "true") && (Bn = Z, hi = p, za = null);
            break;
          case "focusout":
            za = hi = Bn = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yi = !1, ir(R, t, M);
            break;
          case "selectionchange":
            if (Lh) break;
          case "keydown":
          case "keyup":
            ir(R, t, M);
        }
        var ue;
        if (oi)
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
          Un ? ko(e, t) && (se = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (se = "onCompositionStart");
        se && (Vo && t.locale !== "ko" && (Un || se !== "onCompositionStart" ? se === "onCompositionEnd" && Un && (ue = qo()) : (_t = M, ai = "value" in _t ? _t.value : _t.textContent, Un = !0)), Z = mc(p, se), 0 < Z.length && (se = new Qo(
          se,
          e,
          null,
          t,
          M
        ), R.push({ event: se, listeners: Z }), ue ? se.data = ue : (ue = Wo(t), ue !== null && (se.data = ue)))), (ue = wh ? Dh(e, t) : Hh(e, t)) && (se = mc(p, "onBeforeInput"), 0 < se.length && (Z = new Qo(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          M
        ), R.push({
          event: Z,
          listeners: se
        }), Z.data = ue)), Ay(
          R,
          e,
          p,
          t,
          M
        );
      }
      Ud(R, l);
    });
  }
  function Wa(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function mc(e, l) {
    for (var t = l + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ga(e, t), a != null && n.unshift(
        Wa(e, a, u)
      ), a = ga(e, l), a != null && n.push(
        Wa(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Oy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Nd(e, l, t, n, a) {
    for (var u = l._reactName, i = []; t !== null && t !== n; ) {
      var f = t, h = f.alternate, p = f.stateNode;
      if (f = f.tag, h !== null && h === n) break;
      f !== 5 && f !== 26 && f !== 27 || p === null || (h = p, a ? (p = ga(t, u), p != null && i.unshift(
        Wa(t, p, h)
      )) : a || (p = ga(t, u), p != null && i.push(
        Wa(t, p, h)
      ))), t = t.return;
    }
    i.length !== 0 && e.push({ event: l, listeners: i });
  }
  var My = /\r\n?/g, _y = /\u0000|\uFFFD/g;
  function jd(e) {
    return (typeof e == "string" ? e : "" + e).replace(My, `
`).replace(_y, "");
  }
  function Gd(e, l) {
    return l = jd(l), jd(e) === l;
  }
  function Oe(e, l, t, n, a, u) {
    switch (t) {
      case "children":
        typeof n == "string" ? l === "body" || l === "textarea" && n === "" || Dn(e, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && Dn(e, "" + n);
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
        Go(e, n, u);
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
          typeof u == "function" && (t === "formAction" ? (l !== "input" && Oe(e, l, "name", a.name, a, null), Oe(
            e,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Oe(
            e,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Oe(
            e,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Oe(e, l, "encType", a.encType, a, null), Oe(e, l, "method", a.method, a, null), Oe(e, l, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(t);
          break;
        }
        n = Tu("" + n), e.setAttribute(t, n);
        break;
      case "onClick":
        n != null && (e.onclick = it);
        break;
      case "onScroll":
        n != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(s(61));
          if (t = n.__html, t != null) {
            if (a.children != null) throw Error(s(60));
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
        fe("beforetoggle", e), fe("toggle", e), Su(e, "popover", n);
        break;
      case "xlinkActuate":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        ct(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        ct(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        ct(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        ct(
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
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = th.get(t) || t, Su(e, t, n));
    }
  }
  function qf(e, l, t, n, a, u) {
    switch (t) {
      case "style":
        Go(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(s(61));
          if (t = n.__html, t != null) {
            if (a.children != null) throw Error(s(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Dn(e, n) : (typeof n == "number" || typeof n == "bigint") && Dn(e, "" + n);
        break;
      case "onScroll":
        n != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && fe("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = it);
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
        if (!_o.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (a = t.endsWith("Capture"), l = t.slice(2, a ? t.length - 7 : void 0), u = e[gl] || null, u = u != null ? u[t] : null, typeof u == "function" && e.removeEventListener(l, u, a), typeof n == "function")) {
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
        fe("error", e), fe("load", e);
        var n = !1, a = !1, u;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var i = t[u];
            if (i != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  Oe(e, l, u, i, t, null);
              }
          }
        a && Oe(e, l, "srcSet", t.srcSet, t, null), n && Oe(e, l, "src", t.src, t, null);
        return;
      case "input":
        fe("invalid", e);
        var f = u = i = a = null, h = null, p = null;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var M = t[n];
            if (M != null)
              switch (n) {
                case "name":
                  a = M;
                  break;
                case "type":
                  i = M;
                  break;
                case "checked":
                  h = M;
                  break;
                case "defaultChecked":
                  p = M;
                  break;
                case "value":
                  u = M;
                  break;
                case "defaultValue":
                  f = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(s(137, l));
                  break;
                default:
                  Oe(e, l, n, M, t, null);
              }
          }
        Uo(
          e,
          u,
          f,
          h,
          p,
          i,
          a,
          !1
        );
        return;
      case "select":
        fe("invalid", e), n = i = u = null;
        for (a in t)
          if (t.hasOwnProperty(a) && (f = t[a], f != null))
            switch (a) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                n = f;
              default:
                Oe(e, l, a, f, t, null);
            }
        l = u, t = i, e.multiple = !!n, l != null ? wn(e, !!n, l, !1) : t != null && wn(e, !!n, t, !0);
        return;
      case "textarea":
        fe("invalid", e), u = a = n = null;
        for (i in t)
          if (t.hasOwnProperty(i) && (f = t[i], f != null))
            switch (i) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                Oe(e, l, i, f, t, null);
            }
        No(e, n, a, u);
        return;
      case "option":
        for (h in t)
          t.hasOwnProperty(h) && (n = t[h], n != null) && (h === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Oe(e, l, h, n, t, null));
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ka.length; n++)
          fe(ka[n], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
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
        for (p in t)
          if (t.hasOwnProperty(p) && (n = t[p], n != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                Oe(e, l, p, n, t, null);
            }
        return;
      default:
        if (Pc(l)) {
          for (M in t)
            t.hasOwnProperty(M) && (n = t[M], n !== void 0 && qf(
              e,
              l,
              M,
              n,
              t,
              void 0
            ));
          return;
        }
    }
    for (f in t)
      t.hasOwnProperty(f) && (n = t[f], n != null && Oe(e, l, f, n, t, null));
  }
  function wy(e, l, t, n) {
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
        var a = null, u = null, i = null, f = null, h = null, p = null, M = null;
        for (z in t) {
          var R = t[z];
          if (t.hasOwnProperty(z) && R != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = R;
              default:
                n.hasOwnProperty(z) || Oe(e, l, z, null, n, R);
            }
        }
        for (var A in n) {
          var z = n[A];
          if (R = t[A], n.hasOwnProperty(A) && (z != null || R != null))
            switch (A) {
              case "type":
                u = z;
                break;
              case "name":
                a = z;
                break;
              case "checked":
                p = z;
                break;
              case "defaultChecked":
                M = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                f = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(s(137, l));
                break;
              default:
                z !== R && Oe(
                  e,
                  l,
                  A,
                  z,
                  n,
                  R
                );
            }
        }
        Fc(
          e,
          i,
          f,
          h,
          p,
          M,
          u,
          a
        );
        return;
      case "select":
        z = i = f = A = null;
        for (u in t)
          if (h = t[u], t.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = h;
              default:
                n.hasOwnProperty(u) || Oe(
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
                A = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== h && Oe(
                  e,
                  l,
                  a,
                  u,
                  n,
                  h
                );
            }
        l = f, t = i, n = z, A != null ? wn(e, !!t, A, !1) : !!n != !!t && (l != null ? wn(e, !!t, l, !0) : wn(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        z = A = null;
        for (f in t)
          if (a = t[f], t.hasOwnProperty(f) && a != null && !n.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, l, f, null, n, a);
            }
        for (i in n)
          if (a = n[i], u = t[i], n.hasOwnProperty(i) && (a != null || u != null))
            switch (i) {
              case "value":
                A = a;
                break;
              case "defaultValue":
                z = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== u && Oe(e, l, i, a, n, u);
            }
        Bo(e, A, z);
        return;
      case "option":
        for (var q in t)
          A = t[q], t.hasOwnProperty(q) && A != null && !n.hasOwnProperty(q) && (q === "selected" ? e.selected = !1 : Oe(
            e,
            l,
            q,
            null,
            n,
            A
          ));
        for (h in n)
          A = n[h], z = t[h], n.hasOwnProperty(h) && A !== z && (A != null || z != null) && (h === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Oe(
            e,
            l,
            h,
            A,
            n,
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
        for (var I in t)
          A = t[I], t.hasOwnProperty(I) && A != null && !n.hasOwnProperty(I) && Oe(e, l, I, null, n, A);
        for (p in n)
          if (A = n[p], z = t[p], n.hasOwnProperty(p) && A !== z && (A != null || z != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, l));
                break;
              default:
                Oe(
                  e,
                  l,
                  p,
                  A,
                  n,
                  z
                );
            }
        return;
      default:
        if (Pc(l)) {
          for (var Me in t)
            A = t[Me], t.hasOwnProperty(Me) && A !== void 0 && !n.hasOwnProperty(Me) && qf(
              e,
              l,
              Me,
              void 0,
              n,
              A
            );
          for (M in n)
            A = n[M], z = t[M], !n.hasOwnProperty(M) || A === z || A === void 0 && z === void 0 || qf(
              e,
              l,
              M,
              A,
              n,
              z
            );
          return;
        }
    }
    for (var v in t)
      A = t[v], t.hasOwnProperty(v) && A != null && !n.hasOwnProperty(v) && Oe(e, l, v, null, n, A);
    for (R in n)
      A = n[R], z = t[R], !n.hasOwnProperty(R) || A === z || A == null && z == null || Oe(e, l, R, A, n, z);
  }
  function xd(e) {
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
  function Dy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var a = t[n], u = a.transferSize, i = a.initiatorType, f = a.duration;
        if (u && f && xd(i)) {
          for (i = 0, f = a.responseEnd, n += 1; n < t.length; n++) {
            var h = t[n], p = h.startTime;
            if (p > f) break;
            var M = h.transferSize, R = h.initiatorType;
            M && xd(R) && (h = h.responseEnd, i += M * (h < f ? 1 : (f - p) / (h - p)));
          }
          if (--n, l += 8 * (u + i) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Yf = null, Xf = null;
  function gc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ld(e) {
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
  function Qf(e, l) {
    return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Zf = null;
  function Hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Zf ? !1 : (Zf = e, !0) : (Zf = null, !1);
  }
  var Yd = typeof setTimeout == "function" ? setTimeout : void 0, Ry = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(e) {
    return Xd.resolve(null).then(e).catch(By);
  } : Yd;
  function By(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Vt(e) {
    return e === "head";
  }
  function Qd(e, l) {
    var t = l, n = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8)
        if (t = a.data, t === "/$" || t === "/&") {
          if (n === 0) {
            e.removeChild(a), ia(l);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          n++;
        else if (t === "html")
          $a(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, $a(t);
          for (var u = t.firstChild; u; ) {
            var i = u.nextSibling, f = u.nodeName;
            u[ya] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = i;
          }
        } else
          t === "body" && $a(e.ownerDocument.body);
      t = a;
    } while (t);
    ia(l);
  }
  function Zd(e, l) {
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
  function Vf(e) {
    var l = e.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (l = l.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vf(t), Wc(t);
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
  function Ny(e, l, t, n) {
    for (; e.nodeType === 1; ) {
      var a = t;
      if (e.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[ya])
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
      if (e = Ql(e.nextSibling), e === null) break;
    }
    return null;
  }
  function jy(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ql(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vd(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ql(e.nextSibling), e === null)) return null;
    return e;
  }
  function Kf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Jf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Gy(e, l) {
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
  function Ql(e) {
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
  var kf = null;
  function Kd(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return Ql(e.nextSibling);
          l--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Jd(e) {
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
  function kd(e, l, t) {
    switch (l = gc(t), e) {
      case "html":
        if (e = l.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = l.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = l.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function $a(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    Wc(e);
  }
  var Zl = /* @__PURE__ */ new Map(), Wd = /* @__PURE__ */ new Set();
  function vc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Et = x.d;
  x.d = {
    f: xy,
    r: Ly,
    D: qy,
    C: Yy,
    L: Xy,
    m: Qy,
    X: Vy,
    S: Zy,
    M: Ky
  };
  function xy() {
    var e = Et.f(), l = fc();
    return e || l;
  }
  function Ly(e) {
    var l = On(e);
    l !== null && l.tag === 5 && l.type === "form" ? ds(l) : Et.r(e);
  }
  var aa = typeof document > "u" ? null : document;
  function $d(e, l, t) {
    var n = aa;
    if (n && typeof l == "string" && l) {
      var a = jl(l);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof t == "string" && (a += '[crossorigin="' + t + '"]'), Wd.has(a) || (Wd.add(a), e = { rel: e, crossOrigin: t, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function qy(e) {
    Et.D(e), $d("dns-prefetch", e, null);
  }
  function Yy(e, l) {
    Et.C(e, l), $d("preconnect", e, l);
  }
  function Xy(e, l, t) {
    Et.L(e, l, t);
    var n = aa;
    if (n && e && l) {
      var a = 'link[rel="preload"][as="' + jl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (a += '[imagesrcset="' + jl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (a += '[imagesizes="' + jl(
        t.imageSizes
      ) + '"]')) : a += '[href="' + jl(e) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = ua(e);
          break;
        case "script":
          u = ca(e);
      }
      Zl.has(u) || (e = B(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Zl.set(u, e), n.querySelector(a) !== null || l === "style" && n.querySelector(Fa(u)) || l === "script" && n.querySelector(Ia(u)) || (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function Qy(e, l) {
    Et.m(e, l);
    var t = aa;
    if (t && e) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + jl(n) + '"][href="' + jl(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ca(e);
      }
      if (!Zl.has(u) && (e = B({ rel: "modulepreload", href: e }, l), Zl.set(u, e), t.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Ia(u)))
              return;
        }
        n = t.createElement("link"), ul(n, "link", e), Pe(n), t.head.appendChild(n);
      }
    }
  }
  function Zy(e, l, t) {
    Et.S(e, l, t);
    var n = aa;
    if (n && e) {
      var a = Mn(n).hoistableStyles, u = ua(e);
      l = l || "default";
      var i = a.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = n.querySelector(
          Fa(u)
        ))
          f.loading = 5;
        else {
          e = B(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Zl.get(u)) && Wf(e, t);
          var h = i = n.createElement("link");
          Pe(h), ul(h, "link", e), h._p = new Promise(function(p, M) {
            h.onload = p, h.onerror = M;
          }), h.addEventListener("load", function() {
            f.loading |= 1;
          }), h.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Sc(i, l, n);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, a.set(u, i);
      }
    }
  }
  function Vy(e, l) {
    Et.X(e, l);
    var t = aa;
    if (t && e) {
      var n = Mn(t).hoistableScripts, a = ca(e), u = n.get(a);
      u || (u = t.querySelector(Ia(a)), u || (e = B({ src: e, async: !0 }, l), (l = Zl.get(a)) && $f(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Ky(e, l) {
    Et.M(e, l);
    var t = aa;
    if (t && e) {
      var n = Mn(t).hoistableScripts, a = ca(e), u = n.get(a);
      u || (u = t.querySelector(Ia(a)), u || (e = B({ src: e, async: !0, type: "module" }, l), (l = Zl.get(a)) && $f(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Fd(e, l, t, n) {
    var a = (a = le.current) ? vc(a) : null;
    if (!a) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = ua(t.href), t = Mn(
          a
        ).hoistableStyles, n = t.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = ua(t.href);
          var u = Mn(
            a
          ).hoistableStyles, i = u.get(e);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, i), (u = a.querySelector(
            Fa(e)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Zl.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Zl.set(e, t), u || Jy(
            a,
            e,
            t,
            i.state
          ))), l && n === null)
            throw Error(s(528, ""));
          return i;
        }
        if (l && n !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = ca(t), t = Mn(
          a
        ).hoistableScripts, n = t.get(l), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function ua(e) {
    return 'href="' + jl(e) + '"';
  }
  function Fa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Id(e) {
    return B({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Jy(e, l, t, n) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = e.createElement("link"), n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    }), ul(l, "link", t), Pe(l), e.head.appendChild(l));
  }
  function ca(e) {
    return '[src="' + jl(e) + '"]';
  }
  function Ia(e) {
    return "script[async]" + e;
  }
  function Pd(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + jl(t.href) + '"]'
          );
          if (n)
            return l.instance = n, Pe(n), n;
          var a = B({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Pe(n), ul(n, "style", a), Sc(n, t.precedence, e), l.instance = n;
        case "stylesheet":
          a = ua(t.href);
          var u = e.querySelector(
            Fa(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Pe(u), u;
          n = Id(t), (a = Zl.get(a)) && Wf(n, a), u = (e.ownerDocument || e).createElement("link"), Pe(u);
          var i = u;
          return i._p = new Promise(function(f, h) {
            i.onload = f, i.onerror = h;
          }), ul(u, "link", n), l.state.loading |= 4, Sc(u, t.precedence, e), l.instance = u;
        case "script":
          return u = ca(t.src), (a = e.querySelector(
            Ia(u)
          )) ? (l.instance = a, Pe(a), a) : (n = t, (a = Zl.get(u)) && (n = B({}, t), $f(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Pe(a), ul(a, "link", n), e.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, Sc(n, t.precedence, e));
    return l.instance;
  }
  function Sc(e, l, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, i = 0; i < n.length; i++) {
      var f = n[i];
      if (f.dataset.precedence === l) u = f;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function Wf(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function $f(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var bc = null;
  function e0(e, l, t) {
    if (bc === null) {
      var n = /* @__PURE__ */ new Map(), a = bc = /* @__PURE__ */ new Map();
      a.set(t, n);
    } else
      a = bc, n = a.get(t), n || (n = /* @__PURE__ */ new Map(), a.set(t, n));
    if (n.has(e)) return n;
    for (n.set(e, null), t = t.getElementsByTagName(e), a = 0; a < t.length; a++) {
      var u = t[a];
      if (!(u[ya] || u[ll] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = e + i;
        var f = n.get(i);
        f ? f.push(u) : n.set(i, [u]);
      }
    }
    return n;
  }
  function l0(e, l, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      l === "title" ? e.querySelector("head > title") : null
    );
  }
  function ky(e, l, t) {
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
  function t0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wy(e, l, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = ua(n.href), u = l.querySelector(
          Fa(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = pc.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = u, Pe(u);
          return;
        }
        u = l.ownerDocument || l, n = Id(n), (a = Zl.get(a)) && Wf(n, a), u = u.createElement("link"), Pe(u);
        var i = u;
        i._p = new Promise(function(f, h) {
          i.onload = f, i.onerror = h;
        }), ul(u, "link", n), t.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = pc.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var Ff = 0;
  function $y(e, l) {
    return e.stylesheets && e.count === 0 && Ac(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ac(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < e.imgBytes && Ff === 0 && (Ff = 62500 * Dy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ac(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ff ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function pc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ac(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Tc = null;
  function Ac(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Tc = /* @__PURE__ */ new Map(), l.forEach(Fy, e), Tc = null, pc.call(e));
  }
  function Fy(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Tc.get(e);
      if (t) var n = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Tc.set(e, t);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var i = a[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (t.set(i.dataset.precedence, i), n = i);
        }
        n && t.set(null, n);
      }
      a = l.instance, i = a.getAttribute("data-precedence"), u = t.get(i) || n, u === n && t.set(null, a), t.set(i, a), this.count++, n = pc.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), l.state.loading |= 4;
    }
  }
  var Pa = {
    $$typeof: Te,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Iy(e, l, t, n, a, u, i, f, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vc(0), this.hiddenUpdates = Vc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function n0(e, l, t, n, a, u, i, f, h, p, M, R) {
    return e = new Iy(
      e,
      l,
      t,
      i,
      h,
      p,
      M,
      R,
      f
    ), l = 1, u === !0 && (l |= 24), u = Ml(3, null, null, l), e.current = u, u.stateNode = e, l = wi(), l.refCount++, e.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: l
    }, Ui(u), e;
  }
  function a0(e) {
    return e ? (e = Gn, e) : Gn;
  }
  function u0(e, l, t, n, a, u) {
    a = a0(a), n.context === null ? n.context = a : n.pendingContext = a, n = Bt(l), n.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (n.callback = u), t = Nt(e, n, l), t !== null && (Al(t, e, l), Ha(t, e, l));
  }
  function c0(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function If(e, l) {
    c0(e, l), (e = e.alternate) && c0(e, l);
  }
  function i0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = an(e, 67108864);
      l !== null && Al(l, e, 67108864), If(e, 67108864);
    }
  }
  function f0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Rl();
      l = Kc(l);
      var t = an(e, l);
      t !== null && Al(t, e, l), If(e, l);
    }
  }
  var Ec = !0;
  function Py(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = x.p;
    try {
      x.p = 2, Pf(e, l, t, n);
    } finally {
      x.p = u, _.T = a;
    }
  }
  function em(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = x.p;
    try {
      x.p = 8, Pf(e, l, t, n);
    } finally {
      x.p = u, _.T = a;
    }
  }
  function Pf(e, l, t, n) {
    if (Ec) {
      var a = eo(n);
      if (a === null)
        Lf(
          e,
          l,
          n,
          zc,
          t
        ), r0(e, n);
      else if (tm(
        a,
        e,
        l,
        t,
        n
      ))
        n.stopPropagation();
      else if (r0(e, n), l & 4 && -1 < lm.indexOf(e)) {
        for (; a !== null; ) {
          var u = On(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = dl(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var h = 1 << 31 - J(i);
                      f.entanglements[1] |= h, i &= ~h;
                    }
                    lt(u), (Se & 6) === 0 && (cc = fl() + 500, Ja(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = an(u, 2), f !== null && Al(f, u, 2), fc(), If(u, 2);
            }
          if (u = eo(n), u === null && Lf(
            e,
            l,
            n,
            zc,
            t
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Lf(
          e,
          l,
          n,
          null,
          t
        );
    }
  }
  function eo(e) {
    return e = li(e), lo(e);
  }
  var zc = null;
  function lo(e) {
    if (zc = null, e = Cn(e), e !== null) {
      var l = E(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = o(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = G(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return zc = e, null;
  }
  function o0(e) {
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
        switch (mu()) {
          case gu:
            return 2;
          case vu:
            return 8;
          case En:
          case w:
            return 32;
          case j:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var to = !1, Kt = null, Jt = null, kt = null, eu = /* @__PURE__ */ new Map(), lu = /* @__PURE__ */ new Map(), Wt = [], lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function r0(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Jt = null;
        break;
      case "mouseover":
      case "mouseout":
        kt = null;
        break;
      case "pointerover":
      case "pointerout":
        eu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        lu.delete(l.pointerId);
    }
  }
  function tu(e, l, t, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, l !== null && (l = On(l), l !== null && i0(l)), e) : (e.eventSystemFlags |= n, l = e.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), e);
  }
  function tm(e, l, t, n, a) {
    switch (l) {
      case "focusin":
        return Kt = tu(
          Kt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "dragenter":
        return Jt = tu(
          Jt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "mouseover":
        return kt = tu(
          kt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return eu.set(
          u,
          tu(
            eu.get(u) || null,
            e,
            l,
            t,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, lu.set(
          u,
          tu(
            lu.get(u) || null,
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
  function s0(e) {
    var l = Cn(e.target);
    if (l !== null) {
      var t = E(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = o(t), l !== null) {
            e.blockedOn = l, Co(e.priority, function() {
              f0(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = G(t), l !== null) {
            e.blockedOn = l, Co(e.priority, function() {
              f0(t);
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
  function Cc(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = eo(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        ei = n, t.target.dispatchEvent(n), ei = null;
      } else
        return l = On(t), l !== null && i0(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function d0(e, l, t) {
    Cc(e) && t.delete(l);
  }
  function nm() {
    to = !1, Kt !== null && Cc(Kt) && (Kt = null), Jt !== null && Cc(Jt) && (Jt = null), kt !== null && Cc(kt) && (kt = null), eu.forEach(d0), lu.forEach(d0);
  }
  function Oc(e, l) {
    e.blockedOn === l && (e.blockedOn = null, to || (to = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      nm
    )));
  }
  var Mc = null;
  function h0(e) {
    Mc !== e && (Mc = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Mc === e && (Mc = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], n = e[l + 1], a = e[l + 2];
          if (typeof n != "function") {
            if (lo(n || t) === null)
              continue;
            break;
          }
          var u = On(t);
          u !== null && (e.splice(l, 3), l -= 3, Pi(
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
  function ia(e) {
    function l(h) {
      return Oc(h, e);
    }
    Kt !== null && Oc(Kt, e), Jt !== null && Oc(Jt, e), kt !== null && Oc(kt, e), eu.forEach(l), lu.forEach(l);
    for (var t = 0; t < Wt.length; t++) {
      var n = Wt[t];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Wt.length && (t = Wt[0], t.blockedOn === null); )
      s0(t), t.blockedOn === null && Wt.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var a = t[n], u = t[n + 1], i = a[gl] || null;
        if (typeof u == "function")
          i || h0(t);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, i = u[gl] || null)
              f = i.formAction;
            else if (lo(a) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? t[n + 1] = f : (t.splice(n, 3), n -= 3), h0(t);
        }
      }
  }
  function y0() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return a = i;
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
  function no(e) {
    this._internalRoot = e;
  }
  _c.prototype.render = no.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var t = l.current, n = Rl();
    u0(t, n, e, l, null, null);
  }, _c.prototype.unmount = no.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      u0(e.current, 2, null, e, null, null), fc(), l[zn] = null;
    }
  };
  function _c(e) {
    this._internalRoot = e;
  }
  _c.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = zo();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Wt.length && l !== 0 && l < Wt[t].priority; t++) ;
      Wt.splice(t, 0, e), t === 0 && s0(e);
    }
  };
  var m0 = r.version;
  if (m0 !== "19.2.4")
    throw Error(
      s(
        527,
        m0,
        "19.2.4"
      )
    );
  x.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = T(l), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var am = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wc.isDisabled && wc.supportsFiber)
      try {
        Q = wc.inject(
          am
        ), N = wc;
      } catch {
      }
  }
  return au.createRoot = function(e, l) {
    if (!g(e)) throw Error(s(299));
    var t = !1, n = "", a = As, u = Es, i = zs;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = n0(
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
      i,
      y0
    ), e[zn] = l.current, xf(e), new no(l);
  }, au.hydrateRoot = function(e, l, t) {
    if (!g(e)) throw Error(s(299));
    var n = !1, a = "", u = As, i = Es, f = zs, h = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.formState !== void 0 && (h = t.formState)), l = n0(
      e,
      1,
      !0,
      l,
      t ?? null,
      n,
      a,
      h,
      u,
      i,
      f,
      y0
    ), l.context = a0(null), t = l.current, n = Rl(), n = Kc(n), a = Bt(n), a.callback = null, Nt(t, a, n), t = n, l.current.lanes = t, ha(l, t), lt(l), e[zn] = l.current, xf(e), new _c(l);
  }, au.version = "19.2.4", au;
}
var C0;
function ym() {
  if (C0) return uo.exports;
  C0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), uo.exports = hm(), uo.exports;
}
var mm = ym(), yl = ho();
const Ze = 960, Ct = 1240, q0 = "clawd_ui_word_solitaire_best", Bc = 5, yo = 132, Y0 = 92, gm = 30, vm = 22, Sm = 10, bm = 8, O0 = 116, pm = 132, Tm = 30, oa = [
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
  },
  {
    id: "crossed",
    name: "Crossed Wires",
    moveBudget: 67,
    tagline: "The clue cards start doing the heavy lifting here, because the surface words blur together faster.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "typography", label: "Typography", color: "#f0c886", clueIcon: "🔠", clueTitle: "Kerning", clueHint: "A typography clue card.", clueStyle: "wordOnly", words: ["Serif", "Glyph", "Ligature", "Baseline", "Typeface", "Colophon"] },
      { id: "perfumery", label: "Perfumery", color: "#efc58f", clueIcon: "🌸", clueTitle: "Attar", clueHint: "A perfume clue card.", clueStyle: "iconWord", words: ["Topnote", "Accord", "Drydown", "Sillage", "Resin", "Atomizer"] },
      { id: "navigation", label: "Navigation", color: "#e5d08a", clueIcon: "🧭", clueTitle: "Waypoint", clueHint: "A navigation clue card.", clueStyle: "iconWord", words: ["Bearing", "Heading", "Latitude", "Meridian", "Sextant", "Chartplotter"] },
      { id: "theatre", label: "Theatre", color: "#f2bf81", clueIcon: "🎭", clueTitle: "Spotlight", clueHint: "A theatre clue card.", clueStyle: "iconOnly", words: ["Understudy", "Stagehand", "Proscenium", "Matinee", "Blackout", "Callboard"] },
      { id: "publishing", label: "Publishing", color: "#edd48d", clueIcon: "📰", clueTitle: "Imprint", clueHint: "A publishing clue card.", clueStyle: "wordOnly", words: ["Byline", "Galley", "Foreword", "Copyedit", "Hardback", "Manuscript"] },
      { id: "glasswork", label: "Glasswork", color: "#9fd5e3", clueIcon: "🫧", clueTitle: "Furnace", clueHint: "A glasswork clue card.", clueStyle: "iconWord", words: ["Anneal", "Blowpipe", "Molten", "Goblet", "Flux", "Shard"] }
    ]
  },
  {
    id: "alias",
    name: "Alias Table",
    moveBudget: 65,
    tagline: "Shared professional vocabulary shows up all over this deal, so each clue title matters more than first instinct.",
    columnHeights: [4, 4, 4, 4, 4],
    categories: [
      { id: "finance", label: "Finance", color: "#eac57e", clueIcon: "💹", clueTitle: "Ledger", clueHint: "A finance clue card.", clueStyle: "iconOnly", words: ["Dividend", "Equity", "Audit", "Ticker", "Yield", "Bond"] },
      { id: "tailoring", label: "Tailoring", color: "#f2ca88", clueIcon: "🪡", clueTitle: "Pattern", clueHint: "A tailoring clue card.", clueStyle: "iconWord", words: ["Hem", "Seam", "Pleat", "Bodice", "Notion", "Thimble"] },
      { id: "weatherlab", label: "Weather", color: "#d8dced", clueIcon: "🌦️", clueTitle: "Barometer", clueHint: "A weather clue card.", clueStyle: "wordOnly", words: ["Isobar", "Dewpoint", "Front", "Gust", "Pressure", "Forecast"] },
      { id: "ceramics", label: "Ceramics", color: "#d8b090", clueIcon: "🏺", clueTitle: "Stoneware", clueHint: "A ceramics clue card.", clueStyle: "iconWord", words: ["Slip", "Glaze", "Bisque", "Grog", "Wedging", "Throwing"] },
      { id: "diplomacy", label: "Diplomacy", color: "#e8cf88", clueIcon: "🕊️", clueTitle: "Treaty", clueHint: "A diplomacy clue card.", clueStyle: "wordOnly", words: ["Envoy", "Embassy", "Ratify", "Sanction", "Summit", "Accord"] },
      { id: "audio", label: "Audio", color: "#c7b8ef", clueIcon: "🎚️", clueTitle: "Fader", clueHint: "An audio-engineering clue card.", clueStyle: "iconOnly", words: ["Gain", "Reverb", "Monitor", "Channel", "Limiter", "Crosstalk"] }
    ]
  },
  {
    id: "signal",
    name: "Signal Maze",
    moveBudget: 78,
    tagline: "Seven crowns, denser columns, and clue sets that lean on technical or metaphorical overlap.",
    columnHeights: [5, 4, 5, 4, 5],
    categories: [
      { id: "cartography", label: "Cartography", color: "#e3cd87", clueIcon: "🗺️", clueTitle: "Atlas", clueHint: "A cartography clue card.", clueStyle: "iconWord", words: ["Legend", "Contour", "Scale", "Toponym", "Inset", "Projection"] },
      { id: "beekeeping", label: "Beekeeping", color: "#f2d06f", clueIcon: "🐝", clueTitle: "Apiary", clueHint: "A beekeeping clue card.", clueStyle: "iconOnly", words: ["Brood", "Pollen", "Nectar", "Smoker", "Queencell", "Hexcomb"] },
      { id: "sailing", label: "Sailing", color: "#8cc7d8", clueIcon: "⛵", clueTitle: "Mainsail", clueHint: "A sailing clue card.", clueStyle: "wordOnly", words: ["Tiller", "Cleat", "Mooring", "Bilge", "Jib", "Starboard"] },
      { id: "rhetoric", label: "Rhetoric", color: "#efc58f", clueIcon: "🗣️", clueTitle: "Thesis", clueHint: "A rhetoric clue card.", clueStyle: "wordOnly", words: ["Premise", "Rebuttal", "Qualifier", "Appeal", "Counterclaim", "Inference"] },
      { id: "horology", label: "Horology", color: "#d7c59c", clueIcon: "🕰️", clueTitle: "Escapement", clueHint: "A horology clue card.", clueStyle: "iconWord", words: ["Balance", "Dial", "Pendulum", "Winding", "Bezel", "Minutehand"] },
      { id: "stagelight", label: "Stage Lighting", color: "#c9bbef", clueIcon: "💡", clueTitle: "Gelframe", clueHint: "A stage-lighting clue card.", clueStyle: "iconOnly", words: ["Dimmer", "Fresnel", "Catwalk", "Gobo", "Washlight", "Cueing"] },
      { id: "botanyhard", label: "Botany", color: "#9fd28d", clueIcon: "🌿", clueTitle: "Herbarium", clueHint: "A botany clue card.", clueStyle: "iconWord", words: ["Petiole", "Rhizome", "Frond", "Tendril", "Stamen", "Bulb"] }
    ]
  },
  {
    id: "fineprint",
    name: "Fine Print",
    moveBudget: 75,
    tagline: "This final hand-authored stretch pushes into abstract language, denser overlap, and clue cards that act like your whole compass.",
    columnHeights: [5, 5, 4, 5, 4],
    categories: [
      { id: "linguistics", label: "Linguistics", color: "#ead18d", clueIcon: "🗨️", clueTitle: "Phoneme", clueHint: "A linguistics clue card.", clueStyle: "wordOnly", words: ["Syntax", "Dialect", "Lexicon", "Morpheme", "Prosody", "Utterance"] },
      { id: "ecology", label: "Ecology", color: "#a8cf92", clueIcon: "🌱", clueTitle: "Watershed", clueHint: "An ecology clue card.", clueStyle: "iconWord", words: ["Canopy", "Runoff", "Habitat", "Loam", "Succession", "Wetland"] },
      { id: "astronomyhard", label: "Astronomy", color: "#b4b9ef", clueIcon: "🌌", clueTitle: "Perihelion", clueHint: "An astronomy clue card.", clueStyle: "iconOnly", words: ["Redshift", "Umbra", "Transit", "Pulsar", "Aphelion", "Parallax"] },
      { id: "architecture", label: "Architecture", color: "#d6bf97", clueIcon: "🏛️", clueTitle: "Atrium", clueHint: "An architecture clue card.", clueStyle: "wordOnly", words: ["Cantilever", "Cornice", "Facade", "Lintel", "Parapet", "Threshold"] },
      { id: "chess", label: "Chess", color: "#c4c6d4", clueIcon: "♟️", clueTitle: "Endgame", clueHint: "A chess clue card.", clueStyle: "iconWord", words: ["Gambit", "Castling", "File", "Fork", "Rook", "Zugzwang"] },
      { id: "law", label: "Law", color: "#d0b985", clueIcon: "⚖️", clueTitle: "Precedent", clueHint: "A law clue card.", clueStyle: "wordOnly", words: ["Dissent", "Brief", "Clause", "Tort", "Injunction", "Statute"] },
      { id: "jetstream", label: "Meteorology", color: "#b6d7e7", clueIcon: "🌬️", clueTitle: "Jetstream", clueHint: "A meteorology clue card.", clueStyle: "iconWord", words: ["Shear", "Cyclone", "Isotherm", "Updraft", "Baroclinic", "Occlusion"] }
    ]
  }
], Am = [
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
  { id: "gardenparty", label: "Garden Party", color: "#e7d78f", clueIcon: "🫖", clueTitle: "Gazebo", clueHint: "A garden-party clue card.", clueStyle: "iconWord", wordIcons: { Teapot: "🫖", Linen: "🧵", Pastry: "🥐", Centerpiece: "💐", RSVP: "✉️", Stringlights: "💡" }, iconOnlyWords: ["Teapot"], words: ["Teapot", "Linen", "Pastry", "Centerpiece", "RSVP", "Stringlights"] },
  { id: "library", label: "Library", color: "#d7c79c", clueIcon: "📚", clueTitle: "Stacks", clueHint: "A library clue card.", clueStyle: "iconWord", words: ["Bookmark", "Spine", "Periodical", "Checkout", "Shelfmark", "Indexcard"] },
  { id: "florist", label: "Florist", color: "#f2c8d8", clueIcon: "💐", clueTitle: "Bouquet", clueHint: "A florist clue card.", clueStyle: "iconOnly", words: ["Corsage", "Peony", "Ribbon", "Stemcutter", "Vase", "Pollenpress"] },
  { id: "carpentry", label: "Carpentry", color: "#d7b38f", clueIcon: "🪚", clueTitle: "Workbench", clueHint: "A carpentry clue card.", clueStyle: "iconWord", words: ["Plane", "Mitre", "Sawdust", "Clamp", "Chisel", "Joinery"] },
  { id: "journalism", label: "Journalism", color: "#efc57f", clueIcon: "🗞️", clueTitle: "Deadline", clueHint: "A journalism clue card.", clueStyle: "wordOnly", words: ["Lede", "Dateline", "Masthead", "Stringer", "Newswire", "Notebook"] },
  { id: "birding", label: "Birding", color: "#b7d9a2", clueIcon: "🦉", clueTitle: "Fieldguide", clueHint: "A birding clue card.", clueStyle: "iconOnly", words: ["Plumage", "Warbler", "Binoculars", "Perch", "Songcall", "Hide"] },
  { id: "brewery", label: "Brewery", color: "#dcb26d", clueIcon: "🍺", clueTitle: "Taproom", clueHint: "A brewery clue card.", clueStyle: "iconWord", words: ["Fermenter", "Kegline", "Hops", "Mash", "Foam", "Pilsner"] },
  { id: "forensics", label: "Forensics", color: "#b9c8d9", clueIcon: "🔬", clueTitle: "Trace", clueHint: "A forensics clue card.", clueStyle: "wordOnly", words: ["Fiber", "Swab", "Residue", "Luminol", "Fingerprint", "Chainofcustody"] },
  { id: "postal", label: "Postal", color: "#d8b0ad", clueIcon: "✉️", clueTitle: "Postmark", clueHint: "A postal clue card.", clueStyle: "iconOnly", words: ["Envelope", "Parcel", "Mailbox", "Routing", "Stamp", "Airmail"] },
  { id: "orchard", label: "Orchard", color: "#b8d38a", clueIcon: "🍎", clueTitle: "Orchard", clueHint: "An orchard clue card.", clueStyle: "iconWord", words: ["Bushel", "Grafting", "Ciderpress", "Windfall", "Blossom", "Crate"] },
  { id: "logic", label: "Logic", color: "#d7c6ee", clueIcon: "📐", clueTitle: "Proof", clueHint: "A logic clue card.", clueStyle: "wordOnly", words: ["Axiom", "Lemma", "Corollary", "Theorem", "Postulate", "Deduction"] }
], M0 = ["Neon", "Hidden", "Silver", "Golden", "Velvet", "Shadow", "Signal", "Lantern", "Cipher", "Winding", "Midnight", "Crimson"], _0 = ["Crossroads", "Archive", "Promenade", "Relay", "Mix", "Circuit", "Carnival", "Station", "Harbor", "Mosaic", "Vault", "Parade"], w0 = [
  "A generated deal from the wider category vault.",
  "Fresh clue mixes from the expanding category pool.",
  "New associations every round, with a denser reserve behind them.",
  "A remixed board pulled from the larger rotating category set."
], D0 = /* @__PURE__ */ new Map();
function Em(c) {
  return Array.from(new Map(c.map((r) => [r.id, r])).values());
}
const zm = Em([...oa.flatMap((c) => c.categories), ...Am]);
function Cm(c, r) {
  const d = [4, 4, 4, 4, 4], s = r === 8 ? 5 : 4, g = bo([0, 1, 2, 3, 4], 49734321 + c * 97);
  for (let E = 0; E < s; E += 1) d[g[E % g.length]] += 1;
  return d;
}
function Om(c, r) {
  const d = c * 7, s = d - r.reduce((g, E) => g + E, 0);
  return d + s + 8;
}
function Mm(c) {
  const r = D0.get(c);
  if (r) return r;
  let d = 1831565813 + c * 977;
  const s = c % 3 === 0 ? 8 : 7, g = bo(zm, d).slice(0, s), E = Cm(c, s), o = Om(s, E);
  let G;
  [d, G] = du(d);
  const O = M0[Math.floor(G * M0.length)];
  [d, G] = du(d);
  const T = _0[Math.floor(G * _0.length)];
  [d, G] = du(d);
  const S = w0[Math.floor(G * w0.length)], B = {
    id: `generated-${c + 1}`,
    name: `Deal ${c + 1}: ${O} ${T}`,
    moveBudget: o,
    categories: g,
    columnHeights: E,
    tagline: S
  };
  return D0.set(c, B), B;
}
function Wl(c) {
  return c < oa.length ? oa[c] : Mm(c);
}
function _m(c) {
  const r = c * 1664525 + 1013904223 >>> 0;
  return r === 0 ? 1 : r;
}
function du(c) {
  const r = _m(c);
  return [r, r / 4294967295];
}
function wm() {
  if (typeof window > "u") return 0;
  const c = window.localStorage.getItem(q0), r = c == null ? 0 : Number.parseInt(c, 10);
  return Number.isFinite(r) ? Math.max(0, r) : 0;
}
function Dm(c) {
  typeof window < "u" && window.localStorage.setItem(q0, String(c));
}
function jc(c) {
  return c.map((r) => r.map((d) => ({ ...d })));
}
function Gc(c) {
  return Object.fromEntries(Object.entries(c).map(([r, d]) => [r, d.map((s) => ({ ...s }))]));
}
function H0(c) {
  return c.map((r) => ({ ...r, card: { ...r.card } }));
}
function R0(c) {
  return c.map((r) => ({ ...r }));
}
function U0(c) {
  return c.map((r) => ({ ...r }));
}
function xc(c) {
  return [...c];
}
function Lc(c) {
  return [...c];
}
function tt(c) {
  return c ? c.kind === "waste" ? "waste" : c.kind === "clue" ? "clue" : `column-${c.index}` : "none";
}
function je(c) {
  return c[c.length - 1] ?? null;
}
function Hm(c) {
  return { ...c };
}
function qc(c) {
  return [...c];
}
function It(c, r) {
  return r ? c.categories.find((d) => d.id === r) ?? null : null;
}
function Nc(c, r) {
  return c.foundationOrder.findIndex((d) => d === r);
}
function X0(c, r) {
  return r.categories.filter((d) => c.foundations[d.id].length === d.words.length).length;
}
function Q0(c, r) {
  const d = c.wordIcons?.[r], s = c.iconOnlyWords?.includes(r) ? "iconOnly" : d ? "iconWord" : "word";
  return { id: `${c.id}-${r}`, label: r, categoryId: c.id, color: c.color, role: "word", faceIcon: d, faceStyle: s };
}
function Rm(c) {
  const r = c.clueStyle === "iconOnly" ? "iconOnly" : c.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${c.id}-clue`, label: c.clueTitle, categoryId: c.id, color: c.color, role: "clue", faceIcon: c.clueIcon, faceStyle: r };
}
function mo(c, r) {
  return Math.max(0, Math.min(c.hiddenCounts[r] ?? 0, c.columns[r].length));
}
function Z0(c, r) {
  return c.columns[r].slice(mo(c, r));
}
function pn(c) {
  return c[0] ?? null;
}
function Ft(c, r) {
  if (r.kind === "clue") return [];
  if (r.kind === "waste") {
    const o = je(c.waste);
    return o ? [o] : [];
  }
  const d = Z0(c, r.index);
  if (!d.length) return [];
  const s = d[d.length - 1];
  if (s.role === "clue") return [s];
  const g = s.categoryId;
  let E = d.length - 1;
  for (; E - 1 >= 0 && d[E - 1].role === "word" && d[E - 1].categoryId === g; ) E -= 1;
  return E - 1 >= 0 && d[E - 1].role === "clue" && d[E - 1].categoryId === g && (E -= 1), d.slice(E);
}
function V0(c, r) {
  const d = c.columns[r];
  if (!d.length) {
    c.hiddenCounts[r] = 0;
    return;
  }
  c.hiddenCounts[r] = Math.max(0, Math.min(c.hiddenCounts[r] ?? 0, d.length - 1));
}
function Um(c, r) {
  V0(c, r), c.columns[r].length && (c.hiddenCounts[r] ?? 0) >= c.columns[r].length && (c.hiddenCounts[r] = c.columns[r].length - 1);
}
function Bm(c) {
  return {
    columns: jc(c.columns),
    hiddenCounts: qc(c.hiddenCounts),
    reserve: [...c.reserve],
    waste: [...c.waste],
    foundations: Gc(c.foundations),
    foundationOrder: xc(c.foundationOrder),
    clueDeck: Lc(c.clueDeck),
    activeClueCategoryId: c.activeClueCategoryId,
    selectedSource: c.selectedSource ? { ...c.selectedSource } : null,
    movesLeft: c.movesLeft,
    score: c.score,
    streak: c.streak,
    message: c.message,
    mode: c.mode,
    boosters: Hm(c.boosters)
  };
}
function fa(c) {
  c.history = [Bm(c), ...c.history].slice(0, 24);
}
function Nm(c) {
  const r = c.history[0];
  return !r || c.boosters.undo <= 0 ? !1 : (c.columns = jc(r.columns), c.hiddenCounts = qc(r.hiddenCounts), c.reserve = [...r.reserve], c.waste = [...r.waste], c.foundations = Gc(r.foundations), c.foundationOrder = xc(r.foundationOrder), c.clueDeck = Lc(r.clueDeck), c.activeClueCategoryId = r.activeClueCategoryId, c.selectedSource = r.selectedSource ? { ...r.selectedSource } : null, c.movesLeft = r.movesLeft, c.score = r.score, c.streak = r.streak, c.message = "Undo used.", c.mode = r.mode, c.boosters = { ...r.boosters, undo: Math.max(0, c.boosters.undo - 1) }, c.history = c.history.slice(1), !0);
}
function uu(c, r, d = 0) {
  const s = Wl(c), g = [];
  for (const C of s.categories) {
    g.push(Rm(C));
    for (const P of C.words) g.push(Q0(C, P));
  }
  let E = 5370206 + c * 131;
  const o = [...g];
  for (let C = o.length - 1; C > 0; C -= 1) {
    let P;
    [E, P] = du(E);
    const oe = Math.floor(P * (C + 1));
    [o[C], o[oe]] = [o[oe], o[C]];
  }
  const G = [];
  let O = 0;
  for (const C of s.columnHeights)
    G.push(o.slice(O, O + C)), O += C;
  const T = G.map((C) => Math.max(0, C.length - 1)), S = o.slice(O).reverse(), B = Object.fromEntries(s.categories.map((C) => [C.id, []]));
  return {
    mode: "title",
    levelIndex: c,
    columns: G,
    hiddenCounts: T,
    reserve: S,
    waste: [],
    foundations: B,
    foundationOrder: Array.from({ length: Bc }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: s.moveBudget,
    score: d,
    streak: 0,
    bestScore: wm(),
    message: "Uncover clue cards from the deal, claim crowns, and stack matching words by association.",
    fullscreen: r,
    particles: [],
    motionCards: [],
    feedbackTexts: [],
    foundationPulses: [],
    history: [],
    boosters: { undo: 1, joker: 0, shuffle: 1 }
  };
}
function go(c) {
  const r = [];
  c.columns.forEach((E, o) => {
    const G = { kind: "column", index: o }, O = Ft(c, G), T = pn(O), S = je(O);
    T && S && r.push({ source: G, card: T, topCard: S, run: O });
  });
  const d = Ft(c, { kind: "waste" }), s = pn(d), g = je(d);
  return s && g && r.push({ source: { kind: "waste" }, card: s, topCard: g, run: d }), r;
}
function vo(c, r, d) {
  return d?.kind === "column" && r === void 0 ? !1 : r.length === 0 || je(r)?.categoryId === c.categoryId;
}
function So(c, r = Wl(c.levelIndex)) {
  const d = go(c);
  let s = !1, g = !1, E = !1, o = !1, G = !1, O = !1, T = !1, S = "", B = "";
  for (const { source: C, card: P, topCard: oe } of d) {
    const ze = It(r, P.categoryId);
    if (!ze) continue;
    const W = c.foundations[P.categoryId].length < ze.words.length;
    P.role === "clue" && W && c.foundationOrder.includes(null) && (s = !0, B || (B = `${P.label} can claim an empty crown.`));
    const $ = Nc(c, oe.categoryId);
    oe.role === "word" && $ >= 0 && W && (g = !0, S || (S = `${oe.label} matches the ${ze.clueTitle} clue.`));
    for (let Ve = 0; Ve < c.columns.length; Ve += 1)
      if (!(C.kind === "column" && C.index === Ve) && vo(P, c.columns[Ve], C)) {
        E = !0, S || (S = `${P.label} can park on column ${Ve + 1}.`);
        break;
      }
    oe.role === "word" && c.boosters.joker > 0 && $ >= 0 && W && (G = !0, S || (S = `Use Joker on ${oe.label} if you want to preserve the board.`));
  }
  return c.reserve.length > 0 && (o = !0, S || (S = "Draw from the reserve pile.")), c.boosters.shuffle > 0 && c.reserve.length + c.waste.length > 0 && (O = !0, S || (S = "Use Shuffle to recycle the reserve and waste piles.")), c.boosters.undo > 0 && c.history.length > 0 && (T = !0, S || (S = "Use Undo to back out of the dead end.")), s && B && (S = B), {
    cluePlacement: s,
    foundationSort: g,
    columnParking: E,
    reserveDraw: o,
    joker: G,
    shuffle: O,
    undo: T,
    any: s || g || E || o || G || O || T,
    hint: S || "No legal moves remain."
  };
}
function Dc(c) {
  const r = Wl(c.levelIndex);
  if (r.categories.every((g) => c.foundations[g.id].length === g.words.length)) {
    c.mode = "won", c.message = "All category stacks cleared. Clean round.", c.score > c.bestScore && (c.bestScore = c.score, Dm(c.score));
    return;
  }
  if (c.movesLeft <= 0) {
    c.mode = "lost", c.message = "Out of moves. That deal is dead.";
    return;
  }
  So(c, r).any || (c.mode = "lost", c.message = "No legal moves remain. That deal is dead.");
}
function Hc(c, r, d) {
  if (r.kind === "clue") return [];
  if (r.kind === "waste") {
    const g = c.waste.pop();
    return g ? [g] : [];
  }
  const s = c.columns[r.index].splice(Math.max(0, c.columns[r.index].length - d), d);
  return Um(c, r.index), s;
}
function ro(c, r, d, s) {
  for (let g = 0; g < 10; g += 1) {
    const E = g / 10 * Math.PI * 2;
    c.particles.push({ x: r, y: d, vx: Math.cos(E) * (1.2 + g * 0.12), vy: Math.sin(E) * (1.2 + g * 0.1) - 1.8, size: 8 + g % 3, life: 460, maxLife: 460, color: s });
  }
}
function zt(c, r, d, s, g, E = 0.2) {
  c.feedbackTexts.push({ text: r, x: d, y: s, life: 720, maxLife: 720, color: g, scale: E });
}
function cu(c, r, d) {
  c.foundationPulses = c.foundationPulses.filter((s) => s.slotIndex !== r), c.foundationPulses.push({ slotIndex: r, color: d, life: 520, maxLife: 520 });
}
function iu(c, r, d, s, g) {
  c.motionCards.push({
    card: r,
    fromX: d.x,
    fromY: d.y,
    toX: s.x,
    toY: s.y,
    w: s.w,
    h: s.h,
    life: 420,
    maxLife: 420,
    arc: g ? 14 : 22,
    compact: g
  });
}
function jm(c) {
  return So(c).hint;
}
function bo(c, r) {
  const d = [...c];
  let s = r;
  for (let g = d.length - 1; g > 0; g -= 1) {
    let E;
    [s, E] = du(s);
    const o = Math.floor(E * (g + 1));
    [d[g], d[o]] = [d[o], d[g]];
  }
  return d;
}
function Ot(c, r, d) {
  return c >= d.x && c <= d.x + d.w && r >= d.y && r <= d.y + d.h;
}
function qe(c) {
  const s = Ze - 502 - 28, g = Math.max(72, Math.min(84, Math.floor((s - 8 * Math.max(0, Bc - 1)) / Bc))), E = c.columnHeights.length >= 6 ? 116 : 136, o = c.columnHeights.length >= 6 ? 18 : 20, G = c.columnHeights.length * E + Math.max(0, c.columnHeights.length - 1) * o, O = Math.round((Ze - G) / 2);
  return {
    reserve: { x: 92, y: 168, w: 102, h: 142 },
    waste: { x: 224, y: 168, w: 114, h: 150 },
    clue: { x: 360, y: 152, w: 124, h: 170 },
    foundations: Array.from({ length: Bc }, (T, S) => ({ x: 502 + S * (g + 8), y: 112, w: g, h: 214 })),
    columns: c.columnHeights.map((T, S) => ({ x: O + S * (E + o), y: 360, w: E, h: 638 }))
  };
}
function Rc(c, r, d) {
  const s = c.getBoundingClientRect();
  return !s.width || !s.height ? null : {
    x: (r - s.left) / s.width * Ze,
    y: (d - s.top) / s.height * Ct
  };
}
function Sn() {
  if (typeof window > "u") return { width: 1440, height: 960 };
  const c = window.visualViewport;
  return {
    width: Math.round(c?.width ?? window.innerWidth),
    height: Math.round(c?.height ?? window.innerHeight)
  };
}
function B0(c) {
  const r = c;
  return c.fullscreenElement ?? r.webkitFullscreenElement ?? null;
}
function Gm(c) {
  if (!c) return !1;
  const r = c;
  return typeof r.requestFullscreen == "function" || typeof r.webkitRequestFullscreen == "function";
}
async function xm(c) {
  const r = c;
  return typeof r.requestFullscreen == "function" ? (await r.requestFullscreen(), !0) : typeof r.webkitRequestFullscreen == "function" ? (await r.webkitRequestFullscreen(), !0) : !1;
}
async function Lm(c) {
  const r = c;
  return typeof c.exitFullscreen == "function" ? (await c.exitFullscreen(), !0) : typeof r.webkitExitFullscreen == "function" ? (await r.webkitExitFullscreen(), !0) : !1;
}
function qm(c, r, d, s) {
  const g = qe(c);
  if (je(r.waste) && Ot(d, s, g.waste)) return { kind: "waste" };
  if (r.activeClueCategoryId && Ot(d, s, g.clue)) return { kind: "clue" };
  for (let o = r.columns.length - 1; o >= 0; o -= 1) {
    if (!r.columns[o].length) continue;
    const O = Xm(c, r, o);
    if (O && Ot(d, s, O))
      return { kind: "column", index: o };
  }
  return null;
}
function N0(c, r, d, s, g, E) {
  const o = pn(s), G = je(s), O = qe(c);
  for (let T = 0; T < O.foundations.length; T += 1) {
    if (!Ot(g, E, O.foundations[T])) continue;
    if (o?.role === "clue") {
      if (r.foundationOrder[T] == null) return { kind: "foundation", index: T };
      continue;
    }
    const S = r.foundationOrder[T];
    if (S && G?.role === "word" && G.categoryId === S) return { kind: "foundation", index: T };
  }
  for (let T = 0; T < O.columns.length; T += 1)
    if (Ot(g, E, O.columns[T])) {
      if (d.kind === "column" && d.index === T) return null;
      if (o && vo(o, r.columns[T], d)) return { kind: "column", index: T };
    }
  return null;
}
function Xc(c, r, d) {
  const s = qe(c).columns[d], g = r.columns[d], { hiddenCount: E, hiddenStep: o, visibleStep: G } = Ym(c, r, d), O = [];
  let T = s.y + 24;
  return g.forEach((S, B) => {
    const C = B < E, P = B === g.length - 1;
    O.push({ x: s.x + 10, y: T, w: s.w - 20, h: C ? Y0 : yo, hidden: C, top: P }), T += C ? o : G;
  }), O;
}
function Ym(c, r, d) {
  const s = qe(c).columns[d], g = r.columns[d], E = mo(r, d), o = Math.max(0, g.length - E), G = s.h - 48, O = o > 0 ? yo : Y0;
  let T = E > 0 ? vm : 0, S = o > 1 ? gm : 0;
  const B = () => E * T + Math.max(0, o - 1) * S + O;
  if (B() > G && E > 0) {
    const C = Math.max(0, G - O - Math.max(0, o - 1) * S);
    T = Math.max(bm, Math.floor(C / E));
  }
  if (B() > G && o > 1) {
    const C = Math.max(0, G - O - E * T);
    S = Math.max(Sm, Math.floor(C / (o - 1)));
  }
  if (B() > G && E > 0) {
    const C = Math.max(0, G - O - Math.max(0, o - 1) * S);
    T = Math.max(4, Math.floor(C / E));
  }
  if (B() > G && o > 1) {
    const C = Math.max(0, G - O - E * T);
    S = Math.max(6, Math.floor(C / (o - 1)));
  }
  return { hiddenCount: E, visibleCount: o, hiddenStep: T, visibleStep: S };
}
function Xm(c, r, d) {
  const s = Xc(c, r, d).filter((o) => !o.hidden);
  if (!s.length) return null;
  const g = s[0], E = s[s.length - 1];
  return {
    x: g.x,
    y: g.y,
    w: g.w,
    h: E.y + E.h - g.y
  };
}
function Uc(c, r, d, s) {
  return d.kind === "clue" ? [{ x: qe(c).clue.x, y: qe(c).clue.y, w: qe(c).clue.w, h: qe(c).clue.h }] : d.kind === "waste" ? [{ x: qe(c).waste.x, y: qe(c).waste.y, w: qe(c).waste.w, h: qe(c).waste.h }] : Xc(c, r, d.index).slice(-s);
}
function Qm(c, r, d, s) {
  return Xc(c, r, d).slice(-s);
}
function su(c, r, d) {
  const s = qe(c).foundations[r], g = Math.min(Math.max(d, 0), 3), E = g > 0 ? g - 1 : 0;
  return {
    x: s.x + 14 + E * 3,
    y: s.y + 126,
    w: s.w - 28,
    h: 54
  };
}
function j0(c, r, d) {
  const s = r.foundationOrder[d], g = s ? r.foundations[s] : [];
  return su(c, d, g.length);
}
function G0(c, r) {
  const d = qe(c).foundations[r];
  return { x: d.x + 10, y: d.y + 10, w: d.w - 20, h: 104 };
}
function Zm(c) {
  const r = Wl(c.levelIndex), d = So(c, r), s = go(c).filter(({ card: g }) => g.role === "clue").map(({ source: g, card: E }) => ({ source: tt(g), label: E.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: c.mode,
    levelNumber: c.levelIndex + 1,
    dealType: c.levelIndex < oa.length ? "curated" : "generated",
    level: r.name,
    tagline: r.tagline,
    totalCategories: r.categories.length,
    crownSlots: c.foundationOrder.length,
    completedCategories: X0(c, r),
    movesLeft: c.movesLeft,
    score: c.score,
    streak: c.streak,
    selectedSource: tt(c.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: s,
    reserveCount: c.reserve.length,
    wasteTop: je(c.waste)?.label ?? null,
    foundations: c.foundationOrder.map((g, E) => ({
      slot: E,
      clueIcon: It(r, g)?.clueIcon ?? null,
      clueTitle: It(r, g)?.clueTitle ?? null,
      count: g ? c.foundations[g].length : 0,
      words: g ? c.foundations[g].map((o) => o.label) : []
    })),
    columns: c.columns.map((g, E) => ({
      index: E,
      count: g.length,
      hidden: c.hiddenCounts[E] ?? 0,
      top: je(g)?.label ?? null,
      topRole: je(g)?.role ?? null,
      topDisplay: je(g)?.faceStyle === "iconOnly" ? je(g)?.faceIcon ?? je(g)?.label ?? null : je(g)?.label ?? null,
      revealed: Z0(c, E).map((o) => ({ label: o.label, role: o.role, display: o.faceStyle === "iconOnly" ? o.faceIcon ?? o.label : o.label, faceStyle: o.faceStyle ?? "word" }))
    })),
    boosters: c.boosters,
    actions: d,
    animations: { motionCards: c.motionCards.length, feedbackTexts: c.feedbackTexts.length, foundationPulses: c.foundationPulses.length },
    message: c.message,
    fullscreen: c.fullscreen
  });
}
function we(c, r, d, s, g, E) {
  c.beginPath(), c.moveTo(r + E, d), c.arcTo(r + s, d, r + s, d + g, E), c.arcTo(r + s, d + g, r, d + g, E), c.arcTo(r, d + g, r, d, E), c.arcTo(r, d, r + s, d, E), c.closePath();
}
function fu(c, r, d, s, g, E, o, G = "#10302a") {
  c.fillStyle = E, we(c, r, d, s, g, g / 2), c.fill(), c.fillStyle = G, c.font = "700 16px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText(o, r + s / 2, d + g / 2 + 6);
}
function Vm(c, r, d, s, g, E, o) {
  for (let G = s; G >= g; G -= 1)
    if (c.font = `${E} ${G}px ${o}`, c.measureText(r).width <= d) return G;
  return g;
}
function so(c, r, d, s, g, E, o, G, O) {
  const T = Vm(c, r, g, E, o, G, O);
  return c.font = `${G} ${T}px ${O}`, c.fillText(r, d, s), T;
}
function Km(c, r, d, s, g, E) {
  Yc(c, r, d, s, g, 18, 0.26);
  const o = c.createLinearGradient(r, d, r, d + g);
  o.addColorStop(0, "#fff2c8"), o.addColorStop(1, "#efbf58"), c.fillStyle = o, we(c, r, d, s, g, 18), c.fill(), c.strokeStyle = "rgba(138, 95, 16, 0.38)", c.lineWidth = 2, c.stroke(), c.fillStyle = "rgba(255,255,255,0.3)", we(c, r + 10, d + 10, s - 20, 22, 11), c.fill(), c.fillStyle = "#7b5310", c.font = "800 13px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText("CROWN", r + s / 2, d + 26), c.fillStyle = "#7b5310", E.clueStyle !== "wordOnly" && (c.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(E.clueIcon, r + s / 2, E.clueStyle === "iconOnly" ? d + 76 : d + 64)), E.clueStyle !== "iconOnly" && so(
    c,
    E.clueTitle,
    r + s / 2,
    E.clueStyle === "wordOnly" ? d + 76 : d + 98,
    s - 18,
    E.clueStyle === "wordOnly" ? 24 : 17,
    E.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function Yc(c, r, d, s, g, E = 18, o = 0.28) {
  c.save(), c.shadowColor = `rgba(4, 14, 22, ${o})`, c.shadowBlur = E, c.shadowOffsetY = 10, c.fillStyle = "rgba(0,0,0,0.01)", we(c, r, d, s, g, 20), c.fill(), c.restore();
}
function ou(c, r, d, s, g) {
  Yc(c, r, d, s, g, 16, 0.24);
  const E = c.createLinearGradient(r, d, r + s, d + g);
  E.addColorStop(0, "#4874b9"), E.addColorStop(1, "#254d83"), c.fillStyle = E, we(c, r, d, s, g, 18), c.fill(), c.strokeStyle = "rgba(255,255,255,0.3)", c.lineWidth = 2, c.stroke(), c.strokeStyle = "rgba(255,255,255,0.22)", c.lineWidth = 1.5, we(c, r + 8, d + 8, s - 16, g - 16, 14), c.stroke(), c.fillStyle = "rgba(255,255,255,0.18)";
  for (let o = 0; o < 3; o += 1)
    for (let G = 0; G < 2; G += 1) {
      const O = r + 26 + G * 34, T = d + 24 + o * 26;
      we(c, O, T, 18, 12, 6), c.fill();
    }
}
function ru(c, r, d, s, g, E, o, G = !1) {
  const O = G || g <= 86;
  if (E.role === "clue") {
    Yc(c, r, d, s, g, o ? 18 : 14, o ? 0.3 : 0.24);
    const B = c.createLinearGradient(r, d, r, d + g);
    B.addColorStop(0, "#fff2c8"), B.addColorStop(1, "#efbf58"), c.fillStyle = B, we(c, r, d, s, g, O ? 14 : 18), c.fill(), c.strokeStyle = o ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", c.lineWidth = o ? 3 : 2, c.stroke(), c.fillStyle = "rgba(255,255,255,0.3)", we(c, r + 8, d + 8, s - 16, O ? 14 : 18, 12), c.fill(), c.fillStyle = "#7b5310", c.textAlign = "center", c.font = O ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", c.fillText("CLUE", r + s / 2, d + (O ? 18 : 26)), E.faceStyle !== "word" && E.faceIcon && (c.font = O ? E.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(E.faceIcon, r + s / 2, d + (E.faceStyle === "iconOnly" ? O ? 40 : 50 : O ? 34 : 38))), E.faceStyle !== "iconOnly" && so(
      c,
      E.label,
      r + s / 2,
      d + (E.faceStyle === "word" ? O ? 46 : 54 : O ? 52 : 62),
      s - (O ? 16 : 22),
      O ? 10 : 18,
      O ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), O || (c.font = "600 11px Trebuchet MS, sans-serif", c.fillStyle = "rgba(123,83,16,0.74)", c.fillText("CLAIM A CROWN", r + s / 2, d + g - 12));
    return;
  }
  Yc(c, r, d, s, g, o ? 18 : 14, o ? 0.28 : 0.22);
  const T = c.createLinearGradient(r, d, r, d + g);
  T.addColorStop(0, "#fffef8"), T.addColorStop(1, "#f4efe4"), c.fillStyle = T, we(c, r, d, s, g, O ? 14 : 18), c.fill(), c.strokeStyle = o ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", c.lineWidth = o ? 3 : 2, c.stroke();
  const S = c.createLinearGradient(r, d + 8, r + s, d + 8);
  S.addColorStop(0, "#f3d9a7"), S.addColorStop(1, "#e8c77f"), c.fillStyle = S, we(c, r + 8, d + 8, s - 16, O ? 14 : 18, 12), c.fill(), c.fillStyle = "#102422", c.textAlign = "center", E.faceStyle === "iconOnly" && E.faceIcon ? (c.font = O ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(E.faceIcon, r + s / 2, d + (O ? 42 : 50)), O || (c.font = "600 11px Trebuchet MS, sans-serif", c.fillStyle = "rgba(16,36,34,0.42)", c.fillText("IMAGE CARD", r + s / 2, d + 66))) : (E.faceStyle === "iconWord" && E.faceIcon && (c.font = O ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(E.faceIcon, r + s / 2, d + (O ? 27 : 28))), so(
    c,
    E.label,
    r + s / 2,
    d + (O ? 46 : E.faceStyle === "iconWord" ? 52 : 44),
    s - (O ? 16 : 22),
    O ? 12 : 19,
    O ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), O || (c.font = "600 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(16,36,34,0.4)", c.fillText(E.faceStyle === "iconWord" ? "ICON CARD" : "WORD", r + s / 2, d + 64)));
}
function x0(c) {
  return 1 - (1 - c) ** 3;
}
function Jm(c, r, d) {
  const s = Wl(r.levelIndex), g = qe(s);
  c.clearRect(0, 0, Ze, Ct);
  const E = c.createLinearGradient(0, 0, 0, Ct);
  E.addColorStop(0, "#246a61"), E.addColorStop(0.48, "#154642"), E.addColorStop(1, "#092225"), c.fillStyle = E, c.fillRect(0, 0, Ze, Ct);
  const o = c.createLinearGradient(0, 0, Ze, Ct);
  o.addColorStop(0, "rgba(255,255,255,0.025)"), o.addColorStop(1, "rgba(255,255,255,0)"), c.fillStyle = o;
  for (let S = 0; S < 7; S += 1)
    for (let B = 0; B < 5; B += 1)
      we(c, 18 + B * 188, 18 + S * 168, 120, 72, 24), c.fill();
  c.save();
  const G = c.createRadialGradient(128, 112, 10, 128, 112, 420);
  G.addColorStop(0, "rgba(211, 255, 231, 0.24)"), G.addColorStop(1, "rgba(211, 255, 231, 0)"), c.fillStyle = G, c.fillRect(0, 0, Ze, Ct);
  const O = c.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (O.addColorStop(0, "rgba(255, 226, 164, 0.2)"), O.addColorStop(1, "rgba(255, 226, 164, 0)"), c.fillStyle = O, c.fillRect(0, 0, Ze, Ct), c.restore(), c.fillStyle = "#f7fff9", c.textAlign = "left", c.font = "800 28px Trebuchet MS, sans-serif", c.fillText(s.name, 76, 58), c.font = "600 15px Trebuchet MS, sans-serif", c.fillStyle = "rgba(247,255,249,0.76)", c.fillText(s.tagline, 76, 84), we(c, 78, 108, 286, 228, 32), c.fillStyle = "rgba(4,16,20,0.3)", c.fill(), fu(c, 102, 124, 110, 34, "rgba(255,255,255,0.12)", "Reserve", "#eff8f3"), fu(c, 240, 124, 92, 34, "rgba(255,255,255,0.12)", "Waste", "#eff8f3"), r.reserve.length ? (ou(c, g.reserve.x, g.reserve.y + 10, g.reserve.w, g.reserve.h), ou(c, g.reserve.x + 6, g.reserve.y + 4, g.reserve.w, g.reserve.h), ou(c, g.reserve.x + 12, g.reserve.y - 2, g.reserve.w, g.reserve.h), fu(c, g.reserve.x + 24, g.reserve.y + 92, 74, 34, "#ffe59f", String(r.reserve.length))) : (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), we(c, g.reserve.x + 12, g.reserve.y, g.reserve.w, g.reserve.h, 20), c.stroke(), c.setLineDash([])), r.waste.length) {
    const S = je(r.waste);
    (r.waste.length > 1 || d?.source.kind === "waste" && d.moved) && ou(c, g.waste.x + 6, g.waste.y + 4, g.reserve.w, g.reserve.h), d?.source.kind === "waste" && d.moved || ru(c, g.waste.x, g.waste.y, g.waste.w, g.waste.h, S, r.selectedSource?.kind === "waste");
  } else
    c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), we(c, g.waste.x, g.waste.y, g.waste.w, g.waste.h, 20), c.stroke(), c.setLineDash([]);
  if (r.foundationOrder.forEach((S, B) => {
    const C = g.foundations[B], P = It(s, S), oe = P ? r.foundations[P.id] : [], ze = r.foundationPulses.find(($) => $.slotIndex === B), W = d?.dropTarget?.kind === "foundation" && d.dropTarget.index === B;
    if (ze) {
      const $ = ze.life / ze.maxLife;
      c.save(), c.globalAlpha = 0.22 * $, c.fillStyle = "#ffe59b", we(c, C.x - 8, C.y - 8, C.w + 16, C.h + 16, 30), c.fill(), c.restore();
    }
    if (c.fillStyle = W ? "rgba(255, 238, 182, 0.16)" : "rgba(255,255,255,0.08)", we(c, C.x, C.y, C.w, C.h, 24), c.fill(), W && (c.strokeStyle = "#ffe59b", c.lineWidth = 3, we(c, C.x, C.y, C.w, C.h, 24), c.stroke()), P ? Km(c, C.x + 10, C.y + 10, C.w - 20, 104, P) : (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([6, 8]), we(c, C.x + 12, C.y + 12, C.w - 24, 102, 18), c.stroke(), c.setLineDash([]), c.font = "700 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,243,0.7)", c.textAlign = "center", c.fillText("Empty Crown", C.x + C.w / 2, C.y + 56), c.fillText("Drop Clue", C.x + C.w / 2, C.y + 76)), P && oe.length) {
      const $ = oe.slice(-3);
      $.forEach((Ve, Te) => {
        ru(c, C.x + 14 + Te * 3, C.y + 126 + ($.length - Te - 1) * 5, C.w - 28, 54, Ve, !1, !0);
      });
    } else
      c.strokeStyle = "rgba(255,255,255,0.18)", c.setLineDash([6, 8]), c.lineWidth = 2, we(c, C.x + 16, C.y + 126, C.w - 32, 70, 16), c.stroke(), c.setLineDash([]), c.font = "700 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,243,0.68)", c.textAlign = "center", c.fillText(P ? "Build Here" : "Need Clue", C.x + C.w / 2, C.y + 168);
    c.fillStyle = "#eff9f3", c.font = "600 14px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText(P ? `${oe.length}/${P.words.length}` : "0/6", C.x + C.w / 2, C.y + C.h - 26), c.fillStyle = "rgba(255,255,255,0.9)", c.fillRect(C.x + 16, C.y + C.h - 16, P ? (C.w - 32) * oe.length / P.words.length : 0, 8), c.strokeStyle = "rgba(255,255,255,0.18)", c.strokeRect(C.x + 16, C.y + C.h - 16, C.w - 32, 8);
  }), r.columns.forEach((S, B) => {
    const C = g.columns[B], P = Xc(s, r, B), oe = d?.dropTarget?.kind === "column" && d.dropTarget.index === B;
    c.fillStyle = oe ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", we(c, C.x, C.y, C.w, C.h, 28), c.fill(), oe && (c.strokeStyle = "#ffe59b", c.lineWidth = 3, we(c, C.x, C.y, C.w, C.h, 28), c.stroke()), S.length || (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), we(c, C.x + 10, C.y + 24, C.w - 20, yo, 20), c.stroke(), c.setLineDash([]), c.fillStyle = "rgba(239,249,243,0.74)", c.font = "700 13px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText("Drop Here", C.x + C.w / 2, C.y + 98));
    const ze = mo(r, B), W = d?.moved && d.source.kind === "column" && d.source.index === B ? d.cards.length : 0, $ = Math.max(ze, S.length - W);
    S.forEach((Ve, Te) => {
      if (Te >= $) return;
      const De = P[Te];
      if (!De) return;
      const cl = Te < ze, $e = Te === $ - 1;
      if (cl) {
        ou(c, De.x, De.y, De.w, De.h);
        return;
      }
      ru(
        c,
        De.x,
        De.y,
        De.w,
        De.h,
        Ve,
        $e && r.selectedSource?.kind === "column" && r.selectedSource.index === B && !d,
        !1
      );
    });
  }), d?.moved && (c.save(), c.globalAlpha = 0.96, d.cards.forEach((S, B) => {
    ru(
      c,
      d.x - O0 / 2,
      d.y - 52 + B * Tm,
      O0,
      pm,
      S,
      !0,
      !1
    );
  }), c.restore()), r.motionCards.forEach((S) => {
    const B = x0(1 - S.life / S.maxLife), C = S.fromX + (S.toX - S.fromX) * B, P = S.fromY + (S.toY - S.fromY) * B - Math.sin(B * Math.PI) * S.arc;
    c.save(), c.globalAlpha = 0.92, ru(c, C, P, S.w, S.h, S.card, !1, S.compact), c.restore();
  }), r.feedbackTexts.forEach((S) => {
    const B = 1 - S.life / S.maxLife, C = 1 - B, P = S.y - B * 36, oe = 0.92 + S.scale * x0(B);
    c.save(), c.globalAlpha = C, c.translate(S.x, P), c.scale(oe, oe), c.textAlign = "center", c.font = "800 28px Trebuchet MS, sans-serif", c.strokeStyle = "rgba(7,18,18,0.34)", c.lineWidth = 8, c.strokeText(S.text, 0, 0), c.fillStyle = S.color, c.fillText(S.text, 0, 0), c.restore();
  }), c.fillStyle = "rgba(5,16,18,0.58)", we(c, 70, 1030, Ze - 140, 136, 30), c.fill(), [
    { label: "Moves", value: String(r.movesLeft), color: "#fff5cc" },
    { label: "Streak", value: String(r.streak), color: "#d5fff1" },
    { label: "Score", value: String(r.score), color: "#d6ecff" },
    { label: "Undo", value: String(r.boosters.undo), color: "#ffe7c1" },
    { label: "Joker", value: String(r.boosters.joker), color: "#ffdcd5" },
    { label: "Shuffle", value: String(r.boosters.shuffle), color: "#e0d9ff" }
  ].forEach((S, B) => {
    const C = 96 + B * 142;
    we(c, C, 1048, 122, 60, 20), c.fillStyle = "rgba(255,255,255,0.08)", c.fill(), c.fillStyle = S.color, c.font = "700 13px Trebuchet MS, sans-serif", c.textAlign = "left", c.fillText(S.label, C + 14, 1070), c.fillStyle = "#f4fff8", c.font = "800 22px Trebuchet MS, sans-serif", c.fillText(S.value, C + 14, 1094);
  }), c.fillStyle = "#eef9f4", c.font = "700 16px Trebuchet MS, sans-serif", c.textAlign = "left", c.fillText(r.message, 96, 1140), r.particles.forEach((S) => {
    c.save(), c.globalAlpha = S.life / S.maxLife, c.fillStyle = S.color, we(c, S.x - S.size / 2, S.y - S.size / 2, S.size, S.size, 5), c.fill(), c.restore();
  }), r.mode !== "playing") {
    const S = r.mode === "lost" && r.movesLeft <= 0;
    c.fillStyle = "rgba(7,12,18,0.74)", we(c, 120, 384, Ze - 240, 292, 32), c.fill(), fu(c, Ze / 2 - 102, 426, 204, 38, "rgba(255,255,255,0.12)", r.mode === "title" ? "Fresh Shuffle" : r.mode === "won" ? "Perfect Sort" : S ? "Out of Moves" : "Dead End", "#f4fff8"), c.fillStyle = "#fff4c8", c.textAlign = "center", c.font = "800 44px Trebuchet MS, sans-serif", c.fillText(r.mode === "title" ? "Word Sort Solitaire" : r.mode === "won" ? "Round Complete" : S ? "Out of Moves" : "No Legal Moves", Ze / 2, 510), c.fillStyle = "#eef9f4", c.font = "600 22px Trebuchet MS, sans-serif", c.fillText(r.mode === "title" ? "Clue cards are buried in the deal. Uncover them, claim crowns, and sort the matching words." : r.message, Ze / 2, 566), c.font = "600 18px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,244,0.82)", c.fillText(r.mode === "won" ? "Tap to deal the next board." : "Tap anywhere on the board to play.", Ze / 2, 604), fu(c, Ze / 2 - 126, 620, 252, 56, "#ffd47b", r.mode === "won" ? "Tap For Next Deal" : "Tap To Start");
  }
}
function L0(c, r) {
  const d = [];
  for (const s of c.particles)
    s.life -= r, !(s.life <= 0) && (s.x += s.vx * (r / 16), s.y += s.vy * (r / 16), s.vy += 0.04 * (r / 16), d.push(s));
  c.particles = d, c.motionCards = c.motionCards.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : [])), c.feedbackTexts = c.feedbackTexts.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : [])), c.foundationPulses = c.foundationPulses.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : []));
}
function kl(c) {
  return {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    color: c ? "#102522" : "#effaf4",
    background: c ? "linear-gradient(180deg, #ffe5a3 0%, #ffc45f 100%)" : "rgba(255,255,255,0.12)",
    boxShadow: c ? "0 10px 20px rgba(255, 188, 92, 0.25)" : "inset 0 0 0 1px rgba(255,255,255,0.14)",
    textAlign: "center",
    lineHeight: 1.2,
    minWidth: 0,
    whiteSpace: "normal",
    wordBreak: "break-word"
  };
}
function bn(c, r) {
  return c.length <= r ? c : `${c.slice(0, Math.max(1, r - 1))}…`;
}
function km({ presentation: c = "app" }) {
  const r = c === "export", d = yl.useRef(null);
  d.current || (d.current = uu(0, !1));
  const s = yl.useRef(null), g = yl.useRef(null), E = yl.useRef(null), o = yl.useRef(d.current), G = yl.useRef(null), O = yl.useRef("off"), T = yl.useRef(null), [S, B] = yl.useState(d.current), [C, P] = yl.useState(() => Sn()), [oe, ze] = yl.useState("off"), W = () => B({ ...o.current, columns: jc(o.current.columns), hiddenCounts: qc(o.current.hiddenCounts), reserve: [...o.current.reserve], waste: [...o.current.waste], foundations: Gc(o.current.foundations), foundationOrder: xc(o.current.foundationOrder), clueDeck: Lc(o.current.clueDeck), particles: [...o.current.particles], motionCards: H0(o.current.motionCards), feedbackTexts: R0(o.current.feedbackTexts), foundationPulses: U0(o.current.foundationPulses) }), $ = Wl(S.levelIndex), Ve = X0(S, $), Te = (w) => {
    O.current = w, ze(w), o.current.fullscreen = w !== "off";
  }, De = (w) => {
    if (typeof document > "u") return;
    const j = document.documentElement, D = document.body;
    if (w) {
      T.current || (T.current = {
        htmlOverflow: j.style.overflow,
        bodyOverflow: D.style.overflow,
        htmlOverscroll: j.style.overscrollBehavior,
        bodyOverscroll: D.style.overscrollBehavior
      }), j.style.overflow = "hidden", D.style.overflow = "hidden", j.style.overscrollBehavior = "none", D.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const V = T.current;
    V && (j.style.overflow = V.htmlOverflow, D.style.overflow = V.bodyOverflow, j.style.overscrollBehavior = V.htmlOverscroll, D.style.overscrollBehavior = V.bodyOverscroll, T.current = null);
  }, cl = () => typeof window > "u" || typeof navigator > "u" ? !1 : Sn().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent)), $e = (w) => {
    O.current === "immersive" && (De(!1), Te("off"), o.current.message = w, P(Sn()), W());
  }, ce = () => {
    De(!0), Te("immersive"), o.current.message = "Mobile fullscreen enabled.", P(Sn()), W();
  }, Ie = (w, j = o.current.levelIndex) => {
    const D = uu(j, o.current.fullscreen, 0);
    D.mode = "playing", o.current = D, W();
  }, Ul = (w, j, D) => {
    if (o.current.mode !== "playing") return;
    const V = D ?? Ft(o.current, j), Q = pn(V);
    if (!Q || Q.role !== "clue") {
      o.current.message = "Only clue cards can claim an empty crown.", W();
      return;
    }
    const N = It($, Q.categoryId);
    if (!N) {
      o.current.message = "That clue card has no category data.", W();
      return;
    }
    if (o.current.foundations[N.id].length === N.words.length) {
      o.current.message = `${N.clueTitle} is already complete.`, W();
      return;
    }
    if (o.current.foundationOrder[w] != null) {
      o.current.message = "That crown already has a clue card.", W();
      return;
    }
    const K = Nc(o.current, N.id);
    if (K >= 0) {
      o.current.message = `${N.clueTitle} already owns crown ${K + 1}.`, W();
      return;
    }
    const J = Uc($, o.current, j, V.length);
    fa(o.current);
    const He = Hc(o.current, j, V.length);
    if (!He.length) return;
    const [at, ...Ne] = He, ut = o.current.foundations[N.id].length;
    o.current.foundationOrder[w] = N.id, Ne.length && o.current.foundations[N.id].push(...Ne), o.current.selectedSource = null;
    const $l = Ne.reduce((Ge, dl, Cl) => Ge + 100 + Cl * 25, 0);
    if (o.current.streak = Ne.length, o.current.message = Ne.length ? `${N.clueTitle} claimed crown ${w + 1} with ${Ne.length} matching card${Ne.length === 1 ? "" : "s"}.` : `${N.clueTitle} placed into crown ${w + 1}.`, o.current.score += 40 + $l, iu(o.current, at, J[0] ?? G0($, w), G0($, w), !1), Ne.forEach((Ge, dl) => {
      const Cl = su($, w, ut + dl + 1);
      iu(o.current, Ge, J[dl + 1] ?? J[J.length - 1] ?? Cl, Cl, !0);
    }), cu(o.current, w, N.color), zt(o.current, N.clueTitle, qe($).foundations[w].x + qe($).foundations[w].w / 2, qe($).foundations[w].y + 34, "#fff4bf", 0.22), Ne.length) {
      const Ge = su($, w, ut + Ne.length);
      ro(o.current, Ge.x + Ge.w / 2, Ge.y + 30, N.color), zt(o.current, `+${40 + $l}`, Ge.x + Ge.w / 2, Ge.y + 24, "#fff4bf", 0.24), o.current.streak >= 2 && zt(o.current, `Combo x${o.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3);
    }
    o.current.foundations[N.id].length === N.words.length && (o.current.foundationOrder[w] = null, o.current.score += 160, o.current.streak = 0, o.current.message = `${N.clueTitle} completed. Crown ${w + 1} opens again.`, zt(o.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), cu(o.current, w, N.color)), rl(), W();
  }, il = (w) => {
    if (o.current.mode !== "playing") return;
    const j = Ft(o.current, w), D = pn(j), V = je(j);
    if (!(!D || !V)) {
      if (tt(o.current.selectedSource) === tt(w)) {
        if (D.role === "clue") {
          const Q = o.current.foundationOrder.map((N, K) => N == null ? K : -1).filter((N) => N >= 0);
          Q.length === 1 ? Ye(Q[0]) : (o.current.selectedSource = null, o.current.message = Q.length ? `Select an empty crown for ${D.label}.` : "Every crown already has a clue card.", W());
        } else {
          const Q = Nc(o.current, V.categoryId);
          Q >= 0 ? Ye(Q) : (o.current.selectedSource = null, o.current.message = "Find and place the matching clue card first.", W());
        }
        tt(o.current.selectedSource) === tt(w) && (o.current.selectedSource = null, o.current.message = "Selection cleared.", W());
        return;
      }
      o.current.selectedSource = w, o.current.message = D.role === "clue" ? j.length > 1 ? `${D.label} stack selected. Move the full stack into an empty crown.` : `${D.label} clue selected. Drop it into an empty crown.` : j.length > 1 ? `${j.length} matching cards selected.` : `${V.label} selected.`, W();
    }
  }, rl = () => {
    o.current.movesLeft = Math.max(0, o.current.movesLeft - 1), Dc(o.current);
  }, Ye = (w, j) => {
    const D = j ?? o.current.selectedSource;
    if (o.current.mode !== "playing" || !D) return;
    const V = Ft(o.current, D), Q = pn(V), N = je(V) ?? null;
    if (!Q || !N) return;
    if (Q.role === "clue") {
      Ul(w, D, V);
      return;
    }
    const K = o.current.foundationOrder[w], J = It($, K);
    if (!K || !J) {
      o.current.streak = 0, o.current.message = "That crown needs its clue card first.", W();
      return;
    }
    if (N.categoryId !== K) {
      o.current.streak = 0, o.current.message = `${N.label} does not fit the ${J?.clueTitle ?? "selected"} clue.`, W();
      return;
    }
    const He = Uc($, o.current, D, V.length), at = o.current.foundations[K].length;
    fa(o.current);
    const Ne = Hc(o.current, D, V.length);
    if (!Ne.length) return;
    o.current.foundations[K].push(...Ne), o.current.selectedSource = null;
    const ut = o.current.streak, $l = Ne.reduce((dl, Cl, Fl) => dl + 100 + (ut + Fl) * 25, 0);
    o.current.score += $l, o.current.streak += Ne.length, o.current.message = Ne.length > 1 ? `${Ne.length} matching cards sorted into the ${J?.clueTitle ?? "target"} crown.` : `${Ne[0].label} matched the ${J?.clueTitle ?? "target"} clue.`, Ne.forEach((dl, Cl) => {
      const Fl = su($, w, at + Cl + 1);
      iu(
        o.current,
        dl,
        He[Cl] ?? He[He.length - 1] ?? Fl,
        Fl,
        !0
      );
    });
    const Ge = su($, w, at + Ne.length);
    ro(o.current, Ge.x + Ge.w / 2, Ge.y + 86, Ne[0].color), cu(o.current, w, J?.color ?? "#ffe59b"), zt(o.current, `+${$l}`, Ge.x + Ge.w / 2, Ge.y + 44, "#fff4bf", 0.24), o.current.foundations[K].length === J.words.length && (o.current.foundationOrder[w] = null, o.current.score += 160, o.current.streak = 0, o.current.message = `${J.clueTitle} completed. Crown ${w + 1} opens again.`, zt(o.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), cu(o.current, w, J.color)), o.current.streak >= 2 && zt(o.current, `Combo x${o.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3), rl(), W();
  }, Bl = (w, j) => {
    const D = j ?? o.current.selectedSource;
    if (!D || o.current.mode !== "playing") return;
    if (D.kind === "column" && D.index === w) {
      o.current.selectedSource = null, o.current.message = "Selection cleared.", W();
      return;
    }
    const V = Ft(o.current, D), Q = V[0] ?? null;
    if (!Q) return;
    if (!vo(Q, o.current.columns[w], D)) {
      o.current.streak = 0, o.current.message = `${Q.label} cannot stack on column ${w + 1}.`, W();
      return;
    }
    const N = Uc($, o.current, D, V.length);
    fa(o.current);
    const K = Hc(o.current, D, V.length);
    if (!K.length) return;
    o.current.columns[w].push(...K), o.current.hiddenCounts[w] = Math.min(o.current.hiddenCounts[w] ?? 0, Math.max(0, o.current.columns[w].length - K.length)), V0(o.current, w);
    const J = Qm($, o.current, w, K.length);
    K.forEach((He, at) => iu(o.current, He, N[at] ?? N[N.length - 1], J[at] ?? J[J.length - 1], !1)), o.current.selectedSource = null, o.current.score += 15 * K.length, o.current.streak = 0, o.current.message = K.length > 1 ? `${K.length} matching cards parked on column ${w + 1}.` : `${K[0].label} parked on column ${w + 1}.`, zt(o.current, K.length > 1 ? `Stack x${K.length}` : "+15", qe($).columns[w].x + qe($).columns[w].w / 2, qe($).columns[w].y + 18, "#dff7ff", K.length > 1 ? 0.28 : 0.18), rl(), W();
  }, El = () => {
    if (o.current.mode !== "playing") return;
    if (!je(o.current.reserve)) {
      o.current.message = "Reserve pile is empty.", W();
      return;
    }
    fa(o.current);
    const j = o.current.reserve.pop();
    j && (o.current.waste.push(j), o.current.selectedSource = { kind: "waste" }, o.current.message = `Drew ${j.label}.`, rl(), W());
  }, ml = () => {
    o.current.message = jm(o.current), W();
  }, _ = () => {
    Nm(o.current) || (o.current.message = o.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), W();
  }, x = () => {
    const w = o.current.selectedSource;
    if (!w || o.current.mode !== "playing") return;
    if (o.current.boosters.joker <= 0) {
      o.current.message = "Joker spent.", W();
      return;
    }
    const j = je(Ft(o.current, w)) ?? null;
    if (!j) return;
    if (j.role === "clue") {
      o.current.message = "Joker only sorts word cards.", W();
      return;
    }
    const D = Nc(o.current, j.categoryId);
    if (D < 0) {
      o.current.message = "Place the matching clue card first.", W();
      return;
    }
    const V = Uc($, o.current, w, 1)[0] ?? j0($, o.current, D);
    fa(o.current);
    const Q = Hc(o.current, w, 1)[0];
    if (!Q) return;
    o.current.foundations[Q.categoryId].push(Q), o.current.selectedSource = null, o.current.boosters.joker -= 1, o.current.score += 80, o.current.message = `Joker matched ${Q.label} automatically.`;
    const N = j0($, o.current, D);
    iu(o.current, Q, V, N, !0), ro(o.current, N.x + N.w / 2, N.y + 86, Q.color), cu(o.current, D, $.categories.find((K) => K.id === Q.categoryId)?.color ?? "#ffe59b"), zt(o.current, "Joker!", N.x + N.w / 2, N.y + 44, "#ffd7a8", 0.24), Dc(o.current), W();
  }, F = () => {
    if (o.current.mode !== "playing") return;
    if (o.current.boosters.shuffle <= 0) {
      o.current.message = "Shuffle spent.", W();
      return;
    }
    const w = [...o.current.reserve, ...o.current.waste];
    if (!w.length) {
      o.current.message = "No reserve cards to reshuffle.", W();
      return;
    }
    fa(o.current), o.current.reserve = bo(w, 8564529 + o.current.movesLeft * 17 + o.current.score), o.current.waste = [], o.current.selectedSource = null, o.current.boosters.shuffle -= 1, o.current.message = "Reserve and waste reshuffled.", Dc(o.current), W();
  }, ge = () => {
    const w = Math.max(0, o.current.score), j = o.current.levelIndex + 1;
    o.current = uu(j, o.current.fullscreen, w), o.current.mode = "playing", o.current.message = j < oa.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", W();
  }, be = async () => {
    const w = s.current;
    if (!(!w || typeof document > "u"))
      try {
        if (O.current === "immersive") {
          $e("Exited mobile fullscreen.");
          return;
        }
        if (B0(document) === w) {
          await Lm(document);
          return;
        }
        if (Gm(w)) {
          await xm(w);
          return;
        }
        if (cl()) {
          ce();
          return;
        }
        o.current.message = "Fullscreen is unavailable here.", W();
      } catch {
        if (cl()) {
          ce();
          return;
        }
        o.current.message = "Fullscreen is unavailable here.", W();
      }
  }, m = (w, j) => {
    const D = g.current;
    if (!D) return;
    const V = Rc(D, w, j);
    if (!V) return;
    const { x: Q, y: N } = V, K = Wl(o.current.levelIndex), J = qe(K);
    if (o.current.mode !== "playing") {
      o.current.mode === "won" ? ge() : Ie();
      return;
    }
    if (Ot(Q, N, J.reserve)) {
      El();
      return;
    }
    if (Ot(Q, N, J.waste)) {
      il({ kind: "waste" });
      return;
    }
    for (let He = 0; He < J.foundations.length; He += 1)
      if (Ot(Q, N, J.foundations[He])) {
        Ye(He);
        return;
      }
    for (let He = 0; He < J.columns.length; He += 1)
      if (Ot(Q, N, J.columns[He])) {
        o.current.selectedSource ? Bl(He) : il({ kind: "column", index: He });
        return;
      }
  }, U = (w) => {
    const j = g.current;
    if (!j || o.current.mode !== "playing") return;
    const D = Rc(j, w.clientX, w.clientY);
    if (!D) return;
    const V = Wl(o.current.levelIndex), Q = qm(V, o.current, D.x, D.y);
    if (!Q) return;
    const N = Ft(o.current, Q);
    N.length && (G.current = { source: Q, cards: N, clueCategoryId: N[0]?.role === "clue" ? N[0].categoryId : null, x: D.x, y: D.y, startX: D.x, startY: D.y, moved: !1, dropTarget: null }, j.setPointerCapture(w.pointerId));
  }, L = (w) => {
    const j = g.current, D = G.current;
    if (!j || !D) return;
    const V = Rc(j, w.clientX, w.clientY);
    if (!V) return;
    D.x = V.x, D.y = V.y, D.moved = D.moved || Math.hypot(V.x - D.startX, V.y - D.startY) > 14;
    const Q = Wl(o.current.levelIndex);
    D.dropTarget = D.moved ? N0(Q, o.current, D.source, D.cards, V.x, V.y) : null;
  }, Y = (w) => {
    const j = g.current, D = G.current;
    if (!j || !D) {
      m(w.clientX, w.clientY);
      return;
    }
    const V = Rc(j, w.clientX, w.clientY);
    j.hasPointerCapture(w.pointerId) && j.releasePointerCapture(w.pointerId);
    const Q = Wl(o.current.levelIndex);
    if (V && (D.x = V.x, D.y = V.y, D.moved = D.moved || Math.hypot(V.x - D.startX, V.y - D.startY) > 14, D.dropTarget = D.moved ? N0(Q, o.current, D.source, D.cards, V.x, V.y) : null), G.current = null, !D.moved) {
      m(w.clientX, w.clientY);
      return;
    }
    if (D.dropTarget?.kind === "foundation") {
      Ye(D.dropTarget.index, D.source);
      return;
    }
    if (D.dropTarget?.kind === "column") {
      Bl(D.dropTarget.index, D.source);
      return;
    }
    o.current.selectedSource = D.source;
    const N = pn(D.cards), K = je(D.cards);
    !N || !K || (o.current.message = N.role === "clue" ? D.cards.length > 1 ? `${N.label} stack lifted. Drag the full stack into an empty crown.` : `${N.label} lifted. Drag it into an empty crown.` : D.cards.length > 1 ? `${D.cards.length} matching cards lifted. Drag them to a crown or column.` : `${K.label} lifted. Drag it to a crown or column.`, W());
  }, te = (w) => {
    const j = g.current;
    j && G.current && j.hasPointerCapture(w.pointerId) && j.releasePointerCapture(w.pointerId), G.current = null;
  };
  yl.useEffect(() => {
    const w = g.current, j = w?.getContext("2d");
    if (!w || !j) return;
    const D = window, V = () => {
      Jm(j, o.current, G.current), B({ ...o.current, columns: jc(o.current.columns), hiddenCounts: qc(o.current.hiddenCounts), reserve: [...o.current.reserve], waste: [...o.current.waste], foundations: Gc(o.current.foundations), foundationOrder: xc(o.current.foundationOrder), clueDeck: Lc(o.current.clueDeck), particles: [...o.current.particles], motionCards: H0(o.current.motionCards), feedbackTexts: R0(o.current.feedbackTexts), foundationPulses: U0(o.current.foundationPulses) });
    }, Q = () => {
      L0(o.current, 16), V(), E.current = window.requestAnimationFrame(Q);
    };
    return D.render_game_to_text = () => {
      const N = JSON.parse(Zm(o.current));
      return N.fullscreenMode = O.current, N.viewport = Sn(), JSON.stringify(N);
    }, D.advanceTime = (N) => {
      let K = N;
      for (; K > 0; ) {
        const J = Math.min(K, 16);
        L0(o.current, J), K -= J;
      }
      V();
    }, D.__drainVirtualTimePending = () => 0, D.__wordsort_debug_set_moves = (N) => {
      o.current.movesLeft = Math.max(0, Math.floor(N)), Dc(o.current), V();
    }, D.__wordsort_debug_set_level = (N) => {
      const K = Math.max(0, Math.floor(N)), J = uu(K, o.current.fullscreen, 0);
      J.mode = "playing", J.message = K < oa.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", o.current = J, V();
    }, D.__wordsort_debug_prime_foundation_stack = () => {
      const K = Wl(o.current.levelIndex).categories[0];
      if (!K) return;
      const J = uu(o.current.levelIndex, o.current.fullscreen, 0);
      J.mode = "playing", J.foundationOrder[0] = K.id, J.foundations[K.id] = [], J.columns[0] = K.words.slice(0, 3).map((He) => Q0(K, He)), J.hiddenCounts[0] = 0, J.movesLeft = Math.max(J.movesLeft, 12), J.message = "Debug: foundation stack primed.", o.current = J, V();
    }, V(), E.current = window.requestAnimationFrame(Q), () => {
      E.current != null && window.cancelAnimationFrame(E.current), delete D.render_game_to_text, delete D.advanceTime, delete D.__drainVirtualTimePending, delete D.__wordsort_debug_set_moves, delete D.__wordsort_debug_set_level, delete D.__wordsort_debug_prime_foundation_stack;
    };
  }, []), yl.useEffect(() => {
    const w = () => P(Sn());
    return w(), window.addEventListener("resize", w), window.visualViewport?.addEventListener("resize", w), window.visualViewport?.addEventListener("scroll", w), () => {
      window.removeEventListener("resize", w), window.visualViewport?.removeEventListener("resize", w), window.visualViewport?.removeEventListener("scroll", w);
    };
  }, []), yl.useEffect(() => () => {
    De(!1);
  }, []), yl.useEffect(() => {
    const w = ["j", "k", "l", "m", "p"], j = ["a", "s", "d", "g", "v"], D = () => {
      B0(document) === s.current ? Te("native") : O.current === "native" && Te("off"), P(Sn()), W();
    }, V = (Q) => {
      const N = Q.key.toLowerCase();
      N === "f" && (Q.preventDefault(), be()), N === "escape" && O.current === "immersive" && (Q.preventDefault(), $e("Exited mobile fullscreen.")), N === "n" && (Q.preventDefault(), El()), N === "h" && (Q.preventDefault(), ml()), N === "u" && (Q.preventDefault(), _()), N === "x" && (Q.preventDefault(), x()), N === "z" && (Q.preventDefault(), F()), N === "enter" && o.current.mode !== "playing" && (Q.preventDefault(), Ie());
      const K = j.indexOf(N);
      if (K >= 0) {
        Q.preventDefault();
        const He = { kind: "column", index: K };
        o.current.selectedSource?.kind === "column" && o.current.selectedSource.index === K ? il(He) : o.current.selectedSource ? Bl(K) : il(He);
      }
      N === "q" && (Q.preventDefault(), o.current.selectedSource?.kind === "waste" ? il({ kind: "waste" }) : il({ kind: "waste" }));
      const J = w.indexOf(N);
      J >= 0 && (Q.preventDefault(), Ye(J));
    };
    return document.addEventListener("fullscreenchange", D), document.addEventListener("webkitfullscreenchange", D), window.addEventListener("keydown", V), () => {
      document.removeEventListener("fullscreenchange", D), document.removeEventListener("webkitfullscreenchange", D), window.removeEventListener("keydown", V);
    };
  }, []);
  const le = oe === "immersive", ee = !S.fullscreen && C.width < 560, pe = S.fullscreen && C.width < 820, ve = S.fullscreen && (C.width < 1140 || C.height < 760), de = S.fullscreen || ee, Tn = S.fullscreen ? pe ? "calc(env(safe-area-inset-top, 0px) + 8px) calc(env(safe-area-inset-right, 0px) + 8px) calc(env(safe-area-inset-bottom, 0px) + 12px) calc(env(safe-area-inset-left, 0px) + 8px)" : ve ? "10px 10px 14px" : "14px 14px 16px" : r ? ee ? "8px 8px 10px" : 16 : ee ? "12px 10px 14px" : 20, ra = S.fullscreen ? pe ? Math.min(430, Math.max(300, C.width - 18)) : Math.min(ve ? 720 : 860, Math.max(320, C.width - (ve ? 28 : 48))) : ee ? Math.min(420, Math.max(320, C.width - 28)) : 760, hu = de ? pe ? "Mobile fullscreen layout with safe-area spacing and touch-first controls." : r ? "Public browser build with touch-first controls and quick fullscreen access." : "Buried clue cards, five live crowns, and a tighter layout." : r ? "A streamlined public build focused on fast play, touch controls, and cleaner fullscreen handoff." : "A clue-card word sorter where the crown cards are buried in the deal, just like the rest of the deck.", nt = S.fullscreen ? pe ? 78 : ve ? 92 : 104 : ee ? 72 : 108, Pt = S.fullscreen ? pe ? 96 : ve ? 120 : 136 : ee ? 108 : 160, sl = de ? r ? "8px 11px" : "9px 12px" : r ? "10px 14px" : "11px 16px", zl = de ? 12 : r ? 13 : 14, yu = pe ? 8 : ve ? 10 : ee ? 8 : r ? 12 : 16, An = pe || r && de, sa = !r && !S.fullscreen && !ee, da = !r && (ee || pe), Qc = S.fullscreen ? "Exit Fullscreen" : pe || cl() ? "Go Fullscreen" : "Fullscreen", Zc = (w, j) => {
    const D = It($, w);
    return D ? de ? `${D.clueIcon} ${bn(D.clueTitle, ee ? 8 : 10)}` : `${D.clueIcon} ${D.clueTitle}` : `Empty ${j + 1}`;
  }, fl = /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${nt}px, 1fr))`, gap: S.fullscreen ? 10 : 12 }, children: [
    [["Level", $.name], ["Moves Left", String(S.movesLeft)], ["Score", String(S.score)], ["Best", String(S.bestScore)], ["Streak", String(S.streak)], ["Cleared", `${Ve}/${$.categories.length}`]].map(([w, j]) => {
      const D = w === "Level";
      return /* @__PURE__ */ X.jsxs("div", { style: { minWidth: 0, padding: de ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: de && D ? ve || ee ? "1 / -1" : "span 2" : void 0 }, children: [
        /* @__PURE__ */ X.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: w }),
        /* @__PURE__ */ X.jsx("div", { style: { fontSize: de ? D ? 17 : 18 : 24, fontWeight: 800, wordBreak: D ? "normal" : "break-word", whiteSpace: D ? "nowrap" : "normal", overflow: D ? "hidden" : "visible", textOverflow: D ? "ellipsis" : "clip" }, children: D && de ? bn(j, ee ? 20 : ve ? 24 : 30) : j })
      ] }, w);
    }),
    /* @__PURE__ */ X.jsxs("div", { style: { minWidth: 0, padding: de ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Visible Clues" }),
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: de ? 17 : 20, fontWeight: 800 }, children: go(S).filter(({ card: w }) => w.role === "clue").length })
    ] }),
    [["Undo", String(S.boosters.undo)], ["Joker", String(S.boosters.joker)], ["Shuffle", String(S.boosters.shuffle)]].map(([w, j]) => /* @__PURE__ */ X.jsxs("div", { style: { minWidth: 0, padding: de ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: w }),
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: de ? 18 : 24, fontWeight: 800 }, children: j })
    ] }, w)),
    /* @__PURE__ */ X.jsxs("div", { style: { minWidth: 0, padding: de ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: de ? "1 / -1" : void 0 }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Crown Status" }),
      /* @__PURE__ */ X.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }, children: S.foundationOrder.map((w, j) => /* @__PURE__ */ X.jsx("div", { style: { padding: de ? "5px 8px" : "6px 10px", borderRadius: 999, background: w ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: de ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: Zc(w, j) }, `crown-status-${j}`)) })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { minWidth: 0, padding: de ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: "1 / -1" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: de ? 13 : 15, fontWeight: 700, minHeight: 24, wordBreak: "break-word" }, children: S.message })
    ] })
  ] }), mu = /* @__PURE__ */ X.jsx("div", { style: { width: ra, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Ze} / ${Ct}` }, children: /* @__PURE__ */ X.jsx("canvas", { ref: g, width: Ze, height: Ct, style: { width: "100%", height: "100%", display: "block", borderRadius: S.fullscreen ? 26 : 28, boxShadow: "0 22px 40px rgba(3,10,28,0.42)", background: "#102623", cursor: G.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: U, onPointerMove: L, onPointerUp: Y, onPointerCancel: te }) }), gu = /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gap: 10 }, children: [
    /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${Pt}px, 1fr))`, gap: 10 }, children: [
      S.columns.map((w, j) => /* @__PURE__ */ X.jsx("button", { id: `wordsort-source-col-${j + 1}`, onClick: () => S.selectedSource ? Bl(j) : il({ kind: "column", index: j }), style: { ...kl(tt(S.selectedSource) === `column-${j}`), fontSize: zl, padding: sl }, children: tt(S.selectedSource) === `column-${j}` ? `Selected: ${bn(je(w)?.label ?? "Empty", de ? 12 : 18)}` : `${ee ? "C" : "Column"} ${j + 1}: ${bn(je(w)?.label ?? "Empty", de ? 12 : 18)}` }, j)),
      /* @__PURE__ */ X.jsx("button", { id: "wordsort-source-waste", onClick: () => S.selectedSource ? il({ kind: "waste" }) : il({ kind: "waste" }), style: { ...kl(tt(S.selectedSource) === "waste"), fontSize: zl, padding: sl }, children: tt(S.selectedSource) === "waste" ? `Selected: ${bn(je(S.waste)?.label ?? "Empty", de ? 12 : 18)}` : `${ee ? "Waste" : "Waste:"} ${bn(je(S.waste)?.label ?? "Empty", de ? 12 : 18)}` })
    ] }),
    /* @__PURE__ */ X.jsx("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${Pt}px, 1fr))`, gap: 10 }, children: S.foundationOrder.map((w, j) => {
      const D = It($, w);
      return /* @__PURE__ */ X.jsx("button", { id: `wordsort-foundation-${j + 1}`, onClick: () => Ye(j), style: { ...kl(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: zl, padding: sl }, children: D ? `${D.clueIcon} ${bn(D.clueTitle, de ? 9 : 16)} ${S.foundations[D.id].length}/${D.words.length}` : de ? `Empty ${j + 1}` : `Empty Crown ${j + 1}` }, j);
    }) }),
    /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${Pt}px, 1fr))`, gap: 10 }, children: [
      /* @__PURE__ */ X.jsx("button", { id: "wordsort-undo", onClick: _, style: { ...kl(!1), fontSize: zl, padding: sl }, children: `Undo (${S.boosters.undo})` }),
      /* @__PURE__ */ X.jsx("button", { id: "wordsort-joker", onClick: x, style: { ...kl(!1), fontSize: zl, padding: sl }, children: `Joker (${S.boosters.joker})` }),
      /* @__PURE__ */ X.jsx("button", { id: "wordsort-shuffle", onClick: F, style: { ...kl(!1), fontSize: zl, padding: sl }, children: `Shuffle (${S.boosters.shuffle})` })
    ] })
  ] }), vu = sa ? /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
    /* @__PURE__ */ X.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "How It Plays" }),
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Clue cards are mixed into the same deal as every other card. You only get five live crowns, so finishing one set opens space for the next buried clue." })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
      /* @__PURE__ */ X.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
        "Drag and drop on the canvas, tap for quick-sort, or use the helper buttons. Keyboard: ",
        /* @__PURE__ */ X.jsx("code", { children: "A/S/D/G/V" }),
        " columns, ",
        /* @__PURE__ */ X.jsx("code", { children: "Q" }),
        " waste, ",
        /* @__PURE__ */ X.jsx("code", { children: "J/K/L/M/P" }),
        " crown slots, ",
        /* @__PURE__ */ X.jsx("code", { children: "N" }),
        " draw, ",
        /* @__PURE__ */ X.jsx("code", { children: "U" }),
        " undo, ",
        /* @__PURE__ */ X.jsx("code", { children: "X" }),
        " joker, ",
        /* @__PURE__ */ X.jsx("code", { children: "Z" }),
        " shuffle, ",
        /* @__PURE__ */ X.jsx("code", { children: "H" }),
        " hint, ",
        /* @__PURE__ */ X.jsx("code", { children: "F" }),
        " fullscreen."
      ] })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ X.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Reference Direction" }),
      /* @__PURE__ */ X.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The board is now closer to the mobile loop: more clue categories than crown slots, with completed sets freeing crowns for later clues." })
    ] })
  ] }) : null, En = da ? /* @__PURE__ */ X.jsxs("div", { style: { borderRadius: 18, padding: pe ? "9px 10px" : "10px 12px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
    /* @__PURE__ */ X.jsx("div", { style: { fontWeight: 800, marginBottom: 4, fontSize: 13 }, children: pe ? "Mobile Fullscreen" : "Mobile Notes" }),
    /* @__PURE__ */ X.jsx("div", { style: { fontSize: 12, lineHeight: 1.45, color: "rgba(235,244,255,0.82)" }, children: pe ? "Word Sort now prefers native fullscreen on supported mobile browsers and falls back to the immersive overlay only when the browser will not grant a fullscreen request." : "Tap a column or waste card to select it, then tap a crown or column to move it. Buried clue cards have to be uncovered before a crown can claim them." })
  ] }) : null;
  return /* @__PURE__ */ X.jsx("div", { style: { minHeight: le ? "100dvh" : "100%", display: "flex", justifyContent: "center", padding: S.fullscreen ? 0 : r ? ee ? "6px 0 10px" : "8px 0 18px" : "24px 12px 48px", background: S.fullscreen ? "#091614" : "transparent", position: le ? "fixed" : "relative", inset: le ? 0 : void 0, zIndex: le ? 9999 : void 0, overflow: le ? "hidden" : "visible" }, children: /* @__PURE__ */ X.jsxs("section", { ref: s, style: { width: "100%", maxWidth: S.fullscreen ? "100vw" : r ? 1e3 : 1040, minHeight: S.fullscreen ? le ? "100dvh" : "100vh" : void 0, height: le ? "100dvh" : void 0, boxSizing: "border-box", borderRadius: S.fullscreen ? 0 : r ? 28 : 32, padding: Tn, background: "radial-gradient(circle at top left, rgba(179, 240, 209, 0.16), transparent 30%), linear-gradient(180deg, #163c37 0%, #0b1f1c 100%)", boxShadow: S.fullscreen ? "none" : r ? "0 18px 46px rgba(4,14,39,0.28)" : "0 24px 60px rgba(4,14,39,0.35)", display: "flex", flexDirection: "column", gap: pe ? 10 : S.fullscreen || r ? 12 : 14, color: "#eff9f4", overflowX: "hidden", overflowY: S.fullscreen ? "auto" : "hidden", WebkitOverflowScrolling: "touch", overscrollBehavior: S.fullscreen ? "contain" : "auto" }, children: [
    /* @__PURE__ */ X.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: de ? "flex-start" : "center", gap: yu, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ X.jsxs("div", { style: { display: "grid", gap: 4, minWidth: 0, flex: "1 1 320px" }, children: [
        /* @__PURE__ */ X.jsx("div", { style: { fontSize: S.fullscreen ? pe ? 21 : ve ? 24 : 28 : ee ? 22 : r ? 28 : 30, fontWeight: 800 }, children: "Word Sort Solitaire" }),
        /* @__PURE__ */ X.jsx("div", { style: { fontSize: de || r ? 13 : 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: de ? 560 : 620 }, children: hu })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", minWidth: 0, justifyContent: de ? "flex-start" : "flex-end" }, children: [
        /* @__PURE__ */ X.jsx("button", { id: "wordsort-start", onClick: () => Ie(), style: { ...kl(!0), padding: sl, fontSize: zl }, children: S.mode === "playing" ? "New Round" : "Start Round" }),
        /* @__PURE__ */ X.jsx("button", { id: "wordsort-next", onClick: ge, style: { ...kl(!1), padding: sl, fontSize: zl }, children: "Next Level" }),
        /* @__PURE__ */ X.jsx("button", { id: "wordsort-hint", onClick: ml, style: { ...kl(!1), padding: sl, fontSize: zl }, children: "Hint" }),
        /* @__PURE__ */ X.jsx("button", { id: "wordsort-draw", onClick: El, style: { ...kl(!1), padding: sl, fontSize: zl }, children: "Draw" }),
        /* @__PURE__ */ X.jsx("button", { id: "wordsort-fullscreen", onClick: () => {
          be();
        }, style: { ...kl(!1), padding: sl, fontSize: zl }, children: Qc })
      ] })
    ] }),
    An ? mu : fl,
    An ? fl : mu,
    gu,
    vu,
    En
  ] }) });
}
const K0 = document.getElementById("word-sort-root");
if (!K0)
  throw new Error("Word Sort export root element was not found.");
document.title = "Word Sort Solitaire | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("word-sort-export-body");
mm.createRoot(K0).render(/* @__PURE__ */ X.jsx(km, { presentation: "export" }));
