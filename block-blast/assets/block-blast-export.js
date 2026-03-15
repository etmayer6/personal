var hf = { exports: {} }, Mu = {};
var Od;
function S1() {
  if (Od) return Mu;
  Od = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(o, b, O) {
    var C = null;
    if (O !== void 0 && (C = "" + O), b.key !== void 0 && (C = "" + b.key), "key" in b) {
      O = {};
      for (var Z in b)
        Z !== "key" && (O[Z] = b[Z]);
    } else O = b;
    return b = O.ref, {
      $$typeof: c,
      type: o,
      key: C,
      ref: b !== void 0 ? b : null,
      props: O
    };
  }
  return Mu.Fragment = v, Mu.jsx = h, Mu.jsxs = h, Mu;
}
var Dd;
function b1() {
  return Dd || (Dd = 1, hf.exports = S1()), hf.exports;
}
var L = b1(), mf = { exports: {} }, Ou = {}, vf = { exports: {} }, gf = {};
var Ud;
function p1() {
  return Ud || (Ud = 1, (function(c) {
    function v(z, R) {
      var w = z.length;
      z.push(R);
      l: for (; 0 < w; ) {
        var cl = w - 1 >>> 1, sl = z[cl];
        if (0 < b(sl, R))
          z[cl] = R, z[w] = sl, w = cl;
        else break l;
      }
    }
    function h(z) {
      return z.length === 0 ? null : z[0];
    }
    function o(z) {
      if (z.length === 0) return null;
      var R = z[0], w = z.pop();
      if (w !== R) {
        z[0] = w;
        l: for (var cl = 0, sl = z.length, r = sl >>> 1; cl < r; ) {
          var M = 2 * (cl + 1) - 1, H = z[M], Y = M + 1, J = z[Y];
          if (0 > b(H, w))
            Y < sl && 0 > b(J, H) ? (z[cl] = J, z[Y] = w, cl = Y) : (z[cl] = H, z[M] = w, cl = M);
          else if (Y < sl && 0 > b(J, w))
            z[cl] = J, z[Y] = w, cl = Y;
          else break l;
        }
      }
      return R;
    }
    function b(z, R) {
      var w = z.sortIndex - R.sortIndex;
      return w !== 0 ? w : z.id - R.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      c.unstable_now = function() {
        return O.now();
      };
    } else {
      var C = Date, Z = C.now();
      c.unstable_now = function() {
        return C.now() - Z;
      };
    }
    var D = [], E = [], j = 1, x = null, al = 3, _l = !1, Ml = !1, Bl = !1, Ut = !1, X = typeof setTimeout == "function" ? setTimeout : null, ut = typeof clearTimeout == "function" ? clearTimeout : null, Yl = typeof setImmediate < "u" ? setImmediate : null;
    function Fl(z) {
      for (var R = h(E); R !== null; ) {
        if (R.callback === null) o(E);
        else if (R.startTime <= z)
          o(E), R.sortIndex = R.expirationTime, v(D, R);
        else break;
        R = h(E);
      }
    }
    function vt(z) {
      if (Bl = !1, Fl(z), !Ml)
        if (h(D) !== null)
          Ml = !0, Ll || (Ll = !0, U());
        else {
          var R = h(E);
          R !== null && gl(vt, R.startTime - z);
        }
    }
    var Ll = !1, F = -1, wl = 5, gt = -1;
    function St() {
      return Ut ? !0 : !(c.unstable_now() - gt < wl);
    }
    function Q() {
      if (Ut = !1, Ll) {
        var z = c.unstable_now();
        gt = z;
        var R = !0;
        try {
          l: {
            Ml = !1, Bl && (Bl = !1, ut(F), F = -1), _l = !0;
            var w = al;
            try {
              t: {
                for (Fl(z), x = h(D); x !== null && !(x.expirationTime > z && St()); ) {
                  var cl = x.callback;
                  if (typeof cl == "function") {
                    x.callback = null, al = x.priorityLevel;
                    var sl = cl(
                      x.expirationTime <= z
                    );
                    if (z = c.unstable_now(), typeof sl == "function") {
                      x.callback = sl, Fl(z), R = !0;
                      break t;
                    }
                    x === h(D) && o(D), Fl(z);
                  } else o(D);
                  x = h(D);
                }
                if (x !== null) R = !0;
                else {
                  var r = h(E);
                  r !== null && gl(
                    vt,
                    r.startTime - z
                  ), R = !1;
                }
              }
              break l;
            } finally {
              x = null, al = w, _l = !1;
            }
            R = void 0;
          }
        } finally {
          R ? U() : Ll = !1;
        }
      }
    }
    var U;
    if (typeof Yl == "function")
      U = function() {
        Yl(Q);
      };
    else if (typeof MessageChannel < "u") {
      var B = new MessageChannel(), ul = B.port2;
      B.port1.onmessage = Q, U = function() {
        ul.postMessage(null);
      };
    } else
      U = function() {
        X(Q, 0);
      };
    function gl(z, R) {
      F = X(function() {
        z(c.unstable_now());
      }, R);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, c.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : wl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return al;
    }, c.unstable_next = function(z) {
      switch (al) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = al;
      }
      var w = al;
      al = R;
      try {
        return z();
      } finally {
        al = w;
      }
    }, c.unstable_requestPaint = function() {
      Ut = !0;
    }, c.unstable_runWithPriority = function(z, R) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var w = al;
      al = z;
      try {
        return R();
      } finally {
        al = w;
      }
    }, c.unstable_scheduleCallback = function(z, R, w) {
      var cl = c.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? cl + w : cl) : w = cl, z) {
        case 1:
          var sl = -1;
          break;
        case 2:
          sl = 250;
          break;
        case 5:
          sl = 1073741823;
          break;
        case 4:
          sl = 1e4;
          break;
        default:
          sl = 5e3;
      }
      return sl = w + sl, z = {
        id: j++,
        callback: R,
        priorityLevel: z,
        startTime: w,
        expirationTime: sl,
        sortIndex: -1
      }, w > cl ? (z.sortIndex = w, v(E, z), h(D) === null && z === h(E) && (Bl ? (ut(F), F = -1) : Bl = !0, gl(vt, w - cl))) : (z.sortIndex = sl, v(D, z), Ml || _l || (Ml = !0, Ll || (Ll = !0, U()))), z;
    }, c.unstable_shouldYield = St, c.unstable_wrapCallback = function(z) {
      var R = al;
      return function() {
        var w = al;
        al = R;
        try {
          return z.apply(this, arguments);
        } finally {
          al = w;
        }
      };
    };
  })(gf)), gf;
}
var Rd;
function z1() {
  return Rd || (Rd = 1, vf.exports = p1()), vf.exports;
}
var Sf = { exports: {} }, K = {};
var Cd;
function T1() {
  if (Cd) return K;
  Cd = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), Z = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), al = Symbol.iterator;
  function _l(r) {
    return r === null || typeof r != "object" ? null : (r = al && r[al] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Ml = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, Ut = {};
  function X(r, M, H) {
    this.props = r, this.context = M, this.refs = Ut, this.updater = H || Ml;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(r, M) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, M, "setState");
  }, X.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = X.prototype;
  function Yl(r, M, H) {
    this.props = r, this.context = M, this.refs = Ut, this.updater = H || Ml;
  }
  var Fl = Yl.prototype = new ut();
  Fl.constructor = Yl, Bl(Fl, X.prototype), Fl.isPureReactComponent = !0;
  var vt = Array.isArray;
  function Ll() {
  }
  var F = { H: null, A: null, T: null, S: null }, wl = Object.prototype.hasOwnProperty;
  function gt(r, M, H) {
    var Y = H.ref;
    return {
      $$typeof: c,
      type: r,
      key: M,
      ref: Y !== void 0 ? Y : null,
      props: H
    };
  }
  function St(r, M) {
    return gt(r.type, M, r.props);
  }
  function Q(r) {
    return typeof r == "object" && r !== null && r.$$typeof === c;
  }
  function U(r) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(H) {
      return M[H];
    });
  }
  var B = /\/+/g;
  function ul(r, M) {
    return typeof r == "object" && r !== null && r.key != null ? U("" + r.key) : M.toString(36);
  }
  function gl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(Ll, Ll) : (r.status = "pending", r.then(
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
  function z(r, M, H, Y, J) {
    var k = typeof r;
    (k === "undefined" || k === "boolean") && (r = null);
    var ol = !1;
    if (r === null) ol = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          ol = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case c:
            case v:
              ol = !0;
              break;
            case j:
              return ol = r._init, z(
                ol(r._payload),
                M,
                H,
                Y,
                J
              );
          }
      }
    if (ol)
      return J = J(r), ol = Y === "" ? "." + ul(r, 0) : Y, vt(J) ? (H = "", ol != null && (H = ol.replace(B, "$&/") + "/"), z(J, M, H, "", function(xa) {
        return xa;
      })) : J != null && (Q(J) && (J = St(
        J,
        H + (J.key == null || r && r.key === J.key ? "" : ("" + J.key).replace(
          B,
          "$&/"
        ) + "/") + ol
      )), M.push(J)), 1;
    ol = 0;
    var Jl = Y === "" ? "." : Y + ":";
    if (vt(r))
      for (var Ol = 0; Ol < r.length; Ol++)
        Y = r[Ol], k = Jl + ul(Y, Ol), ol += z(
          Y,
          M,
          H,
          k,
          J
        );
    else if (Ol = _l(r), typeof Ol == "function")
      for (r = Ol.call(r), Ol = 0; !(Y = r.next()).done; )
        Y = Y.value, k = Jl + ul(Y, Ol++), ol += z(
          Y,
          M,
          H,
          k,
          J
        );
    else if (k === "object") {
      if (typeof r.then == "function")
        return z(
          gl(r),
          M,
          H,
          Y,
          J
        );
      throw M = String(r), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ol;
  }
  function R(r, M, H) {
    if (r == null) return r;
    var Y = [], J = 0;
    return z(r, Y, "", "", function(k) {
      return M.call(H, k, J++);
    }), Y;
  }
  function w(r) {
    if (r._status === -1) {
      var M = r._result;
      M = M(), M.then(
        function(H) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = H);
        },
        function(H) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = H);
        }
      ), r._status === -1 && (r._status = 0, r._result = M);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var cl = typeof reportError == "function" ? reportError : function(r) {
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
  }, sl = {
    map: R,
    forEach: function(r, M, H) {
      R(
        r,
        function() {
          M.apply(this, arguments);
        },
        H
      );
    },
    count: function(r) {
      var M = 0;
      return R(r, function() {
        M++;
      }), M;
    },
    toArray: function(r) {
      return R(r, function(M) {
        return M;
      }) || [];
    },
    only: function(r) {
      if (!Q(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return K.Activity = x, K.Children = sl, K.Component = X, K.Fragment = h, K.Profiler = b, K.PureComponent = Yl, K.StrictMode = o, K.Suspense = D, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return F.H.useMemoCache(r);
    }
  }, K.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(r, M, H) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var Y = Bl({}, r.props), J = r.key;
    if (M != null)
      for (k in M.key !== void 0 && (J = "" + M.key), M)
        !wl.call(M, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && M.ref === void 0 || (Y[k] = M[k]);
    var k = arguments.length - 2;
    if (k === 1) Y.children = H;
    else if (1 < k) {
      for (var ol = Array(k), Jl = 0; Jl < k; Jl++)
        ol[Jl] = arguments[Jl + 2];
      Y.children = ol;
    }
    return gt(r.type, J, Y);
  }, K.createContext = function(r) {
    return r = {
      $$typeof: C,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: O,
      _context: r
    }, r;
  }, K.createElement = function(r, M, H) {
    var Y, J = {}, k = null;
    if (M != null)
      for (Y in M.key !== void 0 && (k = "" + M.key), M)
        wl.call(M, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (J[Y] = M[Y]);
    var ol = arguments.length - 2;
    if (ol === 1) J.children = H;
    else if (1 < ol) {
      for (var Jl = Array(ol), Ol = 0; Ol < ol; Ol++)
        Jl[Ol] = arguments[Ol + 2];
      J.children = Jl;
    }
    if (r && r.defaultProps)
      for (Y in ol = r.defaultProps, ol)
        J[Y] === void 0 && (J[Y] = ol[Y]);
    return gt(r, k, J);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(r) {
    return { $$typeof: Z, render: r };
  }, K.isValidElement = Q, K.lazy = function(r) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: r },
      _init: w
    };
  }, K.memo = function(r, M) {
    return {
      $$typeof: E,
      type: r,
      compare: M === void 0 ? null : M
    };
  }, K.startTransition = function(r) {
    var M = F.T, H = {};
    F.T = H;
    try {
      var Y = r(), J = F.S;
      J !== null && J(H, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Ll, cl);
    } catch (k) {
      cl(k);
    } finally {
      M !== null && H.types !== null && (M.types = H.types), F.T = M;
    }
  }, K.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, K.use = function(r) {
    return F.H.use(r);
  }, K.useActionState = function(r, M, H) {
    return F.H.useActionState(r, M, H);
  }, K.useCallback = function(r, M) {
    return F.H.useCallback(r, M);
  }, K.useContext = function(r) {
    return F.H.useContext(r);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(r, M) {
    return F.H.useDeferredValue(r, M);
  }, K.useEffect = function(r, M) {
    return F.H.useEffect(r, M);
  }, K.useEffectEvent = function(r) {
    return F.H.useEffectEvent(r);
  }, K.useId = function() {
    return F.H.useId();
  }, K.useImperativeHandle = function(r, M, H) {
    return F.H.useImperativeHandle(r, M, H);
  }, K.useInsertionEffect = function(r, M) {
    return F.H.useInsertionEffect(r, M);
  }, K.useLayoutEffect = function(r, M) {
    return F.H.useLayoutEffect(r, M);
  }, K.useMemo = function(r, M) {
    return F.H.useMemo(r, M);
  }, K.useOptimistic = function(r, M) {
    return F.H.useOptimistic(r, M);
  }, K.useReducer = function(r, M, H) {
    return F.H.useReducer(r, M, H);
  }, K.useRef = function(r) {
    return F.H.useRef(r);
  }, K.useState = function(r) {
    return F.H.useState(r);
  }, K.useSyncExternalStore = function(r, M, H) {
    return F.H.useSyncExternalStore(
      r,
      M,
      H
    );
  }, K.useTransition = function() {
    return F.H.useTransition();
  }, K.version = "19.2.4", K;
}
var Hd;
function Ef() {
  return Hd || (Hd = 1, Sf.exports = T1()), Sf.exports;
}
var bf = { exports: {} }, Kl = {};
var xd;
function E1() {
  if (xd) return Kl;
  xd = 1;
  var c = Ef();
  function v(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        E += "&args[]=" + encodeURIComponent(arguments[j]);
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
  function O(D, E, j) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: x == null ? null : "" + x,
      children: D,
      containerInfo: E,
      implementation: j
    };
  }
  var C = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Z(D, E) {
    if (D === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Kl.createPortal = function(D, E) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(v(299));
    return O(D, E, null, j);
  }, Kl.flushSync = function(D) {
    var E = C.T, j = o.p;
    try {
      if (C.T = null, o.p = 2, D) return D();
    } finally {
      C.T = E, o.p = j, o.d.f();
    }
  }, Kl.preconnect = function(D, E) {
    typeof D == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(D, E));
  }, Kl.prefetchDNS = function(D) {
    typeof D == "string" && o.d.D(D);
  }, Kl.preinit = function(D, E) {
    if (typeof D == "string" && E && typeof E.as == "string") {
      var j = E.as, x = Z(j, E.crossOrigin), al = typeof E.integrity == "string" ? E.integrity : void 0, _l = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      j === "style" ? o.d.S(
        D,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: x,
          integrity: al,
          fetchPriority: _l
        }
      ) : j === "script" && o.d.X(D, {
        crossOrigin: x,
        integrity: al,
        fetchPriority: _l,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(D, E) {
    if (typeof D == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var j = Z(
            E.as,
            E.crossOrigin
          );
          o.d.M(D, {
            crossOrigin: j,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(D);
  }, Kl.preload = function(D, E) {
    if (typeof D == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var j = E.as, x = Z(j, E.crossOrigin);
      o.d.L(D, j, {
        crossOrigin: x,
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
  }, Kl.preloadModule = function(D, E) {
    if (typeof D == "string")
      if (E) {
        var j = Z(E.as, E.crossOrigin);
        o.d.m(D, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: j,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(D);
  }, Kl.requestFormReset = function(D) {
    o.d.r(D);
  }, Kl.unstable_batchedUpdates = function(D, E) {
    return D(E);
  }, Kl.useFormState = function(D, E, j) {
    return C.H.useFormState(D, E, j);
  }, Kl.useFormStatus = function() {
    return C.H.useHostTransitionStatus();
  }, Kl.version = "19.2.4", Kl;
}
var Nd;
function A1() {
  if (Nd) return bf.exports;
  Nd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (v) {
        console.error(v);
      }
  }
  return c(), bf.exports = E1(), bf.exports;
}
var Bd;
function _1() {
  if (Bd) return Ou;
  Bd = 1;
  var c = z1(), v = Ef(), h = A1();
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
  function C(l) {
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
        for (var i = !1, f = u.child; f; ) {
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
        if (!i) {
          for (f = n.child; f; ) {
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
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t;
  }
  function j(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = j(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Object.assign, al = /* @__PURE__ */ Symbol.for("react.element"), _l = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ml = /* @__PURE__ */ Symbol.for("react.portal"), Bl = /* @__PURE__ */ Symbol.for("react.fragment"), Ut = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.consumer"), Yl = /* @__PURE__ */ Symbol.for("react.context"), Fl = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), Ll = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), wl = /* @__PURE__ */ Symbol.for("react.lazy"), gt = /* @__PURE__ */ Symbol.for("react.activity"), St = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function U(l) {
    return l === null || typeof l != "object" ? null : (l = Q && l[Q] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var B = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ul(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === B ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case X:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case vt:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case Yl:
          return l.displayName || "Context";
        case ut:
          return (l._context.displayName || "Context") + ".Consumer";
        case Fl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case F:
          return t = l.displayName || null, t !== null ? t : ul(l.type) || "Memo";
        case wl:
          t = l._payload, l = l._init;
          try {
            return ul(l(t));
          } catch {
          }
      }
    return null;
  }
  var gl = Array.isArray, z = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, cl = [], sl = -1;
  function r(l) {
    return { current: l };
  }
  function M(l) {
    0 > sl || (l.current = cl[sl], cl[sl] = null, sl--);
  }
  function H(l, t) {
    sl++, cl[sl] = l.current, l.current = t;
  }
  var Y = r(null), J = r(null), k = r(null), ol = r(null);
  function Jl(l, t) {
    switch (H(k, t), H(J, l), H(Y, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? F0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = F0(t), l = k0(t, l);
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
    M(Y), H(Y, l);
  }
  function Ol() {
    M(Y), M(J), M(k);
  }
  function xa(l) {
    l.memoizedState !== null && H(ol, l);
    var t = Y.current, e = k0(t, l.type);
    t !== e && (H(J, l), H(Y, e));
  }
  function Uu(l) {
    J.current === l && (M(Y), M(J)), ol.current === l && (M(ol), Tu._currentValue = w);
  }
  var $n, _f;
  function De(l) {
    if ($n === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        $n = t && t[1] || "", _f = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $n + l + _f;
  }
  var Fn = !1;
  function kn(l, t) {
    if (!l || Fn) return "";
    Fn = !0;
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
                } catch (p) {
                  var S = p;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (p) {
                  S = p;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                S = p;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (p) {
            if (p && S && typeof p.stack == "string")
              return [p.stack, S.stack];
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
      var n = a.DetermineComponentFrameRoot(), i = n[0], f = n[1];
      if (i && f) {
        var s = i.split(`
`), g = f.split(`
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
                  var T = `
` + s[a].replace(" at new ", " at ");
                  return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Fn = !1, Error.prepareStackTrace = e;
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
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return De("Activity");
      default:
        return "";
    }
  }
  function Mf(l) {
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
  var In = Object.prototype.hasOwnProperty, Pn = c.unstable_scheduleCallback, li = c.unstable_cancelCallback, Fd = c.unstable_shouldYield, kd = c.unstable_requestPaint, nt = c.unstable_now, Id = c.unstable_getCurrentPriorityLevel, Of = c.unstable_ImmediatePriority, Df = c.unstable_UserBlockingPriority, Ru = c.unstable_NormalPriority, Pd = c.unstable_LowPriority, Uf = c.unstable_IdlePriority, lr = c.log, tr = c.unstable_setDisableYieldValue, Na = null, it = null;
  function ae(l) {
    if (typeof lr == "function" && tr(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(Na, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : ur, er = Math.log, ar = Math.LN2;
  function ur(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (er(l) / ar | 0) | 0;
  }
  var Cu = 256, Hu = 262144, xu = 4194304;
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
  function Nu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = Ue(a) : (i &= f, i !== 0 ? u = Ue(i) : e || (e = f & ~l, e !== 0 && (u = Ue(e))))) : (f = a & ~n, f !== 0 ? u = Ue(f) : i !== 0 ? u = Ue(i) : e || (e = a & ~l, e !== 0 && (u = Ue(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ba(l, t) {
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
  function Rf() {
    var l = xu;
    return xu <<= 1, (xu & 62914560) === 0 && (xu = 4194304), l;
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
    var f = l.entanglements, s = l.expirationTimes, g = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - ct(e), _ = 1 << T;
      f[T] = 0, s[T] = -1;
      var S = g[T];
      if (S !== null)
        for (g[T] = null, T = 0; T < S.length; T++) {
          var p = S[T];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Cf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Cf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Hf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - ct(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function xf(l, t) {
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
  function Nf() {
    var l = R.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : pd(l.type));
  }
  function Bf(l, t) {
    var e = R.p;
    try {
      return R.p = l, t();
    } finally {
      R.p = e;
    }
  }
  var ue = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + ue, kl = "__reactProps$" + ue, Je = "__reactContainer$" + ue, ui = "__reactEvents$" + ue, cr = "__reactListeners$" + ue, fr = "__reactHandles$" + ue, Yf = "__reactResources$" + ue, qa = "__reactMarker$" + ue;
  function ni(l) {
    delete l[Xl], delete l[kl], delete l[ui], delete l[cr], delete l[fr];
  }
  function We(l) {
    var t = l[Xl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Je] || e[Xl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = ud(l); l !== null; ) {
            if (e = l[Xl]) return e;
            l = ud(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function $e(l) {
    if (l = l[Xl] || l[Je]) {
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
  function Fe(l) {
    var t = l[Yf];
    return t || (t = l[Yf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ql(l) {
    l[qa] = !0;
  }
  var qf = /* @__PURE__ */ new Set(), jf = {};
  function Re(l, t) {
    ke(l, t), ke(l + "Capture", t);
  }
  function ke(l, t) {
    for (jf[l] = t, l = 0; l < t.length; l++)
      qf.add(t[l]);
  }
  var or = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xf = {}, Gf = {};
  function sr(l) {
    return In.call(Gf, l) ? !0 : In.call(Xf, l) ? !1 : or.test(l) ? Gf[l] = !0 : (Xf[l] = !0, !1);
  }
  function Bu(l, t, e) {
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
  function Qf(l) {
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
      var t = Qf(l) ? "checked" : "value";
      l._valueTracker = dr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Zf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Qf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
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
  function pt(l) {
    return l.replace(
      rr,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ci(l, t, e, a, u, n, i, f) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + bt(t)) : l.value !== "" + bt(t) && (l.value = "" + bt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? fi(l, i, bt(t)) : e != null ? fi(l, i, bt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + bt(f) : l.removeAttribute("name");
  }
  function Vf(l, t, e, a, u, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ii(l);
        return;
      }
      e = e != null ? "" + bt(e) : "", t = t != null ? "" + bt(t) : e, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ii(l);
  }
  function fi(l, t, e) {
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
  function Lf(l, t, e) {
    if (t != null && (t = "" + bt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + bt(e) : "";
  }
  function wf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (gl(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = bt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ii(l);
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
  function Kf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || yr.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Jf(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && Kf(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Kf(l, n, t[n]);
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
  ]), mr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ju(l) {
    return mr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Xt() {
  }
  var si = null;
  function di(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ta = null;
  function Wf(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[kl] || null;
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
                var u = a[kl] || null;
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
              a = e[t], a.form === l.form && Zf(a);
          }
          break l;
        case "textarea":
          Lf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Ie(l, !!e.multiple, t, !1);
      }
    }
  }
  var ri = !1;
  function $f(l, t, e) {
    if (ri) return l(t, e);
    ri = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ri = !1, (la !== null || ta !== null) && (Mn(), la && (t = la, l = ta, ta = la = null, Wf(t), l)))
        for (t = 0; t < l.length; t++) Wf(l[t]);
    }
  }
  function Xa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[kl] || null;
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
  function Ff() {
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
  function kf() {
    return !1;
  }
  function Il(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (e = l[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Qu : kf, this.isPropagationStopped = kf, this;
    }
    return x(t.prototype, {
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
  var Ce = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zu = Il(Ce), Qa = x({}, Ce, { view: 0, detail: 0 }), vr = Il(Qa), mi, vi, Za, Vu = x({}, Qa, {
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
      return "movementX" in l ? l.movementX : (l !== Za && (Za && l.type === "mousemove" ? (mi = l.screenX - Za.screenX, vi = l.screenY - Za.screenY) : vi = mi = 0, Za = l), mi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : vi;
    }
  }), If = Il(Vu), gr = x({}, Vu, { dataTransfer: 0 }), Sr = Il(gr), br = x({}, Qa, { relatedTarget: 0 }), gi = Il(br), pr = x({}, Ce, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zr = Il(pr), Tr = x({}, Ce, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Er = Il(Tr), Ar = x({}, Ce, { data: 0 }), Pf = Il(Ar), _r = {
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
  var Ur = x({}, Qa, {
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
  }), Rr = Il(Ur), Cr = x({}, Vu, {
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
  }), lo = Il(Cr), Hr = x({}, Qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Si
  }), xr = Il(Hr), Nr = x({}, Ce, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Br = Il(Nr), Yr = x({}, Vu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qr = Il(Yr), jr = x({}, Ce, {
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
      return l === "compositionend" || !bi && uo(l, t) ? (l = Ff(), Xu = hi = ne = null, ea = !1, l) : null;
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
  function co(l, t, e, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = xn(t, "onChange"), 0 < t.length && (e = new Zu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var La = null, wa = null;
  function wr(l) {
    L0(l, 0);
  }
  function Lu(l) {
    var t = ja(l);
    if (Zf(t)) return l;
  }
  function fo(l, t) {
    if (l === "change") return t;
  }
  var oo = !1;
  if (Gt) {
    var pi;
    if (Gt) {
      var zi = "oninput" in document;
      if (!zi) {
        var so = document.createElement("div");
        so.setAttribute("oninput", "return;"), zi = typeof so.oninput == "function";
      }
      pi = zi;
    } else pi = !1;
    oo = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ro() {
    La && (La.detachEvent("onpropertychange", yo), wa = La = null);
  }
  function yo(l) {
    if (l.propertyName === "value" && Lu(wa)) {
      var t = [];
      co(
        t,
        wa,
        l,
        di(l)
      ), $f(wr, t);
    }
  }
  function Kr(l, t, e) {
    l === "focusin" ? (ro(), La = t, wa = e, La.attachEvent("onpropertychange", yo)) : l === "focusout" && ro();
  }
  function Jr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Lu(wa);
  }
  function Wr(l, t) {
    if (l === "click") return Lu(t);
  }
  function $r(l, t) {
    if (l === "input" || l === "change")
      return Lu(t);
  }
  function Fr(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : Fr;
  function Ka(l, t) {
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
  function mo(l, t) {
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
  function vo(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vo(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
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
  var kr = Gt && "documentMode" in document && 11 >= document.documentMode, aa = null, Ei = null, Ja = null, Ai = !1;
  function So(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ai || aa == null || aa !== qu(a) || (a = aa, "selectionStart" in a && Ti(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && Ka(Ja, a) || (Ja = a, a = xn(Ei, "onSelect"), 0 < a.length && (t = new Zu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = aa)));
  }
  function He(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ua = {
    animationend: He("Animation", "AnimationEnd"),
    animationiteration: He("Animation", "AnimationIteration"),
    animationstart: He("Animation", "AnimationStart"),
    transitionrun: He("Transition", "TransitionRun"),
    transitionstart: He("Transition", "TransitionStart"),
    transitioncancel: He("Transition", "TransitionCancel"),
    transitionend: He("Transition", "TransitionEnd")
  }, _i = {}, bo = {};
  Gt && (bo = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function xe(l) {
    if (_i[l]) return _i[l];
    if (!ua[l]) return l;
    var t = ua[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in bo)
        return _i[l] = t[e];
    return l;
  }
  var po = xe("animationend"), zo = xe("animationiteration"), To = xe("animationstart"), Ir = xe("transitionrun"), Pr = xe("transitionstart"), ly = xe("transitioncancel"), Eo = xe("transitionend"), Ao = /* @__PURE__ */ new Map(), Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mi.push("scrollEnd");
  function Rt(l, t) {
    Ao.set(l, t), Re(t, [l]);
  }
  var wu = typeof reportError == "function" ? reportError : function(l) {
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
  }, zt = [], na = 0, Oi = 0;
  function Ku() {
    for (var l = na, t = Oi = na = 0; t < l; ) {
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
      n !== 0 && _o(e, u, n);
    }
  }
  function Ju(l, t, e, a) {
    zt[na++] = l, zt[na++] = t, zt[na++] = e, zt[na++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Di(l, t, e, a) {
    return Ju(l, t, e, a), Wu(l);
  }
  function Ne(l, t) {
    return Ju(l, null, null, t), Wu(l);
  }
  function _o(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ct(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Wu(l) {
    if (50 < mu)
      throw mu = 0, qc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function ty(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(l, t, e, a) {
    return new ty(l, t, e, a);
  }
  function Ui(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ot(
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
        case gt:
          return l = ot(31, e, t, u), l.elementType = gt, l.lanes = n, l;
        case Bl:
          return Be(e.children, u, n, t);
        case Ut:
          i = 8, u |= 24;
          break;
        case X:
          return l = ot(12, e, t, u | 2), l.elementType = X, l.lanes = n, l;
        case vt:
          return l = ot(13, e, t, u), l.elementType = vt, l.lanes = n, l;
        case Ll:
          return l = ot(19, e, t, u), l.elementType = Ll, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Yl:
                i = 10;
                break l;
              case ut:
                i = 9;
                break l;
              case Fl:
                i = 11;
                break l;
              case F:
                i = 14;
                break l;
              case wl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ot(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Be(l, t, e, a) {
    return l = ot(7, l, a, t), l.lanes = e, l;
  }
  function Ri(l, t, e) {
    return l = ot(6, l, null, t), l.lanes = e, l;
  }
  function Oo(l) {
    var t = ot(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ci(l, t, e) {
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
  var Do = /* @__PURE__ */ new WeakMap();
  function Tt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Do.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Mf(t)
      }, Do.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Mf(t)
    };
  }
  var ca = [], fa = 0, Fu = null, Wa = 0, Et = [], At = 0, ie = null, xt = 1, Nt = "";
  function Zt(l, t) {
    ca[fa++] = Wa, ca[fa++] = Fu, Fu = l, Wa = t;
  }
  function Uo(l, t, e) {
    Et[At++] = xt, Et[At++] = Nt, Et[At++] = ie, ie = l;
    var a = xt;
    l = Nt;
    var u = 32 - ct(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - ct(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, xt = 1 << 32 - ct(t) + u | e << u | a, Nt = n + l;
    } else
      xt = 1 << n | e << u | a, Nt = l;
  }
  function Hi(l) {
    l.return !== null && (Zt(l, 1), Uo(l, 1, 0));
  }
  function xi(l) {
    for (; l === Fu; )
      Fu = ca[--fa], ca[fa] = null, Wa = ca[--fa], ca[fa] = null;
    for (; l === ie; )
      ie = Et[--At], Et[At] = null, Nt = Et[--At], Et[At] = null, xt = Et[--At], Et[At] = null;
  }
  function Ro(l, t) {
    Et[At++] = xt, Et[At++] = Nt, Et[At++] = ie, xt = t.id, Nt = t.overflow, ie = l;
  }
  var Gl = null, Sl = null, el = !1, ce = null, _t = !1, Ni = Error(o(519));
  function fe(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $a(Tt(t, l)), Ni;
  }
  function Co(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Xl] = l, t[kl] = a, e) {
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
        for (e = 0; e < gu.length; e++)
          P(gu[e], t);
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
        P("invalid", t), Vf(
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
        P("invalid", t), wf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || W0(t.textContent, e) ? (a.popover != null && (P("beforetoggle", t), P("toggle", t)), a.onScroll != null && P("scroll", t), a.onScrollEnd != null && P("scrollend", t), a.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || fe(l, !0);
  }
  function Ho(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function oa(l) {
    if (l !== Gl) return !1;
    if (!el) return Ho(l), el = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Ic(l.type, l.memoizedProps)), e = !e), e && Sl && fe(l), Ho(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = ad(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = ad(l);
    } else
      t === 27 ? (t = Sl, Te(l.type) ? (l = af, af = null, Sl = l) : Sl = t) : Sl = Gl ? Ot(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ye() {
    Sl = Gl = null, el = !1;
  }
  function Bi() {
    var l = ce;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), ce = null), l;
  }
  function $a(l) {
    ce === null ? ce = [l] : ce.push(l);
  }
  var Yi = r(null), qe = null, Vt = null;
  function oe(l, t, e) {
    H(Yi, t._currentValue), t._currentValue = e;
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
          var f = n;
          n = u;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), qi(
                n.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          n = f.next;
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
          var f = u.type;
          ft(u.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (u === ol.current) {
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
  function ku(l) {
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
  function Ql(l) {
    return xo(qe, l);
  }
  function Iu(l, t) {
    return qe === null && je(l), xo(l, t);
  }
  function xo(l, t) {
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
  }, ay = c.unstable_scheduleCallback, uy = c.unstable_NormalPriority, Rl = {
    $$typeof: Yl,
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
  function Fa(l) {
    l.refCount--, l.refCount === 0 && ay(uy, function() {
      l.controller.abort();
    });
  }
  var ka = null, Gi = 0, da = 0, ra = null;
  function ny(l, t) {
    if (ka === null) {
      var e = ka = [];
      Gi = 0, da = Vc(), ra = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Gi++, t.then(No, No), t;
  }
  function No() {
    if (--Gi === 0 && ka !== null) {
      ra !== null && (ra.status = "fulfilled");
      var l = ka;
      ka = null, da = 0, ra = null;
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
  var Bo = z.S;
  z.S = function(l, t) {
    S0 = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && ny(l, t), Bo !== null && Bo(l, t);
  };
  var Xe = r(null);
  function Qi() {
    var l = Xe.current;
    return l !== null ? l : vl.pooledCache;
  }
  function Pu(l, t) {
    t === null ? H(Xe, Xe.current) : H(Xe, t.pool);
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
    throw t.$$typeof === al ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
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
    function f(y, d, m, A) {
      return d === null || d.tag !== 6 ? (d = Ri(m, y.mode, A), d.return = y, d) : (d = u(d, m), d.return = y, d);
    }
    function s(y, d, m, A) {
      var G = m.type;
      return G === Bl ? T(
        y,
        d,
        m.props.children,
        A,
        m.key
      ) : d !== null && (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === wl && Ge(G) === d.type) ? (d = u(d, m.props), Pa(d, m), d.return = y, d) : (d = $u(
        m.type,
        m.key,
        m.props,
        null,
        y.mode,
        A
      ), Pa(d, m), d.return = y, d);
    }
    function g(y, d, m, A) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Ci(m, y.mode, A), d.return = y, d) : (d = u(d, m.children || []), d.return = y, d);
    }
    function T(y, d, m, A, G) {
      return d === null || d.tag !== 7 ? (d = Be(
        m,
        y.mode,
        A,
        G
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
          case _l:
            return m = $u(
              d.type,
              d.key,
              d.props,
              null,
              y.mode,
              m
            ), Pa(m, d), m.return = y, m;
          case Ml:
            return d = Ci(
              d,
              y.mode,
              m
            ), d.return = y, d;
          case wl:
            return d = Ge(d), _(y, d, m);
        }
        if (gl(d) || U(d))
          return d = Be(
            d,
            y.mode,
            m,
            null
          ), d.return = y, d;
        if (typeof d.then == "function")
          return _(y, en(d), m);
        if (d.$$typeof === Yl)
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
      var G = d !== null ? d.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return G !== null ? null : f(y, d, "" + m, A);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case _l:
            return m.key === G ? s(y, d, m, A) : null;
          case Ml:
            return m.key === G ? g(y, d, m, A) : null;
          case wl:
            return m = Ge(m), S(y, d, m, A);
        }
        if (gl(m) || U(m))
          return G !== null ? null : T(y, d, m, A, null);
        if (typeof m.then == "function")
          return S(
            y,
            d,
            en(m),
            A
          );
        if (m.$$typeof === Yl)
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
    function p(y, d, m, A, G) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return y = y.get(m) || null, f(d, y, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case _l:
            return y = y.get(
              A.key === null ? m : A.key
            ) || null, s(d, y, A, G);
          case Ml:
            return y = y.get(
              A.key === null ? m : A.key
            ) || null, g(d, y, A, G);
          case wl:
            return A = Ge(A), p(
              y,
              d,
              m,
              A,
              G
            );
        }
        if (gl(A) || U(A))
          return y = y.get(m) || null, T(d, y, A, G, null);
        if (typeof A.then == "function")
          return p(
            y,
            d,
            m,
            en(A),
            G
          );
        if (A.$$typeof === Yl)
          return p(
            y,
            d,
            m,
            Iu(d, A),
            G
          );
        an(d, A);
      }
      return null;
    }
    function N(y, d, m, A) {
      for (var G = null, nl = null, q = d, $ = d = 0, tl = null; q !== null && $ < m.length; $++) {
        q.index > $ ? (tl = q, q = null) : tl = q.sibling;
        var il = S(
          y,
          q,
          m[$],
          A
        );
        if (il === null) {
          q === null && (q = tl);
          break;
        }
        l && q && il.alternate === null && t(y, q), d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il, q = tl;
      }
      if ($ === m.length)
        return e(y, q), el && Zt(y, $), G;
      if (q === null) {
        for (; $ < m.length; $++)
          q = _(y, m[$], A), q !== null && (d = n(
            q,
            d,
            $
          ), nl === null ? G = q : nl.sibling = q, nl = q);
        return el && Zt(y, $), G;
      }
      for (q = a(q); $ < m.length; $++)
        tl = p(
          q,
          y,
          $,
          m[$],
          A
        ), tl !== null && (l && tl.alternate !== null && q.delete(
          tl.key === null ? $ : tl.key
        ), d = n(
          tl,
          d,
          $
        ), nl === null ? G = tl : nl.sibling = tl, nl = tl);
      return l && q.forEach(function(Oe) {
        return t(y, Oe);
      }), el && Zt(y, $), G;
    }
    function V(y, d, m, A) {
      if (m == null) throw Error(o(151));
      for (var G = null, nl = null, q = d, $ = d = 0, tl = null, il = m.next(); q !== null && !il.done; $++, il = m.next()) {
        q.index > $ ? (tl = q, q = null) : tl = q.sibling;
        var Oe = S(y, q, il.value, A);
        if (Oe === null) {
          q === null && (q = tl);
          break;
        }
        l && q && Oe.alternate === null && t(y, q), d = n(Oe, d, $), nl === null ? G = Oe : nl.sibling = Oe, nl = Oe, q = tl;
      }
      if (il.done)
        return e(y, q), el && Zt(y, $), G;
      if (q === null) {
        for (; !il.done; $++, il = m.next())
          il = _(y, il.value, A), il !== null && (d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il);
        return el && Zt(y, $), G;
      }
      for (q = a(q); !il.done; $++, il = m.next())
        il = p(q, y, $, il.value, A), il !== null && (l && il.alternate !== null && q.delete(il.key === null ? $ : il.key), d = n(il, d, $), nl === null ? G = il : nl.sibling = il, nl = il);
      return l && q.forEach(function(g1) {
        return t(y, g1);
      }), el && Zt(y, $), G;
    }
    function ml(y, d, m, A) {
      if (typeof m == "object" && m !== null && m.type === Bl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case _l:
            l: {
              for (var G = m.key; d !== null; ) {
                if (d.key === G) {
                  if (G = m.type, G === Bl) {
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
                  } else if (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === wl && Ge(G) === d.type) {
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
              m.type === Bl ? (A = Be(
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
          case Ml:
            l: {
              for (G = m.key; d !== null; ) {
                if (d.key === G)
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
              A = Ci(m, y.mode, A), A.return = y, y = A;
            }
            return i(y);
          case wl:
            return m = Ge(m), ml(
              y,
              d,
              m,
              A
            );
        }
        if (gl(m))
          return N(
            y,
            d,
            m,
            A
          );
        if (U(m)) {
          if (G = U(m), typeof G != "function") throw Error(o(150));
          return m = G.call(m), V(
            y,
            d,
            m,
            A
          );
        }
        if (typeof m.then == "function")
          return ml(
            y,
            d,
            en(m),
            A
          );
        if (m.$$typeof === Yl)
          return ml(
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
        var G = ml(
          y,
          d,
          m,
          A
        );
        return ha = null, G;
      } catch (q) {
        if (q === ya || q === ln) throw q;
        var nl = ot(29, q, null, y.mode);
        return nl.lanes = A, nl.return = y, nl;
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
    if (a = a.shared, (fl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Wu(l), _o(l, null, e), t;
    }
    return Ju(l, a, t, e), Wu(l);
  }
  function lu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Hf(l, e);
    }
  }
  function wi(l, t) {
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
  var Ki = !1;
  function tu() {
    if (Ki) {
      var l = ra;
      if (l !== null) throw l;
    }
  }
  function eu(l, t, e, a) {
    Ki = !1;
    var u = l.updateQueue;
    se = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var s = f, g = s.next;
      s.next = null, i === null ? n = g : i.next = g, i = s;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, f = T.lastBaseUpdate, f !== i && (f === null ? T.firstBaseUpdate = g : f.next = g, T.lastBaseUpdate = s));
    }
    if (n !== null) {
      var _ = u.baseState;
      i = 0, T = g = s = null, f = n;
      do {
        var S = f.lane & -536870913, p = S !== f.lane;
        if (p ? (ll & S) === S : (a & S) === S) {
          S !== 0 && S === da && (Ki = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var N = l, V = f;
            S = t;
            var ml = e;
            switch (V.tag) {
              case 1:
                if (N = V.payload, typeof N == "function") {
                  _ = N.call(ml, _, S);
                  break l;
                }
                _ = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = V.payload, S = typeof N == "function" ? N.call(ml, _, S) : N, S == null) break l;
                _ = x({}, _, S);
                break l;
              case 2:
                se = !0;
            }
          }
          S = f.callback, S !== null && (l.flags |= 64, p && (l.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [S] : p.push(S));
        } else
          p = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, T === null ? (g = T = p, s = _) : T = T.next = p, i |= S;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null)
            break;
          p = f, f = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
        }
      } while (!0);
      T === null && (s = _), u.baseState = s, u.firstBaseUpdate = g, u.lastBaseUpdate = T, n === null && (u.shared.lanes = 0), ge |= i, l.lanes = i, l.memoizedState = _;
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
  var ma = r(null), un = r(0);
  function wo(l, t) {
    l = Pt, H(un, l), H(ma, t), Pt = l | t.baseLanes;
  }
  function Ji() {
    H(un, Pt), H(ma, ma.current);
  }
  function Wi() {
    Pt = un.current, M(ma), M(un);
  }
  var st = r(null), Mt = null;
  function ye(l) {
    var t = l.alternate;
    H(Dl, Dl.current & 1), H(st, l), Mt === null && (t === null || ma.current !== null || t.memoizedState !== null) && (Mt = l);
  }
  function $i(l) {
    H(Dl, Dl.current), H(st, l), Mt === null && (Mt = l);
  }
  function Ko(l) {
    l.tag === 22 ? (H(Dl, Dl.current), H(st, l), Mt === null && (Mt = l)) : he();
  }
  function he() {
    H(Dl, Dl.current), H(st, st.current);
  }
  function dt(l) {
    M(st), Mt === l && (Mt = null), M(Dl);
  }
  var Dl = r(0);
  function nn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || tf(e) || ef(e)))
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
  var wt = 0, W = null, yl = null, Cl = null, cn = !1, va = !1, Ve = !1, fn = 0, au = 0, ga = null, cy = 0;
  function El() {
    throw Error(o(321));
  }
  function Fi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ft(l[e], t[e])) return !1;
    return !0;
  }
  function ki(l, t, e, a, u, n) {
    return wt = n, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? Us : rc, Ve = !1, n = e(a, u), Ve = !1, va && (n = Wo(
      t,
      e,
      a,
      u
    )), Jo(l), n;
  }
  function Jo(l) {
    z.H = iu;
    var t = yl !== null && yl.next !== null;
    if (wt = 0, Cl = yl = W = null, cn = !1, au = 0, ga = null, t) throw Error(o(300));
    l === null || Hl || (l = l.dependencies, l !== null && ku(l) && (Hl = !0));
  }
  function Wo(l, t, e, a) {
    W = l;
    var u = 0;
    do {
      if (va && (ga = null), au = 0, va = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Cl = yl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Rs, n = t(e, a);
    } while (va);
    return n;
  }
  function fy() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? uu(t) : t, l = l.useState()[0], (yl !== null ? yl.memoizedState : null) !== l && (W.flags |= 1024), t;
  }
  function Ii() {
    var l = fn !== 0;
    return fn = 0, l;
  }
  function Pi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function lc(l) {
    if (cn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      cn = !1;
    }
    wt = 0, Cl = yl = W = null, va = !1, au = fn = 0, ga = null;
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Cl === null ? W.memoizedState = Cl = l : Cl = Cl.next = l, Cl;
  }
  function Ul() {
    if (yl === null) {
      var l = W.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = yl.next;
    var t = Cl === null ? W.memoizedState : Cl.next;
    if (t !== null)
      Cl = t, yl = l;
    else {
      if (l === null)
        throw W.alternate === null ? Error(o(467)) : Error(o(310));
      yl = l, l = {
        memoizedState: yl.memoizedState,
        baseState: yl.baseState,
        baseQueue: yl.baseQueue,
        queue: yl.queue,
        next: null
      }, Cl === null ? W.memoizedState = Cl = l : Cl = Cl.next = l;
    }
    return Cl;
  }
  function on() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(l) {
    var t = au;
    return au += 1, ga === null && (ga = []), l = jo(ga, l, t), t = W, (Cl === null ? t.memoizedState : Cl.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Us : rc), l;
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return uu(l);
      if (l.$$typeof === Yl) return Ql(l);
    }
    throw Error(o(438, String(l)));
  }
  function tc(l) {
    var t = null, e = W.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = W.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = on(), W.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = St;
    return t.index++, e;
  }
  function Kt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function dn(l) {
    var t = Ul();
    return ec(t, yl, l);
  }
  function ec(l, t, e) {
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
      var f = i = null, s = null, g = t, T = !1;
      do {
        var _ = g.lane & -536870913;
        if (_ !== g.lane ? (ll & _) === _ : (wt & _) === _) {
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
            }), _ === da && (T = !0);
          else if ((wt & S) === S) {
            g = g.next, S === da && (T = !0);
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
            }, s === null ? (f = s = _, i = n) : s = s.next = _, W.lanes |= S, ge |= S;
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
          }, s === null ? (f = s = S, i = n) : s = s.next = S, W.lanes |= _, ge |= _;
        g = g.next;
      } while (g !== null && g !== t);
      if (s === null ? i = n : s.next = f, !ft(n, l.memoizedState) && (Hl = !0, T && (e = ra, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ac(l) {
    var t = Ul(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ft(n, t.memoizedState) || (Hl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function $o(l, t, e) {
    var a = W, u = Ul(), n = el;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !ft(
      (yl || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Hl = !0), u = u.queue, ic(Io.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Cl !== null && Cl.memoizedState.tag & 1) {
      if (a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        ko.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), vl === null) throw Error(o(349));
      n || (wt & 127) !== 0 || Fo(a, t, e);
    }
    return e;
  }
  function Fo(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = W.updateQueue, t === null ? (t = on(), W.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function ko(l, t, e, a) {
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
    var t = Ne(l, 2);
    t !== null && at(t, l, 2);
  }
  function uc(l) {
    var t = Wl();
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
      lastRenderedReducer: Kt,
      lastRenderedState: l
    }, t;
  }
  function ts(l, t, e, a) {
    return l.baseState = e, ec(
      l,
      yl,
      typeof a == "function" ? a : Kt
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
      z.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, es(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function es(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = z.T, i = {};
      z.T = i;
      try {
        var f = e(u, a), s = z.S;
        s !== null && s(i, f), as(l, t, f);
      } catch (g) {
        nc(l, t, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), z.T = n;
      }
    } else
      try {
        n = e(u, a), as(l, t, n);
      } catch (g) {
        nc(l, t, g);
      }
  }
  function as(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        us(l, t, a);
      },
      function(a) {
        return nc(l, t, a);
      }
    ) : us(l, t, e);
  }
  function us(l, t, e) {
    t.status = "fulfilled", t.value = e, ns(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, es(l, e)));
  }
  function nc(l, t, e) {
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
  function cs(l, t) {
    if (el) {
      var e = vl.formState;
      if (e !== null) {
        l: {
          var a = W;
          if (el) {
            if (Sl) {
              t: {
                for (var u = Sl, n = _t; u.nodeType !== 8; ) {
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
                Sl = Ot(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            fe(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = Wl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: is,
      lastRenderedState: t
    }, e.queue = a, e = Ms.bind(
      null,
      W,
      a
    ), a.dispatch = e, a = uc(!1), n = dc.bind(
      null,
      W,
      !1,
      a.queue
    ), a = Wl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = oy.bind(
      null,
      W,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function fs(l) {
    var t = Ul();
    return os(t, yl, l);
  }
  function os(l, t, e) {
    if (t = ec(
      l,
      t,
      is
    )[0], l = dn(Kt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = uu(t);
      } catch (i) {
        throw i === ya ? ln : i;
      }
    else a = t;
    t = Ul();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (W.flags |= 2048, Sa(
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
    var t = Ul(), e = yl;
    if (e !== null)
      return os(t, e, l);
    Ul(), t = t.memoizedState, e = Ul();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function Sa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = W.updateQueue, t === null && (t = on(), W.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ds() {
    return Ul().memoizedState;
  }
  function rn(l, t, e, a) {
    var u = Wl();
    W.flags |= l, u.memoizedState = Sa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function yn(l, t, e, a) {
    var u = Ul();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    yl !== null && a !== null && Fi(a, yl.memoizedState.deps) ? u.memoizedState = Sa(t, n, e, a) : (W.flags |= l, u.memoizedState = Sa(
      1 | t,
      n,
      e,
      a
    ));
  }
  function rs(l, t) {
    rn(8390656, 8, l, t);
  }
  function ic(l, t) {
    yn(2048, 8, l, t);
  }
  function dy(l) {
    W.flags |= 4;
    var t = W.updateQueue;
    if (t === null)
      t = on(), W.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function ys(l) {
    var t = Ul().memoizedState;
    return dy({ ref: t, nextImpl: l }), function() {
      if ((fl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function hs(l, t) {
    return yn(4, 2, l, t);
  }
  function ms(l, t) {
    return yn(4, 4, l, t);
  }
  function vs(l, t) {
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
    e = e != null ? e.concat([l]) : null, yn(4, 4, vs.bind(null, t, l), e);
  }
  function cc() {
  }
  function Ss(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Fi(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function bs(l, t) {
    var e = Ul();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Fi(t, a[1]))
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
  function fc(l, t, e) {
    return e === void 0 || (wt & 1073741824) !== 0 && (ll & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = p0(), W.lanes |= l, ge |= l, e);
  }
  function ps(l, t, e, a) {
    return ft(e, t) ? e : ma.current !== null ? (l = fc(l, e, a), ft(l, t) || (Hl = !0), l) : (wt & 42) === 0 || (wt & 1073741824) !== 0 && (ll & 261930) === 0 ? (Hl = !0, l.memoizedState = e) : (l = p0(), W.lanes |= l, ge |= l, t);
  }
  function zs(l, t, e, a, u) {
    var n = R.p;
    R.p = n !== 0 && 8 > n ? n : 8;
    var i = z.T, f = {};
    z.T = f, dc(l, !1, t, e);
    try {
      var s = u(), g = z.S;
      if (g !== null && g(f, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var T = iy(
          s,
          a
        );
        nu(
          l,
          t,
          T,
          ht(l)
        );
      } else
        nu(
          l,
          t,
          a,
          ht(l)
        );
    } catch (_) {
      nu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        ht()
      );
    } finally {
      R.p = n, i !== null && f.types !== null && (i.types = f.types), z.T = i;
    }
  }
  function ry() {
  }
  function oc(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var u = Ts(l).queue;
    zs(
      l,
      u,
      t,
      w,
      e === null ? ry : function() {
        return Es(l), e(a);
      }
    );
  }
  function Ts(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: w
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
        lastRenderedReducer: Kt,
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
      ht()
    );
  }
  function sc() {
    return Ql(Tu);
  }
  function As() {
    return Ul().memoizedState;
  }
  function _s() {
    return Ul().memoizedState;
  }
  function yy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ht();
          l = de(e);
          var a = re(t, l, e);
          a !== null && (at(a, t, e), lu(a, t, e)), t = { cache: Xi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hy(l, t, e) {
    var a = ht();
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
    var a = ht();
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
          var i = t.lastRenderedState, f = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = f, ft(f, i))
            return Ju(l, t, u, 0), vl === null && Ku(), !1;
        } catch {
        }
      if (e = Di(l, t, u, a), e !== null)
        return at(e, l, a), Ds(e, t, a), !0;
    }
    return !1;
  }
  function dc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Vc(),
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
    return l === W || t !== null && t === W;
  }
  function Os(l, t) {
    va = cn = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Ds(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Hf(l, e);
    }
  }
  var iu = {
    readContext: Ql,
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
  iu.useEffectEvent = El;
  var Us = {
    readContext: Ql,
    use: sn,
    useCallback: function(l, t) {
      return Wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ql,
    useEffect: rs,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, rn(
        4194308,
        4,
        vs.bind(null, t, l),
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
      var e = Wl();
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
      var a = Wl();
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
        W,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = uc(l);
      var t = l.queue, e = Ms.bind(null, W, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = Wl();
      return fc(e, l, t);
    },
    useTransition: function() {
      var l = uc(!1);
      return l = zs.bind(
        null,
        W,
        l.queue,
        !0,
        !1
      ), Wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = W, u = Wl();
      if (el) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), vl === null)
          throw Error(o(349));
        (ll & 127) !== 0 || Fo(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, rs(Io.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Sa(
        9,
        { destroy: void 0 },
        ko.bind(
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
      var l = Wl(), t = vl.identifierPrefix;
      if (el) {
        var e = Nt, a = xt;
        e = (a & ~(1 << 32 - ct(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = fn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = cy++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: sc,
    useFormState: cs,
    useActionState: cs,
    useOptimistic: function(l) {
      var t = Wl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = dc.bind(
        null,
        W,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: tc,
    useCacheRefresh: function() {
      return Wl().memoizedState = yy.bind(
        null,
        W
      );
    },
    useEffectEvent: function(l) {
      var t = Wl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((fl & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, rc = {
    readContext: Ql,
    use: sn,
    useCallback: Ss,
    useContext: Ql,
    useEffect: ic,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: ms,
    useMemo: bs,
    useReducer: dn,
    useRef: ds,
    useState: function() {
      return dn(Kt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = Ul();
      return ps(
        e,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = dn(Kt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: $o,
    useId: As,
    useHostTransitionStatus: sc,
    useFormState: fs,
    useActionState: fs,
    useOptimistic: function(l, t) {
      var e = Ul();
      return ts(e, yl, l, t);
    },
    useMemoCache: tc,
    useCacheRefresh: _s
  };
  rc.useEffectEvent = ys;
  var Rs = {
    readContext: Ql,
    use: sn,
    useCallback: Ss,
    useContext: Ql,
    useEffect: ic,
    useImperativeHandle: gs,
    useInsertionEffect: hs,
    useLayoutEffect: ms,
    useMemo: bs,
    useReducer: ac,
    useRef: ds,
    useState: function() {
      return ac(Kt);
    },
    useDebugValue: cc,
    useDeferredValue: function(l, t) {
      var e = Ul();
      return yl === null ? fc(e, l, t) : ps(
        e,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ac(Kt)[0], t = Ul().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: $o,
    useId: As,
    useHostTransitionStatus: sc,
    useFormState: ss,
    useActionState: ss,
    useOptimistic: function(l, t) {
      var e = Ul();
      return yl !== null ? ts(e, yl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: tc,
    useCacheRefresh: _s
  };
  Rs.useEffectEvent = ys;
  function yc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : x({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var hc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ht(), u = de(a);
      u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), lu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ht(), u = de(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = re(l, u, a), t !== null && (at(t, l, a), lu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ht(), a = de(e);
      a.tag = 2, t != null && (a.callback = t), t = re(l, a, e), t !== null && (at(t, l, e), lu(t, l, e));
    }
  };
  function Cs(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(u, n) : !0;
  }
  function Hs(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && hc.enqueueReplaceState(t, t.state, null);
  }
  function Le(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = x({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function xs(l) {
    wu(l);
  }
  function Ns(l) {
    console.error(l);
  }
  function Bs(l) {
    wu(l);
  }
  function mn(l, t) {
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
  function mc(l, t, e) {
    return e = de(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      mn(l, t);
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
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function my(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && sa(
        t,
        e,
        u,
        !0
      ), e = st.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Mt === null ? On() : e.alternate === null && Al === 0 && (Al = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Gc(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === tn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Gc(l, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Gc(l, a, u), On(), !1;
    }
    if (el)
      return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ni && (l = Error(o(422), { cause: a }), $a(Tt(l, e)))) : (a !== Ni && (t = Error(o(423), {
        cause: a
      }), $a(
        Tt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = Tt(a, e), u = mc(
        l.stateNode,
        a,
        u
      ), wi(l, u), Al !== 4 && (Al = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = Tt(n, e), hu === null ? hu = [n] : hu.push(n), Al !== 4 && (Al = 2), t === null) return !0;
    a = Tt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = mc(e.stateNode, a, l), wi(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Se === null || !Se.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = qs(u), js(
              u,
              l,
              e,
              a
            ), wi(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var vc = Error(o(461)), Hl = !1;
  function Zl(l, t, e, a) {
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
      for (var f in a)
        f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return je(t), a = ki(
      l,
      t,
      e,
      i,
      n,
      u
    ), f = Ii(), l !== null && !Hl ? (Pi(l, t, u), Jt(l, t, u)) : (el && f && Hi(t), t.flags |= 1, Zl(l, t, a, u), t.child);
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
    if (n = l.child, !Ac(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(i, a) && l.ref === t.ref)
        return Jt(l, t, u);
    }
    return t.flags |= 1, l = Qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Qs(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ka(n, a) && l.ref === t.ref)
        if (Hl = !1, t.pendingProps = a = n, Ac(l, u))
          (l.flags & 131072) !== 0 && (Hl = !0);
        else
          return t.lanes = l.lanes, Jt(l, t, u);
    }
    return gc(
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
        ), n !== null ? wo(t, n) : Ji(), Ko(t);
      else
        return a = t.lanes = 536870912, Vs(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (Pu(t, n.cachePool), wo(t, n), he(), t.memoizedState = null) : (l !== null && Pu(t, null), Ji(), he());
    return Zl(l, t, u, e), t.child;
  }
  function cu(l, t) {
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
    }, l !== null && Pu(t, null), Ji(), Ko(t), l !== null && sa(l, t, a, !0), t.childLanes = u, null;
  }
  function vn(l, t) {
    return t = Sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ls(l, t, e) {
    return Ze(t, l.child, null, e), l = vn(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function vy(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (el) {
        if (a.mode === "hidden")
          return l = vn(t, a), t.lanes = 536870912, cu(null, l);
        if ($i(t), (l = Sl) ? (l = ed(
          l,
          _t
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: xt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Oo(l), e.return = t, t.child = e, Gl = t, Sl = null)) : l = null, l === null) throw fe(t);
        return t.lanes = 536870912, null;
      }
      return vn(t, a);
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
      else if (Hl || sa(l, t, e, !1), u = (e & l.childLanes) !== 0, Hl || u) {
        if (a = vl, a !== null && (i = xf(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ne(l, i), at(a, l, i), vc;
        On(), t = Ls(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, Sl = Ot(i.nextSibling), Gl = t, el = !0, ce = null, _t = !1, l !== null && Ro(t, l), t = vn(t, a), t.flags |= 4096;
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
  function gc(l, t, e, a, u) {
    return je(t), e = ki(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = Ii(), l !== null && !Hl ? (Pi(l, t, u), Jt(l, t, u)) : (el && a && Hi(t), t.flags |= 1, Zl(l, t, e, u), t.child);
  }
  function ws(l, t, e, a, u, n) {
    return je(t), t.updateQueue = null, e = Wo(
      t,
      a,
      e,
      u
    ), Jo(l), a = Ii(), l !== null && !Hl ? (Pi(l, t, n), Jt(l, t, n)) : (el && a && Hi(t), t.flags |= 1, Zl(l, t, e, n), t.child);
  }
  function Ks(l, t, e, a, u) {
    if (je(t), t.stateNode === null) {
      var n = ia, i = e.contextType;
      typeof i == "object" && i !== null && (n = Ql(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Vi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Ql(i) : ia, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (yc(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && hc.enqueueReplaceState(n, n.state, null), eu(t, a, n, u), tu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, s = Le(e, f);
      n.props = s;
      var g = n.context, T = e.contextType;
      i = ia, typeof T == "object" && T !== null && (i = Ql(T));
      var _ = e.getDerivedStateFromProps;
      T = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || g !== i) && Hs(
        t,
        n,
        a,
        i
      ), se = !1;
      var S = t.memoizedState;
      n.state = S, eu(t, a, n, u), tu(), g = t.memoizedState, f || S !== g || se ? (typeof _ == "function" && (yc(
        t,
        e,
        _,
        a
      ), g = t.memoizedState), (s = se || Cs(
        t,
        e,
        s,
        a,
        S,
        g,
        i
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Li(l, t), i = t.memoizedProps, T = Le(e, i), n.props = T, _ = t.pendingProps, S = n.context, g = e.contextType, s = ia, typeof g == "object" && g !== null && (s = Ql(g)), f = e.getDerivedStateFromProps, (g = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== _ || S !== s) && Hs(
        t,
        n,
        a,
        s
      ), se = !1, S = t.memoizedState, n.state = S, eu(t, a, n, u), tu();
      var p = t.memoizedState;
      i !== _ || S !== p || se || l !== null && l.dependencies !== null && ku(l.dependencies) ? (typeof f == "function" && (yc(
        t,
        e,
        f,
        a
      ), p = t.memoizedState), (T = se || Cs(
        t,
        e,
        T,
        a,
        S,
        p,
        s
      ) || l !== null && l.dependencies !== null && ku(l.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        p,
        s
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), n.props = a, n.state = p, n.context = s, a = T) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : Zl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Jt(
      l,
      t,
      u
    ), l;
  }
  function Js(l, t, e, a) {
    return Ye(), t.flags |= 256, Zl(l, t, e, a), t.child;
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(l) {
    return { baseLanes: l, cachePool: Yo() };
  }
  function pc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= yt), l;
  }
  function Ws(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (el) {
        if (u ? ye(t) : he(), (l = Sl) ? (l = ed(
          l,
          _t
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ie !== null ? { id: xt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Oo(l), e.return = t, t.child = e, Gl = t, Sl = null)) : l = null, l === null) throw fe(t);
        return ef(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, u ? (he(), u = t.mode, f = Sn(
        { mode: "hidden", children: f },
        u
      ), a = Be(
        a,
        u,
        e,
        null
      ), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = bc(e), a.childLanes = pc(
        l,
        i,
        e
      ), t.memoizedState = Sc, cu(null, a)) : (ye(t), zc(t, f));
    }
    var s = l.memoizedState;
    if (s !== null && (f = s.dehydrated, f !== null)) {
      if (n)
        t.flags & 256 ? (ye(t), t.flags &= -257, t = Tc(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (he(), t.child = l.child, t.flags |= 128, t = null) : (he(), f = a.fallback, u = t.mode, a = Sn(
          { mode: "visible", children: a.children },
          u
        ), f = Be(
          f,
          u,
          e,
          null
        ), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Ze(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = bc(e), a.childLanes = pc(
          l,
          i,
          e
        ), t.memoizedState = Sc, t = cu(null, a));
      else if (ye(t), ef(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var g = i.dgst;
        i = g, a = Error(o(419)), a.stack = "", a.digest = i, $a({ value: a, source: null, stack: null }), t = Tc(
          l,
          t,
          e
        );
      } else if (Hl || sa(l, t, e, !1), i = (e & l.childLanes) !== 0, Hl || i) {
        if (i = vl, i !== null && (a = xf(i, e), a !== 0 && a !== s.retryLane))
          throw s.retryLane = a, Ne(l, a), at(i, l, a), vc;
        tf(f) || On(), t = Tc(
          l,
          t,
          e
        );
      } else
        tf(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, Sl = Ot(
          f.nextSibling
        ), Gl = t, el = !0, ce = null, _t = !1, l !== null && Ro(t, l), t = zc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (he(), f = a.fallback, u = t.mode, s = l.child, g = s.sibling, a = Qt(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, g !== null ? f = Qt(
      g,
      f
    ) : (f = Be(
      f,
      u,
      e,
      null
    ), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, cu(null, a), a = t.child, f = l.child.memoizedState, f === null ? f = bc(e) : (u = f.cachePool, u !== null ? (s = Rl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Yo(), f = {
      baseLanes: f.baseLanes | e,
      cachePool: u
    }), a.memoizedState = f, a.childLanes = pc(
      l,
      i,
      e
    ), t.memoizedState = Sc, cu(l.child, a)) : (ye(t), e = l.child, l = e.sibling, e = Qt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function zc(l, t) {
    return t = Sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Sn(l, t) {
    return l = ot(22, l, null, t), l.lanes = 0, l;
  }
  function Tc(l, t, e) {
    return Ze(t, l.child, null, e), l = zc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function $s(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qi(l.return, t, e);
  }
  function Ec(l, t, e, a, u, n) {
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
  function Fs(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Dl.current, f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, H(Dl, i), Zl(l, t, a, e), a = el ? Wa : 0, !f && l !== null && (l.flags & 128) !== 0)
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
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Ec(
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
        Ec(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Ec(
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
  function Ac(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ku(l)));
  }
  function gy(l, t, e) {
    switch (t.tag) {
      case 3:
        Jl(t, t.stateNode.containerInfo), oe(t, Rl, l.memoizedState.cache), Ye();
        break;
      case 27:
      case 5:
        xa(t);
        break;
      case 4:
        Jl(t, t.stateNode.containerInfo);
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
            return Fs(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), H(Dl, Dl.current), a) break;
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
  function ks(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Hl = !0;
      else {
        if (!Ac(l, e) && (t.flags & 128) === 0)
          return Hl = !1, gy(
            l,
            t,
            e
          );
        Hl = (l.flags & 131072) !== 0;
      }
    else
      Hl = !1, el && (t.flags & 1048576) !== 0 && Uo(t, Wa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ge(t.elementType), t.type = l, typeof l == "function")
            Ui(l) ? (a = Le(l, a), t.tag = 1, t = Ks(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = gc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Fl) {
                t.tag = 11, t = Xs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === F) {
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
            throw t = ul(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return gc(
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
        ), Ks(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Jl(
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
              u = Tt(
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
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = Ot(l.firstChild), Gl = t, el = !0, ce = null, _t = !0, e = Zo(
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
            Zl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return gn(l, t), l === null ? (e = fd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : el || (e = t.type, l = t.pendingProps, a = Nn(
          k.current
        ).createElement(e), a[Xl] = t, a[kl] = l, Vl(a, e, l), ql(a), t.stateNode = a) : t.memoizedState = fd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return xa(t), l === null && el && (a = t.stateNode = nd(
          t.type,
          t.pendingProps,
          k.current
        ), Gl = t, _t = !0, u = Sl, Te(t.type) ? (af = u, Sl = Ot(a.firstChild)) : Sl = u), Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), gn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && el && ((u = a = Sl) && (a = Jy(
          a,
          t.type,
          t.pendingProps,
          _t
        ), a !== null ? (t.stateNode = a, Gl = t, Sl = Ot(a.firstChild), _t = !1, u = !0) : u = !1), u || fe(t)), xa(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, Ic(u, n) ? a = null : i !== null && Ic(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = ki(
          l,
          t,
          fy,
          null,
          null,
          e
        ), Tu._currentValue = u), gn(l, t), Zl(l, t, a, e), t.child;
      case 6:
        return l === null && el && ((l = e = Sl) && (e = Wy(
          e,
          t.pendingProps,
          _t
        ), e !== null ? (t.stateNode = e, Gl = t, Sl = null, l = !0) : l = !1), l || fe(t)), null;
      case 13:
        return Ws(l, t, e);
      case 4:
        return Jl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ze(
          t,
          null,
          a,
          e
        ) : Zl(l, t, a, e), t.child;
      case 11:
        return Xs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Zl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, oe(t, t.type, a.value), Zl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, je(t), u = Ql(u), a = a(u), t.flags |= 1, Zl(l, t, a, e), t.child;
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
        return Fs(l, t, e);
      case 31:
        return vy(l, t, e);
      case 22:
        return Zs(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return je(t), a = Ql(Rl), l === null ? (u = Qi(), u === null && (u = vl, n = Xi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Vi(t), oe(t, Rl, u)) : ((l.lanes & e) !== 0 && (Li(l, t), eu(t, null, null, e), tu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), oe(t, Rl, a)) : (a = n.cache, oe(t, Rl, a), a !== u.cache && ji(
          t,
          [Rl],
          e,
          !0
        ))), Zl(
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
  function _c(l, t, e, a, u) {
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
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Rf() : 536870912, l.lanes |= t, Ta |= t);
  }
  function fu(l, t) {
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
  function bl(l) {
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
    switch (xi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Lt(Rl), Ol(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (oa(t) ? Wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bi())), bl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Wt(t), n !== null ? (bl(t), Is(t, n)) : (bl(t), _c(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Wt(t), bl(t), Is(t, n)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Wt(t), bl(t), _c(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (Uu(t), e = k.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), null;
          }
          l = Y.current, oa(t) ? Co(t) : (l = nd(u, a, e), t.stateNode = l, Wt(t));
        }
        return bl(t), null;
      case 5:
        if (Uu(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Wt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), null;
          }
          if (n = Y.current, oa(t))
            Co(t);
          else {
            var i = Nn(
              k.current
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
            n[Xl] = t, n[kl] = a;
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
            l: switch (Vl(n, u, a), u) {
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
        return bl(t), _c(
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
          if (l = k.current, oa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Gl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Xl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || W0(l.nodeValue, e)), l || fe(t, !0);
          } else
            l = Nn(l).createTextNode(
              a
            ), l[Xl] = t, t.stateNode = l;
        }
        return bl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = oa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Xl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), l = !1;
          } else
            e = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return bl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = oa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Xl] = t;
            } else
              Ye(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), u = !1;
          } else
            u = Bi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), bn(t, t.updateQueue), bl(t), null);
      case 4:
        return Ol(), l === null && Jc(t.stateNode.containerInfo), bl(t), null;
      case 10:
        return Lt(t.type), bl(t), null;
      case 19:
        if (M(Dl), a = t.memoizedState, a === null) return bl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) fu(a, !1);
          else {
            if (Al !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = nn(l), n !== null) {
                  for (t.flags |= 128, fu(a, !1), l = n.updateQueue, t.updateQueue = l, bn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Mo(e, l), e = e.sibling;
                  return H(
                    Dl,
                    Dl.current & 1 | 2
                  ), el && Zt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && nt() > An && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = nn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, bn(t, l), fu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !el)
                return bl(t), null;
            } else
              2 * nt() - a.renderingStartTime > An && e !== 536870912 && (t.flags |= 128, u = !0, fu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = nt(), l.sibling = null, e = Dl.current, H(
          Dl,
          u ? e & 1 | 2 : e & 1
        ), el && Zt(t, a.treeForkCount), l) : (bl(t), null);
      case 22:
      case 23:
        return dt(t), Wi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), e = t.updateQueue, e !== null && bn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && M(Xe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Lt(Rl), bl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function by(l, t) {
    switch (xi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Lt(Rl), Ol(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Uu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ye();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Dl), null;
      case 4:
        return Ol(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return dt(t), Wi(), l !== null && M(Xe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Lt(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ps(l, t) {
    switch (xi(t), t.tag) {
      case 3:
        Lt(Rl), Ol();
        break;
      case 26:
      case 27:
      case 5:
        Uu(t);
        break;
      case 4:
        Ol();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        M(Dl);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        dt(t), Wi(), l !== null && M(Xe);
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
    } catch (f) {
      rl(t, t.return, f);
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
            var i = a.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, u = t;
              var s = e, g = f;
              try {
                g();
              } catch (T) {
                rl(
                  u,
                  s,
                  T
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (T) {
      rl(t, t.return, T);
    }
  }
  function l0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Lo(t, e);
      } catch (a) {
        rl(l, l.return, a);
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
      rl(l, t, a);
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
      rl(l, t, u);
    }
  }
  function Bt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          rl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          rl(l, t, u);
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
      rl(l, l.return, u);
    }
  }
  function Mc(l, t, e) {
    try {
      var a = l.stateNode;
      Qy(a, l.type, e, t), a[kl] = t;
    } catch (u) {
      rl(l, l.return, u);
    }
  }
  function a0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Te(l.type) || l.tag === 4;
  }
  function Oc(l) {
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
  function Dc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Xt));
    else if (a !== 4 && (a === 27 && Te(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Dc(l, t, e), l = l.sibling; l !== null; )
        Dc(l, t, e), l = l.sibling;
  }
  function pn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Te(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (pn(l, t, e), l = l.sibling; l !== null; )
        pn(l, t, e), l = l.sibling;
  }
  function u0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Vl(t, a, e), t[Xl] = l, t[kl] = e;
    } catch (n) {
      rl(l, l.return, n);
    }
  }
  var $t = !1, xl = !1, Uc = !1, n0 = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function py(l, t) {
    if (l = l.containerInfo, Fc = Qn, l = go(l), Ti(l)) {
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
            var i = 0, f = -1, s = -1, g = 0, T = 0, _ = l, S = null;
            t: for (; ; ) {
              for (var p; _ !== e || u !== 0 && _.nodeType !== 3 || (f = i + u), _ !== n || a !== 0 && _.nodeType !== 3 || (s = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (p = _.firstChild) !== null; )
                S = _, _ = p;
              for (; ; ) {
                if (_ === l) break t;
                if (S === e && ++g === u && (f = i), S === n && ++T === a && (s = i), (p = _.nextSibling) !== null) break;
                _ = S, S = _.parentNode;
              }
              _ = p;
            }
            e = f === -1 || s === -1 ? null : { start: f, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (kc = { focusedElem: l, selectionRange: e }, Qn = !1, jl = t; jl !== null; )
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
                  var N = Le(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    N,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (V) {
                  rl(
                    e,
                    e.return,
                    V
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  lf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(l);
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
        kt(l, e), a & 4 && ou(5, e);
        break;
      case 1:
        if (kt(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              rl(e, e.return, i);
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
              rl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && l0(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if (kt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
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
            rl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && u0(e);
      case 26:
      case 5:
        kt(l, e), t === null && a & 4 && e0(e), a & 512 && su(e, e.return);
        break;
      case 12:
        kt(l, e);
        break;
      case 31:
        kt(l, e), a & 4 && o0(l, e);
        break;
      case 13:
        kt(l, e), a & 4 && s0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Uy.bind(
          null,
          e
        ), $y(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || $t, !a) {
          t = t !== null && t.memoizedState !== null || xl, u = $t;
          var n = xl;
          $t = a, (xl = t) && !n ? It(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : kt(l, e), $t = u, xl = n;
        }
        break;
      case 30:
        break;
      default:
        kt(l, e);
    }
  }
  function c0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, c0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ni(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var pl = null, Pl = !1;
  function Ft(l, t, e) {
    for (e = e.child; e !== null; )
      f0(l, t, e), e = e.sibling;
  }
  function f0(l, t, e) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(Na, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        xl || Bt(e, t), Ft(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        xl || Bt(e, t);
        var a = pl, u = Pl;
        Te(e.type) && (pl = e.stateNode, Pl = !1), Ft(
          l,
          t,
          e
        ), bu(e.stateNode), pl = a, Pl = u;
        break;
      case 5:
        xl || Bt(e, t);
      case 6:
        if (a = pl, u = Pl, pl = null, Ft(
          l,
          t,
          e
        ), pl = a, Pl = u, pl !== null)
          if (Pl)
            try {
              (pl.nodeType === 9 ? pl.body : pl.nodeName === "HTML" ? pl.ownerDocument.body : pl).removeChild(e.stateNode);
            } catch (n) {
              rl(
                e,
                t,
                n
              );
            }
          else
            try {
              pl.removeChild(e.stateNode);
            } catch (n) {
              rl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        pl !== null && (Pl ? (l = pl, ld(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ra(l)) : ld(pl, e.stateNode));
        break;
      case 4:
        a = pl, u = Pl, pl = e.stateNode.containerInfo, Pl = !0, Ft(
          l,
          t,
          e
        ), pl = a, Pl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        me(2, e, t), xl || me(4, e, t), Ft(
          l,
          t,
          e
        );
        break;
      case 1:
        xl || (Bt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && t0(
          e,
          t,
          a
        )), Ft(
          l,
          t,
          e
        );
        break;
      case 21:
        Ft(
          l,
          t,
          e
        );
        break;
      case 22:
        xl = (a = xl) || e.memoizedState !== null, Ft(
          l,
          t,
          e
        ), xl = a;
        break;
      default:
        Ft(
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
        rl(t, t.return, e);
      }
    }
  }
  function s0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ra(l);
      } catch (e) {
        rl(t, t.return, e);
      }
  }
  function zy(l) {
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
  function zn(l, t) {
    var e = zy(l);
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
        var u = e[a], n = l, i = t, f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Te(f.type)) {
                pl = f.stateNode, Pl = !1;
                break l;
              }
              break;
            case 5:
              pl = f.stateNode, Pl = !1;
              break l;
            case 3:
            case 4:
              pl = f.stateNode.containerInfo, Pl = !0;
              break l;
          }
          f = f.return;
        }
        if (pl === null) throw Error(o(160));
        f0(n, i, u), pl = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        d0(t, l), t = t.sibling;
  }
  var Ct = null;
  function d0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l), tt(l), a & 4 && (me(3, l, l.return), ou(3, l), me(5, l, l.return));
        break;
      case 1:
        lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), a & 64 && $t && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Ct;
        if (lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[qa] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Vl(n, a, e), n[Xl] = l, ql(n), a = n;
                      break l;
                    case "link":
                      var i = dd(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Vl(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = dd(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Vl(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[Xl] = l, ql(n), a = n;
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
            )) : a === null && l.stateNode !== null && Mc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), e !== null && a & 4 && Mc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (lt(t, l), tt(l), a & 512 && (xl || e === null || Bt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Pe(u, "");
          } catch (N) {
            rl(l, l.return, N);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Mc(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Uc = !0);
        break;
      case 6:
        if (lt(t, l), tt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (N) {
            rl(l, l.return, N);
          }
        }
        break;
      case 3:
        if (qn = null, u = Ct, Ct = Bn(t.containerInfo), lt(t, l), Ct = u, tt(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ra(t.containerInfo);
          } catch (N) {
            rl(l, l.return, N);
          }
        Uc && (Uc = !1, r0(l));
        break;
      case 4:
        a = Ct, Ct = Bn(
          l.stateNode.containerInfo
        ), lt(t, l), tt(l), Ct = a;
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 31:
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
        break;
      case 13:
        lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (En = nt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, g = $t, T = xl;
        if ($t = g || u, xl = T || s, lt(t, l), xl = T, $t = g, tt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || $t || xl || we(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (n = s.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = s.stateNode;
                    var _ = s.memoizedProps.style, S = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    f.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (N) {
                  rl(s, s.return, N);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = u ? "" : s.memoizedProps;
                } catch (N) {
                  rl(s, s.return, N);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  u ? td(p, !0) : td(s.stateNode, !1);
                } catch (N) {
                  rl(s, s.return, N);
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
        lt(t, l), tt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, zn(l, a)));
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
            var u = e.stateNode, n = Oc(l);
            pn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), e.flags &= -33);
            var f = Oc(l);
            pn(l, f, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, g = Oc(l);
            Dc(
              l,
              g,
              s
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (T) {
        rl(l, l.return, T);
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
  function kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        i0(l, t.alternate, t), t = t.sibling;
  }
  function we(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, t, t.return), we(t);
          break;
        case 1:
          Bt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && t0(
            t,
            t.return,
            e
          ), we(t);
          break;
        case 27:
          bu(t.stateNode);
        case 26:
        case 5:
          Bt(t, t.return), we(t);
          break;
        case 22:
          t.memoizedState === null && we(t);
          break;
        case 30:
          we(t);
          break;
        default:
          we(t);
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
              rl(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++)
                  Vo(s[u], f);
            } catch (g) {
              rl(a, a.return, g);
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
  function Rc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Fa(e));
  }
  function Cc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l));
  }
  function Ht(l, t, e, a) {
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
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && ou(9, t);
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
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l)));
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
            var n = t.memoizedProps, i = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (s) {
            rl(t, t.return, s);
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
        ) : du(l, t) : n._visibility & 2 ? Ht(
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
        )), u & 2048 && Rc(i, t);
        break;
      case 24:
        Ht(
          l,
          t,
          e,
          a
        ), u & 2048 && Cc(t.alternate, t);
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
  function ba(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, f = e, s = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            n,
            i,
            f,
            s,
            u
          ), ou(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? ba(
            n,
            i,
            f,
            s,
            u
          ) : du(
            n,
            i
          ) : (T._visibility |= 2, ba(
            n,
            i,
            f,
            s,
            u
          )), u && g & 2048 && Rc(
            i.alternate,
            i
          );
          break;
        case 24:
          ba(
            n,
            i,
            f,
            s,
            u
          ), u && g & 2048 && Cc(i.alternate, i);
          break;
        default:
          ba(
            n,
            i,
            f,
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
            du(e, a), u & 2048 && Rc(
              a.alternate,
              a
            );
            break;
          case 24:
            du(e, a), u & 2048 && Cc(a.alternate, a);
            break;
          default:
            du(e, a);
        }
        t = t.sibling;
      }
  }
  var ru = 8192;
  function pa(l, t, e) {
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
        pa(
          l,
          t,
          e
        ), l.flags & ru && l.memoizedState !== null && c1(
          e,
          Ct,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        pa(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Ct;
        Ct = Bn(l.stateNode.containerInfo), pa(
          l,
          t,
          e
        ), Ct = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ru, ru = 16777216, pa(
          l,
          t,
          e
        ), ru = a) : pa(
          l,
          t,
          e
        ));
        break;
      default:
        pa(
          l,
          t,
          e
        );
    }
  }
  function m0(l) {
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
      m0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        v0(l), l = l.sibling;
  }
  function v0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yu(l), l.flags & 2048 && me(9, l, l.return);
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
      m0(l);
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
  function g0(l, t) {
    for (; jl !== null; ) {
      var e = jl;
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
          Fa(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, jl = a;
      else
        l: for (e = l; jl !== null; ) {
          a = jl;
          var u = a.sibling, n = a.return;
          if (c0(a), a === e) {
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
      var t = Ql(Rl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Ql(Rl).controller.signal;
    }
  }, Ey = typeof WeakMap == "function" ? WeakMap : Map, fl = 0, vl = null, I = null, ll = 0, dl = 0, rt = null, ve = !1, za = !1, Hc = !1, Pt = 0, Al = 0, ge = 0, Ke = 0, xc = 0, yt = 0, Ta = 0, hu = null, et = null, Nc = !1, En = 0, S0 = 0, An = 1 / 0, _n = null, Se = null, Nl = 0, be = null, Ea = null, le = 0, Bc = 0, Yc = null, b0 = null, mu = 0, qc = null;
  function ht() {
    return (fl & 2) !== 0 && ll !== 0 ? ll & -ll : z.T !== null ? Vc() : Nf();
  }
  function p0() {
    if (yt === 0)
      if ((ll & 536870912) === 0 || el) {
        var l = Hu;
        Hu <<= 1, (Hu & 3932160) === 0 && (Hu = 262144), yt = l;
      } else yt = 536870912;
    return l = st.current, l !== null && (l.flags |= 32), yt;
  }
  function at(l, t, e) {
    (l === vl && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null) && (Aa(l, 0), pe(
      l,
      ll,
      yt,
      !1
    )), Ya(l, e), ((fl & 2) === 0 || l !== vl) && (l === vl && ((fl & 2) === 0 && (Ke |= e), Al === 4 && pe(
      l,
      ll,
      yt,
      !1
    )), Yt(l));
  }
  function z0(l, t, e) {
    if ((fl & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ba(l, t), u = a ? My(l, t) : Xc(l, t, !0), n = a;
    do {
      if (u === 0) {
        za && !a && pe(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !Ay(e)) {
          u = Xc(l, t, !1), n = !1;
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
              var f = l;
              u = hu;
              var s = f.current.memoizedState.isDehydrated;
              if (s && (Aa(f, i).flags |= 256), i = Xc(
                f,
                i,
                !1
              ), i !== 2) {
                if (Hc && !s) {
                  f.errorRecoveryDisabledLanes |= n, Ke |= n, u = 4;
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
          Aa(l, 0), pe(l, t, 0, !0);
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
              pe(
                a,
                t,
                yt,
                !ve
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
          if ((t & 62914560) === t && (u = En + 300 - nt(), 10 < u)) {
            if (pe(
              a,
              t,
              yt,
              !ve
            ), Nu(a, 0, !0) !== 0) break l;
            le = t, a.timeoutHandle = I0(
              T0.bind(
                null,
                a,
                e,
                et,
                _n,
                Nc,
                t,
                yt,
                Ke,
                Ta,
                ve,
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
            Nc,
            t,
            yt,
            Ke,
            Ta,
            ve,
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
  function T0(l, t, e, a, u, n, i, f, s, g, T, _, S, p) {
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
      var N = (n & 62914560) === n ? En - nt() : (n & 4194048) === n ? S0 - nt() : 0;
      if (N = f1(
        _,
        N
      ), N !== null) {
        le = n, l.cancelPendingCommit = N(
          R0.bind(
            null,
            l,
            t,
            n,
            e,
            a,
            u,
            i,
            f,
            s,
            T,
            _,
            null,
            S,
            p
          )
        ), pe(l, n, i, !g);
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
      f,
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
  function pe(l, t, e, a) {
    t &= ~xc, t &= ~Ke, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ct(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Cf(l, e, t);
  }
  function Mn() {
    return (fl & 6) === 0 ? (vu(0), !1) : !0;
  }
  function jc() {
    if (I !== null) {
      if (dl === 0)
        var l = I.return;
      else
        l = I, Vt = qe = null, lc(l), ha = null, Ia = 0, l = I;
      for (; l !== null; )
        Ps(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function Aa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Ly(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), le = 0, jc(), vl = l, I = e = Qt(l.current, null), ll = t, dl = 0, rt = null, ve = !1, za = Ba(l, t), Hc = !1, Ta = yt = xc = Ke = ge = Al = 0, et = hu = null, Nc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ct(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return Pt = t, Ku(), e;
  }
  function E0(l, t) {
    W = null, z.H = iu, t === ya || t === ln ? (t = Xo(), dl = 3) : t === Zi ? (t = Xo(), dl = 4) : dl = t === vc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rt = t, I === null && (Al = 1, mn(
      l,
      Tt(t, l.current)
    ));
  }
  function A0() {
    var l = st.current;
    return l === null ? !0 : (ll & 4194048) === ll ? Mt === null : (ll & 62914560) === ll || (ll & 536870912) !== 0 ? l === Mt : !1;
  }
  function _0() {
    var l = z.H;
    return z.H = iu, l === null ? iu : l;
  }
  function M0() {
    var l = z.A;
    return z.A = Ty, l;
  }
  function On() {
    Al = 4, ve || (ll & 4194048) !== ll && st.current !== null || (za = !0), (ge & 134217727) === 0 && (Ke & 134217727) === 0 || vl === null || pe(
      vl,
      ll,
      yt,
      !1
    );
  }
  function Xc(l, t, e) {
    var a = fl;
    fl |= 2;
    var u = _0(), n = M0();
    (vl !== l || ll !== t) && (_n = null, Aa(l, t)), t = !1;
    var i = Al;
    l: do
      try {
        if (dl !== 0 && I !== null) {
          var f = I, s = rt;
          switch (dl) {
            case 8:
              jc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var g = dl;
              if (dl = 0, rt = null, _a(l, f, s, g), e && za) {
                i = 0;
                break l;
              }
              break;
            default:
              g = dl, dl = 0, rt = null, _a(l, f, s, g);
          }
        }
        _y(), i = Al;
        break;
      } catch (T) {
        E0(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Vt = qe = null, fl = a, z.H = u, z.A = n, I === null && (vl = null, ll = 0, Ku()), i;
  }
  function _y() {
    for (; I !== null; ) O0(I);
  }
  function My(l, t) {
    var e = fl;
    fl |= 2;
    var a = _0(), u = M0();
    vl !== l || ll !== t ? (_n = null, An = nt() + 500, Aa(l, t)) : za = Ba(
      l,
      t
    );
    l: do
      try {
        if (dl !== 0 && I !== null) {
          t = I;
          var n = rt;
          t: switch (dl) {
            case 1:
              dl = 0, rt = null, _a(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (qo(n)) {
                dl = 0, rt = null, D0(t);
                break;
              }
              t = function() {
                dl !== 2 && dl !== 9 || vl !== l || (dl = 7), Yt(l);
              }, n.then(t, t);
              break l;
            case 3:
              dl = 7;
              break l;
            case 4:
              dl = 5;
              break l;
            case 7:
              qo(n) ? (dl = 0, rt = null, D0(t)) : (dl = 0, rt = null, _a(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var f = I;
                  if (i ? yd(i) : f.stateNode.complete) {
                    dl = 0, rt = null;
                    var s = f.sibling;
                    if (s !== null) I = s;
                    else {
                      var g = f.return;
                      g !== null ? (I = g, Dn(g)) : I = null;
                    }
                    break t;
                  }
              }
              dl = 0, rt = null, _a(l, t, n, 5);
              break;
            case 6:
              dl = 0, rt = null, _a(l, t, n, 6);
              break;
            case 8:
              jc(), Al = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Oy();
        break;
      } catch (T) {
        E0(l, T);
      }
    while (!0);
    return Vt = qe = null, z.H = a, z.A = u, fl = e, I !== null ? 0 : (vl = null, ll = 0, Ku(), Al);
  }
  function Oy() {
    for (; I !== null && !Fd(); )
      O0(I);
  }
  function O0(l) {
    var t = ks(l.alternate, l, Pt);
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : I = t;
  }
  function D0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ws(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ll
        );
        break;
      case 11:
        t = ws(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ll
        );
        break;
      case 5:
        lc(t);
      default:
        Ps(e, t), t = I = Mo(t, Pt), t = ks(e, t, Pt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Dn(l) : I = t;
  }
  function _a(l, t, e, a) {
    Vt = qe = null, lc(t), ha = null, Ia = 0;
    var u = t.return;
    try {
      if (my(
        l,
        u,
        t,
        e,
        ll
      )) {
        Al = 1, mn(
          l,
          Tt(e, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw I = u, n;
      Al = 1, mn(
        l,
        Tt(e, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (el || a === 1 ? l = !0 : za || (ll & 536870912) !== 0 ? l = !1 : (ve = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = st.current, a !== null && a.tag === 13 && (a.flags |= 16384))), U0(t, l)) : Dn(t);
  }
  function Dn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        U0(
          t,
          ve
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
  function U0(l, t) {
    do {
      var e = by(l.alternate, l);
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
  function R0(l, t, e, a, u, n, i, f, s) {
    l.cancelPendingCommit = null;
    do
      Un();
    while (Nl !== 0);
    if ((fl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Oi, ir(
        l,
        e,
        n,
        i,
        f,
        s
      ), l === vl && (I = vl = null, ll = 0), Ea = t, be = l, le = e, Bc = n, Yc = u, b0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Cy(Ru, function() {
        return B0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, u = R.p, R.p = 2, i = fl, fl |= 4;
        try {
          py(l, t, e);
        } finally {
          fl = i, R.p = u, z.T = a;
        }
      }
      Nl = 1, C0(), H0(), x0();
    }
  }
  function C0() {
    if (Nl === 1) {
      Nl = 0;
      var l = be, t = Ea, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = R.p;
        R.p = 2;
        var u = fl;
        fl |= 4;
        try {
          d0(t, l);
          var n = kc, i = go(l.containerInfo), f = n.focusedElem, s = n.selectionRange;
          if (i !== f && f && f.ownerDocument && vo(
            f.ownerDocument.documentElement,
            f
          )) {
            if (s !== null && Ti(f)) {
              var g = s.start, T = s.end;
              if (T === void 0 && (T = g), "selectionStart" in f)
                f.selectionStart = g, f.selectionEnd = Math.min(
                  T,
                  f.value.length
                );
              else {
                var _ = f.ownerDocument || document, S = _ && _.defaultView || window;
                if (S.getSelection) {
                  var p = S.getSelection(), N = f.textContent.length, V = Math.min(s.start, N), ml = s.end === void 0 ? V : Math.min(s.end, N);
                  !p.extend && V > ml && (i = ml, ml = V, V = i);
                  var y = mo(
                    f,
                    V
                  ), d = mo(
                    f,
                    ml
                  );
                  if (y && d && (p.rangeCount !== 1 || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== d.node || p.focusOffset !== d.offset)) {
                    var m = _.createRange();
                    m.setStart(y.node, y.offset), p.removeAllRanges(), V > ml ? (p.addRange(m), p.extend(d.node, d.offset)) : (m.setEnd(d.node, d.offset), p.addRange(m));
                  }
                }
              }
            }
            for (_ = [], p = f; p = p.parentNode; )
              p.nodeType === 1 && _.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < _.length; f++) {
              var A = _[f];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Qn = !!Fc, kc = Fc = null;
        } finally {
          fl = u, R.p = a, z.T = e;
        }
      }
      l.current = t, Nl = 2;
    }
  }
  function H0() {
    if (Nl === 2) {
      Nl = 0;
      var l = be, t = Ea, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = R.p;
        R.p = 2;
        var u = fl;
        fl |= 4;
        try {
          i0(l, t.alternate, t);
        } finally {
          fl = u, R.p = a, z.T = e;
        }
      }
      Nl = 3;
    }
  }
  function x0() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, kd();
      var l = be, t = Ea, e = le, a = b0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, Ea = be = null, N0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Se = null), ai(e), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            Na,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = z.T, u = R.p, R.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          z.T = t, R.p = u;
        }
      }
      (le & 3) !== 0 && Un(), Yt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === qc ? mu++ : (mu = 0, qc = l) : mu = 0, vu(0);
    }
  }
  function N0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Fa(t)));
  }
  function Un() {
    return C0(), H0(), x0(), B0();
  }
  function B0() {
    if (Nl !== 5) return !1;
    var l = be, t = Bc;
    Bc = 0;
    var e = ai(le), a = z.T, u = R.p;
    try {
      R.p = 32 > e ? 32 : e, z.T = null, e = Yc, Yc = null;
      var n = be, i = le;
      if (Nl = 0, Ea = be = null, le = 0, (fl & 6) !== 0) throw Error(o(331));
      var f = fl;
      if (fl |= 4, v0(n.current), y0(
        n,
        n.current,
        i,
        e
      ), fl = f, vu(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(Na, n);
        } catch {
        }
      return !0;
    } finally {
      R.p = u, z.T = a, N0(l, t);
    }
  }
  function Y0(l, t, e) {
    t = Tt(e, t), t = mc(l.stateNode, t, 2), l = re(l, t, 2), l !== null && (Ya(l, 2), Yt(l));
  }
  function rl(l, t, e) {
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
            l = Tt(e, l), e = qs(2), a = re(t, e, 2), a !== null && (js(
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
  function Gc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ey();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Hc = !0, u.add(e), l = Dy.bind(null, l, t, e), t.then(l, l));
  }
  function Dy(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, vl === l && (ll & e) === e && (Al === 4 || Al === 3 && (ll & 62914560) === ll && 300 > nt() - En ? (fl & 2) === 0 && Aa(l, 0) : xc |= e, Ta === ll && (Ta = 0)), Yt(l);
  }
  function q0(l, t) {
    t === 0 && (t = Rf()), l = Ne(l, t), l !== null && (Ya(l, t), Yt(l));
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
  function Cy(l, t) {
    return Pn(l, t);
  }
  var Rn = null, Ma = null, Qc = !1, Cn = !1, Zc = !1, ze = 0;
  function Yt(l) {
    l !== Ma && l.next === null && (Ma === null ? Rn = Ma = l : Ma = Ma.next = l), Cn = !0, Qc || (Qc = !0, xy());
  }
  function vu(l, t) {
    if (!Zc && Cn) {
      Zc = !0;
      do
        for (var e = !1, a = Rn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= u & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Q0(a, n));
          } else
            n = ll, n = Nu(
              a,
              a === vl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ba(a, n) || (e = !0, Q0(a, n));
          a = a.next;
        }
      while (e);
      Zc = !1;
    }
  }
  function Hy() {
    j0();
  }
  function j0() {
    Cn = Qc = !1;
    var l = 0;
    ze !== 0 && Vy() && (l = ze);
    for (var t = nt(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = X0(a, t);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (Ma = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Cn = !0)), a = u;
    }
    Nl !== 0 && Nl !== 5 || vu(l), ze !== 0 && (ze = 0);
  }
  function X0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ct(n), f = 1 << i, s = u[i];
      s === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = nr(f, t)) : s <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = vl, e = ll, e = Nu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && li(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ba(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && li(a), ai(e)) {
        case 2:
        case 8:
          e = Df;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = Uf;
          break;
        default:
          e = Ru;
      }
      return a = G0.bind(null, l), e = Pn(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && li(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function G0(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Un() && l.callbackNode !== e)
      return null;
    var a = ll;
    return a = Nu(
      l,
      l === vl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (z0(l, a, t), X0(l, nt()), l.callbackNode != null && l.callbackNode === e ? G0.bind(null, l) : null);
  }
  function Q0(l, t) {
    if (Un()) return null;
    z0(l, t, !0);
  }
  function xy() {
    wy(function() {
      (fl & 6) !== 0 ? Pn(
        Of,
        Hy
      ) : j0();
    });
  }
  function Vc() {
    if (ze === 0) {
      var l = da;
      l === 0 && (l = Cu, Cu <<= 1, (Cu & 261888) === 0 && (Cu = 256)), ze = l;
    }
    return ze;
  }
  function Z0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ju("" + l);
  }
  function V0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Ny(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Z0(
        (u[kl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[kl] || null) ? Z0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var f = new Zu(
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
                if (ze !== 0) {
                  var s = i ? V0(u, i) : new FormData(u);
                  oc(
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
                typeof n == "function" && (f.preventDefault(), s = i ? V0(u, i) : new FormData(u), oc(
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
  for (var Lc = 0; Lc < Mi.length; Lc++) {
    var wc = Mi[Lc], By = wc.toLowerCase(), Yy = wc[0].toUpperCase() + wc.slice(1);
    Rt(
      By,
      "on" + Yy
    );
  }
  Rt(po, "onAnimationEnd"), Rt(zo, "onAnimationIteration"), Rt(To, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(Ir, "onTransitionRun"), Rt(Pr, "onTransitionStart"), Rt(ly, "onTransitionCancel"), Rt(Eo, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), Re(
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
            var f = a[i], s = f.instance, g = f.currentTarget;
            if (f = f.listener, s !== n && u.isPropagationStopped())
              break l;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              wu(T);
            }
            u.currentTarget = null, n = s;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (f = a[i], s = f.instance, g = f.currentTarget, f = f.listener, s !== n && u.isPropagationStopped())
              break l;
            n = f, u.currentTarget = g;
            try {
              n(u);
            } catch (T) {
              wu(T);
            }
            u.currentTarget = null, n = s;
          }
      }
    }
  }
  function P(l, t) {
    var e = t[ui];
    e === void 0 && (e = t[ui] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (w0(t, l, 2, !1), e.add(a));
  }
  function Kc(l, t, e) {
    var a = 0;
    t && (a |= 4), w0(
      e,
      l,
      a,
      t
    );
  }
  var Hn = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(l) {
    if (!l[Hn]) {
      l[Hn] = !0, qf.forEach(function(e) {
        e !== "selectionchange" && (qy.has(e) || Kc(e, !1, l), Kc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hn] || (t[Hn] = !0, Kc("selectionchange", !1, t));
    }
  }
  function w0(l, t, e, a) {
    switch (pd(t)) {
      case 2:
        var u = d1;
        break;
      case 8:
        u = r1;
        break;
      default:
        u = of;
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
  function Wc(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = We(f), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              a = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    $f(function() {
      var g = n, T = di(e), _ = [];
      l: {
        var S = Ao.get(l);
        if (S !== void 0) {
          var p = Zu, N = l;
          switch (l) {
            case "keypress":
              if (Gu(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = Rr;
              break;
            case "focusin":
              N = "focus", p = gi;
              break;
            case "focusout":
              N = "blur", p = gi;
              break;
            case "beforeblur":
            case "afterblur":
              p = gi;
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
              p = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Sr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = xr;
              break;
            case po:
            case zo:
            case To:
              p = zr;
              break;
            case Eo:
              p = Br;
              break;
            case "scroll":
            case "scrollend":
              p = vr;
              break;
            case "wheel":
              p = qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Er;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = lo;
              break;
            case "toggle":
            case "beforetoggle":
              p = Xr;
          }
          var V = (t & 4) !== 0, ml = !V && (l === "scroll" || l === "scrollend"), y = V ? S !== null ? S + "Capture" : null : S;
          V = [];
          for (var d = g, m; d !== null; ) {
            var A = d;
            if (m = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || m === null || y === null || (A = Xa(d, y), A != null && V.push(
              Su(d, A, m)
            )), ml) break;
            d = d.return;
          }
          0 < V.length && (S = new p(
            S,
            N,
            null,
            e,
            T
          ), _.push({ event: S, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", S && e !== si && (N = e.relatedTarget || e.fromElement) && (We(N) || N[Je]))
            break l;
          if ((p || S) && (S = T.window === T ? T : (S = T.ownerDocument) ? S.defaultView || S.parentWindow : window, p ? (N = e.relatedTarget || e.toElement, p = g, N = N ? We(N) : null, N !== null && (ml = O(N), V = N.tag, N !== ml || V !== 5 && V !== 27 && V !== 6) && (N = null)) : (p = null, N = g), p !== N)) {
            if (V = If, A = "onMouseLeave", y = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (V = lo, A = "onPointerLeave", y = "onPointerEnter", d = "pointer"), ml = p == null ? S : ja(p), m = N == null ? S : ja(N), S = new V(
              A,
              d + "leave",
              p,
              e,
              T
            ), S.target = ml, S.relatedTarget = m, A = null, We(T) === g && (V = new V(
              y,
              d + "enter",
              N,
              e,
              T
            ), V.target = m, V.relatedTarget = ml, A = V), ml = A, p && N)
              t: {
                for (V = jy, y = p, d = N, m = 0, A = y; A; A = V(A))
                  m++;
                A = 0;
                for (var G = d; G; G = V(G))
                  A++;
                for (; 0 < m - A; )
                  y = V(y), m--;
                for (; 0 < A - m; )
                  d = V(d), A--;
                for (; m--; ) {
                  if (y === d || d !== null && y === d.alternate) {
                    V = y;
                    break t;
                  }
                  y = V(y), d = V(d);
                }
                V = null;
              }
            else V = null;
            p !== null && K0(
              _,
              S,
              p,
              V,
              !1
            ), N !== null && ml !== null && K0(
              _,
              ml,
              N,
              V,
              !0
            );
          }
        }
        l: {
          if (S = g ? ja(g) : window, p = S.nodeName && S.nodeName.toLowerCase(), p === "select" || p === "input" && S.type === "file")
            var nl = fo;
          else if (io(S))
            if (oo)
              nl = $r;
            else {
              nl = Jr;
              var q = Kr;
            }
          else
            p = S.nodeName, !p || p.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? g && oi(g.elementType) && (nl = fo) : nl = Wr;
          if (nl && (nl = nl(l, g))) {
            co(
              _,
              nl,
              e,
              T
            );
            break l;
          }
          q && q(l, S, g), l === "focusout" && g && S.type === "number" && g.memoizedProps.value != null && fi(S, "number", S.value);
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
            Ai = !1, So(_, e, T);
            break;
          case "selectionchange":
            if (kr) break;
          case "keydown":
          case "keyup":
            So(_, e, T);
        }
        var $;
        if (bi)
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
          ea ? uo(l, e) && (tl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (tl = "onCompositionStart");
        tl && (to && e.locale !== "ko" && (ea || tl !== "onCompositionStart" ? tl === "onCompositionEnd" && ea && ($ = Ff()) : (ne = T, hi = "value" in ne ? ne.value : ne.textContent, ea = !0)), q = xn(g, tl), 0 < q.length && (tl = new Pf(
          tl,
          l,
          null,
          e,
          T
        ), _.push({ event: tl, listeners: q }), $ ? tl.data = $ : ($ = no(e), $ !== null && (tl.data = $)))), ($ = Qr ? Zr(l, e) : Vr(l, e)) && (tl = xn(g, "onBeforeInput"), 0 < tl.length && (q = new Pf(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), _.push({
          event: q,
          listeners: tl
        }), q.data = $)), Ny(
          _,
          l,
          g,
          e,
          T
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
  function xn(l, t) {
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
  function K0(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var f = e, s = f.alternate, g = f.stateNode;
      if (f = f.tag, s !== null && s === a) break;
      f !== 5 && f !== 26 && f !== 27 || g === null || (s = g, u ? (g = Xa(e, n), g != null && i.unshift(
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
  function hl(l, t, e, a, u, n) {
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
        Jf(l, a, n);
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
          typeof n == "function" && (e === "formAction" ? (t !== "input" && hl(l, t, "name", u.name, u, null), hl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), hl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), hl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (hl(l, t, "encType", u.encType, u, null), hl(l, t, "method", u.method, u, null), hl(l, t, "target", u.target, u, null)));
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
        Bu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = hr.get(e) || e, Bu(l, e, a));
    }
  }
  function $c(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Jf(l, a, n);
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
        a != null && P("scroll", l);
        break;
      case "onScrollEnd":
        a != null && P("scrollend", l);
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
        if (!jf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[kl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Bu(l, e, a);
          }
    }
  }
  function Vl(l, t, e) {
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
                  hl(l, t, n, i, e, null);
              }
          }
        u && hl(l, t, "srcSet", e.srcSet, e, null), a && hl(l, t, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", l);
        var f = n = i = u = null, s = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  u = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  s = T;
                  break;
                case "defaultChecked":
                  g = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  f = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(o(137, t));
                  break;
                default:
                  hl(l, t, a, T, e, null);
              }
          }
        Vf(
          l,
          n,
          f,
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
          if (e.hasOwnProperty(u) && (f = e[u], f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                hl(l, t, u, f, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
        return;
      case "textarea":
        P("invalid", l), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (f = e[i], f != null))
            switch (i) {
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
                hl(l, t, i, f, e, null);
            }
        wf(l, a, u, n);
        return;
      case "option":
        for (s in e)
          e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : hl(l, t, s, a, e, null));
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
        for (a = 0; a < gu.length; a++)
          P(gu[a], l);
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
                hl(l, t, g, a, e, null);
            }
        return;
      default:
        if (oi(t)) {
          for (T in e)
            e.hasOwnProperty(T) && (a = e[T], a !== void 0 && $c(
              l,
              t,
              T,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && (a = e[f], a != null && hl(l, t, f, a, e, null));
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
        var u = null, n = null, i = null, f = null, s = null, g = null, T = null;
        for (p in e) {
          var _ = e[p];
          if (e.hasOwnProperty(p) && _ != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(p) || hl(l, t, p, null, a, _);
            }
        }
        for (var S in a) {
          var p = a[S];
          if (_ = e[S], a.hasOwnProperty(S) && (p != null || _ != null))
            switch (S) {
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
                T = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(o(137, t));
                break;
              default:
                p !== _ && hl(
                  l,
                  t,
                  S,
                  p,
                  a,
                  _
                );
            }
        }
        ci(
          l,
          i,
          f,
          s,
          g,
          T,
          n,
          u
        );
        return;
      case "select":
        p = i = f = S = null;
        for (n in e)
          if (s = e[n], e.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(n) || hl(
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
                i = n;
              default:
                n !== s && hl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  s
                );
            }
        t = f, e = i, a = p, S != null ? Ie(l, !!e, S, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = S = null;
        for (f in e)
          if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                hl(l, t, f, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                S = u;
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
                u !== n && hl(l, t, i, u, a, n);
            }
        Lf(l, S, p);
        return;
      case "option":
        for (var N in e)
          S = e[N], e.hasOwnProperty(N) && S != null && !a.hasOwnProperty(N) && (N === "selected" ? l.selected = !1 : hl(
            l,
            t,
            N,
            null,
            a,
            S
          ));
        for (s in a)
          S = a[s], p = e[s], a.hasOwnProperty(s) && S !== p && (S != null || p != null) && (s === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : hl(
            l,
            t,
            s,
            S,
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
        for (var V in e)
          S = e[V], e.hasOwnProperty(V) && S != null && !a.hasOwnProperty(V) && hl(l, t, V, null, a, S);
        for (g in a)
          if (S = a[g], p = e[g], a.hasOwnProperty(g) && S !== p && (S != null || p != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                hl(
                  l,
                  t,
                  g,
                  S,
                  a,
                  p
                );
            }
        return;
      default:
        if (oi(t)) {
          for (var ml in e)
            S = e[ml], e.hasOwnProperty(ml) && S !== void 0 && !a.hasOwnProperty(ml) && $c(
              l,
              t,
              ml,
              void 0,
              a,
              S
            );
          for (T in a)
            S = a[T], p = e[T], !a.hasOwnProperty(T) || S === p || S === void 0 && p === void 0 || $c(
              l,
              t,
              T,
              S,
              a,
              p
            );
          return;
        }
    }
    for (var y in e)
      S = e[y], e.hasOwnProperty(y) && S != null && !a.hasOwnProperty(y) && hl(l, t, y, null, a, S);
    for (_ in a)
      S = a[_], p = e[_], !a.hasOwnProperty(_) || S === p || S == null && p == null || hl(l, t, _, S, a, p);
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
        var u = e[a], n = u.transferSize, i = u.initiatorType, f = u.duration;
        if (n && f && $0(i)) {
          for (i = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], g = s.startTime;
            if (g > f) break;
            var T = s.transferSize, _ = s.initiatorType;
            T && $0(_) && (s = s.responseEnd, i += T * (s < f ? 1 : (f - g) / (s - g)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Fc = null, kc = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function F0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function k0(l, t) {
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
  function Ic(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = null;
  function Vy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Pc ? !1 : (Pc = l, !0) : (Pc = null, !1);
  }
  var I0 = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, P0 = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(l) {
    return P0.resolve(null).then(l).catch(Ky);
  } : I0;
  function Ky(l) {
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
            var i = n.nextSibling, f = n.nodeName;
            n[qa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
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
  function lf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lf(e), ni(e);
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
      if (l = Ot(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wy(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function ed(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function tf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ef(l) {
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
  var af = null;
  function ad(l) {
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
  function bu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ni(l);
  }
  var Dt = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Set();
  function Bn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var te = R.d;
  R.d = {
    f: Fy,
    r: ky,
    D: Iy,
    C: Py,
    L: l1,
    m: t1,
    X: a1,
    S: e1,
    M: u1
  };
  function Fy() {
    var l = te.f(), t = Mn();
    return l || t;
  }
  function ky(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? Es(t) : te.r(l);
  }
  var Oa = typeof document > "u" ? null : document;
  function cd(l, t, e) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var u = pt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), id.has(u) || (id.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Vl(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function Iy(l) {
    te.D(l), cd("dns-prefetch", l, null);
  }
  function Py(l, t) {
    te.C(l, t), cd("preconnect", l, t);
  }
  function l1(l, t, e) {
    te.L(l, t, e);
    var a = Oa;
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
          n = Da(l);
          break;
        case "script":
          n = Ua(l);
      }
      Dt.has(n) || (l = x(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Dt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(pu(n)) || t === "script" && a.querySelector(zu(n)) || (t = a.createElement("link"), Vl(t, "link", l), ql(t), a.head.appendChild(t)));
    }
  }
  function t1(l, t) {
    te.m(l, t);
    var e = Oa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(l);
      }
      if (!Dt.has(n) && (l = x({ rel: "modulepreload", href: l }, t), Dt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(zu(n)))
              return;
        }
        a = e.createElement("link"), Vl(a, "link", l), ql(a), e.head.appendChild(a);
      }
    }
  }
  function e1(l, t, e) {
    te.S(l, t, e);
    var a = Oa;
    if (a && l) {
      var u = Fe(a).hoistableStyles, n = Da(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = a.querySelector(
          pu(n)
        ))
          f.loading = 5;
        else {
          l = x(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Dt.get(n)) && uf(l, e);
          var s = i = a.createElement("link");
          ql(s), Vl(s, "link", l), s._p = new Promise(function(g, T) {
            s.onload = g, s.onerror = T;
          }), s.addEventListener("load", function() {
            f.loading |= 1;
          }), s.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Yn(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, u.set(n, i);
      }
    }
  }
  function a1(l, t) {
    te.X(l, t);
    var e = Oa;
    if (e && l) {
      var a = Fe(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(zu(u)), n || (l = x({ src: l, async: !0 }, t), (t = Dt.get(u)) && nf(l, t), n = e.createElement("script"), ql(n), Vl(n, "link", l), e.head.appendChild(n)), n = {
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
      var a = Fe(e).hoistableScripts, u = Ua(l), n = a.get(u);
      n || (n = e.querySelector(zu(u)), n || (l = x({ src: l, async: !0, type: "module" }, t), (t = Dt.get(u)) && nf(l, t), n = e.createElement("script"), ql(n), Vl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function fd(l, t, e, a) {
    var u = (u = k.current) ? Bn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Da(e.href), e = Fe(
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
          var n = Fe(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            pu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Dt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Dt.set(l, e), n || n1(
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
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ua(e), e = Fe(
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
    return 'href="' + pt(l) + '"';
  }
  function pu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function od(l) {
    return x({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function n1(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vl(t, "link", e), ql(t), l.head.appendChild(t));
  }
  function Ua(l) {
    return '[src="' + pt(l) + '"]';
  }
  function zu(l) {
    return "script[async]" + l;
  }
  function sd(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + pt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, ql(a), a;
          var u = x({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), ql(a), Vl(a, "style", u), Yn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Da(e.href);
          var n = l.querySelector(
            pu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, ql(n), n;
          a = od(e), (u = Dt.get(u)) && uf(a, u), n = (l.ownerDocument || l).createElement("link"), ql(n);
          var i = n;
          return i._p = new Promise(function(f, s) {
            i.onload = f, i.onerror = s;
          }), Vl(n, "link", a), t.state.loading |= 4, Yn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ua(e.src), (u = l.querySelector(
            zu(n)
          )) ? (t.instance = u, ql(u), u) : (a = e, (u = Dt.get(n)) && (a = x({}, e), nf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), ql(u), Vl(u, "link", a), l.head.appendChild(u), t.instance = u);
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
      var f = a[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function uf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function nf(l, t) {
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
      if (!(n[qa] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
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
  function c1(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Da(a.href), n = t.querySelector(
          pu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = jn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, ql(n);
          return;
        }
        n = t.ownerDocument || t, a = od(a), (u = Dt.get(u)) && uf(a, u), n = n.createElement("link"), ql(n);
        var i = n;
        i._p = new Promise(function(f, s) {
          i.onload = f, i.onerror = s;
        }), Vl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = jn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var cf = 0;
  function f1(l, t) {
    return l.stylesheets && l.count === 0 && Gn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && cf === 0 && (cf = 62500 * Zy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Gn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > cf ? 50 : 800) + t
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
    $$typeof: Yl,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function s1(l, t, e, a, u, n, i, f, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ti(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ti(0), this.hiddenUpdates = ti(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hd(l, t, e, a, u, n, i, f, s, g, T, _) {
    return l = new s1(
      l,
      t,
      e,
      i,
      s,
      g,
      T,
      _,
      f
    ), t = 1, n === !0 && (t |= 24), n = ot(3, null, null, t), l.current = n, n.stateNode = l, t = Xi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Vi(n), l;
  }
  function md(l) {
    return l ? (l = ia, l) : ia;
  }
  function vd(l, t, e, a, u, n) {
    u = md(u), a.context === null ? a.context = u : a.pendingContext = u, a = de(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = re(l, a, t), e !== null && (at(e, l, t), lu(e, l, t));
  }
  function gd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ff(l, t) {
    gd(l, t), (l = l.alternate) && gd(l, t);
  }
  function Sd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ne(l, 67108864);
      t !== null && at(t, l, 67108864), ff(l, 67108864);
    }
  }
  function bd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = ei(t);
      var e = Ne(l, t);
      e !== null && at(e, l, t), ff(l, t);
    }
  }
  var Qn = !0;
  function d1(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = R.p;
    try {
      R.p = 2, of(l, t, e, a);
    } finally {
      R.p = n, z.T = u;
    }
  }
  function r1(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = R.p;
    try {
      R.p = 8, of(l, t, e, a);
    } finally {
      R.p = n, z.T = u;
    }
  }
  function of(l, t, e, a) {
    if (Qn) {
      var u = sf(a);
      if (u === null)
        Wc(
          l,
          t,
          a,
          Zn,
          e
        ), zd(l, a);
      else if (h1(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (zd(l, a), t & 4 && -1 < y1.indexOf(l)) {
        for (; u !== null; ) {
          var n = $e(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Ue(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - ct(i);
                      f.entanglements[1] |= s, i &= ~s;
                    }
                    Yt(n), (fl & 6) === 0 && (An = nt() + 500, vu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ne(n, 2), f !== null && at(f, n, 2), Mn(), ff(n, 2);
            }
          if (n = sf(a), n === null && Wc(
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
        Wc(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function sf(l) {
    return l = di(l), df(l);
  }
  var Zn = null;
  function df(l) {
    if (Zn = null, l = We(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = C(t), l !== null) return l;
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
  function pd(l) {
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
          case Of:
            return 2;
          case Df:
            return 8;
          case Ru:
          case Pd:
            return 32;
          case Uf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, Ee = null, Ae = null, _e = null, Eu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), Me = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zd(l, t) {
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
          if (t = C(e), t !== null) {
            l.blockedOn = t, Bf(l.priority, function() {
              bd(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Z(e), t !== null) {
            l.blockedOn = t, Bf(l.priority, function() {
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
      var e = sf(l.nativeEvent);
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
  function m1() {
    rf = !1, Ee !== null && Vn(Ee) && (Ee = null), Ae !== null && Vn(Ae) && (Ae = null), _e !== null && Vn(_e) && (_e = null), Eu.forEach(Ed), Au.forEach(Ed);
  }
  function Ln(l, t) {
    l.blockedOn === t && (l.blockedOn = null, rf || (rf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      m1
    )));
  }
  var wn = null;
  function Ad(l) {
    wn !== l && (wn = l, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        wn === l && (wn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (df(a || e) === null)
              continue;
            break;
          }
          var n = $e(e);
          n !== null && (l.splice(t, 3), t -= 3, oc(
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
        var u = e[a], n = e[a + 1], i = u[kl] || null;
        if (typeof n == "function")
          i || Ad(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[kl] || null)
              f = i.formAction;
            else if (df(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Ad(e);
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
  function yf(l) {
    this._internalRoot = l;
  }
  Kn.prototype.render = yf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = ht();
    vd(e, a, l, t, null, null);
  }, Kn.prototype.unmount = yf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      vd(l.current, 2, null, l, null, null), Mn(), t[Je] = null;
    }
  };
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Nf();
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
  R.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? j(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var v1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        Na = Jn.inject(
          v1
        ), it = Jn;
      } catch {
      }
  }
  return Ou.createRoot = function(l, t) {
    if (!b(l)) throw Error(o(299));
    var e = !1, a = "", u = xs, n = Ns, i = Bs;
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
    ), l[Je] = t.current, Jc(l), new yf(t);
  }, Ou.hydrateRoot = function(l, t, e) {
    if (!b(l)) throw Error(o(299));
    var a = !1, u = "", n = xs, i = Ns, f = Bs, s = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = hd(
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
      f,
      _d
    ), t.context = md(null), e = t.current, a = ht(), a = ei(a), u = de(a), u.callback = null, re(e, u, a), e = a, t.current.lanes = e, Ya(t, e), Yt(t), l[Je] = t.current, Jc(l), new Kn(t);
  }, Ou.version = "19.2.4", Ou;
}
var Yd;
function M1() {
  if (Yd) return mf.exports;
  Yd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (v) {
        console.error(v);
      }
  }
  return c(), mf.exports = _1(), mf.exports;
}
var O1 = M1(), qt = Ef();
const zl = 8, Tl = 960, mt = 1240, Vd = "clawd_ui_block_blast_best", Ha = [
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
], D1 = new Map(Du.map((c) => [c.id, c]));
function qd(c, v, h) {
  return Math.max(v, Math.min(h, c));
}
function ee(c, v) {
  return c * zl + v;
}
function U1(c) {
  const v = c * 1664525 + 1013904223 >>> 0;
  return v === 0 ? 1 : v;
}
function Ld(c) {
  const v = U1(c);
  return [v, v / 4294967295];
}
function R1() {
  if (typeof window > "u") return 0;
  const c = window.localStorage.getItem(Vd), v = c == null ? 0 : Number.parseInt(c, 10);
  return Number.isFinite(v) ? Math.max(0, v) : 0;
}
function C1(c) {
  typeof window < "u" && window.localStorage.setItem(Vd, String(c));
}
function H1(c) {
  const v = [];
  for (let h = 0; h < zl; h += 1) {
    let o = "";
    for (let b = 0; b < zl; b += 1)
      o += c[ee(h, b)] ? "#" : ".";
    v.push(o);
  }
  return v;
}
function x1() {
  return Array.from({ length: zl * zl }, () => null);
}
function Ca(c, v = !1) {
  const h = v && !c, o = c ? 620 : h ? 476 : 560, b = o / zl, O = (Tl - o) / 2, C = c ? 150 : h ? 92 : 188, Z = c ? 820 : h ? 636 : 860, D = c ? 254 : h ? 208 : 240, E = c ? 184 : h ? 148 : 214, j = h ? 12 : 20, x = (Tl - D * 3 - j * 2) / 2;
  return {
    boardX: O,
    boardY: C,
    boardSize: o,
    cell: b,
    trayY: Z,
    slots: [
      { x, y: Z, w: D, h: E },
      { x: x + D + j, y: Z, w: D, h: E },
      { x: x + (D + j) * 2, y: Z, w: D, h: E }
    ]
  };
}
function N1(c) {
  return {
    width: Math.max(...c.map((v) => v.x)) + 1,
    height: Math.max(...c.map((v) => v.y)) + 1
  };
}
function wd(c, v, h) {
  const o = N1(c.cells);
  return {
    id: `${c.id}::${h}`,
    templateId: c.id,
    label: c.label,
    cells: c.cells.map((b) => ({ ...b })),
    width: o.width,
    height: o.height,
    points: c.cells.length * 10,
    color: v
  };
}
function pf(c, v, h) {
  const o = D1.get(c);
  if (!o)
    throw new Error(`Unknown piece template: ${c}`);
  return wd(o, v, h);
}
function B1(c) {
  const v = Du.reduce((O, C) => O + C.weight, 0), [h, o] = Ld(c);
  let b = o * v;
  for (const O of Du)
    if (b -= O.weight, b <= 0)
      return [h, O];
  return [h, Du[Du.length - 1]];
}
function Y1(c) {
  const [v, h] = Ld(c), o = Math.min(Ha.length - 1, Math.floor(h * Ha.length));
  return [v, Ha[o]];
}
function q1(c) {
  let v = c, h, o;
  return [v, h] = B1(v), [v, o] = Y1(v), [wd(h, o, v.toString(16)), v];
}
function j1() {
  return [
    pf("line5h", Ha[0], "opening-a"),
    pf("domino-h", Ha[1], "opening-b"),
    pf("single", Ha[2], "opening-c")
  ];
}
function Af(c, v, h, o) {
  for (const b of v.cells) {
    const O = h + b.y, C = o + b.x;
    if (O < 0 || O >= zl || C < 0 || C >= zl || c[ee(O, C)])
      return !1;
  }
  return !0;
}
function X1(c, v) {
  for (let h = 0; h <= zl - v.height; h += 1)
    for (let o = 0; o <= zl - v.width; o += 1)
      if (Af(c, v, h, o))
        return !0;
  return !1;
}
function Kd(c, v) {
  return v.reduce((h, o) => h + (X1(c, o) ? 1 : 0), 0);
}
function Jd(c) {
  const v = [], h = [];
  for (let o = 0; o < zl; o += 1) {
    let b = !0;
    for (let O = 0; O < zl; O += 1)
      if (!c[ee(o, O)]) {
        b = !1;
        break;
      }
    b && v.push(o);
  }
  for (let o = 0; o < zl; o += 1) {
    let b = !0;
    for (let O = 0; O < zl; O += 1)
      if (!c[ee(O, o)]) {
        b = !1;
        break;
      }
    b && h.push(o);
  }
  return { rows: v, cols: h };
}
function G1(c, v, h, o) {
  const b = c.cells.map((D) => ({ row: v + D.y, col: h + D.x }));
  if (!Af(o, c, v, h))
    return { pieceId: c.id, row: v, col: h, cells: b, canPlace: !1, rows: [], cols: [] };
  const C = [...o];
  for (const D of c.cells)
    C[ee(v + D.y, h + D.x)] = c.color;
  const Z = Jd(C);
  return { pieceId: c.id, row: v, col: h, cells: b, canPlace: !0, rows: Z.rows, cols: Z.cols };
}
function zf(c, v, h, o, b) {
  const O = c.cell * 1.2;
  if (!(h >= c.boardX - O && h <= c.boardX + c.boardSize + O && o >= c.boardY - O && o <= c.boardY + c.boardSize + O))
    return null;
  const Z = qd(Math.round((h - c.boardX) / c.cell - v.width / 2), 0, zl - v.width), D = qd(Math.round((o - c.boardY) / c.cell - v.height / 2), 0, zl - v.height);
  return G1(v, D, Z, b);
}
function Q1(c, v) {
  if (c.length > 0)
    return [c, v];
  const h = [];
  let o = v;
  for (; h.length < 3; ) {
    let b;
    [b, o] = q1(o), !(h.filter((C) => C.templateId === b.templateId).length >= 2) && h.push(b);
  }
  return [h, o];
}
function $l(c, v, h, o, b, O) {
  const C = Math.min(O, o / 2, b / 2);
  c.beginPath(), c.moveTo(v + C, h), c.arcTo(v + o, h, v + o, h + b, C), c.arcTo(v + o, h + b, v, h + b, C), c.arcTo(v, h + b, v, h, C), c.arcTo(v, h, v + o, h, C), c.closePath();
}
function Wn(c, v, h, o, b, O) {
  const C = O?.alpha ?? 1, Z = Math.max(3, o * 0.08);
  O?.glow && (c.save(), c.globalAlpha = C * 0.7, c.shadowColor = b.glow, c.shadowBlur = 22, $l(c, v, h, o, o, o * 0.24), c.fillStyle = b.fill, c.fill(), c.restore()), c.save(), c.globalAlpha = C, $l(c, v, h, o, o, o * 0.24);
  const D = c.createLinearGradient(v, h, v, h + o);
  D.addColorStop(0, "#ffffff"), D.addColorStop(0.08, b.stroke), D.addColorStop(0.18, b.fill), D.addColorStop(0.72, b.fill), D.addColorStop(1, b.shade), c.fillStyle = D, c.fill(), $l(c, v + Z, h + Z, o - Z * 2, o * 0.34, o * 0.16);
  const E = c.createLinearGradient(v, h, v, h + o * 0.4);
  E.addColorStop(0, "rgba(255,255,255,0.8)"), E.addColorStop(1, "rgba(255,255,255,0)"), c.fillStyle = E, c.fill(), c.lineWidth = Math.max(2, o * 0.06), c.strokeStyle = O?.outline ?? "rgba(255,255,255,0.55)", $l(c, v + 1, h + 1, o - 2, o - 2, o * 0.22), c.stroke(), c.restore();
}
function Z1(c, v) {
  const h = c.createLinearGradient(0, 0, 0, mt);
  h.addColorStop(0, "#14285c"), h.addColorStop(0.44, "#223e81"), h.addColorStop(1, "#0f1838"), c.fillStyle = h, c.fillRect(0, 0, Tl, mt);
  const o = c.createRadialGradient(Tl * 0.18, mt * 0.12, 0, Tl * 0.18, mt * 0.12, 260);
  o.addColorStop(0, "rgba(144,217,255,0.34)"), o.addColorStop(1, "rgba(144,217,255,0)"), c.fillStyle = o, c.fillRect(0, 0, Tl, mt);
  const b = c.createRadialGradient(Tl * 0.82, mt * 0.18, 0, Tl * 0.82, mt * 0.18, 280);
  b.addColorStop(0, "rgba(255,202,96,0.2)"), b.addColorStop(1, "rgba(255,202,96,0)"), c.fillStyle = b, c.fillRect(0, 0, Tl, mt), c.save(), c.globalAlpha = v ? 0.22 : 0.14;
  for (let O = 0; O < 16; O += 1)
    for (let C = 0; C < 12; C += 1) {
      const Z = C * 88 + O % 2 * 14, D = O * 82;
      c.fillStyle = O % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", $l(c, Z, D, 52, 52, 14), c.fill();
    }
  c.restore();
}
function V1(c, v) {
  const h = Ca(c.fullscreen, c.compact);
  for (const o of v) {
    const b = h.boardX + o.col * h.cell + h.cell / 2, O = h.boardY + o.row * h.cell + h.cell / 2;
    for (let C = 0; C < 3; C += 1) {
      const Z = (C + 1) / 3 * Math.PI * 2 + c.time * 3e-3;
      c.particles.push({
        x: b,
        y: O,
        vx: Math.cos(Z) * (1.2 + C * 0.5),
        vy: Math.sin(Z) * (1.1 + C * 0.45) - 1.2,
        life: 420 + C * 60,
        maxLife: 420 + C * 60,
        color: o.color.fill,
        size: 8 + C * 2
      });
    }
  }
}
function jd(c, v) {
  c.time += v, c.flash > 0 && (c.flash = Math.max(0, c.flash - v / 220), c.flash === 0 && (c.flashRows = [], c.flashCols = []));
  const h = [];
  for (const o of c.particles)
    o.life -= v, !(o.life <= 0) && (o.x += o.vx * (v / 16), o.y += o.vy * (v / 16), o.vy += 0.03 * (v / 16), h.push(o));
  c.particles = h;
}
function Xd(c, v, h) {
  const o = j1(), b = x1();
  return {
    mode: c,
    board: b,
    tray: o,
    selectedPieceId: null,
    preview: null,
    drag: null,
    particles: [],
    score: 0,
    bestScore: R1(),
    combo: 0,
    clears: 0,
    placements: 0,
    message: c === "title" ? "Tap Start Run and fill whole rows or columns." : "Fill whole rows and columns to blast them.",
    rng: 1327217885,
    time: 0,
    flash: 0,
    flashRows: [],
    flashCols: [],
    fullscreen: v,
    compact: h,
    movesAvailable: Kd(b, o)
  };
}
function Gd(c) {
  const v = c.selectedPieceId ? c.tray.find((h) => h.id === c.selectedPieceId) ?? null : null;
  return {
    mode: c.mode,
    score: c.score,
    bestScore: c.bestScore,
    combo: c.combo,
    clears: c.clears,
    placements: c.placements,
    selectedPiece: v ? v.label : null,
    movesAvailable: c.movesAvailable,
    fullscreen: c.fullscreen,
    message: c.message
  };
}
function L1(c) {
  const v = c.selectedPieceId ? c.tray.find((o) => o.id === c.selectedPieceId) ?? null : null, h = c.preview ? `${c.preview.row},${c.preview.col} ${c.preview.canPlace ? "ok" : "blocked"}` : "none";
  return [
    `mode=${c.mode}`,
    `score=${c.score}`,
    `best=${c.bestScore}`,
    `combo=${c.combo}`,
    `clears=${c.clears}`,
    `placements=${c.placements}`,
    `moves=${c.movesAvailable}`,
    `selected=${v ? v.templateId : "none"}`,
    `fullscreen=${c.fullscreen}`,
    `tray=${c.tray.map((o) => o.templateId).join(",") || "empty"}`,
    `preview=${h}`,
    `message=${c.message}`,
    "board:",
    ...H1(c.board)
  ].join(`
`);
}
function Qd(c, v) {
  const h = c.tray.findIndex((j) => j.id === v.pieceId);
  if (h === -1)
    return;
  const o = c.tray[h];
  if (!Af(c.board, o, v.row, v.col)) {
    c.message = "That spot is blocked.", c.preview = null, c.drag = null;
    return;
  }
  for (const j of o.cells)
    c.board[ee(v.row + j.y, v.col + j.x)] = o.color;
  const b = Jd(c.board), O = [], C = /* @__PURE__ */ new Set();
  for (const j of b.rows)
    for (let x = 0; x < zl; x += 1)
      C.add(ee(j, x));
  for (const j of b.cols)
    for (let x = 0; x < zl; x += 1)
      C.add(ee(x, j));
  for (const j of C) {
    const x = Math.floor(j / zl), al = j % zl, _l = c.board[j];
    _l && O.push({ row: x, col: al, color: _l }), c.board[j] = null;
  }
  let Z = o.points;
  if (b.rows.length + b.cols.length > 0) {
    c.combo += 1;
    const j = b.rows.length + b.cols.length, x = c.combo > 1 ? (c.combo - 1) * 30 : 0;
    Z += j * 120 + x, c.clears += j, c.flash = 1, c.flashRows = b.rows, c.flashCols = b.cols, V1(c, O), c.message = c.combo > 1 ? `Combo x${c.combo}` : `Cleared ${j} line${j === 1 ? "" : "s"}`;
  } else
    c.combo = 0, c.flash = 0, c.flashRows = [], c.flashCols = [], c.message = o.cells.length >= 5 ? "Strong placement." : "Keep building.";
  c.score += Z, c.score > c.bestScore && (c.bestScore = c.score, C1(c.bestScore)), c.tray.splice(h, 1), c.placements += 1, c.selectedPieceId = null, c.preview = null, c.drag = null;
  let D = c.tray, E = c.rng;
  [D, E] = Q1(D, E), c.tray = D, c.rng = E, c.movesAvailable = Kd(c.board, c.tray), c.movesAvailable === 0 && (c.mode = "gameover", c.message = "No moves left. Start a new run.");
}
function Zd(c, v) {
  const h = Ca(v.fullscreen, v.compact);
  c.clearRect(0, 0, Tl, mt), Z1(c, v.fullscreen), c.save(), c.fillStyle = "rgba(255,255,255,0.96)", c.font = v.fullscreen ? '700 42px "Trebuchet MS", sans-serif' : '700 38px "Trebuchet MS", sans-serif', c.textAlign = "left", c.fillText("Block Blast", 58, 70), c.font = '600 20px "Trebuchet MS", sans-serif', c.fillStyle = "rgba(230,241,255,0.86)", c.fillText(v.fullscreen ? "Classic mode" : "Classic endless mode", 58, 100), c.restore(), c.save(), $l(c, h.boardX - 24, h.boardY - 24, h.boardSize + 48, h.boardSize + 48, 34), c.fillStyle = "rgba(8,20,56,0.5)", c.shadowColor = "rgba(0,0,0,0.24)", c.shadowBlur = 24, c.fill(), c.restore(), $l(c, h.boardX - 8, h.boardY - 8, h.boardSize + 16, h.boardSize + 16, 30);
  const o = c.createLinearGradient(h.boardX, h.boardY, h.boardX, h.boardY + h.boardSize);
  if (o.addColorStop(0, "rgba(18,35,78,0.98)"), o.addColorStop(1, "rgba(10,22,56,0.98)"), c.fillStyle = o, c.fill(), v.flash > 0) {
    c.save(), c.globalAlpha = v.flash * 0.42, c.fillStyle = "rgba(255,243,179,0.8)";
    for (const b of v.flashRows)
      $l(c, h.boardX, h.boardY + b * h.cell, h.boardSize, h.cell, 12), c.fill();
    for (const b of v.flashCols)
      $l(c, h.boardX + b * h.cell, h.boardY, h.cell, h.boardSize, 12), c.fill();
    c.restore();
  }
  for (let b = 0; b < zl; b += 1)
    for (let O = 0; O < zl; O += 1) {
      const C = h.boardX + O * h.cell + 3, Z = h.boardY + b * h.cell + 3;
      $l(c, C, Z, h.cell - 6, h.cell - 6, 16), c.fillStyle = (b + O) % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)", c.fill();
    }
  if (v.preview) {
    const b = v.tray.find((O) => O.id === v.preview?.pieceId) ?? null;
    if (b)
      for (const O of v.preview.cells) {
        const C = h.boardX + O.col * h.cell + 5, Z = h.boardY + O.row * h.cell + 5;
        Wn(c, C, Z, h.cell - 10, b.color, {
          alpha: v.preview.canPlace ? 0.6 : 0.22,
          outline: v.preview.canPlace ? "rgba(255,255,255,0.85)" : "rgba(255,116,116,0.9)",
          glow: v.preview.canPlace
        });
      }
  }
  for (let b = 0; b < zl; b += 1)
    for (let O = 0; O < zl; O += 1) {
      const C = v.board[ee(b, O)];
      C && Wn(c, h.boardX + O * h.cell + 5, h.boardY + b * h.cell + 5, h.cell - 10, C, {
        glow: !1
      });
    }
  for (let b = 0; b < 3; b += 1) {
    const O = h.slots[b], C = v.tray[b], Z = C && v.selectedPieceId === C.id;
    $l(c, O.x, O.y, O.w, O.h, 26);
    const D = c.createLinearGradient(O.x, O.y, O.x, O.y + O.h);
    if (D.addColorStop(0, Z ? "rgba(255,255,255,0.24)" : "rgba(255,255,255,0.14)"), D.addColorStop(1, Z ? "rgba(54,135,255,0.3)" : "rgba(17,34,78,0.74)"), c.fillStyle = D, c.fill(), c.lineWidth = Z ? 4 : 2, c.strokeStyle = Z ? "rgba(178,220,255,0.95)" : "rgba(255,255,255,0.18)", c.stroke(), !C) {
      c.save(), c.globalAlpha = 0.26, $l(c, O.x + O.w / 2 - 36, O.y + O.h / 2 - 36, 72, 72, 18), c.fillStyle = "rgba(255,255,255,0.1)", c.fill(), c.restore();
      continue;
    }
    const E = Math.min(44, (O.w - 42) / Math.max(C.width + 0.25, 2), (O.h - 44) / Math.max(C.height + 0.25, 2)), j = C.width * E, x = C.height * E, al = O.x + (O.w - j) / 2, _l = O.y + (O.h - x) / 2;
    for (const Ml of C.cells)
      Wn(c, al + Ml.x * E, _l + Ml.y * E, E - 3, C.color, {
        glow: Z
      });
  }
  if (v.drag) {
    const b = v.tray.find((O) => O.id === v.drag?.pieceId) ?? null;
    if (b) {
      const O = Math.min(46, h.cell * 0.88), C = v.drag.x - b.width * O / 2, Z = v.drag.y - b.height * O / 2;
      for (const D of b.cells)
        Wn(c, C + D.x * O, Z + D.y * O, O - 4, b.color, {
          alpha: 0.88,
          glow: !0
        });
    }
  }
  c.save(), c.textAlign = "center", c.fillStyle = "rgba(231,243,255,0.92)", c.font = '700 26px "Trebuchet MS", sans-serif', c.fillText(`${v.movesAvailable} playable`, Tl / 2, h.trayY - 22), c.restore();
  for (const b of v.particles)
    c.save(), c.globalAlpha = b.life / b.maxLife, c.fillStyle = b.color, $l(c, b.x - b.size / 2, b.y - b.size / 2, b.size, b.size, b.size / 3), c.fill(), c.restore();
  v.mode === "title" && (c.save(), $l(c, 116, 392, Tl - 232, 232, 34), c.fillStyle = "rgba(6,14,38,0.76)", c.fill(), c.textAlign = "center", c.fillStyle = "rgba(255,255,255,0.98)", c.font = '700 52px "Trebuchet MS", sans-serif', c.fillText("Stack. Blast. Repeat.", Tl / 2, 470), c.font = '600 24px "Trebuchet MS", sans-serif', c.fillStyle = "rgba(223,238,255,0.92)", c.fillText("Drag from the tray or tap a piece, then tap the board.", Tl / 2, 520), c.fillText("The piece lineup mirrors the mobile app more closely now.", Tl / 2, 560), c.restore()), v.mode === "gameover" && (c.save(), $l(c, 146, 368, Tl - 292, 260, 38), c.fillStyle = "rgba(7,12,32,0.82)", c.fill(), c.textAlign = "center", c.fillStyle = "rgba(255,255,255,0.98)", c.font = '700 54px "Trebuchet MS", sans-serif', c.fillText("No Moves Left", Tl / 2, 460), c.font = '700 28px "Trebuchet MS", sans-serif', c.fillStyle = "rgba(231,243,255,0.9)", c.fillText(`Final score ${v.score}`, Tl / 2, 510), c.font = '600 22px "Trebuchet MS", sans-serif', c.fillText("Start a new run to reload the tray.", Tl / 2, 554), c.restore());
}
function Tf(c) {
  return {
    border: "none",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0.2,
    cursor: "pointer",
    color: c ? "#10214d" : "#eff6ff",
    background: c ? "linear-gradient(180deg, #ffe69a 0%, #ffba49 100%)" : "rgba(255,255,255,0.12)",
    boxShadow: c ? "0 10px 20px rgba(255, 182, 76, 0.25)" : "inset 0 0 0 1px rgba(255,255,255,0.14)"
  };
}
function w1() {
  const c = qt.useRef(null);
  c.current || (c.current = Xd("title", !1, typeof window < "u" ? window.innerWidth <= 560 : !1));
  const v = qt.useRef(null), h = qt.useRef(null), o = qt.useRef(c.current), [b, O] = qt.useState(() => Gd(c.current)), [C, Z] = qt.useState(() => ({
    width: typeof window > "u" ? 1280 : window.innerWidth,
    height: typeof window > "u" ? 900 : window.innerHeight
  }));
  function D() {
    O(Gd(o.current));
  }
  function E() {
    typeof window > "u" || o.current.fullscreen || window.innerWidth > 560 || window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const Q = h.current;
        if (!Q) return;
        const U = Q.getBoundingClientRect(), B = Math.max(12, Math.round(window.innerHeight * 0.07)), ul = Math.max(0, U.top + window.scrollY - B), gl = document.scrollingElement ?? document.documentElement;
        gl.scrollTop = ul, window.scrollTo({ top: ul, behavior: "auto" });
      });
    });
  }
  function j(Q) {
    const U = Xd(Q, o.current.fullscreen, o.current.compact);
    U.bestScore = o.current.bestScore, o.current = U, D();
  }
  function x() {
    j("playing"), E();
  }
  function al(Q) {
    const U = o.current;
    if (U.mode !== "playing") return;
    const B = U.tray[Q] ?? null;
    U.selectedPieceId = B ? B.id : null, U.preview = null, U.message = B ? `Selected ${B.label}` : "No piece in that slot.", D();
  }
  async function _l() {
    if (typeof document > "u") return;
    const Q = v.current;
    if (Q)
      try {
        document.fullscreenElement === Q ? await document.exitFullscreen() : await Q.requestFullscreen();
      } catch {
        o.current.message = "Fullscreen is unavailable in this browser.", D();
      }
  }
  function Ml(Q) {
    const U = h.current;
    if (!U) return null;
    const B = U.getBoundingClientRect();
    return !B.width || !B.height ? null : {
      x: (Q.clientX - B.left) / B.width * Tl,
      y: (Q.clientY - B.top) / B.height * mt
    };
  }
  function Bl(Q, U) {
    const B = o.current, ul = Ca(B.fullscreen, B.compact);
    for (let gl = 0; gl < ul.slots.length; gl += 1) {
      const z = ul.slots[gl];
      if (Q >= z.x && Q <= z.x + z.w && U >= z.y && U <= z.y + z.h)
        return B.tray[gl] ?? null;
    }
    return null;
  }
  qt.useEffect(() => {
    const Q = h.current, U = Q?.getContext("2d");
    if (!Q || !U)
      return;
    let B = 0, ul = performance.now();
    const gl = (z) => {
      const R = Math.min(34, z - ul);
      ul = z, jd(o.current, R), Zd(U, o.current), B = window.requestAnimationFrame(gl);
    };
    return Zd(U, o.current), B = window.requestAnimationFrame(gl), () => window.cancelAnimationFrame(B);
  }, []), qt.useEffect(() => {
    const Q = window;
    return Q.render_game_to_text = () => L1(o.current), Q.advanceTime = (U) => {
      let B = U;
      for (; B > 0; ) {
        const ul = Math.min(B, 16);
        jd(o.current, ul), B -= ul;
      }
      D();
    }, Q.__drainVirtualTimePending = () => 0, () => {
      delete Q.render_game_to_text, delete Q.advanceTime, delete Q.__drainVirtualTimePending;
    };
  }, []), qt.useEffect(() => {
    const Q = () => {
      const B = !document.fullscreenElement && window.innerWidth <= 560;
      o.current.compact !== B && (o.current.compact = B, o.current.preview = null, o.current.drag = null, D()), Z({ width: window.innerWidth, height: window.innerHeight });
    }, U = () => {
      const B = o.current.fullscreen;
      o.current.fullscreen = document.fullscreenElement === v.current, o.current.compact = !o.current.fullscreen && window.innerWidth <= 560, o.current.preview = null, o.current.drag = null, D(), B && !o.current.fullscreen && E();
    };
    return window.addEventListener("resize", Q), document.addEventListener("fullscreenchange", U), () => {
      window.removeEventListener("resize", Q), document.removeEventListener("fullscreenchange", U);
    };
  }, []), qt.useEffect(() => {
    const Q = (U) => {
      if (U.code === "KeyF") {
        U.preventDefault(), _l();
        return;
      }
      if (U.code === "KeyN" || U.code === "Enter" && o.current.mode !== "playing") {
        U.preventDefault(), x();
        return;
      }
      if (U.code === "Digit1") {
        U.preventDefault(), al(0);
        return;
      }
      if (U.code === "Digit2") {
        U.preventDefault(), al(1);
        return;
      }
      if (U.code === "Digit3") {
        U.preventDefault(), al(2);
        return;
      }
      U.code === "Escape" && o.current.selectedPieceId && (U.preventDefault(), o.current.selectedPieceId = null, o.current.preview = null, o.current.message = "Selection cleared.", D());
    };
    return window.addEventListener("keydown", Q), () => window.removeEventListener("keydown", Q);
  }, []);
  const Ut = Tl / mt, X = !b.fullscreen && C.width <= 560, ut = X && b.mode === "playing", Yl = !X || !ut, Fl = Math.max(X ? 280 : 320, C.width - (b.fullscreen ? 48 : X ? 8 : 40)), vt = b.fullscreen ? Math.max(420, C.height - 270) : X ? Math.max(360, C.height - 168) : 980, Ll = Math.min(b.fullscreen ? 920 : X ? 404 : 760, Fl, vt * Ut), F = b.fullscreen ? "Drag from the tray or tap 1, 2, 3 to select a piece. Fill rows and columns to blast them away." : X ? "Tap a tray piece, then tap the board. Clear rows and columns to keep the run alive." : "Classic endless board-clearing mode with a closer Block Blast piece set and a fullscreen-friendly stage.", wl = b.mode === "gameover" ? "Run over. Start a new one from the top bar." : X ? "Tap a tray piece, then tap the board. Use Fullscreen for more room." : "Tip: tap 1, 2, or 3 to grab a tray slot instantly.", gt = {
    width: "100%",
    maxWidth: b.fullscreen ? "100vw" : 1040,
    minHeight: b.fullscreen ? "100vh" : void 0,
    boxSizing: "border-box",
    borderRadius: b.fullscreen ? 0 : X ? 24 : 32,
    padding: b.fullscreen ? "16px 18px 18px" : X ? "12px 10px 14px" : 20,
    background: "radial-gradient(circle at top left, rgba(139, 224, 255, 0.2), transparent 32%), linear-gradient(180deg, #17306d 0%, #0c173d 100%)",
    boxShadow: b.fullscreen ? "none" : X ? "0 16px 36px rgba(4, 14, 39, 0.28)" : "0 24px 60px rgba(4, 14, 39, 0.35)",
    display: "flex",
    flexDirection: "column",
    gap: X ? 8 : 14,
    color: "#eff6ff",
    overflow: "hidden"
  }, St = {
    minWidth: X ? 0 : 108,
    padding: X ? "8px 10px" : "12px 14px",
    borderRadius: X ? 16 : 20,
    background: "rgba(255,255,255,0.11)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"
  };
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      style: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        padding: b.fullscreen ? 0 : X ? "8px 4px 20px" : "24px 12px 48px",
        background: b.fullscreen ? "#08132d" : "transparent"
      },
      children: /* @__PURE__ */ L.jsxs("section", { ref: v, style: gt, children: [
        /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: b.fullscreen || X ? "flex-start" : "center",
              gap: X ? 8 : 16,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ L.jsxs("div", { style: { display: "grid", gap: 4 }, children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: b.fullscreen ? 28 : X ? 24 : 30, fontWeight: 800, letterSpacing: 0.3 }, children: "Block Blast" }),
                Yl ? /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 12 : 14, lineHeight: 1.42, color: "rgba(235,244,255,0.82)", maxWidth: X ? 420 : 560 }, children: F }) : null
              ] }),
              /* @__PURE__ */ L.jsxs("div", { style: { display: "flex", gap: X ? 8 : 10, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ L.jsx("button", { onClick: x, style: { ...Tf(!0), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: b.mode === "playing" ? "New Run" : "Start Run" }),
                ut ? null : /* @__PURE__ */ L.jsx("button", { onClick: () => j("title"), style: { ...Tf(!1), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: "Title" }),
                /* @__PURE__ */ L.jsx("button", { onClick: () => {
                  _l();
                }, style: { ...Tf(!1), padding: X ? "10px 13px" : void 0, fontSize: X ? 13 : void 0 }, children: b.fullscreen ? "Exit Fullscreen" : "Fullscreen" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ L.jsxs("div", { style: X ? { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 } : { display: "flex", flexWrap: "wrap", gap: 12 }, children: [
          /* @__PURE__ */ L.jsxs("div", { style: St, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Score" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.score })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { style: St, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Best" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.bestScore })
          ] }),
          ut ? null : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
            /* @__PURE__ */ L.jsxs("div", { style: St, children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Combo" }),
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.combo })
            ] }),
            /* @__PURE__ */ L.jsxs("div", { style: St, children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Playable" }),
              /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 20 : 26, fontWeight: 800 }, children: b.movesAvailable })
            ] })
          ] }),
          /* @__PURE__ */ L.jsxs("div", { style: { ...St, flex: 1, minWidth: X ? 0 : 220, gridColumn: X ? "1 / -1" : void 0 }, children: [
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
            /* @__PURE__ */ L.jsx("div", { style: { fontSize: X ? 14 : 16, fontWeight: 700, minHeight: X ? 22 : 28 }, children: b.selectedPiece ? `${b.selectedPiece} selected.` : b.message })
          ] })
        ] }),
        /* @__PURE__ */ L.jsx("div", { style: { width: Ll, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Tl} / ${mt}` }, children: /* @__PURE__ */ L.jsx(
          "canvas",
          {
            ref: h,
            width: Tl,
            height: mt,
            style: {
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: b.fullscreen ? 26 : X ? 22 : 28,
              touchAction: "none",
              boxShadow: "0 22px 40px rgba(3, 10, 28, 0.42)",
              cursor: o.current.drag ? "grabbing" : "pointer"
            },
            onPointerDown: (Q) => {
              const U = o.current;
              if (U.mode !== "playing") return;
              const B = Ml(Q);
              if (!B) return;
              const ul = Bl(B.x, B.y);
              ul && (U.selectedPieceId = ul.id, U.drag = { pieceId: ul.id, startX: B.x, startY: B.y, x: B.x, y: B.y }, U.preview = null, h.current?.setPointerCapture?.(Q.pointerId), D());
            },
            onPointerMove: (Q) => {
              const U = o.current;
              if (!U.drag) return;
              const B = Ml(Q);
              if (!B) return;
              U.drag.x = B.x, U.drag.y = B.y;
              const ul = U.tray.find((gl) => gl.id === U.drag?.pieceId) ?? null;
              U.preview = ul ? zf(Ca(U.fullscreen, U.compact), ul, B.x, B.y, U.board) : null;
            },
            onPointerUp: (Q) => {
              const U = o.current, B = Ml(Q);
              if (!B) return;
              if (U.drag) {
                const R = U.tray.find((sl) => sl.id === U.drag?.pieceId) ?? null, w = Math.hypot(B.x - U.drag.startX, B.y - U.drag.startY) > 14, cl = R ? zf(Ca(U.fullscreen, U.compact), R, B.x, B.y, U.board) : null;
                cl?.canPlace ? Qd(U, cl) : (U.drag = null, U.preview = null, !w && R ? (U.selectedPieceId = R.id, U.message = `Selected ${R.label}`) : U.message = "Drop a piece onto the board."), h.current?.releasePointerCapture?.(Q.pointerId), D();
                return;
              }
              if (U.mode !== "playing") return;
              const ul = Bl(B.x, B.y);
              if (ul) {
                U.selectedPieceId = ul.id, U.preview = null, U.message = `Selected ${ul.label}`, D();
                return;
              }
              const gl = U.selectedPieceId ? U.tray.find((R) => R.id === U.selectedPieceId) ?? null : null;
              if (!gl) return;
              const z = zf(Ca(U.fullscreen, U.compact), gl, B.x, B.y, U.board);
              z?.canPlace ? Qd(U, z) : (U.message = "That placement does not fit.", U.preview = z), D();
            },
            onPointerCancel: () => {
              const Q = o.current;
              Q.drag = null, Q.preview = null, D();
            }
          }
        ) }),
        /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              gap: X ? 6 : 12,
              alignItems: X ? "flex-start" : "center",
              flexWrap: "wrap",
              color: "rgba(239,246,255,0.86)",
              fontSize: X ? 12 : 14
            },
            children: [
              /* @__PURE__ */ L.jsx("div", { children: ut ? "Fullscreen gives the tray more room if you want it." : wl }),
              /* @__PURE__ */ L.jsx("div", { children: `Placements ${b.placements} • Clears ${b.clears}` })
            ]
          }
        ),
        b.fullscreen ? null : X && b.mode !== "playing" ? /* @__PURE__ */ L.jsxs(
          "div",
          {
            style: {
              borderRadius: 18,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
            },
            children: [
              /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Mobile Tips" }),
              /* @__PURE__ */ L.jsxs("div", { style: { fontSize: 13, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                "Tap a tray piece, then tap the board to place it. Use ",
                /* @__PURE__ */ L.jsx("code", { children: "Fullscreen" }),
                " for a larger board, and press ",
                /* @__PURE__ */ L.jsx("code", { children: "N" }),
                " to restart quickly."
              ] })
            ]
          }
        ) : /* @__PURE__ */ L.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }, children: [
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Closer Piece Set" }),
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "Singles, short bars, the mini corners, classic tetromino-style shapes, long five-bars, the 2x3 rectangle, and the tall T are all in the pool now." })
              ]
            }
          ),
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Fullscreen Cleanup" }),
                /* @__PURE__ */ L.jsx("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: "The stage header, score chips, and controls all live inside the fullscreen element now, so the page keeps its shape instead of leaving controls stranded outside." })
              ]
            }
          ),
          /* @__PURE__ */ L.jsxs(
            "div",
            {
              style: {
                borderRadius: 22,
                padding: "14px 16px",
                background: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
              },
              children: [
                /* @__PURE__ */ L.jsx("div", { style: { fontWeight: 800, marginBottom: 6 }, children: "Controls" }),
                /* @__PURE__ */ L.jsxs("div", { style: { fontSize: 14, lineHeight: 1.5, color: "rgba(235,244,255,0.82)" }, children: [
                  "Drag pieces from the tray, or tap a tray piece and then the board. Press ",
                  /* @__PURE__ */ L.jsx("code", { children: "F" }),
                  " for fullscreen and ",
                  /* @__PURE__ */ L.jsx("code", { children: "N" }),
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
O1.createRoot(Wd).render(/* @__PURE__ */ L.jsx(w1, {}));
