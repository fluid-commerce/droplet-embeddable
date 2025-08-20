import { r as reactExports, n as nt } from './embeddable-component-BD9bezsm.js';
import { r as rB } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { n as n1, T as T1, O as O2, V } from './MapChart-0nwFxQXg-mf2CyzeP.js';
import './index-BV21PmyC.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import './index.esm-CVE60fla-BtsXn2z1.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

class it {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(n) {
    const e = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = e[i], u = n + o, a = Math.abs(n) < Math.abs(o) ? n - (u - o) : o - (u - n);
      a && (e[r++] = a), n = u;
    }
    return e[r] = n, this._n = r + 1, this;
  }
  valueOf() {
    const n = this._partials;
    let e = this._n, r, i, o, u = 0;
    if (e > 0) {
      for (u = n[--e]; e > 0 && (r = u, i = n[--e], u = r + i, o = i - (u - r), !o); )
        ;
      e > 0 && (o < 0 && n[e - 1] < 0 || o > 0 && n[e - 1] > 0) && (i = o * 2, r = u + i, i == r - u && (u = r));
    }
    return u;
  }
}
function* gu(t2) {
  for (const n of t2)
    yield* n;
}
function Ui(t2) {
  return Array.from(gu(t2));
}
function Vt(t2, n, e) {
  t2 = +t2, n = +n, e = (i = arguments.length) < 2 ? (n = t2, t2 = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t2) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t2 + r * e;
  return o;
}
var Kr = 180 / Math.PI, qe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Vi(t2, n, e, r, i, o) {
  var u, a, c;
  return (u = Math.sqrt(t2 * t2 + n * n)) && (t2 /= u, n /= u), (c = t2 * e + n * r) && (e -= t2 * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t2 * r < n * e && (t2 = -t2, n = -n, c = -c, u = -u), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t2) * Kr,
    skewX: Math.atan(c) * Kr,
    scaleX: u,
    scaleY: a
  };
}
var Ln;
function du(t2) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
  return n.isIdentity ? qe : Vi(n.a, n.b, n.c, n.d, n.e, n.f);
}
function mu(t2) {
  return t2 == null || (Ln || (Ln = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ln.setAttribute("transform", t2), !(t2 = Ln.transform.baseVal.consolidate())) ? qe : (t2 = t2.matrix, Vi(t2.a, t2.b, t2.c, t2.d, t2.e, t2.f));
}
function Hi(t2, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, s, f, h, p, v) {
    if (l !== f || s !== h) {
      var E = p.push("translate(", null, n, null, e);
      v.push({ i: E - 4, x: n1(l, f) }, { i: E - 2, x: n1(s, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function u(l, s, f, h) {
    l !== s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: n1(l, s) })) : s && f.push(i(f) + "rotate(" + s + r);
  }
  function a(l, s, f, h) {
    l !== s ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: n1(l, s) }) : s && f.push(i(f) + "skewX(" + s + r);
  }
  function c(l, s, f, h, p, v) {
    if (l !== f || s !== h) {
      var E = p.push(i(p) + "scale(", null, ",", null, ")");
      v.push({ i: E - 4, x: n1(l, f) }, { i: E - 2, x: n1(s, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(l, s) {
    var f = [], h = [];
    return l = t2(l), s = t2(s), o(l.translateX, l.translateY, s.translateX, s.translateY, f, h), u(l.rotate, s.rotate, f, h), a(l.skewX, s.skewX, f, h), c(l.scaleX, l.scaleY, s.scaleX, s.scaleY, f, h), l = s = null, function(p) {
      for (var v = -1, E = h.length, S; ++v < E; ) f[(S = h[v]).i] = S.x(p);
      return f.join("");
    };
  };
}
var yu = Hi(du, "px, ", "px)", "deg)"), wu = Hi(mu, ", ", ")", ")"), _u = 1e-12;
function Qr(t2) {
  return ((t2 = Math.exp(t2)) + 1 / t2) / 2;
}
function Eu(t2) {
  return ((t2 = Math.exp(t2)) - 1 / t2) / 2;
}
function Su(t2) {
  return ((t2 = Math.exp(2 * t2)) - 1) / (t2 + 1);
}
const Mu = (function t(n, e, r) {
  function i(o, u) {
    var a = o[0], c = o[1], l = o[2], s = u[0], f = u[1], h = u[2], p = s - a, v = f - c, E = p * p + v * v, S, y;
    if (E < _u)
      y = Math.log(h / l) / n, S = function(C) {
        return [
          a + C * p,
          c + C * v,
          l * Math.exp(n * C * y)
        ];
      };
    else {
      var M = Math.sqrt(E), m = (h * h - l * l + r * E) / (2 * l * e * M), _ = (h * h - l * l - r * E) / (2 * h * e * M), x = Math.log(Math.sqrt(m * m + 1) - m), N = Math.log(Math.sqrt(_ * _ + 1) - _);
      y = (N - x) / n, S = function(C) {
        var F = C * y, D = Qr(x), b = l / (e * M) * (D * Su(n * F + x) - Eu(x));
        return [
          a + b * p,
          c + b * v,
          l * D / Qr(n * F + x)
        ];
      };
    }
    return S.duration = y * 1e3 * n / Math.SQRT2, S;
  }
  return i.rho = function(o) {
    var u = Math.max(1e-3, +o), a = u * u, c = a * a;
    return t(u, a, c);
  }, i;
})(Math.SQRT2, 2, 4);
var ke = { exports: {} }, Re, Jr;
function xu() {
  if (Jr) return Re;
  Jr = 1;
  var t2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = t2, Re;
}
var Ce, ti;
function Pu() {
  if (ti) return Ce;
  ti = 1;
  var t2 = /* @__PURE__ */ xu();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, Ce = function() {
    function r(u, a, c, l, s, f) {
      if (f !== t2) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: e,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, Ce;
}
var ni;
function Nu() {
  return ni || (ni = 1, ke.exports = /* @__PURE__ */ Pu()()), ke.exports;
}
var $u = /* @__PURE__ */ Nu();
const P = /* @__PURE__ */ rB($u);
var z = 1e-6, Mn = 1e-12, j = Math.PI, J = j / 2, Kn = j / 4, st = j * 2, W = 180 / j, O = j / 180, X = Math.abs, un = Math.atan, ct = Math.atan2, R = Math.cos, Fn = Math.ceil, Ki = Math.exp, je = Math.hypot, Qn = Math.log, ze = Math.pow, A = Math.sin, _t = Math.sign || function(t2) {
  return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
}, et = Math.sqrt, wr = Math.tan;
function Qi(t2) {
  return t2 > 1 ? 0 : t2 < -1 ? j : Math.acos(t2);
}
function lt(t2) {
  return t2 > 1 ? J : t2 < -1 ? -J : Math.asin(t2);
}
function ei(t2) {
  return (t2 = A(t2 / 2)) * t2;
}
function K() {
}
function Jn(t2, n) {
  t2 && ii.hasOwnProperty(t2.type) && ii[t2.type](t2, n);
}
var ri = {
  Feature: function(t2, n) {
    Jn(t2.geometry, n);
  },
  FeatureCollection: function(t2, n) {
    for (var e = t2.features, r = -1, i = e.length; ++r < i; ) Jn(e[r].geometry, n);
  }
}, ii = {
  Sphere: function(t2, n) {
    n.sphere();
  },
  Point: function(t2, n) {
    t2 = t2.coordinates, n.point(t2[0], t2[1], t2[2]);
  },
  MultiPoint: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) t2 = e[r], n.point(t2[0], t2[1], t2[2]);
  },
  LineString: function(t2, n) {
    Xe(t2.coordinates, n, 0);
  },
  MultiLineString: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) Xe(e[r], n, 0);
  },
  Polygon: function(t2, n) {
    oi(t2.coordinates, n);
  },
  MultiPolygon: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) oi(e[r], n);
  },
  GeometryCollection: function(t2, n) {
    for (var e = t2.geometries, r = -1, i = e.length; ++r < i; ) Jn(e[r], n);
  }
};
function Xe(t2, n, e) {
  var r = -1, i = t2.length - e, o;
  for (n.lineStart(); ++r < i; ) o = t2[r], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function oi(t2, n) {
  var e = -1, r = t2.length;
  for (n.polygonStart(); ++e < r; ) Xe(t2[e], n, 1);
  n.polygonEnd();
}
function St(t2, n) {
  t2 && ri.hasOwnProperty(t2.type) ? ri[t2.type](t2, n) : Jn(t2, n);
}
var te = new it(), ne = new it(), Ji, to, Ge, Ze, Be, $t = {
  point: K,
  lineStart: K,
  lineEnd: K,
  polygonStart: function() {
    te = new it(), $t.lineStart = Au, $t.lineEnd = Tu;
  },
  polygonEnd: function() {
    var t2 = +te;
    ne.add(t2 < 0 ? st + t2 : t2), this.lineStart = this.lineEnd = this.point = K;
  },
  sphere: function() {
    ne.add(st);
  }
};
function Au() {
  $t.point = ku;
}
function Tu() {
  no(Ji, to);
}
function ku(t2, n) {
  $t.point = no, Ji = t2, to = n, t2 *= O, n *= O, Ge = t2, Ze = R(n = n / 2 + Kn), Be = A(n);
}
function no(t2, n) {
  t2 *= O, n *= O, n = n / 2 + Kn;
  var e = t2 - Ge, r = e >= 0 ? 1 : -1, i = r * e, o = R(n), u = A(n), a = Be * u, c = Ze * o + a * R(i), l = a * r * A(i);
  te.add(ct(l, c)), Ge = t2, Ze = o, Be = u;
}
function Ru(t2) {
  return ne = new it(), St(t2, $t), ne * 2;
}
function ee(t2) {
  return [ct(t2[1], t2[0]), lt(t2[2])];
}
function Bt(t2) {
  var n = t2[0], e = t2[1], r = R(e);
  return [r * R(n), r * A(n), A(e)];
}
function In(t2, n) {
  return t2[0] * n[0] + t2[1] * n[1] + t2[2] * n[2];
}
function tn(t2, n) {
  return [t2[1] * n[2] - t2[2] * n[1], t2[2] * n[0] - t2[0] * n[2], t2[0] * n[1] - t2[1] * n[0]];
}
function Oe(t2, n) {
  t2[0] += n[0], t2[1] += n[1], t2[2] += n[2];
}
function Dn(t2, n) {
  return [t2[0] * n, t2[1] * n, t2[2] * n];
}
function re(t2) {
  var n = et(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
  t2[0] /= n, t2[1] /= n, t2[2] /= n;
}
var H, ft, Q, dt, Zt, eo, ro, Qt, yn, qt, Lt, Ct = {
  point: Ye,
  lineStart: ui,
  lineEnd: ai,
  polygonStart: function() {
    Ct.point = oo, Ct.lineStart = Cu, Ct.lineEnd = zu, yn = new it(), $t.polygonStart();
  },
  polygonEnd: function() {
    $t.polygonEnd(), Ct.point = Ye, Ct.lineStart = ui, Ct.lineEnd = ai, te < 0 ? (H = -(Q = 180), ft = -(dt = 90)) : yn > z ? dt = 90 : yn < -z && (ft = -90), Lt[0] = H, Lt[1] = Q;
  },
  sphere: function() {
    H = -(Q = 180), ft = -(dt = 90);
  }
};
function Ye(t2, n) {
  qt.push(Lt = [H = t2, Q = t2]), n < ft && (ft = n), n > dt && (dt = n);
}
function io(t2, n) {
  var e = Bt([t2 * O, n * O]);
  if (Qt) {
    var r = tn(Qt, e), i = [r[1], -r[0], 0], o = tn(i, r);
    re(o), o = ee(o);
    var u = t2 - Zt, a = u > 0 ? 1 : -1, c = o[0] * W * a, l, s = X(u) > 180;
    s ^ (a * Zt < c && c < a * t2) ? (l = o[1] * W, l > dt && (dt = l)) : (c = (c + 360) % 360 - 180, s ^ (a * Zt < c && c < a * t2) ? (l = -o[1] * W, l < ft && (ft = l)) : (n < ft && (ft = n), n > dt && (dt = n))), s ? t2 < Zt ? gt(H, t2) > gt(H, Q) && (Q = t2) : gt(t2, Q) > gt(H, Q) && (H = t2) : Q >= H ? (t2 < H && (H = t2), t2 > Q && (Q = t2)) : t2 > Zt ? gt(H, t2) > gt(H, Q) && (Q = t2) : gt(t2, Q) > gt(H, Q) && (H = t2);
  } else
    qt.push(Lt = [H = t2, Q = t2]);
  n < ft && (ft = n), n > dt && (dt = n), Qt = e, Zt = t2;
}
function ui() {
  Ct.point = io;
}
function ai() {
  Lt[0] = H, Lt[1] = Q, Ct.point = Ye, Qt = null;
}
function oo(t2, n) {
  if (Qt) {
    var e = t2 - Zt;
    yn.add(X(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
  } else
    eo = t2, ro = n;
  $t.point(t2, n), io(t2, n);
}
function Cu() {
  $t.lineStart();
}
function zu() {
  oo(eo, ro), $t.lineEnd(), X(yn) > z && (H = -(Q = 180)), Lt[0] = H, Lt[1] = Q, Qt = null;
}
function gt(t2, n) {
  return (n -= t2) < 0 ? n + 360 : n;
}
function Ou(t2, n) {
  return t2[0] - n[0];
}
function si(t2, n) {
  return t2[0] <= t2[1] ? t2[0] <= n && n <= t2[1] : n < t2[0] || t2[1] < n;
}
function Lu(t2) {
  var n, e, r, i, o, u, a;
  if (dt = Q = -(H = ft = 1 / 0), qt = [], St(t2, Ct), e = qt.length) {
    for (qt.sort(Ou), n = 1, r = qt[0], o = [r]; n < e; ++n)
      i = qt[n], si(r, i[0]) || si(r, i[1]) ? (gt(r[0], i[1]) > gt(r[0], r[1]) && (r[1] = i[1]), gt(i[0], r[1]) > gt(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
    for (u = -1 / 0, e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)
      i = o[n], (a = gt(r[1], i[0])) > u && (u = a, H = i[0], Q = r[1]);
  }
  return qt = Lt = null, H === 1 / 0 || ft === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[H, ft], [Q, dt]];
}
var ln, ie, oe, ue, ae, se, ce, le, We, Ue, Ve, uo, ao, ot, ut, at, Mt = {
  sphere: K,
  point: _r,
  lineStart: ci,
  lineEnd: li,
  polygonStart: function() {
    Mt.lineStart = Du, Mt.lineEnd = bu;
  },
  polygonEnd: function() {
    Mt.lineStart = ci, Mt.lineEnd = li;
  }
};
function _r(t2, n) {
  t2 *= O, n *= O;
  var e = R(n);
  Tn(e * R(t2), e * A(t2), A(n));
}
function Tn(t2, n, e) {
  ++ln, oe += (t2 - oe) / ln, ue += (n - ue) / ln, ae += (e - ae) / ln;
}
function ci() {
  Mt.point = Fu;
}
function Fu(t2, n) {
  t2 *= O, n *= O;
  var e = R(n);
  ot = e * R(t2), ut = e * A(t2), at = A(n), Mt.point = Iu, Tn(ot, ut, at);
}
function Iu(t2, n) {
  t2 *= O, n *= O;
  var e = R(n), r = e * R(t2), i = e * A(t2), o = A(n), u = ct(et((u = ut * o - at * i) * u + (u = at * r - ot * o) * u + (u = ot * i - ut * r) * u), ot * r + ut * i + at * o);
  ie += u, se += u * (ot + (ot = r)), ce += u * (ut + (ut = i)), le += u * (at + (at = o)), Tn(ot, ut, at);
}
function li() {
  Mt.point = _r;
}
function Du() {
  Mt.point = qu;
}
function bu() {
  so(uo, ao), Mt.point = _r;
}
function qu(t2, n) {
  uo = t2, ao = n, t2 *= O, n *= O, Mt.point = so;
  var e = R(n);
  ot = e * R(t2), ut = e * A(t2), at = A(n), Tn(ot, ut, at);
}
function so(t2, n) {
  t2 *= O, n *= O;
  var e = R(n), r = e * R(t2), i = e * A(t2), o = A(n), u = ut * o - at * i, a = at * r - ot * o, c = ot * i - ut * r, l = je(u, a, c), s = lt(l), f = l && -s / l;
  We.add(f * u), Ue.add(f * a), Ve.add(f * c), ie += s, se += s * (ot + (ot = r)), ce += s * (ut + (ut = i)), le += s * (at + (at = o)), Tn(ot, ut, at);
}
function ju(t2) {
  ln = ie = oe = ue = ae = se = ce = le = 0, We = new it(), Ue = new it(), Ve = new it(), St(t2, Mt);
  var n = +We, e = +Ue, r = +Ve, i = je(n, e, r);
  return i < Mn && (n = se, e = ce, r = le, ie < z && (n = oe, e = ue, r = ae), i = je(n, e, r), i < Mn) ? [NaN, NaN] : [ct(e, n) * W, lt(r / i) * W];
}
function Ut(t2) {
  return function() {
    return t2;
  };
}
function He(t2, n) {
  function e(r, i) {
    return r = t2(r, i), n(r[0], r[1]);
  }
  return t2.invert && n.invert && (e.invert = function(r, i) {
    return r = n.invert(r, i), r && t2.invert(r[0], r[1]);
  }), e;
}
function Ke(t2, n) {
  return X(t2) > j && (t2 -= Math.round(t2 / st) * st), [t2, n];
}
Ke.invert = Ke;
function Er(t2, n, e) {
  return (t2 %= st) ? n || e ? He(hi(t2), pi(n, e)) : hi(t2) : n || e ? pi(n, e) : Ke;
}
function fi(t2) {
  return function(n, e) {
    return n += t2, X(n) > j && (n -= Math.round(n / st) * st), [n, e];
  };
}
function hi(t2) {
  var n = fi(t2);
  return n.invert = fi(-t2), n;
}
function pi(t2, n) {
  var e = R(t2), r = A(t2), i = R(n), o = A(n);
  function u(a, c) {
    var l = R(c), s = R(a) * l, f = A(a) * l, h = A(c), p = h * e + s * r;
    return [
      ct(f * i - p * o, s * e - h * r),
      lt(p * i + f * o)
    ];
  }
  return u.invert = function(a, c) {
    var l = R(c), s = R(a) * l, f = A(a) * l, h = A(c), p = h * i - f * o;
    return [
      ct(f * i + h * o, s * e + p * r),
      lt(p * e - s * r)
    ];
  }, u;
}
function co(t2) {
  t2 = Er(t2[0] * O, t2[1] * O, t2.length > 2 ? t2[2] * O : 0);
  function n(e) {
    return e = t2(e[0] * O, e[1] * O), e[0] *= W, e[1] *= W, e;
  }
  return n.invert = function(e) {
    return e = t2.invert(e[0] * O, e[1] * O), e[0] *= W, e[1] *= W, e;
  }, n;
}
function lo(t2, n, e, r, i, o) {
  if (e) {
    var u = R(n), a = A(n), c = r * e;
    i == null ? (i = n + r * st, o = n - c / 2) : (i = vi(u, i), o = vi(u, o), (r > 0 ? i < o : i > o) && (i += r * st));
    for (var l, s = i; r > 0 ? s > o : s < o; s -= c)
      l = ee([u, -a * R(s), -a * A(s)]), t2.point(l[0], l[1]);
  }
}
function vi(t2, n) {
  n = Bt(n), n[0] -= t2, re(n);
  var e = Qi(-n[1]);
  return ((-n[2] < 0 ? -e : e) + st - z) % st;
}
function Xu() {
  var t2 = Ut([0, 0]), n = Ut(90), e = Ut(2), r, i, o = { point: u };
  function u(c, l) {
    r.push(c = i(c, l)), c[0] *= W, c[1] *= W;
  }
  function a() {
    var c = t2.apply(this, arguments), l = n.apply(this, arguments) * O, s = e.apply(this, arguments) * O;
    return r = [], i = Er(-c[0] * O, -c[1] * O, 0).invert, lo(o, l, s, 1), c = { type: "Polygon", coordinates: [r] }, r = i = null, c;
  }
  return a.center = function(c) {
    return arguments.length ? (t2 = typeof c == "function" ? c : Ut([+c[0], +c[1]]), a) : t2;
  }, a.radius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Ut(+c), a) : n;
  }, a.precision = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ut(+c), a) : e;
  }, a;
}
function fo() {
  var t2 = [], n;
  return {
    point: function(e, r, i) {
      n.push([e, r, i]);
    },
    lineStart: function() {
      t2.push(n = []);
    },
    lineEnd: K,
    rejoin: function() {
      t2.length > 1 && t2.push(t2.pop().concat(t2.shift()));
    },
    result: function() {
      var e = t2;
      return t2 = [], n = null, e;
    }
  };
}
function Gn(t2, n) {
  return X(t2[0] - n[0]) < z && X(t2[1] - n[1]) < z;
}
function bn(t2, n, e, r) {
  this.x = t2, this.z = n, this.o = e, this.e = r, this.v = false, this.n = this.p = null;
}
function ho(t2, n, e, r, i) {
  var o = [], u = [], a, c;
  if (t2.forEach(function(v) {
    if (!((E = v.length - 1) <= 0)) {
      var E, S = v[0], y = v[E], M;
      if (Gn(S, y)) {
        if (!S[2] && !y[2]) {
          for (i.lineStart(), a = 0; a < E; ++a) i.point((S = v[a])[0], S[1]);
          i.lineEnd();
          return;
        }
        y[0] += 2 * z;
      }
      o.push(M = new bn(S, v, null, true)), u.push(M.o = new bn(S, null, M, false)), o.push(M = new bn(y, v, null, false)), u.push(M.o = new bn(y, null, M, true));
    }
  }), !!o.length) {
    for (u.sort(n), gi(o), gi(u), a = 0, c = u.length; a < c; ++a)
      u[a].e = e = !e;
    for (var l = o[0], s, f; ; ) {
      for (var h = l, p = true; h.v; ) if ((h = h.n) === l) return;
      s = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = true, h.e) {
          if (p)
            for (a = 0, c = s.length; a < c; ++a) i.point((f = s[a])[0], f[1]);
          else
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (p)
            for (s = h.p.z, a = s.length - 1; a >= 0; --a) i.point((f = s[a])[0], f[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, s = h.z, p = !p;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function gi(t2) {
  if (n = t2.length) {
    for (var n, e = 0, r = t2[0], i; ++e < n; )
      r.n = i = t2[e], i.p = r, r = i;
    r.n = i = t2[0], i.p = r;
  }
}
function Le(t2) {
  return X(t2[0]) <= j ? t2[0] : _t(t2[0]) * ((X(t2[0]) + j) % st - j);
}
function po(t2, n) {
  var e = Le(n), r = n[1], i = A(r), o = [A(e), -R(e), 0], u = 0, a = 0, c = new it();
  i === 1 ? r = J + z : i === -1 && (r = -J - z);
  for (var l = 0, s = t2.length; l < s; ++l)
    if (h = (f = t2[l]).length)
      for (var f, h, p = f[h - 1], v = Le(p), E = p[1] / 2 + Kn, S = A(E), y = R(E), M = 0; M < h; ++M, v = _, S = N, y = C, p = m) {
        var m = f[M], _ = Le(m), x = m[1] / 2 + Kn, N = A(x), C = R(x), F = _ - v, D = F >= 0 ? 1 : -1, b = D * F, L = b > j, G = S * N;
        if (c.add(ct(G * D * A(b), y * C + G * R(b))), u += L ? F + D * st : F, L ^ v >= e ^ _ >= e) {
          var B = tn(Bt(p), Bt(m));
          re(B);
          var g = tn(o, B);
          re(g);
          var d = (L ^ F >= 0 ? -1 : 1) * lt(g[2]);
          (r > d || r === d && (B[0] || B[1])) && (a += L ^ F >= 0 ? 1 : -1);
        }
      }
  return (u < -z || u < z && c < -Mn) ^ a & 1;
}
function vo(t2, n, e, r) {
  return function(i) {
    var o = n(i), u = fo(), a = n(u), c = false, l, s, f, h = {
      point: p,
      lineStart: E,
      lineEnd: S,
      polygonStart: function() {
        h.point = y, h.lineStart = M, h.lineEnd = m, s = [], l = [];
      },
      polygonEnd: function() {
        h.point = p, h.lineStart = E, h.lineEnd = S, s = Ui(s);
        var _ = po(l, r);
        s.length ? (c || (i.polygonStart(), c = true), ho(s, Zu, _, e, i)) : _ && (c || (i.polygonStart(), c = true), i.lineStart(), e(null, null, 1, i), i.lineEnd()), c && (i.polygonEnd(), c = false), s = l = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(_, x) {
      t2(_, x) && i.point(_, x);
    }
    function v(_, x) {
      o.point(_, x);
    }
    function E() {
      h.point = v, o.lineStart();
    }
    function S() {
      h.point = p, o.lineEnd();
    }
    function y(_, x) {
      f.push([_, x]), a.point(_, x);
    }
    function M() {
      a.lineStart(), f = [];
    }
    function m() {
      y(f[0][0], f[0][1]), a.lineEnd();
      var _ = a.clean(), x = u.result(), N, C = x.length, F, D, b;
      if (f.pop(), l.push(f), f = null, !!C) {
        if (_ & 1) {
          if (D = x[0], (F = D.length - 1) > 0) {
            for (c || (i.polygonStart(), c = true), i.lineStart(), N = 0; N < F; ++N) i.point((b = D[N])[0], b[1]);
            i.lineEnd();
          }
          return;
        }
        C > 1 && _ & 2 && x.push(x.pop().concat(x.shift())), s.push(x.filter(Gu));
      }
    }
    return h;
  };
}
function Gu(t2) {
  return t2.length > 1;
}
function Zu(t2, n) {
  return ((t2 = t2.x)[0] < 0 ? t2[1] - J - z : J - t2[1]) - ((n = n.x)[0] < 0 ? n[1] - J - z : J - n[1]);
}
const Qe = vo(
  function() {
    return true;
  },
  Bu,
  Wu,
  [-j, -J]
);
function Bu(t2) {
  var n = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t2.lineStart(), i = 1;
    },
    point: function(o, u) {
      var a = o > 0 ? j : -j, c = X(o - n);
      X(c - j) < z ? (t2.point(n, e = (e + u) / 2 > 0 ? J : -J), t2.point(r, e), t2.lineEnd(), t2.lineStart(), t2.point(a, e), t2.point(o, e), i = 0) : r !== a && c >= j && (X(n - r) < z && (n -= r * z), X(o - a) < z && (o -= a * z), e = Yu(n, e, o, u), t2.point(r, e), t2.lineEnd(), t2.lineStart(), t2.point(a, e), i = 0), t2.point(n = o, e = u), r = a;
    },
    lineEnd: function() {
      t2.lineEnd(), n = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Yu(t2, n, e, r) {
  var i, o, u = A(t2 - e);
  return X(u) > z ? un((A(n) * (o = R(r)) * A(e) - A(r) * (i = R(n)) * A(t2)) / (i * o * u)) : (n + r) / 2;
}
function Wu(t2, n, e, r) {
  var i;
  if (t2 == null)
    i = e * J, r.point(-j, i), r.point(0, i), r.point(j, i), r.point(j, 0), r.point(j, -i), r.point(0, -i), r.point(-j, -i), r.point(-j, 0), r.point(-j, i);
  else if (X(t2[0] - n[0]) > z) {
    var o = t2[0] < n[0] ? j : -j;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(n[0], n[1]);
}
function go(t2) {
  var n = R(t2), e = 2 * O, r = n > 0, i = X(n) > z;
  function o(s, f, h, p) {
    lo(p, t2, e, h, s, f);
  }
  function u(s, f) {
    return R(s) * R(f) > n;
  }
  function a(s) {
    var f, h, p, v, E;
    return {
      lineStart: function() {
        v = p = false, E = 1;
      },
      point: function(S, y) {
        var M = [S, y], m, _ = u(S, y), x = r ? _ ? 0 : l(S, y) : _ ? l(S + (S < 0 ? j : -j), y) : 0;
        if (!f && (v = p = _) && s.lineStart(), _ !== p && (m = c(f, M), (!m || Gn(f, m) || Gn(M, m)) && (M[2] = 1)), _ !== p)
          E = 0, _ ? (s.lineStart(), m = c(M, f), s.point(m[0], m[1])) : (m = c(f, M), s.point(m[0], m[1], 2), s.lineEnd()), f = m;
        else if (i && f && r ^ _) {
          var N;
          !(x & h) && (N = c(M, f, true)) && (E = 0, r ? (s.lineStart(), s.point(N[0][0], N[0][1]), s.point(N[1][0], N[1][1]), s.lineEnd()) : (s.point(N[1][0], N[1][1]), s.lineEnd(), s.lineStart(), s.point(N[0][0], N[0][1], 3)));
        }
        _ && (!f || !Gn(f, M)) && s.point(M[0], M[1]), f = M, p = _, h = x;
      },
      lineEnd: function() {
        p && s.lineEnd(), f = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return E | (v && p) << 1;
      }
    };
  }
  function c(s, f, h) {
    var p = Bt(s), v = Bt(f), E = [1, 0, 0], S = tn(p, v), y = In(S, S), M = S[0], m = y - M * M;
    if (!m) return !h && s;
    var _ = n * y / m, x = -n * M / m, N = tn(E, S), C = Dn(E, _), F = Dn(S, x);
    Oe(C, F);
    var D = N, b = In(C, D), L = In(D, D), G = b * b - L * (In(C, C) - 1);
    if (!(G < 0)) {
      var B = et(G), g = Dn(D, (-b - B) / L);
      if (Oe(g, C), g = ee(g), !h) return g;
      var d = s[0], w = f[0], $ = s[1], k = f[1], T;
      w < d && (T = d, d = w, w = T);
      var I = w - d, q = X(I - j) < z, Z = q || I < z;
      if (!q && k < $ && (T = $, $ = k, k = T), Z ? q ? $ + k > 0 ^ g[1] < (X(g[0] - d) < z ? $ : k) : $ <= g[1] && g[1] <= k : I > j ^ (d <= g[0] && g[0] <= w)) {
        var U = Dn(D, (-b + B) / L);
        return Oe(U, C), [g, ee(U)];
      }
    }
  }
  function l(s, f) {
    var h = r ? t2 : j - t2, p = 0;
    return s < -h ? p |= 1 : s > h && (p |= 2), f < -h ? p |= 4 : f > h && (p |= 8), p;
  }
  return vo(u, a, o, r ? [0, -t2] : [-j, t2 - j]);
}
function Uu(t2, n, e, r, i, o) {
  var u = t2[0], a = t2[1], c = n[0], l = n[1], s = 0, f = 1, h = c - u, p = l - a, v;
  if (v = e - u, !(!h && v > 0)) {
    if (v /= h, h < 0) {
      if (v < s) return;
      v < f && (f = v);
    } else if (h > 0) {
      if (v > f) return;
      v > s && (s = v);
    }
    if (v = i - u, !(!h && v < 0)) {
      if (v /= h, h < 0) {
        if (v > f) return;
        v > s && (s = v);
      } else if (h > 0) {
        if (v < s) return;
        v < f && (f = v);
      }
      if (v = r - a, !(!p && v > 0)) {
        if (v /= p, p < 0) {
          if (v < s) return;
          v < f && (f = v);
        } else if (p > 0) {
          if (v > f) return;
          v > s && (s = v);
        }
        if (v = o - a, !(!p && v < 0)) {
          if (v /= p, p < 0) {
            if (v > f) return;
            v > s && (s = v);
          } else if (p > 0) {
            if (v < s) return;
            v < f && (f = v);
          }
          return s > 0 && (t2[0] = u + s * h, t2[1] = a + s * p), f < 1 && (n[0] = u + f * h, n[1] = a + f * p), true;
        }
      }
    }
  }
}
var fn = 1e9, qn = -fn;
function Pe(t2, n, e, r) {
  function i(l, s) {
    return t2 <= l && l <= e && n <= s && s <= r;
  }
  function o(l, s, f, h) {
    var p = 0, v = 0;
    if (l == null || (p = u(l, f)) !== (v = u(s, f)) || c(l, s) < 0 ^ f > 0)
      do
        h.point(p === 0 || p === 3 ? t2 : e, p > 1 ? r : n);
      while ((p = (p + f + 4) % 4) !== v);
    else
      h.point(s[0], s[1]);
  }
  function u(l, s) {
    return X(l[0] - t2) < z ? s > 0 ? 0 : 3 : X(l[0] - e) < z ? s > 0 ? 2 : 1 : X(l[1] - n) < z ? s > 0 ? 1 : 0 : s > 0 ? 3 : 2;
  }
  function a(l, s) {
    return c(l.x, s.x);
  }
  function c(l, s) {
    var f = u(l, 1), h = u(s, 1);
    return f !== h ? f - h : f === 0 ? s[1] - l[1] : f === 1 ? l[0] - s[0] : f === 2 ? l[1] - s[1] : s[0] - l[0];
  }
  return function(l) {
    var s = l, f = fo(), h, p, v, E, S, y, M, m, _, x, N, C = {
      point: F,
      lineStart: G,
      lineEnd: B,
      polygonStart: b,
      polygonEnd: L
    };
    function F(d, w) {
      i(d, w) && s.point(d, w);
    }
    function D() {
      for (var d = 0, w = 0, $ = p.length; w < $; ++w)
        for (var k = p[w], T = 1, I = k.length, q = k[0], Z, U, Y = q[0], V2 = q[1]; T < I; ++T)
          Z = Y, U = V2, q = k[T], Y = q[0], V2 = q[1], U <= r ? V2 > r && (Y - Z) * (r - U) > (V2 - U) * (t2 - Z) && ++d : V2 <= r && (Y - Z) * (r - U) < (V2 - U) * (t2 - Z) && --d;
      return d;
    }
    function b() {
      s = f, h = [], p = [], N = true;
    }
    function L() {
      var d = D(), w = N && d, $ = (h = Ui(h)).length;
      (w || $) && (l.polygonStart(), w && (l.lineStart(), o(null, null, 1, l), l.lineEnd()), $ && ho(h, a, d, o, l), l.polygonEnd()), s = l, h = p = v = null;
    }
    function G() {
      C.point = g, p && p.push(v = []), x = true, _ = false, M = m = NaN;
    }
    function B() {
      h && (g(E, S), y && _ && f.rejoin(), h.push(f.result())), C.point = F, _ && s.lineEnd();
    }
    function g(d, w) {
      var $ = i(d, w);
      if (p && v.push([d, w]), x)
        E = d, S = w, y = $, x = false, $ && (s.lineStart(), s.point(d, w));
      else if ($ && _) s.point(d, w);
      else {
        var k = [M = Math.max(qn, Math.min(fn, M)), m = Math.max(qn, Math.min(fn, m))], T = [d = Math.max(qn, Math.min(fn, d)), w = Math.max(qn, Math.min(fn, w))];
        Uu(k, T, t2, n, e, r) ? (_ || (s.lineStart(), s.point(k[0], k[1])), s.point(T[0], T[1]), $ || s.lineEnd(), N = false) : $ && (s.lineStart(), s.point(d, w), N = false);
      }
      M = d, m = w, _ = $;
    }
    return C;
  };
}
function Vu() {
  var t2 = 0, n = 0, e = 960, r = 500, i, o, u;
  return u = {
    stream: function(a) {
      return i && o === a ? i : i = Pe(t2, n, e, r)(o = a);
    },
    extent: function(a) {
      return arguments.length ? (t2 = +a[0][0], n = +a[0][1], e = +a[1][0], r = +a[1][1], i = o = null, u) : [[t2, n], [e, r]];
    }
  };
}
var Je, tr, Zn, Bn, nn = {
  sphere: K,
  point: K,
  lineStart: Hu,
  lineEnd: K,
  polygonStart: K,
  polygonEnd: K
};
function Hu() {
  nn.point = Qu, nn.lineEnd = Ku;
}
function Ku() {
  nn.point = nn.lineEnd = K;
}
function Qu(t2, n) {
  t2 *= O, n *= O, tr = t2, Zn = A(n), Bn = R(n), nn.point = Ju;
}
function Ju(t2, n) {
  t2 *= O, n *= O;
  var e = A(n), r = R(n), i = X(t2 - tr), o = R(i), u = A(i), a = r * u, c = Bn * e - Zn * r * o, l = Zn * e + Bn * r * o;
  Je.add(ct(et(a * a + c * c), l)), tr = t2, Zn = e, Bn = r;
}
function mo(t2) {
  return Je = new it(), St(t2, nn), +Je;
}
var nr = [null, null], ta = { type: "LineString", coordinates: nr };
function fe(t2, n) {
  return nr[0] = t2, nr[1] = n, mo(ta);
}
var di = {
  Feature: function(t2, n) {
    return he(t2.geometry, n);
  },
  FeatureCollection: function(t2, n) {
    for (var e = t2.features, r = -1, i = e.length; ++r < i; ) if (he(e[r].geometry, n)) return true;
    return false;
  }
}, mi = {
  Sphere: function() {
    return true;
  },
  Point: function(t2, n) {
    return yi(t2.coordinates, n);
  },
  MultiPoint: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) if (yi(e[r], n)) return true;
    return false;
  },
  LineString: function(t2, n) {
    return wi(t2.coordinates, n);
  },
  MultiLineString: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) if (wi(e[r], n)) return true;
    return false;
  },
  Polygon: function(t2, n) {
    return _i(t2.coordinates, n);
  },
  MultiPolygon: function(t2, n) {
    for (var e = t2.coordinates, r = -1, i = e.length; ++r < i; ) if (_i(e[r], n)) return true;
    return false;
  },
  GeometryCollection: function(t2, n) {
    for (var e = t2.geometries, r = -1, i = e.length; ++r < i; ) if (he(e[r], n)) return true;
    return false;
  }
};
function he(t2, n) {
  return t2 && mi.hasOwnProperty(t2.type) ? mi[t2.type](t2, n) : false;
}
function yi(t2, n) {
  return fe(t2, n) === 0;
}
function wi(t2, n) {
  for (var e, r, i, o = 0, u = t2.length; o < u; o++) {
    if (r = fe(t2[o], n), r === 0 || o > 0 && (i = fe(t2[o], t2[o - 1]), i > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Mn * i))
      return true;
    e = r;
  }
  return false;
}
function _i(t2, n) {
  return !!po(t2.map(na), yo(n));
}
function na(t2) {
  return t2 = t2.map(yo), t2.pop(), t2;
}
function yo(t2) {
  return [t2[0] * O, t2[1] * O];
}
function ea(t2, n) {
  return (t2 && di.hasOwnProperty(t2.type) ? di[t2.type] : he)(t2, n);
}
function Ei(t2, n, e) {
  var r = Vt(t2, n - z, e).concat(n);
  return function(i) {
    return r.map(function(o) {
      return [i, o];
    });
  };
}
function Si(t2, n, e) {
  var r = Vt(t2, n - z, e).concat(n);
  return function(i) {
    return r.map(function(o) {
      return [o, i];
    });
  };
}
function Sr() {
  var t2, n, e, r, i, o, u, a, c = 10, l = c, s = 90, f = 360, h, p, v, E, S = 2.5;
  function y() {
    return { type: "MultiLineString", coordinates: M() };
  }
  function M() {
    return Vt(Fn(r / s) * s, e, s).map(v).concat(Vt(Fn(a / f) * f, u, f).map(E)).concat(Vt(Fn(n / c) * c, t2, c).filter(function(m) {
      return X(m % s) > z;
    }).map(h)).concat(Vt(Fn(o / l) * l, i, l).filter(function(m) {
      return X(m % f) > z;
    }).map(p));
  }
  return y.lines = function() {
    return M().map(function(m) {
      return { type: "LineString", coordinates: m };
    });
  }, y.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        v(r).concat(
          E(u).slice(1),
          v(e).reverse().slice(1),
          E(a).reverse().slice(1)
        )
      ]
    };
  }, y.extent = function(m) {
    return arguments.length ? y.extentMajor(m).extentMinor(m) : y.extentMinor();
  }, y.extentMajor = function(m) {
    return arguments.length ? (r = +m[0][0], e = +m[1][0], a = +m[0][1], u = +m[1][1], r > e && (m = r, r = e, e = m), a > u && (m = a, a = u, u = m), y.precision(S)) : [[r, a], [e, u]];
  }, y.extentMinor = function(m) {
    return arguments.length ? (n = +m[0][0], t2 = +m[1][0], o = +m[0][1], i = +m[1][1], n > t2 && (m = n, n = t2, t2 = m), o > i && (m = o, o = i, i = m), y.precision(S)) : [[n, o], [t2, i]];
  }, y.step = function(m) {
    return arguments.length ? y.stepMajor(m).stepMinor(m) : y.stepMinor();
  }, y.stepMajor = function(m) {
    return arguments.length ? (s = +m[0], f = +m[1], y) : [s, f];
  }, y.stepMinor = function(m) {
    return arguments.length ? (c = +m[0], l = +m[1], y) : [c, l];
  }, y.precision = function(m) {
    return arguments.length ? (S = +m, h = Ei(o, i, 90), p = Si(n, t2, S), v = Ei(a, u, 90), E = Si(r, e, S), y) : S;
  }, y.extentMajor([[-180, -90 + z], [180, 90 - z]]).extentMinor([[-180, -80 - z], [180, 80 + z]]);
}
function ra() {
  return Sr()();
}
function ia(t2, n) {
  var e = t2[0] * O, r = t2[1] * O, i = n[0] * O, o = n[1] * O, u = R(r), a = A(r), c = R(o), l = A(o), s = u * R(e), f = u * A(e), h = c * R(i), p = c * A(i), v = 2 * lt(et(ei(o - r) + u * c * ei(i - e))), E = A(v), S = v ? function(y) {
    var M = A(y *= v) / E, m = A(v - y) / E, _ = m * s + M * h, x = m * f + M * p, N = m * a + M * l;
    return [
      ct(x, _) * W,
      ct(N, et(_ * _ + x * x)) * W
    ];
  } : function() {
    return [e * W, r * W];
  };
  return S.distance = v, S;
}
const xn = (t2) => t2;
var Fe = new it(), er = new it(), wo, _o, rr, ir, zt = {
  point: K,
  lineStart: K,
  lineEnd: K,
  polygonStart: function() {
    zt.lineStart = oa, zt.lineEnd = aa;
  },
  polygonEnd: function() {
    zt.lineStart = zt.lineEnd = zt.point = K, Fe.add(X(er)), er = new it();
  },
  result: function() {
    var t2 = Fe / 2;
    return Fe = new it(), t2;
  }
};
function oa() {
  zt.point = ua;
}
function ua(t2, n) {
  zt.point = Eo, wo = rr = t2, _o = ir = n;
}
function Eo(t2, n) {
  er.add(ir * t2 - rr * n), rr = t2, ir = n;
}
function aa() {
  Eo(wo, _o);
}
var en = 1 / 0, pe = en, Pn = -en, ve = Pn, ge = {
  point: sa,
  lineStart: K,
  lineEnd: K,
  polygonStart: K,
  polygonEnd: K,
  result: function() {
    var t2 = [[en, pe], [Pn, ve]];
    return Pn = ve = -(pe = en = 1 / 0), t2;
  }
};
function sa(t2, n) {
  t2 < en && (en = t2), t2 > Pn && (Pn = t2), n < pe && (pe = n), n > ve && (ve = n);
}
var or = 0, ur = 0, hn = 0, de = 0, me = 0, Ht = 0, ar = 0, sr = 0, pn = 0, So, Mo, Pt, Nt, wt = {
  point: Yt,
  lineStart: Mi,
  lineEnd: xi,
  polygonStart: function() {
    wt.lineStart = fa, wt.lineEnd = ha;
  },
  polygonEnd: function() {
    wt.point = Yt, wt.lineStart = Mi, wt.lineEnd = xi;
  },
  result: function() {
    var t2 = pn ? [ar / pn, sr / pn] : Ht ? [de / Ht, me / Ht] : hn ? [or / hn, ur / hn] : [NaN, NaN];
    return or = ur = hn = de = me = Ht = ar = sr = pn = 0, t2;
  }
};
function Yt(t2, n) {
  or += t2, ur += n, ++hn;
}
function Mi() {
  wt.point = ca;
}
function ca(t2, n) {
  wt.point = la, Yt(Pt = t2, Nt = n);
}
function la(t2, n) {
  var e = t2 - Pt, r = n - Nt, i = et(e * e + r * r);
  de += i * (Pt + t2) / 2, me += i * (Nt + n) / 2, Ht += i, Yt(Pt = t2, Nt = n);
}
function xi() {
  wt.point = Yt;
}
function fa() {
  wt.point = pa;
}
function ha() {
  xo(So, Mo);
}
function pa(t2, n) {
  wt.point = xo, Yt(So = Pt = t2, Mo = Nt = n);
}
function xo(t2, n) {
  var e = t2 - Pt, r = n - Nt, i = et(e * e + r * r);
  de += i * (Pt + t2) / 2, me += i * (Nt + n) / 2, Ht += i, i = Nt * t2 - Pt * n, ar += i * (Pt + t2), sr += i * (Nt + n), pn += i * 3, Yt(Pt = t2, Nt = n);
}
function Po(t2) {
  this._context = t2;
}
Po.prototype = {
  _radius: 4.5,
  pointRadius: function(t2) {
    return this._radius = t2, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(t2, n) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(t2, n), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(t2, n);
        break;
      }
      default: {
        this._context.moveTo(t2 + this._radius, n), this._context.arc(t2, n, this._radius, 0, st);
        break;
      }
    }
  },
  result: K
};
var cr = new it(), Ie, No, $o, vn, gn, Nn = {
  point: K,
  lineStart: function() {
    Nn.point = va;
  },
  lineEnd: function() {
    Ie && Ao(No, $o), Nn.point = K;
  },
  polygonStart: function() {
    Ie = true;
  },
  polygonEnd: function() {
    Ie = null;
  },
  result: function() {
    var t2 = +cr;
    return cr = new it(), t2;
  }
};
function va(t2, n) {
  Nn.point = Ao, No = vn = t2, $o = gn = n;
}
function Ao(t2, n) {
  vn -= t2, gn -= n, cr.add(et(vn * vn + gn * gn)), vn = t2, gn = n;
}
let Pi, ye, Ni, $i;
class Ai {
  constructor(n) {
    this._append = n == null ? To : ga(n), this._radius = 4.5, this._ = "";
  }
  pointRadius(n) {
    return this._radius = +n, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(n, e) {
    switch (this._point) {
      case 0: {
        this._append`M${n},${e}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${n},${e}`;
        break;
      }
      default: {
        if (this._append`M${n},${e}`, this._radius !== Ni || this._append !== ye) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, Ni = r, ye = this._append, $i = this._, this._ = i;
        }
        this._ += $i;
        break;
      }
    }
  }
  result() {
    const n = this._;
    return this._ = "", n.length ? n : null;
  }
}
function To(t2) {
  let n = 1;
  this._ += t2[0];
  for (const e = t2.length; n < e; ++n)
    this._ += arguments[n] + t2[n];
}
function ga(t2) {
  const n = Math.floor(t2);
  if (!(n >= 0)) throw new RangeError(`invalid digits: ${t2}`);
  if (n > 15) return To;
  if (n !== Pi) {
    const e = 10 ** n;
    Pi = n, ye = function(i) {
      let o = 1;
      this._ += i[0];
      for (const u = i.length; o < u; ++o)
        this._ += Math.round(arguments[o] * e) / e + i[o];
    };
  }
  return ye;
}
function ko(t2, n) {
  let e = 3, r = 4.5, i, o;
  function u(a) {
    return a && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), St(a, i(o))), o.result();
  }
  return u.area = function(a) {
    return St(a, i(zt)), zt.result();
  }, u.measure = function(a) {
    return St(a, i(Nn)), Nn.result();
  }, u.bounds = function(a) {
    return St(a, i(ge)), ge.result();
  }, u.centroid = function(a) {
    return St(a, i(wt)), wt.result();
  }, u.projection = function(a) {
    return arguments.length ? (i = a == null ? (t2 = null, xn) : (t2 = a).stream, u) : t2;
  }, u.context = function(a) {
    return arguments.length ? (o = a == null ? (n = null, new Ai(e)) : new Po(n = a), typeof r != "function" && o.pointRadius(r), u) : n;
  }, u.pointRadius = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : (o.pointRadius(+a), +a), u) : r;
  }, u.digits = function(a) {
    if (!arguments.length) return e;
    if (a == null) e = null;
    else {
      const c = Math.floor(a);
      if (!(c >= 0)) throw new RangeError(`invalid digits: ${a}`);
      e = c;
    }
    return n === null && (o = new Ai(e)), u;
  }, u.projection(t2).digits(e).context(n);
}
function da(t2) {
  return {
    stream: kn(t2)
  };
}
function kn(t2) {
  return function(n) {
    var e = new lr();
    for (var r in t2) e[r] = t2[r];
    return e.stream = n, e;
  };
}
function lr() {
}
lr.prototype = {
  constructor: lr,
  point: function(t2, n) {
    this.stream.point(t2, n);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Mr(t2, n, e) {
  var r = t2.clipExtent && t2.clipExtent();
  return t2.scale(150).translate([0, 0]), r != null && t2.clipExtent(null), St(e, t2.stream(ge)), n(ge.result()), r != null && t2.clipExtent(r), t2;
}
function Ne(t2, n, e) {
  return Mr(t2, function(r) {
    var i = n[1][0] - n[0][0], o = n[1][1] - n[0][1], u = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), a = +n[0][0] + (i - u * (r[1][0] + r[0][0])) / 2, c = +n[0][1] + (o - u * (r[1][1] + r[0][1])) / 2;
    t2.scale(150 * u).translate([a, c]);
  }, e);
}
function xr(t2, n, e) {
  return Ne(t2, [[0, 0], n], e);
}
function Pr(t2, n, e) {
  return Mr(t2, function(r) {
    var i = +n, o = i / (r[1][0] - r[0][0]), u = (i - o * (r[1][0] + r[0][0])) / 2, a = -o * r[0][1];
    t2.scale(150 * o).translate([u, a]);
  }, e);
}
function Nr(t2, n, e) {
  return Mr(t2, function(r) {
    var i = +n, o = i / (r[1][1] - r[0][1]), u = -o * r[0][0], a = (i - o * (r[1][1] + r[0][1])) / 2;
    t2.scale(150 * o).translate([u, a]);
  }, e);
}
var Ti = 16, ma = R(30 * O);
function ki(t2, n) {
  return +n ? wa(t2, n) : ya(t2);
}
function ya(t2) {
  return kn({
    point: function(n, e) {
      n = t2(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function wa(t2, n) {
  function e(r, i, o, u, a, c, l, s, f, h, p, v, E, S) {
    var y = l - r, M = s - i, m = y * y + M * M;
    if (m > 4 * n && E--) {
      var _ = u + h, x = a + p, N = c + v, C = et(_ * _ + x * x + N * N), F = lt(N /= C), D = X(X(N) - 1) < z || X(o - f) < z ? (o + f) / 2 : ct(x, _), b = t2(D, F), L = b[0], G = b[1], B = L - r, g = G - i, d = M * B - y * g;
      (d * d / m > n || X((y * B + M * g) / m - 0.5) > 0.3 || u * h + a * p + c * v < ma) && (e(r, i, o, u, a, c, L, G, D, _ /= C, x /= C, N, E, S), S.point(L, G), e(L, G, D, _, x, N, l, s, f, h, p, v, E, S));
    }
  }
  return function(r) {
    var i, o, u, a, c, l, s, f, h, p, v, E, S = {
      point: y,
      lineStart: M,
      lineEnd: _,
      polygonStart: function() {
        r.polygonStart(), S.lineStart = x;
      },
      polygonEnd: function() {
        r.polygonEnd(), S.lineStart = M;
      }
    };
    function y(F, D) {
      F = t2(F, D), r.point(F[0], F[1]);
    }
    function M() {
      f = NaN, S.point = m, r.lineStart();
    }
    function m(F, D) {
      var b = Bt([F, D]), L = t2(F, D);
      e(f, h, s, p, v, E, f = L[0], h = L[1], s = F, p = b[0], v = b[1], E = b[2], Ti, r), r.point(f, h);
    }
    function _() {
      S.point = y, r.lineEnd();
    }
    function x() {
      M(), S.point = N, S.lineEnd = C;
    }
    function N(F, D) {
      m(i = F, D), o = f, u = h, a = p, c = v, l = E, S.point = m;
    }
    function C() {
      e(f, h, s, p, v, E, o, u, i, a, c, l, Ti, r), S.lineEnd = _, _();
    }
    return S;
  };
}
var _a = kn({
  point: function(t2, n) {
    this.stream.point(t2 * O, n * O);
  }
});
function Ea(t2) {
  return kn({
    point: function(n, e) {
      var r = t2(n, e);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function Sa(t2, n, e, r, i) {
  function o(u, a) {
    return u *= r, a *= i, [n + t2 * u, e - t2 * a];
  }
  return o.invert = function(u, a) {
    return [(u - n) / t2 * r, (e - a) / t2 * i];
  }, o;
}
function Ri(t2, n, e, r, i, o) {
  if (!o) return Sa(t2, n, e, r, i);
  var u = R(o), a = A(o), c = u * t2, l = a * t2, s = u / t2, f = a / t2, h = (a * e - u * n) / t2, p = (a * n + u * e) / t2;
  function v(E, S) {
    return E *= r, S *= i, [c * E - l * S + n, e - l * E - c * S];
  }
  return v.invert = function(E, S) {
    return [r * (s * E - f * S + h), i * (p - f * E - s * S)];
  }, v;
}
function At(t2) {
  return $r(function() {
    return t2;
  })();
}
function $r(t2) {
  var n, e = 150, r = 480, i = 250, o = 0, u = 0, a = 0, c = 0, l = 0, s, f = 0, h = 1, p = 1, v = null, E = Qe, S = null, y, M, m, _ = xn, x = 0.5, N, C, F, D, b;
  function L(d) {
    return F(d[0] * O, d[1] * O);
  }
  function G(d) {
    return d = F.invert(d[0], d[1]), d && [d[0] * W, d[1] * W];
  }
  L.stream = function(d) {
    return D && b === d ? D : D = _a(Ea(s)(E(N(_(b = d)))));
  }, L.preclip = function(d) {
    return arguments.length ? (E = d, v = void 0, g()) : E;
  }, L.postclip = function(d) {
    return arguments.length ? (_ = d, S = y = M = m = null, g()) : _;
  }, L.clipAngle = function(d) {
    return arguments.length ? (E = +d ? go(v = d * O) : (v = null, Qe), g()) : v * W;
  }, L.clipExtent = function(d) {
    return arguments.length ? (_ = d == null ? (S = y = M = m = null, xn) : Pe(S = +d[0][0], y = +d[0][1], M = +d[1][0], m = +d[1][1]), g()) : S == null ? null : [[S, y], [M, m]];
  }, L.scale = function(d) {
    return arguments.length ? (e = +d, B()) : e;
  }, L.translate = function(d) {
    return arguments.length ? (r = +d[0], i = +d[1], B()) : [r, i];
  }, L.center = function(d) {
    return arguments.length ? (o = d[0] % 360 * O, u = d[1] % 360 * O, B()) : [o * W, u * W];
  }, L.rotate = function(d) {
    return arguments.length ? (a = d[0] % 360 * O, c = d[1] % 360 * O, l = d.length > 2 ? d[2] % 360 * O : 0, B()) : [a * W, c * W, l * W];
  }, L.angle = function(d) {
    return arguments.length ? (f = d % 360 * O, B()) : f * W;
  }, L.reflectX = function(d) {
    return arguments.length ? (h = d ? -1 : 1, B()) : h < 0;
  }, L.reflectY = function(d) {
    return arguments.length ? (p = d ? -1 : 1, B()) : p < 0;
  }, L.precision = function(d) {
    return arguments.length ? (N = ki(C, x = d * d), g()) : et(x);
  }, L.fitExtent = function(d, w) {
    return Ne(L, d, w);
  }, L.fitSize = function(d, w) {
    return xr(L, d, w);
  }, L.fitWidth = function(d, w) {
    return Pr(L, d, w);
  }, L.fitHeight = function(d, w) {
    return Nr(L, d, w);
  };
  function B() {
    var d = Ri(e, 0, 0, h, p, f).apply(null, n(o, u)), w = Ri(e, r - d[0], i - d[1], h, p, f);
    return s = Er(a, c, l), C = He(n, w), F = He(s, C), N = ki(C, x), g();
  }
  function g() {
    return D = b = null, L;
  }
  return function() {
    return n = t2.apply(this, arguments), L.invert = n.invert && G, B();
  };
}
function Ar(t2) {
  var n = 0, e = j / 3, r = $r(t2), i = r(n, e);
  return i.parallels = function(o) {
    return arguments.length ? r(n = o[0] * O, e = o[1] * O) : [n * W, e * W];
  }, i;
}
function Ma(t2) {
  var n = R(t2);
  function e(r, i) {
    return [r * n, A(i) / n];
  }
  return e.invert = function(r, i) {
    return [r / n, lt(i * n)];
  }, e;
}
function Ro(t2, n) {
  var e = A(t2), r = (e + A(n)) / 2;
  if (X(r) < z) return Ma(t2);
  var i = 1 + e * (2 * r - e), o = et(i) / r;
  function u(a, c) {
    var l = et(i - 2 * r * A(c)) / r;
    return [l * A(a *= r), o - l * R(a)];
  }
  return u.invert = function(a, c) {
    var l = o - c, s = ct(a, X(l)) * _t(l);
    return l * r < 0 && (s -= j * _t(a) * _t(l)), [s / r, lt((i - (a * a + l * l) * r * r) / (2 * r))];
  }, u;
}
function we() {
  return Ar(Ro).scale(155.424).center([0, 33.6442]);
}
function Co() {
  return we().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function xa(t2) {
  var n = t2.length;
  return {
    point: function(e, r) {
      for (var i = -1; ++i < n; ) t2[i].point(e, r);
    },
    sphere: function() {
      for (var e = -1; ++e < n; ) t2[e].sphere();
    },
    lineStart: function() {
      for (var e = -1; ++e < n; ) t2[e].lineStart();
    },
    lineEnd: function() {
      for (var e = -1; ++e < n; ) t2[e].lineEnd();
    },
    polygonStart: function() {
      for (var e = -1; ++e < n; ) t2[e].polygonStart();
    },
    polygonEnd: function() {
      for (var e = -1; ++e < n; ) t2[e].polygonEnd();
    }
  };
}
function Pa() {
  var t2, n, e = Co(), r, i = we().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, u = we().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), a, c, l = { point: function(h, p) {
    c = [h, p];
  } };
  function s(h) {
    var p = h[0], v = h[1];
    return c = null, r.point(p, v), c || (o.point(p, v), c) || (a.point(p, v), c);
  }
  s.invert = function(h) {
    var p = e.scale(), v = e.translate(), E = (h[0] - v[0]) / p, S = (h[1] - v[1]) / p;
    return (S >= 0.12 && S < 0.234 && E >= -0.425 && E < -0.214 ? i : S >= 0.166 && S < 0.234 && E >= -0.214 && E < -0.115 ? u : e).invert(h);
  }, s.stream = function(h) {
    return t2 && n === h ? t2 : t2 = xa([e.stream(n = h), i.stream(h), u.stream(h)]);
  }, s.precision = function(h) {
    return arguments.length ? (e.precision(h), i.precision(h), u.precision(h), f()) : e.precision();
  }, s.scale = function(h) {
    return arguments.length ? (e.scale(h), i.scale(h * 0.35), u.scale(h), s.translate(e.translate())) : e.scale();
  }, s.translate = function(h) {
    if (!arguments.length) return e.translate();
    var p = e.scale(), v = +h[0], E = +h[1];
    return r = e.translate(h).clipExtent([[v - 0.455 * p, E - 0.238 * p], [v + 0.455 * p, E + 0.238 * p]]).stream(l), o = i.translate([v - 0.307 * p, E + 0.201 * p]).clipExtent([[v - 0.425 * p + z, E + 0.12 * p + z], [v - 0.214 * p - z, E + 0.234 * p - z]]).stream(l), a = u.translate([v - 0.205 * p, E + 0.212 * p]).clipExtent([[v - 0.214 * p + z, E + 0.166 * p + z], [v - 0.115 * p - z, E + 0.234 * p - z]]).stream(l), f();
  }, s.fitExtent = function(h, p) {
    return Ne(s, h, p);
  }, s.fitSize = function(h, p) {
    return xr(s, h, p);
  }, s.fitWidth = function(h, p) {
    return Pr(s, h, p);
  }, s.fitHeight = function(h, p) {
    return Nr(s, h, p);
  };
  function f() {
    return t2 = n = null, s;
  }
  return s.scale(1070);
}
function zo(t2) {
  return function(n, e) {
    var r = R(n), i = R(e), o = t2(r * i);
    return o === 1 / 0 ? [2, 0] : [
      o * i * A(n),
      o * A(e)
    ];
  };
}
function Rn(t2) {
  return function(n, e) {
    var r = et(n * n + e * e), i = t2(r), o = A(i), u = R(i);
    return [
      ct(n * o, r * u),
      lt(r && e * o / r)
    ];
  };
}
var Tr = zo(function(t2) {
  return et(2 / (1 + t2));
});
Tr.invert = Rn(function(t2) {
  return 2 * lt(t2 / 2);
});
function Na() {
  return At(Tr).scale(124.75).clipAngle(180 - 1e-3);
}
var kr = zo(function(t2) {
  return (t2 = Qi(t2)) && t2 / A(t2);
});
kr.invert = Rn(function(t2) {
  return t2;
});
function $a() {
  return At(kr).scale(79.4188).clipAngle(180 - 1e-3);
}
function Cn(t2, n) {
  return [t2, Qn(wr((J + n) / 2))];
}
Cn.invert = function(t2, n) {
  return [t2, 2 * un(Ki(n)) - J];
};
function Aa() {
  return Oo(Cn).scale(961 / st);
}
function Oo(t2) {
  var n = At(t2), e = n.center, r = n.scale, i = n.translate, o = n.clipExtent, u = null, a, c, l;
  n.scale = function(f) {
    return arguments.length ? (r(f), s()) : r();
  }, n.translate = function(f) {
    return arguments.length ? (i(f), s()) : i();
  }, n.center = function(f) {
    return arguments.length ? (e(f), s()) : e();
  }, n.clipExtent = function(f) {
    return arguments.length ? (f == null ? u = a = c = l = null : (u = +f[0][0], a = +f[0][1], c = +f[1][0], l = +f[1][1]), s()) : u == null ? null : [[u, a], [c, l]];
  };
  function s() {
    var f = j * r(), h = n(co(n.rotate()).invert([0, 0]));
    return o(u == null ? [[h[0] - f, h[1] - f], [h[0] + f, h[1] + f]] : t2 === Cn ? [[Math.max(h[0] - f, u), a], [Math.min(h[0] + f, c), l]] : [[u, Math.max(h[1] - f, a)], [c, Math.min(h[1] + f, l)]]);
  }
  return s();
}
function jn(t2) {
  return wr((J + t2) / 2);
}
function Lo(t2, n) {
  var e = R(t2), r = t2 === n ? A(t2) : Qn(e / R(n)) / Qn(jn(n) / jn(t2)), i = e * ze(jn(t2), r) / r;
  if (!r) return Cn;
  function o(u, a) {
    i > 0 ? a < -J + z && (a = -J + z) : a > J - z && (a = J - z);
    var c = i / ze(jn(a), r);
    return [c * A(r * u), i - c * R(r * u)];
  }
  return o.invert = function(u, a) {
    var c = i - a, l = _t(r) * et(u * u + c * c), s = ct(u, X(c)) * _t(c);
    return c * r < 0 && (s -= j * _t(u) * _t(c)), [s / r, 2 * un(ze(i / l, 1 / r)) - J];
  }, o;
}
function Ta() {
  return Ar(Lo).scale(109.5).parallels([30, 30]);
}
function $n(t2, n) {
  return [t2, n];
}
$n.invert = $n;
function ka() {
  return At($n).scale(152.63);
}
function Fo(t2, n) {
  var e = R(t2), r = t2 === n ? A(t2) : (e - R(n)) / (n - t2), i = e / r + t2;
  if (X(r) < z) return $n;
  function o(u, a) {
    var c = i - a, l = r * u;
    return [c * A(l), i - c * R(l)];
  }
  return o.invert = function(u, a) {
    var c = i - a, l = ct(u, X(c)) * _t(c);
    return c * r < 0 && (l -= j * _t(u) * _t(c)), [l / r, i - _t(r) * et(u * u + c * c)];
  }, o;
}
function Ra() {
  return Ar(Fo).scale(131.154).center([0, 13.9389]);
}
var wn = 1.340264, _n = -0.081106, En = 893e-6, Sn = 3796e-6, _e = et(3) / 2, Ca = 12;
function Rr(t2, n) {
  var e = lt(_e * A(n)), r = e * e, i = r * r * r;
  return [
    t2 * R(e) / (_e * (wn + 3 * _n * r + i * (7 * En + 9 * Sn * r))),
    e * (wn + _n * r + i * (En + Sn * r))
  ];
}
Rr.invert = function(t2, n) {
  for (var e = n, r = e * e, i = r * r * r, o = 0, u, a, c; o < Ca && (a = e * (wn + _n * r + i * (En + Sn * r)) - n, c = wn + 3 * _n * r + i * (7 * En + 9 * Sn * r), e -= u = a / c, r = e * e, i = r * r * r, !(X(u) < Mn)); ++o)
    ;
  return [
    _e * t2 * (wn + 3 * _n * r + i * (7 * En + 9 * Sn * r)) / R(e),
    lt(A(e) / _e)
  ];
};
function za() {
  return At(Rr).scale(177.158);
}
function Cr(t2, n) {
  var e = R(n), r = R(t2) * e;
  return [e * A(t2) / r, A(n) / r];
}
Cr.invert = Rn(un);
function Oa() {
  return At(Cr).scale(144.049).clipAngle(60);
}
function La() {
  var t2 = 1, n = 0, e = 0, r = 1, i = 1, o = 0, u, a, c = null, l, s, f, h = 1, p = 1, v = kn({
    point: function(_, x) {
      var N = m([_, x]);
      this.stream.point(N[0], N[1]);
    }
  }), E = xn, S, y;
  function M() {
    return h = t2 * r, p = t2 * i, S = y = null, m;
  }
  function m(_) {
    var x = _[0] * h, N = _[1] * p;
    if (o) {
      var C = N * u - x * a;
      x = x * u + N * a, N = C;
    }
    return [x + n, N + e];
  }
  return m.invert = function(_) {
    var x = _[0] - n, N = _[1] - e;
    if (o) {
      var C = N * u + x * a;
      x = x * u - N * a, N = C;
    }
    return [x / h, N / p];
  }, m.stream = function(_) {
    return S && y === _ ? S : S = v(E(y = _));
  }, m.postclip = function(_) {
    return arguments.length ? (E = _, c = l = s = f = null, M()) : E;
  }, m.clipExtent = function(_) {
    return arguments.length ? (E = _ == null ? (c = l = s = f = null, xn) : Pe(c = +_[0][0], l = +_[0][1], s = +_[1][0], f = +_[1][1]), M()) : c == null ? null : [[c, l], [s, f]];
  }, m.scale = function(_) {
    return arguments.length ? (t2 = +_, M()) : t2;
  }, m.translate = function(_) {
    return arguments.length ? (n = +_[0], e = +_[1], M()) : [n, e];
  }, m.angle = function(_) {
    return arguments.length ? (o = _ % 360 * O, a = A(o), u = R(o), M()) : o * W;
  }, m.reflectX = function(_) {
    return arguments.length ? (r = _ ? -1 : 1, M()) : r < 0;
  }, m.reflectY = function(_) {
    return arguments.length ? (i = _ ? -1 : 1, M()) : i < 0;
  }, m.fitExtent = function(_, x) {
    return Ne(m, _, x);
  }, m.fitSize = function(_, x) {
    return xr(m, _, x);
  }, m.fitWidth = function(_, x) {
    return Pr(m, _, x);
  }, m.fitHeight = function(_, x) {
    return Nr(m, _, x);
  }, m;
}
function zr(t2, n) {
  var e = n * n, r = e * e;
  return [
    t2 * (0.8707 - 0.131979 * e + r * (-0.013791 + r * (3971e-6 * e - 1529e-6 * r))),
    n * (1.007226 + e * (0.015085 + r * (-0.044475 + 0.028874 * e - 5916e-6 * r)))
  ];
}
zr.invert = function(t2, n) {
  var e = n, r = 25, i;
  do {
    var o = e * e, u = o * o;
    e -= i = (e * (1.007226 + o * (0.015085 + u * (-0.044475 + 0.028874 * o - 5916e-6 * u))) - n) / (1.007226 + o * (0.015085 * 3 + u * (-0.044475 * 7 + 0.028874 * 9 * o - 5916e-6 * 11 * u)));
  } while (X(i) > z && --r > 0);
  return [
    t2 / (0.8707 + (o = e * e) * (-0.131979 + o * (-0.013791 + o * o * o * (3971e-6 - 1529e-6 * o)))),
    e
  ];
};
function Fa() {
  return At(zr).scale(175.295);
}
function Or(t2, n) {
  return [R(n) * A(t2), A(n)];
}
Or.invert = Rn(lt);
function Ia() {
  return At(Or).scale(249.5).clipAngle(90 + z);
}
function Lr(t2, n) {
  var e = R(n), r = 1 + R(t2) * e;
  return [e * A(t2) / r, A(n) / r];
}
Lr.invert = Rn(function(t2) {
  return 2 * un(t2);
});
function Da() {
  return At(Lr).scale(250).clipAngle(142);
}
function Fr(t2, n) {
  return [Qn(wr((J + n) / 2)), -t2];
}
Fr.invert = function(t2, n) {
  return [-n, 2 * un(Ki(t2)) - J];
};
function ba() {
  var t2 = Oo(Fr), n = t2.center, e = t2.rotate;
  return t2.center = function(r) {
    return arguments.length ? n([-r[1], r[0]]) : (r = n(), [r[1], -r[0]]);
  }, t2.rotate = function(r) {
    return arguments.length ? e([r[0], r[1], r.length > 2 ? r[2] + 90 : 90]) : (r = e(), [r[0], r[1], r[2] - 90]);
  }, e([0, 0, 90]).scale(159.155);
}
const qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  geoAlbers: Co,
  geoAlbersUsa: Pa,
  geoArea: Ru,
  geoAzimuthalEqualArea: Na,
  geoAzimuthalEqualAreaRaw: Tr,
  geoAzimuthalEquidistant: $a,
  geoAzimuthalEquidistantRaw: kr,
  geoBounds: Lu,
  geoCentroid: ju,
  geoCircle: Xu,
  geoClipAntimeridian: Qe,
  geoClipCircle: go,
  geoClipExtent: Vu,
  geoClipRectangle: Pe,
  geoConicConformal: Ta,
  geoConicConformalRaw: Lo,
  geoConicEqualArea: we,
  geoConicEqualAreaRaw: Ro,
  geoConicEquidistant: Ra,
  geoConicEquidistantRaw: Fo,
  geoContains: ea,
  geoDistance: fe,
  geoEqualEarth: za,
  geoEqualEarthRaw: Rr,
  geoEquirectangular: ka,
  geoEquirectangularRaw: $n,
  geoGnomonic: Oa,
  geoGnomonicRaw: Cr,
  geoGraticule: Sr,
  geoGraticule10: ra,
  geoIdentity: La,
  geoInterpolate: ia,
  geoLength: mo,
  geoMercator: Aa,
  geoMercatorRaw: Cn,
  geoNaturalEarth1: Fa,
  geoNaturalEarth1Raw: zr,
  geoOrthographic: Ia,
  geoOrthographicRaw: Or,
  geoPath: ko,
  geoProjection: At,
  geoProjectionMutator: $r,
  geoRotation: co,
  geoStereographic: Da,
  geoStereographicRaw: Lr,
  geoStream: St,
  geoTransform: da,
  geoTransverseMercator: ba,
  geoTransverseMercatorRaw: Fr
}, Symbol.toStringTag, { value: "Module" }));
function ja(t2) {
  return t2;
}
function Xa(t2) {
  if (t2 == null) return ja;
  var n, e, r = t2.scale[0], i = t2.scale[1], o = t2.translate[0], u = t2.translate[1];
  return function(a, c) {
    c || (n = e = 0);
    var l = 2, s = a.length, f = new Array(s);
    for (f[0] = (n += a[0]) * r + o, f[1] = (e += a[1]) * i + u; l < s; ) f[l] = a[l], ++l;
    return f;
  };
}
function Ga(t2, n) {
  for (var e, r = t2.length, i = r - n; i < --r; ) e = t2[i], t2[i++] = t2[r], t2[r] = e;
}
function Za(t2, n) {
  return typeof n == "string" && (n = t2.objects[n]), n.type === "GeometryCollection" ? { type: "FeatureCollection", features: n.geometries.map(function(e) {
    return Ci(t2, e);
  }) } : Ci(t2, n);
}
function Ci(t2, n) {
  var e = n.id, r = n.bbox, i = n.properties == null ? {} : n.properties, o = Io(t2, n);
  return e == null && r == null ? { type: "Feature", properties: i, geometry: o } : r == null ? { type: "Feature", id: e, properties: i, geometry: o } : { type: "Feature", id: e, bbox: r, properties: i, geometry: o };
}
function Io(t2, n) {
  var e = Xa(t2.transform), r = t2.arcs;
  function i(s, f) {
    f.length && f.pop();
    for (var h = r[s < 0 ? ~s : s], p = 0, v = h.length; p < v; ++p)
      f.push(e(h[p], p));
    s < 0 && Ga(f, v);
  }
  function o(s) {
    return e(s);
  }
  function u(s) {
    for (var f = [], h = 0, p = s.length; h < p; ++h) i(s[h], f);
    return f.length < 2 && f.push(f[0]), f;
  }
  function a(s) {
    for (var f = u(s); f.length < 4; ) f.push(f[0]);
    return f;
  }
  function c(s) {
    return s.map(a);
  }
  function l(s) {
    var f = s.type, h;
    switch (f) {
      case "GeometryCollection":
        return { type: f, geometries: s.geometries.map(l) };
      case "Point":
        h = o(s.coordinates);
        break;
      case "MultiPoint":
        h = s.coordinates.map(o);
        break;
      case "LineString":
        h = u(s.arcs);
        break;
      case "MultiLineString":
        h = s.arcs.map(u);
        break;
      case "Polygon":
        h = c(s.arcs);
        break;
      case "MultiPolygon":
        h = s.arcs.map(c);
        break;
      default:
        return null;
    }
    return { type: f, coordinates: h };
  }
  return l(n);
}
function Ba(t2, n) {
  var e = {}, r = {}, i = {}, o = [], u = -1;
  n.forEach(function(l, s) {
    var f = t2.arcs[l < 0 ? ~l : l], h;
    f.length < 3 && !f[1][0] && !f[1][1] && (h = n[++u], n[u] = l, n[s] = h);
  }), n.forEach(function(l) {
    var s = a(l), f = s[0], h = s[1], p, v;
    if (p = i[f])
      if (delete i[p.end], p.push(l), p.end = h, v = r[h]) {
        delete r[v.start];
        var E = v === p ? p : p.concat(v);
        r[E.start = p.start] = i[E.end = v.end] = E;
      } else
        r[p.start] = i[p.end] = p;
    else if (p = r[h])
      if (delete r[p.start], p.unshift(l), p.start = f, v = i[f]) {
        delete i[v.end];
        var S = v === p ? p : v.concat(p);
        r[S.start = v.start] = i[S.end = p.end] = S;
      } else
        r[p.start] = i[p.end] = p;
    else
      p = [l], r[p.start = f] = i[p.end = h] = p;
  });
  function a(l) {
    var s = t2.arcs[l < 0 ? ~l : l], f = s[0], h;
    return t2.transform ? (h = [0, 0], s.forEach(function(p) {
      h[0] += p[0], h[1] += p[1];
    })) : h = s[s.length - 1], l < 0 ? [h, f] : [f, h];
  }
  function c(l, s) {
    for (var f in l) {
      var h = l[f];
      delete s[h.start], delete h.start, delete h.end, h.forEach(function(p) {
        e[p < 0 ? ~p : p] = 1;
      }), o.push(h);
    }
  }
  return c(i, r), c(r, i), n.forEach(function(l) {
    e[l < 0 ? ~l : l] || o.push([l]);
  }), o;
}
function zi(t2) {
  return Io(t2, Ya.apply(this, arguments));
}
function Ya(t2, n, e) {
  var r, i, o;
  if (arguments.length > 1) r = Wa(t2, n, e);
  else for (i = 0, r = new Array(o = t2.arcs.length); i < o; ++i) r[i] = i;
  return { type: "MultiLineString", arcs: Ba(t2, r) };
}
function Wa(t2, n, e) {
  var r = [], i = [], o;
  function u(f) {
    var h = f < 0 ? ~f : f;
    (i[h] || (i[h] = [])).push({ i: f, g: o });
  }
  function a(f) {
    f.forEach(u);
  }
  function c(f) {
    f.forEach(a);
  }
  function l(f) {
    f.forEach(c);
  }
  function s(f) {
    switch (o = f, f.type) {
      case "GeometryCollection":
        f.geometries.forEach(s);
        break;
      case "LineString":
        a(f.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        c(f.arcs);
        break;
      case "MultiPolygon":
        l(f.arcs);
        break;
    }
  }
  return s(n), i.forEach(e == null ? function(f) {
    r.push(f[0].i);
  } : function(f) {
    e(f[0].g, f[f.length - 1].g) && r.push(f[0].i);
  }), r;
}
var fr = "http://www.w3.org/1999/xhtml";
const Oi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: fr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $e(t2) {
  var n = t2 += "", e = n.indexOf(":");
  return e >= 0 && (n = t2.slice(0, e)) !== "xmlns" && (t2 = t2.slice(e + 1)), Oi.hasOwnProperty(n) ? { space: Oi[n], local: t2 } : t2;
}
function Ua(t2) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === fr && n.documentElement.namespaceURI === fr ? n.createElement(t2) : n.createElementNS(e, t2);
  };
}
function Va(t2) {
  return function() {
    return this.ownerDocument.createElementNS(t2.space, t2.local);
  };
}
function Do(t2) {
  var n = $e(t2);
  return (n.local ? Va : Ua)(n);
}
function Ha() {
}
function Ir(t2) {
  return t2 == null ? Ha : function() {
    return this.querySelector(t2);
  };
}
function Ka(t2) {
  typeof t2 != "function" && (t2 = Ir(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = new Array(u), c, l, s = 0; s < u; ++s)
      (c = o[s]) && (l = t2.call(c, c.__data__, s, o)) && ("__data__" in c && (l.__data__ = c.__data__), a[s] = l);
  return new mt(r, this._parents);
}
function Qa(t2) {
  return t2 == null ? [] : Array.isArray(t2) ? t2 : Array.from(t2);
}
function Ja() {
  return [];
}
function bo(t2) {
  return t2 == null ? Ja : function() {
    return this.querySelectorAll(t2);
  };
}
function ts(t2) {
  return function() {
    return Qa(t2.apply(this, arguments));
  };
}
function ns(t2) {
  typeof t2 == "function" ? t2 = ts(t2) : t2 = bo(t2);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var u = n[o], a = u.length, c, l = 0; l < a; ++l)
      (c = u[l]) && (r.push(t2.call(c, c.__data__, l, u)), i.push(c));
  return new mt(r, i);
}
function qo(t2) {
  return function() {
    return this.matches(t2);
  };
}
function jo(t2) {
  return function(n) {
    return n.matches(t2);
  };
}
var es = Array.prototype.find;
function rs(t2) {
  return function() {
    return es.call(this.children, t2);
  };
}
function is() {
  return this.firstElementChild;
}
function os(t2) {
  return this.select(t2 == null ? is : rs(typeof t2 == "function" ? t2 : jo(t2)));
}
var us = Array.prototype.filter;
function as() {
  return Array.from(this.children);
}
function ss(t2) {
  return function() {
    return us.call(this.children, t2);
  };
}
function cs(t2) {
  return this.selectAll(t2 == null ? as : ss(typeof t2 == "function" ? t2 : jo(t2)));
}
function ls(t2) {
  typeof t2 != "function" && (t2 = qo(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = [], c, l = 0; l < u; ++l)
      (c = o[l]) && t2.call(c, c.__data__, l, o) && a.push(c);
  return new mt(r, this._parents);
}
function Xo(t2) {
  return new Array(t2.length);
}
function fs() {
  return new mt(this._enter || this._groups.map(Xo), this._parents);
}
function Ee(t2, n) {
  this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = n;
}
Ee.prototype = {
  constructor: Ee,
  appendChild: function(t2) {
    return this._parent.insertBefore(t2, this._next);
  },
  insertBefore: function(t2, n) {
    return this._parent.insertBefore(t2, n);
  },
  querySelector: function(t2) {
    return this._parent.querySelector(t2);
  },
  querySelectorAll: function(t2) {
    return this._parent.querySelectorAll(t2);
  }
};
function hs(t2) {
  return function() {
    return t2;
  };
}
function ps(t2, n, e, r, i, o) {
  for (var u = 0, a, c = n.length, l = o.length; u < l; ++u)
    (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new Ee(t2, o[u]);
  for (; u < c; ++u)
    (a = n[u]) && (i[u] = a);
}
function vs(t2, n, e, r, i, o, u) {
  var a, c, l = /* @__PURE__ */ new Map(), s = n.length, f = o.length, h = new Array(s), p;
  for (a = 0; a < s; ++a)
    (c = n[a]) && (h[a] = p = u.call(c, c.__data__, a, n) + "", l.has(p) ? i[a] = c : l.set(p, c));
  for (a = 0; a < f; ++a)
    p = u.call(t2, o[a], a, o) + "", (c = l.get(p)) ? (r[a] = c, c.__data__ = o[a], l.delete(p)) : e[a] = new Ee(t2, o[a]);
  for (a = 0; a < s; ++a)
    (c = n[a]) && l.get(h[a]) === c && (i[a] = c);
}
function gs(t2) {
  return t2.__data__;
}
function ds(t2, n) {
  if (!arguments.length) return Array.from(this, gs);
  var e = n ? vs : ps, r = this._parents, i = this._groups;
  typeof t2 != "function" && (t2 = hs(t2));
  for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), l = 0; l < o; ++l) {
    var s = r[l], f = i[l], h = f.length, p = ms(t2.call(s, s && s.__data__, l, r)), v = p.length, E = a[l] = new Array(v), S = u[l] = new Array(v), y = c[l] = new Array(h);
    e(s, f, E, S, y, p, n);
    for (var M = 0, m = 0, _, x; M < v; ++M)
      if (_ = E[M]) {
        for (M >= m && (m = M + 1); !(x = S[m]) && ++m < v; ) ;
        _._next = x || null;
      }
  }
  return u = new mt(u, r), u._enter = a, u._exit = c, u;
}
function ms(t2) {
  return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
}
function ys() {
  return new mt(this._exit || this._groups.map(Xo), this._parents);
}
function ws(t2, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t2 == "function" ? (r = t2(r), r && (r = r.selection())) : r = r.append(t2 + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function _s(t2) {
  for (var n = t2.selection ? t2.selection() : t2, e = this._groups, r = n._groups, i = e.length, o = r.length, u = Math.min(i, o), a = new Array(i), c = 0; c < u; ++c)
    for (var l = e[c], s = r[c], f = l.length, h = a[c] = new Array(f), p, v = 0; v < f; ++v)
      (p = l[v] || s[v]) && (h[v] = p);
  for (; c < i; ++c)
    a[c] = e[c];
  return new mt(a, this._parents);
}
function Es() {
  for (var t2 = this._groups, n = -1, e = t2.length; ++n < e; )
    for (var r = t2[n], i = r.length - 1, o = r[i], u; --i >= 0; )
      (u = r[i]) && (o && u.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(u, o), o = u);
  return this;
}
function Ss(t2) {
  t2 || (t2 = Ms);
  function n(f, h) {
    return f && h ? t2(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var u = e[o], a = u.length, c = i[o] = new Array(a), l, s = 0; s < a; ++s)
      (l = u[s]) && (c[s] = l);
    c.sort(n);
  }
  return new mt(i, this._parents).order();
}
function Ms(t2, n) {
  return t2 < n ? -1 : t2 > n ? 1 : t2 >= n ? 0 : NaN;
}
function xs() {
  var t2 = arguments[0];
  return arguments[0] = this, t2.apply(null, arguments), this;
}
function Ps() {
  return Array.from(this);
}
function Ns() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, o = r.length; i < o; ++i) {
      var u = r[i];
      if (u) return u;
    }
  return null;
}
function $s() {
  let t2 = 0;
  for (const n of this) ++t2;
  return t2;
}
function As() {
  return !this.node();
}
function Ts(t2) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, u = i.length, a; o < u; ++o)
      (a = i[o]) && t2.call(a, a.__data__, o, i);
  return this;
}
function ks(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function Rs(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function Cs(t2, n) {
  return function() {
    this.setAttribute(t2, n);
  };
}
function zs(t2, n) {
  return function() {
    this.setAttributeNS(t2.space, t2.local, n);
  };
}
function Os(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t2) : this.setAttribute(t2, e);
  };
}
function Ls(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e);
  };
}
function Fs(t2, n) {
  var e = $e(t2);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Rs : ks : typeof n == "function" ? e.local ? Ls : Os : e.local ? zs : Cs)(e, n));
}
function Go(t2) {
  return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
}
function Is(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function Ds(t2, n, e) {
  return function() {
    this.style.setProperty(t2, n, e);
  };
}
function bs(t2, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t2) : this.style.setProperty(t2, r, e);
  };
}
function qs(t2, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Is : typeof n == "function" ? bs : Ds)(t2, n, e ?? "")) : rn(this.node(), t2);
}
function rn(t2, n) {
  return t2.style.getPropertyValue(n) || Go(t2).getComputedStyle(t2, null).getPropertyValue(n);
}
function js(t2) {
  return function() {
    delete this[t2];
  };
}
function Xs(t2, n) {
  return function() {
    this[t2] = n;
  };
}
function Gs(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t2] : this[t2] = e;
  };
}
function Zs(t2, n) {
  return arguments.length > 1 ? this.each((n == null ? js : typeof n == "function" ? Gs : Xs)(t2, n)) : this.node()[t2];
}
function Zo(t2) {
  return t2.trim().split(/^|\s+/);
}
function Dr(t2) {
  return t2.classList || new Bo(t2);
}
function Bo(t2) {
  this._node = t2, this._names = Zo(t2.getAttribute("class") || "");
}
Bo.prototype = {
  add: function(t2) {
    var n = this._names.indexOf(t2);
    n < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t2) {
    var n = this._names.indexOf(t2);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t2) {
    return this._names.indexOf(t2) >= 0;
  }
};
function Yo(t2, n) {
  for (var e = Dr(t2), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Wo(t2, n) {
  for (var e = Dr(t2), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Bs(t2) {
  return function() {
    Yo(this, t2);
  };
}
function Ys(t2) {
  return function() {
    Wo(this, t2);
  };
}
function Ws(t2, n) {
  return function() {
    (n.apply(this, arguments) ? Yo : Wo)(this, t2);
  };
}
function Us(t2, n) {
  var e = Zo(t2 + "");
  if (arguments.length < 2) {
    for (var r = Dr(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return false;
    return true;
  }
  return this.each((typeof n == "function" ? Ws : n ? Bs : Ys)(e, n));
}
function Vs() {
  this.textContent = "";
}
function Hs(t2) {
  return function() {
    this.textContent = t2;
  };
}
function Ks(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Qs(t2) {
  return arguments.length ? this.each(t2 == null ? Vs : (typeof t2 == "function" ? Ks : Hs)(t2)) : this.node().textContent;
}
function Js() {
  this.innerHTML = "";
}
function tc(t2) {
  return function() {
    this.innerHTML = t2;
  };
}
function nc(t2) {
  return function() {
    var n = t2.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ec(t2) {
  return arguments.length ? this.each(t2 == null ? Js : (typeof t2 == "function" ? nc : tc)(t2)) : this.node().innerHTML;
}
function rc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ic() {
  return this.each(rc);
}
function oc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function uc() {
  return this.each(oc);
}
function ac(t2) {
  var n = typeof t2 == "function" ? t2 : Do(t2);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function sc() {
  return null;
}
function cc(t2, n) {
  var e = typeof t2 == "function" ? t2 : Do(t2), r = n == null ? sc : typeof n == "function" ? n : Ir(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lc() {
  var t2 = this.parentNode;
  t2 && t2.removeChild(this);
}
function fc() {
  return this.each(lc);
}
function hc() {
  var t2 = this.cloneNode(false), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function pc() {
  var t2 = this.cloneNode(true), n = this.parentNode;
  return n ? n.insertBefore(t2, this.nextSibling) : t2;
}
function vc(t2) {
  return this.select(t2 ? pc : hc);
}
function gc(t2) {
  return arguments.length ? this.property("__data__", t2) : this.node().__data__;
}
function dc(t2) {
  return function(n) {
    t2.call(this, n, this.__data__);
  };
}
function mc(t2) {
  return t2.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function yc(t2) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t2.type || o.type === t2.type) && o.name === t2.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function wc(t2, n, e) {
  return function() {
    var r = this.__on, i, o = dc(n);
    if (r) {
      for (var u = 0, a = r.length; u < a; ++u)
        if ((i = r[u]).type === t2.type && i.name === t2.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t2.type, o, e), i = { type: t2.type, name: t2.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function _c(t2, n, e) {
  var r = mc(t2 + ""), i, o = r.length, u;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, s; c < l; ++c)
        for (i = 0, s = a[c]; i < o; ++i)
          if ((u = r[i]).type === s.type && u.name === s.name)
            return s.value;
    }
    return;
  }
  for (a = n ? wc : yc, i = 0; i < o; ++i) this.each(a(r[i], n, e));
  return this;
}
function Uo(t2, n, e) {
  var r = Go(t2), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, false, false)), t2.dispatchEvent(i);
}
function Ec(t2, n) {
  return function() {
    return Uo(this, t2, n);
  };
}
function Sc(t2, n) {
  return function() {
    return Uo(this, t2, n.apply(this, arguments));
  };
}
function Mc(t2, n) {
  return this.each((typeof n == "function" ? Sc : Ec)(t2, n));
}
function* xc() {
  for (var t2 = this._groups, n = 0, e = t2.length; n < e; ++n)
    for (var r = t2[n], i = 0, o = r.length, u; i < o; ++i)
      (u = r[i]) && (yield u);
}
var Vo = [null];
function mt(t2, n) {
  this._groups = t2, this._parents = n;
}
function zn() {
  return new mt([[document.documentElement]], Vo);
}
function Pc() {
  return this;
}
mt.prototype = zn.prototype = {
  constructor: mt,
  select: Ka,
  selectAll: ns,
  selectChild: os,
  selectChildren: cs,
  filter: ls,
  data: ds,
  enter: fs,
  exit: ys,
  join: ws,
  merge: _s,
  selection: Pc,
  order: Es,
  sort: Ss,
  call: xs,
  nodes: Ps,
  node: Ns,
  size: $s,
  empty: As,
  each: Ts,
  attr: Fs,
  style: qs,
  property: Zs,
  classed: Us,
  text: Qs,
  html: ec,
  raise: ic,
  lower: uc,
  append: ac,
  insert: cc,
  remove: fc,
  clone: vc,
  datum: gc,
  on: _c,
  dispatch: Mc,
  [Symbol.iterator]: xc
};
function jt(t2) {
  return typeof t2 == "string" ? new mt([[document.querySelector(t2)]], [document.documentElement]) : new mt([[t2]], Vo);
}
function Nc(t2) {
  let n;
  for (; n = t2.sourceEvent; ) t2 = n;
  return t2;
}
function Xt(t2, n) {
  if (t2 = Nc(t2), n === void 0 && (n = t2.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t2.clientX, r.y = t2.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t2.clientX - i.left - n.clientLeft, t2.clientY - i.top - n.clientTop];
    }
  }
  return [t2.pageX, t2.pageY];
}
var $c = { value: () => {
} };
function br() {
  for (var t2 = 0, n = arguments.length, e = {}, r; t2 < n; ++t2) {
    if (!(r = arguments[t2] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Yn(e);
}
function Yn(t2) {
  this._ = t2;
}
function Ac(t2, n) {
  return t2.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Yn.prototype = br.prototype = {
  constructor: Yn,
  on: function(t2, n) {
    var e = this._, r = Ac(t2 + "", e), i, o = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++o < u; ) if ((i = (t2 = r[o]).type) && (i = Tc(e[i], t2.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < u; )
      if (i = (t2 = r[o]).type) e[i] = Li(e[i], t2.name, n);
      else if (n == null) for (i in e) e[i] = Li(e[i], t2.name, null);
    return this;
  },
  copy: function() {
    var t2 = {}, n = this._;
    for (var e in n) t2[e] = n[e].slice();
    return new Yn(t2);
  },
  call: function(t2, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t2)) throw new Error("unknown type: " + t2);
    for (o = this._[t2], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t2, n, e) {
    if (!this._.hasOwnProperty(t2)) throw new Error("unknown type: " + t2);
    for (var r = this._[t2], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Tc(t2, n) {
  for (var e = 0, r = t2.length, i; e < r; ++e)
    if ((i = t2[e]).name === n)
      return i.value;
}
function Li(t2, n, e) {
  for (var r = 0, i = t2.length; r < i; ++r)
    if (t2[r].name === n) {
      t2[r] = $c, t2 = t2.slice(0, r).concat(t2.slice(r + 1));
      break;
    }
  return e != null && t2.push({ name: n, value: e }), t2;
}
const hr = { capture: true, passive: false };
function pr(t2) {
  t2.preventDefault(), t2.stopImmediatePropagation();
}
function kc(t2) {
  var n = t2.document.documentElement, e = jt(t2).on("dragstart.drag", pr, hr);
  "onselectstart" in n ? e.on("selectstart.drag", pr, hr) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Rc(t2, n) {
  var e = t2.document.documentElement, r = jt(t2).on("dragstart.drag", null);
  n && (r.on("click.drag", pr, hr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
var on = 0, dn = 0, sn = 0, Ho = 1e3, Se, mn, Me = 0, Wt = 0, Ae = 0, An = typeof performance == "object" && performance.now ? performance : Date, Ko = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
  setTimeout(t2, 17);
};
function qr() {
  return Wt || (Ko(Cc), Wt = An.now() + Ae);
}
function Cc() {
  Wt = 0;
}
function xe() {
  this._call = this._time = this._next = null;
}
xe.prototype = Qo.prototype = {
  constructor: xe,
  restart: function(t2, n, e) {
    if (typeof t2 != "function") throw new TypeError("callback is not a function");
    e = (e == null ? qr() : +e) + (n == null ? 0 : +n), !this._next && mn !== this && (mn ? mn._next = this : Se = this, mn = this), this._call = t2, this._time = e, vr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, vr());
  }
};
function Qo(t2, n, e) {
  var r = new xe();
  return r.restart(t2, n, e), r;
}
function zc() {
  qr(), ++on;
  for (var t2 = Se, n; t2; )
    (n = Wt - t2._time) >= 0 && t2._call.call(void 0, n), t2 = t2._next;
  --on;
}
function Fi() {
  Wt = (Me = An.now()) + Ae, on = dn = 0;
  try {
    zc();
  } finally {
    on = 0, Lc(), Wt = 0;
  }
}
function Oc() {
  var t2 = An.now(), n = t2 - Me;
  n > Ho && (Ae -= n, Me = t2);
}
function Lc() {
  for (var t2, n = Se, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t2 = n, n = n._next) : (e = n._next, n._next = null, n = t2 ? t2._next = e : Se = e);
  mn = t2, vr(r);
}
function vr(t2) {
  if (!on) {
    dn && (dn = clearTimeout(dn));
    var n = t2 - Wt;
    n > 24 ? (t2 < 1 / 0 && (dn = setTimeout(Fi, t2 - An.now() - Ae)), sn && (sn = clearInterval(sn))) : (sn || (Me = An.now(), sn = setInterval(Oc, Ho)), on = 1, Ko(Fi));
  }
}
function Ii(t2, n, e) {
  var r = new xe();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t2(i + n);
  }, n, e), r;
}
var Fc = br("start", "end", "cancel", "interrupt"), Ic = [], Jo = 0, Di = 1, gr = 2, Wn = 3, bi = 4, dr = 5, Un = 6;
function Te(t2, n, e, r, i, o) {
  var u = t2.__transition;
  if (!u) t2.__transition = {};
  else if (e in u) return;
  Dc(t2, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Fc,
    tween: Ic,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Jo
  });
}
function jr(t2, n) {
  var e = xt(t2, n);
  if (e.state > Jo) throw new Error("too late; already scheduled");
  return e;
}
function Tt(t2, n) {
  var e = xt(t2, n);
  if (e.state > Wn) throw new Error("too late; already running");
  return e;
}
function xt(t2, n) {
  var e = t2.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Dc(t2, n, e) {
  var r = t2.__transition, i;
  r[n] = e, e.timer = Qo(o, 0, e.time);
  function o(l) {
    e.state = Di, e.timer.restart(u, e.delay, e.time), e.delay <= l && u(l - e.delay);
  }
  function u(l) {
    var s, f, h, p;
    if (e.state !== Di) return c();
    for (s in r)
      if (p = r[s], p.name === e.name) {
        if (p.state === Wn) return Ii(u);
        p.state === bi ? (p.state = Un, p.timer.stop(), p.on.call("interrupt", t2, t2.__data__, p.index, p.group), delete r[s]) : +s < n && (p.state = Un, p.timer.stop(), p.on.call("cancel", t2, t2.__data__, p.index, p.group), delete r[s]);
      }
    if (Ii(function() {
      e.state === Wn && (e.state = bi, e.timer.restart(a, e.delay, e.time), a(l));
    }), e.state = gr, e.on.call("start", t2, t2.__data__, e.index, e.group), e.state === gr) {
      for (e.state = Wn, i = new Array(h = e.tween.length), s = 0, f = -1; s < h; ++s)
        (p = e.tween[s].value.call(t2, t2.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function a(l) {
    for (var s = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(c), e.state = dr, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t2, s);
    e.state === dr && (e.on.call("end", t2, t2.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Un, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t2.__transition;
  }
}
function Vn(t2, n) {
  var e = t2.__transition, r, i, o = true, u;
  if (e) {
    n = n == null ? null : n + "";
    for (u in e) {
      if ((r = e[u]).name !== n) {
        o = false;
        continue;
      }
      i = r.state > gr && r.state < dr, r.state = Un, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t2, t2.__data__, r.index, r.group), delete e[u];
    }
    o && delete t2.__transition;
  }
}
function bc(t2) {
  return this.each(function() {
    Vn(this, t2);
  });
}
function qc(t2, n) {
  var e, r;
  return function() {
    var i = Tt(this, t2), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var u = 0, a = r.length; u < a; ++u)
        if (r[u].name === n) {
          r = r.slice(), r.splice(u, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function jc(t2, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Tt(this, t2), u = o.tween;
    if (u !== r) {
      i = (r = u).slice();
      for (var a = { name: n, value: e }, c = 0, l = i.length; c < l; ++c)
        if (i[c].name === n) {
          i[c] = a;
          break;
        }
      c === l && i.push(a);
    }
    o.tween = i;
  };
}
function Xc(t2, n) {
  var e = this._id;
  if (t2 += "", arguments.length < 2) {
    for (var r = xt(this.node(), e).tween, i = 0, o = r.length, u; i < o; ++i)
      if ((u = r[i]).name === t2)
        return u.value;
    return null;
  }
  return this.each((n == null ? qc : jc)(e, t2, n));
}
function Xr(t2, n, e) {
  var r = t2._id;
  return t2.each(function() {
    var i = Tt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return xt(i, r).value[n];
  };
}
function tu(t2, n) {
  var e;
  return (typeof n == "number" ? n1 : n instanceof V ? T1 : (e = V(n)) ? (n = e, T1) : O2)(t2, n);
}
function Gc(t2) {
  return function() {
    this.removeAttribute(t2);
  };
}
function Zc(t2) {
  return function() {
    this.removeAttributeNS(t2.space, t2.local);
  };
}
function Bc(t2, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttribute(t2);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function Yc(t2, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttributeNS(t2.space, t2.local);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function Wc(t2, n, e) {
  var r, i, o;
  return function() {
    var u, a = e(this), c;
    return a == null ? void this.removeAttribute(t2) : (u = this.getAttribute(t2), c = a + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a)));
  };
}
function Uc(t2, n, e) {
  var r, i, o;
  return function() {
    var u, a = e(this), c;
    return a == null ? void this.removeAttributeNS(t2.space, t2.local) : (u = this.getAttributeNS(t2.space, t2.local), c = a + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a)));
  };
}
function Vc(t2, n) {
  var e = $e(t2), r = e === "transform" ? wu : tu;
  return this.attrTween(t2, typeof n == "function" ? (e.local ? Uc : Wc)(e, r, Xr(this, "attr." + t2, n)) : n == null ? (e.local ? Zc : Gc)(e) : (e.local ? Yc : Bc)(e, r, n));
}
function Hc(t2, n) {
  return function(e) {
    this.setAttribute(t2, n.call(this, e));
  };
}
function Kc(t2, n) {
  return function(e) {
    this.setAttributeNS(t2.space, t2.local, n.call(this, e));
  };
}
function Qc(t2, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Kc(t2, o)), e;
  }
  return i._value = n, i;
}
function Jc(t2, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Hc(t2, o)), e;
  }
  return i._value = n, i;
}
function tl(t2, n) {
  var e = "attr." + t2;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = $e(t2);
  return this.tween(e, (r.local ? Qc : Jc)(r, n));
}
function nl(t2, n) {
  return function() {
    jr(this, t2).delay = +n.apply(this, arguments);
  };
}
function el(t2, n) {
  return n = +n, function() {
    jr(this, t2).delay = n;
  };
}
function rl(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? nl : el)(n, t2)) : xt(this.node(), n).delay;
}
function il(t2, n) {
  return function() {
    Tt(this, t2).duration = +n.apply(this, arguments);
  };
}
function ol(t2, n) {
  return n = +n, function() {
    Tt(this, t2).duration = n;
  };
}
function ul(t2) {
  var n = this._id;
  return arguments.length ? this.each((typeof t2 == "function" ? il : ol)(n, t2)) : xt(this.node(), n).duration;
}
function al(t2, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Tt(this, t2).ease = n;
  };
}
function sl(t2) {
  var n = this._id;
  return arguments.length ? this.each(al(n, t2)) : xt(this.node(), n).ease;
}
function cl(t2, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Tt(this, t2).ease = e;
  };
}
function ll(t2) {
  if (typeof t2 != "function") throw new Error();
  return this.each(cl(this._id, t2));
}
function fl(t2) {
  typeof t2 != "function" && (t2 = qo(t2));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = [], c, l = 0; l < u; ++l)
      (c = o[l]) && t2.call(c, c.__data__, l, o) && a.push(c);
  return new Ft(r, this._parents, this._name, this._id);
}
function hl(t2) {
  if (t2._id !== this._id) throw new Error();
  for (var n = this._groups, e = t2._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
    for (var c = n[a], l = e[a], s = c.length, f = u[a] = new Array(s), h, p = 0; p < s; ++p)
      (h = c[p] || l[p]) && (f[p] = h);
  for (; a < r; ++a)
    u[a] = n[a];
  return new Ft(u, this._parents, this._name, this._id);
}
function pl(t2) {
  return (t2 + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function vl(t2, n, e) {
  var r, i, o = pl(n) ? jr : Tt;
  return function() {
    var u = o(this, t2), a = u.on;
    a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
  };
}
function gl(t2, n) {
  var e = this._id;
  return arguments.length < 2 ? xt(this.node(), e).on.on(t2) : this.each(vl(e, t2, n));
}
function dl(t2) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t2) return;
    n && n.removeChild(this);
  };
}
function ml() {
  return this.on("end.remove", dl(this._id));
}
function yl(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = Ir(t2));
  for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
    for (var a = r[u], c = a.length, l = o[u] = new Array(c), s, f, h = 0; h < c; ++h)
      (s = a[h]) && (f = t2.call(s, s.__data__, h, a)) && ("__data__" in s && (f.__data__ = s.__data__), l[h] = f, Te(l[h], n, e, h, l, xt(s, e)));
  return new Ft(o, this._parents, n, e);
}
function wl(t2) {
  var n = this._name, e = this._id;
  typeof t2 != "function" && (t2 = bo(t2));
  for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
    for (var c = r[a], l = c.length, s, f = 0; f < l; ++f)
      if (s = c[f]) {
        for (var h = t2.call(s, s.__data__, f, c), p, v = xt(s, e), E = 0, S = h.length; E < S; ++E)
          (p = h[E]) && Te(p, n, e, E, h, v);
        o.push(h), u.push(s);
      }
  return new Ft(o, u, n, e);
}
var _l = zn.prototype.constructor;
function El() {
  return new _l(this._groups, this._parents);
}
function Sl(t2, n) {
  var e, r, i;
  return function() {
    var o = rn(this, t2), u = (this.style.removeProperty(t2), rn(this, t2));
    return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
  };
}
function nu(t2) {
  return function() {
    this.style.removeProperty(t2);
  };
}
function Ml(t2, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = rn(this, t2);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function xl(t2, n, e) {
  var r, i, o;
  return function() {
    var u = rn(this, t2), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(t2), rn(this, t2))), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a));
  };
}
function Pl(t2, n) {
  var e, r, i, o = "style." + n, u = "end." + o, a;
  return function() {
    var c = Tt(this, t2), l = c.on, s = c.value[o] == null ? a || (a = nu(n)) : void 0;
    (l !== e || i !== s) && (r = (e = l).copy()).on(u, i = s), c.on = r;
  };
}
function Nl(t2, n, e) {
  var r = (t2 += "") == "transform" ? yu : tu;
  return n == null ? this.styleTween(t2, Sl(t2, r)).on("end.style." + t2, nu(t2)) : typeof n == "function" ? this.styleTween(t2, xl(t2, r, Xr(this, "style." + t2, n))).each(Pl(this._id, t2)) : this.styleTween(t2, Ml(t2, r, n), e).on("end.style." + t2, null);
}
function $l(t2, n, e) {
  return function(r) {
    this.style.setProperty(t2, n.call(this, r), e);
  };
}
function Al(t2, n, e) {
  var r, i;
  function o() {
    var u = n.apply(this, arguments);
    return u !== i && (r = (i = u) && $l(t2, u, e)), r;
  }
  return o._value = n, o;
}
function Tl(t2, n, e) {
  var r = "style." + (t2 += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Al(t2, n, e ?? ""));
}
function kl(t2) {
  return function() {
    this.textContent = t2;
  };
}
function Rl(t2) {
  return function() {
    var n = t2(this);
    this.textContent = n ?? "";
  };
}
function Cl(t2) {
  return this.tween("text", typeof t2 == "function" ? Rl(Xr(this, "text", t2)) : kl(t2 == null ? "" : t2 + ""));
}
function zl(t2) {
  return function(n) {
    this.textContent = t2.call(this, n);
  };
}
function Ol(t2) {
  var n, e;
  function r() {
    var i = t2.apply(this, arguments);
    return i !== e && (n = (e = i) && zl(i)), n;
  }
  return r._value = t2, r;
}
function Ll(t2) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t2 == null) return this.tween(n, null);
  if (typeof t2 != "function") throw new Error();
  return this.tween(n, Ol(t2));
}
function Fl() {
  for (var t2 = this._name, n = this._id, e = eu(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, c, l = 0; l < a; ++l)
      if (c = u[l]) {
        var s = xt(c, n);
        Te(c, t2, e, l, u, {
          time: s.time + s.delay + s.duration,
          delay: 0,
          duration: s.duration,
          ease: s.ease
        });
      }
  return new Ft(r, this._parents, t2, e);
}
function Il() {
  var t2, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, u) {
    var a = { value: u }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Tt(this, r), s = l.on;
      s !== t2 && (n = (t2 = s).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(c)), l.on = n;
    }), i === 0 && o();
  });
}
var Dl = 0;
function Ft(t2, n, e, r) {
  this._groups = t2, this._parents = n, this._name = e, this._id = r;
}
function eu() {
  return ++Dl;
}
var Rt = zn.prototype;
Ft.prototype = {
  constructor: Ft,
  select: yl,
  selectAll: wl,
  selectChild: Rt.selectChild,
  selectChildren: Rt.selectChildren,
  filter: fl,
  merge: hl,
  selection: El,
  transition: Fl,
  call: Rt.call,
  nodes: Rt.nodes,
  node: Rt.node,
  size: Rt.size,
  empty: Rt.empty,
  each: Rt.each,
  on: gl,
  attr: Vc,
  attrTween: tl,
  style: Nl,
  styleTween: Tl,
  text: Cl,
  textTween: Ll,
  remove: ml,
  tween: Xc,
  delay: rl,
  duration: ul,
  ease: sl,
  easeVarying: ll,
  end: Il,
  [Symbol.iterator]: Rt[Symbol.iterator]
};
function bl(t2) {
  return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
}
var ql = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bl
};
function jl(t2, n) {
  for (var e; !(e = t2.__transition) || !(e = e[n]); )
    if (!(t2 = t2.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Xl(t2) {
  var n, e;
  t2 instanceof Ft ? (n = t2._id, t2 = t2._name) : (n = eu(), (e = ql).time = qr(), t2 = t2 == null ? null : t2 + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, c, l = 0; l < a; ++l)
      (c = u[l]) && Te(c, t2, n, l, u, e || jl(c, n));
  return new Ft(r, this._parents, t2, n);
}
zn.prototype.interrupt = bc;
zn.prototype.transition = Xl;
const Xn = (t2) => () => t2;
function Gl(t2, {
  sourceEvent: n,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t2, enumerable: true, configurable: true },
    sourceEvent: { value: n, enumerable: true, configurable: true },
    target: { value: e, enumerable: true, configurable: true },
    transform: { value: r, enumerable: true, configurable: true },
    _: { value: i }
  });
}
function Ot(t2, n, e) {
  this.k = t2, this.x = n, this.y = e;
}
Ot.prototype = {
  constructor: Ot,
  scale: function(t2) {
    return t2 === 1 ? this : new Ot(this.k * t2, this.x, this.y);
  },
  translate: function(t2, n) {
    return t2 === 0 & n === 0 ? this : new Ot(this.k, this.x + this.k * t2, this.y + this.k * n);
  },
  apply: function(t2) {
    return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
  },
  applyX: function(t2) {
    return t2 * this.k + this.x;
  },
  applyY: function(t2) {
    return t2 * this.k + this.y;
  },
  invert: function(t2) {
    return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
  },
  invertX: function(t2) {
    return (t2 - this.x) / this.k;
  },
  invertY: function(t2) {
    return (t2 - this.y) / this.k;
  },
  rescaleX: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
  },
  rescaleY: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Gr = new Ot(1, 0, 0);
Ot.prototype;
function De(t2) {
  t2.stopImmediatePropagation();
}
function cn(t2) {
  t2.preventDefault(), t2.stopImmediatePropagation();
}
function Zl(t2) {
  return (!t2.ctrlKey || t2.type === "wheel") && !t2.button;
}
function Bl() {
  var t2 = this;
  return t2 instanceof SVGElement ? (t2 = t2.ownerSVGElement || t2, t2.hasAttribute("viewBox") ? (t2 = t2.viewBox.baseVal, [[t2.x, t2.y], [t2.x + t2.width, t2.y + t2.height]]) : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]]) : [[0, 0], [t2.clientWidth, t2.clientHeight]];
}
function qi() {
  return this.__zoom || Gr;
}
function Yl(t2) {
  return -t2.deltaY * (t2.deltaMode === 1 ? 0.05 : t2.deltaMode ? 1 : 2e-3) * (t2.ctrlKey ? 10 : 1);
}
function Wl() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ul(t2, n, e) {
  var r = t2.invertX(n[0][0]) - e[0][0], i = t2.invertX(n[1][0]) - e[1][0], o = t2.invertY(n[0][1]) - e[0][1], u = t2.invertY(n[1][1]) - e[1][1];
  return t2.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
  );
}
function Vl() {
  var t2 = Zl, n = Bl, e = Ul, r = Yl, i = Wl, o = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Mu, l = br("start", "zoom", "end"), s, f, h, p = 500, v = 150, E = 0, S = 10;
  function y(g) {
    g.property("__zoom", qi).on("wheel.zoom", F, { passive: false }).on("mousedown.zoom", D).on("dblclick.zoom", b).filter(i).on("touchstart.zoom", L).on("touchmove.zoom", G).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(g, d, w, $) {
    var k = g.selection ? g.selection() : g;
    k.property("__zoom", qi), g !== k ? x(g, d, w, $) : k.interrupt().each(function() {
      N(this, arguments).event($).start().zoom(null, typeof d == "function" ? d.apply(this, arguments) : d).end();
    });
  }, y.scaleBy = function(g, d, w, $) {
    y.scaleTo(g, function() {
      var k = this.__zoom.k, T = typeof d == "function" ? d.apply(this, arguments) : d;
      return k * T;
    }, w, $);
  }, y.scaleTo = function(g, d, w, $) {
    y.transform(g, function() {
      var k = n.apply(this, arguments), T = this.__zoom, I = w == null ? _(k) : typeof w == "function" ? w.apply(this, arguments) : w, q = T.invert(I), Z = typeof d == "function" ? d.apply(this, arguments) : d;
      return e(m(M(T, Z), I, q), k, u);
    }, w, $);
  }, y.translateBy = function(g, d, w, $) {
    y.transform(g, function() {
      return e(this.__zoom.translate(
        typeof d == "function" ? d.apply(this, arguments) : d,
        typeof w == "function" ? w.apply(this, arguments) : w
      ), n.apply(this, arguments), u);
    }, null, $);
  }, y.translateTo = function(g, d, w, $, k) {
    y.transform(g, function() {
      var T = n.apply(this, arguments), I = this.__zoom, q = $ == null ? _(T) : typeof $ == "function" ? $.apply(this, arguments) : $;
      return e(Gr.translate(q[0], q[1]).scale(I.k).translate(
        typeof d == "function" ? -d.apply(this, arguments) : -d,
        typeof w == "function" ? -w.apply(this, arguments) : -w
      ), T, u);
    }, $, k);
  };
  function M(g, d) {
    return d = Math.max(o[0], Math.min(o[1], d)), d === g.k ? g : new Ot(d, g.x, g.y);
  }
  function m(g, d, w) {
    var $ = d[0] - w[0] * g.k, k = d[1] - w[1] * g.k;
    return $ === g.x && k === g.y ? g : new Ot(g.k, $, k);
  }
  function _(g) {
    return [(+g[0][0] + +g[1][0]) / 2, (+g[0][1] + +g[1][1]) / 2];
  }
  function x(g, d, w, $) {
    g.on("start.zoom", function() {
      N(this, arguments).event($).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event($).end();
    }).tween("zoom", function() {
      var k = this, T = arguments, I = N(k, T).event($), q = n.apply(k, T), Z = w == null ? _(q) : typeof w == "function" ? w.apply(k, T) : w, U = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), Y = k.__zoom, V2 = typeof d == "function" ? d.apply(k, T) : d, pt = c(Y.invert(Z).concat(U / Y.k), V2.invert(Z).concat(U / V2.k));
      return function(vt) {
        if (vt === 1) vt = V2;
        else {
          var yt = pt(vt), tt = U / yt[2];
          vt = new Ot(tt, Z[0] - yt[0] * tt, Z[1] - yt[1] * tt);
        }
        I.zoom(null, vt);
      };
    });
  }
  function N(g, d, w) {
    return !w && g.__zooming || new C(g, d);
  }
  function C(g, d) {
    this.that = g, this.args = d, this.active = 0, this.sourceEvent = null, this.extent = n.apply(g, d), this.taps = 0;
  }
  C.prototype = {
    event: function(g) {
      return g && (this.sourceEvent = g), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(g, d) {
      return this.mouse && g !== "mouse" && (this.mouse[1] = d.invert(this.mouse[0])), this.touch0 && g !== "touch" && (this.touch0[1] = d.invert(this.touch0[0])), this.touch1 && g !== "touch" && (this.touch1[1] = d.invert(this.touch1[0])), this.that.__zoom = d, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(g) {
      var d = jt(this.that).datum();
      l.call(
        g,
        this.that,
        new Gl(g, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: l
        }),
        d
      );
    }
  };
  function F(g, ...d) {
    if (!t2.apply(this, arguments)) return;
    var w = N(this, d).event(g), $ = this.__zoom, k = Math.max(o[0], Math.min(o[1], $.k * Math.pow(2, r.apply(this, arguments)))), T = Xt(g);
    if (w.wheel)
      (w.mouse[0][0] !== T[0] || w.mouse[0][1] !== T[1]) && (w.mouse[1] = $.invert(w.mouse[0] = T)), clearTimeout(w.wheel);
    else {
      if ($.k === k) return;
      w.mouse = [T, $.invert(T)], Vn(this), w.start();
    }
    cn(g), w.wheel = setTimeout(I, v), w.zoom("mouse", e(m(M($, k), w.mouse[0], w.mouse[1]), w.extent, u));
    function I() {
      w.wheel = null, w.end();
    }
  }
  function D(g, ...d) {
    if (h || !t2.apply(this, arguments)) return;
    var w = g.currentTarget, $ = N(this, d, true).event(g), k = jt(g.view).on("mousemove.zoom", Z, true).on("mouseup.zoom", U, true), T = Xt(g, w), I = g.clientX, q = g.clientY;
    kc(g.view), De(g), $.mouse = [T, this.__zoom.invert(T)], Vn(this), $.start();
    function Z(Y) {
      if (cn(Y), !$.moved) {
        var V2 = Y.clientX - I, pt = Y.clientY - q;
        $.moved = V2 * V2 + pt * pt > E;
      }
      $.event(Y).zoom("mouse", e(m($.that.__zoom, $.mouse[0] = Xt(Y, w), $.mouse[1]), $.extent, u));
    }
    function U(Y) {
      k.on("mousemove.zoom mouseup.zoom", null), Rc(Y.view, $.moved), cn(Y), $.event(Y).end();
    }
  }
  function b(g, ...d) {
    if (t2.apply(this, arguments)) {
      var w = this.__zoom, $ = Xt(g.changedTouches ? g.changedTouches[0] : g, this), k = w.invert($), T = w.k * (g.shiftKey ? 0.5 : 2), I = e(m(M(w, T), $, k), n.apply(this, d), u);
      cn(g), a > 0 ? jt(this).transition().duration(a).call(x, I, $, g) : jt(this).call(y.transform, I, $, g);
    }
  }
  function L(g, ...d) {
    if (t2.apply(this, arguments)) {
      var w = g.touches, $ = w.length, k = N(this, d, g.changedTouches.length === $).event(g), T, I, q, Z;
      for (De(g), I = 0; I < $; ++I)
        q = w[I], Z = Xt(q, this), Z = [Z, this.__zoom.invert(Z), q.identifier], k.touch0 ? !k.touch1 && k.touch0[2] !== Z[2] && (k.touch1 = Z, k.taps = 0) : (k.touch0 = Z, T = true, k.taps = 1 + !!s);
      s && (s = clearTimeout(s)), T && (k.taps < 2 && (f = Z[0], s = setTimeout(function() {
        s = null;
      }, p)), Vn(this), k.start());
    }
  }
  function G(g, ...d) {
    if (this.__zooming) {
      var w = N(this, d).event(g), $ = g.changedTouches, k = $.length, T, I, q, Z;
      for (cn(g), T = 0; T < k; ++T)
        I = $[T], q = Xt(I, this), w.touch0 && w.touch0[2] === I.identifier ? w.touch0[0] = q : w.touch1 && w.touch1[2] === I.identifier && (w.touch1[0] = q);
      if (I = w.that.__zoom, w.touch1) {
        var U = w.touch0[0], Y = w.touch0[1], V2 = w.touch1[0], pt = w.touch1[1], vt = (vt = V2[0] - U[0]) * vt + (vt = V2[1] - U[1]) * vt, yt = (yt = pt[0] - Y[0]) * yt + (yt = pt[1] - Y[1]) * yt;
        I = M(I, Math.sqrt(vt / yt)), q = [(U[0] + V2[0]) / 2, (U[1] + V2[1]) / 2], Z = [(Y[0] + pt[0]) / 2, (Y[1] + pt[1]) / 2];
      } else if (w.touch0) q = w.touch0[0], Z = w.touch0[1];
      else return;
      w.zoom("touch", e(m(I, q, Z), w.extent, u));
    }
  }
  function B(g, ...d) {
    if (this.__zooming) {
      var w = N(this, d).event(g), $ = g.changedTouches, k = $.length, T, I;
      for (De(g), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, p), T = 0; T < k; ++T)
        I = $[T], w.touch0 && w.touch0[2] === I.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === I.identifier && delete w.touch1;
      if (w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0) w.touch0[1] = this.__zoom.invert(w.touch0[0]);
      else if (w.end(), w.taps === 2 && (I = Xt(I, this), Math.hypot(f[0] - I[0], f[1] - I[1]) < S)) {
        var q = jt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Xn(+g), y) : r;
  }, y.filter = function(g) {
    return arguments.length ? (t2 = typeof g == "function" ? g : Xn(!!g), y) : t2;
  }, y.touchable = function(g) {
    return arguments.length ? (i = typeof g == "function" ? g : Xn(!!g), y) : i;
  }, y.extent = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Xn([[+g[0][0], +g[0][1]], [+g[1][0], +g[1][1]]]), y) : n;
  }, y.scaleExtent = function(g) {
    return arguments.length ? (o[0] = +g[0], o[1] = +g[1], y) : [o[0], o[1]];
  }, y.translateExtent = function(g) {
    return arguments.length ? (u[0][0] = +g[0][0], u[1][0] = +g[1][0], u[0][1] = +g[0][1], u[1][1] = +g[1][1], y) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]];
  }, y.constrain = function(g) {
    return arguments.length ? (e = g, y) : e;
  }, y.duration = function(g) {
    return arguments.length ? (a = +g, y) : a;
  }, y.interpolate = function(g) {
    return arguments.length ? (c = g, y) : c;
  }, y.on = function() {
    var g = l.on.apply(l, arguments);
    return g === l ? y : g;
  }, y.clickDistance = function(g) {
    return arguments.length ? (E = (g = +g) * g, y) : Math.sqrt(E);
  }, y.tapDistance = function(g) {
    return arguments.length ? (S = +g, y) : S;
  }, y;
}
function Hl(t2, n) {
  var e = t2 == null ? null : typeof Symbol < "u" && t2[Symbol.iterator] || t2["@@iterator"];
  if (e != null) {
    var r, i, o, u, a = [], c = true, l = false;
    try {
      if (o = (e = e.call(t2)).next, n === 0) {
        if (Object(e) !== e) return;
        c = false;
      } else for (; !(c = (r = o.call(e)).done) && (a.push(r.value), a.length !== n); c = true) ;
    } catch (s) {
      l = true, i = s;
    } finally {
      try {
        if (!c && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (l) throw i;
      }
    }
    return a;
  }
}
function ji(t2, n) {
  var e = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t2);
    n && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t2, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Kt(t2) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ji(Object(e), true).forEach(function(r) {
      Kl(t2, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e)) : ji(Object(e)).forEach(function(r) {
      Object.defineProperty(t2, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t2;
}
function mr(t2) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mr(t2);
}
function Kl(t2, n, e) {
  return n = rf(n), n in t2 ? Object.defineProperty(t2, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t2[n] = e, t2;
}
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(t2) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t2[r] = e[r]);
    }
    return t2;
  }, ht.apply(this, arguments);
}
function Ql(t2, n) {
  if (t2 == null) return {};
  var e = {}, r = Object.keys(t2), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(n.indexOf(i) >= 0) && (e[i] = t2[i]);
  return e;
}
function Et(t2, n) {
  if (t2 == null) return {};
  var e = Ql(t2, n), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t2);
    for (i = 0; i < o.length; i++)
      r = o[i], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t2, r) && (e[r] = t2[r]);
  }
  return e;
}
function rt(t2, n) {
  return Jl(t2) || Hl(t2, n) || tf(t2, n) || nf();
}
function Jl(t2) {
  if (Array.isArray(t2)) return t2;
}
function tf(t2, n) {
  if (t2) {
    if (typeof t2 == "string") return Xi(t2, n);
    var e = Object.prototype.toString.call(t2).slice(8, -1);
    if (e === "Object" && t2.constructor && (e = t2.constructor.name), e === "Map" || e === "Set") return Array.from(t2);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Xi(t2, n);
  }
}
function Xi(t2, n) {
  (n == null || n > t2.length) && (n = t2.length);
  for (var e = 0, r = new Array(n); e < n; e++) r[e] = t2[e];
  return r;
}
function nf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ef(t2, n) {
  if (typeof t2 != "object" || t2 === null) return t2;
  var e = t2[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t2, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t2);
}
function rf(t2) {
  var n = ef(t2, "string");
  return typeof n == "symbol" ? n : String(n);
}
var of = ["width", "height", "projection", "projectionConfig"], uf = ko, af = Et(qa, ["geoPath"]), kt = reactExports.createContext(), sf = function(n) {
  var e = n.projectionConfig, r = e === void 0 ? {} : e, i = n.projection, o = i === void 0 ? "geoEqualEarth" : i, u = n.width, a = u === void 0 ? 800 : u, c = n.height, l = c === void 0 ? 600 : c, s = typeof o == "function";
  if (s) return o;
  var f = af[o]().translate([a / 2, l / 2]), h = [f.center ? "center" : null, f.rotate ? "rotate" : null, f.scale ? "scale" : null, f.parallels ? "parallels" : null];
  return h.forEach(function(p) {
    p && (f = f[p](r[p] || f[p]()));
  }), f;
}, ru = function(n) {
  var e = n.width, r = n.height, i = n.projection, o = n.projectionConfig, u = Et(n, of), a = o.center || [], c = rt(a, 2), l = c[0], s = c[1], f = o.rotate || [], h = rt(f, 3), p = h[0], v = h[1], E = h[2], S = o.parallels || [], y = rt(S, 2), M = y[0], m = y[1], _ = o.scale || null, x = reactExports.useMemo(function() {
    return sf({
      projectionConfig: {
        center: l || l === 0 || s || s === 0 ? [l, s] : null,
        rotate: p || p === 0 || v || v === 0 ? [p, v, E] : null,
        parallels: M || M === 0 || m || m === 0 ? [M, m] : null,
        scale: _
      },
      projection: i,
      width: e,
      height: r
    });
  }, [e, r, i, l, s, p, v, E, M, m, _]), N = reactExports.useCallback(x, [x]), C = reactExports.useMemo(function() {
    return {
      width: e,
      height: r,
      projection: N,
      path: uf().projection(N)
    };
  }, [e, r, N]);
  return /* @__PURE__ */ nt.createElement(kt.Provider, ht({
    value: C
  }, u));
};
ru.propTypes = {
  width: P.number,
  height: P.number,
  projection: P.oneOfType([P.string, P.func]),
  projectionConfig: P.object
};
var cf = ["width", "height", "projection", "projectionConfig", "className"], iu = reactExports.forwardRef(function(t2, n) {
  var e = t2.width, r = e === void 0 ? 800 : e, i = t2.height, o = i === void 0 ? 600 : i, u = t2.projection, a = u === void 0 ? "geoEqualEarth" : u, c = t2.projectionConfig, l = c === void 0 ? {} : c, s = t2.className, f = s === void 0 ? "" : s, h = Et(t2, cf);
  return /* @__PURE__ */ nt.createElement(ru, {
    width: r,
    height: o,
    projection: a,
    projectionConfig: l
  }, /* @__PURE__ */ nt.createElement("svg", ht({
    ref: n,
    viewBox: "0 0 ".concat(r, " ").concat(o),
    className: "rsm-svg ".concat(f)
  }, h)));
});
iu.displayName = "ComposableMap";
iu.propTypes = {
  width: P.number,
  height: P.number,
  projection: P.oneOfType([P.string, P.func]),
  projectionConfig: P.object,
  className: P.string
};
function Gi(t2) {
  return jt(t2);
}
function Zi(t2, n, e) {
  var r = (t2 * e.k - t2) / 2, i = (n * e.k - n) / 2;
  return [t2 / 2 - (r + e.x) / e.k, n / 2 - (i + e.y) / e.k];
}
function lf(t2) {
  return fetch(t2).then(function(n) {
    if (!n.ok)
      throw Error(n.statusText);
    return n.json();
  }).catch(function(n) {
    console.log("There was a problem when fetching the data: ", n);
  });
}
function Bi(t2, n) {
  var e = t2.type === "Topology";
  if (!e)
    return n ? n(t2.features || t2) : t2.features || t2;
  var r = Za(t2, t2.objects[Object.keys(t2.objects)[0]]).features;
  return n ? n(r) : r;
}
function Yi(t2) {
  var n = t2.type === "Topology";
  if (!n) return null;
  var e = zi(t2, t2.objects[Object.keys(t2.objects)[0]], function(i, o) {
    return i === o;
  }), r = zi(t2, t2.objects[Object.keys(t2.objects)[0]], function(i, o) {
    return i !== o;
  });
  return {
    outline: e,
    borders: r
  };
}
function ff(t2, n, e) {
  return t2 && n ? {
    outline: Kt(Kt({}, t2), {}, {
      rsmKey: "outline",
      svgPath: e(t2)
    }),
    borders: Kt(Kt({}, n), {}, {
      rsmKey: "borders",
      svgPath: e(n)
    })
  } : {};
}
function hf(t2, n) {
  return t2 ? t2.map(function(e, r) {
    return Kt(Kt({}, e), {}, {
      rsmKey: "geo-".concat(r),
      svgPath: n(e)
    });
  }) : [];
}
function pf() {
  var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 30, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 30, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5, r = Array.isArray(e) ? e : [e, e], i = t2 / 2 * r[0], o = n / 2 * r[1];
  return "M".concat(0, ",", 0, " Q", -t2 / 2 - i, ",").concat(-n / 2 + o, " ").concat(-t2, ",").concat(-n);
}
function vf(t2) {
  return typeof t2 == "string";
}
function gf(t2) {
  var n = t2.geography, e = t2.parseGeographies, r = reactExports.useContext(kt), i = r.path, o = reactExports.useState({}), u = rt(o, 2), a = u[0], c = u[1];
  reactExports.useEffect(function() {
    (typeof window > "u" ? "undefined" : mr(window)) !== "undefined" && n && (vf(n) ? lf(n).then(function(p) {
      p && c({
        geographies: Bi(p, e),
        mesh: Yi(p)
      });
    }) : c({
      geographies: Bi(n, e),
      mesh: Yi(n)
    }));
  }, [n, e]);
  var l = reactExports.useMemo(function() {
    var p = a.mesh || {}, v = ff(p.outline, p.borders, i);
    return {
      geographies: hf(a.geographies, i),
      outline: v.outline,
      borders: v.borders
    };
  }, [a, i]), s = l.geographies, f = l.outline, h = l.borders;
  return {
    geographies: s,
    outline: f,
    borders: h
  };
}
var df = ["geography", "children", "parseGeographies", "className"], ou = reactExports.forwardRef(function(t2, n) {
  var e = t2.geography, r = t2.children, i = t2.parseGeographies, o = t2.className, u = o === void 0 ? "" : o, a = Et(t2, df), c = reactExports.useContext(kt), l = c.path, s = c.projection, f = gf({
    geography: e,
    parseGeographies: i
  }), h = f.geographies, p = f.outline, v = f.borders;
  return /* @__PURE__ */ nt.createElement("g", ht({
    ref: n,
    className: "rsm-geographies ".concat(u)
  }, a), h && h.length > 0 && r({
    geographies: h,
    outline: p,
    borders: v,
    path: l,
    projection: s
  }));
});
ou.displayName = "Geographies";
ou.propTypes = {
  geography: P.oneOfType([P.string, P.object, P.array]),
  children: P.func,
  parseGeographies: P.func,
  className: P.string
};
var mf = ["geography", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"], Zr = reactExports.forwardRef(function(t2, n) {
  var e = t2.geography, r = t2.onMouseEnter, i = t2.onMouseLeave, o = t2.onMouseDown, u = t2.onMouseUp, a = t2.onFocus, c = t2.onBlur, l = t2.style, s = l === void 0 ? {} : l, f = t2.className, h = f === void 0 ? "" : f, p = Et(t2, mf), v = reactExports.useState(false), E = rt(v, 2), S = E[0], y = E[1], M = reactExports.useState(false), m = rt(M, 2), _ = m[0], x = m[1];
  function N(G) {
    x(true), r && r(G);
  }
  function C(G) {
    x(false), S && y(false), i && i(G);
  }
  function F(G) {
    x(true), a && a(G);
  }
  function D(G) {
    x(false), S && y(false), c && c(G);
  }
  function b(G) {
    y(true), o && o(G);
  }
  function L(G) {
    y(false), u && u(G);
  }
  return /* @__PURE__ */ nt.createElement("path", ht({
    ref: n,
    tabIndex: "0",
    className: "rsm-geography ".concat(h),
    d: e.svgPath,
    onMouseEnter: N,
    onMouseLeave: C,
    onFocus: F,
    onBlur: D,
    onMouseDown: b,
    onMouseUp: L,
    style: s[S || _ ? S ? "pressed" : "hover" : "default"]
  }, p));
});
Zr.displayName = "Geography";
Zr.propTypes = {
  geography: P.object,
  onMouseEnter: P.func,
  onMouseLeave: P.func,
  onMouseDown: P.func,
  onMouseUp: P.func,
  onFocus: P.func,
  onBlur: P.func,
  style: P.object,
  className: P.string
};
var Rf = reactExports.memo(Zr), yf = ["fill", "stroke", "step", "className"], Br = reactExports.forwardRef(function(t2, n) {
  var e = t2.fill, r = e === void 0 ? "transparent" : e, i = t2.stroke, o = i === void 0 ? "currentcolor" : i, u = t2.step, a = u === void 0 ? [10, 10] : u, c = t2.className, l = c === void 0 ? "" : c, s = Et(t2, yf), f = reactExports.useContext(kt), h = f.path;
  return /* @__PURE__ */ nt.createElement("path", ht({
    ref: n,
    d: h(Sr().step(a)()),
    fill: r,
    stroke: o,
    className: "rsm-graticule ".concat(l)
  }, s));
});
Br.displayName = "Graticule";
Br.propTypes = {
  fill: P.string,
  stroke: P.string,
  step: P.array,
  className: P.string
};
reactExports.memo(Br);
var wf = ["value"], _f = reactExports.createContext(), Ef = {
  x: 0,
  y: 0,
  k: 1,
  transformString: "translate(0 0) scale(1)"
}, uu = function(n) {
  var e = n.value, r = e === void 0 ? Ef : e, i = Et(n, wf);
  return /* @__PURE__ */ nt.createElement(_f.Provider, ht({
    value: r
  }, i));
};
uu.propTypes = {
  x: P.number,
  y: P.number,
  k: P.number,
  transformString: P.string
};
function Sf(t2) {
  var n = t2.center, e = t2.filterZoomEvent, r = t2.onMoveStart, i = t2.onMoveEnd, o = t2.onMove, u = t2.translateExtent, a = u === void 0 ? [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]] : u, c = t2.scaleExtent, l = c === void 0 ? [1, 8] : c, s = t2.zoom, f = s === void 0 ? 1 : s, h = reactExports.useContext(kt), p = h.width, v = h.height, E = h.projection, S = rt(n, 2), y = S[0], M = S[1], m = reactExports.useState({
    x: 0,
    y: 0,
    k: 1
  }), _ = rt(m, 2), x = _[0], N = _[1], C = reactExports.useRef({
    x: 0,
    y: 0,
    k: 1
  }), F = reactExports.useRef(), D = reactExports.useRef(), b = reactExports.useRef(false), L = rt(a, 2), G = L[0], B = L[1], g = rt(G, 2), d = g[0], w = g[1], $ = rt(B, 2), k = $[0], T = $[1], I = rt(l, 2), q = I[0], Z = I[1];
  return reactExports.useEffect(function() {
    var U = Gi(F.current);
    function Y(tt) {
      !r || b.current || r({
        coordinates: E.invert(Zi(p, v, tt.transform)),
        zoom: tt.transform.k
      }, tt);
    }
    function V2(tt) {
      if (!b.current) {
        var bt = tt.transform, an = tt.sourceEvent;
        N({
          x: bt.x,
          y: bt.y,
          k: bt.k,
          dragging: an
        }), o && o({
          x: bt.x,
          y: bt.y,
          zoom: bt.k,
          dragging: an
        }, tt);
      }
    }
    function pt(tt) {
      if (b.current) {
        b.current = false;
        return;
      }
      var bt = E.invert(Zi(p, v, tt.transform)), an = rt(bt, 2), Wr = an[0], Ur = an[1];
      C.current = {
        x: Wr,
        y: Ur,
        k: tt.transform.k
      }, i && i({
        coordinates: [Wr, Ur],
        zoom: tt.transform.k
      }, tt);
    }
    function vt(tt) {
      return e ? e(tt) : tt ? !tt.ctrlKey && !tt.button : false;
    }
    var yt = Vl().filter(vt).scaleExtent([q, Z]).translateExtent([[d, w], [k, T]]).on("start", Y).on("zoom", V2).on("end", pt);
    D.current = yt, U.call(yt);
  }, [p, v, d, w, k, T, q, Z, E, r, o, i, e]), reactExports.useEffect(function() {
    if (!(y === C.current.x && M === C.current.y && f === C.current.k)) {
      var U = E([y, M]), Y = U[0] * f, V2 = U[1] * f, pt = Gi(F.current);
      b.current = true, pt.call(D.current.transform, Gr.translate(p / 2 - Y, v / 2 - V2).scale(f)), N({
        x: p / 2 - Y,
        y: v / 2 - V2,
        k: f
      }), C.current = {
        x: y,
        y: M,
        k: f
      };
    }
  }, [y, M, f, p, v, E]), {
    mapRef: F,
    position: x,
    transformString: "translate(".concat(x.x, " ").concat(x.y, ") scale(").concat(x.k, ")")
  };
}
var Mf = ["center", "zoom", "minZoom", "maxZoom", "translateExtent", "filterZoomEvent", "onMoveStart", "onMove", "onMoveEnd", "className"], au = reactExports.forwardRef(function(t2, n) {
  var e = t2.center, r = e === void 0 ? [0, 0] : e, i = t2.zoom, o = i === void 0 ? 1 : i, u = t2.minZoom, a = u === void 0 ? 1 : u, c = t2.maxZoom, l = c === void 0 ? 8 : c, s = t2.translateExtent, f = t2.filterZoomEvent, h = t2.onMoveStart, p = t2.onMove, v = t2.onMoveEnd, E = t2.className, S = Et(t2, Mf), y = reactExports.useContext(kt), M = y.width, m = y.height, _ = Sf({
    center: r,
    filterZoomEvent: f,
    onMoveStart: h,
    onMove: p,
    onMoveEnd: v,
    scaleExtent: [a, l],
    translateExtent: s,
    zoom: o
  }), x = _.mapRef, N = _.transformString, C = _.position;
  return /* @__PURE__ */ nt.createElement(uu, {
    value: {
      x: C.x,
      y: C.y,
      k: C.k,
      transformString: N
    }
  }, /* @__PURE__ */ nt.createElement("g", {
    ref: x
  }, /* @__PURE__ */ nt.createElement("rect", {
    width: M,
    height: m,
    fill: "transparent"
  }), /* @__PURE__ */ nt.createElement("g", ht({
    ref: n,
    transform: N,
    className: "rsm-zoomable-group ".concat(E)
  }, S))));
});
au.displayName = "ZoomableGroup";
au.propTypes = {
  center: P.array,
  zoom: P.number,
  minZoom: P.number,
  maxZoom: P.number,
  translateExtent: P.arrayOf(P.array),
  onMoveStart: P.func,
  onMove: P.func,
  onMoveEnd: P.func,
  className: P.string
};
var xf = ["id", "fill", "stroke", "strokeWidth", "className"], Yr = reactExports.forwardRef(function(t2, n) {
  var e = t2.id, r = e === void 0 ? "rsm-sphere" : e, i = t2.fill, o = i === void 0 ? "transparent" : i, u = t2.stroke, a = u === void 0 ? "currentcolor" : u, c = t2.strokeWidth, l = c === void 0 ? 0.5 : c, s = t2.className, f = s === void 0 ? "" : s, h = Et(t2, xf), p = reactExports.useContext(kt), v = p.path, E = reactExports.useMemo(function() {
    return v({
      type: "Sphere"
    });
  }, [v]);
  return /* @__PURE__ */ nt.createElement(reactExports.Fragment, null, /* @__PURE__ */ nt.createElement("defs", null, /* @__PURE__ */ nt.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ nt.createElement("path", {
    d: E
  }))), /* @__PURE__ */ nt.createElement("path", ht({
    ref: n,
    d: E,
    fill: o,
    stroke: a,
    strokeWidth: l,
    style: {
      pointerEvents: "none"
    },
    className: "rsm-sphere ".concat(f)
  }, h)));
});
Yr.displayName = "Sphere";
Yr.propTypes = {
  id: P.string,
  fill: P.string,
  stroke: P.string,
  strokeWidth: P.number,
  className: P.string
};
reactExports.memo(Yr);
var Pf = ["coordinates", "children", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"], su = reactExports.forwardRef(function(t2, n) {
  var e = t2.coordinates, r = t2.children, i = t2.onMouseEnter, o = t2.onMouseLeave, u = t2.onMouseDown, a = t2.onMouseUp, c = t2.onFocus, l = t2.onBlur, s = t2.style, f = s === void 0 ? {} : s, h = t2.className, p = h === void 0 ? "" : h, v = Et(t2, Pf), E = reactExports.useContext(kt), S = E.projection, y = reactExports.useState(false), M = rt(y, 2), m = M[0], _ = M[1], x = reactExports.useState(false), N = rt(x, 2), C = N[0], F = N[1], D = S(e), b = rt(D, 2), L = b[0], G = b[1];
  function B(T) {
    F(true), i && i(T);
  }
  function g(T) {
    F(false), m && _(false), o && o(T);
  }
  function d(T) {
    F(true), c && c(T);
  }
  function w(T) {
    F(false), m && _(false), l && l(T);
  }
  function $(T) {
    _(true), u && u(T);
  }
  function k(T) {
    _(false), a && a(T);
  }
  return /* @__PURE__ */ nt.createElement("g", ht({
    ref: n,
    transform: "translate(".concat(L, ", ").concat(G, ")"),
    className: "rsm-marker ".concat(p),
    onMouseEnter: B,
    onMouseLeave: g,
    onFocus: d,
    onBlur: w,
    onMouseDown: $,
    onMouseUp: k,
    style: f[m || C ? m ? "pressed" : "hover" : "default"]
  }, v), r);
});
su.displayName = "Marker";
su.propTypes = {
  coordinates: P.array,
  children: P.oneOfType([P.node, P.arrayOf(P.node)]),
  onMouseEnter: P.func,
  onMouseLeave: P.func,
  onMouseDown: P.func,
  onMouseUp: P.func,
  onFocus: P.func,
  onBlur: P.func,
  style: P.object,
  className: P.string
};
var Nf = ["from", "to", "coordinates", "stroke", "strokeWidth", "fill", "className"], cu = reactExports.forwardRef(function(t2, n) {
  var e = t2.from, r = e === void 0 ? [0, 0] : e, i = t2.to, o = i === void 0 ? [0, 0] : i, u = t2.coordinates, a = t2.stroke, c = a === void 0 ? "currentcolor" : a, l = t2.strokeWidth, s = l === void 0 ? 3 : l, f = t2.fill, h = f === void 0 ? "transparent" : f, p = t2.className, v = p === void 0 ? "" : p, E = Et(t2, Nf), S = reactExports.useContext(kt), y = S.path, M = {
    type: "LineString",
    coordinates: u || [r, o]
  };
  return /* @__PURE__ */ nt.createElement("path", ht({
    ref: n,
    d: y(M),
    className: "rsm-line ".concat(v),
    stroke: c,
    strokeWidth: s,
    fill: h
  }, E));
});
cu.displayName = "Line";
cu.propTypes = {
  from: P.array,
  to: P.array,
  coordinates: P.array,
  stroke: P.string,
  strokeWidth: P.number,
  fill: P.string,
  className: P.string
};
var $f = ["subject", "children", "connectorProps", "dx", "dy", "curve", "className"], lu = reactExports.forwardRef(function(t2, n) {
  var e = t2.subject, r = t2.children, i = t2.connectorProps, o = t2.dx, u = o === void 0 ? 30 : o, a = t2.dy, c = a === void 0 ? 30 : a, l = t2.curve, s = l === void 0 ? 0 : l, f = t2.className, h = f === void 0 ? "" : f, p = Et(t2, $f), v = reactExports.useContext(kt), E = v.projection, S = E(e), y = rt(S, 2), M = y[0], m = y[1], _ = pf(u, c, s);
  return /* @__PURE__ */ nt.createElement("g", ht({
    ref: n,
    transform: "translate(".concat(M + u, ", ").concat(m + c, ")"),
    className: "rsm-annotation ".concat(h)
  }, p), /* @__PURE__ */ nt.createElement("path", ht({
    d: _,
    fill: "transparent",
    stroke: "#000"
  }, i)), r);
});
lu.displayName = "Annotation";
lu.propTypes = {
  subject: P.array,
  children: P.oneOfType([P.node, P.arrayOf(P.node)]),
  dx: P.number,
  dy: P.number,
  curve: P.number,
  connectorProps: P.object,
  className: P.string
};

export { lu as Annotation, iu as ComposableMap, ou as Geographies, Rf as Geography, cu as Line, kt as MapContext, ru as MapProvider, su as Marker, _f as ZoomPanContext, uu as ZoomPanProvider, au as ZoomableGroup, gf as useGeographies, Sf as useZoomPan };
//# sourceMappingURL=index-BA1MGFA4-CgdR_itH-BW2ByzQe.js.map
//# sourceMappingURL=index-BA1MGFA4-CgdR_itH-BW2ByzQe.js.map
