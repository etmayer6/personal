var to = { exports: {} }, tu = {};
var y0;
function um() {
  if (y0) return tu;
  y0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(r, f, A) {
    var R = null;
    if (A !== void 0 && (R = "" + A), f.key !== void 0 && (R = "" + f.key), "key" in f) {
      A = {};
      for (var G in f)
        G !== "key" && (A[G] = f[G]);
    } else A = f;
    return f = A.ref, {
      $$typeof: c,
      type: r,
      key: R,
      ref: f !== void 0 ? f : null,
      props: A
    };
  }
  return tu.Fragment = s, tu.jsx = d, tu.jsxs = d, tu;
}
var m0;
function cm() {
  return m0 || (m0 = 1, to.exports = um()), to.exports;
}
var V = cm(), no = { exports: {} }, nu = {}, ao = { exports: {} }, uo = {};
var g0;
function im() {
  return g0 || (g0 = 1, (function(c) {
    function s(_, j) {
      var P = _.length;
      _.push(j);
      e: for (; 0 < P; ) {
        var ge = P - 1 >>> 1, be = _[ge];
        if (0 < f(be, j))
          _[ge] = j, _[P] = be, P = ge;
        else break e;
      }
    }
    function d(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var j = _[0], P = _.pop();
      if (P !== j) {
        _[0] = P;
        e: for (var ge = 0, be = _.length, m = be >>> 1; ge < m; ) {
          var U = 2 * (ge + 1) - 1, L = _[U], q = U + 1, J = _[q];
          if (0 > f(L, P))
            q < be && 0 > f(J, L) ? (_[ge] = J, _[q] = P, ge = q) : (_[ge] = L, _[U] = P, ge = U);
          else if (q < be && 0 > f(J, P))
            _[ge] = J, _[q] = P, ge = q;
          else break e;
        }
      }
      return j;
    }
    function f(_, j) {
      var P = _.sortIndex - j.sortIndex;
      return P !== 0 ? P : _.id - j.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      c.unstable_now = function() {
        return A.now();
      };
    } else {
      var R = Date, G = R.now();
      c.unstable_now = function() {
        return R.now() - G;
      };
    }
    var v = [], T = [], z = 1, B = null, C = 3, te = !1, X = !1, $ = !1, Ve = !1, me = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, Ae = typeof setImmediate < "u" ? setImmediate : null;
    function we(_) {
      for (var j = d(T); j !== null; ) {
        if (j.callback === null) r(T);
        else if (j.startTime <= _)
          r(T), j.sortIndex = j.expirationTime, s(v, j);
        else break;
        j = d(T);
      }
    }
    function fl(_) {
      if ($ = !1, we(_), !X)
        if (d(v) !== null)
          X = !0, Ke || (Ke = !0, Ie());
        else {
          var j = d(T);
          j !== null && hl(fl, j.startTime - _);
        }
    }
    var Ke = !1, ie = -1, Re = 5, ol = -1;
    function Tl() {
      return Ve ? !0 : !(c.unstable_now() - ol < Re);
    }
    function rl() {
      if (Ve = !1, Ke) {
        var _ = c.unstable_now();
        ol = _;
        var j = !0;
        try {
          e: {
            X = !1, $ && ($ = !1, je(ie), ie = -1), te = !0;
            var P = C;
            try {
              l: {
                for (we(_), B = d(v); B !== null && !(B.expirationTime > _ && Tl()); ) {
                  var ge = B.callback;
                  if (typeof ge == "function") {
                    B.callback = null, C = B.priorityLevel;
                    var be = ge(
                      B.expirationTime <= _
                    );
                    if (_ = c.unstable_now(), typeof be == "function") {
                      B.callback = be, we(_), j = !0;
                      break l;
                    }
                    B === d(v) && r(v), we(_);
                  } else r(v);
                  B = d(v);
                }
                if (B !== null) j = !0;
                else {
                  var m = d(T);
                  m !== null && hl(
                    fl,
                    m.startTime - _
                  ), j = !1;
                }
              }
              break e;
            } finally {
              B = null, C = P, te = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Ie() : Ke = !1;
        }
      }
    }
    var Ie;
    if (typeof Ae == "function")
      Ie = function() {
        Ae(rl);
      };
    else if (typeof MessageChannel < "u") {
      var Kl = new MessageChannel(), wl = Kl.port2;
      Kl.port1.onmessage = rl, Ie = function() {
        wl.postMessage(null);
      };
    } else
      Ie = function() {
        me(rl, 0);
      };
    function hl(_, j) {
      ie = me(function() {
        _(c.unstable_now());
      }, j);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, c.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Re = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, c.unstable_next = function(_) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = C;
      }
      var P = C;
      C = j;
      try {
        return _();
      } finally {
        C = P;
      }
    }, c.unstable_requestPaint = function() {
      Ve = !0;
    }, c.unstable_runWithPriority = function(_, j) {
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
      var P = C;
      C = _;
      try {
        return j();
      } finally {
        C = P;
      }
    }, c.unstable_scheduleCallback = function(_, j, P) {
      var ge = c.unstable_now();
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
        callback: j,
        priorityLevel: _,
        startTime: P,
        expirationTime: be,
        sortIndex: -1
      }, P > ge ? (_.sortIndex = P, s(T, _), d(v) === null && _ === d(T) && ($ ? (je(ie), ie = -1) : $ = !0, hl(fl, P - ge))) : (_.sortIndex = be, s(v, _), X || te || (X = !0, Ke || (Ke = !0, Ie()))), _;
    }, c.unstable_shouldYield = Tl, c.unstable_wrapCallback = function(_) {
      var j = C;
      return function() {
        var P = C;
        C = j;
        try {
          return _.apply(this, arguments);
        } finally {
          C = P;
        }
      };
    };
  })(uo)), uo;
}
var v0;
function fm() {
  return v0 || (v0 = 1, ao.exports = im()), ao.exports;
}
var co = { exports: {} }, ne = {};
var S0;
function om() {
  if (S0) return ne;
  S0 = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function te(m) {
    return m === null || typeof m != "object" ? null : (m = C && m[C] || m["@@iterator"], typeof m == "function" ? m : null);
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
  function me(m, U, L) {
    this.props = m, this.context = U, this.refs = Ve, this.updater = L || X;
  }
  me.prototype.isReactComponent = {}, me.prototype.setState = function(m, U) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, U, "setState");
  }, me.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function je() {
  }
  je.prototype = me.prototype;
  function Ae(m, U, L) {
    this.props = m, this.context = U, this.refs = Ve, this.updater = L || X;
  }
  var we = Ae.prototype = new je();
  we.constructor = Ae, $(we, me.prototype), we.isPureReactComponent = !0;
  var fl = Array.isArray;
  function Ke() {
  }
  var ie = { H: null, A: null, T: null, S: null }, Re = Object.prototype.hasOwnProperty;
  function ol(m, U, L) {
    var q = L.ref;
    return {
      $$typeof: c,
      type: m,
      key: U,
      ref: q !== void 0 ? q : null,
      props: L
    };
  }
  function Tl(m, U) {
    return ol(m.type, U, m.props);
  }
  function rl(m) {
    return typeof m == "object" && m !== null && m.$$typeof === c;
  }
  function Ie(m) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(L) {
      return U[L];
    });
  }
  var Kl = /\/+/g;
  function wl(m, U) {
    return typeof m == "object" && m !== null && m.key != null ? Ie("" + m.key) : U.toString(36);
  }
  function hl(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(Ke, Ke) : (m.status = "pending", m.then(
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
  function _(m, U, L, q, J) {
    var F = typeof m;
    (F === "undefined" || F === "boolean") && (m = null);
    var ce = !1;
    if (m === null) ce = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case c:
            case s:
              ce = !0;
              break;
            case z:
              return ce = m._init, _(
                ce(m._payload),
                U,
                L,
                q,
                J
              );
          }
      }
    if (ce)
      return J = J(m), ce = q === "" ? "." + wl(m, 0) : q, fl(J) ? (L = "", ce != null && (L = ce.replace(Kl, "$&/") + "/"), _(J, U, L, "", function(Jt) {
        return Jt;
      })) : J != null && (rl(J) && (J = Tl(
        J,
        L + (J.key == null || m && m.key === J.key ? "" : ("" + J.key).replace(
          Kl,
          "$&/"
        ) + "/") + ce
      )), U.push(J)), 1;
    ce = 0;
    var Z = q === "" ? "." : q + ":";
    if (fl(m))
      for (var Be = 0; Be < m.length; Be++)
        q = m[Be], F = Z + wl(q, Be), ce += _(
          q,
          U,
          L,
          F,
          J
        );
    else if (Be = te(m), typeof Be == "function")
      for (m = Be.call(m), Be = 0; !(q = m.next()).done; )
        q = q.value, F = Z + wl(q, Be++), ce += _(
          q,
          U,
          L,
          F,
          J
        );
    else if (F === "object") {
      if (typeof m.then == "function")
        return _(
          hl(m),
          U,
          L,
          q,
          J
        );
      throw U = String(m), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function j(m, U, L) {
    if (m == null) return m;
    var q = [], J = 0;
    return _(m, q, "", "", function(F) {
      return U.call(L, F, J++);
    }), q;
  }
  function P(m) {
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
    map: j,
    forEach: function(m, U, L) {
      j(
        m,
        function() {
          U.apply(this, arguments);
        },
        L
      );
    },
    count: function(m) {
      var U = 0;
      return j(m, function() {
        U++;
      }), U;
    },
    toArray: function(m) {
      return j(m, function(U) {
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
  return ne.Activity = B, ne.Children = be, ne.Component = me, ne.Fragment = d, ne.Profiler = f, ne.PureComponent = Ae, ne.StrictMode = r, ne.Suspense = v, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return ie.H.useMemoCache(m);
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
    var q = $({}, m.props), J = m.key;
    if (U != null)
      for (F in U.key !== void 0 && (J = "" + U.key), U)
        !Re.call(U, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && U.ref === void 0 || (q[F] = U[F]);
    var F = arguments.length - 2;
    if (F === 1) q.children = L;
    else if (1 < F) {
      for (var ce = Array(F), Z = 0; Z < F; Z++)
        ce[Z] = arguments[Z + 2];
      q.children = ce;
    }
    return ol(m.type, J, q);
  }, ne.createContext = function(m) {
    return m = {
      $$typeof: R,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: A,
      _context: m
    }, m;
  }, ne.createElement = function(m, U, L) {
    var q, J = {}, F = null;
    if (U != null)
      for (q in U.key !== void 0 && (F = "" + U.key), U)
        Re.call(U, q) && q !== "key" && q !== "__self" && q !== "__source" && (J[q] = U[q]);
    var ce = arguments.length - 2;
    if (ce === 1) J.children = L;
    else if (1 < ce) {
      for (var Z = Array(ce), Be = 0; Be < ce; Be++)
        Z[Be] = arguments[Be + 2];
      J.children = Z;
    }
    if (m && m.defaultProps)
      for (q in ce = m.defaultProps, ce)
        J[q] === void 0 && (J[q] = ce[q]);
    return ol(m, F, J);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(m) {
    return { $$typeof: G, render: m };
  }, ne.isValidElement = rl, ne.lazy = function(m) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: m },
      _init: P
    };
  }, ne.memo = function(m, U) {
    return {
      $$typeof: T,
      type: m,
      compare: U === void 0 ? null : U
    };
  }, ne.startTransition = function(m) {
    var U = ie.T, L = {};
    ie.T = L;
    try {
      var q = m(), J = ie.S;
      J !== null && J(L, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(Ke, ge);
    } catch (F) {
      ge(F);
    } finally {
      U !== null && L.types !== null && (U.types = L.types), ie.T = U;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return ie.H.useCacheRefresh();
  }, ne.use = function(m) {
    return ie.H.use(m);
  }, ne.useActionState = function(m, U, L) {
    return ie.H.useActionState(m, U, L);
  }, ne.useCallback = function(m, U) {
    return ie.H.useCallback(m, U);
  }, ne.useContext = function(m) {
    return ie.H.useContext(m);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(m, U) {
    return ie.H.useDeferredValue(m, U);
  }, ne.useEffect = function(m, U) {
    return ie.H.useEffect(m, U);
  }, ne.useEffectEvent = function(m) {
    return ie.H.useEffectEvent(m);
  }, ne.useId = function() {
    return ie.H.useId();
  }, ne.useImperativeHandle = function(m, U, L) {
    return ie.H.useImperativeHandle(m, U, L);
  }, ne.useInsertionEffect = function(m, U) {
    return ie.H.useInsertionEffect(m, U);
  }, ne.useLayoutEffect = function(m, U) {
    return ie.H.useLayoutEffect(m, U);
  }, ne.useMemo = function(m, U) {
    return ie.H.useMemo(m, U);
  }, ne.useOptimistic = function(m, U) {
    return ie.H.useOptimistic(m, U);
  }, ne.useReducer = function(m, U, L) {
    return ie.H.useReducer(m, U, L);
  }, ne.useRef = function(m) {
    return ie.H.useRef(m);
  }, ne.useState = function(m) {
    return ie.H.useState(m);
  }, ne.useSyncExternalStore = function(m, U, L) {
    return ie.H.useSyncExternalStore(
      m,
      U,
      L
    );
  }, ne.useTransition = function() {
    return ie.H.useTransition();
  }, ne.version = "19.2.4", ne;
}
var b0;
function ro() {
  return b0 || (b0 = 1, co.exports = om()), co.exports;
}
var io = { exports: {} }, il = {};
var p0;
function rm() {
  if (p0) return il;
  p0 = 1;
  var c = ro();
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
  function A(v, T, z) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: B == null ? null : "" + B,
      children: v,
      containerInfo: T,
      implementation: z
    };
  }
  var R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(v, T) {
    if (v === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, il.createPortal = function(v, T) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(s(299));
    return A(v, T, null, z);
  }, il.flushSync = function(v) {
    var T = R.T, z = r.p;
    try {
      if (R.T = null, r.p = 2, v) return v();
    } finally {
      R.T = T, r.p = z, r.d.f();
    }
  }, il.preconnect = function(v, T) {
    typeof v == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, r.d.C(v, T));
  }, il.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, il.preinit = function(v, T) {
    if (typeof v == "string" && T && typeof T.as == "string") {
      var z = T.as, B = G(z, T.crossOrigin), C = typeof T.integrity == "string" ? T.integrity : void 0, te = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      z === "style" ? r.d.S(
        v,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: B,
          integrity: C,
          fetchPriority: te
        }
      ) : z === "script" && r.d.X(v, {
        crossOrigin: B,
        integrity: C,
        fetchPriority: te,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, il.preinitModule = function(v, T) {
    if (typeof v == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var z = G(
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
  }, il.preload = function(v, T) {
    if (typeof v == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var z = T.as, B = G(z, T.crossOrigin);
      r.d.L(v, z, {
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
  }, il.preloadModule = function(v, T) {
    if (typeof v == "string")
      if (T) {
        var z = G(T.as, T.crossOrigin);
        r.d.m(v, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: z,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else r.d.m(v);
  }, il.requestFormReset = function(v) {
    r.d.r(v);
  }, il.unstable_batchedUpdates = function(v, T) {
    return v(T);
  }, il.useFormState = function(v, T, z) {
    return R.H.useFormState(v, T, z);
  }, il.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, il.version = "19.2.4", il;
}
var T0;
function sm() {
  if (T0) return io.exports;
  T0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), io.exports = rm(), io.exports;
}
var A0;
function dm() {
  if (A0) return nu;
  A0 = 1;
  var c = fm(), s = ro(), d = sm();
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
  function A(e) {
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
  function G(e) {
    if (e.tag === 31) {
      var l = e.memoizedState;
      if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (A(e) !== e)
      throw Error(r(188));
  }
  function T(e) {
    var l = e.alternate;
    if (!l) {
      if (l = A(e), l === null) throw Error(r(188));
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
        for (var i = !1, o = a.child; o; ) {
          if (o === t) {
            i = !0, t = a, n = u;
            break;
          }
          if (o === n) {
            i = !0, n = a, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              i = !0, t = u, n = a;
              break;
            }
            if (o === n) {
              i = !0, n = u, t = a;
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(r(189));
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
  var B = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), te = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), Ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), me = /* @__PURE__ */ Symbol.for("react.profiler"), je = /* @__PURE__ */ Symbol.for("react.consumer"), Ae = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), fl = /* @__PURE__ */ Symbol.for("react.suspense"), Ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), ie = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), ol = /* @__PURE__ */ Symbol.for("react.activity"), Tl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rl = Symbol.iterator;
  function Ie(e) {
    return e === null || typeof e != "object" ? null : (e = rl && e[rl] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Kl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function wl(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Kl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case me:
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
        case Ae:
          return e.displayName || "Context";
        case je:
          return (e._context.displayName || "Context") + ".Consumer";
        case we:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ie:
          return l = e.displayName || null, l !== null ? l : wl(e.type) || "Memo";
        case Re:
          l = e._payload, e = e._init;
          try {
            return wl(e(l));
          } catch {
          }
      }
    return null;
  }
  var hl = Array.isArray, _ = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
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
  var q = m(null), J = m(null), F = m(null), ce = m(null);
  function Z(e, l) {
    switch (L(F, l), L(J, e), L(q, null), l.nodeType) {
      case 9:
      case 11:
        e = (e = l.documentElement) && (e = e.namespaceURI) ? jd(e) : 0;
        break;
      default:
        if (e = l.tagName, l = l.namespaceURI)
          l = jd(l), e = Gd(l, e);
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
    U(q), L(q, e);
  }
  function Be() {
    U(q), U(J), U(F);
  }
  function Jt(e) {
    e.memoizedState !== null && L(ce, e);
    var l = q.current, t = Gd(l, e.type);
    l !== t && (L(J, e), L(q, t));
  }
  function gn(e) {
    J.current === e && (U(q), U(J)), ce.current === e && (U(ce), Ia._currentValue = P);
  }
  var ia, vn;
  function Pl(e) {
    if (ia === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        ia = l && l[1] || "", vn = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ia + e + vn;
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
                } catch (E) {
                  var p = E;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (E) {
                  p = E;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                p = E;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
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
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), i = u[0], o = u[1];
      if (i && o) {
        var h = i.split(`
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
                  var M = `
` + h[n].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
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
  var oa = Object.prototype.hasOwnProperty, ra = c.unstable_scheduleCallback, O = c.unstable_cancelCallback, N = c.unstable_shouldYield, w = c.unstable_requestPaint, Y = c.unstable_now, k = c.unstable_getCurrentPriorityLevel, x = c.unstable_ImmediatePriority, I = c.unstable_UserBlockingPriority, le = c.unstable_NormalPriority, _e = c.unstable_LowPriority, Jl = c.unstable_IdlePriority, Ne = c.log, bn = c.unstable_setDisableYieldValue, ql = null, ve = null;
  function cl(e) {
    if (typeof Ne == "function" && bn(e), ve && typeof ve.setStrictMode == "function")
      try {
        ve.setStrictMode(ql, e);
      } catch {
      }
  }
  var Ge = Math.clz32 ? Math.clz32 : V0, pn = Math.log, Z0 = Math.LN2;
  function V0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pn(e) / Z0 | 0) | 0;
  }
  var yu = 256, mu = 262144, gu = 4194304;
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
    var a = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = kt(n) : (i &= o, i !== 0 ? a = kt(i) : t || (t = o & ~e, t !== 0 && (a = kt(t))))) : (o = n & ~u, o !== 0 ? a = kt(o) : i !== 0 ? a = kt(i) : t || (t = n & ~e, t !== 0 && (a = kt(t)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, t = l & -l, u >= t || u === 32 && (t & 4194048) !== 0) ? l : a;
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
  function Qc(e) {
    for (var l = [], t = 0; 31 > t; t++) l.push(e);
    return l;
  }
  function da(e, l) {
    e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function J0(e, l, t, n, a, u) {
    var i = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var o = e.entanglements, h = e.expirationTimes, b = e.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var M = 31 - Ge(t), H = 1 << M;
      o[M] = 0, h[M] = -1;
      var p = b[M];
      if (p !== null)
        for (b[M] = null, M = 0; M < p.length; M++) {
          var E = p[M];
          E !== null && (E.lane &= -536870913);
        }
      t &= ~H;
    }
    n !== 0 && bo(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~l));
  }
  function bo(e, l, t) {
    e.pendingLanes |= l, e.suspendedLanes &= ~l;
    var n = 31 - Ge(l);
    e.entangledLanes |= l, e.entanglements[n] = e.entanglements[n] | 1073741824 | t & 261930;
  }
  function po(e, l) {
    var t = e.entangledLanes |= l;
    for (e = e.entanglements; t; ) {
      var n = 31 - Ge(t), a = 1 << n;
      a & l | e[n] & l && (e[n] |= l), t &= ~a;
    }
  }
  function To(e, l) {
    var t = l & -l;
    return t = (t & 42) !== 0 ? 1 : Zc(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
  }
  function Zc(e) {
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
  function Vc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ao() {
    var e = j.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : i0(e.type));
  }
  function Eo(e, l) {
    var t = j.p;
    try {
      return j.p = e, l();
    } finally {
      j.p = t;
    }
  }
  var Tt = Math.random().toString(36).slice(2), ll = "__reactFiber$" + Tt, yl = "__reactProps$" + Tt, Tn = "__reactContainer$" + Tt, Kc = "__reactEvents$" + Tt, k0 = "__reactListeners$" + Tt, W0 = "__reactHandles$" + Tt, zo = "__reactResources$" + Tt, ha = "__reactMarker$" + Tt;
  function Jc(e) {
    delete e[ll], delete e[yl], delete e[Kc], delete e[k0], delete e[W0];
  }
  function An(e) {
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
  function En(e) {
    if (e = e[ll] || e[Tn]) {
      var l = e.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return e;
    }
    return null;
  }
  function ya(e) {
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
  var Co = /* @__PURE__ */ new Set(), Oo = {};
  function Wt(e, l) {
    Cn(e, l), Cn(e + "Capture", l);
  }
  function Cn(e, l) {
    for (Oo[e] = l, e = 0; e < l.length; e++)
      Co.add(l[e]);
  }
  var $0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mo = {}, _o = {};
  function F0(e) {
    return oa.call(_o, e) ? !0 : oa.call(Mo, e) ? !1 : $0.test(e) ? _o[e] = !0 : (Mo[e] = !0, !1);
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
  function Dl(e) {
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
  function wo(e) {
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
  function kc(e) {
    if (!e._valueTracker) {
      var l = wo(e) ? "checked" : "value";
      e._valueTracker = I0(
        e,
        l,
        "" + e[l]
      );
    }
  }
  function Do(e) {
    if (!e) return !1;
    var l = e._valueTracker;
    if (!l) return !0;
    var t = l.getValue(), n = "";
    return e && (n = wo(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== t ? (l.setValue(e), !0) : !1;
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
  function Hl(e) {
    return e.replace(
      P0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wc(e, l, t, n, a, u, i, o) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + Dl(l)) : e.value !== "" + Dl(l) && (e.value = "" + Dl(l)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), l != null ? $c(e, i, Dl(l)) : t != null ? $c(e, i, Dl(t)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + Dl(o) : e.removeAttribute("name");
  }
  function Ho(e, l, t, n, a, u, i, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), l != null || t != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        kc(e);
        return;
      }
      t = t != null ? "" + Dl(t) : "", l = l != null ? "" + Dl(l) : t, o || l === e.value || (e.value = l), e.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = o ? e.checked : !!n, e.defaultChecked = !!n, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), kc(e);
  }
  function $c(e, l, t) {
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
      for (t = "" + Dl(t), l = null, a = 0; a < e.length; a++) {
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
    if (l != null && (l = "" + Dl(l), l !== e.value && (e.value = l), t == null)) {
      e.defaultValue !== l && (e.defaultValue = l);
      return;
    }
    e.defaultValue = t != null ? "" + Dl(t) : "";
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
    t = Dl(l), e.defaultValue = t, n = e.textContent, n === t && n !== "" && n !== null && (e.value = n), kc(e);
  }
  function Mn(e, l) {
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
  function Bo(e, l, t) {
    var n = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? n ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : n ? e.setProperty(l, t) : typeof t != "number" || t === 0 || eh.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
  }
  function No(e, l, t) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (e = e.style, t != null) {
      for (var n in t)
        !t.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && t[a] !== n && Bo(e, a, n);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && Bo(e, u, l[u]);
  }
  function Fc(e) {
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
  var Ic = null;
  function Pc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var _n = null, wn = null;
  function xo(e) {
    var l = En(e);
    if (l && (e = l.stateNode)) {
      var t = e[yl] || null;
      e: switch (e = l.stateNode, l.type) {
        case "input":
          if (Wc(
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
              'input[name="' + Hl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < t.length; l++) {
              var n = t[l];
              if (n !== e && n.form === e.form) {
                var a = n[yl] || null;
                if (!a) throw Error(r(90));
                Wc(
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
              n = t[l], n.form === e.form && Do(n);
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
  var ei = !1;
  function jo(e, l, t) {
    if (ei) return e(l, t);
    ei = !0;
    try {
      var n = e(l);
      return n;
    } finally {
      if (ei = !1, (_n !== null || wn !== null) && (fc(), _n && (l = _n, e = wn, wn = _n = null, xo(l), e)))
        for (l = 0; l < e.length; l++) xo(e[l]);
    }
  }
  function ma(e, l) {
    var t = e.stateNode;
    if (t === null) return null;
    var n = t[yl] || null;
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
  var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), li = !1;
  if (tt)
    try {
      var ga = {};
      Object.defineProperty(ga, "passive", {
        get: function() {
          li = !0;
        }
      }), window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
    } catch {
      li = !1;
    }
  var At = null, ti = null, Au = null;
  function Go() {
    if (Au) return Au;
    var e, l = ti, t = l.length, n, a = "value" in At ? At.value : At.textContent, u = a.length;
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
  function Lo() {
    return !1;
  }
  function ml(e) {
    function l(t, n, a, u, i) {
      this._reactName = t, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zu : Lo, this.isPropagationStopped = Lo, this;
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
  var $t = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cu = ml($t), va = B({}, $t, { view: 0, detail: 0 }), nh = ml(va), ni, ai, Sa, Ou = B({}, va, {
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
    getModifierState: ci,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Sa && (Sa && e.type === "mousemove" ? (ni = e.screenX - Sa.screenX, ai = e.screenY - Sa.screenY) : ai = ni = 0, Sa = e), ni);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ai;
    }
  }), qo = ml(Ou), ah = B({}, Ou, { dataTransfer: 0 }), uh = ml(ah), ch = B({}, va, { relatedTarget: 0 }), ui = ml(ch), ih = B({}, $t, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fh = ml(ih), oh = B({}, $t, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rh = ml(oh), sh = B({}, $t, { data: 0 }), Yo = ml(sh), dh = {
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
  }, yh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mh(e) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(e) : (e = yh[e]) ? !!l[e] : !1;
  }
  function ci() {
    return mh;
  }
  var gh = B({}, va, {
    key: function(e) {
      if (e.key) {
        var l = dh[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = Eu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ci,
    charCode: function(e) {
      return e.type === "keypress" ? Eu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vh = ml(gh), Sh = B({}, Ou, {
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
  }), Xo = ml(Sh), bh = B({}, va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ci
  }), ph = ml(bh), Th = B({}, $t, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ah = ml(Th), Eh = B({}, Ou, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zh = ml(Eh), Ch = B({}, $t, {
    newState: 0,
    oldState: 0
  }), Oh = ml(Ch), Mh = [9, 13, 27, 32], ii = tt && "CompositionEvent" in window, ba = null;
  tt && "documentMode" in document && (ba = document.documentMode);
  var _h = tt && "TextEvent" in window && !ba, Qo = tt && (!ii || ba && 8 < ba && 11 >= ba), Zo = " ", Vo = !1;
  function Ko(e, l) {
    switch (e) {
      case "keyup":
        return Mh.indexOf(l.keyCode) !== -1;
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
  var Dn = !1;
  function wh(e, l) {
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
  function Dh(e, l) {
    if (Dn)
      return e === "compositionend" || !ii && Ko(e, l) ? (e = Go(), Au = ti = At = null, Dn = !1, e) : null;
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
  var Hh = {
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
    return l === "input" ? !!Hh[e.type] : l === "textarea";
  }
  function Wo(e, l, t, n) {
    _n ? wn ? wn.push(n) : wn = [n] : _n = n, l = mc(l, "onChange"), 0 < l.length && (t = new Cu(
      "onChange",
      "change",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }));
  }
  var pa = null, Ta = null;
  function Rh(e) {
    Hd(e, 0);
  }
  function Mu(e) {
    var l = ya(e);
    if (Do(l)) return e;
  }
  function $o(e, l) {
    if (e === "change") return l;
  }
  var Fo = !1;
  if (tt) {
    var fi;
    if (tt) {
      var oi = "oninput" in document;
      if (!oi) {
        var Io = document.createElement("div");
        Io.setAttribute("oninput", "return;"), oi = typeof Io.oninput == "function";
      }
      fi = oi;
    } else fi = !1;
    Fo = fi && (!document.documentMode || 9 < document.documentMode);
  }
  function Po() {
    pa && (pa.detachEvent("onpropertychange", er), Ta = pa = null);
  }
  function er(e) {
    if (e.propertyName === "value" && Mu(Ta)) {
      var l = [];
      Wo(
        l,
        Ta,
        e,
        Pc(e)
      ), jo(Rh, l);
    }
  }
  function Uh(e, l, t) {
    e === "focusin" ? (Po(), pa = l, Ta = t, pa.attachEvent("onpropertychange", er)) : e === "focusout" && Po();
  }
  function Bh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mu(Ta);
  }
  function Nh(e, l) {
    if (e === "click") return Mu(l);
  }
  function xh(e, l) {
    if (e === "input" || e === "change")
      return Mu(l);
  }
  function jh(e, l) {
    return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
  }
  var Al = typeof Object.is == "function" ? Object.is : jh;
  function Aa(e, l) {
    if (Al(e, l)) return !0;
    if (typeof e != "object" || e === null || typeof l != "object" || l === null)
      return !1;
    var t = Object.keys(e), n = Object.keys(l);
    if (t.length !== n.length) return !1;
    for (n = 0; n < t.length; n++) {
      var a = t[n];
      if (!oa.call(l, a) || !Al(e[a], l[a]))
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
  function ri(e) {
    var l = e && e.nodeName && e.nodeName.toLowerCase();
    return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
  }
  var Gh = tt && "documentMode" in document && 11 >= document.documentMode, Hn = null, si = null, Ea = null, di = !1;
  function ur(e, l, t) {
    var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    di || Hn == null || Hn !== pu(n) || (n = Hn, "selectionStart" in n && ri(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Ea && Aa(Ea, n) || (Ea = n, n = mc(si, "onSelect"), 0 < n.length && (l = new Cu(
      "onSelect",
      "select",
      null,
      l,
      t
    ), e.push({ event: l, listeners: n }), l.target = Hn)));
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
  }, hi = {}, cr = {};
  tt && (cr = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
  function It(e) {
    if (hi[e]) return hi[e];
    if (!Rn[e]) return e;
    var l = Rn[e], t;
    for (t in l)
      if (l.hasOwnProperty(t) && t in cr)
        return hi[e] = l[t];
    return e;
  }
  var ir = It("animationend"), fr = It("animationiteration"), or = It("animationstart"), Lh = It("transitionrun"), qh = It("transitionstart"), Yh = It("transitioncancel"), rr = It("transitionend"), sr = /* @__PURE__ */ new Map(), yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yi.push("scrollEnd");
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
  }, Rl = [], Un = 0, mi = 0;
  function wu() {
    for (var e = Un, l = mi = Un = 0; l < e; ) {
      var t = Rl[l];
      Rl[l++] = null;
      var n = Rl[l];
      Rl[l++] = null;
      var a = Rl[l];
      Rl[l++] = null;
      var u = Rl[l];
      if (Rl[l++] = null, n !== null && a !== null) {
        var i = n.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), n.pending = a;
      }
      u !== 0 && dr(t, a, u);
    }
  }
  function Du(e, l, t, n) {
    Rl[Un++] = e, Rl[Un++] = l, Rl[Un++] = t, Rl[Un++] = n, mi |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function gi(e, l, t, n) {
    return Du(e, l, t, n), Hu(e);
  }
  function Pt(e, l) {
    return Du(e, null, null, l), Hu(e);
  }
  function dr(e, l, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= t, n = u.alternate, n !== null && (n.childLanes |= t), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && l !== null && (a = 31 - Ge(t), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [l] : n.push(l), l.lane = t | 536870912), u) : null;
  }
  function Hu(e) {
    if (50 < Va)
      throw Va = 0, Of = null, Error(r(185));
    for (var l = e.return; l !== null; )
      e = l, l = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bn = {};
  function Xh(e, l, t, n) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function El(e, l, t, n) {
    return new Xh(e, l, t, n);
  }
  function vi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function nt(e, l) {
    var t = e.alternate;
    return t === null ? (t = El(
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
    var i = 0;
    if (n = e, typeof e == "function") vi(e) && (i = 1);
    else if (typeof e == "string")
      i = Jy(
        e,
        t,
        q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ol:
          return e = El(31, t, l, a), e.elementType = ol, e.lanes = u, e;
        case $:
          return en(t.children, a, u, l);
        case Ve:
          i = 8, a |= 24;
          break;
        case me:
          return e = El(12, t, l, a | 2), e.elementType = me, e.lanes = u, e;
        case fl:
          return e = El(13, t, l, a), e.elementType = fl, e.lanes = u, e;
        case Ke:
          return e = El(19, t, l, a), e.elementType = Ke, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ae:
                i = 10;
                break e;
              case je:
                i = 9;
                break e;
              case we:
                i = 11;
                break e;
              case ie:
                i = 14;
                break e;
              case Re:
                i = 16, n = null;
                break e;
            }
          i = 29, t = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return l = El(i, t, l, a), l.elementType = e, l.type = n, l.lanes = u, l;
  }
  function en(e, l, t, n) {
    return e = El(7, e, n, l), e.lanes = t, e;
  }
  function Si(e, l, t) {
    return e = El(6, e, null, l), e.lanes = t, e;
  }
  function yr(e) {
    var l = El(18, null, null, 0);
    return l.stateNode = e, l;
  }
  function bi(e, l, t) {
    return l = El(
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
  var mr = /* @__PURE__ */ new WeakMap();
  function Ul(e, l) {
    if (typeof e == "object" && e !== null) {
      var t = mr.get(e);
      return t !== void 0 ? t : (l = {
        value: e,
        source: l,
        stack: hu(l)
      }, mr.set(e, l), l);
    }
    return {
      value: e,
      source: l,
      stack: hu(l)
    };
  }
  var Nn = [], xn = 0, Uu = null, za = 0, Bl = [], Nl = 0, Et = null, kl = 1, Wl = "";
  function at(e, l) {
    Nn[xn++] = za, Nn[xn++] = Uu, Uu = e, za = l;
  }
  function gr(e, l, t) {
    Bl[Nl++] = kl, Bl[Nl++] = Wl, Bl[Nl++] = Et, Et = e;
    var n = kl;
    e = Wl;
    var a = 32 - Ge(n) - 1;
    n &= ~(1 << a), t += 1;
    var u = 32 - Ge(l) + a;
    if (30 < u) {
      var i = a - a % 5;
      u = (n & (1 << i) - 1).toString(32), n >>= i, a -= i, kl = 1 << 32 - Ge(l) + a | t << a | n, Wl = u + e;
    } else
      kl = 1 << u | t << a | n, Wl = e;
  }
  function pi(e) {
    e.return !== null && (at(e, 1), gr(e, 1, 0));
  }
  function Ti(e) {
    for (; e === Uu; )
      Uu = Nn[--xn], Nn[xn] = null, za = Nn[--xn], Nn[xn] = null;
    for (; e === Et; )
      Et = Bl[--Nl], Bl[Nl] = null, Wl = Bl[--Nl], Bl[Nl] = null, kl = Bl[--Nl], Bl[Nl] = null;
  }
  function vr(e, l) {
    Bl[Nl++] = kl, Bl[Nl++] = Wl, Bl[Nl++] = Et, kl = l.id, Wl = l.overflow, Et = e;
  }
  var tl = null, De = null, de = !1, zt = null, xl = !1, Ai = Error(r(519));
  function Ct(e) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ca(Ul(l, e)), Ai;
  }
  function Sr(e) {
    var l = e.stateNode, t = e.type, n = e.memoizedProps;
    switch (l[ll] = e, l[yl] = n, t) {
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
        oe("invalid", l), Ho(
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
    t = n.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || n.suppressHydrationWarning === !0 || Nd(l.textContent, t) ? (n.popover != null && (oe("beforetoggle", l), oe("toggle", l)), n.onScroll != null && oe("scroll", l), n.onScrollEnd != null && oe("scrollend", l), n.onClick != null && (l.onclick = lt), l = !0) : l = !1, l || Ct(e, !0);
  }
  function br(e) {
    for (tl = e.return; tl; )
      switch (tl.tag) {
        case 5:
        case 31:
        case 13:
          xl = !1;
          return;
        case 27:
        case 3:
          xl = !0;
          return;
        default:
          tl = tl.return;
      }
  }
  function jn(e) {
    if (e !== tl) return !1;
    if (!de) return br(e), de = !0, !1;
    var l = e.tag, t;
    if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Yf(e.type, e.memoizedProps)), t = !t), t && De && Ct(e), br(e), l === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      De = Zd(e);
    } else if (l === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      De = Zd(e);
    } else
      l === 27 ? (l = De, Lt(e.type) ? (e = Kf, Kf = null, De = e) : De = l) : De = tl ? Gl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ln() {
    De = tl = null, de = !1;
  }
  function Ei() {
    var e = zt;
    return e !== null && (bl === null ? bl = e : bl.push.apply(
      bl,
      e
    ), zt = null), e;
  }
  function Ca(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  var zi = m(null), tn = null, ut = null;
  function Ot(e, l, t) {
    L(zi, l._currentValue), l._currentValue = t;
  }
  function ct(e) {
    e._currentValue = zi.current, U(zi);
  }
  function Ci(e, l, t) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & l) !== l ? (e.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), e === t) break;
      e = e.return;
    }
  }
  function Oi(e, l, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var h = 0; h < l.length; h++)
            if (o.context === l[h]) {
              u.lanes |= t, o = u.alternate, o !== null && (o.lanes |= t), Ci(
                u.return,
                t,
                e
              ), n || (i = null);
              break e;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(r(341));
        i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Ci(i, t, e), i = null;
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
  function Gn(e, l, t, n) {
    e = null;
    for (var a = l, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var o = a.type;
          Al(a.pendingProps.value, i.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === ce.current) {
        if (i = a.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ia) : e = [Ia]);
      }
      a = a.return;
    }
    e !== null && Oi(
      l,
      e,
      t,
      n
    ), l.flags |= 262144;
  }
  function Bu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Al(
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
  function Nu(e, l) {
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
  }, Zh = c.unstable_scheduleCallback, Vh = c.unstable_NormalPriority, Je = {
    $$typeof: Ae,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mi() {
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
  var Ma = null, _i = 0, Ln = 0, qn = null;
  function Kh(e, l) {
    if (Ma === null) {
      var t = Ma = [];
      _i = 0, Ln = Rf(), qn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          t.push(n);
        }
      };
    }
    return _i++, l.then(Tr, Tr), l;
  }
  function Tr() {
    if (--_i === 0 && Ma !== null) {
      qn !== null && (qn.status = "fulfilled");
      var e = Ma;
      Ma = null, Ln = 0, qn = null;
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
  var Ar = _.S;
  _.S = function(e, l) {
    ud = Y(), typeof l == "object" && l !== null && typeof l.then == "function" && Kh(e, l), Ar !== null && Ar(e, l);
  };
  var an = m(null);
  function wi() {
    var e = an.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function xu(e, l) {
    l === null ? L(an, an.current) : L(an, l.pool);
  }
  function Er() {
    var e = wi();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Yn = Error(r(460)), Di = Error(r(474)), ju = Error(r(542)), Gu = { then: function() {
  } };
  function zr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Cr(e, l, t) {
    switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(lt, lt), l = t), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw e = l.reason, Mr(e), e;
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
            throw e = l.reason, Mr(e), e;
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
  function Mr(e) {
    if (e === Yn || e === ju)
      throw Error(r(483));
  }
  var Xn = null, _a = 0;
  function Lu(e) {
    var l = _a;
    return _a += 1, Xn === null && (Xn = []), Cr(Xn, e, l);
  }
  function wa(e, l) {
    l = l.props.ref, e.ref = l !== void 0 ? l : null;
  }
  function qu(e, l) {
    throw l.$$typeof === C ? Error(r(525)) : (e = Object.prototype.toString.call(l), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e
      )
    ));
  }
  function _r(e) {
    function l(g, y) {
      if (e) {
        var S = g.deletions;
        S === null ? (g.deletions = [y], g.flags |= 16) : S.push(y);
      }
    }
    function t(g, y) {
      if (!e) return null;
      for (; y !== null; )
        l(g, y), y = y.sibling;
      return null;
    }
    function n(g) {
      for (var y = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
      return y;
    }
    function a(g, y) {
      return g = nt(g, y), g.index = 0, g.sibling = null, g;
    }
    function u(g, y, S) {
      return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < y ? (g.flags |= 67108866, y) : S) : (g.flags |= 67108866, y)) : (g.flags |= 1048576, y);
    }
    function i(g) {
      return e && g.alternate === null && (g.flags |= 67108866), g;
    }
    function o(g, y, S, D) {
      return y === null || y.tag !== 6 ? (y = Si(S, g.mode, D), y.return = g, y) : (y = a(y, S), y.return = g, y);
    }
    function h(g, y, S, D) {
      var W = S.type;
      return W === $ ? M(
        g,
        y,
        S.props.children,
        D,
        S.key
      ) : y !== null && (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Re && un(W) === y.type) ? (y = a(y, S.props), wa(y, S), y.return = g, y) : (y = Ru(
        S.type,
        S.key,
        S.props,
        null,
        g.mode,
        D
      ), wa(y, S), y.return = g, y);
    }
    function b(g, y, S, D) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = bi(S, g.mode, D), y.return = g, y) : (y = a(y, S.children || []), y.return = g, y);
    }
    function M(g, y, S, D, W) {
      return y === null || y.tag !== 7 ? (y = en(
        S,
        g.mode,
        D,
        W
      ), y.return = g, y) : (y = a(y, S), y.return = g, y);
    }
    function H(g, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Si(
          "" + y,
          g.mode,
          S
        ), y.return = g, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case te:
            return S = Ru(
              y.type,
              y.key,
              y.props,
              null,
              g.mode,
              S
            ), wa(S, y), S.return = g, S;
          case X:
            return y = bi(
              y,
              g.mode,
              S
            ), y.return = g, y;
          case Re:
            return y = un(y), H(g, y, S);
        }
        if (hl(y) || Ie(y))
          return y = en(
            y,
            g.mode,
            S,
            null
          ), y.return = g, y;
        if (typeof y.then == "function")
          return H(g, Lu(y), S);
        if (y.$$typeof === Ae)
          return H(
            g,
            Nu(g, y),
            S
          );
        qu(g, y);
      }
      return null;
    }
    function p(g, y, S, D) {
      var W = y !== null ? y.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return W !== null ? null : o(g, y, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            return S.key === W ? h(g, y, S, D) : null;
          case X:
            return S.key === W ? b(g, y, S, D) : null;
          case Re:
            return S = un(S), p(g, y, S, D);
        }
        if (hl(S) || Ie(S))
          return W !== null ? null : M(g, y, S, D, null);
        if (typeof S.then == "function")
          return p(
            g,
            y,
            Lu(S),
            D
          );
        if (S.$$typeof === Ae)
          return p(
            g,
            y,
            Nu(g, S),
            D
          );
        qu(g, S);
      }
      return null;
    }
    function E(g, y, S, D, W) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return g = g.get(S) || null, o(y, g, "" + D, W);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case te:
            return g = g.get(
              D.key === null ? S : D.key
            ) || null, h(y, g, D, W);
          case X:
            return g = g.get(
              D.key === null ? S : D.key
            ) || null, b(y, g, D, W);
          case Re:
            return D = un(D), E(
              g,
              y,
              S,
              D,
              W
            );
        }
        if (hl(D) || Ie(D))
          return g = g.get(S) || null, M(y, g, D, W, null);
        if (typeof D.then == "function")
          return E(
            g,
            y,
            S,
            Lu(D),
            W
          );
        if (D.$$typeof === Ae)
          return E(
            g,
            y,
            S,
            Nu(y, D),
            W
          );
        qu(y, D);
      }
      return null;
    }
    function Q(g, y, S, D) {
      for (var W = null, he = null, K = y, ue = y = 0, se = null; K !== null && ue < S.length; ue++) {
        K.index > ue ? (se = K, K = null) : se = K.sibling;
        var ye = p(
          g,
          K,
          S[ue],
          D
        );
        if (ye === null) {
          K === null && (K = se);
          break;
        }
        e && K && ye.alternate === null && l(g, K), y = u(ye, y, ue), he === null ? W = ye : he.sibling = ye, he = ye, K = se;
      }
      if (ue === S.length)
        return t(g, K), de && at(g, ue), W;
      if (K === null) {
        for (; ue < S.length; ue++)
          K = H(g, S[ue], D), K !== null && (y = u(
            K,
            y,
            ue
          ), he === null ? W = K : he.sibling = K, he = K);
        return de && at(g, ue), W;
      }
      for (K = n(K); ue < S.length; ue++)
        se = E(
          K,
          g,
          ue,
          S[ue],
          D
        ), se !== null && (e && se.alternate !== null && K.delete(
          se.key === null ? ue : se.key
        ), y = u(
          se,
          y,
          ue
        ), he === null ? W = se : he.sibling = se, he = se);
      return e && K.forEach(function(Zt) {
        return l(g, Zt);
      }), de && at(g, ue), W;
    }
    function ee(g, y, S, D) {
      if (S == null) throw Error(r(151));
      for (var W = null, he = null, K = y, ue = y = 0, se = null, ye = S.next(); K !== null && !ye.done; ue++, ye = S.next()) {
        K.index > ue ? (se = K, K = null) : se = K.sibling;
        var Zt = p(g, K, ye.value, D);
        if (Zt === null) {
          K === null && (K = se);
          break;
        }
        e && K && Zt.alternate === null && l(g, K), y = u(Zt, y, ue), he === null ? W = Zt : he.sibling = Zt, he = Zt, K = se;
      }
      if (ye.done)
        return t(g, K), de && at(g, ue), W;
      if (K === null) {
        for (; !ye.done; ue++, ye = S.next())
          ye = H(g, ye.value, D), ye !== null && (y = u(ye, y, ue), he === null ? W = ye : he.sibling = ye, he = ye);
        return de && at(g, ue), W;
      }
      for (K = n(K); !ye.done; ue++, ye = S.next())
        ye = E(K, g, ue, ye.value, D), ye !== null && (e && ye.alternate !== null && K.delete(ye.key === null ? ue : ye.key), y = u(ye, y, ue), he === null ? W = ye : he.sibling = ye, he = ye);
      return e && K.forEach(function(am) {
        return l(g, am);
      }), de && at(g, ue), W;
    }
    function Ce(g, y, S, D) {
      if (typeof S == "object" && S !== null && S.type === $ && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            e: {
              for (var W = S.key; y !== null; ) {
                if (y.key === W) {
                  if (W = S.type, W === $) {
                    if (y.tag === 7) {
                      t(
                        g,
                        y.sibling
                      ), D = a(
                        y,
                        S.props.children
                      ), D.return = g, g = D;
                      break e;
                    }
                  } else if (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Re && un(W) === y.type) {
                    t(
                      g,
                      y.sibling
                    ), D = a(y, S.props), wa(D, S), D.return = g, g = D;
                    break e;
                  }
                  t(g, y);
                  break;
                } else l(g, y);
                y = y.sibling;
              }
              S.type === $ ? (D = en(
                S.props.children,
                g.mode,
                D,
                S.key
              ), D.return = g, g = D) : (D = Ru(
                S.type,
                S.key,
                S.props,
                null,
                g.mode,
                D
              ), wa(D, S), D.return = g, g = D);
            }
            return i(g);
          case X:
            e: {
              for (W = S.key; y !== null; ) {
                if (y.key === W)
                  if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    t(
                      g,
                      y.sibling
                    ), D = a(y, S.children || []), D.return = g, g = D;
                    break e;
                  } else {
                    t(g, y);
                    break;
                  }
                else l(g, y);
                y = y.sibling;
              }
              D = bi(S, g.mode, D), D.return = g, g = D;
            }
            return i(g);
          case Re:
            return S = un(S), Ce(
              g,
              y,
              S,
              D
            );
        }
        if (hl(S))
          return Q(
            g,
            y,
            S,
            D
          );
        if (Ie(S)) {
          if (W = Ie(S), typeof W != "function") throw Error(r(150));
          return S = W.call(S), ee(
            g,
            y,
            S,
            D
          );
        }
        if (typeof S.then == "function")
          return Ce(
            g,
            y,
            Lu(S),
            D
          );
        if (S.$$typeof === Ae)
          return Ce(
            g,
            y,
            Nu(g, S),
            D
          );
        qu(g, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (t(g, y.sibling), D = a(y, S), D.return = g, g = D) : (t(g, y), D = Si(S, g.mode, D), D.return = g, g = D), i(g)) : t(g, y);
    }
    return function(g, y, S, D) {
      try {
        _a = 0;
        var W = Ce(
          g,
          y,
          S,
          D
        );
        return Xn = null, W;
      } catch (K) {
        if (K === Yn || K === ju) throw K;
        var he = El(29, K, null, g.mode);
        return he.lanes = D, he.return = g, he;
      }
    };
  }
  var fn = _r(!0), wr = _r(!1), Mt = !1;
  function Hi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ri(e, l) {
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
  function wt(e, l, t) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = Hu(e), dr(e, null, t), l;
    }
    return Du(e, n, l, t), Hu(e);
  }
  function Da(e, l, t) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, po(e, t);
    }
  }
  function Ui(e, l) {
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
  var Bi = !1;
  function Ha() {
    if (Bi) {
      var e = qn;
      if (e !== null) throw e;
    }
  }
  function Ra(e, l, t, n) {
    Bi = !1;
    var a = e.updateQueue;
    Mt = !1;
    var u = a.firstBaseUpdate, i = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, i === null ? u = b : i.next = b, i = h;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, o = M.lastBaseUpdate, o !== i && (o === null ? M.firstBaseUpdate = b : o.next = b, M.lastBaseUpdate = h));
    }
    if (u !== null) {
      var H = a.baseState;
      i = 0, M = b = h = null, o = u;
      do {
        var p = o.lane & -536870913, E = p !== o.lane;
        if (E ? (re & p) === p : (n & p) === p) {
          p !== 0 && p === Ln && (Bi = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, ee = o;
            p = l;
            var Ce = t;
            switch (ee.tag) {
              case 1:
                if (Q = ee.payload, typeof Q == "function") {
                  H = Q.call(Ce, H, p);
                  break e;
                }
                H = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = ee.payload, p = typeof Q == "function" ? Q.call(Ce, H, p) : Q, p == null) break e;
                H = B({}, H, p);
                break e;
              case 2:
                Mt = !0;
            }
          }
          p = o.callback, p !== null && (e.flags |= 64, E && (e.flags |= 8192), E = a.callbacks, E === null ? a.callbacks = [p] : E.push(p));
        } else
          E = {
            lane: p,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, M === null ? (b = M = E, h = H) : M = M.next = E, i |= p;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          E = o, o = E.next, E.next = null, a.lastBaseUpdate = E, a.shared.pending = null;
        }
      } while (!0);
      M === null && (h = H), a.baseState = h, a.firstBaseUpdate = b, a.lastBaseUpdate = M, u === null && (a.shared.lanes = 0), Bt |= i, e.lanes = i, e.memoizedState = H;
    }
  }
  function Dr(e, l) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(l);
  }
  function Hr(e, l) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++)
        Dr(t[e], l);
  }
  var Qn = m(null), Yu = m(0);
  function Rr(e, l) {
    e = mt, L(Yu, e), L(Qn, l), mt = e | l.baseLanes;
  }
  function Ni() {
    L(Yu, mt), L(Qn, Qn.current);
  }
  function xi() {
    mt = Yu.current, U(Qn), U(Yu);
  }
  var zl = m(null), jl = null;
  function Dt(e) {
    var l = e.alternate;
    L(Xe, Xe.current & 1), L(zl, e), jl === null && (l === null || Qn.current !== null || l.memoizedState !== null) && (jl = e);
  }
  function ji(e) {
    L(Xe, Xe.current), L(zl, e), jl === null && (jl = e);
  }
  function Ur(e) {
    e.tag === 22 ? (L(Xe, Xe.current), L(zl, e), jl === null && (jl = e)) : Ht();
  }
  function Ht() {
    L(Xe, Xe.current), L(zl, zl.current);
  }
  function Cl(e) {
    U(zl), jl === e && (jl = null), U(Xe);
  }
  var Xe = m(0);
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
  var it = 0, ae = null, Ee = null, ke = null, Qu = !1, Zn = !1, on = !1, Zu = 0, Ua = 0, Vn = null, kh = 0;
  function Le() {
    throw Error(r(321));
  }
  function Gi(e, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < e.length; t++)
      if (!Al(e[t], l[t])) return !1;
    return !0;
  }
  function Li(e, l, t, n, a, u) {
    return it = u, ae = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = e === null || e.memoizedState === null ? gs : ef, on = !1, u = t(n, a), on = !1, Zn && (u = Nr(
      l,
      t,
      n,
      a
    )), Br(e), u;
  }
  function Br(e) {
    _.H = xa;
    var l = Ee !== null && Ee.next !== null;
    if (it = 0, ke = Ee = ae = null, Qu = !1, Ua = 0, Vn = null, l) throw Error(r(300));
    e === null || We || (e = e.dependencies, e !== null && Bu(e) && (We = !0));
  }
  function Nr(e, l, t, n) {
    ae = e;
    var a = 0;
    do {
      if (Zn && (Vn = null), Ua = 0, Zn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, ke = Ee = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      _.H = vs, u = l(t, n);
    } while (Zn);
    return u;
  }
  function Wh() {
    var e = _.H, l = e.useState()[0];
    return l = typeof l.then == "function" ? Ba(l) : l, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (ae.flags |= 1024), l;
  }
  function qi() {
    var e = Zu !== 0;
    return Zu = 0, e;
  }
  function Yi(e, l, t) {
    l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
  }
  function Xi(e) {
    if (Qu) {
      for (e = e.memoizedState; e !== null; ) {
        var l = e.queue;
        l !== null && (l.pending = null), e = e.next;
      }
      Qu = !1;
    }
    it = 0, ke = Ee = ae = null, Zn = !1, Ua = Zu = 0, Vn = null;
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
    if (Ee === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var l = ke === null ? ae.memoizedState : ke.next;
    if (l !== null)
      ke = l, Ee = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(r(467)) : Error(r(310));
      Ee = e, e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null
      }, ke === null ? ae.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function Vu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ba(e) {
    var l = Ua;
    return Ua += 1, Vn === null && (Vn = []), e = Cr(Vn, e, l), l = ae, (ke === null ? l.memoizedState : ke.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? gs : ef), e;
  }
  function Ku(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ba(e);
      if (e.$$typeof === Ae) return nl(e);
    }
    throw Error(r(438, String(e)));
  }
  function Qi(e) {
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
    return Zi(l, Ee, e);
  }
  function Zi(e, l, t) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
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
      var o = i = null, h = null, b = l, M = !1;
      do {
        var H = b.lane & -536870913;
        if (H !== b.lane ? (re & H) === H : (it & H) === H) {
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
            }), H === Ln && (M = !0);
          else if ((it & p) === p) {
            b = b.next, p === Ln && (M = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, h === null ? (o = h = H, i = u) : h = h.next = H, ae.lanes |= p, Bt |= p;
          H = b.action, on && t(u, H), u = b.hasEagerState ? b.eagerState : t(u, H);
        } else
          p = {
            lane: H,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = p, i = u) : h = h.next = p, ae.lanes |= H, Bt |= H;
        b = b.next;
      } while (b !== null && b !== l);
      if (h === null ? i = u : h.next = o, !Al(u, e.memoizedState) && (We = !0, M && (t = qn, t !== null)))
        throw t;
      e.memoizedState = u, e.baseState = i, e.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Vi(e) {
    var l = Qe(), t = l.queue;
    if (t === null) throw Error(r(311));
    t.lastRenderedReducer = e;
    var n = t.dispatch, a = t.pending, u = l.memoizedState;
    if (a !== null) {
      t.pending = null;
      var i = a = a.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== a);
      Al(u, l.memoizedState) || (We = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), t.lastRenderedState = u;
    }
    return [u, n];
  }
  function xr(e, l, t) {
    var n = ae, a = Qe(), u = de;
    if (u) {
      if (t === void 0) throw Error(r(407));
      t = t();
    } else t = l();
    var i = !Al(
      (Ee || a).memoizedState,
      t
    );
    if (i && (a.memoizedState = t, We = !0), a = a.queue, ki(Lr.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== l || i || ke !== null && ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kn(
        9,
        { destroy: void 0 },
        Gr.bind(
          null,
          n,
          a,
          t,
          l
        ),
        null
      ), Oe === null) throw Error(r(349));
      u || (it & 127) !== 0 || jr(n, l, t);
    }
    return t;
  }
  function jr(e, l, t) {
    e.flags |= 16384, e = { getSnapshot: l, value: t }, l = ae.updateQueue, l === null ? (l = Vu(), ae.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
  }
  function Gr(e, l, t, n) {
    l.value = t, l.getSnapshot = n, qr(l) && Yr(e);
  }
  function Lr(e, l, t) {
    return t(function() {
      qr(l) && Yr(e);
    });
  }
  function qr(e) {
    var l = e.getSnapshot;
    e = e.value;
    try {
      var t = l();
      return !Al(e, t);
    } catch {
      return !0;
    }
  }
  function Yr(e) {
    var l = Pt(e, 2);
    l !== null && pl(l, e, 2);
  }
  function Ki(e) {
    var l = sl();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), on) {
        cl(!0);
        try {
          t();
        } finally {
          cl(!1);
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
    return e.baseState = t, Zi(
      e,
      Ee,
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
        then: function(i) {
          u.listeners.push(i);
        }
      };
      _.T !== null ? t(!0) : u.isTransition = !1, n(u), t = l.pending, t === null ? (u.next = l.pending = u, Qr(l, u)) : (u.next = t.next, l.pending = t.next = u);
    }
  }
  function Qr(e, l) {
    var t = l.action, n = l.payload, a = e.state;
    if (l.isTransition) {
      var u = _.T, i = {};
      _.T = i;
      try {
        var o = t(a, n), h = _.S;
        h !== null && h(i, o), Zr(e, l, o);
      } catch (b) {
        Ji(e, l, b);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), _.T = u;
      }
    } else
      try {
        u = t(a, n), Zr(e, l, u);
      } catch (b) {
        Ji(e, l, b);
      }
  }
  function Zr(e, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(n) {
        Vr(e, l, n);
      },
      function(n) {
        return Ji(e, l, n);
      }
    ) : Vr(e, l, t);
  }
  function Vr(e, l, t) {
    l.status = "fulfilled", l.value = t, Kr(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, Qr(e, t)));
  }
  function Ji(e, l, t) {
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
            if (De) {
              l: {
                for (var a = De, u = xl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = Gl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                De = Gl(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Ct(n);
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
    ), n.dispatch = t, n = Ki(!1), u = Pi.bind(
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
    return $r(l, Ee, e);
  }
  function $r(e, l, t) {
    if (l = Zi(
      e,
      l,
      Jr
    )[0], e = Ju(ft)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Ba(l);
      } catch (i) {
        throw i === Yn ? ju : i;
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
    var l = Qe(), t = Ee;
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
    Ee !== null && n !== null && Gi(n, Ee.memoizedState.deps) ? a.memoizedState = Kn(l, u, t, n) : (ae.flags |= e, a.memoizedState = Kn(
      1 | l,
      u,
      t,
      n
    ));
  }
  function Pr(e, l) {
    ku(8390656, 8, e, l);
  }
  function ki(e, l) {
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
  function Wi() {
  }
  function us(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    return l !== null && Gi(l, n[1]) ? n[0] : (t.memoizedState = [e, l], e);
  }
  function cs(e, l) {
    var t = Qe();
    l = l === void 0 ? null : l;
    var n = t.memoizedState;
    if (l !== null && Gi(l, n[1]))
      return n[0];
    if (n = e(), on) {
      cl(!0);
      try {
        e();
      } finally {
        cl(!1);
      }
    }
    return t.memoizedState = [n, l], n;
  }
  function $i(e, l, t) {
    return t === void 0 || (it & 1073741824) !== 0 && (re & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = id(), ae.lanes |= e, Bt |= e, t);
  }
  function is(e, l, t, n) {
    return Al(t, l) ? t : Qn.current !== null ? (e = $i(e, t, n), Al(e, l) || (We = !0), e) : (it & 42) === 0 || (it & 1073741824) !== 0 && (re & 261930) === 0 ? (We = !0, e.memoizedState = t) : (e = id(), ae.lanes |= e, Bt |= e, l);
  }
  function fs(e, l, t, n, a) {
    var u = j.p;
    j.p = u !== 0 && 8 > u ? u : 8;
    var i = _.T, o = {};
    _.T = o, Pi(e, !1, l, t);
    try {
      var h = a(), b = _.S;
      if (b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var M = Jh(
          h,
          n
        );
        Na(
          e,
          l,
          M,
          _l(e)
        );
      } else
        Na(
          e,
          l,
          n,
          _l(e)
        );
    } catch (H) {
      Na(
        e,
        l,
        { then: function() {
        }, status: "rejected", reason: H },
        _l()
      );
    } finally {
      j.p = u, i !== null && o.types !== null && (i.types = o.types), _.T = i;
    }
  }
  function Ph() {
  }
  function Fi(e, l, t, n) {
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
    l.next === null && (l = e.alternate.memoizedState), Na(
      e,
      l.next.queue,
      {},
      _l()
    );
  }
  function Ii() {
    return nl(Ia);
  }
  function ss() {
    return Qe().memoizedState;
  }
  function ds() {
    return Qe().memoizedState;
  }
  function ey(e) {
    for (var l = e.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = _l();
          e = _t(t);
          var n = wt(l, e, t);
          n !== null && (pl(n, l, t), Da(n, l, t)), l = { cache: Mi() }, e.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function ly(e, l, t) {
    var n = _l();
    t = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $u(e) ? ys(l, t) : (t = gi(e, l, t, n), t !== null && (pl(t, e, n), ms(t, l, n)));
  }
  function hs(e, l, t) {
    var n = _l();
    Na(e, l, t, n);
  }
  function Na(e, l, t, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($u(e)) ys(l, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var i = l.lastRenderedState, o = u(i, t);
          if (a.hasEagerState = !0, a.eagerState = o, Al(o, i))
            return Du(e, l, a, 0), Oe === null && wu(), !1;
        } catch {
        }
      if (t = gi(e, l, a, n), t !== null)
        return pl(t, e, n), ms(t, l, n), !0;
    }
    return !1;
  }
  function Pi(e, l, t, n) {
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
      l = gi(
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
  function ys(e, l) {
    Zn = Qu = !0;
    var t = e.pending;
    t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
  }
  function ms(e, l, t) {
    if ((t & 4194048) !== 0) {
      var n = l.lanes;
      n &= e.pendingLanes, t |= n, l.lanes = t, po(e, t);
    }
  }
  var xa = {
    readContext: nl,
    use: Ku,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useLayoutEffect: Le,
    useInsertionEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useSyncExternalStore: Le,
    useId: Le,
    useHostTransitionStatus: Le,
    useFormState: Le,
    useActionState: Le,
    useOptimistic: Le,
    useMemoCache: Le,
    useCacheRefresh: Le
  };
  xa.useEffectEvent = Le;
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
        cl(!0);
        try {
          e();
        } finally {
          cl(!1);
        }
      }
      return t.memoizedState = [n, l], n;
    },
    useReducer: function(e, l, t) {
      var n = sl();
      if (t !== void 0) {
        var a = t(l);
        if (on) {
          cl(!0);
          try {
            t(l);
          } finally {
            cl(!1);
          }
        }
      } else a = l;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = ly.bind(
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
      e = Ki(e);
      var l = e.queue, t = hs.bind(null, ae, l);
      return l.dispatch = t, [e.memoizedState, t];
    },
    useDebugValue: Wi,
    useDeferredValue: function(e, l) {
      var t = sl();
      return $i(t, e, l);
    },
    useTransition: function() {
      var e = Ki(!1);
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
        (re & 127) !== 0 || jr(n, l, t);
      }
      a.memoizedState = t;
      var u = { value: t, getSnapshot: l };
      return a.queue = u, Pr(Lr.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Kn(
        9,
        { destroy: void 0 },
        Gr.bind(
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
        t = (n & ~(1 << 32 - Ge(n) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = Zu++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else
        t = kh++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    },
    useHostTransitionStatus: Ii,
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
      return l.queue = t, l = Pi.bind(
        null,
        ae,
        !0,
        t
      ), t.dispatch = l, [e, l];
    },
    useMemoCache: Qi,
    useCacheRefresh: function() {
      return sl().memoizedState = ey.bind(
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
    useEffect: ki,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: cs,
    useReducer: Ju,
    useRef: Ir,
    useState: function() {
      return Ju(ft);
    },
    useDebugValue: Wi,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return is(
        t,
        Ee.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Ju(ft)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ba(e),
        l
      ];
    },
    useSyncExternalStore: xr,
    useId: ss,
    useHostTransitionStatus: Ii,
    useFormState: Wr,
    useActionState: Wr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Xr(t, Ee, e, l);
    },
    useMemoCache: Qi,
    useCacheRefresh: ds
  };
  ef.useEffectEvent = es;
  var vs = {
    readContext: nl,
    use: Ku,
    useCallback: us,
    useContext: nl,
    useEffect: ki,
    useImperativeHandle: as,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: cs,
    useReducer: Vi,
    useRef: Ir,
    useState: function() {
      return Vi(ft);
    },
    useDebugValue: Wi,
    useDeferredValue: function(e, l) {
      var t = Qe();
      return Ee === null ? $i(t, e, l) : is(
        t,
        Ee.memoizedState,
        e,
        l
      );
    },
    useTransition: function() {
      var e = Vi(ft)[0], l = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ba(e),
        l
      ];
    },
    useSyncExternalStore: xr,
    useId: ss,
    useHostTransitionStatus: Ii,
    useFormState: Fr,
    useActionState: Fr,
    useOptimistic: function(e, l) {
      var t = Qe();
      return Ee !== null ? Xr(t, Ee, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    },
    useMemoCache: Qi,
    useCacheRefresh: ds
  };
  vs.useEffectEvent = es;
  function lf(e, l, t, n) {
    l = e.memoizedState, t = t(n, l), t = t == null ? l : B({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var tf = {
    enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var n = _l(), a = _t(n);
      a.payload = l, t != null && (a.callback = t), l = wt(e, a, n), l !== null && (pl(l, e, n), Da(l, e, n));
    },
    enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var n = _l(), a = _t(n);
      a.tag = 1, a.payload = l, t != null && (a.callback = t), l = wt(e, a, n), l !== null && (pl(l, e, n), Da(l, e, n));
    },
    enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = _l(), n = _t(t);
      n.tag = 2, l != null && (n.callback = l), l = wt(e, n, t), l !== null && (pl(l, e, t), Da(l, e, t));
    }
  };
  function Ss(e, l, t, n, a, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Aa(t, n) || !Aa(a, u) : !0;
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
      t === l && (t = B({}, t));
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
  function As(e) {
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
  function Es(e, l, t) {
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
  function Cs(e, l, t, n) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Es(l, t, n);
      };
    }
    var i = t.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      Es(l, t, n), typeof a != "function" && (Nt === null ? Nt = /* @__PURE__ */ new Set([this]) : Nt.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function ty(e, l, t, n, a) {
    if (t.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = t.alternate, l !== null && Gn(
        l,
        t,
        a,
        !0
      ), t = zl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return jl === null ? oc() : t.alternate === null && qe === 0 && (qe = 3), t.flags &= -257, t.flags |= 65536, t.lanes = a, n === Gu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), wf(e, n, a)), !1;
          case 22:
            return t.flags |= 65536, n === Gu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : t.add(n)), wf(e, n, a)), !1;
        }
        throw Error(r(435, t.tag));
      }
      return wf(e, n, a), oc(), !1;
    }
    if (de)
      return l = zl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== Ai && (e = Error(r(422), { cause: n }), Ca(Ul(e, t)))) : (n !== Ai && (l = Error(r(423), {
        cause: n
      }), Ca(
        Ul(l, t)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Ul(n, t), a = nf(
        e.stateNode,
        n,
        a
      ), Ui(e, a), qe !== 4 && (qe = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Ul(u, t), Za === null ? Za = [u] : Za.push(u), qe !== 4 && (qe = 2), l === null) return !0;
    n = Ul(n, t), t = l;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = a & -a, t.lanes |= e, e = nf(t.stateNode, n, e), Ui(t, e), !1;
        case 1:
          if (l = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nt === null || !Nt.has(u))))
            return t.flags |= 65536, a &= -a, t.lanes |= a, a = zs(a), Cs(
              a,
              e,
              t,
              n
            ), Ui(t, a), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var af = Error(r(461)), We = !1;
  function al(e, l, t, n) {
    l.child = e === null ? wr(l, null, t, n) : fn(
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
      var i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    } else i = n;
    return nn(l), n = Li(
      e,
      l,
      t,
      i,
      u,
      a
    ), o = qi(), e !== null && !We ? (Yi(e, l, a), ot(e, l, a)) : (de && o && pi(l), l.flags |= 1, al(e, l, n, a), l.child);
  }
  function Ms(e, l, t, n, a) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !vi(u) && u.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = u, _s(
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
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Aa, t(i, n) && e.ref === l.ref)
        return ot(e, l, a);
    }
    return l.flags |= 1, e = nt(u, n), e.ref = l.ref, e.return = l, l.child = e;
  }
  function _s(e, l, t, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Aa(u, n) && e.ref === l.ref)
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
  function ws(e, l, t, n) {
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
        return Ds(
          e,
          l,
          u,
          t,
          n
        );
      }
      if ((t & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && xu(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Rr(l, u) : Ni(), Ur(l);
      else
        return n = l.lanes = 536870912, Ds(
          e,
          l,
          u !== null ? u.baseLanes | t : t,
          t,
          n
        );
    } else
      u !== null ? (xu(l, u.cachePool), Rr(l, u), Ht(), l.memoizedState = null) : (e !== null && xu(l, null), Ni(), Ht());
    return al(e, l, a, t), l.child;
  }
  function ja(e, l) {
    return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Ds(e, l, t, n, a) {
    var u = wi();
    return u = u === null ? null : { parent: Je._currentValue, pool: u }, l.memoizedState = {
      baseLanes: t,
      cachePool: u
    }, e !== null && xu(l, null), Ni(), Ur(l), e !== null && Gn(e, l, n, !0), l.childLanes = a, null;
  }
  function Iu(e, l) {
    return l = ec(
      { mode: l.mode, children: l.children },
      e.mode
    ), l.ref = e.ref, e.child = l, l.return = e, l;
  }
  function Hs(e, l, t) {
    return fn(l, e.child, null, t), e = Iu(l, l.pendingProps), e.flags |= 2, Cl(l), l.memoizedState = null, e;
  }
  function ny(e, l, t) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, e === null) {
      if (de) {
        if (n.mode === "hidden")
          return e = Iu(l, n), l.lanes = 536870912, ja(null, e);
        if (ji(l), (e = De) ? (e = Qd(
          e,
          xl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: Et !== null ? { id: kl, overflow: Wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = yr(e), t.return = l, l.child = t, tl = l, De = null)) : e = null, e === null) throw Ct(l);
        return l.lanes = 536870912, null;
      }
      return Iu(l, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ji(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = Hs(
            e,
            l,
            t
          );
        else if (l.memoizedState !== null)
          l.child = e.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (We || Gn(e, l, t, !1), a = (t & e.childLanes) !== 0, We || a) {
        if (n = Oe, n !== null && (i = To(n, t), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Pt(e, i), pl(n, e, i), af;
        oc(), l = Hs(
          e,
          l,
          t
        );
      } else
        e = u.treeContext, De = Gl(i.nextSibling), tl = l, de = !0, zt = null, xl = !1, e !== null && vr(l, e), l = Iu(l, n), l.flags |= 4096;
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
    return nn(l), t = Li(
      e,
      l,
      t,
      n,
      void 0,
      a
    ), n = qi(), e !== null && !We ? (Yi(e, l, a), ot(e, l, a)) : (de && n && pi(l), l.flags |= 1, al(e, l, t, a), l.child);
  }
  function Rs(e, l, t, n, a, u) {
    return nn(l), l.updateQueue = null, t = Nr(
      l,
      n,
      t,
      a
    ), Br(e), n = qi(), e !== null && !We ? (Yi(e, l, u), ot(e, l, u)) : (de && n && pi(l), l.flags |= 1, al(e, l, t, u), l.child);
  }
  function Us(e, l, t, n, a) {
    if (nn(l), l.stateNode === null) {
      var u = Bn, i = t.contextType;
      typeof i == "object" && i !== null && (u = nl(i)), u = new t(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = tf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, Hi(l), i = t.contextType, u.context = typeof i == "object" && i !== null ? nl(i) : Bn, u.state = l.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lf(
        l,
        t,
        i,
        n
      ), u.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && tf.enqueueReplaceState(u, u.state, null), Ra(l, n, u, a), Ha(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = l.stateNode;
      var o = l.memoizedProps, h = rn(t, o);
      u.props = h;
      var b = u.context, M = t.contextType;
      i = Bn, typeof M == "object" && M !== null && (i = nl(M));
      var H = t.getDerivedStateFromProps;
      M = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, M || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== i) && bs(
        l,
        u,
        n,
        i
      ), Mt = !1;
      var p = l.memoizedState;
      u.state = p, Ra(l, n, u, a), Ha(), b = l.memoizedState, o || p !== b || Mt ? (typeof H == "function" && (lf(
        l,
        t,
        H,
        n
      ), b = l.memoizedState), (h = Mt || Ss(
        l,
        t,
        h,
        n,
        p,
        b,
        i
      )) ? (M || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = b), u.props = n, u.state = b, u.context = i, n = h) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, Ri(e, l), i = l.memoizedProps, M = rn(t, i), u.props = M, H = l.pendingProps, p = u.context, b = t.contextType, h = Bn, typeof b == "object" && b !== null && (h = nl(b)), o = t.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== H || p !== h) && bs(
        l,
        u,
        n,
        h
      ), Mt = !1, p = l.memoizedState, u.state = p, Ra(l, n, u, a), Ha();
      var E = l.memoizedState;
      i !== H || p !== E || Mt || e !== null && e.dependencies !== null && Bu(e.dependencies) ? (typeof o == "function" && (lf(
        l,
        t,
        o,
        n
      ), E = l.memoizedState), (M = Mt || Ss(
        l,
        t,
        M,
        n,
        p,
        E,
        h
      ) || e !== null && e.dependencies !== null && Bu(e.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, E, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        E,
        h
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = E), u.props = n, u.state = E, u.context = h, n = M) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (l.flags |= 1024), n = !1);
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
  function Bs(e, l, t, n) {
    return ln(), l.flags |= 256, al(e, l, t, n), l.child;
  }
  var cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ff(e) {
    return { baseLanes: e, cachePool: Er() };
  }
  function of(e, l, t) {
    return e = e !== null ? e.childLanes & ~t : 0, l && (e |= Ml), e;
  }
  function Ns(e, l, t) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
      if (de) {
        if (a ? Dt(l) : Ht(), (e = De) ? (e = Qd(
          e,
          xl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = {
          dehydrated: e,
          treeContext: Et !== null ? { id: kl, overflow: Wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = yr(e), t.return = l, l.child = t, tl = l, De = null)) : e = null, e === null) throw Ct(l);
        return Vf(e) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (Ht(), a = l.mode, o = ec(
        { mode: "hidden", children: o },
        a
      ), n = en(
        n,
        a,
        t,
        null
      ), o.return = l, n.return = l, o.sibling = n, l.child = o, n = l.child, n.memoizedState = ff(t), n.childLanes = of(
        e,
        i,
        t
      ), l.memoizedState = cf, ja(null, n)) : (Dt(l), rf(l, o));
    }
    var h = e.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        l.flags & 256 ? (Dt(l), l.flags &= -257, l = sf(
          e,
          l,
          t
        )) : l.memoizedState !== null ? (Ht(), l.child = e.child, l.flags |= 128, l = null) : (Ht(), o = n.fallback, a = l.mode, n = ec(
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
          i,
          t
        ), l.memoizedState = cf, l = ja(null, n));
      else if (Dt(l), Vf(o)) {
        if (i = o.nextSibling && o.nextSibling.dataset, i) var b = i.dgst;
        i = b, n = Error(r(419)), n.stack = "", n.digest = i, Ca({ value: n, source: null, stack: null }), l = sf(
          e,
          l,
          t
        );
      } else if (We || Gn(e, l, t, !1), i = (t & e.childLanes) !== 0, We || i) {
        if (i = Oe, i !== null && (n = To(i, t), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, Pt(e, n), pl(i, e, n), af;
        Zf(o) || oc(), l = sf(
          e,
          l,
          t
        );
      } else
        Zf(o) ? (l.flags |= 192, l.child = e.child, l = null) : (e = h.treeContext, De = Gl(
          o.nextSibling
        ), tl = l, de = !0, zt = null, xl = !1, e !== null && vr(l, e), l = rf(
          l,
          n.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (Ht(), o = n.fallback, a = l.mode, h = e.child, b = h.sibling, n = nt(h, {
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
    ), o.flags |= 2), o.return = l, n.return = l, n.sibling = o, l.child = n, ja(null, n), n = l.child, o = e.child.memoizedState, o === null ? o = ff(t) : (a = o.cachePool, a !== null ? (h = Je._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Er(), o = {
      baseLanes: o.baseLanes | t,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = of(
      e,
      i,
      t
    ), l.memoizedState = cf, ja(e.child, n)) : (Dt(l), t = e.child, e = t.sibling, t = nt(t, {
      mode: "visible",
      children: n.children
    }), t.return = l, t.sibling = null, e !== null && (i = l.deletions, i === null ? (l.deletions = [e], l.flags |= 16) : i.push(e)), l.child = t, l.memoizedState = null, t);
  }
  function rf(e, l) {
    return l = ec(
      { mode: "visible", children: l },
      e.mode
    ), l.return = e, e.child = l;
  }
  function ec(e, l) {
    return e = El(22, e, null, l), e.lanes = 0, e;
  }
  function sf(e, l, t) {
    return fn(l, e.child, null, t), e = rf(
      l,
      l.pendingProps.children
    ), e.flags |= 2, l.memoizedState = null, e;
  }
  function xs(e, l, t) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l), Ci(e.return, l, t);
  }
  function df(e, l, t, n, a, u) {
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
  function js(e, l, t) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var i = Xe.current, o = (i & 2) !== 0;
    if (o ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, L(Xe, i), al(e, l, n, t), n = de ? za : 0, !o && e !== null && (e.flags & 128) !== 0)
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
    if (e !== null && (l.dependencies = e.dependencies), Bt |= l.lanes, (t & l.childLanes) === 0)
      if (e !== null) {
        if (Gn(
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
    return (e.lanes & l) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bu(e)));
  }
  function ay(e, l, t) {
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
          return l.flags |= 128, ji(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Dt(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? Ns(e, l, t) : (Dt(l), e = ot(
            e,
            l,
            t
          ), e !== null ? e.sibling : null);
        Dt(l);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (t & l.childLanes) !== 0, n || (Gn(
          e,
          l,
          t,
          !1
        ), n = (t & l.childLanes) !== 0), a) {
          if (n)
            return js(
              e,
              l,
              t
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), L(Xe, Xe.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, ws(
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
  function Gs(e, l, t) {
    if (e !== null)
      if (e.memoizedProps !== l.pendingProps)
        We = !0;
      else {
        if (!hf(e, t) && (l.flags & 128) === 0)
          return We = !1, ay(
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
            vi(e) ? (n = rn(e, n), l.tag = 1, l = Us(
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
              if (a === we) {
                l.tag = 11, l = Os(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              } else if (a === ie) {
                l.tag = 14, l = Ms(
                  null,
                  l,
                  e,
                  n,
                  t
                );
                break e;
              }
            }
            throw l = wl(e) || e, Error(r(306, l, ""));
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
          a = u.element, Ri(e, l), Ra(l, n, null, t);
          var i = l.memoizedState;
          if (n = i.cache, Ot(l, Je, n), n !== u.cache && Oi(
            l,
            [Je],
            t,
            !0
          ), Ha(), n = i.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Bs(
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
              ), Ca(a), l = Bs(
                e,
                l,
                n,
                t
              );
              break e;
            } else
              for (e = l.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, De = Gl(e.firstChild), tl = l, de = !0, zt = null, xl = !0, t = wr(
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
        )) ? l.memoizedState = t : de || (t = l.type, e = l.pendingProps, n = gc(
          F.current
        ).createElement(t), n[ll] = l, n[yl] = e, ul(n, t, e), Pe(n), l.stateNode = n) : l.memoizedState = Wd(
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
        ), tl = l, xl = !0, a = De, Lt(l.type) ? (Kf = a, De = Gl(n.firstChild)) : De = a), al(
          e,
          l,
          l.pendingProps.children,
          t
        ), Pu(e, l), e === null && (l.flags |= 4194304), l.child;
      case 5:
        return e === null && de && ((a = n = De) && (n = By(
          n,
          l.type,
          l.pendingProps,
          xl
        ), n !== null ? (l.stateNode = n, tl = l, De = Gl(n.firstChild), xl = !1, a = !0) : a = !1), a || Ct(l)), Jt(l), a = l.type, u = l.pendingProps, i = e !== null ? e.memoizedProps : null, n = u.children, Yf(a, u) ? n = null : i !== null && Yf(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = Li(
          e,
          l,
          Wh,
          null,
          null,
          t
        ), Ia._currentValue = a), Pu(e, l), al(e, l, n, t), l.child;
      case 6:
        return e === null && de && ((e = t = De) && (t = Ny(
          t,
          l.pendingProps,
          xl
        ), t !== null ? (l.stateNode = t, tl = l, De = null, e = !0) : e = !1), e || Ct(l)), null;
      case 13:
        return Ns(e, l, t);
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
        return Ms(
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
        return js(e, l, t);
      case 31:
        return ny(e, l, t);
      case 22:
        return ws(
          e,
          l,
          t,
          l.pendingProps
        );
      case 24:
        return nn(l), n = nl(Je), e === null ? (a = wi(), a === null && (a = Oe, u = Mi(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= t), a = u), l.memoizedState = { parent: n, cache: a }, Hi(l), Ot(l, Je, a)) : ((e.lanes & t) !== 0 && (Ri(e, l), Ra(l, null, null, t), Ha()), a = e.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Ot(l, Je, n)) : (n = u.cache, Ot(l, Je, n), n !== a.cache && Oi(
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
  function yf(e, l, t, n, a) {
    if ((l = (e.mode & 32) !== 0) && (l = !1), l) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sd()) e.flags |= 8192;
        else
          throw cn = Gu, Di;
    } else e.flags &= -16777217;
  }
  function Ls(e, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !e0(l))
      if (sd()) e.flags |= 8192;
      else
        throw cn = Gu, Di;
  }
  function lc(e, l) {
    l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? So() : 536870912, e.lanes |= l, $n |= l);
  }
  function Ga(e, l) {
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
  function uy(e, l, t) {
    var n = l.pendingProps;
    switch (Ti(l), l.tag) {
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
        return t = l.stateNode, n = null, e !== null && (n = e.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), ct(Je), Be(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (jn(l) ? rt(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ei())), He(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return e === null ? (rt(l), u !== null ? (He(l), Ls(l, u)) : (He(l), yf(
          l,
          a,
          null,
          n,
          t
        ))) : u ? u !== e.memoizedState ? (rt(l), He(l), Ls(l, u)) : (He(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== n && rt(l), He(l), yf(
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
            return He(l), null;
          }
          e = q.current, jn(l) ? Sr(l) : (e = Kd(a, n, t), l.stateNode = e, rt(l));
        }
        return He(l), null;
      case 5:
        if (gn(l), a = l.type, e !== null && l.stateNode != null)
          e.memoizedProps !== n && rt(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return He(l), null;
          }
          if (u = q.current, jn(l))
            Sr(l);
          else {
            var i = gc(
              F.current
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
            u[ll] = l, u[yl] = n;
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
            n && rt(l);
          }
        }
        return He(l), yf(
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
          if (e = F.current, jn(l)) {
            if (e = l.stateNode, t = l.memoizedProps, n = null, a = tl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[ll] = l, e = !!(e.nodeValue === t || n !== null && n.suppressHydrationWarning === !0 || Nd(e.nodeValue, t)), e || Ct(l, !0);
          } else
            e = gc(e).createTextNode(
              n
            ), e[ll] = l, l.stateNode = e;
        }
        return He(l), null;
      case 31:
        if (t = l.memoizedState, e === null || e.memoizedState !== null) {
          if (n = jn(l), t !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[ll] = l;
            } else
              ln(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            He(l), e = !1;
          } else
            t = Ei(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = !0;
          if (!e)
            return l.flags & 256 ? (Cl(l), l) : (Cl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return He(l), null;
      case 13:
        if (n = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = jn(l), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[ll] = l;
            } else
              ln(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            He(l), a = !1;
          } else
            a = Ei(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (Cl(l), l) : (Cl(l), null);
        }
        return Cl(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = n !== null, e = e !== null && e.memoizedState !== null, t && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), lc(l, l.updateQueue), He(l), null);
      case 4:
        return Be(), e === null && xf(l.stateNode.containerInfo), He(l), null;
      case 10:
        return ct(l.type), He(l), null;
      case 19:
        if (U(Xe), n = l.memoizedState, n === null) return He(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Ga(n, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = l.child; e !== null; ) {
                if (u = Xu(e), u !== null) {
                  for (l.flags |= 128, Ga(n, !1), e = u.updateQueue, l.updateQueue = e, lc(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; )
                    hr(t, e), t = t.sibling;
                  return L(
                    Xe,
                    Xe.current & 1 | 2
                  ), de && at(l, n.treeForkCount), l.child;
                }
                e = e.sibling;
              }
            n.tail !== null && Y() > cc && (l.flags |= 128, a = !0, Ga(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Xu(u), e !== null) {
              if (l.flags |= 128, a = !0, e = e.updateQueue, l.updateQueue = e, lc(l, e), Ga(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !de)
                return He(l), null;
            } else
              2 * Y() - n.renderingStartTime > cc && t !== 536870912 && (l.flags |= 128, a = !0, Ga(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (e = n.last, e !== null ? e.sibling = u : l.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Y(), e.sibling = null, t = Xe.current, L(
          Xe,
          a ? t & 1 | 2 : t & 1
        ), de && at(l, n.treeForkCount), e) : (He(l), null);
      case 22:
      case 23:
        return Cl(l), xi(), n = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (He(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : He(l), t = l.updateQueue, t !== null && lc(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== t && (l.flags |= 2048), e !== null && U(an), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), ct(Je), He(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function cy(e, l) {
    switch (Ti(l), l.tag) {
      case 1:
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 3:
        return ct(Je), Be(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return gn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (Cl(l), l.alternate === null)
            throw Error(r(340));
          ln();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 13:
        if (Cl(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          ln();
        }
        return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 19:
        return U(Xe), null;
      case 4:
        return Be(), null;
      case 10:
        return ct(l.type), null;
      case 22:
      case 23:
        return Cl(l), xi(), e !== null && U(an), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
      case 24:
        return ct(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qs(e, l) {
    switch (Ti(l), l.tag) {
      case 3:
        ct(Je), Be();
        break;
      case 26:
      case 27:
      case 5:
        gn(l);
        break;
      case 4:
        Be();
        break;
      case 31:
        l.memoizedState !== null && Cl(l);
        break;
      case 13:
        Cl(l);
        break;
      case 19:
        U(Xe);
        break;
      case 10:
        ct(l.type);
        break;
      case 22:
      case 23:
        Cl(l), xi(), e !== null && U(an);
        break;
      case 24:
        ct(Je);
    }
  }
  function La(e, l) {
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
            var i = n.inst, o = i.destroy;
            if (o !== void 0) {
              i.destroy = void 0, a = l;
              var h = t, b = o;
              try {
                b();
              } catch (M) {
                Te(
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
      Te(l, l.return, M);
    }
  }
  function Ys(e) {
    var l = e.updateQueue;
    if (l !== null) {
      var t = e.stateNode;
      try {
        Hr(l, t);
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
  function qa(e, l) {
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
  function mf(e, l, t) {
    try {
      var n = e.stateNode;
      _y(n, e.type, t, l), n[yl] = l;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Lt(e.type) || e.tag === 4;
  }
  function gf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Lt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vf(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = lt));
    else if (n !== 4 && (n === 27 && Lt(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null))
      for (vf(e, l, t), e = e.sibling; e !== null; )
        vf(e, l, t), e = e.sibling;
  }
  function tc(e, l, t) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
    else if (n !== 4 && (n === 27 && Lt(e.type) && (t = e.stateNode), e = e.child, e !== null))
      for (tc(e, l, t), e = e.sibling; e !== null; )
        tc(e, l, t), e = e.sibling;
  }
  function Vs(e) {
    var l = e.stateNode, t = e.memoizedProps;
    try {
      for (var n = e.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      ul(l, n, t), l[ll] = e, l[yl] = t;
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var st = !1, $e = !1, Sf = !1, Ks = typeof WeakSet == "function" ? WeakSet : Set, el = null;
  function iy(e, l) {
    if (e = e.containerInfo, Lf = Ec, e = ar(e), ri(e)) {
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
            var i = 0, o = -1, h = -1, b = 0, M = 0, H = e, p = null;
            l: for (; ; ) {
              for (var E; H !== t || a !== 0 && H.nodeType !== 3 || (o = i + a), H !== u || n !== 0 && H.nodeType !== 3 || (h = i + n), H.nodeType === 3 && (i += H.nodeValue.length), (E = H.firstChild) !== null; )
                p = H, H = E;
              for (; ; ) {
                if (H === e) break l;
                if (p === t && ++b === a && (o = i), p === u && ++M === n && (h = i), (E = H.nextSibling) !== null) break;
                H = p, p = H.parentNode;
              }
              H = E;
            }
            t = o === -1 || h === -1 ? null : { start: o, end: h };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (qf = { focusedElem: e, selectionRange: t }, Ec = !1, el = l; el !== null; )
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
        ht(e, t), n & 4 && La(5, t);
        break;
      case 1:
        if (ht(e, t), n & 4)
          if (e = t.stateNode, l === null)
            try {
              e.componentDidMount();
            } catch (i) {
              Te(t, t.return, i);
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
            } catch (i) {
              Te(
                t,
                t.return,
                i
              );
            }
          }
        n & 64 && Ys(t), n & 512 && qa(t, t.return);
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
            Hr(e, l);
          } catch (i) {
            Te(t, t.return, i);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Vs(t);
      case 26:
      case 5:
        ht(e, t), l === null && n & 4 && Qs(t), n & 512 && qa(t, t.return);
        break;
      case 12:
        ht(e, t);
        break;
      case 31:
        ht(e, t), n & 4 && $s(e, t);
        break;
      case 13:
        ht(e, t), n & 4 && Fs(e, t), n & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = gy.bind(
          null,
          t
        ), xy(e, t))));
        break;
      case 22:
        if (n = t.memoizedState !== null || st, !n) {
          l = l !== null && l.memoizedState !== null || $e, a = st;
          var u = $e;
          st = n, ($e = l) && !u ? yt(
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
    l !== null && (e.alternate = null, ks(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && Jc(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, gl = !1;
  function dt(e, l, t) {
    for (t = t.child; t !== null; )
      Ws(e, l, t), t = t.sibling;
  }
  function Ws(e, l, t) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(ql, t);
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
        Lt(t.type) && (Ue = t.stateNode, gl = !1), dt(
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
  function fy(e) {
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
  function nc(e, l) {
    var t = fy(e);
    l.forEach(function(n) {
      if (!t.has(n)) {
        t.add(n);
        var a = vy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function vl(e, l) {
    var t = l.deletions;
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n], u = e, i = l, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Lt(o.type)) {
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
        Ws(u, i, a), Ue = null, gl = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
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
        vl(l, e), Sl(e), n & 4 && (Rt(3, e, e.return), La(3, e), Rt(5, e, e.return));
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
                      var i = Id(
                        "link",
                        "href",
                        a
                      ).get(n + (t.href || ""));
                      if (i) {
                        for (var o = 0; o < i.length; o++)
                          if (u = i[o], u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            i.splice(o, 1);
                            break l;
                          }
                      }
                      u = a.createElement(n), ul(u, n, t), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Id(
                        "meta",
                        "content",
                        a
                      ).get(n + (t.content || ""))) {
                        for (o = 0; o < i.length; o++)
                          if (u = i[o], u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            i.splice(o, 1);
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
            )) : n === null && e.stateNode !== null && mf(
              e,
              e.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), t !== null && n & 4 && mf(
          e,
          e.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (vl(l, e), Sl(e), n & 512 && ($e || t === null || $l(t, t.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Mn(a, "");
          } catch (Q) {
            Te(e, e.return, Q);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, mf(
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
        if (bc = null, a = Xl, Xl = vc(l.containerInfo), vl(l, e), Xl = a, Sl(e), n & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            aa(l.containerInfo);
          } catch (Q) {
            Te(e, e.return, Q);
          }
        Sf && (Sf = !1, Ps(e));
        break;
      case 4:
        n = Xl, Xl = vc(
          e.stateNode.containerInfo
        ), vl(l, e), Sl(e), Xl = n;
        break;
      case 12:
        vl(l, e), Sl(e);
        break;
      case 31:
        vl(l, e), Sl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
        break;
      case 13:
        vl(l, e), Sl(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (uc = Y()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = t !== null && t.memoizedState !== null, b = st, M = $e;
        if (st = b || a, $e = M || h, vl(l, e), $e = M, st = b, Sl(e), n & 8192)
          e: for (l = e.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (t === null || h || st || $e || sn(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                h = t = l;
                try {
                  if (u = h.stateNode, a)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    o = h.stateNode;
                    var H = h.memoizedProps.style, p = H != null && H.hasOwnProperty("display") ? H.display : null;
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
                  var E = h.stateNode;
                  a ? Xd(E, !0) : Xd(h.stateNode, !1);
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
        n & 4 && (n = e.updateQueue, n !== null && (t = n.retryQueue, t !== null && (n.retryQueue = null, nc(e, t))));
        break;
      case 19:
        vl(l, e), Sl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, nc(e, n)));
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
            tc(e, u, a);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Mn(i, ""), t.flags &= -33);
            var o = gf(e);
            tc(e, o, i);
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
      } catch (M) {
        Te(e, e.return, M);
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
  function yt(e, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var n = l.alternate, a = e, u = l, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yt(
            a,
            u,
            t
          ), La(4, u);
          break;
        case 1:
          if (yt(
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
                  Dr(h[a], o);
            } catch (b) {
              Te(n, n.return, b);
            }
          }
          t && i & 64 && Ys(u), qa(u, u.return);
          break;
        case 27:
          Vs(u);
        case 26:
        case 5:
          yt(
            a,
            u,
            t
          ), t && n === null && i & 4 && Qs(u), qa(u, u.return);
          break;
        case 12:
          yt(
            a,
            u,
            t
          );
          break;
        case 31:
          yt(
            a,
            u,
            t
          ), t && i & 4 && $s(a, u);
          break;
        case 13:
          yt(
            a,
            u,
            t
          ), t && i & 4 && Fs(a, u);
          break;
        case 22:
          u.memoizedState === null && yt(
            a,
            u,
            t
          ), qa(u, u.return);
          break;
        case 30:
          break;
        default:
          yt(
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
        ), a & 2048 && La(9, l);
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
            var u = l.memoizedProps, i = u.id, o = u.onPostCommit;
            typeof o == "function" && o(
              i,
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
        u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Ql(
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
        )), a & 2048 && bf(i, l);
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
      var u = e, i = l, o = t, h = n, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Jn(
            u,
            i,
            o,
            h,
            a
          ), La(8, i);
          break;
        case 23:
          break;
        case 22:
          var M = i.stateNode;
          i.memoizedState !== null ? M._visibility & 2 ? Jn(
            u,
            i,
            o,
            h,
            a
          ) : Ya(
            u,
            i
          ) : (M._visibility |= 2, Jn(
            u,
            i,
            o,
            h,
            a
          )), a && b & 2048 && bf(
            i.alternate,
            i
          );
          break;
        case 24:
          Jn(
            u,
            i,
            o,
            h,
            a
          ), a && b & 2048 && pf(i.alternate, i);
          break;
        default:
          Jn(
            u,
            i,
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
        ), e.flags & Xa && e.memoizedState !== null && ky(
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
        Xl = vc(e.stateNode.containerInfo), kn(
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
        e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, ac(e)) : Qa(e);
        break;
      default:
        Qa(e);
    }
  }
  function ac(e) {
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
          Rt(8, l, l.return), ac(l);
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
  var oy = {
    getCacheForType: function(e) {
      var l = nl(Je), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    },
    cacheSignal: function() {
      return nl(Je).controller.signal;
    }
  }, ry = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Oe = null, fe = null, re = 0, pe = 0, Ol = null, Ut = !1, Wn = !1, Tf = !1, mt = 0, qe = 0, Bt = 0, dn = 0, Af = 0, Ml = 0, $n = 0, Za = null, bl = null, Ef = !1, uc = 0, ud = 0, cc = 1 / 0, ic = null, Nt = null, Fe = 0, xt = null, Fn = null, gt = 0, zf = 0, Cf = null, cd = null, Va = 0, Of = null;
  function _l() {
    return (Se & 2) !== 0 && re !== 0 ? re & -re : _.T !== null ? Rf() : Ao();
  }
  function id() {
    if (Ml === 0)
      if ((re & 536870912) === 0 || de) {
        var e = mu;
        mu <<= 1, (mu & 3932160) === 0 && (mu = 262144), Ml = e;
      } else Ml = 536870912;
    return e = zl.current, e !== null && (e.flags |= 32), Ml;
  }
  function pl(e, l, t) {
    (e === Oe && (pe === 2 || pe === 9) || e.cancelPendingCommit !== null) && (In(e, 0), jt(
      e,
      re,
      Ml,
      !1
    )), da(e, t), ((Se & 2) === 0 || e !== Oe) && (e === Oe && ((Se & 2) === 0 && (dn |= t), qe === 4 && jt(
      e,
      re,
      Ml,
      !1
    )), Fl(e));
  }
  function fd(e, l, t) {
    if ((Se & 6) !== 0) throw Error(r(327));
    var n = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || sa(e, l), a = n ? hy(e, l) : _f(e, l, !0), u = n;
    do {
      if (a === 0) {
        Wn && !n && jt(e, l, 0, !1);
        break;
      } else {
        if (t = e.current.alternate, u && !sy(t)) {
          a = _f(e, l, !1), u = !1;
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
              var o = e;
              a = Za;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (In(o, i).flags |= 256), i = _f(
                o,
                i,
                !1
              ), i !== 2) {
                if (Tf && !h) {
                  o.errorRecoveryDisabledLanes |= u, dn |= u, a = 4;
                  break e;
                }
                u = bl, bl = a, u !== null && (bl === null ? bl = u : bl.push.apply(
                  bl,
                  u
                ));
              }
              a = i;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          In(e, 0), jt(e, l, 0, !0);
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
              jt(
                n,
                l,
                Ml,
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
          if ((l & 62914560) === l && (a = uc + 300 - Y(), 10 < a)) {
            if (jt(
              n,
              l,
              Ml,
              !Ut
            ), vu(n, 0, !0) !== 0) break e;
            gt = l, n.timeoutHandle = Ld(
              od.bind(
                null,
                n,
                t,
                bl,
                ic,
                Ef,
                l,
                Ml,
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
            ic,
            Ef,
            l,
            Ml,
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
  function od(e, l, t, n, a, u, i, o, h, b, M, H, p, E) {
    if (e.timeoutHandle = -1, H = l.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
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
        H
      );
      var Q = (u & 62914560) === u ? uc - Y() : (u & 4194048) === u ? ud - Y() : 0;
      if (Q = Wy(
        H,
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
            i,
            o,
            h,
            M,
            H,
            null,
            p,
            E
          )
        ), jt(e, u, i, !b);
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
      i,
      o,
      h
    );
  }
  function sy(e) {
    for (var l = e; ; ) {
      var t = l.tag;
      if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var n = 0; n < t.length; n++) {
          var a = t[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Al(u(), a)) return !1;
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
  function jt(e, l, t, n) {
    l &= ~Af, l &= ~dn, e.suspendedLanes |= l, e.pingedLanes &= ~l, n && (e.warmLanes |= l), n = e.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - Ge(a), i = 1 << u;
      n[u] = -1, a &= ~i;
    }
    t !== 0 && bo(e, t, l);
  }
  function fc() {
    return (Se & 6) === 0 ? (Ka(0), !1) : !0;
  }
  function Mf() {
    if (fe !== null) {
      if (pe === 0)
        var e = fe.return;
      else
        e = fe, ut = tn = null, Xi(e), Xn = null, _a = 0, e = fe;
      for (; e !== null; )
        qs(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function In(e, l) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, Hy(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), gt = 0, Mf(), Oe = e, fe = t = nt(e.current, null), re = l, pe = 0, Ol = null, Ut = !1, Wn = sa(e, l), Tf = !1, $n = Ml = Af = dn = Bt = qe = 0, bl = Za = null, Ef = !1, (l & 8) !== 0 && (l |= l & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= l; 0 < n; ) {
        var a = 31 - Ge(n), u = 1 << a;
        l |= e[a], n &= ~u;
      }
    return mt = l, wu(), t;
  }
  function rd(e, l) {
    ae = null, _.H = xa, l === Yn || l === ju ? (l = Or(), pe = 3) : l === Di ? (l = Or(), pe = 4) : pe = l === af ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Ol = l, fe === null && (qe = 1, Fu(
      e,
      Ul(l, e.current)
    ));
  }
  function sd() {
    var e = zl.current;
    return e === null ? !0 : (re & 4194048) === re ? jl === null : (re & 62914560) === re || (re & 536870912) !== 0 ? e === jl : !1;
  }
  function dd() {
    var e = _.H;
    return _.H = xa, e === null ? xa : e;
  }
  function hd() {
    var e = _.A;
    return _.A = oy, e;
  }
  function oc() {
    qe = 4, Ut || (re & 4194048) !== re && zl.current !== null || (Wn = !0), (Bt & 134217727) === 0 && (dn & 134217727) === 0 || Oe === null || jt(
      Oe,
      re,
      Ml,
      !1
    );
  }
  function _f(e, l, t) {
    var n = Se;
    Se |= 2;
    var a = dd(), u = hd();
    (Oe !== e || re !== l) && (ic = null, In(e, l)), l = !1;
    var i = qe;
    e: do
      try {
        if (pe !== 0 && fe !== null) {
          var o = fe, h = Ol;
          switch (pe) {
            case 8:
              Mf(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zl.current === null && (l = !0);
              var b = pe;
              if (pe = 0, Ol = null, Pn(e, o, h, b), t && Wn) {
                i = 0;
                break e;
              }
              break;
            default:
              b = pe, pe = 0, Ol = null, Pn(e, o, h, b);
          }
        }
        dy(), i = qe;
        break;
      } catch (M) {
        rd(e, M);
      }
    while (!0);
    return l && e.shellSuspendCounter++, ut = tn = null, Se = n, _.H = a, _.A = u, fe === null && (Oe = null, re = 0, wu()), i;
  }
  function dy() {
    for (; fe !== null; ) yd(fe);
  }
  function hy(e, l) {
    var t = Se;
    Se |= 2;
    var n = dd(), a = hd();
    Oe !== e || re !== l ? (ic = null, cc = Y() + 500, In(e, l)) : Wn = sa(
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
                pe = 0, Ol = null, md(l);
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
              zr(u) ? (pe = 0, Ol = null, md(l)) : (pe = 0, Ol = null, Pn(e, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (fe.tag) {
                case 26:
                  i = fe.memoizedState;
                case 5:
                case 27:
                  var o = fe;
                  if (i ? e0(i) : o.stateNode.complete) {
                    pe = 0, Ol = null;
                    var h = o.sibling;
                    if (h !== null) fe = h;
                    else {
                      var b = o.return;
                      b !== null ? (fe = b, rc(b)) : fe = null;
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
              Mf(), qe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        yy();
        break;
      } catch (M) {
        rd(e, M);
      }
    while (!0);
    return ut = tn = null, _.H = n, _.A = a, Se = t, fe !== null ? 0 : (Oe = null, re = 0, wu(), qe);
  }
  function yy() {
    for (; fe !== null && !N(); )
      yd(fe);
  }
  function yd(e) {
    var l = Gs(e.alternate, e, mt);
    e.memoizedProps = e.pendingProps, l === null ? rc(e) : fe = l;
  }
  function md(e) {
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
        Xi(l);
      default:
        qs(t, l), l = fe = hr(l, mt), l = Gs(t, l, mt);
    }
    e.memoizedProps = e.pendingProps, l === null ? rc(e) : fe = l;
  }
  function Pn(e, l, t, n) {
    ut = tn = null, Xi(l), Xn = null, _a = 0;
    var a = l.return;
    try {
      if (ty(
        e,
        a,
        l,
        t,
        re
      )) {
        qe = 1, Fu(
          e,
          Ul(t, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw fe = a, u;
      qe = 1, Fu(
        e,
        Ul(t, e.current)
      ), fe = null;
      return;
    }
    l.flags & 32768 ? (de || n === 1 ? e = !0 : Wn || (re & 536870912) !== 0 ? e = !1 : (Ut = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = zl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), gd(l, e)) : rc(l);
  }
  function rc(e) {
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
      var t = uy(
        l.alternate,
        l,
        mt
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
    qe === 0 && (qe = 5);
  }
  function gd(e, l) {
    do {
      var t = cy(e.alternate, e);
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
    qe = 6, fe = null;
  }
  function vd(e, l, t, n, a, u, i, o, h) {
    e.cancelPendingCommit = null;
    do
      sc();
    while (Fe !== 0);
    if ((Se & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === e.current) throw Error(r(177));
      if (u = l.lanes | l.childLanes, u |= mi, J0(
        e,
        t,
        u,
        i,
        o,
        h
      ), e === Oe && (fe = Oe = null, re = 0), Fn = l, xt = e, gt = t, zf = u, Cf = a, cd = n, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sy(le, function() {
        return Ad(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
        n = _.T, _.T = null, a = j.p, j.p = 2, i = Se, Se |= 4;
        try {
          iy(e, l, t);
        } finally {
          Se = i, j.p = a, _.T = n;
        }
      }
      Fe = 1, Sd(), bd(), pd();
    }
  }
  function Sd() {
    if (Fe === 1) {
      Fe = 0;
      var e = xt, l = Fn, t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        t = _.T, _.T = null;
        var n = j.p;
        j.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Is(l, e);
          var u = qf, i = ar(e.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (i !== o && o && o.ownerDocument && nr(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && ri(o)) {
              var b = h.start, M = h.end;
              if (M === void 0 && (M = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  M,
                  o.value.length
                );
              else {
                var H = o.ownerDocument || document, p = H && H.defaultView || window;
                if (p.getSelection) {
                  var E = p.getSelection(), Q = o.textContent.length, ee = Math.min(h.start, Q), Ce = h.end === void 0 ? ee : Math.min(h.end, Q);
                  !E.extend && ee > Ce && (i = Ce, Ce = ee, ee = i);
                  var g = tr(
                    o,
                    ee
                  ), y = tr(
                    o,
                    Ce
                  );
                  if (g && y && (E.rangeCount !== 1 || E.anchorNode !== g.node || E.anchorOffset !== g.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var S = H.createRange();
                    S.setStart(g.node, g.offset), E.removeAllRanges(), ee > Ce ? (E.addRange(S), E.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), E.addRange(S));
                  }
                }
              }
            }
            for (H = [], E = o; E = E.parentNode; )
              E.nodeType === 1 && H.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < H.length; o++) {
              var D = H[o];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Ec = !!Lf, qf = Lf = null;
        } finally {
          Se = a, j.p = n, _.T = t;
        }
      }
      e.current = l, Fe = 2;
    }
  }
  function bd() {
    if (Fe === 2) {
      Fe = 0;
      var e = xt, l = Fn, t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        t = _.T, _.T = null;
        var n = j.p;
        j.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Js(e, l.alternate, l);
        } finally {
          Se = a, j.p = n, _.T = t;
        }
      }
      Fe = 3;
    }
  }
  function pd() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, w();
      var e = xt, l = Fn, t = gt, n = cd;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, Fn = xt = null, Td(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Nt = null), Vc(t), l = l.stateNode, ve && typeof ve.onCommitFiberRoot == "function")
        try {
          ve.onCommitFiberRoot(
            ql,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        l = _.T, a = j.p, j.p = 2, _.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < n.length; i++) {
            var o = n[i];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          _.T = l, j.p = a;
        }
      }
      (gt & 3) !== 0 && sc(), Fl(e), a = e.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? e === Of ? Va++ : (Va = 0, Of = e) : Va = 0, Ka(0);
    }
  }
  function Td(e, l) {
    (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, Oa(l)));
  }
  function sc() {
    return Sd(), bd(), pd(), Ad();
  }
  function Ad() {
    if (Fe !== 5) return !1;
    var e = xt, l = zf;
    zf = 0;
    var t = Vc(gt), n = _.T, a = j.p;
    try {
      j.p = 32 > t ? 32 : t, _.T = null, t = Cf, Cf = null;
      var u = xt, i = gt;
      if (Fe = 0, Fn = xt = null, gt = 0, (Se & 6) !== 0) throw Error(r(331));
      var o = Se;
      if (Se |= 4, nd(u.current), ed(
        u,
        u.current,
        i,
        t
      ), Se = o, Ka(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function")
        try {
          ve.onPostCommitFiberRoot(ql, u);
        } catch {
        }
      return !0;
    } finally {
      j.p = a, _.T = n, Td(e, l);
    }
  }
  function Ed(e, l, t) {
    l = Ul(t, l), l = nf(e.stateNode, l, 2), e = wt(e, l, 2), e !== null && (da(e, 2), Fl(e));
  }
  function Te(e, l, t) {
    if (e.tag === 3)
      Ed(e, e, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Ed(
            l,
            e,
            t
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nt === null || !Nt.has(n))) {
            e = Ul(t, e), t = zs(2), n = wt(l, t, 2), n !== null && (Cs(
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
  function wf(e, l, t) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new ry();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(t) || (Tf = !0, a.add(t), e = my.bind(null, e, l, t), l.then(e, e));
  }
  function my(e, l, t) {
    var n = e.pingCache;
    n !== null && n.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, Oe === e && (re & t) === t && (qe === 4 || qe === 3 && (re & 62914560) === re && 300 > Y() - uc ? (Se & 2) === 0 && In(e, 0) : Af |= t, $n === re && ($n = 0)), Fl(e);
  }
  function zd(e, l) {
    l === 0 && (l = So()), e = Pt(e, l), e !== null && (da(e, l), Fl(e));
  }
  function gy(e) {
    var l = e.memoizedState, t = 0;
    l !== null && (t = l.retryLane), zd(e, t);
  }
  function vy(e, l) {
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
  function Sy(e, l) {
    return ra(e, l);
  }
  var dc = null, ea = null, Df = !1, hc = !1, Hf = !1, Gt = 0;
  function Fl(e) {
    e !== ea && e.next === null && (ea === null ? dc = ea = e : ea = ea.next = e), hc = !0, Df || (Df = !0, py());
  }
  function Ka(e, l) {
    if (!Hf && hc) {
      Hf = !0;
      do
        for (var t = !1, n = dc; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - Ge(42 | e) + 1) - 1, u &= a & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
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
      Hf = !1;
    }
  }
  function by() {
    Cd();
  }
  function Cd() {
    hc = Df = !1;
    var e = 0;
    Gt !== 0 && Dy() && (e = Gt);
    for (var l = Y(), t = null, n = dc; n !== null; ) {
      var a = n.next, u = Od(n, l);
      u === 0 ? (n.next = null, t === null ? dc = a : t.next = a, a === null && (ea = t)) : (t = n, (e !== 0 || (u & 3) !== 0) && (hc = !0)), n = a;
    }
    Fe !== 0 && Fe !== 5 || Ka(e), Gt !== 0 && (Gt = 0);
  }
  function Od(e, l) {
    for (var t = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - Ge(u), o = 1 << i, h = a[i];
      h === -1 ? ((o & t) === 0 || (o & n) !== 0) && (a[i] = K0(o, l)) : h <= l && (e.expiredLanes |= o), u &= ~o;
    }
    if (l = Oe, t = re, t = vu(
      e,
      e === l ? t : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, t === 0 || e === l && (pe === 2 || pe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && O(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || sa(e, t)) {
      if (l = t & -t, l === e.callbackPriority) return l;
      switch (n !== null && O(n), Vc(t)) {
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
      return n = Md.bind(null, e), t = ra(t, n), e.callbackPriority = l, e.callbackNode = t, l;
    }
    return n !== null && n !== null && O(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Md(e, l) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (sc() && e.callbackNode !== t)
      return null;
    var n = re;
    return n = vu(
      e,
      e === Oe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (fd(e, n, l), Od(e, Y()), e.callbackNode != null && e.callbackNode === t ? Md.bind(null, e) : null);
  }
  function _d(e, l) {
    if (sc()) return null;
    fd(e, l, !0);
  }
  function py() {
    Ry(function() {
      (Se & 6) !== 0 ? ra(
        x,
        by
      ) : Cd();
    });
  }
  function Rf() {
    if (Gt === 0) {
      var e = Ln;
      e === 0 && (e = yu, yu <<= 1, (yu & 261888) === 0 && (yu = 256)), Gt = e;
    }
    return Gt;
  }
  function wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tu("" + e);
  }
  function Dd(e, l) {
    var t = l.ownerDocument.createElement("input");
    return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function Ty(e, l, t, n, a) {
    if (l === "submit" && t && t.stateNode === a) {
      var u = wd(
        (a[yl] || null).action
      ), i = n.submitter;
      i && (l = (l = i[yl] || null) ? wd(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
      var o = new Cu(
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
                if (Gt !== 0) {
                  var h = i ? Dd(a, i) : new FormData(a);
                  Fi(
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
                typeof u == "function" && (o.preventDefault(), h = i ? Dd(a, i) : new FormData(a), Fi(
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
  for (var Uf = 0; Uf < yi.length; Uf++) {
    var Bf = yi[Uf], Ay = Bf.toLowerCase(), Ey = Bf[0].toUpperCase() + Bf.slice(1);
    Yl(
      Ay,
      "on" + Ey
    );
  }
  Yl(ir, "onAnimationEnd"), Yl(fr, "onAnimationIteration"), Yl(or, "onAnimationStart"), Yl("dblclick", "onDoubleClick"), Yl("focusin", "onFocus"), Yl("focusout", "onBlur"), Yl(Lh, "onTransitionRun"), Yl(qh, "onTransitionStart"), Yl(Yh, "onTransitionCancel"), Yl(rr, "onTransitionEnd"), Cn("onMouseEnter", ["mouseout", "mouseover"]), Cn("onMouseLeave", ["mouseout", "mouseover"]), Cn("onPointerEnter", ["pointerout", "pointerover"]), Cn("onPointerLeave", ["pointerout", "pointerover"]), Wt(
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
  ), zy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja)
  );
  function Hd(e, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var n = e[t], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (l)
          for (var i = n.length - 1; 0 <= i; i--) {
            var o = n[i], h = o.instance, b = o.currentTarget;
            if (o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (M) {
              _u(M);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (i = 0; i < n.length; i++) {
            if (o = n[i], h = o.instance, b = o.currentTarget, o = o.listener, h !== u && a.isPropagationStopped())
              break e;
            u = o, a.currentTarget = b;
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
  function oe(e, l) {
    var t = l[Kc];
    t === void 0 && (t = l[Kc] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    t.has(n) || (Rd(l, e, 2, !1), t.add(n));
  }
  function Nf(e, l, t) {
    var n = 0;
    l && (n |= 4), Rd(
      t,
      e,
      n,
      l
    );
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(e) {
    if (!e[yc]) {
      e[yc] = !0, Co.forEach(function(t) {
        t !== "selectionchange" && (zy.has(t) || Nf(t, !1, e), Nf(t, !0, e));
      });
      var l = e.nodeType === 9 ? e : e.ownerDocument;
      l === null || l[yc] || (l[yc] = !0, Nf("selectionchange", !1, l));
    }
  }
  function Rd(e, l, t, n) {
    switch (i0(l)) {
      case 2:
        var a = Iy;
        break;
      case 8:
        a = Py;
        break;
      default:
        a = Ff;
    }
    t = a.bind(
      null,
      l,
      t,
      e
    ), a = void 0, !li || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(l, t, {
      capture: !0,
      passive: a
    }) : e.addEventListener(l, t, !0) : a !== void 0 ? e.addEventListener(l, t, {
      passive: a
    }) : e.addEventListener(l, t, !1);
  }
  function jf(e, l, t, n, a) {
    var u = n;
    if ((l & 1) === 0 && (l & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (i = An(o), i === null) return;
            if (h = i.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    jo(function() {
      var b = u, M = Pc(t), H = [];
      e: {
        var p = sr.get(e);
        if (p !== void 0) {
          var E = Cu, Q = e;
          switch (e) {
            case "keypress":
              if (Eu(t) === 0) break e;
            case "keydown":
            case "keyup":
              E = vh;
              break;
            case "focusin":
              Q = "focus", E = ui;
              break;
            case "focusout":
              Q = "blur", E = ui;
              break;
            case "beforeblur":
            case "afterblur":
              E = ui;
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
              E = qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = ph;
              break;
            case ir:
            case fr:
            case or:
              E = fh;
              break;
            case rr:
              E = Ah;
              break;
            case "scroll":
            case "scrollend":
              E = nh;
              break;
            case "wheel":
              E = zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Xo;
              break;
            case "toggle":
            case "beforetoggle":
              E = Oh;
          }
          var ee = (l & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), g = ee ? p !== null ? p + "Capture" : null : p;
          ee = [];
          for (var y = b, S; y !== null; ) {
            var D = y;
            if (S = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || S === null || g === null || (D = ma(y, g), D != null && ee.push(
              ka(y, D, S)
            )), Ce) break;
            y = y.return;
          }
          0 < ee.length && (p = new E(
            p,
            Q,
            null,
            t,
            M
          ), H.push({ event: p, listeners: ee }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", p && t !== Ic && (Q = t.relatedTarget || t.fromElement) && (An(Q) || Q[Tn]))
            break e;
          if ((E || p) && (p = M.window === M ? M : (p = M.ownerDocument) ? p.defaultView || p.parentWindow : window, E ? (Q = t.relatedTarget || t.toElement, E = b, Q = Q ? An(Q) : null, Q !== null && (Ce = A(Q), ee = Q.tag, Q !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (Q = null)) : (E = null, Q = b), E !== Q)) {
            if (ee = qo, D = "onMouseLeave", g = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Xo, D = "onPointerLeave", g = "onPointerEnter", y = "pointer"), Ce = E == null ? p : ya(E), S = Q == null ? p : ya(Q), p = new ee(
              D,
              y + "leave",
              E,
              t,
              M
            ), p.target = Ce, p.relatedTarget = S, D = null, An(M) === b && (ee = new ee(
              g,
              y + "enter",
              Q,
              t,
              M
            ), ee.target = S, ee.relatedTarget = Ce, D = ee), Ce = D, E && Q)
              l: {
                for (ee = Cy, g = E, y = Q, S = 0, D = g; D; D = ee(D))
                  S++;
                D = 0;
                for (var W = y; W; W = ee(W))
                  D++;
                for (; 0 < S - D; )
                  g = ee(g), S--;
                for (; 0 < D - S; )
                  y = ee(y), D--;
                for (; S--; ) {
                  if (g === y || y !== null && g === y.alternate) {
                    ee = g;
                    break l;
                  }
                  g = ee(g), y = ee(y);
                }
                ee = null;
              }
            else ee = null;
            E !== null && Ud(
              H,
              p,
              E,
              ee,
              !1
            ), Q !== null && Ce !== null && Ud(
              H,
              Ce,
              Q,
              ee,
              !0
            );
          }
        }
        e: {
          if (p = b ? ya(b) : window, E = p.nodeName && p.nodeName.toLowerCase(), E === "select" || E === "input" && p.type === "file")
            var he = $o;
          else if (ko(p))
            if (Fo)
              he = xh;
            else {
              he = Bh;
              var K = Uh;
            }
          else
            E = p.nodeName, !E || E.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? b && Fc(b.elementType) && (he = $o) : he = Nh;
          if (he && (he = he(e, b))) {
            Wo(
              H,
              he,
              t,
              M
            );
            break e;
          }
          K && K(e, p, b), e === "focusout" && b && p.type === "number" && b.memoizedProps.value != null && $c(p, "number", p.value);
        }
        switch (K = b ? ya(b) : window, e) {
          case "focusin":
            (ko(K) || K.contentEditable === "true") && (Hn = K, si = b, Ea = null);
            break;
          case "focusout":
            Ea = si = Hn = null;
            break;
          case "mousedown":
            di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            di = !1, ur(H, t, M);
            break;
          case "selectionchange":
            if (Gh) break;
          case "keydown":
          case "keyup":
            ur(H, t, M);
        }
        var ue;
        if (ii)
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
          Dn ? Ko(e, t) && (se = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (se = "onCompositionStart");
        se && (Qo && t.locale !== "ko" && (Dn || se !== "onCompositionStart" ? se === "onCompositionEnd" && Dn && (ue = Go()) : (At = M, ti = "value" in At ? At.value : At.textContent, Dn = !0)), K = mc(b, se), 0 < K.length && (se = new Yo(
          se,
          e,
          null,
          t,
          M
        ), H.push({ event: se, listeners: K }), ue ? se.data = ue : (ue = Jo(t), ue !== null && (se.data = ue)))), (ue = _h ? wh(e, t) : Dh(e, t)) && (se = mc(b, "onBeforeInput"), 0 < se.length && (K = new Yo(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          M
        ), H.push({
          event: K,
          listeners: se
        }), K.data = ue)), Ty(
          H,
          e,
          b,
          t,
          M
        );
      }
      Hd(H, l);
    });
  }
  function ka(e, l, t) {
    return {
      instance: e,
      listener: l,
      currentTarget: t
    };
  }
  function mc(e, l) {
    for (var t = l + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ma(e, t), a != null && n.unshift(
        ka(e, a, u)
      ), a = ma(e, l), a != null && n.push(
        ka(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Cy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ud(e, l, t, n, a) {
    for (var u = l._reactName, i = []; t !== null && t !== n; ) {
      var o = t, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, a ? (b = ma(t, u), b != null && i.unshift(
        ka(t, b, h)
      )) : a || (b = ma(t, u), b != null && i.push(
        ka(t, b, h)
      ))), t = t.return;
    }
    i.length !== 0 && e.push({ event: l, listeners: i });
  }
  var Oy = /\r\n?/g, My = /\u0000|\uFFFD/g;
  function Bd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Oy, `
`).replace(My, "");
  }
  function Nd(e, l) {
    return l = Bd(l), Bd(e) === l;
  }
  function ze(e, l, t, n, a, u) {
    switch (t) {
      case "children":
        typeof n == "string" ? l === "body" || l === "textarea" && n === "" || Mn(e, n) : (typeof n == "number" || typeof n == "bigint") && l !== "body" && Mn(e, "" + n);
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
        No(e, n, u);
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
  function Gf(e, l, t, n, a, u) {
    switch (t) {
      case "style":
        No(e, n, u);
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
        typeof n == "string" ? Mn(e, n) : (typeof n == "number" || typeof n == "bigint") && Mn(e, "" + n);
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
            if (t[0] === "o" && t[1] === "n" && (a = t.endsWith("Capture"), l = t.slice(2, a ? t.length - 7 : void 0), u = e[yl] || null, u = u != null ? u[t] : null, typeof u == "function" && e.removeEventListener(l, u, a), typeof n == "function")) {
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
                  throw Error(r(137, l));
                default:
                  ze(e, l, u, i, t, null);
              }
          }
        a && ze(e, l, "srcSet", t.srcSet, t, null), n && ze(e, l, "src", t.src, t, null);
        return;
      case "input":
        oe("invalid", e);
        var o = u = i = a = null, h = null, b = null;
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
                  b = M;
                  break;
                case "value":
                  u = M;
                  break;
                case "defaultValue":
                  o = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(r(137, l));
                  break;
                default:
                  ze(e, l, n, M, t, null);
              }
          }
        Ho(
          e,
          u,
          o,
          h,
          b,
          i,
          a,
          !1
        );
        return;
      case "select":
        oe("invalid", e), n = i = u = null;
        for (a in t)
          if (t.hasOwnProperty(a) && (o = t[a], o != null))
            switch (a) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "multiple":
                n = o;
              default:
                ze(e, l, a, o, t, null);
            }
        l = u, t = i, e.multiple = !!n, l != null ? On(e, !!n, l, !1) : t != null && On(e, !!n, t, !0);
        return;
      case "textarea":
        oe("invalid", e), u = a = n = null;
        for (i in t)
          if (t.hasOwnProperty(i) && (o = t[i], o != null))
            switch (i) {
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
                ze(e, l, i, o, t, null);
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
        if (Fc(l)) {
          for (M in t)
            t.hasOwnProperty(M) && (n = t[M], n !== void 0 && Gf(
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
    for (o in t)
      t.hasOwnProperty(o) && (n = t[o], n != null && ze(e, l, o, n, t, null));
  }
  function _y(e, l, t, n) {
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
        var a = null, u = null, i = null, o = null, h = null, b = null, M = null;
        for (E in t) {
          var H = t[E];
          if (t.hasOwnProperty(E) && H != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = H;
              default:
                n.hasOwnProperty(E) || ze(e, l, E, null, n, H);
            }
        }
        for (var p in n) {
          var E = n[p];
          if (H = t[p], n.hasOwnProperty(p) && (E != null || H != null))
            switch (p) {
              case "type":
                u = E;
                break;
              case "name":
                a = E;
                break;
              case "checked":
                b = E;
                break;
              case "defaultChecked":
                M = E;
                break;
              case "value":
                i = E;
                break;
              case "defaultValue":
                o = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(r(137, l));
                break;
              default:
                E !== H && ze(
                  e,
                  l,
                  p,
                  E,
                  n,
                  H
                );
            }
        }
        Wc(
          e,
          i,
          o,
          h,
          b,
          M,
          u,
          a
        );
        return;
      case "select":
        E = i = o = p = null;
        for (u in t)
          if (h = t[u], t.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = h;
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
                i = u;
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
        l = o, t = i, n = E, p != null ? On(e, !!t, p, !1) : !!n != !!t && (l != null ? On(e, !!t, l, !0) : On(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        E = p = null;
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
        for (i in n)
          if (a = n[i], u = t[i], n.hasOwnProperty(i) && (a != null || u != null))
            switch (i) {
              case "value":
                p = a;
                break;
              case "defaultValue":
                E = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && ze(e, l, i, a, n, u);
            }
        Ro(e, p, E);
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
          p = n[h], E = t[h], n.hasOwnProperty(h) && p !== E && (p != null || E != null) && (h === "selected" ? e.selected = p && typeof p != "function" && typeof p != "symbol" : ze(
            e,
            l,
            h,
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
        for (var ee in t)
          p = t[ee], t.hasOwnProperty(ee) && p != null && !n.hasOwnProperty(ee) && ze(e, l, ee, null, n, p);
        for (b in n)
          if (p = n[b], E = t[b], n.hasOwnProperty(b) && p !== E && (p != null || E != null))
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
                  E
                );
            }
        return;
      default:
        if (Fc(l)) {
          for (var Ce in t)
            p = t[Ce], t.hasOwnProperty(Ce) && p !== void 0 && !n.hasOwnProperty(Ce) && Gf(
              e,
              l,
              Ce,
              void 0,
              n,
              p
            );
          for (M in n)
            p = n[M], E = t[M], !n.hasOwnProperty(M) || p === E || p === void 0 && E === void 0 || Gf(
              e,
              l,
              M,
              p,
              n,
              E
            );
          return;
        }
    }
    for (var g in t)
      p = t[g], t.hasOwnProperty(g) && p != null && !n.hasOwnProperty(g) && ze(e, l, g, null, n, p);
    for (H in n)
      p = n[H], E = t[H], !n.hasOwnProperty(H) || p === E || p == null && E == null || ze(e, l, H, p, n, E);
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
  function wy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), n = 0; n < t.length; n++) {
        var a = t[n], u = a.transferSize, i = a.initiatorType, o = a.duration;
        if (u && o && xd(i)) {
          for (i = 0, o = a.responseEnd, n += 1; n < t.length; n++) {
            var h = t[n], b = h.startTime;
            if (b > o) break;
            var M = h.transferSize, H = h.initiatorType;
            M && xd(H) && (h = h.responseEnd, i += M * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--n, l += 8 * (u + i) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return l / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Lf = null, qf = null;
  function gc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function jd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gd(e, l) {
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
  function Dy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xf ? !1 : (Xf = e, !0) : (Xf = null, !1);
  }
  var Ld = typeof setTimeout == "function" ? setTimeout : void 0, Hy = typeof clearTimeout == "function" ? clearTimeout : void 0, qd = typeof Promise == "function" ? Promise : void 0, Ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof qd < "u" ? function(e) {
    return qd.resolve(null).then(e).catch(Uy);
  } : Ld;
  function Uy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Lt(e) {
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
            var i = u.nextSibling, o = u.nodeName;
            u[ha] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = i;
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
          Qf(t), Jc(t);
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
  function By(e, l, t, n) {
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
      if (e = Gl(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ny(e, l, t) {
    if (l === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Gl(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qd(e, l) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Gl(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Vf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function xy(e, l) {
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
  function Gl(e) {
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
            return Gl(e.nextSibling);
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
    switch (l = gc(t), e) {
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
    Jc(e);
  }
  var Ll = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function vc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vt = j.d;
  j.d = {
    f: jy,
    r: Gy,
    D: Ly,
    C: qy,
    L: Yy,
    m: Xy,
    X: Zy,
    S: Qy,
    M: Vy
  };
  function jy() {
    var e = vt.f(), l = fc();
    return e || l;
  }
  function Gy(e) {
    var l = En(e);
    l !== null && l.tag === 5 && l.type === "form" ? rs(l) : vt.r(e);
  }
  var la = typeof document > "u" ? null : document;
  function kd(e, l, t) {
    var n = la;
    if (n && typeof l == "string" && l) {
      var a = Hl(l);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof t == "string" && (a += '[crossorigin="' + t + '"]'), Jd.has(a) || (Jd.add(a), e = { rel: e, crossOrigin: t, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function Ly(e) {
    vt.D(e), kd("dns-prefetch", e, null);
  }
  function qy(e, l) {
    vt.C(e, l), kd("preconnect", e, l);
  }
  function Yy(e, l, t) {
    vt.L(e, l, t);
    var n = la;
    if (n && e && l) {
      var a = 'link[rel="preload"][as="' + Hl(l) + '"]';
      l === "image" && t && t.imageSrcSet ? (a += '[imagesrcset="' + Hl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (a += '[imagesizes="' + Hl(
        t.imageSizes
      ) + '"]')) : a += '[href="' + Hl(e) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = ta(e);
          break;
        case "script":
          u = na(e);
      }
      Ll.has(u) || (e = B(
        {
          rel: "preload",
          href: l === "image" && t && t.imageSrcSet ? void 0 : e,
          as: l
        },
        t
      ), Ll.set(u, e), n.querySelector(a) !== null || l === "style" && n.querySelector($a(u)) || l === "script" && n.querySelector(Fa(u)) || (l = n.createElement("link"), ul(l, "link", e), Pe(l), n.head.appendChild(l)));
    }
  }
  function Xy(e, l) {
    vt.m(e, l);
    var t = la;
    if (t && e) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Hl(n) + '"][href="' + Hl(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = na(e);
      }
      if (!Ll.has(u) && (e = B({ rel: "modulepreload", href: e }, l), Ll.set(u, e), t.querySelector(a) === null)) {
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
  function Qy(e, l, t) {
    vt.S(e, l, t);
    var n = la;
    if (n && e) {
      var a = zn(n).hoistableStyles, u = ta(e);
      l = l || "default";
      var i = a.get(u);
      if (!i) {
        var o = { loading: 0, preload: null };
        if (i = n.querySelector(
          $a(u)
        ))
          o.loading = 5;
        else {
          e = B(
            { rel: "stylesheet", href: e, "data-precedence": l },
            t
          ), (t = Ll.get(u)) && Jf(e, t);
          var h = i = n.createElement("link");
          Pe(h), ul(h, "link", e), h._p = new Promise(function(b, M) {
            h.onload = b, h.onerror = M;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Sc(i, l, n);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: o
        }, a.set(u, i);
      }
    }
  }
  function Zy(e, l) {
    vt.X(e, l);
    var t = la;
    if (t && e) {
      var n = zn(t).hoistableScripts, a = na(e), u = n.get(a);
      u || (u = t.querySelector(Fa(a)), u || (e = B({ src: e, async: !0 }, l), (l = Ll.get(a)) && kf(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Vy(e, l) {
    vt.M(e, l);
    var t = la;
    if (t && e) {
      var n = zn(t).hoistableScripts, a = na(e), u = n.get(a);
      u || (u = t.querySelector(Fa(a)), u || (e = B({ src: e, async: !0, type: "module" }, l), (l = Ll.get(a)) && kf(e, l), u = t.createElement("script"), Pe(u), ul(u, "link", e), t.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Wd(e, l, t, n) {
    var a = (a = F.current) ? vc(a) : null;
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
          ).hoistableStyles, i = u.get(e);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, i), (u = a.querySelector(
            $a(e)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Ll.has(e) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Ll.set(e, t), u || Ky(
            a,
            e,
            t,
            i.state
          ))), l && n === null)
            throw Error(r(528, ""));
          return i;
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
    return 'href="' + Hl(e) + '"';
  }
  function $a(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $d(e) {
    return B({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ky(e, l, t, n) {
    e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? n.loading = 1 : (l = e.createElement("link"), n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    }), ul(l, "link", t), Pe(l), e.head.appendChild(l));
  }
  function na(e) {
    return '[src="' + Hl(e) + '"]';
  }
  function Fa(e) {
    return "script[async]" + e;
  }
  function Fd(e, l, t) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Hl(t.href) + '"]'
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
          a = ta(t.href);
          var u = e.querySelector(
            $a(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Pe(u), u;
          n = $d(t), (a = Ll.get(a)) && Jf(n, a), u = (e.ownerDocument || e).createElement("link"), Pe(u);
          var i = u;
          return i._p = new Promise(function(o, h) {
            i.onload = o, i.onerror = h;
          }), ul(u, "link", n), l.state.loading |= 4, Sc(u, t.precedence, e), l.instance = u;
        case "script":
          return u = na(t.src), (a = e.querySelector(
            Fa(u)
          )) ? (l.instance = a, Pe(a), a) : (n = t, (a = Ll.get(u)) && (n = B({}, t), kf(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Pe(a), ul(a, "link", n), e.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, Sc(n, t.precedence, e));
    return l.instance;
  }
  function Sc(e, l, t) {
    for (var n = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, i = 0; i < n.length; i++) {
      var o = n[i];
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
  var bc = null;
  function Id(e, l, t) {
    if (bc === null) {
      var n = /* @__PURE__ */ new Map(), a = bc = /* @__PURE__ */ new Map();
      a.set(t, n);
    } else
      a = bc, n = a.get(t), n || (n = /* @__PURE__ */ new Map(), a.set(t, n));
    if (n.has(e)) return n;
    for (n.set(e, null), t = t.getElementsByTagName(e), a = 0; a < t.length; a++) {
      var u = t[a];
      if (!(u[ha] || u[ll] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(l) || "";
        i = e + i;
        var o = n.get(i);
        o ? o.push(u) : n.set(i, [u]);
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
  function Jy(e, l, t) {
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
  function ky(e, l, t, n) {
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = ta(n.href), u = l.querySelector(
          $a(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = pc.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = u, Pe(u);
          return;
        }
        u = l.ownerDocument || l, n = $d(n), (a = Ll.get(a)) && Jf(n, a), u = u.createElement("link"), Pe(u);
        var i = u;
        i._p = new Promise(function(o, h) {
          i.onload = o, i.onerror = h;
        }), ul(u, "link", n), t.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = pc.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  var Wf = 0;
  function Wy(e, l) {
    return e.stylesheets && e.count === 0 && Ac(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ac(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < e.imgBytes && Wf === 0 && (Wf = 62500 * wy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ac(e, e.stylesheets), e.unsuspend)) {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Tc = /* @__PURE__ */ new Map(), l.forEach($y, e), Tc = null, pc.call(e));
  }
  function $y(e, l) {
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
  var Ia = {
    $$typeof: Ae,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Fy(e, l, t, n, a, u, i, o, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qc(0), this.hiddenUpdates = Qc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function l0(e, l, t, n, a, u, i, o, h, b, M, H) {
    return e = new Fy(
      e,
      l,
      t,
      i,
      h,
      b,
      M,
      H,
      o
    ), l = 1, u === !0 && (l |= 24), u = El(3, null, null, l), e.current = u, u.stateNode = e, l = Mi(), l.refCount++, e.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: l
    }, Hi(u), e;
  }
  function t0(e) {
    return e ? (e = Bn, e) : Bn;
  }
  function n0(e, l, t, n, a, u) {
    a = t0(a), n.context === null ? n.context = a : n.pendingContext = a, n = _t(l), n.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (n.callback = u), t = wt(e, n, l), t !== null && (pl(t, e, l), Da(t, e, l));
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
  function c0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var l = _l();
      l = Zc(l);
      var t = Pt(e, l);
      t !== null && pl(t, e, l), $f(e, l);
    }
  }
  var Ec = !0;
  function Iy(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = j.p;
    try {
      j.p = 2, Ff(e, l, t, n);
    } finally {
      j.p = u, _.T = a;
    }
  }
  function Py(e, l, t, n) {
    var a = _.T;
    _.T = null;
    var u = j.p;
    try {
      j.p = 8, Ff(e, l, t, n);
    } finally {
      j.p = u, _.T = a;
    }
  }
  function Ff(e, l, t, n) {
    if (Ec) {
      var a = If(n);
      if (a === null)
        jf(
          e,
          l,
          n,
          zc,
          t
        ), f0(e, n);
      else if (lm(
        a,
        e,
        l,
        t,
        n
      ))
        n.stopPropagation();
      else if (f0(e, n), l & 4 && -1 < em.indexOf(e)) {
        for (; a !== null; ) {
          var u = En(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = kt(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var h = 1 << 31 - Ge(i);
                      o.entanglements[1] |= h, i &= ~h;
                    }
                    Fl(u), (Se & 6) === 0 && (cc = Y() + 500, Ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Pt(u, 2), o !== null && pl(o, u, 2), fc(), $f(u, 2);
            }
          if (u = If(n), u === null && jf(
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
        jf(
          e,
          l,
          n,
          null,
          t
        );
    }
  }
  function If(e) {
    return e = Pc(e), Pf(e);
  }
  var zc = null;
  function Pf(e) {
    if (zc = null, e = An(e), e !== null) {
      var l = A(e);
      if (l === null) e = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (e = R(l), e !== null) return e;
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
  function i0(e) {
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
          case x:
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
  var eo = !1, qt = null, Yt = null, Xt = null, Pa = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new Map(), Qt = [], em = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function f0(e, l) {
    switch (e) {
      case "focusin":
      case "focusout":
        qt = null;
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
    }, l !== null && (l = En(l), l !== null && u0(l)), e) : (e.eventSystemFlags |= n, l = e.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), e);
  }
  function lm(e, l, t, n, a) {
    switch (l) {
      case "focusin":
        return qt = lu(
          qt,
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
    var l = An(e.target);
    if (l !== null) {
      var t = A(l);
      if (t !== null) {
        if (l = t.tag, l === 13) {
          if (l = R(t), l !== null) {
            e.blockedOn = l, Eo(e.priority, function() {
              c0(t);
            });
            return;
          }
        } else if (l === 31) {
          if (l = G(t), l !== null) {
            e.blockedOn = l, Eo(e.priority, function() {
              c0(t);
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
      var t = If(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var n = new t.constructor(
          t.type,
          t
        );
        Ic = n, t.target.dispatchEvent(n), Ic = null;
      } else
        return l = En(t), l !== null && u0(l), e.blockedOn = t, !1;
      l.shift();
    }
    return !0;
  }
  function r0(e, l, t) {
    Cc(e) && t.delete(l);
  }
  function tm() {
    eo = !1, qt !== null && Cc(qt) && (qt = null), Yt !== null && Cc(Yt) && (Yt = null), Xt !== null && Cc(Xt) && (Xt = null), Pa.forEach(r0), eu.forEach(r0);
  }
  function Oc(e, l) {
    e.blockedOn === l && (e.blockedOn = null, eo || (eo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      tm
    )));
  }
  var Mc = null;
  function s0(e) {
    Mc !== e && (Mc = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Mc === e && (Mc = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], n = e[l + 1], a = e[l + 2];
          if (typeof n != "function") {
            if (Pf(n || t) === null)
              continue;
            break;
          }
          var u = En(t);
          u !== null && (e.splice(l, 3), l -= 3, Fi(
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
      return Oc(h, e);
    }
    qt !== null && Oc(qt, e), Yt !== null && Oc(Yt, e), Xt !== null && Oc(Xt, e), Pa.forEach(l), eu.forEach(l);
    for (var t = 0; t < Qt.length; t++) {
      var n = Qt[t];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Qt.length && (t = Qt[0], t.blockedOn === null); )
      o0(t), t.blockedOn === null && Qt.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null)
      for (n = 0; n < t.length; n += 3) {
        var a = t[n], u = t[n + 1], i = a[yl] || null;
        if (typeof u == "function")
          i || s0(t);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, i = u[yl] || null)
              o = i.formAction;
            else if (Pf(a) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? t[n + 1] = o : (t.splice(n, 3), n -= 3), s0(t);
        }
      }
  }
  function d0() {
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
  function lo(e) {
    this._internalRoot = e;
  }
  _c.prototype.render = lo.prototype.render = function(e) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var t = l.current, n = _l();
    n0(t, n, e, l, null, null);
  }, _c.prototype.unmount = lo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var l = e.containerInfo;
      n0(e.current, 2, null, e, null, null), fc(), l[Tn] = null;
    }
  };
  function _c(e) {
    this._internalRoot = e;
  }
  _c.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var l = Ao();
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
  j.findDOMNode = function(e) {
    var l = e._reactInternals;
    if (l === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = T(l), e = e !== null ? z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var nm = {
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
        ql = wc.inject(
          nm
        ), ve = wc;
      } catch {
      }
  }
  return nu.createRoot = function(e, l) {
    if (!f(e)) throw Error(r(299));
    var t = !1, n = "", a = ps, u = Ts, i = As;
    return l != null && (l.unstable_strictMode === !0 && (t = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = l0(
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
      d0
    ), e[Tn] = l.current, xf(e), new lo(l);
  }, nu.hydrateRoot = function(e, l, t) {
    if (!f(e)) throw Error(r(299));
    var n = !1, a = "", u = ps, i = Ts, o = As, h = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.formState !== void 0 && (h = t.formState)), l = l0(
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
      o,
      d0
    ), l.context = t0(null), t = l.current, n = _l(), n = Zc(n), a = _t(n), a.callback = null, wt(t, a, n), t = n, l.current.lanes = t, da(l, t), Fl(l), e[Tn] = l.current, xf(e), new _c(l);
  }, nu.version = "19.2.4", nu;
}
var E0;
function hm() {
  if (E0) return no.exports;
  E0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), no.exports = dm(), no.exports;
}
var ym = hm(), dl = ro();
const Ze = 960, bt = 1240, j0 = "clawd_ui_word_solitaire_best", Bc = 5, so = 132, G0 = 92, mm = 30, gm = 22, vm = 10, Sm = 8, z0 = 116, bm = 132, pm = 30, ca = [
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
], Tm = [
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
], C0 = ["Neon", "Hidden", "Silver", "Golden", "Velvet", "Shadow", "Signal", "Lantern", "Cipher", "Winding", "Midnight", "Crimson"], O0 = ["Crossroads", "Archive", "Promenade", "Relay", "Mix", "Circuit", "Carnival", "Station", "Harbor", "Mosaic", "Vault", "Parade"], M0 = [
  "A generated deal from the wider category vault.",
  "Fresh clue mixes from the expanding category pool.",
  "New associations every round, with a denser reserve behind them.",
  "A remixed board pulled from the larger rotating category set."
], _0 = /* @__PURE__ */ new Map();
function Am(c) {
  return Array.from(new Map(c.map((s) => [s.id, s])).values());
}
const Em = Am([...ca.flatMap((c) => c.categories), ...Tm]);
function zm(c, s) {
  const d = [4, 4, 4, 4, 4], r = s === 8 ? 5 : 4, f = vo([0, 1, 2, 3, 4], 49734321 + c * 97);
  for (let A = 0; A < r; A += 1) d[f[A % f.length]] += 1;
  return d;
}
function Cm(c, s) {
  const d = c * 7, r = d - s.reduce((f, A) => f + A, 0);
  return d + r + 8;
}
function Om(c) {
  const s = _0.get(c);
  if (s) return s;
  let d = 1831565813 + c * 977;
  const r = c % 3 === 0 ? 8 : 7, f = vo(Em, d).slice(0, r), A = zm(c, r), R = Cm(r, A);
  let G;
  [d, G] = su(d);
  const v = C0[Math.floor(G * C0.length)];
  [d, G] = su(d);
  const T = O0[Math.floor(G * O0.length)];
  [d, G] = su(d);
  const z = M0[Math.floor(G * M0.length)], B = {
    id: `generated-${c + 1}`,
    name: `Deal ${c + 1}: ${v} ${T}`,
    moveBudget: R,
    categories: f,
    columnHeights: A,
    tagline: z
  };
  return _0.set(c, B), B;
}
function Vl(c) {
  return c < ca.length ? ca[c] : Om(c);
}
function Mm(c) {
  const s = c * 1664525 + 1013904223 >>> 0;
  return s === 0 ? 1 : s;
}
function su(c) {
  const s = Mm(c);
  return [s, s / 4294967295];
}
function _m() {
  if (typeof window > "u") return 0;
  const c = window.localStorage.getItem(j0), s = c == null ? 0 : Number.parseInt(c, 10);
  return Number.isFinite(s) ? Math.max(0, s) : 0;
}
function wm(c) {
  typeof window < "u" && window.localStorage.setItem(j0, String(c));
}
function xc(c) {
  return c.map((s) => s.map((d) => ({ ...d })));
}
function jc(c) {
  return Object.fromEntries(Object.entries(c).map(([s, d]) => [s, d.map((r) => ({ ...r }))]));
}
function w0(c) {
  return c.map((s) => ({ ...s, card: { ...s.card } }));
}
function D0(c) {
  return c.map((s) => ({ ...s }));
}
function H0(c) {
  return c.map((s) => ({ ...s }));
}
function Gc(c) {
  return [...c];
}
function Lc(c) {
  return [...c];
}
function Il(c) {
  return c ? c.kind === "waste" ? "waste" : c.kind === "clue" ? "clue" : `column-${c.index}` : "none";
}
function xe(c) {
  return c[c.length - 1] ?? null;
}
function Dm(c) {
  return { ...c };
}
function qc(c) {
  return [...c];
}
function Kt(c, s) {
  return s ? c.categories.find((d) => d.id === s) ?? null : null;
}
function Nc(c, s) {
  return c.foundationOrder.findIndex((d) => d === s);
}
function L0(c, s) {
  return s.categories.filter((d) => c.foundations[d.id].length === d.words.length).length;
}
function q0(c, s) {
  const d = c.wordIcons?.[s], r = c.iconOnlyWords?.includes(s) ? "iconOnly" : d ? "iconWord" : "word";
  return { id: `${c.id}-${s}`, label: s, categoryId: c.id, color: c.color, role: "word", faceIcon: d, faceStyle: r };
}
function Hm(c) {
  const s = c.clueStyle === "iconOnly" ? "iconOnly" : c.clueStyle === "iconWord" ? "iconWord" : "word";
  return { id: `${c.id}-clue`, label: c.clueTitle, categoryId: c.id, color: c.color, role: "clue", faceIcon: c.clueIcon, faceStyle: s };
}
function ho(c, s) {
  return Math.max(0, Math.min(c.hiddenCounts[s] ?? 0, c.columns[s].length));
}
function Y0(c, s) {
  return c.columns[s].slice(ho(c, s));
}
function mn(c) {
  return c[0] ?? null;
}
function Vt(c, s) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const R = xe(c.waste);
    return R ? [R] : [];
  }
  const d = Y0(c, s.index);
  if (!d.length) return [];
  const r = d[d.length - 1];
  if (r.role === "clue") return [r];
  const f = r.categoryId;
  let A = d.length - 1;
  for (; A - 1 >= 0 && d[A - 1].role === "word" && d[A - 1].categoryId === f; ) A -= 1;
  return A - 1 >= 0 && d[A - 1].role === "clue" && d[A - 1].categoryId === f && (A -= 1), d.slice(A);
}
function X0(c, s) {
  const d = c.columns[s];
  if (!d.length) {
    c.hiddenCounts[s] = 0;
    return;
  }
  c.hiddenCounts[s] = Math.max(0, Math.min(c.hiddenCounts[s] ?? 0, d.length - 1));
}
function Rm(c, s) {
  X0(c, s), c.columns[s].length && (c.hiddenCounts[s] ?? 0) >= c.columns[s].length && (c.hiddenCounts[s] = c.columns[s].length - 1);
}
function Um(c) {
  return {
    columns: xc(c.columns),
    hiddenCounts: qc(c.hiddenCounts),
    reserve: [...c.reserve],
    waste: [...c.waste],
    foundations: jc(c.foundations),
    foundationOrder: Gc(c.foundationOrder),
    clueDeck: Lc(c.clueDeck),
    activeClueCategoryId: c.activeClueCategoryId,
    selectedSource: c.selectedSource ? { ...c.selectedSource } : null,
    movesLeft: c.movesLeft,
    score: c.score,
    streak: c.streak,
    message: c.message,
    mode: c.mode,
    boosters: Dm(c.boosters)
  };
}
function ua(c) {
  c.history = [Um(c), ...c.history].slice(0, 24);
}
function Bm(c) {
  const s = c.history[0];
  return !s || c.boosters.undo <= 0 ? !1 : (c.columns = xc(s.columns), c.hiddenCounts = qc(s.hiddenCounts), c.reserve = [...s.reserve], c.waste = [...s.waste], c.foundations = jc(s.foundations), c.foundationOrder = Gc(s.foundationOrder), c.clueDeck = Lc(s.clueDeck), c.activeClueCategoryId = s.activeClueCategoryId, c.selectedSource = s.selectedSource ? { ...s.selectedSource } : null, c.movesLeft = s.movesLeft, c.score = s.score, c.streak = s.streak, c.message = "Undo used.", c.mode = s.mode, c.boosters = { ...s.boosters, undo: Math.max(0, c.boosters.undo - 1) }, c.history = c.history.slice(1), !0);
}
function au(c, s, d = 0) {
  const r = Vl(c), f = [];
  for (const C of r.categories) {
    f.push(Hm(C));
    for (const te of C.words) f.push(q0(C, te));
  }
  let A = 5370206 + c * 131;
  const R = [...f];
  for (let C = R.length - 1; C > 0; C -= 1) {
    let te;
    [A, te] = su(A);
    const X = Math.floor(te * (C + 1));
    [R[C], R[X]] = [R[X], R[C]];
  }
  const G = [];
  let v = 0;
  for (const C of r.columnHeights)
    G.push(R.slice(v, v + C)), v += C;
  const T = G.map((C) => Math.max(0, C.length - 1)), z = R.slice(v).reverse(), B = Object.fromEntries(r.categories.map((C) => [C.id, []]));
  return {
    mode: "title",
    levelIndex: c,
    columns: G,
    hiddenCounts: T,
    reserve: z,
    waste: [],
    foundations: B,
    foundationOrder: Array.from({ length: Bc }, () => null),
    clueDeck: [],
    activeClueCategoryId: null,
    selectedSource: null,
    movesLeft: r.moveBudget,
    score: d,
    streak: 0,
    bestScore: _m(),
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
function yo(c) {
  const s = [];
  c.columns.forEach((A, R) => {
    const G = { kind: "column", index: R }, v = Vt(c, G), T = mn(v), z = xe(v);
    T && z && s.push({ source: G, card: T, topCard: z, run: v });
  });
  const d = Vt(c, { kind: "waste" }), r = mn(d), f = xe(d);
  return r && f && s.push({ source: { kind: "waste" }, card: r, topCard: f, run: d }), s;
}
function mo(c, s, d) {
  return d?.kind === "column" && s === void 0 ? !1 : s.length === 0 || xe(s)?.categoryId === c.categoryId;
}
function go(c, s = Vl(c.levelIndex)) {
  const d = yo(c);
  let r = !1, f = !1, A = !1, R = !1, G = !1, v = !1, T = !1, z = "", B = "";
  for (const { source: C, card: te, topCard: X } of d) {
    const $ = Kt(s, te.categoryId);
    if (!$) continue;
    const Ve = c.foundations[te.categoryId].length < $.words.length;
    te.role === "clue" && Ve && c.foundationOrder.includes(null) && (r = !0, B || (B = `${te.label} can claim an empty crown.`));
    const me = Nc(c, X.categoryId);
    X.role === "word" && me >= 0 && Ve && (f = !0, z || (z = `${X.label} matches the ${$.clueTitle} clue.`));
    for (let je = 0; je < c.columns.length; je += 1)
      if (!(C.kind === "column" && C.index === je) && mo(te, c.columns[je], C)) {
        A = !0, z || (z = `${te.label} can park on column ${je + 1}.`);
        break;
      }
    X.role === "word" && c.boosters.joker > 0 && me >= 0 && Ve && (G = !0, z || (z = `Use Joker on ${X.label} if you want to preserve the board.`));
  }
  return c.reserve.length > 0 && (R = !0, z || (z = "Draw from the reserve pile.")), c.boosters.shuffle > 0 && c.reserve.length + c.waste.length > 0 && (v = !0, z || (z = "Use Shuffle to recycle the reserve and waste piles.")), c.boosters.undo > 0 && c.history.length > 0 && (T = !0, z || (z = "Use Undo to back out of the dead end.")), r && B && (z = B), {
    cluePlacement: r,
    foundationSort: f,
    columnParking: A,
    reserveDraw: R,
    joker: G,
    shuffle: v,
    undo: T,
    any: r || f || A || R || G || v || T,
    hint: z || "No legal moves remain."
  };
}
function Dc(c) {
  const s = Vl(c.levelIndex);
  if (s.categories.every((f) => c.foundations[f.id].length === f.words.length)) {
    c.mode = "won", c.message = "All category stacks cleared. Clean round.", c.score > c.bestScore && (c.bestScore = c.score, wm(c.score));
    return;
  }
  if (c.movesLeft <= 0) {
    c.mode = "lost", c.message = "Out of moves. That deal is dead.";
    return;
  }
  go(c, s).any || (c.mode = "lost", c.message = "No legal moves remain. That deal is dead.");
}
function Hc(c, s, d) {
  if (s.kind === "clue") return [];
  if (s.kind === "waste") {
    const f = c.waste.pop();
    return f ? [f] : [];
  }
  const r = c.columns[s.index].splice(Math.max(0, c.columns[s.index].length - d), d);
  return Rm(c, s.index), r;
}
function fo(c, s, d, r) {
  for (let f = 0; f < 10; f += 1) {
    const A = f / 10 * Math.PI * 2;
    c.particles.push({ x: s, y: d, vx: Math.cos(A) * (1.2 + f * 0.12), vy: Math.sin(A) * (1.2 + f * 0.1) - 1.8, size: 8 + f % 3, life: 460, maxLife: 460, color: r });
  }
}
function St(c, s, d, r, f, A = 0.2) {
  c.feedbackTexts.push({ text: s, x: d, y: r, life: 720, maxLife: 720, color: f, scale: A });
}
function uu(c, s, d) {
  c.foundationPulses = c.foundationPulses.filter((r) => r.slotIndex !== s), c.foundationPulses.push({ slotIndex: s, color: d, life: 520, maxLife: 520 });
}
function cu(c, s, d, r, f) {
  c.motionCards.push({
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
function Nm(c) {
  return go(c).hint;
}
function vo(c, s) {
  const d = [...c];
  let r = s;
  for (let f = d.length - 1; f > 0; f -= 1) {
    let A;
    [r, A] = su(r);
    const R = Math.floor(A * (f + 1));
    [d[f], d[R]] = [d[R], d[f]];
  }
  return d;
}
function pt(c, s, d) {
  return c >= d.x && c <= d.x + d.w && s >= d.y && s <= d.y + d.h;
}
function Ye(c) {
  const r = Ze - 502 - 28, f = Math.max(72, Math.min(84, Math.floor((r - 8 * Math.max(0, Bc - 1)) / Bc))), A = c.columnHeights.length >= 6 ? 116 : 136, R = c.columnHeights.length >= 6 ? 18 : 20, G = c.columnHeights.length * A + Math.max(0, c.columnHeights.length - 1) * R, v = Math.round((Ze - G) / 2);
  return {
    reserve: { x: 92, y: 168, w: 102, h: 142 },
    waste: { x: 224, y: 168, w: 114, h: 150 },
    clue: { x: 360, y: 152, w: 124, h: 170 },
    foundations: Array.from({ length: Bc }, (T, z) => ({ x: 502 + z * (f + 8), y: 112, w: f, h: 214 })),
    columns: c.columnHeights.map((T, z) => ({ x: v + z * (A + R), y: 360, w: A, h: 638 }))
  };
}
function Rc(c, s, d) {
  const r = c.getBoundingClientRect();
  return !r.width || !r.height ? null : {
    x: (s - r.left) / r.width * Ze,
    y: (d - r.top) / r.height * bt
  };
}
function hn() {
  if (typeof window > "u") return { width: 1440, height: 960 };
  const c = window.visualViewport;
  return {
    width: Math.round(c?.width ?? window.innerWidth),
    height: Math.round(c?.height ?? window.innerHeight)
  };
}
function xm(c, s, d, r) {
  const f = Ye(c);
  if (xe(s.waste) && pt(d, r, f.waste)) return { kind: "waste" };
  if (s.activeClueCategoryId && pt(d, r, f.clue)) return { kind: "clue" };
  for (let R = s.columns.length - 1; R >= 0; R -= 1) {
    if (!s.columns[R].length) continue;
    const v = Gm(c, s, R);
    if (v && pt(d, r, v))
      return { kind: "column", index: R };
  }
  return null;
}
function R0(c, s, d, r, f, A) {
  const R = mn(r), G = xe(r), v = Ye(c);
  for (let T = 0; T < v.foundations.length; T += 1) {
    if (!pt(f, A, v.foundations[T])) continue;
    if (R?.role === "clue") {
      if (s.foundationOrder[T] == null) return { kind: "foundation", index: T };
      continue;
    }
    const z = s.foundationOrder[T];
    if (z && G?.role === "word" && G.categoryId === z) return { kind: "foundation", index: T };
  }
  for (let T = 0; T < v.columns.length; T += 1)
    if (pt(f, A, v.columns[T])) {
      if (d.kind === "column" && d.index === T) return null;
      if (R && mo(R, s.columns[T], d)) return { kind: "column", index: T };
    }
  return null;
}
function Xc(c, s, d) {
  const r = Ye(c).columns[d], f = s.columns[d], { hiddenCount: A, hiddenStep: R, visibleStep: G } = jm(c, s, d), v = [];
  let T = r.y + 24;
  return f.forEach((z, B) => {
    const C = B < A, te = B === f.length - 1;
    v.push({ x: r.x + 10, y: T, w: r.w - 20, h: C ? G0 : so, hidden: C, top: te }), T += C ? R : G;
  }), v;
}
function jm(c, s, d) {
  const r = Ye(c).columns[d], f = s.columns[d], A = ho(s, d), R = Math.max(0, f.length - A), G = r.h - 48, v = R > 0 ? so : G0;
  let T = A > 0 ? gm : 0, z = R > 1 ? mm : 0;
  const B = () => A * T + Math.max(0, R - 1) * z + v;
  if (B() > G && A > 0) {
    const C = Math.max(0, G - v - Math.max(0, R - 1) * z);
    T = Math.max(Sm, Math.floor(C / A));
  }
  if (B() > G && R > 1) {
    const C = Math.max(0, G - v - A * T);
    z = Math.max(vm, Math.floor(C / (R - 1)));
  }
  if (B() > G && A > 0) {
    const C = Math.max(0, G - v - Math.max(0, R - 1) * z);
    T = Math.max(4, Math.floor(C / A));
  }
  if (B() > G && R > 1) {
    const C = Math.max(0, G - v - A * T);
    z = Math.max(6, Math.floor(C / (R - 1)));
  }
  return { hiddenCount: A, visibleCount: R, hiddenStep: T, visibleStep: z };
}
function Gm(c, s, d) {
  const r = Xc(c, s, d).filter((R) => !R.hidden);
  if (!r.length) return null;
  const f = r[0], A = r[r.length - 1];
  return {
    x: f.x,
    y: f.y,
    w: f.w,
    h: A.y + A.h - f.y
  };
}
function Uc(c, s, d, r) {
  return d.kind === "clue" ? [{ x: Ye(c).clue.x, y: Ye(c).clue.y, w: Ye(c).clue.w, h: Ye(c).clue.h }] : d.kind === "waste" ? [{ x: Ye(c).waste.x, y: Ye(c).waste.y, w: Ye(c).waste.w, h: Ye(c).waste.h }] : Xc(c, s, d.index).slice(-r);
}
function Lm(c, s, d, r) {
  return Xc(c, s, d).slice(-r);
}
function ru(c, s, d) {
  const r = Ye(c).foundations[s], f = Math.min(Math.max(d, 0), 3), A = f > 0 ? f - 1 : 0;
  return {
    x: r.x + 14 + A * 3,
    y: r.y + 126,
    w: r.w - 28,
    h: 54
  };
}
function U0(c, s, d) {
  const r = s.foundationOrder[d], f = r ? s.foundations[r] : [];
  return ru(c, d, f.length);
}
function B0(c, s) {
  const d = Ye(c).foundations[s];
  return { x: d.x + 10, y: d.y + 10, w: d.w - 20, h: 104 };
}
function qm(c) {
  const s = Vl(c.levelIndex), d = go(c, s), r = yo(c).filter(({ card: f }) => f.role === "clue").map(({ source: f, card: A }) => ({ source: Il(f), label: A.label }));
  return JSON.stringify({
    coordinateSystem: { origin: "top-left", x: "right", y: "down" },
    mode: c.mode,
    levelNumber: c.levelIndex + 1,
    dealType: c.levelIndex < ca.length ? "curated" : "generated",
    level: s.name,
    tagline: s.tagline,
    totalCategories: s.categories.length,
    crownSlots: c.foundationOrder.length,
    completedCategories: L0(c, s),
    movesLeft: c.movesLeft,
    score: c.score,
    streak: c.streak,
    selectedSource: Il(c.selectedSource),
    activeClue: null,
    clueQueue: [],
    visibleClues: r,
    reserveCount: c.reserve.length,
    wasteTop: xe(c.waste)?.label ?? null,
    foundations: c.foundationOrder.map((f, A) => ({
      slot: A,
      clueIcon: Kt(s, f)?.clueIcon ?? null,
      clueTitle: Kt(s, f)?.clueTitle ?? null,
      count: f ? c.foundations[f].length : 0,
      words: f ? c.foundations[f].map((R) => R.label) : []
    })),
    columns: c.columns.map((f, A) => ({
      index: A,
      count: f.length,
      hidden: c.hiddenCounts[A] ?? 0,
      top: xe(f)?.label ?? null,
      topRole: xe(f)?.role ?? null,
      topDisplay: xe(f)?.faceStyle === "iconOnly" ? xe(f)?.faceIcon ?? xe(f)?.label ?? null : xe(f)?.label ?? null,
      revealed: Y0(c, A).map((R) => ({ label: R.label, role: R.role, display: R.faceStyle === "iconOnly" ? R.faceIcon ?? R.label : R.label, faceStyle: R.faceStyle ?? "word" }))
    })),
    boosters: c.boosters,
    actions: d,
    animations: { motionCards: c.motionCards.length, feedbackTexts: c.feedbackTexts.length, foundationPulses: c.foundationPulses.length },
    message: c.message,
    fullscreen: c.fullscreen
  });
}
function Me(c, s, d, r, f, A) {
  c.beginPath(), c.moveTo(s + A, d), c.arcTo(s + r, d, s + r, d + f, A), c.arcTo(s + r, d + f, s, d + f, A), c.arcTo(s, d + f, s, d, A), c.arcTo(s, d, s + r, d, A), c.closePath();
}
function iu(c, s, d, r, f, A, R, G = "#10302a") {
  c.fillStyle = A, Me(c, s, d, r, f, f / 2), c.fill(), c.fillStyle = G, c.font = "700 16px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText(R, s + r / 2, d + f / 2 + 6);
}
function Ym(c, s, d, r, f, A, R) {
  for (let G = r; G >= f; G -= 1)
    if (c.font = `${A} ${G}px ${R}`, c.measureText(s).width <= d) return G;
  return f;
}
function oo(c, s, d, r, f, A, R, G, v) {
  const T = Ym(c, s, f, A, R, G, v);
  return c.font = `${G} ${T}px ${v}`, c.fillText(s, d, r), T;
}
function Xm(c, s, d, r, f, A) {
  Yc(c, s, d, r, f, 18, 0.26);
  const R = c.createLinearGradient(s, d, s, d + f);
  R.addColorStop(0, "#fff2c8"), R.addColorStop(1, "#efbf58"), c.fillStyle = R, Me(c, s, d, r, f, 18), c.fill(), c.strokeStyle = "rgba(138, 95, 16, 0.38)", c.lineWidth = 2, c.stroke(), c.fillStyle = "rgba(255,255,255,0.3)", Me(c, s + 10, d + 10, r - 20, 22, 11), c.fill(), c.fillStyle = "#7b5310", c.font = "800 13px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText("CROWN", s + r / 2, d + 26), c.fillStyle = "#7b5310", A.clueStyle !== "wordOnly" && (c.font = '700 33px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(A.clueIcon, s + r / 2, A.clueStyle === "iconOnly" ? d + 76 : d + 64)), A.clueStyle !== "iconOnly" && oo(
    c,
    A.clueTitle,
    s + r / 2,
    A.clueStyle === "wordOnly" ? d + 76 : d + 98,
    r - 18,
    A.clueStyle === "wordOnly" ? 24 : 17,
    A.clueStyle === "wordOnly" ? 14 : 11,
    800,
    "Trebuchet MS, sans-serif"
  );
}
function Yc(c, s, d, r, f, A = 18, R = 0.28) {
  c.save(), c.shadowColor = `rgba(4, 14, 22, ${R})`, c.shadowBlur = A, c.shadowOffsetY = 10, c.fillStyle = "rgba(0,0,0,0.01)", Me(c, s, d, r, f, 20), c.fill(), c.restore();
}
function fu(c, s, d, r, f) {
  Yc(c, s, d, r, f, 16, 0.24);
  const A = c.createLinearGradient(s, d, s + r, d + f);
  A.addColorStop(0, "#4874b9"), A.addColorStop(1, "#254d83"), c.fillStyle = A, Me(c, s, d, r, f, 18), c.fill(), c.strokeStyle = "rgba(255,255,255,0.3)", c.lineWidth = 2, c.stroke(), c.strokeStyle = "rgba(255,255,255,0.22)", c.lineWidth = 1.5, Me(c, s + 8, d + 8, r - 16, f - 16, 14), c.stroke(), c.fillStyle = "rgba(255,255,255,0.18)";
  for (let R = 0; R < 3; R += 1)
    for (let G = 0; G < 2; G += 1) {
      const v = s + 26 + G * 34, T = d + 24 + R * 26;
      Me(c, v, T, 18, 12, 6), c.fill();
    }
}
function ou(c, s, d, r, f, A, R, G = !1) {
  const v = G || f <= 86;
  if (A.role === "clue") {
    Yc(c, s, d, r, f, R ? 18 : 14, R ? 0.3 : 0.24);
    const B = c.createLinearGradient(s, d, s, d + f);
    B.addColorStop(0, "#fff2c8"), B.addColorStop(1, "#efbf58"), c.fillStyle = B, Me(c, s, d, r, f, v ? 14 : 18), c.fill(), c.strokeStyle = R ? "rgba(96, 147, 219, 0.72)" : "rgba(138, 95, 16, 0.38)", c.lineWidth = R ? 3 : 2, c.stroke(), c.fillStyle = "rgba(255,255,255,0.3)", Me(c, s + 8, d + 8, r - 16, v ? 14 : 18, 12), c.fill(), c.fillStyle = "#7b5310", c.textAlign = "center", c.font = v ? "800 9px Trebuchet MS, sans-serif" : "800 13px Trebuchet MS, sans-serif", c.fillText("CLUE", s + r / 2, d + (v ? 18 : 26)), A.faceStyle !== "word" && A.faceIcon && (c.font = v ? A.faceStyle === "iconOnly" ? '700 18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 14px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 30px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(A.faceIcon, s + r / 2, d + (A.faceStyle === "iconOnly" ? v ? 40 : 50 : v ? 34 : 38))), A.faceStyle !== "iconOnly" && oo(
      c,
      A.label,
      s + r / 2,
      d + (A.faceStyle === "word" ? v ? 46 : 54 : v ? 52 : 62),
      r - (v ? 16 : 22),
      v ? 10 : 18,
      v ? 8 : 12,
      800,
      "Trebuchet MS, sans-serif"
    ), v || (c.font = "600 11px Trebuchet MS, sans-serif", c.fillStyle = "rgba(123,83,16,0.74)", c.fillText("CLAIM A CROWN", s + r / 2, d + f - 12));
    return;
  }
  Yc(c, s, d, r, f, R ? 18 : 14, R ? 0.28 : 0.22);
  const T = c.createLinearGradient(s, d, s, d + f);
  T.addColorStop(0, "#fffef8"), T.addColorStop(1, "#f4efe4"), c.fillStyle = T, Me(c, s, d, r, f, v ? 14 : 18), c.fill(), c.strokeStyle = R ? "rgba(96, 147, 219, 0.72)" : "rgba(17,38,35,0.14)", c.lineWidth = R ? 3 : 2, c.stroke();
  const z = c.createLinearGradient(s, d + 8, s + r, d + 8);
  z.addColorStop(0, "#f3d9a7"), z.addColorStop(1, "#e8c77f"), c.fillStyle = z, Me(c, s + 8, d + 8, r - 16, v ? 14 : 18, 12), c.fill(), c.fillStyle = "#102422", c.textAlign = "center", A.faceStyle === "iconOnly" && A.faceIcon ? (c.font = v ? '700 22px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 34px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(A.faceIcon, s + r / 2, d + (v ? 42 : 50)), v || (c.font = "600 11px Trebuchet MS, sans-serif", c.fillStyle = "rgba(16,36,34,0.42)", c.fillText("IMAGE CARD", s + r / 2, d + 66))) : (A.faceStyle === "iconWord" && A.faceIcon && (c.font = v ? '700 12px "Segoe UI Emoji", "Apple Color Emoji", sans-serif' : '700 16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif', c.fillText(A.faceIcon, s + r / 2, d + (v ? 27 : 28))), oo(
    c,
    A.label,
    s + r / 2,
    d + (v ? 46 : A.faceStyle === "iconWord" ? 52 : 44),
    r - (v ? 16 : 22),
    v ? 12 : 19,
    v ? 9 : 12,
    700,
    "Trebuchet MS, sans-serif"
  ), v || (c.font = "600 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(16,36,34,0.4)", c.fillText(A.faceStyle === "iconWord" ? "ICON CARD" : "WORD", s + r / 2, d + 64)));
}
function N0(c) {
  return 1 - (1 - c) ** 3;
}
function Qm(c, s, d) {
  const r = Vl(s.levelIndex), f = Ye(r);
  c.clearRect(0, 0, Ze, bt);
  const A = c.createLinearGradient(0, 0, 0, bt);
  A.addColorStop(0, "#246a61"), A.addColorStop(0.48, "#154642"), A.addColorStop(1, "#092225"), c.fillStyle = A, c.fillRect(0, 0, Ze, bt);
  const R = c.createLinearGradient(0, 0, Ze, bt);
  R.addColorStop(0, "rgba(255,255,255,0.025)"), R.addColorStop(1, "rgba(255,255,255,0)"), c.fillStyle = R;
  for (let z = 0; z < 7; z += 1)
    for (let B = 0; B < 5; B += 1)
      Me(c, 18 + B * 188, 18 + z * 168, 120, 72, 24), c.fill();
  c.save();
  const G = c.createRadialGradient(128, 112, 10, 128, 112, 420);
  G.addColorStop(0, "rgba(211, 255, 231, 0.24)"), G.addColorStop(1, "rgba(211, 255, 231, 0)"), c.fillStyle = G, c.fillRect(0, 0, Ze, bt);
  const v = c.createRadialGradient(834, 120, 10, 834, 120, 240);
  if (v.addColorStop(0, "rgba(255, 226, 164, 0.2)"), v.addColorStop(1, "rgba(255, 226, 164, 0)"), c.fillStyle = v, c.fillRect(0, 0, Ze, bt), c.restore(), c.fillStyle = "#f7fff9", c.textAlign = "left", c.font = "800 28px Trebuchet MS, sans-serif", c.fillText(r.name, 76, 58), c.font = "600 15px Trebuchet MS, sans-serif", c.fillStyle = "rgba(247,255,249,0.76)", c.fillText(r.tagline, 76, 84), Me(c, 78, 108, 286, 228, 32), c.fillStyle = "rgba(4,16,20,0.3)", c.fill(), iu(c, 102, 124, 110, 34, "rgba(255,255,255,0.12)", "Reserve", "#eff8f3"), iu(c, 240, 124, 92, 34, "rgba(255,255,255,0.12)", "Waste", "#eff8f3"), s.reserve.length ? (fu(c, f.reserve.x, f.reserve.y + 10, f.reserve.w, f.reserve.h), fu(c, f.reserve.x + 6, f.reserve.y + 4, f.reserve.w, f.reserve.h), fu(c, f.reserve.x + 12, f.reserve.y - 2, f.reserve.w, f.reserve.h), iu(c, f.reserve.x + 24, f.reserve.y + 92, 74, 34, "#ffe59f", String(s.reserve.length))) : (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), Me(c, f.reserve.x + 12, f.reserve.y, f.reserve.w, f.reserve.h, 20), c.stroke(), c.setLineDash([])), s.waste.length) {
    const z = xe(s.waste);
    (s.waste.length > 1 || d?.source.kind === "waste" && d.moved) && fu(c, f.waste.x + 6, f.waste.y + 4, f.reserve.w, f.reserve.h), d?.source.kind === "waste" && d.moved || ou(c, f.waste.x, f.waste.y, f.waste.w, f.waste.h, z, s.selectedSource?.kind === "waste");
  } else
    c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), Me(c, f.waste.x, f.waste.y, f.waste.w, f.waste.h, 20), c.stroke(), c.setLineDash([]);
  if (s.foundationOrder.forEach((z, B) => {
    const C = f.foundations[B], te = Kt(r, z), X = te ? s.foundations[te.id] : [], $ = s.foundationPulses.find((me) => me.slotIndex === B), Ve = d?.dropTarget?.kind === "foundation" && d.dropTarget.index === B;
    if ($) {
      const me = $.life / $.maxLife;
      c.save(), c.globalAlpha = 0.22 * me, c.fillStyle = "#ffe59b", Me(c, C.x - 8, C.y - 8, C.w + 16, C.h + 16, 30), c.fill(), c.restore();
    }
    if (c.fillStyle = Ve ? "rgba(255, 238, 182, 0.16)" : "rgba(255,255,255,0.08)", Me(c, C.x, C.y, C.w, C.h, 24), c.fill(), Ve && (c.strokeStyle = "#ffe59b", c.lineWidth = 3, Me(c, C.x, C.y, C.w, C.h, 24), c.stroke()), te ? Xm(c, C.x + 10, C.y + 10, C.w - 20, 104, te) : (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([6, 8]), Me(c, C.x + 12, C.y + 12, C.w - 24, 102, 18), c.stroke(), c.setLineDash([]), c.font = "700 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,243,0.7)", c.textAlign = "center", c.fillText("Empty Crown", C.x + C.w / 2, C.y + 56), c.fillText("Drop Clue", C.x + C.w / 2, C.y + 76)), te && X.length) {
      const me = X.slice(-3);
      me.forEach((je, Ae) => {
        ou(c, C.x + 14 + Ae * 3, C.y + 126 + (me.length - Ae - 1) * 5, C.w - 28, 54, je, !1, !0);
      });
    } else
      c.strokeStyle = "rgba(255,255,255,0.18)", c.setLineDash([6, 8]), c.lineWidth = 2, Me(c, C.x + 16, C.y + 126, C.w - 32, 70, 16), c.stroke(), c.setLineDash([]), c.font = "700 12px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,243,0.68)", c.textAlign = "center", c.fillText(te ? "Build Here" : "Need Clue", C.x + C.w / 2, C.y + 168);
    c.fillStyle = "#eff9f3", c.font = "600 14px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText(te ? `${X.length}/${te.words.length}` : "0/6", C.x + C.w / 2, C.y + C.h - 26), c.fillStyle = "rgba(255,255,255,0.9)", c.fillRect(C.x + 16, C.y + C.h - 16, te ? (C.w - 32) * X.length / te.words.length : 0, 8), c.strokeStyle = "rgba(255,255,255,0.18)", c.strokeRect(C.x + 16, C.y + C.h - 16, C.w - 32, 8);
  }), s.columns.forEach((z, B) => {
    const C = f.columns[B], te = Xc(r, s, B), X = d?.dropTarget?.kind === "column" && d.dropTarget.index === B;
    c.fillStyle = X ? "rgba(255, 226, 155, 0.18)" : "rgba(255,255,255,0.08)", Me(c, C.x, C.y, C.w, C.h, 28), c.fill(), X && (c.strokeStyle = "#ffe59b", c.lineWidth = 3, Me(c, C.x, C.y, C.w, C.h, 28), c.stroke()), z.length || (c.strokeStyle = "rgba(255,255,255,0.18)", c.lineWidth = 2, c.setLineDash([8, 8]), Me(c, C.x + 10, C.y + 24, C.w - 20, so, 20), c.stroke(), c.setLineDash([]), c.fillStyle = "rgba(239,249,243,0.74)", c.font = "700 13px Trebuchet MS, sans-serif", c.textAlign = "center", c.fillText("Drop Here", C.x + C.w / 2, C.y + 98));
    const $ = ho(s, B), Ve = d?.moved && d.source.kind === "column" && d.source.index === B ? d.cards.length : 0, me = Math.max($, z.length - Ve);
    z.forEach((je, Ae) => {
      if (Ae >= me) return;
      const we = te[Ae];
      if (!we) return;
      const fl = Ae < $, Ke = Ae === me - 1;
      if (fl) {
        fu(c, we.x, we.y, we.w, we.h);
        return;
      }
      ou(
        c,
        we.x,
        we.y,
        we.w,
        we.h,
        je,
        Ke && s.selectedSource?.kind === "column" && s.selectedSource.index === B && !d,
        !1
      );
    });
  }), d?.moved && (c.save(), c.globalAlpha = 0.96, d.cards.forEach((z, B) => {
    ou(
      c,
      d.x - z0 / 2,
      d.y - 52 + B * pm,
      z0,
      bm,
      z,
      !0,
      !1
    );
  }), c.restore()), s.motionCards.forEach((z) => {
    const B = N0(1 - z.life / z.maxLife), C = z.fromX + (z.toX - z.fromX) * B, te = z.fromY + (z.toY - z.fromY) * B - Math.sin(B * Math.PI) * z.arc;
    c.save(), c.globalAlpha = 0.92, ou(c, C, te, z.w, z.h, z.card, !1, z.compact), c.restore();
  }), s.feedbackTexts.forEach((z) => {
    const B = 1 - z.life / z.maxLife, C = 1 - B, te = z.y - B * 36, X = 0.92 + z.scale * N0(B);
    c.save(), c.globalAlpha = C, c.translate(z.x, te), c.scale(X, X), c.textAlign = "center", c.font = "800 28px Trebuchet MS, sans-serif", c.strokeStyle = "rgba(7,18,18,0.34)", c.lineWidth = 8, c.strokeText(z.text, 0, 0), c.fillStyle = z.color, c.fillText(z.text, 0, 0), c.restore();
  }), c.fillStyle = "rgba(5,16,18,0.58)", Me(c, 70, 1030, Ze - 140, 136, 30), c.fill(), [
    { label: "Moves", value: String(s.movesLeft), color: "#fff5cc" },
    { label: "Streak", value: String(s.streak), color: "#d5fff1" },
    { label: "Score", value: String(s.score), color: "#d6ecff" },
    { label: "Undo", value: String(s.boosters.undo), color: "#ffe7c1" },
    { label: "Joker", value: String(s.boosters.joker), color: "#ffdcd5" },
    { label: "Shuffle", value: String(s.boosters.shuffle), color: "#e0d9ff" }
  ].forEach((z, B) => {
    const C = 96 + B * 142;
    Me(c, C, 1048, 122, 60, 20), c.fillStyle = "rgba(255,255,255,0.08)", c.fill(), c.fillStyle = z.color, c.font = "700 13px Trebuchet MS, sans-serif", c.textAlign = "left", c.fillText(z.label, C + 14, 1070), c.fillStyle = "#f4fff8", c.font = "800 22px Trebuchet MS, sans-serif", c.fillText(z.value, C + 14, 1094);
  }), c.fillStyle = "#eef9f4", c.font = "700 16px Trebuchet MS, sans-serif", c.textAlign = "left", c.fillText(s.message, 96, 1140), s.particles.forEach((z) => {
    c.save(), c.globalAlpha = z.life / z.maxLife, c.fillStyle = z.color, Me(c, z.x - z.size / 2, z.y - z.size / 2, z.size, z.size, 5), c.fill(), c.restore();
  }), s.mode !== "playing") {
    const z = s.mode === "lost" && s.movesLeft <= 0;
    c.fillStyle = "rgba(7,12,18,0.74)", Me(c, 120, 384, Ze - 240, 292, 32), c.fill(), iu(c, Ze / 2 - 102, 426, 204, 38, "rgba(255,255,255,0.12)", s.mode === "title" ? "Fresh Shuffle" : s.mode === "won" ? "Perfect Sort" : z ? "Out of Moves" : "Dead End", "#f4fff8"), c.fillStyle = "#fff4c8", c.textAlign = "center", c.font = "800 44px Trebuchet MS, sans-serif", c.fillText(s.mode === "title" ? "Word Sort Solitaire" : s.mode === "won" ? "Round Complete" : z ? "Out of Moves" : "No Legal Moves", Ze / 2, 510), c.fillStyle = "#eef9f4", c.font = "600 22px Trebuchet MS, sans-serif", c.fillText(s.mode === "title" ? "Clue cards are buried in the deal. Uncover them, claim crowns, and sort the matching words." : s.message, Ze / 2, 566), c.font = "600 18px Trebuchet MS, sans-serif", c.fillStyle = "rgba(239,249,244,0.82)", c.fillText(s.mode === "won" ? "Tap to deal the next board." : "Tap anywhere on the board to play.", Ze / 2, 604), iu(c, Ze / 2 - 126, 620, 252, 56, "#ffd47b", s.mode === "won" ? "Tap For Next Deal" : "Tap To Start");
  }
}
function x0(c, s) {
  const d = [];
  for (const r of c.particles)
    r.life -= s, !(r.life <= 0) && (r.x += r.vx * (s / 16), r.y += r.vy * (s / 16), r.vy += 0.04 * (s / 16), d.push(r));
  c.particles = d, c.motionCards = c.motionCards.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), c.feedbackTexts = c.feedbackTexts.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : [])), c.foundationPulses = c.foundationPulses.flatMap((r) => (r.life -= s, r.life > 0 ? [r] : []));
}
function Zl(c) {
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
function yn(c, s) {
  return c.length <= s ? c : `${c.slice(0, Math.max(1, s - 1))}…`;
}
function Zm() {
  const c = dl.useRef(null);
  c.current || (c.current = au(0, !1));
  const s = dl.useRef(null), d = dl.useRef(null), r = dl.useRef(null), f = dl.useRef(c.current), A = dl.useRef(null), R = dl.useRef("off"), G = dl.useRef(null), [v, T] = dl.useState(c.current), [z, B] = dl.useState(() => hn()), [C, te] = dl.useState("off"), X = () => T({ ...f.current, columns: xc(f.current.columns), hiddenCounts: qc(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: jc(f.current.foundations), foundationOrder: Gc(f.current.foundationOrder), clueDeck: Lc(f.current.clueDeck), particles: [...f.current.particles], motionCards: w0(f.current.motionCards), feedbackTexts: D0(f.current.feedbackTexts), foundationPulses: H0(f.current.foundationPulses) }), $ = Vl(v.levelIndex), Ve = L0(v, $), me = (O) => {
    R.current = O, te(O), f.current.fullscreen = O !== "off";
  }, je = (O) => {
    if (typeof document > "u") return;
    const N = document.documentElement, w = document.body;
    if (O) {
      G.current || (G.current = {
        htmlOverflow: N.style.overflow,
        bodyOverflow: w.style.overflow,
        htmlOverscroll: N.style.overscrollBehavior,
        bodyOverscroll: w.style.overscrollBehavior
      }), N.style.overflow = "hidden", w.style.overflow = "hidden", N.style.overscrollBehavior = "none", w.style.overscrollBehavior = "none", window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const Y = G.current;
    Y && (N.style.overflow = Y.htmlOverflow, w.style.overflow = Y.bodyOverflow, N.style.overscrollBehavior = Y.htmlOverscroll, w.style.overscrollBehavior = Y.bodyOverscroll, G.current = null);
  }, Ae = () => typeof window > "u" || typeof navigator > "u" ? !1 : hn().width < 820 && (navigator.maxTouchPoints > 0 || /android|iphone|ipad|ipod/i.test(navigator.userAgent)), we = (O) => {
    R.current === "immersive" && (je(!1), me("off"), f.current.message = O, B(hn()), X());
  }, fl = () => {
    je(!0), me("immersive"), f.current.message = "Mobile fullscreen enabled.", B(hn()), X();
  }, Ke = (O, N = f.current.levelIndex) => {
    const w = au(N, f.current.fullscreen, 0);
    w.mode = "playing", f.current = w, X();
  }, ie = (O, N, w) => {
    if (f.current.mode !== "playing") return;
    const Y = w ?? Vt(f.current, N), k = mn(Y);
    if (!k || k.role !== "clue") {
      f.current.message = "Only clue cards can claim an empty crown.", X();
      return;
    }
    const x = Kt($, k.categoryId);
    if (!x) {
      f.current.message = "That clue card has no category data.", X();
      return;
    }
    if (f.current.foundations[x.id].length === x.words.length) {
      f.current.message = `${x.clueTitle} is already complete.`, X();
      return;
    }
    if (f.current.foundationOrder[O] != null) {
      f.current.message = "That crown already has a clue card.", X();
      return;
    }
    const I = Nc(f.current, x.id);
    if (I >= 0) {
      f.current.message = `${x.clueTitle} already owns crown ${I + 1}.`, X();
      return;
    }
    const le = Uc($, f.current, N, Y.length);
    ua(f.current);
    const _e = Hc(f.current, N, Y.length);
    if (!_e.length) return;
    const [Jl, ...Ne] = _e, bn = f.current.foundations[x.id].length;
    f.current.foundationOrder[O] = x.id, Ne.length && f.current.foundations[x.id].push(...Ne), f.current.selectedSource = null;
    const ql = Ne.reduce((ve, cl, Ge) => ve + 100 + Ge * 25, 0);
    if (f.current.streak = Ne.length, f.current.message = Ne.length ? `${x.clueTitle} claimed crown ${O + 1} with ${Ne.length} matching card${Ne.length === 1 ? "" : "s"}.` : `${x.clueTitle} placed into crown ${O + 1}.`, f.current.score += 40 + ql, cu(f.current, Jl, le[0] ?? B0($, O), B0($, O), !1), Ne.forEach((ve, cl) => {
      const Ge = ru($, O, bn + cl + 1);
      cu(f.current, ve, le[cl + 1] ?? le[le.length - 1] ?? Ge, Ge, !0);
    }), uu(f.current, O, x.color), St(f.current, x.clueTitle, Ye($).foundations[O].x + Ye($).foundations[O].w / 2, Ye($).foundations[O].y + 34, "#fff4bf", 0.22), Ne.length) {
      const ve = ru($, O, bn + Ne.length);
      fo(f.current, ve.x + ve.w / 2, ve.y + 30, x.color), St(f.current, `+${40 + ql}`, ve.x + ve.w / 2, ve.y + 24, "#fff4bf", 0.24), f.current.streak >= 2 && St(f.current, `Combo x${f.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3);
    }
    f.current.foundations[x.id].length === x.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${x.clueTitle} completed. Crown ${O + 1} opens again.`, St(f.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), uu(f.current, O, x.color)), ol(), X();
  }, Re = (O) => {
    if (f.current.mode !== "playing") return;
    const N = Vt(f.current, O), w = mn(N), Y = xe(N);
    if (!(!w || !Y)) {
      if (Il(f.current.selectedSource) === Il(O)) {
        if (w.role === "clue") {
          const k = f.current.foundationOrder.map((x, I) => x == null ? I : -1).filter((x) => x >= 0);
          k.length === 1 ? Tl(k[0]) : (f.current.selectedSource = null, f.current.message = k.length ? `Select an empty crown for ${w.label}.` : "Every crown already has a clue card.", X());
        } else {
          const k = Nc(f.current, Y.categoryId);
          k >= 0 ? Tl(k) : (f.current.selectedSource = null, f.current.message = "Find and place the matching clue card first.", X());
        }
        Il(f.current.selectedSource) === Il(O) && (f.current.selectedSource = null, f.current.message = "Selection cleared.", X());
        return;
      }
      f.current.selectedSource = O, f.current.message = w.role === "clue" ? N.length > 1 ? `${w.label} stack selected. Move the full stack into an empty crown.` : `${w.label} clue selected. Drop it into an empty crown.` : N.length > 1 ? `${N.length} matching cards selected.` : `${Y.label} selected.`, X();
    }
  }, ol = () => {
    f.current.movesLeft = Math.max(0, f.current.movesLeft - 1), Dc(f.current);
  }, Tl = (O, N) => {
    const w = N ?? f.current.selectedSource;
    if (f.current.mode !== "playing" || !w) return;
    const Y = Vt(f.current, w), k = mn(Y), x = xe(Y) ?? null;
    if (!k || !x) return;
    if (k.role === "clue") {
      ie(O, w, Y);
      return;
    }
    const I = f.current.foundationOrder[O], le = Kt($, I);
    if (!I || !le) {
      f.current.streak = 0, f.current.message = "That crown needs its clue card first.", X();
      return;
    }
    if (x.categoryId !== I) {
      f.current.streak = 0, f.current.message = `${x.label} does not fit the ${le?.clueTitle ?? "selected"} clue.`, X();
      return;
    }
    const _e = Uc($, f.current, w, Y.length), Jl = f.current.foundations[I].length;
    ua(f.current);
    const Ne = Hc(f.current, w, Y.length);
    if (!Ne.length) return;
    f.current.foundations[I].push(...Ne), f.current.selectedSource = null;
    const bn = f.current.streak, ql = Ne.reduce((cl, Ge, pn) => cl + 100 + (bn + pn) * 25, 0);
    f.current.score += ql, f.current.streak += Ne.length, f.current.message = Ne.length > 1 ? `${Ne.length} matching cards sorted into the ${le?.clueTitle ?? "target"} crown.` : `${Ne[0].label} matched the ${le?.clueTitle ?? "target"} clue.`, Ne.forEach((cl, Ge) => {
      const pn = ru($, O, Jl + Ge + 1);
      cu(
        f.current,
        cl,
        _e[Ge] ?? _e[_e.length - 1] ?? pn,
        pn,
        !0
      );
    });
    const ve = ru($, O, Jl + Ne.length);
    fo(f.current, ve.x + ve.w / 2, ve.y + 86, Ne[0].color), uu(f.current, O, le?.color ?? "#ffe59b"), St(f.current, `+${ql}`, ve.x + ve.w / 2, ve.y + 44, "#fff4bf", 0.24), f.current.foundations[I].length === le.words.length && (f.current.foundationOrder[O] = null, f.current.score += 160, f.current.streak = 0, f.current.message = `${le.clueTitle} completed. Crown ${O + 1} opens again.`, St(f.current, "Set Clear", Ze / 2, 316, "#ffe7aa", 0.34), uu(f.current, O, le.color)), f.current.streak >= 2 && St(f.current, `Combo x${f.current.streak}`, Ze / 2, 342, "#fff0b4", 0.3), ol(), X();
  }, rl = (O, N) => {
    const w = N ?? f.current.selectedSource;
    if (!w || f.current.mode !== "playing") return;
    if (w.kind === "column" && w.index === O) {
      f.current.selectedSource = null, f.current.message = "Selection cleared.", X();
      return;
    }
    const Y = Vt(f.current, w), k = Y[0] ?? null;
    if (!k) return;
    if (!mo(k, f.current.columns[O], w)) {
      f.current.streak = 0, f.current.message = `${k.label} cannot stack on column ${O + 1}.`, X();
      return;
    }
    const x = Uc($, f.current, w, Y.length);
    ua(f.current);
    const I = Hc(f.current, w, Y.length);
    if (!I.length) return;
    f.current.columns[O].push(...I), f.current.hiddenCounts[O] = Math.min(f.current.hiddenCounts[O] ?? 0, Math.max(0, f.current.columns[O].length - I.length)), X0(f.current, O);
    const le = Lm($, f.current, O, I.length);
    I.forEach((_e, Jl) => cu(f.current, _e, x[Jl] ?? x[x.length - 1], le[Jl] ?? le[le.length - 1], !1)), f.current.selectedSource = null, f.current.score += 15 * I.length, f.current.streak = 0, f.current.message = I.length > 1 ? `${I.length} matching cards parked on column ${O + 1}.` : `${I[0].label} parked on column ${O + 1}.`, St(f.current, I.length > 1 ? `Stack x${I.length}` : "+15", Ye($).columns[O].x + Ye($).columns[O].w / 2, Ye($).columns[O].y + 18, "#dff7ff", I.length > 1 ? 0.28 : 0.18), ol(), X();
  }, Ie = () => {
    if (f.current.mode !== "playing") return;
    if (!xe(f.current.reserve)) {
      f.current.message = "Reserve pile is empty.", X();
      return;
    }
    ua(f.current);
    const N = f.current.reserve.pop();
    N && (f.current.waste.push(N), f.current.selectedSource = { kind: "waste" }, f.current.message = `Drew ${N.label}.`, ol(), X());
  }, Kl = () => {
    f.current.message = Nm(f.current), X();
  }, wl = () => {
    Bm(f.current) || (f.current.message = f.current.boosters.undo ? "Nothing to undo yet." : "Undo booster spent."), X();
  }, hl = () => {
    const O = f.current.selectedSource;
    if (!O || f.current.mode !== "playing") return;
    if (f.current.boosters.joker <= 0) {
      f.current.message = "Joker spent.", X();
      return;
    }
    const N = xe(Vt(f.current, O)) ?? null;
    if (!N) return;
    if (N.role === "clue") {
      f.current.message = "Joker only sorts word cards.", X();
      return;
    }
    const w = Nc(f.current, N.categoryId);
    if (w < 0) {
      f.current.message = "Place the matching clue card first.", X();
      return;
    }
    const Y = Uc($, f.current, O, 1)[0] ?? U0($, f.current, w);
    ua(f.current);
    const k = Hc(f.current, O, 1)[0];
    if (!k) return;
    f.current.foundations[k.categoryId].push(k), f.current.selectedSource = null, f.current.boosters.joker -= 1, f.current.score += 80, f.current.message = `Joker matched ${k.label} automatically.`;
    const x = U0($, f.current, w);
    cu(f.current, k, Y, x, !0), fo(f.current, x.x + x.w / 2, x.y + 86, k.color), uu(f.current, w, $.categories.find((I) => I.id === k.categoryId)?.color ?? "#ffe59b"), St(f.current, "Joker!", x.x + x.w / 2, x.y + 44, "#ffd7a8", 0.24), Dc(f.current), X();
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
    ua(f.current), f.current.reserve = vo(O, 8564529 + f.current.movesLeft * 17 + f.current.score), f.current.waste = [], f.current.selectedSource = null, f.current.boosters.shuffle -= 1, f.current.message = "Reserve and waste reshuffled.", Dc(f.current), X();
  }, j = () => {
    const O = Math.max(0, f.current.score), N = f.current.levelIndex + 1;
    f.current = au(N, f.current.fullscreen, O), f.current.mode = "playing", f.current.message = N < ca.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", X();
  }, P = async () => {
    const O = s.current;
    if (!(!O || typeof document > "u"))
      try {
        if (R.current === "immersive") {
          we("Exited mobile fullscreen.");
          return;
        }
        if (document.fullscreenElement === O) {
          await document.exitFullscreen();
          return;
        }
        if (!Ae() && typeof O.requestFullscreen == "function") {
          await O.requestFullscreen();
          return;
        }
        fl();
      } catch {
        if (Ae()) {
          fl();
          return;
        }
        f.current.message = "Fullscreen is unavailable here.", X();
      }
  }, ge = (O, N) => {
    const w = d.current;
    if (!w) return;
    const Y = Rc(w, O, N);
    if (!Y) return;
    const { x: k, y: x } = Y, I = Vl(f.current.levelIndex), le = Ye(I);
    if (f.current.mode !== "playing") {
      f.current.mode === "won" ? j() : Ke();
      return;
    }
    if (pt(k, x, le.reserve)) {
      Ie();
      return;
    }
    if (pt(k, x, le.waste)) {
      Re({ kind: "waste" });
      return;
    }
    for (let _e = 0; _e < le.foundations.length; _e += 1)
      if (pt(k, x, le.foundations[_e])) {
        Tl(_e);
        return;
      }
    for (let _e = 0; _e < le.columns.length; _e += 1)
      if (pt(k, x, le.columns[_e])) {
        f.current.selectedSource ? rl(_e) : Re({ kind: "column", index: _e });
        return;
      }
  }, be = (O) => {
    const N = d.current;
    if (!N || f.current.mode !== "playing") return;
    const w = Rc(N, O.clientX, O.clientY);
    if (!w) return;
    const Y = Vl(f.current.levelIndex), k = xm(Y, f.current, w.x, w.y);
    if (!k) return;
    const x = Vt(f.current, k);
    x.length && (A.current = { source: k, cards: x, clueCategoryId: x[0]?.role === "clue" ? x[0].categoryId : null, x: w.x, y: w.y, startX: w.x, startY: w.y, moved: !1, dropTarget: null }, N.setPointerCapture(O.pointerId));
  }, m = (O) => {
    const N = d.current, w = A.current;
    if (!N || !w) return;
    const Y = Rc(N, O.clientX, O.clientY);
    if (!Y) return;
    w.x = Y.x, w.y = Y.y, w.moved = w.moved || Math.hypot(Y.x - w.startX, Y.y - w.startY) > 14;
    const k = Vl(f.current.levelIndex);
    w.dropTarget = w.moved ? R0(k, f.current, w.source, w.cards, Y.x, Y.y) : null;
  }, U = (O) => {
    const N = d.current, w = A.current;
    if (!N || !w) {
      ge(O.clientX, O.clientY);
      return;
    }
    const Y = Rc(N, O.clientX, O.clientY);
    N.hasPointerCapture(O.pointerId) && N.releasePointerCapture(O.pointerId);
    const k = Vl(f.current.levelIndex);
    if (Y && (w.x = Y.x, w.y = Y.y, w.moved = w.moved || Math.hypot(Y.x - w.startX, Y.y - w.startY) > 14, w.dropTarget = w.moved ? R0(k, f.current, w.source, w.cards, Y.x, Y.y) : null), A.current = null, !w.moved) {
      ge(O.clientX, O.clientY);
      return;
    }
    if (w.dropTarget?.kind === "foundation") {
      Tl(w.dropTarget.index, w.source);
      return;
    }
    if (w.dropTarget?.kind === "column") {
      rl(w.dropTarget.index, w.source);
      return;
    }
    f.current.selectedSource = w.source;
    const x = mn(w.cards), I = xe(w.cards);
    !x || !I || (f.current.message = x.role === "clue" ? w.cards.length > 1 ? `${x.label} stack lifted. Drag the full stack into an empty crown.` : `${x.label} lifted. Drag it into an empty crown.` : w.cards.length > 1 ? `${w.cards.length} matching cards lifted. Drag them to a crown or column.` : `${I.label} lifted. Drag it to a crown or column.`, X());
  }, L = (O) => {
    const N = d.current;
    N && A.current && N.hasPointerCapture(O.pointerId) && N.releasePointerCapture(O.pointerId), A.current = null;
  };
  dl.useEffect(() => {
    const O = d.current, N = O?.getContext("2d");
    if (!O || !N) return;
    const w = window, Y = () => {
      Qm(N, f.current, A.current), T({ ...f.current, columns: xc(f.current.columns), hiddenCounts: qc(f.current.hiddenCounts), reserve: [...f.current.reserve], waste: [...f.current.waste], foundations: jc(f.current.foundations), foundationOrder: Gc(f.current.foundationOrder), clueDeck: Lc(f.current.clueDeck), particles: [...f.current.particles], motionCards: w0(f.current.motionCards), feedbackTexts: D0(f.current.feedbackTexts), foundationPulses: H0(f.current.foundationPulses) });
    }, k = () => {
      x0(f.current, 16), Y(), r.current = window.requestAnimationFrame(k);
    };
    return w.render_game_to_text = () => {
      const x = JSON.parse(qm(f.current));
      return x.fullscreenMode = R.current, x.viewport = hn(), JSON.stringify(x);
    }, w.advanceTime = (x) => {
      let I = x;
      for (; I > 0; ) {
        const le = Math.min(I, 16);
        x0(f.current, le), I -= le;
      }
      Y();
    }, w.__drainVirtualTimePending = () => 0, w.__wordsort_debug_set_moves = (x) => {
      f.current.movesLeft = Math.max(0, Math.floor(x)), Dc(f.current), Y();
    }, w.__wordsort_debug_set_level = (x) => {
      const I = Math.max(0, Math.floor(x)), le = au(I, f.current.fullscreen, 0);
      le.mode = "playing", le.message = I < ca.length ? "Fresh mixed clue cards dealt." : "Fresh generated deal dealt.", f.current = le, Y();
    }, w.__wordsort_debug_prime_foundation_stack = () => {
      const I = Vl(f.current.levelIndex).categories[0];
      if (!I) return;
      const le = au(f.current.levelIndex, f.current.fullscreen, 0);
      le.mode = "playing", le.foundationOrder[0] = I.id, le.foundations[I.id] = [], le.columns[0] = I.words.slice(0, 3).map((_e) => q0(I, _e)), le.hiddenCounts[0] = 0, le.movesLeft = Math.max(le.movesLeft, 12), le.message = "Debug: foundation stack primed.", f.current = le, Y();
    }, Y(), r.current = window.requestAnimationFrame(k), () => {
      r.current != null && window.cancelAnimationFrame(r.current), delete w.render_game_to_text, delete w.advanceTime, delete w.__drainVirtualTimePending, delete w.__wordsort_debug_set_moves, delete w.__wordsort_debug_set_level, delete w.__wordsort_debug_prime_foundation_stack;
    };
  }, []), dl.useEffect(() => {
    const O = () => B(hn());
    return O(), window.addEventListener("resize", O), window.visualViewport?.addEventListener("resize", O), window.visualViewport?.addEventListener("scroll", O), () => {
      window.removeEventListener("resize", O), window.visualViewport?.removeEventListener("resize", O), window.visualViewport?.removeEventListener("scroll", O);
    };
  }, []), dl.useEffect(() => () => {
    je(!1);
  }, []), dl.useEffect(() => {
    const O = ["j", "k", "l", "m", "p"], N = ["a", "s", "d", "g", "v"], w = () => {
      document.fullscreenElement === s.current ? me("native") : R.current === "native" && me("off"), B(hn()), X();
    }, Y = (k) => {
      const x = k.key.toLowerCase();
      x === "f" && (k.preventDefault(), P()), x === "escape" && R.current === "immersive" && (k.preventDefault(), we("Exited mobile fullscreen.")), x === "n" && (k.preventDefault(), Ie()), x === "h" && (k.preventDefault(), Kl()), x === "u" && (k.preventDefault(), wl()), x === "x" && (k.preventDefault(), hl()), x === "z" && (k.preventDefault(), _()), x === "enter" && f.current.mode !== "playing" && (k.preventDefault(), Ke());
      const I = N.indexOf(x);
      if (I >= 0) {
        k.preventDefault();
        const _e = { kind: "column", index: I };
        f.current.selectedSource?.kind === "column" && f.current.selectedSource.index === I ? Re(_e) : f.current.selectedSource ? rl(I) : Re(_e);
      }
      x === "q" && (k.preventDefault(), f.current.selectedSource?.kind === "waste" ? Re({ kind: "waste" }) : Re({ kind: "waste" }));
      const le = O.indexOf(x);
      le >= 0 && (k.preventDefault(), Tl(le));
    };
    return document.addEventListener("fullscreenchange", w), window.addEventListener("keydown", Y), () => {
      document.removeEventListener("fullscreenchange", w), window.removeEventListener("keydown", Y);
    };
  }, []);
  const q = C === "immersive", J = !v.fullscreen && z.width < 560, F = v.fullscreen && z.width < 820, ce = v.fullscreen && (z.width < 1140 || z.height < 760), Z = v.fullscreen || J, Be = v.fullscreen ? F ? "calc(env(safe-area-inset-top, 0px) + 8px) calc(env(safe-area-inset-right, 0px) + 8px) calc(env(safe-area-inset-bottom, 0px) + 12px) calc(env(safe-area-inset-left, 0px) + 8px)" : ce ? "10px 10px 14px" : "14px 14px 16px" : J ? "12px 10px 14px" : 20, Jt = v.fullscreen ? F ? Math.min(430, Math.max(300, z.width - 18)) : Math.min(ce ? 720 : 860, Math.max(320, z.width - (ce ? 28 : 48))) : J ? Math.min(420, Math.max(320, z.width - 28)) : 760, gn = Z ? F ? "Immersive mobile layout with safe-area spacing and touch-first controls." : "Buried clue cards, five live crowns, and a tighter layout." : "A clue-card word sorter where the crown cards are buried in the deal, just like the rest of the deck.", ia = v.fullscreen ? F ? 78 : ce ? 92 : 104 : J ? 72 : 108, vn = v.fullscreen ? F ? 96 : ce ? 120 : 136 : J ? 108 : 160, Pl = v.fullscreen ? "Exit Fullscreen" : F || Ae() ? "Go Fullscreen" : "Fullscreen", fa = (O, N) => {
    const w = Kt($, O);
    return w ? Z ? `${w.clueIcon} ${yn(w.clueTitle, J ? 8 : 10)}` : `${w.clueIcon} ${w.clueTitle}` : `Empty ${N + 1}`;
  }, Sn = /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${ia}px, 1fr))`, gap: v.fullscreen ? 10 : 12 }, children: [
    [["Level", $.name], ["Moves Left", String(v.movesLeft)], ["Score", String(v.score)], ["Best", String(v.bestScore)], ["Streak", String(v.streak)], ["Cleared", `${Ve}/${$.categories.length}`]].map(([O, N]) => {
      const w = O === "Level";
      return /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: Z && w ? ce || J ? "1 / -1" : "span 2" : void 0 }, children: [
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? w ? 17 : 18 : 24, fontWeight: 800, wordBreak: w ? "normal" : "break-word", whiteSpace: w ? "nowrap" : "normal", overflow: w ? "hidden" : "visible", textOverflow: w ? "ellipsis" : "clip" }, children: w && Z ? yn(N, J ? 20 : ce ? 24 : 30) : N })
      ] }, O);
    }),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Visible Clues" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 17 : 20, fontWeight: 800 }, children: yo(v).filter(({ card: O }) => O.role === "clue").length })
    ] }),
    [["Undo", String(v.boosters.undo)], ["Joker", String(v.boosters.joker)], ["Shuffle", String(v.boosters.shuffle)]].map(([O, N]) => /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,240,182,0.14)", boxShadow: "inset 0 0 0 1px rgba(255,240,182,0.16)" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: O }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 18 : 24, fontWeight: 800 }, children: N })
    ] }, O)),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: Z ? "1 / -1" : void 0 }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Crown Status" }),
      /* @__PURE__ */ V.jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }, children: v.foundationOrder.map((O, N) => /* @__PURE__ */ V.jsx("div", { style: { padding: Z ? "5px 8px" : "6px 10px", borderRadius: 999, background: O ? "rgba(255,240,182,0.16)" : "rgba(255,255,255,0.08)", fontSize: Z ? 11 : 13, fontWeight: 700, maxWidth: "100%" }, children: fa(O, N) }, `crown-status-${N}`)) })
    ] }),
    /* @__PURE__ */ V.jsxs("div", { style: { minWidth: 0, padding: Z ? "9px 10px" : "12px 14px", borderRadius: 20, background: "rgba(255,255,255,0.11)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", gridColumn: "1 / -1" }, children: [
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", opacity: 0.72 }, children: "Status" }),
      /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 13 : 15, fontWeight: 700, minHeight: 24, wordBreak: "break-word" }, children: v.message })
    ] })
  ] }), du = /* @__PURE__ */ V.jsx("div", { style: { width: Jt, maxWidth: "100%", alignSelf: "center", aspectRatio: `${Ze} / ${bt}` }, children: /* @__PURE__ */ V.jsx("canvas", { ref: d, width: Ze, height: bt, style: { width: "100%", height: "100%", display: "block", borderRadius: v.fullscreen ? 26 : 28, boxShadow: "0 22px 40px rgba(3,10,28,0.42)", background: "#102623", cursor: A.current ? "grabbing" : "pointer", touchAction: "none" }, onPointerDown: be, onPointerMove: m, onPointerUp: U, onPointerCancel: L }) }), hu = /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gap: 10 }, children: [
    /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: [
      v.columns.map((O, N) => /* @__PURE__ */ V.jsx("button", { id: `wordsort-source-col-${N + 1}`, onClick: () => v.selectedSource ? rl(N) : Re({ kind: "column", index: N }), style: { ...Zl(Il(v.selectedSource) === `column-${N}`), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: Il(v.selectedSource) === `column-${N}` ? `Selected: ${yn(xe(O)?.label ?? "Empty", Z ? 12 : 18)}` : `${J ? "C" : "Column"} ${N + 1}: ${yn(xe(O)?.label ?? "Empty", Z ? 12 : 18)}` }, N)),
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-source-waste", onClick: () => v.selectedSource ? Re({ kind: "waste" }) : Re({ kind: "waste" }), style: { ...Zl(Il(v.selectedSource) === "waste"), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: Il(v.selectedSource) === "waste" ? `Selected: ${yn(xe(v.waste)?.label ?? "Empty", Z ? 12 : 18)}` : `${J ? "Waste" : "Waste:"} ${yn(xe(v.waste)?.label ?? "Empty", Z ? 12 : 18)}` })
    ] }),
    /* @__PURE__ */ V.jsx("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: v.foundationOrder.map((O, N) => {
      const w = Kt($, O);
      return /* @__PURE__ */ V.jsx("button", { id: `wordsort-foundation-${N + 1}`, onClick: () => Tl(N), style: { ...Zl(!1), background: "linear-gradient(180deg, #ffefbe 0%, #efc25c 100%)", color: "#5f3c07", fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: w ? `${w.clueIcon} ${yn(w.clueTitle, Z ? 9 : 16)} ${v.foundations[w.id].length}/${w.words.length}` : Z ? `Empty ${N + 1}` : `Empty Crown ${N + 1}` }, N);
    }) }),
    /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${vn}px, 1fr))`, gap: 10 }, children: [
      /* @__PURE__ */ V.jsx("button", { id: "wordsort-undo", onClick: wl, style: { ...Zl(!1), fontSize: Z ? 12 : 14, padding: Z ? "9px 10px" : "11px 16px" }, children: `Undo (${v.boosters.undo})` }),
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
  return /* @__PURE__ */ V.jsx("div", { style: { minHeight: q ? "100dvh" : "100%", display: "flex", justifyContent: "center", padding: v.fullscreen ? 0 : "24px 12px 48px", background: v.fullscreen ? "#091614" : "transparent", position: q ? "fixed" : "relative", inset: q ? 0 : void 0, zIndex: q ? 9999 : void 0, overflow: q ? "hidden" : "visible" }, children: /* @__PURE__ */ V.jsxs("section", { ref: s, style: { width: "100%", maxWidth: v.fullscreen ? "100vw" : 1040, minHeight: v.fullscreen ? q ? "100dvh" : "100vh" : void 0, height: q ? "100dvh" : void 0, boxSizing: "border-box", borderRadius: v.fullscreen ? 0 : 32, padding: Be, background: "radial-gradient(circle at top left, rgba(179, 240, 209, 0.16), transparent 30%), linear-gradient(180deg, #163c37 0%, #0b1f1c 100%)", boxShadow: v.fullscreen ? "none" : "0 24px 60px rgba(4,14,39,0.35)", display: "flex", flexDirection: "column", gap: F ? 10 : v.fullscreen ? 12 : 14, color: "#eff9f4", overflowX: "hidden", overflowY: v.fullscreen ? "auto" : "hidden", WebkitOverflowScrolling: "touch", overscrollBehavior: v.fullscreen ? "contain" : "auto" }, children: [
    /* @__PURE__ */ V.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: Z ? "flex-start" : "center", gap: F ? 8 : ce ? 10 : J ? 8 : 16, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ V.jsxs("div", { style: { display: "grid", gap: 4, minWidth: 0, flex: "1 1 320px" }, children: [
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: v.fullscreen ? F ? 21 : ce ? 24 : 28 : J ? 22 : 30, fontWeight: 800 }, children: "Word Sort Solitaire" }),
        /* @__PURE__ */ V.jsx("div", { style: { fontSize: Z ? 13 : 14, lineHeight: 1.45, color: "rgba(235,244,255,0.82)", maxWidth: Z ? 560 : 620 }, children: gn })
      ] }),
      /* @__PURE__ */ V.jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", minWidth: 0, justifyContent: Z ? "flex-start" : "flex-end" }, children: [
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-start", onClick: () => Ke(), style: { ...Zl(!0), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: v.mode === "playing" ? "New Round" : "Start Round" }),
        /* @__PURE__ */ V.jsx("button", { id: "wordsort-next", onClick: j, style: { ...Zl(!1), padding: Z ? "9px 12px" : "11px 16px", fontSize: Z ? 12 : 14 }, children: "Next Level" }),
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
ym.createRoot(Q0).render(/* @__PURE__ */ V.jsx(Zm, {}));
