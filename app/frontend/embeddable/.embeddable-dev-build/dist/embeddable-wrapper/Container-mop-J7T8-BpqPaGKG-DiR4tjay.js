import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { O as Oe$1, $ as $e$1, _ as _e$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { m, r } from './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

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

export { Dg as D, Gg as G, Jg as J, Ng as N, Pg as P, Vg as V, Wg as W, Xg as X, _g as _, kg as k, rB as r };
//# sourceMappingURL=Container-mop-J7T8-BpqPaGKG-DiR4tjay.js.map

//# sourceMappingURL=Container-mop-J7T8-BpqPaGKG-DiR4tjay.js.map