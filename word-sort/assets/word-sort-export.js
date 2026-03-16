var Zf = { exports: {} }, Zu = {};
var a0;
function ly() {
  if (a0) return Zu;
  a0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(r, f, O) {
    var z = null;
    if (O !== void 0 && (z = "" + O), f.key !== void 0 && (z = "" + f.key), "key" in f) {
      O = {};
      for (var L in f)
        L !== "key" && (O[L] = f[L]);
    } else O = f;
    return f = O.ref, {
      $$typeof: i,
      type: r,
      key: z,
      ref: f !== void 0 ? f : null,
      props: O
    };
  }
  return Zu.Fragment = s, Zu.jsx = h, Zu.jsxs = h, Zu;
}
var i0;
function ey() {
  return i0 || (i0 = 1, Zf.exports = ly()), Zf.exports;
}
var Q = ey(), Vf = { exports: {} }, Vu = {}, Kf = { exports: {} }, Jf = {};
var c0;
function ty() {
  return c0 || (c0 = 1, (function(i) {
    function s(M, D) {
      var J = M.length;
      M.push(D);
      l: for (; 0 < J; ) {
        var dl = J - 1 >>> 1, hl = M[dl];
        if (0 < f(hl, D))
          M[dl] = D, M[J] = hl, J = dl;
        else break l;
      }
    }
    function h(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var D = M[0], J = M.pop();
      if (J !== D) {
        M[0] = J;
        l: for (var dl = 0, hl = M.length, m = hl >>> 1; dl < m; ) {
          var B = 2 * (dl + 1) - 1, G = M[B], v = B + 1, N = M[v];
          if (0 > f(G, J))
            v < hl && 0 > f(N, G) ? (M[dl] = N, M[v] = J, dl = v) : (M[dl] = G, M[B] = J, dl = B);
          else if (v < hl && 0 > f(N, J))
            M[dl] = N, M[v] = J, dl = v;
          else break l;
        }
      }
      return D;
    }
    function f(M, D) {
      var J = M.sortIndex - D.sortIndex;
      return J !== 0 ? J : M.id - D.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      i.unstable_now = function() {
        return O.now();
      };
    } else {
      var z = Date, L = z.now();
      i.unstable_now = function() {
        return z.now() - L;
      };
    }
    var H = [], E = [], p = 1, U = null, R = 3, W = !1, nl = !1, il = !1, Ol = !1, cl = typeof setTimeout == "function" ? setTimeout : null, Dl = typeof clearTimeout == "function" ? clearTimeout : null, bl = typeof setImmediate < "u" ? setImmediate : null;
    function Vl(M) {
      for (var D = h(E); D !== null; ) {
        if (D.callback === null) r(E);
        else if (D.startTime <= M)
          r(E), D.sortIndex = D.expirationTime, s(H, D);
        else break;
        D = h(E);
      }
    }
    function Kl(M) {
      if (il = !1, Vl(M), !nl)
        if (h(H) !== null)
          nl = !0, ql || (ql = !0, Pl());
        else {
          var D = h(E);
          D !== null && Al(Kl, D.startTime - M);
        }
    }
    var ql = !1, P = -1, Jl = 5, re = -1;
    function Ve() {
      return Ol ? !0 : !(i.unstable_now() - re < Jl);
    }
    function Te() {
      if (Ol = !1, ql) {
        var M = i.unstable_now();
        re = M;
        var D = !0;
        try {
          l: {
            nl = !1, il && (il = !1, Dl(P), P = -1), W = !0;
            var J = R;
            try {
              e: {
                for (Vl(M), U = h(H); U !== null && !(U.expirationTime > M && Ve()); ) {
                  var dl = U.callback;
                  if (typeof dl == "function") {
                    U.callback = null, R = U.priorityLevel;
                    var hl = dl(
                      U.expirationTime <= M
                    );
                    if (M = i.unstable_now(), typeof hl == "function") {
                      U.callback = hl, Vl(M), D = !0;
                      break e;
                    }
                    U === h(H) && r(H), Vl(M);
                  } else r(H);
                  U = h(H);
                }
                if (U !== null) D = !0;
                else {
                  var m = h(E);
                  m !== null && Al(
                    Kl,
                    m.startTime - M
                  ), D = !1;
                }
              }
              break l;
            } finally {
              U = null, R = J, W = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Pl() : ql = !1;
        }
      }
    }
    var Pl;
    if (typeof bl == "function")
      Pl = function() {
        bl(Te);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), we = Ke.port2;
      Ke.port1.onmessage = Te, Pl = function() {
        we.postMessage(null);
      };
    } else
      Pl = function() {
        cl(Te, 0);
      };
    function Al(M, D) {
      P = cl(function() {
        M(i.unstable_now());
      }, D);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, i.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Jl = 0 < M ? Math.floor(1e3 / M) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, i.unstable_next = function(M) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = R;
      }
      var J = R;
      R = D;
      try {
        return M();
      } finally {
        R = J;
      }
    }, i.unstable_requestPaint = function() {
      Ol = !0;
    }, i.unstable_runWithPriority = function(M, D) {
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
      var J = R;
      R = M;
      try {
        return D();
      } finally {
        R = J;
      }
    }, i.unstable_scheduleCallback = function(M, D, J) {
      var dl = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? dl + J : dl) : J = dl, M) {
        case 1:
          var hl = -1;
          break;
        case 2:
          hl = 250;
          break;
        case 5:
          hl = 1073741823;
          break;
        case 4:
          hl = 1e4;
          break;
        default:
          hl = 5e3;
      }
      return hl = J + hl, M = {
        id: p++,
        callback: D,
        priorityLevel: M,
        startTime: J,
        expirationTime: hl,
        sortIndex: -1
      }, J > dl ? (M.sortIndex = J, s(E, M), h(H) === null && M === h(E) && (il ? (Dl(P), P = -1) : il = !0, Al(Kl, J - dl))) : (M.sortIndex = hl, s(H, M), nl || W || (nl = !0, ql || (ql = !0, Pl()))), M;
    }, i.unstable_shouldYield = Ve, i.unstable_wrapCallback = function(M) {
      var D = R;
      return function() {
        var J = R;
        R = D;
        try {
          return M.apply(this, arguments);
        } finally {
          R = J;
        }
      };
    };
  })(Jf)), Jf;
}
var f0;
function ny() {
  return f0 || (f0 = 1, Kf.exports = ty()), Kf.exports;
}
var kf = { exports: {} }, $ = {};
var o0;
function uy() {
  if (o0) return $;
  o0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), R = Symbol.iterator;
  function W(m) {
    return m === null || typeof m != "object" ? null : (m = R && m[R] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var nl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, il = Object.assign, Ol = {};
  function cl(m, B, G) {
    this.props = m, this.context = B, this.refs = Ol, this.updater = G || nl;
  }
  cl.prototype.isReactComponent = {}, cl.prototype.setState = function(m, B) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, B, "setState");
  }, cl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Dl() {
  }
  Dl.prototype = cl.prototype;
  function bl(m, B, G) {
    this.props = m, this.context = B, this.refs = Ol, this.updater = G || nl;
  }
  var Vl = bl.prototype = new Dl();
  Vl.constructor = bl, il(Vl, cl.prototype), Vl.isPureReactComponent = !0;
  var Kl = Array.isArray;
  function ql() {
  }
  var P = { H: null, A: null, T: null, S: null }, Jl = Object.prototype.hasOwnProperty;
  function re(m, B, G) {
    var v = G.ref;
    return {
      $$typeof: i,
      type: m,
      key: B,
      ref: v !== void 0 ? v : null,
      props: G
    };
  }
  function Ve(m, B) {
    return re(m.type, B, m.props);
  }
  function Te(m) {
    return typeof m == "object" && m !== null && m.$$typeof === i;
  }
  function Pl(m) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(G) {
      return B[G];
    });
  }
  var Ke = /\/+/g;
  function we(m, B) {
    return typeof m == "object" && m !== null && m.key != null ? Pl("" + m.key) : B.toString(36);
  }
  function Al(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(ql, ql) : (m.status = "pending", m.then(
          function(B) {
            m.status === "pending" && (m.status = "fulfilled", m.value = B);
          },
          function(B) {
            m.status === "pending" && (m.status = "rejected", m.reason = B);
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
  function M(m, B, G, v, N) {
    var A = typeof m;
    (A === "undefined" || A === "boolean") && (m = null);
    var x = !1;
    if (m === null) x = !0;
    else
      switch (A) {
        case "bigint":
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case i:
            case s:
              x = !0;
              break;
            case p:
              return x = m._init, M(
                x(m._payload),
                B,
                G,
                v,
                N
              );
          }
      }
    if (x)
      return N = N(m), x = v === "" ? "." + we(m, 0) : v, Kl(N) ? (G = "", x != null && (G = x.replace(Ke, "$&/") + "/"), M(N, B, G, "", function(k) {
        return k;
      })) : N != null && (Te(N) && (N = Ve(
        N,
        G + (N.key == null || m && m.key === N.key ? "" : ("" + N.key).replace(
          Ke,
          "$&/"
        ) + "/") + x
      )), B.push(N)), 1;
    x = 0;
    var Y = v === "" ? "." : v + ":";
    if (Kl(m))
      for (var q = 0; q < m.length; q++)
        v = m[q], A = Y + we(v, q), x += M(
          v,
          B,
          G,
          A,
          N
        );
    else if (q = W(m), typeof q == "function")
      for (m = q.call(m), q = 0; !(v = m.next()).done; )
        v = v.value, A = Y + we(v, q++), x += M(
          v,
          B,
          G,
          A,
          N
        );
    else if (A === "object") {
      if (typeof m.then == "function")
        return M(
          Al(m),
          B,
          G,
          v,
          N
        );
      throw B = String(m), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return x;
  }
  function D(m, B, G) {
    if (m == null) return m;
    var v = [], N = 0;
    return M(m, v, "", "", function(A) {
      return B.call(G, A, N++);
    }), v;
  }
  function J(m) {
    if (m._status === -1) {
      var B = m._result;
      B = B(), B.then(
        function(G) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = G);
        },
        function(G) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = G);
        }
      ), m._status === -1 && (m._status = 0, m._result = B);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var dl = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, hl = {
    map: D,
    forEach: function(m, B, G) {
      D(
        m,
        function() {
          B.apply(this, arguments);
        },
        G
      );
    },
    count: function(m) {
      var B = 0;
      return D(m, function() {
        B++;
      }), B;
    },
    toArray: function(m) {
      return D(m, function(B) {
        return B;
      }) || [];
    },
    only: function(m) {
      if (!Te(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return $.Activity = U, $.Children = hl, $.Component = cl, $.Fragment = h, $.Profiler = f, $.PureComponent = bl, $.StrictMode = r, $.Suspense = H, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return P.H.useMemoCache(m);
    }
  }, $.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, $.cacheSignal = function() {
    return null;
  }, $.cloneElement = function(m, B, G) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var v = il({}, m.props), N = m.key;
    if (B != null)
      for (A in B.key !== void 0 && (N = "" + B.key), B)
        !Jl.call(B, A) || A === "key" || A === "__self" || A === "__source" || A === "ref" && B.ref === void 0 || (v[A] = B[A]);
    var A = arguments.length - 2;
    if (A === 1) v.children = G;
    else if (1 < A) {
      for (var x = Array(A), Y = 0; Y < A; Y++)
        x[Y] = arguments[Y + 2];
      v.children = x;
    }
    return re(m.type, N, v);
  }, $.createContext = function(m) {
    return m = {
      $$typeof: z,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: O,
      _context: m
    }, m;
  }, $.createElement = function(m, B, G) {
    var v, N = {}, A = null;
    if (B != null)
      for (v in B.key !== void 0 && (A = "" + B.key), B)
        Jl.call(B, v) && v !== "key" && v !== "__self" && v !== "__source" && (N[v] = B[v]);
    var x = arguments.length - 2;
    if (x === 1) N.children = G;
    else if (1 < x) {
      for (var Y = Array(x), q = 0; q < x; q++)
        Y[q] = arguments[q + 2];
      N.children = Y;
    }
    if (m && m.defaultProps)
      for (v in x = m.defaultProps, x)
        N[v] === void 0 && (N[v] = x[v]);
    return re(m, A, N);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(m) {
    return { $$typeof: L, render: m };
  }, $.isValidElement = Te, $.lazy = function(m) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: m },
      _init: J
    };
  }, $.memo = function(m, B) {
    return {
      $$typeof: E,
      type: m,
      compare: B === void 0 ? null : B
    };
  }, $.startTransition = function(m) {
    var B = P.T, G = {};
    P.T = G;
    try {
      var v = m(), N = P.S;
      N !== null && N(G, v), typeof v == "object" && v !== null && typeof v.then == "function" && v.then(ql, dl);
    } catch (A) {
      dl(A);
    } finally {
      B !== null && G.types !== null && (B.types = G.types), P.T = B;
    }
  }, $.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, $.use = function(m) {
    return P.H.use(m);
  }, $.useActionState = function(m, B, G) {
    return P.H.useActionState(m, B, G);
  }, $.useCallback = function(m, B) {
    return P.H.useCallback(m, B);
  }, $.useContext = function(m) {
    return P.H.useContext(m);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(m, B) {
    return P.H.useDeferredValue(m, B);
  }, $.useEffect = function(m, B) {
    return P.H.useEffect(m, B);
  }, $.useEffectEvent = function(m) {
    return P.H.useEffectEvent(m);
  }, $.useId = function() {
    return P.H.useId();
  }, $.useImperativeHandle = function(m, B, G) {
    return P.H.useImperativeHandle(m, B, G);
  }, $.useInsertionEffect = function(m, B) {
    return P.H.useInsertionEffect(m, B);
  }, $.useLayoutEffect = function(m, B) {
    return P.H.useLayoutEffect(m, B);
  }, $.useMemo = function(m, B) {
    return P.H.useMemo(m, B);
  }, $.useOptimistic = function(m, B) {
    return P.H.useOptimistic(m, B);
  }, $.useReducer = function(m, B, G) {
    return P.H.useReducer(m, B, G);
  }, $.useRef = function(m) {
    return P.H.useRef(m);
  }, $.useState = function(m) {
    return P.H.useState(m);
  }, $.useSyncExternalStore = function(m, B, G) {
    return P.H.useSyncExternalStore(
      m,
      B,
      G
    );
  }, $.useTransition = function() {
    return P.H.useTransition();
  }, $.version = "19.2.4", $;
}
var r0;
function lo() {
  return r0 || (r0 = 1, kf.exports = uy()), kf.exports;
}
var Wf = { exports: {} }, le = {};
var s0;
function ay() {
  if (s0) return le;
  s0 = 1;
  var i = lo();
  function s(H) {
    var E = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        E += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + H + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var r = {
    d: {
      f: h,
      r: function() {
        throw Error(s(522));
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
  }, f = /* @__PURE__ */ Symbol.for("react.portal");
  function O(H, E, p) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: U == null ? null : "" + U,
      children: H,
      containerInfo: E,
      implementation: p
    };
  }
  var z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function L(H, E) {
    if (H === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, le.createPortal = function(H, E) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(s(299));
    return O(H, E, null, p);
  }, le.flushSync = function(H) {
    var E = z.T, p = r.p;
    try {
      if (z.T = null, r.p = 2, H) return H();
    } finally {
      z.T = E, r.p = p, r.d.f();
    }
  }, le.preconnect = function(H, E) {
    typeof H == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, r.d.C(H, E));
  }, le.prefetchDNS = function(H) {
    typeof H == "string" && r.d.D(H);
  }, le.preinit = function(H, E) {
    if (typeof H == "string" && E && typeof E.as == "string") {
      var p = E.as, U = L(p, E.crossOrigin), R = typeof E.integrity == "string" ? E.integrity : void 0, W = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      p === "style" ? r.d.S(
        H,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: U,
          integrity: R,
          fetchPriority: W
        }
      ) : p === "script" && r.d.X(H, {
        crossOrigin: U,
        integrity: R,
        fetchPriority: W,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, le.preinitModule = function(H, E) {
    if (typeof H == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var p = L(
            E.as,
            E.crossOrigin
          );
          r.d.M(H, {
            crossOrigin: p,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && r.d.M(H);
  }, le.preload = function(H, E) {
    if (typeof H == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var p = E.as, U = L(p, E.crossOrigin);
      r.d.L(H, p, {
        crossOrigin: U,
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
  }, le.preloadModule = function(H, E) {
    if (typeof H == "string")
      if (E) {
        var p = L(E.as, E.crossOrigin);
        r.d.m(H, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: p,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else r.d.m(H);
  }, le.requestFormReset = function(H) {
    r.d.r(H);
  }, le.unstable_batchedUpdates = function(H, E) {
    return H(E);
  }, le.useFormState = function(H, E, p) {
    return z.H.useFormState(H, E, p);
  }, le.useFormStatus = function() {
    return z.H.useHostTransitionStatus();
  }, le.version = "19.2.4", le;
}
var d0;
function iy() {
  if (d0) return Wf.exports;
  d0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Wf.exports = ay(), Wf.exports;
}
var h0;
function cy() {
  if (h0) return Vu;
  h0 = 1;
  var i = ny(), s = lo(), h = iy();
  function r(l) {
    var e = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function O(l) {
    var e = l, t = l;
    if (l.alternate) for (; e.return; ) e = e.return;
    else {
      l = e;
      do
        e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return;
      while (l);
    }
    return e.tag === 3 ? t : null;
  }
  function z(l) {
    if (l.tag === 13) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (l.tag === 31) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (O(l) !== l)
      throw Error(r(188));
  }
  function E(l) {
    var e = l.alternate;
    if (!e) {
      if (e = O(l), e === null) throw Error(r(188));
      return e !== l ? null : l;
    }
    for (var t = l, n = e; ; ) {
      var u = t.return;
      if (u === null) break;
      var a = u.alternate;
      if (a === null) {
        if (n = u.return, n !== null) {
          t = n;
          continue;
        }
        break;
      }
      if (u.child === a.child) {
        for (a = u.child; a; ) {
          if (a === t) return H(u), l;
          if (a === n) return H(u), e;
          a = a.sibling;
        }
        throw Error(r(188));
      }
      if (t.return !== n.return) t = u, n = a;
      else {
        for (var c = !1, o = u.child; o; ) {
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
        if (!c) {
          for (o = a.child; o; ) {
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
          if (!c) throw Error(r(189));
        }
      }
      if (t.alternate !== n) throw Error(r(190));
    }
    if (t.tag !== 3) throw Error(r(188));
    return t.stateNode.current === t ? l : e;
  }
  function p(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l;
    for (l = l.child; l !== null; ) {
      if (e = p(l), e !== null) return e;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, R = /* @__PURE__ */ Symbol.for("react.element"), W = /* @__PURE__ */ Symbol.for("react.transitional.element"), nl = /* @__PURE__ */ Symbol.for("react.portal"), il = /* @__PURE__ */ Symbol.for("react.fragment"), Ol = /* @__PURE__ */ Symbol.for("react.strict_mode"), cl = /* @__PURE__ */ Symbol.for("react.profiler"), Dl = /* @__PURE__ */ Symbol.for("react.consumer"), bl = /* @__PURE__ */ Symbol.for("react.context"), Vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), Kl = /* @__PURE__ */ Symbol.for("react.suspense"), ql = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), Jl = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Ve = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
  function Pl(l) {
    return l === null || typeof l != "object" ? null : (l = Te && l[Te] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ke = /* @__PURE__ */ Symbol.for("react.client.reference");
  function we(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ke ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case il:
        return "Fragment";
      case cl:
        return "Profiler";
      case Ol:
        return "StrictMode";
      case Kl:
        return "Suspense";
      case ql:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case nl:
          return "Portal";
        case bl:
          return l.displayName || "Context";
        case Dl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Vl:
          var e = l.render;
          return l = l.displayName, l || (l = e.displayName || e.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case P:
          return e = l.displayName || null, e !== null ? e : we(l.type) || "Memo";
        case Jl:
          e = l._payload, l = l._init;
          try {
            return we(l(e));
          } catch {
          }
      }
    return null;
  }
  var Al = Array.isArray, M = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dl = [], hl = -1;
  function m(l) {
    return { current: l };
  }
  function B(l) {
    0 > hl || (l.current = dl[hl], dl[hl] = null, hl--);
  }
  function G(l, e) {
    hl++, dl[hl] = l.current, l.current = e;
  }
  var v = m(null), N = m(null), A = m(null), x = m(null);
  function Y(l, e) {
    switch (G(A, e), G(N, l), G(v, null), e.nodeType) {
      case 9:
      case 11:
        l = (l = e.documentElement) && (l = l.namespaceURI) ? _d(l) : 0;
        break;
      default:
        if (l = e.tagName, e = e.namespaceURI)
          e = _d(e), l = Dd(e, l);
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
    B(v), G(v, l);
  }
  function q() {
    B(v), B(N), B(A);
  }
  function k(l) {
    l.memoizedState !== null && G(x, l);
    var e = v.current, t = Dd(e, l.type);
    e !== t && (G(N, l), G(v, t));
  }
  function ll(l) {
    N.current === l && (B(v), B(N)), x.current === l && (B(x), Yu._currentValue = J);
  }
  var Ml, te;
  function El(l) {
    if (Ml === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        Ml = e && e[1] || "", te = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ml + l + te;
  }
  var on = !1;
  function rn(l, e) {
    if (!l || on) return "";
    on = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (C) {
                  var T = C;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (C) {
                  T = C;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                T = C;
              }
              (j = l()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (C) {
            if (C && T && typeof C.stack == "string")
              return [C.stack, T.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var a = n.DetermineComponentFrameRoot(), c = a[0], o = a[1];
      if (c && o) {
        var d = c.split(`
`), b = o.split(`
`);
        for (u = n = 0; n < d.length && !d[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; u < b.length && !b[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (n === d.length || u === b.length)
          for (n = d.length - 1, u = b.length - 1; 1 <= n && 0 <= u && d[n] !== b[u]; )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (d[n] !== b[u]) {
            if (n !== 1 || u !== 1)
              do
                if (n--, u--, 0 > u || d[n] !== b[u]) {
                  var _ = `
` + d[n].replace(" at new ", " at ");
                  return l.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", l.displayName)), _;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      on = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? El(t) : "";
  }
  function Ae(l, e) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return El(l.type);
      case 16:
        return El("Lazy");
      case 13:
        return l.child !== e && e !== null ? El("Suspense Fallback") : El("Suspense");
      case 19:
        return El("SuspenseList");
      case 0:
      case 15:
        return rn(l.type, !1);
      case 11:
        return rn(l.type.render, !1);
      case 1:
        return rn(l.type, !0);
      case 31:
        return El("Activity");
      default:
        return "";
    }
  }
  function sn(l) {
    try {
      var e = "", t = null;
      do
        e += Ae(l, t), t = l, l = l.return;
      while (l);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var yt = Object.prototype.hasOwnProperty, Di = i.unstable_scheduleCallback, Hi = i.unstable_cancelCallback, U0 = i.unstable_shouldYield, w0 = i.unstable_requestPaint, se = i.unstable_now, N0 = i.unstable_getCurrentPriorityLevel, ao = i.unstable_ImmediatePriority, io = i.unstable_UserBlockingPriority, Iu = i.unstable_NormalPriority, B0 = i.unstable_LowPriority, co = i.unstable_IdlePriority, j0 = i.log, q0 = i.unstable_setDisableYieldValue, In = null, de = null;
  function mt(l) {
    if (typeof j0 == "function" && q0(l), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(In, l);
      } catch {
      }
  }
  var he = Math.clz32 ? Math.clz32 : Y0, x0 = Math.log, G0 = Math.LN2;
  function Y0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (x0(l) / G0 | 0) | 0;
  }
  var Pu = 256, la = 262144, ea = 4194304;
  function Xt(l) {
    var e = l & 42;
    if (e !== 0) return e;
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
  function ta(l, e, t) {
    var n = l.pendingLanes;
    if (n === 0) return 0;
    var u = 0, a = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~a, n !== 0 ? u = Xt(n) : (c &= o, c !== 0 ? u = Xt(c) : t || (t = o & ~l, t !== 0 && (u = Xt(t))))) : (o = n & ~a, o !== 0 ? u = Xt(o) : c !== 0 ? u = Xt(c) : t || (t = n & ~l, t !== 0 && (u = Xt(t)))), u === 0 ? 0 : e !== 0 && e !== u && (e & a) === 0 && (a = u & -u, t = e & -e, a >= t || a === 32 && (t & 4194048) !== 0) ? e : u;
  }
  function Pn(l, e) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0;
  }
  function L0(l, e) {
    switch (l) {
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
  function fo() {
    var l = ea;
    return ea <<= 1, (ea & 62914560) === 0 && (ea = 4194304), l;
  }
  function Ri(l) {
    for (var e = [], t = 0; 31 > t; t++) e.push(l);
    return e;
  }
  function lu(l, e) {
    l.pendingLanes |= e, e !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function X0(l, e, t, n, u, a) {
    var c = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var o = l.entanglements, d = l.expirationTimes, b = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var _ = 31 - he(t), j = 1 << _;
      o[_] = 0, d[_] = -1;
      var T = b[_];
      if (T !== null)
        for (b[_] = null, _ = 0; _ < T.length; _++) {
          var C = T[_];
          C !== null && (C.lane &= -536870913);
        }
      t &= ~j;
    }
    n !== 0 && oo(l, n, 0), a !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= a & ~(c & ~e));
  }
  function oo(l, e, t) {
    l.pendingLanes |= e, l.suspendedLanes &= ~e;
    var n = 31 - he(e);
    l.entangledLanes |= e, l.entanglements[n] = l.entanglements[n] | 1073741824 | t & 261930;
  }
  function ro(l, e) {
    var t = l.entangledLanes |= e;
    for (l = l.entanglements; t; ) {
      var n = 31 - he(t), u = 1 << n;
      u & e | l[n] & e && (l[n] |= e), t &= ~u;
    }
  }
  function so(l, e) {
    var t = e & -e;
    return t = (t & 42) !== 0 ? 1 : Ui(t), (t & (l.suspendedLanes | e)) !== 0 ? 0 : t;
  }
  function Ui(l) {
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
  function wi(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ho() {
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Id(l.type));
  }
  function yo(l, e) {
    var t = D.p;
    try {
      return D.p = l, e();
    } finally {
      D.p = t;
    }
  }
  var gt = Math.random().toString(36).slice(2), kl = "__reactFiber$" + gt, ne = "__reactProps$" + gt, dn = "__reactContainer$" + gt, Ni = "__reactEvents$" + gt, Q0 = "__reactListeners$" + gt, Z0 = "__reactHandles$" + gt, mo = "__reactResources$" + gt, eu = "__reactMarker$" + gt;
  function Bi(l) {
    delete l[kl], delete l[ne], delete l[Ni], delete l[Q0], delete l[Z0];
  }
  function hn(l) {
    var e = l[kl];
    if (e) return e;
    for (var t = l.parentNode; t; ) {
      if (e = t[dn] || t[kl]) {
        if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
          for (l = jd(l); l !== null; ) {
            if (t = l[kl]) return t;
            l = jd(l);
          }
        return e;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function yn(l) {
    if (l = l[kl] || l[dn]) {
      var e = l.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return l;
    }
    return null;
  }
  function tu(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
    throw Error(r(33));
  }
  function mn(l) {
    var e = l[mo];
    return e || (e = l[mo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Ql(l) {
    l[eu] = !0;
  }
  var go = /* @__PURE__ */ new Set(), vo = {};
  function Qt(l, e) {
    gn(l, e), gn(l + "Capture", e);
  }
  function gn(l, e) {
    for (vo[l] = e, l = 0; l < e.length; l++)
      go.add(e[l]);
  }
  var V0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), So = {}, bo = {};
  function K0(l) {
    return yt.call(bo, l) ? !0 : yt.call(So, l) ? !1 : V0.test(l) ? bo[l] = !0 : (So[l] = !0, !1);
  }
  function na(l, e, t) {
    if (K0(e))
      if (t === null) l.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              l.removeAttribute(e);
              return;
            }
        }
        l.setAttribute(e, "" + t);
      }
  }
  function ua(l, e, t) {
    if (t === null) l.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttribute(e, "" + t);
    }
  }
  function Je(l, e, t, n) {
    if (n === null) l.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(e, t, "" + n);
    }
  }
  function Ee(l) {
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
  function po(l) {
    var e = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function J0(l, e, t) {
    var n = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      e
    );
    if (!l.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var u = n.get, a = n.set;
      return Object.defineProperty(l, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          t = "" + c, a.call(this, c);
        }
      }), Object.defineProperty(l, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(c) {
          t = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[e];
        }
      };
    }
  }
  function ji(l) {
    if (!l._valueTracker) {
      var e = po(l) ? "checked" : "value";
      l._valueTracker = J0(
        l,
        e,
        "" + l[e]
      );
    }
  }
  function To(l) {
    if (!l) return !1;
    var e = l._valueTracker;
    if (!e) return !0;
    var t = e.getValue(), n = "";
    return l && (n = po(l) ? l.checked ? "true" : "false" : l.value), l = n, l !== t ? (e.setValue(l), !0) : !1;
  }
  function aa(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var k0 = /[\n"\\]/g;
  function ze(l) {
    return l.replace(
      k0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qi(l, e, t, n, u, a, c, o) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && l.value === "" || l.value != e) && (l.value = "" + Ee(e)) : l.value !== "" + Ee(e) && (l.value = "" + Ee(e)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), e != null ? xi(l, c, Ee(e)) : t != null ? xi(l, c, Ee(t)) : n != null && l.removeAttribute("value"), u == null && a != null && (l.defaultChecked = !!a), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? l.name = "" + Ee(o) : l.removeAttribute("name");
  }
  function Ao(l, e, t, n, u, a, c, o) {
    if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (l.type = a), e != null || t != null) {
      if (!(a !== "submit" && a !== "reset" || e != null)) {
        ji(l);
        return;
      }
      t = t != null ? "" + Ee(t) : "", e = e != null ? "" + Ee(e) : t, o || e === l.value || (l.value = e), l.defaultValue = e;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, l.checked = o ? l.checked : !!n, l.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), ji(l);
  }
  function xi(l, e, t) {
    e === "number" && aa(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function vn(l, e, t, n) {
    if (l = l.options, e) {
      e = {};
      for (var u = 0; u < t.length; u++)
        e["$" + t[u]] = !0;
      for (t = 0; t < l.length; t++)
        u = e.hasOwnProperty("$" + l[t].value), l[t].selected !== u && (l[t].selected = u), u && n && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + Ee(t), e = null, u = 0; u < l.length; u++) {
        if (l[u].value === t) {
          l[u].selected = !0, n && (l[u].defaultSelected = !0);
          return;
        }
        e !== null || l[u].disabled || (e = l[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Eo(l, e, t) {
    if (e != null && (e = "" + Ee(e), e !== l.value && (l.value = e), t == null)) {
      l.defaultValue !== e && (l.defaultValue = e);
      return;
    }
    l.defaultValue = t != null ? "" + Ee(t) : "";
  }
  function zo(l, e, t, n) {
    if (e == null) {
      if (n != null) {
        if (t != null) throw Error(r(92));
        if (Al(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), e = t;
    }
    t = Ee(e), l.defaultValue = t, n = l.textContent, n === t && n !== "" && n !== null && (l.value = n), ji(l);
  }
  function Sn(l, e) {
    if (e) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    l.textContent = e;
  }
  var W0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Co(l, e, t) {
    var n = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "" : n ? l.setProperty(e, t) : typeof t != "number" || t === 0 || W0.has(e) ? e === "float" ? l.cssFloat = t : l[e] = ("" + t).trim() : l[e] = t + "px";
  }
  function Oo(l, e, t) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (l = l.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "");
      for (var u in e)
        n = e[u], e.hasOwnProperty(u) && t[u] !== n && Co(l, u, n);
    } else
      for (var a in e)
        e.hasOwnProperty(a) && Co(l, a, e[a]);
  }
  function Gi(l) {
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
  var $0 = /* @__PURE__ */ new Map([
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
  ]), F0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ia(l) {
    return F0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function ke() {
  }
  var Yi = null;
  function Li(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var bn = null, pn = null;
  function Mo(l) {
    var e = yn(l);
    if (e && (l = e.stateNode)) {
      var t = l[ne] || null;
      l: switch (l = e.stateNode, e.type) {
        case "input":
          if (qi(
            l,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), e = t.name, t.type === "radio" && e != null) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + ze(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < t.length; e++) {
              var n = t[e];
              if (n !== l && n.form === l.form) {
                var u = n[ne] || null;
                if (!u) throw Error(r(90));
                qi(
                  n,
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
            for (e = 0; e < t.length; e++)
              n = t[e], n.form === l.form && To(n);
          }
          break l;
        case "textarea":
          Eo(l, t.value, t.defaultValue);
          break l;
        case "select":
          e = t.value, e != null && vn(l, !!t.multiple, e, !1);
      }
    }
  }
  var Xi = !1;
  function _o(l, e, t) {
    if (Xi) return l(e, t);
    Xi = !0;
    try {
      var n = l(e);
      return n;
    } finally {
      if (Xi = !1, (bn !== null || pn !== null) && (Ja(), bn && (e = bn, l = pn, pn = bn = null, Mo(e), l)))
        for (e = 0; e < l.length; e++) Mo(l[e]);
    }
  }
  function nu(l, e) {
    var t = l.stateNode;
    if (t === null) return null;
    var n = t[ne] || null;
    if (n === null) return null;
    t = n[e];
    l: switch (e) {
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
        (n = !n.disabled) || (l = l.type, n = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !n;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function")
      throw Error(
        r(231, e, typeof t)
      );
    return t;
  }
  var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qi = !1;
  if (We)
    try {
      var uu = {};
      Object.defineProperty(uu, "passive", {
        get: function() {
          Qi = !0;
        }
      }), window.addEventListener("test", uu, uu), window.removeEventListener("test", uu, uu);
    } catch {
      Qi = !1;
    }
  var vt = null, Zi = null, ca = null;
  function Do() {
    if (ca) return ca;
    var l, e = Zi, t = e.length, n, u = "value" in vt ? vt.value : vt.textContent, a = u.length;
    for (l = 0; l < t && e[l] === u[l]; l++) ;
    var c = t - l;
    for (n = 1; n <= c && e[t - n] === u[a - n]; n++) ;
    return ca = u.slice(l, 1 < n ? 1 - n : void 0);
  }
  function fa(l) {
    var e = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && e === 13 && (l = 13)) : l = e, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function oa() {
    return !0;
  }
  function Ho() {
    return !1;
  }
  function ue(l) {
    function e(t, n, u, a, c) {
      this._reactName = t, this._targetInst = u, this.type = n, this.nativeEvent = a, this.target = c, this.currentTarget = null;
      for (var o in l)
        l.hasOwnProperty(o) && (t = l[o], this[o] = t ? t(a) : a[o]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? oa : Ho, this.isPropagationStopped = Ho, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = oa);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = oa);
      },
      persist: function() {
      },
      isPersistent: oa
    }), e;
  }
  var Zt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ra = ue(Zt), au = U({}, Zt, { view: 0, detail: 0 }), I0 = ue(au), Vi, Ki, iu, sa = U({}, au, {
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
    getModifierState: ki,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== iu && (iu && l.type === "mousemove" ? (Vi = l.screenX - iu.screenX, Ki = l.screenY - iu.screenY) : Ki = Vi = 0, iu = l), Vi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ki;
    }
  }), Ro = ue(sa), P0 = U({}, sa, { dataTransfer: 0 }), lh = ue(P0), eh = U({}, au, { relatedTarget: 0 }), Ji = ue(eh), th = U({}, Zt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nh = ue(th), uh = U({}, Zt, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ah = ue(uh), ih = U({}, Zt, { data: 0 }), Uo = ue(ih), ch = {
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
  }, fh = {
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
  }, oh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rh(l) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(l) : (l = oh[l]) ? !!e[l] : !1;
  }
  function ki() {
    return rh;
  }
  var sh = U({}, au, {
    key: function(l) {
      if (l.key) {
        var e = ch[l.key] || l.key;
        if (e !== "Unidentified") return e;
      }
      return l.type === "keypress" ? (l = fa(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? fh[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ki,
    charCode: function(l) {
      return l.type === "keypress" ? fa(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? fa(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), dh = ue(sh), hh = U({}, sa, {
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
  }), wo = ue(hh), yh = U({}, au, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ki
  }), mh = ue(yh), gh = U({}, Zt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vh = ue(gh), Sh = U({}, sa, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bh = ue(Sh), ph = U({}, Zt, {
    newState: 0,
    oldState: 0
  }), Th = ue(ph), Ah = [9, 13, 27, 32], Wi = We && "CompositionEvent" in window, cu = null;
  We && "documentMode" in document && (cu = document.documentMode);
  var Eh = We && "TextEvent" in window && !cu, No = We && (!Wi || cu && 8 < cu && 11 >= cu), Bo = " ", jo = !1;
  function qo(l, e) {
    switch (l) {
      case "keyup":
        return Ah.indexOf(e.keyCode) !== -1;
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
  function xo(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Tn = !1;
  function zh(l, e) {
    switch (l) {
      case "compositionend":
        return xo(e);
      case "keypress":
        return e.which !== 32 ? null : (jo = !0, Bo);
      case "textInput":
        return l = e.data, l === Bo && jo ? null : l;
      default:
        return null;
    }
  }
  function Ch(l, e) {
    if (Tn)
      return l === "compositionend" || !Wi && qo(l, e) ? (l = Do(), ca = Zi = vt = null, Tn = !1, l) : null;
    switch (l) {
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
        return No && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Oh = {
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
  function Go(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e === "input" ? !!Oh[l.type] : e === "textarea";
  }
  function Yo(l, e, t, n) {
    bn ? pn ? pn.push(n) : pn = [n] : bn = n, e = li(e, "onChange"), 0 < e.length && (t = new ra(
      "onChange",
      "change",
      null,
      t,
      n
    ), l.push({ event: t, listeners: e }));
  }
  var fu = null, ou = null;
  function Mh(l) {
    Ad(l, 0);
  }
  function da(l) {
    var e = tu(l);
    if (To(e)) return l;
  }
  function Lo(l, e) {
    if (l === "change") return e;
  }
  var Xo = !1;
  if (We) {
    var $i;
    if (We) {
      var Fi = "oninput" in document;
      if (!Fi) {
        var Qo = document.createElement("div");
        Qo.setAttribute("oninput", "return;"), Fi = typeof Qo.oninput == "function";
      }
      $i = Fi;
    } else $i = !1;
    Xo = $i && (!document.documentMode || 9 < document.documentMode);
  }
  function Zo() {
    fu && (fu.detachEvent("onpropertychange", Vo), ou = fu = null);
  }
  function Vo(l) {
    if (l.propertyName === "value" && da(ou)) {
      var e = [];
      Yo(
        e,
        ou,
        l,
        Li(l)
      ), _o(Mh, e);
    }
  }
  function _h(l, e, t) {
    l === "focusin" ? (Zo(), fu = e, ou = t, fu.attachEvent("onpropertychange", Vo)) : l === "focusout" && Zo();
  }
  function Dh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return da(ou);
  }
  function Hh(l, e) {
    if (l === "click") return da(e);
  }
  function Rh(l, e) {
    if (l === "input" || l === "change")
      return da(e);
  }
  function Uh(l, e) {
    return l === e && (l !== 0 || 1 / l === 1 / e) || l !== l && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : Uh;
  function ru(l, e) {
    if (ye(l, e)) return !0;
    if (typeof l != "object" || l === null || typeof e != "object" || e === null)
      return !1;
    var t = Object.keys(l), n = Object.keys(e);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var u = t[n];
      if (!yt.call(e, u) || !ye(l[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Ko(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Jo(l, e) {
    var t = Ko(l);
    l = 0;
    for (var n; t; ) {
      if (t.nodeType === 3) {
        if (n = l + t.textContent.length, l <= e && n >= e)
          return { node: t, offset: e - l };
        l = n;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ko(t);
    }
  }
  function ko(l, e) {
    return l && e ? l === e ? !0 : l && l.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ko(l, e.parentNode) : "contains" in l ? l.contains(e) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Wo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var e = aa(l.document); e instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = e.contentWindow;
      else break;
      e = aa(l.document);
    }
    return e;
  }
  function Ii(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e && (e === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || e === "textarea" || l.contentEditable === "true");
  }
  var wh = We && "documentMode" in document && 11 >= document.documentMode, An = null, Pi = null, su = null, lc = !1;
  function $o(l, e, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    lc || An == null || An !== aa(n) || (n = An, "selectionStart" in n && Ii(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), su && ru(su, n) || (su = n, n = li(Pi, "onSelect"), 0 < n.length && (e = new ra(
      "onSelect",
      "select",
      null,
      e,
      t
    ), l.push({ event: e, listeners: n }), e.target = An)));
  }
  function Vt(l, e) {
    var t = {};
    return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t;
  }
  var En = {
    animationend: Vt("Animation", "AnimationEnd"),
    animationiteration: Vt("Animation", "AnimationIteration"),
    animationstart: Vt("Animation", "AnimationStart"),
    transitionrun: Vt("Transition", "TransitionRun"),
    transitionstart: Vt("Transition", "TransitionStart"),
    transitioncancel: Vt("Transition", "TransitionCancel"),
    transitionend: Vt("Transition", "TransitionEnd")
  }, ec = {}, Fo = {};
  We && (Fo = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function Kt(l) {
    if (ec[l]) return ec[l];
    if (!En[l]) return l;
    var e = En[l], t;
    for (t in e)
      if (e.hasOwnProperty(t) && t in Fo)
        return ec[l] = e[t];
    return l;
  }
  var Io = Kt("animationend"), Po = Kt("animationiteration"), lr = Kt("animationstart"), Nh = Kt("transitionrun"), Bh = Kt("transitionstart"), jh = Kt("transitioncancel"), er = Kt("transitionend"), tr = /* @__PURE__ */ new Map(), tc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tc.push("scrollEnd");
  function Ne(l, e) {
    tr.set(l, e), Qt(e, [l]);
  }
  var ha = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Ce = [], zn = 0, nc = 0;
  function ya() {
    for (var l = zn, e = nc = zn = 0; e < l; ) {
      var t = Ce[e];
      Ce[e++] = null;
      var n = Ce[e];
      Ce[e++] = null;
      var u = Ce[e];
      Ce[e++] = null;
      var a = Ce[e];
      if (Ce[e++] = null, n !== null && u !== null) {
        var c = n.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), n.pending = u;
      }
      a !== 0 && nr(t, u, a);
    }
  }
  function ma(l, e, t, n) {
    Ce[zn++] = l, Ce[zn++] = e, Ce[zn++] = t, Ce[zn++] = n, nc |= n, l.lanes |= n, l = l.alternate, l !== null && (l.lanes |= n);
  }
  function uc(l, e, t, n) {
    return ma(l, e, t, n), ga(l);
  }
  function Jt(l, e) {
    return ma(l, null, null, e), ga(l);
  }
  function nr(l, e, t) {
    l.lanes |= t;
    var n = l.alternate;
    n !== null && (n.lanes |= t);
    for (var u = !1, a = l.return; a !== null; )
      a.childLanes |= t, n = a.alternate, n !== null && (n.childLanes |= t), a.tag === 22 && (l = a.stateNode, l === null || l._visibility & 1 || (u = !0)), l = a, a = a.return;
    return l.tag === 3 ? (a = l.stateNode, u && e !== null && (u = 31 - he(t), l = a.hiddenUpdates, n = l[u], n === null ? l[u] = [e] : n.push(e), e.lane = t | 536870912), a) : null;
  }
  function ga(l) {
    if (50 < wu)
      throw wu = 0, yf = null, Error(r(185));
    for (var e = l.return; e !== null; )
      l = e, e = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Cn = {};
  function qh(l, e, t, n) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me(l, e, t, n) {
    return new qh(l, e, t, n);
  }
  function ac(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function $e(l, e) {
    var t = l.alternate;
    return t === null ? (t = me(
      l.tag,
      e,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function ur(l, e) {
    l.flags &= 65011714;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), l;
  }
  function va(l, e, t, n, u, a) {
    var c = 0;
    if (n = l, typeof l == "function") ac(l) && (c = 1);
    else if (typeof l == "string")
      c = X1(
        l,
        t,
        v.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case re:
          return l = me(31, t, e, u), l.elementType = re, l.lanes = a, l;
        case il:
          return kt(t.children, u, a, e);
        case Ol:
          c = 8, u |= 24;
          break;
        case cl:
          return l = me(12, t, e, u | 2), l.elementType = cl, l.lanes = a, l;
        case Kl:
          return l = me(13, t, e, u), l.elementType = Kl, l.lanes = a, l;
        case ql:
          return l = me(19, t, e, u), l.elementType = ql, l.lanes = a, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case bl:
                c = 10;
                break l;
              case Dl:
                c = 9;
                break l;
              case Vl:
                c = 11;
                break l;
              case P:
                c = 14;
                break l;
              case Jl:
                c = 16, n = null;
                break l;
            }
          c = 29, t = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), n = null;
      }
    return e = me(c, t, e, u), e.elementType = l, e.type = n, e.lanes = a, e;
  }
  function kt(l, e, t, n) {
    return l = me(7, l, n, e), l.lanes = t, l;
  }
  function ic(l, e, t) {
    return l = me(6, l, null, e), l.lanes = t, l;
  }
  function ar(l) {
    var e = me(18, null, null, 0);
    return e.stateNode = l, e;
  }
  function cc(l, e, t) {
    return e = me(
      4,
      l.children !== null ? l.children : [],
      l.key,
      e
    ), e.lanes = t, e.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, e;
  }
  var ir = /* @__PURE__ */ new WeakMap();
  function Oe(l, e) {
    if (typeof l == "object" && l !== null) {
      var t = ir.get(l);
      return t !== void 0 ? t : (e = {
        value: l,
        source: e,
        stack: sn(e)
      }, ir.set(l, e), e);
    }
    return {
      value: l,
      source: e,
      stack: sn(e)
    };
  }
  var On = [], Mn = 0, Sa = null, du = 0, Me = [], _e = 0, St = null, Ge = 1, Ye = "";
  function Fe(l, e) {
    On[Mn++] = du, On[Mn++] = Sa, Sa = l, du = e;
  }
  function cr(l, e, t) {
    Me[_e++] = Ge, Me[_e++] = Ye, Me[_e++] = St, St = l;
    var n = Ge;
    l = Ye;
    var u = 32 - he(n) - 1;
    n &= ~(1 << u), t += 1;
    var a = 32 - he(e) + u;
    if (30 < a) {
      var c = u - u % 5;
      a = (n & (1 << c) - 1).toString(32), n >>= c, u -= c, Ge = 1 << 32 - he(e) + u | t << u | n, Ye = a + l;
    } else
      Ge = 1 << a | t << u | n, Ye = l;
  }
  function fc(l) {
    l.return !== null && (Fe(l, 1), cr(l, 1, 0));
  }
  function oc(l) {
    for (; l === Sa; )
      Sa = On[--Mn], On[Mn] = null, du = On[--Mn], On[Mn] = null;
    for (; l === St; )
      St = Me[--_e], Me[_e] = null, Ye = Me[--_e], Me[_e] = null, Ge = Me[--_e], Me[_e] = null;
  }
  function fr(l, e) {
    Me[_e++] = Ge, Me[_e++] = Ye, Me[_e++] = St, Ge = e.id, Ye = e.overflow, St = l;
  }
  var Wl = null, zl = null, fl = !1, bt = null, De = !1, rc = Error(r(519));
  function pt(l) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw hu(Oe(e, l)), rc;
  }
  function or(l) {
    var e = l.stateNode, t = l.type, n = l.memoizedProps;
    switch (e[kl] = l, e[ne] = n, t) {
      case "dialog":
        tl("cancel", e), tl("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        tl("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Bu.length; t++)
          tl(Bu[t], e);
        break;
      case "source":
        tl("error", e);
        break;
      case "img":
      case "image":
      case "link":
        tl("error", e), tl("load", e);
        break;
      case "details":
        tl("toggle", e);
        break;
      case "input":
        tl("invalid", e), Ao(
          e,
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
        tl("invalid", e);
        break;
      case "textarea":
        tl("invalid", e), zo(e, n.value, n.defaultValue, n.children);
    }
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || n.suppressHydrationWarning === !0 || Od(e.textContent, t) ? (n.popover != null && (tl("beforetoggle", e), tl("toggle", e)), n.onScroll != null && tl("scroll", e), n.onScrollEnd != null && tl("scrollend", e), n.onClick != null && (e.onclick = ke), e = !0) : e = !1, e || pt(l, !0);
  }
  function rr(l) {
    for (Wl = l.return; Wl; )
      switch (Wl.tag) {
        case 5:
        case 31:
        case 13:
          De = !1;
          return;
        case 27:
        case 3:
          De = !0;
          return;
        default:
          Wl = Wl.return;
      }
  }
  function _n(l) {
    if (l !== Wl) return !1;
    if (!fl) return rr(l), fl = !0, !1;
    var e = l.tag, t;
    if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || Df(l.type, l.memoizedProps)), t = !t), t && zl && pt(l), rr(l), e === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      zl = Bd(l);
    } else if (e === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      zl = Bd(l);
    } else
      e === 27 ? (e = zl, Nt(l.type) ? (l = Nf, Nf = null, zl = l) : zl = e) : zl = Wl ? Re(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Wt() {
    zl = Wl = null, fl = !1;
  }
  function sc() {
    var l = bt;
    return l !== null && (fe === null ? fe = l : fe.push.apply(
      fe,
      l
    ), bt = null), l;
  }
  function hu(l) {
    bt === null ? bt = [l] : bt.push(l);
  }
  var dc = m(null), $t = null, Ie = null;
  function Tt(l, e, t) {
    G(dc, e._currentValue), e._currentValue = t;
  }
  function Pe(l) {
    l._currentValue = dc.current, B(dc);
  }
  function hc(l, e, t) {
    for (; l !== null; ) {
      var n = l.alternate;
      if ((l.childLanes & e) !== e ? (l.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), l === t) break;
      l = l.return;
    }
  }
  function yc(l, e, t, n) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var a = u.dependencies;
      if (a !== null) {
        var c = u.child;
        a = a.firstContext;
        l: for (; a !== null; ) {
          var o = a;
          a = u;
          for (var d = 0; d < e.length; d++)
            if (o.context === e[d]) {
              a.lanes |= t, o = a.alternate, o !== null && (o.lanes |= t), hc(
                a.return,
                t,
                l
              ), n || (c = null);
              break l;
            }
          a = o.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(r(341));
        c.lanes |= t, a = c.alternate, a !== null && (a.lanes |= t), hc(c, t, l), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function Dn(l, e, t, n) {
    l = null;
    for (var u = e, a = !1; u !== null; ) {
      if (!a) {
        if ((u.flags & 524288) !== 0) a = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var o = u.type;
          ye(u.pendingProps.value, c.value) || (l !== null ? l.push(o) : l = [o]);
        }
      } else if (u === x.current) {
        if (c = u.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Yu) : l = [Yu]);
      }
      u = u.return;
    }
    l !== null && yc(
      e,
      l,
      t,
      n
    ), e.flags |= 262144;
  }
  function ba(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ye(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ft(l) {
    $t = l, Ie = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function $l(l) {
    return sr($t, l);
  }
  function pa(l, e) {
    return $t === null && Ft(l), sr(l, e);
  }
  function sr(l, e) {
    var t = e._currentValue;
    if (e = { context: e, memoizedValue: t, next: null }, Ie === null) {
      if (l === null) throw Error(r(308));
      Ie = e, l.dependencies = { lanes: 0, firstContext: e }, l.flags |= 524288;
    } else Ie = Ie.next = e;
    return t;
  }
  var xh = typeof AbortController < "u" ? AbortController : function() {
    var l = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(t, n) {
        l.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, l.forEach(function(t) {
        return t();
      });
    };
  }, Gh = i.unstable_scheduleCallback, Yh = i.unstable_NormalPriority, xl = {
    $$typeof: bl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new xh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function yu(l) {
    l.refCount--, l.refCount === 0 && Gh(Yh, function() {
      l.controller.abort();
    });
  }
  var mu = null, gc = 0, Hn = 0, Rn = null;
  function Lh(l, e) {
    if (mu === null) {
      var t = mu = [];
      gc = 0, Hn = pf(), Rn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return gc++, e.then(dr, dr), e;
  }
  function dr() {
    if (--gc === 0 && mu !== null) {
      Rn !== null && (Rn.status = "fulfilled");
      var l = mu;
      mu = null, Hn = 0, Rn = null;
      for (var e = 0; e < l.length; e++) (0, l[e])();
    }
  }
  function Xh(l, e) {
    var t = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        t.push(u);
      }
    };
    return l.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var u = 0; u < t.length; u++) (0, t[u])(e);
      },
      function(u) {
        for (n.status = "rejected", n.reason = u, u = 0; u < t.length; u++)
          (0, t[u])(void 0);
      }
    ), n;
  }
  var hr = M.S;
  M.S = function(l, e) {
    $s = se(), typeof e == "object" && e !== null && typeof e.then == "function" && Lh(l, e), hr !== null && hr(l, e);
  };
  var It = m(null);
  function vc() {
    var l = It.current;
    return l !== null ? l : pl.pooledCache;
  }
  function Ta(l, e) {
    e === null ? G(It, It.current) : G(It, e.pool);
  }
  function yr() {
    var l = vc();
    return l === null ? null : { parent: xl._currentValue, pool: l };
  }
  var Un = Error(r(460)), Sc = Error(r(474)), Aa = Error(r(542)), Ea = { then: function() {
  } };
  function mr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function gr(l, e, t) {
    switch (t = l[t], t === void 0 ? l.push(e) : t !== e && (e.then(ke, ke), e = t), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw l = e.reason, Sr(l), l;
      default:
        if (typeof e.status == "string") e.then(ke, ke);
        else {
          if (l = pl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = e, l.status = "pending", l.then(
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw l = e.reason, Sr(l), l;
        }
        throw ln = e, Un;
    }
  }
  function Pt(l) {
    try {
      var e = l._init;
      return e(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (ln = t, Un) : t;
    }
  }
  var ln = null;
  function vr() {
    if (ln === null) throw Error(r(459));
    var l = ln;
    return ln = null, l;
  }
  function Sr(l) {
    if (l === Un || l === Aa)
      throw Error(r(483));
  }
  var wn = null, gu = 0;
  function za(l) {
    var e = gu;
    return gu += 1, wn === null && (wn = []), gr(wn, l, e);
  }
  function vu(l, e) {
    e = e.props.ref, l.ref = e !== void 0 ? e : null;
  }
  function Ca(l, e) {
    throw e.$$typeof === R ? Error(r(525)) : (l = Object.prototype.toString.call(e), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : l
      )
    ));
  }
  function br(l) {
    function e(g, y) {
      if (l) {
        var S = g.deletions;
        S === null ? (g.deletions = [y], g.flags |= 16) : S.push(y);
      }
    }
    function t(g, y) {
      if (!l) return null;
      for (; y !== null; )
        e(g, y), y = y.sibling;
      return null;
    }
    function n(g) {
      for (var y = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
      return y;
    }
    function u(g, y) {
      return g = $e(g, y), g.index = 0, g.sibling = null, g;
    }
    function a(g, y, S) {
      return g.index = S, l ? (S = g.alternate, S !== null ? (S = S.index, S < y ? (g.flags |= 67108866, y) : S) : (g.flags |= 67108866, y)) : (g.flags |= 1048576, y);
    }
    function c(g) {
      return l && g.alternate === null && (g.flags |= 67108866), g;
    }
    function o(g, y, S, w) {
      return y === null || y.tag !== 6 ? (y = ic(S, g.mode, w), y.return = g, y) : (y = u(y, S), y.return = g, y);
    }
    function d(g, y, S, w) {
      var V = S.type;
      return V === il ? _(
        g,
        y,
        S.props.children,
        w,
        S.key
      ) : y !== null && (y.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Jl && Pt(V) === y.type) ? (y = u(y, S.props), vu(y, S), y.return = g, y) : (y = va(
        S.type,
        S.key,
        S.props,
        null,
        g.mode,
        w
      ), vu(y, S), y.return = g, y);
    }
    function b(g, y, S, w) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = cc(S, g.mode, w), y.return = g, y) : (y = u(y, S.children || []), y.return = g, y);
    }
    function _(g, y, S, w, V) {
      return y === null || y.tag !== 7 ? (y = kt(
        S,
        g.mode,
        w,
        V
      ), y.return = g, y) : (y = u(y, S), y.return = g, y);
    }
    function j(g, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = ic(
          "" + y,
          g.mode,
          S
        ), y.return = g, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case W:
            return S = va(
              y.type,
              y.key,
              y.props,
              null,
              g.mode,
              S
            ), vu(S, y), S.return = g, S;
          case nl:
            return y = cc(
              y,
              g.mode,
              S
            ), y.return = g, y;
          case Jl:
            return y = Pt(y), j(g, y, S);
        }
        if (Al(y) || Pl(y))
          return y = kt(
            y,
            g.mode,
            S,
            null
          ), y.return = g, y;
        if (typeof y.then == "function")
          return j(g, za(y), S);
        if (y.$$typeof === bl)
          return j(
            g,
            pa(g, y),
            S
          );
        Ca(g, y);
      }
      return null;
    }
    function T(g, y, S, w) {
      var V = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return V !== null ? null : o(g, y, "" + S, w);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case W:
            return S.key === V ? d(g, y, S, w) : null;
          case nl:
            return S.key === V ? b(g, y, S, w) : null;
          case Jl:
            return S = Pt(S), T(g, y, S, w);
        }
        if (Al(S) || Pl(S))
          return V !== null ? null : _(g, y, S, w, null);
        if (typeof S.then == "function")
          return T(
            g,
            y,
            za(S),
            w
          );
        if (S.$$typeof === bl)
          return T(
            g,
            y,
            pa(g, S),
            w
          );
        Ca(g, S);
      }
      return null;
    }
    function C(g, y, S, w, V) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return g = g.get(S) || null, o(y, g, "" + w, V);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case W:
            return g = g.get(
              w.key === null ? S : w.key
            ) || null, d(y, g, w, V);
          case nl:
            return g = g.get(
              w.key === null ? S : w.key
            ) || null, b(y, g, w, V);
          case Jl:
            return w = Pt(w), C(
              g,
              y,
              S,
              w,
              V
            );
        }
        if (Al(w) || Pl(w))
          return g = g.get(S) || null, _(y, g, w, V, null);
        if (typeof w.then == "function")
          return C(
            g,
            y,
            S,
            za(w),
            V
          );
        if (w.$$typeof === bl)
          return C(
            g,
            y,
            S,
            pa(y, w),
            V
          );
        Ca(y, w);
      }
      return null;
    }
    function X(g, y, S, w) {
      for (var V = null, ol = null, Z = y, I = y = 0, al = null; Z !== null && I < S.length; I++) {
        Z.index > I ? (al = Z, Z = null) : al = Z.sibling;
        var rl = T(
          g,
          Z,
          S[I],
          w
        );
        if (rl === null) {
          Z === null && (Z = al);
          break;
        }
        l && Z && rl.alternate === null && e(g, Z), y = a(rl, y, I), ol === null ? V = rl : ol.sibling = rl, ol = rl, Z = al;
      }
      if (I === S.length)
        return t(g, Z), fl && Fe(g, I), V;
      if (Z === null) {
        for (; I < S.length; I++)
          Z = j(g, S[I], w), Z !== null && (y = a(
            Z,
            y,
            I
          ), ol === null ? V = Z : ol.sibling = Z, ol = Z);
        return fl && Fe(g, I), V;
      }
      for (Z = n(Z); I < S.length; I++)
        al = C(
          Z,
          g,
          I,
          S[I],
          w
        ), al !== null && (l && al.alternate !== null && Z.delete(
          al.key === null ? I : al.key
        ), y = a(
          al,
          y,
          I
        ), ol === null ? V = al : ol.sibling = al, ol = al);
      return l && Z.forEach(function(Gt) {
        return e(g, Gt);
      }), fl && Fe(g, I), V;
    }
    function K(g, y, S, w) {
      if (S == null) throw Error(r(151));
      for (var V = null, ol = null, Z = y, I = y = 0, al = null, rl = S.next(); Z !== null && !rl.done; I++, rl = S.next()) {
        Z.index > I ? (al = Z, Z = null) : al = Z.sibling;
        var Gt = T(g, Z, rl.value, w);
        if (Gt === null) {
          Z === null && (Z = al);
          break;
        }
        l && Z && Gt.alternate === null && e(g, Z), y = a(Gt, y, I), ol === null ? V = Gt : ol.sibling = Gt, ol = Gt, Z = al;
      }
      if (rl.done)
        return t(g, Z), fl && Fe(g, I), V;
      if (Z === null) {
        for (; !rl.done; I++, rl = S.next())
          rl = j(g, rl.value, w), rl !== null && (y = a(rl, y, I), ol === null ? V = rl : ol.sibling = rl, ol = rl);
        return fl && Fe(g, I), V;
      }
      for (Z = n(Z); !rl.done; I++, rl = S.next())
        rl = C(Z, g, I, rl.value, w), rl !== null && (l && rl.alternate !== null && Z.delete(rl.key === null ? I : rl.key), y = a(rl, y, I), ol === null ? V = rl : ol.sibling = rl, ol = rl);
      return l && Z.forEach(function(P1) {
        return e(g, P1);
      }), fl && Fe(g, I), V;
    }
    function Sl(g, y, S, w) {
      if (typeof S == "object" && S !== null && S.type === il && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case W:
            l: {
              for (var V = S.key; y !== null; ) {
                if (y.key === V) {
                  if (V = S.type, V === il) {
                    if (y.tag === 7) {
                      t(
                        g,
                        y.sibling
                      ), w = u(
                        y,
                        S.props.children
                      ), w.return = g, g = w;
                      break l;
                    }
                  } else if (y.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Jl && Pt(V) === y.type) {
                    t(
                      g,
                      y.sibling
                    ), w = u(y, S.props), vu(w, S), w.return = g, g = w;
                    break l;
                  }
                  t(g, y);
                  break;
                } else e(g, y);
                y = y.sibling;
              }
              S.type === il ? (w = kt(
                S.props.children,
                g.mode,
                w,
                S.key
              ), w.return = g, g = w) : (w = va(
                S.type,
                S.key,
                S.props,
                null,
                g.mode,
                w
              ), vu(w, S), w.return = g, g = w);
            }
            return c(g);
          case nl:
            l: {
              for (V = S.key; y !== null; ) {
                if (y.key === V)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    t(
                      g,
                      y.sibling
                    ), w = u(y, S.children || []), w.return = g, g = w;
                    break l;
                  } else {
                    t(g, y);
                    break;
                  }
                else e(g, y);
                y = y.sibling;
              }
              w = cc(S, g.mode, w), w.return = g, g = w;
            }
            return c(g);
          case Jl:
            return S = Pt(S), Sl(
              g,
              y,
              S,
              w
            );
        }
        if (Al(S))
          return X(
            g,
            y,
            S,
            w
          );
        if (Pl(S)) {
          if (V = Pl(S), typeof V != "function") throw Error(r(150));
          return S = V.call(S), K(
            g,
            y,
            S,
            w
          );
        }
        if (typeof S.then == "function")
          return Sl(
            g,
            y,
            za(S),
            w
          );
        if (S.$$typeof === bl)
          return Sl(
            g,
            y,
            pa(g, S),
            w
          );
        Ca(g, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (t(g, y.sibling), w = u(y, S), w.return = g, g = w) : (t(g, y), w = ic(S, g.mode, w), w.return = g, g = w), c(g)) : t(g, y);
    }
    return function(g, y, S, w) {
      try {
        gu = 0;
        var V = Sl(
          g,
          y,
          S,
          w
        );
        return wn = null, V;
      } catch (Z) {
        if (Z === Un || Z === Aa) throw Z;
        var ol = me(29, Z, null, g.mode);
        return ol.lanes = w, ol.return = g, ol;
      }
    };
  }
  var en = br(!0), pr = br(!1), At = !1;
  function bc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function pc(l, e) {
    l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Et(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function zt(l, e, t) {
    var n = l.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (sl & 2) !== 0) {
      var u = n.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), n.pending = e, e = ga(l), nr(l, null, t), e;
    }
    return ma(l, n, e, t), ga(l);
  }
  function Su(l, e, t) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194048) !== 0)) {
      var n = e.lanes;
      n &= l.pendingLanes, t |= n, e.lanes = t, ro(l, t);
    }
  }
  function Tc(l, e) {
    var t = l.updateQueue, n = l.alternate;
    if (n !== null && (n = n.updateQueue, t === n)) {
      var u = null, a = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var c = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          a === null ? u = a = c : a = a.next = c, t = t.next;
        } while (t !== null);
        a === null ? u = a = e : a = a.next = e;
      } else u = a = e;
      t = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: a,
        shared: n.shared,
        callbacks: n.callbacks
      }, l.updateQueue = t;
      return;
    }
    l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = e : l.next = e, t.lastBaseUpdate = e;
  }
  var Ac = !1;
  function bu() {
    if (Ac) {
      var l = Rn;
      if (l !== null) throw l;
    }
  }
  function pu(l, e, t, n) {
    Ac = !1;
    var u = l.updateQueue;
    At = !1;
    var a = u.firstBaseUpdate, c = u.lastBaseUpdate, o = u.shared.pending;
    if (o !== null) {
      u.shared.pending = null;
      var d = o, b = d.next;
      d.next = null, c === null ? a = b : c.next = b, c = d;
      var _ = l.alternate;
      _ !== null && (_ = _.updateQueue, o = _.lastBaseUpdate, o !== c && (o === null ? _.firstBaseUpdate = b : o.next = b, _.lastBaseUpdate = d));
    }
    if (a !== null) {
      var j = u.baseState;
      c = 0, _ = b = d = null, o = a;
      do {
        var T = o.lane & -536870913, C = T !== o.lane;
        if (C ? (ul & T) === T : (n & T) === T) {
          T !== 0 && T === Hn && (Ac = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          l: {
            var X = l, K = o;
            T = e;
            var Sl = t;
            switch (K.tag) {
              case 1:
                if (X = K.payload, typeof X == "function") {
                  j = X.call(Sl, j, T);
                  break l;
                }
                j = X;
                break l;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = K.payload, T = typeof X == "function" ? X.call(Sl, j, T) : X, T == null) break l;
                j = U({}, j, T);
                break l;
              case 2:
                At = !0;
            }
          }
          T = o.callback, T !== null && (l.flags |= 64, C && (l.flags |= 8192), C = u.callbacks, C === null ? u.callbacks = [T] : C.push(T));
        } else
          C = {
            lane: T,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, _ === null ? (b = _ = C, d = j) : _ = _.next = C, c |= T;
        if (o = o.next, o === null) {
          if (o = u.shared.pending, o === null)
            break;
          C = o, o = C.next, C.next = null, u.lastBaseUpdate = C, u.shared.pending = null;
        }
      } while (!0);
      _ === null && (d = j), u.baseState = d, u.firstBaseUpdate = b, u.lastBaseUpdate = _, a === null && (u.shared.lanes = 0), Dt |= c, l.lanes = c, l.memoizedState = j;
    }
  }
  function Tr(l, e) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(e);
  }
  function Ar(l, e) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        Tr(t[l], e);
  }
  var Nn = m(null), Oa = m(0);
  function Er(l, e) {
    l = ft, G(Oa, l), G(Nn, e), ft = l | e.baseLanes;
  }
  function Ec() {
    G(Oa, ft), G(Nn, Nn.current);
  }
  function zc() {
    ft = Oa.current, B(Nn), B(Oa);
  }
  var ge = m(null), He = null;
  function Ct(l) {
    var e = l.alternate;
    G(wl, wl.current & 1), G(ge, l), He === null && (e === null || Nn.current !== null || e.memoizedState !== null) && (He = l);
  }
  function Cc(l) {
    G(wl, wl.current), G(ge, l), He === null && (He = l);
  }
  function zr(l) {
    l.tag === 22 ? (G(wl, wl.current), G(ge, l), He === null && (He = l)) : Ot();
  }
  function Ot() {
    G(wl, wl.current), G(ge, ge.current);
  }
  function ve(l) {
    B(ge), He === l && (He = null), B(wl);
  }
  var wl = m(0);
  function Ma(l) {
    for (var e = l; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Uf(t) || wf(t)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === l) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === l) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var lt = 0, F = null, gl = null, Gl = null, _a = !1, Bn = !1, tn = !1, Da = 0, Tu = 0, jn = null, Qh = 0;
  function Rl() {
    throw Error(r(321));
  }
  function Oc(l, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < l.length; t++)
      if (!ye(l[t], e[t])) return !1;
    return !0;
  }
  function Mc(l, e, t, n, u, a) {
    return lt = a, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = l === null || l.memoizedState === null ? cs : Xc, tn = !1, a = t(n, u), tn = !1, Bn && (a = Or(
      e,
      t,
      n,
      u
    )), Cr(l), a;
  }
  function Cr(l) {
    M.H = zu;
    var e = gl !== null && gl.next !== null;
    if (lt = 0, Gl = gl = F = null, _a = !1, Tu = 0, jn = null, e) throw Error(r(300));
    l === null || Yl || (l = l.dependencies, l !== null && ba(l) && (Yl = !0));
  }
  function Or(l, e, t, n) {
    F = l;
    var u = 0;
    do {
      if (Bn && (jn = null), Tu = 0, Bn = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Gl = gl = null, l.updateQueue != null) {
        var a = l.updateQueue;
        a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
      }
      M.H = fs, a = e(t, n);
    } while (Bn);
    return a;
  }
  function Zh() {
    var l = M.H, e = l.useState()[0];
    return e = typeof e.then == "function" ? Au(e) : e, l = l.useState()[0], (gl !== null ? gl.memoizedState : null) !== l && (F.flags |= 1024), e;
  }
  function _c() {
    var l = Da !== 0;
    return Da = 0, l;
  }
  function Dc(l, e, t) {
    e.updateQueue = l.updateQueue, e.flags &= -2053, l.lanes &= ~t;
  }
  function Hc(l) {
    if (_a) {
      for (l = l.memoizedState; l !== null; ) {
        var e = l.queue;
        e !== null && (e.pending = null), l = l.next;
      }
      _a = !1;
    }
    lt = 0, Gl = gl = F = null, Bn = !1, Tu = Da = 0, jn = null;
  }
  function ee() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gl === null ? F.memoizedState = Gl = l : Gl = Gl.next = l, Gl;
  }
  function Nl() {
    if (gl === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = gl.next;
    var e = Gl === null ? F.memoizedState : Gl.next;
    if (e !== null)
      Gl = e, gl = l;
    else {
      if (l === null)
        throw F.alternate === null ? Error(r(467)) : Error(r(310));
      gl = l, l = {
        memoizedState: gl.memoizedState,
        baseState: gl.baseState,
        baseQueue: gl.baseQueue,
        queue: gl.queue,
        next: null
      }, Gl === null ? F.memoizedState = Gl = l : Gl = Gl.next = l;
    }
    return Gl;
  }
  function Ha() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Au(l) {
    var e = Tu;
    return Tu += 1, jn === null && (jn = []), l = gr(jn, l, e), e = F, (Gl === null ? e.memoizedState : Gl.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? cs : Xc), l;
  }
  function Ra(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Au(l);
      if (l.$$typeof === bl) return $l(l);
    }
    throw Error(r(438, String(l)));
  }
  function Rc(l) {
    var e = null, t = F.updateQueue;
    if (t !== null && (e = t.memoCache), e == null) {
      var n = F.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), t === null && (t = Ha(), F.updateQueue = t), t.memoCache = e, t = e.data[e.index], t === void 0)
      for (t = e.data[e.index] = Array(l), n = 0; n < l; n++)
        t[n] = Ve;
    return e.index++, t;
  }
  function et(l, e) {
    return typeof e == "function" ? e(l) : e;
  }
  function Ua(l) {
    var e = Nl();
    return Uc(e, gl, l);
  }
  function Uc(l, e, t) {
    var n = l.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var u = l.baseQueue, a = n.pending;
    if (a !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = a.next, a.next = c;
      }
      e.baseQueue = u = a, n.pending = null;
    }
    if (a = l.baseState, u === null) l.memoizedState = a;
    else {
      e = u.next;
      var o = c = null, d = null, b = e, _ = !1;
      do {
        var j = b.lane & -536870913;
        if (j !== b.lane ? (ul & j) === j : (lt & j) === j) {
          var T = b.revertLane;
          if (T === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), j === Hn && (_ = !0);
          else if ((lt & T) === T) {
            b = b.next, T === Hn && (_ = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (o = d = j, c = a) : d = d.next = j, F.lanes |= T, Dt |= T;
          j = b.action, tn && t(a, j), a = b.hasEagerState ? b.eagerState : t(a, j);
        } else
          T = {
            lane: j,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (o = d = T, c = a) : d = d.next = T, F.lanes |= j, Dt |= j;
        b = b.next;
      } while (b !== null && b !== e);
      if (d === null ? c = a : d.next = o, !ye(a, l.memoizedState) && (Yl = !0, _ && (t = Rn, t !== null)))
        throw t;
      l.memoizedState = a, l.baseState = c, l.baseQueue = d, n.lastRenderedState = a;
    }
    return u === null && (n.lanes = 0), [l.memoizedState, n.dispatch];
  }
  function wc(l) {
    var e = Nl(), t = e.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = l;
    var n = t.dispatch, u = t.pending, a = e.memoizedState;
    if (u !== null) {
      t.pending = null;
      var c = u = u.next;
      do
        a = l(a, c.action), c = c.next;
      while (c !== u);
      ye(a, e.memoizedState) || (Yl = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), t.lastRenderedState = a;
    }
    return [a, n];
  }
  function Mr(l, e, t) {
    var n = F, u = Nl(), a = fl;
    if (a) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = e();
    var c = !ye(
      (gl || u).memoizedState,
      t
    );
    if (c && (u.memoizedState = t, Yl = !0), u = u.queue, jc(Hr.bind(null, n, u, l), [
      l
    ]), u.getSnapshot !== e || c || Gl !== null && Gl.memoizedState.tag & 1) {
      if (n.flags |= 2048, qn(
        9,
        { destroy: void 0 },
        Dr.bind(
          null,
          n,
          u,
          t,
          e
        ),
        null
      ), pl === null) throw Error(r(349));
      a || (lt & 127) !== 0 || _r(n, e, t);
    }
    return t;
  }
  function _r(l, e, t) {
    l.flags |= 16384, l = { getSnapshot: e, value: t }, e = F.updateQueue, e === null ? (e = Ha(), F.updateQueue = e, e.stores = [l]) : (t = e.stores, t === null ? e.stores = [l] : t.push(l));
  }
  function Dr(l, e, t, n) {
    e.value = t, e.getSnapshot = n, Rr(e) && Ur(l);
  }
  function Hr(l, e, t) {
    return t(function() {
      Rr(e) && Ur(l);
    });
  }
  function Rr(l) {
    var e = l.getSnapshot;
    l = l.value;
    try {
      var t = e();
      return !ye(l, t);
    } catch {
      return !0;
    }
  }
  function Ur(l) {
    var e = Jt(l, 2);
    e !== null && oe(e, l, 2);
  }
  function Nc(l) {
    var e = ee();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), tn) {
        mt(!0);
        try {
          t();
        } finally {
          mt(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = l, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: et,
      lastRenderedState: l
    }, e;
  }
  function wr(l, e, t, n) {
    return l.baseState = t, Uc(
      l,
      gl,
      typeof n == "function" ? n : et
    );
  }
  function Vh(l, e, t, n, u) {
    if (Ba(l)) throw Error(r(485));
    if (l = e.action, l !== null) {
      var a = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          a.listeners.push(c);
        }
      };
      M.T !== null ? t(!0) : a.isTransition = !1, n(a), t = e.pending, t === null ? (a.next = e.pending = a, Nr(e, a)) : (a.next = t.next, e.pending = t.next = a);
    }
  }
  function Nr(l, e) {
    var t = e.action, n = e.payload, u = l.state;
    if (e.isTransition) {
      var a = M.T, c = {};
      M.T = c;
      try {
        var o = t(u, n), d = M.S;
        d !== null && d(c, o), Br(l, e, o);
      } catch (b) {
        Bc(l, e, b);
      } finally {
        a !== null && c.types !== null && (a.types = c.types), M.T = a;
      }
    } else
      try {
        a = t(u, n), Br(l, e, a);
      } catch (b) {
        Bc(l, e, b);
      }
  }
  function Br(l, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        jr(l, e, n);
      },
      function(n) {
        return Bc(l, e, n);
      }
    ) : jr(l, e, t);
  }
  function jr(l, e, t) {
    e.status = "fulfilled", e.value = t, qr(e), l.state = t, e = l.pending, e !== null && (t = e.next, t === e ? l.pending = null : (t = t.next, e.next = t, Nr(l, t)));
  }
  function Bc(l, e, t) {
    var n = l.pending;
    if (l.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = t, qr(e), e = e.next;
      while (e !== n);
    }
    l.action = null;
  }
  function qr(l) {
    l = l.listeners;
    for (var e = 0; e < l.length; e++) (0, l[e])();
  }
  function xr(l, e) {
    return e;
  }
  function Gr(l, e) {
    if (fl) {
      var t = pl.formState;
      if (t !== null) {
        l: {
          var n = F;
          if (fl) {
            if (zl) {
              e: {
                for (var u = zl, a = De; u.nodeType !== 8; ) {
                  if (!a) {
                    u = null;
                    break e;
                  }
                  if (u = Re(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                a = u.data, u = a === "F!" || a === "F" ? u : null;
              }
              if (u) {
                zl = Re(
                  u.nextSibling
                ), n = u.data === "F!";
                break l;
              }
            }
            pt(n);
          }
          n = !1;
        }
        n && (e = t[0]);
      }
    }
    return t = ee(), t.memoizedState = t.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e
    }, t.queue = n, t = us.bind(
      null,
      F,
      n
    ), n.dispatch = t, n = Nc(!1), a = Lc.bind(
      null,
      F,
      !1,
      n.queue
    ), n = ee(), u = {
      state: e,
      dispatch: null,
      action: l,
      pending: null
    }, n.queue = u, t = Vh.bind(
      null,
      F,
      u,
      a,
      t
    ), u.dispatch = t, n.memoizedState = l, [e, t, !1];
  }
  function Yr(l) {
    var e = Nl();
    return Lr(e, gl, l);
  }
  function Lr(l, e, t) {
    if (e = Uc(
      l,
      e,
      xr
    )[0], l = Ua(et)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Au(e);
      } catch (c) {
        throw c === Un ? Aa : c;
      }
    else n = e;
    e = Nl();
    var u = e.queue, a = u.dispatch;
    return t !== e.memoizedState && (F.flags |= 2048, qn(
      9,
      { destroy: void 0 },
      Kh.bind(null, u, t),
      null
    )), [n, a, l];
  }
  function Kh(l, e) {
    l.action = e;
  }
  function Xr(l) {
    var e = Nl(), t = gl;
    if (t !== null)
      return Lr(e, t, l);
    Nl(), e = e.memoizedState, t = Nl();
    var n = t.queue.dispatch;
    return t.memoizedState = l, [e, n, !1];
  }
  function qn(l, e, t, n) {
    return l = { tag: l, create: t, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = Ha(), F.updateQueue = e), t = e.lastEffect, t === null ? e.lastEffect = l.next = l : (n = t.next, t.next = l, l.next = n, e.lastEffect = l), l;
  }
  function Qr() {
    return Nl().memoizedState;
  }
  function wa(l, e, t, n) {
    var u = ee();
    F.flags |= l, u.memoizedState = qn(
      1 | e,
      { destroy: void 0 },
      t,
      n === void 0 ? null : n
    );
  }
  function Na(l, e, t, n) {
    var u = Nl();
    n = n === void 0 ? null : n;
    var a = u.memoizedState.inst;
    gl !== null && n !== null && Oc(n, gl.memoizedState.deps) ? u.memoizedState = qn(e, a, t, n) : (F.flags |= l, u.memoizedState = qn(
      1 | e,
      a,
      t,
      n
    ));
  }
  function Zr(l, e) {
    wa(8390656, 8, l, e);
  }
  function jc(l, e) {
    Na(2048, 8, l, e);
  }
  function Jh(l) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = Ha(), F.updateQueue = e, e.events = [l];
    else {
      var t = e.events;
      t === null ? e.events = [l] : t.push(l);
    }
  }
  function Vr(l) {
    var e = Nl().memoizedState;
    return Jh({ ref: e, nextImpl: l }), function() {
      if ((sl & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Kr(l, e) {
    return Na(4, 2, l, e);
  }
  function Jr(l, e) {
    return Na(4, 4, l, e);
  }
  function kr(l, e) {
    if (typeof e == "function") {
      l = l();
      var t = e(l);
      return function() {
        typeof t == "function" ? t() : e(null);
      };
    }
    if (e != null)
      return l = l(), e.current = l, function() {
        e.current = null;
      };
  }
  function Wr(l, e, t) {
    t = t != null ? t.concat([l]) : null, Na(4, 4, kr.bind(null, e, l), t);
  }
  function qc() {
  }
  function $r(l, e) {
    var t = Nl();
    e = e === void 0 ? null : e;
    var n = t.memoizedState;
    return e !== null && Oc(e, n[1]) ? n[0] : (t.memoizedState = [l, e], l);
  }
  function Fr(l, e) {
    var t = Nl();
    e = e === void 0 ? null : e;
    var n = t.memoizedState;
    if (e !== null && Oc(e, n[1]))
      return n[0];
    if (n = l(), tn) {
      mt(!0);
      try {
        l();
      } finally {
        mt(!1);
      }
    }
    return t.memoizedState = [n, e], n;
  }
  function xc(l, e, t) {
    return t === void 0 || (lt & 1073741824) !== 0 && (ul & 261930) === 0 ? l.memoizedState = e : (l.memoizedState = t, l = Is(), F.lanes |= l, Dt |= l, t);
  }
  function Ir(l, e, t, n) {
    return ye(t, e) ? t : Nn.current !== null ? (l = xc(l, t, n), ye(l, e) || (Yl = !0), l) : (lt & 42) === 0 || (lt & 1073741824) !== 0 && (ul & 261930) === 0 ? (Yl = !0, l.memoizedState = t) : (l = Is(), F.lanes |= l, Dt |= l, e);
  }
  function Pr(l, e, t, n, u) {
    var a = D.p;
    D.p = a !== 0 && 8 > a ? a : 8;
    var c = M.T, o = {};
    M.T = o, Lc(l, !1, e, t);
    try {
      var d = u(), b = M.S;
      if (b !== null && b(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var _ = Xh(
          d,
          n
        );
        Eu(
          l,
          e,
          _,
          pe(l)
        );
      } else
        Eu(
          l,
          e,
          n,
          pe(l)
        );
    } catch (j) {
      Eu(
        l,
        e,
        { then: function() {
        }, status: "rejected", reason: j },
        pe()
      );
    } finally {
      D.p = a, c !== null && o.types !== null && (c.types = o.types), M.T = c;
    }
  }
  function kh() {
  }
  function Gc(l, e, t, n) {
    if (l.tag !== 5) throw Error(r(476));
    var u = ls(l).queue;
    Pr(
      l,
      u,
      e,
      J,
      t === null ? kh : function() {
        return es(l), t(n);
      }
    );
  }
  function ls(l) {
    var e = l.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: et,
        lastRenderedState: J
      },
      next: null
    };
    var t = {};
    return e.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: et,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = e, l = l.alternate, l !== null && (l.memoizedState = e), e;
  }
  function es(l) {
    var e = ls(l);
    e.next === null && (e = l.alternate.memoizedState), Eu(
      l,
      e.next.queue,
      {},
      pe()
    );
  }
  function Yc() {
    return $l(Yu);
  }
  function ts() {
    return Nl().memoizedState;
  }
  function ns() {
    return Nl().memoizedState;
  }
  function Wh(l) {
    for (var e = l.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = pe();
          l = Et(t);
          var n = zt(e, l, t);
          n !== null && (oe(n, e, t), Su(n, e, t)), e = { cache: mc() }, l.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function $h(l, e, t) {
    var n = pe();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ba(l) ? as(e, t) : (t = uc(l, e, t, n), t !== null && (oe(t, l, n), is(t, e, n)));
  }
  function us(l, e, t) {
    var n = pe();
    Eu(l, e, t, n);
  }
  function Eu(l, e, t, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ba(l)) as(e, u);
    else {
      var a = l.alternate;
      if (l.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null))
        try {
          var c = e.lastRenderedState, o = a(c, t);
          if (u.hasEagerState = !0, u.eagerState = o, ye(o, c))
            return ma(l, e, u, 0), pl === null && ya(), !1;
        } catch {
        }
      if (t = uc(l, e, u, n), t !== null)
        return oe(t, l, n), is(t, e, n), !0;
    }
    return !1;
  }
  function Lc(l, e, t, n) {
    if (n = {
      lane: 2,
      revertLane: pf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ba(l)) {
      if (e) throw Error(r(479));
    } else
      e = uc(
        l,
        t,
        n,
        2
      ), e !== null && oe(e, l, 2);
  }
  function Ba(l) {
    var e = l.alternate;
    return l === F || e !== null && e === F;
  }
  function as(l, e) {
    Bn = _a = !0;
    var t = l.pending;
    t === null ? e.next = e : (e.next = t.next, t.next = e), l.pending = e;
  }
  function is(l, e, t) {
    if ((t & 4194048) !== 0) {
      var n = e.lanes;
      n &= l.pendingLanes, t |= n, e.lanes = t, ro(l, t);
    }
  }
  var zu = {
    readContext: $l,
    use: Ra,
    useCallback: Rl,
    useContext: Rl,
    useEffect: Rl,
    useImperativeHandle: Rl,
    useLayoutEffect: Rl,
    useInsertionEffect: Rl,
    useMemo: Rl,
    useReducer: Rl,
    useRef: Rl,
    useState: Rl,
    useDebugValue: Rl,
    useDeferredValue: Rl,
    useTransition: Rl,
    useSyncExternalStore: Rl,
    useId: Rl,
    useHostTransitionStatus: Rl,
    useFormState: Rl,
    useActionState: Rl,
    useOptimistic: Rl,
    useMemoCache: Rl,
    useCacheRefresh: Rl
  };
  zu.useEffectEvent = Rl;
  var cs = {
    readContext: $l,
    use: Ra,
    useCallback: function(l, e) {
      return ee().memoizedState = [
        l,
        e === void 0 ? null : e
      ], l;
    },
    useContext: $l,
    useEffect: Zr,
    useImperativeHandle: function(l, e, t) {
      t = t != null ? t.concat([l]) : null, wa(
        4194308,
        4,
        kr.bind(null, e, l),
        t
      );
    },
    useLayoutEffect: function(l, e) {
      return wa(4194308, 4, l, e);
    },
    useInsertionEffect: function(l, e) {
      wa(4, 2, l, e);
    },
    useMemo: function(l, e) {
      var t = ee();
      e = e === void 0 ? null : e;
      var n = l();
      if (tn) {
        mt(!0);
        try {
          l();
        } finally {
          mt(!1);
        }
      }
      return t.memoizedState = [n, e], n;
    },
    useReducer: function(l, e, t) {
      var n = ee();
      if (t !== void 0) {
        var u = t(e);
        if (tn) {
          mt(!0);
          try {
            t(e);
          } finally {
            mt(!1);
          }
        }
      } else u = e;
      return n.memoizedState = n.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, n.queue = l, l = l.dispatch = $h.bind(
        null,
        F,
        l
      ), [n.memoizedState, l];
    },
    useRef: function(l) {
      var e = ee();
      return l = { current: l }, e.memoizedState = l;
    },
    useState: function(l) {
      l = Nc(l);
      var e = l.queue, t = us.bind(null, F, e);
      return e.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: qc,
    useDeferredValue: function(l, e) {
      var t = ee();
      return xc(t, l, e);
    },
    useTransition: function() {
      var l = Nc(!1);
      return l = Pr.bind(
        null,
        F,
        l.queue,
        !0,
        !1
      ), ee().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, e, t) {
      var n = F, u = ee();
      if (fl) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = e(), pl === null)
          throw Error(r(349));
        (ul & 127) !== 0 || _r(n, e, t);
      }
      u.memoizedState = t;
      var a = { value: t, getSnapshot: e };
      return u.queue = a, Zr(Hr.bind(null, n, a, l), [
        l
      ]), n.flags |= 2048, qn(
        9,
        { destroy: void 0 },
        Dr.bind(
          null,
          n,
          a,
          t,
          e
        ),
        null
      ), t;
    },
    useId: function() {
      var l = ee(), e = pl.identifierPrefix;
      if (fl) {
        var t = Ye, n = Ge;
        t = (n & ~(1 << 32 - he(n) - 1)).toString(32) + t, e = "_" + e + "R_" + t, t = Da++, 0 < t && (e += "H" + t.toString(32)), e += "_";
      } else
        t = Qh++, e = "_" + e + "r_" + t.toString(32) + "_";
      return l.memoizedState = e;
    },
    useHostTransitionStatus: Yc,
    useFormState: Gr,
    useActionState: Gr,
    useOptimistic: function(l) {
      var e = ee();
      e.memoizedState = e.baseState = l;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = t, e = Lc.bind(
        null,
        F,
        !0,
        t
      ), t.dispatch = e, [l, e];
    },
    useMemoCache: Rc,
    useCacheRefresh: function() {
      return ee().memoizedState = Wh.bind(
        null,
        F
      );
    },
    useEffectEvent: function(l) {
      var e = ee(), t = { impl: l };
      return e.memoizedState = t, function() {
        if ((sl & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, Xc = {
    readContext: $l,
    use: Ra,
    useCallback: $r,
    useContext: $l,
    useEffect: jc,
    useImperativeHandle: Wr,
    useInsertionEffect: Kr,
    useLayoutEffect: Jr,
    useMemo: Fr,
    useReducer: Ua,
    useRef: Qr,
    useState: function() {
      return Ua(et);
    },
    useDebugValue: qc,
    useDeferredValue: function(l, e) {
      var t = Nl();
      return Ir(
        t,
        gl.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = Ua(et)[0], e = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : Au(l),
        e
      ];
    },
    useSyncExternalStore: Mr,
    useId: ts,
    useHostTransitionStatus: Yc,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(l, e) {
      var t = Nl();
      return wr(t, gl, l, e);
    },
    useMemoCache: Rc,
    useCacheRefresh: ns
  };
  Xc.useEffectEvent = Vr;
  var fs = {
    readContext: $l,
    use: Ra,
    useCallback: $r,
    useContext: $l,
    useEffect: jc,
    useImperativeHandle: Wr,
    useInsertionEffect: Kr,
    useLayoutEffect: Jr,
    useMemo: Fr,
    useReducer: wc,
    useRef: Qr,
    useState: function() {
      return wc(et);
    },
    useDebugValue: qc,
    useDeferredValue: function(l, e) {
      var t = Nl();
      return gl === null ? xc(t, l, e) : Ir(
        t,
        gl.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = wc(et)[0], e = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : Au(l),
        e
      ];
    },
    useSyncExternalStore: Mr,
    useId: ts,
    useHostTransitionStatus: Yc,
    useFormState: Xr,
    useActionState: Xr,
    useOptimistic: function(l, e) {
      var t = Nl();
      return gl !== null ? wr(t, gl, l, e) : (t.baseState = l, [l, t.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: ns
  };
  fs.useEffectEvent = Vr;
  function Qc(l, e, t, n) {
    e = l.memoizedState, t = t(n, e), t = t == null ? e : U({}, e, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var Zc = {
    enqueueSetState: function(l, e, t) {
      l = l._reactInternals;
      var n = pe(), u = Et(n);
      u.payload = e, t != null && (u.callback = t), e = zt(l, u, n), e !== null && (oe(e, l, n), Su(e, l, n));
    },
    enqueueReplaceState: function(l, e, t) {
      l = l._reactInternals;
      var n = pe(), u = Et(n);
      u.tag = 1, u.payload = e, t != null && (u.callback = t), e = zt(l, u, n), e !== null && (oe(e, l, n), Su(e, l, n));
    },
    enqueueForceUpdate: function(l, e) {
      l = l._reactInternals;
      var t = pe(), n = Et(t);
      n.tag = 2, e != null && (n.callback = e), e = zt(l, n, t), e !== null && (oe(e, l, t), Su(e, l, t));
    }
  };
  function os(l, e, t, n, u, a, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(n, a, c) : e.prototype && e.prototype.isPureReactComponent ? !ru(t, n) || !ru(u, a) : !0;
  }
  function rs(l, e, t, n) {
    l = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== l && Zc.enqueueReplaceState(e, e.state, null);
  }
  function nn(l, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var n in e)
        n !== "ref" && (t[n] = e[n]);
    }
    if (l = l.defaultProps) {
      t === e && (t = U({}, t));
      for (var u in l)
        t[u] === void 0 && (t[u] = l[u]);
    }
    return t;
  }
  function ss(l) {
    ha(l);
  }
  function ds(l) {
    console.error(l);
  }
  function hs(l) {
    ha(l);
  }
  function ja(l, e) {
    try {
      var t = l.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function ys(l, e, t) {
    try {
      var n = l.onCaughtError;
      n(t.value, {
        componentStack: t.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Vc(l, e, t) {
    return t = Et(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      ja(l, e);
    }, t;
  }
  function ms(l) {
    return l = Et(l), l.tag = 3, l;
  }
  function gs(l, e, t, n) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var a = n.value;
      l.payload = function() {
        return u(a);
      }, l.callback = function() {
        ys(e, t, n);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      ys(e, t, n), typeof u != "function" && (Ht === null ? Ht = /* @__PURE__ */ new Set([this]) : Ht.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Fh(l, e, t, n, u) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = t.alternate, e !== null && Dn(
        e,
        t,
        u,
        !0
      ), t = ge.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return He === null ? ka() : t.alternate === null && Ul === 0 && (Ul = 3), t.flags &= -257, t.flags |= 65536, t.lanes = u, n === Ea ? t.flags |= 16384 : (e = t.updateQueue, e === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), vf(l, n, u)), !1;
          case 22:
            return t.flags |= 65536, n === Ea ? t.flags |= 16384 : (e = t.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = e) : (t = e.retryQueue, t === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), vf(l, n, u)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return vf(l, n, u), ka(), !1;
    }
    if (fl)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, n !== rc && (l = Error(r(422), { cause: n }), hu(Oe(l, t)))) : (n !== rc && (e = Error(r(423), {
        cause: n
      }), hu(
        Oe(e, t)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, n = Oe(n, t), u = Vc(
        l.stateNode,
        n,
        u
      ), Tc(l, u), Ul !== 4 && (Ul = 2)), !1;
    var a = Error(r(520), { cause: n });
    if (a = Oe(a, t), Uu === null ? Uu = [a] : Uu.push(a), Ul !== 4 && (Ul = 2), e === null) return !0;
    n = Oe(n, t), t = e;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = u & -u, t.lanes |= l, l = Vc(t.stateNode, n, l), Tc(t, l), !1;
        case 1:
          if (e = t.type, a = t.stateNode, (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (Ht === null || !Ht.has(a))))
            return t.flags |= 65536, u &= -u, t.lanes |= u, u = ms(u), gs(
              u,
              l,
              t,
              n
            ), Tc(t, u), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Kc = Error(r(461)), Yl = !1;
  function Fl(l, e, t, n) {
    e.child = l === null ? pr(e, null, t, n) : en(
      e,
      l.child,
      t,
      n
    );
  }
  function vs(l, e, t, n, u) {
    t = t.render;
    var a = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return Ft(e), n = Mc(
      l,
      e,
      t,
      c,
      a,
      u
    ), o = _c(), l !== null && !Yl ? (Dc(l, e, u), tt(l, e, u)) : (fl && o && fc(e), e.flags |= 1, Fl(l, e, n, u), e.child);
  }
  function Ss(l, e, t, n, u) {
    if (l === null) {
      var a = t.type;
      return typeof a == "function" && !ac(a) && a.defaultProps === void 0 && t.compare === null ? (e.tag = 15, e.type = a, bs(
        l,
        e,
        a,
        n,
        u
      )) : (l = va(
        t.type,
        null,
        n,
        e,
        e.mode,
        u
      ), l.ref = e.ref, l.return = e, e.child = l);
    }
    if (a = l.child, !lf(l, u)) {
      var c = a.memoizedProps;
      if (t = t.compare, t = t !== null ? t : ru, t(c, n) && l.ref === e.ref)
        return tt(l, e, u);
    }
    return e.flags |= 1, l = $e(a, n), l.ref = e.ref, l.return = e, e.child = l;
  }
  function bs(l, e, t, n, u) {
    if (l !== null) {
      var a = l.memoizedProps;
      if (ru(a, n) && l.ref === e.ref)
        if (Yl = !1, e.pendingProps = n = a, lf(l, u))
          (l.flags & 131072) !== 0 && (Yl = !0);
        else
          return e.lanes = l.lanes, tt(l, e, u);
    }
    return Jc(
      l,
      e,
      t,
      n,
      u
    );
  }
  function ps(l, e, t, n) {
    var u = n.children, a = l !== null ? l.memoizedState : null;
    if (l === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = a !== null ? a.baseLanes | t : t, l !== null) {
          for (n = e.child = l.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          n = u & ~a;
        } else n = 0, e.child = null;
        return Ts(
          l,
          e,
          a,
          t,
          n
        );
      }
      if ((t & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ta(
          e,
          a !== null ? a.cachePool : null
        ), a !== null ? Er(e, a) : Ec(), zr(e);
      else
        return n = e.lanes = 536870912, Ts(
          l,
          e,
          a !== null ? a.baseLanes | t : t,
          t,
          n
        );
    } else
      a !== null ? (Ta(e, a.cachePool), Er(e, a), Ot(), e.memoizedState = null) : (l !== null && Ta(e, null), Ec(), Ot());
    return Fl(l, e, u, t), e.child;
  }
  function Cu(l, e) {
    return l !== null && l.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ts(l, e, t, n, u) {
    var a = vc();
    return a = a === null ? null : { parent: xl._currentValue, pool: a }, e.memoizedState = {
      baseLanes: t,
      cachePool: a
    }, l !== null && Ta(e, null), Ec(), zr(e), l !== null && Dn(l, e, n, !0), e.childLanes = u, null;
  }
  function qa(l, e) {
    return e = Ga(
      { mode: e.mode, children: e.children },
      l.mode
    ), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function As(l, e, t) {
    return en(e, l.child, null, t), l = qa(e, e.pendingProps), l.flags |= 2, ve(e), e.memoizedState = null, l;
  }
  function Ih(l, e, t) {
    var n = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, l === null) {
      if (fl) {
        if (n.mode === "hidden")
          return l = qa(e, n), e.lanes = 536870912, Cu(null, l);
        if (Cc(e), (l = zl) ? (l = Nd(
          l,
          De
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: St !== null ? { id: Ge, overflow: Ye } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = ar(l), t.return = e, e.child = t, Wl = e, zl = null)) : l = null, l === null) throw pt(e);
        return e.lanes = 536870912, null;
      }
      return qa(e, n);
    }
    var a = l.memoizedState;
    if (a !== null) {
      var c = a.dehydrated;
      if (Cc(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = As(
            l,
            e,
            t
          );
        else if (e.memoizedState !== null)
          e.child = l.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Yl || Dn(l, e, t, !1), u = (t & l.childLanes) !== 0, Yl || u) {
        if (n = pl, n !== null && (c = so(n, t), c !== 0 && c !== a.retryLane))
          throw a.retryLane = c, Jt(l, c), oe(n, l, c), Kc;
        ka(), e = As(
          l,
          e,
          t
        );
      } else
        l = a.treeContext, zl = Re(c.nextSibling), Wl = e, fl = !0, bt = null, De = !1, l !== null && fr(e, l), e = qa(e, n), e.flags |= 4096;
      return e;
    }
    return l = $e(l.child, {
      mode: n.mode,
      children: n.children
    }), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function xa(l, e) {
    var t = e.ref;
    if (t === null)
      l !== null && l.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (l === null || l.ref !== t) && (e.flags |= 4194816);
    }
  }
  function Jc(l, e, t, n, u) {
    return Ft(e), t = Mc(
      l,
      e,
      t,
      n,
      void 0,
      u
    ), n = _c(), l !== null && !Yl ? (Dc(l, e, u), tt(l, e, u)) : (fl && n && fc(e), e.flags |= 1, Fl(l, e, t, u), e.child);
  }
  function Es(l, e, t, n, u, a) {
    return Ft(e), e.updateQueue = null, t = Or(
      e,
      n,
      t,
      u
    ), Cr(l), n = _c(), l !== null && !Yl ? (Dc(l, e, a), tt(l, e, a)) : (fl && n && fc(e), e.flags |= 1, Fl(l, e, t, a), e.child);
  }
  function zs(l, e, t, n, u) {
    if (Ft(e), e.stateNode === null) {
      var a = Cn, c = t.contextType;
      typeof c == "object" && c !== null && (a = $l(c)), a = new t(n, a), e.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Zc, e.stateNode = a, a._reactInternals = e, a = e.stateNode, a.props = n, a.state = e.memoizedState, a.refs = {}, bc(e), c = t.contextType, a.context = typeof c == "object" && c !== null ? $l(c) : Cn, a.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Qc(
        e,
        t,
        c,
        n
      ), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Zc.enqueueReplaceState(a, a.state, null), pu(e, n, a, u), bu(), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (l === null) {
      a = e.stateNode;
      var o = e.memoizedProps, d = nn(t, o);
      a.props = d;
      var b = a.context, _ = t.contextType;
      c = Cn, typeof _ == "object" && _ !== null && (c = $l(_));
      var j = t.getDerivedStateFromProps;
      _ = typeof j == "function" || typeof a.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, _ || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o || b !== c) && rs(
        e,
        a,
        n,
        c
      ), At = !1;
      var T = e.memoizedState;
      a.state = T, pu(e, n, a, u), bu(), b = e.memoizedState, o || T !== b || At ? (typeof j == "function" && (Qc(
        e,
        t,
        j,
        n
      ), b = e.memoizedState), (d = At || os(
        e,
        t,
        d,
        n,
        T,
        b,
        c
      )) ? (_ || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), a.props = n, a.state = b, a.context = c, n = d) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      a = e.stateNode, pc(l, e), c = e.memoizedProps, _ = nn(t, c), a.props = _, j = e.pendingProps, T = a.context, b = t.contextType, d = Cn, typeof b == "object" && b !== null && (d = $l(b)), o = t.getDerivedStateFromProps, (b = typeof o == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== j || T !== d) && rs(
        e,
        a,
        n,
        d
      ), At = !1, T = e.memoizedState, a.state = T, pu(e, n, a, u), bu();
      var C = e.memoizedState;
      c !== j || T !== C || At || l !== null && l.dependencies !== null && ba(l.dependencies) ? (typeof o == "function" && (Qc(
        e,
        t,
        o,
        n
      ), C = e.memoizedState), (_ = At || os(
        e,
        t,
        _,
        n,
        T,
        C,
        d
      ) || l !== null && l.dependencies !== null && ba(l.dependencies)) ? (b || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, C, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(
        n,
        C,
        d
      )), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === l.memoizedProps && T === l.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && T === l.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = C), a.props = n, a.state = C, a.context = d, n = _) : (typeof a.componentDidUpdate != "function" || c === l.memoizedProps && T === l.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && T === l.memoizedState || (e.flags |= 1024), n = !1);
    }
    return a = n, xa(l, e), n = (e.flags & 128) !== 0, a || n ? (a = e.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : a.render(), e.flags |= 1, l !== null && n ? (e.child = en(
      e,
      l.child,
      null,
      u
    ), e.child = en(
      e,
      null,
      t,
      u
    )) : Fl(l, e, t, u), e.memoizedState = a.state, l = e.child) : l = tt(
      l,
      e,
      u
    ), l;
  }
  function Cs(l, e, t, n) {
    return Wt(), e.flags |= 256, Fl(l, e, t, n), e.child;
  }
  var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wc(l) {
    return { baseLanes: l, cachePool: yr() };
  }
  function $c(l, e, t) {
    return l = l !== null ? l.childLanes & ~t : 0, e && (l |= be), l;
  }
  function Os(l, e, t) {
    var n = e.pendingProps, u = !1, a = (e.flags & 128) !== 0, c;
    if ((c = a) || (c = l !== null && l.memoizedState === null ? !1 : (wl.current & 2) !== 0), c && (u = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, l === null) {
      if (fl) {
        if (u ? Ct(e) : Ot(), (l = zl) ? (l = Nd(
          l,
          De
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: St !== null ? { id: Ge, overflow: Ye } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = ar(l), t.return = e, e.child = t, Wl = e, zl = null)) : l = null, l === null) throw pt(e);
        return wf(l) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, u ? (Ot(), u = e.mode, o = Ga(
        { mode: "hidden", children: o },
        u
      ), n = kt(
        n,
        u,
        t,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = Wc(t), n.childLanes = $c(
        l,
        c,
        t
      ), e.memoizedState = kc, Cu(null, n)) : (Ct(e), Fc(e, o));
    }
    var d = l.memoizedState;
    if (d !== null && (o = d.dehydrated, o !== null)) {
      if (a)
        e.flags & 256 ? (Ct(e), e.flags &= -257, e = Ic(
          l,
          e,
          t
        )) : e.memoizedState !== null ? (Ot(), e.child = l.child, e.flags |= 128, e = null) : (Ot(), o = n.fallback, u = e.mode, n = Ga(
          { mode: "visible", children: n.children },
          u
        ), o = kt(
          o,
          u,
          t,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, en(
          e,
          l.child,
          null,
          t
        ), n = e.child, n.memoizedState = Wc(t), n.childLanes = $c(
          l,
          c,
          t
        ), e.memoizedState = kc, e = Cu(null, n));
      else if (Ct(e), wf(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, hu({ value: n, source: null, stack: null }), e = Ic(
          l,
          e,
          t
        );
      } else if (Yl || Dn(l, e, t, !1), c = (t & l.childLanes) !== 0, Yl || c) {
        if (c = pl, c !== null && (n = so(c, t), n !== 0 && n !== d.retryLane))
          throw d.retryLane = n, Jt(l, n), oe(c, l, n), Kc;
        Uf(o) || ka(), e = Ic(
          l,
          e,
          t
        );
      } else
        Uf(o) ? (e.flags |= 192, e.child = l.child, e = null) : (l = d.treeContext, zl = Re(
          o.nextSibling
        ), Wl = e, fl = !0, bt = null, De = !1, l !== null && fr(e, l), e = Fc(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Ot(), o = n.fallback, u = e.mode, d = l.child, b = d.sibling, n = $e(d, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? o = $e(
      b,
      o
    ) : (o = kt(
      o,
      u,
      t,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, Cu(null, n), n = e.child, o = l.child.memoizedState, o === null ? o = Wc(t) : (u = o.cachePool, u !== null ? (d = xl._currentValue, u = u.parent !== d ? { parent: d, pool: d } : u) : u = yr(), o = {
      baseLanes: o.baseLanes | t,
      cachePool: u
    }), n.memoizedState = o, n.childLanes = $c(
      l,
      c,
      t
    ), e.memoizedState = kc, Cu(l.child, n)) : (Ct(e), t = l.child, l = t.sibling, t = $e(t, {
      mode: "visible",
      children: n.children
    }), t.return = e, t.sibling = null, l !== null && (c = e.deletions, c === null ? (e.deletions = [l], e.flags |= 16) : c.push(l)), e.child = t, e.memoizedState = null, t);
  }
  function Fc(l, e) {
    return e = Ga(
      { mode: "visible", children: e },
      l.mode
    ), e.return = l, l.child = e;
  }
  function Ga(l, e) {
    return l = me(22, l, null, e), l.lanes = 0, l;
  }
  function Ic(l, e, t) {
    return en(e, l.child, null, t), l = Fc(
      e,
      e.pendingProps.children
    ), l.flags |= 2, e.memoizedState = null, l;
  }
  function Ms(l, e, t) {
    l.lanes |= e;
    var n = l.alternate;
    n !== null && (n.lanes |= e), hc(l.return, e, t);
  }
  function Pc(l, e, t, n, u, a) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: t,
      tailMode: u,
      treeForkCount: a
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = t, c.tailMode = u, c.treeForkCount = a);
  }
  function _s(l, e, t) {
    var n = e.pendingProps, u = n.revealOrder, a = n.tail;
    n = n.children;
    var c = wl.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, G(wl, c), Fl(l, e, n, t), n = fl ? du : 0, !o && l !== null && (l.flags & 128) !== 0)
      l: for (l = e.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Ms(l, t, e);
        else if (l.tag === 19)
          Ms(l, t, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (t = e.child, u = null; t !== null; )
          l = t.alternate, l !== null && Ma(l) === null && (u = t), t = t.sibling;
        t = u, t === null ? (u = e.child, e.child = null) : (u = t.sibling, t.sibling = null), Pc(
          e,
          !1,
          u,
          t,
          a,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, u = e.child, e.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && Ma(l) === null) {
            e.child = u;
            break;
          }
          l = u.sibling, u.sibling = t, t = u, u = l;
        }
        Pc(
          e,
          !0,
          t,
          null,
          a,
          n
        );
        break;
      case "together":
        Pc(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tt(l, e, t) {
    if (l !== null && (e.dependencies = l.dependencies), Dt |= e.lanes, (t & e.childLanes) === 0)
      if (l !== null) {
        if (Dn(
          l,
          e,
          t,
          !1
        ), (t & e.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && e.child !== l.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (l = e.child, t = $e(l, l.pendingProps), e.child = t, t.return = e; l.sibling !== null; )
        l = l.sibling, t = t.sibling = $e(l, l.pendingProps), t.return = e;
      t.sibling = null;
    }
    return e.child;
  }
  function lf(l, e) {
    return (l.lanes & e) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ba(l)));
  }
  function Ph(l, e, t) {
    switch (e.tag) {
      case 3:
        Y(e, e.stateNode.containerInfo), Tt(e, xl, l.memoizedState.cache), Wt();
        break;
      case 27:
      case 5:
        k(e);
        break;
      case 4:
        Y(e, e.stateNode.containerInfo);
        break;
      case 10:
        Tt(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Cc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Ct(e), e.flags |= 128, null) : (t & e.child.childLanes) !== 0 ? Os(l, e, t) : (Ct(e), l = tt(
            l,
            e,
            t
          ), l !== null ? l.sibling : null);
        Ct(e);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (n = (t & e.childLanes) !== 0, n || (Dn(
          l,
          e,
          t,
          !1
        ), n = (t & e.childLanes) !== 0), u) {
          if (n)
            return _s(
              l,
              e,
              t
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), G(wl, wl.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, ps(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        Tt(e, xl, l.memoizedState.cache);
    }
    return tt(l, e, t);
  }
  function Ds(l, e, t) {
    if (l !== null)
      if (l.memoizedProps !== e.pendingProps)
        Yl = !0;
      else {
        if (!lf(l, t) && (e.flags & 128) === 0)
          return Yl = !1, Ph(
            l,
            e,
            t
          );
        Yl = (l.flags & 131072) !== 0;
      }
    else
      Yl = !1, fl && (e.flags & 1048576) !== 0 && cr(e, du, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        l: {
          var n = e.pendingProps;
          if (l = Pt(e.elementType), e.type = l, typeof l == "function")
            ac(l) ? (n = nn(l, n), e.tag = 1, e = zs(
              null,
              e,
              l,
              n,
              t
            )) : (e.tag = 0, e = Jc(
              null,
              e,
              l,
              n,
              t
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Vl) {
                e.tag = 11, e = vs(
                  null,
                  e,
                  l,
                  n,
                  t
                );
                break l;
              } else if (u === P) {
                e.tag = 14, e = Ss(
                  null,
                  e,
                  l,
                  n,
                  t
                );
                break l;
              }
            }
            throw e = we(l) || l, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Jc(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 1:
        return n = e.type, u = nn(
          n,
          e.pendingProps
        ), zs(
          l,
          e,
          n,
          u,
          t
        );
      case 3:
        l: {
          if (Y(
            e,
            e.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          n = e.pendingProps;
          var a = e.memoizedState;
          u = a.element, pc(l, e), pu(e, n, null, t);
          var c = e.memoizedState;
          if (n = c.cache, Tt(e, xl, n), n !== a.cache && yc(
            e,
            [xl],
            t,
            !0
          ), bu(), n = c.element, a.isDehydrated)
            if (a = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
              e = Cs(
                l,
                e,
                n,
                t
              );
              break l;
            } else if (n !== u) {
              u = Oe(
                Error(r(424)),
                e
              ), hu(u), e = Cs(
                l,
                e,
                n,
                t
              );
              break l;
            } else
              for (l = e.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, zl = Re(l.firstChild), Wl = e, fl = !0, bt = null, De = !0, t = pr(
                e,
                null,
                n,
                t
              ), e.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Wt(), n === u) {
              e = tt(
                l,
                e,
                t
              );
              break l;
            }
            Fl(l, e, n, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return xa(l, e), l === null ? (t = Yd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = t : fl || (t = e.type, l = e.pendingProps, n = ei(
          A.current
        ).createElement(t), n[kl] = e, n[ne] = l, Il(n, t, l), Ql(n), e.stateNode = n) : e.memoizedState = Yd(
          e.type,
          l.memoizedProps,
          e.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return k(e), l === null && fl && (n = e.stateNode = qd(
          e.type,
          e.pendingProps,
          A.current
        ), Wl = e, De = !0, u = zl, Nt(e.type) ? (Nf = u, zl = Re(n.firstChild)) : zl = u), Fl(
          l,
          e,
          e.pendingProps.children,
          t
        ), xa(l, e), l === null && (e.flags |= 4194304), e.child;
      case 5:
        return l === null && fl && ((u = n = zl) && (n = D1(
          n,
          e.type,
          e.pendingProps,
          De
        ), n !== null ? (e.stateNode = n, Wl = e, zl = Re(n.firstChild), De = !1, u = !0) : u = !1), u || pt(e)), k(e), u = e.type, a = e.pendingProps, c = l !== null ? l.memoizedProps : null, n = a.children, Df(u, a) ? n = null : c !== null && Df(u, c) && (e.flags |= 32), e.memoizedState !== null && (u = Mc(
          l,
          e,
          Zh,
          null,
          null,
          t
        ), Yu._currentValue = u), xa(l, e), Fl(l, e, n, t), e.child;
      case 6:
        return l === null && fl && ((l = t = zl) && (t = H1(
          t,
          e.pendingProps,
          De
        ), t !== null ? (e.stateNode = t, Wl = e, zl = null, l = !0) : l = !1), l || pt(e)), null;
      case 13:
        return Os(l, e, t);
      case 4:
        return Y(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, l === null ? e.child = en(
          e,
          null,
          n,
          t
        ) : Fl(l, e, n, t), e.child;
      case 11:
        return vs(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 7:
        return Fl(
          l,
          e,
          e.pendingProps,
          t
        ), e.child;
      case 8:
        return Fl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 12:
        return Fl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 10:
        return n = e.pendingProps, Tt(e, e.type, n.value), Fl(l, e, n.children, t), e.child;
      case 9:
        return u = e.type._context, n = e.pendingProps.children, Ft(e), u = $l(u), n = n(u), e.flags |= 1, Fl(l, e, n, t), e.child;
      case 14:
        return Ss(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 15:
        return bs(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 19:
        return _s(l, e, t);
      case 31:
        return Ih(l, e, t);
      case 22:
        return ps(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        return Ft(e), n = $l(xl), l === null ? (u = vc(), u === null && (u = pl, a = mc(), u.pooledCache = a, a.refCount++, a !== null && (u.pooledCacheLanes |= t), u = a), e.memoizedState = { parent: n, cache: u }, bc(e), Tt(e, xl, u)) : ((l.lanes & t) !== 0 && (pc(l, e), pu(e, null, null, t), bu()), u = l.memoizedState, a = e.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Tt(e, xl, n)) : (n = a.cache, Tt(e, xl, n), n !== u.cache && yc(
          e,
          [xl],
          t,
          !0
        ))), Fl(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function nt(l) {
    l.flags |= 4;
  }
  function ef(l, e, t, n, u) {
    if ((e = (l.mode & 32) !== 0) && (e = !1), e) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (td()) l.flags |= 8192;
        else
          throw ln = Ea, Sc;
    } else l.flags &= -16777217;
  }
  function Hs(l, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vd(e))
      if (td()) l.flags |= 8192;
      else
        throw ln = Ea, Sc;
  }
  function Ya(l, e) {
    e !== null && (l.flags |= 4), l.flags & 16384 && (e = l.tag !== 22 ? fo() : 536870912, l.lanes |= e, Ln |= e);
  }
  function Ou(l, e) {
    if (!fl)
      switch (l.tailMode) {
        case "hidden":
          e = l.tail;
          for (var t = null; e !== null; )
            e.alternate !== null && (t = e), e = e.sibling;
          t === null ? l.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = l.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e || l.tail === null ? l.tail = null : l.tail.sibling = null : n.sibling = null;
      }
  }
  function Cl(l) {
    var e = l.alternate !== null && l.alternate.child === l.child, t = 0, n = 0;
    if (e)
      for (var u = l.child; u !== null; )
        t |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        t |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= n, l.childLanes = t, e;
  }
  function l1(l, e, t) {
    var n = e.pendingProps;
    switch (oc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Cl(e), null;
      case 1:
        return Cl(e), null;
      case 3:
        return t = e.stateNode, n = null, l !== null && (n = l.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Pe(xl), q(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (_n(e) ? nt(e) : l === null || l.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, sc())), Cl(e), null;
      case 26:
        var u = e.type, a = e.memoizedState;
        return l === null ? (nt(e), a !== null ? (Cl(e), Hs(e, a)) : (Cl(e), ef(
          e,
          u,
          null,
          n,
          t
        ))) : a ? a !== l.memoizedState ? (nt(e), Cl(e), Hs(e, a)) : (Cl(e), e.flags &= -16777217) : (l = l.memoizedProps, l !== n && nt(e), Cl(e), ef(
          e,
          u,
          l,
          n,
          t
        )), null;
      case 27:
        if (ll(e), t = A.current, u = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== n && nt(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Cl(e), null;
          }
          l = v.current, _n(e) ? or(e) : (l = qd(u, n, t), e.stateNode = l, nt(e));
        }
        return Cl(e), null;
      case 5:
        if (ll(e), u = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== n && nt(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Cl(e), null;
          }
          if (a = v.current, _n(e))
            or(e);
          else {
            var c = ei(
              A.current
            );
            switch (a) {
              case 1:
                a = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                a = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    a = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    a = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    a = c.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(
                      a.firstChild
                    );
                    break;
                  case "select":
                    a = typeof n.is == "string" ? c.createElement("select", {
                      is: n.is
                    }) : c.createElement("select"), n.multiple ? a.multiple = !0 : n.size && (a.size = n.size);
                    break;
                  default:
                    a = typeof n.is == "string" ? c.createElement(u, { is: n.is }) : c.createElement(u);
                }
            }
            a[kl] = e, a[ne] = n;
            l: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                a.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = a;
            l: switch (Il(a, u, n), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break l;
              case "img":
                n = !0;
                break l;
              default:
                n = !1;
            }
            n && nt(e);
          }
        }
        return Cl(e), ef(
          e,
          e.type,
          l === null ? null : l.memoizedProps,
          e.pendingProps,
          t
        ), null;
      case 6:
        if (l && e.stateNode != null)
          l.memoizedProps !== n && nt(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (l = A.current, _n(e)) {
            if (l = e.stateNode, t = e.memoizedProps, n = null, u = Wl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            l[kl] = e, l = !!(l.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || Od(l.nodeValue, t)), l || pt(e, !0);
          } else
            l = ei(l).createTextNode(
              n
            ), l[kl] = e, e.stateNode = l;
        }
        return Cl(e), null;
      case 31:
        if (t = e.memoizedState, l === null || l.memoizedState !== null) {
          if (n = _n(e), t !== null) {
            if (l === null) {
              if (!n) throw Error(r(318));
              if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[kl] = e;
            } else
              Wt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Cl(e), l = !1;
          } else
            t = sc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = t), l = !0;
          if (!l)
            return e.flags & 256 ? (ve(e), e) : (ve(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Cl(e), null;
      case 13:
        if (n = e.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = _n(e), n !== null && n.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[kl] = e;
            } else
              Wt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Cl(e), u = !1;
          } else
            u = sc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (ve(e), e) : (ve(e), null);
        }
        return ve(e), (e.flags & 128) !== 0 ? (e.lanes = t, e) : (t = n !== null, l = l !== null && l.memoizedState !== null, t && (n = e.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== u && (n.flags |= 2048)), t !== l && t && (e.child.flags |= 8192), Ya(e, e.updateQueue), Cl(e), null);
      case 4:
        return q(), l === null && zf(e.stateNode.containerInfo), Cl(e), null;
      case 10:
        return Pe(e.type), Cl(e), null;
      case 19:
        if (B(wl), n = e.memoizedState, n === null) return Cl(e), null;
        if (u = (e.flags & 128) !== 0, a = n.rendering, a === null)
          if (u) Ou(n, !1);
          else {
            if (Ul !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = e.child; l !== null; ) {
                if (a = Ma(l), a !== null) {
                  for (e.flags |= 128, Ou(n, !1), l = a.updateQueue, e.updateQueue = l, Ya(e, l), e.subtreeFlags = 0, l = t, t = e.child; t !== null; )
                    ur(t, l), t = t.sibling;
                  return G(
                    wl,
                    wl.current & 1 | 2
                  ), fl && Fe(e, n.treeForkCount), e.child;
                }
                l = l.sibling;
              }
            n.tail !== null && se() > Va && (e.flags |= 128, u = !0, Ou(n, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = Ma(a), l !== null) {
              if (e.flags |= 128, u = !0, l = l.updateQueue, e.updateQueue = l, Ya(e, l), Ou(n, !0), n.tail === null && n.tailMode === "hidden" && !a.alternate && !fl)
                return Cl(e), null;
            } else
              2 * se() - n.renderingStartTime > Va && t !== 536870912 && (e.flags |= 128, u = !0, Ou(n, !1), e.lanes = 4194304);
          n.isBackwards ? (a.sibling = e.child, e.child = a) : (l = n.last, l !== null ? l.sibling = a : e.child = a, n.last = a);
        }
        return n.tail !== null ? (l = n.tail, n.rendering = l, n.tail = l.sibling, n.renderingStartTime = se(), l.sibling = null, t = wl.current, G(
          wl,
          u ? t & 1 | 2 : t & 1
        ), fl && Fe(e, n.treeForkCount), l) : (Cl(e), null);
      case 22:
      case 23:
        return ve(e), zc(), n = e.memoizedState !== null, l !== null ? l.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (Cl(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Cl(e), t = e.updateQueue, t !== null && Ya(e, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== t && (e.flags |= 2048), l !== null && B(It), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), e.memoizedState.cache !== t && (e.flags |= 2048), Pe(xl), Cl(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function e1(l, e) {
    switch (oc(e), e.tag) {
      case 1:
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 3:
        return Pe(xl), q(), l = e.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (e.flags = l & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ll(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ve(e), e.alternate === null)
            throw Error(r(340));
          Wt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 13:
        if (ve(e), l = e.memoizedState, l !== null && l.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Wt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 19:
        return B(wl), null;
      case 4:
        return q(), null;
      case 10:
        return Pe(e.type), null;
      case 22:
      case 23:
        return ve(e), zc(), l !== null && B(It), l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 24:
        return Pe(xl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rs(l, e) {
    switch (oc(e), e.tag) {
      case 3:
        Pe(xl), q();
        break;
      case 26:
      case 27:
      case 5:
        ll(e);
        break;
      case 4:
        q();
        break;
      case 31:
        e.memoizedState !== null && ve(e);
        break;
      case 13:
        ve(e);
        break;
      case 19:
        B(wl);
        break;
      case 10:
        Pe(e.type);
        break;
      case 22:
      case 23:
        ve(e), zc(), l !== null && B(It);
        break;
      case 24:
        Pe(xl);
    }
  }
  function Mu(l, e) {
    try {
      var t = e.updateQueue, n = t !== null ? t.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        t = u;
        do {
          if ((t.tag & l) === l) {
            n = void 0;
            var a = t.create, c = t.inst;
            n = a(), c.destroy = n;
          }
          t = t.next;
        } while (t !== u);
      }
    } catch (o) {
      ml(e, e.return, o);
    }
  }
  function Mt(l, e, t) {
    try {
      var n = e.updateQueue, u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        n = a;
        do {
          if ((n.tag & l) === l) {
            var c = n.inst, o = c.destroy;
            if (o !== void 0) {
              c.destroy = void 0, u = e;
              var d = t, b = o;
              try {
                b();
              } catch (_) {
                ml(
                  u,
                  d,
                  _
                );
              }
            }
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (_) {
      ml(e, e.return, _);
    }
  }
  function Us(l) {
    var e = l.updateQueue;
    if (e !== null) {
      var t = l.stateNode;
      try {
        Ar(e, t);
      } catch (n) {
        ml(l, l.return, n);
      }
    }
  }
  function ws(l, e, t) {
    t.props = nn(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (n) {
      ml(l, e, n);
    }
  }
  function _u(l, e) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var n = l.stateNode;
            break;
          case 30:
            n = l.stateNode;
            break;
          default:
            n = l.stateNode;
        }
        typeof t == "function" ? l.refCleanup = t(n) : t.current = n;
      }
    } catch (u) {
      ml(l, e, u);
    }
  }
  function Le(l, e) {
    var t = l.ref, n = l.refCleanup;
    if (t !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          ml(l, e, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          ml(l, e, u);
        }
      else t.current = null;
  }
  function Ns(l) {
    var e = l.type, t = l.memoizedProps, n = l.stateNode;
    try {
      l: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && n.focus();
          break l;
        case "img":
          t.src ? n.src = t.src : t.srcSet && (n.srcset = t.srcSet);
      }
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function tf(l, e, t) {
    try {
      var n = l.stateNode;
      E1(n, l.type, t, e), n[ne] = e;
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function Bs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Nt(l.type) || l.tag === 4;
  }
  function nf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Bs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Nt(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function uf(l, e, t) {
    var n = l.tag;
    if (n === 5 || n === 6)
      l = l.stateNode, e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.appendChild(l), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = ke));
    else if (n !== 4 && (n === 27 && Nt(l.type) && (t = l.stateNode, e = null), l = l.child, l !== null))
      for (uf(l, e, t), l = l.sibling; l !== null; )
        uf(l, e, t), l = l.sibling;
  }
  function La(l, e, t) {
    var n = l.tag;
    if (n === 5 || n === 6)
      l = l.stateNode, e ? t.insertBefore(l, e) : t.appendChild(l);
    else if (n !== 4 && (n === 27 && Nt(l.type) && (t = l.stateNode), l = l.child, l !== null))
      for (La(l, e, t), l = l.sibling; l !== null; )
        La(l, e, t), l = l.sibling;
  }
  function js(l) {
    var e = l.stateNode, t = l.memoizedProps;
    try {
      for (var n = l.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Il(e, n, t), e[kl] = l, e[ne] = t;
    } catch (a) {
      ml(l, l.return, a);
    }
  }
  var ut = !1, Ll = !1, af = !1, qs = typeof WeakSet == "function" ? WeakSet : Set, Zl = null;
  function t1(l, e) {
    if (l = l.containerInfo, Mf = fi, l = Wo(l), Ii(l)) {
      if ("selectionStart" in l)
        var t = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          t = (t = l.ownerDocument) && t.defaultView || window;
          var n = t.getSelection && t.getSelection();
          if (n && n.rangeCount !== 0) {
            t = n.anchorNode;
            var u = n.anchorOffset, a = n.focusNode;
            n = n.focusOffset;
            try {
              t.nodeType, a.nodeType;
            } catch {
              t = null;
              break l;
            }
            var c = 0, o = -1, d = -1, b = 0, _ = 0, j = l, T = null;
            e: for (; ; ) {
              for (var C; j !== t || u !== 0 && j.nodeType !== 3 || (o = c + u), j !== a || n !== 0 && j.nodeType !== 3 || (d = c + n), j.nodeType === 3 && (c += j.nodeValue.length), (C = j.firstChild) !== null; )
                T = j, j = C;
              for (; ; ) {
                if (j === l) break e;
                if (T === t && ++b === u && (o = c), T === a && ++_ === n && (d = c), (C = j.nextSibling) !== null) break;
                j = T, T = j.parentNode;
              }
              j = C;
            }
            t = o === -1 || d === -1 ? null : { start: o, end: d };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (_f = { focusedElem: l, selectionRange: t }, fi = !1, Zl = e; Zl !== null; )
      if (e = Zl, l = e.child, (e.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = e, Zl = l;
      else
        for (; Zl !== null; ) {
          switch (e = Zl, a = e.alternate, l = e.flags, e.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (t = 0; t < l.length; t++)
                  u = l[t], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && a !== null) {
                l = void 0, t = e, u = a.memoizedProps, a = a.memoizedState, n = t.stateNode;
                try {
                  var X = nn(
                    t.type,
                    u
                  );
                  l = n.getSnapshotBeforeUpdate(
                    X,
                    a
                  ), n.__reactInternalSnapshotBeforeUpdate = l;
                } catch (K) {
                  ml(
                    t,
                    t.return,
                    K
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = e.stateNode.containerInfo, t = l.nodeType, t === 9)
                  Rf(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rf(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = e.sibling, l !== null) {
            l.return = e.return, Zl = l;
            break;
          }
          Zl = e.return;
        }
  }
  function xs(l, e, t) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        it(l, t), n & 4 && Mu(5, t);
        break;
      case 1:
        if (it(l, t), n & 4)
          if (l = t.stateNode, e === null)
            try {
              l.componentDidMount();
            } catch (c) {
              ml(t, t.return, c);
            }
          else {
            var u = nn(
              t.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                e,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              ml(
                t,
                t.return,
                c
              );
            }
          }
        n & 64 && Us(t), n & 512 && _u(t, t.return);
        break;
      case 3:
        if (it(l, t), n & 64 && (l = t.updateQueue, l !== null)) {
          if (e = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                e = t.child.stateNode;
                break;
              case 1:
                e = t.child.stateNode;
            }
          try {
            Ar(l, e);
          } catch (c) {
            ml(t, t.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && js(t);
      case 26:
      case 5:
        it(l, t), e === null && n & 4 && Ns(t), n & 512 && _u(t, t.return);
        break;
      case 12:
        it(l, t);
        break;
      case 31:
        it(l, t), n & 4 && Ls(l, t);
        break;
      case 13:
        it(l, t), n & 4 && Xs(l, t), n & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = s1.bind(
          null,
          t
        ), R1(l, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || ut, !n) {
          e = e !== null && e.memoizedState !== null || Ll, u = ut;
          var a = Ll;
          ut = n, (Ll = e) && !a ? ct(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : it(l, t), ut = u, Ll = a;
        }
        break;
      case 30:
        break;
      default:
        it(l, t);
    }
  }
  function Gs(l) {
    var e = l.alternate;
    e !== null && (l.alternate = null, Gs(e)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (e = l.stateNode, e !== null && Bi(e)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var _l = null, ae = !1;
  function at(l, e, t) {
    for (t = t.child; t !== null; )
      Ys(l, e, t), t = t.sibling;
  }
  function Ys(l, e, t) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(In, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Ll || Le(t, e), at(
          l,
          e,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Ll || Le(t, e);
        var n = _l, u = ae;
        Nt(t.type) && (_l = t.stateNode, ae = !1), at(
          l,
          e,
          t
        ), qu(t.stateNode), _l = n, ae = u;
        break;
      case 5:
        Ll || Le(t, e);
      case 6:
        if (n = _l, u = ae, _l = null, at(
          l,
          e,
          t
        ), _l = n, ae = u, _l !== null)
          if (ae)
            try {
              (_l.nodeType === 9 ? _l.body : _l.nodeName === "HTML" ? _l.ownerDocument.body : _l).removeChild(t.stateNode);
            } catch (a) {
              ml(
                t,
                e,
                a
              );
            }
          else
            try {
              _l.removeChild(t.stateNode);
            } catch (a) {
              ml(
                t,
                e,
                a
              );
            }
        break;
      case 18:
        _l !== null && (ae ? (l = _l, Ud(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          t.stateNode
        ), Wn(l)) : Ud(_l, t.stateNode));
        break;
      case 4:
        n = _l, u = ae, _l = t.stateNode.containerInfo, ae = !0, at(
          l,
          e,
          t
        ), _l = n, ae = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mt(2, t, e), Ll || Mt(4, t, e), at(
          l,
          e,
          t
        );
        break;
      case 1:
        Ll || (Le(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function" && ws(
          t,
          e,
          n
        )), at(
          l,
          e,
          t
        );
        break;
      case 21:
        at(
          l,
          e,
          t
        );
        break;
      case 22:
        Ll = (n = Ll) || t.memoizedState !== null, at(
          l,
          e,
          t
        ), Ll = n;
        break;
      default:
        at(
          l,
          e,
          t
        );
    }
  }
  function Ls(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Wn(l);
      } catch (t) {
        ml(e, e.return, t);
      }
    }
  }
  function Xs(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Wn(l);
      } catch (t) {
        ml(e, e.return, t);
      }
  }
  function n1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var e = l.stateNode;
        return e === null && (e = l.stateNode = new qs()), e;
      case 22:
        return l = l.stateNode, e = l._retryCache, e === null && (e = l._retryCache = new qs()), e;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Xa(l, e) {
    var t = n1(l);
    e.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var u = d1.bind(null, l, n);
        n.then(u, u);
      }
    });
  }
  function ie(l, e) {
    var t = e.deletions;
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var u = t[n], a = l, c = e, o = c;
        l: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Nt(o.type)) {
                _l = o.stateNode, ae = !1;
                break l;
              }
              break;
            case 5:
              _l = o.stateNode, ae = !1;
              break l;
            case 3:
            case 4:
              _l = o.stateNode.containerInfo, ae = !0;
              break l;
          }
          o = o.return;
        }
        if (_l === null) throw Error(r(160));
        Ys(a, c, u), _l = null, ae = !1, a = u.alternate, a !== null && (a.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Qs(e, l), e = e.sibling;
  }
  var Be = null;
  function Qs(l, e) {
    var t = l.alternate, n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, l), ce(l), n & 4 && (Mt(3, l, l.return), Mu(3, l), Mt(5, l, l.return));
        break;
      case 1:
        ie(e, l), ce(l), n & 512 && (Ll || t === null || Le(t, t.return)), n & 64 && ut && (l = l.updateQueue, l !== null && (n = l.callbacks, n !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
        break;
      case 26:
        var u = Be;
        if (ie(e, l), ce(l), n & 512 && (Ll || t === null || Le(t, t.return)), n & 4) {
          var a = t !== null ? t.memoizedState : null;
          if (n = l.memoizedState, t === null)
            if (n === null)
              if (l.stateNode === null) {
                l: {
                  n = l.type, t = l.memoizedProps, u = u.ownerDocument || u;
                  e: switch (n) {
                    case "title":
                      a = u.getElementsByTagName("title")[0], (!a || a[eu] || a[kl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(n), u.head.insertBefore(
                        a,
                        u.querySelector("head > title")
                      )), Il(a, n, t), a[kl] = l, Ql(a), n = a;
                      break l;
                    case "link":
                      var c = Qd(
                        "link",
                        "href",
                        u
                      ).get(n + (t.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (a = c[o], a.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && a.getAttribute("rel") === (t.rel == null ? null : t.rel) && a.getAttribute("title") === (t.title == null ? null : t.title) && a.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      a = u.createElement(n), Il(a, n, t), u.head.appendChild(a);
                      break;
                    case "meta":
                      if (c = Qd(
                        "meta",
                        "content",
                        u
                      ).get(n + (t.content || ""))) {
                        for (o = 0; o < c.length; o++)
                          if (a = c[o], a.getAttribute("content") === (t.content == null ? null : "" + t.content) && a.getAttribute("name") === (t.name == null ? null : t.name) && a.getAttribute("property") === (t.property == null ? null : t.property) && a.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && a.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      a = u.createElement(n), Il(a, n, t), u.head.appendChild(a);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  a[kl] = l, Ql(a), n = a;
                }
                l.stateNode = n;
              } else
                Zd(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Xd(
                u,
                n,
                l.memoizedProps
              );
          else
            a !== n ? (a === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : a.count--, n === null ? Zd(
              u,
              l.type,
              l.stateNode
            ) : Xd(
              u,
              n,
              l.memoizedProps
            )) : n === null && l.stateNode !== null && tf(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, l), ce(l), n & 512 && (Ll || t === null || Le(t, t.return)), t !== null && n & 4 && tf(
          l,
          l.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (ie(e, l), ce(l), n & 512 && (Ll || t === null || Le(t, t.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Sn(u, "");
          } catch (X) {
            ml(l, l.return, X);
          }
        }
        n & 4 && l.stateNode != null && (u = l.memoizedProps, tf(
          l,
          u,
          t !== null ? t.memoizedProps : u
        )), n & 1024 && (af = !0);
        break;
      case 6:
        if (ie(e, l), ce(l), n & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          n = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = n;
          } catch (X) {
            ml(l, l.return, X);
          }
        }
        break;
      case 3:
        if (ui = null, u = Be, Be = ti(e.containerInfo), ie(e, l), Be = u, ce(l), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wn(e.containerInfo);
          } catch (X) {
            ml(l, l.return, X);
          }
        af && (af = !1, Zs(l));
        break;
      case 4:
        n = Be, Be = ti(
          l.stateNode.containerInfo
        ), ie(e, l), ce(l), Be = n;
        break;
      case 12:
        ie(e, l), ce(l);
        break;
      case 31:
        ie(e, l), ce(l), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Xa(l, n)));
        break;
      case 13:
        ie(e, l), ce(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Za = se()), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Xa(l, n)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var d = t !== null && t.memoizedState !== null, b = ut, _ = Ll;
        if (ut = b || u, Ll = _ || d, ie(e, l), Ll = _, ut = b, ce(l), n & 8192)
          l: for (e = l.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (t === null || d || ut || Ll || un(l)), t = null, e = l; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                d = t = e;
                try {
                  if (a = d.stateNode, u)
                    c = a.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = d.stateNode;
                    var j = d.memoizedProps.style, T = j != null && j.hasOwnProperty("display") ? j.display : null;
                    o.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (X) {
                  ml(d, d.return, X);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (X) {
                  ml(d, d.return, X);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                d = e;
                try {
                  var C = d.stateNode;
                  u ? wd(C, !0) : wd(d.stateNode, !1);
                } catch (X) {
                  ml(d, d.return, X);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === l) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === l) break l;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === l) break l;
              t === e && (t = null), e = e.return;
            }
            t === e && (t = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = l.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, Xa(l, t))));
        break;
      case 19:
        ie(e, l), ce(l), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Xa(l, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ie(e, l), ce(l);
    }
  }
  function ce(l) {
    var e = l.flags;
    if (e & 2) {
      try {
        for (var t, n = l.return; n !== null; ) {
          if (Bs(n)) {
            t = n;
            break;
          }
          n = n.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode, a = nf(l);
            La(l, a, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Sn(c, ""), t.flags &= -33);
            var o = nf(l);
            La(l, o, c);
            break;
          case 3:
          case 4:
            var d = t.stateNode.containerInfo, b = nf(l);
            uf(
              l,
              b,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        ml(l, l.return, _);
      }
      l.flags &= -3;
    }
    e & 4096 && (l.flags &= -4097);
  }
  function Zs(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var e = l;
        Zs(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), l = l.sibling;
      }
  }
  function it(l, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        xs(l, e.alternate, e), e = e.sibling;
  }
  function un(l) {
    for (l = l.child; l !== null; ) {
      var e = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Mt(4, e, e.return), un(e);
          break;
        case 1:
          Le(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ws(
            e,
            e.return,
            t
          ), un(e);
          break;
        case 27:
          qu(e.stateNode);
        case 26:
        case 5:
          Le(e, e.return), un(e);
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
      l = l.sibling;
    }
  }
  function ct(l, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, u = l, a = e, c = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ct(
            u,
            a,
            t
          ), Mu(4, a);
          break;
        case 1:
          if (ct(
            u,
            a,
            t
          ), n = a, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (b) {
              ml(n, n.return, b);
            }
          if (n = a, u = n.updateQueue, u !== null) {
            var o = n.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  Tr(d[u], o);
            } catch (b) {
              ml(n, n.return, b);
            }
          }
          t && c & 64 && Us(a), _u(a, a.return);
          break;
        case 27:
          js(a);
        case 26:
        case 5:
          ct(
            u,
            a,
            t
          ), t && n === null && c & 4 && Ns(a), _u(a, a.return);
          break;
        case 12:
          ct(
            u,
            a,
            t
          );
          break;
        case 31:
          ct(
            u,
            a,
            t
          ), t && c & 4 && Ls(u, a);
          break;
        case 13:
          ct(
            u,
            a,
            t
          ), t && c & 4 && Xs(u, a);
          break;
        case 22:
          a.memoizedState === null && ct(
            u,
            a,
            t
          ), _u(a, a.return);
          break;
        case 30:
          break;
        default:
          ct(
            u,
            a,
            t
          );
      }
      e = e.sibling;
    }
  }
  function cf(l, e) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && yu(t));
  }
  function ff(l, e) {
    l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && yu(l));
  }
  function je(l, e, t, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vs(
          l,
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Vs(l, e, t, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        je(
          l,
          e,
          t,
          n
        ), u & 2048 && Mu(9, e);
        break;
      case 1:
        je(
          l,
          e,
          t,
          n
        );
        break;
      case 3:
        je(
          l,
          e,
          t,
          n
        ), u & 2048 && (l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && yu(l)));
        break;
      case 12:
        if (u & 2048) {
          je(
            l,
            e,
            t,
            n
          ), l = e.stateNode;
          try {
            var a = e.memoizedProps, c = a.id, o = a.onPostCommit;
            typeof o == "function" && o(
              c,
              e.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (d) {
            ml(e, e.return, d);
          }
        } else
          je(
            l,
            e,
            t,
            n
          );
        break;
      case 31:
        je(
          l,
          e,
          t,
          n
        );
        break;
      case 13:
        je(
          l,
          e,
          t,
          n
        );
        break;
      case 23:
        break;
      case 22:
        a = e.stateNode, c = e.alternate, e.memoizedState !== null ? a._visibility & 2 ? je(
          l,
          e,
          t,
          n
        ) : Du(l, e) : a._visibility & 2 ? je(
          l,
          e,
          t,
          n
        ) : (a._visibility |= 2, xn(
          l,
          e,
          t,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && cf(c, e);
        break;
      case 24:
        je(
          l,
          e,
          t,
          n
        ), u & 2048 && ff(e.alternate, e);
        break;
      default:
        je(
          l,
          e,
          t,
          n
        );
    }
  }
  function xn(l, e, t, n, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var a = l, c = e, o = t, d = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            a,
            c,
            o,
            d,
            u
          ), Mu(8, c);
          break;
        case 23:
          break;
        case 22:
          var _ = c.stateNode;
          c.memoizedState !== null ? _._visibility & 2 ? xn(
            a,
            c,
            o,
            d,
            u
          ) : Du(
            a,
            c
          ) : (_._visibility |= 2, xn(
            a,
            c,
            o,
            d,
            u
          )), u && b & 2048 && cf(
            c.alternate,
            c
          );
          break;
        case 24:
          xn(
            a,
            c,
            o,
            d,
            u
          ), u && b & 2048 && ff(c.alternate, c);
          break;
        default:
          xn(
            a,
            c,
            o,
            d,
            u
          );
      }
      e = e.sibling;
    }
  }
  function Du(l, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = l, n = e, u = n.flags;
        switch (n.tag) {
          case 22:
            Du(t, n), u & 2048 && cf(
              n.alternate,
              n
            );
            break;
          case 24:
            Du(t, n), u & 2048 && ff(n.alternate, n);
            break;
          default:
            Du(t, n);
        }
        e = e.sibling;
      }
  }
  var Hu = 8192;
  function Gn(l, e, t) {
    if (l.subtreeFlags & Hu)
      for (l = l.child; l !== null; )
        Ks(
          l,
          e,
          t
        ), l = l.sibling;
  }
  function Ks(l, e, t) {
    switch (l.tag) {
      case 26:
        Gn(
          l,
          e,
          t
        ), l.flags & Hu && l.memoizedState !== null && Q1(
          t,
          Be,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Gn(
          l,
          e,
          t
        );
        break;
      case 3:
      case 4:
        var n = Be;
        Be = ti(l.stateNode.containerInfo), Gn(
          l,
          e,
          t
        ), Be = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Hu, Hu = 16777216, Gn(
          l,
          e,
          t
        ), Hu = n) : Gn(
          l,
          e,
          t
        ));
        break;
      default:
        Gn(
          l,
          e,
          t
        );
    }
  }
  function Js(l) {
    var e = l.alternate;
    if (e !== null && (l = e.child, l !== null)) {
      e.child = null;
      do
        e = l.sibling, l.sibling = null, l = e;
      while (l !== null);
    }
  }
  function Ru(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          Zl = n, Ws(
            n,
            l
          );
        }
      Js(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ks(l), l = l.sibling;
  }
  function ks(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ru(l), l.flags & 2048 && Mt(9, l, l.return);
        break;
      case 3:
        Ru(l);
        break;
      case 12:
        Ru(l);
        break;
      case 22:
        var e = l.stateNode;
        l.memoizedState !== null && e._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (e._visibility &= -3, Qa(l)) : Ru(l);
        break;
      default:
        Ru(l);
    }
  }
  function Qa(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          Zl = n, Ws(
            n,
            l
          );
        }
      Js(l);
    }
    for (l = l.child; l !== null; ) {
      switch (e = l, e.tag) {
        case 0:
        case 11:
        case 15:
          Mt(8, e, e.return), Qa(e);
          break;
        case 22:
          t = e.stateNode, t._visibility & 2 && (t._visibility &= -3, Qa(e));
          break;
        default:
          Qa(e);
      }
      l = l.sibling;
    }
  }
  function Ws(l, e) {
    for (; Zl !== null; ) {
      var t = Zl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Mt(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var n = t.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          yu(t.memoizedState.cache);
      }
      if (n = t.child, n !== null) n.return = t, Zl = n;
      else
        l: for (t = l; Zl !== null; ) {
          n = Zl;
          var u = n.sibling, a = n.return;
          if (Gs(n), n === t) {
            Zl = null;
            break l;
          }
          if (u !== null) {
            u.return = a, Zl = u;
            break l;
          }
          Zl = a;
        }
    }
  }
  var u1 = {
    getCacheForType: function(l) {
      var e = $l(xl), t = e.data.get(l);
      return t === void 0 && (t = l(), e.data.set(l, t)), t;
    },
    cacheSignal: function() {
      return $l(xl).controller.signal;
    }
  }, a1 = typeof WeakMap == "function" ? WeakMap : Map, sl = 0, pl = null, el = null, ul = 0, yl = 0, Se = null, _t = !1, Yn = !1, of = !1, ft = 0, Ul = 0, Dt = 0, an = 0, rf = 0, be = 0, Ln = 0, Uu = null, fe = null, sf = !1, Za = 0, $s = 0, Va = 1 / 0, Ka = null, Ht = null, Xl = 0, Rt = null, Xn = null, ot = 0, df = 0, hf = null, Fs = null, wu = 0, yf = null;
  function pe() {
    return (sl & 2) !== 0 && ul !== 0 ? ul & -ul : M.T !== null ? pf() : ho();
  }
  function Is() {
    if (be === 0)
      if ((ul & 536870912) === 0 || fl) {
        var l = la;
        la <<= 1, (la & 3932160) === 0 && (la = 262144), be = l;
      } else be = 536870912;
    return l = ge.current, l !== null && (l.flags |= 32), be;
  }
  function oe(l, e, t) {
    (l === pl && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null) && (Qn(l, 0), Ut(
      l,
      ul,
      be,
      !1
    )), lu(l, t), ((sl & 2) === 0 || l !== pl) && (l === pl && ((sl & 2) === 0 && (an |= t), Ul === 4 && Ut(
      l,
      ul,
      be,
      !1
    )), Xe(l));
  }
  function Ps(l, e, t) {
    if ((sl & 6) !== 0) throw Error(r(327));
    var n = !t && (e & 127) === 0 && (e & l.expiredLanes) === 0 || Pn(l, e), u = n ? f1(l, e) : gf(l, e, !0), a = n;
    do {
      if (u === 0) {
        Yn && !n && Ut(l, e, 0, !1);
        break;
      } else {
        if (t = l.current.alternate, a && !i1(t)) {
          u = gf(l, e, !1), a = !1;
          continue;
        }
        if (u === 2) {
          if (a = e, l.errorRecoveryDisabledLanes & a)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            l: {
              var o = l;
              u = Uu;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (Qn(o, c).flags |= 256), c = gf(
                o,
                c,
                !1
              ), c !== 2) {
                if (of && !d) {
                  o.errorRecoveryDisabledLanes |= a, an |= a, u = 4;
                  break l;
                }
                a = fe, fe = u, a !== null && (fe === null ? fe = a : fe.push.apply(
                  fe,
                  a
                ));
              }
              u = c;
            }
            if (a = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Qn(l, 0), Ut(l, e, 0, !0);
          break;
        }
        l: {
          switch (n = l, a = u, a) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ut(
                n,
                e,
                be,
                !_t
              );
              break l;
            case 2:
              fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (u = Za + 300 - se(), 10 < u)) {
            if (Ut(
              n,
              e,
              be,
              !_t
            ), ta(n, 0, !0) !== 0) break l;
            ot = e, n.timeoutHandle = Hd(
              ld.bind(
                null,
                n,
                t,
                fe,
                Ka,
                sf,
                e,
                be,
                an,
                Ln,
                _t,
                a,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          ld(
            n,
            t,
            fe,
            Ka,
            sf,
            e,
            be,
            an,
            Ln,
            _t,
            a,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Xe(l);
  }
  function ld(l, e, t, n, u, a, c, o, d, b, _, j, T, C) {
    if (l.timeoutHandle = -1, j = e.subtreeFlags, j & 8192 || (j & 16785408) === 16785408) {
      j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ke
      }, Ks(
        e,
        a,
        j
      );
      var X = (a & 62914560) === a ? Za - se() : (a & 4194048) === a ? $s - se() : 0;
      if (X = Z1(
        j,
        X
      ), X !== null) {
        ot = a, l.cancelPendingCommit = X(
          fd.bind(
            null,
            l,
            e,
            a,
            t,
            n,
            u,
            c,
            o,
            d,
            _,
            j,
            null,
            T,
            C
          )
        ), Ut(l, a, c, !b);
        return;
      }
    }
    fd(
      l,
      e,
      a,
      t,
      n,
      u,
      c,
      o,
      d
    );
  }
  function i1(l) {
    for (var e = l; ; ) {
      var t = e.tag;
      if ((t === 0 || t === 11 || t === 15) && e.flags & 16384 && (t = e.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var n = 0; n < t.length; n++) {
          var u = t[n], a = u.getSnapshot;
          u = u.value;
          try {
            if (!ye(a(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = e.child, e.subtreeFlags & 16384 && t !== null)
        t.return = e, e = t;
      else {
        if (e === l) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ut(l, e, t, n) {
    e &= ~rf, e &= ~an, l.suspendedLanes |= e, l.pingedLanes &= ~e, n && (l.warmLanes |= e), n = l.expirationTimes;
    for (var u = e; 0 < u; ) {
      var a = 31 - he(u), c = 1 << a;
      n[a] = -1, u &= ~c;
    }
    t !== 0 && oo(l, t, e);
  }
  function Ja() {
    return (sl & 6) === 0 ? (Nu(0), !1) : !0;
  }
  function mf() {
    if (el !== null) {
      if (yl === 0)
        var l = el.return;
      else
        l = el, Ie = $t = null, Hc(l), wn = null, gu = 0, l = el;
      for (; l !== null; )
        Rs(l.alternate, l), l = l.return;
      el = null;
    }
  }
  function Qn(l, e) {
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, O1(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), ot = 0, mf(), pl = l, el = t = $e(l.current, null), ul = e, yl = 0, Se = null, _t = !1, Yn = Pn(l, e), of = !1, Ln = be = rf = an = Dt = Ul = 0, fe = Uu = null, sf = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = l.entangledLanes;
    if (n !== 0)
      for (l = l.entanglements, n &= e; 0 < n; ) {
        var u = 31 - he(n), a = 1 << u;
        e |= l[u], n &= ~a;
      }
    return ft = e, ya(), t;
  }
  function ed(l, e) {
    F = null, M.H = zu, e === Un || e === Aa ? (e = vr(), yl = 3) : e === Sc ? (e = vr(), yl = 4) : yl = e === Kc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Se = e, el === null && (Ul = 1, ja(
      l,
      Oe(e, l.current)
    ));
  }
  function td() {
    var l = ge.current;
    return l === null ? !0 : (ul & 4194048) === ul ? He === null : (ul & 62914560) === ul || (ul & 536870912) !== 0 ? l === He : !1;
  }
  function nd() {
    var l = M.H;
    return M.H = zu, l === null ? zu : l;
  }
  function ud() {
    var l = M.A;
    return M.A = u1, l;
  }
  function ka() {
    Ul = 4, _t || (ul & 4194048) !== ul && ge.current !== null || (Yn = !0), (Dt & 134217727) === 0 && (an & 134217727) === 0 || pl === null || Ut(
      pl,
      ul,
      be,
      !1
    );
  }
  function gf(l, e, t) {
    var n = sl;
    sl |= 2;
    var u = nd(), a = ud();
    (pl !== l || ul !== e) && (Ka = null, Qn(l, e)), e = !1;
    var c = Ul;
    l: do
      try {
        if (yl !== 0 && el !== null) {
          var o = el, d = Se;
          switch (yl) {
            case 8:
              mf(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var b = yl;
              if (yl = 0, Se = null, Zn(l, o, d, b), t && Yn) {
                c = 0;
                break l;
              }
              break;
            default:
              b = yl, yl = 0, Se = null, Zn(l, o, d, b);
          }
        }
        c1(), c = Ul;
        break;
      } catch (_) {
        ed(l, _);
      }
    while (!0);
    return e && l.shellSuspendCounter++, Ie = $t = null, sl = n, M.H = u, M.A = a, el === null && (pl = null, ul = 0, ya()), c;
  }
  function c1() {
    for (; el !== null; ) ad(el);
  }
  function f1(l, e) {
    var t = sl;
    sl |= 2;
    var n = nd(), u = ud();
    pl !== l || ul !== e ? (Ka = null, Va = se() + 500, Qn(l, e)) : Yn = Pn(
      l,
      e
    );
    l: do
      try {
        if (yl !== 0 && el !== null) {
          e = el;
          var a = Se;
          e: switch (yl) {
            case 1:
              yl = 0, Se = null, Zn(l, e, a, 1);
              break;
            case 2:
            case 9:
              if (mr(a)) {
                yl = 0, Se = null, id(e);
                break;
              }
              e = function() {
                yl !== 2 && yl !== 9 || pl !== l || (yl = 7), Xe(l);
              }, a.then(e, e);
              break l;
            case 3:
              yl = 7;
              break l;
            case 4:
              yl = 5;
              break l;
            case 7:
              mr(a) ? (yl = 0, Se = null, id(e)) : (yl = 0, Se = null, Zn(l, e, a, 7));
              break;
            case 5:
              var c = null;
              switch (el.tag) {
                case 26:
                  c = el.memoizedState;
                case 5:
                case 27:
                  var o = el;
                  if (c ? Vd(c) : o.stateNode.complete) {
                    yl = 0, Se = null;
                    var d = o.sibling;
                    if (d !== null) el = d;
                    else {
                      var b = o.return;
                      b !== null ? (el = b, Wa(b)) : el = null;
                    }
                    break e;
                  }
              }
              yl = 0, Se = null, Zn(l, e, a, 5);
              break;
            case 6:
              yl = 0, Se = null, Zn(l, e, a, 6);
              break;
            case 8:
              mf(), Ul = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        o1();
        break;
      } catch (_) {
        ed(l, _);
      }
    while (!0);
    return Ie = $t = null, M.H = n, M.A = u, sl = t, el !== null ? 0 : (pl = null, ul = 0, ya(), Ul);
  }
  function o1() {
    for (; el !== null && !U0(); )
      ad(el);
  }
  function ad(l) {
    var e = Ds(l.alternate, l, ft);
    l.memoizedProps = l.pendingProps, e === null ? Wa(l) : el = e;
  }
  function id(l) {
    var e = l, t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Es(
          t,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ul
        );
        break;
      case 11:
        e = Es(
          t,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ul
        );
        break;
      case 5:
        Hc(e);
      default:
        Rs(t, e), e = el = ur(e, ft), e = Ds(t, e, ft);
    }
    l.memoizedProps = l.pendingProps, e === null ? Wa(l) : el = e;
  }
  function Zn(l, e, t, n) {
    Ie = $t = null, Hc(e), wn = null, gu = 0;
    var u = e.return;
    try {
      if (Fh(
        l,
        u,
        e,
        t,
        ul
      )) {
        Ul = 1, ja(
          l,
          Oe(t, l.current)
        ), el = null;
        return;
      }
    } catch (a) {
      if (u !== null) throw el = u, a;
      Ul = 1, ja(
        l,
        Oe(t, l.current)
      ), el = null;
      return;
    }
    e.flags & 32768 ? (fl || n === 1 ? l = !0 : Yn || (ul & 536870912) !== 0 ? l = !1 : (_t = l = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = ge.current, n !== null && n.tag === 13 && (n.flags |= 16384))), cd(e, l)) : Wa(e);
  }
  function Wa(l) {
    var e = l;
    do {
      if ((e.flags & 32768) !== 0) {
        cd(
          e,
          _t
        );
        return;
      }
      l = e.return;
      var t = l1(
        e.alternate,
        e,
        ft
      );
      if (t !== null) {
        el = t;
        return;
      }
      if (e = e.sibling, e !== null) {
        el = e;
        return;
      }
      el = e = l;
    } while (e !== null);
    Ul === 0 && (Ul = 5);
  }
  function cd(l, e) {
    do {
      var t = e1(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, el = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !e && (l = l.sibling, l !== null)) {
        el = l;
        return;
      }
      el = l = t;
    } while (l !== null);
    Ul = 6, el = null;
  }
  function fd(l, e, t, n, u, a, c, o, d) {
    l.cancelPendingCommit = null;
    do
      $a();
    while (Xl !== 0);
    if ((sl & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === l.current) throw Error(r(177));
      if (a = e.lanes | e.childLanes, a |= nc, X0(
        l,
        t,
        a,
        c,
        o,
        d
      ), l === pl && (el = pl = null, ul = 0), Xn = e, Rt = l, ot = t, df = a, hf = u, Fs = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, h1(Iu, function() {
        return hd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null, u = D.p, D.p = 2, c = sl, sl |= 4;
        try {
          t1(l, e, t);
        } finally {
          sl = c, D.p = u, M.T = n;
        }
      }
      Xl = 1, od(), rd(), sd();
    }
  }
  function od() {
    if (Xl === 1) {
      Xl = 0;
      var l = Rt, e = Xn, t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        t = M.T, M.T = null;
        var n = D.p;
        D.p = 2;
        var u = sl;
        sl |= 4;
        try {
          Qs(e, l);
          var a = _f, c = Wo(l.containerInfo), o = a.focusedElem, d = a.selectionRange;
          if (c !== o && o && o.ownerDocument && ko(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && Ii(o)) {
              var b = d.start, _ = d.end;
              if (_ === void 0 && (_ = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  _,
                  o.value.length
                );
              else {
                var j = o.ownerDocument || document, T = j && j.defaultView || window;
                if (T.getSelection) {
                  var C = T.getSelection(), X = o.textContent.length, K = Math.min(d.start, X), Sl = d.end === void 0 ? K : Math.min(d.end, X);
                  !C.extend && K > Sl && (c = Sl, Sl = K, K = c);
                  var g = Jo(
                    o,
                    K
                  ), y = Jo(
                    o,
                    Sl
                  );
                  if (g && y && (C.rangeCount !== 1 || C.anchorNode !== g.node || C.anchorOffset !== g.offset || C.focusNode !== y.node || C.focusOffset !== y.offset)) {
                    var S = j.createRange();
                    S.setStart(g.node, g.offset), C.removeAllRanges(), K > Sl ? (C.addRange(S), C.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), C.addRange(S));
                  }
                }
              }
            }
            for (j = [], C = o; C = C.parentNode; )
              C.nodeType === 1 && j.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < j.length; o++) {
              var w = j[o];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          fi = !!Mf, _f = Mf = null;
        } finally {
          sl = u, D.p = n, M.T = t;
        }
      }
      l.current = e, Xl = 2;
    }
  }
  function rd() {
    if (Xl === 2) {
      Xl = 0;
      var l = Rt, e = Xn, t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        t = M.T, M.T = null;
        var n = D.p;
        D.p = 2;
        var u = sl;
        sl |= 4;
        try {
          xs(l, e.alternate, e);
        } finally {
          sl = u, D.p = n, M.T = t;
        }
      }
      Xl = 3;
    }
  }
  function sd() {
    if (Xl === 4 || Xl === 3) {
      Xl = 0, w0();
      var l = Rt, e = Xn, t = ot, n = Fs;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0, Xn = Rt = null, dd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Ht = null), wi(t), e = e.stateNode, de && typeof de.onCommitFiberRoot == "function")
        try {
          de.onCommitFiberRoot(
            In,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = M.T, u = D.p, D.p = 2, M.T = null;
        try {
          for (var a = l.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            a(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          M.T = e, D.p = u;
        }
      }
      (ot & 3) !== 0 && $a(), Xe(l), u = l.pendingLanes, (t & 261930) !== 0 && (u & 42) !== 0 ? l === yf ? wu++ : (wu = 0, yf = l) : wu = 0, Nu(0);
    }
  }
  function dd(l, e) {
    (l.pooledCacheLanes &= e) === 0 && (e = l.pooledCache, e != null && (l.pooledCache = null, yu(e)));
  }
  function $a() {
    return od(), rd(), sd(), hd();
  }
  function hd() {
    if (Xl !== 5) return !1;
    var l = Rt, e = df;
    df = 0;
    var t = wi(ot), n = M.T, u = D.p;
    try {
      D.p = 32 > t ? 32 : t, M.T = null, t = hf, hf = null;
      var a = Rt, c = ot;
      if (Xl = 0, Xn = Rt = null, ot = 0, (sl & 6) !== 0) throw Error(r(331));
      var o = sl;
      if (sl |= 4, ks(a.current), Vs(
        a,
        a.current,
        c,
        t
      ), sl = o, Nu(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
        try {
          de.onPostCommitFiberRoot(In, a);
        } catch {
        }
      return !0;
    } finally {
      D.p = u, M.T = n, dd(l, e);
    }
  }
  function yd(l, e, t) {
    e = Oe(t, e), e = Vc(l.stateNode, e, 2), l = zt(l, e, 2), l !== null && (lu(l, 2), Xe(l));
  }
  function ml(l, e, t) {
    if (l.tag === 3)
      yd(l, l, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          yd(
            e,
            l,
            t
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ht === null || !Ht.has(n))) {
            l = Oe(t, l), t = ms(2), n = zt(e, t, 2), n !== null && (gs(
              t,
              n,
              e,
              l
            ), lu(n, 2), Xe(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function vf(l, e, t) {
    var n = l.pingCache;
    if (n === null) {
      n = l.pingCache = new a1();
      var u = /* @__PURE__ */ new Set();
      n.set(e, u);
    } else
      u = n.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(e, u));
    u.has(t) || (of = !0, u.add(t), l = r1.bind(null, l, e, t), e.then(l, l));
  }
  function r1(l, e, t) {
    var n = l.pingCache;
    n !== null && n.delete(e), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, pl === l && (ul & t) === t && (Ul === 4 || Ul === 3 && (ul & 62914560) === ul && 300 > se() - Za ? (sl & 2) === 0 && Qn(l, 0) : rf |= t, Ln === ul && (Ln = 0)), Xe(l);
  }
  function md(l, e) {
    e === 0 && (e = fo()), l = Jt(l, e), l !== null && (lu(l, e), Xe(l));
  }
  function s1(l) {
    var e = l.memoizedState, t = 0;
    e !== null && (t = e.retryLane), md(l, t);
  }
  function d1(l, e) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var n = l.stateNode, u = l.memoizedState;
        u !== null && (t = u.retryLane);
        break;
      case 19:
        n = l.stateNode;
        break;
      case 22:
        n = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(e), md(l, t);
  }
  function h1(l, e) {
    return Di(l, e);
  }
  var Fa = null, Vn = null, Sf = !1, Ia = !1, bf = !1, wt = 0;
  function Xe(l) {
    l !== Vn && l.next === null && (Vn === null ? Fa = Vn = l : Vn = Vn.next = l), Ia = !0, Sf || (Sf = !0, m1());
  }
  function Nu(l, e) {
    if (!bf && Ia) {
      bf = !0;
      do
        for (var t = !1, n = Fa; n !== null; ) {
          if (l !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var a = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              a = (1 << 31 - he(42 | l) + 1) - 1, a &= u & ~(c & ~o), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
            }
            a !== 0 && (t = !0, bd(n, a));
          } else
            a = ul, a = ta(
              n,
              n === pl ? a : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (a & 3) === 0 || Pn(n, a) || (t = !0, bd(n, a));
          n = n.next;
        }
      while (t);
      bf = !1;
    }
  }
  function y1() {
    gd();
  }
  function gd() {
    Ia = Sf = !1;
    var l = 0;
    wt !== 0 && C1() && (l = wt);
    for (var e = se(), t = null, n = Fa; n !== null; ) {
      var u = n.next, a = vd(n, e);
      a === 0 ? (n.next = null, t === null ? Fa = u : t.next = u, u === null && (Vn = t)) : (t = n, (l !== 0 || (a & 3) !== 0) && (Ia = !0)), n = u;
    }
    Xl !== 0 && Xl !== 5 || Nu(l), wt !== 0 && (wt = 0);
  }
  function vd(l, e) {
    for (var t = l.suspendedLanes, n = l.pingedLanes, u = l.expirationTimes, a = l.pendingLanes & -62914561; 0 < a; ) {
      var c = 31 - he(a), o = 1 << c, d = u[c];
      d === -1 ? ((o & t) === 0 || (o & n) !== 0) && (u[c] = L0(o, e)) : d <= e && (l.expiredLanes |= o), a &= ~o;
    }
    if (e = pl, t = ul, t = ta(
      l,
      l === e ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), n = l.callbackNode, t === 0 || l === e && (yl === 2 || yl === 9) || l.cancelPendingCommit !== null)
      return n !== null && n !== null && Hi(n), l.callbackNode = null, l.callbackPriority = 0;
    if ((t & 3) === 0 || Pn(l, t)) {
      if (e = t & -t, e === l.callbackPriority) return e;
      switch (n !== null && Hi(n), wi(t)) {
        case 2:
        case 8:
          t = io;
          break;
        case 32:
          t = Iu;
          break;
        case 268435456:
          t = co;
          break;
        default:
          t = Iu;
      }
      return n = Sd.bind(null, l), t = Di(t, n), l.callbackPriority = e, l.callbackNode = t, e;
    }
    return n !== null && n !== null && Hi(n), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Sd(l, e) {
    if (Xl !== 0 && Xl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var t = l.callbackNode;
    if ($a() && l.callbackNode !== t)
      return null;
    var n = ul;
    return n = ta(
      l,
      l === pl ? n : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), n === 0 ? null : (Ps(l, n, e), vd(l, se()), l.callbackNode != null && l.callbackNode === t ? Sd.bind(null, l) : null);
  }
  function bd(l, e) {
    if ($a()) return null;
    Ps(l, e, !0);
  }
  function m1() {
    M1(function() {
      (sl & 6) !== 0 ? Di(
        ao,
        y1
      ) : gd();
    });
  }
  function pf() {
    if (wt === 0) {
      var l = Hn;
      l === 0 && (l = Pu, Pu <<= 1, (Pu & 261888) === 0 && (Pu = 256)), wt = l;
    }
    return wt;
  }
  function pd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ia("" + l);
  }
  function Td(l, e) {
    var t = e.ownerDocument.createElement("input");
    return t.name = e.name, t.value = e.value, l.id && t.setAttribute("form", l.id), e.parentNode.insertBefore(t, e), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function g1(l, e, t, n, u) {
    if (e === "submit" && t && t.stateNode === u) {
      var a = pd(
        (u[ne] || null).action
      ), c = n.submitter;
      c && (e = (e = c[ne] || null) ? pd(e.formAction) : c.getAttribute("formAction"), e !== null && (a = e, c = null));
      var o = new ra(
        "action",
        "action",
        null,
        n,
        u
      );
      l.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (wt !== 0) {
                  var d = c ? Td(u, c) : new FormData(u);
                  Gc(
                    t,
                    {
                      pending: !0,
                      data: d,
                      method: u.method,
                      action: a
                    },
                    null,
                    d
                  );
                }
              } else
                typeof a == "function" && (o.preventDefault(), d = c ? Td(u, c) : new FormData(u), Gc(
                  t,
                  {
                    pending: !0,
                    data: d,
                    method: u.method,
                    action: a
                  },
                  a,
                  d
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Tf = 0; Tf < tc.length; Tf++) {
    var Af = tc[Tf], v1 = Af.toLowerCase(), S1 = Af[0].toUpperCase() + Af.slice(1);
    Ne(
      v1,
      "on" + S1
    );
  }
  Ne(Io, "onAnimationEnd"), Ne(Po, "onAnimationIteration"), Ne(lr, "onAnimationStart"), Ne("dblclick", "onDoubleClick"), Ne("focusin", "onFocus"), Ne("focusout", "onBlur"), Ne(Nh, "onTransitionRun"), Ne(Bh, "onTransitionStart"), Ne(jh, "onTransitionCancel"), Ne(er, "onTransitionEnd"), gn("onMouseEnter", ["mouseout", "mouseover"]), gn("onMouseLeave", ["mouseout", "mouseover"]), gn("onPointerEnter", ["pointerout", "pointerover"]), gn("onPointerLeave", ["pointerout", "pointerover"]), Qt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Qt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Qt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Qt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Qt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Qt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bu)
  );
  function Ad(l, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var n = l[t], u = n.event;
      n = n.listeners;
      l: {
        var a = void 0;
        if (e)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], d = o.instance, b = o.currentTarget;
            if (o = o.listener, d !== a && u.isPropagationStopped())
              break l;
            a = o, u.currentTarget = b;
            try {
              a(u);
            } catch (_) {
              ha(_);
            }
            u.currentTarget = null, a = d;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], d = o.instance, b = o.currentTarget, o = o.listener, d !== a && u.isPropagationStopped())
              break l;
            a = o, u.currentTarget = b;
            try {
              a(u);
            } catch (_) {
              ha(_);
            }
            u.currentTarget = null, a = d;
          }
      }
    }
  }
  function tl(l, e) {
    var t = e[Ni];
    t === void 0 && (t = e[Ni] = /* @__PURE__ */ new Set());
    var n = l + "__bubble";
    t.has(n) || (Ed(e, l, 2, !1), t.add(n));
  }
  function Ef(l, e, t) {
    var n = 0;
    e && (n |= 4), Ed(
      t,
      l,
      n,
      e
    );
  }
  var Pa = "_reactListening" + Math.random().toString(36).slice(2);
  function zf(l) {
    if (!l[Pa]) {
      l[Pa] = !0, go.forEach(function(t) {
        t !== "selectionchange" && (b1.has(t) || Ef(t, !1, l), Ef(t, !0, l));
      });
      var e = l.nodeType === 9 ? l : l.ownerDocument;
      e === null || e[Pa] || (e[Pa] = !0, Ef("selectionchange", !1, e));
    }
  }
  function Ed(l, e, t, n) {
    switch (Id(e)) {
      case 2:
        var u = J1;
        break;
      case 8:
        u = k1;
        break;
      default:
        u = Gf;
    }
    t = u.bind(
      null,
      e,
      t,
      l
    ), u = void 0, !Qi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), n ? u !== void 0 ? l.addEventListener(e, t, {
      capture: !0,
      passive: u
    }) : l.addEventListener(e, t, !0) : u !== void 0 ? l.addEventListener(e, t, {
      passive: u
    }) : l.addEventListener(e, t, !1);
  }
  function Cf(l, e, t, n, u) {
    var a = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      l: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var o = n.stateNode.containerInfo;
          if (o === u) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var d = c.tag;
              if ((d === 3 || d === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = hn(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = a = c;
              continue l;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    _o(function() {
      var b = a, _ = Li(t), j = [];
      l: {
        var T = tr.get(l);
        if (T !== void 0) {
          var C = ra, X = l;
          switch (l) {
            case "keypress":
              if (fa(t) === 0) break l;
            case "keydown":
            case "keyup":
              C = dh;
              break;
            case "focusin":
              X = "focus", C = Ji;
              break;
            case "focusout":
              X = "blur", C = Ji;
              break;
            case "beforeblur":
            case "afterblur":
              C = Ji;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = lh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = mh;
              break;
            case Io:
            case Po:
            case lr:
              C = nh;
              break;
            case er:
              C = vh;
              break;
            case "scroll":
            case "scrollend":
              C = I0;
              break;
            case "wheel":
              C = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = ah;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = wo;
              break;
            case "toggle":
            case "beforetoggle":
              C = Th;
          }
          var K = (e & 4) !== 0, Sl = !K && (l === "scroll" || l === "scrollend"), g = K ? T !== null ? T + "Capture" : null : T;
          K = [];
          for (var y = b, S; y !== null; ) {
            var w = y;
            if (S = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || S === null || g === null || (w = nu(y, g), w != null && K.push(
              ju(y, w, S)
            )), Sl) break;
            y = y.return;
          }
          0 < K.length && (T = new C(
            T,
            X,
            null,
            t,
            _
          ), j.push({ event: T, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        l: {
          if (T = l === "mouseover" || l === "pointerover", C = l === "mouseout" || l === "pointerout", T && t !== Yi && (X = t.relatedTarget || t.fromElement) && (hn(X) || X[dn]))
            break l;
          if ((C || T) && (T = _.window === _ ? _ : (T = _.ownerDocument) ? T.defaultView || T.parentWindow : window, C ? (X = t.relatedTarget || t.toElement, C = b, X = X ? hn(X) : null, X !== null && (Sl = O(X), K = X.tag, X !== Sl || K !== 5 && K !== 27 && K !== 6) && (X = null)) : (C = null, X = b), C !== X)) {
            if (K = Ro, w = "onMouseLeave", g = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (K = wo, w = "onPointerLeave", g = "onPointerEnter", y = "pointer"), Sl = C == null ? T : tu(C), S = X == null ? T : tu(X), T = new K(
              w,
              y + "leave",
              C,
              t,
              _
            ), T.target = Sl, T.relatedTarget = S, w = null, hn(_) === b && (K = new K(
              g,
              y + "enter",
              X,
              t,
              _
            ), K.target = S, K.relatedTarget = Sl, w = K), Sl = w, C && X)
              e: {
                for (K = p1, g = C, y = X, S = 0, w = g; w; w = K(w))
                  S++;
                w = 0;
                for (var V = y; V; V = K(V))
                  w++;
                for (; 0 < S - w; )
                  g = K(g), S--;
                for (; 0 < w - S; )
                  y = K(y), w--;
                for (; S--; ) {
                  if (g === y || y !== null && g === y.alternate) {
                    K = g;
                    break e;
                  }
                  g = K(g), y = K(y);
                }
                K = null;
              }
            else K = null;
            C !== null && zd(
              j,
              T,
              C,
              K,
              !1
            ), X !== null && Sl !== null && zd(
              j,
              Sl,
              X,
              K,
              !0
            );
          }
        }
        l: {
          if (T = b ? tu(b) : window, C = T.nodeName && T.nodeName.toLowerCase(), C === "select" || C === "input" && T.type === "file")
            var ol = Lo;
          else if (Go(T))
            if (Xo)
              ol = Rh;
            else {
              ol = Dh;
              var Z = _h;
            }
          else
            C = T.nodeName, !C || C.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? b && Gi(b.elementType) && (ol = Lo) : ol = Hh;
          if (ol && (ol = ol(l, b))) {
            Yo(
              j,
              ol,
              t,
              _
            );
            break l;
          }
          Z && Z(l, T, b), l === "focusout" && b && T.type === "number" && b.memoizedProps.value != null && xi(T, "number", T.value);
        }
        switch (Z = b ? tu(b) : window, l) {
          case "focusin":
            (Go(Z) || Z.contentEditable === "true") && (An = Z, Pi = b, su = null);
            break;
          case "focusout":
            su = Pi = An = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, $o(j, t, _);
            break;
          case "selectionchange":
            if (wh) break;
          case "keydown":
          case "keyup":
            $o(j, t, _);
        }
        var I;
        if (Wi)
          l: {
            switch (l) {
              case "compositionstart":
                var al = "onCompositionStart";
                break l;
              case "compositionend":
                al = "onCompositionEnd";
                break l;
              case "compositionupdate":
                al = "onCompositionUpdate";
                break l;
            }
            al = void 0;
          }
        else
          Tn ? qo(l, t) && (al = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (al = "onCompositionStart");
        al && (No && t.locale !== "ko" && (Tn || al !== "onCompositionStart" ? al === "onCompositionEnd" && Tn && (I = Do()) : (vt = _, Zi = "value" in vt ? vt.value : vt.textContent, Tn = !0)), Z = li(b, al), 0 < Z.length && (al = new Uo(
          al,
          l,
          null,
          t,
          _
        ), j.push({ event: al, listeners: Z }), I ? al.data = I : (I = xo(t), I !== null && (al.data = I)))), (I = Eh ? zh(l, t) : Ch(l, t)) && (al = li(b, "onBeforeInput"), 0 < al.length && (Z = new Uo(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          _
        ), j.push({
          event: Z,
          listeners: al
        }), Z.data = I)), g1(
          j,
          l,
          b,
          t,
          _
        );
      }
      Ad(j, e);
    });
  }
  function ju(l, e, t) {
    return {
      instance: l,
      listener: e,
      currentTarget: t
    };
  }
  function li(l, e) {
    for (var t = e + "Capture", n = []; l !== null; ) {
      var u = l, a = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || a === null || (u = nu(l, t), u != null && n.unshift(
        ju(l, u, a)
      ), u = nu(l, e), u != null && n.push(
        ju(l, u, a)
      )), l.tag === 3) return n;
      l = l.return;
    }
    return [];
  }
  function p1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zd(l, e, t, n, u) {
    for (var a = e._reactName, c = []; t !== null && t !== n; ) {
      var o = t, d = o.alternate, b = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (d = b, u ? (b = nu(t, a), b != null && c.unshift(
        ju(t, b, d)
      )) : u || (b = nu(t, a), b != null && c.push(
        ju(t, b, d)
      ))), t = t.return;
    }
    c.length !== 0 && l.push({ event: e, listeners: c });
  }
  var T1 = /\r\n?/g, A1 = /\u0000|\uFFFD/g;
  function Cd(l) {
    return (typeof l == "string" ? l : "" + l).replace(T1, `
`).replace(A1, "");
  }
  function Od(l, e) {
    return e = Cd(e), Cd(l) === e;
  }
  function vl(l, e, t, n, u, a) {
    switch (t) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Sn(l, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Sn(l, "" + n);
        break;
      case "className":
        ua(l, "class", n);
        break;
      case "tabIndex":
        ua(l, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ua(l, t, n);
        break;
      case "style":
        Oo(l, n, a);
        break;
      case "data":
        if (e !== "object") {
          ua(l, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          l.removeAttribute(t);
          break;
        }
        n = ia("" + n), l.setAttribute(t, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof a == "function" && (t === "formAction" ? (e !== "input" && vl(l, e, "name", u.name, u, null), vl(
            l,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), vl(
            l,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), vl(
            l,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (vl(l, e, "encType", u.encType, u, null), vl(l, e, "method", u.method, u, null), vl(l, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          l.removeAttribute(t);
          break;
        }
        n = ia("" + n), l.setAttribute(t, n);
        break;
      case "onClick":
        n != null && (l.onclick = ke);
        break;
      case "onScroll":
        n != null && tl("scroll", l);
        break;
      case "onScrollEnd":
        n != null && tl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (t = n.__html, t != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        l.muted = n && typeof n != "function" && typeof n != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        t = ia("" + n), l.setAttributeNS(
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
        n != null && typeof n != "function" && typeof n != "symbol" ? l.setAttribute(t, "" + n) : l.removeAttribute(t);
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
        n && typeof n != "function" && typeof n != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        n === !0 ? l.setAttribute(t, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? l.setAttribute(t, n) : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? l.setAttribute(t, n) : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? l.removeAttribute(t) : l.setAttribute(t, n);
        break;
      case "popover":
        tl("beforetoggle", l), tl("toggle", l), na(l, "popover", n);
        break;
      case "xlinkActuate":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Je(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Je(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Je(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Je(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        na(l, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = $0.get(t) || t, na(l, t, n));
    }
  }
  function Of(l, e, t, n, u, a) {
    switch (t) {
      case "style":
        Oo(l, n, a);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (t = n.__html, t != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Sn(l, n) : (typeof n == "number" || typeof n == "bigint") && Sn(l, "" + n);
        break;
      case "onScroll":
        n != null && tl("scroll", l);
        break;
      case "onScrollEnd":
        n != null && tl("scrollend", l);
        break;
      case "onClick":
        n != null && (l.onclick = ke);
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
        if (!vo.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (u = t.endsWith("Capture"), e = t.slice(2, u ? t.length - 7 : void 0), a = l[ne] || null, a = a != null ? a[t] : null, typeof a == "function" && l.removeEventListener(e, a, u), typeof n == "function")) {
              typeof a != "function" && a !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(e, n, u);
              break l;
            }
            t in l ? l[t] = n : n === !0 ? l.setAttribute(t, "") : na(l, t, n);
          }
    }
  }
  function Il(l, e, t) {
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
        tl("error", l), tl("load", l);
        var n = !1, u = !1, a;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var c = t[a];
            if (c != null)
              switch (a) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  vl(l, e, a, c, t, null);
              }
          }
        u && vl(l, e, "srcSet", t.srcSet, t, null), n && vl(l, e, "src", t.src, t, null);
        return;
      case "input":
        tl("invalid", l);
        var o = a = c = u = null, d = null, b = null;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var _ = t[n];
            if (_ != null)
              switch (n) {
                case "name":
                  u = _;
                  break;
                case "type":
                  c = _;
                  break;
                case "checked":
                  d = _;
                  break;
                case "defaultChecked":
                  b = _;
                  break;
                case "value":
                  a = _;
                  break;
                case "defaultValue":
                  o = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(r(137, e));
                  break;
                default:
                  vl(l, e, n, _, t, null);
              }
          }
        Ao(
          l,
          a,
          o,
          d,
          b,
          c,
          u,
          !1
        );
        return;
      case "select":
        tl("invalid", l), n = c = a = null;
        for (u in t)
          if (t.hasOwnProperty(u) && (o = t[u], o != null))
            switch (u) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                n = o;
              default:
                vl(l, e, u, o, t, null);
            }
        e = a, t = c, l.multiple = !!n, e != null ? vn(l, !!n, e, !1) : t != null && vn(l, !!n, t, !0);
        return;
      case "textarea":
        tl("invalid", l), a = u = n = null;
        for (c in t)
          if (t.hasOwnProperty(c) && (o = t[c], o != null))
            switch (c) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                u = o;
                break;
              case "children":
                a = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                vl(l, e, c, o, t, null);
            }
        zo(l, n, u, a);
        return;
      case "option":
        for (d in t)
          t.hasOwnProperty(d) && (n = t[d], n != null) && (d === "selected" ? l.selected = n && typeof n != "function" && typeof n != "symbol" : vl(l, e, d, n, t, null));
        return;
      case "dialog":
        tl("beforetoggle", l), tl("toggle", l), tl("cancel", l), tl("close", l);
        break;
      case "iframe":
      case "object":
        tl("load", l);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Bu.length; n++)
          tl(Bu[n], l);
        break;
      case "image":
        tl("error", l), tl("load", l);
        break;
      case "details":
        tl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        tl("error", l), tl("load", l);
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
                throw Error(r(137, e));
              default:
                vl(l, e, b, n, t, null);
            }
        return;
      default:
        if (Gi(e)) {
          for (_ in t)
            t.hasOwnProperty(_) && (n = t[_], n !== void 0 && Of(
              l,
              e,
              _,
              n,
              t,
              void 0
            ));
          return;
        }
    }
    for (o in t)
      t.hasOwnProperty(o) && (n = t[o], n != null && vl(l, e, o, n, t, null));
  }
  function E1(l, e, t, n) {
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
        var u = null, a = null, c = null, o = null, d = null, b = null, _ = null;
        for (C in t) {
          var j = t[C];
          if (t.hasOwnProperty(C) && j != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = j;
              default:
                n.hasOwnProperty(C) || vl(l, e, C, null, n, j);
            }
        }
        for (var T in n) {
          var C = n[T];
          if (j = t[T], n.hasOwnProperty(T) && (C != null || j != null))
            switch (T) {
              case "type":
                a = C;
                break;
              case "name":
                u = C;
                break;
              case "checked":
                b = C;
                break;
              case "defaultChecked":
                _ = C;
                break;
              case "value":
                c = C;
                break;
              case "defaultValue":
                o = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, e));
                break;
              default:
                C !== j && vl(
                  l,
                  e,
                  T,
                  C,
                  n,
                  j
                );
            }
        }
        qi(
          l,
          c,
          o,
          d,
          b,
          _,
          a,
          u
        );
        return;
      case "select":
        C = c = o = T = null;
        for (a in t)
          if (d = t[a], t.hasOwnProperty(a) && d != null)
            switch (a) {
              case "value":
                break;
              case "multiple":
                C = d;
              default:
                n.hasOwnProperty(a) || vl(
                  l,
                  e,
                  a,
                  null,
                  n,
                  d
                );
            }
        for (u in n)
          if (a = n[u], d = t[u], n.hasOwnProperty(u) && (a != null || d != null))
            switch (u) {
              case "value":
                T = a;
                break;
              case "defaultValue":
                o = a;
                break;
              case "multiple":
                c = a;
              default:
                a !== d && vl(
                  l,
                  e,
                  u,
                  a,
                  n,
                  d
                );
            }
        e = o, t = c, n = C, T != null ? vn(l, !!t, T, !1) : !!n != !!t && (e != null ? vn(l, !!t, e, !0) : vn(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        C = T = null;
        for (o in t)
          if (u = t[o], t.hasOwnProperty(o) && u != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                vl(l, e, o, null, n, u);
            }
        for (c in n)
          if (u = n[c], a = t[c], n.hasOwnProperty(c) && (u != null || a != null))
            switch (c) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                C = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== a && vl(l, e, c, u, n, a);
            }
        Eo(l, T, C);
        return;
      case "option":
        for (var X in t)
          T = t[X], t.hasOwnProperty(X) && T != null && !n.hasOwnProperty(X) && (X === "selected" ? l.selected = !1 : vl(
            l,
            e,
            X,
            null,
            n,
            T
          ));
        for (d in n)
          T = n[d], C = t[d], n.hasOwnProperty(d) && T !== C && (T != null || C != null) && (d === "selected" ? l.selected = T && typeof T != "function" && typeof T != "symbol" : vl(
            l,
            e,
            d,
            T,
            n,
            C
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
        for (var K in t)
          T = t[K], t.hasOwnProperty(K) && T != null && !n.hasOwnProperty(K) && vl(l, e, K, null, n, T);
        for (b in n)
          if (T = n[b], C = t[b], n.hasOwnProperty(b) && T !== C && (T != null || C != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(r(137, e));
                break;
              default:
                vl(
                  l,
                  e,
                  b,
                  T,
                  n,
                  C
                );
            }
        return;
      default:
        if (Gi(e)) {
          for (var Sl in t)
            T = t[Sl], t.hasOwnProperty(Sl) && T !== void 0 && !n.hasOwnProperty(Sl) && Of(
              l,
              e,
              Sl,
              void 0,
              n,
              T
            );
          for (_ in n)
            T = n[_], C = t[_], !n.hasOwnProperty(_) || T === C || T === void 0 && C === void 0 || Of(
              l,
              e,
              _,
              T,
              n,
              C
            );
          return;
        }
    }
    for (var g in t)
      T = t[g], t.hasOwnProperty(g) && T != null && !n.hasOwnProperty(g) && vl(l, e, g, null, n, T);
    for (j in n)
      T = n[j], C = t[j], !n.hasOwnProperty(j) || T === C || T == null && C == null || vl(l, e, j, T, n, C);
  }
  function Md(l) {
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
  function z1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, e = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var u = t[n], a = u.transferSize, c = u.initiatorType, o = u.duration;
        if (a && o && Md(c)) {
          for (c = 0, o = u.responseEnd, n += 1; n < t.length; n++) {
            var d = t[n], b = d.startTime;
            if (b > o) break;
            var _ = d.transferSize, j = d.initiatorType;
            _ && Md(j) && (d = d.responseEnd, c += _ * (d < o ? 1 : (o - b) / (d - b)));
          }
          if (--n, e += 8 * (a + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return e / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Mf = null, _f = null;
  function ei(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function _d(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dd(l, e) {
    if (l === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && e === "foreignObject" ? 0 : l;
  }
  function Df(l, e) {
    return l === "textarea" || l === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Hf = null;
  function C1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Hf ? !1 : (Hf = l, !0) : (Hf = null, !1);
  }
  var Hd = typeof setTimeout == "function" ? setTimeout : void 0, O1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, M1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(l) {
    return Rd.resolve(null).then(l).catch(_1);
  } : Hd;
  function _1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Nt(l) {
    return l === "head";
  }
  function Ud(l, e) {
    var t = e, n = 0;
    do {
      var u = t.nextSibling;
      if (l.removeChild(t), u && u.nodeType === 8)
        if (t = u.data, t === "/$" || t === "/&") {
          if (n === 0) {
            l.removeChild(u), Wn(e);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          n++;
        else if (t === "html")
          qu(l.ownerDocument.documentElement);
        else if (t === "head") {
          t = l.ownerDocument.head, qu(t);
          for (var a = t.firstChild; a; ) {
            var c = a.nextSibling, o = a.nodeName;
            a[eu] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && a.rel.toLowerCase() === "stylesheet" || t.removeChild(a), a = c;
          }
        } else
          t === "body" && qu(l.ownerDocument.body);
      t = u;
    } while (t);
    Wn(e);
  }
  function wd(l, e) {
    var t = l;
    l = 0;
    do {
      var n = t.nextSibling;
      if (t.nodeType === 1 ? e ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (e ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), n && n.nodeType === 8)
        if (t = n.data, t === "/$") {
          if (l === 0) break;
          l--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || l++;
      t = n;
    } while (t);
  }
  function Rf(l) {
    var e = l.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (e = e.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rf(t), Bi(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function D1(l, e, t, n) {
    for (; l.nodeType === 1; ) {
      var u = t;
      if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (n) {
        if (!l[eu])
          switch (e) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (a = l.getAttribute("rel"), a === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (a !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (a = l.getAttribute("src"), (a !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && a && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (e === "input" && l.type === "hidden") {
        var a = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === a)
          return l;
      } else return l;
      if (l = Re(l.nextSibling), l === null) break;
    }
    return null;
  }
  function H1(l, e, t) {
    if (e === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Re(l.nextSibling), l === null)) return null;
    return l;
  }
  function Nd(l, e) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Re(l.nextSibling), l === null)) return null;
    return l;
  }
  function Uf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function R1(l, e) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = e;
    else if (l.data !== "$?" || t.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), t.removeEventListener("DOMContentLoaded", n);
      };
      t.addEventListener("DOMContentLoaded", n), l._reactRetry = n;
    }
  }
  function Re(l) {
    for (; l != null; l = l.nextSibling) {
      var e = l.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = l.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return l;
  }
  var Nf = null;
  function Bd(l) {
    l = l.nextSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (e === 0)
            return Re(l.nextSibling);
          e--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || e++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function jd(l) {
    l = l.previousSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (e === 0) return l;
          e--;
        } else t !== "/$" && t !== "/&" || e++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function qd(l, e, t) {
    switch (e = ei(t), l) {
      case "html":
        if (l = e.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = e.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = e.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function qu(l) {
    for (var e = l.attributes; e.length; )
      l.removeAttributeNode(e[0]);
    Bi(l);
  }
  var Ue = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Set();
  function ti(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var rt = D.d;
  D.d = {
    f: U1,
    r: w1,
    D: N1,
    C: B1,
    L: j1,
    m: q1,
    X: G1,
    S: x1,
    M: Y1
  };
  function U1() {
    var l = rt.f(), e = Ja();
    return l || e;
  }
  function w1(l) {
    var e = yn(l);
    e !== null && e.tag === 5 && e.type === "form" ? es(e) : rt.r(l);
  }
  var Kn = typeof document > "u" ? null : document;
  function Gd(l, e, t) {
    var n = Kn;
    if (n && typeof e == "string" && e) {
      var u = ze(e);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof t == "string" && (u += '[crossorigin="' + t + '"]'), xd.has(u) || (xd.add(u), l = { rel: l, crossOrigin: t, href: e }, n.querySelector(u) === null && (e = n.createElement("link"), Il(e, "link", l), Ql(e), n.head.appendChild(e)));
    }
  }
  function N1(l) {
    rt.D(l), Gd("dns-prefetch", l, null);
  }
  function B1(l, e) {
    rt.C(l, e), Gd("preconnect", l, e);
  }
  function j1(l, e, t) {
    rt.L(l, e, t);
    var n = Kn;
    if (n && l && e) {
      var u = 'link[rel="preload"][as="' + ze(e) + '"]';
      e === "image" && t && t.imageSrcSet ? (u += '[imagesrcset="' + ze(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (u += '[imagesizes="' + ze(
        t.imageSizes
      ) + '"]')) : u += '[href="' + ze(l) + '"]';
      var a = u;
      switch (e) {
        case "style":
          a = Jn(l);
          break;
        case "script":
          a = kn(l);
      }
      Ue.has(a) || (l = U(
        {
          rel: "preload",
          href: e === "image" && t && t.imageSrcSet ? void 0 : l,
          as: e
        },
        t
      ), Ue.set(a, l), n.querySelector(u) !== null || e === "style" && n.querySelector(xu(a)) || e === "script" && n.querySelector(Gu(a)) || (e = n.createElement("link"), Il(e, "link", l), Ql(e), n.head.appendChild(e)));
    }
  }
  function q1(l, e) {
    rt.m(l, e);
    var t = Kn;
    if (t && l) {
      var n = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + ze(n) + '"][href="' + ze(l) + '"]', a = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = kn(l);
      }
      if (!Ue.has(a) && (l = U({ rel: "modulepreload", href: l }, e), Ue.set(a, l), t.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Gu(a)))
              return;
        }
        n = t.createElement("link"), Il(n, "link", l), Ql(n), t.head.appendChild(n);
      }
    }
  }
  function x1(l, e, t) {
    rt.S(l, e, t);
    var n = Kn;
    if (n && l) {
      var u = mn(n).hoistableStyles, a = Jn(l);
      e = e || "default";
      var c = u.get(a);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          xu(a)
        ))
          o.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": e },
            t
          ), (t = Ue.get(a)) && Bf(l, t);
          var d = c = n.createElement("link");
          Ql(d), Il(d, "link", l), d._p = new Promise(function(b, _) {
            d.onload = b, d.onerror = _;
          }), d.addEventListener("load", function() {
            o.loading |= 1;
          }), d.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, ni(c, e, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: o
        }, u.set(a, c);
      }
    }
  }
  function G1(l, e) {
    rt.X(l, e);
    var t = Kn;
    if (t && l) {
      var n = mn(t).hoistableScripts, u = kn(l), a = n.get(u);
      a || (a = t.querySelector(Gu(u)), a || (l = U({ src: l, async: !0 }, e), (e = Ue.get(u)) && jf(l, e), a = t.createElement("script"), Ql(a), Il(a, "link", l), t.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function Y1(l, e) {
    rt.M(l, e);
    var t = Kn;
    if (t && l) {
      var n = mn(t).hoistableScripts, u = kn(l), a = n.get(u);
      a || (a = t.querySelector(Gu(u)), a || (l = U({ src: l, async: !0, type: "module" }, e), (e = Ue.get(u)) && jf(l, e), a = t.createElement("script"), Ql(a), Il(a, "link", l), t.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function Yd(l, e, t, n) {
    var u = (u = A.current) ? ti(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (e = Jn(t.href), t = mn(
          u
        ).hoistableStyles, n = t.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = Jn(t.href);
          var a = mn(
            u
          ).hoistableStyles, c = a.get(l);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, a.set(l, c), (a = u.querySelector(
            xu(l)
          )) && !a._p && (c.instance = a, c.state.loading = 5), Ue.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Ue.set(l, t), a || L1(
            u,
            l,
            t,
            c.state
          ))), e && n === null)
            throw Error(r(528, ""));
          return c;
        }
        if (e && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = t.async, t = t.src, typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = kn(t), t = mn(
          u
        ).hoistableScripts, n = t.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Jn(l) {
    return 'href="' + ze(l) + '"';
  }
  function xu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ld(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function L1(l, e, t, n) {
    l.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = l.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), Il(e, "link", t), Ql(e), l.head.appendChild(e));
  }
  function kn(l) {
    return '[src="' + ze(l) + '"]';
  }
  function Gu(l) {
    return "script[async]" + l;
  }
  function Xd(l, e, t) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = l.querySelector(
            'style[data-href~="' + ze(t.href) + '"]'
          );
          if (n)
            return e.instance = n, Ql(n), n;
          var u = U({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (l.ownerDocument || l).createElement(
            "style"
          ), Ql(n), Il(n, "style", u), ni(n, t.precedence, l), e.instance = n;
        case "stylesheet":
          u = Jn(t.href);
          var a = l.querySelector(
            xu(u)
          );
          if (a)
            return e.state.loading |= 4, e.instance = a, Ql(a), a;
          n = Ld(t), (u = Ue.get(u)) && Bf(n, u), a = (l.ownerDocument || l).createElement("link"), Ql(a);
          var c = a;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), Il(a, "link", n), e.state.loading |= 4, ni(a, t.precedence, l), e.instance = a;
        case "script":
          return a = kn(t.src), (u = l.querySelector(
            Gu(a)
          )) ? (e.instance = u, Ql(u), u) : (n = t, (u = Ue.get(a)) && (n = U({}, t), jf(n, u)), l = l.ownerDocument || l, u = l.createElement("script"), Ql(u), Il(u, "link", n), l.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, ni(n, t.precedence, l));
    return e.instance;
  }
  function ni(l, e, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = n.length ? n[n.length - 1] : null, a = u, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) a = o;
      else if (a !== u) break;
    }
    a ? a.parentNode.insertBefore(l, a.nextSibling) : (e = t.nodeType === 9 ? t.head : t, e.insertBefore(l, e.firstChild));
  }
  function Bf(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.title == null && (l.title = e.title);
  }
  function jf(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.integrity == null && (l.integrity = e.integrity);
  }
  var ui = null;
  function Qd(l, e, t) {
    if (ui === null) {
      var n = /* @__PURE__ */ new Map(), u = ui = /* @__PURE__ */ new Map();
      u.set(t, n);
    } else
      u = ui, n = u.get(t), n || (n = /* @__PURE__ */ new Map(), u.set(t, n));
    if (n.has(l)) return n;
    for (n.set(l, null), t = t.getElementsByTagName(l), u = 0; u < t.length; u++) {
      var a = t[u];
      if (!(a[eu] || a[kl] || l === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = a.getAttribute(e) || "";
        c = l + c;
        var o = n.get(c);
        o ? o.push(a) : n.set(c, [a]);
      }
    }
    return n;
  }
  function Zd(l, e, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      e === "title" ? l.querySelector("head > title") : null
    );
  }
  function X1(l, e, t) {
    if (t === 1 || e.itemProp != null) return !1;
    switch (l) {
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
        return e.rel === "stylesheet" ? (l = e.disabled, typeof e.precedence == "string" && l == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Vd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Q1(l, e, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = Jn(n.href), a = e.querySelector(
          xu(u)
        );
        if (a) {
          e = a._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = ai.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = a, Ql(a);
          return;
        }
        a = e.ownerDocument || e, n = Ld(n), (u = Ue.get(u)) && Bf(n, u), a = a.createElement("link"), Ql(a);
        var c = a;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), Il(a, "link", n), t.instance = a;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = ai.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  var qf = 0;
  function Z1(l, e) {
    return l.stylesheets && l.count === 0 && ci(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (l.stylesheets && ci(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4 + e);
      0 < l.imgBytes && qf === 0 && (qf = 62500 * z1());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && ci(l, l.stylesheets), l.unsuspend)) {
            var a = l.unsuspend;
            l.unsuspend = null, a();
          }
        },
        (l.imgBytes > qf ? 50 : 800) + e
      );
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(n), clearTimeout(u);
      };
    } : null;
  }
  function ai() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ci(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var ii = null;
  function ci(l, e) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, ii = /* @__PURE__ */ new Map(), e.forEach(V1, l), ii = null, ai.call(l));
  }
  function V1(l, e) {
    if (!(e.state.loading & 4)) {
      var t = ii.get(l);
      if (t) var n = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), ii.set(l, t);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), a = 0; a < u.length; a++) {
          var c = u[a];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), n = c);
        }
        n && t.set(null, n);
      }
      u = e.instance, c = u.getAttribute("data-precedence"), a = t.get(c) || n, a === n && t.set(null, u), t.set(c, u), this.count++, n = ai.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), a ? a.parentNode.insertBefore(u, a.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), e.state.loading |= 4;
    }
  }
  var Yu = {
    $$typeof: bl,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function K1(l, e, t, n, u, a, c, o, d) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ri(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ri(0), this.hiddenUpdates = Ri(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = a, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kd(l, e, t, n, u, a, c, o, d, b, _, j) {
    return l = new K1(
      l,
      e,
      t,
      c,
      d,
      b,
      _,
      j,
      o
    ), e = 1, a === !0 && (e |= 24), a = me(3, null, null, e), l.current = a, a.stateNode = l, e = mc(), e.refCount++, l.pooledCache = e, e.refCount++, a.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: e
    }, bc(a), l;
  }
  function Jd(l) {
    return l ? (l = Cn, l) : Cn;
  }
  function kd(l, e, t, n, u, a) {
    u = Jd(u), n.context === null ? n.context = u : n.pendingContext = u, n = Et(e), n.payload = { element: t }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = zt(l, n, e), t !== null && (oe(t, l, e), Su(t, l, e));
  }
  function Wd(l, e) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function xf(l, e) {
    Wd(l, e), (l = l.alternate) && Wd(l, e);
  }
  function $d(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = Jt(l, 67108864);
      e !== null && oe(e, l, 67108864), xf(l, 67108864);
    }
  }
  function Fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = pe();
      e = Ui(e);
      var t = Jt(l, e);
      t !== null && oe(t, l, e), xf(l, e);
    }
  }
  var fi = !0;
  function J1(l, e, t, n) {
    var u = M.T;
    M.T = null;
    var a = D.p;
    try {
      D.p = 2, Gf(l, e, t, n);
    } finally {
      D.p = a, M.T = u;
    }
  }
  function k1(l, e, t, n) {
    var u = M.T;
    M.T = null;
    var a = D.p;
    try {
      D.p = 8, Gf(l, e, t, n);
    } finally {
      D.p = a, M.T = u;
    }
  }
  function Gf(l, e, t, n) {
    if (fi) {
      var u = Yf(n);
      if (u === null)
        Cf(
          l,
          e,
          n,
          oi,
          t
        ), Pd(l, n);
      else if ($1(
        u,
        l,
        e,
        t,
        n
      ))
        n.stopPropagation();
      else if (Pd(l, n), e & 4 && -1 < W1.indexOf(l)) {
        for (; u !== null; ) {
          var a = yn(u);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                  var c = Xt(a.pendingLanes);
                  if (c !== 0) {
                    var o = a;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - he(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    Xe(a), (sl & 6) === 0 && (Va = se() + 500, Nu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Jt(a, 2), o !== null && oe(o, a, 2), Ja(), xf(a, 2);
            }
          if (a = Yf(n), a === null && Cf(
            l,
            e,
            n,
            oi,
            t
          ), a === u) break;
          u = a;
        }
        u !== null && n.stopPropagation();
      } else
        Cf(
          l,
          e,
          n,
          null,
          t
        );
    }
  }
  function Yf(l) {
    return l = Li(l), Lf(l);
  }
  var oi = null;
  function Lf(l) {
    if (oi = null, l = hn(l), l !== null) {
      var e = O(l);
      if (e === null) l = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (l = z(e), l !== null) return l;
          l = null;
        } else if (t === 31) {
          if (l = L(e), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          l = null;
        } else e !== l && (l = null);
      }
    }
    return oi = l, null;
  }
  function Id(l) {
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
        switch (N0()) {
          case ao:
            return 2;
          case io:
            return 8;
          case Iu:
          case B0:
            return 32;
          case co:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xf = !1, Bt = null, jt = null, qt = null, Lu = /* @__PURE__ */ new Map(), Xu = /* @__PURE__ */ new Map(), xt = [], W1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Pd(l, e) {
    switch (l) {
      case "focusin":
      case "focusout":
        Bt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Lu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xu.delete(e.pointerId);
    }
  }
  function Qu(l, e, t, n, u, a) {
    return l === null || l.nativeEvent !== a ? (l = {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [u]
    }, e !== null && (e = yn(e), e !== null && $d(e)), l) : (l.eventSystemFlags |= n, e = l.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), l);
  }
  function $1(l, e, t, n, u) {
    switch (e) {
      case "focusin":
        return Bt = Qu(
          Bt,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "dragenter":
        return jt = Qu(
          jt,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "mouseover":
        return qt = Qu(
          qt,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "pointerover":
        var a = u.pointerId;
        return Lu.set(
          a,
          Qu(
            Lu.get(a) || null,
            l,
            e,
            t,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return a = u.pointerId, Xu.set(
          a,
          Qu(
            Xu.get(a) || null,
            l,
            e,
            t,
            n,
            u
          )
        ), !0;
    }
    return !1;
  }
  function l0(l) {
    var e = hn(l.target);
    if (e !== null) {
      var t = O(e);
      if (t !== null) {
        if (e = t.tag, e === 13) {
          if (e = z(t), e !== null) {
            l.blockedOn = e, yo(l.priority, function() {
              Fd(t);
            });
            return;
          }
        } else if (e === 31) {
          if (e = L(t), e !== null) {
            l.blockedOn = e, yo(l.priority, function() {
              Fd(t);
            });
            return;
          }
        } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ri(l) {
    if (l.blockedOn !== null) return !1;
    for (var e = l.targetContainers; 0 < e.length; ) {
      var t = Yf(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        Yi = n, t.target.dispatchEvent(n), Yi = null;
      } else
        return e = yn(t), e !== null && $d(e), l.blockedOn = t, !1;
      e.shift();
    }
    return !0;
  }
  function e0(l, e, t) {
    ri(l) && t.delete(e);
  }
  function F1() {
    Xf = !1, Bt !== null && ri(Bt) && (Bt = null), jt !== null && ri(jt) && (jt = null), qt !== null && ri(qt) && (qt = null), Lu.forEach(e0), Xu.forEach(e0);
  }
  function si(l, e) {
    l.blockedOn === e && (l.blockedOn = null, Xf || (Xf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      F1
    )));
  }
  var di = null;
  function t0(l) {
    di !== l && (di = l, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        di === l && (di = null);
        for (var e = 0; e < l.length; e += 3) {
          var t = l[e], n = l[e + 1], u = l[e + 2];
          if (typeof n != "function") {
            if (Lf(n || t) === null)
              continue;
            break;
          }
          var a = yn(t);
          a !== null && (l.splice(e, 3), e -= 3, Gc(
            a,
            {
              pending: !0,
              data: u,
              method: t.method,
              action: n
            },
            n,
            u
          ));
        }
      }
    ));
  }
  function Wn(l) {
    function e(d) {
      return si(d, l);
    }
    Bt !== null && si(Bt, l), jt !== null && si(jt, l), qt !== null && si(qt, l), Lu.forEach(e), Xu.forEach(e);
    for (var t = 0; t < xt.length; t++) {
      var n = xt[t];
      n.blockedOn === l && (n.blockedOn = null);
    }
    for (; 0 < xt.length && (t = xt[0], t.blockedOn === null); )
      l0(t), t.blockedOn === null && xt.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var u = t[n], a = t[n + 1], c = u[ne] || null;
        if (typeof a == "function")
          c || t0(t);
        else if (c) {
          var o = null;
          if (a && a.hasAttribute("formAction")) {
            if (u = a, c = a[ne] || null)
              o = c.formAction;
            else if (Lf(u) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? t[n + 1] = o : (t.splice(n, 3), n -= 3), t0(t);
        }
      }
  }
  function n0() {
    function l(a) {
      a.canIntercept && a.info === "react-transition" && a.intercept({
        handler: function() {
          return new Promise(function(c) {
            return u = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), n || setTimeout(t, 20);
    }
    function t() {
      if (!n && !navigation.transition) {
        var a = navigation.currentEntry;
        a && a.url != null && navigation.navigate(a.url, {
          state: a.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(t, 100), function() {
        n = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function Qf(l) {
    this._internalRoot = l;
  }
  hi.prototype.render = Qf.prototype.render = function(l) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var t = e.current, n = pe();
    kd(t, n, l, e, null, null);
  }, hi.prototype.unmount = Qf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var e = l.containerInfo;
      kd(l.current, 2, null, l, null, null), Ja(), e[dn] = null;
    }
  };
  function hi(l) {
    this._internalRoot = l;
  }
  hi.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var e = ho();
      l = { blockedOn: null, target: l, priority: e };
      for (var t = 0; t < xt.length && e !== 0 && e < xt[t].priority; t++) ;
      xt.splice(t, 0, l), t === 0 && l0(l);
    }
  };
  var u0 = s.version;
  if (u0 !== "19.2.4")
    throw Error(
      r(
        527,
        u0,
        "19.2.4"
      )
    );
  D.findDOMNode = function(l) {
    var e = l._reactInternals;
    if (e === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = E(e), l = l !== null ? p(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var I1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yi.isDisabled && yi.supportsFiber)
      try {
        In = yi.inject(
          I1
        ), de = yi;
      } catch {
      }
  }
  return Vu.createRoot = function(l, e) {
    if (!f(l)) throw Error(r(299));
    var t = !1, n = "", u = ss, a = ds, c = hs;
    return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (a = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Kd(
      l,
      1,
      !1,
      null,
      null,
      t,
      n,
      null,
      u,
      a,
      c,
      n0
    ), l[dn] = e.current, zf(l), new Qf(e);
  }, Vu.hydrateRoot = function(l, e, t) {
    if (!f(l)) throw Error(r(299));
    var n = !1, u = "", a = ss, c = ds, o = hs, d = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.formState !== void 0 && (d = t.formState)), e = Kd(
      l,
      1,
      !0,
      e,
      t ?? null,
      n,
      u,
      d,
      a,
      c,
      o,
      n0
    ), e.context = Jd(null), t = e.current, n = pe(), n = Ui(n), u = Et(n), u.callback = null, zt(t, u, n), t = n, e.current.lanes = t, lu(e, t), Xe(e), l[dn] = e.current, zf(l), new hi(e);
  }, Vu.version = "19.2.4", Vu;
}
var y0;
function fy() {
  if (y0) return Vf.exports;
  y0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Vf.exports = cy(), Vf.exports;
}
var oy = fy(), qe = lo();
const Bl = 960, dt = 1240, O0 = "clawd_ui_word_solitaire_best", pi = 5, Fn = [
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
], ry = [
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
], m0 = ["Neon", "Hidden", "Silver", "Golden", "Velvet", "Shadow", "Signal", "Lantern", "Cipher", "Winding", "Midnight", "Crimson"], g0 = ["Crossroads", "Archive", "Promenade", "Relay", "Mix", "Circuit", "Carnival", "Station", "Harbor", "Mosaic", "Vault", "Parade"], v0 = [
  "A generated deal from the wider category vault.",
  "Fresh clue mixes from the expanding category pool.",
  "New associations every round, with a denser reserve behind them.",
  "A remixed board pulled from the larger rotating category set."
], S0 = /* @__PURE__ */ new Map();
function sy(i) {
  return Array.from(new Map(i.map((s) => [s.id, s])).values());
}
const dy = sy([...Fn.flatMap((i) => i.categories), ...ry]);
function hy(i, s) {
  const h = [4, 4, 4, 4, 4], r = s === 8 ? 5 : 4, f = uo([0, 1, 2, 3, 4], 49734321 + i * 97);
  for (let O = 0; O < r; O += 1) h[f[O % f.length]] += 1;
  return h;
}
function yy(i, s) {
  const h = i * 7, r = h - s.reduce((f, O) => f + O, 0);
  return h + r + 8;
}
function my(i) {
  const s = S0.get(i);
  if (s) return s;
  let h = 1831565813 + i * 977;
  const r = i % 3 === 0 ? 8 : 7, f = uo(dy, h).slice(0, r), O = hy(i, r), z = yy(r, O);
  let L;
  [h, L] = Fu(h);
  const H = m0[Math.floor(L * m0.length)];
  [h, L] = Fu(h);
  const E = g0[Math.floor(L * g0.length)];
  [h, L] = Fu(h);
  const p = v0[Math.floor(L * v0.length)], U = {
    id: `generated-${i + 1}`,
    name: `Deal ${i + 1}: ${H} ${E}`,
    moveBudget: z,
    categories: f,
    columnHeights: O,
    tagline: p
  };
  return S0.set(i, U), U;
}
function Ze(i) {
  return i < Fn.length ? Fn[i] : my(i);
}
function gy(i) {
  const s = i * 1664525 + 1013904223 >>> 0;
  return s === 0 ? 1 : s;
}
function Fu(i) {
  const s = gy(i);
  return [s, s / 4294967295];
}
function vy() {
  if (typeof window > "u") return 0;
  const i = window.localStorage.getItem(O0), s = i == null ? 0 : Number.parseInt(i, 10);
  return Number.isFinite(s) ? Math.max(0, s) : 0;
}
function Sy(i) {
  typeof window < "u" && window.localStorage.setItem(O0, String(i));
}
function Ai(i) {
  return i.map((s) => s.map((h) => ({ ...h })));
}
function Ei(i) {
  return Object.fromEntries(Object.entries(i).map(([s, h]) => [s, h.map((r) => ({ ...r }))]));
}
function b0(i) {
  return i.map((s) => ({ ...s, card: { ...s.card } }));
}
function p0(i) {
  return i.map((s) => ({ ...s }));
}
function T0(i) {
  return i.map((s) => ({ ...s }));
}
function zi(i) {
  return [...i];
}
function Ci(i) {
  return [...i];
}
function Qe(i) {
  return i ? i.kind === "waste" ? "waste" : i.kind === "clue" ? "clue" : `column-${i.index}` : "none";
}
function Hl(i) {
  return i[i.length - 1] ?? null;
}
function by(i) {
  return { ...i };
}
function Oi(i) {
  return [...i];
}
function Lt(i, s) {
  return s ? i.categories.find((h) => h.id === s) ?? null : null;
}
function Ti(i, s) {
  return i.foundationOrder.findIndex((h) => h === s);
}
function M0(i, s) {
  return s.categories.filter((h) => i.foundations[h.id].length === h.words.length).length;
}
function py(i, s) {
  const h = i.wordIcons?.[s], r = i.iconOnlyWords?.includes(s) ? "iconOnly" : h ? "iconWord" : "word";
  return { id: `${i.id}-${s}`, label: s, categoryId: i.id, color: i.color, role: "word", faceIcon: h, faceStyle: r };
}
function Ty(i) {
  const s = i.clueStyle === "iconOnly" ? "iconOnly" : i.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${i.id}-clue`, label: i.clueTitle, categoryId: i.id, color: i.color, role: "clue", faceIcon: i.clueIcon, faceStyle: s };
}
function _i(i, s) {
  return Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, i.columns[s].length));
}
function _0(i, s) {
  return i.columns[s].slice(_i(i, s));
}
function fn(i) {
  return i[0] ?? null;
}
function Yt(i, s) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const z = Hl(i.waste);
    return z ? [z] : [];
  }
  const h = _0(i, s.index);
  if (!h.length) return [];
  const r = h[h.length - 1];
  if (r.role === "clue") return [r];
  const f = r.categoryId;
  let O = h.length - 1;
  for (; O - 1 >= 0 && h[O - 1].role === "word" && h[O - 1].categoryId === f; ) O -= 1;
  return O - 1 >= 0 && h[O - 1].role === "clue" && h[O - 1].categoryId === f && (O -= 1), h.slice(O);
}
function D0(i, s) {
  const h = i.columns[s];
  if (!h.length) {
    i.hiddenCounts[s] = 0;
    return;
  }
  i.hiddenCounts[s] = Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, h.length - 1));
}
function Ay(i, s) {
  D0(i, s), i.columns[s].length && (i.hiddenCounts[s] ?? 0) >= i.columns[s].length && (i.hiddenCounts[s] = i.columns[s].length - 1);
}
function Ey(i) {
  return {
    columns: Ai(i.columns),
    hiddenCounts: Oi(i.hiddenCounts),
    reserve: [...i.reserve],
    waste: [...i.waste],
    foundations: Ei(i.foundations),
    foundationOrder: zi(i.foundationOrder),
    clueDeck: Ci(i.clueDeck),
    activeClueCategoryId: i.activeClueCategoryId,
    selectedSource: i.selectedSource ? { ...i.selectedSource } : null,
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    message: i.message,
    mode: i.mode,
    boosters: by(i.boosters)
  };
}
function $n(i) {
  i.history = [Ey(i), ...i.history].slice(0, 24);
}
function zy(i) {
  const s = i.history[0];
  return !s || i.boosters.undo <= 0 ? !1 : (i.columns = Ai(s.columns), i.hiddenCounts = Oi(s.hiddenCounts), i.reserve = [...s.reserve], i.waste = [...s.waste], i.foundations = Ei(s.foundations), i.foundationOrder = zi(s.foundationOrder), i.clueDeck = Ci(s.clueDeck), i.activeClueCategoryId = s.activeClueCategoryId, i.selectedSource = s.selectedSource ? { ...s.selectedSource } : null, i.movesLeft = s.movesLeft, i.score = s.score, i.streak = s.streak, i.message = "Undo used.", i.mode = s.mode, i.boosters = { ...s.boosters, undo: Math.max(0, i.boosters.undo - 1) }, i.history = i.history.slice(1), !0);
}
function mi(i, s, h = 0) {
  const r = Ze(i), f = [];
  for (const R of r.categories) {
    f.push(Ty(R));
    for (const W of R.words) f.push(py(R, W));
  }
  let O = 5370206 + i * 131;
  const z = [...f];
  for (let R = z.length - 1; R > 0; R -= 1) {
    let W;
    [O, W] = Fu(O);
    const nl = Math.floor(W * (R + 1));
    [z[R], z[nl]] = [z[nl], z[R]];
  }
  const L = [];
  let H = 0;
  for (const R of r.columnHeights)
    L.push(z.slice(H, H + R)), H += R;
  const E = L.map((R) => Math.max(0, R.length - 1)), p = z.slice(H).reverse(), U = Object.fromEntries(r.categories.map((R) => [R.id, []]));
  return {
    mode: "title",
    levelIndex: i,
    columns: L,
    hiddenCounts: E,
    reserve: p,
    waste: [],
    foundations: U,
    foundationOrder: Array.from({ length: pi }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: r.moveBudget,
    score: h,
    streak: 0,
    bestScore: vy(),
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
function eo(i) {
  const s = [];
  i.columns.forEach((O, z) => {
    const L = { kind: "column", index: z }, H = Yt(i, L), E = fn(H), p = Hl(H);
    E && p && s.push({ source: L, card: E, topCard: p, run: H });
  });
  const h = Yt(i, { kind: "waste" }), r = fn(h), f = Hl(h);
  return r && f && s.push({ source: { kind: "waste" }, card: r, topCard: f, run: h }), s;
}
function to(i, s, h) {
  return h?.kind === "column" && s === void 0 ? !1 : s.length === 0 || Hl(s)?.categoryId === i.categoryId;
}
function no(i, s = Ze(i.levelIndex)) {
  const h = eo(i);
  let r = !1, f = !1, O = !1, z = !1, L = !1, H = !1, E = !1, p = "", U = "";
  for (const { source: R, card: W, topCard: nl } of h) {
    const il = Lt(s, W.categoryId);
    if (!il) continue;
    const Ol = i.foundations[W.categoryId].length < il.words.length;
    W.role === "clue" && Ol && i.foundationOrder.includes(null) && (r = !0, U || (U = `${W.label} can claim an empty crown.`));
    const cl = Ti(i, nl.categoryId);
    nl.role === "word" && cl >= 0 && Ol && (f = !0, p || (p = `${nl.label} matches the ${il.clueTitle} clue.`));
    for (let Dl = 0; Dl < i.columns.length; Dl += 1)
      if (!(R.kind === "column" && R.index === Dl) && to(W, i.columns[Dl], R)) {
        O = !0, p || (p = `${W.label} can park on column ${Dl + 1}.`);
        break;
      }
    nl.role === "word" && i.boosters.joker > 0 && cl >= 0 && Ol && (L = !0, p || (p = `Use Joker on ${nl.label} if you want to preserve the board.`));
  }
  return i.reserve.length > 0 && (z = !0, p || (p = "Draw from the reserve pile.")), i.boosters.shuffle > 0 && i.reserve.length + i.waste.length > 0 && (H = !0, p || (p = "Use Shuffle to recycle the reserve and waste piles.")), i.boosters.undo > 0 && i.history.length > 0 && (E = !0, p || (p = "Use Undo to back out of the dead end.")), r && U && (p = U), {
    cluePlacement: r,
    foundationSort: f,
    columnParking: O,
    reserveDraw: z,
    joker: L,
    shuffle: H,
    undo: E,
    any: r || f || O || z || L || H || E,
    hint: p || "No legal moves remain."
  };
}
function gi(i) {
  const s = Ze(i.levelIndex);
  if (s.categories.every((f) => i.foundations[f.id].length === f.words.length)) {
    i.mode = "won", i.message = "All category stacks cleared. Clean round.", i.score > i.bestScore && (i.bestScore = i.score, Sy(i.score));
    return;
  }
  if (i.movesLeft <= 0) {
    i.mode = "lost", i.message = "Out of moves. That deal is dead.";
    return;
  }
  no(i, s).any || (i.mode = "lost", i.message = "No legal moves remain. That deal is dead.");
}
function vi(i, s, h) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const f = i.waste.pop();
    return f ? [f] : [];
  }
  const r = i.columns[s.index].splice(Math.max(0, i.columns[s.index].length - h), h);
  return Ay(i, s.index), r;
}
function $f(i, s, h, r) {
  for (let f = 0; f < 10; f += 1) {
    const O = f / 10 * Math.PI * 2;
    i.particles.push({ x: s, y: h, vx: Math.cos(O) * (1.2 + f * 0.12), vy: Math.sin(O) * (1.2 + f * 0.1) - 1.8, size: 8 + f % 3, life: 460, maxLife: 460, color: r });
  }
}
function st(i, s, h, r, f, O = 0.2) {
  i.feedbackTexts.push({ text: s, x: h, y: r, life: 720, maxLife: 720, color: f, scale: O });
}
function Ku(i, s, h) {
  i.foundationPulses = i.foundationPulses.filter((r) => r.slotIndex !== s), i.foundationPulses.push({ slotIndex: s, color: h, life: 520, maxLife: 520 });
}
function Ju(i, s, h, r, f) {
  i.motionCards.push({
    card: s,
    fromX: h.x,
    fromY: h.y,
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
function Cy(i) {
  return no(i).hint;
}
function uo(i, s) {
  const h = [...i];
  let r = s;
  for (let f = h.length - 1; f > 0; f -= 1) {
    let O;
    [r, O] = Fu(r);
    const z = Math.floor(O * (f + 1));
    [h[f], h[z]] = [h[z], h[f]];
  }
  return h;
}
function ht(i, s, h) {
  return i >= h.x && i <= h.x + h.w && s >= h.y && s <= h.y + h.h;
}
function jl(i) {
  const r = Bl - 502 - 28, f = Math.max(72, Math.min(84, Math.floor((r - 8 * Math.max(0, pi - 1)) / pi))), O = i.columnHeights.length >= 6 ? 116 : 136, z = i.columnHeights.length >= 6 ? 18 : 20, L = i.columnHeights.length * O + Math.max(0, i.columnHeights.length - 1) * z, H = Math.round((Bl - L) / 2);
  return {
    reserve: { x: 92, y: 168, w: 102, h: 142 },
    waste: { x: 224, y: 168, w: 114, h: 150 },
    clue: { x: 360, y: 152, w: 124, h: 170 },
    foundations: Array.from({ length: pi }, (E, p) => ({ x: 502 + p * (f + 8), y: 112, w: f, h: 214 })),
    columns: i.columnHeights.map((E, p) => ({ x: H + p * (O + z), y: 360, w: O, h: 638 }))
  };
}
function Si(i, s, h) {
  const r = i.getBoundingClientRect();
  return !r.width || !r.height ? null : {
    x: (s - r.left) / r.width * Bl,
    y: (h - r.top) / r.height * dt
  };
}
function Oy(i, s, h, r) {
  const f = jl(i);
  if (Hl(s.waste) && ht(h, r, f.waste)) return { kind: "waste" };
  if (s.activeClueCategoryId && ht(h, r, f.clue)) return { kind: "clue" };
  for (let z = s.columns.length - 1; z >= 0; z -= 1) {
    const L = s.columns[z];
    if (!L.length) continue;
    const H = _i(s, z), E = Math.max(1, L.length - H), p = {
      x: f.columns[z].x + 10,
      y: f.columns[z].y + 24 + H * 30,
      w: f.columns[z].w - 20,
      h: 74 + Math.max(0, E - 1) * 30
    };
    if (ht(h, r, p)) return { kind: "column", index: z };
  }
  return null;
}
function A0(i, s, h, r, f, O) {
  const z = fn(r), L = Hl(r), H = jl(i);
  for (let E = 0; E < H.foundations.length; E += 1) {
    if (!ht(f, O, H.foundations[E])) continue;
    if (z?.role === "clue") {
      if (s.foundationOrder[E] == null) return { kind: "foundation", index: E };
      continue;
    }
    const p = s.foundationOrder[E];
    if (p && L?.role === "word" && L.categoryId === p) return { kind: "foundation", index: E };
  }
  for (let E = 0; E < H.columns.length; E += 1)
    if (ht(f, O, H.columns[E])) {
      if (h.kind === "column" && h.index === E) return null;
      if (z && to(z, s.columns[E], h)) return { kind: "column", index: E };
    }
  return null;
}
function H0(i, s, h) {
  const r = jl(i).columns[h], f = s.columns[h], O = _i(s, h), z = [];
  let L = r.y + 24;
  return f.forEach((H, E) => {
    const p = E < O, U = E === f.length - 1;
    z.push({ x: r.x + 10, y: L, w: r.w - 20, h: p ? 70 : 74, hidden: p, top: U }), L += p ? 30 : U ? 42 : 30;
  }), z;
}
function bi(i, s, h, r) {
  return h.kind === "clue" ? [{ x: jl(i).clue.x, y: jl(i).clue.y, w: jl(i).clue.w, h: jl(i).clue.h }] : h.kind === "waste" ? [{ x: jl(i).waste.x, y: jl(i).waste.y, w: jl(i).waste.w, h: jl(i).waste.h }] : H0(i, s, h.index).slice(-r);
}
function My(i, s, h, r) {
  return H0(i, s, h).slice(-r);
}
function If(i, s, h) {
  const r = jl(i).foundations[s], f = Math.min(Math.max(h, 0), 3), O = f > 0 ? f - 1 : 0;
  return {
    x: r.x + 14 + O * 3,
    y: r.y + 126,
    w: r.w - 28,
    h: 54
  };
}
function Ff(i, s, h) {
  const r = s.foundationOrder[h], f = r ? s.foundations[r] : [];
  return If(i, h, f.length);
}
function E0(i, s) {
  const h = jl(i).foundations[s];
  return { x: h.x + 10, y: h.y + 10, w: h.w - 20, h: 104 };
}
function _y(i) {
  const s = Ze(i.levelIndex), h = no(i, s), r = eo(i).filter(({ card: f }) => f.role === "clue").map(({ source: f, card: O }) => ({ source: Qe(f), label: O.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: i.mode,
    levelNumber: i.levelIndex + 1,
    dealType: i.levelIndex < Fn.length ? "curated" : "generated",
    level: s.name,
    tagline: s.tagline,
    totalCategories: s.categories.length,
    crownSlots: i.foundationOrder.length,
    completedCategories: M0(i, s),
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    selectedSource: Qe(i.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: r,
    reserveCount: i.reserve.length,
    wasteTop: Hl(i.waste)?.label ?? null,
    foundations: i.foundationOrder.map((f, O) => ({
      slot: O,
      clueIcon: Lt(s, f)?.clueIcon ?? null,
      clueTitle: Lt(s, f)?.clueTitle ?? null,
      count: f ? i.foundations[f].length : 0,
      words: f ? i.foundations[f].map((z) => z.label) : []
    })),
    columns: i.columns.map((f, O) => ({
      index: O,
      count: f.length,
      hidden: i.hiddenCounts[O] ?? 0,
      top: Hl(f)?.label ?? null,
      topRole: Hl(f)?.role ?? null,
      topDisplay: Hl(f)?.faceStyle === "iconOnly" ? Hl(f)?.faceIcon ?? Hl(f)?.label ?? null : Hl(f)?.label ?? null,
      revealed: _0(i, O).map((z) => ({ label: z.label, role: z.role, display: z.faceStyle === "iconOnly" ? z.faceIcon ?? z.label : z.label, faceStyle: z.faceStyle ?? "word" }))
    })),
    boosters: i.boosters,
    actions: h,
    animations: { motionCards: i.motionCards.length, feedbackTexts: i.feedbackTexts.length, foundationPulses: i.foundationPulses.length },
    message: i.message,
    fullscreen: i.fullscreen
  });
}
function Tl(i, s, h, r, f, O) {
  i.beginPath(), i.moveTo(s + O, h), i.arcTo(s + r, h, s + r, h + f, O), i.arcTo(s + r, h + f, s, h + f, O), i.arcTo(s, h + f, s, h, O), i.arcTo(s, h, s + r, h, O), i.closePath();
}
function ku(i, s, h, r, f, O, z, L = "#10302a") {
  i.fillStyle = O, Tl(i, s, h, r, f, f / 2), i.fill(), i.fillStyle = L, i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(z, s + r / 2, h + f / 2 + 6);
}
function Dy(i, s, h, r, f, O, z) {
  for (let L = r; L >= f; L -= 1)
    if (i.font = `${O} ${L}px ${z}`, i.measureText(s).width <= h) return L;
  return f;
}
function Pf(i, s, h, r, f, O, z, L, H) {
  const E = Dy(i, s, f, O, z, L, H);
  return i.font = `${L} ${E}px ${H}`, i.fillText(s, h, r), E;
}
function Hy(i, s, h, r, f, O) {
  Mi(i, s, h, r, f, 18, 0.26);
  const z = i.createLinearGradient(s, h, s, h + f);
  z.addColorStop(0, "#fff2c8"), z.addColorStop(1, "#efbf58"), i.fillStyle = z, Tl(i, s, h, r, f, 18), i.fill(), i.strokeStyle = "rgba(138, 95, 16, 0.38)", i.lineWidth = 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Tl(i, s + 10, h + 10, r - 20, 22, 11), i.fill(), i.fillStyle = "#7b5310", i.font = "800 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("CROWN", s + r / 2, h + 26), i.fillStyle = "#7b5310", O.clueStyle !== "wordOnly" && (i.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(O.clueIcon, s + r / 2, O.clueStyle === "iconOnly" ? h + 76 : h + 64)), O.clueStyle !== "iconOnly" && Pf(
    i,
    O.clueTitle,
    s + r / 2,
    O.clueStyle === "wordOnly" ? h + 76 : h + 98,
    r - 18,
    O.clueStyle === "wordOnly" ? 24 : 17,
    O.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function Mi(i, s, h, r, f, O = 18, z = 0.28) {
  i.save(), i.shadowColor = `rgba(4, 14, 22, ${z})`, i.shadowBlur = O, i.shadowOffsetY = 10, i.fillStyle = "rgba(0,0,0,0.01)", Tl(i, s, h, r, f, 20), i.fill(), i.restore();
}
function Wu(i, s, h, r, f) {
  Mi(i, s, h, r, f, 16, 0.24);
  const O = i.createLinearGradient(s, h, s + r, h + f);
  O.addColorStop(0, "#4874b9"), O.addColorStop(1, "#254d83"), i.fillStyle = O, Tl(i, s, h, r, f, 18), i.fill(), i.strokeStyle = "rgba(255,255,255,0.3)", i.lineWidth = 2, i.stroke(), i.strokeStyle = "rgba(255,255,255,0.22)", i.lineWidth = 1.5, Tl(i, s + 8, h + 8, r - 16, f - 16, 14), i.stroke(), i.fillStyle = "rgba(255,255,255,0.18)";
  for (let z = 0; z < 3; z += 1)
    for (let L = 0; L < 2; L += 1) {
      const H = s + 26 + L * 34, E = h + 24 + z * 26;
      Tl(i, H, E, 18, 12, 6), i.fill();
    }
}
function $u(i, s, h, r, f, O, z, L = !1) {
  const H = L || f <= 86;
  if (O.role === "clue") {
    Mi(i, s, h, r, f, z ? 18 : 14, z ? 0.3 : 0.24);
    const U = i.createLinearGradient(s, h, s, h + f);
    U.addColorStop(0, "#fff2c8"), U.addColorStop(1, "#efbf58"), i.fillStyle = U, Tl(i, s, h, r, f, H ? 14 : 18), i.fill(), i.strokeStyle = z ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", i.lineWidth = z ? 3 : 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Tl(i, s + 8, h + 8, r - 16, H ? 14 : 18, 12), i.fill(), i.fillStyle = "#7b5310", i.textAlign = "center", i.font = H ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", i.fillText("CLUE", s + r / 2, h + (H ? 18 : 26)), O.faceStyle !== "word" && O.faceIcon && (i.font = H ? O.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(O.faceIcon, s + r / 2, h + (O.faceStyle === "iconOnly" ? H ? 40 : 50 : H ? 34 : 38))), O.faceStyle !== "iconOnly" && Pf(
      i,
      O.label,
      s + r / 2,
      h + (O.faceStyle === "word" ? H ? 46 : 54 : H ? 52 : 62),
      r - (H ? 16 : 22),
      H ? 10 : 18,
      H ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), H || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(123,83,16,0.74)", i.fillText("CLAIM A CROWN", s + r / 2, h + f - 12));
    return;
  }
  Mi(i, s, h, r, f, z ? 18 : 14, z ? 0.28 : 0.22);
  const E = i.createLinearGradient(s, h, s, h + f);
  E.addColorStop(0, "#fffef8"), E.addColorStop(1, "#f4efe4"), i.fillStyle = E, Tl(i, s, h, r, f, H ? 14 : 18), i.fill(), i.strokeStyle = z ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", i.lineWidth = z ? 3 : 2, i.stroke();
  const p = i.createLinearGradient(s, h + 8, s + r, h + 8);
  p.addColorStop(0, "#f3d9a7"), p.addColorStop(1, "#e8c77f"), i.fillStyle = p, Tl(i, s + 8, h + 8, r - 16, H ? 14 : 18, 12), i.fill(), i.fillStyle = "#102422", i.textAlign = "center", O.faceStyle === "iconOnly" && O.faceIcon ? (i.font = H ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(O.faceIcon, s + r / 2, h + (H ? 42 : 50)), H || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.42)", i.fillText("IMAGE CARD", s + r / 2, h + 66))) : (O.faceStyle === "iconWord" && O.faceIcon && (i.font = H ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(O.faceIcon, s + r / 2, h + (H ? 27 : 28))), Pf(
    i,
    O.label,
    s + r / 2,
    h + (H ? 46 : O.faceStyle === "iconWord" ? 52 : 44),
    r - (H ? 16 : 22),
    H ? 12 : 19,
    H ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), H || (i.font = "600 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.4)", i.fillText(O.faceStyle === "iconWord" ? "ICON CARD" : "WORD", s + r / 2, h + 64)));
}
function z0(i) {
  return 1 - (1 - i) ** 3;
}
function Ry(i, s, h) {
  const r = Ze(s.levelIndex), f = jl(r);
  i.clearRect(0, 0, Bl, dt);
  const O = i.createLinearGradient(0, 0, 0, dt);
  O.addColorStop(0, "#246a61"), O.addColorStop(0.48, "#154642"), O.addColorStop(1, "#092225"), i.fillStyle = O, i.fillRect(0, 0, Bl, dt);
  const z = i.createLinearGradient(0, 0, Bl, dt);
  z.addColorStop(0, "rgba(255,255,255,0.025)"), z.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = z;
  for (let p = 0; p < 7; p += 1)
    for (let U = 0; U < 5; U += 1)
      Tl(i, 18 + U * 188, 18 + p * 168, 120, 72, 24), i.fill();
  i.save();
  const L = i.createRadialGradient(128, 112, 10, 128, 112, 420);
  L.addColorStop(0, "rgba(211, 255, 231, 0.24)"), L.addColorStop(1, "rgba(211, 255, 231, 0)"), i.fillStyle = L, i.fillRect(0, 0, Bl, dt);
  const H = i.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (H.addColorStop(0, "rgba(255, 226, 164, 0.2)"), H.addColorStop(1, "rgba(255, 226, 164, 0)"), i.fillStyle = H, i.fillRect(0, 0, Bl, dt), i.restore(), i.fillStyle = "#f7fff9", i.textAlign = "left", i.font = "800 28px Trebuchet MS, sans-serif", i.fillText(r.name, 76, 58), i.font = "600 15px Trebuchet MS, sans-serif", i.fillStyle = "rgba(247,255,249,0.76)", i.fillText(r.tagline, 76, 84), Tl(i, 78, 108, 286, 228, 32), i.fillStyle = "rgba(4,16,20,0.3)", i.fill(), ku(i, 102, 124, 110, 34, "rgba(255,255,255,0.12)", "Reserve", "#eff8f3"), ku(i, 240, 124, 92, 34, "rgba(255,255,255,0.12)", "Waste", "#eff8f3"), s.reserve.length ? (Wu(i, f.reserve.x, f.reserve.y + 10, f.reserve.w, f.reserve.h), Wu(i, f.reserve.x + 6, f.reserve.y + 4, f.reserve.w, f.reserve.h), Wu(i, f.reserve.x + 12, f.reserve.y - 2, f.reserve.w, f.reserve.h), ku(i, f.reserve.x + 24, f.reserve.y + 92, 74, 34, "#ffe59f", String(s.reserve.length))) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Tl(i, f.reserve.x + 12, f.reserve.y, f.reserve.w, f.reserve.h, 20), i.stroke(), i.setLineDash([])), s.waste.length) {
    const p = Hl(s.waste);
    (s.waste.length > 1 || h?.source.kind === "waste" && h.moved) && Wu(i, f.waste.x + 6, f.waste.y + 4, f.reserve.w, f.reserve.h), h?.source.kind === "waste" && h.moved || $u(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, p, s.selectedSource?.kind === "waste");
  } else
    i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Tl(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, 20), i.stroke(), i.setLineDash([]);
  if (s.foundationOrder.forEach((p, U) => {
    const R = f.foundations[U], W = Lt(r, p), nl = W ? s.foundations[W.id] : [], il = s.foundationPulses.find((cl) => cl.slotIndex === U), Ol = h?.dropTarget?.kind === "foundation" && h.dropTarget.index === U;
    if (il) {
      const cl = il.life / il.maxLife;
      i.save(), i.globalAlpha = 0.22 * cl, i.fillStyle = "#ffe59b", Tl(i, R.x - 8, R.y - 8, R.w + 16, R.h + 16, 30), i.fill(), i.restore();
    }
    if (i.fillStyle = Ol ? "rgba(255, 238, 182, 0.16)" : "rgba(255,255,255,0.08)", Tl(i, R.x, R.y, R.w, R.h, 24), i.fill(), Ol && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Tl(i, R.x, R.y, R.w, R.h, 24), i.stroke()), W ? Hy(i, R.x + 10, R.y + 10, R.w - 20, 104, W) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([6, 8]), Tl(i, R.x + 12, R.y + 12, R.w - 24, 102, 18), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.7)", i.textAlign = "center", i.fillText("Empty Crown", R.x + R.w / 2, R.y + 56), i.fillText("Drop Clue", R.x + R.w / 2, R.y + 76)), W && nl.length) {
      const cl = nl.slice(-3);
      cl.forEach((Dl, bl) => {
        $u(i, R.x + 14 + bl * 3, R.y + 126 + (cl.length - bl - 1) * 5, R.w - 28, 54, Dl, !1, !0);
      });
    } else
      i.strokeStyle = "rgba(255,255,255,0.18)", i.setLineDash([6, 8]), i.lineWidth = 2, Tl(i, R.x + 16, R.y + 126, R.w - 32, 70, 16), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.68)", i.textAlign = "center", i.fillText(W ? "Build Here" : "Need Clue", R.x + R.w / 2, R.y + 168);
    i.fillStyle = "#eff9f3", i.font = "600 14px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(W ? `${nl.length}/${W.words.length}` : "0/6", R.x + R.w / 2, R.y + R.h - 26), i.fillStyle = "rgba(255,255,255,0.9)", i.fillRect(R.x + 16, R.y + R.h - 16, W ? (R.w - 32) * nl.length / W.words.length : 0, 8), i.strokeStyle = "rgba(255,255,255,0.18)", i.strokeRect(R.x + 16, R.y + R.h - 16, R.w - 32, 8);
  }), s.columns.forEach((p, U) => {
    const R = f.columns[U], W = h?.dropTarget?.kind === "column" && h.dropTarget.index === U;
    i.fillStyle = W ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", Tl(i, R.x, R.y, R.w, R.h, 28), i.fill(), W && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Tl(i, R.x, R.y, R.w, R.h, 28), i.stroke()), p.length || (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Tl(i, R.x + 10, R.y + 26, R.w - 20, 86, 20), i.stroke(), i.setLineDash([]), i.fillStyle = "rgba(239,249,243,0.74)", i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("Drop Here", R.x + R.w / 2, R.y + 76));
    const nl = _i(s, U), il = h?.moved && h.source.kind === "column" && h.source.index === U ? h.cards.length : 0, Ol = Math.max(nl, p.length - il);
    let cl = R.y + 24;
    p.forEach((Dl, bl) => {
      if (bl >= Ol) return;
      const Vl = bl < nl, Kl = bl === Ol - 1, ql = R.x + 10;
      if (Vl) {
        Wu(i, ql, cl, R.w - 20, 70), cl += 30;
        return;
      }
      $u(
        i,
        ql,
        cl,
        R.w - 20,
        74,
        Dl,
        Kl && s.selectedSource?.kind === "column" && s.selectedSource.index === U && !h,
        !Kl
      ), cl += Kl ? 42 : 30;
    });
  }), h?.moved && (i.save(), i.globalAlpha = 0.96, h.cards.forEach((p, U) => {
    $u(i, h.x - 58, h.y - 40 + U * 24, 116, 74, p, !0, U !== h.cards.length - 1);
  }), i.restore()), s.motionCards.forEach((p) => {
    const U = z0(1 - p.life / p.maxLife), R = p.fromX + (p.toX - p.fromX) * U, W = p.fromY + (p.toY - p.fromY) * U - Math.sin(U * Math.PI) * p.arc;
    i.save(), i.globalAlpha = 0.92, $u(i, R, W, p.w, p.h, p.card, !1, p.compact), i.restore();
  }), s.feedbackTexts.forEach((p) => {
    const U = 1 - p.life / p.maxLife, R = 1 - U, W = p.y - U * 36, nl = 0.92 + p.scale * z0(U);
    i.save(), i.globalAlpha = R, i.translate(p.x, W), i.scale(nl, nl), i.textAlign = "center", i.font = "800 28px Trebuchet MS, sans-serif", i.strokeStyle = "rgba(7,18,18,0.34)", i.lineWidth = 8, i.strokeText(p.text, 0, 0), i.fillStyle = p.color, i.fillText(p.text, 0, 0), i.restore();
  }), i.fillStyle = "rgba(5,16,18,0.58)", Tl(i, 70, 1030, Bl - 140, 136, 30), i.fill(), [
    { label: "Moves", value: String(s.movesLeft), color: "#fff5cc" },
    { label: "Streak", value: String(s.streak), color: "#d5fff1" },
    { label: "Score", value: String(s.score), color: "#d6ecff" },
    { label: "Undo", value: String(s.boosters.undo), color: "#ffe7c1" },
    { label: "Joker", value: String(s.boosters.joker), color: "#ffdcd5" },
    { label: "Shuffle", value: String(s.boosters.shuffle), color: "#e0d9ff" }
  ].forEach((p, U) => {
    const R = 96 + U * 142;
    Tl(i, R, 1048, 122, 60, 20), i.fillStyle = "rgba(255,255,255,0.08)", i.fill(), i.fillStyle = p.color, i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(p.label, R + 14, 1070), i.fillStyle = "#f4fff8", i.font = "800 22px Trebuchet MS, sans-serif", i.fillText(p.value, R + 14, 1094);
  }), i.fillStyle = "#eef9f4", i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(s.message, 96, 1140), s.particles.forEach((p) => {
    i.save(), i.globalAlpha = p.life / p.maxLife, i.fillStyle = p.color, Tl(i, p.x - p.size / 2, p.y - p.size / 2, p.size, p.size, 5), i.fill(), i.restore();
  }), s.mode !== "playing") {
    const p = s.mode === "lost" && s.movesLeft <= 0;
    i.fillStyle = "rgba(7,12,18,0.74)", Tl(i, 120, 384, Bl - 240, 292, 32), i.fill(), ku(i, Bl / 2 - 102, 426, 204, 38, "rgba(255,255,255,0.12)", s.mode === "title" ? "Fresh Shuffle" : s.mode === "won" ? "Perfect Sort" : p ? "Out of Moves" : "Dead End", "#f4fff8"), i.fillStyle = "#fff4c8", i.textAlign = "center", i.font = "800 44px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Word Sort Solitaire" : s.mode === "won" ? "Round Complete" : p ? "Out of Moves" : "No Legal Moves", Bl / 2, 510), i.fillStyle = "#eef9f4", i.font = "600 22px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Clue cards are buried in the deal. Uncover them, claim crowns, and sort the matching words." : s.message, Bl / 2, 566), i.font = "600 18px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,244,0.82)", i.fillText(s.mode === "won" ? "Tap to deal the next board." : "Tap anywhere on the board to play.", Bl / 2, 604), ku(i, Bl / 2 - 126, 620, 252, 56, "#ffd47b", s.mode === "won" ? "Tap For Next Deal" : "Tap To Start");
  }
}
function C0(i, s) {
  const h = [];
  for (const r of i.particles)
    r.life -= s, !(r.life <= 0) && (r.x += r.vx * (s / 16), r.y += r.vy * (s / 16), r.vy += 0.04 * (s / 16), h.push(r));
  i.particles = h, i.motionCards = i.motionCards.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.feedbackTexts = i.feedbackTexts.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.foundationPulses = i.foundationPulses.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : []));
}
function xe(i) {
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
function cn(i, s) {
  return i.length <= s ? i : `${i.slice(0, Math.max(1, s - 1))}…`;
}
function Uy() {
  const i = qe.useRef(null);
  i.current || (i.current = mi(0, !1));
  const s = qe.useRef(null), h = qe.useRef(null), r = qe.useRef(null), f = qe.useRef(i.current), O = qe.useRef(null), [z, L] = qe.useState(i.current), [H, E] = qe.useState(() => ({ width: typeof window > "u" ? 1440 : window.innerWidth, height: typeof window > "u" ? 960 : window.innerHeight })), p = () => L({ ...f.current, columns: Ai(f.current.columns), hiddenCounts: Oi(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: Ei(f.current.foundations), foundationOrder: zi(f.current.foundationOrder), clueDeck: Ci(f.current.clueDeck), particles: [...f.current.particles], motionCards: b0(f.current.motionCards), feedbackTexts: p0(f.current.feedbackTexts), foundationPulses: T0(f.current.foundationPulses) }), U = Ze(z.levelIndex), R = M0(z, U), W = (v, N = f.current.levelIndex) => {
    const A = mi(N, f.current.fullscreen, 0);
    A.mode = "playing", f.current = A, p();
  }, nl = (v, N, A) => {
    if (f.current.mode !== "playing") return;
    const x = A ?? Yt(f.current, N), Y = fn(x);
    if (!Y || Y.role !== "clue") {
      f.current.message = "Only clue cards can claim an empty crown.", p();
      return;
    }
    const q = Lt(U, Y.categoryId);
    if (!q) {
      f.current.message = "That clue card has no category data.", p();
      return;
    }
    if (f.current.foundations[q.id].length === q.words.length) {
      f.current.message = `${q.clueTitle} is already complete.`, p();
      return;
    }
    if (f.current.foundationOrder[v] != null) {
      f.current.message = "That crown already has a clue card.", p();
      return;
    }
    const k = Ti(f.current, q.id);
    if (k >= 0) {
      f.current.message = `${q.clueTitle} already owns crown ${k + 1}.`, p();
      return;
    }
    const ll = bi(U, f.current, N, x.length);
    $n(f.current);
    const Ml = vi(f.current, N, x.length);
    if (!Ml.length) return;
    const [te, ...El] = Ml, on = f.current.foundations[q.id].length;
    f.current.foundationOrder[v] = q.id, El.length && f.current.foundations[q.id].push(...El), f.current.selectedSource = null;
    const rn = El.reduce((Ae, sn, yt) => Ae + 100 + yt * 25, 0);
    if (f.current.streak = El.length, f.current.message = El.length ? `${q.clueTitle} claimed crown ${v + 1} with ${El.length} matching card${El.length === 1 ? "" : "s"}.` : `${q.clueTitle} placed into crown ${v + 1}.`, f.current.score += 40 + rn, Ju(f.current, te, ll[0] ?? E0(U, v), E0(U, v), !1), El.forEach((Ae, sn) => {
      const yt = If(U, v, on + sn + 1);
      Ju(f.current, Ae, ll[sn + 1] ?? ll[ll.length - 1] ?? yt, yt, !0);
    }), Ku(f.current, v, q.color), st(f.current, q.clueTitle, jl(U).foundations[v].x + jl(U).foundations[v].w / 2, jl(U).foundations[v].y + 34, "#fff4bf", 0.22), El.length) {
      const Ae = If(U, v, on + El.length);
      $f(f.current, Ae.x + Ae.w / 2, Ae.y + 30, q.color), st(f.current, `+${40 + rn}`, Ae.x + Ae.w / 2, Ae.y + 24, "#fff4bf", 0.24), f.current.streak >= 2 && st(f.current, `Combo x${f.current.streak}`, Bl / 2, 342, "#fff0b4", 0.3);
    }
    f.current.foundations[q.id].length === q.words.length && (f.current.foundationOrder[v] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${q.clueTitle} completed. Crown ${v + 1} opens again.`, st(f.current, "Set Clear", Bl / 2, 316, "#ffe7aa", 0.34), Ku(f.current, v, q.color)), Ol(), p();
  }, il = (v) => {
    if (f.current.mode !== "playing") return;
    const N = Yt(f.current, v), A = fn(N), x = Hl(N);
    if (!(!A || !x)) {
      if (Qe(f.current.selectedSource) === Qe(v)) {
        if (A.role === "clue") {
          const Y = f.current.foundationOrder.map((q, k) => q == null ? k : -1).filter((q) => q >= 0);
          Y.length === 1 ? cl(Y[0]) : (f.current.selectedSource = null, f.current.message = Y.length ? `Select an empty crown for ${A.label}.` : "Every crown already has a clue card.", p());
        } else {
          const Y = Ti(f.current, x.categoryId);
          Y >= 0 ? cl(Y) : (f.current.selectedSource = null, f.current.message = "Find and place the matching clue card first.", p());
        }
        Qe(f.current.selectedSource) === Qe(v) && (f.current.selectedSource = null, f.current.message = "Selection cleared.", p());
        return;
      }
      f.current.selectedSource = v, f.current.message = A.role === "clue" ? N.length > 1 ? `${A.label} stack selected. Move the full stack into an empty crown.` : `${A.label} clue selected. Drop it into an empty crown.` : N.length > 1 ? `${N.length} matching cards selected.` : `${x.label} selected.`, p();
    }
  }, Ol = () => {
    f.current.movesLeft = Math.max(0, f.current.movesLeft - 1), gi(f.current);
  }, cl = (v, N) => {
    const A = N ?? f.current.selectedSource;
    if (f.current.mode !== "playing" || !A) return;
    const x = Yt(f.current, A), Y = fn(x), q = Hl(x) ?? null;
    if (!Y || !q) return;
    if (Y.role === "clue") {
      nl(v, A, x);
      return;
    }
    const k = f.current.foundationOrder[v], ll = Lt(U, k);
    if (!k || !ll) {
      f.current.streak = 0, f.current.message = "That crown needs its clue card first.", p();
      return;
    }
    if (q.categoryId !== k) {
      f.current.streak = 0, f.current.message = `${q.label} does not fit the ${ll?.clueTitle ?? "selected"} clue.`, p();
      return;
    }
    const Ml = bi(U, f.current, A, 1)[0];
    $n(f.current);
    const te = vi(f.current, A, 1);
    if (!te.length) return;
    f.current.foundations[k].push(te[0]), f.current.selectedSource = null, f.current.score += 100 + f.current.streak * 25, f.current.streak += 1, f.current.message = `${te[0].label} matched the ${ll?.clueTitle ?? "target"} clue.`;
    const El = Ff(U, f.current, v);
    Ju(f.current, te[0], Ml, El, !0), $f(f.current, El.x + El.w / 2, El.y + 86, te[0].color), Ku(f.current, v, ll?.color ?? "#ffe59b"), st(f.current, `+${100 + (f.current.streak - 1) * 25}`, El.x + El.w / 2, El.y + 44, "#fff4bf", 0.24), f.current.foundations[k].length === ll.words.length && (f.current.foundationOrder[v] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${ll.clueTitle} completed. Crown ${v + 1} opens again.`, st(f.current, "Set Clear", Bl / 2, 316, "#ffe7aa", 0.34), Ku(f.current, v, ll.color)), f.current.streak >= 2 && st(f.current, `Combo x${f.current.streak}`, Bl / 2, 342, "#fff0b4", 0.3), Ol(), p();
  }, Dl = (v, N) => {
    const A = N ?? f.current.selectedSource;
    if (!A || f.current.mode !== "playing") return;
    if (A.kind === "column" && A.index === v) {
      f.current.selectedSource = null, f.current.message = "Selection cleared.", p();
      return;
    }
    const x = Yt(f.current, A), Y = x[0] ?? null;
    if (!Y) return;
    if (!to(Y, f.current.columns[v], A)) {
      f.current.streak = 0, f.current.message = `${Y.label} cannot stack on column ${v + 1}.`, p();
      return;
    }
    const q = bi(U, f.current, A, x.length);
    $n(f.current);
    const k = vi(f.current, A, x.length);
    if (!k.length) return;
    f.current.columns[v].push(...k), f.current.hiddenCounts[v] = Math.min(f.current.hiddenCounts[v] ?? 0, Math.max(0, f.current.columns[v].length - k.length)), D0(f.current, v);
    const ll = My(U, f.current, v, k.length);
    k.forEach((Ml, te) => Ju(f.current, Ml, q[te] ?? q[q.length - 1], ll[te] ?? ll[ll.length - 1], te !== k.length - 1)), f.current.selectedSource = null, f.current.score += 15 * k.length, f.current.streak = 0, f.current.message = k.length > 1 ? `${k.length} matching cards parked on column ${v + 1}.` : `${k[0].label} parked on column ${v + 1}.`, st(f.current, k.length > 1 ? `Stack x${k.length}` : "+15", jl(U).columns[v].x + jl(U).columns[v].w / 2, jl(U).columns[v].y + 18, "#dff7ff", k.length > 1 ? 0.28 : 0.18), Ol(), p();
  }, bl = () => {
    if (f.current.mode !== "playing") return;
    if (!Hl(f.current.reserve)) {
      f.current.message = "Reserve pile is empty.", p();
      return;
    }
    $n(f.current);
    const N = f.current.reserve.pop();
    N && (f.current.waste.push(N), f.current.selectedSource = { kind: "waste" }, f.current.message = `Drew ${N.label}.`, Ol(), p());
  }, Vl = () => {
    f.current.message = Cy(f.current), p();
  }, Kl = () => {
    zy(f.current) || (f.current.message = f.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), p();
  }, ql = () => {
    const v = f.current.selectedSource;
    if (!v || f.current.mode !== "playing") return;
    if (f.current.boosters.joker <= 0) {
      f.current.message = "Joker spent.", p();
      return;
    }
    const N = Hl(Yt(f.current, v)) ?? null;
    if (!N) return;
    if (N.role === "clue") {
      f.current.message = "Joker only sorts word cards.", p();
      return;
    }
    const A = Ti(f.current, N.categoryId);
    if (A < 0) {
      f.current.message = "Place the matching clue card first.", p();
      return;
    }
    const x = bi(U, f.current, v, 1)[0] ?? Ff(U, f.current, A);
    $n(f.current);
    const Y = vi(f.current, v, 1)[0];
    if (!Y) return;
    f.current.foundations[Y.categoryId].push(Y), f.current.selectedSource = null, f.current.boosters.joker -= 1, f.current.score += 80, f.current.message = `Joker matched ${Y.label} automatically.`;
    const q = Ff(U, f.current, A);
    Ju(f.current, Y, x, q, !0), $f(f.current, q.x + q.w / 2, q.y + 86, Y.color), Ku(f.current, A, U.categories.find((k) => k.id === Y.categoryId)?.color ?? "#ffe59b"), st(f.current, "Joker!", q.x + q.w / 2, q.y + 44, "#ffd7a8", 0.24), gi(f.current), p();
  }, P = () => {
    if (f.current.mode !== "playing") return;
    if (f.current.boosters.shuffle <= 0) {
      f.current.message = "Shuffle spent.", p();
      return;
    }
    const v = [...f.current.reserve, ...f.current.waste];
    if (!v.length) {
      f.current.message = "No reserve cards to reshuffle.", p();
      return;
    }
    $n(f.current), f.current.reserve = uo(v, 8564529 + f.current.movesLeft * 17 + f.current.score), f.current.waste = [], f.current.selectedSource = null, f.current.boosters.shuffle -= 1, f.current.message = "Reserve and waste reshuffled.", gi(f.current), p();
  }, Jl = () => {
    const v = Math.max(0, f.current.score), N = f.current.levelIndex + 1;
    f.current = mi(N, f.current.fullscreen, v), f.current.mode = "playing", f.current.message = N < Fn.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", p();
  }, re = async () => {
    const v = s.current;
    if (!(!v || typeof document > "u"))
      try {
        document.fullscreenElement === v ? await document.exitFullscreen() : await v.requestFullscreen();
      } catch {
        f.current.message = "Fullscreen is unavailable here.", p();
      }
  }, Ve = (v, N) => {
    const A = h.current;
    if (!A) return;
    const x = Si(A, v, N);
    if (!x) return;
    const { x: Y, y: q } = x, k = Ze(f.current.levelIndex), ll = jl(k);
    if (f.current.mode !== "playing") {
      f.current.mode === "won" ? Jl() : W();
      return;
    }
    if (ht(Y, q, ll.reserve)) {
      bl();
      return;
    }
    if (ht(Y, q, ll.waste)) {
      il({ kind: "waste" });
      return;
    }
    for (let Ml = 0; Ml < ll.foundations.length; Ml += 1)
      if (ht(Y, q, ll.foundations[Ml])) {
        cl(Ml);
        return;
      }
    for (let Ml = 0; Ml < ll.columns.length; Ml += 1)
      if (ht(Y, q, ll.columns[Ml])) {
        f.current.selectedSource ? Dl(Ml) : il({ kind: "column", index: Ml });
        return;
      }
  }, Te = (v) => {
    const N = h.current;
    if (!N || f.current.mode !== "playing") return;
    const A = Si(N, v.clientX, v.clientY);
    if (!A) return;
    const x = Ze(f.current.levelIndex), Y = Oy(x, f.current, A.x, A.y);
    if (!Y) return;
    const q = Yt(f.current, Y);
    q.length && (O.current = { source: Y, cards: q, clueCategoryId: q[0]?.role === "clue" ? q[0].categoryId : null, x: A.x, y: A.y, startX: A.x, startY: A.y, moved: !1, dropTarget: null }, N.setPointerCapture(v.pointerId));
  }, Pl = (v) => {
    const N = h.current, A = O.current;
    if (!N || !A) return;
    const x = Si(N, v.clientX, v.clientY);
    if (!x) return;
    A.x = x.x, A.y = x.y, A.moved = A.moved || Math.hypot(x.x - A.startX, x.y - A.startY) > 14;
    const Y = Ze(f.current.levelIndex);
    A.dropTarget = A.moved ? A0(Y, f.current, A.source, A.cards, x.x, x.y) : null;
  }, Ke = (v) => {
    const N = h.current, A = O.current;
    if (!N || !A) {
      Ve(v.clientX, v.clientY);
      return;
    }
    const x = Si(N, v.clientX, v.clientY);
    N.hasPointerCapture(v.pointerId) && N.releasePointerCapture(v.pointerId);
    const Y = Ze(f.current.levelIndex);
    if (x && (A.x = x.x, A.y = x.y, A.moved = A.moved || Math.hypot(x.x - A.startX, x.y - A.startY) > 14, A.dropTarget = A.moved ? A0(Y, f.current, A.source, A.cards, x.x, x.y) : null), O.current = null, !A.moved) {
      Ve(v.clientX, v.clientY);
      return;
    }
    if (A.dropTarget?.kind === "foundation") {
      cl(A.dropTarget.index, A.source);
      return;
    }
    if (A.dropTarget?.kind === "column") {
      Dl(A.dropTarget.index, A.source);
      return;
    }
    f.current.selectedSource = A.source;
    const q = fn(A.cards), k = Hl(A.cards);
    !q || !k || (f.current.message = q.role === "clue" ? A.cards.length > 1 ? `${q.label} stack lifted. Drag the full stack into an empty crown.` : `${q.label} lifted. Drag it into an empty crown.` : A.cards.length > 1 ? `${A.cards.length} matching cards lifted. Drag them to a crown or column.` : `${k.label} lifted. Drag it to a crown or column.`, p());
  }, we = (v) => {
    const N = h.current;
    N && O.current && N.hasPointerCapture(v.pointerId) && N.releasePointerCapture(v.pointerId), O.current = null;
  };
  qe.useEffect(() => {
    const v = h.current, N = v?.getContext("2d");
    if (!v || !N) return;
    const A = window, x = () => {
      Ry(N, f.current, O.current), L({ ...f.current, columns: Ai(f.current.columns), hiddenCounts: Oi(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: Ei(f.current.foundations), foundationOrder: zi(f.current.foundationOrder), clueDeck: Ci(f.current.clueDeck), particles: [...f.current.particles], motionCards: b0(f.current.motionCards), feedbackTexts: p0(f.current.feedbackTexts), foundationPulses: T0(f.current.foundationPulses) });
    }, Y = () => {
      C0(f.current, 16), x(), r.current = window.requestAnimationFrame(Y);
    };
    return A.render_game_to_text = () => _y(f.current), A.advanceTime = (q) => {
      let k = q;
      for (; k > 0; ) {
        const ll = Math.min(k, 16);
        C0(f.current, ll), k -= ll;
      }
      x();
    }, A.__drainVirtualTimePending = () => 0, A.__wordsort_debug_set_moves = (q) => {
      f.current.movesLeft = Math.max(0, Math.floor(q)), gi(f.current), x();
    }, A.__wordsort_debug_set_level = (q) => {
      const k = Math.max(0, Math.floor(q)), ll = mi(k, f.current.fullscreen, 0);
      ll.mode = "playing", ll.message = k < Fn.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", f.current = ll, x();
    }, x(), r.current = window.requestAnimationFrame(Y), () => {
      r.current != null && window.cancelAnimationFrame(r.current), delete A.render_game_to_text, delete A.advanceTime, delete A.__drainVirtualTimePending, delete A.__wordsort_debug_set_moves, delete A.__wordsort_debug_set_level;
    };
  }, []), qe.useEffect(() => {
    const v = () => E({ width: window.innerWidth, height: window.innerHeight });
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []), qe.useEffect(() => {
    const v = ["j", "k", "l", "m", "p"], N = ["a", "s", "d", "g", "v"], A = () => {
      f.current.fullscreen = document.fullscreenElement === s.current, E({ width: window.innerWidth, height: window.innerHeight }), p();
    }, x = (Y) => {
      const q = Y.key.toLowerCase();
      q === "f" && (Y.preventDefault(), re()), q === "n" && (Y.preventDefault(), bl()), q === "h" && (Y.preventDefault(), Vl()), q === "u" && (Y.preventDefault(), Kl()), q === "x" && (Y.preventDefault(), ql()), q === "z" && (Y.preventDefault(), P()), q === "enter" && f.current.mode !== "playing" && (Y.preventDefault(), W());
      const k = N.indexOf(q);
      if (k >= 0) {
        Y.preventDefault();
        const Ml = { kind: "column", index: k };
        f.current.selectedSource?.kind === "column" && f.current.selectedSource.index === k ? il(Ml) : f.current.selectedSource ? Dl(k) : il(Ml);
      }
      q === "q" && (Y.preventDefault(), f.current.selectedSource?.kind === "waste" ? il({ kind: "waste" }) : il({ kind: "waste" }));
      const ll = v.indexOf(q);
      ll >= 0 && (Y.preventDefault(), cl(ll));
    };
    return document.addEventListener("fullscreenchange", A), window.addEventListener("keydown", x), () => {
      document.removeEventListener("fullscreenchange", A), window.removeEventListener("keydown", x);
    };
  }, []);
  const Al = !z.fullscreen && H.width < 560, M = z.fullscreen && (H.width < 1140 || H.height < 760), D = z.fullscreen || Al, J = z.fullscreen ? M ? "10px 10px 14px" : "14px 14px 16px" : Al ? "12px 10px 14px" : 20, dl = z.fullscreen ? Math.min(M ? 720 : 860, Math.max(320, H.width - (M ? 28 : 48))) : Al ? Math.min(420, Math.max(320, H.width - 28)) : 760, hl = D ? "Buried clue cards, five live crowns, and a tighter layout." : "A clue-card word sorter where the crown cards are buried in the deal, just like the rest of the deck.", m = z.fullscreen ? M ? 92 : 104 : Al ? 72 : 108, B = z.fullscreen ? M ? 120 : 136 : Al ? 108 : 160, G = (v, N) => {
    const A = Lt(U, v);
    return A ? D ? `${A.clueIcon} ${cn(A.clueTitle, Al ? 8 : 10)}` : `${A.clueIcon} ${A.clueTitle}` : `Empty ${N + 1}`;
  };
  return /* @__PURE__ */ Q.jsx("div", { style: { minHeight: "100%", display: "flex", justifyContent: "center", padding: z.fullscreen ? 0 : "24px 12px 48px", background: z.fullscreen ? "#091614" : "transparent" }, children: /* @__PURE__ */ Q.jsxs("section", { ref: s, style: { width: "100%", maxWidth: z.fullscreen ? "100vw" : 1040, minHeight: z.fullscreen ? "100vh" : void 0, boxSizing: "border-box", borderRadius: z.fullscreen ? 0 : 32, padding: J, background: "radial-gradient(circle at top left, rgba(179, 240, 209, 0.16), transparent 30%), linear-gradient(180deg, #163c37 0%, #0b1f1c 100%)", boxShadow: z.fullscreen ? "none" : "0 24px 60px rgba(4,14,39,0.35)", display: "flex", flexDirection: "column", gap: z.fullscreen ? 12 : 14, color: "#eff9f4", overflowX: "hidden", overflowY: z.fullscreen ? "auto" : "hidden" }, children: [
    /* @__PURE__ */ Q.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: D ? "flex-start" : "center", gap: M ? 10 : Al ? 8 : 16, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gap: 4, minWidth: 0, flex: "1 1 320px" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: z.fullscreen ? M ? 24 : 28 : Al ? 22 : 30, fontWeight: 800 }, children: "Word Sort Solitaire" }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: D ? 13 : 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: D ? 560 : 620 }, children: hl })
      ] }),
      /* @__PURE__ */ Q.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", minWidth: 0, justifyContent: D ? "flex-start" : "flex-end" }, children: [
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-start", onClick: () => W(), style: { ...xe(!0), padding: D ? "9px 12px" : "11px 16px", fontSize: D ? 12 : 14 }, children: z.mode === "playing" ? "New Round" : "Start Round" }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-next", onClick: Jl, style: { ...xe(!1), padding: D ? "9px 12px" : "11px 16px", fontSize: D ? 12 : 14 }, children: "Next Level" }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-hint", onClick: Vl, style: { ...xe(!1), padding: D ? "9px 12px" : "11px 16px", fontSize: D ? 12 : 14 }, children: "Hint" }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-draw", onClick: bl, style: { ...xe(!1), padding: D ? "9px 12px" : "11px 16px", fontSize: D ? 12 : 14 }, children: "Draw" }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-fullscreen", onClick: () => {
          re();
        }, style: { ...xe(!1), padding: D ? "9px 12px" : "11px 16px", fontSize: D ? 12 : 14 }, children: z.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
      ] })
    ] }),
    /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${m}px, 1fr))`, gap: z.fullscreen ? 10 : 12 }, children: [
      [["Level", U.name], ["Moves Left", String(z.movesLeft)], ["Score", String(z.score)], ["Best", String(z.bestScore)], ["Streak", String(z.streak)], ["Cleared", `${R}/${U.categories.length}`]].map(([v, N]) => {
        const A = v === "Level";
        return /* @__PURE__ */ Q.jsxs("div", { style: { minWidth: 0, padding: D ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: D && A ? M || Al ? "1 / -1" : "span 2" : void 0 }, children: [
          /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: v }),
          /* @__PURE__ */ Q.jsx("div", { style: { fontSize: D ? A ? 17 : 18 : 24, fontWeight: 800, wordBreak: A ? "normal" : "break-word", whiteSpace: A ? "nowrap" : "normal", overflow: A ? "hidden" : "visible", textOverflow: A ? "ellipsis" : "clip" }, children: A && D ? cn(N, Al ? 20 : M ? 24 : 30) : N })
        ] }, v);
      }),
      /* @__PURE__ */ Q.jsxs("div", { style: { minWidth: 0, padding: D ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Visible Clues" }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: D ? 17 : 20, fontWeight: 800 }, children: eo(z).filter(({ card: v }) => v.role === "clue").length })
      ] }),
      [["Undo", String(z.boosters.undo)], ["Joker", String(z.boosters.joker)], ["Shuffle", String(z.boosters.shuffle)]].map(([v, N]) => /* @__PURE__ */ Q.jsxs("div", { style: { minWidth: 0, padding: D ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: v }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: D ? 18 : 24, fontWeight: 800 }, children: N })
      ] }, v)),
      /* @__PURE__ */ Q.jsxs("div", { style: { minWidth: 0, padding: D ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: D ? "1 / -1" : void 0 }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Crown Status" }),
        /* @__PURE__ */ Q.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }, children: z.foundationOrder.map((v, N) => /* @__PURE__ */ Q.jsx("div", { style: { padding: D ? "5px 8px" : "6px 10px", borderRadius: 999, background: v ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: D ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: G(v, N) }, `crown-status-${N}`)) })
      ] }),
      /* @__PURE__ */ Q.jsxs("div", { style: { minWidth: 0, padding: D ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: D ? 13 : 15, fontWeight: 700, minHeight: 24, wordBreak: "break-word" }, children: z.message })
      ] })
    ] }),
    /* @__PURE__ */ Q.jsx("div", { style: { width: dl, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Bl} / ${dt}` }, children: /* @__PURE__ */ Q.jsx("canvas", { ref: h, width: Bl, height: dt, style: { width: "100%", height: "100%", display: "block", borderRadius: z.fullscreen ? 26 : 28, boxShadow: "0 22px 40px rgba(3,10,28,0.42)", background: "#102623", cursor: O.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: Te, onPointerMove: Pl, onPointerUp: Ke, onPointerCancel: we }) }),
    /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gap: 10 }, children: [
      /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${B}px, 1fr))`, gap: 10 }, children: [
        z.columns.map((v, N) => /* @__PURE__ */ Q.jsx("button", { id: `wordsort-source-col-${N + 1}`, onClick: () => z.selectedSource ? Dl(N) : il({ kind: "column", index: N }), style: { ...xe(Qe(z.selectedSource) === `column-${N}`), fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: Qe(z.selectedSource) === `column-${N}` ? `Selected: ${cn(Hl(v)?.label ?? "Empty", D ? 12 : 18)}` : `${Al ? "C" : "Column"} ${N + 1}: ${cn(Hl(v)?.label ?? "Empty", D ? 12 : 18)}` }, N)),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-source-waste", onClick: () => z.selectedSource ? il({ kind: "waste" }) : il({ kind: "waste" }), style: { ...xe(Qe(z.selectedSource) === "waste"), fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: Qe(z.selectedSource) === "waste" ? `Selected: ${cn(Hl(z.waste)?.label ?? "Empty", D ? 12 : 18)}` : `${Al ? "Waste" : "Waste:"} ${cn(Hl(z.waste)?.label ?? "Empty", D ? 12 : 18)}` })
      ] }),
      /* @__PURE__ */ Q.jsx("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${B}px, 1fr))`, gap: 10 }, children: z.foundationOrder.map((v, N) => {
        const A = Lt(U, v);
        return /* @__PURE__ */ Q.jsx("button", { id: `wordsort-foundation-${N + 1}`, onClick: () => cl(N), style: { ...xe(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: A ? `${A.clueIcon} ${cn(A.clueTitle, D ? 9 : 16)} ${z.foundations[A.id].length}/${A.words.length}` : D ? `Empty ${N + 1}` : `Empty Crown ${N + 1}` }, N);
      }) }),
      /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${B}px, 1fr))`, gap: 10 }, children: [
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-undo", onClick: Kl, style: { ...xe(!1), fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: `Undo (${z.boosters.undo})` }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-joker", onClick: ql, style: { ...xe(!1), fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: `Joker (${z.boosters.joker})` }),
        /* @__PURE__ */ Q.jsx("button", { id: "wordsort-shuffle", onClick: P, style: { ...xe(!1), fontSize: D ? 12 : 14, padding: D ? "9px 10px" : "11px 16px" }, children: `Shuffle (${z.boosters.shuffle})` })
      ] })
    ] }),
    !z.fullscreen && !Al ? /* @__PURE__ */ Q.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
      /* @__PURE__ */ Q.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "How It Plays" }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Clue cards are mixed into the same deal as every other card. You only get five live crowns, so finishing one set opens space for the next buried clue." })
      ] }),
      /* @__PURE__ */ Q.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
        /* @__PURE__ */ Q.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
          "Drag and drop on the canvas, tap for quick-sort, or use the helper buttons. Keyboard: ",
          /* @__PURE__ */ Q.jsx("code", { children: "A/S/D/G/V" }),
          " columns, ",
          /* @__PURE__ */ Q.jsx("code", { children: "Q" }),
          " waste, ",
          /* @__PURE__ */ Q.jsx("code", { children: "J/K/L/M/P" }),
          " crown slots, ",
          /* @__PURE__ */ Q.jsx("code", { children: "N" }),
          " draw, ",
          /* @__PURE__ */ Q.jsx("code", { children: "U" }),
          " undo, ",
          /* @__PURE__ */ Q.jsx("code", { children: "X" }),
          " joker, ",
          /* @__PURE__ */ Q.jsx("code", { children: "Z" }),
          " shuffle, ",
          /* @__PURE__ */ Q.jsx("code", { children: "H" }),
          " hint, ",
          /* @__PURE__ */ Q.jsx("code", { children: "F" }),
          " fullscreen."
        ] })
      ] }),
      /* @__PURE__ */ Q.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Q.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Reference Direction" }),
        /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The board is now closer to the mobile loop: more clue categories than crown slots, with completed sets freeing crowns for later clues." })
      ] })
    ] }) : null,
    Al ? /* @__PURE__ */ Q.jsxs("div", { style: { borderRadius: 18, padding: "10px 12px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ Q.jsx("div", { style: { fontWeight: 800, marginBottom: 4, fontSize: 13 }, children: "Mobile Notes" }),
      /* @__PURE__ */ Q.jsx("div", { style: { fontSize: 12, lineHeight: 1.45, color: "rgba(235,244,255,0.82)" }, children: "Tap a column or waste card to select it, then tap a crown or column to move it. Buried clue cards have to be uncovered before a crown can claim them." })
    ] }) : null
  ] }) });
}
const R0 = document.getElementById("word-sort-root");
if (!R0)
  throw new Error("Word Sort export root element was not found.");
document.title = "Word Sort Solitaire | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("word-sort-export-body");
oy.createRoot(R0).render(/* @__PURE__ */ Q.jsx(Uy, {}));
