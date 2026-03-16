var Yf = { exports: {} }, Yu = {};
var Pd;
function Kh() {
  if (Pd) return Yu;
  Pd = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(r, f, U) {
    var z = null;
    if (U !== void 0 && (z = "" + U), f.key !== void 0 && (z = "" + f.key), "key" in f) {
      U = {};
      for (var G in f)
        G !== "key" && (U[G] = f[G]);
    } else U = f;
    return f = U.ref, {
      $$typeof: i,
      type: r,
      key: z,
      ref: f !== void 0 ? f : null,
      props: U
    };
  }
  return Yu.Fragment = s, Yu.jsx = h, Yu.jsxs = h, Yu;
}
var l0;
function Jh() {
  return l0 || (l0 = 1, Yf.exports = Kh()), Yf.exports;
}
var Z = Jh(), xf = { exports: {} }, xu = {}, Gf = { exports: {} }, Xf = {};
var e0;
function kh() {
  return e0 || (e0 = 1, (function(i) {
    function s(O, _) {
      var k = O.length;
      O.push(_);
      l: for (; 0 < k; ) {
        var sl = k - 1 >>> 1, dl = O[sl];
        if (0 < f(dl, _))
          O[sl] = _, O[k] = dl, k = sl;
        else break l;
      }
    }
    function h(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var _ = O[0], k = O.pop();
      if (k !== _) {
        O[0] = k;
        l: for (var sl = 0, dl = O.length, m = dl >>> 1; sl < m; ) {
          var H = 2 * (sl + 1) - 1, x = O[H], g = H + 1, R = O[g];
          if (0 > f(x, k))
            g < dl && 0 > f(R, x) ? (O[sl] = R, O[g] = k, sl = g) : (O[sl] = x, O[H] = k, sl = H);
          else if (g < dl && 0 > f(R, k))
            O[sl] = R, O[g] = k, sl = g;
          else break l;
        }
      }
      return _;
    }
    function f(O, _) {
      var k = O.sortIndex - _.sortIndex;
      return k !== 0 ? k : O.id - _.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      i.unstable_now = function() {
        return U.now();
      };
    } else {
      var z = Date, G = z.now();
      i.unstable_now = function() {
        return z.now() - G;
      };
    }
    var B = [], M = [], j = 1, A = null, Y = 3, w = !1, I = !1, el = !1, Cl = !1, cl = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, Ol = typeof setImmediate < "u" ? setImmediate : null;
    function Dl(O) {
      for (var _ = h(M); _ !== null; ) {
        if (_.callback === null) r(M);
        else if (_.startTime <= O)
          r(M), _.sortIndex = _.expirationTime, s(B, _);
        else break;
        _ = h(M);
      }
    }
    function le(O) {
      if (el = !1, Dl(O), !I)
        if (h(B) !== null)
          I = !0, Nl || (Nl = !0, Il());
        else {
          var _ = h(M);
          _ !== null && pl(le, _.startTime - O);
        }
    }
    var Nl = !1, P = -1, Kl = 5, re = -1;
    function Qe() {
      return Cl ? !0 : !(i.unstable_now() - re < Kl);
    }
    function Te() {
      if (Cl = !1, Nl) {
        var O = i.unstable_now();
        re = O;
        var _ = !0;
        try {
          l: {
            I = !1, el && (el = !1, Tl(P), P = -1), w = !0;
            var k = Y;
            try {
              e: {
                for (Dl(O), A = h(B); A !== null && !(A.expirationTime > O && Qe()); ) {
                  var sl = A.callback;
                  if (typeof sl == "function") {
                    A.callback = null, Y = A.priorityLevel;
                    var dl = sl(
                      A.expirationTime <= O
                    );
                    if (O = i.unstable_now(), typeof dl == "function") {
                      A.callback = dl, Dl(O), _ = !0;
                      break e;
                    }
                    A === h(B) && r(B), Dl(O);
                  } else r(B);
                  A = h(B);
                }
                if (A !== null) _ = !0;
                else {
                  var m = h(M);
                  m !== null && pl(
                    le,
                    m.startTime - O
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              A = null, Y = k, w = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Il() : Nl = !1;
        }
      }
    }
    var Il;
    if (typeof Ol == "function")
      Il = function() {
        Ol(Te);
      };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), Re = Ze.port2;
      Ze.port1.onmessage = Te, Il = function() {
        Re.postMessage(null);
      };
    } else
      Il = function() {
        cl(Te, 0);
      };
    function pl(O, _) {
      P = cl(function() {
        O(i.unstable_now());
      }, _);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, i.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Kl = 0 < O ? Math.floor(1e3 / O) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, i.unstable_next = function(O) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = Y;
      }
      var k = Y;
      Y = _;
      try {
        return O();
      } finally {
        Y = k;
      }
    }, i.unstable_requestPaint = function() {
      Cl = !0;
    }, i.unstable_runWithPriority = function(O, _) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var k = Y;
      Y = O;
      try {
        return _();
      } finally {
        Y = k;
      }
    }, i.unstable_scheduleCallback = function(O, _, k) {
      var sl = i.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? sl + k : sl) : k = sl, O) {
        case 1:
          var dl = -1;
          break;
        case 2:
          dl = 250;
          break;
        case 5:
          dl = 1073741823;
          break;
        case 4:
          dl = 1e4;
          break;
        default:
          dl = 5e3;
      }
      return dl = k + dl, O = {
        id: j++,
        callback: _,
        priorityLevel: O,
        startTime: k,
        expirationTime: dl,
        sortIndex: -1
      }, k > sl ? (O.sortIndex = k, s(M, O), h(B) === null && O === h(M) && (el ? (Tl(P), P = -1) : el = !0, pl(le, k - sl))) : (O.sortIndex = dl, s(B, O), I || w || (I = !0, Nl || (Nl = !0, Il()))), O;
    }, i.unstable_shouldYield = Qe, i.unstable_wrapCallback = function(O) {
      var _ = Y;
      return function() {
        var k = Y;
        Y = _;
        try {
          return O.apply(this, arguments);
        } finally {
          Y = k;
        }
      };
    };
  })(Xf)), Xf;
}
var t0;
function Wh() {
  return t0 || (t0 = 1, Gf.exports = kh()), Gf.exports;
}
var Lf = { exports: {} }, W = {};
var n0;
function $h() {
  if (n0) return W;
  n0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function w(m) {
    return m === null || typeof m != "object" ? null : (m = Y && m[Y] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var I = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, el = Object.assign, Cl = {};
  function cl(m, H, x) {
    this.props = m, this.context = H, this.refs = Cl, this.updater = x || I;
  }
  cl.prototype.isReactComponent = {}, cl.prototype.setState = function(m, H) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, H, "setState");
  }, cl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = cl.prototype;
  function Ol(m, H, x) {
    this.props = m, this.context = H, this.refs = Cl, this.updater = x || I;
  }
  var Dl = Ol.prototype = new Tl();
  Dl.constructor = Ol, el(Dl, cl.prototype), Dl.isPureReactComponent = !0;
  var le = Array.isArray;
  function Nl() {
  }
  var P = { H: null, A: null, T: null, S: null }, Kl = Object.prototype.hasOwnProperty;
  function re(m, H, x) {
    var g = x.ref;
    return {
      $$typeof: i,
      type: m,
      key: H,
      ref: g !== void 0 ? g : null,
      props: x
    };
  }
  function Qe(m, H) {
    return re(m.type, H, m.props);
  }
  function Te(m) {
    return typeof m == "object" && m !== null && m.$$typeof === i;
  }
  function Il(m) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(x) {
      return H[x];
    });
  }
  var Ze = /\/+/g;
  function Re(m, H) {
    return typeof m == "object" && m !== null && m.key != null ? Il("" + m.key) : H.toString(36);
  }
  function pl(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(Nl, Nl) : (m.status = "pending", m.then(
          function(H) {
            m.status === "pending" && (m.status = "fulfilled", m.value = H);
          },
          function(H) {
            m.status === "pending" && (m.status = "rejected", m.reason = H);
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
  function O(m, H, x, g, R) {
    var T = typeof m;
    (T === "undefined" || T === "boolean") && (m = null);
    var q = !1;
    if (m === null) q = !0;
    else
      switch (T) {
        case "bigint":
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case i:
            case s:
              q = !0;
              break;
            case j:
              return q = m._init, O(
                q(m._payload),
                H,
                x,
                g,
                R
              );
          }
      }
    if (q)
      return R = R(m), q = g === "" ? "." + Re(m, 0) : g, le(R) ? (x = "", q != null && (x = q.replace(Ze, "$&/") + "/"), O(R, H, x, "", function($) {
        return $;
      })) : R != null && (Te(R) && (R = Qe(
        R,
        x + (R.key == null || m && m.key === R.key ? "" : ("" + R.key).replace(
          Ze,
          "$&/"
        ) + "/") + q
      )), H.push(R)), 1;
    q = 0;
    var X = g === "" ? "." : g + ":";
    if (le(m))
      for (var Q = 0; Q < m.length; Q++)
        g = m[Q], T = X + Re(g, Q), q += O(
          g,
          H,
          x,
          T,
          R
        );
    else if (Q = w(m), typeof Q == "function")
      for (m = Q.call(m), Q = 0; !(g = m.next()).done; )
        g = g.value, T = X + Re(g, Q++), q += O(
          g,
          H,
          x,
          T,
          R
        );
    else if (T === "object") {
      if (typeof m.then == "function")
        return O(
          pl(m),
          H,
          x,
          g,
          R
        );
      throw H = String(m), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return q;
  }
  function _(m, H, x) {
    if (m == null) return m;
    var g = [], R = 0;
    return O(m, g, "", "", function(T) {
      return H.call(x, T, R++);
    }), g;
  }
  function k(m) {
    if (m._status === -1) {
      var H = m._result;
      H = H(), H.then(
        function(x) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = x);
        },
        function(x) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = x);
        }
      ), m._status === -1 && (m._status = 0, m._result = H);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var sl = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, dl = {
    map: _,
    forEach: function(m, H, x) {
      _(
        m,
        function() {
          H.apply(this, arguments);
        },
        x
      );
    },
    count: function(m) {
      var H = 0;
      return _(m, function() {
        H++;
      }), H;
    },
    toArray: function(m) {
      return _(m, function(H) {
        return H;
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
  return W.Activity = A, W.Children = dl, W.Component = cl, W.Fragment = h, W.Profiler = f, W.PureComponent = Ol, W.StrictMode = r, W.Suspense = B, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return P.H.useMemoCache(m);
    }
  }, W.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(m, H, x) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var g = el({}, m.props), R = m.key;
    if (H != null)
      for (T in H.key !== void 0 && (R = "" + H.key), H)
        !Kl.call(H, T) || T === "key" || T === "__self" || T === "__source" || T === "ref" && H.ref === void 0 || (g[T] = H[T]);
    var T = arguments.length - 2;
    if (T === 1) g.children = x;
    else if (1 < T) {
      for (var q = Array(T), X = 0; X < T; X++)
        q[X] = arguments[X + 2];
      g.children = q;
    }
    return re(m.type, R, g);
  }, W.createContext = function(m) {
    return m = {
      $$typeof: z,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: U,
      _context: m
    }, m;
  }, W.createElement = function(m, H, x) {
    var g, R = {}, T = null;
    if (H != null)
      for (g in H.key !== void 0 && (T = "" + H.key), H)
        Kl.call(H, g) && g !== "key" && g !== "__self" && g !== "__source" && (R[g] = H[g]);
    var q = arguments.length - 2;
    if (q === 1) R.children = x;
    else if (1 < q) {
      for (var X = Array(q), Q = 0; Q < q; Q++)
        X[Q] = arguments[Q + 2];
      R.children = X;
    }
    if (m && m.defaultProps)
      for (g in q = m.defaultProps, q)
        R[g] === void 0 && (R[g] = q[g]);
    return re(m, T, R);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(m) {
    return { $$typeof: G, render: m };
  }, W.isValidElement = Te, W.lazy = function(m) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: m },
      _init: k
    };
  }, W.memo = function(m, H) {
    return {
      $$typeof: M,
      type: m,
      compare: H === void 0 ? null : H
    };
  }, W.startTransition = function(m) {
    var H = P.T, x = {};
    P.T = x;
    try {
      var g = m(), R = P.S;
      R !== null && R(x, g), typeof g == "object" && g !== null && typeof g.then == "function" && g.then(Nl, sl);
    } catch (T) {
      sl(T);
    } finally {
      H !== null && x.types !== null && (H.types = x.types), P.T = H;
    }
  }, W.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, W.use = function(m) {
    return P.H.use(m);
  }, W.useActionState = function(m, H, x) {
    return P.H.useActionState(m, H, x);
  }, W.useCallback = function(m, H) {
    return P.H.useCallback(m, H);
  }, W.useContext = function(m) {
    return P.H.useContext(m);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(m, H) {
    return P.H.useDeferredValue(m, H);
  }, W.useEffect = function(m, H) {
    return P.H.useEffect(m, H);
  }, W.useEffectEvent = function(m) {
    return P.H.useEffectEvent(m);
  }, W.useId = function() {
    return P.H.useId();
  }, W.useImperativeHandle = function(m, H, x) {
    return P.H.useImperativeHandle(m, H, x);
  }, W.useInsertionEffect = function(m, H) {
    return P.H.useInsertionEffect(m, H);
  }, W.useLayoutEffect = function(m, H) {
    return P.H.useLayoutEffect(m, H);
  }, W.useMemo = function(m, H) {
    return P.H.useMemo(m, H);
  }, W.useOptimistic = function(m, H) {
    return P.H.useOptimistic(m, H);
  }, W.useReducer = function(m, H, x) {
    return P.H.useReducer(m, H, x);
  }, W.useRef = function(m) {
    return P.H.useRef(m);
  }, W.useState = function(m) {
    return P.H.useState(m);
  }, W.useSyncExternalStore = function(m, H, x) {
    return P.H.useSyncExternalStore(
      m,
      H,
      x
    );
  }, W.useTransition = function() {
    return P.H.useTransition();
  }, W.version = "19.2.4", W;
}
var u0;
function kf() {
  return u0 || (u0 = 1, Lf.exports = $h()), Lf.exports;
}
var Qf = { exports: {} }, Pl = {};
var a0;
function Fh() {
  if (a0) return Pl;
  a0 = 1;
  var i = kf();
  function s(B) {
    var M = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      M += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        M += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + B + "; visit " + M + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function U(B, M, j) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: A == null ? null : "" + A,
      children: B,
      containerInfo: M,
      implementation: j
    };
  }
  var z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(B, M) {
    if (B === "font") return "";
    if (typeof M == "string")
      return M === "use-credentials" ? M : "";
  }
  return Pl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pl.createPortal = function(B, M) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
      throw Error(s(299));
    return U(B, M, null, j);
  }, Pl.flushSync = function(B) {
    var M = z.T, j = r.p;
    try {
      if (z.T = null, r.p = 2, B) return B();
    } finally {
      z.T = M, r.p = j, r.d.f();
    }
  }, Pl.preconnect = function(B, M) {
    typeof B == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, r.d.C(B, M));
  }, Pl.prefetchDNS = function(B) {
    typeof B == "string" && r.d.D(B);
  }, Pl.preinit = function(B, M) {
    if (typeof B == "string" && M && typeof M.as == "string") {
      var j = M.as, A = G(j, M.crossOrigin), Y = typeof M.integrity == "string" ? M.integrity : void 0, w = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
      j === "style" ? r.d.S(
        B,
        typeof M.precedence == "string" ? M.precedence : void 0,
        {
          crossOrigin: A,
          integrity: Y,
          fetchPriority: w
        }
      ) : j === "script" && r.d.X(B, {
        crossOrigin: A,
        integrity: Y,
        fetchPriority: w,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      });
    }
  }, Pl.preinitModule = function(B, M) {
    if (typeof B == "string")
      if (typeof M == "object" && M !== null) {
        if (M.as == null || M.as === "script") {
          var j = G(
            M.as,
            M.crossOrigin
          );
          r.d.M(B, {
            crossOrigin: j,
            integrity: typeof M.integrity == "string" ? M.integrity : void 0,
            nonce: typeof M.nonce == "string" ? M.nonce : void 0
          });
        }
      } else M == null && r.d.M(B);
  }, Pl.preload = function(B, M) {
    if (typeof B == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
      var j = M.as, A = G(j, M.crossOrigin);
      r.d.L(B, j, {
        crossOrigin: A,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0,
        type: typeof M.type == "string" ? M.type : void 0,
        fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
        referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
        imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
        imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
        media: typeof M.media == "string" ? M.media : void 0
      });
    }
  }, Pl.preloadModule = function(B, M) {
    if (typeof B == "string")
      if (M) {
        var j = G(M.as, M.crossOrigin);
        r.d.m(B, {
          as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
          crossOrigin: j,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0
        });
      } else r.d.m(B);
  }, Pl.requestFormReset = function(B) {
    r.d.r(B);
  }, Pl.unstable_batchedUpdates = function(B, M) {
    return B(M);
  }, Pl.useFormState = function(B, M, j) {
    return z.H.useFormState(B, M, j);
  }, Pl.useFormStatus = function() {
    return z.H.useHostTransitionStatus();
  }, Pl.version = "19.2.4", Pl;
}
var i0;
function Ih() {
  if (i0) return Qf.exports;
  i0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), Qf.exports = Fh(), Qf.exports;
}
var c0;
function Ph() {
  if (c0) return xu;
  c0 = 1;
  var i = Wh(), s = kf(), h = Ih();
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
  function U(l) {
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
  function G(l) {
    if (l.tag === 31) {
      var e = l.memoizedState;
      if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function B(l) {
    if (U(l) !== l)
      throw Error(r(188));
  }
  function M(l) {
    var e = l.alternate;
    if (!e) {
      if (e = U(l), e === null) throw Error(r(188));
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
          if (a === t) return B(u), l;
          if (a === n) return B(u), e;
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
  function j(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l;
    for (l = l.child; l !== null; ) {
      if (e = j(l), e !== null) return e;
      l = l.sibling;
    }
    return null;
  }
  var A = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), el = /* @__PURE__ */ Symbol.for("react.fragment"), Cl = /* @__PURE__ */ Symbol.for("react.strict_mode"), cl = /* @__PURE__ */ Symbol.for("react.profiler"), Tl = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), Dl = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), Nl = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), Kl = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Qe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
  function Il(l) {
    return l === null || typeof l != "object" ? null : (l = Te && l[Te] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Re(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ze ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case el:
        return "Fragment";
      case cl:
        return "Profiler";
      case Cl:
        return "StrictMode";
      case le:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case I:
          return "Portal";
        case Ol:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Dl:
          var e = l.render;
          return l = l.displayName, l || (l = e.displayName || e.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case P:
          return e = l.displayName || null, e !== null ? e : Re(l.type) || "Memo";
        case Kl:
          e = l._payload, l = l._init;
          try {
            return Re(l(e));
          } catch {
          }
      }
    return null;
  }
  var pl = Array.isArray, O = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, sl = [], dl = -1;
  function m(l) {
    return { current: l };
  }
  function H(l) {
    0 > dl || (l.current = sl[dl], sl[dl] = null, dl--);
  }
  function x(l, e) {
    dl++, sl[dl] = l.current, l.current = e;
  }
  var g = m(null), R = m(null), T = m(null), q = m(null);
  function X(l, e) {
    switch (x(T, e), x(R, l), x(g, null), e.nodeType) {
      case 9:
      case 11:
        l = (l = e.documentElement) && (l = l.namespaceURI) ? zd(l) : 0;
        break;
      default:
        if (l = e.tagName, e = e.namespaceURI)
          e = zd(e), l = Ad(e, l);
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
    H(g), x(g, l);
  }
  function Q() {
    H(g), H(R), H(T);
  }
  function $(l) {
    l.memoizedState !== null && x(q, l);
    var e = g.current, t = Ad(e, l.type);
    e !== t && (x(R, l), x(g, t));
  }
  function _l(l) {
    R.current === l && (H(g), H(R)), q.current === l && (H(q), Bu._currentValue = k);
  }
  var zl, te;
  function qt(l) {
    if (zl === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        zl = e && e[1] || "", te = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zl + l + te;
  }
  var pi = !1;
  function Ti(l, e) {
    if (!l || pi) return "";
    pi = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (E) {
                  var p = E;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (E) {
                  p = E;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                p = E;
              }
              (N = l()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (E) {
            if (E && p && typeof E.stack == "string")
              return [E.stack, p.stack];
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
                  var C = `
` + d[n].replace(" at new ", " at ");
                  return l.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", l.displayName)), C;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      pi = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? qt(t) : "";
  }
  function A0(l, e) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return qt(l.type);
      case 16:
        return qt("Lazy");
      case 13:
        return l.child !== e && e !== null ? qt("Suspense Fallback") : qt("Suspense");
      case 19:
        return qt("SuspenseList");
      case 0:
      case 15:
        return Ti(l.type, !1);
      case 11:
        return Ti(l.type.render, !1);
      case 1:
        return Ti(l.type, !0);
      case 31:
        return qt("Activity");
      default:
        return "";
    }
  }
  function If(l) {
    try {
      var e = "", t = null;
      do
        e += A0(l, t), t = l, l = l.return;
      while (l);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var zi = Object.prototype.hasOwnProperty, Ai = i.unstable_scheduleCallback, Ei = i.unstable_cancelCallback, E0 = i.unstable_shouldYield, O0 = i.unstable_requestPaint, se = i.unstable_now, M0 = i.unstable_getCurrentPriorityLevel, Pf = i.unstable_ImmediatePriority, lo = i.unstable_UserBlockingPriority, Lu = i.unstable_NormalPriority, C0 = i.unstable_LowPriority, eo = i.unstable_IdlePriority, _0 = i.log, D0 = i.unstable_setDisableYieldValue, Kn = null, de = null;
  function st(l) {
    if (typeof _0 == "function" && D0(l), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(Kn, l);
      } catch {
      }
  }
  var he = Math.clz32 ? Math.clz32 : R0, U0 = Math.log, H0 = Math.LN2;
  function R0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (U0(l) / H0 | 0) | 0;
  }
  var Qu = 256, Zu = 262144, Vu = 4194304;
  function Yt(l) {
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
  function Ku(l, e, t) {
    var n = l.pendingLanes;
    if (n === 0) return 0;
    var u = 0, a = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~a, n !== 0 ? u = Yt(n) : (c &= o, c !== 0 ? u = Yt(c) : t || (t = o & ~l, t !== 0 && (u = Yt(t))))) : (o = n & ~a, o !== 0 ? u = Yt(o) : c !== 0 ? u = Yt(c) : t || (t = n & ~l, t !== 0 && (u = Yt(t)))), u === 0 ? 0 : e !== 0 && e !== u && (e & a) === 0 && (a = u & -u, t = e & -e, a >= t || a === 32 && (t & 4194048) !== 0) ? e : u;
  }
  function Jn(l, e) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0;
  }
  function N0(l, e) {
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
  function to() {
    var l = Vu;
    return Vu <<= 1, (Vu & 62914560) === 0 && (Vu = 4194304), l;
  }
  function Oi(l) {
    for (var e = [], t = 0; 31 > t; t++) e.push(l);
    return e;
  }
  function kn(l, e) {
    l.pendingLanes |= e, e !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function B0(l, e, t, n, u, a) {
    var c = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var o = l.entanglements, d = l.expirationTimes, b = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var C = 31 - he(t), N = 1 << C;
      o[C] = 0, d[C] = -1;
      var p = b[C];
      if (p !== null)
        for (b[C] = null, C = 0; C < p.length; C++) {
          var E = p[C];
          E !== null && (E.lane &= -536870913);
        }
      t &= ~N;
    }
    n !== 0 && no(l, n, 0), a !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= a & ~(c & ~e));
  }
  function no(l, e, t) {
    l.pendingLanes |= e, l.suspendedLanes &= ~e;
    var n = 31 - he(e);
    l.entangledLanes |= e, l.entanglements[n] = l.entanglements[n] | 1073741824 | t & 261930;
  }
  function uo(l, e) {
    var t = l.entangledLanes |= e;
    for (l = l.entanglements; t; ) {
      var n = 31 - he(t), u = 1 << n;
      u & e | l[n] & e && (l[n] |= e), t &= ~u;
    }
  }
  function ao(l, e) {
    var t = e & -e;
    return t = (t & 42) !== 0 ? 1 : Mi(t), (t & (l.suspendedLanes | e)) !== 0 ? 0 : t;
  }
  function Mi(l) {
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
  function Ci(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function io() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Kd(l.type));
  }
  function co(l, e) {
    var t = _.p;
    try {
      return _.p = l, e();
    } finally {
      _.p = t;
    }
  }
  var dt = Math.random().toString(36).slice(2), Jl = "__reactFiber$" + dt, ne = "__reactProps$" + dt, nn = "__reactContainer$" + dt, _i = "__reactEvents$" + dt, w0 = "__reactListeners$" + dt, j0 = "__reactHandles$" + dt, fo = "__reactResources$" + dt, Wn = "__reactMarker$" + dt;
  function Di(l) {
    delete l[Jl], delete l[ne], delete l[_i], delete l[w0], delete l[j0];
  }
  function un(l) {
    var e = l[Jl];
    if (e) return e;
    for (var t = l.parentNode; t; ) {
      if (e = t[nn] || t[Jl]) {
        if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
          for (l = Ud(l); l !== null; ) {
            if (t = l[Jl]) return t;
            l = Ud(l);
          }
        return e;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function an(l) {
    if (l = l[Jl] || l[nn]) {
      var e = l.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return l;
    }
    return null;
  }
  function $n(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
    throw Error(r(33));
  }
  function cn(l) {
    var e = l[fo];
    return e || (e = l[fo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Zl(l) {
    l[Wn] = !0;
  }
  var oo = /* @__PURE__ */ new Set(), ro = {};
  function xt(l, e) {
    fn(l, e), fn(l + "Capture", e);
  }
  function fn(l, e) {
    for (ro[l] = e, l = 0; l < e.length; l++)
      oo.add(e[l]);
  }
  var q0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), so = {}, ho = {};
  function Y0(l) {
    return zi.call(ho, l) ? !0 : zi.call(so, l) ? !1 : q0.test(l) ? ho[l] = !0 : (so[l] = !0, !1);
  }
  function Ju(l, e, t) {
    if (Y0(e))
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
  function ku(l, e, t) {
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
  function Ve(l, e, t, n) {
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
  function ze(l) {
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
  function yo(l) {
    var e = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function x0(l, e, t) {
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
  function Ui(l) {
    if (!l._valueTracker) {
      var e = yo(l) ? "checked" : "value";
      l._valueTracker = x0(
        l,
        e,
        "" + l[e]
      );
    }
  }
  function mo(l) {
    if (!l) return !1;
    var e = l._valueTracker;
    if (!e) return !0;
    var t = e.getValue(), n = "";
    return l && (n = yo(l) ? l.checked ? "true" : "false" : l.value), l = n, l !== t ? (e.setValue(l), !0) : !1;
  }
  function Wu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var G0 = /[\n"\\]/g;
  function Ae(l) {
    return l.replace(
      G0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hi(l, e, t, n, u, a, c, o) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && l.value === "" || l.value != e) && (l.value = "" + ze(e)) : l.value !== "" + ze(e) && (l.value = "" + ze(e)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), e != null ? Ri(l, c, ze(e)) : t != null ? Ri(l, c, ze(t)) : n != null && l.removeAttribute("value"), u == null && a != null && (l.defaultChecked = !!a), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? l.name = "" + ze(o) : l.removeAttribute("name");
  }
  function vo(l, e, t, n, u, a, c, o) {
    if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (l.type = a), e != null || t != null) {
      if (!(a !== "submit" && a !== "reset" || e != null)) {
        Ui(l);
        return;
      }
      t = t != null ? "" + ze(t) : "", e = e != null ? "" + ze(e) : t, o || e === l.value || (l.value = e), l.defaultValue = e;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, l.checked = o ? l.checked : !!n, l.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), Ui(l);
  }
  function Ri(l, e, t) {
    e === "number" && Wu(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function on(l, e, t, n) {
    if (l = l.options, e) {
      e = {};
      for (var u = 0; u < t.length; u++)
        e["$" + t[u]] = !0;
      for (t = 0; t < l.length; t++)
        u = e.hasOwnProperty("$" + l[t].value), l[t].selected !== u && (l[t].selected = u), u && n && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + ze(t), e = null, u = 0; u < l.length; u++) {
        if (l[u].value === t) {
          l[u].selected = !0, n && (l[u].defaultSelected = !0);
          return;
        }
        e !== null || l[u].disabled || (e = l[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function go(l, e, t) {
    if (e != null && (e = "" + ze(e), e !== l.value && (l.value = e), t == null)) {
      l.defaultValue !== e && (l.defaultValue = e);
      return;
    }
    l.defaultValue = t != null ? "" + ze(t) : "";
  }
  function So(l, e, t, n) {
    if (e == null) {
      if (n != null) {
        if (t != null) throw Error(r(92));
        if (pl(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), e = t;
    }
    t = ze(e), l.defaultValue = t, n = l.textContent, n === t && n !== "" && n !== null && (l.value = n), Ui(l);
  }
  function rn(l, e) {
    if (e) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    l.textContent = e;
  }
  var X0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bo(l, e, t) {
    var n = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "" : n ? l.setProperty(e, t) : typeof t != "number" || t === 0 || X0.has(e) ? e === "float" ? l.cssFloat = t : l[e] = ("" + t).trim() : l[e] = t + "px";
  }
  function po(l, e, t) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (l = l.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "");
      for (var u in e)
        n = e[u], e.hasOwnProperty(u) && t[u] !== n && bo(l, u, n);
    } else
      for (var a in e)
        e.hasOwnProperty(a) && bo(l, a, e[a]);
  }
  function Ni(l) {
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
  var L0 = /* @__PURE__ */ new Map([
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
  ]), Q0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $u(l) {
    return Q0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ke() {
  }
  var Bi = null;
  function wi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var sn = null, dn = null;
  function To(l) {
    var e = an(l);
    if (e && (l = e.stateNode)) {
      var t = l[ne] || null;
      l: switch (l = e.stateNode, e.type) {
        case "input":
          if (Hi(
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
              'input[name="' + Ae(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < t.length; e++) {
              var n = t[e];
              if (n !== l && n.form === l.form) {
                var u = n[ne] || null;
                if (!u) throw Error(r(90));
                Hi(
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
              n = t[e], n.form === l.form && mo(n);
          }
          break l;
        case "textarea":
          go(l, t.value, t.defaultValue);
          break l;
        case "select":
          e = t.value, e != null && on(l, !!t.multiple, e, !1);
      }
    }
  }
  var ji = !1;
  function zo(l, e, t) {
    if (ji) return l(e, t);
    ji = !0;
    try {
      var n = l(e);
      return n;
    } finally {
      if (ji = !1, (sn !== null || dn !== null) && (qa(), sn && (e = sn, l = dn, dn = sn = null, To(e), l)))
        for (e = 0; e < l.length; e++) To(l[e]);
    }
  }
  function Fn(l, e) {
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
  var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qi = !1;
  if (Je)
    try {
      var In = {};
      Object.defineProperty(In, "passive", {
        get: function() {
          qi = !0;
        }
      }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
    } catch {
      qi = !1;
    }
  var ht = null, Yi = null, Fu = null;
  function Ao() {
    if (Fu) return Fu;
    var l, e = Yi, t = e.length, n, u = "value" in ht ? ht.value : ht.textContent, a = u.length;
    for (l = 0; l < t && e[l] === u[l]; l++) ;
    var c = t - l;
    for (n = 1; n <= c && e[t - n] === u[a - n]; n++) ;
    return Fu = u.slice(l, 1 < n ? 1 - n : void 0);
  }
  function Iu(l) {
    var e = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && e === 13 && (l = 13)) : l = e, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Pu() {
    return !0;
  }
  function Eo() {
    return !1;
  }
  function ue(l) {
    function e(t, n, u, a, c) {
      this._reactName = t, this._targetInst = u, this.type = n, this.nativeEvent = a, this.target = c, this.currentTarget = null;
      for (var o in l)
        l.hasOwnProperty(o) && (t = l[o], this[o] = t ? t(a) : a[o]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Pu : Eo, this.isPropagationStopped = Eo, this;
    }
    return A(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Pu);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Pu);
      },
      persist: function() {
      },
      isPersistent: Pu
    }), e;
  }
  var Gt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, la = ue(Gt), Pn = A({}, Gt, { view: 0, detail: 0 }), Z0 = ue(Pn), xi, Gi, lu, ea = A({}, Pn, {
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
    getModifierState: Li,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== lu && (lu && l.type === "mousemove" ? (xi = l.screenX - lu.screenX, Gi = l.screenY - lu.screenY) : Gi = xi = 0, lu = l), xi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Gi;
    }
  }), Oo = ue(ea), V0 = A({}, ea, { dataTransfer: 0 }), K0 = ue(V0), J0 = A({}, Pn, { relatedTarget: 0 }), Xi = ue(J0), k0 = A({}, Gt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), W0 = ue(k0), $0 = A({}, Gt, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), F0 = ue($0), I0 = A({}, Gt, { data: 0 }), Mo = ue(I0), P0 = {
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
  }, l1 = {
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
  }, e1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function t1(l) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(l) : (l = e1[l]) ? !!e[l] : !1;
  }
  function Li() {
    return t1;
  }
  var n1 = A({}, Pn, {
    key: function(l) {
      if (l.key) {
        var e = P0[l.key] || l.key;
        if (e !== "Unidentified") return e;
      }
      return l.type === "keypress" ? (l = Iu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? l1[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Li,
    charCode: function(l) {
      return l.type === "keypress" ? Iu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Iu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), u1 = ue(n1), a1 = A({}, ea, {
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
  }), Co = ue(a1), i1 = A({}, Pn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Li
  }), c1 = ue(i1), f1 = A({}, Gt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), o1 = ue(f1), r1 = A({}, ea, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), s1 = ue(r1), d1 = A({}, Gt, {
    newState: 0,
    oldState: 0
  }), h1 = ue(d1), y1 = [9, 13, 27, 32], Qi = Je && "CompositionEvent" in window, eu = null;
  Je && "documentMode" in document && (eu = document.documentMode);
  var m1 = Je && "TextEvent" in window && !eu, _o = Je && (!Qi || eu && 8 < eu && 11 >= eu), Do = " ", Uo = !1;
  function Ho(l, e) {
    switch (l) {
      case "keyup":
        return y1.indexOf(e.keyCode) !== -1;
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
  function Ro(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var hn = !1;
  function v1(l, e) {
    switch (l) {
      case "compositionend":
        return Ro(e);
      case "keypress":
        return e.which !== 32 ? null : (Uo = !0, Do);
      case "textInput":
        return l = e.data, l === Do && Uo ? null : l;
      default:
        return null;
    }
  }
  function g1(l, e) {
    if (hn)
      return l === "compositionend" || !Qi && Ho(l, e) ? (l = Ao(), Fu = Yi = ht = null, hn = !1, l) : null;
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
        return _o && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var S1 = {
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
  function No(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e === "input" ? !!S1[l.type] : e === "textarea";
  }
  function Bo(l, e, t, n) {
    sn ? dn ? dn.push(n) : dn = [n] : sn = n, e = Za(e, "onChange"), 0 < e.length && (t = new la(
      "onChange",
      "change",
      null,
      t,
      n
    ), l.push({ event: t, listeners: e }));
  }
  var tu = null, nu = null;
  function b1(l) {
    vd(l, 0);
  }
  function ta(l) {
    var e = $n(l);
    if (mo(e)) return l;
  }
  function wo(l, e) {
    if (l === "change") return e;
  }
  var jo = !1;
  if (Je) {
    var Zi;
    if (Je) {
      var Vi = "oninput" in document;
      if (!Vi) {
        var qo = document.createElement("div");
        qo.setAttribute("oninput", "return;"), Vi = typeof qo.oninput == "function";
      }
      Zi = Vi;
    } else Zi = !1;
    jo = Zi && (!document.documentMode || 9 < document.documentMode);
  }
  function Yo() {
    tu && (tu.detachEvent("onpropertychange", xo), nu = tu = null);
  }
  function xo(l) {
    if (l.propertyName === "value" && ta(nu)) {
      var e = [];
      Bo(
        e,
        nu,
        l,
        wi(l)
      ), zo(b1, e);
    }
  }
  function p1(l, e, t) {
    l === "focusin" ? (Yo(), tu = e, nu = t, tu.attachEvent("onpropertychange", xo)) : l === "focusout" && Yo();
  }
  function T1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ta(nu);
  }
  function z1(l, e) {
    if (l === "click") return ta(e);
  }
  function A1(l, e) {
    if (l === "input" || l === "change")
      return ta(e);
  }
  function E1(l, e) {
    return l === e && (l !== 0 || 1 / l === 1 / e) || l !== l && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : E1;
  function uu(l, e) {
    if (ye(l, e)) return !0;
    if (typeof l != "object" || l === null || typeof e != "object" || e === null)
      return !1;
    var t = Object.keys(l), n = Object.keys(e);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var u = t[n];
      if (!zi.call(e, u) || !ye(l[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Go(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Xo(l, e) {
    var t = Go(l);
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
      t = Go(t);
    }
  }
  function Lo(l, e) {
    return l && e ? l === e ? !0 : l && l.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Lo(l, e.parentNode) : "contains" in l ? l.contains(e) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Qo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var e = Wu(l.document); e instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = e.contentWindow;
      else break;
      e = Wu(l.document);
    }
    return e;
  }
  function Ki(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e && (e === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || e === "textarea" || l.contentEditable === "true");
  }
  var O1 = Je && "documentMode" in document && 11 >= document.documentMode, yn = null, Ji = null, au = null, ki = !1;
  function Zo(l, e, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ki || yn == null || yn !== Wu(n) || (n = yn, "selectionStart" in n && Ki(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), au && uu(au, n) || (au = n, n = Za(Ji, "onSelect"), 0 < n.length && (e = new la(
      "onSelect",
      "select",
      null,
      e,
      t
    ), l.push({ event: e, listeners: n }), e.target = yn)));
  }
  function Xt(l, e) {
    var t = {};
    return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t;
  }
  var mn = {
    animationend: Xt("Animation", "AnimationEnd"),
    animationiteration: Xt("Animation", "AnimationIteration"),
    animationstart: Xt("Animation", "AnimationStart"),
    transitionrun: Xt("Transition", "TransitionRun"),
    transitionstart: Xt("Transition", "TransitionStart"),
    transitioncancel: Xt("Transition", "TransitionCancel"),
    transitionend: Xt("Transition", "TransitionEnd")
  }, Wi = {}, Vo = {};
  Je && (Vo = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
  function Lt(l) {
    if (Wi[l]) return Wi[l];
    if (!mn[l]) return l;
    var e = mn[l], t;
    for (t in e)
      if (e.hasOwnProperty(t) && t in Vo)
        return Wi[l] = e[t];
    return l;
  }
  var Ko = Lt("animationend"), Jo = Lt("animationiteration"), ko = Lt("animationstart"), M1 = Lt("transitionrun"), C1 = Lt("transitionstart"), _1 = Lt("transitioncancel"), Wo = Lt("transitionend"), $o = /* @__PURE__ */ new Map(), $i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $i.push("scrollEnd");
  function Ne(l, e) {
    $o.set(l, e), xt(e, [l]);
  }
  var na = typeof reportError == "function" ? reportError : function(l) {
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
  }, Ee = [], vn = 0, Fi = 0;
  function ua() {
    for (var l = vn, e = Fi = vn = 0; e < l; ) {
      var t = Ee[e];
      Ee[e++] = null;
      var n = Ee[e];
      Ee[e++] = null;
      var u = Ee[e];
      Ee[e++] = null;
      var a = Ee[e];
      if (Ee[e++] = null, n !== null && u !== null) {
        var c = n.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), n.pending = u;
      }
      a !== 0 && Fo(t, u, a);
    }
  }
  function aa(l, e, t, n) {
    Ee[vn++] = l, Ee[vn++] = e, Ee[vn++] = t, Ee[vn++] = n, Fi |= n, l.lanes |= n, l = l.alternate, l !== null && (l.lanes |= n);
  }
  function Ii(l, e, t, n) {
    return aa(l, e, t, n), ia(l);
  }
  function Qt(l, e) {
    return aa(l, null, null, e), ia(l);
  }
  function Fo(l, e, t) {
    l.lanes |= t;
    var n = l.alternate;
    n !== null && (n.lanes |= t);
    for (var u = !1, a = l.return; a !== null; )
      a.childLanes |= t, n = a.alternate, n !== null && (n.childLanes |= t), a.tag === 22 && (l = a.stateNode, l === null || l._visibility & 1 || (u = !0)), l = a, a = a.return;
    return l.tag === 3 ? (a = l.stateNode, u && e !== null && (u = 31 - he(t), l = a.hiddenUpdates, n = l[u], n === null ? l[u] = [e] : n.push(e), e.lane = t | 536870912), a) : null;
  }
  function ia(l) {
    if (50 < Cu)
      throw Cu = 0, ff = null, Error(r(185));
    for (var e = l.return; e !== null; )
      l = e, e = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var gn = {};
  function D1(l, e, t, n) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me(l, e, t, n) {
    return new D1(l, e, t, n);
  }
  function Pi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ke(l, e) {
    var t = l.alternate;
    return t === null ? (t = me(
      l.tag,
      e,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function Io(l, e) {
    l.flags &= 65011714;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), l;
  }
  function ca(l, e, t, n, u, a) {
    var c = 0;
    if (n = l, typeof l == "function") Pi(l) && (c = 1);
    else if (typeof l == "string")
      c = Bh(
        l,
        t,
        g.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case re:
          return l = me(31, t, e, u), l.elementType = re, l.lanes = a, l;
        case el:
          return Zt(t.children, u, a, e);
        case Cl:
          c = 8, u |= 24;
          break;
        case cl:
          return l = me(12, t, e, u | 2), l.elementType = cl, l.lanes = a, l;
        case le:
          return l = me(13, t, e, u), l.elementType = le, l.lanes = a, l;
        case Nl:
          return l = me(19, t, e, u), l.elementType = Nl, l.lanes = a, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ol:
                c = 10;
                break l;
              case Tl:
                c = 9;
                break l;
              case Dl:
                c = 11;
                break l;
              case P:
                c = 14;
                break l;
              case Kl:
                c = 16, n = null;
                break l;
            }
          c = 29, t = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), n = null;
      }
    return e = me(c, t, e, u), e.elementType = l, e.type = n, e.lanes = a, e;
  }
  function Zt(l, e, t, n) {
    return l = me(7, l, n, e), l.lanes = t, l;
  }
  function lc(l, e, t) {
    return l = me(6, l, null, e), l.lanes = t, l;
  }
  function Po(l) {
    var e = me(18, null, null, 0);
    return e.stateNode = l, e;
  }
  function ec(l, e, t) {
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
  var lr = /* @__PURE__ */ new WeakMap();
  function Oe(l, e) {
    if (typeof l == "object" && l !== null) {
      var t = lr.get(l);
      return t !== void 0 ? t : (e = {
        value: l,
        source: e,
        stack: If(e)
      }, lr.set(l, e), e);
    }
    return {
      value: l,
      source: e,
      stack: If(e)
    };
  }
  var Sn = [], bn = 0, fa = null, iu = 0, Me = [], Ce = 0, yt = null, Ye = 1, xe = "";
  function We(l, e) {
    Sn[bn++] = iu, Sn[bn++] = fa, fa = l, iu = e;
  }
  function er(l, e, t) {
    Me[Ce++] = Ye, Me[Ce++] = xe, Me[Ce++] = yt, yt = l;
    var n = Ye;
    l = xe;
    var u = 32 - he(n) - 1;
    n &= ~(1 << u), t += 1;
    var a = 32 - he(e) + u;
    if (30 < a) {
      var c = u - u % 5;
      a = (n & (1 << c) - 1).toString(32), n >>= c, u -= c, Ye = 1 << 32 - he(e) + u | t << u | n, xe = a + l;
    } else
      Ye = 1 << a | t << u | n, xe = l;
  }
  function tc(l) {
    l.return !== null && (We(l, 1), er(l, 1, 0));
  }
  function nc(l) {
    for (; l === fa; )
      fa = Sn[--bn], Sn[bn] = null, iu = Sn[--bn], Sn[bn] = null;
    for (; l === yt; )
      yt = Me[--Ce], Me[Ce] = null, xe = Me[--Ce], Me[Ce] = null, Ye = Me[--Ce], Me[Ce] = null;
  }
  function tr(l, e) {
    Me[Ce++] = Ye, Me[Ce++] = xe, Me[Ce++] = yt, Ye = e.id, xe = e.overflow, yt = l;
  }
  var kl = null, Al = null, il = !1, mt = null, _e = !1, uc = Error(r(519));
  function vt(l) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw cu(Oe(e, l)), uc;
  }
  function nr(l) {
    var e = l.stateNode, t = l.type, n = l.memoizedProps;
    switch (e[Jl] = l, e[ne] = n, t) {
      case "dialog":
        nl("cancel", e), nl("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nl("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Du.length; t++)
          nl(Du[t], e);
        break;
      case "source":
        nl("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nl("error", e), nl("load", e);
        break;
      case "details":
        nl("toggle", e);
        break;
      case "input":
        nl("invalid", e), vo(
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
        nl("invalid", e);
        break;
      case "textarea":
        nl("invalid", e), So(e, n.value, n.defaultValue, n.children);
    }
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || n.suppressHydrationWarning === !0 || pd(e.textContent, t) ? (n.popover != null && (nl("beforetoggle", e), nl("toggle", e)), n.onScroll != null && nl("scroll", e), n.onScrollEnd != null && nl("scrollend", e), n.onClick != null && (e.onclick = Ke), e = !0) : e = !1, e || vt(l, !0);
  }
  function ur(l) {
    for (kl = l.return; kl; )
      switch (kl.tag) {
        case 5:
        case 31:
        case 13:
          _e = !1;
          return;
        case 27:
        case 3:
          _e = !0;
          return;
        default:
          kl = kl.return;
      }
  }
  function pn(l) {
    if (l !== kl) return !1;
    if (!il) return ur(l), il = !0, !1;
    var e = l.tag, t;
    if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || Af(l.type, l.memoizedProps)), t = !t), t && Al && vt(l), ur(l), e === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Al = Dd(l);
    } else if (e === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Al = Dd(l);
    } else
      e === 27 ? (e = Al, Ut(l.type) ? (l = _f, _f = null, Al = l) : Al = e) : Al = kl ? Ue(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Vt() {
    Al = kl = null, il = !1;
  }
  function ac() {
    var l = mt;
    return l !== null && (fe === null ? fe = l : fe.push.apply(
      fe,
      l
    ), mt = null), l;
  }
  function cu(l) {
    mt === null ? mt = [l] : mt.push(l);
  }
  var ic = m(null), Kt = null, $e = null;
  function gt(l, e, t) {
    x(ic, e._currentValue), e._currentValue = t;
  }
  function Fe(l) {
    l._currentValue = ic.current, H(ic);
  }
  function cc(l, e, t) {
    for (; l !== null; ) {
      var n = l.alternate;
      if ((l.childLanes & e) !== e ? (l.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), l === t) break;
      l = l.return;
    }
  }
  function fc(l, e, t, n) {
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
              a.lanes |= t, o = a.alternate, o !== null && (o.lanes |= t), cc(
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
        c.lanes |= t, a = c.alternate, a !== null && (a.lanes |= t), cc(c, t, l), c = null;
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
  function Tn(l, e, t, n) {
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
      } else if (u === q.current) {
        if (c = u.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Bu) : l = [Bu]);
      }
      u = u.return;
    }
    l !== null && fc(
      e,
      l,
      t,
      n
    ), e.flags |= 262144;
  }
  function oa(l) {
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
  function Jt(l) {
    Kt = l, $e = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Wl(l) {
    return ar(Kt, l);
  }
  function ra(l, e) {
    return Kt === null && Jt(l), ar(l, e);
  }
  function ar(l, e) {
    var t = e._currentValue;
    if (e = { context: e, memoizedValue: t, next: null }, $e === null) {
      if (l === null) throw Error(r(308));
      $e = e, l.dependencies = { lanes: 0, firstContext: e }, l.flags |= 524288;
    } else $e = $e.next = e;
    return t;
  }
  var U1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, H1 = i.unstable_scheduleCallback, R1 = i.unstable_NormalPriority, Yl = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oc() {
    return {
      controller: new U1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function fu(l) {
    l.refCount--, l.refCount === 0 && H1(R1, function() {
      l.controller.abort();
    });
  }
  var ou = null, rc = 0, zn = 0, An = null;
  function N1(l, e) {
    if (ou === null) {
      var t = ou = [];
      rc = 0, zn = yf(), An = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return rc++, e.then(ir, ir), e;
  }
  function ir() {
    if (--rc === 0 && ou !== null) {
      An !== null && (An.status = "fulfilled");
      var l = ou;
      ou = null, zn = 0, An = null;
      for (var e = 0; e < l.length; e++) (0, l[e])();
    }
  }
  function B1(l, e) {
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
  var cr = O.S;
  O.S = function(l, e) {
    Zs = se(), typeof e == "object" && e !== null && typeof e.then == "function" && N1(l, e), cr !== null && cr(l, e);
  };
  var kt = m(null);
  function sc() {
    var l = kt.current;
    return l !== null ? l : bl.pooledCache;
  }
  function sa(l, e) {
    e === null ? x(kt, kt.current) : x(kt, e.pool);
  }
  function fr() {
    var l = sc();
    return l === null ? null : { parent: Yl._currentValue, pool: l };
  }
  var En = Error(r(460)), dc = Error(r(474)), da = Error(r(542)), ha = { then: function() {
  } };
  function or(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function rr(l, e, t) {
    switch (t = l[t], t === void 0 ? l.push(e) : t !== e && (e.then(Ke, Ke), e = t), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw l = e.reason, dr(l), l;
      default:
        if (typeof e.status == "string") e.then(Ke, Ke);
        else {
          if (l = bl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = e.reason, dr(l), l;
        }
        throw $t = e, En;
    }
  }
  function Wt(l) {
    try {
      var e = l._init;
      return e(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? ($t = t, En) : t;
    }
  }
  var $t = null;
  function sr() {
    if ($t === null) throw Error(r(459));
    var l = $t;
    return $t = null, l;
  }
  function dr(l) {
    if (l === En || l === da)
      throw Error(r(483));
  }
  var On = null, ru = 0;
  function ya(l) {
    var e = ru;
    return ru += 1, On === null && (On = []), rr(On, l, e);
  }
  function su(l, e) {
    e = e.props.ref, l.ref = e !== void 0 ? e : null;
  }
  function ma(l, e) {
    throw e.$$typeof === Y ? Error(r(525)) : (l = Object.prototype.toString.call(e), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : l
      )
    ));
  }
  function hr(l) {
    function e(v, y) {
      if (l) {
        var S = v.deletions;
        S === null ? (v.deletions = [y], v.flags |= 16) : S.push(y);
      }
    }
    function t(v, y) {
      if (!l) return null;
      for (; y !== null; )
        e(v, y), y = y.sibling;
      return null;
    }
    function n(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function u(v, y) {
      return v = ke(v, y), v.index = 0, v.sibling = null, v;
    }
    function a(v, y, S) {
      return v.index = S, l ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function c(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function o(v, y, S, D) {
      return y === null || y.tag !== 6 ? (y = lc(S, v.mode, D), y.return = v, y) : (y = u(y, S), y.return = v, y);
    }
    function d(v, y, S, D) {
      var K = S.type;
      return K === el ? C(
        v,
        y,
        S.props.children,
        D,
        S.key
      ) : y !== null && (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Kl && Wt(K) === y.type) ? (y = u(y, S.props), su(y, S), y.return = v, y) : (y = ca(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        D
      ), su(y, S), y.return = v, y);
    }
    function b(v, y, S, D) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = ec(S, v.mode, D), y.return = v, y) : (y = u(y, S.children || []), y.return = v, y);
    }
    function C(v, y, S, D, K) {
      return y === null || y.tag !== 7 ? (y = Zt(
        S,
        v.mode,
        D,
        K
      ), y.return = v, y) : (y = u(y, S), y.return = v, y);
    }
    function N(v, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = lc(
          "" + y,
          v.mode,
          S
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case w:
            return S = ca(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              S
            ), su(S, y), S.return = v, S;
          case I:
            return y = ec(
              y,
              v.mode,
              S
            ), y.return = v, y;
          case Kl:
            return y = Wt(y), N(v, y, S);
        }
        if (pl(y) || Il(y))
          return y = Zt(
            y,
            v.mode,
            S,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return N(v, ya(y), S);
        if (y.$$typeof === Ol)
          return N(
            v,
            ra(v, y),
            S
          );
        ma(v, y);
      }
      return null;
    }
    function p(v, y, S, D) {
      var K = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return K !== null ? null : o(v, y, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case w:
            return S.key === K ? d(v, y, S, D) : null;
          case I:
            return S.key === K ? b(v, y, S, D) : null;
          case Kl:
            return S = Wt(S), p(v, y, S, D);
        }
        if (pl(S) || Il(S))
          return K !== null ? null : C(v, y, S, D, null);
        if (typeof S.then == "function")
          return p(
            v,
            y,
            ya(S),
            D
          );
        if (S.$$typeof === Ol)
          return p(
            v,
            y,
            ra(v, S),
            D
          );
        ma(v, S);
      }
      return null;
    }
    function E(v, y, S, D, K) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return v = v.get(S) || null, o(y, v, "" + D, K);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            return v = v.get(
              D.key === null ? S : D.key
            ) || null, d(y, v, D, K);
          case I:
            return v = v.get(
              D.key === null ? S : D.key
            ) || null, b(y, v, D, K);
          case Kl:
            return D = Wt(D), E(
              v,
              y,
              S,
              D,
              K
            );
        }
        if (pl(D) || Il(D))
          return v = v.get(S) || null, C(y, v, D, K, null);
        if (typeof D.then == "function")
          return E(
            v,
            y,
            S,
            ya(D),
            K
          );
        if (D.$$typeof === Ol)
          return E(
            v,
            y,
            S,
            ra(y, D),
            K
          );
        ma(y, D);
      }
      return null;
    }
    function L(v, y, S, D) {
      for (var K = null, fl = null, V = y, ll = y = 0, al = null; V !== null && ll < S.length; ll++) {
        V.index > ll ? (al = V, V = null) : al = V.sibling;
        var ol = p(
          v,
          V,
          S[ll],
          D
        );
        if (ol === null) {
          V === null && (V = al);
          break;
        }
        l && V && ol.alternate === null && e(v, V), y = a(ol, y, ll), fl === null ? K = ol : fl.sibling = ol, fl = ol, V = al;
      }
      if (ll === S.length)
        return t(v, V), il && We(v, ll), K;
      if (V === null) {
        for (; ll < S.length; ll++)
          V = N(v, S[ll], D), V !== null && (y = a(
            V,
            y,
            ll
          ), fl === null ? K = V : fl.sibling = V, fl = V);
        return il && We(v, ll), K;
      }
      for (V = n(V); ll < S.length; ll++)
        al = E(
          V,
          v,
          ll,
          S[ll],
          D
        ), al !== null && (l && al.alternate !== null && V.delete(
          al.key === null ? ll : al.key
        ), y = a(
          al,
          y,
          ll
        ), fl === null ? K = al : fl.sibling = al, fl = al);
      return l && V.forEach(function(wt) {
        return e(v, wt);
      }), il && We(v, ll), K;
    }
    function J(v, y, S, D) {
      if (S == null) throw Error(r(151));
      for (var K = null, fl = null, V = y, ll = y = 0, al = null, ol = S.next(); V !== null && !ol.done; ll++, ol = S.next()) {
        V.index > ll ? (al = V, V = null) : al = V.sibling;
        var wt = p(v, V, ol.value, D);
        if (wt === null) {
          V === null && (V = al);
          break;
        }
        l && V && wt.alternate === null && e(v, V), y = a(wt, y, ll), fl === null ? K = wt : fl.sibling = wt, fl = wt, V = al;
      }
      if (ol.done)
        return t(v, V), il && We(v, ll), K;
      if (V === null) {
        for (; !ol.done; ll++, ol = S.next())
          ol = N(v, ol.value, D), ol !== null && (y = a(ol, y, ll), fl === null ? K = ol : fl.sibling = ol, fl = ol);
        return il && We(v, ll), K;
      }
      for (V = n(V); !ol.done; ll++, ol = S.next())
        ol = E(V, v, ll, ol.value, D), ol !== null && (l && ol.alternate !== null && V.delete(ol.key === null ? ll : ol.key), y = a(ol, y, ll), fl === null ? K = ol : fl.sibling = ol, fl = ol);
      return l && V.forEach(function(Vh) {
        return e(v, Vh);
      }), il && We(v, ll), K;
    }
    function gl(v, y, S, D) {
      if (typeof S == "object" && S !== null && S.type === el && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case w:
            l: {
              for (var K = S.key; y !== null; ) {
                if (y.key === K) {
                  if (K = S.type, K === el) {
                    if (y.tag === 7) {
                      t(
                        v,
                        y.sibling
                      ), D = u(
                        y,
                        S.props.children
                      ), D.return = v, v = D;
                      break l;
                    }
                  } else if (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Kl && Wt(K) === y.type) {
                    t(
                      v,
                      y.sibling
                    ), D = u(y, S.props), su(D, S), D.return = v, v = D;
                    break l;
                  }
                  t(v, y);
                  break;
                } else e(v, y);
                y = y.sibling;
              }
              S.type === el ? (D = Zt(
                S.props.children,
                v.mode,
                D,
                S.key
              ), D.return = v, v = D) : (D = ca(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                D
              ), su(D, S), D.return = v, v = D);
            }
            return c(v);
          case I:
            l: {
              for (K = S.key; y !== null; ) {
                if (y.key === K)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    t(
                      v,
                      y.sibling
                    ), D = u(y, S.children || []), D.return = v, v = D;
                    break l;
                  } else {
                    t(v, y);
                    break;
                  }
                else e(v, y);
                y = y.sibling;
              }
              D = ec(S, v.mode, D), D.return = v, v = D;
            }
            return c(v);
          case Kl:
            return S = Wt(S), gl(
              v,
              y,
              S,
              D
            );
        }
        if (pl(S))
          return L(
            v,
            y,
            S,
            D
          );
        if (Il(S)) {
          if (K = Il(S), typeof K != "function") throw Error(r(150));
          return S = K.call(S), J(
            v,
            y,
            S,
            D
          );
        }
        if (typeof S.then == "function")
          return gl(
            v,
            y,
            ya(S),
            D
          );
        if (S.$$typeof === Ol)
          return gl(
            v,
            y,
            ra(v, S),
            D
          );
        ma(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (t(v, y.sibling), D = u(y, S), D.return = v, v = D) : (t(v, y), D = lc(S, v.mode, D), D.return = v, v = D), c(v)) : t(v, y);
    }
    return function(v, y, S, D) {
      try {
        ru = 0;
        var K = gl(
          v,
          y,
          S,
          D
        );
        return On = null, K;
      } catch (V) {
        if (V === En || V === da) throw V;
        var fl = me(29, V, null, v.mode);
        return fl.lanes = D, fl.return = v, fl;
      }
    };
  }
  var Ft = hr(!0), yr = hr(!1), St = !1;
  function hc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function yc(l, e) {
    l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function bt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function pt(l, e, t) {
    var n = l.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (rl & 2) !== 0) {
      var u = n.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), n.pending = e, e = ia(l), Fo(l, null, t), e;
    }
    return aa(l, n, e, t), ia(l);
  }
  function du(l, e, t) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194048) !== 0)) {
      var n = e.lanes;
      n &= l.pendingLanes, t |= n, e.lanes = t, uo(l, t);
    }
  }
  function mc(l, e) {
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
  var vc = !1;
  function hu() {
    if (vc) {
      var l = An;
      if (l !== null) throw l;
    }
  }
  function yu(l, e, t, n) {
    vc = !1;
    var u = l.updateQueue;
    St = !1;
    var a = u.firstBaseUpdate, c = u.lastBaseUpdate, o = u.shared.pending;
    if (o !== null) {
      u.shared.pending = null;
      var d = o, b = d.next;
      d.next = null, c === null ? a = b : c.next = b, c = d;
      var C = l.alternate;
      C !== null && (C = C.updateQueue, o = C.lastBaseUpdate, o !== c && (o === null ? C.firstBaseUpdate = b : o.next = b, C.lastBaseUpdate = d));
    }
    if (a !== null) {
      var N = u.baseState;
      c = 0, C = b = d = null, o = a;
      do {
        var p = o.lane & -536870913, E = p !== o.lane;
        if (E ? (ul & p) === p : (n & p) === p) {
          p !== 0 && p === zn && (vc = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          l: {
            var L = l, J = o;
            p = e;
            var gl = t;
            switch (J.tag) {
              case 1:
                if (L = J.payload, typeof L == "function") {
                  N = L.call(gl, N, p);
                  break l;
                }
                N = L;
                break l;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = J.payload, p = typeof L == "function" ? L.call(gl, N, p) : L, p == null) break l;
                N = A({}, N, p);
                break l;
              case 2:
                St = !0;
            }
          }
          p = o.callback, p !== null && (l.flags |= 64, E && (l.flags |= 8192), E = u.callbacks, E === null ? u.callbacks = [p] : E.push(p));
        } else
          E = {
            lane: p,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, C === null ? (b = C = E, d = N) : C = C.next = E, c |= p;
        if (o = o.next, o === null) {
          if (o = u.shared.pending, o === null)
            break;
          E = o, o = E.next, E.next = null, u.lastBaseUpdate = E, u.shared.pending = null;
        }
      } while (!0);
      C === null && (d = N), u.baseState = d, u.firstBaseUpdate = b, u.lastBaseUpdate = C, a === null && (u.shared.lanes = 0), Ot |= c, l.lanes = c, l.memoizedState = N;
    }
  }
  function mr(l, e) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(e);
  }
  function vr(l, e) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        mr(t[l], e);
  }
  var Mn = m(null), va = m(0);
  function gr(l, e) {
    l = it, x(va, l), x(Mn, e), it = l | e.baseLanes;
  }
  function gc() {
    x(va, it), x(Mn, Mn.current);
  }
  function Sc() {
    it = va.current, H(Mn), H(va);
  }
  var ve = m(null), De = null;
  function Tt(l) {
    var e = l.alternate;
    x(Bl, Bl.current & 1), x(ve, l), De === null && (e === null || Mn.current !== null || e.memoizedState !== null) && (De = l);
  }
  function bc(l) {
    x(Bl, Bl.current), x(ve, l), De === null && (De = l);
  }
  function Sr(l) {
    l.tag === 22 ? (x(Bl, Bl.current), x(ve, l), De === null && (De = l)) : zt();
  }
  function zt() {
    x(Bl, Bl.current), x(ve, ve.current);
  }
  function ge(l) {
    H(ve), De === l && (De = null), H(Bl);
  }
  var Bl = m(0);
  function ga(l) {
    for (var e = l; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Mf(t) || Cf(t)))
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
  var Ie = 0, F = null, ml = null, xl = null, Sa = !1, Cn = !1, It = !1, ba = 0, mu = 0, _n = null, w1 = 0;
  function Ul() {
    throw Error(r(321));
  }
  function pc(l, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < l.length; t++)
      if (!ye(l[t], e[t])) return !1;
    return !0;
  }
  function Tc(l, e, t, n, u, a) {
    return Ie = a, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = l === null || l.memoizedState === null ? es : jc, It = !1, a = t(n, u), It = !1, Cn && (a = pr(
      e,
      t,
      n,
      u
    )), br(l), a;
  }
  function br(l) {
    O.H = Su;
    var e = ml !== null && ml.next !== null;
    if (Ie = 0, xl = ml = F = null, Sa = !1, mu = 0, _n = null, e) throw Error(r(300));
    l === null || Gl || (l = l.dependencies, l !== null && oa(l) && (Gl = !0));
  }
  function pr(l, e, t, n) {
    F = l;
    var u = 0;
    do {
      if (Cn && (_n = null), mu = 0, Cn = !1, 25 <= u) throw Error(r(301));
      if (u += 1, xl = ml = null, l.updateQueue != null) {
        var a = l.updateQueue;
        a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
      }
      O.H = ts, a = e(t, n);
    } while (Cn);
    return a;
  }
  function j1() {
    var l = O.H, e = l.useState()[0];
    return e = typeof e.then == "function" ? vu(e) : e, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (F.flags |= 1024), e;
  }
  function zc() {
    var l = ba !== 0;
    return ba = 0, l;
  }
  function Ac(l, e, t) {
    e.updateQueue = l.updateQueue, e.flags &= -2053, l.lanes &= ~t;
  }
  function Ec(l) {
    if (Sa) {
      for (l = l.memoizedState; l !== null; ) {
        var e = l.queue;
        e !== null && (e.pending = null), l = l.next;
      }
      Sa = !1;
    }
    Ie = 0, xl = ml = F = null, Cn = !1, mu = ba = 0, _n = null;
  }
  function ee() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return xl === null ? F.memoizedState = xl = l : xl = xl.next = l, xl;
  }
  function wl() {
    if (ml === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var e = xl === null ? F.memoizedState : xl.next;
    if (e !== null)
      xl = e, ml = l;
    else {
      if (l === null)
        throw F.alternate === null ? Error(r(467)) : Error(r(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, xl === null ? F.memoizedState = xl = l : xl = xl.next = l;
    }
    return xl;
  }
  function pa() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function vu(l) {
    var e = mu;
    return mu += 1, _n === null && (_n = []), l = rr(_n, l, e), e = F, (xl === null ? e.memoizedState : xl.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? es : jc), l;
  }
  function Ta(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return vu(l);
      if (l.$$typeof === Ol) return Wl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Oc(l) {
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
    if (e == null && (e = { data: [], index: 0 }), t === null && (t = pa(), F.updateQueue = t), t.memoCache = e, t = e.data[e.index], t === void 0)
      for (t = e.data[e.index] = Array(l), n = 0; n < l; n++)
        t[n] = Qe;
    return e.index++, t;
  }
  function Pe(l, e) {
    return typeof e == "function" ? e(l) : e;
  }
  function za(l) {
    var e = wl();
    return Mc(e, ml, l);
  }
  function Mc(l, e, t) {
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
      var o = c = null, d = null, b = e, C = !1;
      do {
        var N = b.lane & -536870913;
        if (N !== b.lane ? (ul & N) === N : (Ie & N) === N) {
          var p = b.revertLane;
          if (p === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), N === zn && (C = !0);
          else if ((Ie & p) === p) {
            b = b.next, p === zn && (C = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (o = d = N, c = a) : d = d.next = N, F.lanes |= p, Ot |= p;
          N = b.action, It && t(a, N), a = b.hasEagerState ? b.eagerState : t(a, N);
        } else
          p = {
            lane: N,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (o = d = p, c = a) : d = d.next = p, F.lanes |= N, Ot |= N;
        b = b.next;
      } while (b !== null && b !== e);
      if (d === null ? c = a : d.next = o, !ye(a, l.memoizedState) && (Gl = !0, C && (t = An, t !== null)))
        throw t;
      l.memoizedState = a, l.baseState = c, l.baseQueue = d, n.lastRenderedState = a;
    }
    return u === null && (n.lanes = 0), [l.memoizedState, n.dispatch];
  }
  function Cc(l) {
    var e = wl(), t = e.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = l;
    var n = t.dispatch, u = t.pending, a = e.memoizedState;
    if (u !== null) {
      t.pending = null;
      var c = u = u.next;
      do
        a = l(a, c.action), c = c.next;
      while (c !== u);
      ye(a, e.memoizedState) || (Gl = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), t.lastRenderedState = a;
    }
    return [a, n];
  }
  function Tr(l, e, t) {
    var n = F, u = wl(), a = il;
    if (a) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = e();
    var c = !ye(
      (ml || u).memoizedState,
      t
    );
    if (c && (u.memoizedState = t, Gl = !0), u = u.queue, Uc(Er.bind(null, n, u, l), [
      l
    ]), u.getSnapshot !== e || c || xl !== null && xl.memoizedState.tag & 1) {
      if (n.flags |= 2048, Dn(
        9,
        { destroy: void 0 },
        Ar.bind(
          null,
          n,
          u,
          t,
          e
        ),
        null
      ), bl === null) throw Error(r(349));
      a || (Ie & 127) !== 0 || zr(n, e, t);
    }
    return t;
  }
  function zr(l, e, t) {
    l.flags |= 16384, l = { getSnapshot: e, value: t }, e = F.updateQueue, e === null ? (e = pa(), F.updateQueue = e, e.stores = [l]) : (t = e.stores, t === null ? e.stores = [l] : t.push(l));
  }
  function Ar(l, e, t, n) {
    e.value = t, e.getSnapshot = n, Or(e) && Mr(l);
  }
  function Er(l, e, t) {
    return t(function() {
      Or(e) && Mr(l);
    });
  }
  function Or(l) {
    var e = l.getSnapshot;
    l = l.value;
    try {
      var t = e();
      return !ye(l, t);
    } catch {
      return !0;
    }
  }
  function Mr(l) {
    var e = Qt(l, 2);
    e !== null && oe(e, l, 2);
  }
  function _c(l) {
    var e = ee();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), It) {
        st(!0);
        try {
          t();
        } finally {
          st(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = l, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pe,
      lastRenderedState: l
    }, e;
  }
  function Cr(l, e, t, n) {
    return l.baseState = t, Mc(
      l,
      ml,
      typeof n == "function" ? n : Pe
    );
  }
  function q1(l, e, t, n, u) {
    if (Oa(l)) throw Error(r(485));
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
      O.T !== null ? t(!0) : a.isTransition = !1, n(a), t = e.pending, t === null ? (a.next = e.pending = a, _r(e, a)) : (a.next = t.next, e.pending = t.next = a);
    }
  }
  function _r(l, e) {
    var t = e.action, n = e.payload, u = l.state;
    if (e.isTransition) {
      var a = O.T, c = {};
      O.T = c;
      try {
        var o = t(u, n), d = O.S;
        d !== null && d(c, o), Dr(l, e, o);
      } catch (b) {
        Dc(l, e, b);
      } finally {
        a !== null && c.types !== null && (a.types = c.types), O.T = a;
      }
    } else
      try {
        a = t(u, n), Dr(l, e, a);
      } catch (b) {
        Dc(l, e, b);
      }
  }
  function Dr(l, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        Ur(l, e, n);
      },
      function(n) {
        return Dc(l, e, n);
      }
    ) : Ur(l, e, t);
  }
  function Ur(l, e, t) {
    e.status = "fulfilled", e.value = t, Hr(e), l.state = t, e = l.pending, e !== null && (t = e.next, t === e ? l.pending = null : (t = t.next, e.next = t, _r(l, t)));
  }
  function Dc(l, e, t) {
    var n = l.pending;
    if (l.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = t, Hr(e), e = e.next;
      while (e !== n);
    }
    l.action = null;
  }
  function Hr(l) {
    l = l.listeners;
    for (var e = 0; e < l.length; e++) (0, l[e])();
  }
  function Rr(l, e) {
    return e;
  }
  function Nr(l, e) {
    if (il) {
      var t = bl.formState;
      if (t !== null) {
        l: {
          var n = F;
          if (il) {
            if (Al) {
              e: {
                for (var u = Al, a = _e; u.nodeType !== 8; ) {
                  if (!a) {
                    u = null;
                    break e;
                  }
                  if (u = Ue(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                a = u.data, u = a === "F!" || a === "F" ? u : null;
              }
              if (u) {
                Al = Ue(
                  u.nextSibling
                ), n = u.data === "F!";
                break l;
              }
            }
            vt(n);
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
      lastRenderedReducer: Rr,
      lastRenderedState: e
    }, t.queue = n, t = Ir.bind(
      null,
      F,
      n
    ), n.dispatch = t, n = _c(!1), a = wc.bind(
      null,
      F,
      !1,
      n.queue
    ), n = ee(), u = {
      state: e,
      dispatch: null,
      action: l,
      pending: null
    }, n.queue = u, t = q1.bind(
      null,
      F,
      u,
      a,
      t
    ), u.dispatch = t, n.memoizedState = l, [e, t, !1];
  }
  function Br(l) {
    var e = wl();
    return wr(e, ml, l);
  }
  function wr(l, e, t) {
    if (e = Mc(
      l,
      e,
      Rr
    )[0], l = za(Pe)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = vu(e);
      } catch (c) {
        throw c === En ? da : c;
      }
    else n = e;
    e = wl();
    var u = e.queue, a = u.dispatch;
    return t !== e.memoizedState && (F.flags |= 2048, Dn(
      9,
      { destroy: void 0 },
      Y1.bind(null, u, t),
      null
    )), [n, a, l];
  }
  function Y1(l, e) {
    l.action = e;
  }
  function jr(l) {
    var e = wl(), t = ml;
    if (t !== null)
      return wr(e, t, l);
    wl(), e = e.memoizedState, t = wl();
    var n = t.queue.dispatch;
    return t.memoizedState = l, [e, n, !1];
  }
  function Dn(l, e, t, n) {
    return l = { tag: l, create: t, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = pa(), F.updateQueue = e), t = e.lastEffect, t === null ? e.lastEffect = l.next = l : (n = t.next, t.next = l, l.next = n, e.lastEffect = l), l;
  }
  function qr() {
    return wl().memoizedState;
  }
  function Aa(l, e, t, n) {
    var u = ee();
    F.flags |= l, u.memoizedState = Dn(
      1 | e,
      { destroy: void 0 },
      t,
      n === void 0 ? null : n
    );
  }
  function Ea(l, e, t, n) {
    var u = wl();
    n = n === void 0 ? null : n;
    var a = u.memoizedState.inst;
    ml !== null && n !== null && pc(n, ml.memoizedState.deps) ? u.memoizedState = Dn(e, a, t, n) : (F.flags |= l, u.memoizedState = Dn(
      1 | e,
      a,
      t,
      n
    ));
  }
  function Yr(l, e) {
    Aa(8390656, 8, l, e);
  }
  function Uc(l, e) {
    Ea(2048, 8, l, e);
  }
  function x1(l) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = pa(), F.updateQueue = e, e.events = [l];
    else {
      var t = e.events;
      t === null ? e.events = [l] : t.push(l);
    }
  }
  function xr(l) {
    var e = wl().memoizedState;
    return x1({ ref: e, nextImpl: l }), function() {
      if ((rl & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Gr(l, e) {
    return Ea(4, 2, l, e);
  }
  function Xr(l, e) {
    return Ea(4, 4, l, e);
  }
  function Lr(l, e) {
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
  function Qr(l, e, t) {
    t = t != null ? t.concat([l]) : null, Ea(4, 4, Lr.bind(null, e, l), t);
  }
  function Hc() {
  }
  function Zr(l, e) {
    var t = wl();
    e = e === void 0 ? null : e;
    var n = t.memoizedState;
    return e !== null && pc(e, n[1]) ? n[0] : (t.memoizedState = [l, e], l);
  }
  function Vr(l, e) {
    var t = wl();
    e = e === void 0 ? null : e;
    var n = t.memoizedState;
    if (e !== null && pc(e, n[1]))
      return n[0];
    if (n = l(), It) {
      st(!0);
      try {
        l();
      } finally {
        st(!1);
      }
    }
    return t.memoizedState = [n, e], n;
  }
  function Rc(l, e, t) {
    return t === void 0 || (Ie & 1073741824) !== 0 && (ul & 261930) === 0 ? l.memoizedState = e : (l.memoizedState = t, l = Ks(), F.lanes |= l, Ot |= l, t);
  }
  function Kr(l, e, t, n) {
    return ye(t, e) ? t : Mn.current !== null ? (l = Rc(l, t, n), ye(l, e) || (Gl = !0), l) : (Ie & 42) === 0 || (Ie & 1073741824) !== 0 && (ul & 261930) === 0 ? (Gl = !0, l.memoizedState = t) : (l = Ks(), F.lanes |= l, Ot |= l, e);
  }
  function Jr(l, e, t, n, u) {
    var a = _.p;
    _.p = a !== 0 && 8 > a ? a : 8;
    var c = O.T, o = {};
    O.T = o, wc(l, !1, e, t);
    try {
      var d = u(), b = O.S;
      if (b !== null && b(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var C = B1(
          d,
          n
        );
        gu(
          l,
          e,
          C,
          pe(l)
        );
      } else
        gu(
          l,
          e,
          n,
          pe(l)
        );
    } catch (N) {
      gu(
        l,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        pe()
      );
    } finally {
      _.p = a, c !== null && o.types !== null && (c.types = o.types), O.T = c;
    }
  }
  function G1() {
  }
  function Nc(l, e, t, n) {
    if (l.tag !== 5) throw Error(r(476));
    var u = kr(l).queue;
    Jr(
      l,
      u,
      e,
      k,
      t === null ? G1 : function() {
        return Wr(l), t(n);
      }
    );
  }
  function kr(l) {
    var e = l.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pe,
        lastRenderedState: k
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
        lastRenderedReducer: Pe,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = e, l = l.alternate, l !== null && (l.memoizedState = e), e;
  }
  function Wr(l) {
    var e = kr(l);
    e.next === null && (e = l.alternate.memoizedState), gu(
      l,
      e.next.queue,
      {},
      pe()
    );
  }
  function Bc() {
    return Wl(Bu);
  }
  function $r() {
    return wl().memoizedState;
  }
  function Fr() {
    return wl().memoizedState;
  }
  function X1(l) {
    for (var e = l.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = pe();
          l = bt(t);
          var n = pt(e, l, t);
          n !== null && (oe(n, e, t), du(n, e, t)), e = { cache: oc() }, l.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function L1(l, e, t) {
    var n = pe();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Oa(l) ? Pr(e, t) : (t = Ii(l, e, t, n), t !== null && (oe(t, l, n), ls(t, e, n)));
  }
  function Ir(l, e, t) {
    var n = pe();
    gu(l, e, t, n);
  }
  function gu(l, e, t, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Oa(l)) Pr(e, u);
    else {
      var a = l.alternate;
      if (l.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null))
        try {
          var c = e.lastRenderedState, o = a(c, t);
          if (u.hasEagerState = !0, u.eagerState = o, ye(o, c))
            return aa(l, e, u, 0), bl === null && ua(), !1;
        } catch {
        }
      if (t = Ii(l, e, u, n), t !== null)
        return oe(t, l, n), ls(t, e, n), !0;
    }
    return !1;
  }
  function wc(l, e, t, n) {
    if (n = {
      lane: 2,
      revertLane: yf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Oa(l)) {
      if (e) throw Error(r(479));
    } else
      e = Ii(
        l,
        t,
        n,
        2
      ), e !== null && oe(e, l, 2);
  }
  function Oa(l) {
    var e = l.alternate;
    return l === F || e !== null && e === F;
  }
  function Pr(l, e) {
    Cn = Sa = !0;
    var t = l.pending;
    t === null ? e.next = e : (e.next = t.next, t.next = e), l.pending = e;
  }
  function ls(l, e, t) {
    if ((t & 4194048) !== 0) {
      var n = e.lanes;
      n &= l.pendingLanes, t |= n, e.lanes = t, uo(l, t);
    }
  }
  var Su = {
    readContext: Wl,
    use: Ta,
    useCallback: Ul,
    useContext: Ul,
    useEffect: Ul,
    useImperativeHandle: Ul,
    useLayoutEffect: Ul,
    useInsertionEffect: Ul,
    useMemo: Ul,
    useReducer: Ul,
    useRef: Ul,
    useState: Ul,
    useDebugValue: Ul,
    useDeferredValue: Ul,
    useTransition: Ul,
    useSyncExternalStore: Ul,
    useId: Ul,
    useHostTransitionStatus: Ul,
    useFormState: Ul,
    useActionState: Ul,
    useOptimistic: Ul,
    useMemoCache: Ul,
    useCacheRefresh: Ul
  };
  Su.useEffectEvent = Ul;
  var es = {
    readContext: Wl,
    use: Ta,
    useCallback: function(l, e) {
      return ee().memoizedState = [
        l,
        e === void 0 ? null : e
      ], l;
    },
    useContext: Wl,
    useEffect: Yr,
    useImperativeHandle: function(l, e, t) {
      t = t != null ? t.concat([l]) : null, Aa(
        4194308,
        4,
        Lr.bind(null, e, l),
        t
      );
    },
    useLayoutEffect: function(l, e) {
      return Aa(4194308, 4, l, e);
    },
    useInsertionEffect: function(l, e) {
      Aa(4, 2, l, e);
    },
    useMemo: function(l, e) {
      var t = ee();
      e = e === void 0 ? null : e;
      var n = l();
      if (It) {
        st(!0);
        try {
          l();
        } finally {
          st(!1);
        }
      }
      return t.memoizedState = [n, e], n;
    },
    useReducer: function(l, e, t) {
      var n = ee();
      if (t !== void 0) {
        var u = t(e);
        if (It) {
          st(!0);
          try {
            t(e);
          } finally {
            st(!1);
          }
        }
      } else u = e;
      return n.memoizedState = n.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, n.queue = l, l = l.dispatch = L1.bind(
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
      l = _c(l);
      var e = l.queue, t = Ir.bind(null, F, e);
      return e.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: Hc,
    useDeferredValue: function(l, e) {
      var t = ee();
      return Rc(t, l, e);
    },
    useTransition: function() {
      var l = _c(!1);
      return l = Jr.bind(
        null,
        F,
        l.queue,
        !0,
        !1
      ), ee().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, e, t) {
      var n = F, u = ee();
      if (il) {
        if (t === void 0)
          throw Error(r(407));
        t = t();
      } else {
        if (t = e(), bl === null)
          throw Error(r(349));
        (ul & 127) !== 0 || zr(n, e, t);
      }
      u.memoizedState = t;
      var a = { value: t, getSnapshot: e };
      return u.queue = a, Yr(Er.bind(null, n, a, l), [
        l
      ]), n.flags |= 2048, Dn(
        9,
        { destroy: void 0 },
        Ar.bind(
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
      var l = ee(), e = bl.identifierPrefix;
      if (il) {
        var t = xe, n = Ye;
        t = (n & ~(1 << 32 - he(n) - 1)).toString(32) + t, e = "_" + e + "R_" + t, t = ba++, 0 < t && (e += "H" + t.toString(32)), e += "_";
      } else
        t = w1++, e = "_" + e + "r_" + t.toString(32) + "_";
      return l.memoizedState = e;
    },
    useHostTransitionStatus: Bc,
    useFormState: Nr,
    useActionState: Nr,
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
      return e.queue = t, e = wc.bind(
        null,
        F,
        !0,
        t
      ), t.dispatch = e, [l, e];
    },
    useMemoCache: Oc,
    useCacheRefresh: function() {
      return ee().memoizedState = X1.bind(
        null,
        F
      );
    },
    useEffectEvent: function(l) {
      var e = ee(), t = { impl: l };
      return e.memoizedState = t, function() {
        if ((rl & 2) !== 0)
          throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, jc = {
    readContext: Wl,
    use: Ta,
    useCallback: Zr,
    useContext: Wl,
    useEffect: Uc,
    useImperativeHandle: Qr,
    useInsertionEffect: Gr,
    useLayoutEffect: Xr,
    useMemo: Vr,
    useReducer: za,
    useRef: qr,
    useState: function() {
      return za(Pe);
    },
    useDebugValue: Hc,
    useDeferredValue: function(l, e) {
      var t = wl();
      return Kr(
        t,
        ml.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = za(Pe)[0], e = wl().memoizedState;
      return [
        typeof l == "boolean" ? l : vu(l),
        e
      ];
    },
    useSyncExternalStore: Tr,
    useId: $r,
    useHostTransitionStatus: Bc,
    useFormState: Br,
    useActionState: Br,
    useOptimistic: function(l, e) {
      var t = wl();
      return Cr(t, ml, l, e);
    },
    useMemoCache: Oc,
    useCacheRefresh: Fr
  };
  jc.useEffectEvent = xr;
  var ts = {
    readContext: Wl,
    use: Ta,
    useCallback: Zr,
    useContext: Wl,
    useEffect: Uc,
    useImperativeHandle: Qr,
    useInsertionEffect: Gr,
    useLayoutEffect: Xr,
    useMemo: Vr,
    useReducer: Cc,
    useRef: qr,
    useState: function() {
      return Cc(Pe);
    },
    useDebugValue: Hc,
    useDeferredValue: function(l, e) {
      var t = wl();
      return ml === null ? Rc(t, l, e) : Kr(
        t,
        ml.memoizedState,
        l,
        e
      );
    },
    useTransition: function() {
      var l = Cc(Pe)[0], e = wl().memoizedState;
      return [
        typeof l == "boolean" ? l : vu(l),
        e
      ];
    },
    useSyncExternalStore: Tr,
    useId: $r,
    useHostTransitionStatus: Bc,
    useFormState: jr,
    useActionState: jr,
    useOptimistic: function(l, e) {
      var t = wl();
      return ml !== null ? Cr(t, ml, l, e) : (t.baseState = l, [l, t.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Fr
  };
  ts.useEffectEvent = xr;
  function qc(l, e, t, n) {
    e = l.memoizedState, t = t(n, e), t = t == null ? e : A({}, e, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var Yc = {
    enqueueSetState: function(l, e, t) {
      l = l._reactInternals;
      var n = pe(), u = bt(n);
      u.payload = e, t != null && (u.callback = t), e = pt(l, u, n), e !== null && (oe(e, l, n), du(e, l, n));
    },
    enqueueReplaceState: function(l, e, t) {
      l = l._reactInternals;
      var n = pe(), u = bt(n);
      u.tag = 1, u.payload = e, t != null && (u.callback = t), e = pt(l, u, n), e !== null && (oe(e, l, n), du(e, l, n));
    },
    enqueueForceUpdate: function(l, e) {
      l = l._reactInternals;
      var t = pe(), n = bt(t);
      n.tag = 2, e != null && (n.callback = e), e = pt(l, n, t), e !== null && (oe(e, l, t), du(e, l, t));
    }
  };
  function ns(l, e, t, n, u, a, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(n, a, c) : e.prototype && e.prototype.isPureReactComponent ? !uu(t, n) || !uu(u, a) : !0;
  }
  function us(l, e, t, n) {
    l = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== l && Yc.enqueueReplaceState(e, e.state, null);
  }
  function Pt(l, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var n in e)
        n !== "ref" && (t[n] = e[n]);
    }
    if (l = l.defaultProps) {
      t === e && (t = A({}, t));
      for (var u in l)
        t[u] === void 0 && (t[u] = l[u]);
    }
    return t;
  }
  function as(l) {
    na(l);
  }
  function is(l) {
    console.error(l);
  }
  function cs(l) {
    na(l);
  }
  function Ma(l, e) {
    try {
      var t = l.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function fs(l, e, t) {
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
  function xc(l, e, t) {
    return t = bt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      Ma(l, e);
    }, t;
  }
  function os(l) {
    return l = bt(l), l.tag = 3, l;
  }
  function rs(l, e, t, n) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var a = n.value;
      l.payload = function() {
        return u(a);
      }, l.callback = function() {
        fs(e, t, n);
      };
    }
    var c = t.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      fs(e, t, n), typeof u != "function" && (Mt === null ? Mt = /* @__PURE__ */ new Set([this]) : Mt.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Q1(l, e, t, n, u) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = t.alternate, e !== null && Tn(
        e,
        t,
        u,
        !0
      ), t = ve.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return De === null ? Ya() : t.alternate === null && Hl === 0 && (Hl = 3), t.flags &= -257, t.flags |= 65536, t.lanes = u, n === ha ? t.flags |= 16384 : (e = t.updateQueue, e === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), sf(l, n, u)), !1;
          case 22:
            return t.flags |= 65536, n === ha ? t.flags |= 16384 : (e = t.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = e) : (t = e.retryQueue, t === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), sf(l, n, u)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return sf(l, n, u), Ya(), !1;
    }
    if (il)
      return e = ve.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, n !== uc && (l = Error(r(422), { cause: n }), cu(Oe(l, t)))) : (n !== uc && (e = Error(r(423), {
        cause: n
      }), cu(
        Oe(e, t)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, n = Oe(n, t), u = xc(
        l.stateNode,
        n,
        u
      ), mc(l, u), Hl !== 4 && (Hl = 2)), !1;
    var a = Error(r(520), { cause: n });
    if (a = Oe(a, t), Mu === null ? Mu = [a] : Mu.push(a), Hl !== 4 && (Hl = 2), e === null) return !0;
    n = Oe(n, t), t = e;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = u & -u, t.lanes |= l, l = xc(t.stateNode, n, l), mc(t, l), !1;
        case 1:
          if (e = t.type, a = t.stateNode, (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (Mt === null || !Mt.has(a))))
            return t.flags |= 65536, u &= -u, t.lanes |= u, u = os(u), rs(
              u,
              l,
              t,
              n
            ), mc(t, u), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Gc = Error(r(461)), Gl = !1;
  function $l(l, e, t, n) {
    e.child = l === null ? yr(e, null, t, n) : Ft(
      e,
      l.child,
      t,
      n
    );
  }
  function ss(l, e, t, n, u) {
    t = t.render;
    var a = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return Jt(e), n = Tc(
      l,
      e,
      t,
      c,
      a,
      u
    ), o = zc(), l !== null && !Gl ? (Ac(l, e, u), lt(l, e, u)) : (il && o && tc(e), e.flags |= 1, $l(l, e, n, u), e.child);
  }
  function ds(l, e, t, n, u) {
    if (l === null) {
      var a = t.type;
      return typeof a == "function" && !Pi(a) && a.defaultProps === void 0 && t.compare === null ? (e.tag = 15, e.type = a, hs(
        l,
        e,
        a,
        n,
        u
      )) : (l = ca(
        t.type,
        null,
        n,
        e,
        e.mode,
        u
      ), l.ref = e.ref, l.return = e, e.child = l);
    }
    if (a = l.child, !kc(l, u)) {
      var c = a.memoizedProps;
      if (t = t.compare, t = t !== null ? t : uu, t(c, n) && l.ref === e.ref)
        return lt(l, e, u);
    }
    return e.flags |= 1, l = ke(a, n), l.ref = e.ref, l.return = e, e.child = l;
  }
  function hs(l, e, t, n, u) {
    if (l !== null) {
      var a = l.memoizedProps;
      if (uu(a, n) && l.ref === e.ref)
        if (Gl = !1, e.pendingProps = n = a, kc(l, u))
          (l.flags & 131072) !== 0 && (Gl = !0);
        else
          return e.lanes = l.lanes, lt(l, e, u);
    }
    return Xc(
      l,
      e,
      t,
      n,
      u
    );
  }
  function ys(l, e, t, n) {
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
        return ms(
          l,
          e,
          a,
          t,
          n
        );
      }
      if ((t & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && sa(
          e,
          a !== null ? a.cachePool : null
        ), a !== null ? gr(e, a) : gc(), Sr(e);
      else
        return n = e.lanes = 536870912, ms(
          l,
          e,
          a !== null ? a.baseLanes | t : t,
          t,
          n
        );
    } else
      a !== null ? (sa(e, a.cachePool), gr(e, a), zt(), e.memoizedState = null) : (l !== null && sa(e, null), gc(), zt());
    return $l(l, e, u, t), e.child;
  }
  function bu(l, e) {
    return l !== null && l.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function ms(l, e, t, n, u) {
    var a = sc();
    return a = a === null ? null : { parent: Yl._currentValue, pool: a }, e.memoizedState = {
      baseLanes: t,
      cachePool: a
    }, l !== null && sa(e, null), gc(), Sr(e), l !== null && Tn(l, e, n, !0), e.childLanes = u, null;
  }
  function Ca(l, e) {
    return e = Da(
      { mode: e.mode, children: e.children },
      l.mode
    ), e.ref = l.ref, l.child = e, e.return = l, e;
  }
  function vs(l, e, t) {
    return Ft(e, l.child, null, t), l = Ca(e, e.pendingProps), l.flags |= 2, ge(e), e.memoizedState = null, l;
  }
  function Z1(l, e, t) {
    var n = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, l === null) {
      if (il) {
        if (n.mode === "hidden")
          return l = Ca(e, n), e.lanes = 536870912, bu(null, l);
        if (bc(e), (l = Al) ? (l = _d(
          l,
          _e
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: yt !== null ? { id: Ye, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Po(l), t.return = e, e.child = t, kl = e, Al = null)) : l = null, l === null) throw vt(e);
        return e.lanes = 536870912, null;
      }
      return Ca(e, n);
    }
    var a = l.memoizedState;
    if (a !== null) {
      var c = a.dehydrated;
      if (bc(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = vs(
            l,
            e,
            t
          );
        else if (e.memoizedState !== null)
          e.child = l.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Gl || Tn(l, e, t, !1), u = (t & l.childLanes) !== 0, Gl || u) {
        if (n = bl, n !== null && (c = ao(n, t), c !== 0 && c !== a.retryLane))
          throw a.retryLane = c, Qt(l, c), oe(n, l, c), Gc;
        Ya(), e = vs(
          l,
          e,
          t
        );
      } else
        l = a.treeContext, Al = Ue(c.nextSibling), kl = e, il = !0, mt = null, _e = !1, l !== null && tr(e, l), e = Ca(e, n), e.flags |= 4096;
      return e;
    }
    return l = ke(l.child, {
      mode: n.mode,
      children: n.children
    }), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function _a(l, e) {
    var t = e.ref;
    if (t === null)
      l !== null && l.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(r(284));
      (l === null || l.ref !== t) && (e.flags |= 4194816);
    }
  }
  function Xc(l, e, t, n, u) {
    return Jt(e), t = Tc(
      l,
      e,
      t,
      n,
      void 0,
      u
    ), n = zc(), l !== null && !Gl ? (Ac(l, e, u), lt(l, e, u)) : (il && n && tc(e), e.flags |= 1, $l(l, e, t, u), e.child);
  }
  function gs(l, e, t, n, u, a) {
    return Jt(e), e.updateQueue = null, t = pr(
      e,
      n,
      t,
      u
    ), br(l), n = zc(), l !== null && !Gl ? (Ac(l, e, a), lt(l, e, a)) : (il && n && tc(e), e.flags |= 1, $l(l, e, t, a), e.child);
  }
  function Ss(l, e, t, n, u) {
    if (Jt(e), e.stateNode === null) {
      var a = gn, c = t.contextType;
      typeof c == "object" && c !== null && (a = Wl(c)), a = new t(n, a), e.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Yc, e.stateNode = a, a._reactInternals = e, a = e.stateNode, a.props = n, a.state = e.memoizedState, a.refs = {}, hc(e), c = t.contextType, a.context = typeof c == "object" && c !== null ? Wl(c) : gn, a.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (qc(
        e,
        t,
        c,
        n
      ), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Yc.enqueueReplaceState(a, a.state, null), yu(e, n, a, u), hu(), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (l === null) {
      a = e.stateNode;
      var o = e.memoizedProps, d = Pt(t, o);
      a.props = d;
      var b = a.context, C = t.contextType;
      c = gn, typeof C == "object" && C !== null && (c = Wl(C));
      var N = t.getDerivedStateFromProps;
      C = typeof N == "function" || typeof a.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, C || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o || b !== c) && us(
        e,
        a,
        n,
        c
      ), St = !1;
      var p = e.memoizedState;
      a.state = p, yu(e, n, a, u), hu(), b = e.memoizedState, o || p !== b || St ? (typeof N == "function" && (qc(
        e,
        t,
        N,
        n
      ), b = e.memoizedState), (d = St || ns(
        e,
        t,
        d,
        n,
        p,
        b,
        c
      )) ? (C || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), a.props = n, a.state = b, a.context = c, n = d) : (typeof a.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      a = e.stateNode, yc(l, e), c = e.memoizedProps, C = Pt(t, c), a.props = C, N = e.pendingProps, p = a.context, b = t.contextType, d = gn, typeof b == "object" && b !== null && (d = Wl(b)), o = t.getDerivedStateFromProps, (b = typeof o == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== N || p !== d) && us(
        e,
        a,
        n,
        d
      ), St = !1, p = e.memoizedState, a.state = p, yu(e, n, a, u), hu();
      var E = e.memoizedState;
      c !== N || p !== E || St || l !== null && l.dependencies !== null && oa(l.dependencies) ? (typeof o == "function" && (qc(
        e,
        t,
        o,
        n
      ), E = e.memoizedState), (C = St || ns(
        e,
        t,
        C,
        n,
        p,
        E,
        d
      ) || l !== null && l.dependencies !== null && oa(l.dependencies)) ? (b || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, E, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(
        n,
        E,
        d
      )), typeof a.componentDidUpdate == "function" && (e.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === l.memoizedProps && p === l.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && p === l.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = E), a.props = n, a.state = E, a.context = d, n = C) : (typeof a.componentDidUpdate != "function" || c === l.memoizedProps && p === l.memoizedState || (e.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && p === l.memoizedState || (e.flags |= 1024), n = !1);
    }
    return a = n, _a(l, e), n = (e.flags & 128) !== 0, a || n ? (a = e.stateNode, t = n && typeof t.getDerivedStateFromError != "function" ? null : a.render(), e.flags |= 1, l !== null && n ? (e.child = Ft(
      e,
      l.child,
      null,
      u
    ), e.child = Ft(
      e,
      null,
      t,
      u
    )) : $l(l, e, t, u), e.memoizedState = a.state, l = e.child) : l = lt(
      l,
      e,
      u
    ), l;
  }
  function bs(l, e, t, n) {
    return Vt(), e.flags |= 256, $l(l, e, t, n), e.child;
  }
  var Lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(l) {
    return { baseLanes: l, cachePool: fr() };
  }
  function Zc(l, e, t) {
    return l = l !== null ? l.childLanes & ~t : 0, e && (l |= be), l;
  }
  function ps(l, e, t) {
    var n = e.pendingProps, u = !1, a = (e.flags & 128) !== 0, c;
    if ((c = a) || (c = l !== null && l.memoizedState === null ? !1 : (Bl.current & 2) !== 0), c && (u = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, l === null) {
      if (il) {
        if (u ? Tt(e) : zt(), (l = Al) ? (l = _d(
          l,
          _e
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (e.memoizedState = {
          dehydrated: l,
          treeContext: yt !== null ? { id: Ye, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = Po(l), t.return = e, e.child = t, kl = e, Al = null)) : l = null, l === null) throw vt(e);
        return Cf(l) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, u ? (zt(), u = e.mode, o = Da(
        { mode: "hidden", children: o },
        u
      ), n = Zt(
        n,
        u,
        t,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = Qc(t), n.childLanes = Zc(
        l,
        c,
        t
      ), e.memoizedState = Lc, bu(null, n)) : (Tt(e), Vc(e, o));
    }
    var d = l.memoizedState;
    if (d !== null && (o = d.dehydrated, o !== null)) {
      if (a)
        e.flags & 256 ? (Tt(e), e.flags &= -257, e = Kc(
          l,
          e,
          t
        )) : e.memoizedState !== null ? (zt(), e.child = l.child, e.flags |= 128, e = null) : (zt(), o = n.fallback, u = e.mode, n = Da(
          { mode: "visible", children: n.children },
          u
        ), o = Zt(
          o,
          u,
          t,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, Ft(
          e,
          l.child,
          null,
          t
        ), n = e.child, n.memoizedState = Qc(t), n.childLanes = Zc(
          l,
          c,
          t
        ), e.memoizedState = Lc, e = bu(null, n));
      else if (Tt(e), Cf(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, cu({ value: n, source: null, stack: null }), e = Kc(
          l,
          e,
          t
        );
      } else if (Gl || Tn(l, e, t, !1), c = (t & l.childLanes) !== 0, Gl || c) {
        if (c = bl, c !== null && (n = ao(c, t), n !== 0 && n !== d.retryLane))
          throw d.retryLane = n, Qt(l, n), oe(c, l, n), Gc;
        Mf(o) || Ya(), e = Kc(
          l,
          e,
          t
        );
      } else
        Mf(o) ? (e.flags |= 192, e.child = l.child, e = null) : (l = d.treeContext, Al = Ue(
          o.nextSibling
        ), kl = e, il = !0, mt = null, _e = !1, l !== null && tr(e, l), e = Vc(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (zt(), o = n.fallback, u = e.mode, d = l.child, b = d.sibling, n = ke(d, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? o = ke(
      b,
      o
    ) : (o = Zt(
      o,
      u,
      t,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, bu(null, n), n = e.child, o = l.child.memoizedState, o === null ? o = Qc(t) : (u = o.cachePool, u !== null ? (d = Yl._currentValue, u = u.parent !== d ? { parent: d, pool: d } : u) : u = fr(), o = {
      baseLanes: o.baseLanes | t,
      cachePool: u
    }), n.memoizedState = o, n.childLanes = Zc(
      l,
      c,
      t
    ), e.memoizedState = Lc, bu(l.child, n)) : (Tt(e), t = l.child, l = t.sibling, t = ke(t, {
      mode: "visible",
      children: n.children
    }), t.return = e, t.sibling = null, l !== null && (c = e.deletions, c === null ? (e.deletions = [l], e.flags |= 16) : c.push(l)), e.child = t, e.memoizedState = null, t);
  }
  function Vc(l, e) {
    return e = Da(
      { mode: "visible", children: e },
      l.mode
    ), e.return = l, l.child = e;
  }
  function Da(l, e) {
    return l = me(22, l, null, e), l.lanes = 0, l;
  }
  function Kc(l, e, t) {
    return Ft(e, l.child, null, t), l = Vc(
      e,
      e.pendingProps.children
    ), l.flags |= 2, e.memoizedState = null, l;
  }
  function Ts(l, e, t) {
    l.lanes |= e;
    var n = l.alternate;
    n !== null && (n.lanes |= e), cc(l.return, e, t);
  }
  function Jc(l, e, t, n, u, a) {
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
  function zs(l, e, t) {
    var n = e.pendingProps, u = n.revealOrder, a = n.tail;
    n = n.children;
    var c = Bl.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, x(Bl, c), $l(l, e, n, t), n = il ? iu : 0, !o && l !== null && (l.flags & 128) !== 0)
      l: for (l = e.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Ts(l, t, e);
        else if (l.tag === 19)
          Ts(l, t, e);
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
          l = t.alternate, l !== null && ga(l) === null && (u = t), t = t.sibling;
        t = u, t === null ? (u = e.child, e.child = null) : (u = t.sibling, t.sibling = null), Jc(
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
          if (l = u.alternate, l !== null && ga(l) === null) {
            e.child = u;
            break;
          }
          l = u.sibling, u.sibling = t, t = u, u = l;
        }
        Jc(
          e,
          !0,
          t,
          null,
          a,
          n
        );
        break;
      case "together":
        Jc(
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
  function lt(l, e, t) {
    if (l !== null && (e.dependencies = l.dependencies), Ot |= e.lanes, (t & e.childLanes) === 0)
      if (l !== null) {
        if (Tn(
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
      for (l = e.child, t = ke(l, l.pendingProps), e.child = t, t.return = e; l.sibling !== null; )
        l = l.sibling, t = t.sibling = ke(l, l.pendingProps), t.return = e;
      t.sibling = null;
    }
    return e.child;
  }
  function kc(l, e) {
    return (l.lanes & e) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && oa(l)));
  }
  function V1(l, e, t) {
    switch (e.tag) {
      case 3:
        X(e, e.stateNode.containerInfo), gt(e, Yl, l.memoizedState.cache), Vt();
        break;
      case 27:
      case 5:
        $(e);
        break;
      case 4:
        X(e, e.stateNode.containerInfo);
        break;
      case 10:
        gt(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, bc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Tt(e), e.flags |= 128, null) : (t & e.child.childLanes) !== 0 ? ps(l, e, t) : (Tt(e), l = lt(
            l,
            e,
            t
          ), l !== null ? l.sibling : null);
        Tt(e);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (n = (t & e.childLanes) !== 0, n || (Tn(
          l,
          e,
          t,
          !1
        ), n = (t & e.childLanes) !== 0), u) {
          if (n)
            return zs(
              l,
              e,
              t
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), x(Bl, Bl.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, ys(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        gt(e, Yl, l.memoizedState.cache);
    }
    return lt(l, e, t);
  }
  function As(l, e, t) {
    if (l !== null)
      if (l.memoizedProps !== e.pendingProps)
        Gl = !0;
      else {
        if (!kc(l, t) && (e.flags & 128) === 0)
          return Gl = !1, V1(
            l,
            e,
            t
          );
        Gl = (l.flags & 131072) !== 0;
      }
    else
      Gl = !1, il && (e.flags & 1048576) !== 0 && er(e, iu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        l: {
          var n = e.pendingProps;
          if (l = Wt(e.elementType), e.type = l, typeof l == "function")
            Pi(l) ? (n = Pt(l, n), e.tag = 1, e = Ss(
              null,
              e,
              l,
              n,
              t
            )) : (e.tag = 0, e = Xc(
              null,
              e,
              l,
              n,
              t
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Dl) {
                e.tag = 11, e = ss(
                  null,
                  e,
                  l,
                  n,
                  t
                );
                break l;
              } else if (u === P) {
                e.tag = 14, e = ds(
                  null,
                  e,
                  l,
                  n,
                  t
                );
                break l;
              }
            }
            throw e = Re(l) || l, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Xc(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 1:
        return n = e.type, u = Pt(
          n,
          e.pendingProps
        ), Ss(
          l,
          e,
          n,
          u,
          t
        );
      case 3:
        l: {
          if (X(
            e,
            e.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          n = e.pendingProps;
          var a = e.memoizedState;
          u = a.element, yc(l, e), yu(e, n, null, t);
          var c = e.memoizedState;
          if (n = c.cache, gt(e, Yl, n), n !== a.cache && fc(
            e,
            [Yl],
            t,
            !0
          ), hu(), n = c.element, a.isDehydrated)
            if (a = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
              e = bs(
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
              ), cu(u), e = bs(
                l,
                e,
                n,
                t
              );
              break l;
            } else
              for (l = e.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Al = Ue(l.firstChild), kl = e, il = !0, mt = null, _e = !0, t = yr(
                e,
                null,
                n,
                t
              ), e.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Vt(), n === u) {
              e = lt(
                l,
                e,
                t
              );
              break l;
            }
            $l(l, e, n, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return _a(l, e), l === null ? (t = Bd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = t : il || (t = e.type, l = e.pendingProps, n = Va(
          T.current
        ).createElement(t), n[Jl] = e, n[ne] = l, Fl(n, t, l), Zl(n), e.stateNode = n) : e.memoizedState = Bd(
          e.type,
          l.memoizedProps,
          e.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return $(e), l === null && il && (n = e.stateNode = Hd(
          e.type,
          e.pendingProps,
          T.current
        ), kl = e, _e = !0, u = Al, Ut(e.type) ? (_f = u, Al = Ue(n.firstChild)) : Al = u), $l(
          l,
          e,
          e.pendingProps.children,
          t
        ), _a(l, e), l === null && (e.flags |= 4194304), e.child;
      case 5:
        return l === null && il && ((u = n = Al) && (n = Th(
          n,
          e.type,
          e.pendingProps,
          _e
        ), n !== null ? (e.stateNode = n, kl = e, Al = Ue(n.firstChild), _e = !1, u = !0) : u = !1), u || vt(e)), $(e), u = e.type, a = e.pendingProps, c = l !== null ? l.memoizedProps : null, n = a.children, Af(u, a) ? n = null : c !== null && Af(u, c) && (e.flags |= 32), e.memoizedState !== null && (u = Tc(
          l,
          e,
          j1,
          null,
          null,
          t
        ), Bu._currentValue = u), _a(l, e), $l(l, e, n, t), e.child;
      case 6:
        return l === null && il && ((l = t = Al) && (t = zh(
          t,
          e.pendingProps,
          _e
        ), t !== null ? (e.stateNode = t, kl = e, Al = null, l = !0) : l = !1), l || vt(e)), null;
      case 13:
        return ps(l, e, t);
      case 4:
        return X(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, l === null ? e.child = Ft(
          e,
          null,
          n,
          t
        ) : $l(l, e, n, t), e.child;
      case 11:
        return ss(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 7:
        return $l(
          l,
          e,
          e.pendingProps,
          t
        ), e.child;
      case 8:
        return $l(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 12:
        return $l(
          l,
          e,
          e.pendingProps.children,
          t
        ), e.child;
      case 10:
        return n = e.pendingProps, gt(e, e.type, n.value), $l(l, e, n.children, t), e.child;
      case 9:
        return u = e.type._context, n = e.pendingProps.children, Jt(e), u = Wl(u), n = n(u), e.flags |= 1, $l(l, e, n, t), e.child;
      case 14:
        return ds(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 15:
        return hs(
          l,
          e,
          e.type,
          e.pendingProps,
          t
        );
      case 19:
        return zs(l, e, t);
      case 31:
        return Z1(l, e, t);
      case 22:
        return ys(
          l,
          e,
          t,
          e.pendingProps
        );
      case 24:
        return Jt(e), n = Wl(Yl), l === null ? (u = sc(), u === null && (u = bl, a = oc(), u.pooledCache = a, a.refCount++, a !== null && (u.pooledCacheLanes |= t), u = a), e.memoizedState = { parent: n, cache: u }, hc(e), gt(e, Yl, u)) : ((l.lanes & t) !== 0 && (yc(l, e), yu(e, null, null, t), hu()), u = l.memoizedState, a = e.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), gt(e, Yl, n)) : (n = a.cache, gt(e, Yl, n), n !== u.cache && fc(
          e,
          [Yl],
          t,
          !0
        ))), $l(
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
  function et(l) {
    l.flags |= 4;
  }
  function Wc(l, e, t, n, u) {
    if ((e = (l.mode & 32) !== 0) && (e = !1), e) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if ($s()) l.flags |= 8192;
        else
          throw $t = ha, dc;
    } else l.flags &= -16777217;
  }
  function Es(l, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xd(e))
      if ($s()) l.flags |= 8192;
      else
        throw $t = ha, dc;
  }
  function Ua(l, e) {
    e !== null && (l.flags |= 4), l.flags & 16384 && (e = l.tag !== 22 ? to() : 536870912, l.lanes |= e, Nn |= e);
  }
  function pu(l, e) {
    if (!il)
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
  function El(l) {
    var e = l.alternate !== null && l.alternate.child === l.child, t = 0, n = 0;
    if (e)
      for (var u = l.child; u !== null; )
        t |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        t |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= n, l.childLanes = t, e;
  }
  function K1(l, e, t) {
    var n = e.pendingProps;
    switch (nc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return El(e), null;
      case 1:
        return El(e), null;
      case 3:
        return t = e.stateNode, n = null, l !== null && (n = l.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Fe(Yl), Q(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (pn(e) ? et(e) : l === null || l.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ac())), El(e), null;
      case 26:
        var u = e.type, a = e.memoizedState;
        return l === null ? (et(e), a !== null ? (El(e), Es(e, a)) : (El(e), Wc(
          e,
          u,
          null,
          n,
          t
        ))) : a ? a !== l.memoizedState ? (et(e), El(e), Es(e, a)) : (El(e), e.flags &= -16777217) : (l = l.memoizedProps, l !== n && et(e), El(e), Wc(
          e,
          u,
          l,
          n,
          t
        )), null;
      case 27:
        if (_l(e), t = T.current, u = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== n && et(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return El(e), null;
          }
          l = g.current, pn(e) ? nr(e) : (l = Hd(u, n, t), e.stateNode = l, et(e));
        }
        return El(e), null;
      case 5:
        if (_l(e), u = e.type, l !== null && e.stateNode != null)
          l.memoizedProps !== n && et(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return El(e), null;
          }
          if (a = g.current, pn(e))
            nr(e);
          else {
            var c = Va(
              T.current
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
            a[Jl] = e, a[ne] = n;
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
            l: switch (Fl(a, u, n), u) {
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
            n && et(e);
          }
        }
        return El(e), Wc(
          e,
          e.type,
          l === null ? null : l.memoizedProps,
          e.pendingProps,
          t
        ), null;
      case 6:
        if (l && e.stateNode != null)
          l.memoizedProps !== n && et(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (l = T.current, pn(e)) {
            if (l = e.stateNode, t = e.memoizedProps, n = null, u = kl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            l[Jl] = e, l = !!(l.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || pd(l.nodeValue, t)), l || vt(e, !0);
          } else
            l = Va(l).createTextNode(
              n
            ), l[Jl] = e, e.stateNode = l;
        }
        return El(e), null;
      case 31:
        if (t = e.memoizedState, l === null || l.memoizedState !== null) {
          if (n = pn(e), t !== null) {
            if (l === null) {
              if (!n) throw Error(r(318));
              if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Jl] = e;
            } else
              Vt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            El(e), l = !1;
          } else
            t = ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = t), l = !0;
          if (!l)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return El(e), null;
      case 13:
        if (n = e.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = pn(e), n !== null && n.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Jl] = e;
            } else
              Vt(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            El(e), u = !1;
          } else
            u = ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
        }
        return ge(e), (e.flags & 128) !== 0 ? (e.lanes = t, e) : (t = n !== null, l = l !== null && l.memoizedState !== null, t && (n = e.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), a = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (a = n.memoizedState.cachePool.pool), a !== u && (n.flags |= 2048)), t !== l && t && (e.child.flags |= 8192), Ua(e, e.updateQueue), El(e), null);
      case 4:
        return Q(), l === null && Sf(e.stateNode.containerInfo), El(e), null;
      case 10:
        return Fe(e.type), El(e), null;
      case 19:
        if (H(Bl), n = e.memoizedState, n === null) return El(e), null;
        if (u = (e.flags & 128) !== 0, a = n.rendering, a === null)
          if (u) pu(n, !1);
          else {
            if (Hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = e.child; l !== null; ) {
                if (a = ga(l), a !== null) {
                  for (e.flags |= 128, pu(n, !1), l = a.updateQueue, e.updateQueue = l, Ua(e, l), e.subtreeFlags = 0, l = t, t = e.child; t !== null; )
                    Io(t, l), t = t.sibling;
                  return x(
                    Bl,
                    Bl.current & 1 | 2
                  ), il && We(e, n.treeForkCount), e.child;
                }
                l = l.sibling;
              }
            n.tail !== null && se() > wa && (e.flags |= 128, u = !0, pu(n, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = ga(a), l !== null) {
              if (e.flags |= 128, u = !0, l = l.updateQueue, e.updateQueue = l, Ua(e, l), pu(n, !0), n.tail === null && n.tailMode === "hidden" && !a.alternate && !il)
                return El(e), null;
            } else
              2 * se() - n.renderingStartTime > wa && t !== 536870912 && (e.flags |= 128, u = !0, pu(n, !1), e.lanes = 4194304);
          n.isBackwards ? (a.sibling = e.child, e.child = a) : (l = n.last, l !== null ? l.sibling = a : e.child = a, n.last = a);
        }
        return n.tail !== null ? (l = n.tail, n.rendering = l, n.tail = l.sibling, n.renderingStartTime = se(), l.sibling = null, t = Bl.current, x(
          Bl,
          u ? t & 1 | 2 : t & 1
        ), il && We(e, n.treeForkCount), l) : (El(e), null);
      case 22:
      case 23:
        return ge(e), Sc(), n = e.memoizedState !== null, l !== null ? l.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (El(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : El(e), t = e.updateQueue, t !== null && Ua(e, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== t && (e.flags |= 2048), l !== null && H(kt), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), e.memoizedState.cache !== t && (e.flags |= 2048), Fe(Yl), El(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function J1(l, e) {
    switch (nc(e), e.tag) {
      case 1:
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 3:
        return Fe(Yl), Q(), l = e.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (e.flags = l & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return _l(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ge(e), e.alternate === null)
            throw Error(r(340));
          Vt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 13:
        if (ge(e), l = e.memoizedState, l !== null && l.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Vt();
        }
        return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 19:
        return H(Bl), null;
      case 4:
        return Q(), null;
      case 10:
        return Fe(e.type), null;
      case 22:
      case 23:
        return ge(e), Sc(), l !== null && H(kt), l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
      case 24:
        return Fe(Yl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Os(l, e) {
    switch (nc(e), e.tag) {
      case 3:
        Fe(Yl), Q();
        break;
      case 26:
      case 27:
      case 5:
        _l(e);
        break;
      case 4:
        Q();
        break;
      case 31:
        e.memoizedState !== null && ge(e);
        break;
      case 13:
        ge(e);
        break;
      case 19:
        H(Bl);
        break;
      case 10:
        Fe(e.type);
        break;
      case 22:
      case 23:
        ge(e), Sc(), l !== null && H(kt);
        break;
      case 24:
        Fe(Yl);
    }
  }
  function Tu(l, e) {
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
      yl(e, e.return, o);
    }
  }
  function At(l, e, t) {
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
              } catch (C) {
                yl(
                  u,
                  d,
                  C
                );
              }
            }
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (C) {
      yl(e, e.return, C);
    }
  }
  function Ms(l) {
    var e = l.updateQueue;
    if (e !== null) {
      var t = l.stateNode;
      try {
        vr(e, t);
      } catch (n) {
        yl(l, l.return, n);
      }
    }
  }
  function Cs(l, e, t) {
    t.props = Pt(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (n) {
      yl(l, e, n);
    }
  }
  function zu(l, e) {
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
      yl(l, e, u);
    }
  }
  function Ge(l, e) {
    var t = l.ref, n = l.refCleanup;
    if (t !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          yl(l, e, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          yl(l, e, u);
        }
      else t.current = null;
  }
  function _s(l) {
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
      yl(l, l.return, u);
    }
  }
  function $c(l, e, t) {
    try {
      var n = l.stateNode;
      mh(n, l.type, t, e), n[ne] = e;
    } catch (u) {
      yl(l, l.return, u);
    }
  }
  function Ds(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ut(l.type) || l.tag === 4;
  }
  function Fc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ds(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ut(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ic(l, e, t) {
    var n = l.tag;
    if (n === 5 || n === 6)
      l = l.stateNode, e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.appendChild(l), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Ke));
    else if (n !== 4 && (n === 27 && Ut(l.type) && (t = l.stateNode, e = null), l = l.child, l !== null))
      for (Ic(l, e, t), l = l.sibling; l !== null; )
        Ic(l, e, t), l = l.sibling;
  }
  function Ha(l, e, t) {
    var n = l.tag;
    if (n === 5 || n === 6)
      l = l.stateNode, e ? t.insertBefore(l, e) : t.appendChild(l);
    else if (n !== 4 && (n === 27 && Ut(l.type) && (t = l.stateNode), l = l.child, l !== null))
      for (Ha(l, e, t), l = l.sibling; l !== null; )
        Ha(l, e, t), l = l.sibling;
  }
  function Us(l) {
    var e = l.stateNode, t = l.memoizedProps;
    try {
      for (var n = l.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Fl(e, n, t), e[Jl] = l, e[ne] = t;
    } catch (a) {
      yl(l, l.return, a);
    }
  }
  var tt = !1, Xl = !1, Pc = !1, Hs = typeof WeakSet == "function" ? WeakSet : Set, Vl = null;
  function k1(l, e) {
    if (l = l.containerInfo, Tf = Ia, l = Qo(l), Ki(l)) {
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
            var c = 0, o = -1, d = -1, b = 0, C = 0, N = l, p = null;
            e: for (; ; ) {
              for (var E; N !== t || u !== 0 && N.nodeType !== 3 || (o = c + u), N !== a || n !== 0 && N.nodeType !== 3 || (d = c + n), N.nodeType === 3 && (c += N.nodeValue.length), (E = N.firstChild) !== null; )
                p = N, N = E;
              for (; ; ) {
                if (N === l) break e;
                if (p === t && ++b === u && (o = c), p === a && ++C === n && (d = c), (E = N.nextSibling) !== null) break;
                N = p, p = N.parentNode;
              }
              N = E;
            }
            t = o === -1 || d === -1 ? null : { start: o, end: d };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (zf = { focusedElem: l, selectionRange: t }, Ia = !1, Vl = e; Vl !== null; )
      if (e = Vl, l = e.child, (e.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = e, Vl = l;
      else
        for (; Vl !== null; ) {
          switch (e = Vl, a = e.alternate, l = e.flags, e.tag) {
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
                  var L = Pt(
                    t.type,
                    u
                  );
                  l = n.getSnapshotBeforeUpdate(
                    L,
                    a
                  ), n.__reactInternalSnapshotBeforeUpdate = l;
                } catch (J) {
                  yl(
                    t,
                    t.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = e.stateNode.containerInfo, t = l.nodeType, t === 9)
                  Of(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Of(l);
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
            l.return = e.return, Vl = l;
            break;
          }
          Vl = e.return;
        }
  }
  function Rs(l, e, t) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ut(l, t), n & 4 && Tu(5, t);
        break;
      case 1:
        if (ut(l, t), n & 4)
          if (l = t.stateNode, e === null)
            try {
              l.componentDidMount();
            } catch (c) {
              yl(t, t.return, c);
            }
          else {
            var u = Pt(
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
              yl(
                t,
                t.return,
                c
              );
            }
          }
        n & 64 && Ms(t), n & 512 && zu(t, t.return);
        break;
      case 3:
        if (ut(l, t), n & 64 && (l = t.updateQueue, l !== null)) {
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
            vr(l, e);
          } catch (c) {
            yl(t, t.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Us(t);
      case 26:
      case 5:
        ut(l, t), e === null && n & 4 && _s(t), n & 512 && zu(t, t.return);
        break;
      case 12:
        ut(l, t);
        break;
      case 31:
        ut(l, t), n & 4 && ws(l, t);
        break;
      case 13:
        ut(l, t), n & 4 && js(l, t), n & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = nh.bind(
          null,
          t
        ), Ah(l, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || tt, !n) {
          e = e !== null && e.memoizedState !== null || Xl, u = tt;
          var a = Xl;
          tt = n, (Xl = e) && !a ? at(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : ut(l, t), tt = u, Xl = a;
        }
        break;
      case 30:
        break;
      default:
        ut(l, t);
    }
  }
  function Ns(l) {
    var e = l.alternate;
    e !== null && (l.alternate = null, Ns(e)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (e = l.stateNode, e !== null && Di(e)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ml = null, ae = !1;
  function nt(l, e, t) {
    for (t = t.child; t !== null; )
      Bs(l, e, t), t = t.sibling;
  }
  function Bs(l, e, t) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(Kn, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        Xl || Ge(t, e), nt(
          l,
          e,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Xl || Ge(t, e);
        var n = Ml, u = ae;
        Ut(t.type) && (Ml = t.stateNode, ae = !1), nt(
          l,
          e,
          t
        ), Hu(t.stateNode), Ml = n, ae = u;
        break;
      case 5:
        Xl || Ge(t, e);
      case 6:
        if (n = Ml, u = ae, Ml = null, nt(
          l,
          e,
          t
        ), Ml = n, ae = u, Ml !== null)
          if (ae)
            try {
              (Ml.nodeType === 9 ? Ml.body : Ml.nodeName === "HTML" ? Ml.ownerDocument.body : Ml).removeChild(t.stateNode);
            } catch (a) {
              yl(
                t,
                e,
                a
              );
            }
          else
            try {
              Ml.removeChild(t.stateNode);
            } catch (a) {
              yl(
                t,
                e,
                a
              );
            }
        break;
      case 18:
        Ml !== null && (ae ? (l = Ml, Md(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          t.stateNode
        ), Xn(l)) : Md(Ml, t.stateNode));
        break;
      case 4:
        n = Ml, u = ae, Ml = t.stateNode.containerInfo, ae = !0, nt(
          l,
          e,
          t
        ), Ml = n, ae = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At(2, t, e), Xl || At(4, t, e), nt(
          l,
          e,
          t
        );
        break;
      case 1:
        Xl || (Ge(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function" && Cs(
          t,
          e,
          n
        )), nt(
          l,
          e,
          t
        );
        break;
      case 21:
        nt(
          l,
          e,
          t
        );
        break;
      case 22:
        Xl = (n = Xl) || t.memoizedState !== null, nt(
          l,
          e,
          t
        ), Xl = n;
        break;
      default:
        nt(
          l,
          e,
          t
        );
    }
  }
  function ws(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Xn(l);
      } catch (t) {
        yl(e, e.return, t);
      }
    }
  }
  function js(l, e) {
    if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xn(l);
      } catch (t) {
        yl(e, e.return, t);
      }
  }
  function W1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var e = l.stateNode;
        return e === null && (e = l.stateNode = new Hs()), e;
      case 22:
        return l = l.stateNode, e = l._retryCache, e === null && (e = l._retryCache = new Hs()), e;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Ra(l, e) {
    var t = W1(l);
    e.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var u = uh.bind(null, l, n);
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
              if (Ut(o.type)) {
                Ml = o.stateNode, ae = !1;
                break l;
              }
              break;
            case 5:
              Ml = o.stateNode, ae = !1;
              break l;
            case 3:
            case 4:
              Ml = o.stateNode.containerInfo, ae = !0;
              break l;
          }
          o = o.return;
        }
        if (Ml === null) throw Error(r(160));
        Bs(a, c, u), Ml = null, ae = !1, a = u.alternate, a !== null && (a.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        qs(e, l), e = e.sibling;
  }
  var Be = null;
  function qs(l, e) {
    var t = l.alternate, n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ie(e, l), ce(l), n & 4 && (At(3, l, l.return), Tu(3, l), At(5, l, l.return));
        break;
      case 1:
        ie(e, l), ce(l), n & 512 && (Xl || t === null || Ge(t, t.return)), n & 64 && tt && (l = l.updateQueue, l !== null && (n = l.callbacks, n !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? n : t.concat(n))));
        break;
      case 26:
        var u = Be;
        if (ie(e, l), ce(l), n & 512 && (Xl || t === null || Ge(t, t.return)), n & 4) {
          var a = t !== null ? t.memoizedState : null;
          if (n = l.memoizedState, t === null)
            if (n === null)
              if (l.stateNode === null) {
                l: {
                  n = l.type, t = l.memoizedProps, u = u.ownerDocument || u;
                  e: switch (n) {
                    case "title":
                      a = u.getElementsByTagName("title")[0], (!a || a[Wn] || a[Jl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(n), u.head.insertBefore(
                        a,
                        u.querySelector("head > title")
                      )), Fl(a, n, t), a[Jl] = l, Zl(a), n = a;
                      break l;
                    case "link":
                      var c = qd(
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
                      a = u.createElement(n), Fl(a, n, t), u.head.appendChild(a);
                      break;
                    case "meta":
                      if (c = qd(
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
                      a = u.createElement(n), Fl(a, n, t), u.head.appendChild(a);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  a[Jl] = l, Zl(a), n = a;
                }
                l.stateNode = n;
              } else
                Yd(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = jd(
                u,
                n,
                l.memoizedProps
              );
          else
            a !== n ? (a === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : a.count--, n === null ? Yd(
              u,
              l.type,
              l.stateNode
            ) : jd(
              u,
              n,
              l.memoizedProps
            )) : n === null && l.stateNode !== null && $c(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        ie(e, l), ce(l), n & 512 && (Xl || t === null || Ge(t, t.return)), t !== null && n & 4 && $c(
          l,
          l.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (ie(e, l), ce(l), n & 512 && (Xl || t === null || Ge(t, t.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            rn(u, "");
          } catch (L) {
            yl(l, l.return, L);
          }
        }
        n & 4 && l.stateNode != null && (u = l.memoizedProps, $c(
          l,
          u,
          t !== null ? t.memoizedProps : u
        )), n & 1024 && (Pc = !0);
        break;
      case 6:
        if (ie(e, l), ce(l), n & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          n = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = n;
          } catch (L) {
            yl(l, l.return, L);
          }
        }
        break;
      case 3:
        if (ka = null, u = Be, Be = Ka(e.containerInfo), ie(e, l), Be = u, ce(l), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Xn(e.containerInfo);
          } catch (L) {
            yl(l, l.return, L);
          }
        Pc && (Pc = !1, Ys(l));
        break;
      case 4:
        n = Be, Be = Ka(
          l.stateNode.containerInfo
        ), ie(e, l), ce(l), Be = n;
        break;
      case 12:
        ie(e, l), ce(l);
        break;
      case 31:
        ie(e, l), ce(l), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Ra(l, n)));
        break;
      case 13:
        ie(e, l), ce(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ba = se()), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Ra(l, n)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var d = t !== null && t.memoizedState !== null, b = tt, C = Xl;
        if (tt = b || u, Xl = C || d, ie(e, l), Xl = C, tt = b, ce(l), n & 8192)
          l: for (e = l.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (t === null || d || tt || Xl || ln(l)), t = null, e = l; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                d = t = e;
                try {
                  if (a = d.stateNode, u)
                    c = a.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = d.stateNode;
                    var N = d.memoizedProps.style, p = N != null && N.hasOwnProperty("display") ? N.display : null;
                    o.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (L) {
                  yl(d, d.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (L) {
                  yl(d, d.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                d = e;
                try {
                  var E = d.stateNode;
                  u ? Cd(E, !0) : Cd(d.stateNode, !1);
                } catch (L) {
                  yl(d, d.return, L);
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
        n & 4 && (n = l.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, Ra(l, t))));
        break;
      case 19:
        ie(e, l), ce(l), n & 4 && (n = l.updateQueue, n !== null && (l.updateQueue = null, Ra(l, n)));
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
          if (Ds(n)) {
            t = n;
            break;
          }
          n = n.return;
        }
        if (t == null) throw Error(r(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode, a = Fc(l);
            Ha(l, a, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (rn(c, ""), t.flags &= -33);
            var o = Fc(l);
            Ha(l, o, c);
            break;
          case 3:
          case 4:
            var d = t.stateNode.containerInfo, b = Fc(l);
            Ic(
              l,
              b,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        yl(l, l.return, C);
      }
      l.flags &= -3;
    }
    e & 4096 && (l.flags &= -4097);
  }
  function Ys(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var e = l;
        Ys(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), l = l.sibling;
      }
  }
  function ut(l, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Rs(l, e.alternate, e), e = e.sibling;
  }
  function ln(l) {
    for (l = l.child; l !== null; ) {
      var e = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          At(4, e, e.return), ln(e);
          break;
        case 1:
          Ge(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Cs(
            e,
            e.return,
            t
          ), ln(e);
          break;
        case 27:
          Hu(e.stateNode);
        case 26:
        case 5:
          Ge(e, e.return), ln(e);
          break;
        case 22:
          e.memoizedState === null && ln(e);
          break;
        case 30:
          ln(e);
          break;
        default:
          ln(e);
      }
      l = l.sibling;
    }
  }
  function at(l, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, u = l, a = e, c = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          at(
            u,
            a,
            t
          ), Tu(4, a);
          break;
        case 1:
          if (at(
            u,
            a,
            t
          ), n = a, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (b) {
              yl(n, n.return, b);
            }
          if (n = a, u = n.updateQueue, u !== null) {
            var o = n.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  mr(d[u], o);
            } catch (b) {
              yl(n, n.return, b);
            }
          }
          t && c & 64 && Ms(a), zu(a, a.return);
          break;
        case 27:
          Us(a);
        case 26:
        case 5:
          at(
            u,
            a,
            t
          ), t && n === null && c & 4 && _s(a), zu(a, a.return);
          break;
        case 12:
          at(
            u,
            a,
            t
          );
          break;
        case 31:
          at(
            u,
            a,
            t
          ), t && c & 4 && ws(u, a);
          break;
        case 13:
          at(
            u,
            a,
            t
          ), t && c & 4 && js(u, a);
          break;
        case 22:
          a.memoizedState === null && at(
            u,
            a,
            t
          ), zu(a, a.return);
          break;
        case 30:
          break;
        default:
          at(
            u,
            a,
            t
          );
      }
      e = e.sibling;
    }
  }
  function lf(l, e) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && fu(t));
  }
  function ef(l, e) {
    l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && fu(l));
  }
  function we(l, e, t, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        xs(
          l,
          e,
          t,
          n
        ), e = e.sibling;
  }
  function xs(l, e, t, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        we(
          l,
          e,
          t,
          n
        ), u & 2048 && Tu(9, e);
        break;
      case 1:
        we(
          l,
          e,
          t,
          n
        );
        break;
      case 3:
        we(
          l,
          e,
          t,
          n
        ), u & 2048 && (l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && fu(l)));
        break;
      case 12:
        if (u & 2048) {
          we(
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
            yl(e, e.return, d);
          }
        } else
          we(
            l,
            e,
            t,
            n
          );
        break;
      case 31:
        we(
          l,
          e,
          t,
          n
        );
        break;
      case 13:
        we(
          l,
          e,
          t,
          n
        );
        break;
      case 23:
        break;
      case 22:
        a = e.stateNode, c = e.alternate, e.memoizedState !== null ? a._visibility & 2 ? we(
          l,
          e,
          t,
          n
        ) : Au(l, e) : a._visibility & 2 ? we(
          l,
          e,
          t,
          n
        ) : (a._visibility |= 2, Un(
          l,
          e,
          t,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && lf(c, e);
        break;
      case 24:
        we(
          l,
          e,
          t,
          n
        ), u & 2048 && ef(e.alternate, e);
        break;
      default:
        we(
          l,
          e,
          t,
          n
        );
    }
  }
  function Un(l, e, t, n, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var a = l, c = e, o = t, d = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            a,
            c,
            o,
            d,
            u
          ), Tu(8, c);
          break;
        case 23:
          break;
        case 22:
          var C = c.stateNode;
          c.memoizedState !== null ? C._visibility & 2 ? Un(
            a,
            c,
            o,
            d,
            u
          ) : Au(
            a,
            c
          ) : (C._visibility |= 2, Un(
            a,
            c,
            o,
            d,
            u
          )), u && b & 2048 && lf(
            c.alternate,
            c
          );
          break;
        case 24:
          Un(
            a,
            c,
            o,
            d,
            u
          ), u && b & 2048 && ef(c.alternate, c);
          break;
        default:
          Un(
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
  function Au(l, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = l, n = e, u = n.flags;
        switch (n.tag) {
          case 22:
            Au(t, n), u & 2048 && lf(
              n.alternate,
              n
            );
            break;
          case 24:
            Au(t, n), u & 2048 && ef(n.alternate, n);
            break;
          default:
            Au(t, n);
        }
        e = e.sibling;
      }
  }
  var Eu = 8192;
  function Hn(l, e, t) {
    if (l.subtreeFlags & Eu)
      for (l = l.child; l !== null; )
        Gs(
          l,
          e,
          t
        ), l = l.sibling;
  }
  function Gs(l, e, t) {
    switch (l.tag) {
      case 26:
        Hn(
          l,
          e,
          t
        ), l.flags & Eu && l.memoizedState !== null && wh(
          t,
          Be,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Hn(
          l,
          e,
          t
        );
        break;
      case 3:
      case 4:
        var n = Be;
        Be = Ka(l.stateNode.containerInfo), Hn(
          l,
          e,
          t
        ), Be = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Eu, Eu = 16777216, Hn(
          l,
          e,
          t
        ), Eu = n) : Hn(
          l,
          e,
          t
        ));
        break;
      default:
        Hn(
          l,
          e,
          t
        );
    }
  }
  function Xs(l) {
    var e = l.alternate;
    if (e !== null && (l = e.child, l !== null)) {
      e.child = null;
      do
        e = l.sibling, l.sibling = null, l = e;
      while (l !== null);
    }
  }
  function Ou(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          Vl = n, Qs(
            n,
            l
          );
        }
      Xs(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ls(l), l = l.sibling;
  }
  function Ls(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ou(l), l.flags & 2048 && At(9, l, l.return);
        break;
      case 3:
        Ou(l);
        break;
      case 12:
        Ou(l);
        break;
      case 22:
        var e = l.stateNode;
        l.memoizedState !== null && e._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (e._visibility &= -3, Na(l)) : Ou(l);
        break;
      default:
        Ou(l);
    }
  }
  function Na(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          Vl = n, Qs(
            n,
            l
          );
        }
      Xs(l);
    }
    for (l = l.child; l !== null; ) {
      switch (e = l, e.tag) {
        case 0:
        case 11:
        case 15:
          At(8, e, e.return), Na(e);
          break;
        case 22:
          t = e.stateNode, t._visibility & 2 && (t._visibility &= -3, Na(e));
          break;
        default:
          Na(e);
      }
      l = l.sibling;
    }
  }
  function Qs(l, e) {
    for (; Vl !== null; ) {
      var t = Vl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          At(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var n = t.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          fu(t.memoizedState.cache);
      }
      if (n = t.child, n !== null) n.return = t, Vl = n;
      else
        l: for (t = l; Vl !== null; ) {
          n = Vl;
          var u = n.sibling, a = n.return;
          if (Ns(n), n === t) {
            Vl = null;
            break l;
          }
          if (u !== null) {
            u.return = a, Vl = u;
            break l;
          }
          Vl = a;
        }
    }
  }
  var $1 = {
    getCacheForType: function(l) {
      var e = Wl(Yl), t = e.data.get(l);
      return t === void 0 && (t = l(), e.data.set(l, t)), t;
    },
    cacheSignal: function() {
      return Wl(Yl).controller.signal;
    }
  }, F1 = typeof WeakMap == "function" ? WeakMap : Map, rl = 0, bl = null, tl = null, ul = 0, hl = 0, Se = null, Et = !1, Rn = !1, tf = !1, it = 0, Hl = 0, Ot = 0, en = 0, nf = 0, be = 0, Nn = 0, Mu = null, fe = null, uf = !1, Ba = 0, Zs = 0, wa = 1 / 0, ja = null, Mt = null, Ll = 0, Ct = null, Bn = null, ct = 0, af = 0, cf = null, Vs = null, Cu = 0, ff = null;
  function pe() {
    return (rl & 2) !== 0 && ul !== 0 ? ul & -ul : O.T !== null ? yf() : io();
  }
  function Ks() {
    if (be === 0)
      if ((ul & 536870912) === 0 || il) {
        var l = Zu;
        Zu <<= 1, (Zu & 3932160) === 0 && (Zu = 262144), be = l;
      } else be = 536870912;
    return l = ve.current, l !== null && (l.flags |= 32), be;
  }
  function oe(l, e, t) {
    (l === bl && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null) && (wn(l, 0), _t(
      l,
      ul,
      be,
      !1
    )), kn(l, t), ((rl & 2) === 0 || l !== bl) && (l === bl && ((rl & 2) === 0 && (en |= t), Hl === 4 && _t(
      l,
      ul,
      be,
      !1
    )), Xe(l));
  }
  function Js(l, e, t) {
    if ((rl & 6) !== 0) throw Error(r(327));
    var n = !t && (e & 127) === 0 && (e & l.expiredLanes) === 0 || Jn(l, e), u = n ? lh(l, e) : rf(l, e, !0), a = n;
    do {
      if (u === 0) {
        Rn && !n && _t(l, e, 0, !1);
        break;
      } else {
        if (t = l.current.alternate, a && !I1(t)) {
          u = rf(l, e, !1), a = !1;
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
              u = Mu;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (wn(o, c).flags |= 256), c = rf(
                o,
                c,
                !1
              ), c !== 2) {
                if (tf && !d) {
                  o.errorRecoveryDisabledLanes |= a, en |= a, u = 4;
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
          wn(l, 0), _t(l, e, 0, !0);
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
              _t(
                n,
                e,
                be,
                !Et
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
          if ((e & 62914560) === e && (u = Ba + 300 - se(), 10 < u)) {
            if (_t(
              n,
              e,
              be,
              !Et
            ), Ku(n, 0, !0) !== 0) break l;
            ct = e, n.timeoutHandle = Ed(
              ks.bind(
                null,
                n,
                t,
                fe,
                ja,
                uf,
                e,
                be,
                en,
                Nn,
                Et,
                a,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          ks(
            n,
            t,
            fe,
            ja,
            uf,
            e,
            be,
            en,
            Nn,
            Et,
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
  function ks(l, e, t, n, u, a, c, o, d, b, C, N, p, E) {
    if (l.timeoutHandle = -1, N = e.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ke
      }, Gs(
        e,
        a,
        N
      );
      var L = (a & 62914560) === a ? Ba - se() : (a & 4194048) === a ? Zs - se() : 0;
      if (L = jh(
        N,
        L
      ), L !== null) {
        ct = a, l.cancelPendingCommit = L(
          td.bind(
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
            C,
            N,
            null,
            p,
            E
          )
        ), _t(l, a, c, !b);
        return;
      }
    }
    td(
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
  function I1(l) {
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
  function _t(l, e, t, n) {
    e &= ~nf, e &= ~en, l.suspendedLanes |= e, l.pingedLanes &= ~e, n && (l.warmLanes |= e), n = l.expirationTimes;
    for (var u = e; 0 < u; ) {
      var a = 31 - he(u), c = 1 << a;
      n[a] = -1, u &= ~c;
    }
    t !== 0 && no(l, t, e);
  }
  function qa() {
    return (rl & 6) === 0 ? (_u(0), !1) : !0;
  }
  function of() {
    if (tl !== null) {
      if (hl === 0)
        var l = tl.return;
      else
        l = tl, $e = Kt = null, Ec(l), On = null, ru = 0, l = tl;
      for (; l !== null; )
        Os(l.alternate, l), l = l.return;
      tl = null;
    }
  }
  function wn(l, e) {
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, Sh(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), ct = 0, of(), bl = l, tl = t = ke(l.current, null), ul = e, hl = 0, Se = null, Et = !1, Rn = Jn(l, e), tf = !1, Nn = be = nf = en = Ot = Hl = 0, fe = Mu = null, uf = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = l.entangledLanes;
    if (n !== 0)
      for (l = l.entanglements, n &= e; 0 < n; ) {
        var u = 31 - he(n), a = 1 << u;
        e |= l[u], n &= ~a;
      }
    return it = e, ua(), t;
  }
  function Ws(l, e) {
    F = null, O.H = Su, e === En || e === da ? (e = sr(), hl = 3) : e === dc ? (e = sr(), hl = 4) : hl = e === Gc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Se = e, tl === null && (Hl = 1, Ma(
      l,
      Oe(e, l.current)
    ));
  }
  function $s() {
    var l = ve.current;
    return l === null ? !0 : (ul & 4194048) === ul ? De === null : (ul & 62914560) === ul || (ul & 536870912) !== 0 ? l === De : !1;
  }
  function Fs() {
    var l = O.H;
    return O.H = Su, l === null ? Su : l;
  }
  function Is() {
    var l = O.A;
    return O.A = $1, l;
  }
  function Ya() {
    Hl = 4, Et || (ul & 4194048) !== ul && ve.current !== null || (Rn = !0), (Ot & 134217727) === 0 && (en & 134217727) === 0 || bl === null || _t(
      bl,
      ul,
      be,
      !1
    );
  }
  function rf(l, e, t) {
    var n = rl;
    rl |= 2;
    var u = Fs(), a = Is();
    (bl !== l || ul !== e) && (ja = null, wn(l, e)), e = !1;
    var c = Hl;
    l: do
      try {
        if (hl !== 0 && tl !== null) {
          var o = tl, d = Se;
          switch (hl) {
            case 8:
              of(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = !0);
              var b = hl;
              if (hl = 0, Se = null, jn(l, o, d, b), t && Rn) {
                c = 0;
                break l;
              }
              break;
            default:
              b = hl, hl = 0, Se = null, jn(l, o, d, b);
          }
        }
        P1(), c = Hl;
        break;
      } catch (C) {
        Ws(l, C);
      }
    while (!0);
    return e && l.shellSuspendCounter++, $e = Kt = null, rl = n, O.H = u, O.A = a, tl === null && (bl = null, ul = 0, ua()), c;
  }
  function P1() {
    for (; tl !== null; ) Ps(tl);
  }
  function lh(l, e) {
    var t = rl;
    rl |= 2;
    var n = Fs(), u = Is();
    bl !== l || ul !== e ? (ja = null, wa = se() + 500, wn(l, e)) : Rn = Jn(
      l,
      e
    );
    l: do
      try {
        if (hl !== 0 && tl !== null) {
          e = tl;
          var a = Se;
          e: switch (hl) {
            case 1:
              hl = 0, Se = null, jn(l, e, a, 1);
              break;
            case 2:
            case 9:
              if (or(a)) {
                hl = 0, Se = null, ld(e);
                break;
              }
              e = function() {
                hl !== 2 && hl !== 9 || bl !== l || (hl = 7), Xe(l);
              }, a.then(e, e);
              break l;
            case 3:
              hl = 7;
              break l;
            case 4:
              hl = 5;
              break l;
            case 7:
              or(a) ? (hl = 0, Se = null, ld(e)) : (hl = 0, Se = null, jn(l, e, a, 7));
              break;
            case 5:
              var c = null;
              switch (tl.tag) {
                case 26:
                  c = tl.memoizedState;
                case 5:
                case 27:
                  var o = tl;
                  if (c ? xd(c) : o.stateNode.complete) {
                    hl = 0, Se = null;
                    var d = o.sibling;
                    if (d !== null) tl = d;
                    else {
                      var b = o.return;
                      b !== null ? (tl = b, xa(b)) : tl = null;
                    }
                    break e;
                  }
              }
              hl = 0, Se = null, jn(l, e, a, 5);
              break;
            case 6:
              hl = 0, Se = null, jn(l, e, a, 6);
              break;
            case 8:
              of(), Hl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        eh();
        break;
      } catch (C) {
        Ws(l, C);
      }
    while (!0);
    return $e = Kt = null, O.H = n, O.A = u, rl = t, tl !== null ? 0 : (bl = null, ul = 0, ua(), Hl);
  }
  function eh() {
    for (; tl !== null && !E0(); )
      Ps(tl);
  }
  function Ps(l) {
    var e = As(l.alternate, l, it);
    l.memoizedProps = l.pendingProps, e === null ? xa(l) : tl = e;
  }
  function ld(l) {
    var e = l, t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = gs(
          t,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ul
        );
        break;
      case 11:
        e = gs(
          t,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ul
        );
        break;
      case 5:
        Ec(e);
      default:
        Os(t, e), e = tl = Io(e, it), e = As(t, e, it);
    }
    l.memoizedProps = l.pendingProps, e === null ? xa(l) : tl = e;
  }
  function jn(l, e, t, n) {
    $e = Kt = null, Ec(e), On = null, ru = 0;
    var u = e.return;
    try {
      if (Q1(
        l,
        u,
        e,
        t,
        ul
      )) {
        Hl = 1, Ma(
          l,
          Oe(t, l.current)
        ), tl = null;
        return;
      }
    } catch (a) {
      if (u !== null) throw tl = u, a;
      Hl = 1, Ma(
        l,
        Oe(t, l.current)
      ), tl = null;
      return;
    }
    e.flags & 32768 ? (il || n === 1 ? l = !0 : Rn || (ul & 536870912) !== 0 ? l = !1 : (Et = l = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = ve.current, n !== null && n.tag === 13 && (n.flags |= 16384))), ed(e, l)) : xa(e);
  }
  function xa(l) {
    var e = l;
    do {
      if ((e.flags & 32768) !== 0) {
        ed(
          e,
          Et
        );
        return;
      }
      l = e.return;
      var t = K1(
        e.alternate,
        e,
        it
      );
      if (t !== null) {
        tl = t;
        return;
      }
      if (e = e.sibling, e !== null) {
        tl = e;
        return;
      }
      tl = e = l;
    } while (e !== null);
    Hl === 0 && (Hl = 5);
  }
  function ed(l, e) {
    do {
      var t = J1(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, tl = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !e && (l = l.sibling, l !== null)) {
        tl = l;
        return;
      }
      tl = l = t;
    } while (l !== null);
    Hl = 6, tl = null;
  }
  function td(l, e, t, n, u, a, c, o, d) {
    l.cancelPendingCommit = null;
    do
      Ga();
    while (Ll !== 0);
    if ((rl & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === l.current) throw Error(r(177));
      if (a = e.lanes | e.childLanes, a |= Fi, B0(
        l,
        t,
        a,
        c,
        o,
        d
      ), l === bl && (tl = bl = null, ul = 0), Bn = e, Ct = l, ct = t, af = a, cf = u, Vs = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, ah(Lu, function() {
        return cd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null, u = _.p, _.p = 2, c = rl, rl |= 4;
        try {
          k1(l, e, t);
        } finally {
          rl = c, _.p = u, O.T = n;
        }
      }
      Ll = 1, nd(), ud(), ad();
    }
  }
  function nd() {
    if (Ll === 1) {
      Ll = 0;
      var l = Ct, e = Bn, t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        t = O.T, O.T = null;
        var n = _.p;
        _.p = 2;
        var u = rl;
        rl |= 4;
        try {
          qs(e, l);
          var a = zf, c = Qo(l.containerInfo), o = a.focusedElem, d = a.selectionRange;
          if (c !== o && o && o.ownerDocument && Lo(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && Ki(o)) {
              var b = d.start, C = d.end;
              if (C === void 0 && (C = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  C,
                  o.value.length
                );
              else {
                var N = o.ownerDocument || document, p = N && N.defaultView || window;
                if (p.getSelection) {
                  var E = p.getSelection(), L = o.textContent.length, J = Math.min(d.start, L), gl = d.end === void 0 ? J : Math.min(d.end, L);
                  !E.extend && J > gl && (c = gl, gl = J, J = c);
                  var v = Xo(
                    o,
                    J
                  ), y = Xo(
                    o,
                    gl
                  );
                  if (v && y && (E.rangeCount !== 1 || E.anchorNode !== v.node || E.anchorOffset !== v.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var S = N.createRange();
                    S.setStart(v.node, v.offset), E.removeAllRanges(), J > gl ? (E.addRange(S), E.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), E.addRange(S));
                  }
                }
              }
            }
            for (N = [], E = o; E = E.parentNode; )
              E.nodeType === 1 && N.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < N.length; o++) {
              var D = N[o];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Ia = !!Tf, zf = Tf = null;
        } finally {
          rl = u, _.p = n, O.T = t;
        }
      }
      l.current = e, Ll = 2;
    }
  }
  function ud() {
    if (Ll === 2) {
      Ll = 0;
      var l = Ct, e = Bn, t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        t = O.T, O.T = null;
        var n = _.p;
        _.p = 2;
        var u = rl;
        rl |= 4;
        try {
          Rs(l, e.alternate, e);
        } finally {
          rl = u, _.p = n, O.T = t;
        }
      }
      Ll = 3;
    }
  }
  function ad() {
    if (Ll === 4 || Ll === 3) {
      Ll = 0, O0();
      var l = Ct, e = Bn, t = ct, n = Vs;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ll = 5 : (Ll = 0, Bn = Ct = null, id(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Mt = null), Ci(t), e = e.stateNode, de && typeof de.onCommitFiberRoot == "function")
        try {
          de.onCommitFiberRoot(
            Kn,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = O.T, u = _.p, _.p = 2, O.T = null;
        try {
          for (var a = l.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            a(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          O.T = e, _.p = u;
        }
      }
      (ct & 3) !== 0 && Ga(), Xe(l), u = l.pendingLanes, (t & 261930) !== 0 && (u & 42) !== 0 ? l === ff ? Cu++ : (Cu = 0, ff = l) : Cu = 0, _u(0);
    }
  }
  function id(l, e) {
    (l.pooledCacheLanes &= e) === 0 && (e = l.pooledCache, e != null && (l.pooledCache = null, fu(e)));
  }
  function Ga() {
    return nd(), ud(), ad(), cd();
  }
  function cd() {
    if (Ll !== 5) return !1;
    var l = Ct, e = af;
    af = 0;
    var t = Ci(ct), n = O.T, u = _.p;
    try {
      _.p = 32 > t ? 32 : t, O.T = null, t = cf, cf = null;
      var a = Ct, c = ct;
      if (Ll = 0, Bn = Ct = null, ct = 0, (rl & 6) !== 0) throw Error(r(331));
      var o = rl;
      if (rl |= 4, Ls(a.current), xs(
        a,
        a.current,
        c,
        t
      ), rl = o, _u(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
        try {
          de.onPostCommitFiberRoot(Kn, a);
        } catch {
        }
      return !0;
    } finally {
      _.p = u, O.T = n, id(l, e);
    }
  }
  function fd(l, e, t) {
    e = Oe(t, e), e = xc(l.stateNode, e, 2), l = pt(l, e, 2), l !== null && (kn(l, 2), Xe(l));
  }
  function yl(l, e, t) {
    if (l.tag === 3)
      fd(l, l, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          fd(
            e,
            l,
            t
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Mt === null || !Mt.has(n))) {
            l = Oe(t, l), t = os(2), n = pt(e, t, 2), n !== null && (rs(
              t,
              n,
              e,
              l
            ), kn(n, 2), Xe(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function sf(l, e, t) {
    var n = l.pingCache;
    if (n === null) {
      n = l.pingCache = new F1();
      var u = /* @__PURE__ */ new Set();
      n.set(e, u);
    } else
      u = n.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(e, u));
    u.has(t) || (tf = !0, u.add(t), l = th.bind(null, l, e, t), e.then(l, l));
  }
  function th(l, e, t) {
    var n = l.pingCache;
    n !== null && n.delete(e), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, bl === l && (ul & t) === t && (Hl === 4 || Hl === 3 && (ul & 62914560) === ul && 300 > se() - Ba ? (rl & 2) === 0 && wn(l, 0) : nf |= t, Nn === ul && (Nn = 0)), Xe(l);
  }
  function od(l, e) {
    e === 0 && (e = to()), l = Qt(l, e), l !== null && (kn(l, e), Xe(l));
  }
  function nh(l) {
    var e = l.memoizedState, t = 0;
    e !== null && (t = e.retryLane), od(l, t);
  }
  function uh(l, e) {
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
    n !== null && n.delete(e), od(l, t);
  }
  function ah(l, e) {
    return Ai(l, e);
  }
  var Xa = null, qn = null, df = !1, La = !1, hf = !1, Dt = 0;
  function Xe(l) {
    l !== qn && l.next === null && (qn === null ? Xa = qn = l : qn = qn.next = l), La = !0, df || (df = !0, ch());
  }
  function _u(l, e) {
    if (!hf && La) {
      hf = !0;
      do
        for (var t = !1, n = Xa; n !== null; ) {
          if (l !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var a = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              a = (1 << 31 - he(42 | l) + 1) - 1, a &= u & ~(c & ~o), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
            }
            a !== 0 && (t = !0, hd(n, a));
          } else
            a = ul, a = Ku(
              n,
              n === bl ? a : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (a & 3) === 0 || Jn(n, a) || (t = !0, hd(n, a));
          n = n.next;
        }
      while (t);
      hf = !1;
    }
  }
  function ih() {
    rd();
  }
  function rd() {
    La = df = !1;
    var l = 0;
    Dt !== 0 && gh() && (l = Dt);
    for (var e = se(), t = null, n = Xa; n !== null; ) {
      var u = n.next, a = sd(n, e);
      a === 0 ? (n.next = null, t === null ? Xa = u : t.next = u, u === null && (qn = t)) : (t = n, (l !== 0 || (a & 3) !== 0) && (La = !0)), n = u;
    }
    Ll !== 0 && Ll !== 5 || _u(l), Dt !== 0 && (Dt = 0);
  }
  function sd(l, e) {
    for (var t = l.suspendedLanes, n = l.pingedLanes, u = l.expirationTimes, a = l.pendingLanes & -62914561; 0 < a; ) {
      var c = 31 - he(a), o = 1 << c, d = u[c];
      d === -1 ? ((o & t) === 0 || (o & n) !== 0) && (u[c] = N0(o, e)) : d <= e && (l.expiredLanes |= o), a &= ~o;
    }
    if (e = bl, t = ul, t = Ku(
      l,
      l === e ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), n = l.callbackNode, t === 0 || l === e && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null)
      return n !== null && n !== null && Ei(n), l.callbackNode = null, l.callbackPriority = 0;
    if ((t & 3) === 0 || Jn(l, t)) {
      if (e = t & -t, e === l.callbackPriority) return e;
      switch (n !== null && Ei(n), Ci(t)) {
        case 2:
        case 8:
          t = lo;
          break;
        case 32:
          t = Lu;
          break;
        case 268435456:
          t = eo;
          break;
        default:
          t = Lu;
      }
      return n = dd.bind(null, l), t = Ai(t, n), l.callbackPriority = e, l.callbackNode = t, e;
    }
    return n !== null && n !== null && Ei(n), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function dd(l, e) {
    if (Ll !== 0 && Ll !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var t = l.callbackNode;
    if (Ga() && l.callbackNode !== t)
      return null;
    var n = ul;
    return n = Ku(
      l,
      l === bl ? n : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), n === 0 ? null : (Js(l, n, e), sd(l, se()), l.callbackNode != null && l.callbackNode === t ? dd.bind(null, l) : null);
  }
  function hd(l, e) {
    if (Ga()) return null;
    Js(l, e, !0);
  }
  function ch() {
    bh(function() {
      (rl & 6) !== 0 ? Ai(
        Pf,
        ih
      ) : rd();
    });
  }
  function yf() {
    if (Dt === 0) {
      var l = zn;
      l === 0 && (l = Qu, Qu <<= 1, (Qu & 261888) === 0 && (Qu = 256)), Dt = l;
    }
    return Dt;
  }
  function yd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : $u("" + l);
  }
  function md(l, e) {
    var t = e.ownerDocument.createElement("input");
    return t.name = e.name, t.value = e.value, l.id && t.setAttribute("form", l.id), e.parentNode.insertBefore(t, e), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function fh(l, e, t, n, u) {
    if (e === "submit" && t && t.stateNode === u) {
      var a = yd(
        (u[ne] || null).action
      ), c = n.submitter;
      c && (e = (e = c[ne] || null) ? yd(e.formAction) : c.getAttribute("formAction"), e !== null && (a = e, c = null));
      var o = new la(
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
                if (Dt !== 0) {
                  var d = c ? md(u, c) : new FormData(u);
                  Nc(
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
                typeof a == "function" && (o.preventDefault(), d = c ? md(u, c) : new FormData(u), Nc(
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
  for (var mf = 0; mf < $i.length; mf++) {
    var vf = $i[mf], oh = vf.toLowerCase(), rh = vf[0].toUpperCase() + vf.slice(1);
    Ne(
      oh,
      "on" + rh
    );
  }
  Ne(Ko, "onAnimationEnd"), Ne(Jo, "onAnimationIteration"), Ne(ko, "onAnimationStart"), Ne("dblclick", "onDoubleClick"), Ne("focusin", "onFocus"), Ne("focusout", "onBlur"), Ne(M1, "onTransitionRun"), Ne(C1, "onTransitionStart"), Ne(_1, "onTransitionCancel"), Ne(Wo, "onTransitionEnd"), fn("onMouseEnter", ["mouseout", "mouseover"]), fn("onMouseLeave", ["mouseout", "mouseover"]), fn("onPointerEnter", ["pointerout", "pointerover"]), fn("onPointerLeave", ["pointerout", "pointerover"]), xt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du)
  );
  function vd(l, e) {
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
            } catch (C) {
              na(C);
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
            } catch (C) {
              na(C);
            }
            u.currentTarget = null, a = d;
          }
      }
    }
  }
  function nl(l, e) {
    var t = e[_i];
    t === void 0 && (t = e[_i] = /* @__PURE__ */ new Set());
    var n = l + "__bubble";
    t.has(n) || (gd(e, l, 2, !1), t.add(n));
  }
  function gf(l, e, t) {
    var n = 0;
    e && (n |= 4), gd(
      t,
      l,
      n,
      e
    );
  }
  var Qa = "_reactListening" + Math.random().toString(36).slice(2);
  function Sf(l) {
    if (!l[Qa]) {
      l[Qa] = !0, oo.forEach(function(t) {
        t !== "selectionchange" && (sh.has(t) || gf(t, !1, l), gf(t, !0, l));
      });
      var e = l.nodeType === 9 ? l : l.ownerDocument;
      e === null || e[Qa] || (e[Qa] = !0, gf("selectionchange", !1, e));
    }
  }
  function gd(l, e, t, n) {
    switch (Kd(e)) {
      case 2:
        var u = xh;
        break;
      case 8:
        u = Gh;
        break;
      default:
        u = Nf;
    }
    t = u.bind(
      null,
      e,
      t,
      l
    ), u = void 0, !qi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), n ? u !== void 0 ? l.addEventListener(e, t, {
      capture: !0,
      passive: u
    }) : l.addEventListener(e, t, !0) : u !== void 0 ? l.addEventListener(e, t, {
      passive: u
    }) : l.addEventListener(e, t, !1);
  }
  function bf(l, e, t, n, u) {
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
            if (c = un(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = a = c;
              continue l;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    zo(function() {
      var b = a, C = wi(t), N = [];
      l: {
        var p = $o.get(l);
        if (p !== void 0) {
          var E = la, L = l;
          switch (l) {
            case "keypress":
              if (Iu(t) === 0) break l;
            case "keydown":
            case "keyup":
              E = u1;
              break;
            case "focusin":
              L = "focus", E = Xi;
              break;
            case "focusout":
              L = "blur", E = Xi;
              break;
            case "beforeblur":
            case "afterblur":
              E = Xi;
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
              E = Oo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = K0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = c1;
              break;
            case Ko:
            case Jo:
            case ko:
              E = W0;
              break;
            case Wo:
              E = o1;
              break;
            case "scroll":
            case "scrollend":
              E = Z0;
              break;
            case "wheel":
              E = s1;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = F0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Co;
              break;
            case "toggle":
            case "beforetoggle":
              E = h1;
          }
          var J = (e & 4) !== 0, gl = !J && (l === "scroll" || l === "scrollend"), v = J ? p !== null ? p + "Capture" : null : p;
          J = [];
          for (var y = b, S; y !== null; ) {
            var D = y;
            if (S = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || S === null || v === null || (D = Fn(y, v), D != null && J.push(
              Uu(y, D, S)
            )), gl) break;
            y = y.return;
          }
          0 < J.length && (p = new E(
            p,
            L,
            null,
            t,
            C
          ), N.push({ event: p, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        l: {
          if (p = l === "mouseover" || l === "pointerover", E = l === "mouseout" || l === "pointerout", p && t !== Bi && (L = t.relatedTarget || t.fromElement) && (un(L) || L[nn]))
            break l;
          if ((E || p) && (p = C.window === C ? C : (p = C.ownerDocument) ? p.defaultView || p.parentWindow : window, E ? (L = t.relatedTarget || t.toElement, E = b, L = L ? un(L) : null, L !== null && (gl = U(L), J = L.tag, L !== gl || J !== 5 && J !== 27 && J !== 6) && (L = null)) : (E = null, L = b), E !== L)) {
            if (J = Oo, D = "onMouseLeave", v = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (J = Co, D = "onPointerLeave", v = "onPointerEnter", y = "pointer"), gl = E == null ? p : $n(E), S = L == null ? p : $n(L), p = new J(
              D,
              y + "leave",
              E,
              t,
              C
            ), p.target = gl, p.relatedTarget = S, D = null, un(C) === b && (J = new J(
              v,
              y + "enter",
              L,
              t,
              C
            ), J.target = S, J.relatedTarget = gl, D = J), gl = D, E && L)
              e: {
                for (J = dh, v = E, y = L, S = 0, D = v; D; D = J(D))
                  S++;
                D = 0;
                for (var K = y; K; K = J(K))
                  D++;
                for (; 0 < S - D; )
                  v = J(v), S--;
                for (; 0 < D - S; )
                  y = J(y), D--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    J = v;
                    break e;
                  }
                  v = J(v), y = J(y);
                }
                J = null;
              }
            else J = null;
            E !== null && Sd(
              N,
              p,
              E,
              J,
              !1
            ), L !== null && gl !== null && Sd(
              N,
              gl,
              L,
              J,
              !0
            );
          }
        }
        l: {
          if (p = b ? $n(b) : window, E = p.nodeName && p.nodeName.toLowerCase(), E === "select" || E === "input" && p.type === "file")
            var fl = wo;
          else if (No(p))
            if (jo)
              fl = A1;
            else {
              fl = T1;
              var V = p1;
            }
          else
            E = p.nodeName, !E || E.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? b && Ni(b.elementType) && (fl = wo) : fl = z1;
          if (fl && (fl = fl(l, b))) {
            Bo(
              N,
              fl,
              t,
              C
            );
            break l;
          }
          V && V(l, p, b), l === "focusout" && b && p.type === "number" && b.memoizedProps.value != null && Ri(p, "number", p.value);
        }
        switch (V = b ? $n(b) : window, l) {
          case "focusin":
            (No(V) || V.contentEditable === "true") && (yn = V, Ji = b, au = null);
            break;
          case "focusout":
            au = Ji = yn = null;
            break;
          case "mousedown":
            ki = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ki = !1, Zo(N, t, C);
            break;
          case "selectionchange":
            if (O1) break;
          case "keydown":
          case "keyup":
            Zo(N, t, C);
        }
        var ll;
        if (Qi)
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
          hn ? Ho(l, t) && (al = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (al = "onCompositionStart");
        al && (_o && t.locale !== "ko" && (hn || al !== "onCompositionStart" ? al === "onCompositionEnd" && hn && (ll = Ao()) : (ht = C, Yi = "value" in ht ? ht.value : ht.textContent, hn = !0)), V = Za(b, al), 0 < V.length && (al = new Mo(
          al,
          l,
          null,
          t,
          C
        ), N.push({ event: al, listeners: V }), ll ? al.data = ll : (ll = Ro(t), ll !== null && (al.data = ll)))), (ll = m1 ? v1(l, t) : g1(l, t)) && (al = Za(b, "onBeforeInput"), 0 < al.length && (V = new Mo(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          C
        ), N.push({
          event: V,
          listeners: al
        }), V.data = ll)), fh(
          N,
          l,
          b,
          t,
          C
        );
      }
      vd(N, e);
    });
  }
  function Uu(l, e, t) {
    return {
      instance: l,
      listener: e,
      currentTarget: t
    };
  }
  function Za(l, e) {
    for (var t = e + "Capture", n = []; l !== null; ) {
      var u = l, a = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || a === null || (u = Fn(l, t), u != null && n.unshift(
        Uu(l, u, a)
      ), u = Fn(l, e), u != null && n.push(
        Uu(l, u, a)
      )), l.tag === 3) return n;
      l = l.return;
    }
    return [];
  }
  function dh(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Sd(l, e, t, n, u) {
    for (var a = e._reactName, c = []; t !== null && t !== n; ) {
      var o = t, d = o.alternate, b = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (d = b, u ? (b = Fn(t, a), b != null && c.unshift(
        Uu(t, b, d)
      )) : u || (b = Fn(t, a), b != null && c.push(
        Uu(t, b, d)
      ))), t = t.return;
    }
    c.length !== 0 && l.push({ event: e, listeners: c });
  }
  var hh = /\r\n?/g, yh = /\u0000|\uFFFD/g;
  function bd(l) {
    return (typeof l == "string" ? l : "" + l).replace(hh, `
`).replace(yh, "");
  }
  function pd(l, e) {
    return e = bd(e), bd(l) === e;
  }
  function vl(l, e, t, n, u, a) {
    switch (t) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || rn(l, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && rn(l, "" + n);
        break;
      case "className":
        ku(l, "class", n);
        break;
      case "tabIndex":
        ku(l, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(l, t, n);
        break;
      case "style":
        po(l, n, a);
        break;
      case "data":
        if (e !== "object") {
          ku(l, "data", n);
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
        n = $u("" + n), l.setAttribute(t, n);
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
        n = $u("" + n), l.setAttribute(t, n);
        break;
      case "onClick":
        n != null && (l.onclick = Ke);
        break;
      case "onScroll":
        n != null && nl("scroll", l);
        break;
      case "onScrollEnd":
        n != null && nl("scrollend", l);
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
        t = $u("" + n), l.setAttributeNS(
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
        nl("beforetoggle", l), nl("toggle", l), Ju(l, "popover", n);
        break;
      case "xlinkActuate":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Ve(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Ve(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Ve(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Ve(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Ju(l, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = L0.get(t) || t, Ju(l, t, n));
    }
  }
  function pf(l, e, t, n, u, a) {
    switch (t) {
      case "style":
        po(l, n, a);
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
        typeof n == "string" ? rn(l, n) : (typeof n == "number" || typeof n == "bigint") && rn(l, "" + n);
        break;
      case "onScroll":
        n != null && nl("scroll", l);
        break;
      case "onScrollEnd":
        n != null && nl("scrollend", l);
        break;
      case "onClick":
        n != null && (l.onclick = Ke);
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
        if (!ro.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (u = t.endsWith("Capture"), e = t.slice(2, u ? t.length - 7 : void 0), a = l[ne] || null, a = a != null ? a[t] : null, typeof a == "function" && l.removeEventListener(e, a, u), typeof n == "function")) {
              typeof a != "function" && a !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(e, n, u);
              break l;
            }
            t in l ? l[t] = n : n === !0 ? l.setAttribute(t, "") : Ju(l, t, n);
          }
    }
  }
  function Fl(l, e, t) {
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
        nl("error", l), nl("load", l);
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
        nl("invalid", l);
        var o = a = c = u = null, d = null, b = null;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var C = t[n];
            if (C != null)
              switch (n) {
                case "name":
                  u = C;
                  break;
                case "type":
                  c = C;
                  break;
                case "checked":
                  d = C;
                  break;
                case "defaultChecked":
                  b = C;
                  break;
                case "value":
                  a = C;
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
                  vl(l, e, n, C, t, null);
              }
          }
        vo(
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
        nl("invalid", l), n = c = a = null;
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
        e = a, t = c, l.multiple = !!n, e != null ? on(l, !!n, e, !1) : t != null && on(l, !!n, t, !0);
        return;
      case "textarea":
        nl("invalid", l), a = u = n = null;
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
        So(l, n, u, a);
        return;
      case "option":
        for (d in t)
          t.hasOwnProperty(d) && (n = t[d], n != null) && (d === "selected" ? l.selected = n && typeof n != "function" && typeof n != "symbol" : vl(l, e, d, n, t, null));
        return;
      case "dialog":
        nl("beforetoggle", l), nl("toggle", l), nl("cancel", l), nl("close", l);
        break;
      case "iframe":
      case "object":
        nl("load", l);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Du.length; n++)
          nl(Du[n], l);
        break;
      case "image":
        nl("error", l), nl("load", l);
        break;
      case "details":
        nl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        nl("error", l), nl("load", l);
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
        if (Ni(e)) {
          for (C in t)
            t.hasOwnProperty(C) && (n = t[C], n !== void 0 && pf(
              l,
              e,
              C,
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
  function mh(l, e, t, n) {
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
        var u = null, a = null, c = null, o = null, d = null, b = null, C = null;
        for (E in t) {
          var N = t[E];
          if (t.hasOwnProperty(E) && N != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = N;
              default:
                n.hasOwnProperty(E) || vl(l, e, E, null, n, N);
            }
        }
        for (var p in n) {
          var E = n[p];
          if (N = t[p], n.hasOwnProperty(p) && (E != null || N != null))
            switch (p) {
              case "type":
                a = E;
                break;
              case "name":
                u = E;
                break;
              case "checked":
                b = E;
                break;
              case "defaultChecked":
                C = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                o = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(r(137, e));
                break;
              default:
                E !== N && vl(
                  l,
                  e,
                  p,
                  E,
                  n,
                  N
                );
            }
        }
        Hi(
          l,
          c,
          o,
          d,
          b,
          C,
          a,
          u
        );
        return;
      case "select":
        E = c = o = p = null;
        for (a in t)
          if (d = t[a], t.hasOwnProperty(a) && d != null)
            switch (a) {
              case "value":
                break;
              case "multiple":
                E = d;
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
                p = a;
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
        e = o, t = c, n = E, p != null ? on(l, !!t, p, !1) : !!n != !!t && (e != null ? on(l, !!t, e, !0) : on(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        E = p = null;
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
                p = u;
                break;
              case "defaultValue":
                E = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== a && vl(l, e, c, u, n, a);
            }
        go(l, p, E);
        return;
      case "option":
        for (var L in t)
          p = t[L], t.hasOwnProperty(L) && p != null && !n.hasOwnProperty(L) && (L === "selected" ? l.selected = !1 : vl(
            l,
            e,
            L,
            null,
            n,
            p
          ));
        for (d in n)
          p = n[d], E = t[d], n.hasOwnProperty(d) && p !== E && (p != null || E != null) && (d === "selected" ? l.selected = p && typeof p != "function" && typeof p != "symbol" : vl(
            l,
            e,
            d,
            p,
            n,
            E
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
        for (var J in t)
          p = t[J], t.hasOwnProperty(J) && p != null && !n.hasOwnProperty(J) && vl(l, e, J, null, n, p);
        for (b in n)
          if (p = n[b], E = t[b], n.hasOwnProperty(b) && p !== E && (p != null || E != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(r(137, e));
                break;
              default:
                vl(
                  l,
                  e,
                  b,
                  p,
                  n,
                  E
                );
            }
        return;
      default:
        if (Ni(e)) {
          for (var gl in t)
            p = t[gl], t.hasOwnProperty(gl) && p !== void 0 && !n.hasOwnProperty(gl) && pf(
              l,
              e,
              gl,
              void 0,
              n,
              p
            );
          for (C in n)
            p = n[C], E = t[C], !n.hasOwnProperty(C) || p === E || p === void 0 && E === void 0 || pf(
              l,
              e,
              C,
              p,
              n,
              E
            );
          return;
        }
    }
    for (var v in t)
      p = t[v], t.hasOwnProperty(v) && p != null && !n.hasOwnProperty(v) && vl(l, e, v, null, n, p);
    for (N in n)
      p = n[N], E = t[N], !n.hasOwnProperty(N) || p === E || p == null && E == null || vl(l, e, N, p, n, E);
  }
  function Td(l) {
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
  function vh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, e = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var u = t[n], a = u.transferSize, c = u.initiatorType, o = u.duration;
        if (a && o && Td(c)) {
          for (c = 0, o = u.responseEnd, n += 1; n < t.length; n++) {
            var d = t[n], b = d.startTime;
            if (b > o) break;
            var C = d.transferSize, N = d.initiatorType;
            C && Td(N) && (d = d.responseEnd, c += C * (d < o ? 1 : (o - b) / (d - b)));
          }
          if (--n, e += 8 * (a + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return e / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Tf = null, zf = null;
  function Va(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ad(l, e) {
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
  function Af(l, e) {
    return l === "textarea" || l === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ef = null;
  function gh() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ef ? !1 : (Ef = l, !0) : (Ef = null, !1);
  }
  var Ed = typeof setTimeout == "function" ? setTimeout : void 0, Sh = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(l) {
    return Od.resolve(null).then(l).catch(ph);
  } : Ed;
  function ph(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ut(l) {
    return l === "head";
  }
  function Md(l, e) {
    var t = e, n = 0;
    do {
      var u = t.nextSibling;
      if (l.removeChild(t), u && u.nodeType === 8)
        if (t = u.data, t === "/$" || t === "/&") {
          if (n === 0) {
            l.removeChild(u), Xn(e);
            return;
          }
          n--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          n++;
        else if (t === "html")
          Hu(l.ownerDocument.documentElement);
        else if (t === "head") {
          t = l.ownerDocument.head, Hu(t);
          for (var a = t.firstChild; a; ) {
            var c = a.nextSibling, o = a.nodeName;
            a[Wn] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && a.rel.toLowerCase() === "stylesheet" || t.removeChild(a), a = c;
          }
        } else
          t === "body" && Hu(l.ownerDocument.body);
      t = u;
    } while (t);
    Xn(e);
  }
  function Cd(l, e) {
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
  function Of(l) {
    var e = l.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (e = e.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Of(t), Di(t);
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
  function Th(l, e, t, n) {
    for (; l.nodeType === 1; ) {
      var u = t;
      if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (n) {
        if (!l[Wn])
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
      if (l = Ue(l.nextSibling), l === null) break;
    }
    return null;
  }
  function zh(l, e, t) {
    if (e === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ue(l.nextSibling), l === null)) return null;
    return l;
  }
  function _d(l, e) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ue(l.nextSibling), l === null)) return null;
    return l;
  }
  function Mf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Cf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Ah(l, e) {
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
  function Ue(l) {
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
  var _f = null;
  function Dd(l) {
    l = l.nextSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (e === 0)
            return Ue(l.nextSibling);
          e--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || e++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ud(l) {
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
  function Hd(l, e, t) {
    switch (e = Va(t), l) {
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
  function Hu(l) {
    for (var e = l.attributes; e.length; )
      l.removeAttributeNode(e[0]);
    Di(l);
  }
  var He = /* @__PURE__ */ new Map(), Rd = /* @__PURE__ */ new Set();
  function Ka(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ft = _.d;
  _.d = {
    f: Eh,
    r: Oh,
    D: Mh,
    C: Ch,
    L: _h,
    m: Dh,
    X: Hh,
    S: Uh,
    M: Rh
  };
  function Eh() {
    var l = ft.f(), e = qa();
    return l || e;
  }
  function Oh(l) {
    var e = an(l);
    e !== null && e.tag === 5 && e.type === "form" ? Wr(e) : ft.r(l);
  }
  var Yn = typeof document > "u" ? null : document;
  function Nd(l, e, t) {
    var n = Yn;
    if (n && typeof e == "string" && e) {
      var u = Ae(e);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof t == "string" && (u += '[crossorigin="' + t + '"]'), Rd.has(u) || (Rd.add(u), l = { rel: l, crossOrigin: t, href: e }, n.querySelector(u) === null && (e = n.createElement("link"), Fl(e, "link", l), Zl(e), n.head.appendChild(e)));
    }
  }
  function Mh(l) {
    ft.D(l), Nd("dns-prefetch", l, null);
  }
  function Ch(l, e) {
    ft.C(l, e), Nd("preconnect", l, e);
  }
  function _h(l, e, t) {
    ft.L(l, e, t);
    var n = Yn;
    if (n && l && e) {
      var u = 'link[rel="preload"][as="' + Ae(e) + '"]';
      e === "image" && t && t.imageSrcSet ? (u += '[imagesrcset="' + Ae(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (u += '[imagesizes="' + Ae(
        t.imageSizes
      ) + '"]')) : u += '[href="' + Ae(l) + '"]';
      var a = u;
      switch (e) {
        case "style":
          a = xn(l);
          break;
        case "script":
          a = Gn(l);
      }
      He.has(a) || (l = A(
        {
          rel: "preload",
          href: e === "image" && t && t.imageSrcSet ? void 0 : l,
          as: e
        },
        t
      ), He.set(a, l), n.querySelector(u) !== null || e === "style" && n.querySelector(Ru(a)) || e === "script" && n.querySelector(Nu(a)) || (e = n.createElement("link"), Fl(e, "link", l), Zl(e), n.head.appendChild(e)));
    }
  }
  function Dh(l, e) {
    ft.m(l, e);
    var t = Yn;
    if (t && l) {
      var n = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Ae(n) + '"][href="' + Ae(l) + '"]', a = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = Gn(l);
      }
      if (!He.has(a) && (l = A({ rel: "modulepreload", href: l }, e), He.set(a, l), t.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Nu(a)))
              return;
        }
        n = t.createElement("link"), Fl(n, "link", l), Zl(n), t.head.appendChild(n);
      }
    }
  }
  function Uh(l, e, t) {
    ft.S(l, e, t);
    var n = Yn;
    if (n && l) {
      var u = cn(n).hoistableStyles, a = xn(l);
      e = e || "default";
      var c = u.get(a);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          Ru(a)
        ))
          o.loading = 5;
        else {
          l = A(
            { rel: "stylesheet", href: l, "data-precedence": e },
            t
          ), (t = He.get(a)) && Df(l, t);
          var d = c = n.createElement("link");
          Zl(d), Fl(d, "link", l), d._p = new Promise(function(b, C) {
            d.onload = b, d.onerror = C;
          }), d.addEventListener("load", function() {
            o.loading |= 1;
          }), d.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ja(c, e, n);
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
  function Hh(l, e) {
    ft.X(l, e);
    var t = Yn;
    if (t && l) {
      var n = cn(t).hoistableScripts, u = Gn(l), a = n.get(u);
      a || (a = t.querySelector(Nu(u)), a || (l = A({ src: l, async: !0 }, e), (e = He.get(u)) && Uf(l, e), a = t.createElement("script"), Zl(a), Fl(a, "link", l), t.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function Rh(l, e) {
    ft.M(l, e);
    var t = Yn;
    if (t && l) {
      var n = cn(t).hoistableScripts, u = Gn(l), a = n.get(u);
      a || (a = t.querySelector(Nu(u)), a || (l = A({ src: l, async: !0, type: "module" }, e), (e = He.get(u)) && Uf(l, e), a = t.createElement("script"), Zl(a), Fl(a, "link", l), t.head.appendChild(a)), a = {
        type: "script",
        instance: a,
        count: 1,
        state: null
      }, n.set(u, a));
    }
  }
  function Bd(l, e, t, n) {
    var u = (u = T.current) ? Ka(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (e = xn(t.href), t = cn(
          u
        ).hoistableStyles, n = t.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = xn(t.href);
          var a = cn(
            u
          ).hoistableStyles, c = a.get(l);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, a.set(l, c), (a = u.querySelector(
            Ru(l)
          )) && !a._p && (c.instance = a, c.state.loading = 5), He.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, He.set(l, t), a || Nh(
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
        return e = t.async, t = t.src, typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Gn(t), t = cn(
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
  function xn(l) {
    return 'href="' + Ae(l) + '"';
  }
  function Ru(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function wd(l) {
    return A({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Nh(l, e, t, n) {
    l.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = l.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), Fl(e, "link", t), Zl(e), l.head.appendChild(e));
  }
  function Gn(l) {
    return '[src="' + Ae(l) + '"]';
  }
  function Nu(l) {
    return "script[async]" + l;
  }
  function jd(l, e, t) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = l.querySelector(
            'style[data-href~="' + Ae(t.href) + '"]'
          );
          if (n)
            return e.instance = n, Zl(n), n;
          var u = A({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return n = (l.ownerDocument || l).createElement(
            "style"
          ), Zl(n), Fl(n, "style", u), Ja(n, t.precedence, l), e.instance = n;
        case "stylesheet":
          u = xn(t.href);
          var a = l.querySelector(
            Ru(u)
          );
          if (a)
            return e.state.loading |= 4, e.instance = a, Zl(a), a;
          n = wd(t), (u = He.get(u)) && Df(n, u), a = (l.ownerDocument || l).createElement("link"), Zl(a);
          var c = a;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), Fl(a, "link", n), e.state.loading |= 4, Ja(a, t.precedence, l), e.instance = a;
        case "script":
          return a = Gn(t.src), (u = l.querySelector(
            Nu(a)
          )) ? (e.instance = u, Zl(u), u) : (n = t, (u = He.get(a)) && (n = A({}, t), Uf(n, u)), l = l.ownerDocument || l, u = l.createElement("script"), Zl(u), Fl(u, "link", n), l.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, Ja(n, t.precedence, l));
    return e.instance;
  }
  function Ja(l, e, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = n.length ? n[n.length - 1] : null, a = u, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) a = o;
      else if (a !== u) break;
    }
    a ? a.parentNode.insertBefore(l, a.nextSibling) : (e = t.nodeType === 9 ? t.head : t, e.insertBefore(l, e.firstChild));
  }
  function Df(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.title == null && (l.title = e.title);
  }
  function Uf(l, e) {
    l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.integrity == null && (l.integrity = e.integrity);
  }
  var ka = null;
  function qd(l, e, t) {
    if (ka === null) {
      var n = /* @__PURE__ */ new Map(), u = ka = /* @__PURE__ */ new Map();
      u.set(t, n);
    } else
      u = ka, n = u.get(t), n || (n = /* @__PURE__ */ new Map(), u.set(t, n));
    if (n.has(l)) return n;
    for (n.set(l, null), t = t.getElementsByTagName(l), u = 0; u < t.length; u++) {
      var a = t[u];
      if (!(a[Wn] || a[Jl] || l === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = a.getAttribute(e) || "";
        c = l + c;
        var o = n.get(c);
        o ? o.push(a) : n.set(c, [a]);
      }
    }
    return n;
  }
  function Yd(l, e, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      e === "title" ? l.querySelector("head > title") : null
    );
  }
  function Bh(l, e, t) {
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
  function xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function wh(l, e, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = xn(n.href), a = e.querySelector(
          Ru(u)
        );
        if (a) {
          e = a._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Wa.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = a, Zl(a);
          return;
        }
        a = e.ownerDocument || e, n = wd(n), (u = He.get(u)) && Df(n, u), a = a.createElement("link"), Zl(a);
        var c = a;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), Fl(a, "link", n), t.instance = a;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Wa.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  var Hf = 0;
  function jh(l, e) {
    return l.stylesheets && l.count === 0 && Fa(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (l.stylesheets && Fa(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4 + e);
      0 < l.imgBytes && Hf === 0 && (Hf = 62500 * vh());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Fa(l, l.stylesheets), l.unsuspend)) {
            var a = l.unsuspend;
            l.unsuspend = null, a();
          }
        },
        (l.imgBytes > Hf ? 50 : 800) + e
      );
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(n), clearTimeout(u);
      };
    } : null;
  }
  function Wa() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fa(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var $a = null;
  function Fa(l, e) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, $a = /* @__PURE__ */ new Map(), e.forEach(qh, l), $a = null, Wa.call(l));
  }
  function qh(l, e) {
    if (!(e.state.loading & 4)) {
      var t = $a.get(l);
      if (t) var n = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), $a.set(l, t);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), a = 0; a < u.length; a++) {
          var c = u[a];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), n = c);
        }
        n && t.set(null, n);
      }
      u = e.instance, c = u.getAttribute("data-precedence"), a = t.get(c) || n, a === n && t.set(null, u), t.set(c, u), this.count++, n = Wa.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), a ? a.parentNode.insertBefore(u, a.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), e.state.loading |= 4;
    }
  }
  var Bu = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function Yh(l, e, t, n, u, a, c, o, d) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Oi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oi(0), this.hiddenUpdates = Oi(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = a, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Gd(l, e, t, n, u, a, c, o, d, b, C, N) {
    return l = new Yh(
      l,
      e,
      t,
      c,
      d,
      b,
      C,
      N,
      o
    ), e = 1, a === !0 && (e |= 24), a = me(3, null, null, e), l.current = a, a.stateNode = l, e = oc(), e.refCount++, l.pooledCache = e, e.refCount++, a.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: e
    }, hc(a), l;
  }
  function Xd(l) {
    return l ? (l = gn, l) : gn;
  }
  function Ld(l, e, t, n, u, a) {
    u = Xd(u), n.context === null ? n.context = u : n.pendingContext = u, n = bt(e), n.payload = { element: t }, a = a === void 0 ? null : a, a !== null && (n.callback = a), t = pt(l, n, e), t !== null && (oe(t, l, e), du(t, l, e));
  }
  function Qd(l, e) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function Rf(l, e) {
    Qd(l, e), (l = l.alternate) && Qd(l, e);
  }
  function Zd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = Qt(l, 67108864);
      e !== null && oe(e, l, 67108864), Rf(l, 67108864);
    }
  }
  function Vd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = pe();
      e = Mi(e);
      var t = Qt(l, e);
      t !== null && oe(t, l, e), Rf(l, e);
    }
  }
  var Ia = !0;
  function xh(l, e, t, n) {
    var u = O.T;
    O.T = null;
    var a = _.p;
    try {
      _.p = 2, Nf(l, e, t, n);
    } finally {
      _.p = a, O.T = u;
    }
  }
  function Gh(l, e, t, n) {
    var u = O.T;
    O.T = null;
    var a = _.p;
    try {
      _.p = 8, Nf(l, e, t, n);
    } finally {
      _.p = a, O.T = u;
    }
  }
  function Nf(l, e, t, n) {
    if (Ia) {
      var u = Bf(n);
      if (u === null)
        bf(
          l,
          e,
          n,
          Pa,
          t
        ), Jd(l, n);
      else if (Lh(
        u,
        l,
        e,
        t,
        n
      ))
        n.stopPropagation();
      else if (Jd(l, n), e & 4 && -1 < Xh.indexOf(l)) {
        for (; u !== null; ) {
          var a = an(u);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                  var c = Yt(a.pendingLanes);
                  if (c !== 0) {
                    var o = a;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - he(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    Xe(a), (rl & 6) === 0 && (wa = se() + 500, _u(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Qt(a, 2), o !== null && oe(o, a, 2), qa(), Rf(a, 2);
            }
          if (a = Bf(n), a === null && bf(
            l,
            e,
            n,
            Pa,
            t
          ), a === u) break;
          u = a;
        }
        u !== null && n.stopPropagation();
      } else
        bf(
          l,
          e,
          n,
          null,
          t
        );
    }
  }
  function Bf(l) {
    return l = wi(l), wf(l);
  }
  var Pa = null;
  function wf(l) {
    if (Pa = null, l = un(l), l !== null) {
      var e = U(l);
      if (e === null) l = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (l = z(e), l !== null) return l;
          l = null;
        } else if (t === 31) {
          if (l = G(e), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          l = null;
        } else e !== l && (l = null);
      }
    }
    return Pa = l, null;
  }
  function Kd(l) {
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
        switch (M0()) {
          case Pf:
            return 2;
          case lo:
            return 8;
          case Lu:
          case C0:
            return 32;
          case eo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1, Ht = null, Rt = null, Nt = null, wu = /* @__PURE__ */ new Map(), ju = /* @__PURE__ */ new Map(), Bt = [], Xh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jd(l, e) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ht = null;
        break;
      case "dragenter":
      case "dragleave":
        Rt = null;
        break;
      case "mouseover":
      case "mouseout":
        Nt = null;
        break;
      case "pointerover":
      case "pointerout":
        wu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ju.delete(e.pointerId);
    }
  }
  function qu(l, e, t, n, u, a) {
    return l === null || l.nativeEvent !== a ? (l = {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [u]
    }, e !== null && (e = an(e), e !== null && Zd(e)), l) : (l.eventSystemFlags |= n, e = l.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), l);
  }
  function Lh(l, e, t, n, u) {
    switch (e) {
      case "focusin":
        return Ht = qu(
          Ht,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "dragenter":
        return Rt = qu(
          Rt,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "mouseover":
        return Nt = qu(
          Nt,
          l,
          e,
          t,
          n,
          u
        ), !0;
      case "pointerover":
        var a = u.pointerId;
        return wu.set(
          a,
          qu(
            wu.get(a) || null,
            l,
            e,
            t,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return a = u.pointerId, ju.set(
          a,
          qu(
            ju.get(a) || null,
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
  function kd(l) {
    var e = un(l.target);
    if (e !== null) {
      var t = U(e);
      if (t !== null) {
        if (e = t.tag, e === 13) {
          if (e = z(t), e !== null) {
            l.blockedOn = e, co(l.priority, function() {
              Vd(t);
            });
            return;
          }
        } else if (e === 31) {
          if (e = G(t), e !== null) {
            l.blockedOn = e, co(l.priority, function() {
              Vd(t);
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
  function li(l) {
    if (l.blockedOn !== null) return !1;
    for (var e = l.targetContainers; 0 < e.length; ) {
      var t = Bf(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        Bi = n, t.target.dispatchEvent(n), Bi = null;
      } else
        return e = an(t), e !== null && Zd(e), l.blockedOn = t, !1;
      e.shift();
    }
    return !0;
  }
  function Wd(l, e, t) {
    li(l) && t.delete(e);
  }
  function Qh() {
    jf = !1, Ht !== null && li(Ht) && (Ht = null), Rt !== null && li(Rt) && (Rt = null), Nt !== null && li(Nt) && (Nt = null), wu.forEach(Wd), ju.forEach(Wd);
  }
  function ei(l, e) {
    l.blockedOn === e && (l.blockedOn = null, jf || (jf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Qh
    )));
  }
  var ti = null;
  function $d(l) {
    ti !== l && (ti = l, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        ti === l && (ti = null);
        for (var e = 0; e < l.length; e += 3) {
          var t = l[e], n = l[e + 1], u = l[e + 2];
          if (typeof n != "function") {
            if (wf(n || t) === null)
              continue;
            break;
          }
          var a = an(t);
          a !== null && (l.splice(e, 3), e -= 3, Nc(
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
  function Xn(l) {
    function e(d) {
      return ei(d, l);
    }
    Ht !== null && ei(Ht, l), Rt !== null && ei(Rt, l), Nt !== null && ei(Nt, l), wu.forEach(e), ju.forEach(e);
    for (var t = 0; t < Bt.length; t++) {
      var n = Bt[t];
      n.blockedOn === l && (n.blockedOn = null);
    }
    for (; 0 < Bt.length && (t = Bt[0], t.blockedOn === null); )
      kd(t), t.blockedOn === null && Bt.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var u = t[n], a = t[n + 1], c = u[ne] || null;
        if (typeof a == "function")
          c || $d(t);
        else if (c) {
          var o = null;
          if (a && a.hasAttribute("formAction")) {
            if (u = a, c = a[ne] || null)
              o = c.formAction;
            else if (wf(u) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? t[n + 1] = o : (t.splice(n, 3), n -= 3), $d(t);
        }
      }
  }
  function Fd() {
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
  function qf(l) {
    this._internalRoot = l;
  }
  ni.prototype.render = qf.prototype.render = function(l) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var t = e.current, n = pe();
    Ld(t, n, l, e, null, null);
  }, ni.prototype.unmount = qf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var e = l.containerInfo;
      Ld(l.current, 2, null, l, null, null), qa(), e[nn] = null;
    }
  };
  function ni(l) {
    this._internalRoot = l;
  }
  ni.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var e = io();
      l = { blockedOn: null, target: l, priority: e };
      for (var t = 0; t < Bt.length && e !== 0 && e < Bt[t].priority; t++) ;
      Bt.splice(t, 0, l), t === 0 && kd(l);
    }
  };
  var Id = s.version;
  if (Id !== "19.2.4")
    throw Error(
      r(
        527,
        Id,
        "19.2.4"
      )
    );
  _.findDOMNode = function(l) {
    var e = l._reactInternals;
    if (e === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = M(e), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Zh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ui.isDisabled && ui.supportsFiber)
      try {
        Kn = ui.inject(
          Zh
        ), de = ui;
      } catch {
      }
  }
  return xu.createRoot = function(l, e) {
    if (!f(l)) throw Error(r(299));
    var t = !1, n = "", u = as, a = is, c = cs;
    return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (a = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Gd(
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
      Fd
    ), l[nn] = e.current, Sf(l), new qf(e);
  }, xu.hydrateRoot = function(l, e, t) {
    if (!f(l)) throw Error(r(299));
    var n = !1, u = "", a = as, c = is, o = cs, d = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.formState !== void 0 && (d = t.formState)), e = Gd(
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
      Fd
    ), e.context = Xd(null), t = e.current, n = pe(), n = Mi(n), u = bt(n), u.callback = null, pt(t, u, n), t = n, e.current.lanes = t, kn(e, t), Xe(e), l[nn] = e.current, Sf(l), new ni(e);
  }, xu.version = "19.2.4", xu;
}
var f0;
function ly() {
  if (f0) return xf.exports;
  f0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), xf.exports = Ph(), xf.exports;
}
var ey = ly(), je = kf();
const Ql = 960, ot = 1240, g0 = "clawd_ui_word_solitaire_best", ri = 5, jl = [
  {
    id: "weekend",
    name: "Association Deal",
    moveBudget: 21,
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
    moveBudget: 24,
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
    moveBudget: 23,
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
    moveBudget: 24,
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
];
function ty(i) {
  const s = i * 1664525 + 1013904223 >>> 0;
  return s === 0 ? 1 : s;
}
function S0(i) {
  const s = ty(i);
  return [s, s / 4294967295];
}
function ny() {
  if (typeof window > "u") return 0;
  const i = window.localStorage.getItem(g0), s = i == null ? 0 : Number.parseInt(i, 10);
  return Number.isFinite(s) ? Math.max(0, s) : 0;
}
function uy(i) {
  typeof window < "u" && window.localStorage.setItem(g0, String(i));
}
function di(i) {
  return i.map((s) => s.map((h) => ({ ...h })));
}
function hi(i) {
  return Object.fromEntries(Object.entries(i).map(([s, h]) => [s, h.map((r) => ({ ...r }))]));
}
function o0(i) {
  return i.map((s) => ({ ...s, card: { ...s.card } }));
}
function r0(i) {
  return i.map((s) => ({ ...s }));
}
function s0(i) {
  return i.map((s) => ({ ...s }));
}
function yi(i) {
  return [...i];
}
function mi(i) {
  return [...i];
}
function Le(i) {
  return i ? i.kind === "waste" ? "waste" : i.kind === "clue" ? "clue" : `column-${i.index}` : "none";
}
function Rl(i) {
  return i[i.length - 1] ?? null;
}
function ay(i) {
  return { ...i };
}
function vi(i) {
  return [...i];
}
function jt(i, s) {
  return s ? i.categories.find((h) => h.id === s) ?? null : null;
}
function si(i, s) {
  return i.foundationOrder.findIndex((h) => h === s);
}
function b0(i, s) {
  return s.categories.filter((h) => i.foundations[h.id].length === h.words.length).length;
}
function iy(i, s) {
  const h = i.wordIcons?.[s], r = i.iconOnlyWords?.includes(s) ? "iconOnly" : h ? "iconWord" : "word";
  return { id: `${i.id}-${s}`, label: s, categoryId: i.id, color: i.color, role: "word", faceIcon: h, faceStyle: r };
}
function cy(i) {
  const s = i.clueStyle === "iconOnly" ? "iconOnly" : i.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${i.id}-clue`, label: i.clueTitle, categoryId: i.id, color: i.color, role: "clue", faceIcon: i.clueIcon, faceStyle: s };
}
function Si(i, s) {
  return Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, i.columns[s].length));
}
function Wf(i, s) {
  return i.columns[s].slice(Si(i, s));
}
function Ln(i, s) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const U = Rl(i.waste);
    return U ? [U] : [];
  }
  const h = Wf(i, s.index);
  if (!h.length) return [];
  const r = h[h.length - 1];
  if (r.role === "clue") return [r];
  let f = h.length - 1;
  for (; f - 1 >= 0 && h[f - 1].role === "word" && h[f - 1].categoryId === r.categoryId; ) f -= 1;
  return h.slice(f);
}
function p0(i, s) {
  const h = i.columns[s];
  if (!h.length) {
    i.hiddenCounts[s] = 0;
    return;
  }
  i.hiddenCounts[s] = Math.max(0, Math.min(i.hiddenCounts[s] ?? 0, h.length - 1));
}
function fy(i, s) {
  p0(i, s), i.columns[s].length && (i.hiddenCounts[s] ?? 0) >= i.columns[s].length && (i.hiddenCounts[s] = i.columns[s].length - 1);
}
function oy(i) {
  return {
    columns: di(i.columns),
    hiddenCounts: vi(i.hiddenCounts),
    reserve: [...i.reserve],
    waste: [...i.waste],
    foundations: hi(i.foundations),
    foundationOrder: yi(i.foundationOrder),
    clueDeck: mi(i.clueDeck),
    activeClueCategoryId: i.activeClueCategoryId,
    selectedSource: i.selectedSource ? { ...i.selectedSource } : null,
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    message: i.message,
    mode: i.mode,
    boosters: ay(i.boosters)
  };
}
function Qn(i) {
  i.history = [oy(i), ...i.history].slice(0, 24);
}
function ry(i) {
  const s = i.history[0];
  return !s || i.boosters.undo <= 0 ? !1 : (i.columns = di(s.columns), i.hiddenCounts = vi(s.hiddenCounts), i.reserve = [...s.reserve], i.waste = [...s.waste], i.foundations = hi(s.foundations), i.foundationOrder = yi(s.foundationOrder), i.clueDeck = mi(s.clueDeck), i.activeClueCategoryId = s.activeClueCategoryId, i.selectedSource = s.selectedSource ? { ...s.selectedSource } : null, i.movesLeft = s.movesLeft, i.score = s.score, i.streak = s.streak, i.message = "Undo used.", i.mode = s.mode, i.boosters = { ...s.boosters, undo: Math.max(0, i.boosters.undo - 1) }, i.history = i.history.slice(1), !0);
}
function Zf(i, s, h = 0) {
  const r = jl[i % jl.length], f = [];
  for (const Y of r.categories) {
    f.push(cy(Y));
    for (const w of Y.words) f.push(iy(Y, w));
  }
  let U = 5370206 + i * 131;
  const z = [...f];
  for (let Y = z.length - 1; Y > 0; Y -= 1) {
    let w;
    [U, w] = S0(U);
    const I = Math.floor(w * (Y + 1));
    [z[Y], z[I]] = [z[I], z[Y]];
  }
  const G = [];
  let B = 0;
  for (const Y of r.columnHeights)
    G.push(z.slice(B, B + Y)), B += Y;
  const M = G.map((Y) => Math.max(0, Y.length - 1)), j = z.slice(B).reverse(), A = Object.fromEntries(r.categories.map((Y) => [Y.id, []]));
  return {
    mode: "title",
    levelIndex: i,
    columns: G,
    hiddenCounts: M,
    reserve: j,
    waste: [],
    foundations: A,
    foundationOrder: Array.from({ length: ri }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: r.moveBudget,
    score: h,
    streak: 0,
    bestScore: ny(),
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
function bi(i) {
  const s = [];
  i.columns.forEach((r, f) => {
    const U = Rl(Wf(i, f));
    U && s.push({ source: { kind: "column", index: f }, card: U });
  });
  const h = Rl(i.waste);
  return h && s.push({ source: { kind: "waste" }, card: h }), s;
}
function $f(i, s, h) {
  return h?.kind === "column" && s === void 0 ? !1 : s.length === 0 || Rl(s)?.categoryId === i.categoryId;
}
function Ff(i, s = jl[i.levelIndex % jl.length]) {
  const h = bi(i);
  let r = !1, f = !1, U = !1, z = !1, G = !1, B = !1, M = !1, j = "", A = "";
  for (const { source: Y, card: w } of h) {
    const I = jt(s, w.categoryId);
    if (!I) continue;
    const el = i.foundations[w.categoryId].length < I.words.length;
    w.role === "clue" && el && i.foundationOrder.includes(null) && (r = !0, A || (A = `${w.label} can claim an empty crown.`));
    const Cl = si(i, w.categoryId);
    w.role === "word" && Cl >= 0 && el && (f = !0, j || (j = `${w.label} matches the ${I.clueTitle} clue.`));
    for (let cl = 0; cl < i.columns.length; cl += 1)
      if (!(Y.kind === "column" && Y.index === cl) && $f(w, i.columns[cl], Y)) {
        U = !0, j || (j = `${w.label} can park on column ${cl + 1}.`);
        break;
      }
    w.role === "word" && i.boosters.joker > 0 && Cl >= 0 && el && (G = !0, j || (j = `Use Joker on ${w.label} if you want to preserve the board.`));
  }
  return i.reserve.length > 0 && (z = !0, j || (j = "Draw from the reserve pile.")), i.boosters.shuffle > 0 && i.reserve.length + i.waste.length > 0 && (B = !0, j || (j = "Use Shuffle to recycle the reserve and waste piles.")), i.boosters.undo > 0 && i.history.length > 0 && (M = !0, j || (j = "Use Undo to back out of the dead end.")), r && A && (j = A), {
    cluePlacement: r,
    foundationSort: f,
    columnParking: U,
    reserveDraw: z,
    joker: G,
    shuffle: B,
    undo: M,
    any: r || f || U || z || G || B || M,
    hint: j || "No legal moves remain."
  };
}
function Vf(i) {
  const s = jl[i.levelIndex % jl.length];
  if (s.categories.every((f) => i.foundations[f.id].length === f.words.length)) {
    i.mode = "won", i.message = "All category stacks cleared. Clean round.", i.score > i.bestScore && (i.bestScore = i.score, uy(i.score));
    return;
  }
  Ff(i, s).any || (i.mode = "lost", i.message = "No legal moves remain. That deal is dead.");
}
function ai(i, s, h) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const f = i.waste.pop();
    return f ? [f] : [];
  }
  const r = i.columns[s.index].splice(Math.max(0, i.columns[s.index].length - h), h);
  return fy(i, s.index), r;
}
function d0(i, s, h, r) {
  for (let f = 0; f < 10; f += 1) {
    const U = f / 10 * Math.PI * 2;
    i.particles.push({ x: s, y: h, vx: Math.cos(U) * (1.2 + f * 0.12), vy: Math.sin(U) * (1.2 + f * 0.1) - 1.8, size: 8 + f % 3, life: 460, maxLife: 460, color: r });
  }
}
function Zn(i, s, h, r, f, U = 0.2) {
  i.feedbackTexts.push({ text: s, x: h, y: r, life: 720, maxLife: 720, color: f, scale: U });
}
function ii(i, s, h) {
  i.foundationPulses = i.foundationPulses.filter((r) => r.slotIndex !== s), i.foundationPulses.push({ slotIndex: s, color: h, life: 520, maxLife: 520 });
}
function ci(i, s, h, r, f) {
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
function sy(i) {
  return Ff(i).hint;
}
function dy(i, s) {
  const h = [...i];
  let r = s;
  for (let f = h.length - 1; f > 0; f -= 1) {
    let U;
    [r, U] = S0(r);
    const z = Math.floor(U * (f + 1));
    [h[f], h[z]] = [h[z], h[f]];
  }
  return h;
}
function rt(i, s, h) {
  return i >= h.x && i <= h.x + h.w && s >= h.y && s <= h.y + h.h;
}
function ql(i) {
  const r = Ql - 502 - 28, f = Math.max(72, Math.min(84, Math.floor((r - 8 * Math.max(0, ri - 1)) / ri))), U = i.columnHeights.length >= 6 ? 116 : 136, z = i.columnHeights.length >= 6 ? 18 : 20, G = i.columnHeights.length * U + Math.max(0, i.columnHeights.length - 1) * z, B = Math.round((Ql - G) / 2);
  return {
    reserve: { x: 92, y: 168, w: 102, h: 142 },
    waste: { x: 224, y: 168, w: 114, h: 150 },
    clue: { x: 360, y: 152, w: 124, h: 170 },
    foundations: Array.from({ length: ri }, (M, j) => ({ x: 502 + j * (f + 8), y: 112, w: f, h: 214 })),
    columns: i.columnHeights.map((M, j) => ({ x: B + j * (U + z), y: 360, w: U, h: 638 }))
  };
}
function fi(i, s, h) {
  const r = i.getBoundingClientRect();
  return !r.width || !r.height ? null : {
    x: (s - r.left) / r.width * Ql,
    y: (h - r.top) / r.height * ot
  };
}
function hy(i, s, h, r) {
  const f = ql(i);
  if (Rl(s.waste) && rt(h, r, f.waste)) return { kind: "waste" };
  if (s.activeClueCategoryId && rt(h, r, f.clue)) return { kind: "clue" };
  for (let z = s.columns.length - 1; z >= 0; z -= 1) {
    const G = s.columns[z];
    if (!G.length) continue;
    const B = Si(s, z), M = Math.max(1, G.length - B), j = {
      x: f.columns[z].x + 10,
      y: f.columns[z].y + 24 + B * 30,
      w: f.columns[z].w - 20,
      h: 74 + Math.max(0, M - 1) * 30
    };
    if (rt(h, r, j)) return { kind: "column", index: z };
  }
  return null;
}
function h0(i, s, h, r, f, U) {
  const z = ql(i);
  for (let G = 0; G < z.foundations.length; G += 1) {
    if (!rt(f, U, z.foundations[G])) continue;
    if (r?.role === "clue") {
      if (s.foundationOrder[G] == null) return { kind: "foundation", index: G };
      continue;
    }
    const B = s.foundationOrder[G];
    if (B && r?.categoryId === B) return { kind: "foundation", index: G };
  }
  for (let G = 0; G < z.columns.length; G += 1)
    if (rt(f, U, z.columns[G])) {
      if (h.kind === "column" && h.index === G) return null;
      if (r && $f(r, s.columns[G], h)) return { kind: "column", index: G };
    }
  return null;
}
function T0(i, s, h) {
  const r = ql(i).columns[h], f = s.columns[h], U = Si(s, h), z = [];
  let G = r.y + 24;
  return f.forEach((B, M) => {
    const j = M < U, A = M === f.length - 1;
    z.push({ x: r.x + 10, y: G, w: r.w - 20, h: j ? 70 : 74, hidden: j, top: A }), G += j ? 30 : A ? 42 : 30;
  }), z;
}
function oi(i, s, h, r) {
  return h.kind === "clue" ? [{ x: ql(i).clue.x, y: ql(i).clue.y, w: ql(i).clue.w, h: ql(i).clue.h }] : h.kind === "waste" ? [{ x: ql(i).waste.x, y: ql(i).waste.y, w: ql(i).waste.w, h: ql(i).waste.h }] : T0(i, s, h.index).slice(-r);
}
function yy(i, s, h, r) {
  return T0(i, s, h).slice(-r);
}
function Kf(i, s, h) {
  const r = ql(i).foundations[h], f = s.foundationOrder[h], U = f ? s.foundations[f] : [], G = Math.min(U.length, 3) - 1;
  return {
    x: r.x + 14 + Math.max(0, G) * 3,
    y: r.y + 126,
    w: r.w - 28,
    h: 54
  };
}
function y0(i, s) {
  const h = ql(i).foundations[s];
  return { x: h.x + 10, y: h.y + 10, w: h.w - 20, h: 104 };
}
function my(i) {
  const s = jl[i.levelIndex % jl.length], h = Ff(i, s), r = bi(i).filter(({ card: f }) => f.role === "clue").map(({ source: f, card: U }) => ({ source: Le(f), label: U.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: i.mode,
    level: s.name,
    tagline: s.tagline,
    totalCategories: s.categories.length,
    crownSlots: i.foundationOrder.length,
    completedCategories: b0(i, s),
    movesLeft: i.movesLeft,
    score: i.score,
    streak: i.streak,
    selectedSource: Le(i.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: r,
    reserveCount: i.reserve.length,
    wasteTop: Rl(i.waste)?.label ?? null,
    foundations: i.foundationOrder.map((f, U) => ({
      slot: U,
      clueIcon: jt(s, f)?.clueIcon ?? null,
      clueTitle: jt(s, f)?.clueTitle ?? null,
      count: f ? i.foundations[f].length : 0,
      words: f ? i.foundations[f].map((z) => z.label) : []
    })),
    columns: i.columns.map((f, U) => ({
      index: U,
      count: f.length,
      hidden: i.hiddenCounts[U] ?? 0,
      top: Rl(f)?.label ?? null,
      topRole: Rl(f)?.role ?? null,
      topDisplay: Rl(f)?.faceStyle === "iconOnly" ? Rl(f)?.faceIcon ?? Rl(f)?.label ?? null : Rl(f)?.label ?? null,
      revealed: Wf(i, U).map((z) => ({ label: z.label, role: z.role, display: z.faceStyle === "iconOnly" ? z.faceIcon ?? z.label : z.label, faceStyle: z.faceStyle ?? "word" }))
    })),
    boosters: i.boosters,
    actions: h,
    animations: { motionCards: i.motionCards.length, feedbackTexts: i.feedbackTexts.length, foundationPulses: i.foundationPulses.length },
    message: i.message,
    fullscreen: i.fullscreen
  });
}
function Sl(i, s, h, r, f, U) {
  i.beginPath(), i.moveTo(s + U, h), i.arcTo(s + r, h, s + r, h + f, U), i.arcTo(s + r, h + f, s, h + f, U), i.arcTo(s, h + f, s, h, U), i.arcTo(s, h, s + r, h, U), i.closePath();
}
function Vn(i, s, h, r, f, U, z, G = "#10302a") {
  i.fillStyle = U, Sl(i, s, h, r, f, f / 2), i.fill(), i.fillStyle = G, i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(z, s + r / 2, h + f / 2 + 6);
}
function vy(i, s, h, r, f, U, z) {
  for (let G = r; G >= f; G -= 1)
    if (i.font = `${U} ${G}px ${z}`, i.measureText(s).width <= h) return G;
  return f;
}
function Jf(i, s, h, r, f, U, z, G, B) {
  const M = vy(i, s, f, U, z, G, B);
  return i.font = `${G} ${M}px ${B}`, i.fillText(s, h, r), M;
}
function gy(i, s, h, r, f, U) {
  gi(i, s, h, r, f, 18, 0.26);
  const z = i.createLinearGradient(s, h, s, h + f);
  z.addColorStop(0, "#fff2c8"), z.addColorStop(1, "#efbf58"), i.fillStyle = z, Sl(i, s, h, r, f, 18), i.fill(), i.strokeStyle = "rgba(138, 95, 16, 0.38)", i.lineWidth = 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Sl(i, s + 10, h + 10, r - 20, 22, 11), i.fill(), i.fillStyle = "#7b5310", i.font = "800 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("CROWN", s + r / 2, h + 26), i.fillStyle = "#7b5310", U.clueStyle !== "wordOnly" && (i.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(U.clueIcon, s + r / 2, U.clueStyle === "iconOnly" ? h + 76 : h + 64)), U.clueStyle !== "iconOnly" && Jf(
    i,
    U.clueTitle,
    s + r / 2,
    U.clueStyle === "wordOnly" ? h + 76 : h + 98,
    r - 18,
    U.clueStyle === "wordOnly" ? 24 : 17,
    U.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function gi(i, s, h, r, f, U = 18, z = 0.28) {
  i.save(), i.shadowColor = `rgba(4, 14, 22, ${z})`, i.shadowBlur = U, i.shadowOffsetY = 10, i.fillStyle = "rgba(0,0,0,0.01)", Sl(i, s, h, r, f, 20), i.fill(), i.restore();
}
function Gu(i, s, h, r, f) {
  gi(i, s, h, r, f, 16, 0.24);
  const U = i.createLinearGradient(s, h, s + r, h + f);
  U.addColorStop(0, "#4874b9"), U.addColorStop(1, "#254d83"), i.fillStyle = U, Sl(i, s, h, r, f, 18), i.fill(), i.strokeStyle = "rgba(255,255,255,0.3)", i.lineWidth = 2, i.stroke(), i.strokeStyle = "rgba(255,255,255,0.22)", i.lineWidth = 1.5, Sl(i, s + 8, h + 8, r - 16, f - 16, 14), i.stroke(), i.fillStyle = "rgba(255,255,255,0.18)";
  for (let z = 0; z < 3; z += 1)
    for (let G = 0; G < 2; G += 1) {
      const B = s + 26 + G * 34, M = h + 24 + z * 26;
      Sl(i, B, M, 18, 12, 6), i.fill();
    }
}
function Xu(i, s, h, r, f, U, z, G = !1) {
  const B = G || f <= 86;
  if (U.role === "clue") {
    gi(i, s, h, r, f, z ? 18 : 14, z ? 0.3 : 0.24);
    const A = i.createLinearGradient(s, h, s, h + f);
    A.addColorStop(0, "#fff2c8"), A.addColorStop(1, "#efbf58"), i.fillStyle = A, Sl(i, s, h, r, f, B ? 14 : 18), i.fill(), i.strokeStyle = z ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", i.lineWidth = z ? 3 : 2, i.stroke(), i.fillStyle = "rgba(255,255,255,0.3)", Sl(i, s + 8, h + 8, r - 16, B ? 14 : 18, 12), i.fill(), i.fillStyle = "#7b5310", i.textAlign = "center", i.font = B ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", i.fillText("CLUE", s + r / 2, h + (B ? 18 : 26)), U.faceStyle !== "word" && U.faceIcon && (i.font = B ? U.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(U.faceIcon, s + r / 2, h + (U.faceStyle === "iconOnly" ? B ? 40 : 50 : B ? 34 : 38))), U.faceStyle !== "iconOnly" && Jf(
      i,
      U.label,
      s + r / 2,
      h + (U.faceStyle === "word" ? B ? 46 : 54 : B ? 52 : 62),
      r - (B ? 16 : 22),
      B ? 10 : 18,
      B ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), B || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(123,83,16,0.74)", i.fillText("CLAIM A CROWN", s + r / 2, h + f - 12));
    return;
  }
  gi(i, s, h, r, f, z ? 18 : 14, z ? 0.28 : 0.22);
  const M = i.createLinearGradient(s, h, s, h + f);
  M.addColorStop(0, "#fffef8"), M.addColorStop(1, "#f4efe4"), i.fillStyle = M, Sl(i, s, h, r, f, B ? 14 : 18), i.fill(), i.strokeStyle = z ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", i.lineWidth = z ? 3 : 2, i.stroke();
  const j = i.createLinearGradient(s, h + 8, s + r, h + 8);
  j.addColorStop(0, "#f3d9a7"), j.addColorStop(1, "#e8c77f"), i.fillStyle = j, Sl(i, s + 8, h + 8, r - 16, B ? 14 : 18, 12), i.fill(), i.fillStyle = "#102422", i.textAlign = "center", U.faceStyle === "iconOnly" && U.faceIcon ? (i.font = B ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(U.faceIcon, s + r / 2, h + (B ? 42 : 50)), B || (i.font = "600 11px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.42)", i.fillText("IMAGE CARD", s + r / 2, h + 66))) : (U.faceStyle === "iconWord" && U.faceIcon && (i.font = B ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', i.fillText(U.faceIcon, s + r / 2, h + (B ? 27 : 28))), Jf(
    i,
    U.label,
    s + r / 2,
    h + (B ? 46 : U.faceStyle === "iconWord" ? 52 : 44),
    r - (B ? 16 : 22),
    B ? 12 : 19,
    B ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), B || (i.font = "600 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(16,36,34,0.4)", i.fillText(U.faceStyle === "iconWord" ? "ICON CARD" : "WORD", s + r / 2, h + 64)));
}
function m0(i) {
  return 1 - (1 - i) ** 3;
}
function Sy(i, s, h) {
  const r = jl[s.levelIndex % jl.length], f = ql(r), U = bi(s).filter(({ card: A }) => A.role === "clue").length;
  i.clearRect(0, 0, Ql, ot);
  const z = i.createLinearGradient(0, 0, 0, ot);
  z.addColorStop(0, "#246a61"), z.addColorStop(0.48, "#154642"), z.addColorStop(1, "#092225"), i.fillStyle = z, i.fillRect(0, 0, Ql, ot);
  const G = i.createLinearGradient(0, 0, Ql, ot);
  G.addColorStop(0, "rgba(255,255,255,0.025)"), G.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = G;
  for (let A = 0; A < 7; A += 1)
    for (let Y = 0; Y < 5; Y += 1)
      Sl(i, 18 + Y * 188, 18 + A * 168, 120, 72, 24), i.fill();
  i.save();
  const B = i.createRadialGradient(128, 112, 10, 128, 112, 420);
  B.addColorStop(0, "rgba(211, 255, 231, 0.24)"), B.addColorStop(1, "rgba(211, 255, 231, 0)"), i.fillStyle = B, i.fillRect(0, 0, Ql, ot);
  const M = i.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (M.addColorStop(0, "rgba(255, 226, 164, 0.2)"), M.addColorStop(1, "rgba(255, 226, 164, 0)"), i.fillStyle = M, i.fillRect(0, 0, Ql, ot), i.restore(), i.fillStyle = "#f7fff9", i.textAlign = "left", i.font = "800 28px Trebuchet MS, sans-serif", i.fillText(r.name, 76, 58), i.font = "600 15px Trebuchet MS, sans-serif", i.fillStyle = "rgba(247,255,249,0.76)", i.fillText(r.tagline, 76, 84), Sl(i, 78, 108, 286, 228, 32), i.fillStyle = "rgba(4,16,20,0.3)", i.fill(), Vn(i, 102, 124, 110, 34, "rgba(255,255,255,0.12)", "Reserve", "#eff8f3"), Vn(i, 240, 124, 92, 34, "rgba(255,255,255,0.12)", "Waste", "#eff8f3"), s.reserve.length ? (Gu(i, f.reserve.x, f.reserve.y + 10, f.reserve.w, f.reserve.h), Gu(i, f.reserve.x + 6, f.reserve.y + 4, f.reserve.w, f.reserve.h), Gu(i, f.reserve.x + 12, f.reserve.y - 2, f.reserve.w, f.reserve.h), Vn(i, f.reserve.x + 24, f.reserve.y + 92, 74, 34, "#ffe59f", String(s.reserve.length))) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Sl(i, f.reserve.x + 12, f.reserve.y, f.reserve.w, f.reserve.h, 20), i.stroke(), i.setLineDash([])), s.waste.length) {
    const A = Rl(s.waste);
    (s.waste.length > 1 || h?.source.kind === "waste" && h.moved) && Gu(i, f.waste.x + 6, f.waste.y + 4, f.reserve.w, f.reserve.h), h?.source.kind === "waste" && h.moved || Xu(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, A, s.selectedSource?.kind === "waste");
  } else
    i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Sl(i, f.waste.x, f.waste.y, f.waste.w, f.waste.h, 20), i.stroke(), i.setLineDash([]);
  Sl(i, f.clue.x, f.clue.y, f.clue.w, f.clue.h, 20), i.fillStyle = "rgba(255,255,255,0.08)", i.fill(), i.strokeStyle = "rgba(255,255,255,0.16)", i.lineWidth = 2, i.stroke(), i.textAlign = "center", i.fillStyle = "#f0fbf5", i.font = "800 14px Trebuchet MS, sans-serif", i.fillText("CLUES ARE MIXED IN", f.clue.x + f.clue.w / 2, f.clue.y + 34), i.font = "700 24px Trebuchet MS, sans-serif", i.fillStyle = "#fff4c8", i.fillText(String(U), f.clue.x + f.clue.w / 2, f.clue.y + 86), i.font = "600 13px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.82)", i.fillText("visible clue cards", f.clue.x + f.clue.w / 2, f.clue.y + 110), i.font = "600 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.72)", i.fillText("Uncover them from columns", f.clue.x + f.clue.w / 2, f.clue.y + 148), i.fillText("or draw them from reserve.", f.clue.x + f.clue.w / 2, f.clue.y + 166), s.foundationOrder.forEach((A, Y) => {
    const w = f.foundations[Y], I = jt(r, A), el = I ? s.foundations[I.id] : [], Cl = s.foundationPulses.find((Tl) => Tl.slotIndex === Y), cl = h?.dropTarget?.kind === "foundation" && h.dropTarget.index === Y;
    if (Cl) {
      const Tl = Cl.life / Cl.maxLife;
      i.save(), i.globalAlpha = 0.22 * Tl, i.fillStyle = "#ffe59b", Sl(i, w.x - 8, w.y - 8, w.w + 16, w.h + 16, 30), i.fill(), i.restore();
    }
    if (i.fillStyle = cl ? "rgba(255, 238, 182, 0.16)" : "rgba(255,255,255,0.08)", Sl(i, w.x, w.y, w.w, w.h, 24), i.fill(), cl && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Sl(i, w.x, w.y, w.w, w.h, 24), i.stroke()), I ? gy(i, w.x + 10, w.y + 10, w.w - 20, 104, I) : (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([6, 8]), Sl(i, w.x + 12, w.y + 12, w.w - 24, 102, 18), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.7)", i.textAlign = "center", i.fillText("Empty Crown", w.x + w.w / 2, w.y + 56), i.fillText("Drop Clue", w.x + w.w / 2, w.y + 76)), I && el.length) {
      const Tl = el.slice(-3);
      Tl.forEach((Ol, Dl) => {
        Xu(i, w.x + 14 + Dl * 3, w.y + 126 + (Tl.length - Dl - 1) * 5, w.w - 28, 54, Ol, !1, !0);
      });
    } else
      i.strokeStyle = "rgba(255,255,255,0.18)", i.setLineDash([6, 8]), i.lineWidth = 2, Sl(i, w.x + 16, w.y + 126, w.w - 32, 70, 16), i.stroke(), i.setLineDash([]), i.font = "700 12px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,243,0.68)", i.textAlign = "center", i.fillText(I ? "Build Here" : "Need Clue", w.x + w.w / 2, w.y + 168);
    i.fillStyle = "#eff9f3", i.font = "600 14px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText(I ? `${el.length}/${I.words.length}` : "0/6", w.x + w.w / 2, w.y + w.h - 26), i.fillStyle = "rgba(255,255,255,0.9)", i.fillRect(w.x + 16, w.y + w.h - 16, I ? (w.w - 32) * el.length / I.words.length : 0, 8), i.strokeStyle = "rgba(255,255,255,0.18)", i.strokeRect(w.x + 16, w.y + w.h - 16, w.w - 32, 8);
  }), s.columns.forEach((A, Y) => {
    const w = f.columns[Y], I = h?.dropTarget?.kind === "column" && h.dropTarget.index === Y;
    i.fillStyle = I ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", Sl(i, w.x, w.y, w.w, w.h, 28), i.fill(), I && (i.strokeStyle = "#ffe59b", i.lineWidth = 3, Sl(i, w.x, w.y, w.w, w.h, 28), i.stroke()), A.length || (i.strokeStyle = "rgba(255,255,255,0.18)", i.lineWidth = 2, i.setLineDash([8, 8]), Sl(i, w.x + 10, w.y + 26, w.w - 20, 86, 20), i.stroke(), i.setLineDash([]), i.fillStyle = "rgba(239,249,243,0.74)", i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "center", i.fillText("Drop Here", w.x + w.w / 2, w.y + 76));
    const el = Si(s, Y), Cl = h?.moved && h.source.kind === "column" && h.source.index === Y ? h.cards.length : 0, cl = Math.max(el, A.length - Cl);
    let Tl = w.y + 24;
    A.forEach((Ol, Dl) => {
      if (Dl >= cl) return;
      const le = Dl < el, Nl = Dl === cl - 1, P = w.x + 10;
      if (le) {
        Gu(i, P, Tl, w.w - 20, 70), Tl += 30;
        return;
      }
      Xu(
        i,
        P,
        Tl,
        w.w - 20,
        74,
        Ol,
        Nl && s.selectedSource?.kind === "column" && s.selectedSource.index === Y && !h,
        !Nl
      ), Tl += Nl ? 42 : 30;
    }), Vn(i, w.x + 16, w.y + w.h - 48, w.w - 32, 32, "rgba(255,255,255,0.12)", `Column ${Y + 1}`, "#eff8f3");
  }), h?.moved && (i.save(), i.globalAlpha = 0.96, h.cards.forEach((A, Y) => {
    Xu(i, h.x - 58, h.y - 40 + Y * 24, 116, 74, A, !0, Y !== h.cards.length - 1);
  }), i.restore()), s.motionCards.forEach((A) => {
    const Y = m0(1 - A.life / A.maxLife), w = A.fromX + (A.toX - A.fromX) * Y, I = A.fromY + (A.toY - A.fromY) * Y - Math.sin(Y * Math.PI) * A.arc;
    i.save(), i.globalAlpha = 0.92, Xu(i, w, I, A.w, A.h, A.card, !1, A.compact), i.restore();
  }), s.feedbackTexts.forEach((A) => {
    const Y = 1 - A.life / A.maxLife, w = 1 - Y, I = A.y - Y * 36, el = 0.92 + A.scale * m0(Y);
    i.save(), i.globalAlpha = w, i.translate(A.x, I), i.scale(el, el), i.textAlign = "center", i.font = "800 28px Trebuchet MS, sans-serif", i.strokeStyle = "rgba(7,18,18,0.34)", i.lineWidth = 8, i.strokeText(A.text, 0, 0), i.fillStyle = A.color, i.fillText(A.text, 0, 0), i.restore();
  }), i.fillStyle = "rgba(5,16,18,0.58)", Sl(i, 70, 1030, Ql - 140, 136, 30), i.fill(), [
    { label: "Moves", value: String(s.movesLeft), color: "#fff5cc" },
    { label: "Streak", value: String(s.streak), color: "#d5fff1" },
    { label: "Score", value: String(s.score), color: "#d6ecff" },
    { label: "Undo", value: String(s.boosters.undo), color: "#ffe7c1" },
    { label: "Joker", value: String(s.boosters.joker), color: "#ffdcd5" },
    { label: "Shuffle", value: String(s.boosters.shuffle), color: "#e0d9ff" }
  ].forEach((A, Y) => {
    const w = 96 + Y * 142;
    Sl(i, w, 1048, 122, 60, 20), i.fillStyle = "rgba(255,255,255,0.08)", i.fill(), i.fillStyle = A.color, i.font = "700 13px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(A.label, w + 14, 1070), i.fillStyle = "#f4fff8", i.font = "800 22px Trebuchet MS, sans-serif", i.fillText(A.value, w + 14, 1094);
  }), i.fillStyle = "#eef9f4", i.font = "700 16px Trebuchet MS, sans-serif", i.textAlign = "left", i.fillText(s.message, 96, 1140), s.particles.forEach((A) => {
    i.save(), i.globalAlpha = A.life / A.maxLife, i.fillStyle = A.color, Sl(i, A.x - A.size / 2, A.y - A.size / 2, A.size, A.size, 5), i.fill(), i.restore();
  }), s.mode !== "playing" && (i.fillStyle = "rgba(7,12,18,0.74)", Sl(i, 120, 384, Ql - 240, 292, 32), i.fill(), Vn(i, Ql / 2 - 102, 426, 204, 38, "rgba(255,255,255,0.12)", s.mode === "title" ? "Fresh Shuffle" : s.mode === "won" ? "Perfect Sort" : "Dead End", "#f4fff8"), i.fillStyle = "#fff4c8", i.textAlign = "center", i.font = "800 44px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Word Sort Solitaire" : s.mode === "won" ? "Round Complete" : "No Legal Moves", Ql / 2, 510), i.fillStyle = "#eef9f4", i.font = "600 22px Trebuchet MS, sans-serif", i.fillText(s.mode === "title" ? "Clue cards are buried in the deal. Uncover them, claim crowns, and sort the matching words." : s.message, Ql / 2, 566), i.font = "600 18px Trebuchet MS, sans-serif", i.fillStyle = "rgba(239,249,244,0.82)", i.fillText(s.mode === "won" ? "Tap to deal the next board." : "Tap anywhere on the board to play.", Ql / 2, 604), Vn(i, Ql / 2 - 126, 620, 252, 56, "#ffd47b", s.mode === "won" ? "Tap For Next Deal" : "Tap To Start"));
}
function v0(i, s) {
  const h = [];
  for (const r of i.particles)
    r.life -= s, !(r.life <= 0) && (r.x += r.vx * (s / 16), r.y += r.vy * (s / 16), r.vy += 0.04 * (s / 16), h.push(r));
  i.particles = h, i.motionCards = i.motionCards.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.feedbackTexts = i.feedbackTexts.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), i.foundationPulses = i.foundationPulses.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : []));
}
function qe(i) {
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
function tn(i, s) {
  return i.length <= s ? i : `${i.slice(0, Math.max(1, s - 1))}…`;
}
function by() {
  const i = je.useRef(null);
  i.current || (i.current = Zf(0, !1));
  const s = je.useRef(null), h = je.useRef(null), r = je.useRef(null), f = je.useRef(i.current), U = je.useRef(null), [z, G] = je.useState(i.current), [B, M] = je.useState(() => ({ width: typeof window > "u" ? 1440 : window.innerWidth, height: typeof window > "u" ? 960 : window.innerHeight })), j = () => G({ ...f.current, columns: di(f.current.columns), hiddenCounts: vi(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: hi(f.current.foundations), foundationOrder: yi(f.current.foundationOrder), clueDeck: mi(f.current.clueDeck), particles: [...f.current.particles], motionCards: o0(f.current.motionCards), feedbackTexts: r0(f.current.feedbackTexts), foundationPulses: s0(f.current.foundationPulses) }), A = jl[z.levelIndex % jl.length], Y = b0(z, A), w = (g, R = f.current.levelIndex) => {
    const T = Zf(R, f.current.fullscreen, 0);
    T.mode = "playing", f.current = T, j();
  }, I = (g, R) => {
    if (f.current.mode !== "playing") return;
    const T = Rl(Ln(f.current, R)) ?? null;
    if (!T || T.role !== "clue") {
      f.current.message = "Only clue cards can claim an empty crown.", j();
      return;
    }
    const q = jt(A, T.categoryId);
    if (!q) {
      f.current.message = "That clue card has no category data.", j();
      return;
    }
    if (f.current.foundations[q.id].length === q.words.length) {
      f.current.message = `${q.clueTitle} is already complete.`, j();
      return;
    }
    if (f.current.foundationOrder[g] != null) {
      f.current.message = "That crown already has a clue card.", j();
      return;
    }
    const X = si(f.current, q.id);
    if (X >= 0) {
      f.current.message = `${q.clueTitle} already owns crown ${X + 1}.`, j();
      return;
    }
    const Q = oi(A, f.current, R, 1)[0] ?? y0(A, g);
    Qn(f.current);
    const $ = ai(f.current, R, 1);
    $.length && (f.current.foundationOrder[g] = q.id, f.current.selectedSource = null, f.current.streak = 0, f.current.message = `${q.clueTitle} placed into crown ${g + 1}.`, f.current.score += 40, ci(f.current, $[0], Q, y0(A, g), !1), ii(f.current, g, q.color), Zn(f.current, q.clueTitle, ql(A).foundations[g].x + ql(A).foundations[g].w / 2, ql(A).foundations[g].y + 34, "#fff4bf", 0.22), Cl(), j());
  }, el = (g) => {
    if (f.current.mode !== "playing") return;
    const R = Rl(Ln(f.current, g)) ?? null;
    if (R) {
      if (Le(f.current.selectedSource) === Le(g)) {
        if (R.role === "clue") {
          const T = f.current.foundationOrder.map((q, X) => q == null ? X : -1).filter((q) => q >= 0);
          T.length === 1 ? cl(T[0]) : (f.current.selectedSource = null, f.current.message = T.length ? `Select an empty crown for ${R.label}.` : "Every crown already has a clue card.", j());
        } else {
          const T = si(f.current, R.categoryId);
          T >= 0 ? cl(T) : (f.current.selectedSource = null, f.current.message = "Find and place the matching clue card first.", j());
        }
        Le(f.current.selectedSource) === Le(g) && (f.current.selectedSource = null, f.current.message = "Selection cleared.", j());
        return;
      }
      f.current.selectedSource = g, f.current.message = R.role === "clue" ? `${R.label} clue selected. Drop it into an empty crown.` : `${R.label} selected.`, j();
    }
  }, Cl = () => {
    f.current.movesLeft = Math.max(0, f.current.movesLeft - 1), Vf(f.current);
  }, cl = (g, R) => {
    const T = R ?? f.current.selectedSource;
    if (f.current.mode !== "playing" || !T) return;
    const q = Ln(f.current, T), X = Rl(q) ?? null;
    if (!X) return;
    if (X.role === "clue") {
      I(g, T);
      return;
    }
    const Q = f.current.foundationOrder[g], $ = jt(A, Q);
    if (!Q || !$) {
      f.current.streak = 0, f.current.message = "That crown needs its clue card first.", j();
      return;
    }
    if (X.categoryId !== Q) {
      f.current.streak = 0, f.current.message = `${X.label} does not fit the ${$?.clueTitle ?? "selected"} clue.`, j();
      return;
    }
    const _l = oi(A, f.current, T, 1)[0];
    Qn(f.current);
    const zl = ai(f.current, T, 1);
    if (!zl.length) return;
    f.current.foundations[Q].push(zl[0]), f.current.selectedSource = null, f.current.score += 100 + f.current.streak * 25, f.current.streak += 1, f.current.message = `${zl[0].label} matched the ${$?.clueTitle ?? "target"} clue.`;
    const te = Kf(A, f.current, g);
    ci(f.current, zl[0], _l, te, !0), d0(f.current, te.x + te.w / 2, te.y + 86, zl[0].color), ii(f.current, g, $?.color ?? "#ffe59b"), Zn(f.current, `+${100 + (f.current.streak - 1) * 25}`, te.x + te.w / 2, te.y + 44, "#fff4bf", 0.24), f.current.foundations[Q].length === $.words.length && (f.current.foundationOrder[g] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${$.clueTitle} completed. Crown ${g + 1} opens again.`, Zn(f.current, "Set Clear", Ql / 2, 316, "#ffe7aa", 0.34), ii(f.current, g, $.color)), f.current.streak >= 2 && Zn(f.current, `Combo x${f.current.streak}`, Ql / 2, 342, "#fff0b4", 0.3), Cl(), j();
  }, Tl = (g, R) => {
    const T = R ?? f.current.selectedSource;
    if (!T || f.current.mode !== "playing") return;
    if (T.kind === "column" && T.index === g) {
      f.current.selectedSource = null, f.current.message = "Selection cleared.", j();
      return;
    }
    const q = Ln(f.current, T), X = q[0] ?? null;
    if (!X) return;
    if (!$f(X, f.current.columns[g], T)) {
      f.current.streak = 0, f.current.message = `${X.label} cannot stack on column ${g + 1}.`, j();
      return;
    }
    const Q = oi(A, f.current, T, q.length);
    Qn(f.current);
    const $ = ai(f.current, T, q.length);
    if (!$.length) return;
    f.current.columns[g].push(...$), f.current.hiddenCounts[g] = Math.min(f.current.hiddenCounts[g] ?? 0, Math.max(0, f.current.columns[g].length - $.length)), p0(f.current, g);
    const _l = yy(A, f.current, g, $.length);
    $.forEach((zl, te) => ci(f.current, zl, Q[te] ?? Q[Q.length - 1], _l[te] ?? _l[_l.length - 1], te !== $.length - 1)), f.current.selectedSource = null, f.current.score += 15 * $.length, f.current.streak = 0, f.current.message = $.length > 1 ? `${$.length} matching cards parked on column ${g + 1}.` : `${$[0].label} parked on column ${g + 1}.`, Zn(f.current, $.length > 1 ? `Stack x${$.length}` : "+15", ql(A).columns[g].x + ql(A).columns[g].w / 2, ql(A).columns[g].y + 18, "#dff7ff", $.length > 1 ? 0.28 : 0.18), Cl(), j();
  }, Ol = () => {
    if (f.current.mode !== "playing") return;
    if (!Rl(f.current.reserve)) {
      f.current.message = "Reserve pile is empty.", j();
      return;
    }
    Qn(f.current);
    const R = f.current.reserve.pop();
    R && (f.current.waste.push(R), f.current.selectedSource = { kind: "waste" }, f.current.message = `Drew ${R.label}.`, Cl(), j());
  }, Dl = () => {
    f.current.message = sy(f.current), j();
  }, le = () => {
    ry(f.current) || (f.current.message = f.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), j();
  }, Nl = () => {
    const g = f.current.selectedSource;
    if (!g || f.current.mode !== "playing") return;
    if (f.current.boosters.joker <= 0) {
      f.current.message = "Joker spent.", j();
      return;
    }
    const R = Rl(Ln(f.current, g)) ?? null;
    if (!R) return;
    if (R.role === "clue") {
      f.current.message = "Joker only sorts word cards.", j();
      return;
    }
    const T = si(f.current, R.categoryId);
    if (T < 0) {
      f.current.message = "Place the matching clue card first.", j();
      return;
    }
    const q = oi(A, f.current, g, 1)[0] ?? Kf(A, f.current, T);
    Qn(f.current);
    const X = ai(f.current, g, 1)[0];
    if (!X) return;
    f.current.foundations[X.categoryId].push(X), f.current.selectedSource = null, f.current.boosters.joker -= 1, f.current.score += 80, f.current.message = `Joker matched ${X.label} automatically.`;
    const Q = Kf(A, f.current, T);
    ci(f.current, X, q, Q, !0), d0(f.current, Q.x + Q.w / 2, Q.y + 86, X.color), ii(f.current, T, A.categories.find(($) => $.id === X.categoryId)?.color ?? "#ffe59b"), Zn(f.current, "Joker!", Q.x + Q.w / 2, Q.y + 44, "#ffd7a8", 0.24), Vf(f.current), j();
  }, P = () => {
    if (f.current.mode !== "playing") return;
    if (f.current.boosters.shuffle <= 0) {
      f.current.message = "Shuffle spent.", j();
      return;
    }
    const g = [...f.current.reserve, ...f.current.waste];
    if (!g.length) {
      f.current.message = "No reserve cards to reshuffle.", j();
      return;
    }
    Qn(f.current), f.current.reserve = dy(g, 8564529 + f.current.movesLeft * 17 + f.current.score), f.current.waste = [], f.current.selectedSource = null, f.current.boosters.shuffle -= 1, f.current.message = "Reserve and waste reshuffled.", Vf(f.current), j();
  }, Kl = () => {
    const g = Math.max(0, f.current.score);
    f.current = Zf((f.current.levelIndex + 1) % jl.length, f.current.fullscreen, g), f.current.mode = "playing", f.current.message = "Fresh mixed clue cards dealt.", j();
  }, re = async () => {
    const g = s.current;
    if (!(!g || typeof document > "u"))
      try {
        document.fullscreenElement === g ? await document.exitFullscreen() : await g.requestFullscreen();
      } catch {
        f.current.message = "Fullscreen is unavailable here.", j();
      }
  }, Qe = (g, R) => {
    const T = h.current;
    if (!T) return;
    const q = fi(T, g, R);
    if (!q) return;
    const { x: X, y: Q } = q, $ = jl[f.current.levelIndex % jl.length], _l = ql($);
    if (f.current.mode !== "playing") {
      f.current.mode === "won" ? Kl() : w();
      return;
    }
    if (rt(X, Q, _l.reserve)) {
      Ol();
      return;
    }
    if (rt(X, Q, _l.waste)) {
      el({ kind: "waste" });
      return;
    }
    for (let zl = 0; zl < _l.foundations.length; zl += 1)
      if (rt(X, Q, _l.foundations[zl])) {
        cl(zl);
        return;
      }
    for (let zl = 0; zl < _l.columns.length; zl += 1)
      if (rt(X, Q, _l.columns[zl])) {
        f.current.selectedSource ? Tl(zl) : el({ kind: "column", index: zl });
        return;
      }
  }, Te = (g) => {
    const R = h.current;
    if (!R || f.current.mode !== "playing") return;
    const T = fi(R, g.clientX, g.clientY);
    if (!T) return;
    const q = jl[f.current.levelIndex % jl.length], X = hy(q, f.current, T.x, T.y);
    if (!X) return;
    const Q = Ln(f.current, X);
    Q.length && (U.current = { source: X, cards: Q, clueCategoryId: Q[0]?.role === "clue" ? Q[0].categoryId : null, x: T.x, y: T.y, startX: T.x, startY: T.y, moved: !1, dropTarget: null }, R.setPointerCapture(g.pointerId));
  }, Il = (g) => {
    const R = h.current, T = U.current;
    if (!R || !T) return;
    const q = fi(R, g.clientX, g.clientY);
    if (!q) return;
    T.x = q.x, T.y = q.y, T.moved = T.moved || Math.hypot(q.x - T.startX, q.y - T.startY) > 14;
    const X = jl[f.current.levelIndex % jl.length];
    T.dropTarget = T.moved ? h0(X, f.current, T.source, T.cards[0] ?? null, q.x, q.y) : null;
  }, Ze = (g) => {
    const R = h.current, T = U.current;
    if (!R || !T) {
      Qe(g.clientX, g.clientY);
      return;
    }
    const q = fi(R, g.clientX, g.clientY);
    R.hasPointerCapture(g.pointerId) && R.releasePointerCapture(g.pointerId);
    const X = jl[f.current.levelIndex % jl.length];
    if (q && (T.x = q.x, T.y = q.y, T.moved = T.moved || Math.hypot(q.x - T.startX, q.y - T.startY) > 14, T.dropTarget = T.moved ? h0(X, f.current, T.source, T.cards[0] ?? null, q.x, q.y) : null), U.current = null, !T.moved) {
      Qe(g.clientX, g.clientY);
      return;
    }
    if (T.dropTarget?.kind === "foundation") {
      cl(T.dropTarget.index, T.source);
      return;
    }
    if (T.dropTarget?.kind === "column") {
      Tl(T.dropTarget.index, T.source);
      return;
    }
    f.current.selectedSource = T.source, f.current.message = T.cards[0].role === "clue" ? `${T.cards[0].label} lifted. Drag it into an empty crown.` : T.cards.length > 1 ? `${T.cards.length} matching cards lifted. Drag them to a crown or column.` : `${T.cards[0].label} lifted. Drag it to a crown or column.`, j();
  }, Re = (g) => {
    const R = h.current;
    R && U.current && R.hasPointerCapture(g.pointerId) && R.releasePointerCapture(g.pointerId), U.current = null;
  };
  je.useEffect(() => {
    const g = h.current, R = g?.getContext("2d");
    if (!g || !R) return;
    const T = window, q = () => {
      Sy(R, f.current, U.current), G({ ...f.current, columns: di(f.current.columns), hiddenCounts: vi(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: hi(f.current.foundations), foundationOrder: yi(f.current.foundationOrder), clueDeck: mi(f.current.clueDeck), particles: [...f.current.particles], motionCards: o0(f.current.motionCards), feedbackTexts: r0(f.current.feedbackTexts), foundationPulses: s0(f.current.foundationPulses) });
    }, X = () => {
      v0(f.current, 16), q(), r.current = window.requestAnimationFrame(X);
    };
    return T.render_game_to_text = () => my(f.current), T.advanceTime = (Q) => {
      let $ = Q;
      for (; $ > 0; ) {
        const _l = Math.min($, 16);
        v0(f.current, _l), $ -= _l;
      }
      q();
    }, T.__drainVirtualTimePending = () => 0, q(), r.current = window.requestAnimationFrame(X), () => {
      r.current != null && window.cancelAnimationFrame(r.current), delete T.render_game_to_text, delete T.advanceTime, delete T.__drainVirtualTimePending;
    };
  }, []), je.useEffect(() => {
    const g = () => M({ width: window.innerWidth, height: window.innerHeight });
    return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []), je.useEffect(() => {
    const g = ["j", "k", "l", "m", "p"], R = ["a", "s", "d", "g", "v"], T = () => {
      f.current.fullscreen = document.fullscreenElement === s.current, M({ width: window.innerWidth, height: window.innerHeight }), j();
    }, q = (X) => {
      const Q = X.key.toLowerCase();
      Q === "f" && (X.preventDefault(), re()), Q === "n" && (X.preventDefault(), Ol()), Q === "h" && (X.preventDefault(), Dl()), Q === "u" && (X.preventDefault(), le()), Q === "x" && (X.preventDefault(), Nl()), Q === "z" && (X.preventDefault(), P()), Q === "enter" && f.current.mode !== "playing" && (X.preventDefault(), w());
      const $ = R.indexOf(Q);
      if ($ >= 0) {
        X.preventDefault();
        const zl = { kind: "column", index: $ };
        f.current.selectedSource?.kind === "column" && f.current.selectedSource.index === $ ? el(zl) : f.current.selectedSource ? Tl($) : el(zl);
      }
      Q === "q" && (X.preventDefault(), f.current.selectedSource?.kind === "waste" ? el({ kind: "waste" }) : el({ kind: "waste" }));
      const _l = g.indexOf(Q);
      _l >= 0 && (X.preventDefault(), cl(_l));
    };
    return document.addEventListener("fullscreenchange", T), window.addEventListener("keydown", q), () => {
      document.removeEventListener("fullscreenchange", T), window.removeEventListener("keydown", q);
    };
  }, []);
  const pl = !z.fullscreen && B.width < 560, O = z.fullscreen && (B.width < 1140 || B.height < 760), _ = z.fullscreen || pl, k = z.fullscreen ? O ? "10px 10px 14px" : "14px 14px 16px" : pl ? "12px 10px 14px" : 20, sl = z.fullscreen ? Math.min(O ? 720 : 860, Math.max(320, B.width - (O ? 28 : 48))) : pl ? Math.min(420, Math.max(320, B.width - 28)) : 760, dl = _ ? "Buried clue cards, five live crowns, and a tighter layout." : "A clue-card word sorter where the crown cards are buried in the deal, just like the rest of the deck.", m = z.fullscreen ? O ? 92 : 104 : pl ? 72 : 108, H = z.fullscreen ? O ? 120 : 136 : pl ? 108 : 160, x = (g, R) => {
    const T = jt(A, g);
    return T ? _ ? `${T.clueIcon} ${tn(T.clueTitle, pl ? 8 : 10)}` : `${T.clueIcon} ${T.clueTitle}` : `Empty ${R + 1}`;
  };
  return /* @__PURE__ */ Z.jsx("div", { style: { minHeight: "100%", display: "flex", justifyContent: "center", padding: z.fullscreen ? 0 : "24px 12px 48px", background: z.fullscreen ? "#091614" : "transparent" }, children: /* @__PURE__ */ Z.jsxs("section", { ref: s, style: { width: "100%", maxWidth: z.fullscreen ? "100vw" : 1040, minHeight: z.fullscreen ? "100vh" : void 0, boxSizing: "border-box", borderRadius: z.fullscreen ? 0 : 32, padding: k, background: "radial-gradient(circle at top left, rgba(179, 240, 209, 0.16), transparent 30%), linear-gradient(180deg, #163c37 0%, #0b1f1c 100%)", boxShadow: z.fullscreen ? "none" : "0 24px 60px rgba(4,14,39,0.35)", display: "flex", flexDirection: "column", gap: z.fullscreen ? 12 : 14, color: "#eff9f4", overflowX: "hidden", overflowY: z.fullscreen ? "auto" : "hidden" }, children: [
    /* @__PURE__ */ Z.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: _ ? "flex-start" : "center", gap: O ? 10 : pl ? 8 : 16, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gap: 4, minWidth: 0, flex: "1 1 320px" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: z.fullscreen ? O ? 24 : 28 : pl ? 22 : 30, fontWeight: 800 }, children: "Word Sort Solitaire" }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: _ ? 13 : 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: _ ? 560 : 620 }, children: dl })
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", minWidth: 0, justifyContent: _ ? "flex-start" : "flex-end" }, children: [
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-start", onClick: () => w(), style: { ...qe(!0), padding: _ ? "9px 12px" : "11px 16px", fontSize: _ ? 12 : 14 }, children: z.mode === "playing" ? "New Round" : "Start Round" }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-next", onClick: Kl, style: { ...qe(!1), padding: _ ? "9px 12px" : "11px 16px", fontSize: _ ? 12 : 14 }, children: "Next Level" }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-hint", onClick: Dl, style: { ...qe(!1), padding: _ ? "9px 12px" : "11px 16px", fontSize: _ ? 12 : 14 }, children: "Hint" }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-draw", onClick: Ol, style: { ...qe(!1), padding: _ ? "9px 12px" : "11px 16px", fontSize: _ ? 12 : 14 }, children: "Draw" }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-fullscreen", onClick: () => {
          re();
        }, style: { ...qe(!1), padding: _ ? "9px 12px" : "11px 16px", fontSize: _ ? 12 : 14 }, children: z.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
      ] })
    ] }),
    /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${m}px, 1fr))`, gap: z.fullscreen ? 10 : 12 }, children: [
      [["Level", A.name], ["Moves Left", String(z.movesLeft)], ["Score", String(z.score)], ["Best", String(z.bestScore)], ["Streak", String(z.streak)], ["Cleared", `${Y}/${A.categories.length}`]].map(([g, R]) => {
        const T = g === "Level";
        return /* @__PURE__ */ Z.jsxs("div", { style: { minWidth: 0, padding: _ ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: _ && T ? O || pl ? "1 / -1" : "span 2" : void 0 }, children: [
          /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: g }),
          /* @__PURE__ */ Z.jsx("div", { style: { fontSize: _ ? T ? 17 : 18 : 24, fontWeight: 800, wordBreak: T ? "normal" : "break-word", whiteSpace: T ? "nowrap" : "normal", overflow: T ? "hidden" : "visible", textOverflow: T ? "ellipsis" : "clip" }, children: T && _ ? tn(R, pl ? 20 : O ? 24 : 30) : R })
        ] }, g);
      }),
      /* @__PURE__ */ Z.jsxs("div", { style: { minWidth: 0, padding: _ ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Visible Clues" }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: _ ? 17 : 20, fontWeight: 800 }, children: bi(z).filter(({ card: g }) => g.role === "clue").length })
      ] }),
      [["Undo", String(z.boosters.undo)], ["Joker", String(z.boosters.joker)], ["Shuffle", String(z.boosters.shuffle)]].map(([g, R]) => /* @__PURE__ */ Z.jsxs("div", { style: { minWidth: 0, padding: _ ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: g }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: _ ? 18 : 24, fontWeight: 800 }, children: R })
      ] }, g)),
      /* @__PURE__ */ Z.jsxs("div", { style: { minWidth: 0, padding: _ ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: _ ? "1 / -1" : void 0 }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Crown Status" }),
        /* @__PURE__ */ Z.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }, children: z.foundationOrder.map((g, R) => /* @__PURE__ */ Z.jsx("div", { style: { padding: _ ? "5px 8px" : "6px 10px", borderRadius: 999, background: g ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: _ ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: x(g, R) }, `crown-status-${R}`)) })
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { style: { minWidth: 0, padding: _ ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: _ ? 13 : 15, fontWeight: 700, minHeight: 24, wordBreak: "break-word" }, children: z.message })
      ] })
    ] }),
    /* @__PURE__ */ Z.jsx("div", { style: { width: sl, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Ql} / ${ot}` }, children: /* @__PURE__ */ Z.jsx("canvas", { ref: h, width: Ql, height: ot, style: { width: "100%", height: "100%", display: "block", borderRadius: z.fullscreen ? 26 : 28, boxShadow: "0 22px 40px rgba(3,10,28,0.42)", background: "#102623", cursor: U.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: Te, onPointerMove: Il, onPointerUp: Ze, onPointerCancel: Re }) }),
    /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gap: 10 }, children: [
      /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${H}px, 1fr))`, gap: 10 }, children: [
        z.columns.map((g, R) => /* @__PURE__ */ Z.jsx("button", { id: `wordsort-source-col-${R + 1}`, onClick: () => z.selectedSource ? Tl(R) : el({ kind: "column", index: R }), style: { ...qe(Le(z.selectedSource) === `column-${R}`), fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: Le(z.selectedSource) === `column-${R}` ? `Selected: ${tn(Rl(g)?.label ?? "Empty", _ ? 12 : 18)}` : `${pl ? "C" : "Column"} ${R + 1}: ${tn(Rl(g)?.label ?? "Empty", _ ? 12 : 18)}` }, R)),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-source-waste", onClick: () => z.selectedSource ? el({ kind: "waste" }) : el({ kind: "waste" }), style: { ...qe(Le(z.selectedSource) === "waste"), fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: Le(z.selectedSource) === "waste" ? `Selected: ${tn(Rl(z.waste)?.label ?? "Empty", _ ? 12 : 18)}` : `${pl ? "Waste" : "Waste:"} ${tn(Rl(z.waste)?.label ?? "Empty", _ ? 12 : 18)}` })
      ] }),
      /* @__PURE__ */ Z.jsx("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${H}px, 1fr))`, gap: 10 }, children: z.foundationOrder.map((g, R) => {
        const T = jt(A, g);
        return /* @__PURE__ */ Z.jsx("button", { id: `wordsort-foundation-${R + 1}`, onClick: () => cl(R), style: { ...qe(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: T ? `${T.clueIcon} ${tn(T.clueTitle, _ ? 9 : 16)} ${z.foundations[T.id].length}/${T.words.length}` : _ ? `Empty ${R + 1}` : `Empty Crown ${R + 1}` }, R);
      }) }),
      /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${H}px, 1fr))`, gap: 10 }, children: [
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-undo", onClick: le, style: { ...qe(!1), fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: `Undo (${z.boosters.undo})` }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-joker", onClick: Nl, style: { ...qe(!1), fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: `Joker (${z.boosters.joker})` }),
        /* @__PURE__ */ Z.jsx("button", { id: "wordsort-shuffle", onClick: P, style: { ...qe(!1), fontSize: _ ? 12 : 14, padding: _ ? "9px 10px" : "11px 16px" }, children: `Shuffle (${z.boosters.shuffle})` })
      ] })
    ] }),
    !z.fullscreen && !pl ? /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
      /* @__PURE__ */ Z.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "How It Plays" }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Clue cards are mixed into the same deal as every other card. You only get five live crowns, so finishing one set opens space for the next buried clue." })
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
        /* @__PURE__ */ Z.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
          "Drag and drop on the canvas, tap for quick-sort, or use the helper buttons. Keyboard: ",
          /* @__PURE__ */ Z.jsx("code", { children: "A/S/D/G/V" }),
          " columns, ",
          /* @__PURE__ */ Z.jsx("code", { children: "Q" }),
          " waste, ",
          /* @__PURE__ */ Z.jsx("code", { children: "J/K/L/M/P" }),
          " crown slots, ",
          /* @__PURE__ */ Z.jsx("code", { children: "N" }),
          " draw, ",
          /* @__PURE__ */ Z.jsx("code", { children: "U" }),
          " undo, ",
          /* @__PURE__ */ Z.jsx("code", { children: "X" }),
          " joker, ",
          /* @__PURE__ */ Z.jsx("code", { children: "Z" }),
          " shuffle, ",
          /* @__PURE__ */ Z.jsx("code", { children: "H" }),
          " hint, ",
          /* @__PURE__ */ Z.jsx("code", { children: "F" }),
          " fullscreen."
        ] })
      ] }),
      /* @__PURE__ */ Z.jsxs("div", { style: { borderRadius: 22, padding: "14px 16px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
        /* @__PURE__ */ Z.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Reference Direction" }),
        /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The board is now closer to the mobile loop: more clue categories than crown slots, with completed sets freeing crowns for later clues." })
      ] })
    ] }) : null,
    pl ? /* @__PURE__ */ Z.jsxs("div", { style: { borderRadius: 18, padding: "10px 12px", background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }, children: [
      /* @__PURE__ */ Z.jsx("div", { style: { fontWeight: 800, marginBottom: 4, fontSize: 13 }, children: "Mobile Notes" }),
      /* @__PURE__ */ Z.jsx("div", { style: { fontSize: 12, lineHeight: 1.45, color: "rgba(235,244,255,0.82)" }, children: "Tap a column or waste card to select it, then tap a crown or column to move it. Buried clue cards have to be uncovered before a crown can claim them." })
    ] }) : null
  ] }) });
}
const z0 = document.getElementById("word-sort-root");
if (!z0)
  throw new Error("Word Sort export root element was not found.");
document.title = "Word Sort Solitaire | Ethan Mayer";
document.documentElement.style.colorScheme = "dark";
document.body.classList.add("word-sort-export-body");
ey.createRoot(z0).render(/* @__PURE__ */ Z.jsx(by, {}));
