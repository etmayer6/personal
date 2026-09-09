var gf = { exports: {} }, Ou = {};
var Ur;
function _1() {
  if (Ur) return Ou;
  Ur = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(o, T, M) {
    var U = null;
    if (M !== void 0 && (U = "" + M), T.key !== void 0 && (U = "" + T.key), "key" in T) {
      M = {};
      for (var j in T)
        j !== "key" && (M[j] = T[j]);
    } else M = T;
    return T = M.ref, {
      $$typeof: i,
      type: o,
      key: U,
      ref: T !== void 0 ? T : null,
      props: M
    };
  }
  return Ou.Fragment = m, Ou.jsx = y, Ou.jsxs = y, Ou;
}
var Rr;
function x1() {
  return Rr || (Rr = 1, gf.exports = _1()), gf.exports;
}
var ml = x1(), bf = { exports: {} }, Du = {}, Sf = { exports: {} }, pf = {};
var Hr;
function M1() {
  return Hr || (Hr = 1, (function(i) {
    function m(x, p) {
      var v = x.length;
      x.push(p);
      l: for (; 0 < v; ) {
        var H = v - 1 >>> 1, q = x[H];
        if (0 < T(q, p))
          x[H] = p, x[v] = q, v = H;
        else break l;
      }
    }
    function y(x) {
      return x.length === 0 ? null : x[0];
    }
    function o(x) {
      if (x.length === 0) return null;
      var p = x[0], v = x.pop();
      if (v !== p) {
        x[0] = v;
        l: for (var H = 0, q = x.length, r = q >>> 1; H < r; ) {
          var A = 2 * (H + 1) - 1, N = x[A], Y = A + 1, L = x[Y];
          if (0 > T(N, v))
            Y < q && 0 > T(L, N) ? (x[H] = L, x[Y] = v, H = Y) : (x[H] = N, x[A] = v, H = A);
          else if (Y < q && 0 > T(L, v))
            x[H] = L, x[Y] = v, H = Y;
          else break l;
        }
      }
      return p;
    }
    function T(x, p) {
      var v = x.sortIndex - p.sortIndex;
      return v !== 0 ? v : x.id - p.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      i.unstable_now = function() {
        return M.now();
      };
    } else {
      var U = Date, j = U.now();
      i.unstable_now = function() {
        return U.now() - j;
      };
    }
    var R = [], E = [], C = 1, B = null, V = 3, gl = !1, Sl = !1, Ul = !1, Ht = !1, Zl = typeof setTimeout == "function" ? setTimeout : null, Ot = typeof clearTimeout == "function" ? clearTimeout : null, _l = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(x) {
      for (var p = y(E); p !== null; ) {
        if (p.callback === null) o(E);
        else if (p.startTime <= x)
          o(E), p.sortIndex = p.expirationTime, m(R, p);
        else break;
        p = y(E);
      }
    }
    function tt(x) {
      if (Ul = !1, Ll(x), !Sl)
        if (y(R) !== null)
          Sl = !0, Nl || (Nl = !0, cl());
        else {
          var p = y(E);
          p !== null && ut(tt, p.startTime - x);
        }
    }
    var Nl = !1, $ = -1, Bl = 5, et = -1;
    function at() {
      return Ht ? !0 : !(i.unstable_now() - et < Bl);
    }
    function K() {
      if (Ht = !1, Nl) {
        var x = i.unstable_now();
        et = x;
        var p = !0;
        try {
          l: {
            Sl = !1, Ul && (Ul = !1, Ot($), $ = -1), gl = !0;
            var v = V;
            try {
              t: {
                for (Ll(x), B = y(R); B !== null && !(B.expirationTime > x && at()); ) {
                  var H = B.callback;
                  if (typeof H == "function") {
                    B.callback = null, V = B.priorityLevel;
                    var q = H(
                      B.expirationTime <= x
                    );
                    if (x = i.unstable_now(), typeof q == "function") {
                      B.callback = q, Ll(x), p = !0;
                      break t;
                    }
                    B === y(R) && o(R), Ll(x);
                  } else o(R);
                  B = y(R);
                }
                if (B !== null) p = !0;
                else {
                  var r = y(E);
                  r !== null && ut(
                    tt,
                    r.startTime - x
                  ), p = !1;
                }
              }
              break l;
            } finally {
              B = null, V = v, gl = !1;
            }
            p = void 0;
          }
        } finally {
          p ? cl() : Nl = !1;
        }
      }
    }
    var cl;
    if (typeof _l == "function")
      cl = function() {
        _l(K);
      };
    else if (typeof MessageChannel < "u") {
      var Ct = new MessageChannel(), gt = Ct.port2;
      Ct.port1.onmessage = K, cl = function() {
        gt.postMessage(null);
      };
    } else
      cl = function() {
        Zl(K, 0);
      };
    function ut(x, p) {
      $ = Zl(function() {
        x(i.unstable_now());
      }, p);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, i.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Bl = 0 < x ? Math.floor(1e3 / x) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, i.unstable_next = function(x) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = V;
      }
      var v = V;
      V = p;
      try {
        return x();
      } finally {
        V = v;
      }
    }, i.unstable_requestPaint = function() {
      Ht = !0;
    }, i.unstable_runWithPriority = function(x, p) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var v = V;
      V = x;
      try {
        return p();
      } finally {
        V = v;
      }
    }, i.unstable_scheduleCallback = function(x, p, v) {
      var H = i.unstable_now();
      switch (typeof v == "object" && v !== null ? (v = v.delay, v = typeof v == "number" && 0 < v ? H + v : H) : v = H, x) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = v + q, x = {
        id: C++,
        callback: p,
        priorityLevel: x,
        startTime: v,
        expirationTime: q,
        sortIndex: -1
      }, v > H ? (x.sortIndex = v, m(E, x), y(R) === null && x === y(E) && (Ul ? (Ot($), $ = -1) : Ul = !0, ut(tt, v - H))) : (x.sortIndex = q, m(R, x), Sl || gl || (Sl = !0, Nl || (Nl = !0, cl()))), x;
    }, i.unstable_shouldYield = at, i.unstable_wrapCallback = function(x) {
      var p = V;
      return function() {
        var v = V;
        V = p;
        try {
          return x.apply(this, arguments);
        } finally {
          V = v;
        }
      };
    };
  })(pf)), pf;
}
var Cr;
function O1() {
  return Cr || (Cr = 1, Sf.exports = M1()), Sf.exports;
}
var zf = { exports: {} }, w = {};
var Nr;
function D1() {
  if (Nr) return w;
  Nr = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), j = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), V = Symbol.iterator;
  function gl(r) {
    return r === null || typeof r != "object" ? null : (r = V && r[V] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Sl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ul = Object.assign, Ht = {};
  function Zl(r, A, N) {
    this.props = r, this.context = A, this.refs = Ht, this.updater = N || Sl;
  }
  Zl.prototype.isReactComponent = {}, Zl.prototype.setState = function(r, A) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, A, "setState");
  }, Zl.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Ot() {
  }
  Ot.prototype = Zl.prototype;
  function _l(r, A, N) {
    this.props = r, this.context = A, this.refs = Ht, this.updater = N || Sl;
  }
  var Ll = _l.prototype = new Ot();
  Ll.constructor = _l, Ul(Ll, Zl.prototype), Ll.isPureReactComponent = !0;
  var tt = Array.isArray;
  function Nl() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Bl = Object.prototype.hasOwnProperty;
  function et(r, A, N) {
    var Y = N.ref;
    return {
      $$typeof: i,
      type: r,
      key: A,
      ref: Y !== void 0 ? Y : null,
      props: N
    };
  }
  function at(r, A) {
    return et(r.type, A, r.props);
  }
  function K(r) {
    return typeof r == "object" && r !== null && r.$$typeof === i;
  }
  function cl(r) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(N) {
      return A[N];
    });
  }
  var Ct = /\/+/g;
  function gt(r, A) {
    return typeof r == "object" && r !== null && r.key != null ? cl("" + r.key) : A.toString(36);
  }
  function ut(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(Nl, Nl) : (r.status = "pending", r.then(
          function(A) {
            r.status === "pending" && (r.status = "fulfilled", r.value = A);
          },
          function(A) {
            r.status === "pending" && (r.status = "rejected", r.reason = A);
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
  function x(r, A, N, Y, L) {
    var k = typeof r;
    (k === "undefined" || k === "boolean") && (r = null);
    var nl = !1;
    if (r === null) nl = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          nl = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case i:
            case m:
              nl = !0;
              break;
            case C:
              return nl = r._init, x(
                nl(r._payload),
                A,
                N,
                Y,
                L
              );
          }
      }
    if (nl)
      return L = L(r), nl = Y === "" ? "." + gt(r, 0) : Y, tt(L) ? (N = "", nl != null && (N = nl.replace(Ct, "$&/") + "/"), x(L, A, N, "", function(Ba) {
        return Ba;
      })) : L != null && (K(L) && (L = at(
        L,
        N + (L.key == null || r && r.key === L.key ? "" : ("" + L.key).replace(
          Ct,
          "$&/"
        ) + "/") + nl
      )), A.push(L)), 1;
    nl = 0;
    var Vl = Y === "" ? "." : Y + ":";
    if (tt(r))
      for (var Tl = 0; Tl < r.length; Tl++)
        Y = r[Tl], k = Vl + gt(Y, Tl), nl += x(
          Y,
          A,
          N,
          k,
          L
        );
    else if (Tl = gl(r), typeof Tl == "function")
      for (r = Tl.call(r), Tl = 0; !(Y = r.next()).done; )
        Y = Y.value, k = Vl + gt(Y, Tl++), nl += x(
          Y,
          A,
          N,
          k,
          L
        );
    else if (k === "object") {
      if (typeof r.then == "function")
        return x(
          ut(r),
          A,
          N,
          Y,
          L
        );
      throw A = String(r), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return nl;
  }
  function p(r, A, N) {
    if (r == null) return r;
    var Y = [], L = 0;
    return x(r, Y, "", "", function(k) {
      return A.call(N, k, L++);
    }), Y;
  }
  function v(r) {
    if (r._status === -1) {
      var A = r._result;
      A = A(), A.then(
        function(N) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = N);
        },
        function(N) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = N);
        }
      ), r._status === -1 && (r._status = 0, r._result = A);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var H = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, q = {
    map: p,
    forEach: function(r, A, N) {
      p(
        r,
        function() {
          A.apply(this, arguments);
        },
        N
      );
    },
    count: function(r) {
      var A = 0;
      return p(r, function() {
        A++;
      }), A;
    },
    toArray: function(r) {
      return p(r, function(A) {
        return A;
      }) || [];
    },
    only: function(r) {
      if (!K(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return w.Activity = B, w.Children = q, w.Component = Zl, w.Fragment = y, w.Profiler = T, w.PureComponent = _l, w.StrictMode = o, w.Suspense = R, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, w.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return $.H.useMemoCache(r);
    }
  }, w.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, w.cacheSignal = function() {
    return null;
  }, w.cloneElement = function(r, A, N) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var Y = Ul({}, r.props), L = r.key;
    if (A != null)
      for (k in A.key !== void 0 && (L = "" + A.key), A)
        !Bl.call(A, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && A.ref === void 0 || (Y[k] = A[k]);
    var k = arguments.length - 2;
    if (k === 1) Y.children = N;
    else if (1 < k) {
      for (var nl = Array(k), Vl = 0; Vl < k; Vl++)
        nl[Vl] = arguments[Vl + 2];
      Y.children = nl;
    }
    return et(r.type, L, Y);
  }, w.createContext = function(r) {
    return r = {
      $$typeof: U,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: M,
      _context: r
    }, r;
  }, w.createElement = function(r, A, N) {
    var Y, L = {}, k = null;
    if (A != null)
      for (Y in A.key !== void 0 && (k = "" + A.key), A)
        Bl.call(A, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (L[Y] = A[Y]);
    var nl = arguments.length - 2;
    if (nl === 1) L.children = N;
    else if (1 < nl) {
      for (var Vl = Array(nl), Tl = 0; Tl < nl; Tl++)
        Vl[Tl] = arguments[Tl + 2];
      L.children = Vl;
    }
    if (r && r.defaultProps)
      for (Y in nl = r.defaultProps, nl)
        L[Y] === void 0 && (L[Y] = nl[Y]);
    return et(r, k, L);
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(r) {
    return { $$typeof: j, render: r };
  }, w.isValidElement = K, w.lazy = function(r) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: r },
      _init: v
    };
  }, w.memo = function(r, A) {
    return {
      $$typeof: E,
      type: r,
      compare: A === void 0 ? null : A
    };
  }, w.startTransition = function(r) {
    var A = $.T, N = {};
    $.T = N;
    try {
      var Y = r(), L = $.S;
      L !== null && L(N, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Nl, H);
    } catch (k) {
      H(k);
    } finally {
      A !== null && N.types !== null && (A.types = N.types), $.T = A;
    }
  }, w.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, w.use = function(r) {
    return $.H.use(r);
  }, w.useActionState = function(r, A, N) {
    return $.H.useActionState(r, A, N);
  }, w.useCallback = function(r, A) {
    return $.H.useCallback(r, A);
  }, w.useContext = function(r) {
    return $.H.useContext(r);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(r, A) {
    return $.H.useDeferredValue(r, A);
  }, w.useEffect = function(r, A) {
    return $.H.useEffect(r, A);
  }, w.useEffectEvent = function(r) {
    return $.H.useEffectEvent(r);
  }, w.useId = function() {
    return $.H.useId();
  }, w.useImperativeHandle = function(r, A, N) {
    return $.H.useImperativeHandle(r, A, N);
  }, w.useInsertionEffect = function(r, A) {
    return $.H.useInsertionEffect(r, A);
  }, w.useLayoutEffect = function(r, A) {
    return $.H.useLayoutEffect(r, A);
  }, w.useMemo = function(r, A) {
    return $.H.useMemo(r, A);
  }, w.useOptimistic = function(r, A) {
    return $.H.useOptimistic(r, A);
  }, w.useReducer = function(r, A, N) {
    return $.H.useReducer(r, A, N);
  }, w.useRef = function(r) {
    return $.H.useRef(r);
  }, w.useState = function(r) {
    return $.H.useState(r);
  }, w.useSyncExternalStore = function(r, A, N) {
    return $.H.useSyncExternalStore(
      r,
      A,
      N
    );
  }, w.useTransition = function() {
    return $.H.useTransition();
  }, w.version = "19.2.4", w;
}
var Br;
function xf() {
  return Br || (Br = 1, zf.exports = D1()), zf.exports;
}
var Tf = { exports: {} }, Ql = {};
var qr;
function U1() {
  if (qr) return Ql;
  qr = 1;
  var i = xf();
  function m(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        E += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y() {
  }
  var o = {
    d: {
      f: y,
      r: function() {
        throw Error(m(522));
      },
      D: y,
      C: y,
      L: y,
      m: y,
      X: y,
      S: y,
      M: y
    },
    p: 0,
    findDOMNode: null
  }, T = /* @__PURE__ */ Symbol.for("react.portal");
  function M(R, E, C) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: T,
      key: B == null ? null : "" + B,
      children: R,
      containerInfo: E,
      implementation: C
    };
  }
  var U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(R, E) {
    if (R === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ql.createPortal = function(R, E) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(m(299));
    return M(R, E, null, C);
  }, Ql.flushSync = function(R) {
    var E = U.T, C = o.p;
    try {
      if (U.T = null, o.p = 2, R) return R();
    } finally {
      U.T = E, o.p = C, o.d.f();
    }
  }, Ql.preconnect = function(R, E) {
    typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(R, E));
  }, Ql.prefetchDNS = function(R) {
    typeof R == "string" && o.d.D(R);
  }, Ql.preinit = function(R, E) {
    if (typeof R == "string" && E && typeof E.as == "string") {
      var C = E.as, B = j(C, E.crossOrigin), V = typeof E.integrity == "string" ? E.integrity : void 0, gl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      C === "style" ? o.d.S(
        R,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: B,
          integrity: V,
          fetchPriority: gl
        }
      ) : C === "script" && o.d.X(R, {
        crossOrigin: B,
        integrity: V,
        fetchPriority: gl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Ql.preinitModule = function(R, E) {
    if (typeof R == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var C = j(
            E.as,
            E.crossOrigin
          );
          o.d.M(R, {
            crossOrigin: C,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(R);
  }, Ql.preload = function(R, E) {
    if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var C = E.as, B = j(C, E.crossOrigin);
      o.d.L(R, C, {
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
  }, Ql.preloadModule = function(R, E) {
    if (typeof R == "string")
      if (E) {
        var C = j(E.as, E.crossOrigin);
        o.d.m(R, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: C,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(R);
  }, Ql.requestFormReset = function(R) {
    o.d.r(R);
  }, Ql.unstable_batchedUpdates = function(R, E) {
    return R(E);
  }, Ql.useFormState = function(R, E, C) {
    return U.H.useFormState(R, E, C);
  }, Ql.useFormStatus = function() {
    return U.H.useHostTransitionStatus();
  }, Ql.version = "19.2.4", Ql;
}
var Yr;
function R1() {
  if (Yr) return Tf.exports;
  Yr = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (m) {
        console.error(m);
      }
  }
  return i(), Tf.exports = U1(), Tf.exports;
}
var Gr;
function H1() {
  if (Gr) return Du;
  Gr = 1;
  var i = O1(), m = xf(), y = R1();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function M(l) {
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
  function U(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function R(l) {
    if (M(l) !== l)
      throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = M(l), t === null) throw Error(o(188));
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
          if (n === e) return R(u), l;
          if (n === a) return R(u), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = !1, f = u.child; f; ) {
          if (f === e) {
            c = !0, e = u, a = n;
            break;
          }
          if (f === a) {
            c = !0, a = u, e = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === e) {
              c = !0, e = n, a = u;
              break;
            }
            if (f === a) {
              c = !0, a = n, e = u;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t;
  }
  function C(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = C(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, V = /* @__PURE__ */ Symbol.for("react.element"), gl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Sl = /* @__PURE__ */ Symbol.for("react.portal"), Ul = /* @__PURE__ */ Symbol.for("react.fragment"), Ht = /* @__PURE__ */ Symbol.for("react.strict_mode"), Zl = /* @__PURE__ */ Symbol.for("react.profiler"), Ot = /* @__PURE__ */ Symbol.for("react.consumer"), _l = /* @__PURE__ */ Symbol.for("react.context"), Ll = /* @__PURE__ */ Symbol.for("react.forward_ref"), tt = /* @__PURE__ */ Symbol.for("react.suspense"), Nl = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Bl = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), K = Symbol.iterator;
  function cl(l) {
    return l === null || typeof l != "object" ? null : (l = K && l[K] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ct = /* @__PURE__ */ Symbol.for("react.client.reference");
  function gt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ct ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ul:
        return "Fragment";
      case Zl:
        return "Profiler";
      case Ht:
        return "StrictMode";
      case tt:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Sl:
          return "Portal";
        case _l:
          return l.displayName || "Context";
        case Ot:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case $:
          return t = l.displayName || null, t !== null ? t : gt(l.type) || "Memo";
        case Bl:
          t = l._payload, l = l._init;
          try {
            return gt(l(t));
          } catch {
          }
      }
    return null;
  }
  var ut = Array.isArray, x = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, H = [], q = -1;
  function r(l) {
    return { current: l };
  }
  function A(l) {
    0 > q || (l.current = H[q], H[q] = null, q--);
  }
  function N(l, t) {
    q++, H[q] = l.current, l.current = t;
  }
  var Y = r(null), L = r(null), k = r(null), nl = r(null);
  function Vl(l, t) {
    switch (N(k, t), N(L, l), N(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? P0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = P0(t), l = lr(t, l);
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
    A(Y), N(Y, l);
  }
  function Tl() {
    A(Y), A(L), A(k);
  }
  function Ba(l) {
    l.memoizedState !== null && N(nl, l);
    var t = Y.current, e = lr(t, l.type);
    t !== e && (N(L, l), N(Y, e));
  }
  function Uu(l) {
    L.current === l && (A(Y), A(L)), nl.current === l && (A(nl), Au._currentValue = v);
  }
  var In, Of;
  function Ue(l) {
    if (In === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        In = t && t[1] || "", Of = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + In + l + Of;
  }
  var Pn = !1;
  function lc(l, t) {
    if (!l || Pn) return "";
    Pn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (z) {
                  var S = z;
                }
                Reflect.construct(l, [], D);
              } else {
                try {
                  D.call();
                } catch (z) {
                  S = z;
                }
                l.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                S = z;
              }
              (D = l()) && typeof D.catch == "function" && D.catch(function() {
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
      var n = a.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var s = c.split(`
`), b = f.split(`
`);
        for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < b.length && !b[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === s.length || u === b.length)
          for (a = s.length - 1, u = b.length - 1; 1 <= a && 0 <= u && s[a] !== b[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== b[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || s[a] !== b[u]) {
                  var _ = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", l.displayName)), _;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Pn = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Ue(e) : "";
  }
  function ed(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ue(l.type);
      case 16:
        return Ue("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ue("Suspense Fallback") : Ue("Suspense");
      case 19:
        return Ue("SuspenseList");
      case 0:
      case 15:
        return lc(l.type, !1);
      case 11:
        return lc(l.type.render, !1);
      case 1:
        return lc(l.type, !0);
      case 31:
        return Ue("Activity");
      default:
        return "";
    }
  }
  function Df(l) {
    try {
      var t = "", e = null;
      do
        t += ed(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var tc = Object.prototype.hasOwnProperty, ec = i.unstable_scheduleCallback, ac = i.unstable_cancelCallback, ad = i.unstable_shouldYield, ud = i.unstable_requestPaint, nt = i.unstable_now, nd = i.unstable_getCurrentPriorityLevel, Uf = i.unstable_ImmediatePriority, Rf = i.unstable_UserBlockingPriority, Ru = i.unstable_NormalPriority, cd = i.unstable_LowPriority, Hf = i.unstable_IdlePriority, id = i.log, fd = i.unstable_setDisableYieldValue, qa = null, ct = null;
  function ne(l) {
    if (typeof id == "function" && fd(l), ct && typeof ct.setStrictMode == "function")
      try {
        ct.setStrictMode(qa, l);
      } catch {
      }
  }
  var it = Math.clz32 ? Math.clz32 : rd, od = Math.log, sd = Math.LN2;
  function rd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (od(l) / sd | 0) | 0;
  }
  var Hu = 256, Cu = 262144, Nu = 4194304;
  function Re(l) {
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
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = Re(a) : (c &= f, c !== 0 ? u = Re(c) : e || (e = f & ~l, e !== 0 && (u = Re(e))))) : (f = a & ~n, f !== 0 ? u = Re(f) : c !== 0 ? u = Re(c) : e || (e = a & ~l, e !== 0 && (u = Re(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ya(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function dd(l, t) {
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
  function Cf() {
    var l = Nu;
    return Nu <<= 1, (Nu & 62914560) === 0 && (Nu = 4194304), l;
  }
  function uc(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ga(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function yd(l, t, e, a, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var f = l.entanglements, s = l.expirationTimes, b = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var _ = 31 - it(e), D = 1 << _;
      f[_] = 0, s[_] = -1;
      var S = b[_];
      if (S !== null)
        for (b[_] = null, _ = 0; _ < S.length; _++) {
          var z = S[_];
          z !== null && (z.lane &= -536870913);
        }
      e &= ~D;
    }
    a !== 0 && Nf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function Nf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - it(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Bf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - it(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function qf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : nc(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function nc(l) {
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
  function cc(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yf() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Er(l.type));
  }
  function Gf(l, t) {
    var e = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), ql = "__reactFiber$" + ce, Jl = "__reactProps$" + ce, ke = "__reactContainer$" + ce, ic = "__reactEvents$" + ce, md = "__reactListeners$" + ce, hd = "__reactHandles$" + ce, Xf = "__reactResources$" + ce, Xa = "__reactMarker$" + ce;
  function fc(l) {
    delete l[ql], delete l[Jl], delete l[ic], delete l[md], delete l[hd];
  }
  function Fe(l) {
    var t = l[ql];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[ke] || e[ql]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ir(l); l !== null; ) {
            if (e = l[ql]) return e;
            l = ir(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function Ie(l) {
    if (l = l[ql] || l[ke]) {
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
  function Pe(l) {
    var t = l[Xf];
    return t || (t = l[Xf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[Xa] = !0;
  }
  var jf = /* @__PURE__ */ new Set(), Qf = {};
  function He(l, t) {
    la(l, t), la(l + "Capture", t);
  }
  function la(l, t) {
    for (Qf[l] = t, l = 0; l < t.length; l++)
      jf.add(t[l]);
  }
  var vd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zf = {}, Lf = {};
  function gd(l) {
    return tc.call(Lf, l) ? !0 : tc.call(Zf, l) ? !1 : vd.test(l) ? Lf[l] = !0 : (Zf[l] = !0, !1);
  }
  function qu(l, t, e) {
    if (gd(t))
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
  function Vf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function bd(l, t, e) {
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
        set: function(c) {
          e = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(c) {
          e = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function oc(l) {
    if (!l._valueTracker) {
      var t = Vf(l) ? "checked" : "value";
      l._valueTracker = bd(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function wf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Vf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Gu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Sd = /[\n"\\]/g;
  function St(l) {
    return l.replace(
      Sd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function sc(l, t, e, a, u, n, c, f) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + bt(t)) : l.value !== "" + bt(t) && (l.value = "" + bt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? rc(l, c, bt(t)) : e != null ? rc(l, c, bt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + bt(f) : l.removeAttribute("name");
  }
  function Kf(l, t, e, a, u, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        oc(l);
        return;
      }
      e = e != null ? "" + bt(e) : "", t = t != null ? "" + bt(t) : e, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), oc(l);
  }
  function rc(l, t, e) {
    t === "number" && Gu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
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
  function Jf(l, t, e) {
    if (t != null && (t = "" + bt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + bt(e) : "";
  }
  function Wf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = bt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), oc(l);
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
  var pd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $f(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || pd.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function kf(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && $f(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && $f(l, n, t[n]);
  }
  function dc(l) {
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
  var zd = /* @__PURE__ */ new Map([
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
  ]), Td = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xu(l) {
    return Td.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Qt() {
  }
  var yc = null;
  function mc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var aa = null, ua = null;
  function Ff(l) {
    var t = Ie(l);
    if (t && (l = t.stateNode)) {
      var e = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (sc(
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
              'input[name="' + St(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Jl] || null;
                if (!u) throw Error(o(90));
                sc(
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
              a = e[t], a.form === l.form && wf(a);
          }
          break l;
        case "textarea":
          Jf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ta(l, !!e.multiple, t, !1);
      }
    }
  }
  var hc = !1;
  function If(l, t, e) {
    if (hc) return l(t, e);
    hc = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (hc = !1, (aa !== null || ua !== null) && (Mn(), aa && (t = aa, l = ua, ua = aa = null, Ff(t), l)))
        for (t = 0; t < l.length; t++) Ff(l[t]);
    }
  }
  function Qa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Jl] || null;
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
  var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vc = !1;
  if (Zt)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", {
        get: function() {
          vc = !0;
        }
      }), window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
    } catch {
      vc = !1;
    }
  var ie = null, gc = null, ju = null;
  function Pf() {
    if (ju) return ju;
    var l, t = gc, e = t.length, a, u = "value" in ie ? ie.value : ie.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === u[n - a]; a++) ;
    return ju = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Qu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Zu() {
    return !0;
  }
  function lo() {
    return !1;
  }
  function Wl(l) {
    function t(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (e = l[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Zu : lo, this.isPropagationStopped = lo, this;
    }
    return B(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Zu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Zu);
      },
      persist: function() {
      },
      isPersistent: Zu
    }), t;
  }
  var Ce = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Lu = Wl(Ce), La = B({}, Ce, { view: 0, detail: 0 }), Ed = Wl(La), bc, Sc, Va, Vu = B({}, La, {
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
    getModifierState: zc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Va && (Va && l.type === "mousemove" ? (bc = l.screenX - Va.screenX, Sc = l.screenY - Va.screenY) : Sc = bc = 0, Va = l), bc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Sc;
    }
  }), to = Wl(Vu), Ad = B({}, Vu, { dataTransfer: 0 }), _d = Wl(Ad), xd = B({}, La, { relatedTarget: 0 }), pc = Wl(xd), Md = B({}, Ce, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Od = Wl(Md), Dd = B({}, Ce, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Ud = Wl(Dd), Rd = B({}, Ce, { data: 0 }), eo = Wl(Rd), Hd = {
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
  }, Cd = {
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
  }, Nd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Nd[l]) ? !!t[l] : !1;
  }
  function zc() {
    return Bd;
  }
  var qd = B({}, La, {
    key: function(l) {
      if (l.key) {
        var t = Hd[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Qu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cd[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zc,
    charCode: function(l) {
      return l.type === "keypress" ? Qu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Qu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Yd = Wl(qd), Gd = B({}, Vu, {
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
  }), ao = Wl(Gd), Xd = B({}, La, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc
  }), jd = Wl(Xd), Qd = B({}, Ce, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zd = Wl(Qd), Ld = B({}, Vu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Vd = Wl(Ld), wd = B({}, Ce, {
    newState: 0,
    oldState: 0
  }), Kd = Wl(wd), Jd = [9, 13, 27, 32], Tc = Zt && "CompositionEvent" in window, wa = null;
  Zt && "documentMode" in document && (wa = document.documentMode);
  var Wd = Zt && "TextEvent" in window && !wa, uo = Zt && (!Tc || wa && 8 < wa && 11 >= wa), no = " ", co = !1;
  function io(l, t) {
    switch (l) {
      case "keyup":
        return Jd.indexOf(t.keyCode) !== -1;
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
  function $d(l, t) {
    switch (l) {
      case "compositionend":
        return fo(t);
      case "keypress":
        return t.which !== 32 ? null : (co = !0, no);
      case "textInput":
        return l = t.data, l === no && co ? null : l;
      default:
        return null;
    }
  }
  function kd(l, t) {
    if (na)
      return l === "compositionend" || !Tc && io(l, t) ? (l = Pf(), ju = gc = ie = null, na = !1, l) : null;
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
        return uo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fd = {
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
  function oo(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Fd[l.type] : t === "textarea";
  }
  function so(l, t, e, a) {
    aa ? ua ? ua.push(a) : ua = [a] : aa = a, t = Nn(t, "onChange"), 0 < t.length && (e = new Lu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Ka = null, Ja = null;
  function Id(l) {
    J0(l, 0);
  }
  function wu(l) {
    var t = ja(l);
    if (wf(t)) return l;
  }
  function ro(l, t) {
    if (l === "change") return t;
  }
  var yo = !1;
  if (Zt) {
    var Ec;
    if (Zt) {
      var Ac = "oninput" in document;
      if (!Ac) {
        var mo = document.createElement("div");
        mo.setAttribute("oninput", "return;"), Ac = typeof mo.oninput == "function";
      }
      Ec = Ac;
    } else Ec = !1;
    yo = Ec && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    Ka && (Ka.detachEvent("onpropertychange", vo), Ja = Ka = null);
  }
  function vo(l) {
    if (l.propertyName === "value" && wu(Ja)) {
      var t = [];
      so(
        t,
        Ja,
        l,
        mc(l)
      ), If(Id, t);
    }
  }
  function Pd(l, t, e) {
    l === "focusin" ? (ho(), Ka = t, Ja = e, Ka.attachEvent("onpropertychange", vo)) : l === "focusout" && ho();
  }
  function ly(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return wu(Ja);
  }
  function ty(l, t) {
    if (l === "click") return wu(t);
  }
  function ey(l, t) {
    if (l === "input" || l === "change")
      return wu(t);
  }
  function ay(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : ay;
  function Wa(l, t) {
    if (ft(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!tc.call(t, u) || !ft(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function go(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function bo(l, t) {
    var e = go(l);
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
      e = go(e);
    }
  }
  function So(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? So(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function po(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Gu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Gu(l.document);
    }
    return t;
  }
  function _c(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var uy = Zt && "documentMode" in document && 11 >= document.documentMode, ca = null, xc = null, $a = null, Mc = !1;
  function zo(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mc || ca == null || ca !== Gu(a) || (a = ca, "selectionStart" in a && _c(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), $a && Wa($a, a) || ($a = a, a = Nn(xc, "onSelect"), 0 < a.length && (t = new Lu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = ca)));
  }
  function Ne(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ia = {
    animationend: Ne("Animation", "AnimationEnd"),
    animationiteration: Ne("Animation", "AnimationIteration"),
    animationstart: Ne("Animation", "AnimationStart"),
    transitionrun: Ne("Transition", "TransitionRun"),
    transitionstart: Ne("Transition", "TransitionStart"),
    transitioncancel: Ne("Transition", "TransitionCancel"),
    transitionend: Ne("Transition", "TransitionEnd")
  }, Oc = {}, To = {};
  Zt && (To = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
  function Be(l) {
    if (Oc[l]) return Oc[l];
    if (!ia[l]) return l;
    var t = ia[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in To)
        return Oc[l] = t[e];
    return l;
  }
  var Eo = Be("animationend"), Ao = Be("animationiteration"), _o = Be("animationstart"), ny = Be("transitionrun"), cy = Be("transitionstart"), iy = Be("transitioncancel"), xo = Be("transitionend"), Mo = /* @__PURE__ */ new Map(), Dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dc.push("scrollEnd");
  function Dt(l, t) {
    Mo.set(l, t), He(t, [l]);
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
  }, pt = [], fa = 0, Uc = 0;
  function Ju() {
    for (var l = fa, t = Uc = fa = 0; t < l; ) {
      var e = pt[t];
      pt[t++] = null;
      var a = pt[t];
      pt[t++] = null;
      var u = pt[t];
      pt[t++] = null;
      var n = pt[t];
      if (pt[t++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && Oo(e, u, n);
    }
  }
  function Wu(l, t, e, a) {
    pt[fa++] = l, pt[fa++] = t, pt[fa++] = e, pt[fa++] = a, Uc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Rc(l, t, e, a) {
    return Wu(l, t, e, a), $u(l);
  }
  function qe(l, t) {
    return Wu(l, null, null, t), $u(l);
  }
  function Oo(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - it(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function $u(l) {
    if (50 < gu)
      throw gu = 0, ji = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var oa = {};
  function fy(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(l, t, e, a) {
    return new fy(l, t, e, a);
  }
  function Hc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Lt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ot(
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
  function ku(l, t, e, a, u, n) {
    var c = 0;
    if (a = l, typeof l == "function") Hc(l) && (c = 1);
    else if (typeof l == "string")
      c = y1(
        l,
        e,
        Y.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case et:
          return l = ot(31, e, t, u), l.elementType = et, l.lanes = n, l;
        case Ul:
          return Ye(e.children, u, n, t);
        case Ht:
          c = 8, u |= 24;
          break;
        case Zl:
          return l = ot(12, e, t, u | 2), l.elementType = Zl, l.lanes = n, l;
        case tt:
          return l = ot(13, e, t, u), l.elementType = tt, l.lanes = n, l;
        case Nl:
          return l = ot(19, e, t, u), l.elementType = Nl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case _l:
                c = 10;
                break l;
              case Ot:
                c = 9;
                break l;
              case Ll:
                c = 11;
                break l;
              case $:
                c = 14;
                break l;
              case Bl:
                c = 16, a = null;
                break l;
            }
          c = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ot(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Ye(l, t, e, a) {
    return l = ot(7, l, a, t), l.lanes = e, l;
  }
  function Cc(l, t, e) {
    return l = ot(6, l, null, t), l.lanes = e, l;
  }
  function Uo(l) {
    var t = ot(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Nc(l, t, e) {
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
  var Ro = /* @__PURE__ */ new WeakMap();
  function zt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ro.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Df(t)
      }, Ro.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Df(t)
    };
  }
  var sa = [], ra = 0, Fu = null, ka = 0, Tt = [], Et = 0, fe = null, Nt = 1, Bt = "";
  function Vt(l, t) {
    sa[ra++] = ka, sa[ra++] = Fu, Fu = l, ka = t;
  }
  function Ho(l, t, e) {
    Tt[Et++] = Nt, Tt[Et++] = Bt, Tt[Et++] = fe, fe = l;
    var a = Nt;
    l = Bt;
    var u = 32 - it(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - it(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Nt = 1 << 32 - it(t) + u | e << u | a, Bt = n + l;
    } else
      Nt = 1 << n | e << u | a, Bt = l;
  }
  function Bc(l) {
    l.return !== null && (Vt(l, 1), Ho(l, 1, 0));
  }
  function qc(l) {
    for (; l === Fu; )
      Fu = sa[--ra], sa[ra] = null, ka = sa[--ra], sa[ra] = null;
    for (; l === fe; )
      fe = Tt[--Et], Tt[Et] = null, Bt = Tt[--Et], Tt[Et] = null, Nt = Tt[--Et], Tt[Et] = null;
  }
  function Co(l, t) {
    Tt[Et++] = Nt, Tt[Et++] = Bt, Tt[Et++] = fe, Nt = t.id, Bt = t.overflow, fe = l;
  }
  var Yl = null, hl = null, tl = !1, oe = null, At = !1, Yc = Error(o(519));
  function se(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fa(zt(t, l)), Yc;
  }
  function No(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[ql] = l, t[Jl] = a, e) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Su.length; e++)
          I(Su[e], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t), Kf(
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
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), Wf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || F0(t.textContent, e) ? (a.popover != null && (I("beforetoggle", t), I("toggle", t)), a.onScroll != null && I("scroll", t), a.onScrollEnd != null && I("scrollend", t), a.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || se(l, !0);
  }
  function Bo(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function da(l) {
    if (l !== Yl) return !1;
    if (!tl) return Bo(l), tl = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || tf(l.type, l.memoizedProps)), e = !e), e && hl && se(l), Bo(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = cr(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = cr(l);
    } else
      t === 27 ? (t = hl, Ae(l.type) ? (l = cf, cf = null, hl = l) : hl = t) : hl = Yl ? xt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ge() {
    hl = Yl = null, tl = !1;
  }
  function Gc() {
    var l = oe;
    return l !== null && (Il === null ? Il = l : Il.push.apply(
      Il,
      l
    ), oe = null), l;
  }
  function Fa(l) {
    oe === null ? oe = [l] : oe.push(l);
  }
  var Xc = r(null), Xe = null, wt = null;
  function re(l, t, e) {
    N(Xc, t._currentValue), t._currentValue = e;
  }
  function Kt(l) {
    l._currentValue = Xc.current, A(Xc);
  }
  function jc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Qc(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), jc(
                n.return,
                e,
                l
              ), a || (c = null);
              break l;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(o(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), jc(c, e, l), c = null;
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
  function ya(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var f = u.type;
          ft(u.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (u === nl.current) {
        if (c = u.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Au) : l = [Au]);
      }
      u = u.return;
    }
    l !== null && Qc(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function Iu(l) {
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
    Xe = l, wt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return qo(Xe, l);
  }
  function Pu(l, t) {
    return Xe === null && je(l), qo(l, t);
  }
  function qo(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, wt === null) {
      if (l === null) throw Error(o(308));
      wt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else wt = wt.next = t;
    return e;
  }
  var oy = typeof AbortController < "u" ? AbortController : function() {
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
  }, sy = i.unstable_scheduleCallback, ry = i.unstable_NormalPriority, xl = {
    $$typeof: _l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Zc() {
    return {
      controller: new oy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia(l) {
    l.refCount--, l.refCount === 0 && sy(ry, function() {
      l.controller.abort();
    });
  }
  var Pa = null, Lc = 0, ma = 0, ha = null;
  function dy(l, t) {
    if (Pa === null) {
      var e = Pa = [];
      Lc = 0, ma = Ki(), ha = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Lc++, t.then(Yo, Yo), t;
  }
  function Yo() {
    if (--Lc === 0 && Pa !== null) {
      ha !== null && (ha.status = "fulfilled");
      var l = Pa;
      Pa = null, ma = 0, ha = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function yy(l, t) {
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
  var Go = x.S;
  x.S = function(l, t) {
    z0 = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && dy(l, t), Go !== null && Go(l, t);
  };
  var Qe = r(null);
  function Vc() {
    var l = Qe.current;
    return l !== null ? l : dl.pooledCache;
  }
  function ln(l, t) {
    t === null ? N(Qe, Qe.current) : N(Qe, t.pool);
  }
  function Xo() {
    var l = Vc();
    return l === null ? null : { parent: xl._currentValue, pool: l };
  }
  var va = Error(o(460)), wc = Error(o(474)), tn = Error(o(542)), en = { then: function() {
  } };
  function jo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Qo(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Qt, Qt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Lo(l), l;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, Lo(l), l;
        }
        throw Le = t, va;
    }
  }
  function Ze(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Le = e, va) : e;
    }
  }
  var Le = null;
  function Zo() {
    if (Le === null) throw Error(o(459));
    var l = Le;
    return Le = null, l;
  }
  function Lo(l) {
    if (l === va || l === tn)
      throw Error(o(483));
  }
  var ga = null, lu = 0;
  function an(l) {
    var t = lu;
    return lu += 1, ga === null && (ga = []), Qo(ga, l, t);
  }
  function tu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === V ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Vo(l) {
    function t(h, d) {
      if (l) {
        var g = h.deletions;
        g === null ? (h.deletions = [d], h.flags |= 16) : g.push(d);
      }
    }
    function e(h, d) {
      if (!l) return null;
      for (; d !== null; )
        t(h, d), d = d.sibling;
      return null;
    }
    function a(h) {
      for (var d = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? d.set(h.key, h) : d.set(h.index, h), h = h.sibling;
      return d;
    }
    function u(h, d) {
      return h = Lt(h, d), h.index = 0, h.sibling = null, h;
    }
    function n(h, d, g) {
      return h.index = g, l ? (g = h.alternate, g !== null ? (g = g.index, g < d ? (h.flags |= 67108866, d) : g) : (h.flags |= 67108866, d)) : (h.flags |= 1048576, d);
    }
    function c(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function f(h, d, g, O) {
      return d === null || d.tag !== 6 ? (d = Cc(g, h.mode, O), d.return = h, d) : (d = u(d, g), d.return = h, d);
    }
    function s(h, d, g, O) {
      var Q = g.type;
      return Q === Ul ? _(
        h,
        d,
        g.props.children,
        O,
        g.key
      ) : d !== null && (d.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Bl && Ze(Q) === d.type) ? (d = u(d, g.props), tu(d, g), d.return = h, d) : (d = ku(
        g.type,
        g.key,
        g.props,
        null,
        h.mode,
        O
      ), tu(d, g), d.return = h, d);
    }
    function b(h, d, g, O) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Nc(g, h.mode, O), d.return = h, d) : (d = u(d, g.children || []), d.return = h, d);
    }
    function _(h, d, g, O, Q) {
      return d === null || d.tag !== 7 ? (d = Ye(
        g,
        h.mode,
        O,
        Q
      ), d.return = h, d) : (d = u(d, g), d.return = h, d);
    }
    function D(h, d, g) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Cc(
          "" + d,
          h.mode,
          g
        ), d.return = h, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case gl:
            return g = ku(
              d.type,
              d.key,
              d.props,
              null,
              h.mode,
              g
            ), tu(g, d), g.return = h, g;
          case Sl:
            return d = Nc(
              d,
              h.mode,
              g
            ), d.return = h, d;
          case Bl:
            return d = Ze(d), D(h, d, g);
        }
        if (ut(d) || cl(d))
          return d = Ye(
            d,
            h.mode,
            g,
            null
          ), d.return = h, d;
        if (typeof d.then == "function")
          return D(h, an(d), g);
        if (d.$$typeof === _l)
          return D(
            h,
            Pu(h, d),
            g
          );
        un(h, d);
      }
      return null;
    }
    function S(h, d, g, O) {
      var Q = d !== null ? d.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return Q !== null ? null : f(h, d, "" + g, O);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case gl:
            return g.key === Q ? s(h, d, g, O) : null;
          case Sl:
            return g.key === Q ? b(h, d, g, O) : null;
          case Bl:
            return g = Ze(g), S(h, d, g, O);
        }
        if (ut(g) || cl(g))
          return Q !== null ? null : _(h, d, g, O, null);
        if (typeof g.then == "function")
          return S(
            h,
            d,
            an(g),
            O
          );
        if (g.$$typeof === _l)
          return S(
            h,
            d,
            Pu(h, g),
            O
          );
        un(h, g);
      }
      return null;
    }
    function z(h, d, g, O, Q) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return h = h.get(g) || null, f(d, h, "" + O, Q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case gl:
            return h = h.get(
              O.key === null ? g : O.key
            ) || null, s(d, h, O, Q);
          case Sl:
            return h = h.get(
              O.key === null ? g : O.key
            ) || null, b(d, h, O, Q);
          case Bl:
            return O = Ze(O), z(
              h,
              d,
              g,
              O,
              Q
            );
        }
        if (ut(O) || cl(O))
          return h = h.get(g) || null, _(d, h, O, Q, null);
        if (typeof O.then == "function")
          return z(
            h,
            d,
            g,
            an(O),
            Q
          );
        if (O.$$typeof === _l)
          return z(
            h,
            d,
            g,
            Pu(d, O),
            Q
          );
        un(d, O);
      }
      return null;
    }
    function G(h, d, g, O) {
      for (var Q = null, el = null, X = d, W = d = 0, ll = null; X !== null && W < g.length; W++) {
        X.index > W ? (ll = X, X = null) : ll = X.sibling;
        var al = S(
          h,
          X,
          g[W],
          O
        );
        if (al === null) {
          X === null && (X = ll);
          break;
        }
        l && X && al.alternate === null && t(h, X), d = n(al, d, W), el === null ? Q = al : el.sibling = al, el = al, X = ll;
      }
      if (W === g.length)
        return e(h, X), tl && Vt(h, W), Q;
      if (X === null) {
        for (; W < g.length; W++)
          X = D(h, g[W], O), X !== null && (d = n(
            X,
            d,
            W
          ), el === null ? Q = X : el.sibling = X, el = X);
        return tl && Vt(h, W), Q;
      }
      for (X = a(X); W < g.length; W++)
        ll = z(
          X,
          h,
          W,
          g[W],
          O
        ), ll !== null && (l && ll.alternate !== null && X.delete(
          ll.key === null ? W : ll.key
        ), d = n(
          ll,
          d,
          W
        ), el === null ? Q = ll : el.sibling = ll, el = ll);
      return l && X.forEach(function(De) {
        return t(h, De);
      }), tl && Vt(h, W), Q;
    }
    function Z(h, d, g, O) {
      if (g == null) throw Error(o(151));
      for (var Q = null, el = null, X = d, W = d = 0, ll = null, al = g.next(); X !== null && !al.done; W++, al = g.next()) {
        X.index > W ? (ll = X, X = null) : ll = X.sibling;
        var De = S(h, X, al.value, O);
        if (De === null) {
          X === null && (X = ll);
          break;
        }
        l && X && De.alternate === null && t(h, X), d = n(De, d, W), el === null ? Q = De : el.sibling = De, el = De, X = ll;
      }
      if (al.done)
        return e(h, X), tl && Vt(h, W), Q;
      if (X === null) {
        for (; !al.done; W++, al = g.next())
          al = D(h, al.value, O), al !== null && (d = n(al, d, W), el === null ? Q = al : el.sibling = al, el = al);
        return tl && Vt(h, W), Q;
      }
      for (X = a(X); !al.done; W++, al = g.next())
        al = z(X, h, W, al.value, O), al !== null && (l && al.alternate !== null && X.delete(al.key === null ? W : al.key), d = n(al, d, W), el === null ? Q = al : el.sibling = al, el = al);
      return l && X.forEach(function(A1) {
        return t(h, A1);
      }), tl && Vt(h, W), Q;
    }
    function rl(h, d, g, O) {
      if (typeof g == "object" && g !== null && g.type === Ul && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case gl:
            l: {
              for (var Q = g.key; d !== null; ) {
                if (d.key === Q) {
                  if (Q = g.type, Q === Ul) {
                    if (d.tag === 7) {
                      e(
                        h,
                        d.sibling
                      ), O = u(
                        d,
                        g.props.children
                      ), O.return = h, h = O;
                      break l;
                    }
                  } else if (d.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Bl && Ze(Q) === d.type) {
                    e(
                      h,
                      d.sibling
                    ), O = u(d, g.props), tu(O, g), O.return = h, h = O;
                    break l;
                  }
                  e(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              g.type === Ul ? (O = Ye(
                g.props.children,
                h.mode,
                O,
                g.key
              ), O.return = h, h = O) : (O = ku(
                g.type,
                g.key,
                g.props,
                null,
                h.mode,
                O
              ), tu(O, g), O.return = h, h = O);
            }
            return c(h);
          case Sl:
            l: {
              for (Q = g.key; d !== null; ) {
                if (d.key === Q)
                  if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                    e(
                      h,
                      d.sibling
                    ), O = u(d, g.children || []), O.return = h, h = O;
                    break l;
                  } else {
                    e(h, d);
                    break;
                  }
                else t(h, d);
                d = d.sibling;
              }
              O = Nc(g, h.mode, O), O.return = h, h = O;
            }
            return c(h);
          case Bl:
            return g = Ze(g), rl(
              h,
              d,
              g,
              O
            );
        }
        if (ut(g))
          return G(
            h,
            d,
            g,
            O
          );
        if (cl(g)) {
          if (Q = cl(g), typeof Q != "function") throw Error(o(150));
          return g = Q.call(g), Z(
            h,
            d,
            g,
            O
          );
        }
        if (typeof g.then == "function")
          return rl(
            h,
            d,
            an(g),
            O
          );
        if (g.$$typeof === _l)
          return rl(
            h,
            d,
            Pu(h, g),
            O
          );
        un(h, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, d !== null && d.tag === 6 ? (e(h, d.sibling), O = u(d, g), O.return = h, h = O) : (e(h, d), O = Cc(g, h.mode, O), O.return = h, h = O), c(h)) : e(h, d);
    }
    return function(h, d, g, O) {
      try {
        lu = 0;
        var Q = rl(
          h,
          d,
          g,
          O
        );
        return ga = null, Q;
      } catch (X) {
        if (X === va || X === tn) throw X;
        var el = ot(29, X, null, h.mode);
        return el.lanes = O, el.return = h, el;
      }
    };
  }
  var Ve = Vo(!0), wo = Vo(!1), de = !1;
  function Kc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Jc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ye(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function me(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ul & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = $u(l), Oo(l, null, e), t;
    }
    return Wu(l, a, t, e), $u(l);
  }
  function eu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Bf(l, e);
    }
  }
  function Wc(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, e = e.next;
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
  var $c = !1;
  function au() {
    if ($c) {
      var l = ha;
      if (l !== null) throw l;
    }
  }
  function uu(l, t, e, a) {
    $c = !1;
    var u = l.updateQueue;
    de = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var s = f, b = s.next;
      s.next = null, c === null ? n = b : c.next = b, c = s;
      var _ = l.alternate;
      _ !== null && (_ = _.updateQueue, f = _.lastBaseUpdate, f !== c && (f === null ? _.firstBaseUpdate = b : f.next = b, _.lastBaseUpdate = s));
    }
    if (n !== null) {
      var D = u.baseState;
      c = 0, _ = b = s = null, f = n;
      do {
        var S = f.lane & -536870913, z = S !== f.lane;
        if (z ? (P & S) === S : (a & S) === S) {
          S !== 0 && S === ma && ($c = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var G = l, Z = f;
            S = t;
            var rl = e;
            switch (Z.tag) {
              case 1:
                if (G = Z.payload, typeof G == "function") {
                  D = G.call(rl, D, S);
                  break l;
                }
                D = G;
                break l;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = Z.payload, S = typeof G == "function" ? G.call(rl, D, S) : G, S == null) break l;
                D = B({}, D, S);
                break l;
              case 2:
                de = !0;
            }
          }
          S = f.callback, S !== null && (l.flags |= 64, z && (l.flags |= 8192), z = u.callbacks, z === null ? u.callbacks = [S] : z.push(S));
        } else
          z = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, _ === null ? (b = _ = z, s = D) : _ = _.next = z, c |= S;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null)
            break;
          z = f, f = z.next, z.next = null, u.lastBaseUpdate = z, u.shared.pending = null;
        }
      } while (!0);
      _ === null && (s = D), u.baseState = s, u.firstBaseUpdate = b, u.lastBaseUpdate = _, n === null && (u.shared.lanes = 0), Se |= c, l.lanes = c, l.memoizedState = D;
    }
  }
  function Ko(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function Jo(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Ko(e[l], t);
  }
  var ba = r(null), nn = r(0);
  function Wo(l, t) {
    l = te, N(nn, l), N(ba, t), te = l | t.baseLanes;
  }
  function kc() {
    N(nn, te), N(ba, ba.current);
  }
  function Fc() {
    te = nn.current, A(ba), A(nn);
  }
  var st = r(null), _t = null;
  function he(l) {
    var t = l.alternate;
    N(El, El.current & 1), N(st, l), _t === null && (t === null || ba.current !== null || t.memoizedState !== null) && (_t = l);
  }
  function Ic(l) {
    N(El, El.current), N(st, l), _t === null && (_t = l);
  }
  function $o(l) {
    l.tag === 22 ? (N(El, El.current), N(st, l), _t === null && (_t = l)) : ve();
  }
  function ve() {
    N(El, El.current), N(st, st.current);
  }
  function rt(l) {
    A(st), _t === l && (_t = null), A(El);
  }
  var El = r(0);
  function cn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || uf(e) || nf(e)))
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
  var Jt = 0, J = null, ol = null, Ml = null, fn = !1, Sa = !1, we = !1, on = 0, nu = 0, pa = null, my = 0;
  function pl() {
    throw Error(o(321));
  }
  function Pc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ft(l[e], t[e])) return !1;
    return !0;
  }
  function li(l, t, e, a, u, n) {
    return Jt = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = l === null || l.memoizedState === null ? Hs : hi, we = !1, n = e(a, u), we = !1, Sa && (n = Fo(
      t,
      e,
      a,
      u
    )), ko(l), n;
  }
  function ko(l) {
    x.H = fu;
    var t = ol !== null && ol.next !== null;
    if (Jt = 0, Ml = ol = J = null, fn = !1, nu = 0, pa = null, t) throw Error(o(300));
    l === null || Ol || (l = l.dependencies, l !== null && Iu(l) && (Ol = !0));
  }
  function Fo(l, t, e, a) {
    J = l;
    var u = 0;
    do {
      if (Sa && (pa = null), nu = 0, Sa = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Ml = ol = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      x.H = Cs, n = t(e, a);
    } while (Sa);
    return n;
  }
  function hy() {
    var l = x.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? cu(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function ti() {
    var l = on !== 0;
    return on = 0, l;
  }
  function ei(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function ai(l) {
    if (fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      fn = !1;
    }
    Jt = 0, Ml = ol = J = null, Sa = !1, nu = on = 0, pa = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? J.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Al() {
    if (ol === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var t = Ml === null ? J.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, ol = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(o(467)) : Error(o(310));
      ol = l, l = {
        memoizedState: ol.memoizedState,
        baseState: ol.baseState,
        baseQueue: ol.baseQueue,
        queue: ol.queue,
        next: null
      }, Ml === null ? J.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function sn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cu(l) {
    var t = nu;
    return nu += 1, pa === null && (pa = []), l = Qo(pa, l, t), t = J, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? Hs : hi), l;
  }
  function rn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return cu(l);
      if (l.$$typeof === _l) return Gl(l);
    }
    throw Error(o(438, String(l)));
  }
  function ui(l) {
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
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = sn(), J.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = at;
    return t.index++, e;
  }
  function Wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function dn(l) {
    var t = Al();
    return ni(t, ol, l);
  }
  function ni(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var f = c = null, s = null, b = t, _ = !1;
      do {
        var D = b.lane & -536870913;
        if (D !== b.lane ? (P & D) === D : (Jt & D) === D) {
          var S = b.revertLane;
          if (S === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), D === ma && (_ = !0);
          else if ((Jt & S) === S) {
            b = b.next, S === ma && (_ = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, s === null ? (f = s = D, c = n) : s = s.next = D, J.lanes |= S, Se |= S;
          D = b.action, we && e(n, D), n = b.hasEagerState ? b.eagerState : e(n, D);
        } else
          S = {
            lane: D,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, s === null ? (f = s = S, c = n) : s = s.next = S, J.lanes |= D, Se |= D;
        b = b.next;
      } while (b !== null && b !== t);
      if (s === null ? c = n : s.next = f, !ft(n, l.memoizedState) && (Ol = !0, _ && (e = ha, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = c, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ci(l) {
    var t = Al(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      ft(n, t.memoizedState) || (Ol = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Io(l, t, e) {
    var a = J, u = Al(), n = tl;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var c = !ft(
      (ol || u).memoizedState,
      e
    );
    if (c && (u.memoizedState = e, Ol = !0), u = u.queue, oi(ts.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || c || Ml !== null && Ml.memoizedState.tag & 1) {
      if (a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        ls.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), dl === null) throw Error(o(349));
      n || (Jt & 127) !== 0 || Po(a, t, e);
    }
    return e;
  }
  function Po(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = J.updateQueue, t === null ? (t = sn(), J.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function ls(l, t, e, a) {
    t.value = e, t.getSnapshot = a, es(t) && as(l);
  }
  function ts(l, t, e) {
    return e(function() {
      es(t) && as(l);
    });
  }
  function es(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ft(l, e);
    } catch {
      return !0;
    }
  }
  function as(l) {
    var t = qe(l, 2);
    t !== null && Pl(t, l, 2);
  }
  function ii(l) {
    var t = wl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), we) {
        ne(!0);
        try {
          e();
        } finally {
          ne(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wt,
      lastRenderedState: l
    }, t;
  }
  function us(l, t, e, a) {
    return l.baseState = e, ni(
      l,
      ol,
      typeof a == "function" ? a : Wt
    );
  }
  function vy(l, t, e, a, u) {
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
        then: function(c) {
          n.listeners.push(c);
        }
      };
      x.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, ns(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function ns(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = x.T, c = {};
      x.T = c;
      try {
        var f = e(u, a), s = x.S;
        s !== null && s(c, f), cs(l, t, f);
      } catch (b) {
        fi(l, t, b);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), x.T = n;
      }
    } else
      try {
        n = e(u, a), cs(l, t, n);
      } catch (b) {
        fi(l, t, b);
      }
  }
  function cs(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        is(l, t, a);
      },
      function(a) {
        return fi(l, t, a);
      }
    ) : is(l, t, e);
  }
  function is(l, t, e) {
    t.status = "fulfilled", t.value = e, fs(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ns(l, e)));
  }
  function fi(l, t, e) {
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
  function os(l, t) {
    return t;
  }
  function ss(l, t) {
    if (tl) {
      var e = dl.formState;
      if (e !== null) {
        l: {
          var a = J;
          if (tl) {
            if (hl) {
              t: {
                for (var u = hl, n = At; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = xt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                hl = xt(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            se(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = wl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: os,
      lastRenderedState: t
    }, e.queue = a, e = Ds.bind(
      null,
      J,
      a
    ), a.dispatch = e, a = ii(!1), n = mi.bind(
      null,
      J,
      !1,
      a.queue
    ), a = wl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = vy.bind(
      null,
      J,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function rs(l) {
    var t = Al();
    return ds(t, ol, l);
  }
  function ds(l, t, e) {
    if (t = ni(
      l,
      t,
      os
    )[0], l = dn(Wt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = cu(t);
      } catch (c) {
        throw c === va ? tn : c;
      }
    else a = t;
    t = Al();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (J.flags |= 2048, za(
      9,
      { destroy: void 0 },
      gy.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function gy(l, t) {
    l.action = t;
  }
  function ys(l) {
    var t = Al(), e = ol;
    if (e !== null)
      return ds(t, e, l);
    Al(), t = t.memoizedState, e = Al();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function za(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = J.updateQueue, t === null && (t = sn(), J.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ms() {
    return Al().memoizedState;
  }
  function yn(l, t, e, a) {
    var u = wl();
    J.flags |= l, u.memoizedState = za(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function mn(l, t, e, a) {
    var u = Al();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ol !== null && a !== null && Pc(a, ol.memoizedState.deps) ? u.memoizedState = za(t, n, e, a) : (J.flags |= l, u.memoizedState = za(
      1 | t,
      n,
      e,
      a
    ));
  }
  function hs(l, t) {
    yn(8390656, 8, l, t);
  }
  function oi(l, t) {
    mn(2048, 8, l, t);
  }
  function by(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null)
      t = sn(), J.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function vs(l) {
    var t = Al().memoizedState;
    return by({ ref: t, nextImpl: l }), function() {
      if ((ul & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function gs(l, t) {
    return mn(4, 2, l, t);
  }
  function bs(l, t) {
    return mn(4, 4, l, t);
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
  function ps(l, t, e) {
    e = e != null ? e.concat([l]) : null, mn(4, 4, Ss.bind(null, t, l), e);
  }
  function si() {
  }
  function zs(l, t) {
    var e = Al();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Pc(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function Ts(l, t) {
    var e = Al();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Pc(t, a[1]))
      return a[0];
    if (a = l(), we) {
      ne(!0);
      try {
        l();
      } finally {
        ne(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function ri(l, t, e) {
    return e === void 0 || (Jt & 1073741824) !== 0 && (P & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = E0(), J.lanes |= l, Se |= l, e);
  }
  function Es(l, t, e, a) {
    return ft(e, t) ? e : ba.current !== null ? (l = ri(l, e, a), ft(l, t) || (Ol = !0), l) : (Jt & 42) === 0 || (Jt & 1073741824) !== 0 && (P & 261930) === 0 ? (Ol = !0, l.memoizedState = e) : (l = E0(), J.lanes |= l, Se |= l, t);
  }
  function As(l, t, e, a, u) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var c = x.T, f = {};
    x.T = f, mi(l, !1, t, e);
    try {
      var s = u(), b = x.S;
      if (b !== null && b(f, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var _ = yy(
          s,
          a
        );
        iu(
          l,
          t,
          _,
          mt(l)
        );
      } else
        iu(
          l,
          t,
          a,
          mt(l)
        );
    } catch (D) {
      iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: D },
        mt()
      );
    } finally {
      p.p = n, c !== null && f.types !== null && (c.types = f.types), x.T = c;
    }
  }
  function Sy() {
  }
  function di(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = _s(l).queue;
    As(
      l,
      u,
      t,
      v,
      e === null ? Sy : function() {
        return xs(l), e(a);
      }
    );
  }
  function _s(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: v,
      baseState: v,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: v
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
        lastRenderedReducer: Wt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function xs(l) {
    var t = _s(l);
    t.next === null && (t = l.alternate.memoizedState), iu(
      l,
      t.next.queue,
      {},
      mt()
    );
  }
  function yi() {
    return Gl(Au);
  }
  function Ms() {
    return Al().memoizedState;
  }
  function Os() {
    return Al().memoizedState;
  }
  function py(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = mt();
          l = ye(e);
          var a = me(t, l, e);
          a !== null && (Pl(a, t, e), eu(a, t, e)), t = { cache: Zc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function zy(l, t, e) {
    var a = mt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hn(l) ? Us(t, e) : (e = Rc(l, t, e, a), e !== null && (Pl(e, l, a), Rs(e, t, a)));
  }
  function Ds(l, t, e) {
    var a = mt();
    iu(l, t, e, a);
  }
  function iu(l, t, e, a) {
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
          var c = t.lastRenderedState, f = n(c, e);
          if (u.hasEagerState = !0, u.eagerState = f, ft(f, c))
            return Wu(l, t, u, 0), dl === null && Ju(), !1;
        } catch {
        }
      if (e = Rc(l, t, u, a), e !== null)
        return Pl(e, l, a), Rs(e, t, a), !0;
    }
    return !1;
  }
  function mi(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Ki(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Rc(
        l,
        e,
        a,
        2
      ), t !== null && Pl(t, l, 2);
  }
  function hn(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function Us(l, t) {
    Sa = fn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Rs(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Bf(l, e);
    }
  }
  var fu = {
    readContext: Gl,
    use: rn,
    useCallback: pl,
    useContext: pl,
    useEffect: pl,
    useImperativeHandle: pl,
    useLayoutEffect: pl,
    useInsertionEffect: pl,
    useMemo: pl,
    useReducer: pl,
    useRef: pl,
    useState: pl,
    useDebugValue: pl,
    useDeferredValue: pl,
    useTransition: pl,
    useSyncExternalStore: pl,
    useId: pl,
    useHostTransitionStatus: pl,
    useFormState: pl,
    useActionState: pl,
    useOptimistic: pl,
    useMemoCache: pl,
    useCacheRefresh: pl
  };
  fu.useEffectEvent = pl;
  var Hs = {
    readContext: Gl,
    use: rn,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: hs,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, yn(
        4194308,
        4,
        Ss.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return yn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      yn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (we) {
        ne(!0);
        try {
          l();
        } finally {
          ne(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = wl();
      if (e !== void 0) {
        var u = e(t);
        if (we) {
          ne(!0);
          try {
            e(t);
          } finally {
            ne(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = zy.bind(
        null,
        J,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ii(l);
      var t = l.queue, e = Ds.bind(null, J, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: si,
    useDeferredValue: function(l, t) {
      var e = wl();
      return ri(e, l, t);
    },
    useTransition: function() {
      var l = ii(!1);
      return l = As.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = J, u = wl();
      if (tl) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), dl === null)
          throw Error(o(349));
        (P & 127) !== 0 || Po(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, hs(ts.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        ls.bind(
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
      var l = wl(), t = dl.identifierPrefix;
      if (tl) {
        var e = Bt, a = Nt;
        e = (a & ~(1 << 32 - it(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = on++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = my++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: yi,
    useFormState: ss,
    useActionState: ss,
    useOptimistic: function(l) {
      var t = wl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = mi.bind(
        null,
        J,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: ui,
    useCacheRefresh: function() {
      return wl().memoizedState = py.bind(
        null,
        J
      );
    },
    useEffectEvent: function(l) {
      var t = wl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((ul & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, hi = {
    readContext: Gl,
    use: rn,
    useCallback: zs,
    useContext: Gl,
    useEffect: oi,
    useImperativeHandle: ps,
    useInsertionEffect: gs,
    useLayoutEffect: bs,
    useMemo: Ts,
    useReducer: dn,
    useRef: ms,
    useState: function() {
      return dn(Wt);
    },
    useDebugValue: si,
    useDeferredValue: function(l, t) {
      var e = Al();
      return Es(
        e,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = dn(Wt)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : cu(l),
        t
      ];
    },
    useSyncExternalStore: Io,
    useId: Ms,
    useHostTransitionStatus: yi,
    useFormState: rs,
    useActionState: rs,
    useOptimistic: function(l, t) {
      var e = Al();
      return us(e, ol, l, t);
    },
    useMemoCache: ui,
    useCacheRefresh: Os
  };
  hi.useEffectEvent = vs;
  var Cs = {
    readContext: Gl,
    use: rn,
    useCallback: zs,
    useContext: Gl,
    useEffect: oi,
    useImperativeHandle: ps,
    useInsertionEffect: gs,
    useLayoutEffect: bs,
    useMemo: Ts,
    useReducer: ci,
    useRef: ms,
    useState: function() {
      return ci(Wt);
    },
    useDebugValue: si,
    useDeferredValue: function(l, t) {
      var e = Al();
      return ol === null ? ri(e, l, t) : Es(
        e,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ci(Wt)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : cu(l),
        t
      ];
    },
    useSyncExternalStore: Io,
    useId: Ms,
    useHostTransitionStatus: yi,
    useFormState: ys,
    useActionState: ys,
    useOptimistic: function(l, t) {
      var e = Al();
      return ol !== null ? us(e, ol, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: ui,
    useCacheRefresh: Os
  };
  Cs.useEffectEvent = vs;
  function vi(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : B({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var gi = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = mt(), u = ye(a);
      u.payload = t, e != null && (u.callback = e), t = me(l, u, a), t !== null && (Pl(t, l, a), eu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = mt(), u = ye(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = me(l, u, a), t !== null && (Pl(t, l, a), eu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = mt(), a = ye(e);
      a.tag = 2, t != null && (a.callback = t), t = me(l, a, e), t !== null && (Pl(t, l, e), eu(t, l, e));
    }
  };
  function Ns(l, t, e, a, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Wa(e, a) || !Wa(u, n) : !0;
  }
  function Bs(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && gi.enqueueReplaceState(t, t.state, null);
  }
  function Ke(l, t) {
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
  function qs(l) {
    Ku(l);
  }
  function Ys(l) {
    console.error(l);
  }
  function Gs(l) {
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
  function Xs(l, t, e) {
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
  function bi(l, t, e) {
    return e = ye(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      vn(l, t);
    }, e;
  }
  function js(l) {
    return l = ye(l), l.tag = 3, l;
  }
  function Qs(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Xs(t, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      Xs(t, e, a), typeof u != "function" && (pe === null ? pe = /* @__PURE__ */ new Set([this]) : pe.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Ty(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ya(
        t,
        e,
        u,
        !0
      ), e = st.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return _t === null ? On() : e.alternate === null && zl === 0 && (zl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === en ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Li(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === en ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Li(l, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Li(l, a, u), On(), !1;
    }
    if (tl)
      return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Yc && (l = Error(o(422), { cause: a }), Fa(zt(l, e)))) : (a !== Yc && (t = Error(o(423), {
        cause: a
      }), Fa(
        zt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = zt(a, e), u = bi(
        l.stateNode,
        a,
        u
      ), Wc(l, u), zl !== 4 && (zl = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = zt(n, e), vu === null ? vu = [n] : vu.push(n), zl !== 4 && (zl = 2), t === null) return !0;
    a = zt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = bi(e.stateNode, a, l), Wc(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (pe === null || !pe.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = js(u), Qs(
              u,
              l,
              e,
              a
            ), Wc(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Si = Error(o(461)), Ol = !1;
  function Xl(l, t, e, a) {
    t.child = l === null ? wo(t, null, e, a) : Ve(
      t,
      l.child,
      e,
      a
    );
  }
  function Zs(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return je(t), a = li(
      l,
      t,
      e,
      c,
      n,
      u
    ), f = ti(), l !== null && !Ol ? (ei(l, t, u), $t(l, t, u)) : (tl && f && Bc(t), t.flags |= 1, Xl(l, t, a, u), t.child);
  }
  function Ls(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Hc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Vs(
        l,
        t,
        n,
        a,
        u
      )) : (l = ku(
        e.type,
        null,
        a,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Mi(l, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Wa, e(c, a) && l.ref === t.ref)
        return $t(l, t, u);
    }
    return t.flags |= 1, l = Lt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Vs(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Wa(n, a) && l.ref === t.ref)
        if (Ol = !1, t.pendingProps = a = n, Mi(l, u))
          (l.flags & 131072) !== 0 && (Ol = !0);
        else
          return t.lanes = l.lanes, $t(l, t, u);
    }
    return pi(
      l,
      t,
      e,
      a,
      u
    );
  }
  function ws(l, t, e, a) {
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
        return Ks(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ln(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Wo(t, n) : kc(), $o(t);
      else
        return a = t.lanes = 536870912, Ks(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (ln(t, n.cachePool), Wo(t, n), ve(), t.memoizedState = null) : (l !== null && ln(t, null), kc(), ve());
    return Xl(l, t, u, e), t.child;
  }
  function ou(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ks(l, t, e, a, u) {
    var n = Vc();
    return n = n === null ? null : { parent: xl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && ln(t, null), kc(), $o(t), l !== null && ya(l, t, a, !0), t.childLanes = u, null;
  }
  function gn(l, t) {
    return t = Sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Js(l, t, e) {
    return Ve(t, l.child, null, e), l = gn(t, t.pendingProps), l.flags |= 2, rt(t), t.memoizedState = null, l;
  }
  function Ey(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (tl) {
        if (a.mode === "hidden")
          return l = gn(t, a), t.lanes = 536870912, ou(null, l);
        if (Ic(t), (l = hl) ? (l = nr(
          l,
          At
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: fe !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Uo(l), e.return = t, t.child = e, Yl = t, hl = null)) : l = null, l === null) throw se(t);
        return t.lanes = 536870912, null;
      }
      return gn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Ic(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Js(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ol || ya(l, t, e, !1), u = (e & l.childLanes) !== 0, Ol || u) {
        if (a = dl, a !== null && (c = qf(a, e), c !== 0 && c !== n.retryLane))
          throw n.retryLane = c, qe(l, c), Pl(a, l, c), Si;
        On(), t = Js(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, hl = xt(c.nextSibling), Yl = t, tl = !0, oe = null, At = !1, l !== null && Co(t, l), t = gn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Lt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function bn(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function pi(l, t, e, a, u) {
    return je(t), e = li(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = ti(), l !== null && !Ol ? (ei(l, t, u), $t(l, t, u)) : (tl && a && Bc(t), t.flags |= 1, Xl(l, t, e, u), t.child);
  }
  function Ws(l, t, e, a, u, n) {
    return je(t), t.updateQueue = null, e = Fo(
      t,
      a,
      e,
      u
    ), ko(l), a = ti(), l !== null && !Ol ? (ei(l, t, n), $t(l, t, n)) : (tl && a && Bc(t), t.flags |= 1, Xl(l, t, e, n), t.child);
  }
  function $s(l, t, e, a, u) {
    if (je(t), t.stateNode === null) {
      var n = oa, c = e.contextType;
      typeof c == "object" && c !== null && (n = Gl(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = gi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Kc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? Gl(c) : oa, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (vi(
        t,
        e,
        c,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && gi.enqueueReplaceState(n, n.state, null), uu(t, a, n, u), au(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, s = Ke(e, f);
      n.props = s;
      var b = n.context, _ = e.contextType;
      c = oa, typeof _ == "object" && _ !== null && (c = Gl(_));
      var D = e.getDerivedStateFromProps;
      _ = typeof D == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, _ || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || b !== c) && Bs(
        t,
        n,
        a,
        c
      ), de = !1;
      var S = t.memoizedState;
      n.state = S, uu(t, a, n, u), au(), b = t.memoizedState, f || S !== b || de ? (typeof D == "function" && (vi(
        t,
        e,
        D,
        a
      ), b = t.memoizedState), (s = de || Ns(
        t,
        e,
        s,
        a,
        S,
        b,
        c
      )) ? (_ || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = b), n.props = a, n.state = b, n.context = c, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Jc(l, t), c = t.memoizedProps, _ = Ke(e, c), n.props = _, D = t.pendingProps, S = n.context, b = e.contextType, s = oa, typeof b == "object" && b !== null && (s = Gl(b)), f = e.getDerivedStateFromProps, (b = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== D || S !== s) && Bs(
        t,
        n,
        a,
        s
      ), de = !1, S = t.memoizedState, n.state = S, uu(t, a, n, u), au();
      var z = t.memoizedState;
      c !== D || S !== z || de || l !== null && l.dependencies !== null && Iu(l.dependencies) ? (typeof f == "function" && (vi(
        t,
        e,
        f,
        a
      ), z = t.memoizedState), (_ = de || Ns(
        t,
        e,
        _,
        a,
        S,
        z,
        s
      ) || l !== null && l.dependencies !== null && Iu(l.dependencies)) ? (b || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, z, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        z,
        s
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), n.props = a, n.state = z, n.context = s, a = _) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, bn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ve(
      t,
      l.child,
      null,
      u
    ), t.child = Ve(
      t,
      null,
      e,
      u
    )) : Xl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = $t(
      l,
      t,
      u
    ), l;
  }
  function ks(l, t, e, a) {
    return Ge(), t.flags |= 256, Xl(l, t, e, a), t.child;
  }
  var zi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ti(l) {
    return { baseLanes: l, cachePool: Xo() };
  }
  function Ei(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= yt), l;
  }
  function Fs(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (tl) {
        if (u ? he(t) : ve(), (l = hl) ? (l = nr(
          l,
          At
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: fe !== null ? { id: Nt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Uo(l), e.return = t, t.child = e, Yl = t, hl = null)) : l = null, l === null) throw se(t);
        return nf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, u ? (ve(), u = t.mode, f = Sn(
        { mode: "hidden", children: f },
        u
      ), a = Ye(
        a,
        u,
        e,
        null
      ), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = Ti(e), a.childLanes = Ei(
        l,
        c,
        e
      ), t.memoizedState = zi, ou(null, a)) : (he(t), Ai(t, f));
    }
    var s = l.memoizedState;
    if (s !== null && (f = s.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (he(t), t.flags &= -257, t = _i(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (ve(), t.child = l.child, t.flags |= 128, t = null) : (ve(), f = a.fallback, u = t.mode, a = Sn(
          { mode: "visible", children: a.children },
          u
        ), f = Ye(
          f,
          u,
          e,
          null
        ), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Ve(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = Ti(e), a.childLanes = Ei(
          l,
          c,
          e
        ), t.memoizedState = zi, t = ou(null, a));
      else if (he(t), nf(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var b = c.dgst;
        c = b, a = Error(o(419)), a.stack = "", a.digest = c, Fa({ value: a, source: null, stack: null }), t = _i(
          l,
          t,
          e
        );
      } else if (Ol || ya(l, t, e, !1), c = (e & l.childLanes) !== 0, Ol || c) {
        if (c = dl, c !== null && (a = qf(c, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, qe(l, a), Pl(c, l, a), Si;
        uf(f) || On(), t = _i(
          l,
          t,
          e
        );
      } else
        uf(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, hl = xt(
          f.nextSibling
        ), Yl = t, tl = !0, oe = null, At = !1, l !== null && Co(t, l), t = Ai(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ve(), f = a.fallback, u = t.mode, s = l.child, b = s.sibling, a = Lt(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, b !== null ? f = Lt(
      b,
      f
    ) : (f = Ye(
      f,
      u,
      e,
      null
    ), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, ou(null, a), a = t.child, f = l.child.memoizedState, f === null ? f = Ti(e) : (u = f.cachePool, u !== null ? (s = xl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Xo(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: u
    }), a.memoizedState = f, a.childLanes = Ei(
      l,
      c,
      e
    ), t.memoizedState = zi, ou(l.child, a)) : (he(t), e = l.child, l = e.sibling, e = Lt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Ai(l, t) {
    return t = Sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Sn(l, t) {
    return l = ot(22, l, null, t), l.lanes = 0, l;
  }
  function _i(l, t, e) {
    return Ve(t, l.child, null, e), l = Ai(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Is(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), jc(l.return, t, e);
  }
  function xi(l, t, e, a, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
  }
  function Ps(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var c = El.current, f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, N(El, c), Xl(l, t, a, e), a = tl ? ka : 0, !f && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Is(l, e, t);
        else if (l.tag === 19)
          Is(l, e, t);
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
          l = e.alternate, l !== null && cn(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), xi(
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
          if (l = u.alternate, l !== null && cn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        xi(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        xi(
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
  function $t(l, t, e) {
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
      for (l = t.child, e = Lt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Lt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Mi(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Iu(l)));
  }
  function Ay(l, t, e) {
    switch (t.tag) {
      case 3:
        Vl(t, t.stateNode.containerInfo), re(t, xl, l.memoizedState.cache), Ge();
        break;
      case 27:
      case 5:
        Ba(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        re(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ic(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (he(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Fs(l, t, e) : (he(t), l = $t(
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
            return Ps(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(El, El.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, ws(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        re(t, xl, l.memoizedState.cache);
    }
    return $t(l, t, e);
  }
  function l0(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ol = !0;
      else {
        if (!Mi(l, e) && (t.flags & 128) === 0)
          return Ol = !1, Ay(
            l,
            t,
            e
          );
        Ol = (l.flags & 131072) !== 0;
      }
    else
      Ol = !1, tl && (t.flags & 1048576) !== 0 && Ho(t, ka, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ze(t.elementType), t.type = l, typeof l == "function")
            Hc(l) ? (a = Ke(l, a), t.tag = 1, t = $s(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = pi(
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
                t.tag = 11, t = Zs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === $) {
                t.tag = 14, t = Ls(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = gt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return pi(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = Ke(
          a,
          t.pendingProps
        ), $s(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Vl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Jc(l, t), uu(t, a, null, e);
          var c = t.memoizedState;
          if (a = c.cache, re(t, xl, a), a !== n.cache && Qc(
            t,
            [xl],
            e,
            !0
          ), au(), a = c.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = ks(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = zt(
                Error(o(424)),
                t
              ), Fa(u), t = ks(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, hl = xt(l.firstChild), Yl = t, tl = !0, oe = null, At = !0, e = wo(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ge(), a === u) {
              t = $t(
                l,
                t,
                e
              );
              break l;
            }
            Xl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return bn(l, t), l === null ? (e = rr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : tl || (e = t.type, l = t.pendingProps, a = Bn(
          k.current
        ).createElement(e), a[ql] = t, a[Jl] = l, jl(a, e, l), Hl(a), t.stateNode = a) : t.memoizedState = rr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ba(t), l === null && tl && (a = t.stateNode = fr(
          t.type,
          t.pendingProps,
          k.current
        ), Yl = t, At = !0, u = hl, Ae(t.type) ? (cf = u, hl = xt(a.firstChild)) : hl = u), Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), bn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && tl && ((u = a = hl) && (a = l1(
          a,
          t.type,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, Yl = t, hl = xt(a.firstChild), At = !1, u = !0) : u = !1), u || se(t)), Ba(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, tf(u, n) ? a = null : c !== null && tf(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = li(
          l,
          t,
          hy,
          null,
          null,
          e
        ), Au._currentValue = u), bn(l, t), Xl(l, t, a, e), t.child;
      case 6:
        return l === null && tl && ((l = e = hl) && (e = t1(
          e,
          t.pendingProps,
          At
        ), e !== null ? (t.stateNode = e, Yl = t, hl = null, l = !0) : l = !1), l || se(t)), null;
      case 13:
        return Fs(l, t, e);
      case 4:
        return Vl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ve(
          t,
          null,
          a,
          e
        ) : Xl(l, t, a, e), t.child;
      case 11:
        return Zs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Xl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, re(t, t.type, a.value), Xl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, je(t), u = Gl(u), a = a(u), t.flags |= 1, Xl(l, t, a, e), t.child;
      case 14:
        return Ls(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Vs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return Ps(l, t, e);
      case 31:
        return Ey(l, t, e);
      case 22:
        return ws(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return je(t), a = Gl(xl), l === null ? (u = Vc(), u === null && (u = dl, n = Zc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Kc(t), re(t, xl, u)) : ((l.lanes & e) !== 0 && (Jc(l, t), uu(t, null, null, e), au()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), re(t, xl, a)) : (a = n.cache, re(t, xl, a), a !== u.cache && Qc(
          t,
          [xl],
          e,
          !0
        ))), Xl(
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
  function kt(l) {
    l.flags |= 4;
  }
  function Oi(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (M0()) l.flags |= 8192;
        else
          throw Le = en, wc;
    } else l.flags &= -16777217;
  }
  function t0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !vr(t))
      if (M0()) l.flags |= 8192;
      else
        throw Le = en, wc;
  }
  function pn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Cf() : 536870912, l.lanes |= t, _a |= t);
  }
  function su(l, t) {
    if (!tl)
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
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function _y(l, t, e) {
    var a = t.pendingProps;
    switch (qc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(xl), Tl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (da(t) ? kt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gc())), vl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (kt(t), n !== null ? (vl(t), t0(t, n)) : (vl(t), Oi(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (kt(t), vl(t), t0(t, n)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && kt(t), vl(t), Oi(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Uu(t), e = k.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return vl(t), null;
          }
          l = Y.current, da(t) ? No(t) : (l = fr(u, a, e), t.stateNode = l, kt(t));
        }
        return vl(t), null;
      case 5:
        if (Uu(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return vl(t), null;
          }
          if (n = Y.current, da(t))
            No(t);
          else {
            var c = Bn(
              k.current
            );
            switch (n) {
              case 1:
                n = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            n[ql] = t, n[Jl] = a;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = n;
            l: switch (jl(n, u, a), u) {
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
            a && kt(t);
          }
        }
        return vl(t), Oi(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = k.current, da(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Yl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[ql] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || F0(l.nodeValue, e)), l || se(t, !0);
          } else
            l = Bn(l).createTextNode(
              a
            ), l[ql] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = da(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[ql] = t;
            } else
              Ge(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), l = !1;
          } else
            e = Gc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (rt(t), t) : (rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return vl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = da(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[ql] = t;
            } else
              Ge(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), u = !1;
          } else
            u = Gc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (rt(t), t) : (rt(t), null);
        }
        return rt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), pn(t, t.updateQueue), vl(t), null);
      case 4:
        return Tl(), l === null && ki(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Kt(t.type), vl(t), null;
      case 19:
        if (A(El), a = t.memoizedState, a === null) return vl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) su(a, !1);
          else {
            if (zl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = cn(l), n !== null) {
                  for (t.flags |= 128, su(a, !1), l = n.updateQueue, t.updateQueue = l, pn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Do(e, l), e = e.sibling;
                  return N(
                    El,
                    El.current & 1 | 2
                  ), tl && Vt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && nt() > _n && (t.flags |= 128, u = !0, su(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = cn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, pn(t, l), su(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !tl)
                return vl(t), null;
            } else
              2 * nt() - a.renderingStartTime > _n && e !== 536870912 && (t.flags |= 128, u = !0, su(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = nt(), l.sibling = null, e = El.current, N(
          El,
          u ? e & 1 | 2 : e & 1
        ), tl && Vt(t, a.treeForkCount), l) : (vl(t), null);
      case 22:
      case 23:
        return rt(t), Fc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), e = t.updateQueue, e !== null && pn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && A(Qe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Kt(xl), vl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function xy(l, t) {
    switch (qc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Kt(xl), Tl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Uu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (rt(t), t.alternate === null)
            throw Error(o(340));
          Ge();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (rt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ge();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(El), null;
      case 4:
        return Tl(), null;
      case 10:
        return Kt(t.type), null;
      case 22:
      case 23:
        return rt(t), Fc(), l !== null && A(Qe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Kt(xl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function e0(l, t) {
    switch (qc(t), t.tag) {
      case 3:
        Kt(xl), Tl();
        break;
      case 26:
      case 27:
      case 5:
        Uu(t);
        break;
      case 4:
        Tl();
        break;
      case 31:
        t.memoizedState !== null && rt(t);
        break;
      case 13:
        rt(t);
        break;
      case 19:
        A(El);
        break;
      case 10:
        Kt(t.type);
        break;
      case 22:
      case 23:
        rt(t), Fc(), l !== null && A(Qe);
        break;
      case 24:
        Kt(xl);
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
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      fl(t, t.return, f);
    }
  }
  function ge(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, u = t;
              var s = e, b = f;
              try {
                b();
              } catch (_) {
                fl(
                  u,
                  s,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (_) {
      fl(t, t.return, _);
    }
  }
  function a0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Jo(t, e);
      } catch (a) {
        fl(l, l.return, a);
      }
    }
  }
  function u0(l, t, e) {
    e.props = Ke(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      fl(l, t, a);
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
      fl(l, t, u);
    }
  }
  function qt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          fl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          fl(l, t, u);
        }
      else e.current = null;
  }
  function n0(l) {
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
      fl(l, l.return, u);
    }
  }
  function Di(l, t, e) {
    try {
      var a = l.stateNode;
      Wy(a, l.type, e, t), a[Jl] = t;
    } catch (u) {
      fl(l, l.return, u);
    }
  }
  function c0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ae(l.type) || l.tag === 4;
  }
  function Ui(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || c0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ae(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ri(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Qt));
    else if (a !== 4 && (a === 27 && Ae(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Ri(l, t, e), l = l.sibling; l !== null; )
        Ri(l, t, e), l = l.sibling;
  }
  function zn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Ae(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (zn(l, t, e), l = l.sibling; l !== null; )
        zn(l, t, e), l = l.sibling;
  }
  function i0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      jl(t, a, e), t[ql] = l, t[Jl] = e;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var Ft = !1, Dl = !1, Hi = !1, f0 = typeof WeakSet == "function" ? WeakSet : Set, Cl = null;
  function My(l, t) {
    if (l = l.containerInfo, Pi = Zn, l = po(l), _c(l)) {
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
            var c = 0, f = -1, s = -1, b = 0, _ = 0, D = l, S = null;
            t: for (; ; ) {
              for (var z; D !== e || u !== 0 && D.nodeType !== 3 || (f = c + u), D !== n || a !== 0 && D.nodeType !== 3 || (s = c + a), D.nodeType === 3 && (c += D.nodeValue.length), (z = D.firstChild) !== null; )
                S = D, D = z;
              for (; ; ) {
                if (D === l) break t;
                if (S === e && ++b === u && (f = c), S === n && ++_ === a && (s = c), (z = D.nextSibling) !== null) break;
                D = S, S = D.parentNode;
              }
              D = z;
            }
            e = f === -1 || s === -1 ? null : { start: f, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (lf = { focusedElem: l, selectionRange: e }, Zn = !1, Cl = t; Cl !== null; )
      if (t = Cl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Cl = l;
      else
        for (; Cl !== null; ) {
          switch (t = Cl, n = t.alternate, l = t.flags, t.tag) {
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
                  var G = Ke(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    G,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Z) {
                  fl(
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
                  af(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      af(l);
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
            l.return = t.return, Cl = l;
            break;
          }
          Cl = t.return;
        }
  }
  function o0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, e), a & 4 && ru(5, e);
        break;
      case 1:
        if (Pt(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              fl(e, e.return, c);
            }
          else {
            var u = Ke(
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
            } catch (c) {
              fl(
                e,
                e.return,
                c
              );
            }
          }
        a & 64 && a0(e), a & 512 && du(e, e.return);
        break;
      case 3:
        if (Pt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
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
            Jo(l, t);
          } catch (c) {
            fl(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && i0(e);
      case 26:
      case 5:
        Pt(l, e), t === null && a & 4 && n0(e), a & 512 && du(e, e.return);
        break;
      case 12:
        Pt(l, e);
        break;
      case 31:
        Pt(l, e), a & 4 && d0(l, e);
        break;
      case 13:
        Pt(l, e), a & 4 && y0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = qy.bind(
          null,
          e
        ), e1(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Ft, !a) {
          t = t !== null && t.memoizedState !== null || Dl, u = Ft;
          var n = Dl;
          Ft = a, (Dl = t) && !n ? le(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Pt(l, e), Ft = u, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        Pt(l, e);
    }
  }
  function s0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, s0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && fc(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, $l = !1;
  function It(l, t, e) {
    for (e = e.child; e !== null; )
      r0(l, t, e), e = e.sibling;
  }
  function r0(l, t, e) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
      try {
        ct.onCommitFiberUnmount(qa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Dl || qt(e, t), It(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Dl || qt(e, t);
        var a = bl, u = $l;
        Ae(e.type) && (bl = e.stateNode, $l = !1), It(
          l,
          t,
          e
        ), zu(e.stateNode), bl = a, $l = u;
        break;
      case 5:
        Dl || qt(e, t);
      case 6:
        if (a = bl, u = $l, bl = null, It(
          l,
          t,
          e
        ), bl = a, $l = u, bl !== null)
          if ($l)
            try {
              (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(e.stateNode);
            } catch (n) {
              fl(
                e,
                t,
                n
              );
            }
          else
            try {
              bl.removeChild(e.stateNode);
            } catch (n) {
              fl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        bl !== null && ($l ? (l = bl, ar(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ca(l)) : ar(bl, e.stateNode));
        break;
      case 4:
        a = bl, u = $l, bl = e.stateNode.containerInfo, $l = !0, It(
          l,
          t,
          e
        ), bl = a, $l = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ge(2, e, t), Dl || ge(4, e, t), It(
          l,
          t,
          e
        );
        break;
      case 1:
        Dl || (qt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && u0(
          e,
          t,
          a
        )), It(
          l,
          t,
          e
        );
        break;
      case 21:
        It(
          l,
          t,
          e
        );
        break;
      case 22:
        Dl = (a = Dl) || e.memoizedState !== null, It(
          l,
          t,
          e
        ), Dl = a;
        break;
      default:
        It(
          l,
          t,
          e
        );
    }
  }
  function d0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ca(l);
      } catch (e) {
        fl(t, t.return, e);
      }
    }
  }
  function y0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ca(l);
      } catch (e) {
        fl(t, t.return, e);
      }
  }
  function Oy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new f0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new f0()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function Tn(l, t) {
    var e = Oy(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Yy.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function kl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, c = t, f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Ae(f.type)) {
                bl = f.stateNode, $l = !1;
                break l;
              }
              break;
            case 5:
              bl = f.stateNode, $l = !1;
              break l;
            case 3:
            case 4:
              bl = f.stateNode.containerInfo, $l = !0;
              break l;
          }
          f = f.return;
        }
        if (bl === null) throw Error(o(160));
        r0(n, c, u), bl = null, $l = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        m0(t, l), t = t.sibling;
  }
  var Ut = null;
  function m0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(t, l), Fl(l), a & 4 && (ge(3, l, l.return), ru(3, l), ge(5, l, l.return));
        break;
      case 1:
        kl(t, l), Fl(l), a & 512 && (Dl || e === null || qt(e, e.return)), a & 64 && Ft && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ut;
        if (kl(t, l), Fl(l), a & 512 && (Dl || e === null || qt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Xa] || n[ql] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), jl(n, a, e), n[ql] = l, Hl(n), a = n;
                      break l;
                    case "link":
                      var c = mr(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), jl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = mr(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (f = 0; f < c.length; f++)
                          if (n = c[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), jl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[ql] = l, Hl(n), a = n;
                }
                l.stateNode = a;
              } else
                hr(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = yr(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? hr(
              u,
              l.type,
              l.stateNode
            ) : yr(
              u,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Di(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        kl(t, l), Fl(l), a & 512 && (Dl || e === null || qt(e, e.return)), e !== null && a & 4 && Di(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (kl(t, l), Fl(l), a & 512 && (Dl || e === null || qt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            ea(u, "");
          } catch (G) {
            fl(l, l.return, G);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Di(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Hi = !0);
        break;
      case 6:
        if (kl(t, l), Fl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (G) {
            fl(l, l.return, G);
          }
        }
        break;
      case 3:
        if (Gn = null, u = Ut, Ut = qn(t.containerInfo), kl(t, l), Ut = u, Fl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ca(t.containerInfo);
          } catch (G) {
            fl(l, l.return, G);
          }
        Hi && (Hi = !1, h0(l));
        break;
      case 4:
        a = Ut, Ut = qn(
          l.stateNode.containerInfo
        ), kl(t, l), Fl(l), Ut = a;
        break;
      case 12:
        kl(t, l), Fl(l);
        break;
      case 31:
        kl(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 13:
        kl(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (An = nt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, b = Ft, _ = Dl;
        if (Ft = b || u, Dl = _ || s, kl(t, l), Dl = _, Ft = b, Fl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || Ft || Dl || Je(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    f = s.stateNode;
                    var D = s.memoizedProps.style, S = D != null && D.hasOwnProperty("display") ? D.display : null;
                    f.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (G) {
                  fl(s, s.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (G) {
                  fl(s, s.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var z = s.stateNode;
                  u ? ur(z, !0) : ur(s.stateNode, !1);
                } catch (G) {
                  fl(s, s.return, G);
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
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Tn(l, e))));
        break;
      case 19:
        kl(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(t, l), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (c0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Ui(l);
            zn(l, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (ea(c, ""), e.flags &= -33);
            var f = Ui(l);
            zn(l, f, c);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, b = Ui(l);
            Ri(
              l,
              b,
              s
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (_) {
        fl(l, l.return, _);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function h0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        h0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        o0(l, t.alternate, t), t = t.sibling;
  }
  function Je(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ge(4, t, t.return), Je(t);
          break;
        case 1:
          qt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && u0(
            t,
            t.return,
            e
          ), Je(t);
          break;
        case 27:
          zu(t.stateNode);
        case 26:
        case 5:
          qt(t, t.return), Je(t);
          break;
        case 22:
          t.memoizedState === null && Je(t);
          break;
        case 30:
          Je(t);
          break;
        default:
          Je(t);
      }
      l = l.sibling;
    }
  }
  function le(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          le(
            u,
            n,
            e
          ), ru(4, n);
          break;
        case 1:
          if (le(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (b) {
              fl(a, a.return, b);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Ko(s[u], f);
            } catch (b) {
              fl(a, a.return, b);
            }
          }
          e && c & 64 && a0(n), du(n, n.return);
          break;
        case 27:
          i0(n);
        case 26:
        case 5:
          le(
            u,
            n,
            e
          ), e && a === null && c & 4 && n0(n), du(n, n.return);
          break;
        case 12:
          le(
            u,
            n,
            e
          );
          break;
        case 31:
          le(
            u,
            n,
            e
          ), e && c & 4 && d0(u, n);
          break;
        case 13:
          le(
            u,
            n,
            e
          ), e && c & 4 && y0(u, n);
          break;
        case 22:
          n.memoizedState === null && le(
            u,
            n,
            e
          ), du(n, n.return);
          break;
        case 30:
          break;
        default:
          le(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Ci(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Ia(e));
  }
  function Ni(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ia(l));
  }
  function Rt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        v0(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function v0(l, t, e, a) {
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
        ), u & 2048 && ru(9, t);
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
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ia(l)));
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
            var n = t.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              c,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (s) {
            fl(t, t.return, s);
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
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Rt(
          l,
          t,
          e,
          a
        ) : yu(l, t) : n._visibility & 2 ? Rt(
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
        )), u & 2048 && Ci(c, t);
        break;
      case 24:
        Rt(
          l,
          t,
          e,
          a
        ), u & 2048 && Ni(t.alternate, t);
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
  function Ta(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, c = t, f = e, s = a, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ta(
            n,
            c,
            f,
            s,
            u
          ), ru(8, c);
          break;
        case 23:
          break;
        case 22:
          var _ = c.stateNode;
          c.memoizedState !== null ? _._visibility & 2 ? Ta(
            n,
            c,
            f,
            s,
            u
          ) : yu(
            n,
            c
          ) : (_._visibility |= 2, Ta(
            n,
            c,
            f,
            s,
            u
          )), u && b & 2048 && Ci(
            c.alternate,
            c
          );
          break;
        case 24:
          Ta(
            n,
            c,
            f,
            s,
            u
          ), u && b & 2048 && Ni(c.alternate, c);
          break;
        default:
          Ta(
            n,
            c,
            f,
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
            yu(e, a), u & 2048 && Ci(
              a.alternate,
              a
            );
            break;
          case 24:
            yu(e, a), u & 2048 && Ni(a.alternate, a);
            break;
          default:
            yu(e, a);
        }
        t = t.sibling;
      }
  }
  var mu = 8192;
  function Ea(l, t, e) {
    if (l.subtreeFlags & mu)
      for (l = l.child; l !== null; )
        g0(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function g0(l, t, e) {
    switch (l.tag) {
      case 26:
        Ea(
          l,
          t,
          e
        ), l.flags & mu && l.memoizedState !== null && m1(
          e,
          Ut,
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
        var a = Ut;
        Ut = qn(l.stateNode.containerInfo), Ea(
          l,
          t,
          e
        ), Ut = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = mu, mu = 16777216, Ea(
          l,
          t,
          e
        ), mu = a) : Ea(
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
  function b0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function hu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Cl = a, p0(
            a,
            l
          );
        }
      b0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        S0(l), l = l.sibling;
  }
  function S0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hu(l), l.flags & 2048 && ge(9, l, l.return);
        break;
      case 3:
        hu(l);
        break;
      case 12:
        hu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, En(l)) : hu(l);
        break;
      default:
        hu(l);
    }
  }
  function En(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Cl = a, p0(
            a,
            l
          );
        }
      b0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ge(8, t, t.return), En(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, En(t));
          break;
        default:
          En(t);
      }
      l = l.sibling;
    }
  }
  function p0(l, t) {
    for (; Cl !== null; ) {
      var e = Cl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ge(8, e, t);
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
      if (a = e.child, a !== null) a.return = e, Cl = a;
      else
        l: for (e = l; Cl !== null; ) {
          a = Cl;
          var u = a.sibling, n = a.return;
          if (s0(a), a === e) {
            Cl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Cl = u;
            break l;
          }
          Cl = n;
        }
    }
  }
  var Dy = {
    getCacheForType: function(l) {
      var t = Gl(xl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Gl(xl).controller.signal;
    }
  }, Uy = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, dl = null, F = null, P = 0, il = 0, dt = null, be = !1, Aa = !1, Bi = !1, te = 0, zl = 0, Se = 0, We = 0, qi = 0, yt = 0, _a = 0, vu = null, Il = null, Yi = !1, An = 0, z0 = 0, _n = 1 / 0, xn = null, pe = null, Rl = 0, ze = null, xa = null, ee = 0, Gi = 0, Xi = null, T0 = null, gu = 0, ji = null;
  function mt() {
    return (ul & 2) !== 0 && P !== 0 ? P & -P : x.T !== null ? Ki() : Yf();
  }
  function E0() {
    if (yt === 0)
      if ((P & 536870912) === 0 || tl) {
        var l = Cu;
        Cu <<= 1, (Cu & 3932160) === 0 && (Cu = 262144), yt = l;
      } else yt = 536870912;
    return l = st.current, l !== null && (l.flags |= 32), yt;
  }
  function Pl(l, t, e) {
    (l === dl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (Ma(l, 0), Te(
      l,
      P,
      yt,
      !1
    )), Ga(l, e), ((ul & 2) === 0 || l !== dl) && (l === dl && ((ul & 2) === 0 && (We |= e), zl === 4 && Te(
      l,
      P,
      yt,
      !1
    )), Yt(l));
  }
  function A0(l, t, e) {
    if ((ul & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ya(l, t), u = a ? Cy(l, t) : Zi(l, t, !0), n = a;
    do {
      if (u === 0) {
        Aa && !a && Te(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !Ry(e)) {
          u = Zi(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              u = vu;
              var s = f.current.memoizedState.isDehydrated;
              if (s && (Ma(f, c).flags |= 256), c = Zi(
                f,
                c,
                !1
              ), c !== 2) {
                if (Bi && !s) {
                  f.errorRecoveryDisabledLanes |= n, We |= n, u = 4;
                  break l;
                }
                n = Il, Il = u, n !== null && (Il === null ? Il = n : Il.push.apply(
                  Il,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ma(l, 0), Te(l, t, 0, !0);
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
              Te(
                a,
                t,
                yt,
                !be
              );
              break l;
            case 2:
              Il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = An + 300 - nt(), 10 < u)) {
            if (Te(
              a,
              t,
              yt,
              !be
            ), Bu(a, 0, !0) !== 0) break l;
            ee = t, a.timeoutHandle = tr(
              _0.bind(
                null,
                a,
                e,
                Il,
                xn,
                Yi,
                t,
                yt,
                We,
                _a,
                be,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          _0(
            a,
            e,
            Il,
            xn,
            Yi,
            t,
            yt,
            We,
            _a,
            be,
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
  function _0(l, t, e, a, u, n, c, f, s, b, _, D, S, z) {
    if (l.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, g0(
        t,
        n,
        D
      );
      var G = (n & 62914560) === n ? An - nt() : (n & 4194048) === n ? z0 - nt() : 0;
      if (G = h1(
        D,
        G
      ), G !== null) {
        ee = n, l.cancelPendingCommit = G(
          C0.bind(
            null,
            l,
            t,
            n,
            e,
            a,
            u,
            c,
            f,
            s,
            _,
            D,
            null,
            S,
            z
          )
        ), Te(l, n, c, !b);
        return;
      }
    }
    C0(
      l,
      t,
      n,
      e,
      a,
      u,
      c,
      f,
      s
    );
  }
  function Ry(l) {
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
  function Te(l, t, e, a) {
    t &= ~qi, t &= ~We, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - it(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && Nf(l, e, t);
  }
  function Mn() {
    return (ul & 6) === 0 ? (bu(0), !1) : !0;
  }
  function Qi() {
    if (F !== null) {
      if (il === 0)
        var l = F.return;
      else
        l = F, wt = Xe = null, ai(l), ga = null, lu = 0, l = F;
      for (; l !== null; )
        e0(l.alternate, l), l = l.return;
      F = null;
    }
  }
  function Ma(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Fy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ee = 0, Qi(), dl = l, F = e = Lt(l.current, null), P = t, il = 0, dt = null, be = !1, Aa = Ya(l, t), Bi = !1, _a = yt = qi = We = Se = zl = 0, Il = vu = null, Yi = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - it(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return te = t, Ju(), e;
  }
  function x0(l, t) {
    J = null, x.H = fu, t === va || t === tn ? (t = Zo(), il = 3) : t === wc ? (t = Zo(), il = 4) : il = t === Si ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, dt = t, F === null && (zl = 1, vn(
      l,
      zt(t, l.current)
    ));
  }
  function M0() {
    var l = st.current;
    return l === null ? !0 : (P & 4194048) === P ? _t === null : (P & 62914560) === P || (P & 536870912) !== 0 ? l === _t : !1;
  }
  function O0() {
    var l = x.H;
    return x.H = fu, l === null ? fu : l;
  }
  function D0() {
    var l = x.A;
    return x.A = Dy, l;
  }
  function On() {
    zl = 4, be || (P & 4194048) !== P && st.current !== null || (Aa = !0), (Se & 134217727) === 0 && (We & 134217727) === 0 || dl === null || Te(
      dl,
      P,
      yt,
      !1
    );
  }
  function Zi(l, t, e) {
    var a = ul;
    ul |= 2;
    var u = O0(), n = D0();
    (dl !== l || P !== t) && (xn = null, Ma(l, t)), t = !1;
    var c = zl;
    l: do
      try {
        if (il !== 0 && F !== null) {
          var f = F, s = dt;
          switch (il) {
            case 8:
              Qi(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var b = il;
              if (il = 0, dt = null, Oa(l, f, s, b), e && Aa) {
                c = 0;
                break l;
              }
              break;
            default:
              b = il, il = 0, dt = null, Oa(l, f, s, b);
          }
        }
        Hy(), c = zl;
        break;
      } catch (_) {
        x0(l, _);
      }
    while (!0);
    return t && l.shellSuspendCounter++, wt = Xe = null, ul = a, x.H = u, x.A = n, F === null && (dl = null, P = 0, Ju()), c;
  }
  function Hy() {
    for (; F !== null; ) U0(F);
  }
  function Cy(l, t) {
    var e = ul;
    ul |= 2;
    var a = O0(), u = D0();
    dl !== l || P !== t ? (xn = null, _n = nt() + 500, Ma(l, t)) : Aa = Ya(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && F !== null) {
          t = F;
          var n = dt;
          t: switch (il) {
            case 1:
              il = 0, dt = null, Oa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (jo(n)) {
                il = 0, dt = null, R0(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || dl !== l || (il = 7), Yt(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              jo(n) ? (il = 0, dt = null, R0(t)) : (il = 0, dt = null, Oa(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (F.tag) {
                case 26:
                  c = F.memoizedState;
                case 5:
                case 27:
                  var f = F;
                  if (c ? vr(c) : f.stateNode.complete) {
                    il = 0, dt = null;
                    var s = f.sibling;
                    if (s !== null) F = s;
                    else {
                      var b = f.return;
                      b !== null ? (F = b, Dn(b)) : F = null;
                    }
                    break t;
                  }
              }
              il = 0, dt = null, Oa(l, t, n, 5);
              break;
            case 6:
              il = 0, dt = null, Oa(l, t, n, 6);
              break;
            case 8:
              Qi(), zl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Ny();
        break;
      } catch (_) {
        x0(l, _);
      }
    while (!0);
    return wt = Xe = null, x.H = a, x.A = u, ul = e, F !== null ? 0 : (dl = null, P = 0, Ju(), zl);
  }
  function Ny() {
    for (; F !== null && !ad(); )
      U0(F);
  }
  function U0(l) {
    var t = l0(l.alternate, l, te);
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : F = t;
  }
  function R0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ws(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          P
        );
        break;
      case 11:
        t = Ws(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          P
        );
        break;
      case 5:
        ai(t);
      default:
        e0(e, t), t = F = Do(t, te), t = l0(e, t, te);
    }
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : F = t;
  }
  function Oa(l, t, e, a) {
    wt = Xe = null, ai(t), ga = null, lu = 0;
    var u = t.return;
    try {
      if (Ty(
        l,
        u,
        t,
        e,
        P
      )) {
        zl = 1, vn(
          l,
          zt(e, l.current)
        ), F = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw F = u, n;
      zl = 1, vn(
        l,
        zt(e, l.current)
      ), F = null;
      return;
    }
    t.flags & 32768 ? (tl || a === 1 ? l = !0 : Aa || (P & 536870912) !== 0 ? l = !1 : (be = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = st.current, a !== null && a.tag === 13 && (a.flags |= 16384))), H0(t, l)) : Dn(t);
  }
  function Dn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        H0(
          t,
          be
        );
        return;
      }
      l = t.return;
      var e = _y(
        t.alternate,
        t,
        te
      );
      if (e !== null) {
        F = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        F = t;
        return;
      }
      F = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function H0(l, t) {
    do {
      var e = xy(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, F = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        F = l;
        return;
      }
      F = l = e;
    } while (l !== null);
    zl = 6, F = null;
  }
  function C0(l, t, e, a, u, n, c, f, s) {
    l.cancelPendingCommit = null;
    do
      Un();
    while (Rl !== 0);
    if ((ul & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Uc, yd(
        l,
        e,
        n,
        c,
        f,
        s
      ), l === dl && (F = dl = null, P = 0), xa = t, ze = l, ee = e, Gi = n, Xi = u, T0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Gy(Ru, function() {
        return G0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = x.T, x.T = null, u = p.p, p.p = 2, c = ul, ul |= 4;
        try {
          My(l, t, e);
        } finally {
          ul = c, p.p = u, x.T = a;
        }
      }
      Rl = 1, N0(), B0(), q0();
    }
  }
  function N0() {
    if (Rl === 1) {
      Rl = 0;
      var l = ze, t = xa, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = x.T, x.T = null;
        var a = p.p;
        p.p = 2;
        var u = ul;
        ul |= 4;
        try {
          m0(t, l);
          var n = lf, c = po(l.containerInfo), f = n.focusedElem, s = n.selectionRange;
          if (c !== f && f && f.ownerDocument && So(
            f.ownerDocument.documentElement,
            f
          )) {
            if (s !== null && _c(f)) {
              var b = s.start, _ = s.end;
              if (_ === void 0 && (_ = b), "selectionStart" in f)
                f.selectionStart = b, f.selectionEnd = Math.min(
                  _,
                  f.value.length
                );
              else {
                var D = f.ownerDocument || document, S = D && D.defaultView || window;
                if (S.getSelection) {
                  var z = S.getSelection(), G = f.textContent.length, Z = Math.min(s.start, G), rl = s.end === void 0 ? Z : Math.min(s.end, G);
                  !z.extend && Z > rl && (c = rl, rl = Z, Z = c);
                  var h = bo(
                    f,
                    Z
                  ), d = bo(
                    f,
                    rl
                  );
                  if (h && d && (z.rangeCount !== 1 || z.anchorNode !== h.node || z.anchorOffset !== h.offset || z.focusNode !== d.node || z.focusOffset !== d.offset)) {
                    var g = D.createRange();
                    g.setStart(h.node, h.offset), z.removeAllRanges(), Z > rl ? (z.addRange(g), z.extend(d.node, d.offset)) : (g.setEnd(d.node, d.offset), z.addRange(g));
                  }
                }
              }
            }
            for (D = [], z = f; z = z.parentNode; )
              z.nodeType === 1 && D.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
              var O = D[f];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Zn = !!Pi, lf = Pi = null;
        } finally {
          ul = u, p.p = a, x.T = e;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function B0() {
    if (Rl === 2) {
      Rl = 0;
      var l = ze, t = xa, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = x.T, x.T = null;
        var a = p.p;
        p.p = 2;
        var u = ul;
        ul |= 4;
        try {
          o0(l, t.alternate, t);
        } finally {
          ul = u, p.p = a, x.T = e;
        }
      }
      Rl = 3;
    }
  }
  function q0() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, ud();
      var l = ze, t = xa, e = ee, a = T0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, xa = ze = null, Y0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (pe = null), cc(e), t = t.stateNode, ct && typeof ct.onCommitFiberRoot == "function")
        try {
          ct.onCommitFiberRoot(
            qa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = x.T, u = p.p, p.p = 2, x.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          x.T = t, p.p = u;
        }
      }
      (ee & 3) !== 0 && Un(), Yt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === ji ? gu++ : (gu = 0, ji = l) : gu = 0, bu(0);
    }
  }
  function Y0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ia(t)));
  }
  function Un() {
    return N0(), B0(), q0(), G0();
  }
  function G0() {
    if (Rl !== 5) return !1;
    var l = ze, t = Gi;
    Gi = 0;
    var e = cc(ee), a = x.T, u = p.p;
    try {
      p.p = 32 > e ? 32 : e, x.T = null, e = Xi, Xi = null;
      var n = ze, c = ee;
      if (Rl = 0, xa = ze = null, ee = 0, (ul & 6) !== 0) throw Error(o(331));
      var f = ul;
      if (ul |= 4, S0(n.current), v0(
        n,
        n.current,
        c,
        e
      ), ul = f, bu(0, !1), ct && typeof ct.onPostCommitFiberRoot == "function")
        try {
          ct.onPostCommitFiberRoot(qa, n);
        } catch {
        }
      return !0;
    } finally {
      p.p = u, x.T = a, Y0(l, t);
    }
  }
  function X0(l, t, e) {
    t = zt(e, t), t = bi(l.stateNode, t, 2), l = me(l, t, 2), l !== null && (Ga(l, 2), Yt(l));
  }
  function fl(l, t, e) {
    if (l.tag === 3)
      X0(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          X0(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pe === null || !pe.has(a))) {
            l = zt(e, l), e = js(2), a = me(t, e, 2), a !== null && (Qs(
              e,
              a,
              t,
              l
            ), Ga(a, 2), Yt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Li(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Uy();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Bi = !0, u.add(e), l = By.bind(null, l, t, e), t.then(l, l));
  }
  function By(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, dl === l && (P & e) === e && (zl === 4 || zl === 3 && (P & 62914560) === P && 300 > nt() - An ? (ul & 2) === 0 && Ma(l, 0) : qi |= e, _a === P && (_a = 0)), Yt(l);
  }
  function j0(l, t) {
    t === 0 && (t = Cf()), l = qe(l, t), l !== null && (Ga(l, t), Yt(l));
  }
  function qy(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), j0(l, e);
  }
  function Yy(l, t) {
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
  function Gy(l, t) {
    return ec(l, t);
  }
  var Rn = null, Da = null, Vi = !1, Hn = !1, wi = !1, Ee = 0;
  function Yt(l) {
    l !== Da && l.next === null && (Da === null ? Rn = Da = l : Da = Da.next = l), Hn = !0, Vi || (Vi = !0, jy());
  }
  function bu(l, t) {
    if (!wi && Hn) {
      wi = !0;
      do
        for (var e = !1, a = Rn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - it(42 | l) + 1) - 1, n &= u & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, V0(a, n));
          } else
            n = P, n = Bu(
              a,
              a === dl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ya(a, n) || (e = !0, V0(a, n));
          a = a.next;
        }
      while (e);
      wi = !1;
    }
  }
  function Xy() {
    Q0();
  }
  function Q0() {
    Hn = Vi = !1;
    var l = 0;
    Ee !== 0 && ky() && (l = Ee);
    for (var t = nt(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = Z0(a, t);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (Da = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Hn = !0)), a = u;
    }
    Rl !== 0 && Rl !== 5 || bu(l), Ee !== 0 && (Ee = 0);
  }
  function Z0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - it(n), f = 1 << c, s = u[c];
      s === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[c] = dd(f, t)) : s <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = dl, e = P, e = Bu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && ac(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ya(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ac(a), cc(e)) {
        case 2:
        case 8:
          e = Rf;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = Hf;
          break;
        default:
          e = Ru;
      }
      return a = L0.bind(null, l), e = ec(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && ac(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function L0(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Un() && l.callbackNode !== e)
      return null;
    var a = P;
    return a = Bu(
      l,
      l === dl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (A0(l, a, t), Z0(l, nt()), l.callbackNode != null && l.callbackNode === e ? L0.bind(null, l) : null);
  }
  function V0(l, t) {
    if (Un()) return null;
    A0(l, t, !0);
  }
  function jy() {
    Iy(function() {
      (ul & 6) !== 0 ? ec(
        Uf,
        Xy
      ) : Q0();
    });
  }
  function Ki() {
    if (Ee === 0) {
      var l = ma;
      l === 0 && (l = Hu, Hu <<= 1, (Hu & 261888) === 0 && (Hu = 256)), Ee = l;
    }
    return Ee;
  }
  function w0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Xu("" + l);
  }
  function K0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Qy(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = w0(
        (u[Jl] || null).action
      ), c = a.submitter;
      c && (t = (t = c[Jl] || null) ? w0(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var f = new Lu(
        "action",
        "action",
        null,
        a,
        u
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ee !== 0) {
                  var s = c ? K0(u, c) : new FormData(u);
                  di(
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
                typeof n == "function" && (f.preventDefault(), s = c ? K0(u, c) : new FormData(u), di(
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
  for (var Ji = 0; Ji < Dc.length; Ji++) {
    var Wi = Dc[Ji], Zy = Wi.toLowerCase(), Ly = Wi[0].toUpperCase() + Wi.slice(1);
    Dt(
      Zy,
      "on" + Ly
    );
  }
  Dt(Eo, "onAnimationEnd"), Dt(Ao, "onAnimationIteration"), Dt(_o, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(ny, "onTransitionRun"), Dt(cy, "onTransitionStart"), Dt(iy, "onTransitionCancel"), Dt(xo, "onTransitionEnd"), la("onMouseEnter", ["mouseout", "mouseover"]), la("onMouseLeave", ["mouseout", "mouseover"]), la("onPointerEnter", ["pointerout", "pointerover"]), la("onPointerLeave", ["pointerout", "pointerover"]), He(
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
  var Su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Vy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Su)
  );
  function J0(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], s = f.instance, b = f.currentTarget;
            if (f = f.listener, s !== n && u.isPropagationStopped())
              break l;
            n = f, u.currentTarget = b;
            try {
              n(u);
            } catch (_) {
              Ku(_);
            }
            u.currentTarget = null, n = s;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], s = f.instance, b = f.currentTarget, f = f.listener, s !== n && u.isPropagationStopped())
              break l;
            n = f, u.currentTarget = b;
            try {
              n(u);
            } catch (_) {
              Ku(_);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function I(l, t) {
    var e = t[ic];
    e === void 0 && (e = t[ic] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (W0(t, l, 2, !1), e.add(a));
  }
  function $i(l, t, e) {
    var a = 0;
    t && (a |= 4), W0(
      e,
      l,
      a,
      t
    );
  }
  var Cn = "_reactListening" + Math.random().toString(36).slice(2);
  function ki(l) {
    if (!l[Cn]) {
      l[Cn] = !0, jf.forEach(function(e) {
        e !== "selectionchange" && (Vy.has(e) || $i(e, !1, l), $i(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Cn] || (t[Cn] = !0, $i("selectionchange", !1, t));
    }
  }
  function W0(l, t, e, a) {
    switch (Er(t)) {
      case 2:
        var u = b1;
        break;
      case 8:
        u = S1;
        break;
      default:
        u = df;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function Fi(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var s = c.tag;
              if ((s === 3 || s === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Fe(f), c === null) return;
            if (s = c.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    If(function() {
      var b = n, _ = mc(e), D = [];
      l: {
        var S = Mo.get(l);
        if (S !== void 0) {
          var z = Lu, G = l;
          switch (l) {
            case "keypress":
              if (Qu(e) === 0) break l;
            case "keydown":
            case "keyup":
              z = Yd;
              break;
            case "focusin":
              G = "focus", z = pc;
              break;
            case "focusout":
              G = "blur", z = pc;
              break;
            case "beforeblur":
            case "afterblur":
              z = pc;
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
              z = to;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = _d;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = jd;
              break;
            case Eo:
            case Ao:
            case _o:
              z = Od;
              break;
            case xo:
              z = Zd;
              break;
            case "scroll":
            case "scrollend":
              z = Ed;
              break;
            case "wheel":
              z = Vd;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Ud;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = ao;
              break;
            case "toggle":
            case "beforetoggle":
              z = Kd;
          }
          var Z = (t & 4) !== 0, rl = !Z && (l === "scroll" || l === "scrollend"), h = Z ? S !== null ? S + "Capture" : null : S;
          Z = [];
          for (var d = b, g; d !== null; ) {
            var O = d;
            if (g = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || g === null || h === null || (O = Qa(d, h), O != null && Z.push(
              pu(d, O, g)
            )), rl) break;
            d = d.return;
          }
          0 < Z.length && (S = new z(
            S,
            G,
            null,
            e,
            _
          ), D.push({ event: S, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", z = l === "mouseout" || l === "pointerout", S && e !== yc && (G = e.relatedTarget || e.fromElement) && (Fe(G) || G[ke]))
            break l;
          if ((z || S) && (S = _.window === _ ? _ : (S = _.ownerDocument) ? S.defaultView || S.parentWindow : window, z ? (G = e.relatedTarget || e.toElement, z = b, G = G ? Fe(G) : null, G !== null && (rl = M(G), Z = G.tag, G !== rl || Z !== 5 && Z !== 27 && Z !== 6) && (G = null)) : (z = null, G = b), z !== G)) {
            if (Z = to, O = "onMouseLeave", h = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (Z = ao, O = "onPointerLeave", h = "onPointerEnter", d = "pointer"), rl = z == null ? S : ja(z), g = G == null ? S : ja(G), S = new Z(
              O,
              d + "leave",
              z,
              e,
              _
            ), S.target = rl, S.relatedTarget = g, O = null, Fe(_) === b && (Z = new Z(
              h,
              d + "enter",
              G,
              e,
              _
            ), Z.target = g, Z.relatedTarget = rl, O = Z), rl = O, z && G)
              t: {
                for (Z = wy, h = z, d = G, g = 0, O = h; O; O = Z(O))
                  g++;
                O = 0;
                for (var Q = d; Q; Q = Z(Q))
                  O++;
                for (; 0 < g - O; )
                  h = Z(h), g--;
                for (; 0 < O - g; )
                  d = Z(d), O--;
                for (; g--; ) {
                  if (h === d || d !== null && h === d.alternate) {
                    Z = h;
                    break t;
                  }
                  h = Z(h), d = Z(d);
                }
                Z = null;
              }
            else Z = null;
            z !== null && $0(
              D,
              S,
              z,
              Z,
              !1
            ), G !== null && rl !== null && $0(
              D,
              rl,
              G,
              Z,
              !0
            );
          }
        }
        l: {
          if (S = b ? ja(b) : window, z = S.nodeName && S.nodeName.toLowerCase(), z === "select" || z === "input" && S.type === "file")
            var el = ro;
          else if (oo(S))
            if (yo)
              el = ey;
            else {
              el = ly;
              var X = Pd;
            }
          else
            z = S.nodeName, !z || z.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && dc(b.elementType) && (el = ro) : el = ty;
          if (el && (el = el(l, b))) {
            so(
              D,
              el,
              e,
              _
            );
            break l;
          }
          X && X(l, S, b), l === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && rc(S, "number", S.value);
        }
        switch (X = b ? ja(b) : window, l) {
          case "focusin":
            (oo(X) || X.contentEditable === "true") && (ca = X, xc = b, $a = null);
            break;
          case "focusout":
            $a = xc = ca = null;
            break;
          case "mousedown":
            Mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mc = !1, zo(D, e, _);
            break;
          case "selectionchange":
            if (uy) break;
          case "keydown":
          case "keyup":
            zo(D, e, _);
        }
        var W;
        if (Tc)
          l: {
            switch (l) {
              case "compositionstart":
                var ll = "onCompositionStart";
                break l;
              case "compositionend":
                ll = "onCompositionEnd";
                break l;
              case "compositionupdate":
                ll = "onCompositionUpdate";
                break l;
            }
            ll = void 0;
          }
        else
          na ? io(l, e) && (ll = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (ll = "onCompositionStart");
        ll && (uo && e.locale !== "ko" && (na || ll !== "onCompositionStart" ? ll === "onCompositionEnd" && na && (W = Pf()) : (ie = _, gc = "value" in ie ? ie.value : ie.textContent, na = !0)), X = Nn(b, ll), 0 < X.length && (ll = new eo(
          ll,
          l,
          null,
          e,
          _
        ), D.push({ event: ll, listeners: X }), W ? ll.data = W : (W = fo(e), W !== null && (ll.data = W)))), (W = Wd ? $d(l, e) : kd(l, e)) && (ll = Nn(b, "onBeforeInput"), 0 < ll.length && (X = new eo(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          _
        ), D.push({
          event: X,
          listeners: ll
        }), X.data = W)), Qy(
          D,
          l,
          b,
          e,
          _
        );
      }
      J0(D, t);
    });
  }
  function pu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Nn(l, t) {
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
  function wy(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function $0(l, t, e, a, u) {
    for (var n = t._reactName, c = []; e !== null && e !== a; ) {
      var f = e, s = f.alternate, b = f.stateNode;
      if (f = f.tag, s !== null && s === a) break;
      f !== 5 && f !== 26 && f !== 27 || b === null || (s = b, u ? (b = Qa(e, n), b != null && c.unshift(
        pu(e, b, s)
      )) : u || (b = Qa(e, n), b != null && c.push(
        pu(e, b, s)
      ))), e = e.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Ky = /\r\n?/g, Jy = /\u0000|\uFFFD/g;
  function k0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ky, `
`).replace(Jy, "");
  }
  function F0(l, t) {
    return t = k0(t), k0(l) === t;
  }
  function sl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ea(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ea(l, "" + a);
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
        kf(l, a, n);
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
        a = Xu("" + a), l.setAttribute(e, a);
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
          typeof n == "function" && (e === "formAction" ? (t !== "input" && sl(l, t, "name", u.name, u, null), sl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), sl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), sl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (sl(l, t, "encType", u.encType, u, null), sl(l, t, "method", u.method, u, null), sl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Xu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
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
        e = Xu("" + a), l.setAttributeNS(
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
        I("beforetoggle", l), I("toggle", l), qu(l, "popover", a);
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
        qu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = zd.get(e) || e, qu(l, e, a));
    }
  }
  function Ii(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        kf(l, a, n);
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
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
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
        if (!Qf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : qu(l, e, a);
          }
    }
  }
  function jl(l, t, e) {
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
        I("error", l), I("load", l);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
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
                  sl(l, t, n, c, e, null);
              }
          }
        u && sl(l, t, "srcSet", e.srcSet, e, null), a && sl(l, t, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", l);
        var f = n = c = u = null, s = null, b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var _ = e[a];
            if (_ != null)
              switch (a) {
                case "name":
                  u = _;
                  break;
                case "type":
                  c = _;
                  break;
                case "checked":
                  s = _;
                  break;
                case "defaultChecked":
                  b = _;
                  break;
                case "value":
                  n = _;
                  break;
                case "defaultValue":
                  f = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(o(137, t));
                  break;
                default:
                  sl(l, t, a, _, e, null);
              }
          }
        Kf(
          l,
          n,
          f,
          s,
          b,
          c,
          u,
          !1
        );
        return;
      case "select":
        I("invalid", l), a = c = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (f = e[u], f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                sl(l, t, u, f, e, null);
            }
        t = n, e = c, l.multiple = !!a, t != null ? ta(l, !!a, t, !1) : e != null && ta(l, !!a, e, !0);
        return;
      case "textarea":
        I("invalid", l), n = u = a = null;
        for (c in e)
          if (e.hasOwnProperty(c) && (f = e[c], f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                sl(l, t, c, f, e, null);
            }
        Wf(l, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : sl(l, t, s, a, e, null));
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Su.length; a++)
          I(Su[a], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
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
        for (b in e)
          if (e.hasOwnProperty(b) && (a = e[b], a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                sl(l, t, b, a, e, null);
            }
        return;
      default:
        if (dc(t)) {
          for (_ in e)
            e.hasOwnProperty(_) && (a = e[_], a !== void 0 && Ii(
              l,
              t,
              _,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && (a = e[f], a != null && sl(l, t, f, a, e, null));
  }
  function Wy(l, t, e, a) {
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
        var u = null, n = null, c = null, f = null, s = null, b = null, _ = null;
        for (z in e) {
          var D = e[z];
          if (e.hasOwnProperty(z) && D != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = D;
              default:
                a.hasOwnProperty(z) || sl(l, t, z, null, a, D);
            }
        }
        for (var S in a) {
          var z = a[S];
          if (D = e[S], a.hasOwnProperty(S) && (z != null || D != null))
            switch (S) {
              case "type":
                n = z;
                break;
              case "name":
                u = z;
                break;
              case "checked":
                b = z;
                break;
              case "defaultChecked":
                _ = z;
                break;
              case "value":
                c = z;
                break;
              case "defaultValue":
                f = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                z !== D && sl(
                  l,
                  t,
                  S,
                  z,
                  a,
                  D
                );
            }
        }
        sc(
          l,
          c,
          f,
          s,
          b,
          _,
          n,
          u
        );
        return;
      case "select":
        z = c = f = S = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                z = s;
              default:
                a.hasOwnProperty(n) || sl(
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
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== s && sl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  s
                );
            }
        t = f, e = c, a = z, S != null ? ta(l, !!e, S, !1) : !!a != !!e && (t != null ? ta(l, !!e, t, !0) : ta(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        z = S = null;
        for (f in e)
          if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                sl(l, t, f, null, a, u);
            }
        for (c in a)
          if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
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
                u !== n && sl(l, t, c, u, a, n);
            }
        Jf(l, S, z);
        return;
      case "option":
        for (var G in e)
          S = e[G], e.hasOwnProperty(G) && S != null && !a.hasOwnProperty(G) && (G === "selected" ? l.selected = !1 : sl(
            l,
            t,
            G,
            null,
            a,
            S
          ));
        for (s in a)
          S = a[s], z = e[s], a.hasOwnProperty(s) && S !== z && (S != null || z != null) && (s === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : sl(
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
        for (var Z in e)
          S = e[Z], e.hasOwnProperty(Z) && S != null && !a.hasOwnProperty(Z) && sl(l, t, Z, null, a, S);
        for (b in a)
          if (S = a[b], z = e[b], a.hasOwnProperty(b) && S !== z && (S != null || z != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                sl(
                  l,
                  t,
                  b,
                  S,
                  a,
                  z
                );
            }
        return;
      default:
        if (dc(t)) {
          for (var rl in e)
            S = e[rl], e.hasOwnProperty(rl) && S !== void 0 && !a.hasOwnProperty(rl) && Ii(
              l,
              t,
              rl,
              void 0,
              a,
              S
            );
          for (_ in a)
            S = a[_], z = e[_], !a.hasOwnProperty(_) || S === z || S === void 0 && z === void 0 || Ii(
              l,
              t,
              _,
              S,
              a,
              z
            );
          return;
        }
    }
    for (var h in e)
      S = e[h], e.hasOwnProperty(h) && S != null && !a.hasOwnProperty(h) && sl(l, t, h, null, a, S);
    for (D in a)
      S = a[D], z = e[D], !a.hasOwnProperty(D) || S === z || S == null && z == null || sl(l, t, D, S, a, z);
  }
  function I0(l) {
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
  function $y() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, c = u.initiatorType, f = u.duration;
        if (n && f && I0(c)) {
          for (c = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], b = s.startTime;
            if (b > f) break;
            var _ = s.transferSize, D = s.initiatorType;
            _ && I0(D) && (s = s.responseEnd, c += _ * (s < f ? 1 : (f - b) / (s - b)));
          }
          if (--a, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Pi = null, lf = null;
  function Bn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function P0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lr(l, t) {
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
  function tf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ef = null;
  function ky() {
    var l = window.event;
    return l && l.type === "popstate" ? l === ef ? !1 : (ef = l, !0) : (ef = null, !1);
  }
  var tr = typeof setTimeout == "function" ? setTimeout : void 0, Fy = typeof clearTimeout == "function" ? clearTimeout : void 0, er = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof er < "u" ? function(l) {
    return er.resolve(null).then(l).catch(Py);
  } : tr;
  function Py(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ae(l) {
    return l === "head";
  }
  function ar(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Ca(t);
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
            var c = n.nextSibling, f = n.nodeName;
            n[Xa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
          }
        } else
          e === "body" && zu(l.ownerDocument.body);
      e = u;
    } while (e);
    Ca(t);
  }
  function ur(l, t) {
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
  function af(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          af(e), fc(e);
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
  function l1(l, t, e, a) {
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
      if (l = xt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function t1(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = xt(l.nextSibling), l === null)) return null;
    return l;
  }
  function nr(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = xt(l.nextSibling), l === null)) return null;
    return l;
  }
  function uf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function nf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function e1(l, t) {
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
  function xt(l) {
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
  var cf = null;
  function cr(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return xt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ir(l) {
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
  function fr(l, t, e) {
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
  function zu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    fc(l);
  }
  var Mt = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Set();
  function qn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ae = p.d;
  p.d = {
    f: a1,
    r: u1,
    D: n1,
    C: c1,
    L: i1,
    m: f1,
    X: s1,
    S: o1,
    M: r1
  };
  function a1() {
    var l = ae.f(), t = Mn();
    return l || t;
  }
  function u1(l) {
    var t = Ie(l);
    t !== null && t.tag === 5 && t.type === "form" ? xs(t) : ae.r(l);
  }
  var Ua = typeof document > "u" ? null : document;
  function sr(l, t, e) {
    var a = Ua;
    if (a && typeof t == "string" && t) {
      var u = St(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), or.has(u) || (or.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), jl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function n1(l) {
    ae.D(l), sr("dns-prefetch", l, null);
  }
  function c1(l, t) {
    ae.C(l, t), sr("preconnect", l, t);
  }
  function i1(l, t, e) {
    ae.L(l, t, e);
    var a = Ua;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + St(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + St(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + St(
        e.imageSizes
      ) + '"]')) : u += '[href="' + St(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ra(l);
          break;
        case "script":
          n = Ha(l);
      }
      Mt.has(n) || (l = B(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Mt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Tu(n)) || t === "script" && a.querySelector(Eu(n)) || (t = a.createElement("link"), jl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function f1(l, t) {
    ae.m(l, t);
    var e = Ua;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ha(l);
      }
      if (!Mt.has(n) && (l = B({ rel: "modulepreload", href: l }, t), Mt.set(n, l), e.querySelector(u) === null)) {
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
        a = e.createElement("link"), jl(a, "link", l), Hl(a), e.head.appendChild(a);
      }
    }
  }
  function o1(l, t, e) {
    ae.S(l, t, e);
    var a = Ua;
    if (a && l) {
      var u = Pe(a).hoistableStyles, n = Ra(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Tu(n)
        ))
          f.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Mt.get(n)) && ff(l, e);
          var s = c = a.createElement("link");
          Hl(s), jl(s, "link", l), s._p = new Promise(function(b, _) {
            s.onload = b, s.onerror = _;
          }), s.addEventListener("load", function() {
            f.loading |= 1;
          }), s.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Yn(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, u.set(n, c);
      }
    }
  }
  function s1(l, t) {
    ae.X(l, t);
    var e = Ua;
    if (e && l) {
      var a = Pe(e).hoistableScripts, u = Ha(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = B({ src: l, async: !0 }, t), (t = Mt.get(u)) && of(l, t), n = e.createElement("script"), Hl(n), jl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function r1(l, t) {
    ae.M(l, t);
    var e = Ua;
    if (e && l) {
      var a = Pe(e).hoistableScripts, u = Ha(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = B({ src: l, async: !0, type: "module" }, t), (t = Mt.get(u)) && of(l, t), n = e.createElement("script"), Hl(n), jl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function rr(l, t, e, a) {
    var u = (u = k.current) ? qn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ra(e.href), e = Pe(
          u
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ra(e.href);
          var n = Pe(
            u
          ).hoistableStyles, c = n.get(l);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = u.querySelector(
            Tu(l)
          )) && !n._p && (c.instance = n, c.state.loading = 5), Mt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Mt.set(l, e), n || d1(
            u,
            l,
            e,
            c.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ha(e), e = Pe(
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
  function Ra(l) {
    return 'href="' + St(l) + '"';
  }
  function Tu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function dr(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function d1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), jl(t, "link", e), Hl(t), l.head.appendChild(t));
  }
  function Ha(l) {
    return '[src="' + St(l) + '"]';
  }
  function Eu(l) {
    return "script[async]" + l;
  }
  function yr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + St(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var u = B({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), jl(a, "style", u), Yn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Ra(e.href);
          var n = l.querySelector(
            Tu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = dr(e), (u = Mt.get(u)) && ff(a, u), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var c = n;
          return c._p = new Promise(function(f, s) {
            c.onload = f, c.onerror = s;
          }), jl(n, "link", a), t.state.loading |= 4, Yn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ha(e.src), (u = l.querySelector(
            Eu(n)
          )) ? (t.instance = u, Hl(u), u) : (a = e, (u = Mt.get(n)) && (a = B({}, e), of(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Hl(u), jl(u, "link", a), l.head.appendChild(u), t.instance = u);
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
    ), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function of(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Gn = null;
  function mr(l, t, e) {
    if (Gn === null) {
      var a = /* @__PURE__ */ new Map(), u = Gn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Gn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Xa] || n[ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function hr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function y1(l, t, e) {
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
  function vr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function m1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Ra(a.href), n = t.querySelector(
          Tu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Xn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = dr(a), (u = Mt.get(u)) && ff(a, u), n = n.createElement("link"), Hl(n);
        var c = n;
        c._p = new Promise(function(f, s) {
          c.onload = f, c.onerror = s;
        }), jl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Xn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var sf = 0;
  function h1(l, t) {
    return l.stylesheets && l.count === 0 && Qn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Qn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && sf === 0 && (sf = 62500 * $y());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Qn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > sf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var jn = null;
  function Qn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, jn = /* @__PURE__ */ new Map(), t.forEach(v1, l), jn = null, Xn.call(l));
  }
  function v1(l, t) {
    if (!(t.state.loading & 4)) {
      var e = jn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), jn.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Xn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Au = {
    $$typeof: _l,
    Provider: null,
    Consumer: null,
    _currentValue: v,
    _currentValue2: v,
    _threadCount: 0
  };
  function g1(l, t, e, a, u, n, c, f, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = uc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uc(0), this.hiddenUpdates = uc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gr(l, t, e, a, u, n, c, f, s, b, _, D) {
    return l = new g1(
      l,
      t,
      e,
      c,
      s,
      b,
      _,
      D,
      f
    ), t = 1, n === !0 && (t |= 24), n = ot(3, null, null, t), l.current = n, n.stateNode = l, t = Zc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Kc(n), l;
  }
  function br(l) {
    return l ? (l = oa, l) : oa;
  }
  function Sr(l, t, e, a, u, n) {
    u = br(u), a.context === null ? a.context = u : a.pendingContext = u, a = ye(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = me(l, a, t), e !== null && (Pl(e, l, t), eu(e, l, t));
  }
  function pr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function rf(l, t) {
    pr(l, t), (l = l.alternate) && pr(l, t);
  }
  function zr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = qe(l, 67108864);
      t !== null && Pl(t, l, 67108864), rf(l, 67108864);
    }
  }
  function Tr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = nc(t);
      var e = qe(l, t);
      e !== null && Pl(e, l, t), rf(l, t);
    }
  }
  var Zn = !0;
  function b1(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = p.p;
    try {
      p.p = 2, df(l, t, e, a);
    } finally {
      p.p = n, x.T = u;
    }
  }
  function S1(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = p.p;
    try {
      p.p = 8, df(l, t, e, a);
    } finally {
      p.p = n, x.T = u;
    }
  }
  function df(l, t, e, a) {
    if (Zn) {
      var u = yf(a);
      if (u === null)
        Fi(
          l,
          t,
          a,
          Ln,
          e
        ), Ar(l, a);
      else if (z1(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (Ar(l, a), t & 4 && -1 < p1.indexOf(l)) {
        for (; u !== null; ) {
          var n = Ie(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = Re(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var s = 1 << 31 - it(c);
                      f.entanglements[1] |= s, c &= ~s;
                    }
                    Yt(n), (ul & 6) === 0 && (_n = nt() + 500, bu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qe(n, 2), f !== null && Pl(f, n, 2), Mn(), rf(n, 2);
            }
          if (n = yf(a), n === null && Fi(
            l,
            t,
            a,
            Ln,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        Fi(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function yf(l) {
    return l = mc(l), mf(l);
  }
  var Ln = null;
  function mf(l) {
    if (Ln = null, l = Fe(l), l !== null) {
      var t = M(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = U(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = j(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Ln = l, null;
  }
  function Er(l) {
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
        switch (nd()) {
          case Uf:
            return 2;
          case Rf:
            return 8;
          case Ru:
          case cd:
            return 32;
          case Hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, _e = null, xe = null, Me = null, _u = /* @__PURE__ */ new Map(), xu = /* @__PURE__ */ new Map(), Oe = [], p1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ar(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        _e = null;
        break;
      case "dragenter":
      case "dragleave":
        xe = null;
        break;
      case "mouseover":
      case "mouseout":
        Me = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xu.delete(t.pointerId);
    }
  }
  function Mu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Ie(t), t !== null && zr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function z1(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return _e = Mu(
          _e,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return xe = Mu(
          xe,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Me = Mu(
          Me,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return _u.set(
          n,
          Mu(
            _u.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, xu.set(
          n,
          Mu(
            xu.get(n) || null,
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
  function _r(l) {
    var t = Fe(l.target);
    if (t !== null) {
      var e = M(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = U(e), t !== null) {
            l.blockedOn = t, Gf(l.priority, function() {
              Tr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = j(e), t !== null) {
            l.blockedOn = t, Gf(l.priority, function() {
              Tr(e);
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
      var e = yf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        yc = a, e.target.dispatchEvent(a), yc = null;
      } else
        return t = Ie(e), t !== null && zr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function xr(l, t, e) {
    Vn(l) && e.delete(t);
  }
  function T1() {
    hf = !1, _e !== null && Vn(_e) && (_e = null), xe !== null && Vn(xe) && (xe = null), Me !== null && Vn(Me) && (Me = null), _u.forEach(xr), xu.forEach(xr);
  }
  function wn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, hf || (hf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      T1
    )));
  }
  var Kn = null;
  function Mr(l) {
    Kn !== l && (Kn = l, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Kn === l && (Kn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (mf(a || e) === null)
              continue;
            break;
          }
          var n = Ie(e);
          n !== null && (l.splice(t, 3), t -= 3, di(
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
  function Ca(l) {
    function t(s) {
      return wn(s, l);
    }
    _e !== null && wn(_e, l), xe !== null && wn(xe, l), Me !== null && wn(Me, l), _u.forEach(t), xu.forEach(t);
    for (var e = 0; e < Oe.length; e++) {
      var a = Oe[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Oe.length && (e = Oe[0], e.blockedOn === null); )
      _r(e), e.blockedOn === null && Oe.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[Jl] || null;
        if (typeof n == "function")
          c || Mr(e);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[Jl] || null)
              f = c.formAction;
            else if (mf(u) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Mr(e);
        }
      }
  }
  function Or() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(c) {
            return u = c;
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
  function vf(l) {
    this._internalRoot = l;
  }
  Jn.prototype.render = vf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = mt();
    Sr(e, a, l, t, null, null);
  }, Jn.prototype.unmount = vf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Sr(l.current, 2, null, l, null, null), Mn(), t[ke] = null;
    }
  };
  function Jn(l) {
    this._internalRoot = l;
  }
  Jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Yf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Oe.length && t !== 0 && t < Oe[e].priority; e++) ;
      Oe.splice(e, 0, l), e === 0 && _r(l);
    }
  };
  var Dr = m.version;
  if (Dr !== "19.2.4")
    throw Error(
      o(
        527,
        Dr,
        "19.2.4"
      )
    );
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? C(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var E1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wn.isDisabled && Wn.supportsFiber)
      try {
        qa = Wn.inject(
          E1
        ), ct = Wn;
      } catch {
      }
  }
  return Du.createRoot = function(l, t) {
    if (!T(l)) throw Error(o(299));
    var e = !1, a = "", u = qs, n = Ys, c = Gs;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = gr(
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
      c,
      Or
    ), l[ke] = t.current, ki(l), new vf(t);
  }, Du.hydrateRoot = function(l, t, e) {
    if (!T(l)) throw Error(o(299));
    var a = !1, u = "", n = qs, c = Ys, f = Gs, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = gr(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      u,
      s,
      n,
      c,
      f,
      Or
    ), t.context = br(null), e = t.current, a = mt(), a = nc(a), u = ye(a), u.callback = null, me(e, u, a), e = a, t.current.lanes = e, Ga(t, e), Yt(t), l[ke] = t.current, ki(l), new Jn(t);
  }, Du.version = "19.2.4", Du;
}
var Xr;
function C1() {
  if (Xr) return bf.exports;
  Xr = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (m) {
        console.error(m);
      }
  }
  return i(), bf.exports = H1(), bf.exports;
}
var N1 = C1(), lt = xf();
const yl = 8, Kl = 960, ht = 1060, kr = "clawd_ui_block_blast_best", ue = [
  { fill: "#ff7a3d", shade: "#d5481d", glow: "rgba(255,122,61,0.34)", stroke: "#ffb38c" },
  { fill: "#3bb8ee", shade: "#1479bd", glow: "rgba(59,184,238,0.32)", stroke: "#9ce5ff" },
  { fill: "#ffc83d", shade: "#d99312", glow: "rgba(255,200,61,0.32)", stroke: "#ffe397" },
  { fill: "#6bd875", shade: "#309447", glow: "rgba(107,216,117,0.3)", stroke: "#b9f4be" },
  { fill: "#9f72ed", shade: "#6740b6", glow: "rgba(159,114,237,0.3)", stroke: "#d7c3ff" },
  { fill: "#ef648e", shade: "#bd315d", glow: "rgba(239,100,142,0.3)", stroke: "#ffb4cb" }
], Na = [
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
  {
    id: "rect3x2",
    label: "Rect 3x2",
    weight: 3,
    cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }]
  },
  {
    id: "square3",
    label: "Square 3",
    weight: 2,
    cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
  },
  { id: "corner5", label: "Big L", weight: 3, cells: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }] },
  { id: "t5", label: "T 5", weight: 2, cells: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }] }
];
let jr = null;
function Qr(i, m, y) {
  return Math.max(m, Math.min(y, i));
}
function Xt(i, m) {
  return i * yl + m;
}
function Fn(i) {
  const m = i * 1664525 + 1013904223 >>> 0;
  return m === 0 ? 1 : m;
}
function Gt() {
  if (typeof window > "u") return { width: 1280, height: 900 };
  const i = window.visualViewport;
  return {
    width: Math.round(i?.width ?? window.innerWidth),
    height: Math.round(i?.height ?? window.innerHeight)
  };
}
function Zr(i) {
  const m = i;
  return i.fullscreenElement ?? m.webkitFullscreenElement ?? null;
}
function B1(i) {
  if (!i) return !1;
  const m = i;
  return typeof m.requestFullscreen == "function" || typeof m.webkitRequestFullscreen == "function";
}
async function q1(i) {
  const m = i;
  return typeof m.requestFullscreen == "function" ? (await m.requestFullscreen(), !0) : typeof m.webkitRequestFullscreen == "function" ? (await m.webkitRequestFullscreen(), !0) : !1;
}
async function Lr(i) {
  const m = i;
  return typeof i.exitFullscreen == "function" ? (await i.exitFullscreen(), !0) : typeof m.webkitExitFullscreen == "function" ? (await m.webkitExitFullscreen(), !0) : !1;
}
function Fr(i) {
  const m = Fn(i);
  return [m, m / 4294967295];
}
function Y1() {
  if (typeof globalThis.crypto < "u" && typeof globalThis.crypto.getRandomValues == "function") {
    const o = new Uint32Array(1);
    return globalThis.crypto.getRandomValues(o), Fn(o[0] || 1);
  }
  const i = typeof Date < "u" ? Date.now() >>> 0 : 0, m = typeof performance < "u" ? Math.floor(performance.now() * 1e3) >>> 0 : 0, y = Math.floor(Math.random() * 4294967295) >>> 0;
  return Fn(i ^ m ^ y || 1);
}
function G1() {
  if (typeof window > "u") return 0;
  const i = window.localStorage.getItem(kr), m = i == null ? 0 : Number.parseInt(i, 10);
  return Number.isFinite(m) ? Math.max(0, m) : 0;
}
function X1(i) {
  typeof window < "u" && window.localStorage.setItem(kr, String(i));
}
function j1(i) {
  const m = [];
  for (let y = 0; y < yl; y += 1) {
    let o = "";
    for (let T = 0; T < yl; T += 1)
      o += i[Xt(y, T)] ? "#" : ".";
    m.push(o);
  }
  return m;
}
function Q1() {
  return Array.from({ length: yl * yl }, () => null);
}
function $e(i, m = !1) {
  const y = m && !i, o = i ? 700 : y ? 760 : 700, T = o / yl, M = (Kl - o) / 2, U = i ? 58 : y ? 52 : 68, j = i ? 820 : y ? 850 : 820, R = i ? 254 : y ? 210 : 250, E = i ? 220 : y ? 174 : 210, C = y ? 12 : 20, B = (Kl - R * 3 - C * 2) / 2;
  return {
    boardX: M,
    boardY: U,
    boardSize: o,
    cell: T,
    trayY: j,
    slots: [
      { x: B, y: j, w: R, h: E },
      { x: B + R + C, y: j, w: R, h: E },
      { x: B + (R + C) * 2, y: j, w: R, h: E }
    ]
  };
}
function Z1(i) {
  return {
    width: Math.max(...i.map((m) => m.x)) + 1,
    height: Math.max(...i.map((m) => m.y)) + 1
  };
}
function Ef(i, m, y) {
  const o = Z1(i.cells);
  return {
    id: `${i.id}::${y}`,
    templateId: i.id,
    label: i.label,
    cells: i.cells.map((T) => ({ ...T })),
    width: o.width,
    height: o.height,
    points: i.cells.length * 10,
    color: m
  };
}
function L1(i) {
  const m = Na.reduce((M, U) => M + U.weight, 0), [y, o] = Fr(i);
  let T = o * m;
  for (const M of Na)
    if (T -= M.weight, T <= 0)
      return [y, M];
  return [y, Na[Na.length - 1]];
}
function V1(i) {
  const [m, y] = Fr(i), o = Math.min(ue.length - 1, Math.floor(y * ue.length));
  return [m, ue[o]];
}
function w1(i) {
  let m = i, y, o;
  return [m, y] = L1(m), [m, o] = V1(m), [Ef(y, o, m.toString(16)), m];
}
function K1(i, m) {
  let y = i;
  for (let M = 0; M < 6; M += 1) {
    const [U, j] = _f([], y), R = U.map((E) => E.templateId).join(",");
    if (R !== m || M === 5)
      return [U, j, R];
    y = Fn(j ^ (M + 1) * 2654435769 >>> 0 || 1);
  }
  const [o, T] = _f([], y);
  return [o, T, o.map((M) => M.templateId).join(",")];
}
function Mf(i, m, y, o) {
  for (const T of m.cells) {
    const M = y + T.y, U = o + T.x;
    if (M < 0 || M >= yl || U < 0 || U >= yl || i[Xt(M, U)])
      return !1;
  }
  return !0;
}
function J1(i, m) {
  for (let y = 0; y <= yl - m.height; y += 1)
    for (let o = 0; o <= yl - m.width; o += 1)
      if (Mf(i, m, y, o))
        return !0;
  return !1;
}
function Ir(i, m) {
  return m.reduce((y, o) => y + (J1(i, o) ? 1 : 0), 0);
}
function Pr(i) {
  const m = [], y = [];
  for (let o = 0; o < yl; o += 1) {
    let T = !0;
    for (let M = 0; M < yl; M += 1)
      if (!i[Xt(o, M)]) {
        T = !1;
        break;
      }
    T && m.push(o);
  }
  for (let o = 0; o < yl; o += 1) {
    let T = !0;
    for (let M = 0; M < yl; M += 1)
      if (!i[Xt(M, o)]) {
        T = !1;
        break;
      }
    T && y.push(o);
  }
  return { rows: m, cols: y };
}
function W1(i, m, y, o) {
  const T = i.cells.map((R) => ({ row: m + R.y, col: y + R.x }));
  if (!Mf(o, i, m, y))
    return { pieceId: i.id, row: m, col: y, cells: T, canPlace: !1, rows: [], cols: [] };
  const U = [...o];
  for (const R of i.cells)
    U[Xt(m + R.y, y + R.x)] = i.color;
  const j = Pr(U);
  return { pieceId: i.id, row: m, col: y, cells: T, canPlace: !0, rows: j.rows, cols: j.cols };
}
function Af(i, m, y, o, T) {
  const M = i.cell * 1.2;
  if (!(y >= i.boardX - M && y <= i.boardX + i.boardSize + M && o >= i.boardY - M && o <= i.boardY + i.boardSize + M))
    return null;
  const U = Qr(Math.round((y - i.boardX) / i.cell - m.width / 2), 0, yl - m.width), j = Qr(Math.round((o - i.boardY) / i.cell - m.height / 2), 0, yl - m.height);
  return W1(m, j, U, T);
}
function ld(i, m, y, o, T = "mouse") {
  const M = T === "touch" || T === "pen", U = i.cell * (M ? 1.3 + m.height * 0.5 : 0.62);
  return { x: y, y: o - U };
}
function Vr(i, m, y, o, T, M = "mouse") {
  const U = ld(i, m, y, o, M);
  return Af(i, m, U.x, U.y, T);
}
function _f(i, m) {
  if (i.length > 0)
    return [i, m];
  const y = [];
  let o = m;
  for (; y.length < 3; ) {
    let T;
    [T, o] = w1(o), !(y.filter((M) => M.templateId === T.templateId).length >= 2) && y.push(T);
  }
  return [y, o];
}
function vt(i, m, y, o, T, M) {
  const U = Math.min(M, o / 2, T / 2);
  i.beginPath(), i.moveTo(m + U, y), i.arcTo(m + o, y, m + o, y + T, U), i.arcTo(m + o, y + T, m, y + T, U), i.arcTo(m, y + T, m, y, U), i.arcTo(m, y, m + o, y, U), i.closePath();
}
function $n(i, m, y, o, T, M) {
  const U = M?.alpha ?? 1, j = Math.max(3, o * 0.075), R = o * 0.18;
  M?.glow && (i.save(), i.globalAlpha = U * 0.58, i.shadowColor = T.glow, i.shadowBlur = 20, vt(i, m, y, o, o, R), i.fillStyle = T.fill, i.fill(), i.restore()), i.save(), i.globalAlpha = U, vt(i, m, y, o, o, R);
  const E = i.createLinearGradient(m, y, m, y + o);
  E.addColorStop(0, T.stroke), E.addColorStop(0.16, T.fill), E.addColorStop(0.76, T.fill), E.addColorStop(1, T.shade), i.fillStyle = E, i.fill(), vt(i, m + j, y + j, o - j * 2, o * 0.24, o * 0.1);
  const C = i.createLinearGradient(m, y, m, y + o * 0.34);
  C.addColorStop(0, "rgba(255,255,255,0.48)"), C.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = C, i.fill(), i.lineWidth = Math.max(1.5, o * 0.035), i.strokeStyle = M?.outline ?? "rgba(255,255,255,0.2)", vt(i, m + 1, y + 1, o - 2, o - 2, R), i.stroke(), i.restore();
}
function $1(i, m) {
  const y = i.createLinearGradient(0, 0, 0, ht);
  y.addColorStop(0, "#1269bf"), y.addColorStop(0.52, "#084890"), y.addColorStop(1, "#052d68"), i.fillStyle = y, i.fillRect(0, 0, Kl, ht);
  const o = i.createRadialGradient(Kl * 0.18, ht * 0.12, 0, Kl * 0.18, ht * 0.12, 260);
  o.addColorStop(0, "rgba(151,226,255,0.34)"), o.addColorStop(1, "rgba(151,226,255,0)"), i.fillStyle = o, i.fillRect(0, 0, Kl, ht);
  const T = i.createRadialGradient(Kl * 0.82, ht * 0.18, 0, Kl * 0.82, ht * 0.18, 280);
  T.addColorStop(0, "rgba(255,213,105,0.18)"), T.addColorStop(1, "rgba(255,213,105,0)"), i.fillStyle = T, i.fillRect(0, 0, Kl, ht), i.save(), i.globalAlpha = m ? 0.16 : 0.1;
  for (let M = 0; M < 13; M += 1)
    for (let U = 0; U < 11; U += 1) {
      const j = U * 96 + M % 2 * 18, R = M * 90;
      i.fillStyle = "rgba(255,255,255,0.08)", vt(i, j, R, 46, 46, 13), i.fill();
    }
  i.restore();
}
function k1(i, m) {
  const y = $e(i.fullscreen, i.compact);
  for (const o of m) {
    const T = y.boardX + o.col * y.cell + y.cell / 2, M = y.boardY + o.row * y.cell + y.cell / 2;
    for (let U = 0; U < 3; U += 1) {
      const j = (U + 1) / 3 * Math.PI * 2 + i.time * 3e-3;
      i.particles.push({
        x: T,
        y: M,
        vx: Math.cos(j) * (1.2 + U * 0.5),
        vy: Math.sin(j) * (1.1 + U * 0.45) - 1.2,
        life: 420 + U * 60,
        maxLife: 420 + U * 60,
        color: o.color.fill,
        size: 8 + U * 2
      });
    }
  }
}
function wr(i, m) {
  i.time += m, i.flash > 0 && (i.flash = Math.max(0, i.flash - m / 220), i.flash === 0 && (i.flashRows = [], i.flashCols = []));
  const y = [];
  for (const o of i.particles)
    o.life -= m, !(o.life <= 0) && (o.x += o.vx * (m / 16), o.y += o.vy * (m / 16), o.vy += 0.03 * (m / 16), y.push(o));
  i.particles = y;
}
function kn(i, m, y) {
  const [o, T, M] = K1(Y1(), jr);
  jr = M;
  const U = Q1();
  return {
    mode: i,
    board: U,
    tray: o,
    selectedPieceId: null,
    preview: null,
    drag: null,
    particles: [],
    score: 0,
    bestScore: G1(),
    combo: 0,
    clears: 0,
    placements: 0,
    message: "Drag a piece onto the board. Complete a row or column to clear it.",
    rng: T,
    time: 0,
    flash: 0,
    flashRows: [],
    flashCols: [],
    fullscreen: m,
    compact: y,
    movesAvailable: Ir(U, o)
  };
}
function Kr(i) {
  const m = i.selectedPieceId ? i.tray.find((y) => y.id === i.selectedPieceId) ?? null : null;
  return {
    mode: i.mode,
    score: i.score,
    bestScore: i.bestScore,
    combo: i.combo,
    clears: i.clears,
    placements: i.placements,
    selectedPiece: m ? m.label : null,
    movesAvailable: i.movesAvailable,
    fullscreen: i.fullscreen,
    message: i.message
  };
}
function F1(i) {
  const m = i.selectedPieceId ? i.tray.find((o) => o.id === i.selectedPieceId) ?? null : null, y = i.preview ? `${i.preview.row},${i.preview.col} ${i.preview.canPlace ? "ok" : "blocked"}` : "none";
  return [
    `mode=${i.mode}`,
    `score=${i.score}`,
    `best=${i.bestScore}`,
    `combo=${i.combo}`,
    `clears=${i.clears}`,
    `placements=${i.placements}`,
    `moves=${i.movesAvailable}`,
    `selected=${m ? m.templateId : "none"}`,
    `fullscreen=${i.fullscreen}`,
    `tray=${i.tray.map((o, T) => `${T + 1}:${o.templateId}[${o.cells.map((M) => `${M.x}:${M.y}`).join("|")}]`).join(",") || "empty"}`,
    `drag=${i.drag ? `${i.drag.pointerType}@${Math.round(i.drag.x)},${Math.round(i.drag.y)}` : "none"}`,
    `preview=${y}`,
    `message=${i.message}`,
    "board:",
    ...j1(i.board)
  ].join(`
`);
}
function Jr(i, m) {
  const y = i.tray.findIndex((C) => C.id === m.pieceId);
  if (y === -1)
    return;
  const o = i.tray[y];
  if (!Mf(i.board, o, m.row, m.col)) {
    i.message = "That spot is blocked.", i.preview = null, i.drag = null;
    return;
  }
  for (const C of o.cells)
    i.board[Xt(m.row + C.y, m.col + C.x)] = o.color;
  const T = Pr(i.board), M = [], U = /* @__PURE__ */ new Set();
  for (const C of T.rows)
    for (let B = 0; B < yl; B += 1)
      U.add(Xt(C, B));
  for (const C of T.cols)
    for (let B = 0; B < yl; B += 1)
      U.add(Xt(B, C));
  for (const C of U) {
    const B = Math.floor(C / yl), V = C % yl, gl = i.board[C];
    gl && M.push({ row: B, col: V, color: gl }), i.board[C] = null;
  }
  let j = o.points;
  if (T.rows.length + T.cols.length > 0) {
    i.combo += 1;
    const C = T.rows.length + T.cols.length, B = i.combo > 1 ? (i.combo - 1) * 30 : 0;
    j += C * 120 + B, i.clears += C, i.flash = 1, i.flashRows = T.rows, i.flashCols = T.cols, k1(i, M), i.message = i.combo > 1 ? `Combo x${i.combo}! Keep it going.` : `${C} line${C === 1 ? "" : "s"} cleared!`;
  } else
    i.combo = 0, i.flash = 0, i.flashRows = [], i.flashCols = [], i.message = o.cells.length >= 5 ? "Big piece placed. Keep space open." : "Good fit. Build toward a full line.";
  i.score += j, i.score > i.bestScore && (i.bestScore = i.score, X1(i.bestScore)), i.tray.splice(y, 1), i.placements += 1, i.selectedPieceId = null, i.preview = null, i.drag = null;
  let R = i.tray, E = i.rng;
  [R, E] = _f(R, E), i.tray = R, i.rng = E, i.movesAvailable = Ir(i.board, i.tray), i.movesAvailable === 0 && (i.mode = "gameover", i.message = "No space remains for any piece.");
}
function Wr(i, m) {
  const y = $e(m.fullscreen, m.compact);
  i.clearRect(0, 0, Kl, ht), $1(i, m.fullscreen), i.save(), vt(i, y.boardX - 20, y.boardY - 20, y.boardSize + 40, y.boardSize + 40, 32), i.fillStyle = "rgba(3,28,72,0.44)", i.shadowColor = "rgba(2,18,49,0.34)", i.shadowBlur = 28, i.shadowOffsetY = 12, i.fill(), i.restore(), vt(i, y.boardX - 8, y.boardY - 8, y.boardSize + 16, y.boardSize + 16, 24);
  const o = i.createLinearGradient(y.boardX, y.boardY, y.boardX, y.boardY + y.boardSize);
  if (o.addColorStop(0, "rgba(5,48,112,0.98)"), o.addColorStop(1, "rgba(3,35,85,0.98)"), i.fillStyle = o, i.fill(), m.flash > 0) {
    i.save(), i.globalAlpha = m.flash * 0.42, i.fillStyle = "rgba(255,243,179,0.8)";
    for (const T of m.flashRows)
      vt(i, y.boardX, y.boardY + T * y.cell, y.boardSize, y.cell, 12), i.fill();
    for (const T of m.flashCols)
      vt(i, y.boardX + T * y.cell, y.boardY, y.cell, y.boardSize, 12), i.fill();
    i.restore();
  }
  if (m.selectedPieceId && !m.preview) {
    i.save();
    i.globalAlpha = 0.34 + Math.sin(m.time * 0.006) * 0.08;
    i.strokeStyle = "rgba(166,225,255,0.92)";
    i.lineWidth = 2;
    i.setLineDash([6, 10]);
    vt(i, y.boardX + 7, y.boardY + 7, y.boardSize - 14, y.boardSize - 14, 18);
    i.stroke();
    i.setLineDash([]);
    i.restore();
  }
  for (let T = 0; T < yl; T += 1)
    for (let M = 0; M < yl; M += 1) {
      const U = y.boardX + M * y.cell + 3, j = y.boardY + T * y.cell + 3;
      vt(i, U, j, y.cell - 6, y.cell - 6, Math.max(8, y.cell * 0.17)), i.fillStyle = "rgba(4,25,65,0.58)", i.fill(), i.strokeStyle = "rgba(113,179,237,0.12)", i.lineWidth = 1, i.stroke();
    }
  for (let T = 0; T < yl; T += 1)
    for (let M = 0; M < yl; M += 1) {
      const U = m.board[Xt(T, M)];
      U && $n(i, y.boardX + M * y.cell + 5, y.boardY + T * y.cell + 5, y.cell - 10, U, {
        glow: !1
      });
    }
  if (m.preview) {
    const T = m.tray.find((M) => M.id === m.preview?.pieceId) ?? null;
    if (T) {
      if (m.preview.canPlace && (m.preview.rows.length || m.preview.cols.length)) {
        i.save(), i.fillStyle = "rgba(255,232,127,0.14)";
        for (const M of m.preview.rows)
          i.fillRect(y.boardX, y.boardY + M * y.cell, y.boardSize, y.cell);
        for (const M of m.preview.cols)
          i.fillRect(y.boardX + M * y.cell, y.boardY, y.cell, y.boardSize);
        i.restore();
      }
      for (const M of m.preview.cells) {
        const U = y.boardX + M.col * y.cell + 5, j = y.boardY + M.row * y.cell + 5;
        if ($n(i, U, j, y.cell - 10, T.color, {
          alpha: m.preview.canPlace ? 0.62 : 0.42,
          outline: m.preview.canPlace ? "rgba(255,255,255,0.9)" : "rgba(255,112,112,0.95)",
          glow: m.preview.canPlace
        }), !m.preview.canPlace) {
          const R = y.cell - 10, E = R * 0.26;
          i.save(), i.globalAlpha = 0.94, vt(i, U + 1, j + 1, R - 2, R - 2, R * 0.18), i.fillStyle = "rgba(190,31,57,0.72)", i.fill(), i.lineCap = "round", i.lineWidth = Math.max(4, R * 0.065), i.strokeStyle = "#ff6b78", i.stroke(), i.beginPath(), i.strokeStyle = "rgba(255,255,255,0.96)", i.moveTo(U + E, j + E), i.lineTo(U + R - E, j + R - E), i.moveTo(U + R - E, j + E), i.lineTo(U + E, j + R - E), i.stroke(), i.restore();
        }
      }
    }
  }
  for (let T = 0; T < 3; T += 1) {
    const M = y.slots[T], U = m.tray[T], j = U && m.selectedPieceId === U.id;
    if (!U) continue;
    j && (i.save(), i.shadowColor = U.color.glow, i.shadowBlur = 26, i.fillStyle = "rgba(255,255,255,0.12)", vt(i, M.x + 16, M.y + 12, M.w - 32, M.h - 24, 34), i.fill(), i.restore());
    const R = Math.min(58, (M.w - 30) / Math.max(U.width + 0.2, 2), (M.h - 24) / Math.max(U.height + 0.2, 2)), E = U.width * R, C = U.height * R, B = M.x + (M.w - E) / 2, V = M.y + (M.h - C) / 2, gl = m.drag?.pieceId === U.id;
    for (const Sl of U.cells)
      $n(i, B + Sl.x * R, V + Sl.y * R, R - 4, U.color, {
        alpha: gl ? 0.12 : 1,
        glow: j && !gl
      });
  }
  if (m.drag) {
    const T = m.tray.find((M) => M.id === m.drag?.pieceId) ?? null;
    if (T) {
      const M = y.cell * 0.94, U = ld(y, T, m.drag.x, m.drag.y, m.drag.pointerType), j = U.x - T.width * M / 2, R = U.y - T.height * M / 2;
      for (const E of T.cells)
        $n(i, j + E.x * M, R + E.y * M, M - 5, T.color, {
          alpha: 0.94,
          glow: !0
        });
    }
  }
  i.save(), i.textAlign = "center", i.fillStyle = m.preview && !m.preview.canPlace ? "#ffbdc4" : "rgba(239,248,255,0.86)", i.font = '800 18px "Trebuchet MS", sans-serif', i.fillText(m.preview && !m.preview.canPlace ? "BLOCKED - TRY ANOTHER SPOT" : m.drag ? "RELEASE ON THE GLOWING CELLS" : m.selectedPieceId ? "TAP THE BOARD OR DRAG" : "CHOOSE A PIECE", Kl / 2, y.trayY - 22), i.restore();
  for (const T of m.particles)
    i.save(), i.globalAlpha = T.life / T.maxLife, i.fillStyle = T.color, vt(i, T.x - T.size / 2, T.y - T.size / 2, T.size, T.size, T.size / 3), i.fill(), i.restore();
}
function $r(i) {
  return {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.2,
    cursor: "pointer",
    color: i ? "#10214d" : "#eff6ff",
    background: i ? "linear-gradient(180deg, #ffe69a 0%, #ffba49 100%)" : "rgba(255,255,255,0.12)",
    boxShadow: i ? "0 10px 20px rgba(255, 182, 76, 0.25)" : "inset 0 0 0 1px rgba(255,255,255,0.14)"
  };
}
function I1() {
  const i = lt.useRef(null);
  i.current || (i.current = kn("title", !1, typeof window < "u" ? window.innerWidth <= 560 : !1));
  const m = lt.useRef(null), y = lt.useRef(null), o = lt.useRef(i.current), T = lt.useRef("off"), M = lt.useRef(null), [U, j] = lt.useState(() => Kr(i.current)), [R, E] = lt.useState(() => Gt()), [C, B] = lt.useState("off");
  function V() {
    j(Kr(o.current));
  }
  function gl(p) {
    T.current = p, B(p), o.current.fullscreen = p !== "off";
  }
  function Sl(p) {
    if (typeof document > "u") return;
    const v = document.documentElement, H = document.body;
    if (p) {
      M.current || (M.current = {
        htmlOverflow: v.style.overflow,
        bodyOverflow: H.style.overflow,
        htmlOverscroll: v.style.overscrollBehavior,
        bodyOverscroll: H.style.overscrollBehavior
      }), v.style.overflow = "hidden", H.style.overflow = "hidden", v.style.overscrollBehavior = "none", H.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const q = M.current;
    q && (v.style.overflow = q.htmlOverflow, H.style.overflow = q.bodyOverflow, v.style.overscrollBehavior = q.htmlOverscroll, H.style.overscrollBehavior = q.bodyOverscroll, M.current = null);
  }
  function Ul() {
    return typeof window > "u" || typeof navigator > "u" ? !1 : Gt().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent));
  }
  function Ht() {
  }
  function Zl(p) {
    const v = kn(p, o.current.fullscreen, o.current.compact);
    v.bestScore = o.current.bestScore, o.current = v, V();
  }
  function Ot() {
    Zl("playing");
  }
  function _l(p) {
    const v = o.current;
    if (v.mode !== "playing") return;
    const H = v.tray[p] ?? null;
    v.selectedPieceId = H ? H.id : null, v.preview = null, v.message = H ? `Selected ${H.label}` : "No piece in that slot.", V();
  }
  function Ll(p) {
    T.current === "immersive" && (Sl(!1), gl("off"), o.current.compact = Gt().width <= 560, o.current.drag = null, o.current.preview = null, o.current.message = p, E(Gt()), V(), void 0);
  }
  function tt() {
    Sl(!0), gl("immersive"), o.current.compact = !1, o.current.drag = null, o.current.preview = null, o.current.message = "Mobile fullscreen enabled.", E(Gt()), V();
  }
  async function Nl() {
    if (typeof document > "u") return;
    const p = m.current;
    if (p) {
      if (T.current === "immersive") {
        Ll("Exited mobile fullscreen.");
        return;
      }
      try {
        if (Zr(document) === p) {
          await Lr(document);
          return;
        }
        if (B1(p) && await q1(p))
          return;
        if (Ul()) {
          tt();
          return;
        }
      } catch {
        if (Ul()) {
          tt();
          return;
        }
      }
      o.current.message = "Fullscreen is unavailable in this browser.", V();
    }
  }
  function $(p) {
    const v = y.current;
    if (!v) return null;
    const H = v.getBoundingClientRect();
    return !H.width || !H.height ? null : {
      x: (p.clientX - H.left) / H.width * Kl,
      y: (p.clientY - H.top) / H.height * ht
    };
  }
  function Bl(p, v) {
    const H = o.current, q = $e(H.fullscreen, H.compact);
    for (let r = 0; r < q.slots.length; r += 1) {
      const A = q.slots[r];
      if (p >= A.x && p <= A.x + A.w && v >= A.y && v <= A.y + A.h)
        return H.tray[r] ?? null;
    }
    return null;
  }
  lt.useEffect(() => {
    const p = y.current, v = p?.getContext("2d");
    if (!p || !v)
      return;
    let H = 0, q = performance.now();
    const r = (A) => {
      const N = Math.min(34, A - q);
      q = A, wr(o.current, N), Wr(v, o.current), H = window.requestAnimationFrame(r);
    };
    return Wr(v, o.current), H = window.requestAnimationFrame(r), () => window.cancelAnimationFrame(H);
  }, []), lt.useEffect(() => {
    const p = window;
    return p.render_game_to_text = () => F1(o.current), p.advanceTime = (v) => {
      let H = v;
      for (; H > 0; ) {
        const q = Math.min(H, 16);
        wr(o.current, q), H -= q;
      }
      V();
    }, p.__drainVirtualTimePending = () => 0, p.__blockblast_debug_line_clear = () => {
      const v = kn("playing", o.current.fullscreen, o.current.compact), H = Na.find((q) => q.id === "single");
      if (H) {
        for (let q = 0; q < yl - 1; q += 1)
          v.board[Xt(0, q)] = ue[q % ue.length];
        v.tray = [Ef(H, ue[2], "debug-single")], v.movesAvailable = 1, v.message = "Place the single block to finish the glowing row.", o.current = v, V();
      }
    }, p.__blockblast_debug_gameover = () => {
      const v = kn("playing", o.current.fullscreen, o.current.compact), H = Na.find((q) => q.id === "square3");
      H && (v.board = Array.from({ length: yl * yl }, (q, r) => ue[r % ue.length]), v.tray = [Ef(H, ue[4], "debug-square")], v.movesAvailable = 0, v.mode = "gameover", v.message = "No space remains for any piece.", o.current = v, V());
    }, () => {
      delete p.render_game_to_text, delete p.advanceTime, delete p.__drainVirtualTimePending, delete p.__blockblast_debug_line_clear, delete p.__blockblast_debug_gameover;
    };
  }, []), lt.useEffect(() => {
    const p = () => {
      const q = T.current === "off" && Gt().width <= 560;
      o.current.compact !== q && (o.current.compact = q, o.current.preview = null, o.current.drag = null, V()), E(Gt());
    }, v = () => {
      const q = Zr(document) === m.current, r = T.current;
      q ? (Sl(!1), gl("native")) : r === "native" && gl("off"), o.current.compact = T.current === "off" && Gt().width <= 560, o.current.preview = null, o.current.drag = null, E(Gt()), V();
    }, H = () => {
      E(Gt());
    };
    return window.addEventListener("resize", p), document.addEventListener("fullscreenchange", v), window.visualViewport?.addEventListener("resize", H), () => {
      window.removeEventListener("resize", p), document.removeEventListener("fullscreenchange", v), window.visualViewport?.removeEventListener("resize", H);
    };
  }, []), lt.useEffect(
    () => () => {
      Sl(!1);
    },
    []
  ), lt.useEffect(() => {
    const p = (v) => {
      if (v.code === "KeyF") {
        v.preventDefault(), Nl();
        return;
      }
      if (v.code === "KeyN" || v.code === "Enter" && o.current.mode !== "playing") {
        v.preventDefault(), Ot();
        return;
      }
      if (v.code === "Digit1") {
        v.preventDefault(), _l(0);
        return;
      }
      if (v.code === "Digit2") {
        v.preventDefault(), _l(1);
        return;
      }
      if (v.code === "Digit3") {
        v.preventDefault(), _l(2);
        return;
      }
      if (v.code === "Escape" && T.current === "immersive") {
        v.preventDefault(), Ll("Exited mobile fullscreen.");
        return;
      }
      if (v.code === "Escape" && T.current === "native") {
        v.preventDefault(), Lr(document);
        return;
      }
      v.code === "Escape" && o.current.selectedPieceId && (v.preventDefault(), o.current.selectedPieceId = null, o.current.preview = null, o.current.message = "Selection cleared.", V());
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, []);
  const et = Kl / ht, at = C === "immersive", K = C === "off" && R.width <= 560, cl = C !== "off" && R.width <= 820;
  K && U.mode;
  const Ct = Math.max(K ? 280 : 320, R.width - (C === "off" ? K ? 8 : 40 : cl ? 12 : 48)), gt = C !== "off" ? Math.max(420, R.height - (cl ? 184 : 270)) : K ? Math.max(360, R.height - 168) : 980;
  U.mode;
  const ut = C !== "off" ? { color: "#eff6ff", background: "rgba(255,255,255,0.1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.16)" } : { color: "#194f61", background: "rgba(25,79,97,0.08)", boxShadow: "inset 0 0 0 1px rgba(25,79,97,0.16)" }, x = /* @__PURE__ */ ml.jsx(
    "canvas",
    {
      id: "blockblast-canvas",
      ref: y,
      width: Kl,
      height: ht,
      tabIndex: 0,
      role: "application",
      "aria-label": "Block Blast play area. Drag one of three pieces onto empty board cells and complete rows or columns.",
      style: {
        width: "100%",
        height: "100%",
        display: "block",
        borderRadius: U.fullscreen ? 22 : K ? 20 : 24,
        touchAction: "none",
        boxShadow: "0 22px 44px rgba(3, 27, 72, 0.26)",
        cursor: o.current.drag ? "grabbing" : "pointer"
      },
      onPointerDown: (p) => {
        const v = o.current;
        if (v.mode !== "playing") return;
        const H = $(p);
        if (!H) return;
        const q = Bl(H.x, H.y);
        q && (v.selectedPieceId = q.id, v.drag = { pieceId: q.id, startX: H.x, startY: H.y, clientStartX: p.clientX, clientStartY: p.clientY, x: H.x, y: H.y, pointerType: p.pointerType || "mouse" }, v.preview = null, v.message = "Drag onto the board.", y.current?.setPointerCapture?.(p.pointerId), V());
      },
      onPointerMove: (p) => {
        const v = o.current, H = $(p);
        if (!H) return;
        if (!v.drag) {
          const r = v.selectedPieceId ? v.tray.find((A) => A.id === v.selectedPieceId) ?? null : null;
          r && p.pointerType === "mouse" && (v.preview = Af($e(v.fullscreen, v.compact), r, H.x, H.y, v.board));
          return;
        }
        v.drag.x = H.x, v.drag.y = H.y;
        const q = v.tray.find((r) => r.id === v.drag?.pieceId) ?? null;
        v.preview = q ? Vr($e(v.fullscreen, v.compact), q, H.x, H.y, v.board, v.drag.pointerType) : null;
      },
      onPointerUp: (p) => {
        const v = o.current, H = $(p);
        if (!H) return;
        if (v.drag) {
          const N = v.tray.find((k) => k.id === v.drag?.pieceId) ?? null, Y = Math.hypot(p.clientX - v.drag.clientStartX, p.clientY - v.drag.clientStartY) > 6, L = N ? Vr($e(v.fullscreen, v.compact), N, H.x, H.y, v.board, v.drag.pointerType) : null;
          Y && L?.canPlace ? Jr(v, L) : (v.drag = null, v.preview = Y ? L : null, !Y && N ? (v.selectedPieceId = N.id, v.message = `${N.label} selected. Tap the board or drag it.`) : v.message = L ? "That space is blocked. Try another spot." : "Bring the piece closer to the board."), y.current?.releasePointerCapture?.(p.pointerId), V();
          return;
        }
        if (v.mode !== "playing") return;
        const q = Bl(H.x, H.y);
        if (q) {
          v.selectedPieceId = q.id, v.preview = null, v.message = `${q.label} selected. Tap the board or drag it.`, V();
          return;
        }
        const r = v.selectedPieceId ? v.tray.find((N) => N.id === v.selectedPieceId) ?? null : null;
        if (!r) return;
        const A = Af($e(v.fullscreen, v.compact), r, H.x, H.y, v.board);
        A?.canPlace ? Jr(v, A) : (v.message = "That placement does not fit.", v.preview = A), V();
      },
      onPointerCancel: () => {
        const p = o.current;
        p.drag = null, p.preview = null, p.message = "Piece returned to the tray.", V();
      },
      onLostPointerCapture: () => {
        o.current.drag && (o.current.drag = null, o.current.preview = null, V());
      },
      onPointerLeave: () => {
        o.current.drag || (o.current.preview = null);
      }
    }
  );
  return /* @__PURE__ */ ml.jsx("div", { style: { minHeight: at ? "100dvh" : "100%", display: "flex", justifyContent: "center", padding: C !== "off" ? 0 : K ? "4px 0 10px" : "8px 0 18px", background: C !== "off" ? "#073978" : "transparent", position: at ? "fixed" : "relative", inset: at ? 0 : void 0, zIndex: at ? 9999 : void 0, overflow: at ? "hidden" : "visible" }, children: /* @__PURE__ */ ml.jsxs("section", { ref: m, style: { width: "100%", maxWidth: C !== "off" ? "100vw" : 1080, minHeight: C !== "off" ? "100dvh" : void 0, height: at ? "100dvh" : void 0, boxSizing: "border-box", borderRadius: C !== "off" ? 0 : K ? 22 : 26, padding: C !== "off" ? `calc(env(safe-area-inset-top, 0px) + ${cl ? 8 : 14}px) calc(env(safe-area-inset-right, 0px) + ${cl ? 8 : 18}px) calc(env(safe-area-inset-bottom, 0px) + ${cl ? 12 : 18}px) calc(env(safe-area-inset-left, 0px) + ${cl ? 8 : 18}px)` : K ? "10px" : "18px", background: C !== "off" ? "linear-gradient(180deg, #0c56a7 0%, #063576 100%)" : "linear-gradient(145deg, #fffdf8 0%, #f1e9dc 100%)", boxShadow: C !== "off" ? "none" : "0 22px 54px rgba(16,43,54,0.15)", color: C !== "off" ? "#eff6ff" : "#102b36", display: "flex", flexDirection: "column", gap: cl ? 10 : K ? 9 : 14, overflowX: "hidden", overflowY: C !== "off" ? "auto" : "hidden", WebkitOverflowScrolling: "touch", overscrollBehavior: C !== "off" ? "contain" : "auto" }, children: [
    /* @__PURE__ */ ml.jsxs("header", { style: { display: "grid", gridTemplateColumns: K || cl ? "1fr" : "minmax(0, 1fr) auto", gap: K ? 12 : 20, alignItems: "end" }, children: [
      /* @__PURE__ */ ml.jsxs("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ ml.jsx("div", { style: { color: C !== "off" ? "#ffd264" : "#9a462a", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }, children: "Endless block puzzle" }),
        /* @__PURE__ */ ml.jsx("h1", { style: { margin: 0, fontFamily: 'Georgia, "Palatino Linotype", serif', fontSize: C !== "off" ? cl ? 27 : 34 : K ? 30 : 42, lineHeight: 1, letterSpacing: "-0.035em", color: "inherit" }, children: "Block Blast" }),
        /* @__PURE__ */ ml.jsx("p", { style: { margin: "9px 0 0", maxWidth: 680, color: C !== "off" ? "rgba(239,246,255,0.8)" : "#4c636a", fontSize: K ? 12 : 14, lineHeight: 1.5 }, children: "Drag one of three pieces onto the 8 x 8 board. Complete a full row or column to clear it, score points, and keep space open for bigger pieces." })
      ] }),
      /* @__PURE__ */ ml.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, minmax(72px, 1fr))", gap: 7, minWidth: K ? 0 : 286 }, children: [["Score", U.score], ["Best", U.bestScore], ["Lines", U.clears]].map(([p, v]) => /* @__PURE__ */ ml.jsxs("div", { style: { padding: K ? "8px 9px" : "10px 12px", borderRadius: 14, background: C !== "off" ? "rgba(255,255,255,0.1)" : "rgba(16,79,97,0.07)", border: C !== "off" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(16,43,54,0.1)" }, children: [
        /* @__PURE__ */ ml.jsx("div", { style: { fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.62 }, children: p }),
        /* @__PURE__ */ ml.jsx("div", { style: { marginTop: 2, fontSize: K ? 18 : 22, fontWeight: 800 }, children: v })
      ] }, p)) })
    ] }),
    C === "off" && /* @__PURE__ */ ml.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: K ? 6 : 8 }, children: [["1", "Choose a piece"], ["2", "Drag and release"], ["3", "Complete a line"]].map(([p, v]) => /* @__PURE__ */ ml.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: K ? "center" : "flex-start", gap: 7, minWidth: 0, padding: K ? "8px 5px" : "9px 12px", borderRadius: 13, background: "rgba(197,90,50,0.07)", color: "#65473b", fontSize: K ? 10 : 12, fontWeight: 800, textAlign: K ? "center" : "left" }, children: [
      /* @__PURE__ */ ml.jsx("span", { style: { flex: "0 0 auto", display: "grid", placeItems: "center", width: 20, height: 20, borderRadius: 999, background: "#c55a32", color: "#fff", fontSize: 10 }, children: p }),
      /* @__PURE__ */ ml.jsx("span", { children: v })
    ] }, p)) }),
    /* @__PURE__ */ ml.jsx("div", { style: { width: Math.min(C !== "off" ? 900 : K ? 420 : 820, Ct, gt * et), maxWidth: "100%", alignSelf: "center", aspectRatio: `${Kl} / ${ht}` }, children: x }),
    /* @__PURE__ */ ml.jsxs("div", { style: { display: "grid", gap: 9, width: Math.min(C !== "off" ? 900 : K ? 420 : 820, Ct, gt * et), maxWidth: "100%", alignSelf: "center" }, children: [
      /* @__PURE__ */ ml.jsxs("div", { role: "status", "aria-live": "polite", style: { display: "flex", alignItems: "center", gap: 9, minHeight: 40, padding: "9px 12px", borderRadius: 13, background: C !== "off" ? "rgba(255,255,255,0.1)" : "rgba(25,79,97,0.07)", color: C !== "off" ? "#eff6ff" : "#284a55", fontSize: K ? 12 : 13, fontWeight: 700 }, children: [
        /* @__PURE__ */ ml.jsx("span", { "aria-hidden": "true", style: { color: U.combo > 1 ? "#ffc83d" : "#c55a32", fontSize: 16 }, children: "●" }),
        /* @__PURE__ */ ml.jsx("span", { children: U.selectedPiece ? `${U.selectedPiece} ready. ${U.message}` : U.message })
      ] }),
      /* @__PURE__ */ ml.jsxs("div", { style: { display: "grid", gridTemplateColumns: K ? "2fr 1fr" : "minmax(180px, 1fr) 130px", gap: 7 }, children: [
        /* @__PURE__ */ ml.jsx("button", { id: "blockblast-start", onClick: Ot, style: { ...$r(!0), padding: K || cl ? "10px 13px" : "11px 16px", fontSize: K || cl ? 13 : 14 }, children: U.mode === "playing" ? "New Game" : U.mode === "gameover" ? "Play Again" : "Start Game" }),
        /* @__PURE__ */ ml.jsx("button", { id: "blockblast-fullscreen", onClick: () => {
          Nl();
        }, style: { ...$r(!1), ...ut, padding: K || cl ? "10px 13px" : "11px 16px", fontSize: K || cl ? 13 : 14 }, children: U.fullscreen ? "Exit Fullscreen" : K || Ul() ? "Go Fullscreen" : "Fullscreen" })
      ] }),
      /* @__PURE__ */ ml.jsx("p", { style: { margin: 0, textAlign: "center", color: C !== "off" ? "rgba(239,246,255,0.65)" : "#687b80", fontSize: K ? 10 : 11, lineHeight: 1.4 }, children: "Drag for the best control, or tap a piece and then tap the board. Press F for fullscreen." })
    ] })
  ] }) });
}
const td = document.getElementById("block-blast-root");
if (!td)
  throw new Error("Block Blast export root element was not found.");
document.title = "Block Blast | Ethan Mayer";
document.documentElement.style.colorScheme = "light";
document.body.classList.add("block-blast-export-body");
N1.createRoot(td).render(/* @__PURE__ */ ml.jsx(I1, {}));
