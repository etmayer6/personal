var zo = { exports: {} }, Ru = {};
var T0;
function i2() {
  if (T0) return Ru;
  T0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(o, s, E) {
    var v = null;
    if (E !== void 0 && (v = "" + E), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      E = {};
      for (var N in s)
        N !== "key" && (E[N] = s[N]);
    } else E = s;
    return s = E.ref, {
      $$typeof: c,
      type: o,
      key: v,
      ref: s !== void 0 ? s : null,
      props: E
    };
  }
  return Ru.Fragment = r, Ru.jsx = d, Ru.jsxs = d, Ru;
}
var E0;
function c2() {
  return E0 || (E0 = 1, zo.exports = i2()), zo.exports;
}
var m = c2(), Ao = { exports: {} }, _u = {}, To = { exports: {} }, Eo = {};
var R0;
function f2() {
  return R0 || (R0 = 1, (function(c) {
    function r(j, L) {
      var k = j.length;
      j.push(L);
      t: for (; 0 < k; ) {
        var O = k - 1 >>> 1, V = j[O];
        if (0 < s(V, L))
          j[O] = L, j[k] = V, k = O;
        else break t;
      }
    }
    function d(j) {
      return j.length === 0 ? null : j[0];
    }
    function o(j) {
      if (j.length === 0) return null;
      var L = j[0], k = j.pop();
      if (k !== L) {
        j[0] = k;
        t: for (var O = 0, V = j.length, p = V >>> 1; O < p; ) {
          var _ = 2 * (O + 1) - 1, Y = j[_], G = _ + 1, P = j[G];
          if (0 > s(Y, k))
            G < V && 0 > s(P, Y) ? (j[O] = P, j[G] = k, O = G) : (j[O] = Y, j[_] = k, O = _);
          else if (G < V && 0 > s(P, k))
            j[O] = P, j[G] = k, O = G;
          else break t;
        }
      }
      return L;
    }
    function s(j, L) {
      var k = j.sortIndex - L.sortIndex;
      return k !== 0 ? k : j.id - L.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      c.unstable_now = function() {
        return E.now();
      };
    } else {
      var v = Date, N = v.now();
      c.unstable_now = function() {
        return v.now() - N;
      };
    }
    var z = [], A = [], B = 1, q = null, w = 3, J = !1, it = !1, ot = !1, vt = !1, yt = typeof setTimeout == "function" ? setTimeout : null, Et = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    function at(j) {
      for (var L = d(A); L !== null; ) {
        if (L.callback === null) o(A);
        else if (L.startTime <= j)
          o(A), L.sortIndex = L.expirationTime, r(z, L);
        else break;
        L = d(A);
      }
    }
    function X(j) {
      if (ot = !1, at(j), !it)
        if (d(z) !== null)
          it = !0, et || (et = !0, Wt());
        else {
          var L = d(A);
          L !== null && ul(X, L.startTime - j);
        }
    }
    var et = !1, I = -1, Nt = 5, qt = -1;
    function el() {
      return vt ? !0 : !(c.unstable_now() - qt < Nt);
    }
    function bl() {
      if (vt = !1, et) {
        var j = c.unstable_now();
        qt = j;
        var L = !0;
        try {
          t: {
            it = !1, ot && (ot = !1, Et(I), I = -1), J = !0;
            var k = w;
            try {
              l: {
                for (at(j), q = d(z); q !== null && !(q.expirationTime > j && el()); ) {
                  var O = q.callback;
                  if (typeof O == "function") {
                    q.callback = null, w = q.priorityLevel;
                    var V = O(
                      q.expirationTime <= j
                    );
                    if (j = c.unstable_now(), typeof V == "function") {
                      q.callback = V, at(j), L = !0;
                      break l;
                    }
                    q === d(z) && o(z), at(j);
                  } else o(z);
                  q = d(z);
                }
                if (q !== null) L = !0;
                else {
                  var p = d(A);
                  p !== null && ul(
                    X,
                    p.startTime - j
                  ), L = !1;
                }
              }
              break t;
            } finally {
              q = null, w = k, J = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Wt() : et = !1;
        }
      }
    }
    var Wt;
    if (typeof lt == "function")
      Wt = function() {
        lt(bl);
      };
    else if (typeof MessageChannel < "u") {
      var Yl = new MessageChannel(), xl = Yl.port2;
      Yl.port1.onmessage = bl, Wt = function() {
        xl.postMessage(null);
      };
    } else
      Wt = function() {
        yt(bl, 0);
      };
    function ul(j, L) {
      I = yt(function() {
        j(c.unstable_now());
      }, L);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, c.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Nt = 0 < j ? Math.floor(1e3 / j) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, c.unstable_next = function(j) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = w;
      }
      var k = w;
      w = L;
      try {
        return j();
      } finally {
        w = k;
      }
    }, c.unstable_requestPaint = function() {
      vt = !0;
    }, c.unstable_runWithPriority = function(j, L) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var k = w;
      w = j;
      try {
        return L();
      } finally {
        w = k;
      }
    }, c.unstable_scheduleCallback = function(j, L, k) {
      var O = c.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? O + k : O) : k = O, j) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = k + V, j = {
        id: B++,
        callback: L,
        priorityLevel: j,
        startTime: k,
        expirationTime: V,
        sortIndex: -1
      }, k > O ? (j.sortIndex = k, r(A, j), d(z) === null && j === d(A) && (ot ? (Et(I), I = -1) : ot = !0, ul(X, k - O))) : (j.sortIndex = V, r(z, j), it || J || (it = !0, et || (et = !0, Wt()))), j;
    }, c.unstable_shouldYield = el, c.unstable_wrapCallback = function(j) {
      var L = w;
      return function() {
        var k = w;
        w = L;
        try {
          return j.apply(this, arguments);
        } finally {
          w = k;
        }
      };
    };
  })(Eo)), Eo;
}
var _0;
function o2() {
  return _0 || (_0 = 1, To.exports = f2()), To.exports;
}
var Ro = { exports: {} }, ut = {};
var D0;
function r2() {
  if (D0) return ut;
  D0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function J(p) {
    return p === null || typeof p != "object" ? null : (p = w && p[w] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var it = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ot = Object.assign, vt = {};
  function yt(p, _, Y) {
    this.props = p, this.context = _, this.refs = vt, this.updater = Y || it;
  }
  yt.prototype.isReactComponent = {}, yt.prototype.setState = function(p, _) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, _, "setState");
  }, yt.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function Et() {
  }
  Et.prototype = yt.prototype;
  function lt(p, _, Y) {
    this.props = p, this.context = _, this.refs = vt, this.updater = Y || it;
  }
  var at = lt.prototype = new Et();
  at.constructor = lt, ot(at, yt.prototype), at.isPureReactComponent = !0;
  var X = Array.isArray;
  function et() {
  }
  var I = { H: null, A: null, T: null, S: null }, Nt = Object.prototype.hasOwnProperty;
  function qt(p, _, Y) {
    var G = Y.ref;
    return {
      $$typeof: c,
      type: p,
      key: _,
      ref: G !== void 0 ? G : null,
      props: Y
    };
  }
  function el(p, _) {
    return qt(p.type, _, p.props);
  }
  function bl(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function Wt(p) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(Y) {
      return _[Y];
    });
  }
  var Yl = /\/+/g;
  function xl(p, _) {
    return typeof p == "object" && p !== null && p.key != null ? Wt("" + p.key) : _.toString(36);
  }
  function ul(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(et, et) : (p.status = "pending", p.then(
          function(_) {
            p.status === "pending" && (p.status = "fulfilled", p.value = _);
          },
          function(_) {
            p.status === "pending" && (p.status = "rejected", p.reason = _);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function j(p, _, Y, G, P) {
    var nt = typeof p;
    (nt === "undefined" || nt === "boolean") && (p = null);
    var rt = !1;
    if (p === null) rt = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case r:
              rt = !0;
              break;
            case B:
              return rt = p._init, j(
                rt(p._payload),
                _,
                Y,
                G,
                P
              );
          }
      }
    if (rt)
      return P = P(p), rt = G === "" ? "." + xl(p, 0) : G, X(P) ? (Y = "", rt != null && (Y = rt.replace(Yl, "$&/") + "/"), j(P, _, Y, "", function(ae) {
        return ae;
      })) : P != null && (bl(P) && (P = el(
        P,
        Y + (P.key == null || p && p.key === P.key ? "" : ("" + P.key).replace(
          Yl,
          "$&/"
        ) + "/") + rt
      )), _.push(P)), 1;
    rt = 0;
    var Dt = G === "" ? "." : G + ":";
    if (X(p))
      for (var Ht = 0; Ht < p.length; Ht++)
        G = p[Ht], nt = Dt + xl(G, Ht), rt += j(
          G,
          _,
          Y,
          nt,
          P
        );
    else if (Ht = J(p), typeof Ht == "function")
      for (p = Ht.call(p), Ht = 0; !(G = p.next()).done; )
        G = G.value, nt = Dt + xl(G, Ht++), rt += j(
          G,
          _,
          Y,
          nt,
          P
        );
    else if (nt === "object") {
      if (typeof p.then == "function")
        return j(
          ul(p),
          _,
          Y,
          G,
          P
        );
      throw _ = String(p), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function L(p, _, Y) {
    if (p == null) return p;
    var G = [], P = 0;
    return j(p, G, "", "", function(nt) {
      return _.call(Y, nt, P++);
    }), G;
  }
  function k(p) {
    if (p._status === -1) {
      var _ = p._result;
      _ = _(), _.then(
        function(Y) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = Y);
        },
        function(Y) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = Y);
        }
      ), p._status === -1 && (p._status = 0, p._result = _);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var O = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, V = {
    map: L,
    forEach: function(p, _, Y) {
      L(
        p,
        function() {
          _.apply(this, arguments);
        },
        Y
      );
    },
    count: function(p) {
      var _ = 0;
      return L(p, function() {
        _++;
      }), _;
    },
    toArray: function(p) {
      return L(p, function(_) {
        return _;
      }) || [];
    },
    only: function(p) {
      if (!bl(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return ut.Activity = q, ut.Children = V, ut.Component = yt, ut.Fragment = d, ut.Profiler = s, ut.PureComponent = lt, ut.StrictMode = o, ut.Suspense = z, ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ut.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return I.H.useMemoCache(p);
    }
  }, ut.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, ut.cacheSignal = function() {
    return null;
  }, ut.cloneElement = function(p, _, Y) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var G = ot({}, p.props), P = p.key;
    if (_ != null)
      for (nt in _.key !== void 0 && (P = "" + _.key), _)
        !Nt.call(_, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && _.ref === void 0 || (G[nt] = _[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) G.children = Y;
    else if (1 < nt) {
      for (var rt = Array(nt), Dt = 0; Dt < nt; Dt++)
        rt[Dt] = arguments[Dt + 2];
      G.children = rt;
    }
    return qt(p.type, P, G);
  }, ut.createContext = function(p) {
    return p = {
      $$typeof: v,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: E,
      _context: p
    }, p;
  }, ut.createElement = function(p, _, Y) {
    var G, P = {}, nt = null;
    if (_ != null)
      for (G in _.key !== void 0 && (nt = "" + _.key), _)
        Nt.call(_, G) && G !== "key" && G !== "__self" && G !== "__source" && (P[G] = _[G]);
    var rt = arguments.length - 2;
    if (rt === 1) P.children = Y;
    else if (1 < rt) {
      for (var Dt = Array(rt), Ht = 0; Ht < rt; Ht++)
        Dt[Ht] = arguments[Ht + 2];
      P.children = Dt;
    }
    if (p && p.defaultProps)
      for (G in rt = p.defaultProps, rt)
        P[G] === void 0 && (P[G] = rt[G]);
    return qt(p, nt, P);
  }, ut.createRef = function() {
    return { current: null };
  }, ut.forwardRef = function(p) {
    return { $$typeof: N, render: p };
  }, ut.isValidElement = bl, ut.lazy = function(p) {
    return {
      $$typeof: B,
      _payload: { _status: -1, _result: p },
      _init: k
    };
  }, ut.memo = function(p, _) {
    return {
      $$typeof: A,
      type: p,
      compare: _ === void 0 ? null : _
    };
  }, ut.startTransition = function(p) {
    var _ = I.T, Y = {};
    I.T = Y;
    try {
      var G = p(), P = I.S;
      P !== null && P(Y, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(et, O);
    } catch (nt) {
      O(nt);
    } finally {
      _ !== null && Y.types !== null && (_.types = Y.types), I.T = _;
    }
  }, ut.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ut.use = function(p) {
    return I.H.use(p);
  }, ut.useActionState = function(p, _, Y) {
    return I.H.useActionState(p, _, Y);
  }, ut.useCallback = function(p, _) {
    return I.H.useCallback(p, _);
  }, ut.useContext = function(p) {
    return I.H.useContext(p);
  }, ut.useDebugValue = function() {
  }, ut.useDeferredValue = function(p, _) {
    return I.H.useDeferredValue(p, _);
  }, ut.useEffect = function(p, _) {
    return I.H.useEffect(p, _);
  }, ut.useEffectEvent = function(p) {
    return I.H.useEffectEvent(p);
  }, ut.useId = function() {
    return I.H.useId();
  }, ut.useImperativeHandle = function(p, _, Y) {
    return I.H.useImperativeHandle(p, _, Y);
  }, ut.useInsertionEffect = function(p, _) {
    return I.H.useInsertionEffect(p, _);
  }, ut.useLayoutEffect = function(p, _) {
    return I.H.useLayoutEffect(p, _);
  }, ut.useMemo = function(p, _) {
    return I.H.useMemo(p, _);
  }, ut.useOptimistic = function(p, _) {
    return I.H.useOptimistic(p, _);
  }, ut.useReducer = function(p, _, Y) {
    return I.H.useReducer(p, _, Y);
  }, ut.useRef = function(p) {
    return I.H.useRef(p);
  }, ut.useState = function(p) {
    return I.H.useState(p);
  }, ut.useSyncExternalStore = function(p, _, Y) {
    return I.H.useSyncExternalStore(
      p,
      _,
      Y
    );
  }, ut.useTransition = function() {
    return I.H.useTransition();
  }, ut.version = "19.2.4", ut;
}
var O0;
function Yo() {
  return O0 || (O0 = 1, Ro.exports = r2()), Ro.exports;
}
var _o = { exports: {} }, vl = {};
var j0;
function s2() {
  if (j0) return vl;
  j0 = 1;
  var c = Yo();
  function r(z) {
    var A = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        A += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + z + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var o = {
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
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function E(z, A, B) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: q == null ? null : "" + q,
      children: z,
      containerInfo: A,
      implementation: B
    };
  }
  var v = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(z, A) {
    if (z === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, vl.createPortal = function(z, A) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(r(299));
    return E(z, A, null, B);
  }, vl.flushSync = function(z) {
    var A = v.T, B = o.p;
    try {
      if (v.T = null, o.p = 2, z) return z();
    } finally {
      v.T = A, o.p = B, o.d.f();
    }
  }, vl.preconnect = function(z, A) {
    typeof z == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(z, A));
  }, vl.prefetchDNS = function(z) {
    typeof z == "string" && o.d.D(z);
  }, vl.preinit = function(z, A) {
    if (typeof z == "string" && A && typeof A.as == "string") {
      var B = A.as, q = N(B, A.crossOrigin), w = typeof A.integrity == "string" ? A.integrity : void 0, J = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      B === "style" ? o.d.S(
        z,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: q,
          integrity: w,
          fetchPriority: J
        }
      ) : B === "script" && o.d.X(z, {
        crossOrigin: q,
        integrity: w,
        fetchPriority: J,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, vl.preinitModule = function(z, A) {
    if (typeof z == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var B = N(
            A.as,
            A.crossOrigin
          );
          o.d.M(z, {
            crossOrigin: B,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && o.d.M(z);
  }, vl.preload = function(z, A) {
    if (typeof z == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var B = A.as, q = N(B, A.crossOrigin);
      o.d.L(z, B, {
        crossOrigin: q,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, vl.preloadModule = function(z, A) {
    if (typeof z == "string")
      if (A) {
        var B = N(A.as, A.crossOrigin);
        o.d.m(z, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: B,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else o.d.m(z);
  }, vl.requestFormReset = function(z) {
    o.d.r(z);
  }, vl.unstable_batchedUpdates = function(z, A) {
    return z(A);
  }, vl.useFormState = function(z, A, B) {
    return v.H.useFormState(z, A, B);
  }, vl.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, vl.version = "19.2.4", vl;
}
var U0;
function d2() {
  if (U0) return _o.exports;
  U0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), _o.exports = s2(), _o.exports;
}
var C0;
function h2() {
  if (C0) return _u;
  C0 = 1;
  var c = o2(), r = Yo(), d = d2();
  function o(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function E(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function v(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function z(t) {
    if (E(t) !== t)
      throw Error(o(188));
  }
  function A(t) {
    var l = t.alternate;
    if (!l) {
      if (l = E(t), l === null) throw Error(o(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return z(n), t;
          if (u === a) return z(n), l;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (f === a) {
            i = !0, a = n, e = u;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (f === a) {
              i = !0, a = u, e = n;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? t : l;
  }
  function B(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = B(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var q = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), J = /* @__PURE__ */ Symbol.for("react.transitional.element"), it = /* @__PURE__ */ Symbol.for("react.portal"), ot = /* @__PURE__ */ Symbol.for("react.fragment"), vt = /* @__PURE__ */ Symbol.for("react.strict_mode"), yt = /* @__PURE__ */ Symbol.for("react.profiler"), Et = /* @__PURE__ */ Symbol.for("react.consumer"), lt = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Nt = /* @__PURE__ */ Symbol.for("react.lazy"), qt = /* @__PURE__ */ Symbol.for("react.activity"), el = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), bl = Symbol.iterator;
  function Wt(t) {
    return t === null || typeof t != "object" ? null : (t = bl && t[bl] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Yl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Yl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ot:
        return "Fragment";
      case yt:
        return "Profiler";
      case vt:
        return "StrictMode";
      case X:
        return "Suspense";
      case et:
        return "SuspenseList";
      case qt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case it:
          return "Portal";
        case lt:
          return t.displayName || "Context";
        case Et:
          return (t._context.displayName || "Context") + ".Consumer";
        case at:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return l = t.displayName || null, l !== null ? l : xl(t.type) || "Memo";
        case Nt:
          l = t._payload, t = t._init;
          try {
            return xl(t(l));
          } catch {
          }
      }
    return null;
  }
  var ul = Array.isArray, j = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, O = [], V = -1;
  function p(t) {
    return { current: t };
  }
  function _(t) {
    0 > V || (t.current = O[V], O[V] = null, V--);
  }
  function Y(t, l) {
    V++, O[V] = t.current, t.current = l;
  }
  var G = p(null), P = p(null), nt = p(null), rt = p(null);
  function Dt(t, l) {
    switch (Y(nt, l), Y(P, t), Y(G, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Fd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Fd(l), t = Wd(l, t);
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
    _(G), Y(G, t);
  }
  function Ht() {
    _(G), _(P), _(nt);
  }
  function ae(t) {
    t.memoizedState !== null && Y(rt, t);
    var l = G.current, e = Wd(l, t.type);
    l !== e && (Y(P, t), Y(G, e));
  }
  function ne(t) {
    P.current === t && (_(G), _(P)), rt.current === t && (_(rt), zu._currentValue = k);
  }
  var He, Cn;
  function ue(t) {
    if (He === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        He = l && l[1] || "", Cn = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + He + t + Cn;
  }
  var wa = !1;
  function Be(t, l) {
    if (!t || wa) return "";
    wa = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
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
                } catch (D) {
                  var T = D;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (D) {
                  T = D;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                T = D;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (D) {
            if (D && T && typeof D.stack == "string")
              return [D.stack, T.stack];
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
      var u = a.DetermineComponentFrameRoot(), i = u[0], f = u[1];
      if (i && f) {
        var g = i.split(`
`), M = f.split(`
`);
        for (n = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < M.length && !M[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === g.length || n === M.length)
          for (a = g.length - 1, n = M.length - 1; 1 <= a && 0 <= n && g[a] !== M[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (g[a] !== M[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || g[a] !== M[n]) {
                  var U = `
` + g[a].replace(" at new ", " at ");
                  return t.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", t.displayName)), U;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      wa = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? ue(e) : "";
  }
  function Bu(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ue(t.type);
      case 16:
        return ue("Lazy");
      case 13:
        return t.child !== l && l !== null ? ue("Suspense Fallback") : ue("Suspense");
      case 19:
        return ue("SuspenseList");
      case 0:
      case 15:
        return Be(t.type, !1);
      case 11:
        return Be(t.type.render, !1);
      case 1:
        return Be(t.type, !0);
      case 31:
        return ue("Activity");
      default:
        return "";
    }
  }
  function Nn(t) {
    try {
      var l = "", e = null;
      do
        l += Bu(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ye = Object.prototype.hasOwnProperty, qe = c.unstable_scheduleCallback, st = c.unstable_cancelCallback, K = c.unstable_shouldYield, il = c.unstable_requestPaint, Zt = c.unstable_now, sl = c.unstable_getCurrentPriorityLevel, Lt = c.unstable_ImmediatePriority, Hn = c.unstable_UserBlockingPriority, Le = c.unstable_NormalPriority, Yu = c.unstable_LowPriority, tt = c.unstable_IdlePriority, y = c.log, At = c.unstable_setDisableYieldValue, Tt = null, cl = null;
  function _l(t) {
    if (typeof y == "function" && At(t), cl && typeof cl.setStrictMode == "function")
      try {
        cl.setStrictMode(Tt, t);
      } catch {
      }
  }
  var fl = Math.clz32 ? Math.clz32 : ie, Bn = Math.log, Xa = Math.LN2;
  function ie(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Bn(t) / Xa | 0) | 0;
  }
  var Qa = 256, Ge = 262144, Za = 4194304;
  function he(t) {
    var l = t & 42;
    if (l !== 0) return l;
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
  function pa(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~u, a !== 0 ? n = he(a) : (i &= f, i !== 0 ? n = he(i) : e || (e = f & ~t, e !== 0 && (n = he(e))))) : (f = a & ~u, f !== 0 ? n = he(f) : i !== 0 ? n = he(i) : e || (e = a & ~t, e !== 0 && (n = he(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n;
  }
  function we(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function dc(t, l) {
    switch (t) {
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
  function qu() {
    var t = Za;
    return Za <<= 1, (Za & 62914560) === 0 && (Za = 4194304), t;
  }
  function Yn(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function va(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function qn(t, l, e, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var f = t.entanglements, g = t.expirationTimes, M = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var U = 31 - fl(e), H = 1 << U;
      f[U] = 0, g[U] = -1;
      var T = M[U];
      if (T !== null)
        for (M[U] = null, U = 0; U < T.length; U++) {
          var D = T[U];
          D !== null && (D.lane &= -536870913);
        }
      e &= ~H;
    }
    a !== 0 && Va(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l));
  }
  function Va(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - fl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Lu(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - fl(e), n = 1 << a;
      n & l | t[a] & l && (t[a] |= l), e &= ~n;
    }
  }
  function Gu(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : ce(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function ce(t) {
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
  function ba(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ge() {
    var t = L.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : v0(t.type));
  }
  function Ka(t, l) {
    var e = L.p;
    try {
      return L.p = t, l();
    } finally {
      L.p = e;
    }
  }
  var fe = Math.random().toString(36).slice(2), al = "__reactFiber$" + fe, pl = "__reactProps$" + fe, Xe = "__reactContainer$" + fe, Sa = "__reactEvents$" + fe, wu = "__reactListeners$" + fe, Xu = "__reactHandles$" + fe, Qu = "__reactResources$" + fe, Qe = "__reactMarker$" + fe;
  function xa(t) {
    delete t[al], delete t[pl], delete t[Sa], delete t[wu], delete t[Xu];
  }
  function Ze(t) {
    var l = t[al];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Xe] || e[al]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = e0(t); t !== null; ) {
            if (e = t[al]) return e;
            t = e0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Ve(t) {
    if (t = t[al] || t[Xe]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ma(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(o(33));
  }
  function me(t) {
    var l = t[Qu];
    return l || (l = t[Qu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function kt(t) {
    t[Qe] = !0;
  }
  var Zu = /* @__PURE__ */ new Set(), Vu = {};
  function ye(t, l) {
    ql(t, l), ql(t + "Capture", l);
  }
  function ql(t, l) {
    for (Vu[t] = l, t = 0; t < l.length; t++)
      Zu.add(l[t]);
  }
  var Lo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ln = {}, Ll = {};
  function hc(t) {
    return Ye.call(Ll, t) ? !0 : Ye.call(Ln, t) ? !1 : Lo.test(t) ? Ll[t] = !0 : (Ln[t] = !0, !1);
  }
  function Ja(t, l, e) {
    if (hc(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Fa(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Gl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function wl(t) {
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
  function Go(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function P0(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          e = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function gc(t) {
    if (!t._valueTracker) {
      var l = Go(t) ? "checked" : "value";
      t._valueTracker = P0(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function wo(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = Go(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Ku(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var t1 = /[\n"\\]/g;
  function Xl(t) {
    return t.replace(
      t1,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mc(t, l, e, a, n, u, i, f) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + wl(l)) : t.value !== "" + wl(l) && (t.value = "" + wl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? yc(t, i, wl(l)) : e != null ? yc(t, i, wl(e)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + wl(f) : t.removeAttribute("name");
  }
  function Xo(t, l, e, a, n, u, i, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        gc(t);
        return;
      }
      e = e != null ? "" + wl(e) : "", l = l != null ? "" + wl(l) : e, f || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), gc(t);
  }
  function yc(t, l, e) {
    l === "number" && Ku(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Wa(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var n = 0; n < e.length; n++)
        l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + wl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Qo(t, l, e) {
    if (l != null && (l = "" + wl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + wl(e) : "";
  }
  function Zo(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (ul(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = wl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), gc(t);
  }
  function ka(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var l1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vo(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || l1.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Ko(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(o(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in l)
        a = l[n], l.hasOwnProperty(n) && e[n] !== a && Vo(t, n, a);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && Vo(t, u, l[u]);
  }
  function pc(t) {
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
  var e1 = /* @__PURE__ */ new Map([
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
  ]), a1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ju(t) {
    return a1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function pe() {
  }
  var vc = null;
  function bc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var $a = null, Ia = null;
  function Jo(t) {
    var l = Ve(t);
    if (l && (t = l.stateNode)) {
      var e = t[pl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (mc(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Xl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[pl] || null;
                if (!n) throw Error(o(90));
                mc(
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
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && wo(a);
          }
          break t;
        case "textarea":
          Qo(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Wa(t, !!e.multiple, l, !1);
      }
    }
  }
  var Sc = !1;
  function Fo(t, l, e) {
    if (Sc) return t(l, e);
    Sc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (Sc = !1, ($a !== null || Ia !== null) && (Ni(), $a && (l = $a, t = Ia, Ia = $a = null, Jo(l), t)))
        for (l = 0; l < t.length; l++) Jo(t[l]);
    }
  }
  function Gn(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[pl] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
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
    if (e && typeof e != "function")
      throw Error(
        o(231, l, typeof e)
      );
    return e;
  }
  var ve = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xc = !1;
  if (ve)
    try {
      var wn = {};
      Object.defineProperty(wn, "passive", {
        get: function() {
          xc = !0;
        }
      }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
    } catch {
      xc = !1;
    }
  var Ke = null, Mc = null, Fu = null;
  function Wo() {
    if (Fu) return Fu;
    var t, l = Mc, e = l.length, a, n = "value" in Ke ? Ke.value : Ke.textContent, u = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === n[u - a]; a++) ;
    return Fu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Wu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ku() {
    return !0;
  }
  function ko() {
    return !1;
  }
  function Ml(t) {
    function l(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (e = t[f], this[f] = e ? e(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ku : ko, this.isPropagationStopped = ko, this;
    }
    return q(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = ku);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = ku);
      },
      persist: function() {
      },
      isPersistent: ku
    }), l;
  }
  var za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $u = Ml(za), Xn = q({}, za, { view: 0, detail: 0 }), n1 = Ml(Xn), zc, Ac, Qn, Iu = q({}, Xn, {
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
    getModifierState: Ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Qn && (Qn && t.type === "mousemove" ? (zc = t.screenX - Qn.screenX, Ac = t.screenY - Qn.screenY) : Ac = zc = 0, Qn = t), zc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ac;
    }
  }), $o = Ml(Iu), u1 = q({}, Iu, { dataTransfer: 0 }), i1 = Ml(u1), c1 = q({}, Xn, { relatedTarget: 0 }), Tc = Ml(c1), f1 = q({}, za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), o1 = Ml(f1), r1 = q({}, za, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), s1 = Ml(r1), d1 = q({}, za, { data: 0 }), Io = Ml(d1), h1 = {
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
  }, g1 = {
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
  }, m1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function y1(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = m1[t]) ? !!l[t] : !1;
  }
  function Ec() {
    return y1;
  }
  var p1 = q({}, Xn, {
    key: function(t) {
      if (t.key) {
        var l = h1[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Wu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? g1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ec,
    charCode: function(t) {
      return t.type === "keypress" ? Wu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Wu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), v1 = Ml(p1), b1 = q({}, Iu, {
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
  }), Po = Ml(b1), S1 = q({}, Xn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec
  }), x1 = Ml(S1), M1 = q({}, za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), z1 = Ml(M1), A1 = q({}, Iu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), T1 = Ml(A1), E1 = q({}, za, {
    newState: 0,
    oldState: 0
  }), R1 = Ml(E1), _1 = [9, 13, 27, 32], Rc = ve && "CompositionEvent" in window, Zn = null;
  ve && "documentMode" in document && (Zn = document.documentMode);
  var D1 = ve && "TextEvent" in window && !Zn, tr = ve && (!Rc || Zn && 8 < Zn && 11 >= Zn), lr = " ", er = !1;
  function ar(t, l) {
    switch (t) {
      case "keyup":
        return _1.indexOf(l.keyCode) !== -1;
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
  function nr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Pa = !1;
  function O1(t, l) {
    switch (t) {
      case "compositionend":
        return nr(l);
      case "keypress":
        return l.which !== 32 ? null : (er = !0, lr);
      case "textInput":
        return t = l.data, t === lr && er ? null : t;
      default:
        return null;
    }
  }
  function j1(t, l) {
    if (Pa)
      return t === "compositionend" || !Rc && ar(t, l) ? (t = Wo(), Fu = Mc = Ke = null, Pa = !1, t) : null;
    switch (t) {
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
        return tr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var U1 = {
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
  function ur(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!U1[t.type] : l === "textarea";
  }
  function ir(t, l, e, a) {
    $a ? Ia ? Ia.push(a) : Ia = [a] : $a = a, l = wi(l, "onChange"), 0 < l.length && (e = new $u(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var Vn = null, Kn = null;
  function C1(t) {
    Xd(t, 0);
  }
  function Pu(t) {
    var l = Ma(t);
    if (wo(l)) return t;
  }
  function cr(t, l) {
    if (t === "change") return l;
  }
  var fr = !1;
  if (ve) {
    var _c;
    if (ve) {
      var Dc = "oninput" in document;
      if (!Dc) {
        var or = document.createElement("div");
        or.setAttribute("oninput", "return;"), Dc = typeof or.oninput == "function";
      }
      _c = Dc;
    } else _c = !1;
    fr = _c && (!document.documentMode || 9 < document.documentMode);
  }
  function rr() {
    Vn && (Vn.detachEvent("onpropertychange", sr), Kn = Vn = null);
  }
  function sr(t) {
    if (t.propertyName === "value" && Pu(Kn)) {
      var l = [];
      ir(
        l,
        Kn,
        t,
        bc(t)
      ), Fo(C1, l);
    }
  }
  function N1(t, l, e) {
    t === "focusin" ? (rr(), Vn = l, Kn = e, Vn.attachEvent("onpropertychange", sr)) : t === "focusout" && rr();
  }
  function H1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pu(Kn);
  }
  function B1(t, l) {
    if (t === "click") return Pu(l);
  }
  function Y1(t, l) {
    if (t === "input" || t === "change")
      return Pu(l);
  }
  function q1(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Dl = typeof Object.is == "function" ? Object.is : q1;
  function Jn(t, l) {
    if (Dl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Ye.call(l, n) || !Dl(t[n], l[n]))
        return !1;
    }
    return !0;
  }
  function dr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function hr(t, l) {
    var e = dr(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = dr(e);
    }
  }
  function gr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? gr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function mr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Ku(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Ku(t.document);
    }
    return l;
  }
  function Oc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var L1 = ve && "documentMode" in document && 11 >= document.documentMode, tn = null, jc = null, Fn = null, Uc = !1;
  function yr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Uc || tn == null || tn !== Ku(a) || (a = tn, "selectionStart" in a && Oc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fn && Jn(Fn, a) || (Fn = a, a = wi(jc, "onSelect"), 0 < a.length && (l = new $u(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = tn)));
  }
  function Aa(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ln = {
    animationend: Aa("Animation", "AnimationEnd"),
    animationiteration: Aa("Animation", "AnimationIteration"),
    animationstart: Aa("Animation", "AnimationStart"),
    transitionrun: Aa("Transition", "TransitionRun"),
    transitionstart: Aa("Transition", "TransitionStart"),
    transitioncancel: Aa("Transition", "TransitionCancel"),
    transitionend: Aa("Transition", "TransitionEnd")
  }, Cc = {}, pr = {};
  ve && (pr = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
  function Ta(t) {
    if (Cc[t]) return Cc[t];
    if (!ln[t]) return t;
    var l = ln[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in pr)
        return Cc[t] = l[e];
    return t;
  }
  var vr = Ta("animationend"), br = Ta("animationiteration"), Sr = Ta("animationstart"), G1 = Ta("transitionrun"), w1 = Ta("transitionstart"), X1 = Ta("transitioncancel"), xr = Ta("transitionend"), Mr = /* @__PURE__ */ new Map(), Nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Nc.push("scrollEnd");
  function Il(t, l) {
    Mr.set(t, l), ye(l, [t]);
  }
  var ti = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ql = [], en = 0, Hc = 0;
  function li() {
    for (var t = en, l = Hc = en = 0; l < t; ) {
      var e = Ql[l];
      Ql[l++] = null;
      var a = Ql[l];
      Ql[l++] = null;
      var n = Ql[l];
      Ql[l++] = null;
      var u = Ql[l];
      if (Ql[l++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && zr(e, n, u);
    }
  }
  function ei(t, l, e, a) {
    Ql[en++] = t, Ql[en++] = l, Ql[en++] = e, Ql[en++] = a, Hc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Bc(t, l, e, a) {
    return ei(t, l, e, a), ai(t);
  }
  function Ea(t, l) {
    return ei(t, null, null, l), ai(t);
  }
  function zr(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - fl(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), u) : null;
  }
  function ai(t) {
    if (50 < yu)
      throw yu = 0, Kf = null, Error(o(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var an = {};
  function Q1(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ol(t, l, e, a) {
    return new Q1(t, l, e, a);
  }
  function Yc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function be(t, l) {
    var e = t.alternate;
    return e === null ? (e = Ol(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Ar(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function ni(t, l, e, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Yc(t) && (i = 1);
    else if (typeof t == "string")
      i = Fh(
        t,
        e,
        G.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case qt:
          return t = Ol(31, e, l, n), t.elementType = qt, t.lanes = u, t;
        case ot:
          return Ra(e.children, n, u, l);
        case vt:
          i = 8, n |= 24;
          break;
        case yt:
          return t = Ol(12, e, l, n | 2), t.elementType = yt, t.lanes = u, t;
        case X:
          return t = Ol(13, e, l, n), t.elementType = X, t.lanes = u, t;
        case et:
          return t = Ol(19, e, l, n), t.elementType = et, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case lt:
                i = 10;
                break t;
              case Et:
                i = 9;
                break t;
              case at:
                i = 11;
                break t;
              case I:
                i = 14;
                break t;
              case Nt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = Ol(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l;
  }
  function Ra(t, l, e, a) {
    return t = Ol(7, t, a, l), t.lanes = e, t;
  }
  function qc(t, l, e) {
    return t = Ol(6, t, null, l), t.lanes = e, t;
  }
  function Tr(t) {
    var l = Ol(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Lc(t, l, e) {
    return l = Ol(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Er = /* @__PURE__ */ new WeakMap();
  function Zl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Er.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Nn(l)
      }, Er.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Nn(l)
    };
  }
  var nn = [], un = 0, ui = null, Wn = 0, Vl = [], Kl = 0, Je = null, oe = 1, re = "";
  function Se(t, l) {
    nn[un++] = Wn, nn[un++] = ui, ui = t, Wn = l;
  }
  function Rr(t, l, e) {
    Vl[Kl++] = oe, Vl[Kl++] = re, Vl[Kl++] = Je, Je = t;
    var a = oe;
    t = re;
    var n = 32 - fl(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - fl(l) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, oe = 1 << 32 - fl(l) + n | e << n | a, re = u + t;
    } else
      oe = 1 << u | e << n | a, re = t;
  }
  function Gc(t) {
    t.return !== null && (Se(t, 1), Rr(t, 1, 0));
  }
  function wc(t) {
    for (; t === ui; )
      ui = nn[--un], nn[un] = null, Wn = nn[--un], nn[un] = null;
    for (; t === Je; )
      Je = Vl[--Kl], Vl[Kl] = null, re = Vl[--Kl], Vl[Kl] = null, oe = Vl[--Kl], Vl[Kl] = null;
  }
  function _r(t, l) {
    Vl[Kl++] = oe, Vl[Kl++] = re, Vl[Kl++] = Je, oe = l.id, re = l.overflow, Je = t;
  }
  var dl = null, Bt = null, pt = !1, Fe = null, Jl = !1, Xc = Error(o(519));
  function We(t) {
    var l = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw kn(Zl(l, t)), Xc;
  }
  function Dr(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[al] = t, l[pl] = a, e) {
      case "dialog":
        ht("cancel", l), ht("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < vu.length; e++)
          ht(vu[e], l);
        break;
      case "source":
        ht("error", l);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", l), ht("load", l);
        break;
      case "details":
        ht("toggle", l);
        break;
      case "input":
        ht("invalid", l), Xo(
          l,
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
        ht("invalid", l);
        break;
      case "textarea":
        ht("invalid", l), Zo(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Kd(l.textContent, e) ? (a.popover != null && (ht("beforetoggle", l), ht("toggle", l)), a.onScroll != null && ht("scroll", l), a.onScrollEnd != null && ht("scrollend", l), a.onClick != null && (l.onclick = pe), l = !0) : l = !1, l || We(t, !0);
  }
  function Or(t) {
    for (dl = t.return; dl; )
      switch (dl.tag) {
        case 5:
        case 31:
        case 13:
          Jl = !1;
          return;
        case 27:
        case 3:
          Jl = !0;
          return;
        default:
          dl = dl.return;
      }
  }
  function cn(t) {
    if (t !== dl) return !1;
    if (!pt) return Or(t), pt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || co(t.type, t.memoizedProps)), e = !e), e && Bt && We(t), Or(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Bt = l0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Bt = l0(t);
    } else
      l === 27 ? (l = Bt, oa(t.type) ? (t = ho, ho = null, Bt = t) : Bt = l) : Bt = dl ? Wl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    Bt = dl = null, pt = !1;
  }
  function Qc() {
    var t = Fe;
    return t !== null && (El === null ? El = t : El.push.apply(
      El,
      t
    ), Fe = null), t;
  }
  function kn(t) {
    Fe === null ? Fe = [t] : Fe.push(t);
  }
  var Zc = p(null), Da = null, xe = null;
  function ke(t, l, e) {
    Y(Zc, l._currentValue), l._currentValue = e;
  }
  function Me(t) {
    t._currentValue = Zc.current, _(Zc);
  }
  function Vc(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Kc(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var g = 0; g < l.length; g++)
            if (f.context === l[g]) {
              u.lanes |= e, f = u.alternate, f !== null && (f.lanes |= e), Vc(
                u.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(o(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Vc(i, e, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function fn(t, l, e, a) {
    t = null;
    for (var n = l, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var f = n.type;
          Dl(n.pendingProps.value, i.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (n === rt.current) {
        if (i = n.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(zu) : t = [zu]);
      }
      n = n.return;
    }
    t !== null && Kc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function ii(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Dl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Oa(t) {
    Da = t, xe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function hl(t) {
    return jr(Da, t);
  }
  function ci(t, l) {
    return Da === null && Oa(t), jr(t, l);
  }
  function jr(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, xe === null) {
      if (t === null) throw Error(o(308));
      xe = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else xe = xe.next = l;
    return e;
  }
  var Z1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, V1 = c.unstable_scheduleCallback, K1 = c.unstable_NormalPriority, $t = {
    $$typeof: lt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Jc() {
    return {
      controller: new Z1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $n(t) {
    t.refCount--, t.refCount === 0 && V1(K1, function() {
      t.controller.abort();
    });
  }
  var In = null, Fc = 0, on = 0, rn = null;
  function J1(t, l) {
    if (In === null) {
      var e = In = [];
      Fc = 0, on = If(), rn = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Fc++, l.then(Ur, Ur), l;
  }
  function Ur() {
    if (--Fc === 0 && In !== null) {
      rn !== null && (rn.status = "fulfilled");
      var t = In;
      In = null, on = 0, rn = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function F1(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var Cr = j.S;
  j.S = function(t, l) {
    yd = Zt(), typeof l == "object" && l !== null && typeof l.then == "function" && J1(t, l), Cr !== null && Cr(t, l);
  };
  var ja = p(null);
  function Wc() {
    var t = ja.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function fi(t, l) {
    l === null ? Y(ja, ja.current) : Y(ja, l.pool);
  }
  function Nr() {
    var t = Wc();
    return t === null ? null : { parent: $t._currentValue, pool: t };
  }
  var sn = Error(o(460)), kc = Error(o(474)), oi = Error(o(542)), ri = { then: function() {
  } };
  function Hr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Br(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(pe, pe), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, qr(t), t;
      default:
        if (typeof l.status == "string") l.then(pe, pe);
        else {
          if (t = Ct, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, qr(t), t;
        }
        throw Ca = l, sn;
    }
  }
  function Ua(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ca = e, sn) : e;
    }
  }
  var Ca = null;
  function Yr() {
    if (Ca === null) throw Error(o(459));
    var t = Ca;
    return Ca = null, t;
  }
  function qr(t) {
    if (t === sn || t === oi)
      throw Error(o(483));
  }
  var dn = null, Pn = 0;
  function si(t) {
    var l = Pn;
    return Pn += 1, dn === null && (dn = []), Br(dn, t, l);
  }
  function tu(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function di(t, l) {
    throw l.$$typeof === w ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Lr(t) {
    function l(S, b) {
      if (t) {
        var x = S.deletions;
        x === null ? (S.deletions = [b], S.flags |= 16) : x.push(b);
      }
    }
    function e(S, b) {
      if (!t) return null;
      for (; b !== null; )
        l(S, b), b = b.sibling;
      return null;
    }
    function a(S) {
      for (var b = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? b.set(S.key, S) : b.set(S.index, S), S = S.sibling;
      return b;
    }
    function n(S, b) {
      return S = be(S, b), S.index = 0, S.sibling = null, S;
    }
    function u(S, b, x) {
      return S.index = x, t ? (x = S.alternate, x !== null ? (x = x.index, x < b ? (S.flags |= 67108866, b) : x) : (S.flags |= 67108866, b)) : (S.flags |= 1048576, b);
    }
    function i(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function f(S, b, x, C) {
      return b === null || b.tag !== 6 ? (b = qc(x, S.mode, C), b.return = S, b) : (b = n(b, x), b.return = S, b);
    }
    function g(S, b, x, C) {
      var F = x.type;
      return F === ot ? U(
        S,
        b,
        x.props.children,
        C,
        x.key
      ) : b !== null && (b.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Nt && Ua(F) === b.type) ? (b = n(b, x.props), tu(b, x), b.return = S, b) : (b = ni(
        x.type,
        x.key,
        x.props,
        null,
        S.mode,
        C
      ), tu(b, x), b.return = S, b);
    }
    function M(S, b, x, C) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== x.containerInfo || b.stateNode.implementation !== x.implementation ? (b = Lc(x, S.mode, C), b.return = S, b) : (b = n(b, x.children || []), b.return = S, b);
    }
    function U(S, b, x, C, F) {
      return b === null || b.tag !== 7 ? (b = Ra(
        x,
        S.mode,
        C,
        F
      ), b.return = S, b) : (b = n(b, x), b.return = S, b);
    }
    function H(S, b, x) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = qc(
          "" + b,
          S.mode,
          x
        ), b.return = S, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            return x = ni(
              b.type,
              b.key,
              b.props,
              null,
              S.mode,
              x
            ), tu(x, b), x.return = S, x;
          case it:
            return b = Lc(
              b,
              S.mode,
              x
            ), b.return = S, b;
          case Nt:
            return b = Ua(b), H(S, b, x);
        }
        if (ul(b) || Wt(b))
          return b = Ra(
            b,
            S.mode,
            x,
            null
          ), b.return = S, b;
        if (typeof b.then == "function")
          return H(S, si(b), x);
        if (b.$$typeof === lt)
          return H(
            S,
            ci(S, b),
            x
          );
        di(S, b);
      }
      return null;
    }
    function T(S, b, x, C) {
      var F = b !== null ? b.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return F !== null ? null : f(S, b, "" + x, C);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case J:
            return x.key === F ? g(S, b, x, C) : null;
          case it:
            return x.key === F ? M(S, b, x, C) : null;
          case Nt:
            return x = Ua(x), T(S, b, x, C);
        }
        if (ul(x) || Wt(x))
          return F !== null ? null : U(S, b, x, C, null);
        if (typeof x.then == "function")
          return T(
            S,
            b,
            si(x),
            C
          );
        if (x.$$typeof === lt)
          return T(
            S,
            b,
            ci(S, x),
            C
          );
        di(S, x);
      }
      return null;
    }
    function D(S, b, x, C, F) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return S = S.get(x) || null, f(b, S, "" + C, F);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case J:
            return S = S.get(
              C.key === null ? x : C.key
            ) || null, g(b, S, C, F);
          case it:
            return S = S.get(
              C.key === null ? x : C.key
            ) || null, M(b, S, C, F);
          case Nt:
            return C = Ua(C), D(
              S,
              b,
              x,
              C,
              F
            );
        }
        if (ul(C) || Wt(C))
          return S = S.get(x) || null, U(b, S, C, F, null);
        if (typeof C.then == "function")
          return D(
            S,
            b,
            x,
            si(C),
            F
          );
        if (C.$$typeof === lt)
          return D(
            S,
            b,
            x,
            ci(b, C),
            F
          );
        di(b, C);
      }
      return null;
    }
    function Q(S, b, x, C) {
      for (var F = null, xt = null, Z = b, ft = b = 0, mt = null; Z !== null && ft < x.length; ft++) {
        Z.index > ft ? (mt = Z, Z = null) : mt = Z.sibling;
        var Mt = T(
          S,
          Z,
          x[ft],
          C
        );
        if (Mt === null) {
          Z === null && (Z = mt);
          break;
        }
        t && Z && Mt.alternate === null && l(S, Z), b = u(Mt, b, ft), xt === null ? F = Mt : xt.sibling = Mt, xt = Mt, Z = mt;
      }
      if (ft === x.length)
        return e(S, Z), pt && Se(S, ft), F;
      if (Z === null) {
        for (; ft < x.length; ft++)
          Z = H(S, x[ft], C), Z !== null && (b = u(
            Z,
            b,
            ft
          ), xt === null ? F = Z : xt.sibling = Z, xt = Z);
        return pt && Se(S, ft), F;
      }
      for (Z = a(Z); ft < x.length; ft++)
        mt = D(
          Z,
          S,
          ft,
          x[ft],
          C
        ), mt !== null && (t && mt.alternate !== null && Z.delete(
          mt.key === null ? ft : mt.key
        ), b = u(
          mt,
          b,
          ft
        ), xt === null ? F = mt : xt.sibling = mt, xt = mt);
      return t && Z.forEach(function(ga) {
        return l(S, ga);
      }), pt && Se(S, ft), F;
    }
    function $(S, b, x, C) {
      if (x == null) throw Error(o(151));
      for (var F = null, xt = null, Z = b, ft = b = 0, mt = null, Mt = x.next(); Z !== null && !Mt.done; ft++, Mt = x.next()) {
        Z.index > ft ? (mt = Z, Z = null) : mt = Z.sibling;
        var ga = T(S, Z, Mt.value, C);
        if (ga === null) {
          Z === null && (Z = mt);
          break;
        }
        t && Z && ga.alternate === null && l(S, Z), b = u(ga, b, ft), xt === null ? F = ga : xt.sibling = ga, xt = ga, Z = mt;
      }
      if (Mt.done)
        return e(S, Z), pt && Se(S, ft), F;
      if (Z === null) {
        for (; !Mt.done; ft++, Mt = x.next())
          Mt = H(S, Mt.value, C), Mt !== null && (b = u(Mt, b, ft), xt === null ? F = Mt : xt.sibling = Mt, xt = Mt);
        return pt && Se(S, ft), F;
      }
      for (Z = a(Z); !Mt.done; ft++, Mt = x.next())
        Mt = D(Z, S, ft, Mt.value, C), Mt !== null && (t && Mt.alternate !== null && Z.delete(Mt.key === null ? ft : Mt.key), b = u(Mt, b, ft), xt === null ? F = Mt : xt.sibling = Mt, xt = Mt);
      return t && Z.forEach(function(u2) {
        return l(S, u2);
      }), pt && Se(S, ft), F;
    }
    function Ut(S, b, x, C) {
      if (typeof x == "object" && x !== null && x.type === ot && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case J:
            t: {
              for (var F = x.key; b !== null; ) {
                if (b.key === F) {
                  if (F = x.type, F === ot) {
                    if (b.tag === 7) {
                      e(
                        S,
                        b.sibling
                      ), C = n(
                        b,
                        x.props.children
                      ), C.return = S, S = C;
                      break t;
                    }
                  } else if (b.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Nt && Ua(F) === b.type) {
                    e(
                      S,
                      b.sibling
                    ), C = n(b, x.props), tu(C, x), C.return = S, S = C;
                    break t;
                  }
                  e(S, b);
                  break;
                } else l(S, b);
                b = b.sibling;
              }
              x.type === ot ? (C = Ra(
                x.props.children,
                S.mode,
                C,
                x.key
              ), C.return = S, S = C) : (C = ni(
                x.type,
                x.key,
                x.props,
                null,
                S.mode,
                C
              ), tu(C, x), C.return = S, S = C);
            }
            return i(S);
          case it:
            t: {
              for (F = x.key; b !== null; ) {
                if (b.key === F)
                  if (b.tag === 4 && b.stateNode.containerInfo === x.containerInfo && b.stateNode.implementation === x.implementation) {
                    e(
                      S,
                      b.sibling
                    ), C = n(b, x.children || []), C.return = S, S = C;
                    break t;
                  } else {
                    e(S, b);
                    break;
                  }
                else l(S, b);
                b = b.sibling;
              }
              C = Lc(x, S.mode, C), C.return = S, S = C;
            }
            return i(S);
          case Nt:
            return x = Ua(x), Ut(
              S,
              b,
              x,
              C
            );
        }
        if (ul(x))
          return Q(
            S,
            b,
            x,
            C
          );
        if (Wt(x)) {
          if (F = Wt(x), typeof F != "function") throw Error(o(150));
          return x = F.call(x), $(
            S,
            b,
            x,
            C
          );
        }
        if (typeof x.then == "function")
          return Ut(
            S,
            b,
            si(x),
            C
          );
        if (x.$$typeof === lt)
          return Ut(
            S,
            b,
            ci(S, x),
            C
          );
        di(S, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, b !== null && b.tag === 6 ? (e(S, b.sibling), C = n(b, x), C.return = S, S = C) : (e(S, b), C = qc(x, S.mode, C), C.return = S, S = C), i(S)) : e(S, b);
    }
    return function(S, b, x, C) {
      try {
        Pn = 0;
        var F = Ut(
          S,
          b,
          x,
          C
        );
        return dn = null, F;
      } catch (Z) {
        if (Z === sn || Z === oi) throw Z;
        var xt = Ol(29, Z, null, S.mode);
        return xt.lanes = C, xt.return = S, xt;
      }
    };
  }
  var Na = Lr(!0), Gr = Lr(!1), $e = !1;
  function $c(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ic(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ie(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pe(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (zt & 2) !== 0) {
      var n = a.pending;
      return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = ai(t), zr(t, null, e), l;
    }
    return ei(t, a, l, e), ai(t);
  }
  function lu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Lu(t, e);
    }
  }
  function Pc(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = l : u = u.next = l;
      } else n = u = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var tf = !1;
  function eu() {
    if (tf) {
      var t = rn;
      if (t !== null) throw t;
    }
  }
  function au(t, l, e, a) {
    tf = !1;
    var n = t.updateQueue;
    $e = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var g = f, M = g.next;
      g.next = null, i === null ? u = M : i.next = M, i = g;
      var U = t.alternate;
      U !== null && (U = U.updateQueue, f = U.lastBaseUpdate, f !== i && (f === null ? U.firstBaseUpdate = M : f.next = M, U.lastBaseUpdate = g));
    }
    if (u !== null) {
      var H = n.baseState;
      i = 0, U = M = g = null, f = u;
      do {
        var T = f.lane & -536870913, D = T !== f.lane;
        if (D ? (gt & T) === T : (a & T) === T) {
          T !== 0 && T === on && (tf = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var Q = t, $ = f;
            T = l;
            var Ut = e;
            switch ($.tag) {
              case 1:
                if (Q = $.payload, typeof Q == "function") {
                  H = Q.call(Ut, H, T);
                  break t;
                }
                H = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = $.payload, T = typeof Q == "function" ? Q.call(Ut, H, T) : Q, T == null) break t;
                H = q({}, H, T);
                break t;
              case 2:
                $e = !0;
            }
          }
          T = f.callback, T !== null && (t.flags |= 64, D && (t.flags |= 8192), D = n.callbacks, D === null ? n.callbacks = [T] : D.push(T));
        } else
          D = {
            lane: T,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, U === null ? (M = U = D, g = H) : U = U.next = D, i |= T;
        if (f = f.next, f === null) {
          if (f = n.shared.pending, f === null)
            break;
          D = f, f = D.next, D.next = null, n.lastBaseUpdate = D, n.shared.pending = null;
        }
      } while (!0);
      U === null && (g = H), n.baseState = g, n.firstBaseUpdate = M, n.lastBaseUpdate = U, u === null && (n.shared.lanes = 0), na |= i, t.lanes = i, t.memoizedState = H;
    }
  }
  function wr(t, l) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(l);
  }
  function Xr(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        wr(e[t], l);
  }
  var hn = p(null), hi = p(0);
  function Qr(t, l) {
    t = je, Y(hi, t), Y(hn, l), je = t | l.baseLanes;
  }
  function lf() {
    Y(hi, je), Y(hn, hn.current);
  }
  function ef() {
    je = hi.current, _(hn), _(hi);
  }
  var jl = p(null), Fl = null;
  function ta(t) {
    var l = t.alternate;
    Y(Vt, Vt.current & 1), Y(jl, t), Fl === null && (l === null || hn.current !== null || l.memoizedState !== null) && (Fl = t);
  }
  function af(t) {
    Y(Vt, Vt.current), Y(jl, t), Fl === null && (Fl = t);
  }
  function Zr(t) {
    t.tag === 22 ? (Y(Vt, Vt.current), Y(jl, t), Fl === null && (Fl = t)) : la();
  }
  function la() {
    Y(Vt, Vt.current), Y(jl, jl.current);
  }
  function Ul(t) {
    _(jl), Fl === t && (Fl = null), _(Vt);
  }
  var Vt = p(0);
  function gi(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || ro(e) || so(e)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var ze = 0, ct = null, Ot = null, It = null, mi = !1, gn = !1, Ha = !1, yi = 0, nu = 0, mn = null, W1 = 0;
  function wt() {
    throw Error(o(321));
  }
  function nf(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Dl(t[e], l[e])) return !1;
    return !0;
  }
  function uf(t, l, e, a, n, u) {
    return ze = u, ct = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = t === null || t.memoizedState === null ? Rs : xf, Ha = !1, u = e(a, n), Ha = !1, gn && (u = Kr(
      l,
      e,
      a,
      n
    )), Vr(t), u;
  }
  function Vr(t) {
    j.H = cu;
    var l = Ot !== null && Ot.next !== null;
    if (ze = 0, It = Ot = ct = null, mi = !1, nu = 0, mn = null, l) throw Error(o(300));
    t === null || Pt || (t = t.dependencies, t !== null && ii(t) && (Pt = !0));
  }
  function Kr(t, l, e, a) {
    ct = t;
    var n = 0;
    do {
      if (gn && (mn = null), nu = 0, gn = !1, 25 <= n) throw Error(o(301));
      if (n += 1, It = Ot = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      j.H = _s, u = l(e, a);
    } while (gn);
    return u;
  }
  function k1() {
    var t = j.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? uu(l) : l, t = t.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== t && (ct.flags |= 1024), l;
  }
  function cf() {
    var t = yi !== 0;
    return yi = 0, t;
  }
  function ff(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function of(t) {
    if (mi) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      mi = !1;
    }
    ze = 0, It = Ot = ct = null, gn = !1, nu = yi = 0, mn = null;
  }
  function Sl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? ct.memoizedState = It = t : It = It.next = t, It;
  }
  function Kt() {
    if (Ot === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ot.next;
    var l = It === null ? ct.memoizedState : It.next;
    if (l !== null)
      It = l, Ot = t;
    else {
      if (t === null)
        throw ct.alternate === null ? Error(o(467)) : Error(o(310));
      Ot = t, t = {
        memoizedState: Ot.memoizedState,
        baseState: Ot.baseState,
        baseQueue: Ot.baseQueue,
        queue: Ot.queue,
        next: null
      }, It === null ? ct.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function pi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(t) {
    var l = nu;
    return nu += 1, mn === null && (mn = []), t = Br(mn, t, l), l = ct, (It === null ? l.memoizedState : It.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? Rs : xf), t;
  }
  function vi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return uu(t);
      if (t.$$typeof === lt) return hl(t);
    }
    throw Error(o(438, String(t)));
  }
  function rf(t) {
    var l = null, e = ct.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = ct.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = pi(), ct.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = el;
    return l.index++, e;
  }
  function Ae(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function bi(t) {
    var l = Kt();
    return sf(l, Ot, t);
  }
  function sf(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      l.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      l = n.next;
      var f = i = null, g = null, M = l, U = !1;
      do {
        var H = M.lane & -536870913;
        if (H !== M.lane ? (gt & H) === H : (ze & H) === H) {
          var T = M.revertLane;
          if (T === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), H === on && (U = !0);
          else if ((ze & T) === T) {
            M = M.next, T === on && (U = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, g === null ? (f = g = H, i = u) : g = g.next = H, ct.lanes |= T, na |= T;
          H = M.action, Ha && e(u, H), u = M.hasEagerState ? M.eagerState : e(u, H);
        } else
          T = {
            lane: H,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, g === null ? (f = g = T, i = u) : g = g.next = T, ct.lanes |= H, na |= H;
        M = M.next;
      } while (M !== null && M !== l);
      if (g === null ? i = u : g.next = f, !Dl(u, t.memoizedState) && (Pt = !0, U && (e = rn, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = i, t.baseQueue = g, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function df(t) {
    var l = Kt(), e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, n = e.pending, u = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      Dl(u, l.memoizedState) || (Pt = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Jr(t, l, e) {
    var a = ct, n = Kt(), u = pt;
    if (u) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = l();
    var i = !Dl(
      (Ot || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Pt = !0), n = n.queue, mf(kr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== l || i || It !== null && It.memoizedState.tag & 1) {
      if (a.flags |= 2048, yn(
        9,
        { destroy: void 0 },
        Wr.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), Ct === null) throw Error(o(349));
      u || (ze & 127) !== 0 || Fr(a, l, e);
    }
    return e;
  }
  function Fr(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = ct.updateQueue, l === null ? (l = pi(), ct.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Wr(t, l, e, a) {
    l.value = e, l.getSnapshot = a, $r(l) && Ir(t);
  }
  function kr(t, l, e) {
    return e(function() {
      $r(l) && Ir(t);
    });
  }
  function $r(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Dl(t, e);
    } catch {
      return !0;
    }
  }
  function Ir(t) {
    var l = Ea(t, 2);
    l !== null && Rl(l, t, 2);
  }
  function hf(t) {
    var l = Sl();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ha) {
        _l(!0);
        try {
          e();
        } finally {
          _l(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ae,
      lastRenderedState: t
    }, l;
  }
  function Pr(t, l, e, a) {
    return t.baseState = e, sf(
      t,
      Ot,
      typeof a == "function" ? a : Ae
    );
  }
  function $1(t, l, e, a, n) {
    if (Mi(t)) throw Error(o(485));
    if (t = l.action, t !== null) {
      var u = {
        payload: n,
        action: t,
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
      j.T !== null ? e(!0) : u.isTransition = !1, a(u), e = l.pending, e === null ? (u.next = l.pending = u, ts(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function ts(t, l) {
    var e = l.action, a = l.payload, n = t.state;
    if (l.isTransition) {
      var u = j.T, i = {};
      j.T = i;
      try {
        var f = e(n, a), g = j.S;
        g !== null && g(i, f), ls(t, l, f);
      } catch (M) {
        gf(t, l, M);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), j.T = u;
      }
    } else
      try {
        u = e(n, a), ls(t, l, u);
      } catch (M) {
        gf(t, l, M);
      }
  }
  function ls(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        es(t, l, a);
      },
      function(a) {
        return gf(t, l, a);
      }
    ) : es(t, l, e);
  }
  function es(t, l, e) {
    l.status = "fulfilled", l.value = e, as(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ts(t, e)));
  }
  function gf(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, as(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function as(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ns(t, l) {
    return l;
  }
  function us(t, l) {
    if (pt) {
      var e = Ct.formState;
      if (e !== null) {
        t: {
          var a = ct;
          if (pt) {
            if (Bt) {
              l: {
                for (var n = Bt, u = Jl; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break l;
                  }
                  if (n = Wl(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break l;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Bt = Wl(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            We(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = Sl(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ns,
      lastRenderedState: l
    }, e.queue = a, e = As.bind(
      null,
      ct,
      a
    ), a.dispatch = e, a = hf(!1), u = Sf.bind(
      null,
      ct,
      !1,
      a.queue
    ), a = Sl(), n = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, e = $1.bind(
      null,
      ct,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function is(t) {
    var l = Kt();
    return cs(l, Ot, t);
  }
  function cs(t, l, e) {
    if (l = sf(
      t,
      l,
      ns
    )[0], t = bi(Ae)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = uu(l);
      } catch (i) {
        throw i === sn ? oi : i;
      }
    else a = l;
    l = Kt();
    var n = l.queue, u = n.dispatch;
    return e !== l.memoizedState && (ct.flags |= 2048, yn(
      9,
      { destroy: void 0 },
      I1.bind(null, n, e),
      null
    )), [a, u, t];
  }
  function I1(t, l) {
    t.action = l;
  }
  function fs(t) {
    var l = Kt(), e = Ot;
    if (e !== null)
      return cs(l, e, t);
    Kt(), l = l.memoizedState, e = Kt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function yn(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = ct.updateQueue, l === null && (l = pi(), ct.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function os() {
    return Kt().memoizedState;
  }
  function Si(t, l, e, a) {
    var n = Sl();
    ct.flags |= t, n.memoizedState = yn(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function xi(t, l, e, a) {
    var n = Kt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Ot !== null && a !== null && nf(a, Ot.memoizedState.deps) ? n.memoizedState = yn(l, u, e, a) : (ct.flags |= t, n.memoizedState = yn(
      1 | l,
      u,
      e,
      a
    ));
  }
  function rs(t, l) {
    Si(8390656, 8, t, l);
  }
  function mf(t, l) {
    xi(2048, 8, t, l);
  }
  function P1(t) {
    ct.flags |= 4;
    var l = ct.updateQueue;
    if (l === null)
      l = pi(), ct.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function ss(t) {
    var l = Kt().memoizedState;
    return P1({ ref: l, nextImpl: t }), function() {
      if ((zt & 2) !== 0) throw Error(o(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ds(t, l) {
    return xi(4, 2, t, l);
  }
  function hs(t, l) {
    return xi(4, 4, t, l);
  }
  function gs(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function ms(t, l, e) {
    e = e != null ? e.concat([t]) : null, xi(4, 4, gs.bind(null, l, t), e);
  }
  function yf() {
  }
  function ys(t, l) {
    var e = Kt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && nf(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function ps(t, l) {
    var e = Kt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && nf(l, a[1]))
      return a[0];
    if (a = t(), Ha) {
      _l(!0);
      try {
        t();
      } finally {
        _l(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function pf(t, l, e) {
    return e === void 0 || (ze & 1073741824) !== 0 && (gt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = vd(), ct.lanes |= t, na |= t, e);
  }
  function vs(t, l, e, a) {
    return Dl(e, l) ? e : hn.current !== null ? (t = pf(t, e, a), Dl(t, l) || (Pt = !0), t) : (ze & 42) === 0 || (ze & 1073741824) !== 0 && (gt & 261930) === 0 ? (Pt = !0, t.memoizedState = e) : (t = vd(), ct.lanes |= t, na |= t, l);
  }
  function bs(t, l, e, a, n) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var i = j.T, f = {};
    j.T = f, Sf(t, !1, l, e);
    try {
      var g = n(), M = j.S;
      if (M !== null && M(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var U = F1(
          g,
          a
        );
        iu(
          t,
          l,
          U,
          Hl(t)
        );
      } else
        iu(
          t,
          l,
          a,
          Hl(t)
        );
    } catch (H) {
      iu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: H },
        Hl()
      );
    } finally {
      L.p = u, i !== null && f.types !== null && (i.types = f.types), j.T = i;
    }
  }
  function th() {
  }
  function vf(t, l, e, a) {
    if (t.tag !== 5) throw Error(o(476));
    var n = Ss(t).queue;
    bs(
      t,
      n,
      l,
      k,
      e === null ? th : function() {
        return xs(t), e(a);
      }
    );
  }
  function Ss(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ae,
        lastRenderedState: k
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ae,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function xs(t) {
    var l = Ss(t);
    l.next === null && (l = t.alternate.memoizedState), iu(
      t,
      l.next.queue,
      {},
      Hl()
    );
  }
  function bf() {
    return hl(zu);
  }
  function Ms() {
    return Kt().memoizedState;
  }
  function zs() {
    return Kt().memoizedState;
  }
  function lh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Hl();
          t = Ie(e);
          var a = Pe(l, t, e);
          a !== null && (Rl(a, l, e), lu(a, l, e)), l = { cache: Jc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function eh(t, l, e) {
    var a = Hl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mi(t) ? Ts(l, e) : (e = Bc(t, l, e, a), e !== null && (Rl(e, t, a), Es(e, l, a)));
  }
  function As(t, l, e) {
    var a = Hl();
    iu(t, l, e, a);
  }
  function iu(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Mi(t)) Ts(l, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, f = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = f, Dl(f, i))
            return ei(t, l, n, 0), Ct === null && li(), !1;
        } catch {
        }
      if (e = Bc(t, l, n, a), e !== null)
        return Rl(e, t, a), Es(e, l, a), !0;
    }
    return !1;
  }
  function Sf(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: If(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Mi(t)) {
      if (l) throw Error(o(479));
    } else
      l = Bc(
        t,
        e,
        a,
        2
      ), l !== null && Rl(l, t, 2);
  }
  function Mi(t) {
    var l = t.alternate;
    return t === ct || l !== null && l === ct;
  }
  function Ts(t, l) {
    gn = mi = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Es(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Lu(t, e);
    }
  }
  var cu = {
    readContext: hl,
    use: vi,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt
  };
  cu.useEffectEvent = wt;
  var Rs = {
    readContext: hl,
    use: vi,
    useCallback: function(t, l) {
      return Sl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: hl,
    useEffect: rs,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Si(
        4194308,
        4,
        gs.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Si(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Si(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Sl();
      l = l === void 0 ? null : l;
      var a = t();
      if (Ha) {
        _l(!0);
        try {
          t();
        } finally {
          _l(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = Sl();
      if (e !== void 0) {
        var n = e(l);
        if (Ha) {
          _l(!0);
          try {
            e(l);
          } finally {
            _l(!1);
          }
        }
      } else n = l;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = eh.bind(
        null,
        ct,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = Sl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = hf(t);
      var l = t.queue, e = As.bind(null, ct, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: yf,
    useDeferredValue: function(t, l) {
      var e = Sl();
      return pf(e, t, l);
    },
    useTransition: function() {
      var t = hf(!1);
      return t = bs.bind(
        null,
        ct,
        t.queue,
        !0,
        !1
      ), Sl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = ct, n = Sl();
      if (pt) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = l(), Ct === null)
          throw Error(o(349));
        (gt & 127) !== 0 || Fr(a, l, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return n.queue = u, rs(kr.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, yn(
        9,
        { destroy: void 0 },
        Wr.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Sl(), l = Ct.identifierPrefix;
      if (pt) {
        var e = re, a = oe;
        e = (a & ~(1 << 32 - fl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = yi++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = W1++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: bf,
    useFormState: us,
    useActionState: us,
    useOptimistic: function(t) {
      var l = Sl();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = Sf.bind(
        null,
        ct,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: rf,
    useCacheRefresh: function() {
      return Sl().memoizedState = lh.bind(
        null,
        ct
      );
    },
    useEffectEvent: function(t) {
      var l = Sl(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((zt & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, xf = {
    readContext: hl,
    use: vi,
    useCallback: ys,
    useContext: hl,
    useEffect: mf,
    useImperativeHandle: ms,
    useInsertionEffect: ds,
    useLayoutEffect: hs,
    useMemo: ps,
    useReducer: bi,
    useRef: os,
    useState: function() {
      return bi(Ae);
    },
    useDebugValue: yf,
    useDeferredValue: function(t, l) {
      var e = Kt();
      return vs(
        e,
        Ot.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = bi(Ae)[0], l = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : uu(t),
        l
      ];
    },
    useSyncExternalStore: Jr,
    useId: Ms,
    useHostTransitionStatus: bf,
    useFormState: is,
    useActionState: is,
    useOptimistic: function(t, l) {
      var e = Kt();
      return Pr(e, Ot, t, l);
    },
    useMemoCache: rf,
    useCacheRefresh: zs
  };
  xf.useEffectEvent = ss;
  var _s = {
    readContext: hl,
    use: vi,
    useCallback: ys,
    useContext: hl,
    useEffect: mf,
    useImperativeHandle: ms,
    useInsertionEffect: ds,
    useLayoutEffect: hs,
    useMemo: ps,
    useReducer: df,
    useRef: os,
    useState: function() {
      return df(Ae);
    },
    useDebugValue: yf,
    useDeferredValue: function(t, l) {
      var e = Kt();
      return Ot === null ? pf(e, t, l) : vs(
        e,
        Ot.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = df(Ae)[0], l = Kt().memoizedState;
      return [
        typeof t == "boolean" ? t : uu(t),
        l
      ];
    },
    useSyncExternalStore: Jr,
    useId: Ms,
    useHostTransitionStatus: bf,
    useFormState: fs,
    useActionState: fs,
    useOptimistic: function(t, l) {
      var e = Kt();
      return Ot !== null ? Pr(e, Ot, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: rf,
    useCacheRefresh: zs
  };
  _s.useEffectEvent = ss;
  function Mf(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : q({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var zf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = Hl(), n = Ie(a);
      n.payload = l, e != null && (n.callback = e), l = Pe(t, n, a), l !== null && (Rl(l, t, a), lu(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = Hl(), n = Ie(a);
      n.tag = 1, n.payload = l, e != null && (n.callback = e), l = Pe(t, n, a), l !== null && (Rl(l, t, a), lu(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Hl(), a = Ie(e);
      a.tag = 2, l != null && (a.callback = l), l = Pe(t, a, e), l !== null && (Rl(l, t, e), lu(l, t, e));
    }
  };
  function Ds(t, l, e, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Jn(e, a) || !Jn(n, u) : !0;
  }
  function Os(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && zf.enqueueReplaceState(l, l.state, null);
  }
  function Ba(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = q({}, e));
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function js(t) {
    ti(t);
  }
  function Us(t) {
    console.error(t);
  }
  function Cs(t) {
    ti(t);
  }
  function zi(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ns(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Af(t, l, e) {
    return e = Ie(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      zi(t, l);
    }, e;
  }
  function Hs(t) {
    return t = Ie(t), t.tag = 3, t;
  }
  function Bs(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Ns(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Ns(l, e, a), typeof n != "function" && (ua === null ? ua = /* @__PURE__ */ new Set([this]) : ua.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function ah(t, l, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && fn(
        l,
        e,
        n,
        !0
      ), e = jl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Fl === null ? Hi() : e.alternate === null && Xt === 0 && (Xt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === ri ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), Wf(t, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === ri ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Wf(t, a, n)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Wf(t, a, n), Hi(), !1;
    }
    if (pt)
      return l = jl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Xc && (t = Error(o(422), { cause: a }), kn(Zl(t, e)))) : (a !== Xc && (l = Error(o(423), {
        cause: a
      }), kn(
        Zl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Zl(a, e), n = Af(
        t.stateNode,
        a,
        n
      ), Pc(t, n), Xt !== 4 && (Xt = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Zl(u, e), mu === null ? mu = [u] : mu.push(u), Xt !== 4 && (Xt = 2), l === null) return !0;
    a = Zl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = n & -n, e.lanes |= t, t = Af(e.stateNode, a, t), Pc(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ua === null || !ua.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Hs(n), Bs(
              n,
              t,
              e,
              a
            ), Pc(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Tf = Error(o(461)), Pt = !1;
  function gl(t, l, e, a) {
    l.child = t === null ? Gr(l, null, e, a) : Na(
      l,
      t.child,
      e,
      a
    );
  }
  function Ys(t, l, e, a, n) {
    e = e.render;
    var u = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a)
        f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return Oa(l), a = uf(
      t,
      l,
      e,
      i,
      u,
      n
    ), f = cf(), t !== null && !Pt ? (ff(t, l, n), Te(t, l, n)) : (pt && f && Gc(l), l.flags |= 1, gl(t, l, a, n), l.child);
  }
  function qs(t, l, e, a, n) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !Yc(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, Ls(
        t,
        l,
        u,
        a,
        n
      )) : (t = ni(
        e.type,
        null,
        a,
        l,
        l.mode,
        n
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (u = t.child, !Cf(t, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Jn, e(i, a) && t.ref === l.ref)
        return Te(t, l, n);
    }
    return l.flags |= 1, t = be(u, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Ls(t, l, e, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Jn(u, a) && t.ref === l.ref)
        if (Pt = !1, l.pendingProps = a = u, Cf(t, n))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return l.lanes = t.lanes, Te(t, l, n);
    }
    return Ef(
      t,
      l,
      e,
      a,
      n
    );
  }
  function Gs(t, l, e, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, l.child = null;
        return ws(
          t,
          l,
          u,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && fi(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Qr(l, u) : lf(), Zr(l);
      else
        return a = l.lanes = 536870912, ws(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (fi(l, u.cachePool), Qr(l, u), la(), l.memoizedState = null) : (t !== null && fi(l, null), lf(), la());
    return gl(t, l, n, e), l.child;
  }
  function fu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function ws(t, l, e, a, n) {
    var u = Wc();
    return u = u === null ? null : { parent: $t._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && fi(l, null), lf(), Zr(l), t !== null && fn(t, l, a, !0), l.childLanes = n, null;
  }
  function Ai(t, l) {
    return l = Ei(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Xs(t, l, e) {
    return Na(l, t.child, null, e), t = Ai(l, l.pendingProps), t.flags |= 2, Ul(l), l.memoizedState = null, t;
  }
  function nh(t, l, e) {
    var a = l.pendingProps, n = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (pt) {
        if (a.mode === "hidden")
          return t = Ai(l, a), l.lanes = 536870912, fu(null, t);
        if (af(l), (t = Bt) ? (t = t0(
          t,
          Jl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Je !== null ? { id: oe, overflow: re } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Tr(t), e.return = l, l.child = e, dl = l, Bt = null)) : t = null, t === null) throw We(l);
        return l.lanes = 536870912, null;
      }
      return Ai(l, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (af(l), n)
        if (l.flags & 256)
          l.flags &= -257, l = Xs(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(o(558));
      else if (Pt || fn(t, l, e, !1), n = (e & t.childLanes) !== 0, Pt || n) {
        if (a = Ct, a !== null && (i = Gu(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Ea(t, i), Rl(a, t, i), Tf;
        Hi(), l = Xs(
          t,
          l,
          e
        );
      } else
        t = u.treeContext, Bt = Wl(i.nextSibling), dl = l, pt = !0, Fe = null, Jl = !1, t !== null && _r(l, t), l = Ai(l, a), l.flags |= 4096;
      return l;
    }
    return t = be(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ti(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Ef(t, l, e, a, n) {
    return Oa(l), e = uf(
      t,
      l,
      e,
      a,
      void 0,
      n
    ), a = cf(), t !== null && !Pt ? (ff(t, l, n), Te(t, l, n)) : (pt && a && Gc(l), l.flags |= 1, gl(t, l, e, n), l.child);
  }
  function Qs(t, l, e, a, n, u) {
    return Oa(l), l.updateQueue = null, e = Kr(
      l,
      a,
      e,
      n
    ), Vr(t), a = cf(), t !== null && !Pt ? (ff(t, l, u), Te(t, l, u)) : (pt && a && Gc(l), l.flags |= 1, gl(t, l, e, u), l.child);
  }
  function Zs(t, l, e, a, n) {
    if (Oa(l), l.stateNode === null) {
      var u = an, i = e.contextType;
      typeof i == "object" && i !== null && (u = hl(i)), u = new e(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = zf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, $c(l), i = e.contextType, u.context = typeof i == "object" && i !== null ? hl(i) : an, u.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Mf(
        l,
        e,
        i,
        a
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && zf.enqueueReplaceState(u, u.state, null), au(l, a, u, n), eu(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = l.stateNode;
      var f = l.memoizedProps, g = Ba(e, f);
      u.props = g;
      var M = u.context, U = e.contextType;
      i = an, typeof U == "object" && U !== null && (i = hl(U));
      var H = e.getDerivedStateFromProps;
      U = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, U || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || M !== i) && Os(
        l,
        u,
        a,
        i
      ), $e = !1;
      var T = l.memoizedState;
      u.state = T, au(l, a, u, n), eu(), M = l.memoizedState, f || T !== M || $e ? (typeof H == "function" && (Mf(
        l,
        e,
        H,
        a
      ), M = l.memoizedState), (g = $e || Ds(
        l,
        e,
        g,
        a,
        T,
        M,
        i
      )) ? (U || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = M), u.props = a, u.state = M, u.context = i, a = g) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      u = l.stateNode, Ic(t, l), i = l.memoizedProps, U = Ba(e, i), u.props = U, H = l.pendingProps, T = u.context, M = e.contextType, g = an, typeof M == "object" && M !== null && (g = hl(M)), f = e.getDerivedStateFromProps, (M = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== H || T !== g) && Os(
        l,
        u,
        a,
        g
      ), $e = !1, T = l.memoizedState, u.state = T, au(l, a, u, n), eu();
      var D = l.memoizedState;
      i !== H || T !== D || $e || t !== null && t.dependencies !== null && ii(t.dependencies) ? (typeof f == "function" && (Mf(
        l,
        e,
        f,
        a
      ), D = l.memoizedState), (U = $e || Ds(
        l,
        e,
        U,
        a,
        T,
        D,
        g
      ) || t !== null && t.dependencies !== null && ii(t.dependencies)) ? (M || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, D, g), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        D,
        g
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && T === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && T === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = D), u.props = a, u.state = D, u.context = g, a = U) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && T === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && T === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return u = a, Ti(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = Na(
      l,
      t.child,
      null,
      n
    ), l.child = Na(
      l,
      null,
      e,
      n
    )) : gl(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = Te(
      t,
      l,
      n
    ), t;
  }
  function Vs(t, l, e, a) {
    return _a(), l.flags |= 256, gl(t, l, e, a), l.child;
  }
  var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _f(t) {
    return { baseLanes: t, cachePool: Nr() };
  }
  function Df(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Nl), t;
  }
  function Ks(t, l, e) {
    var a = l.pendingProps, n = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Vt.current & 2) !== 0), i && (n = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (pt) {
        if (n ? ta(l) : la(), (t = Bt) ? (t = t0(
          t,
          Jl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Je !== null ? { id: oe, overflow: re } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Tr(t), e.return = l, l.child = e, dl = l, Bt = null)) : t = null, t === null) throw We(l);
        return so(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, n ? (la(), n = l.mode, f = Ei(
        { mode: "hidden", children: f },
        n
      ), a = Ra(
        a,
        n,
        e,
        null
      ), f.return = l, a.return = l, f.sibling = a, l.child = f, a = l.child, a.memoizedState = _f(e), a.childLanes = Df(
        t,
        i,
        e
      ), l.memoizedState = Rf, fu(null, a)) : (ta(l), Of(l, f));
    }
    var g = t.memoizedState;
    if (g !== null && (f = g.dehydrated, f !== null)) {
      if (u)
        l.flags & 256 ? (ta(l), l.flags &= -257, l = jf(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (la(), l.child = t.child, l.flags |= 128, l = null) : (la(), f = a.fallback, n = l.mode, a = Ei(
          { mode: "visible", children: a.children },
          n
        ), f = Ra(
          f,
          n,
          e,
          null
        ), f.flags |= 2, a.return = l, f.return = l, a.sibling = f, l.child = a, Na(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = _f(e), a.childLanes = Df(
          t,
          i,
          e
        ), l.memoizedState = Rf, l = fu(null, a));
      else if (ta(l), so(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var M = i.dgst;
        i = M, a = Error(o(419)), a.stack = "", a.digest = i, kn({ value: a, source: null, stack: null }), l = jf(
          t,
          l,
          e
        );
      } else if (Pt || fn(t, l, e, !1), i = (e & t.childLanes) !== 0, Pt || i) {
        if (i = Ct, i !== null && (a = Gu(i, e), a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, Ea(t, a), Rl(i, t, a), Tf;
        ro(f) || Hi(), l = jf(
          t,
          l,
          e
        );
      } else
        ro(f) ? (l.flags |= 192, l.child = t.child, l = null) : (t = g.treeContext, Bt = Wl(
          f.nextSibling
        ), dl = l, pt = !0, Fe = null, Jl = !1, t !== null && _r(l, t), l = Of(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return n ? (la(), f = a.fallback, n = l.mode, g = t.child, M = g.sibling, a = be(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? f = be(
      M,
      f
    ) : (f = Ra(
      f,
      n,
      e,
      null
    ), f.flags |= 2), f.return = l, a.return = l, a.sibling = f, l.child = a, fu(null, a), a = l.child, f = t.child.memoizedState, f === null ? f = _f(e) : (n = f.cachePool, n !== null ? (g = $t._currentValue, n = n.parent !== g ? { parent: g, pool: g } : n) : n = Nr(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: n
    }), a.memoizedState = f, a.childLanes = Df(
      t,
      i,
      e
    ), l.memoizedState = Rf, fu(t.child, a)) : (ta(l), e = t.child, t = e.sibling, e = be(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Of(t, l) {
    return l = Ei(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Ei(t, l) {
    return t = Ol(22, t, null, l), t.lanes = 0, t;
  }
  function jf(t, l, e) {
    return Na(l, t.child, null, e), t = Of(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Js(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Vc(t.return, l, e);
  }
  function Uf(t, l, e, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function Fs(t, l, e) {
    var a = l.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Vt.current, f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Y(Vt, i), gl(t, l, a, e), a = pt ? Wn : 0, !f && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Js(t, e, l);
        else if (t.tag === 19)
          Js(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (e = l.child, n = null; e !== null; )
          t = e.alternate, t !== null && gi(t) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), Uf(
          l,
          !1,
          n,
          e,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = l.child, l.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && gi(t) === null) {
            l.child = n;
            break;
          }
          t = n.sibling, n.sibling = e, e = n, n = t;
        }
        Uf(
          l,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        Uf(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Te(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), na |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (fn(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(o(153));
    if (l.child !== null) {
      for (t = l.child, e = be(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = be(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Cf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ii(t)));
  }
  function uh(t, l, e) {
    switch (l.tag) {
      case 3:
        Dt(l, l.stateNode.containerInfo), ke(l, $t, t.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        ae(l);
        break;
      case 4:
        Dt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ke(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, af(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ta(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Ks(t, l, e) : (ta(l), t = Te(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        ta(l);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (fn(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), n) {
          if (a)
            return Fs(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(Vt, Vt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, Gs(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        ke(l, $t, t.memoizedState.cache);
    }
    return Te(t, l, e);
  }
  function Ws(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Pt = !0;
      else {
        if (!Cf(t, e) && (l.flags & 128) === 0)
          return Pt = !1, uh(
            t,
            l,
            e
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, pt && (l.flags & 1048576) !== 0 && Rr(l, Wn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = Ua(l.elementType), l.type = t, typeof t == "function")
            Yc(t) ? (a = Ba(t, a), l.tag = 1, l = Zs(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = Ef(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === at) {
                l.tag = 11, l = Ys(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (n === I) {
                l.tag = 14, l = qs(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              }
            }
            throw l = xl(t) || t, Error(o(306, l, ""));
          }
        }
        return l;
      case 0:
        return Ef(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, n = Ba(
          a,
          l.pendingProps
        ), Zs(
          t,
          l,
          a,
          n,
          e
        );
      case 3:
        t: {
          if (Dt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = l.pendingProps;
          var u = l.memoizedState;
          n = u.element, Ic(t, l), au(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, ke(l, $t, a), a !== u.cache && Kc(
            l,
            [$t],
            e,
            !0
          ), eu(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Vs(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== n) {
              n = Zl(
                Error(o(424)),
                l
              ), kn(n), l = Vs(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Bt = Wl(t.firstChild), dl = l, pt = !0, Fe = null, Jl = !0, e = Gr(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (_a(), a === n) {
              l = Te(
                t,
                l,
                e
              );
              break t;
            }
            gl(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Ti(t, l), t === null ? (e = i0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : pt || (e = l.type, t = l.pendingProps, a = Xi(
          nt.current
        ).createElement(e), a[al] = l, a[pl] = t, ml(a, e, t), kt(a), l.stateNode = a) : l.memoizedState = i0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ae(l), t === null && pt && (a = l.stateNode = a0(
          l.type,
          l.pendingProps,
          nt.current
        ), dl = l, Jl = !0, n = Bt, oa(l.type) ? (ho = n, Bt = Wl(a.firstChild)) : Bt = n), gl(
          t,
          l,
          l.pendingProps.children,
          e
        ), Ti(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && pt && ((n = a = Bt) && (a = Hh(
          a,
          l.type,
          l.pendingProps,
          Jl
        ), a !== null ? (l.stateNode = a, dl = l, Bt = Wl(a.firstChild), Jl = !1, n = !0) : n = !1), n || We(l)), ae(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, co(n, u) ? a = null : i !== null && co(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = uf(
          t,
          l,
          k1,
          null,
          null,
          e
        ), zu._currentValue = n), Ti(t, l), gl(t, l, a, e), l.child;
      case 6:
        return t === null && pt && ((t = e = Bt) && (e = Bh(
          e,
          l.pendingProps,
          Jl
        ), e !== null ? (l.stateNode = e, dl = l, Bt = null, t = !0) : t = !1), t || We(l)), null;
      case 13:
        return Ks(t, l, e);
      case 4:
        return Dt(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = Na(
          l,
          null,
          a,
          e
        ) : gl(t, l, a, e), l.child;
      case 11:
        return Ys(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return gl(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return gl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return gl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, ke(l, l.type, a.value), gl(t, l, a.children, e), l.child;
      case 9:
        return n = l.type._context, a = l.pendingProps.children, Oa(l), n = hl(n), a = a(n), l.flags |= 1, gl(t, l, a, e), l.child;
      case 14:
        return qs(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Ls(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Fs(t, l, e);
      case 31:
        return nh(t, l, e);
      case 22:
        return Gs(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Oa(l), a = hl($t), t === null ? (n = Wc(), n === null && (n = Ct, u = Jc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = { parent: a, cache: n }, $c(l), ke(l, $t, n)) : ((t.lanes & e) !== 0 && (Ic(t, l), au(l, null, null, e), eu()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), ke(l, $t, a)) : (a = u.cache, ke(l, $t, a), a !== n.cache && Kc(
          l,
          [$t],
          e,
          !0
        ))), gl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(o(156, l.tag));
  }
  function Ee(t) {
    t.flags |= 4;
  }
  function Nf(t, l, e, a, n) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Md()) t.flags |= 8192;
        else
          throw Ca = ri, kc;
    } else t.flags &= -16777217;
  }
  function ks(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !s0(l))
      if (Md()) t.flags |= 8192;
      else
        throw Ca = ri, kc;
  }
  function Ri(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? qu() : 536870912, t.lanes |= l, Sn |= l);
  }
  function ou(t, l) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Yt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function ih(t, l, e) {
    var a = l.pendingProps;
    switch (wc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Yt(l), null;
      case 1:
        return Yt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Me($t), Ht(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (cn(l) ? Ee(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Qc())), Yt(l), null;
      case 26:
        var n = l.type, u = l.memoizedState;
        return t === null ? (Ee(l), u !== null ? (Yt(l), ks(l, u)) : (Yt(l), Nf(
          l,
          n,
          null,
          a,
          e
        ))) : u ? u !== t.memoizedState ? (Ee(l), Yt(l), ks(l, u)) : (Yt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ee(l), Yt(l), Nf(
          l,
          n,
          t,
          a,
          e
        )), null;
      case 27:
        if (ne(l), e = nt.current, n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Yt(l), null;
          }
          t = G.current, cn(l) ? Dr(l) : (t = a0(n, a, e), l.stateNode = t, Ee(l));
        }
        return Yt(l), null;
      case 5:
        if (ne(l), n = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Ee(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Yt(l), null;
          }
          if (u = G.current, cn(l))
            Dr(l);
          else {
            var i = Xi(
              nt.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[al] = l, u[pl] = a;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = u;
            t: switch (ml(u, n, a), n) {
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
            a && Ee(l);
          }
        }
        return Yt(l), Nf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Ee(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(o(166));
          if (t = nt.current, cn(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, n = dl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[al] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Kd(t.nodeValue, e)), t || We(l, !0);
          } else
            t = Xi(t).createTextNode(
              a
            ), t[al] = l, l.stateNode = t;
        }
        return Yt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = cn(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[al] = l;
            } else
              _a(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Yt(l), t = !1;
          } else
            e = Qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (Ul(l), l) : (Ul(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Yt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = cn(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(o(318));
              if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[al] = l;
            } else
              _a(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Yt(l), n = !1;
          } else
            n = Qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return l.flags & 256 ? (Ul(l), l) : (Ul(l), null);
        }
        return Ul(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Ri(l, l.updateQueue), Yt(l), null);
      case 4:
        return Ht(), t === null && eo(l.stateNode.containerInfo), Yt(l), null;
      case 10:
        return Me(l.type), Yt(l), null;
      case 19:
        if (_(Vt), a = l.memoizedState, a === null) return Yt(l), null;
        if (n = (l.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) ou(a, !1);
          else {
            if (Xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = gi(t), u !== null) {
                  for (l.flags |= 128, ou(a, !1), t = u.updateQueue, l.updateQueue = t, Ri(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Ar(e, t), e = e.sibling;
                  return Y(
                    Vt,
                    Vt.current & 1 | 2
                  ), pt && Se(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Zt() > Ui && (l.flags |= 128, n = !0, ou(a, !1), l.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = gi(u), t !== null) {
              if (l.flags |= 128, n = !0, t = t.updateQueue, l.updateQueue = t, Ri(l, t), ou(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !pt)
                return Yt(l), null;
            } else
              2 * Zt() - a.renderingStartTime > Ui && e !== 536870912 && (l.flags |= 128, n = !0, ou(a, !1), l.lanes = 4194304);
          a.isBackwards ? (u.sibling = l.child, l.child = u) : (t = a.last, t !== null ? t.sibling = u : l.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Zt(), t.sibling = null, e = Vt.current, Y(
          Vt,
          n ? e & 1 | 2 : e & 1
        ), pt && Se(l, a.treeForkCount), t) : (Yt(l), null);
      case 22:
      case 23:
        return Ul(l), ef(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Yt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Yt(l), e = l.updateQueue, e !== null && Ri(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && _(ja), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Me($t), Yt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, l.tag));
  }
  function ch(t, l) {
    switch (wc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Me($t), Ht(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return ne(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (Ul(l), l.alternate === null)
            throw Error(o(340));
          _a();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (Ul(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(o(340));
          _a();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return _(Vt), null;
      case 4:
        return Ht(), null;
      case 10:
        return Me(l.type), null;
      case 22:
      case 23:
        return Ul(l), ef(), t !== null && _(ja), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Me($t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $s(t, l) {
    switch (wc(l), l.tag) {
      case 3:
        Me($t), Ht();
        break;
      case 26:
      case 27:
      case 5:
        ne(l);
        break;
      case 4:
        Ht();
        break;
      case 31:
        l.memoizedState !== null && Ul(l);
        break;
      case 13:
        Ul(l);
        break;
      case 19:
        _(Vt);
        break;
      case 10:
        Me(l.type);
        break;
      case 22:
      case 23:
        Ul(l), ef(), t !== null && _(ja);
        break;
      case 24:
        Me($t);
    }
  }
  function ru(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (f) {
      _t(l, l.return, f);
    }
  }
  function ea(t, l, e) {
    try {
      var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, n = l;
              var g = e, M = f;
              try {
                M();
              } catch (U) {
                _t(
                  n,
                  g,
                  U
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (U) {
      _t(l, l.return, U);
    }
  }
  function Is(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Xr(l, e);
      } catch (a) {
        _t(t, t.return, a);
      }
    }
  }
  function Ps(t, l, e) {
    e.props = Ba(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      _t(t, l, a);
    }
  }
  function su(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
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
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      _t(t, l, n);
    }
  }
  function se(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          _t(t, l, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          _t(t, l, n);
        }
      else e.current = null;
  }
  function td(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      _t(t, t.return, n);
    }
  }
  function Hf(t, l, e) {
    try {
      var a = t.stateNode;
      Dh(a, t.type, e, l), a[pl] = l;
    } catch (n) {
      _t(t, t.return, n);
    }
  }
  function ld(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && oa(t.type) || t.tag === 4;
  }
  function Bf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ld(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && oa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yf(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = pe));
    else if (a !== 4 && (a === 27 && oa(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Yf(t, l, e), t = t.sibling; t !== null; )
        Yf(t, l, e), t = t.sibling;
  }
  function _i(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && oa(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (_i(t, l, e), t = t.sibling; t !== null; )
        _i(t, l, e), t = t.sibling;
  }
  function ed(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length; )
        l.removeAttributeNode(n[0]);
      ml(l, a, e), l[al] = t, l[pl] = e;
    } catch (u) {
      _t(t, t.return, u);
    }
  }
  var Re = !1, tl = !1, qf = !1, ad = typeof WeakSet == "function" ? WeakSet : Set, ol = null;
  function fh(t, l) {
    if (t = t.containerInfo, uo = Wi, t = mr(t), Oc(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, f = -1, g = -1, M = 0, U = 0, H = t, T = null;
            l: for (; ; ) {
              for (var D; H !== e || n !== 0 && H.nodeType !== 3 || (f = i + n), H !== u || a !== 0 && H.nodeType !== 3 || (g = i + a), H.nodeType === 3 && (i += H.nodeValue.length), (D = H.firstChild) !== null; )
                T = H, H = D;
              for (; ; ) {
                if (H === t) break l;
                if (T === e && ++M === n && (f = i), T === u && ++U === a && (g = i), (D = H.nextSibling) !== null) break;
                H = T, T = H.parentNode;
              }
              H = D;
            }
            e = f === -1 || g === -1 ? null : { start: f, end: g };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (io = { focusedElem: t, selectionRange: e }, Wi = !1, ol = l; ol !== null; )
      if (l = ol, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, ol = t;
      else
        for (; ol !== null; ) {
          switch (l = ol, u = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  n = t[e], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, e = l, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var Q = Ba(
                    e.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch ($) {
                  _t(
                    e,
                    e.return,
                    $
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  oo(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      oo(t);
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
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, ol = t;
            break;
          }
          ol = l.return;
        }
  }
  function nd(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e), a & 4 && ru(5, e);
        break;
      case 1:
        if (De(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              _t(e, e.return, i);
            }
          else {
            var n = Ba(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              _t(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && Is(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if (De(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Xr(t, l);
          } catch (i) {
            _t(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && ed(e);
      case 26:
      case 5:
        De(t, e), l === null && a & 4 && td(e), a & 512 && su(e, e.return);
        break;
      case 12:
        De(t, e);
        break;
      case 31:
        De(t, e), a & 4 && cd(t, e);
        break;
      case 13:
        De(t, e), a & 4 && fd(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = ph.bind(
          null,
          e
        ), Yh(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Re, !a) {
          l = l !== null && l.memoizedState !== null || tl, n = Re;
          var u = tl;
          Re = a, (tl = l) && !u ? Oe(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : De(t, e), Re = n, tl = u;
        }
        break;
      case 30:
        break;
      default:
        De(t, e);
    }
  }
  function ud(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, ud(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && xa(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Gt = null, zl = !1;
  function _e(t, l, e) {
    for (e = e.child; e !== null; )
      id(t, l, e), e = e.sibling;
  }
  function id(t, l, e) {
    if (cl && typeof cl.onCommitFiberUnmount == "function")
      try {
        cl.onCommitFiberUnmount(Tt, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        tl || se(e, l), _e(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        tl || se(e, l);
        var a = Gt, n = zl;
        oa(e.type) && (Gt = e.stateNode, zl = !1), _e(
          t,
          l,
          e
        ), Su(e.stateNode), Gt = a, zl = n;
        break;
      case 5:
        tl || se(e, l);
      case 6:
        if (a = Gt, n = zl, Gt = null, _e(
          t,
          l,
          e
        ), Gt = a, zl = n, Gt !== null)
          if (zl)
            try {
              (Gt.nodeType === 9 ? Gt.body : Gt.nodeName === "HTML" ? Gt.ownerDocument.body : Gt).removeChild(e.stateNode);
            } catch (u) {
              _t(
                e,
                l,
                u
              );
            }
          else
            try {
              Gt.removeChild(e.stateNode);
            } catch (u) {
              _t(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        Gt !== null && (zl ? (t = Gt, Id(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), _n(t)) : Id(Gt, e.stateNode));
        break;
      case 4:
        a = Gt, n = zl, Gt = e.stateNode.containerInfo, zl = !0, _e(
          t,
          l,
          e
        ), Gt = a, zl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ea(2, e, l), tl || ea(4, e, l), _e(
          t,
          l,
          e
        );
        break;
      case 1:
        tl || (se(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Ps(
          e,
          l,
          a
        )), _e(
          t,
          l,
          e
        );
        break;
      case 21:
        _e(
          t,
          l,
          e
        );
        break;
      case 22:
        tl = (a = tl) || e.memoizedState !== null, _e(
          t,
          l,
          e
        ), tl = a;
        break;
      default:
        _e(
          t,
          l,
          e
        );
    }
  }
  function cd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        _n(t);
      } catch (e) {
        _t(l, l.return, e);
      }
    }
  }
  function fd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        _n(t);
      } catch (e) {
        _t(l, l.return, e);
      }
  }
  function oh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new ad()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new ad()), l;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Di(t, l) {
    var e = oh(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = vh.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Al(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = t, i = l, f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (oa(f.type)) {
                Gt = f.stateNode, zl = !1;
                break t;
              }
              break;
            case 5:
              Gt = f.stateNode, zl = !1;
              break t;
            case 3:
            case 4:
              Gt = f.stateNode.containerInfo, zl = !0;
              break t;
          }
          f = f.return;
        }
        if (Gt === null) throw Error(o(160));
        id(u, i, n), Gt = null, zl = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        od(l, t), l = l.sibling;
  }
  var Pl = null;
  function od(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Al(l, t), Tl(t), a & 4 && (ea(3, t, t.return), ru(3, t), ea(5, t, t.return));
        break;
      case 1:
        Al(l, t), Tl(t), a & 512 && (tl || e === null || se(e, e.return)), a & 64 && Re && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Pl;
        if (Al(l, t), Tl(t), a & 512 && (tl || e === null || se(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, n = n.ownerDocument || n;
                  l: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Qe] || u[al] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), ml(u, a, e), u[al] = t, kt(u), a = u;
                      break t;
                    case "link":
                      var i = o0(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), ml(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = o0(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      u = n.createElement(a), ml(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[al] = t, kt(u), a = u;
                }
                t.stateNode = a;
              } else
                r0(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = f0(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? r0(
              n,
              t.type,
              t.stateNode
            ) : f0(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Hf(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        Al(l, t), Tl(t), a & 512 && (tl || e === null || se(e, e.return)), e !== null && a & 4 && Hf(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (Al(l, t), Tl(t), a & 512 && (tl || e === null || se(e, e.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            ka(n, "");
          } catch (Q) {
            _t(t, t.return, Q);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Hf(
          t,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (qf = !0);
        break;
      case 6:
        if (Al(l, t), Tl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (Q) {
            _t(t, t.return, Q);
          }
        }
        break;
      case 3:
        if (Vi = null, n = Pl, Pl = Qi(l.containerInfo), Al(l, t), Pl = n, Tl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            _n(l.containerInfo);
          } catch (Q) {
            _t(t, t.return, Q);
          }
        qf && (qf = !1, rd(t));
        break;
      case 4:
        a = Pl, Pl = Qi(
          t.stateNode.containerInfo
        ), Al(l, t), Tl(t), Pl = a;
        break;
      case 12:
        Al(l, t), Tl(t);
        break;
      case 31:
        Al(l, t), Tl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
        break;
      case 13:
        Al(l, t), Tl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (ji = Zt()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var g = e !== null && e.memoizedState !== null, M = Re, U = tl;
        if (Re = M || n, tl = U || g, Al(l, t), tl = U, Re = M, Tl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || g || Re || tl || Ya(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                g = e = l;
                try {
                  if (u = g.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = g.stateNode;
                    var H = g.memoizedProps.style, T = H != null && H.hasOwnProperty("display") ? H.display : null;
                    f.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (Q) {
                  _t(g, g.return, Q);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                g = l;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (Q) {
                  _t(g, g.return, Q);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                g = l;
                try {
                  var D = g.stateNode;
                  n ? Pd(D, !0) : Pd(g.stateNode, !1);
                } catch (Q) {
                  _t(g, g.return, Q);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Di(t, e))));
        break;
      case 19:
        Al(l, t), Tl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Al(l, t), Tl(t);
    }
  }
  function Tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (ld(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Bf(t);
            _i(t, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ka(i, ""), e.flags &= -33);
            var f = Bf(t);
            _i(t, f, i);
            break;
          case 3:
          case 4:
            var g = e.stateNode.containerInfo, M = Bf(t);
            Yf(
              t,
              M,
              g
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        _t(t, t.return, U);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function rd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        rd(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function De(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        nd(t, l.alternate, l), l = l.sibling;
  }
  function Ya(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, l, l.return), Ya(l);
          break;
        case 1:
          se(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Ps(
            l,
            l.return,
            e
          ), Ya(l);
          break;
        case 27:
          Su(l.stateNode);
        case 26:
        case 5:
          se(l, l.return), Ya(l);
          break;
        case 22:
          l.memoizedState === null && Ya(l);
          break;
        case 30:
          Ya(l);
          break;
        default:
          Ya(l);
      }
      t = t.sibling;
    }
  }
  function Oe(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, n = t, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Oe(
            n,
            u,
            e
          ), ru(4, u);
          break;
        case 1:
          if (Oe(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (M) {
              _t(a, a.return, M);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  wr(g[n], f);
            } catch (M) {
              _t(a, a.return, M);
            }
          }
          e && i & 64 && Is(u), su(u, u.return);
          break;
        case 27:
          ed(u);
        case 26:
        case 5:
          Oe(
            n,
            u,
            e
          ), e && a === null && i & 4 && td(u), su(u, u.return);
          break;
        case 12:
          Oe(
            n,
            u,
            e
          );
          break;
        case 31:
          Oe(
            n,
            u,
            e
          ), e && i & 4 && cd(n, u);
          break;
        case 13:
          Oe(
            n,
            u,
            e
          ), e && i & 4 && fd(n, u);
          break;
        case 22:
          u.memoizedState === null && Oe(
            n,
            u,
            e
          ), su(u, u.return);
          break;
        case 30:
          break;
        default:
          Oe(
            n,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Lf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && $n(e));
  }
  function Gf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && $n(t));
  }
  function te(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        sd(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function sd(t, l, e, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(
          t,
          l,
          e,
          a
        ), n & 2048 && ru(9, l);
        break;
      case 1:
        te(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        te(
          t,
          l,
          e,
          a
        ), n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && $n(t)));
        break;
      case 12:
        if (n & 2048) {
          te(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var u = l.memoizedProps, i = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (g) {
            _t(l, l.return, g);
          }
        } else
          te(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        te(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        te(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? te(
          t,
          l,
          e,
          a
        ) : du(t, l) : u._visibility & 2 ? te(
          t,
          l,
          e,
          a
        ) : (u._visibility |= 2, pn(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Lf(i, l);
        break;
      case 24:
        te(
          t,
          l,
          e,
          a
        ), n & 2048 && Gf(l.alternate, l);
        break;
      default:
        te(
          t,
          l,
          e,
          a
        );
    }
  }
  function pn(t, l, e, a, n) {
    for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = t, i = l, f = e, g = a, M = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pn(
            u,
            i,
            f,
            g,
            n
          ), ru(8, i);
          break;
        case 23:
          break;
        case 22:
          var U = i.stateNode;
          i.memoizedState !== null ? U._visibility & 2 ? pn(
            u,
            i,
            f,
            g,
            n
          ) : du(
            u,
            i
          ) : (U._visibility |= 2, pn(
            u,
            i,
            f,
            g,
            n
          )), n && M & 2048 && Lf(
            i.alternate,
            i
          );
          break;
        case 24:
          pn(
            u,
            i,
            f,
            g,
            n
          ), n && M & 2048 && Gf(i.alternate, i);
          break;
        default:
          pn(
            u,
            i,
            f,
            g,
            n
          );
      }
      l = l.sibling;
    }
  }
  function du(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            du(e, a), n & 2048 && Lf(
              a.alternate,
              a
            );
            break;
          case 24:
            du(e, a), n & 2048 && Gf(a.alternate, a);
            break;
          default:
            du(e, a);
        }
        l = l.sibling;
      }
  }
  var hu = 8192;
  function vn(t, l, e) {
    if (t.subtreeFlags & hu)
      for (t = t.child; t !== null; )
        dd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function dd(t, l, e) {
    switch (t.tag) {
      case 26:
        vn(
          t,
          l,
          e
        ), t.flags & hu && t.memoizedState !== null && Wh(
          e,
          Pl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        vn(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var a = Pl;
        Pl = Qi(t.stateNode.containerInfo), vn(
          t,
          l,
          e
        ), Pl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = hu, hu = 16777216, vn(
          t,
          l,
          e
        ), hu = a) : vn(
          t,
          l,
          e
        ));
        break;
      default:
        vn(
          t,
          l,
          e
        );
    }
  }
  function hd(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function gu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ol = a, md(
            a,
            t
          );
        }
      hd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        gd(t), t = t.sibling;
  }
  function gd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gu(t), t.flags & 2048 && ea(9, t, t.return);
        break;
      case 3:
        gu(t);
        break;
      case 12:
        gu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Oi(t)) : gu(t);
        break;
      default:
        gu(t);
    }
  }
  function Oi(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ol = a, md(
            a,
            t
          );
        }
      hd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, l, l.return), Oi(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Oi(l));
          break;
        default:
          Oi(l);
      }
      t = t.sibling;
    }
  }
  function md(t, l) {
    for (; ol !== null; ) {
      var e = ol;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $n(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, ol = a;
      else
        t: for (e = t; ol !== null; ) {
          a = ol;
          var n = a.sibling, u = a.return;
          if (ud(a), a === e) {
            ol = null;
            break t;
          }
          if (n !== null) {
            n.return = u, ol = n;
            break t;
          }
          ol = u;
        }
    }
  }
  var rh = {
    getCacheForType: function(t) {
      var l = hl($t), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return hl($t).controller.signal;
    }
  }, sh = typeof WeakMap == "function" ? WeakMap : Map, zt = 0, Ct = null, dt = null, gt = 0, Rt = 0, Cl = null, aa = !1, bn = !1, wf = !1, je = 0, Xt = 0, na = 0, qa = 0, Xf = 0, Nl = 0, Sn = 0, mu = null, El = null, Qf = !1, ji = 0, yd = 0, Ui = 1 / 0, Ci = null, ua = null, nl = 0, ia = null, xn = null, Ue = 0, Zf = 0, Vf = null, pd = null, yu = 0, Kf = null;
  function Hl() {
    return (zt & 2) !== 0 && gt !== 0 ? gt & -gt : j.T !== null ? If() : ge();
  }
  function vd() {
    if (Nl === 0)
      if ((gt & 536870912) === 0 || pt) {
        var t = Ge;
        Ge <<= 1, (Ge & 3932160) === 0 && (Ge = 262144), Nl = t;
      } else Nl = 536870912;
    return t = jl.current, t !== null && (t.flags |= 32), Nl;
  }
  function Rl(t, l, e) {
    (t === Ct && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null) && (Mn(t, 0), ca(
      t,
      gt,
      Nl,
      !1
    )), va(t, e), ((zt & 2) === 0 || t !== Ct) && (t === Ct && ((zt & 2) === 0 && (qa |= e), Xt === 4 && ca(
      t,
      gt,
      Nl,
      !1
    )), de(t));
  }
  function bd(t, l, e) {
    if ((zt & 6) !== 0) throw Error(o(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || we(t, l), n = a ? gh(t, l) : Ff(t, l, !0), u = a;
    do {
      if (n === 0) {
        bn && !a && ca(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !dh(e)) {
          n = Ff(t, l, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = l, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              n = mu;
              var g = f.current.memoizedState.isDehydrated;
              if (g && (Mn(f, i).flags |= 256), i = Ff(
                f,
                i,
                !1
              ), i !== 2) {
                if (wf && !g) {
                  f.errorRecoveryDisabledLanes |= u, qa |= u, n = 4;
                  break t;
                }
                u = El, El = n, u !== null && (El === null ? El = u : El.push.apply(
                  El,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Mn(t, 0), ca(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ca(
                a,
                l,
                Nl,
                !aa
              );
              break t;
            case 2:
              El = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((l & 62914560) === l && (n = ji + 300 - Zt(), 10 < n)) {
            if (ca(
              a,
              l,
              Nl,
              !aa
            ), pa(a, 0, !0) !== 0) break t;
            Ue = l, a.timeoutHandle = kd(
              Sd.bind(
                null,
                a,
                e,
                El,
                Ci,
                Qf,
                l,
                Nl,
                qa,
                Sn,
                aa,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Sd(
            a,
            e,
            El,
            Ci,
            Qf,
            l,
            Nl,
            qa,
            Sn,
            aa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    de(t);
  }
  function Sd(t, l, e, a, n, u, i, f, g, M, U, H, T, D) {
    if (t.timeoutHandle = -1, H = l.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pe
      }, dd(
        l,
        u,
        H
      );
      var Q = (u & 62914560) === u ? ji - Zt() : (u & 4194048) === u ? yd - Zt() : 0;
      if (Q = kh(
        H,
        Q
      ), Q !== null) {
        Ue = u, t.cancelPendingCommit = Q(
          _d.bind(
            null,
            t,
            l,
            u,
            e,
            a,
            n,
            i,
            f,
            g,
            U,
            H,
            null,
            T,
            D
          )
        ), ca(t, u, i, !M);
        return;
      }
    }
    _d(
      t,
      l,
      u,
      e,
      a,
      n,
      i,
      f,
      g
    );
  }
  function dh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Dl(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ca(t, l, e, a) {
    l &= ~Xf, l &= ~qa, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var n = l; 0 < n; ) {
      var u = 31 - fl(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Va(t, e, l);
  }
  function Ni() {
    return (zt & 6) === 0 ? (pu(0), !1) : !0;
  }
  function Jf() {
    if (dt !== null) {
      if (Rt === 0)
        var t = dt.return;
      else
        t = dt, xe = Da = null, of(t), dn = null, Pn = 0, t = dt;
      for (; t !== null; )
        $s(t.alternate, t), t = t.return;
      dt = null;
    }
  }
  function Mn(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, Uh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Ue = 0, Jf(), Ct = t, dt = e = be(t.current, null), gt = l, Rt = 0, Cl = null, aa = !1, bn = we(t, l), wf = !1, Sn = Nl = Xf = qa = na = Xt = 0, El = mu = null, Qf = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var n = 31 - fl(a), u = 1 << n;
        l |= t[n], a &= ~u;
      }
    return je = l, li(), e;
  }
  function xd(t, l) {
    ct = null, j.H = cu, l === sn || l === oi ? (l = Yr(), Rt = 3) : l === kc ? (l = Yr(), Rt = 4) : Rt = l === Tf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Cl = l, dt === null && (Xt = 1, zi(
      t,
      Zl(l, t.current)
    ));
  }
  function Md() {
    var t = jl.current;
    return t === null ? !0 : (gt & 4194048) === gt ? Fl === null : (gt & 62914560) === gt || (gt & 536870912) !== 0 ? t === Fl : !1;
  }
  function zd() {
    var t = j.H;
    return j.H = cu, t === null ? cu : t;
  }
  function Ad() {
    var t = j.A;
    return j.A = rh, t;
  }
  function Hi() {
    Xt = 4, aa || (gt & 4194048) !== gt && jl.current !== null || (bn = !0), (na & 134217727) === 0 && (qa & 134217727) === 0 || Ct === null || ca(
      Ct,
      gt,
      Nl,
      !1
    );
  }
  function Ff(t, l, e) {
    var a = zt;
    zt |= 2;
    var n = zd(), u = Ad();
    (Ct !== t || gt !== l) && (Ci = null, Mn(t, l)), l = !1;
    var i = Xt;
    t: do
      try {
        if (Rt !== 0 && dt !== null) {
          var f = dt, g = Cl;
          switch (Rt) {
            case 8:
              Jf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              jl.current === null && (l = !0);
              var M = Rt;
              if (Rt = 0, Cl = null, zn(t, f, g, M), e && bn) {
                i = 0;
                break t;
              }
              break;
            default:
              M = Rt, Rt = 0, Cl = null, zn(t, f, g, M);
          }
        }
        hh(), i = Xt;
        break;
      } catch (U) {
        xd(t, U);
      }
    while (!0);
    return l && t.shellSuspendCounter++, xe = Da = null, zt = a, j.H = n, j.A = u, dt === null && (Ct = null, gt = 0, li()), i;
  }
  function hh() {
    for (; dt !== null; ) Td(dt);
  }
  function gh(t, l) {
    var e = zt;
    zt |= 2;
    var a = zd(), n = Ad();
    Ct !== t || gt !== l ? (Ci = null, Ui = Zt() + 500, Mn(t, l)) : bn = we(
      t,
      l
    );
    t: do
      try {
        if (Rt !== 0 && dt !== null) {
          l = dt;
          var u = Cl;
          l: switch (Rt) {
            case 1:
              Rt = 0, Cl = null, zn(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (Hr(u)) {
                Rt = 0, Cl = null, Ed(l);
                break;
              }
              l = function() {
                Rt !== 2 && Rt !== 9 || Ct !== t || (Rt = 7), de(t);
              }, u.then(l, l);
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              Hr(u) ? (Rt = 0, Cl = null, Ed(l)) : (Rt = 0, Cl = null, zn(t, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (dt.tag) {
                case 26:
                  i = dt.memoizedState;
                case 5:
                case 27:
                  var f = dt;
                  if (i ? s0(i) : f.stateNode.complete) {
                    Rt = 0, Cl = null;
                    var g = f.sibling;
                    if (g !== null) dt = g;
                    else {
                      var M = f.return;
                      M !== null ? (dt = M, Bi(M)) : dt = null;
                    }
                    break l;
                  }
              }
              Rt = 0, Cl = null, zn(t, l, u, 5);
              break;
            case 6:
              Rt = 0, Cl = null, zn(t, l, u, 6);
              break;
            case 8:
              Jf(), Xt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        mh();
        break;
      } catch (U) {
        xd(t, U);
      }
    while (!0);
    return xe = Da = null, j.H = a, j.A = n, zt = e, dt !== null ? 0 : (Ct = null, gt = 0, li(), Xt);
  }
  function mh() {
    for (; dt !== null && !K(); )
      Td(dt);
  }
  function Td(t) {
    var l = Ws(t.alternate, t, je);
    t.memoizedProps = t.pendingProps, l === null ? Bi(t) : dt = l;
  }
  function Ed(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Qs(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          gt
        );
        break;
      case 11:
        l = Qs(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          gt
        );
        break;
      case 5:
        of(l);
      default:
        $s(e, l), l = dt = Ar(l, je), l = Ws(e, l, je);
    }
    t.memoizedProps = t.pendingProps, l === null ? Bi(t) : dt = l;
  }
  function zn(t, l, e, a) {
    xe = Da = null, of(l), dn = null, Pn = 0;
    var n = l.return;
    try {
      if (ah(
        t,
        n,
        l,
        e,
        gt
      )) {
        Xt = 1, zi(
          t,
          Zl(e, t.current)
        ), dt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw dt = n, u;
      Xt = 1, zi(
        t,
        Zl(e, t.current)
      ), dt = null;
      return;
    }
    l.flags & 32768 ? (pt || a === 1 ? t = !0 : bn || (gt & 536870912) !== 0 ? t = !1 : (aa = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = jl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Rd(l, t)) : Bi(l);
  }
  function Bi(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Rd(
          l,
          aa
        );
        return;
      }
      t = l.return;
      var e = ih(
        l.alternate,
        l,
        je
      );
      if (e !== null) {
        dt = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        dt = l;
        return;
      }
      dt = l = t;
    } while (l !== null);
    Xt === 0 && (Xt = 5);
  }
  function Rd(t, l) {
    do {
      var e = ch(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, dt = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        dt = t;
        return;
      }
      dt = t = e;
    } while (t !== null);
    Xt = 6, dt = null;
  }
  function _d(t, l, e, a, n, u, i, f, g) {
    t.cancelPendingCommit = null;
    do
      Yi();
    while (nl !== 0);
    if ((zt & 6) !== 0) throw Error(o(327));
    if (l !== null) {
      if (l === t.current) throw Error(o(177));
      if (u = l.lanes | l.childLanes, u |= Hc, qn(
        t,
        e,
        u,
        i,
        f,
        g
      ), t === Ct && (dt = Ct = null, gt = 0), xn = l, ia = t, Ue = e, Zf = u, Vf = n, pd = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, bh(Le, function() {
        return Cd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, n = L.p, L.p = 2, i = zt, zt |= 4;
        try {
          fh(t, l, e);
        } finally {
          zt = i, L.p = n, j.T = a;
        }
      }
      nl = 1, Dd(), Od(), jd();
    }
  }
  function Dd() {
    if (nl === 1) {
      nl = 0;
      var t = ia, l = xn, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = j.T, j.T = null;
        var a = L.p;
        L.p = 2;
        var n = zt;
        zt |= 4;
        try {
          od(l, t);
          var u = io, i = mr(t.containerInfo), f = u.focusedElem, g = u.selectionRange;
          if (i !== f && f && f.ownerDocument && gr(
            f.ownerDocument.documentElement,
            f
          )) {
            if (g !== null && Oc(f)) {
              var M = g.start, U = g.end;
              if (U === void 0 && (U = M), "selectionStart" in f)
                f.selectionStart = M, f.selectionEnd = Math.min(
                  U,
                  f.value.length
                );
              else {
                var H = f.ownerDocument || document, T = H && H.defaultView || window;
                if (T.getSelection) {
                  var D = T.getSelection(), Q = f.textContent.length, $ = Math.min(g.start, Q), Ut = g.end === void 0 ? $ : Math.min(g.end, Q);
                  !D.extend && $ > Ut && (i = Ut, Ut = $, $ = i);
                  var S = hr(
                    f,
                    $
                  ), b = hr(
                    f,
                    Ut
                  );
                  if (S && b && (D.rangeCount !== 1 || D.anchorNode !== S.node || D.anchorOffset !== S.offset || D.focusNode !== b.node || D.focusOffset !== b.offset)) {
                    var x = H.createRange();
                    x.setStart(S.node, S.offset), D.removeAllRanges(), $ > Ut ? (D.addRange(x), D.extend(b.node, b.offset)) : (x.setEnd(b.node, b.offset), D.addRange(x));
                  }
                }
              }
            }
            for (H = [], D = f; D = D.parentNode; )
              D.nodeType === 1 && H.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < H.length; f++) {
              var C = H[f];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          Wi = !!uo, io = uo = null;
        } finally {
          zt = n, L.p = a, j.T = e;
        }
      }
      t.current = l, nl = 2;
    }
  }
  function Od() {
    if (nl === 2) {
      nl = 0;
      var t = ia, l = xn, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var a = L.p;
        L.p = 2;
        var n = zt;
        zt |= 4;
        try {
          nd(t, l.alternate, l);
        } finally {
          zt = n, L.p = a, j.T = e;
        }
      }
      nl = 3;
    }
  }
  function jd() {
    if (nl === 4 || nl === 3) {
      nl = 0, il();
      var t = ia, l = xn, e = Ue, a = pd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? nl = 5 : (nl = 0, xn = ia = null, Ud(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ua = null), ba(e), l = l.stateNode, cl && typeof cl.onCommitFiberRoot == "function")
        try {
          cl.onCommitFiberRoot(
            Tt,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = j.T, n = L.p, L.p = 2, j.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          j.T = l, L.p = n;
        }
      }
      (Ue & 3) !== 0 && Yi(), de(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === Kf ? yu++ : (yu = 0, Kf = t) : yu = 0, pu(0);
    }
  }
  function Ud(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, $n(l)));
  }
  function Yi() {
    return Dd(), Od(), jd(), Cd();
  }
  function Cd() {
    if (nl !== 5) return !1;
    var t = ia, l = Zf;
    Zf = 0;
    var e = ba(Ue), a = j.T, n = L.p;
    try {
      L.p = 32 > e ? 32 : e, j.T = null, e = Vf, Vf = null;
      var u = ia, i = Ue;
      if (nl = 0, xn = ia = null, Ue = 0, (zt & 6) !== 0) throw Error(o(331));
      var f = zt;
      if (zt |= 4, gd(u.current), sd(
        u,
        u.current,
        i,
        e
      ), zt = f, pu(0, !1), cl && typeof cl.onPostCommitFiberRoot == "function")
        try {
          cl.onPostCommitFiberRoot(Tt, u);
        } catch {
        }
      return !0;
    } finally {
      L.p = n, j.T = a, Ud(t, l);
    }
  }
  function Nd(t, l, e) {
    l = Zl(e, l), l = Af(t.stateNode, l, 2), t = Pe(t, l, 2), t !== null && (va(t, 2), de(t));
  }
  function _t(t, l, e) {
    if (t.tag === 3)
      Nd(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Nd(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ua === null || !ua.has(a))) {
            t = Zl(e, t), e = Hs(2), a = Pe(l, e, 2), a !== null && (Bs(
              e,
              a,
              l,
              t
            ), va(a, 2), de(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function Wf(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new sh();
      var n = /* @__PURE__ */ new Set();
      a.set(l, n);
    } else
      n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
    n.has(e) || (wf = !0, n.add(e), t = yh.bind(null, t, l, e), l.then(t, t));
  }
  function yh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Ct === t && (gt & e) === e && (Xt === 4 || Xt === 3 && (gt & 62914560) === gt && 300 > Zt() - ji ? (zt & 2) === 0 && Mn(t, 0) : Xf |= e, Sn === gt && (Sn = 0)), de(t);
  }
  function Hd(t, l) {
    l === 0 && (l = qu()), t = Ea(t, l), t !== null && (va(t, l), de(t));
  }
  function ph(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Hd(t, e);
  }
  function vh(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(l), Hd(t, e);
  }
  function bh(t, l) {
    return qe(t, l);
  }
  var qi = null, An = null, kf = !1, Li = !1, $f = !1, fa = 0;
  function de(t) {
    t !== An && t.next === null && (An === null ? qi = An = t : An = An.next = t), Li = !0, kf || (kf = !0, xh());
  }
  function pu(t, l) {
    if (!$f && Li) {
      $f = !0;
      do
        for (var e = !1, a = qi; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, f = a.pingedLanes;
              u = (1 << 31 - fl(42 | t) + 1) - 1, u &= n & ~(i & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Ld(a, u));
          } else
            u = gt, u = pa(
              a,
              a === Ct ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || we(a, u) || (e = !0, Ld(a, u));
          a = a.next;
        }
      while (e);
      $f = !1;
    }
  }
  function Sh() {
    Bd();
  }
  function Bd() {
    Li = kf = !1;
    var t = 0;
    fa !== 0 && jh() && (t = fa);
    for (var l = Zt(), e = null, a = qi; a !== null; ) {
      var n = a.next, u = Yd(a, l);
      u === 0 ? (a.next = null, e === null ? qi = n : e.next = n, n === null && (An = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (Li = !0)), a = n;
    }
    nl !== 0 && nl !== 5 || pu(t), fa !== 0 && (fa = 0);
  }
  function Yd(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - fl(u), f = 1 << i, g = n[i];
      g === -1 ? ((f & e) === 0 || (f & a) !== 0) && (n[i] = dc(f, l)) : g <= l && (t.expiredLanes |= f), u &= ~f;
    }
    if (l = Ct, e = gt, e = pa(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (Rt === 2 || Rt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && st(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || we(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && st(a), ba(e)) {
        case 2:
        case 8:
          e = Hn;
          break;
        case 32:
          e = Le;
          break;
        case 268435456:
          e = tt;
          break;
        default:
          e = Le;
      }
      return a = qd.bind(null, t), e = qe(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && st(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function qd(t, l) {
    if (nl !== 0 && nl !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Yi() && t.callbackNode !== e)
      return null;
    var a = gt;
    return a = pa(
      t,
      t === Ct ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (bd(t, a, l), Yd(t, Zt()), t.callbackNode != null && t.callbackNode === e ? qd.bind(null, t) : null);
  }
  function Ld(t, l) {
    if (Yi()) return null;
    bd(t, l, !0);
  }
  function xh() {
    Ch(function() {
      (zt & 6) !== 0 ? qe(
        Lt,
        Sh
      ) : Bd();
    });
  }
  function If() {
    if (fa === 0) {
      var t = on;
      t === 0 && (t = Qa, Qa <<= 1, (Qa & 261888) === 0 && (Qa = 256)), fa = t;
    }
    return fa;
  }
  function Gd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ju("" + t);
  }
  function wd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function Mh(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var u = Gd(
        (n[pl] || null).action
      ), i = a.submitter;
      i && (l = (l = i[pl] || null) ? Gd(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var f = new $u(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (fa !== 0) {
                  var g = i ? wd(n, i) : new FormData(n);
                  vf(
                    e,
                    {
                      pending: !0,
                      data: g,
                      method: n.method,
                      action: u
                    },
                    null,
                    g
                  );
                }
              } else
                typeof u == "function" && (f.preventDefault(), g = i ? wd(n, i) : new FormData(n), vf(
                  e,
                  {
                    pending: !0,
                    data: g,
                    method: n.method,
                    action: u
                  },
                  u,
                  g
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Pf = 0; Pf < Nc.length; Pf++) {
    var to = Nc[Pf], zh = to.toLowerCase(), Ah = to[0].toUpperCase() + to.slice(1);
    Il(
      zh,
      "on" + Ah
    );
  }
  Il(vr, "onAnimationEnd"), Il(br, "onAnimationIteration"), Il(Sr, "onAnimationStart"), Il("dblclick", "onDoubleClick"), Il("focusin", "onFocus"), Il("focusout", "onBlur"), Il(G1, "onTransitionRun"), Il(w1, "onTransitionStart"), Il(X1, "onTransitionCancel"), Il(xr, "onTransitionEnd"), ql("onMouseEnter", ["mouseout", "mouseover"]), ql("onMouseLeave", ["mouseout", "mouseover"]), ql("onPointerEnter", ["pointerout", "pointerover"]), ql("onPointerLeave", ["pointerout", "pointerover"]), ye(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ye(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ye("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ye(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ye(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ye(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Th = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu)
  );
  function Xd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i], g = f.instance, M = f.currentTarget;
            if (f = f.listener, g !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = M;
            try {
              u(n);
            } catch (U) {
              ti(U);
            }
            n.currentTarget = null, u = g;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (f = a[i], g = f.instance, M = f.currentTarget, f = f.listener, g !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = M;
            try {
              u(n);
            } catch (U) {
              ti(U);
            }
            n.currentTarget = null, u = g;
          }
      }
    }
  }
  function ht(t, l) {
    var e = l[Sa];
    e === void 0 && (e = l[Sa] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Qd(l, t, 2, !1), e.add(a));
  }
  function lo(t, l, e) {
    var a = 0;
    l && (a |= 4), Qd(
      e,
      t,
      a,
      l
    );
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(t) {
    if (!t[Gi]) {
      t[Gi] = !0, Zu.forEach(function(e) {
        e !== "selectionchange" && (Th.has(e) || lo(e, !1, t), lo(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Gi] || (l[Gi] = !0, lo("selectionchange", !1, l));
    }
  }
  function Qd(t, l, e, a) {
    switch (v0(l)) {
      case 2:
        var n = Ph;
        break;
      case 8:
        n = t2;
        break;
      default:
        n = vo;
    }
    e = n.bind(
      null,
      l,
      e,
      t
    ), n = void 0, !xc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: n
    }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
      passive: n
    }) : t.addEventListener(l, e, !1);
  }
  function ao(t, l, e, a, n) {
    var u = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var g = i.tag;
              if ((g === 3 || g === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = Ze(f), i === null) return;
            if (g = i.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = u = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Fo(function() {
      var M = u, U = bc(e), H = [];
      t: {
        var T = Mr.get(t);
        if (T !== void 0) {
          var D = $u, Q = t;
          switch (t) {
            case "keypress":
              if (Wu(e) === 0) break t;
            case "keydown":
            case "keyup":
              D = v1;
              break;
            case "focusin":
              Q = "focus", D = Tc;
              break;
            case "focusout":
              Q = "blur", D = Tc;
              break;
            case "beforeblur":
            case "afterblur":
              D = Tc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = $o;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = i1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = x1;
              break;
            case vr:
            case br:
            case Sr:
              D = o1;
              break;
            case xr:
              D = z1;
              break;
            case "scroll":
            case "scrollend":
              D = n1;
              break;
            case "wheel":
              D = T1;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = s1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Po;
              break;
            case "toggle":
            case "beforetoggle":
              D = R1;
          }
          var $ = (l & 4) !== 0, Ut = !$ && (t === "scroll" || t === "scrollend"), S = $ ? T !== null ? T + "Capture" : null : T;
          $ = [];
          for (var b = M, x; b !== null; ) {
            var C = b;
            if (x = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || x === null || S === null || (C = Gn(b, S), C != null && $.push(
              bu(b, C, x)
            )), Ut) break;
            b = b.return;
          }
          0 < $.length && (T = new D(
            T,
            Q,
            null,
            e,
            U
          ), H.push({ event: T, listeners: $ }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (T = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", T && e !== vc && (Q = e.relatedTarget || e.fromElement) && (Ze(Q) || Q[Xe]))
            break t;
          if ((D || T) && (T = U.window === U ? U : (T = U.ownerDocument) ? T.defaultView || T.parentWindow : window, D ? (Q = e.relatedTarget || e.toElement, D = M, Q = Q ? Ze(Q) : null, Q !== null && (Ut = E(Q), $ = Q.tag, Q !== Ut || $ !== 5 && $ !== 27 && $ !== 6) && (Q = null)) : (D = null, Q = M), D !== Q)) {
            if ($ = $o, C = "onMouseLeave", S = "onMouseEnter", b = "mouse", (t === "pointerout" || t === "pointerover") && ($ = Po, C = "onPointerLeave", S = "onPointerEnter", b = "pointer"), Ut = D == null ? T : Ma(D), x = Q == null ? T : Ma(Q), T = new $(
              C,
              b + "leave",
              D,
              e,
              U
            ), T.target = Ut, T.relatedTarget = x, C = null, Ze(U) === M && ($ = new $(
              S,
              b + "enter",
              Q,
              e,
              U
            ), $.target = x, $.relatedTarget = Ut, C = $), Ut = C, D && Q)
              l: {
                for ($ = Eh, S = D, b = Q, x = 0, C = S; C; C = $(C))
                  x++;
                C = 0;
                for (var F = b; F; F = $(F))
                  C++;
                for (; 0 < x - C; )
                  S = $(S), x--;
                for (; 0 < C - x; )
                  b = $(b), C--;
                for (; x--; ) {
                  if (S === b || b !== null && S === b.alternate) {
                    $ = S;
                    break l;
                  }
                  S = $(S), b = $(b);
                }
                $ = null;
              }
            else $ = null;
            D !== null && Zd(
              H,
              T,
              D,
              $,
              !1
            ), Q !== null && Ut !== null && Zd(
              H,
              Ut,
              Q,
              $,
              !0
            );
          }
        }
        t: {
          if (T = M ? Ma(M) : window, D = T.nodeName && T.nodeName.toLowerCase(), D === "select" || D === "input" && T.type === "file")
            var xt = cr;
          else if (ur(T))
            if (fr)
              xt = Y1;
            else {
              xt = H1;
              var Z = N1;
            }
          else
            D = T.nodeName, !D || D.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? M && pc(M.elementType) && (xt = cr) : xt = B1;
          if (xt && (xt = xt(t, M))) {
            ir(
              H,
              xt,
              e,
              U
            );
            break t;
          }
          Z && Z(t, T, M), t === "focusout" && M && T.type === "number" && M.memoizedProps.value != null && yc(T, "number", T.value);
        }
        switch (Z = M ? Ma(M) : window, t) {
          case "focusin":
            (ur(Z) || Z.contentEditable === "true") && (tn = Z, jc = M, Fn = null);
            break;
          case "focusout":
            Fn = jc = tn = null;
            break;
          case "mousedown":
            Uc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uc = !1, yr(H, e, U);
            break;
          case "selectionchange":
            if (L1) break;
          case "keydown":
          case "keyup":
            yr(H, e, U);
        }
        var ft;
        if (Rc)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Pa ? ar(t, e) && (mt = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (mt = "onCompositionStart");
        mt && (tr && e.locale !== "ko" && (Pa || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && Pa && (ft = Wo()) : (Ke = U, Mc = "value" in Ke ? Ke.value : Ke.textContent, Pa = !0)), Z = wi(M, mt), 0 < Z.length && (mt = new Io(
          mt,
          t,
          null,
          e,
          U
        ), H.push({ event: mt, listeners: Z }), ft ? mt.data = ft : (ft = nr(e), ft !== null && (mt.data = ft)))), (ft = D1 ? O1(t, e) : j1(t, e)) && (mt = wi(M, "onBeforeInput"), 0 < mt.length && (Z = new Io(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          U
        ), H.push({
          event: Z,
          listeners: mt
        }), Z.data = ft)), Mh(
          H,
          t,
          M,
          e,
          U
        );
      }
      Xd(H, l);
    });
  }
  function bu(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function wi(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Gn(t, e), n != null && a.unshift(
        bu(t, n, u)
      ), n = Gn(t, l), n != null && a.push(
        bu(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Eh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Zd(t, l, e, a, n) {
    for (var u = l._reactName, i = []; e !== null && e !== a; ) {
      var f = e, g = f.alternate, M = f.stateNode;
      if (f = f.tag, g !== null && g === a) break;
      f !== 5 && f !== 26 && f !== 27 || M === null || (g = M, n ? (M = Gn(e, u), M != null && i.unshift(
        bu(e, M, g)
      )) : n || (M = Gn(e, u), M != null && i.push(
        bu(e, M, g)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Rh = /\r\n?/g, _h = /\u0000|\uFFFD/g;
  function Vd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Rh, `
`).replace(_h, "");
  }
  function Kd(t, l) {
    return l = Vd(l), Vd(t) === l;
  }
  function jt(t, l, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ka(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ka(t, "" + a);
        break;
      case "className":
        Fa(t, "class", a);
        break;
      case "tabIndex":
        Fa(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fa(t, e, a);
        break;
      case "style":
        Ko(t, a, u);
        break;
      case "data":
        if (l !== "object") {
          Fa(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Ju("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (l !== "input" && jt(t, l, "name", n.name, n, null), jt(
            t,
            l,
            "formEncType",
            n.formEncType,
            n,
            null
          ), jt(
            t,
            l,
            "formMethod",
            n.formMethod,
            n,
            null
          ), jt(
            t,
            l,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (jt(t, l, "encType", n.encType, n, null), jt(t, l, "method", n.method, n, null), jt(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Ju("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = pe);
        break;
      case "onScroll":
        a != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(o(60));
            t.innerHTML = e;
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
        e = Ju("" + a), t.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), Ja(t, "popover", a);
        break;
      case "xlinkActuate":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Gl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Gl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Gl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ja(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = e1.get(e) || e, Ja(t, e, a));
    }
  }
  function no(t, l, e, a, n, u) {
    switch (e) {
      case "style":
        Ko(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(o(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ka(t, a) : (typeof a == "number" || typeof a == "bigint") && ka(t, "" + a);
        break;
      case "onScroll":
        a != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ht("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = pe);
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
        if (!Vu.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[pl] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, n);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Ja(t, e, a);
          }
    }
  }
  function ml(t, l, e) {
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
        ht("error", t), ht("load", t);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, l));
                default:
                  jt(t, l, u, i, e, null);
              }
          }
        n && jt(t, l, "srcSet", e.srcSet, e, null), a && jt(t, l, "src", e.src, e, null);
        return;
      case "input":
        ht("invalid", t);
        var f = u = i = n = null, g = null, M = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var U = e[a];
            if (U != null)
              switch (a) {
                case "name":
                  n = U;
                  break;
                case "type":
                  i = U;
                  break;
                case "checked":
                  g = U;
                  break;
                case "defaultChecked":
                  M = U;
                  break;
                case "value":
                  u = U;
                  break;
                case "defaultValue":
                  f = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(o(137, l));
                  break;
                default:
                  jt(t, l, a, U, e, null);
              }
          }
        Xo(
          t,
          u,
          f,
          g,
          M,
          i,
          n,
          !1
        );
        return;
      case "select":
        ht("invalid", t), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (f = e[n], f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                jt(t, l, n, f, e, null);
            }
        l = u, e = i, t.multiple = !!a, l != null ? Wa(t, !!a, l, !1) : e != null && Wa(t, !!a, e, !0);
        return;
      case "textarea":
        ht("invalid", t), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (f = e[i], f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                jt(t, l, i, f, e, null);
            }
        Zo(t, a, n, u);
        return;
      case "option":
        for (g in e)
          e.hasOwnProperty(g) && (a = e[g], a != null) && (g === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : jt(t, l, g, a, e, null));
        return;
      case "dialog":
        ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          ht(vu[a], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
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
        for (M in e)
          if (e.hasOwnProperty(M) && (a = e[M], a != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, l));
              default:
                jt(t, l, M, a, e, null);
            }
        return;
      default:
        if (pc(l)) {
          for (U in e)
            e.hasOwnProperty(U) && (a = e[U], a !== void 0 && no(
              t,
              l,
              U,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && (a = e[f], a != null && jt(t, l, f, a, e, null));
  }
  function Dh(t, l, e, a) {
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
        var n = null, u = null, i = null, f = null, g = null, M = null, U = null;
        for (D in e) {
          var H = e[D];
          if (e.hasOwnProperty(D) && H != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = H;
              default:
                a.hasOwnProperty(D) || jt(t, l, D, null, a, H);
            }
        }
        for (var T in a) {
          var D = a[T];
          if (H = e[T], a.hasOwnProperty(T) && (D != null || H != null))
            switch (T) {
              case "type":
                u = D;
                break;
              case "name":
                n = D;
                break;
              case "checked":
                M = D;
                break;
              case "defaultChecked":
                U = D;
                break;
              case "value":
                i = D;
                break;
              case "defaultValue":
                f = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(o(137, l));
                break;
              default:
                D !== H && jt(
                  t,
                  l,
                  T,
                  D,
                  a,
                  H
                );
            }
        }
        mc(
          t,
          i,
          f,
          g,
          M,
          U,
          u,
          n
        );
        return;
      case "select":
        D = i = f = T = null;
        for (u in e)
          if (g = e[u], e.hasOwnProperty(u) && g != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = g;
              default:
                a.hasOwnProperty(u) || jt(
                  t,
                  l,
                  u,
                  null,
                  a,
                  g
                );
            }
        for (n in a)
          if (u = a[n], g = e[n], a.hasOwnProperty(n) && (u != null || g != null))
            switch (n) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== g && jt(
                  t,
                  l,
                  n,
                  u,
                  a,
                  g
                );
            }
        l = f, e = i, a = D, T != null ? Wa(t, !!e, T, !1) : !!a != !!e && (l != null ? Wa(t, !!e, l, !0) : Wa(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        D = T = null;
        for (f in e)
          if (n = e[f], e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                jt(t, l, f, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                D = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && jt(t, l, i, n, a, u);
            }
        Qo(t, T, D);
        return;
      case "option":
        for (var Q in e)
          T = e[Q], e.hasOwnProperty(Q) && T != null && !a.hasOwnProperty(Q) && (Q === "selected" ? t.selected = !1 : jt(
            t,
            l,
            Q,
            null,
            a,
            T
          ));
        for (g in a)
          T = a[g], D = e[g], a.hasOwnProperty(g) && T !== D && (T != null || D != null) && (g === "selected" ? t.selected = T && typeof T != "function" && typeof T != "symbol" : jt(
            t,
            l,
            g,
            T,
            a,
            D
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
        for (var $ in e)
          T = e[$], e.hasOwnProperty($) && T != null && !a.hasOwnProperty($) && jt(t, l, $, null, a, T);
        for (M in a)
          if (T = a[M], D = e[M], a.hasOwnProperty(M) && T !== D && (T != null || D != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(o(137, l));
                break;
              default:
                jt(
                  t,
                  l,
                  M,
                  T,
                  a,
                  D
                );
            }
        return;
      default:
        if (pc(l)) {
          for (var Ut in e)
            T = e[Ut], e.hasOwnProperty(Ut) && T !== void 0 && !a.hasOwnProperty(Ut) && no(
              t,
              l,
              Ut,
              void 0,
              a,
              T
            );
          for (U in a)
            T = a[U], D = e[U], !a.hasOwnProperty(U) || T === D || T === void 0 && D === void 0 || no(
              t,
              l,
              U,
              T,
              a,
              D
            );
          return;
        }
    }
    for (var S in e)
      T = e[S], e.hasOwnProperty(S) && T != null && !a.hasOwnProperty(S) && jt(t, l, S, null, a, T);
    for (H in a)
      T = a[H], D = e[H], !a.hasOwnProperty(H) || T === D || T == null && D == null || jt(t, l, H, T, a, D);
  }
  function Jd(t) {
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
  function Oh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, f = n.duration;
        if (u && f && Jd(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
            var g = e[a], M = g.startTime;
            if (M > f) break;
            var U = g.transferSize, H = g.initiatorType;
            U && Jd(H) && (g = g.responseEnd, i += U * (g < f ? 1 : (f - M) / (g - M)));
          }
          if (--a, l += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var uo = null, io = null;
  function Xi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Fd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function co(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var fo = null;
  function jh() {
    var t = window.event;
    return t && t.type === "popstate" ? t === fo ? !1 : (fo = t, !0) : (fo = null, !1);
  }
  var kd = typeof setTimeout == "function" ? setTimeout : void 0, Uh = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, Ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(t) {
    return $d.resolve(null).then(t).catch(Nh);
  } : kd;
  function Nh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function oa(t) {
    return t === "head";
  }
  function Id(t, l) {
    var e = l, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(n), _n(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Su(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, Su(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, f = u.nodeName;
            u[Qe] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && Su(t.ownerDocument.body);
      e = n;
    } while (e);
    _n(l);
  }
  function Pd(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function oo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oo(e), xa(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Hh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Qe])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Wl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Bh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Wl(t.nextSibling), t === null)) return null;
    return t;
  }
  function t0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Wl(t.nextSibling), t === null)) return null;
    return t;
  }
  function ro(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function so(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Yh(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Wl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var ho = null;
  function l0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Wl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function e0(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function a0(t, l, e) {
    switch (l = Xi(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Su(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    xa(t);
  }
  var kl = /* @__PURE__ */ new Map(), n0 = /* @__PURE__ */ new Set();
  function Qi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ce = L.d;
  L.d = {
    f: qh,
    r: Lh,
    D: Gh,
    C: wh,
    L: Xh,
    m: Qh,
    X: Vh,
    S: Zh,
    M: Kh
  };
  function qh() {
    var t = Ce.f(), l = Ni();
    return t || l;
  }
  function Lh(t) {
    var l = Ve(t);
    l !== null && l.tag === 5 && l.type === "form" ? xs(l) : Ce.r(t);
  }
  var Tn = typeof document > "u" ? null : document;
  function u0(t, l, e) {
    var a = Tn;
    if (a && typeof l == "string" && l) {
      var n = Xl(l);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), n0.has(n) || (n0.add(n), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(n) === null && (l = a.createElement("link"), ml(l, "link", t), kt(l), a.head.appendChild(l)));
    }
  }
  function Gh(t) {
    Ce.D(t), u0("dns-prefetch", t, null);
  }
  function wh(t, l) {
    Ce.C(t, l), u0("preconnect", t, l);
  }
  function Xh(t, l, e) {
    Ce.L(t, l, e);
    var a = Tn;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + Xl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + Xl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + Xl(
        e.imageSizes
      ) + '"]')) : n += '[href="' + Xl(t) + '"]';
      var u = n;
      switch (l) {
        case "style":
          u = En(t);
          break;
        case "script":
          u = Rn(t);
      }
      kl.has(u) || (t = q(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), kl.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(xu(u)) || l === "script" && a.querySelector(Mu(u)) || (l = a.createElement("link"), ml(l, "link", t), kt(l), a.head.appendChild(l)));
    }
  }
  function Qh(t, l) {
    Ce.m(t, l);
    var e = Tn;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + Xl(a) + '"][href="' + Xl(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Rn(t);
      }
      if (!kl.has(u) && (t = q({ rel: "modulepreload", href: t }, l), kl.set(u, t), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Mu(u)))
              return;
        }
        a = e.createElement("link"), ml(a, "link", t), kt(a), e.head.appendChild(a);
      }
    }
  }
  function Zh(t, l, e) {
    Ce.S(t, l, e);
    var a = Tn;
    if (a && t) {
      var n = me(a).hoistableStyles, u = En(t);
      l = l || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = a.querySelector(
          xu(u)
        ))
          f.loading = 5;
        else {
          t = q(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = kl.get(u)) && go(t, e);
          var g = i = a.createElement("link");
          kt(g), ml(g, "link", t), g._p = new Promise(function(M, U) {
            g.onload = M, g.onerror = U;
          }), g.addEventListener("load", function() {
            f.loading |= 1;
          }), g.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Zi(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, n.set(u, i);
      }
    }
  }
  function Vh(t, l) {
    Ce.X(t, l);
    var e = Tn;
    if (e && t) {
      var a = me(e).hoistableScripts, n = Rn(t), u = a.get(n);
      u || (u = e.querySelector(Mu(n)), u || (t = q({ src: t, async: !0 }, l), (l = kl.get(n)) && mo(t, l), u = e.createElement("script"), kt(u), ml(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Kh(t, l) {
    Ce.M(t, l);
    var e = Tn;
    if (e && t) {
      var a = me(e).hoistableScripts, n = Rn(t), u = a.get(n);
      u || (u = e.querySelector(Mu(n)), u || (t = q({ src: t, async: !0, type: "module" }, l), (l = kl.get(n)) && mo(t, l), u = e.createElement("script"), kt(u), ml(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function i0(t, l, e, a) {
    var n = (n = nt.current) ? Qi(n) : null;
    if (!n) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = En(e.href), e = me(
          n
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = En(e.href);
          var u = me(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            xu(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), kl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, kl.set(t, e), u || Jh(
            n,
            t,
            e,
            i.state
          ))), l && a === null)
            throw Error(o(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Rn(e), e = me(
          n
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function En(t) {
    return 'href="' + Xl(t) + '"';
  }
  function xu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function c0(t) {
    return q({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Jh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), ml(l, "link", e), kt(l), t.head.appendChild(l));
  }
  function Rn(t) {
    return '[src="' + Xl(t) + '"]';
  }
  function Mu(t) {
    return "script[async]" + t;
  }
  function f0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Xl(e.href) + '"]'
          );
          if (a)
            return l.instance = a, kt(a), a;
          var n = q({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), kt(a), ml(a, "style", n), Zi(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = En(e.href);
          var u = t.querySelector(
            xu(n)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, kt(u), u;
          a = c0(e), (n = kl.get(n)) && go(a, n), u = (t.ownerDocument || t).createElement("link"), kt(u);
          var i = u;
          return i._p = new Promise(function(f, g) {
            i.onload = f, i.onerror = g;
          }), ml(u, "link", a), l.state.loading |= 4, Zi(u, e.precedence, t), l.instance = u;
        case "script":
          return u = Rn(e.src), (n = t.querySelector(
            Mu(u)
          )) ? (l.instance = n, kt(n), n) : (a = e, (n = kl.get(u)) && (a = q({}, e), mo(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), kt(n), ml(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Zi(a, e.precedence, t));
    return l.instance;
  }
  function Zi(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var f = a[i];
      if (f.dataset.precedence === l) u = f;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function go(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function mo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Vi = null;
  function o0(t, l, e) {
    if (Vi === null) {
      var a = /* @__PURE__ */ new Map(), n = Vi = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Vi, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Qe] || u[al] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function r0(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Fh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
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
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function s0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Wh(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = En(a.href), u = l.querySelector(
          xu(n)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Ki.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = u, kt(u);
          return;
        }
        u = l.ownerDocument || l, a = c0(a), (n = kl.get(n)) && go(a, n), u = u.createElement("link"), kt(u);
        var i = u;
        i._p = new Promise(function(f, g) {
          i.onload = f, i.onerror = g;
        }), ml(u, "link", a), e.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Ki.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var yo = 0;
  function kh(t, l) {
    return t.stylesheets && t.count === 0 && Fi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Fi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < t.imgBytes && yo === 0 && (yo = 62500 * Oh());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Fi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > yo ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Ki() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ji = null;
  function Fi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ji = /* @__PURE__ */ new Map(), l.forEach($h, t), Ji = null, Ki.call(t));
  }
  function $h(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Ji.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Ji.set(t, e);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = l.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Ki.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
    }
  }
  var zu = {
    $$typeof: lt,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function Ih(t, l, e, a, n, u, i, f, g) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yn(0), this.hiddenUpdates = Yn(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function d0(t, l, e, a, n, u, i, f, g, M, U, H) {
    return t = new Ih(
      t,
      l,
      e,
      i,
      g,
      M,
      U,
      H,
      f
    ), l = 1, u === !0 && (l |= 24), u = Ol(3, null, null, l), t.current = u, u.stateNode = t, l = Jc(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, $c(u), t;
  }
  function h0(t) {
    return t ? (t = an, t) : an;
  }
  function g0(t, l, e, a, n, u) {
    n = h0(n), a.context === null ? a.context = n : a.pendingContext = n, a = Ie(l), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = Pe(t, a, l), e !== null && (Rl(e, t, l), lu(e, t, l));
  }
  function m0(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function po(t, l) {
    m0(t, l), (t = t.alternate) && m0(t, l);
  }
  function y0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Ea(t, 67108864);
      l !== null && Rl(l, t, 67108864), po(t, 67108864);
    }
  }
  function p0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Hl();
      l = ce(l);
      var e = Ea(t, l);
      e !== null && Rl(e, t, l), po(t, l);
    }
  }
  var Wi = !0;
  function Ph(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var u = L.p;
    try {
      L.p = 2, vo(t, l, e, a);
    } finally {
      L.p = u, j.T = n;
    }
  }
  function t2(t, l, e, a) {
    var n = j.T;
    j.T = null;
    var u = L.p;
    try {
      L.p = 8, vo(t, l, e, a);
    } finally {
      L.p = u, j.T = n;
    }
  }
  function vo(t, l, e, a) {
    if (Wi) {
      var n = bo(a);
      if (n === null)
        ao(
          t,
          l,
          a,
          ki,
          e
        ), b0(t, a);
      else if (e2(
        n,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (b0(t, a), l & 4 && -1 < l2.indexOf(t)) {
        for (; n !== null; ) {
          var u = Ve(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = he(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var g = 1 << 31 - fl(i);
                      f.entanglements[1] |= g, i &= ~g;
                    }
                    de(u), (zt & 6) === 0 && (Ui = Zt() + 500, pu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ea(u, 2), f !== null && Rl(f, u, 2), Ni(), po(u, 2);
            }
          if (u = bo(a), u === null && ao(
            t,
            l,
            a,
            ki,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        ao(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function bo(t) {
    return t = bc(t), So(t);
  }
  var ki = null;
  function So(t) {
    if (ki = null, t = Ze(t), t !== null) {
      var l = E(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = v(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = N(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return ki = t, null;
  }
  function v0(t) {
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
        switch (sl()) {
          case Lt:
            return 2;
          case Hn:
            return 8;
          case Le:
          case Yu:
            return 32;
          case tt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xo = !1, ra = null, sa = null, da = null, Au = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), ha = [], l2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function b0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Au.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(l.pointerId);
    }
  }
  function Eu(t, l, e, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, l !== null && (l = Ve(l), l !== null && y0(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
  }
  function e2(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return ra = Eu(
          ra,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return sa = Eu(
          sa,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return da = Eu(
          da,
          t,
          l,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Au.set(
          u,
          Eu(
            Au.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Tu.set(
          u,
          Eu(
            Tu.get(u) || null,
            t,
            l,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function S0(t) {
    var l = Ze(t.target);
    if (l !== null) {
      var e = E(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = v(e), l !== null) {
            t.blockedOn = l, Ka(t.priority, function() {
              p0(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = N(e), l !== null) {
            t.blockedOn = l, Ka(t.priority, function() {
              p0(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function $i(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = bo(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        vc = a, e.target.dispatchEvent(a), vc = null;
      } else
        return l = Ve(e), l !== null && y0(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function x0(t, l, e) {
    $i(t) && e.delete(l);
  }
  function a2() {
    xo = !1, ra !== null && $i(ra) && (ra = null), sa !== null && $i(sa) && (sa = null), da !== null && $i(da) && (da = null), Au.forEach(x0), Tu.forEach(x0);
  }
  function Ii(t, l) {
    t.blockedOn === l && (t.blockedOn = null, xo || (xo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      a2
    )));
  }
  var Pi = null;
  function M0(t) {
    Pi !== t && (Pi = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Pi === t && (Pi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (So(a || e) === null)
              continue;
            break;
          }
          var u = Ve(e);
          u !== null && (t.splice(l, 3), l -= 3, vf(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function _n(t) {
    function l(g) {
      return Ii(g, t);
    }
    ra !== null && Ii(ra, t), sa !== null && Ii(sa, t), da !== null && Ii(da, t), Au.forEach(l), Tu.forEach(l);
    for (var e = 0; e < ha.length; e++) {
      var a = ha[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ha.length && (e = ha[0], e.blockedOn === null); )
      S0(e), e.blockedOn === null && ha.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[pl] || null;
        if (typeof u == "function")
          i || M0(e);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[pl] || null)
              f = i.formAction;
            else if (So(n) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), M0(e);
        }
      }
  }
  function z0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
      };
    }
  }
  function Mo(t) {
    this._internalRoot = t;
  }
  tc.prototype.render = Mo.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(o(409));
    var e = l.current, a = Hl();
    g0(e, a, t, l, null, null);
  }, tc.prototype.unmount = Mo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      g0(t.current, 2, null, t, null, null), Ni(), l[Xe] = null;
    }
  };
  function tc(t) {
    this._internalRoot = t;
  }
  tc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = ge();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < ha.length && l !== 0 && l < ha[e].priority; e++) ;
      ha.splice(e, 0, t), e === 0 && S0(t);
    }
  };
  var A0 = r.version;
  if (A0 !== "19.2.4")
    throw Error(
      o(
        527,
        A0,
        "19.2.4"
      )
    );
  L.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = A(l), t = t !== null ? B(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var n2 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lc.isDisabled && lc.supportsFiber)
      try {
        Tt = lc.inject(
          n2
        ), cl = lc;
      } catch {
      }
  }
  return _u.createRoot = function(t, l) {
    if (!s(t)) throw Error(o(299));
    var e = !1, a = "", n = js, u = Us, i = Cs;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = d0(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      u,
      i,
      z0
    ), t[Xe] = l.current, eo(t), new Mo(l);
  }, _u.hydrateRoot = function(t, l, e) {
    if (!s(t)) throw Error(o(299));
    var a = !1, n = "", u = js, i = Us, f = Cs, g = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (g = e.formState)), l = d0(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      n,
      g,
      u,
      i,
      f,
      z0
    ), l.context = h0(null), e = l.current, a = Hl(), a = ce(a), n = Ie(a), n.callback = null, Pe(e, n, a), e = a, l.current.lanes = e, va(l, e), de(l), t[Xe] = l.current, eo(t), new tc(l);
  }, _u.version = "19.2.4", _u;
}
var N0;
function g2() {
  if (N0) return Ao.exports;
  N0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), Ao.exports = h2(), Ao.exports;
}
var m2 = g2(), Bl = Yo();
const cc = 9;
function h(c, r, d) {
  return { x: c, y: r, z: d };
}
function W(c, r, d) {
  return Math.max(r, Math.min(d, c));
}
function St(c, r) {
  return { x: c.x + r.x, y: c.y + r.y, z: c.z + r.z };
}
function Co(c, r) {
  return { x: c.x - r.x, y: c.y - r.y, z: c.z - r.z };
}
function yl(c, r) {
  return { x: c.x * r, y: c.y * r, z: c.z * r };
}
function fc(c, r) {
  return c.x * r.x + c.y * r.y + c.z * r.z;
}
function ee(c, r) {
  return {
    x: c.y * r.z - c.z * r.y,
    y: c.z * r.x - c.x * r.z,
    z: c.x * r.y - c.y * r.x
  };
}
function y2(c) {
  return Math.hypot(c.x, c.y, c.z);
}
function Ft(c) {
  const r = y2(c) || 1;
  return yl(c, 1 / r);
}
function Jt(c, r, d) {
  return c + (r - c) * d;
}
function ma(c, r, d) {
  return {
    x: Jt(c.x, r.x, d),
    y: Jt(c.y, r.y, d),
    z: Jt(c.z, r.z, d)
  };
}
function R(c) {
  const r = c.replace("#", ""), d = r.length === 3 ? r.split("").map((s) => `${s}${s}`).join("") : r, o = Number.parseInt(d, 16);
  return {
    r: (o >> 16 & 255) / 255,
    g: (o >> 8 & 255) / 255,
    b: (o & 255) / 255
  };
}
function ju(c, r, d) {
  return {
    r: Jt(c.r, r.r, d),
    g: Jt(c.g, r.g, d),
    b: Jt(c.b, r.b, d)
  };
}
function Z0(c, r) {
  return Ft({
    x: Math.sin(c) * Math.cos(r),
    y: Math.sin(r),
    z: -Math.cos(c) * Math.cos(r)
  });
}
function V0() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function p2(c) {
  const r = V0();
  return r[12] = c.x, r[13] = c.y, r[14] = c.z, r;
}
function v2(c) {
  return new Float32Array([c, 0, 0, 0, 0, c, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
}
function b2(c) {
  const r = Math.cos(c), d = Math.sin(c);
  return new Float32Array([1, 0, 0, 0, 0, r, d, 0, 0, -d, r, 0, 0, 0, 0, 1]);
}
function S2(c) {
  const r = Math.cos(c), d = Math.sin(c);
  return new Float32Array([r, 0, -d, 0, 0, 1, 0, 0, d, 0, r, 0, 0, 0, 0, 1]);
}
function x2(c) {
  const r = Math.cos(c), d = Math.sin(c);
  return new Float32Array([r, d, 0, 0, -d, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function Uu(c, r) {
  const d = new Float32Array(16), o = c[0], s = c[1], E = c[2], v = c[3], N = c[4], z = c[5], A = c[6], B = c[7], q = c[8], w = c[9], J = c[10], it = c[11], ot = c[12], vt = c[13], yt = c[14], Et = c[15];
  let lt = r[0], at = r[1], X = r[2], et = r[3];
  return d[0] = lt * o + at * N + X * q + et * ot, d[1] = lt * s + at * z + X * w + et * vt, d[2] = lt * E + at * A + X * J + et * yt, d[3] = lt * v + at * B + X * it + et * Et, lt = r[4], at = r[5], X = r[6], et = r[7], d[4] = lt * o + at * N + X * q + et * ot, d[5] = lt * s + at * z + X * w + et * vt, d[6] = lt * E + at * A + X * J + et * yt, d[7] = lt * v + at * B + X * it + et * Et, lt = r[8], at = r[9], X = r[10], et = r[11], d[8] = lt * o + at * N + X * q + et * ot, d[9] = lt * s + at * z + X * w + et * vt, d[10] = lt * E + at * A + X * J + et * yt, d[11] = lt * v + at * B + X * it + et * Et, lt = r[12], at = r[13], X = r[14], et = r[15], d[12] = lt * o + at * N + X * q + et * ot, d[13] = lt * s + at * z + X * w + et * vt, d[14] = lt * E + at * A + X * J + et * yt, d[15] = lt * v + at * B + X * it + et * Et, d;
}
function H0(c, r, d, o, s = 1) {
  const E = Uu(
    S2(r),
    Uu(b2(d), Uu(x2(o), v2(s)))
  );
  return Uu(p2(c), E);
}
function Do(c, r, d, o, s = 1) {
  return new Float32Array([
    r.x * s,
    r.y * s,
    r.z * s,
    0,
    d.x * s,
    d.y * s,
    d.z * s,
    0,
    -o.x * s,
    -o.y * s,
    -o.z * s,
    0,
    c.x,
    c.y,
    c.z,
    1
  ]);
}
function M2(c, r, d, o) {
  const s = 1 / Math.tan(c / 2), E = 1 / (d - o);
  return new Float32Array([
    s / r,
    0,
    0,
    0,
    0,
    s,
    0,
    0,
    0,
    0,
    (o + d) * E,
    -1,
    0,
    0,
    2 * o * d * E,
    0
  ]);
}
function z2(c, r, d) {
  const o = Ft(Co(c, r)), s = Ft(ee(d, o)), E = ee(o, s);
  return new Float32Array([
    s.x,
    E.x,
    o.x,
    0,
    s.y,
    E.y,
    o.y,
    0,
    s.z,
    E.z,
    o.z,
    0,
    -fc(s, c),
    -fc(E, c),
    -fc(o, c),
    1
  ]);
}
class A2 {
  data = [];
  pushVertex(r, d, o) {
    this.data.push(r.x, r.y, r.z, d.x, d.y, d.z, o.r, o.g, o.b);
  }
  triangle(r, d, o, s) {
    const E = Ft(ee(Co(d, r), Co(o, r)));
    this.pushVertex(r, E, s), this.pushVertex(d, E, s), this.pushVertex(o, E, s);
  }
  quad(r, d, o, s, E) {
    this.triangle(r, d, o, E), this.triangle(r, o, s, E);
  }
  box(r, d, o) {
    const s = d.x * 0.5, E = d.y * 0.5, v = d.z * 0.5, N = {
      lbf: h(r.x - s, r.y - E, r.z + v),
      rbf: h(r.x + s, r.y - E, r.z + v),
      lbb: h(r.x - s, r.y - E, r.z - v),
      rbb: h(r.x + s, r.y - E, r.z - v),
      ltf: h(r.x - s, r.y + E, r.z + v),
      rtf: h(r.x + s, r.y + E, r.z + v),
      ltb: h(r.x - s, r.y + E, r.z - v),
      rtb: h(r.x + s, r.y + E, r.z - v)
    };
    this.quad(N.ltf, N.rtf, N.rtb, N.ltb, o.top), this.quad(N.lbf, N.rbf, N.rtf, N.ltf, o.sideA), this.quad(N.rbf, N.rbb, N.rtb, N.rtf, o.sideB), this.quad(N.rbb, N.lbb, N.ltb, N.rtb, o.sideA), this.quad(N.lbb, N.lbf, N.ltf, N.ltb, o.sideB);
  }
  ring(r, d, o, s, E, v) {
    for (let N = 0; N < s; N += 1) {
      const z = N / s * Math.PI * 2, A = (N + 1) / s * Math.PI * 2;
      for (let B = 0; B < E; B += 1) {
        const q = B / E * Math.PI * 2, w = (B + 1) / E * Math.PI * 2, J = ec(r, d, o, z, q), it = ec(r, d, o, A, q), ot = ec(r, d, o, A, w), vt = ec(r, d, o, z, w);
        this.quad(J, it, ot, vt, v);
      }
    }
  }
  toMesh() {
    return {
      vertices: new Float32Array(this.data),
      vertexCount: this.data.length / cc
    };
  }
}
function ec(c, r, d, o, s) {
  const E = Math.cos(o), v = Math.sin(o), N = Math.cos(s), z = Math.sin(s), A = r + d * N;
  return h(c.x + E * A, c.y + v * A, c.z + d * z);
}
function Un() {
  return new A2();
}
function B0(c, r, d) {
  const o = c.createShader(r);
  if (!o) throw new Error("Unable to create shader.");
  if (c.shaderSource(o, d), c.compileShader(o), !c.getShaderParameter(o, c.COMPILE_STATUS)) {
    const s = c.getShaderInfoLog(o) ?? "unknown shader error";
    throw c.deleteShader(o), new Error(s);
  }
  return o;
}
function T2(c, r, d) {
  const o = c.createProgram();
  if (!o) throw new Error("Unable to create program.");
  const s = B0(c, c.VERTEX_SHADER, r), E = B0(c, c.FRAGMENT_SHADER, d);
  if (c.attachShader(o, s), c.attachShader(o, E), c.linkProgram(o), c.deleteShader(s), c.deleteShader(E), !c.getProgramParameter(o, c.LINK_STATUS)) {
    const v = c.getProgramInfoLog(o) ?? "unknown link error";
    throw c.deleteProgram(o), new Error(v);
  }
  return o;
}
function E2(c) {
  const r = W(window.devicePixelRatio || 1, 1, 2), d = Math.max(1, Math.round(c.clientWidth * r)), o = Math.max(1, Math.round(c.clientHeight * r));
  (c.width !== d || c.height !== o) && (c.width = d, c.height = o);
}
function R2(c) {
  const r = c.getContext("webgl", {
    alpha: !1,
    antialias: !0,
    depth: !0,
    preserveDrawingBuffer: !0
  });
  if (!r)
    throw new Error("WebGL is not available in this browser.");
  const d = r, E = T2(d, `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec3 aColor;
    uniform mat4 uViewProj;
    uniform mat4 uModel;
    uniform vec3 uCameraPos;
    varying vec3 vColor;
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
      gl_Position = uViewProj * world;
    }
  `, `
    precision mediump float;
    varying vec3 vColor;
    varying float vLight;
    varying float vFog;
    uniform vec3 uTint;
    uniform vec3 uFogColor;

    void main() {
      vec3 lit = vColor * uTint * vLight;
      vec3 shaded = mix(lit, uFogColor, vFog);
      gl_FragColor = vec4(shaded, 1.0);
    }
  `), v = d.getAttribLocation(E, "aPosition"), N = d.getAttribLocation(E, "aNormal"), z = d.getAttribLocation(E, "aColor"), A = d.getUniformLocation(E, "uViewProj"), B = d.getUniformLocation(E, "uModel"), q = d.getUniformLocation(E, "uCameraPos"), w = d.getUniformLocation(E, "uTint"), J = d.getUniformLocation(E, "uFogColor"), it = /* @__PURE__ */ new Set(), ot = V0();
  d.enable(d.DEPTH_TEST);
  function vt(X, et = !1) {
    const I = d.createBuffer();
    if (!I) throw new Error("Unable to create vertex buffer.");
    return it.add(I), d.bindBuffer(d.ARRAY_BUFFER, I), d.bufferData(d.ARRAY_BUFFER, X.vertices, et ? d.DYNAMIC_DRAW : d.STATIC_DRAW), { buffer: I, vertexCount: X.vertexCount, dynamic: et };
  }
  function yt(X, et) {
    d.bindBuffer(d.ARRAY_BUFFER, X.buffer), d.bufferData(d.ARRAY_BUFFER, et.vertices, X.dynamic ? d.DYNAMIC_DRAW : d.STATIC_DRAW), X.vertexCount = et.vertexCount;
  }
  function Et(X) {
    d.bindBuffer(d.ARRAY_BUFFER, X.buffer), d.enableVertexAttribArray(v), d.enableVertexAttribArray(N), d.enableVertexAttribArray(z), d.vertexAttribPointer(v, 3, d.FLOAT, !1, cc * 4, 0), d.vertexAttribPointer(N, 3, d.FLOAT, !1, cc * 4, 12), d.vertexAttribPointer(z, 3, d.FLOAT, !1, cc * 4, 24);
  }
  function lt(X, et) {
    E2(c), d.viewport(0, 0, c.width, c.height), d.clearColor(0.54, 0.72, 0.94, 1), d.clear(d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT), d.useProgram(E);
    const I = c.width / Math.max(1, c.height), Nt = Uu(
      M2(X.fov * Math.PI / 180, I, X.near, X.far),
      z2(X.position, X.target, X.up)
    );
    d.uniformMatrix4fv(A, !1, Nt), d.uniform3f(q, X.position.x, X.position.y, X.position.z), d.uniform3f(J, 0.83, 0.91, 0.99);
    for (const qt of et) {
      Et(qt.mesh), d.uniformMatrix4fv(B, !1, qt.model ?? ot);
      const el = qt.tint ?? { r: 1, g: 1, b: 1 };
      d.uniform3f(w, el.r, el.g, el.b), d.drawArrays(d.TRIANGLES, 0, qt.mesh.vertexCount);
    }
  }
  function at() {
    for (const X of it)
      d.deleteBuffer(X);
    d.deleteProgram(E);
  }
  return { createMesh: vt, updateMesh: yt, render: lt, dispose: at };
}
const le = 72, bt = 5, Qt = 150, $l = -1440, _2 = -80, D2 = 3 * Math.PI / 180, K0 = -4200, J0 = 4200, jn = -6200, Nu = 5200, Dn = h(-28, 126, 2480), F0 = 48, O2 = 50, j2 = 1.5, U2 = R("#4d7749"), C2 = R("#42653f"), N2 = R("#355936"), H2 = R("#fff3d6"), B2 = R("#ff6b63"), Y2 = [-20, -15, -10, -5, 5, 10, 15, 20], rl = [
  { center: h(-28, 108, 1820), radius: 64, label: "Gate Alpha", bonus: 140 },
  { center: h(16, 76, 1160), radius: 58, label: "Gate Bravo", bonus: 160 },
  { center: h(0, 44, 620), radius: 52, label: "Gate Charlie", bonus: 180 }
], q2 = 1.225, ac = 1100, Y0 = 16.2, nc = 9.81, L2 = 680, G2 = 8600, w2 = 0.04, X2 = 3.5, q0 = 0.27, L0 = 1.24, Q2 = 0.42, Z2 = 0.036, V2 = 0.082, K2 = 0.34, J2 = 0.1, F2 = 0.02;
function uc(c) {
  return `${c * 10} deg`;
}
function La(c) {
  return c * 1.94384;
}
function G0(c) {
  return c * 196.8504;
}
function W2(c, r) {
  const d = W((c.y - bt) / 180, 0.2, 1), o = 0.8 + Math.sin(r * 0.38 + c.z * 15e-4) * 0.9 + Math.cos(r * 0.82 + c.x * 34e-4) * 0.45, s = 4.6 + Math.cos(r * 0.22 + c.z * 9e-4) * 1.1 + Math.sin(r * 0.54 + c.x * 17e-4) * 0.55, E = Math.sin(r * 0.94 + c.x * 22e-4) * 0.55 + Math.cos(r * 1.18 + c.z * 11e-4) * 0.22;
  return h(o * d, E * d, s * d);
}
function w0(c, r, d) {
  let o = r - c;
  for (; o > Math.PI; ) o -= Math.PI * 2;
  for (; o < -Math.PI; ) o += Math.PI * 2;
  return c + o * d;
}
function W0(c) {
  let r = c;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  for (; r < -Math.PI; ) r += Math.PI * 2;
  return r;
}
function X0(c, r) {
  return W0(c - r);
}
function ya(c, r, d) {
  if (c === r) return d < c ? 0 : 1;
  const o = W((d - c) / (r - c), 0, 1);
  return o * o * (3 - 2 * o);
}
function On(c, r, d) {
  return 1 - ya(r, d, Math.abs(c));
}
function k0(c, r, d) {
  return 1 - ya(r, d, c);
}
function k2(c) {
  return c - Math.floor(c);
}
function Ne(c, r) {
  return k2(Math.sin(c * 12.9898 + r * 78.233) * 43758.5453123);
}
function Hu(c) {
  return 1520 + Math.sin(c * 82e-5 + 0.8) * 340 + Math.cos(c * 17e-4 - 0.4) * 120;
}
function qo(c, r) {
  const d = (c - 1900) / 720, o = (r - 1860) / 580;
  return k0(Math.hypot(d, o), 0.28, 1);
}
function $2(c, r) {
  const d = (c - 260) / 760, o = (r + 240) / 980;
  return k0(Math.hypot(d, o), 0.22, 1);
}
function rc(c, r) {
  const d = On(c - Hu(r), 96, 240);
  return r < Nu - 220 && r > jn + 220 && d > 0.44 ? 2.8 + Math.sin(r * 35e-5) * 1.4 : qo(c, r) > 0.42 ? 3.6 : null;
}
function Ga(c, r) {
  const d = 22 + Math.sin(c * 28e-4) * 16 + Math.cos(r * 25e-4) * 13 + Math.sin((c + r) * 115e-5) * 20 + Math.cos((c - r) * 14e-4) * 12, o = Math.sin(r * 54e-4 + c * 8e-4) * 6 + Math.cos(c * 48e-4 - r * 6e-4) * 4, s = ya(900, 2600, Math.abs(c)) * (18 + Math.sin(r * 11e-4) * 14 + Math.cos((c + r) * 7e-4) * 8), E = ya(1900, 4100, -c) * (92 + Math.sin(r * 7e-4) * 28 + Math.cos(r * 16e-4) * 18), v = ya(1700, 3900, c) * (74 + Math.sin(r * 8e-4 + 1.6) * 26 + Math.cos(r * 14e-4) * 14), N = ya(2200, 5e3, -r) * (56 + Math.cos(c * 11e-4) * 18 + Math.sin((c - r) * 7e-4) * 16), z = ya(1800, 4200, r) * (24 + Math.sin(c * 15e-4) * 10), A = On(c - Hu(r), 110, 520) * (34 + Math.sin(r * 18e-4) * 7), B = qo(c, r) * 30, q = On(c + 1800 + Math.sin(r * 9e-4) * 180, 180, 620) * ya(-800, 2600, r) * 14;
  let w = d + o + s + E + v + N + z - A - B - q;
  const J = (Qt + $l) * 0.5, it = On(c, 180, 420), ot = On(r - J, 1620, 2550);
  return w = Jt(w, bt, it * ot), w = Jt(w, bt + 1.8, $2(c, r) * 0.42), w;
}
function I2(c, r, d) {
  const o = W(Math.hypot(Ga(c + 36, r) - d, Ga(c, r + 36) - d) / 24, 0, 1), s = Math.max(On(c - Hu(r), 120, 960) * 0.34, qo(c, r) * 0.5), E = Ne(c * 0.07, r * 0.07);
  if (rc(c, r) !== null && d < 8) {
    const N = ju(R("#35637c"), R("#5f90ac"), W((Math.sin(r * 32e-4) + 1) * 0.22 + 0.34, 0.2, 0.82));
    return ju(N, R("#7ab0c7"), s * 0.16);
  }
  let v = d > 190 ? R("#8b928d") : d > 128 ? R("#6f7c70") : d > 86 ? R("#5a764f") : E > 0.62 ? C2 : E > 0.26 ? U2 : N2;
  return v = ju(v, R("#6a8750"), s), ju(v, R("#7a776f"), o * 0.48);
}
function ll(c, r) {
  if (Math.abs(c) <= 120 && r <= Qt + 200 && r >= $l - 160)
    return bt;
  const d = Ga(c, r), o = rc(c, r);
  return o === null ? d : Math.max(d, o);
}
function No(c) {
  const r = Math.max(0, c - _2);
  return bt + 2 + Math.tan(D2) * r;
}
function Cu(c) {
  const r = c.x, d = W(r / 18, -3.2, 3.2), o = No(c.z), s = c.y - o, E = W(s / 6, -3.2, 3.2), v = s, N = v > 18 ? 4 : v > 8 ? 3 : v > -8 ? 2 : v > -18 ? 1 : 0;
  return { desiredAltitude: o, glideslopeDeviation: s, glideslopeDots: E, localizerDots: d, localizerMeters: r, papiWhites: N, papiLabel: N === 4 ? "well high" : N === 3 ? "slightly high" : N === 2 ? "on slope" : N === 1 ? "slightly low" : "well low" };
}
function P2(c, r) {
  return c < r.papiWhites ? H2 : B2;
}
function Du(c) {
  const r = c * 180 / Math.PI % 360;
  return r < 0 ? r + 360 : r;
}
function tg(c) {
  return c % 90 !== 0 ? `${c}` : c === 0 || c === 360 ? "N" : c === 90 ? "E" : c === 180 ? "S" : "W";
}
function Q0(c) {
  return Math.abs(c.x) <= le && c.z <= Qt && c.z >= $l;
}
function lg(c, r) {
  return Math.hypot(c.x - r.center.x, c.y - r.center.y, c.z - r.center.z);
}
function Ho(c) {
  return Math.atan2(c.verticalVelocity, Math.max(22, c.speed));
}
function sc(c, r, d) {
  const o = Ft(r), s = Math.cos(d), E = Math.sin(d);
  return Ft(
    St(
      St(yl(c, s), yl(ee(o, c), E)),
      yl(o, fc(o, c) * (1 - s))
    )
  );
}
function $0(c) {
  const r = Ho(c), d = Ft(Z0(c.heading, r)), o = ee(d, h(0, 1, 0)), s = Math.hypot(o.x, o.y, o.z) > 1e-4 ? Ft(o) : h(Math.cos(c.heading), 0, Math.sin(c.heading)), E = Ft(ee(s, d)), v = sc(s, d, c.roll), N = sc(d, v, c.angleOfAttack), z = Ft(ee(v, N)), A = Ft(ee(N, z)), B = Ft(
    ma(d, N, W(0.46 + Math.abs(c.angleOfAttack) * 0.85 + Math.abs(c.verticalVelocity) * 0.012, 0.46, 0.78))
  ), q = Ft(ma(E, z, c.cameraMode === "cockpit" ? 0.94 : 0.34));
  return { trackForward: d, trackRight: s, trackUp: E, bodyForward: N, bodyRight: A, bodyUp: z, chaseForward: B, chaseUp: q, pathPitch: r };
}
function eg(c) {
  const { trackUp: r, bodyForward: d, bodyRight: o, bodyUp: s, chaseForward: E, chaseUp: v, pathPitch: N } = $0(c), z = c.cameraMode === "cockpit", A = h(0, 1, 0), B = Ft(z ? ma(A, s, 0.96) : ma(A, v, 0.42)), q = z ? d : E, w = Ft(ee(q, B)), J = Ft(ee(w, q)), it = W((c.groundSpeed - 52) / 56, 0, 1), ot = z ? W(196 + c.speed * 0.56, 220, 296) : W(264 + c.speed * 0.84, 282, 414), vt = St(St(c.position, yl(q, ot)), yl(r, 10 + W(c.verticalVelocity * 1.4, -10, 14))), yt = ll(vt.x, vt.z), Et = W(44 + c.speed * 0.26, 50, 72), lt = W(14 + c.speed * 0.07, 15, 22), at = W(c.slip * 6 + c.yawRate * 2.8, -4.5, 4.5), X = St(St(St(c.position, yl(E, -Et)), yl(J, lt)), yl(w, at)), et = ll(X.x, X.z), I = z ? St(St(St(c.position, yl(d, 4.8)), yl(s, 2.9)), yl(o, 0.55)) : h(X.x, Math.max(X.y, et + 10), X.z), Nt = z ? St(St(I, yl(d, 260)), yl(s, 6)) : h(
    vt.x,
    W(vt.y + N * 44, yt + 10, c.position.y + 90),
    vt.z
  ), qt = z ? J : Ft(ma(A, J, 0.38)), el = z ? 0.24 : 0.16;
  return {
    position: ma(c.camera.position, I, el),
    target: ma(c.camera.target, Nt, el + 0.02),
    up: Ft(ma(c.camera.up, qt, el + 0.01)),
    fov: Jt(c.camera.fov, z ? Jt(80, 85, it * 0.7) : Jt(84, 93, it), z ? 0.12 : 0.1),
    near: 0.4,
    far: 12e3
  };
}
function ag(c, r) {
  return c < r.nextRing ? R("#5de08a") : c > r.nextRing ? R("#8bc4ff") : ju(R("#ffdc6e"), R("#ff9c43"), (Math.sin(r.time * 3.4) + 1) * 0.5);
}
function Oo() {
  return {
    mode: "title",
    cameraMode: "chase",
    position: { ...Dn },
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
    selectedAltitude: Dn.y,
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
    message: "RV-10-inspired 3D pass: faster cruise, rebuilt low-wing airframe, and a full valley approach.",
    stall: !1,
    wind: h(0, 0, 0),
    camera: {
      position: h(Dn.x, Dn.y + 14, Dn.z + 124),
      target: St(Dn, h(0, -10, -330)),
      up: h(0, 1, 0),
      fov: 82,
      near: 0.4,
      far: 12e3
    }
  };
}
function ng(c) {
  const r = Math.abs(c.verticalVelocity), d = Math.abs(c.position.x), o = c.speed;
  return r < 2.2 && d < 7 && o < 68 ? {
    label: "Butter landing",
    bonus: 720,
    message: c.nextRing >= rl.length ? "All gates cleared and the touchdown was clean." : "You skipped some gates, but the touchdown itself was beautiful."
  } : r < 3.8 && d < 16 && o < 76 ? {
    label: "Strong runway arrival",
    bonus: 560,
    message: c.nextRing >= rl.length ? "Approach was solid all the way through." : "Not the full gate run, but still a competent landing."
  } : {
    label: "Survivable landing",
    bonus: 420,
    message: c.nextRing >= rl.length ? "Ugly but valid. The runway is still yours." : "You made it down, even without the full approach line."
  };
}
function ug() {
  const c = Un(), r = 160;
  for (let s = Nu; s >= jn; s -= r)
    for (let E = K0; E < J0; E += r) {
      const v = h(E, Ga(E, s), s), N = h(E + r, Ga(E + r, s), s), z = h(E + r, Ga(E + r, s - r), s - r), A = h(E, Ga(E, s - r), s - r), B = I2(E + r * 0.5, s - r * 0.5, (v.y + N.y + z.y + A.y) * 0.25);
      c.quad(v, N, z, A, B);
    }
  ig(c), cg(c), c.quad(
    h(-160, bt - 0.18, Qt + 180),
    h(160, bt - 0.18, Qt + 180),
    h(160, bt - 0.18, $l - 40),
    h(-160, bt - 0.18, $l - 40),
    R("#6a707d")
  ), c.quad(
    h(-le, bt, Qt),
    h(le, bt, Qt),
    h(le, bt, $l),
    h(-le, bt, $l),
    R("#303745")
  );
  for (let s = Qt - 28; s > $l + 110; s -= 132)
    c.quad(h(-5, bt + 0.2, s), h(5, bt + 0.2, s), h(5, bt + 0.2, s - 72), h(-5, bt + 0.2, s - 72), R("#f6f7fa"));
  for (const s of [-1, 1]) {
    c.quad(
      h(s * 46, bt + 0.2, Qt - 280),
      h(s * 24, bt + 0.2, Qt - 280),
      h(s * 24, bt + 0.2, Qt - 420),
      h(s * 46, bt + 0.2, Qt - 420),
      R("#f6f7fa")
    );
    for (let E = Qt - 120; E > Qt - 360; E -= 90)
      c.quad(
        h(s * 58, bt + 0.2, E),
        h(s * 46, bt + 0.2, E),
        h(s * 46, bt + 0.2, E - 40),
        h(s * 58, bt + 0.2, E - 40),
        R("#f6f7fa")
      );
  }
  for (let s = Qt + 24; s > $l + 20; s -= 112)
    c.box(h(-le - 16, bt + 5, s), h(4, 10, 4), { top: R("#ffe7a4"), sideA: R("#8d7b46"), sideB: R("#706037") }), c.box(h(le + 16, bt + 5, s), h(4, 10, 4), { top: R("#ffe7a4"), sideA: R("#8d7b46"), sideB: R("#706037") });
  for (let s = Qt + 120; s < Qt + 520; s += 90)
    c.box(h(0, bt + 3, s), h(6, 6, 6), { top: R("#dde4ee"), sideA: R("#677387"), sideB: R("#566273") }), c.box(h(-24, bt + 2.5, s), h(4, 5, 4), { top: R("#dde4ee"), sideA: R("#677387"), sideB: R("#566273") }), c.box(h(24, bt + 2.5, s), h(4, 5, 4), { top: R("#dde4ee"), sideA: R("#677387"), sideB: R("#566273") });
  for (let s = 0; s < 4; s += 1) {
    const E = -le - 58 - s * 12, v = Qt - 34;
    c.box(h(E, bt + 2.4, v), h(2.4, 4.8, 2.4), { top: R("#6f6a57"), sideA: R("#5b5647"), sideB: R("#4d493d") }), c.box(h(E, bt + 5.6, v), h(8, 3.2, 6), { top: R("#d6d9df"), sideA: R("#6a7078"), sideB: R("#555b64") });
  }
  const d = [
    { x: -260, z: -120, size: h(130, 76, 102) },
    { x: 280, z: -280, size: h(112, 72, 94) },
    { x: -340, z: -620, size: h(118, 68, 90) },
    { x: 340, z: -860, size: h(138, 92, 110) }
  ];
  for (const s of d) {
    const E = ll(s.x, s.z);
    c.box(h(s.x, E + s.size.y * 0.5, s.z), s.size, {
      top: R("#8690a5"),
      sideA: R("#667186"),
      sideB: R("#586173")
    });
  }
  const o = ll(430, -80);
  return c.box(h(430, o + 108, -80), h(42, 216, 42), { top: R("#90a9c8"), sideA: R("#6c7f98"), sideB: R("#5d6d84") }), c.box(h(430, o + 190, -80), h(88, 28, 88), { top: R("#b5d3ef"), sideA: R("#8094aa"), sideB: R("#6f8093") }), oc(c, 650, -360, 108, 58, 86, R("#8392a5"), R("#667789"), R("#586677")), oc(c, 760, -620, 122, 54, 108, R("#8798aa"), R("#67798b"), R("#596a7b")), oc(c, 540, -720, 84, 42, 72, R("#7f8fa0"), R("#627283"), R("#556273")), jo(
    c,
    [h(150, 0, 200), h(-120, 0, 340), h(-620, 0, 620), h(-1220, 0, 1080), h(-1560, 0, 1640)],
    28,
    R("#69707b")
  ), jo(
    c,
    [h(220, 0, -60), h(760, 0, 120), h(1180, 0, 680), h(1600, 0, 1400), h(1880, 0, 1880)],
    24,
    R("#68717b")
  ), jo(
    c,
    [h(-920, 0, 3100), h(-980, 0, 2300), h(-1020, 0, 1380), h(-1120, 0, 280), h(-1220, 0, -1120), h(-1360, 0, -2800), h(-1520, 0, -4700)],
    22,
    R("#5f6873")
  ), ic(c, -1490, 1550, 4, 4, 96), ic(c, -1020, 930, 3, 3, 92), ic(c, 1850, 1830, 4, 3, 88), ic(c, 1420, -2220, 3, 4, 100), Ou(c, -1950, 2460, 32, 620, 740, 44, 72), Ou(c, -2380, -1500, 26, 760, 1180, 46, 78), Ou(c, 2240, 840, 26, 760, 820, 44, 72), Ou(c, 2760, -2780, 34, 960, 1160, 50, 86), Ou(c, -720, -4180, 24, 900, 820, 48, 78), fg(c), Uo(c, jn - 240, 300, 520, 560, R("#5d7388"), 0.6), Uo(c, jn + 320, 260, 460, 520, R("#4f677c"), 1.4), Uo(c, Nu + 220, 180, 320, 480, R("#667b8b"), -0.3), rg(c), c.toMesh();
}
function Bo(c, r, d) {
  c.box(St(r, h(0, 8, 0)), h(6, 16, 6), { top: R("#8e6d42"), sideA: R("#765630"), sideB: R("#66481f") });
  const o = St(r, h(0, 18, 0)), s = d * 0.28, E = St(o, h(0, d, 0)), v = St(o, h(-s, 0, -s)), N = St(o, h(s, 0, -s)), z = St(o, h(s, 0, s)), A = St(o, h(-s, 0, s)), B = R("#355d36");
  c.triangle(v, N, E, B), c.triangle(N, z, E, B), c.triangle(z, A, E, B), c.triangle(A, v, E, B);
}
function oc(c, r, d, o, s, E, v, N, z) {
  const A = ll(r, d);
  c.box(h(r, A + s * 0.5, d), h(o, s, E), { top: v, sideA: N, sideB: z });
}
function ig(c) {
  const r = R("#5d8aa3");
  for (let d = Nu - 80; d > jn + 120; d -= 180) {
    const o = d - 180, s = Hu(d), E = Hu(o), v = 110 + Math.sin(d * 12e-4) * 18, N = 118 + Math.sin(o * 12e-4) * 18, z = rc(s, d) ?? 2.6, A = rc(E, o) ?? 2.6;
    c.quad(
      h(s - v, z, d),
      h(s + v, z, d),
      h(E + N, A, o),
      h(E - N, A, o),
      r
    );
  }
}
function cg(c) {
  const r = R("#6b9ab5");
  c.quad(h(1260, 3.8, 2310), h(2460, 3.8, 2210), h(2520, 3.8, 1320), h(1180, 3.8, 1450), r), c.quad(h(1380, 3.7, 2440), h(2140, 3.8, 2400), h(2460, 3.8, 1780), h(1420, 3.8, 1630), R("#7db1c9"));
}
function jo(c, r, d, o) {
  for (let s = 0; s < r.length - 1; s += 1) {
    const E = r[s], v = r[s + 1], N = v.x - E.x, z = v.z - E.z, A = Math.hypot(N, z);
    if (A < 1e-3) continue;
    const B = -z / A, q = N / A, w = d * 0.5, J = E.x + B * w, it = E.z + q * w, ot = E.x - B * w, vt = E.z - q * w, yt = v.x - B * w, Et = v.z - q * w, lt = v.x + B * w, at = v.z + q * w;
    c.quad(
      h(J, ll(J, it) + 0.18, it),
      h(ot, ll(ot, vt) + 0.18, vt),
      h(yt, ll(yt, Et) + 0.18, Et),
      h(lt, ll(lt, at) + 0.18, at),
      o
    );
  }
}
function ic(c, r, d, o, s, E) {
  const v = [
    [R("#b7c1ce"), R("#8e9cab"), R("#7c8896")],
    [R("#d0c4b4"), R("#a79888"), R("#8e7d6f")],
    [R("#c4d1c7"), R("#90a692"), R("#78907a")]
  ];
  for (let N = 0; N < o; N += 1)
    for (let z = 0; z < s; z += 1) {
      const A = r + (z - (s - 1) * 0.5) * E, B = d + (N - (o - 1) * 0.5) * E, q = (Ne(A, B + 33) - 0.5) * 34, w = (Ne(B, A - 18) - 0.5) * 34, J = A + q, it = B + w, ot = 26 + Ne(J + 14, it + 41) * 18, vt = 22 + Ne(it - 35, J + 71) * 16, yt = 20 + Ne(J - 11, it + 7) * 36, Et = v[(N + z) % v.length];
      oc(c, J, it, ot, yt, vt, Et[0], Et[1], Et[2]);
    }
}
function Ou(c, r, d, o, s, E, v, N) {
  for (let z = 0; z < o; z += 1) {
    const A = (Ne(r * 0.3 + z * 17, d * 0.1 - z * 29) * 2 - 1) * s, B = (Ne(d * 0.3 - z * 11, r * 0.15 + z * 23) * 2 - 1) * E, q = r + A, w = d + B;
    if (Math.abs(q) < 280 && w < Qt + 260 && w > $l - 180) continue;
    const J = Jt(v, N, Ne(q + z * 3, w - z * 5));
    Bo(c, h(q, ll(q, w), w), J);
  }
}
function fg(c) {
  for (let r = 3400; r > -5200; r -= 240)
    Bo(c, h(-760, ll(-760, r), r), 54 + (r % 520 === 0 ? 12 : 0)), Bo(c, h(860, ll(860, r - 70), r - 70), 50 + (r % 480 === 0 ? 10 : 0));
}
function Uo(c, r, d, o, s, E, v) {
  for (let N = -8; N <= 8; N += 1) {
    const z = N * s - 140, A = d + Math.sin(N * 0.9 + v) * 70 + (N % 2 === 0 ? o : o * 0.72);
    c.triangle(h(z - 260, 30, r), h(z + 40, A, r - 120), h(z + 340, 38, r), E);
  }
}
function og(c, r, d) {
  const o = R("#f4f6fb"), s = R("#d8deea"), E = R("#c7d1df");
  c.box(r, h(180 * d, 42 * d, 72 * d), { top: o, sideA: s, sideB: E }), c.box(St(r, h(-60 * d, 12 * d, -24 * d)), h(94 * d, 34 * d, 58 * d), {
    top: o,
    sideA: s,
    sideB: E
  }), c.box(St(r, h(68 * d, 8 * d, 18 * d)), h(108 * d, 36 * d, 66 * d), {
    top: o,
    sideA: s,
    sideB: E
  });
}
function rg(c) {
  const r = [
    h(-1800, 520, 2100),
    h(1400, 560, 1600),
    h(2600, 610, -260),
    h(-2600, 620, -1320),
    h(800, 680, -2500),
    h(-600, 590, -3880),
    h(2200, 640, -4200)
  ];
  for (let d = 0; d < r.length; d += 1)
    og(c, r[d], 1 + d % 3 * 0.28);
}
function sg() {
  const c = Un(), r = R("#edf3fb"), d = R("#d6e1ee"), o = R("#b8c6d7"), s = R("#95a6ba"), E = R("#dfe8f5"), v = R("#9aaabd"), N = R("#214f80"), z = R("#173758"), A = R("#9bc2e7"), B = R("#6486a8"), q = R("#313845"), w = R("#141a24"), J = R("#eef4fb"), it = (O) => [
    h(-O.topWidth, O.topY, O.z),
    h(O.topWidth, O.topY, O.z),
    h(O.shoulderWidth, O.shoulderY, O.z),
    h(O.bottomWidth, O.bottomY, O.z),
    h(-O.bottomWidth, O.bottomY, O.z),
    h(-O.shoulderWidth, O.shoulderY, O.z)
  ], ot = (O, V, p) => {
    for (let _ = 0; _ < O.length; _ += 1) {
      const Y = (_ + 1) % O.length;
      c.quad(O[_], O[Y], V[Y], V[_], p[_]);
    }
  }, vt = (O, V, p) => {
    const _ = h(
      0,
      O.reduce((Y, G) => Y + G.y, 0) / O.length,
      V
    );
    for (let Y = 0; Y < O.length; Y += 1) {
      const G = (Y + 1) % O.length;
      c.triangle(O[Y], O[G], _, p);
    }
  }, yt = (O, V, p, _, Y) => [
    h(-V, p, O),
    h(V, p, O),
    h(_, Y, O),
    h(-_, Y, O)
  ], Et = (O, V) => {
    c.quad(O[0], O[1], V[1], V[0], A), c.quad(O[1], O[2], V[2], V[1], B), c.quad(O[2], O[3], V[3], V[2], B), c.quad(O[3], O[0], V[0], V[3], B);
  }, lt = (O, V) => {
    const p = h(0, (O[0].y + O[2].y) * 0.5, V);
    for (let _ = 0; _ < O.length; _ += 1) {
      const Y = (_ + 1) % O.length;
      c.triangle(O[_], O[Y], p, _ === 0 ? A : B);
    }
  }, at = [
    { z: -49.5, topY: 1.4, topWidth: 0.55, shoulderY: 0.35, shoulderWidth: 1.15, bottomY: -0.95, bottomWidth: 0.4 },
    { z: -44, topY: 2.7, topWidth: 1.9, shoulderY: 0.95, shoulderWidth: 3.4, bottomY: -1.7, bottomWidth: 1.35 },
    { z: -31, topY: 4.15, topWidth: 3.35, shoulderY: 1.75, shoulderWidth: 5.5, bottomY: -2.2, bottomWidth: 2.35 },
    { z: -13, topY: 5.9, topWidth: 4.25, shoulderY: 3.1, shoulderWidth: 7.05, bottomY: -2.35, bottomWidth: 2.8 },
    { z: 6, topY: 6.15, topWidth: 4.5, shoulderY: 3.1, shoulderWidth: 7.4, bottomY: -2.25, bottomWidth: 2.75 },
    { z: 22, topY: 5.1, topWidth: 3.1, shoulderY: 2.45, shoulderWidth: 5.05, bottomY: -1.8, bottomWidth: 1.9 },
    { z: 38, topY: 3.65, topWidth: 1.65, shoulderY: 1.55, shoulderWidth: 2.65, bottomY: -1.15, bottomWidth: 0.95 },
    { z: 50.5, topY: 2.45, topWidth: 0.65, shoulderY: 0.8, shoulderWidth: 1.15, bottomY: -0.45, bottomWidth: 0.35 }
  ], X = at.map(it), et = [
    r,
    J,
    d,
    s,
    o,
    J
  ];
  for (let O = 0; O < X.length - 1; O += 1)
    ot(X[O], X[O + 1], et);
  vt(X[0], at[0].z, r), vt(X[X.length - 1], at[at.length - 1].z, d);
  const I = h(0, 1.1, -56), Nt = X[0];
  for (let O = 0; O < Nt.length; O += 1) {
    const V = (O + 1) % Nt.length;
    c.triangle(Nt[O], Nt[V], I, O <= 1 || O === 5 ? r : d);
  }
  const qt = h(0, 1.1, -58.5), el = h(-1.45, 0.15, -51.4), bl = h(1.45, 0.15, -51.4), Wt = h(1.45, 2.05, -51.4), Yl = h(-1.45, 2.05, -51.4);
  c.triangle(el, bl, qt, N), c.triangle(bl, Wt, qt, N), c.triangle(Wt, Yl, qt, N), c.triangle(Yl, el, qt, N);
  const xl = yt(-18, 2.4, 6.55, 4.8, 3.25), ul = yt(-3, 3.15, 7.1, 5.2, 3.3), j = yt(12, 2.75, 6.35, 4.55, 3.05);
  Et(xl, ul), Et(ul, j), lt(xl, -18), lt(j, 12), c.box(h(0, 7.05, -4), h(6.25, 0.3, 17), { top: z, sideA: z, sideB: z }), c.box(h(0, 6.45, 5), h(5.7, 0.26, 11), { top: z, sideA: z, sideB: z }), c.box(h(0, 6.1, -15.4), h(0.42, 3.2, 9.2), { top: z, sideA: z, sideB: z });
  for (const O of [-1, 1])
    c.box(h(O * 5.05, 5.05, -4.4), h(0.34, 3.9, 18.4), { top: z, sideA: z, sideB: z }), c.box(h(O * 4.85, 5.7, 7.2), h(0.34, 2.45, 10.8), { top: z, sideA: z, sideB: z }), c.box(h(O * 4.55, 4.45, -13.2), h(0.34, 2.6, 8.2), { top: z, sideA: z, sideB: z });
  const L = (O) => {
    const V = h(O * 5.8, 0.45, -14.5), p = h(O * 66, 3.35, -3.4), _ = h(O * 49.5, 3.9, 18.8), Y = h(O * 21, 0.95, 14.6), G = St(V, h(0, -1.2, 0.45)), P = St(p, h(0, -1.22, 0.3)), nt = St(_, h(0, -1.18, -0.28)), rt = St(Y, h(0, -1.05, -0.12));
    c.quad(V, p, _, Y, E), c.quad(G, rt, nt, P, v), c.quad(V, Y, rt, G, o), c.quad(p, P, nt, _, z), c.quad(
      h(O * 26, 1.45, 10.6),
      h(O * 47.5, 2.5, 15.3),
      h(O * 43.5, 2.36, 20.4),
      h(O * 23.7, 1.35, 15.7),
      z
    ), c.quad(
      h(O * 6.1, 0.55, -11.2),
      h(O * 18.8, 1.1, -11.4),
      h(O * 15.5, 2.3, -3.2),
      h(O * 5.1, 1.55, -4.4),
      d
    );
  }, k = (O) => {
    const V = h(O * 2.9, 4.85, 35.5), p = h(O * 20.8, 5.55, 39.5), _ = h(O * 15.4, 5.92, 52), Y = h(O * 2.35, 5.02, 46.2), G = St(V, h(0, -0.56, 0.14)), P = St(p, h(0, -0.58, 0.16)), nt = St(_, h(0, -0.56, -0.18)), rt = St(Y, h(0, -0.48, -0.08));
    c.quad(V, p, _, Y, E), c.quad(G, rt, nt, P, v), c.quad(
      h(O * 6.2, 5.1, 43.5),
      h(O * 14.6, 5.46, 45.5),
      h(O * 12.9, 5.35, 49.4),
      h(O * 5.5, 5, 47.9),
      z
    );
  };
  L(-1), L(1), k(-1), k(1), c.quad(h(-1.15, 16.2, 30.5), h(1.15, 16.2, 30.5), h(1.7, 5.2, 43.2), h(-1.7, 5.2, 43.2), z), c.quad(h(-1.45, 14.8, 38.5), h(1.45, 14.8, 38.5), h(1.15, 5.1, 50.8), h(-1.15, 5.1, 50.8), N), c.quad(h(-1.9, 10.4, 26), h(1.9, 10.4, 26), h(2.45, 5.35, 34.8), h(-2.45, 5.35, 34.8), z), c.box(h(0, -0.1, -4), h(9.8, 0.35, 24), { top: z, sideA: z, sideB: z }), c.box(h(0, 4.2, 8), h(4.95, 0.4, 24), { top: N, sideA: z, sideB: z }), c.box(h(0, -4.65, -16), h(1.05, 8.4, 1.05), { top: q, sideA: R("#485362"), sideB: R("#3a4351") }), c.box(h(0, -5.95, -10.5), h(3.2, 2.6, 11.2), { top: R("#bec9d5"), sideA: R("#8695a8"), sideB: R("#738294") }), c.box(h(0, -8.95, -16.2), h(4, 2.25, 4), { top: w, sideA: R("#1a2230"), sideB: R("#0f1520") }), c.box(h(0, -8.25, -16), h(5.2, 3.05, 7.9), { top: R("#d9e2ee"), sideA: R("#a8b7c8"), sideB: R("#8f9fb1") }), c.box(h(0, -7.1, -16), h(1.85, 1.05, 8.8), { top: J, sideA: d, sideB: o });
  for (const O of [-1, 1])
    c.box(h(O * 15.5, -5.25, 7.2), h(1.05, 6.1, 1.05), { top: q, sideA: R("#485362"), sideB: R("#3a4351") }), c.box(h(O * 13.2, -3.5, 7.8), h(7.4, 2.45, 11.8), { top: R("#bec9d5"), sideA: R("#8a98ac"), sideB: R("#748394") }), c.box(h(O * 15.5, -8.68, 7.9), h(4.6, 2.5, 4.6), { top: w, sideA: R("#1a2230"), sideB: R("#0f1520") }), c.box(h(O * 15.6, -8.1, 7.9), h(8.1, 2.95, 6.9), { top: R("#d9e2ee"), sideA: R("#a8b7c8"), sideB: R("#8f9fb1") }), c.box(h(O * 14.1, -7.1, 7.9), h(4, 1.1, 7.8), { top: J, sideA: d, sideB: o }), c.box(h(O * 66.5, 3.55, -3), h(1.55, 1.55, 1.55), {
      top: O < 0 ? R("#d94152") : R("#5ad6a4"),
      sideA: O < 0 ? R("#c32d41") : R("#38b785"),
      sideB: O < 0 ? R("#aa2134") : R("#249e6e")
    });
  return c.box(h(0, 16.5, 30.8), h(1.2, 1.2, 1.2), { top: R("#d94152"), sideA: R("#c32d41"), sideB: R("#aa2134") }), c.toMesh();
}
function dg() {
  const c = Un();
  return c.box(h(0, 0, 0), h(38, 1.1, 0.8), { top: R("#232b37"), sideA: R("#181f2a"), sideB: R("#121924") }), c.box(h(0, 0, 0), h(1.1, 38, 0.8), { top: R("#232b37"), sideA: R("#181f2a"), sideB: R("#121924") }), c.box(h(0, 0, 0), h(5.2, 5.2, 3.2), { top: R("#76869b"), sideA: R("#5e6c80"), sideB: R("#495668") }), c.toMesh();
}
function hg() {
  const c = Un();
  return c.box(h(0, 0, 0), h(8, 3.2, 6), { top: R("#fff2d2"), sideA: R("#c7cbd3"), sideB: R("#9aa2af") }), c.toMesh();
}
function gg() {
  const c = Un();
  return c.ring(h(0, 0, 0), F0, 5.4, 32, 12, R("#9cc7ff")), c.toMesh();
}
function mg() {
  const c = Un();
  return c.quad(h(-16, 0, -24), h(16, 0, -24), h(12, 0, 16), h(-12, 0, 16), R("#17202c")), c.toMesh();
}
const yg = ug(), pg = sg(), vg = dg(), bg = hg(), Sg = gg(), xg = mg();
function Mg(c, r) {
  const d = [{ mesh: r.staticWorld }], o = $0(c), s = Cu(c.position);
  for (let v = 0; v < rl.length; v += 1) {
    const N = rl[v];
    d.push({
      mesh: r.ring,
      model: H0(N.center, 0, 0, c.time * 0.3, N.radius / F0),
      tint: ag(v, c)
    });
  }
  const E = c.position.y - ll(c.position.x, c.position.z);
  if (E < 80) {
    const v = W(1 + E / 180, 1, 1.45), N = Ft(h(o.trackForward.x, 0, o.trackForward.z)), z = Math.hypot(N.x, N.y, N.z) > 1e-4 ? Ft(ee(N, h(0, 1, 0))) : h(1, 0, 0);
    d.push({
      mesh: r.shadow,
      model: Do(
        h(c.position.x, ll(c.position.x, c.position.z) + 0.8, c.position.z),
        z,
        h(0, 1, 0),
        N,
        v
      ),
      tint: R("#111821")
    });
  }
  if (!(c.cameraMode === "cockpit" && c.mode === "flying")) {
    d.push({
      mesh: r.plane,
      model: Do(c.position, o.bodyRight, o.bodyUp, o.bodyForward, 1),
      tint: c.mode === "crashed" ? R("#ffb183") : R("#ffffff")
    });
    const v = c.time * (16 + c.throttle * 64 + c.speed * 0.8), N = sc(o.bodyRight, o.bodyForward, v), z = sc(o.bodyUp, o.bodyForward, v), A = St(St(c.position, yl(o.bodyForward, O2)), yl(o.bodyUp, j2));
    d.push({
      mesh: r.propeller,
      model: Do(A, N, z, o.bodyForward, 1),
      tint: R("#ffffff")
    });
  }
  for (let v = 0; v < 4; v += 1) {
    const N = -le - 58 - v * 12, z = Qt - 34;
    d.push({
      mesh: r.papiLight,
      model: H0(h(N, bt + 5.6, z), 0, 0, 0, 1),
      tint: P2(v, s)
    });
  }
  return d;
}
function zg() {
  const c = Bl.useRef(null), r = Bl.useRef(null), d = Bl.useRef(null), o = Bl.useRef({}), s = Bl.useRef(Oo()), E = Bl.useRef(null), [v, N] = Bl.useState(Oo()), [z, A] = Bl.useState(null), [B, q] = Bl.useState(!1), w = Math.max(0, v.position.y - ll(v.position.x, v.position.z)), J = Cu(v.position), it = Du(v.heading), ot = Du(v.selectedHeading), vt = W(X0(v.selectedHeading, v.heading) * 57.3 * 0.6, -84, 84), yt = v.pitch * 57.3, Et = Ho(v) * 57.3, lt = W((yt - Et) * 5.2, -70, 70), at = W(v.slip * 78, -60, 60), X = W((yt - v.commandPitch * 57.3) * 5.2, -72, 72), et = W(J.localizerDots * 18, -62, 62), I = W(J.glideslopeDots * 18, -62, 62), Nt = Math.abs(J.localizerMeters) < 2 ? "LOC centered" : `LOC ${Math.abs(J.localizerDots).toFixed(1)} ${J.localizerMeters > 0 ? "R" : "L"}`, qt = Math.abs(J.glideslopeDeviation) < 2 ? "GS on path" : `GS ${Math.abs(J.glideslopeDeviation).toFixed(0)}m ${J.glideslopeDeviation > 0 ? "high" : "low"}`, el = Array.from({ length: 9 }, (K, il) => {
    const Zt = (il - 4) * 10, sl = (Math.round(it / 10) * 10 + Zt + 360) % 360;
    return {
      offset: Zt * 6,
      label: tg(sl),
      major: sl % 30 === 0
    };
  }), bl = Bl.useMemo(
    () => [
      { label: `mode ${v.mode}`, tone: "pill" },
      { label: `camera ${v.cameraMode}`, tone: "pill ok" },
      { label: v.autopilot ? `ap ${v.lateralMode}/${v.verticalMode}` : v.flightDirector ? `fd ${v.lateralMode}/${v.verticalMode}` : "hand flying", tone: v.autopilot || v.flightDirector ? "pill ok" : "pill" },
      { label: `score ${v.score}`, tone: "pill ok" },
      { label: `ring ${Math.min(v.nextRing + 1, rl.length)}/${rl.length}`, tone: v.nextRing >= rl.length ? "pill ok" : "pill" },
      { label: `flaps ${uc(v.flaps)}`, tone: v.flaps > 0 ? "pill ok" : "pill" },
      ...v.terrainRunTime > 0.3 ? [{ label: "terrain run hot", tone: "pill ok" }] : [],
      { label: `fuel ${Math.round(v.fuel)}%`, tone: v.fuel > 25 ? "pill ok" : "pill bad" },
      { label: v.stall ? "stall risk" : "stable air", tone: v.stall ? "pill bad" : "pill ok" }
    ],
    [v]
  ), Wt = B ? 1.22 : 1, Yl = B ? 278 : 238, xl = B ? 248 : 214, ul = B ? 14 : 13, j = 240 * Wt, L = 180 * Wt, k = B ? 232 : 182, O = B ? 74 : 62, V = v.nextRing / rl.length * 100, p = v.nextRing < rl.length ? rl[v.nextRing]?.label ?? "Runway touchdown" : "Runway touchdown", _ = v.terrainRunTime > 0.25, Y = v.mode === "landed" ? "rgba(71, 156, 111, 0.92)" : v.mode === "crashed" ? "rgba(178, 78, 58, 0.92)" : "rgba(12, 20, 33, 0.88)", G = B ? {
    height: "100%",
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    background: "#07111d",
    border: "none",
    borderRadius: 0
  } : void 0, P = B ? {
    height: "100%",
    gridTemplateRows: "1fr auto auto auto",
    alignContent: "stretch",
    padding: 12
  } : { display: "grid", gap: 14 }, nt = B ? {
    background: "linear-gradient(180deg, rgba(83,122,194,0.2), rgba(8,13,22,0.44))",
    borderRadius: 20,
    padding: 10,
    border: "1px solid rgba(255,255,255,0.1)",
    minHeight: "calc(100vh - 220px)"
  } : {
    background: "linear-gradient(180deg, rgba(83,122,194,0.16), rgba(13,18,31,0.34))",
    borderRadius: 20,
    padding: 16,
    border: "1px solid rgba(255,255,255,0.08)"
  }, rt = B ? {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "calc(100vh - 244px)",
    overflow: "hidden",
    borderRadius: 18,
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
  function Dt() {
    N({
      ...s.current,
      position: { ...s.current.position },
      wind: { ...s.current.wind },
      camera: {
        ...s.current.camera,
        position: { ...s.current.camera.position },
        target: { ...s.current.camera.target },
        up: { ...s.current.camera.up }
      }
    });
  }
  function Ht(K = "flying") {
    const il = Oo();
    il.mode = K, il.message = K === "title" ? "Real 3D pass: WebGL scene, chase/cockpit cameras, and now a sim-style flight director plus autopilot layer." : "Fly the gates, keep your energy under control, and land on the centerline.", s.current = il, Dt();
  }
  function ae() {
    Ht("flying");
  }
  function ne() {
    s.current.cameraMode = s.current.cameraMode === "chase" ? "cockpit" : "chase", s.current.message = s.current.cameraMode === "cockpit" ? "Cockpit camera engaged. Fly the nose, not the whole plane." : "Chase camera engaged. Use the whole scene to judge the flare.", Dt();
  }
  function He(K) {
    s.current.flaps = W(s.current.flaps + K, 0, 2), s.current.message = `Flaps ${uc(s.current.flaps)} set.`, Dt();
  }
  function Cn(K) {
    s.current.trim = W(s.current.trim + K, -0.18, 0.18), s.current.message = `Pitch trim ${s.current.trim >= 0 ? "+" : ""}${s.current.trim.toFixed(2)} set.`, Dt();
  }
  function ue() {
    s.current.flightDirector = !s.current.flightDirector, s.current.flightDirector ? s.current.message = `Flight director on. ${s.current.lateralMode.toUpperCase()} / ${s.current.verticalMode.toUpperCase()} guidance armed.` : (s.current.autopilot = !1, s.current.commandRoll = 0, s.current.commandPitch = 0, s.current.message = "Flight director off. Hand fly the airplane."), Dt();
  }
  function wa() {
    s.current.autopilot = !s.current.autopilot, s.current.autopilot ? (s.current.flightDirector = !0, s.current.message = `Autopilot engaged. ${s.current.lateralMode.toUpperCase()} / ${s.current.verticalMode.toUpperCase()} active.`) : s.current.message = s.current.flightDirector ? "Autopilot disconnected. Flight director remains on." : "Autopilot disconnected.", Dt();
  }
  function Be(K) {
    s.current.flightDirector = !0, s.current.lateralMode = K, s.current.message = `Lateral mode ${K.toUpperCase()} selected.`, Dt();
  }
  function Bu(K) {
    s.current.flightDirector = !0, s.current.verticalMode = K, s.current.selectedAltitude = s.current.position.y, s.current.message = `Altitude hold armed at ${Math.round(s.current.selectedAltitude)} m.`, Dt();
  }
  function Nn() {
    s.current.flightDirector = !0, s.current.lateralMode = "apr", s.current.verticalMode = "apr", s.current.message = "Approach mode armed. Capture the localizer and glideslope.", Dt();
  }
  function Ye(K) {
    s.current.selectedHeading = W0(s.current.selectedHeading + K * Math.PI / 180), s.current.message = `Heading bug ${Math.round(Du(s.current.selectedHeading)).toString().padStart(3, "0")}.`, Dt();
  }
  function qe(K) {
    s.current.selectedAltitude = W(s.current.selectedAltitude + K, bt + 20, 1800), s.current.message = `Selected altitude ${Math.round(s.current.selectedAltitude)} m.`, Dt();
  }
  function st(K, il) {
    o.current[K] = il;
  }
  return Bl.useEffect(() => {
    const K = () => {
      q(document.fullscreenElement === r.current);
    };
    return document.addEventListener("fullscreenchange", K), K(), () => {
      document.removeEventListener("fullscreenchange", K);
    };
  }, []), Bl.useEffect(() => {
    const K = c.current, il = window, Zt = "__vt_pending" in il;
    if (!K) return;
    try {
      const tt = R2(K);
      E.current = {
        renderer: tt,
        staticWorld: tt.createMesh(yg),
        plane: tt.createMesh(pg),
        propeller: tt.createMesh(vg),
        ring: tt.createMesh(Sg),
        shadow: tt.createMesh(xg),
        papiLight: tt.createMesh(bg)
      }, A(null);
    } catch (tt) {
      const y = tt instanceof Error ? tt.message : "Unable to initialize WebGL renderer.";
      A(y);
      return;
    }
    const sl = (tt, y, At = 0) => {
      const Tt = s.current;
      Tt.mode = tt, Tt.speed = Math.max(0, Tt.speed * 0.18), Tt.groundSpeed = Math.max(0, Tt.groundSpeed * 0.12), Tt.pitchRate = 0, Tt.rollRate = 0, Tt.yawRate = 0, Tt.slip = 0, Tt.gLoad = 1, Tt.verticalVelocity = 0, Tt.throttle = 0, Tt.engineRpm = 760, Tt.terrainRunTime = 0, Tt.autopilot = !1, Tt.commandRoll = 0, Tt.commandPitch = 0, Tt.score += At, Tt.message = y;
    }, Lt = (tt, y = 0) => {
      const At = s.current;
      At.mode = "rollout", At.score += y, At.pitchRate = 0, At.rollRate = 0, At.yawRate = 0, At.roll = 0, At.slip = 0, At.verticalVelocity = 0, At.position.y = ll(At.position.x, At.position.z) + 4, At.throttle = Math.min(At.throttle, 0.18), At.engineRpm = Math.min(At.engineRpm, 1350), At.brakes = 0, At.autopilot = !1, At.message = tt;
    }, Hn = (tt) => {
      const y = s.current;
      if (y.mode === "flying") {
        const At = (o.current.arrowup || o.current.w ? 1 : 0) - (o.current.arrowdown || o.current.s ? 1 : 0), Tt = (o.current.arrowright || o.current.d ? 1 : 0) - (o.current.arrowleft || o.current.a ? 1 : 0), cl = (o.current.e ? 1 : 0) - (o.current.q ? 1 : 0), _l = (o.current.pageup || o.current["throttle-up"] ? 1 : 0) - (o.current.pagedown || o.current["throttle-down"] ? 1 : 0), fl = (o.current.r || o.current["trim-up"] ? 1 : 0) - (o.current.g || o.current["trim-down"] ? 1 : 0), Bn = W(y.speed / 64, 0.42, 1.18), Xa = W2(y.position, y.time), ie = y.flaps * 0.5, Qa = F2 + y.trim * 0.34, Ge = Cu(y.position), Za = X0(y.selectedHeading, y.heading), he = y.selectedAltitude - y.position.y, pa = y.lateralMode === "wlv" ? 0 : y.lateralMode === "hdg" ? W(Za * 1.85, -0.42, 0.42) : W(-Ge.localizerDots * 0.12 - y.slip * 0.05 - y.position.x * 8e-4, -0.4, 0.4), we = y.verticalMode === "alt" ? W(he * 65e-4 - y.verticalVelocity * 0.03 + 0.01, -0.14, 0.18) : W((Ge.desiredAltitude - y.position.y) * 85e-4 - y.verticalVelocity * 0.032 + 0.02, -0.16, 0.18);
        y.commandRoll = y.flightDirector ? pa : 0, y.commandPitch = y.flightDirector ? we : 0, y.autopilot && Math.abs(At) + Math.abs(Tt) + Math.abs(cl) > 1.2 && (y.autopilot = !1, y.message = "Autopilot disconnected. You have the airplane.");
        const dc = y.autopilot ? W((pa - y.roll) * 2.8 - y.rollRate * 0.45, -1, 1) : 0, qu = y.autopilot ? W((we - y.pitch) * 3.1 - y.pitchRate * 0.4, -1, 1) : 0, Yn = y.autopilot && y.lateralMode === "apr" ? W(-y.slip * 1.4 - Ge.localizerDots * 0.08, -0.35, 0.35) : 0, va = W(At + qu, -1, 1), qn = W(Tt + dc, -1, 1), Va = W(cl + Yn, -1, 1), Lu = (Math.sin(y.time * 1.42 + y.position.x * 14e-4) + Math.cos(y.time * 0.96 + y.position.z * 18e-4)) * 8e-3, Gu = (Math.cos(y.time * 1.14 + y.position.z * 12e-4) + Math.sin(y.time * 0.88 + y.position.x * 11e-4)) * 0.012;
        y.wind = Xa, y.rollRate += (qn * 1.82 * Bn - y.rollRate * 2.12 - y.roll * 0.28 + y.slip * 0.18 - Va * 0.06 + Gu) * tt, y.pitchRate += (va * 0.98 * Bn - y.pitchRate * 1.78 - (y.pitch - Qa) * 0.18 + Lu) * tt, y.yawRate += (Va * 0.88 * Bn - y.yawRate * 1.78 - y.slip * 0.78 - qn * 0.14 + Math.sin(y.roll) * 0.2) * tt, y.roll += y.rollRate * tt, y.roll = W(y.roll, -1.02, 1.02), y.pitch += y.pitchRate * tt, y.pitch = W(y.pitch, -0.24, 0.34), y.throttle = W(y.throttle + _l * 0.4 * tt, 0, 1), y.trim = W(y.trim + fl * 0.085 * tt, -0.18, 0.18), y.engineRpm = Jt(y.engineRpm, 900 + y.throttle * 2200 + y.speed * 12.5, 0.08), y.brakes = 0, y.fuel = W(y.fuel - y.throttle * tt * 1.55, 0, 100);
        const ce = y.position.y - ll(y.position.x, y.position.z);
        y.slip = W(
          y.slip + (Math.sin(y.roll) * 0.34 - y.yawRate * 0.48 - Va * 0.2 - y.slip * 2.1 + qn * 0.02) * tt,
          -0.5,
          0.5
        );
        const ba = Math.atan2(y.verticalVelocity - Xa.y, Math.max(22, y.speed)), ge = W(y.pitch - ba, -0.24, 0.44), Ka = W((Math.abs(ge) - q0) / 0.12, 0, 1), fe = ie * 0.22, al = ie * 0.08 + ie * ie * 0.03, pl = W(w2 + X2 * ge + fe, -0.7, L0 + ie * 0.2), Xe = Math.sign(ge || 1) * Jt(L0 + ie * 0.16, Q2 + ie * 0.08, Ka), Sa = Jt(pl, Xe, Ka), wu = Math.abs(y.position.x) <= le + 20 && y.position.z <= Qt + 160 && y.position.z >= $l - 60 && ce < 32 ? W((32 - ce) / 32, 0, 1) : 0, Xu = 0.5 * q2 * y.speed * y.speed, Qu = Z2 + V2 * Sa * Sa + al + Ka * K2 + Math.abs(y.slip) * J2, Qe = Jt(L2, G2, y.throttle), xa = Xu * Y0 * Sa * (1 + wu * 0.08), Ze = Xu * Y0 * Math.max(0.02, Qu - wu * 0.03), Ve = (Qe * Math.cos(ge) - Ze) / ac - nc * Math.sin(ba), Ma = (xa * Math.cos(y.roll) + Qe * Math.sin(y.pitch)) / ac - nc - y.verticalVelocity * 0.035 + Xa.y * 0.02, me = Math.max(24, y.speed * Math.cos(ba)), kt = xa * Math.sin(y.roll) / ac - y.slip * 3.2, Zu = nc * Math.tan(y.roll) / Math.max(34, me), Vu = Jt(kt / me, Zu, 0.68) + y.yawRate * 0.12;
        if (y.speed = W(y.speed + Ve * tt, 38, 112), y.verticalVelocity = W(y.verticalVelocity + Ma * tt, -24, 18), y.heading = w0(y.heading, y.heading + Vu * tt, 1), y.angleOfAttack = ge, y.gLoad = W(xa * Math.cos(y.roll) / (ac * nc), 0, 3.4), y.stall = Math.abs(ge) > q0, Math.abs(y.position.x) <= le + 16 && y.position.z <= Qt + 40 && y.position.z >= $l - 40 && ce < 20 && y.pitch > 0) {
          const Ll = W((20 - ce) / 20, 0, 1) * (0.22 + ie * 0.04);
          y.verticalVelocity = Jt(y.verticalVelocity, -1.6 + y.pitch * 3.8, Ll);
        }
        const ye = yl(Z0(y.heading, Ho(y)), y.speed), ql = St(ye, Xa);
        if (y.position.x += ql.x * tt, y.position.z += ql.z * tt, y.position.y += ql.y * tt, y.groundSpeed = Math.hypot(ql.x, ql.z), y.time += tt, y.nextRing < rl.length) {
          const Ll = rl[y.nextRing];
          lg(y.position, Ll) <= Ll.radius * 0.78 && (y.nextRing += 1, y.score += Ll.bonus, y.message = `${Ll.label} cleared. Keep the approach energy under control.`);
        }
        ce > 10 && ce < 38 && y.groundSpeed > 60 && Math.abs(y.roll) > 0.22 && Math.abs(y.slip) < 0.18 && y.mode === "flying" ? (y.terrainRunTime += tt, y.terrainRunTime >= 1.35 && (y.terrainRunTime -= 1.35, y.score += 55, y.message = "Terrain run bonus. Keep it fast, low, and coordinated.")) : y.terrainRunTime = Math.max(0, y.terrainRunTime - tt * 1.8), y.stall && Math.floor(y.time * 2) % 2 === 0 && (y.message = "Stall warning. Lower the nose or add power.");
        const Ln = ll(y.position.x, y.position.z) + 4;
        if (y.position.y <= Ln) {
          y.position.y = Ln;
          const Ll = Q0(y.position), hc = Math.abs(y.verticalVelocity) <= 4.5, Ja = Math.abs(y.roll) <= 0.18 && y.pitch >= -0.08 && y.pitch <= 0.2 && Math.abs(y.slip) <= 0.1, Fa = y.speed >= 44 && y.speed <= 90;
          if (Ll && Ja && Fa)
            if (hc) {
              const Gl = ng(y);
              Lt(`${Gl.label}. Roll it out, hold centerline, and brake to a stop.`, Gl.bonus);
            } else
              Lt("Rough landing. You smacked it down, but it is still salvageable if you keep it straight.", 320);
          else
            sl(
              "crashed",
              Ll ? "You hit the runway too hard. Bleed speed and flare earlier." : "You reached the ground off-runway. Line up sooner and hold centerline."
            );
        } else (y.position.x < K0 + 120 || y.position.x > J0 - 120 || y.position.z < jn + 180 || y.position.z > Nu - 180 || y.position.y > 1800) && sl("crashed", "You left the modeled flight region. Turn back toward the valley and the runway.");
      } else if (y.mode === "rollout") {
        const At = (o.current.e ? 1 : 0) - (o.current.q ? 1 : 0) + ((o.current.arrowright || o.current.d ? 1 : 0) - (o.current.arrowleft || o.current.a ? 1 : 0)) * 0.5, Tt = o.current.b || o.current.brake ? 1 : 0, cl = (o.current.pageup || o.current["throttle-up"] ? 1 : 0) - (o.current.pagedown || o.current["throttle-down"] ? 1 : 0);
        y.brakes = Tt, y.throttle = W(y.throttle + cl * 0.25 * tt, 0, 0.3), y.engineRpm = Jt(y.engineRpm, 760 + y.throttle * 1150, 0.08);
        const _l = At * 0.42;
        y.heading = w0(y.heading, y.heading + _l * tt * W(y.groundSpeed / 22, 0.35, 1.2), 1);
        const fl = 3.8 + y.brakes * 10.5 + Math.abs(_l) * 1.6;
        y.speed = Math.max(0, y.speed - fl * tt), y.groundSpeed = Math.max(0, y.groundSpeed - (fl + 1.2) * tt), y.position.x += Math.sin(y.heading) * y.groundSpeed * tt, y.position.z += -Math.cos(y.heading) * y.groundSpeed * tt, y.position.y = ll(y.position.x, y.position.z) + 4, y.pitch = Jt(y.pitch, -0.04, 0.08), y.roll = Jt(y.roll, 0, 0.18), y.verticalVelocity = 0, y.time += tt, !Q0(y.position) && y.groundSpeed > 12 ? sl("crashed", "You departed the runway during rollout. Hold the centerline and brake earlier.") : y.groundSpeed <= 6 ? sl("landed", "Full stop. Taxi speed reached and the rollout is complete.") : y.brakes > 0.2 && (y.message = "Braking rollout. Keep the nose straight and let the airplane decelerate.");
      }
      y.camera = eg(y);
    }, Le = () => {
      const tt = E.current;
      tt && tt.renderer.render(s.current.camera, Mg(s.current, tt)), Dt();
    };
    il.render_game_to_text = () => JSON.stringify({
      coordinateSystem: { x: "right", y: "up", z: "toward runway when decreasing" },
      mode: s.current.mode,
      cameraMode: s.current.cameraMode,
      plane: {
        x: Number(s.current.position.x.toFixed(1)),
        y: Number(s.current.position.y.toFixed(1)),
        z: Number(s.current.position.z.toFixed(1)),
        speedMps: Number(s.current.speed.toFixed(1)),
        speedKts: Number(La(s.current.speed).toFixed(1)),
        groundSpeedKts: Number(La(s.current.groundSpeed).toFixed(1)),
        engineRpm: Number(s.current.engineRpm.toFixed(0)),
        throttle: Number((s.current.throttle * 100).toFixed(0)),
        trim: Number(s.current.trim.toFixed(2)),
        brakes: Number(s.current.brakes.toFixed(2)),
        flaps: uc(s.current.flaps),
        heading: Number(Du(s.current.heading).toFixed(1)),
        pitch: Number((s.current.pitch * 57.3).toFixed(1)),
        roll: Number((s.current.roll * 57.3).toFixed(1)),
        pitchRate: Number((s.current.pitchRate * 57.3).toFixed(1)),
        rollRate: Number((s.current.rollRate * 57.3).toFixed(1)),
        yawRate: Number((s.current.yawRate * 57.3).toFixed(1)),
        verticalVelocityMps: Number(s.current.verticalVelocity.toFixed(1)),
        verticalVelocityFpm: Number(G0(s.current.verticalVelocity).toFixed(0)),
        altitudeAgl: Number((s.current.position.y - ll(s.current.position.x, s.current.position.z)).toFixed(1)),
        angleOfAttackDeg: Number((s.current.angleOfAttack * 57.3).toFixed(1)),
        slip: Number(s.current.slip.toFixed(2)),
        gLoad: Number(s.current.gLoad.toFixed(2)),
        stall: s.current.stall
      },
      camera: {
        x: Number(s.current.camera.position.x.toFixed(1)),
        y: Number(s.current.camera.position.y.toFixed(1)),
        z: Number(s.current.camera.position.z.toFixed(1)),
        targetX: Number(s.current.camera.target.x.toFixed(1)),
        targetY: Number(s.current.camera.target.y.toFixed(1)),
        targetZ: Number(s.current.camera.target.z.toFixed(1)),
        upX: Number(s.current.camera.up.x.toFixed(2)),
        upY: Number(s.current.camera.up.y.toFixed(2)),
        upZ: Number(s.current.camera.up.z.toFixed(2))
      },
      wind: {
        x: Number(s.current.wind.x.toFixed(2)),
        y: Number(s.current.wind.y.toFixed(2)),
        z: Number(s.current.wind.z.toFixed(2)),
        speedKts: Number(La(Math.hypot(s.current.wind.x, s.current.wind.z)).toFixed(1))
      },
      approach: {
        desiredAltitude: Number(No(s.current.position.z).toFixed(1)),
        localizerMeters: Number(s.current.position.x.toFixed(1)),
        localizerDots: Number((s.current.position.x / 18).toFixed(2)),
        glideslopeDeviation: Number((s.current.position.y - No(s.current.position.z)).toFixed(1)),
        papi: Cu(s.current.position).papiLabel,
        papiWhites: Cu(s.current.position).papiWhites
      },
      autopilot: {
        flightDirector: s.current.flightDirector,
        engaged: s.current.autopilot,
        lateralMode: s.current.lateralMode,
        verticalMode: s.current.verticalMode,
        selectedHeading: Number(Du(s.current.selectedHeading).toFixed(0)),
        selectedAltitude: Number(s.current.selectedAltitude.toFixed(0)),
        commandRollDeg: Number((s.current.commandRoll * 57.3).toFixed(1)),
        commandPitchDeg: Number((s.current.commandPitch * 57.3).toFixed(1))
      },
      ui: {
        fullscreen: document.fullscreenElement === r.current,
        terrainRunTime: Number(s.current.terrainRunTime.toFixed(2))
      },
      nextObjective: s.current.nextRing < rl.length ? rl[s.current.nextRing]?.label ?? "runway" : "runway touchdown",
      score: s.current.score,
      message: s.current.message
    }), il.advanceTime = (tt) => {
      const y = Math.max(1, Math.round(tt / 16.666666666666668));
      for (let At = 0; At < y; At += 1) Hn(1 / 60);
      Le();
    };
    const Yu = () => {
      Hn(1 / 60), Le(), d.current = window.requestAnimationFrame(Yu);
    };
    return Le(), Zt || (d.current = window.requestAnimationFrame(Yu)), () => {
      d.current != null && window.cancelAnimationFrame(d.current), E.current?.renderer.dispose(), E.current = null, delete il.render_game_to_text, delete il.advanceTime;
    };
  }, []), Bl.useEffect(() => {
    const K = async () => {
      const sl = r.current;
      sl && (document.fullscreenElement ? await document.exitFullscreen() : await sl.requestFullscreen());
    }, il = (sl) => {
      const Lt = sl.key.toLowerCase();
      if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d", "q", "e", "pageup", "pagedown", " ", "enter", "c", "f", "z", "x", "r", "g", "b", "v", "p", "n", "h", "l", "m", "j", "k", "u", "o"].includes(Lt) && sl.preventDefault(), Lt === "f") return void K();
      if (Lt === "c") return void ne();
      if (Lt === "z") return void He(1);
      if (Lt === "x") return void He(-1);
      if (Lt === "v") return void ue();
      if (Lt === "p") return void wa();
      if (Lt === "n") return void Be("wlv");
      if (Lt === "h") return void Be("hdg");
      if (Lt === "l") return void Bu("alt");
      if (Lt === "m") return void Nn();
      if (Lt === "j") return void Ye(-10);
      if (Lt === "k") return void Ye(10);
      if (Lt === "u") return void qe(-25);
      if (Lt === "o") return void qe(25);
      if ((Lt === " " || Lt === "enter") && ["title", "landed", "crashed"].includes(s.current.mode)) return void ae();
      o.current[Lt] = !0;
    }, Zt = (sl) => {
      o.current[sl.key.toLowerCase()] = !1;
    };
    return document.addEventListener("keydown", il), document.addEventListener("keyup", Zt), () => {
      document.removeEventListener("keydown", il), document.removeEventListener("keyup", Zt);
    };
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "workHub", style: { marginTop: 12 }, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "workHubHeader", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("div", { className: "workHubTitle", children: "Flight Sim 3D Engine" }),
        /* @__PURE__ */ m.jsx("div", { className: "workHubSubtitle", children: "WebGL terrain, chase/cockpit cameras, ILS-style cues, and a new flight-director/autopilot layer." })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ m.jsx("button", { id: "flight-start", onClick: ae, children: v.mode === "flying" ? "Restart Flight" : "Start Flight" }),
        /* @__PURE__ */ m.jsx("button", { onClick: ne, children: "Switch Camera" }),
        /* @__PURE__ */ m.jsx("button", { onClick: () => Ht("title"), children: "Back To Title" })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "workHubGrid", style: { marginTop: 12, alignItems: "start" }, children: [
      /* @__PURE__ */ m.jsxs("section", { ref: r, className: "panel", style: G, children: [
        /* @__PURE__ */ m.jsxs("div", { className: "panelHeader", children: [
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "panelTitle", children: "3D World" }),
            /* @__PURE__ */ m.jsx("div", { style: { fontSize: 12, opacity: 0.78 }, children: "Terrain mesh, lit runway, depth buffer, gate rings, and a visible aircraft" })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ m.jsx("button", { onClick: ne, children: v.cameraMode === "cockpit" ? "Chase Camera" : "Cockpit Camera" }),
            /* @__PURE__ */ m.jsx("button", { onClick: ae, children: v.mode === "flying" ? "Restart" : "Start" }),
            /* @__PURE__ */ m.jsx("button", { onClick: () => document.fullscreenElement ? document.exitFullscreen() : r.current?.requestFullscreen(), children: B ? "Exit Fullscreen" : "Fullscreen" })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "panelBody", style: P, children: [
          /* @__PURE__ */ m.jsx("div", { style: nt, children: /* @__PURE__ */ m.jsxs("div", { style: rt, children: [
            /* @__PURE__ */ m.jsx("canvas", { ref: c, style: { width: "100%", height: "100%", display: "block", background: "#0d1523" } }),
            z ? /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,15,24,0.82)", textAlign: "center", padding: 24 }, children: /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("div", { style: { fontSize: 22, fontWeight: 700 }, children: "Renderer unavailable" }),
              /* @__PURE__ */ m.jsx("div", { style: { marginTop: 10, opacity: 0.82 }, children: z })
            ] }) }) : /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: [
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", minWidth: B ? 360 : 300, maxWidth: "min(64vw, 520px)", padding: B ? "12px 16px" : "10px 14px", borderRadius: 16, background: "rgba(6,11,18,0.68)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", textAlign: "center" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", opacity: 0.72 }, children: "Objective" }),
                /* @__PURE__ */ m.jsx("div", { style: { marginTop: 6, fontSize: B ? 16 : 14, fontWeight: 700 }, children: p }),
                /* @__PURE__ */ m.jsx("div", { style: { marginTop: 10, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden" }, children: /* @__PURE__ */ m.jsx("div", { style: { width: `${V}%`, height: "100%", background: "linear-gradient(90deg, #67f0b6, #67a5ff)" } }) }),
                /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 8, display: "flex", justifyContent: "center", gap: 16, fontSize: 12, opacity: 0.8 }, children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    v.nextRing,
                    "/",
                    rl.length,
                    " gates"
                  ] }),
                  /* @__PURE__ */ m.jsx("span", { children: _ ? "terrain run live" : "stable approach" })
                ] })
              ] }),
              /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", top: B ? 108 : 102, left: "50%", transform: "translateX(-50%)", width: "min(62vw, 380px)", padding: "8px 12px", borderRadius: 14, background: "rgba(6,11,18,0.6)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }, children: /* @__PURE__ */ m.jsxs("div", { style: { position: "relative", height: 30, overflow: "hidden" }, children: [
                el.map((K) => /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", left: `calc(50% + ${K.offset}px)`, top: 0, transform: "translateX(-50%)", textAlign: "center", opacity: K.major ? 0.92 : 0.56 }, children: [
                  /* @__PURE__ */ m.jsx("div", { style: { fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" }, children: K.label }),
                  /* @__PURE__ */ m.jsx("div", { style: { margin: "4px auto 0", width: 2, height: K.major ? 12 : 7, background: "rgba(255,255,255,0.36)" } })
                ] }, `${K.offset}-${K.label}`)),
                v.flightDirector || v.autopilot ? /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: `calc(50% + ${vt}px)`,
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
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, marginLeft: -1, background: "rgba(255,213,107,0.9)" } }),
                /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", padding: "2px 8px", borderRadius: 999, background: "rgba(255,213,107,0.16)", fontSize: 11, fontWeight: 700 }, children: [
                  "HDG ",
                  Math.round(it).toString().padStart(3, "0")
                ] }),
                v.flightDirector || v.autopilot ? /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", right: 4, bottom: 0, padding: "2px 7px", borderRadius: 999, background: "rgba(255,113,215,0.18)", color: "rgba(255,205,250,0.96)", fontSize: 10, fontWeight: 700 }, children: [
                  "BUG ",
                  Math.round(ot).toString().padStart(3, "0")
                ] }) : null
              ] }) }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", top: 18, left: 18, minWidth: Yl, padding: B ? "14px 16px" : "12px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { fontSize: 12, opacity: 0.7, letterSpacing: 1.2, textTransform: "uppercase" }, children: "Flight Data" }),
                /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 8, display: "grid", gap: 6, fontSize: ul }, children: [
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    Math.round(La(v.speed)),
                    " kt"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    Math.round(La(v.groundSpeed)),
                    " kt GS"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    Math.round(w),
                    " m AGL"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Throttle ",
                    Math.round(v.throttle * 100),
                    "%"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    Math.round(v.engineRpm),
                    " RPM"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Trim ",
                    v.trim >= 0 ? "+" : "",
                    v.trim.toFixed(2)
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Brakes ",
                    v.brakes > 0.1 ? `${Math.round(v.brakes * 100)}%` : "released"
                  ] }),
                  /* @__PURE__ */ m.jsx("div", { children: v.autopilot ? "AP engaged" : v.flightDirector ? "FD armed" : "AP off" }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Sink ",
                    Math.round(G0(v.verticalVelocity)),
                    " fpm"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", top: 18, right: 18, minWidth: xl, padding: B ? "14px 16px" : "12px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { fontSize: 12, opacity: 0.7, letterSpacing: 1.2, textTransform: "uppercase" }, children: "Approach State" }),
                /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 8, display: "grid", gap: 6, fontSize: ul }, children: [
                  /* @__PURE__ */ m.jsx("div", { children: v.nextRing < rl.length ? rl[v.nextRing]?.label : "Runway touchdown" }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Camera ",
                    v.cameraMode
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Flaps ",
                    uc(v.flaps)
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "LAT ",
                    v.lateralMode.toUpperCase(),
                    " / VERT ",
                    v.verticalMode.toUpperCase()
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "HDG bug ",
                    Math.round(ot).toString().padStart(3, "0")
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "ALT sel ",
                    Math.round(v.selectedAltitude),
                    " m"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Wind ",
                    Math.round(La(Math.hypot(v.wind.x, v.wind.z))),
                    " kt"
                  ] }),
                  /* @__PURE__ */ m.jsx("div", { children: Nt }),
                  /* @__PURE__ */ m.jsx("div", { children: qt }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "PAPI ",
                    J.papiWhites,
                    "W / ",
                    4 - J.papiWhites,
                    "R"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "Target Alt ",
                    Math.round(J.desiredAltitude),
                    " m"
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { children: [
                    "AOA ",
                    (v.angleOfAttack * 57.3).toFixed(1),
                    " deg"
                  ] }),
                  /* @__PURE__ */ m.jsx("div", { children: v.stall ? "Stall warning active" : `${v.gLoad.toFixed(1)} G stable` })
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", width: O, height: k, borderRadius: 18, background: "rgba(5,9,15,0.56)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", overflow: "hidden" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(103,165,255,0.24), rgba(7,10,16,0.1))" } }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", top: 12, left: 0, right: 0, textAlign: "center", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.72 }, children: "IAS" }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 11, opacity: 0.74 }, children: "kt" }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: 38, bottom: 34, width: 10, marginLeft: -5, borderRadius: 999, background: "rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: `${W((v.speed - 36) / 68, 0, 1) * 100}%`, borderRadius: 999, background: "linear-gradient(180deg, #67a5ff, #68ffd8)" } }) }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: 0, right: 0, top: "50%", marginTop: -18, textAlign: "center", fontSize: B ? 20 : 17, fontWeight: 700 }, children: Math.round(La(v.speed)) })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", width: O, height: k, borderRadius: 18, background: "rgba(5,9,15,0.56)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", overflow: "hidden" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(103,240,182,0.24), rgba(7,10,16,0.1))" } }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", top: 12, left: 0, right: 0, textAlign: "center", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.72 }, children: "ALT" }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", fontSize: 11, opacity: 0.74 }, children: "m" }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: 38, bottom: 34, width: 10, marginLeft: -5, borderRadius: 999, background: "rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, height: `${W(w / 180, 0, 1) * 100}%`, borderRadius: 999, background: "linear-gradient(180deg, #67f0b6, #ffd56b)" } }) }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: 0, right: 0, top: "50%", marginTop: -18, textAlign: "center", fontSize: B ? 20 : 17, fontWeight: 700 }, children: Math.round(w) })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: j, height: L, transform: "translate(-50%, -50%)", overflow: "hidden" }, children: [
                /* @__PURE__ */ m.jsxs(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      inset: -120,
                      transform: `rotate(${-v.roll * 57.3}deg) translateY(${yt * 5.2}px)`,
                      transformOrigin: "50% 50%"
                    },
                    children: [
                      Y2.map((K) => /* @__PURE__ */ m.jsxs(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            left: "50%",
                            top: `calc(50% - ${K * 5.2}px)`,
                            width: K > 0 ? 96 : 76,
                            marginLeft: K > 0 ? -48 : -38,
                            borderTop: "2px solid rgba(255,255,255,0.34)",
                            opacity: 0.78
                          },
                          children: [
                            /* @__PURE__ */ m.jsx("span", { style: { position: "absolute", left: -24, top: -9, fontSize: 11, color: "rgba(255,255,255,0.78)" }, children: Math.abs(K) }),
                            /* @__PURE__ */ m.jsx("span", { style: { position: "absolute", right: -24, top: -9, fontSize: 11, color: "rgba(255,255,255,0.78)" }, children: Math.abs(K) })
                          ]
                        },
                        K
                      )),
                      /* @__PURE__ */ m.jsx(
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
                /* @__PURE__ */ m.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: `calc(50% + ${at}px - 12px)`,
                      top: `calc(50% + ${lt}px - 12px)`,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "2px solid rgba(104,255,203,0.85)",
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.2)"
                    }
                  }
                ),
                v.flightDirector || v.autopilot ? /* @__PURE__ */ m.jsxs(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      inset: -120,
                      transform: `rotate(${-v.commandRoll * 57.3}deg) translateY(${X}px)`,
                      transformOrigin: "50% 50%"
                    },
                    children: [
                      /* @__PURE__ */ m.jsx(
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
                      /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "calc(50% - 54px)", top: "50%", width: 18, height: 4, marginTop: -2, background: "rgba(255,113,215,0.94)" } }),
                      /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "calc(50% + 36px)", top: "50%", width: 18, height: 4, marginTop: -2, background: "rgba(255,113,215,0.94)" } })
                    ]
                  }
                ) : null
              ] }),
              /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: "50% auto auto 50%", transform: "translate(-50%, -50%)", width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.24)", boxShadow: "0 0 0 1px rgba(0,0,0,0.2)" } }),
              /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "calc(50% - 28px)", top: "50%", width: 22, height: 2, marginTop: -1, background: "rgba(255,255,255,0.26)" } }),
              /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: "calc(50% - 28px)", width: 2, height: 22, marginLeft: -1, background: "rgba(255,255,255,0.26)" } }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: 208, height: 42, transform: "translate(-50%, 84px)" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: "50% 18px auto 18px", height: 2, marginTop: -1, background: "rgba(255,255,255,0.2)" } }),
                [-48, -24, 0, 24, 48].map((K) => /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: `calc(50% + ${K}px)`, top: "50%", width: 2, height: K === 0 ? 18 : 10, marginLeft: -1, marginTop: K === 0 ? -9 : -5, background: "rgba(255,255,255,0.22)" } }, `loc-${K}`)),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: `calc(50% + ${et}px - 8px)`, top: "50%", width: 16, height: 16, marginTop: -8, transform: "rotate(45deg)", border: "2px solid rgba(255,113,215,0.92)", boxSizing: "border-box", background: "rgba(255,113,215,0.14)" } }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", bottom: 24, transform: "translateX(-50%)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.68 }, children: "LOC" })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", inset: "50% auto auto 50%", width: 42, height: 208, transform: "translate(112px, -50%)" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: "18px auto 18px 50%", width: 2, marginLeft: -1, background: "rgba(255,255,255,0.2)" } }),
                [-48, -24, 0, 24, 48].map((K) => /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: `calc(50% + ${K}px)`, width: K === 0 ? 18 : 10, height: 2, marginLeft: K === 0 ? -9 : -5, marginTop: -1, background: "rgba(255,255,255,0.22)" } }, `gs-${K}`)),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: `calc(50% + ${I}px - 8px)`, width: 16, height: 16, marginLeft: -8, transform: "rotate(45deg)", border: "2px solid rgba(255,113,215,0.92)", boxSizing: "border-box", background: "rgba(255,113,215,0.14)" } }),
                /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.68 }, children: "GS" })
              ] }),
              /* @__PURE__ */ m.jsx(
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
                  children: /* @__PURE__ */ m.jsx("div", { style: { width: `${v.slip * 50 + 50}%`, height: "100%", background: "linear-gradient(90deg, rgba(255,113,113,0.85), rgba(104,255,203,0.9), rgba(255,113,113,0.85))" } })
                }
              ),
              /* @__PURE__ */ m.jsxs("div", { style: { position: "absolute", left: 18, bottom: 72, display: "flex", gap: 8, flexWrap: "wrap", maxWidth: "min(54vw, 420px)" }, children: [
                /* @__PURE__ */ m.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: _ ? "rgba(69,167,121,0.88)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                  "Terrain Run ",
                  _ ? `${v.terrainRunTime.toFixed(1)}s` : "standby"
                ] }),
                /* @__PURE__ */ m.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                  "Fuel ",
                  Math.round(v.fuel),
                  "%"
                ] }),
                /* @__PURE__ */ m.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                  "Trim ",
                  v.trim >= 0 ? "+" : "",
                  v.trim.toFixed(2)
                ] }),
                /* @__PURE__ */ m.jsx("div", { style: { padding: "9px 12px", borderRadius: 999, background: v.autopilot ? "rgba(255,113,215,0.22)" : v.flightDirector ? "rgba(255,113,215,0.12)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: v.autopilot ? `AP ${v.lateralMode.toUpperCase()} / ${v.verticalMode.toUpperCase()}` : v.flightDirector ? `FD ${v.lateralMode.toUpperCase()} / ${v.verticalMode.toUpperCase()}` : "Autopilot off" }),
                /* @__PURE__ */ m.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: v.brakes > 0.1 ? "rgba(152,104,255,0.2)" : "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                  "Brakes ",
                  v.brakes > 0.1 ? "applied" : "ready"
                ] }),
                /* @__PURE__ */ m.jsxs("div", { style: { padding: "9px 12px", borderRadius: 999, background: "rgba(8,14,22,0.68)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12 }, children: [
                  "Score ",
                  v.score
                ] })
              ] }),
              ["title", "landed", "crashed"].includes(v.mode) ? /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(4,7,12,0.38)" }, children: /* @__PURE__ */ m.jsxs("div", { style: { width: "min(92%, 460px)", padding: B ? "26px 28px" : "22px 24px", borderRadius: 24, background: Y, border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 24px 70px rgba(0,0,0,0.32)", textAlign: "center" }, children: [
                /* @__PURE__ */ m.jsx("div", { style: { fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", opacity: 0.76 }, children: v.mode === "title" ? "Flight Deck Ready" : v.mode === "landed" ? "Runway Complete" : "Flight Lost" }),
                /* @__PURE__ */ m.jsx("div", { style: { marginTop: 10, fontSize: B ? 34 : 30, fontWeight: 800 }, children: v.mode === "title" ? "Gremlin Approach" : v.mode === "landed" ? "Touchdown Logged" : "Reset The Pattern" }),
                /* @__PURE__ */ m.jsx("div", { style: { marginTop: 12, fontSize: B ? 15 : 14, lineHeight: 1.6, opacity: 0.9 }, children: v.message }),
                /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, textAlign: "left" }, children: [
                  /* @__PURE__ */ m.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Mission" }),
                    /* @__PURE__ */ m.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "Three gates, one runway" })
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Playstyle" }),
                    /* @__PURE__ */ m.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "Low passes + controlled flare" })
                  ] }),
                  /* @__PURE__ */ m.jsxs("div", { style: { padding: "10px 12px", borderRadius: 16, background: "rgba(255,255,255,0.08)" }, children: [
                    /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.3, textTransform: "uppercase", opacity: 0.72 }, children: "Shortcuts" }),
                    /* @__PURE__ */ m.jsx("div", { style: { marginTop: 6, fontSize: 13, fontWeight: 700 }, children: "F fullscreen, C camera, Z/X flaps, R/G trim, V/P FD+AP, H/L/M modes" })
                  ] })
                ] }),
                /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 18, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", pointerEvents: "auto" }, children: [
                  /* @__PURE__ */ m.jsx("button", { id: "flight-overlay-start", onClick: ae, children: v.mode === "title" ? "Launch Sortie" : "Fly Again" }),
                  /* @__PURE__ */ m.jsx("button", { onClick: ne, children: v.cameraMode === "cockpit" ? "Use Chase Cam" : "Use Cockpit Cam" })
                ] })
              ] }) }) : null,
              /* @__PURE__ */ m.jsx("div", { style: { position: "absolute", left: 18, right: 18, bottom: 18, padding: B ? "12px 16px" : "10px 14px", borderRadius: 14, background: "rgba(7,12,20,0.62)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", fontSize: ul }, children: v.message })
            ] })
          ] }) }),
          /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: B ? "1.1fr 1fr 1fr" : "repeat(3, minmax(0, 1fr))", gap: 10 }, children: [
            /* @__PURE__ */ m.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Flight Controls" }),
              /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ m.jsx("button", { id: "flight-pitch-up", onMouseDown: () => st("arrowup", !0), onMouseUp: () => st("arrowup", !1), onMouseLeave: () => st("arrowup", !1), children: "Nose Up" }),
                /* @__PURE__ */ m.jsx("button", { id: "flight-pitch-down", onMouseDown: () => st("arrowdown", !0), onMouseUp: () => st("arrowdown", !1), onMouseLeave: () => st("arrowdown", !1), children: "Nose Down" }),
                /* @__PURE__ */ m.jsx("button", { id: "flight-bank-left", onMouseDown: () => st("arrowleft", !0), onMouseUp: () => st("arrowleft", !1), onMouseLeave: () => st("arrowleft", !1), children: "Bank Left" }),
                /* @__PURE__ */ m.jsx("button", { id: "flight-bank-right", onMouseDown: () => st("arrowright", !0), onMouseUp: () => st("arrowright", !1), onMouseLeave: () => st("arrowright", !1), children: "Bank Right" })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Power + Trim" }),
              /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ m.jsx("button", { onMouseDown: () => st("q", !0), onMouseUp: () => st("q", !1), onMouseLeave: () => st("q", !1), children: "Rudder Left" }),
                /* @__PURE__ */ m.jsx("button", { onMouseDown: () => st("e", !0), onMouseUp: () => st("e", !1), onMouseLeave: () => st("e", !1), children: "Rudder Right" }),
                /* @__PURE__ */ m.jsx("button", { id: "flight-throttle-down", onMouseDown: () => st("throttle-down", !0), onMouseUp: () => st("throttle-down", !1), onMouseLeave: () => st("throttle-down", !1), children: "Throttle Down" }),
                /* @__PURE__ */ m.jsx("button", { id: "flight-throttle-up", onMouseDown: () => st("throttle-up", !0), onMouseUp: () => st("throttle-up", !1), onMouseLeave: () => st("throttle-up", !1), children: "Throttle Up" }),
                /* @__PURE__ */ m.jsx("button", { onMouseDown: () => st("trim-down", !0), onMouseUp: () => st("trim-down", !1), onMouseLeave: () => st("trim-down", !1), onClick: () => Cn(-0.01), children: "Trim Down" }),
                /* @__PURE__ */ m.jsx("button", { onMouseDown: () => st("trim-up", !0), onMouseUp: () => st("trim-up", !1), onMouseLeave: () => st("trim-up", !1), onClick: () => Cn(0.01), children: "Trim Up" }),
                /* @__PURE__ */ m.jsx("button", { onMouseDown: () => st("brake", !0), onMouseUp: () => st("brake", !1), onMouseLeave: () => st("brake", !1), children: "Brakes" })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { style: { padding: "12px", borderRadius: 18, background: "rgba(10,16,27,0.72)", border: "1px solid rgba(255,255,255,0.08)", display: "grid", gap: 10 }, children: [
              /* @__PURE__ */ m.jsx("div", { style: { fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", opacity: 0.68 }, children: "Systems + Autopilot" }),
              /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }, children: [
                /* @__PURE__ */ m.jsx("button", { onClick: () => He(-1), children: "Flaps Up" }),
                /* @__PURE__ */ m.jsx("button", { onClick: () => He(1), children: "Flaps Down" }),
                /* @__PURE__ */ m.jsx("button", { onClick: ne, children: "Camera" }),
                /* @__PURE__ */ m.jsx("button", { onClick: ue, children: v.flightDirector ? "FD On" : "FD Off" }),
                /* @__PURE__ */ m.jsx("button", { onClick: wa, children: v.autopilot ? "AP Off" : "AP On" }),
                /* @__PURE__ */ m.jsx("button", { onClick: () => Be("wlv"), children: "WLV" }),
                /* @__PURE__ */ m.jsx("button", { onClick: () => Be("hdg"), children: "HDG" }),
                /* @__PURE__ */ m.jsx("button", { onClick: () => Bu("alt"), children: "ALT" }),
                /* @__PURE__ */ m.jsx("button", { onClick: Nn, children: "APR" })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gap: 8 }, children: [
                /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 8, alignItems: "center" }, children: [
                  /* @__PURE__ */ m.jsx("button", { onClick: () => Ye(-10), children: "HDG -" }),
                  /* @__PURE__ */ m.jsx("div", { style: { textAlign: "center", padding: "8px 10px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 700 }, children: Math.round(ot).toString().padStart(3, "0") }),
                  /* @__PURE__ */ m.jsx("button", { onClick: () => Ye(10), children: "HDG +" })
                ] }),
                /* @__PURE__ */ m.jsxs("div", { style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 8, alignItems: "center" }, children: [
                  /* @__PURE__ */ m.jsx("button", { onClick: () => qe(-25), children: "ALT -" }),
                  /* @__PURE__ */ m.jsxs("div", { style: { textAlign: "center", padding: "8px 10px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12, fontWeight: 700 }, children: [
                    Math.round(v.selectedAltitude),
                    " m"
                  ] }),
                  /* @__PURE__ */ m.jsx("button", { onClick: () => qe(25), children: "ALT +" })
                ] }),
                B ? /* @__PURE__ */ m.jsx("button", { onClick: () => Ht("title"), children: "Title" }) : null
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("section", { className: "panel", children: [
        /* @__PURE__ */ m.jsx("div", { className: "panelHeader", children: /* @__PURE__ */ m.jsx("div", { className: "panelTitle", children: "Flight Notes" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "panelBody", style: { display: "grid", gap: 12 }, children: [
          /* @__PURE__ */ m.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ m.jsx("div", { style: { fontWeight: 700 }, children: "Controls" }),
            /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: [
              /* @__PURE__ */ m.jsx("code", { children: "Up/W" }),
              " raises the nose, ",
              /* @__PURE__ */ m.jsx("code", { children: "Down/S" }),
              " lowers it, ",
              /* @__PURE__ */ m.jsx("code", { children: "Left/Right" }),
              " or ",
              /* @__PURE__ */ m.jsx("code", { children: "A/D" }),
              " rolls, ",
              /* @__PURE__ */ m.jsx("code", { children: "Q/E" }),
              " works the rudder, ",
              /* @__PURE__ */ m.jsx("code", { children: "Page Up/Page Down" }),
              " changes throttle, ",
              /* @__PURE__ */ m.jsx("code", { children: "R/G" }),
              " changes pitch trim, ",
              /* @__PURE__ */ m.jsx("code", { children: "B" }),
              " applies brakes during rollout, ",
              /* @__PURE__ */ m.jsx("code", { children: "Z/X" }),
              " adjusts flaps, ",
              /* @__PURE__ */ m.jsx("code", { children: "C" }),
              " switches camera, ",
              /* @__PURE__ */ m.jsx("code", { children: "V" }),
              "/",
              /* @__PURE__ */ m.jsx("code", { children: "P" }),
              " toggle the flight director and autopilot, ",
              /* @__PURE__ */ m.jsx("code", { children: "H" }),
              "/",
              /* @__PURE__ */ m.jsx("code", { children: "N" }),
              "/",
              /* @__PURE__ */ m.jsx("code", { children: "L" }),
              "/",
              /* @__PURE__ */ m.jsx("code", { children: "M" }),
              " change guidance modes, ",
              /* @__PURE__ */ m.jsx("code", { children: "J/K" }),
              " move the heading bug, ",
              /* @__PURE__ */ m.jsx("code", { children: "U/O" }),
              " move the selected altitude, and ",
              /* @__PURE__ */ m.jsx("code", { children: "F" }),
              " toggles fullscreen."
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ m.jsx("div", { style: { fontWeight: 700 }, children: "Mission" }),
            /* @__PURE__ */ m.jsx("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: "This is now a real 3D scene instead of a fake runway illusion. Fly the full gate sequence, stabilize the descent, land on the runway centerline, then roll it out to a full stop." })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ m.jsx("div", { style: { fontWeight: 700 }, children: "Engine Upgrade" }),
            /* @__PURE__ */ m.jsx("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: "WebGL now handles the perspective camera, lighting, fog, depth test, and triangle meshes. This pass adds wind, light turbulence, flap lift/drag behavior, spinning prop visuals, runway PAPI lights, heading tape cues, localizer / glideslope guidance, a flight-director command bar, selectable heading/altitude bugs, and a simple X-Plane-style autopilot layer." })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "chatItem", style: { textAlign: "left" }, children: [
            /* @__PURE__ */ m.jsx("div", { style: { fontWeight: 700 }, children: "Test Hooks" }),
            /* @__PURE__ */ m.jsxs("div", { style: { marginTop: 8, fontSize: 13, lineHeight: 1.6, opacity: 0.84 }, children: [
              "The page still exposes ",
              /* @__PURE__ */ m.jsx("code", { children: "window.render_game_to_text()" }),
              " and ",
              /* @__PURE__ */ m.jsx("code", { children: "window.advanceTime(ms)" }),
              " for deterministic testing."
            ] })
          ] }),
          /* @__PURE__ */ m.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: bl.map((K) => /* @__PURE__ */ m.jsx("span", { className: K.tone, children: K.label }, K.label)) }),
          /* @__PURE__ */ m.jsx("pre", { style: { margin: 0, whiteSpace: "pre-wrap", fontSize: 12, lineHeight: 1.5, opacity: 0.88 }, children: window.render_game_to_text?.() ?? "Game runtime not ready yet." })
        ] })
      ] })
    ] })
  ] });
}
const I0 = document.getElementById("flight-sim-root");
if (!I0)
  throw new Error("Flight Sim export root element was not found.");
document.title = "Flight Sim | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("flight-sim-export-body");
m2.createRoot(I0).render(/* @__PURE__ */ m.jsx(zg, {}));
