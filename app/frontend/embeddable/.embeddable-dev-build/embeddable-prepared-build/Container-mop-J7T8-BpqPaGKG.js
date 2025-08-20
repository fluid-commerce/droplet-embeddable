import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { O as Oe$1, $ as $e$1, _ as _e$1 } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { u as useTheme } from "./index.esm-CVE60fla.js";
import { m, r } from "./Title-n-I3Fdvw-CW-j1pzr.js";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rB(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
function Gg(A) {
  if (Object.prototype.hasOwnProperty.call(A, "__esModule")) return A;
  var e = A.default;
  if (typeof e == "function") {
    var t = function r2() {
      return this instanceof r2 ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(A).forEach(function(r2) {
    var n = Object.getOwnPropertyDescriptor(A, r2);
    Object.defineProperty(t, r2, n.get ? n : {
      enumerable: true,
      get: function() {
        return A[r2];
      }
    });
  }), t;
}
var vt, Kr;
function nB() {
  if (Kr) return vt;
  Kr = 1;
  var A = "Expected a function", e = NaN, t = "[object Symbol]", r2 = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, B = /^0o[0-7]+$/i, i = parseInt, a = typeof me == "object" && me && me.Object === Object && me, o = typeof self == "object" && self && self.Object === Object && self, c = a || o || Function("return this")(), l = Object.prototype, g = l.toString, U = Math.max, w = Math.min, f = function() {
    return c.Date.now();
  };
  function I(u, H, m2) {
    var E, b, M, V, y, T, z = 0, J = false, N = false, oA = true;
    if (typeof u != "function")
      throw new TypeError(A);
    H = v(H) || 0, Q(m2) && (J = !!m2.leading, N = "maxWait" in m2, M = N ? U(v(m2.maxWait) || 0, H) : M, oA = "trailing" in m2 ? !!m2.trailing : oA);
    function $(k) {
      var mA = E, ne = b;
      return E = b = void 0, z = k, V = u.apply(ne, mA), V;
    }
    function uA(k) {
      return z = k, y = setTimeout(AA, H), J ? $(k) : V;
    }
    function hA(k) {
      var mA = k - T, ne = k - z, yr = H - mA;
      return N ? w(yr, M - ne) : yr;
    }
    function wA(k) {
      var mA = k - T, ne = k - z;
      return T === void 0 || mA >= H || mA < 0 || N && ne >= M;
    }
    function AA() {
      var k = f();
      if (wA(k))
        return QA(k);
      y = setTimeout(AA, hA(k));
    }
    function QA(k) {
      return y = void 0, oA && E ? $(k) : (E = b = void 0, V);
    }
    function cA() {
      y !== void 0 && clearTimeout(y), z = 0, E = T = b = y = void 0;
    }
    function IA() {
      return y === void 0 ? V : QA(f());
    }
    function dA() {
      var k = f(), mA = wA(k);
      if (E = arguments, b = this, T = k, mA) {
        if (y === void 0)
          return uA(T);
        if (N)
          return y = setTimeout(AA, H), $(T);
      }
      return y === void 0 && (y = setTimeout(AA, H)), V;
    }
    return dA.cancel = cA, dA.flush = IA, dA;
  }
  function h(u, H, m2) {
    var E = true, b = true;
    if (typeof u != "function")
      throw new TypeError(A);
    return Q(m2) && (E = "leading" in m2 ? !!m2.leading : E, b = "trailing" in m2 ? !!m2.trailing : b), I(u, H, {
      leading: E,
      maxWait: H,
      trailing: b
    });
  }
  function Q(u) {
    var H = typeof u;
    return !!u && (H == "object" || H == "function");
  }
  function L(u) {
    return !!u && typeof u == "object";
  }
  function F(u) {
    return typeof u == "symbol" || L(u) && g.call(u) == t;
  }
  function v(u) {
    if (typeof u == "number")
      return u;
    if (F(u))
      return e;
    if (Q(u)) {
      var H = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = Q(H) ? H + "" : H;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = u.replace(r2, "");
    var m2 = s.test(u);
    return m2 || B.test(u) ? i(u.slice(2), m2 ? 2 : 8) : n.test(u) ? e : +u;
  }
  return vt = h, vt;
}
var sB = nB();
const BB = /* @__PURE__ */ rB(sB), iB = (A, e, t = {}) => {
  const [r2, n] = reactExports.useState({
    width: 0,
    height: 0
  }), s = reactExports.useRef(null), B = reactExports.useRef(e), i = reactExports.useCallback((a) => {
    var o, c, l, g;
    if ((o = a[0]) != null && o.contentRect) {
      const U = {
        width: (c = a[0]) == null ? void 0 : c.contentRect.width,
        height: (l = a[0]) == null ? void 0 : l.contentRect.height
      };
      n(U), (g = B.current) == null || g.call(B, U);
    }
  }, [B]);
  return reactExports.useLayoutEffect(() => {
    const a = A && "current" in A ? A.current : A;
    if (a)
      return s.current = new ResizeObserver(BB(i, (t == null ? void 0 : t.delay) ?? 0)), s.current.observe(a), () => {
        var o;
        (o = s.current) == null || o.unobserve(a);
      };
  }, [A, i, t == null ? void 0 : t.delay]), r2;
}, It = (A) => {
  const { className: e, height: t, width: r2 } = A, n = t || "24", s = r2 || "24";
  return /* @__PURE__ */ j$1.jsx(
    "svg",
    {
      className: e,
      height: n,
      id: "Cloud-Download--Streamline-Micro.svg",
      version: "1.1",
      viewBox: `0 0 ${s} ${n}`,
      width: s,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ j$1.jsx(
        "path",
        {
          d: "M8.232 1.128192C6.353616 1.268424 4.645752 2.0488560000000002 3.3233040000000003 3.3713040000000003C2.137296 4.5573120000000005 1.4144400000000001 6.005352 1.148448 7.728C1.102584 8.025144 1.09452 8.175936 1.0933680000000001 8.76C1.091928 9.481728 1.110312 9.706631999999999 1.215096 10.248C1.661568 12.554856000000001 3.1263360000000002 14.51904 5.213832 15.610056C5.826696 15.93036 6.313224 16.104 6.597816 16.104C7.512887999999999 16.104 8.085288 15.137064 7.651751999999999 14.323656C7.564368000000001 14.159736 7.386504 13.970927999999999 7.236768 13.883184C7.1786639999999995 13.849128 7.010136 13.77264 6.862272 13.713192000000001C6.12756 13.417872 5.59116 13.072272 5.070672 12.558864C3.6762960000000002 11.183448 3.15384 9.20172 3.692736 7.332C4.209216 5.539944 5.6592 4.133952 7.452 3.6867600000000005C7.969848 3.557592 8.108736 3.542256 8.76 3.5423999999999998C9.28764 3.5425199999999997 9.411216000000001 3.549816 9.656472 3.5952960000000003C11.042064 3.8521920000000005 12.207624000000001 4.58244 13.034927999999999 5.712C13.393824 6.202032 13.649544 6.743304 13.849464000000001 7.436208C13.957392 7.810295999999999 14.001768000000002 7.908552000000001 14.144496000000002 8.089608C14.348400000000002 8.34828 14.646264 8.493792000000001 15.01344 8.514048C15.289584000000001 8.529312 15.437376000000002 8.489112 15.744 8.315328C16.397064 7.945200000000001 16.83972 7.8300719999999995 17.516808 7.854144C18.043272 7.872888 18.38256 7.96104 18.842592 8.198640000000001C19.312296 8.441232000000001 19.710456 8.798904 20.002296 9.240456C20.352624 9.770448 20.543664 10.468224 20.511456 11.1C20.445144 12.399624 19.59456 13.517040000000001 18.366504 13.917768C18.117576 13.999008000000002 17.761512 14.063712000000002 17.557776 14.064744C17.104344 14.067048 16.806504 14.176032000000001 16.550520000000002 14.433336C16.310088 14.675040000000001 16.2 14.939688 16.2 15.276C16.2 15.740400000000001 16.46304 16.16088 16.874856 16.3548C17.119896 16.470192 17.283984 16.49124 17.720904 16.463424C18.587376000000003 16.408272 19.341816 16.191024 20.076 15.785256000000002C21.162288 15.184895999999998 22.065672 14.167104000000002 22.514352 13.038192C22.770167999999998 12.394464000000001 22.885728 11.84148 22.911863999999998 11.136000000000001C22.936824 10.462392 22.85004 9.864576 22.632456 9.211344C22.351704 8.368416000000002 21.938807999999998 7.702368000000001 21.30228 7.0656C20.814888 6.578016 20.393208 6.277200000000001 19.788 5.985312C18.615552 5.419872 17.319048 5.28948 16.036704 5.608008C15.900696 5.641776 15.785832000000001 5.665512 15.781439999999998 5.660712C15.777047999999999 5.655912000000001 15.70848 5.5224 15.629064000000001 5.364C15.108816000000001 4.326504 14.36844 3.4230240000000003 13.468944 2.727984C13.21896 2.534808 12.73704 2.2183200000000003 12.441888 2.053488C11.621376 1.5952320000000002 10.551408 1.2605760000000001 9.564 1.1533680000000002C9.23904 1.1180880000000002 8.543448 1.1049360000000001 8.232 1.128192M11.784 11.859264000000001C11.352 11.930088 10.949088 12.301656 10.836792 12.73284C10.804704000000001 12.856032 10.8 13.251312 10.8 15.825743999999998L10.8 18.777408 10.122 18.105576C9.499416 17.488656 9.430272 17.427576000000002 9.276 17.357904C8.930280000000002 17.201808 8.57556 17.204232 8.234856 17.365032C8.030520000000001 17.46144 7.804056 17.674992 7.698792000000001 17.870496000000003C7.514928 18.211968 7.514400000000001 18.669287999999998 7.697496 19.0182C7.745256 19.109208 8.195472 19.575648 9.478704 20.863560000000003C10.423224 21.811536 11.246088 22.624272 11.307288 22.669632C11.368512 22.714992 11.492712000000001 22.781015999999997 11.583288 22.816344C11.724672 22.871472 11.783712 22.880568 12 22.880496C12.28308 22.880424 12.440760000000001 22.834848 12.66 22.689768C12.726 22.646112 13.558176 21.829536 14.509295999999999 20.875176C15.804432 19.575648 16.254696 19.109351999999998 16.302672 19.017912C16.43376 18.76812 16.474728 18.407424 16.403208 18.132839999999998C16.350264 17.929584000000002 16.25676 17.770632 16.089144 17.599008C15.734976000000001 17.236344000000003 15.201792000000001 17.142167999999998 14.724 17.357904C14.569728 17.427576000000002 14.500584000000002 17.488656 13.878 18.105576L13.200000000000001 18.777408 13.200000000000001 15.825743999999998C13.200000000000001 12.599568 13.20576 12.738959999999999 13.061208 12.470496C13.025352 12.403872 12.929904 12.281712 12.849143999999999 12.199008C12.676176 12.021888 12.43272 11.895216000000001 12.192 11.85708C12.014136 11.828904 11.967624 11.829144 11.784 11.859264000000001",
          stroke: "none",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
}, br = (A) => {
  const { className: e, height: t, width: r2 } = A;
  useTheme();
  const n = t || "24", s = r2 || "24";
  return /* @__PURE__ */ j$1.jsxs(
    "svg",
    {
      className: e,
      fill: "none",
      height: n,
      viewBox: `0 0 ${s} ${n}`,
      width: s,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ j$1.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.06393 2.06412C2.69405 1.434 3.54868 1.08 4.43981 1.08H19.5598C20.4509 1.08 21.3056 1.434 21.9357 2.06412C22.5658 2.69424 22.9198 3.54887 22.9198 4.44V19.56C22.9198 20.4511 22.5658 21.3058 21.9357 21.9359C21.3056 22.566 20.4509 22.92 19.5598 22.92H4.43981C3.54868 22.92 2.69405 22.566 2.06393 21.9359C1.43381 21.3058 1.07981 20.4511 1.07981 19.56V4.44C1.07981 3.54887 1.4338 2.69424 2.06393 2.06412ZM4.43981 3.48C4.1852 3.48 3.94102 3.58114 3.76098 3.76118C3.58095 3.94121 3.47981 4.18539 3.47981 4.44V19.56C3.47981 19.8146 3.58095 20.0588 3.76098 20.2388C3.94102 20.4189 4.1852 20.52 4.43981 20.52H19.5598C19.8144 20.52 20.0586 20.4189 20.2386 20.2388C20.4187 20.0588 20.5198 19.8146 20.5198 19.56V4.44C20.5198 4.18539 20.4187 3.94121 20.2386 3.76118C20.0586 3.58114 19.8144 3.48 19.5598 3.48H4.43981Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ j$1.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.8639 6.38412C13.494 5.754 14.3487 5.4 15.2398 5.4C16.1309 5.4 16.9856 5.754 17.6157 6.38412C18.2458 7.01424 18.5998 7.86887 18.5998 8.76C18.5998 9.65113 18.2458 10.5058 17.6157 11.1359C16.9856 11.766 16.1309 12.12 15.2398 12.12C14.3487 12.12 13.494 11.766 12.8639 11.1359C12.2338 10.5058 11.8798 9.65113 11.8798 8.76C11.8798 7.86887 12.2338 7.01424 12.8639 6.38412ZM15.2398 7.8C14.9852 7.8 14.741 7.90114 14.561 8.08118C14.3809 8.26121 14.2798 8.50539 14.2798 8.76C14.2798 9.01461 14.3809 9.25879 14.561 9.43882C14.741 9.61886 14.9852 9.72 15.2398 9.72C15.4944 9.72 15.7386 9.61886 15.9186 9.43882C16.0987 9.25879 16.1998 9.01461 16.1998 8.76C16.1998 8.50539 16.0987 8.26121 15.9186 8.08118C15.7386 7.90114 15.4944 7.8 15.2398 7.8Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ j$1.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.46059 11.5474C7.35586 11.474 10.183 12.4334 12.4358 14.254C14.6928 16.0781 16.2254 18.647 16.7585 21.4996C16.8802 22.151 16.4508 22.7778 15.7994 22.8996C15.1479 23.0213 14.5211 22.5919 14.3993 21.9404C13.9712 19.6492 12.7401 17.5858 10.9272 16.1207C9.11439 14.6556 6.83854 13.8848 4.5085 13.9469C4.49784 13.9472 4.48718 13.9474 4.47653 13.9474C3.81011 13.9474 3.14799 14.006 2.50159 14.1276C1.85027 14.2501 1.22297 13.8213 1.10048 13.17C0.977991 12.5187 1.4067 11.8914 2.05802 11.7689C2.85355 11.6193 3.65914 11.5483 4.46059 11.5474Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ j$1.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.9361 13.7916C15.966 13.7863 14.0205 14.229 12.2466 15.0862C11.6499 15.3745 11.3999 16.092 11.6883 16.6888C11.9767 17.2855 12.6942 17.5355 13.2909 17.2471C14.7379 16.5479 16.3249 16.1869 17.932 16.1916L17.9378 16.1916C19.0944 16.1893 20.2436 16.3743 21.341 16.7394C21.9699 16.9486 22.6493 16.6084 22.8585 15.9795C23.0677 15.3506 22.7275 14.6713 22.0986 14.4621C20.7563 14.0155 19.3506 13.7891 17.9361 13.7916Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}, aB = (A) => {
  const e = useTheme();
  return /* @__PURE__ */ j$1.jsxs("svg", { width: "4", height: "18", viewBox: "0 0 4 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ j$1.jsx(
      "path",
      {
        d: "M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z",
        fill: e.svg.fillNormal
      }
    ),
    /* @__PURE__ */ j$1.jsx(
      "path",
      {
        d: "M4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9Z",
        fill: e.svg.fillNormal
      }
    ),
    /* @__PURE__ */ j$1.jsx(
      "path",
      {
        d: "M4 16C4 17.1046 3.10457 18 2 18C0.89543 18 0 17.1046 0 16C0 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16Z",
        fill: e.svg.fillNormal
      }
    )
  ] });
};
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Zt = function(A, e) {
  return Zt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r2) {
    t.__proto__ = r2;
  } || function(t, r2) {
    for (var n in r2) Object.prototype.hasOwnProperty.call(r2, n) && (t[n] = r2[n]);
  }, Zt(A, e);
};
function gA(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Zt(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var jt = function() {
  return jt = Object.assign || function(e) {
    for (var t, r2 = 1, n = arguments.length; r2 < n; r2++) {
      t = arguments[r2];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, jt.apply(this, arguments);
};
function q(A, e, t, r2) {
  function n(s) {
    return s instanceof t ? s : new t(function(B) {
      B(s);
    });
  }
  return new (t || (t = Promise))(function(s, B) {
    function i(c) {
      try {
        o(r2.next(c));
      } catch (l) {
        B(l);
      }
    }
    function a(c) {
      try {
        o(r2.throw(c));
      } catch (l) {
        B(l);
      }
    }
    function o(c) {
      c.done ? s(c.value) : n(c.value).then(i, a);
    }
    o((r2 = r2.apply(A, [])).next());
  });
}
function Z(A, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r2, n, s, B;
  return B = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (B[Symbol.iterator] = function() {
    return this;
  }), B;
  function i(o) {
    return function(c) {
      return a([o, c]);
    };
  }
  function a(o) {
    if (r2) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r2 = 1, n && (s = o[0] & 2 ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done) return s;
      switch (n = 0, s && (o = [o[0] & 2, s.value]), o[0]) {
        case 0:
        case 1:
          s = o;
          break;
        case 4:
          return t.label++, { value: o[1], done: false };
        case 5:
          t.label++, n = o[1], o = [0];
          continue;
        case 7:
          o = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (o[0] === 6 || o[0] === 2)) {
            t = 0;
            continue;
          }
          if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) {
            t.label = o[1];
            break;
          }
          if (o[0] === 6 && t.label < s[1]) {
            t.label = s[1], s = o;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2], t.ops.push(o);
            break;
          }
          s[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      o = e.call(A, t);
    } catch (c) {
      o = [6, c], n = 0;
    } finally {
      r2 = s = 0;
    }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: true };
  }
}
function ye(A, e, t) {
  if (arguments.length === 2) for (var r2 = 0, n = e.length, s; r2 < n; r2++)
    (s || !(r2 in e)) && (s || (s = Array.prototype.slice.call(e, 0, r2)), s[r2] = e[r2]);
  return A.concat(s || e);
}
var vA = (
  /** @class */
  (function() {
    function A(e, t, r2, n) {
      this.left = e, this.top = t, this.width = r2, this.height = n;
    }
    return A.prototype.add = function(e, t, r2, n) {
      return new A(this.left + e, this.top + t, this.width + r2, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r2 = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r2 ? new A(r2.left + e.windowBounds.left, r2.top + e.windowBounds.top, r2.width, r2.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  })()
), wt = function(A, e) {
  return vA.fromClientRect(A, e.getBoundingClientRect());
}, oB = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r2 = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new vA(0, 0, r2, n);
}, Qt = function(A) {
  for (var e = [], t = 0, r2 = A.length; t < r2; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r2) {
      var s = A.charCodeAt(t++);
      (s & 64512) === 56320 ? e.push(((n & 1023) << 10) + (s & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, G = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r2 = [], n = -1, s = ""; ++n < t; ) {
    var B = A[n];
    B <= 65535 ? r2.push(B) : (B -= 65536, r2.push((B >> 10) + 55296, B % 1024 + 56320)), (n + 1 === t || r2.length > 16384) && (s += String.fromCharCode.apply(String, r2), r2.length = 0);
  }
  return s;
}, xr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Le = 0; Le < xr.length; Le++)
  cB[xr.charCodeAt(Le)] = Le;
var Dr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ke = 0; Ke < Dr.length; Ke++)
  oe[Dr.charCodeAt(Ke)] = Ke;
var lB = function(A) {
  var e = A.length * 0.75, t = A.length, r2, n = 0, s, B, i, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r2 = 0; r2 < t; r2 += 4)
    s = oe[A.charCodeAt(r2)], B = oe[A.charCodeAt(r2 + 1)], i = oe[A.charCodeAt(r2 + 2)], a = oe[A.charCodeAt(r2 + 3)], c[n++] = s << 2 | B >> 4, c[n++] = (B & 15) << 4 | i >> 2, c[n++] = (i & 3) << 6 | a & 63;
  return o;
}, gB = function(A) {
  for (var e = A.length, t = [], r2 = 0; r2 < e; r2 += 2)
    t.push(A[r2 + 1] << 8 | A[r2]);
  return t;
}, uB = function(A) {
  for (var e = A.length, t = [], r2 = 0; r2 < e; r2 += 4)
    t.push(A[r2 + 3] << 24 | A[r2 + 2] << 16 | A[r2 + 1] << 8 | A[r2]);
  return t;
}, PA = 5, Fr = 11, mt = 2, wB = Fr - PA, Gn = 65536 >> PA, QB = 1 << PA, yt = QB - 1, fB = 1024 >> PA, CB = Gn + fB, UB = CB, FB = 32, hB = UB + FB, dB = 65536 >> Fr, pB = 1 << wB, EB = pB - 1, Sr = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, HB = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, vB = function(A, e) {
  var t = lB(A), r2 = Array.isArray(t) ? uB(t) : new Uint32Array(t), n = Array.isArray(t) ? gB(t) : new Uint16Array(t), s = 24, B = Sr(n, s / 2, r2[4] / 2), i = r2[5] === 2 ? Sr(n, (s + r2[4]) / 2) : HB(r2, Math.ceil((s + r2[4]) / 4));
  return new IB(r2[0], r2[1], r2[2], r2[3], B, i);
}, IB = (
  /** @class */
  (function() {
    function A(e, t, r2, n, s, B) {
      this.initialValue = e, this.errorValue = t, this.highStart = r2, this.highValueIndex = n, this.index = s, this.data = B;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> PA], t = (t << mt) + (e & yt), this.data[t];
        if (e <= 65535)
          return t = this.index[Gn + (e - 55296 >> PA)], t = (t << mt) + (e & yt), this.data[t];
        if (e < this.highStart)
          return t = hB - dB + (e >> Fr), t = this.index[t], t += e >> PA & EB, t = this.index[t], t = (t << mt) + (e & yt), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })()
), Tr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var be = 0; be < Tr.length; be++)
  mB[Tr.charCodeAt(be)] = be;
var yB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Mr = 50, LB = 1, Vn = 2, Nn = 3, KB = 4, bB = 5, Or = 7, Pn = 8, Rr = 9, bA = 10, qt = 11, Gr = 12, zt = 13, xB = 14, ce = 15, $t = 16, xe = 17, se = 18, DB = 19, Vr = 20, Ar = 21, Be = 22, Lt = 23, _A = 24, nA = 25, le = 26, ge = 27, XA = 28, SB = 29, GA = 30, TB = 31, De = 32, Se = 33, er = 34, tr = 35, rr = 36, pe = 37, nr = 38, ze = 39, $e = 40, Kt = 41, kn = 42, MB = 43, OB = [9001, 65288], _n = "!", K = "×", Te = "÷", sr = vB(yB), pA = [GA, rr], Br = [LB, Vn, Nn, bB], Xn = [bA, Pn], Nr = [ge, le], RB = Br.concat(Xn), Pr = [nr, ze, $e, er, tr], GB = [ce, zt], VB = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r2 = [], n = [];
  return A.forEach(function(s, B) {
    var i = sr.get(s);
    if (i > Mr ? (n.push(true), i -= Mr) : n.push(false), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r2.push(B), t.push($t);
    if (i === KB || i === qt) {
      if (B === 0)
        return r2.push(B), t.push(GA);
      var a = t[B - 1];
      return RB.indexOf(a) === -1 ? (r2.push(r2[B - 1]), t.push(a)) : (r2.push(B), t.push(GA));
    }
    if (r2.push(B), i === TB)
      return t.push(e === "strict" ? Ar : pe);
    if (i === kn || i === SB)
      return t.push(GA);
    if (i === MB)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(pe) : t.push(GA);
    t.push(i);
  }), [r2, t, n];
}, bt = function(A, e, t, r2) {
  var n = r2[t];
  if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
    for (var s = t; s <= r2.length; ) {
      s++;
      var B = r2[s];
      if (B === e)
        return true;
      if (B !== bA)
        break;
    }
  if (n === bA)
    for (var s = t; s > 0; ) {
      s--;
      var i = r2[s];
      if (Array.isArray(A) ? A.indexOf(i) !== -1 : A === i)
        for (var a = t; a <= r2.length; ) {
          a++;
          var B = r2[a];
          if (B === e)
            return true;
          if (B !== bA)
            break;
        }
      if (i !== bA)
        break;
    }
  return false;
}, kr = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r2 = e[t];
    if (r2 === bA)
      t--;
    else
      return r2;
  }
  return 0;
}, NB = function(A, e, t, r2, n) {
  if (t[r2] === 0)
    return K;
  var s = r2 - 1;
  if (Array.isArray(n) && n[s] === true)
    return K;
  var B = s - 1, i = s + 1, a = e[s], o = B >= 0 ? e[B] : 0, c = e[i];
  if (a === Vn && c === Nn)
    return K;
  if (Br.indexOf(a) !== -1)
    return _n;
  if (Br.indexOf(c) !== -1 || Xn.indexOf(c) !== -1)
    return K;
  if (kr(s, e) === Pn)
    return Te;
  if (sr.get(A[s]) === qt || (a === De || a === Se) && sr.get(A[i]) === qt || a === Or || c === Or || a === Rr || [bA, zt, ce].indexOf(a) === -1 && c === Rr || [xe, se, DB, _A, XA].indexOf(c) !== -1 || kr(s, e) === Be || bt(Lt, Be, s, e) || bt([xe, se], Ar, s, e) || bt(Gr, Gr, s, e))
    return K;
  if (a === bA)
    return Te;
  if (a === Lt || c === Lt)
    return K;
  if (c === $t || a === $t)
    return Te;
  if ([zt, ce, Ar].indexOf(c) !== -1 || a === xB || o === rr && GB.indexOf(a) !== -1 || a === XA && c === rr || c === Vr || pA.indexOf(c) !== -1 && a === nA || pA.indexOf(a) !== -1 && c === nA || a === ge && [pe, De, Se].indexOf(c) !== -1 || [pe, De, Se].indexOf(a) !== -1 && c === le || pA.indexOf(a) !== -1 && Nr.indexOf(c) !== -1 || Nr.indexOf(a) !== -1 && pA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ge, le].indexOf(a) !== -1 && (c === nA || [Be, ce].indexOf(c) !== -1 && e[i + 1] === nA) || // ( OP | HY ) × NU
  [Be, ce].indexOf(a) !== -1 && c === nA || // NU ×	(NU | SY | IS)
  a === nA && [nA, XA, _A].indexOf(c) !== -1)
    return K;
  if ([nA, XA, _A, xe, se].indexOf(c) !== -1)
    for (var l = s; l >= 0; ) {
      var g = e[l];
      if (g === nA)
        return K;
      if ([XA, _A].indexOf(g) !== -1)
        l--;
      else
        break;
    }
  if ([ge, le].indexOf(c) !== -1)
    for (var l = [xe, se].indexOf(a) !== -1 ? B : s; l >= 0; ) {
      var g = e[l];
      if (g === nA)
        return K;
      if ([XA, _A].indexOf(g) !== -1)
        l--;
      else
        break;
    }
  if (nr === a && [nr, ze, er, tr].indexOf(c) !== -1 || [ze, er].indexOf(a) !== -1 && [ze, $e].indexOf(c) !== -1 || [$e, tr].indexOf(a) !== -1 && c === $e || Pr.indexOf(a) !== -1 && [Vr, le].indexOf(c) !== -1 || Pr.indexOf(c) !== -1 && a === ge || pA.indexOf(a) !== -1 && pA.indexOf(c) !== -1 || a === _A && pA.indexOf(c) !== -1 || pA.concat(nA).indexOf(a) !== -1 && c === Be && OB.indexOf(A[i]) === -1 || pA.concat(nA).indexOf(c) !== -1 && a === se)
    return K;
  if (a === Kt && c === Kt) {
    for (var U = t[s], w = 1; U > 0 && (U--, e[U] === Kt); )
      w++;
    if (w % 2 !== 0)
      return K;
  }
  return a === De && c === Se ? K : Te;
}, PB = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = VB(A, e.lineBreak), r2 = t[0], n = t[1], s = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(i) {
    return [nA, GA, kn].indexOf(i) !== -1 ? pe : i;
  }));
  var B = e.wordBreak === "keep-all" ? s.map(function(i, a) {
    return i && A[a] >= 19968 && A[a] <= 40959;
  }) : void 0;
  return [r2, n, B];
}, kB = (
  /** @class */
  (function() {
    function A(e, t, r2, n) {
      this.codePoints = e, this.required = t === _n, this.start = r2, this.end = n;
    }
    return A.prototype.slice = function() {
      return G.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })()
), _B = function(A, e) {
  var t = Qt(A), r2 = PB(t, e), n = r2[0], s = r2[1], B = r2[2], i = t.length, a = 0, o = 0;
  return {
    next: function() {
      if (o >= i)
        return { done: true, value: null };
      for (var c = K; o < i && (c = NB(t, s, n, ++o, B)) === K; )
        ;
      if (c !== K || o === i) {
        var l = new kB(t, c, a, o);
        return a = o, { value: l, done: false };
      }
      return { done: true, value: null };
    }
  };
}, XB = 1, JB = 2, ve = 4, _r = 8, tt = 10, Xr = 47, Ce = 92, WB = 9, YB = 32, Me = 34, ie = 61, ZB = 35, jB = 36, qB = 37, Oe = 39, Re = 40, ae = 41, zB = 95, eA = 45, $B = 33, Ai = 60, ei = 62, ti = 64, ri = 91, ni = 93, si = 61, Bi = 123, Ge = 63, ii = 125, Jr = 124, ai = 126, oi = 128, Wr = 65533, xt = 42, NA = 43, ci = 44, li = 58, gi = 59, Ee = 46, ui = 0, wi = 8, Qi = 11, fi = 14, Ci = 31, Ui = 127, fA = -1, Jn = 48, Wn = 97, Yn = 101, Fi = 102, hi = 117, di = 122, Zn = 65, jn = 69, qn = 70, pi = 85, Ei = 90, j = function(A) {
  return A >= Jn && A <= 57;
}, Hi = function(A) {
  return A >= 55296 && A <= 57343;
}, JA = function(A) {
  return j(A) || A >= Zn && A <= qn || A >= Wn && A <= Fi;
}, vi = function(A) {
  return A >= Wn && A <= di;
}, Ii = function(A) {
  return A >= Zn && A <= Ei;
}, mi = function(A) {
  return vi(A) || Ii(A);
}, yi = function(A) {
  return A >= oi;
}, Ve = function(A) {
  return A === tt || A === WB || A === YB;
}, rt = function(A) {
  return mi(A) || yi(A) || A === zB;
}, Yr = function(A) {
  return rt(A) || j(A) || A === eA;
}, Li = function(A) {
  return A >= ui && A <= wi || A === Qi || A >= fi && A <= Ci || A === Ui;
}, KA = function(A, e) {
  return A !== Ce ? false : e !== tt;
}, Ne = function(A, e, t) {
  return A === eA ? rt(e) || KA(e, t) : rt(A) ? true : !!(A === Ce && KA(A, e));
}, Dt = function(A, e, t) {
  return A === NA || A === eA ? j(e) ? true : e === Ee && j(t) : j(A === Ee ? e : A);
}, Ki = function(A) {
  var e = 0, t = 1;
  (A[e] === NA || A[e] === eA) && (A[e] === eA && (t = -1), e++);
  for (var r2 = []; j(A[e]); )
    r2.push(A[e++]);
  var n = r2.length ? parseInt(G.apply(void 0, r2), 10) : 0;
  A[e] === Ee && e++;
  for (var s = []; j(A[e]); )
    s.push(A[e++]);
  var B = s.length, i = B ? parseInt(G.apply(void 0, s), 10) : 0;
  (A[e] === jn || A[e] === Yn) && e++;
  var a = 1;
  (A[e] === NA || A[e] === eA) && (A[e] === eA && (a = -1), e++);
  for (var o = []; j(A[e]); )
    o.push(A[e++]);
  var c = o.length ? parseInt(G.apply(void 0, o), 10) : 0;
  return t * (n + i * Math.pow(10, -B)) * Math.pow(10, a * c);
}, bi = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, xi = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Di = {
  type: 4
  /* COMMA_TOKEN */
}, Si = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Ti = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Mi = {
  type: 21
  /* COLUMN_TOKEN */
}, Oi = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Ri = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Gi = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Vi = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Ni = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Pe = {
  type: 23
  /* BAD_URL_TOKEN */
}, Pi = {
  type: 1
  /* BAD_STRING_TOKEN */
}, ki = {
  type: 25
  /* CDO_TOKEN */
}, _i = {
  type: 24
  /* CDC_TOKEN */
}, Xi = {
  type: 26
  /* COLON_TOKEN */
}, Ji = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Wi = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Yi = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Zi = {
  type: 31
  /* WHITESPACE_TOKEN */
}, ir = {
  type: 32
  /* EOF_TOKEN */
}, zn = (
  /** @class */
  (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Qt(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ir; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Me:
          return this.consumeStringToken(Me);
        case ZB:
          var t = this.peekCodePoint(0), r2 = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Yr(t) || KA(r2, n)) {
            var s = Ne(t, r2, n) ? JB : XB, B = this.consumeName();
            return { type: 5, value: B, flags: s };
          }
          break;
        case jB:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), Si;
          break;
        case Oe:
          return this.consumeStringToken(Oe);
        case Re:
          return bi;
        case ae:
          return xi;
        case xt:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), Ni;
          break;
        case NA:
          if (Dt(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case ci:
          return Di;
        case eA:
          var i = e, a = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Dt(i, a, o))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Ne(i, a, o))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === eA && o === ei)
            return this.consumeCodePoint(), this.consumeCodePoint(), _i;
          break;
        case Ee:
          if (Dt(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Xr:
          if (this.peekCodePoint(0) === xt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === xt && (c = this.consumeCodePoint(), c === Xr))
                return this.consumeToken();
              if (c === fA)
                return this.consumeToken();
            }
          break;
        case li:
          return Xi;
        case gi:
          return Ji;
        case Ai:
          if (this.peekCodePoint(0) === $B && this.peekCodePoint(1) === eA && this.peekCodePoint(2) === eA)
            return this.consumeCodePoint(), this.consumeCodePoint(), ki;
          break;
        case ti:
          var l = this.peekCodePoint(0), g = this.peekCodePoint(1), U = this.peekCodePoint(2);
          if (Ne(l, g, U)) {
            var B = this.consumeName();
            return { type: 7, value: B };
          }
          break;
        case ri:
          return Wi;
        case Ce:
          if (KA(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case ni:
          return Yi;
        case si:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), Ti;
          break;
        case Bi:
          return Gi;
        case ii:
          return Vi;
        case hi:
        case pi:
          var w = this.peekCodePoint(0), f = this.peekCodePoint(1);
          return w === NA && (JA(f) || f === Ge) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Jr:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), Oi;
          if (this.peekCodePoint(0) === Jr)
            return this.consumeCodePoint(), Mi;
          break;
        case ai:
          if (this.peekCodePoint(0) === ie)
            return this.consumeCodePoint(), Ri;
          break;
        case fA:
          return ir;
      }
      return Ve(e) ? (this.consumeWhiteSpace(), Zi) : j(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : rt(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: G(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); JA(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r2 = false; t === Ge && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r2 = true;
      if (r2) {
        var n = parseInt(G.apply(void 0, e.map(function(a) {
          return a === Ge ? Jn : a;
        })), 16), s = parseInt(G.apply(void 0, e.map(function(a) {
          return a === Ge ? qn : a;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var B = parseInt(G.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === eA && JA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var i = []; JA(t) && i.length < 6; )
          i.push(t), t = this.consumeCodePoint();
        var s = parseInt(G.apply(void 0, i), 16);
        return { type: 30, start: B, end: s };
      } else
        return { type: 30, start: B, end: B };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Re ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Re ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === fA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Oe || t === Me) {
        var r2 = this.consumeStringToken(this.consumeCodePoint());
        return r2.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === fA || this.peekCodePoint(0) === ae) ? (this.consumeCodePoint(), { type: 22, value: r2.value }) : (this.consumeBadUrlRemnants(), Pe);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === fA || n === ae)
          return { type: 22, value: G.apply(void 0, e) };
        if (Ve(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === fA || this.peekCodePoint(0) === ae ? (this.consumeCodePoint(), { type: 22, value: G.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), Pe);
        if (n === Me || n === Oe || n === Re || Li(n))
          return this.consumeBadUrlRemnants(), Pe;
        if (n === Ce)
          if (KA(n, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Pe;
        else
          e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Ve(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === ae || e === fA)
          return;
        KA(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r2 = ""; e > 0; ) {
        var n = Math.min(t, e);
        r2 += G.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r2;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r2 = 0;
      do {
        var n = this._value[r2];
        if (n === fA || n === void 0 || n === e)
          return t += this.consumeStringSlice(r2), { type: 0, value: t };
        if (n === tt)
          return this._value.splice(0, r2), Pi;
        if (n === Ce) {
          var s = this._value[r2 + 1];
          s !== fA && s !== void 0 && (s === tt ? (t += this.consumeStringSlice(r2), r2 = -1, this._value.shift()) : KA(n, s) && (t += this.consumeStringSlice(r2), t += G(this.consumeEscapedCodePoint()), r2 = -1));
        }
        r2++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = ve, r2 = this.peekCodePoint(0);
      for ((r2 === NA || r2 === eA) && e.push(this.consumeCodePoint()); j(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r2 = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r2 === Ee && j(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = _r; j(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r2 = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r2 === jn || r2 === Yn) && ((n === NA || n === eA) && j(s) || j(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = _r; j(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [Ki(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r2 = e[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), B = this.peekCodePoint(2);
      if (Ne(n, s, B)) {
        var i = this.consumeName();
        return { type: 15, number: t, flags: r2, unit: i };
      }
      return n === qB ? (this.consumeCodePoint(), { type: 16, number: t, flags: r2 }) : { type: 17, number: t, flags: r2 };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (JA(e)) {
        for (var t = G(e); JA(this.peekCodePoint(0)) && t.length < 6; )
          t += G(this.consumeCodePoint());
        Ve(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r2 = parseInt(t, 16);
        return r2 === 0 || Hi(r2) || r2 > 1114111 ? Wr : r2;
      }
      return e === fA ? Wr : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Yr(t))
          e += G(t);
        else if (KA(t, this.peekCodePoint(0)))
          e += G(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })()
), $n = (
  /** @class */
  (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new zn();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r2 = this.consumeToken(); ; ) {
        if (r2.type === 32 || qi(r2, e))
          return t;
        this.reconsumeToken(r2), t.values.push(this.consumeComponentValue()), r2 = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r2 = this.consumeToken();
        if (r2.type === 32 || r2.type === 3)
          return t;
        this.reconsumeToken(r2), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? ir : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })()
), Ie = function(A) {
  return A.type === 15;
}, re = function(A) {
  return A.type === 17;
}, D = function(A) {
  return A.type === 20;
}, ji = function(A) {
  return A.type === 0;
}, ar = function(A, e) {
  return D(A) && A.value === e;
}, As = function(A) {
  return A.type !== 31;
}, te = function(A) {
  return A.type !== 31 && A.type !== 4;
}, UA = function(A) {
  var e = [], t = [];
  return A.forEach(function(r2) {
    if (r2.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r2.type !== 31 && t.push(r2);
  }), t.length && e.push(t), e;
}, qi = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
}, OA = function(A) {
  return A.type === 17 || A.type === 15;
}, P = function(A) {
  return A.type === 16 || OA(A);
}, es = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, Y = {
  type: 17,
  number: 0,
  flags: ve
}, hr = {
  type: 16,
  number: 50,
  flags: ve
}, xA = {
  type: 16,
  number: 100,
  flags: ve
}, ue = function(A, e, t) {
  var r2 = A[0], n = A[1];
  return [S(r2, e), S(typeof n < "u" ? n : r2, t)];
}, S = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (Ie(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      // TODO use correct font-size
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, ts = "deg", rs = "grad", ns = "rad", ss = "turn", ft = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case ts:
          return Math.PI * e.number / 180;
        case rs:
          return Math.PI / 200 * e.number;
        case ns:
          return e.number;
        case ss:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Bs = function(A) {
  return A.type === 15 && (A.unit === ts || A.unit === rs || A.unit === ns || A.unit === ss);
}, is = function(A) {
  var e = A.filter(D).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Y, Y];
    case "to top":
    case "bottom":
      return iA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Y, xA];
    case "to right":
    case "left":
      return iA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [xA, xA];
    case "to bottom":
    case "top":
      return iA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [xA, Y];
    case "to left":
    case "right":
      return iA(270);
  }
  return 0;
}, iA = function(A) {
  return Math.PI * A / 180;
}, SA = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = zi[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r2 = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3);
        return DA(parseInt(r2 + r2, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (e.value.length === 4) {
        var r2 = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3), B = e.value.substring(3, 4);
        return DA(parseInt(r2 + r2, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(B + B, 16) / 255);
      }
      if (e.value.length === 6) {
        var r2 = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6);
        return DA(parseInt(r2, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (e.value.length === 8) {
        var r2 = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6), B = e.value.substring(6, 8);
        return DA(parseInt(r2, 16), parseInt(n, 16), parseInt(s, 16), parseInt(B, 16) / 255);
      }
    }
    if (e.type === 20) {
      var i = HA[e.value.toUpperCase()];
      if (typeof i < "u")
        return i;
    }
    return HA.TRANSPARENT;
  }
}, TA = function(A) {
  return (255 & A) === 0;
}, X = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r2 = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r2 + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r2 + "," + t + ")";
}, DA = function(A, e, t, r2) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r2 * 255) << 0) >>> 0;
}, Zr = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, jr = function(A, e) {
  var t = e.filter(te);
  if (t.length === 3) {
    var r2 = t.map(Zr), n = r2[0], s = r2[1], B = r2[2];
    return DA(n, s, B, 1);
  }
  if (t.length === 4) {
    var i = t.map(Zr), n = i[0], s = i[1], B = i[2], a = i[3];
    return DA(n, s, B, a);
  }
  return 0;
};
function St(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var qr = function(A, e) {
  var t = e.filter(te), r2 = t[0], n = t[1], s = t[2], B = t[3], i = (r2.type === 17 ? iA(r2.number) : ft.parse(A, r2)) / (Math.PI * 2), a = P(n) ? n.number / 100 : 0, o = P(s) ? s.number / 100 : 0, c = typeof B < "u" && P(B) ? S(B, 1) : 1;
  if (a === 0)
    return DA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (a + 1) : o + a - o * a, g = o * 2 - l, U = St(g, l, i + 1 / 3), w = St(g, l, i), f = St(g, l, i - 1 / 3);
  return DA(U * 255, w * 255, f * 255, c);
}, zi = {
  hsl: qr,
  hsla: qr,
  rgb: jr,
  rgba: jr
}, Ue = function(A, e) {
  return SA.parse(A, $n.create(e).parseComponentValue());
}, HA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, $i = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (D(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Aa = {
  name: "background-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
}, Ct = function(A, e) {
  var t = SA.parse(A, e[0]), r2 = e[1];
  return r2 && P(r2) ? { color: t, stop: r2 } : { color: t, stop: null };
}, zr = function(A, e) {
  var t = A[0], r2 = A[A.length - 1];
  t.stop === null && (t.stop = Y), r2.stop === null && (r2.stop = xA);
  for (var n = [], s = 0, B = 0; B < A.length; B++) {
    var i = A[B].stop;
    if (i !== null) {
      var a = S(i, e);
      a > s ? n.push(a) : n.push(s), s = a;
    } else
      n.push(null);
  }
  for (var o = null, B = 0; B < n.length; B++) {
    var c = n[B];
    if (c === null)
      o === null && (o = B);
    else if (o !== null) {
      for (var l = B - o, g = n[o - 1], U = (c - g) / (l + 1), w = 1; w <= l; w++)
        n[o + w - 1] = U * w;
      o = null;
    }
  }
  return A.map(function(f, I) {
    var h = f.color;
    return { color: h, stop: Math.max(Math.min(1, n[I] / e), 0) };
  });
}, ea = function(A, e, t) {
  var r2 = e / 2, n = t / 2, s = S(A[0], e) - r2, B = n - S(A[1], t);
  return (Math.atan2(B, s) + Math.PI * 2) % (Math.PI * 2);
}, ta = function(A, e, t) {
  var r2 = typeof A == "number" ? A : ea(A, e, t), n = Math.abs(e * Math.sin(r2)) + Math.abs(t * Math.cos(r2)), s = e / 2, B = t / 2, i = n / 2, a = Math.sin(r2 - Math.PI / 2) * i, o = Math.cos(r2 - Math.PI / 2) * i;
  return [n, s - o, s + o, B - a, B + a];
}, lA = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, $r = function(A, e, t, r2, n) {
  var s = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return s.reduce(function(B, i) {
    var a = i[0], o = i[1], c = lA(t - a, r2 - o);
    return (n ? c < B.optimumDistance : c > B.optimumDistance) ? {
      optimumCorner: i,
      optimumDistance: c
    } : B;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, ra = function(A, e, t, r2, n) {
  var s = 0, B = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? s = B = Math.min(Math.abs(e), Math.abs(e - r2), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (s = Math.min(Math.abs(e), Math.abs(e - r2)), B = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        s = B = Math.min(lA(e, t), lA(e, t - n), lA(e - r2, t), lA(e - r2, t - n));
      else if (A.shape === 1) {
        var i = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r2)), a = $r(r2, n, e, t, true), o = a[0], c = a[1];
        s = lA(o - e, (c - t) / i), B = i * s;
      }
      break;
    case 1:
      A.shape === 0 ? s = B = Math.max(Math.abs(e), Math.abs(e - r2), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (s = Math.max(Math.abs(e), Math.abs(e - r2)), B = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (A.shape === 0)
        s = B = Math.max(lA(e, t), lA(e, t - n), lA(e - r2, t), lA(e - r2, t - n));
      else if (A.shape === 1) {
        var i = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r2)), l = $r(r2, n, e, t, false), o = l[0], c = l[1];
        s = lA(o - e, (c - t) / i), B = i * s;
      }
      break;
  }
  return Array.isArray(A.size) && (s = S(A.size[0], r2), B = A.size.length === 2 ? S(A.size[1], n) : s), [s, B];
}, na = function(A, e) {
  var t = iA(180), r2 = [];
  return UA(e).forEach(function(n, s) {
    if (s === 0) {
      var B = n[0];
      if (B.type === 20 && B.value === "to") {
        t = is(n);
        return;
      } else if (Bs(B)) {
        t = ft.parse(A, B);
        return;
      }
    }
    var i = Ct(A, n);
    r2.push(i);
  }), {
    angle: t,
    stops: r2,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ke = function(A, e) {
  var t = iA(180), r2 = [];
  return UA(e).forEach(function(n, s) {
    if (s === 0) {
      var B = n[0];
      if (B.type === 20 && ["top", "left", "right", "bottom"].indexOf(B.value) !== -1) {
        t = is(n);
        return;
      } else if (Bs(B)) {
        t = (ft.parse(A, B) + iA(270)) % iA(360);
        return;
      }
    }
    var i = Ct(A, n);
    r2.push(i);
  }), {
    angle: t,
    stops: r2,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, sa = function(A, e) {
  var t = iA(180), r2 = [], n = 1, s = 0, B = 3, i = [];
  return UA(e).forEach(function(a, o) {
    var c = a[0];
    if (o === 0) {
      if (D(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (D(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = SA.parse(A, c.values[0]);
        r2.push({ stop: Y, color: l });
      } else if (c.name === "to") {
        var l = SA.parse(A, c.values[0]);
        r2.push({ stop: xA, color: l });
      } else if (c.name === "color-stop") {
        var g = c.values.filter(te);
        if (g.length === 2) {
          var l = SA.parse(A, g[1]), U = g[0];
          re(U) && r2.push({
            stop: { type: 16, number: U.number * 100, flags: U.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + iA(180)) % iA(360),
    stops: r2,
    type: n
  } : { size: B, shape: s, stops: r2, position: i, type: n };
}, as = "closest-side", os = "farthest-side", cs = "closest-corner", ls = "farthest-corner", gs = "circle", us = "ellipse", ws = "cover", Qs = "contain", Ba = function(A, e) {
  var t = 0, r2 = 3, n = [], s = [];
  return UA(e).forEach(function(B, i) {
    var a = true;
    if (i === 0) {
      var o = false;
      a = B.reduce(function(l, g) {
        if (o)
          if (D(g))
            switch (g.value) {
              case "center":
                return s.push(hr), l;
              case "top":
              case "left":
                return s.push(Y), l;
              case "right":
              case "bottom":
                return s.push(xA), l;
            }
          else (P(g) || OA(g)) && s.push(g);
        else if (D(g))
          switch (g.value) {
            case gs:
              return t = 0, false;
            case us:
              return t = 1, false;
            case "at":
              return o = true, false;
            case as:
              return r2 = 0, false;
            case ws:
            case os:
              return r2 = 1, false;
            case Qs:
            case cs:
              return r2 = 2, false;
            case ls:
              return r2 = 3, false;
          }
        else if (OA(g) || P(g))
          return Array.isArray(r2) || (r2 = []), r2.push(g), false;
        return l;
      }, a);
    }
    if (a) {
      var c = Ct(A, B);
      n.push(c);
    }
  }), {
    size: r2,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, _e = function(A, e) {
  var t = 0, r2 = 3, n = [], s = [];
  return UA(e).forEach(function(B, i) {
    var a = true;
    if (i === 0 ? a = B.reduce(function(c, l) {
      if (D(l))
        switch (l.value) {
          case "center":
            return s.push(hr), false;
          case "top":
          case "left":
            return s.push(Y), false;
          case "right":
          case "bottom":
            return s.push(xA), false;
        }
      else if (P(l) || OA(l))
        return s.push(l), false;
      return c;
    }, a) : i === 1 && (a = B.reduce(function(c, l) {
      if (D(l))
        switch (l.value) {
          case gs:
            return t = 0, false;
          case us:
            return t = 1, false;
          case Qs:
          case as:
            return r2 = 0, false;
          case os:
            return r2 = 1, false;
          case cs:
            return r2 = 2, false;
          case ws:
          case ls:
            return r2 = 3, false;
        }
      else if (OA(l) || P(l))
        return Array.isArray(r2) || (r2 = []), r2.push(l), false;
      return c;
    }, a)), a) {
      var o = Ct(A, B);
      n.push(o);
    }
  }), {
    size: r2,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, ia = function(A) {
  return A.type === 1;
}, aa = function(A) {
  return A.type === 2;
}, dr = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r2 = fs[e.name];
      if (typeof r2 > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r2(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function oa(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!fs[A.name]);
}
var fs = {
  "linear-gradient": na,
  "-moz-linear-gradient": ke,
  "-ms-linear-gradient": ke,
  "-o-linear-gradient": ke,
  "-webkit-linear-gradient": ke,
  "radial-gradient": Ba,
  "-moz-radial-gradient": _e,
  "-ms-radial-gradient": _e,
  "-o-radial-gradient": _e,
  "-webkit-radial-gradient": _e,
  "-webkit-gradient": sa
}, ca = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r2) {
      return te(r2) && oa(r2);
    }).map(function(r2) {
      return dr.parse(A, r2);
    });
  }
}, la = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (D(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, ga = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    return UA(e).map(function(t) {
      return t.filter(P);
    }).map(es);
  }
}, ua = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return UA(e).map(function(t) {
      return t.filter(D).map(function(r2) {
        return r2.value;
      }).join(" ");
    }).map(wa);
  }
}, wa = function(A) {
  switch (A) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, ee;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(ee || (ee = {}));
var Qa = {
  name: "background-size",
  initialValue: "0",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return UA(e).map(function(t) {
      return t.filter(fa);
    });
  }
}, fa = function(A) {
  return D(A) || P(A);
}, Ut = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  };
}, Ca = Ut("top"), Ua = Ut("right"), Fa = Ut("bottom"), ha = Ut("left"), Ft = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: false,
    type: 1,
    parse: function(e, t) {
      return es(t.filter(P));
    }
  };
}, da = Ft("top-left"), pa = Ft("top-right"), Ea = Ft("bottom-right"), Ha = Ft("bottom-left"), ht = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: false,
    type: 2,
    parse: function(e, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, va = ht("top"), Ia = ht("right"), ma = ht("bottom"), ya = ht("left"), dt = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(e, t) {
      return Ie(t) ? t.number : 0;
    }
  };
}, La = dt("top"), Ka = dt("right"), ba = dt("bottom"), xa = dt("left"), Da = {
  name: "color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
}, Sa = {
  name: "direction",
  initialValue: "ltr",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Ta = {
  name: "display",
  initialValue: "inline-block",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.filter(D).reduce(
      function(t, r2) {
        return t | Ma(r2.value);
      },
      0
      /* NONE */
    );
  }
}, Ma = function(A) {
  switch (A) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, Oa = {
  name: "float",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, Ra = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: false,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, nt;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(nt || (nt = {}));
var Ga = {
  name: "line-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return nt.STRICT;
      case "normal":
      default:
        return nt.NORMAL;
    }
  }
}, Va = {
  name: "line-height",
  initialValue: "normal",
  prefix: false,
  type: 4
  /* TOKEN_VALUE */
}, An = function(A, e) {
  return D(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : P(A) ? S(A, e) : e;
}, Na = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: false,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : dr.parse(A, e);
  }
}, Pa = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, or = {
  name: "list-style-type",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, pt = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: false,
    type: 4
    /* TOKEN_VALUE */
  };
}, ka = pt("top"), _a = pt("right"), Xa = pt("bottom"), Ja = pt("left"), Wa = {
  name: "overflow",
  initialValue: "visible",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.filter(D).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, Ya = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Et = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length-percentage"
  };
}, Za = Et("top"), ja = Et("right"), qa = Et("bottom"), za = Et("left"), $a = {
  name: "text-align",
  initialValue: "left",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Ao = {
  name: "position",
  initialValue: "static",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, eo = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    return e.length === 1 && ar(e[0], "none") ? [] : UA(e).map(function(t) {
      for (var r2 = {
        color: HA.TRANSPARENT,
        offsetX: Y,
        offsetY: Y,
        blur: Y
      }, n = 0, s = 0; s < t.length; s++) {
        var B = t[s];
        OA(B) ? (n === 0 ? r2.offsetX = B : n === 1 ? r2.offsetY = B : r2.blur = B, n++) : r2.color = SA.parse(A, B);
      }
      return r2;
    });
  }
}, to = {
  name: "text-transform",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, ro = {
  name: "transform",
  initialValue: "none",
  prefix: true,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = Bo[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, no = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, so = function(A) {
  var e = A.filter(function(a) {
    return a.type === 17;
  }).map(function(a) {
    return a.number;
  }), t = e[0], r2 = e[1];
  e[2], e[3];
  var n = e[4], s = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var B = e[12], i = e[13];
  return e[14], e[15], e.length === 16 ? [t, r2, n, s, B, i] : null;
}, Bo = {
  matrix: no,
  matrix3d: so
}, en = {
  type: 16,
  number: 50,
  flags: ve
}, io = [en, en], ao = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: true,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(P);
    return t.length !== 2 ? io : [t[0], t[1]];
  }
}, oo = {
  name: "visible",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Fe;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Fe || (Fe = {}));
var co = {
  name: "word-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return Fe.BREAK_ALL;
      case "keep-all":
        return Fe.KEEP_ALL;
      case "normal":
      default:
        return Fe.NORMAL;
    }
  }
}, lo = {
  name: "z-index",
  initialValue: "auto",
  prefix: false,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: true, order: 0 };
    if (re(e))
      return { auto: false, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Cs = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, go = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: false,
  parse: function(A, e) {
    return re(e) ? e.number : 1;
  }
}, uo = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
}, wo = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.filter(D).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Qo = {
  name: "font-family",
  initialValue: "",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    var t = [], r2 = [];
    return e.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r2.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r2.push(t.join(" ")), r2.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, fo = {
  name: "font-size",
  initialValue: "0",
  prefix: false,
  type: 3,
  format: "length"
}, Co = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: false,
  parse: function(A, e) {
    if (re(e))
      return e.number;
    if (D(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Uo = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    return e.filter(D).map(function(t) {
      return t.value;
    });
  }
}, Fo = {
  name: "font-style",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, _ = function(A, e) {
  return (A & e) !== 0;
}, ho = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, po = {
  name: "counter-increment",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r2 = [], n = e.filter(As), s = 0; s < n.length; s++) {
      var B = n[s], i = n[s + 1];
      if (B.type === 20) {
        var a = i && re(i) ? i.number : 1;
        r2.push({ counter: B.value, increment: a });
      }
    }
    return r2;
  }
}, Eo = {
  name: "counter-reset",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r2 = e.filter(As), n = 0; n < r2.length; n++) {
      var s = r2[n], B = r2[n + 1];
      if (D(s) && s.value !== "none") {
        var i = B && re(B) ? B.number : 0;
        t.push({ counter: s.value, reset: i });
      }
    }
    return t;
  }
}, Ho = {
  name: "duration",
  initialValue: "0s",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    return e.filter(Ie).map(function(t) {
      return Cs.parse(A, t);
    });
  }
}, vo = {
  name: "quotes",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r2 = [], n = e.filter(ji);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var B = n[s].value, i = n[s + 1].value;
      r2.push({ open: B, close: i });
    }
    return r2;
  }
}, tn = function(A, e, t) {
  if (!A)
    return "";
  var r2 = A[Math.min(e, A.length - 1)];
  return r2 ? t ? r2.open : r2.close : "";
}, Io = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(A, e) {
    return e.length === 1 && ar(e[0], "none") ? [] : UA(e).map(function(t) {
      for (var r2 = {
        color: 255,
        offsetX: Y,
        offsetY: Y,
        blur: Y,
        spread: Y,
        inset: false
      }, n = 0, s = 0; s < t.length; s++) {
        var B = t[s];
        ar(B, "inset") ? r2.inset = true : OA(B) ? (n === 0 ? r2.offsetX = B : n === 1 ? r2.offsetY = B : n === 2 ? r2.blur = B : r2.spread = B, n++) : r2.color = SA.parse(A, B);
      }
      return r2;
    });
  }
}, mo = {
  name: "paint-order",
  initialValue: "normal",
  prefix: false,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r2 = [];
    return e.filter(D).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r2.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r2.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r2.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r2.indexOf(n) === -1 && r2.push(n);
    }), r2;
  }
}, yo = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: false,
  type: 3,
  format: "color"
}, Lo = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: false,
  parse: function(A, e) {
    return Ie(e) ? e.number : 0;
  }
}, Ko = (
  /** @class */
  (function() {
    function A(e, t) {
      var r2, n;
      this.animationDuration = p(e, Ho, t.animationDuration), this.backgroundClip = p(e, $i, t.backgroundClip), this.backgroundColor = p(e, Aa, t.backgroundColor), this.backgroundImage = p(e, ca, t.backgroundImage), this.backgroundOrigin = p(e, la, t.backgroundOrigin), this.backgroundPosition = p(e, ga, t.backgroundPosition), this.backgroundRepeat = p(e, ua, t.backgroundRepeat), this.backgroundSize = p(e, Qa, t.backgroundSize), this.borderTopColor = p(e, Ca, t.borderTopColor), this.borderRightColor = p(e, Ua, t.borderRightColor), this.borderBottomColor = p(e, Fa, t.borderBottomColor), this.borderLeftColor = p(e, ha, t.borderLeftColor), this.borderTopLeftRadius = p(e, da, t.borderTopLeftRadius), this.borderTopRightRadius = p(e, pa, t.borderTopRightRadius), this.borderBottomRightRadius = p(e, Ea, t.borderBottomRightRadius), this.borderBottomLeftRadius = p(e, Ha, t.borderBottomLeftRadius), this.borderTopStyle = p(e, va, t.borderTopStyle), this.borderRightStyle = p(e, Ia, t.borderRightStyle), this.borderBottomStyle = p(e, ma, t.borderBottomStyle), this.borderLeftStyle = p(e, ya, t.borderLeftStyle), this.borderTopWidth = p(e, La, t.borderTopWidth), this.borderRightWidth = p(e, Ka, t.borderRightWidth), this.borderBottomWidth = p(e, ba, t.borderBottomWidth), this.borderLeftWidth = p(e, xa, t.borderLeftWidth), this.boxShadow = p(e, Io, t.boxShadow), this.color = p(e, Da, t.color), this.direction = p(e, Sa, t.direction), this.display = p(e, Ta, t.display), this.float = p(e, Oa, t.cssFloat), this.fontFamily = p(e, Qo, t.fontFamily), this.fontSize = p(e, fo, t.fontSize), this.fontStyle = p(e, Fo, t.fontStyle), this.fontVariant = p(e, Uo, t.fontVariant), this.fontWeight = p(e, Co, t.fontWeight), this.letterSpacing = p(e, Ra, t.letterSpacing), this.lineBreak = p(e, Ga, t.lineBreak), this.lineHeight = p(e, Va, t.lineHeight), this.listStyleImage = p(e, Na, t.listStyleImage), this.listStylePosition = p(e, Pa, t.listStylePosition), this.listStyleType = p(e, or, t.listStyleType), this.marginTop = p(e, ka, t.marginTop), this.marginRight = p(e, _a, t.marginRight), this.marginBottom = p(e, Xa, t.marginBottom), this.marginLeft = p(e, Ja, t.marginLeft), this.opacity = p(e, go, t.opacity);
      var s = p(e, Wa, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = p(e, Ya, t.overflowWrap), this.paddingTop = p(e, Za, t.paddingTop), this.paddingRight = p(e, ja, t.paddingRight), this.paddingBottom = p(e, qa, t.paddingBottom), this.paddingLeft = p(e, za, t.paddingLeft), this.paintOrder = p(e, mo, t.paintOrder), this.position = p(e, Ao, t.position), this.textAlign = p(e, $a, t.textAlign), this.textDecorationColor = p(e, uo, (r2 = t.textDecorationColor) !== null && r2 !== void 0 ? r2 : t.color), this.textDecorationLine = p(e, wo, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = p(e, eo, t.textShadow), this.textTransform = p(e, to, t.textTransform), this.transform = p(e, ro, t.transform), this.transformOrigin = p(e, ao, t.transformOrigin), this.visibility = p(e, oo, t.visibility), this.webkitTextStrokeColor = p(e, yo, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = p(e, Lo, t.webkitTextStrokeWidth), this.wordBreak = p(e, co, t.wordBreak), this.zIndex = p(e, lo, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return TA(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return _(
        this.display,
        4
        /* INLINE */
      ) || _(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || _(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || _(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || _(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || _(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  })()
), bo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = p(e, ho, t.content), this.quotes = p(e, vo, t.quotes);
    }
    return A;
  })()
), rn = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = p(e, po, t.counterIncrement), this.counterReset = p(e, Eo, t.counterReset);
    }
    return A;
  })()
), p = function(A, e, t) {
  var r2 = new zn(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r2.write(n);
  var s = new $n(r2.read());
  switch (e.type) {
    case 2:
      var B = s.parseComponentValue();
      return e.parse(A, D(B) ? B.value : e.initialValue);
    case 0:
      return e.parse(A, s.parseComponentValue());
    case 1:
      return e.parse(A, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return ft.parse(A, s.parseComponentValue());
        case "color":
          return SA.parse(A, s.parseComponentValue());
        case "image":
          return dr.parse(A, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return OA(i) ? i : Y;
        case "length-percentage":
          var a = s.parseComponentValue();
          return P(a) ? a : Y;
        case "time":
          return Cs.parse(A, s.parseComponentValue());
      }
      break;
  }
}, xo = "data-html2canvas-debug", Do = function(A) {
  var e = A.getAttribute(xo);
  switch (e) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, cr = function(A, e) {
  var t = Do(A);
  return t === 1 || e === t;
}, FA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, cr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Ko(e, window.getComputedStyle(t, null)), ur(t) && (this.styles.animationDuration.some(function(r2) {
        return r2 > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = wt(this.context, t), cr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  })()
), So = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", we = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xe = 0; Xe < nn.length; Xe++)
  we[nn.charCodeAt(Xe)] = Xe;
var To = function(A) {
  var e = A.length * 0.75, t = A.length, r2, n = 0, s, B, i, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r2 = 0; r2 < t; r2 += 4)
    s = we[A.charCodeAt(r2)], B = we[A.charCodeAt(r2 + 1)], i = we[A.charCodeAt(r2 + 2)], a = we[A.charCodeAt(r2 + 3)], c[n++] = s << 2 | B >> 4, c[n++] = (B & 15) << 4 | i >> 2, c[n++] = (i & 3) << 6 | a & 63;
  return o;
}, Mo = function(A) {
  for (var e = A.length, t = [], r2 = 0; r2 < e; r2 += 2)
    t.push(A[r2 + 1] << 8 | A[r2]);
  return t;
}, Oo = function(A) {
  for (var e = A.length, t = [], r2 = 0; r2 < e; r2 += 4)
    t.push(A[r2 + 3] << 24 | A[r2 + 2] << 16 | A[r2 + 1] << 8 | A[r2]);
  return t;
}, kA = 5, pr = 11, Tt = 2, Ro = pr - kA, Us = 65536 >> kA, Go = 1 << kA, Mt = Go - 1, Vo = 1024 >> kA, No = Us + Vo, Po = No, ko = 32, _o = Po + ko, Xo = 65536 >> pr, Jo = 1 << Ro, Wo = Jo - 1, sn = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Yo = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Zo = function(A, e) {
  var t = To(A), r2 = Array.isArray(t) ? Oo(t) : new Uint32Array(t), n = Array.isArray(t) ? Mo(t) : new Uint16Array(t), s = 24, B = sn(n, s / 2, r2[4] / 2), i = r2[5] === 2 ? sn(n, (s + r2[4]) / 2) : Yo(r2, Math.ceil((s + r2[4]) / 4));
  return new jo(r2[0], r2[1], r2[2], r2[3], B, i);
}, jo = (
  /** @class */
  (function() {
    function A(e, t, r2, n, s, B) {
      this.initialValue = e, this.errorValue = t, this.highStart = r2, this.highValueIndex = n, this.index = s, this.data = B;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> kA], t = (t << Tt) + (e & Mt), this.data[t];
        if (e <= 65535)
          return t = this.index[Us + (e - 55296 >> kA)], t = (t << Tt) + (e & Mt), this.data[t];
        if (e < this.highStart)
          return t = _o - Xo + (e >> pr), t = this.index[t], t += e >> kA & Wo, t = this.index[t], t = (t << Tt) + (e & Mt), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })()
), Bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Je = 0; Je < Bn.length; Je++)
  qo[Bn.charCodeAt(Je)] = Je;
var zo = 1, Ot = 2, Rt = 3, an = 4, on = 5, $o = 7, cn = 8, Gt = 9, Vt = 10, ln = 11, gn = 12, un = 13, wn = 14, Nt = 15, Ac = function(A) {
  for (var e = [], t = 0, r2 = A.length; t < r2; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r2) {
      var s = A.charCodeAt(t++);
      (s & 64512) === 56320 ? e.push(((n & 1023) << 10) + (s & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, ec = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r2 = [], n = -1, s = ""; ++n < t; ) {
    var B = A[n];
    B <= 65535 ? r2.push(B) : (B -= 65536, r2.push((B >> 10) + 55296, B % 1024 + 56320)), (n + 1 === t || r2.length > 16384) && (s += String.fromCharCode.apply(String, r2), r2.length = 0);
  }
  return s;
}, tc = Zo(So), sA = "×", Pt = "÷", rc = function(A) {
  return tc.get(A);
}, nc = function(A, e, t) {
  var r2 = t - 2, n = e[r2], s = e[t - 1], B = e[t];
  if (s === Ot && B === Rt)
    return sA;
  if (s === Ot || s === Rt || s === an || B === Ot || B === Rt || B === an)
    return Pt;
  if (s === cn && [cn, Gt, ln, gn].indexOf(B) !== -1 || (s === ln || s === Gt) && (B === Gt || B === Vt) || (s === gn || s === Vt) && B === Vt || B === un || B === on || B === $o || s === zo)
    return sA;
  if (s === un && B === wn) {
    for (; n === on; )
      n = e[--r2];
    if (n === wn)
      return sA;
  }
  if (s === Nt && B === Nt) {
    for (var i = 0; n === Nt; )
      i++, n = e[--r2];
    if (i % 2 === 0)
      return sA;
  }
  return Pt;
}, sc = function(A) {
  var e = Ac(A), t = e.length, r2 = 0, n = 0, s = e.map(rc);
  return {
    next: function() {
      if (r2 >= t)
        return { done: true, value: null };
      for (var B = sA; r2 < t && (B = nc(e, s, ++r2)) === sA; )
        ;
      if (B !== sA || r2 === t) {
        var i = ec.apply(null, e.slice(n, r2));
        return n = r2, { value: i, done: false };
      }
      return { done: true, value: null };
    }
  };
}, Bc = function(A) {
  for (var e = sc(A), t = [], r2; !(r2 = e.next()).done; )
    r2.value && t.push(r2.value.slice());
  return t;
}, ic = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r2 = A.createElement("boundtest");
      r2.style.height = e + "px", r2.style.display = "block", A.body.appendChild(r2), t.selectNode(r2);
      var n = t.getBoundingClientRect(), s = Math.round(n.height);
      if (A.body.removeChild(r2), s === e)
        return true;
    }
  }
  return false;
}, ac = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r2 = e.firstChild, n = Qt(r2.data).map(function(a) {
    return G(a);
  }), s = 0, B = {}, i = n.every(function(a, o) {
    t.setStart(r2, s), t.setEnd(r2, s + a.length);
    var c = t.getBoundingClientRect();
    s += a.length;
    var l = c.x > B.x || c.y > B.y;
    return B = c, o === 0 ? true : l;
  });
  return A.body.removeChild(e), i;
}, oc = function() {
  return typeof new Image().crossOrigin < "u";
}, cc = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, lc = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r2 = t.getContext("2d");
  if (!r2)
    return false;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r2.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return false;
  }
  return true;
}, Qn = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, gc = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r2 = e.getContext("2d");
  if (!r2)
    return Promise.reject(false);
  r2.fillStyle = "rgb(0, 255, 0)", r2.fillRect(0, 0, t, t);
  var n = new Image(), s = e.toDataURL();
  n.src = s;
  var B = lr(t, t, 0, 0, n);
  return r2.fillStyle = "red", r2.fillRect(0, 0, t, t), fn(B).then(function(i) {
    r2.drawImage(i, 0, 0);
    var a = r2.getImageData(0, 0, t, t).data;
    r2.fillStyle = "red", r2.fillRect(0, 0, t, t);
    var o = A.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", Qn(a) ? fn(lr(t, t, 0, 0, o)) : Promise.reject(false);
  }).then(function(i) {
    return r2.drawImage(i, 0, 0), Qn(r2.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return false;
  });
}, lr = function(A, e, t, r2, n) {
  var s = "http://www.w3.org/2000/svg", B = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return B.setAttributeNS(null, "width", A.toString()), B.setAttributeNS(null, "height", e.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r2.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), B.appendChild(i), i.appendChild(n), B;
}, fn = function(A) {
  return new Promise(function(e, t) {
    var r2 = new Image();
    r2.onload = function() {
      return e(r2);
    }, r2.onerror = t, r2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, W = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = ic(document);
    return Object.defineProperty(W, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = W.SUPPORT_RANGE_BOUNDS && ac(document);
    return Object.defineProperty(W, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = lc(document);
    return Object.defineProperty(W, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? gc(document) : Promise.resolve(false);
    return Object.defineProperty(W, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = oc();
    return Object.defineProperty(W, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = cc();
    return Object.defineProperty(W, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(W, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(W, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, he = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })()
), uc = function(A, e, t, r2) {
  var n = fc(e, t), s = [], B = 0;
  return n.forEach(function(i) {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (W.SUPPORT_RANGE_BOUNDS) {
        var a = Cn(r2, B, i.length).getClientRects();
        if (a.length > 1) {
          var o = Er(i), c = 0;
          o.forEach(function(g) {
            s.push(new he(g, vA.fromDOMRectList(A, Cn(r2, c + B, g.length).getClientRects()))), c += g.length;
          });
        } else
          s.push(new he(i, vA.fromDOMRectList(A, a)));
      } else {
        var l = r2.splitText(i.length);
        s.push(new he(i, wc(A, r2))), r2 = l;
      }
    else W.SUPPORT_RANGE_BOUNDS || (r2 = r2.splitText(i.length));
    B += i.length;
  }), s;
}, wc = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r2 = t.createElement("html2canvaswrapper");
    r2.appendChild(e.cloneNode(true));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r2, e);
      var s = wt(A, r2);
      return r2.firstChild && n.replaceChild(r2.firstChild, r2), s;
    }
  }
  return vA.EMPTY;
}, Cn = function(A, e, t) {
  var r2 = A.ownerDocument;
  if (!r2)
    throw new Error("Node has no owner document");
  var n = r2.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, Er = function(A) {
  if (W.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return Bc(A);
}, Qc = function(A, e) {
  if (W.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r2) {
      return r2.segment;
    });
  }
  return Uc(A, e);
}, fc = function(A, e) {
  return e.letterSpacing !== 0 ? Er(A) : Qc(A, e);
}, Cc = [32, 160, 4961, 65792, 65793, 4153, 4241], Uc = function(A, e) {
  for (var t = _B(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r2 = [], n, s = function() {
    if (n.value) {
      var B = n.value.slice(), i = Qt(B), a = "";
      i.forEach(function(o) {
        Cc.indexOf(o) === -1 ? a += G(o) : (a.length && r2.push(a), r2.push(G(o)), a = "");
      }), a.length && r2.push(a);
    }
  }; !(n = t.next()).done; )
    s();
  return r2;
}, Fc = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t, r2) {
      this.text = hc(t.data, r2.textTransform), this.textBounds = uc(e, this.text, r2, t);
    }
    return A;
  })()
), hc = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(dc, pc);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, dc = /(^|\s|:|-|\(|\))([a-z])/g, pc = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, Fs = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.src = r2.currentSrc || r2.src, n.intrinsicWidth = r2.naturalWidth, n.intrinsicHeight = r2.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(FA)
), hs = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.canvas = r2, n.intrinsicWidth = r2.width, n.intrinsicHeight = r2.height, n;
    }
    return e;
  })(FA)
), ds = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this, s = new XMLSerializer(), B = wt(t, r2);
      return r2.setAttribute("width", B.width + "px"), r2.setAttribute("height", B.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r2)), n.intrinsicWidth = r2.width.baseVal.value, n.intrinsicHeight = r2.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(FA)
), ps = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.value = r2.value, n;
    }
    return e;
  })(FA)
), gr = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.start = r2.start, n.reversed = typeof r2.reversed == "boolean" && r2.reversed === true, n;
    }
    return e;
  })(FA)
), Ec = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Hc = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], vc = function(A) {
  return A.width > A.height ? new vA(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new vA(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, Ic = function(A) {
  var e = A.type === mc ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, st = "checkbox", Bt = "radio", mc = "password", Un = 707406591, Hr = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      switch (n.type = r2.type.toLowerCase(), n.checked = r2.checked, n.value = Ic(r2), (n.type === st || n.type === Bt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = vc(n.bounds)), n.type) {
        case st:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Ec;
          break;
        case Bt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Hc;
          break;
      }
      return n;
    }
    return e;
  })(FA)
), Es = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this, s = r2.options[r2.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return e;
  })(FA)
), Hs = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.value = r2.value, n;
    }
    return e;
  })(FA)
), vs = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      n.src = r2.src, n.width = parseInt(r2.width, 10) || 0, n.height = parseInt(r2.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r2.contentWindow && r2.contentWindow.document && r2.contentWindow.document.documentElement) {
          n.tree = ms(t, r2.contentWindow.document.documentElement);
          var s = r2.contentWindow.document.documentElement ? Ue(t, getComputedStyle(r2.contentWindow.document.documentElement).backgroundColor) : HA.TRANSPARENT, B = r2.contentWindow.document.body ? Ue(t, getComputedStyle(r2.contentWindow.document.body).backgroundColor) : HA.TRANSPARENT;
          n.backgroundColor = TA(s) ? TA(B) ? n.styles.backgroundColor : B : s;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(FA)
), yc = ["OL", "UL", "MENU"], At = function(A, e, t, r2) {
  for (var n = e.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, ys(n) && n.data.trim().length > 0)
      t.textNodes.push(new Fc(A, n, t.styles));
    else if (Ae(n))
      if (xs(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(i) {
          return At(A, i, t, r2);
        });
      else {
        var B = Is(A, n);
        B.styles.isVisible() && (Lc(n, B, r2) ? B.flags |= 4 : Kc(B.styles) && (B.flags |= 2), yc.indexOf(n.tagName) !== -1 && (B.flags |= 8), t.elements.push(B), n.slot, n.shadowRoot ? At(A, n.shadowRoot, B, r2) : !it(n) && !Ls(n) && !at(n) && At(A, n, B, r2));
      }
}, Is = function(A, e) {
  return wr(e) ? new Fs(A, e) : Ks(e) ? new hs(A, e) : Ls(e) ? new ds(A, e) : bc(e) ? new ps(A, e) : xc(e) ? new gr(A, e) : Dc(e) ? new Hr(A, e) : at(e) ? new Es(A, e) : it(e) ? new Hs(A, e) : bs(e) ? new vs(A, e) : new FA(A, e);
}, ms = function(A, e) {
  var t = Is(A, e);
  return t.flags |= 4, At(A, e, t, t), t;
}, Lc = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || vr(A) && t.styles.isTransparent();
}, Kc = function(A) {
  return A.isPositioned() || A.isFloating();
}, ys = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Ae = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, ur = function(A) {
  return Ae(A) && typeof A.style < "u" && !et(A);
}, et = function(A) {
  return typeof A.className == "object";
}, bc = function(A) {
  return A.tagName === "LI";
}, xc = function(A) {
  return A.tagName === "OL";
}, Dc = function(A) {
  return A.tagName === "INPUT";
}, Sc = function(A) {
  return A.tagName === "HTML";
}, Ls = function(A) {
  return A.tagName === "svg";
}, vr = function(A) {
  return A.tagName === "BODY";
}, Ks = function(A) {
  return A.tagName === "CANVAS";
}, Fn = function(A) {
  return A.tagName === "VIDEO";
}, wr = function(A) {
  return A.tagName === "IMG";
}, bs = function(A) {
  return A.tagName === "IFRAME";
}, hn = function(A) {
  return A.tagName === "STYLE";
}, Tc = function(A) {
  return A.tagName === "SCRIPT";
}, it = function(A) {
  return A.tagName === "TEXTAREA";
}, at = function(A) {
  return A.tagName === "SELECT";
}, xs = function(A) {
  return A.tagName === "SLOT";
}, dn = function(A) {
  return A.tagName.indexOf("-") > 0;
}, Mc = (
  /** @class */
  (function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r2) {
        return t.counters[r2].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r2 = e.counterIncrement, n = e.counterReset, s = true;
      r2 !== null && r2.forEach(function(i) {
        var a = t.counters[i.counter];
        a && i.increment !== 0 && (s = false, a.length || a.push(1), a[Math.max(0, a.length - 1)] += i.increment);
      });
      var B = [];
      return s && n.forEach(function(i) {
        var a = t.counters[i.counter];
        B.push(i.counter), a || (a = t.counters[i.counter] = []), a.push(i.reset);
      }), B;
    }, A;
  })()
), pn = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, En = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, Oc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, Rc = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, WA = function(A, e, t, r2, n, s) {
  return A < e || A > t ? He(A, n, s.length > 0) : r2.integers.reduce(function(B, i, a) {
    for (; A >= i; )
      A -= i, B += r2.values[a];
    return B;
  }, "") + s;
}, Ds = function(A, e, t, r2) {
  var n = "";
  do
    t || A--, n = r2(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, R = function(A, e, t, r2, n) {
  var s = t - e + 1;
  return (A < 0 ? "-" : "") + (Ds(Math.abs(A), s, r2, function(B) {
    return G(Math.floor(B % s) + e);
  }) + n);
}, RA = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r2 = e.length;
  return Ds(Math.abs(A), r2, false, function(n) {
    return e[Math.floor(n % r2)];
  }) + t;
}, zA = 1, yA = 2, LA = 4, Qe = 8, EA = function(A, e, t, r2, n, s) {
  if (A < -9999 || A > 9999)
    return He(A, 4, n.length > 0);
  var B = Math.abs(A), i = n;
  if (B === 0)
    return e[0] + i;
  for (var a = 0; B > 0 && a <= 4; a++) {
    var o = B % 10;
    o === 0 && _(s, zA) && i !== "" ? i = e[o] + i : o > 1 || o === 1 && a === 0 || o === 1 && a === 1 && _(s, yA) || o === 1 && a === 1 && _(s, LA) && A > 100 || o === 1 && a > 1 && _(s, Qe) ? i = e[o] + (a > 0 ? t[a - 1] : "") + i : o === 1 && a > 0 && (i = t[a - 1] + i), B = Math.floor(B / 10);
  }
  return (A < 0 ? r2 : "") + i;
}, Hn = "十百千萬", vn = "拾佰仟萬", In = "マイナス", kt = "마이너스", He = function(A, e, t) {
  var r2 = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", B = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + B;
    case 1:
      return "◦" + B;
    case 2:
      return "◾" + B;
    case 5:
      var i = R(A, 48, 57, true, r2);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return RA(A, "〇一二三四五六七八九", n);
    case 6:
      return WA(A, 1, 3999, pn, 3, r2).toLowerCase();
    case 7:
      return WA(A, 1, 3999, pn, 3, r2);
    case 8:
      return R(A, 945, 969, false, r2);
    case 9:
      return R(A, 97, 122, false, r2);
    case 10:
      return R(A, 65, 90, false, r2);
    case 11:
      return R(A, 1632, 1641, true, r2);
    case 12:
    case 49:
      return WA(A, 1, 9999, En, 3, r2);
    case 35:
      return WA(A, 1, 9999, En, 3, r2).toLowerCase();
    case 13:
      return R(A, 2534, 2543, true, r2);
    case 14:
    case 30:
      return R(A, 6112, 6121, true, r2);
    case 15:
      return RA(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return RA(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return EA(A, "零一二三四五六七八九", Hn, "負", n, yA | LA | Qe);
    case 47:
      return EA(A, "零壹貳參肆伍陸柒捌玖", vn, "負", n, zA | yA | LA | Qe);
    case 42:
      return EA(A, "零一二三四五六七八九", Hn, "负", n, yA | LA | Qe);
    case 41:
      return EA(A, "零壹贰叁肆伍陆柒捌玖", vn, "负", n, zA | yA | LA | Qe);
    case 26:
      return EA(A, "〇一二三四五六七八九", "十百千万", In, n, 0);
    case 25:
      return EA(A, "零壱弐参四伍六七八九", "拾百千万", In, n, zA | yA | LA);
    case 31:
      return EA(A, "영일이삼사오육칠팔구", "십백천만", kt, s, zA | yA | LA);
    case 33:
      return EA(A, "零一二三四五六七八九", "十百千萬", kt, s, 0);
    case 32:
      return EA(A, "零壹貳參四五六七八九", "拾百千", kt, s, zA | yA | LA);
    case 18:
      return R(A, 2406, 2415, true, r2);
    case 20:
      return WA(A, 1, 19999, Rc, 3, r2);
    case 21:
      return R(A, 2790, 2799, true, r2);
    case 22:
      return R(A, 2662, 2671, true, r2);
    case 22:
      return WA(A, 1, 10999, Oc, 3, r2);
    case 23:
      return RA(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return RA(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return R(A, 3302, 3311, true, r2);
    case 28:
      return RA(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return RA(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return R(A, 3792, 3801, true, r2);
    case 37:
      return R(A, 6160, 6169, true, r2);
    case 38:
      return R(A, 4160, 4169, true, r2);
    case 39:
      return R(A, 2918, 2927, true, r2);
    case 40:
      return R(A, 1776, 1785, true, r2);
    case 43:
      return R(A, 3046, 3055, true, r2);
    case 44:
      return R(A, 3174, 3183, true, r2);
    case 45:
      return R(A, 3664, 3673, true, r2);
    case 46:
      return R(A, 3872, 3881, true, r2);
    case 3:
    default:
      return R(A, 48, 57, true, r2);
  }
}, Ss = "data-html2canvas-ignore", mn = (
  /** @class */
  (function() {
    function A(e, t, r2) {
      if (this.context = e, this.options = r2, this.scrolledElements = [], this.referenceElement = t, this.counters = new Mc(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r2 = this, n = Gc(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = e.defaultView.pageXOffset, B = e.defaultView.pageYOffset, i = n.contentWindow, a = i.document, o = Pc(n).then(function() {
        return q(r2, void 0, void 0, function() {
          var c, l;
          return Z(this, function(g) {
            switch (g.label) {
              case 0:
                return this.scrolledElements.forEach(Jc), i && (i.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (i.scrollY !== t.top || i.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Nc(a)] : [3, 4];
              case 3:
                g.sent(), g.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(a, l);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return a.open(), a.write(_c(document.doctype) + "<html></html>"), Xc(this.referenceElement.ownerDocument, s, B), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), o;
    }, A.prototype.createElementClone = function(e) {
      if (cr(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (Ks(e))
        return this.createCanvasClone(e);
      if (Fn(e))
        return this.createVideoClone(e);
      if (hn(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return wr(t) && (wr(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), dn(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return _t(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r2 = [].slice.call(t.cssRules, 0).reduce(function(s, B) {
            return B && typeof B.cssText == "string" ? s + B.cssText : s;
          }, ""), n = e.cloneNode(false);
          return n.textContent = r2, n;
        }
      } catch (s) {
        if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
          throw s;
      }
      return e.cloneNode(false);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r2 = e.ownerDocument.createElement("img");
        try {
          return r2.src = e.toDataURL(), r2;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(false);
      try {
        n.width = e.width, n.height = e.height;
        var s = e.getContext("2d"), B = n.getContext("2d");
        if (B)
          if (!this.options.allowTaint && s)
            B.putImageData(s.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var i = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (i) {
              var a = i.getContextAttributes();
              (a == null ? void 0 : a.preserveDrawingBuffer) === false && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            B.drawImage(e, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r2 = t.getContext("2d");
      try {
        return r2 && (r2.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r2.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r2) {
      (!Ae(t) || !Tc(t) && !t.hasAttribute(Ss) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ae(t) || !hn(t)) && e.appendChild(this.cloneNode(t, r2));
    }, A.prototype.cloneChildNodes = function(e, t, r2) {
      for (var n = this, s = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; s; s = s.nextSibling)
        if (Ae(s) && xs(s) && typeof s.assignedNodes == "function") {
          var B = s.assignedNodes();
          B.length && B.forEach(function(i) {
            return n.appendChildNode(t, i, r2);
          });
        } else
          this.appendChildNode(t, s, r2);
    }, A.prototype.cloneNode = function(e, t) {
      if (ys(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(false);
      var r2 = e.ownerDocument.defaultView;
      if (r2 && Ae(e) && (ur(e) || et(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var s = r2.getComputedStyle(e), B = r2.getComputedStyle(e, ":before"), i = r2.getComputedStyle(e, ":after");
        this.referenceElement === e && ur(n) && (this.clonedReferenceElement = n), vr(n) && Zc(n);
        var a = this.counters.parse(new rn(this.context, s)), o = this.resolvePseudoContent(e, n, B, de.BEFORE);
        dn(e) && (t = true), Fn(e) || this.cloneChildNodes(e, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(e, n, i, de.AFTER);
        return c && n.appendChild(c), this.counters.pop(a), (s && (this.options.copyStyles || et(e)) && !bs(e) || t) && _t(s, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (it(e) || at(e)) && (it(n) || at(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r2, n) {
      var s = this;
      if (r2) {
        var B = r2.content, i = t.ownerDocument;
        if (!(!i || !B || B === "none" || B === "-moz-alt-content" || r2.display === "none")) {
          this.counters.parse(new rn(this.context, r2));
          var a = new bo(this.context, r2), o = i.createElement("html2canvaspseudoelement");
          _t(r2, o), a.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(i.createTextNode(l.value));
            else if (l.type === 22) {
              var g = i.createElement("img");
              g.src = l.value, g.style.opacity = "1", o.appendChild(g);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var U = l.values.filter(D);
                U.length && o.appendChild(i.createTextNode(e.getAttribute(U[0].value) || ""));
              } else if (l.name === "counter") {
                var w = l.values.filter(te), f = w[0], I = w[1];
                if (f && D(f)) {
                  var h = s.counters.getCounterValue(f.value), Q = I && D(I) ? or.parse(s.context, I.value) : 3;
                  o.appendChild(i.createTextNode(He(h, Q, false)));
                }
              } else if (l.name === "counters") {
                var L = l.values.filter(te), f = L[0], F = L[1], I = L[2];
                if (f && D(f)) {
                  var v = s.counters.getCounterValues(f.value), u = I && D(I) ? or.parse(s.context, I.value) : 3, H = F && F.type === 0 ? F.value : "", m2 = v.map(function(M) {
                    return He(M, u, false);
                  }).join(H);
                  o.appendChild(i.createTextNode(m2));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(i.createTextNode(tn(a.quotes, s.quoteDepth++, true)));
                  break;
                case "close-quote":
                  o.appendChild(i.createTextNode(tn(a.quotes, --s.quoteDepth, false)));
                  break;
                default:
                  o.appendChild(i.createTextNode(l.value));
              }
          }), o.className = Qr + " " + fr;
          var c = n === de.BEFORE ? " " + Qr : " " + fr;
          return et(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })()
), de;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(de || (de = {}));
var Gc = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Ss, "true"), A.body.appendChild(t), t;
}, Vc = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, Nc = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(Vc));
}, Pc = function(A) {
  return new Promise(function(e, t) {
    var r2 = A.contentWindow;
    if (!r2)
      return t("No window assigned for iframe");
    var n = r2.document;
    r2.onload = A.onload = function() {
      r2.onload = A.onload = null;
      var s = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s), e(A));
      }, 50);
    };
  });
}, kc = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], _t = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r2 = A.item(t);
    kc.indexOf(r2) === -1 && e.style.setProperty(r2, A.getPropertyValue(r2));
  }
  return e;
}, _c = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, Xc = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, Jc = function(A) {
  var e = A[0], t = A[1], r2 = A[2];
  e.scrollLeft = t, e.scrollTop = r2;
}, Wc = ":before", Yc = ":after", Qr = "___html2canvas___pseudoelement_before", fr = "___html2canvas___pseudoelement_after", yn = `{
    content: "" !important;
    display: none !important;
}`, Zc = function(A) {
  jc(A, "." + Qr + Wc + yn + `
         .` + fr + Yc + yn);
}, jc = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r2 = t.createElement("style");
    r2.textContent = e, A.appendChild(r2);
  }
}, Ts = (
  /** @class */
  (function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  })()
), qc = (
  /** @class */
  (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Jt(e) || el(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return q(this, void 0, void 0, function() {
        var t, r2, n, s, B = this;
        return Z(this, function(i) {
          switch (i.label) {
            case 0:
              return t = Ts.isSameOrigin(e), r2 = !Xt(e) && this._options.useCORS === true && W.SUPPORT_CORS_IMAGES && !t, n = !Xt(e) && !t && !Jt(e) && typeof this._options.proxy == "string" && W.SUPPORT_CORS_XHR && !r2, !t && this._options.allowTaint === false && !Xt(e) && !Jt(e) && !n && !r2 ? [
                2
                /*return*/
              ] : (s = e, n ? [4, this.proxy(s)] : [3, 2]);
            case 1:
              s = i.sent(), i.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(a, o) {
                var c = new Image();
                c.onload = function() {
                  return a(c);
                }, c.onerror = o, (tl(s) || r2) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === true && setTimeout(function() {
                  return a(c);
                }, 500), B._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + B._options.imageTimeout + "ms) loading image");
                }, B._options.imageTimeout);
              })];
            case 3:
              return [2, i.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r2 = this._options.proxy;
      if (!r2)
        throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(s, B) {
        var i = W.SUPPORT_RESPONSE_TYPE ? "blob" : "text", a = new XMLHttpRequest();
        a.onload = function() {
          if (a.status === 200)
            if (i === "text")
              s(a.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return s(l.result);
              }, false), l.addEventListener("error", function(g) {
                return B(g);
              }, false), l.readAsDataURL(a.response);
            }
          else
            B("Failed to proxy resource " + n + " with status code " + a.status);
        }, a.onerror = B;
        var o = r2.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r2 + o + "url=" + encodeURIComponent(e) + "&responseType=" + i), i !== "text" && a instanceof XMLHttpRequest && (a.responseType = i), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          a.timeout = c, a.ontimeout = function() {
            return B("Timed out (" + c + "ms) proxying " + n);
          };
        }
        a.send();
      });
    }, A;
  })()
), zc = /^data:image\/svg\+xml/i, $c = /^data:image\/.*;base64,/i, Al = /^data:image\/.*/i, el = function(A) {
  return W.SUPPORT_SVG_DRAWING || !rl(A);
}, Xt = function(A) {
  return Al.test(A);
}, tl = function(A) {
  return $c.test(A);
}, Jt = function(A) {
  return A.substr(0, 4) === "blob";
}, rl = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || zc.test(A);
}, d = (
  /** @class */
  (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })()
), YA = function(A, e, t) {
  return new d(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, We = (
  /** @class */
  (function() {
    function A(e, t, r2, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r2, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r2 = YA(this.start, this.startControl, e), n = YA(this.startControl, this.endControl, e), s = YA(this.endControl, this.end, e), B = YA(r2, n, e), i = YA(n, s, e), a = YA(B, i, e);
      return t ? new A(this.start, r2, B, a) : new A(a, i, s, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })()
), BA = function(A) {
  return A.type === 1;
}, nl = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r2 = e.bounds, n = ue(t.borderTopLeftRadius, r2.width, r2.height), s = n[0], B = n[1], i = ue(t.borderTopRightRadius, r2.width, r2.height), a = i[0], o = i[1], c = ue(t.borderBottomRightRadius, r2.width, r2.height), l = c[0], g = c[1], U = ue(t.borderBottomLeftRadius, r2.width, r2.height), w = U[0], f = U[1], I = [];
      I.push((s + a) / r2.width), I.push((w + l) / r2.width), I.push((B + f) / r2.height), I.push((o + g) / r2.height);
      var h = Math.max.apply(Math, I);
      h > 1 && (s /= h, B /= h, a /= h, o /= h, l /= h, g /= h, w /= h, f /= h);
      var Q = r2.width - a, L = r2.height - g, F = r2.width - l, v = r2.height - f, u = t.borderTopWidth, H = t.borderRightWidth, m2 = t.borderBottomWidth, E = t.borderLeftWidth, b = S(t.paddingTop, e.bounds.width), M = S(t.paddingRight, e.bounds.width), V = S(t.paddingBottom, e.bounds.width), y = S(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || B > 0 ? O(r2.left + E / 3, r2.top + u / 3, s - E / 3, B - u / 3, x.TOP_LEFT) : new d(r2.left + E / 3, r2.top + u / 3), this.topRightBorderDoubleOuterBox = s > 0 || B > 0 ? O(r2.left + Q, r2.top + u / 3, a - H / 3, o - u / 3, x.TOP_RIGHT) : new d(r2.left + r2.width - H / 3, r2.top + u / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || g > 0 ? O(r2.left + F, r2.top + L, l - H / 3, g - m2 / 3, x.BOTTOM_RIGHT) : new d(r2.left + r2.width - H / 3, r2.top + r2.height - m2 / 3), this.bottomLeftBorderDoubleOuterBox = w > 0 || f > 0 ? O(r2.left + E / 3, r2.top + v, w - E / 3, f - m2 / 3, x.BOTTOM_LEFT) : new d(r2.left + E / 3, r2.top + r2.height - m2 / 3), this.topLeftBorderDoubleInnerBox = s > 0 || B > 0 ? O(r2.left + E * 2 / 3, r2.top + u * 2 / 3, s - E * 2 / 3, B - u * 2 / 3, x.TOP_LEFT) : new d(r2.left + E * 2 / 3, r2.top + u * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || B > 0 ? O(r2.left + Q, r2.top + u * 2 / 3, a - H * 2 / 3, o - u * 2 / 3, x.TOP_RIGHT) : new d(r2.left + r2.width - H * 2 / 3, r2.top + u * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || g > 0 ? O(r2.left + F, r2.top + L, l - H * 2 / 3, g - m2 * 2 / 3, x.BOTTOM_RIGHT) : new d(r2.left + r2.width - H * 2 / 3, r2.top + r2.height - m2 * 2 / 3), this.bottomLeftBorderDoubleInnerBox = w > 0 || f > 0 ? O(r2.left + E * 2 / 3, r2.top + v, w - E * 2 / 3, f - m2 * 2 / 3, x.BOTTOM_LEFT) : new d(r2.left + E * 2 / 3, r2.top + r2.height - m2 * 2 / 3), this.topLeftBorderStroke = s > 0 || B > 0 ? O(r2.left + E / 2, r2.top + u / 2, s - E / 2, B - u / 2, x.TOP_LEFT) : new d(r2.left + E / 2, r2.top + u / 2), this.topRightBorderStroke = s > 0 || B > 0 ? O(r2.left + Q, r2.top + u / 2, a - H / 2, o - u / 2, x.TOP_RIGHT) : new d(r2.left + r2.width - H / 2, r2.top + u / 2), this.bottomRightBorderStroke = l > 0 || g > 0 ? O(r2.left + F, r2.top + L, l - H / 2, g - m2 / 2, x.BOTTOM_RIGHT) : new d(r2.left + r2.width - H / 2, r2.top + r2.height - m2 / 2), this.bottomLeftBorderStroke = w > 0 || f > 0 ? O(r2.left + E / 2, r2.top + v, w - E / 2, f - m2 / 2, x.BOTTOM_LEFT) : new d(r2.left + E / 2, r2.top + r2.height - m2 / 2), this.topLeftBorderBox = s > 0 || B > 0 ? O(r2.left, r2.top, s, B, x.TOP_LEFT) : new d(r2.left, r2.top), this.topRightBorderBox = a > 0 || o > 0 ? O(r2.left + Q, r2.top, a, o, x.TOP_RIGHT) : new d(r2.left + r2.width, r2.top), this.bottomRightBorderBox = l > 0 || g > 0 ? O(r2.left + F, r2.top + L, l, g, x.BOTTOM_RIGHT) : new d(r2.left + r2.width, r2.top + r2.height), this.bottomLeftBorderBox = w > 0 || f > 0 ? O(r2.left, r2.top + v, w, f, x.BOTTOM_LEFT) : new d(r2.left, r2.top + r2.height), this.topLeftPaddingBox = s > 0 || B > 0 ? O(r2.left + E, r2.top + u, Math.max(0, s - E), Math.max(0, B - u), x.TOP_LEFT) : new d(r2.left + E, r2.top + u), this.topRightPaddingBox = a > 0 || o > 0 ? O(r2.left + Math.min(Q, r2.width - H), r2.top + u, Q > r2.width + H ? 0 : Math.max(0, a - H), Math.max(0, o - u), x.TOP_RIGHT) : new d(r2.left + r2.width - H, r2.top + u), this.bottomRightPaddingBox = l > 0 || g > 0 ? O(r2.left + Math.min(F, r2.width - E), r2.top + Math.min(L, r2.height - m2), Math.max(0, l - H), Math.max(0, g - m2), x.BOTTOM_RIGHT) : new d(r2.left + r2.width - H, r2.top + r2.height - m2), this.bottomLeftPaddingBox = w > 0 || f > 0 ? O(r2.left + E, r2.top + Math.min(v, r2.height - m2), Math.max(0, w - E), Math.max(0, f - m2), x.BOTTOM_LEFT) : new d(r2.left + E, r2.top + r2.height - m2), this.topLeftContentBox = s > 0 || B > 0 ? O(r2.left + E + y, r2.top + u + b, Math.max(0, s - (E + y)), Math.max(0, B - (u + b)), x.TOP_LEFT) : new d(r2.left + E + y, r2.top + u + b), this.topRightContentBox = a > 0 || o > 0 ? O(r2.left + Math.min(Q, r2.width + E + y), r2.top + u + b, Q > r2.width + E + y ? 0 : a - E + y, o - (u + b), x.TOP_RIGHT) : new d(r2.left + r2.width - (H + M), r2.top + u + b), this.bottomRightContentBox = l > 0 || g > 0 ? O(r2.left + Math.min(F, r2.width - (E + y)), r2.top + Math.min(L, r2.height + u + b), Math.max(0, l - (H + M)), g - (m2 + V), x.BOTTOM_RIGHT) : new d(r2.left + r2.width - (H + M), r2.top + r2.height - (m2 + V)), this.bottomLeftContentBox = w > 0 || f > 0 ? O(r2.left + E + y, r2.top + v, Math.max(0, w - (E + y)), f - (m2 + V), x.BOTTOM_LEFT) : new d(r2.left + E + y, r2.top + r2.height - (m2 + V));
    }
    return A;
  })()
), x;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(x || (x = {}));
var O = function(A, e, t, r2, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), B = t * s, i = r2 * s, a = A + t, o = e + r2;
  switch (n) {
    case x.TOP_LEFT:
      return new We(new d(A, o), new d(A, o - i), new d(a - B, e), new d(a, e));
    case x.TOP_RIGHT:
      return new We(new d(A, e), new d(A + B, e), new d(a, o - i), new d(a, o));
    case x.BOTTOM_RIGHT:
      return new We(new d(a, e), new d(a, e + i), new d(A + B, o), new d(A, o));
    case x.BOTTOM_LEFT:
    default:
      return new We(new d(a, o), new d(a - B, o), new d(A, e + i), new d(A, e));
  }
}, ot = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, sl = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, ct = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, Bl = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t, r2) {
      this.offsetX = e, this.offsetY = t, this.matrix = r2, this.type = 0, this.target = 6;
    }
    return A;
  })()
), Ye = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })()
), il = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })()
), al = function(A) {
  return A.type === 0;
}, Ms = function(A) {
  return A.type === 1;
}, ol = function(A) {
  return A.type === 2;
}, Ln = function(A, e) {
  return A.length === e.length ? A.some(function(t, r2) {
    return t === e[r2];
  }) : false;
}, cl = function(A, e, t, r2, n) {
  return A.map(function(s, B) {
    switch (B) {
      case 0:
        return s.add(e, t);
      case 1:
        return s.add(e + r2, t);
      case 2:
        return s.add(e + r2, t + n);
      case 3:
        return s.add(e, t + n);
    }
    return s;
  });
}, Os = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })()
), Rs = (
  /** @class */
  (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new nl(this.container), this.container.styles.opacity < 1 && this.effects.push(new il(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r2 = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new Bl(r2, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var B = ot(this.curves), i = ct(this.curves);
        Ln(B, i) ? this.effects.push(new Ye(
          B,
          6
          /* CONTENT */
        )) : (this.effects.push(new Ye(
          B,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Ye(
          i,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r2 = this.parent, n = this.effects.slice(0); r2; ) {
        var s = r2.effects.filter(function(a) {
          return !Ms(a);
        });
        if (t || r2.container.styles.position !== 0 || !r2.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r2.container.styles.position) === -1, r2.container.styles.overflowX !== 0) {
            var B = ot(r2.curves), i = ct(r2.curves);
            Ln(B, i) || n.unshift(new Ye(
              i,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, s);
        r2 = r2.parent;
      }
      return n.filter(function(a) {
        return _(a.target, e);
      });
    }, A;
  })()
), Cr = function(A, e, t, r2) {
  A.container.elements.forEach(function(n) {
    var s = _(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), B = _(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), i = new Rs(n, A);
    _(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r2.push(i);
    var a = _(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r2;
    if (s || B) {
      var o = s || n.styles.isPositioned() ? t : e, c = new Os(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var g = 0;
          o.negativeZIndex.some(function(w, f) {
            return l > w.element.container.styles.zIndex.order ? (g = f, false) : g > 0;
          }), o.negativeZIndex.splice(g, 0, c);
        } else if (l > 0) {
          var U = 0;
          o.positiveZIndex.some(function(w, f) {
            return l >= w.element.container.styles.zIndex.order ? (U = f + 1, false) : U > 0;
          }), o.positiveZIndex.splice(U, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      Cr(i, c, s ? c : t, a);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(i) : e.nonInlineLevel.push(i), Cr(i, e, t, a);
    _(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Gs(n, a);
  });
}, Gs = function(A, e) {
  for (var t = A instanceof gr ? A.start : 1, r2 = A instanceof gr ? A.reversed : false, n = 0; n < e.length; n++) {
    var s = e[n];
    s.container instanceof ps && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = He(t, s.container.styles.listStyleType, true), t += r2 ? -1 : 1;
  }
}, ll = function(A) {
  var e = new Rs(A, null), t = new Os(e), r2 = [];
  return Cr(e, t, t, r2), Gs(e.container, r2), t;
}, Kn = function(A, e) {
  switch (e) {
    case 0:
      return aA(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return aA(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return aA(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return aA(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, gl = function(A, e) {
  switch (e) {
    case 0:
      return aA(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return aA(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return aA(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return aA(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, ul = function(A, e) {
  switch (e) {
    case 0:
      return aA(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return aA(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return aA(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return aA(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, wl = function(A, e) {
  switch (e) {
    case 0:
      return Ze(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Ze(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Ze(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Ze(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Ze = function(A, e) {
  var t = [];
  return BA(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), BA(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
}, aA = function(A, e, t, r2) {
  var n = [];
  return BA(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), BA(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), BA(r2) ? n.push(r2.subdivide(0.5, true).reverse()) : n.push(r2), BA(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
}, Vs = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, lt = function(A) {
  var e = A.styles, t = A.bounds, r2 = S(e.paddingLeft, t.width), n = S(e.paddingRight, t.width), s = S(e.paddingTop, t.width), B = S(e.paddingBottom, t.width);
  return t.add(r2 + e.borderLeftWidth, s + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r2 + n), -(e.borderTopWidth + e.borderBottomWidth + s + B));
}, Ql = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? lt(e) : Vs(e);
}, fl = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? lt(e) : Vs(e);
}, Wt = function(A, e, t) {
  var r2 = Ql($A(A.styles.backgroundOrigin, e), A), n = fl($A(A.styles.backgroundClip, e), A), s = Cl($A(A.styles.backgroundSize, e), t, r2), B = s[0], i = s[1], a = ue($A(A.styles.backgroundPosition, e), r2.width - B, r2.height - i), o = Ul($A(A.styles.backgroundRepeat, e), a, s, r2, n), c = Math.round(r2.left + a[0]), l = Math.round(r2.top + a[1]);
  return [o, c, l, B, i];
}, ZA = function(A) {
  return D(A) && A.value === ee.AUTO;
}, je = function(A) {
  return typeof A == "number";
}, Cl = function(A, e, t) {
  var r2 = e[0], n = e[1], s = e[2], B = A[0], i = A[1];
  if (!B)
    return [0, 0];
  if (P(B) && i && P(i))
    return [S(B, t.width), S(i, t.height)];
  var a = je(s);
  if (D(B) && (B.value === ee.CONTAIN || B.value === ee.COVER)) {
    if (je(s)) {
      var o = t.width / t.height;
      return o < s != (B.value === ee.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = je(r2), l = je(n), g = c || l;
  if (ZA(B) && (!i || ZA(i))) {
    if (c && l)
      return [r2, n];
    if (!a && !g)
      return [t.width, t.height];
    if (g && a) {
      var U = c ? r2 : n * s, w = l ? n : r2 / s;
      return [U, w];
    }
    var f = c ? r2 : t.width, I = l ? n : t.height;
    return [f, I];
  }
  if (a) {
    var h = 0, Q = 0;
    return P(B) ? h = S(B, t.width) : P(i) && (Q = S(i, t.height)), ZA(B) ? h = Q * s : (!i || ZA(i)) && (Q = h / s), [h, Q];
  }
  var L = null, F = null;
  if (P(B) ? L = S(B, t.width) : i && P(i) && (F = S(i, t.height)), L !== null && (!i || ZA(i)) && (F = c && l ? L / r2 * n : t.height), F !== null && ZA(B) && (L = c && l ? F / n * r2 : t.width), L !== null && F !== null)
    return [L, F];
  throw new Error("Unable to calculate background-size for element");
}, $A = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, Ul = function(A, e, t, r2, n) {
  var s = e[0], B = e[1], i = t[0], a = t[1];
  switch (A) {
    case 2:
      return [
        new d(Math.round(r2.left), Math.round(r2.top + B)),
        new d(Math.round(r2.left + r2.width), Math.round(r2.top + B)),
        new d(Math.round(r2.left + r2.width), Math.round(a + r2.top + B)),
        new d(Math.round(r2.left), Math.round(a + r2.top + B))
      ];
    case 3:
      return [
        new d(Math.round(r2.left + s), Math.round(r2.top)),
        new d(Math.round(r2.left + s + i), Math.round(r2.top)),
        new d(Math.round(r2.left + s + i), Math.round(r2.height + r2.top)),
        new d(Math.round(r2.left + s), Math.round(r2.height + r2.top))
      ];
    case 1:
      return [
        new d(Math.round(r2.left + s), Math.round(r2.top + B)),
        new d(Math.round(r2.left + s + i), Math.round(r2.top + B)),
        new d(Math.round(r2.left + s + i), Math.round(r2.top + B + a)),
        new d(Math.round(r2.left + s), Math.round(r2.top + B + a))
      ];
    default:
      return [
        new d(Math.round(n.left), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new d(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Fl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", bn = "Hidden Text", hl = (
  /** @class */
  (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r2 = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), B = this._document.body;
      r2.style.visibility = "hidden", r2.style.fontFamily = e, r2.style.fontSize = t, r2.style.margin = "0", r2.style.padding = "0", r2.style.whiteSpace = "nowrap", B.appendChild(r2), n.src = Fl, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = e, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(bn)), r2.appendChild(s), r2.appendChild(n);
      var i = n.offsetTop - s.offsetTop + 2;
      r2.removeChild(s), r2.appendChild(this._document.createTextNode(bn)), r2.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var a = n.offsetTop - r2.offsetTop + 2;
      return B.removeChild(r2), { baseline: i, middle: a };
    }, A.prototype.getMetrics = function(e, t) {
      var r2 = e + " " + t;
      return typeof this._data[r2] > "u" && (this._data[r2] = this.parseMetrics(e, t)), this._data[r2];
    }, A;
  })()
), Ns = (
  /** @class */
  /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })()
), dl = 1e4, pl = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n._activeEffects = [], n.canvas = r2.canvas ? r2.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r2.canvas || (n.canvas.width = Math.floor(r2.width * r2.scale), n.canvas.height = Math.floor(r2.height * r2.scale), n.canvas.style.width = r2.width + "px", n.canvas.style.height = r2.height + "px"), n.fontMetrics = new hl(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r2.x, -r2.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r2.width + "x" + r2.height + ") with scale " + r2.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r2 = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r2.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), ol(t) && (this.ctx.globalAlpha = t.opacity), al(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Ms(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return q(this, void 0, void 0, function() {
        var r2;
        return Z(this, function(n) {
          switch (n.label) {
            case 0:
              return r2 = t.element.container.styles, r2.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return q(this, void 0, void 0, function() {
        return Z(this, function(r2) {
          switch (r2.label) {
            case 0:
              if (_(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r2.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r2.sent(), r2.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r2, n) {
      var s = this;
      if (r2 === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var B = Er(t.text);
        B.reduce(function(i, a) {
          return s.ctx.fillText(a, i, t.bounds.top + n), i + s.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r2 = t.fontVariant.filter(function(B) {
        return B === "normal" || B === "small-caps";
      }).join(""), n = ml(t.fontFamily).join(", "), s = Ie(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r2, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, e.prototype.renderTextNode = function(t, r2) {
      return q(this, void 0, void 0, function() {
        var n, s, B, i, a, o, c, l, g = this;
        return Z(this, function(U) {
          return n = this.createFontStyle(r2), s = n[0], B = n[1], i = n[2], this.ctx.font = s, this.ctx.direction = r2.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(B, i), o = a.baseline, c = a.middle, l = r2.paintOrder, t.textBounds.forEach(function(w) {
            l.forEach(function(f) {
              switch (f) {
                case 0:
                  g.ctx.fillStyle = X(r2.color), g.renderTextWithLetterSpacing(w, r2.letterSpacing, o);
                  var I = r2.textShadow;
                  I.length && w.text.trim().length && (I.slice(0).reverse().forEach(function(h) {
                    g.ctx.shadowColor = X(h.color), g.ctx.shadowOffsetX = h.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = h.offsetY.number * g.options.scale, g.ctx.shadowBlur = h.blur.number, g.renderTextWithLetterSpacing(w, r2.letterSpacing, o);
                  }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r2.textDecorationLine.length && (g.ctx.fillStyle = X(r2.textDecorationColor || r2.color), r2.textDecorationLine.forEach(function(h) {
                    switch (h) {
                      case 1:
                        g.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top + o), w.bounds.width, 1);
                        break;
                      case 2:
                        g.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top), w.bounds.width, 1);
                        break;
                      case 3:
                        g.ctx.fillRect(w.bounds.left, Math.ceil(w.bounds.top + c), w.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r2.webkitTextStrokeWidth && w.text.trim().length && (g.ctx.strokeStyle = X(r2.webkitTextStrokeColor), g.ctx.lineWidth = r2.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(w.text, w.bounds.left, w.bounds.top + o)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r2, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var s = lt(t), B = ct(r2);
        this.path(B), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return q(this, void 0, void 0, function() {
        var r2, n, s, B, i, a, Q, Q, o, c, l, g, F, U, w, v, f, I, h, Q, L, F, v;
        return Z(this, function(u) {
          switch (u.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r2 = t.container, n = t.curves, s = r2.styles, B = 0, i = r2.textNodes, u.label = 1;
            case 1:
              return B < i.length ? (a = i[B], [4, this.renderTextNode(a, s)]) : [3, 4];
            case 2:
              u.sent(), u.label = 3;
            case 3:
              return B++, [3, 1];
            case 4:
              if (!(r2 instanceof Fs)) return [3, 8];
              u.label = 5;
            case 5:
              return u.trys.push([5, 7, , 8]), [4, this.context.cache.match(r2.src)];
            case 6:
              return Q = u.sent(), this.renderReplacedElement(r2, n, Q), [3, 8];
            case 7:
              return u.sent(), this.context.logger.error("Error loading image " + r2.src), [3, 8];
            case 8:
              if (r2 instanceof hs && this.renderReplacedElement(r2, n, r2.canvas), !(r2 instanceof ds)) return [3, 12];
              u.label = 9;
            case 9:
              return u.trys.push([9, 11, , 12]), [4, this.context.cache.match(r2.svg)];
            case 10:
              return Q = u.sent(), this.renderReplacedElement(r2, n, Q), [3, 12];
            case 11:
              return u.sent(), this.context.logger.error("Error loading svg " + r2.svg.substring(0, 255)), [3, 12];
            case 12:
              return r2 instanceof vs && r2.tree ? (o = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r2.backgroundColor,
                x: 0,
                y: 0,
                width: r2.width,
                height: r2.height
              }), [4, o.render(r2.tree)]) : [3, 14];
            case 13:
              c = u.sent(), r2.width && r2.height && this.ctx.drawImage(c, 0, 0, r2.width, r2.height, r2.bounds.left, r2.bounds.top, r2.bounds.width, r2.bounds.height), u.label = 14;
            case 14:
              if (r2 instanceof Hr && (l = Math.min(r2.bounds.width, r2.bounds.height), r2.type === st ? r2.checked && (this.ctx.save(), this.path([
                new d(r2.bounds.left + l * 0.39363, r2.bounds.top + l * 0.79),
                new d(r2.bounds.left + l * 0.16, r2.bounds.top + l * 0.5549),
                new d(r2.bounds.left + l * 0.27347, r2.bounds.top + l * 0.44071),
                new d(r2.bounds.left + l * 0.39694, r2.bounds.top + l * 0.5649),
                new d(r2.bounds.left + l * 0.72983, r2.bounds.top + l * 0.23),
                new d(r2.bounds.left + l * 0.84, r2.bounds.top + l * 0.34085),
                new d(r2.bounds.left + l * 0.39363, r2.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = X(Un), this.ctx.fill(), this.ctx.restore()) : r2.type === Bt && r2.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r2.bounds.left + l / 2, r2.bounds.top + l / 2, l / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = X(Un), this.ctx.fill(), this.ctx.restore())), El(r2) && r2.value.length) {
                switch (g = this.createFontStyle(s), F = g[0], U = g[1], w = this.fontMetrics.getMetrics(F, U).baseline, this.ctx.font = F, this.ctx.fillStyle = X(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = vl(r2.styles.textAlign), v = lt(r2), f = 0, r2.styles.textAlign) {
                  case 1:
                    f += v.width / 2;
                    break;
                  case 2:
                    f += v.width;
                    break;
                }
                I = v.add(f, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new d(v.left, v.top),
                  new d(v.left + v.width, v.top),
                  new d(v.left + v.width, v.top + v.height),
                  new d(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new he(r2.value, I), s.letterSpacing, w), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!_(
                r2.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r2.styles.listStyleImage === null) return [3, 19];
              if (h = r2.styles.listStyleImage, h.type !== 0) return [3, 18];
              Q = void 0, L = h.url, u.label = 15;
            case 15:
              return u.trys.push([15, 17, , 18]), [4, this.context.cache.match(L)];
            case 16:
              return Q = u.sent(), this.ctx.drawImage(Q, r2.bounds.left - (Q.width + 10), r2.bounds.top), [3, 18];
            case 17:
              return u.sent(), this.context.logger.error("Error loading list-style-image " + L), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r2.styles.listStyleType !== -1 && (F = this.createFontStyle(s)[0], this.ctx.font = F, this.ctx.fillStyle = X(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new vA(r2.bounds.left, r2.bounds.top + S(r2.styles.paddingTop, r2.bounds.width), r2.bounds.width, An(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new he(t.listValue, v), s.letterSpacing, An(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), u.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return q(this, void 0, void 0, function() {
        var r2, n, h, s, B, h, i, a, h, o, c, h, l, g, h, U, w, h, f, I, h;
        return Z(this, function(Q) {
          switch (Q.label) {
            case 0:
              if (_(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              Q.sent(), r2 = 0, n = t.negativeZIndex, Q.label = 2;
            case 2:
              return r2 < n.length ? (h = n[r2], [4, this.renderStack(h)]) : [3, 5];
            case 3:
              Q.sent(), Q.label = 4;
            case 4:
              return r2++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              Q.sent(), s = 0, B = t.nonInlineLevel, Q.label = 7;
            case 7:
              return s < B.length ? (h = B[s], [4, this.renderNode(h)]) : [3, 10];
            case 8:
              Q.sent(), Q.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              i = 0, a = t.nonPositionedFloats, Q.label = 11;
            case 11:
              return i < a.length ? (h = a[i], [4, this.renderStack(h)]) : [3, 14];
            case 12:
              Q.sent(), Q.label = 13;
            case 13:
              return i++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, Q.label = 15;
            case 15:
              return o < c.length ? (h = c[o], [4, this.renderStack(h)]) : [3, 18];
            case 16:
              Q.sent(), Q.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, g = t.inlineLevel, Q.label = 19;
            case 19:
              return l < g.length ? (h = g[l], [4, this.renderNode(h)]) : [3, 22];
            case 20:
              Q.sent(), Q.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              U = 0, w = t.zeroOrAutoZIndexOrTransformedOrOpacity, Q.label = 23;
            case 23:
              return U < w.length ? (h = w[U], [4, this.renderStack(h)]) : [3, 26];
            case 24:
              Q.sent(), Q.label = 25;
            case 25:
              return U++, [3, 23];
            case 26:
              f = 0, I = t.positiveZIndex, Q.label = 27;
            case 27:
              return f < I.length ? (h = I[f], [4, this.renderStack(h)]) : [3, 30];
            case 28:
              Q.sent(), Q.label = 29;
            case 29:
              return f++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r2 = this;
      t.forEach(function(n, s) {
        var B = BA(n) ? n.start : n;
        s === 0 ? r2.ctx.moveTo(B.x, B.y) : r2.ctx.lineTo(B.x, B.y), BA(n) && r2.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r2, n, s) {
      this.path(t), this.ctx.fillStyle = r2, this.ctx.translate(n, s), this.ctx.fill(), this.ctx.translate(-n, -s);
    }, e.prototype.resizeImage = function(t, r2, n) {
      var s;
      if (t.width === r2 && t.height === n)
        return t;
      var B = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document, i = B.createElement("canvas");
      i.width = Math.max(1, r2), i.height = Math.max(1, n);
      var a = i.getContext("2d");
      return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r2, n), i;
    }, e.prototype.renderBackgroundImage = function(t) {
      return q(this, void 0, void 0, function() {
        var r2, n, s, B, i, a;
        return Z(this, function(o) {
          switch (o.label) {
            case 0:
              r2 = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, g, U, b, J, N, y, T, m2, w, b, J, N, y, T, f, I, h, Q, L, F, v, u, H, m2, E, b, M, V, y, T, z, J, N, oA, $, uA, hA, wA, AA, QA, cA;
                return Z(this, function(IA) {
                  switch (IA.label) {
                    case 0:
                      if (c.type !== 0) return [3, 5];
                      l = void 0, g = c.url, IA.label = 1;
                    case 1:
                      return IA.trys.push([1, 3, , 4]), [4, s.context.cache.match(g)];
                    case 2:
                      return l = IA.sent(), [3, 4];
                    case 3:
                      return IA.sent(), s.context.logger.error("Error loading background-image " + g), [3, 4];
                    case 4:
                      return l && (U = Wt(t, r2, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), b = U[0], J = U[1], N = U[2], y = U[3], T = U[4], m2 = s.ctx.createPattern(s.resizeImage(l, y, T), "repeat"), s.renderRepeat(b, m2, J, N)), [3, 6];
                    case 5:
                      ia(c) ? (w = Wt(t, r2, [null, null, null]), b = w[0], J = w[1], N = w[2], y = w[3], T = w[4], f = ta(c.angle, y, T), I = f[0], h = f[1], Q = f[2], L = f[3], F = f[4], v = document.createElement("canvas"), v.width = y, v.height = T, u = v.getContext("2d"), H = u.createLinearGradient(h, L, Q, F), zr(c.stops, I).forEach(function(dA) {
                        return H.addColorStop(dA.stop, X(dA.color));
                      }), u.fillStyle = H, u.fillRect(0, 0, y, T), y > 0 && T > 0 && (m2 = s.ctx.createPattern(v, "repeat"), s.renderRepeat(b, m2, J, N))) : aa(c) && (E = Wt(t, r2, [
                        null,
                        null,
                        null
                      ]), b = E[0], M = E[1], V = E[2], y = E[3], T = E[4], z = c.position.length === 0 ? [hr] : c.position, J = S(z[0], y), N = S(z[z.length - 1], T), oA = ra(c, J, N, y, T), $ = oA[0], uA = oA[1], $ > 0 && uA > 0 && (hA = s.ctx.createRadialGradient(M + J, V + N, 0, M + J, V + N, $), zr(c.stops, $ * 2).forEach(function(dA) {
                        return hA.addColorStop(dA.stop, X(dA.color));
                      }), s.path(b), s.ctx.fillStyle = hA, $ !== uA ? (wA = t.bounds.left + 0.5 * t.bounds.width, AA = t.bounds.top + 0.5 * t.bounds.height, QA = uA / $, cA = 1 / QA, s.ctx.save(), s.ctx.translate(wA, AA), s.ctx.transform(1, 0, 0, QA, 0, 0), s.ctx.translate(-wA, -AA), s.ctx.fillRect(M, cA * (V - AA) + AA, y, T * cA), s.ctx.restore()) : s.ctx.fill())), IA.label = 6;
                    case 6:
                      return r2--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, s = this, B = 0, i = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return B < i.length ? (a = i[B], [5, n(a)]) : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return B++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r2, n) {
      return q(this, void 0, void 0, function() {
        return Z(this, function(s) {
          return this.path(Kn(n, r2)), this.ctx.fillStyle = X(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r2, n, s) {
      return q(this, void 0, void 0, function() {
        var B, i;
        return Z(this, function(a) {
          switch (a.label) {
            case 0:
              return r2 < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
            case 2:
              return B = gl(s, n), this.path(B), this.ctx.fillStyle = X(t), this.ctx.fill(), i = ul(s, n), this.path(i), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return q(this, void 0, void 0, function() {
        var r2, n, s, B, i, a, o, c, l = this;
        return Z(this, function(g) {
          switch (g.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r2 = t.container.styles, n = !TA(r2.backgroundColor) || r2.backgroundImage.length, s = [
                { style: r2.borderTopStyle, color: r2.borderTopColor, width: r2.borderTopWidth },
                { style: r2.borderRightStyle, color: r2.borderRightColor, width: r2.borderRightWidth },
                { style: r2.borderBottomStyle, color: r2.borderBottomColor, width: r2.borderBottomWidth },
                { style: r2.borderLeftStyle, color: r2.borderLeftColor, width: r2.borderLeftWidth }
              ], B = Hl($A(r2.backgroundClip, 0), t.curves), n || r2.boxShadow.length ? (this.ctx.save(), this.path(B), this.ctx.clip(), TA(r2.backgroundColor) || (this.ctx.fillStyle = X(r2.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              g.sent(), this.ctx.restore(), r2.boxShadow.slice(0).reverse().forEach(function(U) {
                l.ctx.save();
                var w = ot(t.curves), f = U.inset ? 0 : dl, I = cl(w, -f + (U.inset ? 1 : -1) * U.spread.number, (U.inset ? 1 : -1) * U.spread.number, U.spread.number * (U.inset ? -2 : 2), U.spread.number * (U.inset ? -2 : 2));
                U.inset ? (l.path(w), l.ctx.clip(), l.mask(I)) : (l.mask(w), l.ctx.clip(), l.path(I)), l.ctx.shadowOffsetX = U.offsetX.number + f, l.ctx.shadowOffsetY = U.offsetY.number, l.ctx.shadowColor = X(U.color), l.ctx.shadowBlur = U.blur.number, l.ctx.fillStyle = U.inset ? X(U.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), g.label = 2;
            case 2:
              i = 0, a = 0, o = s, g.label = 3;
            case 3:
              return a < o.length ? (c = o[a], c.style !== 0 && !TA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                i,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return g.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                i,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return g.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, i, t.curves)];
            case 8:
              return g.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, i, t.curves)];
            case 10:
              g.sent(), g.label = 11;
            case 11:
              i++, g.label = 12;
            case 12:
              return a++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r2, n, s, B) {
      return q(this, void 0, void 0, function() {
        var i, a, o, c, l, g, U, w, f, I, h, Q, L, F, v, u, v, u;
        return Z(this, function(H) {
          return this.ctx.save(), i = wl(s, n), a = Kn(s, n), B === 2 && (this.path(a), this.ctx.clip()), BA(a[0]) ? (o = a[0].start.x, c = a[0].start.y) : (o = a[0].x, c = a[0].y), BA(a[1]) ? (l = a[1].end.x, g = a[1].end.y) : (l = a[1].x, g = a[1].y), n === 0 || n === 2 ? U = Math.abs(o - l) : U = Math.abs(c - g), this.ctx.beginPath(), B === 3 ? this.formatPath(i) : this.formatPath(a.slice(0, 2)), w = r2 < 3 ? r2 * 3 : r2 * 2, f = r2 < 3 ? r2 * 2 : r2, B === 3 && (w = r2, f = r2), I = true, U <= w * 2 ? I = false : U <= w * 2 + f ? (h = U / (2 * w + f), w *= h, f *= h) : (Q = Math.floor((U + f) / (w + f)), L = (U - Q * w) / (Q - 1), F = (U - (Q + 1) * w) / Q, f = F <= 0 || Math.abs(f - L) < Math.abs(f - F) ? L : F), I && (B === 3 ? this.ctx.setLineDash([0, w + f]) : this.ctx.setLineDash([w, f])), B === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r2) : this.ctx.lineWidth = r2 * 2 + 1.1, this.ctx.strokeStyle = X(t), this.ctx.stroke(), this.ctx.setLineDash([]), B === 2 && (BA(a[0]) && (v = a[3], u = a[0], this.ctx.beginPath(), this.formatPath([new d(v.end.x, v.end.y), new d(u.start.x, u.start.y)]), this.ctx.stroke()), BA(a[1]) && (v = a[1], u = a[2], this.ctx.beginPath(), this.formatPath([new d(v.end.x, v.end.y), new d(u.start.x, u.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return q(this, void 0, void 0, function() {
        var r2;
        return Z(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = X(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r2 = ll(t), [4, this.renderStack(r2)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  })(Ns)
), El = function(A) {
  return A instanceof Hs || A instanceof Es ? true : A instanceof Hr && A.type !== Bt && A.type !== st;
}, Hl = function(A, e) {
  switch (A) {
    case 0:
      return ot(e);
    case 2:
      return sl(e);
    case 1:
    default:
      return ct(e);
  }
}, vl = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Il = ["-apple-system", "system-ui"], ml = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return Il.indexOf(e) === -1;
  }) : A;
}, yl = (
  /** @class */
  (function(A) {
    gA(e, A);
    function e(t, r2) {
      var n = A.call(this, t, r2) || this;
      return n.canvas = r2.canvas ? r2.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r2, n.canvas.width = Math.floor(r2.width * r2.scale), n.canvas.height = Math.floor(r2.height * r2.scale), n.canvas.style.width = r2.width + "px", n.canvas.style.height = r2.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r2.x, -r2.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r2.width + "x" + r2.height + " at " + r2.x + "," + r2.y + ") with scale " + r2.scale), n;
    }
    return e.prototype.render = function(t) {
      return q(this, void 0, void 0, function() {
        var r2, n;
        return Z(this, function(s) {
          switch (s.label) {
            case 0:
              return r2 = lr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Ll(r2)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = X(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  })(Ns)
), Ll = function(A) {
  return new Promise(function(e, t) {
    var r2 = new Image();
    r2.onload = function() {
      e(r2);
    }, r2.onerror = t, r2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, Kl = (
  /** @class */
  (function() {
    function A(e) {
      var t = e.id, r2 = e.enabled;
      this.id = t, this.enabled = r2, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, ye([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, ye([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, ye([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, ye([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })()
), bl = (
  /** @class */
  (function() {
    function A(e, t) {
      var r2;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new Kl({ id: this.instanceName, enabled: e.logging }), this.cache = (r2 = e.cache) !== null && r2 !== void 0 ? r2 : new qc(this, e);
    }
    return A.instanceCount = 1, A;
  })()
), xl = function(A, e) {
  return e === void 0 && (e = {}), Dl(A, e);
};
typeof window < "u" && Ts.setContext(window);
var Dl = function(A, e) {
  return q(void 0, void 0, void 0, function() {
    var t, r2, n, s, B, i, a, o, c, l, g, U, w, f, I, h, Q, L, F, v, H, u, H, m2, E, b, M, V, y, T, z, J, N, oA, $, uA, hA, wA, AA, QA;
    return Z(this, function(cA) {
      switch (cA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r2 = t.defaultView, !r2)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (m2 = e.allowTaint) !== null && m2 !== void 0 ? m2 : false,
            imageTimeout: (E = e.imageTimeout) !== null && E !== void 0 ? E : 15e3,
            proxy: e.proxy,
            useCORS: (b = e.useCORS) !== null && b !== void 0 ? b : false
          }, s = jt({ logging: (M = e.logging) !== null && M !== void 0 ? M : true, cache: e.cache }, n), B = {
            windowWidth: (V = e.windowWidth) !== null && V !== void 0 ? V : r2.innerWidth,
            windowHeight: (y = e.windowHeight) !== null && y !== void 0 ? y : r2.innerHeight,
            scrollX: (T = e.scrollX) !== null && T !== void 0 ? T : r2.pageXOffset,
            scrollY: (z = e.scrollY) !== null && z !== void 0 ? z : r2.pageYOffset
          }, i = new vA(B.scrollX, B.scrollY, B.windowWidth, B.windowHeight), a = new bl(s, i), o = (J = e.foreignObjectRendering) !== null && J !== void 0 ? J : false, c = {
            allowTaint: (N = e.allowTaint) !== null && N !== void 0 ? N : false,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, a.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new mn(a, A, c), g = l.clonedReferenceElement, g ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return U = cA.sent(), w = vr(g) || Sc(g) ? oB(g.ownerDocument) : wt(a, g), f = w.width, I = w.height, h = w.left, Q = w.top, L = Sl(a, g, e.backgroundColor), F = {
            canvas: e.canvas,
            backgroundColor: L,
            scale: ($ = (oA = e.scale) !== null && oA !== void 0 ? oA : r2.devicePixelRatio) !== null && $ !== void 0 ? $ : 1,
            x: ((uA = e.x) !== null && uA !== void 0 ? uA : 0) + h,
            y: ((hA = e.y) !== null && hA !== void 0 ? hA : 0) + Q,
            width: (wA = e.width) !== null && wA !== void 0 ? wA : Math.ceil(f),
            height: (AA = e.height) !== null && AA !== void 0 ? AA : Math.ceil(I)
          }, o ? (a.logger.debug("Document cloned, using foreign object rendering"), H = new yl(a, F), [4, H.render(g)]) : [3, 3];
        case 2:
          return v = cA.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + h + "," + Q + " with size " + f + "x" + I + " using computed rendering"), a.logger.debug("Starting DOM parsing"), u = ms(a, g), L === u.styles.backgroundColor && (u.styles.backgroundColor = HA.TRANSPARENT), a.logger.debug("Starting renderer for element at " + F.x + "," + F.y + " with size " + F.width + "x" + F.height), H = new pl(a, F), [4, H.render(u)];
        case 4:
          v = cA.sent(), cA.label = 5;
        case 5:
          return (!((QA = e.removeContainer) !== null && QA !== void 0) || QA) && (mn.destroy(U) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, Sl = function(A, e, t) {
  var r2 = e.ownerDocument, n = r2.documentElement ? Ue(A, getComputedStyle(r2.documentElement).backgroundColor) : HA.TRANSPARENT, s = r2.body ? Ue(A, getComputedStyle(r2.body).backgroundColor) : HA.TRANSPARENT, B = typeof t == "string" ? Ue(A, t) : t === null ? HA.TRANSPARENT : 4294967295;
  return e === r2.documentElement ? TA(n) ? TA(s) ? B : s : n : B;
};
function Tl(A, e) {
  if (A.match(/^[a-z]+:\/\//i))
    return A;
  if (A.match(/^\/\//))
    return window.location.protocol + A;
  if (A.match(/^[a-z]+:/i))
    return A;
  const t = document.implementation.createHTMLDocument(), r2 = t.createElement("base"), n = t.createElement("a");
  return t.head.appendChild(r2), t.body.appendChild(n), e && (r2.href = e), n.href = A, n.href;
}
const Ml = /* @__PURE__ */ (() => {
  let A = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (A += 1, `u${e()}${A}`);
})();
function MA(A) {
  const e = [];
  for (let t = 0, r2 = A.length; t < r2; t++)
    e.push(A[t]);
  return e;
}
let jA = null;
function Ps(A = {}) {
  return jA || (A.includeStyleProperties ? (jA = A.includeStyleProperties, jA) : (jA = MA(window.getComputedStyle(document.documentElement)), jA));
}
function gt(A, e) {
  const r2 = (A.ownerDocument.defaultView || window).getComputedStyle(A).getPropertyValue(e);
  return r2 ? parseFloat(r2.replace("px", "")) : 0;
}
function Ol(A) {
  const e = gt(A, "border-left-width"), t = gt(A, "border-right-width");
  return A.clientWidth + e + t;
}
function Rl(A) {
  const e = gt(A, "border-top-width"), t = gt(A, "border-bottom-width");
  return A.clientHeight + e + t;
}
function ks(A, e = {}) {
  const t = e.width || Ol(A), r2 = e.height || Rl(A);
  return { width: t, height: r2 };
}
function Gl() {
  let A, e;
  try {
    e = process;
  } catch {
  }
  const t = e && e.env ? e.env.devicePixelRatio : null;
  return t && (A = parseInt(t, 10), Number.isNaN(A) && (A = 1)), A || window.devicePixelRatio || 1;
}
const rA = 16384;
function Vl(A) {
  (A.width > rA || A.height > rA) && (A.width > rA && A.height > rA ? A.width > A.height ? (A.height *= rA / A.width, A.width = rA) : (A.width *= rA / A.height, A.height = rA) : A.width > rA ? (A.height *= rA / A.width, A.width = rA) : (A.width *= rA / A.height, A.height = rA));
}
function ut(A) {
  return new Promise((e, t) => {
    const r2 = new Image();
    r2.onload = () => {
      r2.decode().then(() => {
        requestAnimationFrame(() => e(r2));
      });
    }, r2.onerror = t, r2.crossOrigin = "anonymous", r2.decoding = "async", r2.src = A;
  });
}
async function Nl(A) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(A)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Pl(A, e, t) {
  const r2 = "http://www.w3.org/2000/svg", n = document.createElementNS(r2, "svg"), s = document.createElementNS(r2, "foreignObject");
  return n.setAttribute("width", `${e}`), n.setAttribute("height", `${t}`), n.setAttribute("viewBox", `0 0 ${e} ${t}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), n.appendChild(s), s.appendChild(A), Nl(n);
}
const tA = (A, e) => {
  if (A instanceof e)
    return true;
  const t = Object.getPrototypeOf(A);
  return t === null ? false : t.constructor.name === e.name || tA(t, e);
};
function kl(A) {
  const e = A.getPropertyValue("content");
  return `${A.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function _l(A, e) {
  return Ps(e).map((t) => {
    const r2 = A.getPropertyValue(t), n = A.getPropertyPriority(t);
    return `${t}: ${r2}${n ? " !important" : ""};`;
  }).join(" ");
}
function Xl(A, e, t, r2) {
  const n = `.${A}:${e}`, s = t.cssText ? kl(t) : _l(t, r2);
  return document.createTextNode(`${n}{${s}}`);
}
function xn(A, e, t, r2) {
  const n = window.getComputedStyle(A, t), s = n.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const B = Ml();
  try {
    e.className = `${e.className} ${B}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Xl(B, t, n, r2)), e.appendChild(i);
}
function Jl(A, e, t) {
  xn(A, e, ":before", t), xn(A, e, ":after", t);
}
const Dn = "application/font-woff", Sn = "image/jpeg", Wl = {
  woff: Dn,
  woff2: Dn,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Sn,
  jpeg: Sn,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Yl(A) {
  const e = /\.([^./]*?)$/g.exec(A);
  return e ? e[1] : "";
}
function Ir(A) {
  const e = Yl(A).toLowerCase();
  return Wl[e] || "";
}
function Zl(A) {
  return A.split(/,/)[1];
}
function Ur(A) {
  return A.search(/^(data:)/) !== -1;
}
function jl(A, e) {
  return `data:${e};base64,${A}`;
}
async function _s(A, e, t) {
  const r2 = await fetch(A, e);
  if (r2.status === 404)
    throw new Error(`Resource "${r2.url}" not found`);
  const n = await r2.blob();
  return new Promise((s, B) => {
    const i = new FileReader();
    i.onerror = B, i.onloadend = () => {
      try {
        s(t({ res: r2, result: i.result }));
      } catch (a) {
        B(a);
      }
    }, i.readAsDataURL(n);
  });
}
const Yt = {};
function ql(A, e, t) {
  let r2 = A.replace(/\?.*/, "");
  return t && (r2 = A), /ttf|otf|eot|woff2?/i.test(r2) && (r2 = r2.replace(/.*\//, "")), e ? `[${e}]${r2}` : r2;
}
async function mr(A, e, t) {
  const r2 = ql(A, e, t.includeQueryParams);
  if (Yt[r2] != null)
    return Yt[r2];
  t.cacheBust && (A += (/\?/.test(A) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let n;
  try {
    const s = await _s(A, t.fetchRequestInit, ({ res: B, result: i }) => (e || (e = B.headers.get("Content-Type") || ""), Zl(i)));
    n = jl(s, e);
  } catch (s) {
    n = t.imagePlaceholder || "";
    let B = `Failed to fetch resource: ${A}`;
    s && (B = typeof s == "string" ? s : s.message), B && console.warn(B);
  }
  return Yt[r2] = n, n;
}
async function zl(A) {
  const e = A.toDataURL();
  return e === "data:," ? A.cloneNode(false) : ut(e);
}
async function $l(A, e) {
  if (A.currentSrc) {
    const s = document.createElement("canvas"), B = s.getContext("2d");
    s.width = A.clientWidth, s.height = A.clientHeight, B == null || B.drawImage(A, 0, 0, s.width, s.height);
    const i = s.toDataURL();
    return ut(i);
  }
  const t = A.poster, r2 = Ir(t), n = await mr(t, r2, e);
  return ut(n);
}
async function Ag(A, e) {
  var t;
  try {
    if (!((t = A == null ? void 0 : A.contentDocument) === null || t === void 0) && t.body)
      return await Ht(A.contentDocument.body, e, true);
  } catch {
  }
  return A.cloneNode(false);
}
async function eg(A, e) {
  return tA(A, HTMLCanvasElement) ? zl(A) : tA(A, HTMLVideoElement) ? $l(A, e) : tA(A, HTMLIFrameElement) ? Ag(A, e) : A.cloneNode(Xs(A));
}
const tg = (A) => A.tagName != null && A.tagName.toUpperCase() === "SLOT", Xs = (A) => A.tagName != null && A.tagName.toUpperCase() === "SVG";
async function rg(A, e, t) {
  var r2, n;
  if (Xs(e))
    return e;
  let s = [];
  return tg(A) && A.assignedNodes ? s = MA(A.assignedNodes()) : tA(A, HTMLIFrameElement) && (!((r2 = A.contentDocument) === null || r2 === void 0) && r2.body) ? s = MA(A.contentDocument.body.childNodes) : s = MA(((n = A.shadowRoot) !== null && n !== void 0 ? n : A).childNodes), s.length === 0 || tA(A, HTMLVideoElement) || await s.reduce((B, i) => B.then(() => Ht(i, t)).then((a) => {
    a && e.appendChild(a);
  }), Promise.resolve()), e;
}
function ng(A, e, t) {
  const r2 = e.style;
  if (!r2)
    return;
  const n = window.getComputedStyle(A);
  n.cssText ? (r2.cssText = n.cssText, r2.transformOrigin = n.transformOrigin) : Ps(t).forEach((s) => {
    let B = n.getPropertyValue(s);
    s === "font-size" && B.endsWith("px") && (B = `${Math.floor(parseFloat(B.substring(0, B.length - 2))) - 0.1}px`), tA(A, HTMLIFrameElement) && s === "display" && B === "inline" && (B = "block"), s === "d" && e.getAttribute("d") && (B = `path(${e.getAttribute("d")})`), r2.setProperty(s, B, n.getPropertyPriority(s));
  });
}
function sg(A, e) {
  tA(A, HTMLTextAreaElement) && (e.innerHTML = A.value), tA(A, HTMLInputElement) && e.setAttribute("value", A.value);
}
function Bg(A, e) {
  if (tA(A, HTMLSelectElement)) {
    const t = e, r2 = Array.from(t.children).find((n) => A.value === n.getAttribute("value"));
    r2 && r2.setAttribute("selected", "");
  }
}
function ig(A, e, t) {
  return tA(e, Element) && (ng(A, e, t), Jl(A, e, t), sg(A, e), Bg(A, e)), e;
}
async function ag(A, e) {
  const t = A.querySelectorAll ? A.querySelectorAll("use") : [];
  if (t.length === 0)
    return A;
  const r2 = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s].getAttribute("xlink:href");
    if (i) {
      const a = A.querySelector(i), o = document.querySelector(i);
      !a && o && !r2[i] && (r2[i] = await Ht(o, e, true));
    }
  }
  const n = Object.values(r2);
  if (n.length) {
    const s = "http://www.w3.org/1999/xhtml", B = document.createElementNS(s, "svg");
    B.setAttribute("xmlns", s), B.style.position = "absolute", B.style.width = "0", B.style.height = "0", B.style.overflow = "hidden", B.style.display = "none";
    const i = document.createElementNS(s, "defs");
    B.appendChild(i);
    for (let a = 0; a < n.length; a++)
      i.appendChild(n[a]);
    A.appendChild(B);
  }
  return A;
}
async function Ht(A, e, t) {
  return !t && e.filter && !e.filter(A) ? null : Promise.resolve(A).then((r2) => eg(r2, e)).then((r2) => rg(A, r2, e)).then((r2) => ig(A, r2, e)).then((r2) => ag(r2, e));
}
const Js = /url\((['"]?)([^'"]+?)\1\)/g, og = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, cg = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function lg(A) {
  const e = A.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function gg(A) {
  const e = [];
  return A.replace(Js, (t, r2, n) => (e.push(n), t)), e.filter((t) => !Ur(t));
}
async function ug(A, e, t, r2, n) {
  try {
    const s = t ? Tl(e, t) : e, B = Ir(e);
    let i;
    return n || (i = await mr(s, B, r2)), A.replace(lg(e), `$1${i}$3`);
  } catch {
  }
  return A;
}
function wg(A, { preferredFontFormat: e }) {
  return e ? A.replace(cg, (t) => {
    for (; ; ) {
      const [r2, , n] = og.exec(t) || [];
      if (!n)
        return "";
      if (n === e)
        return `src: ${r2};`;
    }
  }) : A;
}
function Ws(A) {
  return A.search(Js) !== -1;
}
async function Ys(A, e, t) {
  if (!Ws(A))
    return A;
  const r2 = wg(A, t);
  return gg(r2).reduce((s, B) => s.then((i) => ug(i, B, e, t)), Promise.resolve(r2));
}
async function qA(A, e, t) {
  var r2;
  const n = (r2 = e.style) === null || r2 === void 0 ? void 0 : r2.getPropertyValue(A);
  if (n) {
    const s = await Ys(n, null, t);
    return e.style.setProperty(A, s, e.style.getPropertyPriority(A)), true;
  }
  return false;
}
async function Qg(A, e) {
  await qA("background", A, e) || await qA("background-image", A, e), await qA("mask", A, e) || await qA("-webkit-mask", A, e) || await qA("mask-image", A, e) || await qA("-webkit-mask-image", A, e);
}
async function fg(A, e) {
  const t = tA(A, HTMLImageElement);
  if (!(t && !Ur(A.src)) && !(tA(A, SVGImageElement) && !Ur(A.href.baseVal)))
    return;
  const r2 = t ? A.src : A.href.baseVal, n = await mr(r2, Ir(r2), e);
  await new Promise((s, B) => {
    A.onload = s, A.onerror = e.onImageErrorHandler ? (...a) => {
      try {
        s(e.onImageErrorHandler(...a));
      } catch (o) {
        B(o);
      }
    } : B;
    const i = A;
    i.decode && (i.decode = s), i.loading === "lazy" && (i.loading = "eager"), t ? (A.srcset = "", A.src = n) : A.href.baseVal = n;
  });
}
async function Cg(A, e) {
  const r2 = MA(A.childNodes).map((n) => Zs(n, e));
  await Promise.all(r2).then(() => A);
}
async function Zs(A, e) {
  tA(A, Element) && (await Qg(A, e), await fg(A, e), await Cg(A, e));
}
function Ug(A, e) {
  const { style: t } = A;
  e.backgroundColor && (t.backgroundColor = e.backgroundColor), e.width && (t.width = `${e.width}px`), e.height && (t.height = `${e.height}px`);
  const r2 = e.style;
  return r2 != null && Object.keys(r2).forEach((n) => {
    t[n] = r2[n];
  }), A;
}
const Tn = {};
async function Mn(A) {
  let e = Tn[A];
  if (e != null)
    return e;
  const r2 = await (await fetch(A)).text();
  return e = { url: A, cssText: r2 }, Tn[A] = e, e;
}
async function On(A, e) {
  let t = A.cssText;
  const r2 = /url\(["']?([^"')]+)["']?\)/g, s = (t.match(/url\([^)]+\)/g) || []).map(async (B) => {
    let i = B.replace(r2, "$1");
    return i.startsWith("https://") || (i = new URL(i, A.url).href), _s(i, e.fetchRequestInit, ({ result: a }) => (t = t.replace(B, `url(${a})`), [B, a]));
  });
  return Promise.all(s).then(() => t);
}
function Rn(A) {
  if (A == null)
    return [];
  const e = [], t = /(\/\*[\s\S]*?\*\/)/gi;
  let r2 = A.replace(t, "");
  const n = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = n.exec(r2);
    if (a === null)
      break;
    e.push(a[0]);
  }
  r2 = r2.replace(n, "");
  const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, B = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(B, "gi");
  for (; ; ) {
    let a = s.exec(r2);
    if (a === null) {
      if (a = i.exec(r2), a === null)
        break;
      s.lastIndex = i.lastIndex;
    } else
      i.lastIndex = s.lastIndex;
    e.push(a[0]);
  }
  return e;
}
async function Fg(A, e) {
  const t = [], r2 = [];
  return A.forEach((n) => {
    if ("cssRules" in n)
      try {
        MA(n.cssRules || []).forEach((s, B) => {
          if (s.type === CSSRule.IMPORT_RULE) {
            let i = B + 1;
            const a = s.href, o = Mn(a).then((c) => On(c, e)).then((c) => Rn(c).forEach((l) => {
              try {
                n.insertRule(l, l.startsWith("@import") ? i += 1 : n.cssRules.length);
              } catch (g) {
                console.error("Error inserting rule from remote css", {
                  rule: l,
                  error: g
                });
              }
            })).catch((c) => {
              console.error("Error loading remote css", c.toString());
            });
            r2.push(o);
          }
        });
      } catch (s) {
        const B = A.find((i) => i.href == null) || document.styleSheets[0];
        n.href != null && r2.push(Mn(n.href).then((i) => On(i, e)).then((i) => Rn(i).forEach((a) => {
          B.insertRule(a, B.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", s);
      }
  }), Promise.all(r2).then(() => (A.forEach((n) => {
    if ("cssRules" in n)
      try {
        MA(n.cssRules || []).forEach((s) => {
          t.push(s);
        });
      } catch (s) {
        console.error(`Error while reading CSS rules from ${n.href}`, s);
      }
  }), t));
}
function hg(A) {
  return A.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Ws(e.style.getPropertyValue("src")));
}
async function dg(A, e) {
  if (A.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const t = MA(A.ownerDocument.styleSheets), r2 = await Fg(t, e);
  return hg(r2);
}
function js(A) {
  return A.trim().replace(/["']/g, "");
}
function pg(A) {
  const e = /* @__PURE__ */ new Set();
  function t(r2) {
    (r2.style.fontFamily || getComputedStyle(r2).fontFamily).split(",").forEach((s) => {
      e.add(js(s));
    }), Array.from(r2.children).forEach((s) => {
      s instanceof HTMLElement && t(s);
    });
  }
  return t(A), e;
}
async function Eg(A, e) {
  const t = await dg(A, e), r2 = pg(A);
  return (await Promise.all(t.filter((s) => r2.has(js(s.style.fontFamily))).map((s) => {
    const B = s.parentStyleSheet ? s.parentStyleSheet.href : null;
    return Ys(s.cssText, B, e);
  }))).join(`
`);
}
async function Hg(A, e) {
  const t = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Eg(A, e);
  if (t) {
    const r2 = document.createElement("style"), n = document.createTextNode(t);
    r2.appendChild(n), A.firstChild ? A.insertBefore(r2, A.firstChild) : A.appendChild(r2);
  }
}
async function vg(A, e = {}) {
  const { width: t, height: r2 } = ks(A, e), n = await Ht(A, e, true);
  return await Hg(n, e), await Zs(n, e), Ug(n, e), await Pl(n, t, r2);
}
async function Ig(A, e = {}) {
  const { width: t, height: r2 } = ks(A, e), n = await vg(A, e), s = await ut(n), B = document.createElement("canvas"), i = B.getContext("2d"), a = e.pixelRatio || Gl(), o = e.canvasWidth || t, c = e.canvasHeight || r2;
  return B.width = o * a, B.height = c * a, e.skipAutoScale || Vl(B), B.style.width = `${o}`, B.style.height = `${c}`, e.backgroundColor && (i.fillStyle = e.backgroundColor, i.fillRect(0, 0, B.width, B.height)), i.drawImage(s, 0, 0, B.width, B.height), B;
}
async function mg(A, e = {}) {
  return (await Ig(A, e)).toDataURL();
}
const yg = async (A, e, t, r2) => {
  let n = false;
  A.style.backgroundColor || (A.style.backgroundColor = r2.png.backgroundColor, n = true);
  const s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  let B = "";
  s ? B = (await xl(A)).toDataURL("image/png") : B = await mg(A), await Lg(B, e), n && (A.style.backgroundColor = ""), t(false);
}, Lg = (A, e) => {
  const t = window.document.createElement("a");
  t.style.display = "none", t.download = e, t.href = A, document.body.appendChild(t), t.click(), document.body.removeChild(t), t.remove();
}, Kg = 200, bg = 200, xg = (A) => {
  const {
    csvOpts: e,
    downloadAllFunction: t,
    enableDownloadAsCSV: r2,
    enableDownloadAsPNG: n,
    pngOpts: s,
    preppingDownload: B,
    setPreppingDownload: i
  } = A, a = useTheme(), [o, c] = reactExports.useState(false), [l, g] = reactExports.useState(false), [U, w] = reactExports.useState(""), f = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (l && B) {
      if (!s) {
        console.error("No PNG options supplied");
        return;
      }
      const { chartName: F, element: v } = s;
      if (v) {
        const u = F.replace(/([^a-zA-Z0-9 ]+)/gi, "-"), H = (/* @__PURE__ */ new Date()).toISOString();
        setTimeout(() => {
          yg(
            v,
            `${u}-${H}.png`,
            i,
            a
          );
        }, bg);
      }
      g(false);
    }
  }, [l, s, B, i, a]), reactExports.useEffect(() => {
    var F;
    o && ((F = f.current) == null || F.focus());
  }, [o]), reactExports.useEffect(() => {
    let F = null;
    return U === "" ? F = setTimeout(() => {
      c(false);
    }, Kg) : F && clearTimeout(F), () => {
      F && clearTimeout(F);
    };
  }, [U]);
  const I = (F) => {
    var m2, E;
    if (F.preventDefault(), !e) {
      console.error("No CSV options supplied");
      return;
    }
    const { chartName: v, props: u } = e;
    let H = [];
    Array.isArray(u.results) ? H = u.results.reduce((b = [], M) => (M != null && M.data && b.push(...M.data), b), []) : H = (m2 = u.results) == null ? void 0 : m2.data, Oe$1(u, H, (E = u.prevResults) == null ? void 0 : E.data, v, i);
  }, h = (F, v, u) => {
    (F.key === "Enter" || F.key === " ") && (F.preventDefault(), v(F)), u && F.key === "Escape" && (F.preventDefault(), c(false));
  }, Q = (F) => {
    F.preventDefault(), c(false), i(true), g(true);
  }, L = () => {
    c(!o);
  };
  return !r2 && !n ? null : r2 && !n && !t ? /* @__PURE__ */ j$1.jsx("div", { className: "absolute top-0 right-0 z-5 flex items-center justify-end space-x-2", children: /* @__PURE__ */ j$1.jsx(
    "div",
    {
      onClick: I,
      className: "cursor-pointer",
      tabIndex: 0,
      onKeyDown: (F) => h(F, I, false),
      children: !B && /* @__PURE__ */ j$1.jsx(It, { className: "cursor-pointer hover:opacity-100 opacity-50" })
    }
  ) }) : !r2 && n ? /* @__PURE__ */ j$1.jsx("div", { className: "absolute top-0 right-0 z-5 flex items-center justify-end space-x-2", children: /* @__PURE__ */ j$1.jsx(
    "div",
    {
      onClick: Q,
      className: "cursor-pointer",
      tabIndex: 0,
      onKeyDown: (F) => h(F, Q, false),
      children: !B && /* @__PURE__ */ j$1.jsx(br, { className: "cursor-pointer hover:opacity-100 opacity-50" })
    }
  ) }) : /* @__PURE__ */ j$1.jsx(j$1.Fragment, { children: /* @__PURE__ */ j$1.jsx("div", { className: "absolute top-0 right-0 z-5 flex items-center justify-end space-x-2 ", children: /* @__PURE__ */ j$1.jsxs(
    "div",
    {
      onClick: L,
      className: "cursor-pointer relative w-3 flex justify-center",
      onKeyDown: (F) => h(F, L, true),
      tabIndex: 0,
      children: [
        !B && /* @__PURE__ */ j$1.jsx(aB, { className: "cursor-pointer hover:opacity-100 opacity-50" }),
        o && /* @__PURE__ */ j$1.jsx(j$1.Fragment, { children: /* @__PURE__ */ j$1.jsx(
          "div",
          {
            className: `
                absolute
                flex
                items-center
                max-w-100
                right-0
                top-6
                whitespace-nowrap
                bg-[color:--embeddable-downloadMenu-backgroundColor]
                p-[--embeddable-downloadMenu-paddingOuter]
                rounded-[--embeddable-downloadMenu-borderRadius]
              `,
            style: {
              border: a.downloadMenu.border,
              boxShadow: a.downloadMenu.boxShadow
            },
            children: /* @__PURE__ */ j$1.jsxs("ul", { children: [
              /* @__PURE__ */ j$1.jsx("li", { children: /* @__PURE__ */ j$1.jsxs(
                "a",
                {
                  href: "#",
                  onClick: I,
                  onKeyDown: (F) => h(F, I, false),
                  className: `
                        flex
                        items-center
                        hover:bg-[color:--embeddable-downloadMenu-hover-backgroundColor]
                        hover:text-[color:--embeddable-downloadMenu-hover-fontColor]
                        p-[--embeddable-downloadMenu-paddingInner]
                        text-[color:--embeddable-downloadMenu-font-color]
                      `,
                  tabIndex: 0,
                  ref: f,
                  onFocus: () => w("csv"),
                  onBlur: () => w(""),
                  children: [
                    /* @__PURE__ */ j$1.jsx(It, { className: "cursor-pointer inline-block mr-2" }),
                    " Download CSV"
                  ]
                }
              ) }),
              t && /* @__PURE__ */ j$1.jsx("li", { children: /* @__PURE__ */ j$1.jsxs(
                "a",
                {
                  href: "#",
                  onClick: (F) => {
                    F.preventDefault(), t();
                  },
                  onKeyDown: (F) => h(F, t, false),
                  className: `
                        flex
                        items-center
                        hover:bg-[color:--embeddable-downloadMenu-hover-backgroundColor]
                        hover:text-[color:--embeddable-downloadMenu-hover-fontColor]
                        p-[--embeddable-downloadMenu-paddingInner]
                        text-[color:--embeddable-downloadMenu-font-color]
                      `,
                  tabIndex: 0,
                  onFocus: () => w("downloadAll"),
                  onBlur: () => w(""),
                  children: [
                    /* @__PURE__ */ j$1.jsx(It, { className: "cursor-pointer inline-block mr-2" }),
                    " Download All as CSV"
                  ]
                }
              ) }),
              /* @__PURE__ */ j$1.jsx("li", { children: /* @__PURE__ */ j$1.jsxs(
                "a",
                {
                  href: "#",
                  onClick: Q,
                  onKeyDown: (F) => h(F, Q, false),
                  className: `
                        flex
                        items-center
                        hover:bg-[color:--embeddable-downloadMenu-hover-backgroundColor]
                        hover:text-[color:--embeddable-downloadMenu-hover-fontColor]
                        p-[--embeddable-downloadMenu-paddingInner]
                        text-[color:--embeddable-downloadMenu-font-color]
                      `,
                  tabIndex: 0,
                  onFocus: () => w("png"),
                  onBlur: () => w(""),
                  children: [
                    /* @__PURE__ */ j$1.jsx(br, { className: "cursor-pointer inline-block mr-2" }),
                    " Download PNG"
                  ]
                }
              ) })
            ] })
          }
        ) })
      ]
    }
  ) }) });
}, Vg = () => {
  const A = useTheme();
  return /* @__PURE__ */ j$1.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", children: [
    /* @__PURE__ */ j$1.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.9657 5.53436C11.2782 5.84678 11.2782 6.35331 10.9657 6.66573L6.16573 11.4657C5.85331 11.7782 5.34678 11.7782 5.03436 11.4657C4.72194 11.1533 4.72194 10.6468 5.03436 10.3344L9.83436 5.53436C10.1468 5.22194 10.6533 5.22194 10.9657 5.53436Z",
        fill: A.svg.fillNormal
      }
    ),
    /* @__PURE__ */ j$1.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.03436 5.53436C5.34678 5.22194 5.85331 5.22194 6.16573 5.53436L10.9657 10.3344C11.2782 10.6468 11.2782 11.1533 10.9657 11.4657C10.6533 11.7782 10.1468 11.7782 9.83436 11.4657L5.03436 6.66573C4.72194 6.35331 4.72194 5.84678 5.03436 5.53436Z",
        fill: A.svg.fillNormal
      }
    )
  ] });
}, Ng = (A) => /* @__PURE__ */ j$1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "16", viewBox: "0 0 17 16", fill: "none", children: /* @__PURE__ */ j$1.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.34837 10.7038C9.27113 10.7974 9.17828 10.8719 9.07543 10.9228C8.97258 10.9737 8.86187 11 8.75 11C8.63813 11 8.52742 10.9737 8.42457 10.9228C8.32172 10.8719 8.22887 10.7974 8.15163 10.7038L4.9518 6.53977C4.84941 6.40639 4.78253 6.24163 4.75921 6.06531C4.73588 5.889 4.75711 5.70864 4.82033 5.54595C4.88355 5.38326 4.98607 5.24518 5.11556 5.14832C5.24504 5.05146 5.39597 4.99995 5.55017 5H11.9498C12.104 4.99995 12.255 5.05146 12.3844 5.14832C12.5139 5.24518 12.6164 5.38326 12.6797 5.54595C12.7429 5.70864 12.7641 5.889 12.7408 6.06531C12.7175 6.24163 12.6506 6.40639 12.5482 6.53977L9.34837 10.7038Z",
    fill: A.fill
  }
) }), Pg = (A) => /* @__PURE__ */ j$1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ j$1.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.59837 5.2962C8.52113 5.20259 8.42828 5.12807 8.32543 5.07716C8.22258 5.02625 8.11187 5 8 5C7.88813 5 7.77742 5.02625 7.67457 5.07716C7.57172 5.12807 7.47887 5.20259 7.40163 5.2962L4.2018 9.46023C4.09941 9.59361 4.03253 9.75837 4.00921 9.93469C3.98588 10.111 4.00711 10.2914 4.07033 10.454C4.13355 10.6167 4.23607 10.7548 4.36556 10.8517C4.49504 10.9485 4.64597 11 4.80017 11H11.1998C11.354 11 11.505 10.9485 11.6344 10.8517C11.7639 10.7548 11.8664 10.6167 11.9297 10.454C11.9929 10.2914 12.0141 10.111 11.9908 9.93469C11.9675 9.75837 11.9006 9.59361 11.7982 9.46023L8.59837 5.2962Z",
    fill: A.fill
  }
) }), kg = ({
  className: A,
  onClick: e
}) => {
  const t = useTheme();
  return /* @__PURE__ */ j$1.jsx(
    "svg",
    {
      onClick: e,
      className: A || "",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ j$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z",
          fill: t.svg.fillNormal
        }
      )
    }
  );
}, _g = ({
  className: A,
  onClick: e
}) => {
  const t = useTheme();
  return /* @__PURE__ */ j$1.jsx(
    "svg",
    {
      onClick: e,
      className: A || "",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ j$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z",
          fill: t.svg.fillNormal
        }
      )
    }
  );
}, Xg = ({
  className: A,
  onClick: e
}) => {
  const t = useTheme();
  return /* @__PURE__ */ j$1.jsx(
    "svg",
    {
      onClick: e,
      className: A || "",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ j$1.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z",
          fill: t.svg.fillStrong
        }
      )
    }
  );
}, Jg = ({
  className: A,
  onClick: e
}) => {
  const t = useTheme();
  return /* @__PURE__ */ j$1.jsxs(
    "svg",
    {
      onClick: e,
      className: A || "",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ j$1.jsxs("g", { clipPath: "url(#clip0_137_1694)", children: [
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M2.70446 3.36737C2.35264 3.36737 2.01523 3.50713 1.76646 3.7559C1.51769 4.00468 1.37793 4.34208 1.37793 4.6939V17.2959C1.37793 17.6477 1.51769 17.9852 1.76646 18.2339C2.01523 18.4827 2.35264 18.6225 2.70446 18.6225H17.2963C17.6481 18.6225 17.9856 18.4827 18.2343 18.2339C18.483 17.9852 18.6228 17.6477 18.6228 17.2959V4.6939C18.6228 4.34208 18.483 4.00468 18.2343 3.7559C17.9856 3.50713 17.6481 3.36737 17.2963 3.36737H14.6432",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M5.35742 1.37756V5.35716",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M14.6436 1.37756V5.35716",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M5.35742 3.36737H11.9901",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M13.3164 8.67349V14.6426",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M11.3271 10.1658H11.8246C12.6487 10.1658 13.3168 9.49765 13.3168 8.67349",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M15.3066 14.6429H11.3271",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ j$1.jsx(
            "path",
            {
              d: "M4.69434 13.648C4.89921 14.2275 5.45198 14.6429 6.10177 14.6429H7.09666C7.92086 14.6429 8.589 13.9747 8.589 13.1505V12.9018C8.589 12.0776 7.92086 11.4095 7.09666 11.4095H6.59922H6.97231C7.72782 11.4095 8.34028 10.797 8.34028 10.0415C8.34028 9.28595 7.72781 8.67348 6.97229 8.67349H6.22612C5.59996 8.67351 5.07205 9.09421 4.90964 9.66839",
              stroke: t.svg.strokeNormal,
              strokeWidth: "1.3",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] }),
        /* @__PURE__ */ j$1.jsx("defs", { children: /* @__PURE__ */ j$1.jsx("clipPath", { id: "clip0_137_1694", children: /* @__PURE__ */ j$1.jsx("rect", { width: "20", height: "20", fill: t.svg.fillBkg }) }) })
      ]
    }
  );
}, Dg = () => {
  const A = useTheme();
  return /* @__PURE__ */ j$1.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ j$1.jsx("g", { clipPath: "url(#clip0_670_650)", children: /* @__PURE__ */ j$1.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.83602 0.318207C7.18728 0.109913 7.58813 0 7.9965 0C8.40488 0 8.80572 0.109913 9.15698 0.318207C9.5072 0.525883 9.79525 0.823724 9.99111 1.18064L15.595 11.2347C15.8645 11.7244 16.0017 12.2758 15.993 12.8347C15.9844 13.3936 15.8303 13.9406 15.5459 14.4217C15.2614 14.9029 14.8565 15.3016 14.371 15.5786C13.8855 15.8555 13.3362 16.0012 12.7773 16.0012C12.7773 16.0012 12.7773 16.0012 12.7773 16.0012H3.2125C2.65417 16.0011 2.10539 15.8555 1.62046 15.5788C1.13553 15.3021 0.731079 14.9038 0.446988 14.4231C0.162897 13.9425 0.00896955 13.3961 0.000380283 12.8378C-0.00820899 12.2795 0.128836 11.7287 0.398006 11.2395L0.400028 11.2358L6.00186 1.1807C6.19772 0.823759 6.48578 0.525895 6.83602 0.318207ZM7.9965 1.6C7.87531 1.6 7.75635 1.63262 7.65211 1.69443C7.54787 1.75625 7.46219 1.84498 7.40405 1.95132L7.40099 1.95692L1.7998 12.0108C1.79949 12.0114 1.79919 12.012 1.79888 12.0125C1.66437 12.2576 1.59589 12.5336 1.60019 12.8132C1.6045 13.0934 1.68177 13.3677 1.82438 13.609C1.967 13.8503 2.17003 14.0502 2.41346 14.1891C2.65686 14.328 2.93226 14.4011 3.2125 14.4012C3.21247 14.4012 3.21253 14.4012 3.2125 14.4012H12.7773C13.0582 14.4012 13.3342 14.328 13.5782 14.1888C13.8221 14.0497 14.0256 13.8493 14.1685 13.6075C14.3115 13.3658 14.3889 13.0909 14.3932 12.8101C14.3976 12.5299 14.329 12.2535 14.1942 12.0079C14.1939 12.0073 14.1935 12.0067 14.1932 12.0061L8.58893 1.95133C8.53079 1.84499 8.44513 1.75625 8.34089 1.69443C8.23665 1.63262 8.11769 1.6 7.9965 1.6ZM7.9965 4.00117C8.43833 4.00117 8.7965 4.35934 8.7965 4.80117V8.00117C8.7965 8.443 8.43833 8.80117 7.9965 8.80117C7.55467 8.80117 7.1965 8.443 7.1965 8.00117V4.80117C7.1965 4.35934 7.55467 4.00117 7.9965 4.00117ZM7.9965 11.3724C8.04955 11.3724 8.10042 11.3513 8.13792 11.3138C8.17543 11.2763 8.1965 11.2254 8.1965 11.1724C8.1965 11.1193 8.17543 11.0685 8.13792 11.0309C8.10042 10.9934 8.04954 10.9724 7.9965 10.9724C7.94346 10.9724 7.89259 10.9934 7.85508 11.0309C7.81757 11.0685 7.7965 11.1193 7.7965 11.1724C7.7965 11.2254 7.81757 11.2763 7.85508 11.3138C7.89259 11.3513 7.94346 11.3724 7.9965 11.3724ZM7.00655 10.1824C7.2691 9.91987 7.6252 9.77237 7.9965 9.77237C8.36781 9.77237 8.7239 9.91987 8.98645 10.1824C9.249 10.445 9.3965 10.8011 9.3965 11.1724C9.3965 11.5437 9.249 11.8998 8.98645 12.1623C8.7239 12.4249 8.3678 12.5724 7.9965 12.5724C7.6252 12.5724 7.2691 12.4249 7.00655 12.1623C6.744 11.8998 6.5965 11.5437 6.5965 11.1724C6.5965 10.8011 6.744 10.445 7.00655 10.1824Z",
        fill: A.svg.fillNormal
      }
    ) }),
    /* @__PURE__ */ j$1.jsx("defs", { children: /* @__PURE__ */ j$1.jsx("clipPath", { id: "clip0_670_650", children: /* @__PURE__ */ j$1.jsx("rect", { width: "16", height: "16", fill: A.svg.fillBkg }) }) })
  ] });
}, Wg = ({
  children: A,
  className: e,
  childContainerClassName: t,
  onResize: r$1,
  setResizeState: n,
  ...s
}) => {
  const B = reactExports.useRef(null), i = reactExports.useRef(null), a = reactExports.useRef(null), o = reactExports.useRef(null), { height: c } = iB(a, r$1 || null), [l, g] = reactExports.useState(false), U = useTheme();
  reactExports.useEffect(() => {
    if (!n)
      return;
    const Q = c;
    return B.current === null && (B.current = Q), Q !== B.current && (n == null || n(true), o.current && window.clearTimeout(o.current), o.current = window.setTimeout(() => {
      n == null || n(false);
    }, 300)), B.current = Q, () => {
      o.current && window.clearTimeout(o.current);
    };
  }, [c, n]);
  const { isLoading: w, error: f, data: I } = Array.isArray(s.results) ? {
    isLoading: s.results.some((Q) => Q.isLoading),
    error: s.results.some((Q) => Q.error),
    data: s.results.flatMap((Q) => Q.data).filter((Q) => Q)
  } : s.results || {}, h = !w && !(I != null && I.length);
  return /* @__PURE__ */ j$1.jsx(j$1.Fragment, { children: /* @__PURE__ */ j$1.jsxs("div", { className: "h-full relative font-embeddable text-sm flex flex-col", children: [
    s.enableDownloadAsCSV || s.enableDownloadAsPNG ? /* @__PURE__ */ j$1.jsx("div", { className: `${s.title ? "" : "h-[32px] w-full"}` }) : null,
    /* @__PURE__ */ j$1.jsx($e$1, { show: w || l }),
    /* @__PURE__ */ j$1.jsxs("div", { className: "h-full relative flex flex-col", ref: i, children: [
      /* @__PURE__ */ j$1.jsxs("div", { className: `flex flex-col items-${U.charts.textJustify}`, children: [
        /* @__PURE__ */ j$1.jsx(m, { title: s.title }),
        /* @__PURE__ */ j$1.jsx(r, { description: s.description })
      ] }),
      /* @__PURE__ */ j$1.jsxs("div", { ref: a, className: _e$1("relative grow flex flex-col", e || ""), children: [
        /* @__PURE__ */ j$1.jsx(
          "div",
          {
            className: _e$1("-z-0 flex flex-col", t || ""),
            style: { height: `${c}px` },
            children: c && s.results && (f || h) ? /* @__PURE__ */ j$1.jsxs("div", { className: "h-full flex items-center justify-center font-embeddable text-sm", children: [
              /* @__PURE__ */ j$1.jsx(Dg, {}),
              /* @__PURE__ */ j$1.jsx("div", { className: "whitespace-pre-wrap p-4 max-w-sm text-sm", children: f || "0 results" })
            ] }) : c ? A : null
          }
        ),
        w && !(I != null && I.length) && /* @__PURE__ */ j$1.jsx(
          "div",
          {
            className: `
                absolute
                h-full
                left-0
                overflow-hidden
                rounded
                skeleton-box
                top-0
                w-full
                z-10
                bg-[color:--embeddable-controls-backgrounds-colors-heavy]
              `
          }
        )
      ] })
    ] }),
    !w && (s.enableDownloadAsCSV || s.enableDownloadAsPNG) ? /* @__PURE__ */ j$1.jsx(
      xg,
      {
        csvOpts: {
          chartName: s.title || "chart",
          props: {
            ...s,
            results: s.results,
            prevResults: s.prevResults
          }
        },
        downloadAllFunction: s.downloadAllFunction,
        enableDownloadAsCSV: s.enableDownloadAsCSV,
        enableDownloadAsPNG: s.enableDownloadAsPNG,
        pngOpts: { chartName: s.title || "chart", element: i.current },
        preppingDownload: l,
        setPreppingDownload: g
      }
    ) : null
  ] }) });
};
export {
  Dg as D,
  Gg as G,
  Jg as J,
  Ng as N,
  Pg as P,
  Vg as V,
  Wg as W,
  Xg as X,
  _g as _,
  kg as k,
  rB as r
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLW1vcC1KN1Q4LUJwcVBhR0tHLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L0NvbnRhaW5lci1tb3AtSjdUOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqIGFzIEMgfSBmcm9tIFwiLi9qc3gtcnVudGltZS1DalFYYVNxUS5qc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgYXMgZmUsIHVzZVJlZiBhcyBWQSwgdXNlQ2FsbGJhY2sgYXMgcXMsIHVzZUxheW91dEVmZmVjdCBhcyB6cywgdXNlRWZmZWN0IGFzIHFlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkIGFzICRzLCBTIGFzIEFCLCB0IGFzIExyIH0gZnJvbSBcIi4vU3Bpbm5lci1CZU5vVGNpSi5qc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgQ0EgfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5pbXBvcnQgeyBUIGFzIGVCLCBEIGFzIHRCIH0gZnJvbSBcIi4vVGl0bGUtbi1JM0ZkdncuanNcIjtcbnZhciBtZSA9IHR5cGVvZiBnbG9iYWxUaGlzIDwgXCJ1XCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCA8IFwidVwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgPCBcInVcIiA/IHNlbGYgOiB7fTtcbmZ1bmN0aW9uIHJCKEEpIHtcbiAgcmV0dXJuIEEgJiYgQS5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChBLCBcImRlZmF1bHRcIikgPyBBLmRlZmF1bHQgOiBBO1xufVxuZnVuY3Rpb24gR2coQSkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEEsIFwiX19lc01vZHVsZVwiKSkgcmV0dXJuIEE7XG4gIHZhciBlID0gQS5kZWZhdWx0O1xuICBpZiAodHlwZW9mIGUgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiByKCkge1xuICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiByID8gUmVmbGVjdC5jb25zdHJ1Y3QoZSwgYXJndW1lbnRzLCB0aGlzLmNvbnN0cnVjdG9yKSA6IGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlID0gZS5wcm90b3R5cGU7XG4gIH0gZWxzZSB0ID0ge307XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pLCBPYmplY3Qua2V5cyhBKS5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQSwgcik7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIsIG4uZ2V0ID8gbiA6IHtcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFbcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLCB0O1xufVxudmFyIHZ0LCBLcjtcbmZ1bmN0aW9uIG5CKCkge1xuICBpZiAoS3IpIHJldHVybiB2dDtcbiAgS3IgPSAxO1xuICB2YXIgQSA9IFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLCBlID0gTmFOLCB0ID0gXCJbb2JqZWN0IFN5bWJvbF1cIiwgciA9IC9eXFxzK3xcXHMrJC9nLCBuID0gL15bLStdMHhbMC05YS1mXSskL2ksIHMgPSAvXjBiWzAxXSskL2ksIEIgPSAvXjBvWzAtN10rJC9pLCBpID0gcGFyc2VJbnQsIGEgPSB0eXBlb2YgbWUgPT0gXCJvYmplY3RcIiAmJiBtZSAmJiBtZS5PYmplY3QgPT09IE9iamVjdCAmJiBtZSwgbyA9IHR5cGVvZiBzZWxmID09IFwib2JqZWN0XCIgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGYsIGMgPSBhIHx8IG8gfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLCBsID0gT2JqZWN0LnByb3RvdHlwZSwgZyA9IGwudG9TdHJpbmcsIFUgPSBNYXRoLm1heCwgdyA9IE1hdGgubWluLCBmID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGMuRGF0ZS5ub3coKTtcbiAgfTtcbiAgZnVuY3Rpb24gSSh1LCBILCBtKSB7XG4gICAgdmFyIEUsIGIsIE0sIFYsIHksIFQsIHogPSAwLCBKID0gITEsIE4gPSAhMSwgb0EgPSAhMDtcbiAgICBpZiAodHlwZW9mIHUgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihBKTtcbiAgICBIID0gdihIKSB8fCAwLCBRKG0pICYmIChKID0gISFtLmxlYWRpbmcsIE4gPSBcIm1heFdhaXRcIiBpbiBtLCBNID0gTiA/IFUodihtLm1heFdhaXQpIHx8IDAsIEgpIDogTSwgb0EgPSBcInRyYWlsaW5nXCIgaW4gbSA/ICEhbS50cmFpbGluZyA6IG9BKTtcbiAgICBmdW5jdGlvbiAkKGspIHtcbiAgICAgIHZhciBtQSA9IEUsIG5lID0gYjtcbiAgICAgIHJldHVybiBFID0gYiA9IHZvaWQgMCwgeiA9IGssIFYgPSB1LmFwcGx5KG5lLCBtQSksIFY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVBKGspIHtcbiAgICAgIHJldHVybiB6ID0gaywgeSA9IHNldFRpbWVvdXQoQUEsIEgpLCBKID8gJChrKSA6IFY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhBKGspIHtcbiAgICAgIHZhciBtQSA9IGsgLSBULCBuZSA9IGsgLSB6LCB5ciA9IEggLSBtQTtcbiAgICAgIHJldHVybiBOID8gdyh5ciwgTSAtIG5lKSA6IHlyO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3QShrKSB7XG4gICAgICB2YXIgbUEgPSBrIC0gVCwgbmUgPSBrIC0gejtcbiAgICAgIHJldHVybiBUID09PSB2b2lkIDAgfHwgbUEgPj0gSCB8fCBtQSA8IDAgfHwgTiAmJiBuZSA+PSBNO1xuICAgIH1cbiAgICBmdW5jdGlvbiBBQSgpIHtcbiAgICAgIHZhciBrID0gZigpO1xuICAgICAgaWYgKHdBKGspKVxuICAgICAgICByZXR1cm4gUUEoayk7XG4gICAgICB5ID0gc2V0VGltZW91dChBQSwgaEEoaykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBRQShrKSB7XG4gICAgICByZXR1cm4geSA9IHZvaWQgMCwgb0EgJiYgRSA/ICQoaykgOiAoRSA9IGIgPSB2b2lkIDAsIFYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjQSgpIHtcbiAgICAgIHkgIT09IHZvaWQgMCAmJiBjbGVhclRpbWVvdXQoeSksIHogPSAwLCBFID0gVCA9IGIgPSB5ID0gdm9pZCAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBJQSgpIHtcbiAgICAgIHJldHVybiB5ID09PSB2b2lkIDAgPyBWIDogUUEoZigpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZEEoKSB7XG4gICAgICB2YXIgayA9IGYoKSwgbUEgPSB3QShrKTtcbiAgICAgIGlmIChFID0gYXJndW1lbnRzLCBiID0gdGhpcywgVCA9IGssIG1BKSB7XG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApXG4gICAgICAgICAgcmV0dXJuIHVBKFQpO1xuICAgICAgICBpZiAoTilcbiAgICAgICAgICByZXR1cm4geSA9IHNldFRpbWVvdXQoQUEsIEgpLCAkKFQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHkgPT09IHZvaWQgMCAmJiAoeSA9IHNldFRpbWVvdXQoQUEsIEgpKSwgVjtcbiAgICB9XG4gICAgcmV0dXJuIGRBLmNhbmNlbCA9IGNBLCBkQS5mbHVzaCA9IElBLCBkQTtcbiAgfVxuICBmdW5jdGlvbiBoKHUsIEgsIG0pIHtcbiAgICB2YXIgRSA9ICEwLCBiID0gITA7XG4gICAgaWYgKHR5cGVvZiB1ICE9IFwiZnVuY3Rpb25cIilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoQSk7XG4gICAgcmV0dXJuIFEobSkgJiYgKEUgPSBcImxlYWRpbmdcIiBpbiBtID8gISFtLmxlYWRpbmcgOiBFLCBiID0gXCJ0cmFpbGluZ1wiIGluIG0gPyAhIW0udHJhaWxpbmcgOiBiKSwgSSh1LCBILCB7XG4gICAgICBsZWFkaW5nOiBFLFxuICAgICAgbWF4V2FpdDogSCxcbiAgICAgIHRyYWlsaW5nOiBiXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gUSh1KSB7XG4gICAgdmFyIEggPSB0eXBlb2YgdTtcbiAgICByZXR1cm4gISF1ICYmIChIID09IFwib2JqZWN0XCIgfHwgSCA9PSBcImZ1bmN0aW9uXCIpO1xuICB9XG4gIGZ1bmN0aW9uIEwodSkge1xuICAgIHJldHVybiAhIXUgJiYgdHlwZW9mIHUgPT0gXCJvYmplY3RcIjtcbiAgfVxuICBmdW5jdGlvbiBGKHUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHUgPT0gXCJzeW1ib2xcIiB8fCBMKHUpICYmIGcuY2FsbCh1KSA9PSB0O1xuICB9XG4gIGZ1bmN0aW9uIHYodSkge1xuICAgIGlmICh0eXBlb2YgdSA9PSBcIm51bWJlclwiKVxuICAgICAgcmV0dXJuIHU7XG4gICAgaWYgKEYodSkpXG4gICAgICByZXR1cm4gZTtcbiAgICBpZiAoUSh1KSkge1xuICAgICAgdmFyIEggPSB0eXBlb2YgdS52YWx1ZU9mID09IFwiZnVuY3Rpb25cIiA/IHUudmFsdWVPZigpIDogdTtcbiAgICAgIHUgPSBRKEgpID8gSCArIFwiXCIgOiBIO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHUgIT0gXCJzdHJpbmdcIilcbiAgICAgIHJldHVybiB1ID09PSAwID8gdSA6ICt1O1xuICAgIHUgPSB1LnJlcGxhY2UociwgXCJcIik7XG4gICAgdmFyIG0gPSBzLnRlc3QodSk7XG4gICAgcmV0dXJuIG0gfHwgQi50ZXN0KHUpID8gaSh1LnNsaWNlKDIpLCBtID8gMiA6IDgpIDogbi50ZXN0KHUpID8gZSA6ICt1O1xuICB9XG4gIHJldHVybiB2dCA9IGgsIHZ0O1xufVxudmFyIHNCID0gbkIoKTtcbmNvbnN0IEJCID0gLyogQF9fUFVSRV9fICovIHJCKHNCKSwgaUIgPSAoQSwgZSwgdCA9IHt9KSA9PiB7XG4gIGNvbnN0IFtyLCBuXSA9IGZlKHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSksIHMgPSBWQShudWxsKSwgQiA9IFZBKGUpLCBpID0gcXMoKGEpID0+IHtcbiAgICB2YXIgbywgYywgbCwgZztcbiAgICBpZiAoKG8gPSBhWzBdKSAhPSBudWxsICYmIG8uY29udGVudFJlY3QpIHtcbiAgICAgIGNvbnN0IFUgPSB7XG4gICAgICAgIHdpZHRoOiAoYyA9IGFbMF0pID09IG51bGwgPyB2b2lkIDAgOiBjLmNvbnRlbnRSZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IChsID0gYVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IGwuY29udGVudFJlY3QuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgbihVKSwgKGcgPSBCLmN1cnJlbnQpID09IG51bGwgfHwgZy5jYWxsKEIsIFUpO1xuICAgIH1cbiAgfSwgW0JdKTtcbiAgcmV0dXJuIHpzKCgpID0+IHtcbiAgICBjb25zdCBhID0gQSAmJiBcImN1cnJlbnRcIiBpbiBBID8gQS5jdXJyZW50IDogQTtcbiAgICBpZiAoYSlcbiAgICAgIHJldHVybiBzLmN1cnJlbnQgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoQkIoaSwgKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuZGVsYXkpID8/IDApKSwgcy5jdXJyZW50Lm9ic2VydmUoYSksICgpID0+IHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIChvID0gcy5jdXJyZW50KSA9PSBudWxsIHx8IG8udW5vYnNlcnZlKGEpO1xuICAgICAgfTtcbiAgfSwgW0EsIGksIHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuZGVsYXldKSwgcjtcbn0sIEl0ID0gKEEpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWU6IGUsIGhlaWdodDogdCwgd2lkdGg6IHIgfSA9IEEsIG4gPSB0IHx8IFwiMjRcIiwgcyA9IHIgfHwgXCIyNFwiO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgIFwic3ZnXCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBlLFxuICAgICAgaGVpZ2h0OiBuLFxuICAgICAgaWQ6IFwiQ2xvdWQtRG93bmxvYWQtLVN0cmVhbWxpbmUtTWljcm8uc3ZnXCIsXG4gICAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgdmlld0JveDogYDAgMCAke3N9ICR7bn1gLFxuICAgICAgd2lkdGg6IHMsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkOiBcIk04LjIzMiAxLjEyODE5MkM2LjM1MzYxNiAxLjI2ODQyNCA0LjY0NTc1MiAyLjA0ODg1NjAwMDAwMDAwMDIgMy4zMjMzMDQwMDAwMDAwMDAzIDMuMzcxMzA0MDAwMDAwMDAwM0MyLjEzNzI5NiA0LjU1NzMxMjAwMDAwMDAwMDUgMS40MTQ0NDAwMDAwMDAwMDAxIDYuMDA1MzUyIDEuMTQ4NDQ4IDcuNzI4QzEuMTAyNTg0IDguMDI1MTQ0IDEuMDk0NTIgOC4xNzU5MzYgMS4wOTMzNjgwMDAwMDAwMDAxIDguNzZDMS4wOTE5MjggOS40ODE3MjggMS4xMTAzMTIgOS43MDY2MzE5OTk5OTk5OTkgMS4yMTUwOTYgMTAuMjQ4QzEuNjYxNTY4IDEyLjU1NDg1NjAwMDAwMDAwMSAzLjEyNjMzNjAwMDAwMDAwMDIgMTQuNTE5MDQgNS4yMTM4MzIgMTUuNjEwMDU2QzUuODI2Njk2IDE1LjkzMDM2IDYuMzEzMjI0IDE2LjEwNCA2LjU5NzgxNiAxNi4xMDRDNy41MTI4ODc5OTk5OTk5OTkgMTYuMTA0IDguMDg1Mjg4IDE1LjEzNzA2NCA3LjY1MTc1MTk5OTk5OTk5OSAxNC4zMjM2NTZDNy41NjQzNjgwMDAwMDAwMDEgMTQuMTU5NzM2IDcuMzg2NTA0IDEzLjk3MDkyNzk5OTk5OTk5OSA3LjIzNjc2OCAxMy44ODMxODRDNy4xNzg2NjM5OTk5OTk5OTk1IDEzLjg0OTEyOCA3LjAxMDEzNiAxMy43NzI2NCA2Ljg2MjI3MiAxMy43MTMxOTIwMDAwMDAwMDFDNi4xMjc1NiAxMy40MTc4NzIgNS41OTExNiAxMy4wNzIyNzIgNS4wNzA2NzIgMTIuNTU4ODY0QzMuNjc2Mjk2MDAwMDAwMDAwMiAxMS4xODM0NDggMy4xNTM4NCA5LjIwMTcyIDMuNjkyNzM2IDcuMzMyQzQuMjA5MjE2IDUuNTM5OTQ0IDUuNjU5MiA0LjEzMzk1MiA3LjQ1MiAzLjY4Njc2MDAwMDAwMDAwMDVDNy45Njk4NDggMy41NTc1OTIgOC4xMDg3MzYgMy41NDIyNTYgOC43NiAzLjU0MjM5OTk5OTk5OTk5OThDOS4yODc2NCAzLjU0MjUxOTk5OTk5OTk5OTcgOS40MTEyMTYwMDAwMDAwMDEgMy41NDk4MTYgOS42NTY0NzIgMy41OTUyOTYwMDAwMDAwMDAzQzExLjA0MjA2NCAzLjg1MjE5MjAwMDAwMDAwMDUgMTIuMjA3NjI0MDAwMDAwMDAxIDQuNTgyNDQgMTMuMDM0OTI3OTk5OTk5OTk5IDUuNzEyQzEzLjM5MzgyNCA2LjIwMjAzMiAxMy42NDk1NDQgNi43NDMzMDQgMTMuODQ5NDY0MDAwMDAwMDAxIDcuNDM2MjA4QzEzLjk1NzM5MiA3LjgxMDI5NTk5OTk5OTk5OSAxNC4wMDE3NjgwMDAwMDAwMDIgNy45MDg1NTIwMDAwMDAwMDEgMTQuMTQ0NDk2MDAwMDAwMDAyIDguMDg5NjA4QzE0LjM0ODQwMDAwMDAwMDAwMiA4LjM0ODI4IDE0LjY0NjI2NCA4LjQ5Mzc5MjAwMDAwMDAwMSAxNS4wMTM0NCA4LjUxNDA0OEMxNS4yODk1ODQwMDAwMDAwMDEgOC41MjkzMTIgMTUuNDM3Mzc2MDAwMDAwMDAyIDguNDg5MTEyIDE1Ljc0NCA4LjMxNTMyOEMxNi4zOTcwNjQgNy45NDUyMDAwMDAwMDAwMDEgMTYuODM5NzIgNy44MzAwNzE5OTk5OTk5OTk1IDE3LjUxNjgwOCA3Ljg1NDE0NEMxOC4wNDMyNzIgNy44NzI4ODggMTguMzgyNTYgNy45NjEwNCAxOC44NDI1OTIgOC4xOTg2NDAwMDAwMDAwMDFDMTkuMzEyMjk2IDguNDQxMjMyMDAwMDAwMDAxIDE5LjcxMDQ1NiA4Ljc5ODkwNCAyMC4wMDIyOTYgOS4yNDA0NTZDMjAuMzUyNjI0IDkuNzcwNDQ4IDIwLjU0MzY2NCAxMC40NjgyMjQgMjAuNTExNDU2IDExLjFDMjAuNDQ1MTQ0IDEyLjM5OTYyNCAxOS41OTQ1NiAxMy41MTcwNDAwMDAwMDAwMDEgMTguMzY2NTA0IDEzLjkxNzc2OEMxOC4xMTc1NzYgMTMuOTk5MDA4MDAwMDAwMDAyIDE3Ljc2MTUxMiAxNC4wNjM3MTIwMDAwMDAwMDIgMTcuNTU3Nzc2IDE0LjA2NDc0NEMxNy4xMDQzNDQgMTQuMDY3MDQ4IDE2LjgwNjUwNCAxNC4xNzYwMzIwMDAwMDAwMDEgMTYuNTUwNTIwMDAwMDAwMDAyIDE0LjQzMzMzNkMxNi4zMTAwODggMTQuNjc1MDQwMDAwMDAwMDAxIDE2LjIgMTQuOTM5Njg4IDE2LjIgMTUuMjc2QzE2LjIgMTUuNzQwNDAwMDAwMDAwMDAxIDE2LjQ2MzA0IDE2LjE2MDg4IDE2Ljg3NDg1NiAxNi4zNTQ4QzE3LjExOTg5NiAxNi40NzAxOTIgMTcuMjgzOTg0IDE2LjQ5MTI0IDE3LjcyMDkwNCAxNi40NjM0MjRDMTguNTg3Mzc2MDAwMDAwMDAzIDE2LjQwODI3MiAxOS4zNDE4MTYgMTYuMTkxMDI0IDIwLjA3NiAxNS43ODUyNTYwMDAwMDAwMDJDMjEuMTYyMjg4IDE1LjE4NDg5NTk5OTk5OTk5OCAyMi4wNjU2NzIgMTQuMTY3MTA0MDAwMDAwMDAyIDIyLjUxNDM1MiAxMy4wMzgxOTJDMjIuNzcwMTY3OTk5OTk5OTk4IDEyLjM5NDQ2NDAwMDAwMDAwMSAyMi44ODU3MjggMTEuODQxNDggMjIuOTExODYzOTk5OTk5OTk4IDExLjEzNjAwMDAwMDAwMDAwMUMyMi45MzY4MjQgMTAuNDYyMzkyIDIyLjg1MDA0IDkuODY0NTc2IDIyLjYzMjQ1NiA5LjIxMTM0NEMyMi4zNTE3MDQgOC4zNjg0MTYwMDAwMDAwMDIgMjEuOTM4ODA3OTk5OTk5OTk4IDcuNzAyMzY4MDAwMDAwMDAxIDIxLjMwMjI4IDcuMDY1NkMyMC44MTQ4ODggNi41NzgwMTYgMjAuMzkzMjA4IDYuMjc3MjAwMDAwMDAwMDAxIDE5Ljc4OCA1Ljk4NTMxMkMxOC42MTU1NTIgNS40MTk4NzIgMTcuMzE5MDQ4IDUuMjg5NDggMTYuMDM2NzA0IDUuNjA4MDA4QzE1LjkwMDY5NiA1LjY0MTc3NiAxNS43ODU4MzIwMDAwMDAwMDEgNS42NjU1MTIgMTUuNzgxNDM5OTk5OTk5OTk4IDUuNjYwNzEyQzE1Ljc3NzA0Nzk5OTk5OTk5OSA1LjY1NTkxMjAwMDAwMDAwMSAxNS43MDg0OCA1LjUyMjQgMTUuNjI5MDY0MDAwMDAwMDAxIDUuMzY0QzE1LjEwODgxNjAwMDAwMDAwMSA0LjMyNjUwNCAxNC4zNjg0NCAzLjQyMzAyNDAwMDAwMDAwMDMgMTMuNDY4OTQ0IDIuNzI3OTg0QzEzLjIxODk2IDIuNTM0ODA4IDEyLjczNzA0IDIuMjE4MzIwMDAwMDAwMDAwMyAxMi40NDE4ODggMi4wNTM0ODhDMTEuNjIxMzc2IDEuNTk1MjMyMDAwMDAwMDAwMiAxMC41NTE0MDggMS4yNjA1NzYwMDAwMDAwMDAxIDkuNTY0IDEuMTUzMzY4MDAwMDAwMDAwMkM5LjIzOTA0IDEuMTE4MDg4MDAwMDAwMDAwMiA4LjU0MzQ0OCAxLjEwNDkzNjAwMDAwMDAwMDEgOC4yMzIgMS4xMjgxOTJNMTEuNzg0IDExLjg1OTI2NDAwMDAwMDAwMUMxMS4zNTIgMTEuOTMwMDg4IDEwLjk0OTA4OCAxMi4zMDE2NTYgMTAuODM2NzkyIDEyLjczMjg0QzEwLjgwNDcwNDAwMDAwMDAwMSAxMi44NTYwMzIgMTAuOCAxMy4yNTEzMTIgMTAuOCAxNS44MjU3NDM5OTk5OTk5OThMMTAuOCAxOC43Nzc0MDggMTAuMTIyIDE4LjEwNTU3NkM5LjQ5OTQxNiAxNy40ODg2NTYgOS40MzAyNzIgMTcuNDI3NTc2MDAwMDAwMDAyIDkuMjc2IDE3LjM1NzkwNEM4LjkzMDI4MDAwMDAwMDAwMiAxNy4yMDE4MDggOC41NzU1NiAxNy4yMDQyMzIgOC4yMzQ4NTYgMTcuMzY1MDMyQzguMDMwNTIwMDAwMDAwMDAxIDE3LjQ2MTQ0IDcuODA0MDU2IDE3LjY3NDk5MiA3LjY5ODc5MjAwMDAwMDAwMSAxNy44NzA0OTYwMDAwMDAwMDNDNy41MTQ5MjggMTguMjExOTY4IDcuNTE0NDAwMDAwMDAwMDAxIDE4LjY2OTI4Nzk5OTk5OTk5OCA3LjY5NzQ5NiAxOS4wMTgyQzcuNzQ1MjU2IDE5LjEwOTIwOCA4LjE5NTQ3MiAxOS41NzU2NDggOS40Nzg3MDQgMjAuODYzNTYwMDAwMDAwMDAzQzEwLjQyMzIyNCAyMS44MTE1MzYgMTEuMjQ2MDg4IDIyLjYyNDI3MiAxMS4zMDcyODggMjIuNjY5NjMyQzExLjM2ODUxMiAyMi43MTQ5OTIgMTEuNDkyNzEyMDAwMDAwMDAxIDIyLjc4MTAxNTk5OTk5OTk5NyAxMS41ODMyODggMjIuODE2MzQ0QzExLjcyNDY3MiAyMi44NzE0NzIgMTEuNzgzNzEyIDIyLjg4MDU2OCAxMiAyMi44ODA0OTZDMTIuMjgzMDggMjIuODgwNDI0IDEyLjQ0MDc2MDAwMDAwMDAwMSAyMi44MzQ4NDggMTIuNjYgMjIuNjg5NzY4QzEyLjcyNiAyMi42NDYxMTIgMTMuNTU4MTc2IDIxLjgyOTUzNiAxNC41MDkyOTU5OTk5OTk5OTkgMjAuODc1MTc2QzE1LjgwNDQzMiAxOS41NzU2NDggMTYuMjU0Njk2IDE5LjEwOTM1MTk5OTk5OTk5OCAxNi4zMDI2NzIgMTkuMDE3OTEyQzE2LjQzMzc2IDE4Ljc2ODEyIDE2LjQ3NDcyOCAxOC40MDc0MjQgMTYuNDAzMjA4IDE4LjEzMjgzOTk5OTk5OTk5OEMxNi4zNTAyNjQgMTcuOTI5NTg0MDAwMDAwMDAyIDE2LjI1Njc2IDE3Ljc3MDYzMiAxNi4wODkxNDQgMTcuNTk5MDA4QzE1LjczNDk3NjAwMDAwMDAwMSAxNy4yMzYzNDQwMDAwMDAwMDMgMTUuMjAxNzkyMDAwMDAwMDAxIDE3LjE0MjE2Nzk5OTk5OTk5OCAxNC43MjQgMTcuMzU3OTA0QzE0LjU2OTcyOCAxNy40Mjc1NzYwMDAwMDAwMDIgMTQuNTAwNTg0MDAwMDAwMDAyIDE3LjQ4ODY1NiAxMy44NzggMTguMTA1NTc2TDEzLjIwMDAwMDAwMDAwMDAwMSAxOC43Nzc0MDggMTMuMjAwMDAwMDAwMDAwMDAxIDE1LjgyNTc0Mzk5OTk5OTk5OEMxMy4yMDAwMDAwMDAwMDAwMDEgMTIuNTk5NTY4IDEzLjIwNTc2IDEyLjczODk1OTk5OTk5OTk5OSAxMy4wNjEyMDggMTIuNDcwNDk2QzEzLjAyNTM1MiAxMi40MDM4NzIgMTIuOTI5OTA0IDEyLjI4MTcxMiAxMi44NDkxNDM5OTk5OTk5OTkgMTIuMTk5MDA4QzEyLjY3NjE3NiAxMi4wMjE4ODggMTIuNDMyNzIgMTEuODk1MjE2MDAwMDAwMDAxIDEyLjE5MiAxMS44NTcwOEMxMi4wMTQxMzYgMTEuODI4OTA0IDExLjk2NzYyNCAxMS44MjkxNDQgMTEuNzg0IDExLjg1OTI2NDAwMDAwMDAwMVwiLFxuICAgICAgICAgIHN0cm9rZTogXCJub25lXCIsXG4gICAgICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgKTtcbn0sIGJyID0gKEEpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWU6IGUsIGhlaWdodDogdCwgd2lkdGg6IHIgfSA9IEE7XG4gIENBKCk7XG4gIGNvbnN0IG4gPSB0IHx8IFwiMjRcIiwgcyA9IHIgfHwgXCIyNFwiO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4cyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogZSxcbiAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgaGVpZ2h0OiBuLFxuICAgICAgdmlld0JveDogYDAgMCAke3N9ICR7bn1gLFxuICAgICAgd2lkdGg6IHMsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICAgIGQ6IFwiTTIuMDYzOTMgMi4wNjQxMkMyLjY5NDA1IDEuNDM0IDMuNTQ4NjggMS4wOCA0LjQzOTgxIDEuMDhIMTkuNTU5OEMyMC40NTA5IDEuMDggMjEuMzA1NiAxLjQzNCAyMS45MzU3IDIuMDY0MTJDMjIuNTY1OCAyLjY5NDI0IDIyLjkxOTggMy41NDg4NyAyMi45MTk4IDQuNDRWMTkuNTZDMjIuOTE5OCAyMC40NTExIDIyLjU2NTggMjEuMzA1OCAyMS45MzU3IDIxLjkzNTlDMjEuMzA1NiAyMi41NjYgMjAuNDUwOSAyMi45MiAxOS41NTk4IDIyLjkySDQuNDM5ODFDMy41NDg2OCAyMi45MiAyLjY5NDA1IDIyLjU2NiAyLjA2MzkzIDIxLjkzNTlDMS40MzM4MSAyMS4zMDU4IDEuMDc5ODEgMjAuNDUxMSAxLjA3OTgxIDE5LjU2VjQuNDRDMS4wNzk4MSAzLjU0ODg3IDEuNDMzOCAyLjY5NDI0IDIuMDYzOTMgMi4wNjQxMlpNNC40Mzk4MSAzLjQ4QzQuMTg1MiAzLjQ4IDMuOTQxMDIgMy41ODExNCAzLjc2MDk4IDMuNzYxMThDMy41ODA5NSAzLjk0MTIxIDMuNDc5ODEgNC4xODUzOSAzLjQ3OTgxIDQuNDRWMTkuNTZDMy40Nzk4MSAxOS44MTQ2IDMuNTgwOTUgMjAuMDU4OCAzLjc2MDk4IDIwLjIzODhDMy45NDEwMiAyMC40MTg5IDQuMTg1MiAyMC41MiA0LjQzOTgxIDIwLjUySDE5LjU1OThDMTkuODE0NCAyMC41MiAyMC4wNTg2IDIwLjQxODkgMjAuMjM4NiAyMC4yMzg4QzIwLjQxODcgMjAuMDU4OCAyMC41MTk4IDE5LjgxNDYgMjAuNTE5OCAxOS41NlY0LjQ0QzIwLjUxOTggNC4xODUzOSAyMC40MTg3IDMuOTQxMjEgMjAuMjM4NiAzLjc2MTE4QzIwLjA1ODYgMy41ODExNCAxOS44MTQ0IDMuNDggMTkuNTU5OCAzLjQ4SDQuNDM5ODFaXCIsXG4gICAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgICAgZDogXCJNMTIuODYzOSA2LjM4NDEyQzEzLjQ5NCA1Ljc1NCAxNC4zNDg3IDUuNCAxNS4yMzk4IDUuNEMxNi4xMzA5IDUuNCAxNi45ODU2IDUuNzU0IDE3LjYxNTcgNi4zODQxMkMxOC4yNDU4IDcuMDE0MjQgMTguNTk5OCA3Ljg2ODg3IDE4LjU5OTggOC43NkMxOC41OTk4IDkuNjUxMTMgMTguMjQ1OCAxMC41MDU4IDE3LjYxNTcgMTEuMTM1OUMxNi45ODU2IDExLjc2NiAxNi4xMzA5IDEyLjEyIDE1LjIzOTggMTIuMTJDMTQuMzQ4NyAxMi4xMiAxMy40OTQgMTEuNzY2IDEyLjg2MzkgMTEuMTM1OUMxMi4yMzM4IDEwLjUwNTggMTEuODc5OCA5LjY1MTEzIDExLjg3OTggOC43NkMxMS44Nzk4IDcuODY4ODcgMTIuMjMzOCA3LjAxNDI0IDEyLjg2MzkgNi4zODQxMlpNMTUuMjM5OCA3LjhDMTQuOTg1MiA3LjggMTQuNzQxIDcuOTAxMTQgMTQuNTYxIDguMDgxMThDMTQuMzgwOSA4LjI2MTIxIDE0LjI3OTggOC41MDUzOSAxNC4yNzk4IDguNzZDMTQuMjc5OCA5LjAxNDYxIDE0LjM4MDkgOS4yNTg3OSAxNC41NjEgOS40Mzg4MkMxNC43NDEgOS42MTg4NiAxNC45ODUyIDkuNzIgMTUuMjM5OCA5LjcyQzE1LjQ5NDQgOS43MiAxNS43Mzg2IDkuNjE4ODYgMTUuOTE4NiA5LjQzODgyQzE2LjA5ODcgOS4yNTg3OSAxNi4xOTk4IDkuMDE0NjEgMTYuMTk5OCA4Ljc2QzE2LjE5OTggOC41MDUzOSAxNi4wOTg3IDguMjYxMjEgMTUuOTE4NiA4LjA4MTE4QzE1LjczODYgNy45MDExNCAxNS40OTQ0IDcuOCAxNS4yMzk4IDcuOFpcIixcbiAgICAgICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgICAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgICAgICBkOiBcIk00LjQ2MDU5IDExLjU0NzRDNy4zNTU4NiAxMS40NzQgMTAuMTgzIDEyLjQzMzQgMTIuNDM1OCAxNC4yNTRDMTQuNjkyOCAxNi4wNzgxIDE2LjIyNTQgMTguNjQ3IDE2Ljc1ODUgMjEuNDk5NkMxNi44ODAyIDIyLjE1MSAxNi40NTA4IDIyLjc3NzggMTUuNzk5NCAyMi44OTk2QzE1LjE0NzkgMjMuMDIxMyAxNC41MjExIDIyLjU5MTkgMTQuMzk5MyAyMS45NDA0QzEzLjk3MTIgMTkuNjQ5MiAxMi43NDAxIDE3LjU4NTggMTAuOTI3MiAxNi4xMjA3QzkuMTE0MzkgMTQuNjU1NiA2LjgzODU0IDEzLjg4NDggNC41MDg1IDEzLjk0NjlDNC40OTc4NCAxMy45NDcyIDQuNDg3MTggMTMuOTQ3NCA0LjQ3NjUzIDEzLjk0NzRDMy44MTAxMSAxMy45NDc0IDMuMTQ3OTkgMTQuMDA2IDIuNTAxNTkgMTQuMTI3NkMxLjg1MDI3IDE0LjI1MDEgMS4yMjI5NyAxMy44MjEzIDEuMTAwNDggMTMuMTdDMC45Nzc5OTEgMTIuNTE4NyAxLjQwNjcgMTEuODkxNCAyLjA1ODAyIDExLjc2ODlDMi44NTM1NSAxMS42MTkzIDMuNjU5MTQgMTEuNTQ4MyA0LjQ2MDU5IDExLjU0NzRaXCIsXG4gICAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgICAgZDogXCJNMTcuOTM2MSAxMy43OTE2QzE1Ljk2NiAxMy43ODYzIDE0LjAyMDUgMTQuMjI5IDEyLjI0NjYgMTUuMDg2MkMxMS42NDk5IDE1LjM3NDUgMTEuMzk5OSAxNi4wOTIgMTEuNjg4MyAxNi42ODg4QzExLjk3NjcgMTcuMjg1NSAxMi42OTQyIDE3LjUzNTUgMTMuMjkwOSAxNy4yNDcxQzE0LjczNzkgMTYuNTQ3OSAxNi4zMjQ5IDE2LjE4NjkgMTcuOTMyIDE2LjE5MTZMMTcuOTM3OCAxNi4xOTE2QzE5LjA5NDQgMTYuMTg5MyAyMC4yNDM2IDE2LjM3NDMgMjEuMzQxIDE2LjczOTRDMjEuOTY5OSAxNi45NDg2IDIyLjY0OTMgMTYuNjA4NCAyMi44NTg1IDE1Ljk3OTVDMjMuMDY3NyAxNS4zNTA2IDIyLjcyNzUgMTQuNjcxMyAyMi4wOTg2IDE0LjQ2MjFDMjAuNzU2MyAxNC4wMTU1IDE5LjM1MDYgMTMuNzg5MSAxNy45MzYxIDEzLjc5MTZaXCIsXG4gICAgICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICBdXG4gICAgfVxuICApO1xufSwgYUIgPSAoQSkgPT4ge1xuICBjb25zdCBlID0gQ0EoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXCJzdmdcIiwgeyB3aWR0aDogXCI0XCIsIGhlaWdodDogXCIxOFwiLCB2aWV3Qm94OiBcIjAgMCA0IDE4XCIsIGZpbGw6IFwibm9uZVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgIFwicGF0aFwiLFxuICAgICAge1xuICAgICAgICBkOiBcIk00IDJDNCAzLjEwNDU3IDMuMTA0NTcgNCAyIDRDMC44OTU0MyA0IDAgMy4xMDQ1NyAwIDJDMCAwLjg5NTQzIDAuODk1NDMgMCAyIDBDMy4xMDQ1NyAwIDQgMC44OTU0MyA0IDJaXCIsXG4gICAgICAgIGZpbGw6IGUuc3ZnLmZpbGxOb3JtYWxcbiAgICAgIH1cbiAgICApLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgIFwicGF0aFwiLFxuICAgICAge1xuICAgICAgICBkOiBcIk00IDlDNCAxMC4xMDQ2IDMuMTA0NTcgMTEgMiAxMUMwLjg5NTQzIDExIDAgMTAuMTA0NiAwIDlDMCA3Ljg5NTQzIDAuODk1NDMgNyAyIDdDMy4xMDQ1NyA3IDQgNy44OTU0MyA0IDlaXCIsXG4gICAgICAgIGZpbGw6IGUuc3ZnLmZpbGxOb3JtYWxcbiAgICAgIH1cbiAgICApLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgIFwicGF0aFwiLFxuICAgICAge1xuICAgICAgICBkOiBcIk00IDE2QzQgMTcuMTA0NiAzLjEwNDU3IDE4IDIgMThDMC44OTU0MyAxOCAwIDE3LjEwNDYgMCAxNkMwIDE0Ljg5NTQgMC44OTU0MyAxNCAyIDE0QzMuMTA0NTcgMTQgNCAxNC44OTU0IDQgMTZaXCIsXG4gICAgICAgIGZpbGw6IGUuc3ZnLmZpbGxOb3JtYWxcbiAgICAgIH1cbiAgICApXG4gIF0gfSk7XG59O1xuLyohXG4gKiBodG1sMmNhbnZhcyAxLjQuMSA8aHR0cHM6Ly9odG1sMmNhbnZhcy5oZXJ0emVuLmNvbT5cbiAqIENvcHlyaWdodCAoYykgMjAyMiBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZVxuICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciBadCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIFp0ID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24odCwgcikge1xuICAgIHQuX19wcm90b19fID0gcjtcbiAgfSB8fCBmdW5jdGlvbih0LCByKSB7XG4gICAgZm9yICh2YXIgbiBpbiByKSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwociwgbikgJiYgKHRbbl0gPSByW25dKTtcbiAgfSwgWnQoQSwgZSk7XG59O1xuZnVuY3Rpb24gZ0EoQSwgZSkge1xuICBpZiAodHlwZW9mIGUgIT0gXCJmdW5jdGlvblwiICYmIGUgIT09IG51bGwpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoZSkgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBadChBLCBlKTtcbiAgZnVuY3Rpb24gdCgpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gQTtcbiAgfVxuICBBLnByb3RvdHlwZSA9IGUgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGUpIDogKHQucHJvdG90eXBlID0gZS5wcm90b3R5cGUsIG5ldyB0KCkpO1xufVxudmFyIGp0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqdCA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24oZSkge1xuICAgIGZvciAodmFyIHQsIHIgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgciA8IG47IHIrKykge1xuICAgICAgdCA9IGFyZ3VtZW50c1tyXTtcbiAgICAgIGZvciAodmFyIHMgaW4gdCkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHMpICYmIChlW3NdID0gdFtzXSk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9LCBqdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmZ1bmN0aW9uIHEoQSwgZSwgdCwgcikge1xuICBmdW5jdGlvbiBuKHMpIHtcbiAgICByZXR1cm4gcyBpbnN0YW5jZW9mIHQgPyBzIDogbmV3IHQoZnVuY3Rpb24oQikge1xuICAgICAgQihzKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbmV3ICh0IHx8ICh0ID0gUHJvbWlzZSkpKGZ1bmN0aW9uKHMsIEIpIHtcbiAgICBmdW5jdGlvbiBpKGMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG8oci5uZXh0KGMpKTtcbiAgICAgIH0gY2F0Y2ggKGwpIHtcbiAgICAgICAgQihsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYShjKSB7XG4gICAgICB0cnkge1xuICAgICAgICBvKHIudGhyb3coYykpO1xuICAgICAgfSBjYXRjaCAobCkge1xuICAgICAgICBCKGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvKGMpIHtcbiAgICAgIGMuZG9uZSA/IHMoYy52YWx1ZSkgOiBuKGMudmFsdWUpLnRoZW4oaSwgYSk7XG4gICAgfVxuICAgIG8oKHIgPSByLmFwcGx5KEEsIFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBaKEEsIGUpIHtcbiAgdmFyIHQgPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoc1swXSAmIDEpIHRocm93IHNbMV07XG4gICAgcmV0dXJuIHNbMV07XG4gIH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIHIsIG4sIHMsIEI7XG4gIHJldHVybiBCID0geyBuZXh0OiBpKDApLCB0aHJvdzogaSgxKSwgcmV0dXJuOiBpKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT0gXCJmdW5jdGlvblwiICYmIChCW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIEI7XG4gIGZ1bmN0aW9uIGkobykge1xuICAgIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gYShbbywgY10pO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gYShvKSB7XG4gICAgaWYgKHIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgIGZvciAoOyB0OyApIHRyeSB7XG4gICAgICBpZiAociA9IDEsIG4gJiYgKHMgPSBvWzBdICYgMiA/IG4ucmV0dXJuIDogb1swXSA/IG4udGhyb3cgfHwgKChzID0gbi5yZXR1cm4pICYmIHMuY2FsbChuKSwgMCkgOiBuLm5leHQpICYmICEocyA9IHMuY2FsbChuLCBvWzFdKSkuZG9uZSkgcmV0dXJuIHM7XG4gICAgICBzd2l0Y2ggKG4gPSAwLCBzICYmIChvID0gW29bMF0gJiAyLCBzLnZhbHVlXSksIG9bMF0pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcyA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gdC5sYWJlbCsrLCB7IHZhbHVlOiBvWzFdLCBkb25lOiAhMSB9O1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgdC5sYWJlbCsrLCBuID0gb1sxXSwgbyA9IFswXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG8gPSB0Lm9wcy5wb3AoKSwgdC50cnlzLnBvcCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChzID0gdC50cnlzLCAhKHMgPSBzLmxlbmd0aCA+IDAgJiYgc1tzLmxlbmd0aCAtIDFdKSAmJiAob1swXSA9PT0gNiB8fCBvWzBdID09PSAyKSkge1xuICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9bMF0gPT09IDMgJiYgKCFzIHx8IG9bMV0gPiBzWzBdICYmIG9bMV0gPCBzWzNdKSkge1xuICAgICAgICAgICAgdC5sYWJlbCA9IG9bMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9bMF0gPT09IDYgJiYgdC5sYWJlbCA8IHNbMV0pIHtcbiAgICAgICAgICAgIHQubGFiZWwgPSBzWzFdLCBzID0gbztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocyAmJiB0LmxhYmVsIDwgc1syXSkge1xuICAgICAgICAgICAgdC5sYWJlbCA9IHNbMl0sIHQub3BzLnB1c2gobyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc1syXSAmJiB0Lm9wcy5wb3AoKSwgdC50cnlzLnBvcCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbyA9IGUuY2FsbChBLCB0KTtcbiAgICB9IGNhdGNoIChjKSB7XG4gICAgICBvID0gWzYsIGNdLCBuID0gMDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgciA9IHMgPSAwO1xuICAgIH1cbiAgICBpZiAob1swXSAmIDUpIHRocm93IG9bMV07XG4gICAgcmV0dXJuIHsgdmFsdWU6IG9bMF0gPyBvWzFdIDogdm9pZCAwLCBkb25lOiAhMCB9O1xuICB9XG59XG5mdW5jdGlvbiB5ZShBLCBlLCB0KSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciByID0gMCwgbiA9IGUubGVuZ3RoLCBzOyByIDwgbjsgcisrKVxuICAgIChzIHx8ICEociBpbiBlKSkgJiYgKHMgfHwgKHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLCAwLCByKSksIHNbcl0gPSBlW3JdKTtcbiAgcmV0dXJuIEEuY29uY2F0KHMgfHwgZSk7XG59XG52YXIgdkEgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0LCByLCBuKSB7XG4gICAgICB0aGlzLmxlZnQgPSBlLCB0aGlzLnRvcCA9IHQsIHRoaXMud2lkdGggPSByLCB0aGlzLmhlaWdodCA9IG47XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihlLCB0LCByLCBuKSB7XG4gICAgICByZXR1cm4gbmV3IEEodGhpcy5sZWZ0ICsgZSwgdGhpcy50b3AgKyB0LCB0aGlzLndpZHRoICsgciwgdGhpcy5oZWlnaHQgKyBuKTtcbiAgICB9LCBBLmZyb21DbGllbnRSZWN0ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyBBKHQubGVmdCArIGUud2luZG93Qm91bmRzLmxlZnQsIHQudG9wICsgZS53aW5kb3dCb3VuZHMudG9wLCB0LndpZHRoLCB0LmhlaWdodCk7XG4gICAgfSwgQS5mcm9tRE9NUmVjdExpc3QgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICB2YXIgciA9IEFycmF5LmZyb20odCkuZmluZChmdW5jdGlvbihuKSB7XG4gICAgICAgIHJldHVybiBuLndpZHRoICE9PSAwO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gciA/IG5ldyBBKHIubGVmdCArIGUud2luZG93Qm91bmRzLmxlZnQsIHIudG9wICsgZS53aW5kb3dCb3VuZHMudG9wLCByLndpZHRoLCByLmhlaWdodCkgOiBBLkVNUFRZO1xuICAgIH0sIEEuRU1QVFkgPSBuZXcgQSgwLCAwLCAwLCAwKSwgQTtcbiAgfSgpXG4pLCB3dCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIHZBLmZyb21DbGllbnRSZWN0KEEsIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xufSwgb0IgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5ib2R5LCB0ID0gQS5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICghZSB8fCAhdClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IGRvY3VtZW50IHNpemVcIik7XG4gIHZhciByID0gTWF0aC5tYXgoTWF0aC5tYXgoZS5zY3JvbGxXaWR0aCwgdC5zY3JvbGxXaWR0aCksIE1hdGgubWF4KGUub2Zmc2V0V2lkdGgsIHQub2Zmc2V0V2lkdGgpLCBNYXRoLm1heChlLmNsaWVudFdpZHRoLCB0LmNsaWVudFdpZHRoKSksIG4gPSBNYXRoLm1heChNYXRoLm1heChlLnNjcm9sbEhlaWdodCwgdC5zY3JvbGxIZWlnaHQpLCBNYXRoLm1heChlLm9mZnNldEhlaWdodCwgdC5vZmZzZXRIZWlnaHQpLCBNYXRoLm1heChlLmNsaWVudEhlaWdodCwgdC5jbGllbnRIZWlnaHQpKTtcbiAgcmV0dXJuIG5ldyB2QSgwLCAwLCByLCBuKTtcbn0sIFF0ID0gZnVuY3Rpb24oQSkge1xuICBmb3IgKHZhciBlID0gW10sIHQgPSAwLCByID0gQS5sZW5ndGg7IHQgPCByOyApIHtcbiAgICB2YXIgbiA9IEEuY2hhckNvZGVBdCh0KyspO1xuICAgIGlmIChuID49IDU1Mjk2ICYmIG4gPD0gNTYzMTkgJiYgdCA8IHIpIHtcbiAgICAgIHZhciBzID0gQS5jaGFyQ29kZUF0KHQrKyk7XG4gICAgICAocyAmIDY0NTEyKSA9PT0gNTYzMjAgPyBlLnB1c2goKChuICYgMTAyMykgPDwgMTApICsgKHMgJiAxMDIzKSArIDY1NTM2KSA6IChlLnB1c2gobiksIHQtLSk7XG4gICAgfSBlbHNlXG4gICAgICBlLnB1c2gobik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBHID0gZnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIEEgPSBbXSwgZSA9IDA7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspXG4gICAgQVtlXSA9IGFyZ3VtZW50c1tlXTtcbiAgaWYgKFN0cmluZy5mcm9tQ29kZVBvaW50KVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludC5hcHBseShTdHJpbmcsIEEpO1xuICB2YXIgdCA9IEEubGVuZ3RoO1xuICBpZiAoIXQpXG4gICAgcmV0dXJuIFwiXCI7XG4gIGZvciAodmFyIHIgPSBbXSwgbiA9IC0xLCBzID0gXCJcIjsgKytuIDwgdDsgKSB7XG4gICAgdmFyIEIgPSBBW25dO1xuICAgIEIgPD0gNjU1MzUgPyByLnB1c2goQikgOiAoQiAtPSA2NTUzNiwgci5wdXNoKChCID4+IDEwKSArIDU1Mjk2LCBCICUgMTAyNCArIDU2MzIwKSksIChuICsgMSA9PT0gdCB8fCByLmxlbmd0aCA+IDE2Mzg0KSAmJiAocyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgciksIHIubGVuZ3RoID0gMCk7XG4gIH1cbiAgcmV0dXJuIHM7XG59LCB4ciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiLCBjQiA9IHR5cGVvZiBVaW50OEFycmF5ID4gXCJ1XCIgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKHZhciBMZSA9IDA7IExlIDwgeHIubGVuZ3RoOyBMZSsrKVxuICBjQlt4ci5jaGFyQ29kZUF0KExlKV0gPSBMZTtcbnZhciBEciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiLCBvZSA9IHR5cGVvZiBVaW50OEFycmF5ID4gXCJ1XCIgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKHZhciBLZSA9IDA7IEtlIDwgRHIubGVuZ3RoOyBLZSsrKVxuICBvZVtEci5jaGFyQ29kZUF0KEtlKV0gPSBLZTtcbnZhciBsQiA9IGZ1bmN0aW9uKEEpIHtcbiAgdmFyIGUgPSBBLmxlbmd0aCAqIDAuNzUsIHQgPSBBLmxlbmd0aCwgciwgbiA9IDAsIHMsIEIsIGksIGE7XG4gIEFbQS5sZW5ndGggLSAxXSA9PT0gXCI9XCIgJiYgKGUtLSwgQVtBLmxlbmd0aCAtIDJdID09PSBcIj1cIiAmJiBlLS0pO1xuICB2YXIgbyA9IHR5cGVvZiBBcnJheUJ1ZmZlciA8IFwidVwiICYmIHR5cGVvZiBVaW50OEFycmF5IDwgXCJ1XCIgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNsaWNlIDwgXCJ1XCIgPyBuZXcgQXJyYXlCdWZmZXIoZSkgOiBuZXcgQXJyYXkoZSksIGMgPSBBcnJheS5pc0FycmF5KG8pID8gbyA6IG5ldyBVaW50OEFycmF5KG8pO1xuICBmb3IgKHIgPSAwOyByIDwgdDsgciArPSA0KVxuICAgIHMgPSBvZVtBLmNoYXJDb2RlQXQocildLCBCID0gb2VbQS5jaGFyQ29kZUF0KHIgKyAxKV0sIGkgPSBvZVtBLmNoYXJDb2RlQXQociArIDIpXSwgYSA9IG9lW0EuY2hhckNvZGVBdChyICsgMyldLCBjW24rK10gPSBzIDw8IDIgfCBCID4+IDQsIGNbbisrXSA9IChCICYgMTUpIDw8IDQgfCBpID4+IDIsIGNbbisrXSA9IChpICYgMykgPDwgNiB8IGEgJiA2MztcbiAgcmV0dXJuIG87XG59LCBnQiA9IGZ1bmN0aW9uKEEpIHtcbiAgZm9yICh2YXIgZSA9IEEubGVuZ3RoLCB0ID0gW10sIHIgPSAwOyByIDwgZTsgciArPSAyKVxuICAgIHQucHVzaChBW3IgKyAxXSA8PCA4IHwgQVtyXSk7XG4gIHJldHVybiB0O1xufSwgdUIgPSBmdW5jdGlvbihBKSB7XG4gIGZvciAodmFyIGUgPSBBLmxlbmd0aCwgdCA9IFtdLCByID0gMDsgciA8IGU7IHIgKz0gNClcbiAgICB0LnB1c2goQVtyICsgM10gPDwgMjQgfCBBW3IgKyAyXSA8PCAxNiB8IEFbciArIDFdIDw8IDggfCBBW3JdKTtcbiAgcmV0dXJuIHQ7XG59LCBQQSA9IDUsIEZyID0gMTEsIG10ID0gMiwgd0IgPSBGciAtIFBBLCBHbiA9IDY1NTM2ID4+IFBBLCBRQiA9IDEgPDwgUEEsIHl0ID0gUUIgLSAxLCBmQiA9IDEwMjQgPj4gUEEsIENCID0gR24gKyBmQiwgVUIgPSBDQiwgRkIgPSAzMiwgaEIgPSBVQiArIEZCLCBkQiA9IDY1NTM2ID4+IEZyLCBwQiA9IDEgPDwgd0IsIEVCID0gcEIgLSAxLCBTciA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgcmV0dXJuIEEuc2xpY2UgPyBBLnNsaWNlKGUsIHQpIDogbmV3IFVpbnQxNkFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKEEsIGUsIHQpKTtcbn0sIEhCID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICByZXR1cm4gQS5zbGljZSA/IEEuc2xpY2UoZSwgdCkgOiBuZXcgVWludDMyQXJyYXkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoQSwgZSwgdCkpO1xufSwgdkIgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHZhciB0ID0gbEIoQSksIHIgPSBBcnJheS5pc0FycmF5KHQpID8gdUIodCkgOiBuZXcgVWludDMyQXJyYXkodCksIG4gPSBBcnJheS5pc0FycmF5KHQpID8gZ0IodCkgOiBuZXcgVWludDE2QXJyYXkodCksIHMgPSAyNCwgQiA9IFNyKG4sIHMgLyAyLCByWzRdIC8gMiksIGkgPSByWzVdID09PSAyID8gU3IobiwgKHMgKyByWzRdKSAvIDIpIDogSEIociwgTWF0aC5jZWlsKChzICsgcls0XSkgLyA0KSk7XG4gIHJldHVybiBuZXcgSUIoclswXSwgclsxXSwgclsyXSwgclszXSwgQiwgaSk7XG59LCBJQiA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKGUsIHQsIHIsIG4sIHMsIEIpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gZSwgdGhpcy5lcnJvclZhbHVlID0gdCwgdGhpcy5oaWdoU3RhcnQgPSByLCB0aGlzLmhpZ2hWYWx1ZUluZGV4ID0gbiwgdGhpcy5pbmRleCA9IHMsIHRoaXMuZGF0YSA9IEI7XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIGlmIChlID49IDApIHtcbiAgICAgICAgaWYgKGUgPCA1NTI5NiB8fCBlID4gNTYzMTkgJiYgZSA8PSA2NTUzNSlcbiAgICAgICAgICByZXR1cm4gdCA9IHRoaXMuaW5kZXhbZSA+PiBQQV0sIHQgPSAodCA8PCBtdCkgKyAoZSAmIHl0KSwgdGhpcy5kYXRhW3RdO1xuICAgICAgICBpZiAoZSA8PSA2NTUzNSlcbiAgICAgICAgICByZXR1cm4gdCA9IHRoaXMuaW5kZXhbR24gKyAoZSAtIDU1Mjk2ID4+IFBBKV0sIHQgPSAodCA8PCBtdCkgKyAoZSAmIHl0KSwgdGhpcy5kYXRhW3RdO1xuICAgICAgICBpZiAoZSA8IHRoaXMuaGlnaFN0YXJ0KVxuICAgICAgICAgIHJldHVybiB0ID0gaEIgLSBkQiArIChlID4+IEZyKSwgdCA9IHRoaXMuaW5kZXhbdF0sIHQgKz0gZSA+PiBQQSAmIEVCLCB0ID0gdGhpcy5pbmRleFt0XSwgdCA9ICh0IDw8IG10KSArIChlICYgeXQpLCB0aGlzLmRhdGFbdF07XG4gICAgICAgIGlmIChlIDw9IDExMTQxMTEpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmhpZ2hWYWx1ZUluZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVycm9yVmFsdWU7XG4gICAgfSwgQTtcbiAgfSgpXG4pLCBUciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiLCBtQiA9IHR5cGVvZiBVaW50OEFycmF5ID4gXCJ1XCIgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKHZhciBiZSA9IDA7IGJlIDwgVHIubGVuZ3RoOyBiZSsrKVxuICBtQltUci5jaGFyQ29kZUF0KGJlKV0gPSBiZTtcbnZhciB5QiA9IFwiS3dBQUFBQUFBQUFBQ0E0QVVEMEFBREFnQUFBQ0FBQUFBQUFJQUJBQUdBQkFBRWdBVUFCWUFHQUFhQUJnQUdnQVlnQnFBRjhBWndCZ0FHZ0FjUUI1QUhVQWZRQ0ZBSTBBbFFDZEFLSUFxZ0N5QUxvQVlBQm9BR0FBYUFCZ0FHZ0F3Z0RLQUdBQWFBREdBTTRBMHdEYkFPRUE2UUR4QVBrQUFRRUpBUThCRndGMUFIMEFIQUVrQVN3Qk5BRTZBVUlCUVFGSkFWRUJXUUZoQVdnQmNBRjRBVEFBZ0FHR0FZNEJsUUdYQVo4QnB3R3ZBYlVCdlFIRkFjMEIwd0hiQWVNQjZ3SHhBZmtCQVFJSkF2RUJFUUlaQWlFQ0tRSXhBamdDUUFKR0FrNENWZ0plQW1RQ2JBSjBBbndDZ1FLSkFwRUNtUUtnQXFnQ3NBSzRBcndDeEFJd0FNd0Mwd0xiQWpBQTR3THJBdk1DK0FJQUF3Y0REd013QUJjREhRTWxBeTBETlFOMUFEMERRUU5KQTBrRFNRTlJBMUVEVndOWkExa0RkUUIxQUdFRGRRQnBBMjBEZFFOMUFIc0RkUUNCQTRrRGtRTjFBSFVBbVFPaEEzVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFLWURyZ04xQUhVQXRnTytBOFlEemdQV0F4Y0QzZ1BqQStzRDh3TjFBSFVBK3dNREJBa0VkUUFOQkJVRUhRUWxCQ29FRndNeUJEZ0VZQUJBQkJjRFNBUlFCRmdFWUFSb0JEQUFjQVF6QVhnRWdBU0lCSkFFZFFDWEJIVUFud1NuQks0RXRnUzZCTUlFeUFSMUFIVUFkUUIxQUhVQWRRQ1ZBTkFFWUFCZ0FHQUFZQUJnQUdBQVlBQmdBTmdFWUFEY0JPUUVZQURzQlBRRS9BUUVCUXdGRkFVY0JTUUZMQVUwQldRRVBBVkVCVXNGVXdWYkJXQUFZZ1ZnQUdvRmNnVjZCWUlGaWdXUkJXQUFtUVdmQmFZRllBQmdBR0FBWUFCZ0FLb0ZZQUN4QmJBRnVRVzZCY0VGd1FYSEJjRUZ3UVhQQmRNRjJ3WGpCZW9GOGdYNkJRSUdDZ1lTQmhvR0lnWXFCaklHT2daZ0FENEdSZ1pNQm1BQVV3WmFCbUFBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHSUdZQUJwQm5BR1lBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQjRCbjhHaFFaZ0FHQUFZQUIxQUhjREZRU0xCbUFBWUFCZ0FKTUdkUUE5QTNVQW13YWpCcXNHcXdhVkFMTUd1d2JEQmpBQXl3YlNCdElHMVFiU0J0SUcwZ2JTQnRJRzBnYmRCdU1HNndiekJ2c0dBd2NMQnhNSEF3Y2JCeU1ISndjc0J5d0hNUWNzQjlJR09BZEFCMGdIVGdmU0JrZ0hWZ2ZTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQml3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWRnQUdBQUxBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWRiQjJNSExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQjJrSDBnWndCNjRFZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVIZlFkZ0FJVUhqUWQxQUhVQWxRZWRCMkFBWUFDbEI2c0hZQUN6QjdZSHZnZkdCM1VBemdmV0J6TUIzZ2ZtQjFFQjdnZjFCLzBIbFFFTkFRVUlEUWgxQUJVSUhRZ2xDQmNETFFnMUNEMElSUWhOQ0VFRFV3aDFBSFVBZFFCYkNHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJYVFoakNHUUlaUWhtQ0djSWFBaHBDR01JWkFobENHWUlad2hvQ0drSVl3aGtDR1VJWmdobkNHZ0lhUWhqQ0dRSVpRaG1DR2NJYUFocENHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJYVFoakNHUUlaUWhtQ0djSWFBaHBDR01JWkFobENHWUlad2hvQ0drSVl3aGtDR1VJWmdobkNHZ0lhUWhqQ0dRSVpRaG1DR2NJYUFocENHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJYVFoakNHUUlaUWhtQ0djSWFBaHBDR01JWkFobENHWUlad2hvQ0drSVl3aGtDR1VJWmdobkNHZ0lhUWhqQ0dRSVpRaG1DR2NJYUFocENHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJYVFoakNHUUlaUWhtQ0djSWFBaHBDR01JWkFobENHWUlad2hvQ0drSVl3aGtDR1VJWmdobkNHZ0lhUWhqQ0dRSVpRaG1DR2NJYUFocENHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJYVFoakNHUUlaUWhtQ0djSWFBaHBDR01JWkFobENHWUlad2hvQ0drSVl3aGtDR1VJWmdobkNHZ0lhUWhqQ0dRSVpRaG1DR2NJYUFocENHTUlaQWhsQ0dZSVp3aG9DR2tJWXdoa0NHVUlaZ2huQ0dnSWFRaGpDR1FJWlFobUNHY0lhQWhwQ0dNSVpBaGxDR1lJWndob0NHa0lZd2hrQ0dVSVpnaG5DR2dJY0FoM0NIb0lNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2d3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQUxBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCNG9JTEFjc0I0NEkwZ2FXQ0o0SXBnaDFBSFVBcWdpeUNIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUF0d2g4QVhVQXZ3aDFBTVVJeVFqUkNOa0k0QWpvQ0hVQWRRQjFBTzRJOWdqK0NBWUpEZ2tUQ1MwSEd3a2pDWUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2lDQ0lJSWdnaUNDSUlJZ2dpQ0NJSUlnZ2lBQUlBQUFBRkFBWUFCZ0FHSUFYd0JnQUhFQWRRQkZBSlVBb2dDeUFLQUFZQUJnQUVJQTRBQkdBTk1BNFFEeEFNRUJEd0UxQUZ3QkxBRTZBUUVCVVFGNFFraENtRUtvUXJoQ2dBSElRc0FCME1MQUFjQUJ3QUhBQWVEQzZBQm9BSERDd01NQUFjQUJ3QUhBQWREREdNTUFBY0FCNk1NNHd3akRXTU5vdzNqRGFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BRWpEcUFCV3c2YkRxQUJwZzZnQWFBQm9BSGNEdndPUEErZ0FhQUJmQS84RHZ3Ty9BNzhEdndPL0E3OER2d08vQTc4RHZ3Ty9BNzhEdndPL0E3OER2d08vQTc4RHZ3Ty9BNzhEdndPL0E3OER2d08vQTc4RHBjUEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUI5Y1BLd2t5Q1RvSk1BQjFBSFVBZFFCQ0NVb0pUUWwxQUZVSlhBbGpDV2NKYXdrd0FEQUFNQUF3QUhNSmRRQjJDWDRKZFFDRUNZb0pqZ21XQ1hVQW5na3dBR0FBWUFCeEFIVUFwZ24zQTY0SnRBbDFBTGtKZFFEQUNUQUFNQUF3QURBQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQW93WU5CTVVJTUFBd0FEQUFNQURJQ2NzSjB3blpDUlVFNFFrd0FPa0o4QW40Q1RBQU1BQjFBQUFLdndoMUFBZ0tEd29YQ2g4S2RRQXdBQ2NLTGdwMUFEWUtxQW1JQ1Q0S1Jnb3dBREFBZFFCMUFFNEtNQUIxQUZZS2RRQmVDblVBWlFvd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBVkJIVUFiUW93QURBQWRRQzVDWFVLTUFBd0FId0J4QWlqQm9nRU1nRjlDb1FLaUFTTUNwUUttZ3FJQktJS3FncXVDb2dFRFFHMkNyNEt4Z3JMQ2pBQU1BRFRDdHNLQ2dIakN1c0s4UXI1Q2dFTE1BQXdBREFBTUFCMUFJc0VDUXNSQzNVQU5BRVpDekFBTUFBd0FEQUFNQUIxQUNFTEtRc3dBSFVBTkFFeEN6a0xkUUJCQzBrTE1BQlJDMWtMTUFBd0FEQUFNQUF3QURBQWRRQmhDekFBTUFBd0FHQUFZQUJwQzNFTGR3dC9DekFBTUFDSEM0c0xrd3ViQzU4THB3dDFBSzRMdGd0MUFQc0RNQUF3QURBQU1BQXdBREFBTUFBd0FMNEx3d3ZMQzlJTDF3dmRDekFBTUFEbEMra0w4UXY1Qy84TFNRc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQUhEREFBTUFBd0FEQUFNQUFPREJZTUhneDFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBQ1lNTUFBd0FEQUFkUUIxQUhVQUxneDFBSFVBZFFCMUFIVUFkUUEyRERBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBRDRNZFFCR0RIVUFkUUIxQUhVQWRRQjFBRWtNZFFCMUFIVUFkUUIxQUZBTU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQllESFVBZFFCMUFGOE1NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQSt3TVZCR2NNTUFBd0FId0Jid3gxQUhjTWZ3eUhESThNTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFZQUJnQUpjTU1BQXdBREFBZFFCMUFKOE1sUUNsRERBQU1BQ3REQ3dITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCN1VNTEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SGRRQjFBSFVBZFFCMUFIVUFkUUIxQUhVQWRRQjFBSFVBZFFCMUFBMEVNQUM5RERBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBc0J5d0hMQWNzQnl3SExBY3NCeXdITFFjd0FNRU15QXdzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SHpBd3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FIVUFkUUIxQU5RTTJRemhEREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQmdBR0FBWUFCZ0FHQUFZQUJnQU9rTVlBRHhER0FBK0F3QURRWU5ZQUJoQ1dBQVlBQU9EVEFBTUFBd0FEQUFGZzFnQUdBQUhnMzdBekFBTUFBd0FEQUFZQUJnQUNZTllBQXNEVFFOUEExZ0FFTU5QZzFMRFdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVVnMWFEWXNHVmdsaERWME5jUUJuRFcwTmRRMTVEV0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQWxRQ0JEWlVBaUEyUERaY05NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBbncybkRUQUFNQUF3QURBQU1BQXdBSFVBcncyM0RUQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUIxQUw4Tk1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFCMUFIVUFkUUIxQUhVQWRRREhEVEFBWUFCZ0FNOE5NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBMXcxMUFOd05NQUF3QUQwQjVBMHdBREFBTUFBd0FEQUFNQURzRGZRTi9BMEVEZ3dPRkE0d0FCc09NQUF3QURBQU1BQXdBREFBTUFBd0FOSUcwZ2JTQnRJRzBnYlNCdElHMGdZakRpZ093UVV1RHNFRk13N1NCam9PMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUdRZzVLRGxJT1ZnN1NCdElHWGc1bERtME9kUTdTQnRJR2ZRNkVEb29PalE2VUR0SUdtZzZoRHRJRzBnYW9EcXdPMGdhMERyd08wZ1pnQUdBQVlBREVEbUFBWUFBa0J0SUd6QTVnQU5JT1lBRGFEb2tPMGdiU0J0OE81dzdTQnU4TzBnYjFEdndPMGdaZ0FHQUF4QTdTQnRJRzBnYlNCdElHWUFCZ0FHQUFZQUFFRDJBQXNBVU1EOUlHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUdGQThzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNjRDlJR0xBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdISkE4c0J5d0hMQWNzQnl3SExBY2NEeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdQTEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWMwRDlJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJR0xBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNjRDlJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJR0ZBOHNCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SExBY3NCeXdITEFjc0J5d0hMQWNzQnl3SFBBL1NCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnYlNCdElHMGdiU0J0SUcwZ2JTQnRJRzBnWVVEMFFQbFFDVkFKVUFNQUF3QURBQU1BQ1ZBSlVBbFFDVkFKVUFsUUNWQUV3UE1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBLy84RUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBTkFBTUFBUUFCQUFJQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUNnQVRBQmNBSGdBYkFCb0FIZ0FYQUJZQUVnQWVBQnNBR0FBUEFCZ0FIQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUJnQUdBQWVBQjRBSGdBVEFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFHd0FTQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQVdBQTBBRVFBZUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRkFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBSkFCWUFHZ0FiQUJzQUd3QWVBQjBBSFFBZUFFOEFGd0FlQUEwQUhnQWVBQm9BR3dCUEFFOEFEZ0JRQUIwQUhRQWRBRThBVHdBWEFFOEFUd0JQQUJZQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQWVBRkFBVHdCQUFFOEFUd0JQQUVBQVR3QlFBRkFBVHdCUUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIZ0FkQUI0QURnQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUpBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBa0FDUUFKQUFrQUNRQUpBQWtBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBRkFBSGdBZUFCNEFLd0FyQUZBQVVBQlFBRkFBR0FCUUFDc0FLd0FyQUNzQUhnQWVBRkFBSGdCUUFGQUFVQUFyQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBWUFBMEFLd0FyQUI0QUhnQWJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFCNEFCQUFFQUI0QUJBQUVBQk1BQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBS3dBckFDc0FLd0JXQUZZQVZnQldBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFHZ0FhQUJvQUdBQVlBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFFd0FFQUNzQUV3QVRBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFCb0FHUUFaQUI0QVVBQlFBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUJNQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUJRQUZBQUJBQUVBQjRBQkFBRUFBUUFCQUJRQUZBQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFBZUFCNEFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFGQUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBQjRBSGdBWUFCTUFVQUFyQUNzQUJBQWJBQnNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBVUFBRUFBUUFCQUFFQUFRQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQXJBQ3NBSGdBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUEwQURRQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQUt3QlFBRkFBVUFCUUFDc0FLd0FFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQ3NBS3dBRUFBUUFCQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUNzQUt3QXJBQ3NBVUFCUUFDc0FVQUJRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUFhQUJvQVVBQlFBRkFBVUFCUUFFd0FIZ0FiQUZBQUhnQUVBQ3NBS3dBRUFBUUFCQUFyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBVUFCUUFDc0FVQUJRQUNzQUt3QUVBQ3NBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBQkFBRUFDc0FLd0FFQUFRQUJBQXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUFRQUJBQlFBRkFBVUFBRUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FVQUJRQUZBQVVBQlFBQ3NBS3dBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QUVBQVFBQkFBckFDc0FVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQjRBR3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFDc0FLd0FFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQ3NBS3dBckFDc0FVQUJRQUNzQVVBQlFBRkFBQkFBRUFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBS3dCUUFGQUFLd0JRQUNzQVVBQlFBQ3NBS3dBckFGQUFVQUFyQUNzQUt3QlFBRkFBVUFBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBRUFBUUFCQUFyQUFRQUJBQUVBQVFBS3dBckFGQUFLd0FyQUNzQUt3QXJBQ3NBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFHd0FlQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQ3NBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRkFBVUFBRUFBUUFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLd0FPQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0JRQUFRQUJBQUVBQTRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBS3dBckFBUUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FCQUFFQUFRQUt3QUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFBckFGQUFVQUFFQUFRQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFCUUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQm9BVUFCUUFGQUFVQUJRQUZBQUt3QUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FyQUNzQUd3QmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQ3NBS3dBckFDc0FLd0JjQUZ3QUt3QmNBQ3NBWEFCY0FGd0FYQUJjQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBWEFBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0JjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQVhBQXJBQ3NBWEFCY0FGd0FYQUJjQUNzQVhBQXJBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dCY0FGd0FYQUJjQUZBQURnQU9BQTRBRGdBZUFBNEFEZ0FKQUE0QURnQU5BQWtBRXdBVEFCTUFFd0FUQUFrQUhnQVRBQjRBSGdBZUFBUUFCQUFlQUI0QUhnQWVBQjRBSGdCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEUUFFQUI0QUJBQWVBQVFBRmdBUkFCWUFFUUFFQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUFRQUJBQUVBQVFBRFFBRUFBUUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQTBBRFFBZUFCNEFIZ0FlQUI0QUhnQUVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQTRBRGdBTkFBNEFIZ0FlQUI0QUhnQWVBQWtBQ1FBckFDc0FLd0FyQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQmNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBRFFBTkFCNEFIZ0FlQUI0QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQmNBRndBWEFCY0FDb0FLZ0FxQUZ3QUtnQXFBQ29BWEFCY0FDb0FLZ0FxQUNvQUtnQXFBQ29BWEFCY0FGd0FLZ0FxQUNvQUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUZ3QUtnQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ29BS2dBcUFDb0FLZ0FxQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQUt3QXJBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0JRQUZBQVVBQlFBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBQkFBRUFBUUFIZ0FOQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQVdBQkVBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUEwQURRQU5BRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQU5BQTBBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUFyQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUEwQURRQVZBRndBRFFBZUFBMEFHd0JjQUNvQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FlQUI0QUV3QVRBQTBBRFFBT0FCNEFFd0FUQUI0QUJBQUVBQVFBQ1FBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBRUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUhnQXJBQ3NBS3dBVEFCTUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUFyQUNzQVhBQmNBRndBWEFCY0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXJBQ3NBS3dBckFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFBckFDc0FLd0FxQUNvQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQXJBQ3NBSGdBZUFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUt3QXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS3dBckFBUUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBQ29BS2dBcUFDb0FLZ0FxQUNvQVhBQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQUhnQU5BQTBBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUJBQUVBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQTBBRFFBTkFBMEFEUUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBRkFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFFQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFCUUFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFCQUJRQUZBQUJBQUVBQVFBVUFBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBQ3NBVUFBckFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBRkFBVUFCUUFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FPQUI0QUt3QU5BQTBBRFFBTkFBMEFEUUFOQUFrQURRQU5BQTBBQ0FBRUFBc0FCQUFFQUEwQUNRQU5BQTBBREFBZEFCMEFIZ0FYQUJjQUZnQVhBQmNBRndBV0FCY0FIUUFkQUI0QUhnQVVBQlFBRkFBTkFBRUFBUUFFQUFRQUJBQUVBQVFBQ1FBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BSGdBWEFCY0FIUUFWQUJVQUhnQWVBQjRBSGdBZUFCNEFHQUFXQUJFQUZRQVZBQlVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFEUUFlQUEwQURRQU5BQTBBSGdBTkFBMEFEUUFIQUI0QUhnQWVBQjRBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFVQUFyQUNzQVR3QlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUZnQVJBRThBVUFCUEFFOEFUd0JQQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FXQUJFQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUJzQUd3QWJBQnNBR3dBYkFCc0FHZ0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR2dBYkFCc0FHd0FiQUJvQUd3QWJBQm9BR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUhnQWVBRkFBR2dBZUFCMEFIZ0JRQUI0QUdnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlBBQjRBVUFBYkFCNEFIZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIUUFkQUI0QVVBQWVBRkFBSGdCUUFCNEFVQUJQQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBSGdCUUFGQUFVQUJRQUU4QVR3QlFBRkFBVUFCUUFGQUFUd0JRQUZBQVR3QlFBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFGQUFVQUJRQUZBQVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBVUFCUUFGQUFVQUJQQUI0QUhnQXJBQ3NBS3dBckFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIUUFkQUI0QUhnQWVBQjBBSFFBZUFCNEFIUUFlQUI0QUhnQWRBQjRBSFFBYkFCc0FIZ0FkQUI0QUhnQWVBQjRBSFFBZUFCNEFIUUFkQUIwQUhRQWVBQjRBSFFBZUFCMEFIZ0FkQUIwQUhRQWRBQjBBSFFBZUFCMEFIZ0FlQUI0QUhnQWVBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjBBSFFBZUFCNEFIUUFkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRkFBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUI0QUhnQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZUFCNEFIUUFkQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZUFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSFFBZUFCNEFIUUFkQUI0QUhnQWVBQjRBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjBBSGdBZUFCMEFIZ0FlQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUI0QUhRQWRBQjRBSGdBZEFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZUFCNEFKUUFsQUIwQUhRQWxBQjRBSlFBbEFDVUFJQUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWVBQjRBSGdBZUFCMEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZEFCMEFIUUFlQUIwQUpRQWRBQjBBSGdBZEFCMEFIZ0FkQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFkQUIwQUhRQWRBQ1VBSGdBbEFDVUFKUUFkQUNVQUpRQWRBQjBBSFFBbEFDVUFIUUFkQUNVQUhRQWRBQ1VBSlFBbEFCNEFIUUFlQUI0QUhnQWVBQjBBSFFBbEFCMEFIUUFkQUIwQUhRQWRBQ1VBSlFBbEFDVUFKUUFkQUNVQUpRQWdBQ1VBSFFBZEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FsQUNVQUlBQWdBQ0FBSUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFGd0FYQUJjQUZ3QVhBQmNBSGdBVEFCTUFKUUFlQUI0QUhnQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFGZ0FSQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBZUFCNEFLd0FyQUNzQUt3QXJBQk1BRFFBTkFBMEFVQUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQTBBRFFBTkFBMEFEUUFOQUEwQURRQWVBQTBBRmdBTkFCNEFIZ0FYQUJjQUhnQWVBQmNBRndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRFFBTkFBMEFEUUFUQUZBQURRQU5BQjRBRFFBTkFCNEFIZ0FlQUI0QUhnQU1BQXdBRFFBTkFBMEFIZ0FOQUEwQUZnQU5BQTBBRFFBTkFBMEFEUUFOQUEwQUhnQU5BQjRBRFFBTkFCNEFIZ0FlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFBMEFFUUFSQUNVQUpRQkhBRmNBVndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGUUFXQUJFQUVRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQVFBQkFBRUFBUUFCQUFFQUNVQVZ3QlhBRmNBVndBMkFDVUFKUUJYQUZjQVZ3QkhBRWNBSlFBbEFDVUFLd0JSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVVFCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRkVBS3dBckFBUUFCQUFWQUJVQVJ3QkhBRmNBRlFCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGY0FWd0JYQUZjQVZ3QlhBRkVBVVFCWEFGY0FWd0JYQUJVQVVRQkhBRWNBVndBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBbEFDVUFWd0JYQUZjQVZ3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCUEFFOEFUd0JQQUU4QVR3QlBBRThBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQWVBQTBBRFFBTkFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQVFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBSGdBZUFCb0FIZ0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEZ0FPQUJNQUV3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQlFBQTRBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFDc0FLd0FyQUFRQUhnQWVBQjRBSGdBZUFCNEFEUUFOQUEwQUhnQWVBQjRBSGdBckFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQjRBSGdCY0FGd0FYQUJjQUZ3QUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FGd0FYQUJjQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FIZ0FOQUEwQURRQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FLZ0FxQUNvQVhBQmNBQ29BS2dCY0FGd0FYQUJjQUZ3QUtnQXFBRndBS2dCY0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRFFBRUFBUUFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FWQUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJVQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBS3dBckFDc0FLd0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQUt3QXJBQ3NBS3dBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGWUFCQUJXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUI0QVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdBckFGWUFWZ0JXQUZZQVZnQXJBRllBS3dCV0FGWUFLd0JXQUZZQUt3QldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRVFBV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWFBQjRBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBR0FBUkFCRUFHQUFZQUJNQUV3QVdBQkVBRkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNVQUpRQWxBQ1VBSlFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFsQUNVQUZnQVJBQ1VBSlFBbEFDVUFKUUFsQUNVQUVRQWxBQkVBS3dBVkFCVUFFd0FUQUNVQUZnQVJBQllBRVFBV0FCRUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FKUUFiQUJvQUpRQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFjQUt3QVRBQ1VBSlFBYkFCb0FKUUFsQUJZQUVRQWxBQ1VBRVFBbEFCRUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJVQUZRQWxBQ1VBSlFBVEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFCWUFKUUFSQUNVQUpRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QVdBQ1VBRVFBbEFCWUFFUUFSQUJZQUVRQVJBQlVBVndCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBUndBckFDc0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QXJBQ3NBVndCWEFGY0FLd0FyQUNzQUdnQWJBQ1VBSlFBbEFCc0FHd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQVFBQjBBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBRFFBTkFBMEFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdCUUFGQUFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQVFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBMEFVQUJRQUZBQVVBQXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFDc0FLd0JRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQ3NBQkFBRUFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUNzQUt3QXJBQ3NBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQTBBRFFBTkFBMEFEUUFOQUEwQURRQWVBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBTkFBMEFEUUFOQUEwQURRQVVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQURRQU5BQTBBRFFBTkFBMEFEUUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUFRQUJBQU5BQ3NBS3dCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQURRQU5BRkFBQkFBRUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFlQUE0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFEUUFOQUI0QURRQUVBQVFBQkFBRUFCNEFCQUFFQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQU9BRkFBRFFBTkFBMEFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQTBBSGdBTkFBMEFIZ0FFQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFDc0FVQUJRQUZBQVVBQlFBQ3NBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUNzQUt3QUVBQVFBQkFBckFDc0FVQUFyQUNzQUt3QXJBQ3NBS3dBRUFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFIZ0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUEwQURRQXJBQjRBQkFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFGQUFVQUFlQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBRGdBTkFBMEFFd0FUQUI0QUhnQWVBQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFEUUFOQUZBQVVBQlFBRkFBQkFBRUFDc0FLd0FFQUEwQURRQWVBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUt3QXJBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCY0FGd0FEUUFOQUEwQUtnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBS3dBRUFBUUFLd0FyQUFRQUJBQUVBQVFBVUFBRUFGQUFCQUFFQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFCUUFBNEFVQUFFQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQU9BQjRBRFFBTkFBMEFEUUFPQUI0QUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFGQUFEZ0FPQUE0QURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU9BQk1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBRUFDc0FCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBS3dBRUFBUUFCQUFFQUFRQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FhQUJvQUdnQWFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQklBRWdBUXdCREFFTUFVQUJRQUZBQVVBQkRBRkFBVUFCUUFFZ0FRd0JJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQkRBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QUpBQWtBQ1FBSkFBa0FDUUFKQUJZQUVRQXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QU5BQTBBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBTkFBMEFIZ0FlQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QUVBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FFQUFRQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFSd0JIQUJVQVJ3QUpBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVVFCUkFGRUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlJBRkVBVVFCUkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBSGdBRUFBUUFEUUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQUVBQVFBQkFBRUFBUUFCQUFFQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dCUUFGQUFLd0FyQUZBQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FIZ0FlQUZBQVVBQlFBRkFBVUFBckFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFBUUFIZ0FlQUEwQURRQU5BQTBBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFLd0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBS3dBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dCUUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUJzQVVBQlFBRkFBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUJRQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUJZQUZnQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFHZ0JRQUZBQVVBQWFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBS3dCUUFDc0FLd0JRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFLd0JRQUNzQVVBQXJBQ3NBS3dBckFDc0FLd0JRQUNzQUt3QXJBQ3NBVUFBckFGQUFLd0JRQUNzQVVBQlFBRkFBS3dCUUFGQUFLd0JRQUNzQUt3QlFBQ3NBVUFBckFGQUFLd0JRQUNzQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBSlFBbEFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIZ0FlQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUI0QUhnQWVBQ1VBSlFBbEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FKUUFsQUNVQUpRQWxBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FsQUNVQUpRQWxBQ1VBSGdBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBbEFDQUFKUUFsQUNBQUlBQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDRUFJUUFoQUNFQUlRQWxBQ1VBSUFBZ0FDVUFKUUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNBQUlBQWdBQ1VBSUFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBZ0FDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBbEFCNEFKUUFlQUNVQUpRQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUhnQWxBQjRBSGdBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBbEFDVUFKUUFsQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUpRQWxBQ1VBSlFBZ0FDQUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQmNBRndBWEFCVUFGUUFWQUI0QUhnQWVBQjRBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FnQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNVQUpRQWdBQ0FBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWdBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFsQUNBQUlBQWxBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFnQUNBQUlBQWxBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBS3dBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUE9PVwiLCBNciA9IDUwLCBMQiA9IDEsIFZuID0gMiwgTm4gPSAzLCBLQiA9IDQsIGJCID0gNSwgT3IgPSA3LCBQbiA9IDgsIFJyID0gOSwgYkEgPSAxMCwgcXQgPSAxMSwgR3IgPSAxMiwgenQgPSAxMywgeEIgPSAxNCwgY2UgPSAxNSwgJHQgPSAxNiwgeGUgPSAxNywgc2UgPSAxOCwgREIgPSAxOSwgVnIgPSAyMCwgQXIgPSAyMSwgQmUgPSAyMiwgTHQgPSAyMywgX0EgPSAyNCwgbkEgPSAyNSwgbGUgPSAyNiwgZ2UgPSAyNywgWEEgPSAyOCwgU0IgPSAyOSwgR0EgPSAzMCwgVEIgPSAzMSwgRGUgPSAzMiwgU2UgPSAzMywgZXIgPSAzNCwgdHIgPSAzNSwgcnIgPSAzNiwgcGUgPSAzNywgbnIgPSAzOCwgemUgPSAzOSwgJGUgPSA0MCwgS3QgPSA0MSwga24gPSA0MiwgTUIgPSA0MywgT0IgPSBbOTAwMSwgNjUyODhdLCBfbiA9IFwiIVwiLCBLID0gXCLDl1wiLCBUZSA9IFwiw7dcIiwgc3IgPSB2Qih5QiksIHBBID0gW0dBLCBycl0sIEJyID0gW0xCLCBWbiwgTm4sIGJCXSwgWG4gPSBbYkEsIFBuXSwgTnIgPSBbZ2UsIGxlXSwgUkIgPSBCci5jb25jYXQoWG4pLCBQciA9IFtuciwgemUsICRlLCBlciwgdHJdLCBHQiA9IFtjZSwgenRdLCBWQiA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgZSA9PT0gdm9pZCAwICYmIChlID0gXCJzdHJpY3RcIik7XG4gIHZhciB0ID0gW10sIHIgPSBbXSwgbiA9IFtdO1xuICByZXR1cm4gQS5mb3JFYWNoKGZ1bmN0aW9uKHMsIEIpIHtcbiAgICB2YXIgaSA9IHNyLmdldChzKTtcbiAgICBpZiAoaSA+IE1yID8gKG4ucHVzaCghMCksIGkgLT0gTXIpIDogbi5wdXNoKCExKSwgW1wibm9ybWFsXCIsIFwiYXV0b1wiLCBcImxvb3NlXCJdLmluZGV4T2YoZSkgIT09IC0xICYmIFs4MjA4LCA4MjExLCAxMjMxNiwgMTI0NDhdLmluZGV4T2YocykgIT09IC0xKVxuICAgICAgcmV0dXJuIHIucHVzaChCKSwgdC5wdXNoKCR0KTtcbiAgICBpZiAoaSA9PT0gS0IgfHwgaSA9PT0gcXQpIHtcbiAgICAgIGlmIChCID09PSAwKVxuICAgICAgICByZXR1cm4gci5wdXNoKEIpLCB0LnB1c2goR0EpO1xuICAgICAgdmFyIGEgPSB0W0IgLSAxXTtcbiAgICAgIHJldHVybiBSQi5pbmRleE9mKGEpID09PSAtMSA/IChyLnB1c2gocltCIC0gMV0pLCB0LnB1c2goYSkpIDogKHIucHVzaChCKSwgdC5wdXNoKEdBKSk7XG4gICAgfVxuICAgIGlmIChyLnB1c2goQiksIGkgPT09IFRCKVxuICAgICAgcmV0dXJuIHQucHVzaChlID09PSBcInN0cmljdFwiID8gQXIgOiBwZSk7XG4gICAgaWYgKGkgPT09IGtuIHx8IGkgPT09IFNCKVxuICAgICAgcmV0dXJuIHQucHVzaChHQSk7XG4gICAgaWYgKGkgPT09IE1CKVxuICAgICAgcmV0dXJuIHMgPj0gMTMxMDcyICYmIHMgPD0gMTk2NjA1IHx8IHMgPj0gMTk2NjA4ICYmIHMgPD0gMjYyMTQxID8gdC5wdXNoKHBlKSA6IHQucHVzaChHQSk7XG4gICAgdC5wdXNoKGkpO1xuICB9KSwgW3IsIHQsIG5dO1xufSwgYnQgPSBmdW5jdGlvbihBLCBlLCB0LCByKSB7XG4gIHZhciBuID0gclt0XTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoQSkgPyBBLmluZGV4T2YobikgIT09IC0xIDogQSA9PT0gbilcbiAgICBmb3IgKHZhciBzID0gdDsgcyA8PSByLmxlbmd0aDsgKSB7XG4gICAgICBzKys7XG4gICAgICB2YXIgQiA9IHJbc107XG4gICAgICBpZiAoQiA9PT0gZSlcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgaWYgKEIgIT09IGJBKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIGlmIChuID09PSBiQSlcbiAgICBmb3IgKHZhciBzID0gdDsgcyA+IDA7ICkge1xuICAgICAgcy0tO1xuICAgICAgdmFyIGkgPSByW3NdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoQSkgPyBBLmluZGV4T2YoaSkgIT09IC0xIDogQSA9PT0gaSlcbiAgICAgICAgZm9yICh2YXIgYSA9IHQ7IGEgPD0gci5sZW5ndGg7ICkge1xuICAgICAgICAgIGErKztcbiAgICAgICAgICB2YXIgQiA9IHJbYV07XG4gICAgICAgICAgaWYgKEIgPT09IGUpXG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgaWYgKEIgIT09IGJBKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGlmIChpICE9PSBiQSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICByZXR1cm4gITE7XG59LCBrciA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgZm9yICh2YXIgdCA9IEE7IHQgPj0gMDsgKSB7XG4gICAgdmFyIHIgPSBlW3RdO1xuICAgIGlmIChyID09PSBiQSlcbiAgICAgIHQtLTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gcjtcbiAgfVxuICByZXR1cm4gMDtcbn0sIE5CID0gZnVuY3Rpb24oQSwgZSwgdCwgciwgbikge1xuICBpZiAodFtyXSA9PT0gMClcbiAgICByZXR1cm4gSztcbiAgdmFyIHMgPSByIC0gMTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobikgJiYgbltzXSA9PT0gITApXG4gICAgcmV0dXJuIEs7XG4gIHZhciBCID0gcyAtIDEsIGkgPSBzICsgMSwgYSA9IGVbc10sIG8gPSBCID49IDAgPyBlW0JdIDogMCwgYyA9IGVbaV07XG4gIGlmIChhID09PSBWbiAmJiBjID09PSBObilcbiAgICByZXR1cm4gSztcbiAgaWYgKEJyLmluZGV4T2YoYSkgIT09IC0xKVxuICAgIHJldHVybiBfbjtcbiAgaWYgKEJyLmluZGV4T2YoYykgIT09IC0xIHx8IFhuLmluZGV4T2YoYykgIT09IC0xKVxuICAgIHJldHVybiBLO1xuICBpZiAoa3IocywgZSkgPT09IFBuKVxuICAgIHJldHVybiBUZTtcbiAgaWYgKHNyLmdldChBW3NdKSA9PT0gcXQgfHwgKGEgPT09IERlIHx8IGEgPT09IFNlKSAmJiBzci5nZXQoQVtpXSkgPT09IHF0IHx8IGEgPT09IE9yIHx8IGMgPT09IE9yIHx8IGEgPT09IFJyIHx8IFtiQSwgenQsIGNlXS5pbmRleE9mKGEpID09PSAtMSAmJiBjID09PSBSciB8fCBbeGUsIHNlLCBEQiwgX0EsIFhBXS5pbmRleE9mKGMpICE9PSAtMSB8fCBrcihzLCBlKSA9PT0gQmUgfHwgYnQoTHQsIEJlLCBzLCBlKSB8fCBidChbeGUsIHNlXSwgQXIsIHMsIGUpIHx8IGJ0KEdyLCBHciwgcywgZSkpXG4gICAgcmV0dXJuIEs7XG4gIGlmIChhID09PSBiQSlcbiAgICByZXR1cm4gVGU7XG4gIGlmIChhID09PSBMdCB8fCBjID09PSBMdClcbiAgICByZXR1cm4gSztcbiAgaWYgKGMgPT09ICR0IHx8IGEgPT09ICR0KVxuICAgIHJldHVybiBUZTtcbiAgaWYgKFt6dCwgY2UsIEFyXS5pbmRleE9mKGMpICE9PSAtMSB8fCBhID09PSB4QiB8fCBvID09PSByciAmJiBHQi5pbmRleE9mKGEpICE9PSAtMSB8fCBhID09PSBYQSAmJiBjID09PSByciB8fCBjID09PSBWciB8fCBwQS5pbmRleE9mKGMpICE9PSAtMSAmJiBhID09PSBuQSB8fCBwQS5pbmRleE9mKGEpICE9PSAtMSAmJiBjID09PSBuQSB8fCBhID09PSBnZSAmJiBbcGUsIERlLCBTZV0uaW5kZXhPZihjKSAhPT0gLTEgfHwgW3BlLCBEZSwgU2VdLmluZGV4T2YoYSkgIT09IC0xICYmIGMgPT09IGxlIHx8IHBBLmluZGV4T2YoYSkgIT09IC0xICYmIE5yLmluZGV4T2YoYykgIT09IC0xIHx8IE5yLmluZGV4T2YoYSkgIT09IC0xICYmIHBBLmluZGV4T2YoYykgIT09IC0xIHx8IC8vIChQUiB8IFBPKSDDlyAoIE9QIHwgSFkgKT8gTlVcbiAgW2dlLCBsZV0uaW5kZXhPZihhKSAhPT0gLTEgJiYgKGMgPT09IG5BIHx8IFtCZSwgY2VdLmluZGV4T2YoYykgIT09IC0xICYmIGVbaSArIDFdID09PSBuQSkgfHwgLy8gKCBPUCB8IEhZICkgw5cgTlVcbiAgW0JlLCBjZV0uaW5kZXhPZihhKSAhPT0gLTEgJiYgYyA9PT0gbkEgfHwgLy8gTlUgw5dcdChOVSB8IFNZIHwgSVMpXG4gIGEgPT09IG5BICYmIFtuQSwgWEEsIF9BXS5pbmRleE9mKGMpICE9PSAtMSlcbiAgICByZXR1cm4gSztcbiAgaWYgKFtuQSwgWEEsIF9BLCB4ZSwgc2VdLmluZGV4T2YoYykgIT09IC0xKVxuICAgIGZvciAodmFyIGwgPSBzOyBsID49IDA7ICkge1xuICAgICAgdmFyIGcgPSBlW2xdO1xuICAgICAgaWYgKGcgPT09IG5BKVxuICAgICAgICByZXR1cm4gSztcbiAgICAgIGlmIChbWEEsIF9BXS5pbmRleE9mKGcpICE9PSAtMSlcbiAgICAgICAgbC0tO1xuICAgICAgZWxzZVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIGlmIChbZ2UsIGxlXS5pbmRleE9mKGMpICE9PSAtMSlcbiAgICBmb3IgKHZhciBsID0gW3hlLCBzZV0uaW5kZXhPZihhKSAhPT0gLTEgPyBCIDogczsgbCA+PSAwOyApIHtcbiAgICAgIHZhciBnID0gZVtsXTtcbiAgICAgIGlmIChnID09PSBuQSlcbiAgICAgICAgcmV0dXJuIEs7XG4gICAgICBpZiAoW1hBLCBfQV0uaW5kZXhPZihnKSAhPT0gLTEpXG4gICAgICAgIGwtLTtcbiAgICAgIGVsc2VcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICBpZiAobnIgPT09IGEgJiYgW25yLCB6ZSwgZXIsIHRyXS5pbmRleE9mKGMpICE9PSAtMSB8fCBbemUsIGVyXS5pbmRleE9mKGEpICE9PSAtMSAmJiBbemUsICRlXS5pbmRleE9mKGMpICE9PSAtMSB8fCBbJGUsIHRyXS5pbmRleE9mKGEpICE9PSAtMSAmJiBjID09PSAkZSB8fCBQci5pbmRleE9mKGEpICE9PSAtMSAmJiBbVnIsIGxlXS5pbmRleE9mKGMpICE9PSAtMSB8fCBQci5pbmRleE9mKGMpICE9PSAtMSAmJiBhID09PSBnZSB8fCBwQS5pbmRleE9mKGEpICE9PSAtMSAmJiBwQS5pbmRleE9mKGMpICE9PSAtMSB8fCBhID09PSBfQSAmJiBwQS5pbmRleE9mKGMpICE9PSAtMSB8fCBwQS5jb25jYXQobkEpLmluZGV4T2YoYSkgIT09IC0xICYmIGMgPT09IEJlICYmIE9CLmluZGV4T2YoQVtpXSkgPT09IC0xIHx8IHBBLmNvbmNhdChuQSkuaW5kZXhPZihjKSAhPT0gLTEgJiYgYSA9PT0gc2UpXG4gICAgcmV0dXJuIEs7XG4gIGlmIChhID09PSBLdCAmJiBjID09PSBLdCkge1xuICAgIGZvciAodmFyIFUgPSB0W3NdLCB3ID0gMTsgVSA+IDAgJiYgKFUtLSwgZVtVXSA9PT0gS3QpOyApXG4gICAgICB3Kys7XG4gICAgaWYgKHcgJSAyICE9PSAwKVxuICAgICAgcmV0dXJuIEs7XG4gIH1cbiAgcmV0dXJuIGEgPT09IERlICYmIGMgPT09IFNlID8gSyA6IFRlO1xufSwgUEIgPSBmdW5jdGlvbihBLCBlKSB7XG4gIGUgfHwgKGUgPSB7IGxpbmVCcmVhazogXCJub3JtYWxcIiwgd29yZEJyZWFrOiBcIm5vcm1hbFwiIH0pO1xuICB2YXIgdCA9IFZCKEEsIGUubGluZUJyZWFrKSwgciA9IHRbMF0sIG4gPSB0WzFdLCBzID0gdFsyXTtcbiAgKGUud29yZEJyZWFrID09PSBcImJyZWFrLWFsbFwiIHx8IGUud29yZEJyZWFrID09PSBcImJyZWFrLXdvcmRcIikgJiYgKG4gPSBuLm1hcChmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIFtuQSwgR0EsIGtuXS5pbmRleE9mKGkpICE9PSAtMSA/IHBlIDogaTtcbiAgfSkpO1xuICB2YXIgQiA9IGUud29yZEJyZWFrID09PSBcImtlZXAtYWxsXCIgPyBzLm1hcChmdW5jdGlvbihpLCBhKSB7XG4gICAgcmV0dXJuIGkgJiYgQVthXSA+PSAxOTk2OCAmJiBBW2FdIDw9IDQwOTU5O1xuICB9KSA6IHZvaWQgMDtcbiAgcmV0dXJuIFtyLCBuLCBCXTtcbn0sIGtCID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCwgciwgbikge1xuICAgICAgdGhpcy5jb2RlUG9pbnRzID0gZSwgdGhpcy5yZXF1aXJlZCA9IHQgPT09IF9uLCB0aGlzLnN0YXJ0ID0gciwgdGhpcy5lbmQgPSBuO1xuICAgIH1cbiAgICByZXR1cm4gQS5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBHLmFwcGx5KHZvaWQgMCwgdGhpcy5jb2RlUG9pbnRzLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKSk7XG4gICAgfSwgQTtcbiAgfSgpXG4pLCBfQiA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSBRdChBKSwgciA9IFBCKHQsIGUpLCBuID0gclswXSwgcyA9IHJbMV0sIEIgPSByWzJdLCBpID0gdC5sZW5ndGgsIGEgPSAwLCBvID0gMDtcbiAgcmV0dXJuIHtcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvID49IGkpXG4gICAgICAgIHJldHVybiB7IGRvbmU6ICEwLCB2YWx1ZTogbnVsbCB9O1xuICAgICAgZm9yICh2YXIgYyA9IEs7IG8gPCBpICYmIChjID0gTkIodCwgcywgbiwgKytvLCBCKSkgPT09IEs7IClcbiAgICAgICAgO1xuICAgICAgaWYgKGMgIT09IEsgfHwgbyA9PT0gaSkge1xuICAgICAgICB2YXIgbCA9IG5ldyBrQih0LCBjLCBhLCBvKTtcbiAgICAgICAgcmV0dXJuIGEgPSBvLCB7IHZhbHVlOiBsLCBkb25lOiAhMSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogITAsIHZhbHVlOiBudWxsIH07XG4gICAgfVxuICB9O1xufSwgWEIgPSAxLCBKQiA9IDIsIHZlID0gNCwgX3IgPSA4LCB0dCA9IDEwLCBYciA9IDQ3LCBDZSA9IDkyLCBXQiA9IDksIFlCID0gMzIsIE1lID0gMzQsIGllID0gNjEsIFpCID0gMzUsIGpCID0gMzYsIHFCID0gMzcsIE9lID0gMzksIFJlID0gNDAsIGFlID0gNDEsIHpCID0gOTUsIGVBID0gNDUsICRCID0gMzMsIEFpID0gNjAsIGVpID0gNjIsIHRpID0gNjQsIHJpID0gOTEsIG5pID0gOTMsIHNpID0gNjEsIEJpID0gMTIzLCBHZSA9IDYzLCBpaSA9IDEyNSwgSnIgPSAxMjQsIGFpID0gMTI2LCBvaSA9IDEyOCwgV3IgPSA2NTUzMywgeHQgPSA0MiwgTkEgPSA0MywgY2kgPSA0NCwgbGkgPSA1OCwgZ2kgPSA1OSwgRWUgPSA0NiwgdWkgPSAwLCB3aSA9IDgsIFFpID0gMTEsIGZpID0gMTQsIENpID0gMzEsIFVpID0gMTI3LCBmQSA9IC0xLCBKbiA9IDQ4LCBXbiA9IDk3LCBZbiA9IDEwMSwgRmkgPSAxMDIsIGhpID0gMTE3LCBkaSA9IDEyMiwgWm4gPSA2NSwgam4gPSA2OSwgcW4gPSA3MCwgcGkgPSA4NSwgRWkgPSA5MCwgaiA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEgPj0gSm4gJiYgQSA8PSA1Nztcbn0sIEhpID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQSA+PSA1NTI5NiAmJiBBIDw9IDU3MzQzO1xufSwgSkEgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBqKEEpIHx8IEEgPj0gWm4gJiYgQSA8PSBxbiB8fCBBID49IFduICYmIEEgPD0gRmk7XG59LCB2aSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEgPj0gV24gJiYgQSA8PSBkaTtcbn0sIElpID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQSA+PSBabiAmJiBBIDw9IEVpO1xufSwgbWkgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiB2aShBKSB8fCBJaShBKTtcbn0sIHlpID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQSA+PSBvaTtcbn0sIFZlID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQSA9PT0gdHQgfHwgQSA9PT0gV0IgfHwgQSA9PT0gWUI7XG59LCBydCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIG1pKEEpIHx8IHlpKEEpIHx8IEEgPT09IHpCO1xufSwgWXIgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBydChBKSB8fCBqKEEpIHx8IEEgPT09IGVBO1xufSwgTGkgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBID49IHVpICYmIEEgPD0gd2kgfHwgQSA9PT0gUWkgfHwgQSA+PSBmaSAmJiBBIDw9IENpIHx8IEEgPT09IFVpO1xufSwgS0EgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHJldHVybiBBICE9PSBDZSA/ICExIDogZSAhPT0gdHQ7XG59LCBOZSA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgcmV0dXJuIEEgPT09IGVBID8gcnQoZSkgfHwgS0EoZSwgdCkgOiBydChBKSA/ICEwIDogISEoQSA9PT0gQ2UgJiYgS0EoQSwgZSkpO1xufSwgRHQgPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHJldHVybiBBID09PSBOQSB8fCBBID09PSBlQSA/IGooZSkgPyAhMCA6IGUgPT09IEVlICYmIGoodCkgOiBqKEEgPT09IEVlID8gZSA6IEEpO1xufSwgS2kgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gMCwgdCA9IDE7XG4gIChBW2VdID09PSBOQSB8fCBBW2VdID09PSBlQSkgJiYgKEFbZV0gPT09IGVBICYmICh0ID0gLTEpLCBlKyspO1xuICBmb3IgKHZhciByID0gW107IGooQVtlXSk7IClcbiAgICByLnB1c2goQVtlKytdKTtcbiAgdmFyIG4gPSByLmxlbmd0aCA/IHBhcnNlSW50KEcuYXBwbHkodm9pZCAwLCByKSwgMTApIDogMDtcbiAgQVtlXSA9PT0gRWUgJiYgZSsrO1xuICBmb3IgKHZhciBzID0gW107IGooQVtlXSk7IClcbiAgICBzLnB1c2goQVtlKytdKTtcbiAgdmFyIEIgPSBzLmxlbmd0aCwgaSA9IEIgPyBwYXJzZUludChHLmFwcGx5KHZvaWQgMCwgcyksIDEwKSA6IDA7XG4gIChBW2VdID09PSBqbiB8fCBBW2VdID09PSBZbikgJiYgZSsrO1xuICB2YXIgYSA9IDE7XG4gIChBW2VdID09PSBOQSB8fCBBW2VdID09PSBlQSkgJiYgKEFbZV0gPT09IGVBICYmIChhID0gLTEpLCBlKyspO1xuICBmb3IgKHZhciBvID0gW107IGooQVtlXSk7IClcbiAgICBvLnB1c2goQVtlKytdKTtcbiAgdmFyIGMgPSBvLmxlbmd0aCA/IHBhcnNlSW50KEcuYXBwbHkodm9pZCAwLCBvKSwgMTApIDogMDtcbiAgcmV0dXJuIHQgKiAobiArIGkgKiBNYXRoLnBvdygxMCwgLUIpKSAqIE1hdGgucG93KDEwLCBhICogYyk7XG59LCBiaSA9IHtcbiAgdHlwZTogMlxuICAvKiBMRUZUX1BBUkVOVEhFU0lTX1RPS0VOICovXG59LCB4aSA9IHtcbiAgdHlwZTogM1xuICAvKiBSSUdIVF9QQVJFTlRIRVNJU19UT0tFTiAqL1xufSwgRGkgPSB7XG4gIHR5cGU6IDRcbiAgLyogQ09NTUFfVE9LRU4gKi9cbn0sIFNpID0ge1xuICB0eXBlOiAxM1xuICAvKiBTVUZGSVhfTUFUQ0hfVE9LRU4gKi9cbn0sIFRpID0ge1xuICB0eXBlOiA4XG4gIC8qIFBSRUZJWF9NQVRDSF9UT0tFTiAqL1xufSwgTWkgPSB7XG4gIHR5cGU6IDIxXG4gIC8qIENPTFVNTl9UT0tFTiAqL1xufSwgT2kgPSB7XG4gIHR5cGU6IDlcbiAgLyogREFTSF9NQVRDSF9UT0tFTiAqL1xufSwgUmkgPSB7XG4gIHR5cGU6IDEwXG4gIC8qIElOQ0xVREVfTUFUQ0hfVE9LRU4gKi9cbn0sIEdpID0ge1xuICB0eXBlOiAxMVxuICAvKiBMRUZUX0NVUkxZX0JSQUNLRVRfVE9LRU4gKi9cbn0sIFZpID0ge1xuICB0eXBlOiAxMlxuICAvKiBSSUdIVF9DVVJMWV9CUkFDS0VUX1RPS0VOICovXG59LCBOaSA9IHtcbiAgdHlwZTogMTRcbiAgLyogU1VCU1RSSU5HX01BVENIX1RPS0VOICovXG59LCBQZSA9IHtcbiAgdHlwZTogMjNcbiAgLyogQkFEX1VSTF9UT0tFTiAqL1xufSwgUGkgPSB7XG4gIHR5cGU6IDFcbiAgLyogQkFEX1NUUklOR19UT0tFTiAqL1xufSwga2kgPSB7XG4gIHR5cGU6IDI1XG4gIC8qIENET19UT0tFTiAqL1xufSwgX2kgPSB7XG4gIHR5cGU6IDI0XG4gIC8qIENEQ19UT0tFTiAqL1xufSwgWGkgPSB7XG4gIHR5cGU6IDI2XG4gIC8qIENPTE9OX1RPS0VOICovXG59LCBKaSA9IHtcbiAgdHlwZTogMjdcbiAgLyogU0VNSUNPTE9OX1RPS0VOICovXG59LCBXaSA9IHtcbiAgdHlwZTogMjhcbiAgLyogTEVGVF9TUVVBUkVfQlJBQ0tFVF9UT0tFTiAqL1xufSwgWWkgPSB7XG4gIHR5cGU6IDI5XG4gIC8qIFJJR0hUX1NRVUFSRV9CUkFDS0VUX1RPS0VOICovXG59LCBaaSA9IHtcbiAgdHlwZTogMzFcbiAgLyogV0hJVEVTUEFDRV9UT0tFTiAqL1xufSwgaXIgPSB7XG4gIHR5cGU6IDMyXG4gIC8qIEVPRl9UT0tFTiAqL1xufSwgem4gPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQSgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gW107XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuY29uY2F0KFF0KGUpKTtcbiAgICB9LCBBLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBlID0gW10sIHQgPSB0aGlzLmNvbnN1bWVUb2tlbigpOyB0ICE9PSBpcjsgKVxuICAgICAgICBlLnB1c2godCksIHQgPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZVRva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgTWU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZVN0cmluZ1Rva2VuKE1lKTtcbiAgICAgICAgY2FzZSBaQjpcbiAgICAgICAgICB2YXIgdCA9IHRoaXMucGVla0NvZGVQb2ludCgwKSwgciA9IHRoaXMucGVla0NvZGVQb2ludCgxKSwgbiA9IHRoaXMucGVla0NvZGVQb2ludCgyKTtcbiAgICAgICAgICBpZiAoWXIodCkgfHwgS0EociwgbikpIHtcbiAgICAgICAgICAgIHZhciBzID0gTmUodCwgciwgbikgPyBKQiA6IFhCLCBCID0gdGhpcy5jb25zdW1lTmFtZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogNSwgdmFsdWU6IEIsIGZsYWdzOiBzIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGpCOlxuICAgICAgICAgIGlmICh0aGlzLnBlZWtDb2RlUG9pbnQoMCkgPT09IGllKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCBTaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBPZTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lU3RyaW5nVG9rZW4oT2UpO1xuICAgICAgICBjYXNlIFJlOlxuICAgICAgICAgIHJldHVybiBiaTtcbiAgICAgICAgY2FzZSBhZTpcbiAgICAgICAgICByZXR1cm4geGk7XG4gICAgICAgIGNhc2UgeHQ6XG4gICAgICAgICAgaWYgKHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0gaWUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lQ29kZVBvaW50KCksIE5pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE5BOlxuICAgICAgICAgIGlmIChEdChlLCB0aGlzLnBlZWtDb2RlUG9pbnQoMCksIHRoaXMucGVla0NvZGVQb2ludCgxKSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNvbnN1bWVDb2RlUG9pbnQoZSksIHRoaXMuY29uc3VtZU51bWVyaWNUb2tlbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNpOlxuICAgICAgICAgIHJldHVybiBEaTtcbiAgICAgICAgY2FzZSBlQTpcbiAgICAgICAgICB2YXIgaSA9IGUsIGEgPSB0aGlzLnBlZWtDb2RlUG9pbnQoMCksIG8gPSB0aGlzLnBlZWtDb2RlUG9pbnQoMSk7XG4gICAgICAgICAgaWYgKER0KGksIGEsIG8pKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb25zdW1lQ29kZVBvaW50KGUpLCB0aGlzLmNvbnN1bWVOdW1lcmljVG9rZW4oKTtcbiAgICAgICAgICBpZiAoTmUoaSwgYSwgbykpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNvbnN1bWVDb2RlUG9pbnQoZSksIHRoaXMuY29uc3VtZUlkZW50TGlrZVRva2VuKCk7XG4gICAgICAgICAgaWYgKGEgPT09IGVBICYmIG8gPT09IGVpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgX2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRWU6XG4gICAgICAgICAgaWYgKER0KGUsIHRoaXMucGVla0NvZGVQb2ludCgwKSwgdGhpcy5wZWVrQ29kZVBvaW50KDEpKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY29uc3VtZUNvZGVQb2ludChlKSwgdGhpcy5jb25zdW1lTnVtZXJpY1Rva2VuKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWHI6XG4gICAgICAgICAgaWYgKHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0geHQpXG4gICAgICAgICAgICBmb3IgKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpOyA7ICkge1xuICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICAgICAgICBpZiAoYyA9PT0geHQgJiYgKGMgPSB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgYyA9PT0gWHIpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gZkEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGk6XG4gICAgICAgICAgcmV0dXJuIFhpO1xuICAgICAgICBjYXNlIGdpOlxuICAgICAgICAgIHJldHVybiBKaTtcbiAgICAgICAgY2FzZSBBaTpcbiAgICAgICAgICBpZiAodGhpcy5wZWVrQ29kZVBvaW50KDApID09PSAkQiAmJiB0aGlzLnBlZWtDb2RlUG9pbnQoMSkgPT09IGVBICYmIHRoaXMucGVla0NvZGVQb2ludCgyKSA9PT0gZUEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lQ29kZVBvaW50KCksIHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCBraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0aTpcbiAgICAgICAgICB2YXIgbCA9IHRoaXMucGVla0NvZGVQb2ludCgwKSwgZyA9IHRoaXMucGVla0NvZGVQb2ludCgxKSwgVSA9IHRoaXMucGVla0NvZGVQb2ludCgyKTtcbiAgICAgICAgICBpZiAoTmUobCwgZywgVSkpIHtcbiAgICAgICAgICAgIHZhciBCID0gdGhpcy5jb25zdW1lTmFtZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogNywgdmFsdWU6IEIgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugcmk6XG4gICAgICAgICAgcmV0dXJuIFdpO1xuICAgICAgICBjYXNlIENlOlxuICAgICAgICAgIGlmIChLQShlLCB0aGlzLnBlZWtDb2RlUG9pbnQoMCkpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb25zdW1lQ29kZVBvaW50KGUpLCB0aGlzLmNvbnN1bWVJZGVudExpa2VUb2tlbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG5pOlxuICAgICAgICAgIHJldHVybiBZaTtcbiAgICAgICAgY2FzZSBzaTpcbiAgICAgICAgICBpZiAodGhpcy5wZWVrQ29kZVBvaW50KDApID09PSBpZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgVGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQmk6XG4gICAgICAgICAgcmV0dXJuIEdpO1xuICAgICAgICBjYXNlIGlpOlxuICAgICAgICAgIHJldHVybiBWaTtcbiAgICAgICAgY2FzZSBoaTpcbiAgICAgICAgY2FzZSBwaTpcbiAgICAgICAgICB2YXIgdyA9IHRoaXMucGVla0NvZGVQb2ludCgwKSwgZiA9IHRoaXMucGVla0NvZGVQb2ludCgxKTtcbiAgICAgICAgICByZXR1cm4gdyA9PT0gTkEgJiYgKEpBKGYpIHx8IGYgPT09IEdlKSAmJiAodGhpcy5jb25zdW1lQ29kZVBvaW50KCksIHRoaXMuY29uc3VtZVVuaWNvZGVSYW5nZVRva2VuKCkpLCB0aGlzLnJlY29uc3VtZUNvZGVQb2ludChlKSwgdGhpcy5jb25zdW1lSWRlbnRMaWtlVG9rZW4oKTtcbiAgICAgICAgY2FzZSBKcjpcbiAgICAgICAgICBpZiAodGhpcy5wZWVrQ29kZVBvaW50KDApID09PSBpZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgT2k7XG4gICAgICAgICAgaWYgKHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0gSnIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lQ29kZVBvaW50KCksIE1pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFpOlxuICAgICAgICAgIGlmICh0aGlzLnBlZWtDb2RlUG9pbnQoMCkgPT09IGllKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCBSaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmQTpcbiAgICAgICAgICByZXR1cm4gaXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gVmUoZSkgPyAodGhpcy5jb25zdW1lV2hpdGVTcGFjZSgpLCBaaSkgOiBqKGUpID8gKHRoaXMucmVjb25zdW1lQ29kZVBvaW50KGUpLCB0aGlzLmNvbnN1bWVOdW1lcmljVG9rZW4oKSkgOiBydChlKSA/ICh0aGlzLnJlY29uc3VtZUNvZGVQb2ludChlKSwgdGhpcy5jb25zdW1lSWRlbnRMaWtlVG9rZW4oKSkgOiB7IHR5cGU6IDYsIHZhbHVlOiBHKGUpIH07XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZUNvZGVQb2ludCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl92YWx1ZS5zaGlmdCgpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBlID4gXCJ1XCIgPyAtMSA6IGU7XG4gICAgfSwgQS5wcm90b3R5cGUucmVjb25zdW1lQ29kZVBvaW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5fdmFsdWUudW5zaGlmdChlKTtcbiAgICB9LCBBLnByb3RvdHlwZS5wZWVrQ29kZVBvaW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIGUgPj0gdGhpcy5fdmFsdWUubGVuZ3RoID8gLTEgOiB0aGlzLl92YWx1ZVtlXTtcbiAgICB9LCBBLnByb3RvdHlwZS5jb25zdW1lVW5pY29kZVJhbmdlVG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IHRoaXMuY29uc3VtZUNvZGVQb2ludCgpOyBKQSh0KSAmJiBlLmxlbmd0aCA8IDY7IClcbiAgICAgICAgZS5wdXNoKHQpLCB0ID0gdGhpcy5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICBmb3IgKHZhciByID0gITE7IHQgPT09IEdlICYmIGUubGVuZ3RoIDwgNjsgKVxuICAgICAgICBlLnB1c2godCksIHQgPSB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgciA9ICEwO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUludChHLmFwcGx5KHZvaWQgMCwgZS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgIHJldHVybiBhID09PSBHZSA/IEpuIDogYTtcbiAgICAgICAgfSkpLCAxNiksIHMgPSBwYXJzZUludChHLmFwcGx5KHZvaWQgMCwgZS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgIHJldHVybiBhID09PSBHZSA/IHFuIDogYTtcbiAgICAgICAgfSkpLCAxNik7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IDMwLCBzdGFydDogbiwgZW5kOiBzIH07XG4gICAgICB9XG4gICAgICB2YXIgQiA9IHBhcnNlSW50KEcuYXBwbHkodm9pZCAwLCBlKSwgMTYpO1xuICAgICAgaWYgKHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0gZUEgJiYgSkEodGhpcy5wZWVrQ29kZVBvaW50KDEpKSkge1xuICAgICAgICB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgdCA9IHRoaXMuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gW107IEpBKHQpICYmIGkubGVuZ3RoIDwgNjsgKVxuICAgICAgICAgIGkucHVzaCh0KSwgdCA9IHRoaXMuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgICAgICB2YXIgcyA9IHBhcnNlSW50KEcuYXBwbHkodm9pZCAwLCBpKSwgMTYpO1xuICAgICAgICByZXR1cm4geyB0eXBlOiAzMCwgc3RhcnQ6IEIsIGVuZDogcyB9O1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldHVybiB7IHR5cGU6IDMwLCBzdGFydDogQiwgZW5kOiBCIH07XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZUlkZW50TGlrZVRva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uc3VtZU5hbWUoKTtcbiAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCkgPT09IFwidXJsXCIgJiYgdGhpcy5wZWVrQ29kZVBvaW50KDApID09PSBSZSA/ICh0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgdGhpcy5jb25zdW1lVXJsVG9rZW4oKSkgOiB0aGlzLnBlZWtDb2RlUG9pbnQoMCkgPT09IFJlID8gKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCB7IHR5cGU6IDE5LCB2YWx1ZTogZSB9KSA6IHsgdHlwZTogMjAsIHZhbHVlOiBlIH07XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZVVybFRva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IFtdO1xuICAgICAgaWYgKHRoaXMuY29uc3VtZVdoaXRlU3BhY2UoKSwgdGhpcy5wZWVrQ29kZVBvaW50KDApID09PSBmQSlcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogMjIsIHZhbHVlOiBcIlwiIH07XG4gICAgICB2YXIgdCA9IHRoaXMucGVla0NvZGVQb2ludCgwKTtcbiAgICAgIGlmICh0ID09PSBPZSB8fCB0ID09PSBNZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMuY29uc3VtZVN0cmluZ1Rva2VuKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpKTtcbiAgICAgICAgcmV0dXJuIHIudHlwZSA9PT0gMCAmJiAodGhpcy5jb25zdW1lV2hpdGVTcGFjZSgpLCB0aGlzLnBlZWtDb2RlUG9pbnQoMCkgPT09IGZBIHx8IHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0gYWUpID8gKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpLCB7IHR5cGU6IDIyLCB2YWx1ZTogci52YWx1ZSB9KSA6ICh0aGlzLmNvbnN1bWVCYWRVcmxSZW1uYW50cygpLCBQZSk7XG4gICAgICB9XG4gICAgICBmb3IgKDsgOyApIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgaWYgKG4gPT09IGZBIHx8IG4gPT09IGFlKVxuICAgICAgICAgIHJldHVybiB7IHR5cGU6IDIyLCB2YWx1ZTogRy5hcHBseSh2b2lkIDAsIGUpIH07XG4gICAgICAgIGlmIChWZShuKSlcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lV2hpdGVTcGFjZSgpLCB0aGlzLnBlZWtDb2RlUG9pbnQoMCkgPT09IGZBIHx8IHRoaXMucGVla0NvZGVQb2ludCgwKSA9PT0gYWUgPyAodGhpcy5jb25zdW1lQ29kZVBvaW50KCksIHsgdHlwZTogMjIsIHZhbHVlOiBHLmFwcGx5KHZvaWQgMCwgZSkgfSkgOiAodGhpcy5jb25zdW1lQmFkVXJsUmVtbmFudHMoKSwgUGUpO1xuICAgICAgICBpZiAobiA9PT0gTWUgfHwgbiA9PT0gT2UgfHwgbiA9PT0gUmUgfHwgTGkobikpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZUJhZFVybFJlbW5hbnRzKCksIFBlO1xuICAgICAgICBpZiAobiA9PT0gQ2UpXG4gICAgICAgICAgaWYgKEtBKG4sIHRoaXMucGVla0NvZGVQb2ludCgwKSkpXG4gICAgICAgICAgICBlLnB1c2godGhpcy5jb25zdW1lRXNjYXBlZENvZGVQb2ludCgpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lQmFkVXJsUmVtbmFudHMoKSwgUGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlLnB1c2gobik7XG4gICAgICB9XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZVdoaXRlU3BhY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAoOyBWZSh0aGlzLnBlZWtDb2RlUG9pbnQoMCkpOyApXG4gICAgICAgIHRoaXMuY29uc3VtZUNvZGVQb2ludCgpO1xuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVCYWRVcmxSZW1uYW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICg7IDsgKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICAgIGlmIChlID09PSBhZSB8fCBlID09PSBmQSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIEtBKGUsIHRoaXMucGVla0NvZGVQb2ludCgwKSkgJiYgdGhpcy5jb25zdW1lRXNjYXBlZENvZGVQb2ludCgpO1xuICAgICAgfVxuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVTdHJpbmdTbGljZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSA1ZTQsIHIgPSBcIlwiOyBlID4gMDsgKSB7XG4gICAgICAgIHZhciBuID0gTWF0aC5taW4odCwgZSk7XG4gICAgICAgIHIgKz0gRy5hcHBseSh2b2lkIDAsIHRoaXMuX3ZhbHVlLnNwbGljZSgwLCBuKSksIGUgLT0gbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZS5zaGlmdCgpLCByO1xuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVTdHJpbmdUb2tlbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gXCJcIiwgciA9IDA7XG4gICAgICBkbyB7XG4gICAgICAgIHZhciBuID0gdGhpcy5fdmFsdWVbcl07XG4gICAgICAgIGlmIChuID09PSBmQSB8fCBuID09PSB2b2lkIDAgfHwgbiA9PT0gZSlcbiAgICAgICAgICByZXR1cm4gdCArPSB0aGlzLmNvbnN1bWVTdHJpbmdTbGljZShyKSwgeyB0eXBlOiAwLCB2YWx1ZTogdCB9O1xuICAgICAgICBpZiAobiA9PT0gdHQpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLnNwbGljZSgwLCByKSwgUGk7XG4gICAgICAgIGlmIChuID09PSBDZSkge1xuICAgICAgICAgIHZhciBzID0gdGhpcy5fdmFsdWVbciArIDFdO1xuICAgICAgICAgIHMgIT09IGZBICYmIHMgIT09IHZvaWQgMCAmJiAocyA9PT0gdHQgPyAodCArPSB0aGlzLmNvbnN1bWVTdHJpbmdTbGljZShyKSwgciA9IC0xLCB0aGlzLl92YWx1ZS5zaGlmdCgpKSA6IEtBKG4sIHMpICYmICh0ICs9IHRoaXMuY29uc3VtZVN0cmluZ1NsaWNlKHIpLCB0ICs9IEcodGhpcy5jb25zdW1lRXNjYXBlZENvZGVQb2ludCgpKSwgciA9IC0xKSk7XG4gICAgICAgIH1cbiAgICAgICAgcisrO1xuICAgICAgfSB3aGlsZSAoITApO1xuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVOdW1iZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gW10sIHQgPSB2ZSwgciA9IHRoaXMucGVla0NvZGVQb2ludCgwKTtcbiAgICAgIGZvciAoKHIgPT09IE5BIHx8IHIgPT09IGVBKSAmJiBlLnB1c2godGhpcy5jb25zdW1lQ29kZVBvaW50KCkpOyBqKHRoaXMucGVla0NvZGVQb2ludCgwKSk7IClcbiAgICAgICAgZS5wdXNoKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpKTtcbiAgICAgIHIgPSB0aGlzLnBlZWtDb2RlUG9pbnQoMCk7XG4gICAgICB2YXIgbiA9IHRoaXMucGVla0NvZGVQb2ludCgxKTtcbiAgICAgIGlmIChyID09PSBFZSAmJiBqKG4pKVxuICAgICAgICBmb3IgKGUucHVzaCh0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgdGhpcy5jb25zdW1lQ29kZVBvaW50KCkpLCB0ID0gX3I7IGoodGhpcy5wZWVrQ29kZVBvaW50KDApKTsgKVxuICAgICAgICAgIGUucHVzaCh0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSk7XG4gICAgICByID0gdGhpcy5wZWVrQ29kZVBvaW50KDApLCBuID0gdGhpcy5wZWVrQ29kZVBvaW50KDEpO1xuICAgICAgdmFyIHMgPSB0aGlzLnBlZWtDb2RlUG9pbnQoMik7XG4gICAgICBpZiAoKHIgPT09IGpuIHx8IHIgPT09IFluKSAmJiAoKG4gPT09IE5BIHx8IG4gPT09IGVBKSAmJiBqKHMpIHx8IGoobikpKVxuICAgICAgICBmb3IgKGUucHVzaCh0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSwgdGhpcy5jb25zdW1lQ29kZVBvaW50KCkpLCB0ID0gX3I7IGoodGhpcy5wZWVrQ29kZVBvaW50KDApKTsgKVxuICAgICAgICAgIGUucHVzaCh0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKSk7XG4gICAgICByZXR1cm4gW0tpKGUpLCB0XTtcbiAgICB9LCBBLnByb3RvdHlwZS5jb25zdW1lTnVtZXJpY1Rva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uc3VtZU51bWJlcigpLCB0ID0gZVswXSwgciA9IGVbMV0sIG4gPSB0aGlzLnBlZWtDb2RlUG9pbnQoMCksIHMgPSB0aGlzLnBlZWtDb2RlUG9pbnQoMSksIEIgPSB0aGlzLnBlZWtDb2RlUG9pbnQoMik7XG4gICAgICBpZiAoTmUobiwgcywgQikpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmNvbnN1bWVOYW1lKCk7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IDE1LCBudW1iZXI6IHQsIGZsYWdzOiByLCB1bml0OiBpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gcUIgPyAodGhpcy5jb25zdW1lQ29kZVBvaW50KCksIHsgdHlwZTogMTYsIG51bWJlcjogdCwgZmxhZ3M6IHIgfSkgOiB7IHR5cGU6IDE3LCBudW1iZXI6IHQsIGZsYWdzOiByIH07XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZUVzY2FwZWRDb2RlUG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gdGhpcy5jb25zdW1lQ29kZVBvaW50KCk7XG4gICAgICBpZiAoSkEoZSkpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IEcoZSk7IEpBKHRoaXMucGVla0NvZGVQb2ludCgwKSkgJiYgdC5sZW5ndGggPCA2OyApXG4gICAgICAgICAgdCArPSBHKHRoaXMuY29uc3VtZUNvZGVQb2ludCgpKTtcbiAgICAgICAgVmUodGhpcy5wZWVrQ29kZVBvaW50KDApKSAmJiB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludCh0LCAxNik7XG4gICAgICAgIHJldHVybiByID09PSAwIHx8IEhpKHIpIHx8IHIgPiAxMTE0MTExID8gV3IgOiByO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGUgPT09IGZBID8gV3IgOiBlO1xuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBlID0gXCJcIjsgOyApIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmNvbnN1bWVDb2RlUG9pbnQoKTtcbiAgICAgICAgaWYgKFlyKHQpKVxuICAgICAgICAgIGUgKz0gRyh0KTtcbiAgICAgICAgZWxzZSBpZiAoS0EodCwgdGhpcy5wZWVrQ29kZVBvaW50KDApKSlcbiAgICAgICAgICBlICs9IEcodGhpcy5jb25zdW1lRXNjYXBlZENvZGVQb2ludCgpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0aGlzLnJlY29uc3VtZUNvZGVQb2ludCh0KSwgZTtcbiAgICAgIH1cbiAgICB9LCBBO1xuICB9KClcbiksICRuID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSkge1xuICAgICAgdGhpcy5fdG9rZW5zID0gZTtcbiAgICB9XG4gICAgcmV0dXJuIEEuY3JlYXRlID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSBuZXcgem4oKTtcbiAgICAgIHJldHVybiB0LndyaXRlKGUpLCBuZXcgQSh0LnJlYWQoKSk7XG4gICAgfSwgQS5wYXJzZVZhbHVlID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIEEuY3JlYXRlKGUpLnBhcnNlQ29tcG9uZW50VmFsdWUoKTtcbiAgICB9LCBBLnBhcnNlVmFsdWVzID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIEEuY3JlYXRlKGUpLnBhcnNlQ29tcG9uZW50VmFsdWVzKCk7XG4gICAgfSwgQS5wcm90b3R5cGUucGFyc2VDb21wb25lbnRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMuY29uc3VtZVRva2VuKCk7IGUudHlwZSA9PT0gMzE7IClcbiAgICAgICAgZSA9IHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgICBpZiAoZS50eXBlID09PSAzMilcbiAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRXJyb3IgcGFyc2luZyBDU1MgY29tcG9uZW50IHZhbHVlLCB1bmV4cGVjdGVkIEVPRlwiKTtcbiAgICAgIHRoaXMucmVjb25zdW1lVG9rZW4oZSk7XG4gICAgICB2YXIgdCA9IHRoaXMuY29uc3VtZUNvbXBvbmVudFZhbHVlKCk7XG4gICAgICBkb1xuICAgICAgICBlID0gdGhpcy5jb25zdW1lVG9rZW4oKTtcbiAgICAgIHdoaWxlIChlLnR5cGUgPT09IDMxKTtcbiAgICAgIGlmIChlLnR5cGUgPT09IDMyKVxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkVycm9yIHBhcnNpbmcgQ1NTIGNvbXBvbmVudCB2YWx1ZSwgbXVsdGlwbGUgdmFsdWVzIGZvdW5kIHdoZW4gZXhwZWN0aW5nIG9ubHkgb25lXCIpO1xuICAgIH0sIEEucHJvdG90eXBlLnBhcnNlQ29tcG9uZW50VmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBlID0gW107IDsgKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5jb25zdW1lQ29tcG9uZW50VmFsdWUoKTtcbiAgICAgICAgaWYgKHQudHlwZSA9PT0gMzIpXG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIGUucHVzaCh0KSwgZS5wdXNoKCk7XG4gICAgICB9XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZUNvbXBvbmVudFZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICBjYXNlIDI4OlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZVNpbXBsZUJsb2NrKGUudHlwZSk7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29uc3VtZUZ1bmN0aW9uKGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfSwgQS5wcm90b3R5cGUuY29uc3VtZVNpbXBsZUJsb2NrID0gZnVuY3Rpb24oZSkge1xuICAgICAgZm9yICh2YXIgdCA9IHsgdHlwZTogZSwgdmFsdWVzOiBbXSB9LCByID0gdGhpcy5jb25zdW1lVG9rZW4oKTsgOyApIHtcbiAgICAgICAgaWYgKHIudHlwZSA9PT0gMzIgfHwgcWkociwgZSkpXG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIHRoaXMucmVjb25zdW1lVG9rZW4ociksIHQudmFsdWVzLnB1c2godGhpcy5jb25zdW1lQ29tcG9uZW50VmFsdWUoKSksIHIgPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgICAgfVxuICAgIH0sIEEucHJvdG90eXBlLmNvbnN1bWVGdW5jdGlvbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSB7XG4gICAgICAgIG5hbWU6IGUudmFsdWUsXG4gICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIHR5cGU6IDE4XG4gICAgICAgIC8qIEZVTkNUSU9OICovXG4gICAgICB9OyA7ICkge1xuICAgICAgICB2YXIgciA9IHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgICAgIGlmIChyLnR5cGUgPT09IDMyIHx8IHIudHlwZSA9PT0gMylcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgdGhpcy5yZWNvbnN1bWVUb2tlbihyKSwgdC52YWx1ZXMucHVzaCh0aGlzLmNvbnN1bWVDb21wb25lbnRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9LCBBLnByb3RvdHlwZS5jb25zdW1lVG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fdG9rZW5zLnNoaWZ0KCk7XG4gICAgICByZXR1cm4gdHlwZW9mIGUgPiBcInVcIiA/IGlyIDogZTtcbiAgICB9LCBBLnByb3RvdHlwZS5yZWNvbnN1bWVUb2tlbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuX3Rva2Vucy51bnNoaWZ0KGUpO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgSWUgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgPT09IDE1O1xufSwgcmUgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgPT09IDE3O1xufSwgRCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudHlwZSA9PT0gMjA7XG59LCBqaSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudHlwZSA9PT0gMDtcbn0sIGFyID0gZnVuY3Rpb24oQSwgZSkge1xuICByZXR1cm4gRChBKSAmJiBBLnZhbHVlID09PSBlO1xufSwgQXMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgIT09IDMxO1xufSwgdGUgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgIT09IDMxICYmIEEudHlwZSAhPT0gNDtcbn0sIFVBID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IFtdLCB0ID0gW107XG4gIHJldHVybiBBLmZvckVhY2goZnVuY3Rpb24ocikge1xuICAgIGlmIChyLnR5cGUgPT09IDQpIHtcbiAgICAgIGlmICh0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBmdW5jdGlvbiBhcmdzLCB6ZXJvIHRva2VucyBmb3IgYXJnXCIpO1xuICAgICAgZS5wdXNoKHQpLCB0ID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHIudHlwZSAhPT0gMzEgJiYgdC5wdXNoKHIpO1xuICB9KSwgdC5sZW5ndGggJiYgZS5wdXNoKHQpLCBlO1xufSwgcWkgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHJldHVybiBlID09PSAxMSAmJiBBLnR5cGUgPT09IDEyIHx8IGUgPT09IDI4ICYmIEEudHlwZSA9PT0gMjkgPyAhMCA6IGUgPT09IDIgJiYgQS50eXBlID09PSAzO1xufSwgT0EgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgPT09IDE3IHx8IEEudHlwZSA9PT0gMTU7XG59LCBQID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50eXBlID09PSAxNiB8fCBPQShBKTtcbn0sIGVzID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS5sZW5ndGggPiAxID8gW0FbMF0sIEFbMV1dIDogW0FbMF1dO1xufSwgWSA9IHtcbiAgdHlwZTogMTcsXG4gIG51bWJlcjogMCxcbiAgZmxhZ3M6IHZlXG59LCBociA9IHtcbiAgdHlwZTogMTYsXG4gIG51bWJlcjogNTAsXG4gIGZsYWdzOiB2ZVxufSwgeEEgPSB7XG4gIHR5cGU6IDE2LFxuICBudW1iZXI6IDEwMCxcbiAgZmxhZ3M6IHZlXG59LCB1ZSA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgdmFyIHIgPSBBWzBdLCBuID0gQVsxXTtcbiAgcmV0dXJuIFtTKHIsIGUpLCBTKHR5cGVvZiBuIDwgXCJ1XCIgPyBuIDogciwgdCldO1xufSwgUyA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgaWYgKEEudHlwZSA9PT0gMTYpXG4gICAgcmV0dXJuIEEubnVtYmVyIC8gMTAwICogZTtcbiAgaWYgKEllKEEpKVxuICAgIHN3aXRjaCAoQS51bml0KSB7XG4gICAgICBjYXNlIFwicmVtXCI6XG4gICAgICBjYXNlIFwiZW1cIjpcbiAgICAgICAgcmV0dXJuIDE2ICogQS5udW1iZXI7XG4gICAgICAvLyBUT0RPIHVzZSBjb3JyZWN0IGZvbnQtc2l6ZVxuICAgICAgY2FzZSBcInB4XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gQS5udW1iZXI7XG4gICAgfVxuICByZXR1cm4gQS5udW1iZXI7XG59LCB0cyA9IFwiZGVnXCIsIHJzID0gXCJncmFkXCIsIG5zID0gXCJyYWRcIiwgc3MgPSBcInR1cm5cIiwgZnQgPSB7XG4gIG5hbWU6IFwiYW5nbGVcIixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAxNSlcbiAgICAgIHN3aXRjaCAoZS51bml0KSB7XG4gICAgICAgIGNhc2UgdHM6XG4gICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiBlLm51bWJlciAvIDE4MDtcbiAgICAgICAgY2FzZSByczpcbiAgICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDIwMCAqIGUubnVtYmVyO1xuICAgICAgICBjYXNlIG5zOlxuICAgICAgICAgIHJldHVybiBlLm51bWJlcjtcbiAgICAgICAgY2FzZSBzczpcbiAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIDIgKiBlLm51bWJlcjtcbiAgICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbmdsZSB0eXBlXCIpO1xuICB9XG59LCBCcyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudHlwZSA9PT0gMTUgJiYgKEEudW5pdCA9PT0gdHMgfHwgQS51bml0ID09PSBycyB8fCBBLnVuaXQgPT09IG5zIHx8IEEudW5pdCA9PT0gc3MpO1xufSwgaXMgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5maWx0ZXIoRCkubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gdC52YWx1ZTtcbiAgfSkuam9pbihcIiBcIik7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgXCJ0byBib3R0b20gcmlnaHRcIjpcbiAgICBjYXNlIFwidG8gcmlnaHQgYm90dG9tXCI6XG4gICAgY2FzZSBcImxlZnQgdG9wXCI6XG4gICAgY2FzZSBcInRvcCBsZWZ0XCI6XG4gICAgICByZXR1cm4gW1ksIFldO1xuICAgIGNhc2UgXCJ0byB0b3BcIjpcbiAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICByZXR1cm4gaUEoMCk7XG4gICAgY2FzZSBcInRvIGJvdHRvbSBsZWZ0XCI6XG4gICAgY2FzZSBcInRvIGxlZnQgYm90dG9tXCI6XG4gICAgY2FzZSBcInJpZ2h0IHRvcFwiOlxuICAgIGNhc2UgXCJ0b3AgcmlnaHRcIjpcbiAgICAgIHJldHVybiBbWSwgeEFdO1xuICAgIGNhc2UgXCJ0byByaWdodFwiOlxuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICByZXR1cm4gaUEoOTApO1xuICAgIGNhc2UgXCJ0byB0b3AgbGVmdFwiOlxuICAgIGNhc2UgXCJ0byBsZWZ0IHRvcFwiOlxuICAgIGNhc2UgXCJyaWdodCBib3R0b21cIjpcbiAgICBjYXNlIFwiYm90dG9tIHJpZ2h0XCI6XG4gICAgICByZXR1cm4gW3hBLCB4QV07XG4gICAgY2FzZSBcInRvIGJvdHRvbVwiOlxuICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgIHJldHVybiBpQSgxODApO1xuICAgIGNhc2UgXCJ0byB0b3AgcmlnaHRcIjpcbiAgICBjYXNlIFwidG8gcmlnaHQgdG9wXCI6XG4gICAgY2FzZSBcImxlZnQgYm90dG9tXCI6XG4gICAgY2FzZSBcImJvdHRvbSBsZWZ0XCI6XG4gICAgICByZXR1cm4gW3hBLCBZXTtcbiAgICBjYXNlIFwidG8gbGVmdFwiOlxuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgcmV0dXJuIGlBKDI3MCk7XG4gIH1cbiAgcmV0dXJuIDA7XG59LCBpQSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiBBIC8gMTgwO1xufSwgU0EgPSB7XG4gIG5hbWU6IFwiY29sb3JcIixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAxOCkge1xuICAgICAgdmFyIHQgPSB6aVtlLm5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiB0ID4gXCJ1XCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBwYXJzZSBhbiB1bnN1cHBvcnRlZCBjb2xvciBmdW5jdGlvbiBcIicgKyBlLm5hbWUgKyAnXCInKTtcbiAgICAgIHJldHVybiB0KEEsIGUudmFsdWVzKTtcbiAgICB9XG4gICAgaWYgKGUudHlwZSA9PT0gNSkge1xuICAgICAgaWYgKGUudmFsdWUubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhciByID0gZS52YWx1ZS5zdWJzdHJpbmcoMCwgMSksIG4gPSBlLnZhbHVlLnN1YnN0cmluZygxLCAyKSwgcyA9IGUudmFsdWUuc3Vic3RyaW5nKDIsIDMpO1xuICAgICAgICByZXR1cm4gREEocGFyc2VJbnQociArIHIsIDE2KSwgcGFyc2VJbnQobiArIG4sIDE2KSwgcGFyc2VJbnQocyArIHMsIDE2KSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoZS52YWx1ZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHIgPSBlLnZhbHVlLnN1YnN0cmluZygwLCAxKSwgbiA9IGUudmFsdWUuc3Vic3RyaW5nKDEsIDIpLCBzID0gZS52YWx1ZS5zdWJzdHJpbmcoMiwgMyksIEIgPSBlLnZhbHVlLnN1YnN0cmluZygzLCA0KTtcbiAgICAgICAgcmV0dXJuIERBKHBhcnNlSW50KHIgKyByLCAxNiksIHBhcnNlSW50KG4gKyBuLCAxNiksIHBhcnNlSW50KHMgKyBzLCAxNiksIHBhcnNlSW50KEIgKyBCLCAxNikgLyAyNTUpO1xuICAgICAgfVxuICAgICAgaWYgKGUudmFsdWUubGVuZ3RoID09PSA2KSB7XG4gICAgICAgIHZhciByID0gZS52YWx1ZS5zdWJzdHJpbmcoMCwgMiksIG4gPSBlLnZhbHVlLnN1YnN0cmluZygyLCA0KSwgcyA9IGUudmFsdWUuc3Vic3RyaW5nKDQsIDYpO1xuICAgICAgICByZXR1cm4gREEocGFyc2VJbnQociwgMTYpLCBwYXJzZUludChuLCAxNiksIHBhcnNlSW50KHMsIDE2KSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoZS52YWx1ZS5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgdmFyIHIgPSBlLnZhbHVlLnN1YnN0cmluZygwLCAyKSwgbiA9IGUudmFsdWUuc3Vic3RyaW5nKDIsIDQpLCBzID0gZS52YWx1ZS5zdWJzdHJpbmcoNCwgNiksIEIgPSBlLnZhbHVlLnN1YnN0cmluZyg2LCA4KTtcbiAgICAgICAgcmV0dXJuIERBKHBhcnNlSW50KHIsIDE2KSwgcGFyc2VJbnQobiwgMTYpLCBwYXJzZUludChzLCAxNiksIHBhcnNlSW50KEIsIDE2KSAvIDI1NSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLnR5cGUgPT09IDIwKSB7XG4gICAgICB2YXIgaSA9IEhBW2UudmFsdWUudG9VcHBlckNhc2UoKV07XG4gICAgICBpZiAodHlwZW9mIGkgPCBcInVcIilcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiBIQS5UUkFOU1BBUkVOVDtcbiAgfVxufSwgVEEgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiAoMjU1ICYgQSkgPT09IDA7XG59LCBYID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IDI1NSAmIEEsIHQgPSAyNTUgJiBBID4+IDgsIHIgPSAyNTUgJiBBID4+IDE2LCBuID0gMjU1ICYgQSA+PiAyNDtcbiAgcmV0dXJuIGUgPCAyNTUgPyBcInJnYmEoXCIgKyBuICsgXCIsXCIgKyByICsgXCIsXCIgKyB0ICsgXCIsXCIgKyBlIC8gMjU1ICsgXCIpXCIgOiBcInJnYihcIiArIG4gKyBcIixcIiArIHIgKyBcIixcIiArIHQgKyBcIilcIjtcbn0sIERBID0gZnVuY3Rpb24oQSwgZSwgdCwgcikge1xuICByZXR1cm4gKEEgPDwgMjQgfCBlIDw8IDE2IHwgdCA8PCA4IHwgTWF0aC5yb3VuZChyICogMjU1KSA8PCAwKSA+Pj4gMDtcbn0sIFpyID0gZnVuY3Rpb24oQSwgZSkge1xuICBpZiAoQS50eXBlID09PSAxNylcbiAgICByZXR1cm4gQS5udW1iZXI7XG4gIGlmIChBLnR5cGUgPT09IDE2KSB7XG4gICAgdmFyIHQgPSBlID09PSAzID8gMSA6IDI1NTtcbiAgICByZXR1cm4gZSA9PT0gMyA/IEEubnVtYmVyIC8gMTAwICogdCA6IE1hdGgucm91bmQoQS5udW1iZXIgLyAxMDAgKiB0KTtcbiAgfVxuICByZXR1cm4gMDtcbn0sIGpyID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IGUuZmlsdGVyKHRlKTtcbiAgaWYgKHQubGVuZ3RoID09PSAzKSB7XG4gICAgdmFyIHIgPSB0Lm1hcChaciksIG4gPSByWzBdLCBzID0gclsxXSwgQiA9IHJbMl07XG4gICAgcmV0dXJuIERBKG4sIHMsIEIsIDEpO1xuICB9XG4gIGlmICh0Lmxlbmd0aCA9PT0gNCkge1xuICAgIHZhciBpID0gdC5tYXAoWnIpLCBuID0gaVswXSwgcyA9IGlbMV0sIEIgPSBpWzJdLCBhID0gaVszXTtcbiAgICByZXR1cm4gREEobiwgcywgQiwgYSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuZnVuY3Rpb24gU3QoQSwgZSwgdCkge1xuICByZXR1cm4gdCA8IDAgJiYgKHQgKz0gMSksIHQgPj0gMSAmJiAodCAtPSAxKSwgdCA8IDEgLyA2ID8gKGUgLSBBKSAqIHQgKiA2ICsgQSA6IHQgPCAxIC8gMiA/IGUgOiB0IDwgMiAvIDMgPyAoZSAtIEEpICogNiAqICgyIC8gMyAtIHQpICsgQSA6IEE7XG59XG52YXIgcXIgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHZhciB0ID0gZS5maWx0ZXIodGUpLCByID0gdFswXSwgbiA9IHRbMV0sIHMgPSB0WzJdLCBCID0gdFszXSwgaSA9IChyLnR5cGUgPT09IDE3ID8gaUEoci5udW1iZXIpIDogZnQucGFyc2UoQSwgcikpIC8gKE1hdGguUEkgKiAyKSwgYSA9IFAobikgPyBuLm51bWJlciAvIDEwMCA6IDAsIG8gPSBQKHMpID8gcy5udW1iZXIgLyAxMDAgOiAwLCBjID0gdHlwZW9mIEIgPCBcInVcIiAmJiBQKEIpID8gUyhCLCAxKSA6IDE7XG4gIGlmIChhID09PSAwKVxuICAgIHJldHVybiBEQShvICogMjU1LCBvICogMjU1LCBvICogMjU1LCAxKTtcbiAgdmFyIGwgPSBvIDw9IDAuNSA/IG8gKiAoYSArIDEpIDogbyArIGEgLSBvICogYSwgZyA9IG8gKiAyIC0gbCwgVSA9IFN0KGcsIGwsIGkgKyAxIC8gMyksIHcgPSBTdChnLCBsLCBpKSwgZiA9IFN0KGcsIGwsIGkgLSAxIC8gMyk7XG4gIHJldHVybiBEQShVICogMjU1LCB3ICogMjU1LCBmICogMjU1LCBjKTtcbn0sIHppID0ge1xuICBoc2w6IHFyLFxuICBoc2xhOiBxcixcbiAgcmdiOiBqcixcbiAgcmdiYToganJcbn0sIFVlID0gZnVuY3Rpb24oQSwgZSkge1xuICByZXR1cm4gU0EucGFyc2UoQSwgJG4uY3JlYXRlKGUpLnBhcnNlQ29tcG9uZW50VmFsdWUoKSk7XG59LCBIQSA9IHtcbiAgQUxJQ0VCTFVFOiA0MDQyODUwMzAzLFxuICBBTlRJUVVFV0hJVEU6IDQyMDk3NjAyNTUsXG4gIEFRVUE6IDE2Nzc3MjE1LFxuICBBUVVBTUFSSU5FOiAyMTQ3NDcyNjM5LFxuICBBWlVSRTogNDA0MzMwOTA1NSxcbiAgQkVJR0U6IDQxMjY1MzA4MTUsXG4gIEJJU1FVRTogNDI5MzE4MjcxOSxcbiAgQkxBQ0s6IDI1NSxcbiAgQkxBTkNIRURBTE1PTkQ6IDQyOTM2NDM3NzUsXG4gIEJMVUU6IDY1NTM1LFxuICBCTFVFVklPTEVUOiAyMzE4MTMxOTY3LFxuICBCUk9XTjogMjc3MTAwNDE1OSxcbiAgQlVSTFlXT09EOiAzNzM2NjM1MzkxLFxuICBDQURFVEJMVUU6IDE2MDQyMzE0MjMsXG4gIENIQVJUUkVVU0U6IDIxNDc0MTgzNjcsXG4gIENIT0NPTEFURTogMzUzMDEwNDU3NSxcbiAgQ09SQUw6IDQyODY1MzM4ODcsXG4gIENPUk5GTE9XRVJCTFVFOiAxNjg3NTQ3MzkxLFxuICBDT1JOU0lMSzogNDI5NDQ5OTU4MyxcbiAgQ1JJTVNPTjogMzY5MjMxMzg1NSxcbiAgQ1lBTjogMTY3NzcyMTUsXG4gIERBUktCTFVFOiAzNTgzOSxcbiAgREFSS0NZQU46IDkxNDUzNDMsXG4gIERBUktHT0xERU5ST0Q6IDMwOTU4Mzc2OTUsXG4gIERBUktHUkFZOiAyODQ2NDY4NjA3LFxuICBEQVJLR1JFRU46IDY1NTM4NTUsXG4gIERBUktHUkVZOiAyODQ2NDY4NjA3LFxuICBEQVJLS0hBS0k6IDMxODI5MTQ1NTksXG4gIERBUktNQUdFTlRBOiAyMzMyMDY4ODYzLFxuICBEQVJLT0xJVkVHUkVFTjogMTQzMzA4Nzk5OSxcbiAgREFSS09SQU5HRTogNDI4NzM2NTM3NSxcbiAgREFSS09SQ0hJRDogMjU3MDI0MzMyNyxcbiAgREFSS1JFRDogMjMzMjAzMzI3OSxcbiAgREFSS1NBTE1PTjogMzkxODk1MzIxNSxcbiAgREFSS1NFQUdSRUVOOiAyNDExNDk5NTE5LFxuICBEQVJLU0xBVEVCTFVFOiAxMjExOTkzMDg3LFxuICBEQVJLU0xBVEVHUkFZOiA3OTM3MjY5NzUsXG4gIERBUktTTEFURUdSRVk6IDc5MzcyNjk3NSxcbiAgREFSS1RVUlFVT0lTRTogMTM1NTQxNzUsXG4gIERBUktWSU9MRVQ6IDI0ODMwODIyMzksXG4gIERFRVBQSU5LOiA0Mjc5NTM4Njg3LFxuICBERUVQU0tZQkxVRTogMTI1ODI5MTEsXG4gIERJTUdSQVk6IDE3Njg1MTYwOTUsXG4gIERJTUdSRVk6IDE3Njg1MTYwOTUsXG4gIERPREdFUkJMVUU6IDUxMjgxOTE5OSxcbiAgRklSRUJSSUNLOiAyOTg4NTgxNjMxLFxuICBGTE9SQUxXSElURTogNDI5NDYzNTc3NSxcbiAgRk9SRVNUR1JFRU46IDU3OTU0MzgwNyxcbiAgRlVDSFNJQTogNDI3ODI1NTYxNSxcbiAgR0FJTlNCT1JPOiAzNzA1NDYyMDE1LFxuICBHSE9TVFdISVRFOiA0MTc3MDY4MDMxLFxuICBHT0xEOiA0MjkyMjgwNTc1LFxuICBHT0xERU5ST0Q6IDM2NjgyNTQ5NzUsXG4gIEdSQVk6IDIxNTU5MDUyNzksXG4gIEdSRUVOOiA4Mzg4ODYzLFxuICBHUkVFTllFTExPVzogMjkxOTE4MjMzNSxcbiAgR1JFWTogMjE1NTkwNTI3OSxcbiAgSE9ORVlERVc6IDQwNDMzMDUyMTUsXG4gIEhPVFBJTks6IDQyODUxMTc2OTUsXG4gIElORElBTlJFRDogMzQ0NTM4MjM5OSxcbiAgSU5ESUdPOiAxMjU4MzI0NzM1LFxuICBJVk9SWTogNDI5NDk2MzQ1NSxcbiAgS0hBS0k6IDQwNDE2NDEyMTUsXG4gIExBVkVOREVSOiAzODczODk3MjE1LFxuICBMQVZFTkRFUkJMVVNIOiA0MjkzOTgxNjk1LFxuICBMQVdOR1JFRU46IDIwOTY4OTAxMTEsXG4gIExFTU9OQ0hJRkZPTjogNDI5NDYyNjgxNSxcbiAgTElHSFRCTFVFOiAyOTE2NjczMjc5LFxuICBMSUdIVENPUkFMOiA0MDM0OTUzNDcxLFxuICBMSUdIVENZQU46IDM3NzQ4NzM1OTksXG4gIExJR0hUR09MREVOUk9EWUVMTE9XOiA0MjEwNzQyMDE1LFxuICBMSUdIVEdSQVk6IDM1NTM4NzQ5NDMsXG4gIExJR0hUR1JFRU46IDI0MzE1NTM3OTEsXG4gIExJR0hUR1JFWTogMzU1Mzg3NDk0MyxcbiAgTElHSFRQSU5LOiA0MjkwMTY3Mjk1LFxuICBMSUdIVFNBTE1PTjogNDI4ODcwNzMyNyxcbiAgTElHSFRTRUFHUkVFTjogNTQ4NTgwMDk1LFxuICBMSUdIVFNLWUJMVUU6IDIyNzg0ODg4MzEsXG4gIExJR0hUU0xBVEVHUkFZOiAyMDA1NDQxMDIzLFxuICBMSUdIVFNMQVRFR1JFWTogMjAwNTQ0MTAyMyxcbiAgTElHSFRTVEVFTEJMVUU6IDI5NjU2OTIxNTksXG4gIExJR0hUWUVMTE9XOiA0Mjk0OTU5MzU5LFxuICBMSU1FOiAxNjcxMTkzNSxcbiAgTElNRUdSRUVOOiA4NTIzMDg3MzUsXG4gIExJTkVOOiA0MjEwMDkxNzc1LFxuICBNQUdFTlRBOiA0Mjc4MjU1NjE1LFxuICBNQVJPT046IDIxNDc0ODM5MDMsXG4gIE1FRElVTUFRVUFNQVJJTkU6IDE3MjQ3NTQ2ODcsXG4gIE1FRElVTUJMVUU6IDUyNzM1LFxuICBNRURJVU1PUkNISUQ6IDMxMjYxODcwMDcsXG4gIE1FRElVTVBVUlBMRTogMjQ3MzY0NzEwMyxcbiAgTUVESVVNU0VBR1JFRU46IDEwMTgzOTMwODcsXG4gIE1FRElVTVNMQVRFQkxVRTogMjA3MDQ3NDQ5NSxcbiAgTUVESVVNU1BSSU5HR1JFRU46IDE2NDIzNjc5LFxuICBNRURJVU1UVVJRVU9JU0U6IDEyMjE3MDkwNTUsXG4gIE1FRElVTVZJT0xFVFJFRDogMzM0MDA3NjU0MyxcbiAgTUlETklHSFRCTFVFOiA0MjEwOTc3MjcsXG4gIE1JTlRDUkVBTTogNDEyNzE5Mzg1NSxcbiAgTUlTVFlST1NFOiA0MjkzMTkwMTQzLFxuICBNT0NDQVNJTjogNDI5MzE3ODg3OSxcbiAgTkFWQUpPV0hJVEU6IDQyOTI3ODM2MTUsXG4gIE5BVlk6IDMzMDIzLFxuICBPTERMQUNFOiA0MjYwNzUxMTAzLFxuICBPTElWRTogMjE1NTg3MjUxMSxcbiAgT0xJVkVEUkFCOiAxODA0NDc3NDM5LFxuICBPUkFOR0U6IDQyODkwMDM3NzUsXG4gIE9SQU5HRVJFRDogNDI4MjcxMjMxOSxcbiAgT1JDSElEOiAzNjY0ODI4MTU5LFxuICBQQUxFR09MREVOUk9EOiA0MDA4MjI1NTM1LFxuICBQQUxFR1JFRU46IDI1NjY2MjU1MzUsXG4gIFBBTEVUVVJRVU9JU0U6IDI5NTE2NzE1NTEsXG4gIFBBTEVWSU9MRVRSRUQ6IDM2ODE1ODgyMjMsXG4gIFBBUEFZQVdISVA6IDQyOTM5MDc5NjcsXG4gIFBFQUNIUFVGRjogNDI5MjUyNDU0MyxcbiAgUEVSVTogMzQ0ODA2MTk1MSxcbiAgUElOSzogNDI5MDgyNTIxNSxcbiAgUExVTTogMzcxODMwNzMyNyxcbiAgUE9XREVSQkxVRTogMjk2NzUyOTIxNSxcbiAgUFVSUExFOiAyMTQ3NTE2NjcxLFxuICBSRUJFQ0NBUFVSUExFOiAxNzE0NjU3NzkxLFxuICBSRUQ6IDQyNzgxOTAzMzUsXG4gIFJPU1lCUk9XTjogMzE2MzUyNTExOSxcbiAgUk9ZQUxCTFVFOiAxMDk3NDU4MTc1LFxuICBTQURETEVCUk9XTjogMjMzNjU2MDEyNyxcbiAgU0FMTU9OOiA0MjAyNzIyMDQ3LFxuICBTQU5EWUJST1dOOiA0MTA0NDEzNDM5LFxuICBTRUFHUkVFTjogNzgwODgzOTY3LFxuICBTRUFTSEVMTDogNDI5NDMwNzU4MyxcbiAgU0lFTk5BOiAyNjg5NzQwMjg3LFxuICBTSUxWRVI6IDMyMzM4NTc3OTEsXG4gIFNLWUJMVUU6IDIyNzg0ODQ5OTEsXG4gIFNMQVRFQkxVRTogMTc4NDMzNTg3MSxcbiAgU0xBVEVHUkFZOiAxODg3NDczOTE5LFxuICBTTEFURUdSRVk6IDE4ODc0NzM5MTksXG4gIFNOT1c6IDQyOTQ2MzgzMzUsXG4gIFNQUklOR0dSRUVOOiAxNjc0NDQ0NyxcbiAgU1RFRUxCTFVFOiAxMTgyOTcxMTM1LFxuICBUQU46IDM1MzUwNDc5MzUsXG4gIFRFQUw6IDg0MjE2MzEsXG4gIFRISVNUTEU6IDM2MzY0NTE1ODMsXG4gIFRPTUFUTzogNDI4NDY5NjU3NSxcbiAgVFJBTlNQQVJFTlQ6IDAsXG4gIFRVUlFVT0lTRTogMTA4ODQ3NTM5MSxcbiAgVklPTEVUOiA0MDAxNTU4MjcxLFxuICBXSEVBVDogNDEyNTAxMjk5MSxcbiAgV0hJVEU6IDQyOTQ5NjcyOTUsXG4gIFdISVRFU01PS0U6IDQxMjY1MzcyMTUsXG4gIFlFTExPVzogNDI5NDkwMjAxNSxcbiAgWUVMTE9XR1JFRU46IDI1OTcxMzkxOTlcbn0sICRpID0ge1xuICBuYW1lOiBcImJhY2tncm91bmQtY2xpcFwiLFxuICBpbml0aWFsVmFsdWU6IFwiYm9yZGVyLWJveFwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBpZiAoRCh0KSlcbiAgICAgICAgc3dpdGNoICh0LnZhbHVlKSB7XG4gICAgICAgICAgY2FzZSBcInBhZGRpbmctYm94XCI6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICBjYXNlIFwiY29udGVudC1ib3hcIjpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxufSwgQWEgPSB7XG4gIG5hbWU6IFwiYmFja2dyb3VuZC1jb2xvclwiLFxuICBpbml0aWFsVmFsdWU6IFwidHJhbnNwYXJlbnRcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMyxcbiAgZm9ybWF0OiBcImNvbG9yXCJcbn0sIEN0ID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IFNBLnBhcnNlKEEsIGVbMF0pLCByID0gZVsxXTtcbiAgcmV0dXJuIHIgJiYgUChyKSA/IHsgY29sb3I6IHQsIHN0b3A6IHIgfSA6IHsgY29sb3I6IHQsIHN0b3A6IG51bGwgfTtcbn0sIHpyID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IEFbMF0sIHIgPSBBW0EubGVuZ3RoIC0gMV07XG4gIHQuc3RvcCA9PT0gbnVsbCAmJiAodC5zdG9wID0gWSksIHIuc3RvcCA9PT0gbnVsbCAmJiAoci5zdG9wID0geEEpO1xuICBmb3IgKHZhciBuID0gW10sIHMgPSAwLCBCID0gMDsgQiA8IEEubGVuZ3RoOyBCKyspIHtcbiAgICB2YXIgaSA9IEFbQl0uc3RvcDtcbiAgICBpZiAoaSAhPT0gbnVsbCkge1xuICAgICAgdmFyIGEgPSBTKGksIGUpO1xuICAgICAgYSA+IHMgPyBuLnB1c2goYSkgOiBuLnB1c2gocyksIHMgPSBhO1xuICAgIH0gZWxzZVxuICAgICAgbi5wdXNoKG51bGwpO1xuICB9XG4gIGZvciAodmFyIG8gPSBudWxsLCBCID0gMDsgQiA8IG4ubGVuZ3RoOyBCKyspIHtcbiAgICB2YXIgYyA9IG5bQl07XG4gICAgaWYgKGMgPT09IG51bGwpXG4gICAgICBvID09PSBudWxsICYmIChvID0gQik7XG4gICAgZWxzZSBpZiAobyAhPT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIgbCA9IEIgLSBvLCBnID0gbltvIC0gMV0sIFUgPSAoYyAtIGcpIC8gKGwgKyAxKSwgdyA9IDE7IHcgPD0gbDsgdysrKVxuICAgICAgICBuW28gKyB3IC0gMV0gPSBVICogdztcbiAgICAgIG8gPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQS5tYXAoZnVuY3Rpb24oZiwgSSkge1xuICAgIHZhciBoID0gZi5jb2xvcjtcbiAgICByZXR1cm4geyBjb2xvcjogaCwgc3RvcDogTWF0aC5tYXgoTWF0aC5taW4oMSwgbltJXSAvIGUpLCAwKSB9O1xuICB9KTtcbn0sIGVhID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB2YXIgciA9IGUgLyAyLCBuID0gdCAvIDIsIHMgPSBTKEFbMF0sIGUpIC0gciwgQiA9IG4gLSBTKEFbMV0sIHQpO1xuICByZXR1cm4gKE1hdGguYXRhbjIoQiwgcykgKyBNYXRoLlBJICogMikgJSAoTWF0aC5QSSAqIDIpO1xufSwgdGEgPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHZhciByID0gdHlwZW9mIEEgPT0gXCJudW1iZXJcIiA/IEEgOiBlYShBLCBlLCB0KSwgbiA9IE1hdGguYWJzKGUgKiBNYXRoLnNpbihyKSkgKyBNYXRoLmFicyh0ICogTWF0aC5jb3MocikpLCBzID0gZSAvIDIsIEIgPSB0IC8gMiwgaSA9IG4gLyAyLCBhID0gTWF0aC5zaW4ociAtIE1hdGguUEkgLyAyKSAqIGksIG8gPSBNYXRoLmNvcyhyIC0gTWF0aC5QSSAvIDIpICogaTtcbiAgcmV0dXJuIFtuLCBzIC0gbywgcyArIG8sIEIgLSBhLCBCICsgYV07XG59LCBsQSA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIE1hdGguc3FydChBICogQSArIGUgKiBlKTtcbn0sICRyID0gZnVuY3Rpb24oQSwgZSwgdCwgciwgbikge1xuICB2YXIgcyA9IFtcbiAgICBbMCwgMF0sXG4gICAgWzAsIGVdLFxuICAgIFtBLCAwXSxcbiAgICBbQSwgZV1cbiAgXTtcbiAgcmV0dXJuIHMucmVkdWNlKGZ1bmN0aW9uKEIsIGkpIHtcbiAgICB2YXIgYSA9IGlbMF0sIG8gPSBpWzFdLCBjID0gbEEodCAtIGEsIHIgLSBvKTtcbiAgICByZXR1cm4gKG4gPyBjIDwgQi5vcHRpbXVtRGlzdGFuY2UgOiBjID4gQi5vcHRpbXVtRGlzdGFuY2UpID8ge1xuICAgICAgb3B0aW11bUNvcm5lcjogaSxcbiAgICAgIG9wdGltdW1EaXN0YW5jZTogY1xuICAgIH0gOiBCO1xuICB9LCB7XG4gICAgb3B0aW11bURpc3RhbmNlOiBuID8gMSAvIDAgOiAtMSAvIDAsXG4gICAgb3B0aW11bUNvcm5lcjogbnVsbFxuICB9KS5vcHRpbXVtQ29ybmVyO1xufSwgcmEgPSBmdW5jdGlvbihBLCBlLCB0LCByLCBuKSB7XG4gIHZhciBzID0gMCwgQiA9IDA7XG4gIHN3aXRjaCAoQS5zaXplKSB7XG4gICAgY2FzZSAwOlxuICAgICAgQS5zaGFwZSA9PT0gMCA/IHMgPSBCID0gTWF0aC5taW4oTWF0aC5hYnMoZSksIE1hdGguYWJzKGUgLSByKSwgTWF0aC5hYnModCksIE1hdGguYWJzKHQgLSBuKSkgOiBBLnNoYXBlID09PSAxICYmIChzID0gTWF0aC5taW4oTWF0aC5hYnMoZSksIE1hdGguYWJzKGUgLSByKSksIEIgPSBNYXRoLm1pbihNYXRoLmFicyh0KSwgTWF0aC5hYnModCAtIG4pKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBpZiAoQS5zaGFwZSA9PT0gMClcbiAgICAgICAgcyA9IEIgPSBNYXRoLm1pbihsQShlLCB0KSwgbEEoZSwgdCAtIG4pLCBsQShlIC0gciwgdCksIGxBKGUgLSByLCB0IC0gbikpO1xuICAgICAgZWxzZSBpZiAoQS5zaGFwZSA9PT0gMSkge1xuICAgICAgICB2YXIgaSA9IE1hdGgubWluKE1hdGguYWJzKHQpLCBNYXRoLmFicyh0IC0gbikpIC8gTWF0aC5taW4oTWF0aC5hYnMoZSksIE1hdGguYWJzKGUgLSByKSksIGEgPSAkcihyLCBuLCBlLCB0LCAhMCksIG8gPSBhWzBdLCBjID0gYVsxXTtcbiAgICAgICAgcyA9IGxBKG8gLSBlLCAoYyAtIHQpIC8gaSksIEIgPSBpICogcztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIEEuc2hhcGUgPT09IDAgPyBzID0gQiA9IE1hdGgubWF4KE1hdGguYWJzKGUpLCBNYXRoLmFicyhlIC0gciksIE1hdGguYWJzKHQpLCBNYXRoLmFicyh0IC0gbikpIDogQS5zaGFwZSA9PT0gMSAmJiAocyA9IE1hdGgubWF4KE1hdGguYWJzKGUpLCBNYXRoLmFicyhlIC0gcikpLCBCID0gTWF0aC5tYXgoTWF0aC5hYnModCksIE1hdGguYWJzKHQgLSBuKSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgaWYgKEEuc2hhcGUgPT09IDApXG4gICAgICAgIHMgPSBCID0gTWF0aC5tYXgobEEoZSwgdCksIGxBKGUsIHQgLSBuKSwgbEEoZSAtIHIsIHQpLCBsQShlIC0gciwgdCAtIG4pKTtcbiAgICAgIGVsc2UgaWYgKEEuc2hhcGUgPT09IDEpIHtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1heChNYXRoLmFicyh0KSwgTWF0aC5hYnModCAtIG4pKSAvIE1hdGgubWF4KE1hdGguYWJzKGUpLCBNYXRoLmFicyhlIC0gcikpLCBsID0gJHIociwgbiwgZSwgdCwgITEpLCBvID0gbFswXSwgYyA9IGxbMV07XG4gICAgICAgIHMgPSBsQShvIC0gZSwgKGMgLSB0KSAvIGkpLCBCID0gaSAqIHM7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gQXJyYXkuaXNBcnJheShBLnNpemUpICYmIChzID0gUyhBLnNpemVbMF0sIHIpLCBCID0gQS5zaXplLmxlbmd0aCA9PT0gMiA/IFMoQS5zaXplWzFdLCBuKSA6IHMpLCBbcywgQl07XG59LCBuYSA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSBpQSgxODApLCByID0gW107XG4gIHJldHVybiBVQShlKS5mb3JFYWNoKGZ1bmN0aW9uKG4sIHMpIHtcbiAgICBpZiAocyA9PT0gMCkge1xuICAgICAgdmFyIEIgPSBuWzBdO1xuICAgICAgaWYgKEIudHlwZSA9PT0gMjAgJiYgQi52YWx1ZSA9PT0gXCJ0b1wiKSB7XG4gICAgICAgIHQgPSBpcyhuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChCcyhCKSkge1xuICAgICAgICB0ID0gZnQucGFyc2UoQSwgQik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGkgPSBDdChBLCBuKTtcbiAgICByLnB1c2goaSk7XG4gIH0pLCB7XG4gICAgYW5nbGU6IHQsXG4gICAgc3RvcHM6IHIsXG4gICAgdHlwZTogMVxuICAgIC8qIExJTkVBUl9HUkFESUVOVCAqL1xuICB9O1xufSwga2UgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHZhciB0ID0gaUEoMTgwKSwgciA9IFtdO1xuICByZXR1cm4gVUEoZSkuZm9yRWFjaChmdW5jdGlvbihuLCBzKSB7XG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgIHZhciBCID0gblswXTtcbiAgICAgIGlmIChCLnR5cGUgPT09IDIwICYmIFtcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiXS5pbmRleE9mKEIudmFsdWUpICE9PSAtMSkge1xuICAgICAgICB0ID0gaXMobik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoQnMoQikpIHtcbiAgICAgICAgdCA9IChmdC5wYXJzZShBLCBCKSArIGlBKDI3MCkpICUgaUEoMzYwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaSA9IEN0KEEsIG4pO1xuICAgIHIucHVzaChpKTtcbiAgfSksIHtcbiAgICBhbmdsZTogdCxcbiAgICBzdG9wczogcixcbiAgICB0eXBlOiAxXG4gICAgLyogTElORUFSX0dSQURJRU5UICovXG4gIH07XG59LCBzYSA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSBpQSgxODApLCByID0gW10sIG4gPSAxLCBzID0gMCwgQiA9IDMsIGkgPSBbXTtcbiAgcmV0dXJuIFVBKGUpLmZvckVhY2goZnVuY3Rpb24oYSwgbykge1xuICAgIHZhciBjID0gYVswXTtcbiAgICBpZiAobyA9PT0gMCkge1xuICAgICAgaWYgKEQoYykgJiYgYy52YWx1ZSA9PT0gXCJsaW5lYXJcIikge1xuICAgICAgICBuID0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChEKGMpICYmIGMudmFsdWUgPT09IFwicmFkaWFsXCIpIHtcbiAgICAgICAgbiA9IDI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGMudHlwZSA9PT0gMTgpIHtcbiAgICAgIGlmIChjLm5hbWUgPT09IFwiZnJvbVwiKSB7XG4gICAgICAgIHZhciBsID0gU0EucGFyc2UoQSwgYy52YWx1ZXNbMF0pO1xuICAgICAgICByLnB1c2goeyBzdG9wOiBZLCBjb2xvcjogbCB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYy5uYW1lID09PSBcInRvXCIpIHtcbiAgICAgICAgdmFyIGwgPSBTQS5wYXJzZShBLCBjLnZhbHVlc1swXSk7XG4gICAgICAgIHIucHVzaCh7IHN0b3A6IHhBLCBjb2xvcjogbCB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYy5uYW1lID09PSBcImNvbG9yLXN0b3BcIikge1xuICAgICAgICB2YXIgZyA9IGMudmFsdWVzLmZpbHRlcih0ZSk7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIHZhciBsID0gU0EucGFyc2UoQSwgZ1sxXSksIFUgPSBnWzBdO1xuICAgICAgICAgIHJlKFUpICYmIHIucHVzaCh7XG4gICAgICAgICAgICBzdG9wOiB7IHR5cGU6IDE2LCBudW1iZXI6IFUubnVtYmVyICogMTAwLCBmbGFnczogVS5mbGFncyB9LFxuICAgICAgICAgICAgY29sb3I6IGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIG4gPT09IDEgPyB7XG4gICAgYW5nbGU6ICh0ICsgaUEoMTgwKSkgJSBpQSgzNjApLFxuICAgIHN0b3BzOiByLFxuICAgIHR5cGU6IG5cbiAgfSA6IHsgc2l6ZTogQiwgc2hhcGU6IHMsIHN0b3BzOiByLCBwb3NpdGlvbjogaSwgdHlwZTogbiB9O1xufSwgYXMgPSBcImNsb3Nlc3Qtc2lkZVwiLCBvcyA9IFwiZmFydGhlc3Qtc2lkZVwiLCBjcyA9IFwiY2xvc2VzdC1jb3JuZXJcIiwgbHMgPSBcImZhcnRoZXN0LWNvcm5lclwiLCBncyA9IFwiY2lyY2xlXCIsIHVzID0gXCJlbGxpcHNlXCIsIHdzID0gXCJjb3ZlclwiLCBRcyA9IFwiY29udGFpblwiLCBCYSA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSAwLCByID0gMywgbiA9IFtdLCBzID0gW107XG4gIHJldHVybiBVQShlKS5mb3JFYWNoKGZ1bmN0aW9uKEIsIGkpIHtcbiAgICB2YXIgYSA9ICEwO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB2YXIgbyA9ICExO1xuICAgICAgYSA9IEIucmVkdWNlKGZ1bmN0aW9uKGwsIGcpIHtcbiAgICAgICAgaWYgKG8pXG4gICAgICAgICAgaWYgKEQoZykpXG4gICAgICAgICAgICBzd2l0Y2ggKGcudmFsdWUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBzLnB1c2goaHIpLCBsO1xuICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMucHVzaChZKSwgbDtcbiAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5wdXNoKHhBKSwgbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIChQKGcpIHx8IE9BKGcpKSAmJiBzLnB1c2goZyk7XG4gICAgICAgIGVsc2UgaWYgKEQoZykpXG4gICAgICAgICAgc3dpdGNoIChnLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIGdzOlxuICAgICAgICAgICAgICByZXR1cm4gdCA9IDAsICExO1xuICAgICAgICAgICAgY2FzZSB1czpcbiAgICAgICAgICAgICAgcmV0dXJuIHQgPSAxLCAhMTtcbiAgICAgICAgICAgIGNhc2UgXCJhdFwiOlxuICAgICAgICAgICAgICByZXR1cm4gbyA9ICEwLCAhMTtcbiAgICAgICAgICAgIGNhc2UgYXM6XG4gICAgICAgICAgICAgIHJldHVybiByID0gMCwgITE7XG4gICAgICAgICAgICBjYXNlIHdzOlxuICAgICAgICAgICAgY2FzZSBvczpcbiAgICAgICAgICAgICAgcmV0dXJuIHIgPSAxLCAhMTtcbiAgICAgICAgICAgIGNhc2UgUXM6XG4gICAgICAgICAgICBjYXNlIGNzOlxuICAgICAgICAgICAgICByZXR1cm4gciA9IDIsICExO1xuICAgICAgICAgICAgY2FzZSBsczpcbiAgICAgICAgICAgICAgcmV0dXJuIHIgPSAzLCAhMTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE9BKGcpIHx8IFAoZykpXG4gICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocikgfHwgKHIgPSBbXSksIHIucHVzaChnKSwgITE7XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSwgYSk7XG4gICAgfVxuICAgIGlmIChhKSB7XG4gICAgICB2YXIgYyA9IEN0KEEsIEIpO1xuICAgICAgbi5wdXNoKGMpO1xuICAgIH1cbiAgfSksIHtcbiAgICBzaXplOiByLFxuICAgIHNoYXBlOiB0LFxuICAgIHN0b3BzOiBuLFxuICAgIHBvc2l0aW9uOiBzLFxuICAgIHR5cGU6IDJcbiAgICAvKiBSQURJQUxfR1JBRElFTlQgKi9cbiAgfTtcbn0sIF9lID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IDAsIHIgPSAzLCBuID0gW10sIHMgPSBbXTtcbiAgcmV0dXJuIFVBKGUpLmZvckVhY2goZnVuY3Rpb24oQiwgaSkge1xuICAgIHZhciBhID0gITA7XG4gICAgaWYgKGkgPT09IDAgPyBhID0gQi5yZWR1Y2UoZnVuY3Rpb24oYywgbCkge1xuICAgICAgaWYgKEQobCkpXG4gICAgICAgIHN3aXRjaCAobC52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBzLnB1c2goaHIpLCAhMTtcbiAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIHJldHVybiBzLnB1c2goWSksICExO1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgIHJldHVybiBzLnB1c2goeEEpLCAhMTtcbiAgICAgICAgfVxuICAgICAgZWxzZSBpZiAoUChsKSB8fCBPQShsKSlcbiAgICAgICAgcmV0dXJuIHMucHVzaChsKSwgITE7XG4gICAgICByZXR1cm4gYztcbiAgICB9LCBhKSA6IGkgPT09IDEgJiYgKGEgPSBCLnJlZHVjZShmdW5jdGlvbihjLCBsKSB7XG4gICAgICBpZiAoRChsKSlcbiAgICAgICAgc3dpdGNoIChsLnZhbHVlKSB7XG4gICAgICAgICAgY2FzZSBnczpcbiAgICAgICAgICAgIHJldHVybiB0ID0gMCwgITE7XG4gICAgICAgICAgY2FzZSB1czpcbiAgICAgICAgICAgIHJldHVybiB0ID0gMSwgITE7XG4gICAgICAgICAgY2FzZSBRczpcbiAgICAgICAgICBjYXNlIGFzOlxuICAgICAgICAgICAgcmV0dXJuIHIgPSAwLCAhMTtcbiAgICAgICAgICBjYXNlIG9zOlxuICAgICAgICAgICAgcmV0dXJuIHIgPSAxLCAhMTtcbiAgICAgICAgICBjYXNlIGNzOlxuICAgICAgICAgICAgcmV0dXJuIHIgPSAyLCAhMTtcbiAgICAgICAgICBjYXNlIHdzOlxuICAgICAgICAgIGNhc2UgbHM6XG4gICAgICAgICAgICByZXR1cm4gciA9IDMsICExO1xuICAgICAgICB9XG4gICAgICBlbHNlIGlmIChPQShsKSB8fCBQKGwpKVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyKSB8fCAociA9IFtdKSwgci5wdXNoKGwpLCAhMTtcbiAgICAgIHJldHVybiBjO1xuICAgIH0sIGEpKSwgYSkge1xuICAgICAgdmFyIG8gPSBDdChBLCBCKTtcbiAgICAgIG4ucHVzaChvKTtcbiAgICB9XG4gIH0pLCB7XG4gICAgc2l6ZTogcixcbiAgICBzaGFwZTogdCxcbiAgICBzdG9wczogbixcbiAgICBwb3NpdGlvbjogcyxcbiAgICB0eXBlOiAyXG4gICAgLyogUkFESUFMX0dSQURJRU5UICovXG4gIH07XG59LCBpYSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudHlwZSA9PT0gMTtcbn0sIGFhID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50eXBlID09PSAyO1xufSwgZHIgPSB7XG4gIG5hbWU6IFwiaW1hZ2VcIixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAyMikge1xuICAgICAgdmFyIHQgPSB7XG4gICAgICAgIHVybDogZS52YWx1ZSxcbiAgICAgICAgdHlwZTogMFxuICAgICAgICAvKiBVUkwgKi9cbiAgICAgIH07XG4gICAgICByZXR1cm4gQS5jYWNoZS5hZGRJbWFnZShlLnZhbHVlKSwgdDtcbiAgICB9XG4gICAgaWYgKGUudHlwZSA9PT0gMTgpIHtcbiAgICAgIHZhciByID0gZnNbZS5uYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgciA+IFwidVwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gcGFyc2UgYW4gdW5zdXBwb3J0ZWQgaW1hZ2UgZnVuY3Rpb24gXCInICsgZS5uYW1lICsgJ1wiJyk7XG4gICAgICByZXR1cm4gcihBLCBlLnZhbHVlcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGltYWdlIHR5cGUgXCIgKyBlLnR5cGUpO1xuICB9XG59O1xuZnVuY3Rpb24gb2EoQSkge1xuICByZXR1cm4gIShBLnR5cGUgPT09IDIwICYmIEEudmFsdWUgPT09IFwibm9uZVwiKSAmJiAoQS50eXBlICE9PSAxOCB8fCAhIWZzW0EubmFtZV0pO1xufVxudmFyIGZzID0ge1xuICBcImxpbmVhci1ncmFkaWVudFwiOiBuYSxcbiAgXCItbW96LWxpbmVhci1ncmFkaWVudFwiOiBrZSxcbiAgXCItbXMtbGluZWFyLWdyYWRpZW50XCI6IGtlLFxuICBcIi1vLWxpbmVhci1ncmFkaWVudFwiOiBrZSxcbiAgXCItd2Via2l0LWxpbmVhci1ncmFkaWVudFwiOiBrZSxcbiAgXCJyYWRpYWwtZ3JhZGllbnRcIjogQmEsXG4gIFwiLW1vei1yYWRpYWwtZ3JhZGllbnRcIjogX2UsXG4gIFwiLW1zLXJhZGlhbC1ncmFkaWVudFwiOiBfZSxcbiAgXCItby1yYWRpYWwtZ3JhZGllbnRcIjogX2UsXG4gIFwiLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnRcIjogX2UsXG4gIFwiLXdlYmtpdC1ncmFkaWVudFwiOiBzYVxufSwgY2EgPSB7XG4gIG5hbWU6IFwiYmFja2dyb3VuZC1pbWFnZVwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICB0eXBlOiAxLFxuICBwcmVmaXg6ICExLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIGlmIChlLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBbXTtcbiAgICB2YXIgdCA9IGVbMF07XG4gICAgcmV0dXJuIHQudHlwZSA9PT0gMjAgJiYgdC52YWx1ZSA9PT0gXCJub25lXCIgPyBbXSA6IGUuZmlsdGVyKGZ1bmN0aW9uKHIpIHtcbiAgICAgIHJldHVybiB0ZShyKSAmJiBvYShyKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24ocikge1xuICAgICAgcmV0dXJuIGRyLnBhcnNlKEEsIHIpO1xuICAgIH0pO1xuICB9XG59LCBsYSA9IHtcbiAgbmFtZTogXCJiYWNrZ3JvdW5kLW9yaWdpblwiLFxuICBpbml0aWFsVmFsdWU6IFwiYm9yZGVyLWJveFwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBpZiAoRCh0KSlcbiAgICAgICAgc3dpdGNoICh0LnZhbHVlKSB7XG4gICAgICAgICAgY2FzZSBcInBhZGRpbmctYm94XCI6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICBjYXNlIFwiY29udGVudC1ib3hcIjpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxufSwgZ2EgPSB7XG4gIG5hbWU6IFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxuICBpbml0aWFsVmFsdWU6IFwiMCUgMCVcIixcbiAgdHlwZTogMSxcbiAgcHJlZml4OiAhMSxcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICByZXR1cm4gVUEoZSkubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmZpbHRlcihQKTtcbiAgICB9KS5tYXAoZXMpO1xuICB9XG59LCB1YSA9IHtcbiAgbmFtZTogXCJiYWNrZ3JvdW5kLXJlcGVhdFwiLFxuICBpbml0aWFsVmFsdWU6IFwicmVwZWF0XCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIFVBKGUpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5maWx0ZXIoRCkubWFwKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIudmFsdWU7XG4gICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICB9KS5tYXAod2EpO1xuICB9XG59LCB3YSA9IGZ1bmN0aW9uKEEpIHtcbiAgc3dpdGNoIChBKSB7XG4gICAgY2FzZSBcIm5vLXJlcGVhdFwiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBcInJlcGVhdC14XCI6XG4gICAgY2FzZSBcInJlcGVhdCBuby1yZXBlYXRcIjpcbiAgICAgIHJldHVybiAyO1xuICAgIGNhc2UgXCJyZXBlYXQteVwiOlxuICAgIGNhc2UgXCJuby1yZXBlYXQgcmVwZWF0XCI6XG4gICAgICByZXR1cm4gMztcbiAgICBjYXNlIFwicmVwZWF0XCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59LCBlZTtcbihmdW5jdGlvbihBKSB7XG4gIEEuQVVUTyA9IFwiYXV0b1wiLCBBLkNPTlRBSU4gPSBcImNvbnRhaW5cIiwgQS5DT1ZFUiA9IFwiY292ZXJcIjtcbn0pKGVlIHx8IChlZSA9IHt9KSk7XG52YXIgUWEgPSB7XG4gIG5hbWU6IFwiYmFja2dyb3VuZC1zaXplXCIsXG4gIGluaXRpYWxWYWx1ZTogXCIwXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIFVBKGUpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5maWx0ZXIoZmEpO1xuICAgIH0pO1xuICB9XG59LCBmYSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEQoQSkgfHwgUChBKTtcbn0sIFV0ID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiYm9yZGVyLVwiICsgQSArIFwiLWNvbG9yXCIsXG4gICAgaW5pdGlhbFZhbHVlOiBcInRyYW5zcGFyZW50XCIsXG4gICAgcHJlZml4OiAhMSxcbiAgICB0eXBlOiAzLFxuICAgIGZvcm1hdDogXCJjb2xvclwiXG4gIH07XG59LCBDYSA9IFV0KFwidG9wXCIpLCBVYSA9IFV0KFwicmlnaHRcIiksIEZhID0gVXQoXCJib3R0b21cIiksIGhhID0gVXQoXCJsZWZ0XCIpLCBGdCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcImJvcmRlci1yYWRpdXMtXCIgKyBBLFxuICAgIGluaXRpYWxWYWx1ZTogXCIwIDBcIixcbiAgICBwcmVmaXg6ICExLFxuICAgIHR5cGU6IDEsXG4gICAgcGFyc2U6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHJldHVybiBlcyh0LmZpbHRlcihQKSk7XG4gICAgfVxuICB9O1xufSwgZGEgPSBGdChcInRvcC1sZWZ0XCIpLCBwYSA9IEZ0KFwidG9wLXJpZ2h0XCIpLCBFYSA9IEZ0KFwiYm90dG9tLXJpZ2h0XCIpLCBIYSA9IEZ0KFwiYm90dG9tLWxlZnRcIiksIGh0ID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiYm9yZGVyLVwiICsgQSArIFwiLXN0eWxlXCIsXG4gICAgaW5pdGlhbFZhbHVlOiBcInNvbGlkXCIsXG4gICAgcHJlZml4OiAhMSxcbiAgICB0eXBlOiAyLFxuICAgIHBhcnNlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSBcImRhc2hlZFwiOlxuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICBjYXNlIFwiZG90dGVkXCI6XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgXCJkb3VibGVcIjpcbiAgICAgICAgICByZXR1cm4gNDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfTtcbn0sIHZhID0gaHQoXCJ0b3BcIiksIElhID0gaHQoXCJyaWdodFwiKSwgbWEgPSBodChcImJvdHRvbVwiKSwgeWEgPSBodChcImxlZnRcIiksIGR0ID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiYm9yZGVyLVwiICsgQSArIFwiLXdpZHRoXCIsXG4gICAgaW5pdGlhbFZhbHVlOiBcIjBcIixcbiAgICB0eXBlOiAwLFxuICAgIHByZWZpeDogITEsXG4gICAgcGFyc2U6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHJldHVybiBJZSh0KSA/IHQubnVtYmVyIDogMDtcbiAgICB9XG4gIH07XG59LCBMYSA9IGR0KFwidG9wXCIpLCBLYSA9IGR0KFwicmlnaHRcIiksIGJhID0gZHQoXCJib3R0b21cIiksIHhhID0gZHQoXCJsZWZ0XCIpLCBEYSA9IHtcbiAgbmFtZTogXCJjb2xvclwiLFxuICBpbml0aWFsVmFsdWU6IFwidHJhbnNwYXJlbnRcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMyxcbiAgZm9ybWF0OiBcImNvbG9yXCJcbn0sIFNhID0ge1xuICBuYW1lOiBcImRpcmVjdGlvblwiLFxuICBpbml0aWFsVmFsdWU6IFwibHRyXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDIsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG59LCBUYSA9IHtcbiAgbmFtZTogXCJkaXNwbGF5XCIsXG4gIGluaXRpYWxWYWx1ZTogXCJpbmxpbmUtYmxvY2tcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMSxcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICByZXR1cm4gZS5maWx0ZXIoRCkucmVkdWNlKFxuICAgICAgZnVuY3Rpb24odCwgcikge1xuICAgICAgICByZXR1cm4gdCB8IE1hKHIudmFsdWUpO1xuICAgICAgfSxcbiAgICAgIDBcbiAgICAgIC8qIE5PTkUgKi9cbiAgICApO1xuICB9XG59LCBNYSA9IGZ1bmN0aW9uKEEpIHtcbiAgc3dpdGNoIChBKSB7XG4gICAgY2FzZSBcImJsb2NrXCI6XG4gICAgY2FzZSBcIi13ZWJraXQtYm94XCI6XG4gICAgICByZXR1cm4gMjtcbiAgICBjYXNlIFwiaW5saW5lXCI6XG4gICAgICByZXR1cm4gNDtcbiAgICBjYXNlIFwicnVuLWluXCI6XG4gICAgICByZXR1cm4gODtcbiAgICBjYXNlIFwiZmxvd1wiOlxuICAgICAgcmV0dXJuIDE2O1xuICAgIGNhc2UgXCJmbG93LXJvb3RcIjpcbiAgICAgIHJldHVybiAzMjtcbiAgICBjYXNlIFwidGFibGVcIjpcbiAgICAgIHJldHVybiA2NDtcbiAgICBjYXNlIFwiZmxleFwiOlxuICAgIGNhc2UgXCItd2Via2l0LWZsZXhcIjpcbiAgICAgIHJldHVybiAxMjg7XG4gICAgY2FzZSBcImdyaWRcIjpcbiAgICBjYXNlIFwiLW1zLWdyaWRcIjpcbiAgICAgIHJldHVybiAyNTY7XG4gICAgY2FzZSBcInJ1YnlcIjpcbiAgICAgIHJldHVybiA1MTI7XG4gICAgY2FzZSBcInN1YmdyaWRcIjpcbiAgICAgIHJldHVybiAxMDI0O1xuICAgIGNhc2UgXCJsaXN0LWl0ZW1cIjpcbiAgICAgIHJldHVybiAyMDQ4O1xuICAgIGNhc2UgXCJ0YWJsZS1yb3ctZ3JvdXBcIjpcbiAgICAgIHJldHVybiA0MDk2O1xuICAgIGNhc2UgXCJ0YWJsZS1oZWFkZXItZ3JvdXBcIjpcbiAgICAgIHJldHVybiA4MTkyO1xuICAgIGNhc2UgXCJ0YWJsZS1mb290ZXItZ3JvdXBcIjpcbiAgICAgIHJldHVybiAxNjM4NDtcbiAgICBjYXNlIFwidGFibGUtcm93XCI6XG4gICAgICByZXR1cm4gMzI3Njg7XG4gICAgY2FzZSBcInRhYmxlLWNlbGxcIjpcbiAgICAgIHJldHVybiA2NTUzNjtcbiAgICBjYXNlIFwidGFibGUtY29sdW1uLWdyb3VwXCI6XG4gICAgICByZXR1cm4gMTMxMDcyO1xuICAgIGNhc2UgXCJ0YWJsZS1jb2x1bW5cIjpcbiAgICAgIHJldHVybiAyNjIxNDQ7XG4gICAgY2FzZSBcInRhYmxlLWNhcHRpb25cIjpcbiAgICAgIHJldHVybiA1MjQyODg7XG4gICAgY2FzZSBcInJ1YnktYmFzZVwiOlxuICAgICAgcmV0dXJuIDEwNDg1NzY7XG4gICAgY2FzZSBcInJ1YnktdGV4dFwiOlxuICAgICAgcmV0dXJuIDIwOTcxNTI7XG4gICAgY2FzZSBcInJ1YnktYmFzZS1jb250YWluZXJcIjpcbiAgICAgIHJldHVybiA0MTk0MzA0O1xuICAgIGNhc2UgXCJydWJ5LXRleHQtY29udGFpbmVyXCI6XG4gICAgICByZXR1cm4gODM4ODYwODtcbiAgICBjYXNlIFwiY29udGVudHNcIjpcbiAgICAgIHJldHVybiAxNjc3NzIxNjtcbiAgICBjYXNlIFwiaW5saW5lLWJsb2NrXCI6XG4gICAgICByZXR1cm4gMzM1NTQ0MzI7XG4gICAgY2FzZSBcImlubGluZS1saXN0LWl0ZW1cIjpcbiAgICAgIHJldHVybiA2NzEwODg2NDtcbiAgICBjYXNlIFwiaW5saW5lLXRhYmxlXCI6XG4gICAgICByZXR1cm4gMTM0MjE3NzI4O1xuICAgIGNhc2UgXCJpbmxpbmUtZmxleFwiOlxuICAgICAgcmV0dXJuIDI2ODQzNTQ1NjtcbiAgICBjYXNlIFwiaW5saW5lLWdyaWRcIjpcbiAgICAgIHJldHVybiA1MzY4NzA5MTI7XG4gIH1cbiAgcmV0dXJuIDA7XG59LCBPYSA9IHtcbiAgbmFtZTogXCJmbG9hdFwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAyLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBjYXNlIFwiaW5saW5lLXN0YXJ0XCI6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSBcImlubGluZS1lbmRcIjpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59LCBSYSA9IHtcbiAgbmFtZTogXCJsZXR0ZXItc3BhY2luZ1wiLFxuICBpbml0aWFsVmFsdWU6IFwiMFwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAwLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLnR5cGUgPT09IDIwICYmIGUudmFsdWUgPT09IFwibm9ybWFsXCIgPyAwIDogZS50eXBlID09PSAxNyB8fCBlLnR5cGUgPT09IDE1ID8gZS5udW1iZXIgOiAwO1xuICB9XG59LCBudDtcbihmdW5jdGlvbihBKSB7XG4gIEEuTk9STUFMID0gXCJub3JtYWxcIiwgQS5TVFJJQ1QgPSBcInN0cmljdFwiO1xufSkobnQgfHwgKG50ID0ge30pKTtcbnZhciBHYSA9IHtcbiAgbmFtZTogXCJsaW5lLWJyZWFrXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJub3JtYWxcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJzdHJpY3RcIjpcbiAgICAgICAgcmV0dXJuIG50LlNUUklDVDtcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudC5OT1JNQUw7XG4gICAgfVxuICB9XG59LCBWYSA9IHtcbiAgbmFtZTogXCJsaW5lLWhlaWdodFwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9ybWFsXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDRcbiAgLyogVE9LRU5fVkFMVUUgKi9cbn0sIEFuID0gZnVuY3Rpb24oQSwgZSkge1xuICByZXR1cm4gRChBKSAmJiBBLnZhbHVlID09PSBcIm5vcm1hbFwiID8gMS4yICogZSA6IEEudHlwZSA9PT0gMTcgPyBlICogQS5udW1iZXIgOiBQKEEpID8gUyhBLCBlKSA6IGU7XG59LCBOYSA9IHtcbiAgbmFtZTogXCJsaXN0LXN0eWxlLWltYWdlXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJub25lXCIsXG4gIHR5cGU6IDAsXG4gIHByZWZpeDogITEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIGUudHlwZSA9PT0gMjAgJiYgZS52YWx1ZSA9PT0gXCJub25lXCIgPyBudWxsIDogZHIucGFyc2UoQSwgZSk7XG4gIH1cbn0sIFBhID0ge1xuICBuYW1lOiBcImxpc3Qtc3R5bGUtcG9zaXRpb25cIixcbiAgaW5pdGlhbFZhbHVlOiBcIm91dHNpZGVcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJpbnNpZGVcIjpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICBjYXNlIFwib3V0c2lkZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG59LCBvciA9IHtcbiAgbmFtZTogXCJsaXN0LXN0eWxlLXR5cGVcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vbmVcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJkaXNjXCI6XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBjYXNlIFwiZGVjaW1hbFwiOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgXCJjamstZGVjaW1hbFwiOlxuICAgICAgICByZXR1cm4gNDtcbiAgICAgIGNhc2UgXCJkZWNpbWFsLWxlYWRpbmctemVyb1wiOlxuICAgICAgICByZXR1cm4gNTtcbiAgICAgIGNhc2UgXCJsb3dlci1yb21hblwiOlxuICAgICAgICByZXR1cm4gNjtcbiAgICAgIGNhc2UgXCJ1cHBlci1yb21hblwiOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGNhc2UgXCJsb3dlci1ncmVla1wiOlxuICAgICAgICByZXR1cm4gODtcbiAgICAgIGNhc2UgXCJsb3dlci1hbHBoYVwiOlxuICAgICAgICByZXR1cm4gOTtcbiAgICAgIGNhc2UgXCJ1cHBlci1hbHBoYVwiOlxuICAgICAgICByZXR1cm4gMTA7XG4gICAgICBjYXNlIFwiYXJhYmljLWluZGljXCI6XG4gICAgICAgIHJldHVybiAxMTtcbiAgICAgIGNhc2UgXCJhcm1lbmlhblwiOlxuICAgICAgICByZXR1cm4gMTI7XG4gICAgICBjYXNlIFwiYmVuZ2FsaVwiOlxuICAgICAgICByZXR1cm4gMTM7XG4gICAgICBjYXNlIFwiY2FtYm9kaWFuXCI6XG4gICAgICAgIHJldHVybiAxNDtcbiAgICAgIGNhc2UgXCJjamstZWFydGhseS1icmFuY2hcIjpcbiAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgY2FzZSBcImNqay1oZWF2ZW5seS1zdGVtXCI6XG4gICAgICAgIHJldHVybiAxNjtcbiAgICAgIGNhc2UgXCJjamstaWRlb2dyYXBoaWNcIjpcbiAgICAgICAgcmV0dXJuIDE3O1xuICAgICAgY2FzZSBcImRldmFuYWdhcmlcIjpcbiAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgY2FzZSBcImV0aGlvcGljLW51bWVyaWNcIjpcbiAgICAgICAgcmV0dXJuIDE5O1xuICAgICAgY2FzZSBcImdlb3JnaWFuXCI6XG4gICAgICAgIHJldHVybiAyMDtcbiAgICAgIGNhc2UgXCJndWphcmF0aVwiOlxuICAgICAgICByZXR1cm4gMjE7XG4gICAgICBjYXNlIFwiZ3VybXVraGlcIjpcbiAgICAgICAgcmV0dXJuIDIyO1xuICAgICAgY2FzZSBcImhlYnJld1wiOlxuICAgICAgICByZXR1cm4gMjI7XG4gICAgICBjYXNlIFwiaGlyYWdhbmFcIjpcbiAgICAgICAgcmV0dXJuIDIzO1xuICAgICAgY2FzZSBcImhpcmFnYW5hLWlyb2hhXCI6XG4gICAgICAgIHJldHVybiAyNDtcbiAgICAgIGNhc2UgXCJqYXBhbmVzZS1mb3JtYWxcIjpcbiAgICAgICAgcmV0dXJuIDI1O1xuICAgICAgY2FzZSBcImphcGFuZXNlLWluZm9ybWFsXCI6XG4gICAgICAgIHJldHVybiAyNjtcbiAgICAgIGNhc2UgXCJrYW5uYWRhXCI6XG4gICAgICAgIHJldHVybiAyNztcbiAgICAgIGNhc2UgXCJrYXRha2FuYVwiOlxuICAgICAgICByZXR1cm4gMjg7XG4gICAgICBjYXNlIFwia2F0YWthbmEtaXJvaGFcIjpcbiAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgY2FzZSBcImtobWVyXCI6XG4gICAgICAgIHJldHVybiAzMDtcbiAgICAgIGNhc2UgXCJrb3JlYW4taGFuZ3VsLWZvcm1hbFwiOlxuICAgICAgICByZXR1cm4gMzE7XG4gICAgICBjYXNlIFwia29yZWFuLWhhbmphLWZvcm1hbFwiOlxuICAgICAgICByZXR1cm4gMzI7XG4gICAgICBjYXNlIFwia29yZWFuLWhhbmphLWluZm9ybWFsXCI6XG4gICAgICAgIHJldHVybiAzMztcbiAgICAgIGNhc2UgXCJsYW9cIjpcbiAgICAgICAgcmV0dXJuIDM0O1xuICAgICAgY2FzZSBcImxvd2VyLWFybWVuaWFuXCI6XG4gICAgICAgIHJldHVybiAzNTtcbiAgICAgIGNhc2UgXCJtYWxheWFsYW1cIjpcbiAgICAgICAgcmV0dXJuIDM2O1xuICAgICAgY2FzZSBcIm1vbmdvbGlhblwiOlxuICAgICAgICByZXR1cm4gMzc7XG4gICAgICBjYXNlIFwibXlhbm1hclwiOlxuICAgICAgICByZXR1cm4gMzg7XG4gICAgICBjYXNlIFwib3JpeWFcIjpcbiAgICAgICAgcmV0dXJuIDM5O1xuICAgICAgY2FzZSBcInBlcnNpYW5cIjpcbiAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgY2FzZSBcInNpbXAtY2hpbmVzZS1mb3JtYWxcIjpcbiAgICAgICAgcmV0dXJuIDQxO1xuICAgICAgY2FzZSBcInNpbXAtY2hpbmVzZS1pbmZvcm1hbFwiOlxuICAgICAgICByZXR1cm4gNDI7XG4gICAgICBjYXNlIFwidGFtaWxcIjpcbiAgICAgICAgcmV0dXJuIDQzO1xuICAgICAgY2FzZSBcInRlbHVndVwiOlxuICAgICAgICByZXR1cm4gNDQ7XG4gICAgICBjYXNlIFwidGhhaVwiOlxuICAgICAgICByZXR1cm4gNDU7XG4gICAgICBjYXNlIFwidGliZXRhblwiOlxuICAgICAgICByZXR1cm4gNDY7XG4gICAgICBjYXNlIFwidHJhZC1jaGluZXNlLWZvcm1hbFwiOlxuICAgICAgICByZXR1cm4gNDc7XG4gICAgICBjYXNlIFwidHJhZC1jaGluZXNlLWluZm9ybWFsXCI6XG4gICAgICAgIHJldHVybiA0ODtcbiAgICAgIGNhc2UgXCJ1cHBlci1hcm1lbmlhblwiOlxuICAgICAgICByZXR1cm4gNDk7XG4gICAgICBjYXNlIFwiZGlzY2xvc3VyZS1vcGVuXCI6XG4gICAgICAgIHJldHVybiA1MDtcbiAgICAgIGNhc2UgXCJkaXNjbG9zdXJlLWNsb3NlZFwiOlxuICAgICAgICByZXR1cm4gNTE7XG4gICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxufSwgcHQgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJtYXJnaW4tXCIgKyBBLFxuICAgIGluaXRpYWxWYWx1ZTogXCIwXCIsXG4gICAgcHJlZml4OiAhMSxcbiAgICB0eXBlOiA0XG4gICAgLyogVE9LRU5fVkFMVUUgKi9cbiAgfTtcbn0sIGthID0gcHQoXCJ0b3BcIiksIF9hID0gcHQoXCJyaWdodFwiKSwgWGEgPSBwdChcImJvdHRvbVwiKSwgSmEgPSBwdChcImxlZnRcIiksIFdhID0ge1xuICBuYW1lOiBcIm92ZXJmbG93XCIsXG4gIGluaXRpYWxWYWx1ZTogXCJ2aXNpYmxlXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIGUuZmlsdGVyKEQpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBzd2l0Y2ggKHQudmFsdWUpIHtcbiAgICAgICAgY2FzZSBcImhpZGRlblwiOlxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIFwic2Nyb2xsXCI6XG4gICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIGNhc2UgXCJjbGlwXCI6XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgXCJhdXRvXCI6XG4gICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIGNhc2UgXCJ2aXNpYmxlXCI6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0sIFlhID0ge1xuICBuYW1lOiBcIm92ZXJmbG93LXdyYXBcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vcm1hbFwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAyLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcImJyZWFrLXdvcmRcIjpcbiAgICAgICAgcmV0dXJuIFwiYnJlYWstd29yZFwiO1xuICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgfVxuICB9XG59LCBFdCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcInBhZGRpbmctXCIgKyBBLFxuICAgIGluaXRpYWxWYWx1ZTogXCIwXCIsXG4gICAgcHJlZml4OiAhMSxcbiAgICB0eXBlOiAzLFxuICAgIGZvcm1hdDogXCJsZW5ndGgtcGVyY2VudGFnZVwiXG4gIH07XG59LCBaYSA9IEV0KFwidG9wXCIpLCBqYSA9IEV0KFwicmlnaHRcIiksIHFhID0gRXQoXCJib3R0b21cIiksIHphID0gRXQoXCJsZWZ0XCIpLCAkYSA9IHtcbiAgbmFtZTogXCJ0ZXh0LWFsaWduXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJsZWZ0XCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDIsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICBjYXNlIFwianVzdGlmeVwiOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cbn0sIEFvID0ge1xuICBuYW1lOiBcInBvc2l0aW9uXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJzdGF0aWNcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJyZWxhdGl2ZVwiOlxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgXCJhYnNvbHV0ZVwiOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGNhc2UgXCJmaXhlZFwiOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgXCJzdGlja3lcIjpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59LCBlbyA9IHtcbiAgbmFtZTogXCJ0ZXh0LXNoYWRvd1wiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICB0eXBlOiAxLFxuICBwcmVmaXg6ICExLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLmxlbmd0aCA9PT0gMSAmJiBhcihlWzBdLCBcIm5vbmVcIikgPyBbXSA6IFVBKGUpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBmb3IgKHZhciByID0ge1xuICAgICAgICBjb2xvcjogSEEuVFJBTlNQQVJFTlQsXG4gICAgICAgIG9mZnNldFg6IFksXG4gICAgICAgIG9mZnNldFk6IFksXG4gICAgICAgIGJsdXI6IFlcbiAgICAgIH0sIG4gPSAwLCBzID0gMDsgcyA8IHQubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgdmFyIEIgPSB0W3NdO1xuICAgICAgICBPQShCKSA/IChuID09PSAwID8gci5vZmZzZXRYID0gQiA6IG4gPT09IDEgPyByLm9mZnNldFkgPSBCIDogci5ibHVyID0gQiwgbisrKSA6IHIuY29sb3IgPSBTQS5wYXJzZShBLCBCKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH0pO1xuICB9XG59LCB0byA9IHtcbiAgbmFtZTogXCJ0ZXh0LXRyYW5zZm9ybVwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAyLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInVwcGVyY2FzZVwiOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGNhc2UgXCJsb3dlcmNhc2VcIjpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIFwiY2FwaXRhbGl6ZVwiOlxuICAgICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn0sIHJvID0ge1xuICBuYW1lOiBcInRyYW5zZm9ybVwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICEwLFxuICB0eXBlOiAwLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIGlmIChlLnR5cGUgPT09IDIwICYmIGUudmFsdWUgPT09IFwibm9uZVwiKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKGUudHlwZSA9PT0gMTgpIHtcbiAgICAgIHZhciB0ID0gQm9bZS5uYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgdCA+IFwidVwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gcGFyc2UgYW4gdW5zdXBwb3J0ZWQgdHJhbnNmb3JtIGZ1bmN0aW9uIFwiJyArIGUubmFtZSArICdcIicpO1xuICAgICAgcmV0dXJuIHQoZS52YWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSwgbm8gPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5maWx0ZXIoZnVuY3Rpb24odCkge1xuICAgIHJldHVybiB0LnR5cGUgPT09IDE3O1xuICB9KS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHJldHVybiB0Lm51bWJlcjtcbiAgfSk7XG4gIHJldHVybiBlLmxlbmd0aCA9PT0gNiA/IGUgOiBudWxsO1xufSwgc28gPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5maWx0ZXIoZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhLnR5cGUgPT09IDE3O1xuICB9KS5tYXAoZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhLm51bWJlcjtcbiAgfSksIHQgPSBlWzBdLCByID0gZVsxXTtcbiAgZVsyXSwgZVszXTtcbiAgdmFyIG4gPSBlWzRdLCBzID0gZVs1XTtcbiAgZVs2XSwgZVs3XSwgZVs4XSwgZVs5XSwgZVsxMF0sIGVbMTFdO1xuICB2YXIgQiA9IGVbMTJdLCBpID0gZVsxM107XG4gIHJldHVybiBlWzE0XSwgZVsxNV0sIGUubGVuZ3RoID09PSAxNiA/IFt0LCByLCBuLCBzLCBCLCBpXSA6IG51bGw7XG59LCBCbyA9IHtcbiAgbWF0cml4OiBubyxcbiAgbWF0cml4M2Q6IHNvXG59LCBlbiA9IHtcbiAgdHlwZTogMTYsXG4gIG51bWJlcjogNTAsXG4gIGZsYWdzOiB2ZVxufSwgaW8gPSBbZW4sIGVuXSwgYW8gPSB7XG4gIG5hbWU6IFwidHJhbnNmb3JtLW9yaWdpblwiLFxuICBpbml0aWFsVmFsdWU6IFwiNTAlIDUwJVwiLFxuICBwcmVmaXg6ICEwLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHZhciB0ID0gZS5maWx0ZXIoUCk7XG4gICAgcmV0dXJuIHQubGVuZ3RoICE9PSAyID8gaW8gOiBbdFswXSwgdFsxXV07XG4gIH1cbn0sIG9vID0ge1xuICBuYW1lOiBcInZpc2libGVcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vbmVcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJoaWRkZW5cIjpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIFwiY29sbGFwc2VcIjpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICBjYXNlIFwidmlzaWJsZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG59LCBGZTtcbihmdW5jdGlvbihBKSB7XG4gIEEuTk9STUFMID0gXCJub3JtYWxcIiwgQS5CUkVBS19BTEwgPSBcImJyZWFrLWFsbFwiLCBBLktFRVBfQUxMID0gXCJrZWVwLWFsbFwiO1xufSkoRmUgfHwgKEZlID0ge30pKTtcbnZhciBjbyA9IHtcbiAgbmFtZTogXCJ3b3JkLWJyZWFrXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJub3JtYWxcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMixcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJicmVhay1hbGxcIjpcbiAgICAgICAgcmV0dXJuIEZlLkJSRUFLX0FMTDtcbiAgICAgIGNhc2UgXCJrZWVwLWFsbFwiOlxuICAgICAgICByZXR1cm4gRmUuS0VFUF9BTEw7XG4gICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gRmUuTk9STUFMO1xuICAgIH1cbiAgfVxufSwgbG8gPSB7XG4gIG5hbWU6IFwiei1pbmRleFwiLFxuICBpbml0aWFsVmFsdWU6IFwiYXV0b1wiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAwLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIGlmIChlLnR5cGUgPT09IDIwKVxuICAgICAgcmV0dXJuIHsgYXV0bzogITAsIG9yZGVyOiAwIH07XG4gICAgaWYgKHJlKGUpKVxuICAgICAgcmV0dXJuIHsgYXV0bzogITEsIG9yZGVyOiBlLm51bWJlciB9O1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgei1pbmRleCBudW1iZXIgcGFyc2VkXCIpO1xuICB9XG59LCBDcyA9IHtcbiAgbmFtZTogXCJ0aW1lXCIsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gMTUpXG4gICAgICBzd2l0Y2ggKGUudW5pdC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIDFlMyAqIGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwibXNcIjpcbiAgICAgICAgICByZXR1cm4gZS5udW1iZXI7XG4gICAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgdGltZSB0eXBlXCIpO1xuICB9XG59LCBnbyA9IHtcbiAgbmFtZTogXCJvcGFjaXR5XCIsXG4gIGluaXRpYWxWYWx1ZTogXCIxXCIsXG4gIHR5cGU6IDAsXG4gIHByZWZpeDogITEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIHJlKGUpID8gZS5udW1iZXIgOiAxO1xuICB9XG59LCB1byA9IHtcbiAgbmFtZTogXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcbiAgaW5pdGlhbFZhbHVlOiBcInRyYW5zcGFyZW50XCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDMsXG4gIGZvcm1hdDogXCJjb2xvclwiXG59LCB3byA9IHtcbiAgbmFtZTogXCJ0ZXh0LWRlY29yYXRpb24tbGluZVwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLmZpbHRlcihEKS5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgc3dpdGNoICh0LnZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJ1bmRlcmxpbmVcIjpcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSBcIm92ZXJsaW5lXCI6XG4gICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIGNhc2UgXCJsaW5lLXRocm91Z2hcIjpcbiAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICByZXR1cm4gNDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdCAhPT0gMDtcbiAgICB9KTtcbiAgfVxufSwgUW8gPSB7XG4gIG5hbWU6IFwiZm9udC1mYW1pbHlcIixcbiAgaW5pdGlhbFZhbHVlOiBcIlwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHZhciB0ID0gW10sIHIgPSBbXTtcbiAgICByZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgIHN3aXRjaCAobi50eXBlKSB7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0LnB1c2gobi52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgdC5wdXNoKG4ubnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgci5wdXNoKHQuam9pbihcIiBcIikpLCB0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSksIHQubGVuZ3RoICYmIHIucHVzaCh0LmpvaW4oXCIgXCIpKSwgci5tYXAoZnVuY3Rpb24obikge1xuICAgICAgcmV0dXJuIG4uaW5kZXhPZihcIiBcIikgPT09IC0xID8gbiA6IFwiJ1wiICsgbiArIFwiJ1wiO1xuICAgIH0pO1xuICB9XG59LCBmbyA9IHtcbiAgbmFtZTogXCJmb250LXNpemVcIixcbiAgaW5pdGlhbFZhbHVlOiBcIjBcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMyxcbiAgZm9ybWF0OiBcImxlbmd0aFwiXG59LCBDbyA9IHtcbiAgbmFtZTogXCJmb250LXdlaWdodFwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9ybWFsXCIsXG4gIHR5cGU6IDAsXG4gIHByZWZpeDogITEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgaWYgKHJlKGUpKVxuICAgICAgcmV0dXJuIGUubnVtYmVyO1xuICAgIGlmIChEKGUpKVxuICAgICAgc3dpdGNoIChlLnZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJib2xkXCI6XG4gICAgICAgICAgcmV0dXJuIDcwMDtcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICB9XG4gICAgcmV0dXJuIDQwMDtcbiAgfVxufSwgVW8gPSB7XG4gIG5hbWU6IFwiZm9udC12YXJpYW50XCIsXG4gIGluaXRpYWxWYWx1ZTogXCJub25lXCIsXG4gIHR5cGU6IDEsXG4gIHByZWZpeDogITEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIGUuZmlsdGVyKEQpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC52YWx1ZTtcbiAgICB9KTtcbiAgfVxufSwgRm8gPSB7XG4gIG5hbWU6IFwiZm9udC1zdHlsZVwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9ybWFsXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDIsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwib2JsaXF1ZVwiOlxuICAgICAgICByZXR1cm4gXCJvYmxpcXVlXCI7XG4gICAgICBjYXNlIFwiaXRhbGljXCI6XG4gICAgICAgIHJldHVybiBcIml0YWxpY1wiO1xuICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XG4gICAgfVxuICB9XG59LCBfID0gZnVuY3Rpb24oQSwgZSkge1xuICByZXR1cm4gKEEgJiBlKSAhPT0gMDtcbn0sIGhvID0ge1xuICBuYW1lOiBcImNvbnRlbnRcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vbmVcIixcbiAgdHlwZTogMSxcbiAgcHJlZml4OiAhMSxcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBpZiAoZS5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gW107XG4gICAgdmFyIHQgPSBlWzBdO1xuICAgIHJldHVybiB0LnR5cGUgPT09IDIwICYmIHQudmFsdWUgPT09IFwibm9uZVwiID8gW10gOiBlO1xuICB9XG59LCBwbyA9IHtcbiAgbmFtZTogXCJjb3VudGVyLWluY3JlbWVudFwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICEwLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIGlmIChlLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciB0ID0gZVswXTtcbiAgICBpZiAodC50eXBlID09PSAyMCAmJiB0LnZhbHVlID09PSBcIm5vbmVcIilcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGZvciAodmFyIHIgPSBbXSwgbiA9IGUuZmlsdGVyKEFzKSwgcyA9IDA7IHMgPCBuLmxlbmd0aDsgcysrKSB7XG4gICAgICB2YXIgQiA9IG5bc10sIGkgPSBuW3MgKyAxXTtcbiAgICAgIGlmIChCLnR5cGUgPT09IDIwKSB7XG4gICAgICAgIHZhciBhID0gaSAmJiByZShpKSA/IGkubnVtYmVyIDogMTtcbiAgICAgICAgci5wdXNoKHsgY291bnRlcjogQi52YWx1ZSwgaW5jcmVtZW50OiBhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufSwgRW8gPSB7XG4gIG5hbWU6IFwiY291bnRlci1yZXNldFwiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICBwcmVmaXg6ICEwLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIGlmIChlLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBbXTtcbiAgICBmb3IgKHZhciB0ID0gW10sIHIgPSBlLmZpbHRlcihBcyksIG4gPSAwOyBuIDwgci5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIHMgPSByW25dLCBCID0gcltuICsgMV07XG4gICAgICBpZiAoRChzKSAmJiBzLnZhbHVlICE9PSBcIm5vbmVcIikge1xuICAgICAgICB2YXIgaSA9IEIgJiYgcmUoQikgPyBCLm51bWJlciA6IDA7XG4gICAgICAgIHQucHVzaCh7IGNvdW50ZXI6IHMudmFsdWUsIHJlc2V0OiBpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxufSwgSG8gPSB7XG4gIG5hbWU6IFwiZHVyYXRpb25cIixcbiAgaW5pdGlhbFZhbHVlOiBcIjBzXCIsXG4gIHByZWZpeDogITEsXG4gIHR5cGU6IDEsXG4gIHBhcnNlOiBmdW5jdGlvbihBLCBlKSB7XG4gICAgcmV0dXJuIGUuZmlsdGVyKEllKS5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIENzLnBhcnNlKEEsIHQpO1xuICAgIH0pO1xuICB9XG59LCB2byA9IHtcbiAgbmFtZTogXCJxdW90ZXNcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vbmVcIixcbiAgcHJlZml4OiAhMCxcbiAgdHlwZTogMSxcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICBpZiAoZS5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB2YXIgdCA9IGVbMF07XG4gICAgaWYgKHQudHlwZSA9PT0gMjAgJiYgdC52YWx1ZSA9PT0gXCJub25lXCIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB2YXIgciA9IFtdLCBuID0gZS5maWx0ZXIoamkpO1xuICAgIGlmIChuLmxlbmd0aCAlIDIgIT09IDApXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IG4ubGVuZ3RoOyBzICs9IDIpIHtcbiAgICAgIHZhciBCID0gbltzXS52YWx1ZSwgaSA9IG5bcyArIDFdLnZhbHVlO1xuICAgICAgci5wdXNoKHsgb3BlbjogQiwgY2xvc2U6IGkgfSk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG59LCB0biA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgaWYgKCFBKVxuICAgIHJldHVybiBcIlwiO1xuICB2YXIgciA9IEFbTWF0aC5taW4oZSwgQS5sZW5ndGggLSAxKV07XG4gIHJldHVybiByID8gdCA/IHIub3BlbiA6IHIuY2xvc2UgOiBcIlwiO1xufSwgSW8gPSB7XG4gIG5hbWU6IFwiYm94LXNoYWRvd1wiLFxuICBpbml0aWFsVmFsdWU6IFwibm9uZVwiLFxuICB0eXBlOiAxLFxuICBwcmVmaXg6ICExLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHJldHVybiBlLmxlbmd0aCA9PT0gMSAmJiBhcihlWzBdLCBcIm5vbmVcIikgPyBbXSA6IFVBKGUpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICBmb3IgKHZhciByID0ge1xuICAgICAgICBjb2xvcjogMjU1LFxuICAgICAgICBvZmZzZXRYOiBZLFxuICAgICAgICBvZmZzZXRZOiBZLFxuICAgICAgICBibHVyOiBZLFxuICAgICAgICBzcHJlYWQ6IFksXG4gICAgICAgIGluc2V0OiAhMVxuICAgICAgfSwgbiA9IDAsIHMgPSAwOyBzIDwgdC5sZW5ndGg7IHMrKykge1xuICAgICAgICB2YXIgQiA9IHRbc107XG4gICAgICAgIGFyKEIsIFwiaW5zZXRcIikgPyByLmluc2V0ID0gITAgOiBPQShCKSA/IChuID09PSAwID8gci5vZmZzZXRYID0gQiA6IG4gPT09IDEgPyByLm9mZnNldFkgPSBCIDogbiA9PT0gMiA/IHIuYmx1ciA9IEIgOiByLnNwcmVhZCA9IEIsIG4rKykgOiByLmNvbG9yID0gU0EucGFyc2UoQSwgQik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9KTtcbiAgfVxufSwgbW8gPSB7XG4gIG5hbWU6IFwicGFpbnQtb3JkZXJcIixcbiAgaW5pdGlhbFZhbHVlOiBcIm5vcm1hbFwiLFxuICBwcmVmaXg6ICExLFxuICB0eXBlOiAxLFxuICBwYXJzZTogZnVuY3Rpb24oQSwgZSkge1xuICAgIHZhciB0ID0gW1xuICAgICAgMCxcbiAgICAgIDEsXG4gICAgICAyXG4gICAgICAvKiBNQVJLRVJTICovXG4gICAgXSwgciA9IFtdO1xuICAgIHJldHVybiBlLmZpbHRlcihEKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgIHN3aXRjaCAobi52YWx1ZSkge1xuICAgICAgICBjYXNlIFwic3Ryb2tlXCI6XG4gICAgICAgICAgci5wdXNoKFxuICAgICAgICAgICAgMVxuICAgICAgICAgICAgLyogU1RST0tFICovXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZpbGxcIjpcbiAgICAgICAgICByLnB1c2goXG4gICAgICAgICAgICAwXG4gICAgICAgICAgICAvKiBGSUxMICovXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1hcmtlcnNcIjpcbiAgICAgICAgICByLnB1c2goXG4gICAgICAgICAgICAyXG4gICAgICAgICAgICAvKiBNQVJLRVJTICovXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KSwgdC5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgIHIuaW5kZXhPZihuKSA9PT0gLTEgJiYgci5wdXNoKG4pO1xuICAgIH0pLCByO1xuICB9XG59LCB5byA9IHtcbiAgbmFtZTogXCItd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yXCIsXG4gIGluaXRpYWxWYWx1ZTogXCJjdXJyZW50Y29sb3JcIixcbiAgcHJlZml4OiAhMSxcbiAgdHlwZTogMyxcbiAgZm9ybWF0OiBcImNvbG9yXCJcbn0sIExvID0ge1xuICBuYW1lOiBcIi13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcIixcbiAgaW5pdGlhbFZhbHVlOiBcIjBcIixcbiAgdHlwZTogMCxcbiAgcHJlZml4OiAhMSxcbiAgcGFyc2U6IGZ1bmN0aW9uKEEsIGUpIHtcbiAgICByZXR1cm4gSWUoZSkgPyBlLm51bWJlciA6IDA7XG4gIH1cbn0sIEtvID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdmFyIHIsIG47XG4gICAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gcChlLCBIbywgdC5hbmltYXRpb25EdXJhdGlvbiksIHRoaXMuYmFja2dyb3VuZENsaXAgPSBwKGUsICRpLCB0LmJhY2tncm91bmRDbGlwKSwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwKGUsIEFhLCB0LmJhY2tncm91bmRDb2xvciksIHRoaXMuYmFja2dyb3VuZEltYWdlID0gcChlLCBjYSwgdC5iYWNrZ3JvdW5kSW1hZ2UpLCB0aGlzLmJhY2tncm91bmRPcmlnaW4gPSBwKGUsIGxhLCB0LmJhY2tncm91bmRPcmlnaW4pLCB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9IHAoZSwgZ2EsIHQuYmFja2dyb3VuZFBvc2l0aW9uKSwgdGhpcy5iYWNrZ3JvdW5kUmVwZWF0ID0gcChlLCB1YSwgdC5iYWNrZ3JvdW5kUmVwZWF0KSwgdGhpcy5iYWNrZ3JvdW5kU2l6ZSA9IHAoZSwgUWEsIHQuYmFja2dyb3VuZFNpemUpLCB0aGlzLmJvcmRlclRvcENvbG9yID0gcChlLCBDYSwgdC5ib3JkZXJUb3BDb2xvciksIHRoaXMuYm9yZGVyUmlnaHRDb2xvciA9IHAoZSwgVWEsIHQuYm9yZGVyUmlnaHRDb2xvciksIHRoaXMuYm9yZGVyQm90dG9tQ29sb3IgPSBwKGUsIEZhLCB0LmJvcmRlckJvdHRvbUNvbG9yKSwgdGhpcy5ib3JkZXJMZWZ0Q29sb3IgPSBwKGUsIGhhLCB0LmJvcmRlckxlZnRDb2xvciksIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IHAoZSwgZGEsIHQuYm9yZGVyVG9wTGVmdFJhZGl1cyksIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBwKGUsIHBhLCB0LmJvcmRlclRvcFJpZ2h0UmFkaXVzKSwgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IHAoZSwgRWEsIHQuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpLCB0aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBwKGUsIEhhLCB0LmJvcmRlckJvdHRvbUxlZnRSYWRpdXMpLCB0aGlzLmJvcmRlclRvcFN0eWxlID0gcChlLCB2YSwgdC5ib3JkZXJUb3BTdHlsZSksIHRoaXMuYm9yZGVyUmlnaHRTdHlsZSA9IHAoZSwgSWEsIHQuYm9yZGVyUmlnaHRTdHlsZSksIHRoaXMuYm9yZGVyQm90dG9tU3R5bGUgPSBwKGUsIG1hLCB0LmJvcmRlckJvdHRvbVN0eWxlKSwgdGhpcy5ib3JkZXJMZWZ0U3R5bGUgPSBwKGUsIHlhLCB0LmJvcmRlckxlZnRTdHlsZSksIHRoaXMuYm9yZGVyVG9wV2lkdGggPSBwKGUsIExhLCB0LmJvcmRlclRvcFdpZHRoKSwgdGhpcy5ib3JkZXJSaWdodFdpZHRoID0gcChlLCBLYSwgdC5ib3JkZXJSaWdodFdpZHRoKSwgdGhpcy5ib3JkZXJCb3R0b21XaWR0aCA9IHAoZSwgYmEsIHQuYm9yZGVyQm90dG9tV2lkdGgpLCB0aGlzLmJvcmRlckxlZnRXaWR0aCA9IHAoZSwgeGEsIHQuYm9yZGVyTGVmdFdpZHRoKSwgdGhpcy5ib3hTaGFkb3cgPSBwKGUsIElvLCB0LmJveFNoYWRvdyksIHRoaXMuY29sb3IgPSBwKGUsIERhLCB0LmNvbG9yKSwgdGhpcy5kaXJlY3Rpb24gPSBwKGUsIFNhLCB0LmRpcmVjdGlvbiksIHRoaXMuZGlzcGxheSA9IHAoZSwgVGEsIHQuZGlzcGxheSksIHRoaXMuZmxvYXQgPSBwKGUsIE9hLCB0LmNzc0Zsb2F0KSwgdGhpcy5mb250RmFtaWx5ID0gcChlLCBRbywgdC5mb250RmFtaWx5KSwgdGhpcy5mb250U2l6ZSA9IHAoZSwgZm8sIHQuZm9udFNpemUpLCB0aGlzLmZvbnRTdHlsZSA9IHAoZSwgRm8sIHQuZm9udFN0eWxlKSwgdGhpcy5mb250VmFyaWFudCA9IHAoZSwgVW8sIHQuZm9udFZhcmlhbnQpLCB0aGlzLmZvbnRXZWlnaHQgPSBwKGUsIENvLCB0LmZvbnRXZWlnaHQpLCB0aGlzLmxldHRlclNwYWNpbmcgPSBwKGUsIFJhLCB0LmxldHRlclNwYWNpbmcpLCB0aGlzLmxpbmVCcmVhayA9IHAoZSwgR2EsIHQubGluZUJyZWFrKSwgdGhpcy5saW5lSGVpZ2h0ID0gcChlLCBWYSwgdC5saW5lSGVpZ2h0KSwgdGhpcy5saXN0U3R5bGVJbWFnZSA9IHAoZSwgTmEsIHQubGlzdFN0eWxlSW1hZ2UpLCB0aGlzLmxpc3RTdHlsZVBvc2l0aW9uID0gcChlLCBQYSwgdC5saXN0U3R5bGVQb3NpdGlvbiksIHRoaXMubGlzdFN0eWxlVHlwZSA9IHAoZSwgb3IsIHQubGlzdFN0eWxlVHlwZSksIHRoaXMubWFyZ2luVG9wID0gcChlLCBrYSwgdC5tYXJnaW5Ub3ApLCB0aGlzLm1hcmdpblJpZ2h0ID0gcChlLCBfYSwgdC5tYXJnaW5SaWdodCksIHRoaXMubWFyZ2luQm90dG9tID0gcChlLCBYYSwgdC5tYXJnaW5Cb3R0b20pLCB0aGlzLm1hcmdpbkxlZnQgPSBwKGUsIEphLCB0Lm1hcmdpbkxlZnQpLCB0aGlzLm9wYWNpdHkgPSBwKGUsIGdvLCB0Lm9wYWNpdHkpO1xuICAgICAgdmFyIHMgPSBwKGUsIFdhLCB0Lm92ZXJmbG93KTtcbiAgICAgIHRoaXMub3ZlcmZsb3dYID0gc1swXSwgdGhpcy5vdmVyZmxvd1kgPSBzW3MubGVuZ3RoID4gMSA/IDEgOiAwXSwgdGhpcy5vdmVyZmxvd1dyYXAgPSBwKGUsIFlhLCB0Lm92ZXJmbG93V3JhcCksIHRoaXMucGFkZGluZ1RvcCA9IHAoZSwgWmEsIHQucGFkZGluZ1RvcCksIHRoaXMucGFkZGluZ1JpZ2h0ID0gcChlLCBqYSwgdC5wYWRkaW5nUmlnaHQpLCB0aGlzLnBhZGRpbmdCb3R0b20gPSBwKGUsIHFhLCB0LnBhZGRpbmdCb3R0b20pLCB0aGlzLnBhZGRpbmdMZWZ0ID0gcChlLCB6YSwgdC5wYWRkaW5nTGVmdCksIHRoaXMucGFpbnRPcmRlciA9IHAoZSwgbW8sIHQucGFpbnRPcmRlciksIHRoaXMucG9zaXRpb24gPSBwKGUsIEFvLCB0LnBvc2l0aW9uKSwgdGhpcy50ZXh0QWxpZ24gPSBwKGUsICRhLCB0LnRleHRBbGlnbiksIHRoaXMudGV4dERlY29yYXRpb25Db2xvciA9IHAoZSwgdW8sIChyID0gdC50ZXh0RGVjb3JhdGlvbkNvbG9yKSAhPT0gbnVsbCAmJiByICE9PSB2b2lkIDAgPyByIDogdC5jb2xvciksIHRoaXMudGV4dERlY29yYXRpb25MaW5lID0gcChlLCB3bywgKG4gPSB0LnRleHREZWNvcmF0aW9uTGluZSkgIT09IG51bGwgJiYgbiAhPT0gdm9pZCAwID8gbiA6IHQudGV4dERlY29yYXRpb24pLCB0aGlzLnRleHRTaGFkb3cgPSBwKGUsIGVvLCB0LnRleHRTaGFkb3cpLCB0aGlzLnRleHRUcmFuc2Zvcm0gPSBwKGUsIHRvLCB0LnRleHRUcmFuc2Zvcm0pLCB0aGlzLnRyYW5zZm9ybSA9IHAoZSwgcm8sIHQudHJhbnNmb3JtKSwgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBwKGUsIGFvLCB0LnRyYW5zZm9ybU9yaWdpbiksIHRoaXMudmlzaWJpbGl0eSA9IHAoZSwgb28sIHQudmlzaWJpbGl0eSksIHRoaXMud2Via2l0VGV4dFN0cm9rZUNvbG9yID0gcChlLCB5bywgdC53ZWJraXRUZXh0U3Ryb2tlQ29sb3IpLCB0aGlzLndlYmtpdFRleHRTdHJva2VXaWR0aCA9IHAoZSwgTG8sIHQud2Via2l0VGV4dFN0cm9rZVdpZHRoKSwgdGhpcy53b3JkQnJlYWsgPSBwKGUsIGNvLCB0LndvcmRCcmVhayksIHRoaXMuekluZGV4ID0gcChlLCBsbywgdC56SW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gQS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5ID4gMCAmJiB0aGlzLm9wYWNpdHkgPiAwICYmIHRoaXMudmlzaWJpbGl0eSA9PT0gMDtcbiAgICB9LCBBLnByb3RvdHlwZS5pc1RyYW5zcGFyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gVEEodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIH0sIEEucHJvdG90eXBlLmlzVHJhbnNmb3JtZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSAhPT0gbnVsbDtcbiAgICB9LCBBLnByb3RvdHlwZS5pc1Bvc2l0aW9uZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uICE9PSAwO1xuICAgIH0sIEEucHJvdG90eXBlLmlzUG9zaXRpb25lZFdpdGhaSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpb25lZCgpICYmICF0aGlzLnpJbmRleC5hdXRvO1xuICAgIH0sIEEucHJvdG90eXBlLmlzRmxvYXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsb2F0ICE9PSAwO1xuICAgIH0sIEEucHJvdG90eXBlLmlzSW5saW5lTGV2ZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfKFxuICAgICAgICB0aGlzLmRpc3BsYXksXG4gICAgICAgIDRcbiAgICAgICAgLyogSU5MSU5FICovXG4gICAgICApIHx8IF8oXG4gICAgICAgIHRoaXMuZGlzcGxheSxcbiAgICAgICAgMzM1NTQ0MzJcbiAgICAgICAgLyogSU5MSU5FX0JMT0NLICovXG4gICAgICApIHx8IF8oXG4gICAgICAgIHRoaXMuZGlzcGxheSxcbiAgICAgICAgMjY4NDM1NDU2XG4gICAgICAgIC8qIElOTElORV9GTEVYICovXG4gICAgICApIHx8IF8oXG4gICAgICAgIHRoaXMuZGlzcGxheSxcbiAgICAgICAgNTM2ODcwOTEyXG4gICAgICAgIC8qIElOTElORV9HUklEICovXG4gICAgICApIHx8IF8oXG4gICAgICAgIHRoaXMuZGlzcGxheSxcbiAgICAgICAgNjcxMDg4NjRcbiAgICAgICAgLyogSU5MSU5FX0xJU1RfSVRFTSAqL1xuICAgICAgKSB8fCBfKFxuICAgICAgICB0aGlzLmRpc3BsYXksXG4gICAgICAgIDEzNDIxNzcyOFxuICAgICAgICAvKiBJTkxJTkVfVEFCTEUgKi9cbiAgICAgICk7XG4gICAgfSwgQTtcbiAgfSgpXG4pLCBibyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICAvKiBAX19QVVJFX18gKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0KSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBwKGUsIGhvLCB0LmNvbnRlbnQpLCB0aGlzLnF1b3RlcyA9IHAoZSwgdm8sIHQucXVvdGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIEE7XG4gIH0oKVxuKSwgcm4gPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgLyogQF9fUFVSRV9fICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdGhpcy5jb3VudGVySW5jcmVtZW50ID0gcChlLCBwbywgdC5jb3VudGVySW5jcmVtZW50KSwgdGhpcy5jb3VudGVyUmVzZXQgPSBwKGUsIEVvLCB0LmNvdW50ZXJSZXNldCk7XG4gICAgfVxuICAgIHJldHVybiBBO1xuICB9KClcbiksIHAgPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHZhciByID0gbmV3IHpuKCksIG4gPSB0ICE9PSBudWxsICYmIHR5cGVvZiB0IDwgXCJ1XCIgPyB0LnRvU3RyaW5nKCkgOiBlLmluaXRpYWxWYWx1ZTtcbiAgci53cml0ZShuKTtcbiAgdmFyIHMgPSBuZXcgJG4oci5yZWFkKCkpO1xuICBzd2l0Y2ggKGUudHlwZSkge1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciBCID0gcy5wYXJzZUNvbXBvbmVudFZhbHVlKCk7XG4gICAgICByZXR1cm4gZS5wYXJzZShBLCBEKEIpID8gQi52YWx1ZSA6IGUuaW5pdGlhbFZhbHVlKTtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZS5wYXJzZShBLCBzLnBhcnNlQ29tcG9uZW50VmFsdWUoKSk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGUucGFyc2UoQSwgcy5wYXJzZUNvbXBvbmVudFZhbHVlcygpKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcy5wYXJzZUNvbXBvbmVudFZhbHVlKCk7XG4gICAgY2FzZSAzOlxuICAgICAgc3dpdGNoIChlLmZvcm1hdCkge1xuICAgICAgICBjYXNlIFwiYW5nbGVcIjpcbiAgICAgICAgICByZXR1cm4gZnQucGFyc2UoQSwgcy5wYXJzZUNvbXBvbmVudFZhbHVlKCkpO1xuICAgICAgICBjYXNlIFwiY29sb3JcIjpcbiAgICAgICAgICByZXR1cm4gU0EucGFyc2UoQSwgcy5wYXJzZUNvbXBvbmVudFZhbHVlKCkpO1xuICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgICAgICByZXR1cm4gZHIucGFyc2UoQSwgcy5wYXJzZUNvbXBvbmVudFZhbHVlKCkpO1xuICAgICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgICAgdmFyIGkgPSBzLnBhcnNlQ29tcG9uZW50VmFsdWUoKTtcbiAgICAgICAgICByZXR1cm4gT0EoaSkgPyBpIDogWTtcbiAgICAgICAgY2FzZSBcImxlbmd0aC1wZXJjZW50YWdlXCI6XG4gICAgICAgICAgdmFyIGEgPSBzLnBhcnNlQ29tcG9uZW50VmFsdWUoKTtcbiAgICAgICAgICByZXR1cm4gUChhKSA/IGEgOiBZO1xuICAgICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICAgIHJldHVybiBDcy5wYXJzZShBLCBzLnBhcnNlQ29tcG9uZW50VmFsdWUoKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufSwgeG8gPSBcImRhdGEtaHRtbDJjYW52YXMtZGVidWdcIiwgRG8gPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5nZXRBdHRyaWJ1dGUoeG8pO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIFwiYWxsXCI6XG4gICAgICByZXR1cm4gMTtcbiAgICBjYXNlIFwiY2xvbmVcIjpcbiAgICAgIHJldHVybiAyO1xuICAgIGNhc2UgXCJwYXJzZVwiOlxuICAgICAgcmV0dXJuIDM7XG4gICAgY2FzZSBcInJlbmRlclwiOlxuICAgICAgcmV0dXJuIDQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59LCBjciA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSBEbyhBKTtcbiAgcmV0dXJuIHQgPT09IDEgfHwgZSA9PT0gdDtcbn0sIEZBID0gKFxuICAvKiogQGNsYXNzICovXG4gIC8qIEBfX1BVUkVfXyAqLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKGUsIHQpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHQgPSBlLCB0aGlzLnRleHROb2RlcyA9IFtdLCB0aGlzLmVsZW1lbnRzID0gW10sIHRoaXMuZmxhZ3MgPSAwLCBjcihcbiAgICAgICAgdCxcbiAgICAgICAgM1xuICAgICAgICAvKiBQQVJTRSAqL1xuICAgICAgKSlcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICB0aGlzLnN0eWxlcyA9IG5ldyBLbyhlLCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0LCBudWxsKSksIHVyKHQpICYmICh0aGlzLnN0eWxlcy5hbmltYXRpb25EdXJhdGlvbi5zb21lKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHIgPiAwO1xuICAgICAgfSkgJiYgKHQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjBzXCIpLCB0aGlzLnN0eWxlcy50cmFuc2Zvcm0gIT09IG51bGwgJiYgKHQuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCIpKSwgdGhpcy5ib3VuZHMgPSB3dCh0aGlzLmNvbnRleHQsIHQpLCBjcihcbiAgICAgICAgdCxcbiAgICAgICAgNFxuICAgICAgICAvKiBSRU5ERVIgKi9cbiAgICAgICkgJiYgKHRoaXMuZmxhZ3MgfD0gMTYpO1xuICAgIH1cbiAgICByZXR1cm4gQTtcbiAgfSgpXG4pLCBTbyA9IFwiQUFBQUFBQUFBQUFBRUE0QUdCa0FBRkFhQUFBQ0FBQUFBQUFJQUJBQUdBQXdBRGdBQ0FBUUFBZ0FFQUFJQUJBQUNBQVFBQWdBRUFBSUFCQUFDQUFRQUFnQUVBQUlBQkFBUUFCSUFFUUFUQUFJQUJBQUNBQVFBQWdBRUFBSUFCQUFWQUJjQUFnQUVBQUlBQkFBQ0FBUUFHQUFhQUJ3QUhnQWdBQ0lBSTRBbGdBSUFCQUFtd0NqQUtnQXNBQzJBTDRBdlFERkFNb0EwZ0JQQVZZQldnRUlBQWdBQ0FDTUFOb0FZZ0ZrQVd3QmRBRjhBWDBCaFFHTkFaVUJsZ0dlQWFNQmxRR1dBYXNCc3dGOEFic0J3d0YwQWNzQll3SFRBUWdBMndHL0FPTUJkQUY4QWVrQjhRRjBBZmtCK3dIaUFIUUJmQUVJQUFNQzVnUUlBQXNDRWdJSUFBZ0FGZ0llQWdnQUlnSXBBZ2dBTVFJNUFrQUN5Z0VJQUFnQVNBSlFBbGdDWUFJSUFBZ0FDQUFLQlFvRkNnVVRCUk1GR1FVckJTc0ZDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUJkQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQm9BbWdDcndHdkFRZ0FiZ0oyQWdnQUhnRUlBQWdBQ0FEbkFYc0NDQUFJQUFnQWd3SUlBQWdBQ0FBSUFBZ0FDQUNLQWdnQWtRS1pBZ2dBUEFESkFBZ0FvUUtrQXF3Q3NnSzZBc0lDQ0FESkFnZ0EwQUlJQUFnQUNBQUlBTllDM2dJSUFBZ0FDQUFJQUFnQUNBQkFBT1lDQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQWtBU29CK1FJRUFBZ0FDQUE4QUVNQ0NBQkNCUWdBQ0FCSkJWQUZDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUJUQlZvRkNBQUlBRm9GQ0FCZkJXVUZDQUFJQUFnQUNBQUlBQWdBYlFVSUFBZ0FDQUFJQUFnQUNBQnpCWHNGZlFXRkJZb0ZpZ1dLQlpFRmlnV0tCWW9GbUFXZkJhWUZyZ1d4QmJrRkNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBTUVGQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQU1nRkNBRFFCUWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFPNENDQUFJQUFnQWlRQUlBQWdBQ0FCQUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FEMEFnZ0FDQUQ4QWdnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFOWUZDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBTUR2d0FJQUFnQUpBSUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUN3TVRBd2dBQ0FCOUJPc0VHd01qQXdnQUt3TXlBd3NGWWdFM0EvTUVQd01JQUVVRFRRTlJBd2dBV1FPc0FHRURDQUFJQUFnQUNBQUlBQWdBQ0FCcEF6UUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGT2dVMEJUVUZOZ1UzQlRnRk9RVTZCVFFGTlFVMkJUY0ZPQVU1QlRvRk5BVTFCVFlGTndVNEJUa0ZPZ1UwQlRVRk5nVTNCVGdGT1FVNkJUUUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGT2dVMEJUVUZOZ1UzQlRnRk9RVTZCVFFGTlFVMkJUY0ZPQVU1QlRvRk5BVTFCVFlGTndVNEJUa0ZPZ1UwQlRVRk5nVTNCVGdGT1FVNkJUUUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGT2dVMEJUVUZOZ1UzQlRnRk9RVTZCVFFGTlFVMkJUY0ZPQVU1QlRvRk5BVTFCVFlGTndVNEJUa0ZPZ1UwQlRVRk5nVTNCVGdGT1FVNkJUUUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGT2dVMEJUVUZOZ1UzQlRnRk9RVTZCVFFGTlFVMkJUY0ZPQVU1QlRvRk5BVTFCVFlGTndVNEJUa0ZPZ1UwQlRVRk5nVTNCVGdGT1FVNkJUUUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGT2dVMEJUVUZOZ1UzQlRnRk9RVTZCVFFGTlFVMkJUY0ZPQVU1QlRvRk5BVTFCVFlGTndVNEJUa0ZPZ1UwQlRVRk5nVTNCVGdGT1FVNkJUUUZOUVUyQlRjRk9BVTVCVG9GTkFVMUJUWUZOd1U0QlRrRk9nVTBCVFVGTmdVM0JUZ0ZPUVU2QlRRRk5RVTJCVGNGT0FVNUJUb0ZOQVUxQlRZRk53VTRCVGtGSVFVb0JTd0ZDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUJ0QXdnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FCTUFFd0FDQUFJQUFnQUNBQUlBQmdBQ0FBSUFBZ0FDQUMvQUFnQUNBQXlBUWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUNBQUlBQXdBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQUFBUkFCSUFBZ0FDQUFJQUJRQVNBQUlBQWdBSUFCd0FFQUFqZ0NJQUJzQXFBQzJBTDBBaWdEUUF0d0MrSUpJUXFWQVpVQldRcVZBWlVCbFFHVkFaVUJsUUdyQzVVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVhzS2xRR1ZBYkFLNndzckRHVU1wUXpsREpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFaVUJsUUdWQVpVQmxRR1ZBWlVCbFFHVkFmQUtBQXVaQTY0QXR3Q0pBTG9DNkFEd0FBZ0F1QUNnQS9vRXBnTzZBcXNEK0FBSUFBZ0Fzd01JQUFnQUNBQUlBSWtBdXdQNUFmc0J3d1BMQXdnQUNBQUlBQWdBQ0FEUkE5a0RDQUFJQU9FRDZRTUlBQWdBQ0FBSUFBZ0FDQUR1QS9ZRENBQUlBUDREeVFBSUFBZ0FCZ1FJQUFnQVhRQU9CQWdBQ0FBSUFBZ0FDQUFJQUJNRUNBQUlBQWdBQ0FBSUFBZ0FDQUQ4QUFRQkNBQUlBQWdBR2dRaUJDb0VDQUV4QkFnQUVBRUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBNEJBZ0FDQUJBQkVZRUNBQUlBQWdBVEFRWUFRZ0FWQVFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUZvRUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FPUUVJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUIrQkFjQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUVBQmhnU01CQWdBQ0FBSUFBZ0FsQVFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUF3QUVBQVFBQkFBREFBTUFBd0FEQUFRQUJBQUVBQVFBQkFBRUFBUUFCSEFUQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBZFFNSUFBZ0FDQUFJQUFnQUNBQUlBTWtBQ0FBSUFBZ0FmUU1JQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUNGQTRrRENBQUlBQWdBQ0FBSUFPY0JDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFJY0RDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUpFRENBQUlBQWdBQ0FERkFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQmdCQWdBWmdRSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQWJBUUNCWElFQ0FBSUFIa0VDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FCQUFKd0VRQUNqQktvRXNnUUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUM2Qk1JRUNBQUlBQWdBQ0FBSUFBZ0FDQUJtQkFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBeHdRSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUdZRUNBQUlBQWdBemdRSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBaWdXS0JZb0ZpZ1dLQllvRmlnV0tCZDBGWHdVSUFPSUY2Z1h4QllvRjNnVDVCUUFHQ0FhS0JZb0ZpZ1dLQllvRmlnV0tCWW9GaWdXS0JZb0ZpZ1hXQklvRmlnV0tCWW9GaWdXS0JZb0ZpZ1dLQllzRkVBYUtCWW9GaWdXS0JZb0ZpZ1dLQlJRR0NBQ0tCWW9GaWdXS0JRZ0FDQUFJQU5FRUNBQUlBQmdHaWdVZ0JnZ0FKZ1lJQUM0R013YUtCWW9GMHdRM0JqNEdpZ1dLQllvRmlnV0tCWW9GaWdXS0JZb0ZpZ1dLQllvRmlnVUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQWlnV0tCWW9GaWdXS0JZb0ZpZ1dLQllvRmlnV0tCWW9GaWdXS0JZb0ZpZ1dLQllvRmlnV0tCWW9GaWdXS0JZb0ZpZ1dLQllvRmlnV0tCWW9GaWdXTEJmLy8vLy8vL3dRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUF3QUVBQVFBQWdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFPQUFBQUFBQUFBQVFBRGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBVUFBQUFGQUFVQUFBQUZBQVVBQUFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFFQUFRQUJBQUVBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUFRQUFBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUZBQVVBQUFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBQUFBQUFGQUFVQUFRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQndBRkFBVUFCUUFGQUFBQUJ3QUhBQWNBQUFBSEFBY0FCd0FGQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQUFjQUJ3QUZBQVVBQlFBRkFBY0FCd0FGQUFVQUFBQUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhBQUFBQVFBQkFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBQUFCd0FGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFIQUFjQUJ3QUhBQWNBQUFBSEFBY0FBQUFBQUFVQUJRQUhBQVVBQVFBSEFBRUFCd0FGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFGQUFVQUJ3QUJBQVVBQlFBRkFBVUFBQUFBQUFBQUFBQUFBQUVBQVFBQkFBRUFBUUFCQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQndBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFGQUFVQUFRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUJRQU5BQVFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFBQkFBRUFBUUFCQUFFQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFIQUFVQUJRQUZBQUFBQUFBQUFBY0FCUUFGQUFVQUJRQUZBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFBQUFGQUFVQUJRQUZBQVVBQUFBRkFBVUFCUUFBQUFVQUJRQUZBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFBQUFBQUFBQUFBQVVBQlFBRkFBY0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUhBQVVBQUFBSEFBY0FCd0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCd0FIQUFjQUJ3QUZBQWNBQndBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJ3QUhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBVUFCd0FIQUFVQUJRQUZBQVVBQUFBQUFBY0FCd0FBQUFBQUJ3QUhBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFBQUFBQUJRQUZBQWNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBQUFCd0FIQUFjQUJRQUZBQUFBQUFBQUFBQUFCUUFGQUFBQUFBQUZBQVVBQlFBQUFBQUFBQUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUFBQUFBQUFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0FGQUFVQUJRQUZBQVVBQUFBRkFBVUFCd0FBQUFjQUJ3QUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUFBQUZBQVVBQndBRkFBVUFCUUFGQUFBQUFBQUhBQWNBQUFBQUFBY0FCd0FGQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBY0FCd0FBQUFBQUFBQUhBQWNBQndBQUFBY0FCd0FIQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUhBQWNBQndBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCd0FIQUFjQUJ3QUFBQVVBQlFBRkFBQUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBY0FCUUFIQUFjQUJRQUhBQWNBQUFBRkFBY0FCd0FBQUFjQUJ3QUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBY0FCd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBQUFBVUFCd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUFBQUFBQUFBQUFBRkFBY0FCd0FGQUFVQUJRQUFBQVVBQUFBSEFBY0FCd0FIQUFjQUJ3QUhBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQUFBSEFBVUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUFBQndBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQVVBQUFBRkFBQUFBQUFBQUFBQUJ3QUhBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCd0FGQUFVQUJRQUZBQVVBQUFBRkFBVUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUZBQVVBQndBRkFBVUFCUUFGQUFVQUJRQUFBQVVBQlFBSEFBY0FCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFBY0FCUUFGQUFBQUFBQUFBQUFBQlFBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBY0FCUUFGQUFBQUFBQUFBQUFBQUFBQUFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFIQUFVQUJRQUZBQVVBQlFBRkFBVUFCd0FIQUFjQUJ3QUhBQWNBQndBSEFBVUFCd0FIQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJ3QUhBQWNBQndBRkFBVUFCd0FIQUFjQUFBQUFBQUFBQUFBSEFBY0FCUUFIQUFjQUJ3QUhBQWNBQndBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBY0FCd0FGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQlFBSEFBVUFCUUFGQUFVQUJRQUZBQVVBQUFBRkFBQUFCUUFBQUFBQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFjQUJ3QUhBQWNBQndBSEFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBQUFBQUFVQUJRQUZBQVVBQlFBSEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQndBRkFBY0FCd0FIQUFjQUJ3QUZBQWNBQndBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQndBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQUFVQUJRQUZBQVVBQndBSEFBVUFCUUFIQUFVQUJRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBY0FCUUFGQUFjQUJ3QUhBQVVBQndBRkFBVUFCUUFIQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUhBQWNBQlFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFBQUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQWNBQlFBRkFBVUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBVUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBQUFCd0FGQUFVQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQUFCUUFGQUFVQUJRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUZBQVVBQlFBRkFBVUFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFBQUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFGQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ3QUhBQVVBQlFBSEFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQndBSEFBY0FCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQUFBQUFBQUFBQUFBQUFBQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBSEFBY0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFjQUJ3QUZBQVVBQlFBRkFBY0FCd0FGQUFVQUJ3QUhBQUFBQUFBQUFBQUFBQUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUZBQVVBQlFBRkFBY0FCd0FGQUFVQUJ3QUhBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFBQUFGQUFVQUJRQUFBQUFBQlFBRkFBQUFBQUFBQUFBQUFBQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBY0FCUUFGQUFjQUJ3QUFBQUFBQUFBQUFBQUFCd0FGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQndBRkFBY0FCd0FGQUFjQUJ3QUFBQWNBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFBQUFVQUJRQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFVQUJRQUFBQUFBQUFBQUFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQlFBSEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBVUFCd0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQndBSEFBY0FCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhBQWNBQndBRkFBVUFCUUFIQUFjQUJRQUhBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUZBQUFBQndBSEFBY0FCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJ3QUhBQWNBQndBQUFBQUFCd0FIQUFBQUFBQUhBQWNBQndBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0FIQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFBY0FCd0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCd0FIQUFVQUJRQUZBQWNBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUhBQWNBQlFBRkFBVUFCUUFGQUFVQUJ3QUZBQWNBQndBRkFBY0FCUUFGQUFjQUJRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFIQUFjQUJRQUZBQVVBQlFBQUFBQUFCd0FIQUFjQUJ3QUZBQVVBQndBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFjQUJ3QUhBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUhBQWNBQlFBSEFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVQUJ3QUZBQWNBQndBRkFBVUFCUUFGQUFVQUJRQUhBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQndBRkFBVUFCUUFGQUFjQUJRQUZBQVVBQlFBRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQUFjQUJ3QUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUhBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFBY0FCd0FGQUFVQUJRQUZBQUFBQUFBRkFBVUFCd0FIQUFjQUJ3QUZBQUFBQUFBQUFBY0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQndBSEFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBY0FCUUFGQUFVQUJRQUZBQVVBQlFBQUFBVUFCUUFGQUFVQUJRQUZBQWNBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFBQUhBQVVBQlFBRkFBVUFCUUFGQUFVQUJ3QUZBQVVBQndBRkFBVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQUFBQUFBQUFCUUFBQUFVQUJRQUFBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEFBY0FCd0FIQUFjQUFBQUZBQVVBQUFBSEFBY0FCUUFIQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQndBSEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBVUFCUUFGQUFVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFBQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBY0FCd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVBQlFBQUFBVUFCUUFGQUFBQUFBQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUZBQVVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBVUFCUUFGQUFVQUJRQUFBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBQUFCUUFGQUFVQUJRQUZBQVVBQlFBQUFBVUFCUUFBQUFVQUJRQUZBQVVBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFVQUJRQUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUZBQVVBQlFBRkFBVUFCUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQUZBQVVBQlFBRkFBVUFEZ0FPQUE0QURnQU9BQTRBRHdBUEFBOEFEd0FQQUE4QUR3QVBBQThBRHdBUEFBOEFEd0FQQUE4QUR3QVBBQThBRHdBUEFBOEFEd0FQQUE4QUR3QVBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWNBQndBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0FIQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFBQUFBQUFBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFLQUFvQUNnQUtBQW9BQ2dBS0FBb0FDZ0FLQUFvQUNnQUtBQW9BQ2dBS0FBb0FDZ0FLQUFvQUNnQUtBQW9BQ2dBTUFBd0FEQUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQUFBQUFBQUFBQUFLQUFvQUNnQUtBQW9BQ2dBS0FBb0FDZ0FLQUFvQUNnQUtBQW9BQ2dBS0FBb0FDZ0FLQUFvQUNnQUtBQW9BQ2dBS0FBb0FDZ0FLQUFvQUNnQUtBQW9BQ2dBQUFBQUFBQUFBQUFzQURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUN3QU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQUFBQUFBRGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBNEFEZ0FPQUE0QURnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUFBQUFBQUFBQUFBRGdBT0FBNEFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBNEFEZ0FBQUE0QURnQU9BQTRBRGdBT0FBQUFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QUFBQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QUFBQUFBQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBQUFBNEFBQUFPQUFBQUFBQUFBQUFBQUFBQUFBNEFBQUFBQUFBQUFBQUFBQUFBRGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnQUFBQUFBRGdBQUFBQUFBQUFBQUE0QUFBQU9BQUFBQUFBQUFBQUFEZ0FPQUE0QUFBQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBNEFEZ0FPQUE0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFPQUE0QURnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFPQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFPQUE0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBRGdBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEZ0FPQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnQUFBQUFBQUFBQUFBNEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBQUFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEFEZ0FPQUE0QURnQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBQUFBQUFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBQUFBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBQUFBQUFBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBQUFEZ0FPQUE0QURnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQTRBRGdBT0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBT0FBNEFEZ0FPQUE0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QUFBQU9BQTRBRGdBT0FBNEFEZ0FBQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FBNEFBQUFBQUFBQUFBQT1cIiwgbm4gPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIiwgd2UgPSB0eXBlb2YgVWludDhBcnJheSA+IFwidVwiID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yICh2YXIgWGUgPSAwOyBYZSA8IG5uLmxlbmd0aDsgWGUrKylcbiAgd2Vbbm4uY2hhckNvZGVBdChYZSldID0gWGU7XG52YXIgVG8gPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5sZW5ndGggKiAwLjc1LCB0ID0gQS5sZW5ndGgsIHIsIG4gPSAwLCBzLCBCLCBpLCBhO1xuICBBW0EubGVuZ3RoIC0gMV0gPT09IFwiPVwiICYmIChlLS0sIEFbQS5sZW5ndGggLSAyXSA9PT0gXCI9XCIgJiYgZS0tKTtcbiAgdmFyIG8gPSB0eXBlb2YgQXJyYXlCdWZmZXIgPCBcInVcIiAmJiB0eXBlb2YgVWludDhBcnJheSA8IFwidVwiICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5zbGljZSA8IFwidVwiID8gbmV3IEFycmF5QnVmZmVyKGUpIDogbmV3IEFycmF5KGUpLCBjID0gQXJyYXkuaXNBcnJheShvKSA/IG8gOiBuZXcgVWludDhBcnJheShvKTtcbiAgZm9yIChyID0gMDsgciA8IHQ7IHIgKz0gNClcbiAgICBzID0gd2VbQS5jaGFyQ29kZUF0KHIpXSwgQiA9IHdlW0EuY2hhckNvZGVBdChyICsgMSldLCBpID0gd2VbQS5jaGFyQ29kZUF0KHIgKyAyKV0sIGEgPSB3ZVtBLmNoYXJDb2RlQXQociArIDMpXSwgY1tuKytdID0gcyA8PCAyIHwgQiA+PiA0LCBjW24rK10gPSAoQiAmIDE1KSA8PCA0IHwgaSA+PiAyLCBjW24rK10gPSAoaSAmIDMpIDw8IDYgfCBhICYgNjM7XG4gIHJldHVybiBvO1xufSwgTW8gPSBmdW5jdGlvbihBKSB7XG4gIGZvciAodmFyIGUgPSBBLmxlbmd0aCwgdCA9IFtdLCByID0gMDsgciA8IGU7IHIgKz0gMilcbiAgICB0LnB1c2goQVtyICsgMV0gPDwgOCB8IEFbcl0pO1xuICByZXR1cm4gdDtcbn0sIE9vID0gZnVuY3Rpb24oQSkge1xuICBmb3IgKHZhciBlID0gQS5sZW5ndGgsIHQgPSBbXSwgciA9IDA7IHIgPCBlOyByICs9IDQpXG4gICAgdC5wdXNoKEFbciArIDNdIDw8IDI0IHwgQVtyICsgMl0gPDwgMTYgfCBBW3IgKyAxXSA8PCA4IHwgQVtyXSk7XG4gIHJldHVybiB0O1xufSwga0EgPSA1LCBwciA9IDExLCBUdCA9IDIsIFJvID0gcHIgLSBrQSwgVXMgPSA2NTUzNiA+PiBrQSwgR28gPSAxIDw8IGtBLCBNdCA9IEdvIC0gMSwgVm8gPSAxMDI0ID4+IGtBLCBObyA9IFVzICsgVm8sIFBvID0gTm8sIGtvID0gMzIsIF9vID0gUG8gKyBrbywgWG8gPSA2NTUzNiA+PiBwciwgSm8gPSAxIDw8IFJvLCBXbyA9IEpvIC0gMSwgc24gPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHJldHVybiBBLnNsaWNlID8gQS5zbGljZShlLCB0KSA6IG5ldyBVaW50MTZBcnJheShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChBLCBlLCB0KSk7XG59LCBZbyA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgcmV0dXJuIEEuc2xpY2UgPyBBLnNsaWNlKGUsIHQpIDogbmV3IFVpbnQzMkFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKEEsIGUsIHQpKTtcbn0sIFpvID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IFRvKEEpLCByID0gQXJyYXkuaXNBcnJheSh0KSA/IE9vKHQpIDogbmV3IFVpbnQzMkFycmF5KHQpLCBuID0gQXJyYXkuaXNBcnJheSh0KSA/IE1vKHQpIDogbmV3IFVpbnQxNkFycmF5KHQpLCBzID0gMjQsIEIgPSBzbihuLCBzIC8gMiwgcls0XSAvIDIpLCBpID0gcls1XSA9PT0gMiA/IHNuKG4sIChzICsgcls0XSkgLyAyKSA6IFlvKHIsIE1hdGguY2VpbCgocyArIHJbNF0pIC8gNCkpO1xuICByZXR1cm4gbmV3IGpvKHJbMF0sIHJbMV0sIHJbMl0sIHJbM10sIEIsIGkpO1xufSwgam8gPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0LCByLCBuLCBzLCBCKSB7XG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGUsIHRoaXMuZXJyb3JWYWx1ZSA9IHQsIHRoaXMuaGlnaFN0YXJ0ID0gciwgdGhpcy5oaWdoVmFsdWVJbmRleCA9IG4sIHRoaXMuaW5kZXggPSBzLCB0aGlzLmRhdGEgPSBCO1xuICAgIH1cbiAgICByZXR1cm4gQS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQ7XG4gICAgICBpZiAoZSA+PSAwKSB7XG4gICAgICAgIGlmIChlIDwgNTUyOTYgfHwgZSA+IDU2MzE5ICYmIGUgPD0gNjU1MzUpXG4gICAgICAgICAgcmV0dXJuIHQgPSB0aGlzLmluZGV4W2UgPj4ga0FdLCB0ID0gKHQgPDwgVHQpICsgKGUgJiBNdCksIHRoaXMuZGF0YVt0XTtcbiAgICAgICAgaWYgKGUgPD0gNjU1MzUpXG4gICAgICAgICAgcmV0dXJuIHQgPSB0aGlzLmluZGV4W1VzICsgKGUgLSA1NTI5NiA+PiBrQSldLCB0ID0gKHQgPDwgVHQpICsgKGUgJiBNdCksIHRoaXMuZGF0YVt0XTtcbiAgICAgICAgaWYgKGUgPCB0aGlzLmhpZ2hTdGFydClcbiAgICAgICAgICByZXR1cm4gdCA9IF9vIC0gWG8gKyAoZSA+PiBwciksIHQgPSB0aGlzLmluZGV4W3RdLCB0ICs9IGUgPj4ga0EgJiBXbywgdCA9IHRoaXMuaW5kZXhbdF0sIHQgPSAodCA8PCBUdCkgKyAoZSAmIE10KSwgdGhpcy5kYXRhW3RdO1xuICAgICAgICBpZiAoZSA8PSAxMTE0MTExKVxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5oaWdoVmFsdWVJbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lcnJvclZhbHVlO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgQm4gPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIiwgcW8gPSB0eXBlb2YgVWludDhBcnJheSA+IFwidVwiID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpO1xuZm9yICh2YXIgSmUgPSAwOyBKZSA8IEJuLmxlbmd0aDsgSmUrKylcbiAgcW9bQm4uY2hhckNvZGVBdChKZSldID0gSmU7XG52YXIgem8gPSAxLCBPdCA9IDIsIFJ0ID0gMywgYW4gPSA0LCBvbiA9IDUsICRvID0gNywgY24gPSA4LCBHdCA9IDksIFZ0ID0gMTAsIGxuID0gMTEsIGduID0gMTIsIHVuID0gMTMsIHduID0gMTQsIE50ID0gMTUsIEFjID0gZnVuY3Rpb24oQSkge1xuICBmb3IgKHZhciBlID0gW10sIHQgPSAwLCByID0gQS5sZW5ndGg7IHQgPCByOyApIHtcbiAgICB2YXIgbiA9IEEuY2hhckNvZGVBdCh0KyspO1xuICAgIGlmIChuID49IDU1Mjk2ICYmIG4gPD0gNTYzMTkgJiYgdCA8IHIpIHtcbiAgICAgIHZhciBzID0gQS5jaGFyQ29kZUF0KHQrKyk7XG4gICAgICAocyAmIDY0NTEyKSA9PT0gNTYzMjAgPyBlLnB1c2goKChuICYgMTAyMykgPDwgMTApICsgKHMgJiAxMDIzKSArIDY1NTM2KSA6IChlLnB1c2gobiksIHQtLSk7XG4gICAgfSBlbHNlXG4gICAgICBlLnB1c2gobik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBlYyA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBBID0gW10sIGUgPSAwOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKVxuICAgIEFbZV0gPSBhcmd1bWVudHNbZV07XG4gIGlmIChTdHJpbmcuZnJvbUNvZGVQb2ludClcbiAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBBKTtcbiAgdmFyIHQgPSBBLmxlbmd0aDtcbiAgaWYgKCF0KVxuICAgIHJldHVybiBcIlwiO1xuICBmb3IgKHZhciByID0gW10sIG4gPSAtMSwgcyA9IFwiXCI7ICsrbiA8IHQ7ICkge1xuICAgIHZhciBCID0gQVtuXTtcbiAgICBCIDw9IDY1NTM1ID8gci5wdXNoKEIpIDogKEIgLT0gNjU1MzYsIHIucHVzaCgoQiA+PiAxMCkgKyA1NTI5NiwgQiAlIDEwMjQgKyA1NjMyMCkpLCAobiArIDEgPT09IHQgfHwgci5sZW5ndGggPiAxNjM4NCkgJiYgKHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHIpLCByLmxlbmd0aCA9IDApO1xuICB9XG4gIHJldHVybiBzO1xufSwgdGMgPSBabyhTbyksIHNBID0gXCLDl1wiLCBQdCA9IFwiw7dcIiwgcmMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiB0Yy5nZXQoQSk7XG59LCBuYyA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgdmFyIHIgPSB0IC0gMiwgbiA9IGVbcl0sIHMgPSBlW3QgLSAxXSwgQiA9IGVbdF07XG4gIGlmIChzID09PSBPdCAmJiBCID09PSBSdClcbiAgICByZXR1cm4gc0E7XG4gIGlmIChzID09PSBPdCB8fCBzID09PSBSdCB8fCBzID09PSBhbiB8fCBCID09PSBPdCB8fCBCID09PSBSdCB8fCBCID09PSBhbilcbiAgICByZXR1cm4gUHQ7XG4gIGlmIChzID09PSBjbiAmJiBbY24sIEd0LCBsbiwgZ25dLmluZGV4T2YoQikgIT09IC0xIHx8IChzID09PSBsbiB8fCBzID09PSBHdCkgJiYgKEIgPT09IEd0IHx8IEIgPT09IFZ0KSB8fCAocyA9PT0gZ24gfHwgcyA9PT0gVnQpICYmIEIgPT09IFZ0IHx8IEIgPT09IHVuIHx8IEIgPT09IG9uIHx8IEIgPT09ICRvIHx8IHMgPT09IHpvKVxuICAgIHJldHVybiBzQTtcbiAgaWYgKHMgPT09IHVuICYmIEIgPT09IHduKSB7XG4gICAgZm9yICg7IG4gPT09IG9uOyApXG4gICAgICBuID0gZVstLXJdO1xuICAgIGlmIChuID09PSB3bilcbiAgICAgIHJldHVybiBzQTtcbiAgfVxuICBpZiAocyA9PT0gTnQgJiYgQiA9PT0gTnQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgbiA9PT0gTnQ7IClcbiAgICAgIGkrKywgbiA9IGVbLS1yXTtcbiAgICBpZiAoaSAlIDIgPT09IDApXG4gICAgICByZXR1cm4gc0E7XG4gIH1cbiAgcmV0dXJuIFB0O1xufSwgc2MgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQWMoQSksIHQgPSBlLmxlbmd0aCwgciA9IDAsIG4gPSAwLCBzID0gZS5tYXAocmMpO1xuICByZXR1cm4ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHIgPj0gdClcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogITAsIHZhbHVlOiBudWxsIH07XG4gICAgICBmb3IgKHZhciBCID0gc0E7IHIgPCB0ICYmIChCID0gbmMoZSwgcywgKytyKSkgPT09IHNBOyApXG4gICAgICAgIDtcbiAgICAgIGlmIChCICE9PSBzQSB8fCByID09PSB0KSB7XG4gICAgICAgIHZhciBpID0gZWMuYXBwbHkobnVsbCwgZS5zbGljZShuLCByKSk7XG4gICAgICAgIHJldHVybiBuID0gciwgeyB2YWx1ZTogaSwgZG9uZTogITEgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6ICEwLCB2YWx1ZTogbnVsbCB9O1xuICAgIH1cbiAgfTtcbn0sIEJjID0gZnVuY3Rpb24oQSkge1xuICBmb3IgKHZhciBlID0gc2MoQSksIHQgPSBbXSwgcjsgIShyID0gZS5uZXh0KCkpLmRvbmU7IClcbiAgICByLnZhbHVlICYmIHQucHVzaChyLnZhbHVlLnNsaWNlKCkpO1xuICByZXR1cm4gdDtcbn0sIGljID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IDEyMztcbiAgaWYgKEEuY3JlYXRlUmFuZ2UpIHtcbiAgICB2YXIgdCA9IEEuY3JlYXRlUmFuZ2UoKTtcbiAgICBpZiAodC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgIHZhciByID0gQS5jcmVhdGVFbGVtZW50KFwiYm91bmR0ZXN0XCIpO1xuICAgICAgci5zdHlsZS5oZWlnaHQgPSBlICsgXCJweFwiLCByLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIEEuYm9keS5hcHBlbmRDaGlsZChyKSwgdC5zZWxlY3ROb2RlKHIpO1xuICAgICAgdmFyIG4gPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzID0gTWF0aC5yb3VuZChuLmhlaWdodCk7XG4gICAgICBpZiAoQS5ib2R5LnJlbW92ZUNoaWxkKHIpLCBzID09PSBlKVxuICAgICAgICByZXR1cm4gITA7XG4gICAgfVxuICB9XG4gIHJldHVybiAhMTtcbn0sIGFjID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IEEuY3JlYXRlRWxlbWVudChcImJvdW5kdGVzdFwiKTtcbiAgZS5zdHlsZS53aWR0aCA9IFwiNTBweFwiLCBlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsIGUuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIiwgZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gXCIwcHhcIiwgZS5zdHlsZS53b3JkU3BhY2luZyA9IFwiMHB4XCIsIEEuYm9keS5hcHBlbmRDaGlsZChlKTtcbiAgdmFyIHQgPSBBLmNyZWF0ZVJhbmdlKCk7XG4gIGUuaW5uZXJIVE1MID0gdHlwZW9mIFwiXCIucmVwZWF0ID09IFwiZnVuY3Rpb25cIiA/IFwiJiMxMjgxMDQ7XCIucmVwZWF0KDEwKSA6IFwiXCI7XG4gIHZhciByID0gZS5maXJzdENoaWxkLCBuID0gUXQoci5kYXRhKS5tYXAoZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBHKGEpO1xuICB9KSwgcyA9IDAsIEIgPSB7fSwgaSA9IG4uZXZlcnkoZnVuY3Rpb24oYSwgbykge1xuICAgIHQuc2V0U3RhcnQociwgcyksIHQuc2V0RW5kKHIsIHMgKyBhLmxlbmd0aCk7XG4gICAgdmFyIGMgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHMgKz0gYS5sZW5ndGg7XG4gICAgdmFyIGwgPSBjLnggPiBCLnggfHwgYy55ID4gQi55O1xuICAgIHJldHVybiBCID0gYywgbyA9PT0gMCA/ICEwIDogbDtcbiAgfSk7XG4gIHJldHVybiBBLmJvZHkucmVtb3ZlQ2hpbGQoZSksIGk7XG59LCBvYyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIG5ldyBJbWFnZSgpLmNyb3NzT3JpZ2luIDwgXCJ1XCI7XG59LCBjYyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIG5ldyBYTUxIdHRwUmVxdWVzdCgpLnJlc3BvbnNlVHlwZSA9PSBcInN0cmluZ1wiO1xufSwgbGMgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gbmV3IEltYWdlKCksIHQgPSBBLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHIgPSB0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFyKVxuICAgIHJldHVybiAhMTtcbiAgZS5zcmMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PC9zdmc+XCI7XG4gIHRyeSB7XG4gICAgci5kcmF3SW1hZ2UoZSwgMCwgMCksIHQudG9EYXRhVVJMKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxuICByZXR1cm4gITA7XG59LCBRbiA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEFbMF0gPT09IDAgJiYgQVsxXSA9PT0gMjU1ICYmIEFbMl0gPT09IDAgJiYgQVszXSA9PT0gMjU1O1xufSwgZ2MgPSBmdW5jdGlvbihBKSB7XG4gIHZhciBlID0gQS5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCB0ID0gMTAwO1xuICBlLndpZHRoID0gdCwgZS5oZWlnaHQgPSB0O1xuICB2YXIgciA9IGUuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIXIpXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCExKTtcbiAgci5maWxsU3R5bGUgPSBcInJnYigwLCAyNTUsIDApXCIsIHIuZmlsbFJlY3QoMCwgMCwgdCwgdCk7XG4gIHZhciBuID0gbmV3IEltYWdlKCksIHMgPSBlLnRvRGF0YVVSTCgpO1xuICBuLnNyYyA9IHM7XG4gIHZhciBCID0gbHIodCwgdCwgMCwgMCwgbik7XG4gIHJldHVybiByLmZpbGxTdHlsZSA9IFwicmVkXCIsIHIuZmlsbFJlY3QoMCwgMCwgdCwgdCksIGZuKEIpLnRoZW4oZnVuY3Rpb24oaSkge1xuICAgIHIuZHJhd0ltYWdlKGksIDAsIDApO1xuICAgIHZhciBhID0gci5nZXRJbWFnZURhdGEoMCwgMCwgdCwgdCkuZGF0YTtcbiAgICByLmZpbGxTdHlsZSA9IFwicmVkXCIsIHIuZmlsbFJlY3QoMCwgMCwgdCwgdCk7XG4gICAgdmFyIG8gPSBBLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmV0dXJuIG8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBzICsgXCIpXCIsIG8uc3R5bGUuaGVpZ2h0ID0gdCArIFwicHhcIiwgUW4oYSkgPyBmbihscih0LCB0LCAwLCAwLCBvKSkgOiBQcm9taXNlLnJlamVjdCghMSk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiByLmRyYXdJbWFnZShpLCAwLCAwKSwgUW4oci5nZXRJbWFnZURhdGEoMCwgMCwgdCwgdCkuZGF0YSk7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhMTtcbiAgfSk7XG59LCBsciA9IGZ1bmN0aW9uKEEsIGUsIHQsIHIsIG4pIHtcbiAgdmFyIHMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMocywgXCJzdmdcIiksIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMocywgXCJmb3JlaWduT2JqZWN0XCIpO1xuICByZXR1cm4gQi5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIEEudG9TdHJpbmcoKSksIEIuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJoZWlnaHRcIiwgZS50b1N0cmluZygpKSwgaS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIFwiMTAwJVwiKSwgaS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBcIjEwMCVcIiksIGkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ4XCIsIHQudG9TdHJpbmcoKSksIGkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ5XCIsIHIudG9TdHJpbmcoKSksIGkuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsIFwidHJ1ZVwiKSwgQi5hcHBlbmRDaGlsZChpKSwgaS5hcHBlbmRDaGlsZChuKSwgQjtcbn0sIGZuID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSwgdCkge1xuICAgIHZhciByID0gbmV3IEltYWdlKCk7XG4gICAgci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBlKHIpO1xuICAgIH0sIHIub25lcnJvciA9IHQsIHIuc3JjID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCxcIiArIGVuY29kZVVSSUNvbXBvbmVudChuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKEEpKTtcbiAgfSk7XG59LCBXID0ge1xuICBnZXQgU1VQUE9SVF9SQU5HRV9CT1VORFMoKSB7XG4gICAgdmFyIEEgPSBpYyhkb2N1bWVudCk7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXLCBcIlNVUFBPUlRfUkFOR0VfQk9VTkRTXCIsIHsgdmFsdWU6IEEgfSksIEE7XG4gIH0sXG4gIGdldCBTVVBQT1JUX1dPUkRfQlJFQUtJTkcoKSB7XG4gICAgdmFyIEEgPSBXLlNVUFBPUlRfUkFOR0VfQk9VTkRTICYmIGFjKGRvY3VtZW50KTtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsIFwiU1VQUE9SVF9XT1JEX0JSRUFLSU5HXCIsIHsgdmFsdWU6IEEgfSksIEE7XG4gIH0sXG4gIGdldCBTVVBQT1JUX1NWR19EUkFXSU5HKCkge1xuICAgIHZhciBBID0gbGMoZG9jdW1lbnQpO1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoVywgXCJTVVBQT1JUX1NWR19EUkFXSU5HXCIsIHsgdmFsdWU6IEEgfSksIEE7XG4gIH0sXG4gIGdldCBTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORygpIHtcbiAgICB2YXIgQSA9IHR5cGVvZiBBcnJheS5mcm9tID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93LmZldGNoID09IFwiZnVuY3Rpb25cIiA/IGdjKGRvY3VtZW50KSA6IFByb21pc2UucmVzb2x2ZSghMSk7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXLCBcIlNVUFBPUlRfRk9SRUlHTk9CSkVDVF9EUkFXSU5HXCIsIHsgdmFsdWU6IEEgfSksIEE7XG4gIH0sXG4gIGdldCBTVVBQT1JUX0NPUlNfSU1BR0VTKCkge1xuICAgIHZhciBBID0gb2MoKTtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsIFwiU1VQUE9SVF9DT1JTX0lNQUdFU1wiLCB7IHZhbHVlOiBBIH0pLCBBO1xuICB9LFxuICBnZXQgU1VQUE9SVF9SRVNQT05TRV9UWVBFKCkge1xuICAgIHZhciBBID0gY2MoKTtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsIFwiU1VQUE9SVF9SRVNQT05TRV9UWVBFXCIsIHsgdmFsdWU6IEEgfSksIEE7XG4gIH0sXG4gIGdldCBTVVBQT1JUX0NPUlNfWEhSKCkge1xuICAgIHZhciBBID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsIFwiU1VQUE9SVF9DT1JTX1hIUlwiLCB7IHZhbHVlOiBBIH0pLCBBO1xuICB9LFxuICBnZXQgU1VQUE9SVF9OQVRJVkVfVEVYVF9TRUdNRU5UQVRJT04oKSB7XG4gICAgdmFyIEEgPSAhISh0eXBlb2YgSW50bCA8IFwidVwiICYmIEludGwuU2VnbWVudGVyKTtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsIFwiU1VQUE9SVF9OQVRJVkVfVEVYVF9TRUdNRU5UQVRJT05cIiwgeyB2YWx1ZTogQSB9KSwgQTtcbiAgfVxufSwgaGUgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgLyogQF9fUFVSRV9fICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdGhpcy50ZXh0ID0gZSwgdGhpcy5ib3VuZHMgPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQTtcbiAgfSgpXG4pLCB1YyA9IGZ1bmN0aW9uKEEsIGUsIHQsIHIpIHtcbiAgdmFyIG4gPSBmYyhlLCB0KSwgcyA9IFtdLCBCID0gMDtcbiAgcmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgaWYgKHQudGV4dERlY29yYXRpb25MaW5lLmxlbmd0aCB8fCBpLnRyaW0oKS5sZW5ndGggPiAwKVxuICAgICAgaWYgKFcuU1VQUE9SVF9SQU5HRV9CT1VORFMpIHtcbiAgICAgICAgdmFyIGEgPSBDbihyLCBCLCBpLmxlbmd0aCkuZ2V0Q2xpZW50UmVjdHMoKTtcbiAgICAgICAgaWYgKGEubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBvID0gRXIoaSksIGMgPSAwO1xuICAgICAgICAgIG8uZm9yRWFjaChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBzLnB1c2gobmV3IGhlKGcsIHZBLmZyb21ET01SZWN0TGlzdChBLCBDbihyLCBjICsgQiwgZy5sZW5ndGgpLmdldENsaWVudFJlY3RzKCkpKSksIGMgKz0gZy5sZW5ndGg7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHMucHVzaChuZXcgaGUoaSwgdkEuZnJvbURPTVJlY3RMaXN0KEEsIGEpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbCA9IHIuc3BsaXRUZXh0KGkubGVuZ3RoKTtcbiAgICAgICAgcy5wdXNoKG5ldyBoZShpLCB3YyhBLCByKSkpLCByID0gbDtcbiAgICAgIH1cbiAgICBlbHNlIFcuU1VQUE9SVF9SQU5HRV9CT1VORFMgfHwgKHIgPSByLnNwbGl0VGV4dChpLmxlbmd0aCkpO1xuICAgIEIgKz0gaS5sZW5ndGg7XG4gIH0pLCBzO1xufSwgd2MgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHZhciB0ID0gZS5vd25lckRvY3VtZW50O1xuICBpZiAodCkge1xuICAgIHZhciByID0gdC5jcmVhdGVFbGVtZW50KFwiaHRtbDJjYW52YXN3cmFwcGVyXCIpO1xuICAgIHIuYXBwZW5kQ2hpbGQoZS5jbG9uZU5vZGUoITApKTtcbiAgICB2YXIgbiA9IGUucGFyZW50Tm9kZTtcbiAgICBpZiAobikge1xuICAgICAgbi5yZXBsYWNlQ2hpbGQociwgZSk7XG4gICAgICB2YXIgcyA9IHd0KEEsIHIpO1xuICAgICAgcmV0dXJuIHIuZmlyc3RDaGlsZCAmJiBuLnJlcGxhY2VDaGlsZChyLmZpcnN0Q2hpbGQsIHIpLCBzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdkEuRU1QVFk7XG59LCBDbiA9IGZ1bmN0aW9uKEEsIGUsIHQpIHtcbiAgdmFyIHIgPSBBLm93bmVyRG9jdW1lbnQ7XG4gIGlmICghcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb2RlIGhhcyBubyBvd25lciBkb2N1bWVudFwiKTtcbiAgdmFyIG4gPSByLmNyZWF0ZVJhbmdlKCk7XG4gIHJldHVybiBuLnNldFN0YXJ0KEEsIGUpLCBuLnNldEVuZChBLCBlICsgdCksIG47XG59LCBFciA9IGZ1bmN0aW9uKEEpIHtcbiAgaWYgKFcuU1VQUE9SVF9OQVRJVkVfVEVYVF9TRUdNRU5UQVRJT04pIHtcbiAgICB2YXIgZSA9IG5ldyBJbnRsLlNlZ21lbnRlcih2b2lkIDAsIHsgZ3JhbnVsYXJpdHk6IFwiZ3JhcGhlbWVcIiB9KTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlLnNlZ21lbnQoQSkpLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5zZWdtZW50O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBCYyhBKTtcbn0sIFFjID0gZnVuY3Rpb24oQSwgZSkge1xuICBpZiAoVy5TVVBQT1JUX05BVElWRV9URVhUX1NFR01FTlRBVElPTikge1xuICAgIHZhciB0ID0gbmV3IEludGwuU2VnbWVudGVyKHZvaWQgMCwge1xuICAgICAgZ3JhbnVsYXJpdHk6IFwid29yZFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odC5zZWdtZW50KEEpKS5tYXAoZnVuY3Rpb24ocikge1xuICAgICAgcmV0dXJuIHIuc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gVWMoQSwgZSk7XG59LCBmYyA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIGUubGV0dGVyU3BhY2luZyAhPT0gMCA/IEVyKEEpIDogUWMoQSwgZSk7XG59LCBDYyA9IFszMiwgMTYwLCA0OTYxLCA2NTc5MiwgNjU3OTMsIDQxNTMsIDQyNDFdLCBVYyA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgZm9yICh2YXIgdCA9IF9CKEEsIHtcbiAgICBsaW5lQnJlYWs6IGUubGluZUJyZWFrLFxuICAgIHdvcmRCcmVhazogZS5vdmVyZmxvd1dyYXAgPT09IFwiYnJlYWstd29yZFwiID8gXCJicmVhay13b3JkXCIgOiBlLndvcmRCcmVha1xuICB9KSwgciA9IFtdLCBuLCBzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG4udmFsdWUpIHtcbiAgICAgIHZhciBCID0gbi52YWx1ZS5zbGljZSgpLCBpID0gUXQoQiksIGEgPSBcIlwiO1xuICAgICAgaS5mb3JFYWNoKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgQ2MuaW5kZXhPZihvKSA9PT0gLTEgPyBhICs9IEcobykgOiAoYS5sZW5ndGggJiYgci5wdXNoKGEpLCByLnB1c2goRyhvKSksIGEgPSBcIlwiKTtcbiAgICAgIH0pLCBhLmxlbmd0aCAmJiByLnB1c2goYSk7XG4gICAgfVxuICB9OyAhKG4gPSB0Lm5leHQoKSkuZG9uZTsgKVxuICAgIHMoKTtcbiAgcmV0dXJuIHI7XG59LCBGYyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICAvKiBAX19QVVJFX18gKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0LCByKSB7XG4gICAgICB0aGlzLnRleHQgPSBoYyh0LmRhdGEsIHIudGV4dFRyYW5zZm9ybSksIHRoaXMudGV4dEJvdW5kcyA9IHVjKGUsIHRoaXMudGV4dCwgciwgdCk7XG4gICAgfVxuICAgIHJldHVybiBBO1xuICB9KClcbiksIGhjID0gZnVuY3Rpb24oQSwgZSkge1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gQS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBBLnJlcGxhY2UoZGMsIHBjKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gQS50b1VwcGVyQ2FzZSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQTtcbiAgfVxufSwgZGMgPSAvKF58XFxzfDp8LXxcXCh8XFwpKShbYS16XSkvZywgcGMgPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHJldHVybiBBLmxlbmd0aCA+IDAgPyBlICsgdC50b1VwcGVyQ2FzZSgpIDogQTtcbn0sIEZzID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKEEpIHtcbiAgICBnQShlLCBBKTtcbiAgICBmdW5jdGlvbiBlKHQsIHIpIHtcbiAgICAgIHZhciBuID0gQS5jYWxsKHRoaXMsIHQsIHIpIHx8IHRoaXM7XG4gICAgICByZXR1cm4gbi5zcmMgPSByLmN1cnJlbnRTcmMgfHwgci5zcmMsIG4uaW50cmluc2ljV2lkdGggPSByLm5hdHVyYWxXaWR0aCwgbi5pbnRyaW5zaWNIZWlnaHQgPSByLm5hdHVyYWxIZWlnaHQsIG4uY29udGV4dC5jYWNoZS5hZGRJbWFnZShuLnNyYyksIG47XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9KEZBKVxuKSwgaHMgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oQSkge1xuICAgIGdBKGUsIEEpO1xuICAgIGZ1bmN0aW9uIGUodCwgcikge1xuICAgICAgdmFyIG4gPSBBLmNhbGwodGhpcywgdCwgcikgfHwgdGhpcztcbiAgICAgIHJldHVybiBuLmNhbnZhcyA9IHIsIG4uaW50cmluc2ljV2lkdGggPSByLndpZHRoLCBuLmludHJpbnNpY0hlaWdodCA9IHIuaGVpZ2h0LCBuO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfShGQSlcbiksIGRzID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKEEpIHtcbiAgICBnQShlLCBBKTtcbiAgICBmdW5jdGlvbiBlKHQsIHIpIHtcbiAgICAgIHZhciBuID0gQS5jYWxsKHRoaXMsIHQsIHIpIHx8IHRoaXMsIHMgPSBuZXcgWE1MU2VyaWFsaXplcigpLCBCID0gd3QodCwgcik7XG4gICAgICByZXR1cm4gci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBCLndpZHRoICsgXCJweFwiKSwgci5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgQi5oZWlnaHQgKyBcInB4XCIpLCBuLnN2ZyA9IFwiZGF0YTppbWFnZS9zdmcreG1sLFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHMuc2VyaWFsaXplVG9TdHJpbmcocikpLCBuLmludHJpbnNpY1dpZHRoID0gci53aWR0aC5iYXNlVmFsLnZhbHVlLCBuLmludHJpbnNpY0hlaWdodCA9IHIuaGVpZ2h0LmJhc2VWYWwudmFsdWUsIG4uY29udGV4dC5jYWNoZS5hZGRJbWFnZShuLnN2ZyksIG47XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9KEZBKVxuKSwgcHMgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oQSkge1xuICAgIGdBKGUsIEEpO1xuICAgIGZ1bmN0aW9uIGUodCwgcikge1xuICAgICAgdmFyIG4gPSBBLmNhbGwodGhpcywgdCwgcikgfHwgdGhpcztcbiAgICAgIHJldHVybiBuLnZhbHVlID0gci52YWx1ZSwgbjtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0oRkEpXG4pLCBnciA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbihBKSB7XG4gICAgZ0EoZSwgQSk7XG4gICAgZnVuY3Rpb24gZSh0LCByKSB7XG4gICAgICB2YXIgbiA9IEEuY2FsbCh0aGlzLCB0LCByKSB8fCB0aGlzO1xuICAgICAgcmV0dXJuIG4uc3RhcnQgPSByLnN0YXJ0LCBuLnJldmVyc2VkID0gdHlwZW9mIHIucmV2ZXJzZWQgPT0gXCJib29sZWFuXCIgJiYgci5yZXZlcnNlZCA9PT0gITAsIG47XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9KEZBKVxuKSwgRWMgPSBbXG4gIHtcbiAgICB0eXBlOiAxNSxcbiAgICBmbGFnczogMCxcbiAgICB1bml0OiBcInB4XCIsXG4gICAgbnVtYmVyOiAzXG4gIH1cbl0sIEhjID0gW1xuICB7XG4gICAgdHlwZTogMTYsXG4gICAgZmxhZ3M6IDAsXG4gICAgbnVtYmVyOiA1MFxuICB9XG5dLCB2YyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEud2lkdGggPiBBLmhlaWdodCA/IG5ldyB2QShBLmxlZnQgKyAoQS53aWR0aCAtIEEuaGVpZ2h0KSAvIDIsIEEudG9wLCBBLmhlaWdodCwgQS5oZWlnaHQpIDogQS53aWR0aCA8IEEuaGVpZ2h0ID8gbmV3IHZBKEEubGVmdCwgQS50b3AgKyAoQS5oZWlnaHQgLSBBLndpZHRoKSAvIDIsIEEud2lkdGgsIEEud2lkdGgpIDogQTtcbn0sIEljID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IEEudHlwZSA9PT0gbWMgPyBuZXcgQXJyYXkoQS52YWx1ZS5sZW5ndGggKyAxKS5qb2luKFwi4oCiXCIpIDogQS52YWx1ZTtcbiAgcmV0dXJuIGUubGVuZ3RoID09PSAwID8gQS5wbGFjZWhvbGRlciB8fCBcIlwiIDogZTtcbn0sIHN0ID0gXCJjaGVja2JveFwiLCBCdCA9IFwicmFkaW9cIiwgbWMgPSBcInBhc3N3b3JkXCIsIFVuID0gNzA3NDA2NTkxLCBIciA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbihBKSB7XG4gICAgZ0EoZSwgQSk7XG4gICAgZnVuY3Rpb24gZSh0LCByKSB7XG4gICAgICB2YXIgbiA9IEEuY2FsbCh0aGlzLCB0LCByKSB8fCB0aGlzO1xuICAgICAgc3dpdGNoIChuLnR5cGUgPSByLnR5cGUudG9Mb3dlckNhc2UoKSwgbi5jaGVja2VkID0gci5jaGVja2VkLCBuLnZhbHVlID0gSWMociksIChuLnR5cGUgPT09IHN0IHx8IG4udHlwZSA9PT0gQnQpICYmIChuLnN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgPSAzNzM5MTQ4MDMxLCBuLnN0eWxlcy5ib3JkZXJUb3BDb2xvciA9IG4uc3R5bGVzLmJvcmRlclJpZ2h0Q29sb3IgPSBuLnN0eWxlcy5ib3JkZXJCb3R0b21Db2xvciA9IG4uc3R5bGVzLmJvcmRlckxlZnRDb2xvciA9IDI3NzkwOTY1NzUsIG4uc3R5bGVzLmJvcmRlclRvcFdpZHRoID0gbi5zdHlsZXMuYm9yZGVyUmlnaHRXaWR0aCA9IG4uc3R5bGVzLmJvcmRlckJvdHRvbVdpZHRoID0gbi5zdHlsZXMuYm9yZGVyTGVmdFdpZHRoID0gMSwgbi5zdHlsZXMuYm9yZGVyVG9wU3R5bGUgPSBuLnN0eWxlcy5ib3JkZXJSaWdodFN0eWxlID0gbi5zdHlsZXMuYm9yZGVyQm90dG9tU3R5bGUgPSBuLnN0eWxlcy5ib3JkZXJMZWZ0U3R5bGUgPSAxLCBuLnN0eWxlcy5iYWNrZ3JvdW5kQ2xpcCA9IFtcbiAgICAgICAgMFxuICAgICAgICAvKiBCT1JERVJfQk9YICovXG4gICAgICBdLCBuLnN0eWxlcy5iYWNrZ3JvdW5kT3JpZ2luID0gW1xuICAgICAgICAwXG4gICAgICAgIC8qIEJPUkRFUl9CT1ggKi9cbiAgICAgIF0sIG4uYm91bmRzID0gdmMobi5ib3VuZHMpKSwgbi50eXBlKSB7XG4gICAgICAgIGNhc2Ugc3Q6XG4gICAgICAgICAgbi5zdHlsZXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBuLnN0eWxlcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gbi5zdHlsZXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBuLnN0eWxlcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gRWM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQnQ6XG4gICAgICAgICAgbi5zdHlsZXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBuLnN0eWxlcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gbi5zdHlsZXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBuLnN0eWxlcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gSGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0oRkEpXG4pLCBFcyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbihBKSB7XG4gICAgZ0EoZSwgQSk7XG4gICAgZnVuY3Rpb24gZSh0LCByKSB7XG4gICAgICB2YXIgbiA9IEEuY2FsbCh0aGlzLCB0LCByKSB8fCB0aGlzLCBzID0gci5vcHRpb25zW3Iuc2VsZWN0ZWRJbmRleCB8fCAwXTtcbiAgICAgIHJldHVybiBuLnZhbHVlID0gcyAmJiBzLnRleHQgfHwgXCJcIiwgbjtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0oRkEpXG4pLCBIcyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbihBKSB7XG4gICAgZ0EoZSwgQSk7XG4gICAgZnVuY3Rpb24gZSh0LCByKSB7XG4gICAgICB2YXIgbiA9IEEuY2FsbCh0aGlzLCB0LCByKSB8fCB0aGlzO1xuICAgICAgcmV0dXJuIG4udmFsdWUgPSByLnZhbHVlLCBuO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfShGQSlcbiksIHZzID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKEEpIHtcbiAgICBnQShlLCBBKTtcbiAgICBmdW5jdGlvbiBlKHQsIHIpIHtcbiAgICAgIHZhciBuID0gQS5jYWxsKHRoaXMsIHQsIHIpIHx8IHRoaXM7XG4gICAgICBuLnNyYyA9IHIuc3JjLCBuLndpZHRoID0gcGFyc2VJbnQoci53aWR0aCwgMTApIHx8IDAsIG4uaGVpZ2h0ID0gcGFyc2VJbnQoci5oZWlnaHQsIDEwKSB8fCAwLCBuLmJhY2tncm91bmRDb2xvciA9IG4uc3R5bGVzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyLmNvbnRlbnRXaW5kb3cgJiYgci5jb250ZW50V2luZG93LmRvY3VtZW50ICYmIHIuY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBuLnRyZWUgPSBtcyh0LCByLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgICB2YXIgcyA9IHIuY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBVZSh0LCBnZXRDb21wdXRlZFN0eWxlKHIuY29udGVudFdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmJhY2tncm91bmRDb2xvcikgOiBIQS5UUkFOU1BBUkVOVCwgQiA9IHIuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5ID8gVWUodCwgZ2V0Q29tcHV0ZWRTdHlsZShyLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yKSA6IEhBLlRSQU5TUEFSRU5UO1xuICAgICAgICAgIG4uYmFja2dyb3VuZENvbG9yID0gVEEocykgPyBUQShCKSA/IG4uc3R5bGVzLmJhY2tncm91bmRDb2xvciA6IEIgOiBzO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfShGQSlcbiksIHljID0gW1wiT0xcIiwgXCJVTFwiLCBcIk1FTlVcIl0sIEF0ID0gZnVuY3Rpb24oQSwgZSwgdCwgcikge1xuICBmb3IgKHZhciBuID0gZS5maXJzdENoaWxkLCBzID0gdm9pZCAwOyBuOyBuID0gcylcbiAgICBpZiAocyA9IG4ubmV4dFNpYmxpbmcsIHlzKG4pICYmIG4uZGF0YS50cmltKCkubGVuZ3RoID4gMClcbiAgICAgIHQudGV4dE5vZGVzLnB1c2gobmV3IEZjKEEsIG4sIHQuc3R5bGVzKSk7XG4gICAgZWxzZSBpZiAoQWUobikpXG4gICAgICBpZiAoeHMobikgJiYgbi5hc3NpZ25lZE5vZGVzKVxuICAgICAgICBuLmFzc2lnbmVkTm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICByZXR1cm4gQXQoQSwgaSwgdCwgcik7XG4gICAgICAgIH0pO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBCID0gSXMoQSwgbik7XG4gICAgICAgIEIuc3R5bGVzLmlzVmlzaWJsZSgpICYmIChMYyhuLCBCLCByKSA/IEIuZmxhZ3MgfD0gNCA6IEtjKEIuc3R5bGVzKSAmJiAoQi5mbGFncyB8PSAyKSwgeWMuaW5kZXhPZihuLnRhZ05hbWUpICE9PSAtMSAmJiAoQi5mbGFncyB8PSA4KSwgdC5lbGVtZW50cy5wdXNoKEIpLCBuLnNsb3QsIG4uc2hhZG93Um9vdCA/IEF0KEEsIG4uc2hhZG93Um9vdCwgQiwgcikgOiAhaXQobikgJiYgIUxzKG4pICYmICFhdChuKSAmJiBBdChBLCBuLCBCLCByKSk7XG4gICAgICB9XG59LCBJcyA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIHdyKGUpID8gbmV3IEZzKEEsIGUpIDogS3MoZSkgPyBuZXcgaHMoQSwgZSkgOiBMcyhlKSA/IG5ldyBkcyhBLCBlKSA6IGJjKGUpID8gbmV3IHBzKEEsIGUpIDogeGMoZSkgPyBuZXcgZ3IoQSwgZSkgOiBEYyhlKSA/IG5ldyBIcihBLCBlKSA6IGF0KGUpID8gbmV3IEVzKEEsIGUpIDogaXQoZSkgPyBuZXcgSHMoQSwgZSkgOiBicyhlKSA/IG5ldyB2cyhBLCBlKSA6IG5ldyBGQShBLCBlKTtcbn0sIG1zID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IElzKEEsIGUpO1xuICByZXR1cm4gdC5mbGFncyB8PSA0LCBBdChBLCBlLCB0LCB0KSwgdDtcbn0sIExjID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICByZXR1cm4gZS5zdHlsZXMuaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHx8IGUuc3R5bGVzLm9wYWNpdHkgPCAxIHx8IGUuc3R5bGVzLmlzVHJhbnNmb3JtZWQoKSB8fCB2cihBKSAmJiB0LnN0eWxlcy5pc1RyYW5zcGFyZW50KCk7XG59LCBLYyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEuaXNQb3NpdGlvbmVkKCkgfHwgQS5pc0Zsb2F0aW5nKCk7XG59LCB5cyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xufSwgQWUgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcbn0sIHVyID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQWUoQSkgJiYgdHlwZW9mIEEuc3R5bGUgPCBcInVcIiAmJiAhZXQoQSk7XG59LCBldCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIHR5cGVvZiBBLmNsYXNzTmFtZSA9PSBcIm9iamVjdFwiO1xufSwgYmMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwiTElcIjtcbn0sIHhjID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50YWdOYW1lID09PSBcIk9MXCI7XG59LCBEYyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudGFnTmFtZSA9PT0gXCJJTlBVVFwiO1xufSwgU2MgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwiSFRNTFwiO1xufSwgTHMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwic3ZnXCI7XG59LCB2ciA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudGFnTmFtZSA9PT0gXCJCT0RZXCI7XG59LCBLcyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudGFnTmFtZSA9PT0gXCJDQU5WQVNcIjtcbn0sIEZuID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50YWdOYW1lID09PSBcIlZJREVPXCI7XG59LCB3ciA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudGFnTmFtZSA9PT0gXCJJTUdcIjtcbn0sIGJzID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50YWdOYW1lID09PSBcIklGUkFNRVwiO1xufSwgaG4gPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwiU1RZTEVcIjtcbn0sIFRjID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50YWdOYW1lID09PSBcIlNDUklQVFwiO1xufSwgaXQgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIjtcbn0sIGF0ID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50YWdOYW1lID09PSBcIlNFTEVDVFwiO1xufSwgeHMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUgPT09IFwiU0xPVFwiO1xufSwgZG4gPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnRhZ05hbWUuaW5kZXhPZihcIi1cIikgPiAwO1xufSwgTWMgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQSgpIHtcbiAgICAgIHRoaXMuY291bnRlcnMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIEEucHJvdG90eXBlLmdldENvdW50ZXJWYWx1ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5jb3VudGVyc1tlXTtcbiAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID8gdFt0Lmxlbmd0aCAtIDFdIDogMTtcbiAgICB9LCBBLnByb3RvdHlwZS5nZXRDb3VudGVyVmFsdWVzID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLmNvdW50ZXJzW2VdO1xuICAgICAgcmV0dXJuIHQgfHwgW107XG4gICAgfSwgQS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgZS5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuIHQuY291bnRlcnNbcl0ucG9wKCk7XG4gICAgICB9KTtcbiAgICB9LCBBLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcywgciA9IGUuY291bnRlckluY3JlbWVudCwgbiA9IGUuY291bnRlclJlc2V0LCBzID0gITA7XG4gICAgICByICE9PSBudWxsICYmIHIuZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciBhID0gdC5jb3VudGVyc1tpLmNvdW50ZXJdO1xuICAgICAgICBhICYmIGkuaW5jcmVtZW50ICE9PSAwICYmIChzID0gITEsIGEubGVuZ3RoIHx8IGEucHVzaCgxKSwgYVtNYXRoLm1heCgwLCBhLmxlbmd0aCAtIDEpXSArPSBpLmluY3JlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBCID0gW107XG4gICAgICByZXR1cm4gcyAmJiBuLmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgYSA9IHQuY291bnRlcnNbaS5jb3VudGVyXTtcbiAgICAgICAgQi5wdXNoKGkuY291bnRlciksIGEgfHwgKGEgPSB0LmNvdW50ZXJzW2kuY291bnRlcl0gPSBbXSksIGEucHVzaChpLnJlc2V0KTtcbiAgICAgIH0pLCBCO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgcG4gPSB7XG4gIGludGVnZXJzOiBbMWUzLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXSxcbiAgdmFsdWVzOiBbXCJNXCIsIFwiQ01cIiwgXCJEXCIsIFwiQ0RcIiwgXCJDXCIsIFwiWENcIiwgXCJMXCIsIFwiWExcIiwgXCJYXCIsIFwiSVhcIiwgXCJWXCIsIFwiSVZcIiwgXCJJXCJdXG59LCBFbiA9IHtcbiAgaW50ZWdlcnM6IFtcbiAgICA5ZTMsXG4gICAgOGUzLFxuICAgIDdlMyxcbiAgICA2ZTMsXG4gICAgNWUzLFxuICAgIDRlMyxcbiAgICAzZTMsXG4gICAgMmUzLFxuICAgIDFlMyxcbiAgICA5MDAsXG4gICAgODAwLFxuICAgIDcwMCxcbiAgICA2MDAsXG4gICAgNTAwLFxuICAgIDQwMCxcbiAgICAzMDAsXG4gICAgMjAwLFxuICAgIDEwMCxcbiAgICA5MCxcbiAgICA4MCxcbiAgICA3MCxcbiAgICA2MCxcbiAgICA1MCxcbiAgICA0MCxcbiAgICAzMCxcbiAgICAyMCxcbiAgICAxMCxcbiAgICA5LFxuICAgIDgsXG4gICAgNyxcbiAgICA2LFxuICAgIDUsXG4gICAgNCxcbiAgICAzLFxuICAgIDIsXG4gICAgMVxuICBdLFxuICB2YWx1ZXM6IFtcbiAgICBcItWUXCIsXG4gICAgXCLVk1wiLFxuICAgIFwi1ZJcIixcbiAgICBcItWRXCIsXG4gICAgXCLVkFwiLFxuICAgIFwi1Y9cIixcbiAgICBcItWOXCIsXG4gICAgXCLVjVwiLFxuICAgIFwi1YxcIixcbiAgICBcItWLXCIsXG4gICAgXCLVilwiLFxuICAgIFwi1YlcIixcbiAgICBcItWIXCIsXG4gICAgXCLVh1wiLFxuICAgIFwi1YZcIixcbiAgICBcItWFXCIsXG4gICAgXCLVhFwiLFxuICAgIFwi1YNcIixcbiAgICBcItWCXCIsXG4gICAgXCLVgVwiLFxuICAgIFwi1YBcIixcbiAgICBcItS/XCIsXG4gICAgXCLUvlwiLFxuICAgIFwi1L1cIixcbiAgICBcItS8XCIsXG4gICAgXCLUu1wiLFxuICAgIFwi1LpcIixcbiAgICBcItS5XCIsXG4gICAgXCLUuFwiLFxuICAgIFwi1LdcIixcbiAgICBcItS2XCIsXG4gICAgXCLUtVwiLFxuICAgIFwi1LRcIixcbiAgICBcItSzXCIsXG4gICAgXCLUslwiLFxuICAgIFwi1LFcIlxuICBdXG59LCBPYyA9IHtcbiAgaW50ZWdlcnM6IFtcbiAgICAxZTQsXG4gICAgOWUzLFxuICAgIDhlMyxcbiAgICA3ZTMsXG4gICAgNmUzLFxuICAgIDVlMyxcbiAgICA0ZTMsXG4gICAgM2UzLFxuICAgIDJlMyxcbiAgICAxZTMsXG4gICAgNDAwLFxuICAgIDMwMCxcbiAgICAyMDAsXG4gICAgMTAwLFxuICAgIDkwLFxuICAgIDgwLFxuICAgIDcwLFxuICAgIDYwLFxuICAgIDUwLFxuICAgIDQwLFxuICAgIDMwLFxuICAgIDIwLFxuICAgIDE5LFxuICAgIDE4LFxuICAgIDE3LFxuICAgIDE2LFxuICAgIDE1LFxuICAgIDEwLFxuICAgIDksXG4gICAgOCxcbiAgICA3LFxuICAgIDYsXG4gICAgNSxcbiAgICA0LFxuICAgIDMsXG4gICAgMixcbiAgICAxXG4gIF0sXG4gIHZhbHVlczogW1xuICAgIFwi15nXs1wiLFxuICAgIFwi15jXs1wiLFxuICAgIFwi15fXs1wiLFxuICAgIFwi15bXs1wiLFxuICAgIFwi15XXs1wiLFxuICAgIFwi15TXs1wiLFxuICAgIFwi15PXs1wiLFxuICAgIFwi15LXs1wiLFxuICAgIFwi15HXs1wiLFxuICAgIFwi15DXs1wiLFxuICAgIFwi16pcIixcbiAgICBcItepXCIsXG4gICAgXCLXqFwiLFxuICAgIFwi16dcIixcbiAgICBcItemXCIsXG4gICAgXCLXpFwiLFxuICAgIFwi16JcIixcbiAgICBcItehXCIsXG4gICAgXCLXoFwiLFxuICAgIFwi155cIixcbiAgICBcItecXCIsXG4gICAgXCLXm1wiLFxuICAgIFwi15nXmFwiLFxuICAgIFwi15nXl1wiLFxuICAgIFwi15nXllwiLFxuICAgIFwi15jXllwiLFxuICAgIFwi15jXlVwiLFxuICAgIFwi15lcIixcbiAgICBcIteYXCIsXG4gICAgXCLXl1wiLFxuICAgIFwi15ZcIixcbiAgICBcIteVXCIsXG4gICAgXCLXlFwiLFxuICAgIFwi15NcIixcbiAgICBcIteSXCIsXG4gICAgXCLXkVwiLFxuICAgIFwi15BcIlxuICBdXG59LCBSYyA9IHtcbiAgaW50ZWdlcnM6IFtcbiAgICAxZTQsXG4gICAgOWUzLFxuICAgIDhlMyxcbiAgICA3ZTMsXG4gICAgNmUzLFxuICAgIDVlMyxcbiAgICA0ZTMsXG4gICAgM2UzLFxuICAgIDJlMyxcbiAgICAxZTMsXG4gICAgOTAwLFxuICAgIDgwMCxcbiAgICA3MDAsXG4gICAgNjAwLFxuICAgIDUwMCxcbiAgICA0MDAsXG4gICAgMzAwLFxuICAgIDIwMCxcbiAgICAxMDAsXG4gICAgOTAsXG4gICAgODAsXG4gICAgNzAsXG4gICAgNjAsXG4gICAgNTAsXG4gICAgNDAsXG4gICAgMzAsXG4gICAgMjAsXG4gICAgMTAsXG4gICAgOSxcbiAgICA4LFxuICAgIDcsXG4gICAgNixcbiAgICA1LFxuICAgIDQsXG4gICAgMyxcbiAgICAyLFxuICAgIDFcbiAgXSxcbiAgdmFsdWVzOiBbXG4gICAgXCLhg7VcIixcbiAgICBcIuGDsFwiLFxuICAgIFwi4YOvXCIsXG4gICAgXCLhg7RcIixcbiAgICBcIuGDrlwiLFxuICAgIFwi4YOtXCIsXG4gICAgXCLhg6xcIixcbiAgICBcIuGDq1wiLFxuICAgIFwi4YOqXCIsXG4gICAgXCLhg6lcIixcbiAgICBcIuGDqFwiLFxuICAgIFwi4YOnXCIsXG4gICAgXCLhg6ZcIixcbiAgICBcIuGDpVwiLFxuICAgIFwi4YOkXCIsXG4gICAgXCLhg7NcIixcbiAgICBcIuGDolwiLFxuICAgIFwi4YOhXCIsXG4gICAgXCLhg6BcIixcbiAgICBcIuGDn1wiLFxuICAgIFwi4YOeXCIsXG4gICAgXCLhg51cIixcbiAgICBcIuGDslwiLFxuICAgIFwi4YOcXCIsXG4gICAgXCLhg5tcIixcbiAgICBcIuGDmlwiLFxuICAgIFwi4YOZXCIsXG4gICAgXCLhg5hcIixcbiAgICBcIuGDl1wiLFxuICAgIFwi4YOxXCIsXG4gICAgXCLhg5ZcIixcbiAgICBcIuGDlVwiLFxuICAgIFwi4YOUXCIsXG4gICAgXCLhg5NcIixcbiAgICBcIuGDklwiLFxuICAgIFwi4YORXCIsXG4gICAgXCLhg5BcIlxuICBdXG59LCBXQSA9IGZ1bmN0aW9uKEEsIGUsIHQsIHIsIG4sIHMpIHtcbiAgcmV0dXJuIEEgPCBlIHx8IEEgPiB0ID8gSGUoQSwgbiwgcy5sZW5ndGggPiAwKSA6IHIuaW50ZWdlcnMucmVkdWNlKGZ1bmN0aW9uKEIsIGksIGEpIHtcbiAgICBmb3IgKDsgQSA+PSBpOyApXG4gICAgICBBIC09IGksIEIgKz0gci52YWx1ZXNbYV07XG4gICAgcmV0dXJuIEI7XG4gIH0sIFwiXCIpICsgcztcbn0sIERzID0gZnVuY3Rpb24oQSwgZSwgdCwgcikge1xuICB2YXIgbiA9IFwiXCI7XG4gIGRvXG4gICAgdCB8fCBBLS0sIG4gPSByKEEpICsgbiwgQSAvPSBlO1xuICB3aGlsZSAoQSAqIGUgPj0gZSk7XG4gIHJldHVybiBuO1xufSwgUiA9IGZ1bmN0aW9uKEEsIGUsIHQsIHIsIG4pIHtcbiAgdmFyIHMgPSB0IC0gZSArIDE7XG4gIHJldHVybiAoQSA8IDAgPyBcIi1cIiA6IFwiXCIpICsgKERzKE1hdGguYWJzKEEpLCBzLCByLCBmdW5jdGlvbihCKSB7XG4gICAgcmV0dXJuIEcoTWF0aC5mbG9vcihCICUgcykgKyBlKTtcbiAgfSkgKyBuKTtcbn0sIFJBID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB0ID09PSB2b2lkIDAgJiYgKHQgPSBcIi4gXCIpO1xuICB2YXIgciA9IGUubGVuZ3RoO1xuICByZXR1cm4gRHMoTWF0aC5hYnMoQSksIHIsICExLCBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGVbTWF0aC5mbG9vcihuICUgcildO1xuICB9KSArIHQ7XG59LCB6QSA9IDEsIHlBID0gMiwgTEEgPSA0LCBRZSA9IDgsIEVBID0gZnVuY3Rpb24oQSwgZSwgdCwgciwgbiwgcykge1xuICBpZiAoQSA8IC05OTk5IHx8IEEgPiA5OTk5KVxuICAgIHJldHVybiBIZShBLCA0LCBuLmxlbmd0aCA+IDApO1xuICB2YXIgQiA9IE1hdGguYWJzKEEpLCBpID0gbjtcbiAgaWYgKEIgPT09IDApXG4gICAgcmV0dXJuIGVbMF0gKyBpO1xuICBmb3IgKHZhciBhID0gMDsgQiA+IDAgJiYgYSA8PSA0OyBhKyspIHtcbiAgICB2YXIgbyA9IEIgJSAxMDtcbiAgICBvID09PSAwICYmIF8ocywgekEpICYmIGkgIT09IFwiXCIgPyBpID0gZVtvXSArIGkgOiBvID4gMSB8fCBvID09PSAxICYmIGEgPT09IDAgfHwgbyA9PT0gMSAmJiBhID09PSAxICYmIF8ocywgeUEpIHx8IG8gPT09IDEgJiYgYSA9PT0gMSAmJiBfKHMsIExBKSAmJiBBID4gMTAwIHx8IG8gPT09IDEgJiYgYSA+IDEgJiYgXyhzLCBRZSkgPyBpID0gZVtvXSArIChhID4gMCA/IHRbYSAtIDFdIDogXCJcIikgKyBpIDogbyA9PT0gMSAmJiBhID4gMCAmJiAoaSA9IHRbYSAtIDFdICsgaSksIEIgPSBNYXRoLmZsb29yKEIgLyAxMCk7XG4gIH1cbiAgcmV0dXJuIChBIDwgMCA/IHIgOiBcIlwiKSArIGk7XG59LCBIbiA9IFwi5Y2B55m+5Y2D6JCsXCIsIHZuID0gXCLmi77kvbDku5/okKxcIiwgSW4gPSBcIuODnuOCpOODiuOCuVwiLCBrdCA9IFwi66eI7J2064SI7IqkXCIsIEhlID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB2YXIgciA9IHQgPyBcIi4gXCIgOiBcIlwiLCBuID0gdCA/IFwi44CBXCIgOiBcIlwiLCBzID0gdCA/IFwiLCBcIiA6IFwiXCIsIEIgPSB0ID8gXCIgXCIgOiBcIlwiO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gXCLigKJcIiArIEI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwi4pemXCIgKyBCO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIuKXvlwiICsgQjtcbiAgICBjYXNlIDU6XG4gICAgICB2YXIgaSA9IFIoQSwgNDgsIDU3LCAhMCwgcik7XG4gICAgICByZXR1cm4gaS5sZW5ndGggPCA0ID8gXCIwXCIgKyBpIDogaTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gUkEoQSwgXCLjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ1cIiwgbik7XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIFdBKEEsIDEsIDM5OTksIHBuLCAzLCByKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBXQShBLCAxLCAzOTk5LCBwbiwgMywgcik7XG4gICAgY2FzZSA4OlxuICAgICAgcmV0dXJuIFIoQSwgOTQ1LCA5NjksICExLCByKTtcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gUihBLCA5NywgMTIyLCAhMSwgcik7XG4gICAgY2FzZSAxMDpcbiAgICAgIHJldHVybiBSKEEsIDY1LCA5MCwgITEsIHIpO1xuICAgIGNhc2UgMTE6XG4gICAgICByZXR1cm4gUihBLCAxNjMyLCAxNjQxLCAhMCwgcik7XG4gICAgY2FzZSAxMjpcbiAgICBjYXNlIDQ5OlxuICAgICAgcmV0dXJuIFdBKEEsIDEsIDk5OTksIEVuLCAzLCByKTtcbiAgICBjYXNlIDM1OlxuICAgICAgcmV0dXJuIFdBKEEsIDEsIDk5OTksIEVuLCAzLCByKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhc2UgMTM6XG4gICAgICByZXR1cm4gUihBLCAyNTM0LCAyNTQzLCAhMCwgcik7XG4gICAgY2FzZSAxNDpcbiAgICBjYXNlIDMwOlxuICAgICAgcmV0dXJuIFIoQSwgNjExMiwgNjEyMSwgITAsIHIpO1xuICAgIGNhc2UgMTU6XG4gICAgICByZXR1cm4gUkEoQSwgXCLlrZDkuJHlr4Xlja/ovrDlt7PljYjmnKrnlLPphYnmiIzkuqVcIiwgbik7XG4gICAgY2FzZSAxNjpcbiAgICAgIHJldHVybiBSQShBLCBcIueUsuS5meS4meS4geaIiuW3seW6mui+m+WjrOeZuFwiLCBuKTtcbiAgICBjYXNlIDE3OlxuICAgIGNhc2UgNDg6XG4gICAgICByZXR1cm4gRUEoQSwgXCLpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ1cIiwgSG4sIFwi6LKgXCIsIG4sIHlBIHwgTEEgfCBRZSk7XG4gICAgY2FzZSA0NzpcbiAgICAgIHJldHVybiBFQShBLCBcIumbtuWjueiys+WPg+iChuS8jemZuOafkuaNjOeOllwiLCB2biwgXCLosqBcIiwgbiwgekEgfCB5QSB8IExBIHwgUWUpO1xuICAgIGNhc2UgNDI6XG4gICAgICByZXR1cm4gRUEoQSwgXCLpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ1cIiwgSG4sIFwi6LSfXCIsIG4sIHlBIHwgTEEgfCBRZSk7XG4gICAgY2FzZSA0MTpcbiAgICAgIHJldHVybiBFQShBLCBcIumbtuWjuei0sOWPgeiChuS8jemZhuafkuaNjOeOllwiLCB2biwgXCLotJ9cIiwgbiwgekEgfCB5QSB8IExBIHwgUWUpO1xuICAgIGNhc2UgMjY6XG4gICAgICByZXR1cm4gRUEoQSwgXCLjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ1cIiwgXCLljYHnmb7ljYPkuIdcIiwgSW4sIG4sIDApO1xuICAgIGNhc2UgMjU6XG4gICAgICByZXR1cm4gRUEoQSwgXCLpm7blo7HlvJDlj4Llm5vkvI3lha3kuIPlhavkuZ1cIiwgXCLmi77nmb7ljYPkuIdcIiwgSW4sIG4sIHpBIHwgeUEgfCBMQSk7XG4gICAgY2FzZSAzMTpcbiAgICAgIHJldHVybiBFQShBLCBcIuyYgeydvOydtOyCvOyCrOyYpOycoey5oO2MlOq1rFwiLCBcIuyLreuwseyynOunjFwiLCBrdCwgcywgekEgfCB5QSB8IExBKTtcbiAgICBjYXNlIDMzOlxuICAgICAgcmV0dXJuIEVBKEEsIFwi6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdXCIsIFwi5Y2B55m+5Y2D6JCsXCIsIGt0LCBzLCAwKTtcbiAgICBjYXNlIDMyOlxuICAgICAgcmV0dXJuIEVBKEEsIFwi6Zu25aO56LKz5Y+D5Zub5LqU5YWt5LiD5YWr5LmdXCIsIFwi5ou+55m+5Y2DXCIsIGt0LCBzLCB6QSB8IHlBIHwgTEEpO1xuICAgIGNhc2UgMTg6XG4gICAgICByZXR1cm4gUihBLCAyNDA2LCAyNDE1LCAhMCwgcik7XG4gICAgY2FzZSAyMDpcbiAgICAgIHJldHVybiBXQShBLCAxLCAxOTk5OSwgUmMsIDMsIHIpO1xuICAgIGNhc2UgMjE6XG4gICAgICByZXR1cm4gUihBLCAyNzkwLCAyNzk5LCAhMCwgcik7XG4gICAgY2FzZSAyMjpcbiAgICAgIHJldHVybiBSKEEsIDI2NjIsIDI2NzEsICEwLCByKTtcbiAgICBjYXNlIDIyOlxuICAgICAgcmV0dXJuIFdBKEEsIDEsIDEwOTk5LCBPYywgMywgcik7XG4gICAgY2FzZSAyMzpcbiAgICAgIHJldHVybiBSQShBLCBcIuOBguOBhOOBhuOBiOOBiuOBi+OBjeOBj+OBkeOBk+OBleOBl+OBmeOBm+OBneOBn+OBoeOBpOOBpuOBqOOBquOBq+OBrOOBreOBruOBr+OBsuOBteOBuOOBu+OBvuOBv+OCgOOCgeOCguOChOOChuOCiOOCieOCiuOCi+OCjOOCjeOCj+OCkOOCkeOCkuOCk1wiKTtcbiAgICBjYXNlIDI0OlxuICAgICAgcmV0dXJuIFJBKEEsIFwi44GE44KN44Gv44Gr44G744G444Go44Gh44KK44Gs44KL44KS44KP44GL44KI44Gf44KM44Gd44Gk44Gt44Gq44KJ44KA44GG44KQ44Gu44GK44GP44KE44G+44GR44G144GT44GI44Gm44GC44GV44GN44KG44KB44G/44GX44KR44Gy44KC44Gb44GZXCIpO1xuICAgIGNhc2UgMjc6XG4gICAgICByZXR1cm4gUihBLCAzMzAyLCAzMzExLCAhMCwgcik7XG4gICAgY2FzZSAyODpcbiAgICAgIHJldHVybiBSQShBLCBcIuOCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCs+OCteOCt+OCueOCu+OCveOCv+ODgeODhOODhuODiOODiuODi+ODjOODjeODjuODj+ODkuODleODmOODm+ODnuODn+ODoOODoeODouODpOODpuODqOODqeODquODq+ODrOODreODr+ODsOODseODsuODs1wiLCBuKTtcbiAgICBjYXNlIDI5OlxuICAgICAgcmV0dXJuIFJBKEEsIFwi44Kk44Ot44OP44OL44Ob44OY44OI44OB44Oq44OM44Or44Oy44Ov44Kr44Oo44K/44Os44K944OE44ON44OK44Op44Og44Km44Ow44OO44Kq44Kv44Ok44Oe44Kx44OV44Kz44Ko44OG44Ki44K144Kt44Om44Oh44Of44K344Ox44OS44Oi44K744K5XCIsIG4pO1xuICAgIGNhc2UgMzQ6XG4gICAgICByZXR1cm4gUihBLCAzNzkyLCAzODAxLCAhMCwgcik7XG4gICAgY2FzZSAzNzpcbiAgICAgIHJldHVybiBSKEEsIDYxNjAsIDYxNjksICEwLCByKTtcbiAgICBjYXNlIDM4OlxuICAgICAgcmV0dXJuIFIoQSwgNDE2MCwgNDE2OSwgITAsIHIpO1xuICAgIGNhc2UgMzk6XG4gICAgICByZXR1cm4gUihBLCAyOTE4LCAyOTI3LCAhMCwgcik7XG4gICAgY2FzZSA0MDpcbiAgICAgIHJldHVybiBSKEEsIDE3NzYsIDE3ODUsICEwLCByKTtcbiAgICBjYXNlIDQzOlxuICAgICAgcmV0dXJuIFIoQSwgMzA0NiwgMzA1NSwgITAsIHIpO1xuICAgIGNhc2UgNDQ6XG4gICAgICByZXR1cm4gUihBLCAzMTc0LCAzMTgzLCAhMCwgcik7XG4gICAgY2FzZSA0NTpcbiAgICAgIHJldHVybiBSKEEsIDM2NjQsIDM2NzMsICEwLCByKTtcbiAgICBjYXNlIDQ2OlxuICAgICAgcmV0dXJuIFIoQSwgMzg3MiwgMzg4MSwgITAsIHIpO1xuICAgIGNhc2UgMzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFIoQSwgNDgsIDU3LCAhMCwgcik7XG4gIH1cbn0sIFNzID0gXCJkYXRhLWh0bWwyY2FudmFzLWlnbm9yZVwiLCBtbiA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKGUsIHQsIHIpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHQgPSBlLCB0aGlzLm9wdGlvbnMgPSByLCB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSBbXSwgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gdCwgdGhpcy5jb3VudGVycyA9IG5ldyBNYygpLCB0aGlzLnF1b3RlRGVwdGggPSAwLCAhdC5vd25lckRvY3VtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbG9uZWQgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGFuIG93bmVyIGRvY3VtZW50XCIpO1xuICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSB0aGlzLmNsb25lTm9kZSh0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAhMSk7XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS50b0lGcmFtZSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHZhciByID0gdGhpcywgbiA9IEdjKGUsIHQpO1xuICAgICAgaWYgKCFuLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlVuYWJsZSB0byBmaW5kIGlmcmFtZSB3aW5kb3dcIik7XG4gICAgICB2YXIgcyA9IGUuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsIEIgPSBlLmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0LCBpID0gbi5jb250ZW50V2luZG93LCBhID0gaS5kb2N1bWVudCwgbyA9IFBjKG4pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBxKHIsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgYywgbDtcbiAgICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGcubGFiZWwpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbGVkRWxlbWVudHMuZm9yRWFjaChKYyksIGkgJiYgKGkuc2Nyb2xsVG8odC5sZWZ0LCB0LnRvcCksIC8oaVBhZHxpUGhvbmV8aVBvZCkvZy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIChpLnNjcm9sbFkgIT09IHQudG9wIHx8IGkuc2Nyb2xsWCAhPT0gdC5sZWZ0KSAmJiAodGhpcy5jb250ZXh0LmxvZ2dlci53YXJuKFwiVW5hYmxlIHRvIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9uIGZvciBjbG9uZWQgZG9jdW1lbnRcIiksIHRoaXMuY29udGV4dC53aW5kb3dCb3VuZHMgPSB0aGlzLmNvbnRleHQud2luZG93Qm91bmRzLmFkZChpLnNjcm9sbFggLSB0LmxlZnQsIGkuc2Nyb2xsWSAtIHQudG9wLCAwLCAwKSkpLCBjID0gdGhpcy5vcHRpb25zLm9uY2xvbmUsIGwgPSB0aGlzLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQsIHR5cGVvZiBsID4gXCJ1XCIgPyBbMiwgUHJvbWlzZS5yZWplY3QoXCJFcnJvciBmaW5kaW5nIHRoZSBcIiArIHRoaXMucmVmZXJlbmNlRWxlbWVudC5ub2RlTmFtZSArIFwiIGluIHRoZSBjbG9uZWQgZG9jdW1lbnRcIildIDogYS5mb250cyAmJiBhLmZvbnRzLnJlYWR5ID8gWzQsIGEuZm9udHMucmVhZHldIDogWzMsIDJdO1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZy5zZW50KCksIGcubGFiZWwgPSAyO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8oQXBwbGVXZWJLaXQpL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFs0LCBOYyhhKV0gOiBbMywgNF07XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBnLnNlbnQoKSwgZy5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT0gXCJmdW5jdGlvblwiID8gWzIsIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyhhLCBsKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfSldIDogWzIsIG5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGEub3BlbigpLCBhLndyaXRlKF9jKGRvY3VtZW50LmRvY3R5cGUpICsgXCI8aHRtbD48L2h0bWw+XCIpLCBYYyh0aGlzLnJlZmVyZW5jZUVsZW1lbnQub3duZXJEb2N1bWVudCwgcywgQiksIGEucmVwbGFjZUNoaWxkKGEuYWRvcHROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50KSwgYS5kb2N1bWVudEVsZW1lbnQpLCBhLmNsb3NlKCksIG87XG4gICAgfSwgQS5wcm90b3R5cGUuY3JlYXRlRWxlbWVudENsb25lID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGNyKFxuICAgICAgICBlLFxuICAgICAgICAyXG4gICAgICAgIC8qIENMT05FICovXG4gICAgICApKVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgIGlmIChLcyhlKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2FudmFzQ2xvbmUoZSk7XG4gICAgICBpZiAoRm4oZSkpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVZpZGVvQ2xvbmUoZSk7XG4gICAgICBpZiAoaG4oZSkpXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVN0eWxlQ2xvbmUoZSk7XG4gICAgICB2YXIgdCA9IGUuY2xvbmVOb2RlKCExKTtcbiAgICAgIHJldHVybiB3cih0KSAmJiAod3IoZSkgJiYgZS5jdXJyZW50U3JjICYmIGUuY3VycmVudFNyYyAhPT0gZS5zcmMgJiYgKHQuc3JjID0gZS5jdXJyZW50U3JjLCB0LnNyY3NldCA9IFwiXCIpLCB0LmxvYWRpbmcgPT09IFwibGF6eVwiICYmICh0LmxvYWRpbmcgPSBcImVhZ2VyXCIpKSwgZG4odCkgPyB0aGlzLmNyZWF0ZUN1c3RvbUVsZW1lbnRDbG9uZSh0KSA6IHQ7XG4gICAgfSwgQS5wcm90b3R5cGUuY3JlYXRlQ3VzdG9tRWxlbWVudENsb25lID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHRtbDJjYW52YXNjdXN0b21lbGVtZW50XCIpO1xuICAgICAgcmV0dXJuIF90KGUuc3R5bGUsIHQpLCB0O1xuICAgIH0sIEEucHJvdG90eXBlLmNyZWF0ZVN0eWxlQ2xvbmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdCA9IGUuc2hlZXQ7XG4gICAgICAgIGlmICh0ICYmIHQuY3NzUnVsZXMpIHtcbiAgICAgICAgICB2YXIgciA9IFtdLnNsaWNlLmNhbGwodC5jc3NSdWxlcywgMCkucmVkdWNlKGZ1bmN0aW9uKHMsIEIpIHtcbiAgICAgICAgICAgIHJldHVybiBCICYmIHR5cGVvZiBCLmNzc1RleHQgPT0gXCJzdHJpbmdcIiA/IHMgKyBCLmNzc1RleHQgOiBzO1xuICAgICAgICAgIH0sIFwiXCIpLCBuID0gZS5jbG9uZU5vZGUoITEpO1xuICAgICAgICAgIHJldHVybiBuLnRleHRDb250ZW50ID0gciwgbjtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmxvZ2dlci5lcnJvcihcIlVuYWJsZSB0byBhY2Nlc3MgY3NzUnVsZXMgcHJvcGVydHlcIiwgcyksIHMubmFtZSAhPT0gXCJTZWN1cml0eUVycm9yXCIpXG4gICAgICAgICAgdGhyb3cgcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlLmNsb25lTm9kZSghMSk7XG4gICAgfSwgQS5wcm90b3R5cGUuY3JlYXRlQ2FudmFzQ2xvbmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lSW1hZ2VzICYmIGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICB2YXIgciA9IGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiByLnNyYyA9IGUudG9EYXRhVVJMKCksIHI7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIHRoaXMuY29udGV4dC5sb2dnZXIuaW5mbyhcIlVuYWJsZSB0byBpbmxpbmUgY2FudmFzIGNvbnRlbnRzLCBjYW52YXMgaXMgdGFpbnRlZFwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG4gPSBlLmNsb25lTm9kZSghMSk7XG4gICAgICB0cnkge1xuICAgICAgICBuLndpZHRoID0gZS53aWR0aCwgbi5oZWlnaHQgPSBlLmhlaWdodDtcbiAgICAgICAgdmFyIHMgPSBlLmdldENvbnRleHQoXCIyZFwiKSwgQiA9IG4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBpZiAoQilcbiAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbGxvd1RhaW50ICYmIHMpXG4gICAgICAgICAgICBCLnB1dEltYWdlRGF0YShzLmdldEltYWdlRGF0YSgwLCAwLCBlLndpZHRoLCBlLmhlaWdodCksIDAsIDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGkgPSAodCA9IGUuZ2V0Q29udGV4dChcIndlYmdsMlwiKSkgIT09IG51bGwgJiYgdCAhPT0gdm9pZCAwID8gdCA6IGUuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBpLmdldENvbnRleHRBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgIChhID09IG51bGwgPyB2b2lkIDAgOiBhLnByZXNlcnZlRHJhd2luZ0J1ZmZlcikgPT09ICExICYmIHRoaXMuY29udGV4dC5sb2dnZXIud2FybihcIlVuYWJsZSB0byBjbG9uZSBXZWJHTCBjb250ZXh0IGFzIGl0IGhhcyBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI9ZmFsc2VcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCLmRyYXdJbWFnZShlLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5sb2dnZXIuaW5mbyhcIlVuYWJsZSB0byBjbG9uZSBjYW52YXMgYXMgaXQgaXMgdGFpbnRlZFwiLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuO1xuICAgIH0sIEEucHJvdG90eXBlLmNyZWF0ZVZpZGVvQ2xvbmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9IGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgdC53aWR0aCA9IGUub2Zmc2V0V2lkdGgsIHQuaGVpZ2h0ID0gZS5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgciA9IHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHIgJiYgKHIuZHJhd0ltYWdlKGUsIDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KSwgdGhpcy5vcHRpb25zLmFsbG93VGFpbnQgfHwgci5nZXRJbWFnZURhdGEoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpKSwgdDtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICB0aGlzLmNvbnRleHQubG9nZ2VyLmluZm8oXCJVbmFibGUgdG8gY2xvbmUgdmlkZW8gYXMgaXQgaXMgdGFpbnRlZFwiLCBlKTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICByZXR1cm4gbi53aWR0aCA9IGUub2Zmc2V0V2lkdGgsIG4uaGVpZ2h0ID0gZS5vZmZzZXRIZWlnaHQsIG47XG4gICAgfSwgQS5wcm90b3R5cGUuYXBwZW5kQ2hpbGROb2RlID0gZnVuY3Rpb24oZSwgdCwgcikge1xuICAgICAgKCFBZSh0KSB8fCAhVGModCkgJiYgIXQuaGFzQXR0cmlidXRlKFNzKSAmJiAodHlwZW9mIHRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyAhPSBcImZ1bmN0aW9uXCIgfHwgIXRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyh0KSkpICYmICghdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMgfHwgIUFlKHQpIHx8ICFobih0KSkgJiYgZS5hcHBlbmRDaGlsZCh0aGlzLmNsb25lTm9kZSh0LCByKSk7XG4gICAgfSwgQS5wcm90b3R5cGUuY2xvbmVDaGlsZE5vZGVzID0gZnVuY3Rpb24oZSwgdCwgcikge1xuICAgICAgZm9yICh2YXIgbiA9IHRoaXMsIHMgPSBlLnNoYWRvd1Jvb3QgPyBlLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCA6IGUuZmlyc3RDaGlsZDsgczsgcyA9IHMubmV4dFNpYmxpbmcpXG4gICAgICAgIGlmIChBZShzKSAmJiB4cyhzKSAmJiB0eXBlb2Ygcy5hc3NpZ25lZE5vZGVzID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHZhciBCID0gcy5hc3NpZ25lZE5vZGVzKCk7XG4gICAgICAgICAgQi5sZW5ndGggJiYgQi5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBuLmFwcGVuZENoaWxkTm9kZSh0LCBpLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZE5vZGUodCwgcywgcik7XG4gICAgfSwgQS5wcm90b3R5cGUuY2xvbmVOb2RlID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgaWYgKHlzKGUpKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZS5kYXRhKTtcbiAgICAgIGlmICghZS5vd25lckRvY3VtZW50KVxuICAgICAgICByZXR1cm4gZS5jbG9uZU5vZGUoITEpO1xuICAgICAgdmFyIHIgPSBlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICBpZiAociAmJiBBZShlKSAmJiAodXIoZSkgfHwgZXQoZSkpKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5jcmVhdGVFbGVtZW50Q2xvbmUoZSk7XG4gICAgICAgIG4uc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJub25lXCI7XG4gICAgICAgIHZhciBzID0gci5nZXRDb21wdXRlZFN0eWxlKGUpLCBCID0gci5nZXRDb21wdXRlZFN0eWxlKGUsIFwiOmJlZm9yZVwiKSwgaSA9IHIuZ2V0Q29tcHV0ZWRTdHlsZShlLCBcIjphZnRlclwiKTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID09PSBlICYmIHVyKG4pICYmICh0aGlzLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgPSBuKSwgdnIobikgJiYgWmMobik7XG4gICAgICAgIHZhciBhID0gdGhpcy5jb3VudGVycy5wYXJzZShuZXcgcm4odGhpcy5jb250ZXh0LCBzKSksIG8gPSB0aGlzLnJlc29sdmVQc2V1ZG9Db250ZW50KGUsIG4sIEIsIGRlLkJFRk9SRSk7XG4gICAgICAgIGRuKGUpICYmICh0ID0gITApLCBGbihlKSB8fCB0aGlzLmNsb25lQ2hpbGROb2RlcyhlLCBuLCB0KSwgbyAmJiBuLmluc2VydEJlZm9yZShvLCBuLmZpcnN0Q2hpbGQpO1xuICAgICAgICB2YXIgYyA9IHRoaXMucmVzb2x2ZVBzZXVkb0NvbnRlbnQoZSwgbiwgaSwgZGUuQUZURVIpO1xuICAgICAgICByZXR1cm4gYyAmJiBuLmFwcGVuZENoaWxkKGMpLCB0aGlzLmNvdW50ZXJzLnBvcChhKSwgKHMgJiYgKHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzIHx8IGV0KGUpKSAmJiAhYnMoZSkgfHwgdCkgJiYgX3QocywgbiksIChlLnNjcm9sbFRvcCAhPT0gMCB8fCBlLnNjcm9sbExlZnQgIT09IDApICYmIHRoaXMuc2Nyb2xsZWRFbGVtZW50cy5wdXNoKFtuLCBlLnNjcm9sbExlZnQsIGUuc2Nyb2xsVG9wXSksIChpdChlKSB8fCBhdChlKSkgJiYgKGl0KG4pIHx8IGF0KG4pKSAmJiAobi52YWx1ZSA9IGUudmFsdWUpLCBuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGUuY2xvbmVOb2RlKCExKTtcbiAgICB9LCBBLnByb3RvdHlwZS5yZXNvbHZlUHNldWRvQ29udGVudCA9IGZ1bmN0aW9uKGUsIHQsIHIsIG4pIHtcbiAgICAgIHZhciBzID0gdGhpcztcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBCID0gci5jb250ZW50LCBpID0gdC5vd25lckRvY3VtZW50O1xuICAgICAgICBpZiAoISghaSB8fCAhQiB8fCBCID09PSBcIm5vbmVcIiB8fCBCID09PSBcIi1tb3otYWx0LWNvbnRlbnRcIiB8fCByLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgIHRoaXMuY291bnRlcnMucGFyc2UobmV3IHJuKHRoaXMuY29udGV4dCwgcikpO1xuICAgICAgICAgIHZhciBhID0gbmV3IGJvKHRoaXMuY29udGV4dCwgciksIG8gPSBpLmNyZWF0ZUVsZW1lbnQoXCJodG1sMmNhbnZhc3BzZXVkb2VsZW1lbnRcIik7XG4gICAgICAgICAgX3QociwgbyksIGEuY29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICAgIGlmIChsLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgIG8uYXBwZW5kQ2hpbGQoaS5jcmVhdGVUZXh0Tm9kZShsLnZhbHVlKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChsLnR5cGUgPT09IDIyKSB7XG4gICAgICAgICAgICAgIHZhciBnID0gaS5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICBnLnNyYyA9IGwudmFsdWUsIGcuc3R5bGUub3BhY2l0eSA9IFwiMVwiLCBvLmFwcGVuZENoaWxkKGcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsLnR5cGUgPT09IDE4KSB7XG4gICAgICAgICAgICAgIGlmIChsLm5hbWUgPT09IFwiYXR0clwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIFUgPSBsLnZhbHVlcy5maWx0ZXIoRCk7XG4gICAgICAgICAgICAgICAgVS5sZW5ndGggJiYgby5hcHBlbmRDaGlsZChpLmNyZWF0ZVRleHROb2RlKGUuZ2V0QXR0cmlidXRlKFVbMF0udmFsdWUpIHx8IFwiXCIpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChsLm5hbWUgPT09IFwiY291bnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSBsLnZhbHVlcy5maWx0ZXIodGUpLCBmID0gd1swXSwgSSA9IHdbMV07XG4gICAgICAgICAgICAgICAgaWYgKGYgJiYgRChmKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGggPSBzLmNvdW50ZXJzLmdldENvdW50ZXJWYWx1ZShmLnZhbHVlKSwgUSA9IEkgJiYgRChJKSA/IG9yLnBhcnNlKHMuY29udGV4dCwgSS52YWx1ZSkgOiAzO1xuICAgICAgICAgICAgICAgICAgby5hcHBlbmRDaGlsZChpLmNyZWF0ZVRleHROb2RlKEhlKGgsIFEsICExKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChsLm5hbWUgPT09IFwiY291bnRlcnNcIikge1xuICAgICAgICAgICAgICAgIHZhciBMID0gbC52YWx1ZXMuZmlsdGVyKHRlKSwgZiA9IExbMF0sIEYgPSBMWzFdLCBJID0gTFsyXTtcbiAgICAgICAgICAgICAgICBpZiAoZiAmJiBEKGYpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdiA9IHMuY291bnRlcnMuZ2V0Q291bnRlclZhbHVlcyhmLnZhbHVlKSwgdSA9IEkgJiYgRChJKSA/IG9yLnBhcnNlKHMuY29udGV4dCwgSS52YWx1ZSkgOiAzLCBIID0gRiAmJiBGLnR5cGUgPT09IDAgPyBGLnZhbHVlIDogXCJcIiwgbSA9IHYubWFwKGZ1bmN0aW9uKE0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEhlKE0sIHUsICExKTtcbiAgICAgICAgICAgICAgICAgIH0pLmpvaW4oSCk7XG4gICAgICAgICAgICAgICAgICBvLmFwcGVuZENoaWxkKGkuY3JlYXRlVGV4dE5vZGUobSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsLnR5cGUgPT09IDIwKVxuICAgICAgICAgICAgICBzd2l0Y2ggKGwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwib3Blbi1xdW90ZVwiOlxuICAgICAgICAgICAgICAgICAgby5hcHBlbmRDaGlsZChpLmNyZWF0ZVRleHROb2RlKHRuKGEucXVvdGVzLCBzLnF1b3RlRGVwdGgrKywgITApKSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xvc2UtcXVvdGVcIjpcbiAgICAgICAgICAgICAgICAgIG8uYXBwZW5kQ2hpbGQoaS5jcmVhdGVUZXh0Tm9kZSh0bihhLnF1b3RlcywgLS1zLnF1b3RlRGVwdGgsICExKSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIG8uYXBwZW5kQ2hpbGQoaS5jcmVhdGVUZXh0Tm9kZShsLnZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgby5jbGFzc05hbWUgPSBRciArIFwiIFwiICsgZnI7XG4gICAgICAgICAgdmFyIGMgPSBuID09PSBkZS5CRUZPUkUgPyBcIiBcIiArIFFyIDogXCIgXCIgKyBmcjtcbiAgICAgICAgICByZXR1cm4gZXQodCkgPyB0LmNsYXNzTmFtZS5iYXNlVmFsdWUgKz0gYyA6IHQuY2xhc3NOYW1lICs9IGMsIG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBBLmRlc3Ryb3kgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gZS5wYXJlbnROb2RlID8gKGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSwgITApIDogITE7XG4gICAgfSwgQTtcbiAgfSgpXG4pLCBkZTtcbihmdW5jdGlvbihBKSB7XG4gIEFbQS5CRUZPUkUgPSAwXSA9IFwiQkVGT1JFXCIsIEFbQS5BRlRFUiA9IDFdID0gXCJBRlRFUlwiO1xufSkoZGUgfHwgKGRlID0ge30pKTtcbnZhciBHYyA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgdmFyIHQgPSBBLmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIHJldHVybiB0LmNsYXNzTmFtZSA9IFwiaHRtbDJjYW52YXMtY29udGFpbmVyXCIsIHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIHQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCIsIHQuc3R5bGUubGVmdCA9IFwiLTEwMDAwcHhcIiwgdC5zdHlsZS50b3AgPSBcIjBweFwiLCB0LnN0eWxlLmJvcmRlciA9IFwiMFwiLCB0LndpZHRoID0gZS53aWR0aC50b1N0cmluZygpLCB0LmhlaWdodCA9IGUuaGVpZ2h0LnRvU3RyaW5nKCksIHQuc2Nyb2xsaW5nID0gXCJub1wiLCB0LnNldEF0dHJpYnV0ZShTcywgXCJ0cnVlXCIpLCBBLmJvZHkuYXBwZW5kQ2hpbGQodCksIHQ7XG59LCBWYyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoQS5jb21wbGV0ZSkge1xuICAgICAgZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIUEuc3JjKSB7XG4gICAgICBlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEEub25sb2FkID0gZSwgQS5vbmVycm9yID0gZTtcbiAgfSk7XG59LCBOYyA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtdLnNsaWNlLmNhbGwoQS5pbWFnZXMsIDApLm1hcChWYykpO1xufSwgUGMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCB0KSB7XG4gICAgdmFyIHIgPSBBLmNvbnRlbnRXaW5kb3c7XG4gICAgaWYgKCFyKVxuICAgICAgcmV0dXJuIHQoXCJObyB3aW5kb3cgYXNzaWduZWQgZm9yIGlmcmFtZVwiKTtcbiAgICB2YXIgbiA9IHIuZG9jdW1lbnQ7XG4gICAgci5vbmxvYWQgPSBBLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgci5vbmxvYWQgPSBBLm9ubG9hZCA9IG51bGw7XG4gICAgICB2YXIgcyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBuLmJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPiAwICYmIG4ucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiICYmIChjbGVhckludGVydmFsKHMpLCBlKEEpKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9O1xuICB9KTtcbn0sIGtjID0gW1xuICBcImFsbFwiLFxuICBcImRcIixcbiAgXCJjb250ZW50XCJcbiAgLy8gU2FmYXJpIHNob3dzIHBzZXVkb2VsZW1lbnRzIGlmIGNvbnRlbnQgaXMgc2V0XG5dLCBfdCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgZm9yICh2YXIgdCA9IEEubGVuZ3RoIC0gMTsgdCA+PSAwOyB0LS0pIHtcbiAgICB2YXIgciA9IEEuaXRlbSh0KTtcbiAgICBrYy5pbmRleE9mKHIpID09PSAtMSAmJiBlLnN0eWxlLnNldFByb3BlcnR5KHIsIEEuZ2V0UHJvcGVydHlWYWx1ZShyKSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBfYyA9IGZ1bmN0aW9uKEEpIHtcbiAgdmFyIGUgPSBcIlwiO1xuICByZXR1cm4gQSAmJiAoZSArPSBcIjwhRE9DVFlQRSBcIiwgQS5uYW1lICYmIChlICs9IEEubmFtZSksIEEuaW50ZXJuYWxTdWJzZXQgJiYgKGUgKz0gQS5pbnRlcm5hbFN1YnNldCksIEEucHVibGljSWQgJiYgKGUgKz0gJ1wiJyArIEEucHVibGljSWQgKyAnXCInKSwgQS5zeXN0ZW1JZCAmJiAoZSArPSAnXCInICsgQS5zeXN0ZW1JZCArICdcIicpLCBlICs9IFwiPlwiKSwgZTtcbn0sIFhjID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICBBICYmIEEuZGVmYXVsdFZpZXcgJiYgKGUgIT09IEEuZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQgfHwgdCAhPT0gQS5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldCkgJiYgQS5kZWZhdWx0Vmlldy5zY3JvbGxUbyhlLCB0KTtcbn0sIEpjID0gZnVuY3Rpb24oQSkge1xuICB2YXIgZSA9IEFbMF0sIHQgPSBBWzFdLCByID0gQVsyXTtcbiAgZS5zY3JvbGxMZWZ0ID0gdCwgZS5zY3JvbGxUb3AgPSByO1xufSwgV2MgPSBcIjpiZWZvcmVcIiwgWWMgPSBcIjphZnRlclwiLCBRciA9IFwiX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2JlZm9yZVwiLCBmciA9IFwiX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2FmdGVyXCIsIHluID0gYHtcbiAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufWAsIFpjID0gZnVuY3Rpb24oQSkge1xuICBqYyhBLCBcIi5cIiArIFFyICsgV2MgKyB5biArIGBcbiAgICAgICAgIC5gICsgZnIgKyBZYyArIHluKTtcbn0sIGpjID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IEEub3duZXJEb2N1bWVudDtcbiAgaWYgKHQpIHtcbiAgICB2YXIgciA9IHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHIudGV4dENvbnRlbnQgPSBlLCBBLmFwcGVuZENoaWxkKHIpO1xuICB9XG59LCBUcyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKCkge1xuICAgIH1cbiAgICByZXR1cm4gQS5nZXRPcmlnaW4gPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9IEEuX2xpbms7XG4gICAgICByZXR1cm4gdCA/ICh0LmhyZWYgPSBlLCB0LmhyZWYgPSB0LmhyZWYsIHQucHJvdG9jb2wgKyB0Lmhvc3RuYW1lICsgdC5wb3J0KSA6IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICB9LCBBLmlzU2FtZU9yaWdpbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBBLmdldE9yaWdpbihlKSA9PT0gQS5fb3JpZ2luO1xuICAgIH0sIEEuc2V0Q29udGV4dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIEEuX2xpbmsgPSBlLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCBBLl9vcmlnaW4gPSBBLmdldE9yaWdpbihlLmxvY2F0aW9uLmhyZWYpO1xuICAgIH0sIEEuX29yaWdpbiA9IFwiYWJvdXQ6YmxhbmtcIiwgQTtcbiAgfSgpXG4pLCBxYyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKGUsIHQpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGUsIHRoaXMuX29wdGlvbnMgPSB0LCB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gQS5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGUpIHx8IChKdChlKSB8fCBlbChlKSkgJiYgKHRoaXMuX2NhY2hlW2VdID0gdGhpcy5sb2FkSW1hZ2UoZSkpLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgfSksIHQ7XG4gICAgfSwgQS5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FjaGVbZV07XG4gICAgfSwgQS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIHEodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCwgciwgbiwgcywgQiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGkubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgcmV0dXJuIHQgPSBUcy5pc1NhbWVPcmlnaW4oZSksIHIgPSAhWHQoZSkgJiYgdGhpcy5fb3B0aW9ucy51c2VDT1JTID09PSAhMCAmJiBXLlNVUFBPUlRfQ09SU19JTUFHRVMgJiYgIXQsIG4gPSAhWHQoZSkgJiYgIXQgJiYgIUp0KGUpICYmIHR5cGVvZiB0aGlzLl9vcHRpb25zLnByb3h5ID09IFwic3RyaW5nXCIgJiYgVy5TVVBQT1JUX0NPUlNfWEhSICYmICFyLCAhdCAmJiB0aGlzLl9vcHRpb25zLmFsbG93VGFpbnQgPT09ICExICYmICFYdChlKSAmJiAhSnQoZSkgJiYgIW4gJiYgIXIgPyBbXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICAgICAgXSA6IChzID0gZSwgbiA/IFs0LCB0aGlzLnByb3h5KHMpXSA6IFszLCAyXSk7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHMgPSBpLnNlbnQoKSwgaS5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQubG9nZ2VyLmRlYnVnKFwiQWRkZWQgaW1hZ2UgXCIgKyBlLnN1YnN0cmluZygwLCAyNTYpKSwgWzQsIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsIG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGMub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYShjKTtcbiAgICAgICAgICAgICAgICB9LCBjLm9uZXJyb3IgPSBvLCAodGwocykgfHwgcikgJiYgKGMuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiKSwgYy5zcmMgPSBzLCBjLmNvbXBsZXRlID09PSAhMCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEoYyk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKSwgQi5fb3B0aW9ucy5pbWFnZVRpbWVvdXQgPiAwICYmIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbyhcIlRpbWVkIG91dCAoXCIgKyBCLl9vcHRpb25zLmltYWdlVGltZW91dCArIFwibXMpIGxvYWRpbmcgaW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgfSwgQi5fb3B0aW9ucy5pbWFnZVRpbWVvdXQpO1xuICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIHJldHVybiBbMiwgaS5zZW50KCldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBBLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NhY2hlW2VdIDwgXCJ1XCI7XG4gICAgfSwgQS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShPYmplY3Qua2V5cyh0aGlzLl9jYWNoZSkpO1xuICAgIH0sIEEucHJvdG90eXBlLnByb3h5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLCByID0gdGhpcy5fb3B0aW9ucy5wcm94eTtcbiAgICAgIGlmICghcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcHJveHkgZGVmaW5lZFwiKTtcbiAgICAgIHZhciBuID0gZS5zdWJzdHJpbmcoMCwgMjU2KTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihzLCBCKSB7XG4gICAgICAgIHZhciBpID0gVy5TVVBQT1JUX1JFU1BPTlNFX1RZUEUgPyBcImJsb2JcIiA6IFwidGV4dFwiLCBhID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGEub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGEuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICBpZiAoaSA9PT0gXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgIHMoYS5yZXNwb25zZSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGwgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICBsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzKGwucmVzdWx0KTtcbiAgICAgICAgICAgICAgfSwgITEpLCBsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEIoZyk7XG4gICAgICAgICAgICAgIH0sICExKSwgbC5yZWFkQXNEYXRhVVJMKGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIEIoXCJGYWlsZWQgdG8gcHJveHkgcmVzb3VyY2UgXCIgKyBuICsgXCIgd2l0aCBzdGF0dXMgY29kZSBcIiArIGEuc3RhdHVzKTtcbiAgICAgICAgfSwgYS5vbmVycm9yID0gQjtcbiAgICAgICAgdmFyIG8gPSByLmluZGV4T2YoXCI/XCIpID4gLTEgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgICBpZiAoYS5vcGVuKFwiR0VUXCIsIFwiXCIgKyByICsgbyArIFwidXJsPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGUpICsgXCImcmVzcG9uc2VUeXBlPVwiICsgaSksIGkgIT09IFwidGV4dFwiICYmIGEgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCAmJiAoYS5yZXNwb25zZVR5cGUgPSBpKSwgdC5fb3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcbiAgICAgICAgICB2YXIgYyA9IHQuX29wdGlvbnMuaW1hZ2VUaW1lb3V0O1xuICAgICAgICAgIGEudGltZW91dCA9IGMsIGEub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gQihcIlRpbWVkIG91dCAoXCIgKyBjICsgXCJtcykgcHJveHlpbmcgXCIgKyBuKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGEuc2VuZCgpO1xuICAgICAgfSk7XG4gICAgfSwgQTtcbiAgfSgpXG4pLCB6YyA9IC9eZGF0YTppbWFnZVxcL3N2Z1xcK3htbC9pLCAkYyA9IC9eZGF0YTppbWFnZVxcLy4qO2Jhc2U2NCwvaSwgQWwgPSAvXmRhdGE6aW1hZ2VcXC8uKi9pLCBlbCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIFcuU1VQUE9SVF9TVkdfRFJBV0lORyB8fCAhcmwoQSk7XG59LCBYdCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEFsLnRlc3QoQSk7XG59LCB0bCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuICRjLnRlc3QoQSk7XG59LCBKdCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEuc3Vic3RyKDAsIDQpID09PSBcImJsb2JcIjtcbn0sIHJsID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS5zdWJzdHIoLTMpLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIgfHwgemMudGVzdChBKTtcbn0sIGQgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0KSB7XG4gICAgICB0aGlzLnR5cGUgPSAwLCB0aGlzLnggPSBlLCB0aGlzLnkgPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyBBKHRoaXMueCArIGUsIHRoaXMueSArIHQpO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgWUEgPSBmdW5jdGlvbihBLCBlLCB0KSB7XG4gIHJldHVybiBuZXcgZChBLnggKyAoZS54IC0gQS54KSAqIHQsIEEueSArIChlLnkgLSBBLnkpICogdCk7XG59LCBXZSA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBKGUsIHQsIHIsIG4pIHtcbiAgICAgIHRoaXMudHlwZSA9IDEsIHRoaXMuc3RhcnQgPSBlLCB0aGlzLnN0YXJ0Q29udHJvbCA9IHQsIHRoaXMuZW5kQ29udHJvbCA9IHIsIHRoaXMuZW5kID0gbjtcbiAgICB9XG4gICAgcmV0dXJuIEEucHJvdG90eXBlLnN1YmRpdmlkZSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHZhciByID0gWUEodGhpcy5zdGFydCwgdGhpcy5zdGFydENvbnRyb2wsIGUpLCBuID0gWUEodGhpcy5zdGFydENvbnRyb2wsIHRoaXMuZW5kQ29udHJvbCwgZSksIHMgPSBZQSh0aGlzLmVuZENvbnRyb2wsIHRoaXMuZW5kLCBlKSwgQiA9IFlBKHIsIG4sIGUpLCBpID0gWUEobiwgcywgZSksIGEgPSBZQShCLCBpLCBlKTtcbiAgICAgIHJldHVybiB0ID8gbmV3IEEodGhpcy5zdGFydCwgciwgQiwgYSkgOiBuZXcgQShhLCBpLCBzLCB0aGlzLmVuZCk7XG4gICAgfSwgQS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyBBKHRoaXMuc3RhcnQuYWRkKGUsIHQpLCB0aGlzLnN0YXJ0Q29udHJvbC5hZGQoZSwgdCksIHRoaXMuZW5kQ29udHJvbC5hZGQoZSwgdCksIHRoaXMuZW5kLmFkZChlLCB0KSk7XG4gICAgfSwgQS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBBKHRoaXMuZW5kLCB0aGlzLmVuZENvbnRyb2wsIHRoaXMuc3RhcnRDb250cm9sLCB0aGlzLnN0YXJ0KTtcbiAgICB9LCBBO1xuICB9KClcbiksIEJBID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50eXBlID09PSAxO1xufSwgbmwgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgLyogQF9fUFVSRV9fICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSkge1xuICAgICAgdmFyIHQgPSBlLnN0eWxlcywgciA9IGUuYm91bmRzLCBuID0gdWUodC5ib3JkZXJUb3BMZWZ0UmFkaXVzLCByLndpZHRoLCByLmhlaWdodCksIHMgPSBuWzBdLCBCID0gblsxXSwgaSA9IHVlKHQuYm9yZGVyVG9wUmlnaHRSYWRpdXMsIHIud2lkdGgsIHIuaGVpZ2h0KSwgYSA9IGlbMF0sIG8gPSBpWzFdLCBjID0gdWUodC5ib3JkZXJCb3R0b21SaWdodFJhZGl1cywgci53aWR0aCwgci5oZWlnaHQpLCBsID0gY1swXSwgZyA9IGNbMV0sIFUgPSB1ZSh0LmJvcmRlckJvdHRvbUxlZnRSYWRpdXMsIHIud2lkdGgsIHIuaGVpZ2h0KSwgdyA9IFVbMF0sIGYgPSBVWzFdLCBJID0gW107XG4gICAgICBJLnB1c2goKHMgKyBhKSAvIHIud2lkdGgpLCBJLnB1c2goKHcgKyBsKSAvIHIud2lkdGgpLCBJLnB1c2goKEIgKyBmKSAvIHIuaGVpZ2h0KSwgSS5wdXNoKChvICsgZykgLyByLmhlaWdodCk7XG4gICAgICB2YXIgaCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIEkpO1xuICAgICAgaCA+IDEgJiYgKHMgLz0gaCwgQiAvPSBoLCBhIC89IGgsIG8gLz0gaCwgbCAvPSBoLCBnIC89IGgsIHcgLz0gaCwgZiAvPSBoKTtcbiAgICAgIHZhciBRID0gci53aWR0aCAtIGEsIEwgPSByLmhlaWdodCAtIGcsIEYgPSByLndpZHRoIC0gbCwgdiA9IHIuaGVpZ2h0IC0gZiwgdSA9IHQuYm9yZGVyVG9wV2lkdGgsIEggPSB0LmJvcmRlclJpZ2h0V2lkdGgsIG0gPSB0LmJvcmRlckJvdHRvbVdpZHRoLCBFID0gdC5ib3JkZXJMZWZ0V2lkdGgsIGIgPSBTKHQucGFkZGluZ1RvcCwgZS5ib3VuZHMud2lkdGgpLCBNID0gUyh0LnBhZGRpbmdSaWdodCwgZS5ib3VuZHMud2lkdGgpLCBWID0gUyh0LnBhZGRpbmdCb3R0b20sIGUuYm91bmRzLndpZHRoKSwgeSA9IFModC5wYWRkaW5nTGVmdCwgZS5ib3VuZHMud2lkdGgpO1xuICAgICAgdGhpcy50b3BMZWZ0Qm9yZGVyRG91YmxlT3V0ZXJCb3ggPSBzID4gMCB8fCBCID4gMCA/IE8oci5sZWZ0ICsgRSAvIDMsIHIudG9wICsgdSAvIDMsIHMgLSBFIC8gMywgQiAtIHUgLyAzLCB4LlRPUF9MRUZUKSA6IG5ldyBkKHIubGVmdCArIEUgLyAzLCByLnRvcCArIHUgLyAzKSwgdGhpcy50b3BSaWdodEJvcmRlckRvdWJsZU91dGVyQm94ID0gcyA+IDAgfHwgQiA+IDAgPyBPKHIubGVmdCArIFEsIHIudG9wICsgdSAvIDMsIGEgLSBIIC8gMywgbyAtIHUgLyAzLCB4LlRPUF9SSUdIVCkgOiBuZXcgZChyLmxlZnQgKyByLndpZHRoIC0gSCAvIDMsIHIudG9wICsgdSAvIDMpLCB0aGlzLmJvdHRvbVJpZ2h0Qm9yZGVyRG91YmxlT3V0ZXJCb3ggPSBsID4gMCB8fCBnID4gMCA/IE8oci5sZWZ0ICsgRiwgci50b3AgKyBMLCBsIC0gSCAvIDMsIGcgLSBtIC8gMywgeC5CT1RUT01fUklHSFQpIDogbmV3IGQoci5sZWZ0ICsgci53aWR0aCAtIEggLyAzLCByLnRvcCArIHIuaGVpZ2h0IC0gbSAvIDMpLCB0aGlzLmJvdHRvbUxlZnRCb3JkZXJEb3VibGVPdXRlckJveCA9IHcgPiAwIHx8IGYgPiAwID8gTyhyLmxlZnQgKyBFIC8gMywgci50b3AgKyB2LCB3IC0gRSAvIDMsIGYgLSBtIC8gMywgeC5CT1RUT01fTEVGVCkgOiBuZXcgZChyLmxlZnQgKyBFIC8gMywgci50b3AgKyByLmhlaWdodCAtIG0gLyAzKSwgdGhpcy50b3BMZWZ0Qm9yZGVyRG91YmxlSW5uZXJCb3ggPSBzID4gMCB8fCBCID4gMCA/IE8oci5sZWZ0ICsgRSAqIDIgLyAzLCByLnRvcCArIHUgKiAyIC8gMywgcyAtIEUgKiAyIC8gMywgQiAtIHUgKiAyIC8gMywgeC5UT1BfTEVGVCkgOiBuZXcgZChyLmxlZnQgKyBFICogMiAvIDMsIHIudG9wICsgdSAqIDIgLyAzKSwgdGhpcy50b3BSaWdodEJvcmRlckRvdWJsZUlubmVyQm94ID0gcyA+IDAgfHwgQiA+IDAgPyBPKHIubGVmdCArIFEsIHIudG9wICsgdSAqIDIgLyAzLCBhIC0gSCAqIDIgLyAzLCBvIC0gdSAqIDIgLyAzLCB4LlRPUF9SSUdIVCkgOiBuZXcgZChyLmxlZnQgKyByLndpZHRoIC0gSCAqIDIgLyAzLCByLnRvcCArIHUgKiAyIC8gMyksIHRoaXMuYm90dG9tUmlnaHRCb3JkZXJEb3VibGVJbm5lckJveCA9IGwgPiAwIHx8IGcgPiAwID8gTyhyLmxlZnQgKyBGLCByLnRvcCArIEwsIGwgLSBIICogMiAvIDMsIGcgLSBtICogMiAvIDMsIHguQk9UVE9NX1JJR0hUKSA6IG5ldyBkKHIubGVmdCArIHIud2lkdGggLSBIICogMiAvIDMsIHIudG9wICsgci5oZWlnaHQgLSBtICogMiAvIDMpLCB0aGlzLmJvdHRvbUxlZnRCb3JkZXJEb3VibGVJbm5lckJveCA9IHcgPiAwIHx8IGYgPiAwID8gTyhyLmxlZnQgKyBFICogMiAvIDMsIHIudG9wICsgdiwgdyAtIEUgKiAyIC8gMywgZiAtIG0gKiAyIC8gMywgeC5CT1RUT01fTEVGVCkgOiBuZXcgZChyLmxlZnQgKyBFICogMiAvIDMsIHIudG9wICsgci5oZWlnaHQgLSBtICogMiAvIDMpLCB0aGlzLnRvcExlZnRCb3JkZXJTdHJva2UgPSBzID4gMCB8fCBCID4gMCA/IE8oci5sZWZ0ICsgRSAvIDIsIHIudG9wICsgdSAvIDIsIHMgLSBFIC8gMiwgQiAtIHUgLyAyLCB4LlRPUF9MRUZUKSA6IG5ldyBkKHIubGVmdCArIEUgLyAyLCByLnRvcCArIHUgLyAyKSwgdGhpcy50b3BSaWdodEJvcmRlclN0cm9rZSA9IHMgPiAwIHx8IEIgPiAwID8gTyhyLmxlZnQgKyBRLCByLnRvcCArIHUgLyAyLCBhIC0gSCAvIDIsIG8gLSB1IC8gMiwgeC5UT1BfUklHSFQpIDogbmV3IGQoci5sZWZ0ICsgci53aWR0aCAtIEggLyAyLCByLnRvcCArIHUgLyAyKSwgdGhpcy5ib3R0b21SaWdodEJvcmRlclN0cm9rZSA9IGwgPiAwIHx8IGcgPiAwID8gTyhyLmxlZnQgKyBGLCByLnRvcCArIEwsIGwgLSBIIC8gMiwgZyAtIG0gLyAyLCB4LkJPVFRPTV9SSUdIVCkgOiBuZXcgZChyLmxlZnQgKyByLndpZHRoIC0gSCAvIDIsIHIudG9wICsgci5oZWlnaHQgLSBtIC8gMiksIHRoaXMuYm90dG9tTGVmdEJvcmRlclN0cm9rZSA9IHcgPiAwIHx8IGYgPiAwID8gTyhyLmxlZnQgKyBFIC8gMiwgci50b3AgKyB2LCB3IC0gRSAvIDIsIGYgLSBtIC8gMiwgeC5CT1RUT01fTEVGVCkgOiBuZXcgZChyLmxlZnQgKyBFIC8gMiwgci50b3AgKyByLmhlaWdodCAtIG0gLyAyKSwgdGhpcy50b3BMZWZ0Qm9yZGVyQm94ID0gcyA+IDAgfHwgQiA+IDAgPyBPKHIubGVmdCwgci50b3AsIHMsIEIsIHguVE9QX0xFRlQpIDogbmV3IGQoci5sZWZ0LCByLnRvcCksIHRoaXMudG9wUmlnaHRCb3JkZXJCb3ggPSBhID4gMCB8fCBvID4gMCA/IE8oci5sZWZ0ICsgUSwgci50b3AsIGEsIG8sIHguVE9QX1JJR0hUKSA6IG5ldyBkKHIubGVmdCArIHIud2lkdGgsIHIudG9wKSwgdGhpcy5ib3R0b21SaWdodEJvcmRlckJveCA9IGwgPiAwIHx8IGcgPiAwID8gTyhyLmxlZnQgKyBGLCByLnRvcCArIEwsIGwsIGcsIHguQk9UVE9NX1JJR0hUKSA6IG5ldyBkKHIubGVmdCArIHIud2lkdGgsIHIudG9wICsgci5oZWlnaHQpLCB0aGlzLmJvdHRvbUxlZnRCb3JkZXJCb3ggPSB3ID4gMCB8fCBmID4gMCA/IE8oci5sZWZ0LCByLnRvcCArIHYsIHcsIGYsIHguQk9UVE9NX0xFRlQpIDogbmV3IGQoci5sZWZ0LCByLnRvcCArIHIuaGVpZ2h0KSwgdGhpcy50b3BMZWZ0UGFkZGluZ0JveCA9IHMgPiAwIHx8IEIgPiAwID8gTyhyLmxlZnQgKyBFLCByLnRvcCArIHUsIE1hdGgubWF4KDAsIHMgLSBFKSwgTWF0aC5tYXgoMCwgQiAtIHUpLCB4LlRPUF9MRUZUKSA6IG5ldyBkKHIubGVmdCArIEUsIHIudG9wICsgdSksIHRoaXMudG9wUmlnaHRQYWRkaW5nQm94ID0gYSA+IDAgfHwgbyA+IDAgPyBPKHIubGVmdCArIE1hdGgubWluKFEsIHIud2lkdGggLSBIKSwgci50b3AgKyB1LCBRID4gci53aWR0aCArIEggPyAwIDogTWF0aC5tYXgoMCwgYSAtIEgpLCBNYXRoLm1heCgwLCBvIC0gdSksIHguVE9QX1JJR0hUKSA6IG5ldyBkKHIubGVmdCArIHIud2lkdGggLSBILCByLnRvcCArIHUpLCB0aGlzLmJvdHRvbVJpZ2h0UGFkZGluZ0JveCA9IGwgPiAwIHx8IGcgPiAwID8gTyhyLmxlZnQgKyBNYXRoLm1pbihGLCByLndpZHRoIC0gRSksIHIudG9wICsgTWF0aC5taW4oTCwgci5oZWlnaHQgLSBtKSwgTWF0aC5tYXgoMCwgbCAtIEgpLCBNYXRoLm1heCgwLCBnIC0gbSksIHguQk9UVE9NX1JJR0hUKSA6IG5ldyBkKHIubGVmdCArIHIud2lkdGggLSBILCByLnRvcCArIHIuaGVpZ2h0IC0gbSksIHRoaXMuYm90dG9tTGVmdFBhZGRpbmdCb3ggPSB3ID4gMCB8fCBmID4gMCA/IE8oci5sZWZ0ICsgRSwgci50b3AgKyBNYXRoLm1pbih2LCByLmhlaWdodCAtIG0pLCBNYXRoLm1heCgwLCB3IC0gRSksIE1hdGgubWF4KDAsIGYgLSBtKSwgeC5CT1RUT01fTEVGVCkgOiBuZXcgZChyLmxlZnQgKyBFLCByLnRvcCArIHIuaGVpZ2h0IC0gbSksIHRoaXMudG9wTGVmdENvbnRlbnRCb3ggPSBzID4gMCB8fCBCID4gMCA/IE8oci5sZWZ0ICsgRSArIHksIHIudG9wICsgdSArIGIsIE1hdGgubWF4KDAsIHMgLSAoRSArIHkpKSwgTWF0aC5tYXgoMCwgQiAtICh1ICsgYikpLCB4LlRPUF9MRUZUKSA6IG5ldyBkKHIubGVmdCArIEUgKyB5LCByLnRvcCArIHUgKyBiKSwgdGhpcy50b3BSaWdodENvbnRlbnRCb3ggPSBhID4gMCB8fCBvID4gMCA/IE8oci5sZWZ0ICsgTWF0aC5taW4oUSwgci53aWR0aCArIEUgKyB5KSwgci50b3AgKyB1ICsgYiwgUSA+IHIud2lkdGggKyBFICsgeSA/IDAgOiBhIC0gRSArIHksIG8gLSAodSArIGIpLCB4LlRPUF9SSUdIVCkgOiBuZXcgZChyLmxlZnQgKyByLndpZHRoIC0gKEggKyBNKSwgci50b3AgKyB1ICsgYiksIHRoaXMuYm90dG9tUmlnaHRDb250ZW50Qm94ID0gbCA+IDAgfHwgZyA+IDAgPyBPKHIubGVmdCArIE1hdGgubWluKEYsIHIud2lkdGggLSAoRSArIHkpKSwgci50b3AgKyBNYXRoLm1pbihMLCByLmhlaWdodCArIHUgKyBiKSwgTWF0aC5tYXgoMCwgbCAtIChIICsgTSkpLCBnIC0gKG0gKyBWKSwgeC5CT1RUT01fUklHSFQpIDogbmV3IGQoci5sZWZ0ICsgci53aWR0aCAtIChIICsgTSksIHIudG9wICsgci5oZWlnaHQgLSAobSArIFYpKSwgdGhpcy5ib3R0b21MZWZ0Q29udGVudEJveCA9IHcgPiAwIHx8IGYgPiAwID8gTyhyLmxlZnQgKyBFICsgeSwgci50b3AgKyB2LCBNYXRoLm1heCgwLCB3IC0gKEUgKyB5KSksIGYgLSAobSArIFYpLCB4LkJPVFRPTV9MRUZUKSA6IG5ldyBkKHIubGVmdCArIEUgKyB5LCByLnRvcCArIHIuaGVpZ2h0IC0gKG0gKyBWKSk7XG4gICAgfVxuICAgIHJldHVybiBBO1xuICB9KClcbiksIHg7XG4oZnVuY3Rpb24oQSkge1xuICBBW0EuVE9QX0xFRlQgPSAwXSA9IFwiVE9QX0xFRlRcIiwgQVtBLlRPUF9SSUdIVCA9IDFdID0gXCJUT1BfUklHSFRcIiwgQVtBLkJPVFRPTV9SSUdIVCA9IDJdID0gXCJCT1RUT01fUklHSFRcIiwgQVtBLkJPVFRPTV9MRUZUID0gM10gPSBcIkJPVFRPTV9MRUZUXCI7XG59KSh4IHx8ICh4ID0ge30pKTtcbnZhciBPID0gZnVuY3Rpb24oQSwgZSwgdCwgciwgbikge1xuICB2YXIgcyA9IDQgKiAoKE1hdGguc3FydCgyKSAtIDEpIC8gMyksIEIgPSB0ICogcywgaSA9IHIgKiBzLCBhID0gQSArIHQsIG8gPSBlICsgcjtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSB4LlRPUF9MRUZUOlxuICAgICAgcmV0dXJuIG5ldyBXZShuZXcgZChBLCBvKSwgbmV3IGQoQSwgbyAtIGkpLCBuZXcgZChhIC0gQiwgZSksIG5ldyBkKGEsIGUpKTtcbiAgICBjYXNlIHguVE9QX1JJR0hUOlxuICAgICAgcmV0dXJuIG5ldyBXZShuZXcgZChBLCBlKSwgbmV3IGQoQSArIEIsIGUpLCBuZXcgZChhLCBvIC0gaSksIG5ldyBkKGEsIG8pKTtcbiAgICBjYXNlIHguQk9UVE9NX1JJR0hUOlxuICAgICAgcmV0dXJuIG5ldyBXZShuZXcgZChhLCBlKSwgbmV3IGQoYSwgZSArIGkpLCBuZXcgZChBICsgQiwgbyksIG5ldyBkKEEsIG8pKTtcbiAgICBjYXNlIHguQk9UVE9NX0xFRlQ6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgV2UobmV3IGQoYSwgbyksIG5ldyBkKGEgLSBCLCBvKSwgbmV3IGQoQSwgZSArIGkpLCBuZXcgZChBLCBlKSk7XG4gIH1cbn0sIG90ID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gW0EudG9wTGVmdEJvcmRlckJveCwgQS50b3BSaWdodEJvcmRlckJveCwgQS5ib3R0b21SaWdodEJvcmRlckJveCwgQS5ib3R0b21MZWZ0Qm9yZGVyQm94XTtcbn0sIHNsID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gW1xuICAgIEEudG9wTGVmdENvbnRlbnRCb3gsXG4gICAgQS50b3BSaWdodENvbnRlbnRCb3gsXG4gICAgQS5ib3R0b21SaWdodENvbnRlbnRCb3gsXG4gICAgQS5ib3R0b21MZWZ0Q29udGVudEJveFxuICBdO1xufSwgY3QgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBbXG4gICAgQS50b3BMZWZ0UGFkZGluZ0JveCxcbiAgICBBLnRvcFJpZ2h0UGFkZGluZ0JveCxcbiAgICBBLmJvdHRvbVJpZ2h0UGFkZGluZ0JveCxcbiAgICBBLmJvdHRvbUxlZnRQYWRkaW5nQm94XG4gIF07XG59LCBCbCA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICAvKiBAX19QVVJFX18gKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlLCB0LCByKSB7XG4gICAgICB0aGlzLm9mZnNldFggPSBlLCB0aGlzLm9mZnNldFkgPSB0LCB0aGlzLm1hdHJpeCA9IHIsIHRoaXMudHlwZSA9IDAsIHRoaXMudGFyZ2V0ID0gNjtcbiAgICB9XG4gICAgcmV0dXJuIEE7XG4gIH0oKVxuKSwgWWUgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgLyogQF9fUFVSRV9fICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdGhpcy5wYXRoID0gZSwgdGhpcy50YXJnZXQgPSB0LCB0aGlzLnR5cGUgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gQTtcbiAgfSgpXG4pLCBpbCA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICAvKiBAX19QVVJFX18gKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlKSB7XG4gICAgICB0aGlzLm9wYWNpdHkgPSBlLCB0aGlzLnR5cGUgPSAyLCB0aGlzLnRhcmdldCA9IDY7XG4gICAgfVxuICAgIHJldHVybiBBO1xuICB9KClcbiksIGFsID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQS50eXBlID09PSAwO1xufSwgTXMgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBBLnR5cGUgPT09IDE7XG59LCBvbCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEEudHlwZSA9PT0gMjtcbn0sIExuID0gZnVuY3Rpb24oQSwgZSkge1xuICByZXR1cm4gQS5sZW5ndGggPT09IGUubGVuZ3RoID8gQS5zb21lKGZ1bmN0aW9uKHQsIHIpIHtcbiAgICByZXR1cm4gdCA9PT0gZVtyXTtcbiAgfSkgOiAhMTtcbn0sIGNsID0gZnVuY3Rpb24oQSwgZSwgdCwgciwgbikge1xuICByZXR1cm4gQS5tYXAoZnVuY3Rpb24ocywgQikge1xuICAgIHN3aXRjaCAoQikge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gcy5hZGQoZSwgdCk7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBzLmFkZChlICsgciwgdCk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBzLmFkZChlICsgciwgdCArIG4pO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gcy5hZGQoZSwgdCArIG4pO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfSk7XG59LCBPcyA9IChcbiAgLyoqIEBjbGFzcyAqL1xuICAvKiBAX19QVVJFX18gKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBlLCB0aGlzLmlubGluZUxldmVsID0gW10sIHRoaXMubm9uSW5saW5lTGV2ZWwgPSBbXSwgdGhpcy5uZWdhdGl2ZVpJbmRleCA9IFtdLCB0aGlzLnplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gW10sIHRoaXMucG9zaXRpdmVaSW5kZXggPSBbXSwgdGhpcy5ub25Qb3NpdGlvbmVkRmxvYXRzID0gW10sIHRoaXMubm9uUG9zaXRpb25lZElubGluZUxldmVsID0gW107XG4gICAgfVxuICAgIHJldHVybiBBO1xuICB9KClcbiksIFJzID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID0gZSwgdGhpcy5wYXJlbnQgPSB0LCB0aGlzLmVmZmVjdHMgPSBbXSwgdGhpcy5jdXJ2ZXMgPSBuZXcgbmwodGhpcy5jb250YWluZXIpLCB0aGlzLmNvbnRhaW5lci5zdHlsZXMub3BhY2l0eSA8IDEgJiYgdGhpcy5lZmZlY3RzLnB1c2gobmV3IGlsKHRoaXMuY29udGFpbmVyLnN0eWxlcy5vcGFjaXR5KSksIHRoaXMuY29udGFpbmVyLnN0eWxlcy50cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmNvbnRhaW5lci5ib3VuZHMubGVmdCArIHRoaXMuY29udGFpbmVyLnN0eWxlcy50cmFuc2Zvcm1PcmlnaW5bMF0ubnVtYmVyLCBuID0gdGhpcy5jb250YWluZXIuYm91bmRzLnRvcCArIHRoaXMuY29udGFpbmVyLnN0eWxlcy50cmFuc2Zvcm1PcmlnaW5bMV0ubnVtYmVyLCBzID0gdGhpcy5jb250YWluZXIuc3R5bGVzLnRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2gobmV3IEJsKHIsIG4sIHMpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5zdHlsZXMub3ZlcmZsb3dYICE9PSAwKSB7XG4gICAgICAgIHZhciBCID0gb3QodGhpcy5jdXJ2ZXMpLCBpID0gY3QodGhpcy5jdXJ2ZXMpO1xuICAgICAgICBMbihCLCBpKSA/IHRoaXMuZWZmZWN0cy5wdXNoKG5ldyBZZShcbiAgICAgICAgICBCLFxuICAgICAgICAgIDZcbiAgICAgICAgICAvKiBDT05URU5UICovXG4gICAgICAgICkpIDogKHRoaXMuZWZmZWN0cy5wdXNoKG5ldyBZZShcbiAgICAgICAgICBCLFxuICAgICAgICAgIDJcbiAgICAgICAgICAvKiBCQUNLR1JPVU5EX0JPUkRFUlMgKi9cbiAgICAgICAgKSksIHRoaXMuZWZmZWN0cy5wdXNoKG5ldyBZZShcbiAgICAgICAgICBpLFxuICAgICAgICAgIDRcbiAgICAgICAgICAvKiBDT05URU5UICovXG4gICAgICAgICkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEEucHJvdG90eXBlLmdldEVmZmVjdHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gW1xuICAgICAgICAyLFxuICAgICAgICAzXG4gICAgICAgIC8qIEZJWEVEICovXG4gICAgICBdLmluZGV4T2YodGhpcy5jb250YWluZXIuc3R5bGVzLnBvc2l0aW9uKSA9PT0gLTEsIHIgPSB0aGlzLnBhcmVudCwgbiA9IHRoaXMuZWZmZWN0cy5zbGljZSgwKTsgcjsgKSB7XG4gICAgICAgIHZhciBzID0gci5lZmZlY3RzLmZpbHRlcihmdW5jdGlvbihhKSB7XG4gICAgICAgICAgcmV0dXJuICFNcyhhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0IHx8IHIuY29udGFpbmVyLnN0eWxlcy5wb3NpdGlvbiAhPT0gMCB8fCAhci5wYXJlbnQpIHtcbiAgICAgICAgICBpZiAobi51bnNoaWZ0LmFwcGx5KG4sIHMpLCB0ID0gW1xuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIDNcbiAgICAgICAgICAgIC8qIEZJWEVEICovXG4gICAgICAgICAgXS5pbmRleE9mKHIuY29udGFpbmVyLnN0eWxlcy5wb3NpdGlvbikgPT09IC0xLCByLmNvbnRhaW5lci5zdHlsZXMub3ZlcmZsb3dYICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgQiA9IG90KHIuY3VydmVzKSwgaSA9IGN0KHIuY3VydmVzKTtcbiAgICAgICAgICAgIExuKEIsIGkpIHx8IG4udW5zaGlmdChuZXcgWWUoXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgLyogQ09OVEVOVCAqL1xuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICBuLnVuc2hpZnQuYXBwbHkobiwgcyk7XG4gICAgICAgIHIgPSByLnBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuLmZpbHRlcihmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBfKGEudGFyZ2V0LCBlKTtcbiAgICAgIH0pO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgQ3IgPSBmdW5jdGlvbihBLCBlLCB0LCByKSB7XG4gIEEuY29udGFpbmVyLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgIHZhciBzID0gXyhcbiAgICAgIG4uZmxhZ3MsXG4gICAgICA0XG4gICAgICAvKiBDUkVBVEVTX1JFQUxfU1RBQ0tJTkdfQ09OVEVYVCAqL1xuICAgICksIEIgPSBfKFxuICAgICAgbi5mbGFncyxcbiAgICAgIDJcbiAgICAgIC8qIENSRUFURVNfU1RBQ0tJTkdfQ09OVEVYVCAqL1xuICAgICksIGkgPSBuZXcgUnMobiwgQSk7XG4gICAgXyhcbiAgICAgIG4uc3R5bGVzLmRpc3BsYXksXG4gICAgICAyMDQ4XG4gICAgICAvKiBMSVNUX0lURU0gKi9cbiAgICApICYmIHIucHVzaChpKTtcbiAgICB2YXIgYSA9IF8oXG4gICAgICBuLmZsYWdzLFxuICAgICAgOFxuICAgICAgLyogSVNfTElTVF9PV05FUiAqL1xuICAgICkgPyBbXSA6IHI7XG4gICAgaWYgKHMgfHwgQikge1xuICAgICAgdmFyIG8gPSBzIHx8IG4uc3R5bGVzLmlzUG9zaXRpb25lZCgpID8gdCA6IGUsIGMgPSBuZXcgT3MoaSk7XG4gICAgICBpZiAobi5zdHlsZXMuaXNQb3NpdGlvbmVkKCkgfHwgbi5zdHlsZXMub3BhY2l0eSA8IDEgfHwgbi5zdHlsZXMuaXNUcmFuc2Zvcm1lZCgpKSB7XG4gICAgICAgIHZhciBsID0gbi5zdHlsZXMuekluZGV4Lm9yZGVyO1xuICAgICAgICBpZiAobCA8IDApIHtcbiAgICAgICAgICB2YXIgZyA9IDA7XG4gICAgICAgICAgby5uZWdhdGl2ZVpJbmRleC5zb21lKGZ1bmN0aW9uKHcsIGYpIHtcbiAgICAgICAgICAgIHJldHVybiBsID4gdy5lbGVtZW50LmNvbnRhaW5lci5zdHlsZXMuekluZGV4Lm9yZGVyID8gKGcgPSBmLCAhMSkgOiBnID4gMDtcbiAgICAgICAgICB9KSwgby5uZWdhdGl2ZVpJbmRleC5zcGxpY2UoZywgMCwgYyk7XG4gICAgICAgIH0gZWxzZSBpZiAobCA+IDApIHtcbiAgICAgICAgICB2YXIgVSA9IDA7XG4gICAgICAgICAgby5wb3NpdGl2ZVpJbmRleC5zb21lKGZ1bmN0aW9uKHcsIGYpIHtcbiAgICAgICAgICAgIHJldHVybiBsID49IHcuZWxlbWVudC5jb250YWluZXIuc3R5bGVzLnpJbmRleC5vcmRlciA/IChVID0gZiArIDEsICExKSA6IFUgPiAwO1xuICAgICAgICAgIH0pLCBvLnBvc2l0aXZlWkluZGV4LnNwbGljZShVLCAwLCBjKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgby56ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5wdXNoKGMpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIG4uc3R5bGVzLmlzRmxvYXRpbmcoKSA/IG8ubm9uUG9zaXRpb25lZEZsb2F0cy5wdXNoKGMpIDogby5ub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWwucHVzaChjKTtcbiAgICAgIENyKGksIGMsIHMgPyBjIDogdCwgYSk7XG4gICAgfSBlbHNlXG4gICAgICBuLnN0eWxlcy5pc0lubGluZUxldmVsKCkgPyBlLmlubGluZUxldmVsLnB1c2goaSkgOiBlLm5vbklubGluZUxldmVsLnB1c2goaSksIENyKGksIGUsIHQsIGEpO1xuICAgIF8oXG4gICAgICBuLmZsYWdzLFxuICAgICAgOFxuICAgICAgLyogSVNfTElTVF9PV05FUiAqL1xuICAgICkgJiYgR3MobiwgYSk7XG4gIH0pO1xufSwgR3MgPSBmdW5jdGlvbihBLCBlKSB7XG4gIGZvciAodmFyIHQgPSBBIGluc3RhbmNlb2YgZ3IgPyBBLnN0YXJ0IDogMSwgciA9IEEgaW5zdGFuY2VvZiBnciA/IEEucmV2ZXJzZWQgOiAhMSwgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgdmFyIHMgPSBlW25dO1xuICAgIHMuY29udGFpbmVyIGluc3RhbmNlb2YgcHMgJiYgdHlwZW9mIHMuY29udGFpbmVyLnZhbHVlID09IFwibnVtYmVyXCIgJiYgcy5jb250YWluZXIudmFsdWUgIT09IDAgJiYgKHQgPSBzLmNvbnRhaW5lci52YWx1ZSksIHMubGlzdFZhbHVlID0gSGUodCwgcy5jb250YWluZXIuc3R5bGVzLmxpc3RTdHlsZVR5cGUsICEwKSwgdCArPSByID8gLTEgOiAxO1xuICB9XG59LCBsbCA9IGZ1bmN0aW9uKEEpIHtcbiAgdmFyIGUgPSBuZXcgUnMoQSwgbnVsbCksIHQgPSBuZXcgT3MoZSksIHIgPSBbXTtcbiAgcmV0dXJuIENyKGUsIHQsIHQsIHIpLCBHcyhlLmNvbnRhaW5lciwgciksIHQ7XG59LCBLbiA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGFBKEEudG9wTGVmdEJvcmRlckJveCwgQS50b3BMZWZ0UGFkZGluZ0JveCwgQS50b3BSaWdodEJvcmRlckJveCwgQS50b3BSaWdodFBhZGRpbmdCb3gpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBhQShBLnRvcFJpZ2h0Qm9yZGVyQm94LCBBLnRvcFJpZ2h0UGFkZGluZ0JveCwgQS5ib3R0b21SaWdodEJvcmRlckJveCwgQS5ib3R0b21SaWdodFBhZGRpbmdCb3gpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBhQShBLmJvdHRvbVJpZ2h0Qm9yZGVyQm94LCBBLmJvdHRvbVJpZ2h0UGFkZGluZ0JveCwgQS5ib3R0b21MZWZ0Qm9yZGVyQm94LCBBLmJvdHRvbUxlZnRQYWRkaW5nQm94KTtcbiAgICBjYXNlIDM6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhQShBLmJvdHRvbUxlZnRCb3JkZXJCb3gsIEEuYm90dG9tTGVmdFBhZGRpbmdCb3gsIEEudG9wTGVmdEJvcmRlckJveCwgQS50b3BMZWZ0UGFkZGluZ0JveCk7XG4gIH1cbn0sIGdsID0gZnVuY3Rpb24oQSwgZSkge1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gYUEoQS50b3BMZWZ0Qm9yZGVyQm94LCBBLnRvcExlZnRCb3JkZXJEb3VibGVPdXRlckJveCwgQS50b3BSaWdodEJvcmRlckJveCwgQS50b3BSaWdodEJvcmRlckRvdWJsZU91dGVyQm94KTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYUEoQS50b3BSaWdodEJvcmRlckJveCwgQS50b3BSaWdodEJvcmRlckRvdWJsZU91dGVyQm94LCBBLmJvdHRvbVJpZ2h0Qm9yZGVyQm94LCBBLmJvdHRvbVJpZ2h0Qm9yZGVyRG91YmxlT3V0ZXJCb3gpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBhQShBLmJvdHRvbVJpZ2h0Qm9yZGVyQm94LCBBLmJvdHRvbVJpZ2h0Qm9yZGVyRG91YmxlT3V0ZXJCb3gsIEEuYm90dG9tTGVmdEJvcmRlckJveCwgQS5ib3R0b21MZWZ0Qm9yZGVyRG91YmxlT3V0ZXJCb3gpO1xuICAgIGNhc2UgMzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFBKEEuYm90dG9tTGVmdEJvcmRlckJveCwgQS5ib3R0b21MZWZ0Qm9yZGVyRG91YmxlT3V0ZXJCb3gsIEEudG9wTGVmdEJvcmRlckJveCwgQS50b3BMZWZ0Qm9yZGVyRG91YmxlT3V0ZXJCb3gpO1xuICB9XG59LCB1bCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGFBKEEudG9wTGVmdEJvcmRlckRvdWJsZUlubmVyQm94LCBBLnRvcExlZnRQYWRkaW5nQm94LCBBLnRvcFJpZ2h0Qm9yZGVyRG91YmxlSW5uZXJCb3gsIEEudG9wUmlnaHRQYWRkaW5nQm94KTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYUEoQS50b3BSaWdodEJvcmRlckRvdWJsZUlubmVyQm94LCBBLnRvcFJpZ2h0UGFkZGluZ0JveCwgQS5ib3R0b21SaWdodEJvcmRlckRvdWJsZUlubmVyQm94LCBBLmJvdHRvbVJpZ2h0UGFkZGluZ0JveCk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGFBKEEuYm90dG9tUmlnaHRCb3JkZXJEb3VibGVJbm5lckJveCwgQS5ib3R0b21SaWdodFBhZGRpbmdCb3gsIEEuYm90dG9tTGVmdEJvcmRlckRvdWJsZUlubmVyQm94LCBBLmJvdHRvbUxlZnRQYWRkaW5nQm94KTtcbiAgICBjYXNlIDM6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhQShBLmJvdHRvbUxlZnRCb3JkZXJEb3VibGVJbm5lckJveCwgQS5ib3R0b21MZWZ0UGFkZGluZ0JveCwgQS50b3BMZWZ0Qm9yZGVyRG91YmxlSW5uZXJCb3gsIEEudG9wTGVmdFBhZGRpbmdCb3gpO1xuICB9XG59LCB3bCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgc3dpdGNoIChlKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIFplKEEudG9wTGVmdEJvcmRlclN0cm9rZSwgQS50b3BSaWdodEJvcmRlclN0cm9rZSk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFplKEEudG9wUmlnaHRCb3JkZXJTdHJva2UsIEEuYm90dG9tUmlnaHRCb3JkZXJTdHJva2UpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBaZShBLmJvdHRvbVJpZ2h0Qm9yZGVyU3Ryb2tlLCBBLmJvdHRvbUxlZnRCb3JkZXJTdHJva2UpO1xuICAgIGNhc2UgMzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFplKEEuYm90dG9tTGVmdEJvcmRlclN0cm9rZSwgQS50b3BMZWZ0Qm9yZGVyU3Ryb2tlKTtcbiAgfVxufSwgWmUgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHZhciB0ID0gW107XG4gIHJldHVybiBCQShBKSA/IHQucHVzaChBLnN1YmRpdmlkZSgwLjUsICExKSkgOiB0LnB1c2goQSksIEJBKGUpID8gdC5wdXNoKGUuc3ViZGl2aWRlKDAuNSwgITApKSA6IHQucHVzaChlKSwgdDtcbn0sIGFBID0gZnVuY3Rpb24oQSwgZSwgdCwgcikge1xuICB2YXIgbiA9IFtdO1xuICByZXR1cm4gQkEoQSkgPyBuLnB1c2goQS5zdWJkaXZpZGUoMC41LCAhMSkpIDogbi5wdXNoKEEpLCBCQSh0KSA/IG4ucHVzaCh0LnN1YmRpdmlkZSgwLjUsICEwKSkgOiBuLnB1c2godCksIEJBKHIpID8gbi5wdXNoKHIuc3ViZGl2aWRlKDAuNSwgITApLnJldmVyc2UoKSkgOiBuLnB1c2gociksIEJBKGUpID8gbi5wdXNoKGUuc3ViZGl2aWRlKDAuNSwgITEpLnJldmVyc2UoKSkgOiBuLnB1c2goZSksIG47XG59LCBWcyA9IGZ1bmN0aW9uKEEpIHtcbiAgdmFyIGUgPSBBLmJvdW5kcywgdCA9IEEuc3R5bGVzO1xuICByZXR1cm4gZS5hZGQodC5ib3JkZXJMZWZ0V2lkdGgsIHQuYm9yZGVyVG9wV2lkdGgsIC0odC5ib3JkZXJSaWdodFdpZHRoICsgdC5ib3JkZXJMZWZ0V2lkdGgpLCAtKHQuYm9yZGVyVG9wV2lkdGggKyB0LmJvcmRlckJvdHRvbVdpZHRoKSk7XG59LCBsdCA9IGZ1bmN0aW9uKEEpIHtcbiAgdmFyIGUgPSBBLnN0eWxlcywgdCA9IEEuYm91bmRzLCByID0gUyhlLnBhZGRpbmdMZWZ0LCB0LndpZHRoKSwgbiA9IFMoZS5wYWRkaW5nUmlnaHQsIHQud2lkdGgpLCBzID0gUyhlLnBhZGRpbmdUb3AsIHQud2lkdGgpLCBCID0gUyhlLnBhZGRpbmdCb3R0b20sIHQud2lkdGgpO1xuICByZXR1cm4gdC5hZGQociArIGUuYm9yZGVyTGVmdFdpZHRoLCBzICsgZS5ib3JkZXJUb3BXaWR0aCwgLShlLmJvcmRlclJpZ2h0V2lkdGggKyBlLmJvcmRlckxlZnRXaWR0aCArIHIgKyBuKSwgLShlLmJvcmRlclRvcFdpZHRoICsgZS5ib3JkZXJCb3R0b21XaWR0aCArIHMgKyBCKSk7XG59LCBRbCA9IGZ1bmN0aW9uKEEsIGUpIHtcbiAgcmV0dXJuIEEgPT09IDAgPyBlLmJvdW5kcyA6IEEgPT09IDIgPyBsdChlKSA6IFZzKGUpO1xufSwgZmwgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHJldHVybiBBID09PSAwID8gZS5ib3VuZHMgOiBBID09PSAyID8gbHQoZSkgOiBWcyhlKTtcbn0sIFd0ID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB2YXIgciA9IFFsKCRBKEEuc3R5bGVzLmJhY2tncm91bmRPcmlnaW4sIGUpLCBBKSwgbiA9IGZsKCRBKEEuc3R5bGVzLmJhY2tncm91bmRDbGlwLCBlKSwgQSksIHMgPSBDbCgkQShBLnN0eWxlcy5iYWNrZ3JvdW5kU2l6ZSwgZSksIHQsIHIpLCBCID0gc1swXSwgaSA9IHNbMV0sIGEgPSB1ZSgkQShBLnN0eWxlcy5iYWNrZ3JvdW5kUG9zaXRpb24sIGUpLCByLndpZHRoIC0gQiwgci5oZWlnaHQgLSBpKSwgbyA9IFVsKCRBKEEuc3R5bGVzLmJhY2tncm91bmRSZXBlYXQsIGUpLCBhLCBzLCByLCBuKSwgYyA9IE1hdGgucm91bmQoci5sZWZ0ICsgYVswXSksIGwgPSBNYXRoLnJvdW5kKHIudG9wICsgYVsxXSk7XG4gIHJldHVybiBbbywgYywgbCwgQiwgaV07XG59LCBaQSA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIEQoQSkgJiYgQS52YWx1ZSA9PT0gZWUuQVVUTztcbn0sIGplID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gdHlwZW9mIEEgPT0gXCJudW1iZXJcIjtcbn0sIENsID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB2YXIgciA9IGVbMF0sIG4gPSBlWzFdLCBzID0gZVsyXSwgQiA9IEFbMF0sIGkgPSBBWzFdO1xuICBpZiAoIUIpXG4gICAgcmV0dXJuIFswLCAwXTtcbiAgaWYgKFAoQikgJiYgaSAmJiBQKGkpKVxuICAgIHJldHVybiBbUyhCLCB0LndpZHRoKSwgUyhpLCB0LmhlaWdodCldO1xuICB2YXIgYSA9IGplKHMpO1xuICBpZiAoRChCKSAmJiAoQi52YWx1ZSA9PT0gZWUuQ09OVEFJTiB8fCBCLnZhbHVlID09PSBlZS5DT1ZFUikpIHtcbiAgICBpZiAoamUocykpIHtcbiAgICAgIHZhciBvID0gdC53aWR0aCAvIHQuaGVpZ2h0O1xuICAgICAgcmV0dXJuIG8gPCBzICE9IChCLnZhbHVlID09PSBlZS5DT1ZFUikgPyBbdC53aWR0aCwgdC53aWR0aCAvIHNdIDogW3QuaGVpZ2h0ICogcywgdC5oZWlnaHRdO1xuICAgIH1cbiAgICByZXR1cm4gW3Qud2lkdGgsIHQuaGVpZ2h0XTtcbiAgfVxuICB2YXIgYyA9IGplKHIpLCBsID0gamUobiksIGcgPSBjIHx8IGw7XG4gIGlmIChaQShCKSAmJiAoIWkgfHwgWkEoaSkpKSB7XG4gICAgaWYgKGMgJiYgbClcbiAgICAgIHJldHVybiBbciwgbl07XG4gICAgaWYgKCFhICYmICFnKVxuICAgICAgcmV0dXJuIFt0LndpZHRoLCB0LmhlaWdodF07XG4gICAgaWYgKGcgJiYgYSkge1xuICAgICAgdmFyIFUgPSBjID8gciA6IG4gKiBzLCB3ID0gbCA/IG4gOiByIC8gcztcbiAgICAgIHJldHVybiBbVSwgd107XG4gICAgfVxuICAgIHZhciBmID0gYyA/IHIgOiB0LndpZHRoLCBJID0gbCA/IG4gOiB0LmhlaWdodDtcbiAgICByZXR1cm4gW2YsIEldO1xuICB9XG4gIGlmIChhKSB7XG4gICAgdmFyIGggPSAwLCBRID0gMDtcbiAgICByZXR1cm4gUChCKSA/IGggPSBTKEIsIHQud2lkdGgpIDogUChpKSAmJiAoUSA9IFMoaSwgdC5oZWlnaHQpKSwgWkEoQikgPyBoID0gUSAqIHMgOiAoIWkgfHwgWkEoaSkpICYmIChRID0gaCAvIHMpLCBbaCwgUV07XG4gIH1cbiAgdmFyIEwgPSBudWxsLCBGID0gbnVsbDtcbiAgaWYgKFAoQikgPyBMID0gUyhCLCB0LndpZHRoKSA6IGkgJiYgUChpKSAmJiAoRiA9IFMoaSwgdC5oZWlnaHQpKSwgTCAhPT0gbnVsbCAmJiAoIWkgfHwgWkEoaSkpICYmIChGID0gYyAmJiBsID8gTCAvIHIgKiBuIDogdC5oZWlnaHQpLCBGICE9PSBudWxsICYmIFpBKEIpICYmIChMID0gYyAmJiBsID8gRiAvIG4gKiByIDogdC53aWR0aCksIEwgIT09IG51bGwgJiYgRiAhPT0gbnVsbClcbiAgICByZXR1cm4gW0wsIEZdO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY2FsY3VsYXRlIGJhY2tncm91bmQtc2l6ZSBmb3IgZWxlbWVudFwiKTtcbn0sICRBID0gZnVuY3Rpb24oQSwgZSkge1xuICB2YXIgdCA9IEFbZV07XG4gIHJldHVybiB0eXBlb2YgdCA+IFwidVwiID8gQVswXSA6IHQ7XG59LCBVbCA9IGZ1bmN0aW9uKEEsIGUsIHQsIHIsIG4pIHtcbiAgdmFyIHMgPSBlWzBdLCBCID0gZVsxXSwgaSA9IHRbMF0sIGEgPSB0WzFdO1xuICBzd2l0Y2ggKEEpIHtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCksIE1hdGgucm91bmQoci50b3AgKyBCKSksXG4gICAgICAgIG5ldyBkKE1hdGgucm91bmQoci5sZWZ0ICsgci53aWR0aCksIE1hdGgucm91bmQoci50b3AgKyBCKSksXG4gICAgICAgIG5ldyBkKE1hdGgucm91bmQoci5sZWZ0ICsgci53aWR0aCksIE1hdGgucm91bmQoYSArIHIudG9wICsgQikpLFxuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCksIE1hdGgucm91bmQoYSArIHIudG9wICsgQikpXG4gICAgICBdO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBkKE1hdGgucm91bmQoci5sZWZ0ICsgcyksIE1hdGgucm91bmQoci50b3ApKSxcbiAgICAgICAgbmV3IGQoTWF0aC5yb3VuZChyLmxlZnQgKyBzICsgaSksIE1hdGgucm91bmQoci50b3ApKSxcbiAgICAgICAgbmV3IGQoTWF0aC5yb3VuZChyLmxlZnQgKyBzICsgaSksIE1hdGgucm91bmQoci5oZWlnaHQgKyByLnRvcCkpLFxuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCArIHMpLCBNYXRoLnJvdW5kKHIuaGVpZ2h0ICsgci50b3ApKVxuICAgICAgXTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCArIHMpLCBNYXRoLnJvdW5kKHIudG9wICsgQikpLFxuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCArIHMgKyBpKSwgTWF0aC5yb3VuZChyLnRvcCArIEIpKSxcbiAgICAgICAgbmV3IGQoTWF0aC5yb3VuZChyLmxlZnQgKyBzICsgaSksIE1hdGgucm91bmQoci50b3AgKyBCICsgYSkpLFxuICAgICAgICBuZXcgZChNYXRoLnJvdW5kKHIubGVmdCArIHMpLCBNYXRoLnJvdW5kKHIudG9wICsgQiArIGEpKVxuICAgICAgXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IGQoTWF0aC5yb3VuZChuLmxlZnQpLCBNYXRoLnJvdW5kKG4udG9wKSksXG4gICAgICAgIG5ldyBkKE1hdGgucm91bmQobi5sZWZ0ICsgbi53aWR0aCksIE1hdGgucm91bmQobi50b3ApKSxcbiAgICAgICAgbmV3IGQoTWF0aC5yb3VuZChuLmxlZnQgKyBuLndpZHRoKSwgTWF0aC5yb3VuZChuLmhlaWdodCArIG4udG9wKSksXG4gICAgICAgIG5ldyBkKE1hdGgucm91bmQobi5sZWZ0KSwgTWF0aC5yb3VuZChuLmhlaWdodCArIG4udG9wKSlcbiAgICAgIF07XG4gIH1cbn0sIEZsID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTdcIiwgYm4gPSBcIkhpZGRlbiBUZXh0XCIsIGhsID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9LCB0aGlzLl9kb2N1bWVudCA9IGU7XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS5wYXJzZU1ldHJpY3MgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICB2YXIgciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIG4gPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCBzID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksIEIgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgICAgci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiwgci5zdHlsZS5mb250RmFtaWx5ID0gZSwgci5zdHlsZS5mb250U2l6ZSA9IHQsIHIuc3R5bGUubWFyZ2luID0gXCIwXCIsIHIuc3R5bGUucGFkZGluZyA9IFwiMFwiLCByLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiLCBCLmFwcGVuZENoaWxkKHIpLCBuLnNyYyA9IEZsLCBuLndpZHRoID0gMSwgbi5oZWlnaHQgPSAxLCBuLnN0eWxlLm1hcmdpbiA9IFwiMFwiLCBuLnN0eWxlLnBhZGRpbmcgPSBcIjBcIiwgbi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJiYXNlbGluZVwiLCBzLnN0eWxlLmZvbnRGYW1pbHkgPSBlLCBzLnN0eWxlLmZvbnRTaXplID0gdCwgcy5zdHlsZS5tYXJnaW4gPSBcIjBcIiwgcy5zdHlsZS5wYWRkaW5nID0gXCIwXCIsIHMuYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYm4pKSwgci5hcHBlbmRDaGlsZChzKSwgci5hcHBlbmRDaGlsZChuKTtcbiAgICAgIHZhciBpID0gbi5vZmZzZXRUb3AgLSBzLm9mZnNldFRvcCArIDI7XG4gICAgICByLnJlbW92ZUNoaWxkKHMpLCByLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGJuKSksIHIuc3R5bGUubGluZUhlaWdodCA9IFwibm9ybWFsXCIsIG4uc3R5bGUudmVydGljYWxBbGlnbiA9IFwic3VwZXJcIjtcbiAgICAgIHZhciBhID0gbi5vZmZzZXRUb3AgLSByLm9mZnNldFRvcCArIDI7XG4gICAgICByZXR1cm4gQi5yZW1vdmVDaGlsZChyKSwgeyBiYXNlbGluZTogaSwgbWlkZGxlOiBhIH07XG4gICAgfSwgQS5wcm90b3R5cGUuZ2V0TWV0cmljcyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgIHZhciByID0gZSArIFwiIFwiICsgdDtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZGF0YVtyXSA+IFwidVwiICYmICh0aGlzLl9kYXRhW3JdID0gdGhpcy5wYXJzZU1ldHJpY3MoZSwgdCkpLCB0aGlzLl9kYXRhW3JdO1xuICAgIH0sIEE7XG4gIH0oKVxuKSwgTnMgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgLyogQF9fUFVSRV9fICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdGhpcy5jb250ZXh0ID0gZSwgdGhpcy5vcHRpb25zID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIEE7XG4gIH0oKVxuKSwgZGwgPSAxZTQsIHBsID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKEEpIHtcbiAgICBnQShlLCBBKTtcbiAgICBmdW5jdGlvbiBlKHQsIHIpIHtcbiAgICAgIHZhciBuID0gQS5jYWxsKHRoaXMsIHQsIHIpIHx8IHRoaXM7XG4gICAgICByZXR1cm4gbi5fYWN0aXZlRWZmZWN0cyA9IFtdLCBuLmNhbnZhcyA9IHIuY2FudmFzID8gci5jYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCBuLmN0eCA9IG4uY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgci5jYW52YXMgfHwgKG4uY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihyLndpZHRoICogci5zY2FsZSksIG4uY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Ioci5oZWlnaHQgKiByLnNjYWxlKSwgbi5jYW52YXMuc3R5bGUud2lkdGggPSByLndpZHRoICsgXCJweFwiLCBuLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSByLmhlaWdodCArIFwicHhcIiksIG4uZm9udE1ldHJpY3MgPSBuZXcgaGwoZG9jdW1lbnQpLCBuLmN0eC5zY2FsZShuLm9wdGlvbnMuc2NhbGUsIG4ub3B0aW9ucy5zY2FsZSksIG4uY3R4LnRyYW5zbGF0ZSgtci54LCAtci55KSwgbi5jdHgudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIiwgbi5fYWN0aXZlRWZmZWN0cyA9IFtdLCBuLmNvbnRleHQubG9nZ2VyLmRlYnVnKFwiQ2FudmFzIHJlbmRlcmVyIGluaXRpYWxpemVkIChcIiArIHIud2lkdGggKyBcInhcIiArIHIuaGVpZ2h0ICsgXCIpIHdpdGggc2NhbGUgXCIgKyByLnNjYWxlKSwgbjtcbiAgICB9XG4gICAgcmV0dXJuIGUucHJvdG90eXBlLmFwcGx5RWZmZWN0cyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzOyB0aGlzLl9hY3RpdmVFZmZlY3RzLmxlbmd0aDsgKVxuICAgICAgICB0aGlzLnBvcEVmZmVjdCgpO1xuICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgcmV0dXJuIHIuYXBwbHlFZmZlY3Qobik7XG4gICAgICB9KTtcbiAgICB9LCBlLnByb3RvdHlwZS5hcHBseUVmZmVjdCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHRoaXMuY3R4LnNhdmUoKSwgb2wodCkgJiYgKHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdC5vcGFjaXR5KSwgYWwodCkgJiYgKHRoaXMuY3R4LnRyYW5zbGF0ZSh0Lm9mZnNldFgsIHQub2Zmc2V0WSksIHRoaXMuY3R4LnRyYW5zZm9ybSh0Lm1hdHJpeFswXSwgdC5tYXRyaXhbMV0sIHQubWF0cml4WzJdLCB0Lm1hdHJpeFszXSwgdC5tYXRyaXhbNF0sIHQubWF0cml4WzVdKSwgdGhpcy5jdHgudHJhbnNsYXRlKC10Lm9mZnNldFgsIC10Lm9mZnNldFkpKSwgTXModCkgJiYgKHRoaXMucGF0aCh0LnBhdGgpLCB0aGlzLmN0eC5jbGlwKCkpLCB0aGlzLl9hY3RpdmVFZmZlY3RzLnB1c2godCk7XG4gICAgfSwgZS5wcm90b3R5cGUucG9wRWZmZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9hY3RpdmVFZmZlY3RzLnBvcCgpLCB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfSwgZS5wcm90b3R5cGUucmVuZGVyU3RhY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgc3dpdGNoIChuLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiByID0gdC5lbGVtZW50LmNvbnRhaW5lci5zdHlsZXMsIHIuaXNWaXNpYmxlKCkgPyBbNCwgdGhpcy5yZW5kZXJTdGFja0NvbnRlbnQodCldIDogWzMsIDJdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBuLnNlbnQoKSwgbi5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgZS5wcm90b3R5cGUucmVuZGVyTm9kZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBxKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFoodGhpcywgZnVuY3Rpb24ocikge1xuICAgICAgICAgIHN3aXRjaCAoci5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAoXyhcbiAgICAgICAgICAgICAgICB0LmNvbnRhaW5lci5mbGFncyxcbiAgICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgICAgIC8qIERFQlVHX1JFTkRFUiAqL1xuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICByZXR1cm4gdC5jb250YWluZXIuc3R5bGVzLmlzVmlzaWJsZSgpID8gWzQsIHRoaXMucmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKHQpXSA6IFszLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgcmV0dXJuIHIuc2VudCgpLCBbNCwgdGhpcy5yZW5kZXJOb2RlQ29udGVudCh0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHIuc2VudCgpLCByLmxhYmVsID0gMztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgLypyZXR1cm4qL1xuICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBlLnByb3RvdHlwZS5yZW5kZXJUZXh0V2l0aExldHRlclNwYWNpbmcgPSBmdW5jdGlvbih0LCByLCBuKSB7XG4gICAgICB2YXIgcyA9IHRoaXM7XG4gICAgICBpZiAociA9PT0gMClcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodC50ZXh0LCB0LmJvdW5kcy5sZWZ0LCB0LmJvdW5kcy50b3AgKyBuKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgQiA9IEVyKHQudGV4dCk7XG4gICAgICAgIEIucmVkdWNlKGZ1bmN0aW9uKGksIGEpIHtcbiAgICAgICAgICByZXR1cm4gcy5jdHguZmlsbFRleHQoYSwgaSwgdC5ib3VuZHMudG9wICsgbiksIGkgKyBzLmN0eC5tZWFzdXJlVGV4dChhKS53aWR0aDtcbiAgICAgICAgfSwgdC5ib3VuZHMubGVmdCk7XG4gICAgICB9XG4gICAgfSwgZS5wcm90b3R5cGUuY3JlYXRlRm9udFN0eWxlID0gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHIgPSB0LmZvbnRWYXJpYW50LmZpbHRlcihmdW5jdGlvbihCKSB7XG4gICAgICAgIHJldHVybiBCID09PSBcIm5vcm1hbFwiIHx8IEIgPT09IFwic21hbGwtY2Fwc1wiO1xuICAgICAgfSkuam9pbihcIlwiKSwgbiA9IG1sKHQuZm9udEZhbWlseSkuam9pbihcIiwgXCIpLCBzID0gSWUodC5mb250U2l6ZSkgPyBcIlwiICsgdC5mb250U2l6ZS5udW1iZXIgKyB0LmZvbnRTaXplLnVuaXQgOiB0LmZvbnRTaXplLm51bWJlciArIFwicHhcIjtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFt0LmZvbnRTdHlsZSwgciwgdC5mb250V2VpZ2h0LCBzLCBuXS5qb2luKFwiIFwiKSxcbiAgICAgICAgbixcbiAgICAgICAgc1xuICAgICAgXTtcbiAgICB9LCBlLnByb3RvdHlwZS5yZW5kZXJUZXh0Tm9kZSA9IGZ1bmN0aW9uKHQsIHIpIHtcbiAgICAgIHJldHVybiBxKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG4sIHMsIEIsIGksIGEsIG8sIGMsIGwsIGcgPSB0aGlzO1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihVKSB7XG4gICAgICAgICAgcmV0dXJuIG4gPSB0aGlzLmNyZWF0ZUZvbnRTdHlsZShyKSwgcyA9IG5bMF0sIEIgPSBuWzFdLCBpID0gblsyXSwgdGhpcy5jdHguZm9udCA9IHMsIHRoaXMuY3R4LmRpcmVjdGlvbiA9IHIuZGlyZWN0aW9uID09PSAxID8gXCJydGxcIiA6IFwibHRyXCIsIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiLCB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSBcImFscGhhYmV0aWNcIiwgYSA9IHRoaXMuZm9udE1ldHJpY3MuZ2V0TWV0cmljcyhCLCBpKSwgbyA9IGEuYmFzZWxpbmUsIGMgPSBhLm1pZGRsZSwgbCA9IHIucGFpbnRPcmRlciwgdC50ZXh0Qm91bmRzLmZvckVhY2goZnVuY3Rpb24odykge1xuICAgICAgICAgICAgbC5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChmKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgZy5jdHguZmlsbFN0eWxlID0gWChyLmNvbG9yKSwgZy5yZW5kZXJUZXh0V2l0aExldHRlclNwYWNpbmcodywgci5sZXR0ZXJTcGFjaW5nLCBvKTtcbiAgICAgICAgICAgICAgICAgIHZhciBJID0gci50ZXh0U2hhZG93O1xuICAgICAgICAgICAgICAgICAgSS5sZW5ndGggJiYgdy50ZXh0LnRyaW0oKS5sZW5ndGggJiYgKEkuc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICAgICAgICBnLmN0eC5zaGFkb3dDb2xvciA9IFgoaC5jb2xvciksIGcuY3R4LnNoYWRvd09mZnNldFggPSBoLm9mZnNldFgubnVtYmVyICogZy5vcHRpb25zLnNjYWxlLCBnLmN0eC5zaGFkb3dPZmZzZXRZID0gaC5vZmZzZXRZLm51bWJlciAqIGcub3B0aW9ucy5zY2FsZSwgZy5jdHguc2hhZG93Qmx1ciA9IGguYmx1ci5udW1iZXIsIGcucmVuZGVyVGV4dFdpdGhMZXR0ZXJTcGFjaW5nKHcsIHIubGV0dGVyU3BhY2luZywgbyk7XG4gICAgICAgICAgICAgICAgICB9KSwgZy5jdHguc2hhZG93Q29sb3IgPSBcIlwiLCBnLmN0eC5zaGFkb3dPZmZzZXRYID0gMCwgZy5jdHguc2hhZG93T2Zmc2V0WSA9IDAsIGcuY3R4LnNoYWRvd0JsdXIgPSAwKSwgci50ZXh0RGVjb3JhdGlvbkxpbmUubGVuZ3RoICYmIChnLmN0eC5maWxsU3R5bGUgPSBYKHIudGV4dERlY29yYXRpb25Db2xvciB8fCByLmNvbG9yKSwgci50ZXh0RGVjb3JhdGlvbkxpbmUuZm9yRWFjaChmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGcuY3R4LmZpbGxSZWN0KHcuYm91bmRzLmxlZnQsIE1hdGgucm91bmQody5ib3VuZHMudG9wICsgbyksIHcuYm91bmRzLndpZHRoLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGcuY3R4LmZpbGxSZWN0KHcuYm91bmRzLmxlZnQsIE1hdGgucm91bmQody5ib3VuZHMudG9wKSwgdy5ib3VuZHMud2lkdGgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZy5jdHguZmlsbFJlY3Qody5ib3VuZHMubGVmdCwgTWF0aC5jZWlsKHcuYm91bmRzLnRvcCArIGMpLCB3LmJvdW5kcy53aWR0aCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgci53ZWJraXRUZXh0U3Ryb2tlV2lkdGggJiYgdy50ZXh0LnRyaW0oKS5sZW5ndGggJiYgKGcuY3R4LnN0cm9rZVN0eWxlID0gWChyLndlYmtpdFRleHRTdHJva2VDb2xvciksIGcuY3R4LmxpbmVXaWR0aCA9IHIud2Via2l0VGV4dFN0cm9rZVdpZHRoLCBnLmN0eC5saW5lSm9pbiA9IHdpbmRvdy5jaHJvbWUgPyBcIm1pdGVyXCIgOiBcInJvdW5kXCIsIGcuY3R4LnN0cm9rZVRleHQody50ZXh0LCB3LmJvdW5kcy5sZWZ0LCB3LmJvdW5kcy50b3AgKyBvKSksIGcuY3R4LnN0cm9rZVN0eWxlID0gXCJcIiwgZy5jdHgubGluZVdpZHRoID0gMCwgZy5jdHgubGluZUpvaW4gPSBcIm1pdGVyXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksIFtcbiAgICAgICAgICAgIDJcbiAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIGUucHJvdG90eXBlLnJlbmRlclJlcGxhY2VkRWxlbWVudCA9IGZ1bmN0aW9uKHQsIHIsIG4pIHtcbiAgICAgIGlmIChuICYmIHQuaW50cmluc2ljV2lkdGggPiAwICYmIHQuaW50cmluc2ljSGVpZ2h0ID4gMCkge1xuICAgICAgICB2YXIgcyA9IGx0KHQpLCBCID0gY3Qocik7XG4gICAgICAgIHRoaXMucGF0aChCKSwgdGhpcy5jdHguc2F2ZSgpLCB0aGlzLmN0eC5jbGlwKCksIHRoaXMuY3R4LmRyYXdJbWFnZShuLCAwLCAwLCB0LmludHJpbnNpY1dpZHRoLCB0LmludHJpbnNpY0hlaWdodCwgcy5sZWZ0LCBzLnRvcCwgcy53aWR0aCwgcy5oZWlnaHQpLCB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfSwgZS5wcm90b3R5cGUucmVuZGVyTm9kZUNvbnRlbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByLCBuLCBzLCBCLCBpLCBhLCBRLCBRLCBvLCBjLCBsLCBnLCBGLCBVLCB3LCB2LCBmLCBJLCBoLCBRLCBMLCBGLCB2O1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbih1KSB7XG4gICAgICAgICAgc3dpdGNoICh1LmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlFZmZlY3RzKHQuZ2V0RWZmZWN0cyhcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgLyogQ09OVEVOVCAqL1xuICAgICAgICAgICAgICApKSwgciA9IHQuY29udGFpbmVyLCBuID0gdC5jdXJ2ZXMsIHMgPSByLnN0eWxlcywgQiA9IDAsIGkgPSByLnRleHROb2RlcywgdS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHJldHVybiBCIDwgaS5sZW5ndGggPyAoYSA9IGlbQl0sIFs0LCB0aGlzLnJlbmRlclRleHROb2RlKGEsIHMpXSkgOiBbMywgNF07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHUuc2VudCgpLCB1LmxhYmVsID0gMztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcmV0dXJuIEIrKywgWzMsIDFdO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgRnMpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICB1LmxhYmVsID0gNTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgcmV0dXJuIHUudHJ5cy5wdXNoKFs1LCA3LCAsIDhdKSwgWzQsIHRoaXMuY29udGV4dC5jYWNoZS5tYXRjaChyLnNyYyldO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICByZXR1cm4gUSA9IHUuc2VudCgpLCB0aGlzLnJlbmRlclJlcGxhY2VkRWxlbWVudChyLCBuLCBRKSwgWzMsIDhdO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICByZXR1cm4gdS5zZW50KCksIHRoaXMuY29udGV4dC5sb2dnZXIuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGltYWdlIFwiICsgci5zcmMpLCBbMywgOF07XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgaHMgJiYgdGhpcy5yZW5kZXJSZXBsYWNlZEVsZW1lbnQociwgbiwgci5jYW52YXMpLCAhKHIgaW5zdGFuY2VvZiBkcykpIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICB1LmxhYmVsID0gOTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgcmV0dXJuIHUudHJ5cy5wdXNoKFs5LCAxMSwgLCAxMl0pLCBbNCwgdGhpcy5jb250ZXh0LmNhY2hlLm1hdGNoKHIuc3ZnKV07XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICByZXR1cm4gUSA9IHUuc2VudCgpLCB0aGlzLnJlbmRlclJlcGxhY2VkRWxlbWVudChyLCBuLCBRKSwgWzMsIDEyXTtcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHJldHVybiB1LnNlbnQoKSwgdGhpcy5jb250ZXh0LmxvZ2dlci5lcnJvcihcIkVycm9yIGxvYWRpbmcgc3ZnIFwiICsgci5zdmcuc3Vic3RyaW5nKDAsIDI1NSkpLCBbMywgMTJdO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgcmV0dXJuIHIgaW5zdGFuY2VvZiB2cyAmJiByLnRyZWUgPyAobyA9IG5ldyBlKHRoaXMuY29udGV4dCwge1xuICAgICAgICAgICAgICAgIHNjYWxlOiB0aGlzLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHIud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByLmhlaWdodFxuICAgICAgICAgICAgICB9KSwgWzQsIG8ucmVuZGVyKHIudHJlZSldKSA6IFszLCAxNF07XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICBjID0gdS5zZW50KCksIHIud2lkdGggJiYgci5oZWlnaHQgJiYgdGhpcy5jdHguZHJhd0ltYWdlKGMsIDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0LCByLmJvdW5kcy5sZWZ0LCByLmJvdW5kcy50b3AsIHIuYm91bmRzLndpZHRoLCByLmJvdW5kcy5oZWlnaHQpLCB1LmxhYmVsID0gMTQ7XG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIEhyICYmIChsID0gTWF0aC5taW4oci5ib3VuZHMud2lkdGgsIHIuYm91bmRzLmhlaWdodCksIHIudHlwZSA9PT0gc3QgPyByLmNoZWNrZWQgJiYgKHRoaXMuY3R4LnNhdmUoKSwgdGhpcy5wYXRoKFtcbiAgICAgICAgICAgICAgICBuZXcgZChyLmJvdW5kcy5sZWZ0ICsgbCAqIDAuMzkzNjMsIHIuYm91bmRzLnRvcCArIGwgKiAwLjc5KSxcbiAgICAgICAgICAgICAgICBuZXcgZChyLmJvdW5kcy5sZWZ0ICsgbCAqIDAuMTYsIHIuYm91bmRzLnRvcCArIGwgKiAwLjU1NDkpLFxuICAgICAgICAgICAgICAgIG5ldyBkKHIuYm91bmRzLmxlZnQgKyBsICogMC4yNzM0Nywgci5ib3VuZHMudG9wICsgbCAqIDAuNDQwNzEpLFxuICAgICAgICAgICAgICAgIG5ldyBkKHIuYm91bmRzLmxlZnQgKyBsICogMC4zOTY5NCwgci5ib3VuZHMudG9wICsgbCAqIDAuNTY0OSksXG4gICAgICAgICAgICAgICAgbmV3IGQoci5ib3VuZHMubGVmdCArIGwgKiAwLjcyOTgzLCByLmJvdW5kcy50b3AgKyBsICogMC4yMyksXG4gICAgICAgICAgICAgICAgbmV3IGQoci5ib3VuZHMubGVmdCArIGwgKiAwLjg0LCByLmJvdW5kcy50b3AgKyBsICogMC4zNDA4NSksXG4gICAgICAgICAgICAgICAgbmV3IGQoci5ib3VuZHMubGVmdCArIGwgKiAwLjM5MzYzLCByLmJvdW5kcy50b3AgKyBsICogMC43OSlcbiAgICAgICAgICAgICAgXSksIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFgoVW4pLCB0aGlzLmN0eC5maWxsKCksIHRoaXMuY3R4LnJlc3RvcmUoKSkgOiByLnR5cGUgPT09IEJ0ICYmIHIuY2hlY2tlZCAmJiAodGhpcy5jdHguc2F2ZSgpLCB0aGlzLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5jdHguYXJjKHIuYm91bmRzLmxlZnQgKyBsIC8gMiwgci5ib3VuZHMudG9wICsgbCAvIDIsIGwgLyA0LCAwLCBNYXRoLlBJICogMiwgITApLCB0aGlzLmN0eC5maWxsU3R5bGUgPSBYKFVuKSwgdGhpcy5jdHguZmlsbCgpLCB0aGlzLmN0eC5yZXN0b3JlKCkpKSwgRWwocikgJiYgci52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSB0aGlzLmNyZWF0ZUZvbnRTdHlsZShzKSwgRiA9IGdbMF0sIFUgPSBnWzFdLCB3ID0gdGhpcy5mb250TWV0cmljcy5nZXRNZXRyaWNzKEYsIFUpLmJhc2VsaW5lLCB0aGlzLmN0eC5mb250ID0gRiwgdGhpcy5jdHguZmlsbFN0eWxlID0gWChzLmNvbG9yKSwgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJhbHBoYWJldGljXCIsIHRoaXMuY3R4LnRleHRBbGlnbiA9IHZsKHIuc3R5bGVzLnRleHRBbGlnbiksIHYgPSBsdChyKSwgZiA9IDAsIHIuc3R5bGVzLnRleHRBbGlnbikge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmICs9IHYud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZiArPSB2LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSSA9IHYuYWRkKGYsIDAsIDAsIC12LmhlaWdodCAvIDIgKyAxKSwgdGhpcy5jdHguc2F2ZSgpLCB0aGlzLnBhdGgoW1xuICAgICAgICAgICAgICAgICAgbmV3IGQodi5sZWZ0LCB2LnRvcCksXG4gICAgICAgICAgICAgICAgICBuZXcgZCh2LmxlZnQgKyB2LndpZHRoLCB2LnRvcCksXG4gICAgICAgICAgICAgICAgICBuZXcgZCh2LmxlZnQgKyB2LndpZHRoLCB2LnRvcCArIHYuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgIG5ldyBkKHYubGVmdCwgdi50b3AgKyB2LmhlaWdodClcbiAgICAgICAgICAgICAgICBdKSwgdGhpcy5jdHguY2xpcCgpLCB0aGlzLnJlbmRlclRleHRXaXRoTGV0dGVyU3BhY2luZyhuZXcgaGUoci52YWx1ZSwgSSksIHMubGV0dGVyU3BhY2luZywgdyksIHRoaXMuY3R4LnJlc3RvcmUoKSwgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJhbHBoYWJldGljXCIsIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghXyhcbiAgICAgICAgICAgICAgICByLnN0eWxlcy5kaXNwbGF5LFxuICAgICAgICAgICAgICAgIDIwNDhcbiAgICAgICAgICAgICAgICAvKiBMSVNUX0lURU0gKi9cbiAgICAgICAgICAgICAgKSkgcmV0dXJuIFszLCAyMF07XG4gICAgICAgICAgICAgIGlmIChyLnN0eWxlcy5saXN0U3R5bGVJbWFnZSA9PT0gbnVsbCkgcmV0dXJuIFszLCAxOV07XG4gICAgICAgICAgICAgIGlmIChoID0gci5zdHlsZXMubGlzdFN0eWxlSW1hZ2UsIGgudHlwZSAhPT0gMCkgcmV0dXJuIFszLCAxOF07XG4gICAgICAgICAgICAgIFEgPSB2b2lkIDAsIEwgPSBoLnVybCwgdS5sYWJlbCA9IDE1O1xuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgcmV0dXJuIHUudHJ5cy5wdXNoKFsxNSwgMTcsICwgMThdKSwgWzQsIHRoaXMuY29udGV4dC5jYWNoZS5tYXRjaChMKV07XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICByZXR1cm4gUSA9IHUuc2VudCgpLCB0aGlzLmN0eC5kcmF3SW1hZ2UoUSwgci5ib3VuZHMubGVmdCAtIChRLndpZHRoICsgMTApLCByLmJvdW5kcy50b3ApLCBbMywgMThdO1xuICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgcmV0dXJuIHUuc2VudCgpLCB0aGlzLmNvbnRleHQubG9nZ2VyLmVycm9yKFwiRXJyb3IgbG9hZGluZyBsaXN0LXN0eWxlLWltYWdlIFwiICsgTCksIFszLCAxOF07XG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICByZXR1cm4gWzMsIDIwXTtcbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgIHQubGlzdFZhbHVlICYmIHIuc3R5bGVzLmxpc3RTdHlsZVR5cGUgIT09IC0xICYmIChGID0gdGhpcy5jcmVhdGVGb250U3R5bGUocylbMF0sIHRoaXMuY3R4LmZvbnQgPSBGLCB0aGlzLmN0eC5maWxsU3R5bGUgPSBYKHMuY29sb3IpLCB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiLCB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCIsIHYgPSBuZXcgdkEoci5ib3VuZHMubGVmdCwgci5ib3VuZHMudG9wICsgUyhyLnN0eWxlcy5wYWRkaW5nVG9wLCByLmJvdW5kcy53aWR0aCksIHIuYm91bmRzLndpZHRoLCBBbihzLmxpbmVIZWlnaHQsIHMuZm9udFNpemUubnVtYmVyKSAvIDIgKyAxKSwgdGhpcy5yZW5kZXJUZXh0V2l0aExldHRlclNwYWNpbmcobmV3IGhlKHQubGlzdFZhbHVlLCB2KSwgcy5sZXR0ZXJTcGFjaW5nLCBBbihzLmxpbmVIZWlnaHQsIHMuZm9udFNpemUubnVtYmVyKSAvIDIgKyAyKSwgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJib3R0b21cIiwgdGhpcy5jdHgudGV4dEFsaWduID0gXCJsZWZ0XCIpLCB1LmxhYmVsID0gMjA7XG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAvKnJldHVybiovXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIGUucHJvdG90eXBlLnJlbmRlclN0YWNrQ29udGVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBxKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHIsIG4sIGgsIHMsIEIsIGgsIGksIGEsIGgsIG8sIGMsIGgsIGwsIGcsIGgsIFUsIHcsIGgsIGYsIEksIGg7XG4gICAgICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKFEpIHtcbiAgICAgICAgICBzd2l0Y2ggKFEubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaWYgKF8oXG4gICAgICAgICAgICAgICAgdC5lbGVtZW50LmNvbnRhaW5lci5mbGFncyxcbiAgICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgICAgIC8qIERFQlVHX1JFTkRFUiAqL1xuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMucmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKHQuZWxlbWVudCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBRLnNlbnQoKSwgciA9IDAsIG4gPSB0Lm5lZ2F0aXZlWkluZGV4LCBRLmxhYmVsID0gMjtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgcmV0dXJuIHIgPCBuLmxlbmd0aCA/IChoID0gbltyXSwgWzQsIHRoaXMucmVuZGVyU3RhY2soaCldKSA6IFszLCA1XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgUS5zZW50KCksIFEubGFiZWwgPSA0O1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICByZXR1cm4gcisrLCBbMywgMl07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5yZW5kZXJOb2RlQ29udGVudCh0LmVsZW1lbnQpXTtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgUS5zZW50KCksIHMgPSAwLCBCID0gdC5ub25JbmxpbmVMZXZlbCwgUS5sYWJlbCA9IDc7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIHJldHVybiBzIDwgQi5sZW5ndGggPyAoaCA9IEJbc10sIFs0LCB0aGlzLnJlbmRlck5vZGUoaCldKSA6IFszLCAxMF07XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIFEuc2VudCgpLCBRLmxhYmVsID0gOTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgcmV0dXJuIHMrKywgWzMsIDddO1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgaSA9IDAsIGEgPSB0Lm5vblBvc2l0aW9uZWRGbG9hdHMsIFEubGFiZWwgPSAxMTtcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHJldHVybiBpIDwgYS5sZW5ndGggPyAoaCA9IGFbaV0sIFs0LCB0aGlzLnJlbmRlclN0YWNrKGgpXSkgOiBbMywgMTRdO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgUS5zZW50KCksIFEubGFiZWwgPSAxMztcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIHJldHVybiBpKyssIFszLCAxMV07XG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICBvID0gMCwgYyA9IHQubm9uUG9zaXRpb25lZElubGluZUxldmVsLCBRLmxhYmVsID0gMTU7XG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICByZXR1cm4gbyA8IGMubGVuZ3RoID8gKGggPSBjW29dLCBbNCwgdGhpcy5yZW5kZXJTdGFjayhoKV0pIDogWzMsIDE4XTtcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgIFEuc2VudCgpLCBRLmxhYmVsID0gMTc7XG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICByZXR1cm4gbysrLCBbMywgMTVdO1xuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgbCA9IDAsIGcgPSB0LmlubGluZUxldmVsLCBRLmxhYmVsID0gMTk7XG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICByZXR1cm4gbCA8IGcubGVuZ3RoID8gKGggPSBnW2xdLCBbNCwgdGhpcy5yZW5kZXJOb2RlKGgpXSkgOiBbMywgMjJdO1xuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgUS5zZW50KCksIFEubGFiZWwgPSAyMTtcbiAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgIHJldHVybiBsKyssIFszLCAxOV07XG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBVID0gMCwgdyA9IHQuemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHksIFEubGFiZWwgPSAyMztcbiAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgIHJldHVybiBVIDwgdy5sZW5ndGggPyAoaCA9IHdbVV0sIFs0LCB0aGlzLnJlbmRlclN0YWNrKGgpXSkgOiBbMywgMjZdO1xuICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgUS5zZW50KCksIFEubGFiZWwgPSAyNTtcbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgIHJldHVybiBVKyssIFszLCAyM107XG4gICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICBmID0gMCwgSSA9IHQucG9zaXRpdmVaSW5kZXgsIFEubGFiZWwgPSAyNztcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgIHJldHVybiBmIDwgSS5sZW5ndGggPyAoaCA9IElbZl0sIFs0LCB0aGlzLnJlbmRlclN0YWNrKGgpXSkgOiBbMywgMzBdO1xuICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgUS5zZW50KCksIFEubGFiZWwgPSAyOTtcbiAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgIHJldHVybiBmKyssIFszLCAyN107XG4gICAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAvKnJldHVybiovXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIGUucHJvdG90eXBlLm1hc2sgPSBmdW5jdGlvbih0KSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5jdHgubW92ZVRvKDAsIDApLCB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIDApLCB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCksIHRoaXMuY3R4LmxpbmVUbygwLCB0aGlzLmNhbnZhcy5oZWlnaHQpLCB0aGlzLmN0eC5saW5lVG8oMCwgMCksIHRoaXMuZm9ybWF0UGF0aCh0LnNsaWNlKDApLnJldmVyc2UoKSksIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sIGUucHJvdG90eXBlLnBhdGggPSBmdW5jdGlvbih0KSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5mb3JtYXRQYXRoKHQpLCB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9LCBlLnByb3RvdHlwZS5mb3JtYXRQYXRoID0gZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uKG4sIHMpIHtcbiAgICAgICAgdmFyIEIgPSBCQShuKSA/IG4uc3RhcnQgOiBuO1xuICAgICAgICBzID09PSAwID8gci5jdHgubW92ZVRvKEIueCwgQi55KSA6IHIuY3R4LmxpbmVUbyhCLngsIEIueSksIEJBKG4pICYmIHIuY3R4LmJlemllckN1cnZlVG8obi5zdGFydENvbnRyb2wueCwgbi5zdGFydENvbnRyb2wueSwgbi5lbmRDb250cm9sLngsIG4uZW5kQ29udHJvbC55LCBuLmVuZC54LCBuLmVuZC55KTtcbiAgICAgIH0pO1xuICAgIH0sIGUucHJvdG90eXBlLnJlbmRlclJlcGVhdCA9IGZ1bmN0aW9uKHQsIHIsIG4sIHMpIHtcbiAgICAgIHRoaXMucGF0aCh0KSwgdGhpcy5jdHguZmlsbFN0eWxlID0gciwgdGhpcy5jdHgudHJhbnNsYXRlKG4sIHMpLCB0aGlzLmN0eC5maWxsKCksIHRoaXMuY3R4LnRyYW5zbGF0ZSgtbiwgLXMpO1xuICAgIH0sIGUucHJvdG90eXBlLnJlc2l6ZUltYWdlID0gZnVuY3Rpb24odCwgciwgbikge1xuICAgICAgdmFyIHM7XG4gICAgICBpZiAodC53aWR0aCA9PT0gciAmJiB0LmhlaWdodCA9PT0gbilcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB2YXIgQiA9IChzID0gdGhpcy5jYW52YXMub3duZXJEb2N1bWVudCkgIT09IG51bGwgJiYgcyAhPT0gdm9pZCAwID8gcyA6IGRvY3VtZW50LCBpID0gQi5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgaS53aWR0aCA9IE1hdGgubWF4KDEsIHIpLCBpLmhlaWdodCA9IE1hdGgubWF4KDEsIG4pO1xuICAgICAgdmFyIGEgPSBpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIHJldHVybiBhLmRyYXdJbWFnZSh0LCAwLCAwLCB0LndpZHRoLCB0LmhlaWdodCwgMCwgMCwgciwgbiksIGk7XG4gICAgfSwgZS5wcm90b3R5cGUucmVuZGVyQmFja2dyb3VuZEltYWdlID0gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHEodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgciwgbiwgcywgQiwgaSwgYTtcbiAgICAgICAgcmV0dXJuIFoodGhpcywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICByID0gdC5zdHlsZXMuYmFja2dyb3VuZEltYWdlLmxlbmd0aCAtIDEsIG4gPSBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwsIGcsIFUsIGIsIEosIE4sIHksIFQsIG0sIHcsIGIsIEosIE4sIHksIFQsIGYsIEksIGgsIFEsIEwsIEYsIHYsIHUsIEgsIG0sIEUsIGIsIE0sIFYsIHksIFQsIHosIEosIE4sIG9BLCAkLCB1QSwgaEEsIHdBLCBBQSwgUUEsIGNBO1xuICAgICAgICAgICAgICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKElBKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKElBLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYy50eXBlICE9PSAwKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgIGwgPSB2b2lkIDAsIGcgPSBjLnVybCwgSUEubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElBLnRyeXMucHVzaChbMSwgMywgLCA0XSksIFs0LCBzLmNvbnRleHQuY2FjaGUubWF0Y2goZyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwgPSBJQS5zZW50KCksIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJQS5zZW50KCksIHMuY29udGV4dC5sb2dnZXIuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGJhY2tncm91bmQtaW1hZ2UgXCIgKyBnKSwgWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwgJiYgKFUgPSBXdCh0LCByLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBsLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsLndpZHRoIC8gbC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICBdKSwgYiA9IFVbMF0sIEogPSBVWzFdLCBOID0gVVsyXSwgeSA9IFVbM10sIFQgPSBVWzRdLCBtID0gcy5jdHguY3JlYXRlUGF0dGVybihzLnJlc2l6ZUltYWdlKGwsIHksIFQpLCBcInJlcGVhdFwiKSwgcy5yZW5kZXJSZXBlYXQoYiwgbSwgSiwgTikpLCBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICBpYShjKSA/ICh3ID0gV3QodCwgciwgW251bGwsIG51bGwsIG51bGxdKSwgYiA9IHdbMF0sIEogPSB3WzFdLCBOID0gd1syXSwgeSA9IHdbM10sIFQgPSB3WzRdLCBmID0gdGEoYy5hbmdsZSwgeSwgVCksIEkgPSBmWzBdLCBoID0gZlsxXSwgUSA9IGZbMl0sIEwgPSBmWzNdLCBGID0gZls0XSwgdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIHYud2lkdGggPSB5LCB2LmhlaWdodCA9IFQsIHUgPSB2LmdldENvbnRleHQoXCIyZFwiKSwgSCA9IHUuY3JlYXRlTGluZWFyR3JhZGllbnQoaCwgTCwgUSwgRiksIHpyKGMuc3RvcHMsIEkpLmZvckVhY2goZnVuY3Rpb24oZEEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBILmFkZENvbG9yU3RvcChkQS5zdG9wLCBYKGRBLmNvbG9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksIHUuZmlsbFN0eWxlID0gSCwgdS5maWxsUmVjdCgwLCAwLCB5LCBUKSwgeSA+IDAgJiYgVCA+IDAgJiYgKG0gPSBzLmN0eC5jcmVhdGVQYXR0ZXJuKHYsIFwicmVwZWF0XCIpLCBzLnJlbmRlclJlcGVhdChiLCBtLCBKLCBOKSkpIDogYWEoYykgJiYgKEUgPSBXdCh0LCByLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBdKSwgYiA9IEVbMF0sIE0gPSBFWzFdLCBWID0gRVsyXSwgeSA9IEVbM10sIFQgPSBFWzRdLCB6ID0gYy5wb3NpdGlvbi5sZW5ndGggPT09IDAgPyBbaHJdIDogYy5wb3NpdGlvbiwgSiA9IFMoelswXSwgeSksIE4gPSBTKHpbei5sZW5ndGggLSAxXSwgVCksIG9BID0gcmEoYywgSiwgTiwgeSwgVCksICQgPSBvQVswXSwgdUEgPSBvQVsxXSwgJCA+IDAgJiYgdUEgPiAwICYmIChoQSA9IHMuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KE0gKyBKLCBWICsgTiwgMCwgTSArIEosIFYgKyBOLCAkKSwgenIoYy5zdG9wcywgJCAqIDIpLmZvckVhY2goZnVuY3Rpb24oZEEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoQS5hZGRDb2xvclN0b3AoZEEuc3RvcCwgWChkQS5jb2xvcikpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBzLnBhdGgoYiksIHMuY3R4LmZpbGxTdHlsZSA9IGhBLCAkICE9PSB1QSA/ICh3QSA9IHQuYm91bmRzLmxlZnQgKyAwLjUgKiB0LmJvdW5kcy53aWR0aCwgQUEgPSB0LmJvdW5kcy50b3AgKyAwLjUgKiB0LmJvdW5kcy5oZWlnaHQsIFFBID0gdUEgLyAkLCBjQSA9IDEgLyBRQSwgcy5jdHguc2F2ZSgpLCBzLmN0eC50cmFuc2xhdGUod0EsIEFBKSwgcy5jdHgudHJhbnNmb3JtKDEsIDAsIDAsIFFBLCAwLCAwKSwgcy5jdHgudHJhbnNsYXRlKC13QSwgLUFBKSwgcy5jdHguZmlsbFJlY3QoTSwgY0EgKiAoViAtIEFBKSArIEFBLCB5LCBUICogY0EpLCBzLmN0eC5yZXN0b3JlKCkpIDogcy5jdHguZmlsbCgpKSksIElBLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByLS0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LCBzID0gdGhpcywgQiA9IDAsIGkgPSB0LnN0eWxlcy5iYWNrZ3JvdW5kSW1hZ2Uuc2xpY2UoMCkucmV2ZXJzZSgpLCBvLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgcmV0dXJuIEIgPCBpLmxlbmd0aCA/IChhID0gaVtCXSwgWzUsIG4oYSldKSA6IFszLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgby5zZW50KCksIG8ubGFiZWwgPSAzO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICByZXR1cm4gQisrLCBbMywgMV07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgZS5wcm90b3R5cGUucmVuZGVyU29saWRCb3JkZXIgPSBmdW5jdGlvbih0LCByLCBuKSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXRoKEtuKG4sIHIpKSwgdGhpcy5jdHguZmlsbFN0eWxlID0gWCh0KSwgdGhpcy5jdHguZmlsbCgpLCBbXG4gICAgICAgICAgICAyXG4gICAgICAgICAgICAvKnJldHVybiovXG4gICAgICAgICAgXTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBlLnByb3RvdHlwZS5yZW5kZXJEb3VibGVCb3JkZXIgPSBmdW5jdGlvbih0LCByLCBuLCBzKSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBCLCBpO1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgc3dpdGNoIChhLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiByIDwgMyA/IFs0LCB0aGlzLnJlbmRlclNvbGlkQm9yZGVyKHQsIG4sIHMpXSA6IFszLCAyXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgcmV0dXJuIGEuc2VudCgpLCBbXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgcmV0dXJuIEIgPSBnbChzLCBuKSwgdGhpcy5wYXRoKEIpLCB0aGlzLmN0eC5maWxsU3R5bGUgPSBYKHQpLCB0aGlzLmN0eC5maWxsKCksIGkgPSB1bChzLCBuKSwgdGhpcy5wYXRoKGkpLCB0aGlzLmN0eC5maWxsKCksIFtcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgLypyZXR1cm4qL1xuICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBlLnByb3RvdHlwZS5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByLCBuLCBzLCBCLCBpLCBhLCBvLCBjLCBsID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFoodGhpcywgZnVuY3Rpb24oZykge1xuICAgICAgICAgIHN3aXRjaCAoZy5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBseUVmZmVjdHModC5nZXRFZmZlY3RzKFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAvKiBCQUNLR1JPVU5EX0JPUkRFUlMgKi9cbiAgICAgICAgICAgICAgKSksIHIgPSB0LmNvbnRhaW5lci5zdHlsZXMsIG4gPSAhVEEoci5iYWNrZ3JvdW5kQ29sb3IpIHx8IHIuYmFja2dyb3VuZEltYWdlLmxlbmd0aCwgcyA9IFtcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiByLmJvcmRlclRvcFN0eWxlLCBjb2xvcjogci5ib3JkZXJUb3BDb2xvciwgd2lkdGg6IHIuYm9yZGVyVG9wV2lkdGggfSxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiByLmJvcmRlclJpZ2h0U3R5bGUsIGNvbG9yOiByLmJvcmRlclJpZ2h0Q29sb3IsIHdpZHRoOiByLmJvcmRlclJpZ2h0V2lkdGggfSxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiByLmJvcmRlckJvdHRvbVN0eWxlLCBjb2xvcjogci5ib3JkZXJCb3R0b21Db2xvciwgd2lkdGg6IHIuYm9yZGVyQm90dG9tV2lkdGggfSxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiByLmJvcmRlckxlZnRTdHlsZSwgY29sb3I6IHIuYm9yZGVyTGVmdENvbG9yLCB3aWR0aDogci5ib3JkZXJMZWZ0V2lkdGggfVxuICAgICAgICAgICAgICBdLCBCID0gSGwoJEEoci5iYWNrZ3JvdW5kQ2xpcCwgMCksIHQuY3VydmVzKSwgbiB8fCByLmJveFNoYWRvdy5sZW5ndGggPyAodGhpcy5jdHguc2F2ZSgpLCB0aGlzLnBhdGgoQiksIHRoaXMuY3R4LmNsaXAoKSwgVEEoci5iYWNrZ3JvdW5kQ29sb3IpIHx8ICh0aGlzLmN0eC5maWxsU3R5bGUgPSBYKHIuYmFja2dyb3VuZENvbG9yKSwgdGhpcy5jdHguZmlsbCgpKSwgWzQsIHRoaXMucmVuZGVyQmFja2dyb3VuZEltYWdlKHQuY29udGFpbmVyKV0pIDogWzMsIDJdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBnLnNlbnQoKSwgdGhpcy5jdHgucmVzdG9yZSgpLCByLmJveFNoYWRvdy5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbihVKSB7XG4gICAgICAgICAgICAgICAgbC5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIHZhciB3ID0gb3QodC5jdXJ2ZXMpLCBmID0gVS5pbnNldCA/IDAgOiBkbCwgSSA9IGNsKHcsIC1mICsgKFUuaW5zZXQgPyAxIDogLTEpICogVS5zcHJlYWQubnVtYmVyLCAoVS5pbnNldCA/IDEgOiAtMSkgKiBVLnNwcmVhZC5udW1iZXIsIFUuc3ByZWFkLm51bWJlciAqIChVLmluc2V0ID8gLTIgOiAyKSwgVS5zcHJlYWQubnVtYmVyICogKFUuaW5zZXQgPyAtMiA6IDIpKTtcbiAgICAgICAgICAgICAgICBVLmluc2V0ID8gKGwucGF0aCh3KSwgbC5jdHguY2xpcCgpLCBsLm1hc2soSSkpIDogKGwubWFzayh3KSwgbC5jdHguY2xpcCgpLCBsLnBhdGgoSSkpLCBsLmN0eC5zaGFkb3dPZmZzZXRYID0gVS5vZmZzZXRYLm51bWJlciArIGYsIGwuY3R4LnNoYWRvd09mZnNldFkgPSBVLm9mZnNldFkubnVtYmVyLCBsLmN0eC5zaGFkb3dDb2xvciA9IFgoVS5jb2xvciksIGwuY3R4LnNoYWRvd0JsdXIgPSBVLmJsdXIubnVtYmVyLCBsLmN0eC5maWxsU3R5bGUgPSBVLmluc2V0ID8gWChVLmNvbG9yKSA6IFwicmdiYSgwLDAsMCwxKVwiLCBsLmN0eC5maWxsKCksIGwuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgfSksIGcubGFiZWwgPSAyO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpID0gMCwgYSA9IDAsIG8gPSBzLCBnLmxhYmVsID0gMztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcmV0dXJuIGEgPCBvLmxlbmd0aCA/IChjID0gb1thXSwgYy5zdHlsZSAhPT0gMCAmJiAhVEEoYy5jb2xvcikgJiYgYy53aWR0aCA+IDAgPyBjLnN0eWxlICE9PSAyID8gWzMsIDVdIDogWzQsIHRoaXMucmVuZGVyRGFzaGVkRG90dGVkQm9yZGVyKFxuICAgICAgICAgICAgICAgIGMuY29sb3IsXG4gICAgICAgICAgICAgICAgYy53aWR0aCxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHQuY3VydmVzLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAvKiBEQVNIRUQgKi9cbiAgICAgICAgICAgICAgKV0gOiBbMywgMTFdKSA6IFszLCAxM107XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHJldHVybiBnLnNlbnQoKSwgWzMsIDExXTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgcmV0dXJuIGMuc3R5bGUgIT09IDMgPyBbMywgN10gOiBbNCwgdGhpcy5yZW5kZXJEYXNoZWREb3R0ZWRCb3JkZXIoXG4gICAgICAgICAgICAgICAgYy5jb2xvcixcbiAgICAgICAgICAgICAgICBjLndpZHRoLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgdC5jdXJ2ZXMsXG4gICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIC8qIERPVFRFRCAqL1xuICAgICAgICAgICAgICApXTtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgcmV0dXJuIGcuc2VudCgpLCBbMywgMTFdO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICByZXR1cm4gYy5zdHlsZSAhPT0gNCA/IFszLCA5XSA6IFs0LCB0aGlzLnJlbmRlckRvdWJsZUJvcmRlcihjLmNvbG9yLCBjLndpZHRoLCBpLCB0LmN1cnZlcyldO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICByZXR1cm4gZy5zZW50KCksIFszLCAxMV07XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5yZW5kZXJTb2xpZEJvcmRlcihjLmNvbG9yLCBpLCB0LmN1cnZlcyldO1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgZy5zZW50KCksIGcubGFiZWwgPSAxMTtcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIGkrKywgZy5sYWJlbCA9IDEyO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgcmV0dXJuIGErKywgWzMsIDNdO1xuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgLypyZXR1cm4qL1xuICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBlLnByb3RvdHlwZS5yZW5kZXJEYXNoZWREb3R0ZWRCb3JkZXIgPSBmdW5jdGlvbih0LCByLCBuLCBzLCBCKSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCBhLCBvLCBjLCBsLCBnLCBVLCB3LCBmLCBJLCBoLCBRLCBMLCBGLCB2LCB1LCB2LCB1O1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihIKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3R4LnNhdmUoKSwgaSA9IHdsKHMsIG4pLCBhID0gS24ocywgbiksIEIgPT09IDIgJiYgKHRoaXMucGF0aChhKSwgdGhpcy5jdHguY2xpcCgpKSwgQkEoYVswXSkgPyAobyA9IGFbMF0uc3RhcnQueCwgYyA9IGFbMF0uc3RhcnQueSkgOiAobyA9IGFbMF0ueCwgYyA9IGFbMF0ueSksIEJBKGFbMV0pID8gKGwgPSBhWzFdLmVuZC54LCBnID0gYVsxXS5lbmQueSkgOiAobCA9IGFbMV0ueCwgZyA9IGFbMV0ueSksIG4gPT09IDAgfHwgbiA9PT0gMiA/IFUgPSBNYXRoLmFicyhvIC0gbCkgOiBVID0gTWF0aC5hYnMoYyAtIGcpLCB0aGlzLmN0eC5iZWdpblBhdGgoKSwgQiA9PT0gMyA/IHRoaXMuZm9ybWF0UGF0aChpKSA6IHRoaXMuZm9ybWF0UGF0aChhLnNsaWNlKDAsIDIpKSwgdyA9IHIgPCAzID8gciAqIDMgOiByICogMiwgZiA9IHIgPCAzID8gciAqIDIgOiByLCBCID09PSAzICYmICh3ID0gciwgZiA9IHIpLCBJID0gITAsIFUgPD0gdyAqIDIgPyBJID0gITEgOiBVIDw9IHcgKiAyICsgZiA/IChoID0gVSAvICgyICogdyArIGYpLCB3ICo9IGgsIGYgKj0gaCkgOiAoUSA9IE1hdGguZmxvb3IoKFUgKyBmKSAvICh3ICsgZikpLCBMID0gKFUgLSBRICogdykgLyAoUSAtIDEpLCBGID0gKFUgLSAoUSArIDEpICogdykgLyBRLCBmID0gRiA8PSAwIHx8IE1hdGguYWJzKGYgLSBMKSA8IE1hdGguYWJzKGYgLSBGKSA/IEwgOiBGKSwgSSAmJiAoQiA9PT0gMyA/IHRoaXMuY3R4LnNldExpbmVEYXNoKFswLCB3ICsgZl0pIDogdGhpcy5jdHguc2V0TGluZURhc2goW3csIGZdKSksIEIgPT09IDMgPyAodGhpcy5jdHgubGluZUNhcCA9IFwicm91bmRcIiwgdGhpcy5jdHgubGluZVdpZHRoID0gcikgOiB0aGlzLmN0eC5saW5lV2lkdGggPSByICogMiArIDEuMSwgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBYKHQpLCB0aGlzLmN0eC5zdHJva2UoKSwgdGhpcy5jdHguc2V0TGluZURhc2goW10pLCBCID09PSAyICYmIChCQShhWzBdKSAmJiAodiA9IGFbM10sIHUgPSBhWzBdLCB0aGlzLmN0eC5iZWdpblBhdGgoKSwgdGhpcy5mb3JtYXRQYXRoKFtuZXcgZCh2LmVuZC54LCB2LmVuZC55KSwgbmV3IGQodS5zdGFydC54LCB1LnN0YXJ0LnkpXSksIHRoaXMuY3R4LnN0cm9rZSgpKSwgQkEoYVsxXSkgJiYgKHYgPSBhWzFdLCB1ID0gYVsyXSwgdGhpcy5jdHguYmVnaW5QYXRoKCksIHRoaXMuZm9ybWF0UGF0aChbbmV3IGQodi5lbmQueCwgdi5lbmQueSksIG5ldyBkKHUuc3RhcnQueCwgdS5zdGFydC55KV0pLCB0aGlzLmN0eC5zdHJva2UoKSkpLCB0aGlzLmN0eC5yZXN0b3JlKCksIFtcbiAgICAgICAgICAgIDJcbiAgICAgICAgICAgIC8qcmV0dXJuKi9cbiAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiBxKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICBzd2l0Y2ggKG4ubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgJiYgKHRoaXMuY3R4LmZpbGxTdHlsZSA9IFgodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciksIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMub3B0aW9ucy54LCB0aGlzLm9wdGlvbnMueSwgdGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KSksIHIgPSBsbCh0KSwgWzQsIHRoaXMucmVuZGVyU3RhY2socildO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICByZXR1cm4gbi5zZW50KCksIHRoaXMuYXBwbHlFZmZlY3RzKFtdKSwgWzIsIHRoaXMuY2FudmFzXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgZTtcbiAgfShOcylcbiksIEVsID0gZnVuY3Rpb24oQSkge1xuICByZXR1cm4gQSBpbnN0YW5jZW9mIEhzIHx8IEEgaW5zdGFuY2VvZiBFcyA/ICEwIDogQSBpbnN0YW5jZW9mIEhyICYmIEEudHlwZSAhPT0gQnQgJiYgQS50eXBlICE9PSBzdDtcbn0sIEhsID0gZnVuY3Rpb24oQSwgZSkge1xuICBzd2l0Y2ggKEEpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gb3QoZSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHNsKGUpO1xuICAgIGNhc2UgMTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGN0KGUpO1xuICB9XG59LCB2bCA9IGZ1bmN0aW9uKEEpIHtcbiAgc3dpdGNoIChBKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICBjYXNlIDA6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgfVxufSwgSWwgPSBbXCItYXBwbGUtc3lzdGVtXCIsIFwic3lzdGVtLXVpXCJdLCBtbCA9IGZ1bmN0aW9uKEEpIHtcbiAgcmV0dXJuIC9pUGhvbmUgT1MgMTVfKDB8MSkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gQS5maWx0ZXIoZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBJbC5pbmRleE9mKGUpID09PSAtMTtcbiAgfSkgOiBBO1xufSwgeWwgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oQSkge1xuICAgIGdBKGUsIEEpO1xuICAgIGZ1bmN0aW9uIGUodCwgcikge1xuICAgICAgdmFyIG4gPSBBLmNhbGwodGhpcywgdCwgcikgfHwgdGhpcztcbiAgICAgIHJldHVybiBuLmNhbnZhcyA9IHIuY2FudmFzID8gci5jYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLCBuLmN0eCA9IG4uY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgbi5vcHRpb25zID0gciwgbi5jYW52YXMud2lkdGggPSBNYXRoLmZsb29yKHIud2lkdGggKiByLnNjYWxlKSwgbi5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihyLmhlaWdodCAqIHIuc2NhbGUpLCBuLmNhbnZhcy5zdHlsZS53aWR0aCA9IHIud2lkdGggKyBcInB4XCIsIG4uY2FudmFzLnN0eWxlLmhlaWdodCA9IHIuaGVpZ2h0ICsgXCJweFwiLCBuLmN0eC5zY2FsZShuLm9wdGlvbnMuc2NhbGUsIG4ub3B0aW9ucy5zY2FsZSksIG4uY3R4LnRyYW5zbGF0ZSgtci54LCAtci55KSwgbi5jb250ZXh0LmxvZ2dlci5kZWJ1ZyhcIkVYUEVSSU1FTlRBTCBGb3JlaWduT2JqZWN0IHJlbmRlcmVyIGluaXRpYWxpemVkIChcIiArIHIud2lkdGggKyBcInhcIiArIHIuaGVpZ2h0ICsgXCIgYXQgXCIgKyByLnggKyBcIixcIiArIHIueSArIFwiKSB3aXRoIHNjYWxlIFwiICsgci5zY2FsZSksIG47XG4gICAgfVxuICAgIHJldHVybiBlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gcSh0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByLCBuO1xuICAgICAgICByZXR1cm4gWih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiByID0gbHIodGhpcy5vcHRpb25zLndpZHRoICogdGhpcy5vcHRpb25zLnNjYWxlLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICogdGhpcy5vcHRpb25zLnNjYWxlLCB0aGlzLm9wdGlvbnMuc2NhbGUsIHRoaXMub3B0aW9ucy5zY2FsZSwgdCksIFs0LCBMbChyKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHJldHVybiBuID0gcy5zZW50KCksIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgJiYgKHRoaXMuY3R4LmZpbGxTdHlsZSA9IFgodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciksIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMub3B0aW9ucy53aWR0aCAqIHRoaXMub3B0aW9ucy5zY2FsZSwgdGhpcy5vcHRpb25zLmhlaWdodCAqIHRoaXMub3B0aW9ucy5zY2FsZSkpLCB0aGlzLmN0eC5kcmF3SW1hZ2UobiwgLXRoaXMub3B0aW9ucy54ICogdGhpcy5vcHRpb25zLnNjYWxlLCAtdGhpcy5vcHRpb25zLnkgKiB0aGlzLm9wdGlvbnMuc2NhbGUpLCBbMiwgdGhpcy5jYW52YXNdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBlO1xuICB9KE5zKVxuKSwgTGwgPSBmdW5jdGlvbihBKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCB0KSB7XG4gICAgdmFyIHIgPSBuZXcgSW1hZ2UoKTtcbiAgICByLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZShyKTtcbiAgICB9LCByLm9uZXJyb3IgPSB0LCByLnNyYyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsXCIgKyBlbmNvZGVVUklDb21wb25lbnQobmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhBKSk7XG4gIH0pO1xufSwgS2wgPSAoXG4gIC8qKiBAY2xhc3MgKi9cbiAgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQShlKSB7XG4gICAgICB2YXIgdCA9IGUuaWQsIHIgPSBlLmVuYWJsZWQ7XG4gICAgICB0aGlzLmlkID0gdCwgdGhpcy5lbmFibGVkID0gciwgdGhpcy5zdGFydCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIHJldHVybiBBLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKylcbiAgICAgICAgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICAgIHRoaXMuZW5hYmxlZCAmJiAodHlwZW9mIHdpbmRvdyA8IFwidVwiICYmIHdpbmRvdy5jb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmRlYnVnID09IFwiZnVuY3Rpb25cIiA/IGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgeWUoW3RoaXMuaWQsIHRoaXMuZ2V0VGltZSgpICsgXCJtc1wiXSwgZSkpIDogdGhpcy5pbmZvLmFwcGx5KHRoaXMsIGUpKTtcbiAgICB9LCBBLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQ7XG4gICAgfSwgQS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKylcbiAgICAgICAgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICAgIHRoaXMuZW5hYmxlZCAmJiB0eXBlb2Ygd2luZG93IDwgXCJ1XCIgJiYgd2luZG93LmNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUuaW5mbyA9PSBcImZ1bmN0aW9uXCIgJiYgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIHllKFt0aGlzLmlkLCB0aGlzLmdldFRpbWUoKSArIFwibXNcIl0sIGUpKTtcbiAgICB9LCBBLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBlID0gW10sIHQgPSAwOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKVxuICAgICAgICBlW3RdID0gYXJndW1lbnRzW3RdO1xuICAgICAgdGhpcy5lbmFibGVkICYmICh0eXBlb2Ygd2luZG93IDwgXCJ1XCIgJiYgd2luZG93LmNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUud2FybiA9PSBcImZ1bmN0aW9uXCIgPyBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgeWUoW3RoaXMuaWQsIHRoaXMuZ2V0VGltZSgpICsgXCJtc1wiXSwgZSkpIDogdGhpcy5pbmZvLmFwcGx5KHRoaXMsIGUpKTtcbiAgICB9LCBBLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKylcbiAgICAgICAgZVt0XSA9IGFyZ3VtZW50c1t0XTtcbiAgICAgIHRoaXMuZW5hYmxlZCAmJiAodHlwZW9mIHdpbmRvdyA8IFwidVwiICYmIHdpbmRvdy5jb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09IFwiZnVuY3Rpb25cIiA/IGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgeWUoW3RoaXMuaWQsIHRoaXMuZ2V0VGltZSgpICsgXCJtc1wiXSwgZSkpIDogdGhpcy5pbmZvLmFwcGx5KHRoaXMsIGUpKTtcbiAgICB9LCBBLmluc3RhbmNlcyA9IHt9LCBBO1xuICB9KClcbiksIGJsID0gKFxuICAvKiogQGNsYXNzICovXG4gIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLndpbmRvd0JvdW5kcyA9IHQsIHRoaXMuaW5zdGFuY2VOYW1lID0gXCIjXCIgKyBBLmluc3RhbmNlQ291bnQrKywgdGhpcy5sb2dnZXIgPSBuZXcgS2woeyBpZDogdGhpcy5pbnN0YW5jZU5hbWUsIGVuYWJsZWQ6IGUubG9nZ2luZyB9KSwgdGhpcy5jYWNoZSA9IChyID0gZS5jYWNoZSkgIT09IG51bGwgJiYgciAhPT0gdm9pZCAwID8gciA6IG5ldyBxYyh0aGlzLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIEEuaW5zdGFuY2VDb3VudCA9IDEsIEE7XG4gIH0oKVxuKSwgeGwgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHJldHVybiBlID09PSB2b2lkIDAgJiYgKGUgPSB7fSksIERsKEEsIGUpO1xufTtcbnR5cGVvZiB3aW5kb3cgPCBcInVcIiAmJiBUcy5zZXRDb250ZXh0KHdpbmRvdyk7XG52YXIgRGwgPSBmdW5jdGlvbihBLCBlKSB7XG4gIHJldHVybiBxKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0LCByLCBuLCBzLCBCLCBpLCBhLCBvLCBjLCBsLCBnLCBVLCB3LCBmLCBJLCBoLCBRLCBMLCBGLCB2LCBILCB1LCBILCBtLCBFLCBiLCBNLCBWLCB5LCBULCB6LCBKLCBOLCBvQSwgJCwgdUEsIGhBLCB3QSwgQUEsIFFBO1xuICAgIHJldHVybiBaKHRoaXMsIGZ1bmN0aW9uKGNBKSB7XG4gICAgICBzd2l0Y2ggKGNBLmxhYmVsKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAoIUEgfHwgdHlwZW9mIEEgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBbMiwgUHJvbWlzZS5yZWplY3QoXCJJbnZhbGlkIGVsZW1lbnQgcHJvdmlkZWQgYXMgZmlyc3QgYXJndW1lbnRcIildO1xuICAgICAgICAgIGlmICh0ID0gQS5vd25lckRvY3VtZW50LCAhdClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXMgbm90IGF0dGFjaGVkIHRvIGEgRG9jdW1lbnRcIik7XG4gICAgICAgICAgaWYgKHIgPSB0LmRlZmF1bHRWaWV3LCAhcilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3VtZW50IGlzIG5vdCBhdHRhY2hlZCB0byBhIFdpbmRvd1wiKTtcbiAgICAgICAgICByZXR1cm4gbiA9IHtcbiAgICAgICAgICAgIGFsbG93VGFpbnQ6IChtID0gZS5hbGxvd1RhaW50KSAhPT0gbnVsbCAmJiBtICE9PSB2b2lkIDAgPyBtIDogITEsXG4gICAgICAgICAgICBpbWFnZVRpbWVvdXQ6IChFID0gZS5pbWFnZVRpbWVvdXQpICE9PSBudWxsICYmIEUgIT09IHZvaWQgMCA/IEUgOiAxNWUzLFxuICAgICAgICAgICAgcHJveHk6IGUucHJveHksXG4gICAgICAgICAgICB1c2VDT1JTOiAoYiA9IGUudXNlQ09SUykgIT09IG51bGwgJiYgYiAhPT0gdm9pZCAwID8gYiA6ICExXG4gICAgICAgICAgfSwgcyA9IGp0KHsgbG9nZ2luZzogKE0gPSBlLmxvZ2dpbmcpICE9PSBudWxsICYmIE0gIT09IHZvaWQgMCA/IE0gOiAhMCwgY2FjaGU6IGUuY2FjaGUgfSwgbiksIEIgPSB7XG4gICAgICAgICAgICB3aW5kb3dXaWR0aDogKFYgPSBlLndpbmRvd1dpZHRoKSAhPT0gbnVsbCAmJiBWICE9PSB2b2lkIDAgPyBWIDogci5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93SGVpZ2h0OiAoeSA9IGUud2luZG93SGVpZ2h0KSAhPT0gbnVsbCAmJiB5ICE9PSB2b2lkIDAgPyB5IDogci5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbFg6IChUID0gZS5zY3JvbGxYKSAhPT0gbnVsbCAmJiBUICE9PSB2b2lkIDAgPyBUIDogci5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIHNjcm9sbFk6ICh6ID0gZS5zY3JvbGxZKSAhPT0gbnVsbCAmJiB6ICE9PSB2b2lkIDAgPyB6IDogci5wYWdlWU9mZnNldFxuICAgICAgICAgIH0sIGkgPSBuZXcgdkEoQi5zY3JvbGxYLCBCLnNjcm9sbFksIEIud2luZG93V2lkdGgsIEIud2luZG93SGVpZ2h0KSwgYSA9IG5ldyBibChzLCBpKSwgbyA9IChKID0gZS5mb3JlaWduT2JqZWN0UmVuZGVyaW5nKSAhPT0gbnVsbCAmJiBKICE9PSB2b2lkIDAgPyBKIDogITEsIGMgPSB7XG4gICAgICAgICAgICBhbGxvd1RhaW50OiAoTiA9IGUuYWxsb3dUYWludCkgIT09IG51bGwgJiYgTiAhPT0gdm9pZCAwID8gTiA6ICExLFxuICAgICAgICAgICAgb25jbG9uZTogZS5vbmNsb25lLFxuICAgICAgICAgICAgaWdub3JlRWxlbWVudHM6IGUuaWdub3JlRWxlbWVudHMsXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXM6IG8sXG4gICAgICAgICAgICBjb3B5U3R5bGVzOiBvXG4gICAgICAgICAgfSwgYS5sb2dnZXIuZGVidWcoXCJTdGFydGluZyBkb2N1bWVudCBjbG9uZSB3aXRoIHNpemUgXCIgKyBpLndpZHRoICsgXCJ4XCIgKyBpLmhlaWdodCArIFwiIHNjcm9sbGVkIHRvIFwiICsgLWkubGVmdCArIFwiLFwiICsgLWkudG9wKSwgbCA9IG5ldyBtbihhLCBBLCBjKSwgZyA9IGwuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCwgZyA/IFs0LCBsLnRvSUZyYW1lKHQsIGkpXSA6IFsyLCBQcm9taXNlLnJlamVjdChcIlVuYWJsZSB0byBmaW5kIGVsZW1lbnQgaW4gY2xvbmVkIGlmcmFtZVwiKV07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gVSA9IGNBLnNlbnQoKSwgdyA9IHZyKGcpIHx8IFNjKGcpID8gb0IoZy5vd25lckRvY3VtZW50KSA6IHd0KGEsIGcpLCBmID0gdy53aWR0aCwgSSA9IHcuaGVpZ2h0LCBoID0gdy5sZWZ0LCBRID0gdy50b3AsIEwgPSBTbChhLCBnLCBlLmJhY2tncm91bmRDb2xvciksIEYgPSB7XG4gICAgICAgICAgICBjYW52YXM6IGUuY2FudmFzLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBMLFxuICAgICAgICAgICAgc2NhbGU6ICgkID0gKG9BID0gZS5zY2FsZSkgIT09IG51bGwgJiYgb0EgIT09IHZvaWQgMCA/IG9BIDogci5kZXZpY2VQaXhlbFJhdGlvKSAhPT0gbnVsbCAmJiAkICE9PSB2b2lkIDAgPyAkIDogMSxcbiAgICAgICAgICAgIHg6ICgodUEgPSBlLngpICE9PSBudWxsICYmIHVBICE9PSB2b2lkIDAgPyB1QSA6IDApICsgaCxcbiAgICAgICAgICAgIHk6ICgoaEEgPSBlLnkpICE9PSBudWxsICYmIGhBICE9PSB2b2lkIDAgPyBoQSA6IDApICsgUSxcbiAgICAgICAgICAgIHdpZHRoOiAod0EgPSBlLndpZHRoKSAhPT0gbnVsbCAmJiB3QSAhPT0gdm9pZCAwID8gd0EgOiBNYXRoLmNlaWwoZiksXG4gICAgICAgICAgICBoZWlnaHQ6IChBQSA9IGUuaGVpZ2h0KSAhPT0gbnVsbCAmJiBBQSAhPT0gdm9pZCAwID8gQUEgOiBNYXRoLmNlaWwoSSlcbiAgICAgICAgICB9LCBvID8gKGEubG9nZ2VyLmRlYnVnKFwiRG9jdW1lbnQgY2xvbmVkLCB1c2luZyBmb3JlaWduIG9iamVjdCByZW5kZXJpbmdcIiksIEggPSBuZXcgeWwoYSwgRiksIFs0LCBILnJlbmRlcihnKV0pIDogWzMsIDNdO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHYgPSBjQS5zZW50KCksIFszLCA1XTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBhLmxvZ2dlci5kZWJ1ZyhcIkRvY3VtZW50IGNsb25lZCwgZWxlbWVudCBsb2NhdGVkIGF0IFwiICsgaCArIFwiLFwiICsgUSArIFwiIHdpdGggc2l6ZSBcIiArIGYgKyBcInhcIiArIEkgKyBcIiB1c2luZyBjb21wdXRlZCByZW5kZXJpbmdcIiksIGEubG9nZ2VyLmRlYnVnKFwiU3RhcnRpbmcgRE9NIHBhcnNpbmdcIiksIHUgPSBtcyhhLCBnKSwgTCA9PT0gdS5zdHlsZXMuYmFja2dyb3VuZENvbG9yICYmICh1LnN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgPSBIQS5UUkFOU1BBUkVOVCksIGEubG9nZ2VyLmRlYnVnKFwiU3RhcnRpbmcgcmVuZGVyZXIgZm9yIGVsZW1lbnQgYXQgXCIgKyBGLnggKyBcIixcIiArIEYueSArIFwiIHdpdGggc2l6ZSBcIiArIEYud2lkdGggKyBcInhcIiArIEYuaGVpZ2h0KSwgSCA9IG5ldyBwbChhLCBGKSwgWzQsIEgucmVuZGVyKHUpXTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHYgPSBjQS5zZW50KCksIGNBLmxhYmVsID0gNTtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAoISgoUUEgPSBlLnJlbW92ZUNvbnRhaW5lcikgIT09IG51bGwgJiYgUUEgIT09IHZvaWQgMCkgfHwgUUEpICYmIChtbi5kZXN0cm95KFUpIHx8IGEubG9nZ2VyLmVycm9yKFwiQ2Fubm90IGRldGFjaCBjbG9uZWQgaWZyYW1lIGFzIGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmVcIikpLCBhLmxvZ2dlci5kZWJ1ZyhcIkZpbmlzaGVkIHJlbmRlcmluZ1wiKSwgWzIsIHZdO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0sIFNsID0gZnVuY3Rpb24oQSwgZSwgdCkge1xuICB2YXIgciA9IGUub3duZXJEb2N1bWVudCwgbiA9IHIuZG9jdW1lbnRFbGVtZW50ID8gVWUoQSwgZ2V0Q29tcHV0ZWRTdHlsZShyLmRvY3VtZW50RWxlbWVudCkuYmFja2dyb3VuZENvbG9yKSA6IEhBLlRSQU5TUEFSRU5ULCBzID0gci5ib2R5ID8gVWUoQSwgZ2V0Q29tcHV0ZWRTdHlsZShyLmJvZHkpLmJhY2tncm91bmRDb2xvcikgOiBIQS5UUkFOU1BBUkVOVCwgQiA9IHR5cGVvZiB0ID09IFwic3RyaW5nXCIgPyBVZShBLCB0KSA6IHQgPT09IG51bGwgPyBIQS5UUkFOU1BBUkVOVCA6IDQyOTQ5NjcyOTU7XG4gIHJldHVybiBlID09PSByLmRvY3VtZW50RWxlbWVudCA/IFRBKG4pID8gVEEocykgPyBCIDogcyA6IG4gOiBCO1xufTtcbmZ1bmN0aW9uIFRsKEEsIGUpIHtcbiAgaWYgKEEubWF0Y2goL15bYS16XSs6XFwvXFwvL2kpKVxuICAgIHJldHVybiBBO1xuICBpZiAoQS5tYXRjaCgvXlxcL1xcLy8pKVxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBBO1xuICBpZiAoQS5tYXRjaCgvXlthLXpdKzovaSkpXG4gICAgcmV0dXJuIEE7XG4gIGNvbnN0IHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKSwgciA9IHQuY3JlYXRlRWxlbWVudChcImJhc2VcIiksIG4gPSB0LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICByZXR1cm4gdC5oZWFkLmFwcGVuZENoaWxkKHIpLCB0LmJvZHkuYXBwZW5kQ2hpbGQobiksIGUgJiYgKHIuaHJlZiA9IGUpLCBuLmhyZWYgPSBBLCBuLmhyZWY7XG59XG5jb25zdCBNbCA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4ge1xuICBsZXQgQSA9IDA7XG4gIGNvbnN0IGUgPSAoKSA9PiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBgMDAwMCR7KE1hdGgucmFuZG9tKCkgKiAzNiAqKiA0IDw8IDApLnRvU3RyaW5nKDM2KX1gLnNsaWNlKC00KVxuICApO1xuICByZXR1cm4gKCkgPT4gKEEgKz0gMSwgYHUke2UoKX0ke0F9YCk7XG59KSgpO1xuZnVuY3Rpb24gTUEoQSkge1xuICBjb25zdCBlID0gW107XG4gIGZvciAobGV0IHQgPSAwLCByID0gQS5sZW5ndGg7IHQgPCByOyB0KyspXG4gICAgZS5wdXNoKEFbdF0pO1xuICByZXR1cm4gZTtcbn1cbmxldCBqQSA9IG51bGw7XG5mdW5jdGlvbiBQcyhBID0ge30pIHtcbiAgcmV0dXJuIGpBIHx8IChBLmluY2x1ZGVTdHlsZVByb3BlcnRpZXMgPyAoakEgPSBBLmluY2x1ZGVTdHlsZVByb3BlcnRpZXMsIGpBKSA6IChqQSA9IE1BKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpLCBqQSkpO1xufVxuZnVuY3Rpb24gZ3QoQSwgZSkge1xuICBjb25zdCByID0gKEEub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoQSkuZ2V0UHJvcGVydHlWYWx1ZShlKTtcbiAgcmV0dXJuIHIgPyBwYXJzZUZsb2F0KHIucmVwbGFjZShcInB4XCIsIFwiXCIpKSA6IDA7XG59XG5mdW5jdGlvbiBPbChBKSB7XG4gIGNvbnN0IGUgPSBndChBLCBcImJvcmRlci1sZWZ0LXdpZHRoXCIpLCB0ID0gZ3QoQSwgXCJib3JkZXItcmlnaHQtd2lkdGhcIik7XG4gIHJldHVybiBBLmNsaWVudFdpZHRoICsgZSArIHQ7XG59XG5mdW5jdGlvbiBSbChBKSB7XG4gIGNvbnN0IGUgPSBndChBLCBcImJvcmRlci10b3Atd2lkdGhcIiksIHQgPSBndChBLCBcImJvcmRlci1ib3R0b20td2lkdGhcIik7XG4gIHJldHVybiBBLmNsaWVudEhlaWdodCArIGUgKyB0O1xufVxuZnVuY3Rpb24ga3MoQSwgZSA9IHt9KSB7XG4gIGNvbnN0IHQgPSBlLndpZHRoIHx8IE9sKEEpLCByID0gZS5oZWlnaHQgfHwgUmwoQSk7XG4gIHJldHVybiB7IHdpZHRoOiB0LCBoZWlnaHQ6IHIgfTtcbn1cbmZ1bmN0aW9uIEdsKCkge1xuICBsZXQgQSwgZTtcbiAgdHJ5IHtcbiAgICBlID0gcHJvY2VzcztcbiAgfSBjYXRjaCB7XG4gIH1cbiAgY29uc3QgdCA9IGUgJiYgZS5lbnYgPyBlLmVudi5kZXZpY2VQaXhlbFJhdGlvIDogbnVsbDtcbiAgcmV0dXJuIHQgJiYgKEEgPSBwYXJzZUludCh0LCAxMCksIE51bWJlci5pc05hTihBKSAmJiAoQSA9IDEpKSwgQSB8fCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufVxuY29uc3QgckEgPSAxNjM4NDtcbmZ1bmN0aW9uIFZsKEEpIHtcbiAgKEEud2lkdGggPiByQSB8fCBBLmhlaWdodCA+IHJBKSAmJiAoQS53aWR0aCA+IHJBICYmIEEuaGVpZ2h0ID4gckEgPyBBLndpZHRoID4gQS5oZWlnaHQgPyAoQS5oZWlnaHQgKj0gckEgLyBBLndpZHRoLCBBLndpZHRoID0gckEpIDogKEEud2lkdGggKj0gckEgLyBBLmhlaWdodCwgQS5oZWlnaHQgPSByQSkgOiBBLndpZHRoID4gckEgPyAoQS5oZWlnaHQgKj0gckEgLyBBLndpZHRoLCBBLndpZHRoID0gckEpIDogKEEud2lkdGggKj0gckEgLyBBLmhlaWdodCwgQS5oZWlnaHQgPSByQSkpO1xufVxuZnVuY3Rpb24gdXQoQSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKGUsIHQpID0+IHtcbiAgICBjb25zdCByID0gbmV3IEltYWdlKCk7XG4gICAgci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByLmRlY29kZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZShyKSk7XG4gICAgICB9KTtcbiAgICB9LCByLm9uZXJyb3IgPSB0LCByLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIiwgci5kZWNvZGluZyA9IFwiYXN5bmNcIiwgci5zcmMgPSBBO1xuICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIE5sKEEpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhBKSkudGhlbihlbmNvZGVVUklDb21wb25lbnQpLnRoZW4oKGUpID0+IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwke2V9YCk7XG59XG5hc3luYyBmdW5jdGlvbiBQbChBLCBlLCB0KSB7XG4gIGNvbnN0IHIgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMociwgXCJzdmdcIiksIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMociwgXCJmb3JlaWduT2JqZWN0XCIpO1xuICByZXR1cm4gbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHtlfWApLCBuLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt0fWApLCBuLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke2V9ICR7dH1gKSwgcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIiksIHMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKSwgcy5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKSwgcy5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMFwiKSwgcy5zZXRBdHRyaWJ1dGUoXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsIFwidHJ1ZVwiKSwgbi5hcHBlbmRDaGlsZChzKSwgcy5hcHBlbmRDaGlsZChBKSwgTmwobik7XG59XG5jb25zdCB0QSA9IChBLCBlKSA9PiB7XG4gIGlmIChBIGluc3RhbmNlb2YgZSlcbiAgICByZXR1cm4gITA7XG4gIGNvbnN0IHQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQSk7XG4gIHJldHVybiB0ID09PSBudWxsID8gITEgOiB0LmNvbnN0cnVjdG9yLm5hbWUgPT09IGUubmFtZSB8fCB0QSh0LCBlKTtcbn07XG5mdW5jdGlvbiBrbChBKSB7XG4gIGNvbnN0IGUgPSBBLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpO1xuICByZXR1cm4gYCR7QS5jc3NUZXh0fSBjb250ZW50OiAnJHtlLnJlcGxhY2UoLyd8XCIvZywgXCJcIil9JztgO1xufVxuZnVuY3Rpb24gX2woQSwgZSkge1xuICByZXR1cm4gUHMoZSkubWFwKCh0KSA9PiB7XG4gICAgY29uc3QgciA9IEEuZ2V0UHJvcGVydHlWYWx1ZSh0KSwgbiA9IEEuZ2V0UHJvcGVydHlQcmlvcml0eSh0KTtcbiAgICByZXR1cm4gYCR7dH06ICR7cn0ke24gPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifTtgO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbmZ1bmN0aW9uIFhsKEEsIGUsIHQsIHIpIHtcbiAgY29uc3QgbiA9IGAuJHtBfToke2V9YCwgcyA9IHQuY3NzVGV4dCA/IGtsKHQpIDogX2wodCwgcik7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtufXske3N9fWApO1xufVxuZnVuY3Rpb24geG4oQSwgZSwgdCwgcikge1xuICBjb25zdCBuID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoQSwgdCksIHMgPSBuLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpO1xuICBpZiAocyA9PT0gXCJcIiB8fCBzID09PSBcIm5vbmVcIilcbiAgICByZXR1cm47XG4gIGNvbnN0IEIgPSBNbCgpO1xuICB0cnkge1xuICAgIGUuY2xhc3NOYW1lID0gYCR7ZS5jbGFzc05hbWV9ICR7Qn1gO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgaS5hcHBlbmRDaGlsZChYbChCLCB0LCBuLCByKSksIGUuYXBwZW5kQ2hpbGQoaSk7XG59XG5mdW5jdGlvbiBKbChBLCBlLCB0KSB7XG4gIHhuKEEsIGUsIFwiOmJlZm9yZVwiLCB0KSwgeG4oQSwgZSwgXCI6YWZ0ZXJcIiwgdCk7XG59XG5jb25zdCBEbiA9IFwiYXBwbGljYXRpb24vZm9udC13b2ZmXCIsIFNuID0gXCJpbWFnZS9qcGVnXCIsIFdsID0ge1xuICB3b2ZmOiBEbixcbiAgd29mZjI6IERuLFxuICB0dGY6IFwiYXBwbGljYXRpb24vZm9udC10cnVldHlwZVwiLFxuICBlb3Q6IFwiYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3RcIixcbiAgcG5nOiBcImltYWdlL3BuZ1wiLFxuICBqcGc6IFNuLFxuICBqcGVnOiBTbixcbiAgZ2lmOiBcImltYWdlL2dpZlwiLFxuICB0aWZmOiBcImltYWdlL3RpZmZcIixcbiAgc3ZnOiBcImltYWdlL3N2Zyt4bWxcIixcbiAgd2VicDogXCJpbWFnZS93ZWJwXCJcbn07XG5mdW5jdGlvbiBZbChBKSB7XG4gIGNvbnN0IGUgPSAvXFwuKFteLi9dKj8pJC9nLmV4ZWMoQSk7XG4gIHJldHVybiBlID8gZVsxXSA6IFwiXCI7XG59XG5mdW5jdGlvbiBJcihBKSB7XG4gIGNvbnN0IGUgPSBZbChBKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gV2xbZV0gfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIFpsKEEpIHtcbiAgcmV0dXJuIEEuc3BsaXQoLywvKVsxXTtcbn1cbmZ1bmN0aW9uIFVyKEEpIHtcbiAgcmV0dXJuIEEuc2VhcmNoKC9eKGRhdGE6KS8pICE9PSAtMTtcbn1cbmZ1bmN0aW9uIGpsKEEsIGUpIHtcbiAgcmV0dXJuIGBkYXRhOiR7ZX07YmFzZTY0LCR7QX1gO1xufVxuYXN5bmMgZnVuY3Rpb24gX3MoQSwgZSwgdCkge1xuICBjb25zdCByID0gYXdhaXQgZmV0Y2goQSwgZSk7XG4gIGlmIChyLnN0YXR1cyA9PT0gNDA0KVxuICAgIHRocm93IG5ldyBFcnJvcihgUmVzb3VyY2UgXCIke3IudXJsfVwiIG5vdCBmb3VuZGApO1xuICBjb25zdCBuID0gYXdhaXQgci5ibG9iKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocywgQikgPT4ge1xuICAgIGNvbnN0IGkgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGkub25lcnJvciA9IEIsIGkub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyh0KHsgcmVzOiByLCByZXN1bHQ6IGkucmVzdWx0IH0pKTtcbiAgICAgIH0gY2F0Y2ggKGEpIHtcbiAgICAgICAgQihhKTtcbiAgICAgIH1cbiAgICB9LCBpLnJlYWRBc0RhdGFVUkwobik7XG4gIH0pO1xufVxuY29uc3QgWXQgPSB7fTtcbmZ1bmN0aW9uIHFsKEEsIGUsIHQpIHtcbiAgbGV0IHIgPSBBLnJlcGxhY2UoL1xcPy4qLywgXCJcIik7XG4gIHJldHVybiB0ICYmIChyID0gQSksIC90dGZ8b3RmfGVvdHx3b2ZmMj8vaS50ZXN0KHIpICYmIChyID0gci5yZXBsYWNlKC8uKlxcLy8sIFwiXCIpKSwgZSA/IGBbJHtlfV0ke3J9YCA6IHI7XG59XG5hc3luYyBmdW5jdGlvbiBtcihBLCBlLCB0KSB7XG4gIGNvbnN0IHIgPSBxbChBLCBlLCB0LmluY2x1ZGVRdWVyeVBhcmFtcyk7XG4gIGlmIChZdFtyXSAhPSBudWxsKVxuICAgIHJldHVybiBZdFtyXTtcbiAgdC5jYWNoZUJ1c3QgJiYgKEEgKz0gKC9cXD8vLnRlc3QoQSkgPyBcIiZcIiA6IFwiP1wiKSArICgvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSkuZ2V0VGltZSgpKTtcbiAgbGV0IG47XG4gIHRyeSB7XG4gICAgY29uc3QgcyA9IGF3YWl0IF9zKEEsIHQuZmV0Y2hSZXF1ZXN0SW5pdCwgKHsgcmVzOiBCLCByZXN1bHQ6IGkgfSkgPT4gKGUgfHwgKGUgPSBCLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpIHx8IFwiXCIpLCBabChpKSkpO1xuICAgIG4gPSBqbChzLCBlKTtcbiAgfSBjYXRjaCAocykge1xuICAgIG4gPSB0LmltYWdlUGxhY2Vob2xkZXIgfHwgXCJcIjtcbiAgICBsZXQgQiA9IGBGYWlsZWQgdG8gZmV0Y2ggcmVzb3VyY2U6ICR7QX1gO1xuICAgIHMgJiYgKEIgPSB0eXBlb2YgcyA9PSBcInN0cmluZ1wiID8gcyA6IHMubWVzc2FnZSksIEIgJiYgY29uc29sZS53YXJuKEIpO1xuICB9XG4gIHJldHVybiBZdFtyXSA9IG4sIG47XG59XG5hc3luYyBmdW5jdGlvbiB6bChBKSB7XG4gIGNvbnN0IGUgPSBBLnRvRGF0YVVSTCgpO1xuICByZXR1cm4gZSA9PT0gXCJkYXRhOixcIiA/IEEuY2xvbmVOb2RlKCExKSA6IHV0KGUpO1xufVxuYXN5bmMgZnVuY3Rpb24gJGwoQSwgZSkge1xuICBpZiAoQS5jdXJyZW50U3JjKSB7XG4gICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIEIgPSBzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBzLndpZHRoID0gQS5jbGllbnRXaWR0aCwgcy5oZWlnaHQgPSBBLmNsaWVudEhlaWdodCwgQiA9PSBudWxsIHx8IEIuZHJhd0ltYWdlKEEsIDAsIDAsIHMud2lkdGgsIHMuaGVpZ2h0KTtcbiAgICBjb25zdCBpID0gcy50b0RhdGFVUkwoKTtcbiAgICByZXR1cm4gdXQoaSk7XG4gIH1cbiAgY29uc3QgdCA9IEEucG9zdGVyLCByID0gSXIodCksIG4gPSBhd2FpdCBtcih0LCByLCBlKTtcbiAgcmV0dXJuIHV0KG4pO1xufVxuYXN5bmMgZnVuY3Rpb24gQWcoQSwgZSkge1xuICB2YXIgdDtcbiAgdHJ5IHtcbiAgICBpZiAoISgodCA9IEEgPT0gbnVsbCA/IHZvaWQgMCA6IEEuY29udGVudERvY3VtZW50KSA9PT0gbnVsbCB8fCB0ID09PSB2b2lkIDApICYmIHQuYm9keSlcbiAgICAgIHJldHVybiBhd2FpdCBIdChBLmNvbnRlbnREb2N1bWVudC5ib2R5LCBlLCAhMCk7XG4gIH0gY2F0Y2gge1xuICB9XG4gIHJldHVybiBBLmNsb25lTm9kZSghMSk7XG59XG5hc3luYyBmdW5jdGlvbiBlZyhBLCBlKSB7XG4gIHJldHVybiB0QShBLCBIVE1MQ2FudmFzRWxlbWVudCkgPyB6bChBKSA6IHRBKEEsIEhUTUxWaWRlb0VsZW1lbnQpID8gJGwoQSwgZSkgOiB0QShBLCBIVE1MSUZyYW1lRWxlbWVudCkgPyBBZyhBLCBlKSA6IEEuY2xvbmVOb2RlKFhzKEEpKTtcbn1cbmNvbnN0IHRnID0gKEEpID0+IEEudGFnTmFtZSAhPSBudWxsICYmIEEudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlNMT1RcIiwgWHMgPSAoQSkgPT4gQS50YWdOYW1lICE9IG51bGwgJiYgQS50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiU1ZHXCI7XG5hc3luYyBmdW5jdGlvbiByZyhBLCBlLCB0KSB7XG4gIHZhciByLCBuO1xuICBpZiAoWHMoZSkpXG4gICAgcmV0dXJuIGU7XG4gIGxldCBzID0gW107XG4gIHJldHVybiB0ZyhBKSAmJiBBLmFzc2lnbmVkTm9kZXMgPyBzID0gTUEoQS5hc3NpZ25lZE5vZGVzKCkpIDogdEEoQSwgSFRNTElGcmFtZUVsZW1lbnQpICYmICghKChyID0gQS5jb250ZW50RG9jdW1lbnQpID09PSBudWxsIHx8IHIgPT09IHZvaWQgMCkgJiYgci5ib2R5KSA/IHMgPSBNQShBLmNvbnRlbnREb2N1bWVudC5ib2R5LmNoaWxkTm9kZXMpIDogcyA9IE1BKCgobiA9IEEuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgbiAhPT0gdm9pZCAwID8gbiA6IEEpLmNoaWxkTm9kZXMpLCBzLmxlbmd0aCA9PT0gMCB8fCB0QShBLCBIVE1MVmlkZW9FbGVtZW50KSB8fCBhd2FpdCBzLnJlZHVjZSgoQiwgaSkgPT4gQi50aGVuKCgpID0+IEh0KGksIHQpKS50aGVuKChhKSA9PiB7XG4gICAgYSAmJiBlLmFwcGVuZENoaWxkKGEpO1xuICB9KSwgUHJvbWlzZS5yZXNvbHZlKCkpLCBlO1xufVxuZnVuY3Rpb24gbmcoQSwgZSwgdCkge1xuICBjb25zdCByID0gZS5zdHlsZTtcbiAgaWYgKCFyKVxuICAgIHJldHVybjtcbiAgY29uc3QgbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKEEpO1xuICBuLmNzc1RleHQgPyAoci5jc3NUZXh0ID0gbi5jc3NUZXh0LCByLnRyYW5zZm9ybU9yaWdpbiA9IG4udHJhbnNmb3JtT3JpZ2luKSA6IFBzKHQpLmZvckVhY2goKHMpID0+IHtcbiAgICBsZXQgQiA9IG4uZ2V0UHJvcGVydHlWYWx1ZShzKTtcbiAgICBzID09PSBcImZvbnQtc2l6ZVwiICYmIEIuZW5kc1dpdGgoXCJweFwiKSAmJiAoQiA9IGAke01hdGguZmxvb3IocGFyc2VGbG9hdChCLnN1YnN0cmluZygwLCBCLmxlbmd0aCAtIDIpKSkgLSAwLjF9cHhgKSwgdEEoQSwgSFRNTElGcmFtZUVsZW1lbnQpICYmIHMgPT09IFwiZGlzcGxheVwiICYmIEIgPT09IFwiaW5saW5lXCIgJiYgKEIgPSBcImJsb2NrXCIpLCBzID09PSBcImRcIiAmJiBlLmdldEF0dHJpYnV0ZShcImRcIikgJiYgKEIgPSBgcGF0aCgke2UuZ2V0QXR0cmlidXRlKFwiZFwiKX0pYCksIHIuc2V0UHJvcGVydHkocywgQiwgbi5nZXRQcm9wZXJ0eVByaW9yaXR5KHMpKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZyhBLCBlKSB7XG4gIHRBKEEsIEhUTUxUZXh0QXJlYUVsZW1lbnQpICYmIChlLmlubmVySFRNTCA9IEEudmFsdWUpLCB0QShBLCBIVE1MSW5wdXRFbGVtZW50KSAmJiBlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIEEudmFsdWUpO1xufVxuZnVuY3Rpb24gQmcoQSwgZSkge1xuICBpZiAodEEoQSwgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgY29uc3QgdCA9IGUsIHIgPSBBcnJheS5mcm9tKHQuY2hpbGRyZW4pLmZpbmQoKG4pID0+IEEudmFsdWUgPT09IG4uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgIHIgJiYgci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgfVxufVxuZnVuY3Rpb24gaWcoQSwgZSwgdCkge1xuICByZXR1cm4gdEEoZSwgRWxlbWVudCkgJiYgKG5nKEEsIGUsIHQpLCBKbChBLCBlLCB0KSwgc2coQSwgZSksIEJnKEEsIGUpKSwgZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGFnKEEsIGUpIHtcbiAgY29uc3QgdCA9IEEucXVlcnlTZWxlY3RvckFsbCA/IEEucXVlcnlTZWxlY3RvckFsbChcInVzZVwiKSA6IFtdO1xuICBpZiAodC5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIEE7XG4gIGNvbnN0IHIgPSB7fTtcbiAgZm9yIChsZXQgcyA9IDA7IHMgPCB0Lmxlbmd0aDsgcysrKSB7XG4gICAgY29uc3QgaSA9IHRbc10uZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKTtcbiAgICBpZiAoaSkge1xuICAgICAgY29uc3QgYSA9IEEucXVlcnlTZWxlY3RvcihpKSwgbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk7XG4gICAgICAhYSAmJiBvICYmICFyW2ldICYmIChyW2ldID0gYXdhaXQgSHQobywgZSwgITApKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbiA9IE9iamVjdC52YWx1ZXMocik7XG4gIGlmIChuLmxlbmd0aCkge1xuICAgIGNvbnN0IHMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzLCBcInN2Z1wiKTtcbiAgICBCLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIHMpLCBCLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiLCBCLnN0eWxlLndpZHRoID0gXCIwXCIsIEIuc3R5bGUuaGVpZ2h0ID0gXCIwXCIsIEIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiLCBCLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHMsIFwiZGVmc1wiKTtcbiAgICBCLmFwcGVuZENoaWxkKGkpO1xuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgbi5sZW5ndGg7IGErKylcbiAgICAgIGkuYXBwZW5kQ2hpbGQoblthXSk7XG4gICAgQS5hcHBlbmRDaGlsZChCKTtcbiAgfVxuICByZXR1cm4gQTtcbn1cbmFzeW5jIGZ1bmN0aW9uIEh0KEEsIGUsIHQpIHtcbiAgcmV0dXJuICF0ICYmIGUuZmlsdGVyICYmICFlLmZpbHRlcihBKSA/IG51bGwgOiBQcm9taXNlLnJlc29sdmUoQSkudGhlbigocikgPT4gZWcociwgZSkpLnRoZW4oKHIpID0+IHJnKEEsIHIsIGUpKS50aGVuKChyKSA9PiBpZyhBLCByLCBlKSkudGhlbigocikgPT4gYWcociwgZSkpO1xufVxuY29uc3QgSnMgPSAvdXJsXFwoKFsnXCJdPykoW14nXCJdKz8pXFwxXFwpL2csIG9nID0gL3VybFxcKFteKV0rXFwpXFxzKmZvcm1hdFxcKChbXCInXT8pKFteXCInXSspXFwxXFwpL2csIGNnID0gL3NyYzpcXHMqKD86dXJsXFwoW14pXStcXClcXHMqZm9ybWF0XFwoW14pXStcXClbLDtdXFxzKikrL2c7XG5mdW5jdGlvbiBsZyhBKSB7XG4gIGNvbnN0IGUgPSBBLnJlcGxhY2UoLyhbLiorP14ke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBuZXcgUmVnRXhwKGAodXJsXFxcXChbJ1wiXT8pKCR7ZX0pKFsnXCJdP1xcXFwpKWAsIFwiZ1wiKTtcbn1cbmZ1bmN0aW9uIGdnKEEpIHtcbiAgY29uc3QgZSA9IFtdO1xuICByZXR1cm4gQS5yZXBsYWNlKEpzLCAodCwgciwgbikgPT4gKGUucHVzaChuKSwgdCkpLCBlLmZpbHRlcigodCkgPT4gIVVyKHQpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHVnKEEsIGUsIHQsIHIsIG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzID0gdCA/IFRsKGUsIHQpIDogZSwgQiA9IElyKGUpO1xuICAgIGxldCBpO1xuICAgIHJldHVybiBuIHx8IChpID0gYXdhaXQgbXIocywgQiwgcikpLCBBLnJlcGxhY2UobGcoZSksIGAkMSR7aX0kM2ApO1xuICB9IGNhdGNoIHtcbiAgfVxuICByZXR1cm4gQTtcbn1cbmZ1bmN0aW9uIHdnKEEsIHsgcHJlZmVycmVkRm9udEZvcm1hdDogZSB9KSB7XG4gIHJldHVybiBlID8gQS5yZXBsYWNlKGNnLCAodCkgPT4ge1xuICAgIGZvciAoOyA7ICkge1xuICAgICAgY29uc3QgW3IsICwgbl0gPSBvZy5leGVjKHQpIHx8IFtdO1xuICAgICAgaWYgKCFuKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIGlmIChuID09PSBlKVxuICAgICAgICByZXR1cm4gYHNyYzogJHtyfTtgO1xuICAgIH1cbiAgfSkgOiBBO1xufVxuZnVuY3Rpb24gV3MoQSkge1xuICByZXR1cm4gQS5zZWFyY2goSnMpICE9PSAtMTtcbn1cbmFzeW5jIGZ1bmN0aW9uIFlzKEEsIGUsIHQpIHtcbiAgaWYgKCFXcyhBKSlcbiAgICByZXR1cm4gQTtcbiAgY29uc3QgciA9IHdnKEEsIHQpO1xuICByZXR1cm4gZ2cocikucmVkdWNlKChzLCBCKSA9PiBzLnRoZW4oKGkpID0+IHVnKGksIEIsIGUsIHQpKSwgUHJvbWlzZS5yZXNvbHZlKHIpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHFBKEEsIGUsIHQpIHtcbiAgdmFyIHI7XG4gIGNvbnN0IG4gPSAociA9IGUuc3R5bGUpID09PSBudWxsIHx8IHIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHIuZ2V0UHJvcGVydHlWYWx1ZShBKTtcbiAgaWYgKG4pIHtcbiAgICBjb25zdCBzID0gYXdhaXQgWXMobiwgbnVsbCwgdCk7XG4gICAgcmV0dXJuIGUuc3R5bGUuc2V0UHJvcGVydHkoQSwgcywgZS5zdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KEEpKSwgITA7XG4gIH1cbiAgcmV0dXJuICExO1xufVxuYXN5bmMgZnVuY3Rpb24gUWcoQSwgZSkge1xuICBhd2FpdCBxQShcImJhY2tncm91bmRcIiwgQSwgZSkgfHwgYXdhaXQgcUEoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIEEsIGUpLCBhd2FpdCBxQShcIm1hc2tcIiwgQSwgZSkgfHwgYXdhaXQgcUEoXCItd2Via2l0LW1hc2tcIiwgQSwgZSkgfHwgYXdhaXQgcUEoXCJtYXNrLWltYWdlXCIsIEEsIGUpIHx8IGF3YWl0IHFBKFwiLXdlYmtpdC1tYXNrLWltYWdlXCIsIEEsIGUpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmcoQSwgZSkge1xuICBjb25zdCB0ID0gdEEoQSwgSFRNTEltYWdlRWxlbWVudCk7XG4gIGlmICghKHQgJiYgIVVyKEEuc3JjKSkgJiYgISh0QShBLCBTVkdJbWFnZUVsZW1lbnQpICYmICFVcihBLmhyZWYuYmFzZVZhbCkpKVxuICAgIHJldHVybjtcbiAgY29uc3QgciA9IHQgPyBBLnNyYyA6IEEuaHJlZi5iYXNlVmFsLCBuID0gYXdhaXQgbXIociwgSXIociksIGUpO1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocywgQikgPT4ge1xuICAgIEEub25sb2FkID0gcywgQS5vbmVycm9yID0gZS5vbkltYWdlRXJyb3JIYW5kbGVyID8gKC4uLmEpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMoZS5vbkltYWdlRXJyb3JIYW5kbGVyKC4uLmEpKTtcbiAgICAgIH0gY2F0Y2ggKG8pIHtcbiAgICAgICAgQihvKTtcbiAgICAgIH1cbiAgICB9IDogQjtcbiAgICBjb25zdCBpID0gQTtcbiAgICBpLmRlY29kZSAmJiAoaS5kZWNvZGUgPSBzKSwgaS5sb2FkaW5nID09PSBcImxhenlcIiAmJiAoaS5sb2FkaW5nID0gXCJlYWdlclwiKSwgdCA/IChBLnNyY3NldCA9IFwiXCIsIEEuc3JjID0gbikgOiBBLmhyZWYuYmFzZVZhbCA9IG47XG4gIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gQ2coQSwgZSkge1xuICBjb25zdCByID0gTUEoQS5jaGlsZE5vZGVzKS5tYXAoKG4pID0+IFpzKG4sIGUpKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwocikudGhlbigoKSA9PiBBKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIFpzKEEsIGUpIHtcbiAgdEEoQSwgRWxlbWVudCkgJiYgKGF3YWl0IFFnKEEsIGUpLCBhd2FpdCBmZyhBLCBlKSwgYXdhaXQgQ2coQSwgZSkpO1xufVxuZnVuY3Rpb24gVWcoQSwgZSkge1xuICBjb25zdCB7IHN0eWxlOiB0IH0gPSBBO1xuICBlLmJhY2tncm91bmRDb2xvciAmJiAodC5iYWNrZ3JvdW5kQ29sb3IgPSBlLmJhY2tncm91bmRDb2xvciksIGUud2lkdGggJiYgKHQud2lkdGggPSBgJHtlLndpZHRofXB4YCksIGUuaGVpZ2h0ICYmICh0LmhlaWdodCA9IGAke2UuaGVpZ2h0fXB4YCk7XG4gIGNvbnN0IHIgPSBlLnN0eWxlO1xuICByZXR1cm4gciAhPSBudWxsICYmIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKG4pID0+IHtcbiAgICB0W25dID0gcltuXTtcbiAgfSksIEE7XG59XG5jb25zdCBUbiA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gTW4oQSkge1xuICBsZXQgZSA9IFRuW0FdO1xuICBpZiAoZSAhPSBudWxsKVxuICAgIHJldHVybiBlO1xuICBjb25zdCByID0gYXdhaXQgKGF3YWl0IGZldGNoKEEpKS50ZXh0KCk7XG4gIHJldHVybiBlID0geyB1cmw6IEEsIGNzc1RleHQ6IHIgfSwgVG5bQV0gPSBlLCBlO1xufVxuYXN5bmMgZnVuY3Rpb24gT24oQSwgZSkge1xuICBsZXQgdCA9IEEuY3NzVGV4dDtcbiAgY29uc3QgciA9IC91cmxcXChbXCInXT8oW15cIicpXSspW1wiJ10/XFwpL2csIHMgPSAodC5tYXRjaCgvdXJsXFwoW14pXStcXCkvZykgfHwgW10pLm1hcChhc3luYyAoQikgPT4ge1xuICAgIGxldCBpID0gQi5yZXBsYWNlKHIsIFwiJDFcIik7XG4gICAgcmV0dXJuIGkuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpIHx8IChpID0gbmV3IFVSTChpLCBBLnVybCkuaHJlZiksIF9zKGksIGUuZmV0Y2hSZXF1ZXN0SW5pdCwgKHsgcmVzdWx0OiBhIH0pID0+ICh0ID0gdC5yZXBsYWNlKEIsIGB1cmwoJHthfSlgKSwgW0IsIGFdKSk7XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocykudGhlbigoKSA9PiB0KTtcbn1cbmZ1bmN0aW9uIFJuKEEpIHtcbiAgaWYgKEEgPT0gbnVsbClcbiAgICByZXR1cm4gW107XG4gIGNvbnN0IGUgPSBbXSwgdCA9IC8oXFwvXFwqW1xcc1xcU10qP1xcKlxcLykvZ2k7XG4gIGxldCByID0gQS5yZXBsYWNlKHQsIFwiXCIpO1xuICBjb25zdCBuID0gbmV3IFJlZ0V4cChcIigoQC4qP2tleWZyYW1lcyBbXFxcXHNcXFxcU10qPyl7KFtcXFxcc1xcXFxTXSo/fVxcXFxzKj8pfSlcIiwgXCJnaVwiKTtcbiAgZm9yICg7IDsgKSB7XG4gICAgY29uc3QgYSA9IG4uZXhlYyhyKTtcbiAgICBpZiAoYSA9PT0gbnVsbClcbiAgICAgIGJyZWFrO1xuICAgIGUucHVzaChhWzBdKTtcbiAgfVxuICByID0gci5yZXBsYWNlKG4sIFwiXCIpO1xuICBjb25zdCBzID0gL0BpbXBvcnRbXFxzXFxTXSo/dXJsXFwoW14pXSpcXClbXFxzXFxTXSo/Oy9naSwgQiA9IFwiKChcXFxccyo/KD86XFxcXC9cXFxcKltcXFxcc1xcXFxTXSo/XFxcXCpcXFxcLyk/XFxcXHMqP0BtZWRpYVtcXFxcc1xcXFxTXSo/KXsoW1xcXFxzXFxcXFNdKj8pfVxcXFxzKj99KXwoKFtcXFxcc1xcXFxTXSo/KXsoW1xcXFxzXFxcXFNdKj8pfSlcIiwgaSA9IG5ldyBSZWdFeHAoQiwgXCJnaVwiKTtcbiAgZm9yICg7IDsgKSB7XG4gICAgbGV0IGEgPSBzLmV4ZWMocik7XG4gICAgaWYgKGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChhID0gaS5leGVjKHIpLCBhID09PSBudWxsKVxuICAgICAgICBicmVhaztcbiAgICAgIHMubGFzdEluZGV4ID0gaS5sYXN0SW5kZXg7XG4gICAgfSBlbHNlXG4gICAgICBpLmxhc3RJbmRleCA9IHMubGFzdEluZGV4O1xuICAgIGUucHVzaChhWzBdKTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIEZnKEEsIGUpIHtcbiAgY29uc3QgdCA9IFtdLCByID0gW107XG4gIHJldHVybiBBLmZvckVhY2goKG4pID0+IHtcbiAgICBpZiAoXCJjc3NSdWxlc1wiIGluIG4pXG4gICAgICB0cnkge1xuICAgICAgICBNQShuLmNzc1J1bGVzIHx8IFtdKS5mb3JFYWNoKChzLCBCKSA9PiB7XG4gICAgICAgICAgaWYgKHMudHlwZSA9PT0gQ1NTUnVsZS5JTVBPUlRfUlVMRSkge1xuICAgICAgICAgICAgbGV0IGkgPSBCICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzLmhyZWYsIG8gPSBNbihhKS50aGVuKChjKSA9PiBPbihjLCBlKSkudGhlbigoYykgPT4gUm4oYykuZm9yRWFjaCgobCkgPT4ge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG4uaW5zZXJ0UnVsZShsLCBsLnN0YXJ0c1dpdGgoXCJAaW1wb3J0XCIpID8gaSArPSAxIDogbi5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluc2VydGluZyBydWxlIGZyb20gcmVtb3RlIGNzc1wiLCB7XG4gICAgICAgICAgICAgICAgICBydWxlOiBsLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLmNhdGNoKChjKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJlbW90ZSBjc3NcIiwgYy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgci5wdXNoKG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgIGNvbnN0IEIgPSBBLmZpbmQoKGkpID0+IGkuaHJlZiA9PSBudWxsKSB8fCBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcbiAgICAgICAgbi5ocmVmICE9IG51bGwgJiYgci5wdXNoKE1uKG4uaHJlZikudGhlbigoaSkgPT4gT24oaSwgZSkpLnRoZW4oKGkpID0+IFJuKGkpLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICBCLmluc2VydFJ1bGUoYSwgQi5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9KSkuY2F0Y2goKGkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyByZW1vdGUgc3R5bGVzaGVldFwiLCBpKTtcbiAgICAgICAgfSkpLCBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5saW5pbmcgcmVtb3RlIGNzcyBmaWxlXCIsIHMpO1xuICAgICAgfVxuICB9KSwgUHJvbWlzZS5hbGwocikudGhlbigoKSA9PiAoQS5mb3JFYWNoKChuKSA9PiB7XG4gICAgaWYgKFwiY3NzUnVsZXNcIiBpbiBuKVxuICAgICAgdHJ5IHtcbiAgICAgICAgTUEobi5jc3NSdWxlcyB8fCBbXSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgIHQucHVzaChzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoaWxlIHJlYWRpbmcgQ1NTIHJ1bGVzIGZyb20gJHtuLmhyZWZ9YCwgcyk7XG4gICAgICB9XG4gIH0pLCB0KSk7XG59XG5mdW5jdGlvbiBoZyhBKSB7XG4gIHJldHVybiBBLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSBDU1NSdWxlLkZPTlRfRkFDRV9SVUxFKS5maWx0ZXIoKGUpID0+IFdzKGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInNyY1wiKSkpO1xufVxuYXN5bmMgZnVuY3Rpb24gZGcoQSwgZSkge1xuICBpZiAoQS5vd25lckRvY3VtZW50ID09IG51bGwpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgZWxlbWVudCBpcyBub3Qgd2l0aGluIGEgRG9jdW1lbnRcIik7XG4gIGNvbnN0IHQgPSBNQShBLm93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMpLCByID0gYXdhaXQgRmcodCwgZSk7XG4gIHJldHVybiBoZyhyKTtcbn1cbmZ1bmN0aW9uIGpzKEEpIHtcbiAgcmV0dXJuIEEudHJpbSgpLnJlcGxhY2UoL1tcIiddL2csIFwiXCIpO1xufVxuZnVuY3Rpb24gcGcoQSkge1xuICBjb25zdCBlID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgZnVuY3Rpb24gdChyKSB7XG4gICAgKHIuc3R5bGUuZm9udEZhbWlseSB8fCBnZXRDb21wdXRlZFN0eWxlKHIpLmZvbnRGYW1pbHkpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICBlLmFkZChqcyhzKSk7XG4gICAgfSksIEFycmF5LmZyb20oci5jaGlsZHJlbikuZm9yRWFjaCgocykgPT4ge1xuICAgICAgcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHQocyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHQoQSksIGU7XG59XG5hc3luYyBmdW5jdGlvbiBFZyhBLCBlKSB7XG4gIGNvbnN0IHQgPSBhd2FpdCBkZyhBLCBlKSwgciA9IHBnKEEpO1xuICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKHQuZmlsdGVyKChzKSA9PiByLmhhcyhqcyhzLnN0eWxlLmZvbnRGYW1pbHkpKSkubWFwKChzKSA9PiB7XG4gICAgY29uc3QgQiA9IHMucGFyZW50U3R5bGVTaGVldCA/IHMucGFyZW50U3R5bGVTaGVldC5ocmVmIDogbnVsbDtcbiAgICByZXR1cm4gWXMocy5jc3NUZXh0LCBCLCBlKTtcbiAgfSkpKS5qb2luKGBcbmApO1xufVxuYXN5bmMgZnVuY3Rpb24gSGcoQSwgZSkge1xuICBjb25zdCB0ID0gZS5mb250RW1iZWRDU1MgIT0gbnVsbCA/IGUuZm9udEVtYmVkQ1NTIDogZS5za2lwRm9udHMgPyBudWxsIDogYXdhaXQgRWcoQSwgZSk7XG4gIGlmICh0KSB7XG4gICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSwgbiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpO1xuICAgIHIuYXBwZW5kQ2hpbGQobiksIEEuZmlyc3RDaGlsZCA/IEEuaW5zZXJ0QmVmb3JlKHIsIEEuZmlyc3RDaGlsZCkgOiBBLmFwcGVuZENoaWxkKHIpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiB2ZyhBLCBlID0ge30pIHtcbiAgY29uc3QgeyB3aWR0aDogdCwgaGVpZ2h0OiByIH0gPSBrcyhBLCBlKSwgbiA9IGF3YWl0IEh0KEEsIGUsICEwKTtcbiAgcmV0dXJuIGF3YWl0IEhnKG4sIGUpLCBhd2FpdCBacyhuLCBlKSwgVWcobiwgZSksIGF3YWl0IFBsKG4sIHQsIHIpO1xufVxuYXN5bmMgZnVuY3Rpb24gSWcoQSwgZSA9IHt9KSB7XG4gIGNvbnN0IHsgd2lkdGg6IHQsIGhlaWdodDogciB9ID0ga3MoQSwgZSksIG4gPSBhd2FpdCB2ZyhBLCBlKSwgcyA9IGF3YWl0IHV0KG4pLCBCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwgaSA9IEIuZ2V0Q29udGV4dChcIjJkXCIpLCBhID0gZS5waXhlbFJhdGlvIHx8IEdsKCksIG8gPSBlLmNhbnZhc1dpZHRoIHx8IHQsIGMgPSBlLmNhbnZhc0hlaWdodCB8fCByO1xuICByZXR1cm4gQi53aWR0aCA9IG8gKiBhLCBCLmhlaWdodCA9IGMgKiBhLCBlLnNraXBBdXRvU2NhbGUgfHwgVmwoQiksIEIuc3R5bGUud2lkdGggPSBgJHtvfWAsIEIuc3R5bGUuaGVpZ2h0ID0gYCR7Y31gLCBlLmJhY2tncm91bmRDb2xvciAmJiAoaS5maWxsU3R5bGUgPSBlLmJhY2tncm91bmRDb2xvciwgaS5maWxsUmVjdCgwLCAwLCBCLndpZHRoLCBCLmhlaWdodCkpLCBpLmRyYXdJbWFnZShzLCAwLCAwLCBCLndpZHRoLCBCLmhlaWdodCksIEI7XG59XG5hc3luYyBmdW5jdGlvbiBtZyhBLCBlID0ge30pIHtcbiAgcmV0dXJuIChhd2FpdCBJZyhBLCBlKSkudG9EYXRhVVJMKCk7XG59XG5jb25zdCB5ZyA9IGFzeW5jIChBLCBlLCB0LCByKSA9PiB7XG4gIGxldCBuID0gITE7XG4gIEEuc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8IChBLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHIucG5nLmJhY2tncm91bmRDb2xvciwgbiA9ICEwKTtcbiAgY29uc3QgcyA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIGxldCBCID0gXCJcIjtcbiAgcyA/IEIgPSAoYXdhaXQgeGwoQSkpLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSA6IEIgPSBhd2FpdCBtZyhBKSwgYXdhaXQgTGcoQiwgZSksIG4gJiYgKEEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIiksIHQoITEpO1xufSwgTGcgPSAoQSwgZSkgPT4ge1xuICBjb25zdCB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICB0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiwgdC5kb3dubG9hZCA9IGUsIHQuaHJlZiA9IEEsIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCksIHQuY2xpY2soKSwgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0KSwgdC5yZW1vdmUoKTtcbn0sIEtnID0gMjAwLCBiZyA9IDIwMCwgeGcgPSAoQSkgPT4ge1xuICBjb25zdCB7XG4gICAgY3N2T3B0czogZSxcbiAgICBkb3dubG9hZEFsbEZ1bmN0aW9uOiB0LFxuICAgIGVuYWJsZURvd25sb2FkQXNDU1Y6IHIsXG4gICAgZW5hYmxlRG93bmxvYWRBc1BORzogbixcbiAgICBwbmdPcHRzOiBzLFxuICAgIHByZXBwaW5nRG93bmxvYWQ6IEIsXG4gICAgc2V0UHJlcHBpbmdEb3dubG9hZDogaVxuICB9ID0gQSwgYSA9IENBKCksIFtvLCBjXSA9IGZlKCExKSwgW2wsIGddID0gZmUoITEpLCBbVSwgd10gPSBmZShcIlwiKSwgZiA9IFZBKG51bGwpO1xuICBxZSgoKSA9PiB7XG4gICAgaWYgKGwgJiYgQikge1xuICAgICAgaWYgKCFzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBQTkcgb3B0aW9ucyBzdXBwbGllZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBjaGFydE5hbWU6IEYsIGVsZW1lbnQ6IHYgfSA9IHM7XG4gICAgICBpZiAodikge1xuICAgICAgICBjb25zdCB1ID0gRi5yZXBsYWNlKC8oW15hLXpBLVowLTkgXSspL2dpLCBcIi1cIiksIEggPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHlnKFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIGAke3V9LSR7SH0ucG5nYCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBhXG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgYmcpO1xuICAgICAgfVxuICAgICAgZyghMSk7XG4gICAgfVxuICB9LCBbbCwgcywgQiwgaSwgYV0pLCBxZSgoKSA9PiB7XG4gICAgdmFyIEY7XG4gICAgbyAmJiAoKEYgPSBmLmN1cnJlbnQpID09IG51bGwgfHwgRi5mb2N1cygpKTtcbiAgfSwgW29dKSwgcWUoKCkgPT4ge1xuICAgIGxldCBGID0gbnVsbDtcbiAgICByZXR1cm4gVSA9PT0gXCJcIiA/IEYgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGMoITEpO1xuICAgIH0sIEtnKSA6IEYgJiYgY2xlYXJUaW1lb3V0KEYpLCAoKSA9PiB7XG4gICAgICBGICYmIGNsZWFyVGltZW91dChGKTtcbiAgICB9O1xuICB9LCBbVV0pO1xuICBjb25zdCBJID0gKEYpID0+IHtcbiAgICB2YXIgbSwgRTtcbiAgICBpZiAoRi5wcmV2ZW50RGVmYXVsdCgpLCAhZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5vIENTViBvcHRpb25zIHN1cHBsaWVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNoYXJ0TmFtZTogdiwgcHJvcHM6IHUgfSA9IGU7XG4gICAgbGV0IEggPSBbXTtcbiAgICBBcnJheS5pc0FycmF5KHUucmVzdWx0cykgPyBIID0gdS5yZXN1bHRzLnJlZHVjZSgoYiA9IFtdLCBNKSA9PiAoTSAhPSBudWxsICYmIE0uZGF0YSAmJiBiLnB1c2goLi4uTS5kYXRhKSwgYiksIFtdKSA6IEggPSAobSA9IHUucmVzdWx0cykgPT0gbnVsbCA/IHZvaWQgMCA6IG0uZGF0YSwgJHModSwgSCwgKEUgPSB1LnByZXZSZXN1bHRzKSA9PSBudWxsID8gdm9pZCAwIDogRS5kYXRhLCB2LCBpKTtcbiAgfSwgaCA9IChGLCB2LCB1KSA9PiB7XG4gICAgKEYua2V5ID09PSBcIkVudGVyXCIgfHwgRi5rZXkgPT09IFwiIFwiKSAmJiAoRi5wcmV2ZW50RGVmYXVsdCgpLCB2KEYpKSwgdSAmJiBGLmtleSA9PT0gXCJFc2NhcGVcIiAmJiAoRi5wcmV2ZW50RGVmYXVsdCgpLCBjKCExKSk7XG4gIH0sIFEgPSAoRikgPT4ge1xuICAgIEYucHJldmVudERlZmF1bHQoKSwgYyghMSksIGkoITApLCBnKCEwKTtcbiAgfSwgTCA9ICgpID0+IHtcbiAgICBjKCFvKTtcbiAgfTtcbiAgcmV0dXJuICFyICYmICFuID8gbnVsbCA6IHIgJiYgIW4gJiYgIXQgPyAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB6LTUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgc3BhY2UteC0yXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBvbkNsaWNrOiBJLFxuICAgICAgY2xhc3NOYW1lOiBcImN1cnNvci1wb2ludGVyXCIsXG4gICAgICB0YWJJbmRleDogMCxcbiAgICAgIG9uS2V5RG93bjogKEYpID0+IGgoRiwgSSwgITEpLFxuICAgICAgY2hpbGRyZW46ICFCICYmIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChJdCwgeyBjbGFzc05hbWU6IFwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS0xMDAgb3BhY2l0eS01MFwiIH0pXG4gICAgfVxuICApIH0pIDogIXIgJiYgbiA/IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHotNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTJcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIG9uQ2xpY2s6IFEsXG4gICAgICBjbGFzc05hbWU6IFwiY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgb25LZXlEb3duOiAoRikgPT4gaChGLCBRLCAhMSksXG4gICAgICBjaGlsZHJlbjogIUIgJiYgLyogQF9fUFVSRV9fICovIEMuanN4KGJyLCB7IGNsYXNzTmFtZTogXCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTEwMCBvcGFjaXR5LTUwXCIgfSlcbiAgICB9XG4gICkgfSkgOiAvKiBAX19QVVJFX18gKi8gQy5qc3goQy5GcmFnbWVudCwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgei01IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHNwYWNlLXgtMiBcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBvbkNsaWNrOiBMLFxuICAgICAgY2xhc3NOYW1lOiBcImN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHctMyBmbGV4IGp1c3RpZnktY2VudGVyXCIsXG4gICAgICBvbktleURvd246IChGKSA9PiBoKEYsIEwsICEwKSxcbiAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgIUIgJiYgLyogQF9fUFVSRV9fICovIEMuanN4KGFCLCB7IGNsYXNzTmFtZTogXCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTEwMCBvcGFjaXR5LTUwXCIgfSksXG4gICAgICAgIG8gJiYgLyogQF9fUFVSRV9fICovIEMuanN4KEMuRnJhZ21lbnQsIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgIG1heC13LTEwMFxuICAgICAgICAgICAgICAgIHJpZ2h0LTBcbiAgICAgICAgICAgICAgICB0b3AtNlxuICAgICAgICAgICAgICAgIHdoaXRlc3BhY2Utbm93cmFwXG4gICAgICAgICAgICAgICAgYmctW2NvbG9yOi0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtYmFja2dyb3VuZENvbG9yXVxuICAgICAgICAgICAgICAgIHAtWy0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtcGFkZGluZ091dGVyXVxuICAgICAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtYm9yZGVyUmFkaXVzXVxuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBhLmRvd25sb2FkTWVudS5ib3JkZXIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogYS5kb3dubG9hZE1lbnUuYm94U2hhZG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXCJ1bFwiLCB7IGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcImxpXCIsIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBJLFxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiAoRikgPT4gaChGLCBJLCAhMSksXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctW2NvbG9yOi0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtaG92ZXItYmFja2dyb3VuZENvbG9yXVxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC1bY29sb3I6LS1lbWJlZGRhYmxlLWRvd25sb2FkTWVudS1ob3Zlci1mb250Q29sb3JdXG4gICAgICAgICAgICAgICAgICAgICAgICBwLVstLWVtYmVkZGFibGUtZG93bmxvYWRNZW51LXBhZGRpbmdJbm5lcl1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtW2NvbG9yOi0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtZm9udC1jb2xvcl1cbiAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICByZWY6IGYsXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB3KFwiY3N2XCIpLFxuICAgICAgICAgICAgICAgICAgb25CbHVyOiAoKSA9PiB3KFwiXCIpLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KEl0LCB7IGNsYXNzTmFtZTogXCJjdXJzb3ItcG9pbnRlciBpbmxpbmUtYmxvY2sgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBcIiBEb3dubG9hZCBDU1ZcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSB9KSxcbiAgICAgICAgICAgICAgdCAmJiAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJsaVwiLCB7IGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gQy5qc3hzKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogKEYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRi5wcmV2ZW50RGVmYXVsdCgpLCB0KCk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiAoRikgPT4gaChGLCB0LCAhMSksXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctW2NvbG9yOi0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtaG92ZXItYmFja2dyb3VuZENvbG9yXVxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC1bY29sb3I6LS1lbWJlZGRhYmxlLWRvd25sb2FkTWVudS1ob3Zlci1mb250Q29sb3JdXG4gICAgICAgICAgICAgICAgICAgICAgICBwLVstLWVtYmVkZGFibGUtZG93bmxvYWRNZW51LXBhZGRpbmdJbm5lcl1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtW2NvbG9yOi0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtZm9udC1jb2xvcl1cbiAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB3KFwiZG93bmxvYWRBbGxcIiksXG4gICAgICAgICAgICAgICAgICBvbkJsdXI6ICgpID0+IHcoXCJcIiksXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goSXQsIHsgY2xhc3NOYW1lOiBcImN1cnNvci1wb2ludGVyIGlubGluZS1ibG9jayBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFwiIERvd25sb2FkIEFsbCBhcyBDU1ZcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSB9KSxcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFwibGlcIiwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4cyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IFEsXG4gICAgICAgICAgICAgICAgICBvbktleURvd246IChGKSA9PiBoKEYsIFEsICExKSxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWRvd25sb2FkTWVudS1ob3Zlci1iYWNrZ3JvdW5kQ29sb3JdXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LVtjb2xvcjotLWVtYmVkZGFibGUtZG93bmxvYWRNZW51LWhvdmVyLWZvbnRDb2xvcl1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAtWy0tZW1iZWRkYWJsZS1kb3dubG9hZE1lbnUtcGFkZGluZ0lubmVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1bY29sb3I6LS1lbWJlZGRhYmxlLWRvd25sb2FkTWVudS1mb250LWNvbG9yXVxuICAgICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+IHcoXCJwbmdcIiksXG4gICAgICAgICAgICAgICAgICBvbkJsdXI6ICgpID0+IHcoXCJcIiksXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goYnIsIHsgY2xhc3NOYW1lOiBcImN1cnNvci1wb2ludGVyIGlubGluZS1ibG9jayBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFwiIERvd25sb2FkIFBOR1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApIH0pXG4gICAgICAgICAgICBdIH0pXG4gICAgICAgICAgfVxuICAgICAgICApIH0pXG4gICAgICBdXG4gICAgfVxuICApIH0pIH0pO1xufSwgVmcgPSAoKSA9PiB7XG4gIGNvbnN0IEEgPSBDQSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4cyhcInN2Z1wiLCB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxN1wiLCB2aWV3Qm94OiBcIjAgMCAxNiAxN1wiLCBmaWxsOiBcIm5vbmVcIiwgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICBcInBhdGhcIixcbiAgICAgIHtcbiAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgIGQ6IFwiTTEwLjk2NTcgNS41MzQzNkMxMS4yNzgyIDUuODQ2NzggMTEuMjc4MiA2LjM1MzMxIDEwLjk2NTcgNi42NjU3M0w2LjE2NTczIDExLjQ2NTdDNS44NTMzMSAxMS43NzgyIDUuMzQ2NzggMTEuNzc4MiA1LjAzNDM2IDExLjQ2NTdDNC43MjE5NCAxMS4xNTMzIDQuNzIxOTQgMTAuNjQ2OCA1LjAzNDM2IDEwLjMzNDRMOS44MzQzNiA1LjUzNDM2QzEwLjE0NjggNS4yMjE5NCAxMC42NTMzIDUuMjIxOTQgMTAuOTY1NyA1LjUzNDM2WlwiLFxuICAgICAgICBmaWxsOiBBLnN2Zy5maWxsTm9ybWFsXG4gICAgICB9XG4gICAgKSxcbiAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICBcInBhdGhcIixcbiAgICAgIHtcbiAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgIGQ6IFwiTTUuMDM0MzYgNS41MzQzNkM1LjM0Njc4IDUuMjIxOTQgNS44NTMzMSA1LjIyMTk0IDYuMTY1NzMgNS41MzQzNkwxMC45NjU3IDEwLjMzNDRDMTEuMjc4MiAxMC42NDY4IDExLjI3ODIgMTEuMTUzMyAxMC45NjU3IDExLjQ2NTdDMTAuNjUzMyAxMS43NzgyIDEwLjE0NjggMTEuNzc4MiA5LjgzNDM2IDExLjQ2NTdMNS4wMzQzNiA2LjY2NTczQzQuNzIxOTQgNi4zNTMzMSA0LjcyMTk0IDUuODQ2NzggNS4wMzQzNiA1LjUzNDM2WlwiLFxuICAgICAgICBmaWxsOiBBLnN2Zy5maWxsTm9ybWFsXG4gICAgICB9XG4gICAgKVxuICBdIH0pO1xufSwgTmcgPSAoQSkgPT4gLyogQF9fUFVSRV9fICovIEMuanN4KFwic3ZnXCIsIHsgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgd2lkdGg6IFwiMTdcIiwgaGVpZ2h0OiBcIjE2XCIsIHZpZXdCb3g6IFwiMCAwIDE3IDE2XCIsIGZpbGw6IFwibm9uZVwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFxuICBcInBhdGhcIixcbiAge1xuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgZDogXCJNOS4zNDgzNyAxMC43MDM4QzkuMjcxMTMgMTAuNzk3NCA5LjE3ODI4IDEwLjg3MTkgOS4wNzU0MyAxMC45MjI4QzguOTcyNTggMTAuOTczNyA4Ljg2MTg3IDExIDguNzUgMTFDOC42MzgxMyAxMSA4LjUyNzQyIDEwLjk3MzcgOC40MjQ1NyAxMC45MjI4QzguMzIxNzIgMTAuODcxOSA4LjIyODg3IDEwLjc5NzQgOC4xNTE2MyAxMC43MDM4TDQuOTUxOCA2LjUzOTc3QzQuODQ5NDEgNi40MDYzOSA0Ljc4MjUzIDYuMjQxNjMgNC43NTkyMSA2LjA2NTMxQzQuNzM1ODggNS44ODkgNC43NTcxMSA1LjcwODY0IDQuODIwMzMgNS41NDU5NUM0Ljg4MzU1IDUuMzgzMjYgNC45ODYwNyA1LjI0NTE4IDUuMTE1NTYgNS4xNDgzMkM1LjI0NTA0IDUuMDUxNDYgNS4zOTU5NyA0Ljk5OTk1IDUuNTUwMTcgNUgxMS45NDk4QzEyLjEwNCA0Ljk5OTk1IDEyLjI1NSA1LjA1MTQ2IDEyLjM4NDQgNS4xNDgzMkMxMi41MTM5IDUuMjQ1MTggMTIuNjE2NCA1LjM4MzI2IDEyLjY3OTcgNS41NDU5NUMxMi43NDI5IDUuNzA4NjQgMTIuNzY0MSA1Ljg4OSAxMi43NDA4IDYuMDY1MzFDMTIuNzE3NSA2LjI0MTYzIDEyLjY1MDYgNi40MDYzOSAxMi41NDgyIDYuNTM5NzdMOS4zNDgzNyAxMC43MDM4WlwiLFxuICAgIGZpbGw6IEEuZmlsbFxuICB9XG4pIH0pLCBQZyA9IChBKSA9PiAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJzdmdcIiwgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgdmlld0JveDogXCIwIDAgMTYgMTZcIiwgZmlsbDogXCJub25lXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gIFwicGF0aFwiLFxuICB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk04LjU5ODM3IDUuMjk2MkM4LjUyMTEzIDUuMjAyNTkgOC40MjgyOCA1LjEyODA3IDguMzI1NDMgNS4wNzcxNkM4LjIyMjU4IDUuMDI2MjUgOC4xMTE4NyA1IDggNUM3Ljg4ODEzIDUgNy43Nzc0MiA1LjAyNjI1IDcuNjc0NTcgNS4wNzcxNkM3LjU3MTcyIDUuMTI4MDcgNy40Nzg4NyA1LjIwMjU5IDcuNDAxNjMgNS4yOTYyTDQuMjAxOCA5LjQ2MDIzQzQuMDk5NDEgOS41OTM2MSA0LjAzMjUzIDkuNzU4MzcgNC4wMDkyMSA5LjkzNDY5QzMuOTg1ODggMTAuMTExIDQuMDA3MTEgMTAuMjkxNCA0LjA3MDMzIDEwLjQ1NEM0LjEzMzU1IDEwLjYxNjcgNC4yMzYwNyAxMC43NTQ4IDQuMzY1NTYgMTAuODUxN0M0LjQ5NTA0IDEwLjk0ODUgNC42NDU5NyAxMSA0LjgwMDE3IDExSDExLjE5OThDMTEuMzU0IDExIDExLjUwNSAxMC45NDg1IDExLjYzNDQgMTAuODUxN0MxMS43NjM5IDEwLjc1NDggMTEuODY2NCAxMC42MTY3IDExLjkyOTcgMTAuNDU0QzExLjk5MjkgMTAuMjkxNCAxMi4wMTQxIDEwLjExMSAxMS45OTA4IDkuOTM0NjlDMTEuOTY3NSA5Ljc1ODM3IDExLjkwMDYgOS41OTM2MSAxMS43OTgyIDkuNDYwMjNMOC41OTgzNyA1LjI5NjJaXCIsXG4gICAgZmlsbDogQS5maWxsXG4gIH1cbikgfSksIGtnID0gKHtcbiAgY2xhc3NOYW1lOiBBLFxuICBvbkNsaWNrOiBlXG59KSA9PiB7XG4gIGNvbnN0IHQgPSBDQSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgIFwic3ZnXCIsXG4gICAge1xuICAgICAgb25DbGljazogZSxcbiAgICAgIGNsYXNzTmFtZTogQSB8fCBcIlwiLFxuICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgIFwicGF0aFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICBkOiBcIk0xMi43MDcxIDUuMjkyODlDMTMuMDk3NiA1LjY4MzQyIDEzLjA5NzYgNi4zMTY1OCAxMi43MDcxIDYuNzA3MTFMOS40MTQyMSAxMEwxMi43MDcxIDEzLjI5MjlDMTMuMDk3NiAxMy42ODM0IDEzLjA5NzYgMTQuMzE2NiAxMi43MDcxIDE0LjcwNzFDMTIuMzE2NiAxNS4wOTc2IDExLjY4MzQgMTUuMDk3NiAxMS4yOTI5IDE0LjcwNzFMNy4yOTI4OSAxMC43MDcxQzYuOTAyMzcgMTAuMzE2NiA2LjkwMjM3IDkuNjgzNDIgNy4yOTI4OSA5LjI5Mjg5TDExLjI5MjkgNS4yOTI4OUMxMS42ODM0IDQuOTAyMzcgMTIuMzE2NiA0LjkwMjM3IDEyLjcwNzEgNS4yOTI4OVpcIixcbiAgICAgICAgICBmaWxsOiB0LnN2Zy5maWxsTm9ybWFsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICk7XG59LCBfZyA9ICh7XG4gIGNsYXNzTmFtZTogQSxcbiAgb25DbGljazogZVxufSkgPT4ge1xuICBjb25zdCB0ID0gQ0EoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIG9uQ2xpY2s6IGUsXG4gICAgICBjbGFzc05hbWU6IEEgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICBcInBhdGhcIixcbiAgICAgICAge1xuICAgICAgICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICBjbGlwUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgICAgZDogXCJNNy4yOTI4OSAxNC43MDcxQzYuOTAyMzcgMTQuMzE2NiA2LjkwMjM3IDEzLjY4MzQgNy4yOTI4OSAxMy4yOTI5TDEwLjU4NTggMTBMNy4yOTI4OSA2LjcwNzExQzYuOTAyMzcgNi4zMTY1OCA2LjkwMjM3IDUuNjgzNDIgNy4yOTI4OSA1LjI5Mjg5QzcuNjgzNDIgNC45MDIzNyA4LjMxNjU4IDQuOTAyMzcgOC43MDcxMSA1LjI5Mjg5TDEyLjcwNzEgOS4yOTI4OUMxMy4wOTc2IDkuNjgzNDIgMTMuMDk3NiAxMC4zMTY2IDEyLjcwNzEgMTAuNzA3MUw4LjcwNzExIDE0LjcwNzFDOC4zMTY1OCAxNS4wOTc2IDcuNjgzNDIgMTUuMDk3NiA3LjI5Mjg5IDE0LjcwNzFaXCIsXG4gICAgICAgICAgZmlsbDogdC5zdmcuZmlsbE5vcm1hbFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICApO1xufSwgWGcgPSAoe1xuICBjbGFzc05hbWU6IEEsXG4gIG9uQ2xpY2s6IGVcbn0pID0+IHtcbiAgY29uc3QgdCA9IENBKCk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICBvbkNsaWNrOiBlLFxuICAgICAgY2xhc3NOYW1lOiBBIHx8IFwiXCIsXG4gICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgICAgICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICAgIGQ6IFwiTTUuMjkyODkgNy4yOTI4OUM1LjY4MzQyIDYuOTAyMzcgNi4zMTY1OCA2LjkwMjM3IDYuNzA3MTEgNy4yOTI4OUwxMCAxMC41ODU4TDEzLjI5MjkgNy4yOTI4OUMxMy42ODM0IDYuOTAyMzcgMTQuMzE2NiA2LjkwMjM3IDE0LjcwNzEgNy4yOTI4OUMxNS4wOTc2IDcuNjgzNDIgMTUuMDk3NiA4LjMxNjU4IDE0LjcwNzEgOC43MDcxMUwxMC43MDcxIDEyLjcwNzFDMTAuMzE2NiAxMy4wOTc2IDkuNjgzNDIgMTMuMDk3NiA5LjI5Mjg5IDEyLjcwNzFMNS4yOTI4OSA4LjcwNzExQzQuOTAyMzcgOC4zMTY1OCA0LjkwMjM3IDcuNjgzNDIgNS4yOTI4OSA3LjI5Mjg5WlwiLFxuICAgICAgICAgIGZpbGw6IHQuc3ZnLmZpbGxTdHJvbmdcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgKTtcbn0sIEpnID0gKHtcbiAgY2xhc3NOYW1lOiBBLFxuICBvbkNsaWNrOiBlXG59KSA9PiB7XG4gIGNvbnN0IHQgPSBDQSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4cyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIG9uQ2xpY2s6IGUsXG4gICAgICBjbGFzc05hbWU6IEEgfHwgXCJcIixcbiAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3hzKFwiZ1wiLCB7IGNsaXBQYXRoOiBcInVybCgjY2xpcDBfMTM3XzE2OTQpXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGQ6IFwiTTIuNzA0NDYgMy4zNjczN0MyLjM1MjY0IDMuMzY3MzcgMi4wMTUyMyAzLjUwNzEzIDEuNzY2NDYgMy43NTU5QzEuNTE3NjkgNC4wMDQ2OCAxLjM3NzkzIDQuMzQyMDggMS4zNzc5MyA0LjY5MzlWMTcuMjk1OUMxLjM3NzkzIDE3LjY0NzcgMS41MTc2OSAxNy45ODUyIDEuNzY2NDYgMTguMjMzOUMyLjAxNTIzIDE4LjQ4MjcgMi4zNTI2NCAxOC42MjI1IDIuNzA0NDYgMTguNjIyNUgxNy4yOTYzQzE3LjY0ODEgMTguNjIyNSAxNy45ODU2IDE4LjQ4MjcgMTguMjM0MyAxOC4yMzM5QzE4LjQ4MyAxNy45ODUyIDE4LjYyMjggMTcuNjQ3NyAxOC42MjI4IDE3LjI5NTlWNC42OTM5QzE4LjYyMjggNC4zNDIwOCAxOC40ODMgNC4wMDQ2OCAxOC4yMzQzIDMuNzU1OUMxNy45ODU2IDMuNTA3MTMgMTcuNjQ4MSAzLjM2NzM3IDE3LjI5NjMgMy4zNjczN0gxNC42NDMyXCIsXG4gICAgICAgICAgICAgIHN0cm9rZTogdC5zdmcuc3Ryb2tlTm9ybWFsLFxuICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxLjNcIixcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZDogXCJNNS4zNTc0MiAxLjM3NzU2VjUuMzU3MTZcIixcbiAgICAgICAgICAgICAgc3Ryb2tlOiB0LnN2Zy5zdHJva2VOb3JtYWwsXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEuM1wiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkOiBcIk0xNC42NDM2IDEuMzc3NTZWNS4zNTcxNlwiLFxuICAgICAgICAgICAgICBzdHJva2U6IHQuc3ZnLnN0cm9rZU5vcm1hbCxcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGQ6IFwiTTUuMzU3NDIgMy4zNjczN0gxMS45OTAxXCIsXG4gICAgICAgICAgICAgIHN0cm9rZTogdC5zdmcuc3Ryb2tlTm9ybWFsLFxuICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxLjNcIixcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZDogXCJNMTMuMzE2NCA4LjY3MzQ5VjE0LjY0MjZcIixcbiAgICAgICAgICAgICAgc3Ryb2tlOiB0LnN2Zy5zdHJva2VOb3JtYWwsXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEuM1wiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkOiBcIk0xMS4zMjcxIDEwLjE2NThIMTEuODI0NkMxMi42NDg3IDEwLjE2NTggMTMuMzE2OCA5LjQ5NzY1IDEzLjMxNjggOC42NzM0OVwiLFxuICAgICAgICAgICAgICBzdHJva2U6IHQuc3ZnLnN0cm9rZU5vcm1hbCxcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMS4zXCIsXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGQ6IFwiTTE1LjMwNjYgMTQuNjQyOUgxMS4zMjcxXCIsXG4gICAgICAgICAgICAgIHN0cm9rZTogdC5zdmcuc3Ryb2tlTm9ybWFsLFxuICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIxLjNcIixcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZDogXCJNNC42OTQzNCAxMy42NDhDNC44OTkyMSAxNC4yMjc1IDUuNDUxOTggMTQuNjQyOSA2LjEwMTc3IDE0LjY0MjlINy4wOTY2NkM3LjkyMDg2IDE0LjY0MjkgOC41ODkgMTMuOTc0NyA4LjU4OSAxMy4xNTA1VjEyLjkwMThDOC41ODkgMTIuMDc3NiA3LjkyMDg2IDExLjQwOTUgNy4wOTY2NiAxMS40MDk1SDYuNTk5MjJINi45NzIzMUM3LjcyNzgyIDExLjQwOTUgOC4zNDAyOCAxMC43OTcgOC4zNDAyOCAxMC4wNDE1QzguMzQwMjggOS4yODU5NSA3LjcyNzgxIDguNjczNDggNi45NzIyOSA4LjY3MzQ5SDYuMjI2MTJDNS41OTk5NiA4LjY3MzUxIDUuMDcyMDUgOS4wOTQyMSA0LjkwOTY0IDkuNjY4MzlcIixcbiAgICAgICAgICAgICAgc3Ryb2tlOiB0LnN2Zy5zdHJva2VOb3JtYWwsXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjEuM1wiLFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIF0gfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcImRlZnNcIiwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFwiY2xpcFBhdGhcIiwgeyBpZDogXCJjbGlwMF8xMzdfMTY5NFwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFwicmVjdFwiLCB7IHdpZHRoOiBcIjIwXCIsIGhlaWdodDogXCIyMFwiLCBmaWxsOiB0LnN2Zy5maWxsQmtnIH0pIH0pIH0pXG4gICAgICBdXG4gICAgfVxuICApO1xufSwgRGcgPSAoKSA9PiB7XG4gIGNvbnN0IEEgPSBDQSgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIEMuanN4cyhcInN2Z1wiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJnXCIsIHsgY2xpcFBhdGg6IFwidXJsKCNjbGlwMF82NzBfNjUwKVwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgXCJwYXRoXCIsXG4gICAgICB7XG4gICAgICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgICAgICBkOiBcIk02LjgzNjAyIDAuMzE4MjA3QzcuMTg3MjggMC4xMDk5MTMgNy41ODgxMyAwIDcuOTk2NSAwQzguNDA0ODggMCA4LjgwNTcyIDAuMTA5OTEzIDkuMTU2OTggMC4zMTgyMDdDOS41MDcyIDAuNTI1ODgzIDkuNzk1MjUgMC44MjM3MjQgOS45OTExMSAxLjE4MDY0TDE1LjU5NSAxMS4yMzQ3QzE1Ljg2NDUgMTEuNzI0NCAxNi4wMDE3IDEyLjI3NTggMTUuOTkzIDEyLjgzNDdDMTUuOTg0NCAxMy4zOTM2IDE1LjgzMDMgMTMuOTQwNiAxNS41NDU5IDE0LjQyMTdDMTUuMjYxNCAxNC45MDI5IDE0Ljg1NjUgMTUuMzAxNiAxNC4zNzEgMTUuNTc4NkMxMy44ODU1IDE1Ljg1NTUgMTMuMzM2MiAxNi4wMDEyIDEyLjc3NzMgMTYuMDAxMkMxMi43NzczIDE2LjAwMTIgMTIuNzc3MyAxNi4wMDEyIDEyLjc3NzMgMTYuMDAxMkgzLjIxMjVDMi42NTQxNyAxNi4wMDExIDIuMTA1MzkgMTUuODU1NSAxLjYyMDQ2IDE1LjU3ODhDMS4xMzU1MyAxNS4zMDIxIDAuNzMxMDc5IDE0LjkwMzggMC40NDY5ODggMTQuNDIzMUMwLjE2Mjg5NyAxMy45NDI1IDAuMDA4OTY5NTUgMTMuMzk2MSAwLjAwMDM4MDI4MyAxMi44Mzc4Qy0wLjAwODIwODk5IDEyLjI3OTUgMC4xMjg4MzYgMTEuNzI4NyAwLjM5ODAwNiAxMS4yMzk1TDAuNDAwMDI4IDExLjIzNThMNi4wMDE4NiAxLjE4MDdDNi4xOTc3MiAwLjgyMzc1OSA2LjQ4NTc4IDAuNTI1ODk1IDYuODM2MDIgMC4zMTgyMDdaTTcuOTk2NSAxLjZDNy44NzUzMSAxLjYgNy43NTYzNSAxLjYzMjYyIDcuNjUyMTEgMS42OTQ0M0M3LjU0Nzg3IDEuNzU2MjUgNy40NjIxOSAxLjg0NDk4IDcuNDA0MDUgMS45NTEzMkw3LjQwMDk5IDEuOTU2OTJMMS43OTk4IDEyLjAxMDhDMS43OTk0OSAxMi4wMTE0IDEuNzk5MTkgMTIuMDEyIDEuNzk4ODggMTIuMDEyNUMxLjY2NDM3IDEyLjI1NzYgMS41OTU4OSAxMi41MzM2IDEuNjAwMTkgMTIuODEzMkMxLjYwNDUgMTMuMDkzNCAxLjY4MTc3IDEzLjM2NzcgMS44MjQzOCAxMy42MDlDMS45NjcgMTMuODUwMyAyLjE3MDAzIDE0LjA1MDIgMi40MTM0NiAxNC4xODkxQzIuNjU2ODYgMTQuMzI4IDIuOTMyMjYgMTQuNDAxMSAzLjIxMjUgMTQuNDAxMkMzLjIxMjQ3IDE0LjQwMTIgMy4yMTI1MyAxNC40MDEyIDMuMjEyNSAxNC40MDEySDEyLjc3NzNDMTMuMDU4MiAxNC40MDEyIDEzLjMzNDIgMTQuMzI4IDEzLjU3ODIgMTQuMTg4OEMxMy44MjIxIDE0LjA0OTcgMTQuMDI1NiAxMy44NDkzIDE0LjE2ODUgMTMuNjA3NUMxNC4zMTE1IDEzLjM2NTggMTQuMzg4OSAxMy4wOTA5IDE0LjM5MzIgMTIuODEwMUMxNC4zOTc2IDEyLjUyOTkgMTQuMzI5IDEyLjI1MzUgMTQuMTk0MiAxMi4wMDc5QzE0LjE5MzkgMTIuMDA3MyAxNC4xOTM1IDEyLjAwNjcgMTQuMTkzMiAxMi4wMDYxTDguNTg4OTMgMS45NTEzM0M4LjUzMDc5IDEuODQ0OTkgOC40NDUxMyAxLjc1NjI1IDguMzQwODkgMS42OTQ0M0M4LjIzNjY1IDEuNjMyNjIgOC4xMTc2OSAxLjYgNy45OTY1IDEuNlpNNy45OTY1IDQuMDAxMTdDOC40MzgzMyA0LjAwMTE3IDguNzk2NSA0LjM1OTM0IDguNzk2NSA0LjgwMTE3VjguMDAxMTdDOC43OTY1IDguNDQzIDguNDM4MzMgOC44MDExNyA3Ljk5NjUgOC44MDExN0M3LjU1NDY3IDguODAxMTcgNy4xOTY1IDguNDQzIDcuMTk2NSA4LjAwMTE3VjQuODAxMTdDNy4xOTY1IDQuMzU5MzQgNy41NTQ2NyA0LjAwMTE3IDcuOTk2NSA0LjAwMTE3Wk03Ljk5NjUgMTEuMzcyNEM4LjA0OTU1IDExLjM3MjQgOC4xMDA0MiAxMS4zNTEzIDguMTM3OTIgMTEuMzEzOEM4LjE3NTQzIDExLjI3NjMgOC4xOTY1IDExLjIyNTQgOC4xOTY1IDExLjE3MjRDOC4xOTY1IDExLjExOTMgOC4xNzU0MyAxMS4wNjg1IDguMTM3OTIgMTEuMDMwOUM4LjEwMDQyIDEwLjk5MzQgOC4wNDk1NCAxMC45NzI0IDcuOTk2NSAxMC45NzI0QzcuOTQzNDYgMTAuOTcyNCA3Ljg5MjU5IDEwLjk5MzQgNy44NTUwOCAxMS4wMzA5QzcuODE3NTcgMTEuMDY4NSA3Ljc5NjUgMTEuMTE5MyA3Ljc5NjUgMTEuMTcyNEM3Ljc5NjUgMTEuMjI1NCA3LjgxNzU3IDExLjI3NjMgNy44NTUwOCAxMS4zMTM4QzcuODkyNTkgMTEuMzUxMyA3Ljk0MzQ2IDExLjM3MjQgNy45OTY1IDExLjM3MjRaTTcuMDA2NTUgMTAuMTgyNEM3LjI2OTEgOS45MTk4NyA3LjYyNTIgOS43NzIzNyA3Ljk5NjUgOS43NzIzN0M4LjM2NzgxIDkuNzcyMzcgOC43MjM5IDkuOTE5ODcgOC45ODY0NSAxMC4xODI0QzkuMjQ5IDEwLjQ0NSA5LjM5NjUgMTAuODAxMSA5LjM5NjUgMTEuMTcyNEM5LjM5NjUgMTEuNTQzNyA5LjI0OSAxMS44OTk4IDguOTg2NDUgMTIuMTYyM0M4LjcyMzkgMTIuNDI0OSA4LjM2NzggMTIuNTcyNCA3Ljk5NjUgMTIuNTcyNEM3LjYyNTIgMTIuNTcyNCA3LjI2OTEgMTIuNDI0OSA3LjAwNjU1IDEyLjE2MjNDNi43NDQgMTEuODk5OCA2LjU5NjUgMTEuNTQzNyA2LjU5NjUgMTEuMTcyNEM2LjU5NjUgMTAuODAxMSA2Ljc0NCAxMC40NDUgNy4wMDY1NSAxMC4xODI0WlwiLFxuICAgICAgICBmaWxsOiBBLnN2Zy5maWxsTm9ybWFsXG4gICAgICB9XG4gICAgKSB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJkZWZzXCIsIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcImNsaXBQYXRoXCIsIHsgaWQ6IFwiY2xpcDBfNjcwXzY1MFwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4KFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCBmaWxsOiBBLnN2Zy5maWxsQmtnIH0pIH0pIH0pXG4gIF0gfSk7XG59LCBXZyA9ICh7XG4gIGNoaWxkcmVuOiBBLFxuICBjbGFzc05hbWU6IGUsXG4gIGNoaWxkQ29udGFpbmVyQ2xhc3NOYW1lOiB0LFxuICBvblJlc2l6ZTogcixcbiAgc2V0UmVzaXplU3RhdGU6IG4sXG4gIC4uLnNcbn0pID0+IHtcbiAgY29uc3QgQiA9IFZBKG51bGwpLCBpID0gVkEobnVsbCksIGEgPSBWQShudWxsKSwgbyA9IFZBKG51bGwpLCB7IGhlaWdodDogYyB9ID0gaUIoYSwgciB8fCBudWxsKSwgW2wsIGddID0gZmUoITEpLCBVID0gQ0EoKTtcbiAgcWUoKCkgPT4ge1xuICAgIGlmICghbilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBRID0gYztcbiAgICByZXR1cm4gQi5jdXJyZW50ID09PSBudWxsICYmIChCLmN1cnJlbnQgPSBRKSwgUSAhPT0gQi5jdXJyZW50ICYmIChuID09IG51bGwgfHwgbighMCksIG8uY3VycmVudCAmJiB3aW5kb3cuY2xlYXJUaW1lb3V0KG8uY3VycmVudCksIG8uY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG4gPT0gbnVsbCB8fCBuKCExKTtcbiAgICB9LCAzMDApKSwgQi5jdXJyZW50ID0gUSwgKCkgPT4ge1xuICAgICAgby5jdXJyZW50ICYmIHdpbmRvdy5jbGVhclRpbWVvdXQoby5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbYywgbl0pO1xuICBjb25zdCB7IGlzTG9hZGluZzogdywgZXJyb3I6IGYsIGRhdGE6IEkgfSA9IEFycmF5LmlzQXJyYXkocy5yZXN1bHRzKSA/IHtcbiAgICBpc0xvYWRpbmc6IHMucmVzdWx0cy5zb21lKChRKSA9PiBRLmlzTG9hZGluZyksXG4gICAgZXJyb3I6IHMucmVzdWx0cy5zb21lKChRKSA9PiBRLmVycm9yKSxcbiAgICBkYXRhOiBzLnJlc3VsdHMuZmxhdE1hcCgoUSkgPT4gUS5kYXRhKS5maWx0ZXIoKFEpID0+IFEpXG4gIH0gOiBzLnJlc3VsdHMgfHwge30sIGggPSAhdyAmJiAhKEkgIT0gbnVsbCAmJiBJLmxlbmd0aCk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gQy5qc3goQy5GcmFnbWVudCwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIEMuanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoLWZ1bGwgcmVsYXRpdmUgZm9udC1lbWJlZGRhYmxlIHRleHQtc20gZmxleCBmbGV4LWNvbFwiLCBjaGlsZHJlbjogW1xuICAgIHMuZW5hYmxlRG93bmxvYWRBc0NTViB8fCBzLmVuYWJsZURvd25sb2FkQXNQTkcgPyAvKiBAX19QVVJFX18gKi8gQy5qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGAke3MudGl0bGUgPyBcIlwiIDogXCJoLVszMnB4XSB3LWZ1bGxcIn1gIH0pIDogbnVsbCxcbiAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goQUIsIHsgc2hvdzogdyB8fCBsIH0pLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaC1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2xcIiwgcmVmOiBpLCBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaXRlbXMtJHtVLmNoYXJ0cy50ZXh0SnVzdGlmeX1gLCBjaGlsZHJlbjogW1xuICAgICAgICAvKiBAX19QVVJFX18gKi8gQy5qc3goZUIsIHsgdGl0bGU6IHMudGl0bGUgfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeCh0QiwgeyBkZXNjcmlwdGlvbjogcy5kZXNjcmlwdGlvbiB9KVxuICAgICAgXSB9KSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeHMoXCJkaXZcIiwgeyByZWY6IGEsIGNsYXNzTmFtZTogTHIoXCJyZWxhdGl2ZSBncm93IGZsZXggZmxleC1jb2xcIiwgZSB8fCBcIlwiKSwgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBMcihcIi16LTAgZmxleCBmbGV4LWNvbFwiLCB0IHx8IFwiXCIpLFxuICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtjfXB4YCB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IGMgJiYgcy5yZXN1bHRzICYmIChmIHx8IGgpID8gLyogQF9fUFVSRV9fICovIEMuanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1lbWJlZGRhYmxlIHRleHQtc21cIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIEMuanN4KERnLCB7fSksXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3aGl0ZXNwYWNlLXByZS13cmFwIHAtNCBtYXgtdy1zbSB0ZXh0LXNtXCIsIGNoaWxkcmVuOiBmIHx8IFwiMCByZXN1bHRzXCIgfSlcbiAgICAgICAgICAgIF0gfSkgOiBjID8gQSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIHcgJiYgIShJICE9IG51bGwgJiYgSS5sZW5ndGgpICYmIC8qIEBfX1BVUkVfXyAqLyBDLmpzeChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgICAgaC1mdWxsXG4gICAgICAgICAgICAgICAgbGVmdC0wXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctaGlkZGVuXG4gICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgIHNrZWxldG9uLWJveFxuICAgICAgICAgICAgICAgIHRvcC0wXG4gICAgICAgICAgICAgICAgdy1mdWxsXG4gICAgICAgICAgICAgICAgei0xMFxuICAgICAgICAgICAgICAgIGJnLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYmFja2dyb3VuZHMtY29sb3JzLWhlYXZ5XVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICBdIH0pXG4gICAgXSB9KSxcbiAgICAhdyAmJiAocy5lbmFibGVEb3dubG9hZEFzQ1NWIHx8IHMuZW5hYmxlRG93bmxvYWRBc1BORykgPyAvKiBAX19QVVJFX18gKi8gQy5qc3goXG4gICAgICB4ZyxcbiAgICAgIHtcbiAgICAgICAgY3N2T3B0czoge1xuICAgICAgICAgIGNoYXJ0TmFtZTogcy50aXRsZSB8fCBcImNoYXJ0XCIsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICByZXN1bHRzOiBzLnJlc3VsdHMsXG4gICAgICAgICAgICBwcmV2UmVzdWx0czogcy5wcmV2UmVzdWx0c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWRBbGxGdW5jdGlvbjogcy5kb3dubG9hZEFsbEZ1bmN0aW9uLFxuICAgICAgICBlbmFibGVEb3dubG9hZEFzQ1NWOiBzLmVuYWJsZURvd25sb2FkQXNDU1YsXG4gICAgICAgIGVuYWJsZURvd25sb2FkQXNQTkc6IHMuZW5hYmxlRG93bmxvYWRBc1BORyxcbiAgICAgICAgcG5nT3B0czogeyBjaGFydE5hbWU6IHMudGl0bGUgfHwgXCJjaGFydFwiLCBlbGVtZW50OiBpLmN1cnJlbnQgfSxcbiAgICAgICAgcHJlcHBpbmdEb3dubG9hZDogbCxcbiAgICAgICAgc2V0UHJlcHBpbmdEb3dubG9hZDogZ1xuICAgICAgfVxuICAgICkgOiBudWxsXG4gIF0gfSkgfSk7XG59O1xuZXhwb3J0IHtcbiAgV2cgYXMgQyxcbiAgUGcgYXMgUyxcbiAgRGcgYXMgVyxcbiAgWGcgYXMgYSxcbiAgVmcgYXMgYixcbiAga2cgYXMgYyxcbiAgX2cgYXMgZCxcbiAgTmcgYXMgZSxcbiAgR2cgYXMgZixcbiAgckIgYXMgZyxcbiAgSmcgYXMgaFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lci1tb3AtSjdUOC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJyIiwibSIsImZlIiwiVkEiLCJxcyIsInpzIiwiQyIsIkNBIiwicWUiLCIkcyIsIkFCIiwiZUIiLCJ0QiIsIkxyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBLElBQUksS0FBSyxPQUFPLGFBQWEsTUFBTSxhQUFhLE9BQU8sU0FBUyxNQUFNLFNBQVMsT0FBTyxTQUFTLE1BQU0sU0FBUyxPQUFPLE9BQU8sTUFBTSxPQUFPLENBQUE7QUFDekksU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLEtBQUssRUFBRSxjQUFjLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRyxTQUFTLElBQUksRUFBRSxVQUFVO0FBQy9GO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDYixNQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRyxZQUFZLEVBQUcsUUFBTztBQUNsRSxNQUFJLElBQUksRUFBRTtBQUNWLE1BQUksT0FBTyxLQUFLLFlBQVk7QUFDMUIsUUFBSSxJQUFJLFNBQVNBLEtBQUk7QUFDbkIsYUFBTyxnQkFBZ0JBLEtBQUksUUFBUSxVQUFVLEdBQUcsV0FBVyxLQUFLLFdBQVcsSUFBSSxFQUFFLE1BQU0sTUFBTSxTQUFTO0FBQUEsSUFDeEc7QUFDQSxNQUFFLFlBQVksRUFBRTtBQUFBLEVBQ2xCLE1BQU8sS0FBSSxDQUFBO0FBQ1gsU0FBTyxPQUFPLGVBQWUsR0FBRyxjQUFjLEVBQUUsT0FBTyxLQUFFLENBQUUsR0FBRyxPQUFPLEtBQUssQ0FBQyxFQUFFLFFBQVEsU0FBU0EsSUFBRztBQUMvRixRQUFJLElBQUksT0FBTyx5QkFBeUIsR0FBR0EsRUFBQztBQUM1QyxXQUFPLGVBQWUsR0FBR0EsSUFBRyxFQUFFLE1BQU0sSUFBSTtBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBVztBQUNkLGVBQU8sRUFBRUEsRUFBQztBQUFBLE1BQ1o7QUFBQSxJQUNOLENBQUs7QUFBQSxFQUNILENBQUMsR0FBRztBQUNOO0FBQ0EsSUFBSSxJQUFJO0FBQ1IsU0FBUyxLQUFLO0FBQ1osTUFBSSxHQUFJLFFBQU87QUFDZixPQUFLO0FBQ0wsTUFBSSxJQUFJLHVCQUF1QixJQUFJLEtBQUssSUFBSSxtQkFBbUJBLEtBQUksY0FBYyxJQUFJLHNCQUFzQixJQUFJLGNBQWMsSUFBSSxlQUFlLElBQUksVUFBVSxJQUFJLE9BQU8sTUFBTSxZQUFZLE1BQU0sR0FBRyxXQUFXLFVBQVUsSUFBSSxJQUFJLE9BQU8sUUFBUSxZQUFZLFFBQVEsS0FBSyxXQUFXLFVBQVUsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLGFBQWEsRUFBQyxHQUFJLElBQUksT0FBTyxXQUFXLElBQUksRUFBRSxVQUFVLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksV0FBVztBQUM1WixXQUFPLEVBQUUsS0FBSyxJQUFHO0FBQUEsRUFDbkI7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHQyxJQUFHO0FBQ2xCLFFBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBSSxJQUFJLE9BQUksS0FBSztBQUNsRCxRQUFJLE9BQU8sS0FBSztBQUNkLFlBQU0sSUFBSSxVQUFVLENBQUM7QUFDdkIsUUFBSSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUVBLEVBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQ0EsR0FBRSxTQUFTLElBQUksYUFBYUEsSUFBRyxJQUFJLElBQUksRUFBRSxFQUFFQSxHQUFFLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssY0FBY0EsS0FBSSxDQUFDLENBQUNBLEdBQUUsV0FBVztBQUN4SSxhQUFTLEVBQUUsR0FBRztBQUNaLFVBQUksS0FBSyxHQUFHLEtBQUs7QUFDakIsYUFBTyxJQUFJLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLEdBQUc7QUFBQSxJQUNyRDtBQUNBLGFBQVMsR0FBRyxHQUFHO0FBQ2IsYUFBTyxJQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUk7QUFBQSxJQUNsRDtBQUNBLGFBQVMsR0FBRyxHQUFHO0FBQ2IsVUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUk7QUFDckMsYUFBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUFBLElBQzdCO0FBQ0EsYUFBUyxHQUFHLEdBQUc7QUFDYixVQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSTtBQUN6QixhQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTTtBQUFBLElBQ3pEO0FBQ0EsYUFBUyxLQUFLO0FBQ1osVUFBSSxJQUFJLEVBQUM7QUFDVCxVQUFJLEdBQUcsQ0FBQztBQUNOLGVBQU8sR0FBRyxDQUFDO0FBQ2IsVUFBSSxXQUFXLElBQUksR0FBRyxDQUFDLENBQUM7QUFBQSxJQUMxQjtBQUNBLGFBQVMsR0FBRyxHQUFHO0FBQ2IsYUFBTyxJQUFJLFFBQVEsTUFBTSxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxRQUFRO0FBQUEsSUFDdkQ7QUFDQSxhQUFTLEtBQUs7QUFDWixZQUFNLFVBQVUsYUFBYSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUk7QUFBQSxJQUMxRDtBQUNBLGFBQVMsS0FBSztBQUNaLGFBQU8sTUFBTSxTQUFTLElBQUksR0FBRyxFQUFDLENBQUU7QUFBQSxJQUNsQztBQUNBLGFBQVMsS0FBSztBQUNaLFVBQUksSUFBSSxFQUFDLEdBQUksS0FBSyxHQUFHLENBQUM7QUFDdEIsVUFBSSxJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJO0FBQ3RDLFlBQUksTUFBTTtBQUNSLGlCQUFPLEdBQUcsQ0FBQztBQUNiLFlBQUk7QUFDRixpQkFBTyxJQUFJLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQUEsTUFDckM7QUFDQSxhQUFPLE1BQU0sV0FBVyxJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUk7QUFBQSxJQUNsRDtBQUNBLFdBQU8sR0FBRyxTQUFTLElBQUksR0FBRyxRQUFRLElBQUk7QUFBQSxFQUN4QztBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUdBLElBQUc7QUFDbEIsUUFBSSxJQUFJLE1BQUksSUFBSTtBQUNoQixRQUFJLE9BQU8sS0FBSztBQUNkLFlBQU0sSUFBSSxVQUFVLENBQUM7QUFDdkIsV0FBTyxFQUFFQSxFQUFDLE1BQU0sSUFBSSxhQUFhQSxLQUFJLENBQUMsQ0FBQ0EsR0FBRSxVQUFVLEdBQUcsSUFBSSxjQUFjQSxLQUFJLENBQUMsQ0FBQ0EsR0FBRSxXQUFXLElBQUksRUFBRSxHQUFHLEdBQUc7QUFBQSxNQUNyRyxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsSUFDaEIsQ0FBSztBQUFBLEVBQ0g7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFFBQUksSUFBSSxPQUFPO0FBQ2YsV0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFlBQVksS0FBSztBQUFBLEVBQ3ZDO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sS0FBSztBQUFBLEVBQzVCO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLE9BQU8sS0FBSyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFBQSxFQUN0RDtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osUUFBSSxPQUFPLEtBQUs7QUFDZCxhQUFPO0FBQ1QsUUFBSSxFQUFFLENBQUM7QUFDTCxhQUFPO0FBQ1QsUUFBSSxFQUFFLENBQUMsR0FBRztBQUNSLFVBQUksSUFBSSxPQUFPLEVBQUUsV0FBVyxhQUFhLEVBQUUsUUFBTyxJQUFLO0FBQ3ZELFVBQUksRUFBRSxDQUFDLElBQUksSUFBSSxLQUFLO0FBQUEsSUFDdEI7QUFDQSxRQUFJLE9BQU8sS0FBSztBQUNkLGFBQU8sTUFBTSxJQUFJLElBQUksQ0FBQztBQUN4QixRQUFJLEVBQUUsUUFBUUQsSUFBRyxFQUFFO0FBQ25CLFFBQUlDLEtBQUksRUFBRSxLQUFLLENBQUM7QUFDaEIsV0FBT0EsTUFBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBR0EsS0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztBQUFBLEVBQ3RFO0FBQ0EsU0FBTyxLQUFLLEdBQUc7QUFDakI7QUFDQSxJQUFJLEtBQUssR0FBRTtBQUNYLE1BQU0sS0FBcUIsbUJBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPO0FBQ3hELFFBQU0sQ0FBQ0QsSUFBRyxDQUFDLElBQUlFLHNCQUFHO0FBQUEsSUFDaEIsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEVBQ1osQ0FBRyxHQUFHLElBQUlDLG9CQUFHLElBQUksR0FBRyxJQUFJQSxvQkFBRyxDQUFDLEdBQUcsSUFBSUMsYUFBQUEsWUFBRyxDQUFDLE1BQU07QUFDekMsUUFBSSxHQUFHLEdBQUcsR0FBRztBQUNiLFNBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxRQUFRLEVBQUUsYUFBYTtBQUN2QyxZQUFNLElBQUk7QUFBQSxRQUNSLFFBQVEsSUFBSSxFQUFFLENBQUMsTUFBTSxPQUFPLFNBQVMsRUFBRSxZQUFZO0FBQUEsUUFDbkQsU0FBUyxJQUFJLEVBQUUsQ0FBQyxNQUFNLE9BQU8sU0FBUyxFQUFFLFlBQVk7QUFBQSxNQUM1RDtBQUNNLFFBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQzlDO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ04sU0FBT0MsYUFBQUEsZ0JBQUcsTUFBTTtBQUNkLFVBQU0sSUFBSSxLQUFLLGFBQWEsSUFBSSxFQUFFLFVBQVU7QUFDNUMsUUFBSTtBQUNGLGFBQU8sRUFBRSxVQUFVLElBQUksZUFBZSxHQUFHLElBQUksS0FBSyxPQUFPLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQzdHLFlBQUk7QUFDSixTQUFDLElBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxVQUFVLENBQUM7QUFBQSxNQUMxQztBQUFBLEVBQ0osR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLE9BQU8sU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHTDtBQUM1QyxHQUFHLEtBQUssQ0FBQyxNQUFNO0FBQ2IsUUFBTSxFQUFFLFdBQVcsR0FBRyxRQUFRLEdBQUcsT0FBT0EsR0FBQyxJQUFLLEdBQUcsSUFBSSxLQUFLLE1BQU0sSUFBSUEsTUFBSztBQUN6RSxTQUF1Qk0sb0JBQUU7QUFBQSxJQUN2QjtBQUFBLElBQ0E7QUFBQSxNQUNFLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULFNBQVMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ3RCLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQTBCQSxvQkFBRTtBQUFBLFFBQzFCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsR0FBRztBQUFBLFVBQ0gsUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ3BCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQ0EsR0FBRyxLQUFLLENBQUMsTUFBTTtBQUNiLFFBQU0sRUFBRSxXQUFXLEdBQUcsUUFBUSxHQUFHLE9BQU9OLEdBQUMsSUFBSztBQUM5Q08sV0FBRTtBQUNGLFFBQU0sSUFBSSxLQUFLLE1BQU0sSUFBSVAsTUFBSztBQUM5QixTQUF1Qk0sb0JBQUU7QUFBQSxJQUN2QjtBQUFBLElBQ0E7QUFBQSxNQUNFLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUFBLE1BQ3RCLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxRQUNRQSxvQkFBRTtBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFlBQ0UsVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDQTtBQUFBLFFBQ3dCQSxvQkFBRTtBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFlBQ0UsVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDQTtBQUFBLFFBQ3dCQSxvQkFBRTtBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFlBQ0UsVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDQTtBQUFBLFFBQ3dCQSxvQkFBRTtBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFlBQ0UsVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsR0FBRztBQUFBLFlBQ0gsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUNBLEdBQUcsS0FBSyxDQUFDLE1BQU07QUFDYixRQUFNLElBQUlDLFNBQUU7QUFDWixTQUF1QkQsb0JBQUUsS0FBSyxPQUFPLEVBQUUsT0FBTyxLQUFLLFFBQVEsTUFBTSxTQUFTLFlBQVksTUFBTSxRQUFRLE9BQU8sOEJBQThCLFVBQVU7QUFBQSxJQUNqSUEsb0JBQUU7QUFBQSxNQUNoQjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEdBQUc7QUFBQSxRQUNILE1BQU0sRUFBRSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxJQUNBO0FBQUEsSUFDb0JBLG9CQUFFO0FBQUEsTUFDaEI7QUFBQSxNQUNBO0FBQUEsUUFDRSxHQUFHO0FBQUEsUUFDSCxNQUFNLEVBQUUsSUFBSTtBQUFBLE1BQ3BCO0FBQUEsSUFDQTtBQUFBLElBQ29CQSxvQkFBRTtBQUFBLE1BQ2hCO0FBQUEsTUFDQTtBQUFBLFFBQ0UsR0FBRztBQUFBLFFBQ0gsTUFBTSxFQUFFLElBQUk7QUFBQSxNQUNwQjtBQUFBLElBQ0E7QUFBQSxFQUNBLEdBQUs7QUFDTDtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0EsSUFBSSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3RCLFNBQU8sS0FBSyxPQUFPLGtCQUFrQixFQUFFLFdBQVcsQ0FBQSxFQUFFLGFBQWMsU0FBUyxTQUFTLEdBQUdOLElBQUc7QUFDeEYsTUFBRSxZQUFZQTtBQUFBLEVBQ2hCLEtBQUssU0FBUyxHQUFHQSxJQUFHO0FBQ2xCLGFBQVMsS0FBS0EsR0FBRyxRQUFPLFVBQVUsZUFBZSxLQUFLQSxJQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSUEsR0FBRSxDQUFDO0FBQUEsRUFDNUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNaO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUNoQixNQUFJLE9BQU8sS0FBSyxjQUFjLE1BQU07QUFDbEMsVUFBTSxJQUFJLFVBQVUseUJBQXlCLE9BQU8sQ0FBQyxJQUFJLCtCQUErQjtBQUMxRixLQUFHLEdBQUcsQ0FBQztBQUNQLFdBQVMsSUFBSTtBQUNYLFNBQUssY0FBYztBQUFBLEVBQ3JCO0FBQ0EsSUFBRSxZQUFZLE1BQU0sT0FBTyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsSUFBSSxFQUFDO0FBQ2pGO0FBQ0EsSUFBSSxLQUFLLFdBQVc7QUFDbEIsU0FBTyxLQUFLLE9BQU8sVUFBVSxTQUFTLEdBQUc7QUFDdkMsYUFBUyxHQUFHQSxLQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVFBLEtBQUksR0FBR0EsTUFBSztBQUNuRCxVQUFJLFVBQVVBLEVBQUM7QUFDZixlQUFTLEtBQUssRUFBRyxRQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUFBLElBQzVFO0FBQ0EsV0FBTztBQUFBLEVBQ1QsR0FBRyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQzdCO0FBQ0EsU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxJQUFHO0FBQ3JCLFdBQVMsRUFBRSxHQUFHO0FBQ1osV0FBTyxhQUFhLElBQUksSUFBSSxJQUFJLEVBQUUsU0FBUyxHQUFHO0FBQzVDLFFBQUUsQ0FBQztBQUFBLElBQ0wsQ0FBQztBQUFBLEVBQ0g7QUFDQSxTQUFPLEtBQUssTUFBTSxJQUFJLFVBQVUsU0FBUyxHQUFHLEdBQUc7QUFDN0MsYUFBUyxFQUFFLEdBQUc7QUFDWixVQUFJO0FBQ0YsVUFBRUEsR0FBRSxLQUFLLENBQUMsQ0FBQztBQUFBLE1BQ2IsU0FBUyxHQUFHO0FBQ1YsVUFBRSxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0Y7QUFDQSxhQUFTLEVBQUUsR0FBRztBQUNaLFVBQUk7QUFDRixVQUFFQSxHQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFDZCxTQUFTLEdBQUc7QUFDVixVQUFFLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUNBLGFBQVMsRUFBRSxHQUFHO0FBQ1osUUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQzVDO0FBQ0EsT0FBR0EsS0FBSUEsR0FBRSxNQUFNLEdBQUcsQ0FBQSxDQUFFLEdBQUcsTUFBTTtBQUFBLEVBQy9CLENBQUM7QUFDSDtBQUNBLFNBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixNQUFJLElBQUksRUFBRSxPQUFPLEdBQUcsTUFBTSxXQUFXO0FBQ25DLFFBQUksRUFBRSxDQUFDLElBQUksRUFBRyxPQUFNLEVBQUUsQ0FBQztBQUN2QixXQUFPLEVBQUUsQ0FBQztBQUFBLEVBQ1osR0FBRyxNQUFNLENBQUEsR0FBSSxLQUFLLENBQUEsRUFBRSxHQUFJQSxJQUFHLEdBQUcsR0FBRztBQUNqQyxTQUFPLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBQyxHQUFJLE9BQU8sVUFBVSxlQUFlLEVBQUUsT0FBTyxRQUFRLElBQUksV0FBVztBQUNwSCxXQUFPO0FBQUEsRUFDVCxJQUFJO0FBQ0osV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLFNBQVMsR0FBRztBQUNqQixhQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLElBQ2pCO0FBQUEsRUFDRjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osUUFBSUEsR0FBRyxPQUFNLElBQUksVUFBVSxpQ0FBaUM7QUFDNUQsV0FBTyxJQUFLLEtBQUk7QUFDZCxVQUFJQSxLQUFJLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQU0sUUFBTztBQUMvSSxjQUFRLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFDO0FBQUEsUUFDakQsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNILGNBQUk7QUFDSjtBQUFBLFFBQ0YsS0FBSztBQUNILGlCQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxNQUFFO0FBQUEsUUFDM0MsS0FBSztBQUNILFlBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzNCO0FBQUEsUUFDRixLQUFLO0FBQ0gsY0FBSSxFQUFFLElBQUksSUFBRyxHQUFJLEVBQUUsS0FBSyxJQUFHO0FBQzNCO0FBQUEsUUFDRjtBQUNFLGNBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxNQUFNLElBQUk7QUFDcEYsZ0JBQUk7QUFDSjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLEVBQUUsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJO0FBQ3BELGNBQUUsUUFBUSxFQUFFLENBQUM7QUFDYjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHO0FBQ2hDLGNBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJO0FBQ3BCO0FBQUEsVUFDRjtBQUNBLGNBQUksS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUc7QUFDdkIsY0FBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUM7QUFDNUI7QUFBQSxVQUNGO0FBQ0EsWUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLElBQUc7QUFDL0I7QUFBQSxNQUNWO0FBQ00sVUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFDakIsU0FBUyxHQUFHO0FBQ1YsVUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUk7QUFBQSxJQUNsQixVQUFDO0FBQ0MsTUFBQUEsS0FBSSxJQUFJO0FBQUEsSUFDVjtBQUNBLFFBQUksRUFBRSxDQUFDLElBQUksRUFBRyxPQUFNLEVBQUUsQ0FBQztBQUN2QixXQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxRQUFRLE1BQU0sS0FBRTtBQUFBLEVBQ2hEO0FBQ0Y7QUFDQSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxVQUFVLFdBQVcsRUFBRyxVQUFTQSxLQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsR0FBR0EsS0FBSSxHQUFHQTtBQUNsRSxLQUFDLEtBQUssRUFBRUEsTUFBSyxRQUFRLE1BQU0sSUFBSSxNQUFNLFVBQVUsTUFBTSxLQUFLLEdBQUcsR0FBR0EsRUFBQyxJQUFJLEVBQUVBLEVBQUMsSUFBSSxFQUFFQSxFQUFDO0FBQ2pGLFNBQU8sRUFBRSxPQUFPLEtBQUssQ0FBQztBQUN4QjtBQUNBLElBQUk7QUFBQTtBQUFBLEdBRUYsV0FBVztBQUNULGFBQVMsRUFBRSxHQUFHLEdBQUdBLElBQUcsR0FBRztBQUNyQixXQUFLLE9BQU8sR0FBRyxLQUFLLE1BQU0sR0FBRyxLQUFLLFFBQVFBLElBQUcsS0FBSyxTQUFTO0FBQUEsSUFDN0Q7QUFDQSxXQUFPLEVBQUUsVUFBVSxNQUFNLFNBQVMsR0FBRyxHQUFHQSxJQUFHLEdBQUc7QUFDNUMsYUFBTyxJQUFJLEVBQUUsS0FBSyxPQUFPLEdBQUcsS0FBSyxNQUFNLEdBQUcsS0FBSyxRQUFRQSxJQUFHLEtBQUssU0FBUyxDQUFDO0FBQUEsSUFDM0UsR0FBRyxFQUFFLGlCQUFpQixTQUFTLEdBQUcsR0FBRztBQUNuQyxhQUFPLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU07QUFBQSxJQUMxRixHQUFHLEVBQUUsa0JBQWtCLFNBQVMsR0FBRyxHQUFHO0FBQ3BDLFVBQUlBLEtBQUksTUFBTSxLQUFLLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRztBQUNyQyxlQUFPLEVBQUUsVUFBVTtBQUFBLE1BQ3JCLENBQUM7QUFDRCxhQUFPQSxLQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPLEVBQUUsYUFBYSxNQUFNQSxHQUFFLE1BQU0sRUFBRSxhQUFhLEtBQUtBLEdBQUUsT0FBT0EsR0FBRSxNQUFNLElBQUksRUFBRTtBQUFBLElBQ3BHLEdBQUcsRUFBRSxRQUFRLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUNsQyxHQUFDO0FBQUEsR0FDQSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLFNBQU8sR0FBRyxlQUFlLEdBQUcsRUFBRSxzQkFBcUIsQ0FBRTtBQUN2RCxHQUFHLEtBQUssU0FBUyxHQUFHO0FBQ2xCLE1BQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFO0FBQ3RCLE1BQUksQ0FBQyxLQUFLLENBQUM7QUFDVCxVQUFNLElBQUksTUFBTSw2QkFBNkI7QUFDL0MsTUFBSUEsS0FBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsR0FBRyxLQUFLLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRSxjQUFjLEVBQUUsWUFBWSxHQUFHLEtBQUssSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEdBQUcsS0FBSyxJQUFJLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztBQUNuUixTQUFPLElBQUksR0FBRyxHQUFHLEdBQUdBLElBQUcsQ0FBQztBQUMxQixHQUFHLEtBQUssU0FBUyxHQUFHO0FBQ2xCLFdBQVMsSUFBSSxDQUFBLEdBQUksSUFBSSxHQUFHQSxLQUFJLEVBQUUsUUFBUSxJQUFJQSxNQUFLO0FBQzdDLFFBQUksSUFBSSxFQUFFLFdBQVcsR0FBRztBQUN4QixRQUFJLEtBQUssU0FBUyxLQUFLLFNBQVMsSUFBSUEsSUFBRztBQUNyQyxVQUFJLElBQUksRUFBRSxXQUFXLEdBQUc7QUFDeEIsT0FBQyxJQUFJLFdBQVcsUUFBUSxFQUFFLE9BQU8sSUFBSSxTQUFTLE9BQU8sSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHO0FBQUEsSUFDeEY7QUFDRSxRQUFFLEtBQUssQ0FBQztBQUFBLEVBQ1o7QUFDQSxTQUFPO0FBQ1QsR0FBRyxJQUFJLFdBQVc7QUFDaEIsV0FBUyxJQUFJLENBQUEsR0FBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVE7QUFDNUMsTUFBRSxDQUFDLElBQUksVUFBVSxDQUFDO0FBQ3BCLE1BQUksT0FBTztBQUNULFdBQU8sT0FBTyxjQUFjLE1BQU0sUUFBUSxDQUFDO0FBQzdDLE1BQUksSUFBSSxFQUFFO0FBQ1YsTUFBSSxDQUFDO0FBQ0gsV0FBTztBQUNULFdBQVNBLEtBQUksQ0FBQSxHQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUs7QUFDMUMsUUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLFNBQUssUUFBUUEsR0FBRSxLQUFLLENBQUMsS0FBSyxLQUFLLE9BQU9BLEdBQUUsTUFBTSxLQUFLLE1BQU0sT0FBTyxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLQSxHQUFFLFNBQVMsV0FBVyxLQUFLLE9BQU8sYUFBYSxNQUFNLFFBQVFBLEVBQUMsR0FBR0EsR0FBRSxTQUFTO0FBQUEsRUFDbEw7QUFDQSxTQUFPO0FBQ1QsR0FBRyxLQUFLLG9FQUFvRSxLQUFLLE9BQU8sYUFBYSxNQUFNLENBQUEsSUFBSyxJQUFJLFdBQVcsR0FBRztBQUNsSSxTQUFTLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUTtBQUMvQixLQUFHLEdBQUcsV0FBVyxFQUFFLENBQUMsSUFBSTtBQUMxQixJQUFJLEtBQUssb0VBQW9FLEtBQUssT0FBTyxhQUFhLE1BQU0sQ0FBQSxJQUFLLElBQUksV0FBVyxHQUFHO0FBQ25JLFNBQVMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRO0FBQy9CLEtBQUcsR0FBRyxXQUFXLEVBQUUsQ0FBQyxJQUFJO0FBQzFCLElBQUksS0FBSyxTQUFTLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEVBQUUsU0FBUyxNQUFNLElBQUksRUFBRSxRQUFRQSxJQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMxRCxJQUFFLEVBQUUsU0FBUyxDQUFDLE1BQU0sUUFBUSxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTSxPQUFPO0FBQzVELE1BQUksSUFBSSxPQUFPLGNBQWMsT0FBTyxPQUFPLGFBQWEsT0FBTyxPQUFPLFdBQVcsVUFBVSxRQUFRLE1BQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDO0FBQ3ZMLE9BQUtBLEtBQUksR0FBR0EsS0FBSSxHQUFHQSxNQUFLO0FBQ3RCLFFBQUksR0FBRyxFQUFFLFdBQVdBLEVBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLFdBQVdBLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsV0FBV0EsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxXQUFXQSxLQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUk7QUFDek0sU0FBTztBQUNULEdBQUcsS0FBSyxTQUFTLEdBQUc7QUFDbEIsV0FBUyxJQUFJLEVBQUUsUUFBUSxJQUFJLENBQUEsR0FBSUEsS0FBSSxHQUFHQSxLQUFJLEdBQUdBLE1BQUs7QUFDaEQsTUFBRSxLQUFLLEVBQUVBLEtBQUksQ0FBQyxLQUFLLElBQUksRUFBRUEsRUFBQyxDQUFDO0FBQzdCLFNBQU87QUFDVCxHQUFHLEtBQUssU0FBUyxHQUFHO0FBQ2xCLFdBQVMsSUFBSSxFQUFFLFFBQVEsSUFBSSxDQUFBLEdBQUlBLEtBQUksR0FBR0EsS0FBSSxHQUFHQSxNQUFLO0FBQ2hELE1BQUUsS0FBSyxFQUFFQSxLQUFJLENBQUMsS0FBSyxLQUFLLEVBQUVBLEtBQUksQ0FBQyxLQUFLLEtBQUssRUFBRUEsS0FBSSxDQUFDLEtBQUssSUFBSSxFQUFFQSxFQUFDLENBQUM7QUFDL0QsU0FBTztBQUNULEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDeE4sU0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEYsR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDeEIsU0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdEYsR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3JCLE1BQUksSUFBSSxHQUFHLENBQUMsR0FBR0EsS0FBSSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FB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QUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQztBQUM1RCxHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHLEtBQUs7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUVSLEdBQUcsS0FBSztBQUFBLEVBQ04sTUFBTTtBQUFBO0FBRVIsR0FBRyxLQUFLO0FBQUEsRUFDTixNQUFNO0FBQUE7QUFFUixHQUFHO0FBQUE7QUFBQSxHQUVELFdBQVc7QUFDVCxhQUFTLElBQUk7QUFDWCxXQUFLLFNBQVMsQ0FBQTtBQUFBLElBQ2hCO0FBQ0EsV0FBTyxFQUFFLFVBQVUsUUFBUSxTQUFTLEdBQUc7QUFDckMsV0FBSyxTQUFT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TztBQUNUO0FBQ0EsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ25CLFNBQU8sSUFBSSxNQUFNLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLElBQUk7QUFDOUk7QUFDQSxJQUFJLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDdEIsTUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUdBLEtBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBS0EsR0FBRSxTQUFTLEtBQUssR0FBR0EsR0FBRSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUdBLEVBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsTUFBTSxHQUFHLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtBQUN4TyxNQUFJLE1BQU07QUFDUixXQUFPLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQztBQUN4QyxNQUFJLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztBQUMvSCxTQUFPLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQztBQUN4QyxHQUFHLEtBQUs7QUFBQSxFQUNOLEtB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SUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJQSxJQUFHLENBQUMsR0FBRyxHQUFHLElBQUlBLElBQUcsSUFBSSxDQUFDLENBQUM7QUFBQSxlQUNoRSxFQUFFLFVBQVUsR0FBRztBQUN0QixZQUFJLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUlBLEVBQUMsQ0FBQyxHQUFHLElBQUksR0FBR0EsSUFBRyxHQUFHLEdBQUcsR0FBRyxJQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUNsSSxZQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJO0FBQUEsTUFDdEM7QUFDQTtBQUFBLElBQ0YsS0FBSztBQUNILFFBQUUsVUFBVSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSUEsRUFBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSUEsRUFBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7QUFDdE07QUFBQSxJQUNGLEtBQUs7QUFDSCxVQUFJLEVBQUUsVUFBVTtBQUNkLFlBQUksSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJQSxJQUFHLENBQUMsR0FBRyxHQUFHLElBQUlBLElBQUcsSUFBSSxDQUFDLENBQUM7QUFBQSxlQUNoRSxF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QUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxLQUFLO0FBQ0gsZUFBTztBQUFBLE1BQ1QsS0FBSztBQUNILGVBQU87QUFBQSxNQUNULEtBQUs7QUFDSCxlQUFPO0FBQUEsTUFDVCxL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QUFDLENBQUM7QUFDN0IsU0FBTztBQUNULEdBQUcsS0FBSyxTQUFTLEdBQUc7QUFDbEIsV0FBUyxJQUFJLEVBQUUsUUFBUSxJQUFJLENBQUEsR0FBSUEsS0FBSSxHQUFHQSxLQUFJLEdBQUdBLE1BQUs7QUFDaEQsTUFBRSxLQUFLLEVBQUVBLEtBQUksQ0FBQyxLQUFLLEtBQUssRUFBRUEsS0FBSSxDQUFDLEtBQUssS0FBSyxFQUFFQSxLQUFJLENBQUMsS0FBSyxJQUFJLEVBQUVBLEVBQUMsQ0FBQztBQUMvRCxTQUFPO0FBQ1QsR0FBRyxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxHQUFHLEtBQUssU0FBUyxHQUFHLEdBQUcsR0FBRztBQUN4TixTQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN0RixHQUFHLEtBQUssU0FBUyxHQUFHLEdBQUcsR0FBRztBQUN4QixTQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN0RixHQUFHLEtBQUssU0FBUyxHQUFHLEdBQUc7QUFDckIsTUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxLQUFJLE1BQU0sUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLE1BQU0sUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFH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Q0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUNBLEdBQUcsS0FBSztBQUFBLEVBQ04sVUFBVTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDRSxRQUFRO0FBQUEsSUFDTjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFDQSxHQUFHLEtBQUs7QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElB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LEtBQUksQ0FBQyxHQUFHLEtBQUssaUNBQWlDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLElBQUksR0FBR0EsR0FBRSxNQUFNLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxHQUFHLEVBQUUsV0FBVyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLElBQUksR0FBR0EsR0FBRSxNQUFNQSxHQUFFLFNBQVNDLEtBQUksQ0FBQyxHQUFHLEtBQUssOEJBQThCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLElBQUksSUFBSSxHQUFHQSxHQUFFLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsUUFBUSxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPLElBQUksSUFBSSxHQUFHQSxHQUFFLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLCtCQUErQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxHQUFHQSxHQUFFLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsU0FBUyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPQSxHQUFFLFFBQVEsSUFBSSxJQUFJLEdBQUdBLEdBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssa0NBQWtDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPLEdBQUdBLEdBQUUsTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxJQUFJLEdBQUcsRUFBRSxZQUFZLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU9BLEdBQUUsUUFBUSxJQUFJLElBQUksR0FBR0EsR0FBRSxNQUFNQSxHQUFFLFNBQVNDLEtBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxpQ0FBaUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU8sSUFBSSxJQUFJLEdBQUdBLEdBQUUsTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxJQUFJLEdBQUcsRUFBRSxXQUFXLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU8sSUFBSSxJQUFJLEdBQUdBLEdBQUUsTUFBTUEsR0FBRSxTQUFTQyxLQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssc0JBQXNCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLElBQUksR0FBR0EsR0FBRSxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFLFFBQVEsSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxJQUFJLEdBQUdBLEdBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxLQUFLLHVCQUF1QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxHQUFHQSxHQUFFLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEVBQUUsU0FBUyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPQSxHQUFFLFFBQVEsSUFBSSxHQUFHQSxHQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsS0FBSywwQkFBMEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFQSxHQUFFLE9BQU8sR0FBR0EsR0FBRSxNQUFNLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxHQUFHLEVBQUUsWUFBWSxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPQSxHQUFFLFFBQVEsSUFBSSxHQUFHQSxHQUFFLE1BQU1BLEdBQUUsU0FBU0MsS0FBSSxDQUFDLEdBQUcsS0FBSyx5QkFBeUIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU8sSUFBSSxHQUFHQSxHQUFFLE1BQU0sR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJQyxLQUFJLEdBQUcsRUFBRSxXQUFXLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU8sSUFBSSxHQUFHQSxHQUFFLE1BQU1BLEdBQUUsU0FBU0MsS0FBSSxDQUFDLEdBQUcsS0FBSyxtQkFBbUIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFRCxHQUFFLE1BQU1BLEdBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxRQUFRLElBQUksSUFBSSxFQUFFQSxHQUFFLE1BQU1BLEdBQUUsR0FBRyxHQUFHLEtBQUssb0JBQW9CLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPLEdBQUdBLEdBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxTQUFTLElBQUksSUFBSSxFQUFFQSxHQUFFLE9BQU9BLEdBQUUsT0FBT0EsR0FBRSxHQUFHLEdBQUcsS0FBSyx1QkFBdUIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFQSxHQUFFLE9BQU8sR0FBR0EsR0FBRSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsWUFBWSxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPQSxHQUFFLE9BQU9BLEdBQUUsTUFBTUEsR0FBRSxNQUFNLEdBQUcsS0FBSyxzQkFBc0IsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFQSxHQUFFLE1BQU1BLEdBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSSxJQUFJLEVBQUVBLEdBQUUsTUFBTUEsR0FBRSxNQUFNQSxHQUFFLE1BQU0sR0FBRyxLQUFLLG9CQUFvQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxHQUFHQSxHQUFFLE1BQU0sR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxHQUFHQSxHQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUsscUJBQXFCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPLEtBQUssSUFBSSxHQUFHQSxHQUFFLFFBQVEsQ0FBQyxHQUFHQSxHQUFFLE1BQU0sR0FBRyxJQUFJQSxHQUFFLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxJQUFJLElBQUksRUFBRUEsR0FBRSxPQUFPQSxHQUFFLFFBQVEsR0FBR0EsR0FBRSxNQUFNLENBQUMsR0FBRyxLQUFLLHdCQUF3QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxLQUFLLElBQUksR0FBR0EsR0FBRSxRQUFRLENBQUMsR0FBR0EsR0FBRSxNQUFNLEtBQUssSUFBSSxHQUFHQSxHQUFFLFNBQVNDLEVBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJQSxFQUFDLEdBQUcsRUFBRSxZQUFZLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU9BLEdBQUUsUUFBUSxHQUFHQSxHQUFFLE1BQU1BLEdBQUUsU0FBU0MsRUFBQyxHQUFHLEtBQUssdUJBQXVCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLEdBQUdBLEdBQUUsTUFBTSxLQUFLLElBQUksR0FBR0EsR0FBRSxTQUFTQyxFQUFDLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSUEsRUFBQyxHQUFHLEVBQUUsV0FBVyxJQUFJLElBQUksRUFBRUQsR0FBRSxPQUFPLEdBQUdBLEdBQUUsTUFBTUEsR0FBRSxTQUFTQyxFQUFDLEdBQUcsS0FBSyxvQkFBb0IsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFRCxHQUFFLE9BQU8sSUFBSSxHQUFHQSxHQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxJQUFJLEdBQUdBLEdBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxLQUFLLHFCQUFxQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUVBLEdBQUUsT0FBTyxLQUFLLElBQUks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SUFBSSxLQUFLLElBQUksTUFBTUMsS0FBSSxFQUFFLElBQUksY0FBYyxHQUFHLFFBQVEsR0FBRyxFQUFFLGFBQWEsR0FBR0EsSUFBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBR0QsSUFBRztBQUFBLHdCQUMxSjtBQUFBLHdCQUNBO0FBQUEsd0JBQ0E7QUFBQSxzQkFDeEIsQ0FBdUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsV0FBVyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLEtBQUssTUFBTSxLQUFLLEVBQUUsSUFBSSxxQkFBcUIsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLFFBQVEsU0FBUyxJQUFJO0FBQzlULCtCQUFPLEdBQUcsYUFBYSxHQUFHLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztBQUFBLHNCQUM3QyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksWUFBWSxJQUFJLE1BQU0sTUFBTSxLQUFLLEVBQUUsT0FBTyxPQUFPLE1BQU0sRUFBRSxPQUFPLE9BQU8sS0FBSyxFQUFFLE9BQU8sTUFBTSxNQUFNLEVBQUUsT0FBTyxRQUFRLEtBQUssS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxRQUFRLEVBQUUsSUFBSSxVQUFVLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxRQUFPLEtBQU0sRUFBRSxJQUFJLEtBQUksS0FBTSxHQUFHLFFBQVE7QUFBQSxvQkFDelcsS0FBSztBQUNILDZCQUFPQSxNQUFLO0FBQUEsd0JBQ1Y7QUFBQTtBQUFBLHNCQUV4QjtBQUFBLGtCQUNBO0FBQUEsZ0JBQ2dCLENBQUM7QUFBQSxjQUNILEdBQUcsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxnQkFBZ0IsTUFBTSxDQUFDLEVBQUUsUUFBTyxHQUFJLEVBQUUsUUFBUTtBQUFBLFlBQ2pGLEtBQUs7QUFDSCxxQkFBTyxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQUEsWUFDckQsS0FBSztBQUNILGdCQUFFLEtBQUksR0FBSSxFQUFFLFFBQVE7QUFBQSxZQUN0QixLQUFLO0FBQ0gscUJBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUFBLFlBQ25CLEtBQUs7QUFDSCxxQkFBTztBQUFBLGdCQUNMO0FBQUE7QUFBQSxjQUVoQjtBQUFBLFVBQ0E7QUFBQSxRQUNRLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxVQUFVLG9CQUFvQixTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNuRCxhQUFPLEVBQUUsTUFBTSxRQUFRLFFBQVEsV0FBVztBQUN4QyxlQUFPLEVBQUUsTUFBTSxTQUFTLEdBQUc7QUFDekIsaUJBQU8sS0FBSyxLQUFLLEdBQUcsR0FBR0EsRUFBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLFlBQVksRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLFFBQVE7QUFBQSxZQUN0RTtBQUFBO0FBQUEsVUFFWjtBQUFBLFFBQ1EsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLFVBQVUscUJBQXFCLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDdkQsYUFBTyxFQUFFLE1BQU0sUUFBUSxRQUFRLFdBQVc7QUFDeEMsWUFBSSxHQUFHO0FBQ1AsZUFBTyxFQUFFLE1BQU0sU0FBUyxHQUFHO0FBQ3pCLGtCQUFRLEVBQUUsT0FBSztBQUFBLFlBQ2IsS0FBSztBQUNILHFCQUFPQSxLQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssa0JBQWtCLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUFBLFlBQzdELEtBQUs7QUFDSCxxQkFBTyxFQUFFLFFBQVE7QUFBQSxnQkFDZjtBQUFBO0FBQUEsY0FFaEI7QUFBQSxZQUNZLEtBQUs7QUFDSCxxQkFBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksWUFBWSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSSxHQUFJLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFJLEdBQUk7QUFBQSxnQkFDMUg7QUFBQTtBQUFBLGNBRWhCO0FBQUEsVUFDQTtBQUFBLFFBQ1EsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLFVBQVUsaUNBQWlDLFNBQVMsR0FBRztBQUMxRCxhQUFPLEVBQUUsTUFBTSxRQUFRLFFBQVEsV0FBVztBQUN4QyxZQUFJQSxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUNoQyxlQUFPLEVBQUUsTUFBTSxTQUFTLEdBQUc7QUFDekIsa0JBQVEsRUFBRSxPQUFLO0FBQUEsWUFDYixLQUFLO0FBQ0gscUJBQU8sS0FBSyxhQUFhLEVBQUU7QUFBQSxnQkFDekI7QUFBQTtBQUFBLGNBRWhCLENBQWUsR0FBR0EsS0FBSSxFQUFFLFVBQVUsUUFBUSxJQUFJLENBQUMsR0FBR0EsR0FBRSxlQUFlLEtBQUtBLEdBQUUsZ0JBQWdCLFFBQVEsSUFBSTtBQUFBLGdCQUN0RixFQUFFLE9BQU9BLEdBQUUsZ0JBQWdCLE9BQU9BLEdBQUUsZ0JBQWdCLE9BQU9BLEdBQUUsZUFBYztBQUFBLGdCQUMzRSxFQUFFLE9BQU9BLEdBQUUsa0JBQWtCLE9BQU9BLEdBQUUsa0JBQWtCLE9BQU9BLEdBQUUsaUJBQWdCO0FBQUEsZ0JBQ2pGLEVBQUUsT0FBT0EsR0FBRSxtQkFBbUIsT0FBT0EsR0FBRSxtQkFBbUIsT0FBT0EsR0FBRSxrQkFBaUI7QUFBQSxnQkFDcEYsRUFBRSxPQUFPQSxHQUFFLGlCQUFpQixPQUFPQSxHQUFFLGlCQUFpQixPQUFPQSxHQUFFLGdCQUFlO0FBQUEsY0FDOUYsR0FBaUIsSUFBSSxHQUFHLEdBQUdBLEdBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxLQUFLQSxHQUFFLFVBQVUsVUFBVSxLQUFLLElBQUksS0FBSSxHQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLFFBQVEsR0FBR0EsR0FBRSxlQUFlLE1BQU0sS0FBSyxJQUFJLFlBQVksRUFBRUEsR0FBRSxlQUFlLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEtBQUssc0JBQXNCLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFBQSxZQUN2USxLQUFLO0FBQ0gsZ0JBQUUsS0FBSSxHQUFJLEtBQUssSUFBSSxRQUFPLEdBQUlBLEdBQUUsVUFBVSxNQUFNLENBQUMsRUFBRSxRQUFPLEVBQUcsUUFBUSxTQUFTLEdBQUc7QUFDL0Usa0JBQUUsSUFBSSxLQUFJO0FBQ1Ysb0JBQUksSUFBSSxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxRQUFRLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLElBQUksTUFBTSxFQUFFLE9BQU8sU0FBUyxFQUFFLFFBQVEsSUFBSSxNQUFNLEVBQUUsT0FBTyxRQUFRLEVBQUUsT0FBTyxVQUFVLEVBQUUsUUFBUSxLQUFLLElBQUksRUFBRSxPQUFPLFVBQVUsRUFBRSxRQUFRLEtBQUssRUFBRTtBQUNqTixrQkFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEtBQUksR0FBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEtBQUksR0FBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRSxRQUFRLFNBQVMsR0FBRyxFQUFFLElBQUksZ0JBQWdCLEVBQUUsUUFBUSxRQUFRLEVBQUUsSUFBSSxjQUFjLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxJQUFJLGFBQWEsRUFBRSxLQUFLLFFBQVEsRUFBRSxJQUFJLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLElBQUksaUJBQWlCLEVBQUUsSUFBSSxLQUFJLEdBQUksRUFBRSxJQUFJLFFBQU87QUFBQSxjQUNwVSxDQUFDLEdBQUcsRUFBRSxRQUFRO0FBQUEsWUFDaEIsS0FBSztBQUNILGtCQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLFFBQVE7QUFBQSxZQUNqQyxLQUFLO0FBQ0gscUJBQU8sSUFBSSxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEtBQUssRUFBRSxRQUFRLElBQUksRUFBRSxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSztBQUFBLGdCQUNoSCxFQUFFO0FBQUEsZ0JBQ0YsRUFBRTtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0EsRUFBRTtBQUFBLGdCQUNGO0FBQUE7QUFBQSxjQUVoQixDQUFlLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUFBLFlBQ3hCLEtBQUs7QUFDSCxxQkFBTyxFQUFFLEtBQUksR0FBSSxDQUFDLEdBQUcsRUFBRTtBQUFBLFlBQ3pCLEtBQUs7QUFDSCxxQkFBTyxFQUFFLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLO0FBQUEsZ0JBQ3ZDLEVBQUU7QUFBQSxnQkFDRixFQUFFO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxFQUFFO0FBQUEsZ0JBQ0Y7QUFBQTtBQUFBLGNBRWhCLENBQWU7QUFBQSxZQUNILEtBQUs7QUFDSCxxQkFBTyxFQUFFLEtBQUksR0FBSSxDQUFDLEdBQUcsRUFBRTtBQUFBLFlBQ3pCLEtBQUs7QUFDSCxxQkFBTyxFQUFFLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxNQUFNLENBQUM7QUFBQSxZQUM1RixLQUFLO0FBQ0gscUJBQU8sRUFBRSxLQUFJLEdBQUksQ0FBQyxHQUFHLEVBQUU7QUFBQSxZQUN6QixLQUFLO0FBQ0gscUJBQU8sQ0FBQyxHQUFHLEtBQUssa0JBQWtCLEVBQUUsT0FBTyxHQUFHLEVBQUUsTUFBTSxDQUFDO0FBQUEsWUFDekQsS0FBSztBQUNILGdCQUFFLEtBQUksR0FBSSxFQUFFLFFBQVE7QUFBQSxZQUN0QixLQUFLO0FBQ0gsbUJBQUssRUFBRSxRQUFRO0FBQUEsWUFDakIsS0FBSztBQUNILHFCQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFBQSxZQUNuQixLQUFLO0FBQ0gscUJBQU87QUFBQSxnQkFDTDtBQUFBO0FBQUEsY0FFaEI7QUFBQSxVQUNBO0FBQUEsUUFDUSxDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSCxHQUFHLEVBQUUsVUFBVSwyQkFBMkIsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2hFLGFBQU8sRUFBRSxNQUFNLFFBQVEsUUFBUSxXQUFXO0FBQ3hDLFlBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3ZELGVBQU8sRUFBRSxNQUFNLFNBQVMsR0FBRztBQUN6QixpQkFBTyxLQUFLLElBQUksS0FBSSxHQUFJLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxNQUFNLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksVUFBUyxHQUFJLE1BQU0sSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJQSxLQUFJLElBQUlBLEtBQUksSUFBSUEsS0FBSSxHQUFHLElBQUlBLEtBQUksSUFBSUEsS0FBSSxJQUFJQSxJQUFHLE1BQU0sTUFBTSxJQUFJQSxJQUFHLElBQUlBLEtBQUksSUFBSSxNQUFJLEtBQUssSUFBSSxJQUFJLElBQUksUUFBSyxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsS0FBSyxNQUFNLElBQUksS0FBSyxPQUFPLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxLQUFLLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxVQUFVLFNBQVMsS0FBSyxJQUFJLFlBQVlBLE1BQUssS0FBSyxJQUFJLFlBQVlBLEtBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxjQUFjLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxPQUFNLEdBQUksS0FBSyxJQUFJLFlBQVksQ0FBQSxDQUFFLEdBQUcsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLFVBQVMsR0FBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLE9BQU0sSUFBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxVQUFTLEdBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxPQUFNLEtBQU0sS0FBSyxJQUFJLFdBQVc7QUFBQSxZQUN2d0M7QUFBQTtBQUFBLFVBRVo7QUFBQSxRQUNRLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxVQUFVLFNBQVMsU0FB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Y0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUMwQkEsb0JBQUU7QUFBQSxZQUNoQjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEdBQUc7QUFBQSxjQUNILFFBQVEsRUFBRSxJQUFJO0FBQUEsY0FDZCxhQUFhO0FBQUEsY0FDYixlQUFlO0FBQUEsY0FDZixnQkFBZ0I7QUFBQSxZ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
