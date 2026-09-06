var lo = { exports: {} }, fu = {};
var T0;
function cm() {
  if (T0) return fu;
  T0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(s, v, x) {
    var f = null;
    if (x !== void 0 && (f = "" + x), v.key !== void 0 && (f = "" + v.key), "key" in v) {
      x = {};
      for (var R in v)
        R !== "key" && (x[R] = v[R]);
    } else x = v;
    return v = x.ref, {
      $$typeof: i,
      type: s,
      key: f,
      ref: v !== void 0 ? v : null,
      props: x
    };
  }
  return fu.Fragment = r, fu.jsx = d, fu.jsxs = d, fu;
}
var A0;
function fm() {
  return A0 || (A0 = 1, lo.exports = cm()), lo.exports;
}
var W = fm(), to = { exports: {} }, ou = {}, no = { exports: {} }, ao = {};
var x0;
function om() {
  return x0 || (x0 = 1, (function(i) {
    function r(C, j) {
      var F = C.length;
      C.push(j);
      e: for (; 0 < F; ) {
        var ye = F - 1 >>> 1, pe = C[ye];
        if (0 < v(pe, j))
          C[ye] = j, C[F] = pe, F = ye;
        else break e;
      }
    }
    function d(C) {
      return C.length === 0 ? null : C[0];
    }
    function s(C) {
      if (C.length === 0) return null;
      var j = C[0], F = C.pop();
      if (F !== j) {
        C[0] = F;
        e: for (var ye = 0, pe = C.length, g = pe >>> 1; ye < g; ) {
          var U = 2 * (ye + 1) - 1, G = C[U], Q = U + 1, ne = C[Q];
          if (0 > v(G, F))
            Q < pe && 0 > v(ne, G) ? (C[ye] = ne, C[Q] = F, ye = Q) : (C[ye] = G, C[U] = F, ye = U);
          else if (Q < pe && 0 > v(ne, F))
            C[ye] = ne, C[Q] = F, ye = Q;
          else break e;
        }
      }
      return j;
    }
    function v(C, j) {
      var F = C.sortIndex - j.sortIndex;
      return F !== 0 ? F : C.id - j.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      i.unstable_now = function() {
        return x.now();
      };
    } else {
      var f = Date, R = f.now();
      i.unstable_now = function() {
        return f.now() - R;
      };
    }
    var p = [], y = [], S = 1, z = null, B = 3, le = !1, ce = !1, _e = !1, k = !1, I = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null;
    function Fe(C) {
      for (var j = d(y); j !== null; ) {
        if (j.callback === null) s(y);
        else if (j.startTime <= C)
          s(y), j.sortIndex = j.expirationTime, r(p, j);
        else break;
        j = d(y);
      }
    }
    function il(C) {
      if (_e = !1, Fe(C), !ce)
        if (d(p) !== null)
          ce = !0, el || (el = !0, Xe());
        else {
          var j = d(y);
          j !== null && ml(il, j.startTime - C);
        }
    }
    var el = !1, fe = -1, We = 5, Bl = -1;
    function cl() {
      return k ? !0 : !(i.unstable_now() - Bl < We);
    }
    function sl() {
      if (k = !1, el) {
        var C = i.unstable_now();
        Bl = C;
        var j = !0;
        try {
          e: {
            ce = !1, _e && (_e = !1, De(fe), fe = -1), le = !0;
            var F = B;
            try {
              l: {
                for (Fe(C), z = d(p); z !== null && !(z.expirationTime > C && cl()); ) {
                  var ye = z.callback;
                  if (typeof ye == "function") {
                    z.callback = null, B = z.priorityLevel;
                    var pe = ye(
                      z.expirationTime <= C
                    );
                    if (C = i.unstable_now(), typeof pe == "function") {
                      z.callback = pe, Fe(C), j = !0;
                      break l;
                    }
                    z === d(p) && s(p), Fe(C);
                  } else s(p);
                  z = d(p);
                }
                if (z !== null) j = !0;
                else {
                  var g = d(y);
                  g !== null && ml(
                    il,
                    g.startTime - C
                  ), j = !1;
                }
              }
              break e;
            } finally {
              z = null, B = F, le = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Xe() : el = !1;
        }
      }
    }
    var Xe;
    if (typeof Se == "function")
      Xe = function() {
        Se(sl);
      };
    else if (typeof MessageChannel < "u") {
      var Nl = new MessageChannel(), zl = Nl.port2;
      Nl.port1.onmessage = sl, Xe = function() {
        zl.postMessage(null);
      };
    } else
      Xe = function() {
        I(sl, 0);
      };
    function ml(C, j) {
      fe = I(function() {
        C(i.unstable_now());
      }, j);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, i.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : We = 0 < C ? Math.floor(1e3 / C) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, i.unstable_next = function(C) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = B;
      }
      var F = B;
      B = j;
      try {
        return C();
      } finally {
        B = F;
      }
    }, i.unstable_requestPaint = function() {
      k = !0;
    }, i.unstable_runWithPriority = function(C, j) {
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
      var F = B;
      B = C;
      try {
        return j();
      } finally {
        B = F;
      }
    }, i.unstable_scheduleCallback = function(C, j, F) {
      var ye = i.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ye + F : ye) : F = ye, C) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = F + pe, C = {
        id: S++,
        callback: j,
        priorityLevel: C,
        startTime: F,
        expirationTime: pe,
        sortIndex: -1
      }, F > ye ? (C.sortIndex = F, r(y, C), d(p) === null && C === d(y) && (_e ? (De(fe), fe = -1) : _e = !0, ml(il, F - ye))) : (C.sortIndex = pe, r(p, C), ce || le || (ce = !0, el || (el = !0, Xe()))), C;
    }, i.unstable_shouldYield = cl, i.unstable_wrapCallback = function(C) {
      var j = B;
      return function() {
        var F = B;
        B = j;
        try {
          return C.apply(this, arguments);
        } finally {
          B = F;
        }
      };
    };
  })(ao)), ao;
}
var z0;
function rm() {
  return z0 || (z0 = 1, no.exports = om()), no.exports;
}
var uo = { exports: {} }, ae = {};
var E0;
function sm() {
  if (E0) return ae;
  E0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), B = Symbol.iterator;
  function le(g) {
    return g === null || typeof g != "object" ? null : (g = B && g[B] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ce = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _e = Object.assign, k = {};
  function I(g, U, G) {
    this.props = g, this.context = U, this.refs = k, this.updater = G || ce;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(g, U) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, U, "setState");
  }, I.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function De() {
  }
  De.prototype = I.prototype;
  function Se(g, U, G) {
    this.props = g, this.context = U, this.refs = k, this.updater = G || ce;
  }
  var Fe = Se.prototype = new De();
  Fe.constructor = Se, _e(Fe, I.prototype), Fe.isPureReactComponent = !0;
  var il = Array.isArray;
  function el() {
  }
  var fe = { H: null, A: null, T: null, S: null }, We = Object.prototype.hasOwnProperty;
  function Bl(g, U, G) {
    var Q = G.ref;
    return {
      $$typeof: i,
      type: g,
      key: U,
      ref: Q !== void 0 ? Q : null,
      props: G
    };
  }
  function cl(g, U) {
    return Bl(g.type, U, g.props);
  }
  function sl(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function Xe(g) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(G) {
      return U[G];
    });
  }
  var Nl = /\/+/g;
  function zl(g, U) {
    return typeof g == "object" && g !== null && g.key != null ? Xe("" + g.key) : U.toString(36);
  }
  function ml(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(el, el) : (g.status = "pending", g.then(
          function(U) {
            g.status === "pending" && (g.status = "fulfilled", g.value = U);
          },
          function(U) {
            g.status === "pending" && (g.status = "rejected", g.reason = U);
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
  function C(g, U, G, Q, ne) {
    var te = typeof g;
    (te === "undefined" || te === "boolean") && (g = null);
    var V = !1;
    if (g === null) V = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case i:
            case r:
              V = !0;
              break;
            case S:
              return V = g._init, C(
                V(g._payload),
                U,
                G,
                Q,
                ne
              );
          }
      }
    if (V)
      return ne = ne(g), V = Q === "" ? "." + zl(g, 0) : Q, il(ne) ? (G = "", V != null && (G = V.replace(Nl, "$&/") + "/"), C(ne, U, G, "", function(Ae) {
        return Ae;
      })) : ne != null && (sl(ne) && (ne = cl(
        ne,
        G + (ne.key == null || g && g.key === ne.key ? "" : ("" + ne.key).replace(
          Nl,
          "$&/"
        ) + "/") + V
      )), U.push(ne)), 1;
    V = 0;
    var Ue = Q === "" ? "." : Q + ":";
    if (il(g))
      for (var Te = 0; Te < g.length; Te++)
        Q = g[Te], te = Ue + zl(Q, Te), V += C(
          Q,
          U,
          G,
          te,
          ne
        );
    else if (Te = le(g), typeof Te == "function")
      for (g = Te.call(g), Te = 0; !(Q = g.next()).done; )
        Q = Q.value, te = Ue + zl(Q, Te++), V += C(
          Q,
          U,
          G,
          te,
          ne
        );
    else if (te === "object") {
      if (typeof g.then == "function")
        return C(
          ml(g),
          U,
          G,
          Q,
          ne
        );
      throw U = String(g), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return V;
  }
  function j(g, U, G) {
    if (g == null) return g;
    var Q = [], ne = 0;
    return C(g, Q, "", "", function(te) {
      return U.call(G, te, ne++);
    }), Q;
  }
  function F(g) {
    if (g._status === -1) {
      var U = g._result;
      U = U(), U.then(
        function(G) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = G);
        },
        function(G) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = G);
        }
      ), g._status === -1 && (g._status = 0, g._result = U);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ye = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  }, pe = {
    map: j,
    forEach: function(g, U, G) {
      j(
        g,
        function() {
          U.apply(this, arguments);
        },
        G
      );
    },
    count: function(g) {
      var U = 0;
      return j(g, function() {
        U++;
      }), U;
    },
    toArray: function(g) {
      return j(g, function(U) {
        return U;
      }) || [];
    },
    only: function(g) {
      if (!sl(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  };
  return ae.Activity = z, ae.Children = pe, ae.Component = I, ae.Fragment = d, ae.Profiler = v, ae.PureComponent = Se, ae.StrictMode = s, ae.Suspense = p, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fe, ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return fe.H.useMemoCache(g);
    }
  }, ae.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, ae.cacheSignal = function() {
    return null;
  }, ae.cloneElement = function(g, U, G) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var Q = _e({}, g.props), ne = g.key;
    if (U != null)
      for (te in U.key !== void 0 && (ne = "" + U.key), U)
        !We.call(U, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && U.ref === void 0 || (Q[te] = U[te]);
    var te = arguments.length - 2;
    if (te === 1) Q.children = G;
    else if (1 < te) {
      for (var V = Array(te), Ue = 0; Ue < te; Ue++)
        V[Ue] = arguments[Ue + 2];
      Q.children = V;
    }
    return Bl(g.type, ne, Q);
  }, ae.createContext = function(g) {
    return g = {
      $$typeof: f,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: x,
      _context: g
    }, g;
  }, ae.createElement = function(g, U, G) {
    var Q, ne = {}, te = null;
    if (U != null)
      for (Q in U.key !== void 0 && (te = "" + U.key), U)
        We.call(U, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (ne[Q] = U[Q]);
    var V = arguments.length - 2;
    if (V === 1) ne.children = G;
    else if (1 < V) {
      for (var Ue = Array(V), Te = 0; Te < V; Te++)
        Ue[Te] = arguments[Te + 2];
      ne.children = Ue;
    }
    if (g && g.defaultProps)
      for (Q in V = g.defaultProps, V)
        ne[Q] === void 0 && (ne[Q] = V[Q]);
    return Bl(g, te, ne);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(g) {
    return { $$typeof: R, render: g };
  }, ae.isValidElement = sl, ae.lazy = function(g) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: g },
      _init: F
    };
  }, ae.memo = function(g, U) {
    return {
      $$typeof: y,
      type: g,
      compare: U === void 0 ? null : U
    };
  }, ae.startTransition = function(g) {
    var U = fe.T, G = {};
    fe.T = G;
    try {
      var Q = g(), ne = fe.S;
      ne !== null && ne(G, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(el, ye);
    } catch (te) {
      ye(te);
    } finally {
      U !== null && G.types !== null && (U.types = G.types), fe.T = U;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return fe.H.useCacheRefresh();
  }, ae.use = function(g) {
    return fe.H.use(g);
  }, ae.useActionState = function(g, U, G) {
    return fe.H.useActionState(g, U, G);
  }, ae.useCallback = function(g, U) {
    return fe.H.useCallback(g, U);
  }, ae.useContext = function(g) {
    return fe.H.useContext(g);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(g, U) {
    return fe.H.useDeferredValue(g, U);
  }, ae.useEffect = function(g, U) {
    return fe.H.useEffect(g, U);
  }, ae.useEffectEvent = function(g) {
    return fe.H.useEffectEvent(g);
  }, ae.useId = function() {
    return fe.H.useId();
  }, ae.useImperativeHandle = function(g, U, G) {
    return fe.H.useImperativeHandle(g, U, G);
  }, ae.useInsertionEffect = function(g, U) {
    return fe.H.useInsertionEffect(g, U);
  }, ae.useLayoutEffect = function(g, U) {
    return fe.H.useLayoutEffect(g, U);
  }, ae.useMemo = function(g, U) {
    return fe.H.useMemo(g, U);
  }, ae.useOptimistic = function(g, U) {
    return fe.H.useOptimistic(g, U);
  }, ae.useReducer = function(g, U, G) {
    return fe.H.useReducer(g, U, G);
  }, ae.useRef = function(g) {
    return fe.H.useRef(g);
  }, ae.useState = function(g) {
    return fe.H.useState(g);
  }, ae.useSyncExternalStore = function(g, U, G) {
    return fe.H.useSyncExternalStore(
      g,
      U,
      G
    );
  }, ae.useTransition = function() {
    return fe.H.useTransition();
  }, ae.version = "19.2.4", ae;
}
var O0;
function ho() {
  return O0 || (O0 = 1, uo.exports = sm()), uo.exports;
}
var io = { exports: {} }, rl = {};
var M0;
function dm() {
  if (M0) return rl;
  M0 = 1;
  var i = ho();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, v = /* @__PURE__ */ Symbol.for("react.portal");
  function x(p, y, S) {
    var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: z == null ? null : "" + z,
      children: p,
      containerInfo: y,
      implementation: S
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, rl.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return x(p, y, null, S);
  }, rl.flushSync = function(p) {
    var y = f.T, S = s.p;
    try {
      if (f.T = null, s.p = 2, p) return p();
    } finally {
      f.T = y, s.p = S, s.d.f();
    }
  }, rl.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, rl.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, rl.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, z = R(S, y.crossOrigin), B = typeof y.integrity == "string" ? y.integrity : void 0, le = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: z,
          integrity: B,
          fetchPriority: le
        }
      ) : S === "script" && s.d.X(p, {
        crossOrigin: z,
        integrity: B,
        fetchPriority: le,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, rl.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var S = R(
            y.as,
            y.crossOrigin
          );
          s.d.M(p, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(p);
  }, rl.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, z = R(S, y.crossOrigin);
      s.d.L(p, S, {
        crossOrigin: z,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, rl.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var S = R(y.as, y.crossOrigin);
        s.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(p);
  }, rl.requestFormReset = function(p) {
    s.d.r(p);
  }, rl.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, rl.useFormState = function(p, y, S) {
    return f.H.useFormState(p, y, S);
  }, rl.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, rl.version = "19.2.4", rl;
}
var C0;
function hm() {
  if (C0) return io.exports;
  C0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), io.exports = dm(), io.exports;
}
var _0;
function ym() {
  if (_0) return ou;
  _0 = 1;
  var i = rm(), r = ho(), d = hm();
  function s(e) {
    var l = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function x(e) {
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
  function f(e) {
    if (e.tag === 13) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (x(e) !== e)
      throw Error(s(188));
  }
  function y(e) {
    var l = e.alternate;
    if (!l) {
      if (l = x(e), l === null) throw Error(s(188));
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
          if (u === t) return p(a), e;
          if (u === n) return p(a), l;
          u = u.sibling;
        }
        throw Error(s(188));
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
          if (!c) throw Error(s(189));
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
  var z = Object.assign, B = /* @__PURE__ */ Symbol.for("react.element"), le = /* @__PURE__ */ Symbol.for("react.transitional.element"), ce = /* @__PURE__ */ Symbol.for("react.portal"), _e = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), De = /* @__PURE__ */ Symbol.for("react.consumer"), Se = /* @__PURE__ */ Symbol.for("react.context"), Fe = /* @__PURE__ */ Symbol.for("react.forward_ref"), il = /* @__PURE__ */ Symbol.for("react.suspense"), el = /* @__PURE__ */ Symbol.for("react.suspense_list"), fe = /* @__PURE__ */ Symbol.for("react.memo"), We = /* @__PURE__ */ Symbol.for("react.lazy"), Bl = /* @__PURE__ */ Symbol.for("react.activity"), cl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), sl = Symbol.iterator;
  function Xe(e) {
    return e === null || typeof e != "object" ? null : (e = sl && e[sl] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Nl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function zl(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Nl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _e:
        return "Fragment";
      case I:
        return "Profiler";
      case k:
        return "StrictMode";
      case il:
        return "Suspense";
      case el:
        return "SuspenseList";
      case Bl:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ce:
          return "Portal";
        case Se:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case Fe:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case fe:
          return l = e.displayName || null, l !== null ? l : zl(e.type) || "Memo";
        case We:
          l = e._payload, e = e._init;
          try {
            return zl(e(l));
          } catch {
          }
      }
    return null;
  }
  var ml = Array.isArray, C = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ye = [], pe = -1;
  function g(e) {
    return { current: e };
  }
  function U(e) {
    0 > pe || (e.current = ye[pe], ye[pe] = null, pe--);
  }
  function G(e, l) {
    pe++, ye[pe] = e.current, e.current = l;
  }
  var Q = g(null), ne = g(null), te = g(null), V = g(null);
  function Ue(e, l) {
    switch (G(te, l), G(ne, e), G(Q, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? Zd(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = Zd(l), e = Vd(l, e);
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
    U(Q), G(Q, e);
  }
  function Te() {
    U(Q), U(ne), U(te);
  }
  function Ae(e) {
    e.memoizedState !== null && G(V, e);
    var l = Q.current, t = Vd(l, e.type);
    l !== t && (G(ne, e), G(Q, t));
  }
  function An(e) {
    ne.current === e && (U(Q), U(ne)), V.current === e && (U(V), au._currentValue = F);
  }
  var xn, bu;
  function it(e) {
    if (xn === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        xn = l && l[1] || "", bu = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xn + e + bu;
  }
  var en = !1;
  function dl(e, l) {
    if (!e || en) return "";
    en = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (M) {
                  var E = M;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (M) {
                  E = M;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                E = M;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (M) {
            if (M && E && typeof M.stack == "string")
              return [M.stack, E.stack];
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
`), A = o.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < A.length && !A[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === A.length)
          for (n = h.length - 1, a = A.length - 1; 1 <= n && 0 <= a && h[n] !== A[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== A[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== A[a]) {
                  var _ = `
` + h[n].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      en = !1, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? it(t) : "";
  }
  function El(e, l) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return it(e.type);
      case 16:
        return it("Lazy");
      case 13:
        return e.child !== l && l !== null ? it("Suspense Fallback") : it("Suspense");
      case 19:
        return it("SuspenseList");
      case 0:
      case 15:
        return dl(e.type, !1);
      case 11:
        return dl(e.type.render, !1);
      case 1:
        return dl(e.type, !0);
      case 31:
        return it("Activity");
      default:
        return "";
    }
  }
  function pu(e) {
    try {
      var l = "", t = null;
      do
        l += El(e, t), t = e, e = e.return;
      while (e);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ya = Object.prototype.hasOwnProperty, ma = i.unstable_scheduleCallback, gl = i.unstable_cancelCallback, Tu = i.unstable_shouldYield, ga = i.unstable_requestPaint, fl = i.unstable_now, Li = i.unstable_getCurrentPriorityLevel, zn = i.unstable_ImmediatePriority, En = i.unstable_UserBlockingPriority, O = i.unstable_NormalPriority, N = i.unstable_LowPriority, w = i.unstable_IdlePriority, L = i.log, Z = i.unstable_setDisableYieldValue, q = null, Y = null;
  function K(e) {
    if (typeof L == "function" && Z(e), Y && typeof Y.setStrictMode == "function")
      try {
        Y.setStrictMode(q, e);
      } catch {
      }
  }
  var ee = Math.clz32 ? Math.clz32 : On, Wl = Math.log, Ne = Math.LN2;
  function On(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wl(e) / Ne | 0) | 0;
  }
  var et = 256, qe = 262144, jl = 4194304;
  function ol(e) {
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
  function ct(e, l, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = ol(n) : (c &= o, c !== 0 ? a = ol(c) : t || (t = o & ~e, t !== 0 && (a = ol(t))))) : (o = n & ~u, o !== 0 ? a = ol(o) : c !== 0 ? a = ol(c) : t || (t = n & ~e, t !== 0 && (a = ol(t)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, t = l & -l, u >= t || u === 32 && (t & 4194048) !== 0) ? l : a;
  }
  function va(e, l) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
  }
  function k0(e, l) {
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
  function Eo() {
    var e = jl;
    return jl <<= 1, (jl & 62914560) === 0 && (jl = 4194304), e;
  }
  function Xi(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function Sa(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function W0(e, l, t, n, a, u) {
    var c = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var o = e.entanglements, h = e.expirationTimes, A = e.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var _ = 31 - ee(t), H = 1 << _;
      o[_] = 0, h[_] = -1;
      var E = A[_];
      if (E !== null)
        for (A[_] = null, _ = 0; _ < E.length; _++) {
          var M = E[_];
          M !== null && (M.lane &= -536870913);
        }
      t &= ~H;
    }
    n !== 0 && Oo(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~l));
  }
  function Oo(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var n = 31 - ee(l);
    e.entangledLanes |= l, e.entanglements[n] = e.entanglements[n] | 1073741824 | t & 261930;
  }
  function Mo(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var n = 31 - ee(t), a = 1 << n;
      a & l | e[n] & l && (e[n] |= l), t &= ~a;
    }
  }
  function Co(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : Qi(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function Qi(e) {
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
  function Zi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _o() {
    var e = j.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : y0(e.type));
  }
  function Do(e, l) {
    var t = j.p;
    try {
      return j.p = e, l();
    } finally {
      j.p = t;
    }
  }
  var _t = Math.random().toString(36).slice(2), ll = "__reactFiber$" + _t, vl = "__reactProps$" + _t, Mn = "__reactContainer$" + _t, Vi = "__reactEvents$" + _t, $0 = "__reactListeners$" + _t, F0 = "__reactHandles$" + _t, wo = "__reactResources$" + _t, ba = "__reactMarker$" + _t;
  function Ki(e) {
    delete e[ll], delete e[vl], delete e[Vi], delete e[$0], delete e[F0];
  }
  function Cn(e) {
    var l = e[ll];
    if (l) return l;
    for (var t = e.parentNode; t; ) {
      if (l = t[Mn] || t[ll]) {
        if (t = l.alternate, l.child !== null || t !== null && t.child !== null)
          for (e = Id(e); e !== null; ) {
            if (t = e[ll]) return t;
            e = Id(e);
          }
        return l;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function _n(e) {
    if (e = e[ll] || e[Mn]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function pa(e) {
    var l = e.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Dn(e) {
    var l = e[wo];
    return l || (l = e[wo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Ie(e) {
    e[ba] = !0;
  }
  var Ho = /* @__PURE__ */ new Set(), Uo = {};
  function ln(e, l) {
    wn(e, l), wn(e + "Capture", l);
  }
  function wn(e, l) {
    for (Uo[e] = l, e = 0; e < l.length; e++)
      Ho.add(l[e]);
  }
  var I0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ro = {}, Bo = {};
  function P0(e) {
    return ya.call(Bo, e) ? !0 : ya.call(Ro, e) ? !1 : I0.test(e) ? Bo[e] = !0 : (Ro[e] = !0, !1);
  }
  function Au(e, l, t) {
    if (P0(l))
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
  function xu(e, l, t) {
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
  function ft(e, l, t, n) {
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
  function ql(e) {
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
  function No(e) {
    var l = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function eh(e, l, t) {
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
  function Ji(e) {
    if (!e._valueTracker) {
      var l = No(e) ? "checked" : "value";
      e._valueTracker = eh(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function jo(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), n = "";
    return e && (n = No(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== t ? (l.setValue(e), !0) : !1;
  }
  function zu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var lh = /[\n"\\]/g;
  function Gl(e) {
    return e.replace(
      lh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ki(e, l, t, n, a, u, c, o) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + ql(l)) : e.value !== "" + ql(l) && (e.value = "" + ql(l)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), l != null ? Wi(e, c, ql(l)) : t != null ? Wi(e, c, ql(t)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + ql(o) : e.removeAttribute("name");
  }
  function qo(e, l, t, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), l != null || t != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        Ji(e);
        return;
      }
      t = t != null ? "" + ql(t) : "", l = l != null ? "" + ql(l) : t, o || l === e.value || (e.value = l), e.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = o ? e.checked : !!n, e.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ji(e);
  }
  function Wi(e, l, t) {
    l === "number" && zu(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function Hn(e, l, t, n) {
    if (e = e.options, l) {
      l = {};
      for (var a = 0; a < t.length; a++)
        l["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++)
        a = l.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && n && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + ql(t), l = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        l !== null || e[a].disabled || (l = e[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Go(e, l, t) {
    if (l != null && (l = "" + ql(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + ql(t) : "";
  }
  function Yo(e, l, t, n) {
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
    t = ql(l), e.defaultValue = t, n = e.textContent, n === t && n !== "" && n !== null && (e.value = n), Ji(e);
  }
  function Un(e, l) {
    if (l) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    e.textContent = l;
  }
  var th = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lo(e, l, t) {
    var n = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : n ? e.setProperty(l, t) : typeof t != "number" || t === 0 || th.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function Xo(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (e = e.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && t[a] !== n && Lo(e, a, n);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && Lo(e, u, l[u]);
  }
  function $i(e) {
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
  var nh = /* @__PURE__ */ new Map([
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
  ]), ah = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Eu(e) {
    return ah.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ot() {
  }
  var Fi = null;
  function Ii(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rn = null, Bn = null;
  function Qo(e) {
    var l = _n(e);
    if (l && (e = l.stateNode)) {
      var t = e[vl] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (ki(
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
              'input[name="' + Gl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var n = t[l];
              if (n !== e && n.form === e.form) {
                var a = n[vl] || null;
                if (!a) throw Error(s(90));
                ki(
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
              n = t[l], n.form === e.form && jo(n);
          }
          break e;
        case "textarea":
          Go(e, t.value, t.defaultValue);
          break e;
        case "select":
          l = t.value, l != null && Hn(e, !!t.multiple, l, !1);
      }
    }
  }
  var Pi = !1;
  function Zo(e, l, t) {
    if (Pi) return e(l, t);
    Pi = !0;
    try {
      var n = e(l);
      return n;
    } finally {
      if (Pi = !1, (Rn !== null || Bn !== null) && (di(), Rn && (l = Rn, e = Bn, Bn = Rn = null, Qo(l), e)))
        for (l = 0; l < e.length; l++) Qo(e[l]);
    }
  }
  function Ta(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var n = t[vl] || null;
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
  var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = !1;
  if (rt)
    try {
      var Aa = {};
      Object.defineProperty(Aa, "passive", {
        get: function() {
          ec = !0;
        }
      }), window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
    } catch {
      ec = !1;
    }
  var Dt = null, lc = null, Ou = null;
  function Vo() {
    if (Ou) return Ou;
    var e, l = lc, t = l.length, n, a = "value" in Dt ? Dt.value : Dt.textContent, u = a.length;
    for (e = 0; e < t && l[e] === a[e]; e++) ;
    var c = t - e;
    for (n = 1; n <= c && l[t - n] === a[u - n]; n++) ;
    return Ou = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Mu(e) {
    var l = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Cu() {
    return !0;
  }
  function Ko() {
    return !1;
  }
  function Sl(e) {
    function l(t, n, a, u, c) {
      this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Cu : Ko, this.isPropagationStopped = Ko, this;
    }
    return z(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Cu);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Cu);
      },
      persist: function() {
      },
      isPersistent: Cu
    }), l;
  }
  var tn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _u = Sl(tn), xa = z({}, tn, { view: 0, detail: 0 }), uh = Sl(xa), tc, nc, za, Du = z({}, xa, {
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
    getModifierState: uc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== za && (za && e.type === "mousemove" ? (tc = e.screenX - za.screenX, nc = e.screenY - za.screenY) : nc = tc = 0, za = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), Jo = Sl(Du), ih = z({}, Du, { dataTransfer: 0 }), ch = Sl(ih), fh = z({}, xa, { relatedTarget: 0 }), ac = Sl(fh), oh = z({}, tn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rh = Sl(oh), sh = z({}, tn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), dh = Sl(sh), hh = z({}, tn, { data: 0 }), ko = Sl(hh), yh = {
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
  }, mh = {
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
  }, gh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = gh[e]) ? !!l[e] : !1;
  }
  function uc() {
    return vh;
  }
  var Sh = z({}, xa, {
    key: function(e) {
      if (e.key) {
        var l = yh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Mu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uc,
    charCode: function(e) {
      return e.type === "keypress" ? Mu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), bh = Sl(Sh), ph = z({}, Du, {
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
  }), Wo = Sl(ph), Th = z({}, xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uc
  }), Ah = Sl(Th), xh = z({}, tn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zh = Sl(xh), Eh = z({}, Du, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Oh = Sl(Eh), Mh = z({}, tn, {
    newState: 0,
    oldState: 0
  }), Ch = Sl(Mh), _h = [9, 13, 27, 32], ic = rt && "CompositionEvent" in window, Ea = null;
  rt && "documentMode" in document && (Ea = document.documentMode);
  var Dh = rt && "TextEvent" in window && !Ea, $o = rt && (!ic || Ea && 8 < Ea && 11 >= Ea), Fo = " ", Io = !1;
  function Po(e, l) {
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
  function er(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nn = !1;
  function wh(e, l) {
    switch (e) {
      case "compositionend":
        return er(l);
      case "keypress":
        return l.which !== 32 ? null : (Io = !0, Fo);
      case "textInput":
        return e = l.data, e === Fo && Io ? null : e;
      default:
        return null;
    }
  }
  function Hh(e, l) {
    if (Nn)
      return e === "compositionend" || !ic && Po(e, l) ? (e = Vo(), Ou = lc = Dt = null, Nn = !1, e) : null;
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
        return $o && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Uh = {
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
  function lr(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l === "input" ? !!Uh[e.type] : l === "textarea";
  }
  function tr(e, l, t, n) {
    Rn ? Bn ? Bn.push(n) : Bn = [n] : Rn = n, l = bi(l, "onChange"), 0 < l.length && (t = new _u(
      "onChange",
      "change",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }));
  }
  var Oa = null, Ma = null;
  function Rh(e) {
    qd(e, 0);
  }
  function wu(e) {
    var l = pa(e);
    if (jo(l)) return e;
  }
  function nr(e, l) {
    if (e === "change") return l;
  }
  var ar = !1;
  if (rt) {
    var cc;
    if (rt) {
      var fc = "oninput" in document;
      if (!fc) {
        var ur = document.createElement("div");
        ur.setAttribute("oninput", "return;"), fc = typeof ur.oninput == "function";
      }
      cc = fc;
    } else cc = !1;
    ar = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function ir() {
    Oa && (Oa.detachEvent("onpropertychange", cr), Ma = Oa = null);
  }
  function cr(e) {
    if (e.propertyName === "value" && wu(Ma)) {
      var l = [];
      tr(
        l,
        Ma,
        e,
        Ii(e)
      ), Zo(Rh, l);
    }
  }
  function Bh(e, l, t) {
    e === "focusin" ? (ir(), Oa = l, Ma = t, Oa.attachEvent("onpropertychange", cr)) : e === "focusout" && ir();
  }
  function Nh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return wu(Ma);
  }
  function jh(e, l) {
    if (e === "click") return wu(l);
  }
  function qh(e, l) {
    if (e === "input" || e === "change")
      return wu(l);
  }
  function Gh(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var Ol = typeof Object.is == "function" ? Object.is : Gh;
  function Ca(e, l) {
    if (Ol(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), n = Object.keys(l);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var a = t[n];
      if (!ya.call(l, a) || !Ol(e[a], l[a]))
        return !1;
    }
    return !0;
  }
  function fr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function or(e, l) {
    var t = fr(e);
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
      t = fr(t);
    }
  }
  function rr(e, l) {
    return e && l ? e === l ? !0 : e && e.nodeType === 3 ? !1 : l && l.nodeType === 3 ? rr(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function sr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var l = zu(e.document); l instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = l.contentWindow;
      else break;
      l = zu(e.document);
    }
    return l;
  }
  function oc(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var Yh = rt && "documentMode" in document && 11 >= document.documentMode, jn = null, rc = null, _a = null, sc = !1;
  function dr(e, l, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    sc || jn == null || jn !== zu(n) || (n = jn, "selectionStart" in n && oc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), _a && Ca(_a, n) || (_a = n, n = bi(rc, "onSelect"), 0 < n.length && (l = new _u(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: n }), l.target = jn)));
  }
  function nn(e, l) {
    var t = {};
    return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
  }
  var qn = {
    animationend: nn("Animation", "AnimationEnd"),
    animationiteration: nn("Animation", "AnimationIteration"),
    animationstart: nn("Animation", "AnimationStart"),
    transitionrun: nn("Transition", "TransitionRun"),
    transitionstart: nn("Transition", "TransitionStart"),
    transitioncancel: nn("Transition", "TransitionCancel"),
    transitionend: nn("Transition", "TransitionEnd")
  }, dc = {}, hr = {};
  rt && (hr = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function an(e) {
    if (dc[e]) return dc[e];
    if (!qn[e]) return e;
    var l = qn[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in hr)
        return dc[e] = l[t];
    return e;
  }
  var yr = an("animationend"), mr = an("animationiteration"), gr = an("animationstart"), Lh = an("transitionrun"), Xh = an("transitionstart"), Qh = an("transitioncancel"), vr = an("transitionend"), Sr = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
  function $l(e, l) {
    Sr.set(e, l), ln(l, [e]);
  }
  var Hu = typeof reportError == "function" ? reportError : function(e) {
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
  }, Yl = [], Gn = 0, yc = 0;
  function Uu() {
    for (var e = Gn, l = yc = Gn = 0; l < e; ) {
      var t = Yl[l];
      Yl[l++] = null;
      var n = Yl[l];
      Yl[l++] = null;
      var a = Yl[l];
      Yl[l++] = null;
      var u = Yl[l];
      if (Yl[l++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && br(t, a, u);
    }
  }
  function Ru(e, l, t, n) {
    Yl[Gn++] = e, Yl[Gn++] = l, Yl[Gn++] = t, Yl[Gn++] = n, yc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function mc(e, l, t, n) {
    return Ru(e, l, t, n), Bu(e);
  }
  function un(e, l) {
    return Ru(e, null, null, l), Bu(e);
  }
  function br(e, l, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= t, n = u.alternate, n !== null && (n.childLanes |= t), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && l !== null && (a = 31 - ee(t), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [l] : n.push(l), l.lane = t | 536870912), u) : null;
  }
  function Bu(e) {
    if (50 < Fa)
      throw Fa = 0, Ef = null, Error(s(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Yn = {};
  function Zh(e, l, t, n) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ml(e, l, t, n) {
    return new Zh(e, l, t, n);
  }
  function gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function st(e, l) {
    var t = e.alternate;
    return t === null ? (t = Ml(
      e.tag,
      l,
      e.key,
      e.mode
    ), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function pr(e, l) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), e;
  }
  function Nu(e, l, t, n, a, u) {
    var c = 0;
    if (n = e, typeof e == "function") gc(e) && (c = 1);
    else if (typeof e == "string")
      c = Wy(
        e,
        t,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Bl:
          return e = Ml(31, t, l, a), e.elementType = Bl, e.lanes = u, e;
        case _e:
          return cn(t.children, a, u, l);
        case k:
          c = 8, a |= 24;
          break;
        case I:
          return e = Ml(12, t, l, a | 2), e.elementType = I, e.lanes = u, e;
        case il:
          return e = Ml(13, t, l, a), e.elementType = il, e.lanes = u, e;
        case el:
          return e = Ml(19, t, l, a), e.elementType = el, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                c = 10;
                break e;
              case De:
                c = 9;
                break e;
              case Fe:
                c = 11;
                break e;
              case fe:
                c = 14;
                break e;
              case We:
                c = 16, n = null;
                break e;
            }
          c = 29, t = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return l = Ml(c, t, l, a), l.elementType = e, l.type = n, l.lanes = u, l;
  }
  function cn(e, l, t, n) {
    return e = Ml(7, e, n, l), e.lanes = t, e;
  }
  function vc(e, l, t) {
    return e = Ml(6, e, null, l), e.lanes = t, e;
  }
  function Tr(e) {
    var l = Ml(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function Sc(e, l, t) {
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
  var Ar = /* @__PURE__ */ new WeakMap();
  function Ll(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = Ar.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: pu(l)
      }, Ar.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: pu(l)
    };
  }
  var Ln = [], Xn = 0, ju = null, Da = 0, Xl = [], Ql = 0, wt = null, lt = 1, tt = "";
  function dt(e, l) {
    Ln[Xn++] = Da, Ln[Xn++] = ju, ju = e, Da = l;
  }
  function xr(e, l, t) {
    Xl[Ql++] = lt, Xl[Ql++] = tt, Xl[Ql++] = wt, wt = e;
    var n = lt;
    e = tt;
    var a = 32 - ee(n) - 1;
    n &= ~(1 << a), t += 1;
    var u = 32 - ee(l) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, lt = 1 << 32 - ee(l) + a | t << a | n, tt = u + e;
    } else
      lt = 1 << u | t << a | n, tt = e;
  }
  function bc(e) {
    e.return !== null && (dt(e, 1), xr(e, 1, 0));
  }
  function pc(e) {
    for (; e === ju; )
      ju = Ln[--Xn], Ln[Xn] = null, Da = Ln[--Xn], Ln[Xn] = null;
    for (; e === wt; )
      wt = Xl[--Ql], Xl[Ql] = null, tt = Xl[--Ql], Xl[Ql] = null, lt = Xl[--Ql], Xl[Ql] = null;
  }
  function zr(e, l) {
    Xl[Ql++] = lt, Xl[Ql++] = tt, Xl[Ql++] = wt, lt = l.id, tt = l.overflow, wt = e;
  }
  var tl = null, we = null, he = !1, Ht = null, Zl = !1, Tc = Error(s(519));
  function Ut(e) {
    var l = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw wa(Ll(l, e)), Tc;
  }
  function Er(e) {
    var l = e.stateNode, t = e.type, n = e.memoizedProps;
    switch (l[ll] = e, l[vl] = n, t) {
      case "dialog":
        re("cancel", l), re("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Pa.length; t++)
          re(Pa[t], l);
        break;
      case "source":
        re("error", l);
        break;
      case "img":
      case "image":
      case "link":
        re("error", l), re("load", l);
        break;
      case "details":
        re("toggle", l);
        break;
      case "input":
        re("invalid", l), qo(
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
        re("invalid", l);
        break;
      case "textarea":
        re("invalid", l), Yo(l, n.value, n.defaultValue, n.children);
    }
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || n.suppressHydrationWarning === !0 || Xd(l.textContent, t) ? (n.popover != null && (re("beforetoggle", l), re("toggle", l)), n.onScroll != null && re("scroll", l), n.onScrollEnd != null && re("scrollend", l), n.onClick != null && (l.onclick = ot), l = !0) : l = !1, l || Ut(e, !0);
  }
  function Or(e) {
    for (tl = e.return; tl; )
      switch (tl.tag) {
        case 5:
        case 31:
        case 13:
          Zl = !1;
          return;
        case 27:
        case 3:
          Zl = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function Qn(e) {
    if (e !== tl) return !1;
    if (!he) return Or(e), he = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Yf(e.type, e.memoizedProps)), t = !t), t && we && Ut(e), Or(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      we = Fd(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      we = Fd(e);
    } else
      l === 27 ? (l = we, Jt(e.type) ? (e = Vf, Vf = null, we = e) : we = l) : we = tl ? Kl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fn() {
    we = tl = null, he = !1;
  }
  function Ac() {
    var e = Ht;
    return e !== null && (Al === null ? Al = e : Al.push.apply(
      Al,
      e
    ), Ht = null), e;
  }
  function wa(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var xc = g(null), on = null, ht = null;
  function Rt(e, l, t) {
    G(xc, l._currentValue), l._currentValue = t;
  }
  function yt(e) {
    e._currentValue = xc.current, U(xc);
  }
  function zc(e, l, t) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function Ec(e, l, t, n) {
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
              u.lanes |= t, o = u.alternate, o !== null && (o.lanes |= t), zc(
                u.return,
                t,
                e
              ), n || (c = null);
              break e;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(s(341));
        c.lanes |= t, u = c.alternate, u !== null && (u.lanes |= t), zc(c, t, e), c = null;
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
  function Zn(e, l, t, n) {
    e = null;
    for (var a = l, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var o = a.type;
          Ol(a.pendingProps.value, c.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === V.current) {
        if (c = a.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(au) : e = [au]);
      }
      a = a.return;
    }
    e !== null && Ec(
      l,
      e,
      t,
      n
    ), l.flags |= 262144;
  }
  function qu(e) {
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
  function rn(e) {
    on = e, ht = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nl(e) {
    return Mr(on, e);
  }
  function Gu(e, l) {
    return on === null && rn(e), Mr(e, l);
  }
  function Mr(e, l) {
    var t = l._currentValue;
    if (l = { context: l, memoizedValue: t, next: null }, ht === null) {
      if (e === null) throw Error(s(308));
      ht = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
    } else ht = ht.next = l;
    return t;
  }
  var Vh = typeof AbortController < "u" ? AbortController : function() {
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
  }, Kh = i.unstable_scheduleCallback, Jh = i.unstable_NormalPriority, Ve = {
    $$typeof: Se,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Oc() {
    return {
      controller: new Vh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ha(e) {
    e.refCount--, e.refCount === 0 && Kh(Jh, function() {
      e.controller.abort();
    });
  }
  var Ua = null, Mc = 0, Vn = 0, Kn = null;
  function kh(e, l) {
    if (Ua === null) {
      var t = Ua = [];
      Mc = 0, Vn = wf(), Kn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return Mc++, l.then(Cr, Cr), l;
  }
  function Cr() {
    if (--Mc === 0 && Ua !== null) {
      Kn !== null && (Kn.status = "fulfilled");
      var e = Ua;
      Ua = null, Vn = 0, Kn = null;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
  }
  function Wh(e, l) {
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
  var _r = C.S;
  C.S = function(e, l) {
    dd = fl(), typeof l == "object" && l !== null && typeof l.then == "function" && kh(e, l), _r !== null && _r(e, l);
  };
  var sn = g(null);
  function Cc() {
    var e = sn.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Yu(e, l) {
    l === null ? G(sn, sn.current) : G(sn, l.pool);
  }
  function Dr() {
    var e = Cc();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Jn = Error(s(460)), _c = Error(s(474)), Lu = Error(s(542)), Xu = { then: function() {
  } };
  function wr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Hr(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(ot, ot), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, Rr(e), e;
      default:
        if (typeof l.status == "string") l.then(ot, ot);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = l.reason, Rr(e), e;
        }
        throw hn = l, Jn;
    }
  }
  function dn(e) {
    try {
      var l = e._init;
      return l(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (hn = t, Jn) : t;
    }
  }
  var hn = null;
  function Ur() {
    if (hn === null) throw Error(s(459));
    var e = hn;
    return hn = null, e;
  }
  function Rr(e) {
    if (e === Jn || e === Lu)
      throw Error(s(483));
  }
  var kn = null, Ra = 0;
  function Qu(e) {
    var l = Ra;
    return Ra += 1, kn === null && (kn = []), Hr(kn, e, l);
  }
  function Ba(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function Zu(e, l) {
    throw l.$$typeof === B ? Error(s(525)) : (e = Object.prototype.toString.call(l), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function Br(e) {
    function l(b, m) {
      if (e) {
        var T = b.deletions;
        T === null ? (b.deletions = [m], b.flags |= 16) : T.push(m);
      }
    }
    function t(b, m) {
      if (!e) return null;
      for (; m !== null; )
        l(b, m), m = m.sibling;
      return null;
    }
    function n(b) {
      for (var m = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? m.set(b.key, b) : m.set(b.index, b), b = b.sibling;
      return m;
    }
    function a(b, m) {
      return b = st(b, m), b.index = 0, b.sibling = null, b;
    }
    function u(b, m, T) {
      return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < m ? (b.flags |= 67108866, m) : T) : (b.flags |= 67108866, m)) : (b.flags |= 1048576, m);
    }
    function c(b) {
      return e && b.alternate === null && (b.flags |= 67108866), b;
    }
    function o(b, m, T, D) {
      return m === null || m.tag !== 6 ? (m = vc(T, b.mode, D), m.return = b, m) : (m = a(m, T), m.return = b, m);
    }
    function h(b, m, T, D) {
      var $ = T.type;
      return $ === _e ? _(
        b,
        m,
        T.props.children,
        D,
        T.key
      ) : m !== null && (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === We && dn($) === m.type) ? (m = a(m, T.props), Ba(m, T), m.return = b, m) : (m = Nu(
        T.type,
        T.key,
        T.props,
        null,
        b.mode,
        D
      ), Ba(m, T), m.return = b, m);
    }
    function A(b, m, T, D) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== T.containerInfo || m.stateNode.implementation !== T.implementation ? (m = Sc(T, b.mode, D), m.return = b, m) : (m = a(m, T.children || []), m.return = b, m);
    }
    function _(b, m, T, D, $) {
      return m === null || m.tag !== 7 ? (m = cn(
        T,
        b.mode,
        D,
        $
      ), m.return = b, m) : (m = a(m, T), m.return = b, m);
    }
    function H(b, m, T) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = vc(
          "" + m,
          b.mode,
          T
        ), m.return = b, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            return T = Nu(
              m.type,
              m.key,
              m.props,
              null,
              b.mode,
              T
            ), Ba(T, m), T.return = b, T;
          case ce:
            return m = Sc(
              m,
              b.mode,
              T
            ), m.return = b, m;
          case We:
            return m = dn(m), H(b, m, T);
        }
        if (ml(m) || Xe(m))
          return m = cn(
            m,
            b.mode,
            T,
            null
          ), m.return = b, m;
        if (typeof m.then == "function")
          return H(b, Qu(m), T);
        if (m.$$typeof === Se)
          return H(
            b,
            Gu(b, m),
            T
          );
        Zu(b, m);
      }
      return null;
    }
    function E(b, m, T, D) {
      var $ = m !== null ? m.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return $ !== null ? null : o(b, m, "" + T, D);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case le:
            return T.key === $ ? h(b, m, T, D) : null;
          case ce:
            return T.key === $ ? A(b, m, T, D) : null;
          case We:
            return T = dn(T), E(b, m, T, D);
        }
        if (ml(T) || Xe(T))
          return $ !== null ? null : _(b, m, T, D, null);
        if (typeof T.then == "function")
          return E(
            b,
            m,
            Qu(T),
            D
          );
        if (T.$$typeof === Se)
          return E(
            b,
            m,
            Gu(b, T),
            D
          );
        Zu(b, T);
      }
      return null;
    }
    function M(b, m, T, D, $) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return b = b.get(T) || null, o(m, b, "" + D, $);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case le:
            return b = b.get(
              D.key === null ? T : D.key
            ) || null, h(m, b, D, $);
          case ce:
            return b = b.get(
              D.key === null ? T : D.key
            ) || null, A(m, b, D, $);
          case We:
            return D = dn(D), M(
              b,
              m,
              T,
              D,
              $
            );
        }
        if (ml(D) || Xe(D))
          return b = b.get(T) || null, _(m, b, D, $, null);
        if (typeof D.then == "function")
          return M(
            b,
            m,
            T,
            Qu(D),
            $
          );
        if (D.$$typeof === Se)
          return M(
            b,
            m,
            T,
            Gu(m, D),
            $
          );
        Zu(m, D);
      }
      return null;
    }
    function X(b, m, T, D) {
      for (var $ = null, me = null, J = m, ie = m = 0, de = null; J !== null && ie < T.length; ie++) {
        J.index > ie ? (de = J, J = null) : de = J.sibling;
        var ge = E(
          b,
          J,
          T[ie],
          D
        );
        if (ge === null) {
          J === null && (J = de);
          break;
        }
        e && J && ge.alternate === null && l(b, J), m = u(ge, m, ie), me === null ? $ = ge : me.sibling = ge, me = ge, J = de;
      }
      if (ie === T.length)
        return t(b, J), he && dt(b, ie), $;
      if (J === null) {
        for (; ie < T.length; ie++)
          J = H(b, T[ie], D), J !== null && (m = u(
            J,
            m,
            ie
          ), me === null ? $ = J : me.sibling = J, me = J);
        return he && dt(b, ie), $;
      }
      for (J = n(J); ie < T.length; ie++)
        de = M(
          J,
          b,
          ie,
          T[ie],
          D
        ), de !== null && (e && de.alternate !== null && J.delete(
          de.key === null ? ie : de.key
        ), m = u(
          de,
          m,
          ie
        ), me === null ? $ = de : me.sibling = de, me = de);
      return e && J.forEach(function(It) {
        return l(b, It);
      }), he && dt(b, ie), $;
    }
    function P(b, m, T, D) {
      if (T == null) throw Error(s(151));
      for (var $ = null, me = null, J = m, ie = m = 0, de = null, ge = T.next(); J !== null && !ge.done; ie++, ge = T.next()) {
        J.index > ie ? (de = J, J = null) : de = J.sibling;
        var It = E(b, J, ge.value, D);
        if (It === null) {
          J === null && (J = de);
          break;
        }
        e && J && It.alternate === null && l(b, J), m = u(It, m, ie), me === null ? $ = It : me.sibling = It, me = It, J = de;
      }
      if (ge.done)
        return t(b, J), he && dt(b, ie), $;
      if (J === null) {
        for (; !ge.done; ie++, ge = T.next())
          ge = H(b, ge.value, D), ge !== null && (m = u(ge, m, ie), me === null ? $ = ge : me.sibling = ge, me = ge);
        return he && dt(b, ie), $;
      }
      for (J = n(J); !ge.done; ie++, ge = T.next())
        ge = M(J, b, ie, ge.value, D), ge !== null && (e && ge.alternate !== null && J.delete(ge.key === null ? ie : ge.key), m = u(ge, m, ie), me === null ? $ = ge : me.sibling = ge, me = ge);
      return e && J.forEach(function(im) {
        return l(b, im);
      }), he && dt(b, ie), $;
    }
    function Me(b, m, T, D) {
      if (typeof T == "object" && T !== null && T.type === _e && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case le:
            e: {
              for (var $ = T.key; m !== null; ) {
                if (m.key === $) {
                  if ($ = T.type, $ === _e) {
                    if (m.tag === 7) {
                      t(
                        b,
                        m.sibling
                      ), D = a(
                        m,
                        T.props.children
                      ), D.return = b, b = D;
                      break e;
                    }
                  } else if (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === We && dn($) === m.type) {
                    t(
                      b,
                      m.sibling
                    ), D = a(m, T.props), Ba(D, T), D.return = b, b = D;
                    break e;
                  }
                  t(b, m);
                  break;
                } else l(b, m);
                m = m.sibling;
              }
              T.type === _e ? (D = cn(
                T.props.children,
                b.mode,
                D,
                T.key
              ), D.return = b, b = D) : (D = Nu(
                T.type,
                T.key,
                T.props,
                null,
                b.mode,
                D
              ), Ba(D, T), D.return = b, b = D);
            }
            return c(b);
          case ce:
            e: {
              for ($ = T.key; m !== null; ) {
                if (m.key === $)
                  if (m.tag === 4 && m.stateNode.containerInfo === T.containerInfo && m.stateNode.implementation === T.implementation) {
                    t(
                      b,
                      m.sibling
                    ), D = a(m, T.children || []), D.return = b, b = D;
                    break e;
                  } else {
                    t(b, m);
                    break;
                  }
                else l(b, m);
                m = m.sibling;
              }
              D = Sc(T, b.mode, D), D.return = b, b = D;
            }
            return c(b);
          case We:
            return T = dn(T), Me(
              b,
              m,
              T,
              D
            );
        }
        if (ml(T))
          return X(
            b,
            m,
            T,
            D
          );
        if (Xe(T)) {
          if ($ = Xe(T), typeof $ != "function") throw Error(s(150));
          return T = $.call(T), P(
            b,
            m,
            T,
            D
          );
        }
        if (typeof T.then == "function")
          return Me(
            b,
            m,
            Qu(T),
            D
          );
        if (T.$$typeof === Se)
          return Me(
            b,
            m,
            Gu(b, T),
            D
          );
        Zu(b, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, m !== null && m.tag === 6 ? (t(b, m.sibling), D = a(m, T), D.return = b, b = D) : (t(b, m), D = vc(T, b.mode, D), D.return = b, b = D), c(b)) : t(b, m);
    }
    return function(b, m, T, D) {
      try {
        Ra = 0;
        var $ = Me(
          b,
          m,
          T,
          D
        );
        return kn = null, $;
      } catch (J) {
        if (J === Jn || J === Lu) throw J;
        var me = Ml(29, J, null, b.mode);
        return me.lanes = D, me.return = b, me;
      }
    };
  }
  var yn = Br(!0), Nr = Br(!1), Bt = !1;
  function Dc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wc(e, l) {
    e = e.updateQueue, l.updateQueue === e && (l.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Nt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jt(e, l, t) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (be & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = Bu(e), br(e, null, t), l;
    }
    return Ru(e, n, l, t), Bu(e);
  }
  function Na(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, Mo(e, t);
    }
  }
  function Hc(e, l) {
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
  var Uc = !1;
  function ja() {
    if (Uc) {
      var e = Kn;
      if (e !== null) throw e;
    }
  }
  function qa(e, l, t, n) {
    Uc = !1;
    var a = e.updateQueue;
    Bt = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, A = h.next;
      h.next = null, c === null ? u = A : c.next = A, c = h;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, o = _.lastBaseUpdate, o !== c && (o === null ? _.firstBaseUpdate = A : o.next = A, _.lastBaseUpdate = h));
    }
    if (u !== null) {
      var H = a.baseState;
      c = 0, _ = A = h = null, o = u;
      do {
        var E = o.lane & -536870913, M = E !== o.lane;
        if (M ? (se & E) === E : (n & E) === E) {
          E !== 0 && E === Vn && (Uc = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, P = o;
            E = l;
            var Me = t;
            switch (P.tag) {
              case 1:
                if (X = P.payload, typeof X == "function") {
                  H = X.call(Me, H, E);
                  break e;
                }
                H = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = P.payload, E = typeof X == "function" ? X.call(Me, H, E) : X, E == null) break e;
                H = z({}, H, E);
                break e;
              case 2:
                Bt = !0;
            }
          }
          E = o.callback, E !== null && (e.flags |= 64, M && (e.flags |= 8192), M = a.callbacks, M === null ? a.callbacks = [E] : M.push(E));
        } else
          M = {
            lane: E,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, _ === null ? (A = _ = M, h = H) : _ = _.next = M, c |= E;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          M = o, o = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      _ === null && (h = H), a.baseState = h, a.firstBaseUpdate = A, a.lastBaseUpdate = _, u === null && (a.shared.lanes = 0), Xt |= c, e.lanes = c, e.memoizedState = H;
    }
  }
  function jr(e, l) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(l);
  }
  function qr(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        jr(t[e], l);
  }
  var Wn = g(null), Vu = g(0);
  function Gr(e, l) {
    e = xt, G(Vu, e), G(Wn, l), xt = e | l.baseLanes;
  }
  function Rc() {
    G(Vu, xt), G(Wn, Wn.current);
  }
  function Bc() {
    xt = Vu.current, U(Wn), U(Vu);
  }
  var Cl = g(null), Vl = null;
  function qt(e) {
    var l = e.alternate;
    G(Qe, Qe.current & 1), G(Cl, e), Vl === null && (l === null || Wn.current !== null || l.memoizedState !== null) && (Vl = e);
  }
  function Nc(e) {
    G(Qe, Qe.current), G(Cl, e), Vl === null && (Vl = e);
  }
  function Yr(e) {
    e.tag === 22 ? (G(Qe, Qe.current), G(Cl, e), Vl === null && (Vl = e)) : Gt();
  }
  function Gt() {
    G(Qe, Qe.current), G(Cl, Cl.current);
  }
  function _l(e) {
    U(Cl), Vl === e && (Vl = null), U(Qe);
  }
  var Qe = g(0);
  function Ku(e) {
    for (var l = e; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Qf(t) || Zf(t)))
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
  var mt = 0, ue = null, Ee = null, Ke = null, Ju = !1, $n = !1, mn = !1, ku = 0, Ga = 0, Fn = null, $h = 0;
  function Ge() {
    throw Error(s(321));
  }
  function jc(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!Ol(e[t], l[t])) return !1;
    return !0;
  }
  function qc(e, l, t, n, a, u) {
    return mt = u, ue = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, C.H = e === null || e.memoizedState === null ? xs : Pc, mn = !1, u = t(n, a), mn = !1, $n && (u = Xr(
      l,
      t,
      n,
      a
    )), Lr(e), u;
  }
  function Lr(e) {
    C.H = Xa;
    var l = Ee !== null && Ee.next !== null;
    if (mt = 0, Ke = Ee = ue = null, Ju = !1, Ga = 0, Fn = null, l) throw Error(s(300));
    e === null || Je || (e = e.dependencies, e !== null && qu(e) && (Je = !0));
  }
  function Xr(e, l, t, n) {
    ue = e;
    var a = 0;
    do {
      if ($n && (Fn = null), Ga = 0, $n = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Ke = Ee = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      C.H = zs, u = l(t, n);
    } while ($n);
    return u;
  }
  function Fh() {
    var e = C.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? Ya(l) : l, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (ue.flags |= 1024), l;
  }
  function Gc() {
    var e = ku !== 0;
    return ku = 0, e;
  }
  function Yc(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function Lc(e) {
    if (Ju) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      Ju = !1;
    }
    mt = 0, Ke = Ee = ue = null, $n = !1, Ga = ku = 0, Fn = null;
  }
  function hl() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ke === null ? ue.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function Ze() {
    if (Ee === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var l = Ke === null ? ue.memoizedState : Ke.next;
    if (l !== null)
      Ke = l, Ee = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(s(467)) : Error(s(310));
      Ee = e, e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null
      }, Ke === null ? ue.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function Wu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ya(e) {
    var l = Ga;
    return Ga += 1, Fn === null && (Fn = []), e = Hr(Fn, e, l), l = ue, (Ke === null ? l.memoizedState : Ke.next) === null && (l = l.alternate, C.H = l === null || l.memoizedState === null ? xs : Pc), e;
  }
  function $u(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ya(e);
      if (e.$$typeof === Se) return nl(e);
    }
    throw Error(s(438, String(e)));
  }
  function Xc(e) {
    var l = null, t = ue.updateQueue;
    if (t !== null && (l = t.memoCache), l == null) {
      var n = ue.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), t === null && (t = Wu(), ue.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0)
      for (t = l.data[l.index] = Array(e), n = 0; n < e; n++)
        t[n] = cl;
    return l.index++, t;
  }
  function gt(e, l) {
    return typeof l == "function" ? l(e) : l;
  }
  function Fu(e) {
    var l = Ze();
    return Qc(l, Ee, e);
  }
  function Qc(e, l, t) {
    var n = e.queue;
    if (n === null) throw Error(s(311));
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
      var o = c = null, h = null, A = l, _ = !1;
      do {
        var H = A.lane & -536870913;
        if (H !== A.lane ? (se & H) === H : (mt & H) === H) {
          var E = A.revertLane;
          if (E === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), H === Vn && (_ = !0);
          else if ((mt & E) === E) {
            A = A.next, E === Vn && (_ = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, h === null ? (o = h = H, c = u) : h = h.next = H, ue.lanes |= E, Xt |= E;
          H = A.action, mn && t(u, H), u = A.hasEagerState ? A.eagerState : t(u, H);
        } else
          E = {
            lane: H,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, h === null ? (o = h = E, c = u) : h = h.next = E, ue.lanes |= H, Xt |= H;
        A = A.next;
      } while (A !== null && A !== l);
      if (h === null ? c = u : h.next = o, !Ol(u, e.memoizedState) && (Je = !0, _ && (t = Kn, t !== null)))
        throw t;
      e.memoizedState = u, e.baseState = c, e.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Zc(e) {
    var l = Ze(), t = l.queue;
    if (t === null) throw Error(s(311));
    t.lastRenderedReducer = e;
    var n = t.dispatch, a = t.pending, u = l.memoizedState;
    if (a !== null) {
      t.pending = null;
      var c = a = a.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== a);
      Ol(u, l.memoizedState) || (Je = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), t.lastRenderedState = u;
    }
    return [u, n];
  }
  function Qr(e, l, t) {
    var n = ue, a = Ze(), u = he;
    if (u) {
      if (t === void 0) throw Error(s(407));
      t = t();
    } else t = l();
    var c = !Ol(
      (Ee || a).memoizedState,
      t
    );
    if (c && (a.memoizedState = t, Je = !0), a = a.queue, Jc(Kr.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== l || c || Ke !== null && Ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, In(
        9,
        { destroy: void 0 },
        Vr.bind(
          null,
          n,
          a,
          t,
          l
        ),
        null
      ), Ce === null) throw Error(s(349));
      u || (mt & 127) !== 0 || Zr(n, l, t);
    }
    return t;
  }
  function Zr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = ue.updateQueue, l === null ? (l = Wu(), ue.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function Vr(e, l, t, n) {
    l.value = t, l.getSnapshot = n, Jr(l) && kr(e);
  }
  function Kr(e, l, t) {
    return t(function() {
      Jr(l) && kr(e);
    });
  }
  function Jr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !Ol(e, t);
    } catch {
      return !0;
    }
  }
  function kr(e) {
    var l = un(e, 2);
    l !== null && xl(l, e, 2);
  }
  function Vc(e) {
    var l = hl();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), mn) {
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
      lastRenderedReducer: gt,
      lastRenderedState: e
    }, l;
  }
  function Wr(e, l, t, n) {
    return e.baseState = t, Qc(
      e,
      Ee,
      typeof n == "function" ? n : gt
    );
  }
  function Ih(e, l, t, n, a) {
    if (ei(e)) throw Error(s(485));
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
      C.T !== null ? t(!0) : u.isTransition = !1, n(u), t = l.pending, t === null ? (u.next = l.pending = u, $r(l, u)) : (u.next = t.next, l.pending = t.next = u);
    }
  }
  function $r(e, l) {
    var t = l.action, n = l.payload, a = e.state;
    if (l.isTransition) {
      var u = C.T, c = {};
      C.T = c;
      try {
        var o = t(a, n), h = C.S;
        h !== null && h(c, o), Fr(e, l, o);
      } catch (A) {
        Kc(e, l, A);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), C.T = u;
      }
    } else
      try {
        u = t(a, n), Fr(e, l, u);
      } catch (A) {
        Kc(e, l, A);
      }
  }
  function Fr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        Ir(e, l, n);
      },
      function(n) {
        return Kc(e, l, n);
      }
    ) : Ir(e, l, t);
  }
  function Ir(e, l, t) {
    l.status = "fulfilled", l.value = t, Pr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, $r(e, t)));
  }
  function Kc(e, l, t) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = t, Pr(l), l = l.next;
      while (l !== n);
    }
    e.action = null;
  }
  function Pr(e) {
    e = e.listeners;
    for (var l = 0; l < e.length; l++) (0, e[l])();
  }
  function es(e, l) {
    return l;
  }
  function ls(e, l) {
    if (he) {
      var t = Ce.formState;
      if (t !== null) {
        e: {
          var n = ue;
          if (he) {
            if (we) {
              l: {
                for (var a = we, u = Zl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = Kl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                we = Kl(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Ut(n);
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
      lastRenderedReducer: es,
      lastRenderedState: l
    }, t.queue = n, t = ps.bind(
      null,
      ue,
      n
    ), n.dispatch = t, n = Vc(!1), u = Ic.bind(
      null,
      ue,
      !1,
      n.queue
    ), n = hl(), a = {
      state: l,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, t = Ih.bind(
      null,
      ue,
      a,
      u,
      t
    ), a.dispatch = t, n.memoizedState = e, [l, t, !1];
  }
  function ts(e) {
    var l = Ze();
    return ns(l, Ee, e);
  }
  function ns(e, l, t) {
    if (l = Qc(
      e,
      l,
      es
    )[0], e = Fu(gt)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Ya(l);
      } catch (c) {
        throw c === Jn ? Lu : c;
      }
    else n = l;
    l = Ze();
    var a = l.queue, u = a.dispatch;
    return t !== l.memoizedState && (ue.flags |= 2048, In(
      9,
      { destroy: void 0 },
      Ph.bind(null, a, t),
      null
    )), [n, u, e];
  }
  function Ph(e, l) {
    e.action = l;
  }
  function as(e) {
    var l = Ze(), t = Ee;
    if (t !== null)
      return ns(l, t, e);
    Ze(), l = l.memoizedState, t = Ze();
    var n = t.queue.dispatch;
    return t.memoizedState = e, [l, n, !1];
  }
  function In(e, l, t, n) {
    return e = { tag: e, create: t, deps: n, inst: l, next: null }, l = ue.updateQueue, l === null && (l = Wu(), ue.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, l.lastEffect = e), e;
  }
  function us() {
    return Ze().memoizedState;
  }
  function Iu(e, l, t, n) {
    var a = hl();
    ue.flags |= e, a.memoizedState = In(
      1 | l,
      { destroy: void 0 },
      t,
      n === void 0 ? null : n
    );
  }
  function Pu(e, l, t, n) {
    var a = Ze();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Ee !== null && n !== null && jc(n, Ee.memoizedState.deps) ? a.memoizedState = In(l, u, t, n) : (ue.flags |= e, a.memoizedState = In(
      1 | l,
      u,
      t,
      n
    ));
  }
  function is(e, l) {
    Iu(8390656, 8, e, l);
  }
  function Jc(e, l) {
    Pu(2048, 8, e, l);
  }
  function ey(e) {
    ue.flags |= 4;
    var l = ue.updateQueue;
    if (l === null)
      l = Wu(), ue.updateQueue = l, l.events = [e];
    else {
      var t = l.events;
      t === null ? l.events = [e] : t.push(e);
    }
  }
  function cs(e) {
    var l = Ze().memoizedState;
    return ey({ ref: l, nextImpl: e }), function() {
      if ((be & 2) !== 0) throw Error(s(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function fs(e, l) {
    return Pu(4, 2, e, l);
  }
  function os(e, l) {
    return Pu(4, 4, e, l);
  }
  function rs(e, l) {
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
  function ss(e, l, t) {
    t = t != null ? t.concat([e]) : null, Pu(4, 4, rs.bind(null, l, e), t);
  }
  function kc() {
  }
  function ds(e, l) {
    var t = Ze();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    return l !== null && jc(l, n[1]) ? n[0] : (t.memoizedState = [e, l], e);
  }
  function hs(e, l) {
    var t = Ze();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    if (l !== null && jc(l, n[1]))
      return n[0];
    if (n = e(), mn) {
      K(!0);
      try {
        e();
      } finally {
        K(!1);
      }
    }
    return t.memoizedState = [n, l], n;
  }
  function Wc(e, l, t) {
    return t === void 0 || (mt & 1073741824) !== 0 && (se & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = yd(), ue.lanes |= e, Xt |= e, t);
  }
  function ys(e, l, t, n) {
    return Ol(t, l) ? t : Wn.current !== null ? (e = Wc(e, t, n), Ol(e, l) || (Je = !0), e) : (mt & 42) === 0 || (mt & 1073741824) !== 0 && (se & 261930) === 0 ? (Je = !0, e.memoizedState = t) : (e = yd(), ue.lanes |= e, Xt |= e, l);
  }
  function ms(e, l, t, n, a) {
    var u = j.p;
    j.p = u !== 0 && 8 > u ? u : 8;
    var c = C.T, o = {};
    C.T = o, Ic(e, !1, l, t);
    try {
      var h = a(), A = C.S;
      if (A !== null && A(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var _ = Wh(
          h,
          n
        );
        La(
          e,
          l,
          _,
          Hl(e)
        );
      } else
        La(
          e,
          l,
          n,
          Hl(e)
        );
    } catch (H) {
      La(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: H },
        Hl()
      );
    } finally {
      j.p = u, c !== null && o.types !== null && (c.types = o.types), C.T = c;
    }
  }
  function ly() {
  }
  function $c(e, l, t, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = gs(e).queue;
    ms(
      e,
      a,
      l,
      F,
      t === null ? ly : function() {
        return vs(e), t(n);
      }
    );
  }
  function gs(e) {
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
        lastRenderedReducer: gt,
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
        lastRenderedReducer: gt,
        lastRenderedState: t
      },
      next: null
    }, e.memoizedState = l, e = e.alternate, e !== null && (e.memoizedState = l), l;
  }
  function vs(e) {
    var l = gs(e);
    l.next === null && (l = e.alternate.memoizedState), La(
      e,
      l.next.queue,
      {},
      Hl()
    );
  }
  function Fc() {
    return nl(au);
  }
  function Ss() {
    return Ze().memoizedState;
  }
  function bs() {
    return Ze().memoizedState;
  }
  function ty(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = Hl();
          e = Nt(t);
          var n = jt(l, e, t);
          n !== null && (xl(n, l, t), Na(n, l, t)), l = { cache: Oc() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function ny(e, l, t) {
    var n = Hl();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ei(e) ? Ts(l, t) : (t = mc(e, l, t, n), t !== null && (xl(t, e, n), As(t, l, n)));
  }
  function ps(e, l, t) {
    var n = Hl();
    La(e, l, t, n);
  }
  function La(e, l, t, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ei(e)) Ts(l, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var c = l.lastRenderedState, o = u(c, t);
          if (a.hasEagerState = !0, a.eagerState = o, Ol(o, c))
            return Ru(e, l, a, 0), Ce === null && Uu(), !1;
        } catch {
        }
      if (t = mc(e, l, a, n), t !== null)
        return xl(t, e, n), As(t, l, n), !0;
    }
    return !1;
  }
  function Ic(e, l, t, n) {
    if (n = {
      lane: 2,
      revertLane: wf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ei(e)) {
      if (l) throw Error(s(479));
    } else
      l = mc(
        e,
        t,
        n,
        2
      ), l !== null && xl(l, e, 2);
  }
  function ei(e) {
    var l = e.alternate;
    return e === ue || l !== null && l === ue;
  }
  function Ts(e, l) {
    $n = Ju = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function As(e, l, t) {
    if ((t & 4194048) !== 0) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, Mo(e, t);
    }
  }
  var Xa = {
    readContext: nl,
    use: $u,
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
  Xa.useEffectEvent = Ge;
  var xs = {
    readContext: nl,
    use: $u,
    useCallback: function(e, l) {
      return hl().memoizedState = [
        e,
        l === void 0 ? null : l
      ], e;
    },
    useContext: nl,
    useEffect: is,
    useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, Iu(
        4194308,
        4,
        rs.bind(null, l, e),
        t
      );
    },
    useLayoutEffect: function(e, l) {
      return Iu(4194308, 4, e, l);
    },
    useInsertionEffect: function(e, l) {
      Iu(4, 2, e, l);
    },
    useMemo: function(e, l) {
      var t = hl();
      l = l === void 0 ? null : l;
      var n = e();
      if (mn) {
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
        if (mn) {
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
      }, n.queue = e, e = e.dispatch = ny.bind(
        null,
        ue,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var l = hl();
      return e = { current: e }, l.memoizedState = e;
    },
    useState: function(e) {
      e = Vc(e);
      var l = e.queue, t = ps.bind(null, ue, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: kc,
    useDeferredValue: function(e, l) {
      var t = hl();
      return Wc(t, e, l);
    },
    useTransition: function() {
      var e = Vc(!1);
      return e = ms.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), hl().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, l, t) {
      var n = ue, a = hl();
      if (he) {
        if (t === void 0)
          throw Error(s(407));
        t = t();
      } else {
        if (t = l(), Ce === null)
          throw Error(s(349));
        (se & 127) !== 0 || Zr(n, l, t);
      }
      a.memoizedState = t;
      var u = { value: t, getSnapshot: l };
      return a.queue = u, is(Kr.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, In(
        9,
        { destroy: void 0 },
        Vr.bind(
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
      var e = hl(), l = Ce.identifierPrefix;
      if (he) {
        var t = tt, n = lt;
        t = (n & ~(1 << 32 - ee(n) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = ku++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = $h++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: Fc,
    useFormState: ls,
    useActionState: ls,
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
      return l.queue = t, l = Ic.bind(
        null,
        ue,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: Xc,
    useCacheRefresh: function() {
      return hl().memoizedState = ty.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var l = hl(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((be & 2) !== 0)
          throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, Pc = {
    readContext: nl,
    use: $u,
    useCallback: ds,
    useContext: nl,
    useEffect: Jc,
    useImperativeHandle: ss,
    useInsertionEffect: fs,
    useLayoutEffect: os,
    useMemo: hs,
    useReducer: Fu,
    useRef: us,
    useState: function() {
      return Fu(gt);
    },
    useDebugValue: kc,
    useDeferredValue: function(e, l) {
      var t = Ze();
      return ys(
        t,
        Ee.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Fu(gt)[0], l = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Ya(e),
        l
      ];
    },
    useSyncExternalStore: Qr,
    useId: Ss,
    useHostTransitionStatus: Fc,
    useFormState: ts,
    useActionState: ts,
    useOptimistic: function(e, l) {
      var t = Ze();
      return Wr(t, Ee, e, l);
    },
    useMemoCache: Xc,
    useCacheRefresh: bs
  };
  Pc.useEffectEvent = cs;
  var zs = {
    readContext: nl,
    use: $u,
    useCallback: ds,
    useContext: nl,
    useEffect: Jc,
    useImperativeHandle: ss,
    useInsertionEffect: fs,
    useLayoutEffect: os,
    useMemo: hs,
    useReducer: Zc,
    useRef: us,
    useState: function() {
      return Zc(gt);
    },
    useDebugValue: kc,
    useDeferredValue: function(e, l) {
      var t = Ze();
      return Ee === null ? Wc(t, e, l) : ys(
        t,
        Ee.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Zc(gt)[0], l = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Ya(e),
        l
      ];
    },
    useSyncExternalStore: Qr,
    useId: Ss,
    useHostTransitionStatus: Fc,
    useFormState: as,
    useActionState: as,
    useOptimistic: function(e, l) {
      var t = Ze();
      return Ee !== null ? Wr(t, Ee, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: Xc,
    useCacheRefresh: bs
  };
  zs.useEffectEvent = cs;
  function ef(e, l, t, n) {
    l = e.memoizedState, t = t(n, l), t = t == null ? l : z({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var lf = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var n = Hl(), a = Nt(n);
      a.payload = l, t != null && (a.callback = t), l = jt(e, a, n), l !== null && (xl(l, e, n), Na(l, e, n));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var n = Hl(), a = Nt(n);
      a.tag = 1, a.payload = l, t != null && (a.callback = t), l = jt(e, a, n), l !== null && (xl(l, e, n), Na(l, e, n));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = Hl(), n = Nt(t);
      n.tag = 2, l != null && (n.callback = l), l = jt(e, n, t), l !== null && (xl(l, e, t), Na(l, e, t));
    }
  };
  function Es(e, l, t, n, a, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, c) : l.prototype && l.prototype.isPureReactComponent ? !Ca(t, n) || !Ca(a, u) : !0;
  }
  function Os(e, l, t, n) {
    e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, n), l.state !== e && lf.enqueueReplaceState(l, l.state, null);
  }
  function gn(e, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var n in l)
        n !== "ref" && (t[n] = l[n]);
    }
    if (e = e.defaultProps) {
      t === l && (t = z({}, t));
      for (var a in e)
        t[a] === void 0 && (t[a] = e[a]);
    }
    return t;
  }
  function Ms(e) {
    Hu(e);
  }
  function Cs(e) {
    console.error(e);
  }
  function _s(e) {
    Hu(e);
  }
  function li(e, l) {
    try {
      var t = e.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ds(e, l, t) {
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
  function tf(e, l, t) {
    return t = Nt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      li(e, l);
    }, t;
  }
  function ws(e) {
    return e = Nt(e), e.tag = 3, e;
  }
  function Hs(e, l, t, n) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Ds(l, t, n);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Ds(l, t, n), typeof a != "function" && (Qt === null ? Qt = /* @__PURE__ */ new Set([this]) : Qt.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function ay(e, l, t, n, a) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = t.alternate, l !== null && Zn(
        l,
        t,
        a,
        !0
      ), t = Cl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return Vl === null ? hi() : t.alternate === null && Ye === 0 && (Ye = 3), t.flags &= -257, t.flags |= 65536, t.lanes = a, n === Xu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), Cf(e, n, a)), !1;
          case 22:
            return t.flags |= 65536, n === Xu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), Cf(e, n, a)), !1;
        }
        throw Error(s(435, t.tag));
      }
      return Cf(e, n, a), hi(), !1;
    }
    if (he)
      return l = Cl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== Tc && (e = Error(s(422), { cause: n }), wa(Ll(e, t)))) : (n !== Tc && (l = Error(s(423), {
        cause: n
      }), wa(
        Ll(l, t)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Ll(n, t), a = tf(
        e.stateNode,
        n,
        a
      ), Hc(e, a), Ye !== 4 && (Ye = 2)), !1;
    var u = Error(s(520), { cause: n });
    if (u = Ll(u, t), $a === null ? $a = [u] : $a.push(u), Ye !== 4 && (Ye = 2), l === null) return !0;
    n = Ll(n, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = a & -a, t.lanes |= e, e = tf(t.stateNode, n, e), Hc(t, e), !1;
        case 1:
          if (l = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Qt === null || !Qt.has(u))))
            return t.flags |= 65536, a &= -a, t.lanes |= a, a = ws(a), Hs(
              a,
              e,
              t,
              n
            ), Hc(t, a), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var nf = Error(s(461)), Je = !1;
  function al(e, l, t, n) {
    l.child = e === null ? Nr(l, null, t, n) : yn(
      l,
      e.child,
      t,
      n
    );
  }
  function Us(e, l, t, n, a) {
    t = t.render;
    var u = l.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return rn(l), n = qc(
      e,
      l,
      t,
      c,
      u,
      a
    ), o = Gc(), e !== null && !Je ? (Yc(e, l, a), vt(e, l, a)) : (he && o && bc(l), l.flags |= 1, al(e, l, n, a), l.child);
  }
  function Rs(e, l, t, n, a) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !gc(u) && u.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = u, Bs(
        e,
        l,
        u,
        n,
        a
      )) : (e = Nu(
        t.type,
        null,
        n,
        l,
        l.mode,
        a
      ), e.ref = l.ref, e.return = l, l.child = e);
    }
    if (u = e.child, !df(e, a)) {
      var c = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Ca, t(c, n) && e.ref === l.ref)
        return vt(e, l, a);
    }
    return l.flags |= 1, e = st(u, n), e.ref = l.ref, e.return = l, l.child = e;
  }
  function Bs(e, l, t, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ca(u, n) && e.ref === l.ref)
        if (Je = !1, l.pendingProps = n = u, df(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return l.lanes = e.lanes, vt(e, l, a);
    }
    return af(
      e,
      l,
      t,
      n,
      a
    );
  }
  function Ns(e, l, t, n) {
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
        return js(
          e,
          l,
          u,
          t,
          n
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Yu(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Gr(l, u) : Rc(), Yr(l);
      else
        return n = l.lanes = 536870912, js(
          e,
          l,
          u !== null ? u.baseLanes | t : t,
          t,
          n
        );
    } else
      u !== null ? (Yu(l, u.cachePool), Gr(l, u), Gt(), l.memoizedState = null) : (e !== null && Yu(l, null), Rc(), Gt());
    return al(e, l, a, t), l.child;
  }
  function Qa(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function js(e, l, t, n, a) {
    var u = Cc();
    return u = u === null ? null : { parent: Ve._currentValue, pool: u }, l.memoizedState = {
      baseLanes: t,
      cachePool: u
    }, e !== null && Yu(l, null), Rc(), Yr(l), e !== null && Zn(e, l, n, !0), l.childLanes = a, null;
  }
  function ti(e, l) {
    return l = ai(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function qs(e, l, t) {
    return yn(l, e.child, null, t), e = ti(l, l.pendingProps), e.flags |= 2, _l(l), l.memoizedState = null, e;
  }
  function uy(e, l, t) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (he) {
        if (n.mode === "hidden")
          return e = ti(l, n), l.lanes = 536870912, Qa(null, e);
        if (Nc(l), (e = we) ? (e = $d(
          e,
          Zl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: wt !== null ? { id: lt, overflow: tt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Tr(e), t.return = l, l.child = t, tl = l, we = null)) : e = null, e === null) throw Ut(l);
        return l.lanes = 536870912, null;
      }
      return ti(l, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Nc(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = qs(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(s(558));
      else if (Je || Zn(e, l, t, !1), a = (t & e.childLanes) !== 0, Je || a) {
        if (n = Ce, n !== null && (c = Co(n, t), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, un(e, c), xl(n, e, c), nf;
        hi(), l = qs(
          e,
          l,
          t
        );
      } else
        e = u.treeContext, we = Kl(c.nextSibling), tl = l, he = !0, Ht = null, Zl = !1, e !== null && zr(l, e), l = ti(l, n), l.flags |= 4096;
      return l;
    }
    return e = st(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function ni(e, l) {
    var t = l.ref;
    if (t === null)
      e !== null && e.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(s(284));
      (e === null || e.ref !== t) && (l.flags |= 4194816);
    }
  }
  function af(e, l, t, n, a) {
    return rn(l), t = qc(
      e,
      l,
      t,
      n,
      void 0,
      a
    ), n = Gc(), e !== null && !Je ? (Yc(e, l, a), vt(e, l, a)) : (he && n && bc(l), l.flags |= 1, al(e, l, t, a), l.child);
  }
  function Gs(e, l, t, n, a, u) {
    return rn(l), l.updateQueue = null, t = Xr(
      l,
      n,
      t,
      a
    ), Lr(e), n = Gc(), e !== null && !Je ? (Yc(e, l, u), vt(e, l, u)) : (he && n && bc(l), l.flags |= 1, al(e, l, t, u), l.child);
  }
  function Ys(e, l, t, n, a) {
    if (rn(l), l.stateNode === null) {
      var u = Yn, c = t.contextType;
      typeof c == "object" && c !== null && (u = nl(c)), u = new t(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = lf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, Dc(l), c = t.contextType, u.context = typeof c == "object" && c !== null ? nl(c) : Yn, u.state = l.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (ef(
        l,
        t,
        c,
        n
      ), u.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && lf.enqueueReplaceState(u, u.state, null), qa(l, n, u, a), ja(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = l.stateNode;
      var o = l.memoizedProps, h = gn(t, o);
      u.props = h;
      var A = u.context, _ = t.contextType;
      c = Yn, typeof _ == "object" && _ !== null && (c = nl(_));
      var H = t.getDerivedStateFromProps;
      _ = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || A !== c) && Os(
        l,
        u,
        n,
        c
      ), Bt = !1;
      var E = l.memoizedState;
      u.state = E, qa(l, n, u, a), ja(), A = l.memoizedState, o || E !== A || Bt ? (typeof H == "function" && (ef(
        l,
        t,
        H,
        n
      ), A = l.memoizedState), (h = Bt || Es(
        l,
        t,
        h,
        n,
        E,
        A,
        c
      )) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = A), u.props = n, u.state = A, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, wc(e, l), c = l.memoizedProps, _ = gn(t, c), u.props = _, H = l.pendingProps, E = u.context, A = t.contextType, h = Yn, typeof A == "object" && A !== null && (h = nl(A)), o = t.getDerivedStateFromProps, (A = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== H || E !== h) && Os(
        l,
        u,
        n,
        h
      ), Bt = !1, E = l.memoizedState, u.state = E, qa(l, n, u, a), ja();
      var M = l.memoizedState;
      c !== H || E !== M || Bt || e !== null && e.dependencies !== null && qu(e.dependencies) ? (typeof o == "function" && (ef(
        l,
        t,
        o,
        n
      ), M = l.memoizedState), (_ = Bt || Es(
        l,
        t,
        _,
        n,
        E,
        M,
        h
      ) || e !== null && e.dependencies !== null && qu(e.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, M, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        M,
        h
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = M), u.props = n, u.state = M, u.context = h, n = _) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (l.flags |= 1024), n = !1);
    }
    return u = n, ni(e, l), n = (l.flags & 128) !== 0, u || n ? (u = l.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, e !== null && n ? (l.child = yn(
      l,
      e.child,
      null,
      a
    ), l.child = yn(
      l,
      null,
      t,
      a
    )) : al(e, l, t, a), l.memoizedState = u.state, e = l.child) : e = vt(
      e,
      l,
      a
    ), e;
  }
  function Ls(e, l, t, n) {
    return fn(), l.flags |= 256, al(e, l, t, n), l.child;
  }
  var uf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cf(e) {
    return { baseLanes: e, cachePool: Dr() };
  }
  function ff(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= wl), e;
  }
  function Xs(e, l, t) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), c && (a = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (he) {
        if (a ? qt(l) : Gt(), (e = we) ? (e = $d(
          e,
          Zl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: wt !== null ? { id: lt, overflow: tt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Tr(e), t.return = l, l.child = t, tl = l, we = null)) : e = null, e === null) throw Ut(l);
        return Zf(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (Gt(), a = l.mode, o = ai(
        { mode: "hidden", children: o },
        a
      ), n = cn(
        n,
        a,
        t,
        null
      ), o.return = l, n.return = l, o.sibling = n, l.child = o, n = l.child, n.memoizedState = cf(t), n.childLanes = ff(
        e,
        c,
        t
      ), l.memoizedState = uf, Qa(null, n)) : (qt(l), of(l, o));
    }
    var h = e.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        l.flags & 256 ? (qt(l), l.flags &= -257, l = rf(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (Gt(), l.child = e.child, l.flags |= 128, l = null) : (Gt(), o = n.fallback, a = l.mode, n = ai(
          { mode: "visible", children: n.children },
          a
        ), o = cn(
          o,
          a,
          t,
          null
        ), o.flags |= 2, n.return = l, o.return = l, n.sibling = o, l.child = n, yn(
          l,
          e.child,
          null,
          t
        ), n = l.child, n.memoizedState = cf(t), n.childLanes = ff(
          e,
          c,
          t
        ), l.memoizedState = uf, l = Qa(null, n));
      else if (qt(l), Zf(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var A = c.dgst;
        c = A, n = Error(s(419)), n.stack = "", n.digest = c, wa({ value: n, source: null, stack: null }), l = rf(
          e,
          l,
          t
        );
      } else if (Je || Zn(e, l, t, !1), c = (t & e.childLanes) !== 0, Je || c) {
        if (c = Ce, c !== null && (n = Co(c, t), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, un(e, n), xl(c, e, n), nf;
        Qf(o) || hi(), l = rf(
          e,
          l,
          t
        );
      } else
        Qf(o) ? (l.flags |= 192, l.child = e.child, l = null) : (e = h.treeContext, we = Kl(
          o.nextSibling
        ), tl = l, he = !0, Ht = null, Zl = !1, e !== null && zr(l, e), l = of(
          l,
          n.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (Gt(), o = n.fallback, a = l.mode, h = e.child, A = h.sibling, n = st(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, A !== null ? o = st(
      A,
      o
    ) : (o = cn(
      o,
      a,
      t,
      null
    ), o.flags |= 2), o.return = l, n.return = l, n.sibling = o, l.child = n, Qa(null, n), n = l.child, o = e.child.memoizedState, o === null ? o = cf(t) : (a = o.cachePool, a !== null ? (h = Ve._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Dr(), o = {
      baseLanes: o.baseLanes | t,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = ff(
      e,
      c,
      t
    ), l.memoizedState = uf, Qa(e.child, n)) : (qt(l), t = e.child, e = t.sibling, t = st(t, {
      mode: "visible",
      children: n.children
    }), t.return = l, t.sibling = null, e !== null && (c = l.deletions, c === null ? (l.deletions = [e], l.flags |= 16) : c.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function of(e, l) {
    return l = ai(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function ai(e, l) {
    return e = Ml(22, e, null, l), e.lanes = 0, e;
  }
  function rf(e, l, t) {
    return yn(l, e.child, null, t), e = of(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function Qs(e, l, t) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l), zc(e.return, l, t);
  }
  function sf(e, l, t, n, a, u) {
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
  function Zs(e, l, t) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Qe.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, G(Qe, c), al(e, l, n, t), n = he ? Da : 0, !o && e !== null && (e.flags & 128) !== 0)
      e: for (e = l.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Qs(e, t, l);
        else if (e.tag === 19)
          Qs(e, t, l);
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
          e = t.alternate, e !== null && Ku(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = l.child, l.child = null) : (a = t.sibling, t.sibling = null), sf(
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
          if (e = a.alternate, e !== null && Ku(e) === null) {
            l.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        sf(
          l,
          !0,
          t,
          null,
          u,
          n
        );
        break;
      case "together":
        sf(
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
  function vt(e, l, t) {
    if (e !== null && (l.dependencies = e.dependencies), Xt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (Zn(
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
      for (e = l.child, t = st(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; )
        e = e.sibling, t = t.sibling = st(e, e.pendingProps), t.return = l;
      t.sibling = null;
    }
    return l.child;
  }
  function df(e, l) {
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && qu(e)));
  }
  function iy(e, l, t) {
    switch (l.tag) {
      case 3:
        Ue(l, l.stateNode.containerInfo), Rt(l, Ve, e.memoizedState.cache), fn();
        break;
      case 27:
      case 5:
        Ae(l);
        break;
      case 4:
        Ue(l, l.stateNode.containerInfo);
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
          return l.flags |= 128, Nc(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (qt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? Xs(e, l, t) : (qt(l), e = vt(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        qt(l);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (t & l.childLanes) !== 0, n || (Zn(
          e,
          l,
          t,
          !1
        ), n = (t & l.childLanes) !== 0), a) {
          if (n)
            return Zs(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(Qe, Qe.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, Ns(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        Rt(l, Ve, e.memoizedState.cache);
    }
    return vt(e, l, t);
  }
  function Vs(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        Je = !0;
      else {
        if (!df(e, t) && (l.flags & 128) === 0)
          return Je = !1, iy(
            e,
            l,
            t
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, he && (l.flags & 1048576) !== 0 && xr(l, Da, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          var n = l.pendingProps;
          if (e = dn(l.elementType), l.type = e, typeof e == "function")
            gc(e) ? (n = gn(e, n), l.tag = 1, l = Ys(
              null,
              l,
              e,
              n,
              t
            )) : (l.tag = 0, l = af(
              null,
              l,
              e,
              n,
              t
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === Fe) {
                l.tag = 11, l = Us(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              } else if (a === fe) {
                l.tag = 14, l = Rs(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              }
            }
            throw l = zl(e) || e, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return af(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 1:
        return n = l.type, a = gn(
          n,
          l.pendingProps
        ), Ys(
          e,
          l,
          n,
          a,
          t
        );
      case 3:
        e: {
          if (Ue(
            l,
            l.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          n = l.pendingProps;
          var u = l.memoizedState;
          a = u.element, wc(e, l), qa(l, n, null, t);
          var c = l.memoizedState;
          if (n = c.cache, Rt(l, Ve, n), n !== u.cache && Ec(
            l,
            [Ve],
            t,
            !0
          ), ja(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Ls(
                e,
                l,
                n,
                t
              );
              break e;
            } else if (n !== a) {
              a = Ll(
                Error(s(424)),
                l
              ), wa(a), l = Ls(
                e,
                l,
                n,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, we = Kl(e.firstChild), tl = l, he = !0, Ht = null, Zl = !0, t = Nr(
                l,
                null,
                n,
                t
              ), l.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (fn(), n === a) {
              l = vt(
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
        return ni(e, l), e === null ? (t = t0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = t : he || (t = l.type, e = l.pendingProps, n = pi(
          te.current
        ).createElement(t), n[ll] = l, n[vl] = e, ul(n, t, e), Ie(n), l.stateNode = n) : l.memoizedState = t0(
          l.type,
          e.memoizedProps,
          l.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ae(l), e === null && he && (n = l.stateNode = Pd(
          l.type,
          l.pendingProps,
          te.current
        ), tl = l, Zl = !0, a = we, Jt(l.type) ? (Vf = a, we = Kl(n.firstChild)) : we = a), al(
          e,
          l,
          l.pendingProps.children,
          t
        ), ni(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && he && ((a = n = we) && (n = Ny(
          n,
          l.type,
          l.pendingProps,
          Zl
        ), n !== null ? (l.stateNode = n, tl = l, we = Kl(n.firstChild), Zl = !1, a = !0) : a = !1), a || Ut(l)), Ae(l), a = l.type, u = l.pendingProps, c = e !== null ? e.memoizedProps : null, n = u.children, Yf(a, u) ? n = null : c !== null && Yf(a, c) && (l.flags |= 32), l.memoizedState !== null && (a = qc(
          e,
          l,
          Fh,
          null,
          null,
          t
        ), au._currentValue = a), ni(e, l), al(e, l, n, t), l.child;
      case 6:
        return e === null && he && ((e = t = we) && (t = jy(
          t,
          l.pendingProps,
          Zl
        ), t !== null ? (l.stateNode = t, tl = l, we = null, e = !0) : e = !1), e || Ut(l)), null;
      case 13:
        return Xs(e, l, t);
      case 4:
        return Ue(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, e === null ? l.child = yn(
          l,
          null,
          n,
          t
        ) : al(e, l, n, t), l.child;
      case 11:
        return Us(
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
        return a = l.type._context, n = l.pendingProps.children, rn(l), a = nl(a), n = n(a), l.flags |= 1, al(e, l, n, t), l.child;
      case 14:
        return Rs(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 15:
        return Bs(
          e,
          l,
          l.type,
          l.pendingProps,
          t
        );
      case 19:
        return Zs(e, l, t);
      case 31:
        return uy(e, l, t);
      case 22:
        return Ns(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return rn(l), n = nl(Ve), e === null ? (a = Cc(), a === null && (a = Ce, u = Oc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= t), a = u), l.memoizedState = { parent: n, cache: a }, Dc(l), Rt(l, Ve, a)) : ((e.lanes & t) !== 0 && (wc(e, l), qa(l, null, null, t), ja()), a = e.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Rt(l, Ve, n)) : (n = u.cache, Rt(l, Ve, n), n !== a.cache && Ec(
          l,
          [Ve],
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
  function St(e) {
    e.flags |= 4;
  }
  function hf(e, l, t, n, a) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Sd()) e.flags |= 8192;
        else
          throw hn = Xu, _c;
    } else e.flags &= -16777217;
  }
  function Ks(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !c0(l))
      if (Sd()) e.flags |= 8192;
      else
        throw hn = Xu, _c;
  }
  function ui(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? Eo() : 536870912, e.lanes |= l, ta |= l);
  }
  function Za(e, l) {
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
  function He(e) {
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
    switch (pc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(l), null;
      case 1:
        return He(l), null;
      case 3:
        return t = l.stateNode, n = null, e !== null && (n = e.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), yt(Ve), Te(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (Qn(l) ? St(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ac())), He(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return e === null ? (St(l), u !== null ? (He(l), Ks(l, u)) : (He(l), hf(
          l,
          a,
          null,
          n,
          t
        ))) : u ? u !== e.memoizedState ? (St(l), He(l), Ks(l, u)) : (He(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== n && St(l), He(l), hf(
          l,
          a,
          e,
          n,
          t
        )), null;
      case 27:
        if (An(l), t = te.current, a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && St(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(s(166));
            return He(l), null;
          }
          e = Q.current, Qn(l) ? Er(l) : (e = Pd(a, n, t), l.stateNode = e, St(l));
        }
        return He(l), null;
      case 5:
        if (An(l), a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && St(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(s(166));
            return He(l), null;
          }
          if (u = Q.current, Qn(l))
            Er(l);
          else {
            var c = pi(
              te.current
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
            u[ll] = l, u[vl] = n;
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
            n && St(l);
          }
        }
        return He(l), hf(
          l,
          l.type,
          e === null ? null : e.memoizedProps,
          l.pendingProps,
          t
        ), null;
      case 6:
        if (e && l.stateNode != null)
          e.memoizedProps !== n && St(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(s(166));
          if (e = te.current, Qn(l)) {
            if (e = l.stateNode, t = l.memoizedProps, n = null, a = tl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[ll] = l, e = !!(e.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || Xd(e.nodeValue, t)), e || Ut(l, !0);
          } else
            e = pi(e).createTextNode(
              n
            ), e[ll] = l, l.stateNode = e;
        }
        return He(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Qn(l), t !== null) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[ll] = l;
            } else
              fn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            He(l), e = !1;
          } else
            t = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (_l(l), l) : (_l(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(s(558));
        }
        return He(l), null;
      case 13:
        if (n = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Qn(l), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[ll] = l;
            } else
              fn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            He(l), a = !1;
          } else
            a = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (_l(l), l) : (_l(l), null);
        }
        return _l(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = n !== null, e = e !== null && e.memoizedState !== null, t && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), ui(l, l.updateQueue), He(l), null);
      case 4:
        return Te(), e === null && Bf(l.stateNode.containerInfo), He(l), null;
      case 10:
        return yt(l.type), He(l), null;
      case 19:
        if (U(Qe), n = l.memoizedState, n === null) return He(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Za(n, !1);
          else {
            if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (u = Ku(e), u !== null) {
                  for (l.flags |= 128, Za(n, !1), e = u.updateQueue, l.updateQueue = e, ui(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    pr(t, e), t = t.sibling;
                  return G(
                    Qe,
                    Qe.current & 1 | 2
                  ), he && dt(l, n.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            n.tail !== null && fl() > ri && (l.flags |= 128, a = !0, Za(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Ku(u), e !== null) {
              if (l.flags |= 128, a = !0, e = e.updateQueue, l.updateQueue = e, ui(l, e), Za(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !he)
                return He(l), null;
            } else
              2 * fl() - n.renderingStartTime > ri && t !== 536870912 && (l.flags |= 128, a = !0, Za(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (e = n.last, e !== null ? e.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = fl(), e.sibling = null, t = Qe.current, G(
          Qe,
          a ? t & 1 | 2 : t & 1
        ), he && dt(l, n.treeForkCount), e) : (He(l), null);
      case 22:
      case 23:
        return _l(l), Bc(), n = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (He(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : He(l), t = l.updateQueue, t !== null && ui(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== t && (l.flags |= 2048), e !== null && U(sn), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), yt(Ve), He(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function fy(e, l) {
    switch (pc(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return yt(Ve), Te(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return An(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (_l(l), l.alternate === null)
            throw Error(s(340));
          fn();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (_l(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          fn();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return U(Qe), null;
      case 4:
        return Te(), null;
      case 10:
        return yt(l.type), null;
      case 22:
      case 23:
        return _l(l), Bc(), e !== null && U(sn), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return yt(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Js(e, l) {
    switch (pc(l), l.tag) {
      case 3:
        yt(Ve), Te();
        break;
      case 26:
      case 27:
      case 5:
        An(l);
        break;
      case 4:
        Te();
        break;
      case 31:
        l.memoizedState !== null && _l(l);
        break;
      case 13:
        _l(l);
        break;
      case 19:
        U(Qe);
        break;
      case 10:
        yt(l.type);
        break;
      case 22:
      case 23:
        _l(l), Bc(), e !== null && U(sn);
        break;
      case 24:
        yt(Ve);
    }
  }
  function Va(e, l) {
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
      ze(l, l.return, o);
    }
  }
  function Yt(e, l, t) {
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
              var h = t, A = o;
              try {
                A();
              } catch (_) {
                ze(
                  a,
                  h,
                  _
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (_) {
      ze(l, l.return, _);
    }
  }
  function ks(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        qr(l, t);
      } catch (n) {
        ze(e, e.return, n);
      }
    }
  }
  function Ws(e, l, t) {
    t.props = gn(
      e.type,
      e.memoizedProps
    ), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (n) {
      ze(e, l, n);
    }
  }
  function Ka(e, l) {
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
      ze(e, l, a);
    }
  }
  function nt(e, l) {
    var t = e.ref, n = e.refCleanup;
    if (t !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          ze(e, l, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (a) {
          ze(e, l, a);
        }
      else t.current = null;
  }
  function $s(e) {
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
      ze(e, e.return, a);
    }
  }
  function yf(e, l, t) {
    try {
      var n = e.stateNode;
      Dy(n, e.type, t, l), n[vl] = l;
    } catch (a) {
      ze(e, e.return, a);
    }
  }
  function Fs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jt(e.type) || e.tag === 4;
  }
  function mf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gf(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = ot));
    else if (n !== 4 && (n === 27 && Jt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (gf(e, l, t), e = e.sibling; e !== null; )
        gf(e, l, t), e = e.sibling;
  }
  function ii(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (n !== 4 && (n === 27 && Jt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (ii(e, l, t), e = e.sibling; e !== null; )
        ii(e, l, t), e = e.sibling;
  }
  function Is(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var n = e.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      ul(l, n, t), l[ll] = e, l[vl] = t;
    } catch (u) {
      ze(e, e.return, u);
    }
  }
  var bt = !1, ke = !1, vf = !1, Ps = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function oy(e, l) {
    if (e = e.containerInfo, qf = Mi, e = sr(e), oc(e)) {
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
            var c = 0, o = -1, h = -1, A = 0, _ = 0, H = e, E = null;
            l: for (; ; ) {
              for (var M; H !== t || a !== 0 && H.nodeType !== 3 || (o = c + a), H !== u || n !== 0 && H.nodeType !== 3 || (h = c + n), H.nodeType === 3 && (c += H.nodeValue.length), (M = H.firstChild) !== null; )
                E = H, H = M;
              for (; ; ) {
                if (H === e) break l;
                if (E === t && ++A === a && (o = c), E === u && ++_ === n && (h = c), (M = H.nextSibling) !== null) break;
                H = E, E = H.parentNode;
              }
              H = M;
            }
            t = o === -1 || h === -1 ? null : { start: o, end: h };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Gf = { focusedElem: e, selectionRange: t }, Mi = !1, Pe = l; Pe !== null; )
      if (l = Pe, e = l.child, (l.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = l, Pe = e;
      else
        for (; Pe !== null; ) {
          switch (l = Pe, u = l.alternate, e = l.flags, l.tag) {
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
                  var X = gn(
                    t.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    X,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (P) {
                  ze(
                    t,
                    t.return,
                    P
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9)
                  Xf(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xf(e);
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
            e.return = l.return, Pe = e;
            break;
          }
          Pe = l.return;
        }
  }
  function ed(e, l, t) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(e, t), n & 4 && Va(5, t);
        break;
      case 1:
        if (Tt(e, t), n & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (c) {
              ze(t, t.return, c);
            }
          else {
            var a = gn(
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
              ze(
                t,
                t.return,
                c
              );
            }
          }
        n & 64 && ks(t), n & 512 && Ka(t, t.return);
        break;
      case 3:
        if (Tt(e, t), n & 64 && (e = t.updateQueue, e !== null)) {
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
            qr(e, l);
          } catch (c) {
            ze(t, t.return, c);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Is(t);
      case 26:
      case 5:
        Tt(e, t), l === null && n & 4 && $s(t), n & 512 && Ka(t, t.return);
        break;
      case 12:
        Tt(e, t);
        break;
      case 31:
        Tt(e, t), n & 4 && nd(e, t);
        break;
      case 13:
        Tt(e, t), n & 4 && ad(e, t), n & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Sy.bind(
          null,
          t
        ), qy(e, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || bt, !n) {
          l = l !== null && l.memoizedState !== null || ke, a = bt;
          var u = ke;
          bt = n, (ke = l) && !u ? At(
            e,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Tt(e, t), bt = a, ke = u;
        }
        break;
      case 30:
        break;
      default:
        Tt(e, t);
    }
  }
  function ld(e) {
    var l = e.alternate;
    l !== null && (e.alternate = null, ld(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && Ki(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Re = null, bl = !1;
  function pt(e, l, t) {
    for (t = t.child; t !== null; )
      td(e, l, t), t = t.sibling;
  }
  function td(e, l, t) {
    if (Y && typeof Y.onCommitFiberUnmount == "function")
      try {
        Y.onCommitFiberUnmount(q, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        ke || nt(t, l), pt(
          e,
          l,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        ke || nt(t, l);
        var n = Re, a = bl;
        Jt(t.type) && (Re = t.stateNode, bl = !1), pt(
          e,
          l,
          t
        ), lu(t.stateNode), Re = n, bl = a;
        break;
      case 5:
        ke || nt(t, l);
      case 6:
        if (n = Re, a = bl, Re = null, pt(
          e,
          l,
          t
        ), Re = n, bl = a, Re !== null)
          if (bl)
            try {
              (Re.nodeType === 9 ? Re.body : Re.nodeName === "HTML" ? Re.ownerDocument.body : Re).removeChild(t.stateNode);
            } catch (u) {
              ze(
                t,
                l,
                u
              );
            }
          else
            try {
              Re.removeChild(t.stateNode);
            } catch (u) {
              ze(
                t,
                l,
                u
              );
            }
        break;
      case 18:
        Re !== null && (bl ? (e = Re, kd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          t.stateNode
        ), ra(e)) : kd(Re, t.stateNode));
        break;
      case 4:
        n = Re, a = bl, Re = t.stateNode.containerInfo, bl = !0, pt(
          e,
          l,
          t
        ), Re = n, bl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yt(2, t, l), ke || Yt(4, t, l), pt(
          e,
          l,
          t
        );
        break;
      case 1:
        ke || (nt(t, l), n = t.stateNode, typeof n.componentWillUnmount == "function" && Ws(
          t,
          l,
          n
        )), pt(
          e,
          l,
          t
        );
        break;
      case 21:
        pt(
          e,
          l,
          t
        );
        break;
      case 22:
        ke = (n = ke) || t.memoizedState !== null, pt(
          e,
          l,
          t
        ), ke = n;
        break;
      default:
        pt(
          e,
          l,
          t
        );
    }
  }
  function nd(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ra(e);
      } catch (t) {
        ze(l, l.return, t);
      }
    }
  }
  function ad(e, l) {
    if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ra(e);
      } catch (t) {
        ze(l, l.return, t);
      }
  }
  function ry(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var l = e.stateNode;
        return l === null && (l = e.stateNode = new Ps()), l;
      case 22:
        return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new Ps()), l;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ci(e, l) {
    var t = ry(e);
    l.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var a = by.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function pl(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n], u = e, c = l, o = c;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Jt(o.type)) {
                Re = o.stateNode, bl = !1;
                break e;
              }
              break;
            case 5:
              Re = o.stateNode, bl = !1;
              break e;
            case 3:
            case 4:
              Re = o.stateNode.containerInfo, bl = !0;
              break e;
          }
          o = o.return;
        }
        if (Re === null) throw Error(s(160));
        td(u, c, a), Re = null, bl = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ud(l, e), l = l.sibling;
  }
  var Fl = null;
  function ud(e, l) {
    var t = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pl(l, e), Tl(e), n & 4 && (Yt(3, e, e.return), Va(3, e), Yt(5, e, e.return));
        break;
      case 1:
        pl(l, e), Tl(e), n & 512 && (ke || t === null || nt(t, t.return)), n & 64 && bt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
        break;
      case 26:
        var a = Fl;
        if (pl(l, e), Tl(e), n & 512 && (ke || t === null || nt(t, t.return)), n & 4) {
          var u = t !== null ? t.memoizedState : null;
          if (n = e.memoizedState, t === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, t = e.memoizedProps, a = a.ownerDocument || a;
                  l: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[ba] || u[ll] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ul(u, n, t), u[ll] = e, Ie(u), n = u;
                      break e;
                    case "link":
                      var c = u0(
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
                      if (c = u0(
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
                      throw Error(s(468, n));
                  }
                  u[ll] = e, Ie(u), n = u;
                }
                e.stateNode = n;
              } else
                i0(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = a0(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : u.count--, n === null ? i0(
              a,
              e.type,
              e.stateNode
            ) : a0(
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
        pl(l, e), Tl(e), n & 512 && (ke || t === null || nt(t, t.return)), t !== null && n & 4 && yf(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (pl(l, e), Tl(e), n & 512 && (ke || t === null || nt(t, t.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Un(a, "");
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, yf(
          e,
          a,
          t !== null ? t.memoizedProps : a
        )), n & 1024 && (vf = !0);
        break;
      case 6:
        if (pl(l, e), Tl(e), n & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          n = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = n;
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 3:
        if (xi = null, a = Fl, Fl = Ti(l.containerInfo), pl(l, e), Fl = a, Tl(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            ra(l.containerInfo);
          } catch (X) {
            ze(e, e.return, X);
          }
        vf && (vf = !1, id(e));
        break;
      case 4:
        n = Fl, Fl = Ti(
          e.stateNode.containerInfo
        ), pl(l, e), Tl(e), Fl = n;
        break;
      case 12:
        pl(l, e), Tl(e);
        break;
      case 31:
        pl(l, e), Tl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ci(e, n)));
        break;
      case 13:
        pl(l, e), Tl(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (oi = fl()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ci(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = t !== null && t.memoizedState !== null, A = bt, _ = ke;
        if (bt = A || a, ke = _ || h, pl(l, e), ke = _, bt = A, Tl(e), n & 8192)
          e: for (l = e.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (t === null || h || bt || ke || vn(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                h = t = l;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var H = h.memoizedProps.style, E = H != null && H.hasOwnProperty("display") ? H.display : null;
                    o.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (X) {
                  ze(h, h.return, X);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                h = l;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (X) {
                  ze(h, h.return, X);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                h = l;
                try {
                  var M = h.stateNode;
                  a ? Wd(M, !0) : Wd(h.stateNode, !1);
                } catch (X) {
                  ze(h, h.return, X);
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
        n & 4 && (n = e.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, ci(e, t))));
        break;
      case 19:
        pl(l, e), Tl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ci(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pl(l, e), Tl(e);
    }
  }
  function Tl(e) {
    var l = e.flags;
    if (l & 2) {
      try {
        for (var t, n = e.return; n !== null; ) {
          if (Fs(n)) {
            t = n;
            break;
          }
          n = n.return;
        }
        if (t == null) throw Error(s(160));
        switch (t.tag) {
          case 27:
            var a = t.stateNode, u = mf(e);
            ii(e, u, a);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Un(c, ""), t.flags &= -33);
            var o = mf(e);
            ii(e, o, c);
            break;
          case 3:
          case 4:
            var h = t.stateNode.containerInfo, A = mf(e);
            gf(
              e,
              A,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (_) {
        ze(e, e.return, _);
      }
      e.flags &= -3;
    }
    l & 4096 && (e.flags &= -4097);
  }
  function id(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var l = e;
        id(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
  }
  function Tt(e, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        ed(e, l.alternate, l), l = l.sibling;
  }
  function vn(e) {
    for (e = e.child; e !== null; ) {
      var l = e;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yt(4, l, l.return), vn(l);
          break;
        case 1:
          nt(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && Ws(
            l,
            l.return,
            t
          ), vn(l);
          break;
        case 27:
          lu(l.stateNode);
        case 26:
        case 5:
          nt(l, l.return), vn(l);
          break;
        case 22:
          l.memoizedState === null && vn(l);
          break;
        case 30:
          vn(l);
          break;
        default:
          vn(l);
      }
      e = e.sibling;
    }
  }
  function At(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var n = l.alternate, a = e, u = l, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          At(
            a,
            u,
            t
          ), Va(4, u);
          break;
        case 1:
          if (At(
            a,
            u,
            t
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (A) {
              ze(n, n.return, A);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  jr(h[a], o);
            } catch (A) {
              ze(n, n.return, A);
            }
          }
          t && c & 64 && ks(u), Ka(u, u.return);
          break;
        case 27:
          Is(u);
        case 26:
        case 5:
          At(
            a,
            u,
            t
          ), t && n === null && c & 4 && $s(u), Ka(u, u.return);
          break;
        case 12:
          At(
            a,
            u,
            t
          );
          break;
        case 31:
          At(
            a,
            u,
            t
          ), t && c & 4 && nd(a, u);
          break;
        case 13:
          At(
            a,
            u,
            t
          ), t && c & 4 && ad(a, u);
          break;
        case 22:
          u.memoizedState === null && At(
            a,
            u,
            t
          ), Ka(u, u.return);
          break;
        case 30:
          break;
        default:
          At(
            a,
            u,
            t
          );
      }
      l = l.sibling;
    }
  }
  function Sf(e, l) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && Ha(t));
  }
  function bf(e, l) {
    e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ha(e));
  }
  function Il(e, l, t, n) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        cd(
          e,
          l,
          t,
          n
        ), l = l.sibling;
  }
  function cd(e, l, t, n) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Il(
          e,
          l,
          t,
          n
        ), a & 2048 && Va(9, l);
        break;
      case 1:
        Il(
          e,
          l,
          t,
          n
        );
        break;
      case 3:
        Il(
          e,
          l,
          t,
          n
        ), a & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && Ha(e)));
        break;
      case 12:
        if (a & 2048) {
          Il(
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
            ze(l, l.return, h);
          }
        } else
          Il(
            e,
            l,
            t,
            n
          );
        break;
      case 31:
        Il(
          e,
          l,
          t,
          n
        );
        break;
      case 13:
        Il(
          e,
          l,
          t,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, c = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Il(
          e,
          l,
          t,
          n
        ) : Ja(e, l) : u._visibility & 2 ? Il(
          e,
          l,
          t,
          n
        ) : (u._visibility |= 2, Pn(
          e,
          l,
          t,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Sf(c, l);
        break;
      case 24:
        Il(
          e,
          l,
          t,
          n
        ), a & 2048 && bf(l.alternate, l);
        break;
      default:
        Il(
          e,
          l,
          t,
          n
        );
    }
  }
  function Pn(e, l, t, n, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = e, c = l, o = t, h = n, A = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Pn(
            u,
            c,
            o,
            h,
            a
          ), Va(8, c);
          break;
        case 23:
          break;
        case 22:
          var _ = c.stateNode;
          c.memoizedState !== null ? _._visibility & 2 ? Pn(
            u,
            c,
            o,
            h,
            a
          ) : Ja(
            u,
            c
          ) : (_._visibility |= 2, Pn(
            u,
            c,
            o,
            h,
            a
          )), a && A & 2048 && Sf(
            c.alternate,
            c
          );
          break;
        case 24:
          Pn(
            u,
            c,
            o,
            h,
            a
          ), a && A & 2048 && bf(c.alternate, c);
          break;
        default:
          Pn(
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
  function Ja(e, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = e, n = l, a = n.flags;
        switch (n.tag) {
          case 22:
            Ja(t, n), a & 2048 && Sf(
              n.alternate,
              n
            );
            break;
          case 24:
            Ja(t, n), a & 2048 && bf(n.alternate, n);
            break;
          default:
            Ja(t, n);
        }
        l = l.sibling;
      }
  }
  var ka = 8192;
  function ea(e, l, t) {
    if (e.subtreeFlags & ka)
      for (e = e.child; e !== null; )
        fd(
          e,
          l,
          t
        ), e = e.sibling;
  }
  function fd(e, l, t) {
    switch (e.tag) {
      case 26:
        ea(
          e,
          l,
          t
        ), e.flags & ka && e.memoizedState !== null && $y(
          t,
          Fl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ea(
          e,
          l,
          t
        );
        break;
      case 3:
      case 4:
        var n = Fl;
        Fl = Ti(e.stateNode.containerInfo), ea(
          e,
          l,
          t
        ), Fl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = ka, ka = 16777216, ea(
          e,
          l,
          t
        ), ka = n) : ea(
          e,
          l,
          t
        ));
        break;
      default:
        ea(
          e,
          l,
          t
        );
    }
  }
  function od(e) {
    var l = e.alternate;
    if (l !== null && (e = l.child, e !== null)) {
      l.child = null;
      do
        l = e.sibling, e.sibling = null, e = l;
      while (e !== null);
    }
  }
  function Wa(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          Pe = n, sd(
            n,
            e
          );
        }
      od(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rd(e), e = e.sibling;
  }
  function rd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wa(e), e.flags & 2048 && Yt(9, e, e.return);
        break;
      case 3:
        Wa(e);
        break;
      case 12:
        Wa(e);
        break;
      case 22:
        var l = e.stateNode;
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, fi(e)) : Wa(e);
        break;
      default:
        Wa(e);
    }
  }
  function fi(e) {
    var l = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var n = l[t];
          Pe = n, sd(
            n,
            e
          );
        }
      od(e);
    }
    for (e = e.child; e !== null; ) {
      switch (l = e, l.tag) {
        case 0:
        case 11:
        case 15:
          Yt(8, l, l.return), fi(l);
          break;
        case 22:
          t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, fi(l));
          break;
        default:
          fi(l);
      }
      e = e.sibling;
    }
  }
  function sd(e, l) {
    for (; Pe !== null; ) {
      var t = Pe;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Yt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var n = t.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ha(t.memoizedState.cache);
      }
      if (n = t.child, n !== null) n.return = t, Pe = n;
      else
        e: for (t = e; Pe !== null; ) {
          n = Pe;
          var a = n.sibling, u = n.return;
          if (ld(n), n === t) {
            Pe = null;
            break e;
          }
          if (a !== null) {
            a.return = u, Pe = a;
            break e;
          }
          Pe = u;
        }
    }
  }
  var sy = {
    getCacheForType: function(e) {
      var l = nl(Ve), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return nl(Ve).controller.signal;
    }
  }, dy = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Ce = null, oe = null, se = 0, xe = 0, Dl = null, Lt = !1, la = !1, pf = !1, xt = 0, Ye = 0, Xt = 0, Sn = 0, Tf = 0, wl = 0, ta = 0, $a = null, Al = null, Af = !1, oi = 0, dd = 0, ri = 1 / 0, si = null, Qt = null, $e = 0, Zt = null, na = null, zt = 0, xf = 0, zf = null, hd = null, Fa = 0, Ef = null;
  function Hl() {
    return (be & 2) !== 0 && se !== 0 ? se & -se : C.T !== null ? wf() : _o();
  }
  function yd() {
    if (wl === 0)
      if ((se & 536870912) === 0 || he) {
        var e = qe;
        qe <<= 1, (qe & 3932160) === 0 && (qe = 262144), wl = e;
      } else wl = 536870912;
    return e = Cl.current, e !== null && (e.flags |= 32), wl;
  }
  function xl(e, l, t) {
    (e === Ce && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (aa(e, 0), Vt(
      e,
      se,
      wl,
      !1
    )), Sa(e, t), ((be & 2) === 0 || e !== Ce) && (e === Ce && ((be & 2) === 0 && (Sn |= t), Ye === 4 && Vt(
      e,
      se,
      wl,
      !1
    )), at(e));
  }
  function md(e, l, t) {
    if ((be & 6) !== 0) throw Error(s(327));
    var n = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || va(e, l), a = n ? my(e, l) : Mf(e, l, !0), u = n;
    do {
      if (a === 0) {
        la && !n && Vt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, u && !hy(t)) {
          a = Mf(e, l, !1), u = !1;
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
              a = $a;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (aa(o, c).flags |= 256), c = Mf(
                o,
                c,
                !1
              ), c !== 2) {
                if (pf && !h) {
                  o.errorRecoveryDisabledLanes |= u, Sn |= u, a = 4;
                  break e;
                }
                u = Al, Al = a, u !== null && (Al === null ? Al = u : Al.push.apply(
                  Al,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          aa(e, 0), Vt(e, l, 0, !0);
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
              Vt(
                n,
                l,
                wl,
                !Lt
              );
              break e;
            case 2:
              Al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (a = oi + 300 - fl(), 10 < a)) {
            if (Vt(
              n,
              l,
              wl,
              !Lt
            ), ct(n, 0, !0) !== 0) break e;
            zt = l, n.timeoutHandle = Kd(
              gd.bind(
                null,
                n,
                t,
                Al,
                si,
                Af,
                l,
                wl,
                Sn,
                ta,
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
          gd(
            n,
            t,
            Al,
            si,
            Af,
            l,
            wl,
            Sn,
            ta,
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
    at(e);
  }
  function gd(e, l, t, n, a, u, c, o, h, A, _, H, E, M) {
    if (e.timeoutHandle = -1, H = l.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ot
      }, fd(
        l,
        u,
        H
      );
      var X = (u & 62914560) === u ? oi - fl() : (u & 4194048) === u ? dd - fl() : 0;
      if (X = Fy(
        H,
        X
      ), X !== null) {
        zt = u, e.cancelPendingCommit = X(
          zd.bind(
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
            _,
            H,
            null,
            E,
            M
          )
        ), Vt(e, u, c, !A);
        return;
      }
    }
    zd(
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
  function hy(e) {
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
  function Vt(e, l, t, n) {
    l &= ~Tf, l &= ~Sn, e.suspendedLanes |= l, e.pingedLanes &= ~l, n && (e.warmLanes |= l), n = e.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - ee(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    t !== 0 && Oo(e, t, l);
  }
  function di() {
    return (be & 6) === 0 ? (Ia(0), !1) : !0;
  }
  function Of() {
    if (oe !== null) {
      if (xe === 0)
        var e = oe.return;
      else
        e = oe, ht = on = null, Lc(e), kn = null, Ra = 0, e = oe;
      for (; e !== null; )
        Js(e.alternate, e), e = e.return;
      oe = null;
    }
  }
  function aa(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, Uy(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), zt = 0, Of(), Ce = e, oe = t = st(e.current, null), se = l, xe = 0, Dl = null, Lt = !1, la = va(e, l), pf = !1, ta = wl = Tf = Sn = Xt = Ye = 0, Al = $a = null, Af = !1, (l & 8) !== 0 && (l |= l & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= l; 0 < n; ) {
        var a = 31 - ee(n), u = 1 << a;
        l |= e[a], n &= ~u;
      }
    return xt = l, Uu(), t;
  }
  function vd(e, l) {
    ue = null, C.H = Xa, l === Jn || l === Lu ? (l = Ur(), xe = 3) : l === _c ? (l = Ur(), xe = 4) : xe = l === nf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Dl = l, oe === null && (Ye = 1, li(
      e,
      Ll(l, e.current)
    ));
  }
  function Sd() {
    var e = Cl.current;
    return e === null ? !0 : (se & 4194048) === se ? Vl === null : (se & 62914560) === se || (se & 536870912) !== 0 ? e === Vl : !1;
  }
  function bd() {
    var e = C.H;
    return C.H = Xa, e === null ? Xa : e;
  }
  function pd() {
    var e = C.A;
    return C.A = sy, e;
  }
  function hi() {
    Ye = 4, Lt || (se & 4194048) !== se && Cl.current !== null || (la = !0), (Xt & 134217727) === 0 && (Sn & 134217727) === 0 || Ce === null || Vt(
      Ce,
      se,
      wl,
      !1
    );
  }
  function Mf(e, l, t) {
    var n = be;
    be |= 2;
    var a = bd(), u = pd();
    (Ce !== e || se !== l) && (si = null, aa(e, l)), l = !1;
    var c = Ye;
    e: do
      try {
        if (xe !== 0 && oe !== null) {
          var o = oe, h = Dl;
          switch (xe) {
            case 8:
              Of(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Cl.current === null && (l = !0);
              var A = xe;
              if (xe = 0, Dl = null, ua(e, o, h, A), t && la) {
                c = 0;
                break e;
              }
              break;
            default:
              A = xe, xe = 0, Dl = null, ua(e, o, h, A);
          }
        }
        yy(), c = Ye;
        break;
      } catch (_) {
        vd(e, _);
      }
    while (!0);
    return l && e.shellSuspendCounter++, ht = on = null, be = n, C.H = a, C.A = u, oe === null && (Ce = null, se = 0, Uu()), c;
  }
  function yy() {
    for (; oe !== null; ) Td(oe);
  }
  function my(e, l) {
    var t = be;
    be |= 2;
    var n = bd(), a = pd();
    Ce !== e || se !== l ? (si = null, ri = fl() + 500, aa(e, l)) : la = va(
      e,
      l
    );
    e: do
      try {
        if (xe !== 0 && oe !== null) {
          l = oe;
          var u = Dl;
          l: switch (xe) {
            case 1:
              xe = 0, Dl = null, ua(e, l, u, 1);
              break;
            case 2:
            case 9:
              if (wr(u)) {
                xe = 0, Dl = null, Ad(l);
                break;
              }
              l = function() {
                xe !== 2 && xe !== 9 || Ce !== e || (xe = 7), at(e);
              }, u.then(l, l);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              wr(u) ? (xe = 0, Dl = null, Ad(l)) : (xe = 0, Dl = null, ua(e, l, u, 7));
              break;
            case 5:
              var c = null;
              switch (oe.tag) {
                case 26:
                  c = oe.memoizedState;
                case 5:
                case 27:
                  var o = oe;
                  if (c ? c0(c) : o.stateNode.complete) {
                    xe = 0, Dl = null;
                    var h = o.sibling;
                    if (h !== null) oe = h;
                    else {
                      var A = o.return;
                      A !== null ? (oe = A, yi(A)) : oe = null;
                    }
                    break l;
                  }
              }
              xe = 0, Dl = null, ua(e, l, u, 5);
              break;
            case 6:
              xe = 0, Dl = null, ua(e, l, u, 6);
              break;
            case 8:
              Of(), Ye = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        gy();
        break;
      } catch (_) {
        vd(e, _);
      }
    while (!0);
    return ht = on = null, C.H = n, C.A = a, be = t, oe !== null ? 0 : (Ce = null, se = 0, Uu(), Ye);
  }
  function gy() {
    for (; oe !== null && !Tu(); )
      Td(oe);
  }
  function Td(e) {
    var l = Vs(e.alternate, e, xt);
    e.memoizedProps = e.pendingProps, l === null ? yi(e) : oe = l;
  }
  function Ad(e) {
    var l = e, t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Gs(
          t,
          l,
          l.pendingProps,
          l.type,
          void 0,
          se
        );
        break;
      case 11:
        l = Gs(
          t,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          se
        );
        break;
      case 5:
        Lc(l);
      default:
        Js(t, l), l = oe = pr(l, xt), l = Vs(t, l, xt);
    }
    e.memoizedProps = e.pendingProps, l === null ? yi(e) : oe = l;
  }
  function ua(e, l, t, n) {
    ht = on = null, Lc(l), kn = null, Ra = 0;
    var a = l.return;
    try {
      if (ay(
        e,
        a,
        l,
        t,
        se
      )) {
        Ye = 1, li(
          e,
          Ll(t, e.current)
        ), oe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw oe = a, u;
      Ye = 1, li(
        e,
        Ll(t, e.current)
      ), oe = null;
      return;
    }
    l.flags & 32768 ? (he || n === 1 ? e = !0 : la || (se & 536870912) !== 0 ? e = !1 : (Lt = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Cl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), xd(l, e)) : yi(l);
  }
  function yi(e) {
    var l = e;
    do {
      if ((l.flags & 32768) !== 0) {
        xd(
          l,
          Lt
        );
        return;
      }
      e = l.return;
      var t = cy(
        l.alternate,
        l,
        xt
      );
      if (t !== null) {
        oe = t;
        return;
      }
      if (l = l.sibling, l !== null) {
        oe = l;
        return;
      }
      oe = l = e;
    } while (l !== null);
    Ye === 0 && (Ye = 5);
  }
  function xd(e, l) {
    do {
      var t = fy(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, oe = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
        oe = e;
        return;
      }
      oe = e = t;
    } while (e !== null);
    Ye = 6, oe = null;
  }
  function zd(e, l, t, n, a, u, c, o, h) {
    e.cancelPendingCommit = null;
    do
      mi();
    while ($e !== 0);
    if ((be & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === e.current) throw Error(s(177));
      if (u = l.lanes | l.childLanes, u |= yc, W0(
        e,
        t,
        u,
        c,
        o,
        h
      ), e === Ce && (oe = Ce = null, se = 0), na = l, Zt = e, zt = t, xf = u, zf = a, hd = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, py(O, function() {
        return _d(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
        n = C.T, C.T = null, a = j.p, j.p = 2, c = be, be |= 4;
        try {
          oy(e, l, t);
        } finally {
          be = c, j.p = a, C.T = n;
        }
      }
      $e = 1, Ed(), Od(), Md();
    }
  }
  function Ed() {
    if ($e === 1) {
      $e = 0;
      var e = Zt, l = na, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = C.T, C.T = null;
        var n = j.p;
        j.p = 2;
        var a = be;
        be |= 4;
        try {
          ud(l, e);
          var u = Gf, c = sr(e.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (c !== o && o && o.ownerDocument && rr(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && oc(o)) {
              var A = h.start, _ = h.end;
              if (_ === void 0 && (_ = A), "selectionStart" in o)
                o.selectionStart = A, o.selectionEnd = Math.min(
                  _,
                  o.value.length
                );
              else {
                var H = o.ownerDocument || document, E = H && H.defaultView || window;
                if (E.getSelection) {
                  var M = E.getSelection(), X = o.textContent.length, P = Math.min(h.start, X), Me = h.end === void 0 ? P : Math.min(h.end, X);
                  !M.extend && P > Me && (c = Me, Me = P, P = c);
                  var b = or(
                    o,
                    P
                  ), m = or(
                    o,
                    Me
                  );
                  if (b && m && (M.rangeCount !== 1 || M.anchorNode !== b.node || M.anchorOffset !== b.offset || M.focusNode !== m.node || M.focusOffset !== m.offset)) {
                    var T = H.createRange();
                    T.setStart(b.node, b.offset), M.removeAllRanges(), P > Me ? (M.addRange(T), M.extend(m.node, m.offset)) : (T.setEnd(m.node, m.offset), M.addRange(T));
                  }
                }
              }
            }
            for (H = [], M = o; M = M.parentNode; )
              M.nodeType === 1 && H.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < H.length; o++) {
              var D = H[o];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Mi = !!qf, Gf = qf = null;
        } finally {
          be = a, j.p = n, C.T = t;
        }
      }
      e.current = l, $e = 2;
    }
  }
  function Od() {
    if ($e === 2) {
      $e = 0;
      var e = Zt, l = na, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = C.T, C.T = null;
        var n = j.p;
        j.p = 2;
        var a = be;
        be |= 4;
        try {
          ed(e, l.alternate, l);
        } finally {
          be = a, j.p = n, C.T = t;
        }
      }
      $e = 3;
    }
  }
  function Md() {
    if ($e === 4 || $e === 3) {
      $e = 0, ga();
      var e = Zt, l = na, t = zt, n = hd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? $e = 5 : ($e = 0, na = Zt = null, Cd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Qt = null), Zi(t), l = l.stateNode, Y && typeof Y.onCommitFiberRoot == "function")
        try {
          Y.onCommitFiberRoot(
            q,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = C.T, a = j.p, j.p = 2, C.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          C.T = l, j.p = a;
        }
      }
      (zt & 3) !== 0 && mi(), at(e), a = e.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? e === Ef ? Fa++ : (Fa = 0, Ef = e) : Fa = 0, Ia(0);
    }
  }
  function Cd(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Ha(l)));
  }
  function mi() {
    return Ed(), Od(), Md(), _d();
  }
  function _d() {
    if ($e !== 5) return !1;
    var e = Zt, l = xf;
    xf = 0;
    var t = Zi(zt), n = C.T, a = j.p;
    try {
      j.p = 32 > t ? 32 : t, C.T = null, t = zf, zf = null;
      var u = Zt, c = zt;
      if ($e = 0, na = Zt = null, zt = 0, (be & 6) !== 0) throw Error(s(331));
      var o = be;
      if (be |= 4, rd(u.current), cd(
        u,
        u.current,
        c,
        t
      ), be = o, Ia(0, !1), Y && typeof Y.onPostCommitFiberRoot == "function")
        try {
          Y.onPostCommitFiberRoot(q, u);
        } catch {
        }
      return !0;
    } finally {
      j.p = a, C.T = n, Cd(e, l);
    }
  }
  function Dd(e, l, t) {
    l = Ll(t, l), l = tf(e.stateNode, l, 2), e = jt(e, l, 2), e !== null && (Sa(e, 2), at(e));
  }
  function ze(e, l, t) {
    if (e.tag === 3)
      Dd(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Dd(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Qt === null || !Qt.has(n))) {
            e = Ll(t, e), t = ws(2), n = jt(l, t, 2), n !== null && (Hs(
              t,
              n,
              l,
              e
            ), Sa(n, 2), at(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function Cf(e, l, t) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new dy();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(t) || (pf = !0, a.add(t), e = vy.bind(null, e, l, t), l.then(e, e));
  }
  function vy(e, l, t) {
    var n = e.pingCache;
    n !== null && n.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, Ce === e && (se & t) === t && (Ye === 4 || Ye === 3 && (se & 62914560) === se && 300 > fl() - oi ? (be & 2) === 0 && aa(e, 0) : Tf |= t, ta === se && (ta = 0)), at(e);
  }
  function wd(e, l) {
    l === 0 && (l = Eo()), e = un(e, l), e !== null && (Sa(e, l), at(e));
  }
  function Sy(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), wd(e, t);
  }
  function by(e, l) {
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
    n !== null && n.delete(l), wd(e, t);
  }
  function py(e, l) {
    return ma(e, l);
  }
  var gi = null, ia = null, _f = !1, vi = !1, Df = !1, Kt = 0;
  function at(e) {
    e !== ia && e.next === null && (ia === null ? gi = ia = e : ia = ia.next = e), vi = !0, _f || (_f = !0, Ay());
  }
  function Ia(e, l) {
    if (!Df && vi) {
      Df = !0;
      do
        for (var t = !1, n = gi; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - ee(42 | e) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (t = !0, Bd(n, u));
          } else
            u = se, u = ct(
              n,
              n === Ce ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || va(n, u) || (t = !0, Bd(n, u));
          n = n.next;
        }
      while (t);
      Df = !1;
    }
  }
  function Ty() {
    Hd();
  }
  function Hd() {
    vi = _f = !1;
    var e = 0;
    Kt !== 0 && Hy() && (e = Kt);
    for (var l = fl(), t = null, n = gi; n !== null; ) {
      var a = n.next, u = Ud(n, l);
      u === 0 ? (n.next = null, t === null ? gi = a : t.next = a, a === null && (ia = t)) : (t = n, (e !== 0 || (u & 3) !== 0) && (vi = !0)), n = a;
    }
    $e !== 0 && $e !== 5 || Ia(e), Kt !== 0 && (Kt = 0);
  }
  function Ud(e, l) {
    for (var t = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ee(u), o = 1 << c, h = a[c];
      h === -1 ? ((o & t) === 0 || (o & n) !== 0) && (a[c] = k0(o, l)) : h <= l && (e.expiredLanes |= o), u &= ~o;
    }
    if (l = Ce, t = se, t = ct(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, t === 0 || e === l && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && gl(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || va(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (n !== null && gl(n), Zi(t)) {
        case 2:
        case 8:
          t = En;
          break;
        case 32:
          t = O;
          break;
        case 268435456:
          t = w;
          break;
        default:
          t = O;
      }
      return n = Rd.bind(null, e), t = ma(t, n), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return n !== null && n !== null && gl(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rd(e, l) {
    if ($e !== 0 && $e !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (mi() && e.callbackNode !== t)
      return null;
    var n = se;
    return n = ct(
      e,
      e === Ce ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (md(e, n, l), Ud(e, fl()), e.callbackNode != null && e.callbackNode === t ? Rd.bind(null, e) : null);
  }
  function Bd(e, l) {
    if (mi()) return null;
    md(e, l, !0);
  }
  function Ay() {
    Ry(function() {
      (be & 6) !== 0 ? ma(
        zn,
        Ty
      ) : Hd();
    });
  }
  function wf() {
    if (Kt === 0) {
      var e = Vn;
      e === 0 && (e = et, et <<= 1, (et & 261888) === 0 && (et = 256)), Kt = e;
    }
    return Kt;
  }
  function Nd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Eu("" + e);
  }
  function jd(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function xy(e, l, t, n, a) {
    if (l === "submit" && t && t.stateNode === a) {
      var u = Nd(
        (a[vl] || null).action
      ), c = n.submitter;
      c && (l = (l = c[vl] || null) ? Nd(l.formAction) : c.getAttribute("formAction"), l !== null && (u = l, c = null));
      var o = new _u(
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
                if (Kt !== 0) {
                  var h = c ? jd(a, c) : new FormData(a);
                  $c(
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
                typeof u == "function" && (o.preventDefault(), h = c ? jd(a, c) : new FormData(a), $c(
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
  for (var Hf = 0; Hf < hc.length; Hf++) {
    var Uf = hc[Hf], zy = Uf.toLowerCase(), Ey = Uf[0].toUpperCase() + Uf.slice(1);
    $l(
      zy,
      "on" + Ey
    );
  }
  $l(yr, "onAnimationEnd"), $l(mr, "onAnimationIteration"), $l(gr, "onAnimationStart"), $l("dblclick", "onDoubleClick"), $l("focusin", "onFocus"), $l("focusout", "onBlur"), $l(Lh, "onTransitionRun"), $l(Xh, "onTransitionStart"), $l(Qh, "onTransitionCancel"), $l(vr, "onTransitionEnd"), wn("onMouseEnter", ["mouseout", "mouseover"]), wn("onMouseLeave", ["mouseout", "mouseover"]), wn("onPointerEnter", ["pointerout", "pointerover"]), wn("onPointerLeave", ["pointerout", "pointerover"]), ln(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ln(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ln("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ln(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ln(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ln(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Oy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa)
  );
  function qd(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var n = e[t], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (l)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], h = o.instance, A = o.currentTarget;
            if (o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = A;
            try {
              u(a);
            } catch (_) {
              Hu(_);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], h = o.instance, A = o.currentTarget, o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = A;
            try {
              u(a);
            } catch (_) {
              Hu(_);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function re(e, l) {
    var t = l[Vi];
    t === void 0 && (t = l[Vi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    t.has(n) || (Gd(l, e, 2, !1), t.add(n));
  }
  function Rf(e, l, t) {
    var n = 0;
    l && (n |= 4), Gd(
      t,
      e,
      n,
      l
    );
  }
  var Si = "_reactListening" + Math.random().toString(36).slice(2);
  function Bf(e) {
    if (!e[Si]) {
      e[Si] = !0, Ho.forEach(function(t) {
        t !== "selectionchange" && (Oy.has(t) || Rf(t, !1, e), Rf(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[Si] || (l[Si] = !0, Rf("selectionchange", !1, l));
    }
  }
  function Gd(e, l, t, n) {
    switch (y0(l)) {
      case 2:
        var a = em;
        break;
      case 8:
        a = lm;
        break;
      default:
        a = $f;
    }
    t = a.bind(
      null,
      l,
      t,
      e
    ), a = void 0, !ec || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: a
    }) : e.addEventListener(l, t, !0) : a !== void 0 ? e.addEventListener(l, t, {
      passive: a
    }) : e.addEventListener(l, t, !1);
  }
  function Nf(e, l, t, n, a) {
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
            if (c = Cn(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    Zo(function() {
      var A = u, _ = Ii(t), H = [];
      e: {
        var E = Sr.get(e);
        if (E !== void 0) {
          var M = _u, X = e;
          switch (e) {
            case "keypress":
              if (Mu(t) === 0) break e;
            case "keydown":
            case "keyup":
              M = bh;
              break;
            case "focusin":
              X = "focus", M = ac;
              break;
            case "focusout":
              X = "blur", M = ac;
              break;
            case "beforeblur":
            case "afterblur":
              M = ac;
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
              M = Jo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Ah;
              break;
            case yr:
            case mr:
            case gr:
              M = rh;
              break;
            case vr:
              M = zh;
              break;
            case "scroll":
            case "scrollend":
              M = uh;
              break;
            case "wheel":
              M = Oh;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = dh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Wo;
              break;
            case "toggle":
            case "beforetoggle":
              M = Ch;
          }
          var P = (l & 4) !== 0, Me = !P && (e === "scroll" || e === "scrollend"), b = P ? E !== null ? E + "Capture" : null : E;
          P = [];
          for (var m = A, T; m !== null; ) {
            var D = m;
            if (T = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || T === null || b === null || (D = Ta(m, b), D != null && P.push(
              eu(m, D, T)
            )), Me) break;
            m = m.return;
          }
          0 < P.length && (E = new M(
            E,
            X,
            null,
            t,
            _
          ), H.push({ event: E, listeners: P }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", E && t !== Fi && (X = t.relatedTarget || t.fromElement) && (Cn(X) || X[Mn]))
            break e;
          if ((M || E) && (E = _.window === _ ? _ : (E = _.ownerDocument) ? E.defaultView || E.parentWindow : window, M ? (X = t.relatedTarget || t.toElement, M = A, X = X ? Cn(X) : null, X !== null && (Me = x(X), P = X.tag, X !== Me || P !== 5 && P !== 27 && P !== 6) && (X = null)) : (M = null, X = A), M !== X)) {
            if (P = Jo, D = "onMouseLeave", b = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (P = Wo, D = "onPointerLeave", b = "onPointerEnter", m = "pointer"), Me = M == null ? E : pa(M), T = X == null ? E : pa(X), E = new P(
              D,
              m + "leave",
              M,
              t,
              _
            ), E.target = Me, E.relatedTarget = T, D = null, Cn(_) === A && (P = new P(
              b,
              m + "enter",
              X,
              t,
              _
            ), P.target = T, P.relatedTarget = Me, D = P), Me = D, M && X)
              l: {
                for (P = My, b = M, m = X, T = 0, D = b; D; D = P(D))
                  T++;
                D = 0;
                for (var $ = m; $; $ = P($))
                  D++;
                for (; 0 < T - D; )
                  b = P(b), T--;
                for (; 0 < D - T; )
                  m = P(m), D--;
                for (; T--; ) {
                  if (b === m || m !== null && b === m.alternate) {
                    P = b;
                    break l;
                  }
                  b = P(b), m = P(m);
                }
                P = null;
              }
            else P = null;
            M !== null && Yd(
              H,
              E,
              M,
              P,
              !1
            ), X !== null && Me !== null && Yd(
              H,
              Me,
              X,
              P,
              !0
            );
          }
        }
        e: {
          if (E = A ? pa(A) : window, M = E.nodeName && E.nodeName.toLowerCase(), M === "select" || M === "input" && E.type === "file")
            var me = nr;
          else if (lr(E))
            if (ar)
              me = qh;
            else {
              me = Nh;
              var J = Bh;
            }
          else
            M = E.nodeName, !M || M.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? A && $i(A.elementType) && (me = nr) : me = jh;
          if (me && (me = me(e, A))) {
            tr(
              H,
              me,
              t,
              _
            );
            break e;
          }
          J && J(e, E, A), e === "focusout" && A && E.type === "number" && A.memoizedProps.value != null && Wi(E, "number", E.value);
        }
        switch (J = A ? pa(A) : window, e) {
          case "focusin":
            (lr(J) || J.contentEditable === "true") && (jn = J, rc = A, _a = null);
            break;
          case "focusout":
            _a = rc = jn = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, dr(H, t, _);
            break;
          case "selectionchange":
            if (Yh) break;
          case "keydown":
          case "keyup":
            dr(H, t, _);
        }
        var ie;
        if (ic)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          Nn ? Po(e, t) && (de = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (de = "onCompositionStart");
        de && ($o && t.locale !== "ko" && (Nn || de !== "onCompositionStart" ? de === "onCompositionEnd" && Nn && (ie = Vo()) : (Dt = _, lc = "value" in Dt ? Dt.value : Dt.textContent, Nn = !0)), J = bi(A, de), 0 < J.length && (de = new ko(
          de,
          e,
          null,
          t,
          _
        ), H.push({ event: de, listeners: J }), ie ? de.data = ie : (ie = er(t), ie !== null && (de.data = ie)))), (ie = Dh ? wh(e, t) : Hh(e, t)) && (de = bi(A, "onBeforeInput"), 0 < de.length && (J = new ko(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          _
        ), H.push({
          event: J,
          listeners: de
        }), J.data = ie)), xy(
          H,
          e,
          A,
          t,
          _
        );
      }
      qd(H, l);
    });
  }
  function eu(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function bi(e, l) {
    for (var t = l + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Ta(e, t), a != null && n.unshift(
        eu(e, a, u)
      ), a = Ta(e, l), a != null && n.push(
        eu(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function My(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Yd(e, l, t, n, a) {
    for (var u = l._reactName, c = []; t !== null && t !== n; ) {
      var o = t, h = o.alternate, A = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || A === null || (h = A, a ? (A = Ta(t, u), A != null && c.unshift(
        eu(t, A, h)
      )) : a || (A = Ta(t, u), A != null && c.push(
        eu(t, A, h)
      ))), t = t.return;
    }
    c.length !== 0 && e.push({ event: l, listeners: c });
  }
  var Cy = /\r\n?/g, _y = /\u0000|\uFFFD/g;
  function Ld(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cy, `
`).replace(_y, "");
  }
  function Xd(e, l) {
    return l = Ld(l), Ld(e) === l;
  }
  function Oe(e, l, t, n, a, u) {
    switch (t) {
      case "children":
        typeof n == "string" ? l === "body" || l === "textarea" && n === "" || Un(e, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && Un(e, "" + n);
        break;
      case "className":
        xu(e, "class", n);
        break;
      case "tabIndex":
        xu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xu(e, t, n);
        break;
      case "style":
        Xo(e, n, u);
        break;
      case "data":
        if (l !== "object") {
          xu(e, "data", n);
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
        n = Eu("" + n), e.setAttribute(t, n);
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
        n = Eu("" + n), e.setAttribute(t, n);
        break;
      case "onClick":
        n != null && (e.onclick = ot);
        break;
      case "onScroll":
        n != null && re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && re("scrollend", e);
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
        t = Eu("" + n), e.setAttributeNS(
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
        re("beforetoggle", e), re("toggle", e), Au(e, "popover", n);
        break;
      case "xlinkActuate":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Au(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = nh.get(t) || t, Au(e, t, n));
    }
  }
  function jf(e, l, t, n, a, u) {
    switch (t) {
      case "style":
        Xo(e, n, u);
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
        typeof n == "string" ? Un(e, n) : (typeof n == "number" || typeof n == "bigint") && Un(e, "" + n);
        break;
      case "onScroll":
        n != null && re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && re("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = ot);
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
        if (!Uo.hasOwnProperty(t))
          e: {
            if (t[0] === "o" && t[1] === "n" && (a = t.endsWith("Capture"), l = t.slice(2, a ? t.length - 7 : void 0), u = e[vl] || null, u = u != null ? u[t] : null, typeof u == "function" && e.removeEventListener(l, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, n, a);
              break e;
            }
            t in e ? e[t] = n : n === !0 ? e.setAttribute(t, "") : Au(e, t, n);
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
        re("error", e), re("load", e);
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
                  throw Error(s(137, l));
                default:
                  Oe(e, l, u, c, t, null);
              }
          }
        a && Oe(e, l, "srcSet", t.srcSet, t, null), n && Oe(e, l, "src", t.src, t, null);
        return;
      case "input":
        re("invalid", e);
        var o = u = c = a = null, h = null, A = null;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var _ = t[n];
            if (_ != null)
              switch (n) {
                case "name":
                  a = _;
                  break;
                case "type":
                  c = _;
                  break;
                case "checked":
                  h = _;
                  break;
                case "defaultChecked":
                  A = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  o = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(s(137, l));
                  break;
                default:
                  Oe(e, l, n, _, t, null);
              }
          }
        qo(
          e,
          u,
          o,
          h,
          A,
          c,
          a,
          !1
        );
        return;
      case "select":
        re("invalid", e), n = c = u = null;
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
                Oe(e, l, a, o, t, null);
            }
        l = u, t = c, e.multiple = !!n, l != null ? Hn(e, !!n, l, !1) : t != null && Hn(e, !!n, t, !0);
        return;
      case "textarea":
        re("invalid", e), u = a = n = null;
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
                if (o != null) throw Error(s(91));
                break;
              default:
                Oe(e, l, c, o, t, null);
            }
        Yo(e, n, a, u);
        return;
      case "option":
        for (h in t)
          t.hasOwnProperty(h) && (n = t[h], n != null) && (h === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Oe(e, l, h, n, t, null));
        return;
      case "dialog":
        re("beforetoggle", e), re("toggle", e), re("cancel", e), re("close", e);
        break;
      case "iframe":
      case "object":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Pa.length; n++)
          re(Pa[n], e);
        break;
      case "image":
        re("error", e), re("load", e);
        break;
      case "details":
        re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        re("error", e), re("load", e);
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
        for (A in t)
          if (t.hasOwnProperty(A) && (n = t[A], n != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                Oe(e, l, A, n, t, null);
            }
        return;
      default:
        if ($i(l)) {
          for (_ in t)
            t.hasOwnProperty(_) && (n = t[_], n !== void 0 && jf(
              e,
              l,
              _,
              n,
              t,
              void 0
            ));
          return;
        }
    }
    for (o in t)
      t.hasOwnProperty(o) && (n = t[o], n != null && Oe(e, l, o, n, t, null));
  }
  function Dy(e, l, t, n) {
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
        var a = null, u = null, c = null, o = null, h = null, A = null, _ = null;
        for (M in t) {
          var H = t[M];
          if (t.hasOwnProperty(M) && H != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = H;
              default:
                n.hasOwnProperty(M) || Oe(e, l, M, null, n, H);
            }
        }
        for (var E in n) {
          var M = n[E];
          if (H = t[E], n.hasOwnProperty(E) && (M != null || H != null))
            switch (E) {
              case "type":
                u = M;
                break;
              case "name":
                a = M;
                break;
              case "checked":
                A = M;
                break;
              case "defaultChecked":
                _ = M;
                break;
              case "value":
                c = M;
                break;
              case "defaultValue":
                o = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(s(137, l));
                break;
              default:
                M !== H && Oe(
                  e,
                  l,
                  E,
                  M,
                  n,
                  H
                );
            }
        }
        ki(
          e,
          c,
          o,
          h,
          A,
          _,
          u,
          a
        );
        return;
      case "select":
        M = c = o = E = null;
        for (u in t)
          if (h = t[u], t.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = h;
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
                E = u;
                break;
              case "defaultValue":
                o = u;
                break;
              case "multiple":
                c = u;
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
        l = o, t = c, n = M, E != null ? Hn(e, !!t, E, !1) : !!n != !!t && (l != null ? Hn(e, !!t, l, !0) : Hn(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        M = E = null;
        for (o in t)
          if (a = t[o], t.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, l, o, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = t[c], n.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                E = a;
                break;
              case "defaultValue":
                M = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== u && Oe(e, l, c, a, n, u);
            }
        Go(e, E, M);
        return;
      case "option":
        for (var X in t)
          E = t[X], t.hasOwnProperty(X) && E != null && !n.hasOwnProperty(X) && (X === "selected" ? e.selected = !1 : Oe(
            e,
            l,
            X,
            null,
            n,
            E
          ));
        for (h in n)
          E = n[h], M = t[h], n.hasOwnProperty(h) && E !== M && (E != null || M != null) && (h === "selected" ? e.selected = E && typeof E != "function" && typeof E != "symbol" : Oe(
            e,
            l,
            h,
            E,
            n,
            M
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
        for (var P in t)
          E = t[P], t.hasOwnProperty(P) && E != null && !n.hasOwnProperty(P) && Oe(e, l, P, null, n, E);
        for (A in n)
          if (E = n[A], M = t[A], n.hasOwnProperty(A) && E !== M && (E != null || M != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(s(137, l));
                break;
              default:
                Oe(
                  e,
                  l,
                  A,
                  E,
                  n,
                  M
                );
            }
        return;
      default:
        if ($i(l)) {
          for (var Me in t)
            E = t[Me], t.hasOwnProperty(Me) && E !== void 0 && !n.hasOwnProperty(Me) && jf(
              e,
              l,
              Me,
              void 0,
              n,
              E
            );
          for (_ in n)
            E = n[_], M = t[_], !n.hasOwnProperty(_) || E === M || E === void 0 && M === void 0 || jf(
              e,
              l,
              _,
              E,
              n,
              M
            );
          return;
        }
    }
    for (var b in t)
      E = t[b], t.hasOwnProperty(b) && E != null && !n.hasOwnProperty(b) && Oe(e, l, b, null, n, E);
    for (H in n)
      E = n[H], M = t[H], !n.hasOwnProperty(H) || E === M || E == null && M == null || Oe(e, l, H, E, n, M);
  }
  function Qd(e) {
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
  function wy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var a = t[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && Qd(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < t.length; n++) {
            var h = t[n], A = h.startTime;
            if (A > o) break;
            var _ = h.transferSize, H = h.initiatorType;
            _ && Qd(H) && (h = h.responseEnd, c += _ * (h < o ? 1 : (o - A) / (h - A)));
          }
          if (--n, l += 8 * (u + c) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qf = null, Gf = null;
  function pi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Zd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vd(e, l) {
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
  var Lf = null;
  function Hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lf ? !1 : (Lf = e, !0) : (Lf = null, !1);
  }
  var Kd = typeof setTimeout == "function" ? setTimeout : void 0, Uy = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(e) {
    return Jd.resolve(null).then(e).catch(By);
  } : Kd;
  function By(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jt(e) {
    return e === "head";
  }
  function kd(e, l) {
    var t = l, n = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8)
        if (t = a.data, t === "/$" || t === "/&") {
          if (n === 0) {
            e.removeChild(a), ra(l);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          n++;
        else if (t === "html")
          lu(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, lu(t);
          for (var u = t.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[ba] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = c;
          }
        } else
          t === "body" && lu(e.ownerDocument.body);
      t = a;
    } while (t);
    ra(l);
  }
  function Wd(e, l) {
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
  function Xf(e) {
    var l = e.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (l = l.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xf(t), Ki(t);
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
        if (!e[ba])
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
      if (e = Kl(e.nextSibling), e === null) break;
    }
    return null;
  }
  function jy(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Kl(e.nextSibling), e === null)) return null;
    return e;
  }
  function $d(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Kl(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function qy(e, l) {
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
  function Kl(e) {
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
  var Vf = null;
  function Fd(e) {
    e = e.nextSibling;
    for (var l = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (l === 0)
            return Kl(e.nextSibling);
          l--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Id(e) {
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
  function Pd(e, l, t) {
    switch (l = pi(t), e) {
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
  function lu(e) {
    for (var l = e.attributes; l.length; )
      e.removeAttributeNode(l[0]);
    Ki(e);
  }
  var Jl = /* @__PURE__ */ new Map(), e0 = /* @__PURE__ */ new Set();
  function Ti(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Et = j.d;
  j.d = {
    f: Gy,
    r: Yy,
    D: Ly,
    C: Xy,
    L: Qy,
    m: Zy,
    X: Ky,
    S: Vy,
    M: Jy
  };
  function Gy() {
    var e = Et.f(), l = di();
    return e || l;
  }
  function Yy(e) {
    var l = _n(e);
    l !== null && l.tag === 5 && l.type === "form" ? vs(l) : Et.r(e);
  }
  var ca = typeof document > "u" ? null : document;
  function l0(e, l, t) {
    var n = ca;
    if (n && typeof l == "string" && l) {
      var a = Gl(l);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof t == "string" && (a += '[crossorigin="' + t + '"]'), e0.has(a) || (e0.add(a), e = { rel: e, crossOrigin: t, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), ul(l, "link", e), Ie(l), n.head.appendChild(l)));
    }
  }
  function Ly(e) {
    Et.D(e), l0("dns-prefetch", e, null);
  }
  function Xy(e, l) {
    Et.C(e, l), l0("preconnect", e, l);
  }
  function Qy(e, l, t) {
    Et.L(e, l, t);
    var n = ca;
    if (n && e && l) {
      var a = 'link[rel="preload"][as="' + Gl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (a += '[imagesrcset="' + Gl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (a += '[imagesizes="' + Gl(
        t.imageSizes
      ) + '"]')) : a += '[href="' + Gl(e) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = fa(e);
          break;
        case "script":
          u = oa(e);
      }
      Jl.has(u) || (e = z(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Jl.set(u, e), n.querySelector(a) !== null || l === "style" && n.querySelector(tu(u)) || l === "script" && n.querySelector(nu(u)) || (l = n.createElement("link"), ul(l, "link", e), Ie(l), n.head.appendChild(l)));
    }
  }
  function Zy(e, l) {
    Et.m(e, l);
    var t = ca;
    if (t && e) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Gl(n) + '"][href="' + Gl(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = oa(e);
      }
      if (!Jl.has(u) && (e = z({ rel: "modulepreload", href: e }, l), Jl.set(u, e), t.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(nu(u)))
              return;
        }
        n = t.createElement("link"), ul(n, "link", e), Ie(n), t.head.appendChild(n);
      }
    }
  }
  function Vy(e, l, t) {
    Et.S(e, l, t);
    var n = ca;
    if (n && e) {
      var a = Dn(n).hoistableStyles, u = fa(e);
      l = l || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          tu(u)
        ))
          o.loading = 5;
        else {
          e = z(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Jl.get(u)) && Kf(e, t);
          var h = c = n.createElement("link");
          Ie(h), ul(h, "link", e), h._p = new Promise(function(A, _) {
            h.onload = A, h.onerror = _;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ai(c, l, n);
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
  function Ky(e, l) {
    Et.X(e, l);
    var t = ca;
    if (t && e) {
      var n = Dn(t).hoistableScripts, a = oa(e), u = n.get(a);
      u || (u = t.querySelector(nu(a)), u || (e = z({ src: e, async: !0 }, l), (l = Jl.get(a)) && Jf(e, l), u = t.createElement("script"), Ie(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Jy(e, l) {
    Et.M(e, l);
    var t = ca;
    if (t && e) {
      var n = Dn(t).hoistableScripts, a = oa(e), u = n.get(a);
      u || (u = t.querySelector(nu(a)), u || (e = z({ src: e, async: !0, type: "module" }, l), (l = Jl.get(a)) && Jf(e, l), u = t.createElement("script"), Ie(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function t0(e, l, t, n) {
    var a = (a = te.current) ? Ti(a) : null;
    if (!a) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (l = fa(t.href), t = Dn(
          a
        ).hoistableStyles, n = t.get(l), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(l, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = fa(t.href);
          var u = Dn(
            a
          ).hoistableStyles, c = u.get(e);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = a.querySelector(
            tu(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Jl.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Jl.set(e, t), u || ky(
            a,
            e,
            t,
            c.state
          ))), l && n === null)
            throw Error(s(528, ""));
          return c;
        }
        if (l && n !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = oa(t), t = Dn(
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
  function fa(e) {
    return 'href="' + Gl(e) + '"';
  }
  function tu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function n0(e) {
    return z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function ky(e, l, t, n) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = e.createElement("link"), n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    }), ul(l, "link", t), Ie(l), e.head.appendChild(l));
  }
  function oa(e) {
    return '[src="' + Gl(e) + '"]';
  }
  function nu(e) {
    return "script[async]" + e;
  }
  function a0(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Gl(t.href) + '"]'
          );
          if (n)
            return l.instance = n, Ie(n), n;
          var a = z({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Ie(n), ul(n, "style", a), Ai(n, t.precedence, e), l.instance = n;
        case "stylesheet":
          a = fa(t.href);
          var u = e.querySelector(
            tu(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Ie(u), u;
          n = n0(t), (a = Jl.get(a)) && Kf(n, a), u = (e.ownerDocument || e).createElement("link"), Ie(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), ul(u, "link", n), l.state.loading |= 4, Ai(u, t.precedence, e), l.instance = u;
        case "script":
          return u = oa(t.src), (a = e.querySelector(
            nu(u)
          )) ? (l.instance = a, Ie(a), a) : (n = t, (a = Jl.get(u)) && (n = z({}, t), Jf(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ie(a), ul(a, "link", n), e.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, Ai(n, t.precedence, e));
    return l.instance;
  }
  function Ai(e, l, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === l) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
  }
  function Kf(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
  }
  function Jf(e, l) {
    e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
  }
  var xi = null;
  function u0(e, l, t) {
    if (xi === null) {
      var n = /* @__PURE__ */ new Map(), a = xi = /* @__PURE__ */ new Map();
      a.set(t, n);
    } else
      a = xi, n = a.get(t), n || (n = /* @__PURE__ */ new Map(), a.set(t, n));
    if (n.has(e)) return n;
    for (n.set(e, null), t = t.getElementsByTagName(e), a = 0; a < t.length; a++) {
      var u = t[a];
      if (!(u[ba] || u[ll] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(l) || "";
        c = e + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function i0(e, l, t) {
    e = e.ownerDocument || e, e.head.insertBefore(
      t,
      l === "title" ? e.querySelector("head > title") : null
    );
  }
  function Wy(e, l, t) {
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
  function c0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function $y(e, l, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = fa(n.href), u = l.querySelector(
          tu(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = zi.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = u, Ie(u);
          return;
        }
        u = l.ownerDocument || l, n = n0(n), (a = Jl.get(a)) && Kf(n, a), u = u.createElement("link"), Ie(u);
        var c = u;
        c._p = new Promise(function(o, h) {
          c.onload = o, c.onerror = h;
        }), ul(u, "link", n), t.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = zi.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var kf = 0;
  function Fy(e, l) {
    return e.stylesheets && e.count === 0 && Oi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && Oi(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < e.imgBytes && kf === 0 && (kf = 62500 * wy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Oi(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > kf ? 50 : 800) + l
      );
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function zi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Oi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ei = null;
  function Oi(e, l) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ei = /* @__PURE__ */ new Map(), l.forEach(Iy, e), Ei = null, zi.call(e));
  }
  function Iy(e, l) {
    if (!(l.state.loading & 4)) {
      var t = Ei.get(e);
      if (t) var n = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), Ei.set(e, t);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), n = c);
        }
        n && t.set(null, n);
      }
      a = l.instance, c = a.getAttribute("data-precedence"), u = t.get(c) || n, u === n && t.set(null, a), t.set(c, a), this.count++, n = zi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), l.state.loading |= 4;
    }
  }
  var au = {
    $$typeof: Se,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Py(e, l, t, n, a, u, c, o, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.hiddenUpdates = Xi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function f0(e, l, t, n, a, u, c, o, h, A, _, H) {
    return e = new Py(
      e,
      l,
      t,
      c,
      h,
      A,
      _,
      H,
      o
    ), l = 1, u === !0 && (l |= 24), u = Ml(3, null, null, l), e.current = u, u.stateNode = e, l = Oc(), l.refCount++, e.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: l
    }, Dc(u), e;
  }
  function o0(e) {
    return e ? (e = Yn, e) : Yn;
  }
  function r0(e, l, t, n, a, u) {
    a = o0(a), n.context === null ? n.context = a : n.pendingContext = a, n = Nt(l), n.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (n.callback = u), t = jt(e, n, l), t !== null && (xl(t, e, l), Na(t, e, l));
  }
  function s0(e, l) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function Wf(e, l) {
    s0(e, l), (e = e.alternate) && s0(e, l);
  }
  function d0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = un(e, 67108864);
      l !== null && xl(l, e, 67108864), Wf(e, 67108864);
    }
  }
  function h0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = Hl();
      l = Qi(l);
      var t = un(e, l);
      t !== null && xl(t, e, l), Wf(e, l);
    }
  }
  var Mi = !0;
  function em(e, l, t, n) {
    var a = C.T;
    C.T = null;
    var u = j.p;
    try {
      j.p = 2, $f(e, l, t, n);
    } finally {
      j.p = u, C.T = a;
    }
  }
  function lm(e, l, t, n) {
    var a = C.T;
    C.T = null;
    var u = j.p;
    try {
      j.p = 8, $f(e, l, t, n);
    } finally {
      j.p = u, C.T = a;
    }
  }
  function $f(e, l, t, n) {
    if (Mi) {
      var a = Ff(n);
      if (a === null)
        Nf(
          e,
          l,
          n,
          Ci,
          t
        ), m0(e, n);
      else if (nm(
        a,
        e,
        l,
        t,
        n
      ))
        n.stopPropagation();
      else if (m0(e, n), l & 4 && -1 < tm.indexOf(e)) {
        for (; a !== null; ) {
          var u = _n(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = ol(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - ee(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    at(u), (be & 6) === 0 && (ri = fl() + 500, Ia(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = un(u, 2), o !== null && xl(o, u, 2), di(), Wf(u, 2);
            }
          if (u = Ff(n), u === null && Nf(
            e,
            l,
            n,
            Ci,
            t
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Nf(
          e,
          l,
          n,
          null,
          t
        );
    }
  }
  function Ff(e) {
    return e = Ii(e), If(e);
  }
  var Ci = null;
  function If(e) {
    if (Ci = null, e = Cn(e), e !== null) {
      var l = x(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = f(l), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = R(l), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          e = null;
        } else l !== e && (e = null);
      }
    }
    return Ci = e, null;
  }
  function y0(e) {
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
        switch (Li()) {
          case zn:
            return 2;
          case En:
            return 8;
          case O:
          case N:
            return 32;
          case w:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Pf = !1, kt = null, Wt = null, $t = null, uu = /* @__PURE__ */ new Map(), iu = /* @__PURE__ */ new Map(), Ft = [], tm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function m0(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Wt = null;
        break;
      case "mouseover":
      case "mouseout":
        $t = null;
        break;
      case "pointerover":
      case "pointerout":
        uu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        iu.delete(l.pointerId);
    }
  }
  function cu(e, l, t, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: l,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, l !== null && (l = _n(l), l !== null && d0(l)), e) : (e.eventSystemFlags |= n, l = e.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), e);
  }
  function nm(e, l, t, n, a) {
    switch (l) {
      case "focusin":
        return kt = cu(
          kt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "dragenter":
        return Wt = cu(
          Wt,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "mouseover":
        return $t = cu(
          $t,
          e,
          l,
          t,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return uu.set(
          u,
          cu(
            uu.get(u) || null,
            e,
            l,
            t,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, iu.set(
          u,
          cu(
            iu.get(u) || null,
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
  function g0(e) {
    var l = Cn(e.target);
    if (l !== null) {
      var t = x(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = f(t), l !== null) {
            e.blockedOn = l, Do(e.priority, function() {
              h0(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = R(t), l !== null) {
            e.blockedOn = l, Do(e.priority, function() {
              h0(t);
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
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var l = e.targetContainers; 0 < l.length; ) {
      var t = Ff(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        Fi = n, t.target.dispatchEvent(n), Fi = null;
      } else
        return l = _n(t), l !== null && d0(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function v0(e, l, t) {
    _i(e) && t.delete(l);
  }
  function am() {
    Pf = !1, kt !== null && _i(kt) && (kt = null), Wt !== null && _i(Wt) && (Wt = null), $t !== null && _i($t) && ($t = null), uu.forEach(v0), iu.forEach(v0);
  }
  function Di(e, l) {
    e.blockedOn === l && (e.blockedOn = null, Pf || (Pf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      am
    )));
  }
  var wi = null;
  function S0(e) {
    wi !== e && (wi = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        wi === e && (wi = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], n = e[l + 1], a = e[l + 2];
          if (typeof n != "function") {
            if (If(n || t) === null)
              continue;
            break;
          }
          var u = _n(t);
          u !== null && (e.splice(l, 3), l -= 3, $c(
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
  function ra(e) {
    function l(h) {
      return Di(h, e);
    }
    kt !== null && Di(kt, e), Wt !== null && Di(Wt, e), $t !== null && Di($t, e), uu.forEach(l), iu.forEach(l);
    for (var t = 0; t < Ft.length; t++) {
      var n = Ft[t];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Ft.length && (t = Ft[0], t.blockedOn === null); )
      g0(t), t.blockedOn === null && Ft.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var a = t[n], u = t[n + 1], c = a[vl] || null;
        if (typeof u == "function")
          c || S0(t);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[vl] || null)
              o = c.formAction;
            else if (If(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? t[n + 1] = o : (t.splice(n, 3), n -= 3), S0(t);
        }
      }
  }
  function b0() {
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
  function eo(e) {
    this._internalRoot = e;
  }
  Hi.prototype.render = eo.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var t = l.current, n = Hl();
    r0(t, n, e, l, null, null);
  }, Hi.prototype.unmount = eo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      r0(e.current, 2, null, e, null, null), di(), l[Mn] = null;
    }
  };
  function Hi(e) {
    this._internalRoot = e;
  }
  Hi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = _o();
      e = { blockedOn: null, target: e, priority: l };
      for (var t = 0; t < Ft.length && l !== 0 && l < Ft[t].priority; t++) ;
      Ft.splice(t, 0, e), t === 0 && g0(e);
    }
  };
  var p0 = r.version;
  if (p0 !== "19.2.4")
    throw Error(
      s(
        527,
        p0,
        "19.2.4"
      )
    );
  j.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = y(l), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var um = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ui.isDisabled && Ui.supportsFiber)
      try {
        q = Ui.inject(
          um
        ), Y = Ui;
      } catch {
      }
  }
  return ou.createRoot = function(e, l) {
    if (!v(e)) throw Error(s(299));
    var t = !1, n = "", a = Ms, u = Cs, c = _s;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = f0(
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
      b0
    ), e[Mn] = l.current, Bf(e), new eo(l);
  }, ou.hydrateRoot = function(e, l, t) {
    if (!v(e)) throw Error(s(299));
    var n = !1, a = "", u = Ms, c = Cs, o = _s, h = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.formState !== void 0 && (h = t.formState)), l = f0(
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
      b0
    ), l.context = o0(null), t = l.current, n = Hl(), n = Qi(n), a = Nt(n), a.callback = null, jt(t, a, n), t = n, l.current.lanes = t, Sa(l, t), at(l), e[Mn] = l.current, Bf(e), new Hi(l);
  }, ou.version = "19.2.4", ou;
}
var D0;
function mm() {
  if (D0) return to.exports;
  D0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), to.exports = ym(), to.exports;
}
var gm = mm(), yl = ho();
const Le = 960, kl = 920, X0 = "clawd_ui_word_solitaire_best", mu = 5, yo = 132, Q0 = 92, vm = 30, Sm = 22, bm = 10, pm = 8, w0 = 116, Tm = 132, Am = 30, ha = [
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
], xm = [
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
], H0 = ["Neon", "Hidden", "Silver", "Golden", "Velvet", "Shadow", "Signal", "Lantern", "Cipher", "Winding", "Midnight", "Crimson"], U0 = ["Crossroads", "Archive", "Promenade", "Relay", "Mix", "Circuit", "Carnival", "Station", "Harbor", "Mosaic", "Vault", "Parade"], R0 = [
  "A generated deal from the wider category vault.",
  "Fresh clue mixes from the expanding category pool.",
  "New associations every round, with a denser reserve behind them.",
  "A remixed board pulled from the larger rotating category set."
], B0 = /* @__PURE__ */ new Map();
function zm(i) {
  return Array.from(new Map(i.map((r) => [r.id, r])).values());
}
const Em = zm([...ha.flatMap((i) => i.categories), ...xm]);
function Om(i, r) {
  const d = [4, 4, 4, 4, 4], s = r === 8 ? 5 : 4, v = xo([0, 1, 2, 3, 4], 49734321 + i * 97);
  for (let x = 0; x < s; x += 1) d[v[x % v.length]] += 1;
  return d;
}
function Mm(i, r) {
  const d = i * 7, s = d - r.reduce((v, x) => v + x, 0);
  return d + s + 8;
}
function Cm(i) {
  const r = B0.get(i);
  if (r) return r;
  let d = 1831565813 + i * 977;
  const s = i % 3 === 0 ? 8 : 7, v = xo(Em, d).slice(0, s), x = Om(i, s), f = Mm(s, x);
  let R;
  [d, R] = vu(d);
  const p = H0[Math.floor(R * H0.length)];
  [d, R] = vu(d);
  const y = U0[Math.floor(R * U0.length)];
  [d, R] = vu(d);
  const S = R0[Math.floor(R * R0.length)], z = {
    id: `generated-${i + 1}`,
    name: `Deal ${i + 1}: ${p} ${y}`,
    moveBudget: f,
    categories: v,
    columnHeights: x,
    tagline: S
  };
  return B0.set(i, z), z;
}
function Rl(i) {
  return i < ha.length ? ha[i] : Cm(i);
}
function _m(i) {
  const r = i * 1664525 + 1013904223 >>> 0;
  return r === 0 ? 1 : r;
}
function vu(i) {
  const r = _m(i);
  return [r, r / 4294967295];
}
function Dm() {
  if (typeof window > "u") return 0;
  const i = window.localStorage.getItem(X0), r = i == null ? 0 : Number.parseInt(i, 10);
  return Number.isFinite(r) ? Math.max(0, r) : 0;
}
function wm(i) {
  typeof window < "u" && window.localStorage.setItem(X0, String(i));
}
function mo(i) {
  return i.map((r) => r.map((d) => ({ ...d })));
}
function go(i) {
  return Object.fromEntries(Object.entries(i).map(([r, d]) => [r, d.map((s) => ({ ...s }))]));
}
function Hm(i) {
  return i.map((r) => ({ ...r, card: { ...r.card } }));
}
function Um(i) {
  return i.map((r) => ({ ...r }));
}
function Rm(i) {
  return i.map((r) => ({ ...r }));
}
function vo(i) {
  return [...i];
}
function So(i) {
  return [...i];
}
function ut(i) {
  return i ? i.kind === "waste" ? "waste" : i.kind === "clue" ? "clue" : `column-${i.index}` : "none";
}
function Be(i) {
  return i[i.length - 1] ?? null;
}
function Bm(i) {
  return { ...i };
}
function bo(i) {
  return [...i];
}
function Mt(i, r) {
  return r ? i.categories.find((d) => d.id === r) ?? null : null;
}
function qi(i, r) {
  return i.foundationOrder.findIndex((d) => d === r);
}
function Z0(i, r) {
  return r.categories.filter((d) => i.foundations[d.id].length === d.words.length).length;
}
function oo(i, r) {
  const d = i.wordIcons?.[r], s = i.iconOnlyWords?.includes(r) ? "iconOnly" : d ? "iconWord" : "word";
  return { id: `${i.id}-${r}`, label: r, categoryId: i.id, color: i.color, role: "word", faceIcon: d, faceStyle: s };
}
function Nm(i) {
  const r = i.clueStyle === "iconOnly" ? "iconOnly" : i.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${i.id}-clue`, label: i.clueTitle, categoryId: i.id, color: i.color, role: "clue", faceIcon: i.clueIcon, faceStyle: r };
}
function Yi(i, r) {
  return Math.max(0, Math.min(i.hiddenCounts[r] ?? 0, i.columns[r].length));
}
function V0(i, r) {
  return i.columns[r].slice(Yi(i, r));
}
function Tn(i) {
  return i[0] ?? null;
}
function Pt(i, r) {
  if (r.kind === "clue") return [];
  if (r.kind === "waste") {
    const f = Be(i.waste);
    return f ? [f] : [];
  }
  const d = V0(i, r.index);
  if (!d.length) return [];
  const s = d[d.length - 1];
  if (s.role === "clue") return [s];
  const v = s.categoryId;
  let x = d.length - 1;
  for (; x - 1 >= 0 && d[x - 1].role === "word" && d[x - 1].categoryId === v; ) x -= 1;
  return x - 1 >= 0 && d[x - 1].role === "clue" && d[x - 1].categoryId === v && (x -= 1), d.slice(x);
}
function K0(i, r) {
  const d = i.columns[r];
  if (!d.length) {
    i.hiddenCounts[r] = 0;
    return;
  }
  i.hiddenCounts[r] = Math.max(0, Math.min(i.hiddenCounts[r] ?? 0, d.length - 1));
}
function jm(i, r) {
  K0(i, r), i.columns[r].length && (i.hiddenCounts[r] ?? 0) >= i.columns[r].length && (i.hiddenCounts[r] = i.columns[r].length - 1);
}
function qm(i) {
  return {
    columns: mo(i.columns),
    hiddenCounts: bo(i.hiddenCounts),
    reserve: [...i.reserve],
    waste: [...i.waste],
    foundations: go(i.foundations),
    foundationOrder: vo(i.foundationOrder),
    clueDeck: So(i.clueDeck),
    activeClueCategoryId: i.activeClueCategoryId,
    selectedSource: i.selectedSource ? { ...i.selectedSource } : null,
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    message: i.message,
    mode: i.mode,
    boosters: Bm(i.boosters)
  };
}
function sa(i) {
  i.history = [qm(i), ...i.history].slice(0, 24);
}
function Gm(i) {
  const r = i.history[0];
  return !r || i.boosters.undo <= 0 ? !1 : (i.columns = mo(r.columns), i.hiddenCounts = bo(r.hiddenCounts), i.reserve = [...r.reserve], i.waste = [...r.waste], i.foundations = go(r.foundations), i.foundationOrder = vo(r.foundationOrder), i.clueDeck = So(r.clueDeck), i.activeClueCategoryId = r.activeClueCategoryId, i.selectedSource = r.selectedSource ? { ...r.selectedSource } : null, i.movesLeft = r.movesLeft, i.score = r.score, i.streak = r.streak, i.message = "Undo used.", i.mode = r.mode, i.boosters = { ...r.boosters, undo: Math.max(0, i.boosters.undo - 1) }, i.history = i.history.slice(1), !0);
}
function da(i, r, d = 0) {
  const s = Rl(i), v = [];
  for (const B of s.categories) {
    v.push(Nm(B));
    for (const le of B.words) v.push(oo(B, le));
  }
  let x = 5370206 + i * 131;
  const f = [...v];
  for (let B = f.length - 1; B > 0; B -= 1) {
    let le;
    [x, le] = vu(x);
    const ce = Math.floor(le * (B + 1));
    [f[B], f[ce]] = [f[ce], f[B]];
  }
  const R = [];
  let p = 0;
  for (const B of s.columnHeights)
    R.push(f.slice(p, p + B)), p += B;
  const y = R.map((B) => Math.max(0, B.length - 1)), S = f.slice(p).reverse(), z = Object.fromEntries(s.categories.map((B) => [B.id, []]));
  return {
    mode: "title",
    levelIndex: i,
    columns: R,
    hiddenCounts: y,
    reserve: S,
    waste: [],
    foundations: z,
    foundationOrder: Array.from({ length: mu }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: s.moveBudget,
    score: d,
    streak: 0,
    bestScore: Dm(),
    message: "Start by moving a gold clue card into any open crown.",
    fullscreen: r,
    particles: [],
    motionCards: [],
    feedbackTexts: [],
    foundationPulses: [],
    history: [],
    boosters: { undo: 1, joker: 0, shuffle: 1 }
  };
}
function po(i) {
  const r = [];
  i.columns.forEach((x, f) => {
    const R = { kind: "column", index: f }, p = Pt(i, R), y = Tn(p), S = Be(p);
    y && S && r.push({ source: R, card: y, topCard: S, run: p });
  });
  const d = Pt(i, { kind: "waste" }), s = Tn(d), v = Be(d);
  return s && v && r.push({ source: { kind: "waste" }, card: s, topCard: v, run: d }), r;
}
function To(i, r, d) {
  return d?.kind === "column" && r === void 0 ? !1 : r.length === 0 || Be(r)?.categoryId === i.categoryId;
}
function Ao(i, r = Rl(i.levelIndex)) {
  const d = po(i);
  let s = !1, v = !1, x = !1, f = !1, R = !1, p = !1, y = !1, S = "", z = "";
  for (const { source: B, card: le, topCard: ce } of d) {
    const _e = Mt(r, le.categoryId);
    if (!_e) continue;
    const k = i.foundations[le.categoryId].length < _e.words.length;
    le.role === "clue" && k && i.foundationOrder.includes(null) && (s = !0, z || (z = `${le.label} can claim an empty crown.`));
    const I = qi(i, ce.categoryId);
    ce.role === "word" && I >= 0 && k && (v = !0, S || (S = `${ce.label} matches the ${_e.clueTitle} clue.`));
    for (let De = 0; De < i.columns.length; De += 1)
      if (!(B.kind === "column" && B.index === De) && To(le, i.columns[De], B)) {
        x = !0, S || (S = `${le.label} can park on column ${De + 1}.`);
        break;
      }
    ce.role === "word" && i.boosters.joker > 0 && I >= 0 && k && (R = !0, S || (S = `Use Joker on ${ce.label} if you want to preserve the board.`));
  }
  return i.reserve.length > 0 && (f = !0, S || (S = "Draw from the reserve pile.")), i.boosters.shuffle > 0 && i.reserve.length + i.waste.length > 0 && (p = !0, S || (S = "Use Shuffle to recycle the reserve and waste piles.")), i.boosters.undo > 0 && i.history.length > 0 && (y = !0, S || (S = "Use Undo to back out of the dead end.")), s && z && (S = z), {
    cluePlacement: s,
    foundationSort: v,
    columnParking: x,
    reserveDraw: f,
    joker: R,
    shuffle: p,
    undo: y,
    any: s || v || x || f || R || p || y,
    hint: S || "No legal moves remain."
  };
}
function ru(i) {
  const r = Rl(i.levelIndex);
  if (r.categories.every((d) => i.foundations[d.id].length === d.words.length)) {
    i.mode = "won", i.message = "All categories cleared!", i.score > i.bestScore && (i.bestScore = i.score, wm(i.score));
    return;
  }
  if (i.movesLeft <= 0) {
    i.mode = "lost", i.message = "Out of moves. That deal is dead.";
    return;
  }
  Ao(i, r).any || (i.mode = "lost", i.message = "No legal moves remain. That deal is dead.");
}
function Ri(i, r, d) {
  if (r.kind === "clue") return [];
  if (r.kind === "waste") {
    const v = i.waste.pop();
    return v ? [v] : [];
  }
  const s = i.columns[r.index].splice(Math.max(0, i.columns[r.index].length - d), d);
  return jm(i, r.index), s;
}
function co(i, r, d, s) {
  for (let v = 0; v < 10; v += 1) {
    const x = v / 10 * Math.PI * 2;
    i.particles.push({ x: r, y: d, vx: Math.cos(x) * (1.2 + v * 0.12), vy: Math.sin(x) * (1.2 + v * 0.1) - 1.8, size: 8 + v % 3, life: 460, maxLife: 460, color: s });
  }
}
function Ot(i, r, d, s, v, x = 0.2) {
  i.feedbackTexts.push({ text: r, x: d, y: s, life: 720, maxLife: 720, color: v, scale: x });
}
function su(i, r, d) {
  i.foundationPulses = i.foundationPulses.filter((s) => s.slotIndex !== r), i.foundationPulses.push({ slotIndex: r, color: d, life: 520, maxLife: 520 });
}
function du(i, r, d, s, v) {
  i.motionCards.push({
    card: r,
    fromX: d.x,
    fromY: d.y,
    toX: s.x,
    toY: s.y,
    w: s.w,
    h: s.h,
    life: 420,
    maxLife: 420,
    arc: v ? 14 : 22,
    compact: v
  });
}
function Ym(i) {
  return Ao(i).hint;
}
function xo(i, r) {
  const d = [...i];
  let s = r;
  for (let v = d.length - 1; v > 0; v -= 1) {
    let x;
    [s, x] = vu(s);
    const f = Math.floor(x * (v + 1));
    [d[v], d[f]] = [d[f], d[v]];
  }
  return d;
}
function Ct(i, r, d) {
  return i >= d.x && i <= d.x + d.w && r >= d.y && r <= d.y + d.h;
}
function je(i) {
  if (zo()) {
    const R = i.columnHeights.length, p = 10, y = (Le - 32 - p * (R - 1)) / R;
    return {
      reserve: { x: 16, y: 18, w: 210, h: 130 },
      waste: { x: 250, y: 18, w: 220, h: 130 },
      clue: { x: 500, y: 18, w: 210, h: 130 },
      foundations: Array.from({ length: mu }, (S, z) => ({ x: 16 + z * 188, y: 180, w: 176, h: 185 })),
      columns: i.columnHeights.map((S, z) => ({ x: 16 + z * (y + p), y: 405, w: y, h: 495 }))
    };
  }
  const r = Le - 502 - 28, d = Math.max(72, Math.min(84, Math.floor((r - 8 * Math.max(0, mu - 1)) / mu))), s = i.columnHeights.length >= 6 ? 116 : 136, v = i.columnHeights.length >= 6 ? 18 : 20, x = i.columnHeights.length * s + Math.max(0, i.columnHeights.length - 1) * v, f = Math.round((Le - x) / 2);
  return {
    reserve: { x: 92, y: 126, w: 102, h: 142 },
    waste: { x: 224, y: 126, w: 114, h: 150 },
    clue: { x: 360, y: 110, w: 124, h: 170 },
    foundations: Array.from({ length: mu }, (R, p) => ({ x: 502 + p * (d + 8), y: 72, w: d, h: 214 })),
    columns: i.columnHeights.map((R, p) => ({ x: f + p * (s + v), y: 320, w: s, h: 570 }))
  };
}
function Bi(i, r, d) {
  const s = i.getBoundingClientRect();
  return !s.width || !s.height ? null : {
    x: (r - s.left) / s.width * Le,
    y: (d - s.top) / s.height * kl
  };
}
function bn() {
  if (typeof window > "u") return { width: 1440, height: 960 };
  const i = window.visualViewport;
  return {
    width: Math.round(i?.width ?? window.innerWidth),
    height: Math.round(i?.height ?? window.innerHeight)
  };
}
function N0(i) {
  const r = i;
  return i.fullscreenElement ?? r.webkitFullscreenElement ?? null;
}
function Lm(i) {
  if (!i) return !1;
  const r = i;
  return typeof r.requestFullscreen == "function" || typeof r.webkitRequestFullscreen == "function";
}
async function Xm(i) {
  const r = i;
  return typeof r.requestFullscreen == "function" ? (await r.requestFullscreen(), !0) : typeof r.webkitRequestFullscreen == "function" ? (await r.webkitRequestFullscreen(), !0) : !1;
}
async function j0(i) {
  const r = i;
  return typeof i.exitFullscreen == "function" ? (await i.exitFullscreen(), !0) : typeof r.webkitExitFullscreen == "function" ? (await r.webkitExitFullscreen(), !0) : !1;
}
function Qm(i, r, d, s) {
  const v = je(i);
  if (Be(r.waste) && Ct(d, s, v.waste)) return { kind: "waste" };
  if (r.activeClueCategoryId && Ct(d, s, v.clue)) return { kind: "clue" };
  for (let x = r.columns.length - 1; x >= 0; x -= 1) {
    if (!r.columns[x].length) continue;
    const f = Vm(i, r, x);
    if (f && Ct(d, s, f))
      return { kind: "column", index: x };
  }
  return null;
}
function q0(i, r, d, s, v, x) {
  const f = Tn(s), R = Be(s), p = je(i);
  for (let y = 0; y < p.foundations.length; y += 1) {
    if (!Ct(v, x, p.foundations[y])) continue;
    if (f?.role === "clue") {
      if (r.foundationOrder[y] == null) return { kind: "foundation", index: y };
      continue;
    }
    const S = r.foundationOrder[y];
    if (S && R?.role === "word" && R.categoryId === S) return { kind: "foundation", index: y };
  }
  for (let y = 0; y < p.columns.length; y += 1)
    if (Ct(v, x, p.columns[y])) {
      if (d.kind === "column" && d.index === y) return null;
      if (f && To(f, r.columns[y], d)) return { kind: "column", index: y };
    }
  return null;
}
function Su(i, r, d) {
  const s = je(i).columns[d], v = r.columns[d], { hiddenCount: x, hiddenStep: f, visibleStep: R } = Zm(i, r, d), p = [];
  let y = s.y + 24;
  return v.forEach((S, z) => {
    const B = z < x, le = z === v.length - 1;
    p.push({ x: s.x + 10, y, w: s.w - 20, h: B ? Q0 : yo, hidden: B, top: le }), y += B ? f : R;
  }), p;
}
function Zm(i, r, d) {
  const s = je(i).columns[d], v = r.columns[d], x = Yi(r, d), f = Math.max(0, v.length - x), R = s.h - 48, p = f > 0 ? yo : Q0;
  let y = x > 0 ? Sm : 0, S = f > 1 ? zo() ? 80 : vm : 0;
  const z = () => x * y + Math.max(0, f - 1) * S + p;
  if (z() > R && x > 0) {
    const B = Math.max(0, R - p - Math.max(0, f - 1) * S);
    y = Math.max(pm, Math.floor(B / x));
  }
  if (z() > R && f > 1) {
    const B = Math.max(0, R - p - x * y);
    S = Math.max(bm, Math.floor(B / (f - 1)));
  }
  if (z() > R && x > 0) {
    const B = Math.max(0, R - p - Math.max(0, f - 1) * S);
    y = Math.max(4, Math.floor(B / x));
  }
  if (z() > R && f > 1) {
    const B = Math.max(0, R - p - x * y);
    S = Math.max(6, Math.floor(B / (f - 1)));
  }
  return { hiddenCount: x, visibleCount: f, hiddenStep: y, visibleStep: S };
}
function Vm(i, r, d) {
  const s = Su(i, r, d).filter((f) => !f.hidden);
  if (!s.length) return null;
  const v = s[0], x = s[s.length - 1];
  return {
    x: v.x,
    y: v.y,
    w: v.w,
    h: x.y + x.h - v.y
  };
}
function Ni(i, r, d, s) {
  return d.kind === "clue" ? [{ x: je(i).clue.x, y: je(i).clue.y, w: je(i).clue.w, h: je(i).clue.h }] : d.kind === "waste" ? [{ x: je(i).waste.x, y: je(i).waste.y, w: je(i).waste.w, h: je(i).waste.h }] : Su(i, r, d.index).slice(-s);
}
function Km(i, r, d, s) {
  return Su(i, r, d).slice(-s);
}
function gu(i, r, d) {
  const s = je(i).foundations[r], v = Math.min(Math.max(d, 0), 3), x = v > 0 ? v - 1 : 0;
  return {
    x: s.x + 14 + x * 3,
    y: s.y + 126,
    w: s.w - 28,
    h: 54
  };
}
function G0(i, r, d) {
  const s = r.foundationOrder[d], v = s ? r.foundations[s] : [];
  return gu(i, d, v.length);
}
function Y0(i, r) {
  const d = je(i).foundations[r];
  return { x: d.x + 10, y: d.y + 10, w: d.w - 20, h: 104 };
}
function Jm(i) {
  const r = Rl(i.levelIndex), d = Ao(i, r), s = po(i).filter(({ card: v }) => v.role === "clue").map(({ source: v, card: x }) => ({ source: ut(v), label: x.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: i.mode,
    levelNumber: i.levelIndex + 1,
    dealType: i.levelIndex < ha.length ? "curated" : "generated",
    level: r.name,
    tagline: r.tagline,
    totalCategories: r.categories.length,
    crownSlots: i.foundationOrder.length,
    completedCategories: Z0(i, r),
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    selectedSource: ut(i.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: s,
    reserveCount: i.reserve.length,
    wasteTop: Be(i.waste)?.label ?? null,
    foundations: i.foundationOrder.map((v, x) => ({
      slot: x,
      clueIcon: Mt(r, v)?.clueIcon ?? null,
      clueTitle: Mt(r, v)?.clueTitle ?? null,
      count: v ? i.foundations[v].length : 0,
      words: v ? i.foundations[v].map((f) => f.label) : []
    })),
    columns: i.columns.map((v, x) => ({
      index: x,
      count: v.length,
      hidden: i.hiddenCounts[x] ?? 0,
      top: Be(v)?.label ?? null,
      topRole: Be(v)?.role ?? null,
      topDisplay: Be(v)?.faceStyle === "iconOnly" ? Be(v)?.faceIcon ?? Be(v)?.label ?? null : Be(v)?.label ?? null,
      revealed: V0(i, x).map((f) => ({ label: f.label, role: f.role, display: f.faceStyle === "iconOnly" ? f.faceIcon ?? f.label : f.label, faceStyle: f.faceStyle ?? "word" }))
    })),
    boosters: i.boosters,
    actions: d,
    animations: { motionCards: i.motionCards.length, feedbackTexts: i.feedbackTexts.length, foundationPulses: i.foundationPulses.length },
    message: i.message,
    fullscreen: i.fullscreen
  });
}
function ve(i, r, d, s, v, x) {
  i.beginPath(), i.moveTo(r + x, d), i.arcTo(r + s, d, r + s, d + v, x), i.arcTo(r + s, d + v, r, d + v, x), i.arcTo(r, d + v, r, d, x), i.arcTo(r, d, r + s, d, x), i.closePath();
}
function fo(i, r, d, s, v, x, f, R = "#10302a") {
  i.fillStyle = x, ve(i, r, d, s, v, v / 2), i.fill(), i.fillStyle = R, i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(f, r + s / 2, d + v / 2 + 6);
}
function km(i, r, d, s, v, x, f) {
  for (let R = s; R >= v; R -= 1)
    if (i.font = `${x} ${R}px ${f}`, i.measureText(r).width <= d) return R;
  return v;
}
function ro(i, r, d, s, v, x, f, R, p) {
  const y = km(i, r, v, x, f, R, p);
  return i.font = `${R} ${y}px ${p}`, i.fillText(r, d, s), y;
}
function Wm(i, r, d, s, v, x) {
  Gi(i, r, d, s, v, 18, 0.26);
  const f = i.createLinearGradient(r, d, r, d + v);
  f.addColorStop(0, "#fff2c8"), f.addColorStop(1, "#efbf58"), i.fillStyle = f, ve(i, r, d, s, v, 18), i.fill(), i.strokeStyle = "rgba(138, 95, 16, 0.38)", i.lineWidth = 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", ve(i, r + 10, d + 10, s - 20, 22, 11), i.fill(), i.fillStyle = "#7b5310", i.font = "800 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("CROWN", r + s / 2, d + 26), i.fillStyle = "#7b5310", x.clueStyle !== "wordOnly" && (i.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(x.clueIcon, r + s / 2, x.clueStyle === "iconOnly" ? d + 76 : d + 64)), x.clueStyle !== "iconOnly" && ro(
    i,
    x.clueTitle,
    r + s / 2,
    x.clueStyle === "wordOnly" ? d + 76 : d + 98,
    s - 18,
    x.clueStyle === "wordOnly" ? 24 : 17,
    x.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function Gi(i, r, d, s, v, x = 18, f = 0.28) {
  i.save(), i.shadowColor = `rgba(4, 14, 22, ${f})`, i.shadowBlur = x, i.shadowOffsetY = 10, i.fillStyle = "rgba(0,0,0,0.01)", ve(i, r, d, s, v, 20), i.fill(), i.restore();
}
function hu(i, r, d, s, v) {
  Gi(i, r, d, s, v, 16, 0.24);
  const x = i.createLinearGradient(r, d, r + s, d + v);
  x.addColorStop(0, "#4874b9"), x.addColorStop(1, "#254d83"), i.fillStyle = x, ve(i, r, d, s, v, 18), i.fill(), i.strokeStyle = "rgba(255,255,255,0.3)", i.lineWidth = 2, i.stroke(), i.strokeStyle = "rgba(255,255,255,0.22)", i.lineWidth = 1.5, ve(i, r + 8, d + 8, s - 16, v - 16, 14), i.stroke(), i.fillStyle = "rgba(255,255,255,0.18)";
  for (let f = 0; f < 3; f += 1)
    for (let R = 0; R < 2; R += 1) {
      const p = r + 26 + R * 34, y = d + 24 + f * 26;
      ve(i, p, y, 18, 12, 6), i.fill();
    }
}
function yu(i, r, d, s, v, x, f, R = !1) {
  const p = R || v <= 86;
  if (x.role === "clue") {
    Gi(i, r, d, s, v, f ? 18 : 14, f ? 0.3 : 0.24);
    const z = i.createLinearGradient(r, d, r, d + v);
    z.addColorStop(0, "#fff2c8"), z.addColorStop(1, "#efbf58"), i.fillStyle = z, ve(i, r, d, s, v, p ? 14 : 18), i.fill(), i.strokeStyle = f ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", i.lineWidth = f ? 3 : 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", ve(i, r + 8, d + 8, s - 16, p ? 14 : 18, 12), i.fill(), i.fillStyle = "#7b5310", i.textAlign = "center", i.font = p ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", i.fillText("CLUE", r + s / 2, d + (p ? 18 : 26)), x.faceStyle !== "word" && x.faceIcon && (i.font = p ? x.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(x.faceIcon, r + s / 2, d + (x.faceStyle === "iconOnly" ? p ? 40 : 50 : p ? 34 : 38))), x.faceStyle !== "iconOnly" && ro(
      i,
      x.label,
      r + s / 2,
      d + (x.faceStyle === "word" ? p ? 46 : 54 : p ? 52 : 62),
      s - (p ? 16 : 22),
      p ? 10 : 18,
      p ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), p || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(123,83,16,0.74)", i.fillText("CLAIM A CROWN", r + s / 2, d + v - 12));
    return;
  }
  Gi(i, r, d, s, v, f ? 18 : 14, f ? 0.28 : 0.22);
  const y = i.createLinearGradient(r, d, r, d + v);
  y.addColorStop(0, "#fffef8"), y.addColorStop(1, "#f4efe4"), i.fillStyle = y, ve(i, r, d, s, v, p ? 14 : 18), i.fill(), i.strokeStyle = f ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", i.lineWidth = f ? 3 : 2, i.stroke();
  const S = i.createLinearGradient(r, d + 8, r + s, d + 8);
  S.addColorStop(0, "#f3d9a7"), S.addColorStop(1, "#e8c77f"), i.fillStyle = S, ve(i, r + 8, d + 8, s - 16, p ? 14 : 18, 12), i.fill(), i.fillStyle = "#102422", i.textAlign = "center", x.faceStyle === "iconOnly" && x.faceIcon ? (i.font = p ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(x.faceIcon, r + s / 2, d + (p ? 42 : 50)), p || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.42)", i.fillText("IMAGE CARD", r + s / 2, d + 66))) : (x.faceStyle === "iconWord" && x.faceIcon && (i.font = p ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(x.faceIcon, r + s / 2, d + (p ? 27 : 28))), ro(
    i,
    x.label,
    r + s / 2,
    d + (p ? 46 : x.faceStyle === "iconWord" ? 52 : 44),
    s - (p ? 16 : 22),
    p ? 12 : 19,
    p ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), p || (i.font = "600 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.4)", i.fillText(x.faceStyle === "iconWord" ? "ICON CARD" : "WORD", r + s / 2, d + 64)));
}
function so(i) {
  return 1 - (1 - i) ** 3;
}
function zo() {
  return window.innerWidth <= 760;
}
function Ul(i, r, d, s, v, x = "#153b38", f = 36) {
  i.fillStyle = x, i.textAlign = "center", i.font = `700 ${f}px system-ui, sans-serif`;
  const R = String(r).split(/\s+/), p = [];
  let y = "";
  for (const S of R) {
    const z = y ? `${y} ${S}` : S;
    if (i.measureText(z).width <= v) y = z;
    else {
      y && p.push(y), y = "";
      for (const B of S)
        i.measureText(y + B).width > v && y && (p.push(y), y = ""), y += B;
    }
  }
  y && p.push(y), p.slice(0, 3).forEach((S, z) => i.fillText(S, d, s + z * (f + 2)));
}
function ji(i, r, d, s = !1) {
  i.fillStyle = d.role === "clue" ? "#ffe09a" : "#fffdf4", ve(i, r.x, r.y, r.w, r.h, 16), i.fill(), i.strokeStyle = s ? "#30ddd0" : "rgba(0,0,0,.14)", i.lineWidth = s ? 7 : 2, i.stroke(), d.faceStyle === "iconOnly" && d.faceIcon ? (i.textAlign = "center", i.font = '60px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(d.faceIcon, r.x + r.w / 2, r.y + 70)) : Ul(i, d.label, r.x + r.w / 2, r.y + 38, r.w - 12), d.role === "clue" && Ul(i, "CLUE", r.x + r.w / 2, r.y + r.h - 12, r.w - 10, "#8b6017", 23);
}
function $m(i, r, d) {
  const s = Rl(r.levelIndex), v = je(s);
  i.clearRect(0, 0, Le, kl), i.fillStyle = "#123e3c", i.fillRect(0, 0, Le, kl), i.fillStyle = "#245654", ve(i, v.reserve.x, v.reserve.y, v.reserve.w, v.reserve.h, 18), i.fill(), Ul(i, "DRAW", 121, 68, 180, "#ffffff", 36), Ul(i, String(r.reserve.length), 121, 113, 180, "#ffe09a", 34);
  const x = Be(r.waste);
  x && !(d?.moved && d.source.kind === "waste") ? ji(i, v.waste, x, r.selectedSource?.kind === "waste") : x || Ul(i, "Last card", 360, 80, 210, "#a8c5be", 30), Ul(i, "Gold clues start a category.", 723, 66, 405, "#d4e8df", 30), r.foundationOrder.forEach((f, R) => {
    const p = v.foundations[R], y = Mt(s, f), S = y ? r.foundations[f].length : 0, z = d?.dropTarget?.kind === "foundation" && d.dropTarget.index === R;
    i.fillStyle = z ? "#437d65" : "#20534e", ve(i, p.x, p.y, p.w, p.h, 18), i.fill(), i.strokeStyle = z ? "#ffe09a" : "#709884", i.lineWidth = z ? 6 : 2, i.stroke(), Ul(i, y ? y.clueTitle || y.name : "+", p.x + p.w / 2, p.y + 40, p.w - 16, "#ffe09a", 32), Ul(i, y ? `${S}/${y.words.length}` : "Clue", p.x + p.w / 2, p.y + 164, p.w - 12, "#f2f8ed", 30);
  }), Ul(i, "YOUR CARDS", Le / 2, 395, 500, "#d4e8df", 26), r.columns.forEach((f, R) => {
    const p = v.columns[R];
    i.fillStyle = "#194a46", ve(i, p.x, p.y, p.w, p.h, 18), i.fill();
    const y = Su(s, r, R), S = Yi(r, R), z = d?.moved && d.source.kind === "column" && d.source.index === R ? d.cards.length : 0;
    f.length || Ul(i, "+", p.x + p.w / 2, p.y + 70, p.w, "#8ab4a5", 38), f.slice(0, f.length - z).forEach((B, le) => {
      const ce = y[le];
      le < S ? (i.fillStyle = "#418b8a", ve(i, ce.x, ce.y, ce.w, ce.h, 12), i.fill(), i.strokeStyle = "#70a7a0", i.lineWidth = 2, i.stroke()) : ji(i, ce, B, r.selectedSource?.kind === "column" && r.selectedSource.index === R);
    });
  }), d?.moved && (i.save(), i.globalAlpha = 0.94, d.cards.forEach((f, R) => ji(i, { x: d.x - 90, y: d.y - 80 + R * 80, w: 180, h: 132 }, f, !0)), i.restore()), r.motionCards.forEach((f) => {
    const R = so(1 - f.life / f.maxLife);
    i.save(), i.globalAlpha = 0.88, ji(i, { x: f.fromX + (f.toX - f.fromX) * R, y: f.fromY + (f.toY - f.fromY) * R - Math.sin(R * Math.PI) * f.arc, w: Math.max(150, f.w), h: 132 }, f.card), i.restore();
  }), r.foundationPulses.forEach((f) => {
    const R = v.foundations[f.slotIndex];
    R && (i.save(), i.globalAlpha = f.life / f.maxLife, i.strokeStyle = "#ffe09a", i.lineWidth = 8, ve(i, R.x, R.y, R.w, R.h, 18), i.stroke(), i.restore());
  }), r.particles.forEach((f) => {
    i.save(), i.globalAlpha = f.life / f.maxLife, i.fillStyle = f.color, i.fillRect(f.x, f.y, f.size, f.size), i.restore();
  });
}
function Fm(i, r) {
  if (r.mode !== "won" && r.mode !== "lost") return;
  const d = r.mode === "won";
  i.save(), i.fillStyle = "rgba(6,28,29,.76)", i.fillRect(0, 0, Le, kl), i.fillStyle = "#fff9e9", ve(i, 60, 250, 840, 380, 30), i.fill(), Ul(i, d ? "All categories cleared" : "Try another deal", Le / 2, 340, 770, "#163e37", 48), Ul(i, d ? `${r.score} points` : r.movesLeft <= 0 ? "You used all your moves." : "No available moves remain.", Le / 2, 412, 770, "#42675c", 34), i.fillStyle = "#ffda86", ve(i, 230, 480, 500, 90, 24), i.fill(), Ul(i, d ? "Tap for the next deal" : "Tap to try again", Le / 2, 537, 460, "#163e37", 34), i.restore();
}
function Im(i, r, d) {
  if (zo()) {
    $m(i, r, d);
    return;
  }
  const s = Rl(r.levelIndex), v = je(s);
  i.clearRect(0, 0, Le, kl);
  const x = i.createLinearGradient(0, 0, 0, kl);
  x.addColorStop(0, "#1f5b58"), x.addColorStop(0.5, "#123f40"), x.addColorStop(1, "#09272d"), i.fillStyle = x, i.fillRect(0, 0, Le, kl);
  const f = i.createLinearGradient(0, 0, Le, kl);
  f.addColorStop(0, "rgba(255,255,255,0.025)"), f.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = f;
  for (let y = 0; y < 6; y += 1)
    for (let S = 0; S < 5; S += 1)
      ve(i, 18 + S * 188, 18 + y * 168, 120, 72, 24), i.fill();
  i.save();
  const R = i.createRadialGradient(128, 112, 10, 128, 112, 420);
  R.addColorStop(0, "rgba(211, 255, 231, 0.24)"), R.addColorStop(1, "rgba(211, 255, 231, 0)"), i.fillStyle = R, i.fillRect(0, 0, Le, kl);
  const p = i.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (p.addColorStop(0, "rgba(255, 226, 164, 0.2)"), p.addColorStop(1, "rgba(255, 226, 164, 0)"), i.fillStyle = p, i.fillRect(0, 0, Le, kl), i.restore(), i.fillStyle = "rgba(247,255,249,0.64)", i.textAlign = "left", i.font = "800 12px Trebuchet MS, sans-serif", i.fillText("DRAW", 78, 48), i.fillText("CATEGORY STACKS", 502, 48), i.fillText("PLAY AREA", 76, 306), ve(i, 78, 66, 286, 222, 30), i.fillStyle = "rgba(4,16,20,0.28)", i.fill(), fo(i, 102, 82, 110, 32, "rgba(255,255,255,0.12)", "Draw pile", "#eff8f3"), fo(i, 240, 82, 92, 32, "rgba(255,255,255,0.12)", "Last card", "#eff8f3"), r.reserve.length ? (hu(i, v.reserve.x, v.reserve.y + 10, v.reserve.w, v.reserve.h), hu(i, v.reserve.x + 6, v.reserve.y + 4, v.reserve.w, v.reserve.h), hu(i, v.reserve.x + 12, v.reserve.y - 2, v.reserve.w, v.reserve.h), fo(i, v.reserve.x + 24, v.reserve.y + 92, 74, 34, "#ffe59f", String(r.reserve.length))) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), ve(i, v.reserve.x + 12, v.reserve.y, v.reserve.w, v.reserve.h, 20), i.stroke(), i.setLineDash([])), r.waste.length) {
    const y = Be(r.waste);
    (r.waste.length > 1 || d?.source.kind === "waste" && d.moved) && hu(i, v.waste.x + 6, v.waste.y + 4, v.reserve.w, v.reserve.h), d?.source.kind === "waste" && d.moved || yu(i, v.waste.x, v.waste.y, v.waste.w, v.waste.h, y, r.selectedSource?.kind === "waste");
  } else
    i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), ve(i, v.waste.x, v.waste.y, v.waste.w, v.waste.h, 20), i.stroke(), i.setLineDash([]);
  r.foundationOrder.forEach((y, S) => {
    const z = v.foundations[S], B = Mt(s, y), le = B ? r.foundations[B.id] : [], ce = r.foundationPulses.find((k) => k.slotIndex === S), _e = d?.dropTarget?.kind === "foundation" && d.dropTarget.index === S;
    if (ce) {
      const k = ce.life / ce.maxLife;
      i.save(), i.globalAlpha = 0.22 * k, i.fillStyle = "#ffe59b", ve(i, z.x - 8, z.y - 8, z.w + 16, z.h + 16, 30), i.fill(), i.restore();
    }
    if (i.fillStyle = _e ? "rgba(255, 238, 182, 0.2)" : B ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)", ve(i, z.x, z.y, z.w, z.h, 22), i.fill(), _e && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, ve(i, z.x, z.y, z.w, z.h, 22), i.stroke()), B ? Wm(i, z.x + 10, z.y + 10, z.w - 20, 104, B) : (i.strokeStyle = "rgba(255,229,159,0.48)", i.lineWidth = 2, i.setLineDash([6, 7]), ve(i, z.x + 12, z.y + 12, z.w - 24, 102, 18), i.stroke(), i.setLineDash([]), i.font = "800 24px Trebuchet MS, sans-serif", i.fillStyle = "#ffe59f", i.textAlign = "center", i.fillText("+", z.x + z.w / 2, z.y + 52), i.font = "800 10px Trebuchet MS, sans-serif", i.fillText("PLACE CLUE", z.x + z.w / 2, z.y + 78)), B && le.length) {
      const k = le.slice(-3);
      k.forEach((I, De) => {
        yu(i, z.x + 14 + De * 3, z.y + 126 + (k.length - De - 1) * 5, z.w - 28, 54, I, !1, !0);
      });
    } else
      i.strokeStyle = "rgba(255,255,255,0.16)", i.setLineDash([6, 8]), i.lineWidth = 2, ve(i, z.x + 16, z.y + 126, z.w - 32, 70, 16), i.stroke(), i.setLineDash([]), B && (i.font = "700 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.68)", i.textAlign = "center", i.fillText("MATCH WORDS", z.x + z.w / 2, z.y + 168));
    i.fillStyle = "#eff9f3", i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(B ? `${le.length} of ${B.words.length}` : "READY", z.x + z.w / 2, z.y + z.h - 26), i.fillStyle = "rgba(255,229,159,0.9)", i.fillRect(z.x + 16, z.y + z.h - 16, B ? (z.w - 32) * le.length / B.words.length : 0, 8), i.strokeStyle = "rgba(255,255,255,0.18)", i.strokeRect(z.x + 16, z.y + z.h - 16, z.w - 32, 8);
  }), r.columns.forEach((y, S) => {
    const z = v.columns[S], B = Su(s, r, S), le = d?.dropTarget?.kind === "column" && d.dropTarget.index === S;
    i.fillStyle = le ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", ve(i, z.x, z.y, z.w, z.h, 28), i.fill(), le && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, ve(i, z.x, z.y, z.w, z.h, 28), i.stroke()), y.length || (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), ve(i, z.x + 10, z.y + 24, z.w - 20, yo, 20), i.stroke(), i.setLineDash([]), i.fillStyle = "rgba(239,249,243,0.74)", i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("Drop Here", z.x + z.w / 2, z.y + 98));
    const ce = Yi(r, S), _e = d?.moved && d.source.kind === "column" && d.source.index === S ? d.cards.length : 0, k = Math.max(ce, y.length - _e);
    y.forEach((I, De) => {
      if (De >= k) return;
      const Se = B[De];
      if (!Se) return;
      const Fe = De < ce, il = De === k - 1;
      if (Fe) {
        hu(i, Se.x, Se.y, Se.w, Se.h);
        return;
      }
      yu(
        i,
        Se.x,
        Se.y,
        Se.w,
        Se.h,
        I,
        il && r.selectedSource?.kind === "column" && r.selectedSource.index === S && !d,
        !1
      );
    });
  }), d?.moved && (i.save(), i.globalAlpha = 0.96, d.cards.forEach((y, S) => {
    yu(
      i,
      d.x - w0 / 2,
      d.y - 52 + S * Am,
      w0,
      Tm,
      y,
      !0,
      !1
    );
  }), i.restore()), r.motionCards.forEach((y) => {
    const S = so(1 - y.life / y.maxLife), z = y.fromX + (y.toX - y.fromX) * S, B = y.fromY + (y.toY - y.fromY) * S - Math.sin(S * Math.PI) * y.arc;
    i.save(), i.globalAlpha = 0.92, yu(i, z, B, y.w, y.h, y.card, !1, y.compact), i.restore();
  }), r.feedbackTexts.forEach((y) => {
    const S = 1 - y.life / y.maxLife, z = 1 - S, B = y.y - S * 36, le = 0.92 + y.scale * so(S);
    i.save(), i.globalAlpha = z, i.translate(y.x, B), i.scale(le, le), i.textAlign = "center", i.font = "800 28px Trebuchet MS, sans-serif", i.strokeStyle = "rgba(7,18,18,0.34)", i.lineWidth = 8, i.strokeText(y.text, 0, 0), i.fillStyle = y.color, i.fillText(y.text, 0, 0), i.restore();
  }), r.particles.forEach((y) => {
    i.save(), i.globalAlpha = y.life / y.maxLife, i.fillStyle = y.color, ve(i, y.x - y.size / 2, y.y - y.size / 2, y.size, y.size, 5), i.fill(), i.restore();
  }), r.mode;
}
function L0(i, r) {
  const d = [];
  for (const s of i.particles)
    s.life -= r, !(s.life <= 0) && (s.x += s.vx * (r / 16), s.y += s.vy * (r / 16), s.vy += 0.04 * (r / 16), d.push(s));
  i.particles = d, i.motionCards = i.motionCards.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : [])), i.feedbackTexts = i.feedbackTexts.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : [])), i.foundationPulses = i.foundationPulses.flatMap((s) => (s.life -= r, s.life > 0 ? [s] : []));
}
function Pl(i) {
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
function pn(i, r) {
  return i.length <= r ? i : `${i.slice(0, Math.max(1, r - 1))}…`;
}
function Pm({ presentation: i = "app" }) {
  const r = i === "export", d = yl.useRef(null);
  d.current || (d.current = da(0, !1));
  const s = yl.useRef(null), v = yl.useRef(null), x = yl.useRef(null), f = yl.useRef(d.current), R = yl.useRef(null), p = yl.useRef("off"), y = yl.useRef(null), [S, z] = yl.useState(d.current), [B, le] = yl.useState(() => bn()), [ce, _e] = yl.useState("off"), k = () => z({ ...f.current, columns: mo(f.current.columns), hiddenCounts: bo(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: go(f.current.foundations), foundationOrder: vo(f.current.foundationOrder), clueDeck: So(f.current.clueDeck), particles: [...f.current.particles], motionCards: Hm(f.current.motionCards), feedbackTexts: Um(f.current.feedbackTexts), foundationPulses: Rm(f.current.foundationPulses) }), I = Rl(S.levelIndex), De = Z0(S, I), Se = (O) => {
    p.current = O, _e(O), f.current.fullscreen = O !== "off";
  }, Fe = (O) => {
    if (typeof document > "u") return;
    const N = document.documentElement, w = document.body;
    if (O) {
      y.current || (y.current = {
        htmlOverflow: N.style.overflow,
        bodyOverflow: w.style.overflow,
        htmlOverscroll: N.style.overscrollBehavior,
        bodyOverscroll: w.style.overscrollBehavior
      }), N.style.overflow = "hidden", w.style.overflow = "hidden", N.style.overscrollBehavior = "none", w.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const L = y.current;
    L && (N.style.overflow = L.htmlOverflow, w.style.overflow = L.bodyOverflow, N.style.overscrollBehavior = L.htmlOverscroll, w.style.overscrollBehavior = L.bodyOverscroll, y.current = null);
  }, il = () => typeof window > "u" || typeof navigator > "u" ? !1 : bn().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent)), el = (O) => {
    p.current === "immersive" && (Fe(!1), Se("off"), f.current.message = O, le(bn()), k());
  }, fe = () => {
    Fe(!0), Se("immersive"), f.current.message = "Mobile fullscreen enabled.", le(bn()), k();
  }, We = (O, N = f.current.levelIndex) => {
    const w = da(N, f.current.fullscreen, 0);
    w.mode = "playing", f.current = w, k();
  }, Bl = (O, N, w) => {
    if (f.current.mode !== "playing") return;
    const L = w ?? Pt(f.current, N), Z = Tn(L);
    if (!Z || Z.role !== "clue") {
      f.current.message = "Only clue cards can claim an empty crown.", k();
      return;
    }
    const q = Mt(I, Z.categoryId);
    if (!q) {
      f.current.message = "That clue card has no category data.", k();
      return;
    }
    if (f.current.foundations[q.id].length === q.words.length) {
      f.current.message = `${q.clueTitle} is already complete.`, k();
      return;
    }
    if (f.current.foundationOrder[O] != null) {
      f.current.message = "That crown already has a clue card.", k();
      return;
    }
    const Y = qi(f.current, q.id);
    if (Y >= 0) {
      f.current.message = `${q.clueTitle} already owns crown ${Y + 1}.`, k();
      return;
    }
    const K = Ni(I, f.current, N, L.length);
    sa(f.current);
    const ee = Ri(f.current, N, L.length);
    if (!ee.length) return;
    const [Wl, ...Ne] = ee, On = f.current.foundations[q.id].length;
    f.current.foundationOrder[O] = q.id, Ne.length && f.current.foundations[q.id].push(...Ne), f.current.selectedSource = null;
    const et = Ne.reduce((qe, jl, ol) => qe + 100 + ol * 25, 0);
    if (f.current.streak = Ne.length, f.current.message = Ne.length ? `${q.clueTitle} claimed crown ${O + 1} with ${Ne.length} matching card${Ne.length === 1 ? "" : "s"}.` : `${q.clueTitle} placed into crown ${O + 1}.`, f.current.score += 40 + et, du(f.current, Wl, K[0] ?? Y0(I, O), Y0(I, O), !1), Ne.forEach((qe, jl) => {
      const ol = gu(I, O, On + jl + 1);
      du(f.current, qe, K[jl + 1] ?? K[K.length - 1] ?? ol, ol, !0);
    }), su(f.current, O, q.color), Ot(f.current, q.clueTitle, je(I).foundations[O].x + je(I).foundations[O].w / 2, je(I).foundations[O].y + 34, "#fff4bf", 0.22), Ne.length) {
      const qe = gu(I, O, On + Ne.length);
      co(f.current, qe.x + qe.w / 2, qe.y + 30, q.color), Ot(f.current, `+${40 + et}`, qe.x + qe.w / 2, qe.y + 24, "#fff4bf", 0.24), f.current.streak >= 2 && Ot(f.current, `Combo x${f.current.streak}`, Le / 2, 342, "#fff0b4", 0.3);
    }
    f.current.foundations[q.id].length === q.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${q.clueTitle} completed. Crown ${O + 1} opens again.`, Ot(f.current, "Set Clear", Le / 2, 316, "#ffe7aa", 0.34), su(f.current, O, q.color)), sl(), k();
  }, cl = (O) => {
    if (f.current.mode !== "playing") return;
    const N = Pt(f.current, O), w = Tn(N), L = Be(N);
    if (!(!w || !L)) {
      if (ut(f.current.selectedSource) === ut(O)) {
        if (w.role === "clue") {
          const Z = f.current.foundationOrder.map((q, Y) => q == null ? Y : -1).filter((q) => q >= 0);
          Z.length === 1 ? Xe(Z[0]) : (f.current.selectedSource = null, f.current.message = Z.length ? `Select an empty crown for ${w.label}.` : "Every crown already has a clue card.", k());
        } else {
          const Z = qi(f.current, L.categoryId);
          Z >= 0 ? Xe(Z) : (f.current.selectedSource = null, f.current.message = "Find and place the matching clue card first.", k());
        }
        ut(f.current.selectedSource) === ut(O) && (f.current.selectedSource = null, f.current.message = "Selection cleared.", k());
        return;
      }
      f.current.selectedSource = O, f.current.message = w.role === "clue" ? N.length > 1 ? `${w.label} stack selected. Move the full stack into an empty crown.` : `${w.label} clue selected. Drop it into an empty crown.` : N.length > 1 ? `${N.length} matching cards selected.` : `${L.label} selected.`, k();
    }
  }, sl = () => {
    f.current.movesLeft = Math.max(0, f.current.movesLeft - 1), ru(f.current);
  }, Xe = (O, N) => {
    const w = N ?? f.current.selectedSource;
    if (f.current.mode !== "playing" || !w) return;
    const L = Pt(f.current, w), Z = Tn(L), q = Be(L) ?? null;
    if (!Z || !q) return;
    if (Z.role === "clue") {
      Bl(O, w, L);
      return;
    }
    const Y = f.current.foundationOrder[O], K = Mt(I, Y);
    if (!Y || !K) {
      f.current.streak = 0, f.current.message = "That crown needs its clue card first.", k();
      return;
    }
    if (q.categoryId !== Y) {
      f.current.streak = 0, f.current.message = `${q.label} does not fit the ${K?.clueTitle ?? "selected"} clue.`, k();
      return;
    }
    const ee = Ni(I, f.current, w, L.length), Wl = f.current.foundations[Y].length;
    sa(f.current);
    const Ne = Ri(f.current, w, L.length);
    if (!Ne.length) return;
    f.current.foundations[Y].push(...Ne), f.current.selectedSource = null;
    const On = f.current.streak, et = Ne.reduce((jl, ol, ct) => jl + 100 + (On + ct) * 25, 0);
    f.current.score += et, f.current.streak += Ne.length, f.current.message = Ne.length > 1 ? `${Ne.length} matching cards sorted into the ${K?.clueTitle ?? "target"} crown.` : `${Ne[0].label} matched the ${K?.clueTitle ?? "target"} clue.`, Ne.forEach((jl, ol) => {
      const ct = gu(I, O, Wl + ol + 1);
      du(
        f.current,
        jl,
        ee[ol] ?? ee[ee.length - 1] ?? ct,
        ct,
        !0
      );
    });
    const qe = gu(I, O, Wl + Ne.length);
    co(f.current, qe.x + qe.w / 2, qe.y + 86, Ne[0].color), su(f.current, O, K?.color ?? "#ffe59b"), Ot(f.current, `+${et}`, qe.x + qe.w / 2, qe.y + 44, "#fff4bf", 0.24), f.current.foundations[Y].length === K.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${K.clueTitle} completed. Crown ${O + 1} opens again.`, Ot(f.current, "Set Clear", Le / 2, 316, "#ffe7aa", 0.34), su(f.current, O, K.color)), f.current.streak >= 2 && Ot(f.current, `Combo x${f.current.streak}`, Le / 2, 342, "#fff0b4", 0.3), sl(), k();
  }, Nl = (O, N) => {
    const w = N ?? f.current.selectedSource;
    if (!w || f.current.mode !== "playing") return;
    if (w.kind === "column" && w.index === O) {
      f.current.selectedSource = null, f.current.message = "Selection cleared.", k();
      return;
    }
    const L = Pt(f.current, w), Z = L[0] ?? null;
    if (!Z) return;
    if (!To(Z, f.current.columns[O], w)) {
      f.current.streak = 0, f.current.message = `${Z.label} cannot stack on column ${O + 1}.`, k();
      return;
    }
    const q = Ni(I, f.current, w, L.length);
    sa(f.current);
    const Y = Ri(f.current, w, L.length);
    if (!Y.length) return;
    f.current.columns[O].push(...Y), f.current.hiddenCounts[O] = Math.min(f.current.hiddenCounts[O] ?? 0, Math.max(0, f.current.columns[O].length - Y.length)), K0(f.current, O);
    const K = Km(I, f.current, O, Y.length);
    Y.forEach((ee, Wl) => du(f.current, ee, q[Wl] ?? q[q.length - 1], K[Wl] ?? K[K.length - 1], !1)), f.current.selectedSource = null, f.current.score += 15 * Y.length, f.current.streak = 0, f.current.message = Y.length > 1 ? `${Y.length} matching cards parked on column ${O + 1}.` : `${Y[0].label} parked on column ${O + 1}.`, Ot(f.current, Y.length > 1 ? `Stack x${Y.length}` : "+15", je(I).columns[O].x + je(I).columns[O].w / 2, je(I).columns[O].y + 18, "#dff7ff", Y.length > 1 ? 0.28 : 0.18), sl(), k();
  }, zl = () => {
    if (f.current.mode !== "playing") return;
    if (!Be(f.current.reserve)) {
      f.current.message = "Reserve pile is empty.", k();
      return;
    }
    sa(f.current);
    const O = f.current.reserve.pop();
    O && (f.current.waste.push(O), f.current.selectedSource = { kind: "waste" }, f.current.message = `Drew ${O.label}.`, sl(), k());
  }, ml = () => {
    f.current.message = Ym(f.current), k();
  }, C = () => {
    Gm(f.current) || (f.current.message = f.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), k();
  }, j = () => {
    const O = f.current.selectedSource;
    if (!O || f.current.mode !== "playing") return;
    if (f.current.boosters.joker <= 0) {
      f.current.message = "Joker spent.", k();
      return;
    }
    const N = Be(Pt(f.current, O)) ?? null;
    if (!N) return;
    if (N.role === "clue") {
      f.current.message = "Joker only sorts word cards.", k();
      return;
    }
    const w = qi(f.current, N.categoryId);
    if (w < 0) {
      f.current.message = "Place the matching clue card first.", k();
      return;
    }
    const L = Ni(I, f.current, O, 1)[0] ?? G0(I, f.current, w);
    sa(f.current);
    const Z = Ri(f.current, O, 1)[0];
    if (!Z) return;
    f.current.foundations[Z.categoryId].push(Z), f.current.selectedSource = null, f.current.boosters.joker -= 1, f.current.score += 80, f.current.message = `Joker matched ${Z.label} automatically.`;
    const q = G0(I, f.current, w);
    du(f.current, Z, L, q, !0), co(f.current, q.x + q.w / 2, q.y + 86, Z.color), su(f.current, w, I.categories.find((Y) => Y.id === Z.categoryId)?.color ?? "#ffe59b"), Ot(f.current, "Joker!", q.x + q.w / 2, q.y + 44, "#ffd7a8", 0.24), ru(f.current), k();
  }, F = () => {
    if (f.current.mode !== "playing") return;
    if (f.current.boosters.shuffle <= 0) {
      f.current.message = "Shuffle spent.", k();
      return;
    }
    const O = [...f.current.reserve, ...f.current.waste];
    if (!O.length) {
      f.current.message = "No reserve cards to reshuffle.", k();
      return;
    }
    sa(f.current), f.current.reserve = xo(O, 8564529 + f.current.movesLeft * 17 + f.current.score), f.current.waste = [], f.current.selectedSource = null, f.current.boosters.shuffle -= 1, f.current.message = "Reserve and waste reshuffled.", ru(f.current), k();
  }, ye = () => {
    const O = Math.max(0, f.current.score), N = f.current.levelIndex + 1;
    f.current = da(N, f.current.fullscreen, O), f.current.mode = "playing", f.current.message = N < ha.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", k();
  }, pe = async () => {
    const O = s.current;
    if (!(!O || typeof document > "u"))
      try {
        if (p.current === "immersive") {
          el("Exited mobile fullscreen.");
          return;
        }
        if (N0(document) === O) {
          await j0(document);
          return;
        }
        if (Lm(O)) {
          await Xm(O);
          return;
        }
        if (il()) {
          fe();
          return;
        }
        f.current.message = "Fullscreen is unavailable here.", k();
      } catch {
        if (il()) {
          fe();
          return;
        }
        f.current.message = "Fullscreen is unavailable here.", k();
      }
  }, g = (O, N) => {
    const w = v.current;
    if (!w) return;
    const L = Bi(w, O, N);
    if (!L) return;
    const { x: Z, y: q } = L, Y = Rl(f.current.levelIndex), K = je(Y);
    if (f.current.mode !== "playing") {
      f.current.mode === "won" ? ye() : We();
      return;
    }
    if (Ct(Z, q, K.reserve)) {
      zl();
      return;
    }
    if (Ct(Z, q, K.waste)) {
      cl({ kind: "waste" });
      return;
    }
    for (let ee = 0; ee < K.foundations.length; ee += 1)
      if (Ct(Z, q, K.foundations[ee])) {
        Xe(ee);
        return;
      }
    for (let ee = 0; ee < K.columns.length; ee += 1)
      if (Ct(Z, q, K.columns[ee])) {
        f.current.selectedSource ? Nl(ee) : cl({ kind: "column", index: ee });
        return;
      }
  }, U = (O) => {
    const N = v.current;
    if (!N || f.current.mode !== "playing") return;
    const w = Bi(N, O.clientX, O.clientY);
    if (!w) return;
    const L = Rl(f.current.levelIndex), Z = Qm(L, f.current, w.x, w.y);
    if (!Z) return;
    const q = Pt(f.current, Z);
    q.length && (R.current = { source: Z, cards: q, clueCategoryId: q[0]?.role === "clue" ? q[0].categoryId : null, x: w.x, y: w.y, startX: w.x, startY: w.y, moved: !1, dropTarget: null }, N.setPointerCapture(O.pointerId));
  }, G = (O) => {
    const N = v.current, w = R.current;
    if (!N || !w) return;
    const L = Bi(N, O.clientX, O.clientY);
    if (!L) return;
    w.x = L.x, w.y = L.y, w.moved = w.moved || Math.hypot(L.x - w.startX, L.y - w.startY) > 14;
    const Z = Rl(f.current.levelIndex);
    w.dropTarget = w.moved ? q0(Z, f.current, w.source, w.cards, L.x, L.y) : null;
  }, Q = (O) => {
    const N = v.current, w = R.current;
    if (!N || !w) {
      g(O.clientX, O.clientY);
      return;
    }
    const L = Bi(N, O.clientX, O.clientY);
    N.hasPointerCapture(O.pointerId) && N.releasePointerCapture(O.pointerId);
    const Z = Rl(f.current.levelIndex);
    if (L && (w.x = L.x, w.y = L.y, w.moved = w.moved || Math.hypot(L.x - w.startX, L.y - w.startY) > 14, w.dropTarget = w.moved ? q0(Z, f.current, w.source, w.cards, L.x, L.y) : null), R.current = null, !w.moved) {
      g(O.clientX, O.clientY);
      return;
    }
    if (w.dropTarget?.kind === "foundation") {
      Xe(w.dropTarget.index, w.source);
      return;
    }
    if (w.dropTarget?.kind === "column") {
      Nl(w.dropTarget.index, w.source);
      return;
    }
    f.current.selectedSource = w.source;
    const q = Tn(w.cards), Y = Be(w.cards);
    !q || !Y || (f.current.message = q.role === "clue" ? w.cards.length > 1 ? `${q.label} stack lifted. Drag the full stack into an empty crown.` : `${q.label} lifted. Drag it into an empty crown.` : w.cards.length > 1 ? `${w.cards.length} matching cards lifted. Drag them to a crown or column.` : `${Y.label} lifted. Drag it to a crown or column.`, k());
  }, ne = (O) => {
    const N = v.current;
    N && R.current && N.hasPointerCapture(O.pointerId) && N.releasePointerCapture(O.pointerId), R.current = null;
  };
  yl.useEffect(() => {
    const O = v.current, N = O?.getContext("2d");
    if (!O || !N) return;
    let w = null;
    const L = window, Z = (Y = !0) => {
      Im(N, f.current, R.current), Fm(N, f.current), Y && k();
    }, q = (Y) => {
      const K = w === null ? 0 : Math.min(50, Y - w);
      w = Y, L0(f.current, K), Z(!1), x.current = window.requestAnimationFrame(q);
    };
    return L.render_game_to_text = () => {
      const Y = JSON.parse(Jm(f.current));
      return Y.fullscreenMode = p.current, Y.viewport = bn(), JSON.stringify(Y);
    }, L.advanceTime = (Y) => {
      let K = Y;
      for (; K > 0; ) {
        const ee = Math.min(K, 16);
        L0(f.current, ee), K -= ee;
      }
      Z();
    }, L.__drainVirtualTimePending = () => 0, L.__wordsort_debug_set_moves = (Y) => {
      f.current.movesLeft = Math.max(0, Math.floor(Y)), ru(f.current), Z();
    }, L.__wordsort_debug_set_level = (Y) => {
      const K = Math.max(0, Math.floor(Y)), ee = da(K, f.current.fullscreen, 0);
      ee.mode = "playing", ee.message = K < ha.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", f.current = ee, Z();
    }, L.__wordsort_debug_prime_foundation_stack = () => {
      const Y = Rl(f.current.levelIndex).categories[0];
      if (!Y) return;
      const K = da(f.current.levelIndex, f.current.fullscreen, 0);
      K.mode = "playing", K.foundationOrder[0] = Y.id, K.foundations[Y.id] = [], K.columns[0] = Y.words.slice(0, 3).map((ee) => oo(Y, ee)), K.hiddenCounts[0] = 0, K.movesLeft = Math.max(K.movesLeft, 12), K.message = "Debug: foundation stack primed.", f.current = K, Z();
    }, L.__wordsort_debug_complete_round = () => {
      const Y = Rl(f.current.levelIndex), K = da(f.current.levelIndex, f.current.fullscreen, f.current.score);
      K.mode = "playing", Y.categories.forEach((ee) => {
        K.foundations[ee.id] = ee.words.map((Wl) => oo(ee, Wl));
      }), K.score = Math.max(f.current.score, 1e3), ru(K), f.current = K, Z();
    }, Z(), x.current = window.requestAnimationFrame(q), () => {
      x.current != null && window.cancelAnimationFrame(x.current), delete L.render_game_to_text, delete L.advanceTime, delete L.__drainVirtualTimePending, delete L.__wordsort_debug_set_moves, delete L.__wordsort_debug_set_level, delete L.__wordsort_debug_prime_foundation_stack, delete L.__wordsort_debug_complete_round;
    };
  }, []), yl.useEffect(() => {
    const O = () => le(bn());
    return O(), window.addEventListener("resize", O), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O), () => {
      window.removeEventListener("resize", O), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
    };
  }, []), yl.useEffect(() => () => {
    Fe(!1);
  }, []), yl.useEffect(() => {
    const O = ["j", "k", "l", "m", "p"], N = ["a", "s", "d", "g", "v"], w = () => {
      N0(document) === s.current ? Se("native") : p.current === "native" && Se("off"), le(bn()), k();
    }, L = (Z) => {
      const q = Z.key.toLowerCase();
      if (q === "enter" && f.current.mode === "won") {
        Z.preventDefault(), ye();
        return;
      }
      if (q === "escape" && p.current === "native") {
        Z.preventDefault(), j0(document);
        return;
      }
      q === "f" && (Z.preventDefault(), pe()), q === "escape" && p.current === "immersive" && (Z.preventDefault(), el("Exited mobile fullscreen.")), q === "n" && (Z.preventDefault(), zl()), q === "h" && (Z.preventDefault(), ml()), q === "u" && (Z.preventDefault(), C()), q === "x" && (Z.preventDefault(), j()), q === "z" && (Z.preventDefault(), F()), q === "enter" && f.current.mode !== "playing" && (Z.preventDefault(), We());
      const Y = N.indexOf(q);
      if (Y >= 0) {
        Z.preventDefault();
        const ee = { kind: "column", index: Y };
        f.current.selectedSource?.kind === "column" && f.current.selectedSource.index === Y ? cl(ee) : f.current.selectedSource ? Nl(Y) : cl(ee);
      }
      q === "q" && (Z.preventDefault(), f.current.selectedSource?.kind === "waste" ? cl({ kind: "waste" }) : cl({ kind: "waste" }));
      const K = O.indexOf(q);
      K >= 0 && (Z.preventDefault(), Xe(K));
    };
    return document.addEventListener("fullscreenchange", w), document.addEventListener("webkitfullscreenchange", w), window.addEventListener("keydown", L), () => {
      document.removeEventListener("fullscreenchange", w), document.removeEventListener("webkitfullscreenchange", w), window.removeEventListener("keydown", L);
    };
  }, []);
  const te = ce === "immersive", V = !S.fullscreen && B.width < 560, Ue = S.fullscreen && B.width < 820, Te = S.fullscreen && (B.width < 1140 || B.height < 760), Ae = S.fullscreen || V, An = S.fullscreen ? Ue ? "calc(env(safe-area-inset-top, 0px) + 8px) calc(env(safe-area-inset-right, 0px) + 8px) calc(env(safe-area-inset-bottom, 0px) + 12px) calc(env(safe-area-inset-left, 0px) + 8px)" : Te ? "10px 10px 14px" : "14px 14px 16px" : r ? V ? "10px" : "18px" : V ? "12px 10px 14px" : 20, xn = S.fullscreen ? Ue ? Math.min(430, Math.max(300, B.width - 18)) : Math.min(Te ? 760 : 860, Math.max(320, B.width - (Te ? 28 : 48))) : V ? Math.min(420, Math.max(300, B.width - 28)) : 820, bu = "Find a gold clue, give it an open crown, then add all six words that belong with it. Clear every category before your moves run out.", it = S.fullscreen ? Ue ? 78 : Te ? 92 : 104 : V ? 72 : 108, en = S.fullscreen ? Ue ? 96 : Te ? 120 : 136 : V ? 108 : 160, dl = Ae ? "9px 12px" : r ? "10px 14px" : "11px 16px", El = Ae ? 12 : r ? 13 : 14;
  !r && S.fullscreen;
  const pu = S.fullscreen ? "Exit Fullscreen" : Ue || il() ? "Go Fullscreen" : "Fullscreen", ya = (O, N) => {
    const w = Mt(I, O);
    return w ? Ae ? `${w.clueIcon} ${pn(w.clueTitle, V ? 8 : 10)}` : `${w.clueIcon} ${w.clueTitle}` : `Empty ${N + 1}`;
  };
  `${it}`, S.fullscreen, [["Level", I.name], ["Moves Left", String(S.movesLeft)], ["Score", String(S.score)], ["Best", String(S.bestScore)], ["Streak", String(S.streak)], ["Cleared", `${De}/${I.categories.length}`]].map(([O, N]) => {
    const w = O === "Level";
    return /* @__PURE__ */ W.jsxs("div", { style: { minWidth: 0, padding: Ae ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: Ae && w ? Te || V ? "1 / -1" : "span 2" : void 0 }, children: [
      /* @__PURE__ */ W.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
      /* @__PURE__ */ W.jsx("div", { style: { fontSize: Ae ? w ? 17 : 18 : 24, fontWeight: 800, wordBreak: w ? "normal" : "break-word", whiteSpace: w ? "nowrap" : "normal", overflow: w ? "hidden" : "visible", textOverflow: w ? "ellipsis" : "clip" }, children: w && Ae ? pn(N, V ? 20 : Te ? 24 : 30) : N })
    ] }, O);
  }), po(S).filter(({ card: O }) => O.role === "clue").length, [["Undo", String(S.boosters.undo)], ["Joker", String(S.boosters.joker)], ["Shuffle", String(S.boosters.shuffle)]].map(([O, N]) => /* @__PURE__ */ W.jsxs("div", { style: { minWidth: 0, padding: Ae ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
    /* @__PURE__ */ W.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
    /* @__PURE__ */ W.jsx("div", { style: { fontSize: Ae ? 18 : 24, fontWeight: 800 }, children: N })
  ] }, O)), S.foundationOrder.map((O, N) => /* @__PURE__ */ W.jsx("div", { style: { padding: Ae ? "5px 8px" : "6px 10px", borderRadius: 999, background: O ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: Ae ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: ya(O, N) }, `crown-status-${N}`)), S.message;
  const ma = /* @__PURE__ */ W.jsx("div", { style: { width: xn, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Le} / ${kl}` }, children: /* @__PURE__ */ W.jsx("canvas", { ref: v, width: Le, height: kl, tabIndex: 0, role: "application", "aria-label": "Word Sort play area. Select or drag cards to matching columns and category crowns.", style: { width: "100%", height: "100%", display: "block", borderRadius: S.fullscreen ? 22 : 24, boxShadow: "0 22px 44px rgba(3,20,27,0.26)", background: "#123f40", cursor: R.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: U, onPointerMove: G, onPointerUp: Q, onPointerCancel: ne }) });
  `${en}`, S.columns.map((O, N) => /* @__PURE__ */ W.jsx("button", { id: `wordsort-source-col-${N + 1}`, onClick: () => S.selectedSource ? Nl(N) : cl({ kind: "column", index: N }), style: { ...Pl(ut(S.selectedSource) === `column-${N}`), fontSize: El, padding: dl }, children: ut(S.selectedSource) === `column-${N}` ? `Selected: ${pn(Be(O)?.label ?? "Empty", Ae ? 12 : 18)}` : `${V ? "C" : "Column"} ${N + 1}: ${pn(Be(O)?.label ?? "Empty", Ae ? 12 : 18)}` }, N)), { ...Pl(ut(S.selectedSource) === "waste") }, ut(S.selectedSource) === "waste" ? `${pn(Be(S.waste)?.label ?? "Empty", Ae ? 12 : 18)}` : `${pn(Be(S.waste)?.label ?? "Empty", Ae ? 12 : 18)}`, `${en}`, S.foundationOrder.map((O, N) => {
    const w = Mt(I, O);
    return /* @__PURE__ */ W.jsx("button", { id: `wordsort-foundation-${N + 1}`, onClick: () => Xe(N), style: { ...Pl(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: El, padding: dl }, children: w ? `${w.clueIcon} ${pn(w.clueTitle, Ae ? 9 : 16)} ${S.foundations[w.id].length}/${w.words.length}` : Ae ? `Empty ${N + 1}` : `Empty Crown ${N + 1}` }, N);
  }), `${en}`, { ...Pl(!1) }, `${S.boosters.undo}`, { ...Pl(!1) }, `${S.boosters.joker}`, { ...Pl(!1) }, `${S.boosters.shuffle}`;
  const gl = S.mode === "playing", Tu = S.history.length > 0 && S.boosters.undo > 0, ga = gl && S.reserve.length > 0, fl = gl && S.boosters.shuffle > 0 && S.reserve.length + S.waste.length > 0, Li = I.categories.length ? Math.round(De / I.categories.length * 100) : 0, zn = { color: S.fullscreen ? "#eff9f4" : "#194f61", background: S.fullscreen ? "rgba(255,255,255,0.1)" : "rgba(25,79,97,0.08)", boxShadow: S.fullscreen ? "inset 0 0 0 1px rgba(255,255,255,0.14)" : "inset 0 0 0 1px rgba(25,79,97,0.16)" }, En = (O) => ({ ...Pl(!1), ...zn, padding: dl, fontSize: El, opacity: O ? 1 : 0.42, cursor: O ? "pointer" : "not-allowed" });
  return /* @__PURE__ */ W.jsx("div", { style: { minHeight: te ? "100dvh" : "100%", display: "flex", justifyContent: "center", padding: S.fullscreen ? 0 : r ? V ? "4px 0 10px" : "8px 0 18px" : "24px 12px 48px", background: S.fullscreen ? "#08262d" : "transparent", position: te ? "fixed" : "relative", inset: te ? 0 : void 0, zIndex: te ? 9999 : void 0, overflow: te ? "hidden" : "visible" }, children: /* @__PURE__ */ W.jsxs("section", { ref: s, style: { width: "100%", maxWidth: S.fullscreen ? "100vw" : 1080, minHeight: S.fullscreen ? te ? "100dvh" : "100vh" : void 0, height: te ? "100dvh" : void 0, boxSizing: "border-box", borderRadius: S.fullscreen ? 0 : r ? 24 : 28, padding: An, background: S.fullscreen ? "#0b3036" : "linear-gradient(145deg, #fffdf8 0%, #f1e9dc 100%)", boxShadow: S.fullscreen ? "none" : "0 22px 54px rgba(16,43,54,0.15)", display: "flex", flexDirection: "column", gap: Ue ? 10 : S.fullscreen || r ? 14 : 16, color: S.fullscreen ? "#eff9f4" : "#102b36", overflowX: "hidden", overflowY: S.fullscreen ? "auto" : "hidden", WebkitOverflowScrolling: "touch", overscrollBehavior: S.fullscreen ? "contain" : "auto" }, children: [
    /* @__PURE__ */ W.jsxs("header", { style: { display: "grid", gridTemplateColumns: V || Ue ? "1fr" : "minmax(0, 1fr) auto", gap: V ? 12 : 20, alignItems: "end" }, children: [
      /* @__PURE__ */ W.jsxs("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ W.jsx("div", { style: { color: S.fullscreen ? "#f6cb72" : "#9a462a", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }, children: "Association solitaire" }),
        /* @__PURE__ */ W.jsx("h1", { style: { margin: 0, fontFamily: 'Georgia, "Palatino Linotype", serif', fontSize: S.fullscreen ? Ue ? 26 : 32 : V ? 30 : 42, lineHeight: 1, letterSpacing: "-0.035em", color: "inherit" }, children: "Word Sort" }),
        /* @__PURE__ */ W.jsx("p", { style: { margin: "9px 0 0", maxWidth: 670, color: S.fullscreen ? "rgba(239,249,244,0.78)" : "#4c636a", fontSize: V ? 12 : 14, lineHeight: 1.5 }, children: bu })
      ] }),
      /* @__PURE__ */ W.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, minmax(68px, 1fr))", gap: 7, minWidth: V ? 0 : 270 }, children: [
        [["Moves", S.movesLeft], ["Sets", `${De}/${I.categories.length}`], ["Score", S.score]].map(([O, N]) => /* @__PURE__ */ W.jsxs("div", { style: { padding: V ? "8px 9px" : "10px 12px", borderRadius: 14, background: S.fullscreen ? "rgba(255,255,255,0.09)" : "rgba(16,79,97,0.07)", border: S.fullscreen ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(16,43,54,0.1)" }, children: [
          /* @__PURE__ */ W.jsx("div", { style: { fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.62 }, children: O }),
          /* @__PURE__ */ W.jsx("div", { style: { marginTop: 2, fontSize: V ? 18 : 22, fontWeight: 800, color: O === "Moves" && S.movesLeft <= 10 ? "#c65332" : "inherit" }, children: N })
        ] }, O)),
        /* @__PURE__ */ W.jsx("div", { style: { gridColumn: "1 / -1", height: 5, overflow: "hidden", borderRadius: 999, background: S.fullscreen ? "rgba(255,255,255,0.1)" : "rgba(16,43,54,0.1)" }, children: /* @__PURE__ */ W.jsx("div", { style: { width: `${Li}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #c55a32, #e7ae61)", transition: "width 240ms ease" } }) })
      ] })
    ] }),
    !S.fullscreen && /* @__PURE__ */ W.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: V ? 6 : 8 }, children: [["1", "Find a gold clue"], ["2", "Claim an open crown"], ["3", "Match all six words"]].map(([O, N]) => /* @__PURE__ */ W.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: V ? "center" : "flex-start", gap: 7, minWidth: 0, padding: V ? "8px 5px" : "9px 12px", borderRadius: 13, background: "rgba(197,90,50,0.07)", color: "#65473b", fontSize: V ? 10 : 12, fontWeight: 800, textAlign: V ? "center" : "left" }, children: [
      /* @__PURE__ */ W.jsx("span", { style: { flex: "0 0 auto", display: "grid", placeItems: "center", width: 20, height: 20, borderRadius: 999, background: "#c55a32", color: "#fff", fontSize: 10 }, children: O }),
      /* @__PURE__ */ W.jsx("span", { children: N })
    ] }, O)) }),
    ma,
    /* @__PURE__ */ W.jsxs("div", { style: { display: "grid", gap: 10, width: xn, maxWidth: "100%", alignSelf: "center" }, children: [
      /* @__PURE__ */ W.jsxs("div", { role: "status", "aria-live": "polite", style: { display: "flex", alignItems: "center", gap: 9, minHeight: 40, padding: "9px 12px", borderRadius: 13, background: S.fullscreen ? "rgba(255,255,255,0.08)" : "rgba(25,79,97,0.07)", color: S.fullscreen ? "#eff9f4" : "#284a55", fontSize: V ? 12 : 13, fontWeight: 700 }, children: [
        /* @__PURE__ */ W.jsx("span", { "aria-hidden": "true", style: { color: "#c55a32", fontSize: 16 }, children: "●" }),
        /* @__PURE__ */ W.jsx("span", { children: S.message })
      ] }),
      /* @__PURE__ */ W.jsxs("div", { style: { display: "grid", gridTemplateColumns: gl ? V ? "repeat(3, 1fr)" : "minmax(128px, 1.35fr) repeat(5, minmax(88px, 1fr))" : V ? "2fr 1fr" : "minmax(180px, 1fr) 120px", gap: 7 }, children: [
        S.mode !== "playing" ? /* @__PURE__ */ W.jsx("button", { id: "wordsort-start", onClick: () => S.mode === "won" ? ye() : We(), style: { ...Pl(!0), padding: dl, fontSize: El }, children: S.mode === "won" ? "Next Deal" : "Start Sorting" }) : /* @__PURE__ */ W.jsx("button", { id: "wordsort-draw", onClick: zl, disabled: !ga, style: { ...Pl(!0), padding: dl, fontSize: El, opacity: ga ? 1 : 0.45, cursor: ga ? "pointer" : "not-allowed", gridColumn: V ? "span 2" : void 0 }, children: S.reserve.length ? `Draw (${S.reserve.length})` : "Pile Empty" }),
        /* @__PURE__ */ W.jsx("button", { id: "wordsort-hint", onClick: ml, disabled: !gl, style: { ...En(gl), display: gl ? "block" : "none" }, children: "Hint" }),
        /* @__PURE__ */ W.jsx("button", { id: "wordsort-undo", onClick: C, disabled: !Tu, style: { ...En(Tu), display: gl ? "block" : "none" }, children: `Undo ${S.boosters.undo}` }),
        /* @__PURE__ */ W.jsx("button", { id: "wordsort-shuffle", onClick: F, disabled: !fl, style: { ...En(fl), display: gl ? "block" : "none" }, children: `Shuffle ${S.boosters.shuffle}` }),
        /* @__PURE__ */ W.jsx("button", { id: "wordsort-new", onClick: () => We(), style: { ...Pl(!1), ...zn, padding: dl, fontSize: El, display: gl ? "block" : "none" }, children: "New Deal" }),
        /* @__PURE__ */ W.jsx("button", { id: "wordsort-fullscreen", onClick: () => {
          pe();
        }, style: { ...Pl(!1), ...zn, padding: dl, fontSize: El, gridColumn: gl && V ? "1 / -1" : void 0 }, children: pu })
      ] }),
      /* @__PURE__ */ W.jsx("p", { style: { margin: 0, textAlign: "center", color: S.fullscreen ? "rgba(239,249,244,0.62)" : "#687b80", fontSize: V ? 10 : 11, lineHeight: 1.4 }, children: "Tap a card, then tap its destination. Drag and drop works too. Press F for fullscreen." })
    ] })
  ] }) });
}
const J0 = document.getElementById("word-sort-root");
if (!J0)
  throw new Error("Word Sort export root element was not found.");
document.title = "Word Sort Solitaire | Ethan Mayer";
document.documentElement.style.colorScheme = "light";
document.body.classList.add("word-sort-export-body");
gm.createRoot(J0).render(/* @__PURE__ */ W.jsx(Pm, { presentation: "export" }));
